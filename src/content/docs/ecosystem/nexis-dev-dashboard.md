---
title: Atlas
description: The Nexis companion window for machine-wide repository status and an isometric code map.
---

**Atlas is built into Nexis.** It combines the former Dev Dashboard's repository
status view with Imagine's isometric code map, backed by one native libgit2 scan
and one shared selection. The title-bar launcher opens or focuses a dedicated
companion window.

The historical `nexis-atlas`, `nexis-imagine`, and `nexis-dev-dashboard`
repositories are archived; their histories were retained in Nexis.

## Two views, one scan

- **List:** branch, ahead/behind, staged/unstaged/untracked/conflicted counts,
  stashes, last commit, recency, and a changed-file inspector.
- **Map:** repositories become plots and source files become buildings. Height
  represents lines of code; color distinguishes languages and responds to the
  active Nexis theme.
- **Project intelligence:** measured source-line totals and density plus clearly
  labelled, playful solo-effort and coffee estimates. These are not schedules.

Selecting a repository in either view selects it in the other. Atlas can open
the repository as the main workspace, open a terminal tab there, or open its
config in the Nexis editor.

## Scope and configuration

Atlas scans the **host machine**, even when the active Nexis workspace is in
WSL. The window states this explicitly so host results cannot be mistaken for a
distro inventory.

Configuration lives at `~/.config/nexis/atlas.toml` (under `%APPDATA%\nexis` on
Windows). On first open, Nexis adopts compatible configuration from the former
standalone Atlas/Imagine/Dev Dashboard locations.

## Keyboard use

Navigation and view shortcuts are scoped to the Atlas surface. In particular,
`v` moves the selected repository between List and Map context, while refresh
and selection keys no longer bind to the entire application window.
