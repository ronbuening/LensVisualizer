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

## 2026-10-12 - Second review: diagram, labels and movement

- Compared. The local page at 72.1, 118 and 194 mm beside the three panels of FIG. 1 (US 2019/0018229 A1, PDF page 2,
  300 dpi one-bit scan), the element and group text against paragraphs 0102 to 0118 (PDF page 14) and the zoom
  spacings against Table 3 (PDF page 15). Figure scale re-derived from vertex crossings, surface 1 to surface 42
  (184.540 mm): 878.0 / 880.5 / 879.5 px, 4.76 px/mm. No semi-diameter, asphere, erratum or `gapSagFrac` value was
  changed in this pass.
- Changes, labels only.

  | Field | Before | After | Evidence |
  |---|---|---|---|
  | `diagramLabel`, all 23 elements | absent, so the diagram printed the ids 1 to 23 | L1F1, L1F2, L1F3, L1R1, L1R2, L21 to L24, L31 to L33, L41 to L44, L51, L61 to L66 | FIG. 1 and paragraphs 0110 to 0117 name the elements this way; the inspector already showed these names, the diagram did not |
  | L22 `type` | Negative Meniscus | Biconcave Negative | r13 = -101.2705, r14 = +39.7503; the patent says "negative lens L22" |
  | L23 `type` | Positive Meniscus | Biconvex Positive | r14 = +39.7503, r15 = -2054.9944; "positive lens L23" |
  | L44 `type` | Positive Meniscus | Biconvex Positive | r29 = +24.1826, r30 = -112.0366; "positive lens L44" |
  | L61 `type` | Positive Meniscus (1× Asph) | Biconvex Positive (1× Asph) | r33 = +38.0555, r34 = -67.3230; "positive lens L61" |

- Silhouette, read again from the intermediate panel (half the top-to-bottom extent, mm): L1F1 37.7, L1F3 35.9, L1R1
  32.2, L1R2 31.2, L21 18.0, L22 and L23 18.1, L24 18.6, L31 19.9, L32 and L33 20.3, L41 19.8, L42 19.1, L43 and L44
  18.1, L51 14.3, L61 and L62 15.5 to 16.2, L63 to L66 15.5. These agree with the first pass to 0.2 mm. Every stored
  rim is within 15 % of its drawn height; the widest gap is the rear of L66, 13.5 against 15.5 mm. Where the page
  still differs from the drawing: L1F1 is drawn square-cut and
  renders stepped, 38.0 to 33.6 mm; L1F2 and L1F3 are drawn running to points at 37.5 and 35.9 mm and render with
  rims at 33.5 to 33.7 mm; L1R1 is drawn with a square rim at 32.2 mm and renders bevelled, 29.9 to 28.3 mm; L21 is
  drawn level with the L22 and L23 block and below L24, and renders as a wedge, 18.5 to 16.2 mm, whose front rim
  stands 1.6 mm above L24; L63 to L66 are drawn at one height and render tapering from 15.3 to 13.5 mm. None of these
  is an overlap, an inverted order between facing neighbours, a face below the stated ray or a square rim split
  today. L1F1 and L21 were already stepped before today (38.0 / 33.5 and 18.5 / 16.2 mm), so the square-rim rule does
  not reach them, and nothing was moved.
- Rims checked. The on-axis ray at the stated f/2.8823 pupil passes every surface at the three positions; the closest
  are surfaces 20 and 24A, each 0.006 mm inside its rim at 72.10 mm. Across 101 steps of the zoom slider the ray
  through the edge of the iris clears every rim, so the iris stays the limiter between the published positions. The
  two faces of L23 (16.4 mm) and of L24 (16.9 mm) still carry one value. At 28.3 mm, 0.0297 mm of the 0.75 mm gap
  between surfaces 8 and 9 remains, 96.04 % used, so 0.97 is the smallest two-decimal `gapSagFrac`. No element is
  trimmed for display at any position.
- Asphere sign. With the filed A8 on surface 31A the on-axis trace gives -0.086 / -0.008 / -0.013 mm at the full
  pupil, inside the roughly 0.1 mm that FIG. 4 plots (PDF page 5). The PCT print was not re-read in this pass.
- Labels found correct. Group brackets G1F (surfaces 1 to 6), G1R (7 to 10), G2 (11 to 17), G3 (18 to 22), G4 (24 to
  30), G5 (31 and 32) and G6 (33 to 42) match the Lens Group column of Table 1 and the G1F / G1R split of FIG. 1.
  Five cemented brackets, 13 to 15, 20 to 22, 28 to 30, 33 to 35 and 36 to 38, match the five cemented lenses of
  paragraphs 0112 to 0117; 23 elements less five junctions is 18 groups. The stop is surface 23, between G3 and G4
  (paragraph 0106). The four aspheric markers sit on 24, 31, 32 and 33, as Tables 1 and 2 mark them, and nowhere
  else. Stored focal lengths match the paraxial values to the printed digit. Every `role` sentence agrees with the
  patent text.
