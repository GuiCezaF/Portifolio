import React from 'react';
import {
  Brain,
  Cloud,
  Layers,
  Cpu,
  Compass,
  CheckCircle2,
  Terminal,
  Sparkles,
} from 'lucide-react';
import { useI18n } from '../i18n/context';
import { surface } from '../lib/theme';

export const About: React.FC = () => {
  const { t, language, theme } = useI18n();
  const isLight = theme === 'light';
  const ui = surface(isLight);

  const highlightIcons = [
    <Cloud key="cloud" className="w-6 h-6 text-cyan-400" />,
    <Brain key="brain" className="w-6 h-6 text-indigo-400" />,
    <Layers key="layers" className="w-6 h-6 text-purple-400" />,
    <Cpu key="cpu" className="w-6 h-6 text-emerald-400" />,
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-mono ${ui.sectionBadge}`}>
            <Sparkles className={`w-3.5 h-3.5 ${isLight ? 'text-cyan-600' : 'text-cyan-400'}`} />
            <span>{language === 'pt' ? 'Perfil e trajetória' : 'About'}</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight ${ui.title}`}>
            {t.about.title}
          </h2>
          <p className={`text-base sm:text-lg ${ui.subtitle}`}>
            {t.about.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Bio & Philosophy (Left Column) */}
          <div className="lg:col-span-6 space-y-6">
            <div className={`glass-card p-6 sm:p-8 rounded-3xl border backdrop-blur-xl relative overflow-hidden ${ui.card}`}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

              <h3 className={`text-xl font-bold font-display mb-4 flex items-center gap-2.5 ${ui.title}`}>
                <Compass className={`w-5 h-5 ${isLight ? 'text-cyan-600' : 'text-cyan-400'}`} />
                <span>{language === 'pt' ? 'Quem sou eu' : 'About me'}</span>
              </h3>

              <div className={`space-y-4 text-sm sm:text-base leading-relaxed ${ui.body}`}>
                {t.about.bioParagraphs.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className={`mt-6 pt-6 border-t grid grid-cols-1 sm:grid-cols-2 gap-3 ${ui.sectionLine}`}>
                <div className={`p-3 rounded-2xl border ${ui.inset}`}>
                  <span className={`text-[11px] font-mono block uppercase ${isLight ? 'text-cyan-700' : 'text-cyan-400'}`}>
                    {language === 'pt' ? 'Atuação atual' : 'Current Role'}
                  </span>
                  <span className={`text-xs font-semibold mt-0.5 block ${isLight ? 'text-slate-800' : 'text-slate-200'}`}>
                    {language === 'pt' ? 'Full Stack  @ Grupo Escalada' : 'Junior Full Stack @ Grupo Escalada'}
                  </span>
                </div>

                <div className={`p-3 rounded-2xl border ${ui.inset}`}>
                  <span className={`text-[11px] font-mono block uppercase ${isLight ? 'text-indigo-700' : 'text-indigo-400'}`}>
                    {language === 'pt' ? 'Graduação' : 'Degree'}
                  </span>
                  <span className={`text-xs font-semibold mt-0.5 block ${isLight ? 'text-slate-800' : 'text-slate-200'}`}>
                    {language === 'pt' ? 'Engenharia da Computação (UNASP Hortolândia)' : 'Computer Engineering (UNASP Hortolândia)'}
                  </span>
                </div>
              </div>
            </div>

            <div className={`glass-card p-6 sm:p-8 rounded-3xl border backdrop-blur-xl ${
              isLight
                ? 'bg-indigo-50/80 border-indigo-100'
                : 'border-slate-800/80 bg-gradient-to-br from-indigo-950/20 via-slate-900/60 to-slate-950/80'
            }`}>
              <div className="flex items-center gap-3 mb-3">
                <div className={`p-2 rounded-xl border ${
                  isLight
                    ? 'bg-white border-indigo-200 text-indigo-600'
                    : 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400'
                }`}>
                  <Terminal className="w-5 h-5" />
                </div>
                <h3 className={`text-lg font-bold font-display ${ui.title}`}>
                  {t.about.philosophyTitle}
                </h3>
              </div>
              <p className={`text-sm sm:text-base leading-relaxed italic border-l-2 pl-4 py-1 ${
                isLight ? 'text-slate-600 border-indigo-300' : 'text-slate-300 border-indigo-500/40'
              }`}>
                "{t.about.philosophyText}"
              </p>
            </div>
          </div>

          {/* Highlights & Domains Grid (Right Column) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {t.about.highlights.map((item, idx) => (
              <div
                key={idx}
                className={`glass-card p-6 rounded-3xl border transition-all duration-300 group flex flex-col justify-between ${ui.card} ${ui.cardHover}`}
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300 shadow-md ${
                    isLight
                      ? 'bg-slate-50 border-slate-200 group-hover:border-indigo-300'
                      : 'bg-slate-800/80 border-slate-700/60 group-hover:border-indigo-500/50'
                  }`}>
                    {highlightIcons[idx % highlightIcons.length]}
                  </div>

                  <h4 className={`text-base font-bold font-display mb-2 transition-colors ${ui.title} ${isLight ? 'group-hover:text-cyan-700' : 'group-hover:text-cyan-300'}`}>
                    {item.title}
                  </h4>

                  <p className={`text-xs sm:text-sm leading-relaxed ${ui.muted}`}>
                    {item.desc}
                  </p>
                </div>

                <div className={`mt-4 pt-3 border-t flex items-center gap-1.5 text-[11px] font-mono ${ui.sectionLine} ${ui.muted}`}>
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{language === 'pt' ? 'Usado em produção' : 'Used in production'}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
