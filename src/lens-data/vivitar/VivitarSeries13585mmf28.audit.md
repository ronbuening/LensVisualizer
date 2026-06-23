# Audit Log — Vivitar Series 1 35-85mm f/2.8 VMC

Patent: US 3,975,089, Table I / Fig. 1

## 2026-06-23 — Vivitar folder patent audit

### Phase 1 — Glass reconciliation

- Reviewed local patent file `patents/US3975089.pdf` against `VivitarSeries13585mmf28.data.ts`.
- Updated L2 to `531621 — BSM-type crown (no exact public catalog match)` so the six-digit patent code is explicit.
- Updated L5 from a generic `LaSF5` label to `834373 — dense flint (M-NBFD10 catalog match; LaSF5/S-LAH60 class)`. The local 834373/M-NBFD10 row is a much closer Sellmeier match to the patent's 1.834 / 37.3 glass than the generic family name.
- Updated L6 to `498651 — BK3-type borosilicate crown (no exact public catalog match)` so the patent row is preserved without implying a current catalog coefficient match.
- Updated L11 to `639451 — BaSF52-type barium dense flint (no exact public catalog match)` so the six-digit patent code is explicit.

### Phase 2 — Prescription, SD, APD, and high-index review

- Rechecked the Table I radii, axial spacings, nd/vd rows, and zoom variable gaps. No numeric prescription changes were made.
- Confirmed from the scanned table that L6 is νd = 65.1 and that the third variable gap is represented in the data as the patent gap split around the inserted stop.
- The patent publishes no semi-diameter table. Fig. 1 supports the existing large-front / smaller-rear aperture progression, and no element proportions looked inconsistent with the drawing. No SD edits were made.
- The patent publishes no abnormal partial dispersion, dPgF, theta-gF, line-index set, apodization, or gradient-filter data. All elements remain `apd: false`; no APD status was inferred.
- High-index status is supported for the dense flint and high-index rows, especially L3/L7/L10/L12 SF6, L4 SF57, L5 834373, and L11 639451.

### Phase 3 — Analysis sync

- Updated the analysis glass-palette summary to avoid overstating the count of distinct glass types and to call FK5 a fluor crown rather than a fluorite crown.

### Verification

- `npm run generate:glass-reports` passed.
- `npm run typecheck` passed.
- Scoped `prettier --check` passed for the Vivitar audit files and regenerated glass reports.
- `git diff --check -- src/lens-data/vivitar agent_docs/generated` passed.

## 2026-06-23 — SD proportion refinement

- Adjusted the L6/L7 cemented interface SD from 9.0 mm to 10.2 mm to make the Group III compensator doublet read as a more coherent pair in the SVG diagram.
- This is a visual/proportional refinement, not a patent-derived SD; US 3,975,089 does not publish semi-diameter data.
- The new value stays below the edge-thickness limit for the steep L7 rear surface pair.
- Verification: `npm run typecheck` and focused `buildLens` / `elementRenderDiagnostics` tests passed; computed L7 edge thickness remains positive at about 0.246 mm.
