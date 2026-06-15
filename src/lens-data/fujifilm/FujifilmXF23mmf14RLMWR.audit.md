# Audit Log - FUJINON XF23mmF1.4 R LM WR

Patent: US 2022/0276464 A1, Example 7

## 2026-06-15 - New-lens patent audit

### Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L11 / S1 | `glass` | `N-BAK2 / S-BAL12-class barium crown (vendor uncertain)` | `540597 - barium crown (N-BAK2 / S-BAL12 class; vendor uncertain)` | Patent Table 25 gives nd=1.53996, vd=59.73; the unbroken code preserves the patent pair without asserting a vendor catalog entry. |
| L26 / S21-S22 | `glass` | `M-NBFD130 (HOYA) moldable niobium dense flint` | `NBFD13 / M-NBFD130 (HOYA, 806407 code)` | Patent Table 25 gives nd=1.80610, vd=40.73; the local catalog has coefficient-backed HOYA NBFD13 for the 806407 code family. |

### Retained-information audit

- Surface radii, infinity spacings, nd/vd values, and focus variable gaps were checked against Tables 25-27.
- The file intentionally scales Example 7 by 0.973614465993 to the marketed 23 mm focal length.
- Patent surfaces 27-28 are sensor/cover material and remain folded into the air-equivalent final BFD.
- Semi-diameters remain ray-envelope estimates because the patent does not publish clear aperture diameters.

### Analysis sync

- Updated L11 and L26 glass language in the companion analysis to match the data file.
