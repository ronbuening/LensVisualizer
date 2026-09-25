# Audit Log - Canon TS-E 90mm f/2.8L Macro

Patent: JP 2018-205474 A, Numerical Data 1 (Yamagishi / Canon)

## 2026-09-25 — Source-state review

Source-state review outcome: verified. Both authored candidates reviewed; scaled-design infinity and half
life-size are enabled. The finite distance is calculated at the retained model scale. Intermediate travel
is not certified, and active tilt/shift remains unavailable for MTF.

The original [JP2018205474A PDF](https://patentimages.storage.googleapis.com/24/1c/42/ab05bb98ff035f/JP2018205474A.pdf)
was retrieved because it is absent from the local patent collection. Visually inspected pages 4, 8 and 9:
paragraph 0012 identifies Example 1's close state as -0.5; Numerical Data 1 supplies 21 source rows and the
infinity/close columns. Source indices match the retained data. R12 is STO; the example is all-spherical.

This model already scales the source by 90/55.986=1.6075447433286894. Every retained finite radius and
infinity gap reproduces that scaling within 0.000005 mm (five-decimal storage rounding). The patent prints
f=55.99 mm; the retained normalization denominator is a model convention, not extra published precision.
Nothing is rescaled in this review. The declaration certifies the source configuration at the existing model
scale, not the production lens's construction or measured object distance.

| Gap (mm) | Source infinity | Source close | Model infinity | Model close |
|---|---:|---:|---:|---:|
| d17 | 1.59 | 6.52 | 2.556 | 10.48119 |
| d21 / BF | 44.70 | 64.14 | 71.85725 | 103.10792 |

At focusT=1, the scaled first-vertex-to-image matrix gives A=-0.5006135195750713 and B=113.79350184600432 mm.
Thus s=-B/A=227.30808776917183 mm before R1, or 401.09973776917184 mm object-to-image.
Independent exact-ray roots at 0.01/0.005/0.0025 mm first-vertex heights give distances
227.308085989593/227.308087319315/227.308087663323 mm, with axial image residuals below 3.93e-11 mm.
The signed exact magnification approaches -0.500613519576, within 0.1228% of the published -0.5.
The source's two-decimal gaps and three-decimal radii remain untouched. Its rounded infinity table gives
a formal finite solution near 232 m at model scale; that is not declared as a finite state.

Reproduce with `node --import ./scripts/ts-js-specifier-hook-register.mjs scripts/audit-mtf.mjs --derive-source-states --lens=canon-tse-90mm-f28l-macro`.
Numeric precision supports repeatability, not source accuracy. Inferred apertures, qualified glass matches
and the production-correlation limitations remain. Selecting a state preserves tilt/shift and cannot bypass
the movement guard. No prescription geometry, aperture, movement or image plane is changed.

## 2026-06-23 - Patent geometry and glass review

### Source note

- The exact cited patent PDF was not present in the untracked local `patents/` folder during this pass, so the official Google Patents PDF was fetched to `tmp/pdfs/JP2018205474A.pdf` for direct review.
- The first patent figure was checked against the data-file layout: L1a/L1b/L1c before the stop, aperture stop after surface 11 and before surface 13, rear L2 group, and image plane order all match.

### Retained-data audit

- Confirmed Numerical Data 1 surface rows 1-21 against the data file after the documented 90 / 55.986 scale factor: radii, spacings, nd, vd, stop spacing, variable d17/d21, focal length 55.99 mm patent scale, F-number 2.91, image height 21.60 mm, total length 83.72 mm, and BF 44.70 mm.
- Confirmed the patent does not publish effective diameters for Numerical Data 1. The data-file SDs therefore remain reconstructed renderer-safe values, not primary-source clear apertures. Examples 2 and 3 do publish effective diameters, and they were used only as a scale sanity check.

### Glass corrections

| Element | Before | After | Justification |
|---|---|---|---|
| L6 | `S-NBH52V (OHARA)` | `S-NBH52 (OHARA)` | Patent row 10 gives nd=1.67300, vd=38.1. Catalog S-NBH52 round-trips the 673382 pair more directly than S-NBH52V. |
| L10 | retained `S-BAL3 (OHARA)` | retained | Patent row 18 gives nd=1.57135, vd=53.0. The label is numerically plausible, but no current local Sellmeier catalog entry resolves S-BAL3; the analysis now states this fallback explicitly. |

### Analysis sync

- Updated the L6 prose and glass table from S-NBH52V to S-NBH52.
- Updated the L10 prose/table/source note so S-BAL3 is not described as a resolved local-catalog match.
