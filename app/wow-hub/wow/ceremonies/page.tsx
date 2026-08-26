import Accordion from '@/components/Accordion'

const CEREMONIES = [
  {
    id: 'planning',
    title: '📅 Sprint Planning',
    icon: '📅',
    frequency: 'Semanal (Lunes 10:00)',
    duration: '2 horas',
    owner: 'Squad Lead',
    description: 'Definición de objetivos y scope para la semana entrante.',
    content: (
      <div className="space-y-4">
        <p className="text-wow-muted">
          En Sprint Planning, el squad decide qué trabajo completar durante el sprint próximo. Es donde se alinean los objetivos técnicos con los objetivos de negocio.
        </p>
        <div className="bg-wow-surface-soft rounded p-4 space-y-3">
          <div>
            <h5 className="font-semibold text-wow-purple mb-2">Agenda</h5>
            <ol className="list-decimal list-inside text-sm text-wow-muted space-y-1">
              <li>Repaso de capacidad del squad (15 min)</li>
              <li>Priorización de historias (30 min)</li>
              <li>Estimación técnica (45 min)</li>
              <li>Definición de DoD y criterios (15 min)</li>
              <li>Cierre y compromisos (15 min)</li>
            </ol>
          </div>
          <div>
            <h5 className="font-semibold text-wow-purple mb-2">Documentación</h5>
            <p className="text-sm text-wow-muted">
              ✓ Usar Jira para issues • ✓ Confluence para design docs • ✓ ADRs para decisiones arquitectónicas
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'daily',
    title: '🌅 Daily Standup',
    icon: '🌅',
    frequency: 'Diaria (9:30 AM)',
    duration: '15 minutos',
    owner: 'Squad Lead',
    description: 'Sincronización diaria del progreso, bloqueadores y dependencias.',
    content: (
      <div className="space-y-4">
        <p className="text-wow-muted">
          El Daily Standup es el espacio para alineación rápida. Cada persona comparte qué hizo ayer, qué hace hoy y si tiene bloqueadores.
        </p>
        <div className="bg-wow-surface-soft rounded p-4 space-y-3">
          <div>
            <h5 className="font-semibold text-wow-purple mb-2">Formato (3 preguntas)</h5>
            <ol className="list-decimal list-inside text-sm text-wow-muted space-y-1">
              <li>¿Qué completé ayer?</li>
              <li>¿Qué planeo hoy?</li>
              <li>¿Tengo bloqueadores?</li>
            </ol>
          </div>
          <div className="border-l-4 border-wow-gold pl-4 py-2">
            <p className="text-sm text-wow-muted">
              <strong>Tip:</strong> Si alguien tiene un bloqueador o discusión técnica larga, sepáralo en otro meeting asincrónico o video.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'demo',
    title: '🎬 Demo / Show & Tell',
    icon: '🎬',
    frequency: 'Semanal (Viernes 14:00)',
    duration: '1 hora',
    owner: 'Squad Lead',
    description: 'Exhibición del trabajo completado y feedback de stakeholders.',
    content: (
      <div className="space-y-4">
        <p className="text-wow-muted">
          Momento para celebrar lo que se completó, recibir feedback temprano y ajustar dirección si es necesario.
        </p>
        <div className="bg-wow-surface-soft rounded p-4 space-y-3">
          <div>
            <h5 className="font-semibold text-wow-purple mb-2">Estructura</h5>
            <ul className="list-disc list-inside text-sm text-wow-muted space-y-1">
              <li>Demostración en vivo de features completadas (30 min)</li>
              <li>Feedback de Product y Stakeholders (20 min)</li>
              <li>Q&A y discusión (10 min)</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-wow-purple mb-2">Invitados típicos</h5>
            <p className="text-sm text-wow-muted">Product Managers, Designers, Otros squads, Stakeholders del negocio</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'retro',
    title: '🔄 Retrospectiva',
    icon: '🔄',
    frequency: 'Semanal (Viernes 15:15)',
    duration: '1.5 horas',
    owner: 'Squad Lead',
    description: 'Reflexión sobre el sprint: qué salió bien, qué mejorar, acciones concretas.',
    content: (
      <div className="space-y-4">
        <p className="text-wow-muted">
          La Retrospectiva es el motor de mejora continua del squad. No es solo para hablar de problemas, sino para identificar acciones concretas.
        </p>
        <div className="bg-wow-surface-soft rounded p-4 space-y-3">
          <div>
            <h5 className="font-semibold text-wow-purple mb-2">Formato Propuesto (Start, Stop, Continue)</h5>
            <ul className="list-disc list-inside text-sm text-wow-muted space-y-1">
              <li><strong>Start:</strong> Qué nuevo debemos intentar (30 min)</li>
              <li><strong>Stop:</strong> Qué debemos dejar de hacer (20 min)</li>
              <li><strong>Continue:</strong> Qué está funcionando bien (15 min)</li>
              <li><strong>Action Items:</strong> Compromisos para el próximo sprint (25 min)</li>
            </ul>
          </div>
          <div className="border-l-4 border-wow-gold pl-4 py-2">
            <p className="text-sm text-wow-muted">
              <strong>Importante:</strong> Cada action item debe tener owner, deadline y forma de validar.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'tribe-sync',
    title: '🏛️ Tribe Sync',
    icon: '🏛️',
    frequency: 'Quincenal (Jueves 16:00)',
    duration: '1 hora',
    owner: 'Tribe Lead',
    description: 'Alineación entre todos los squads de la tribu. OKRs, dependencias, iniciativas cross-squad.',
    content: (
      <div className="space-y-4">
        <p className="text-wow-muted">
          Sincronización a nivel de tribu. Es donde discutimos cómo los squads colaboran, resolvemos dependencias y alineamos en la visión común.
        </p>
        <div className="bg-wow-surface-soft rounded p-4 space-y-3">
          <div>
            <h5 className="font-semibold text-wow-purple mb-2">Temas típicos</h5>
            <ul className="list-disc list-inside text-sm text-wow-muted space-y-1">
              <li>Estado de OKRs a nivel de tribu</li>
              <li>Dependencias entre squads</li>
              <li>Iniciativas cross-squad</li>
              <li>Aprendizajes y best practices</li>
              <li>Cambios en prioridades</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-wow-purple mb-2">Participantes</h5>
            <p className="text-sm text-wow-muted">Tribe Lead, todos los Squad Leads, Tech Leads de tribu</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'postmortem',
    title: '🔍 Post-Mortem',
    icon: '🔍',
    frequency: 'Ad-hoc (después de incidentes)',
    duration: '1.5 horas',
    owner: 'Incident Owner',
    description: 'Análisis de incidentes para aprender y prevenir recurrencias.',
    content: (
      <div className="space-y-4">
        <p className="text-wow-muted">
          Post-mortem es una herramienta blameless para aprender de fallos. El objetivo es entender qué falló y cómo evitarlo en el futuro, NO culpar a personas.
        </p>
        <div className="bg-wow-surface-soft rounded p-4 space-y-3">
          <div>
            <h5 className="font-semibold text-wow-purple mb-2">Estructura</h5>
            <ol className="list-decimal list-inside text-sm text-wow-muted space-y-1">
              <li>Descripción del incidente (10 min)</li>
              <li>Timeline de eventos (20 min)</li>
              <li>Root cause analysis (30 min)</li>
              <li>Lecciones aprendidas (20 min)</li>
              <li>Action items para prevenir (15 min)</li>
            </ol>
          </div>
          <div className="border-l-4 border-wow-gold pl-4 py-2">
            <p className="text-sm text-wow-muted">
              <strong>Regla de oro:</strong> "El que comete el error es el que mejor lo entiende". No es una sesión punitiva.
            </p>
          </div>
        </div>
      </div>
    ),
  },
]

export default function CeremoniesPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm text-wow-muted mb-2">WOW GENERAL</p>
        <h1 className="text-4xl font-bold text-wow-purple">📋 Ceremonies</h1>
        <p className="text-wow-muted mt-3 max-w-2xl">
          Las ceremonias son rituales que mantienen el squad y la tribu sincronizados y en mejora continua.
        </p>
      </div>

      {/* Ceremonies Accordion */}
      <Accordion
        items={CEREMONIES.map((ceremony) => ({
          id: ceremony.id,
          title: `${ceremony.icon} ${ceremony.title} — ${ceremony.frequency} (${ceremony.duration})`,
          content: ceremony.content,
        }))}
        defaultOpenId="planning"
      />

      {/* Summary Grid */}
      <div className="grid md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-wow-line">
        <div className="bg-gradient-to-br from-wow-purple-100 to-wow-lilac-100 rounded-lg p-6">
          <h3 className="font-semibold text-wow-purple mb-2">⏰ Cadencia Semanal</h3>
          <div className="text-sm text-wow-muted space-y-1">
            <p>• Lunes: Planning</p>
            <p>• Diaria: Standup (9:30)</p>
            <p>• Viernes: Demo + Retro</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-wow-lilac-100 to-wow-gold-100 rounded-lg p-6">
          <h3 className="font-semibold text-wow-purple mb-2">🤝 Filosofía</h3>
          <div className="text-sm text-wow-muted space-y-1">
            <p>✓ Corto y al punto</p>
            <p>✓ Blameless</p>
            <p>✓ Orientado a acción</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-wow-gold-100 to-wow-purple-100 rounded-lg p-6">
          <h3 className="font-semibold text-wow-purple mb-2">🎯 Propósito</h3>
          <div className="text-sm text-wow-muted space-y-1">
            <p>✓ Alineación</p>
            <p>✓ Transparencia</p>
            <p>✓ Mejora continua</p>
          </div>
        </div>
      </div>
    </div>
  )
}
