# Audit Log — FUJIFILM FUJINON XF 16mm f/1.4 R WR

Patent: US 2016/0282590 A1, Example 1 (FUJIFILM Corporation; Tables 1–3, Figure 1)

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Read Example 1 Tables 1 and 3 on PDF page 15 at 160 dpi: surfaces 26–27 are optical member PP, 2.8500 mm,
  nd 1.51680, νd 64.20, followed by 2.1206 mm air to the image plane; Table 3 `DD25` (L31 → PP) is
  13.7445 / 14.2045 / 16.0338 mm at INFINITY / MIDDLE / CLOSE. These reproduce the old folded S25 values
  17.744056 / 18.204056 / 20.033356 mm exactly.
- S25 `d` and `var` now store the patent `DD25` values, with `rearPlates` PP (N-BK7, the 1.51680 / 64.2 catalog
  match) and `gapAfterMm` 2.1206. Paraxial check against the previous data: EFL and defocus are identical at all
  three focus keyframes (the old fold was exact). Physical track grows by 0.971 mm (2.85 × (1 − 1/1.5168)).
