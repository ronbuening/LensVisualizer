# Audit Log — Leica Summilux 28 mm f/1.7 ASPH.

Patent: US 2016/0266350 A1, Example 1

## 2026-05-20 — Glass relabel audit

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L1 / S1 | `glass` | `S-BAL42 (OHARA)` | `S-TIL26 (OHARA)` | Patent Example 1 lists nd=1.56732, vd=42.8; S-TIL26 matches. |
| L4 / S7 | `glass` | `L-LAM60 (OHARA)` | `FCD515 (HOYA)` | Patent Example 1 lists nd=1.59282, vd=68.6; FCD515 matches. |
| L5 / S9 | `glass` | `S-LAH79 (OHARA)` | `TAFD35 (HOYA)` | Patent Example 1 lists nd=1.91082, vd=35.2; TAFD35 matches. |
| L6 / S12A | `glass` | `S-LAH63 (OHARA)` | `877370 — high-index lanthanum glass` | Patent Example 1 lists nd=1.87722, vd=37.0; no unique public match found. |
| L8 / S15 | `glass` | `S-NBH55 (OHARA)` | `S-TIH13 (OHARA)` | Patent Example 1 lists nd=1.74077, vd=27.8; S-TIH13 matches. |

### Phase 2 — Retained-information audit

- Confirmed flagged nd/vd rows against local `patents/US20160266350A1.pdf`. Stored nd/vd values matched the patent.
- Non-flagged prescription fields were not fully rekeyed in this queue pass.

### Phase 3 — Spectral / metadata enrichment

- No catalog entries added; selected matches already resolve through the project catalog, except L6's patent-code fallback.

### Phase 4 — Analysis sync

- Updated the companion analysis entries for L1, L4, L5, and L8.

### Verification

- `npm run generate:glass-reports` — passed; lens cleared from both glass mismatch queues.
- `npm run typecheck`, `npm run format:check`, `npm run lint`, and `npm run test` — passed.

## 2026-06-24 — Folder audit recheck

- Rechecked local `patents/US20160266350A1.pdf` text for Example 1 against the current data file.
- Retained L6 as `877370` high-index lanthanum glass. The patent row is nd=1.87722, vd=37.0 and still lacks a verified coefficient-backed public match.
- Rechecked APD status: the patent gives no partial-dispersion data supporting APD flags for this Summilux-Q design, so all elements remain non-APD.
- No patent clear-aperture or semi-diameter table was found. Existing SDs remain visualization estimates constrained by f/1.7 ray envelopes, image height, and the drawing proportions.
