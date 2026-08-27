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
        year: 'Q4 2024',
        title: { ES: 'Piloto ONA', PT: 'Piloto ONA', EN: 'ONA Pilot' } as Entry,
      },
      {
        year: 'Q1/Q2 2025',
        title: { ES: 'Definición WoW', PT: 'Definição WoW', EN: 'WoW Definition' } as Entry,
      },
      {
        year: 'Q3/2025',
        title: { ES: 'Wave I', PT: 'Wave I', EN: 'Wave I' } as Entry,
      },
      {
        year: 'Q4/2026',
        title: { ES: 'Wave II', PT: 'Wave II', EN: 'Wave II' } as Entry,
      },
      {
        year: '2026',
        title: { ES: '21 tribes*', PT: '21 tribes*', EN: '21 tribes*' } as Entry,
      },
    ],
    timelineFootnote: {
      ES: '(*) Incluye Product, UX, IT, Business Partners + Key Contributors',
      PT: '(*) Inclui Product, UX, IT, Business Partners + Key Contributors',
      EN: '(*) Including Product, UX, IT, Business Partners + Key Contributors',
    } as Entry,
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
