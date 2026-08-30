import React, { useEffect } from 'react';
import {
  X,
  Github,
  ExternalLink,
  CheckCircle2,
  Activity,
  Layers,
  Sparkles,
  GitFork,
  Star,
} from 'lucide-react';
import { Project } from '../types';
import { useI18n } from '../i18n/context';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { language, theme, t } = useI18n();
  const isLight = theme === 'light';

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const description = project.longDescription || project.description;
  const highlights = project.highlights || [];
  const metrics = project.metrics || [];

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 backdrop-blur-md animate-fade-in ${
        isLight ? 'bg-slate-900/40' : 'bg-slate-950/80'
      }`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border shadow-2xl p-6 sm:p-8 animate-slide-up ${
          isLight ? 'bg-white border-slate-200 text-slate-800' : 'bg-slate-900 border-slate-700/80 text-slate-100'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className={`absolute top-5 right-5 p-2 rounded-xl border transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
            isLight
              ? 'bg-slate-50 hover:bg-slate-100 text-slate-500 hover:text-slate-800 border-slate-200'
              : 'bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white border-slate-700/50'
          }`}
          aria-label={language === 'pt' ? 'Fechar' : 'Close dialog'}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-12 space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono px-3 py-1 rounded-full uppercase tracking-wider bg-indigo-500/15 text-indigo-300 border border-indigo-500/30 font-semibold">
              {t.projects.categories[project.category] ?? project.category}
            </span>
            {project.featured && (
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 flex items-center gap-1 font-semibold">
                <Sparkles className="w-3 h-3" />
                {language === 'pt' ? 'Destaque' : 'Featured'}
              </span>
            )}
            {project.stars && (
              <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30 flex items-center gap-1">
                <Star className="w-3 h-3 fill-amber-300 text-amber-300" />
                {project.stars}
              </span>
            )}
          </div>

          <h2 id="modal-title" className={`text-2xl sm:text-3xl font-bold font-display ${isLight ? 'text-slate-900' : 'text-white'}`}>
            {project.title}
          </h2>
        </div>

        {/* Main Content Body */}
        <div className="mt-6 space-y-6">
          {/* Detailed Description */}
          <div className={`p-4 rounded-2xl border text-sm sm:text-base leading-relaxed ${
            isLight ? 'bg-slate-50 border-slate-200 text-slate-600' : 'bg-slate-950/60 border-slate-800 text-slate-300'
          }`}>
            {description}
          </div>

          {/* Performance Metrics */}
          {metrics.length > 0 && (
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-cyan-400" />
                <span>{language === 'pt' ? 'Métricas' : 'Metrics'}</span>
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {metrics.map((metric, i) => (
                  <div
                    key={i}
                    className={`p-3.5 rounded-xl border text-center ${
                      isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950/80 border-slate-800/90'
                    }`}
                  >
                    <span className="text-xs text-slate-400 block font-medium">
                      {metric.label}
                    </span>
                    <span className="text-base sm:text-lg font-bold font-display text-cyan-300 mt-0.5 block">
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Architecture & Key Highlights */}
          {highlights.length > 0 && (
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>{language === 'pt' ? 'Destaques' : 'Highlights'}</span>
              </p>
              <ul className="space-y-2.5">
                {highlights.map((item, i) => (
                  <li
                    key={i}
                    className={`flex items-start gap-3 p-3 rounded-xl border text-xs sm:text-sm leading-relaxed ${
                      isLight ? 'bg-slate-50 border-slate-200 text-slate-600' : 'bg-slate-950/40 border-slate-800/70 text-slate-300'
                    }`}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Tags */}
          {project.tags && (
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-indigo-400" />
                <span>{language === 'pt' ? 'Tecnologias' : 'Tech Stack'}</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-xs font-mono px-3 py-1 rounded-lg border ${
                      isLight
                        ? 'bg-indigo-50 text-indigo-700 border-indigo-200'
                        : 'bg-indigo-950/40 text-indigo-300 border-indigo-800/50'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Links & CTA Bar */}
          <div className={`pt-6 border-t flex flex-wrap items-center justify-between gap-3 ${isLight ? 'border-slate-200' : 'border-slate-800'}`}>
            <div className="flex flex-wrap items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl border text-xs sm:text-sm font-medium transition-all shadow-md ${
                    isLight
                      ? 'bg-white hover:bg-slate-50 border-slate-200 text-slate-800'
                      : 'bg-slate-800 hover:bg-slate-700 border-slate-600 text-white'
                  }`}
                >
                  <Github className="w-4 h-4" />
                  <span>{language === 'pt' ? 'Ver repositório' : 'View Code'}</span>
                </a>
              )}

              {project.secondaryGithubUrl && (
                <a
                  href={project.secondaryGithubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-300 hover:text-white text-xs font-medium transition-all"
                >
                  <GitFork className="w-4 h-4 text-cyan-400" />
                  <span>{language === 'pt' ? 'Pipeline / Treino' : 'Train Repo'}</span>
                </a>
              )}
            </div>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white text-xs sm:text-sm font-medium shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-all ml-auto"
              >
                <span>{language === 'pt' ? 'Abrir projeto' : 'Live Demo'}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
