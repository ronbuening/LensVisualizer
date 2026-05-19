# Audit Log — Canon RF 15-35mm f/2.8 L IS USM

Patent: US 2020/0257181 A1, Numerical Example 1

## 2026-05-19 — Glass relabel audit

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L2 / 3A | `glass` | `S-LAH65V (OHARA)` | `L-LAH85V (OHARA)` | Patent Table 1 row 3 lists nd=1.85400, vd=40.4; catalog L-LAH85V matches, S-LAH65V does not. |
| L4 / 7 | `glass` | `S-NPH1 (OHARA)` | `S-NBH56 (OHARA)` | Patent Table 1 row 7 lists nd=1.85478, vd=24.8; S-NBH56 is the source-backed catalog match. |
| L8 / 15 | `glass` | `TAFD25 (HOYA)` | `TAFD40 (HOYA)` | Patent Table 1 row 15 lists nd=2.00069, vd=25.5; TAFD40 round-trips this pair. |
| L14 / 25 | `glass` | `TAFD45 (HOYA)` | `TAFD65 (HOYA)` | Patent Table 1 row 25 lists nd=2.05090, vd=26.9; TAFD65 round-trips this pair. |
| L15 / 27A | `glass` | `S-LAH65V (OHARA)` | `L-LAH85V (OHARA)` | Patent Table 1 row 27 lists nd=1.85400, vd=40.4; same glass as L2. |

### Phase 2 — Retained-information audit

- Checked the flagged prescription rows against patent Table 1; stored `R`, `d`, `nd`, and surface ownership already match the table, accounting for the documented omitted flare stop.
- No semi-diameter or asphere edits made.

### Phase 3 — Spectral / metadata enrichment

- No new patent line-index data found for these rows.
- Relabels use existing catalog entries sourced from manufacturer/Zemax data already recorded in `glassCatalogData.ts`.

### Phase 4 — Analysis sync

- Updated the companion analysis glass table, element prose, and catalog source list for L2, L4, L8, L14, and L15.

### Verification

- `npm test -- dispersion` — passed.
- `npm run typecheck` — passed.
- `npm run generate:glass-reports` — passed; lens removed from the relabel-by-lens queue.
