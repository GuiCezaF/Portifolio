import React, { useState, useRef, useEffect } from 'react';
import {
  Terminal as TerminalIcon,
  CornerDownLeft,
  Copy,
  Check,
  RotateCcw,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useI18n } from '../i18n/context';

interface HistoryItem {
  command: string;
  output: string;
  isError?: boolean;
  isMatrix?: boolean;
}

export const AiTerminal: React.FC = () => {
  const { t, language, toggleLanguage, setLanguage, theme, setTheme, toggleTheme } = useI18n();
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: 'welcome',
      output: t.terminal.welcomeMessage,
    },
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyPointer, setHistoryPointer] = useState<number>(-1);
  const [isCopied, setIsCopied] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const terminalBodyRef = useRef<HTMLDivElement>(null);

  const availableCommands = [
    'help',
    'about',
    'skills',
    'projects',
    'contact',
    'hire',
    'stats',
    'theme',
    'lang',
    'matrix',
    'confetti',
    'clear',
    'sudo',
  ];

  // Auto-scroll terminal on new history
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#6366f1', '#06b6d4', '#8b5cf6', '#10b981'],
      });
    } catch {
      // ignore
    }
  };

  const handleCommand = (rawCommand: string) => {
    const trimmed = rawCommand.trim();
    if (!trimmed) return;

    const parts = trimmed.split(' ');
    const cmd = parts[0].toLowerCase();
    const arg = parts[1]?.toLowerCase();

    // Add to navigation history
    setCommandHistory((prev) => [...prev, trimmed]);
    setHistoryPointer(-1);

    if (cmd === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    let output = '';
    let isError = false;
    let isMatrix = false;

    switch (cmd) {
      case 'help':
        output = t.terminal.commandOutputs.help;
        break;

      case 'about':
        output = t.terminal.commandOutputs.about;
        break;

      case 'skills':
        output = t.terminal.commandOutputs.skills;
        break;

      case 'projects':
        output = t.terminal.commandOutputs.projects;
        break;

      case 'contact':
        output = t.terminal.commandOutputs.contact;
        break;

      case 'hire':
        output = t.terminal.commandOutputs.hire;
        triggerConfetti();
        break;

      case 'stats':
        output = t.terminal.commandOutputs.stats;
        break;

      case 'sudo':
        output = t.terminal.commandOutputs.sudo;
        isError = true;
        break;

      case 'matrix':
        output = `01000111 01110101 01101001 01101100 01101000 01100101 01110010 01101101 01100101 00100000 01000011 01100101 01111010 01100001 01110010\n` +
          `[SYSTEM]: Neural link established with mainframe.\n` +
          `Wake up, visitor... Follow the white rabbit. 🐇`;
        isMatrix = true;
        break;

      case 'confetti':
        output = '🎉 Launching particle fireworks! Celebrating engineering excellence!';
        triggerConfetti();
        break;

      case 'theme':
        if (arg === 'dark' || arg === 'light' || arg === 'cyber') {
          setTheme(arg);
          output = language === 'pt' ? `Tema alterado para "${arg}".` : `Theme switched to "${arg}".`;
        } else {
          toggleTheme();
          output = language === 'pt' ? `Tema trocado. Tema atual: ${theme}.` : `Theme cycled. Current active theme: ${theme}.`;
        }
        break;

      case 'lang':
        if (arg === 'pt' || arg === 'en') {
          setLanguage(arg);
          output = language === 'pt' ? `Idioma alterado para ${arg.toUpperCase()}.` : `Language changed to ${arg.toUpperCase()}.`;
        } else {
          toggleLanguage();
          output = language === 'pt' ? `Idioma trocado para EN.` : `Language toggled to PT.`;
        }
        break;

      case 'easteregg':
        output = t.terminal.commandOutputs.easterEgg;
        triggerConfetti();
        break;

      default:
        output = language === 'pt'
          ? `Comando não reconhecido: "${trimmed}". Digite "help" para ver os comandos disponíveis.`
          : `Command not found: "${trimmed}". Type "help" to see available commands.`;
        isError = true;
    }

    setHistory((prev) => [
      ...prev,
      {
        command: trimmed,
        output,
        isError,
        isMatrix,
      },
    ]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextPointer =
        historyPointer === -1
          ? commandHistory.length - 1
          : Math.max(0, historyPointer - 1);
      setHistoryPointer(nextPointer);
      setInputVal(commandHistory[nextPointer]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (commandHistory.length === 0 || historyPointer === -1) return;
      const nextPointer = historyPointer + 1;
      if (nextPointer >= commandHistory.length) {
        setHistoryPointer(-1);
        setInputVal('');
      } else {
        setHistoryPointer(nextPointer);
        setInputVal(commandHistory[nextPointer]);
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const current = inputVal.trim().toLowerCase();
      if (!current) return;
      const match = availableCommands.find((cmd) => cmd.startsWith(current));
      if (match) {
        setInputVal(match);
      }
    }
  };

  const handleSuggestionClick = (cmd: string) => {
    handleCommand(cmd);
    inputRef.current?.focus();
  };

  const copyTerminalOutput = () => {
    const text = history.map((h) => `$ ${h.command}\n${h.output}`).join('\n\n');
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const clearTerminal = () => {
    setHistory([]);
  };

  const isLight = theme === 'light';

  return (
    <section id="terminal" className="py-20 md:py-28 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-mono ${
            isLight ? 'bg-emerald-50 border-emerald-200 text-emerald-700' : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-300'
          }`}>
            <TerminalIcon className={`w-3.5 h-3.5 ${isLight ? 'text-emerald-600' : 'text-emerald-400'}`} />
            <span>{language === 'pt' ? 'Linha de comando' : 'Command line'}</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight ${isLight ? 'text-slate-900' : 'text-white'}`}>
            {t.terminal.title}
          </h2>
          <p className={`text-base sm:text-lg ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
            {language === 'pt'
              ? 'Rode comandos, veja o currículo e encontre easter eggs pelo terminal.'
              : 'Run commands, look around the profile, and find easter eggs.'}
          </p>
        </div>

        {/* Quick Suggestion Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <span className="text-xs font-mono text-slate-400 mr-1 hidden sm:inline">
            {language === 'pt' ? 'Atalhos rápidos:' : 'Quick shortcuts:'}
          </span>
          {['help', 'about', 'skills', 'projects', 'hire', 'matrix', 'confetti'].map((cmd) => (
            <button
              key={cmd}
              type="button"
              onClick={() => handleSuggestionClick(cmd)}
              className={`text-xs font-mono px-3 py-1 rounded-lg border transition-all shadow-sm active:scale-95 ${
                isLight
                  ? 'bg-white hover:bg-indigo-50 border-slate-200 hover:border-indigo-300 text-slate-600 hover:text-indigo-700'
                  : 'bg-slate-900/80 hover:bg-indigo-600/30 border-slate-800 hover:border-indigo-500/40 text-slate-300 hover:text-cyan-300'
              }`}
            >
              ${' '}{cmd}
            </button>
          ))}
        </div>

        {/* Terminal Window Container */}
        <div
          className={`rounded-3xl border backdrop-blur-2xl shadow-2xl overflow-hidden font-mono text-sm group focus-within:border-indigo-500/50 transition-colors ${
            isLight ? 'border-slate-200 bg-white' : 'border-slate-800/90 bg-slate-950/90'
          }`}
          onClick={() => inputRef.current?.focus()}
        >
          {/* Terminal Window Titlebar */}
          <div className={`px-4 py-3 border-b flex items-center justify-between ${
            isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-900/90 border-slate-800/80'
          }`}>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80 border border-rose-600 cursor-pointer hover:opacity-80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-600 cursor-pointer hover:opacity-80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-600 cursor-pointer hover:opacity-80" />
              <span className="text-xs font-mono text-slate-400 ml-2 hidden sm:inline">
                guilherme@vibespace: ~ (bash)
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  copyTerminalOutput();
                }}
                className={`p-1.5 rounded-lg border transition-colors ${
                  isLight
                    ? 'bg-white hover:bg-slate-100 border-slate-200 text-slate-500 hover:text-slate-800'
                    : 'bg-slate-800/60 hover:bg-slate-800 text-slate-400 hover:text-white border-transparent'
                }`}
                title={language === 'pt' ? 'Copiar sessão' : 'Copy terminal session'}
                aria-label={language === 'pt' ? 'Copiar texto do terminal' : 'Copy terminal text'}
              >
                {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  clearTerminal();
                }}
                className={`p-1.5 rounded-lg border transition-colors ${
                  isLight
                    ? 'bg-white hover:bg-slate-100 border-slate-200 text-slate-500 hover:text-slate-800'
                    : 'bg-slate-800/60 hover:bg-slate-800 text-slate-400 hover:text-white border-transparent'
                }`}
                title={language === 'pt' ? 'Limpar tela' : 'Clear screen'}
                aria-label={language === 'pt' ? 'Limpar tela' : 'Clear screen'}
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Terminal Body */}
          <div
            ref={terminalBodyRef}
            className="p-5 max-h-[420px] min-h-[280px] overflow-y-auto space-y-4 text-xs sm:text-sm selection:bg-indigo-500/40 selection:text-white"
          >
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1.5 animate-fade-in">
                <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                  <span className="text-emerald-400">guilherme@vibespace</span>
                  <span className="text-slate-500">:</span>
                  <span className="text-indigo-400">~</span>
                  <span className="text-slate-400">$</span>
                  <span className={`font-mono ${isLight ? 'text-slate-800' : 'text-white'}`}>{item.command}</span>
                </div>
                <div
                  className={`pl-4 whitespace-pre-wrap leading-relaxed ${
                    item.isError
                      ? 'text-rose-400'
                      : item.isMatrix
                      ? 'text-emerald-400 font-mono'
                      : isLight
                      ? 'text-slate-600'
                      : 'text-slate-300'
                  }`}
                >
                  {item.output}
                </div>
              </div>
            ))}

            {/* Current Active Input Prompt Line */}
            <div className="flex items-center gap-2 text-cyan-400 font-semibold pt-1">
              <span className="text-emerald-400">guilherme@vibespace</span>
              <span className="text-slate-500">:</span>
              <span className="text-indigo-400">~</span>
              <span className="text-slate-400">$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={history.length <= 1 ? (language === 'pt' ? 'digite "help" ou "hire"...' : 'type "help" or "hire"...') : ''}
                className={`flex-1 bg-transparent font-mono text-xs sm:text-sm focus:outline-none caret-cyan-400 ${
                  isLight ? 'text-slate-800 placeholder:text-slate-400' : 'text-white placeholder:text-slate-600'
                }`}
                autoCapitalize="off"
                autoComplete="off"
                spellCheck={false}
              />
              <button
                type="button"
                onClick={() => handleCommand(inputVal)}
                className="p-1 rounded bg-indigo-600/30 hover:bg-indigo-600/50 text-indigo-300 hover:text-white transition-colors"
                title={language === 'pt' ? 'Executar comando' : 'Execute command'}
              >
                <CornerDownLeft className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Terminal Footer Hint Bar */}
          <div className={`px-5 py-2.5 border-t flex items-center justify-between text-[11px] font-mono ${
            isLight ? 'bg-slate-50 border-slate-200 text-slate-500' : 'bg-slate-950 border-slate-800/60 text-slate-400'
          }`}>
            <div className="flex items-center gap-3">
              <span>{language === 'pt' ? '[Tab] completar' : '[Tab] autocomplete'}</span>
              <span>&bull;</span>
              <span>{language === 'pt' ? '[\u2191\u2193] histórico' : '[\u2191\u2193] command history'}</span>
            </div>
            <span className="text-emerald-400">{language === 'pt' ? 'Pronto' : 'Ready'}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
