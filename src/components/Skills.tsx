import React, { useState } from 'react';
import {
  Brain,
  Code2,
  Server,
  Layout,
  Cloud,
  Database,
  Sparkles,
  Flame,
  CheckCircle2,
  Cpu,
} from 'lucide-react';
import { useI18n } from '../i18n/context';
import { skillCategories } from '../data/skills';
import { surface } from '../lib/theme';

export const Skills: React.FC = () => {
  const { t, language, theme } = useI18n();
  const isLight = theme === 'light';
  const ui = surface(isLight);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain':
        return <Brain className="w-5 h-5 text-indigo-400" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-cyan-400" />;
      case 'Server':
        return <Server className="w-5 h-5 text-emerald-400" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-purple-400" />;
      case 'Cloud':
        return <Cloud className="w-5 h-5 text-blue-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-amber-400" />;
      default:
        return <Cpu className="w-5 h-5 text-cyan-400" />;
    }
  };

  const displayedCategories =
    selectedCategory === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === selectedCategory);

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-mono ${
            isLight ? 'bg-cyan-50 border-cyan-200 text-cyan-700' : 'bg-cyan-500/10 border-cyan-500/20 text-cyan-300'
          }`}>
            <Sparkles className={`w-3.5 h-3.5 ${isLight ? 'text-cyan-600' : 'text-cyan-400'}`} />
            <span>{language === 'pt' ? 'Ferramentas do dia a dia' : 'Day-to-day tools'}</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight ${ui.title}`}>
            {t.skills.title}
          </h2>
          <p className={`text-base sm:text-lg ${ui.subtitle}`}>
            {t.skills.subtitle}
          </p>
        </div>

        {/* Category Pills Filter */}
        <div className="flex justify-center mb-12">
          <div className={`flex flex-wrap items-center justify-center gap-2 max-w-4xl p-2 rounded-2xl border backdrop-blur-md ${ui.filterBar}`}>
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                selectedCategory === 'all' ? ui.filterActive : ui.filterIdle
              }`}
            >
              {language === 'pt' ? 'Todas' : 'All'}
            </button>
            {skillCategories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                    isActive ? ui.filterActive : ui.filterIdle
                  }`}
                >
                  {getCategoryIcon(cat.icon)}
                  <span>{language === 'pt' ? cat.namePt ?? cat.name : cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayedCategories.map((category) => (
            <div
              key={category.id}
              className={`glass-card p-6 rounded-3xl border transition-all duration-300 shadow-xl flex flex-col justify-between ${ui.card} ${ui.cardHover}`}
            >
              <div>
                {/* Category Card Header */}
                <div className={`flex items-center justify-between pb-4 mb-5 border-b ${ui.sectionLine}`}>
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-2xl border shadow-md ${ui.inset}`}>
                      {getCategoryIcon(category.icon)}
                    </div>
                    <h3 className={`text-lg font-bold font-display ${ui.title}`}>
                      {language === 'pt' ? category.namePt ?? category.name : category.name}
                    </h3>
                  </div>
                  <span className={`text-xs font-mono px-2.5 py-1 rounded-lg border ${ui.inset} ${ui.muted}`}>
                    {category.skills.length} {language === 'pt' ? 'itens' : 'skills'}
                  </span>
                </div>

                {/* Skills List with Level Meters */}
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="group/skill">
                      <div className="flex items-center justify-between text-xs font-medium mb-1.5">
                        <div className="flex items-center gap-2">
                          <span className={`font-semibold transition-colors ${isLight ? 'text-slate-800 group-hover/skill:text-cyan-700' : 'text-slate-200 group-hover/skill:text-cyan-300'}`}>
                            {skill.name}
                          </span>
                          {skill.hot && (
                            <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-rose-500/15 border border-rose-500/30 text-rose-400 text-[10px] font-mono font-bold uppercase tracking-wider">
                              <Flame className="w-2.5 h-2.5" />
                              {language === 'pt' ? 'destaque' : 'HOT'}
                            </span>
                          )}
                        </div>
                        {skill.level && (
                          <span className="text-[11px] font-mono text-slate-400 group-hover/skill:text-indigo-300">
                            {skill.level}%
                          </span>
                        )}
                      </div>

                      {/* Level Meter Bar */}
                      {skill.level && (
                        <div className={`w-full h-1.5 rounded-full overflow-hidden border ${
                          isLight ? 'bg-slate-100 border-slate-200' : 'bg-slate-950 border-slate-800/60'
                        }`}>
                          <div
                            className="h-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-emerald-400 rounded-full transition-all duration-500 group-hover/skill:brightness-125"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      )}

                      {/* Description tooltip / subtitle */}
                      {skill.description && (
                        <p className={`text-[11px] mt-1 leading-normal transition-colors ${ui.muted}`}>
                          {language === 'pt' ? skill.descriptionPt ?? skill.description : skill.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom footer tag */}
              <div className={`mt-6 pt-4 border-t flex items-center justify-between text-[11px] font-mono ${ui.sectionLine} ${ui.muted}`}>
                <span className="flex items-center gap-1 text-emerald-400">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>{language === 'pt' ? 'Usado em produção' : 'Used in production'}</span>
                </span>
                <span className="text-slate-400">
                  {language === 'pt' ? 'Em evolução' : 'Still learning'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
