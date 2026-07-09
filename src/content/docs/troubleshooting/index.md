---
title: Troubleshooting
description: Fixes for common Nexis issues on Linux, macOS, and Windows.
---

Common issues and their fixes. If something here doesn't help, check the
[FAQ](/faq/) or open an issue on
[GitHub](https://github.com/rwetz/Nexis/issues).

## Linux

### The AppImage won't launch

The AppImage needs **FUSE**. If it isn't installed, extract and run instead:

```bash
./Nexis-*.AppImage --appimage-extract-and-run
```

### Rendering glitches on Wayland

Try disabling the DMABUF renderer:

```bash
WEBKIT_DISABLE_DMABUF_RENDERER=1 ./Nexis-*.AppImage
```

On desktop Linux the `.deb` / `.rpm` builds are generally smoother than the
AppImage.

## macOS

### "Nexis can't be opened" (Gatekeeper)

Nexis isn't notarized yet. Right-click **Nexis** in Applications → **Open**, then
confirm. You only need to do this once. See [macOS install](/installation/macos/).

## Windows

### SmartScreen blocks the installer

Nexis isn't code-signed yet, so SmartScreen may warn on first run. Click
**More info → Run anyway**. See [Windows install](/installation/windows/).

### Wrong shell opens

Nexis detects shells in the order `pwsh.exe` → `powershell.exe` → `cmd.exe`.
Install PowerShell 7+ if you want `pwsh` to be picked first.

## AI

### The AI panel can't reach my model

- **Cloud provider** — confirm the key is set under **Settings → AI** and the
  provider is selected. Keys live in the OS keychain.
- **Local model** — check that LM Studio / MLX / Ollama is running and that the
  endpoint URL in settings matches. See [AI providers](/configuration/ai-providers/).

## Crashes

Nexis wraps each pane in a **React error boundary** — if one pane's render
crashes, the rest of the UI stays live and the failed pane shows a **Try again**
reset. If crashes persist, please file an issue with the details.
