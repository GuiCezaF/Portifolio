import React, { useState, useEffect } from 'react';
import {
  Moon,
  Sun,
  Sparkles,
  Menu,
  X,
  Github,
  Terminal,
  Code2,
  User,
  Briefcase,
  Layers,
  Send,
  Home,
} from 'lucide-react';
import { useI18n } from '../i18n/context';
import { useGithubAvatar } from '../lib/githubAvatar';

interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: React.ReactNode;
}

export const Navbar: React.FC = () => {
  const { language, toggleLanguage, theme, toggleTheme, t } = useI18n();
  const avatarUrl = useGithubAvatar();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems: NavItem[] = [
    { id: 'hero', label: t.nav.home, href: '#hero', icon: <Home className="w-4 h-4" /> },
    { id: 'about', label: t.nav.about, href: '#about', icon: <User className="w-4 h-4" /> },
    { id: 'experience', label: t.nav.experience, href: '#experience', icon: <Briefcase className="w-4 h-4" /> },
    { id: 'projects', label: t.nav.projects, href: '#projects', icon: <Code2 className="w-4 h-4" /> },
    { id: 'skills', label: t.nav.skills, href: '#skills', icon: <Layers className="w-4 h-4" /> },
    { id: 'terminal', label: t.nav.terminal, href: '#terminal', icon: <Terminal className="w-4 h-4" /> },
    { id: 'contact', label: t.nav.contact, href: '#contact', icon: <Send className="w-4 h-4" /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'terminal', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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

  const isLight = theme === 'light';

  const getThemeIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="w-4 h-4 text-amber-500" />;
      case 'cyber':
        return <Sparkles className="w-4 h-4 text-cyan-400" />;
      case 'dark':
      default:
        return <Moon className="w-4 h-4 text-indigo-300" />;
    }
  };

  const getThemeLabel = () => {
    if (language === 'pt') {
      switch (theme) {
        case 'light':
          return 'Claro';
        case 'cyber':
          return 'Cyber';
        default:
          return 'Escuro';
      }
    }
    switch (theme) {
      case 'light':
        return 'Light';
      case 'cyber':
        return 'Cyber';
      default:
        return 'Dark';
    }
  };

  return (
    <header
      className={`site-header fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isLight
          ? `bg-white/90 border-b border-slate-200/90 backdrop-blur-xl ${isScrolled ? 'shadow-sm py-2.5' : 'py-3'}`
          : `border-b backdrop-blur-xl ${
              isScrolled
                ? 'bg-slate-950/90 border-slate-800/80 shadow-lg py-2.5'
                : 'bg-slate-950/70 border-slate-800/40 py-3'
            }`
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="group flex items-center gap-2.5 shrink-0 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          aria-label="Guilherme Cezarino Felipe - Home"
        >
          <img
            src={avatarUrl}
            alt=""
            referrerPolicy="no-referrer"
            className={`w-10 h-10 rounded-full object-cover ring-2 ${
              isLight ? 'ring-slate-200' : 'ring-slate-700'
            }`}
          />
          <div className="hidden sm:flex flex-col leading-tight">
            <span className={`font-semibold text-[13px] tracking-tight ${isLight ? 'text-slate-900' : 'text-slate-100'}`}>
              Guilherme Cezarino Felipe
            </span>
            <span className={`text-[11px] font-mono ${isLight ? 'text-cyan-700' : 'text-cyan-400'}`}>
              Full Stack 
            </span>
          </div>
        </a>

        <nav
          className={`hidden lg:flex items-center gap-0.5 p-1 rounded-full border ${
            isLight
              ? 'bg-slate-100/90 border-slate-200'
              : 'bg-slate-900/70 border-slate-700/80'
          }`}
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-full text-[11px] font-medium whitespace-nowrap transition-colors ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-sm'
                    : isLight
                      ? 'text-slate-600 hover:text-slate-900 hover:bg-white'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={toggleLanguage}
            title={t.nav.changeLang}
            className={`flex items-center gap-1 px-2.5 py-1.5 text-xs font-mono font-semibold rounded-full border transition-colors ${
              isLight
                ? 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                : 'bg-slate-900/80 border-slate-700 text-slate-300 hover:border-slate-500'
            }`}
            aria-label="Toggle language"
          >
            <span className={language === 'pt' ? (isLight ? 'text-cyan-700 font-bold' : 'text-cyan-400 font-bold') : ''}>PT</span>
            <span className={isLight ? 'text-slate-300' : 'text-slate-600'}>/</span>
            <span className={language === 'en' ? (isLight ? 'text-indigo-700 font-bold' : 'text-indigo-400 font-bold') : ''}>EN</span>
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            title={`${t.nav.changeTheme}: ${getThemeLabel()}`}
            className={`p-2 rounded-full border transition-colors ${
              isLight
                ? 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                : 'bg-slate-900/80 border-slate-700 text-slate-300 hover:border-slate-500'
            }`}
            aria-label="Toggle theme"
          >
            {getThemeIcon()}
          </button>

          <a
            href="https://github.com/GuiCezaF"
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
              isLight
                ? 'bg-indigo-50 border-indigo-200 text-indigo-700 hover:bg-indigo-100'
                : 'bg-indigo-600/15 border-indigo-500/30 text-indigo-300 hover:bg-indigo-600/25'
            }`}
            aria-label="GitHub Profile"
          >
            <Github className="w-3.5 h-3.5" />
            <span className="font-mono">GuiCezaF</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-full border ${
              isLight
                ? 'bg-white border-slate-200 text-slate-700'
                : 'bg-slate-900/80 border-slate-700 text-slate-300'
            }`}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className={`lg:hidden border-b px-4 pt-3 pb-6 ${
          isLight ? 'bg-white border-slate-200' : 'bg-slate-950/95 border-slate-800/90'
        }`}>
          <div className="flex flex-col gap-1.5">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium ${
                    isActive
                      ? isLight
                        ? 'bg-indigo-50 text-indigo-700 border border-indigo-200 font-semibold'
                        : 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 font-semibold'
                      : isLight
                        ? 'text-slate-700 hover:bg-slate-100'
                        : 'text-slate-300 hover:bg-slate-900/80 hover:text-white'
                  }`}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </a>
              );
            })}

            <div className="pt-3 mt-2 border-t border-slate-800/80 flex items-center justify-between">
              <a
                href="https://github.com/GuiCezaF"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-mono text-indigo-300 hover:text-indigo-200 px-3 py-2 rounded-lg bg-indigo-950/40 border border-indigo-800/50"
              >
                <Github className="w-4 h-4" />
                <span>github.com/GuiCezaF</span>
              </a>

              <div className="text-[11px] text-emerald-400 flex items-center gap-1.5 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Available for hire</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
