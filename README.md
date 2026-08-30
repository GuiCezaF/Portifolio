# Portfólio — Guilherme Cezarino Felipe

SPA do portfólio pessoal de [Guilherme Cezarino Felipe](https://github.com/GuiCezaF), Desenvolvedor Full Stack no Grupo Escalada.

Site de página única, conteúdo estático, com seções de apresentação, experiência, projetos, habilidades, terminal interativo e contato.

## Funcionalidades

- Navegação por âncoras com scroll suave
- Idiomas português e inglês, com persistência no `localStorage`
- Tema claro e escuro
- Cards de projetos com modal de detalhes
- Terminal interativo (`help`, `about`, `projects`, `theme`, `lang`, entre outros)
- Fundo em partículas e tipografia própria (Inter, Space Grotesk, JetBrains Mono)

## Stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/) 18
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) 3

## Como rodar

Pré-requisito: Node.js 18 ou superior.

```bash
npm install
npm run dev
```

O servidor local sobe em `http://localhost:5173`.

```bash
npm run build     # geração da pasta dist/
npm run preview   # preview da build de produção
```

## Estrutura

```
src/
  components/     seções da página (Hero, About, Experience, Projects, Skills, terminal, Contact)
  data/           perfil, experiência, projetos, skills e traduções
  i18n/           contexto de idioma e tema
  lib/            helpers de tema e avatar
  types/          tipos compartilhados
```

O conteúdo editável fica em `src/data/`. Textos de interface estão em `src/data/translations.ts`.

## Contato

- GitHub: [GuiCezaF](https://github.com/GuiCezaF)
- LinkedIn: [guilherme-cezarino-felipe](https://www.linkedin.com/in/guilherme-cezarino-felipe/)
