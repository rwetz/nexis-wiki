---
title: Settings
description: Where Nexis settings live and what you can configure.
sidebar:
  order: 1
---

Open settings with <kbd>Ctrl+,</kbd> (<kbd>Cmd+,</kbd> on macOS). Settings are
grouped into a few sections.

## General

- **Cursor style** — bar, block, or underline, with an optional blink toggle.
- **Font** — family, size, and letter spacing for the terminal and editor.
- **Scrollback buffer** size.

## AI

Choose your provider and paste an API key, or point Nexis at a local endpoint
for offline models. See [AI providers](/configuration/ai-providers/). Keys are
stored in the **OS keychain**, never on disk.

## Appearance

Pick a [theme](/configuration/themes/), set an icon theme, and optionally add a
background image with adjustable opacity and blur.

## Editor

- **Format on save** and per-language formatter selection.
- **Vim mode** toggle.
- **Word wrap** default.
- Inline autocomplete provider and model.

## Environment awareness

Nexis surfaces the state of your workspace in the status bar:

- **Container-aware** — detects `.devcontainer`, `docker-compose.yml`, and
  `Dockerfile`, and shows a status-bar pill.
- **Python environment awareness** — auto-detects virtualenvs, conda, and
  `pyproject.toml`, with quick-switch from the status bar.

## Keyboard shortcuts

Browse and reference all shortcuts with <kbd>Ctrl+K</kbd>. The full list is on
the [keyboard shortcuts](/configuration/keybindings/) page.
