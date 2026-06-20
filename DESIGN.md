---
name: allizon.io
description: A personal writing site by Allison
colors:
  primary: "oklch(0.480 0.130 28)"
  primary-hover: "oklch(0.420 0.130 28)"
  primary-dark: "oklch(0.68 0.12 28)"
  primary-bright: "oklch(0.74 0.12 28)"
  gold: "oklch(0.740 0.080 70)"
  gold-hover: "oklch(0.800 0.080 70)"
  gold-subtle: "oklch(0.950 0.010 70)"
  gold-border: "oklch(0.850 0.020 70)"
  page-bg: "oklch(1 0 0)"
  ink: "oklch(0.141 0.015 30)"
  muted-ink: "oklch(0.490 0.015 30)"
  surface: "oklch(0.973 0.003 30)"
  line: "oklch(0.890 0.003 30)"
  code-fill: "oklch(0.970 0.003 30)"
typography:
  body:
    fontFamily: "'Source Serif 4 Variable', Georgia, 'Times New Roman', serif"
    fontSize: "100%"
    fontWeight: 400
    lineHeight: 1.75
  heading:
    fontFamily: "'Source Sans 3 Variable', system-ui, -apple-system, sans-serif"
    fontWeight: 650
    lineHeight: 1.25
  label:
    fontFamily: "'Source Sans 3 Variable', system-ui, -apple-system, sans-serif"
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

The system uses a restrained single-accent system — **Brick Red** (oklch(0.48 0.13 28)) for links, focus states, and interactive cues, with **Ochre Gold** (oklch(0.74 0.08 70)) as a quiet secondary accent for decorative elements, blockquotes, and progress indicators. The palette stays restrained around them: a true white page, subtle warm-tinted neutrals, and near-black ink. Warmth comes from the accent and the voice, not from the surface.

The site explicitly rejects generic blog-template aesthetics, SaaS clichés (gradient text, hero metrics, numbered section markers), and anything that suggests a platform rather than a person. It should never feel like a Medium clone or a default theme.

**Key Characteristics:**

- Words-first: typography and whitespace create the reading rhythm
- Single committed accent (Brick Red) with Ochre Gold as quiet secondary
- Flat by default, with subtle shadow on interaction
- Responsive without breakpoint proliferation — flex-wrap and clamp handle most cases
- Dark mode that mirrors the light mode's structure through color alone

## 2. Colors: The Notebook Palette

A restrained palette built around one committed accent: Brick Red (warm, grounded, personal) for all interaction, with Ochre Gold as a quiet helper for decoration. The neutrals pull subtly toward the brand hue (30° on the OKLCH wheel) to make the whole page feel like it belongs to one person — not a template.

### Primary Accent

- **Brick Red** (oklch(0.480 0.130 28)): The sole accent. Used for links, focus outlines, tag-pill hover borders, dates, and interactive element accents. Never used for body text or large decorative areas.
- **Brick Red Deep** (oklch(0.420 0.130 28)): Link hover and darker-interaction variant.
- **Brick Red Light** (oklch(0.680 0.120 28)): Dark-mode accent variant (maintained at same chroma and hue, higher lightness for contrast against dark bg).
- **Brick Red Bright** (oklch(0.740 0.120 28)): Dark-mode hover variant.

### Secondary Accent

- **Ochre Gold** (oklch(0.740 0.080 70)): Secondary accent. Used for progress bars, blockquote borders, `<mark>` highlights, decorative rules, and accent dots. Never used for links, focus states, or body text.
- **Ochre Gold Hover** (oklch(0.800 0.080 70)): Slightly lighter gold for hover states.
- **Ochre Gold Subtle** (oklch(0.950 0.010 70)): Background tint for blockquotes, `<mark>` backgrounds.
- **Ochre Gold Border** (oklch(0.850 0.020 70)): Borders and dividers on gold-accented surfaces.

### Neutral — Light Mode

