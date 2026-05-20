# Audit Log — Nikon AF-S NIKKOR 14-24mm f/2.8G ED

Patent: US 7,359,125 B2, Example 1

## 2026-05-20 — Glass relabel audit

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L2 / S3 | `glass` | `S-BAH11 (OHARA)` | `LAC12 (HOYA)` | Patent Table 1 lists nd=1.67790, vd=55.34; LAC12 matches. |
| L3 / S5 | `glass` | `S-LAH53 (OHARA)` | `741527 — lanthanum crown` | Patent Table 1 lists nd=1.74100, vd=52.67; no unique public match found. |
| L4 / S6 | `glass` | `S-TIM25 (OHARA)` | `554381 — dense flint` | Patent Table 1 lists nd=1.55389, vd=38.09; no unique public match found. |
| L8 / S13 | `glass` | `S-BSM81 (OHARA)` | `624470 — barium flint` | Patent Table 1 lists nd=1.62374, vd=47.04; no unique public match found. |
| L11 / S20 | `glass` | `S-BAL42 (OHARA)` | `S-BAL2 (OHARA)` | Patent Table 1 lists nd=1.57099, vd=50.80; S-BAL2 matches. |

### Phase 2 — Retained-information audit

- Confirmed flagged rows against local `patents/US7359125.pdf`, Table 1 text extraction. Stored nd/vd values matched the patent.
- Non-flagged prescription fields were not fully rekeyed in this queue pass.

### Phase 3 — Spectral / metadata enrichment

- No catalog entries added. Patent-code labels preserve future upgrade paths for the unmatched rows.

### Phase 4 — Analysis sync

- Updated the companion analysis notes and glass table for the relabeled rows.

### Verification

- `npm run generate:glass-reports` — passed; lens cleared from both glass mismatch queues.
- `npm run typecheck`, `npm run format:check`, `npm run lint`, and `npm run test` — passed.
