# Audit Log - FUJINON XF23mmF2 R WR

Patent: US 2017/0351051 A1, Example 1

## 2026-06-15 - New-lens patent audit

### Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L14 / S7-S8 | `glass`, `dPgF` | `Unmatched (849401 high-index lanthanum flint; likely PGM aspheric melt)` | `849401 - high-index lanthanum flint (likely PGM aspheric melt; no exact public catalog match)`, `dPgF: -0.00435` | Patent Table 1 gives nd=1.84887, vd=40.12, theta_g,F=0.57197; no exact catalog entry was found, so the code and patent partial dispersion are retained. |
| L21 / S13-S14 | `glass`, `dPgF` | `Unmatched (803405 high-index lanthanum flint; likely PGM aspheric melt)` | `803405 - high-index lanthanum flint (likely PGM aspheric melt; no exact public catalog match)`, `dPgF: -0.0101` | Patent Table 1 gives nd=1.80312, vd=40.54, theta_g,F=0.56551; no exact catalog entry was found, so the code and patent partial dispersion are retained. |

### Retained-information audit

- Surface radii, infinity spacings, nd/vd values, theta_g,F values, and Table 2 focus spacings were checked against the patent.
- The file intentionally folds the patent optical member PP into the final air-equivalent BFD.
- The data-file close endpoint extends the same G2 motion to the production 0.22 m MFD; the patent beta=-0.041 row remains documented in the analysis.
- Semi-diameters remain ray-envelope estimates because the patent does not publish clear aperture diameters.

### Analysis sync

- Updated L14 and L21 from `Unmatched` prose to code-only glass descriptions and noted retained patent partial dispersion.

## 2026-08-18 — M-TAFD305 coefficient assignment

- Visually rechecked local `patents/US20170351051A1.pdf`, PDF page 22, Example 1 / Table 1. L14 remains `nd = 1.84887`, `νd = 40.12`, `θgF = 0.57197`.
- Re-sourced Hoya M-TAFD305 / MC-TAFD305 from the first-party 2026-07-07 AGF. Its coefficient curve (`1.851348 / 40.104 / 0.569519`) is within catalog-assignment tolerances and is explicitly a precision-molding family.
- Relabeled only L14 to `M-TAFD305` as a catalog equivalent. Patent code `849401`, patent `dPgF`, and the unspecified production supplier remain explicit; L21 stays code-only.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Replaced the air-equivalent fold with the physical rear stack from `patents/US20170351051A1.pdf` PDF page 22,
  Example 1 Table 1 (checked on the rendered page): d17 = 10.862 mm, then `rearPlates` PP 2.850 mm, nd 1.51680,
  νd 64.20, θgF 0.53430, and 1.000 mm of air to the image. Surface 17 carries no focus `var` entry.
- Plate glass labeled N-BK7 (exact nd / νd match; catalog-compatible), with the patent θgF kept as
  dPgF −0.00152 against the project normal line.
- Paraxial check against the previous data: EFL identical and defocus unchanged at all three focus keyframes (the old
  13.740956 mm was the exact fold). Physical track grows by 2.850 × (1 − 1/1.51680) = 0.971 mm.

## 2026-09-24 — Semi-diameters raised to the traced format corner

Table 1 (PDF p.22) prints f = 22.377 mm, FNo. 2.06 and 2ω = 64.8° for Example 1, and the traced chief ray reaches the
14.175 mm APS-C corner at 32.39°, matching the printed 32.4° half-angle, so the design covers the corner. The estimated
rear-doublet rims clipped the real chief ray (solved through the stop centre) from 26.4°, first at surface 17, leaving
the analysis field at 78% of the corner. The corner chief ray needs surface 15 ≥ 8.24, 16 ≥ 8.81 and 17 ≥ 9.35 mm; no
other rim clips. Values are floor + ~0.5 mm, each surface of the L31/L32 cemented doublet set by its own traced height
(element ratios 1.07 and 1.05, inside the header's ≤ 1.25). FIG. 1 (PDF p.2) is to scale (14.653 px/mm at 200 dpi;
S15–S17 and both PP faces within 1 px of the prescription) and draws the doublet's faces running to a flat edge at about
11.4 mm, 15–30% above these values. With no published clear aperture to confirm that the drawn outline is the clear
aperture, the drawing is recorded as headroom rather than used.

| Surface | Before | After | Justification |
|---|---|---|---|
| 15 | 7.5 | 8.8 | corner chief ray 8.24 mm + clearance (FIG. 1 edge ≈11.4 mm) |
| 16 | 7.5 | 9.4 | corner chief ray 8.81 mm + clearance; cemented junction |
| 17 | 7.4 | 9.9 | corner chief ray 9.35 mm + clearance |

The validator accepts the new values, the traced edge now reaches 14.18 mm at 32.4° with every rim clear, and the
image-circle floor reports nothing undersized. No aspheric surface changed.