- **Page** (oklch(1 0 0)): Body background. True white, no tint.
- **Ink** (oklch(0.141 0.015 30)): Body text. Near-black with a warm lean for comfortable reading.
- **Muted Ink** (oklch(0.490 0.015 30)): Secondary text (dates, descriptions, nav links). Meets WCAG AA.
- **Surface** (oklch(0.973 0.003 30)): Sidebar cards, meta grids, tag-pill backgrounds. Barely-warm off-white.
- **Line** (oklch(0.890 0.003 30)): Borders, dividers, separators between posts.
- **Code Fill** (oklch(0.970 0.003 30)): Inline code and code-block background.

### Neutral — Dark Mode

- **Page** (oklch(0.09 0.008 28)): Warm near-black for reduced eye strain. Feels like a study at night, not a terminal.
- **Ink** (oklch(0.86 0.005 28)): Warm off-white body text.
- **Muted Ink** (oklch(0.55 0.01 28)): Secondary text. Meets WCAG AA against dark page bg.
- **Surface** (oklch(0.14 0.008 28)): Sidebar cards, meta grids, tag-pill backgrounds.
- **Line** (oklch(0.20 0.008 28)): Borders, dividers, separators.
- **Code Fill** (oklch(0.14 0.008 28)): Code backgrounds.

### Named Rules

**The Single-Accent Rule.** Brick Red is the primary accent for interaction (links, focus indicators, hover treatments). Ochre Gold is the quiet helper for decoration (progress bars, blockquotes, marks, decorative rules — not interaction). The two have distinct roles and never compete for the same job. Brick Red occupies roughly 5–8% of any screen, Gold another 2–4%. Restraint is still the point — color earns its place.

**The Untinted Page Rule.** The page background is pure white in light mode and warm near-black in dark mode. No beige, cream, or paper-tinted bg. Warmth is carried by the brick accent, the warm neutrals, and the voice — not by a tinted surface.

## 3. Typography

**Body Font:** Source Serif 4 Variable (self-hosted via @fontsource-variable), with Georgia and Times New Roman fallbacks.
**Sans Font:** Source Sans 3 Variable (self-hosted via @fontsource-variable), with system-ui and -apple-system fallbacks.
**Mono Font:** JetBrains Mono, Fira Code, Cascadia Code, with monospace fallback.

**Character:** A two-family system with genuine contrast. Source Serif 4 handles all body prose — warm, open, designed for long-form screen reading. Source Sans 3 carries headings, labels, and UI — clean, modern, a deliberate shift that signals structure without shouting. The serif/sans switch at the heading boundary is the main typographic move; it gives the page a book-like reading rhythm with crisp wayfinding.

### Hierarchy

- **Body** (400, 100% / 16px, 1.75): All prose. Line length capped at 65–75ch via `--width-content` (680px).
- **Headline 1** (650, 1.75rem / post pages 2rem, 1.25): Page and post titles. `text-wrap: balance`.
- **Headline 2** (650, 1.35rem, 1.25): Section headings within posts.
- **Headline 3** (650, 1.1rem, 1.25): Subsection headings.
- **Small / Label** (400, 0.875rem, 1.5): Dates, metadata, secondary nav, sidebar text.
- **Tag Label** (400, 0.75rem, 1): Tag pills. Small enough to sit alongside body text without disrupting the line.
- **Mono / Code** (400, 0.875em, 1.6): Inline code and pre-formatted blocks.

### Named Rules

**The Reading First Rule.** Display typography is restrained. The serif body signals "this is for reading" without decoration, while the sans headings provide crisp navigation without competing. Headlines never use display weights (900), extreme sizes, or letter-spacing that would read as "designed" rather than "written."

## 4. Elevation

The system is flat by default. Surfaces rest on the page with no drop shadow. Depth is communicated through border lines (1px solid `var(--color-border)`) and surface color changes.

Subtle shadows appear only as a response to interaction — a hover or focus state that lifts the element just enough to signal affordance. At rest, everything is flush.

### Shadow Vocabulary

- **Hover Lift** (`box-shadow: 0 4px 12px rgba(0,0,0,0.08)`): Applied to interactive containers (sidebar cards, external-link buttons) on hover/focus. A barely-there shadow that says "this is touchable."

### Named Rules

**The Flat Foundation Rule.** Shadows exist only as a response to state. No surface at rest casts a shadow. If the shadow is removed from a hover state, the element must still look clickable through color or border alone.

