# Audit Log — Laowa 65mm f/2.8 2x Ultra Macro APO

Patent: CN 110161666A, Example 2

## 2026-05-20 — Glass relabel audit

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L1 | `glass` | `H-QK3L (CDGM)` | `S-PHM52 (OHARA)` | Example 2 lists nd=1.61800, vd=63.39; S-PHM52 matches the catalog-backed pair. |
| L5 | `glass` | `H-ZF6 (CDGM)` | `H-ZF7LA (CDGM)` | Example 2 lists nd=1.80518, vd=25.46; CDGM H-ZF7LA matches. |
| L7 | `glass` | `H-ZLAF68C (CDGM)` | `H-ZLAF50D (CDGM)` | Example 2 lists nd=1.80420, vd=46.50; CDGM H-ZLAF50D matches. |
| L11 | `glass` | `H-ZF4A (CDGM)` | `S-TIH14 (OHARA)` | Example 2 lists nd=1.76182, vd=26.61; S-TIH14 is the catalog-backed match. |
| L12 | `glass` | `H-ZLAF50D (CDGM)` | `S-LAH95 / TAFD25 class (904313)` | Example 2 lists nd=1.90366, vd=31.31; S-LAH95/TAFD25 class matches. |

### Phase 2 — Retained-information audit

- Confirmed flagged rows against local `patents/CN110161666A.pdf`, Example 2 table. Stored nd/vd values matched the patent.
- Non-flagged prescription fields were not fully rekeyed in this queue pass.

### Phase 3 — Spectral / metadata enrichment

- No catalog entries added; selected matches already resolve through the project catalog.

### Phase 4 — Analysis sync

- Updated affected element notes and the glass identification table.

### Verification

- `npm run generate:glass-reports` — passed; lens cleared from both glass mismatch queues.
- `npm run typecheck`, `npm run format:check`, `npm run lint`, and `npm run test` — passed.
