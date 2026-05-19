# Audit Log - Canon FD 50mm f/1.2 L

Patent: US 4,364,644, Example 1

## 2026-05-19 - Glass relabel + catalog-backed rear crown

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L1 / S1 | `glass` | `OHARA S-LAH58 (804466)` | `S-LAH65V (OHARA)` | Patent nd/vd is 1.80400 / 46.6; S-LAH65V is the catalog-consistent 804466 target. |
| L2 / S3A | `glass` | `OHARA S-LAH52 (744447)` | `S-LAM2 (OHARA)` | Patent nd/vd is 1.74400 / 44.7; S-LAM2 is the closest catalog-consistent target. |
| L6 / S9 | `glass` | `OHARA S-LAH64 (883408)` | `TAFD30 (HOYA)` | Patent nd/vd is 1.88300 / 40.8; TAFD30 is exact. |
| L7 / S11 | `glass` | `OHARA S-LAL18 (773496)` | `S-LAH66 (OHARA)` | Patent nd/vd is 1.77250 / 49.6; S-LAH66 is exact. |
| L8 / S13 | `glass` | `OHARA S-BAL35* (623582...)` | `BACD15 (HOYA)` | Patent nd/vd is 1.62299 / 58.2; refractiveindex.info/HOYA BACD15 resolves the former provisional mismatch. |

### Phase 2 - Retained-information audit

- Spot-checked the flagged rows against the US patent table; stored nd/vd values are retained.
- No radius, spacing, or asphere edits were needed in this scoped glass pass.

### Phase 3 - Spectral / metadata enrichment

- Added `BACD15` from refractiveindex.info's HOYA Zemax source.

### Phase 4 - Analysis sync

- Updated the companion analysis glass table and L1/L2/L6/L8 discussion.

### Verification

- `npm test -- dispersion`
- `npm test -- glassRelabelByLensScan`
