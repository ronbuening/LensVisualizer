# Audit Log - Sony FE 70-200mm F2.8 GM OSS

Patent: US 2019/0018229 A1, Numerical Example 1

## 2026-06-23 - Sony folder patent audit / APD + SD review

- Reviewed local `patents/US20190018229A1.pdf` against `SonyFE70200mmf28G.data.ts` and the companion analysis sidecar.
- Patent Table 1 confirms the stored R/d/nd/vd zoom prescription for Example 1, and Table 2 confirms the asphere coefficient rows already used by the data file.
- The patent text does not publish clear apertures or effective diameters. Existing `sd` values are retained as renderer-safe estimates rather than patent-derived values.
- No glass, APD, high-index, spacing, or SD edits were needed in this pass.
- Current generated glass reports show no active Sony catalog-mismatch row for this lens.

## 2026-10-12 - Surface 31 A8 sign, read from the PCT publication

- Symptom. The on-axis trace showed longitudinal spherical aberration of -6.69 / -2.38 / -0.66 / -0.07 mm at 1.0 /
  0.85 / 0.7 / 0.5 of the f/2.88 pupil at the wide end, and the same at the intermediate and telephoto positions.
  The patent's FIG. 4 plots spherical aberration on a ±0.40 mm axis and keeps the e-line curve within about 0.1 mm at
  all three positions.
- Transcription. The data file matched the US publication's Table 1 and Table 2 cell for cell (page 15, read from
  the 300 dpi page image). The error is in the US print.
- Isolation. Ninety-seven single-value slips of Table 2 were traced (sign, factor of ten either way, and zero for
  each coefficient; K = ±1; coefficients swapped between columns; the A8 and A10 rows rotated). Only a negative A8 on
  surface 31 corrects the axial image: the largest residual over the three positions is 0.086 mm, against 0.58 mm
  for the next candidate (a positive A8 on surface 32).
- Source. WO 2017/134929 A1 is the international publication of the same application (PCT/JP2016/086674). Its
  Table 2 for Example 1 prints surface 31 A8 as -2.76793E-11; the other fifteen cells agree with the US print.
- Change. `asph["31A"].A8` 2.76793e-11 -> -2.76793e-11. Longitudinal spherical aberration is now -0.086 / -0.029 /
  0.005 / 0.012 mm (wide), -0.008 / 0.026 / 0.033 / 0.023 mm (intermediate) and 0.024 / 0.030 / 0.020 mm at 0.85 /
  0.7 / 0.5 pupil (telephoto). The chief ray at the printed half angles lands at 21.634 / 21.633 / 21.632 mm before
  and after (FIG. 4: Y = 21.63). Focal lengths are unchanged.
- Analysis. The surface 31A row of the asphere table is now -10.3 µm at h = 14.2 mm (was +81.3 µm).
- Recorded in `sourceErrata` as a `corrected` entry citing `aberration-figure` (FIG. 4) and `family-publication`
  (WO 2017/134929 A1, Table 2), so the MTF tab discloses it. The `family-publication` kind was added to the errata
  standard the same day (`agent_docs/lens-patent-audit.md`, Source errata).

## 2026-10-12 - Semi-diameter pass for the stated f/2.88 beam

- Symptom. The patent prints no effective diameters, so every `sd` here is inferred. Fifteen of them sat below the
  on-axis marginal ray of the stated f/2.8823 beam. The widest clear on-axis ray gave f/3.06 at 72.10 mm and f/2.98 at
  117.99 mm (surface 22 limiting) and f/3.54 at 193.99 mm (surface 7 limiting). At the telephoto position the stated
  ray could not be continued past surface 6, so the iris there fell back to its paraxial radius, 17.30 mm.
- Rule applied. `agent_docs/patent-figure-sd-audit-procedure.md`, "A clipped stated beam": only the clipping surfaces
  rise, each to the height the stated ray reaches at its worst zoom position, rounded up to 0.1 mm. Nothing was
  lowered, nothing was widened to the figure, and `STO` was not touched.
