# Audit Log — Nikon Zoom-Nikkor 100-300mm f/5.6

Patent: US 4,641,928 A, Example 2 / Figure 2A.

## 2026-09-02 — Patent-figure, diagram, movement, and glass audit

### Semi-diameter review

The patent does not publish clear apertures. The exact USPTO PDF page 5 was rendered at high resolution and the optical
rims in Figure 2A were compared with the site diagram. Brackets, element numbers, leader lines, and mechanical ink were
excluded from the comparison.

| Surfaces | Before | After | Disposition |
|---|---:|---:|---|
| 4-5 (L12) | 28.0, 27.5 mm | 30.0, 30.0 mm | Matches L12 to the front G1 rim shown in Figure 2A. |
| 12-14 (G3) | 16.0, 16.3, 16.3 mm | 13.5, 13.5, 13.5 mm | Corrects the visibly oversized compensator silhouette. |

The revised rims retain positive edge thickness, shared-gap clearance, and image-circle coverage.

### Glass classification

All 14 physical-glass positions already resolve to compatible Sellmeier curves. The uniquely compatible 487702 and
713540 rows are now labeled as supplier-neutral S-FSL5 and J-LAK8 catalog equivalents. Ambiguous coordinate rows retain
class-level labels, and no production supplier, historical melt, or anomalous-dispersion claim is inferred.

### Diagram and movement metadata

- Added source-oriented `diagramLabel` values for L11a through L45.
- Expanded G1-G4 captions with signed power and functional roles.
- Verified the published wide-to-tele ordering: G2 moves 52.300 mm imageward, G3 moves 15.898 mm imageward, and G1/G4
  remain fixed. The unavailable quantitative focus reconstruction remains disabled.

## 2026-10-08 — Rims raised to the stated on-axis ray

Rule (maintainer, 2026-10-08): where an inferred rim clips the on-axis beam of the f-number the patent prints, only the
clipping surfaces move, each only to the height the stated ray reaches there at the station that needs most, rounded up
at the file's 0.1 mm precision; every other surface and the STO row keep their values.

| Field | Before | After | Source |
|---|---:|---:|---|
| Surface 12 `sd` (L3a front) | 13.5 mm | 14.6 mm | Stated ray 14.514 mm at 102 mm (14.495 mm at 294.784 mm) |
| Surface 13 `sd` (L3 junction) | 13.5 mm | 14.7 mm | Stated ray 14.606 mm at 102 mm (14.588 mm at 294.784 mm) |
| Surface 14 `sd` (L3b rear) | 13.5 mm | 14.9 mm | Stated ray 14.829 mm at 102 mm (14.810 mm at 294.784 mm) |

The stated ray is the f/5.6 on-axis marginal ray. The patent prints F-number 5.6 for the whole 102–294.784 mm range
and no semi-diameters. The raises are 8.1 %, 8.9 % and 10.4 %, all under the 15 % figure-review threshold.

### Traced f-number and limiter

| Station | Stated | Before | After |
|---|---:|---|---|
| 102 mm | f/5.6 | f/6.14 (+9.7 %), rim of surface 14 | f/5.600, iris |
| 294.784 mm | f/5.6 | f/6.14 (+9.6 %), rim of surface 14 | f/5.603 (+0.1 %), iris |

The fixed iris opens to 11.7515 mm at both stations before and after. `audit:aperture --raise` lists no surface for
this file after the edit.

### Figure check

Figure 2A (sheet 4 of 18, PDF page 5) draws Example 2 in the 102 mm state, axis vertical, object side at the bottom, no
stop drawn. The page was rendered at 300 dpi and the axis fitted as a straight line (0.39° scan tilt). Surface vertices
were read where each stroke crosses the axis and set against the printed spacings:

| Span | Printed | Drawn | Scale |
|---|---:|---:|---:|
| r1 to r12 | 67.074 mm | 2534 px | 37.78 px/mm |
| r12 to r21 | 97.712 mm | 3663 px | 37.49 px/mm |
| r1 to r24 | 169.986 mm | 6411.5 px | 37.72 px/mm |
| r24 to image | 67.047 mm | 1800.5 px | 26.85 px/mm |

The lens body holds one scale, 37.6 ± 0.2 px/mm; only the back focus is drawn short and it is not used. Half-heights
are the mean of the two sides of the axis, read to the outer edge of the rim stroke on rows clear of brackets, labels
and leader lines:

