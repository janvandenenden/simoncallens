# Simon Callens Portfolio Website — Implementation Plan

## Context

Build a minimal, gallery-style portfolio for Simon Callens from a fresh Next.js 16 scaffold. The site showcases 12 works with a calm, precise, art-forward aesthetic (white background, black text, generous whitespace). Five routes, all driven by a single static data file. Target audience: collectors, galleries, interior architects.

The project already has Next.js 16.1.6, Tailwind v4, shadcn/ui configured, and the `cn()` utility ready. Use shadcn components where they add value.

**Note:** PRD references `/src/content/data.ts` but the project has no `/src` directory. Using `/content/data.ts` at root instead.

---

## Typography

**Dual font system** using Google Fonts via `next/font/google`:

| Role | Font | Usage |
|------|------|-------|
| **Display / Headings** | **Space Grotesk** | Site name, page titles, work titles, nav links |
| **Body / Details** | **Space Mono** | Descriptions, metadata, materials, credits, body text |

Both fonts from the same design family (by Colophon Foundry / Florian Karsten), giving visual cohesion with clear typographic contrast. Space Grotesk brings editorial elegance to headings; Space Mono adds precision and gallery-feel to details.

### Implementation in `app/layout.tsx`
- Import both via `next/font/google` as CSS variables (`--font-space-grotesk`, `--font-space-mono`)
- Replace current Geist fonts
- Map in globals.css: `--font-sans: var(--font-space-grotesk)`, `--font-mono: var(--font-space-mono)`
- Body default: `font-mono` (Space Mono)
- Headings / nav: `font-sans` (Space Grotesk)

---

## Phase 0: Project Documentation

### Create `plan.md` at project root
- Save this full implementation plan as the project PRD
- Serves as the single source of truth for all design and implementation decisions

### Create `CLAUDE.md` at project root
- Project overview: what the site is, who it's for, tech stack
- Key architectural decisions (font pairing, offset grid, featured home layout)
- File structure overview (content/data.ts as single data source, components/, app/ routes)
- Development commands (`npm run dev`, `npm run build`)
- **Self-updating rule**: CLAUDE.md must be kept in sync with the codebase — whenever files are added/removed, routes change, or architectural decisions are made, update CLAUDE.md accordingly

---

## Phase 1: Global Styling & Layout Cleanup

### Modify `app/globals.css`
- Remove the `.dark { ... }` block and `@custom-variant dark` line (white-only site)
- Simplify CSS variables: keep only `--background`, `--foreground`, `--border`, `--muted`, `--muted-foreground`, `--ring`, `--radius`
- Remove sidebar, chart, popover, destructive variables
- Set `--radius: 0` (no border radius)
- Map font variables: `--font-sans` → Space Grotesk, `--font-mono` → Space Mono
- Set body default to `font-mono`

### Modify `app/layout.tsx`
- Replace Geist fonts with Space Grotesk + Space Mono via `next/font/google`
- Update metadata to use `title.template: "%s — Simon Callens"` pattern
- Add `metadataBase`, `openGraph`, `twitter` config
- Remove `suppressHydrationWarning` (was for dark mode)
- Wrap children in `flex min-h-screen flex-col` structure with Header, main (`flex-1`), Footer

### Delete boilerplate SVGs from `public/`
- Remove `file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg`

---

## Phase 2: Data Layer

### Create `content/data.ts`
- Define types: `SiteConfig`, `Work`, `WorkImage`, `Exhibition`, `ContactBlock`
- Export `siteConfig` with name, Instagram URL, split email (user/domain for spam protection)
- Export `works: Work[]` — 12 placeholder entries with slugs, titles, years, descriptions, image paths
- Export `exhibitions: Exhibition[]` — empty array, ready for future use
- Export `aboutText: string` — placeholder biography
- Export `contactBlocks: ContactBlock[]` — populated with the actual data from PRD:
  - Workshop (Zaventem Ateliers address)
  - Phone (+32 474 33 02 31)
  - Info (email handled via siteConfig)
  - Business (Tentoon CommV, Bruges address, VAT)
- Slugs are explicit in data (e.g., `"work-title"`) matching `/public/works/<slug>/` directories

### Create `lib/works.ts`
- `getWorkBySlug(slug)` — find work by slug
- `getAdjacentWorks(slug)` — return prev/next works for detail page navigation

---

## Phase 3: Shared Components

### Create `components/header.tsx` (Server Component)
- Site name in **Space Grotesk** (uppercase, tracked) linking to `/`
- Nav links in **Space Grotesk**: Works (`/`), About, Exhibitions, Contact
- `text-muted-foreground` with `hover:text-foreground` transitions
- Responsive: stacked on mobile, row on `sm:`
- Use shadcn `Separator` below header

