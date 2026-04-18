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
      titleLine2: 'Flutter apps',
      titleLine3: 'used in the field.',
      subtitle:
        'Mobile Flutter developer currently on mission at Faceel-it for the Adeo group — a cross-platform app used daily by 4,000+ teammates across 100+ retail stores in Europe. I also ship Java / Spring back-ends and modern React web apps.',
      cta: 'Start a project',
      secondary: 'Download CV',
      scroll: 'Scroll',
    },
    about: {
      kicker: 'About',
      title: 'Mobile Flutter developer, full-stack mindset, based in Lille.',
      body:
        "I design and ship Flutter apps on iOS and Android — and the Java/Spring services behind them. Currently on mission at Faceel-it for the Adeo group, where the app I work on serves 4,000+ daily users across 100+ retail stores in Europe. I also have a solid React / TypeScript web background (Vinci Group, partner sites). I care about clean architecture, CI/CD pipelines that let you sleep, and products that actually solve a problem.",
      stats: [
        { k: '3+', v: 'Years building software' },
        { k: '4k+', v: 'Daily users on apps I ship' },
        { k: '100+', v: 'Retail stores in Europe' },
      ],
      status: 'Open to freelance opportunities',
    },
    services: {
      kicker: 'Services',
      title: 'What I can build with you.',
      items: [
        {
          title: 'Flutter mobile apps',
          desc: 'Cross-platform iOS & Android apps with Flutter — from MVP to production. State management with Riverpod or Bloc, offline support, Fastlane releases and CI/CD to the stores.',
          tags: ['Flutter', 'Dart', 'Riverpod', 'iOS', 'Android', 'Firebase'],
        },
        {
          title: 'Full-stack web & APIs',
          desc: 'Java (Spring Boot) and Node.js back-ends wired to modern React / Next.js front-ends. REST APIs, authentication, MongoDB / Redis and Redux state — production-ready.',
          tags: ['Java', 'Spring Boot', 'Node.js', 'React', 'MongoDB', 'REST'],
        },
        {
          title: 'Architecture & DevOps',
          desc: 'Clean architecture, observability and performance. Dockerised deployments, Kubernetes, GitHub Actions pipelines and the monitoring you need to ship with confidence.',
          tags: ['Docker', 'Kubernetes', 'GitHub Actions', 'CI/CD'],
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
          tag: 'Mobile · 2024 → now',
          role: 'Mobile full-stack developer',
          title: 'Flutter field app — Adeo (via Faceel-it)',
          body:
            'Cross-platform Flutter app for the logistics teams of the Adeo group (Leroy Merlin, Bricoman, etc.). Live every day on 4,000+ devices across 100+ retail stores in Europe.',
          points: [
            'Shipped new features with product and back-end teams (Java Spring, MongoDB, Redis)',
            'Tuned ergonomics and performance for intensive in-store usage',
            'Set up CI/CD with GitHub Actions, Kubernetes and Docker deployments',
          ],
          stack: ['Flutter', 'Dart', 'Java Spring', 'MongoDB', 'Kubernetes'],
        },
        {
          tag: 'Enterprise · 2022 – 2023',
          role: 'Front-end developer (freelance)',
          title: 'Deferred social commitments platform — Vinci Group (via S Com System)',
          body:
            'Web solution computing deferred social commitments for the entire Vinci Group workforce. Built to industrial standards — operational efficiency and analytical precision.',
          points: [
            'Complex, responsive React / TypeScript interfaces with Redux state management',
            'Close collaboration with the back-end team on REST API integration',
            'Smooth data-entry flows and advanced data visualization',
          ],
          stack: ['React', 'TypeScript', 'Redux', 'REST'],
        },
        {
          tag: 'Startup · 2022 – 2024',
          role: 'Mobile Flutter developer',
          title: 'Sidekick — sports & nutrition matchmaking app',
          body:
            'Mobile platform that pairs users around shared sports and nutrition goals, with an interactive peer-support system.',
          points: [
            'Owned the full product cycle: design, build, tests, release',
            'Shipped a beta with 100+ active users',
            'Interactive entraide flow between users',
          ],
          stack: ['Flutter', 'Dart', 'Firebase'],
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
        "A Flutter app idea, a Java/Spring back-end to architect, or a rough concept to explore? My inbox is open and I reply within 24h.",
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
      titleLine2: 'des apps Flutter',
      titleLine3: 'utilisées sur le terrain.',
      subtitle:
        "Développeur mobile Flutter, actuellement en mission chez Faceel-it pour le groupe Adeo — une app cross-platform utilisée chaque jour par 4 000+ collaborateurs sur 100+ magasins en Europe. Je livre aussi des back-ends Java / Spring et des apps web React modernes.",
      cta: 'Démarrer un projet',
      secondary: 'Télécharger le CV',
      scroll: 'Défiler',
    },
    about: {
      kicker: 'Profil',
      title: 'Développeur mobile Flutter, full-stack, basé à Lille.',
      body:
        "Je conçois et livre des applications Flutter sur iOS et Android — et les services Java / Spring qui les alimentent. Actuellement en mission chez Faceel-it pour le groupe Adeo, l'app sur laquelle je travaille sert 4 000+ utilisateurs quotidiens dans 100+ magasins en Europe. J'ai aussi une solide expérience React / TypeScript côté web (Vinci Group, sites partenaires). J'aime l'architecture propre, les pipelines CI/CD qui laissent dormir, et les produits qui résolvent un vrai problème.",
      stats: [
        { k: '3+', v: "Années d'expérience" },
        { k: '4k+', v: 'Utilisateurs quotidiens' },
        { k: '100+', v: 'Magasins en Europe' },
      ],
      status: 'Ouvert aux missions freelance',
    },
    services: {
      kicker: 'Services',
      title: 'Ce que je peux construire avec vous.',
      items: [
        {
          title: 'Apps mobiles Flutter',
          desc: "Apps iOS & Android cross-platform avec Flutter — du MVP à la production. Riverpod ou Bloc, mode hors-ligne, publication Fastlane et CI/CD vers les stores.",
          tags: ['Flutter', 'Dart', 'Riverpod', 'iOS', 'Android', 'Firebase'],
        },
        {
          title: 'Full-stack web & APIs',
          desc: "Back-ends Java (Spring Boot) et Node.js connectés à des fronts React / Next.js modernes. APIs REST, authentification, MongoDB / Redis et gestion d'état Redux — prêts pour la production.",
          tags: ['Java', 'Spring Boot', 'Node.js', 'React', 'MongoDB', 'REST'],
        },
        {
          title: 'Architecture & DevOps',
          desc: "Architecture propre, observabilité et performance. Déploiements Dockerisés, Kubernetes, pipelines GitHub Actions et le monitoring qu'il faut pour livrer sereinement.",
          tags: ['Docker', 'Kubernetes', 'GitHub Actions', 'CI/CD'],
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
          tag: "Mobile · 2024 → Aujourd'hui",
          role: 'Développeur mobile full-stack',
          title: 'App Flutter terrain — Adeo (via Faceel-it)',
          body:
            "Application Flutter cross-platform pour les équipes logistiques du groupe Adeo (Leroy Merlin, Bricoman, etc.). Utilisée chaque jour sur 4 000+ appareils dans 100+ magasins en Europe.",
          points: [
            "Conception de nouvelles fonctionnalités avec les équipes produit et backend (Java Spring, MongoDB, Redis)",
            "Optimisation de l'ergonomie et de la performance pour un usage terrain intensif",
            "Mise en place des pipelines CI/CD avec GitHub Actions, Kubernetes et Docker",
          ],
          stack: ['Flutter', 'Dart', 'Java Spring', 'MongoDB', 'Kubernetes'],
        },
        {
          tag: 'Grand compte · 2022 – 2023',
          role: 'Développeur front-end (freelance)',
          title: 'Engagements sociaux différés — Vinci Group (via S Com System)',
          body:
            "Solution web de calcul des engagements sociaux différés pour l'ensemble des effectifs du groupe Vinci. Conçue selon les standards industriels — efficacité opérationnelle et précision analytique.",
          points: [
            "Interfaces React / TypeScript complexes et responsives avec gestion d'état Redux",
            "Collaboration étroite avec l'équipe backend pour l'intégration des API REST",
            'Saisie fluide des données et visualisation avancée pour les décideurs',
          ],
          stack: ['React', 'TypeScript', 'Redux', 'REST'],
        },
        {
          tag: 'Startup · 2022 – 2024',
          role: 'Développeur mobile Flutter',
          title: 'Sidekick — app de mise en relation sport & nutrition',
          body:
            "Plateforme mobile qui met en relation les utilisateurs autour d'objectifs sportifs et nutritionnels, avec un système d'entraide interactif.",
          points: [
            'Cycle complet du produit : conception, développement, tests et déploiement',
            'Version beta livrée avec 100+ utilisateurs actifs',
            "Système d'entraide interactif entre utilisateurs",
          ],
          stack: ['Flutter', 'Dart', 'Firebase'],
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
        "Une idée d'app Flutter, un back-end Java/Spring à architecturer, ou juste un concept à explorer ? Ma boîte mail est ouverte, je réponds sous 24h.",
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
