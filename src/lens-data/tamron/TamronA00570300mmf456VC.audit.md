# Audit Log — TAMRON SP 70-300mm f/4-5.6 Di VC USD

Patent: US 8,228,605 B2, Example 2

## 2026-08-10 — Patent-figure semi-diameter and glass audit

- Reviewed Figure 12 on PDF page 13 at 300 dpi. The front-group, variator, VC, and rear-group
  envelopes agree with the modeled taper within the drawing's measurement uncertainty; no SD
  change had sufficiently strong figure evidence.
- Added the official HOYA MC-FCD1-M20 coefficient row for the `497815` class used by L110. SUMITA
  K-PFK80 remains the exact-coordinate cross-check; neither name is treated as production-supplier
  evidence. The prescription is now 17/17 strict Sellmeier-covered.

### Rendered-diagram follow-up

- Compared the site rendering with Figure 12. No additional SD adjustment clears the required
  figure-evidence threshold; the modeled group envelopes remain consistent with the patent.
- Restored the patent's 101-118 element numbering (with diaphragm position 108 omitted) and the
  nested rear-group identifiers 141, 142, and 143. This removes duplicated group prose and reduces
  annotation collisions without changing optical geometry.
- Rechecked every medium: all 17 remain coefficient-backed. Coordinate-class labels stay
  supplier-neutral where the patent does not identify a production glass maker.

## 2026-10-08 — Six clipping rims raised to the stated on-axis ray; surfaces 7 and 8 kept

