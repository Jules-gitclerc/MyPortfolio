export type Locale = 'en' | 'fr';

export const locales: Locale[] = ['en', 'fr'];

export const dict = {
  en: {
    nav: {
      work: 'Work',
      services: 'Services',
      stack: 'Stack',
      about: 'About',
      contact: 'Contact',
      resume: 'Resume',
    },
    hero: {
      badge: 'Available for freelance',
      titleLine1: 'Building',
      titleLine2: 'mobile & back-end',
      titleLine3: 'that ship.',
      subtitle:
        'Freelance Flutter mobile developer and full-stack engineer (Java & Node.js). I ship production-ready apps and robust APIs for startups and SMEs.',
      cta: 'Start a project',
      secondary: 'Download CV',
      scroll: 'Scroll',
    },
    about: {
      kicker: 'About',
      title: 'Mobile & full-stack developer, based in France.',
      body:
        "I design and build end-to-end products — from Flutter apps on iOS and Android to the Java and Node.js services that back them up. I love clean architecture, pragmatic DevOps, and shipping things that actually solve a problem. Innovative entrepreneurial initiatives particularly inspire me.",
      stats: [
        { k: '5+', v: 'Years building software' },
        { k: '20+', v: 'Projects shipped' },
        { k: 'EN / FR', v: 'Languages I work in' },
      ],
      status: 'Open to freelance opportunities',
    },
    services: {
      kicker: 'Services',
      title: 'What I can build with you.',
      items: [
        {
          title: 'Flutter mobile apps',
          desc: 'Cross-platform iOS & Android apps with Flutter — from MVP to production. Native-grade animations, offline support, CI/CD and store release.',
          tags: ['Flutter', 'Dart', 'iOS', 'Android', 'Firebase'],
        },
        {
          title: 'Full-stack web & APIs',
          desc: 'Java (Spring Boot) and Node.js back-ends wired to modern web front-ends. REST, GraphQL, authentication, databases, queues — production-ready.',
          tags: ['Java', 'Spring Boot', 'Node.js', 'PostgreSQL', 'REST'],
        },
        {
          title: 'Architecture & performance',
          desc: 'Clean architecture, DevOps, observability and performance. Dockerized deployments, CI/CD pipelines and the monitoring you need to sleep well.',
          tags: ['Docker', 'CI/CD', 'Monitoring', 'Cloud'],
        },
      ],
    },
    stack: {
      kicker: 'Stack',
      title: 'The tools behind the work.',
    },
    work: {
      kicker: 'Selected work',
      title: 'Recent missions.',
      description: 'A glimpse into professional projects I contributed to.',
      items: [
        {
          tag: 'Enterprise · 2024',
          role: 'Full-stack developer',
          title: 'Deferred social commitments platform — Vinci Group',
          body:
            'Sophisticated web solution for Vinci Group, streamlining the management of deferred social commitments. Built to the highest industrial standards — an essential tool that combines operational efficiency with analytical precision.',
          points: [
            'Smooth user experience with optimized data entry flows',
            'Advanced data visualization for informed decision-making',
            'Responsive and interactive UI — every action feels instant',
          ],
          stack: ['React', 'TypeScript', 'Java', 'Azure'],
        },
        {
          tag: 'Partnership · 2023',
          role: 'Lead developer',
          title: 'Partner website — Booking.com',
          body:
            'Orchestrated the design and development of a dedicated website for a partner affiliated with Booking.com, leveraging modern front-end patterns and Node.js back-end services.',
          points: [
            'Modern, responsive UI built on React',
            'Rigorous UX research to match real user needs',
            'Detailed technical specs ensuring every requirement is met',
          ],
          stack: ['React', 'Node.js', 'Tailwind', 'Azure'],
        },
      ],
    },
    projects: {
      kicker: 'Personal',
      title: 'Side projects & experiments.',
      items: [
        {
          title: 'Responsive admin dashboard',
          desc: 'A modern admin layout with dark mode, data viz and responsive tables.',
          image: '/admin-dashboard.png',
          live: 'https://codepen.io/Surfy971',
          code: 'https://codepen.io/Surfy971',
          tags: ['React', 'Tailwind'],
        },
        {
          title: 'Hotel booking dashboard',
          desc: 'Clean, information-dense hospitality dashboard with revenue analytics.',
          image: '/hotel-dashboard.png',
          live: 'https://codepen.io/Surfy971',
          code: 'https://codepen.io/Surfy971',
          tags: ['React', 'CSS'],
        },
      ],
    },
    contact: {
      kicker: 'Contact',
      title: "Let's build something great.",
      body:
        "Have a mobile app idea, a back-end to architect, or a rough concept to explore? My inbox is open and I reply within 24h.",
      cta: 'Write me an email',
      or: 'or find me on',
    },
    footer: {
      rights: 'All rights reserved.',
      made: 'Designed & built by Jules Clerc',
    },
  },
  fr: {
    nav: {
      work: 'Missions',
      services: 'Services',
      stack: 'Stack',
      about: 'Profil',
      contact: 'Contact',
      resume: 'CV',
    },
    hero: {
      badge: 'Disponible en freelance',
      titleLine1: 'Construire',
      titleLine2: 'du mobile & du back-end',
      titleLine3: 'qui tourne.',
      subtitle:
        "Développeur mobile Flutter freelance et ingénieur full-stack (Java & Node.js). Je livre des apps en production et des APIs robustes pour startups et PME.",
      cta: 'Démarrer un projet',
      secondary: 'Télécharger le CV',
      scroll: 'Défiler',
    },
    about: {
      kicker: 'Profil',
      title: 'Développeur mobile & full-stack, basé en France.',
      body:
        "Je conçois et développe des produits de bout en bout — des apps Flutter sur iOS et Android aux services Java et Node.js qui les soutiennent. J'aime l'architecture propre, le DevOps pragmatique et livrer des choses qui résolvent un vrai problème. Les initiatives entrepreneuriales innovantes m'inspirent particulièrement.",
      stats: [
        { k: '5+', v: "Années d'expérience" },
        { k: '20+', v: 'Projets livrés' },
        { k: 'FR / EN', v: 'Langues de travail' },
      ],
      status: 'Ouvert aux missions freelance',
    },
    services: {
      kicker: 'Services',
      title: 'Ce que je peux construire avec vous.',
      items: [
        {
          title: 'Apps mobiles Flutter',
          desc: "Apps iOS & Android cross-platform avec Flutter — du MVP à la production. Animations dignes du natif, mode hors-ligne, CI/CD et publication sur les stores.",
          tags: ['Flutter', 'Dart', 'iOS', 'Android', 'Firebase'],
        },
        {
          title: 'Full-stack web & APIs',
          desc: "Back-ends Java (Spring Boot) et Node.js connectés à des front modernes. REST, GraphQL, authentification, bases de données, files — prêts pour la production.",
          tags: ['Java', 'Spring Boot', 'Node.js', 'PostgreSQL', 'REST'],
        },
        {
          title: 'Architecture & performance',
          desc: "Architecture propre, DevOps, observabilité et performance. Déploiements Dockerisés, pipelines CI/CD et le monitoring qu'il faut pour dormir tranquille.",
          tags: ['Docker', 'CI/CD', 'Monitoring', 'Cloud'],
        },
      ],
    },
    stack: {
      kicker: 'Stack',
      title: 'Les outils qui soutiennent le travail.',
    },
    work: {
      kicker: 'Missions sélectionnées',
      title: 'Récents projets.',
      description: "Un aperçu des missions professionnelles auxquelles j'ai contribué.",
      items: [
        {
          tag: 'Grand compte · 2024',
          role: 'Développeur full-stack',
          title: 'Engagements sociaux différés — Vinci Group',
          body:
            "Solution web sophistiquée pour le Groupe Vinci, pour rationaliser et optimiser la gestion de leurs engagements sociaux différés. Conçue selon les meilleures pratiques industrielles — un outil essentiel qui allie efficacité opérationnelle et précision analytique.",
          points: [
            'Expérience utilisateur fluide avec une saisie optimisée',
            'Visualisation avancée pour des décisions éclairées',
            'Interface réactive — chaque action est instantanée',
          ],
          stack: ['React', 'TypeScript', 'Java', 'Azure'],
        },
        {
          tag: 'Partenariat · 2023',
          role: 'Lead développeur',
          title: 'Site partenaire — Booking.com',
          body:
            "J'ai orchestré la conception et le développement d'un site dédié à un partenaire affilié à Booking.com, avec des patterns front modernes et des services back Node.js.",
          points: [
            'Interface responsive et moderne basée sur React',
            'Analyse UX rigoureuse pour coller aux besoins réels',
            'Cahier des charges précis garantissant chaque exigence',
          ],
          stack: ['React', 'Node.js', 'Tailwind', 'Azure'],
        },
      ],
    },
    projects: {
      kicker: 'Personnel',
      title: 'Projets & expérimentations.',
      items: [
        {
          title: 'Dashboard admin responsive',
          desc: 'Layout admin moderne, dark mode, dataviz et tableaux responsive.',
          image: '/admin-dashboard.png',
          live: 'https://codepen.io/Surfy971',
          code: 'https://codepen.io/Surfy971',
          tags: ['React', 'Tailwind'],
        },
        {
          title: 'Dashboard hôtelier',
          desc: "Tableau de bord hôtelier dense en informations avec analyse de revenus.",
          image: '/hotel-dashboard.png',
          live: 'https://codepen.io/Surfy971',
          code: 'https://codepen.io/Surfy971',
          tags: ['React', 'CSS'],
        },
      ],
    },
    contact: {
      kicker: 'Contact',
      title: 'Construisons quelque chose de bien.',
      body:
        "Une idée d'app mobile, un back-end à architecturer, ou juste un concept à explorer ? Ma boîte mail est ouverte, je réponds sous 24h.",
      cta: 'Envoyer un email',
      or: 'ou retrouvez-moi sur',
    },
    footer: {
      rights: 'Tous droits réservés.',
      made: 'Design & développement par Jules Clerc',
    },
  },
} as const;

export type Dict = typeof dict;
