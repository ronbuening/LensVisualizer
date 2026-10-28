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

## 2026-10-27 — Rimmer localization audit (asphere data)

Source: US 2026/0056396 A1, Example 1, Table 1 (printed p. 8 / PDF p. 29), equation (A) and ¶0103/0107
(printed p. 7 / PDF p. 28), FIG. 1 (PDF p. 2), FIGS. 2-3 (PDF pp. 3-4). Tables and figures were read from
220 dpi renders, with the figures enlarged at 400 dpi. Verdict: transcription correction to the design aperture;
outer-field prescription/trace discrepancy remains unresolved.

| Field | Before | After | Source / reason |
|---|---|---|---|
| Wide `nominalFNumber` | 3.5 | 3.64 | Table 1, General Data, FNO row, wide column |
| Middle `nominalFNumber` | 4.5 | 4.58 | Same row, middle column |
| Tele `nominalFNumber` | 5.6 | 5.73 | Same row, tele column |
| `catalog.fNumber` | absent | `{ marketing: 3.5, design: 3.64 }` | Keeps the marketed f/3.5 beside the design readout (coordinator) |
| `aperture.fStops[0]` | 3.5 | 3.64 | Keep the first selectable aperture at the corrected design maximum |
| `source.errata` | Absent | `unresolved` note | Faithful table does not reproduce the source's outer-field aberration figures; no supported replacement isolated |
| Data header | Conic conversion only | Recheck, rim decision, aperture correction and unresolved localization notes | Disclose the retained source prescription and its limitation |
| Analysis, stop description | Authored 4.05 mm stop | Runtime-derived stop, about 4.152 mm at wide | No `STO.sd` is authored |
| Analysis, L26 rim | 6.8 mm in prose | 6.5 mm, −582.4 µm departure, −46.2° slope | Sync stale prose to the unchanged stored rim and surface scan |
| Analysis, glass provenance | Patent νd = 82.5 claimed | Table 1 publishes nd only; retained νd/catalog values are proxies | No νd column is present in the source table |
| Analysis, field/RI discussion | Absent | Published half-field, source-plot discrepancy and actual RI availability | Record what is and is not reproduced |

Every radius, fixed thickness, refractive index and medium assignment in Table 1 rows 1-24, including the stop
at row 15, agrees with the file. D1/D2/D3/BF agree in every Variable Distance Data column. Table 1 contains no νd
or clear-aperture column, so the retained Abbe numbers and rims cannot be called table-transcribed values.
No R, d, nd, νd, gap, coefficient, conic or semi-diameter was changed.

The sole asphere, row 19*, prints κ = 0.0000, A4 = −1.66060E−04, A6 = +2.26257E−06,
A8 = −2.73958E−07, A10 = +1.18829E−08, A12 = −2.09340E−10. Equation (A) uses
sqrt(1 − κ y²/R²), so standard K = κ − 1 = −1 is already correct. The powers are 4/6/8/10/12;
there are no odd terms, missing nonzero terms or scale conversion (¶0107: mm). The polynomial has no slope
turnover through 6.5 mm. At that rim the sag is −1.2620 mm and spherical departure −0.5824 mm.

FIG. 1 draws L26 with square rims. At 400 dpi the figure probe reports ENV = RIM = 5.37 mm, with axial
scale 54.25 µm/pixel. The enlarged optical edges span about 198 pixels, independently giving 5.37 mm.
This is 17.4% below the stored 6.5 mm, below the procedure's roughly 25% figure-only threshold. Other probe rows
are contaminated by leader lines/brackets and were rejected as measurements; the optical outlines were inspected
directly. The on-axis aperture beams and format-corner chief rays pass the retained rims. There is no turnover
or other source-backed basis for capping L26 to remove its failing rays.

The field is within the source: ¶0101 defines ω as the half-angle, and Table 1 prints ω = 53.57° / 39.74° /
27.44°, Y = 14.25 mm throughout. The wide tab edge is 53.45° at Y′ = 14.175 mm, and its −14.997% distortion
agrees with FIG. 2's approximately −15% curve. This is not evidence for reducing the optical design field to a
smaller pre-correction crop. The traced EFLs are 12.3598 / 17.9999 / 27.1608 mm, paraxial BF is
9.8140 / 9.8141 / 9.8146 mm, and total track is 77.253 mm; the summary prints 12.36 / 18.00 / 27.16 mm,
BF 9.815 mm, and TL 77.25 mm.

At the original f/3.5, a 50.48° meridional pupil-edge ray reaches 19A at h = 6.15 mm, AOI ≈28°, and misses
the chief-ray image by −4.31 mm; nearby pupil rays at h = 6.03 / 5.92 mm have AOI ≈24° / 20° and misses
−3.14 / −2.28 mm. At the corrected f/3.64, the edge ray reaches h = 6.05 mm, AOI ≈25°, and misses by
−3.33 mm. FIG. 2's coma axes span ±0.300 mm and its outer-field curves stay much closer to the origin.
Close-ray T/S focus shifts remain −0.698 / −0.107 mm at wide and −0.560 / −0.326 mm at tele, unlike
FIGS. 2-3. The d-line LSA stays on the figures' ±0.500 mm scale: wide pupil fractions 1/.85/.7/.5 give
−0.093 / −0.126 / −0.109 / −0.063 mm after the aperture correction (before: −0.069 / −0.124 / −0.114 /
−0.068 mm); tele gives −0.161 / −0.128 / −0.072 / −0.007 mm (before: −0.163 / −0.134 / −0.079 /
−0.010 mm). No general axial-power transcription error was found.

Deep-copy trials tested sign, ×10, ÷10 and zero for each stored asphere term, all pairwise coefficient swaps and
one-row shifts in either direction. Many candidates were rejected by the existing rim/shape validator, rather
than traced. The surviving alternatives did not isolate a replacement supported by the source summary and
aberration figures. Standard K = 0 was also tested as an alternative convention; it violates equation (A) and
does not establish a source-supported correction. No trial was applied to the stored surface.

The corrected aperture reduces wide maxDev at 44.5° / 47.5° / 50.5° / 53.5° from
0.0366 / 0.0610 / 0.1029 / 0.1088 to 0.0275 / 0.0471 / 0.0809 / 0.1079. RI remains unavailable at
those four fields: `cosine-map-folds` at 44.5° and 47.5°, `rays-not-localized` at 50.5° and 53.5°.
All lower wide fields and every sampled middle/tele field have RI. Surface validation accepts the stored geometry;
aperture and image-circle checks accept it, and all zoom stations reach the format-corner chief ray. These checks
do not certify localization or source fidelity.

Coordinator follow-up: queue the unresolved outer-field case for independent exact tracing and a matching PCT/JP
family table/equation check. Distinguish a source typo from an intersection/normal or pupil-analysis limitation
before changing the conic, polynomial, rims or analysis guard. Full per-field before/after data are in the assigned
scratch `report.md`; shared engine and queue files were outside this assignment's edit scope.
