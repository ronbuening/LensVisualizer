# Audit Log - NIKON PC NIKKOR 19mm f/4E ED

Patent: JP 2017-161685 A, Example 1

## 2026-05-19 - Glass relabel audit

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L15 / S9, L19 / S15 | `glass` | `NBFD3 (HOYA)` | `E-FD2 (HOYA)` | Patent rows 9 and 15 list nd=1.64769, vd=33.84; E-FD2 round-trips the stored pair, while NBFD3 does not. |
| L17 / S12, L26 / S27 | `glass` | `TAFD25 (HOYA)` | `S-LAH55V (OHARA)` | Patent rows 12 and 27 list nd=1.83481, vd=42.72; S-LAH55V matches the stored pair. |
| L21 / S18 | `glass` | `S-TIM28 (OHARA)` | `S-FTM16 (OHARA)` | Patent row 18 lists nd=1.59270, vd=35.44, theta_gF=0.5926; S-FTM16 is the catalog match. |
| L23 / S21 | `glass` | `S-NSL5 (OHARA)` | `S-NSL36 (OHARA)` | Patent row 21 lists nd=1.51742, vd=52.15; S-NSL36 is the closer catalog relabel. |
| L24 / S23 | `glass` | `TAFD55 (HOYA)` | `TAFD35 (HOYA)` | Patent row 23 lists nd=1.91082, vd=35.25; TAFD35 round-trips the stored pair. |

### Phase 2 - Retained-information audit

- Checked the flagged rows against Example 1 surface data; stored nd/vd values match the patent table.
- Existing surface radii, thicknesses, variable gap notes, and asphere narrative were already aligned with Example 1 in the data and analysis files.

### Phase 3 - Spectral / metadata enrichment

- Retained existing theta_gF/APD annotations for patent-listed anomalous-dispersion rows.
- No new top-level metadata was needed; the file already records patent year, element count, group count, and focus behavior.

### Phase 4 - Analysis sync

- Updated the analysis file's element narratives and glass palette for E-FD2, S-LAH55V, S-FTM16, S-NSL36, and TAFD35.

### Verification

- `npm test -- glassRelabelByLensScan` passed; this lens no longer appears in the relabel queue.
- `npm run typecheck` passed.
- `npm run test` passed.
