---
title: Language tooling
description: Real LSP support, a DAP debugger, and a problems panel in Nexis.
sidebar:
  order: 4
---

Nexis speaks the same protocols your editor's language features rely on — **LSP**
for intelligence and **DAP** for debugging — driven by real language servers and
debug adapters, not heuristics.

## LSP — language intelligence

Full **Language Server Protocol** support gives you:

- **Go-to-definition**
- **Hover documentation**
- **Completion**
- **Diagnostics** (errors and warnings from the real compiler/linter)

A Rust proxy handles protocol negotiation and manages each server's session
lifecycle, so servers start, restart, and shut down cleanly.

LSP also powers editor refactorings — see
[semantic rename and extract/inline](/features/editor/#refactoring-and-navigation).

## DAP — debugging

The **Debug Adapter Protocol** integration provides a full debugging experience:

- **Breakpoint gutter** — click to set and clear breakpoints.
- **Step controls** — step over, step in, step out, and continue.
- **Variable inspector** — inspect locals and watch values.
- **Call stack panel**.

Supported runtimes include **Node.js**, **Python**, and **LLDB**-based
languages.

## Problems panel

The **Problems** panel gives you a file-grouped list of errors and warnings with
filtering, plus a status-bar indicator so you always know the state of the
workspace at a glance.
