---
name: allizon.io
description: A personal writing site by Allison
colors:
  primary: "#8b72c5"
  primary-light: "#a68de3"
  primary-deep: "#6b51a1"
  primary-bright: "#b9a0f7"
  page-bg: "#ffffff"
  ink: "#111827"
  muted-ink: "#6b7280"
  surface: "#f9fafb"
  line: "#e5e7eb"
  code-fill: "#f3f4f6"
typography:
  body:
    fontFamily: "'Inter Variable', system-ui, -apple-system, sans-serif"
    fontSize: "100%"
    fontWeight: 400
    lineHeight: 1.75
  heading:
    fontFamily: "'Inter Variable', system-ui, -apple-system, sans-serif"
    fontWeight: 600
    lineHeight: 1.25
  label:
    fontFamily: "'Inter Variable', system-ui, -apple-system, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
  mono:
    fontFamily: "'JetBrains Mono', 'Fira Code', monospace"
    fontSize: "0.875em"
rounded:
  sm: "4px"
  md: "6px"
  full: "999px"
spacing:
  xs: "0.4rem"
  sm: "0.75rem"
  md: "1.25rem"
  lg: "1.5rem"
  xl: "2rem"
components:
  tag-pill:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.muted-ink}"
    rounded: "{rounded.full}"
    padding: "0.2rem 0.55rem"
  sidebar-card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "1.25rem"
  theme-toggle-btn:
    backgroundColor: "transparent"
    textColor: "{colors.muted-ink}"
    rounded: "{rounded.md}"
    padding: "0.3rem 0.6rem"
  external-link-btn:
    backgroundColor: "transparent"
    textColor: "{colors.muted-ink}"
    rounded: "{rounded.sm}"
    padding: "0.3rem 0.75rem"
---

# Design System: allizon.io

## 1. Overview

**Creative North Star: "The Notebook"**

Allizon.io is a personal writing site — a home for essays, reviews, and stray thoughts that lives outside any platform. The design treats the browser as a notebook: warm, unpretentious, and built around the words. Nothing shouts for attention because nothing needs to. The reading experience comes first; everything else earns its place.

