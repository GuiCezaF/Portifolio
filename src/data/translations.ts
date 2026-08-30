import { Translations } from '../types';

export const ptTranslations: Translations = {
  nav: {
    home: 'Início',
    about: 'Sobre',
    experience: 'Experiência',
    projects: 'Projetos',
    skills: 'Habilidades',
    terminal: 'Terminal',
    contact: 'Contato',
    resume: 'Currículo',
    changeLang: 'Trocar idioma',
    changeTheme: 'Trocar tema',
  },
  hero: {
    greeting: 'Olá, eu sou',
    name: 'Guilherme Cezarino Felipe',
    role: 'Desenvolvedor full stack, com interesse em machine learning',
    subtitle: 'Desenvolvedor Full Stack no Grupo Escalada. Desenvolvo sistemas confiáveis que resolvem problemas reais.',
    tagline: 'Desenvolvo sistemas confiáveis que resolvem problemas reais.',
    availability: 'Desenvolvedor Full Stack no Grupo Escalada',
    ctaProjects: 'Ver projetos',
    ctaContact: 'Fale comigo',
    ctaResume: 'Baixar CV',
    quickStats: [
      { label: 'Anos de experiência', value: '2+' },
      { label: 'Projetos em destaque', value: '6' },
      { label: 'Stack principal', value: 'TypeScript, React, Node' },
      { label: 'Formação', value: 'Engenharia da Computação' },
    ],
  },
  about: {
    title: 'Sobre mim',
    subtitle: 'Um pouco da minha trajetória e do que me move na engenharia de software',
    bioParagraphs: [
      'Sou desenvolvedor de software, focado em aprender na prática e em construir projetos do começo ao fim. Gosto de código limpo, de resolver problemas de verdade e de explorar tecnologias novas.',
      'Hoje atuo como Desenvolvedor Full Stack no Grupo Escalada.',
      'Antes, fui desenvolvedor na RETTA Tecnologia da Informação, trabalhando com Django, microsserviços em Node.js, CDN em tempo real, Flask na AWS Lambda e sistemas com CodeIgniter, Vue.js e PostgreSQL. Curso Engenharia da Computação na UNASP, campus Hortolândia (2023–2027).',
    ],
    philosophyTitle: 'Minha filosofia de engenharia',
    philosophyText: 'Simplicidade e clareza são a chave do sucesso.',
    highlights: [
      {
        title: 'Frontend',
        desc: 'Interfaces em React, TypeScript, Vue e Tailwind CSS.',
      },
      {
        title: 'Backend',
        desc: 'APIs e serviços com Node.js, Django, Laravel e PostgreSQL.',
      },
      {
        title: 'Grupo Escalada',
        desc: 'Desenvolvimento das aplicações da empresa, do front ao back.',
      },
      {
        title: 'Formação',
        desc: 'Engenharia da Computação na UNASP, campus Hortolândia (2023–2027).',
      },
    ],
  },
  experience: {
    title: 'Experiência e formação',
    subtitle: 'Trajetória profissional e acadêmica na área de tecnologia',
    tabs: {
      all: 'Tudo',
      work: 'Profissional',
      education: 'Formação',
    },
    presentText: 'Atual',
  },
  projects: {
    title: 'Projetos em destaque',
    subtitle: 'Projetos e ferramentas que desenvolvi para aprender e resolver problemas reais',
    categories: {
      all: 'Todos',
      ai: 'Inteligência artificial',
      fullstack: 'Full stack',
      cloud: 'Nuvem e sistemas distribuídos',
      devtools: 'Ferramentas e bots',
      systems: 'Sistemas e baixo nível',
    },
    viewCode: 'Ver código',
    liveDemo: 'Abrir projeto',
    keyFeatures: 'Destaques',
    metricsLabel: 'Métricas',
  },
  skills: {
    title: 'Habilidades e tecnologias',
    subtitle: 'Linguagens, frameworks e ferramentas que uso no dia a dia',
    categories: {
      languages: 'Linguagens',
      frontend: 'Frontend',
      backend: 'Backend e APIs',
      ai_agents: 'IA e machine learning',
      devops_cloud: 'Nuvem, DevOps e mensageria',
      databases: 'Bancos de dados',
    },
    proficiencyLabel: 'Nível prático',
  },
  terminal: {
    title: 'Terminal interativo',
    welcomeMessage: 'Bem-vindo ao terminal de Guilherme Cezarino Felipe (GuiCezaF). Digite "help" para ver os comandos.',
    promptPlaceholder: 'Digite um comando (ex.: help, about, projects, skills, contact)...',
    helpText: 'Comandos disponíveis:',
    availableCommands: ['help', 'about', 'skills', 'projects', 'contact', 'hire', 'stats', 'clear', 'sudo', 'matrix', 'easterEgg'],
    commandOutputs: {
      help: `Comandos disponíveis:
  • about      - Resumo sobre mim
  • skills     - Tecnologias que uso
  • projects   - Projetos do portfólio
  • contact    - E-mail, LinkedIn e GitHub
  • hire       - Como falar sobre trabalho
  • stats      - Números do perfil
  • matrix     - Ativa o modo Matrix
  • clear      - Limpa o histórico
  • sudo       - Tenta virar root 😉`,
      about: `Guilherme Cezarino Felipe (@GuiCezaF)
Desenvolvedor full stack júnior.
Cidade: Sumaré, São Paulo, Brasil.
Cursa Engenharia da Computação na UNASP, campus Hortolândia (2023–2027).
Trabalha no Grupo Escalada.`,
      skills: `Stack principal:
  • Linguagens: TypeScript, JavaScript, Python, PHP, SQL
  • Frontend: React, Vue.js, Tailwind CSS, Vite
  • Backend: Node.js, Django, Laravel, PostgreSQL
  • Nuvem: AWS, Docker`,
      projects: `Repositórios em destaque no GitHub:
  1. sentience_train — treino de expressões faciais (PyTorch/ONNX)
  2. queue-processor — worker em Go + RabbitMQ + ONNX
  3. sentince-front — front React do Sentience
  4. sentience_gateway — gateway em .NET 8
  5. worm-hole-api — Fastify + Prisma + S3
  6. lore-forge — mesa virtual de RPG`,
      contact: `Contato:
  • E-mail:   contato.guicezafe@gmail.com
  • GitHub:   https://github.com/GuiCezaF
  • LinkedIn: https://www.linkedin.com/in/guilherme-cezarino-felipe/
  • Cidade:   Sumaré / Campinas, São Paulo`,
      hire: `Desenvolvedor Full Stack no Grupo Escalada. Me chama no LinkedIn.`,
      stats: `Números:
  • Anos de experiência: 2+
  • Formação: Engenharia da Computação (UNASP, Hortolândia)
  • Foco: desenvolvimento web (TypeScript, React, Node)`,
      clear: 'Terminal limpo.',
      sudo: 'Permissão negada: o visitante não está no sudoers. Este incidente será reportado ao GuiCezaF. 🛡️',
      matrix: 'Entrando na Matrix... Siga o coelho branco. 🐇',
      easterEgg: '🎮 Código secreto ativado: +100 em engenharia de software. Obrigado pela visita.',
    },
  },
  contact: {
    title: 'Fale comigo',
    subtitle: 'Pelo e-mail profissional, LinkedIn ou GitHub',
    nameLabel: 'Seu nome',
    emailLabel: 'Seu e-mail',
    subjectLabel: 'Assunto',
    messageLabel: 'Sua mensagem',
    sendBtn: 'Enviar mensagem',
    sendingBtn: 'Enviando...',
    successMsg: 'Mensagem enviada. Retorno em breve.',
    errorMsg: 'Não foi possível enviar. Tente de novo ou me chame no LinkedIn.',
    directEmail: 'E-mail profissional',
    location: 'Sumaré, São Paulo — Brasil',
    availabilityBadge: 'Disponível para novas oportunidades',
    copyEmailSuccess: 'E-mail copiado!',
    githubLabel: 'GitHub',
    linkedinLabel: 'LinkedIn',
  },
  footer: {
    rights: 'Todos os direitos reservados.',
    builtWith: 'Feito com React, TypeScript, Tailwind CSS e Vite.',
    backToTop: 'Voltar ao topo',
    statusAvailable: 'Disponível para projetos',
  },
};