- Tags. Paragraph 0110 says L1F2 and L1F3 "each include a material with an Abbe number of 95.1" and paragraph 0068
  calls it a material of low dispersion; neither names a glass or calls it anomalous, so `apd: "inferred"` is the
  right tag for both. The six inferred tags (L1F2, L1F3; L1R2, L22; L32, L42) equal Sony's published two Super ED and
  four ED elements as cited in the analysis. This log holds no record of a comparison with Sony's construction
  diagram, so element positions of the ED glasses and of the XA element are not confirmed against it.
- Zoom order and direction. `zoomPositions` ascend 72.1013 / 117.9861 / 193.9863 and each of d10, d17, d22, d30 and
  d32 lists its three values in that order, equal to Table 3 cell for cell. First-surface positions from the image
  plane (mm, positive toward the image): G2 moves +20.355 then +10.539 (30.895 in all, one direction); G3 moves
  +12.377 then -5.849 (net +6.528), so d22 closes from 15.2719 to 2.8950 and reopens to 8.7441; G5 moves -0.996 then
  +0.074 (net -0.922, toward the object); G1F, G1R, the stop, G4 and G6 stay within 0.0002 mm. The total length is
  215.1482 / 215.1483 / 215.1481 mm, so the image plane is fixed. FIG. 1 draws straight arrows for G1F, G1R, G4 and
  G6, a straight slanted arrow toward the image for G2, an arrow for G3 that bows toward the image and comes part of
  the way back, and an arrow for G5 that bows toward the object and returns. Measured in the panels, G2's first
  surface sits
  46.1 / 67.0 / 77.6 mm behind surface 1 (table 46.30 / 66.65 / 77.19) and G3's 90.7 / 104.2 / 97.9 mm (table 91.04 /
  103.42 / 97.57).
- Figure against table, G5. The telephoto panel draws G5 back at its wide position (L51 front 144.3 / 144.0 / 144.5
  mm behind surface 1), where Table 3 keeps it 0.92 mm forward (144.59 / 143.59 / 143.67 mm). The table governs and
  the file follows it.
- Focus. The patent tabulates no close-focus spacings, so focus is not modeled: the page shows the focus slider
  disabled with "Not modeled", the description states the patent's directions (G1R toward the object, G5 toward the
  image, paragraph 0109), the movement overlay offers zoom only, and the layout is identical at both ends of the
  slider.
- Open, outside this pass. Table 1 gives L62 an Abbe number of 33.3450 against 33.2694 for L33; the file labels both
  NBFD15 (33.27), and Hikari J-LASFH6 (1.80610, 33.34) fits L62. L61 (1.5163, 64.0651) fits OHARA L-BSL7 (64.07), and
  L41 and L51 (1.5831, 59.4609) fit HOYA M-BACD12 (59.46), the moulding glasses, where the labels resolve to S-BSL7
  (64.14) and S-BAL42 (59.37). Table 3 prints F-number 2.8804 at the intermediate position; the file uses 2.8823 at
  all three. The `specs` lines are in sentence case where newer files use capitals.

## 2026-10-12 - Glass labels from the four-decimal Abbe numbers

- Table 1 prints νd to four decimals. Evaluating every catalog glass at the printed nd shows which row each value
  belongs to. Exact to four decimals: HOYA FCD100 (95.1004), FCD515 (68.6244), FD225 (22.7643), NBF1 (49.2216),
  NBFD15 (33.2694, L33), M-BACD12 (59.4609), E-FD5 (32.1705), E-FL6 (42.8418) and TAC8 (54.6735); OHARA L-BSL7
  (64.0651); HIKARI J-LASFH6 (33.3450, L62). Close: HOYA E-FD1L (29.5008 against 29.5005), TAF3D (46.5027 against
  46.5025), TAFD5G (42.7215 against 42.7218), TAFD30 (40.8180 against 40.8054).
- Nine labels named two or three suppliers and resolved by index residual to a row whose Abbe number is further off.
  Before -> after: L1R1 S-TIH1 -> E-FD1L; L23 S-NPH1 -> FD225; L41 and L51 S-BAL42 (59.37) -> M-BACD12; L44 S-TIL26
  -> E-FL6; L61 S-BSL7 (64.14) -> L-BSL7; L62 NBFD15 -> J-LASFH6; L63 S-TIM25 (32.10) -> E-FD5; L66 S-LAH58 (40.77)
  -> TAFD30. The three aspherical elements (L41, L51, L61) come out as glasses made for molding.
- Catalog: HOYA E-FD1L and E-FL6 were added from HOYA's 2026-07-07 catalog file, without six-digit codes.
- Printed nd and νd are unchanged; all 23 elements resolve. L32 and L42 (81.6084) stay on FCD1, whose catalog row
  gives 81.5861; L43 (printed 29.1000) stays on TAFD55.

