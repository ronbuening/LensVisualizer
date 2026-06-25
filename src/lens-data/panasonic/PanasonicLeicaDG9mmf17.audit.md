# Audit Log — Panasonic Leica DG Summilux 9mm f/1.7 ASPH

Patent: US 2023/0367186 A1, Example 1

## 2026-05-20 — Glass relabel audit

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L2 / S3A | `glass` | `L-BSL7 (OHARA)` | `534556 — moldable crown` | Patent Table 1A lists nd=1.53380, vd=55.6; no unique public match found. |
| L4 / S7 | `glass` | `S-PHM52 (OHARA)` | `J-PSKH4 (Hikari)` | Patent Table 1A lists nd=1.59349, vd=67.0; Hikari catalog data matches. |
| L5 / S8 | `glass` | `S-TIM35 (OHARA)` | `S-FTM16 (OHARA)` | Patent Table 1A lists nd=1.59270, vd=35.4; OHARA S-FTM16 matches. |
| L9 / S15A | `glass` | `L-LAL13 (OHARA)` | `586595 — barium crown` | Patent Table 1A lists nd=1.58575, vd=59.5; no unique public match found. |
| L10 / S17 | `glass` | `S-NPH2 (OHARA)` | `FDS18 (HOYA)` | Patent Table 1A lists nd=1.94595, vd=18.0; FDS18 class match selected. |

### Phase 2 — Retained-information audit

- Confirmed flagged rows against local `patents/US20230367186A1.pdf`, Table 1A. Stored nd/vd values matched the patent.
- Non-flagged prescription fields were not fully rekeyed in this queue pass.

### Phase 3 — Spectral / metadata enrichment

- No catalog entries added; selected catalog-backed labels were already present in the project catalog.

### Phase 4 — Analysis sync

- Updated affected element narratives, glass table, chromatic-correction prose, asphere list, and source note.

### Verification

- `npm run generate:glass-reports` — passed; lens cleared from both glass mismatch queues.
- `npm run typecheck`, `npm run format:check`, `npm run lint`, and `npm run test` — passed.

## 2026-06-24 - Systematic patent-table audit

### Patent evidence

- Rendered `patents/US20230367186A1.pdf` pages containing Example 1 Tables 1A-1C because the PDF is image-only.
- Confirmed the prescription, focus variables (`d19` 1.2010 -> 1.6129 and `d23` 5.1035 -> 4.6917), and aspherical data against the current data file.
- The patent table does not publish semi-diameters or effective diameters.

### Updates

| Area | Before | After | Disposition |
|---|---|---|---|
| L9 glass | `586595` patent-code barium crown | `P-SK57Q1 (Schott, 586595)` | Current catalog has a coefficient-backed Schott row for the code. |
| L2 glass | `534556` patent-code moldable crown | unchanged | No unique coefficient-backed public match found. |
| APD | S-FPL51 rows inferred | unchanged | Patent lists nd/vd only; APD remains catalog-inferred. |
| High-index status | L7 UHR, L10 high-index focus doublet row | unchanged | Patent nd values support the existing roles. |
| SDs | ray-trace-derived estimates | unchanged | No patent clear-aperture column; existing proportions match the patent drawing envelope. |