The system uses a single, deliberate accent — Dusk Purple (#8b72c5) — as a quiet thread through links, hover states, and interactive elements. The palette stays restrained around it: a true white page, subtle gray surfaces, and near-black ink. Warmth comes from the voice and the pacing, not from decorative flourishes.

The site explicitly rejects generic blog-template aesthetics, SaaS clichés (gradient text, hero metrics, numbered section markers), and anything that suggests a platform rather than a person. It should never feel like a Medium clone or a default theme.

**Key Characteristics:**

- Words-first: typography and whitespace create the reading rhythm
- Single accent color applied sparingly and intentionally
- Flat by default, with subtle shadow on interaction
- Responsive without breakpoint proliferation — flex-wrap and clamp handle most cases
- Dark mode that mirrors the light mode's structure through color alone

## 2. Colors: The Notebook Palette

A restrained palette built around one focal accent. The neutrals lean slightly cool to let the warm-purple accent stand out without competing.

### Primary

- **Dusk Purple** (#8b72c5 / oklch(0.611 0.125 296.3)): The sole accent. Used for links, focus outlines, tag-pill hover borders, and interactive element accents. Never used for body text or large decorative areas.
- **Dusk Purple Deep** (#6b51a1 / oklch(0.500 0.125 296.3)): Link hover and darker-interaction variant.
- **Dusk Purple Light** (#a68de3 / oklch(0.700 0.125 296.3)): Dark-mode accent variant (maintained at same chroma and hue, higher lightness for contrast against dark bg).
- **Dusk Purple Bright** (#b9a0f7 / oklch(0.761 0.125 296.3)): Dark-mode hover variant.

### Neutral — Light Mode

- **Page** (#ffffff): Body background. True white, no tint.
- **Ink** (#111827 / oklch(0.210 0.032 264.5)): Body text. Near-black for comfortable reading.
- **Muted Ink** (#6b7280 / oklch(0.551 0.023 263.8)): Secondary text (dates, descriptions, nav links). Meets WCAG AA against page-bg (contrast ratio ~4.6:1).
- **Surface** (#f9fafb / oklch(0.985 0.002 235.9)): Sidebar cards, meta grids, tag-pill backgrounds.
- **Line** (#e5e7eb / oklch(0.928 0.006 260.7)): Borders, dividers, separators between posts.
- **Code Fill** (#f3f4f6 / oklch(0.967 0.003 256.5)): Inline code and code-block background.

### Neutral — Dark Mode

- **Page** (#0a0a0a): Body background. Near-black for reduced eye strain.
- **Ink** (#e5e7eb): Body text.
- **Muted Ink** (#9ca3af / oklch(0.714 0.019 260.4)): Secondary text. Meets WCAG AA against dark page bg.
- **Surface** (#111827): Sidebar cards, meta grids, tag-pill backgrounds.
- **Line** (#1f2937): Borders, dividers, separators.
- **Code Fill** (#1f2937): Code backgrounds.

### Named Rules

**The One Accent Rule.** Dusk Purple is the only accent color. It appears on links, focus indicators, hover treatments, and tag-pill state borders — roughly 5–10% of any given screen. Its restraint is the point. No secondary or tertiary accent colors exist.

**The Untinted Page Rule.** The page background is pure white in light mode (#ffffff) and near-black in dark mode (#0a0a0a). No warm tint on the body bg. Warmth is carried by the accent color, typography voice, and content — not by a beige or paper-toned page.

## 3. Typography

**Body Font:** Inter Variable (self-hosted via @fontsource-variable), with system-ui and -apple-system fallbacks.
**Mono Font:** JetBrains Mono, Fira Code, Cascadia Code, with monospace fallback.
**Display Font:** Inter Variable (same as body — single-family system).

**Character:** One font family across all scales. Inter is warm for a sans-serif: open apertures, humanist proportions, generous x-height. The single-family approach keeps the page quiet — no font changes distract from the reading flow. Typography earns emphasis through weight (600 for headings) and size, not through family switches.

### Hierarchy

- **Body** (400, 100% / 16px, 1.75): All prose. Line length capped at 65–75ch via `--width-content` (680px).
- **Headline 1** (600, 1.75rem / post pages 2rem, 1.25): Page and post titles. `text-wrap: balance`.
- **Headline 2** (600, 1.35rem, 1.25): Section headings within posts.
- **Headline 3** (600, 1.1rem, 1.25): Subsection headings.
- **Small / Label** (400, 0.875rem, 1.5): Dates, metadata, secondary nav, sidebar text.
- **Tag Label** (400, 0.75rem, 1): Tag pills. Small enough to sit alongside body text without disrupting the line.
- **Mono / Code** (400, 0.875em, 1.6): Inline code and pre-formatted blocks. Code has a dedicated background fill.

### Named Rules

**The Reading First Rule.** Display typography is restrained. The hierarchy exists to guide the reader into body copy, not to compete with it. Headlines never use display weights (900), extreme sizes, or letter-spacing that would read as "designed" rather than "written."

## 4. Elevation

The system is flat by default. Surfaces rest on the page with no drop shadow. Depth is communicated through border lines (1px solid `var(--color-border)`) and surface color changes.

Subtle shadows appear only as a response to interaction — a hover or focus state that lifts the element just enough to signal affordance. At rest, everything is flush.

### Shadow Vocabulary

- **Hover Lift** (`box-shadow: 0 4px 12px rgba(0,0,0,0.08)`): Applied to interactive containers (sidebar cards, external-link buttons) on hover/focus. A barely-there shadow that says "this is touchable."

### Named Rules

**The Flat Foundation Rule.** Shadows exist only as a response to state. No surface at rest casts a shadow. If the shadow is removed from a hover state, the element must still look clickable through color or border alone.

## 5. Components

### Links (Inline)

- **Style:** Dusk Purple (`--color-accent`), no underline at rest.
- **Hover:** underlined, transitions in 0.15s.
- **Focus:** 2px solid outline in Dusk Purple, offset 2px.
- **Post title links:** Ink color at rest, transition to Dusk Purple on hover.

### Tag Pills

- **Shape:** Fully rounded (`border-radius: 999px`).
- **Rest:** Surface background (`--color-surface`), Line border (`--color-border`), Muted Ink text.
- **Hover:** Border and text transition to Dusk Purple in 0.15s.
- **Spacing:** `0.2rem 0.55rem` internal padding, `0.4rem` gap between pills. `0.75rem` font size.

### Sidebar Cards

- **Corner Style:** Gently curved (`border-radius: 6px`).
- **Background:** Surface color (`--color-surface`).
- **Border:** 1px solid Line (`--color-border`).
- **Shadow:** None at rest. `box-shadow: 0 4px 12px rgba(0,0,0,0.08)` on hover.
- **Internal Padding:** `1.25rem` all sides.

### Navigation

- **Style:** Sticky header with bottom border (1px solid `--color-border`). Site name (bold, Ink color) on the left, nav links on the right.
- **Nav links:** Muted Ink at rest, Ink on hover. 0.9rem font size. 1.25rem gap between items.
- **Active page:** Ink color, weight 600, `aria-current="page"`.
- **Mobile (≤500px):** Stacks vertically.

### Theme Toggle

- **Style:** Border-only button (1px solid `--color-border`), transparent background, Muted Ink icon.
- **Hover:** Border and icon transition to Ink color.
- **Focus:** 2px solid Dusk Purple outline, offset 2px.
- **Shape:** 6px border radius, `0.3rem 0.6rem` padding.

### External Link Buttons (Pixar pages)

- **Style:** Border-only (`1px solid --color-border`), Muted Ink text, 4px border radius.
- **Hover:** Border and text transition to Dusk Purple.
- **Spacing:** `0.3rem 0.75rem` padding.

### Post Cards (Home Page / Archive)

- **Style:** Bottom border separator (1px solid `--color-border`) between cards. No card container — the border is the divider.
- **Title:** 1.15rem, weight 600, Ink color. Transitions to Dusk Purple on hover.
- **Description:** 0.925rem, Muted Ink. No hover effect.
- **Meta row:** Date (Muted Ink, small) + tag pills, `0.75rem` gap.

## 6. Do's and Don'ts

### Do

- **Do** use Dusk Purple (#8b72c5) as the single accent for links, focus states, and hover treatments.
- **Do** keep the page background pure white (#ffffff) in light mode and near-black (#0a0a0a) in dark mode.
- **Do** use Inter Variable across all scales — one family keeps the page quiet.
- **Do** use subtle shadows (4px blur, 8% opacity black) only on interactive hover/focus states.
- **Do** let the writing set the rhythm. Typography and whitespace guide the reader; decoration doesn't.
- **Do** maintain WCAG AA contrast: body text at least 4.5:1 against its background.

### Don't

- **Don't** use any accent color other than Dusk Purple. No secondary or tertiary accents.
- **Don't** use gradient text, glassmorphism, or decorative blur effects.
- **Don't** add drop shadows to elements at rest. Shadows indicate interactivity.
- **Don't** use stock blog-template patterns: no numbered section markers ("01 / 02 / 03"), no tiny uppercase tracked kickers above every section heading, no big-stat hero metrics.
- **Don't** use a warm-tinted page background (no beige, cream, sand, or paper tones). The untinted page is intentional.
- **Don't** exceed three font families. One face for body/display, one for mono, and nothing else.
- **Don't** use side-stripe borders (border-left/right >1px as decoration).
- **Don't** over-round corners: cards cap at 6px, tags use 999px (pill shape), small buttons at 4px. No 24px+ radii on containers.
