# AGENTS.md — src/

## Purpose
Astro 6 site source for the GidsTek website. Components, pages, layout, and styles.

## Ownership
Owned by root AGENTS.md.

## Local Contracts
- `layouts/BaseLayout.astro` is the only layout — all pages must use it
- `components/SeoHead.astro` handles all meta tags — do not add `<head>` meta directly in pages
- WhatsApp CTA is `components/WhatsAppCTA.astro` — pre-filled context messages per category; do not hardcode WhatsApp links in pages
- Hardware catalog rendering: `components/HardwareCatalog.astro` and `components/HardwareCard.astro` — data sourced from `src/data/hardware.ts`
- CSS-only hamburger: no JS in `components/Nav.astro` — do not add event listeners to the nav
- `styles/global.css` holds all design tokens — do not hardcode colours, fonts, or spacing

## Work Guidance
- New page: add to `src/pages/`; use `BaseLayout.astro` and `SeoHead.astro`
- New component: place in `src/components/`
- Product display changes: edit `HardwareCard.astro` or `HardwareCatalog.astro`

## Child DOX Index
- `data/AGENTS.md` — typed catalog data: hardware.ts, services.ts, site.ts
