import Tabs from '@/components/Tabs'

const OKRS_DATA = [
  {
    id: 'q3-2025',
    title: 'Q3 2025 - OKRs & FCAs',
    okrs: [
      {
        title: 'Mejorar Search Relevance',
        owner: 'Search Tribe',
        keyResults: [
          '📊 Precision en Top-5 resultados: 95% (actual: 88%)',
          '⏱️ Latencia P99 <100ms (actual: 150ms)',
          '🎯 User satisfaction score: 4.5/5 (actual: 3.8)',
        ],
        progress: 65,
        status: 'on-track',
      },
      {
        title: 'Aumentar Payment Success Rate',
        owner: 'Payments Tribe',
        keyResults: [
          '✅ Reducir declined transactions a 2% (actual: 3.5%)',
          '🏦 Soportar 5 nuevos payment methods (actual: 2)',
          '🛡️ Fraud rate < 0.5% (actual: 0.8%)',
        ],
        progress: 45,
        status: 'at-risk',
      },
      {
        title: 'Escalar Platform Infrastructure',
        owner: 'Platform Tribe',
        keyResults: [
          '🚀 Deploy frequency: 10+ por día (actual: 5)',
          '⚡ API response time P95 <200ms (actual: 280ms)',
          '🔧 Reduce rolling deployments a 0s downtime (actual: 15s)',
        ],
        progress: 80,
        status: 'on-track',
      },
      {
        title: 'Expand Experiences Portfolio',
        owner: 'Experiences Tribe',
        keyResults: [
          '✈️ +50% bookings year-over-year (actual: +32%)',
          '🏨 Agregar 10k nuevos properties (actual: 3k)',
          '⭐ Mantener rating >4.7 stars (actual: 4.6)',
        ],
        progress: 40,
        status: 'behind',
      },
    ],
  },
  {
    id: 'q4-2025',
    title: 'Q4 2025 - OKRs (Planificación)',
    okrs: [
      {
        title: 'AI-Powered Recommendations',
        owner: 'Search Tribe',
        keyResults: [
          '🤖 Implementar ML models para personalization',
          '📈 CTR increase +25%',
          '✓ Launch en 3+ mercados',
        ],
        progress: 0,
        status: 'planning',
      },
      {
        title: 'Blockchain Integration (Pilot)',
        owner: 'Payments Tribe',
        keyResults: [
          '⛓️ Piloto con stablecoin',
          '🌐 Soporte en 2 mercados emergentes',
          '📊 Validar viabilidad técnica y comercial',
        ],
        progress: 0,
        status: 'planning',
      },
    ],
  },
]

const FCAS = {
  funcionality: {
    icon: '✨',
    title: 'Funcionalidad',
    description: 'Nuevas features y capacidades que agregamos al producto.',
    examples: ['Nuevos payment methods', 'Mejorar UI de búsqueda', 'Recomendaciones personalizadas'],
  },
  quality: {
    icon: '🎯',
    title: 'Calidad',
    description: 'Robustez, estabilidad y confiabilidad del sistema.',
    examples: ['Reducir bugs críticos', 'Mejorar test coverage', 'Performance optimization'],
  },
  architecture: {
    icon: '🏗️',
    title: 'Arquitectura',
    description: 'Salud técnica, escalabilidad y sostenibilidad del código.',
    examples: ['Refactorización de módulos', 'Deuda técnica', 'Migración a nuevas tecnologías'],
  },
}

function ProgressBar({ progress }: { progress: number }) {
  const getColor = () => {
    if (progress >= 80) return 'bg-green-500'
    if (progress >= 50) return 'bg-blue-500'
    return 'bg-orange-500'
  }

  return (
    <div className="w-full bg-wow-line rounded-full overflow-hidden h-2">
      <div className={`${getColor()} h-full transition-all`} style={{ width: `${progress}%` }} />
    </div>
  )
}

