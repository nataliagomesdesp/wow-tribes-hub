import Tabs from '@/components/Tabs'
import AuditLog from '@/components/AuditLog'
import Link from 'next/link'

const TRIBE_DETAILS: Record<string, any> = {
  search: {
    emoji: '🔍',
    name: 'Search Tribe',
    color: 'from-blue-500 to-purple-500',
    description: 'Responsable de la experiencia de búsqueda y descubrimiento en Despegar.',
    lead: 'Roberto Silva',
    leadRole: 'Tribe Lead',
    squads: [
      {
        name: 'Search Backend',
        lead: 'María García',
        members: 6,
        focus: 'Algoritmos de búsqueda, índices, ranking',
      },
      {
        name: 'Search Frontend',
        lead: 'Carlos López',
        members: 5,
        focus: 'UI/UX de búsqueda, filtros, performance frontend',
      },
      {
        name: 'Search Infra',
        lead: 'Ana Martínez',
        members: 4,
        focus: 'Elasticsearch, indexing, observability',
      },
    ],
    okr: 'Mejorar precisión de búsqueda en 25%',
    okrStatus: 'on-track',
    okrProgress: 65,
    metrics: [
      { label: 'Search Precision (Top 5)', value: '92%', target: '95%' },
      { label: 'Avg Search Time', value: '120ms', target: '<100ms' },
      { label: 'Search CTR', value: '42%', target: '48%' },
    ],
    currentInitiatives: [
      { title: 'ML-based Ranking', status: 'in-progress', owner: 'María García' },
      { title: 'Search Suggestions API', status: 'planning', owner: 'Carlos López' },
      { title: 'Elasticsearch Upgrade', status: 'in-progress', owner: 'Ana Martínez' },
    ],
    dependencies: [
      { squad: 'Payments Tribe', area: 'Payment filters in search', status: 'aligned' },
      { squad: 'Platform Tribe', area: 'API Gateway optimization', status: 'in-progress' },
    ],
    tribeSync: 'Todos los jueves 16:00 (GMT-3)',
    calendar: 'calendly.com/search-tribe',
  },
  payments: {
    emoji: '💳',
    name: 'Payments Tribe',
    color: 'from-green-500 to-emerald-500',
    description: 'Gestión de pagos, transacciones y monetización en Despegar.',
    lead: 'Elena Jiménez',
    leadRole: 'Tribe Lead',
    squads: [
      {
        name: 'Payments Core',
        lead: 'Diego Rodríguez',
        members: 7,
        focus: 'Pipeline de pagos, procesadores, reconciliación',
      },
      {
        name: 'Fraud & Risk',
        lead: 'Laura González',
        members: 6,
        focus: 'Detección de fraude, compliance, risk management',
      },
      {
        name: 'Billing',
        lead: 'Pedro Sánchez',
        members: 5,
        focus: 'Facturación, impuestos, reportes financieros',
      },
    ],
    okr: 'Reducir tasa de declinación en 15%',
    okrStatus: 'at-risk',
    okrProgress: 45,
    metrics: [
      { label: 'Payment Success Rate', value: '96.5%', target: '97.5%' },
      { label: 'Fraud Rate', value: '0.8%', target: '<0.5%' },
      { label: 'Transaction Time', value: '850ms', target: '<500ms' },
    ],
    currentInitiatives: [
      { title: '3D Secure 2.0 Implementation', status: 'in-progress', owner: 'Diego Rodríguez' },
      { title: 'Cryptocurrency Payment Support', status: 'planning', owner: 'Laura González' },
      { title: 'Automated Reconciliation', status: 'in-progress', owner: 'Pedro Sánchez' },
    ],
    dependencies: [
      { squad: 'Platform Tribe', area: 'API improvements', status: 'aligned' },
      { squad: 'Search Tribe', area: 'Checkout integration', status: 'pending' },
    ],
    tribeSync: 'Todos los martes 14:00 (GMT-3)',
    calendar: 'calendly.com/payments-tribe',
  },
}

interface PageProps {
  params: {
    triboid: string
  }
}

