---
title: ML Suite overview
description: The Nexis ML Lab and its two interchangeable engines — Python and Rust.
---

The **ML Suite** lets you train small models on your own data, entirely on your
machine — no cloud, no accounts. It has two halves:

- **ML Lab** — a sidebar panel inside Nexis: templates, live training charts, an
  inference playground, and a run browser.
- **An engine** — the tool that does the actual training. Nexis ships a UI and
  spawns an engine to do the work.

## Two engines, one panel

The panel **auto-detects** whichever engine is installed and only shows the
options that engine supports:

| Engine | Language | Best for |
| --- | --- | --- |
| [`nexis-ml`](/ml-suite/nexis-ml/) | Python (PyTorch) | The full feature set — tabular, text (tiny GPT), and image models. |
| [`nexis-ml-rs`](/ml-suite/nexis-ml-rs/) | Rust (single binary) | Machines with no Python/PyTorch toolchain — tabular & image on CPU or any GPU. |

Both engines speak the **same NDJSON protocol** and write the **same run store**,
so Nexis renders runs from either one with zero changes. A run produced by the
Rust engine can be read by the Python engine, and vice versa.

## In the ML Lab panel

- **Templates** — Spreadsheet (tabular neural net), Text generator (a tiny GPT
  you can watch learn to write), Image classifier (a small CNN over folders of
  images), and Blank (design your own network). One-click **Create & train**
  scaffolds an example project with sample data.
- **Plain-language training** — live charts with friendly metric names
  ("Accuracy", not `acc/val`), a progress bar, and a trend-aware status sentence,
  including an overfitting warning when validation worsens. Raw logs stay in a
  collapsed **Details** disclosure.
- **Inference playground** — load a trained model and try it live: prompt →
  continuation for text, feature form → prediction with probability bars for
  tabular.
- **Run browser & comparison** — every run is saved with its metrics; annotate
  with notes/tags, pin a baseline, and overlay runs on shared charts. Confusion
  matrices and sample-prediction grids render inline.
- **Hyperparameter form & HTML report export** — tweak `train.toml` keys without
  leaving the panel, and export a self-contained HTML report of any run.

## What it is *not*

The ML Suite is for **small models on small data**. It is deliberately not an
MLOps platform, not distributed training, and not an LLM serving stack.

## Learn more

- [`nexis-ml`](/ml-suite/nexis-ml/) — the Python engine.
- [`nexis-ml-rs`](/ml-suite/nexis-ml-rs/) — the Rust engine.
