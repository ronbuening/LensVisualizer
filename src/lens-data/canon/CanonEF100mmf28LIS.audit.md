# Audit Log - Canon EF 100mm f/2.8L Macro IS USM

Patent: US 7,864,451 B2, First Numerical Example

## 2026-09-25 — Source-state review

Source-state review outcome: verified. Both authored candidates reviewed; infinity and life-size are enabled.
The finite distance is calculated. Intermediate travel is not certified.

Source: local `patents/US7864451.pdf`, visually inspected PDF pages 18–19, printed pages 8–9,
First Numerical Example prescription and variable-spacing table. The 29 surface rows and both authored
endpoint columns reproduce the published radii, indices and spacings. The sub-stop at R14 and main stop
at R15/STO are retained, as are the existing small clear-aperture reductions on R5/R10.

| Gap (mm) | Infinity | Life-size |
|---|---:|---:|
| d8 | 1.31 | 20.32 |
| d13 | 21.73 | 2.71 |
| d17 | 18.54 | 1.91 |
| d22 | 3.00 | 19.63 |
| d25 | 6.97 | 6.97 |
| d29 / BF | 48.35 | 48.35 |

At focusT=1, the fixed first-vertex-to-image matrix gives A=-0.9999046850728703 and
B=134.7436648047561 mm. Thus s=-B/A=134.75650911160233 mm before R1, or 297.6665091116023 mm
object-to-image. This is derived from the source geometry, not from the production 0.30 m minimum-focus claim.

Independent exact-ray roots at heights 0.01/0.005/0.0025 mm recover source distances
134.756508760590/134.756509025320/134.756509088071 mm, with axial image residuals below 2.61e-11 mm.
The corresponding signed magnifications approach -0.999904685167, within 0.0096% of the published -1,
consistent with source rounding. Reproduce with
`node --import ./scripts/ts-js-specifier-hook-register.mjs scripts/audit-mtf.mjs --derive-source-states --lens=canon-ef-100mm-f28l-is-macro`.
Numeric precision supports repeatability, not source accuracy.

The rounded infinity table has a 0.0244 mm paraxial BFL residual at the published BF. Its formal finite
solution (about 410 m) is not a new state: the source explicitly identifies infinity. The source optical
track is printed as 162.90 mm; the summed rounded rows give 162.92/162.91 mm at the endpoints. No value is tuned.

Additional-source blocker: the published -0.5× column (d8=9.90, d13=13.14, d17=9.21, d22=12.33 mm) is
not an authored keyframe. The endpoint interpolation cannot reproduce these gaps simultaneously. This
existing-configuration review does not add movement geometry or certify an interpolated position.

Glass-coordinate matches remain spectral proxies; the centered model does not simulate IS decentering.
This review changes no prescription geometry, aperture, glass, movement or image plane.

## 2026-06-25 - Canon folder patent audit

### Phase 1 - Glass corrections

- Rechecked the local patent PDF `patents/US7864451.pdf` and the existing analysis sidecar against the data file.
- No glass label changes were needed. The stored nd/vd pairs match the patent table and the OHARA-equivalent labels remain plausible catalog matches.
- High-index dense-flint and lanthanum rows (notably E3, E7, E8, E11, and E12) are already represented by their nd/vd values and roles; no separate high-index schema field exists.

### Phase 2 - Retained-information audit

- Confirmed the source note: the patent table prints full effective diameters, so the stored `sd` values are one half of the patent values.
- Retained the documented renderer guardrail reductions on surfaces 5 and 10; these do not change the optical prescription.
- Retained SP2 at surface 14 and the main aperture stop at surface 15.

### Phase 3 - Spectral / metadata enrichment

- No new patent line-index or partial-dispersion table was found.
- E4 remains `apd: "inferred"` from the S-FPL51 catalog material and Canon's one-UD production description.
