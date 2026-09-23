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

## 2026-09-23 — Close-focus gaps re-solved on the physical track

- Re-solved the reconstructed G5 close-focus pairs so the 1.75 m object is measured from the stored image plane on the
  physical track through PP. D29 close 8.791403 / 11.673677 / 17.194319 → 8.792362 / 11.676068 / 17.202735 mm; D34
  close 3.575597 / 13.108323 / 13.046681 → 3.574638 / 13.105932 / 13.038265 mm (full precision in the data). G5 travel
  is now 1.590362 / 4.102068 / 14.859735 mm. These remain reconstructions, not patent values.
- Method: paraxial y–u trace of the `expandRearPlates` surfaces from an axial object 1750 mm before the image plane,
  bisecting G5 travel with D29 + D34 conserved and the infinity gaps untouched. The earlier solve used the 0.993 mm
  shorter air-equivalent track: folding PP preserves infinity focus but not a finite object's distance, so the old
  pairs left the paraxial image 0.0037 / 0.0099 / 0.0353 mm off the image plane.
- Close-focus defocus is now below 3e-14 mm; infinity EFL (102.863094 / 178.141182 / 387.821474 mm) and the infinity
  state are unchanged. Tele magnification is 0.188621× (was 0.188532×). Surface and image-circle audits pass.
