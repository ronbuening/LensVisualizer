# SIGMA 15mm f/2.8 EX DG DIAGONAL FISHEYE: audit log

The source package carried no audit log; this file starts at deployment validation.

## 2026-10-29 — Deployment validation and cleanup

- Source: JP H02-248910 A (Yasunori Murata, Sigma Corporation), filed 1989-03-23 as 特願平1-69310, published
  1990-10-04. Numerical Example 1 table and Fig. 1 on PDF p. 3, Fig. 3 aberrations on p. 4. The PDF is a 347 dpi scan
  with no text layer; the table was read from 300 dpi page images. Google Patents gives the inventor romanization.
  Bibliographic fields in the data file match the front page.
- Transcription: 14 R, 13 d, 7 nd/νd pairs, the stop at row 9 and the cemented interface at surface 13 were checked;
  zero mismatches. There are no aspheres. The patent prints no back focus, total length, image height, clear
  apertures or close-focus state; the headings are n_i / ν_i and the d line is assumed (Fig. 3 plots d and g).
- First order, patent vs model: f 15.3 vs EFL 15.3007 mm; F/2.8 vs 2.800 at the engine stop (6.782 mm, derived from
  the paraxial entrance pupil); 2ω 180° vs half-field 90°. Paraxial back focus 38.9556 mm, vertex length 56.27 mm.
  Printed conditions f3 = 1.31 f, R4 = −2.29 f, D4 = 0.81 f vs 1.309, −2.288 and 0.811. An independent meridional
  trace puts the 90° chief ray at 21.687 mm against the equisolid 2f sin(ω/2) = 21.637 mm (+0.23 %); the 21.6 mm
  full-frame half-diagonal is reached at 89.50°, so the 180° field covers the frame corner. Distortion against
  equisolid is about +0.9 % at 60°, in line with the small positive bulge in Fig. 3(c).
- Product match: Sigma's page (sigma-global.com/en/lenses/15_28) lists 7 elements / 6 groups, 180°, 0.15 m, 1:3.8,
  seven blades, F22, a rear gelatin-filter holder and SA / EF / F / K / A mounts; the EX DG version was announced in
  October 2005. Vertex positions measured from Sigma's construction diagram (lenses/15_28_specification_01.jpg) fit
  Example 1 at 0.32 mm rms and Example 2 at 0.86 mm rms after a free scale and offset; Example 1's d2 = 16.88 and
  d4 = 3.01 mm match the drawing, Example 2's 14.83 and 5.27 mm do not. Example 1 is the better match.
- Rims: the semi-diameters agree with Fig. 1 and Sigma's diagram to within about 5–10 %. The 90° chief ray needs
  14.909 mm on the L1 rear surface (R 15.56 mm); the 15.0 mm rim there has a 74.58° slope, hence
  `checks.maxRimAngleDeg` 75. Every other rim clears the 90° chief. Surface audit OK, image-circle audit 0 undersized;
  the field-coverage audit and `clearap.mjs` do not handle fisheye fields, so the 90° check above was traced separately.
- Focus: the patent is infinity-only. The package moves the whole lens (image gap 38.956 → 42.689 mm) to Sigma's
  0.15 m object-to-image distance; the nine keyframes reproduce paraxial focus exactly. This gives 1:4.10 against
  Sigma's 1:3.8. With linear interpolation between keyframes the residual defocus peaks at 0.046 mm and the slider
  label differs from the in-focus distance by up to 7.3 % just past the infinity cutoff.
- Glass: all seven labels resolve to the same catalog rows before and after relabelling (J-LAK14, NBFD11, FD140,
  NBFD15, FK5 ×2, FD60; nd exact, |Δνd| ≤ 0.04).
- Data file edits in this pass (no R, d, nd, νd, sd, projection, patent, mount or format change; built and probe
  output identical before and after): header comment rewritten in plain terms with the Example 1 / Example 2 diagram
  fit and the L1 rim reasoning; `subtitle` to "JP H02-248910 A, Numerical Example 1 — construction-based production
  correlation"; `specs` to "7 ELEMENTS / 6 GROUPS", "DESIGN f = 15.3 mm", "DESIGN F/2.8", "ALL SPHERICAL",
  "EQUISOLID FISHEYE, 2ω = 180°"; glass labels to the "NAME (VENDOR catalog equivalent; production supplier
  unspecified)" form; L3 / L4 roles say "patent condition", L5 role "Positive crown behind the stop"; focus
  description rewritten with the image-gap travel and the 1:4.1 vs 1:3.8 difference.
