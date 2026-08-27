'use client'

import { Fragment } from 'react'
import Link from 'next/link'
import { useLang } from '@/lib/i18n/LangContext'
import { translations, type Entry } from '@/lib/i18n/translations'

type Lane = 'nmm' | 'tribe' | 'squad'

const LANE_ORDER: Lane[] = ['nmm', 'tribe', 'squad']
const WEEK_COUNT = 4

const LANE_STYLES: Record<Lane, string> = {
  nmm: 'bg-wow-lilac-light border-wow-purple text-wow-purple',
  tribe: 'bg-rose-50 border-rose-300 text-rose-700',
  squad: 'bg-amber-50 border-amber-400 text-amber-700',
}

const LANE_BADGE: Record<Lane, string> = {
  nmm: 'bg-wow-lilac-light text-wow-purple',
  tribe: 'bg-rose-100 text-rose-700',
  squad: 'bg-amber-100 text-amber-700',
}

const LANE_ROW_BORDER: Record<Lane, string> = {
  nmm: 'border-l-4 border-l-wow-purple',
  tribe: 'border-l-4 border-l-rose-400',
  squad: 'border-l-4 border-l-amber-400',
}

// Approximate week each ceremony lands on within a 4-week cycle (1-indexed, end exclusive).
// "continuous" items (Commercial Sync, Daily/Weekly) render as a dashed bar instead of a solid box.
const WEEK_POSITIONS: Record<string, { start: number; end: number; continuous?: boolean }> = {
  'committee-mrm': { start: 1, end: 2 },
  'commercial-sync': { start: 1, end: 5, continuous: true },
  'tribe-team-sync': { start: 2, end: 3 },
  'strategic-tribe-sync': { start: 3, end: 4 },
  planning: { start: 1, end: 2 },
  'daily-weekly': { start: 1, end: 3, continuous: true },
  'review-demo': { start: 3, end: 4 },
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

      {/* WEEKLY FLOW DIAGRAM */}
      <div className="border border-wow-line rounded-lg p-6 overflow-x-auto">
        <div
          className="grid gap-y-4 min-w-[640px]"
          style={{ gridTemplateColumns: `140px repeat(${WEEK_COUNT}, minmax(0,1fr))` }}
        >
          <div />
          {Array.from({ length: WEEK_COUNT }).map((_, i) => (
            <div key={i} className="text-center text-[11px] font-black text-wow-muted uppercase tracking-wide">
              {c.weekLabel[lang]}{i + 1}
            </div>
          ))}

          {LANE_ORDER.map((laneKey) => (
            <Fragment key={laneKey}>
              <div className="text-xs font-black uppercase tracking-wider text-wow-muted flex items-center">
                {c.lanes[laneKey][lang]}
              </div>
              <div className="relative h-10" style={{ gridColumn: `2 / span ${WEEK_COUNT}` }}>
                {c.items
                  .filter((item) => item.lane === laneKey && WEEK_POSITIONS[item.id])
                  .map((item) => {
                    const pos = WEEK_POSITIONS[item.id]
                    return (
                      <div
                        key={item.id}
                        className={`absolute top-1/2 -translate-y-1/2 flex items-center justify-center rounded-lg text-xs font-semibold px-2 text-center overflow-hidden whitespace-nowrap ${
                          pos.continuous
                            ? `border-2 border-dashed bg-transparent h-6 ${LANE_STYLES[laneKey]}`
                            : `border h-9 ${LANE_STYLES[laneKey]}`
                        }`}
                        style={{
                          left: `${((pos.start - 1) / WEEK_COUNT) * 100}%`,
                          width: `${((pos.end - pos.start) / WEEK_COUNT) * 100}%`,
                        }}
                      >
                        {item.name}
                      </div>
                    )
                  })}
              </div>
            </Fragment>
          ))}
        </div>
        <p className="text-[11px] text-wow-muted mt-4 pt-3 border-t border-wow-line">{c.adHocNote[lang]}</p>
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
            {c.items.map((item) => {
              const lane = item.lane as Lane
              return (
                <tr key={item.id} className={`border-t border-wow-line align-top ${LANE_ROW_BORDER[lane]}`}>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase mb-1 ${LANE_BADGE[lane]}`}>
                      {c.lanes[lane][lang]}
                    </span>
                    <div className="font-semibold text-wow-ink">{item.name}</div>
                  </td>
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
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
