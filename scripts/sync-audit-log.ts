/**
 * Script para sincronizar commits do GitHub para o banco de dados Aurora PostgreSQL
 *
 * Uso:
 * npx ts-node scripts/sync-audit-log.ts
 *
 * Este script:
 * 1. Puxa todos os commits do repositório
 * 2. Extrai informações de cada commit
 * 3. Salva no banco de dados (upsert para evitar duplicatas)
 * 4. Mostra progresso
 */

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function extractSection(message: string): Promise<string> {
  const match = message.match(/^(feat|fix|update|chore|docs|refactor|style)\((\w+)\):/)
  if (match && match[2]) {
    return match[2]
  }
  if (message.includes('onboarding')) return 'onboarding'
  if (message.includes('okr')) return 'okrs'
  if (message.includes('ceremony')) return 'ceremonies'
  if (message.includes('learning')) return 'learning'
  if (message.includes('producto')) return 'producto'
  if (message.includes('tribe')) return 'tribes-squads'
  if (message.includes('audit')) return 'auditoria'
  return 'general'
}

async function syncAuditLog() {
  try {
    console.log('🔄 Iniciando sincronização do audit log...')

    const owner = process.env.NEXT_PUBLIC_GITHUB_OWNER || 'despegar'
    const repo = process.env.NEXT_PUBLIC_GITHUB_REPO || 'wow-playbook'
    const token = process.env.GITHUB_TOKEN

    if (!token) {
      console.warn('⚠️  GITHUB_TOKEN não configurado. Usando API pública (limite baixo).')
    }

    const repoUrl = `${owner}/wow-tribes-hub`
    console.log(`📦 Sincronizando commits de: ${repoUrl}`)

    let allCommits: any[] = []
    let page = 1
    let hasMore = true

    // Paginate through all commits
    while (hasMore && page <= 10) {
      const url = `https://api.github.com/repos/${repoUrl}/commits?per_page=100&page=${page}`
      const headers: any = {
        'Accept': 'application/vnd.github.v3+json',
      }

      if (token) {
        headers['Authorization'] = `token ${token}`
      }

      const response = await fetch(url, { headers })

      if (!response.ok) {
        console.error(`❌ Erro ao buscar commits (página ${page}):`, response.status)
        break
      }

      const commits = await response.json()
      if (Array.isArray(commits) && commits.length > 0) {
        allCommits = allCommits.concat(commits)
        console.log(`✅ Página ${page}: ${commits.length} commits carregados (total: ${allCommits.length})`)
        page++
      } else {
        hasMore = false
      }
    }

    console.log(`\n📊 Total de commits para sincronizar: ${allCommits.length}`)

    // Save to database
    let saved = 0
    let skipped = 0

    for (const commit of allCommits) {
      try {
        const section = await extractSection(commit.commit.message)

        const result = await prisma.auditLog.upsert({
          where: {
            commitHash: commit.sha,
          },
          create: {
            author: commit.commit.author.name,
            email: commit.commit.author.email,
            date: new Date(commit.commit.author.date),
            message: commit.commit.message.split('\n')[0],
            section,
            repo: repoUrl,
            commitHash: commit.sha,
            commitUrl: commit.html_url,
          },
          update: {
            updatedAt: new Date(),
          },
        })

        saved++

        if (saved % 10 === 0) {
          console.log(`💾 ${saved} commits salvos...`)
        }
      } catch (err) {
        skipped++
        console.error(`⚠️  Erro ao salvar commit ${commit.sha}:`, err)
      }
    }

    console.log(`\n✅ Sincronização concluída!`)
    console.log(`   - Salvos: ${saved}`)
    console.log(`   - Skipped: ${skipped}`)
    console.log(`   - Total: ${allCommits.length}`)
  } catch (error) {
    console.error('❌ Erro na sincronização:', error)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

// Run sync
syncAuditLog()