- Figure. FIG. 1 of US 2019/0018229 A1 (PDF page 2, a 300 dpi one-bit scan), all three panels. Scale from vertex
  crossings, surface 1 to surface 42 (184.540 mm): 878.5 / 880.0 / 879.5 px in the wide / intermediate / telephoto
  panels, 4.760 / 4.769 / 4.766 px/mm; surface 10 to surface 42 (140.936 mm) gives 4.747 / 4.761 / 4.757 px/mm. 4.76
  px/mm (0.210 mm/px) is used. Heights are half the top-to-bottom extent, which removes the 0.3° tilt of the scan. The
  vertical scale was checked against two drawn sags: surface 7 reaches its rim 41 px (8.6 mm) behind its vertex, which
  is a 32.0 mm height on R = 63.8991, against 32.3 mm read vertically; L1F3 ends in a point 36.0 mm high, and its
  two faces meet at 37.1 mm in the prescription.
- Figure readings (wide / intermediate / telephoto, px, then mm). L1F1 180.0 / 179.5 / 179.8, 37.8 mm, square-cut on
  both faces. L1F2 runs to a point at L1F1's rear corner, about 37.5 mm. L1F3 ends in a point, 171 / 171 / 171.5, 36.0
  mm. L1R1 153.5 / 153.3 / 154.0, 32.3 mm, with a square-cut rim about 4.4 mm wide; its rear curve ends at about 30.5
  mm, where L1R2's front face meets it. L1R2 runs on to a point at 150 / 149 / 149.5, 31.4 mm, the height at which its
  own two faces meet in the prescription (31.3 mm). L21 86.5 / 86.0 / 86.0, 18.1 mm. L22 and L23 are one square block,
  86.5 / 86.0 / 85.7, 18.1 mm. L24 is a square block, 90 / 88.7 / 89.0, 18.7 mm. L31 94.5 / 93.5 (intermediate /
  telephoto), 19.7 mm. L32 and L33 are one block, 96.3 / 96.5 / 96.7, 20.3 mm. Behind the stop (wide / telephoto):
  L41 93.5 / 93.8, 19.7 mm; L42 91.3 / 91.0, 19.1 mm; L43 and L44 85.5 / 86.0, 18.0 mm, stepping to 16.7 mm at the
  rear; L51 69.0 / 68.2, 14.4 mm; L61 and L62 74.5 to 77.5, 15.7 to 16.3 mm; L63 and L64, L65 and L66 74 to 75, 15.6
  mm. L1R1 stands at 85 % of L1F1's height in all three panels. No element is drawn smaller than the stated ray needs.
- Changes. Ray heights are from the exact trace of the ray at the stated entrance-pupil radius (12.510 / 20.470 /
  33.659 mm), listed for 72.10 / 117.99 / 193.99 mm.

  | Surface | Element face | Before | Ray height (mm) | Worst position | FIG. 1 (mm) | After |
  |---|---|---:|---|---|---:|---:|
  | 2 | L1F1 rear | 33.5 | 12.479 / 20.412 / 33.525 | telephoto | 37.8 | 33.6 |
  | 3 | L1F2 front | 33.5 | 12.526 / 20.472 / 33.542 | telephoto | 37.5 | 33.6 |
  | 4 | L1F2 rear | 32.5 | 12.615 / 20.591 / 33.617 | telephoto | 37.5 | 33.7 |
  | 5 | L1F3 front | 33.0 | 12.600 / 20.535 / 33.402 | telephoto | 36.0 | 33.5 |
  | 7 | L1R1 front | 24.5 | 11.284 / 18.385 / 29.880 | telephoto | 32.3 | 29.9 |
  | 8 | L1R1 rear | 23.5 | 10.963 / 17.746 / 28.280 | telephoto | 30.5 | 28.3 |
  | 9 | L1R2 front | 23.5 | 10.949 / 17.730 / 28.278 | telephoto | 31.4 | 28.3 |
  | 10 | L1R2 rear | 22.5 | 10.166 / 16.701 / 27.767 | telephoto | 31.4 | 27.8 |
  | 14 | L22 / L23 junction | 16.0 | 10.657 / 12.494 / 16.263 | telephoto | 18.1 | 16.4 |
  | 15 | L23 rear | 16.0 | 10.923 / 12.669 / 16.327 | telephoto | 18.1 | 16.4 |
  | 16 | L24 front | 16.0 | 11.124 / 12.790 / 16.349 | telephoto | 18.7 | 16.9 |
  | 17 | L24 rear | 16.0 | 11.472 / 13.169 / 16.861 | telephoto | 18.7 | 16.9 |
  | 20 | L32 front | 18.0 | 18.194 / 17.765 / 17.941 | wide | 20.3 | 18.2 |
  | 21 | L32 / L33 junction | 17.6 | 18.177 / 17.737 / 17.915 | wide | 20.3 | 18.2 |
  | 22 | L33 rear | 17.3 | 18.421 / 17.954 / 18.138 | wide | 20.3 | 18.5 |

