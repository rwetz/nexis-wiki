---
title: Themes & appearance
description: Built-in themes, custom .nexis-theme files, background images, and icon themes.
sidebar:
  order: 6
---

Nexis is highly themeable — from the editor palette down to the terminal colors
and the file-explorer icons.

## Built-in themes

Nexis ships **22 built-in themes**, all with light and dark variants:

- **17 Nexis palettes:** Nexis Default, Halcyon, Meridian, Cinder, Aurelian,
  Thicket, Vermillion, Hotwire, Tangerine, Sulfur, Acid, Absinthe, Cyanotype,
  Glacier, Ultramarine, Ultraviolet, and Synthwave.
- **5 credited community palettes:** Tokyo Night, Catppuccin, Nord, Gruvbox,
  and Rosé Pine.

The Nexis palettes share one generated OKLCH lightness ramp and build-enforced
contrast floors. File-tree icons retint onto the active terminal palette, while
brand-logo fallbacks keep their original colors.

Nexis Default also has an optional rainbow hover accent under **Settings →
Themes**. It colors eligible icon/text marks and the live AI aurora, not whole
button surfaces.

## Custom themes

- Create, import, and delete **`.nexis-theme`** files.
- A **live swatch preview** shows colors as you pick them.
- The **theme editor** opens any `.nexis-theme` directly in the code editor, so a
  theme is just a file you can version and share.

## Backgrounds

Set a **background image** with adjustable **opacity** (0–100%) and **blur**
(0–64 px) for a personalized workspace.

## Icon themes

The file explorer supports **Catppuccin** and **Material** icon themes, with a
`vscode-icons` fallback so ecosystem folders (NuGet, Maven, Kotlin, iOS, Flutter,
MongoDB, and more) still get purpose-built art.

## Configuring

Themes are set under **Settings → Themes**. See
[configuration → themes](/configuration/themes/) for details on authoring your
own.
