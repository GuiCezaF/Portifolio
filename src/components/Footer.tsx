import React from 'react';
import {
  ChevronUp,
  Github,
  Linkedin,
} from 'lucide-react';
import { useI18n } from '../i18n/context';
import { profileData } from '../data/profile';
import { useGithubAvatar } from '../lib/githubAvatar';

export const Footer: React.FC = () => {
  const { t, theme, language } = useI18n();
  const isLight = theme === 'light';
  const avatarUrl = useGithubAvatar();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navLinks = [
    { label: t.nav.home, href: '#hero' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.experience, href: '#experience' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.skills, href: '#skills' },
    { label: t.nav.terminal, href: '#terminal' },
    { label: t.nav.contact, href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className={`relative border-t py-12 backdrop-blur-xl ${
      isLight
        ? 'border-slate-200 bg-white text-slate-500'
        : 'border-slate-800/80 bg-slate-950/90 text-slate-400'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-8 border-b ${
          isLight ? 'border-slate-200' : 'border-slate-800/70'
        }`}>
          {/* Brand Col */}
          <div className="md:col-span-4 space-y-3">
            <div className="flex items-center gap-3">
              <img
                src={avatarUrl}
                alt=""
                referrerPolicy="no-referrer"
                className={`w-10 h-10 rounded-full object-cover object-top ring-2 ${
                  isLight ? 'ring-slate-200' : 'ring-slate-700'
                }`}
              />
              <span className={`font-bold text-base font-display ${isLight ? 'text-slate-900' : 'text-white'}`}>
                Guilherme Cezarino Felipe
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              {language === 'pt'
                ? 'Desenvolvedor full stack  • Sumaré, São Paulo, Brasil'
                : `${profileData.headline} • ${profileData.location}`}
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`transition-colors ${isLight ? 'text-slate-500 hover:text-slate-900' : 'text-slate-400 hover:text-white'}`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Social Links & Back to Top */}
          <div className="md:col-span-3 flex items-center justify-start md:justify-end gap-3">
            <a
              href={profileData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2.5 rounded-xl border transition-colors ${
                isLight
                  ? 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-600 hover:text-slate-900'
                  : 'bg-slate-900 hover:bg-slate-800 border-slate-800 text-slate-300 hover:text-white'
              }`}
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profileData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2.5 rounded-xl border transition-colors ${
                isLight
                  ? 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-600 hover:text-cyan-700'
                  : 'bg-slate-900 hover:bg-slate-800 border-slate-800 text-slate-300 hover:text-cyan-400'
              }`}
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className={`p-2.5 rounded-xl border transition-colors flex items-center gap-1 text-xs font-medium ${
                isLight
                  ? 'bg-indigo-50 hover:bg-indigo-100 border-indigo-200 text-indigo-700'
                  : 'bg-indigo-600/20 hover:bg-indigo-600/30 border-indigo-500/30 text-indigo-300 hover:text-white'
              }`}
              title={t.footer.backToTop}
              aria-label={t.footer.backToTop}
            >
              <ChevronUp className="w-4 h-4" />
              <span className="hidden sm:inline">{t.footer.backToTop}</span>
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} Guilherme Cezarino Felipe. {t.footer.rights}
          </div>

          <div className="flex items-center gap-2 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{t.footer.statusAvailable}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
