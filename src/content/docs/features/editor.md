---
title: Editor
description: The Nexis code editor — CodeMirror 6, AI autocomplete, diff approval, and refactoring.
sidebar:
  order: 2
---

Nexis includes a full code editor built on **CodeMirror 6**, sharing the window
with your terminal so you can edit and run without switching apps.

## Languages and syntax

Syntax highlighting covers TS/JS, Rust, Python, HTML/CSS, JSON/JSONC, Markdown,
Go, C/C++, Java, C#, PHP, Ruby, SQL dialects, YAML, TOML, Shell/Bash, and
Dockerfile.

## AI in the editor

- **Inline autocomplete** — context-aware completions with a configurable
  provider and model.
- **Diff approval** — AI-proposed edits are shown as **per-hunk diffs**; approve
  or reject each change individually. Nothing is written until you say so.

## Refactoring and navigation

- **Semantic symbol rename** (<kbd>F2</kbd>) — LSP-powered rename across the
  project when a language server is running, so only true references change. When
  no server is available, it falls back to a word-boundary find/replace with a
  preview dialog.
- **LSP refactorings** (<kbd>Ctrl+Shift+R</kbd>) — extract function and inline
  variable via language-server code actions. Every affected open tab reloads
  instantly.
- **Breadcrumbs** — file path plus symbol crumbs at the top of the editor.
- **Symbol outline** — a file-level function/class/variable tree in the sidebar.
- **Quick file open** (<kbd>Ctrl+P</kbd>) — a fuzzy workspace picker that
  respects `.gitignore`.
- **Find and replace across the project** — workspace-wide regex search with
  per-file preview and confirmation.

## Editing niceties

- **Code minimap** with line-type coloring, click-to-scroll, and a viewport
  indicator.
- **Vim mode**.
- **Inline linting** — real-time syntax error markers (Lezer-based) for JS/TS,
  Python, Rust, Go, JSON, HTML, CSS, and Markdown.
- **Formatting** — Prettier, rustfmt, clang-format, black, gofmt, and more;
  configurable per language, on save or with <kbd>Shift+Alt+F</kbd>.
- **Code folding** — by indent, region comments, and language constructs.
- **Word wrap** — per-file and global toggles.
- **Snippet library** — tab-stop snippets scoped by language.
- **Run current file** — execute via a configured command, with output captured
  in a terminal tab.

## Viewers

- **Markdown preview** — right-click a `.md` file → **Open Preview**.
- **Jupyter notebook viewer** — right-click any `.ipynb` to open a static cell
  viewer that renders code, markdown, stream, and error outputs without a kernel.

## Live sync

The editor and explorer update in real time as files change on disk, so external
tools and the AI stay reflected instantly.
