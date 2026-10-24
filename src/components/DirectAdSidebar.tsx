import React, { useState } from 'react';
import { X } from 'lucide-react';

/**
 * Âncora para o embed do DirectAd na posição `sidebar`.
 * Posicionado de forma fixa na lateral direita da tela (centralizado verticalmente),
 * visível a partir de telas desktop (xl) para não sobrepor o conteúdo no mobile.
 */
export const DirectAdSidebar: React.FC = () => {
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) {
    return null;
  }

  return (
    <aside
      id="directad-sidebar"
      className="hidden xl:flex fixed right-3 2xl:right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-end rounded-2xl border border-slate-800/80 bg-slate-950/90 p-2 shadow-2xl backdrop-blur-md transition-all duration-300"
      aria-label="Publicidade"
    >
      <button
        type="button"
        onClick={() => setIsDismissed(true)}
        className="mb-1 p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
        title="Fechar anúncio"
        aria-label="Fechar anúncio"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </aside>
  );
};
