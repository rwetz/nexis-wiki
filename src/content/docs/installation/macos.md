---
title: macOS
description: Install Nexis on macOS from the .dmg, on Apple Silicon or Intel.
---

Nexis ships a universal `.dmg` with builds for both Apple Silicon (M-series) and
Intel Macs.

## Install

1. Download the `.dmg` from the [releases page](https://github.com/rwetz/Nexis/releases).
2. Open it and drag **Nexis** into your **Applications** folder.
3. Launch it from Applications or Spotlight.

## Gatekeeper

Nexis is not yet notarized with an Apple Developer certificate, so the first
launch may be blocked by Gatekeeper. If macOS refuses to open it:

1. Right-click (or Control-click) **Nexis** in Applications and choose **Open**.
2. Confirm **Open** in the dialog.

You only need to do this once.

## Shell integration

Nexis picks up your login shell automatically (zsh by default on modern macOS).
It supports OSC 7 cwd tracking and OSC 133 prompt markers, so features like
directory-aware tabs and command navigation work out of the box.

Trouble launching? See [Troubleshooting](/troubleshooting/).
