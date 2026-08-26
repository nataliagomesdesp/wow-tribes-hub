// GitHub API integration for fetching WoW playbooks
// This can be used to fetch and sync playbooks from GitHub repos

const GITHUB_API = 'https://api.github.com'
const GITHUB_OWNER = process.env.NEXT_PUBLIC_GITHUB_OWNER || 'despegar'
const GITHUB_REPO = process.env.NEXT_PUBLIC_GITHUB_REPO || 'wow-playbook'

interface GitHubFile {
  name: string
  path: string
  sha: string
  size: number
  url: string
  html_url: string
  git_url: string
  download_url: string | null
  type: 'file' | 'dir'
  content?: string
  encoding?: string
}

interface PlaybookMetadata {
  title: string
  version: string
  lastUpdated: string
  author: string
  sections: string[]
}

// Fetch repository contents
export async function getRepositoryContents(path = ''): Promise<GitHubFile[]> {
  try {
    const url = `${GITHUB_API}/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${path}`
    const response = await fetch(url, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        // Add auth token if available for higher rate limits
        ...(process.env.GITHUB_TOKEN && {
          'Authorization': `token ${process.env.GITHUB_TOKEN}`
        })
      },
      next: { revalidate: 3600 } // Cache for 1 hour
    })

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.statusText}`)
    }

    return response.json()
  } catch (error) {
    console.error('Error fetching GitHub contents:', error)
    return []
  }
}

// Fetch specific file content
export async function getFileContent(filePath: string): Promise<string | null> {
  try {
    const url = `${GITHUB_API}/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${filePath}`
    const response = await fetch(url, {
      headers: {
        'Accept': 'application/vnd.github.v3.raw',
        ...(process.env.GITHUB_TOKEN && {
          'Authorization': `token ${process.env.GITHUB_TOKEN}`
        })
      },
      next: { revalidate: 3600 }
    })

    if (!response.ok) {
      return null
    }

    return response.text()
  } catch (error) {
    console.error('Error fetching file content:', error)
    return null
  }
}

// Get repository metadata
export async function getRepositoryMetadata(): Promise<any> {
  try {
    const url = `${GITHUB_API}/repos/${GITHUB_OWNER}/${GITHUB_REPO}`
    const response = await fetch(url, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        ...(process.env.GITHUB_TOKEN && {
          'Authorization': `token ${process.env.GITHUB_TOKEN}`
        })
      },
      next: { revalidate: 3600 }
    })

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.statusText}`)
    }

    return response.json()
  } catch (error) {
    console.error('Error fetching repository metadata:', error)
    return null
  }
}

// Get latest commits
export async function getLatestCommits(count = 10): Promise<any[]> {
  try {
    const url = `${GITHUB_API}/repos/${GITHUB_OWNER}/${GITHUB_REPO}/commits?per_page=${count}`
    const response = await fetch(url, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        ...(process.env.GITHUB_TOKEN && {
          'Authorization': `token ${process.env.GITHUB_TOKEN}`
        })
      },
      next: { revalidate: 1800 } // Cache for 30 minutes
    })

    if (!response.ok) {
      return []
    }

    return response.json()
  } catch (error) {
    console.error('Error fetching commits:', error)
    return []
  }
}

// Search files in repository
export async function searchFiles(query: string): Promise<GitHubFile[]> {
  try {
    const url = `${GITHUB_API}/search/code?q=repo:${GITHUB_OWNER}/${GITHUB_REPO}+${encodeURIComponent(query)}`
    const response = await fetch(url, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        ...(process.env.GITHUB_TOKEN && {
          'Authorization': `token ${process.env.GITHUB_TOKEN}`
        })
      },
      next: { revalidate: 3600 }
    })

    if (!response.ok) {
      return []
    }

    const data = await response.json()
    return data.items || []
  } catch (error) {
    console.error('Error searching files:', error)
    return []
  }
}

// Get file stats (for metrics)
export async function getRepositoryStats() {
  try {
    const [metadata, commits] = await Promise.all([
      getRepositoryMetadata(),
      getLatestCommits(1)
    ])

    if (!metadata) return null

    return {
      stars: metadata.stargazers_count,
      forks: metadata.forks_count,
      watchers: metadata.watchers_count,
      issues: metadata.open_issues_count,
      defaultBranch: metadata.default_branch,
      lastUpdate: metadata.updated_at,
      lastCommit: commits[0]?.commit?.author?.date || null,
      description: metadata.description,
      language: metadata.language,
    }
  } catch (error) {
    console.error('Error getting repository stats:', error)
    return null
  }
}
