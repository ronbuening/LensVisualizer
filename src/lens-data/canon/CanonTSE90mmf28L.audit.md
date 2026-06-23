# Audit Log - Canon TS-E 90mm f/2.8L Macro

Patent: JP 2018-205474 A, Numerical Data 1 (Yamagishi / Canon)

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

### Verification

- `npm run typecheck` - passed.
- `npm run test -- perspectiveControl elementRenderDiagnostics` - passed (2 files, 8 tests).
- `npm run generate:glass-reports` - passed (7 files, 7 tests).
- `npm run format:check` - passed.
- `npm run lint` - passed.
