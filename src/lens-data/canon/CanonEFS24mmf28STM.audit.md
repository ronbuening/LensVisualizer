# Audit Log - Canon EF-S 24mm f/2.8 STM

Patent: JP 2015-111192 A, Example 1

## 2026-05-20 - Glass relabel pass

- Opened the data, analysis, and local patent PDF `patents/JP2015111192A.pdf`; local text confirms rows 1, 7, and 8.
- Updated L1 to `TAFD35 (HOYA)`, L3 to `N-LAK14 (Schott)`, and L4 to `NBFD15 (HOYA)`.
- L6 remains a no-catalog E-C3/BSC3-class coverage gap.

## 2026-06-25 - APD metadata backfill

### Phase 1 - Glass corrections

- No glass label changes. L5 remains `S-FPM2 (OHARA)` with patent nd=1.59522 / vd=67.7.

### Phase 2 - Retained-information audit

- Rechecked JP 2015-111192 A Example 1 surface table: patent effective diameters map to the stored SDs by halving the published full diameters, with the documented flare-cut stop omission folded into surface 4 spacing.

### Phase 3 - Spectral / metadata enrichment

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L5 / surface 8 | `apd` | `inferred` | `patent` | Patent condition and Table 1 identify the RG3 material partial-dispersion requirement. |
| L5 / surface 8 | `dPgF` | omitted | `0.0141` | Patent Table 1 gives theta_gF=0.544; normal-line value at vd=67.7 is 0.52995, so delta is approximately +0.0141. |

### Phase 4 - Analysis sync

- No prose change needed; the analysis already states theta_gF=0.544 and delta PgF approximately +0.014.

### Verification

- `npm run generate:glass-reports` - passed (7 files, 7 tests).
- `npm run typecheck` - passed before and after metadata regeneration.
- `npm run format:check` - passed.
- `npm run lint` - passed.
- `npm run test` - initially exposed stale generated route metadata; after `npm run generate:metadata`, passed (183 files, 2212 tests).
