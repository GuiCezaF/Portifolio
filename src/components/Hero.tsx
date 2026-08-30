import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight,
  Send,
  Terminal,
  Github,
  Linkedin,
  Sparkles,
  MapPin,
  CheckCircle2,
} from 'lucide-react';
import { useI18n } from '../i18n/context';
import { profileData } from '../data/profile';
import { surface } from '../lib/theme';
import { useGithubAvatar } from '../lib/githubAvatar';

export const Hero: React.FC = () => {
  const { t, language, theme } = useI18n();
  const isLight = theme === 'light';
  const ui = surface(isLight);
  const avatarUrl = useGithubAvatar();

  // Roles for typewriter / cycling effect
  const roles =
    language === 'pt'
      ? [
          'Desenvolvedor full stack júnior',
          'Grupo Escalada',
          'TypeScript & React',
          'Engenharia da Computação',
        ]
      : [
          'Junior full stack developer',
          'Grupo Escalada',
          'TypeScript & React',
          'Computer Engineering',
        ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(80);

  // Typewriter effect
  useEffect(() => {
    const currentFullText = roles[roleIndex % roles.length];

    const handleType = () => {
      if (!isDeleting) {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        if (displayText === currentFullText) {
          setTimeout(() => setIsDeleting(true), 2200);
          setTypingSpeed(40);
        } else {
          setTypingSpeed(70);
        }
      } else {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => prev + 1);
          setTypingSpeed(100);
        } else {
          setTypingSpeed(35);
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, roles, typingSpeed]);

  // 3D Tilt Card effect
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotate({
      x: -(y / (rect.height / 2)) * 8,
      y: (x / (rect.width / 2)) * 8,
    });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const techBadges = isLight
    ? [
        { name: 'TypeScript', color: 'bg-blue-50 text-blue-700 border-blue-200' },
        { name: 'React', color: 'bg-indigo-50 text-indigo-700 border-indigo-200' },
        { name: 'Node.js', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
        { name: 'Python', color: 'bg-amber-50 text-amber-800 border-amber-200' },
        { name: 'Django', color: 'bg-green-50 text-green-800 border-green-200' },
        { name: 'PostgreSQL', color: 'bg-sky-50 text-sky-700 border-sky-200' },
      ]
    : [
        { name: 'TypeScript', color: 'bg-blue-500/20 text-blue-300 border-blue-500/40' },
        { name: 'React', color: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40' },
        { name: 'Node.js', color: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' },
        { name: 'Python', color: 'bg-amber-500/20 text-amber-200 border-amber-500/40' },
        { name: 'Django', color: 'bg-green-500/20 text-green-300 border-green-500/40' },
        { name: 'PostgreSQL', color: 'bg-sky-500/20 text-sky-300 border-sky-500/40' },
      ];

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-4rem)] pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-indigo-600/20 via-cyan-500/15 to-purple-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-cyan-600/10 rounded-full blur-2xl pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-80 h-80 bg-indigo-600/10 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Hero Information */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            {/* Status Pill */}
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border backdrop-blur-md ${
              isLight ? 'bg-white border-slate-200 shadow-sm' : 'bg-slate-900/90 border-slate-800 shadow-lg shadow-emerald-500/5'
            }`}>
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className={`text-xs font-medium tracking-wide ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
                {t.hero.availability}
              </span>
            </div>

            {/* Headline with Greeting */}
            <div className="space-y-2">
              <p className={`font-mono text-sm sm:text-base font-semibold tracking-wide flex items-center gap-2 ${isLight ? 'text-cyan-700' : 'text-cyan-400'}`}>
                <Sparkles className={`w-4 h-4 inline ${isLight ? 'text-cyan-600' : 'text-cyan-400'}`} />
                {t.hero.greeting}
              </p>
              <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight leading-[1.1] ${isLight ? 'text-slate-900' : 'text-white'}`}>
                Guilherme <span className="gradient-text-primary">Cezarino Felipe</span>
              </h1>

              {/* Dynamic Typewriter Role */}
              <div className="h-9 sm:h-11 flex items-center">
                <span className={`text-xl sm:text-2xl md:text-3xl font-mono font-medium ${isLight ? 'text-slate-700' : 'text-slate-200'}`}>
                  {displayText}
                  <span className="inline-block w-2.5 h-6 ml-1 bg-cyan-400 animate-pulse align-middle" />
                </span>
              </div>
            </div>

            {/* Subtitle & Tagline */}
            <p className={`text-base sm:text-lg max-w-2xl font-sans leading-relaxed ${ui.body}`}>
              {t.hero.subtitle}
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => scrollToSection('projects')}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-medium text-sm shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>{t.hero.ctaProjects}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('contact')}
                className={`flex items-center justify-center gap-2 px-5 py-3 rounded-xl border font-medium text-sm transition-all duration-200 shadow-sm hover:scale-[1.02] active:scale-[0.98] ${
                  isLight
                    ? 'bg-white border-slate-300 text-slate-700 hover:border-slate-400'
                    : 'bg-slate-900/90 hover:bg-slate-800 border-slate-700 text-slate-200 hover:text-white'
                }`}
              >
                <Send className="w-4 h-4 text-cyan-400" />
                <span>{t.hero.ctaContact}</span>
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('terminal')}
                className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl border font-mono text-xs transition-all duration-200 shadow-sm ${
                  isLight
                    ? 'bg-white border-indigo-200 text-indigo-700 hover:border-indigo-300'
                    : 'bg-slate-950/80 hover:bg-slate-900 border-indigo-500/30 text-indigo-300 hover:text-white'
                }`}
                title={language === 'pt' ? 'Terminal interativo' : 'Interactive terminal'}
              >
                <Terminal className="w-4 h-4 text-indigo-400" />
                <span>Terminal</span>
              </button>
            </div>

            {/* Social Links & Location Info */}
            <div className={`pt-3 flex flex-wrap items-center gap-4 text-xs font-mono border-t w-full ${ui.muted} ${ui.sectionLine}`}>
              <a
                href={profileData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-1.5 transition-colors ${ui.linkHover}`}
              >
                <Github className={`w-4 h-4 ${isLight ? 'text-slate-600' : 'text-slate-300'}`} />
                <span>github/GuiCezaF</span>
              </a>
              <span className={isLight ? 'text-slate-300' : 'text-slate-700'}>•</span>
              <a
                href={profileData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-1.5 transition-colors ${ui.linkHover}`}
              >
                <Linkedin className={`w-4 h-4 ${isLight ? 'text-cyan-600' : 'text-cyan-400'}`} />
                <span>LinkedIn</span>
              </a>
              <span className={isLight ? 'text-slate-300' : 'text-slate-700'}>•</span>
              <span className={`flex items-center gap-1.5 ${ui.muted}`}>
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                <span>Sumaré, SP — Brasil</span>
              </span>
            </div>
          </div>

          {/* Right Column: Interactive 3D Card & Avatar */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
                transition: 'transform 0.15s ease-out',
              }}
              className={`relative w-full max-w-sm rounded-3xl p-6 border shadow-xl backdrop-blur-xl group transition-colors ${
                isLight
                  ? 'bg-white border-slate-200 hover:border-indigo-300'
                  : 'bg-gradient-to-b from-slate-900/90 to-slate-950/90 border-slate-800/80 hover:border-indigo-500/50'
              }`}
            >
              {/* Corner Aura */}
              <div className="absolute -top-4 -right-4 w-28 h-28 bg-indigo-500/20 rounded-full blur-xl pointer-events-none group-hover:bg-indigo-500/40 transition-colors" />
              <div className="absolute -bottom-4 -left-4 w-28 h-28 bg-cyan-500/20 rounded-full blur-xl pointer-events-none group-hover:bg-cyan-500/40 transition-colors" />

              {/* Card Header Info */}
              <div className={`flex items-center justify-between pb-4 mb-4 border-b ${ui.sectionLine}`}>
                <div className={`flex items-center gap-2 font-mono text-xs ${ui.muted}`}>
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className={`ml-1 ${isLight ? 'text-slate-400' : 'text-slate-500'}`}>profile.sys</span>
                </div>
                <span className={`text-[11px] font-mono px-2 py-0.5 rounded border ${
                  isLight
                    ? 'text-cyan-700 bg-cyan-50 border-cyan-200'
                    : 'text-cyan-400 bg-cyan-950/60 border-cyan-800/60'
                }`}>
                  v2.4-active
                </span>
              </div>

              {/* Avatar Center */}
              <div className="relative flex flex-col items-center text-center space-y-4">
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl p-1 bg-gradient-to-tr from-indigo-500 via-cyan-400 to-purple-600 shadow-xl group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={avatarUrl}
                    alt={profileData.name}
                    referrerPolicy="no-referrer"
                    className={`w-full h-full object-cover rounded-2xl ${isLight ? 'bg-slate-100' : 'bg-slate-900'}`}
                  />
                </div>

                <div>
                  <h2 className={`text-xl font-bold font-display ${ui.title}`}>
                    Guilherme Cezarino Felipe
                  </h2>
                  <p className="text-xs font-mono text-slate-400 mt-0.5">
                    Grupo Escalada &bull; UNASP
                  </p>
                </div>
              </div>

              {/* Tech Badges Grid */}
              <div className={`mt-6 pt-4 border-t ${ui.sectionLine}`}>
                <p className={`text-[11px] font-mono uppercase tracking-wider mb-2.5 ${ui.muted}`}>
                  {language === 'pt' ? 'Stack principal' : 'Main stack'}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {techBadges.map((badge) => (
                    <span
                      key={badge.name}
                      className={`text-[11px] font-mono px-2.5 py-1 rounded-lg border font-medium ${badge.color}`}
                    >
                      {badge.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Status footer pill */}
              <div className={`mt-4 pt-3 border-t flex items-center justify-between text-[11px] font-mono ${ui.sectionLine} ${ui.muted}`}>
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Grupo Escalada</span>
                </span>
                <span className="text-slate-500">Sumaré, SP</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats Banner */}
        <div className={`mt-14 pt-8 border-t grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 ${ui.sectionLine}`}>
          {t.hero.quickStats.map((stat, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-2xl border backdrop-blur-sm transition-all ${ui.card} ${ui.cardHover}`}
            >
              <p className={`text-2xl sm:text-3xl font-bold font-display gradient-text-primary ${ui.title}`}>
                {stat.value}
              </p>
              <p className={`text-xs sm:text-sm font-medium mt-1 ${ui.muted}`}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
