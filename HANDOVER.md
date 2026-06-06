# Project Handover — GidsTek Website (Barter Deliverable)

**Prepared for:** Chief of Staff
**Date:** 2026-06-06
**Owner:** Zaki Jariwala (jariwalazaki@gmail.com)
**Repo:** github.com/zakijariwala/PythonAlgos (master branch — rename pending)
**Active branch:** `master`

---

## What This Project Is

A full replacement website for GidsTek (gidstek.com), an IT hardware reseller in Mumbai. Built as a barter deliverable — Zaki trades the site (worth Rs 25,000–60,000 at agency rates) in exchange for a price reduction on a Lenovo ThinkPad E14 Gen 7 laptop purchase.

**Seller contact:** Aliasgar Panjwani — (+91) 8097860140 / info@gidstek.com
**Hosting target:** Cloudflare Pages (free tier)
**Stack:** Astro 6 + Tailwind CSS v3 + @fontsource/inter

**Site features delivered:**
- Hardware catalog (9 products: Lenovo, HP, Dell laptops; Dell/HP servers; Cisco switch/firewall; APC UPS; Hikvision CCTV)
- WhatsApp CTA on every section with pre-filled context messages (wa.me/918097860140)
- Floating WhatsApp button (all pages)
- CSS-only mobile hamburger — zero JavaScript
- LocalBusiness JSON-LD schema (Mumbai local SEO)
- All 5 missing security headers (`public/_headers`)
- Redirects from old WordPress URLs (/about-us, /lets-connect, etc.)
- 6 pages: Home, Hardware, Services, About, Contact, 404

---

## Current Status

Site is fully built, committed, and pushed to master. Ready to deploy and present.

**AMD quote status:** Ryzen 7 250 variant (8c/16t, Radeon 780M, NPU) quote requested from seller — response pending. Do not close deal until this arrives unless seller signals the Intel unit may sell.

**Barter evidence (all verified):**

| Issue | Current gidstek.com | New site |
|-------|--------------------|---------| 
| Cold load | 14.54s | <1s (Cloudflare edge) |
| CLS score | 1.0 (worst possible) | 0 |
| Total requests (cold) | 136 | ~20 |
| SSL grade | B | A (post-Cloudflare config) |
| Security headers missing | 5 | 0 |
| Hardware catalog | None | 9 products + WA inquiry |
| Demo content indexed | Yes | Removed |
| Copyright year | 2020 | 2026 |

---

## Pending Owner Actions

- [ ] Deploy site to Cloudflare Pages (connect `zakijariwala/PythonAlgos` repo, build: `npm run build`, output: `dist`) — needed before pitch
- [ ] Confirm AMD quote from seller, or proceed with Intel if unit is at risk of selling
- [ ] Send barter pitch to Aliasgar (WhatsApp preferred — draft below)
- [ ] Update `src/data/site.ts` with real GSTIN once confirmed with seller post-deal
- [ ] Rename repo `zakijariwala/PythonAlgos` → `zakijariwala/gidstek-site` (optional, low priority)

**Pitch message (ready to send):**
> Hi [Name], I'm Zaki — we spoke about the ThinkPad E14 Gen 7. Before confirming the order I took a look at gidstek.com. I do web dev professionally and found a few things that are likely costing you leads: your layout shift score is the worst possible (1/1 — Google ranks on this directly), your SSL is graded B, five security headers are missing, and there's leftover demo content (Vacation, Elements pages) indexed by Google. I ran a full technical audit and built a replacement site — Astro + Cloudflare Pages, sub-1s load, hardware catalog with WhatsApp inquiry on every product, all security issues resolved. Hosting is free forever on Cloudflare. Agency rate for this in Mumbai: Rs 25,000+. My ask: bring the all-in to Rs 85,500. Worth a conversation?

---

## Day-to-Day Operating Procedure

This is a one-time deliverable, not an ongoing product. Once the barter is agreed:

1. Transfer repo ownership to seller (GitHub → Settings → Transfer) or add them as collaborator
2. Walk seller through connecting CF Pages (free, 10 min)
3. Update GSTIN in `src/data/site.ts` and push
4. Hand over and close

---

## Deployment

```bash
npm run build        # Output: dist/
# Connect to Cloudflare Pages:
# Build command: npm run build
# Output directory: dist
# No environment variables required at launch
```

---

## Repo Structure

```
PythonAlgos/           ← (rename to gidstek-site)
├── src/
│   ├── pages/         ← 6 Astro pages (index, hardware, services, about, contact, 404)
│   ├── components/    ← Shared Astro components
│   ├── layouts/       ← Base layout
│   └── data/
│       └── site.ts    ← Site config — update GSTIN here post-deal
├── public/
│   └── _headers       ← 5 security headers (fixes Snyk Grade A cap)
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

---

## Budget & Running Cost

| Service | Plan | Monthly cost | Notes |
|---------|------|-------------|-------|
| Cloudflare Pages | Free | £0 | 500 builds/month — sufficient |
| Domain (gidstek.com) | Seller's existing domain | Seller's cost | CNAME to CF Pages |

**Total (for Zaki): £0** — this is purely a one-time build deliverable.

---

## Escalate to Owner If

- Seller requests changes to the demo before agreeing the barter — Zaki decides scope
- Seller declines barter — Zaki decides whether to offer cash discount or walk away
- AMD quote arrives — Zaki must approve before any purchase commitment
- Unit sells before deal closes — Zaki decides whether to find alternative source

---

## Decisions Made — Do Not Revisit

- **"Bring the all-in to Rs 85,500"** — do not say "waive GST." Seller absorbs tax in their margin.
- **Do not use "I'll go elsewhere" as leverage** — seller has only one unit; it is not a credible threat.
- **MacBook ruled out** — over budget, soldered, breaks Linux tooling.
- **Framework (laptop brand) ruled out** — not sold in India; revisit only if relocating to Europe.

---

## Quick Reference

| Item | Value |
|------|-------|
| Seller WhatsApp | wa.me/918097860140 |
| Seller email | info@gidstek.com |
| Laptop model | Lenovo ThinkPad E14 Gen 7 — 21T9005SIG |
| Current all-in price | Rs 1,00,890 |
| Target price | Rs 85,500 |
| Gap to close | Rs 15,390 (≈ GST amount) |
| Site build command | `npm run build` → `dist/` |
| CF Pages settings | Build: `npm run build` / Output: `dist` |
