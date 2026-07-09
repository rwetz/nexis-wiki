# Nexis Wiki

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

Documentation wiki for the **[Nexis](https://github.com/rwetz/Nexis)** ecosystem —
the open-source, AI-native terminal & developer environment, plus its two ML
engines.

Live at **[wiki.nexisdev.org](https://wiki.nexisdev.org)**.

## Stack

Architecturally a clone of the [CachyOS wiki](https://wiki.cachyos.org/) stack:

- **[Astro](https://astro.build)** — islands SSG (ships zero JS by default)
- **[Starlight](https://starlight.astro.build)** — the docs theme (sidebar, TOC,
  search, dark mode, prev/next, edit links)
- **[Tailwind CSS v4](https://tailwindcss.com)** via `@astrojs/starlight-tailwind`
  + `@tailwindcss/vite`
- **[React](https://react.dev)** islands (`@astrojs/react`) — e.g. the image
  previewer in `src/components/`
- **[Pagefind](https://pagefind.app)** — static full-text search (bundled with
  Starlight; indexes at build)
- **[starlight-kbd](https://github.com/HiDeoo/starlight-kbd)** — per-OS keyboard
  shortcuts
- **Fontsource** — self-hosted **Inter** (body) + **JetBrains Mono** (code)
- **[Lunaria](https://lunaria.dev)** — translation status tracking (i18n-ready,
  English-only at launch)
- **sharp** — build-time image optimization

## Requirements

**Node 22+** (see [`.nvmrc`](.nvmrc)). Using nvm:

```bash
nvm use
```

## Commands

All run from the project root:

| Command                 | Action                                            |
| :---------------------- | :------------------------------------------------ |
| `npm install`           | Install dependencies                              |
| `npm run dev`           | Dev server at `localhost:4321`                    |
| `npm run build`         | Build the production site to `./dist/`            |
| `npm run preview`       | Preview the built site locally                    |
| `npm run lunaria:build` | Build the translation-status dashboard            |
| `npm run astro ...`     | Run Astro CLI commands (`astro add`, `astro check`) |

## Project structure

```
.
├── public/                 # favicon, CNAME (wiki.nexisdev.org), .nojekyll
├── src/
│   ├── assets/             # logo + product screenshots (optimized by sharp)
│   ├── components/         # React island (ImagePreviewer) + Astro wrapper
│   ├── content/docs/       # the wiki content (Markdown / MDX)
│   ├── styles/global.css   # Tailwind + Nexis brand theme (Starlight CSS vars)
│   └── content.config.ts
├── astro.config.mjs        # Starlight config: branding, sidebar, i18n, plugins
├── lunaria.config.json     # translation-status config
└── .github/workflows/deploy.yml   # CI → GitHub Pages
```

Add pages by dropping `.md` / `.mdx` files in `src/content/docs/`. The sidebar
tree lives in [`astro.config.mjs`](astro.config.mjs).

## Deploy

Pushes to `main` build and deploy to GitHub Pages via
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). The custom domain
is set through [`public/CNAME`](public/CNAME).

## Content note

The **stack and architecture** mirror the open-source CachyOS wiki; all **article
text is original** and specific to Nexis.
