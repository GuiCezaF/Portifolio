import React, { createContext, useContext, useState, useEffect, useMemo, ReactNode } from 'react';
import { Language, Theme, Translations, Project, Experience } from '../types';
import { translations, getTranslations } from '../data/translations';
import { getProjects } from '../data/projects';
import { getExperiences } from '../data/experience';

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: Translations;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  projects: Project[];
  experiences: Experience[];
}

const STORAGE_LANG_KEY = 'portfolio_lang';
const STORAGE_THEME_KEY = 'portfolio_theme';

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const I18nProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_LANG_KEY) as Language | null;
      if (saved === 'pt' || saved === 'en') {
        return saved;
      }
      const navLang = navigator.language.toLowerCase();
      if (navLang.startsWith('pt')) return 'pt';
    }
    return 'pt';
  });

  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_THEME_KEY) as Theme | null;
      if (saved === 'dark' || saved === 'light' || saved === 'cyber') {
        return saved;
      }
    }
    return 'dark';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_LANG_KEY, lang);
      document.documentElement.lang = lang;
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  const applyThemeClass = (next: Theme) => {
    document.documentElement.classList.remove('dark', 'light', 'cyber');
    document.documentElement.classList.add(next);
    document.documentElement.dataset.theme = next;
    const themeColor = next === 'light' ? '#f1f5f9' : next === 'cyber' ? '#020617' : '#090d16';
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', themeColor);
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_THEME_KEY, newTheme);
      applyThemeClass(newTheme);
    }
  };

  const toggleTheme = () => {
    const nextTheme: Record<Theme, Theme> = {
      dark: 'light',
      light: 'cyber',
      cyber: 'dark',
    };
    setTheme(nextTheme[theme] || 'dark');
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.lang = language;
      applyThemeClass(theme);
    }
  }, [language, theme]);

  const t = useMemo(() => getTranslations(language), [language]);
  const projects = useMemo(() => getProjects(language), [language]);
  const experiences = useMemo(() => getExperiences(language), [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage,
      t,
      theme,
      setTheme,
      toggleTheme,
      projects,
      experiences,
    }),
    [language, t, theme, projects, experiences]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export function useI18n(): I18nContextType {
  const context = useContext(I18nContext);
  if (!context) {
    // Fallback if rendered outside provider
    return {
      language: 'pt',
      setLanguage: () => {},
      toggleLanguage: () => {},
      t: translations.pt,
      theme: 'dark',
      setTheme: () => {},
      toggleTheme: () => {},
      projects: getProjects('pt'),
      experiences: getExperiences('pt'),
    };
  }
  return context;
}

export const useLanguage = useI18n;
