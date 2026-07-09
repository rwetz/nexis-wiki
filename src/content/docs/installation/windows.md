---
title: Windows & WSL
description: Install Nexis on Windows via the NSIS or MSI installer, with first-class WSL support.
---

Nexis provides an `NSIS` installer and an `MSI` package for Windows, and treats
**WSL** as a first-class workspace environment.

## Install

Download either installer from the [releases page](https://github.com/rwetz/Nexis/releases):

- **NSIS** (`Nexis_*_x64-setup.exe`) — the standard installer.
- **MSI** (`Nexis_*_x64_en-US.msi`) — for managed / enterprise deployment.

Run it and follow the prompts.

:::caution[SmartScreen warning]
Nexis is not yet code-signed, so Windows SmartScreen may warn on first launch.
Click **More info → Run anyway** to proceed.
:::

## Shell detection

On Windows, Nexis picks a shell in this order:

1. `pwsh.exe` (PowerShell 7+)
2. `powershell.exe` (Windows PowerShell)
3. `cmd.exe`

## WSL

WSL is a first-class environment in Nexis:

- Open a terminal tab directly into a WSL distro.
- Work on files inside the WSL filesystem with the editor and explorer.
- The **Windows Explorer context menu** integration lets you right-click a
  folder or drive and **Open in Nexis**.

Having trouble? See [Troubleshooting](/troubleshooting/).
