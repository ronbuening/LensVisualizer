# Audit Log - Canon TS-E 135mm f/4L Macro

Patent: JP 2018-132674 A, Numerical Data 1 (Mizuma / Canon)

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

### Verification

- `npm run typecheck` - passed.
- `npm run test -- perspectiveControl elementRenderDiagnostics` - passed (2 files, 8 tests).
- `npm run generate:glass-reports` - passed (7 files, 7 tests).
- `npm run format:check` - passed.
- `npm run lint` - passed.
