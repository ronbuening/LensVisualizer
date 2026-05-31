# Audit Log - Sigma 105mm F1.4 DG HSM | Art

Patent: JP 2019-144477 A, Numerical Example 1

## 2026-05-31 - Sigma last-commit patent glass audit

### Patent evidence

- Reviewed ignored local file `patents/JP2019144477A.pdf`.
- Example 1 table lists 17 glass elements with `nd`, `vd`, and `PgF`; the LPF/cover plate row remains excluded by project convention.
- Figure 1 shows a very large fixed G1 collector, a smaller moving G2, and a compact final asphere behind the rear doublets.

### Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L10 / S17 | `glass` | `PCD40 (Hoya, SLD class)` | `PCD40 (HOYA, SLD class)` | Added coefficient-backed HOYA `PCD40` catalog entry for patent nd/vd = 1.61997 / 63.88. |
| L17 / S29A | `glass` | `M-TAFD305 class (Hoya, soft match; patent nd=1.84915)` | unchanged label, now catalog-backed soft match | Added HOYA `M-TAFD305`; catalog nd = 1.85135 remains a soft class match to patent nd = 1.84915. |

### Spectral corrections

- Converted every `dPgF` field from the patent's condition-expression delta convention to the project engine convention, `PgF - (0.6438 - 0.001682 * vd)`.
- Updated each `apdNote` to cite the patent `PgF` and the project-normal `dPgF` value.

### Cross-section review

| Surface | Field | Before | After | Justification |
|---|---|---:|---:|---|
| 29A | `sd` | 19.5 | 18.4 | Patent Figure 1 shows the final asphere slightly smaller than the preceding rear doublet cluster. |
| 30A | `sd` | 19.5 | 18.4 | Same element as S29A; preserves a matched rendered aperture. |

### Analysis sync

- Added a note that the analysis uses the patent's anomalous-dispersion convention, while data-file `dPgF` uses the project normal-line convention consumed by the engine.
- Updated the L17 uncertainty note to reflect that `M-TAFD305` is now present in the project catalog but remains a soft match.

### Verification

- `npm test -- dispersion.test.ts` - passed.
- `npm run generate:glass-reports` - passed; this lens is now 17/17 Sellmeier-covered.
- `npm run typecheck` - passed.
- `npm run format:check` - passed.
- `npm run lint` - passed.
- `npm run test` - passed.

## 2026-05-31 - APD display-key correction

### Patent evidence

- Rechecked ignored local file `patents/JP2019144477A.pdf`.
- The patent publishes `PgF` for every element, but its anomalous-dispersion conditions single out special correction roles rather than making every glass a diagram-highlight APD glass.

### Display-key corrections

- Retained `dPgF` on all 17 elements for chromatic tracing.
- Kept `apd: "patent"` only on the visually keyed special-dispersion elements: FLD L2, L3, L5; condition-8/9 high-index APD flint L9; and SLD L10, L11.
- Changed L1, L4, L6, L7, L8, L12, L13, L14, L15, L16, and L17 to `apd: false`.
- Removed `apdNote` from the non-keyed elements so the inspector no longer labels ordinary crown, lanthanum, flint, or aspherical partners as APD elements.

### Analysis sync

- Added a display-key note distinguishing retained patent partial-dispersion data from the narrower visual APD key.

### Verification

- `npm run generate:glass-reports` - passed.
- `npm run typecheck` - passed.
- `npm run format:check` - passed.
- `npm run lint` - passed.
- `npm run test` - passed.