## 5. Components

### Links (Inline)

- **Style:** Brick Red (`--color-accent`), no underline at rest.
- **Hover:** underlined, transitions in 0.15s.
- **Focus:** 2px solid outline in Brick Red, offset 2px.
- **Post title links:** Ink color at rest, transition to Brick Red on hover.

### Tag Pills

- **Shape:** Fully rounded (`border-radius: 999px`).
- **Rest:** Surface background (`--color-surface`), Line border (`--color-border`), Muted Ink text.
- **Hover:** Border and text transition to Brick Red in 0.15s.
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
- **Focus:** 2px solid Brick Red outline, offset 2px.
- **Shape:** 6px border radius, `0.3rem 0.6rem` padding.

### External Link Buttons (Pixar pages)

- **Style:** Border-only (`1px solid --color-border`), Muted Ink text, 4px border radius.
- **Hover:** Border and text transition to Brick Red.
- **Spacing:** `0.3rem 0.75rem` padding.

### Progress Bar (Pixar Sidebar Card)

- **Track:** 4px tall, rounded (`border-radius: 2px`), `--color-gold-border` background.
- **Fill:** Ochre Gold (`--color-gold`), scales from left via `transform: scaleX()`.
- **Label:** Muted Ink, 0.8rem.

### Blockquotes

- **Border:** 3px left border in Ochre Gold (`--color-gold`).
- **Background:** Ochre Gold Subtle (`--color-gold-subtle`), `border-radius: 0 6px 6px 0`.
- **Padding:** `0.75rem 1.25rem`.

### Inline Highlights (`<mark>`)

- **Background:** Ochre Gold Subtle (`--color-gold-subtle`).
- **Text:** Inherits body color (`--color-text`).
- **Rounding:** 3px `border-radius`, `0.1em 0.25em` padding.

### Post Cards (Home Page / Archive)

- **Style:** Bottom border separator (1px solid `--color-border`) between cards. No card container — the border is the divider.
- **Title:** 1.15rem, weight 600, Ink color. Transitions to Brick Red on hover.
- **Description:** 0.925rem, Muted Ink. No hover effect.
- **Meta row:** Date (Muted Ink, small) + tag pills, `0.75rem` gap.

## 6. Do's and Don'ts

### Do

- **Do** use Brick Red (oklch(0.48 0.13 28)) as the primary accent for links, focus states, and hover treatments.
- **Do** use Ochre Gold (oklch(0.74 0.08 70)) as the secondary accent for decorative elements, progress bars, blockquotes, and `<mark>` highlights.
- **Do** keep the page background pure white (oklch(1 0 0)) in light mode and warm near-black (oklch(0.09 0.008 28)) in dark mode.
- **Do** use Source Serif 4 for body text and Source Sans 3 for headings — a two-family system with deliberate contrast.
- **Do** use subtle shadows (4px blur, 8% opacity black) only on interactive hover/focus states.
- **Do** let the writing set the rhythm. Typography and whitespace guide the reader; decoration doesn't.
- **Do** maintain WCAG AA contrast: body text at least 4.5:1 against its background.

### Don't

- **Don't** use Gold where Brick Red belongs (links, focus states, primary CTAs). Don't use Brick Red where Gold belongs (blockquotes, marks, progress bars). Roles are distinct.
- **Don't** use gradient text, glassmorphism, or decorative blur effects.
- **Don't** add drop shadows to elements at rest. Shadows indicate interactivity.
- **Don't** use stock blog-template patterns: no numbered section markers ("01 / 02 / 03"), no tiny uppercase tracked kickers above every section heading, no big-stat hero metrics.
- **Don't** use a warm-tinted page background (no beige, cream, sand, or paper tones). The untinted page is intentional.
- **Don't** exceed three font families. One serif for body, one sans for headings/UI, and one monospace for code — nothing else.
- **Don't** use side-stripe borders (border-left/right >1px as decoration).
- **Don't** over-round corners: cards cap at 6px, tags use 999px (pill shape), small buttons at 4px. No 24px+ radii on containers.
