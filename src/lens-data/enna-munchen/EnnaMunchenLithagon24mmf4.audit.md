# Audit Log - ENNA MÜNCHEN LITHAGON 24mm f/4

Patent: DE 1 228 820 B, sole claimed prescription

## 2026-07-30 - Glass-code source review

### Patent verification

- Rendered and visually reviewed page 1 of local `patents/DE_1228820_B.pdf`.
- The sole claim table prints L4 at `nd = 1.51895`, `vd = 57.3`, confirming the stored prescription coordinate.
- The patent supplies no glassmaker, glass name, secondary line index, or partial-dispersion value.

### Catalog disposition

- Rechecked the current and discontinued-inclusive first-party OHARA, HOYA, and SUMITA coefficient catalogs.
- OHARA NSL2/S-NSL2, OHARA NSL3/S-NSL3, HOYA E-C3, and SUMITA K3 provide nearby crown curves, but the patent has no independent spectral or supplier evidence that selects one.
- Replaced the unsupported `K4-class` attribution with explicit `Unmatched 519573 crown glass` wording. L4 intentionally remains on its patent-coordinate Abbe fallback.

### Report correction

- Corrected the generated-report patent parser to retain spaces inside legacy publication numbers. `DE 1 228 820 B` now resolves to `patents/DE_1228820_B.pdf` instead of colliding with an unrelated filename containing the single digit previously parsed from the subtitle.

### Verification

- `npm run generate:glass-reports` — 8 files / 10 tests passed.
- `npm test -- dispersion.test.ts lensDataTyping.test.ts validateLensData.test.ts buildLens.test.ts` — 4 files / 237 tests passed.
- `npm run typecheck`
- `npm run format:check`
- `git diff --check`

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/DE_1228820_B.pdf`. The patent publishes the f = 100 prescription, f/4 relative aperture, 85 degree field, and drawing sheet, but no clear-aperture or semi-diameter table.
- The drawing shows the F section as the largest part, with L1 slightly broader than L2, the positive M singlet moderately smaller, and the rear H section as a compact group. L4/L5 are small stop-adjacent positive elements, L6 is the taller dense-flint negative, and L7 is a thin final positive element rather than a large rear collector.
- Stored SDs follow that silhouette: 15.0 / 14.05 mm for the front negative pair, 11.0 mm for the median singlet, roughly 7.8-7.95 mm through the main rear section, and 6.45 mm for the thin final member.
- No SD values changed. Current values remain inferred from the patent figure, f/4 entrance-pupil geometry, rendered edge thickness, cross-gap sag limits, and same-element diameter constraints.

### Verification

- `npm test -- elementRenderDiagnostics`

## 2026-08-18 — L4 J-K3 coefficient assignment

- Visually rechecked `patents/DE_1228820_B.pdf`, PDF page 1. L4 remains `nd = 1.519573`, `νd = 59.4`.
- Hikari J-K3 is within the runtime catalog-equivalent window (`Δnd = -0.000720`, `Δνd = +1.52`).
- Relabeled L4 as a J-K3 optical equivalent while leaving the production supplier unspecified. No prescription geometry changed.
