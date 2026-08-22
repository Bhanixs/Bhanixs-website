# BHANIX(S) — Complete Site Extraction & Documentation

Prepared ahead of the BHANIXS brand rebuild. Every fact below is extracted directly from the source repository at `D:\Developer\Github-techteamixs1111\Bhanixs-website` (TanStack Start / React 19 / Vite / Tailwind v4, deployed to Cloudflare Workers as `bhanixs`, serving `dist/client` + `dist/server/server.js` per `wrangler.jsonc`). No content was scraped from the live minified bundle; the one live-site check performed was a single lightweight fetch of `http://bhanixs.tech-teamixs1111.workers.dev/` to sanity-check `<title>` — see the note at the end of Section 01.

---

## SECTION 01 — COMPLETE PAGE INVENTORY

| Route (URL) | Source file | Route id | Components rendered (in order) |
|---|---|---|---|
| `/` | `src/routes/index.tsx` | `/` | `Hero`, `Process`, `Services`, `CaseStudies`, `Testimonials`, `Calculator`, `Pricing`, `Faq`, `CtaBand` |
| `/services` | `src/routes/services.tsx` | `/services` | Custom hero section, `Services`, `Process`, `CtaBand` |
| `/pricing` | `src/routes/pricing.tsx` | `/pricing` | Custom hero section, `Pricing`, `Calculator`, `Faq`, `CtaBand` |
| `/projects` | `src/routes/projects.tsx` | `/projects` | Custom hero, category filter bar, `CaseStudyCard` grid (all 17 entries, filterable), `CtaBand` |
| `/about` | `src/routes/about.tsx` | `/about` | Custom hero, Principles grid, Locations strip, `CtaBand` |
| `/team` | `src/routes/team.tsx` | `/team` | Custom hero, 6-member team grid, `CtaBand` |
| `/contact` | `src/routes/contact.tsx` | `/contact` | Custom hero/contact split (contact channels + form) — no shared sections, no `CtaBand` |
| `/case-studies` | `src/routes/case-studies.index.tsx` | `/case-studies/` | Custom hero, `CaseStudyCard` grid (top-level studies only — `!c.parentSlug`), `CtaBand` |
| `/case-studies/$slug` | `src/routes/case-studies.$slug.tsx` | `/case-studies/$slug` | Dynamic case-study detail (hero, Challenge, Solutions, Impact, Tool Stack, Products/children, Screenshots, Videos, Client Feedback, More, `CtaBand`) — sections conditionally rendered based on data present |
| n/a (404) | `src/routes/__root.tsx` → `NotFoundComponent` | — | Centered "404 / Page not found" with "Go home" link |
| n/a (error boundary) | `src/routes/__root.tsx` → `ErrorComponent` | — | Centered "This page didn't load" with "Try again"/"Go home" |

Global chrome wrapping every route (`src/routes/__root.tsx`): `<PillNav />` (fixed header) → `<main><Outlet /></main>` → `<Footer />` → `<Toaster />` (sonner toast portal).

Total routable pages: **9** (`/`, `/services`, `/pricing`, `/projects`, `/about`, `/team`, `/contact`, `/case-studies`, `/case-studies/$slug` ×17 concrete slugs).

**Live-site sanity check**: A single WebFetch of `http://bhanixs.tech-teamixs1111.workers.dev/` was performed per instructions. The rendered page's inferred heading/title matched **"Bhanix — Deeptech engineering for frontier teams"**, which is the exact `title` meta set in `src/routes/index.tsx` line 15. No drift detected between the live deployment and this repository's `index.tsx`. (Full raw `<title>`/`<meta name="description">` tags could not be extracted verbatim from the rendered-text fetch — COULD NOT EXTRACT beyond the heading-level match; this does not affect the source-level meta documented in Section 06, which is ground truth from the route files themselves.)

---

## SECTION 02 — DESIGN SYSTEM EXTRACTION

Source of truth: `src/styles.css` (Tailwind v4 `@theme inline` + `:root` custom properties, no separate `tailwind.config.*` — Tailwind v4 is CSS-config-only here). shadcn config in `components.json` (`style: "new-york"`, `baseColor: "slate"`, `cssVariables: true`, no class prefix).

### 02.1 Colour system (current site — pre-rebuild)

All colours are defined as OKLCH custom properties on `:root` in `src/styles.css` lines 45–75, then aliased into Tailwind utility names via the `@theme inline` block (lines 7–43), e.g. `--color-primary: var(--primary)` makes `bg-primary`/`text-primary` etc. available.

| Token (CSS var) | OKLCH value | Approx. hex | Tailwind utility exposed | Usage | Occurrence count in components read |
|---|---|---|---|---|---|
| `--background` | `oklch(0.07 0.03 240)` | `#0A0D14` (approx, near-black navy) | `bg-background`, `text-background` | Page background, footer bg, nav mobile overlay base | ~15 files |
| `--foreground` | `oklch(0.97 0.005 240)` | `#F7F7F8` (near-white) | `text-foreground` | Primary body text, headings | Nearly every component |
| `--card` / `--secondary` / `--muted` | `oklch(0.14 0.04 238)` | `#181C26` approx | `bg-card`, `bg-secondary`, `bg-muted` | Card fills, nav pill fill, mobile nav | Nav, Footer, forms |
| `--popover` | `oklch(0.14 0.04 238)` | same as card | `bg-popover` | Select/dropdown menus | contact.tsx Select |
| `--primary` / `--accent` / `--ring` | `oklch(0.60 0.26 232)` | **~`#5B6BFF`–`#4F5EF0` (electric indigo/blue)** | `bg-primary`, `text-primary`, `border-primary`, focus rings | CTAs, active nav pill, accents, borders on hover, logo mark chip | 20+ occurrences — dominant brand colour, **flagged for full replacement per brand brief** |
| `--primary-foreground` | `oklch(0.97 0.005 240)` | near-white | `text-primary-foreground` | Text on primary-filled buttons | PillButton "primary" variant |
| `--primary-glow` | `oklch(0.72 0.22 228)` | **~`#8B93FF` (lighter periwinkle-blue)** | `text-primary-glow`, gradient stops | Icon accents, gradient text (`GradientNumber`), progress bar gradient end, "live"/status labels | Services mocks, Process mocks, GradientNumber, stats |
| `--muted-foreground` | `oklch(0.62 0.03 235)` | `#8D93A0` approx (slate grey) | `text-muted-foreground` | Secondary/body copy, captions | Nearly every section |
| `--destructive` | `oklch(0.62 0.22 25)` | `#E2544A` approx (red) | `text-destructive`, `bg-destructive` | Form validation, destructive buttons (unused on marketing pages) | shadcn primitives only |
| `--border` | `oklch(1 0 0 / 16%)` | white @ 16% alpha | `border-border` | Standard hairline dividers, section top borders | Every section (`border-t border-border`) |
| `--border-strong` | `oklch(1 0 0 / 24%)` | white @ 24% alpha | `border-border-strong` | Card borders (higher-contrast) | CaseStudyCard, Pricing, Testimonials, FAQ items |
| `--input` | `oklch(1 0 0 / 10%)` | white @ 10% alpha | `border-input` (shadcn Input/Select/Textarea) | Contact form fields | contact.tsx |
| `--surface-elevated` | `oklch(0.12 0.04 238)` | `#141822` approx | `bg-surface-elevated` | (declared, not directly observed in read files — likely elevated panels) | — |
| `--surface-card` | `oklch(0.16 0.05 236)` | `#1B1F2C` approx | `bg-surface-card` | Primary card background across the whole site (Services, Testimonials, Pricing, FAQ, CaseStudyCard, Team, Contact channels/form) | 15+ occurrences — **second most-used surface colour** |
| `--surface-card-hover` | `oklch(0.20 0.05 234)` | `#232838` approx | `bg-surface-card-hover` | Card hover state | Services, CaseStudyCard, Team, Projects filter buttons |
| `--eyebrow` | `oklch(0.72 0.18 230)` | `#8FA0F0` approx (light indigo) | `text-eyebrow` (via `.eyebrow` utility + `bg-eyebrow` pulse dot) | All "eyebrow" micro-labels (`Eyebrow` component) sitewide | Every section header |
| `--gradient-hero` (not a colour, a gradient) | `radial-gradient(ellipse 80% 60% at 85% -10%, oklch(0.60 0.26 232 / 0.5), transparent 60%)` | indigo glow | `.hero-gradient` utility | Page-top ambient glow on About, Contact, Services, Pricing, Projects, Team, Case Studies hero sections, CtaBand | 8 pages |
| `--shadow-glow` | `0 0 80px -10px oklch(0.60 0.26 232 / 0.55)` | indigo glow shadow | inline `shadow-[var(--shadow-glow)]` | Nav logo chip, primary buttons, featured pricing tier, CTA band border glow | Nav, Footer, PillButton primary, Pricing featured card |
| `--shadow-card` | `0 10px 40px -10px oklch(0 0 0 / 0.6)` | black soft shadow | inline `shadow-[var(--shadow-card)]` | Nav pill, Process sticky cards | PillNav, Process.tsx |

**Ad-hoc Tailwind palette colours used outside the token system** (raw Tailwind classes, not custom properties — these are inconsistencies a rebuild should also catch):
- `emerald-400` — status/online dots (Process `MockBrief`, `MockLaunch`; multiple "healthy"/"live" indicators)
- Team page uses raw Tailwind gradient stops per member: `emerald-500`, `purple-500`, `cyan-500`, `pink-500`, `amber-500`, `indigo-500`, `blue-500`, `violet-500` (in `from-x/30 to-y/10` gradient monogram tiles)
- Case study `tone` field in `src/data/caseStudies.ts` uses ad-hoc Tailwind gradients per company: `from-indigo-500/30`, `from-blue-500/30`, `from-green-500/30`, `from-purple-500/30`, `from-pink-500/25`, `from-cyan-500/25`, `from-emerald-500/25`, `from-amber-500/25`, `from-rose-500/25`, `from-violet-500/30`, `from-orange-500/30`, `from-slate-500/30` — **17 distinct one-off gradients**, none tied to the design-token system. A rebuild should replace all of these with the teal palette or a systematic secondary palette.
- `HeroSphere.tsx` (three.js orb — currently **unused**, see 04.1) hardcodes `color="#5b48ff"`, `emissive="#7c6cff"`, point light colors `#a89cff`, `#4f46e5` — all indigo/violet, matching the primary hue family but as raw hex, not tokens.

### 02.2 Target colour palette (from `v2/css/design-system.css` — authoritative per brand brief)

| Token | Value | Intended use |
|---|---|---|
| `--bg-primary` | `#0D1117` | Main background (Obsidian) |
| `--bg-elevated` | `#111820` | Card backgrounds |
| `--bg-section` | `#161D2A` | Section alternator |
| `--bg-light` | `#F8F6F1` | Cream — case-study sections |
| `--bg-footer` | `#080C11` | Footer (deeper than primary bg) |
| `--teal-primary` | `#1D9E75` | **Brand primary** (replaces all indigo/blue) |
| `--teal-light` | `#00C2B2` | Accent teal |
| `--teal-deep` | `#085041` | Deep teal |
| `--teal-subtle` | `rgba(29,158,117,0.08)` | Subtle tinted backgrounds |
| `--teal-border` | `rgba(29,158,117,0.25)` | Tinted borders |
| `--gold` | `#C9A84C` | Premium/Group moments only |
| `--gold-light` | `#E8C97A` | Gold accent |
| `--border-default` | `#1E2D3D` | Default borders |
| `--border-strong` | `#2A3F57` | Strong borders |
| `--border-teal` | `rgba(29,158,117,0.4)` | Teal-tinted borders |
| `--text-primary` | `#FFFFFF` | Primary text |
| `--text-secondary` | `#94A3B8` | Secondary text |
| `--text-muted` | `#4A5568` | Muted text |
| `--text-teal` | `#1D9E75` | Teal text |
| `--text-light-bg` | `#0D1117` | Text on cream sections |
| `--success` / `--error` | `#1D9E75` / `#E24B4A` | Status colours |

### 02.3 Typography — current (pre-rebuild)

