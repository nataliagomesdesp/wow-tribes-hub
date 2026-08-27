'use client'

import Link from 'next/link'
import { useLang } from '@/lib/i18n/LangContext'
import { translations, type Entry } from '@/lib/i18n/translations'

const LANE_ORDER = ['nmm', 'tribe', 'squad'] as const

const LANE_STYLES: Record<(typeof LANE_ORDER)[number], string> = {
  nmm: 'bg-wow-lilac-light border-wow-purple text-wow-purple',
  tribe: 'bg-rose-50 border-rose-300 text-rose-700',
  squad: 'bg-amber-50 border-amber-400 text-amber-700',
}

function renderDetails(text: string, linkLabel: string) {
  if (!text.includes('{link}')) return text
  const [before, after] = text.split('{link}')
  return (
    <>
      {before}
      <Link href="/wow-hub/wow/learning" className="text-wow-purple underline hover:no-underline">
        {linkLabel}
      </Link>
      {after}
    </>
  )
}

export default function CeremoniesPage() {
  const { lang } = useLang()
  const c = translations.ceremonies

  return (
    <div className="space-y-10">
      <div>
        <p className="text-sm text-wow-muted mb-2">WOW GENERAL</p>
        <h1 className="text-2xl md:text-3xl font-bold text-wow-purple">📋 {c.title[lang]}</h1>
        <p className="text-wow-muted mt-3 max-w-2xl">{c.subtitle[lang]}</p>
      </div>

      {/* FLOW DIAGRAM */}
      <div className="space-y-5 border border-wow-line rounded-lg p-6 overflow-x-auto">
        {LANE_ORDER.map((laneKey) => {
          const items = c.items.filter((item) => item.lane === laneKey)
          return (
            <div key={laneKey} className="flex flex-col sm:flex-row sm:items-center gap-3 min-w-max">
              <div className="w-full sm:w-44 flex-shrink-0 text-xs font-black uppercase tracking-wider text-wow-muted">
                {c.lanes[laneKey][lang]}
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {items.map((item, idx) => (
                  <div key={item.id} className="flex items-center gap-2">
                    <span className={`px-3 py-2 rounded-lg border text-sm font-semibold whitespace-nowrap ${LANE_STYLES[laneKey]}`}>
                      {item.name}
                    </span>
                    {idx < items.length - 1 && <span className="text-wow-muted">→</span>}
                  </div>
                ))}
              </div>
            </div>
          )
        })}
        <p className="text-xs text-wow-muted pt-2 border-t border-wow-line">{c.workingCycleLabel[lang]}: {c.lanes.squad[lang]}</p>
      </div>

      {/* CEREMONY DETAILS TABLE */}
      <div className="border border-wow-line rounded-lg overflow-x-auto">
        <table className="w-full text-sm min-w-[760px]">
          <thead className="bg-wow-surface-soft text-left">
            <tr>
              <th className="px-4 py-3 font-semibold text-wow-purple">{c.tableHeaders.ceremony[lang]}</th>
              <th className="px-4 py-3 font-semibold text-wow-purple">{c.tableHeaders.participants[lang]}</th>
              <th className="px-4 py-3 font-semibold text-wow-purple">{c.tableHeaders.content[lang]}</th>
              <th className="px-4 py-3 font-semibold text-wow-purple">{c.tableHeaders.details[lang]}</th>
            </tr>
          </thead>
          <tbody>
            {c.items.map((item) => (
              <tr key={item.id} className="border-t border-wow-line align-top">
                <td className="px-4 py-3 font-semibold text-wow-ink whitespace-nowrap">{item.name}</td>
                <td className="px-4 py-3 text-wow-muted">{item.participants[lang]}</td>
                <td className="px-4 py-3 text-wow-muted">
                  <ul className="list-disc list-inside space-y-1">
                    {item.content.map((entry: Entry, i: number) => (
                      <li key={i}>{entry[lang]}</li>
                    ))}
                  </ul>
                </td>
                <td className="px-4 py-3 text-wow-muted">{renderDetails(item.details[lang], c.slackChannelsLinkLabel[lang])}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
