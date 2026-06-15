# Audit Log - FUJINON XF23mmF2 R WR

Patent: US 2017/0351051 A1, Example 1

## 2026-06-15 - New-lens patent audit

### Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L14 / S7-S8 | `glass`, `dPgF` | `Unmatched (849401 high-index lanthanum flint; likely PGM aspheric melt)` | `849401 - high-index lanthanum flint (likely PGM aspheric melt; no exact public catalog match)`, `dPgF: -0.00435` | Patent Table 1 gives nd=1.84887, vd=40.12, theta_g,F=0.57197; no exact catalog entry was found, so the code and patent partial dispersion are retained. |
| L21 / S13-S14 | `glass`, `dPgF` | `Unmatched (803405 high-index lanthanum flint; likely PGM aspheric melt)` | `803405 - high-index lanthanum flint (likely PGM aspheric melt; no exact public catalog match)`, `dPgF: -0.0101` | Patent Table 1 gives nd=1.80312, vd=40.54, theta_g,F=0.56551; no exact catalog entry was found, so the code and patent partial dispersion are retained. |

### Retained-information audit

- Surface radii, infinity spacings, nd/vd values, theta_g,F values, and Table 2 focus spacings were checked against the patent.
- The file intentionally folds the patent optical member PP into the final air-equivalent BFD.
- The data-file close endpoint extends the same G2 motion to the production 0.22 m MFD; the patent beta=-0.041 row remains documented in the analysis.
- Semi-diameters remain ray-envelope estimates because the patent does not publish clear aperture diameters.

### Analysis sync

- Updated L14 and L21 from `Unmatched` prose to code-only glass descriptions and noted retained patent partial dispersion.
