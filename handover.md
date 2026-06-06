# Handover Brief — Zaki Jariwala
**Generated:** 2026-06-06  
**For:** Chief of Staff  
**Status:** Active — multiple threads in progress

---

## Who Is Zaki

- **Role:** Systems Engineer (Linux/Windows infrastructure) + Web Developer (Astro, Cloudflare, JS)
- **Location:** Mumbai, India
- **Working style:** Technically deep, prefers async comms, optimises hard before spending

---

## Active Projects

### 1. Laptop Purchase — ThinkPad E14 Gen 7 (URGENT / TIME-SENSITIVE)

**What:** Buying a Lenovo ThinkPad E14 Gen 7 (model 21T9005SIG) for personal use.

**Spec confirmed:**
- Intel Core 5 210H / 16GB DDR5 / 512GB SSD / 14" WUXGA
- Bundled: 3yr Premier NBD Onsite + 3yr Accidental Damage Protection + backpack
- Single unit — seller has **only one in stock**

**Quote received:** Rs 85,500 + 18% GST = **Rs 1,00,890 all-in**  
(Note: original quote was bulk pricing; single-unit price confirmed same)

**Seller:** GidsTek (ALH Solutions) — Aliasgar Panjwani  
- Phone: (+91) 8097860140  
- Email: info@gidstek.com  
- Address: Kurla (West), Mumbai – 400070

**AMD quote:** Also requested — Ryzen 7 250 variant (8c/16t, Radeon 780M, NPU) — **pending response from seller**

**Pending action:**
- [ ] Follow up with seller on AMD variant quote
- [ ] Initiate barter negotiation (see Project 2)
- [ ] Confirm final all-in price before committing

---

### 2. GidsTek Website — Barter Negotiation (ACTIVE)

**Objective:** Trade web development work (minimum Rs 15,000 equivalent) in exchange for a price reduction on the laptop — ideally bringing all-in from Rs 1,00,890 to Rs 85,500 (i.e., seller absorbs the GST in their margin).

**Status:** Demo site fully built and pushed to GitHub. Ready to present.

**What was built:**
- Full Astro 6 static site replacing gidstek.com
- Repo: `zakijariwala/PythonAlgos` (master branch) — will be renamed or transferred
- Deploy target: Cloudflare Pages (free tier)
- Build: `npm run build` → `dist/`
- Stack: Astro 6 + Tailwind CSS v3 + @fontsource/inter

**Site features delivered:**
- Hardware catalog (9 products: Lenovo, HP, Dell laptops; Dell/HP servers; Cisco switch/firewall; APC UPS; Hikvision CCTV)
- WhatsApp CTA on every section with pre-filled context messages (wa.me/918097860140)
- Floating WhatsApp button (all pages)
- CSS-only mobile hamburger — zero JavaScript
- LocalBusiness JSON-LD schema (Mumbai local SEO)
- All 5 missing security headers (`public/_headers`) — fixes Snyk "Grade capped at A"
- Redirects from old WordPress URLs (/about-us, /lets-connect, etc.)
- Footer with GST placeholder, address, copyright 2026
- 6 pages: Home, Hardware, Services, About, Contact, 404

**Evidence for pitch (all verified, not assumed):**

| Issue | Current site | New site |
|---|---|---|
| Cold load | 14.54s | <1s (Cloudflare edge) |
| DOMContentLoaded | 10.16s | — |
| CLS score | 1.0 (maximum) | 0 |
| Total requests (cold) | 136 | ~20 |
| SSL grade | B | A (after Cloudflare config) |
| Security headers | 5 missing | All present |
| Hardware catalog | None | 9 products with WA inquiry |
| WhatsApp CTA | Plugin installed, poor UX | Floating + inline + banner |
| Demo content indexed | Yes (Vacation, Elements) | Removed |
| Copyright year | 2020 | 2026 |

**Agency equivalent value:** Rs 25,000–60,000 (Mumbai market rate)

**The ask:** "Bring the all-in to Rs 85,500." Do NOT say "waive GST" — say "bring the total to X." Seller absorbs tax in their margin, no legal awkwardness.

