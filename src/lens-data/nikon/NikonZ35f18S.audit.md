# Audit Log — Nikon NIKKOR Z 35mm f/1.8 S

Patent: JP 2019-090947 A, Example 4

## 2026-05-19 — Glass relabel audit + S-TIM3 catalog addition

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L12 / 3 | `glass` | `S-LAH79 (OHARA)` | `S-LAH98 (OHARA)` | Patent Example 4 row 3 lists nd=1.95375, vd=32.33; S-LAH98 matches the Ohara 954323 code family. |
| L13 / 4 | `glass` | `S-TIM2 (OHARA)` | `S-TIM5 (OHARA)` | Patent Example 4 row 4 lists nd=1.60342, vd=38.03; S-TIM5 round-trips the pair. |
| L14 / 6 | `glass` | `S-TIH14 (OHARA)` | `S-TIM28 (OHARA)` | Patent Example 4 row 6 lists nd=1.68893, vd=31.16; S-TIM28 is the Ohara-family match. |
| L15 / 7 | `glass` | `S-LAH51 (OHARA)` | `S-LAH89 (OHARA)` | Patent Example 4 row 7 lists nd=1.85150, vd=40.78; S-LAH89 round-trips the pair. |
| L21 / 14 | `glass` | `S-TIM25 (OHARA)` | `S-TIM3 (OHARA)` | Patent Example 4 row 14 lists nd=1.61293, vd=36.94. Source pass found Ohara S-TIM3 (613370) in both Ohara and refractiveindex.info, so a catalog entry was added instead of using a generic code. |

### Phase 2 — Retained-information audit

- Checked the flagged Example 4 rows against the patent table; stored `R`, `d`, `nd/vd`, and `Ri`-derived semi-diameters already match the published rows.
- No asphere, variable-gap, or metadata edits made.

### Phase 3 — Spectral / metadata enrichment

- Added `S-TIM3` to `glassCatalogData.ts` with Ohara/refractiveindex.info Sellmeier coefficients, code6 `613370`, and `PgF` from the catalog line indices.

### Phase 4 — Analysis sync

- Updated D1, D2, L21, and design-summary prose to match S-LAH98, S-TIM5, S-TIM28, S-LAH89, and S-TIM3.

### Verification

- `npm test -- dispersion` — passed.
- `npm run typecheck` — passed.
- `npm run generate:glass-reports` — passed; lens removed from the relabel-by-lens queue.
