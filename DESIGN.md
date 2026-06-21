# allizon.io — Design Specification
**Concept: "Sundial"** — Editorial and crisp, with warm personal energy. Syne (geometric sans) for display and UI; Lora (literary serif) for body text and post titles. A vivid rust accent, sharp typographic hierarchy, and staggered fade-in animations on load.

Visual reference: `Allizon Home.dc.html` (homepage) and `Allizon Article.dc.html` (post view).

---

## Color Tokens

| Token | Value | Usage |
|---|---|---|
| `--bg` | `oklch(0.985 0.006 78)` · `#faf9f7` | Page background (warm off-white) |
| `--surface` | `oklch(0.96 0.014 40)` · `#f5ede8` | Sidebar widget backgrounds |
| `--accent` | `oklch(0.50 0.22 28)` · `#c0390a` | Primary accent — rust/vermillion |
| `--text` | `oklch(0.12 0.018 35)` · `#1a1410` | Headings, logo, near-black |
| `--text-body` | `oklch(0.22 0.018 44)` · `#2d2420` | Article body text |
| `--text-muted` | `oklch(0.50 0.012 60)` · `#787068` | Nav links, dates, excerpts |
| `--text-accent` | `oklch(0.54 0.012 60)` · `#7a7268` | Dateline uppercase label |
| `--border` | `oklch(0.90 0.008 70)` · `#e5e0d8` | Dividers, post separators, nav border |
| `--border-sidebar` | `oklch(0.88 0.010 62)` · `#e0d8d0` | Progress bar track in Pixar widget |
| `--footer-bg` | `#fbeeeb` | Footer background (warm blush) |
| `--footer-border` | `#c20000` | Footer top border (deep crimson) |

**Accent is used for:** top accent stripe, rust divider bar in hero, dates in post list, tag labels, sidebar widget top borders (accent widget), pull-quote border, "Filed under" links, progress bar fill, "Currently reading" dot and link.

---

## Typography

### Fonts
Load from Google Fonts:
```
Syne: weights 400, 700, 800
Lora: weights 400 (+ italic), 600 (+ italic)
```
```html
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=Lora:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet">
```

### Type Scale

| Role | Font | Size | Weight | Notes |
|---|---|---|---|---|
| Logo | Syne | 18px | 800 | `letter-spacing: -0.015em` |
| Nav links | Syne | 11px | 700 | `uppercase; letter-spacing: 0.08em` |
| Homepage display | Syne | 112px | 800 | `line-height: 0.9; letter-spacing: -0.025em` |
| Article title | Syne | 72px | 800 | `line-height: 0.95; letter-spacing: -0.03em` |
| Dateline | Syne | 11px | 700 | `uppercase; letter-spacing: 0.15em` |
| Post dates | Syne | 12px | 700 | `letter-spacing: 0.04em` |
| Tag labels | Syne | 10px | 700 | `uppercase; letter-spacing: 0.11em` |
| Widget headings | Syne | 13px | 800 | `uppercase; letter-spacing: 0.07em` |
| Footer label | Syne | 11px | 700 | `uppercase; letter-spacing: 0.08em` |
| Bio paragraph | Lora | 21px | 400 | `line-height: 1.57; text-wrap: pretty` |
| Post list titles | Lora | 25px | 600 | `line-height: 1.3` |
| Post excerpts | Lora | 15px | 400 | `line-height: 1.65` |
| Article body | Lora | 18px | 400 | `line-height: 1.78; text-wrap: pretty` |
| Pull quote | Lora | 21px | 400 italic | `line-height: 1.55` |
| Widget body | Lora | 14px | 400 | `line-height: 1.52` |
| "Currently reading" | Lora | 15px | 400 | inline with accent link |
| Footer italic | Lora | 13px | 400 italic | "allizon.io" |

---

## Layout System

**Max content width:** `1220px`, centered with `margin: 0 auto`  
**Horizontal padding:** `52px` each side (`padding: 0 52px; box-sizing: border-box`)  
**Inner content width:** ~1116px at max  

### Two-column grid (homepage post list + article body)
- **Gap:** `56px`
- **Main column:** `flex: 1` (auto, fills remaining space)
- **Sidebar:** `width: 292px; flex: none`
- At max width: main ≈ 768px, sidebar = 292px

### Sidebar content (article body text)
- `max-width: 640px` on all body paragraphs for comfortable reading

---

## Components

### Global — Accent Stripe
Full-width `5px` bar at the very top of every page, `background: var(--accent)`.

### Navigation
- Full-width, `border-bottom: 1px solid var(--border)`
- Inner content constrained to max-width layout
- **Logo:** `allizon.io` in Syne 800, `--text` color, links to homepage
- **Nav links:** Archive · Tags · Pixar · About · Contact — Syne 700 11px uppercase, `--text-muted`
- **Mode toggle:** 27×27px circle button, `border: 1px solid oklch(0.86 0.01 65)`, small `●` in accent color

### Hero (Homepage only)
Full content-width section, `padding: 60px 0 52px`.

1. **Dateline:** `Saturday, June 20, 2026` — Syne 700 11px uppercase, `--text-accent`, `margin-bottom: 20px`
2. **Display name:** `I'm Alix.` — Syne 800 112px, `--text`, `line-height: 0.9; letter-spacing: -0.025em`
3. **Rust bar:** `76px × 5px` block, `background: var(--accent)`, `margin: 26px 0 34px`
4. **Bio paragraph:** Lora 400 21px, `--text-body`-adjacent (`oklch(0.28 0.018 44)`), `max-width: 1100px; width: 100%`
5. **Currently reading:** `7px` accent dot + Lora 15px text. Book title is an accent-colored underline link (`border-bottom: 1px solid oklch(0.72 0.16 30)`)