### Create `components/footer.tsx` (Server Component)
- Copyright year + site name
- Instagram link
- Separated from content with shadcn `Separator`

### Create `components/page-container.tsx`
- Reusable wrapper: `max-w-6xl px-6 py-12 sm:py-16`
- Accepts `className` for per-page overrides

### Create `components/work-card.tsx` (Server Component)
- CSS-only hover image swap using Tailwind `group` / `group-hover:`
- Both images mounted, crossfade via `opacity` + `transition-opacity duration-500`
- `aspect-[3/4]` container (portrait-friendly — most works are portrait)
- `object-cover` to fill the container regardless of actual image orientation
- Title in **Space Grotesk**, year + description in **Space Mono**
- Links to `/work/[slug]`

### Create `components/spam-protected-email.tsx` (Client Component)
- Receives `user` and `domain` props separately
- Displays `user[at]domain` in HTML (using `&#64;` entity)
- Assembles `mailto:` link only on click via JavaScript

---

## Phase 4: Pages

### 4.1 Home — `app/page.tsx` (Featured + Grid)

**Layout:** First work displayed large as a featured piece, remaining works in a uniform grid below.

```
Desktop:
┌─────────────────────────────────────┐
│         FEATURED WORK (full)        │  ← first work, spans full width
│         image + title + year        │
└─────────────────────────────────────┘
┌───────────┐ ┌───────────┐ ┌───────────┐
│  Work 2   │ │  Work 3   │ │  Work 4   │  ← 3-col grid
└───────────┘ └───────────┘ └───────────┘
┌───────────┐ ┌───────────┐ ┌───────────┐
│  Work 5   │ │  Work 6   │ │  Work 7   │
└───────────┘ └───────────┘ └───────────┘
...

Mobile: everything stacks single column
Tablet: featured full width, grid 2 columns
```

- Featured card: larger image (`aspect-[3/4]` on mobile, `aspect-[16/9]` on desktop via `sm:aspect-[16/9]`), uses `object-cover` to crop, bigger title text
- Grid cards: `aspect-[3/4]` (portrait-friendly, consistent with most works being portrait)
- Same hover image-swap behavior on all cards
- `object-cover` on all images ensures clean cards even when mixing portrait/landscape originals
- No hero text, no intro — the work speaks immediately

### 4.2 Work Detail — `app/work/[slug]/page.tsx` (Offset Grid)

**Layout:** Editorial Swiss-inspired offset grid where images and metadata are interleaved asymmetrically. Uses a 12-column CSS grid on desktop.

**Image handling:** Images are rendered at their **natural aspect ratio** (no forced containers) — critical for portrait-oriented artwork. Use `next/image` with explicit `width`/`height` and `className="w-full h-auto"` so images scale to column width while preserving proportions.

```
Desktop — 3 images (common case, portrait-heavy):

┌─────────────────────────────────────────────┐
│              IMAGE 1 (full width)            │  ← hero, cols 1-12
└─────────────────────────────────────────────┘

┌──────────────┐  ┌──────────────────────────┐
│  TITLE       │  │                          │
│  YEAR        │  │                          │
│  DESCRIPTION │  │       IMAGE 2            │  ← meta cols 1-4, image cols 5-12
│              │  │     (portrait OK here)   │
│  MATERIALS   │  │                          │
│  COLLAB      │  │                          │
│  PHOTO       │  │                          │
└──────────────┘  └──────────────────────────┘

┌─────────────────────────────────────────────┐
│              IMAGE 3 (full width)            │  ← closing, cols 1-12
└─────────────────────────────────────────────┘

◄ Previous                          Next ►
```

```
Desktop — 4 images:

┌─────────────────────────────────────────────┐
│              IMAGE 1 (full width)            │  ← hero
└─────────────────────────────────────────────┘

┌──────────────┐  ┌──────────────────────────┐
│  TITLE       │  │                          │
│  YEAR        │  │       IMAGE 2            │  ← meta + image side by side
│  DESCRIPTION │  │                          │
└──────────────┘  └──────────────────────────┘

         ┌──────────────────────────────────┐
         │           IMAGE 3                │  ← offset, cols 3-12
         └──────────────────────────────────┘

┌─────────────────────────────────────────────┐
│              IMAGE 4 (full width)            │  ← closing
└─────────────────────────────────────────────┘
```

