# FUJIFILM FUJINON XF 100-400mm f/4.5-5.6 R LM OIS WR — audit log

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Replaced the air-equivalent D36 with the physical rear stack from US 2017/0090170 A1, Example 1 (rendered PDF p. 24,
  Tables 1 and 3): DD(36) = 36.048 / 28.853 / 29.788 mm, then optical member PP as two cemented plates, 2.150 mm
  nd 1.54763 νd 54.99 (θgF 0.55229, dPgF +0.00098) and 0.700 mm nd 1.49784 νd 54.95 (θgF 0.54959, dPgF −0.00178),
  and 1.000 mm air to the image. The first plate's `gapAfterMm` is 0 because surface 38 is the cemented interface.
- Glass: the first plate resolves to SCHOTT N-BALF5 (1.54739 / 53.63), the only compatible catalog match, as a
  coordinate class rather than a supplier claim. No catalog glass is compatible with the second plate, so it omits
  `glass` and uses the Abbe estimate. Both keep the patent θgF as dPgF. The patent prints no per-plate designation,
  so `label` is omitted.
- Paraxial check against the previous data: EFL and defocus identical at all three zoom stations and both focus
  keyframes (worst difference 7e-15 mm), since 36.048 + 2.150/1.54763 + 0.700/1.49784 + 1.000 reproduces the stored
  38.904561 exactly. Physical track grows by 0.993 mm to 221.699 / 250.265 / 280.760 mm.
