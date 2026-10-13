# Audit Log - Sigma 30mm f/2.8 DP2 Merrill

Patent: JP 2013-156459 A, Example 4

## 2026-05-20 - Catalog-mismatch queue audit

### Patent evidence

- Local patent file checked: `patents/JP2013156459A.pdf`.
- Example 4 rows confirmed from local patent text:
  - S5 / L3: nd = 1.69895, vd = 30.05.
  - S8 / L5: nd = 1.77250, vd = 49.47.
  - S10 / L6: nd = 1.58144, vd = 40.89.
  - S14 / L8: nd = 1.91082, vd = 35.25.

### Glass corrections

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L3 / S5 | `S-TIM28 (OHARA)` | `S-TIM35 (OHARA)` | Exact nd/vd catalog match. |
| L5 / S8 | `S-LAL59 (OHARA, probable)` | `S-LAH66 (OHARA)` | Exact nd/vd catalog match. |
| L6 / S10 | `S-TIM2 (OHARA)` | `S-TIL25 (OHARA)` | Exact nd/vd catalog match. |
| L8 / S14 | `S-LAH79 (OHARA)` | `TAFD35 (HOYA)` | Exact nd/vd catalog match. |

### Catalog-search disposition

- Checked public OHARA/HOYA catalog data and existing coefficient-backed catalog entries.
- No new catalog entries were required.

### Analysis sync

- Updated affected element descriptions, glass table rows, and manufacturing note.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Replaced the air-equivalent surface-15 gap (6.72 mm) with the patent's physical rear stack from Numerical Example 4
  (local PDF text layer, ¶0070): d15 = 1.0000 mm, filter F surfaces 16–17 = 1.2000 mm, nd 1.52301, νd 58.59, then
  4.9300 mm to the image. Focus moves only d9, so the rear stack is identical at every focus keyframe.
- Plate glass labelled `C12 (HOYA)` (nearest catalog match 1.52307 / 58.64; `resolveCompatibleGlass` accepts the stored
  1.52301 / 58.59). The patent prints no θgF, so no dPgF is stored.
- Paraxial check against the previous data: EFL identical; defocus changes by −0.0021 mm at all three focus keyframes
  (rounding in the old 6.72 vs. 6.7179). Physical track grows by 0.41 mm (1.2 × (1 − 1/1.52301) = 0.412) and now
  matches the patent's 39.83 mm total length.

## 2026-09-24 — Semi-diameters raised to the traced format corner

Numerical Example 4 prints f = 29.60 mm, 2ω = 52.05° and Y = 14.20 mm at infinity (各種データ, p. 14, ¶0070), so the
design covers the APS-C corner (14.175 mm). The estimated G2 rims were sized for a 60% field: rim 15 stopped the real
chief ray (solved through the stop centre) at 19.9° (75% of the corner). The corner chief ray (25.99°; patent ω 26.03°)
crosses surface 12 at 7.62, 13 at 9.54, 14 at 10.74 and 15 at 11.41 mm and clears every other rim (surface 11 by
0.33 mm). Surfaces 13 and 14 take that height + ~0.5 mm, rounded up; L7 (plano-concave) and L8 (biconvex) are then
scaled as single elements by those factors, which puts 12 and 15 above their own floors. Fig. 16 (p. 22), measured at
300 dpi (20.2 px/mm from the 39.83 mm track), draws L7's concave face to about 9.6 mm with a flat flange to about
12.3 mm and L8 to about 14.2 mm; it was used only as a cross-check, and the new values sit at or below it.

| Surface | Before | After | Justification |
|---|---|---|---|
| 12 | 7.3 | 9.8 | scaled with surface 13 (×1.35); corner chief ray 7.62 mm; Fig. 16 concave face about 9.6 mm |
| 13 | 7.5 | 10.1 | corner chief ray 9.54 mm + clearance |
| 14 | 7.6 | 11.3 | corner chief ray 10.74 mm + clearance |
| 15 | 8.3 | 12.3 | scaled with surface 14 (×1.49); corner chief ray 11.41 mm |

The validator accepts the new values, the traced edge now reaches the 14.18 mm corner at 26.0° with every rim clear,
the image-circle floor still reports nothing undersized, and no render trim or gap overlap appears. Surface 12's rim
angle is now 52.3°, the largest in the lens. No aspheric surface changed, and the analysis quotes none of these rims,
so it is unchanged.