Followed by a full-width `1px` divider (`--border`).

### Post List
Each post row has `padding: 30px 0` and a bottom border (`1px solid var(--border)`) except the last item.

**Row structure:**
```
[Date in Syne 700 12px accent]  [Tag in Syne 700 10px uppercase accent]  [Tag...]
[Post title in Lora 600 25px — links to post, inherits color]
[Excerpt in Lora 400 15px muted]
```

### Sidebar Widgets
Shared base: `background: var(--surface); border-radius: 2px; padding: 22px; margin-bottom: 16px`  
Each widget has a **4px top border** — accent color for the Pixar widget, `--text` color for Tags/Latest Posts.

**Pixar Project widget:**
- Widget title: Syne 800 13px uppercase accent
- Body: Lora 400 14px
- Progress bar: 3px track (`oklch(0.88 0.010 62)`), fill in accent, animates from 0 → current % on load
- Meta: "1 / 27 movies" + "Latest: Toy Story" in Lora 12px muted
- Link: "View project →" Syne 700 12px accent

**Tags widget (homepage):**
- Widget title: Syne 800 13px uppercase `--text`
- Tags: Syne 700 11px uppercase accent, separated by `·` mid-dot

**Latest Posts widget (article sidebar):**
- Widget title: Syne 800 13px uppercase `--text`
- Each post: Syne 700 10px uppercase accent date, Lora 600 14px title link

### Article View

**Back link:** `← All posts` — Syne 700 11px uppercase accent, `padding: 36px 0 0`

**Article header** (`padding: 32px 0 48px`):
1. Date + tag row — same format as post list
2. Title in Syne 800 72px, `line-height: 0.95; letter-spacing: -0.03em`
3. `52px × 5px` accent bar below title

Followed by a full-width `1px` divider, then the two-column body + sidebar.

**Article body** (`padding-top: 40px`):
- Paragraphs: Lora 400 18px, `line-height: 1.78`, `max-width: 640px`, `margin-bottom: 26px`, `text-wrap: pretty`
- **Pull quote / blockquote:** `border-left: 4px solid var(--accent); padding: 4px 0 4px 28px; max-width: 580px` — Lora 400 italic 21px, `line-height: 1.55`, `color: oklch(0.32 0.022 44)`
- **Post footer:** `border-top: 1px solid var(--border); padding-top: 28px` — "Filed under" label (Syne 700 11px muted uppercase) followed by tag links in accent

### Footer
- `border-top: 2px solid #c20000` (deep crimson)
- `background: #fbeeeb` (warm blush)
- `height: 4rem`
- `opacity: 0.5` — gives a deliberately subtle, faded appearance
- Inner: copyright left (Syne 700 11px, `#0b0606`), "allizon.io" italic right (Lora italic 13px, `#000000`)
- Inner constrained to max-width layout

> **Note:** The footer's `opacity: 0.5` makes both text and background semi-transparent — confirm this is intentional in implementation. An alternative approach is to use a semi-transparent background color instead so text remains fully opaque.

---

## Animation

All animations use `animation-fill-mode: both` so elements start in their initial (invisible) state during the delay period.

```css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(18px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}

@keyframes barGrow {
  from { width: 0; }
  to   { width: 3.7%; }   /* adjust to actual % complete */
}
```

### Homepage animation schedule

| Element | Animation | Duration | Delay |
|---|---|---|---|
| Hero section | `fadeUp` | 0.85s | 0.10s |
| "Currently reading" | `fadeIn` | 0.60s | 0.42s |
| Post 1 | `fadeUp` | 0.50s | 0.50s |
| Post 2 | `fadeUp` | 0.50s | 0.60s |
| Post 3 | `fadeUp` | 0.50s | 0.70s |
| Pixar widget | `fadeIn` | 0.70s | 0.56s |
| Tags widget | `fadeIn` | 0.70s | 0.66s |
| Progress bar fill | `barGrow` | 1.40s | 1.00s |

### Article page animation schedule

| Element | Animation | Duration | Delay |
|---|---|---|---|
| Back link | `fadeIn` | 0.50s | 0.10s |
| Article header | `fadeUp` | 0.80s | 0.15s |
| Article body | `fadeUp` | 0.60s | 0.30s |
| Sidebar | `fadeIn` | 0.70s | 0.40s |
| Progress bar fill | `barGrow` | 1.40s | 1.00s |

---

## Pages

### Homepage (`/`)
```
[5px accent stripe]
[Nav]
[Hero: dateline → display name → rust bar → bio → currently reading]
[1px divider]
[Two-col: post list | sidebar (Pixar widget + Tags widget)]
[Footer]
```

### Post / Article (`/posts/[slug]`)
```
[5px accent stripe]
[Nav]
[← All posts link]
[Article header: date+tags → title → accent bar]
[1px divider]
[Two-col: article body + post footer | sidebar (Pixar widget + Latest Posts widget)]
[Footer]
```

---

## Open Questions for Implementation

1. **Footer opacity:** Decide whether `opacity: 0.5` on the footer wrapper is intentional. If so, be aware it affects text legibility.
2. **Pixar widget progress:** The `barGrow` animation target (`3.7%`) should be driven by the actual movie count (`current / total * 100%`).
3. **Currently reading:** This is likely a manually updated field — confirm how it's stored/edited.
4. **Mode toggle button (`●`):** Functionality TBD — could be dark mode, reader mode, or settings.
5. **Responsive breakpoints:** This spec covers desktop (≥1220px). Mobile/tablet layout not yet designed.
6. **`text-wrap: pretty`:** Supported in Chrome 117+ / Safari 17.4+. Has no effect in older browsers (graceful fallback).