- Analysis edits in this pass: the stop semi-diameter now reads 6.782 mm (the package's 7.21693 mm is the real-ray
  axial marginal height at the stop, not the engine's derived stop); the identification section states the diagram
  fit and no longer calls Sigma's live page archived. The rest of the analysis wording is revised separately.
- Open: production identity rests on construction and spacing only. Open: close focus is inferred unit focus, not
  Sigma's mechanism. Open: the site's MTF analysis does not support fisheye projections, so this lens has no MTF.

## 2026-10-29 — Semi-diameter pass against the patent figure

- Source: JP H02-248910 A, PDF p. 3, Fig. 1 (Numerical Example 1, the example the file models). The page is a 347 dpi
  1-bit scan; Fig. 1 was measured at native resolution from ink runs, on both sides of the axis, with leader lines,
  labels and the r/d callouts identified and excluded. Sigma's construction diagram (1316 × 682 px web image) is the
  secondary check.
- Axial scale: 13 vertex crossings against the Example 1 spacings give 9.287 px/mm, 0.20 mm rms (surface 1 to 14 is
  525 px for 56.27 mm). Radial scale: circle fits of the drawn arcs with the printed radii give 8.67 px/mm (surface 1),
  8.89 (surface 2), about 8.75 (surface 11) and 8.9 (surface 13), so Fig. 1 is drawn about 3 % tall; 9.0 px/mm is
  used for heights (±3 %). Sigma's diagram is isotropic at its fitted 7.98 px/mm: its stop gap reads 6.8 mm against
  the engine's 6.782 mm stop.
- Figure readings (half of top-to-bottom ink distance, px → mm at 9.0 px/mm; Sigma diagram in brackets): surface 1 rim
  256.5 px → 28.5 mm (28.9); surface 2, where the concave meets the flat land, 137.5 px → 15.3 mm (15.3); L2 front to
  the outer edge 101.75 px → 11.3 mm (10.6); L2 rear concave to its notch 76.5 px → 8.5 mm (8.6); L3 73 px → 8.1 mm
  (7.9); L4 73 px → 8.1 mm (8.0); L5 79 px → 8.8 mm (8.05); L6 77.75 px → 8.6 mm (8.45); L7 81.75 px → 9.1 mm
  (8.75). Top and bottom readings differ by up to 4 px on the rear elements (hand drawing); the averages are used.
- Shape check, independent of the radial scale (height ÷ L4 height): Fig. 1 gives surface 2 1.88, L2 rear 1.05, L5
  1.08, L6 1.07, L7 1.12; Sigma gives 1.91, 1.08, 1.01, 1.06, 1.09; the stored values gave 1.76, 1.24, 0.98, 0.98,
  0.98. Surface 2 is fixed at 15.0 mm (90° chief floor 14.909 mm, 75° rim-angle cap at 15.03 mm), so the drawing puts
  L4 at about 8.0–8.3 mm.

| Surface | Before | After | Figure (Sigma) | Evidence |
| --- | --- | --- | --- | --- |
| 1 | 29.0 | 29.0 | 28.5 (28.9) | kept, within 2 % |
| 2 | 15.0 | 15.0 | 15.3 (15.3) | kept; 90° chief floor 14.909, rim-angle cap 15.03 |
| 3 | 10.5 | 10.5 | 11.3 (10.6) | kept; +8 % is inside the noise band and Sigma agrees with 10.5 |
| 4 | 10.5 | 8.5 | 8.5 (8.6) | −19 %; both drawings end the deep concave well inside the L2 front rim |
| 5, 6 | 8.7 | 8.1 | 8.1 (7.9) | −7 %; step-order fix, L3 is level with L4 and below the rear group in both drawings |
| 7, 8 | 8.5 | 8.1 | 8.1 (8.0) | −5 %; step-order fix with L3 |
| 10, 11 | 8.3 | 8.8 | 8.8 (8.05) | +6 %; step-order fix, Fig. 1 draws L5 0.65 mm above L4 (Sigma level) |
| 12, 13 | 8.3 | 8.6 | 8.6 (8.45) | +4 %; keeps L6 level with L5 as drawn |
| 14 | 8.3 | 9.1 | 9.1 (8.75) | +10 %; L7 is drawn about 0.45 mm above L6 at top and bottom |

- Floors: the real F/2.8 axial marginal ray (aimed at the 2.732 mm entrance pupil) reaches 4.39 mm at surface 4, 5.67
  at surface 6, 6.97 at surface 8, 7.78 at surface 11 and 7.48 at surface 12; the 90° chief ray reaches 7.28 mm at
  surface 4, 6.70 at surface 5 and 4.83 at surface 14. Every new rim clears both by at least 1.02 mm (surface 11
  axial). The engine's vector-launched chief ray is unclipped at 30–89° at focus 0, 0.5 and 1, with the same 0.134 mm
  smallest margin at 89° (surface 2) as before.
- Bundle: a meridional fan through the 6.782 mm stop passes 88 % → 90 % of the stop diameter at 54°, 75 % → 72 % at
  70°, 58 % → 60 % at 80° and 30 % → 36 % at 90°; the lower rims at L2–L4 clip more of one side and the larger rear
  rims clip less of the other. Off-axis vignetting stays heavy at the 90° edge, as the lens's design implies.
- Engine before and after: EFL 15.3007 mm, F/2.800 at the 6.782 mm stop, half-field 90°, tracing half-field 41.08°,
  all unchanged; the stop housing follows the neighbours from 8.3 to 8.1 mm. Surface validator OK, image-circle audit
  0 undersized; the field-coverage audit skips fisheye projections. The largest cross-gap sag fraction falls from
  0.595 (surfaces 4–5 at 8.7 mm) to 0.491; the default 0.90 limit is kept.
- Render: at infinity and at 0.15 m the cross-section now shows L2's rear concave ending inside its front rim, L3 and
  L4 level, and the rear group stepping up to L7, as in Fig. 1. The renderer joins L2's unequal rims with a slanted
  edge rather than Fig. 1's square notch; Sigma's diagram draws a chamfer there.
- Analysis edits: the clear-aperture paragraph gives the new rims and how they were set; the cross-gap fraction now
  reads 0.491137.
- Open: Fig. 1 is a small hand drawing, and its radial scale is known to about ±3 %.
