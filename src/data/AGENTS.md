# AGENTS.md — src/data/

## Purpose
Typed TypeScript catalog data. Single source of truth for all site content — products, services, and site config.

## Ownership
Owned by `src/AGENTS.md`.

## Local Contracts
- `hardware.ts` — typed product catalog; `HardwareItem` interface with required fields including `priceOnRequest: true`; products grouped by 6 categories: laptops, servers, networking, firewall, ups, cctv
- `services.ts` — typed services list; each service has `title`, `description`, and `icon`
- `site.ts` — site-wide config: business name, WhatsApp number, GSTIN (placeholder until deal closes), address; GSTIN placeholder must be replaced before the site goes live under GidsTek's name
- All product data is `priceOnRequest: true` — do not add price fields or cart logic
- Maintain strict TypeScript types — do not use `any`

## Work Guidance
- Add product: add a typed object to the relevant category array in `hardware.ts`
- Add service: add a typed object to `services.ts`
- Update GSTIN: edit `site.ts` when confirmed
