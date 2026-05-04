# Audit Log - Canon RF 50mm f/1.2 L USM

Patent: US 2019/0265441 A1, Numerical Data 2 (Katayose / Canon)
Catalog version: fd7376b

## 2026-05-04 - Glass relabel + retained-data audit

### Source Note

- The user-provided PDF was `US20190278068A1.pdf`, which is US 2019/0278068 A1 for a Canon zoom-lens family and does not contain the RF 50mm f/1.2 Numerical Data 2 prescription.
- The RF 50mm f/1.2 data file cites US 2019/0265441 A1. This audit used the USPTO PDF for US 2019/0265441 A1 and the Google Patents HTML text for the searchable Numerical Data 2 tables.

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| G2 / surface 2 | `glass` | `S-TIM25 (OHARA)` | `S-TIM28 (OHARA)` | Patent row 2 lists nd=1.68893, vd=31.07. The catalog S-TIM28 entry round-trips this pair; S-TIM25 is nd=1.67270. |
| G5 / surface 8 | `glass` | `S-TIM22 (OHARA)` | `666356 — dense flint (nd=1.66565, νd=35.64)` | Patent row 8 lists nd=1.66565, vd=35.64. No current catalog entry matches; code-based label prevents a false S-TIM22 Sellmeier match and preserves a future upgrade path. |
| G6 / surface 9 | `glass` | `S-LAH79 (OHARA)` | `954323 — ultra-high-index dense flint (nd=1.95375, νd=32.32)` | Patent row 9 lists nd=1.95375, vd=32.32. No current catalog entry matches; S-LAH79 is nd=2.00330. |
| G8 / surface 13 | `glass` | `S-NBH55 (OHARA)` | `738323 — niobium dense flint (nd=1.73800, νd=32.26)` | Patent row 13 lists nd=1.73800, vd=32.26. No current catalog entry matches; S-NBH55 is nd=1.80000. |
| G9 / surface 15 | `glass` | `S-LAL14 (OHARA)` | `764485 — lanthanum crown (nd=1.76385, νd=48.51)` | Patent row 15 lists nd=1.76385, vd=48.51. No current catalog entry matches; S-LAL14 is nd=1.69680. |
| G10 / surface 16 | `glass` | `S-TIM22 (OHARA)` | `666356 — dense flint (nd=1.66565, νd=35.64)` | Patent row 16 repeats the same nd/vd pair as G5; same code-based fallback rationale. |
| G11 / surface 18* | `glass` | `S-LAH89 (OHARA)` | `S-LAH58 / TAFD30 class (883408)` | Patent row 18 lists nd=1.88300, vd=40.80. Catalog S-LAH58/TAFD30 entries match this 883408 glass class; S-LAH89 is nd=1.85150. |
| G12 / surface 20 | `glass` | `S-LAH89 (OHARA)` | `S-LAH58 / TAFD30 class (883408)` | Patent row 20 repeats nd=1.88300, vd=40.80; same relabel as G11. |
| G14 / surface 23 | `glass` | `S-TIM35 (OHARA)` | `S-NBH52 (OHARA)` | Patent row 23 lists nd=1.67300, vd=38.15. Catalog S-NBH52 round-trips this pair; S-TIM35 is nd=1.69895. |

### Phase 2 - Retained-information audit

- Confirmed all surface `R`, `d`, `nd`, and `vd` values against US 2019/0265441 A1 Numerical Data 2 rows 1-25.
- Confirmed variable spacing `d19`: 1.95 mm at infinity and 16.11 mm at closest distance.
- Confirmed patent-stated design values: EFL 51.10 mm, F-number 1.25, half field 22.95 degrees, image height 21.64 mm, total lens length 111.01 mm, and BF 14.60 mm.
- Confirmed group focal lengths LF=198.77 mm and LR=44.87 mm, unit focal lengths L1=61.31 mm and L2=586.40 mm, and all single-lens focal lengths already stored in the data file.
- Confirmed aspherical surfaces 1, 18, and 25 use K=0 and the stored A4-A12 coefficients match the patent table.
- Semi-diameters remain project-estimated layout values; the patent table does not publish effective diameters for this application text.

### Phase 3 - Spectral / metadata enrichment

- No additional C/F/g-line indices or dPgF values are published in Numerical Data 2, so no spectral fields were added.
- Existing metadata already records patent year, design focal length/aperture, element count, group count, maker, and focus description.

### Phase 4 - Analysis sync

- Updated the element-by-element glass names for G2, G5, G6, G8, G9, G10, G11, G12, and G14 to match the audited data labels.
- Updated the D4 and G11 prose so it no longer names false S-TIM22 or S-LAH89 glasses.

### Verification

- `npm run typecheck` - passed.
- `npm run format:check` - passed.
- `npm run lint` - passed.
- `npm run test` - passed (116 files, 1507 tests; expected error-boundary console errors were emitted by tests).
- `npm test -- catalogMismatchScan glassRelabelCandidatesScan` - passed; Canon RF 50mm f/1.2 no longer appears in either generated report.
