# Audit Log - Canon TS-E 135mm f/4L Macro

Patent: JP 2018-132674 A, Numerical Data 1 (Mizuma / Canon)

## 2026-09-25 — Source-state review

Source-state review outcome: verified. Both authored candidates reviewed; infinity and half life-size are enabled.
The finite distance is calculated; intermediate travel is not certified. Active tilt/shift remains unavailable for MTF.

The original [JP2018132674A PDF](https://patentimages.storage.googleapis.com/78/9b/09/143bd312270a07/JP2018132674A.pdf)
was retrieved because it is absent from the local patent collection. Visually inspected pages 5, 10 and 11:
paragraph 0014 identifies Example 1's close configuration as 0.5×; Numerical Data 1 supplies all 19 surface
rows and the two focus columns. Radii, nd values and fixed gaps match the authored prescription. R11 is STO.
BF=78.33 mm is retained. The rounded surface sums give tracks 183.77/183.75 mm, versus the printed
183.76 mm infinity total; no spacing is adjusted to eliminate that source rounding.

| Gap (mm) | Infinity | Close / 0.5× |
|---|---:|---:|
| d5 | 4.04 | 19.81 |
| d10 | 22.15 | 6.37 |
| d11 / STO | 19.94 | 11.39 |
| d16 | 4.35 | 12.89 |
| BF | 78.33 | 78.33 |

At focusT=1, the first-vertex-to-image matrix has A=-0.49985156864764996 and B=151.94895705560077 mm,
so s=-B/A=303.9881568576431 mm before R1, or 487.7381568576431 mm object-to-image. This does not use
the marketed 0.49 m minimum-focus distance as optical evidence.

Independent exact-ray roots at 0.01/0.005/0.0025 mm first-vertex heights give distances
303.988155990616/303.988156645310/303.988156786865 mm, with axial image residuals below 1.44e-11 mm.
The exact magnification approaches -0.499851568652, within 0.0297% in magnitude of the source's 0.5×.
The formal infinity finite solution near 690 m is a rounded-table residual, not an added finite state.
Reproduce with `node --import ./scripts/ts-js-specifier-hook-register.mjs scripts/audit-mtf.mjs --derive-source-states --lens=canon-tse-135mm-f4l`.

Numeric precision supports repeatability, not source accuracy. The inferred clear apertures and iris, qualified
spectral substitutions, and centered-analysis restrictions remain unchanged. Selecting a source state preserves
tilt/shift controls and cannot bypass the movement guard. No prescription geometry or image plane is altered.

## 2026-06-23 - Patent geometry and glass review

### Source note

- The exact cited patent PDF was not present in the untracked local `patents/` folder during this pass, so the official Google Patents PDF was fetched to `tmp/pdfs/JP2018132674A.pdf` for direct review.
- The first patent figure was checked against the data-file layout: fixed positive L1, moving negative FN group, fixed aperture stop, moving positive FP group, fixed rear RF group, and image plane order all match.

### Retained-data audit

- Confirmed Numerical Data 1 surface rows 1-19 against the data file: radii, spacings, nd, vd, variable d5/d10/d11/d16, focal length 133.00 mm, F-number 4.05, half field 14.19 degrees, image height 33.63 mm, total length 183.76 mm, BF 78.33 mm, and group focal lengths L1=104.40, L2/FN=-71.94, stop=infinity, L3/FP=42.19, L4/RF=-56.59.
- Confirmed the patent does not publish effective diameters. The data-file SDs remain reconstructed renderer-safe values derived from the F/4.05 entrance-pupil solution, official 82 mm filter size, and geometry checks.

### Glass corrections

| Element | Before | After | Justification |
|---|---|---|---|
| G1 | `S-BSM25 (OHARA)` | `N-SSK5 (Schott; S-BSM25 class equivalent)` | Patent row 1 gives nd=1.65844, vd=50.9. The stored line indices match the 658509 dense-crown class, and the runtime catalog already has a coefficient-backed Schott N-SSK5 entry for that pair; S-BSM25 is unresolved locally. |

### Analysis sync

- Updated the G1 prose, glass table, and source note to use the N-SSK5 catalog-equivalent label while preserving the S-BSM25 class context.
