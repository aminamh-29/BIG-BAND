
# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static marketing site for "BIG BAND" digital agency. No build system, no package manager, no tests — plain HTML/CSS/vanilla JS (ES modules).

## Running locally

Open `index.html` directly, or serve the folder (ES module imports in `js/` require an HTTP origin, not `file://`):

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

## Architecture — important caveat

There are **two parallel implementations** of the site and they are not wired together:

1. **`index.html`** (~1250 lines) — the live, self-contained page. All CSS is inline in `<style>` and all JS is inline in `<script>`. This is what renders when you open the file. It does **not** `<link>` or `<script src>` anything from `css/` or `js/`.

2. **`css/` + `js/`** — a modular refactor of the same site. `js/main.js` is the ES-module entry point that imports `cursor`, `nav`, `animations`, `counter`, `testimonials`. CSS is split into `reset`, `variable`, `layout`, `component`, `animations`. **No HTML file currently loads these** — they're orphaned until `index.html` is updated (or a new HTML shell is added) to reference them.

When making changes, decide which track you're editing and stay consistent. Edits to `js/*.js` or `css/*.css` will have no visible effect until the HTML is rewired to load them. Conversely, edits to `index.html`'s inline blocks won't propagate to the modular files. If the user wants a visible change, edit `index.html` unless they explicitly ask to migrate to the modular structure.

## Design tokens

Color palette and typography are defined as CSS custom properties (`--cream`, `--ink`, `--gold`, `--gold-light`, `--rust`, `--sage`, `--text-muted`, `--border`) — duplicated in both `index.html` `:root` and `css/variable.css`. Fonts: Cormorant Garamond (display) + DM Sans (body), loaded from Google Fonts.

Custom cursor is enabled globally (`body { cursor: none }` + `.cursor` / `.cursor-ring` elements driven by `cursor.js` / inline equivalent). Keep this in mind when adding interactive elements.
