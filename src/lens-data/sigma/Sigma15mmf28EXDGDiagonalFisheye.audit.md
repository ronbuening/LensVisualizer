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

## 2026-10-29 — Second review: diagram, labels and movement

- Compared: the local page at infinity and at 0.15 m, the focus-movement overlay and the element inspector (L1, L2, L4,
  L7) against Fig. 1 on PDF p. 3, the element text on p. 2 and Sigma's construction diagram. Fig. 1 was re-measured
  independently from 347 dpi ink runs, taking line centres on both sides of the axis. Axial scale: surface 1 to 14 is
  525 px for 56.27 mm, 9.33 px/mm. Radial scale: the surface 2 arc (R 15.56 mm) fits 8.85–9.04 px/mm at 60–120 px
  height, so 8.9 px/mm is used for heights. Sigma's diagram was re-read at 7.98 px/mm.
- Silhouette differences seen on the page: L2 is drawn with a slanted edge from its 10.5 mm front rim to its 8.5 mm
  rear rim, where Fig. 1 draws a square block with a notch (Sigma draws a chamfer); L7 rises from 8.6 to 9.1 mm along
  its top edge, where Fig. 1 draws a flat top with a small chamfer at the front corner. Every other element matches the
  figure's shape: L1's large front rim and slanted flange, L3 and L4 level, L4 and L5 square-cut, L5 and L7 taller than
  L6.

| Surface | Stored sd | Fig. 1 height (px) | Fig. 1 (mm) | Height ÷ L4, figure / site | Sigma (mm) | Decision |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 29.0 | 256.5 | 28.8 | 3.53 / 3.58 | 29.0 | keep |
| 2 | 15.0 | 137 | 15.4 | 1.88 / 1.85 | 15.0 | keep; 90° chief needs 14.91, rim-angle cap 15.03 |
| 3 | 10.5 | 102 | 11.5 | 1.40 / 1.30 | 10.6 | keep (below) |
| 4 | 8.5 | 79.5 at the notch | 8.9 | 1.09 / 1.05 | 8.6 | keep, inside noise |
| 5, 6 | 8.1 | 74.5 | 8.4 | 1.02 / 1.00 | 7.9 | keep |
| 7, 8 | 8.1 | 72.75 | 8.2 | 1 | 8.0 | keep |
| 10, 11 | 8.8 | 77.5 | 8.7 | 1.07 / 1.09 | 8.05 | keep |
| 12 | 8.6 | 74 | 8.3 | 1.02 / 1.06 | 8.45 | keep |
| 13 | 8.6 | 76 at the cement end | 8.5 | 1.04 / 1.06 | — | keep (below) |
| 14 | 9.1 | 80.5 | 9.0 | 1.11 / 1.12 | 8.75 | keep |

- No `sd` changed. L2 front: Fig. 1 is 6–10 % larger than 10.5 mm depending on the reference (L1 rear, L4, the arc
  scale or L1 front). That is under the 10 % bar, and Sigma's diagram agrees with 10.5 mm. Raising only the front rim
  would also steepen the slanted edge the renderer draws in place of Fig. 1's square notch. The rear face cannot be
  squared to the front: at 10.5 mm the R 12.2 mm concave reaches 8.5 mm behind the L2 front vertex, past L3's front
  rim. L6–L7: setting surface 13 to 9.1 mm would square L7's top, but it would draw L6's rear above its front and
  remove the step Fig. 1 draws between the cement end and L7's outer rim. The current 8.6 / 8.6 / 9.1 keeps that
  ordering.
- Rays are unchanged: the 90° chief at the 21.69 mm image height reaches 26.90, 14.91, 9.29 and 7.28 mm at surfaces
  1–4 against rims of 29.0, 15.0, 10.5 and 8.5 mm. Surface validator OK; image-circle audit 0 undersized; the
  field-coverage audit and the engine vignetting curve skip fisheye projections. Engine values: EFL 15.3007 mm,
  F/2.800 at the 6.782 mm stop, half-field 90°, tracing half-field 41.08°.
- Labels found correct: element names and diagram labels L1–L7 follow the patent text (第1レンズ (L1) to 第7レンズ
  (L7), p. 2) and Fig. 1. Each `type` matches the radius signs: L1 and L2 negative menisci convex to the object, L3
  biconvex, L4 a negative meniscus concave to the object, L5 and L6 biconvex, L7 a negative meniscus. The roles and the
  patent conditions they quote are correct, and every element shows a focal length in the inspector. The six group
  brackets (L1, L2, L3, L4, L5, L6–L7) bracket the six air-spaced components in the patent's own lens notation. They
  repeat the element-label row, which is redundant but not wrong. The single doublet bracket D1 spans surfaces 12–14
  and does not collide with the only gap label, BF. There are no aspheres or `A` suffixes, which matches the
  all-spherical table. The stop sits at row 9 between L4 and L5, as in Fig. 1.
- Tags and glass: no `apd` tags. The patent prints only n and ν (no glass names, extra lines or partial dispersion),
  and Sigma's diagram marks no special glass. All seven glass labels resolve to their printed n/ν (J-LAK14, NBFD11,
  FD140, NBFD15, FK5 twice, FD60).
