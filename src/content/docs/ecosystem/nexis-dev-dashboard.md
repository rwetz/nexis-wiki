---
title: Dev Dashboard
description: A desktop dashboard showing git status across all your local repos in one glance — built in the Nexis design family with native Rust scanning.
---

**Dev Dashboard** shows git status — branch, dirty state, ahead/behind,
stashes, last commit — across **all your local repos in one glance**, instead
of `cd`-ing into each one. It's built in the Nexis design family (Tauri 2 +
React 19), with the git scanning done natively in Rust via `git2` + `rayon` —
**17 repos scan in about 20 ms**.

- **Source:** [github.com/rwetz/nexis-dev-dashboard](https://github.com/rwetz/nexis-dev-dashboard)
- **License:** Apache-2.0

## Features

- **Concurrent status scan** — every configured repo is read in parallel with
  libgit2 (no shelling out): branch, staged/unstaged/untracked/conflicted
  counts, ahead/behind vs. upstream, stash count, and last commit with
  relative time.
- **Color-coded list view** — green = clean, amber = dirty, blue/orange =
  ahead/behind, red = diverged/conflict/error.
- **Detail pane** — select a repo for its changed-file list (git short-status
  codes), stashes, and full last-commit info.
- **Shell drop** — jump from the dashboard into a terminal (`$TERMINAL`, with
  fallbacks to common emulators) at the selected repo, or open its folder.
- **Manual refresh** — re-scan without restarting; config edits are picked up
  on every scan.
- **Nexis design system** — borderless custom chrome (Linux/Windows), the
  bespoke cursor set, and OKLCH light/dark themes with a View-Transition
  crossfade.

## Keybindings

| Key | Action |
| --- | --- |
| <kbd>j</kbd> / <kbd>k</kbd> / arrows | Move selection |
| <kbd>Enter</kbd> | Toggle detail pane |
| <kbd>Esc</kbd> | Close detail pane |
| <kbd>r</kbd> | Re-scan all repos |
| <kbd>t</kbd> | Open terminal at selected repo |
| <kbd>o</kbd> | Open selected repo folder |

## Configuration

Configuration lives at `~/.config/nexis-dev-dashboard/config.toml` (created on
first run — the ⚙ button in the status bar opens it):

```toml
# Explicit repos to track (tilde is expanded). Always included.
repos = ["~/work/some-repo"]

# Auto-discover git repos under this root, up to scan_depth levels deep.
scan_root = "~/dev"
scan_depth = 3
```

Both knobs are honored and deduplicated; explicit entries are listed first.

## Where it fits in the ecosystem

Dev Dashboard is the ecosystem's answer to "which of my repos needs attention?"
It sits *upstream* of the [Nexis](/basics/what-is-nexis/) terminal in a
workflow: glance at the dashboard, spot the repo that's dirty or behind, and
hit <kbd>t</kbd> to drop into a terminal there. It's also the reference example
of the **Nexis design system** applied to a second app — its design language is
extracted directly from Nexis.

## Develop

```sh
pnpm install
pnpm tauri dev     # run with HMR
pnpm tauri build   # produce installers
```

:::note[Linux + NVIDIA]
WebKitGTK's DMA-BUF renderer crashes on NVIDIA + Wayland. When an NVIDIA driver
is detected the app forces Mesa's EGL (llvmpipe) instead — stable and
alpha-correct. Set `DEVDASH_KEEP_HW_ACCEL=1` to opt back into hardware GL.
:::
