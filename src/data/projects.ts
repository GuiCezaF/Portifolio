import { Project, Language } from '../types';

/** Repositórios em destaque em https://github.com/GuiCezaF. */
export const rawProjects: Project[] = [
  {
    id: 'sentience-train',
    title: 'sentience_train',
    description:
      'Machine learning module for Sentience. It classifies facial expressions into 5 categories with PyTorch, MiniVGGNet, and ONNX export.',
    longDescription:
      'Machine learning module for the Sentience project. It classifies facial expressions into 5 categories using PyTorch and MiniVGGNet, including training and exporting the model to ONNX.',
    category: 'ai',
    tags: ['Python', 'PyTorch', 'ONNX'],
    githubUrl: 'https://github.com/GuiCezaF/sentience_train',
    visualType: 'ml',
    featured: true,
    highlights: [
      'Classificação de expressões faciais em 5 categorias',
      'Treino em PyTorch / MiniVGGNet e exportação ONNX',
    ],
    translations: {
      pt: {
        title: 'sentience_train',
        description:
          'Módulo de machine learning do Sentience: classifica expressões faciais em 5 categorias com PyTorch, MiniVGGNet e exportação ONNX.',
        longDescription:
          'Módulo de machine learning do projeto Sentience. Classifica expressões faciais em 5 categorias com PyTorch e MiniVGGNet, incluindo o treino e a exportação do modelo em ONNX.',
        highlights: [
          'Classificação de expressões faciais em 5 categorias',
          'Treino em PyTorch / MiniVGGNet e exportação ONNX',
        ],
        metrics: [],
      },
      en: {
        title: 'sentience_train',
        description:
          'Machine learning module for Sentience. It classifies facial expressions into 5 categories with PyTorch, MiniVGGNet, and ONNX export.',
        longDescription:
          'Machine learning module for the Sentience project. It classifies facial expressions into 5 categories using PyTorch and MiniVGGNet, including training and exporting the model to ONNX.',
        highlights: [
          'Classifies facial expressions into 5 categories',
          'Trains with PyTorch / MiniVGGNet and exports to ONNX',
        ],
        metrics: [],
      },
    },
  },
  {
    id: 'queue-processor',
    title: 'queue-processor',
    description:
      'A Go worker that pulls images off a queue and detects emotions in real time, using RabbitMQ, ONNX, and PostgreSQL.',
    longDescription:
      'A Go worker that consumes image jobs from a queue and detects emotions in real time, using RabbitMQ, ONNX, and PostgreSQL.',
    category: 'ai',
    tags: ['Go', 'RabbitMQ', 'ONNX', 'PostgreSQL'],
    githubUrl: 'https://github.com/GuiCezaF/queue-processor',
    visualType: 'queue',
    featured: true,
    highlights: [
      'Worker em Go para processar imagens da fila',
      'RabbitMQ, ONNX e PostgreSQL',
    ],
    translations: {
      pt: {
        title: 'queue-processor',
        description:
          'Worker em Go que processa imagens da fila e identifica emoções em tempo real, com RabbitMQ, ONNX e PostgreSQL.',
        longDescription:
          'Worker em Go que consome jobs de imagem da fila e identifica emoções em tempo real, usando RabbitMQ, ONNX e PostgreSQL.',
        highlights: [
          'Worker em Go para processar imagens da fila',
          'RabbitMQ, ONNX e PostgreSQL',
        ],
        metrics: [],
      },
      en: {
        title: 'queue-processor',
        description:
          'A Go worker that pulls images off a queue and detects emotions in real time, using RabbitMQ, ONNX, and PostgreSQL.',
        longDescription:
          'A Go worker that consumes image jobs from a queue and detects emotions in real time, using RabbitMQ, ONNX, and PostgreSQL.',
        highlights: [
          'Go worker for queued image jobs',
          'RabbitMQ, ONNX, and PostgreSQL',
        ],
        metrics: [],
      },
    },
  },
  {
    id: 'sentince-front',
    title: 'sentince-front',
    description: "React and Vite frontend for Sentience's emotion recognition app.",
    longDescription:
      'Vite, React, and TypeScript frontend for Sentience (emotion-recognition-front), with i18n and React Router.',
    category: 'ai',
    tags: ['React', 'TypeScript', 'Vite'],
    githubUrl: 'https://github.com/GuiCezaF/sentince-front',
    visualType: 'front',
    featured: true,
    highlights: ['Front-end React do Sentience', 'Vite, TypeScript e i18n'],
    translations: {
      pt: {
        title: 'sentince-front',
        description: 'Front-end em React e Vite do app de reconhecimento de emoções do Sentience.',
        longDescription:
          'Front-end em Vite, React e TypeScript do projeto Sentience (pacote emotion-recognition-front), com i18n e React Router.',
        highlights: ['Front-end React do Sentience', 'Vite, TypeScript e i18n'],
        metrics: [],
      },
      en: {
        title: 'sentince-front',
        description: "React and Vite frontend for Sentience's emotion recognition app.",
        longDescription:
          'Vite, React, and TypeScript frontend for Sentience (emotion-recognition-front), with i18n and React Router.',
        highlights: ['React frontend for Sentience', 'Vite, TypeScript, and i18n'],
        metrics: [],
      },
    },
  },
  {
    id: 'sentience-gateway',
    title: 'sentience_gateway',
    description: 'C# / .NET 8 gateway for the Sentience project (emotions_gateway).',
    longDescription:
      'ASP.NET gateway (emotions_gateway, .NET 8) with endpoints, services, a database layer, and Docker.',
    category: 'ai',
    tags: ['C#', '.NET 8'],
    githubUrl: 'https://github.com/GuiCezaF/sentience_gateway',
    visualType: 'gateway',
    featured: true,
    highlights: ['Gateway .NET 8 do Sentience', 'Endpoints, services e Docker'],
    translations: {
      pt: {
        title: 'sentience_gateway',
        description: 'Gateway em C# / .NET 8 do projeto Sentience (emotions_gateway).',
        longDescription:
          'Gateway em ASP.NET (emotions_gateway, .NET 8) com endpoints, serviços, camada de banco e Docker.',
        highlights: ['Gateway .NET 8 do Sentience', 'Endpoints, serviços e Docker'],
        metrics: [],
      },
      en: {
        title: 'sentience_gateway',
        description: 'C# / .NET 8 gateway for the Sentience project (emotions_gateway).',
        longDescription:
          'ASP.NET gateway (emotions_gateway, .NET 8) with endpoints, services, a database layer, and Docker.',
        highlights: ['.NET 8 gateway for Sentience', 'Endpoints, services, and Docker'],
        metrics: [],
      },
    },
  },
  {
    id: 'worm-hole-api',
    title: 'worm-hole-api',
    description: 'TypeScript API with Fastify, Prisma, and AWS S3 (up-it package).',
    longDescription:
      'HTTP API in Node and TypeScript (Fastify) with Prisma and AWS S3 uploads via presigned URLs.',
    category: 'fullstack',
    tags: ['TypeScript', 'Fastify', 'Prisma', 'AWS S3'],
    githubUrl: 'https://github.com/GuiCezaF/worm-hole-api',
    visualType: 'worm',
    featured: true,
    highlights: ['API Fastify + Prisma', 'Upload com AWS S3'],
    translations: {
      pt: {
        title: 'worm-hole-api',
        description: 'API em TypeScript com Fastify, Prisma e AWS S3 (pacote up-it).',
        longDescription:
          'API HTTP em Node/TypeScript (Fastify) com Prisma e upload para AWS S3 (URLs pré-assinadas).',
        highlights: ['API Fastify + Prisma', 'Upload com AWS S3'],
        metrics: [],
      },
      en: {
        title: 'worm-hole-api',
        description: 'TypeScript API with Fastify, Prisma, and AWS S3 (up-it package).',
        longDescription:
          'HTTP API in Node and TypeScript (Fastify) with Prisma and AWS S3 uploads via presigned URLs.',
        highlights: ['Fastify + Prisma API', 'AWS S3 uploads'],
        metrics: [],
      },
    },
  },
  {
    id: 'lore-forge',
    title: 'LoreForge',
    description:
      'A web virtual tabletop for tabletop RPGs: campaigns, character sheets, GM notes, a live battle map, dice, and an investigation board.',
    longDescription:
      'LoreForge is a web VTT for tabletop RPGs. It brings campaigns, character sheets, GM notes, a live battle map, dice rolls, and an investigation board into one place.',
    category: 'fullstack',
    tags: ['TypeScript', 'React'],
    liveUrl: 'https://lore-forge-guicezafs-projects.vercel.app',
    githubUrl: 'https://github.com/GuiCezaF/lore-forge',
    visualType: 'canvas',
    featured: true,
    highlights: ['VTT web para campanhas de RPG', 'Mapa de batalha e fichas no mesmo lugar'],
    translations: {
      pt: {
        title: 'LoreForge',
        description:
          'Mesa virtual na web para RPG de mesa: campanhas, fichas, notas do mestre, mapa de batalha em tempo real, dados e quadro de investigação.',
        longDescription:
          'O LoreForge é uma mesa virtual na web para RPG de mesa. Reúne campanhas, fichas, notas do mestre, mapa de batalha em tempo real, rolagem de dados e um quadro de investigação.',
        highlights: ['Mesa virtual para campanhas de RPG', 'Mapa de batalha e fichas no mesmo lugar'],
        metrics: [],
      },
      en: {
        title: 'LoreForge',
        description:
          'A web virtual tabletop for tabletop RPGs: campaigns, character sheets, GM notes, a live battle map, dice, and an investigation board.',
        longDescription:
          'LoreForge is a web VTT for tabletop RPGs. It brings campaigns, character sheets, GM notes, a live battle map, dice rolls, and an investigation board into one place.',
        highlights: ['Web VTT for RPG campaigns', 'Battle map and character sheets in one place'],
        metrics: [],
      },
    },
  },
];

/**
 * Aplica o texto do idioma escolhido em cada projeto.
 */
export function getProjects(lang: Language = 'pt'): Project[] {
  return rawProjects.map((proj) => {
    const localized = proj.translations?.[lang];
    if (!localized) return proj;

    return {
      ...proj,
      title: localized.title || proj.title,
      description: localized.description || proj.description,
      longDescription: localized.longDescription || proj.longDescription,
      highlights: localized.highlights || proj.highlights,
      metrics: localized.metrics || proj.metrics,
    };
  });
}

export const projects = getProjects('pt');
