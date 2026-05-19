# Audit Log — Leica APO-Vario-Elmarit-SL 90-280 mm f/2.8-4

Patent: JP 2016-139125 A, Numerical Example 1

## 2026-05-19 — Glass relabel audit

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L1 / 1 | `glass` | `S-LAH79 (OHARA)` | `S-LAH95 (OHARA)` | Patent Data 1 row 1 lists nd=1.90366, vd=31.3; S-LAH95 matches the 904313 code family. |
| L14 / 25 | `glass` | `S-TIM28 (OHARA)` | `NBFD15 (HOYA)` | Patent Data 1 row 25 lists nd=1.80610, vd=33.3; NBFD15 round-trips the pair. |
| L19 / 34 | `glass` | `S-TIH13 (OHARA)` | `S-TIH6 (OHARA)` | Patent Data 1 row 34 lists nd=1.80518, vd=25.5; S-TIH6 is the Ohara-family catalog match. |
| L20 / 35 | `glass` | `S-NBM51 (OHARA)` | `E-FL5 (HOYA)` | Patent Data 1 row 35 lists nd=1.58144, vd=40.9; E-FL5 matches the 581409 code-family row. |
| L22 / 39 | `glass` | `S-NBH5 (OHARA)` | `S-BAH28 (OHARA)` | Patent Data 1 row 39 lists nd=1.72342, vd=38.0; S-BAH28 round-trips the pair. |

### Phase 2 — Retained-information audit

- Checked the flagged Data 1 rows against the patent; stored radii, thicknesses, and `nd/vd` match those rows.
- No semi-diameter edits made; the data file already documents estimated semi-diameters because the patent lacks them.

### Phase 3 — Spectral / metadata enrichment

- No additional line-index data found for these relabeled rows.

### Phase 4 — Analysis sync

- Updated element descriptions, glass table rows, and the chromatic strategy summary for the relabeled glasses.

### Verification

- `npm test -- dispersion` — passed.
- `npm run typecheck` — passed.
- `npm run generate:glass-reports` — passed; lens removed from the relabel-by-lens queue.
