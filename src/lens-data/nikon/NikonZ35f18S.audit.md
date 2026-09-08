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

### Sensor plate and aperture calibration

- Restored source surfaces 22–23: t=0.074×s, nd=1.51680, vd=64.13, Ri=1.2×s, followed by BF=0.0425×s. Surface 21 now carries only the source air gap [0.751, 0.545]×s. The plate stays fixed with the sensor and does not change Gaussian EFL.
- Kept the production count at 11 lens elements, with the additional modeled sensor plate labeled CG. The catalog glass coordinate equivalent does not identify a production supplier.
- Aligned nominal aperture calibration / first stop with the source f/1.85 while retaining marketed f/1.8. The source focus-dependent stop radius is still not modeled; no source-backed correction to the Gr1 power or wide-open surface intersection was found.

### Sensor-plate removal — diagram convention

At the user's request, removed the sensor-cover element and surfaces 22–23. Restored the final physical air-spacing endpoints to [0.8675, 0.6615]×s and the BF label, preserving the sensor position. The plate's refraction is deliberately omitted. Physical scaling, source f/1.85 calibration and the explicit source limitations are retained. Removed the plate-only regression and retained checks for eleven elements, final lens surface 21A and both sensor-spacing endpoints.
