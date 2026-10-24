import React from 'react';

/**
 * Âncora para o embed do DirectAd na posição `sidebar`.
 * O script só injeta o criativo em `<aside>` (ou em elementos com sidebar no class/id).
 * O memo impede o React de apagar o DOM que o embed coloca dentro deste nó.
 */
export const DirectAdSidebar = React.memo(
  () => (
    <aside
      id="directad-sidebar"
      className="relative z-10 mx-auto flex w-full max-w-[300px] justify-center px-4 py-6"
      aria-label="Publicidade"
    />
  ),
  () => true,
);
