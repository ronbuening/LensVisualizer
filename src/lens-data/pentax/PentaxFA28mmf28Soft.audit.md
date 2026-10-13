# Audit Log — Pentax FA 28mm f/2.8 Soft

Patent: US 5,822,132, Example 1

## 2026-06-23 — Pentax folder patent audit

### Patent evidence

- Rechecked local patent file `patents/US5822132.pdf`.
- Reviewed the first drawing sheet; it confirms the exaggerated retrofocus front group, small rear stop, and positive rear group modeled in the data file.

### Disposition

- Glass labels remain unchanged; current class labels match the patent nd/vd coordinates closely enough for the current catalog state.
- APD status remains `false`; the patent lists nd/vd only and contains no partial-dispersion table.
- No patent clear-aperture or semi-diameter table was found. Existing SDs remain unchanged after drawing review.

## 2026-09-24 — Semi-diameters raised to the traced format corner

Table 1 (PDF p. 15) prints ω = 37.9° for Example 1 (f = 100 normalized), and Fig. 3(D) (PDF p. 4) plots lateral
aberration to Y = 75.74, i.e. 21.21 mm at the 0.28 production scale, 98% of the full-frame corner (21.65 mm). The
inferred front rims clipped the real chief ray (solved through the stop centre) from 34.8° (18.96 mm, 88% of the
corner), first at surface 2. The traced chief ray needs surface 1 ≥ 16.20, 2 ≥ 15.18 and 3 ≥ 13.53 mm at Y (37.83°) and
16.56 / 15.54 / 13.79 mm at the corner (38.39°); values are the corner floor + ~0.5 mm. Surface 4 (R 13.927, 12.4 mm,
already at sd/|R| ≈ 0.89) passes the corner chief ray at 10.49 mm and was not scaled with surface 3: E2 is a strong
meniscus, and 13.6 mm fails the 64.2° rim-slope limit. The header's front/rear ratio ≤ 1.25 rule still holds (E1
1.06, E2 1.15), and the front rim stays far inside the 49 mm filter thread. No figure measurement was used.

| Surface | Before | After | Justification |
|---|---|---|---|
| 1 | 15.2 | 17.1 | corner chief ray 16.56 mm + clearance |
| 2 | 13.4 | 16.1 | corner chief ray 15.54 mm + clearance |
| 3 | 13.0 | 14.3 | corner chief ray 13.79 mm + clearance |

The validator accepts the values, the image-circle floor still reports nothing undersized, and the traced edge now
reaches the corner (38.4° → 21.65 mm, 100%) with every rim clear. The lens is all-spherical, and the analysis file
quotes no changed rim.
