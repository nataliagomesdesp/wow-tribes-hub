import Link from 'next/link'

const LEARNING_PATHS = [
  {
    id: 'new-joiner',
    icon: '🚀',
    title: 'New Joiner Path',
    duration: '2 semanas',
    description: 'Introducción completa al WoW, estructura organizacional y primeros pasos.',
    modules: [
      { week: 1, title: 'Bienvenida', items: ['Onboarding general', 'Conocer al squad', 'Historia de Despegar'] },
      { week: 2, title: 'Fundamentals', items: ['OKRs y FCAs', 'Ceremonies', 'Jira basics'] },
    ],
    color: 'from-wow-purple to-wow-lilac',
  },
  {
    id: 'squad-lead',
    icon: '👑',
    title: 'Squad Lead Path',
    duration: '4 semanas',
    description: 'Capacitación especializada para líderes de squad: facilitación, decisiones, feedback.',
    modules: [
      { week: 1, title: 'Fundamentos', items: ['Liderazgo en Despegar', 'Facilitación de reuniones'] },
      { week: 2, title: 'Estrategia', items: ['OKRs avanzado', 'Roadmap planning'] },
      { week: 3, title: 'Personas', items: ['Feedback efectivo', 'Retención de talento'] },
      { week: 4, title: 'Ejecución', items: ['Gestión de riesgos', 'Post-mortems'] },
    ],
    color: 'from-wow-lilac to-wow-gold',
  },
  {
    id: 'tribe-lead',
    icon: '🏛️',
    title: 'Tribe Lead Path',
    duration: '5 semanas',
    description: 'Liderazgo a nivel de tribu: visión estratégica, alineación, escalabilidad.',
    modules: [
      { week: 1, title: 'Contexto', items: ['Estructura de tribu', 'Dinámicas multi-squad'] },
      { week: 2, title: 'Estrategia', items: ['Alineación OKRs', 'Planning de tribu'] },
      { week: 3, title: 'Influencia', items: ['Negociación', 'Influencia sin autoridad'] },
      { week: 4, title: 'Operaciones', items: ['Métricas de tribu', 'Retros efectivas'] },
      { week: 5, title: 'Crecimiento', items: ['Escalabilidad', 'Evaluación de talento'] },
    ],
    color: 'from-wow-gold to-wow-purple',
  },
  {
    id: 'technical',
    icon: '⚙️',
    title: 'Technical Excellence',
    duration: 'Ongoing',
    description: 'Desarrollo técnico continuo: arquitectura, code quality, herramientas.',
    modules: [
      { week: 1, title: 'Fundamentos', items: ['Code standards', 'Testing practices'] },
      { week: 2, title: 'Avanzado', items: ['Architecture patterns', 'Performance'] },
      { week: 3, title: 'Especialista', items: ['Deep dives', 'Mentoring'] },
    ],
    color: 'from-wow-purple to-wow-lilac',
  },
]

export default function LearningPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm text-wow-muted mb-2">WOW GENERAL</p>
        <h1 className="text-4xl font-bold text-wow-purple">📚 Learning Paths</h1>
        <p className="text-wow-muted mt-3 max-w-2xl">
          Rutas de aprendizaje estructuradas según tu rol y momento en la organización. Cada path incluye módulos progresivos.
        </p>
      </div>

      <div className="grid gap-6">
        {LEARNING_PATHS.map((path) => (
          <div
            key={path.id}
            className="border border-wow-line rounded-lg overflow-hidden hover:shadow-md transition"
          >
            <div className={`bg-gradient-to-r ${path.color} p-8 text-white`}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-4xl">{path.icon}</span>
                    <div>
                      <h2 className="text-2xl font-bold">{path.title}</h2>
                      <p className="text-white/80 text-sm">{path.duration}</p>
                    </div>
                  </div>
                  <p className="text-white/90 mt-3 max-w-xl">{path.description}</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {path.modules.map((module) => (
                  <div key={`${path.id}-${module.week}`} className="border-l-4 border-wow-gold pl-6">
                    <h4 className="font-semibold text-wow-purple mb-3">
                      Semana {module.week}: {module.title}
                    </h4>
                    <ul className="space-y-2">
                      {module.items.map((item) => (
                        <li key={item} className="text-wow-muted text-sm flex items-center gap-2">
                          <span className="text-wow-gold">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-wow-line">
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-wow-purple text-white rounded-lg font-semibold hover:bg-opacity-90 transition">
                  Empezar Path
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-wow-surface-soft border border-wow-line rounded-lg p-8">
        <h3 className="text-lg font-semibold text-wow-purple mb-4">💡 Recursos Adicionales</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-wow-line rounded-lg p-6">
            <h4 className="font-semibold text-wow-purple mb-2">📖 Documentación</h4>
            <p className="text-wow-muted text-sm mb-4">
              Guías de referencia rápida y documentación técnica.
            </p>
            <Link href="/wow-hub/wow/faqs" className="text-wow-purple font-semibold text-sm hover:underline">
              Ver docs →
            </Link>
          </div>

          <div className="border border-wow-line rounded-lg p-6">
            <h4 className="font-semibold text-wow-purple mb-2">👥 Mentoring</h4>
            <p className="text-wow-muted text-sm mb-4">
              Conecta con mentores en tu área de expertise.
            </p>
            <Link href="/wow-hub/wow/wowconnects" className="text-wow-purple font-semibold text-sm hover:underline">
              Encontrar mentor →
            </Link>
          </div>

          <div className="border border-wow-line rounded-lg p-6">
            <h4 className="font-semibold text-wow-purple mb-2">🎯 Evaluación</h4>
            <p className="text-wow-muted text-sm mb-4">
              Valida tu progreso en cada milestone.
            </p>
            <button className="text-wow-purple font-semibold text-sm hover:underline">
              Auto-evalúate →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