```
Desktop — 5 images:

Same as 4 but adds:
┌──────────────────────────────┐  ┌─────────┐
│         IMAGE 4              │  │MATERIALS│  ← image cols 1-8, details cols 9-12
└──────────────────────────────┘  │COLLAB   │
                                  └─────────┘
IMAGE 5 full width closing
```

**Key implementation details:**
- 12-column grid: `grid grid-cols-12 gap-6 lg:gap-8`
- Images rendered at natural proportions (no aspect ratio forcing)
- Portrait images naturally occupy less horizontal space but more vertical — looks great in the offset grid columns
- Metadata blocks sit alongside images in the remaining columns, top-aligned
- On **mobile**: everything stacks full-width in linear order (metadata → images)
- `generateStaticParams()` for static generation
- `generateMetadata()` for per-work SEO (title, description, OG image)
- First image gets `priority`, rest lazy loaded
- Prev/Next navigation with shadcn `Separator` above

**Offset pattern logic — adapts to image count:**
- **3 images**: hero (full) → metadata + image 2 side-by-side → image 3 (full). All metadata in one block alongside image 2.
- **4 images**: hero → metadata + image 2 → image 3 (offset `col-start-3 col-span-10`) → image 4 (full)
- **5 images**: hero → metadata + image 2 → image 3 (offset) → image 4 + details sidebar → image 5 (full)
- **Metadata placement**: for 3 images, all metadata (title, year, description, materials, collab, photo credit) sits in the sidebar next to image 2. For 4-5 images, title/year/description go next to image 2, optional details (materials, collab, photo) go next to a later image.

### 4.3 About — `app/about/page.tsx`
- Portrait image + biography text
- Two-column on `md:` (portrait left, bio right), single column mobile
- `max-w-3xl` container
- Bio title in **Space Grotesk**, body in **Space Mono**

### 4.4 Exhibitions — `app/exhibitions/page.tsx`
- If empty: "To be announced." in Space Mono, centered
- If populated: structured list with title, venue, location, year
- Data structure ready for future entries

### 4.5 Contact — `app/contact/page.tsx`
- Structured blocks using the PRD data: Workshop, Phone, Info, Business
- `grid-cols-1 sm:grid-cols-2` layout
- Block labels in **Space Grotesk**, details in **Space Mono**
- Email uses `SpamProtectedEmail` component

---

## Phase 5: SEO & Polish

### Create `app/robots.ts`
- Allow all, point to sitemap

### Create `app/sitemap.ts`
- All static pages + all work detail pages from data

### Create `app/not-found.tsx`
- Minimal "Page not found." text

### Install shadcn components
- `Separator` — used between header/content, in detail pages, above footer

### Accessibility
- Semantic HTML (`header`, `nav`, `main`, `footer`, headings)
- Alt text on all images (from `WorkImage.alt` field)
- Focus states (Tailwind default outline)

---

## Files Summary

**New files (16):**
| File | Purpose |
|------|---------|
| `content/data.ts` | All content, types, and site config |
| `lib/works.ts` | Work lookup helpers |
| `components/header.tsx` | Site header + nav (Space Grotesk) |
| `components/footer.tsx` | Site footer |
| `components/page-container.tsx` | Reusable page wrapper |
| `components/work-card.tsx` | Grid card with hover image swap |
| `components/spam-protected-email.tsx` | Client-side email assembly |
| `app/page.tsx` | Home — featured + grid (rewrite) |
| `app/work/[slug]/page.tsx` | Work detail — offset grid layout |
| `app/about/page.tsx` | About page |
| `app/exhibitions/page.tsx` | Exhibitions placeholder |
| `app/contact/page.tsx` | Contact page |
| `app/not-found.tsx` | 404 page |
| `app/robots.ts` | Robots.txt |
| `app/sitemap.ts` | Sitemap |
| `public/works/` | Image directories (placeholders) |

**Modified files (2):**
| File | Changes |
|------|---------|
| `app/globals.css` | Remove dark mode, simplify vars, add font mappings |
| `app/layout.tsx` | Space Grotesk + Space Mono fonts, metadata, Header/Footer |

**Deleted files (5):** Boilerplate SVGs in `public/`

---

## Verification

1. `npm run dev` → check all 5 routes render correctly
2. Home page: verify featured work is larger, grid is 1/2/3 cols at breakpoints
3. Hover work cards → verify image crossfade
4. Click into a work → verify offset grid layout with interleaved metadata
5. Verify prev/next navigation works between works
6. Check fonts: headings = Space Grotesk, body = Space Mono
7. Mobile viewport → everything stacks cleanly
8. Contact page email → click opens mailto:, source has no raw email
9. `npm run build` → no errors, all static params generated
10. Check `<head>` → OG tags, title template, Twitter card
