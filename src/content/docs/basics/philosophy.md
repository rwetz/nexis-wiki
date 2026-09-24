---
title: Philosophy
description: The principles behind Nexis — local-first, private, lightweight, and transparent.
---

Nexis is shaped by a few firm principles. They explain most of the product
decisions you'll run into.

## Local-first and private

Your code and your keys stay on your machine unless you choose a networked
feature. API keys are saved through the **OS keychain** via Rust's `keyring`
crate, not in Nexis settings or `localStorage`. The OS may persist its keychain
on disk. Nexis does not include usage telemetry.

If you don't want to use a cloud model at all, you don't have to — Nexis runs
fully offline against **LM Studio**, **MLX**, or **Ollama**.

## Native by construction

Nexis is built on **Tauri 2** rather than Electron. It renders in the system
webview and does the heavy lifting in Rust. The project no longer treats a tiny
binary as a hard constraint: useful native capabilities such as bundled
CPU-only ONNX Runtime take precedence over an arbitrary size target.

## AI with a seatbelt

The AI is powerful but governed by visible policies:

- Tool policies are configurable per capability: prompt every time, deny,
  allow, or auto-approve only shell commands that pass a strict read-only check.
- AI-proposed edits appear as **per-hunk diffs** — approve or reject each change.
- The **AI context inspector** shows exactly what is being sent to the model.
- **Private terminals** are walled off: the AI cannot read their scrollback.

## Transparent and open

Nexis is open source under the **Apache-2.0** license, and builds on the
open-source [terax-ai](https://github.com/crynta/terax-ai) project. The wire
protocol between the app and its [ML engines](/ml-suite/) is a documented NDJSON
format, and the ML run store is a plain on-disk directory you can inspect.

## One window, not five

A terminal, an editor, a debugger, source control, and an AI assistant belong in
the same window with shared context. Nexis puts them there so you're not
juggling an editor, a separate terminal, and a chat window that each know nothing
about the others.
