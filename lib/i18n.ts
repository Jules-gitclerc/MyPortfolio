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
      titleLine1: 'Crafting',
      titleLine2: 'web experiences',
      titleLine3: 'that convert.',
      subtitle:
        'Freelance React & Next.js developer. I build fast, accessible and beautifully animated interfaces for startups and SMEs.',
      cta: 'Start a project',
      secondary: 'Download CV',
      scroll: 'Scroll',
    },
    about: {
      kicker: 'About',
      title: 'Front-end developer based in France.',
      body:
        "I design web solutions for all kinds of projects — from simple landing pages to complex SaaS apps. Innovative entrepreneurial initiatives particularly inspire me. My north star: pixel-perfect UI, silky animations, and code that stays maintainable.",
      stats: [
        { k: '5+', v: 'Years building for the web' },
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
          title: 'Web development',
          desc: 'From a landing page to a full SaaS — React, Next.js, TypeScript, animations and integrations with your tools.',
          tags: ['Next.js', 'React', 'TypeScript', 'API'],
        },
        {
          title: 'UI / UX design',
          desc: 'Intuitive, modern, conversion-focused interfaces. Prototyping in Figma, then pixel-perfect in production.',
          tags: ['Figma', 'Design systems', 'Prototyping'],
        },
        {
          title: 'Performance & SEO',
          desc: 'Core Web Vitals, lighthouse scores, structured data and a faster TTFB. I make the web quick again.',
          tags: ['Core Web Vitals', 'A11y', 'SEO'],
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
          role: 'Front-end developer',
          title: 'Deferred social commitments platform — Vinci Group',
          body:
            'Sophisticated web solution for Vinci Group, streamlining the management of deferred social commitments. Built to the highest industrial standards — an essential tool that combines operational efficiency with analytical precision.',
          points: [
            'Smooth user experience with optimized data entry flows',
            'Advanced data visualization for informed decision-making',
            'Responsive and interactive UI — every action feels instant',
          ],
          stack: ['React', 'TypeScript', 'Tailwind', 'Azure'],
        },
        {
          tag: 'Partnership · 2023',
          role: 'Lead developer',
          title: 'Partner website — Booking.com',
          body:
            'Orchestrated the design and development of a dedicated website for a partner affiliated with Booking.com, leveraging modern React patterns and performance best practices.',
          points: [
            'Modern, responsive UI built on React',
            'Rigorous UX research to match real user needs',
            'Detailed technical specs ensuring every requirement is met',
          ],
          stack: ['React', 'Tailwind', 'Azure'],
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
        "Have a project, a rough idea, or just want to talk shop? My inbox is open and I reply within 24h.",
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
      titleLine1: 'Créer',
      titleLine2: 'des expériences web',
      titleLine3: 'qui convertissent.',
      subtitle:
        "Développeur freelance React & Next.js. Je conçois des interfaces rapides, accessibles et soigneusement animées pour startups et PME.",
      cta: 'Démarrer un projet',
      secondary: 'Télécharger le CV',
      scroll: 'Défiler',
    },
    about: {
      kicker: 'Profil',
      title: 'Développeur front-end, basé en France.',
      body:
        "Je conçois des solutions web pour tous types de projets — de la simple landing à l'application SaaS. Les initiatives entrepreneuriales innovantes m'inspirent particulièrement. Mon objectif : UI pixel-perfect, animations soignées, code maintenable.",
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
          title: 'Développement web',
          desc: "De la landing à l'app SaaS — React, Next.js, TypeScript, animations et intégrations avec vos outils.",
          tags: ['Next.js', 'React', 'TypeScript', 'API'],
        },
        {
          title: 'UI / UX design',
          desc: 'Interfaces intuitives, modernes, orientées conversion. Prototypage sur Figma, puis pixel-perfect en production.',
          tags: ['Figma', 'Design systems', 'Prototypage'],
        },
        {
          title: 'Performance & SEO',
          desc: 'Core Web Vitals, scores Lighthouse, données structurées et TTFB plus rapide. Je rends le web rapide, à nouveau.',
          tags: ['Core Web Vitals', 'A11y', 'SEO'],
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
      description: 'Un aperçu des missions professionnelles auxquelles j\'ai contribué.',
      items: [
        {
          tag: 'Grand compte · 2024',
          role: 'Développeur front-end',
          title: 'Engagements sociaux différés — Vinci Group',
          body:
            "Solution web sophistiquée pour le Groupe Vinci, pour rationaliser et optimiser la gestion de leurs engagements sociaux différés. Conçue selon les meilleures pratiques industrielles — un outil essentiel qui allie efficacité opérationnelle et précision analytique.",
          points: [
            'Expérience utilisateur fluide avec une saisie optimisée',
            'Visualisation avancée pour des décisions éclairées',
            'Interface réactive — chaque action est instantanée',
          ],
          stack: ['React', 'TypeScript', 'Tailwind', 'Azure'],
        },
        {
          tag: 'Partenariat · 2023',
          role: 'Lead développeur',
          title: 'Site partenaire — Booking.com',
          body:
            "J'ai orchestré la conception et le développement d'un site dédié à un partenaire affilié à Booking.com, en m'appuyant sur des patterns React modernes et sur les bonnes pratiques de performance.",
          points: [
            'Interface responsive et moderne basée sur React',
            'Analyse UX rigoureuse pour coller aux besoins réels',
            'Cahier des charges précis garantissant chaque exigence',
          ],
          stack: ['React', 'Tailwind', 'Azure'],
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
        "Un projet, une idée floue, ou simplement envie d'échanger ? Ma boîte mail est ouverte, je réponds sous 24h.",
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
