'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { useState, useMemo } from 'react'

const SEARCH_DATA = [
  {
    id: 'okr-1',
    type: 'OKR',
    title: 'Mejorar Search Relevance',
    excerpt: 'Precision en Top-5 resultados: 95% (actual: 88%). Latencia P99 <100ms (actual: 150ms).',
    section: 'OKRs y FCAs',
    href: '/wow-hub/wow/okrs',
  },
  {
    id: 'cer-1',
    type: 'Ceremony',
    title: 'Sprint Planning',
    excerpt: 'Definición de objetivos y scope para la semana entrante. Semanal los lunes a las 10:00.',
    section: 'Ceremonies',
    href: '/wow-hub/wow/ceremonies',
  },
  {
    id: 'faq-1',
    type: 'FAQ',
    title: '¿Con qué frecuencia se revisan los OKRs?',
    excerpt: 'Los OKRs se revisan cada trimestre. Tenemos Q1, Q2, Q3, Q4. Se discuten en Tribe Sync...',
    section: 'FAQs',
    href: '/wow-hub/wow/faqs',
  },
  {
    id: 'jira-1',
    type: 'Process',
    title: 'Issue Workflow en Jira',
    excerpt: 'Cada issue en Jira sigue este flujo de estados: Backlog → To Do → In Progress → In Review → Done.',
    section: 'Jira & Procesos',
    href: '/wow-hub/wow/jira',
  },
  {
    id: 'learning-1',
    type: 'Path',
    title: 'New Joiner Path',
    excerpt: 'Introducción completa al WoW, estructura organizacional y primeros pasos. Duración: 2 semanas.',
    section: 'Learning Paths',
    href: '/wow-hub/wow/learning',
  },
  {
    id: 'onb-1',
    type: 'Resource',
    title: 'Glosario de Términos',
    excerpt: 'Aprende conceptos fundamentales: Squad, Tribu, OKR, FCA, Waterfall y más.',
    section: 'Onboarding',
    href: '/wow-hub/wow/onboarding',
  },
]

export default function SearchPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const query = searchParams.get('q') || ''
  const filterType = searchParams.get('type') || 'all'
  const [localQuery, setLocalQuery] = useState(query)

  const results = useMemo(() => {
    let filtered = SEARCH_DATA

    if (query) {
      filtered = filtered.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.excerpt.toLowerCase().includes(query.toLowerCase())
      )
    }

    if (filterType !== 'all') {
      filtered = filtered.filter((item) => item.type === filterType)
    }

    return filtered
  }, [query, filterType])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    router.push(`/wow-hub/wow/search?q=${encodeURIComponent(localQuery)}&type=${filterType}`)
  }

  const handleFilterChange = (newType: string) => {
    router.push(`/wow-hub/wow/search?q=${query}&type=${newType}`)
  }

  const allTypes = ['all', ...Array.from(new Set(SEARCH_DATA.map((item) => item.type)))]

  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      OKR: 'bg-purple-100 text-purple-800',
      Ceremony: 'bg-blue-100 text-blue-800',
      FAQ: 'bg-green-100 text-green-800',
      Process: 'bg-orange-100 text-orange-800',
      Path: 'bg-pink-100 text-pink-800',
      Resource: 'bg-teal-100 text-teal-800',
    }
    return colors[type] || 'bg-gray-100 text-gray-800'
  }

  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm text-wow-muted mb-2">BÚSQUEDA</p>
        <h1 className="text-4xl font-bold text-wow-purple">
          {query ? `Resultados para "${query}"` : 'Búsqueda'}
        </h1>
        <p className="text-wow-muted mt-3">
          {results.length} resultado{results.length !== 1 ? 's' : ''} encontrado
          {results.length !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Search Bar */}
      <form onSubmit={handleSearch} className="space-y-4">
        <input
          type="search"
          placeholder="Buscar en WoW Hub..."
          value={localQuery}
          onChange={(e) => setLocalQuery(e.target.value)}
          className="w-full px-6 py-3 rounded-lg border border-wow-line bg-wow-surface text-wow-ink placeholder:text-wow-muted focus:outline-none focus:ring-2 focus:ring-wow-purple"
        />
      </form>

      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        {allTypes.map((type) => (
          <button
            key={type}
            onClick={() => handleFilterChange(type)}
            className={`px-4 py-2 rounded-lg font-semibold text-sm transition ${
              filterType === type
                ? 'bg-wow-purple text-white'
                : 'bg-wow-surface-soft text-wow-purple hover:bg-wow-lilac-light border border-wow-line'
            }`}
          >
            {type === 'all' ? '📌 All Types' : type}
          </button>
        ))}
      </div>

      {query && results.length > 0 ? (
        <div className="space-y-4">
          {results.map((result) => (
            <Link
              key={result.id}
              href={result.href}
              className="block border border-wow-line rounded-lg p-6 hover:shadow-md hover:border-wow-gold transition"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs font-semibold px-2 py-1 rounded ${getTypeColor(result.type)}`}>
                      {result.type}
                    </span>
                    <span className="text-xs text-wow-muted">en {result.section}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-wow-purple hover:underline">{result.title}</h3>
                </div>
                <div className="text-wow-gold text-xl flex-shrink-0">→</div>
              </div>
              <p className="text-wow-muted text-sm line-clamp-2">{result.excerpt}</p>
            </Link>
          ))}
        </div>
      ) : query ? (
        <div className="bg-wow-surface-soft border border-wow-line rounded-lg p-12 text-center">
          <p className="text-4xl mb-4">🔍</p>
          <h2 className="text-2xl font-bold text-wow-purple mb-2">Sin resultados</h2>
          <p className="text-wow-muted mb-6 max-w-md mx-auto">
            No encontramos nada que coincida con "{query}". Intenta con otras palabras clave o explora las secciones directamente.
          </p>
          <div className="space-y-2 text-sm">
            <p className="text-wow-muted">Sugerencias:</p>
            <ul className="text-wow-purple font-semibold space-y-1">
              <li>• Verifica la ortografía</li>
              <li>• Prueba términos más generales</li>
              <li>• Navega por las secciones principales</li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="bg-gradient-to-br from-wow-purple-100 to-wow-lilac-100 rounded-lg p-12 text-center">
          <p className="text-4xl mb-4">🔎</p>
          <h2 className="text-2xl font-bold text-wow-purple mb-2">Usa el buscador</h2>
          <p className="text-wow-muted">
            Escribe una palabra clave para buscar en todo el WoW Hub: OKRs, ceremonies, procesos, y más.
          </p>
        </div>
      )}

      {/* Popular Searches */}
      {!query && (
        <div className="mt-12 border-t border-wow-line pt-8">
          <h2 className="text-2xl font-bold text-wow-purple mb-6">📌 Búsquedas Populares</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {['OKRs', 'Ceremonies', 'Jira', 'Learning', 'Squad', 'Planning'].map((search) => (
              <Link
                key={search}
                href={`/wow-hub/wow/search?q=${search}`}
                className="border border-wow-line rounded-lg p-4 hover:bg-wow-surface-soft transition text-center"
              >
                <p className="font-semibold text-wow-purple hover:underline">{search}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