- Square rims. L23 and L24 each carried one value on both faces and are drawn square-cut, so both faces take the
  higher ray height: 16.4 mm on 14 and 15 (the ray needs 16.3 on 14), 16.9 mm on 16 and 17 (the ray needs 16.4 on
  16). L1R1 is also drawn square-cut, but its faces already carried two values and its rear face cannot reach 29.9
  mm without crossing L1R2, so it is raised face by face. The other elements are drawn pointed or already carried
  different values on their two faces and are raised face by face.
- G1R. Surfaces 7 to 10 rise by 20 to 24 %, past the procedure's 15 % line, so the figure was read first. It draws the
  pair at 31.4 to 32.3 mm, above the 27.8 to 29.9 mm the ray needs, in all three panels.
- `gapSagFrac` 0.97 (default 0.90). Surfaces 8 and 9 are 0.75 mm apart on axis. At 28.3 mm the two sags differ by
  0.7203 mm, so 0.0297 mm of air is left and the faces do not cross; they would touch near 28.7 mm. FIG. 1 draws L1R1
  and L1R2 meeting at the rim in all three panels. 0.96 allows 0.7200 mm and is refused; 0.97 is the smallest
  two-decimal value that admits the pair. With the new rims the next largest intrusions are 88.9 % of the gap between
  surfaces 2 and 3, 86.0 % between 15 and 16 and 85.0 % between 12 and 13, all inside the default, so no other pair
  uses the wider limit. No element needs display trimming at any zoom position.
- Kept. Surface 1 (38.0 mm, ray 33.66), 6 (33.5, ray 33.07), 11 (18.5, ray 16.39), 12 (16.2, ray 15.53), 13 (16.2, ray
  15.62), 18 (18.5, ray 17.74), 19 (18.0, ray 17.88) and every surface behind the stop pass the stated ray; the
  closest is 24A, 17.994 mm against 18.0. The figure draws these elements up to 16 % taller than stored (most at L66
  rear, 13.5 against 15.6 mm), which is not grounds for a change under the rule above.
- Result. The widest clear on-axis ray now gives f/2.882 at all three positions, with the iris as the limiter. Focal
  lengths (72.1123 / 118.0030 / 194.0319 mm), entrance-pupil radii and back focal distances are unchanged. The iris at
  193.99 mm is now set by the real marginal ray, 17.87 mm (was the 17.30 mm paraxial fallback); the other two stay at
  18.08 and 17.84 mm. The repo validator reports no errors, the image-circle check lists no surface, and the corner
  chief ray reaches 21.65 of 21.65 mm at all three positions, as before.
- Side effect. The engine's rim-limited half-field estimate rises from 19.88° / 10.34° / 6.71° to 19.94° / 10.98° /
  7.56°. It was set by surface 2 at the wide end and by surface 8 at the other two positions, all of which had to
  rise; surface 2 now sets it at all three. The patent's half angles are 17.17° / 10.30° / 6.15°.
- Corner illumination, wide open, as the share of the meridional pupil that passes at the 21.65 mm corner relative to
  the axis: 48.9 / 28.3 / 38.5 % before and 49.0 / 29.2 / 35.4 % after. Before, the axial beam it is measured against
  was itself cut to about 94 / 97 / 81 % of the stated pupil; as a share of the stated pupil the corner goes from
  about 46 / 27 / 31 % to 49 / 29 / 35 %. The off-axis vignetting is kept.
- Teleconverters. With the SEL14TC and the SEL20TC the composed f-numbers are f/4.035 / 4.032 / 4.033 and f/5.768 /
  5.757 / 5.761 before and after. Before, the host's surfaces 22 and 7 cut the composed axial beam to f/4.28 / 4.17 /
  4.95 and f/6.12 / 5.96 / 7.07; now the iris limits it at the stated values.
- Analysis file. The asphere departure table quotes heights for 24A, 31A, 32A and 33A; none of those surfaces moved.
- Open: the model's G1R remains 7 to 12 % below the height FIG. 1 draws, and the raised faces of G1F, G2 and G3 7 to
  11 % below; FIG. 1 draws L1F1 square-cut to 37.8 mm on both faces where the file steps from 38.0 to 33.6 mm.
  Close-focus rims are unchecked because the patent tabulates no close-focus spacings.