Declared in `src/styles.css` `@theme inline` (lines 40–42) and loaded via Google Fonts `<link>` in `src/routes/__root.tsx` (lines 92–94):
`Inter:wght@300;400;500;600;700` + `Inter+Tight:wght@400;500;600;700` + `JetBrains+Mono:wght@400;500`.

| Token | Stack | Utility class | Usage |
|---|---|---|---|
| `--font-sans` | `"Inter", ui-sans-serif, system-ui, sans-serif` | default body (no class needed — set on `body`) | All body copy |
| `--font-display` | `"Inter Tight", "Inter", ui-sans-serif, sans-serif` (+ `font-feature-settings: "ss01"`) | `.font-display` | All headings (`h1`–`h3`), stat numbers, nav brand wordmark, card titles |
| `--font-mono` | `"JetBrains Mono", ui-monospace, monospace` | `.font-mono` | Eyebrows, technical labels, mock-UI micro-copy, stack chips, footer version tag |

**Font-size table** (Tailwind default scale used directly, no custom `--text-*` tokens exist in `styles.css` — sizes are literal Tailwind utility classes observed in components):

| Tailwind class | Size (px) | Where used |
|---|---|---|
| `text-[10px]` | 10px | Mock-UI micro-labels, tool-stack chip labels, stat sub-labels |
| `text-[11px]` | 11px | `Meta` label in case-study hero |
| `text-xs` | 12px | Eyebrow base (`.eyebrow` = 0.72rem ≈ 11.5px, close to `text-xs`), badges, footer copyright |
| `text-sm` | 14px | Nav links, muted body copy, form labels |
| `text-base` | 16px | Default body |
| `text-lg` | 18px | Larger intros (About/Contact hero paragraphs) |
| `text-xl` | 20px | Testimonial quote, card titles (small) |
| `text-2xl` | 24px | Service card titles, principle titles |
| `text-3xl`–`text-4xl` | 30–36px | Case-study detail section headings (mobile) |
| `text-5xl`–`text-7xl` | 48–72px | Section H2s and page H1s at desktop breakpoints (`sm:text-6xl`, `lg:text-7xl`) |

**Letter-spacing / line-height utilities in use**: `tracking-tight` (headings), `leading-[0.93]`/`leading-[1]`/`leading-[1.05]`/`leading-[1.1]`/`leading-snug`/`leading-relaxed` (all literal Tailwind arbitrary values per-component, no shared token), `.eyebrow` custom class sets `letter-spacing: 0.28em` explicitly plus Tailwind `tracking-[0.28em]` used ad hoc in Process step badges.

`.eyebrow` utility (styles.css lines 94–101):
```css
.eyebrow {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--eyebrow);
  font-weight: 500;
}
```

### 02.4 Typography — target (from `v2/css/design-system.css`)

- `--font-display: 'Syne', sans-serif` — headlines, nav brand
- `--font-body: 'DM Sans', sans-serif` — body, UI, CTAs
- `--font-mono: 'JetBrains Mono', monospace` — technical callouts only (retained from current site)
- Scale: `--text-xs` 12px … `--text-6xl` 80px (full 10-step scale, see file lines 55–64)
- Letter-spacing tokens: `--tracking-tight -0.02em`, `--tracking-normal 0`, `--tracking-wide 0.08em`, `--tracking-wider 0.14em`
- Line-height tokens: `--leading-tight 1.1`, `--leading-snug 1.3`, `--leading-normal 1.6`, `--leading-relaxed 1.75`
- Google Fonts import: `Syne:wght@400;500;600;700;800` + `DM+Sans:...;300;400;500;600` + `JetBrains+Mono:wght@400;500`

### 02.5 Spacing / container / radius (current)

No formal `--space-*` scale exists in `src/styles.css` — spacing is literal Tailwind utilities per component (`py-32 sm:py-40` section vertical rhythm is the dominant pattern; `px-6` horizontal page gutter inside `mx-auto max-w-7xl`).

Recurring container pattern across nearly every section: `mx-auto max-w-7xl px-6` (case-study inner sections sometimes use `max-w-4xl`/`max-w-5xl`/`max-w-6xl` for narrower reading columns).

Recurring section vertical rhythm: `py-32 sm:py-40` (Process, Services, CaseStudies, Testimonials, Calculator, Pricing, FAQ); `py-24 sm:py-32` for `CtaBand` (slightly tighter).

**Border-radius** — driven by `--radius: 0.875rem` (14px) base token, expanded via `@theme inline` (lines 8–14):
| Token | Formula | Value |
|---|---|---|
| `--radius-sm` | `radius - 4px` | 10px |
| `--radius-md` | `radius - 2px` | 12px |
| `--radius-lg` | `radius` | 14px |
| `--radius-xl` | `radius + 4px` | 18px |
| `--radius-2xl` | `radius + 8px` | 22px |
| `--radius-3xl` | `radius + 12px` | 26px |
| `--radius-4xl` | `radius + 16px` | 30px |

Most cards use Tailwind's literal `rounded-3xl` (24px Tailwind default, **not** the same as the theme's `--radius-3xl` 26px — Tailwind's own `rounded-3xl`/`rounded-2xl` utilities are used directly rather than the custom radius tokens in most components, e.g. Services, Testimonials, Pricing, CaseStudyCard all use plain `rounded-3xl`/`rounded-2xl`). `rounded-full` used extensively for pills (nav, buttons, badges, progress bars, avatars).

**Target spacing/radius** (`v2/css/design-system.css`): explicit `--space-1` (4px) through `--space-32` (128px); `--radius-sm` 4px, `--radius-md` 8px, `--radius-lg` 12px, `--radius-xl` 16px, `--radius-full` 9999px; `--container-max: 1200px`, `--container-pad: clamp(1.5rem, 5vw, 4rem)`.

### 02.6 Box-shadow values (current)

| Token / literal | Value | Usage |
|---|---|---|
| `--shadow-glow` | `0 0 80px -10px oklch(0.60 0.26 232 / 0.55)` | Nav logo chip, PillButton primary variant, Pricing featured tier, CtaBand accents |
| `--shadow-card` | `0 10px 40px -10px oklch(0 0 0 / 0.6)` | Nav pill wrapper, Process StickyCard |
| Inline arbitrary `shadow-[inset_0_1px_0_0_oklch(1_0_0_/_0.06)]` | inner top highlight (glass-card effect) | Services cards, Testimonials, Pricing tiers, CaseStudyCard, Team cards |
| Inline arbitrary `shadow-[0_10px_40px_-20px_oklch(0_0_0_/_0.6)]` | soft drop shadow | Case-study screenshot/video tiles |
| Inline arbitrary combined `shadow-[inset_0_1px_0_0_oklch(1_0_0_/_0.06),0_10px_40px_-20px_oklch(0_0_0_/_0.8)]` | glass + drop shadow combo | Services cards, Pricing tiers, CaseStudyCard, Team cards |

### 02.7 Z-index layers (current)

No formal z-index scale/tokens exist. Literal values found:
- `z-50` — `PillNav` fixed header (`src/components/layout/PillNav.tsx` line 31)
- `z-[60]` — mobile nav full-screen overlay (line 75) — one level above header so it covers it
- `z-10` — inner content layer above decorative gradient/blur backgrounds (`relative z-10`) in `CompanyLogoTile`, Team cards
- Default stacking (`relative`/`absolute` with no explicit z-index) used for all decorative blur-glow `absolute` divs behind card content

**COULD NOT EXTRACT**: Toast (`sonner`) z-index and Radix portal z-indices are controlled internally by the `sonner`/`radix-ui` packages, not visible in first-party source — would require runtime inspection.

---

## SECTION 03 — NAVIGATION — COMPLETE EXTRACTION

Source: `src/components/layout/PillNav.tsx` (111 lines).

### 03.1 Structure

