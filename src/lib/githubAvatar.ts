import { useEffect, useState } from 'react';
import { profileData } from '../data/profile';

/** Atalho do GitHub que sempre aponta para a foto atual do perfil. */
export function githubAvatarFallback(handle: string = profileData.handle): string {
  return `https://github.com/${handle}.png`;
}

let cachedAvatarUrl: string | null = null;
let inflight: Promise<string> | null = null;

/**
 * Busca avatar_url na API do GitHub. O parâmetro v da URL muda quando a foto do perfil muda,
 * então o cache do navegador não fica preso na imagem antiga.
 * https://docs.github.com/en/rest/users/users#get-a-user
 */
export function fetchGithubAvatarUrl(handle: string = profileData.handle): Promise<string> {
  if (cachedAvatarUrl) return Promise.resolve(cachedAvatarUrl);
  if (inflight) return inflight;

  inflight = fetch(`https://api.github.com/users/${handle}`, {
    headers: { Accept: 'application/vnd.github+json' },
  })
    .then((res) => (res.ok ? res.json() : null))
    .then((data: { avatar_url?: string } | null) => {
      const url = data?.avatar_url || githubAvatarFallback(handle);
      cachedAvatarUrl = url;
      return url;
    })
    .catch(() => githubAvatarFallback(handle))
    .finally(() => {
      inflight = null;
    });

  return inflight;
}

/** Uma única requisição compartilhada entre navbar, hero e rodapé. */
export function useGithubAvatar(): string {
  const [url, setUrl] = useState(cachedAvatarUrl ?? githubAvatarFallback());

  useEffect(() => {
    let active = true;
    fetchGithubAvatarUrl().then((next) => {
      if (active) setUrl(next);
    });
    return () => {
      active = false;
    };
  }, []);

  return url;
}
