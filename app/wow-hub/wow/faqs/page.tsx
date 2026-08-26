'use client'

import { useState } from 'react'
import Accordion from '@/components/Accordion'

const ALL_FAQS = [
  {
    topic: 'onboarding',
    icon: '🚀',
    title: 'Onboarding',
    items: [
      {
        id: 'onb-1',
        question: '¿Cuánto tiempo toma el onboarding?',
        answer:
          'El onboarding completo toma aproximadamente 2 semanas. En la primera semana haces cursos y conoces al squad. En la segunda semana, completas tareas pequeñas bajo supervision.',
      },
      {
        id: 'onb-2',
        question: '¿Dónde debo comenzar como nuevo joiner?',
        answer:
          'Comienza en la sección Onboarding de WoW Hub. Te guiará a través de: Historia de Despegar, Learning Paths, Estructura de Tribos, y procesos de Jira. Tu squad lead te asignará un mentor también.',
      },
      {
        id: 'onb-3',
        question: '¿Quién es mi punto de contacto en el onboarding?',
        answer:
          'Tu squad lead es el punto de contacto principal. Si tienes preguntas técnicas, tu tech lead. Si administrativas, tu HR buddy. Todos estarán presentados en tu primer día.',
      },
    ],
  },
  {
    topic: 'okrs',
    icon: '🎯',
    title: 'OKRs & Roadmap',
    items: [
      {
        id: 'okr-1',
        question: '¿Con qué frecuencia se revisan los OKRs?',
        answer:
          'Los OKRs se revisan cada trimestre. Tenemos Q1, Q2, Q3, Q4. Se discuten en Tribe Sync quincenal para ver progreso. Al final del trimestre hacemos un review formal.',
      },
      {
        id: 'okr-2',
        question: '¿Qué hago si mi squad no alcanzará un OKR?',
        answer:
          'Lo comunicas early en Tribe Sync. Análisis el bloqueador: ¿es priorización? ¿Capacidad? ¿Riesgo técnico? Juntos ajustamos plan: reducimos scope o extendemos timeline.',
      },
      {
        id: 'okr-3',
        question: '¿Cómo relaciono mi trabajo diario con OKRs?',
        answer:
          'Cada story en Jira debe linkarse a al menos un OKR. Al planificar el sprint, tu squad lead mapea stories a OKRs. En retro, validamos que lo completado avanzó los OKRs.',
      },
    ],
  },
  {
    topic: 'ceremonies',
    icon: '📋',
    title: 'Ceremonies & Meetings',
    items: [
      {
        id: 'cer-1',
        question: '¿Es obligatorio asistir a todas las ceremonies?',
        answer:
          'Sí, las ceremonies principales (Planning, Demo, Retro, Daily) son obligatorias para tu squad. Si tienes conflicto, comunícalo. Las meetings tribales (Tribe Sync) dependen del rol - squad leads deben asistir.',
      },
      {
        id: 'cer-2',
        question: '¿Puedo tomar notas durante una ceremony?',
        answer:
          'Sí, pero mejor: designa a alguien que tome notas cada ceremony. Eso evita que todos escriban y no escuchen. Las notas van a un doc compartido que se revisa antes de la próxima ceremony.',
      },
      {
        id: 'cer-3',
        question: '¿Qué significa "blameless" en un post-mortem?',
        answer:
          'Blameless significa que enfocamos en entender QUÉ falló en el proceso/sistema, no QUIÉN lo hizo. El objetivo es aprender y mejorar, no culpar. Todos son bienvenidos a hablar abiertamente.',
      },
    ],
  },
  {
    topic: 'technical',
    icon: '⚙️',
    title: 'Technical & Development',
    items: [
      {
        id: 'tech-1',
        question: '¿Cuál es el proceso de code review?',
        answer:
          'Todos los PRs necesitan al menos 1 aprobación técnica antes de mergear. El revisor verifica: lógica, tests, consistency con código existente. Discusiones respectuosas, no "lgtm".',
      },
      {
        id: 'tech-2',
        question: '¿Qué incluir en la descripción de un PR?',
        answer:
          'Incluye: JIRA issue linkado, qué cambió y por qué, cómo lo testeaste, screenshots si es UI, riesgos técnicos si aplica. Ayuda al revisor a entender el contexto rápidamente.',
      },
      {
        id: 'tech-3',
        question: '¿Con qué frecuencia deployamos?',
        answer:
          'Deployamos continuamente a staging. En producción, típicamente 1-2 veces por semana siguiendo el release calendar. En caso de hotfix crítico, deployamos on-demand.',
      },
      {
        id: 'tech-4',
        question: '¿Dónde documento las decisiones arquitectónicas?',
        answer:
          'Usa ADRs (Architecture Decision Records) en el repo. Formato simple: Context, Decision, Consequences, Alternatives. Linkea el ADR en PRs y Jira issues relevantes.',
      },
    ],
  },
  {
    topic: 'communication',
    icon: '💬',
    title: 'Communication & Collaboration',
    items: [
      {
        id: 'com-1',
        question: '¿En qué canales debe comunicarse cada cosa?',
        answer:
          'Slack para urgente/preguntas rápidas. Email para formal/histórico. Docs compartidos para contexto duradero. Meetings síncronos solo cuando es decisión o feedback real.',
      },
      {
        id: 'com-2',
        question: '¿Qué es un "standup asincrónico"?',
        answer:
          'En lugar de una llamada, escribes tu standup en un thread de Slack o doc. Es 5 min de lectura vs 15 min de meeting. Úsalo para standups que no sea crítica la sincronía.',
      },
      {
        id: 'com-3',
        question: '¿Cómo evito meeting overload?',
        answer:
          'Regla: todo meeting debe tener agenda clara y objetivo. Si pueda resolverse en un mensaje/doc, no es meeting. Cancelar meetings no es fracaso, es eficiencia.',
      },
    ],
  },
  {
    topic: 'career',
    icon: '🚀',
    title: 'Career Development',
    items: [
      {
        id: 'car-1',
        question: '¿Cómo progreso en Despegar?',
        answer:
          'Hay dos paths: especialista (profundidad técnica) o liderazgo (squad/tribe lead). Habla con tu lead sobre tu path preferido. Hacemos 1:1s regulares para planear desarrollo.',
      },
      {
        id: 'car-2',
        question: '¿Hay evaluaciones de performance?',
        answer:
          'Sí, evaluaciones semestrales contra competencias, OKR contribution, y comportamientos WoW. No es sorpresa - tu lead te da feedback continuo.',
      },
      {
        id: 'car-3',
        question: '¿Cómo accedo a recursos de learning?',
        answer:
          'Ve a Learning Paths en WoW Hub. También hay presupuesto para cursos/conferencias - habla con tu tribe lead. Mentoring conecta directamente - busca en WoW Connects.',
      },
    ],
  },
]

