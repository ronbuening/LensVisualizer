# Audit Log - Nikon R-UW AF Zoom-Nikkor 20-35mm f/2.8

Patent: US 5,490,012, First Embodiment / Table 1

## 2026-07-30 - High-frequency glass-code review

- Rechecked the L2 patent coordinate at `nd = 1.79668`, `vd = 45.4`.
- Hikari J-LASF017 (`1.79500 / 45.31`, code `795453`) is inside the runtime safety window and is the closest
  coefficient-backed catalog row in the reviewed public data (`delta nd = -0.00168`, `delta vd = -0.09`).
- Relabeled L2 as a J-LASF017 catalog equivalent while leaving the production supplier unidentified. Synchronized
  the analysis; no underwater prescription geometry, zoom spacing, stop, focus, or semi-diameter values changed.

## 2026-07-30 - `748523` family review

- Rechecked L9 at `nd = 1.74810`, `vd = 52.30`.
- No reviewed public coefficient row reproduces both coordinates within the runtime safety window. The closest
  plausible rows are around `1.741 / 52.6` or `1.755 / 52.3`, outside the accepted d-line residual.
- Retained the explicit unmatched `748523` annotation without a supplier or APD claim. No underwater prescription
  geometry, zoom spacing, stop, focus, or semi-diameter values changed.

## 2026-08-21 — E-LAKH1 discontinued-catalog recovery

- Hikari's official 2022-07-01 catalog supplies discontinued E-LAKH1 at code `748523`,
  `nd = 1.748099`, `νd = 52.304982`, exactly reproducing L9's patent coordinate within printed precision.
- Relabeled L9 as a supplier-neutral E-LAKH1 catalog equivalent and synchronized the analysis. This supersedes the
  earlier current-catalog no-match disposition; no underwater prescription geometry, zoom, APD, or SD values changed.

## 2026-09-25 — MTF image-plane census

Visually inspected local `patents/US5490012.pdf`, Table 1 on PDF p. 9 (columns 9–10), and condition table on p. 10. Checked all radii, thicknesses and ten nd/νd pairs, all three infinity zoom stations, and the water specification n=1.33306, νd=54.0. No scale or aspheres. The source clearly prints r1=111.600 and d4=15.00; these already match. It also clearly prints r8=0.316, r11=9.429, r12=0.582, r14=7.948, d16=40, and d6/d7=7.00/5.60. The existing reconstruction substitutes 110.316/39.429/300.582/37.948/0.40 and swaps d6/d7. These are proposed source emendations, not verified recovered scan characters. Table 4 supports some constraints (e.g. 15/5.6=2.679 for condition 8), but does not validate the full adopted reconstruction; its prior analysis already records group-power disagreements.

The clean zoom rows agree: d2=7.9672/18.9022/24.4123, d8=34.1678/17.6102/4.9839, d18=1.1021/6.7247/13.8409 and d20=38.5630 at all stations. Moved the explicit protective plate S19–20 (t=1.30, nd=1.51680, νd=64.1, trailing gap 38.563) from visible elements/surfaces into rearPlates, keeping physical gaps. It remains traced and is excluded from diagram element counts.

The runtime WTR plane establishes water before S1 even though launch starts in air. Independent axial trace already includes this interface: EFL 20.673416545 versus 20.6007; focus 38.782789749 behind the plate versus 38.563. The queue lead attributing the offset to air is therefore insufficient.

**Cause/action:** partial source reconstruction, plus rear-plate representation migration. No further numerical emendation is justified. Offset **+0.219790 → +0.219790 mm**; row retained as partial pending source-backed resolution of the inferred radii. Existing powered prescription retained explicitly as uncertain; do not tune it to focus.

Validation: focused runtime/paraxial check; full corpus gates at the ten-lens checkpoint.
