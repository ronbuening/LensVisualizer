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
