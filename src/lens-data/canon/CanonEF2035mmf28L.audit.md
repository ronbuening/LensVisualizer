# Audit Log - Canon EF 20-35mm f/2.8L

Patent: US 5,000,550, Numerical Example 1

## 2026-06-25 - Canon folder patent audit

### Phase 1 - Glass corrections

- Rechecked the local patent PDF `patents/US5000550.pdf`, data file, and analysis sidecar.
- No glass label changes were needed. The patent gives nd/vd values but not modern procurement names; the stored class/equivalent labels remain intentionally non-exclusive.
- The high-index rows (L3, L4, L5, L8, L10, and L15) are already indicated by nd >= 1.8 and dense-flint / high-index class labels.

### Phase 2 - Retained-information audit

- Confirmed the patent does not publish clear apertures for this example. Existing `sd` values remain renderer-safe estimates from ray envelopes and cross-gap/edge constraints.
- Retained the inferred stop semi-diameter used to represent the tele-end f/2.8 equivalent physical stop.

## 2026-09-24 — Semi-diameters raised to the traced format corner

Example 1 (table PDF p. 61) prints ω = 46.4° at the 20.6 mm wide end in FIG. 2(a) (PDF p. 3), so f·tan ω = 21.63 mm
reaches the full-frame corner (21.65 mm). The estimated front rims were sized for the 0.6-field display rays and clipped
the real chief ray (solved through the stop centre) at surface 1A from 42.0°, leaving the wide station at 17.82 mm (82%
of the corner). With barrel distortion the traced chief ray reaches the corner at 47.5°, where it crosses surface 1A at
21.02, 2 at 16.40, 3 at 15.25 and 4 at 14.47 mm; the 27.2 mm and 35 mm stations already reached their corners. New values
are those heights plus ~0.5 mm. L1 is a strong meniscus and scaling surface 2 with 1A would pass its 0.9|R| rim-slope
limit, so each surface keeps its own floor; L2 was scaled as one element from surface 3. FIG. 1 (PDF p. 2), scaled on the
wide-end track, draws L1 at about 23 mm, consistent with the new values; it was a cross-check only.

| Surface | Before | After | Justification |
|---|---|---|---|
| 1A | 18.0 | 21.6 | corner chief ray 21.02 mm + clearance; the asphere's slope rises monotonically to 25.9 mm (32.5° at the rim) |
| 2 | 15.8 | 17.0 | corner chief ray 16.40 mm + clearance (55.5° rim) |
| 3 | 13.8 | 15.8 | corner chief ray 15.25 mm + clearance |
| 4 | 13.5 | 15.5 | L2 scaled with surface 3 (corner chief ray 14.47 mm) |

The validator accepts the new values, all three zoom stations now reach the corner with every rim clear, and the
image-circle floor still reports nothing undersized. The analysis note quotes no semi-diameter or rim-departure value for
these surfaces, so it is unchanged.