export const enTranslations: Translations = {
  nav: {
    home: 'Home',
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
    skills: 'Skills',
    terminal: 'Terminal',
    contact: 'Contact',
    resume: 'Resume',
    changeLang: 'Switch language',
    changeTheme: 'Switch theme',
  },
  hero: {
    greeting: "Hi, I'm",
    name: 'Guilherme Cezarino Felipe',
    role: 'Full stack developer who also likes machine learning',
    subtitle: 'Junior full stack developer at Grupo Escalada. I build reliable systems that solve real problems.',
    tagline: 'I build reliable systems that solve real problems.',
    availability: 'Junior full stack developer at Grupo Escalada',
    ctaProjects: 'See my work',
    ctaContact: 'Get in touch',
    ctaResume: 'Download CV',
    quickStats: [
      { label: 'Years of experience', value: '2+' },
      { label: 'Featured projects', value: '6' },
      { label: 'Main stack', value: 'TypeScript, React, Node' },
      { label: 'Degree', value: 'Computer Engineering' },
    ],
  },
  about: {
    title: 'About',
    subtitle: 'A bit about my path and what I care about in software',
    bioParagraphs: [
      "I'm a software developer who learns by building. I like clean code, real problems, and picking up new tools.",
      "Right now I'm a junior full stack developer at Grupo Escalada.",
      'Before that I was a software developer at RETTA Tecnologia da Informação, working with Django, Node.js microservices, a real-time CDN, Flask on AWS Lambda, and systems built with CodeIgniter, Vue.js, and PostgreSQL. I study Computer Engineering at UNASP, Hortolândia campus (2023–2027).',
    ],
    philosophyTitle: 'How I work',
    philosophyText: 'Simplicity and clarity are the keys to success.',
    highlights: [
      {
        title: 'Frontend',
        desc: 'Interfaces in React, TypeScript, Vue, and Tailwind CSS.',
      },
      {
        title: 'Backend',
        desc: 'APIs and services with Node.js, Django, Laravel, and PostgreSQL.',
      },
      {
        title: 'Grupo Escalada',
        desc: 'I work across the stack on the company apps.',
      },
      {
        title: 'Education',
        desc: 'Computer Engineering at UNASP, Hortolândia campus (2023–2027).',
      },
    ],
  },
  experience: {
    title: 'Work and school',
    subtitle: 'Where I have worked and studied',
    tabs: {
      all: 'All',
      work: 'Work',
      education: 'Education',
    },
    presentText: 'Now',
  },
  projects: {
    title: 'Featured work',
    subtitle: 'Projects I built to learn and to ship something useful',
    categories: {
      all: 'All',
      ai: 'AI and machine learning',
      fullstack: 'Full stack',
      cloud: 'Cloud and distributed systems',
      devtools: 'Tools and bots',
      systems: 'Systems and low-level',
    },
    viewCode: 'View code',
    liveDemo: 'Open project',
    keyFeatures: 'Highlights',
    metricsLabel: 'Numbers',
  },
  skills: {
    title: 'Skills',
    subtitle: 'Languages, frameworks, and tools I use day to day',
    categories: {
      languages: 'Languages',
      frontend: 'Frontend',
      backend: 'Backend and APIs',
      ai_agents: 'AI and machine learning',
      devops_cloud: 'Cloud, DevOps, and messaging',
      databases: 'Databases',
    },
    proficiencyLabel: 'Comfort level',
  },
  terminal: {
    title: 'Interactive terminal',
    welcomeMessage: 'Welcome to Guilherme Cezarino Felipe\'s terminal (GuiCezaF). Type "help" to see what you can run.',
    promptPlaceholder: 'Type a command (e.g. help, about, projects, skills, contact)...',
    helpText: 'Available commands:',
    availableCommands: ['help', 'about', 'skills', 'projects', 'contact', 'hire', 'stats', 'clear', 'sudo', 'matrix', 'easterEgg'],
    commandOutputs: {
      help: `Available commands:
  • about      - A short intro
  • skills     - What I use
  • projects   - Featured work
  • contact    - Email, LinkedIn, and GitHub
  • hire       - How to reach me about work
  • stats      - A few numbers
  • matrix     - Turn on Matrix mode
  • clear      - Clear the screen
  • sudo       - Try to become root 😉`,
      about: `Guilherme Cezarino Felipe (@GuiCezaF)
Junior full stack developer.
Based in Sumaré, São Paulo, Brazil.
Computer Engineering student at UNASP, Hortolândia campus (2023–2027).
Works at Grupo Escalada.`,
      skills: `Main stack:
  • Languages: TypeScript, JavaScript, Python, PHP, SQL
  • Frontend: React, Vue.js, Tailwind CSS, Vite
  • Backend: Node.js, Django, Laravel, PostgreSQL
  • Cloud: AWS, Docker`,
      projects: `Featured GitHub repos:
  1. sentience_train — facial expression training (PyTorch/ONNX)
  2. queue-processor — Go worker + RabbitMQ + ONNX
  3. sentince-front — Sentience React frontend
  4. sentience_gateway — .NET 8 gateway
  5. worm-hole-api — Fastify + Prisma + S3
  6. lore-forge — web VTT`,
      contact: `Contact:
  • Email:    contato.guicezafe@gmail.com
  • GitHub:   https://github.com/GuiCezaF
  • LinkedIn: https://www.linkedin.com/in/guilherme-cezarino-felipe/
  • City:     Sumaré / Campinas, São Paulo, Brazil`,
      hire: `Junior full stack developer at Grupo Escalada. Find me on LinkedIn.`,
      stats: `A few numbers:
  • Years of experience: 2+
  • Degree: Computer Engineering (UNASP, Hortolândia)
  • Focus: web development (TypeScript, React, Node)`,
      clear: 'Terminal cleared.',
      sudo: 'Permission denied: guest is not in the sudoers file. This incident will be reported to GuiCezaF. 🛡️',
      matrix: 'Entering the Matrix... Follow the white rabbit. 🐇',
      easterEgg: '🎮 Cheat unlocked: +100 software engineering XP. Thanks for stopping by.',
    },
  },
  contact: {
    title: 'Get in touch',
    subtitle: 'Email, LinkedIn, or GitHub — whichever you prefer',
    nameLabel: 'Your name',
    emailLabel: 'Your email',
    subjectLabel: 'Subject',
    messageLabel: 'Your message',
    sendBtn: 'Send message',
    sendingBtn: 'Sending...',
    successMsg: 'Message sent. I will get back to you soon.',
    errorMsg: 'Could not send that. Try again or ping me on LinkedIn.',
    directEmail: 'Work email',
    location: 'Sumaré, São Paulo — Brazil',
    availabilityBadge: 'Open to new roles',
    copyEmailSuccess: 'Email copied!',
    githubLabel: 'GitHub',
    linkedinLabel: 'LinkedIn',
  },
  footer: {
    rights: 'All rights reserved.',
    builtWith: 'Built with React, TypeScript, Tailwind CSS, and Vite.',
    backToTop: 'Back to top',
    statusAvailable: 'Open to projects',
  },
};

export const translations: Record<string, Translations> = {
  pt: ptTranslations,
  en: enTranslations,
};

export function getTranslations(lang: 'pt' | 'en' = 'pt'): Translations {
  return translations[lang] || translations.pt;
}
