---
title: What is Nexis?
description: An overview of Nexis — a lightweight, AI-native terminal and developer environment.
---

**Nexis** is an open-source, lightweight, cross-platform **AI-native terminal and
developer environment (ADE)**. It combines a fast native terminal, a full code
editor, a file explorer, source control, and an AI assistant into a single app
that weighs in at **under 10 MB**, stores your keys in the OS keychain, and ships
with **zero telemetry**.

It is built on **Tauri 2**, **Rust**, and **React 19**: a native PTY backend in
Rust drives multi-tab terminals, while the UI is a modern web front end rendered
in the system webview — which is how the whole app stays so small.

## What's in the box

- **Terminal** — WebGL-rendered xterm.js, unlimited tabs, split panes, a native
  PTY that works with zsh, bash, pwsh, fish, and cmd. See [Terminal](/features/terminal/).
- **Editor** — CodeMirror 6 with syntax highlighting for dozens of languages,
  AI inline autocomplete, and per-hunk AI diff approval. See [Editor](/features/editor/).
- **Language tooling** — real LSP go-to-definition/hover/completion and a DAP
  debugger with breakpoints and a variable inspector. See [Language tooling](/features/language-tooling/).
- **Git & source control** — stage, commit, branch, diff, and stash without
  leaving the app, with AI-generated commit messages. See [Git](/features/git/).
- **AI panel** — 12+ providers or fully offline via LM Studio, MLX, and Ollama;
  multi-agent workflows with explicit tool approval. See [AI panel](/features/ai-panel/).
- **ML Lab** — train small models on your own data with live charts and an
  inference playground. See [ML Suite](/ml-suite/).

## Who it's for

Developers who live in the terminal and want an editor, an AI assistant, and
source control in the same window — without a heavyweight Electron IDE, without
sending their code to a vendor, and without telemetry.

## A note on origins

Nexis began as a personal fork of [terax-ai](https://github.com/crynta/terax-ai),
an open-source AI terminal. The core PTY architecture and AI tooling are rooted
in that work; Nexis builds on top with its own direction, branding, and a much
expanded feature set. Nexis is released under the **Apache-2.0** license.

## Next steps

- [Quick start](/basics/quick-start/) — install and take your first tour.
- [Philosophy](/basics/philosophy/) — the principles behind the design.
- [Installation](/installation/) — platform-by-platform setup.
