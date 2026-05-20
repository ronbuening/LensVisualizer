# Audit Log — Laowa 15mm f/4 Wide Angle 1:1 Macro

Patent: CN 205427291 U, Example 2

## 2026-05-20 — Glass relabel audit

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L3 / S5 | `glass` | `H-ZLAF50D (CDGM)` | `S-LAH95 / TAFD25 class (904313)` | Patent Example 2 lists nd=1.90366, vd=31.31; OHARA S-LAH95 code 904313 matches. |
| L5 / S10 | `glass` | `H-ZLAF50D (CDGM)` | `S-LAH95 / TAFD25 class (904313)` | Same patent glass as L3. |
| L6 / S12 | `glass` | `H-FK71 (CDGM)` | `H-QK3L (CDGM)` | Patent Example 2 lists nd=1.48749, vd=70.44; CDGM H-QK3L matches. |
| L9a / S20 | `glass` | `H-ZLAF50D (CDGM)` | `S-LAH95 / TAFD25 class (904313)` | Same patent glass as L3. |
| L9b / S21 | `glass` | `H-FK71 (CDGM)` | `H-QK3L (CDGM)` | Same patent glass as L6. |

### Phase 2 — Retained-information audit

- Confirmed flagged rows against local `patents/CN205427291U.pdf`, Example 2 tables. Stored nd/vd values matched the patent.
- Non-flagged prescription fields were not fully rekeyed in this queue pass.

### Phase 3 — Spectral / metadata enrichment

- No catalog entries added; selected glasses already resolve through the project catalog.

### Phase 4 — Analysis sync

- Updated the analysis special-glass summary, element notes, and glass table for the relabeled rows.

### Verification

- `npm run generate:glass-reports` — passed; lens cleared from both glass mismatch queues.
- `npm run typecheck`, `npm run format:check`, `npm run lint`, and `npm run test` — passed.
