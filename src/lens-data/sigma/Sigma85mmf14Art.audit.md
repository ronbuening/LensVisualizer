# Audit Log - Sigma 85mm F1.4 DG HSM Art

Patent: JP 2018-005099 A, Example 4

## 2026-05-19 - Glass relabel

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L2 / S3 | `glass` | `FCD515 (HOYA)` | `FCD705 (HOYA)` | Patent nd/vd is 1.55032 / 75.50; FCD705 is exact. |
| L4 / S7 | `glass` | `NBFD3 (HOYA)` | `J-KZFH9 (Hikari)` | Patent nd/vd is 1.73800 / 32.26 and PgF 0.5898; J-KZFH9 is the exact d-code catalog match. |
| L5 / S9 | `glass` | `NBFD3 (HOYA)` | `J-KZFH9 (Hikari)` | Same patent glass as L4. |
| L7 / S13 | `glass` | `FCD515 (HOYA)` | `FCD705 (HOYA)` | Same patent glass as L2. |
| L10 / S18 | `glass` | `TAFD37 (HOYA)` | `E-FD15 (HOYA)` | Patent nd/vd is 1.69895 / 30.05; E-FD15 is exact. |
| L11 / S21 | `glass` | `NBFD3 (HOYA)` | `J-KZFH9 (Hikari)` | Same patent glass as L4/L5. |

### Phase 2 - Retained-information audit

- Spot-checked flagged rows against Example 4; stored nd/vd and patent PgF values are retained.
- No radius, spacing, or asphere edits were needed in this scoped glass pass.

### Phase 3 - Spectral / metadata enrichment

- No new catalog entry was needed for this lens; all targets were already cataloged.

### Phase 4 - Analysis sync

- Updated the companion analysis names, repeated-glass narrative, and references for FCD705, J-KZFH9, and E-FD15.

### Verification

- `npm test -- dispersion`
- `npm test -- glassRelabelByLensScan`

## 2026-06-23 - APD badge correction

### Phase 1 - APD status corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L1, L3-L5, L8-L14 | `apd` | `inferred` or `patent` | `false` | JP 2018-005099 A Example 4 publishes PgF for all glass rows, but these elements sit inside the patent's ordinary-material PgF/νd range and should not be highlighted as special APD glass. Their `dPgF` values remain for chromatic tracing. |
| L2, L6, L7 | `apd` | `patent` | retained | L2/L7 are the SLD low-dispersion elements, and L6 is the high-index anomalous-dispersion element called out by the patent/production design. |

### Phase 2 - Retained-information audit

- No surface, spacing, glass-name, or semi-diameter changes were made.
- Patent PgF-derived `dPgF` values were retained on every element so spectral analysis still uses the published partial-dispersion data.

### Phase 3 - Analysis sync

- Updated the companion analysis text to distinguish patent PgF data from APD viewer badges.

### Verification

- `npm run typecheck`
- `npm run test -- lensDataTyping dispersion ElementInspector`

## 2026-07-29 - Glass classification follow-up

- Corrected L3 from the near but wrong E-ADF10 annotation to OHARA S-NBM51.
- The stored `nd=1.61340`, `vd=44.27` coordinate exactly matches S-NBM51 (`613443`); HOYA E-ADF10 is the
  adjacent but distinct `1.61310 / 44.36` row (`613444`).
- Synchronized the analysis and source list. No prescription values changed.

## 2026-07-29 - Remaining catalog-coordinate correction

- Rechecked Example 4 in local `patents/JP2018005099A.pdf`; S24 remains 1.67270 / 32.17 with its patent PgF
  data and R/d values unchanged.
- S24 `S-NBH52 (OHARA)` -> `S-TIM25 (OHARA)`, the exact same-vendor coordinate. S-NBH52 is the distinct
  1.67300 / 38.15 row.
- Synchronized the L13 element text, glass table, sourcing qualification, and references.
