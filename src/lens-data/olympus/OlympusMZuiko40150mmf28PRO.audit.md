# Audit Log - OLYMPUS M.ZUIKO DIGITAL ED 40-150mm f/2.8 PRO

Patent: US 2015/0168697 A1, Example 4

## 2026-05-19 - Glass relabel audit

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L1 / S1 | `glass` | `S-TIH18 (OHARA)` | `S-TIH23 (OHARA)` | Example 4 row 1 lists nd=1.78470, vd=26.29; S-TIH23 matches the stored pair. |
| L4 / S6 | `glass` | `S-TIH4 (OHARA)` | `S-NPH1 (OHARA)` | Example 4 row 6 lists nd=1.80810, vd=22.76; S-NPH1 round-trips the patent pair. |
| L6 / S8 | `glass` | `S-BAH27 (OHARA)` | `S-NBH55 (OHARA)` | Example 4 row 8 lists nd=1.80000, vd=29.84; S-NBH55 is the catalog match. |
| L7 / S10 | `glass` | `S-LAM66 (OHARA)` | `S-LAH55V (OHARA)` | Example 4 row 10 lists nd=1.83481, vd=42.73; S-LAH55V matches. |
| L10 / S16 | `glass` | `S-BSM81 (OHARA)` | `FCD515 (HOYA)` | Example 4 row 16 lists nd=1.59282, vd=68.63; FCD515 round-trips the stored pair. |
| L13 / S21 | `glass` | `S-NBH53V (OHARA)` | `S-LAM60 (OHARA)` | Example 4 row 21 lists nd=1.74320, vd=49.29; S-LAM60 is the closest catalog match. |
| L14 / S23 | `glass` | `S-TIM25 (OHARA)` | `S-TIM2 (OHARA)` | Example 4 row 23 lists nd=1.62004, vd=36.26; S-TIM2 matches. |

### Phase 2 - Retained-information audit

- Checked the flagged rows against Example 4 surface data; stored nd/vd values match the patent.
- Existing zoom/focus variable gap narrative and asphere sections remain consistent with the patent text.

### Phase 3 - Spectral / metadata enrichment

- No additional line-index or dPgF data was present in the extracted Example 4 table for these rows.
- Top-level patent metadata was already present.

### Phase 4 - Analysis sync

- Updated element narratives and glass summary rows for the corrected labels.

### Verification

- `npm test -- glassRelabelByLensScan` passed; this lens no longer appears in the relabel queue.
- `npm run typecheck` passed.
- `npm run test` passed.