**Pending actions:**
- [ ] Deploy to Cloudflare Pages to get preview URL (connect `zakijariwala/PythonAlgos` repo)
- [ ] Send pitch email/WhatsApp to Aliasgar (draft ready — see context below)
- [ ] Rename repo from PythonAlgos → gidstek-site (optional, before presenting)
- [ ] Update `src/data/site.ts` with real GSTIN once confirmed with seller

**Pitch message (WhatsApp / email):**

> Hi [Name], I'm Zaki — we spoke about the ThinkPad E14 Gen 7. Before confirming the order I took a look at gidstek.com. I do web dev professionally and found a few things that are likely costing you leads: your layout shift score is the worst possible (1/1 — Google ranks on this directly), your SSL is graded B, five security headers are missing, and there's leftover demo content (Vacation, Elements pages) indexed by Google. I ran a full technical audit and built a replacement site — Astro + Cloudflare Pages, sub-1s load, hardware catalog with WhatsApp inquiry on every product, all security issues resolved. Hosting is free forever on Cloudflare. Agency rate for this in Mumbai: Rs 25,000+. My ask: bring the all-in to Rs 85,500. Worth a conversation?

---

### 3. Laptop Selection — Research Complete (CLOSED / DECIDED)

Full evaluation done. Decision: **E14 Gen 7 is the right buy** for the stated requirements (repairability, dev workload, budget, 5yr lifespan).

Key conclusions:
- Non-soldered RAM (SoDIMM) + dual M.2 — upgradeable
- AMD Ryzen 7 250 variant technically superior (8c/16t vs 4P+8E, Radeon 780M > Intel Xe, NPU, better thermals) — request AMD quote before committing
- MacBook: ruled out (over budget, soldered, breaks Linux tooling)
- Framework: ruled out (not sold in India, import-only, over budget) — revisit if relocating to Europe
- E16 Gen 3: same internals, 16" screen, slightly higher price — skip unless screen size matters

---

## Pending Decisions Requiring Zaki's Input

| Decision | Context | Urgency |
|---|---|---|
| Confirm AMD quote or proceed with Intel | AMD variant likely better value; waiting on seller | High |
| Send barter pitch | Demo is ready, site is built | High |
| Deploy to Cloudflare Pages | Needs 10 min in CF dashboard | High (needed before pitch) |
| Rename GitHub repo | `zakijariwala/PythonAlgos` → `zakijariwala/gidstek-site` | Low |
| Add real GSTIN to site | Requires input from seller post-deal | Post-deal |

---

## Technical Assets Created This Session

| Asset | Location | Purpose |
|---|---|---|
| GidsTek Astro site | `zakijariwala/PythonAlgos` master | Barter deliverable |
| Full site audit (Lighthouse JSON) | Session context | Evidence for pitch |
| Network waterfall screenshots | Session context | Evidence for pitch |
| SSL Labs report | Session context | Evidence for pitch |
| Snyk security headers report | Session context | Evidence for pitch |
| Barter pitch draft | This document (above) | Ready to send |

---

## Quick Reference

| Item | Value |
|---|---|
| Seller WhatsApp | wa.me/918097860140 |
| Seller email | info@gidstek.com |
| Laptop model | Lenovo ThinkPad E14 Gen 7 — 21T9005SIG |
| Current all-in price | Rs 1,00,890 |
| Target price | Rs 85,500 |
| Gap to close | Rs 15,390 (≈ GST amount) |
| Site repo | zakijariwala/PythonAlgos (master) |
| Site build command | `npm run build` (output: `dist/`) |
| CF Pages deploy | Build: `npm run build` / Output: `dist` |

---

## Notes for Chief of Staff

- Zaki is the only decision-maker on the purchase. Do not commit to a price or send the pitch without his sign-off.
- The seller has only **one unit in stock** — there is no alternative source pressure. Do not use "I'll go elsewhere" as leverage.
- The barter pitch is genuine, not a bluff. The site is fully built and deployable today.
- The AMD quote is outstanding — do not close the deal until that number is in hand, unless seller indicates the unit may sell.
- All monetary figures are in Indian Rupees (INR / Rs). GST is 18%.
- Preferred contact method with seller: WhatsApp (industry standard in Mumbai B2B).
