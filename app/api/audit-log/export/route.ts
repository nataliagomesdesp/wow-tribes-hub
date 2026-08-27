import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(request: NextRequest) {
  try {
    const format = request.nextUrl.searchParams.get('format') || 'json'
    const section = request.nextUrl.searchParams.get('section')
    const repo = request.nextUrl.searchParams.get('repo')

    // Build filter
    const where: any = {}
    if (section) where.section = section
    if (repo) where.repo = repo

    // Fetch all audit logs
    const logs = await prisma.auditLog.findMany({
      where,
      orderBy: { date: 'desc' },
    })

    if (format === 'csv') {
      // Convert to CSV
      const headers = ['Author', 'Email', 'Date', 'Message', 'Section', 'Repository', 'Commit Hash', 'Commit URL']
      const rows = logs.map((log) => [
        `"${log.author}"`,
        `"${log.email || ''}"`,
        log.date.toISOString(),
        `"${log.message.replace(/"/g, '""')}"`, // Escape quotes
        log.section,
        log.repo,
        log.commitHash || '',
        log.commitUrl || '',
      ])

      const csv = [
        headers.join(','),
        ...rows.map((row) => row.join(',')),
      ].join('\n')

      return new NextResponse(csv, {
        headers: {
          'Content-Type': 'text/csv; charset=utf-8',
          'Content-Disposition': 'attachment; filename="audit-log.csv"',
        },
      })
    }

    // Default: JSON
    return NextResponse.json(
      {
        total: logs.length,
        logs: logs.map((log) => ({
          id: log.id,
          author: log.author,
          email: log.email,
          date: log.date,
          message: log.message,
          section: log.section,
          repository: log.repo,
          commitHash: log.commitHash,
          commitUrl: log.commitUrl,
        })),
      },
      {
        headers: {
          'Content-Disposition': 'attachment; filename="audit-log.json"',
        },
      }
    )
  } catch (error) {
    console.error('Export error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
