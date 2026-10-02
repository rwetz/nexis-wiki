---
title: The Nexis ecosystem
description: Nexis is the hub for Atlas, Benchmark, SVG Studio, ML engines, and the public web properties.
---

**Nexis is the hub.** What began as a family of separate desktop apps has been
consolidated around one Tauri application, one theme system, and shared state.
The pieces that need independent runtimes or independent publishing remain
separate.

## Current shape

| Project or surface | Current role |
| --- | --- |
| [Nexis](/basics/what-is-nexis/) | The AI-native terminal and developer environment. |
| [Atlas](/ecosystem/nexis-dev-dashboard/) | Built-in repository intelligence, opened in a dedicated Nexis companion window. |
| [Benchmark](/ecosystem/nexis-benchmark/) | Built-in local-model comparison, opened in a dedicated Nexis companion window. |
| [ML Lab](/ml-suite/) | A Nexis workbench, opened in its own window and driven by a local engine. |
| [nexis-ml](/ml-suite/nexis-ml/) | Optional Python/PyTorch training engine. |
| [nexis-ml-rs](/ml-suite/nexis-ml-rs/) | Default Python-free training engine. |
| [nexisdev.org](https://nexisdev.org) | The marketing site. |
| [This wiki](https://github.com/rwetz/nexis-wiki) | User documentation at `wiki.nexisdev.org`. |
| [nexis-showcase-video](https://github.com/rwetz/nexis-showcase-video) | HyperFrames source for the looping product tour on nexisdev.org, built from real app screenshots. |

The former `nexis-atlas`, `nexis-benchmark`, `nexis-imagine`, and
`nexis-dev-dashboard` repositories are archived historical sources. Their Git
histories were grafted into Nexis so blame and file history still reach the
original work.

## How the pieces fit

- **Atlas** runs one native libgit2 scan and feeds both a dense repository list
  and an isometric code map. Opening a repo routes back into the main Nexis
  workspace or a terminal tab instead of launching another application.
- **Benchmark** compares model/backend cells with live streaming results. It
  uses CPU-only ONNX Runtime in-process, a located `llama-bench` for GGUF, the
  same managed nexis-ml engine as ML Lab, or an explicitly labelled simulator.
- **ML Lab** and **Benchmark** share engine discovery so they cannot silently
  measure different nexis-ml binaries.
- **SVG Studio**, Web Dev tools, System Monitor, Command History, and the other
  workbenches ship in the main binary and are exposed through feature packs.

## Shared principles

- **Local-first.** Code, models, and project data remain on the machine unless
  you deliberately use a cloud provider or sharing feature.
- **Zero telemetry.** Nexis does not collect usage analytics.
- **Open source.** The repositories are Apache-2.0 licensed.
- **Useful over tiny.** Tauri and Rust remain the foundation, but a fixed binary
  size is no longer allowed to exclude a worthwhile native capability.

## Where to go next

- [Workbench & feature packs](/features/workbench-packs/)
- [Atlas](/ecosystem/nexis-dev-dashboard/)
- [Benchmark](/ecosystem/nexis-benchmark/)
- [ML Suite](/ml-suite/)
