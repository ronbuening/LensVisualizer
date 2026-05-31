# Audit Log - Sigma 14-24mm F2.8 DG HSM | Art

Patent: JP 2018-189733 A, Numerical Example 1

## 2026-05-31 - Sigma last-commit patent glass audit

### Patent evidence

- Reviewed ignored local file `patents/JP2018189733A.pdf`.
- Example 1 table lists 17 glass elements with `nd`, `vd`, and `theta_gF`.
- Figure 1 shows a very large bulbous front asphere, a tapering G1, and much smaller G2/G3 rear groups.

### Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L3 / S5A | `glass` | `M-BACD5N / BACD5 class (HOYA, 589/613 moldable crown)` | `M-BACD5N (HOYA, 589613 moldable barium crown)` | Added coefficient-backed HOYA `M-BACD5N`; removed `BACD5`, which aliases to a different 620/603 catalog row. |
| L8 / S13 | `glass` | `Dense flint class, 720/347` | `N-KZFS8 (Schott, 720347)` | Existing Schott catalog row exactly matches patent nd/vd. |
| L9 / S15 | `glass` | `High-index high-dispersion glass, 855/248` | `S-NBH56 (OHARA, 855248)` | Existing OHARA catalog row exactly matches patent nd/vd. |
| L17 / S28A | `glass` | `Moldable low-dispersion glass, 553/717` | `M-FCD500 (HOYA, 553717)` | Existing HOYA catalog row exactly matches patent nd/vd. |

### Spectral corrections

- Converted every `dPgF` field from the patent's condition-expression delta convention to the project engine convention, `theta_gF - (0.6438 - 0.001682 * vd)`.
- The analysis table still reports patent-condition `Delta theta`; an explicit note now distinguishes it from data-file `dPgF`.

### Cross-section review

- Reviewed patent Figure 1 against the current semi-diameter progression. No SD edits were needed; the current file already represents the dominant bulbous L1, tapered G1, and compact rear groups.

### Analysis sync

- Updated the element narratives and glass-identification table for L3, L8, L9, and L17.
- Updated confidence notes where class-level labels became catalog-backed matches.

### Verification

- `npm test -- dispersion.test.ts` - passed.
- `npm run generate:glass-reports` - passed; this lens is now 17/17 Sellmeier-covered.
- `npm run typecheck` - passed.
- `npm run format:check` - passed.
- `npm run lint` - passed.
- `npm run test` - passed.

## 2026-05-31 - APD display-key correction

### Patent evidence

- Rechecked ignored local file `patents/JP2018189733A.pdf`.
- The patent publishes `theta_gF` for every element, but that column is spectral data; it does not mean every element should carry the APD visual key.

### Display-key corrections

- Retained `dPgF` on all 17 elements for chromatic tracing.
- Kept `apd: "patent"` only on the visually keyed special-dispersion elements: SLD candidate L4; FLD L5, L12, L14; high-positive-APD flint L7; and SLD candidates L16, L17.
- Changed L1, L2, L3, L6, L8, L9, L10, L11, L13, and L15 to `apd: false`.
- Added `apdNote` only to keyed elements so the inspector now matches the diagram color coding.

### Analysis sync

- Added a display-key note distinguishing retained patent partial-dispersion data from the narrower visual APD key.

### Verification

- `npm run generate:glass-reports` - passed.
- `npm run typecheck` - passed.
- `npm run format:check` - passed.
- `npm run lint` - passed.
- `npm run test` - passed.
