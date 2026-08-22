# BHANIXS — v3

Complete rebrand of the BHANIXS marketing site, built as a static HTML / CSS / vanilla JS
site per the "BHANIXS Complete Website Rebuild Brief" (design system, copy, and page specs
all sourced from that brief — nothing here was freehanded).

## What this is

- `index.html`, `about.html`, `contact.html`, `what-we-do.html`, `how-we-work.html`, `our-work.html` — the six primary pages.
- `case-studies/*.html` — one page per real client engagement, **generated** from `data/case-studies.json` (see below). Do not hand-edit these files directly — edit the JSON and regenerate.
- `css/design-system.css` — design tokens only (colour, type, spacing, motion). Matches Section A of the brief verbatim.
- `css/main.css` — all component/layout styles.
- `js/main.js` — nav scroll state, mobile drawer, scroll-reveal (`IntersectionObserver`), contact form UX.
- `js/analytics.js` — GA4 + Cloudflare Web Analytics loader and a unified `window.bhanixsTrack()` event helper (CTA clicks, nav clicks, section views, scroll depth, form submits, case-study clicks, work-page filter clicks).
- `assets/logo/` — favicons, OG image, nav mark, and wordmark, all generated from the real BHANIXS logo files you supplied (cropped/composited via the scripts that were used once and are not needed again).
- `assets/clients/` — real client logos (Erthaloka, Arteco, Cravent, Travellers Triibe, XplorED, Vivium), copied from the current live site's asset folder.
- `data/case-studies.json` — the real case-study content, extracted verbatim from `src/data/caseStudies.ts` (the current production site's data file). Stats and quotes in here were cross-checked against that source — nothing was invented.

## Regenerating case study pages

```bash
node generate-case-studies.cjs
```

Edit `data/case-studies.json`, then re-run. It fully regenerates every file under `case-studies/`.

## Local preview

Any static file server works, e.g.:

```bash
python3 -m http.server 8743
# then open http://localhost:8743/index.html
```

## Before this goes live — placeholders to replace

Everything below is marked inline with a small "placeholder" badge in the HTML so it's easy to find (search for `placeholder-flag`):

1. **Contact email** — `engage@bhanixs.com` is a placeholder. Confirm the real domain email.
2. **Phone / Calendly link** — not wired yet (`contact.html`, "Schedule a call").
3. **Legal entity registration reference** — footer says "registration ref pending."
4. **Team page content** (`about.html#team`) — real names, roles, and photos needed; currently states this is pending rather than fabricating people, per the brief's rule against invented bios.
5. **Testimonials** (`index.html#testimonials`) — intentionally empty with an honest placeholder message, per the brief's rule against fabricated quotes. Add real, verifiable testimonials as they're collected.
6. **Patent filing details** (`about.html#ip`) — states patents exist per the brief but specific filing numbers are marked pending.
7. **Contact form backend** — the form is currently a simulated submit (no network call). Wire up Formspark, Resend, or similar before launch.
8. **Analytics IDs** — `js/analytics.js` has two placeholders to fill in:
   - `GA4_MEASUREMENT_ID` (Google Analytics 4 measurement ID, format `G-XXXXXXXXXX`)
   - `CF_BEACON_TOKEN` (Cloudflare Web Analytics beacon token, from the Cloudflare dashboard)

   Until real values are set, both integrations no-op with a console notice — no broken requests, no fake data.

## What's intentionally NOT here yet

- Case-study **screenshots/videos** — the brief calls for abstract domain visualizations rather than product screenshots for case-study heroes; none are wired in yet.
- A **Privacy Policy / Terms** page — footer links are placeholders (`#`).
- The **Patent-for-Equity** page content lives inline on `how-we-work.html#patent-for-equity` rather than as its own route, per the brief's structure.

## Versioning

See the root `CHANGELOG.md`. This folder is tagged `v3.0.0` in git.
