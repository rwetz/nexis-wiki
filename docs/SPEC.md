---
type: project
status: idea         # idea → planning → building → shipped → archived
priority: medium
started: 2026-07-07
tags:
  - project
  - domain/web
  - domain/docs
  - nexis
stack: [astro, starlight, tailwind, react, typescript, pagefind, lunaria, bun]
repo:
---

# Nexis Wiki

> [!abstract] One-liner
> A documentation wiki for the **Nexis ecosystem** that clones the exact frontend architecture of the [CachyOS wiki](https://wiki.cachyos.org/) — Astro + Starlight, same component set, same search, same i18n setup — but with my own branding, structure, and content.

## 🎯 Problem & Motivation

- **Problem:** Nexis needs a real docs/wiki site. Rather than pick a stack from scratch, I want to copy a proven one I already like the look and feel of.
- **Why me / why now:** The CachyOS wiki is a clean, fast, well-organized docs site — and it's **fully open source on a permissive stack**, so I can legitimately replicate its architecture instead of reinventing it. Good portfolio piece too (modern SSG, i18n, component islands, CI deploy).
- **Who it's for:** Nexis users + me. Single maintainer to start.

## 🔍 What CachyOS's Wiki Actually Is (recon — 2026-07-07)

It is **not** MkDocs/Docusaurus/VuePress. Confirmed from their public repo [`CachyOS/wiki`](https://github.com/CachyOS/wiki) `package.json`:

| Piece | What it is | Role |
| --- | --- | --- |
| **[Astro](https://astro.build/)** | Static-site framework (islands architecture) | Core build tool; ships zero JS by default |
| **[Starlight](https://starlight.astro.build/)** (`@astrojs/starlight`) | Astro's official **docs theme/framework** | Provides the *entire* wiki UI: sidebar, nav, TOC, search, dark mode, prev/next, edit links |
| **Tailwind** (`@astrojs/starlight-tailwind`, `@tailwindcss/vite`) | Utility CSS + Starlight-Tailwind bridge | Theming / custom styling |
| **React** (`@astrojs/react`, `react`, `react-dom`) | Interactive islands | Custom widgets (e.g. `react-image-previewer` for image zoom) |
| **Pagefind** | Static full-text search (bundled with Starlight) | The search box — indexes at build, no server needed |
| **Lunaria** (`@lunariajs/core`, `@lunariajs/starlight`) | Translation **status tracker** | Shows which locales are out-of-date vs. the source language |
| **starlight-kbd** | Starlight plugin | Renders `<kbd>` keyboard shortcuts nicely |
| **Fontsource** | `Inter` (body) + `JetBrains Mono` (code) variable fonts | Self-hosted fonts |
| **sharp** | Image optimization at build | Fast, responsive images |
| **Bun** | Package manager / runtime | `bun install`, `bun dev` |
| TypeScript, ESLint, Prettier | Tooling | Types + lint + format |

**Content model:** Markdown/MDX files live in `src/content/docs/<locale>/...` as an Astro *content collection*. Site config (title, logo, sidebar tree, social links, locales) lives in `astro.config.mjs` under the Starlight integration. That's the whole architecture — **copy that repo's shape and you've copied the wiki.**

> [!tip] Shortcut
> The cleanest way to "copy everything" is to **fork `CachyOS/wiki` (or start `npm create astro@latest -- --template starlight`), keep the config/component structure, and swap in Nexis branding + content.** You are reusing an open-source framework the way it's meant to be reused.

> [!warning] What to copy vs. not
> ✅ **Copy freely:** the stack, the file/folder architecture, `astro.config.mjs` structure, component choices, Tailwind theme setup, i18n + Lunaria wiring, CI/deploy config. This is all MIT-licensed framework scaffolding.
> ⚠️ **Write your own:** the actual article *text*. CachyOS's page content is theirs (and is about CachyOS, not Nexis, so you wouldn't want it anyway). Clone the skeleton, author original docs.

## ✅ Goals & Non-Goals

**Goals**
- [ ] A Nexis-branded docs site that is architecturally a 1:1 clone of the CachyOS wiki stack.
- [ ] Same UX components: left sidebar nav, right-hand TOC, instant search, dark/light toggle, mobile drawer, prev/next, "edit this page", code blocks with copy.
- [ ] Markdown/MDX authoring, i18n-ready (even if English-only at first), static deploy on CI.

**Non-Goals (v1)**
- User accounts / editing in-browser (it's a git-backed static site, like CachyOS's).
- A backend/database (Pagefind = static search, no server).
- Translating everything on day one — wire up i18n + Lunaria but ship English first.

## 🧩 Core Features (MVP)

1. **Starlight scaffold** — Astro + Starlight project building and serving locally with the default docs UI.
2. **Nexis branding** — logo, site title, color theme (Tailwind + Starlight CSS vars), fonts (Inter + JetBrains Mono), favicon, social/footer links.
3. **Information architecture** — sidebar tree + landing page mirroring how CachyOS organizes sections (Basics / Installation / Features / Configuration / etc.), populated with Nexis content stubs.
4. **Search + niceties** — Pagefind search working, `starlight-kbd`, image previewer island, code copy, dark mode.
5. **Deploy** — static build shipped via CI to a host (Cloudflare Pages / Netlify / GitHub Pages / VPS).

## 🛠️ Tech Stack

| Layer | Choice | Notes |
| --- | --- | --- |
| Framework | **Astro** | Islands SSG; matches CachyOS exactly |
| Docs theme | **Starlight** (`@astrojs/starlight`) | The whole wiki UI comes from here |
| Styling | **Tailwind** + `@astrojs/starlight-tailwind` | Theme overrides on top of Starlight |
| Interactivity | **React** islands | For custom widgets like `react-image-previewer` |
| Search | **Pagefind** | Built into Starlight; static, no server |
| i18n | Starlight locales + **Lunaria** | Translation status dashboard |
| Fonts | Fontsource **Inter** + **JetBrains Mono** | Self-hosted variable fonts |
| Images | **sharp** | Build-time optimization |
| Package mgr | **Bun** (or npm/pnpm) | CachyOS uses Bun; any works |
| Tooling | TypeScript · ESLint · Prettier | Same as source repo |
| Hosting | Cloudflare Pages / Netlify / GH Pages / VPS | Any static host; pick one in M4 |

## 🗺️ Milestones

- [ ] **M1 — Walking skeleton:** `npm create astro@latest -- --template starlight` (or fork `CachyOS/wiki`); it builds and serves the stock docs UI locally.
- [ ] **M2 — Reskin to Nexis:** logo, title, colors, fonts, favicon, footer/social; add Tailwind + `starlight-tailwind`; confirm dark/light theming.
- [ ] **M3 — Structure + content:** define the sidebar tree in `astro.config.mjs`, build the landing page, author the first real Nexis pages in `src/content/docs/`, wire `react-image-previewer` + `starlight-kbd`.
- [ ] **M4 — i18n + deploy:** add locale config + Lunaria (English source first); set up CI to build and deploy static output to the chosen host with a custom domain.

## 🤖 Claude Code Brief

> [!note] Paste this section into Claude Code to start building.

**Objective:** Build a documentation wiki for the **Nexis** ecosystem that replicates the CachyOS wiki's frontend architecture exactly. Same stack: **Astro + Starlight**, Tailwind theming, React islands, Pagefind search, Lunaria i18n status. Clone the *structure and components*; author original Nexis content.

**Reference:** The CachyOS wiki is open source at `github.com/CachyOS/wiki`. It is an **Astro Starlight** site with content collections in `src/content/docs/<locale>/`, config in `astro.config.mjs`, `@astrojs/starlight-tailwind` for styling, React for widgets (`react-image-previewer`), `starlight-kbd`, Fontsource `Inter` + `JetBrains Mono`, and `@lunariajs/starlight` for translation tracking. Mirror this.

**Stack & constraints:**
- Astro + `@astrojs/starlight`. Tailwind via `@astrojs/starlight-tailwind` + `@tailwindcss/vite`. React via `@astrojs/react`. TypeScript, ESLint, Prettier.
- Static output only — no backend, no DB. Search is Pagefind (comes with Starlight).
- Reuse the open-source framework scaffolding; do **not** copy CachyOS's article text — generate Nexis-specific placeholder content instead.

**Build order (verify each before moving on):**
1. **Scaffold** — create the Starlight project (template or fork), install deps, confirm `dev` serves the default docs UI and `build` produces static output.
2. **Integrations** — add `@astrojs/react`, `@astrojs/starlight-tailwind` + Tailwind, `starlight-kbd`, and the Fontsource fonts; confirm the build stays green.
3. **Branding** — set `title`, `logo`, favicon, social links, and a Nexis color theme via Starlight CSS custom properties + Tailwind; verify dark/light modes.
4. **Structure** — define the sidebar in `astro.config.mjs` (sections mirroring CachyOS: Basics, Installation, Features, Configuration, Troubleshooting, FAQ), build the landing/splash page, and stub `src/content/docs/` pages with original Nexis content.
5. **Widgets** — add a React image-previewer island and any interactive components; confirm they hydrate as islands only where used.
6. **Search + i18n** — confirm Pagefind search works on the built site; add locale config (English source) and wire `@lunariajs/starlight` for translation status.
7. **Deploy** — add CI (GitHub Actions) that builds and deploys the static site to the chosen host; set up the custom domain.

**Definition of done for v1:** A Nexis-branded Starlight site that looks and behaves like the CachyOS wiki (sidebar, TOC, instant search, dark mode, mobile drawer, prev/next, edit links, code copy), authored from Markdown/MDX, i18n-ready, building in CI and deployed to a live URL.

**Open questions for me to answer first:**
- **What is Nexis?** — the ecosystem's scope so the sidebar sections and landing copy make sense.
- **Fork or fresh?** — fork `CachyOS/wiki` for a near-identical starting point, or `create astro --template starlight` for a clean base? (Fork = closest clone; fresh = less cleanup.)
- **Brand kit** — logo, primary/accent colors, any existing Nexis visual identity?
- **Host + domain** — Cloudflare Pages / Netlify / GitHub Pages / VPS, and what domain?
- **Languages** — English-only at launch, or seed specific locales now?

## 📓 Log & Decisions

- `2026-07-07` — Recon done: CachyOS wiki confirmed as **Astro + Starlight** (not MkDocs), with Tailwind, React islands, Pagefind, Lunaria, `starlight-kbd`, Fontsource fonts, Bun. Source repo `CachyOS/wiki` is public. Plan = clone the open-source architecture, author original Nexis content. Note created and scoped.

## 🔗 Related
- [Astro Starlight docs](https://starlight.astro.build/) · [CachyOS/wiki repo](https://github.com/CachyOS/wiki) · [Lunaria](https://lunaria.dev/)
- [[Idea Backlog]] · [[Project Types Catalog]] · [[Home]]
