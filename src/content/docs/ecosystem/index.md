---
title: The Nexis ecosystem
description: Nexis is a developer ecosystem — a terminal, ML engines, a benchmark app, a dev dashboard, and a shared design system that tie together.
---

**Nexis is more than one app — it's a developer ecosystem.** The terminal is the
flagship, but around it has grown a family of tools that share a stack
(**Tauri 2 + Rust + React 19**), a design language, and a philosophy: local-first,
lightweight, open source, and zero telemetry.

## The projects

| Project | What it is | Stack |
| --- | --- | --- |
| [Nexis](/basics/what-is-nexis/) | The AI-native terminal & developer environment (ADE) — the flagship. | Tauri 2 · Rust · React 19 |
| [nexis-ml](/ml-suite/nexis-ml/) | Python ML engine — train small models on small data, metrics streamed live into Nexis. | Python · PyTorch |
| [nexis-ml-rs](/ml-suite/nexis-ml-rs/) | Python-free, single-binary ML engine — same protocol and run store as `nexis-ml`, GPU via wgpu, ONNX export. | Rust · burn |
| [Nexis Benchmark](/ecosystem/nexis-benchmark/) | Desktop app for benchmarking local AI models — ONNX/GGUF across inference backends. | Tauri 2 · Rust · React 19 |
| [Dev Dashboard](/ecosystem/nexis-dev-dashboard/) | Git status across all your local repos in one glance, scanned natively in ~20 ms. | Tauri 2 · Rust (git2 + rayon) · React 19 |
| [nexisdev.org](https://nexisdev.org) | The marketing site. | Next.js 16 · shadcn/ui · Tailwind v4 |
| [This wiki](https://github.com/rwetz/nexis-wiki) | The documentation you're reading, at `wiki.nexisdev.org`. | Astro · Starlight |

## How the pieces fit together

- **Nexis** is the hub. Its [ML Lab panel](/ml-suite/) spawns an engine —
  [`nexis-ml`](/ml-suite/nexis-ml/) or [`nexis-ml-rs`](/ml-suite/nexis-ml-rs/) —
  to do real training work, and renders the streamed metrics live.
- The two **ML engines** are interchangeable: both speak the same NDJSON
  protocol and write the same run store, so a run produced by one can be read
  by the other.
- **Nexis Benchmark** closes the loop on local AI: it measures the models you'd
  run *in* Nexis (via LM Studio, Ollama, or ONNX), and it drives `nexis-ml-rs`
  as one of its real benchmark backends.
- **Dev Dashboard** answers "which of my repos needs attention?" before you
  even open a terminal — and can drop you into one (your `$TERMINAL`) at the
  selected repo.
- Everything visual descends from the **Nexis design system**: borderless
  custom window chrome, OKLCH light/dark themes, and the same typography and
  cursor set. Dev Dashboard is built directly from the design language
  extracted from Nexis.

## Shared principles

Every project in the ecosystem follows the same rules — see
[Philosophy](/basics/philosophy/) for the long version:

- **Local-first.** Your code, your models, your data stay on your machine.
  AI runs on your own API keys or fully offline.
- **Lightweight.** Tauri and the system webview instead of Electron; the Nexis
  terminal itself is under 10 MB.
- **Zero telemetry.** None of the apps phone home.
- **Open source.** All repos are public under
  [github.com/rwetz](https://github.com/rwetz), Apache-2.0 licensed.

## Where to go next

- [Nexis Benchmark](/ecosystem/nexis-benchmark/) — benchmark local AI models.
- [Dev Dashboard](/ecosystem/nexis-dev-dashboard/) — multi-repo git status at a glance.
- [ML Suite](/ml-suite/) — the training engines and the ML Lab panel.
- [What is Nexis?](/basics/what-is-nexis/) — the flagship terminal itself.
