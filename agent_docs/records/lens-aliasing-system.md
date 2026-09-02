# Lens Aliasing System

## Summary

- Add source-backed alternate marketed identities and physical manufacturers without duplicating optical prescriptions
  or canonical lens routes.

## Changes

- Added `aliases` and `manufacturedBy` to the lens-data contract with direct source links, optional mount overrides,
  per-lens validation, and catalog-wide alias-collision checks.
- Integrated relationships into generated summaries, maker and mount pages, lens-index filtering and grouping, search,
  breadcrumbs, lens identity UI, and structured data.
- Seeded the Samyang/Rokinon marketed-name relationship and the Hasselblad/Fujinon manufacturing relationship.
- Kept commercial product claims separate from patent attribution and deferred a dedicated commercial relationship view
  to `FEATURE_ADDITION_PLAN.md`.

## Verification

- `npm run typecheck` — passed
- `npm run format:check` — passed
- `npm run lint` — passed
- `npm run test` — passed, 2,551 tests
- `npm run build` — passed, 1,198 routes prerendered
- `npm run seo:audit` — existing failure remains for `/formats/1/1.7-inch-type`; the slash-containing taxonomy id is not
  captured by the existing single-segment format route.

## Follow-ups

- Implement the separately planned commercial product relationship view when that work is prioritized.
- Correct the pre-existing slash-containing image-format route independently of this feature.
