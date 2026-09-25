# Audit Log — Canon RF 35mm f/1.8 Macro IS STM

## 2026-09-25 — Source-state review

Source-state review outcome: verified. Both authored candidates reviewed; infinity and half life-size are enabled.
The finite distance is calculated; intermediate travel is not certified.

Source: local `patents/US20190113711A1.pdf`, visually inspected PDF page 17, printed page 5, Numerical Data 1.
The retained 21 surface rows, nd values and R11 asphere coefficients match the source. R8 is STO.
The variable table explicitly gives d17=0.95/18.25 mm at infinity/-0.5 magnification and fixed BF=11.66 mm.
The optional filter discussed elsewhere in the patent is absent from this example and is not inserted.

At focusT=1, the fixed first-vertex-to-image matrix has A=-0.4996718464823261 and B=35.814185489947576 mm.
Thus s=-B/A=71.67541205708967 mm before R1, or 169.41541205708967 mm object-to-image. This calculation
does not use the production 0.17 m minimum-focus specification or treat it as an exact patent object distance.

Independent exact-ray roots at 0.01/0.005/0.0025 mm first-vertex heights give distances
71.675408990627/71.675411289431/71.675411865175 mm. The maximum axial image residual is 2.14e-10 mm;
signed magnification approaches -0.499671846439, within 0.0657% of the published -0.5. The source's rounded
geometry and image plane remain untouched. Infinity establishes no finite real source.

Reproduce with `node --import ./scripts/ts-js-specifier-hook-register.mjs scripts/audit-mtf.mjs --derive-source-states --lens=canon-rf-35mm-f18-macro-is-stm`.
Numeric precision supports repeatability, not source accuracy. The physical iris estimate, published aperture
envelopes, explicit shared-gap allowance and unresolved glass suppliers remain qualified as documented in the
data header. This review changes no prescription geometry, glass, aperture, movement or image plane.