| Element | Drawn (px, two sides) | Drawn | File | File / drawn |
|---|---:|---:|---:|---:|
| L11 | 1136 / 1185 | 30.9 mm | 30.0–30.2 mm | 0.97–0.98 |
| L12 | 1129 / 1172 | 30.6 mm | 30.0 mm | 0.98 |
| G2 (L21, L22) | 584 / 619 | 16.0 mm | 14.8–15.6 mm | 0.93–0.98 |
| L3 | 622 / 637 | 16.7 mm | 14.6–14.9 mm (was 13.5) | 0.87–0.89 (was 0.81) |
| L41 | 638 / 622 | 16.8 mm | 15.5 mm | 0.92 |
| L42 | 570 / 554 | 14.9 mm | 14.0 mm | 0.94 |
| L43 | 573 / 538 | 14.8 mm | 13.0–13.5 mm | 0.88–0.91 |
| L44 | 516 / 504 | 13.6 mm | 12.5 mm | 0.92 |
| L45 | 573 / 543 | 14.8 mm | 13.0 mm | 0.88 |

L3 is drawn at 16.7 mm (about 16.4 mm if the stroke centre is read instead of its outer edge), 11–13 % above the
largest height the ray needs (14.829 mm). The figure does not draw the element smaller than the ray needs, so there is
no conflict and all three surfaces were raised.

### Render comparison

The cross-section was screenshotted at 102 mm, the state Figure 2A draws, before and after the edit.

- Element order matches the figure: the L11 doublet, L12, the L21 and L22 doublets directly behind G1, the L3 doublet
  alone in the long air space, L41, L42, L43, then L44 and L45 ahead of the image. The render adds the inferred STO
  behind L43; the figure draws none.
- Proportions match: G1 is about twice the height of everything behind it, G2, L3 and L41 form the next tier, L42 and
  L43 sit a little lower, and the L44/L45 pair is the smallest.
- L3 now renders just below G2 and L41 (0.6–0.7 mm lower) and taller than L42 and L43. The figure draws L3 level with
  L41, a little above G2, and taller than L42 and L43. Before the edit L3 rendered below L42 and 2.0 mm below L41.
- The 294.784 mm state also renders cleanly, with G2 closed up against L3 and no overlap.

### Where comparative size changed

- L3 against L42: 13.5 mm against 14.0 mm before, 14.6–14.9 mm against 14.0 mm after. L3 is now the taller of the two.
  The figure draws it that way (16.7 mm against 14.9 mm).
- L3 against the front face of L43: equal at 13.5 mm before, L3 taller by 1.1–1.4 mm after. The figure draws L3 taller
  (16.7 mm against 14.8 mm).
- L3 against G2: the rear face of L3 (14.9 mm) now exceeds surface 9 of G2 (14.8 mm) by 0.1 mm. G2's outer faces (15.5
  and 15.1 mm) and its 15.6 mm maximum stay above L3. The figure draws L3 slightly the taller (16.7 mm against 16.0 mm).
- L3 against L41: the difference closes from 2.0 mm to 0.6–0.9 mm with L41 still the taller. The figure draws them
  equal.
- L3's own faces: one 13.5 mm value on all three surfaces before; 14.6, 14.7 and 14.9 mm after, so the rear face is
  0.3 mm (2.1 %) larger than the front. The figure draws a straight rim.

### Confirmed unchanged

- The STO row (`sd` 11.387365), `nominalFno`, `zoomApertureModel`, every `R`, `d`, `nd` and glass, and the other 21
  semi-diameters. Computed EFL stays 101.9935 / 294.7686 mm.
- The file builds and validates. L3a edge thickness is 1.953 mm (was 2.558 mm) and L3b 2.504 mm (was 2.252 mm). The
  rim slope at the cemented junction is 23.8° (was 21.8°). The rim gap from G2 to G3 at 294.784 mm, where the vertex
  gap is 1.061 mm, is 1.886 mm (was 1.766 mm).
- Field coverage is 100 % at both stations (21.65 of 21.65 mm) and the image-circle check lists no undersized surface.
- At the viewer's default off-axis fan the bundle is bounded by the same surfaces as before: 12 and 24 at 102 mm, 1 and
  24 at 294.784 mm. In a scan of field angles out to the engine's half-field at each station, no cemented junction is
  a first limiter.
- One off-axis effect of the raise: at the 12.2° corner field at 102 mm the lower edge of the bundle is set by surface
  6 where surface 12 set it before, and the passing bundle is 6 % wider (10.92 mm against 10.26 mm at launch).

### Left open

- Figure 2A draws L3 at 16.4–16.7 mm, level with L41 and slightly above G2. The file holds it at 14.6–14.9 mm, about
  11 % inside the drawing and below both neighbours. The rule stops at the ray height, so the remaining difference is
  a figure-fit question for the semi-diameter audit procedure. The 16.0 / 16.3 / 16.3 mm values that preceded the
  2026-09-02 entry are closer to the drawing than the 13.5 mm that entry set.
- With rims 0.07–0.09 mm outside the on-axis ray, a G3 rim is the first off-axis limiter on one side of the bundle
  from about 0.14° of field at 102 mm: surface 14 up to about 0.56°, surface 12 from there to about 12.1°. That is
  the vignetting the rule keeps; a figure-fit enlargement would relax it.
