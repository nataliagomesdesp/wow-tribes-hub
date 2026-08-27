import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Verify GitHub webhook signature
function verifyWebhookSignature(
  payload: string,
  signature: string,
  secret: string
): boolean {
  const hash = crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('hex')
  const expectedSignature = `sha256=${hash}`
  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expectedSignature)
  )
}

// Extract section from commit message
function extractSection(message: string): string {
  const match = message.match(/^(feat|fix|update|chore|docs|refactor|style)\((\w+)\):/)
  if (match && match[2]) {
    return match[2]
  }
  // Fallback: try to guess from message
  if (message.includes('onboarding')) return 'onboarding'
  if (message.includes('okr')) return 'okrs'
  if (message.includes('ceremony')) return 'ceremonies'
  if (message.includes('learning')) return 'learning'
  if (message.includes('producto')) return 'producto'
  if (message.includes('tribe')) return 'tribes-squads'
  if (message.includes('audit')) return 'auditoria'
  return 'general'
}

export async function POST(request: NextRequest) {
  try {
    const signature = request.headers.get('x-hub-signature-256') || ''
    const payload = await request.text()

    // Verify webhook signature
    const secret = process.env.GITHUB_WEBHOOK_SECRET || ''
    if (!secret) {
      console.warn('GITHUB_WEBHOOK_SECRET not set, skipping verification')
    } else if (!verifyWebhookSignature(payload, signature, secret)) {
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 401 }
      )
    }

    const event = JSON.parse(payload)

    // Only process push events
    if (event.action === 'opened' || event.action === 'synchronize') {
      // Pull request event - skip for now
      return NextResponse.json({ message: 'PR event ignored' })
    }

    // Process push events
    if (!event.commits) {
      return NextResponse.json({ message: 'No commits in webhook' })
    }

    const commits = event.commits as any[]
    const owner = event.repository.owner.name
    const repo = event.repository.name

    // Save each commit to audit log
    for (const commit of commits) {
      const section = extractSection(commit.message)

      await prisma.auditLog.upsert({
        where: {
          commitHash: commit.id,
        },
        create: {
          author: commit.author.name,
          email: commit.author.email,
          date: new Date(commit.timestamp),
          message: commit.message.split('\n')[0], // First line only
          section,
          repo: `${owner}/${repo}`,
          commitHash: commit.id,
          commitUrl: commit.url,
        },
        update: {
          // If somehow exists, just update timestamp
          updatedAt: new Date(),
        },
      })
    }

    return NextResponse.json({
      message: `${commits.length} commits processed`,
      commits: commits.length,
    })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
