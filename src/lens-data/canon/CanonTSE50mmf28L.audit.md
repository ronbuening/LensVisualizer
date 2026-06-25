# Audit Log - Canon TS-E 50mm f/2.8L Macro

Patent: US 10,571,651 B2, Numerical Data 1 (Sakai / Canon)

## 2026-06-23 - Patent geometry and glass review

### Source note

- The exact cited patent PDF was not present in the untracked local `patents/` folder during this pass, so the official Google Patents PDF was fetched to `tmp/pdfs/US10571651.pdf` for direct review.
- The first patent figure was checked against the data-file layout: front L1/L2 groups, rear L3a/L3b split, aperture stop between L3a and L3b, and image plane order all match.

### Retained-data audit

- Confirmed Numerical Data 1 surface rows 1-22 against the data file: radii, spacings, nd, vd, variable d6/d10, focal length 51.40 mm, F-number 2.88, image height 33.63 mm, total length 153.42 mm, and BF 55.96 mm.
- Confirmed the patent effective-diameter column maps to the stored element semi-diameters by halving the published diameters.
- Retained the authored physical stop semi-diameter. The patent lists a stop effective diameter of 29.80 mm, but the data file intentionally uses the entrance-pupil/F-number solution for the physical stop instead of treating that drawing diameter as the aperture radius.

### Glass audit

- No glass label changes were made. The published nd/vd pairs remain plausible catalog-equivalent assignments for the stored element set.

### Verification

- `npm run typecheck` - passed.
- `npm run test -- perspectiveControl elementRenderDiagnostics` - passed (2 files, 8 tests).
- `npm run generate:glass-reports` - passed (7 files, 7 tests).
- `npm run format:check` - passed.
- `npm run lint` - passed.

## 2026-06-25 - Catalog label normalization

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L3 / surface 5 | `glass` | `S-LAM 7 (OHARA)` | `S-LAM7 (OHARA)` | Same patent nd=1.74950 / vd=35.3 row; canonical OHARA catalog token resolves without the embedded space. |
| L4 / surface 7 | `glass` | `S-NBH 5 (OHARA)` | `S-NBH5 (OHARA)` | Same patent nd=1.65412 / vd=39.7 row; canonical OHARA catalog token resolves without the embedded space. |
| L9 / surface 15 | `glass` | `S-NBH 5 (OHARA)` | `S-NBH5 (OHARA)` | Same patent nd=1.65412 / vd=39.7 row; same glass as L4. |

### Phase 2 - Retained-information audit

- No radius, spacing, nd/vd, asphere, focus, or semi-diameter values changed in this pass.

### Phase 3 - Spectral / metadata enrichment

- No new patent line-index or partial-dispersion values were present in the already reviewed Numerical Data 1 source.

### Phase 4 - Analysis sync

- No prose change needed; the analysis file already used `S-LAM7` and `S-NBH5`.

### Verification

- `npm run generate:glass-reports` - passed (7 files, 7 tests).
- `npm run typecheck` - passed before and after metadata regeneration.
- `npm run format:check` - passed.
- `npm run lint` - passed.
- `npm run test` - initially exposed stale generated route metadata; after `npm run generate:metadata`, passed (183 files, 2212 tests).
