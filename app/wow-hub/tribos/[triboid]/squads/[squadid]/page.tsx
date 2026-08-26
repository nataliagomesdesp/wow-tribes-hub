import Link from 'next/link'

const SQUADS_DATA: Record<string, Record<string, any>> = {
  search: {
    'search-backend': {
      name: 'Search Backend',
      lead: 'María García',
      tribe: 'Search Tribe',
      members: 6,
      tech: ['Python', 'Elasticsearch', 'Redis', 'PostgreSQL'],
      mission: 'Algoritmos de búsqueda, indexación y ranking de resultados',
      okrs: [
        { goal: 'Mejorar precisión en Top-5', progress: 72 },
        { goal: 'Reducir latencia P99 a <100ms', progress: 58 },
      ],
      initiatives: [
        { name: 'ML-based Ranking v2', status: 'in-progress', owner: 'María García' },
        { name: 'Elasticsearch cluster upgrade', status: 'planning', owner: 'Carlos Ruiz' },
      ],
    },
    'search-frontend': {
      name: 'Search Frontend',
      lead: 'Carlos López',
      tribe: 'Search Tribe',
      members: 5,
      tech: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
      mission: 'UI/UX de búsqueda, filtros y optimización de performance en frontend',
      okrs: [
        { goal: 'Mejorar Core Web Vitals', progress: 68 },
        { goal: 'Aumentar CTR en filtros', progress: 45 },
      ],
      initiatives: [
        { name: 'Search UI redesign', status: 'in-progress', owner: 'Carlos López' },
        { name: 'Filter performance optimization', status: 'planning', owner: 'Sofia Ruiz' },
      ],
    },
    'search-infra': {
      name: 'Search Infra',
      lead: 'Ana Martínez',
      tribe: 'Search Tribe',
      members: 4,
      tech: ['Kubernetes', 'Docker', 'Terraform', 'Prometheus'],
      mission: 'Infraestructura, indexing y observabilidad de búsqueda',
      okrs: [
        { goal: '99.99% uptime', progress: 92 },
        { goal: 'Reducir latencia de indexing', progress: 55 },
      ],
      initiatives: [
        { name: 'Migrate to Kubernetes', status: 'in-progress', owner: 'Ana Martínez' },
        { name: 'Observability upgrade', status: 'planning', owner: 'David López' },
      ],
    },
  },
  payments: {
    'payments-core': {
      name: 'Payments Core',
      lead: 'Diego Rodríguez',
      tribe: 'Payments Tribe',
      members: 7,
      tech: ['Go', 'PostgreSQL', 'Kafka', 'gRPC'],
      mission: 'Pipeline de pagos, integración con procesadores y reconciliación',
      okrs: [
        { goal: 'Reducir declined transactions', progress: 48 },
        { goal: 'Soportar 5 payment methods nuevos', progress: 40 },
      ],
      initiatives: [
        { name: '3D Secure 2.0 implementation', status: 'in-progress', owner: 'Diego Rodríguez' },
        { name: 'Cryptocurrency support', status: 'planning', owner: 'Isabella García' },
      ],
    },
    'fraud-risk': {
      name: 'Fraud & Risk',
      lead: 'Laura González',
      tribe: 'Payments Tribe',
      members: 6,
      tech: ['Python', 'TensorFlow', 'Spark', 'MongoDB'],
      mission: 'Detección de fraude, compliance y risk management',
      okrs: [
        { goal: 'Reducir fraud rate a <0.5%', progress: 60 },
        { goal: 'Mejorar detection accuracy', progress: 75 },
      ],
      initiatives: [
        { name: 'ML fraud model upgrade', status: 'in-progress', owner: 'Laura González' },
        { name: 'Real-time alerts system', status: 'planning', owner: 'Paulo Silva' },
      ],
    },
    'billing': {
      name: 'Billing',
      lead: 'Pedro Sánchez',
      tribe: 'Payments Tribe',
      members: 5,
      tech: ['Java', 'PostgreSQL', 'Elasticsearch'],
      mission: 'Facturación, impuestos y reportes financieros',
      okrs: [
        { goal: 'Automatizar reconciliación', progress: 62 },
        { goal: 'Soportar 5 nuevas jurisdicciones', progress: 35 },
      ],
      initiatives: [
        { name: 'Automated reconciliation v2', status: 'in-progress', owner: 'Pedro Sánchez' },
        { name: 'Tax compliance automation', status: 'planning', owner: 'Angela Roth' },
      ],
    },
  },
}

