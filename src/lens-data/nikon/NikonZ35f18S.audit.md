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

## 2026-07-29 - Catalog expansion follow-up

- Corrected L23 from probable `L-LAL14` to OHARA `L-LAL13`, the exact 1.69350 / 53.19 low-Tg row.

## 2026-07-29 - Remaining catalog-mismatch audit

- Rechecked JP 2019-090947 A Example 4 surface 11A; stored `R`, `d`, `nd=1.83441`, and `νd=37.28` agree with the patent.
- Relabeled double-aspheric L17 from probable `S-LAH55VS` to HOYA `M-NBFD10`, whose molded-glass row is an exact coordinate match and is consistent with the element's manufacturing context.
- Synchronized the analysis and removed the obsolete VS speculation. No geometry changed.

## 2026-08-11 - FCD515 triple-match recovery

- Rendered local `patents/JP2019090947A.pdf` page 17 and confirmed Example 4 surface 16 at
  `nd = 1.59282`, `vd = 68.62`, and `theta_gF = 0.544` (the patent text carries 0.5441).
- HOYA FCD515 reproduces the full published triple at `1.59282 / 68.63 / 0.5441`; the earlier family-only disposition
  predated the coefficient-backed FCD515 row used by the current catalog.
- Relabeled L22 as an FCD515 catalog equivalent. The patent does not identify a production supplier, and the existing
  patent-backed APD metadata remains unchanged.

## 2026-09-08 — Physical-unit conversion and source discrepancy review

- Applied s = 35/1.572 to all radii, thicknesses, retained rim sizes, element focal lengths and focus gaps; divided A_p by s^(p−1), preserving K and glass indices. Flat-radius sentinels remain flat.
- Source: JP 2019-090947 A PDF pages 17–18, Example 4 / Table 2; US 11,768,360 B2 repeats the prescription. Source radii, thicknesses, indices and six coefficient sets agree with the stored prescription before scaling.
- Calculated EFL 36.151757 mm at infinity, 31.245676 mm at close focus. Retained the separate 35 mm design reference. The 3.3% power discrepancy is unresolved, not established as rounding.
- The full-aperture ray encounters incompatible front-group profiles (surface 5 → 6). Existing rim trims do not correct the prescription. No unsupported power correction, rim inflation or iris reduction was made.
