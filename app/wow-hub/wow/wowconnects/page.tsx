'use client'

import { useState } from 'react'

const CONNECT_CATEGORIES = [
  {
    id: 'mentors',
    emoji: '👨‍🏫',
    title: 'Mentores',
    description: 'Personas disponibles para mentoring 1:1',
  },
  {
    id: 'peers',
    emoji: '🤝',
    title: 'Peers',
    description: 'Conecta con colegas en roles similares',
  },
  {
    id: 'experts',
    emoji: '🎓',
    title: 'Experts',
    description: 'Especialistas en temas específicos',
  },
]

const ALL_PEOPLE = [
  {
    id: 'maria-garcia',
    name: 'María García',
    role: 'Staff Engineer, Search',
    tribe: 'Search Tribe',
    categories: ['mentors', 'experts'],
    expertise: ['Distributed Systems', 'Search Algorithms', 'Performance'],
    bio: '10 años en tech, especialista en search. Disponible para mentoring técnico.',
    timezone: 'GMT-3',
    availability: '2 horas/mes',
    calendar: 'calendly.com/maria',
  },
  {
    id: 'carlos-lopez',
    name: 'Carlos López',
    role: 'Frontend Lead, Payments',
    tribe: 'Payments Tribe',
    categories: ['mentors', 'peers'],
    expertise: ['Frontend Architecture', 'React', 'Design Systems'],
    bio: 'Facilitador de cambio. Excelente para mentoría de liderazgo de squad.',
    timezone: 'GMT-3',
    availability: '3 horas/mes',
    calendar: 'calendly.com/carlos',
  },
  {
    id: 'ana-martinez',
    name: 'Ana Martínez',
    role: 'DevOps Lead, Platform',
    tribe: 'Platform Tribe',
    categories: ['experts', 'mentors'],
    expertise: ['Infrastructure', 'Kubernetes', 'CI/CD'],
    bio: 'Construyó la infra actual de Despegar. Mentora en temas de DevOps.',
    timezone: 'GMT-3',
    availability: '1 hora/mes',
    calendar: 'calendly.com/ana',
  },
  {
    id: 'diego-rodriguez',
    name: 'Diego Rodríguez',
    role: 'Principal Engineer, Payments',
    tribe: 'Payments Tribe',
    categories: ['experts', 'mentors'],
    expertise: ['Payment Systems', 'Fintech', 'Security'],
    bio: 'Experto mundial en payments. Disponible para preguntas arquitectónicas.',
    timezone: 'GMT-3',
    availability: '2 horas/mes',
    calendar: 'calendly.com/diego',
  },
  {
    id: 'sandra-diaz',
    name: 'Sandra Díaz',
    role: 'Squad Lead, Flights',
    tribe: 'Experiences Tribe',
    categories: ['peers', 'mentors'],
    expertise: ['Squad Leadership', 'Agile', 'Team Dynamics'],
    bio: 'Squad lead junior con mentoría. Excelente para nuevos leads.',
    timezone: 'GMT-3',
    availability: '3 horas/mes',
    calendar: 'calendly.com/sandra',
  },
  {
    id: 'jorge-jimenez',
    name: 'Jorge Jiménez',
    role: 'Tribe Lead, Platform',
    tribe: 'Platform Tribe',
    categories: ['mentors', 'experts'],
    expertise: ['Strategic Planning', 'Scaling', 'Organizational Design'],
    bio: 'Tribu lead con expertise en scaling. Mentora para liderazgo senior.',
    timezone: 'GMT-3',
    availability: '2 horas/mes',
    calendar: 'calendly.com/jorge',
  },
]

