# Agent Context for allizon.io

## Design Context

This project has a `PRODUCT.md` (strategic decisions, brand personality, design principles) and a `DESIGN.md` (visual system tokens, components, named rules) at the project root. Read both before making visual or UX decisions.

Key anchors:

- **Register:** brand (design IS the product)
- **North Star:** "The Notebook"
- **Accent:** Rust/vermillion (`oklch(0.50 0.22 28)` · `#c0390a`) — single accent, used sparingly
- **Page bg:** warm off-white (`oklch(0.985 0.006 78)` · `#faf9f7`) light / near-black (`#0a0a0a`) dark
- **Font:** Syne (display/UI) + Lora (body) — geometric sans + literary serif pair
- **Setback:** flat at rest, no shadows
- **Principles:** write-first, warmth through substance, own your voice, respect attention, evolve deliberately

## Nav accent stripe — DO NOT separate from the `<header>`

The accent stripe (5px rust bar at the very top of every page) MUST be the Nav's `border-top`, **not** a standalone `<div>` above the Nav.

**Why?** If the stripe is a separate element in normal flow above a `position: sticky` Nav, the Nav starts at `y=5px` below the stripe. When the page scrolls, the stripe scrolls away and the Nav transitions from `y=5` to `y=0` — that 5px jump is visible as a 4-5px shift of the entire header during initial scroll. This is a Chromium sub-pixel rendering issue that `will-change: transform` on the Nav alone doesn't fully prevent.

**Current implementation** (`src/components/Nav.astro`): The `<header>` has `border-top: 5px solid var(--color-accent)` and `will-change: transform`. The standalone `.accent-stripe` div was removed from `src/layouts/Layout.astro`. The CSS class `.accent-stripe` was removed from `src/styles/global.css`.

**If you ever need to restore the standalone stripe**, you MUST also compensate for the 5px offset, either by nesting it inside the Nav or by ensuring the Nav's sticky position doesn't create a visible jump. Do not re-introduce a separate `position: sticky` / `position: fixed` element above the Nav without testing for this jitter.