export default function TribeDetailPage({ params }: PageProps) {
  const tribe = TRIBE_DETAILS[params.triboid] || TRIBE_DETAILS.search

  const tabs = [
    {
      id: 'overview',
      label: 'Overview',
      content: (
        <div className="space-y-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-wow-surface-soft rounded-lg p-6">
              <p className="text-sm text-wow-muted mb-1">Tribe Lead</p>
              <p className="text-lg font-semibold text-wow-purple">{tribe.lead}</p>
              <p className="text-sm text-wow-muted">{tribe.leadRole}</p>
            </div>
            <div className="bg-wow-surface-soft rounded-lg p-6">
              <p className="text-sm text-wow-muted mb-1">Squads</p>
              <p className="text-lg font-semibold text-wow-purple">{tribe.squads.length}</p>
              <p className="text-sm text-wow-muted">equipos con {tribe.squads.reduce((sum: number, s: any) => sum + s.members, 0)} personas</p>
            </div>
            <div className="bg-wow-surface-soft rounded-lg p-6">
              <p className="text-sm text-wow-muted mb-1">Tribe Sync</p>
              <p className="text-lg font-semibold text-wow-purple">{tribe.tribeSync}</p>
              <a href={tribe.calendar} className="text-sm text-wow-purple font-semibold hover:underline">
                Agendar sesión →
              </a>
            </div>
          </div>

          <div className="bg-wow-surface-soft rounded-lg p-6">
            <h3 className="text-lg font-semibold text-wow-purple mb-2">📊 OKR Actual</h3>
            <p className="text-wow-purple font-semibold mb-3">{tribe.okr}</p>
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <div className="w-full bg-wow-line rounded-full overflow-hidden h-3">
                  <div
                    className={`h-full transition-all ${
                      tribe.okrProgress >= 80
                        ? 'bg-green-500'
                        : tribe.okrProgress >= 50
                        ? 'bg-blue-500'
                        : 'bg-orange-500'
                    }`}
                    style={{ width: `${tribe.okrProgress}%` }}
                  />
                </div>
              </div>
              <span className="text-sm font-bold text-wow-purple min-w-fit">{tribe.okrProgress}%</span>
            </div>
            <p className="text-xs text-wow-muted mt-2">
              Status:{' '}
              <span
                className={`font-semibold ${
                  tribe.okrStatus === 'on-track'
                    ? 'text-green-600'
                    : tribe.okrStatus === 'at-risk'
                    ? 'text-orange-600'
                    : 'text-red-600'
                }`}
              >
                {tribe.okrStatus}
              </span>
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'squads',
      label: 'Squads',
      content: (
        <div className="space-y-4">
          {tribe.squads.map((squad: any) => (
            <div key={squad.name} className="border border-wow-line rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-lg font-semibold text-wow-purple">{squad.name}</h4>
                  <p className="text-sm text-wow-muted mt-1">👤 Lead: {squad.lead}</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-wow-gold">{squad.members}</p>
                  <p className="text-xs text-wow-muted">personas</p>
                </div>
              </div>
              <p className="text-wow-muted mb-4">{squad.focus}</p>
              <button className="text-wow-purple font-semibold text-sm hover:underline">
                Ver detalle del squad →
              </button>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: 'metrics',
      label: 'Métricas',
      content: (
        <div className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            {tribe.metrics.map((metric: any) => (
              <div key={metric.label} className="border border-wow-line rounded-lg p-6">
                <p className="text-sm text-wow-muted mb-2">{metric.label}</p>
                <p className="text-3xl font-bold text-wow-purple mb-1">{metric.value}</p>
                <p className="text-xs text-wow-muted">Target: {metric.target}</p>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 'auditoria',
      label: 'Auditoria',
      content: (
        <AuditLog
          limit={20}
          title={`Controle de Alterações - ${tribe.name}`}
        />
      ),
    },
    {
      id: 'initiatives',
      label: 'Iniciativas',
      content: (
        <div className="space-y-4">
          <div className="space-y-4">
            {tribe.currentInitiatives.map((init: any) => (
              <div key={init.title} className="border border-wow-line rounded-lg p-6 flex items-start justify-between">
                <div>
                  <h4 className="font-semibold text-wow-purple">{init.title}</h4>
                  <p className="text-sm text-wow-muted mt-1">Owner: {init.owner}</p>
                </div>
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    init.status === 'in-progress'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {init.status === 'in-progress' ? '🔄 In Progress' : '📋 Planning'}
                </span>
              </div>
            ))}
          </div>

          <div className="border border-wow-gold bg-wow-surface-soft rounded-lg p-6 mt-6">
            <h4 className="font-semibold text-wow-purple mb-3">🔗 Dependencias</h4>
            <div className="space-y-2">
              {tribe.dependencies.map((dep: any) => (
                <div key={`${dep.squad}-${dep.area}`} className="text-sm text-wow-muted">
                  <p className="font-semibold text-wow-purple">{dep.squad}</p>
                  <p>Area: {dep.area}</p>
                  <p className="text-xs mt-1">Status: {dep.status}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <div className="space-y-8">
      <div>
        <Link href="/wow-hub/tribos" className="text-sm text-wow-purple hover:underline mb-2 inline-block">
          ← Volver a Tribes & Squads
        </Link>
        <div className="flex items-center gap-4 mb-4">
          <span className="text-5xl">{tribe.emoji}</span>
          <div>
            <h1 className="text-4xl font-bold text-wow-purple">{tribe.name}</h1>
          </div>
        </div>
        <p className="text-wow-muted mt-3 max-w-2xl">{tribe.description}</p>
      </div>

      <Tabs tabs={tabs} defaultTab="overview" />
    </div>
  )
}
