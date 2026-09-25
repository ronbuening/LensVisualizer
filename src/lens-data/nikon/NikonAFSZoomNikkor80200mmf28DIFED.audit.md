# Audit Log — Nikon AI AF-S Zoom-Nikkor 80-200mm f/2.8D IF-ED

Patent: JP 2000-19398 A, Example 1, Figure 1 and Table 1

## 2026-08-14 — Screenshot, patent-figure, label, and glass review

### Semi-diameters

| Element / surfaces | Before | After | Evidence |
|---|---:|---:|---|
| Patent L43 / data L16, 28–29 | 14.5 / 14.2 mm | 10.6 / 10.4 mm | A 300 dpi Figure 1 hand measurement makes L43 slightly smaller than L44/L45; the prior data made it about 30% larger. Both revised surfaces pass geometry validation. |

The patent-published SD anchors at surfaces 1, 6, 10, and 17 remain unchanged. The other silhouettes were within the figure-audit tolerance.

### Labels and glass

- Added the patent-facing L11a–L45 `diagramLabel` mapping and shortened group/component annotations to the labels printed in Figure 1.
- Corrected the displayed product designation from `f/2.8 D` to Nikon's `f/2.8D` styling.
- Marked the five `498825` positions as inferred ED/APD candidates because their count matches Nikon's five-ED production specification. No patent line indices or `dPgF` values were invented.
- All 18 physical glasses already resolve to coordinate-compatible Sellmeier curves; no new catalog row was justified.

## 2026-09-24 — Semi-diameters raised to the traced format corner

JP 2000-19398 A Example 1 (【表１】, PDF pp. 6–7) and its field plots in 図2 (PDF p. 14), which run to Y = 21.60 mm,
cover the 135-format corner (21.65 mm). The estimated L44/L45 rims clipped the real chief ray (solved through the stop
centre) at 18.52 mm, 86% of the corner, at every station. G4 and the stop are fixed ahead of the image, so the corner
chief ray crosses G4 at the same heights at every station: surface 30 ≥ 11.21, 31 ≥ 11.90, 32 ≥ 12.29 and 33 ≥
12.74 mm. 図1 (PDF p. 14) is drawn to scale. At 300 dpi the published effective diameters calibrate it at
0.170–0.174 mm/px (half-heights between line centres: L11 205 px for Φ1F 71.5, L21 102 px for Φ2 34.8, L31 105.5 px
for Φ3 36.8), and it draws L43, L44 and L45 at 96, 102 and 108.5 px, about 16.6, 17.7 and 18.8 mm: 57–74% above the
stored 10.4–11.2 mm. The drawn corner bundle itself crosses L44/L45 at about 16–17 mm. The automated figure tool
could not measure this sheet (the drawn ray bundles reach the crop edge and swamp the rim readings), so the hand
measurement stands; it matches the triage measurement of the same sheet. Where the figure and the chief-ray floor
disagree the larger value is taken, so L43–L45 follow the figure with each element scaled as a unit. This reverses
the 2026-08-14 cut of L43 from 14.5/14.2 to 10.6/10.4 mm: that hand measurement sized L43 against the undersized
L44/L45 instead of the published diameters, and the calibrated drawing contradicts it. The published anchors at
surfaces 1, 6, 10 and 17 are unchanged.

| Surface | Before | After | Justification |
|---|---|---|---|
| 28 | 10.6 | 16.6 | 図1 L43 ≈16.6 mm (96 px); corner chief ray 8.93 mm |
| 29 | 10.4 | 16.3 | L43 scaled with surface 28 (×1.566); corner chief ray 9.49 mm |
| 30 | 11.2 | 17.7 | 図1 L44 ≈17.7 mm (102 px); corner chief ray 11.21 mm |
| 31 | 11.2 | 17.7 | 図1 L44 ≈17.7 mm (both rims end on one drawn edge); corner chief ray 11.90 mm |
| 32 | 11.0 | 18.8 | 図1 L45 ≈18.8 mm (108.5 px); corner chief ray 12.29 mm |
| 33 | 10.8 | 18.5 | L45 scaled with surface 32 (×1.709); corner chief ray 12.74 mm |

The validator accepts the new values (the thinnest glass edge is now L45, 1.81 mm at 18.5 mm), the traced edge reaches
21.65 mm at every station (Wide 15.41°, 135 mm 9.08°, Tele 6.21°; 100%), and the image-circle floor still reports
nothing undersized. The lens is all-spherical, and the analysis quotes none of these values.
