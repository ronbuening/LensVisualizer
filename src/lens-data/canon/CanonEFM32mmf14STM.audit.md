# Audit Log - Canon EF-M 32mm f/1.4 STM

Patent: JP2018-180366A, Numerical Data 1
Catalog version: local working tree, 2026-05-19

## 2026-05-19 - Full patent audit and partial-dispersion enrichment

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L8 / surface 13 | `glass` | `Unmatched (675/348 partial-dispersion flint; patent nd=1.67542, vd=34.8, theta_gF=0.5825)` | retained | Numerical Data 1 row 13 lists nd=1.67542, vd=34.8, theta_gF=0.5825. Source searches for code 675348 and the exact nd/vd/theta tuple did not find a public manufacturer or refractiveindex.info catalog entry, so the explicit `Unmatched` label remains correct. |

### Phase 2 - Retained-information audit

- Checked Numerical Data 1 surface rows 1-23 against the data file. Stored `R`, `d`, `nd`, and the aspherical surface label `20A` match the patent table, with `STO` representing row 11.
- Confirmed the patent's plane-parallel GB/sensor cover rows 24-25 are intentionally excluded; the final air-equivalent back focus in the data file matches the file header calculation.
- Confirmed variable gap `d20` is 1.10 mm at infinity and 9.71 mm at closest focus, matching the patent.
- Confirmed aspherical surface 20 coefficients `K`, `A4`, `A6`, `A8`, `A10`, and `A12` match the patent table; `A14` remains zero-filled because the patent table stops at `A12`.

### Phase 3 - Spectral / metadata enrichment

| Element | Field | Before | After | Justification |
|---|---|---|---|---|
| L5 / surface 8 | `dPgF` | omitted | `0.0157` | Patent row 8 lists theta_gF=0.5441; value is derived against the project normal line. |
| L6 / surface 9 | `dPgF` | omitted | `0.0004` | Patent row 9 lists theta_gF=0.5899; value is derived against the project normal line. |
| L7 / surface 12 | `dPgF` | omitted | `-0.0033` | Patent row 12 lists theta_gF=0.5589; value is derived against the project normal line. |
| L8 / surface 13 | `dPgF` | omitted | `-0.0028` | Patent row 13 lists theta_gF=0.5825; value is derived against the project normal line. |

- Existing metadata already records the patent reference, publication year, Canon maker, EF-M mount, APS-C format, design focal length/aperture, and 14 elements / 8 groups.

### Phase 4 - Analysis sync

- Updated the LF/LR doublet prose to include the newly stored derived dPgF values.
- Updated the glass-identification table to note that L8 retains the unmatched 675348 code but now has a derived partial-dispersion value.

### Verification

- `npm run generate:glass-reports` - passed; the unresolved 675348 row remains in `six-digit-glass-codes-missing-sellmeier.generated.md` because no coefficient-backed public catalog match was found.
- `npm run typecheck` - passed.
- `npm run format:check` - passed.
