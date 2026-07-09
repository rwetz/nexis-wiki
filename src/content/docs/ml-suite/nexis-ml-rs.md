---
title: nexis-ml-rs (Rust)
description: The Python-free, single-binary Rust ML engine for the Nexis ML Lab.
---

`nexis-ml-rs` is a **Python-free, single-binary** ML engine for Nexis — the same
job as [`nexis-ml`](/ml-suite/nexis-ml/), but as one downloadable binary with no
Python or PyTorch toolchain required. It's designed like a downloadable language
server: fetch it, and the ML Lab panel can train and run models on a machine
that has no Python at all.

It speaks the **same NDJSON protocol** and writes the **same run store** as the
Python engine, so Nexis renders runs from either with zero changes — a
Rust-produced run can be read by the Python `nexis-ml runs`.

## Backends

Training runs on [`burn`](https://github.com/tracel-ai/burn). Pick the backend
with `[train] device` in `train.toml`:

- `auto` — choose automatically.
- `cpu` — burn's `ndarray` backend.
- `gpu` — burn's **wgpu** backend (Vulkan / DX12 / Metal), with no vendor
  toolchain required.

Both backends include autodiff.

## Models

The model is declared in **`train.toml`**:

- A CSV `[data] path` (or none → synthetic data) trains a variable-depth **MLP**.
- A folder of class sub-folders trains a **CNN** over its images.

**ONNX export** is available for the tabular MLP (`export --onnx`), and Nexis can
download the binary and detect it automatically.

## Build & run

```sh
cargo build --release            # produces target/release/nexis-ml(.exe)

nexis-ml --version               # → "nexis-ml 0.8.0" (Nexis-detectable)
nexis-ml env                     # one-line JSON capability report (backend: cpu|wgpu)
nexis-ml new tabular my-run      # scaffold a project (templates: tabular | image)
nexis-ml train my-run            # train; writes .nexis-ml/runs/<id>/
nexis-ml --nexis-protocol train my-run   # stream NDJSON protocol on stdout
nexis-ml export --onnx my-run    # train the MLP and write my-run/model.onnx
nexis-ml serve --run <id> my-run # inference loop: one JSON request per stdin line
```

## When to use it

Use `nexis-ml-rs` when you want a **single ~31 MB binary** and no Python
dependency — for example on a fresh machine, a CI runner, or a container. When
you want the full feature set (including the tiny GPT text template), use the
Python engine [`nexis-ml`](/ml-suite/nexis-ml/). The ML Lab panel auto-detects
whichever is installed.
