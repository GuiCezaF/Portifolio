import React, { useState } from 'react';
import {
  ExternalLink,
  Github,
  Sparkles,
  ArrowRight,
  Map,
  Brain,
  Layers,
  Monitor,
  Radio,
  CloudUpload,
  type LucideIcon,
} from 'lucide-react';
import { useI18n } from '../i18n/context';
import { Project, ProjectCategory } from '../types';
import { ProjectModal } from './ProjectModal';
import { surface } from '../lib/theme';

const COVER_THEMES: Record<
  string,
  { Icon: LucideIcon; kicker: string; light: string; dark: string; glow: string }
> = {
  ml: {
    Icon: Brain,
    kicker: 'PyTorch · ONNX',
    light: 'from-violet-200 via-fuchsia-100 to-indigo-200',
    dark: 'from-violet-900 via-fuchsia-950 to-indigo-950',
    glow: 'bg-violet-400/40',
  },
  queue: {
    Icon: Layers,
    kicker: 'Go · RabbitMQ',
    light: 'from-amber-200 via-orange-100 to-yellow-200',
    dark: 'from-amber-900 via-orange-950 to-slate-900',
    glow: 'bg-amber-400/40',
  },
  front: {
    Icon: Monitor,
    kicker: 'React · Sentience',
    light: 'from-cyan-200 via-sky-100 to-indigo-200',
    dark: 'from-cyan-900 via-slate-900 to-indigo-950',
    glow: 'bg-cyan-400/40',
  },
  gateway: {
    Icon: Radio,
    kicker: '.NET 8 Gateway',
    light: 'from-emerald-200 via-teal-100 to-sky-200',
    dark: 'from-emerald-900 via-teal-950 to-slate-900',
    glow: 'bg-emerald-400/40',
  },
  worm: {
    Icon: CloudUpload,
    kicker: 'Fastify · S3',
    light: 'from-rose-200 via-orange-100 to-amber-200',
    dark: 'from-rose-950 via-orange-950 to-slate-900',
    glow: 'bg-rose-400/40',
  },
  canvas: {
    Icon: Map,
    kicker: 'VTT Web',
    light: 'from-indigo-200 via-sky-100 to-cyan-200',
    dark: 'from-indigo-800 via-slate-800 to-cyan-800',
    glow: 'bg-cyan-400/40',
  },
};

