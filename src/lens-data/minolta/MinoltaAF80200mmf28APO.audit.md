# Audit Log - MINOLTA AF 80-200mm f/2.8 APO

Patent: JP 1989-039542 A, Example 1

## 2026-08-11 - Glass opportunity audit

- Visually rechecked Example 1 in local `patents/JPA 1989039542-000000.pdf`; L7 is `1.75000 / 25.1` and L12 is
  `1.49310 / 83.6`. The patent names no supplier and publishes no secondary line indices or partial dispersion.
- Relabeled L7 to coefficient-backed HOYA FF8 as the only reviewed catalog curve inside the project compatibility
  guard. Its evaluated coordinate differs from the patent by about `+0.002110 / -0.05`; the annotation leaves the
  production supplier unspecified.
- The `493836` L12 coordinate has no compatible public coefficient row and now carries an explicit unmatched
  disposition. Its Minolta AD/APD family classification remains inference-only, with no borrowed numeric `dPgF`.
- No geometry, authored patent constants, or APD numeric fields changed.

## 2026-10-08 — Square rims kept square and cross-gap limit raised

Rule applied (`agent_docs/patent-figure-sd-audit-procedure.md`, "A clipped stated beam"): each Group II surface that
clipped the F/2.88 on-axis ray rises to that ray's height at the station that needs most (195 mm for all seven),
rounded up to 0.1 mm; an element Fig. 1 draws square-cut takes the higher of its two faces on both; `gapSagFrac` is
set to the smallest two-decimal value that admits the facing pairs the default 0.90 refuses. The squaring of L5 and
of the D2 front face is not made, because it makes surfaces 9 and 10 cross (see "Left open").

| Field | Before | After | Source |
|---|---:|---:|---|
| Surface 8 `sd` | 16.8 | 18.8 | ray height 18.717 mm at 195 mm |
| Surface 9 `sd` | 16.8 | 17.9 | ray height 17.850 mm at 195 mm (square value 18.8 not applied, see "Left open") |
| Surface 10 `sd` | 16.8 | 17.9 | ray height 17.851 mm at 195 mm (square value 18.5 not applied, see "Left open") |
| Surface 11 `sd` | 16.8 | 18.5 | ray height 18.447 mm at 195 mm |
| Surface 12 `sd` | 16.8 | 18.5 | ray height 18.496 mm at 195 mm |
| Surface 13 `sd` | 17.5 | 19.0 | squared to the higher face, figure draws a square rim (own ray height 18.503 mm) |
| Surface 14 `sd` | 17.5 | 19.0 | ray height 18.974 mm at 195 mm |
| `gapSagFrac` | 0.90 (default) | 0.97 | smallest value that admits pairs 9/10 and 12/13 |

No other surface clips the stated ray at any station, and none was changed. The `STO` row is untouched.

Figure reading. Fig. 1 (PDF page 9, rendered at 600 dpi) is drawn at the 82 mm state and to scale: the r1-r29 track
of 165.957 mm spans 1691 px (10.19 px/mm), and the vertex stations of r7, r8, r12, r14, r15, r20 and r24 land within
0.6 mm of the prescription. Half-heights are measured from the axis to the stroke centre, above / below the axis.

- Group II as a whole is one rectangular block with a single straight edge line across L5, L6-L7 and L8.
- L5 (r8/r9): block outline square-cut, 19.0 / 18.5 mm. The front face r8 runs to the block corner. The concave rear
  face r9 ends where it meets r10, at 17.0 / 17.1 mm, 1.4-2.0 mm inside the block edge.
- L6 (r10/r11): block outline square-cut, 19.0 / 18.5 mm. The concave front face r10 ends at the same contact point
  as r9 (17.0 / 17.1 mm); the cemented face r11 runs to the block edge and meets it about 1.5 mm ahead of r12.
- L7 (r11/r12): square-cut; both faces end at the block edge, 19.0 / 18.5 mm. L6 and L7 share one rim.
- L8 (r13/r14): square-cut rectangle, 19.0 / 19.0 mm, level with the block above the axis and 0.5 mm proud of it
  below. The concave front face r13 is drawn meeting the r12 line at about 15-16 mm, and the element then follows
  that line to its corner.

