---
title: Installation
description: How to install Nexis on Linux, macOS, and Windows, plus building from source.
---

Nexis ships native installers for every desktop platform. Pick your OS below,
or jump to [building from source](#building-from-source).

## Downloads

Every release is published on the
[GitHub releases page](https://github.com/rwetz/Nexis/releases) with builds for:

| Platform | Formats |
| --- | --- |
| **Linux** | `.deb`, `.rpm`, `AppImage`, AUR package |
| **macOS** | `.dmg` (Apple Silicon & Intel) |
| **Windows** | `NSIS` installer, `MSI` |

Nexis includes an **auto-updater**, so once installed it can keep itself current.

## Platform guides

- [Linux](/installation/linux/) — packages, the AppImage, and the AUR.
- [macOS](/installation/macos/) — the `.dmg` and Gatekeeper notes.
- [Windows & WSL](/installation/windows/) — installers, SmartScreen, and WSL.

## Building from source

Nexis is a Tauri 2 app. To build it yourself you'll need:

- **Rust** (stable) — install via [rustup](https://rustup.rs).
- **Node 22+** and **[pnpm](https://pnpm.io) 11+**.
- Your platform's **Tauri prerequisites** — see the
  [Tauri prerequisites guide](https://tauri.app/start/prerequisites/).

```bash
pnpm install
pnpm tauri dev        # dev build with hot reload
pnpm tauri build      # production build for your platform
```

Run the test suites with:

```bash
pnpm test                     # Vitest unit tests (front end)
cd src-tauri && cargo test    # Rust unit tests (backend)
```
