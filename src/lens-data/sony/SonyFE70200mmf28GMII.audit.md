# Audit Log — Sony FE 70-200mm F2.8 GM OSS II

Patent: JP 2023-039817 A, Example 2

## 2026-05-20 — Glass relabel audit

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L32 / S10 | `glass` | `TAFD30 (HOYA)` | `863248 — ultra-dense flint` | Patent Table 6 lists nd=1.86290, vd=24.8; no unique public coefficient-backed match found. |
| L52 / S17 | `glass` | `TAFD30 (HOYA)` | `863248 — ultra-dense flint` | Same patent row value as L32. |
| L53 / S19 | `glass` | `TAFD30 (HOYA)` | `863248 — ultra-dense flint` | Same patent row value as L32. |
| L54 / S20 | `glass` | `S-BAL41 (OHARA)` | `585594 — barium crown` | Patent Table 6 lists nd=1.58547, vd=59.4; catalog candidates were not unique. |
| L55 / S22A | `glass` | `S-BAL41 (OHARA)` | `585594 — barium crown` | Same patent row value as L54. |
| L61 / S24 | `glass` | `S-NPH53 (OHARA)` | `933209 — ultra-dense flint` | Patent Table 6 lists nd=1.93323, vd=20.9; no unique public coefficient-backed match found. |
| L62 / S25 | `glass` | `S-TIM22 (OHARA)` | `658397 — short flint` | Patent Table 6 lists nd=1.65803, vd=39.7; candidates were ambiguous. |

### Phase 2 — Retained-information audit

- Confirmed the flagged glass rows against local `patents/JP2023039817A.pdf`, Table 6. Stored nd/vd values matched the patent rows, so only labels changed.
- Non-flagged prescription fields were not fully rekeyed in this queue pass.

### Phase 3 — Spectral / metadata enrichment

- No catalog entries added. Patent-code labels preserve future upgrade paths for unsourced glasses.

### Phase 4 — Analysis sync

- Updated the companion analysis file to remove unsupported exact-match claims for L32/L52/L53, L54/L55, L61, and L62.

### Verification

- `npm run generate:glass-reports` — passed; lens cleared from `catalog-mismatches.generated.md` and `glass-relabel-by-lens.generated.md`.
- `npm run typecheck`, `npm run format:check`, `npm run lint`, and `npm run test` — passed.
