# Audit Log - PENTAX-DA* 50-135mm F2.8 ED [IF] SDM

Patent: US 7,289,274 B1, Embodiment 5 / Table 5

## 2026-05-19 - Glass relabel audit

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L1 / S1 | `glass` | `S-LAH66 (OHARA)` | `S-LAM2 (OHARA)` | Table 5 row 1 lists nd=1.74400, vd=44.8; S-LAM2 round-trips the stored pair. |
| L4 / S6, L12 / S20 | `glass` | `S-TIH53 (OHARA)` | `S-TIH6 (OHARA)` | Table 5 rows 6 and 20 list nd=1.80518, vd=25.4; S-TIH6 matches. |
| L10 / S17, L13 / S22 | `glass` | `S-LAH64 (OHARA)` | `S-LAH66 (OHARA)` | Table 5 rows 17 and 22 list nd=1.77250, vd=49.6; S-LAH66 is the catalog match. |
| L17 / S29 | `glass` | `S-LAH59 (OHARA)` | `S-LAM66 (OHARA)` | Table 5 row 29 lists nd=1.80100, vd=35.0; S-LAM66 matches. |

### Phase 2 - Retained-information audit

- Checked the flagged row constants against Table 5; stored nd/vd values match the patent table.
- Existing all-spherical note, zoom mechanism, and focus-group description remain consistent with the patent.

### Phase 3 - Spectral / metadata enrichment

- No additional spectral line-index data was present in Table 5.
- Existing patent year, mount/format, element count, and group count were already populated.

### Phase 4 - Analysis sync

- Updated element narratives, glass palette rows, and source catalog references for the corrected labels.

### Verification

- `npm test -- glassRelabelByLensScan` passed; this lens no longer appears in the relabel queue.
- `npm run typecheck` passed.
- `npm run test` passed.
