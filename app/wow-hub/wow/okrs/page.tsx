'use client'

import { useLang } from '@/lib/i18n/LangContext'
import { translations } from '@/lib/i18n/translations'

const OKR_HUB_URL = 'https://ownia.despegar.io/tribes-okr-hub/'

export default function OKRsPage() {
  const { lang, t } = useLang()
  const okrs = translations.okrs

  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm text-wow-muted mb-2">WOW GENERAL</p>
        <h1 className="text-4xl font-bold text-wow-purple">🎯 {t('okrs.title')}</h1>
      </div>

      <a
        href={OKR_HUB_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="block max-w-2xl border border-wow-line rounded-lg p-8 hover:border-wow-purple hover:shadow-wow transition-all bg-gradient-to-br from-wow-purple-deep to-wow-purple text-white"
      >
        <div className="text-xs uppercase tracking-widest text-wow-gold font-black mb-2">Ownia</div>
        <h3 className="text-xl font-bold mb-2">{okrs.hubName[lang]}</h3>
        <p className="text-white/80 mb-6">{okrs.description[lang]}</p>
        <span className="inline-flex items-center gap-2 bg-wow-gold text-wow-ink px-5 py-2 rounded font-bold">
          {okrs.ctaLabel[lang]} →
        </span>
      </a>
    </div>
  )
}
