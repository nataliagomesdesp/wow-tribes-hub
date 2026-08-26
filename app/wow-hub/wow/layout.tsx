'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'

const menuItems = [
  { group: 'WOW GENERAL', items: [
    { icon: '📽️', label: 'Historia', href: '/wow-hub/wow/historia' },
    { icon: '⚙️', label: 'Onboarding', href: '/wow-hub/wow/onboarding' },
    { icon: '📚', label: 'Learning', href: '/wow-hub/wow/learning' },
    { icon: '👥', label: 'Tribes & Squads', href: '/wow-hub/wow/tribes-squads' },
    { icon: '🎯', label: 'OKRs', href: '/wow-hub/wow/okrs' },
    { icon: '📋', label: 'Ceremonies', href: '/wow-hub/wow/ceremonies' },
    { icon: '🛠️', label: 'Jira', href: '/wow-hub/wow/jira' },
    { icon: '🙋', label: 'FAQs', href: '/wow-hub/wow/faqs' },
    { icon: '💬', label: 'WoW Connects', href: '/wow-hub/wow/wowconnects' },
  ]},
  { group: 'PRODUCTO', items: [
    { icon: '📦', label: 'Hub de Producto', href: '/wow-hub/wow/producto' },
  ]},
  { group: 'TRIBOS', items: [
    { icon: '👥', label: 'Tribes & Squads', href: '/wow-hub/tribos' },
  ]},
]

export default function HubLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const pathname = usePathname()
  const [lang, setLang] = useState<'ES' | 'PT' | 'EN'>('ES')
  const [searchQuery, setSearchQuery] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const savedLang = localStorage.getItem('wow-hub-lang') as 'ES' | 'PT' | 'EN' || 'ES'
    setLang(savedLang)
  }, [])

  const handleLanguageChange = (newLang: 'ES' | 'PT' | 'EN') => {
    setLang(newLang)
    localStorage.setItem('wow-hub-lang', newLang)
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/wow-hub/wow/search?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  const getBreadcrumb = () => {
    const parts = pathname.split('/').filter(Boolean)
    if (parts.length >= 3) {
      const section = parts[2]
      const label = menuItems
        .flatMap(g => g.items)
        .find(item => item.href.includes(section))?.label || section
      return (
        <>
          <button onClick={() => router.push('/wow-hub')} className="text-wow-purple font-semibold hover:underline">
            WoW Hub
          </button>
          <span> › </span>
          <span className="text-wow-purple font-semibold">WoW General</span>
          <span> › </span>
          <span className="text-wow-ink font-semibold">{label}</span>
        </>
      )
    }
    return null
  }

  return (
    <div className="min-h-screen bg-wow-surface-soft">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-wow-purple shadow-lg h-16 flex items-center">
        <div className="max-w-full mx-auto px-4 md:px-8 w-full flex items-center justify-between gap-4 md:gap-6">
          <button
            onClick={() => router.push('/wow-hub')}
            className="flex items-center gap-2 flex-shrink-0 hover:opacity-80"
          >
            <span className="text-white font-black text-lg">WoW Hub</span>
          </button>

          <form onSubmit={handleSearch} className="flex-1 max-w-xs hidden sm:block">
            <input
              type="search"
              placeholder="Buscar..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 rounded text-white placeholder:text-white/65 bg-white/15 text-sm outline-none"
            />
          </form>

          <div className="flex-1" />

          <div className="flex gap-1 bg-white/13 rounded-full p-1 flex-shrink-0 hidden sm:flex">
            {(['ES', 'PT', 'EN'] as const).map((l) => (
              <button
                key={l}
                onClick={() => handleLanguageChange(l)}
                className={`px-3 py-1 rounded-full text-xs font-bold transition ${
                  lang === l
                    ? 'bg-white/95 text-wow-purple'
                    : 'text-white/75 hover:text-white'
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white hover:opacity-80 transition"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* BREADCRUMB */}
      <div className="bg-white border-b border-wow-line px-4 md:px-8 py-2 hidden sm:block">
        <div className="max-w-full mx-auto text-xs text-wow-muted flex items-center gap-1">
          {getBreadcrumb()}
        </div>
      </div>

      {/* MAIN LAYOUT */}
      <div className="flex max-h-[calc(100vh-129px)]">
        {/* SIDEBAR - Desktop */}
        <nav className="hidden md:block w-72 min-w-72 bg-white border-r border-wow-line p-3 overflow-y-auto flex-shrink-0">
          {menuItems.map((group) => (
            <div key={group.group}>
              <div className="text-xs font-black uppercase tracking-wider text-wow-muted px-3 py-4">
                {group.group}
              </div>
              <div className="space-y-1">
                {group.items.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center gap-2 px-3 py-2 rounded text-sm transition ${
                        isActive
                          ? 'bg-wow-lilac-light text-wow-purple font-semibold'
                          : 'text-wow-ink hover:bg-wow-surface-soft'
                      }`}
                    >
                      <span>{item.icon}</span>
                      <span>{item.label}</span>
                    </Link>
                  )
                })}
              </div>
            </div>
          ))}
        </nav>

        {/* SIDEBAR - Mobile */}
        {mobileMenuOpen && (
          <nav className="md:hidden w-full sm:w-64 bg-white border-r border-wow-line p-3 overflow-y-auto flex-shrink-0 absolute top-16 left-0 h-[calc(100vh-64px)] z-40">
            {menuItems.map((group) => (
              <div key={group.group}>
                <div className="text-xs font-black uppercase tracking-wider text-wow-muted px-3 py-4">
                  {group.group}
                </div>
                <div className="space-y-1">
                  {group.items.map((item) => {
                    const isActive = pathname === item.href
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center gap-2 px-3 py-2 rounded text-sm transition ${
                          isActive
                            ? 'bg-wow-lilac-light text-wow-purple font-semibold'
                            : 'text-wow-ink hover:bg-wow-surface-soft'
                        }`}
                      >
                        <span>{item.icon}</span>
                        <span>{item.label}</span>
                      </Link>
                    )
                  })}
                </div>
              </div>
            ))}
          </nav>
        )}

        {/* MAIN CONTENT */}
        <main className="flex-1 px-4 md:px-12 py-6 md:py-10 overflow-y-auto animate-fadeIn">
          {children}
        </main>
      </div>
    </div>
  )
}
