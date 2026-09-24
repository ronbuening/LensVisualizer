# FUJIFILM FUJINON XF 18-120mm f/4 LM PZ WR — Audit Log

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Replaced the air-equivalent S28 spacing (24.8295380953 mm) with JP 2023-033114 A Example 1 Table 1 (PDF p. 50,
  rendered): D28 = 21.929 mm, then `rearPlates` PP 2.850 mm, nd 1.51633, νd 64.14, θgF 0.53531 (dPgF −0.00061),
  ED 29.50 / 29.70 (sd 14.85, the larger ED/2, so the plate never clips rays the patent passes), and 1.021 mm to the
  image plane. G5 is fixed, so D28 is a single value at every zoom/focus state. Glass S-BSL7 (exact 1.51633 / 64.14
  coordinate; `resolveCompatibleGlass` passes).
- Paraxial check against the previous data: EFL identical and defocus unchanged at both zoom stations and all three
  focus keyframes (worst |Δ| 1.8e-15 mm), since 21.929 + 2.850/1.51633 + 1.021 reproduces the old fold exactly. Physical
  track grows by 0.970 mm to 139.726 mm. The reconstructed focus keyframes were solved against the air-equivalent image
  plane, so their physical object-to-image distances are 0.970 mm longer (tele middle 1.196365 m); `closeFocusM` stays
  at the Fujifilm-quoted 0.6 m.
