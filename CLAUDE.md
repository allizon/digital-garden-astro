# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server at localhost:4321
npm run build     # Build production site to ./dist/
npm run preview   # Preview production build locally
npx astro check   # TypeScript/Astro type checking
```

## Architecture

This is an **Astro 6.1 static blog** (allizon.io) using MDX, Content Collections, and `@astrojs/rss`.

**Content:** Posts live in `src/content/posts/` as `.mdx` files. The schema is defined in `src/content.config.ts` (root-level — Astro 6.1 convention) using `defineCollection` + `glob` loader. Post entries use `post.id` (filename without extension) as the URL slug — not `post.slug`.

**Routing:** File-based via `src/pages/`. Key routes: `/` (home), `/posts/[slug]`, `/archive`, `/tags`, `/tags/[tag]`, `/about`, `/contact`, `/rss.xml`.

**Layouts:** `src/layouts/Layout.astro` is the base HTML shell (imports global CSS, renders Nav, includes theme flash-prevention script). `src/layouts/PostLayout.astro` wraps individual posts at reading width (680px).

**Theming:** CSS custom properties in `src/styles/global.css` drive light/dark mode. `[data-theme="dark"]` on `<html>` activates dark mode; a `prefers-color-scheme` media query handles the system default. A `localStorage`-backed inline script in `<head>` applies the saved preference before paint.

**Components:** `Nav.astro` (sticky header with `aria-current` active state), `ThemeToggle.astro` (reads/writes `data-theme` + localStorage), `PostCard.astro` (post preview with date/title/description/tags), `TagList.astro` (pill tag links).

**Dates:** All `toLocaleDateString` calls include `timeZone: 'UTC'` — Astro parses YAML dates as UTC midnight and local-timezone formatting would shift them by one day.

**TypeScript:** Strict mode via `astro/tsconfigs/strict`. Use `import { z } from 'zod'` directly — the `z` re-export from `astro:content` is deprecated in Astro 6.1.