const TOPICS = [
  { id: 'all', label: '📌 All Topics', icon: '📌' },
  ...ALL_FAQS.map((faq) => ({
    id: faq.topic,
    label: faq.title,
    icon: faq.icon,
  })),
]

export default function FAQsPage() {
  const [activeTopic, setActiveTopic] = useState('all')

  const filteredFaqs =
    activeTopic === 'all' ? ALL_FAQS : ALL_FAQS.filter((faq) => faq.topic === activeTopic)

  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm text-wow-muted mb-2">WOW GENERAL</p>
        <h1 className="text-4xl font-bold text-wow-purple">🙋 FAQs</h1>
        <p className="text-wow-muted mt-3 max-w-2xl">
          Preguntas frecuentes sobre WoW, procesos, y cómo trabajamos en Despegar.
        </p>
      </div>

      {/* Topic Filter */}
      <div className="flex flex-wrap gap-2">
        {TOPICS.map((topic) => (
          <button
            key={topic.id}
            onClick={() => setActiveTopic(topic.id)}
            className={`px-4 py-2 rounded-lg font-semibold text-sm transition ${
              activeTopic === topic.id
                ? 'bg-wow-purple text-white'
                : 'bg-wow-surface-soft text-wow-purple hover:bg-wow-lilac-light'
            }`}
          >
            {topic.icon} {topic.label}
          </button>
        ))}
      </div>

      {/* FAQs Accordion */}
      <div className="space-y-6">
        {filteredFaqs.map((section) => (
          <div key={section.topic}>
            <div className="flex items-center gap-3 mb-4 pb-4 border-b border-wow-line">
              <span className="text-3xl">{section.icon}</span>
              <h2 className="text-xl font-bold text-wow-purple">{section.title}</h2>
            </div>
            <Accordion
              items={section.items.map((item) => ({
                id: item.id,
                title: item.question,
                content: <p className="text-wow-muted">{item.answer}</p>,
              }))}
            />
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-wow-purple to-wow-lilac rounded-lg p-8 text-white mt-12">
        <h3 className="text-2xl font-bold mb-3">¿No encontraste tu respuesta?</h3>
        <p className="text-white/90 mb-4">
          Pregunta en <span className="font-semibold">#wow-hub-help</span> en Slack o habla con tu Squad Lead.
        </p>
        <button className="px-6 py-3 bg-white text-wow-purple font-semibold rounded-lg hover:bg-opacity-90 transition">
          Hacer una pregunta
        </button>
      </div>
    </div>
  )
}
