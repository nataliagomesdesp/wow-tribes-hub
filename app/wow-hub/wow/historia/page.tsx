'use client'

import { useEffect, useRef, useState } from 'react'
import { useLang } from '@/lib/i18n/LangContext'
import { translations } from '@/lib/i18n/translations'

export default function Historia() {
  const { lang, t } = useLang()
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoUrl, setVideoUrl] = useState<string | null>(null)
  const [videoLoading, setVideoLoading] = useState(false)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    return () => {
      if (videoUrl) URL.revokeObjectURL(videoUrl)
    }
  }, [videoUrl])

  const handlePlay = async () => {
    if (!videoUrl) {
      setVideoLoading(true)
      const res = await fetch('/videos/intro-wow.mp4')
      const blob = await res.blob()
      setVideoUrl(URL.createObjectURL(blob))
      setVideoLoading(false)
    }
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
        {videoUrl && (
          <video
            ref={videoRef}
            src={videoUrl}
            autoPlay
            controls={playing}
            onPause={() => setPlaying(false)}
            onEnded={() => setPlaying(false)}
            className="w-full h-full object-contain bg-wow-ink"
          />
        )}
        {!playing && (
          <button
            onClick={handlePlay}
            disabled={videoLoading}
            className="absolute inset-0 flex items-center justify-center w-full h-full"
            aria-label="Play"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-wow-purple-deep to-wow-purple opacity-80" />
            <span className="relative z-10 w-20 h-20 bg-wow-gold rounded-full flex items-center justify-center hover:scale-110 transition">
              {videoLoading ? (
                <span className="w-6 h-6 border-2 border-wow-purple-deep border-t-transparent rounded-full animate-spin" />
              ) : (
                <span className="text-2xl ml-1">▶</span>
              )}
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
        <div className="overflow-x-auto pb-2">
          <div className="relative flex justify-between min-w-[640px] pt-6">
            <div className="absolute top-[34px] left-0 right-0 h-0.5 bg-wow-line" />
            {translations.historia.timeline.map((item) => (
              <div key={item.year} className="relative flex flex-col items-center text-center px-2 flex-1">
                <div className="font-black text-wow-purple text-xs whitespace-nowrap mb-2">{item.year}</div>
                <div className="w-4 h-4 rounded-full bg-wow-purple relative z-10" />
                <div className="font-bold text-wow-ink text-sm mt-3 max-w-[120px]">{item.title[lang]}</div>
              </div>
            ))}
          </div>
        </div>
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
