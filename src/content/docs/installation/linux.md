---
title: Linux
description: Install Nexis on Linux via .deb, .rpm, AppImage, or the AUR.
---

Nexis provides native packages for Debian/Ubuntu and Fedora/RHEL families, a
portable AppImage, and an AUR package for Arch-based distros.

## Debian / Ubuntu (`.deb`)

Download the `.deb` from the [releases page](https://github.com/rwetz/Nexis/releases)
and install it:

```bash
sudo apt install ./nexis_*_amd64.deb
```

## Fedora / RHEL (`.rpm`)

```bash
sudo dnf install ./nexis-*.x86_64.rpm
```

## AppImage

The AppImage is a single portable file — no installation required:

```bash
chmod +x Nexis-*.AppImage
./Nexis-*.AppImage
```

:::caution[FUSE required]
The AppImage needs FUSE. If it isn't available, run with:

```bash
./Nexis-*.AppImage --appimage-extract-and-run
```
:::

## Arch (AUR)

Nexis is packaged on the AUR. Install it with your favorite helper:

```bash
yay -S nexis
```

## Troubleshooting

- **Wayland rendering glitches** — try launching with
  `WEBKIT_DISABLE_DMABUF_RENDERER=1`.
- On desktop Linux, the `.deb` / `.rpm` builds are usually smoother than the
  AppImage.

More fixes live in [Troubleshooting](/troubleshooting/).
