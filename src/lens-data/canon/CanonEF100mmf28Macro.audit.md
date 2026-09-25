# Audit Log — CANON EF 100mm f/2.8 Macro

## 2026-09-25 — Source-state review

Source-state review outcome: verified. All three authored candidates reviewed; infinity, half life-size and life-size
are enabled. Both finite distances are calculated. Intermediate travel is not certified.

Source: local `patents/JPA 1991141313-000000.pdf`, visually inspected PDF page 5, printed page 77, Numerical Example 1.
All 20 source rows match the retained radii, indices and fixed spacings. R9 is the source diaphragm, represented by
STO. The Example-1 upper-right table explicitly gives D14=2.50/25.62/48.74 mm at infinity/0.5x/1.0x.
The lower-left table belongs to Example 2 and was not used.

The patent omits D20. The existing model's 42.4201237822 mm final air distance places the image plane at the
computed infinity paraxial focus. That fixed normalization is retained for all states; it is not a published
back focal distance. The finite distances are derived with the published variable gaps at that fixed image plane,
then checked independently against small-height exact rays and the patent's reproduction ratios. No production
minimum-focus specification was used to establish the source.

| State | Exact focusT | D14 (mm) | Matrix A | Matrix B (mm) | Object before R1 (mm) | Object-to-image (mm) |
|---|---:|---:|---:|---:|---:|---:|
| half-life-size | 0.7995997649601272 | 25.62 | -0.500027257810 | 122.467071960343 | 244.920791911669 | 383.780915693869 |
| life-size | 1 | 48.74 | -1.000054515621 | 144.898905025659 | 144.891006202538 | 306.871129984738 |

Reproduce with `node --import ./scripts/ts-js-specifier-hook-register.mjs scripts/audit-mtf.mjs --derive-source-states --lens=canon-ef-100mm-f28-macro`.
Both finite states pass the exact-ray check. At 0.01/0.005/0.0025 mm launch heights, recovered distances differ
from the matrix result by at most 0.0000011 mm, and axial image residuals are below 3.90e-11 mm. Signed exact
magnifications approach -0.500027257820 and -1.000054515749; their magnitudes differ from the published
reproduction ratios by 0.0055%, consistent with the source's two-decimal geometry. Infinity yields no finite
physical source at this normalized plane, as expected. Numeric precision is for repeatability, not claimed source accuracy.

Clear apertures and stop diameter remain model estimates. Glass-coordinate classes remain supplier-neutral spectral
proxies, and the patent-to-production correlation remains qualified. This review changes no prescription geometry,
glass, aperture, movement or image plane.
