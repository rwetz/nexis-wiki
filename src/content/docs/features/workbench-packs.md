---
title: Workbench & feature packs
description: Presets, expansion packs, Atlas, Benchmark, ML Lab, Web Dev tools, and SVG Studio.
sidebar:
  order: 0
---

Nexis keeps the terminal, editor, Files, Recent Files, Source Control, AI chat,
and Agent Queue available at all times. Everything else is organized into
**feature packs**. Turning a pack off hides its surfaces; it does not uninstall
code or erase pinned items.

## Presets

Presets are one-click bundles over the same toggles in **Settings → Features**:

| Preset | Intended surface |
| --- | --- |
| Bare-Bones | Terminal, editor, files, source control, and AI chat. |
| Standard | Core plus navigation, build/test/debug, and developer tools. |
| Web Dev | Standard plus multi-viewport preview, HTTP client, and scratchpad codecs. |
| Mobile | Standard plus the Mobile pack; its Expo/React Native panels are still planned. |
| AI / ML | Standard, AI Extras, ML Lab, and Benchmark. |
| Art | Files, source control, and the SVG workbench without code-reading panels. |
| Everything | Every currently available pack. |

The first-run tour and lasting Getting Started checklist derive from the active
packs, so changing your configuration also changes the guidance.

## Permanent workbench tools

- **Atlas** and **Benchmark** have labelled title-bar launchers that open or
  focus one dedicated companion window each. Their state and theme remain in
  sync with the main app.
- **ML Lab** appears in the title bar whenever the ML Lab pack is enabled and
  opens one reusable workbench tab.
- **SVG Studio** appears when the Art pack is enabled. It combines source and
  direct canvas editing, shape generators, 27 presets, icon-set review, palette
  and contrast tools, generative backdrops, favicon export, PNG export, and a
  SMIL/CSS animation timeline.

## Pack highlights

- **Dev Tools:** Activity, System Monitor, Ports, REPL, Database, Command
  History, Profiles, SSH, and Atlas.
- **ML Lab:** local training and experiments plus Benchmark. Benchmark compares
  ONNX and GGUF models across CPU-only ONNX Runtime, llama.cpp, nexis-ml-rs,
  and a clearly labelled simulated backend.
- **Web Dev:** side-by-side device viewports, an SSRF-guarded HTTP client, and
  local JSON/JWT/codec/regex utilities.
- **Art:** the full SVG Studio toolchain described above.
- **Advanced:** sharing, notes, shell/code snippets, and release tooling.

## Command history and privacy

Command recording is **off by default**. If enabled, the Command History panel
adds success-filtered history, searchable captured output, build-time trends,
and a local work journal. **Settings → Privacy** shows what is stored, controls
age/count/output caps, and provides time-windowed or whole-workspace deletion.
