'use client'

import { useLang } from '@/lib/i18n/LangContext'
import { translations } from '@/lib/i18n/translations'

const DRIVE_VIDEO_ID = '11GUcs1Pm1uRLkUAfFvClwb7skAi7uoxM'

export default function Historia() {
  const { lang, t } = useLang()

  return (
    <div>
      <div className="mb-4">
        <p className="text-xs font-black uppercase tracking-widest text-wow-purple mb-2">
          WOW GENERAL
        </p>
        <h2 className="text-3xl font-black mb-2">📽️ {t('historia.title')}</h2>
        <p className="text-wow-muted">{t('historia.subtitle')}</p>
      </div>

      {/* VIDEO PLAYER (Google Drive embed) */}
      <div className="bg-wow-ink rounded-lg aspect-video max-w-2xl mb-2 overflow-hidden">
        <iframe
          src={`https://drive.google.com/file/d/${DRIVE_VIDEO_ID}/preview`}
          className="w-full h-full"
          allow="autoplay"
          allowFullScreen
        />
      </div>
      <p className="text-sm text-wow-muted max-w-2xl mb-12">{t('historia.videoCaption')}</p>

      {/* TIMELINE */}
      <div className="mb-12">
        <h3 className="text-xl font-bold mb-6 text-wow-ink">{t('historia.timelineTitle')}</h3>
        <div className="overflow-x-auto pb-2">
          <div className="relative flex justify-between min-w-[640px]">
            <div className="absolute top-[32px] left-[10%] right-[10%] h-0.5 bg-wow-line overflow-hidden rounded-full">
              <div className="timeline-flow h-full w-1/6 bg-gradient-to-r from-transparent via-wow-gold to-transparent" />
            </div>
            {translations.historia.timeline.map((item) => (
              <div key={item.year} className="relative flex flex-col items-center text-center px-2 flex-1">
                <div className="h-4 flex items-center font-black text-wow-purple text-xs whitespace-nowrap mb-2">{item.year}</div>
                <div className="w-4 h-4 rounded-full bg-wow-purple relative z-10" />
                <div className="font-bold text-wow-ink text-sm mt-3 max-w-[120px]">{item.title[lang]}</div>
              </div>
            ))}
          </div>
        </div>
        <p className="text-xs text-wow-muted mt-2">{t('historia.timelineFootnote')}</p>
      </div>

      {/* 3 CARDS: TRY, LEARN, REPEAT */}
      <div className="grid grid-cols-3 gap-6">
        {[
          { title: 'TRY', desc: translations.historia.cards.try[lang] },
          { title: 'LEARN', desc: translations.historia.cards.learn[lang] },
          { title: 'REPEAT', desc: translations.historia.cards.repeat[lang] },
        ].map((item) => (
          <div
            key={item.title}
            className="bg-gradient-to-br from-wow-purple-deep to-wow-purple rounded-lg p-8 text-white min-h-48 flex flex-col justify-end"
          >
            <div className="text-3xl font-black mb-3">{item.title}</div>
            <p className="text-white/80">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