- The authored STO `sd` of 11.387365 mm is the paraxial solve; the engine opens the iris to 11.7515 mm by real ray. The
  row was not touched.
- The stop station, 3.000 mm behind r20, remains an inference. The patent neither draws nor tabulates a stop.

The three G3 faces carry one value again; see "2026-10-08 — Square rims kept square" below.

## 2026-10-08 — Square rims kept square

Rule points 1 and 2 (maintainer rulings, 2026-10-08): a clipping face rises only to the height the stated on-axis ray
reaches there, and an element whose faces carried one value before any rim was raised, and which the figure draws with
a square-cut rim, keeps one value, the higher of its faces' heights; cemented elements drawn with one common rim are
treated as one. Point 3 was not needed: no target is refused by the cross-gap limit and `gapSagFrac` is not set (0.90
default).

| Field | Before | After | Source |
|---|---:|---:|---|
| Surface 12 `sd` (L3a front) | 14.6 mm | 14.9 mm | Squared to the higher face, figure draws a square rim |
| Surface 13 `sd` (L3 junction) | 14.7 mm | 14.9 mm | Squared to the higher face, figure draws a square rim |
| Surface 14 `sd` (L3b rear) | 14.9 mm | 14.9 mm | Unchanged: stated ray 14.829 mm at 102 mm (14.810 mm at 294.784 mm) |

### Starting point and targets

At commit 2c813a34, before any rim was raised, surfaces 12, 13 and 14 all carried 13.5 mm. `audit:aperture --raise`
on that copy lists the three as clipping and gives a square-rim height of 14.7 mm for L3a (surfaces 12/13) and 14.9 mm
for L3b (surfaces 13/14).

| Surface | Stated ray at 102 / 294.784 mm | Face by face (point 1) | Target (point 2) |
|---|---:|---:|---:|
| 12 (L3a front) | 14.514 / 14.495 mm | 14.6 mm | 14.9 mm |
| 13 (L3 junction) | 14.606 / 14.588 mm | 14.7 mm | 14.9 mm |
| 14 (L3b rear) | 14.829 / 14.810 mm | 14.9 mm | 14.9 mm |

The junction belongs to both elements, and the figure draws the doublet with one common rim, so the doublet is treated
as one element and all three surfaces take the highest of the three heights. From 13.5 mm each face has risen 10.4 %,
under the 15 % figure-review threshold; this pass adds 0.3 mm (2.1 %) to surface 12 and 0.2 mm (1.4 %) to surface 13.

### How the figure draws the rim

Figure 2A (PDF page 5) was rendered at 300 dpi (9667 by 14200 px; lens-body scale 37.6 px/mm) and the L3 outline read
row by row to the outer edge of the stroke on each side of the axis.

| Element | Faces | Drawn rim | Drawn half-heights (px, two sides) | Drawn |
|---|---|---|---:|---:|
| L3a | 12 (front) / 13 (junction) | Square-cut | front 620 / 641; junction ends on the same rim line | 16.8 mm |
| L3b | 13 (junction) / 14 (rear) | Square-cut | junction on the rim line; rear 620 / 637 | 16.7 mm |

- The L3 doublet has one common rim: a single straight stroke parallel to the axis on each side, running from the
  corner where r12 ends to the corner where r14 ends. Its outer edge holds 620 px on one side over the full edge and
  637–641 px on the other. The front face and the rear face end 0 px apart on one side and 4 px (0.1 mm, less than the
  stroke width) apart on the other. There is no step and no chamfer.
- The junction r13 meets that rim line 20–40 px (0.5–1.1 mm) behind the front corner, and the rim is 133–157 px
  (3.5–4.2 mm) long. The prescription gives 0.6 mm and 3.6 mm at the drawn 16.7 mm height, so the outline is the
  prescription's own edge cut square.
- Point 4: the figure draws L3 larger than the 14.9 mm value (16.7–16.8 mm), not smaller, so there is no conflict.

### Cross-gap limit

No `gapSagFrac` pair is set. At 14.9 mm the facing surfaces on both sides of G3 curve away from each other at the rim,
so neither air gap is intruded on and the file builds at the 0.90 default.

| Pair | Station | Vertex gap | Share of the gap used | Rim clearance |
|---|---:|---:|---:|---:|
| 11 → 12 (G2 to G3) | 102 mm | 37.463 mm | 0 % | 38.322 mm |
| 11 → 12 (G2 to G3) | 294.784 mm | 1.061 mm | 0 % | 1.920 mm (was 1.886 mm) |
| 14 → 15 (G3 to L41) | 102 mm | 23.112 mm | 0 % | 26.645 mm |
| 14 → 15 (G3 to L41) | 294.784 mm | 7.214 mm | 0 % | 10.747 mm |

