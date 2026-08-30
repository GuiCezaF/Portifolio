import React, { useState } from 'react';
import { Copy, Check, Github, Linkedin, MapPin, Sparkles, Mail } from 'lucide-react';
import { useI18n } from '../i18n/context';
import { profileData } from '../data/profile';
import { surface } from '../lib/theme';

export const Contact: React.FC = () => {
  const { t, language, theme } = useI18n();
  const isLight = theme === 'light';
  const ui = surface(isLight);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-mono ${
              isLight
                ? 'bg-cyan-50 border-cyan-200 text-cyan-700'
                : 'bg-cyan-500/10 border-cyan-500/20 text-cyan-300'
            }`}
          >
            <Sparkles className={`w-3.5 h-3.5 ${isLight ? 'text-cyan-600' : 'text-cyan-400'}`} />
            <span>{language === 'pt' ? 'Contato' : 'Contact'}</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight ${ui.title}`}>
            {t.contact.title}
          </h2>
          <p className={`text-base sm:text-lg ${ui.subtitle}`}>{t.contact.subtitle}</p>
        </div>

        <div className={`glass-card p-6 sm:p-8 rounded-3xl border backdrop-blur-xl space-y-6 ${ui.card}`}>
          <div>
            <h3 className={`text-xl font-bold font-display mb-2 ${ui.title}`}>
              {language === 'pt' ? 'Vamos conversar' : "Let's talk"}
            </h3>
            <p className={`text-sm leading-relaxed ${ui.body}`}>
              {language === 'pt'
                ? 'Para propostas profissionais, use o e-mail abaixo ou me encontre no LinkedIn e no GitHub.'
                : 'For work stuff, use the email below or find me on LinkedIn and GitHub.'}
            </p>
          </div>

          <div className={`p-4 rounded-2xl border space-y-2 ${ui.inset}`}>
            <span className={`text-xs font-mono uppercase tracking-wider block ${ui.muted}`}>
              {t.contact.directEmail}
            </span>
            <div className="flex items-center justify-between gap-2">
              <a
                href={`mailto:${profileData.email}`}
                className={`flex items-center gap-2 text-xs sm:text-sm font-mono truncate ${
                  isLight ? 'text-slate-800 hover:text-indigo-700' : 'text-slate-200 hover:text-cyan-300'
                }`}
              >
                <Mail className={`w-4 h-4 shrink-0 ${isLight ? 'text-indigo-600' : 'text-indigo-300'}`} />
                <span>{profileData.email}</span>
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className={`p-2 rounded-xl transition-all border shrink-0 flex items-center gap-1.5 text-xs font-medium ${
                  isLight
                    ? 'bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border-indigo-200'
                    : 'bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 hover:text-white border-indigo-500/30'
                }`}
                title={language === 'pt' ? 'Copiar e-mail' : 'Copy email'}
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">{language === 'pt' ? 'Copiado' : 'Copied'}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>{language === 'pt' ? 'Copiar' : 'Copy'}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              href={profileData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-between p-3.5 rounded-2xl border transition-all group ${ui.inset} ${ui.cardHover}`}
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-xl border ${ui.inset}`}>
                  <Github className={`w-4 h-4 ${ui.title}`} />
                </div>
                <div>
                  <p className={`text-xs font-bold ${ui.title}`}>GitHub</p>
                  <p className={`text-[11px] font-mono ${ui.muted}`}>@GuiCezaF</p>
                </div>
              </div>
              <span className={`text-xs font-mono ${isLight ? 'text-indigo-600' : 'text-indigo-400'}`}>&rarr;</span>
            </a>

            <a
              href={profileData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-between p-3.5 rounded-2xl border transition-all group ${ui.inset} ${ui.cardHover}`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`p-2 rounded-xl border ${
                    isLight ? 'bg-cyan-50 border-cyan-200' : 'bg-cyan-950/60 border-cyan-800/50'
                  }`}
                >
                  <Linkedin className={`w-4 h-4 ${isLight ? 'text-cyan-600' : 'text-cyan-400'}`} />
                </div>
                <div>
                  <p className={`text-xs font-bold ${ui.title}`}>LinkedIn</p>
                  <p className={`text-[11px] font-mono ${ui.muted}`}>guilherme-cezarino-felipe</p>
                </div>
              </div>
              <span className={`text-xs font-mono ${isLight ? 'text-cyan-700' : 'text-cyan-400'}`}>&rarr;</span>
            </a>
          </div>

          <div className={`flex items-center gap-3 p-3.5 rounded-2xl border text-xs font-mono ${ui.inset} ${ui.muted}`}>
            <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
            <span>{t.contact.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
