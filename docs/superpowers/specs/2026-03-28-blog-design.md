# Personal Site / Blog — Design Spec

**Date:** 2026-03-28
**Site:** allizon.io
**Stack:** Astro 6.1, Content Collections, MDX

---

## Overview

A personal writing site with a clean/modern aesthetic — sans-serif, tight grid, slightly technical. Hosts a mix of long-form essays and short posts. Primary features: reverse-chronological post list, tag-based filtering, archive, about, contact, and RSS.

---

## Architecture

```
src/
├── content/
│   ├── config.ts
│   └── posts/             # .mdx files
├── pages/
│   ├── index.astro        # Home — last 10 posts
│   ├── about.astro
│   ├── contact.astro
│   ├── archive.astro
│   ├── tags/
│   │   ├── index.astro
│   │   └── [tag].astro
│   ├── posts/
│   │   └── [slug].astro
│   └── rss.xml.ts
├── layouts/
│   ├── Layout.astro       # Base HTML shell
│   └── PostLayout.astro   # Reading-width layout for posts
└── components/
    ├── Nav.astro
    ├── PostCard.astro
    ├── TagList.astro
    └── ThemeToggle.astro
```

The existing `Welcome.astro`, `Menu.astro`, starter assets, and current `Layout.astro` are replaced entirely.

---

## Data Model

Post frontmatter (enforced by Content Collections schema in `src/content/config.ts`):

```ts
{
  title: string;
  date: Date;
  description: string;   // one-line summary for cards and RSS
  tags: string[];        // lowercase slugs, e.g. ["writing", "tech"]
  draft?: boolean;       // defaults false; drafts excluded from production build
}
```

Slug is derived from filename — no slug field in frontmatter. Example: `my-first-post.mdx` → `/posts/my-first-post`.

---

## Pages

| Route | Purpose |
|---|---|
| `/` | Last 10 posts as PostCards, reverse-chronological. "View all" link to `/archive` when more than 10 posts exist. |
| `/archive` | All posts grouped by year. Compact one-line format: date + title + tags. No descriptions. |
| `/tags` | All tags alphabetically with post counts. |
| `/tags/[tag]` | PostCard list filtered to that tag. |
| `/posts/[slug]` | Individual post. Reading-width prose, title/date/tags header, tags repeated at bottom as links. |
| `/about` | Plain content page using base layout. |
| `/contact` | Plain content page with mailto link. No form. |
| `/rss.xml` | Astro endpoint. All non-draft posts, sorted by date descending. Title + description + link per entry (no full content). |

---

## Visual Design

**Typography:** Inter or Geist Sans for UI and body text. Monospace fallback for code blocks. Fonts loaded via `@fontsource` (self-hosted, no Google Fonts dependency).

**Layout:**
- Max content width: ~680px for post body, ~900px for list pages
- Centered with generous side padding
- No sidebars

**Color:** Near-black/near-white base with a single muted accent (desaturated blue or slate) for links and interactive elements.

**Nav:** Site name/title on the left, links on the right (`Archive`, `Tags`, `About`, `Contact`). No hamburger; stacks gracefully on mobile.

**PostCard:** Title, date, tag list, one-line description. No thumbnails or images.

**RSS discovery:** `<link rel="alternate">` in `<head>` and a link in the footer.

---

## Light/Dark Mode

- Default driven by `prefers-color-scheme` media query
- Manual `ThemeToggle` component overrides via `data-theme` attribute on `<html>`
- Preference persisted to `localStorage`
- Small inline script in `<head>` reads `localStorage` before first paint to prevent flash of wrong theme

---

## Out of Scope (for launch)

- Search
- Comments
- Newsletter/email subscription
- Post images or hero art
- Pagination (deferred until post count warrants it)
