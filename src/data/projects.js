// Projets — statuts possibles : 'done' | 'progress' | 'academic' | 'toCustomize'
// Renseignez les liens demo/github uniquement s'ils existent réellement.
export const projects = [
  {
    id: 'erp-escoa',
    title: 'ERP ESCOA',
    description:
      "Application de gestion ERP pour l'École Supérieure de Commerce et d'Administration : authentification, tableau de bord statistique et gestion des étudiants, enseignants, filières et matières. Interface Streamlit reliée à une base PostgreSQL.",
    technologies: ['Python', 'Streamlit', 'PostgreSQL'],
    status: 'done',
    icon: 'layout',
    image: '',
    demo: '',
    github: 'https://github.com/aminatainsadiop-ai/C-Users-LENOVO-Desktop-Projet-ERP',
  },
  {
    id: 'gaide-eats',
    title: 'TP Gaide Eats',
    description:
      'Application ou prototype lié au projet Gaide Eats. Code à venir sur le dépôt GitHub.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    status: 'progress',
    icon: 'layout',
    image: '',
    demo: '',
    github: 'https://github.com/aminatainsadiop-ai/C-Users-LENOVO-Desktop-Projet-Mr-Gueye-TP_GAIDE_EATS',
  },
  {
    id: 'boutique-produits',
    title: 'Gestion de produits — Boutique en ligne',
    description:
      "Application de gestion de produits pour une boutique en ligne : consultation et description des produits via une API, navigation entre les pages avec un design responsive.",
    technologies: ['React', 'Vite', 'Tailwind CSS', 'React Router'],
    status: 'done',
    icon: 'shopping',
    image: '',
    demo: '',
    github: 'https://github.com/aminatainsadiop-ai/C-Users-LENOVO-Desktop-Projet-React-projet-API',
  },

  {
    id: 'portfolio',
    title: 'Portfolio personnel',
    description:
      'Mon portfolio conçu avec React et Tailwind CSS : un site rapide, responsive et facile à maintenir, pensé pour présenter mon parcours, mes compétences et mes réalisations.',
    technologies: ['React', 'Tailwind CSS', 'Vite'],
    status: 'done',
    icon: 'user',
    image: '',
    demo: '',
    github: '',
  },
  {
    id: 'cloudsim',
    title: 'Simulation CloudSim en Java',
    description:
      "Projet académique de simulation d'infrastructure cloud avec le framework CloudSim : modélisation de scénarios de ressources et d'ordonnancement. Modèle à personnaliser avec les détails de votre réalisation.",
    technologies: ['Java', 'CloudSim'],
    status: 'academic',
    icon: 'cloud',
    image: '',
    demo: '',
    github: '',
  },
  {
    id: 'communication-digitale',
    title: 'Communication digitale et design graphique',
    description:
      'Création de supports visuels et de contenus pour la communication digitale : identité, mise en page et déclinaison sur les réseaux sociaux. Modèle à personnaliser avec vos réalisations.',
    technologies: ['Design graphique', 'Communication digitale'],
    status: 'toCustomize',
    icon: 'palette',
    image: '',
    demo: '',
    github: '',
  },
]
