# Audit Log — Sony FE 24-70mm f/2.8 GM II

Patent: WO 2023/181666 A1, Example 4

## 2026-05-20 — Glass relabel audit

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L22 / S8A | `glass` | `S-LAH52 class (OHARA)` | `770494 — lanthanum crown` | Patent Table 16 lists nd=1.77002, vd=49.4; no unique public match found. |
| L32 / S18 | `glass` | `S-FPM2 (OHARA)` | `FCD100 (HOYA)` | Patent Table 16 lists nd=1.43700, vd=95.1; HOYA cross-reference supports FCD100. |
| L33 / S19 | `glass` | `S-LAH52Q (OHARA)` | `S-LAH66 (OHARA)` | Patent Table 16 lists nd=1.77250, vd=49.6; OHARA S-LAH66 datasheet matches. |
| L41 / S22 | `glass` | `S-NPH5 (OHARA)` | `S-LAH99 (OHARA)` | Patent Table 16 lists nd=2.00100, vd=29.1; OHARA S-LAH99 is the catalog-backed match. |
| L43 / S25 | `glass` | `S-FPM2 (OHARA)` | `FCD100 (HOYA)` | Same patent nd/vd pair as L32. |
| L71 / S34 | `glass` | `S-NPH4 (OHARA)` | `FDS18 (HOYA)` | Patent Table 16 lists nd=1.94595, vd=18.0; HOYA class match selected. |

### Phase 2 — Retained-information audit

- Confirmed flagged rows against local `patents/WO2023181666A1.pdf`, Table 16. Stored nd/vd values matched the patent.
- Non-flagged prescription fields were not fully rekeyed in this queue pass.

### Phase 3 — Spectral / metadata enrichment

- No new catalog entries needed; selected matches already resolve through the project catalog.

### Phase 4 — Analysis sync

- Updated element narratives and glass identification table for L22, L32, L33, L41, L43, and L71.

### Verification

- `npm run generate:glass-reports` — passed; lens cleared from both glass mismatch queues.
- `npm run typecheck`, `npm run format:check`, `npm run lint`, and `npm run test` — passed.
