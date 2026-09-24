# Patent and glass audit

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Replaced the air-equivalent surface-30 gap (29.2485254292 mm) with Example 6's physical rear stack, read from the
  rendered Table 16 (US 2021/0286156 A1, PDF p. 35): surface 30 d = 26.284 mm, then `rearPlates` PP 2.850 mm,
  nd 1.54763, νd 54.98, θgF 0.55247 (dPgF +0.00115 against the project normal line), and 1.123 mm to the image plane.
  No catalog glass is coordinate-compatible (nearest N-BALF5 1.54739 / 53.63), so `glass` is omitted and the plate uses
  Abbe-based dispersion.
- Paraxial check against the previous data: EFL identical and defocus unchanged (worst difference 5e-12 mm) at all three
  zoom stations and both focus keyframes, since the old fold used the exact 2.850/1.54763 reduction. Physical track
  grows by 1.008 mm at every zoom state (2.850 × (1 − 1/1.54763)).
