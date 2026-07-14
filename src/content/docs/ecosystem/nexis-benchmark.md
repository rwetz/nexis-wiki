---
title: Nexis Benchmark
description: A desktop app for benchmarking local AI models — ONNX and GGUF across inference backends, with real ONNX Runtime, llama.cpp, and nexis-ml-rs engines.
---

**Nexis Benchmark** is a desktop app for benchmarking local AI models. Drop in
**ONNX** or **GGUF** models, pick a task, run a standardized benchmark, and
compare **throughput, latency, memory, and accuracy** side by side across
inference backends.

Like the rest of the ecosystem, it's built on **Tauri 2 + React 19 + Vite +
Tailwind v4**: the Rust side owns the benchmark harness and backend
abstraction, React owns model management and the charts.

- **Source:** [github.com/rwetz/nexis-benchmark](https://github.com/rwetz/nexis-benchmark)
- **License:** Apache-2.0

## Backends

The app has an end-to-end working pipeline. Three backends produce **real**
measurements; the rest are deterministic simulations behind the same Rust
`Engine` trait, so more real engines slot in without touching the harness,
IPC, or UI.

| Backend | State |
| --- | --- |
| ONNX Runtime | ✅ Real inference via the `ort` crate (prebuilt binaries, no cmake). |
| nexis-ml-rs | ✅ Real wgpu/ndarray training throughput — spawns the [`nexis-ml-rs`](/ml-suite/nexis-ml-rs/) engine and reads its NDJSON stream. |
| llama.cpp | ✅ Real GGUF inference via a prebuilt `llama-bench` (no cmake — it locates the binary). |
| Simulated | ✅ Synthetic metrics with real event streaming, for UI and protocol testing. |

Every result is labeled with its provenance in the UI: a green **`real`** badge
vs **`sim`**, plus a per-run note — so simulated numbers can never be mistaken
for measurements.

## The benchmark protocol

Each *model × backend* cell runs the same standardized sequence:

1. **Load** the model.
2. **Warm-up** — a configurable number of discarded runs.
3. **Measure** — `runs` timed iterations.

The harness records per-run latency samples and derives **tokens/sec,
first-token latency, mean / p50 / p95 latency, and peak memory**. Cancellation
is cooperative — you can stop a running benchmark at any point with
<kbd>Esc</kbd>.

## Features

- **Model library** — drag-and-drop `.onnx` / `.gguf` files; format and task
  are detected from the file automatically.
- **Benchmark config** — set the number of measured runs, warm-up runs, and
  token counts per protocol.
- **Results dashboard** — a comparison chart, a live run matrix that fills in
  as results stream, and **CSV export**.
- **Browser mode** — run the UI without Tauri (`pnpm dev`); it falls back to an
  in-process simulator with seeded demo models, which makes UI iteration fast.

## Keyboard shortcuts

| Key | Action |
| --- | --- |
| <kbd>Ctrl</kbd>+<kbd>Enter</kbd> (<kbd>⌘</kbd>+<kbd>Enter</kbd> on macOS) | Run benchmark |
| <kbd>Esc</kbd> | Stop a running benchmark |
| <kbd>t</kbd> | Toggle light / dark theme |

## Where it fits in the ecosystem

Nexis Benchmark closes the loop on the ecosystem's local-AI story: the
[Nexis](/basics/what-is-nexis/) terminal *runs* local models (LM Studio, MLX,
Ollama), the [ML Suite](/ml-suite/) *trains* them, and Benchmark tells you
**which model and backend is actually fastest on your hardware**. It also
exercises [`nexis-ml-rs`](/ml-suite/nexis-ml-rs/) directly as one of its real
measurement engines.

## Develop

```sh
pnpm install
pnpm tauri dev     # run the desktop app
pnpm dev           # browser-only mode with the simulator
```
