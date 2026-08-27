'use client'

import Tabs from '@/components/Tabs'
import { useLang } from '@/lib/i18n/LangContext'
import { translations } from '@/lib/i18n/translations'

const DEGREED_URL = 'https://eu.degreed.com/pathway/59y2yd349o/pathway?newWindow=true'

export default function LearningPage() {
  const { lang, t } = useLang()
  const g = translations.learning.glossary
  const lp = translations.learning.learningPath
  const sc = translations.learning.slackChannels

  const tabs = [
    {
      id: 'glosario',
      label: t('learning.tabs.glosario'),
      content: (
        <div className="space-y-8">
          <div>
            <h3 className="font-semibold text-wow-purple mb-3">{g.waterfallTitle[lang]}</h3>
            <ul className="space-y-2 list-disc list-inside text-wow-muted text-sm">
              {g.waterfallBullets.map((b, i) => (
                <li key={i}>{b[lang]}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-wow-purple mb-3">{g.agileTitle[lang]}</h3>
            <ul className="space-y-2 list-disc list-inside text-wow-muted text-sm">
              {g.agileBullets.map((b, i) => (
                <li key={i}>{b[lang]}</li>
              ))}
            </ul>
          </div>

          <div className="grid gap-4">
            {g.terms.map((term) => (
              <div key={term.id} className="border border-wow-line rounded-lg p-6 hover:bg-wow-surface-soft transition">
                <h3 className="font-semibold text-wow-purple mb-2">{term.label[lang]}</h3>
                <p className="text-wow-muted text-sm">{term.desc[lang]}</p>
                {'bullets' in term && (
                  <ul className="mt-3 space-y-1 list-disc list-inside text-wow-muted text-sm">
                    {term.bullets.map((b, i) => (
                      <li key={i}>{b[lang]}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 'learning-path',
      label: t('learning.tabs.learningPath'),
      content: (
        <div className="space-y-6">
          <p className="text-wow-muted">{lp.intro[lang]}</p>
          <a
            href={DEGREED_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-wow-line rounded-lg p-8 hover:border-wow-purple hover:shadow-wow transition-all bg-gradient-to-br from-wow-purple-deep to-wow-purple text-white"
          >
            <div className="text-xs uppercase tracking-widest text-wow-gold font-black mb-2">Prosus Academy</div>
            <h3 className="text-xl font-bold mb-2">{lp.beginnerTitle[lang]}</h3>
            <p className="text-white/80 mb-6">{lp.beginnerDesc[lang]}</p>
            <span className="inline-flex items-center gap-2 bg-wow-gold text-wow-ink px-5 py-2 rounded font-bold">
              {lp.ctaLabel[lang]} →
            </span>
          </a>
          <p className="text-sm text-wow-muted italic">{lp.comingSoon[lang]}</p>
        </div>
      ),
    },
    {
      id: 'slack-channels',
      label: t('learning.tabs.slackChannels'),
      content: (
        <div className="space-y-6">
          <div className="flex items-center justify-between border border-wow-gold rounded-lg p-4 bg-wow-surface-soft">
            <span className="font-semibold text-wow-purple">{sc.generalLabel[lang]}</span>
            <code className="text-sm text-wow-muted">{sc.generalChannel}</code>
          </div>

          <div className="border border-wow-line rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-wow-surface-soft text-left">
                <tr>
                  <th className="px-4 py-3 font-semibold text-wow-purple">{sc.tribeColumnLabel[lang]}</th>
                  <th className="px-4 py-3 font-semibold text-wow-purple">{sc.channelColumnLabel[lang]}</th>
                </tr>
              </thead>
              <tbody>
                {sc.tribes.map((tribe) => (
                  <tr key={tribe.name} className="border-t border-wow-line">
                    <td className="px-4 py-3 text-wow-ink">{tribe.name}</td>
                    <td className="px-4 py-3 text-wow-muted">{tribe.channel || '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
  ]

  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm text-wow-muted mb-2">WOW GENERAL</p>
        <h1 className="text-4xl font-bold text-wow-purple">📚 Learning</h1>
        <p className="text-wow-muted mt-3 max-w-2xl">{t('learning.subtitle')}</p>
      </div>

      <Tabs tabs={tabs} defaultTab="glosario" />
    </div>
  )
}
