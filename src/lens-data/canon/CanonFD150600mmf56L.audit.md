# Audit Log - CANON NEW FD 150-600mm f/5.6L

Patent: US 4,110,006, Example 4

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/US4110006.pdf`. The patent provides the Example 4 zoom prescription and construction figures, but no clear-aperture or semi-diameter table for the surfaces.
- The abstract and Figure 1 state and show the intended aperture hierarchy: the first sub-group is the largest, while the second, third, and fourth sub-groups of the focusing lens group are smaller; downstream variator, compensator, and imaging groups are progressively more compact.
- Stored SDs follow that structure: front collector surfaces are near 58-59 mm, the following fixed/focus front sub-groups are near 41-43.5 mm, the variator/compensator groups are near 21-23 mm, and the rear imaging group tapers to 15.5 mm.
- No SD values changed. Current values remain inferred renderer clear apertures, not patent-published mechanical diameters.

## 2026-07-30 - `773497` catalog-equivalent review

- Rendered and visually rechecked Example 4. L3 remains `nd = 1.77250`, `vd = 49.7`.
- Schott N-LAF34 (`1.77250 / 49.62`, code `773496`) retains the exact index and differs only by the final rounded
  Abbe digit (`delta vd = -0.08`).
- Relabeled L3 as an N-LAF34 catalog equivalent while leaving the production supplier unidentified. Synchronized
  the analysis; no prescription, zoom, focus, aperture, or semi-diameter values changed.

## 2026-07-30 - Remaining 534555 source audit

- Rechecked Example 4: L17 remains `nd = 1.53375`, `vd = 55.5`.
- Current and discontinued-inclusive first-party catalog searches found no coefficient row within the runtime
  d-line safety window.
- Reworded L17 as explicit unmatched `534555`; no supplier or approximate catalog curve was assigned, and no
  prescription or semi-diameter values changed.

## 2026-10-08 — Rims raised to the stated on-axis ray

Rule (maintainer, 2026-10-08): an inferred rim that clips the on-axis beam of the f-number the source prints rises
only to the height that ray reaches there at the station that needs most, rounded up at the file's 0.1 mm precision;
a surface that does not clip, the other face of an element, and the STO row keep their values.

The patent prints 1:5.6 for the whole range (Example 4 header; F/5.6 on FIG. 9A-9C at f = 150, 300, 600) and prints
no semi-diameters. The stated ray is the axis-parallel ray at the entrance-pupil radius of each station (13.550,
26.803, 53.167 mm); the 600 mm station needs most on every surface changed.

| Field | Before | After | Source |
|---|---:|---:|---|
| Surface 5 `sd` (L3 front) | 43.5 | 45.3 | f/5.6 on-axis ray height 45.219 mm at the 600 mm station |
| Surface 6 `sd` (L3 rear) | 43.5 | 44.1 | f/5.6 on-axis ray height 44.048 mm at the 600 mm station |
| Surface 7 `sd` (L4 front) | 43.0 | 43.8 | f/5.6 on-axis ray height 43.783 mm at the 600 mm station |
| Surface 8 `sd` (L4 rear) | 43.0 | 43.1 | f/5.6 on-axis ray height 43.003 mm at the 600 mm station |
| Surface 9 `sd` (L5 front) | 43.0 | 43.4 | f/5.6 on-axis ray height 43.399 mm at the 600 mm station |
| Surface 10 `sd` (L5 rear) | 43.0 | 43.4 | f/5.6 on-axis ray height 43.312 mm at the 600 mm station |

### Traced f-number and limiter

| Station | Stated | Before | After |
|---:|---:|---|---|
| 150 mm | f/5.6 | f/5.60 (-0.0 %), iris | f/5.60 (-0.0 %), iris |
| 300 mm | f/5.6 | f/5.59 (-0.1 %), iris | f/5.59 (-0.1 %), iris |
| 600 mm | f/5.6 | f/5.82 (+3.9 %), rim of surface 5 | f/5.60 (-0.0 %), rim of surface 9 on the stated ray |

After the edit the raise listing names no surface of this lens.

### Figure check

- The patent draws no cross-section of Example 4. FIG. 1, FIG. 3 and FIG. 7 are Examples 1, 2 and 3; Examples 4 to 6
  have aberration plots only (col. 8). The 2026-07-04 entry's "Figure 1" is therefore the Example 1 drawing. The check
  below uses the two sister drawings whose front groups have Example 4's construction.
- Transfer error between examples: the same f/5.6 ray (entrance height 53.17 mm) traced through Example 1's printed
  front group reaches 44.89 / 43.73 / 43.58 / 42.87 / 43.36 / 43.28 mm on surfaces 5 to 10, within 0.33 mm of the
  Example 4 heights in the table above.
- FIG. 1 (Sheet 1 of 11, PDF p. 2), read at the scan's native 300 dpi. Axis at x = 1221.5 px. Scale from Example 1's
  vertex spacing R1 to R14, 118.60 mm over 662 px: 5.58 px/mm (5.55 to 5.70 px/mm from the intermediate vertices).
  The drawn air spaces measure 100.8 / 30.0 / 30.3 mm against Example 1's f = 300 column 100.624 / 29.69 / 30.3, so
  the figure shows the intermediate zoom state.
- FIG. 1 drawn half-heights, mean of both sides: L1 296 px = 53.0 mm, L2 288 px = 51.6 mm, L3 253 px = 45.3 mm,
  L4 244 px = 43.7 mm, L5 239.5 px = 42.9 mm, L6 235 px = 42.1 mm, L7 233 px = 41.7 mm.
- FIG. 1 also draws ray L, which the text defines as the on-axis ray at the telescopic end, with H_A and H_B
  dimensioned on it. The ray runs inside the drawn rims, not on them: 281.5 px at L1, 234.5 px at L3, 226 px at L4
  and 225 px at L5 (mean of both sides), 5 to 7 % below the rim of each. Taking the ray at L1 as the patent's
  H_A = 600 / 5.6 gives a lateral scale of 5.25 px/mm, 6 % under the vertex-spacing scale; on that scale the drawn
  rims read higher (L3 48.2 mm, L4 46.5 mm, L5 45.6 mm), so it does not put any drawn element below the ray either.
- FIG. 3 (Sheet 3 of 11, PDF p. 4), Example 2, same method. Axis at x = 1378 px; R1 to R14, 117.50 mm over 659 px:
  5.61 px/mm (5.61 to 5.72 px/mm from the intermediate vertices). L3 251.5 px = 44.0 to 44.8 mm, L4 243 px = 42.4 to
  43.3 mm, L5 240 px = 42.0 to 42.8 mm.
- Against the new values: L3 is drawn at 45.3 mm (FIG. 1) and 44.0 to 44.8 mm (FIG. 3) against 45.3 mm; L4 at 43.7 mm
  and 42.4 to 43.3 mm against 43.8 mm; L5 at 42.9 mm and 42.0 to 42.8 mm against 43.4 mm. Every element raised is
  drawn within 3.3 % of the value the ray needs, far inside the 15 % band, so no row was held back.

### Render comparison

- Screenshots of the cross-section at zoom 300 mm, the state FIG. 1 draws, were taken before and after the edit.
  Render scale 1.65 px/mm. Rendered full heights: L3 145 to 151 px, L4 143 to 147 px, L5 143 to 145 px; L1, L2, L6
  and L7 unchanged at 197, 193, 143 and 139 px.
- Element order agrees with FIG. 1 throughout: II biconvex plus meniscus, III two negative menisci convex to the
  object, IV biconvex plus meniscus, V weak meniscus, VI biconcave plus cemented doublet, VII biconvex plus cemented
  doublet with a flat rear face, the stop directly ahead of VIII, then singlet, cemented doublet, the long air space,
  singlet and cemented doublet.
- Proportions agree in kind: the collector is tallest, III, IV and V step down in that order, and the zooming and
  imaging groups are far smaller. The step from the collector to L3 is 59.4 to 45.3 mm in the render (ratio 0.76,
  previously 0.73) against 53.0 to 45.3 mm in FIG. 1 (ratio 0.85).
- One departure from the drawing: L3 and L4 render with a tapered rim, front face taller than rear, where FIG. 1 and
  FIG. 3 draw both with a square-cut rim of one height. The L3 rear face (44.1 mm) is 2.6 % below the drawn 45.3 mm and
  the L4 rear face (43.1 mm) is 1.4 % below the drawn 43.7 mm.

### Where comparative size changed

- L3: front and rear faces were equal at 43.5 mm; they are 45.3 and 44.1 mm, 1.2 mm (2.7 %) apart.
- L4: front and rear faces were equal at 43.0 mm; they are 43.8 and 43.1 mm, 0.7 mm (1.6 %) apart.
- L5: both faces moved together, 43.0 to 43.4 mm, and stay equal.
- L3 over L4: 0.5 mm before; 1.5 mm at the front faces and 1.0 mm at the rear faces now. FIG. 1 draws 1.6 mm.
- L4, L5 and the front face of L6 were tied at 43.0 mm. They now descend 43.8 (L4 front), 43.4 (L5), 43.0 (L6 front),
  the order FIG. 1 draws (43.7, 42.9, 42.1 mm).
- L5 (43.4 mm) now stands 0.3 mm above the rear face of L4 (43.1 mm), which it used to equal. Both figures draw L5
  below L4, so on that one pair of faces the order differs from the drawing by 0.7 %; by element maximum L4 remains
  taller than L5.
- No element changed rank against the collector, sub-group V, or any group behind it.

### Confirmed unchanged

- Every R, d, nd, vd and variable gap; the STO row (18.38928 mm); the semi-diameters of surfaces 1 to 4 and 11 to 34.
- EFL 151.7585 / 300.1933 / 595.4652 mm; fixed wide-open iris 18.4573 mm; iris-only f/5.600 / 5.593 / 5.597.
- The file builds and passes validation. Edge thickness L3 8.08 to 8.18 mm, L4 7.69 to 7.71 mm, L5 2.60 to 2.49 mm;
  rim clearance of the air space inside III 2.54 to 2.46 mm; rim clearance of S1 in the 3 m focus state 3.56 to
  3.55 mm; steepest edited rim slope 13.7 degrees (surface 8).
- Traced field coverage reaches the 21.65 mm corner at 150, 300 and 600 mm, and the image-circle check lists no
  surface.
- Surfaces 11 to 14 clear the stated ray by 0.64 / 0.57 / 0.02 / 0.29 mm and were not touched.

### Left open

- No drawing of Example 4 exists, so the figure check rests on Examples 1 and 2 and on the 0.33 mm transfer error
  between examples.
- FIG. 1 draws the remaining elements close to the axial beam as well, and several inferred rims that do not clip
  stand well above it: collector 59.4 / 58.0 mm against 53.0 / 51.6 mm drawn (+12 %), variator 21.0 mm against 16.7
  and 17.5 mm (+26 %, +20 %), L11 23.0 mm against 18.1 mm (+27 %), L17 18.0 mm against 13.2 mm (+36 %), final doublet
  front face 18.2 mm against 14.1 mm (+29 %). These are Example 1 heights read off a schematic; lowering a rim is
  outside this rule and would change the modeled vignetting, so they are recorded for a separate figure pass.
- The tapered L3 and L4 rims follow from moving only the clipping faces. Squaring them to the figure would mean
  raising surfaces 6 and 8 past the ray (to 45.3 and 43.8 mm), which this rule does not allow.

The L3 and L4 rims are squared in the section that follows, "2026-10-08 — Square rims kept square".

## 2026-10-08 — Square rims kept square

Rule (maintainer, 2026-10-08): square rims stay square. An element whose two faces carried one value before any rim
was raised, and which the patent figure draws with a square-cut rim, keeps one value; both faces take the higher of the
two heights the stated on-axis ray gives. L3 and L4 qualify (43.5 / 43.5 and 43.0 / 43.0 at commit 2c813a34), so the
rear face of each takes its front face's value. Both values pass the validator at the default cross-gap limit, so
`gapSagFrac` is not set.

| Field | Before | After | Source |
|---|---:|---:|---|
| Surface 6 `sd` (L3 rear) | 44.1 | 45.3 | squared to the higher face, figure draws a square rim |
| Surface 8 `sd` (L4 rear) | 43.1 | 43.8 | squared to the higher face, figure draws a square rim |
| `gapSagFrac` | not set (default 0.90) | not set (default 0.90) | both values validate at the default |

The higher face of L3 is surface 5 (f/5.6 on-axis ray height 45.219 mm at the 600 mm station, 45.3 mm) and that of L4
is surface 7 (43.783 mm at the 600 mm station, 43.8 mm). Surfaces 5, 7, 9 and 10 keep 45.3, 43.8, 43.4 and 43.4 mm.
Surfaces 6 and 8 stand 1.252 and 0.797 mm above the stated ray; no rim sits above the value the rule gives.

### How the figures draw each rim

The patent draws no section of Example 4; the readings are from FIG. 1 (Example 1, PDF p. 2) and FIG. 3 (Example 2,
PDF p. 4) at 300 dpi, on the axes and scales of the section above. Both sheets are rotated, the object side at the foot
of the page, so a rim is a line parallel to the page's long edge and a face ends where its curve meets that line.

- L3, square-cut. FIG. 1: the rim is one straight line parallel to the axis on each side, centred at x = 969 px (left)
  and 1475 px (right) at the R5 corner and at the R6 corner alike; half-height 252.5 and 253.5 px, mean 253 px =
  45.3 mm, for the front face and for the rear face. FIG. 3: the outer edge of the rim stays at x = 1124 px (left) and
  1629 to 1630 px (right) on every row from the R5 corner to the R6 corner; half-height to the line centre 251.5 px =
  44.0 to 44.8 mm for both faces. On the right side of both figures a short diagonal stroke crosses the inside of the
  rear corner (in FIG. 3 it is the end of the R6 leader line); the outline itself is a square corner.
- L4, square-cut. FIG. 1: rim line centred at x = 977 px (left) and 1465 px (right) at both corners; half-height 244.5
  and 243.5 px, mean 244 px = 43.7 mm, for both faces. FIG. 3: outer edge at x = 1133 px (left) and 1621 px (right) on
  every row between the corners; half-height to the line centre 243 px = 42.4 to 43.3 mm for both faces.
- L5, square-cut. Both figures close the thin edge of the biconvex element with a short straight rim, 2 to 3 mm long in
  FIG. 1, at one height for both faces (42.9 mm in FIG. 1 and 42.0 to 42.8 mm in FIG. 3, as read in the section
  above). Its two faces already carry one value, 43.4 mm, and are not changed.
- Against the values: L3 is drawn at 45.3 mm and 44.0 to 44.8 mm against 45.3 mm on both faces; L4 at 43.7 mm and 42.4
  to 43.3 mm against 43.8 mm on both faces. Neither element is drawn more than 3.2 % below its value.

### Cross-gap figures for the faces moved

The validator measures two facing surfaces at their shared band, the lower of the two rims.

| Pair | Gap | Shared band | Sag intrusion | Share of gap | Rim clearance |
|---|---:|---:|---:|---:|---:|
| 6 → 7 (L3 rear, L4 front) | 4.488 mm | 43.8 mm | 2.024 mm | 45.1 % | 2.464 mm |
| 8 → 9 (L4 rear, L5 front), infinity | 40.03 mm | 43.4 mm | 2.276 mm | 5.7 % | 37.754 mm |
| 8 → 9 (L4 rear, L5 front), 3 m | 5.79 mm | 43.4 mm | 2.276 mm | 39.3 % | 3.514 mm |

- Pair 6 → 7 is unchanged by this pass: surface 7 sets the band before and after. The rear corner of L3 at 45.3 mm lies
  4.352 mm past the surface 6 vertex, 2.32 mm ahead of surface 7 continued to that height.
- Pair 8 → 9 was measured at 43.1 mm before this pass: intrusion 2.244 mm, 5.6 % and 37.786 mm at infinity, 38.8 % and
  3.546 mm in the 3 m focus state. The validator checks this pair at infinity focus; the renderer's trim test covers
  the 3 m state.
- Tried in memory, pair 6 → 7 passes at `gapSagFrac` 0.46 and is refused at 0.45. The lens as a whole is refused at
  0.89 on pair 16 → 17 in the variator (7.29 mm of 8.150 mm, 89.4 %), with these values and with the earlier ones; this
  pass does not touch that pair.

### Traced f-number and limiter

| Station | Stated | Before | After |
|---:|---:|---|---|
| 150 mm | f/5.6 | f/5.60 (-0.0 %), iris | f/5.60 (-0.0 %), iris |
| 300 mm | f/5.6 | f/5.59 (-0.1 %), iris | f/5.59 (-0.1 %), iris |
| 600 mm | f/5.6 | f/5.60 (-0.0 %), rim of surface 9 | f/5.60 (-0.0 %), rim of surface 9 |

At 600 mm surface 9 sits on the stated ray (43.4 against 43.399 mm). The raise listing names no surface of this lens
before or after.

### Render comparison

- Screenshots at zoom 300 mm, the state FIG. 1 draws, and at 600 mm, before and after the edit, plus the 3 m focus
  state at 600 mm after it. Render scale 1.65 px/mm.
- Rims: before the edit the top edge of L3 ran from pixel row 462 at the front face to 464 at the rear and that of L4
  from 464 to 465; after it each is one row, 462 and 464, mirrored at 612 and 610 below the axis. Both elements render
  with a flat rim parallel to the axis, as FIG. 1 and FIG. 3 draw them. L5 renders with the short square rim the
  figures draw.
- Rendered full heights: L3 151 px and L4 147 px on both faces; L1, L2, L5, L6 and L7 unchanged at 197, 193, 145, 143
  and 139 px.
- Element order is unchanged and agrees with FIG. 1 throughout, as listed in the section above.
- Proportions: L3 stands 1.5 mm above L4 on both faces (FIG. 1 draws 1.6 mm) and L4 stands 0.4 mm above L5 on both
  faces (FIG. 1 draws 0.8 mm). L5 no longer stands above the rear face of L4, so the front group descends L3, L4, L5,
  L6, L7 on every face, the order both figures draw. The step from the collector to L3 stays 59.4 to 45.3 mm (ratio
  0.76) against 0.85 drawn.
- In the 3 m focus state at 600 mm the focusing pair sits 3.5 mm behind the rim of L4 with no overlap.
- Still unlike the drawing: L6 (43.0 / 42.5 mm) and L7 (41.5 / 41.0 mm) render with a 0.5 mm step between their faces
  where the figures draw one height.

### Confirmed unchanged

- Every R, d, nd, vd and variable gap; the STO row (18.38928 mm); the semi-diameters of surfaces 1 to 5, 7 and 9 to 34.
- EFL 151.7585 / 300.1933 / 595.4652 mm; fixed wide-open iris 18.4573 mm; iris-only f/5.600 / 5.593 / 5.597.
- The file builds and passes validation. Edge thickness L3 8.18 to 8.38 mm, L4 7.71 to 7.82 mm, L5 2.49 mm; steepest
  rim slope among surfaces 5 to 10 is surface 8, 13.75 to 13.98 degrees.
- The renderer trims no element at 150, 300 or 600 mm at infinity or at 3 m, nor anywhere on a 101 by 21 grid of zoom
  and focus positions.
- Traced field coverage reaches the 21.65 mm corner at 150, 300 and 600 mm, and the image-circle check lists no
  surface.
- The wide-open vignetting curve (the analysis tab's default pupil sampling) is the same to four decimals at all three
  stations, at infinity and at 3 m; corner geometric transmission at infinity 0.713 / 0.638 / 0.617.

### Left open

- No drawing of Example 4 exists; the square rims are read from the sister Examples 1 and 2.
- L6 and L7 are drawn square in both figures but their faces differed before any rim was raised and neither clips the
  stated ray, so the rule leaves them stepped by 0.5 mm.
- The inferred rims that stand well above the drawing (collector, variator, L11, L17, final doublet), listed in the
  section above, are not touched.
