# Audit Log — Nikon AI AF Zoom-Nikkor 18-35mm f/3.5-4.5D IF-ED

Patent: US 2001/0030812 A1, Example 2, Figure 4A

## 2026-08-14 — Screenshot, patent-figure, label, and glass review

### Semi-diameters

- Figure 4A was compared directly with the supplied site screenshot. The front L13/L14 ordering corrected during integration matches the source; the remaining reliable height differences are below the 25% action threshold.
- No additional SD change was justified. The image-circle audit remains clean.

### Labels and glass

- Added source identifiers L11–L27 as `diagramLabel` values and shortened `G2a (IF)` to the patent's `G2a`; the header already states the inner-focus mechanism.
- Corrected the displayed product designation from `f/3.5-4.5 D` to `f/3.5-4.5D`.
- Marked L26 as inferred ED/APD because it is the unique `498825` element and Nikon specifies one production ED element.
- Eleven physical glasses resolve to Sellmeier curves. The only uncovered modeled medium is the unidentified bonded compound-asphere layer, so adding an optical-glass catalog row would be false precision.

## 2026-09-24 — Semi-diameters raised to the traced format corner

US 2001/0030812 A1 Example 2 / Table 2 (PDF p. 18) prints W f = 18.5 mm and 2ω = 101.84°, and FIG. 5A (PDF p. 6)
plots the wide-end aberrations to Y = 21.60 mm, so the design reaches the FX corner (21.65 mm). The estimated front
rims clipped the real chief ray (solved through the stop centre) at the wide end from 46.7°, leaving the analysis
field at 88% of the corner (the corner chief ray could not be aimed past 49.7°). With surface 1 opened, the wide
corner chief ray solves at 49.76° and needs surface 1 ≥ 21.93, surface 3A ≥ 15.72 and surface 4 ≥ 15.51 mm; the 25 mm
and 34 mm stations were already at 100%. Values are floor + ~0.5 mm rounded up. Surface 2, the deep rear of L11
(R 19.41), carries that chief ray at 16.52 mm under its 17.2 mm rim and stays: scaling it with surface 1 (19.4 mm)
would pass the 64.2° rim-slope limit at 17.47 mm. Surface 5, the deep rear of L12 (R 22.20), carries it at 14.12 mm
under 14.5 mm and stays as a strong-meniscus partner. No figure measurement was used.

| Surface | Before | After | Justification |
|---|---|---|---|
| 1 | 20.0 | 22.5 | wide corner chief ray 21.93 mm + clearance |
| 3A | 15.0 | 16.3 | wide corner chief ray 15.72 mm + clearance; below the 98% conic-domain limit (18.61 mm), no slope turnover |
| 4 | 15.0 | 16.1 | wide corner chief ray 15.51 mm + clearance (cemented junction of the compound asphere) |

The validator accepts the new values, the traced edge reaches 21.65 mm at every station (Wide 49.76°, 25 mm 41.72°,
Tele 33.00°; 100%), and the image-circle floor still reports nothing undersized. The analysis's surface-3A rim
figures were recomputed at 16.3 mm: polynomial contribution 0.818578 mm, total sag 4.785795 mm, departure from the
sphere 1.675506 mm and rim slope 44.77° (were 0.526812, 3.677719 and 1.058830 mm and 36.26° at 15.0 mm). Its minimum
edge thickness is now the compound-asphere layer, 0.425851 mm at 16.1 mm (was 0.634966 mm at 15.0 mm).
