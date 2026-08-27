import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(request: NextRequest) {
  try {
    const limit = parseInt(request.nextUrl.searchParams.get('limit') || '50')
    const section = request.nextUrl.searchParams.get('section')
    const repo = request.nextUrl.searchParams.get('repo')

    // Build filter
    const where: any = {}
    if (section) where.section = section
    if (repo) where.repo = repo

    // Fetch audit logs
    const logs = await prisma.auditLog.findMany({
      where,
      orderBy: { date: 'desc' },
      take: limit,
      select: {
        id: true,
        author: true,
        email: true,
        date: true,
        message: true,
        section: true,
        repo: true,
        commitHash: true,
        commitUrl: true,
      },
    })

    return NextResponse.json({
      total: logs.length,
      logs: logs.map((log) => ({
        sha: log.commitHash,
        commit: {
          author: {
            name: log.author,
            email: log.email,
            date: log.date.toISOString(),
          },
          message: log.message,
        },
        html_url: log.commitUrl,
      })),
    })
  } catch (error) {
    console.error('Audit log error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