Rule (maintainer, 2026-10-08): an inferred rim that clips the on-axis beam of the source's printed
f-number is corrected by the change that alters shape and comparative size the least, so only the
surfaces that clip move, each only to the height the stated on-axis ray reaches there at the station
that needs most (rounded up at the file's precision), with the patent figure as a check and not as
the source of the value.

Result: partly raised. Six of the eight clipping surfaces moved. Surfaces 7 and 8 keep 12.24 mm
because the value the ray needs there fails the cross-gap validation rule.

| Field | Before | After | Source |
|---|---:|---:|---|
| Surface 6 `sd` (L104 front) | 12.24 | 12.7 | Stated f/5.8526 on-axis ray reaches 12.695 mm at 292 mm |
| Surface 9 `sd` (L105/L106 cemented face) | 12.24 | 12.9 | Stated ray reaches 12.896 mm at 292 mm |
| Surface 10 `sd` (L106 rear) | 12.24 | 13.06 | Stated ray reaches 13.055 mm at 292 mm |
| Surface 12 `sd` (L107 rear) | 13.4 | 13.5 | Stated ray reaches 13.452 mm at 292 mm |
| Surface 14 `sd` (L109 front) | 14.5 | 14.6 | Stated ray reaches 14.554 mm at 292 mm |
| Surface 15 `sd` (L109 rear) | 14.5 | 14.6 | Stated ray reaches 14.581 mm at 292 mm |
| Surface 7 `sd` (L104 rear) | 12.24 | 12.24 (kept) | Stated ray reaches 12.424 mm at 292 mm; 12.43 fails the 7→8 gap rule |
| Surface 8 `sd` (L105 front) | 12.24 | 12.24 (kept) | Stated ray reaches 12.427 mm at 292 mm; 12.43 fails the 7→8 gap rule |

The 292 mm station needs most on every listed surface; at 71.75 mm and 150 mm the stated ray stays
below the old values everywhere except surface 15 at 150 mm (14.516 mm).

### Surfaces 7 and 8 kept at 12.24 mm

- With 12.43 mm on both faces the validator rejects the file at every zoom position: air gap 7→8,
  combined sag 2.81 mm against an allowed 2.751 mm of the 3.057 mm gap (0.919078 of the gap against
  the default `gapSagFrac` of 0.90). This was established with the values substituted in memory, so
  the file was never saved in a failing state.
- The two concave faces meet at about 12.96 mm. At 12.43 mm they keep 0.247 mm of rim air; at
  12.24 mm, 0.334 mm (0.890846 of the gap).
- The largest equal value that passes the default rule is 12.30 mm (0.899712 of the gap). It still
  clips (f/5.92 at 292 mm, +1.1 %) and is neither the stored value nor the ray height, so it was
  not used.
- Only semi-diameters were in scope; `gapSagFrac` was not touched. With a per-lens `gapSagFrac` of
  0.92 and 12.43 mm on surfaces 7 and 8, a substituted build validates and traces f/5.87 at 292 mm
  with the iris as limiter (+0.4 %).

### Traced f-number and limiter

| Station | Stated | Before | After |
|---|---|---|---|
| 71.75 mm | f/4.12 | f/4.12, iris (−0.0 %) | f/4.12, iris (−0.0 %) |
| 150 mm | f/4.83 | f/4.84, iris (+0.2 %) | f/4.84, iris (+0.2 %) |
| 292 mm | f/5.85 | f/6.25, rim of surface 10 (+6.7 %) | f/5.94, rim of surface 8 (+1.6 %) |

- The raise listing named surfaces 6, 7, 8, 9, 10, 12, 14 and 15 before the edit (largest raise
  6.7 %) and names surfaces 7 and 8 after it (12.24 → 12.43, 1.6 %).
- The fixed iris is 14.0201 mm and alone gives f/4.122 / 4.838 / 5.875, so +0.4 % is the least the
  292 mm station can show under this iris model.

### Figure check

- Fig. 12 (Embodiment 2, wide state), PDF page 13, rendered at 600 dpi (5120 × 6600 px). The axis
  runs vertically at x = 2770 px with the object side at the bottom.
- Scale from the printed prescription: front vertex of 101 (y 5485.5) to rear vertex of 118
  (y 2037.5) is 3448 px for 139.5822 mm, 24.70 px/mm. To the image plane (y 858.5) it is 4627 px
  for 187.1191 mm, 24.73 px/mm; surface 6 to surface 12 is 295 px for 12.1377 mm, 24.3 px/mm.
- Drawn half-heights are outer ink edges averaged over both sides of the axis; the outline is 12 to
  14 px wide, so line-centre values are about 0.3 mm lower. The figure draws the stop opening 9 %
  wider than the modeled iris, so a second column rescales to that opening (26.93 px/mm).

| Element | Drawn (px) | Drawn (mm, axial scale) | Drawn (mm, stop scale) | Stated ray needs | `sd` now |
|---|---:|---:|---:|---|---|
| L104 | 348 | 14.1 | 12.9 | 12.70 front, 12.43 rear | 12.7 / 12.24 |
| L105 + L106 | 389.5 | 15.8 | 14.5 | 12.43 / 12.90 / 13.06 | 12.24 / 12.9 / 13.06 |
| L107 | 369.5 | 15.0 | 13.7 | 13.5 rear (front clear) | 13.4 / 13.5 |
| L109 | 401 | 16.2 | 14.9 | 14.6 both faces | 14.6 / 14.6 |
| L110 + L111 (not raised) | 419 | 17.0 | 15.6 | clear | 14.5 |
| Stop opening (inner tick ends) | 377.5 | 15.3 | 14.0 | — | iris 14.0201 |

- No element is drawn below the height the stated ray needs. On the axial scale each raised element
  is drawn 11–21 % above its new value; on the stop scale, 1.6–11 % above. No figure conflict, and
  no raise exceeds 15 %.

### Render comparison

- The rendered section at 71.75 mm, the state Fig. 12 draws, was compared before and after the edit.
- Element order and grouping agree with the figure: 101; 102 + 103; 104; 105 + 106; 107; stop; 109;
  110 + 111; 112 + 113; 114; 115 + 116; 117; 118. Group I is tallest, group III and subgroup 141
  follow, group II sits below group III, and the VC doublet and subgroup 143 are smallest, as
  drawn. L104 is the shortest element of group II in both.
- Departures from the drawing:
  - L107 (13.4 / 13.5) is taller than the L105 + L106 doublet (12.24 to 13.06). The figure draws the
    doublet about 5 % taller than L107 (389.5 against 369.5 px). This was present before the edit
    (13.4 against 12.24); the step between the facing rims of surfaces 10 and 11 fell from 1.16 mm
    to 0.34 mm.
  - L104 and L105 render with slanted rims because their two faces now differ. The figure draws
    both with straight cylindrical rims.
  - L109 renders 0.1 mm taller than L110 + L111. The figure draws it about 4 % shorter (401 against
    419 px).
  - On the axial scale the figure draws every element of groups II and III larger than modeled:
    11–21 % for the raised elements and 17 % for L110 + L111.

### Where comparative size changed

- L104: front 12.7, rear 12.24 (were equal). The front face is 0.46 mm taller than the rear and
  0.46 mm taller than the facing front of L105 (were equal); the figure draws L104 about 11 %
  shorter than L105.
- L105: front 12.24, cemented face 12.9 (were equal), a 0.66 mm step.
- L106: front 12.9, rear 13.06 (were equal), a 0.16 mm step. The doublet's tallest rim rose from
  12.24 to 13.06 mm.
- L107: front 13.4, rear 13.5 (were equal), a 0.1 mm step.
- L109 (14.6) overtakes L110 + L111 (14.5) by 0.1 mm; they were equal, and the figure draws L109
  the smaller. The stated ray reaches 14.554 / 14.581 mm at L109 and 14.121 mm at surface 16, so
  the order follows the beam; the file's one-decimal precision rounds the L109 heights up to 14.6.
- By tallest rim, L104 and the doublet were equal at 12.24 mm; L104 (12.7) now sits below the
  doublet (13.06), the order Fig. 12 draws. Both are below L107 (13.5) as before, and group II is
  below group III as before (13.5 against 14.5 to 14.6).

### Confirmed unchanged

- R, d, nd, glass labels, variable gaps, the STO row (13.920345702691526), `nominalFno`,
  `zoomApertureModel`, and the semi-diameters of surfaces 1–5, 7, 8, 11 and 16–30.
- The file builds and validates: EFL 71.7499 / 150.0016 / 292.0140 mm, engine iris 14.0201 mm.
- Field coverage is 100 % at all three stations (21.65 of 21.65 mm at 17.1°, 8.0° and 4.1°), and
  the image-circle floor lists no undersized surface.
- Smallest edge thickness 0.264587 mm at L115, limiting cross-gap 7→8 at 0.890846 of the gap, and
  largest rim angle 38.2975° at surface 29. Gap 10→11 intrusion rose from 0.740115 to 0.845430 of
  its 1.3243 mm (rim air 0.344 → 0.205 mm), inside the 0.90 rule.

### Prose

- The data-file header's stop and semi-diameter blocks and the note's verification paragraphs now
  state the paraxial stop interval (13.9147–13.9260 mm), the 14.0201 mm fixed iris, the traced
  f-numbers and the 292 mm rim limit. The header box borders are aligned at 81 columns.
- The note's "minimum clearance among the default modeled on-axis/off-axis ray fans is 0.562871 mm"
  was removed. It depends on the semi-diameters, and the audit tools do not reproduce the procedure
  that produced it.

### Left open

- Surfaces 7 and 8 are 0.18 to 0.19 mm below the stated ray, so the 292 mm station is still
  rim-limited (+1.6 %). That is inside the census's default 3 % threshold, so the default census
  no longer lists this lens while the raise listing still does. Raising the pair to 12.43 mm needs
  a maintainer decision on a per-lens `gapSagFrac` of at least 0.9191 (other catalog files carry
  values from 0.91 to 1.0).
- L107 stays taller than the L105 + L106 doublet, opposite to Fig. 12. Neither surface 11 nor the
  doublet clips beyond the values above, so nothing moved on the figure's account.
- The 2026-08-10 entry found no figure evidence strong enough to change a semi-diameter. The raises
  in this entry come from the ray trace; the figure only confirms that none is drawn smaller.
- Surfaces 7 and 8, and the front and rear faces that differ on L104, L105, L106 and L107, are taken
  up in the section that follows ("Square rims kept square and cross-gap limit raised").

## 2026-10-08 — Square rims kept square and cross-gap limit raised

Rule points applied (maintainer rulings of 2026-10-08): point 2, an element whose two faces carried one
value before any rim was raised and which the figure draws square-cut keeps one value, the higher of
its faces' ray heights; and point 3, where the cross-gap limit refuses such a value although the
surfaces do not cross and the figure draws the elements meeting at the rim, `gapSagFrac` is set to the
smallest two-decimal value that admits it. The ray heights of point 1 are those of the preceding
section.

Result: done. L104, the L105 + L106 doublet and L107 each carry one value again, no surface is below
the stated on-axis ray, and all three stations are limited by the iris.

| Field | Before | After | Source |
|---|---:|---:|---|
| Surface 7 `sd` (L104 rear) | 12.24 | 12.7 | Squared to the higher face, figure draws a square rim: surface 6 needs 12.695 mm at 292 mm (own ray height 12.424 mm) |
| Surface 8 `sd` (L105 front) | 12.24 | 13.06 | Squared to the higher face, figure draws one common square rim for L105 + L106: surface 10 needs 13.055 mm at 292 mm (own ray height 12.427 mm) |
| Surface 9 `sd` (L105/L106 cemented face) | 12.9 | 13.06 | Squared to the higher face of the doublet, figure draws one common square rim: surface 10, 13.055 mm at 292 mm (own ray height 12.896 mm) |
| Surface 11 `sd` (L107 front) | 13.4 | 13.5 | Squared to the higher face, figure draws a square rim: surface 12 needs 13.452 mm at 292 mm (own ray height 13.072 mm, clear at 13.4) |
| `gapSagFrac` | default 0.90 | 0.96 | Smallest two-decimal value that admits 12.7 mm on surface 7 against surface 8 (pair 7→8, 0.959985 of the gap) |

Surfaces 6 (12.7), 10 (13.06), 12 (13.5), 14 and 15 (14.6) already sat at their ray heights and did not
move in this pass.

### Targets under points 1 and 2

| Surface | Stated ray at 292 mm | Face by face (point 1) | Element rim (point 2) | Value |
|---|---:|---:|---|---:|
| 6 (L104 front) | 12.695 | 12.7 | L104 square | 12.7 |
| 7 (L104 rear) | 12.424 | 12.43 | L104 square | 12.7 |
| 8 (L105 front) | 12.427 | 12.43 | L105 + L106 one common square rim | 13.06 |
| 9 (cemented face) | 12.896 | 12.9 | L105 + L106 one common square rim | 13.06 |
| 10 (L106 rear) | 13.055 | 13.06 | L105 + L106 one common square rim | 13.06 |
| 11 (L107 front) | 13.072 | 13.4 (clear) | L107 square | 13.5 |
| 12 (L107 rear) | 13.452 | 13.5 | L107 square | 13.5 |
| 14 (L109 front) | 14.554 | 14.6 | L109 square | 14.6 |
| 15 (L109 rear) | 14.581 | 14.6 | L109 square | 14.6 |

- The raise listing run on a scratch copy of the file at commit 2c813a34 (surfaces 6–10 at 12.24,
  11–12 at 13.4, 14–18 at 14.5) names surfaces 6, 7, 8, 9, 10, 12, 14 and 15 and gives the square-rim
  heights 6/7: 12.7, 8/9: 12.9, 9/10: 13.06 and 11/12: 13.5. L105 and L106 are drawn with one common
  rim, so the 8/9 pair takes the doublet's 13.06 instead of 12.9.
- No value is above the higher face's ray height rounded up at the file's precision (two decimals on
  surfaces 6–10, one decimal on 11–15).

### How Fig. 12 draws each rim

Fig. 12 (Embodiment 2, wide state), PDF page 13 at 600 dpi, axis at x = 2770 px, object side at the
bottom. Half-heights are the outermost ink of the outline in px from the axis, right side / left side,
read row by row along the axis; the axial scale is 24.70 px/mm.

| Element | Front face ends at | Rear face ends at | Mean (mm, axial scale) | Rim as drawn | One value at 2c813a34 |
|---|---|---|---:|---|---|
| L104 | 347 / 348 | 347–349 / 348 | 14.1 | Square-cut; straight for the full 78 px of its length | Yes, 12.24 |
| L105 + L106 | L105 front 387 / 392 | L106 rear 387 / 392 | 15.8 | One common square-cut rim over both elements, with a 4 px (right) to 8 px (left) notch at the cement line | Yes, 12.24 on 8, 9 and 10 |
| L107 | 367 / 370–371 | 367 / 372 | 15.0 | Square-cut | Yes, 13.4 |
| L109 | 399 / 400 | 399 / 400 | 16.2 | Square-cut: a flat edge about 50 px long between the two convex faces, 399–402 px along it | Yes, 14.5; already one value (14.6) |

- No element with a raised face is drawn stepped or chamfered; on each the two faces end within 2 px
  (0.08 mm) of each other, less than the 12 to 14 px outline width.
- Every element is drawn at least as tall as its value (L104 +11 %, doublet +21 %, L107 +11 %, L109
  +11 % on the axial scale), so point 4 holds nothing back.

### Cross-gap pair 7→8 (L104 rear / L105 front)

- With the targets and the default limit the validator rejects the file at every zoom position: air
  gap 7→8, combined sag 2.93 mm against an allowed 2.751 mm of the 3.057 mm gap, at sd = 12.7.
- Share of the gap: 2.9348 mm of 3.0571 mm, 0.959985, evaluated at the shared 12.70 mm rim. Rim
  clearance there: 0.122 mm.
- `gapSagFrac` 0.96 admits it (allowed 2.9348 mm, 0.00005 mm to spare). 0.95 does not: "Air gap 7→8:
  combined surface sag (2.93 mm) exceeds allowed gap intrusion (2.904 mm of 3.057 mm) at sd=12.7", in
  the fixed-gap check and at each of the three zoom positions. Both were established with the values
  substituted in memory, so the file was never saved in a failing state.
- The surfaces do not cross. The two spheres would meet at 12.958 mm and L104 ends at 12.70 mm. L105's
  front face runs on to 13.06 mm outboard of the L104 rim; its corner there lies 0.036 mm to the image
  side of the L104 rear corner and 0.36 mm outside it, and the nearest approach of the L104 rear corner
  to the L105 front face is 0.119 mm.
- Fig. 12 draws the pair meeting at the rim: the L104 rear corners touch the L105 front face inside
  the L105 rim (on the right side the L105 outline ends at y = 4631 px and the L104 outline begins at
  y = 4632 px).
- Gap 10→11 (L106 rear / L107 front) is unchanged at 0.845430 of its 1.3243 mm with 0.205 mm of rim
  air, evaluated at the shared 13.06 mm rim; it does not need the raised limit.

### Traced f-number and limiter

| Station | Stated | Before | After |
|---|---|---|---|
| 71.75 mm | f/4.12 | f/4.12, iris (−0.0 %) | f/4.12, iris (−0.0 %) |
| 150 mm | f/4.83 | f/4.84, iris (+0.2 %) | f/4.84, iris (+0.2 %) |
| 292 mm | f/5.85 | f/5.94, rim of surface 8 (+1.6 %) | f/5.87, iris (+0.4 %) |

- The raise listing named surfaces 7 and 8 before the edit (12.24 → 12.43, 1.6 %) and names no surface
  after it.
- The +0.2 % and +0.4 % that remain are the fixed iris, 14.0201 mm, against the 14.0519 mm and
  14.0729 mm the stated f-numbers need at 150 mm and 292 mm; no rim limits any station.

### Render comparison

- Rendered sections at 71.75 mm, the state Fig. 12 draws, and at 292 mm were compared with the figure.
- Element order and grouping agree: 101; 102 + 103; 104; 105 + 106; 107; stop; 109; 110 + 111;
  112 + 113; 114; 115 + 116; 117; 118.
- L104, the L105 + L106 doublet, L107 and L109 each render with a straight rim parallel to the axis,
  the doublet with one common rim over both elements, as the figure draws them. The slanted rims of
  L104 and L105 noted in the preceding section are gone.
- L104's rear corners close on the L105 front face just inside the L105 rim, and the L106 rear corners
  on the L107 front face, as in the figure. The two elements do not overlap in the render.
- At 292 mm the outermost drawn on-axis ray passes every rim of group II and reaches the stop.
- The renderer trims no element at zoom fractions 0, 0.25, 0.5, 0.75 and 1 (largest trim 0.000000 mm).
- Proportions that differ from the drawing:
  - L107 (13.5) is 0.44 mm, 3.4 %, taller than the doublet (13.06). The figure draws the doublet 5 %
    taller than L107 (389.5 against 369.5 px). At 2c813a34 L107 was 9.5 % taller (13.4 against 12.24).
  - L104 is 2.8 % shorter than the doublet (12.7 against 13.06); the figure draws it 11 % shorter
    (348 against 389.5 px). At 2c813a34 they were equal.
  - L109 (14.6) is 0.1 mm taller than L110 + L111 (14.5); the figure draws it 4 % shorter (401 against
    419 px).
  - On the axial scale the figure draws every element of groups II and III 11–21 % larger than
    modeled.

### Confirmed unchanged

- R, d, nd, glass labels, variable gaps, the STO row (13.920345702691526), `nominalFno`,
  `zoomApertureModel`, and the semi-diameters of surfaces 1–6, 10, 12 and 14–30.
- The file builds and validates: EFL 71.7499 / 150.0016 / 292.0140 mm, engine iris 14.0201 mm.
- Field coverage is 100 % at all three stations (21.65 of 21.65 mm at 17.1°, 8.0° and 4.1°), and the
  image-circle floor lists no undersized surface.
- Smallest edge thickness 0.264587 mm at L115 and largest rim angle 38.2975° at surface 29, both as
  before. Edge thickness at the squared rims: L104 3.030 mm, L105 4.581 mm, L106 1.705 mm, L107
  2.544 mm. Rim angles there: 13.05° (surface 7), 13.70° (8), 15.80° (9), 15.87° (11).

### Prose

- The data-file header's STOP / F-NUMBER and SEMI-DIAMETERS blocks state the iris-limited trace, the
  ray heights, the four square rims, the `gapSagFrac` pair with its share and rim air, and the two
  proportions that differ from Fig. 12. The header box borders are aligned at 81 columns.
- The note's verification paragraphs state the same figures: f/5.87 at 292 mm on the iris, one
  semi-diameter per square-drawn element, and the 7→8 gap at 0.959985 with 0.122 mm of rim air under
  `gapSagFrac` 0.96.

### Left open

- The 7→8 intrusion, 2.93477 mm (0.959985 of the gap), is 0.00005 mm inside the 0.96 limit. Any later
  rise of surface 7 or a shorter gap needs 0.97.
- L107 stays taller than the L105 + L106 doublet, and L109 0.1 mm taller than L110 + L111, opposite to
  Fig. 12. Both follow from the ray heights; matching the drawing would mean raising the doublet or
  L110 + L111 above what the stated ray needs, which the rule does not allow.
- The fixed iris leaves the 150 mm and 292 mm stations 0.2 % and 0.4 % slower than stated. That is the
  stop model, not a rim.
