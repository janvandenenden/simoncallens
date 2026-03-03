# Simon Callens — Portfolio Website

## Overview
Minimal, gallery-style portfolio for Simon Callens (furniture designer/sculptor). Target audience: collectors, galleries, interior architects. White background, black text, generous whitespace.

## Tech Stack
- **Framework:** Next.js 16.1.6 (App Router)
- **Styling:** Tailwind CSS v4 + shadcn/ui
- **Fonts:** Space Grotesk (headings/nav) + Space Mono (body/details) via `next/font/google`
- **Data:** Static — single file at `content/data.ts`

## Architecture

### Font System
- `--font-sans` → Space Grotesk (display/headings, nav links, work titles)
- `--font-mono` → Space Mono (body text, descriptions, metadata, credits)
- Body default is `font-mono`; headings/nav use `font-sans`

### Data Flow
All content lives in `content/data.ts`. No CMS, no API. Helper functions in `lib/works.ts`.

### Key Design Decisions
- **White-only site** — no dark mode
- **Featured + grid home layout** — first work large, rest in 3-col grid
- **Offset grid detail pages** — 12-col CSS grid, images/metadata interleaved asymmetrically
- **CSS-only hover image swap** — crossfade via opacity transition on work cards
- **Spam-protected email** — split user/domain, assembled via JS on click
- **No border radius** — `--radius: 0`

## File Structure

```
content/
  data.ts              # All content, types, site config
lib/
  utils.ts             # cn() utility (shadcn)
  works.ts             # getWorkBySlug(), getAdjacentWorks()
components/
  ui/separator.tsx     # shadcn separator
  header.tsx           # Site header + nav
  footer.tsx           # Site footer
  page-container.tsx   # Reusable page wrapper
  work-card.tsx        # Grid card with hover image swap
  spam-protected-email.tsx  # Client-side email assembly
app/
  layout.tsx           # Root layout (fonts, metadata, header/footer)
  globals.css          # Global styles, CSS variables
  page.tsx             # Home — featured work + grid
  not-found.tsx        # 404 page
  robots.ts            # Robots.txt
  sitemap.ts           # Sitemap
  about/page.tsx       # About page
  exhibitions/page.tsx # Exhibitions page
  contact/page.tsx     # Contact page
  work/[slug]/page.tsx # Work detail page
public/
  works/<slug>/        # Image directories per work
```

## Routes
| Path | Description |
|------|-------------|
| `/` | Home — featured work + grid of all works |
| `/work/[slug]` | Work detail with offset grid layout |
| `/about` | Portrait + biography |
| `/exhibitions` | Exhibition list (placeholder) |
| `/contact` | Contact blocks (workshop, phone, email, business) |

## Commands
- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run lint` — Run ESLint

## Self-Updating Rule
This file must be kept in sync with the codebase. When files are added/removed, routes change, or architectural decisions are made, update this file accordingly.
