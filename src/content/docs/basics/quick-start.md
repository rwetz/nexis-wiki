---
title: Quick start
description: Install Nexis, open your first project, and connect an AI provider in a few minutes.
---

This guide gets you from download to a working AI-assisted terminal in about
five minutes.

## 1. Install

Download a build for your platform, or install from a package manager. Full
details live in the [installation guide](/installation/):

- **Linux** — `.deb`, `.rpm`, `AppImage`, or the AUR package. See [Linux](/installation/linux/).
- **macOS** — `.dmg` for Apple Silicon or Intel. See [macOS](/installation/macos/).
- **Windows** — `NSIS` or `MSI` installer, plus first-class WSL. See [Windows & WSL](/installation/windows/).

## 2. Open a project

Launch Nexis and open a folder — **File → Open Folder**, or drag a directory
onto the window. The file explorer, source control, and terminal all scope to
that workspace. A terminal tab opens in the project root automatically.

Drop a `NEXIS.md` file in the project root to give the AI persistent
**project memory** — conventions, architecture notes, or anything you want it to
remember across sessions.

## 3. Connect AI (or run offline)

Open **Settings → AI**:

- **Bring your own key** — pick a provider (OpenAI, Anthropic, Google, Groq, and
  [more](/configuration/ai-providers/)) and paste your API key. Keys are stored
  in the **OS keychain** — never on disk.
- **Run offline** — point Nexis at a local **LM Studio**, **MLX**, or **Ollama**
  endpoint. No key required, nothing leaves your machine.

Toggle the AI panel any time with the AI panel shortcut (see [keyboard
shortcuts](/configuration/keybindings/)).

## 4. Do something useful

- Type a command; select its output and click **Ask Nexis** or **Explain** to
  send it to the AI chat.
- Open a file, start typing, and accept an **inline autocomplete** suggestion.
- Ask the AI to make a change — it proposes edits as **per-hunk diffs** you
  approve or reject individually.
- Stage your changes in **Source Control** and let the AI draft a **Conventional
  Commit** message from the diff.

## Where to go next

- [Features](/features/terminal/) — a deeper tour of each capability.
- [Configuration](/configuration/settings/) — make it yours.
- [FAQ](/faq/) — common questions.
