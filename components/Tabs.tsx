'use client'

import { useState } from 'react'

interface Tab {
  id: string
  label: string
  content: React.ReactNode
}

interface TabsProps {
  tabs: Tab[]
  defaultTab?: string
}

export default function Tabs({ tabs, defaultTab }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id)

  return (
    <div>
      <div className="flex gap-1 border-b border-wow-line mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-3 text-sm font-semibold border-b-2 transition ${
              activeTab === tab.id
                ? 'border-wow-gold text-wow-purple'
                : 'border-transparent text-wow-muted hover:text-wow-purple'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="animate-fadeIn">
        {tabs.find((t) => t.id === activeTab)?.content}
      </div>
    </div>
  )
}