- Movement: this is a prime with inferred unit focus. Keyframe 0 is infinity, with an image gap of 38.956 mm. The gap
  grows monotonically to 42.689 mm at keyframe 8, where the object-to-image distance is 150 mm and the magnification
  1:4.10. The focus overlay shows all six components moving together 3.73 mm toward the object. The slider's far end
  reads 15 cm and the BF readout 42.69 at close focus. The order and direction are correct; there is no zoom.
- Open: the renderer joins unequal rims with a straight edge, so L2's notch and L7's front-corner chamfer are drawn as
  slants. Production close focus remains the inferred unit-focus model (1:4.1 against Sigma's 1:3.8).

## 2026-10-30 — Fresh F-mount patent, concave-end and glass review

- Reopened exact `patents/JPH02248910A.pdf` (SHA-256 `ae21032bfeb6155ef3301c49f882566096c8edc1de0946f3e723784a8918269c`): selected Numerical Example 1, all seven n/ν pairs and Figure 1 on PDF p.3; definitions and element prose on p.2; d/g aberration plots on p.4. Inspected the native 347 dpi raster and 600 dpi figure render. Every source pair remains literal. The table has no spectral suffix: d remains an explicitly assumed modeling reference, supported by d/g plot labels, rather than a printed d-line definition.
- Fresh glass resolution retains seven compatible curves: J-LAK14, NBFD11, FD140, NBFD15, FK5 twice and FD60. Catalog consistency passes. No actual C/F/g, partial ratio or source anomalous-material designation; no catalog-only per-lens spectral overrides or APD tags. Supplier/melt and exact historical spectra remain unconfirmed.
- Whole-outline review retains all existing clear radii and their prior source qualifications: L1 29/15 mm, L2 10.5/8.5, L3/L4 8.1, L5 8.8 and rear compound 8.6/8.6/9.1 mm. L1's external mounting flanges remain excluded. The small L7 front-corner step is retained as a connected inclined edge; no opaque cement-interface land is added.
- Figure 1 independently draws a flat exposed shoulder beyond L2's rear concave endpoint. Add only S4 `rimExtensionSd: 10.5` at its unchanged 8.5 mm clear cap, ending at the existing L2 front body. Native endpoint/body ratios are about 0.76–0.78, with several-pixel uncertainty; the adopted 8.5/10.5≈0.81 remains conservative within the retained source/secondary-diagram uncertainty. The earlier audit's renderer-slant limitation is superseded for L2 by this explicit land. The manufacturer's secondary diagram draws a chamfer, so the shoulder is a patent-model inference, not certified production mechanics. No inward cap edit, numeric cut or depth-source exemption.
- The actual candidate's canonical checks and shared inferred-cut checks pass; no numeric cuts are authored. The stock cut-beam guard does not support this bounding-sphere field. A temporary diagnostic removes the land and gives S4 its complete 10.5 mm sphere, with every other sphere, cap, spacing, aperture and control unchanged. Explicit public vector aiming/full tracing carries `launchBoundT` and checks wide-open stop lattices over 0–90° in 0.5° steps at all nine focus geometries: 1,629 fields, 64 cells across each stop. Maximum transmitting-beam reach is 8.303979600 mm at 83°, leaving 0.196020400 mm to the retained 8.5 mm cap, above required max(0.05,0.003r)=0.05 mm. This diagnostic is canonically valid too; 4,657,842 transmitted and 600,570 physically blocked samples, zero failed or unaimed pupil samples and no missing vector launches. At 89.5° in each focus geometry, the public chief seed reports bracket-failed, but independent aimed-stop center solving converges with 1.29×10⁻¹² mm residual and the full center trace passes; all 3,228 lattice samples are aimed there. This solver fallback is retained as a qualification. These finite samples support the margin; they are not a continuum proof or flux measurement.
- Specialized before/after checks use public bounding-sphere vector chiefs with their launch bounds. All 63 chiefs at 0/30/60/80/89/89.9/90° and nine focus geometries converge and transmit identically. Direct vector-aimed 16-cell stop lattices retain 8,604 transmitted samples, lose 0 and gain 0; 4,500 are physically blocked, with no unresolved traces. The ordinary vignetting-curve shortcut cannot certify bounding-sphere fields and is not used for the wide-field claim.
- Inspected 27 actual SVG states spanning all nine focus geometries: finite paths, connected rear compound and zero hidden trim. Image-circle reports zero undersized surfaces; native axial F2.8 is iris-limited (traced 2.799999998). Ordinary rectilinear field coverage correctly skips this fisheye. All R/d, nd/ν, reference assumptions, aspheres (none), stop, projection, focus/aperture controls and tolerances remain invariant.
- Parallel-direction rays through inferred close-focus geometry are not finite-object off-axis conjugates. The prior unit-focus, spherical-object-surface, production-correlation, source-scale and no-MTF limitations remain. No source finite spacing or manufacturer clear dimension is newly asserted.
