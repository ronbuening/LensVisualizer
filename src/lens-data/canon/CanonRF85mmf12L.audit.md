# Audit Log — Canon RF 85mm f/1.2L USM

Patent: US 2020/0012073 A1, Example 1

## 2026-05-19 — Glass relabel audit

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L10 / 16 | `glass` | `S-LAH79 (OHARA)` | `S-LAH98 (OHARA)` | Patent table row 16 lists nd=1.95375, vd=32.3; S-LAH98 matches the Ohara-family code 954323. |
| L11 / 18 | `glass` | `S-LAH79 (OHARA)` | `S-LAH98 (OHARA)` | Patent table row 18 repeats nd=1.95375, vd=32.3; same catalog match as L10. |
| L12 / 19 | `glass` | `S-TIM22 (OHARA)` | `S-TIM2 (OHARA)` | Patent table row 19 lists nd=1.62004, vd=36.3; S-TIM2 round-trips this pair. |
| L13 / 21 | `glass` | `S-TIM27 (OHARA)` | `S-TIM28 (OHARA)` | Patent table row 21 lists nd=1.68893, vd=31.1; S-TIM28 is the Ohara-family match. |
| L14 / 23 | `glass` | `S-LAH64 (OHARA)` | `TAFD37A (HOYA)` | Patent table row 23 lists nd=1.90043, vd=37.4; TAFD37A has the matching 900374 code-family catalog entry. |

### Phase 2 — Retained-information audit

- Checked the flagged prescription rows against the patent table; stored surface values match the published rows.
- No geometry, asphere, variable-gap, or metadata edits made.

### Phase 3 — Spectral / metadata enrichment

- No additional line-index data found for the relabeled rows.

### Phase 4 — Analysis sync

- Updated the complete glass table and L13 prose to match the relabeled elements.

### Verification

- `npm test -- dispersion` — passed.
- `npm run typecheck` — passed.
- `npm run generate:glass-reports` — passed; lens removed from the relabel-by-lens queue.
