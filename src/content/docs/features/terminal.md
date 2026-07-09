---
title: Terminal
description: The Nexis terminal — native PTY, WebGL rendering, split panes, shell integration, and sharing.
sidebar:
  order: 1
---

The terminal is the heart of Nexis: a WebGL-rendered [xterm.js](https://xtermjs.org)
front end driven by a **native PTY backend written in Rust**. It works with
zsh, bash, pwsh, fish, and cmd.

## Tabs and panes

- **Unlimited tabs** and **split panes** — split right or down and tile as many
  panes as you like.
- Tab and pane layout **persists across restarts**.
- Jump between tabs by number, cycle panes, and close panes with keyboard
  shortcuts (see [keybindings](/configuration/keybindings/)).

## Shell integration

Nexis speaks the standard terminal escape sequences so the UI stays in sync with
what's running:

- **OSC 7** — current working directory tracking.
- **OSC 133** — prompt markers, for command-aware navigation.
- **OSC 0 / 2** — tab titles. Shells and programs (vim, ssh, htop) update the
  tab label automatically.

## Search and history

- **Inline search** (find in terminal) with match highlighting.
- **Shell history search** — a fuzzy overlay over `~/.zsh_history`,
  `~/.bash_history`, fish history, or PSReadLine. It **inserts** the command
  without auto-executing it.
- **Inline AI command suggestions** — history-aware completions that **never**
  auto-execute.

## Rendering and interaction

- WebGL rendering with **true-color (24-bit)** support.
- **Clickable links** and **configurable cursor** (bar / block / underline, with
  optional blink).
- Configurable font family, font size, letter spacing, and scrollback buffer.
- Drag files into the terminal to insert them as quoted paths — or as AI context
  attachments.

## Private terminals

A **private terminal** is walled off from the AI: its scrollback can't be read by
the assistant. Private terminals are marked with an incognito indicator.

## Recording and sharing

- **Terminal recording** — capture a session to a file for playback or sharing.
- **Live terminal sharing** — serve a read-only live view of your terminal (or
  your AI conversation) to any device on your LAN. Output is pushed over
  WebSocket the instant it arrives, with an SSE fallback.

## WSL

On Windows, WSL is a first-class workspace environment — open a terminal tab
straight into a distro. See [Windows & WSL](/installation/windows/).
