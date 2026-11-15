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

## 2026-11-14 — Published finite-conjugate certification

Patent: JP 2020-086133 A.

| Zoom / keyframe | Field | Before | After | Source locator |
| --- | --- | --- | --- | --- |
| 0 / 1 | `focus.conjugates` | No declaration | 806.2799 mm, `first-surface` | PDF p. 30; JP 2020-086133 A, Numerical Example 6, 可変間隔データ second block, 広角 column: d0 806.2799. d5=0.7606, d12=33.3561, d16 [source label]=3.8230, d18=3.9631, d22=16.5109, d25=5.6367, BF=0.3482 mm (authored gap 41=30.3552 mm). |
| 1 / 1 | `focus.conjugates` | No declaration | 806.2795 mm, `first-surface` | PDF p. 30; JP 2020-086133 A, Numerical Example 6, 可変間隔データ second block, 中間 column: d0 806.2795. d5=20.4344, d12=17.9581, d16 [source label]=1.5039, d18=2.0064, d22=8.8545, d25=13.2914, BF=0.3504 mm (authored gap 41=30.3574 mm). |
| 2 / 1 | `focus.conjugates` | No declaration | 806.2793 mm, `first-surface` | PDF p. 30; JP 2020-086133 A, Numerical Example 6, 可変間隔データ second block, 望遠 column: d0 806.2793. d5=35.3177, d12=1.2210, d16 [source label]=1.5012, d18=3.8630, d22=2.3153, d25=19.8325, BF=0.3486 mm (authored gap 41=30.3556 mm). |

- State 0/1: paraxial image offset -0.00262287735043 mm (-0.128104016842 diffraction depths); alternate reference +1.79017819439 mm (+83.5329057269 depths). Verdict: `consistent`; reference discriminated: true. Reference evidence: PDF p. 28: "単位：mm" and surface table "物面 ∞ ∞" immediately before surface 1; PDF p. 30 variable-spacing table names the object-side interval d0.
- State 1/1: paraxial image offset -0.0026538151769 mm (-0.125045023365 diffraction depths); alternate reference +4.5532509673 mm (+190.21365629 depths). Verdict: `consistent`; reference discriminated: true. Reference evidence: PDF p. 28: "単位：mm" and surface table "物面 ∞ ∞" immediately before surface 1; PDF p. 30 variable-spacing table names the object-side interval d0.
- State 2/1: paraxial image offset -0.002484794098 mm (-0.102553719224 diffraction depths); alternate reference +14.2983537858 mm (+412.736998951 depths). Verdict: `consistent`; reference discriminated: true. Reference evidence: PDF p. 28: "単位：mm" and surface table "物面 ∞ ∞" immediately before surface 1; PDF p. 30 variable-spacing table names the object-side interval d0.
