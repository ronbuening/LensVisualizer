# Patent and viewer audit

## 2026-09-23 — Optical member PP modeled as `rearPlates`

- Replaced the air-equivalent rear gap (19.958955696 mm) with Example 1's physical rear stack from Table 1 (local
  `patents/US9651761.pdf`, p. 18, confirmed on the rendered page): d29 = 2.000 mm, then `rearPlates` PP 2.850 mm,
  nd 1.51680, νd 64.20 (N-BK7 catalog equivalent), and d31 = 16.080 mm to the image plane. d29 and d31 are fixed at
  every zoom station and focus state.
- Paraxial check against the previous data: EFL identical and defocus unchanged at all three zoom stations and both
  focus keyframes (worst difference 4e-15 mm), because the old gap stored the exact fold. The reconstructed 0.45 m
  close-focus D11/D13 pairs are unchanged.
- Physical track grows by 2.850 × (1 − 1/1.5168) = 0.971 mm to 110.920 / 138.017 / 171.079 mm.
