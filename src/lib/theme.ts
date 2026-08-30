/** Classes compartilhadas do modo claro vs escuro/cyber. */
export function surface(isLight: boolean) {
  return {
    title: isLight ? 'text-slate-900' : 'text-white',
    subtitle: isLight ? 'text-slate-600' : 'text-slate-400',
    body: isLight ? 'text-slate-600' : 'text-slate-300',
    muted: isLight ? 'text-slate-500' : 'text-slate-400',
    headingHover: isLight ? 'group-hover:text-indigo-700' : 'group-hover:text-indigo-200',
    card: isLight
      ? 'bg-white border-slate-200 shadow-sm'
      : 'bg-slate-900/50 border-slate-800/80',
    cardHover: isLight
      ? 'hover:bg-slate-50 hover:border-indigo-300'
      : 'hover:bg-slate-900/80 hover:border-indigo-500/40',
    inset: isLight
      ? 'bg-slate-50 border-slate-200'
      : 'bg-slate-950/60 border-slate-800',
    filterBar: isLight
      ? 'bg-white border-slate-200 shadow-sm'
      : 'bg-slate-900/80 border-slate-800',
    filterIdle: isLight
      ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
      : 'text-slate-400 hover:text-white hover:bg-slate-800/60',
    filterActive:
      'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md font-semibold',
    chip: isLight
      ? 'bg-slate-50 text-slate-700 border-slate-200'
      : 'bg-slate-950/70 text-slate-300 border-slate-800',
    sectionBadge: isLight
      ? 'bg-indigo-50 border-indigo-200 text-indigo-700'
      : 'bg-indigo-500/10 border-indigo-500/20 text-indigo-300',
    sectionLine: isLight ? 'border-slate-200' : 'border-slate-800/80',
    iconBtn: isLight
      ? 'bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900'
      : 'bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border-slate-700/50',
    linkHover: isLight ? 'hover:text-slate-900' : 'hover:text-white',
  };
}
