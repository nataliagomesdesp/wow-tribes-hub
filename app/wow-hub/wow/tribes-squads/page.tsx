import Link from 'next/link'

const TRIBES = [
  {
    id: 'search',
    emoji: '🔍',
    name: 'Search Tribe',
    color: 'from-blue-500 to-purple-500',
    description: 'Responsable de la experiencia de búsqueda y descubrimiento.',
    squads: [
      { name: 'Search Backend', lead: 'María García', members: 6 },
      { name: 'Search Frontend', lead: 'Carlos López', members: 5 },
      { name: 'Search Infra', lead: 'Ana Martínez', members: 4 },
    ],
    okr: 'Mejorar precisión de búsqueda en 25%',
  },
  {
    id: 'payments',
    emoji: '💳',
    name: 'Payments Tribe',
    color: 'from-green-500 to-emerald-500',
    description: 'Gestión de pagos, transacciones y monetización.',
    squads: [
      { name: 'Payments Core', lead: 'Diego Rodríguez', members: 7 },
      { name: 'Fraud & Risk', lead: 'Laura González', members: 6 },
      { name: 'Billing', lead: 'Pedro Sánchez', members: 5 },
    ],
    okr: 'Reducir tasa de declinación en 15%',
  },
  {
    id: 'experiences',
    emoji: '✈️',
    name: 'Experiences Tribe',
    color: 'from-orange-500 to-red-500',
    description: 'Productos y experiencias en viajes y tours.',
    squads: [
      { name: 'Flights', lead: 'Sandra Díaz', members: 8 },
      { name: 'Hotels', lead: 'Roberto Moreno', members: 7 },
      { name: 'Activities', lead: 'Patricia Ruiz', members: 5 },
    ],
    okr: 'Aumentar RPU de experiencias en 20%',
  },
  {
    id: 'platform',
    emoji: '🏗️',
    name: 'Platform Tribe',
    color: 'from-purple-500 to-indigo-500',
    description: 'Infraestructura, APIs y herramientas internas.',
    squads: [
      { name: 'Platform Core', lead: 'Jorge Jiménez', members: 6 },
      { name: 'DevOps', lead: 'Sofía Ramírez', members: 5 },
      { name: 'Data & Analytics', lead: 'Lucas Fernández', members: 7 },
    ],
    okr: 'Reducir tiempo de despliegue en 50%',
  },
]

export default function TribesSquadsPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm text-wow-muted mb-2">WOW GENERAL</p>
        <h1 className="text-4xl font-bold text-wow-purple">👥 Tribes & Squads</h1>
        <p className="text-wow-muted mt-3 max-w-2xl">
          Nuestra estructura organizacional. Cada tribu agrupa múltiples squads alrededor de un objetivo común.
        </p>
      </div>

      <div className="space-y-6">
        {TRIBES.map((tribe) => (
          <div
            key={tribe.id}
            className="border border-wow-line rounded-lg overflow-hidden hover:shadow-md transition"
          >
            {/* Header */}
            <div className={`bg-gradient-to-r ${tribe.color} p-8 text-white`}>
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-4xl">{tribe.emoji}</span>
                    <h2 className="text-2xl font-bold">{tribe.name}</h2>
                  </div>
                  <p className="text-white/90">{tribe.description}</p>
                </div>
                <Link
                  href={`/wow-hub/tribos/${tribe.id}`}
                  className="px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg font-semibold transition flex-shrink-0"
                >
                  Ver Detalle →
                </Link>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-wow-muted mb-2">OKR ACTUAL</h4>
                <p className="text-wow-purple font-semibold">{tribe.okr}</p>
              </div>

              <h4 className="text-lg font-semibold text-wow-purple mb-4">Squads ({tribe.squads.length})</h4>
              <div className="grid md:grid-cols-3 gap-4">
                {tribe.squads.map((squad) => (
                  <div key={squad.name} className="border border-wow-line rounded-lg p-4 hover:bg-wow-surface-soft transition">
                    <h5 className="font-semibold text-wow-purple mb-2">{squad.name}</h5>
                    <div className="text-sm space-y-1 text-wow-muted">
                      <p>👤 Lead: <span className="font-medium text-wow-purple">{squad.lead}</span></p>
                      <p>👥 Members: <span className="font-medium text-wow-purple">{squad.members}</span></p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Stats Card */}
      <div className="grid grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-wow-purple-100 to-wow-lilac-100 rounded-lg p-6 text-center">
          <div className="text-3xl font-bold text-wow-purple">{TRIBES.length}</div>
          <div className="text-sm text-wow-muted mt-1">Tribos</div>
        </div>
        <div className="bg-gradient-to-br from-wow-lilac-100 to-wow-gold-100 rounded-lg p-6 text-center">
          <div className="text-3xl font-bold text-wow-purple">
            {TRIBES.reduce((acc, t) => acc + t.squads.length, 0)}
          </div>
          <div className="text-sm text-wow-muted mt-1">Squads</div>
        </div>
        <div className="bg-gradient-to-br from-wow-gold-100 to-wow-purple-100 rounded-lg p-6 text-center">
          <div className="text-3xl font-bold text-wow-purple">
            {TRIBES.reduce((acc, t) => acc + t.squads.reduce((s, sq) => s + sq.members, 0), 0)}
          </div>
          <div className="text-sm text-wow-muted mt-1">Personas</div>
        </div>
        <div className="bg-gradient-to-br from-wow-purple-100 to-wow-gold-100 rounded-lg p-6 text-center">
          <div className="text-3xl font-bold text-wow-purple">{TRIBES.length}</div>
          <div className="text-sm text-wow-muted mt-1">OKRs Activos</div>
        </div>
      </div>
    </div>
  )
}
