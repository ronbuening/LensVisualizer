# Audit Log - Canon EF-M 28mm f/3.5 Macro IS STM

Patent: US 2016/0313535 A1, Numerical Example 1

## 2026-09-25 — Source-state review

Source-state review outcome: verified. Both authored candidates reviewed; infinity and the third finite
Super Macro state are enabled. The finite distance is calculated; intermediate travel is not certified.

Source: local `patents/US20160313535A1.pdf`, visually inspected PDF pages 16 and 20 (printed pages 2 and 6).
Numerical Example 1 provides the 24 surface rows, three asphere coefficient sets, and focus columns;
paragraph 0024 identifies its third finite state as 1.20×. The retained radii, indices, fixed gaps and aspheres
match that example. R9/FP, R10/STO and R19/FC remain the authored flat planes. Source surfaces 23–24 are
the existing hidden 1.00 mm rear plate, nd=1.51633, followed by 12.28 mm final air. The source defines BF as
air-equivalent in paragraph 0068; it is not substituted for the physical gaps in this review.

| Physical gap (mm) | Infinity | Third finite / 1.2× |
|---|---:|---:|
| d19 / FC | 0.94 | 10.32 |
| d22, to rear plate | 29.28 | 20.49 |
| d23, rear plate | 1.00 | 1.00 |
| d24, final air | 12.28 | 12.28 |

At focusT=1, the full physical first-vertex-to-image matrix gives A=-1.1988909826105107 and
B=18.63686865645193 mm. Thus s=-B/A=15.54509035998528 mm before R1, or 92.59509035998528 mm
object-to-image. No production minimum-focus distance was used as optical evidence.

Independent exact-ray roots at 0.01/0.005/0.0025 mm first-vertex heights give distances
15.545090877782/15.545090489378/15.545090392560 mm; axial image residuals are below 4.00e-10 mm.
The exact signed magnification approaches -1.198890985425, whose magnitude differs from the published
1.20× by 0.0925%. This residual is retained with the source's rounded geometry rather than corrected.
The infinity table establishes no finite real source. Reproduce with
`node --import ./scripts/ts-js-specifier-hook-register.mjs scripts/audit-mtf.mjs --derive-source-states --lens=canon-efm-28mm-f35-macro-is-stm`.
Numeric precision supports repeatability, not source accuracy.

Additional-source blockers: the first finite 1.0× and second finite 0.02× columns are not authored keyframes.
Neither is enabled by interpolating the two endpoints. This review preserves the endpoint model and does not
claim to reproduce the two-mode mechanical trajectory. Inferred apertures, qualified spectral proxies and
the MTF numerical-domain restrictions still apply, including the rear plate's spectral-data requirements.
No prescription geometry, glass, aperture, movement or image plane is changed.

## 2026-06-25 - Canon folder patent audit

### Phase 1 - Glass corrections

- Rechecked the local patent PDF `patents/US20160313535A1.pdf`, data file, and analysis sidecar.
- No glass label changes were needed. The OHARA-equivalent labels match the patent nd/vd table to the precision used in the source.
- High-index and ultra-high-index elements 102, 104, 106, 109a, and 109b remain correctly documented by their nd values and roles.

### Phase 2 - Retained-information audit

- The patent does not publish clear-aperture semi-diameters. Existing SDs remain inferred from paraxial marginal/chief-ray envelopes, edge/slope checks, and cross-gap clearance.
- Retained the project-convention omission of the image-side 1.00 mm plane-parallel plate, with its air-equivalent optical path folded into BFD.

### Phase 3 - Spectral / metadata enrichment

| Element | Field | Before | After | Justification |
|---|---|---|---|---|
| 107 | `apd` / `apdNote` | omitted | `inferred` | S-FPL51 UD fluorophosphate element matching Canon's one-UD production claim and the analysis text. |

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Replaced the air-equivalent surface-22 gap with the patent's physical rear stack (Numerical Example 1 table and
  "Other data", PDF p. 20, confirmed on the rendered page): d22 = 29.28 / 20.49 mm (infinity / third finite 1.2×), then
  surfaces 23–24, a 1.00 mm plate with nd 1.51633, νd 64.1, and d24 = 12.28 mm to the image (fixed in every state;
  the printed BF values 42.22 / 33.44 reproduce to rounding).
- Plate glass labeled S-BSL7 (OHARA), catalog-compatible with 1.51633 / 64.1 and matching the file's OHARA labels;
  the patent prints no plate designation or θgF.
- Paraxial check against the previous data: EFL identical and defocus unchanged at both focus keyframes (the old
  42.2195 / 33.4295 were exact folds). Physical track grows by 0.341 mm = t(1 − 1/n).
