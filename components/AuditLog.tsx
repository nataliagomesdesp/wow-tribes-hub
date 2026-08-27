'use client'

import { useEffect, useState } from 'react'
import { getLatestCommits } from '@/lib/github'

interface Commit {
  sha: string
  commit: {
    author: {
      name: string
      email: string
      date: string
    }
    message: string
  }
  html_url: string
}

interface AuditLogEntry {
  sha?: string
  commit?: {
    author: {
      name: string
      email?: string
      date: string
    }
    message: string
  }
  html_url?: string
}

interface AuditLogProps {
  repoPath?: string
  limit?: number
  title?: string
}

export default function AuditLog({
  repoPath = '',
  limit = 20,
  title = 'Controle de Alterações',
}: AuditLogProps) {
  const [commits, setCommits] = useState<Commit[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadCommits() {
      try {
        setLoading(true)
        let data: Commit[] = []

        // Try database first (hybrid approach)
        try {
          const params = new URLSearchParams()
          params.set('limit', limit.toString())
          if (repoPath) params.set('repo', repoPath)

          const dbResponse = await fetch(`/api/audit-log?${params}`)
          if (dbResponse.ok) {
            const dbData = await dbResponse.json()
            data = dbData.logs || []
            console.log('Audit log loaded from database')
          }
        } catch (dbErr) {
          console.warn('Database not available, falling back to GitHub API')
        }

        // If database is empty, fall back to GitHub API
        if (data.length === 0) {
          const githubData = await getLatestCommits(limit)
          data = githubData
          console.log('Audit log loaded from GitHub API')
        }

        setCommits(data)
      } catch (err) {
        setError('Erro ao carregar histórico de alterações')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    loadCommits()
  }, [limit, repoPath])

  if (loading) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="text-wow-muted">Carregando histórico...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-300 text-red-800 px-4 py-3 rounded">
        {error}
      </div>
    )
  }

  if (commits.length === 0) {
    return (
      <div className="text-center py-8 text-wow-muted">
        Nenhuma alteração registrada
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-bold text-wow-purple mb-4">{title}</h3>
      </div>

      <div className="overflow-x-auto border border-wow-line rounded-lg">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-wow-surface-soft border-b border-wow-line">
              <th className="px-6 py-3 text-left text-wow-purple font-semibold">
                Alteração feita por
              </th>
              <th className="px-6 py-3 text-left text-wow-purple font-semibold">
                Data da alteração
              </th>
              <th className="px-6 py-3 text-left text-wow-purple font-semibold">
                O que foi alterado?
              </th>
            </tr>
          </thead>
          <tbody>
            {commits.map((commit) => {
              const date = new Date(commit.commit.author.date)
              const formattedDate = date.toLocaleDateString('pt-BR', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
              })

              return (
                <tr
                  key={commit.sha}
                  className="border-b border-wow-line hover:bg-wow-surface-soft transition"
                >
                  <td className="px-6 py-4 text-wow-ink font-medium">
                    {commit.commit.author.name}
                  </td>
                  <td className="px-6 py-4 text-wow-muted text-xs">
                    {formattedDate}
                  </td>
                  <td className="px-6 py-4 text-wow-ink">
                    <a
                      href={commit.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-wow-purple font-medium hover:underline flex items-center gap-2"
                    >
                      {commit.commit.message.split('\n')[0]}
                      <span className="text-xs">↗</span>
                    </a>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <div className="text-xs text-wow-muted border-t border-wow-line pt-4">
        <p>
          💡 Dados sincronizados do GitHub. Última atualização:{' '}
          {new Date().toLocaleTimeString('pt-BR')}
        </p>
      </div>
    </div>
  )
}
