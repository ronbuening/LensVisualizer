# Audit Log — Vivitar Series 1 200mm f/3 VMC

Patent: US 3,942,876, Example 4 / Table IV / Fig. 5

## 2026-07-18 — S-PHM51 catalog disambiguation

- Removed the `S-PHM51 class` suffix from L1. The newly cataloged OHARA row is code 617628 and does not match the patent's 569631 PSK2 coordinates.
- Retained the explicit `569631 — PSK2 phosphate crown (Schott)` identification and removed the false S-PHM51 equivalence from the analysis.

## 2026-06-23 — Vivitar folder patent audit

### Phase 1 — Glass reconciliation

- Reviewed local patent file `patents/US3942876.pdf` against `VivitarSeries1200mmf3.data.ts`.
- Updated L1 from a named PSK2/S-PHM51 family label to `569631 — PSK2 phosphate crown (Schott) / S-PHM51 class` so the six-digit patent code is explicit.
- Updated L5 from `713-433` punctuation to unbroken code `713433`; this remains an unresolved LaF/BaSF-boundary row with no exact public catalog match.
- Updated L6 from legacy `BaLF4 (Schott)` to `N-BALF4 (Schott; BaLF4-class equivalent)`, using the local coefficient-backed N-BALF4 row as the closest Sellmeier proxy for the patent's 1.57957 / 53.7 row.

### Phase 2 — Prescription, SD, APD, and high-index review

- Rechecked the Table IV radii, axial spacings, nd/vd rows, and variable focusing gap. No numeric prescription changes were made.
- Retained the existing R7 correction from the historical analysis notes; the printed table radius is internally inconsistent with the drawing and prescription behavior.
- The patent publishes no semi-diameter table. Fig. 5 supports the existing visual progression: the first two crowns carry the large front aperture, the rear positive/negative telephoto pair is smaller, and the fixed rear corrector remains compact. No SD edits were made.
- The patent publishes no abnormal partial dispersion, dPgF, theta-gF, line-index set, apodization, or gradient-filter data. All elements remain `apd: false`; no APD status was inferred.
- High-index status is retained only where supported by nd: L3/L4 are SF6-class dense flints, while L5 is a moderate-high-index unresolved 713433 row.

### Phase 3 — Analysis sync

- Updated the analysis note to use unbroken code `713433`.
- Updated the L6 glass explanation and summary table to describe the N-BALF4/BaLF4-class Sellmeier proxy.

### Verification

- `npm run generate:glass-reports` passed.
- `npm run typecheck` passed.
- Scoped `prettier --check` passed for the Vivitar audit files and regenerated glass reports.
- `git diff --check -- src/lens-data/vivitar agent_docs/generated` passed.
