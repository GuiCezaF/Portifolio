import React from 'react';
import { I18nProvider, useI18n } from './i18n/context';
import {
  ParticleBackground,
  Navbar,
  Hero,
  About,
  Experience,
  Projects,
  Skills,
  AiTerminal,
  Contact,
  Footer,
} from './components';

const PortfolioContent: React.FC = () => {
  const { theme } = useI18n();
  const isLight = theme === 'light';

  return (
    <div className={`relative min-h-screen overflow-x-hidden ${
      isLight
        ? 'bg-slate-50 selection:bg-indigo-200 selection:text-indigo-900'
        : 'bg-background selection:bg-indigo-500/30 selection:text-cyan-200'
    }`}>
      {/* Interactive Canvas Background */}
      <ParticleBackground />

      {/* Fixed Glassmorphism Navbar */}
      <Navbar />

      {/* Main Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <AiTerminal />
        <Contact />
      </main>

      {/* Modern Footer */}
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <I18nProvider>
      <PortfolioContent />
    </I18nProvider>
  );
}