### Traced f-number and limiter

| Station | Stated | At 2c813a34 (13.5 mm) | Before this pass | After |
|---|---:|---|---|---|
| 102 mm | f/5.6 | f/6.14 (+9.7 %), rim of surface 14 | f/5.600, iris | f/5.600, iris |
| 294.784 mm | f/5.6 | f/6.14 (+9.6 %), rim of surface 14 | f/5.603 (+0.1 %), iris | f/5.603 (+0.1 %), iris |

The fixed iris opens to 11.7515 mm at both stations; the 294.784 mm station needs 11.7581 mm, which is the 0.1 %.
`audit:aperture --raise` lists no surface for this file. The on-axis ray clears surface 14 by 0.071 mm, surface 13 by
0.294 mm and surface 12 by 0.386 mm at 102 mm.

### Render comparison

The cross-section was screenshotted at 102 mm, the state Figure 2A draws, and at 294.784 mm, before and after the edit.

- Element order matches the figure at 102 mm: the L11 doublet, L12, the L21 and L22 doublets directly behind G1, the
  L3 doublet alone in the long air space, L41, L42, L43, then L44 and L45 ahead of the image. The render adds the
  inferred STO behind L43; the figure draws none.
- Proportions match: G1 is about twice the height of everything behind it, G2, L3 and L41 form the next tier, L42 and
  L43 sit lower, and the L44/L45 pair is the smallest.
- L3 renders with a flat rim parallel to the axis, its front face, junction and rear face ending at one height, as the
  figure draws it. Before the edit the rim sloped outward from front to rear by 0.3 mm.
- L3 sits 0.6 mm below L41 on every face (was 0.6–0.9 mm) and 0.2 mm below surface 11, the G2 face it meets at the
  long end. Its front face is 0.1 mm above surface 9 of G2 (was 0.2 mm below). The figure draws L3 level with L41 and
  slightly above G2.
- At 294.784 mm G2 closes up against L3 with 1.920 mm between the rims and no overlap. The renderer trims no element
  at either station or at 21 interpolated zoom positions.
- Rims of the elements this pass did not touch: L12, L41, L42, L44 and L45 carry one value each and render with level
  faces, as drawn, and L11 (30.0 / 30.2 / 30.2 mm) renders within 0.2 mm of square. The two G2 doublets and L43 render
  with 0.3–0.5 mm between their faces where the figure draws square rims (see "Left open").

### Confirmed unchanged

- The STO row (`sd` 11.387365), `nominalFno`, `zoomApertureModel`, every `R`, `d`, `nd` and glass, and the other 22
  semi-diameters. Computed EFL stays 101.9935 / 294.7686 mm.
- The file builds and validates. L3a edge thickness is 1.779 mm (was 1.953 mm) and L3b 2.549 mm (was 2.504 mm). The
  rim slope at the cemented junction is 24.2° (was 23.8°).
- Field coverage is 100 % at both stations (21.65 of 21.65 mm) and the image-circle check lists no undersized surface.
- At the viewer's default off-axis fan the bundle at 102 mm is bounded by surfaces 14 and 24 (was 12 and 24) and is
  1.2 % wider (14.16 mm against 13.99 mm at launch); at 294.784 mm it is bounded by surfaces 1 and 24 and is 40.07 mm
  wide, as before. At the 12.2° corner field at 102 mm it is bounded by surfaces 6 and 24 and is 10.92 mm wide, as
  before. In a scan of field angles out to the engine's half-field at each station, no cemented junction is a first
  limiter.

### Left open

- Figure 2A draws L3 at 16.7–16.8 mm, level with L41 and slightly above G2. The file holds it at 14.9 mm, 11 % inside
  the drawing. The rule stops at the ray height, so the remaining difference is a figure-fit question for the
  semi-diameter audit procedure.
- The rear face of G3 is 0.07 mm outside the on-axis ray, so surface 14 is the first off-axis limiter on one side of
  the bundle from about 0.14° of field at 102 mm to about 11.4°; surface 12 takes over to about 11.8° and surface 6
  beyond. At 294.784 mm surface 14 limits from about 0.10° to about 1.26°, where surface 1 takes over. That is the
  vignetting the rule keeps.
- Figure 2A also draws both G2 doublets and L43 with square rims; G2 is drawn as one block with a common rim. The file
  steps them: L21 15.5 / 15.6 / 15.2 mm, L22 14.8 / 15.0 / 15.1 mm, L43 13.5 / 13.0 mm. None of those faces clips the
  stated ray and none of those elements carried one value before, so rule point 2 does not reach them; squaring them
  is a figure-fit decision.
- The authored STO `sd` of 11.387365 mm is the paraxial solve; the engine opens the iris to 11.7515 mm by real ray.
  The stop station, 3.000 mm behind r20, remains an inference. Neither was touched.