function StatusBadge({ status }: { status: string }) {
  const styles = {
    'on-track': 'bg-green-100 text-green-800',
    'at-risk': 'bg-yellow-100 text-yellow-800',
    'behind': 'bg-red-100 text-red-800',
    'planning': 'bg-blue-100 text-blue-800',
  }

  const labels = {
    'on-track': '✓ On Track',
    'at-risk': '⚠ At Risk',
    'behind': '✗ Behind',
    'planning': '📋 Planning',
  }

  return (
    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${styles[status as keyof typeof styles]}`}>
      {labels[status as keyof typeof labels]}
    </span>
  )
}

export default function OKRsPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm text-wow-muted mb-2">WOW GENERAL</p>
        <h1 className="text-4xl font-bold text-wow-purple">🎯 OKRs y FCAs</h1>
        <p className="text-wow-muted mt-3 max-w-2xl">
          Objectivos y Resultados Clave (OKRs) junto con dimensiones de Funcionalidad, Calidad y Arquitectura (FCAs).
        </p>
      </div>

      {/* OKRs Tabs */}
      <Tabs
        tabs={OKRS_DATA.map((quarter) => ({
          id: quarter.id,
          label: quarter.title,
          content: (
            <div className="space-y-6">
              {quarter.okrs.map((okr, idx) => (
                <div key={idx} className="border border-wow-line rounded-lg p-6">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-wow-purple">{okr.title}</h3>
                      <p className="text-sm text-wow-muted mt-1">👤 Owner: {okr.owner}</p>
                    </div>
                    <StatusBadge status={okr.status} />
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <p className="text-sm font-semibold text-wow-ink">Progreso</p>
                        <span className="text-sm font-bold text-wow-purple">{okr.progress}%</span>
                      </div>
                      <ProgressBar progress={okr.progress} />
                    </div>

                    <div className="pt-2 border-t border-wow-line">
                      <p className="text-sm font-semibold text-wow-ink mb-3">Key Results:</p>
                      <ul className="space-y-2">
                        {okr.keyResults.map((kr, i) => (
                          <li key={i} className="text-sm text-wow-muted flex gap-2">
                            <span className="text-wow-gold flex-shrink-0">•</span>
                            <span>{kr}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ),
        }))}
        defaultTab="q3-2025"
      />

      {/* FCAs Section */}
      <div className="border-t border-wow-line pt-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-wow-purple mb-2">📐 FCAs (Funcionalidad, Calidad, Arquitectura)</h2>
          <p className="text-wow-muted">
            Dimensiones transversales que complementan los OKRs. Todo lo que hacemos debe mejorar en al menos una de estas áreas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {Object.entries(FCAS).map(([key, fca]) => (
            <div key={key} className="border border-wow-line rounded-lg p-6 hover:shadow-md transition">
              <div className="text-4xl mb-3">{fca.icon}</div>
              <h3 className="text-lg font-semibold text-wow-purple mb-2">{fca.title}</h3>
              <p className="text-sm text-wow-muted mb-4">{fca.description}</p>
              <div className="space-y-2">
                {fca.examples.map((ex) => (
                  <div key={ex} className="text-xs bg-wow-surface-soft rounded px-2 py-1 text-wow-ink">
                    ✓ {ex}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-wow-surface-soft border border-wow-gold rounded-lg p-6">
          <h4 className="font-semibold text-wow-purple mb-3">💡 Cómo evaluar FCAs</h4>
          <div className="space-y-3 text-sm text-wow-muted">
            <p>
              <strong className="text-wow-purple">En Planning:</strong> Para cada iniciativa, identifica cuál FCA está siendo atacada.
            </p>
            <p>
              <strong className="text-wow-purple">En Retros:</strong> Evalúa si las features entregadas mejoraron la situación en esas dimensiones.
            </p>
            <p>
              <strong className="text-wow-purple">En Evaluaciones:</strong> Considera contribuciones en FCAs, no solo features visibles.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
