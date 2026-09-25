# Audit Log — Canon EF 180mm f/3.5L Macro USM

## 2026-09-25 — Source-state review

Source-state review outcome: verified. All four authored candidates reviewed; infinity, one-tenth life-size,
half life-size and life-size are enabled. All three finite distances are calculated. Intermediate travel is not certified.

Source: local `patents/JPA 1997211319-000000.pdf`, visually inspected PDF page 6, printed pages 9–10,
Numerical Example 1. All 27 prescription rows match the retained radii, indices and fixed gaps; R18 is
the source stop, represented by STO. Page 7 is Example 2 and was not used. The source explicitly supplies
the four focus columns and constant d27=67.54 mm image distance.

| Gap (mm) | Infinity | 0.1× | 0.5× | 1× |
|---|---:|---:|---:|---:|
| d12 | 2.20 | 5.19 | 17.03 | 31.58 |
| d17 | 32.31 | 29.32 | 17.48 | 2.93 |
| d18 / STO | 17.54 | 15.39 | 7.93 | 1.10 |
| d23 | 28.15 | 30.30 | 37.76 | 44.59 |
| d27 | 67.54 | 67.54 | 67.54 | 67.54 |

The first-vertex-to-image track remains 223.51 mm. At each fixed geometry, s=-B/A gives:

| State | Exact focusT | Matrix A | Matrix B (mm) | Object before R1 (mm) | Object-to-image (mm) |
|---|---:|---:|---:|---:|---:|
| one-tenth-life-size | 0.22912992694228013 | -0.099994231645 | 187.126335605439 | 1871.371303396551 | 2094.881303396551 |
| half-life-size | 0.7323745404242055 | -0.500080915839 | 215.981125431759 | 431.892356998886 | 655.402356998886 |
| life-size | 1 | -1.000359672234 | 252.146905666337 | 252.056248032480 | 475.566248032480 |

Independent exact-ray roots at 0.01/0.005/0.0025 mm first-vertex heights reproduce these distances within
0.0000009 mm; axial image residuals are below 7.13e-12 mm. At the smallest height, exact magnifications
are -0.099994231645, -0.500080915848 and -1.000359672308. Their magnitudes match the published ratios
within 0.0058%, 0.0162% and 0.0360%, respectively, consistent with two-decimal source geometry.
The infinity table does not establish a finite real object and remains explicitly infinity.

Reproduce with `node --import ./scripts/ts-js-specifier-hook-register.mjs scripts/audit-mtf.mjs --derive-source-states --lens=canon-ef-180mm-f35l-macro-usm`.
These distances come from optical geometry, not the marketed 0.48 m minimum-focus distance or the slider's
inverse-distance labels. Numeric precision supports repeatability, not source accuracy.

The stop plane is published but its diameter and the element clear apertures remain model estimates.
The existing physical stop is retained at finite focus; effective f-numbers are not substituted for its diameter.
Supplier identity and physical spectral data remain qualified as documented in the data header. This review
changes no prescription geometry, glass, aperture, movement or image plane.
