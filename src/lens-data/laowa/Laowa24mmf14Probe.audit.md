# Audit Log — Laowa 24mm f/14 2x Macro Probe

Patent: CN 210573001 U, Example 1

## 2026-05-20 — Glass relabel audit

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L7 / patent row | `glass` | `H-ZF7LA (CDGM)` | `N-SF66 / E-FDS1 class (923209)` | Example 1 lists nd=1.92286, vd=20.88; the previous CDGM label resolves to 805/255, not 923/209. |
| L11 / patent row | `glass` | `H-ZF6 (CDGM)` | `H-ZF7LA (CDGM)` | Example 1 lists nd=1.80518, vd=25.46; CDGM H-ZF7LA matches. |
| L14 / patent row | `glass` | `H-ZF6 (CDGM)` | `H-ZF7LA (CDGM)` | Same patent glass as L11. |
| L19 / patent row | `glass` | `H-ZF7LA (CDGM)` | `N-SF66 / E-FDS1 class (923209)` | Same patent glass as L7. |
| L22 / patent row | `glass` | `H-ZF6 (CDGM)` | `H-ZF7LA (CDGM)` | Same patent glass as L11. |

### Phase 2 — Retained-information audit

- Confirmed flagged rows against local `patents/CN210573001U.pdf`, Example 1 tables. Stored nd/vd values matched the patent.
- Non-flagged prescription fields were not fully rekeyed in this queue pass.

### Phase 3 — Spectral / metadata enrichment

- No catalog entries added; selected labels already resolve or fall through through known code-based classes.

### Phase 4 — Analysis sync

- Updated the analysis glass summary and affected element notes for the swapped 923/209 and 805/255 classes.

### Verification

- `npm run generate:glass-reports` — passed; lens cleared from both glass mismatch queues.
- `npm run typecheck`, `npm run format:check`, `npm run lint`, and `npm run test` — passed.
