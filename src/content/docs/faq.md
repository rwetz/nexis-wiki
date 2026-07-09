---
title: FAQ
description: Frequently asked questions about Nexis.
---

## What is Nexis?

An open-source, lightweight, cross-platform **AI-native terminal and developer
environment**. Terminal, editor, language tooling, source control, and an AI
panel in one app. See [What is Nexis?](/basics/what-is-nexis/).

## What is it built with?

**Tauri 2**, **Rust**, and **React 19**. The native PTY and heavy lifting are in
Rust; the UI renders in the system webview, which is why the app is under 10 MB.

## Is it free and open source?

Yes — Nexis is released under the **Apache-2.0** license. It builds on the
open-source [terax-ai](https://github.com/crynta/terax-ai) project.

## Does Nexis send my data anywhere?

No. There is **zero telemetry**. Your code stays on your machine, and API keys
are stored in the **OS keychain**, never on disk. If you use a cloud AI provider,
only what you send to that provider goes to it — and the **AI context inspector**
shows you exactly what that is.

## Can I use it without any AI provider / API key?

Yes. Point Nexis at a local **LM Studio**, **MLX**, or **Ollama** endpoint and it
runs fully offline with no key. See [AI providers](/configuration/ai-providers/).

## Which AI providers are supported?

12+, including OpenAI, Anthropic, Google, Groq, xAI, Cerebras, DeepSeek, Mistral,
OpenRouter, Hugging Face, any OpenAI-compatible endpoint, and the local runners
above. Full list on [AI providers](/configuration/ai-providers/).

## Will the AI edit or run things without asking?

No. Every file, shell, search, and plan tool requires **explicit approval**, and
AI-proposed edits are shown as **per-hunk diffs** you approve or reject
individually.

## What platforms are supported?

macOS, Linux (`.deb` / `.rpm` / AppImage / AUR), and Windows (NSIS / MSI), with
first-class **WSL**. See [Installation](/installation/).

## What is the ML Lab?

A panel for training small models on your own data, powered by a local engine —
either the Python [`nexis-ml`](/ml-suite/nexis-ml/) or the single-binary Rust
[`nexis-ml-rs`](/ml-suite/nexis-ml-rs/). See [ML Suite](/ml-suite/).

## How do I report a bug or request a feature?

Open an issue on the [Nexis GitHub repository](https://github.com/rwetz/Nexis/issues).
