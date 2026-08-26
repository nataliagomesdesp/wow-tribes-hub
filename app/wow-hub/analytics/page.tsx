'use client'

import { useState } from 'react'

const METRICS_DATA = {
  overview: [
    { label: 'Total Users', value: '12.5M', change: '+22%', icon: '👥' },
    { label: 'Active Teams', value: '71', change: '+8', icon: '👨‍💼' },
    { label: 'Documents', value: '4.2k', change: '+156', icon: '📄' },
    { label: 'Search Queries', value: '2.1M', change: '+35%', icon: '🔍' },
  ],
  engagement: [
    { label: 'Avg Session Time', value: '12.5 min', change: '+2.1 min', icon: '⏱️' },
    { label: 'Pages per Session', value: '5.3', change: '+0.8', icon: '📖' },
    { label: 'Return Visitor Rate', value: '68%', change: '+5%', icon: '🔄' },
    { label: 'Mobile Users', value: '78%', change: '+3%', icon: '📱' },
  ],
  content: [
    { section: 'Historia', views: 2400, bounce: '12%', avgTime: '3.2 min' },
    { section: 'OKRs y FCAs', views: 1897, bounce: '15%', avgTime: '4.1 min' },
    { section: 'Ceremonies', views: 1654, bounce: '8%', avgTime: '5.3 min' },
    { section: 'FAQs', views: 1200, bounce: '22%', avgTime: '2.1 min' },
    { section: 'Learning Paths', views: 1890, bounce: '18%', avgTime: '6.5 min' },
    { section: 'Tribes & Squads', views: 1456, bounce: '10%', avgTime: '4.8 min' },
  ],
}

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState('week')

  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm text-wow-muted mb-2">PLATAFORMA</p>
        <h1 className="text-4xl font-bold text-wow-purple">📊 Analytics</h1>
        <p className="text-wow-muted mt-3">
          Métricas y análisis de uso del WoW Hub.
        </p>
      </div>

      {/* Time Range Filter */}
      <div className="flex gap-2">
        {['day', 'week', 'month', 'quarter'].map((range) => (
          <button
            key={range}
            onClick={() => setTimeRange(range)}
            className={`px-4 py-2 rounded-lg font-semibold text-sm transition capitalize ${
              timeRange === range
                ? 'bg-wow-purple text-white'
                : 'bg-wow-surface-soft text-wow-purple hover:bg-wow-lilac-light'
            }`}
          >
            {range}
          </button>
        ))}
      </div>

      {/* Overview Cards */}
      <div className="grid md:grid-cols-4 gap-4">
        {METRICS_DATA.overview.map((metric) => (
          <div key={metric.label} className="bg-wow-surface border border-wow-line rounded-lg p-6">
            <div className="flex items-start justify-between mb-3">
              <span className="text-3xl">{metric.icon}</span>
              <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded">
                {metric.change}
              </span>
            </div>
            <p className="text-wow-muted text-sm mb-1">{metric.label}</p>
            <p className="text-3xl font-bold text-wow-purple">{metric.value}</p>
          </div>
        ))}
      </div>

      {/* Engagement Metrics */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="border border-wow-line rounded-lg p-6">
          <h3 className="text-lg font-bold text-wow-purple mb-6">👁️ Engagement</h3>
          <div className="space-y-4">
            {METRICS_DATA.engagement.map((metric) => (
              <div key={metric.label} className="flex items-center justify-between p-3 hover:bg-wow-surface-soft rounded transition">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{metric.icon}</span>
                  <div>
                    <p className="text-sm text-wow-muted">{metric.label}</p>
                    <p className="font-bold text-wow-purple">{metric.value}</p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded">
                  {metric.change}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="border border-wow-line rounded-lg p-6">
          <h3 className="text-lg font-bold text-wow-purple mb-6">🎯 Top Referrers</h3>
          <div className="space-y-3">
            {[
              { source: 'Internal Links', percentage: 45, count: 5400 },
              { source: 'Direct', percentage: 28, count: 3360 },
              { source: 'Search', percentage: 15, count: 1800 },
              { source: 'Social', percentage: 8, count: 960 },
              { source: 'Email', percentage: 4, count: 480 },
            ].map((item) => (
              <div key={item.source}>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm font-semibold text-wow-purple">{item.source}</p>
                  <span className="text-xs text-wow-muted">{item.count.toLocaleString()} visits</span>
                </div>
                <div className="w-full bg-wow-line rounded-full overflow-hidden h-2">
                  <div
                    className="h-full bg-gradient-to-r from-wow-purple to-wow-lilac"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
                <div className="text-xs text-wow-muted mt-1">{item.percentage}%</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content Performance */}
      <div className="border border-wow-line rounded-lg p-6">
        <h3 className="text-lg font-bold text-wow-purple mb-6">📄 Content Performance</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-wow-line">
                <th className="text-left py-3 px-4 text-wow-muted font-semibold">Section</th>
                <th className="text-right py-3 px-4 text-wow-muted font-semibold">Views</th>
                <th className="text-right py-3 px-4 text-wow-muted font-semibold">Bounce Rate</th>
                <th className="text-right py-3 px-4 text-wow-muted font-semibold">Avg Time</th>
              </tr>
            </thead>
            <tbody>
              {METRICS_DATA.content.map((row) => (
                <tr key={row.section} className="border-b border-wow-line hover:bg-wow-surface-soft transition">
                  <td className="py-4 px-4 font-semibold text-wow-purple">{row.section}</td>
                  <td className="py-4 px-4 text-right text-wow-ink">
                    {row.views.toLocaleString()}
                  </td>
                  <td className="py-4 px-4 text-right">
                    <span className={`text-xs font-semibold px-2 py-1 rounded ${
                      parseFloat(row.bounce) < 15
                        ? 'bg-green-100 text-green-800'
                        : parseFloat(row.bounce) < 20
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {row.bounce}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-right text-wow-muted">{row.avgTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Trend Chart */}
      <div className="border border-wow-line rounded-lg p-6">
        <h3 className="text-lg font-bold text-wow-purple mb-6">📈 Daily Views Trend</h3>
        <div className="flex items-end justify-between gap-2 h-64">
          {Array.from({ length: 30 }).map((_, i) => {
            const height = Math.floor(Math.random() * 100) + 20
            return (
              <div
                key={i}
                className="flex-1 bg-gradient-to-t from-wow-purple to-wow-lilac rounded-t"
                style={{ height: `${height}%` }}
                title={`Day ${i + 1}`}
              />
            )
          })}
        </div>
        <p className="text-xs text-wow-muted mt-4 text-center">Last 30 days</p>
      </div>

      {/* Goal Completion */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="border border-wow-gold rounded-lg p-6 bg-wow-surface-soft">
          <h3 className="text-lg font-bold text-wow-purple mb-4">🎯 Q3 Goals</h3>
          <div className="space-y-4">
            {[
              { goal: 'Increase DAU by 25%', progress: 18 },
              { goal: 'Improve avg session time', progress: 65 },
              { goal: 'Reduce bounce rate', progress: 42 },
              { goal: 'Mobile conversion +20%', progress: 35 },
            ].map((item) => (
              <div key={item.goal}>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm font-semibold text-wow-purple">{item.goal}</p>
                  <span className="text-xs font-bold text-wow-gold">{item.progress}%</span>
                </div>
                <div className="w-full bg-wow-line rounded-full overflow-hidden h-2">
                  <div
                    className="h-full bg-wow-gold"
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border border-wow-line rounded-lg p-6">
          <h3 className="text-lg font-bold text-wow-purple mb-4">💡 Insights</h3>
          <div className="space-y-3">
            <div className="border-l-4 border-wow-gold pl-4 py-2">
              <p className="text-sm text-wow-muted">
                <strong className="text-wow-purple">Peak Hours:</strong> 10am-12pm and 3pm-5pm (EST)
              </p>
            </div>
            <div className="border-l-4 border-wow-gold pl-4 py-2">
              <p className="text-sm text-wow-muted">
                <strong className="text-wow-purple">Popular Days:</strong> Tuesday, Wednesday, Thursday
              </p>
            </div>
            <div className="border-l-4 border-wow-gold pl-4 py-2">
              <p className="text-sm text-wow-muted">
                <strong className="text-wow-purple">Most Shared Section:</strong> Ceremonies (42% of social shares)
              </p>
            </div>
            <div className="border-l-4 border-wow-gold pl-4 py-2">
              <p className="text-sm text-wow-muted">
                <strong className="text-wow-purple">Search Conversion:</strong> 8.2% of searches lead to action
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