interface PageProps {
  params: {
    triboid: string
    squadid: string
  }
}

export default function SquadDetailPage({ params }: PageProps) {
  const squad = SQUADS_DATA[params.triboid]?.[params.squadid]

  if (!squad) {
    return (
      <div className="text-center py-12">
        <p className="text-wow-muted">Squad not found</p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div>
        <Link
          href={`/wow-hub/tribos/${params.triboid}`}
          className="text-sm text-wow-purple hover:underline mb-2 inline-block"
        >
          ← Volver a Tribe
        </Link>
        <h1 className="text-4xl font-bold text-wow-purple">{squad.name}</h1>
        <p className="text-wow-muted mt-2">{squad.mission}</p>
      </div>

      {/* Header Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-wow-purple-100 to-wow-lilac-100 rounded-lg p-6">
          <p className="text-sm text-wow-muted mb-1">Squad Lead</p>
          <p className="text-lg font-semibold text-wow-purple">{squad.lead}</p>
        </div>
        <div className="bg-gradient-to-br from-wow-lilac-100 to-wow-gold-100 rounded-lg p-6">
          <p className="text-sm text-wow-muted mb-1">Team Size</p>
          <p className="text-lg font-semibold text-wow-purple">{squad.members} personas</p>
        </div>
        <div className="bg-gradient-to-br from-wow-gold-100 to-wow-purple-100 rounded-lg p-6">
          <p className="text-sm text-wow-muted mb-1">Tech Stack</p>
          <div className="flex flex-wrap gap-1 mt-2">
            {squad.tech.slice(0, 2).map((tech) => (
              <span key={tech} className="text-xs bg-wow-surface rounded px-2 py-1 text-wow-purple font-semibold">
                {tech}
              </span>
            ))}
            {squad.tech.length > 2 && (
              <span className="text-xs text-wow-muted pt-1">+{squad.tech.length - 2}</span>
            )}
          </div>
        </div>
        <div className="bg-gradient-to-br from-wow-purple-100 to-wow-gold-100 rounded-lg p-6">
          <p className="text-sm text-wow-muted mb-1">Tribe</p>
          <p className="text-lg font-semibold text-wow-purple">{squad.tribe}</p>
        </div>
      </div>

      {/* OKRs & Initiatives */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="border border-wow-line rounded-lg p-6">
          <h3 className="text-lg font-bold text-wow-purple mb-4">🎯 OKRs</h3>
          <div className="space-y-4">
            {squad.okrs.map((okr, idx) => (
              <div key={idx}>
                <div className="flex justify-between items-start mb-2">
                  <p className="font-semibold text-wow-purple">{okr.goal}</p>
                  <span className="text-sm font-bold text-wow-gold">{okr.progress}%</span>
                </div>
                <div className="w-full bg-wow-line rounded-full overflow-hidden h-2">
                  <div
                    className="h-full bg-wow-gold transition-all"
                    style={{ width: `${okr.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border border-wow-line rounded-lg p-6">
          <h3 className="text-lg font-bold text-wow-purple mb-4">🚀 Iniciativas Activas</h3>
          <div className="space-y-3">
            {squad.initiatives.map((init) => (
              <div key={init.name} className="border border-wow-line rounded p-3 hover:bg-wow-surface-soft transition">
                <div className="flex justify-between items-start mb-1">
                  <p className="font-semibold text-wow-purple text-sm">{init.name}</p>
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded ${
                      init.status === 'in-progress'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {init.status === 'in-progress' ? '🔄 In Progress' : '📋 Planning'}
                  </span>
                </div>
                <p className="text-xs text-wow-muted">Owner: {init.owner}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="border border-wow-line rounded-lg p-6">
        <h3 className="text-lg font-bold text-wow-purple mb-4">💻 Tech Stack</h3>
        <div className="flex flex-wrap gap-2">
          {squad.tech.map((tech) => (
            <span key={tech} className="bg-wow-lilac-light text-wow-purple rounded-full px-4 py-2 font-semibold text-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-wow-purple to-wow-lilac rounded-lg p-8 text-white">
        <h3 className="text-2xl font-bold mb-3">¿Quieres unirte a {squad.name}?</h3>
        <p className="text-white/90 mb-4">
          Estamos buscando talentos para trabajar en {squad.mission.toLowerCase()}
        </p>
        <button className="px-6 py-3 bg-white text-wow-purple font-semibold rounded-lg hover:bg-opacity-90 transition">
          Contactar con {squad.lead}
        </button>
      </div>
    </div>
  )
}
