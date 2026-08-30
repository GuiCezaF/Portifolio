import { Experience, Language } from '../types';

export const rawExperiences: Experience[] = [
  {
    id: 'grupo-escalada',
    role: 'Junior Full Stack Developer',
    company: 'Grupo Escalada',
    location: 'Campinas, SP',
    period: 'Ago 2026 — Present',
    description: 'Junior full stack developer at Grupo Escalada.',
    achievements: [
      'Building and maintaining full stack applications for the company.',
    ],
    skills: ['TypeScript', 'React', 'Node.js'],
    type: 'work',
    current: true,
    translations: {
      pt: {
        role: 'Desenvolvedor full stack ',
        company: 'Grupo Escalada',
        location: 'Campinas, SP',
        period: 'Ago 2026 — atual',
        description: 'Desenvolvimento full stack no Grupo Escalada.',
        achievements: [
          'Desenvolvimento e manutenção das aplicações da empresa.',
        ],
      },
      en: {
        role: 'Junior Full Stack Developer',
        company: 'Grupo Escalada',
        location: 'Campinas, SP',
        period: 'Aug 2026 — present',
        description: 'Full stack work at Grupo Escalada.',
        achievements: [
          'Building and maintaining the company apps.',
        ],
      },
    },
  },
  {
    id: 'retta-software-engineer',
    role: 'Software Developer',
    company: 'RETTA Tecnologia da Informação',
    location: 'Lajeado, RS',
    period: 'Mai 2025 — Ago 2026',
    description: 'Development and maintenance of a distributed system using Django, Node.js microservices, a real-time CDN, Flask on AWS Lambda, and a public-servers platform with CodeIgniter, Vue.js, and PostgreSQL.',
    achievements: [
      'Engineered distributed backend pipelines integrating Django core with Node.js microservices and real-time streaming CDN architectures.',
      'Designed and deployed high-efficiency serverless REST APIs using Python Flask hosted on AWS Lambda.',
      'Maintained and evolved public administration software with CodeIgniter, Vue.js, and PostgreSQL, ensuring high security and uptime.',
      'Managed full software development lifecycle: CI/CD pipelines, containerization, observability, and production deployments.',
    ],
    skills: ['Django', 'Node.js', 'Python', 'Flask', 'AWS Lambda', 'Vue.js', 'PostgreSQL', 'CodeIgniter', 'Docker', 'Microservices'],
    type: 'work',
    current: false,
    translations: {
      pt: {
        role: 'Desenvolvedor de software',
        company: 'RETTA Tecnologia da Informação',
        location: 'Lajeado, RS',
        period: 'Mai 2025 — Ago 2026',
        description: 'Desenvolvimento de sistemas distribuídos, microsserviços em nuvem e plataformas de gestão pública em produção.',
        achievements: [
          'Integração do núcleo Django com microsserviços em Node.js e entrega de mídia por CDN em tempo real.',
          'Criação e publicação de APIs serverless com Flask na AWS Lambda.',
          'Manutenção e evolução do sistema de gestão de servidores públicos com CodeIgniter, Vue.js e PostgreSQL.',
          'Atuação no ciclo completo: modelagem, testes, pipelines de CI/CD e monitoramento em produção.',
        ],
      },
      en: {
        role: 'Software Developer',
        company: 'RETTA Tecnologia da Informação',
        location: 'Lajeado, RS',
        period: 'May 2025 — Aug 2026',
        description: 'Worked on distributed systems, cloud microservices, and municipal software in production.',
        achievements: [
          'Connected a Django core to Node.js microservices and a real-time media CDN.',
          'Built and shipped serverless APIs with Flask on AWS Lambda.',
          'Maintained and improved a public-sector staff management system with CodeIgniter, Vue.js, and PostgreSQL.',
          'Worked the full cycle: modeling, tests, CI/CD, and production monitoring.',
        ],
      },
    },
  },
  {
    id: 'retta-intern',
    role: 'Software Engineering Intern',
    company: 'RETTA Tecnologia da Informação',
    location: 'Lajeado, RS',
    period: 'Jan 2024 — Mai 2025',
    description: 'Developed ERP enterprise modules, database migrations, and supported distributed backend services.',
    achievements: [
      'Implemented robust enterprise ERP modules using Laravel and MySQL, optimizing database queries and reporting routines.',
      'Contributed to maintenance and feature delivery in distributed backend systems running Django, Flask, and Node.js.',
      'Automated deployment checklists, staging validations, and application health monitoring.',
      'Collaborated closely with senior engineers on code reviews, refactoring, and architectural discussions.',
    ],
    skills: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'Django', 'Flask', 'Git', 'Linux'],
    type: 'work',
    current: false,
    translations: {
      pt: {
        role: 'Estagiário de desenvolvimento',
        company: 'RETTA Tecnologia da Informação',
        location: 'Lajeado, RS',
        period: 'Jan 2024 — Mai 2025',
        description: 'Desenvolvimento de módulos de ERP, migração de bancos e apoio a serviços de backend.',
        achievements: [
          'Desenvolvimento de módulos de ERP com Laravel e MySQL, com foco em consultas e relatórios.',
          'Apoio na manutenção e em novas rotas do backend distribuído (Django, Flask e Node.js).',
          'Ajuda em deploys, validação em homologação e rotinas de monitoramento.',
          'Participação em code reviews, correção de bugs em produção e melhoria dos padrões de código.',
        ],
      },
      en: {
        role: 'Software Engineering Intern',
        company: 'RETTA Tecnologia da Informação',
        location: 'Lajeado, RS',
        period: 'Jan 2024 — May 2025',
        description: 'Built ERP modules, handled database migrations, and helped with distributed backend services.',
        achievements: [
          'Built ERP features in Laravel and MySQL, with a focus on queries and reports.',
          'Helped maintain and add routes to the distributed backend (Django, Flask, and Node.js).',
          'Helped with deploys, staging checks, and monitoring.',
          'Took part in code reviews, fixed production bugs, and cleaned up code style.',
        ],
      },
    },
  },
  {
    id: 'unasp-eng-computacao',
    role: 'Computer Engineering (B.S.)',
    company: 'UNASP — Centro Universitário Adventista de São Paulo',
    location: 'Hortolândia, SP',
    period: '2023 — 2027 (Em andamento)',
    description: 'Undergraduate degree at the Hortolândia campus, focused on software engineering, embedded systems, AI, and computer architecture.',
    achievements: [
      'In-depth coursework in Data Structures, Advanced Algorithms, Operating Systems, Computer Networks, and Distributed Systems.',
      'Applied projects in Artificial Intelligence, Machine Learning pipelines, Computer Vision, and Microcontroller Systems.',
      'Active participation in academic hackathons and tech initiatives, including the UNASP Hackathon with IBM watsonx.',
    ],
    skills: ['Algorithms', 'Data Structures', 'C/C++', 'Python', 'Machine Learning', 'Computer Architecture', 'Operating Systems'],
    type: 'education',
    current: true,
    translations: {
      pt: {
        role: 'Engenharia da Computação (bacharelado)',
        company: 'UNASP — Centro Universitário Adventista de São Paulo',
        location: 'Hortolândia, SP',
        period: '2023 — 2027 (em andamento)',
        description: 'Graduação no campus Hortolândia, com ênfase em engenharia de software, sistemas embarcados, inteligência artificial e arquitetura de computadores.',
        achievements: [
          'Disciplinas de estruturas de dados, algoritmos, sistemas operacionais, redes e sistemas distribuídos.',
          'Projetos práticos em inteligência artificial, pipelines de machine learning e visão computacional.',
          'Participação em hackathons e iniciativas de inovação, incluindo o Hackathon UNASP com IBM watsonx.',
        ],
      },
      en: {
        role: 'B.S. in Computer Engineering',
        company: 'UNASP — Centro Universitário Adventista de São Paulo',
        location: 'Hortolândia, SP',
        period: '2023 — 2027 (in progress)',
        description: 'Undergraduate degree at the Hortolândia campus, focused on software engineering, embedded systems, AI, and computer architecture.',
        achievements: [
          'Coursework in data structures, algorithms, operating systems, networks, and distributed systems.',
          'Hands-on projects in AI, machine learning pipelines, and computer vision.',
          'Took part in hackathons and campus tech events, including the UNASP Hackathon with IBM watsonx.',
        ],
      },
    },
  },
  {
    id: 'etec-quimica',
    role: 'Chemistry Technician',
    company: 'ETEC Conselheiro Antônio Prado',
    location: 'Campinas, SP',
    period: '2020 — 2022',
    description: 'Technical diploma with extensive laboratory practice, scientific methods, data analysis, and quality standards.',
    achievements: [
      'Developed rigorous scientific problem-solving, laboratory safety protocols, and quantitative statistical analysis skills.',
      'Formed solid foundation in systematic experimentation, hypothesis testing, and procedural discipline.',
    ],
    skills: ['Scientific Method', 'Data Analysis', 'Analytical Chemistry', 'Lab Protocols', 'Quality Assurance'],
    type: 'education',
    current: false,
    translations: {
      pt: {
        role: 'Técnico em Química',
        company: 'ETEC Conselheiro Antônio Prado',
        location: 'Campinas, SP',
        period: '2020 — 2022',
        description: 'Curso técnico com bastante prática em laboratório, método científico, análise instrumental e controle de qualidade.',
        achievements: [
          'Prática de método científico, controle de qualidade e análise estatística.',
          'Rotina de experimentação, testes de hipótese e documentação técnica.',
        ],
      },
      en: {
        role: 'Technical diploma in Chemistry',
        company: 'ETEC Conselheiro Antônio Prado',
        location: 'Campinas, SP',
        period: '2020 — 2022',
        description: 'Technical program with a lot of lab work, scientific method, instrumental analysis, and quality control.',
        achievements: [
          'Practiced scientific method, quality control, and statistical analysis.',
          'Ran experiments, tested hypotheses, and wrote lab reports.',
        ],
      },
    },
  },
];

/**
 * Returns the list of experiences formatted for the requested language.
 */
export function getExperiences(lang: Language = 'pt'): Experience[] {
  return rawExperiences.map((exp) => {
    const localized = exp.translations?.[lang];
    if (!localized) return exp;

    return {
      ...exp,
      role: localized.role || exp.role,
      company: localized.company || exp.company,
      location: localized.location || exp.location,
      period: localized.period || exp.period,
      description: localized.description || exp.description,
      achievements: localized.achievements || exp.achievements,
    };
  });
}

export const experiences = getExperiences('pt');
