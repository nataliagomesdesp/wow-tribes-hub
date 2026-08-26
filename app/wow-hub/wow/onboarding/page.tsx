import Tabs from '@/components/Tabs'

const TABS = [
  {
    id: 'glosario',
    label: 'Glosario',
    content: (
      <div className="space-y-6">
        <div className="grid gap-4">
          <div className="border border-wow-line rounded-lg p-6 hover:bg-wow-surface-soft transition">
            <h3 className="font-semibold text-wow-purple mb-2">Squad</h3>
            <p className="text-wow-muted">
              Un equipo multidisciplinario de 5-7 personas que trabaja conjuntamente para entregar valor. Es el núcleo de nuestra forma de trabajar.
            </p>
          </div>

          <div className="border border-wow-line rounded-lg p-6 hover:bg-wow-surface-soft transition">
            <h3 className="font-semibold text-wow-purple mb-2">Tribu</h3>
            <p className="text-wow-muted">
              Grupo de 2-3 squads alrededor de un objetivo común. Nos ayuda a mantener alineación y comunicación efectiva.
            </p>
          </div>

          <div className="border border-wow-line rounded-lg p-6 hover:bg-wow-surface-soft transition">
            <h3 className="font-semibold text-wow-purple mb-2">OKR</h3>
            <p className="text-wow-muted">
              Objectives and Key Results - Marco de establecimiento de metas que define qué queremos lograr y cómo mediremos el éxito.
            </p>
          </div>

          <div className="border border-wow-line rounded-lg p-6 hover:bg-wow-surface-soft transition">
            <h3 className="font-semibold text-wow-purple mb-2">FCA</h3>
            <p className="text-wow-muted">
              Funcionalidad, Calidad y Arquitectura - Dimensiones de evaluación para el trabajo técnico además de OKRs.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'canvas',
    label: 'Canvas',
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-br from-wow-purple-100 to-wow-lilac-100 rounded-lg p-8">
          <h3 className="text-lg font-semibold text-wow-purple mb-4">
            🎯 Business Model Canvas
          </h3>
          <p className="text-wow-muted mb-6">
            Herramienta visual para diseñar y evaluar nuevos modelos de negocio. Incluye 9 bloques clave:
          </p>
          <div className="grid grid-cols-3 gap-4">
            {['Partners', 'Activities', 'Value Prop', 'Segments', 'Resources', 'Channels', 'Relationships', 'Revenue', 'Costs'].map((item) => (
              <div key={item} className="bg-white rounded border border-wow-line p-3 text-sm font-semibold text-wow-purple">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="border border-wow-gold rounded-lg p-6 bg-wow-surface-soft">
          <h4 className="font-semibold text-wow-purple mb-2">📌 Cómo usarlo</h4>
          <ul className="list-disc list-inside text-wow-muted space-y-2">
            <li>Úsalo en reuniones de planning para validar nuevas iniciativas</li>
            <li>Ayuda a alinear a toda la tribu en la propuesta de valor</li>
            <li>Es iterativo - actualiza conforme aprendes</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 'waterfall',
    label: 'Waterfall',
    content: (
      <div className="space-y-6">
        <div className="relative">
          <div className="space-y-6">
            {[
              { step: 1, title: 'Discovery', desc: 'Exploración y validación del problema' },
              { step: 2, title: 'Design', desc: 'Diseño de la solución con stakeholders' },
              { step: 3, title: 'Implementation', desc: 'Desarrollo y construcción' },
              { step: 4, title: 'Testing', desc: 'QA y validación de criterios' },
              { step: 5, title: 'Launch', desc: 'Despliegue en producción' },
            ].map((phase, idx) => (
              <div key={phase.step} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-wow-gold text-wow-purple font-semibold flex items-center justify-center">
                    {phase.step}
                  </div>
                  {idx < 4 && <div className="w-1 h-12 bg-wow-line mt-2" />}
                </div>
                <div className="pb-6">
                  <h4 className="font-semibold text-wow-purple">{phase.title}</h4>
                  <p className="text-wow-muted text-sm">{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border border-wow-gold rounded-lg p-6 bg-wow-surface-soft">
          <h4 className="font-semibold text-wow-purple mb-2">⚠️ Importante</h4>
          <p className="text-wow-muted text-sm">
            El Waterfall es un flujo teórico. En la práctica, muchas fases se solapan y es iterativo. Usa esto como referencia, no como ley.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'wow-general',
    label: 'WoW General',
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-wow-purple to-wow-lilac rounded-lg p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">🌟 La Esencia del WoW</h3>
          <p className="text-white/90 mb-6">
            Nuestro Way of Working es la forma en que trabajamos juntos como organización. Define principios, procesos y expectativas.
          </p>
          <div className="space-y-3">
            <p className="flex items-center gap-2">
              ✅ Colaboración multidisciplinaria
            </p>
            <p className="flex items-center gap-2">
              ✅ Autonomía con alineación
            </p>
            <p className="flex items-center gap-2">
              ✅ Entrega continua de valor
            </p>
            <p className="flex items-center gap-2">
              ✅ Aprendizaje constante
            </p>
          </div>
        </div>

        <div className="border border-wow-line rounded-lg p-6">
          <h4 className="font-semibold text-wow-purple mb-4">📚 Las 9 Secciones</h4>
          <div className="grid grid-cols-2 gap-3">
            {['Historia', 'Onboarding', 'Learning', 'Tribos', 'OKRs y FCAs', 'Ceremonies', 'Jira', 'FAQs', 'WoW Connects'].map((section) => (
              <div key={section} className="bg-wow-surface-soft rounded p-3 text-sm font-medium text-wow-purple">
                {section}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'comms',
    label: 'Comms',
    content: (
      <div className="space-y-6">
        <div className="border-l-4 border-wow-gold bg-wow-surface-soft rounded-r-lg p-6">
          <h4 className="font-semibold text-wow-purple mb-4">📢 Canales de Comunicación</h4>
          <div className="space-y-4">
            <div>
              <h5 className="font-semibold text-wow-purple mb-1">Slack</h5>
              <p className="text-wow-muted text-sm">
                Chat en tiempo real. Úsalo para decisiones rápidas, actualizaciones, y coordinación diaria.
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-wow-purple mb-1">Meetings Síncronos</h5>
              <p className="text-wow-muted text-sm">
                Reuniones planificadas para decisiones importantes y alineación de tribu/squad.
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-wow-purple mb-1">Documentación</h5>
              <p className="text-wow-muted text-sm">
                Documentos compartidos para contexto duradero. Fuente de verdad para procesos y decisiones.
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-wow-purple mb-1">Retros & Demos</h5>
              <p className="text-wow-muted text-sm">
                Espacios de aprendizaje y feedback constante. Crítico para la mejora continua.
              </p>
            </div>
          </div>
        </div>

        <div className="border border-wow-line rounded-lg p-6">
          <h4 className="font-semibold text-wow-purple mb-4">🎯 Principios de Comunicación</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3">
              <span className="text-wow-gold font-bold">•</span>
              <span className="text-wow-muted"><strong className="text-wow-purple">Transparencia:</strong> Comparte información abiertamente</span>
            </li>
            <li className="flex gap-3">
              <span className="text-wow-gold font-bold">•</span>
              <span className="text-wow-muted"><strong className="text-wow-purple">Asincronía:</strong> No todo requiere reunión en vivo</span>
            </li>
            <li className="flex gap-3">
              <span className="text-wow-gold font-bold">•</span>
              <span className="text-wow-muted"><strong className="text-wow-purple">Claridad:</strong> Sé específico y conciso en tus mensajes</span>
            </li>
            <li className="flex gap-3">
              <span className="text-wow-gold font-bold">•</span>
              <span className="text-wow-muted"><strong className="text-wow-purple">Inclusión:</strong> Asegúrate de que todos puedan participar</span>
            </li>
          </ul>
        </div>
      </div>
    ),
  },
]

export default function OnboardingPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm text-wow-muted mb-2">WOW GENERAL</p>
        <h1 className="text-4xl font-bold text-wow-purple">🚀 Onboarding</h1>
        <p className="text-wow-muted mt-3">
          Aprende los conceptos fundamentales del Way of Working y la estructura de Despegar.
        </p>
      </div>

      <Tabs tabs={TABS} defaultTab="glosario" />
    </div>
  )
}
