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
