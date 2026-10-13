# Audit Log - FUJIFILM FUJINON GF100-200mmF5.6 R LM OIS WR

Patent: US 2019/0361195 A1, Example 1

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/US20190361195A1.pdf`. The patent publishes Example 1 prescription, zoom/focus data, asphere data, and Fig. 1 section, but no clear-aperture or semi-diameter table.
- Fig. 1 shows the positive front group as the largest aperture, smaller moving G2/G3 groups, a stop in front of the rear section, and a moderate final group near the image side.
- Stored SDs preserve that visual hierarchy: G1 begins around 25-27 mm, G2/G3 are mostly 11-14.7 mm, the stop is about 11.1 mm, and the rear group re-expands to about 14.5-15.4 mm.
- No SD values changed. Current values remain inferred from the patent figure, zoom-state ray envelopes, f/5.6 stop geometry, edge thickness, and cross-gap sag checks.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Replaced the air-equivalent fold (stored d34 = 60.62 mm) with the patent's physical rear stack from Table 1-continued
  (PDF p. 28): d34 = 57.4777 mm (fixed; G4 does not move), then `rearPlates` PP 3.2000 mm, nd 1.51680, νd 64.20
  (N-BK7 catalog match), and d36 = 1.0314 mm to the image plane. The plate is traced by every analysis and not drawn.
- Paraxial check against the previous data: EFL identical at all three zoom stations; defocus moves by −0.0012 mm, the
  rounding in the old 60.62 mm (exact fold 60.6188 mm). Physical track grows by 3.2 × (1 − 1/1.5168) = 1.090 mm less
  that rounding (1.089 mm).

## 2026-10-08 — Rims raised to the stated on-axis ray

Rule (maintainer, 2026-10-08): where an inferred rim clips the on-axis beam of the f-number the source prints, only the
clipping surfaces move, each only to the height the stated ray reaches at the station that needs most, rounded up at
the file's precision; the patent figure checks the result and is not the source of the value.

| Field | Before | After | Source |
| --- | --- | --- | --- |
| Surface 21 `sd` (L41 rear) | 9.2 | 10.8 | F5.70 on-axis ray reaches 10.716 mm at the 101.68 mm station (10.715 mm at 152.51 mm, 10.705 mm at 203.35 mm) |
| Surface 22 `sd` (L42 front) | 9.2 | 10.5 | F5.70 on-axis ray reaches 10.477 mm at the 101.68 mm station (10.476 mm at 152.51 mm, 10.467 mm at 203.35 mm) |

Prose changed with the two rows: the data-file header's semi-diameter note names the two ray-set rims (its box borders
are padded to one width, whitespace only), and the analysis note labels the 11.04–11.06 mm stop radius as paraxial,
names the 11.12 mm real-ray iris and the traced f-numbers, lists the three near-limit air gaps, and describes the two
rims.

### Traced on-axis f-number and limiter

Fixed iris, 11.1171 mm real-ray radius at every station, the same before and after.

| Station | Stated | Before | After |
| --- | --- | --- | --- |
| 101.68 mm | f/5.70 | f/6.59, rim of surface 21 (+15.6 %) | f/5.70, iris |
| 152.51 mm | f/5.70 | f/6.59, rim of surface 21 (+15.6 %) | f/5.70, iris |
| 203.35 mm | f/5.70 | f/6.59, rim of surface 21 (+15.5 %) | f/5.69, iris (−0.1 %) |

### Figure check

The two raises are 17.4 % and 14.1 %, so the figure was read before the edit, on the native 300 dpi page bitmaps
(2560 × 3300 px) of `patents/US20190361195A1.pdf`. Three drawings of Example 1 were measured: FIG. 2 WIDE and FIG. 2
TELE (PDF p. 3, Sheet 2 of 20, sections without rays) and FIG. 1 (PDF p. 2, Sheet 1 of 20, wide end with the on-axis
and maximum-field bundles).

- Axial scale, from a least-squares fit of the drawn vertex positions to the Table 1 vertex spacings: FIG. 2 WIDE
  7.25 px/mm (ten vertices from surface 1 to Sim, 205.04 mm, largest residual 1.0 px; the G4 vertices alone give
  7.24 px/mm); FIG. 2 TELE 7.25 px/mm (17 vertices, 1.1 px); FIG. 1 7.66 px/mm (16 vertices, 1.3 px).
- Transverse scale, independent of the vertex spacings and available in FIG. 1 only: the on-axis bundle enters
  66.75 px from the axis and the F5.70 entrance-pupil radius at 101.68 mm is 8.92 mm, giving 7.48 px/mm; the
  maximum-field bundle meets Sim 203 px above the axis and Table 2 prints Y = 27.35 mm, giving 7.42 px/mm. On these
  two cues FIG. 1 reads about 2.7 % smaller across the axis than along it (7.45 against 7.66 px/mm), so its readings
  are given on both scales.
- Drawn half-heights, rim to axis (upper and lower rims agree within 1 px; reading uncertainty about ±1.5 px, ±0.2 mm):

| Drawn feature | FIG. 2 WIDE | FIG. 2 TELE | FIG. 1 (axial / ray scale) | Stated ray | File |
| --- | --- | --- | --- | --- | --- |
| L41 flat rim; surfaces 20 and 21 both end on it | 87 px, 12.0 mm | 86.75 px, 12.0 mm | 91.5 px, 11.9 / 12.3 mm | 10.72 mm on surface 21 | 11.3 / 10.8 |
| L42–L43 flat rim; surfaces 22 and 23 both end on it | 83.5 px, 11.5 mm | 83.5 px, 11.5 mm | 87 px, 11.4 / 11.7 mm | 10.48 mm on surface 22 | 10.5 / 10.5 |
| Stop St | 80.5 px, 11.1 mm | 79.75 px, 11.0 mm | 82.5 px, 10.8 / 11.1 mm | iris 11.12 mm | STO row 11.06 |
| L44 rim | 72.75 px, 10.0 mm | 72.5 px, 10.0 mm | 76.5 px, 10.0 / 10.3 mm | 9.25 / 9.10 mm on surfaces 24 / 25 | 11.0 / 11.0 |

- FIG. 1 also draws the on-axis marginal ray: 83.25 px at the stop, 80.5 px on surface 21 and 77.75 px on surface 22,
  which is 11.2, 10.8 and 10.4 mm on the ray scale against the traced 11.12, 10.72 and 10.48 mm. The glass of L41 and
  of L42 continues 11 px and 9 px beyond that ray.
- Result: the figure draws both elements larger than the stated ray needs, surface 21 by about 11–15 % and surface 22
  by about 9–12 %, so the figure and the printed F5.70 agree and both rows were raised. The earlier 9.2 mm was 23 % and
  20 % below the drawn rims. The new values are 10 % and 9 % below the drawn rims, inside the ~15 % reading band, and
  under the rule they are not raised further.

### Render comparison

Rendered cross-section at 101.68 mm (the state FIG. 1 and FIG. 2 WIDE draw) and at 203.35 mm (FIG. 2 TELE), compared
with the figure.

- Element order and grouping agree: cemented L11–L12 and L13; L21–L22, L23–L24 and L25; L31 and L32–L33; stop; L41;
  the L42–L43–L44 triplet; L45–L46 and L47; L48; L49. The front group is the tallest, G2 and G3 step down, G4A sits
  at about the stop height, G4B is the smallest and G4C re-expands, as drawn.
- L41 renders with a nearly parallel rim (11.3 mm front, 10.8 mm rear) and is the tallest element of G4A, as in the
  figure. The front of L42 meets its cemented rear surface at one height, so the L42 rim is flat, as drawn. The stated
  on-axis ray passes inside both rims.
- Departures from the drawing that these two rows do not remove: the figure draws L41 at 12.0 mm on both faces (file
  11.3 / 10.8 mm) and L42–L43 at 11.5 mm (file 10.5 mm); and it draws L44 (10.0 mm) shorter than L42–L43, where the
  file has L44 at 11.0 mm, taller than L42–L43 at 10.5 mm, so the rendered triplet widens toward the rear and the
  drawn one narrows.

### Comparative size

- Surface 21 (10.8 mm) is now 0.3 mm taller than surface 23 (10.5 mm); it was 1.3 mm shorter. The figure draws the L41
  rim above the L42–L43 rim (12.0 against 11.5 mm).
- L41 rear (10.8 mm) is now 0.3 mm taller than L42 front (10.5 mm); the two were equal at 9.2 mm. The figure draws
  L41 0.5 mm taller.
- L41's rear face is 0.5 mm shorter than its front (96 % of it); it was 2.1 mm shorter (81 %). The figure draws the
  two faces at one height.
- L42's front face equals its cemented rear surface 23; it was 1.3 mm shorter. The figure draws them at one height.
- Unchanged order: surfaces 21 and 22 stay below surface 20 (11.3 mm), the iris (11.12 mm) and surfaces 24–26
  (11.0 mm), and above surfaces 27–29 (9.0, 8.4, 8.4 mm).

### Confirmed unchanged

- The other 32 semi-diameters, the STO row (11.06 mm) among them; the engine iris (11.1171 mm); the computed focal
  lengths (101.688 / 152.547 / 203.355 mm); and every radius, thickness, index, asphere term and variable gap.
- The file builds and validates. L41 edge thickness is 3.39 mm at 10.8 mm (3.86 mm at 9.2 mm); L42 is 2.29 mm at
  10.5 mm (2.93 mm at 9.2 mm); rim slopes are 8.5° on surface 21 and 20.9° on surface 22; the 0.65 mm gap between
  surfaces 21 and 22 opens to 1.83 mm at the 10.5 mm rim (signed sag intrusion −1.18 mm).
- No surface is below the stated on-axis ray at any station. Clearances over that ray are 0.08 mm on surface 21,
  0.02 mm on surface 22 and 0.14 mm on surface 20.
- Traced field coverage is 100 % at all three stations (27.39 of 27.39 mm), as before; the image-circle floor check
  lists no undersized surface.

### Left open

- The patent prints no clear apertures, so every semi-diameter remains inferred.
- The figure draws L41 6–11 % and L42–L43 10 % taller than the file, and L44 9 % shorter (10.0 against 11.0 mm). Each
  difference is inside the ~15 % band and no stated ray is clipped there, so surfaces 20 and 23–25 keep their values.
- The Section B row for this lens in `agent_docs/sd-audit-queue.md` (figure-versus-data shape of L46, L47, L31–L33
  and L13) concerns other elements and is not addressed here.

The differing faces of L41 noted under "Comparative size" are taken up in "2026-10-08 — Square rims kept square" below.

## 2026-10-08 — Square rims kept square

Rule (maintainer, 2026-10-08; figure-audit procedure, "A clipped stated beam"): a clipping surface rises only to the
stated on-axis ray, and an element whose two faces carried one value before any rim was raised, and which the figure
draws with a square-cut rim, keeps one value at the higher of its two faces. Neither raised element carried one value
before the raise (commit 2c813a34), so both stay as raised face by face and no value changes in this pass.

| Field | Before | After | Source |
| --- | --- | --- | --- |
| Surface 21 `sd` (L41 rear) | 10.8 | 10.8 | F5.70 on-axis ray reaches 10.716 mm at the 101.68 mm station; L41's faces were 11.3 / 9.2 mm before the raise, two values, so the element is raised face by face and is not squared |
| Surface 22 `sd` (L42 front) | 10.5 | 10.5 | F5.70 on-axis ray reaches 10.477 mm at the 101.68 mm station; L42's faces were 9.2 / 10.5 mm before the raise, two values; the raised face equals surface 23, so L42 carries one value on both faces |
| `gapSagFrac` | not set (default 0.90) | not set | No value the rule gives is refused by the cross-gap limit |

### How the figure draws each rim

Read again on the native 300 dpi page bitmaps of `patents/US20190361195A1.pdf` (FIG. 2 WIDE and TELE, PDF p. 3; FIG. 1,
PDF p. 2), taking each rim as the row of its horizontal ink run above and below the axis. Scales are those of the
section above (7.25 px/mm in FIG. 2; 7.66 px/mm axial and 7.45 px/mm on the ray cues in FIG. 1); the G4A vertices
from surface 21 to surface 25 (12.01 mm) span 86.5 px in FIG. 2 WIDE, 7.2 px/mm, in agreement.

| Element (faces) | FIG. 2 WIDE | FIG. 2 TELE | FIG. 1 (axial / ray scale) | Drawn rim | Faces before any raise | Faces now |
| --- | --- | --- | --- | --- | --- | --- |
| L41 (20 / 21) | 87.0 px, 12.0 mm, both faces | 86.5 px, 11.9 mm, both faces | 91.5 px, 11.9 / 12.3 mm, both faces | Square-cut | 11.3 / 9.2 | 11.3 / 10.8 |
| L42 (22 / 23) | 83.5 px, 11.5 mm, both faces | 83.0 px, 11.4 mm, both faces | 87.0 px, 11.4 / 11.7 mm, both faces | Square-cut, one rim common to L42 and L43 | 9.2 / 10.5 | 10.5 / 10.5 |
| L43 (23 / 24), not raised | 83.5 px front, 72.75 px rear | 83.0 px front, 72.25 px rear | 87.0 px front, 76.5 px rear | Stepped: a shoulder drops from the common rim to L44's rim | 10.5 / 11.0 | 10.5 / 11.0 |

- L41: in all three drawings one straight line parallel to the axis joins the end of surface 20 to the end of surface
  21 (x = 1259–1283 px in FIG. 2, 24 px or 3.3 mm long), the same above and below the axis. Both faces end on it.
- L42: one straight line parallel to the axis runs from the end of surface 22 across the surface-23 junction to the
  rear shoulder of L43 (x = 1298–1348 px in FIG. 2, 50 px or 6.9 mm long). Surfaces 22 and 23 both end on it.
- L43 and L44: surface 24 ends where a step of about 10.5 px (1.5 mm) drops from that line to the L44 rim (72.75 px,
  10.0 mm in FIG. 2 WIDE), so L42 and L43 are drawn with one common rim and L44 is not part of it. Taken as one
  unit, L42–L43 had outer faces at 9.2 and 11.0 mm before the raise, two values.

The rule's square-rim clause therefore does not reach either element: the figure draws L41 and L42 square-cut, but
neither had one value on both faces in the file before the raise. L42 is square in the file all the same. L41 keeps a
0.5 mm step. The figure draws neither element smaller than its stored value (stored rims are 6–10 % inside the drawn
ones).

### Cross-gap limit

No pair needs `gapSagFrac`. Surfaces 21 and 22 are compared at 10.5 mm, where the 0.65 mm gap has opened to 1.83 mm
(signed sag intrusion −1.18 mm). The three near-limit pairs are the same as before: 8/9 at 87.6 % of the gap
(0.79 mm rim clearance), 11/12 at 88.7 % (0.37 mm) and 28/29 at 89.2 % (0.11 mm).

### Traced on-axis f-number and limiter

Fixed iris, 11.1171 mm real-ray radius at every station; no value changed, so before and after are the same.

| Station | Stated | Before | After |
| --- | --- | --- | --- |
| 101.68 mm | f/5.70 | f/5.70, iris | f/5.70, iris |
| 152.51 mm | f/5.70 | f/5.70, iris | f/5.70, iris |
| 203.35 mm | f/5.70 | f/5.69, iris (−0.1 %) | f/5.69, iris (−0.1 %) |

- No rim limits any station and no surface is below the stated on-axis ray. The smallest clearances over that ray
  are 0.023 mm on surface 22, 0.084 mm on surface 21 and 0.142 mm on surface 20, all at 101.68 mm.
- The −0.1 % at 203.35 mm is the fixed iris, not a rim: the F5.70 ray needs 11.1066 mm at the stop there and the
  iris, sized at the wide end, is 11.1171 mm.
- The file builds and validates. Traced field coverage is 100 % at all three stations (27.39 of 27.39 mm), the
  image-circle floor check lists no undersized surface, and the renderer trims no element at nine zoom positions
  from 101.68 to 203.35 mm.

### Render comparison

Rendered cross-section at 101.68 mm (FIG. 1 and FIG. 2 WIDE) and at 203.35 mm (FIG. 2 TELE). G4 does not move, so
its rendered outline is the same at both.

- Element order, grouping and the height order of the groups agree with the figure at both stations, as recorded in
  the section above.
- L42 renders with a rim parallel to the axis (10.5 mm on both faces), as drawn.
- L41 does not: its rim falls 0.5 mm from the front face (11.3 mm) to the rear face (10.8 mm) across a 3.14 mm edge,
  about 9° off the axis, where the figure draws it parallel to the axis at 12.0 mm.
- L43's rim rises 0.5 mm toward L44 (10.5 to 11.0 mm) and L44 is the tallest member of the triplet, where the figure
  keeps L43 on L42's rim and steps down 1.5 mm to L44. The rendered triplet widens toward the rear and the drawn one
  narrows.
- L45–L46 render tapering from 11.0 to 9.0 to 8.4 mm, where the figure draws the pair as one block with a flat rim
  at 72.75 px, 10.0 mm (the open Section B row in `agent_docs/sd-audit-queue.md`).

### Left open

- L41 is the one raised element the figure draws square that the file does not. Its faces differed before the raise,
  so the rule as written leaves it stepped. Squaring it would put surface 21 at 11.3 mm, a 0.5 mm raise of a surface
  that does not clip at 10.8 mm. Tried in memory only: that value builds at the default cross-gap limit (the 21/22
  comparison is still made at 10.5 mm), L41 keeps a 3.22 mm edge with an 8.9° rim slope, and no element is trimmed.
  It needs a ruling on whether a square-drawn rim alone, without one stored value beforehand, brings an element under
  the clause.
- The L42–L43–L44 silhouette is reversed against the figure (file 10.5 / 10.5 / 11.0 / 11.0 mm on surfaces 22–25;
  drawn 11.5 / 11.5 / 10.0 / 10.0 mm). Each difference is inside the ~15 % band and none of these surfaces clips the
  stated ray, so the rule does not move them.
- The patent prints no clear apertures, so every semi-diameter remains inferred.
