'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const wowSections = [
  { icon: '📽️', label: 'Historia', href: '/wow-hub/wow/historia' },
  { icon: '⚙️', label: 'Onboarding', href: '/wow-hub/wow/onboarding' },
  { icon: '📚', label: 'Learning Paths', href: '/wow-hub/wow/learning' },
  { icon: '👥', label: 'Tribes & Squads', href: '/wow-hub/wow/tribes-squads' },
  { icon: '🎯', label: 'OKRs', href: '/wow-hub/wow/okrs' },
  { icon: '📋', label: 'Ceremonies', href: '/wow-hub/wow/ceremonies' },
  { icon: '🛠️', label: 'Jira', href: '/wow-hub/wow/jira' },
  { icon: '🙋', label: 'FAQs', href: '/wow-hub/wow/faqs' },
  { icon: '💬', label: 'WoW Connects', href: '/wow-hub/wow/wowconnects' },
]

const tribes = [
  { emoji: '✈️', name: 'Flights' },
  { emoji: '🏨', name: 'Hotels' },
  { emoji: '🚗', name: 'Cars' },
  { emoji: '📦', name: 'Packages' },
  { emoji: '🎭', name: 'Experiences' },
  { emoji: '💳', name: 'Payments' },
  { emoji: '🔍', name: 'Search' },
  { emoji: '🎯', name: 'Personalization' },
  { emoji: '📈', name: 'Growth' },
  { emoji: '🛠️', name: 'CX Platform' },
  { emoji: '📊', name: 'Data' },
  { emoji: '🏗️', name: 'Platform' },
  { emoji: '🔒', name: 'Security' },
  { emoji: '🤝', name: 'B2B' },
  { emoji: '📱', name: 'Mobile' },
]

export default function Home() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-wow-surface-soft">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-wow-purple shadow-lg">
        <div className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between">
          <button
            onClick={() => router.push('/wow-hub')}
            className="flex items-center gap-2 hover:opacity-80"
          >
            <span className="text-white font-black text-lg">WoW Hub</span>
          </button>
          <div className="flex-1 max-w-xs mx-8">
            <input
              type="search"
              placeholder="Buscar..."
              className="w-full px-3 py-2 rounded bg-white/15 text-white placeholder:text-white/65 text-sm outline-none"
            />
          </div>
          <div className="flex gap-1 bg-white/13 rounded-full p-1">
            {['ES', 'PT', 'EN'].map((lang) => (
              <button
                key={lang}
                className={`px-3 py-1 rounded-full text-sm font-bold transition ${
                  lang === 'ES'
                    ? 'bg-white/95 text-wow-purple'
                    : 'text-white/75 hover:text-white'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden py-20 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-wow-purple-deep via-wow-purple to-wow-purple/25 z-0" />
        <div className="max-w-6xl mx-auto px-8 relative z-10">
          <p className="text-sm font-black uppercase tracking-widest text-wow-gold mb-4">
            Despegar · Way of Working
          </p>
          <h1 className="text-5xl font-black mb-6 leading-tight">
            WoW Hub
          </h1>
          <p className="text-lg text-white/80 max-w-lg mb-8">
            Centraliza todo lo que necesitas saber sobre nuestro Way of Working
          </p>
          <button
            onClick={() => router.push('/wow-hub/wow/historia')}
            className="bg-wow-gold text-wow-ink px-7 py-3 rounded font-bold hover:shadow-lg transition"
          >
            Explorar
          </button>
        </div>
      </section>

      {/* 3 COLUMN GRID */}
      <section className="max-w-6xl mx-auto px-8 py-16">
        <div className="grid grid-cols-3 gap-6">
          {/* WOW GENERAL CARD */}
          <div className="bg-white border-2 border-wow-lilac rounded-xl p-7 hover:border-wow-purple hover:shadow-wow transition-all animate-fadeUp">
            <p className="text-xs font-black uppercase tracking-wider text-wow-purple mb-2">
              WOW GENERAL
            </p>
            <h2 className="text-xl font-black mb-4">WoW General</h2>
            <div className="space-y-2">
              {wowSections.map((sec) => (
                <Link
                  key={sec.label}
                  href={sec.href}
                  className="flex items-center gap-2 text-sm text-wow-muted hover:text-wow-purple transition"
                >
                  <span>{sec.icon}</span>
                  <span>{sec.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* TRIBOS CARD */}
          <div className="bg-white border-2 border-wow-lilac rounded-xl p-7 hover:border-wow-purple hover:shadow-wow transition-all animate-fadeUp animation-delay-200">
            <p className="text-xs font-black uppercase tracking-wider text-wow-purple mb-2">
              TRIBOS
            </p>
            <h2 className="text-xl font-black mb-4">15 Tribos</h2>
            <div className="grid grid-cols-3 gap-1 mb-4">
              {tribes.map((tribe) => (
                <div
                  key={tribe.name}
                  className="aspect-square flex flex-col items-center justify-center bg-wow-surface-soft rounded hover:bg-wow-lilac-light transition"
                >
                  <div className="text-lg">{tribe.emoji}</div>
                  <div className="text-xs text-wow-muted mt-1">{tribe.name}</div>
                </div>
              ))}
            </div>
            <button
              onClick={() => router.push('/wow-hub/tribos')}
              className="w-full border-2 border-wow-purple text-wow-purple rounded py-2 font-bold hover:bg-wow-lilac-light transition"
            >
              Ver todas
            </button>
          </div>

          {/* PRODUCTO CARD */}
          <div className="bg-white border-2 border-wow-lilac rounded-xl p-7 cursor-pointer hover:border-wow-purple hover:shadow-wow transition-all animate-fadeUp animation-delay-300">
            <p className="text-xs font-black uppercase tracking-wider text-wow-purple mb-2">
              PRODUCTO
            </p>
            <h2 className="text-xl font-black mb-4">Hub de Producto</h2>
            <div className="bg-gradient-to-br from-wow-purple-deep to-wow-purple rounded-lg p-7 text-center text-white mb-4 flex-1">
              <div className="text-4xl mb-2">📦</div>
              <div className="font-bold mb-1">Hub de Producto</div>
              <div className="text-xs text-white/70">Inducción · Slack · Acessos</div>
            </div>
            <button className="w-full border-2 border-wow-purple text-wow-purple rounded py-2 font-bold hover:bg-wow-lilac-light transition">
              Entrar
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-wow-ink text-white/45 text-center py-6 text-xs">
        WoW Hub · Despegar · ownia.despegar.io/wow-hub
      </footer>
    </div>
  )
}
