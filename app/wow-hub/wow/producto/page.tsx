import Tabs from '@/components/Tabs'
import AuditLog from '@/components/AuditLog'

const PRODUCTO_TABS = [
  {
    id: 'vision',
    label: 'Visión & Estrategia',
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-wow-purple to-wow-lilac rounded-lg p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">🎯 Visión de Producto 2025</h3>
          <p className="text-white/90 mb-6">
            Ser la plataforma #1 en Latinoamérica para viajes con la mejor experiencia de usuario, combinando tecnología AI y servicio humano.
          </p>
          <div className="space-y-3">
            <p className="flex items-center gap-2">
              ✅ Experiencia personalizada con AI
            </p>
            <p className="flex items-center gap-2">
              ✅ Múltiples categorías de viaje integradas
            </p>
            <p className="flex items-center gap-2">
              ✅ Soporte 24/7 en 5 idiomas
            </p>
            <p className="flex items-center gap-2">
              ✅ Transacciones seguras y confiables
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-wow-line rounded-lg p-6">
            <h4 className="text-lg font-semibold text-wow-purple mb-4">📈 Métricas Clave</h4>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-wow-muted">GMV (Gross Merchandise Value)</p>
                <p className="text-2xl font-bold text-wow-purple">$2.5B</p>
                <p className="text-xs text-wow-muted">+35% YoY</p>
              </div>
              <div>
                <p className="text-sm text-wow-muted">NPS Score</p>
                <p className="text-2xl font-bold text-wow-purple">68</p>
                <p className="text-xs text-wow-muted">+8 puntos vs 2024</p>
              </div>
            </div>
          </div>

          <div className="border border-wow-line rounded-lg p-6">
            <h4 className="text-lg font-semibold text-wow-purple mb-4">🚀 Prioridades Q1-Q4 2025</h4>
            <ul className="space-y-2 text-sm text-wow-muted">
              <li className="flex gap-2">
                <span className="text-wow-gold">•</span>
                <span>AI-powered recommendations</span>
              </li>
              <li className="flex gap-2">
                <span className="text-wow-gold">•</span>
                <span>Expandir a 10 nuevos destinos</span>
              </li>
              <li className="flex gap-2">
                <span className="text-wow-gold">•</span>
                <span>Mejorar booking conversion 20%</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'roadmap',
    label: 'Roadmap',
    content: (
      <div className="space-y-6">
        <div className="space-y-6">
          {[
            {
              quarter: 'Q1 2025',
              title: 'Personalization Foundations',
              items: ['AI recommendation engine', 'User preference learning', 'A/B testing framework'],
            },
            {
              quarter: 'Q2 2025',
              title: 'AI at Scale',
              items: ['Deploy ML models to production', 'Real-time personalization', 'Conversion optimization'],
            },
            {
              quarter: 'Q3 2025',
              title: 'Expansion',
              items: ['10 nuevos destinos', 'Nuevo payment method (cripto)', 'Local partnerships'],
            },
            {
              quarter: 'Q4 2025',
              title: 'Consolidation & Innovation',
              items: ['Platform stability', 'New vertical (experiences)', 'International expansion'],
            },
          ].map((item) => (
            <div key={item.quarter} className="border border-wow-line rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="font-semibold text-wow-purple text-lg">{item.quarter}</h4>
                  <p className="text-wow-muted">{item.title}</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-wow-gold/20 flex items-center justify-center text-wow-gold font-bold">
                  {item.quarter.slice(-1)}
                </div>
              </div>
              <ul className="space-y-2">
                {item.items.map((i) => (
                  <li key={i} className="text-sm text-wow-muted flex gap-2">
                    <span className="text-wow-gold flex-shrink-0">▸</span>
                    <span>{i}</span>
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
    id: 'features',
    label: 'Features & Products',
    content: (
      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              name: 'Flights',
              emoji: '✈️',
              desc: 'Búsqueda y reserva de vuelos internacionales y domésticos',
              stats: '$1.2B GMV',
            },
            {
              name: 'Hotels',
              emoji: '🏨',
              desc: 'Reservas de hoteles en toda Latinoamérica',
              stats: '$800M GMV',
            },
            {
              name: 'Activities',
              emoji: '🎭',
              desc: 'Experiencias y tours locales',
              stats: '$300M GMV',
            },
            {
              name: 'Packages',
              emoji: '📦',
              desc: 'Paquetes todo incluido (vuelos + hotel)',
              stats: '$200M GMV',
            },
          ].map((feature) => (
            <div key={feature.name} className="border border-wow-line rounded-lg p-6 hover:shadow-md transition">
              <div className="text-4xl mb-3">{feature.emoji}</div>
              <h4 className="text-lg font-semibold text-wow-purple mb-2">{feature.name}</h4>
              <p className="text-sm text-wow-muted mb-4">{feature.desc}</p>
              <p className="text-sm font-semibold text-wow-gold">{feature.stats}</p>
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
        title="Controle de Alterações - Hub de Producto"
      />
    ),
  },
  {
    id: 'analytics',
    label: 'Analytics & Data',
    content: (
      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-wow-line rounded-lg p-6">
            <h4 className="text-lg font-semibold text-wow-purple mb-4">📊 Métricas de Negocio</h4>
            <div className="space-y-4">
              <div className="pb-4 border-b border-wow-line">
                <p className="text-sm text-wow-muted mb-1">Conversion Rate</p>
                <p className="text-2xl font-bold text-wow-purple">3.2%</p>
                <p className="text-xs text-green-600">↑ 0.3pp vs trimestre anterior</p>
              </div>
              <div className="pb-4 border-b border-wow-line">
                <p className="text-sm text-wow-muted mb-1">Average Order Value</p>
                <p className="text-2xl font-bold text-wow-purple">$450</p>
                <p className="text-xs text-green-600">↑ 8% YoY</p>
              </div>
              <div>
                <p className="text-sm text-wow-muted mb-1">Customer Lifetime Value</p>
                <p className="text-2xl font-bold text-wow-purple">$2,100</p>
                <p className="text-xs text-green-600">↑ 15% YoY</p>
              </div>
            </div>
          </div>

          <div className="border border-wow-line rounded-lg p-6">
            <h4 className="text-lg font-semibold text-wow-purple mb-4">📱 User Behavior</h4>
            <div className="space-y-4">
              <div className="pb-4 border-b border-wow-line">
                <p className="text-sm text-wow-muted mb-1">Monthly Active Users</p>
                <p className="text-2xl font-bold text-wow-purple">12.5M</p>
                <p className="text-xs text-green-600">↑ 22% YoY</p>
              </div>
              <div className="pb-4 border-b border-wow-line">
                <p className="text-sm text-wow-muted mb-1">Return Visitor Rate</p>
                <p className="text-2xl font-bold text-wow-purple">68%</p>
                <p className="text-xs text-green-600">↑ 5% vs año anterior</p>
              </div>
              <div>
                <p className="text-sm text-wow-muted mb-1">Mobile Traffic</p>
                <p className="text-2xl font-bold text-wow-purple">78%</p>
                <p className="text-xs text-wow-muted">del tráfico total</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border border-wow-gold rounded-lg p-6 bg-wow-surface-soft">
          <h4 className="font-semibold text-wow-purple mb-2">📈 Dashboard Completo</h4>
          <p className="text-sm text-wow-muted mb-4">
            Para acceso a dashboards, reports y análisis en profundidad, contacta con el equipo de Analytics.
          </p>
          <button className="text-wow-purple font-semibold text-sm hover:underline">
            Ir a Analytics Dashboard →
          </button>
        </div>
      </div>
    ),
  },
]

export default function ProductoPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm text-wow-muted mb-2">PRODUCTO</p>
        <h1 className="text-4xl font-bold text-wow-purple">📦 Hub de Producto</h1>
        <p className="text-wow-muted mt-3 max-w-2xl">
          Visión, estrategia, roadmap y métricas de nuestros productos. Centro de verdad para decisiones de producto.
        </p>
      </div>

      <Tabs tabs={PRODUCTO_TABS} defaultTab="vision" />
    </div>
  )
}
