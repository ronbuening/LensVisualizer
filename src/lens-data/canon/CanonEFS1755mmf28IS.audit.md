# Audit Log — Canon EF-S 17-55mm f/2.8 IS USM

Patent: JP 2007-108398 A, Example 1

## 2026-05-20 — Glass relabel follow-up

### Patent evidence

- Reviewed local patent file `patents/JP2007108398A.pdf`.
- Example 1 row confirmed L19 / surface 34 nd = 1.74950, vd = 35.3.

### Glass corrections

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L19 / S34 | `NBFD13 (HOYA)` | `S-NBH51 (OHARA)` | Public OHARA catalog match for the patent nd/vd pair. |

### Analysis sync

- Updated the L19 element discussion and glass table.

## 2026-09-24 — Semi-diameters raised to the traced format corner

Example 1 prints 2ω = 75.9°–28.7° (p. 10) and 図2 (p. 19) plots the wide end to ω = 37.97°; f·tan ω = 13.66 mm, 96% of
the 14.175 mm APS-C corner. The traced wide-end chief ray reaches 13.33 mm at 37.97°, 13.66 mm at 38.6° and the corner at
39.6°. The estimated rear rims clipped the real chief ray (solved through the stop centre) at surface 34 from 36.5° at
the wide end (12.63 mm, 89% of the corner) and from 25.0° at 28.7 mm (13.75 mm, 97%); the tele station already reached
its corner. At the wide-end corner the chief ray crosses surface 9 at 8.01, 34 at 12.22 and 35 at 12.71 mm (28.7 mm:
34 at 11.31, 35 at 11.77 mm). The rims were sized to the corner rather than to 13.66 mm because 図1 (p. 19), scaled on
the 152.0 mm wide-end track, draws the rear L18–L19 doublet at about 15 mm. Values are the corner heights plus ~0.5 mm;
the L18–L19 doublet was scaled as one unit from surface 34 (factor 1.164, which also lifts surface 33), and L5 was scaled
from surface 9.

| Surface | Before | After | Justification |
|---|---|---|---|
| 9 | 8.0 | 8.6 | corner chief ray 8.01 mm + clearance |
| 10 | 8.3 | 8.9 | L5 scaled with surface 9 (chief ray 7.62 mm) |
| 33 | 12.5 | 14.5 | doublet scaled with surface 34 (chief ray 11.85 mm; 図1 ≈ 15) |
| 34 | 11.0 | 12.8 | corner chief ray 12.22 mm + clearance |
| 35 | 11.5 | 13.4 | corner chief ray 12.71 mm + clearance, doublet scale |

The validator accepts the new values, all three zoom stations now reach the corner with every rim clear, and the
image-circle floor still reports nothing undersized. No aspheric surface changed and the analysis note quotes none of
these semi-diameters, so it is unchanged.
