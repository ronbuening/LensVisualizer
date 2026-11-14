# Audit Log - Hasselblad XCD 3,5/120mm Macro

Patent: US 2020/0192060 A1, Example 2

## 2026-05-19 - Missing-Sellmeier queue audit

### Patent evidence

- Local patent file checked: `patents/US20200192060A1.pdf`.
- Example 2 table rows confirmed:
  - L11: nd = 1.85026, vd = 32.27.
  - L23: nd = 1.91650, vd = 31.60.
  - L31: nd = 1.89286, vd = 20.36.
  - L51: nd = 1.80000, vd = 29.84.
  - L52: nd = 1.91650, vd = 31.60.

### Catalog-search disposition

- Matched L11 to existing coefficient-backed OHARA `S-LAH71` (`850323`).
- Corrected/used OHARA `S-LAH88` as the coefficient-backed `917316` match for L23/L52; the runtime catalog code was updated from rounded `916316` to vendor d-code `917316`.
- Matched L51 to existing coefficient-backed OHARA `S-NBH55` (`800298`).
- The original pass found no defensible public match for L31 / `893204`. The later Sweep 2 catalog pass added the S-NPH4 `893204` code path from public OHARA coefficients.

### Changes made

| Element | Before | After | Disposition |
|---|---|---|---|
| L11 | `Lanthanum flint, 850/323 (unmatched)` | `S-LAH71 (OHARA)` | Exact catalog match. |
| L23 | `Very high-index lanthanum flint, 917/316 (unmatched)` | `S-LAH88 (OHARA)` | Exact catalog match. |
| L31 | `Ultra-high-dispersion flint, 893/204 (unmatched)` | `893204 - ultra-high-dispersion flint ...` | Resolved by Sweep 2 via S-NPH4 code-backed catalog data. |
| L51 | `Dense flint, 800/298 (unmatched)` | `S-NBH55 (OHARA)` | Exact catalog match. |
| L52 | `Very high-index lanthanum flint, 917/316 ...` | `S-LAH88 (OHARA)` | Same glass as L23. |

### Analysis sync

- Updated element descriptions, glass table rows, and palette summary. Sweep 2 later resolved L31 by adding the missing `893204` catalog code.

## 2026-06-24 - APD, high-index, and SD audit

- Rechecked `patents/US20200192060A1.pdf`, Example 2 / Figure 5 and Figure 6 tables, against the current data file.
- Marked L21 `S-FPM3 (OHARA)` as inferred APD. The patent gives nd/vd and H*2 effective diameters, while the APD status is inferred from the S-FPM3 fluorophosphate class and chromatic-correction role.
- Confirmed the high-index elements remain L11, L23, L31, L51, and L52 (nd >= 1.8). L31 remains the explicit `893204` S-NPH4 code-backed disposition.
- Confirmed the SDs already come from the patent H*2 effective-diameter column halved. Figure 5 is consistent with those values, so no SD edits were made.
- Verification: `npm run generate:glass-reports`, `npm run typecheck`, `npm run format:check`, `npm run lint`, `npm run test`, and `git diff --check` passed.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Read Example 2 Fig. 6 on PDF page 6 (Sheet 5) at 160 dpi: surface 18 d = 31.25575 (fixed; not in the Fig. 7
  variable-gap table); surfaces 19–20 are one plate labeled COVER, 1.80 mm, nd 1.51633, νd 64.14 (H*2 58.00);
  20 → 21 is 0.10 mm. Surface 18 now stores 31.25575 instead of the folded 32.54309, with `rearPlates` COVER
  (OHARA S-BSL7, exact 1.51633 / 64.14 row, matching the file's OHARA element labels) and gapAfter 0.10 mm.
- Paraxial check against the previous data: EFL identical; defocus changes by 0.00026 mm at all three focus keyframes
  (rounding in the old 32.54309 versus 32.54283). Physical track grows by 0.613 mm, to 154.02 mm front vertex to image.

## 2026-11-10 — Metadata fill

- `catalog.fNumber.design: 3.5` from US 2020/0192060 A1 FIG. 7 (Sheet 5 of 12, PDF p. 6), INFINITY column:
  "F NUMBER 3.5000". The stop's `nominalFNumber` 3.5 matches it.
- `catalog.focalLengthMm.design: 120` from the same FIG. 7 column, "FOCAL LENGTH (mm) 120.0000"; ¶[0063] (p. 5)
  repeats "Focal length (infinity): 120 mm". The file is unscaled (surface 1 R 265.465 as printed in FIG. 6). No
  optical value changed.

## 2026-11-14 — Published finite conjugates

Patent: US 2020/0192060 A1, Example 2.

Paragraph 0041 (PDF p. 17, printed p. 4) defines the distance from image plane 5a and states that the arrangements for the following specific examples are the same. Figure 7 (PDF p. 6, Sheet 5) prints the precise object-distance row used here.

| Zoom / keyframe | Field | Before | After | Matching source gaps (mm) | Paraxial offset (mm / depths) | Other reference (depths) |
|---|---|---|---|---|---|---|
| 0 / 1 | `focus.conjugates` | Undeclared | 2000 mm, `image-plane` | THI2 8.84413; THI7 5.96115; THI11 37.35039; THI13 10.09897; THI16 9.59983 | +0.047468406 / +3.153972 | -37.149809 |
| 0 / 2 | `focus.conjugates` | Undeclared | 429.9341 mm, `image-plane` | THI2 1.41023; THI7 13.39504; THI11 4.62225; THI13 42.19990; THI16 10.22703 | +0.257358038 / +10.752610 | -1469.604284 |

Every added declaration is `consistent` with `referenceDiscriminated: true`. The source-published flags already include these states.