- **State**: `scrolled` (boolean, `useState`) toggled by a `scroll` listener (`passive: true`) checking `window.scrollY > 24`; `open` (boolean, `useState`) for mobile menu.
- **Effect**: `useEffect` on mount registers/cleans up the scroll listener; runs `onScroll()` once immediately to set initial state.
- **Desktop header** (`<header>`): `fixed top-0 inset-x-0 z-50 transition-all duration-500`, padding-top animates between `pt-6` (top of page) and `pt-3` (scrolled) — a 500ms CSS transition, not framer-motion.
  - Inner row: `mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6`
  - **Logo/brand** (`Link to="/"`): pill chip `flex items-center gap-2 rounded-2xl bg-card/70 backdrop-blur-xl border border-border px-3.5 py-2.5 shadow-[var(--shadow-card)]`. Inside: a `size-7` rounded-md `bg-primary` square with `shadow-[var(--shadow-glow)]` containing a smaller `size-3` `bg-primary-foreground/90` inner square (abstract logo mark — **not an image/svg logo file**, purely CSS boxes), plus text `Bhanix` in `font-display font-semibold tracking-tight`.
  - **Desktop nav links** (`hidden md:flex`): pill container `rounded-full bg-card/70 backdrop-blur-xl border border-border px-2 py-2 shadow-[var(--shadow-card)]`. Links: Services (`/services`), Projects (`/projects`), Case Studies (`/case-studies`), Pricing (`/pricing`), About (`/about`), Team (`/team`) — **6 links, in that exact order**. Each link: `px-4 py-2 text-sm text-foreground/70 hover:text-foreground rounded-full transition-colors hover:bg-secondary/60`; active route gets `activeProps={{ className: "text-foreground bg-secondary/80" }}` (TanStack Router's built-in active-link styling, no manual `usePathname` check).
  - **Right side**: `PillLink to="/contact" variant="white" size="sm"` labeled "Book a Call" (`hidden sm:inline-flex` — hidden below `sm`), plus a hamburger `<button>` (`md:hidden`) with `Menu` icon (lucide-react) that sets `open(true)`.
- **Mobile overlay** (rendered only when `open === true`, no exit animation — pure conditional mount): `fixed inset-0 z-[60] bg-background/95 backdrop-blur-xl animate-in fade-in` (uses `tw-animate-css`'s `animate-in fade-in` utility — a CSS-based one-shot fade, not framer-motion).
  - Top row: brand link "Bhanix" + close button (`X` icon) that sets `open(false)`.
  - Nav list: same 6 links + a 7th "Contact" link (styled `text-primary`), each `text-3xl font-display tracking-tight`, vertically stacked `flex flex-col items-center gap-6`, each `onClick` also closes the menu.

### 03.2 Exact link set and hrefs

| Label | `to` | Notes |
|---|---|---|
| Services | `/services` | |
| Projects | `/projects` | |
| Case Studies | `/case-studies` | |
| Pricing | `/pricing` | **Marked for removal per brand brief (Section 10)** |
| About | `/about` | |
| Team | `/team` | **Marked for removal per brand brief (Section 10)** |
| Book a Call (CTA, desktop only ≥`sm`) | `/contact` | `PillLink variant="white"` |
| Contact (mobile menu only, 7th item) | `/contact` | Not present in desktop nav — only reachable via the "Book a Call" CTA button or mobile menu |

### 03.3 Animations / interaction

- Header padding transition: CSS `transition-all duration-500` on scroll-state class toggle (JS-driven className swap, not framer-motion).
- Link hover: CSS `transition-colors` (Tailwind default duration, ~150ms) on `hover:text-foreground hover:bg-secondary/60`.
- Mobile overlay entrance: `tw-animate-css` `animate-in fade-in` (CSS keyframe, default duration from that library — **COULD NOT EXTRACT exact ms without reading the `tw-animate-css` package internals**, not vendored/customized in this repo).
- No `IntersectionObserver`, no scroll-linked `framer-motion` values in the nav — the scroll behavior is a simple boolean threshold via `window.scrollY`.

### 03.4 Footer (adjacent chrome, `src/components/layout/Footer.tsx`)

- `<footer className="border-t border-border bg-background">`, inner `mx-auto max-w-7xl px-6 py-20`.
- Two-column grid (`lg:grid-cols-[1.4fr_2fr]`): left = brand mark (same CSS-box logo as nav, `size-8` this time) + tagline paragraph: *"Bhanix is a deeptech engineering studio. We build the AI, robotics, on-chain, and spatial systems that move the frontier forward."* + `<Eyebrow>All systems operational</Eyebrow>`.
- Right = two link columns, **"Services"** (Production AI Systems, Intelligent Automation, Web3 & On-chain, Spatial Computing — all four link to `/services`, not deep-linked to anchors) and **"Company"** (About → `/about`, Case Studies → `/case-studies`, Pricing → `/pricing`, Contact → `/contact`).
- Bottom bar: `© {new Date().getFullYear()} Bhanix. All rights reserved.` (dynamically computed year via `new Date()`) and a right-aligned mono tag `v.04 / MIDNIGHT` (hardcoded version/build-name easter egg, `font-mono tracking-widest`).

---

## SECTION 04 — HOMEPAGE — SECTION BY SECTION

Homepage composition (`src/routes/index.tsx`): `Hero → Process → Services → CaseStudies → Testimonials → Calculator → Pricing → Faq → CtaBand`.

### 04.1 Hero (`src/components/sections/Hero.tsx`, 87 lines)

**Identity**: Full-viewport-height video-style hero (actually a static background **image**, not video, despite two `.mp4` files existing in `public/` — see note below) with logo marquee directly beneath.

**Content (exact copy)**:
- H1: `Engineer the future. ` + `<span className="text-foreground/65">Ship the impossible.</span>` — rendered as one heading with the second clause dimmed to 65% opacity.
- CTA: `Book a Call` with a trailing `ArrowRight` icon (lucide-react, `size-4`), linking to `/contact`.

**Layout**:
- `<section className="relative h-screen overflow-hidden">`
- Background: `<img src="/bg--bhanix.jpg" ... className="absolute inset-0 w-full h-full object-cover" aria-hidden />` — **this is a static JPEG, not the `.mp4` files** (`public/bg-2.mp4`, `public/bg-vid.mp4` exist in `public/` but are **not referenced anywhere in Hero.tsx or any other read component** — see Section 07 for orphaned-asset flag).
- Top gradient strip: `absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background/50 to-transparent` (subtle darkening for nav legibility, only ~15% of viewport height per the code comment).
- Bottom gradient block: `absolute inset-x-0 bottom-0 bg-gradient-to-t from-background to-transparent pt-32 pb-10`, containing the H1 + CTA in a `flex flex-col sm:flex-row sm:items-end sm:justify-between` row.
- H1 classes: `font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.93] tracking-tight`.

**Logo marquee** (directly below hero, separate `<div>` not inside the `<section>`):
- `border-b border-border bg-background py-7`, inner `mx-auto max-w-7xl px-6`, then `relative overflow-hidden` wrapping a `flex items-center gap-10 whitespace-nowrap animate-marquee` row.
- Logos array (6 entries, tripled via `[...logos, ...logos, ...logos]` for seamless infinite scroll illusion): Erthaloka, Arteco, Cravent, Travellers Triibe, XplorED, Vivium — each rendered as `<img>` inside a `shrink-0 bg-white rounded-lg px-4 py-2 h-11` white chip with `opacity-80 hover:opacity-100 transition-opacity`.
- Left/right edge fade masks: two `absolute inset-y-0 w-24` gradient overlays (`from-background to-transparent` / `from-background`... reversed) to fade the marquee into the page edges.

**Animations**:
- `motion.h1`: `initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}` — page-load entrance, no scroll trigger (runs once on mount).
- `motion.div` (CTA wrapper): `initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }}`.
- Logo marquee: pure CSS `animate-marquee` (defined in `styles.css` lines 108–112): `@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } } .animate-marquee { animation: marquee 40s linear infinite; }` — 40-second linear infinite loop, translating by exactly half the tripled-width row so it seams perfectly.

**HeroSphere.tsx** (`src/components/three/HeroSphere.tsx`, 48 lines) — **a react-three-fiber component exists but is NOT imported or rendered anywhere in `Hero.tsx` or any route file read.** It defines a `Canvas` with a `Float`-wrapped, `MeshDistortMaterial`-shaded `Sphere` ("GlowingOrb") that self-rotates via `useFrame` (`rotation.y += elapsedTime * 0.15`, `rotation.x = sin(elapsedTime * 0.2) * 0.15`), colored `#5b48ff`/emissive `#7c6cff`, lit by an ambient light and two point lights (`#a89cff`, `#4f46e5`). This is a **dead/orphaned component** — confirmed unused by grepping all `src/routes/*.tsx` and `src/components/sections/*.tsx` imports; only `HeroSphere.tsx` itself references it. Flag for the rebuild team: either wire it in or delete it.

### 04.2 Process (`src/components/sections/Process.tsx`, 269 lines) — "How it works."

**Identity**: Scroll-driven sticky-stacked 3-card sequence, each card pairs copy with a bespoke "mock UI" panel.

**Content (exact copy)**:
- Eyebrow: `Process`
- H2: `How it works.`
- Sub: `A focused, senior team. Three deliberate phases. No bloat, no agency overhead.`
- **Step 01 — Discover**: title `Share your vision.`, body *"Tell us what you're building — the problem, the constraints, the stack. We sign mutual NDA on day one and align on outcomes inside a week."*
- **Step 02 — Engineer**: title `We engineer the system.`, body *"A senior squad ships architecture, prototypes, and production code in tight cycles. Weekly demos. You own everything from day one."*
- **Step 03 — Launch**: title `Launch and scale.`, body *"We harden, observability-wrap and hand over with full runbooks. Continued retainer for evolution, on-call, or new verticals."*

**Layout**: `py-32 sm:py-40`, `max-w-7xl` container. Each `StickyCard` wraps in `<div className="sticky" style={{ top: `${96 + index * 28}px` }}>` — a **staggered sticky-stack** where card 1 pins at 96px, card 2 at 124px, card 3 at 152px, so as the user scrolls each subsequent card slides up and stacks slightly below the previous one's top edge. Trailing `<div className="h-[20vh]" />` gives the last card room to fully pin before the section ends.

Each card (`motion.article`): `relative grid md:grid-cols-2 gap-8 md:gap-12 items-center rounded-3xl border border-border bg-card/80 backdrop-blur-xl p-8 md:p-12 overflow-hidden shadow-[var(--shadow-card)]`, with two decorative blurred glow circles (`absolute -right-24 -top-24 size-72 rounded-full bg-primary/20 blur-3xl` and a second smaller one bottom-left in `primary-glow/10`).

Left half: step badge (numbered circle `size-10 rounded-full bg-primary` + mono label `Step {n} / {total} · {tag}`), `h3` title (`font-display text-3xl sm:text-4xl lg:text-5xl`), body paragraph. Right half: the mock panel (`step.mock`).

**Mock UI panels** (three bespoke components, each a distinct fake product screenshot):
1. **`MockBrief`** (Discover): header row with pulsing green status dot (`animate-pulse-soft`) + "New brief · draft" mono label + "NDA · signed" tag. Four animated rows (Project/Stack/Timeline/Budget key-value pairs) that stagger in via `motion.div` (`initial x:-10→0`, `whileInView`, `viewport once:true`, `delay: 0.1 + i*0.12`). Footer "Continue →" pill button (non-functional, decorative).
2. **`MockEngineering`** (Engineer): header "Build pipeline / live". A horizontally auto-scrolling marquee row of 6 stack icons (Bot, Cpu, Database, Box, Sparkles, Zap from lucide-react, tripled for loop) using the same `animate-marquee` CSS keyframe as the Hero logo strip. Three animated progress bars (Architecture 92%, Core services 74%, Hardening 41%) using `.animate-progress` keyframe (`progress-fill` 0%→`var(--progress)` over 2.4s ease-out, set via inline CSS custom property per bar). A spinning `RotateCw` icon in a bordered circle (`animate-spin-slow`, 4s linear infinite) with a blurred glow behind it.
3. **`MockLaunch`** (Launch): header "Production · p95 latency / ↑ healthy". A 12-bar sparkline (heights 40–92%) that scale in from `scaleY:0→1` per-bar with `delay: i*0.05` (staggered bar-chart reveal, `whileInView` triggered). Three stat tiles (99.98% Uptime / 42ms p95 / 12x Throughput). Footer row with a blinking green dot (`.animate-blink`, 1.4s ease-in-out infinite opacity flicker) + "Deploy v4.12 rolling to edge…" text.

**Scroll-linked motion**: each `StickyCard` uses `useScroll({ target: ref, offset: ["start end", "end start"] })` and derives `scale = useTransform(scrollYProgress, [0,0.5,1], [1,1,0.96])` and `opacity = useTransform(scrollYProgress, [0,0.5,1], [1,1,0.7])` — cards subtly shrink and fade to 96%/70% as the *next* card scrolls up to overlap them, applied as inline `style={{ scale, opacity }}` on the `motion.article`.

### 04.3 Services (`src/components/sections/Services.tsx`, 148 lines) — "What we engineer."

**Content (exact copy)**:
- Eyebrow: `Services`; H2: `What we engineer.`; intro: `Four verticals, one senior team. Every engagement ships production code — not slide decks.`
- 4 service cards, each: icon (lucide-react), title, body, 4 mono "chips":
  1. **Production AI Systems** (`Brain` icon) — *"Custom transformer training, RAG pipelines, computer vision, evals, and inference infra ready for production scale."* Chips: LLM Fine-tuning, Computer Vision, RAG, Evals.
  2. **Intelligent Automation** (`Cpu` icon) — *"Real-time control, sensor fusion, ROS2 stacks, and edge inference — from prototype to fleet deployment."* Chips: ROS2, Sensor Fusion, FPGA, Edge AI.
  3. **Web3 & On-chain** (`Boxes` icon) — *"ZK-rollups, smart-contract audits, institutional-grade protocols and on-chain primitives that hold up."* Chips: ZK Rollups, Solidity, Audits, L2.
  4. **Spatial Computing** (`Glasses` icon) — *"Industrial digital twins, immersive training simulations, and spatial computing interfaces for Vision Pro and Quest."* Chips: Unreal 5, WebXR, Digital Twins, VisionOS.

**Layout**: `id="services"` section, `py-32 sm:py-40 border-t border-border`, `mt-16 grid gap-5 md:grid-cols-2` (2×2 grid ≥`md`).

Each card: `group relative rounded-3xl border border-border-strong bg-surface-card p-8 overflow-hidden hover:border-primary/40 hover:bg-surface-card-hover` + combined inset/drop shadow (see 02.6). A decorative glow (`absolute -right-20 -top-20 size-48 rounded-full bg-primary/10 blur-3xl`) fades in on hover (`opacity-0 group-hover:opacity-100 transition-opacity`). Inside a bordered inner panel (`rounded-2xl border border-border-strong bg-background/80 p-5 mb-8`) sits the per-card **mock**, then icon (`size-11` rounded box, `bg-primary/15 ring-1 ring-primary/30`) + title + body + chip row.

**Mock panels** (bespoke per card, all decorative/non-functional):
- `ModelMock`: mono epoch/loss readout, animated progress bar (`animate-pulse-soft`), val_acc/tokens-per-sec rows.
- `TelemetryMock`: 10-bar animated bar chart, each bar's `animation` set inline per-index to `pulse-soft 1.{i}s` (staggered pulse durations, a hand-rolled desync trick rather than `delay`).
- `ChainMock`: mono block-height readout, truncated hash string, 6-segment pulsing progress dashes with `animationDelay: ${i*0.15}s`.
- `SpatialMock`: 3 absolutely-positioned rotated squares/dot forming an abstract "spatial" icon composition, one square using `.animate-float` (translateY ±8px, 6s ease-in-out infinite).

**Card entrance animation**: `motion.div` per card — `initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true, margin:"-80px"}} transition={{duration:0.5, delay:(i%2)*0.1}}` — cards in the same grid row (even/odd index) stagger by 0.1s.

### 04.4 CaseStudies (homepage teaser, `src/components/sections/CaseStudies.tsx`, 35 lines) — "More Success Stories."

**Content**: Eyebrow `More Case Studies`; H2 `More Success Stories.`; link "See all projects →" to `/projects`. Renders `caseStudies.slice(0, 4)` — the **first 4 entries in the data array**, which per current data order are: `ai-agent-command-system` (self-referential, flagged), `erthaloka`, `erthas-exchange`, `erthanomy`. **Once the self-referential studies are removed (Section 10), this slice will surface different companies — verify the new first-4 order after edits.**

**Layout**: `py-32 sm:py-40 border-t border-border`, `mt-16 grid gap-5 sm:gap-6 md:grid-cols-2`.

Uses shared `CaseStudyCard` component (documented fully in Section 08).

### 04.5 Testimonials (`src/components/sections/Testimonials.tsx`, 65 lines) — "What teams say."

**FLAGGED CONTENT — see also Section 10.** All 4 testimonials are fabricated/unverifiable:

| Quote | Name | Role |
|---|---|---|
| *"Bhanix shipped a production RAG pipeline in 6 weeks that our last vendor quoted us 9 months for. Senior team, zero hand-holding."* | David M. | VP Engineering, Vertex Solutions |
| *"Our robotics fleet was bleeding latency. Their squad rewrote the control loop and we are now 12x faster. They actually understand silicon."* | Sarah L. | CTO, BrightPath Robotics |
| *"From audited smart contracts to a custom prover, they delivered our L2 to mainnet in 11 weeks. Calm under pressure."* | Leo V. | Founder, FluxGrid |
| *"Spatial computing felt like a black box until Bhanix. They built our Vision Pro training simulator and our surgeons love it."* | Clara D. | Head of Product, NovaPath Health |

**Layout**: `py-32 sm:py-40 border-t border-border`, `mt-16 grid gap-5 md:grid-cols-2` (2×2). Each `<figure>`: `rounded-3xl border border-border-strong bg-surface-card p-8 hover:border-primary/40 hover:bg-surface-card-hover transition-colors` + inset shadow. Quote in `font-display text-xl leading-snug tracking-tight`. Footer row (`border-t border-border pt-6`): a `size-10` circular avatar showing computed **initials** (`t.name.split(" ").map(p=>p[0]).join("")` — no actual photo assets, purely generated from the name string), name (`text-sm font-medium`), role (`text-xs text-muted-foreground`).

**No animation** on this section — plain static render, no `motion`/`whileInView` wrapper (an inconsistency vs. every other homepage section).

### 04.6 Calculator (`src/components/sections/Calculator.tsx`, 90 lines) — "What is manual work costing you?" — **flagged for removal, Section 10**

**Logic** (`useMemo`, recomputed on any slider change):
```
monthlyHours = team * hours * 4
monthlyCost  = monthlyHours * rate
savings      = round(monthlyCost * 0.75)
```
Three `useState` sliders, all Radix `Slider` primitives:
- `team` (Engineering team size): default `12`, min `2`, max `80`, step `1`.
- `hours` (Weekly hours per engineer on repetitive work): default `10`, min `1`, max `40`, step `1`.
- `rate` (Loaded hourly cost): default `80`, min `20`, max `250`, step `5`.

**Content**: Eyebrow `Calculator`; H2 `What is manual work costing you?`; body *"Move the sliders. We will show you the monthly hours and dollars your team is spending on work a Bhanix system could absorb."* Result panel shows `$` + `savings.toLocaleString()` as "Monthly impact", subtext *"Potential monthly savings with a Bhanix engagement."*, two stat tiles (`{monthlyHours} h — Lost to manual work`, `${monthlyCost} — Monthly drain`), and a full-width `PillLink` "Get a custom engineering plan" → `/contact`.

**Layout**: single large card `rounded-3xl border border-border-strong bg-surface-card p-8 sm:p-12`, decorative blurred circle top-right, `grid lg:grid-cols-2 lg:items-center` (controls left, result panel right). No animation wrapper (static render; only the Radix Slider's own internal thumb-drag interaction is dynamic).

### 04.7 Pricing (`src/components/sections/Pricing.tsx`, 136 lines) — "Engagement models." — **flagged for removal, Section 10**

**Content**: Eyebrow `Pricing`; H2 `Engagement models.`; sub *"Senior engineering at a fixed monthly rate. No agency markup, no offshore handoffs."* Monthly/Yearly toggle (`useState<boolean>` `yearly`, default `false`) — segmented pill control, "Yearly · save 12%" label.

**Tiers** (exact data, `src/components/sections/Pricing.tsx` lines 7–46):
| Tier | Monthly | Yearly | Description | Features |
|---|---|---|---|---|
| Sprint | $9,800 | $8,800 | "Short, focused engagements. Prototype to validated POC." | Senior squad of 2 engineers; 4-week fixed scope; Weekly demo cadence; Working prototype handoff |
| Production (**featured**, `t.featured: true`) | $28,000 | $24,000 | "Most teams pick this. Ship production systems." | Senior squad of 4 engineers; Quarterly engagement; Architecture + delivery; Observability & on-call; Full IP transfer |
| Embedded | null (shows "Let's talk") | — | "Long-term partnerships with full embedded teams." | Custom squad composition; Multi-quarter retainer; Roadmap ownership; Dedicated tech lead; 24/7 incident response |

**Layout**: `id="pricing"`, `py-32 sm:py-40 border-t border-border`, centered header, `mt-16 grid gap-5 lg:grid-cols-3`. Featured tier gets `border-primary/60 bg-surface-card-hover shadow-[var(--shadow-glow)]` plus an absolutely-positioned "Most picked" pill badge (`-top-3 left-8`). CTA per tier: `PillLink` "Start engagement" (or "Talk to founders" for Embedded) → `/contact`, `variant={featured ? "primary" : "ghost"}`. Feature list uses `Check` (lucide) bullets.

### 04.8 FAQ (`src/components/sections/Faq.tsx`, 65 lines) — "Common questions."

Radix `Accordion` (`type="single" collapsible`), 6 items, `max-w-4xl` container:

| Q | A |
|---|---|
| What does an engagement look like? | We start with a 1-week discovery (free for qualified teams), then move into focused sprints. You get a senior squad, weekly demos, and full IP transfer. |
| Who owns the IP and the code? | You own everything from commit one. No vendor lock-in, no shared repos, no licensing games. |
| Do you work with early-stage startups? | Yes. We run a Sprint tier specifically for pre-seed and seed teams who need to validate hard technical bets fast. |
| What stacks do you cover? | Python / PyTorch / Triton, Rust, TypeScript, ROS2, Solidity, Cairo, Unreal 5, Swift / VisionOS. We pick the right tool for the job. |
| Can you sign NDA and security agreements? | We sign mutual NDA on day one. We hold SOC2-compatible practices and can work inside your security perimeter. |
| How fast can you start? | Typically within 2 weeks. For urgent engagements we have surge capacity available — get on a call. |

Item styling: `rounded-2xl border border-border-strong bg-surface-card px-6 data-[state=open]:border-primary/40`. Trigger uses shadcn `AccordionTrigger` (chevron rotates 180° via `[&[data-state=open]>svg]:rotate-180`, `transition-transform duration-200`). Content expand/collapse driven by Radix's own `data-[state=open]:animate-accordion-down` / `data-[state=closed]:animate-accordion-up` keyframes (defined by `tw-animate-css`, not in `src/styles.css` — **COULD NOT EXTRACT exact keyframe percentages/duration from first-party source**, they come from the `tw-animate-css` package).

### 04.9 CtaBand (`src/components/sections/CtaBand.tsx`, 35 lines) — "Ready when you are"

Reused at the bottom of **every single page** in the site (homepage + all 8 inner pages except `/contact`, which has no CtaBand).

Content: Eyebrow `Ready when you are`; H2 `Engineer something the world hasn't seen.` (with a forced `<br>` on `sm:` and above); body *"Tell us about the system you want to build. We'll come back with a focused plan within 48 hours."*; two CTAs — `Book a call` (primary, → `/contact`) and `See our work` (ghost, → `/case-studies`).

Layout: single rounded card `rounded-3xl border border-primary/40 bg-surface-card p-10 sm:p-16 text-center`, `.hero-gradient` radial glow overlay + a large blurred circle bottom-right. No scroll-triggered animation (static render).

---

## SECTION 05 — JAVASCRIPT / REACT BEHAVIOUR DOCUMENTATION

### 05.1 State & hooks inventory

| Component | State/hooks | Purpose |
|---|---|---|
| `PillNav` | `useState<boolean> scrolled`, `useState<boolean> open`, `useEffect` (scroll listener) | Header compaction on scroll; mobile menu open/close |
| `Calculator` | `useState<number>` ×3 (`team`, `hours`, `rate`), `useMemo` (derived `monthlyHours`/`monthlyCost`/`savings`) | Slider-driven ROI calculator |
| `Pricing` | `useState<boolean> yearly` | Monthly/Yearly price toggle |
| `contact.tsx` | `useState<boolean> sending` | Fake async form-submit state, `setTimeout(700ms)` then `toast.success` (sonner) and `formRef.reset()` — **no real network call, purely simulated** |
| `projects.tsx` | `useState<string> active` (default `"All"`), `useMemo filtered` | Category filter chips over `caseStudies` array |
| `case-studies.$slug.tsx` | route `loader` (not React state) computing `study`/`children`/`parent`/`more` at route-load time via `getCaseStudy`/`getChildCaseStudies` helpers from `src/data/caseStudies.ts` | Data resolution per dynamic slug |
| `Process.StickyCard` | `useRef`, `useScroll({target, offset:["start end","end start"]})`, two `useTransform` | Scroll-linked scale/opacity per sticky card |
| `HeroSphere` (unused) | `useRef<Mesh>`, `useFrame` (r3f render-loop hook) | Continuous orb self-rotation, tied to `three.js` clock, not React state |

### 05.2 Framer-motion inventory (exact props)

| Component | Trigger | initial | animate/whileInView | transition |
|---|---|---|---|---|
| `Hero` H1 | mount | `{opacity:0,y:22}` | `{opacity:1,y:0}` | `{duration:0.7, delay:0.1}` |
| `Hero` CTA wrapper | mount | `{opacity:0,x:16}` | `{opacity:1,x:0}` | `{duration:0.6, delay:0.3}` |
| `Process.MockBrief` rows (×4) | `whileInView`, `once:true` | `{opacity:0,x:-10}` | `{opacity:1,x:0}` | `{delay:0.1+i*0.12, duration:0.4}` |
| `Process.MockLaunch` bars (×12) | `whileInView`, `once:true` | `{scaleY:0}` (transformOrigin bottom) | `{scaleY:1}` | `{delay:i*0.05, duration:0.5, ease:"easeOut"}` |
| `Process.StickyCard` article | scroll-linked (`useScroll`/`useTransform`, not initial/animate) | — | `style={{scale, opacity}}` where `scale:[1,1,0.96]`, `opacity:[1,1,0.7]` over `scrollYProgress:[0,0.5,1]` | continuous, no easing config (raw interpolation) |
| `Services` cards (×4) | `whileInView`, `once:true, margin:"-80px"` | `{opacity:0,y:30}` | `{opacity:1,y:0}` | `{duration:0.5, delay:(i%2)*0.1}` |
| `CaseStudyCard` (shared, used on Home/Projects/CaseStudies index/detail "more"/"products") | `whileInView`, `once:true, margin:"-60px"` | `{opacity:0,y:24}` | `{opacity:1,y:0}` | `{duration:0.45, delay:(index%2)*0.08}` |
| `case-studies.$slug` H1 | mount | `{opacity:0,y:16}` | `{opacity:1,y:0}` | `{duration:0.6}` |
| `case-studies.$slug` Solutions cards | `whileInView`, `once:true, margin:"-60px"` | `{opacity:0,y:20}` | `{opacity:1,y:0}` | `{duration:0.4, delay:i*0.06}` |
| `case-studies.$slug` Screenshot/Video tiles | `whileInView`, `once:true, margin:"-60px"` | `{opacity:0,y:20}` | `{opacity:1,y:0}` | `{duration:0.4}` (no per-item delay/stagger) |

**Sections with NO framer-motion at all** (static render, only CSS `:hover`/`transition-colors` on interaction): `Testimonials`, `Calculator`, `Pricing`, `Faq`, `CtaBand`, `PillNav`, `Footer`, `about.tsx`, `team.tsx` page body (cards use CSS `hover:-translate-y-0.5 transition-all duration-300`, not JS-driven).

### 05.3 CSS keyframe animations (all defined in `src/styles.css` lines 108–146, `@layer utilities`)

| Keyframe | Definition | Utility class | Duration/timing |
|---|---|---|---|
| `marquee` | `translateX(0)` → `translateX(-50%)` | `.animate-marquee` | 40s linear infinite |
| `pulse-soft` | opacity `0.55` ↔ `1` at 0/50/100% | `.animate-pulse-soft` | 2.4s ease-in-out infinite |
| `float-y` | `translateY(0)` ↔ `translateY(-8px)` at 0/50/100% | `.animate-float` | 6s ease-in-out infinite |
| `shimmer` | `background-position -200% 0` → `200% 0` | (keyframe defined, **no utility class wired to it** — dead keyframe, unused) | — |
| `spin-slow` | `rotate(360deg)` | `.animate-spin-slow` | 4s linear infinite |
| `progress-fill` | `width:0%` → `width:var(--progress,80%)` | `.animate-progress` | 2.4s ease-out forwards (runs once, does not loop) |
| `blink` | opacity `0.25→1→0.25` at 0/30/60/100% | `.animate-blink` | 1.4s ease-in-out infinite |

### 05.4 Other JS-driven behaviour

- No `setInterval` anywhere in the codebase (checked all read section/route/component files).
- One `setTimeout` — `contact.tsx` line 36, 700ms fake-latency before toast success (no real submission endpoint exists in this repo; the form is decorative/non-functional as shipped).
- No custom `IntersectionObserver` usage — all "reveal on scroll" behaviour is delegated to framer-motion's built-in `whileInView` (which uses `IntersectionObserver` internally, but no first-party observer code is written).
- `embla-carousel-react` is a listed dependency (`package.json`) and a shadcn `carousel.tsx` primitive exists at `src/components/ui/carousel.tsx`, but **no route or section component imports/uses it** — dead dependency as far as observed usage.
- `recharts` is a listed dependency and `src/components/ui/chart.tsx` wraps it, but **no route or section uses live chart rendering** — all "chart-like" visuals (Process sparkline, Services telemetry bars) are hand-rolled `motion.div`/plain `div` bars, not `recharts`. Dead dependency as far as observed usage.
- `react-hook-form` + `@hookform/resolvers` + `zod` are dependencies; `src/components/ui/form.tsx` wraps RHF, but the actual `contact.tsx` form is **plain uncontrolled HTML form fields** (`<form onSubmit>`, `e.target.reset()`) — RHF/zod validation is not wired into the live contact form.

---

## SECTION 06 — INNER PAGES

### 06.1 `/services` (`src/routes/services.tsx`)

Meta: title `Services — Bhanix`; description *"AI / ML, robotics & embedded, blockchain, and AR/VR engineering — shipped by senior squads."*

Custom hero (`pt-44 pb-16`, `.hero-gradient` overlay): Eyebrow `Services`; H1 `Four verticals. ` + dimmed span `One senior team.`; sub *"Each engagement is led by a principal engineer and ships production code on a weekly cadence."* Then renders the shared `Services` and `Process` section components verbatim (same content as homepage), then `CtaBand`. No page-unique components beyond the hero block.

### 06.2 `/pricing` (`src/routes/pricing.tsx`) — **flagged for removal, Section 10**

Meta: title `Pricing — Bhanix`; description *"Senior engineering at fixed monthly rates. Sprint, Production, and Embedded engagement models."*

Custom hero (`pt-44 pb-8`, centered): Eyebrow `Pricing`; H1 `Senior squads. ` + dimmed span `Fixed rates.` Then renders shared `Pricing`, `Calculator`, `Faq` sections + `CtaBand` — i.e. this page duplicates 3 of the 4 flagged/removable homepage sections in full.

### 06.3 `/projects` (`src/routes/projects.tsx`)

Meta: title `Projects — Bhanix`; description *"Every system Bhanix has shipped — across Web3, AR/VR, Agentic AI, Cloud, EdTech, Travel, and E-commerce."*

**Unique component**: category filter bar. `categories = ["All", ...unique(caseStudies.map(c => c.category))]` — dynamically derived from data, currently resolves to: `All, Agentic AI, Web3, AR/VR, Travel, Cloud, EdTech, E-commerce, R&D` (9 buttons, order = first-seen order in the data array; **"Agentic AI" and "R&D" will need review once self-referential studies are removed** since those categories may currently only be populated by the flagged entries — verify after Section 10 edits are applied, specifically `ai-agent-command-system` category `"Agentic AI"` also has `cravent` in it so Agentic AI survives, but `"R&D"` is **only** populated by `internal-rnd` and will disappear as a filterable category once that entry is removed).

Active filter button: `bg-foreground text-background border-foreground`; inactive: `border-border-strong bg-surface-card text-muted-foreground hover:text-foreground hover:bg-surface-card-hover`. Grid renders `filtered.map` using shared `CaseStudyCard`.

### 06.4 `/about` (`src/routes/about.tsx`) — **heavily flagged, Section 10**

Meta: title `About — Bhanix`; description *"Bhanix is a small studio of senior engineers building production deeptech systems for frontier teams."*

**Exact flagged copy**:
- H1: `A small studio for ` + dimmed span `hard problems.`
- Founding paragraph (verbatim): *"Bhanix was founded by a group of engineers who had spent a decade shipping deeptech inside Boston Dynamics, DeepMind, Anduril, and Coinbase. We started Bhanix to do the same work without the corporate gravity — for teams that need to move fast and build things that haven't been built before."*
- Principles grid (4 items, `principles` array lines 17–22):
  1. **Senior only** — "No juniors, no offshore. Every commit comes from a principal engineer."
  2. **Production first** — "We ship to mainnet, to fleet, to App Store. Slide decks are not deliverables."
  3. **You own everything** — "Full IP transfer from commit one. **We are mercenaries, not landlords.**" ← exact flagged phrase
  4. **Calm under pressure** — "We have shipped during outages, audits, and 4am pager calls. The work continues."
- Locations strip (`locations` array line 24): `["London", "San Francisco", "Berlin", "Singapore"]` — rendered as 4 mono pill chips under H2 "Distributed by design."

Layout: hero (`pt-44 pb-24`), Principles section (`py-32`, `grid md:grid-cols-2`), Locations section (`py-24`, flex row), then `CtaBand`.

### 06.5 `/team` (`src/routes/team.tsx`) — **entire page flagged for removal, Section 10**

Meta: title `Team — Bhanix`; description *"The engineers, designers, and researchers behind Bhanix's frontier work."*

6 fabricated team members (`team` array lines 24–31):

| Name | Role | Bio | Gradient tone |
|---|---|---|---|
| Aarav Mehta | Founder · Engineering | "Systems architect across AI, blockchain, and spatial. 12+ years shipping production deeptech." | `from-emerald-500/30 to-indigo-500/10` |
| Naomi Park | Head of AI | "Builds agentic systems and ML pipelines. Previously research engineering at a frontier lab." | `from-purple-500/30 to-indigo-500/10` |
| Diego Alvarez | Robotics Lead | "Sensor mesh, firmware, and on-device inference for industrial robotics." | `from-cyan-500/25 to-indigo-500/10` |
| Priya Raman | Blockchain Lead | "Audited Solidity contracts, NFT markets, and DAO governance in production." | `from-pink-500/25 to-indigo-500/10` |
| Marcus Lee | Cloud & DevOps | "Multi-region infra, observability, and zero-downtime deploys at scale." | `from-amber-500/25 to-indigo-500/10` |
| Sana Iqbal | Design Engineering | "Bridges product design and engineering — spatial UI, design systems, motion." | `from-indigo-500/30 to-blue-500/10` |

No photo assets — each card renders a gradient tile with 2-letter initials (`m.name.split(" ").map(w=>w[0]).slice(0,2).join("")`), same "no real photo" pattern as Testimonials avatars. Card hover: `hover:-translate-y-0.5 transition-all duration-300`.

Note: `team.tsx` exports `export default function TeamPage()` **in addition to** the file-based route `component: TeamPage` reference — a redundant default export pattern not seen in other route files (all others use `export default AboutPage;` after defining `function AboutPage` and separately point `component: AboutPage`, or don't export default at all — inconsistent pattern, not functionally significant but worth noting for code hygiene during rebuild).

### 06.6 `/contact` (`src/routes/contact.tsx`) — **flagged, Section 10**

Meta: title `Contact — Bhanix`; description *"Tell us about the deeptech system you want to build. We respond within 48 hours."*

**Exact flagged contact details** (`Channel` components, lines 61–63):
| Icon | Label | Value |
|---|---|---|
| `Mail` | Email | `engage@axon.studio` ← wrong domain, flagged |
| `Phone` | Signal | `+44 20 4541 0119` |
| `MapPin` | HQ | `London · San Francisco · Berlin` ← wrong locations, flagged |

Copy: H1 `Tell us what you're ` + dimmed span `building.`; sub *"Drop the details. A principal engineer reads every message and responds within 48 hours."*

**Form fields** (uncontrolled, `name` attrs only, no RHF): Your name (`Input`, required), Company (`Input`, required), Work email (`Input type=email`, required), Project type (`Select`: AI / ML Engineering, Robotics & Embedded, Blockchain, AR / VR & Spatial, Something else), Budget (`Select`: Under $50k, $50k–$150k, $150k–$500k, $500k+), "What are you building?" (`Textarea`, required, `rows={5}`). Submit button label toggles `Sending...`/`Send message` based on `sending` state. On submit: `setTimeout(700ms)` → `toast.success("Message received", {description:"We'll be in touch within 48 hours."})` → form reset. **No backend endpoint wired — this is a fully client-side simulated submission.**

Layout: `pt-44 pb-32`, `.hero-gradient` overlay, `grid lg:grid-cols-2` (contact info left, form right in a `rounded-3xl border border-border-strong bg-surface-card backdrop-blur-xl p-8` card). No `CtaBand` on this page (only page in the site without it).

### 06.7 `/case-studies` index (`src/routes/case-studies.index.tsx`)

Meta: title `Case Studies — Bhanix`; description *"Production deeptech systems Bhanix has shipped — robotics, AI, blockchain, and spatial."*

Hero: Eyebrow `Case Studies`; H1 `Systems we've shipped.`; sub *"Each company below trusted us with multiple engagements. Tap any card for the full breakdown."* Grid: `caseStudies.filter(c => !c.parentSlug)` — **top-level studies only** (excludes the 4 `arteco-*` children), so currently shows 14 of the 17 total entries (or 12 once the 2 self-referential ones are removed).

### 06.8 `/case-studies/$slug` detail (`src/routes/case-studies.$slug.tsx`, 322 lines)

Fully documented section-by-section in **Section 04.9's sibling read** above (see the file read in-session) — summarized structure per study, sections conditionally rendered only if the underlying data field is present:

1. **Hero** — back-arrow to `/case-studies`, optional "Part of {parent.company}" breadcrumb (only for `arteco-*` children), animated H1 (`study.hero.headline`), 3-column meta row (Industry / Client Type / Focus Area), `CompanyLogoTile` in `hero` variant.
2. **Challenge** — Eyebrow `Challenge`, single large paragraph (`study.challenge`).
3. **Solutions** — Eyebrow `Solutions`, H2 (`study.solutionsIntro`), then `study.solutions` array rendered as numbered cards using `GradientNumber` (large gradient-text digit `01`/`02`/etc.) + title + description, staggered `whileInView` entrance.
4. **Impact** — Eyebrow `Impact`, hardcoded H2 `Saving Time. Boosting Output.` (same copy for every case study, not data-driven), `study.stats` (2–3 stat pairs) via `GradientNumber`.
5. **Tool Stack** — Eyebrow `Tool Stack`, hardcoded H2 `What Powered the Build`, `study.tools` rendered via `ToolTile` (icon + name grid, 3/4/6 columns responsive).
6. **Products** (conditional, only if `getChildCaseStudies(slug)` returns entries — only `arteco` parent has this) — Eyebrow `Products`, hardcoded H2 `What We Built`, child `CaseStudyCard`s.
7. **Screenshots** (conditional on `study.screenshots`) — Eyebrow `Screenshots`, hardcoded H2 `Every Screen, Documented`, `img` grid with mono captions.
8. **Videos** (conditional on `study.videos`) — Eyebrow `Demo`, hardcoded H2 `See It in Action`, native `<video controls playsInline>` grid with mono captions.
9. **Client Feedback** (conditional on `study.feedback`) — radial teal-ish glow background (`oklch(0.7 0.18 155 / 0.18)` — note this is the **only** place in the current site using a green/teal-hued OKLCH rather than the indigo primary), large quote, initial-letter avatar circle, name + role.
10. **More** (conditional, up to 2 unrelated case studies) — same `CaseStudyCard` grid pattern.
11. **CtaBand** — always present.

**Data completeness varies per study** — not every case study has `feedback`, `screenshots`, or `videos`. Cross-reference table:

| Slug | screenshots | videos | feedback | children |
|---|---|---|---|---|
| `ai-agent-command-system` | ✗ | ✗ | ✗ | ✗ |
| `erthaloka` | ✓ (12) | ✗ | ✓ | ✗ |
| `erthas-exchange` | ✓ (8) | ✗ | ✗ | ✗ |
| `erthanomy` | ✓ (4) | ✗ | ✗ | ✗ |
| `arteco` | ✓ (6) | ✗ | ✗ | ✓ (4 children) |
| `arteco-ar-edu` | ✓ (5) | ✓ (1) | ✗ | — (is a child) |
| `arteco-ar-menu` | ✗ | ✓ (1) | ✗ | — (is a child) |
| `arteco-vr-edu` | ✓ (1) | ✓ (1) | ✗ | — (is a child) |
| `arteco-3d-architecture` | ✓ (3) | ✓ (1) | ✗ | — (is a child) |
| `cravent` | ✓ (4) | ✗ | ✗ | ✗ |
| `travellers-triibe` | ✗ | ✗ | ✗ | ✗ |
| `valonk` | ✓ (4) | ✗ | ✗ | ✗ |
| `xplored` | ✓ (2) | ✗ | ✗ | ✗ |
| `vivium` | ✗ | ✗ | ✗ | ✗ |
| `internal-rnd` | ✗ | ✗ | ✗ | ✗ |

---

## SECTION 07 — ASSETS INVENTORY

### 07.1 Images

| Path | Depicts | Used by |
|---|---|---|
| `public/bg--bhanix.jpg` (168K) | Hero background image (dark abstract/tech visual — used as `object-cover` full-bleed) | `Hero.tsx` line 20 — **the only image reference in the Hero component** |
| `public/favicon.svg` | Site favicon | `__root.tsx` link tag |
| `public/logo's/Copy of Erthaloka Green Logo.png` | Erthaloka client logo | Hero marquee, `erthaloka` case study `logoUrl` |
| `public/logo's/Copy of FINAL LOGO APRIL-04.png` | Arteco client logo | Hero marquee, `arteco` case study `logoUrl` |
| `public/logo's/Copy of cravent-logo-WORDMARKTAGLINE-1.jpg` | Cravent client logo | Hero marquee, `cravent` case study `logoUrl` |
| `public/logo's/Copy of Artboard 9 transparent.png` | Travellers Triibe client logo | Hero marquee, `travellers-triibe` case study `logoUrl` |
| `public/logo's/Copy of Artboard 2.png` | XplorED client logo | Hero marquee, `xplored` case study `logoUrl` |
| `public/logo's/Copy of vivium logo.jpg.jpeg` | Vivium client logo | Hero marquee, `vivium` case study `logoUrl` |
| `public/DAO/Screenshot 2026-06-07 21{17*}.png` (12 files) | Erthaloka DAO app screenshots (dashboard, governance voting, treasury, staking, community pools, learning center, wallet) | `erthaloka` case study `screenshots[]` |
| `public/erthas-cryptowalletandexchange/Screenshot 2026-06-07 {20*,21*}.png` (8 files) | ErthaExchange marketplace screenshots (homepage, services, dashboard, transactions, admin) | `erthas-exchange` case study `screenshots[]` |
| `public/Cyptocurrencyown-erthasand circulareconomy/Screenshot 2026-06-07 210*.png` (4 files) | Erthanomy token/DApp screenshots | `erthanomy` case study `screenshots[]` |
| `public/arteco/Screenshot 2026-06-07 2241*.png` (6 files) | Arteco parent-brand screenshots (homepage, vending, AR/VR experience, tours, about) | `arteco` case study `screenshots[]` |
| `public/ar-edu/Screenshot 2026-06-07 224417.png` + 4 `WhatsApp Image...jpeg` | AR education app screenshots and in-action photos | `arteco-ar-edu` case study `screenshots[]` |
| `public/vr-edu/Screenshot 2026-06-07 224247.png` | VR education scene screenshot | `arteco-vr-edu` case study `screenshots[]` |
| `public/3danimationvrfor construction and interiorandarchitecture/Screenshot 2026-06-07 2255*.png` (2 files) | 3D architecture virtual-tour renders | `arteco-3d-architecture` case study `screenshots[]` |
| `public/cravent/Screenshot 2026-06-07 2316*.png` (4 files) | Cravent marketing site screenshots (homepage, services, portfolio, footer) | `cravent` case study `screenshots[]` |
| `public/valonk/Screenshot 2026-06-07 2321*.png` (4 files) | Valonk e-commerce storefront screenshots | `valonk` case study `screenshots[]` |
| `public/xplored/Screenshot 2026-06-07 2114*.png` (2 files) | XplorED platform screenshots | `xplored` case study `screenshots[]` |

### 07.2 Videos

| Path | Size | Used by |
|---|---|---|
| `public/bg-2.mp4` | 1.7M | **NOT referenced by any component read in this session — orphaned asset.** |
| `public/bg-vid.mp4` | 1.7M | **NOT referenced by any component read in this session — orphaned asset.** |
| `public/WhatsApp Video 2026-06-08 at 1.53.09 AM.mp4` | 1.7M | **NOT referenced by any component read in this session — orphaned asset, sits at `public/` root, filename suggests a WhatsApp export never wired into `caseStudies.ts`.** |
| `public/ar-edu/WhatsApp Video 2026-06-03 at 1.56.44 AM.mp4` | — | `arteco-ar-edu` case study `videos[]` ("AR Education — Live Demo") |
| `public/ar-menu/WhatsApp Video 2026-06-03 at 1.56.45 AM.mp4` | — | `arteco-ar-menu` case study `videos[]` ("AR Menu — Live Demo") |
| `public/vr-edu/WhatsApp Video 2026-06-03 at 1.56.40 AM.mp4` | — | `arteco-vr-edu` case study `videos[]` ("VR Education — Demo") |
| `public/3danimationvrfor construction and interiorandarchitecture/Recording archi web.mp4` | — | `arteco-3d-architecture` case study `videos[]` ("3D Architecture — Walkthrough Demo") |

**Orphaned/unused folder**: `public/WhatsApp Unknown 2026-06-07 at 10.48.27 PM/` exists but is **empty** (confirmed via directory listing — 0 files inside).

**Flag for rebuild**: The Hero section's own code comment ("Full-screen video hero") suggests a video background was originally intended, but the implementation ships a static `<img>` — the three orphaned `.mp4` files at `public/` root (`bg-2.mp4`, `bg-vid.mp4`, the WhatsApp video) are plausible candidates for what was meant to be wired in but never was. Decide during rebuild whether to use one as an actual video hero or delete all three as dead weight.

### 07.3 Fonts

Current (loaded via `<link>` tags in `__root.tsx`, Google Fonts CDN, not self-hosted/vendored):
- Inter — weights 300/400/500/600/700
- Inter Tight — weights 400/500/600/700
- JetBrains Mono — weights 400/500

Target (per `v2/css/design-system.css` `@import url(...)`):
- Syne — weights 400/500/600/700/800
- DM Sans — weights 300/400/500/600 (roman) + 400 (italic), variable optical size axis `9..40`
- JetBrains Mono — weights 400/500 (unchanged)

### 07.4 External libraries with versions (from `package.json`)

| Library | Version | Observed usage |
|---|---|---|
| react / react-dom | ^19.2.0 | Core framework |
| @tanstack/react-router | ^1.168.25 | Client routing (file-based) |
| @tanstack/react-start | ^1.167.50 | SSR framework (TanStack Start) |
| @tanstack/router-plugin | ^1.167.28 | Vite plugin for route generation (`routeTree.gen.ts`) |
| @tanstack/react-query | ^5.83.0 | `QueryClientProvider` wraps the app in `__root.tsx`; **no actual query usage observed** in any read route/component — provisioned but unused |
| framer-motion | ^12.40.0 | Extensively used, see Section 05.2 |
| three | ^0.184.0 | Used only by the unused `HeroSphere.tsx` |
| @react-three/fiber | ^9.6.1 | Same, unused in practice |
| @react-three/drei | ^10.7.7 | Same, unused in practice (`Float`, `MeshDistortMaterial`, `Sphere` helpers) |
| tailwindcss | ^4.2.1 | Full design system, CSS-native config (no JS config file) |
| @tailwindcss/vite | ^4.2.1 | Vite plugin |
| tw-animate-css | ^1.3.4 | Provides `animate-in`/`fade-in` (mobile nav) and Radix accordion open/close keyframes |
| class-variance-authority | ^0.7.1 | `buttonVariants`/`badgeVariants` (shadcn primitives) |
| clsx + tailwind-merge | ^2.1.1 / ^3.5.0 | `cn()` helper (`src/lib/utils.ts`) |
| lucide-react | ^0.575.0 | All icons sitewide |
| embla-carousel-react | ^8.6.0 | Dependency present, **`carousel.tsx` primitive exists but is unused by any page** |
| recharts | ^2.15.4 | Dependency present, **`chart.tsx` wrapper exists but unused by any page** — all chart-like visuals are hand-rolled |
| sonner | ^2.0.7 | Toast notifications (`Toaster` in `__root.tsx`, `toast.success` in `contact.tsx`) |
| react-hook-form / @hookform/resolvers / zod | ^7.71.2 / ^5.2.2 / ^3.24.2 | `form.tsx` wrapper exists, **not wired into the actual contact form** (which is plain uncontrolled HTML) |
| @radix-ui/* (23 packages) | various ^1.x/^2.x | shadcn primitives — accordion, dialog, select, slider, dropdown, etc. Full list used across `src/components/ui/*.tsx`; only a subset (Accordion, Select, Slider, Label) are actually invoked by marketing pages — the rest support the general shadcn kit but aren't rendered on any route read |
| @cloudflare/vite-plugin | ^1.25.5 | Cloudflare Workers build target |
| nitro | 3.0.260429-beta | Server runtime (TanStack Start's server layer) |
| vite | ^7.3.1 | Build tool |

### 07.5 CSS file sizes (via `wc -c`)

| File | Bytes |
|---|---|
| `src/styles.css` | 4,821 |
| `v2/css/design-system.css` | 6,083 |
| `v2/css/main.css` | 31,681 |
| `v2/js/main.js` | 2,129 |
| `src/data/caseStudies.ts` | 54,794 |

---

## SECTION 08 — COMPONENT LIBRARY

### 08.1 `Eyebrow` (`src/components/ui/eyebrow.tsx`)

Usage: every section header sitewide (Process, Services, CaseStudies, Testimonials, Calculator, Pricing, FAQ, CtaBand, and every inner-page hero). ~20+ call sites.

```tsx
<div className={cn("eyebrow flex items-center gap-2", className)}>
  <span className="size-1.5 rounded-full bg-eyebrow animate-pulse-soft" />
  {children}
</div>
```
Single prop besides `children`: `className` (optional, e.g. `justify-center` used on centered-hero pages). No variants. Always renders a pulsing dot + mono uppercase label (styling from the global `.eyebrow` utility class, see 02.3).

### 08.2 `PillButton` / `PillLink` (`src/components/ui/pill-button.tsx`)

Usage: every CTA sitewide — Hero, CtaBand (×2 per instance), Pricing (×3 tiers), Calculator, Contact form submit, PillNav "Book a Call".

Variants (`variants` record): `primary` (`bg-primary text-primary-foreground shadow-[var(--shadow-glow)] hover:brightness-110`), `ghost` (`bg-secondary/60 text-foreground border border-border hover:bg-secondary`), `white` (`bg-foreground text-background hover:bg-foreground/90`).

Sizes: `sm` (`h-9 px-4 text-sm`), `md` (`h-11 px-6 text-sm`, default), `lg` (`h-12 px-7 text-base`).

Base classes (shared by both `PillButton` and `PillLink`): `inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-300 will-change-transform active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background`.

`PillButton` renders a native `<button>` (spreads all `ComponentProps<"button">`, used for the contact form submit with `type="submit" disabled={sending}`). `PillLink` renders a TanStack Router `<Link to>` (no native anchor prop passthrough — narrower prop surface, `to` is required, no `disabled` state supported).

### 08.3 `CaseStudyCard` (`src/components/case/CaseStudyCard.tsx`)

Usage: homepage `CaseStudies` (×4), `/projects` grid (all filtered studies), `/case-studies` index (top-level studies), case-study detail "Products" (children) and "More" sections. **Single most-reused composite component in the site.**

```tsx
<motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-60px"}} transition={{duration:0.45,delay:(index%2)*0.08}}>
  <Link to="/case-studies/$slug" params={{slug: study.slug}}
    className="group block rounded-3xl border border-border-strong bg-surface-card p-4 sm:p-5 hover:border-primary/50 hover:bg-surface-card-hover hover:-translate-y-0.5 transition-all duration-300 shadow-[inset_0_1px_0_0_oklch(1_0_0_/_0.06),0_10px_40px_-20px_oklch(0_0_0_/_0.8)]">
    <CompanyLogoTile study={study} />
    <div className="px-2 pt-5 pb-3">
      <div className="flex items-center justify-between gap-3">
        <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          {study.company} · <span className="text-foreground/70 normal-case tracking-normal">{study.domain}</span>
        </div>
        <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-foreground transition-colors" />
      </div>
      <h3 className="mt-3 font-display text-xl sm:text-2xl tracking-tight leading-snug text-balance">
        How {study.company} {/* title, with leading "a " stripped if present */}
      </h3>
    </div>
  </Link>
</motion.div>
```
Notable logic: the card title auto-prefixes "How {company} " and strips a leading `"a "` from `study.title` if present (`study.title.toLowerCase().startsWith("a ") ? study.title.slice(2) : study.title`) — a text-templating trick to turn data like `"replaced their leadership layer with 5 autonomous AI agents"` into "How Bhanix replaced their leadership layer with 5 autonomous AI agents." **Only props**: `study: CaseStudy`, `index?: number` (defaults 0, drives stagger delay only).

### 08.4 `CompanyLogoTile` (`src/components/case/CompanyLogoTile.tsx`)

Usage: inside every `CaseStudyCard` (card variant) and the case-study detail hero (hero variant).

Two variants via `variant?: "card" | "hero"` prop, changing aspect ratio (`aspect-[16/10]` card vs `aspect-[16/8] sm:aspect-[16/7]` hero) and monogram/text size (`text-3xl sm:text-4xl` card vs `text-6xl sm:text-7xl` hero).

Two rendering modes based on data: if `study.logoUrl` is set, shows the real logo image on a white rounded chip (`bg-white rounded-xl px-5 py-2.5`, `max-h-12`/`max-h-20` depending on variant); if not, shows a decorative gradient tile (`study.tone` Tailwind gradient classes) with either the full company name (if ≤14 chars) or a computed 3-letter monogram, in `font-display` with a drop-shadow. Always has an inset top-highlight shadow (`shadow-[inset_0_1px_0_0_oklch(1_0_0_/_0.12)]`) for a glassy look.

### 08.5 `GradientNumber` (`src/components/case/GradientNumber.tsx`)

Usage: case-study detail "Solutions" (numbered 01–04) and "Impact" stats (arbitrary strings like "60%", "4.2s → 1.1s").

```tsx
<span className={`font-display leading-none bg-gradient-to-b from-primary to-primary-glow bg-clip-text text-transparent ${className}`}>{n}</span>
```
Single-purpose text-gradient wrapper. Props: `n: number | string`, `className?: string` (caller controls size, e.g. `text-7xl sm:text-8xl` for Solutions vs `text-6xl sm:text-7xl` for Impact).

### 08.6 `ToolTile` (`src/components/case/ToolTile.tsx`)

Usage: case-study detail "Tool Stack" section only.

Dynamically resolves a lucide-react icon by string name from the full `icons` export map (`(icons as Record<string,LucideIcon>)[icon] ?? Box`, falling back to a generic `Box` icon if the name doesn't match — **this means any typo in a case study's `tools[].icon` field silently falls back to a box icon rather than erroring**, worth a QA pass on the 60+ icon-name strings across `caseStudies.ts`). Renders a `size-20` rounded bordered square with a subtle gradient wash, icon centered (`strokeWidth={1.6}`), name label below.

### 08.7 shadcn/Radix primitives inventory (`src/components/ui/*.tsx`, 44 files total)

**Actively used on marketing pages** (confirmed via imports in read route/section files): `accordion.tsx` (FAQ), `select.tsx` (Contact form), `slider.tsx` (Calculator), `input.tsx` + `textarea.tsx` + `label.tsx` (Contact form), `button.tsx` (generic shadcn button — used inside `__root.tsx` NotFound/Error components only, not on marketing sections which use `PillButton`/`PillLink` instead), `sonner.tsx` (Toaster in `__root.tsx`), `badge.tsx` / `card.tsx` (present, standard shadcn defaults, **no confirmed call sites** in files read this session — may be used by shadcn-generated pages not part of the marketing site, or dead).

**Present but with no confirmed usage in any read route/section file** (standard shadcn kit, likely scaffolded wholesale by the `components.json` generator and not pruned): `alert-dialog`, `alert`, `aspect-ratio`, `avatar`, `breadcrumb`, `calendar`, `carousel`, `chart`, `checkbox`, `collapsible`, `command`, `context-menu`, `dialog`, `drawer`, `dropdown-menu`, `form`, `hover-card`, `input-otp`, `menubar`, `navigation-menu`, `pagination`, `popover`, `progress`, `radio-group`, `resizable`, `scroll-area`, `separator`, `sheet`, `sidebar`, `skeleton`, `switch`, `table`, `tabs`, `toggle-group`, `toggle`, `tooltip`. **Recommendation for rebuild**: prune unused primitives to cut bundle size, since each pulls in its corresponding `@radix-ui/react-*` dependency.

### 08.8 Component states/variants summary table

| Component | Variants | States |
|---|---|---|
| `PillButton`/`PillLink` | `primary` \| `ghost` \| `white`; `sm` \| `md` \| `lg` | hover (brightness/bg shift), active (`scale-[0.98]`), focus-visible (ring), disabled (only on `PillButton`, native `disabled` attr — `PillLink` has no disabled concept since it's a navigational link) |
| `Eyebrow` | none (className passthrough only) | none (purely presentational, dot always pulses) |
| `CaseStudyCard` | none | hover (border/bg/translate), scroll-in (framer-motion once) |
| `CompanyLogoTile` | `card` \| `hero` | data-driven branch (logo image vs. generated gradient/monogram) |
| Accordion item | none | closed/open (`data-[state]`), hover (trigger underline suppressed intentionally: `hover:no-underline`) |
| Radix `Slider` | none | idle/dragging (native Radix internal), disabled (`disabled:opacity-50`) |
| `Select` | none | closed/open, placeholder vs. selected value styling (`data-[placeholder]:text-muted-foreground`) |

---

## SECTION 09 — WHAT IS WORKING WELL

Editorial judgment on the 5 strongest visual/animation elements worth preserving through the rebuild (evaluated purely on execution quality, independent of the brand/content issues catalogued in Section 10):

1. **The Process section's staggered sticky-card scroll sequence** (`Process.tsx`). The `top: 96 + index*28` staggered pinning combined with the `useScroll`/`useTransform` scale-and-fade-out on approach is a genuinely sophisticated scroll-driven interaction, well beyond a typical marketing-site "fade in on scroll" — it reads as a physical stack of cards being flipped through. Worth preserving the *mechanism*, restyled in teal.

2. **The bespoke per-section "mock UI" panels** (`MockBrief`, `MockEngineering`, `MockLaunch` in Process; `ModelMock`, `TelemetryMock`, `ChainMock`, `SpatialMock` in Services). These hand-built fake product screenshots (progress bars, sparklines, terminal-style status rows, marquee icon strips) do more to communicate "we build real, technical, production software" than any stock photography could — they're a strong differentiator for a deeptech-positioned brand and match the eventual "Technology Firm" positioning well.

3. **The `CaseStudyCard`'s auto-templated headline logic** ("How {company} {title, de-prefixed}") — a small but effective content-engineering trick that keeps 17 case-study cards grammatically consistent without hand-writing each headline, and reads naturally ("How Erthaloka built a planetary-scale tech backbone...").

4. **The glass-morphism card language** — consistent `bg-surface-card` + `border-border-strong` + inset top-highlight shadow (`shadow-[inset_0_1px_0_0_...]`) + soft outer drop shadow, applied uniformly across Services, Pricing, Testimonials, FAQ, CaseStudyCard, Team. It gives the whole site a cohesive "dark glass panel" identity that's currently undermined only by the indigo/blue hue — the panel *system* itself is worth keeping and re-skinning in the new teal/obsidian palette.

5. **The nav's scroll-compaction behavior** (`PillNav`'s `pt-6`→`pt-3` transition + backdrop-blur floating pill) — simple but well-executed: the floating-pill nav pattern with `backdrop-blur-xl` reads as premium and the compaction on scroll is subtle enough not to be distracting, unlike many sites that do a jarring full header swap.

---

## SECTION 10 — WHAT NEEDS TO CHANGE

Cross-referenced against the authoritative BHANIXS brand brief. Each row: exact location, current value (verbatim), new value, complexity tag.

### 10.1 Naming & positioning

| Location | Current | New | Complexity |
|---|---|---|---|
| `src/routes/__root.tsx` L79 | `title: "Bhanix — Deeptech engineering studio"` | `"BHANIXS — Technology Firm"` (or brief-approved variant) | text-only |
| `src/routes/__root.tsx` L79 | `description: "Bhanix is a deeptech engineering studio building production AI, robotics, blockchain, and spatial systems for frontier teams."` | Rewritten to BHANIXS positioning | text-only |
| `src/routes/__root.tsx` L81–83 | og:title/og:description "Bhanix" | "BHANIXS" throughout | text-only |
| `src/routes/index.tsx` L15–18 | Homepage meta title/description "Bhanix — Deeptech engineering for frontier teams" | Update brand name + new headline | text-only |
| Every route file (`services.tsx`, `pricing.tsx`, `about.tsx`, `team.tsx`, `contact.tsx`, `case-studies.index.tsx`) `head()` meta blocks | All say "— Bhanix" | All say "— BHANIXS" | text-only, but **structural in scope** (9 files × 4 meta lines each = ~36 edits) |
| `PillNav.tsx` L43 | `<span className="font-display font-semibold tracking-tight">Bhanix</span>` | `BHANIXS` | text-only |
| `PillNav.tsx` L79 (mobile menu brand) | `Bhanix` | `BHANIXS` | text-only |
| `Footer.tsx` L35 | `<span className="font-display text-xl font-semibold">Bhanix</span>` | `BHANIXS` (or "Bhanixs Group" per brief) | text-only |
| `Footer.tsx` L38–39 | "Bhanix is a deeptech engineering studio. We build the AI, robotics, on-chain, and spatial systems that move the frontier forward." | New tagline aligned to "Technology Firm" positioning | text-only |
| `Footer.tsx` L66 | `© {year} Bhanix. All rights reserved.` | `© {year} Bhanixs Group. All rights reserved.` (entity name per brief) | text-only |
| `Footer.tsx` L67 | `v.04 / MIDNIGHT` easter-egg tag | Update or remove | text-only |
| `Hero.tsx` H1 (L42–43) | `Engineer the future. Ship the impossible.` | `We build the technology that makes your business impossible to compete with.` | text-only |
| `src/data/caseStudies.ts` — every case study's card headline template references "Bhanix" implicitly only via `CaseStudyCard`'s "How {company}..." pattern (no direct "Bhanix" string in card titles) — but multiple `role`/`challenge` fields explicitly say "Bhanix": e.g. `erthaloka.feedback.quote` "Bhanix shipped what most teams only diagram..."; `xplored.challenge` "...needed an engineering team..."; several `stats`/`role` fields | scattered "Bhanix" mentions across ~6 case studies | Replace with "BHANIXS" | text-only |

### 10.2 Colour system

| Location | Current | New | Complexity |
|---|---|---|---|
| `src/styles.css` L53 | `--primary: oklch(0.60 0.26 232)` (indigo/blue) | `#1D9E75` (teal-primary), converted to OKLCH or kept as hex override | CSS-only |
| `src/styles.css` L55 | `--primary-glow: oklch(0.72 0.22 228)` | `#00C2B2` (teal-light) equivalent | CSS-only |
| `src/styles.css` L60 | `--accent: oklch(0.60 0.26 232)` | teal equivalent | CSS-only |
| `src/styles.css` L66 | `--ring: oklch(0.60 0.26 232)` | teal equivalent | CSS-only |
| `src/styles.css` L71 | `--eyebrow: oklch(0.72 0.18 230)` | teal equivalent | CSS-only |
| `src/styles.css` L72–74 | `--gradient-hero`, `--shadow-glow` use indigo oklch | recompute with teal oklch | CSS-only |
| `src/styles.css` L47–70 | Full `:root` block uses a blue-hued neutral scale (`oklch(... 240)` / `238` hue backgrounds) | Replace with obsidian scale from `v2/css/design-system.css` (`#0D1117`/`#111820`/`#161D2A`/`#080C11`) | CSS-only, but touches every surface token — effectively a **full token-file rewrite** |
| `src/data/caseStudies.ts` — 17 `tone` fields, ad-hoc Tailwind gradients (`from-indigo-500/30`, `from-purple-500/30`, etc., see 02.1) | 17 one-off non-brand gradients | Standardize on teal/gold system or a small approved secondary set | structural (touches every case-study record) |
| `HeroSphere.tsx` L18–20, L41–42 (if reactivated) | Hardcoded indigo/violet hex (`#5b48ff`, `#7c6cff`, `#a89cff`, `#4f46e5`) | Teal equivalents, or delete the component entirely (currently unused — see 04.1) | CSS-only if kept; structural (deletion) otherwise |
| `case-studies.$slug.tsx` L270 | Client Feedback background glow: `oklch(0.7_0.18_155_/_0.18)` — already a green-ish hue, closest existing match to the new teal direction | Align exactly to `--teal-subtle`/`--teal-primary` | CSS-only |

### 10.3 Typography

| Location | Current | New | Complexity |
|---|---|---|---|
| `src/styles.css` L40–42 | `--font-sans: "Inter"...`, `--font-display: "Inter Tight"...`, `--font-mono: "JetBrains Mono"...` | `--font-display: 'Syne'`, `--font-body: 'DM Sans'`, `--font-mono: 'JetBrains Mono'` (unchanged) | CSS-only |
| `src/routes/__root.tsx` L92–94 | Google Fonts `<link>` for Inter/Inter Tight/JetBrains Mono | Swap to Syne/DM Sans/JetBrains Mono import (mirrors `v2/css/design-system.css` L10) | text-only (link href swap) |
| Every component using `.font-display`/default body font | Inter/Inter Tight rendering | Syne/DM Sans rendering — no class-name changes needed since the swap happens at the token level, but **visual rhythm (line-height, letter-spacing) should be re-audited** since Syne is a display face with different metrics than Inter Tight | CSS-only + visual QA pass (structural in effort, not in code) |

### 10.4 Sections/pages to remove

| Item | Location | New value | Complexity |
|---|---|---|---|
| Pricing section | `src/components/sections/Pricing.tsx`, rendered in `index.tsx` L33 and `pricing.tsx` L32 | Remove import + render; delete file or archive | structural |
| Calculator section | `src/components/sections/Calculator.tsx`, rendered in `index.tsx` L32 and `pricing.tsx` L33 | Remove import + render; delete file or archive | structural |
| `/pricing` route entirely | `src/routes/pricing.tsx` | Delete route file (removes Pricing+Calculator+Faq+CtaBand composite page); if FAQ content should survive, relocate the `Faq` component to another page | structural |
| `/team` page | `src/routes/team.tsx` | Delete route file | structural |
| Nav links "Pricing" / "Team" | `PillNav.tsx` `links` array L7–14 (desktop) — both entries; mobile menu reuses same array | Remove both entries (2 of 6 links) | structural (small, but breaks all existing internal links to `/pricing` and `/team` — audit `Footer.tsx` L19 `{to:"/pricing", label:"Pricing"}` and any `PillLink to="/pricing"` in `Calculator.tsx`/`Pricing.tsx` themselves, which become moot once those files are deleted) | 
| Footer "Pricing" link | `Footer.tsx` L19 | Remove from `cols` "Company" array | text-only |
| 4 fabricated testimonials | `src/components/sections/Testimonials.tsx` L3–28 (`items` array: David M./Vertex Solutions, Sarah L./BrightPath Robotics, Leo V./FluxGrid, Clara D./NovaPath Health) | Replace with real, verifiable client testimonials, or remove the section entirely until real quotes exist | structural (content sourcing required, not just code) |
| Self-referential case study `ai-agent-command-system` | `src/data/caseStudies.ts` L34–121 | Delete entry (internal AI-agent build, company listed as "Bhanix" — not a client case study) | structural |
| Self-referential case study `internal-rnd` | `src/data/caseStudies.ts` L958–1011 | Delete entry (company "Internal R&D" / clientType "Bhanix Labs") | structural |
| Downstream effects of removing the above 2 entries | `CaseStudies.tsx` L27 `caseStudies.slice(0,4)` will resolve to a different 4 after deletion — re-verify which 4 studies surface on the homepage; `projects.tsx` category list will lose "R&D" as a filterable category (only populated by `internal-rnd`) and "Agentic AI" will still exist (also populated by `cravent`) | Re-audit homepage teaser + filter categories post-deletion | structural |

### 10.5 Fabricated / unverifiable claims

| Location | Current (verbatim) | New | Complexity |
|---|---|---|---|
| `about.tsx` L39–41 | "Bhanix was founded by a group of engineers who had spent a decade shipping deeptech inside **Boston Dynamics, DeepMind, Anduril, and Coinbase.**" | Remove unverifiable pedigree claims; replace with verifiable founding narrative | text-only |
| `about.tsx` L20 | "Full IP transfer from commit one. **We are mercenaries, not landlords.**" | Remove this phrase | text-only |
| `about.tsx` L36 | H1: "**A small studio** for hard problems." | Remove "small studio" framing (brief explicitly flags this) | text-only |
| `about.tsx` route meta L9 | description: "Bhanix is **a small studio** of senior engineers..." | Rewrite | text-only |
| `about.tsx` L24 | `locations = ["London", "San Francisco", "Berlin", "Singapore"]` | `["Bengaluru", "Dubai", "Singapore", "London"]` (HQ Bengaluru, + Dubai/Singapore/London) | text-only |
| `contact.tsx` L63 | HQ Channel: "London · San Francisco · Berlin" | "Bengaluru · Dubai · Singapore · London" | text-only |

### 10.6 Contact details

| Location | Current | New | Complexity |
|---|---|---|---|
| `contact.tsx` L61 | `engage@axon.studio` | `engage@bhanixs.com` **(PLACEHOLDER per user — final address not yet confirmed)** | text-only |
| `contact.tsx` L62 | `+44 20 4541 0119` (Signal) | Confirm correct number/channel with client before publishing — currently a UK number inconsistent with a Bengaluru-HQ'd firm | text-only, pending confirmation |

### 10.7 New content to add

| Item | Suggested location | Complexity |
|---|---|---|
| Patent-for-Equity model explanation | New section, likely on `/about` or a dedicated `/model` page, and referenced from `/services` or `/pricing`-replacement | structural (new content + new component) |
| UAE / Dubai in locations | `about.tsx` locations array (see 10.5) + `contact.tsx` HQ line + `Footer.tsx` if locations are surfaced there (currently not) | text-only once copy is finalized |
| "Bhanixs Group" entity name in footer | `Footer.tsx` copyright line (see 10.1) | text-only |
| Bengaluru as HQ | `about.tsx` L24 (order locations with Bengaluru first/labeled HQ), `contact.tsx` HQ Channel | text-only |

### 10.8 Miscellaneous findings worth flagging to the rebuild team (not explicitly in the brief, but discovered during extraction)

- `HeroSphere.tsx` (three.js orb) is fully built but **never rendered** — decide keep/delete rather than carry dead code forward.
- Three `.mp4` files at `public/` root (`bg-2.mp4`, `bg-vid.mp4`, `WhatsApp Video 2026-06-08...mp4`) are unreferenced — likely leftovers from an abandoned video-hero attempt (Hero currently uses a static `.jpg`). Also an empty folder `public/WhatsApp Unknown 2026-06-07 at 10.48.27 PM/`.
- `carousel.tsx`/`recharts`/`chart.tsx`/`react-hook-form`+`zod` are installed and partially wrapped but not actually used on any live page — candidates for removal to cut bundle size in the rebuild, unless the new design intends to use them.
- The contact form is **fully non-functional** (simulated 700ms delay, no backend) — the rebuild should either wire a real submission endpoint or clearly scope this as a follow-up integration task.
- `team.tsx` has a redundant `export default` pattern inconsistent with sibling route files (cosmetic, zero functional impact, but worth normalizing if the file is kept in any form).
- Case-study "Impact" (`Saving Time. Boosting Output.`) and "Tool Stack" (`What Powered the Build`) and "Products" (`What We Built`) H2s are **hardcoded identically for every case study** regardless of content — not data-driven per study, unlike `hero.headline`/`challenge`/`solutionsIntro` which are. Minor content-flexibility gap, not brand-critical.
- `Testimonials.tsx` is the only homepage section with zero scroll/entrance animation — an inconsistency independent of the fabricated-content issue, worth matching to the rest of the page's motion language if testimonials are kept in some form.

### 10.9 Prioritised action list

**First priority (highest impact, addresses brand-critical trust/legal risk, much of it is text-only)**
1. Remove all fabricated content: 4 testimonials, pedigree claims (Boston Dynamics/DeepMind/Anduril/Coinbase), "mercenaries not landlords," fabricated team bios (delete `/team` entirely), 2 self-referential case studies.
2. Fix factually wrong contact info: email domain, HQ/location list (Bengaluru/Dubai/Singapore/London), remove "small studio" framing.
3. Global rename Bhanix → BHANIXS across all meta tags, nav brand, footer, and the ~6 case-study copy mentions.

**Second priority (structural but well-scoped, high visual impact)**
4. Full colour-token swap in `src/styles.css` from indigo/blue OKLCH to the teal/obsidian palette in `v2/css/design-system.css` — this single file change cascades correctly through nearly every component because the whole site consumes `--primary`/`--surface-card`/etc. as tokens, not hardcoded colours (the one exception being the 17 ad-hoc case-study `tone` gradients and `HeroSphere.tsx`, which need manual touch-up).
5. Font swap (Inter/Inter Tight → Syne/DM Sans) via the `__root.tsx` font `<link>` and the two `--font-*` tokens — low code complexity, but budget time for a visual QA pass since Syne's metrics differ from Inter Tight and headline line-heights/tracking were tuned for the old face.
6. Remove Pricing section, Calculator section, and the `/pricing` route; update `PillNav`/`Footer` link lists accordingly.

**Third priority (new content requiring business input before engineering)**
7. Write and integrate the Patent-for-Equity model explanation (net-new content, needs copy from the client before a component can be built).
8. Source real, verifiable client testimonials to replace the removed fabricated ones (or ship without a testimonials section until quotes are secured).
9. Confirm final `engage@bhanixs.com`-style email and phone/Signal number before launch (currently placeholder per user note).
10. Standardize the 17 case-study `tone` gradients onto the new brand palette, and do a bundle-size pass to remove unused dependencies (`three`/`@react-three/*` if `HeroSphere` is deleted, `embla-carousel-react`, `recharts`, `react-hook-form`+`zod` if the contact form stays a simple uncontrolled form).
