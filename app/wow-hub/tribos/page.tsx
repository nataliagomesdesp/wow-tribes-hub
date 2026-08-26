import Link from 'next/link'

const TRIBES = [
  {
    id: 'search',
    emoji: '🔍',
    name: 'Search Tribe',
    lead: 'Roberto Silva',
    members: 15,
    squads: 3,
    color: 'from-blue-500 to-purple-500',
  },
  {
    id: 'payments',
    emoji: '💳',
    name: 'Payments Tribe',
    lead: 'Elena Jiménez',
    members: 18,
    squads: 3,
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 'experiences',
    emoji: '✈️',
    name: 'Experiences Tribe',
    lead: 'Sandra Díaz',
    members: 20,
    squads: 3,
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 'platform',
    emoji: '🏗️',
    name: 'Platform Tribe',
    lead: 'Jorge Jiménez',
    members: 18,
    squads: 3,
    color: 'from-purple-500 to-indigo-500',
  },
]

const COMPANY_STRUCTURE = {
  ceo: 'CEO',
  vps: ['VP Engineering', 'VP Product', 'VP Growth'],
}

export default function TribosPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm text-wow-muted mb-2">ORGANIZACIÓN</p>
        <h1 className="text-4xl font-bold text-wow-purple">👥 Tribes & Squads</h1>
        <p className="text-wow-muted mt-3 max-w-2xl">
          Estructura organizacional de Despegar. Cada tribu agrupa múltiples squads alrededor de un objetivo común.
        </p>
      </div>

      {/* Org Chart Visualization */}
      <div className="bg-wow-surface-soft border border-wow-line rounded-lg p-12">
        <div className="space-y-12">
          {/* CEO Level */}
          <div className="flex justify-center">
            <div className="bg-gradient-to-r from-wow-purple to-wow-lilac rounded-lg px-8 py-4 text-white font-bold text-center">
              👔 {COMPANY_STRUCTURE.ceo}
            </div>
          </div>

          {/* VPs Level */}
          <div className="relative">
            <div className="absolute top-0 left-1/2 w-1 h-8 bg-wow-line transform -translate-x-1/2" />
            <div className="grid grid-cols-3 gap-8">
              {COMPANY_STRUCTURE.vps.map((vp, idx) => (
                <div key={vp} className="flex flex-col items-center">
                  <div className="absolute top-8 left-1/2 w-1 h-8 bg-wow-line transform -translate-x-1/2" />
                  <div className="bg-wow-purple/20 border border-wow-purple rounded-lg px-6 py-3 text-wow-purple font-semibold text-center">
                    {vp}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tribes Level */}
          <div className="relative">
            <div className="absolute -top-8 left-1/2 w-1 h-8 bg-wow-line transform -translate-x-1/2" />
            <div className="grid md:grid-cols-4 gap-6">
              {TRIBES.map((tribe) => (
                <Link
                  key={tribe.id}
                  href={`/wow-hub/tribos/${tribe.id}`}
                  className="relative group"
                >
                  <div className="absolute -top-8 left-1/2 w-1 h-8 bg-wow-line transform -translate-x-1/2 group-hover:bg-wow-gold transition" />
                  <div
                    className={`bg-gradient-to-br ${tribe.color} rounded-lg p-6 text-white cursor-pointer hover:shadow-lg transition transform hover:scale-105`}
                  >
                    <div className="text-4xl mb-2">{tribe.emoji}</div>
                    <h3 className="font-bold mb-1">{tribe.name}</h3>
                    <p className="text-white/80 text-xs mb-4">👤 {tribe.lead}</p>
                    <div className="space-y-1 text-sm">
                      <p className="text-white/90">👥 {tribe.members} personas</p>
                      <p className="text-white/90">🎯 {tribe.squads} squads</p>
                    </div>
                    <p className="mt-4 pt-4 border-t border-white/20 text-xs text-white/70">
                      Ver detalle →
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-wow-purple-100 to-wow-lilac-100 rounded-lg p-6 text-center">
          <div className="text-3xl font-bold text-wow-purple">{TRIBES.length}</div>
          <div className="text-sm text-wow-muted mt-1">Tribos</div>
        </div>
        <div className="bg-gradient-to-br from-wow-lilac-100 to-wow-gold-100 rounded-lg p-6 text-center">
          <div className="text-3xl font-bold text-wow-purple">
            {TRIBES.reduce((acc, t) => acc + t.squads, 0)}
          </div>
          <div className="text-sm text-wow-muted mt-1">Squads</div>
        </div>
        <div className="bg-gradient-to-br from-wow-gold-100 to-wow-purple-100 rounded-lg p-6 text-center">
          <div className="text-3xl font-bold text-wow-purple">
            {TRIBES.reduce((acc, t) => acc + t.members, 0)}
          </div>
          <div className="text-sm text-wow-muted mt-1">Personas</div>
        </div>
        <div className="bg-gradient-to-br from-wow-purple-100 to-wow-gold-100 rounded-lg p-6 text-center">
          <div className="text-3xl font-bold text-wow-purple">{COMPANY_STRUCTURE.vps.length}</div>
          <div className="text-sm text-wow-muted mt-1">VP Areas</div>
        </div>
      </div>

      {/* Directory */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="border border-wow-line rounded-lg p-6">
          <h3 className="text-lg font-bold text-wow-purple mb-4">📇 Directory de Líderes</h3>
          <div className="space-y-3">
            {[
              { role: 'CEO', name: 'Juan Pérez', email: 'juan@despegar.com' },
              ...TRIBES.map((tribe) => ({
                role: `${tribe.name} Lead`,
                name: tribe.lead,
                email: `${tribe.lead.toLowerCase().replace(' ', '.')}@despegar.com`,
              })),
            ].map((person) => (
              <div
                key={person.role}
                className="border border-wow-line rounded p-3 hover:bg-wow-surface-soft transition"
              >
                <p className="font-semibold text-wow-purple">{person.name}</p>
                <p className="text-xs text-wow-muted">{person.role}</p>
                <p className="text-xs text-wow-purple font-mono mt-1">{person.email}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="border border-wow-line rounded-lg p-6">
          <h3 className="text-lg font-bold text-wow-purple mb-4">📊 Métricas Organizacionales</h3>
          <div className="space-y-4">
            <div className="border-b border-wow-line pb-4">
              <p className="text-sm text-wow-muted mb-1">Avg Squad Size</p>
              <p className="text-2xl font-bold text-wow-purple">
                {Math.round((TRIBES.reduce((acc, t) => acc + t.members, 0) / TRIBES.reduce((acc, t) => acc + t.squads, 0)) * 10) / 10}{' '}
                <span className="text-sm">personas</span>
              </p>
            </div>
            <div className="border-b border-wow-line pb-4">
              <p className="text-sm text-wow-muted mb-1">Largest Tribe</p>
              <p className="text-2xl font-bold text-wow-purple">
                {TRIBES.reduce((prev, current) => (prev.members > current.members ? prev : current)).name}
              </p>
            </div>
            <div>
              <p className="text-sm text-wow-muted mb-1">Reporting Structure</p>
              <p className="text-2xl font-bold text-wow-purple">
                {COMPANY_STRUCTURE.vps.length} VPs → {TRIBES.length} Tribes
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Connections */}
      <div className="bg-wow-surface-soft border border-wow-line rounded-lg p-8">
        <h3 className="text-xl font-bold text-wow-purple mb-4">🔗 Cross-Tribe Dependencies</h3>
        <div className="space-y-2 text-sm text-wow-muted">
          <p>• <strong className="text-wow-purple">Search ↔ Payments:</strong> Integración de filtros de pago en búsqueda</p>
          <p>• <strong className="text-wow-purple">Experiences ↔ Payments:</strong> Procesamiento de pagos para tours</p>
          <p>• <strong className="text-wow-purple">All ↔ Platform:</strong> Infraestructura, APIs, observabilidad</p>
          <p>• <strong className="text-wow-purple">Search ↔ Experiences:</strong> Search index actualizado con nuevos destinos</p>
        </div>
      </div>
    </div>
  )
}
