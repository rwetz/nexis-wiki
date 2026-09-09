---
title: Benchmark
description: The Nexis companion window for comparing ONNX and GGUF models across inference and training backends.
---

**Benchmark is built into Nexis.** Its labelled title-bar launcher opens or
focuses one dedicated companion window with a responsive setup board, run plan,
live result matrix, and comparison charts. It is part of the **ML Lab** pack and
the **AI / ML** and **Everything** presets.

The historical standalone repository is archived; its Git history now lives in
the main Nexis repository.

## Backends

| Backend | What is measured |
| --- | --- |
| ONNX Runtime | Real CPU inference through the linked `ort` runtime. |
| llama.cpp | Real GGUF inference through a `llama-bench` binary you locate. |
| nexis-ml-rs | Real training throughput on a standardized workload. |
| Simulated | Synthetic metrics for unsupported combinations and UI testing. |

Every result carries a **real** or **sim** badge plus a note explaining what was
actually measured. CPU-only ONNX is intentional; the current build does not
advertise a GPU execution provider.

## Workflow

1. Add `.onnx` or `.gguf` model files.
2. Select compatible backends and configure warm-up/measured runs.
3. Run the model × backend matrix.
4. Compare throughput, first-token latency, mean/p50/p95 latency, peak memory,
   and available accuracy metrics as cells stream in.

A run persists in the backend if the panel closes or reloads, and reopening the
window reconnects to the active job rather than starting a second one. Completed
results can be exported to CSV.

## Shortcuts

Shortcuts are scoped to the Benchmark surface so they do not steal keystrokes
from a terminal:

| Key | Action |
| --- | --- |
| <kbd>Ctrl</kbd>+<kbd>Enter</kbd> (<kbd>Command</kbd>+<kbd>Enter</kbd> on macOS) | Run |
| <kbd>Esc</kbd> | Stop the active run |

Theme switching belongs to Nexis; the former standalone `t` shortcut no longer
exists.