Face values (front / rear, mm). Before any rim work: L5 16.8 / 16.8, L6 16.8 / 16.8, L7 16.8 / 16.8,
L8 17.5 / 17.5. Now: L5 18.8 / 17.9, L6 17.9 / 18.5, L7 18.5 / 18.5, L8 19.0 / 19.0. The figure's 18.5-19.0 mm block
edge agrees with the outer faces (18.8, 18.5, 19.0) within 3 %, and its 17.0-17.1 mm contact of r9 and r10 with their
17.9 mm within 5 %. No element is drawn smaller than its value by anything near 15 %. The earlier 16.8-17.5 mm sat
8-12 % below the block edge.

Cross-gap pairs under `gapSagFrac: 0.97`. Both gaps are fixed, so the figures hold at every zoom and focus state.

- 9/10 (L5 rear, L6 front; R = +45.28 and -90.0): combined sag 5.4863 mm of the 5.670 mm gap at the 17.9 mm shared
  band, 96.76 %, rim clearance 0.184 mm. The two spheres meet at 18.19 mm. Fig. 1 draws the faces meeting.
- 12/13 (L7 rear, L8 front; R = +2100 and -78.442): combined sag 2.2942 mm of the 2.420 mm gap at the 18.5 mm shared
  band, 94.80 %, rim clearance 0.126 mm. The two spheres meet at 18.99 mm; surface 12 ends at 18.5 mm, so the 19.0 mm
  rim of surface 13 stands above L7's corner and not against glass. Fig. 1 draws the faces meeting.
- At 0.96 the validator refuses the file: `Air gap "9"→"10": combined surface sag (5.49 mm) exceeds allowed gap
  intrusion (5.443 mm of 5.670 mm) at sd=17.9 — elements will overlap in rendering`. Pair 12/13 alone needs 0.95.

Traced on-axis f-number and limiter (`audit:aperture`, infinity focus, stated F/2.88 at every station):

| Station | Before | After |
|---|---|---|
| 82 mm | f/2.880, iris | f/2.880, iris |
| 140 mm | f/2.879, iris | f/2.879, iris |
| 195 mm | f/3.199, rim at surface 8 (+11.1 %) | f/2.884, iris (+0.15 %) |

The 195 mm remainder is the fixed iris, not a rim: its radius is set at the 82 mm station (14.0217 mm) and F/2.88
needs 14.0447 mm at 195 mm. `audit:aperture --raise` lists no surface. `audit:image-circle` reports nothing.
`audit:field-coverage` is unchanged: 100 % at 82 and 140 mm, 99 % at 195 mm (21.40 of 21.65 mm, stopped at surface 1,
35.82 > 35.5). The renderer trims no element at 21 zoom positions times three focus positions. Minimum edge
thickness (1.0123 mm, L4) and maximum rim slope (41.30°, r6) are unchanged; the note's cross-gap sentence now quotes
96.76 % in place of 84.90 %.

Render against Fig. 1 (dev server, 82 mm and 195 mm). Element order and grouping match (4 + 4 + 3 + 5). Group II
stands at 0.53 of the front element's half-height against 0.55-0.56 in the figure (0.47-0.49 before). L7 and L8
render with square rims as drawn, L8 0.5 mm taller than L7 with its front corner directly above L7's rear corner. L5
and L6 do not render square: L5's rim slopes from 18.8 mm down to 17.9 mm and L6's from 17.9 mm up to 18.5 mm, so the
group's edge shows a shallow V where r9 and r10 meet, in place of the figure's straight block edge. The faces
themselves meet at the rim as the figure draws them. At 195 mm the full F/2.88 fan passes Group II and reaches the
iris.

Left open.

- L5 and L6 are drawn inside a square block but carry stepped rims. Squaring both (surface 9 to 18.8, surface 10 to
  18.5) moves the shared band of pair 9/10 to 18.5 mm, above the 18.19 mm at which the two spheres meet: combined sag
  5.87 mm of the 5.670 mm gap (103.6 %), refused at `gapSagFrac: 1` (`Air gap "9"→"10": combined surface sag
  (5.87 mm) exceeds allowed gap intrusion (5.670 mm of 5.670 mm) at sd=18.5`). Either squaring alone builds at 0.97
  because the shared band stays 17.9 mm: L5 alone (9 = 18.8) or D2 alone (10 = 18.5). Neither trims an element in
  the same 63 zoom and focus states. Each leaves one concave face running 0.9 or 0.6 mm past the end of the face it
  meets, which Fig. 1 does not draw, and the rule gives no ground for choosing between them. A ruling is needed
  before either is applied.
- The 99 % field coverage at 195 mm is an off-axis clip at the front rim (surface 1), outside the on-axis rule.
