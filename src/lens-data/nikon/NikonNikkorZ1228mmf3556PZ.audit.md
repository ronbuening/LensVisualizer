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
  the edge and the cut ends the cap at the old `sd` (depth = sag there, rounded up), so no traced ray changes.
  Surface 4 stops at 13.2 because a sphere of |R| 13.299 cannot reach the 15.2 front rim.
- The figure's lands are longer than the ones drawn now (cap end 0.70 and 0.83 of the edge, against 11.50 / 15.2 =
  0.76 and 9.51 / 10.2 = 0.93); moving the caps inward to match would clip inside the stored rims and was not done.
  Surface 4's land in the figure sits at the plane of L13's front face.
- Every other concave face (2, 5, 8, 12, 13, 14, 19A, 21, 22, 23) runs to its element edge in the figure; no cut.
- No cap reaches the stop plane at any zoom state (surface 14 clears it by 1.35 mm).
- The aperture audit is unchanged: all three stations trace their stated f-number, with no rim, trace, iris or rim-cut
  limiter. The clear-aperture probe's rows are unchanged at the middle and tele corners and at 49° at wide (its
  tracer finds no wide corner ray beyond that); the engine's wide half-field moves 42.0551° → 42.0556°, from the
  0.007 mm by which surface 6's cut radius exceeds its old rim.
