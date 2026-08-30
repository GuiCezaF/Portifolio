import React, { useState } from 'react';
import {
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  Sparkles,
  ChevronRight,
} from 'lucide-react';
import { useI18n } from '../i18n/context';
import { ExperienceType } from '../types';
import { surface } from '../lib/theme';

export const Experience: React.FC = () => {
  const { t, experiences, language, theme } = useI18n();
  const isLight = theme === 'light';
  const ui = surface(isLight);
  const [filter, setFilter] = useState<'all' | ExperienceType>('all');

  const filteredExperiences = experiences.filter((exp) => {
    if (filter === 'all') return true;
    return exp.type === filter;
  });

  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-mono ${
            isLight ? 'bg-cyan-50 border-cyan-200 text-cyan-700' : 'bg-cyan-500/10 border-cyan-500/20 text-cyan-300'
          }`}>
            <Sparkles className={`w-3.5 h-3.5 ${isLight ? 'text-cyan-600' : 'text-cyan-400'}`} />
            <span>{language === 'pt' ? 'Linha do tempo' : 'Timeline'}</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight ${ui.title}`}>
            {t.experience.title}
          </h2>
          <p className={`text-base sm:text-lg ${ui.subtitle}`}>
            {t.experience.subtitle}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-16">
          <div className={`inline-flex p-1.5 rounded-2xl border backdrop-blur-md ${ui.filterBar}`}>
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                filter === 'all' ? ui.filterActive : ui.filterIdle
              }`}
            >
              {t.experience.tabs.all}
            </button>
            <button
              type="button"
              onClick={() => setFilter('work')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                filter === 'work' ? ui.filterActive : ui.filterIdle
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>{t.experience.tabs.work}</span>
            </button>
            <button
              type="button"
              onClick={() => setFilter('education')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                filter === 'education' ? ui.filterActive : ui.filterIdle
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>{t.experience.tabs.education}</span>
            </button>
          </div>
        </div>

        {/* Timeline */}
        <div className={`relative border-l-2 ml-4 sm:ml-8 space-y-12 pl-6 sm:pl-10 ${isLight ? 'border-slate-200' : 'border-slate-800'}`}>
          {filteredExperiences.map((exp) => {
            const isWork = exp.type === 'work';

            return (
              <div key={exp.id} className="relative group">
                {/* Glowing Node on Timeline Line */}
                <div
                  className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                    exp.current
                      ? isLight
                        ? 'bg-emerald-50 border-emerald-400 text-emerald-700 shadow-sm ring-4 ring-emerald-100'
                        : 'bg-emerald-950 border-emerald-400 text-emerald-300 shadow-lg shadow-emerald-500/30 ring-4 ring-emerald-500/10'
                      : isLight
                        ? 'bg-white border-slate-300 text-slate-500 group-hover:border-indigo-400 group-hover:text-indigo-600'
                        : 'bg-slate-900 border-slate-700 text-slate-400 group-hover:border-indigo-400 group-hover:text-indigo-300'
                  }`}
                >
                  {isWork ? (
                    <Briefcase className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  ) : (
                    <GraduationCap className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  )}
                </div>

                {/* Experience Card */}
                <div className={`glass-card p-6 sm:p-8 rounded-3xl border transition-all duration-300 shadow-xl relative ${ui.card} ${ui.cardHover}`}>
                  {/* Top metadata line */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[11px] font-mono px-2.5 py-1 rounded-full uppercase tracking-wider font-semibold ${
                          isWork
                            ? isLight
                              ? 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                              : 'bg-indigo-500/15 text-indigo-300 border border-indigo-500/30'
                            : isLight
                              ? 'bg-cyan-50 text-cyan-700 border border-cyan-200'
                              : 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                        }`}
                      >
                        {isWork
                          ? language === 'pt'
                            ? 'Experiência'
                            : 'Work'
                          : language === 'pt'
                          ? 'Formação'
                          : 'Education'}
                      </span>

                      {exp.current && (
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-[11px] font-medium font-mono ${
                          isLight
                            ? 'bg-emerald-50 border-emerald-200 text-emerald-700'
                            : 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300'
                        }`}>
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span>{t.experience.presentText}</span>
                        </span>
                      )}
                    </div>

                    <div className={`flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-lg border ${ui.inset} ${ui.muted}`}>
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Role and Company */}
                  <h3 className={`text-xl sm:text-2xl font-bold font-display transition-colors ${ui.title} ${ui.headingHover}`}>
                    {exp.role}
                  </h3>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-cyan-400 font-medium mt-1 mb-4">
                    <span>{exp.company}</span>
                    <span className="text-slate-700 hidden sm:inline">&bull;</span>
                    <span className="flex items-center gap-1 text-xs text-slate-400 font-mono">
                      <MapPin className="w-3 h-3 text-rose-400" />
                      {exp.location}
                    </span>
                  </div>

                  {/* Summary Description */}
                  <p className={`text-sm sm:text-base leading-relaxed mb-5 ${ui.body}`}>
                    {exp.description}
                  </p>

                  {/* Achievements List */}
                  {exp.achievements && exp.achievements.length > 0 && (
                    <div className="space-y-2.5 mb-6">
                      <p className={`text-xs font-mono uppercase tracking-wider ${ui.muted}`}>
                        {language === 'pt' ? 'O que fiz' : 'What I did'}:
                      </p>
                      <ul className="space-y-2">
                        {exp.achievements.map((item, i) => (
                          <li
                            key={i}
                            className={`flex items-start gap-2.5 text-xs sm:text-sm leading-normal ${ui.body}`}
                          >
                            <ChevronRight className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Skills Tags */}
                  {exp.skills && exp.skills.length > 0 && (
                    <div className={`pt-4 border-t flex flex-wrap gap-1.5 ${ui.sectionLine}`}>
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className={`text-[11px] font-mono px-2.5 py-1 rounded-lg border transition-colors ${ui.chip}`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
