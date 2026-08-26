import { describe, it, expect, beforeEach, vi } from 'vitest'
import {
  getRepositoryContents,
  getFileContent,
  getRepositoryMetadata,
  getLatestCommits,
  getRepositoryStats,
} from '@/lib/github'

// Mock fetch
global.fetch = vi.fn()

describe('GitHub API Integration', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('getRepositoryContents', () => {
    it('fetches repository contents successfully', async () => {
      const mockData = [
        { name: 'README.md', type: 'file', path: 'README.md' },
        { name: 'docs', type: 'dir', path: 'docs' },
      ]

      vi.mocked(global.fetch).mockResolvedValueOnce({
        ok: true,
        json: async () => mockData,
      } as any)

      const result = await getRepositoryContents()

      expect(result).toEqual(mockData)
      expect(global.fetch).toHaveBeenCalledOnce()
    })

    it('handles fetch errors gracefully', async () => {
      vi.mocked(global.fetch).mockResolvedValueOnce({
        ok: false,
        statusText: 'Not Found',
      } as any)

      const result = await getRepositoryContents()

      expect(result).toEqual([])
    })
  })

  describe('getFileContent', () => {
    it('fetches file content successfully', async () => {
      const mockContent = '# WoW Hub\nPlatforma central de WoW'

      vi.mocked(global.fetch).mockResolvedValueOnce({
        ok: true,
        text: async () => mockContent,
      } as any)

      const result = await getFileContent('README.md')

      expect(result).toBe(mockContent)
    })

    it('returns null on 404', async () => {
      vi.mocked(global.fetch).mockResolvedValueOnce({
        ok: false,
      } as any)

      const result = await getFileContent('nonexistent.md')

      expect(result).toBeNull()
    })
  })

  describe('getRepositoryMetadata', () => {
    it('fetches repository metadata', async () => {
      const mockMetadata = {
        name: 'wow-playbook',
        description: 'WoW Playbook Repository',
        stargazers_count: 42,
        forks_count: 12,
        default_branch: 'main',
      }

      vi.mocked(global.fetch).mockResolvedValueOnce({
        ok: true,
        json: async () => mockMetadata,
      } as any)

      const result = await getRepositoryMetadata()

      expect(result).toEqual(mockMetadata)
    })
  })

  describe('getLatestCommits', () => {
    it('fetches latest commits', async () => {
      const mockCommits = [
        { sha: 'abc123', commit: { message: 'Initial commit' } },
        { sha: 'def456', commit: { message: 'Add features' } },
      ]

      vi.mocked(global.fetch).mockResolvedValueOnce({
        ok: true,
        json: async () => mockCommits,
      } as any)

      const result = await getLatestCommits(2)

      expect(result).toEqual(mockCommits)
    })
  })

  describe('getRepositoryStats', () => {
    it('aggregates repository statistics', async () => {
      const mockMetadata = {
        stargazers_count: 100,
        forks_count: 25,
        watchers_count: 50,
        open_issues_count: 5,
        default_branch: 'main',
        updated_at: '2024-08-26T10:00:00Z',
        description: 'Test repo',
        language: 'TypeScript',
      }

      const mockCommit = {
        sha: 'abc123',
        commit: {
          author: { date: '2024-08-26T10:00:00Z' },
        },
      }

      vi.mocked(global.fetch)
        .mockResolvedValueOnce({
          ok: true,
          json: async () => mockMetadata,
        } as any)
        .mockResolvedValueOnce({
          ok: true,
          json: async () => [mockCommit],
        } as any)

      const result = await getRepositoryStats()

      expect(result).toBeDefined()
      expect(result?.stars).toBe(100)
      expect(result?.forks).toBe(25)
    })
  })
})