export default function WoWConnectsPage() {
  const [activeCategory, setActiveCategory] = useState('mentors')

  const filteredPeople = ALL_PEOPLE.filter((person) =>
    person.categories.includes(activeCategory)
  )

  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm text-wow-muted mb-2">WOW GENERAL</p>
        <h1 className="text-4xl font-bold text-wow-purple">💬 WoW Connects</h1>
        <p className="text-wow-muted mt-3 max-w-2xl">
          Red de mentores, pares y expertos en Despegar. Conecta para aprender, crecer y resolver desafíos.
        </p>
      </div>

      {/* Category Filter */}
      <div className="grid grid-cols-3 gap-4">
        {CONNECT_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`p-6 rounded-lg text-center transition ${
              activeCategory === cat.id
                ? 'bg-wow-purple text-white shadow-lg'
                : 'bg-wow-surface-soft text-wow-purple hover:bg-wow-lilac-light'
            }`}
          >
            <div className="text-3xl mb-2">{cat.emoji}</div>
            <h3 className="font-semibold mb-1">{cat.title}</h3>
            <p className="text-xs opacity-80">{cat.description}</p>
          </button>
        ))}
      </div>

      {/* People Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {filteredPeople.map((person) => (
          <div
            key={person.id}
            className="border border-wow-line rounded-lg overflow-hidden hover:shadow-md transition"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-wow-purple to-wow-lilac p-6 text-white">
              <h3 className="text-lg font-bold">{person.name}</h3>
              <p className="text-white/90 text-sm">{person.role}</p>
              <p className="text-white/70 text-xs mt-1">🏛️ {person.tribe}</p>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              <p className="text-wow-muted">{person.bio}</p>

              {/* Expertise */}
              <div>
                <h5 className="text-sm font-semibold text-wow-purple mb-2">🎓 Expertise</h5>
                <div className="flex flex-wrap gap-2">
                  {person.expertise.map((exp) => (
                    <span
                      key={exp}
                      className="text-xs bg-wow-lilac-light text-wow-purple rounded-full px-3 py-1 font-semibold"
                    >
                      {exp}
                    </span>
                  ))}
                </div>
              </div>

              {/* Details */}
              <div className="grid grid-cols-2 gap-4 text-sm border-t border-wow-line pt-4">
                <div>
                  <p className="text-wow-muted text-xs mb-1">⏰ Disponibilidad</p>
                  <p className="font-semibold text-wow-purple">{person.availability}</p>
                </div>
                <div>
                  <p className="text-wow-muted text-xs mb-1">🌍 Timezone</p>
                  <p className="font-semibold text-wow-purple">{person.timezone}</p>
                </div>
              </div>

              {/* CTA */}
              <button className="w-full mt-4 px-4 py-2 bg-wow-purple text-white rounded-lg font-semibold hover:bg-opacity-90 transition">
                📅 Agendar sesión
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* How it Works */}
      <div className="border border-wow-line rounded-lg p-8 mt-12">
        <h2 className="text-2xl font-bold text-wow-purple mb-6">❓ Cómo funciona</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              step: '1',
              title: 'Encuentra',
              desc: 'Filtra por categoría y expertise',
            },
            {
              step: '2',
              title: 'Conecta',
              desc: 'Abre el calendario y elige horario',
            },
            {
              step: '3',
              title: 'Agenda',
              desc: 'Recibe confirmación y link de meet',
            },
            {
              step: '4',
              title: 'Aprende',
              desc: 'Sesión 1:1 con tu mentor/experto',
            },
          ].map((item) => (
            <div key={item.step} className="text-center">
              <div className="w-12 h-12 rounded-full bg-wow-gold text-wow-purple font-bold flex items-center justify-center mx-auto mb-3">
                {item.step}
              </div>
              <h4 className="font-semibold text-wow-purple mb-2">{item.title}</h4>
              <p className="text-sm text-wow-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Become a Mentor */}
      <div className="bg-gradient-to-r from-wow-lilac-100 to-wow-gold-100 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-wow-purple mb-3">👨‍🏫 ¿Quieres ser Mentor?</h3>
        <p className="text-wow-muted mb-4">
          Si tienes expertise y disponibilidad, queremos que enseñes. Mentoring es una forma poderosa de crecer como líder y ayudar a otros.
        </p>
        <button className="px-6 py-3 bg-wow-purple text-white rounded-lg font-semibold hover:bg-opacity-90 transition">
          Registrarme como Mentor
        </button>
      </div>

      {/* Rules */}
      <div className="bg-wow-surface-soft border border-wow-line rounded-lg p-6">
        <h4 className="font-semibold text-wow-purple mb-4">📌 Principios de WoW Connects</h4>
        <ul className="space-y-2 text-sm text-wow-muted">
          <li className="flex gap-2">
            <span className="text-wow-gold flex-shrink-0">✓</span>
            <span><strong className="text-wow-purple">Voluntario:</strong> Mentores donan su tiempo</span>
          </li>
          <li className="flex gap-2">
            <span className="text-wow-gold flex-shrink-0">✓</span>
            <span><strong className="text-wow-purple">Respetuoso:</strong> Honra el tiempo de ambos</span>
          </li>
          <li className="flex gap-2">
            <span className="text-wow-gold flex-shrink-0">✓</span>
            <span><strong className="text-wow-purple">Confidencial:</strong> Lo que se habla queda en privado</span>
          </li>
          <li className="flex gap-2">
            <span className="text-wow-gold flex-shrink-0">✓</span>
            <span><strong className="text-wow-purple">Preparado:</strong> Llega con preguntas claras</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
