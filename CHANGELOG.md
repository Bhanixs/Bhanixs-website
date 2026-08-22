# Changelog

This repo tracks major site iterations as tagged versions rather than a conventional
single-app release history, since `v1`, `v2`, and `v3` are three different codebases
living side by side during the rebrand. Each is tagged in git (`git tag`) so any
version can be checked out on its own.

## v3.0.0 — 2026-08-22

Complete rebrand to the BHANIXS "Technology Firm" positioning, built as a static
HTML/CSS/vanilla-JS site in `v3/`, per the BHANIXS Complete Website Rebuild Brief.

- New design system: obsidian/teal palette, Syne + DM Sans + JetBrains Mono type system, full spacing/radius/animation token set.
- New logo integrated (favicons, OG image, nav mark, wordmark) generated from the real BHANIXS brand assets.
- All fabricated content removed: fake testimonials, unverifiable pedigree claims ("ex-Boston Dynamics/DeepMind/Anduril/Coinbase"), "mercenaries not landlords," fabricated team bios, self-referential case studies, the hourly-rate pricing calculator.
- Case studies rewritten around 3 domains (AI & Intelligent Systems / Blockchain & Decentralised Infrastructure / Spatial Computing) using real client data cross-checked against `src/data/caseStudies.ts` — 9 real engagements (Erthaloka, ErthaExchange, Erthanomy, Arteco, Cravent, Travellers Triibe, XplorED, Valonk, Vivium).
- New pages: What We Do, How We Work (including the Patent-for-Equity model and 3 engagement models), Our Work, About, Contact.
- GA4 + Cloudflare Web Analytics wired up with a unified event-tracking helper (CTA clicks, nav clicks, section views, scroll depth, form submits, case-study/filter clicks). Analytics IDs are placeholders pending real credentials.
- Placeholder contact email/phone/legal-registration data clearly flagged inline pending confirmation from the founder — see `v3/README.md`.

See `v3/README.md` for the full pre-launch checklist.

## v2 — prototype (untagged history, superseded)

Static HTML/CSS prototype in `v2/` exploring the teal/obsidian rebrand direction and a
`docs/SITE_EXTRACTION.md` audit of the (then-current) live site. Superseded by `v3/`.

## v1.0.0 — production baseline

The original TanStack Start / React 19 / Tailwind v4 site in `src/`, deployed to
Cloudflare Workers (see `wrangler.jsonc`). Indigo/blue "Bhanix — Deeptech engineering
studio" branding, predates the BHANIXS Group rebrand.
