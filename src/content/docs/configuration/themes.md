---
title: Themes
description: Authoring, importing, and managing Nexis themes.
sidebar:
  order: 3
---

Nexis themes control the editor palette, terminal colors, and overall UI accent.
For the list of built-ins and a feature overview, see
[Themes & appearance](/features/themes/).

## Switching themes

Open **Settings → Themes** and choose among 17 generated Nexis palettes and five
credited community palettes. Every built-in has light and dark variants and a
matching terminal palette. The [appearance overview](/features/themes/) lists
them all.

## Authoring a custom theme

A theme is a **`.nexis-theme`** file — a plain, shareable document you can keep
under version control.

1. In **Settings → Themes**, create a new theme or import an existing
   `.nexis-theme`.
2. Edit colors with the **live swatch preview** to see changes as you go, or
   open the file in the **theme editor** (the code editor) for direct editing.
3. Save. Import, export, and delete themes from the same panel.

## Background image

Alongside the color theme you can set a **background image** with:

- **Opacity** — 0–100%.
- **Blur** — 0–64 px.

## Icon themes

Choose **Catppuccin** or **Material** file-explorer icons, with a `vscode-icons`
fallback for ecosystem-specific folders.
