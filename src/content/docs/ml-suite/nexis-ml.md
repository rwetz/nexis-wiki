---
title: nexis-ml (Python)
description: The PyTorch-based Python ML engine for the Nexis ML Lab.
---

`nexis-ml` is the **Python engine** for the [ML Suite](/ml-suite/) — a
hobby-grade ML tool to create, train, and inspect **small models on small data**,
with metrics streamed live to the Nexis terminal (or plain text in any other
shell).

It's the full-featured engine: the Nexis ML Lab ships the UI (panels, live
charts, run browser) and spawns `nexis-ml` to do the actual work. It's also
useful standalone — every command works in a plain shell.

## Install

```sh
pip install nexis-ml[torch]     # into the active virtualenv
pipx install nexis-ml[torch]    # or: on PATH in every shell
```

The Nexis ML Lab panel can install or download it for you automatically.

## What it does

- Train tiny **MLPs** on tabular data (a spreadsheet / CSV).
- Train a **tiny GPT** you can watch learn to write.
- Train a small **CNN** over folders of images.
- Stream metrics live, save every run, and inspect checkpoints.

## What it is not

Not an MLOps platform, not distributed training, not an LLM serving stack. Train
a small model on your spreadsheet, watch the loss curve drop, and poke at the
checkpoint.

## Interop

`nexis-ml` speaks the shared **NDJSON protocol** and writes the shared **run
store**, so its runs are interchangeable with the Rust engine
[`nexis-ml-rs`](/ml-suite/nexis-ml-rs/). Nexis renders runs from either engine
identically.

:::tip[No Python?]
If you'd rather not install a Python/PyTorch toolchain, use the single-binary
Rust engine [`nexis-ml-rs`](/ml-suite/nexis-ml-rs/) instead — the ML Lab panel
auto-detects whichever is present.
:::
