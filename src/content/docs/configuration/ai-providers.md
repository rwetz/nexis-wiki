---
title: AI providers
description: Every AI provider Nexis supports, cloud and local, and how to connect them.
sidebar:
  order: 4
---

Configure AI under **Settings → AI**. Pick a provider, paste a key (or point at a
local endpoint), and you're set. Keys are stored in the **OS keychain** via
Rust's `keyring` crate — they never touch disk or `localStorage`.

## Setting up

1. Open **Settings → AI**.
2. Choose a provider and paste your API key.
3. For local / offline models, point Nexis at your LM Studio, MLX, or Ollama URL.

## Supported providers

| Provider | Key required |
| --- | --- |
| OpenAI | Yes |
| Anthropic | Yes |
| Google Gemini | Yes |
| Groq | Yes |
| xAI Grok | Yes |
| Cerebras | Yes |
| DeepSeek | Yes |
| Mistral | Yes |
| OpenRouter | Yes |
| Hugging Face | Yes (free tier available) |
| OpenAI-compatible | Depends on endpoint |
| LM Studio | No — local only |
| MLX | No — local only |
| Ollama | No — local only |

## Running fully offline

Point Nexis at a local server and no key is required — nothing leaves your
machine:

- **LM Studio** — run models behind its local server.
- **MLX** — Apple Silicon local inference.
- **Ollama** — local model runner.

This pairs well with the [privacy philosophy](/basics/philosophy/): local-first,
zero telemetry, keys in the keychain.

## Security

Nexis wraps AI network access in **SSRF and DNS-rebinding protection**, and the
AI tool surface is sandboxed. Every file, shell, search, and plan tool requires
explicit approval before it runs.
