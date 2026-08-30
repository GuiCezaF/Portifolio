export type Language = 'pt' | 'en';
export type Theme = 'dark' | 'light' | 'cyber';

export type ProjectCategory = 'all' | 'ai' | 'fullstack' | 'cloud' | 'devtools' | 'systems';

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface LocalizedProjectText {
  title: string;
  description: string;
  longDescription: string;
  highlights: string[];
  metrics: ProjectMetric[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: ProjectCategory;
  tags: string[];
  metrics?: ProjectMetric[];
  liveUrl?: string;
  githubUrl?: string;
  secondaryGithubUrl?: string;
  image?: string;
  visualType?: 'canvas' | 'ml' | 'queue' | 'front' | 'gateway' | 'worm' | 'default';
  featured?: boolean;
  stars?: number;
  highlights?: string[];
  translations?: {
    pt: LocalizedProjectText;
    en: LocalizedProjectText;
  };
}

export type ExperienceType = 'work' | 'education' | 'milestone';

export interface LocalizedExperienceText {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  skills: string[];
  type: ExperienceType;
  current?: boolean;
  translations?: {
    pt: LocalizedExperienceText;
    en: LocalizedExperienceText;
  };
}

export interface Skill {
  name: string;
  level?: number; // 0 - 100
  category: string;
  hot?: boolean;
  iconName?: string;
  description?: string;
  descriptionPt?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  namePt?: string;
  icon: string;
  skills: Skill[];
}

export interface QuickStat {
  label: string;
  value: string;
}

export interface AboutHighlight {
  title: string;
  desc: string;
}

export interface Translations {
  nav: {
    home: string;
    about: string;
    experience: string;
    projects: string;
    skills: string;
    terminal: string;
    contact: string;
    resume: string;
    changeLang: string;
    changeTheme: string;
  };
  hero: {
    greeting: string;
    name: string;
    role: string;
    subtitle: string;
    tagline: string;
    availability: string;
    ctaProjects: string;
    ctaContact: string;
    ctaResume: string;
    quickStats: QuickStat[];
  };
  about: {
    title: string;
    subtitle: string;
    bioParagraphs: string[];
    philosophyTitle: string;
    philosophyText: string;
    highlights: AboutHighlight[];
  };
  experience: {
    title: string;
    subtitle: string;
    tabs: {
      all: string;
      work: string;
      education: string;
    };
    presentText: string;
  };
  projects: {
    title: string;
    subtitle: string;
    categories: {
      all: string;
      ai: string;
      fullstack: string;
      cloud: string;
      devtools: string;
      systems: string;
    };
    viewCode: string;
    liveDemo: string;
    keyFeatures: string;
    metricsLabel: string;
  };
  skills: {
    title: string;
    subtitle: string;
    categories: {
      languages: string;
      frontend: string;
      backend: string;
      ai_agents: string;
      devops_cloud: string;
      databases: string;
    };
    proficiencyLabel: string;
  };
  terminal: {
    title: string;
    welcomeMessage: string;
    promptPlaceholder: string;
    helpText: string;
    availableCommands: string[];
    commandOutputs: {
      help: string;
      about: string;
      skills: string;
      projects: string;
      contact: string;
      hire: string;
      stats: string;
      clear: string;
      sudo: string;
      matrix: string;
      easterEgg: string;
    };
  };
  contact: {
    title: string;
    subtitle: string;
    nameLabel: string;
    emailLabel: string;
    subjectLabel: string;
    messageLabel: string;
    sendBtn: string;
    sendingBtn: string;
    successMsg: string;
    errorMsg: string;
    directEmail: string;
    location: string;
    availabilityBadge: string;
    copyEmailSuccess: string;
    githubLabel: string;
    linkedinLabel: string;
  };
  footer: {
    rights: string;
    builtWith: string;
    backToTop: string;
    statusAvailable: string;
  };
}

export interface ProfileData {
  name: string;
  preferredName: string;
  handle: string;
  headline: string;
  tagline: string;
  location: string;
  email: string;
  avatarUrl: string;
  githubUrl: string;
  linkedinUrl: string;
  bio: string;
  status: string;
}
