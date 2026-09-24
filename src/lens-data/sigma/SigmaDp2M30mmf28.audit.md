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