const ProjectVisual: React.FC<{ visualType?: string; title: string; isLight: boolean }> = ({
  visualType,
  title,
  isLight,
}) => {
  const theme = COVER_THEMES[visualType || ''] ?? COVER_THEMES.canvas;
  const { Icon, kicker, light, dark, glow } = theme;

  return (
    <div className={`relative h-48 w-full overflow-hidden bg-gradient-to-br ${isLight ? light : dark}`}>
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
          backgroundSize: '18px 18px',
          color: isLight ? '#334155' : '#e2e8f0',
        }}
      />
      <div className={`absolute -top-10 -right-8 w-36 h-36 rounded-full blur-2xl ${glow}`} />
      <div className={`absolute -bottom-12 -left-6 w-32 h-32 rounded-full blur-2xl ${glow}`} />

      <div className="relative z-10 h-full flex flex-col justify-between p-5">
        <span
          className={`self-start text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full border ${
            isLight ? 'bg-white/80 border-white/70 text-slate-700' : 'bg-black/30 border-white/20 text-white'
          }`}
        >
          {kicker}
        </span>

        <div className="flex items-end gap-3">
          <div
            className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${
              isLight ? 'bg-white text-slate-800' : 'bg-white/15 text-white backdrop-blur-md'
            }`}
          >
            <Icon className="w-7 h-7" />
          </div>
          <div className="min-w-0">
            <p className={`text-lg font-bold font-display leading-tight truncate ${isLight ? 'text-slate-900' : 'text-white'}`}>
              {title}
            </p>
            <p className={`text-[11px] font-mono mt-0.5 ${isLight ? 'text-slate-600' : 'text-slate-200'}`}>
              {kicker}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Projects: React.FC = () => {
  const { t, projects, language, theme } = useI18n();
  const isLight = theme === 'light';
  const ui = surface(isLight);
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const usedCategories = new Set(projects.map((p) => p.category));
  const allCategories: { key: ProjectCategory; label: string }[] = [
    { key: 'all', label: t.projects.categories.all },
    { key: 'fullstack', label: t.projects.categories.fullstack },
    { key: 'ai', label: t.projects.categories.ai },
  ];
  const categories = allCategories.filter(
    (cat) => cat.key === 'all' || usedCategories.has(cat.key)
  );

  const filteredProjects = projects.filter((project) => {
    if (selectedCategory === 'all') return true;
    return project.category === selectedCategory;
  });

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-mono ${ui.sectionBadge}`}>
            <Sparkles className={`w-3.5 h-3.5 ${isLight ? 'text-indigo-600' : 'text-indigo-400'}`} />
            <span>{language === 'pt' ? 'Código e arquitetura' : 'Code and architecture'}</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight ${ui.title}`}>
            {t.projects.title}
          </h2>
          <p className={`text-base sm:text-lg ${ui.subtitle}`}>
            {t.projects.subtitle}
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex justify-center mb-12">
          <div className={`flex flex-wrap items-center justify-center gap-2 max-w-4xl p-2 rounded-2xl border backdrop-blur-md ${ui.filterBar}`}>
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                    isActive ? ui.filterActive : ui.filterIdle
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`glass-card rounded-3xl overflow-hidden border transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1.5 ${ui.card} ${ui.cardHover}`}
            >
              <div>
                {/* Visual Header */}
                <ProjectVisual visualType={project.visualType} title={project.title} isLight={isLight} />

                {/* Card Content */}
                <div className="p-6">
                  {/* Category Pill & Metrics */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className={`text-[11px] font-mono uppercase px-2.5 py-0.5 rounded-full border font-semibold ${
                      isLight
                        ? 'bg-indigo-50 text-indigo-700 border-indigo-200'
                        : 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30'
                    }`}>
                      {t.projects.categories[project.category] ?? project.category}
                    </span>

                    {project.metrics && project.metrics.length > 0 && (
                      <span className={`text-[11px] font-mono px-2 py-0.5 rounded border ${
                        isLight
                          ? 'text-cyan-700 bg-cyan-50 border-cyan-200'
                          : 'text-cyan-400 bg-cyan-950/60 border-cyan-800/50'
                      }`}>
                        {project.metrics[0].value}
                      </span>
                    )}
                  </div>

                  <h3 className={`text-xl font-bold font-display transition-colors mb-2 ${ui.title} ${ui.headingHover}`}>
                    {project.title}
                  </h3>

                  <p className={`text-xs sm:text-sm leading-relaxed line-clamp-3 mb-4 ${ui.body}`}>
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className={`text-[11px] font-mono px-2 py-0.5 rounded-md border ${ui.chip}`}
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className={`text-[11px] font-mono px-2 py-0.5 rounded-md ${ui.chip}`}>
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Bar Footer */}
              <div className={`px-6 py-4 border-t flex items-center justify-between gap-2 ${
                isLight ? 'border-slate-200 bg-slate-50' : 'border-slate-800/80 bg-slate-950/40'
              }`}>
                <button
                  type="button"
                  onClick={() => setActiveModalProject(project)}
                  className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors group/btn"
                >
                  <span>{language === 'pt' ? 'Ver detalhes' : 'View Details'}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-lg border transition-colors ${ui.iconBtn}`}
                      title={t.projects.viewCode}
                      aria-label="View source code on GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-lg border transition-colors ${
                        isLight
                          ? 'bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border-indigo-200'
                          : 'bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 hover:text-white border-indigo-500/40'
                      }`}
                      title={t.projects.liveDemo}
                      aria-label="Open live demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
