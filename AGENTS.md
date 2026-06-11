# AGENTS.md — PythonAlgos / GidsTek Website

## Purpose
Static Astro 6 website for GidsTek, an IT hardware reseller in Mumbai. Hardware catalog across 6 categories (laptops, servers, networking, firewall, ups, cctv), WhatsApp inquiry CTAs, all products price-on-request. Delivered as a barter against a hardware purchase — replaces a WordPress site with 14.54s load time and CLS of 1.0.

**Branch note:** This repo contains two unrelated projects on different branches:
- `master` branch — GidsTek website (this context)
- `main` branch — The Sentinel Visualizer (SvelteKit + TensorFlow.js WASM ML explainer; separate project)

Confirm active branch before editing. Do not mix work across branches.

## Ownership
- Owner: Zaki Jariwala (jariwalazaki@gmail.com)
- GidsTek active branch: `master` / `claude/read-handover-docs-7dvoD`
- Deployed: Cloudflare Pages (auto-deploys from `master`)
- Node ≥22.12.0 required

## Local Contracts
- `priceOnRequest: true` for all products — no cart, no checkout, no pricing fields
- All catalog data in `src/data/hardware.ts` and `src/data/services.ts` — do not hardcode product data in components
- `public/_headers` supplies all 5 security headers that were missing from the original site — do not weaken or remove any
- `public/_redirects` maps all legacy WordPress URLs — do not remove existing entries
- CSS-only hamburger nav — no JavaScript toggle; do not add JS to the nav
- GSTIN placeholder is in `src/data/site.ts` — replace when deal closes and GSTIN is confirmed
- TypeScript throughout — maintain strict typing in all new code

## Work Guidance
- Add product: add typed entry to the relevant category array in `src/data/hardware.ts`
- Add service: add entry to `src/data/services.ts`
- WhatsApp CTA copy: `src/components/WhatsAppCTA.astro`
- Build: `npm run build`; dev: `npm run dev` (Node ≥22.12.0)

## Verification
- `npm run build` completes without errors
- Lighthouse: Performance ≥90, CLS = 0
- All 5 security headers present in `public/_headers`
- All legacy WordPress paths return 301 per `public/_redirects`

## Child DOX Index
- `src/AGENTS.md` — Astro component and page structure, layout conventions
- `src/data/AGENTS.md` — typed catalog data contracts: hardware.ts, services.ts, site.ts
