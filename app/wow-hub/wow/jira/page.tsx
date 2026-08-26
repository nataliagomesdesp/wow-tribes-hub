import Tabs from '@/components/Tabs'

const JIRA_TABS = [
  {
    id: 'workflow',
    label: 'Workflow',
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-wow-purple to-wow-lilac rounded-lg p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">📊 Issue Workflow</h3>
          <p className="text-white/90 mb-6">
            Cada issue en Jira sigue este flujo de estados. Asegúrate de mover el issue al estado correcto conforme avanza el trabajo.
          </p>
        </div>

        <div className="space-y-4">
          {[
            { status: 'Backlog', desc: 'Issue nuevamente creado o no planificado', color: 'bg-gray-100' },
            { status: 'To Do', desc: 'Issue seleccionado para el sprint actual', color: 'bg-blue-100' },
            { status: 'In Progress', desc: 'Alguien está activamente trabajando', color: 'bg-yellow-100' },
            { status: 'In Review', desc: 'Code review o validación de QA', color: 'bg-purple-100' },
            { status: 'Done', desc: 'Completado y merged a main', color: 'bg-green-100' },
          ].map((item) => (
            <div key={item.status} className={`${item.color} rounded-lg p-4 flex items-start gap-4`}>
              <div className="font-semibold text-wow-purple text-lg min-w-fit">{item.status}</div>
              <div className="flex-1">
                <p className="text-wow-muted">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="border border-wow-gold rounded-lg p-6 bg-wow-surface-soft">
          <h4 className="font-semibold text-wow-purple mb-3">💡 Reglas Importantes</h4>
          <ul className="space-y-2 text-sm text-wow-muted">
            <li>✓ Mueve el issue a "In Progress" cuando empieces a trabajar</li>
            <li>✓ Crea un PR linkado al issue (usa "JIRA-XXX #description" en título)</li>
            <li>✓ En "In Review", espera aprobación de código o QA</li>
            <li>✓ Solo mueve a "Done" cuando esté merged a main</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 'issue-types',
    label: 'Issue Types',
    content: (
      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              icon: '✨',
              type: 'Story',
              desc: 'Feature o cambio desde perspectiva del usuario',
              example: 'Como usuario, quiero poder filtrar resultados por precio',
            },
            {
              icon: '🐛',
              type: 'Bug',
              desc: 'Defecto o comportamiento incorrecto',
              example: 'El modal de pago no funciona en Safari',
            },
            {
              icon: '🛠️',
              type: 'Task',
              desc: 'Trabajo técnico sin valor directo al usuario',
              example: 'Refactorizar módulo de autenticación',
            },
            {
              icon: '📌',
              type: 'Sub-task',
              desc: 'Tarea que pertenece a un Issue mayor',
              example: 'Crear migrations para nueva tabla',
            },
            {
              icon: '🔍',
              type: 'Investigation',
              desc: 'Spike o research work',
              example: 'Evaluar viabilidad de migrar a Next.js 14',
            },
            {
              icon: '⚡',
              type: 'Improvement',
              desc: 'Mejora a feature existente',
              example: 'Optimizar performance de búsqueda',
            },
          ].map((item) => (
            <div key={item.type} className="border border-wow-line rounded-lg p-4 hover:bg-wow-surface-soft transition">
              <div className="flex items-start gap-3 mb-2">
                <span className="text-2xl">{item.icon}</span>
                <h4 className="font-semibold text-wow-purple">{item.type}</h4>
              </div>
              <p className="text-sm text-wow-muted mb-3">{item.desc}</p>
              <p className="text-xs bg-wow-surface-soft rounded px-2 py-1 text-wow-muted">
                📝 {item.example}
              </p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'fields',
    label: 'Fields & Labels',
    content: (
      <div className="space-y-6">
        <div className="bg-wow-surface-soft rounded-lg p-6">
          <h3 className="font-semibold text-wow-purple mb-4">📋 Campos Importantes</h3>
          <div className="space-y-4">
            {[
              { field: 'Assignee', desc: 'Persona trabajando en el issue' },
              { field: 'Sprint', desc: 'En qué sprint está planeado' },
              { field: 'Story Points', desc: 'Estimación de esfuerzo (1-13)' },
              { field: 'Priority', desc: 'Blocker, High, Medium, Low' },
              { field: 'Labels', desc: 'Tags para categorizar (ej: frontend, backend, docs)' },
              { field: 'Description', desc: 'Contexto, criterios de aceptación, referencias' },
            ].map((item) => (
              <div key={item.field} className="border-l-4 border-wow-gold pl-4 py-2">
                <h5 className="font-semibold text-wow-purple">{item.field}</h5>
                <p className="text-sm text-wow-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="border border-wow-line rounded-lg p-6">
          <h4 className="font-semibold text-wow-purple mb-4">🏷️ Labels Estándar</h4>
          <div className="flex flex-wrap gap-2">
            {['frontend', 'backend', 'devops', 'docs', 'urgent', 'blocked', 'technical-debt', 'bug', 'feature', 'poc'].map((label) => (
              <span key={label} className="text-xs bg-wow-lilac-light text-wow-purple rounded-full px-3 py-1 font-semibold">
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'best-practices',
    label: 'Best Practices',
    content: (
      <div className="space-y-6">
        <div className="space-y-4">
          {[
            {
              title: '📝 Descripciones Claras',
              tips: [
                'Incluye contexto: ¿por qué estamos haciendo esto?',
                'Criterios de aceptación: ¿cuándo consideramos esto done?',
                'Detalles técnicos relevantes',
                'Screenshots o videos si es UX',
              ],
            },
            {
              title: '🎯 Estimación Realista',
              tips: [
                'Stories típicamente 5-8 puntos',
                'Si es >13 puntos, considéralo demasiado grande',
                'Estima en planning, no solo después',
                'Usa historical data para calibrar',
              ],
            },
            {
              title: '🔗 Linkeos Correctos',
              tips: [
                'PRs linkean el issue (JIRA-XXX en título)',
                'Issues relacionados con "relates to" o "blocks"',
                'Dependencias explícitas entre issues',
                'Menciona otros squads en descripción si afecta',
              ],
            },
            {
              title: '⏰ Priorización Clara',
              tips: [
                'Solo un issue "top priority" por squad',
                'Prioridad debe reflejar impacto vs effort',
                'Revisita prioridades en Tribe Sync',
                'Comunica cambios de prioridad claramente',
              ],
            },
          ].map((section) => (
            <div key={section.title} className="border border-wow-line rounded-lg p-6">
              <h4 className="text-lg font-semibold text-wow-purple mb-3">{section.title}</h4>
              <ul className="space-y-2">
                {section.tips.map((tip) => (
                  <li key={tip} className="text-sm text-wow-muted flex items-start gap-2">
                    <span className="text-wow-gold flex-shrink-0">✓</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'reporting',
    label: 'Reporting',
    content: (
      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: '📊 Burndown Chart',
              desc: 'Muestra progreso del sprint. Ideal para identificar si iremos a tiempo.',
              useful: 'En Sprint Retro',
            },
            {
              title: '🎯 Velocity',
              desc: 'Promedio de puntos completados por sprint. Base para planning futuro.',
              useful: 'En Planning',
            },
            {
              title: '🔴 Open Issues by Priority',
              desc: 'Cuántas issues blocker/high sin resolver. Métrica de salud.',
              useful: 'Semanal en Tribe Sync',
            },
            {
              title: '⏱️ Cycle Time',
              desc: 'Tiempo desde "To Do" hasta "Done". Métrica de eficiencia.',
              useful: 'Para optimizar procesos',
            },
          ].map((report) => (
            <div key={report.title} className="border border-wow-line rounded-lg p-4">
              <h5 className="font-semibold text-wow-purple mb-2">{report.title}</h5>
              <p className="text-sm text-wow-muted mb-3">{report.desc}</p>
              <p className="text-xs bg-wow-surface-soft rounded px-2 py-1 text-wow-purple font-semibold">
                👁️ {report.useful}
              </p>
            </div>
          ))}
        </div>

        <div className="border border-wow-gold rounded-lg p-6 bg-wow-surface-soft">
          <h4 className="font-semibold text-wow-purple mb-3">📈 Dashboard Recomendado</h4>
          <p className="text-sm text-wow-muted mb-4">
            Crea un dashboard en Jira con: Burndown, Open Blockers, Recent Done, Cycle Time promedio.
          </p>
          <p className="text-sm text-wow-muted">
            Actualiza semanalmente antes de Tribe Sync. Toma 2 minutos pero comunica mucho.
          </p>
        </div>
      </div>
    ),
  },
]

export default function JiraPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm text-wow-muted mb-2">WOW GENERAL</p>
        <h1 className="text-4xl font-bold text-wow-purple">🛠️ Jira & Procesos</h1>
        <p className="text-wow-muted mt-3 max-w-2xl">
          Jira es nuestra fuente de verdad para trabajo en progreso. Aprende a usarlo correctamente.
        </p>
      </div>

      <Tabs tabs={JIRA_TABS} defaultTab="workflow" />

      {/* Quick Access */}
      <div className="grid md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-wow-line">
        <div className="border border-wow-line rounded-lg p-6">
          <h3 className="font-semibold text-wow-purple mb-2">🔗 Links Útiles</h3>
          <div className="space-y-2 text-sm">
            <div className="text-wow-muted">
              🔗 <a href="#" className="text-wow-purple font-semibold hover:underline">Ir a Jira</a>
            </div>
            <div className="text-wow-muted">
              📋 <a href="#" className="text-wow-purple font-semibold hover:underline">Squad Board</a>
            </div>
            <div className="text-wow-muted">
              📊 <a href="#" className="text-wow-purple font-semibold hover:underline">Dashboard</a>
            </div>
          </div>
        </div>

        <div className="border border-wow-line rounded-lg p-6">
          <h3 className="font-semibold text-wow-purple mb-2">📞 Soporte</h3>
          <div className="space-y-2 text-sm">
            <p className="text-wow-muted">¿Dudas sobre Jira?</p>
            <p className="text-wow-muted">
              Pregunta en <span className="text-wow-purple font-semibold">#jira-help</span> en Slack
            </p>
          </div>
        </div>

        <div className="border border-wow-line rounded-lg p-6">
          <h3 className="font-semibold text-wow-purple mb-2">📚 Recursos</h3>
          <div className="space-y-2 text-sm">
            <div className="text-wow-muted">
              🎓 <a href="#" className="text-wow-purple font-semibold hover:underline">Training</a>
            </div>
            <div className="text-wow-muted">
              🎥 <a href="#" className="text-wow-purple font-semibold hover:underline">Tutoriales</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
