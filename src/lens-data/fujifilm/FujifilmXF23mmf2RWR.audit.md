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

## 2026-08-18 — M-TAFD305 coefficient assignment

- Visually rechecked local `patents/US20170351051A1.pdf`, PDF page 22, Example 1 / Table 1. L14 remains `nd = 1.84887`, `νd = 40.12`, `θgF = 0.57197`.
- Re-sourced Hoya M-TAFD305 / MC-TAFD305 from the first-party 2026-07-07 AGF. Its coefficient curve (`1.851348 / 40.104 / 0.569519`) is within catalog-assignment tolerances and is explicitly a precision-molding family.
- Relabeled only L14 to `M-TAFD305` as a catalog equivalent. Patent code `849401`, patent `dPgF`, and the unspecified production supplier remain explicit; L21 stays code-only.
