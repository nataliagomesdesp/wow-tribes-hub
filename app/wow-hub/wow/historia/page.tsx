'use client'

import { useRef, useState } from 'react'
import { useLang } from '@/lib/i18n/LangContext'
import { translations } from '@/lib/i18n/translations'

export default function Historia() {
  const { lang, t } = useLang()
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  const handlePlay = () => {
    videoRef.current?.play()
    setPlaying(true)
  }

  return (
    <div>
      <div className="mb-4">
        <p className="text-xs font-black uppercase tracking-widest text-wow-purple mb-2">
          WOW GENERAL
        </p>
        <h2 className="text-3xl font-black mb-2">📽️ {t('historia.title')}</h2>
        <p className="text-wow-muted">{t('historia.subtitle')}</p>
      </div>

      {/* VIDEO PLAYER */}
      <div className="bg-wow-ink rounded-lg aspect-video max-w-2xl mb-12 relative overflow-hidden">
        <video
          ref={videoRef}
          src="/videos/intro-wow.mp4"
          controls={playing}
          onPause={() => setPlaying(false)}
          onEnded={() => setPlaying(false)}
          className="w-full h-full object-contain bg-wow-ink"
        />
        {!playing && (
          <button
            onClick={handlePlay}
            className="absolute inset-0 flex items-center justify-center w-full h-full"
            aria-label="Play"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-wow-purple-deep to-wow-purple opacity-80" />
            <span className="relative z-10 w-20 h-20 bg-wow-gold rounded-full flex items-center justify-center hover:scale-110 transition">
              <span className="text-2xl ml-1">▶</span>
            </span>
            <div className="absolute bottom-4 left-4 text-white font-semibold text-sm z-10">
              {t('historia.videoCaption')}
            </div>
          </button>
        )}
      </div>

      {/* TIMELINE */}
      <div className="mb-12">
        <h3 className="text-xl font-bold mb-6 text-wow-ink">{t('historia.timelineTitle')}</h3>
        <div className="space-y-6">
          {translations.historia.timeline.map((item) => (
            <div key={item.year} className="flex gap-6 items-start">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-wow-purple" />
                <div className="w-0.5 h-12 bg-wow-line" />
              </div>
              <div>
                <div className="font-black text-wow-purple">{item.year}</div>
                <div className="font-bold text-wow-ink">{item.title[lang]}</div>
              </div>
            </div>
          ))}
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
