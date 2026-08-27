export type Lang = 'ES' | 'PT' | 'EN'

export type Entry = Record<Lang, string>

export const translations = {
  common: {
    search: { ES: 'Buscar...', PT: 'Buscar...', EN: 'Search...' } as Entry,
    breadcrumbGeneral: { ES: 'General', PT: 'Geral', EN: 'General' } as Entry,
    menu: {
      historia: { ES: 'Historia', PT: 'História', EN: 'History' } as Entry,
      auditoria: { ES: 'Auditoría', PT: 'Auditoria', EN: 'Audit Log' } as Entry,
      productoGroup: { ES: 'PRODUCTO', PT: 'PRODUTO', EN: 'PRODUCT' } as Entry,
      hubProducto: { ES: 'Hub de Producto', PT: 'Hub de Produto', EN: 'Product Hub' } as Entry,
    },
  },
  historia: {
    title: { ES: 'Nuestra Historia', PT: 'Nossa História', EN: 'Our History' } as Entry,
    subtitle: {
      ES: 'El origen y evolución del Way of Working en Despegar.',
      PT: 'A origem e evolução do Way of Working na Despegar.',
      EN: 'The origin and evolution of the Way of Working at Despegar.',
    } as Entry,
    videoCaption: {
      ES: 'Introducción al WoW · 8 min',
      PT: 'Introdução ao WoW · 8 min',
      EN: 'Introduction to WoW · 8 min',
    } as Entry,
    timelineTitle: {
      ES: 'Evolución 2024 - 2026',
      PT: 'Evolução 2024 - 2026',
      EN: 'Evolution 2024 - 2026',
    } as Entry,
    timeline: [
      {
        year: '2024',
        title: { ES: 'Primer Piloto', PT: 'Primeiro Piloto', EN: 'First Pilot' } as Entry,
        desc: {
          ES: 'Iniciamos el framework con Growth y Flights',
          PT: 'Iniciamos o framework com Growth e Flights',
          EN: 'We started the framework with Growth and Flights',
        } as Entry,
      },
      {
        year: '2025',
        title: { ES: 'Adopción Gradual', PT: 'Adoção Gradual', EN: 'Gradual Adoption' } as Entry,
        desc: {
          ES: 'Todos los tribes se unen al WoW',
          PT: 'Todas as tribes se juntam ao WoW',
          EN: 'All tribes join the WoW',
        } as Entry,
      },
      {
        year: '2026',
        title: { ES: 'Consolidación', PT: 'Consolidação', EN: 'Consolidation' } as Entry,
        desc: {
          ES: 'WoW es nuestra forma de trabajar',
          PT: 'WoW é a nossa forma de trabalhar',
          EN: 'WoW is our way of working',
        } as Entry,
      },
    ],
    cards: {
      try: {
        ES: 'Experimenta nuevas ideas constantemente',
        PT: 'Experimente novas ideias constantemente',
        EN: 'Constantly experiment with new ideas',
      } as Entry,
      learn: {
        ES: 'Aprende de los resultados y fracasos',
        PT: 'Aprenda com os resultados e fracassos',
        EN: 'Learn from results and failures',
      } as Entry,
      repeat: {
        ES: 'Repite el ciclo mejorando cada vez',
        PT: 'Repita o ciclo melhorando cada vez',
        EN: 'Repeat the cycle, improving each time',
      } as Entry,
    },
  },
}
