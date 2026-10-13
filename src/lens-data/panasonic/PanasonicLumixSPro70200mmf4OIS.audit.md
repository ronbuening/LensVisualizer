# PANASONIC LUMIX S PRO 70-200mm f/4 O.I.S. Audit

## 2026-07-30 — Patent-figure SD and glass pass

**Source:** JP 2020-086133 A, Numerical Example 6, Figure 66.

### Semi-diameters

- Compared the rendered section with Figure 66 after checking the full-frame image-circle floor.
- Increased the exposed rims of L11 and L12 to `13.0` mm at surfaces 19 and 22 while retaining their constrained
  `11.8 / 11.6` mm inner rims across the 0.6288 mm air gap.
- Increased L17's rear rim at surface 30 from `11.1` to `12.0` mm while retaining its gap-constrained front rim.
- A trial increase of the constrained inner rims was rejected by the surface validator because it would have introduced
  cross-gap overlap. The final tapered outlines preserve the existing physical clearances.

### Glass

- Reviewed every code-only glass annotation against the regenerated reports. All `23/23` elements already resolve to
  trusted Sellmeier data.
- Retained the code-based labels because the patent names no vendor and several coordinates have multiple valid
  cross-vendor catalog rows.

### Identity

- Reviewed the official product styling and project naming convention. The display name
  `PANASONIC LUMIX S PRO 70-200mm f/4 O.I.S.` is already correct and was retained.

## 2026-09-23 — Rear filter modeled as `rearPlates`

- Replaced the air-equivalent surface-41 spacing with Numerical Example 6's physical rear stack (PDF pp. 29–30):
  d41 = 30.3551 mm, then `rearPlates` filter F 2.1074 mm, nd 1.51680, νd 64.17 (N-BK7, an exact catalog match), and
  the wide-infinity BF 0.3481 mm as the fixed trailing gap. The printed BF is 0.3481 / 0.3504 / 0.3485 (infinity) and
  0.3482 / 0.3504 / 0.3486 (1.000 m), so the excess of up to 0.0023 mm is carried in the gap-41 `var` values
  (30.3551 / 30.3552, 30.3574 / 30.3574, 30.3555 / 30.3556).
- Paraxial check against the previous data: EFL and defocus identical at all six zoom/focus states (worst difference
  1.3e-10 mm), because the previous fold used the exact `2.1074/1.51680` air equivalent and the printed BF.
- Physical track grows by 0.718 mm to 193.727–193.728 mm, in agreement with the patent's printed 193.72 mm total length;
  `closeFocusM` stays at the patent's 1.000 m object-to-image condition.
