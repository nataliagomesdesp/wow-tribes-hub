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
  okrs: {
    title: { ES: 'OKRs & FCAs', PT: 'OKRs & FCAs', EN: 'OKRs & FCAs' } as Entry,
    hubName: { ES: 'WoW OKR HUB', PT: 'WoW OKR HUB', EN: 'WoW OKR HUB' } as Entry,
    description: {
      ES: 'Todo lo que necesitás para crear, seguir y mejorar los OKRs de tu Tribu y tus Squads.',
      PT: 'Tudo o que você precisa para criar, acompanhar e melhorar os OKRs da sua Tribo e dos seus Squads.',
      EN: 'Everything you need to create, track, and improve your Tribe’s and Squads’ OKRs.',
    } as Entry,
    ctaLabel: {
      ES: 'Ir a WoW OKR HUB',
      PT: 'Ir para o WoW OKR HUB',
      EN: 'Go to WoW OKR HUB',
    } as Entry,
  },
  ceremonies: {
    title: { ES: 'WoW + New Management Model (NMM) | Ceremonies', PT: 'WoW + New Management Model (NMM) | Ceremonies', EN: 'WoW + New Management Model (NMM) | Ceremonies' } as Entry,
    subtitle: {
      ES: 'Los rituales que mantienen alineados al Comité, la Tribu y el Squad, y cómo se conectan entre sí.',
      PT: 'Os rituais que mantêm alinhados o Comitê, a Tribo e o Squad, e como eles se conectam entre si.',
      EN: 'The rituals that keep the Committee, the Tribe, and the Squad aligned, and how they connect to each other.',
    } as Entry,
    lanes: {
      nmm: { ES: 'New Management Model (NMM)', PT: 'New Management Model (NMM)', EN: 'New Management Model (NMM)' } as Entry,
      tribe: { ES: 'Tribu', PT: 'Tribo', EN: 'Tribe' } as Entry,
      squad: { ES: 'Squad', PT: 'Squad', EN: 'Squad' } as Entry,
    },
    workingCycleLabel: { ES: 'Working Cycle', PT: 'Working Cycle', EN: 'Working Cycle' } as Entry,
    tableHeaders: {
      ceremony: { ES: 'Ceremonia', PT: 'Cerimônia', EN: 'Ceremony' } as Entry,
      participants: { ES: 'Participantes', PT: 'Participantes', EN: 'Participants' } as Entry,
      content: { ES: 'Contenido', PT: 'Conteúdo', EN: 'Content' } as Entry,
      details: { ES: 'Detalles', PT: 'Detalhes', EN: 'Details' } as Entry,
    },
    slackChannelsLinkLabel: {
      ES: 'lista completa de canales',
      PT: 'lista completa de canais',
      EN: 'complete channels list',
    } as Entry,
    items: [
      {
        id: 'committee-mrm',
        name: 'Committee MRM',
        lane: 'nmm',
        participants: {
          ES: 'Miembros de la reunión MRM',
          PT: 'Membros da reunião MRM',
          EN: 'MRM Meeting members',
        } as Entry,
        content: [
          { ES: 'FCAs propuestas para OKRs amarillo/rojo', PT: 'FCAs propostas para OKRs amarelo/vermelho', EN: 'FCAs proposed for OKRs yellow/red' } as Entry,
          { ES: 'Actualizaciones de estado de contexto y progreso', PT: 'Atualizações de status de contexto e progresso', EN: 'Context status and progress updates' } as Entry,
        ],
        details: {
          ES: 'Alinear al Comité sobre el estado del país y solicitudes.',
          PT: 'Alinhar o Comitê sobre o status do país e solicitações.',
          EN: 'Align the Committee on country status and requests.',
        } as Entry,
      },
      {
        id: 'commercial-sync',
        name: 'Commercial Sync',
        lane: 'nmm',
        participants: {
          ES: 'A definir con cada Planning Partner',
          PT: 'A definir com cada Planning Partner',
          EN: 'To be reviewed with each Planning Partner',
        } as Entry,
        content: [
          { ES: 'FCAs propuestas para OKRs amarillo/rojo', PT: 'FCAs propostas para OKRs amarelo/vermelho', EN: 'FCAs proposed for OKRs yellow/red' } as Entry,
          { ES: 'Actualizaciones de estado de contexto y progreso', PT: 'Atualizações de status de contexto e progresso', EN: 'Context status and progress updates' } as Entry,
        ],
        details: {
          ES: 'Frecuencia a definir con cada Planning Partner.',
          PT: 'Frequência a definir com cada Planning Partner.',
          EN: 'Frequency to be reviewed with each Planning Partner.',
        } as Entry,
      },
      {
        id: 'strategic-tribe-sync',
        name: 'Strategic Tribe Sync + Slack',
        lane: 'tribe',
        participants: {
          ES: 'Tribe Leaders + Strategic Objectives Owners',
          PT: 'Tribe Leaders + Strategic Objectives Owners',
          EN: 'Tribe Leaders + Strategic Objectives Owners',
        } as Entry,
        content: [
          { ES: 'Revisión de OKRs', PT: 'Revisão de OKRs', EN: 'OKRs review' } as Entry,
          { ES: 'FCAs propuestas para OKRs amarillo/rojo', PT: 'FCAs propostas para OKRs amarelo/vermelho', EN: 'FCAs proposed for OKRs yellow/red' } as Entry,
        ],
        details: {
          ES: 'Slack: el contenido se comparte a través del canal de la Tribu, {link}.',
          PT: 'Slack: o conteúdo é compartilhado através do canal da Tribo, {link}.',
          EN: 'Slack: content is shared via the Tribe channel, {link}.',
        } as Entry,
      },
      {
        id: 'tribe-team-sync',
        name: 'Tribe Team Sync',
        lane: 'tribe',
        participants: {
          ES: 'Todos los miembros de la Tribu',
          PT: 'Todos os membros da Tribo',
          EN: 'All Tribe members',
        } as Entry,
        content: [
          { ES: 'Revisión de OKRs', PT: 'Revisão de OKRs', EN: 'OKRs review' } as Entry,
          { ES: 'Actualizaciones relevantes de Squads', PT: 'Atualizações relevantes dos Squads', EN: 'Relevant Squad updates' } as Entry,
          { ES: 'Revisión de FCAs cuando aplique', PT: 'Revisão de FCAs quando aplicável', EN: 'FCAs review when applicable' } as Entry,
        ],
        details: {
          ES: 'Sincronización interna mensual con todos los miembros de la Tribu, liderada por Tribe Leaders y Squad Leaders.',
          PT: 'Sincronização interna mensal com todos os membros da Tribo, liderada por Tribe Leaders e Squad Leaders.',
          EN: 'Monthly internal sync with all Tribe members, led by Tribe Leaders and Squad Leaders.',
        } as Entry,
      },
      {
        id: 'planning',
        name: 'Planning',
        lane: 'squad',
        participants: {
          ES: 'Squad Lead y miembros del Squad',
          PT: 'Squad Lead e membros do Squad',
          EN: 'Squad Lead and squad members',
        } as Entry,
        content: [
          { ES: 'Definición de alcance y prioridades del working cycle', PT: 'Definição de escopo e prioridades do working cycle', EN: 'Scope and priorities for the working cycle' } as Entry,
          { ES: 'Estimación técnica y chequeo de capacidad', PT: 'Estimativa técnica e checagem de capacidade', EN: 'Technical estimation and capacity check' } as Entry,
        ],
        details: {
          ES: 'Da inicio a cada working cycle: el squad se alinea sobre qué va a entregar y se compromete con un alcance.',
          PT: 'Dá início a cada working cycle: o squad se alinha sobre o que vai entregar e se compromete com um escopo.',
          EN: 'Kicks off each working cycle: the squad aligns on what it will deliver and commits to a scope.',
        } as Entry,
      },
      {
        id: 'daily-weekly',
        name: 'Daily/Weekly',
        lane: 'squad',
        participants: {
          ES: 'Squad',
          PT: 'Squad',
          EN: 'Squad',
        } as Entry,
        content: [
          { ES: 'Actualización de progreso', PT: 'Atualização de progresso', EN: 'Progress update' } as Entry,
          { ES: 'Bloqueos y dependencias', PT: 'Bloqueios e dependências', EN: 'Blockers and dependencies' } as Entry,
        ],
        details: {
          ES: 'Sincronización corta para mantener al squad alineado día a día (o semana a semana) y detectar bloqueos temprano.',
          PT: 'Sincronização curta para manter o squad alinhado dia a dia (ou semana a semana) e detectar bloqueios cedo.',
          EN: 'Short sync to keep the squad aligned day-to-day (or week-to-week) and surface blockers early.',
        } as Entry,
      },
      {
        id: 'review-demo',
        name: 'Review + Demo',
        lane: 'squad',
        participants: {
          ES: 'Squad + stakeholders',
          PT: 'Squad + stakeholders',
          EN: 'Squad + stakeholders',
        } as Entry,
        content: [
          { ES: 'Demo del trabajo completado', PT: 'Demo do trabalho concluído', EN: 'Demo of completed work' } as Entry,
          { ES: 'Feedback de stakeholders', PT: 'Feedback dos stakeholders', EN: 'Feedback from stakeholders' } as Entry,
        ],
        details: {
          ES: 'Cierra el working cycle mostrando lo entregado y recogiendo feedback para ajustar el rumbo.',
          PT: 'Encerra o working cycle mostrando o que foi entregue e coletando feedback para ajustar o rumo.',
          EN: 'Closes the working cycle by showing what was delivered and gathering feedback to adjust direction.',
        } as Entry,
      },
      {
        id: 'retro',
        name: 'Retro (ad-hoc)',
        lane: 'squad',
        participants: {
          ES: 'Squad',
          PT: 'Squad',
          EN: 'Squad',
        } as Entry,
        content: [
          { ES: 'Qué funcionó bien', PT: 'O que funcionou bem', EN: 'What went well' } as Entry,
          { ES: 'Qué mejorar', PT: 'O que melhorar', EN: 'What to improve' } as Entry,
          { ES: 'Acciones concretas', PT: 'Ações concretas', EN: 'Action items' } as Entry,
        ],
        details: {
          ES: 'Espacio de mejora continua, sin cadencia fija, para reflexionar sobre cómo está trabajando el squad.',
          PT: 'Espaço de melhoria contínua, sem cadência fixa, para refletir sobre como o squad está trabalhando.',
          EN: 'Continuous-improvement space, held as needed rather than on a fixed cadence, to reflect on how the squad is working.',
        } as Entry,
      },
    ],
  },
  learning: {
    subtitle: {
      ES: 'Conceptos fundamentales del Way of Working, rutas de aprendizaje y canales de comunicación.',
      PT: 'Conceitos fundamentais do Way of Working, trilhas de aprendizado e canais de comunicação.',
      EN: 'Core Way of Working concepts, learning paths, and communication channels.',
    } as Entry,
    tabs: {
      glosario: { ES: 'Glosario', PT: 'Glossário', EN: 'Glossary' } as Entry,
      learningPath: { ES: 'Learning Path', PT: 'Learning Path', EN: 'Learning Path' } as Entry,
      nmm: { ES: 'NMM', PT: 'NMM', EN: 'NMM' } as Entry,
      slackChannels: { ES: 'Slack Channels', PT: 'Slack Channels', EN: 'Slack Channels' } as Entry,
    },
    nmm: {
      heading: {
        ES: 'New Management Model (NMM)',
        PT: 'New Management Model (NMM)',
        EN: 'New Management Model (NMM)',
      } as Entry,
      intro: {
        ES: 'El NMM es un modelo de gestión cross-company impulsado por Planning, que define cómo nos organizamos para tomar decisiones, hacer seguimiento y responder a desvíos.',
        PT: 'O NMM é um modelo de gestão cross-company impulsionado por Planning, que define como nos organizamos para tomar decisões, fazer o acompanhamento e responder a desvios.',
        EN: 'NMM is a cross-company management model driven by Planning that defines how we organize to make decisions, follow up, and respond to deviations.',
      } as Entry,
      summary: {
        ES: 'Este modelo nos va a ayudar a llegar a nuestro Big Dream, ayudándonos a mantenernos enfocados, actuar más rápido y apuntar más alto.',
        PT: 'Este modelo vai nos ajudar a chegar ao nosso Big Dream, nos ajudando a ficar focados, agir mais rápido e mirar mais alto.',
        EN: 'This Model will help us get to our Big Dream, helping us stay focused, act faster, and aim higher.',
      } as Entry,
      ctaLabel: {
        ES: 'Ver presentación de Planning',
        PT: 'Ver apresentação de Planning',
        EN: 'View the Planning presentation',
      } as Entry,
      contact: {
        ES: 'Si querés saber más, contactá al Planning Partner de tu Tribu.',
        PT: 'Se quiser saber mais, entre em contato com o Planning Partner da sua Tribo.',
        EN: 'If you want to know more, reach out to your Tribe’s Planning Partner.',
      } as Entry,
    },
    glossary: {
      waterfallTitle: { ES: 'Waterfall', PT: 'Waterfall', EN: 'Waterfall' } as Entry,
      waterfallBullets: [
        {
          ES: 'Top-down y definición de prioridades centralizada.',
          PT: 'Top-down e definição de prioridades centralizada.',
          EN: 'Top-down, with centralized prioritization.',
        } as Entry,
        {
          ES: 'Foco en la resolución de dependencias de forma eficiente al planificar por Qs, pero extremadamente rígida.',
          PT: 'Foco na resolução de dependências de forma eficiente ao planejar por Qs, mas extremamente rígida.',
          EN: 'Focused on resolving dependencies efficiently when planning by Qs, but extremely rigid.',
        } as Entry,
        {
          ES: 'Equipos trabajando en silos y con objetivos no alineados, cada uno en sus tiempos y sus entregables aislados.',
          PT: 'Equipes trabalhando em silos e com objetivos não alinhados, cada uma em seus prazos e entregáveis isolados.',
          EN: 'Teams working in silos with unaligned goals, each on its own timeline and isolated deliverables.',
        } as Entry,
        {
          ES: 'Competencia agresiva entre sponsors por prioridades que atenta contra el largo plazo.',
          PT: 'Competição agressiva entre sponsors por prioridades que prejudica o longo prazo.',
          EN: 'Aggressive competition between sponsors over priorities that hurts the long term.',
        } as Entry,
        {
          ES: 'Impactos en corto que atentan contra la innovación y la escalabilidad.',
          PT: 'Impactos a curto prazo que comprometem a inovação e a escalabilidade.',
          EN: 'Short-term impacts that work against innovation and scalability.',
        } as Entry,
      ],
      agileTitle: {
        ES: 'Way of Working - Agile Teams',
        PT: 'Way of Working - Agile Teams',
        EN: 'Way of Working - Agile Teams',
      } as Entry,
      agileBullets: [
        {
          ES: 'Equipos multidisciplinarios con un objetivo y propósito común: Resultados de negocio.',
          PT: 'Equipes multidisciplinares com um objetivo e propósito comum: Resultados de negócio.',
          EN: 'Multidisciplinary teams with a shared goal and purpose: business results.',
        } as Entry,
        {
          ES: 'Definición de OKRs en base a los objetivos estratégicos cross company, midiendo el trabajo del equipo según su impacto a los Targets Despegar.',
          PT: 'Definição de OKRs com base nos objetivos estratégicos cross-company, medindo o trabalho da equipe de acordo com o impacto nos Targets Despegar.',
          EN: 'OKRs defined from cross-company strategic objectives, measuring the team’s work by its impact on Despegar Targets.',
        } as Entry,
        {
          ES: 'El Backlog es continuo, dinámico y flexible; con iniciativas más cortas pero escalables. Es definido por el equipo según sus OKRs; y debe ser lo suficientemente autónomo para minimizar dependencias.',
          PT: 'O Backlog é contínuo, dinâmico e flexível; com iniciativas mais curtas, mas escaláveis. É definido pela equipe de acordo com seus OKRs e deve ser suficientemente autônomo para minimizar dependências.',
          EN: 'The Backlog is continuous, dynamic, and flexible, with shorter but scalable initiatives. It’s defined by the team based on its OKRs and must be autonomous enough to minimize dependencies.',
        } as Entry,
        {
          ES: 'Las iniciativas surgen de la alineación de las 3 patas del Squad (PUXIT, hay excepciones) + Negocio.',
          PT: 'As iniciativas surgem do alinhamento das 3 partes do Squad (PUXIT, há exceções) + Negócio.',
          EN: 'Initiatives come from aligning the Squad’s 3 legs (PUXIT, with exceptions) + Business.',
        } as Entry,
      ],
      terms: [
        {
          id: 'teams',
          label: { ES: 'Teams (Equipo)', PT: 'Teams (Equipe)', EN: 'Teams' } as Entry,
          desc: {
            ES: 'Equipos tradicionales en cascada donde la planificación se realiza por trimestre (Q).',
            PT: 'Equipes tradicionais em cascata onde o planejamento é realizado por trimestre (Q).',
            EN: 'Traditional waterfall teams where planning happens quarterly (Q).',
          } as Entry,
        },
        {
          id: 'sponsors',
          label: { ES: 'Sponsors', PT: 'Sponsors', EN: 'Sponsors' } as Entry,
          desc: {
            ES: 'Personas o equipos que definen, diseñan y priorizan iniciativas.',
            PT: 'Pessoas ou equipes que definem, desenham e priorizam iniciativas.',
            EN: 'People or teams who define, design, and prioritize initiatives.',
          } as Entry,
        },
        {
          id: 'okrs',
          label: {
            ES: 'OKRs (Objectives and Key Results)',
            PT: 'OKRs (Objectives and Key Results)',
            EN: 'OKRs (Objectives and Key Results)',
          } as Entry,
          desc: {
            ES: 'Los Objetivos y Resultados Clave (OKRs) se utilizan para enfocarse en lo que realmente importa, alineando esfuerzos, estableciendo prioridades y midiendo el progreso.',
            PT: 'Os Objetivos e Resultados-Chave (OKRs) são utilizados para focar no que realmente importa, alinhar esforços, estabelecer prioridades e medir o progresso.',
            EN: 'Objectives and Key Results (OKRs) are used to focus on what really matters, aligning efforts, setting priorities, and measuring progress.',
          } as Entry,
        },
        {
          id: 'tribus-squads',
          label: { ES: 'Tribus & Squads', PT: 'Tribos & Squads', EN: 'Tribes & Squads' } as Entry,
          desc: {
            ES: 'Tribu es un grupo de Squads que persiguen objetivos comunes alineados con la estrategia. Cada miembro de un Squad debe estar plenamente dedicado a su equipo, compartiendo exclusivamente sus objetivos y sin dividirse entre otros proyectos, productos o equipos. Los Squads suelen estar compuestos por Producto, UX y TI, aunque dependerá de las necesidades del negocio. Trabajan en ciclos iterativos de desarrollo, tienen autonomía para proponer sus propias iniciativas y también son responsables de apoyar iniciativas impulsadas por las partes interesadas. Cada Squad gestiona su propio backlog en función de sus KPI.',
            PT: 'Tribo é um grupo de Squads que perseguem objetivos comuns alinhados com a estratégia. Cada membro de um Squad deve estar totalmente dedicado à sua equipe, compartilhando exclusivamente seus objetivos e sem se dividir entre outros projetos, produtos ou equipes. Os Squads geralmente são compostos por Produto, UX e TI, embora isso dependa das necessidades do negócio. Trabalham em ciclos iterativos de desenvolvimento, têm autonomia para propor suas próprias iniciativas e também são responsáveis por apoiar iniciativas impulsionadas pelas partes interessadas. Cada Squad gerencia seu próprio backlog com base em seus KPIs.',
            EN: 'A Tribe is a group of Squads pursuing common goals aligned with the strategy. Every Squad member must be fully dedicated to their team, sharing its goals exclusively without splitting time across other projects, products, or teams. Squads are usually made up of Product, UX, and IT, depending on business needs. They work in iterative development cycles, have autonomy to propose their own initiatives, and are also responsible for supporting stakeholder-driven initiatives. Each Squad manages its own backlog based on its KPIs.',
          } as Entry,
        },
        {
          id: 'ciclo-trabajo',
          label: { ES: 'Ciclo de Trabajo', PT: 'Ciclo de Trabalho', EN: 'Work Cycle' } as Entry,
          desc: {
            ES: 'Tiempo desde que el Squad/Equipo fue conformado. Para los equipos, se mide trimestralmente; para los Squads, se definirá.',
            PT: 'Tempo desde que o Squad/Equipe foi formado. Para as equipes, é medido trimestralmente; para os Squads, será definido.',
            EN: 'Time elapsed since the Squad/Team was formed. For teams it’s measured quarterly; for Squads, it will be defined.',
          } as Entry,
        },
        {
          id: 'stakeholders',
          label: { ES: 'Stakeholders', PT: 'Stakeholders', EN: 'Stakeholders' } as Entry,
          desc: {
            ES: 'Personas o equipos que plantean problemas que deben ser resueltos por los Squads.',
            PT: 'Pessoas ou equipes que apresentam problemas que devem ser resolvidos pelos Squads.',
            EN: 'People or teams who raise problems that need to be solved by the Squads.',
          } as Entry,
        },
        {
          id: 'key-contributor',
          label: { ES: 'Key Contributor', PT: 'Key Contributor', EN: 'Key Contributor' } as Entry,
          desc: {
            ES: 'Rol con responsabilidad operativa sobre una parte del cumplimiento del objetivo; no tiene Accountability pero es responsable.',
            PT: 'Papel com responsabilidade operacional sobre uma parte do cumprimento do objetivo; não tem Accountability, mas é responsável.',
            EN: 'A role with operational responsibility over part of the objective; has no Accountability but is responsible.',
          } as Entry,
          bullets: [
            {
              ES: 'Colabora directamente con los squads en la ejecución de iniciativas pero no forma parte.',
              PT: 'Colabora diretamente com os squads na execução de iniciativas, mas não faz parte deles.',
              EN: 'Collaborates directly with squads on executing initiatives but isn’t part of them.',
            } as Entry,
            {
              ES: 'Aporta input, capacidades o entregables clave, pudiendo ser de cualquier área.',
              PT: 'Fornece input, capacidades ou entregáveis-chave, podendo ser de qualquer área.',
              EN: 'Provides key input, capabilities, or deliverables, and can come from any area.',
            } as Entry,
            {
              ES: 'Participa en los rituales operativos de los squads cuando esté involucrado en iniciativas.',
              PT: 'Participa nos rituais operacionais dos squads quando estiver envolvido em iniciativas.',
              EN: 'Takes part in squads’ operational rituals when involved in initiatives.',
            } as Entry,
            {
              ES: 'Ayuda a identificar riesgos, oportunidades o bloqueos.',
              PT: 'Ajuda a identificar riscos, oportunidades ou bloqueios.',
              EN: 'Helps identify risks, opportunities, or blockers.',
            } as Entry,
            {
              ES: 'RC en modelo RACI.',
              PT: 'RC no modelo RACI.',
              EN: 'RC in the RACI model.',
            } as Entry,
          ],
        },
        {
          id: 'business-partner',
          label: { ES: 'Business Partner', PT: 'Business Partner', EN: 'Business Partner' } as Entry,
          desc: {
            ES: 'Es co-responsable de la definición y cumplimiento del objetivo en el área clave para lograrlo, teniendo Accountability junto con los líderes de la tribu.',
            PT: 'É co-responsável pela definição e cumprimento do objetivo na área-chave para alcançá-lo, tendo Accountability junto com os líderes da tribo.',
            EN: 'Co-responsible for defining and delivering the objective in the key area needed to achieve it, sharing Accountability with the tribe’s leaders.',
          } as Entry,
          bullets: [
            {
              ES: 'Participa en la definición y priorización de los objetivos de Tribu.',
              PT: 'Participa na definição e priorização dos objetivos da Tribo.',
              EN: 'Takes part in defining and prioritizing the Tribe’s objectives.',
            } as Entry,
            {
              ES: 'Presente en los rituales clave de la Tribu (quarterly planning, monthly review, etc.).',
              PT: 'Presente nos rituais-chave da Tribo (quarterly planning, monthly review, etc.).',
              EN: 'Present at the Tribe’s key rituals (quarterly planning, monthly review, etc.).',
            } as Entry,
            {
              ES: 'Coordina con su equipo el aporte operativo necesario.',
              PT: 'Coordena com sua equipe a contribuição operacional necessária.',
              EN: 'Coordinates the necessary operational input with their team.',
            } as Entry,
            {
              ES: 'Rinde cuentas junto a los Tribe Leads por el resultado.',
              PT: 'Presta contas junto com os Tribe Leads pelo resultado.',
              EN: 'Accountable for the outcome together with the Tribe Leads.',
            } as Entry,
            {
              ES: 'RA en modelo RACI.',
              PT: 'RA no modelo RACI.',
              EN: 'RA in the RACI model.',
            } as Entry,
          ],
        },
        {
          id: 'dely',
          label: { ES: 'DELY', PT: 'DELY', EN: 'DELY' } as Entry,
          desc: {
            ES: 'Ticket de Jira que representa un entregable. Tiene un squad owner.',
            PT: 'Ticket de Jira que representa uma entrega. Tem um squad owner.',
            EN: 'A Jira ticket that represents a deliverable. It has a squad owner.',
          } as Entry,
        },
      ],
    },
    learningPath: {
      heading: {
        ES: 'Rutas de aprendizaje en Prosus Academy',
        PT: 'Trilhas de aprendizado na Prosus Academy',
        EN: 'Learning paths on Prosus Academy',
      } as Entry,
      intro: {
        ES: 'Por ahora está disponible el nivel Beginner. Los próximos niveles (Intermediate, Advanced) se irán agregando acá a medida que estén listos.',
        PT: 'Por enquanto está disponível o nível Beginner. Os próximos níveis (Intermediate, Advanced) serão adicionados aqui conforme forem ficando prontos.',
        EN: 'The Beginner level is available for now. The next levels (Intermediate, Advanced) will be added here as they become ready.',
      } as Entry,
      beginnerTitle: {
        ES: 'Way of Working | Beginner',
        PT: 'Way of Working | Beginner',
        EN: 'Way of Working | Beginner',
      } as Entry,
      beginnerDesc: {
        ES: 'Curso introductorio sobre nuestro Way of Working, disponible en Degreed (Prosus Academy).',
        PT: 'Curso introdutório sobre nosso Way of Working, disponível no Degreed (Prosus Academy).',
        EN: 'Introductory course on our Way of Working, available on Degreed (Prosus Academy).',
      } as Entry,
      ctaLabel: {
        ES: 'Ver curso en Degreed',
        PT: 'Ver curso no Degreed',
        EN: 'View course on Degreed',
      } as Entry,
      comingSoon: {
        ES: 'Próximamente: Intermediate y Advanced',
        PT: 'Em breve: Intermediate e Advanced',
        EN: 'Coming soon: Intermediate and Advanced',
      } as Entry,
    },
    slackChannels: {
      heading: {
        ES: 'Canales de comunicación',
        PT: 'Canais de comunicação',
        EN: 'Communication channels',
      } as Entry,
      generalLabel: { ES: 'WoW General', PT: 'WoW General', EN: 'WoW General' } as Entry,
      generalChannel: '#wow-agile-teams',
      tribeColumnLabel: { ES: 'Tribu', PT: 'Tribo', EN: 'Tribe' } as Entry,
      channelColumnLabel: { ES: 'Canal', PT: 'Canal', EN: 'Channel' } as Entry,
      tribes: [
        { name: 'Accommodations', channel: '#tribe-accommodations-news' },
        { name: 'Advertising', channel: '#tribe-advertising-news' },
        { name: 'Aftersale', channel: '#tribe-aftersale-news' },
        { name: 'B2B', channel: '' },
        { name: 'B2B2C', channel: '#tribe-b2b2c-news' },
        { name: 'Canales Off', channel: '' },
        { name: 'CFA', channel: '' },
        { name: 'Checkout & Fulfillment', channel: '#tribe-checkout-and-fulfillment-news' },
        { name: 'Data Engineering', channel: '#tribe-data-engineering-news' },
        { name: 'Experiments', channel: '#squad-experiments-news' },
        { name: 'Financial Systems (FS)', channel: '#tribe-fs-news' },
        { name: 'Flights', channel: '#tribe-vuelos-news' },
        { name: 'Growth', channel: '#tribe-growth-news' },
        { name: 'Loyalty', channel: '#tribe-loyalty-news' },
        { name: 'ONA', channel: '#tribe-ona-news' },
        { name: 'Packages', channel: '#tribe-combined-products-news' },
        { name: 'Platform Engineering', channel: '' },
        { name: 'SOFIA', channel: '#tribe-sofia-news' },
        { name: 'Sorting', channel: '#tribe-sorting-news' },
      ],
    },
  },
}
