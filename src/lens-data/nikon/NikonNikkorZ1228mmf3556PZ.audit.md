# Audit Log — NIKON NIKKOR Z DX 12-28mm f/3.5-5.6 PZ VR

Patent: US 2026/0056396 A1, Example 1

## 2026-09-24 — Semi-diameters raised to the traced format corner

Table 1 (p. 8, PDF p. 29) prints ω = 53.57° / 39.74° / 27.44° with Y = 14.25 mm at wide, middle and tele, so the
design covers the APS-C corner (14.175 mm) at every station. The estimated surface-3 rim (12.0 mm) clipped the real
chief ray (solved through the stop centre) from 45.8° at wide, leaving the analysis field at 79% of the corner; at
tele the surface-23 rim clipped the corner chief ray by 0.09 mm (99.2%). The traced corner chief ray needs surface
3 ≥ 14.63 mm (wide, 53.45°) and surface 23 ≥ 11.09 mm (tele, 27.34°); values are floor + ~0.5 mm, with L41 scaled
as one element. No figure measurement was used (the PDF is image-only; Table 1 was read from the rendered page).

| Surface | Before | After | Justification |
|---|---|---|---|
| 3 | 12.0 | 15.2 | wide corner chief ray 14.63 mm + clearance; surface 4 (R 13.30, concave side of the strong L12 meniscus) does not clip and cannot scale by 1.27 past its radius, so it stays 11.5 |
| 23 | 11.0 | 11.6 | tele corner chief ray 11.09 mm + clearance |
| 24 | 11.8 | 12.4 | L41 scaled with surface 23 (tele corner chief ray 11.65 mm) |

The validator accepts the new values, every station now reaches 100% of the corner (53.46° / 39.61° / 27.34°) with
every rim clear, and the image-circle floor still reports nothing undersized. The tightest remaining rim at the wide
corner is surface 2 (chief ray 18.70 mm, sd 19.2). No aspheric surface changed.

## 2026-10-27 — Rim-cut figure review

Figure 1 (PDF p. 2, sheet 1 of 20, native 300 ppi raster, rotated so the axis runs left to right) was read element by
element for flat lands square to the axis at the rims of concave faces, the shape `rimCutDepthMm` draws. Both halves
of the section agree.

| Surface | Figure land (cap end ÷ element edge) | Cut depth | Cut radius | sd | Largest stated axial ray |
|---|---|---|---|---|---|
| 4 (L12 rear, R 13.299) | 0.70 | 6.62 mm | 11.50 mm | 11.5 → 13.2 | 2.32 mm |
| 6 (L13 rear, R 13.2979) | 0.83 | 4.00 mm | 9.51 mm | 9.5 → 10.2 | 3.03 mm |

- Both faces had a stored `sd` below their front partner's (15.2 and 10.2) while the figure draws each element's
  edge, parallel to the axis, at the front face's height and a land from there down to the cap. Each `sd` rises to
  the edge and the cut ends the cap at the old `sd` (depth = sag there, rounded up): the clear radius goes from the
  old 11.5 mm rim to the 11.5002 mm cut radius on 4 and from 9.5 to 9.507 mm on 6, and the beams reach 10.8944 and
  8.7266 mm there. Surface 4 stops at 13.2 because a sphere of |R| 13.299 cannot reach the 15.2 front rim.
- The figure's lands are longer than the ones drawn now (cap end 0.70 and 0.83 of the edge, against 11.50 / 15.2 =
  0.76 and 9.51 / 10.2 = 0.93); moving the caps inward to match would clip inside the stored rims and was not done.
  Surface 4's land in the figure sits at the plane of L13's front face.
- Every other concave face (2, 5, 8, 12, 13, 14, 19A, 21, 22, 23) runs to its element edge in the figure; no cut.
- No cap reaches the stop plane at any zoom state (surface 14 clears it by 1.35 mm).
- The aperture audit is unchanged: all three stations trace their stated f-number, with no rim, trace, iris or rim-cut
  limiter. The clear-aperture probe's rows are unchanged at the middle and tele corners and at 49° at wide (its
  tracer finds no wide corner ray beyond that); the engine's wide half-field moves 42.0551° → 42.0556°, from the
  0.007 mm by which surface 6's cut radius exceeds its old rim.

## 2026-10-27 — Rim-cut beam rule

An inferred rim cut must clear every traced ray of the wide-open beams by the larger of 0.05 mm and 0.3 % of its
radius, at every field, zoom and focus state, traced through the lens without its inferred cuts (`validateRimCutBeams`,
set in the #928 review). The beams are traced on the paraxial stops (#933) with the rule's current search, which
follows each beam to the field where it vanishes and refines near a cut on the full measurement. Neither cut from the
figure review above had to move:

| Surface | Cut radius | Beams reach | Where (zoom, focus, field) | Clearance | Margin | Spare |
|---|---|---|---|---|---|---|
| 4 | 11.5002 mm | 10.8944 mm | zoomT 0.05, infinity, 50.76° | 0.6058 mm | 0.05 mm | 0.5558 mm |
| 6 | 9.5070 mm | 8.7266 mm | 12.36 mm station, infinity, 50.61° | 0.7804 mm | 0.05 mm | 0.7304 mm |

zoomT 0.05 lies between the 12.36 and 18 mm stations. Both cuts clear the beams at every field, zoom and focus state
and clip none of their rays; the surface audit and the beam rule pass.

Figure scale and land length. Figure 1 has 13.80 native px per lens mm: the S1–S24 vertex span at the wide station
is 930.5 px over 67.438 mm, read on a column beside the axis, where the other resolved vertices fall within 2 px of
the prescription at that scale. Each q range is ±(1 + q) / (sd × 13.80 px/mm). Both cuts sit at the old rim, above
the figure's q:

- 4: q 0.70 ± 0.0093 (0.691–0.709) on a 182 px edge; the cut is at 0.871 of sd (0.757 of the 15.2 mm element edge);
  land 1.6998 mm.
- 6: q 0.83 ± 0.0130 (0.817–0.843) on a 141 px edge; the cut is at 0.932 of sd; land 0.6930 mm.

Both lands are longer than the 0.1 mm minimum, and neither q range reaches 1. The figure draws L12 and L13 wider than
their sd at this scale (edges 229.5 and 148.5 px, 16.6 and 10.8 mm), and q is read against those drawn edges; the
ranges above use sd × scale, the wider of the two.
