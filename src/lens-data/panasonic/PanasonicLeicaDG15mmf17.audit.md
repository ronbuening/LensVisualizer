# Audit Log — Panasonic Leica DG Summilux 15mm f/1.7 ASPH

Patent: US 2015/0268449 A1, Numerical Example 2

## 2026-05-20 — Glass relabel audit

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L2 / S3A | `glass` | `S-TIM2 class` | `585417 — light flint` | Patent Table 6 lists nd=1.58542, vd=41.7; no unique public match found. |
| L3 / S5 | `glass` | `L-LAH53 (OHARA)` | `882408 — high-index lanthanum glass` | Patent Table 6 lists nd=1.88234, vd=40.8; close candidates were not unique. |
| L4 / S6 | `glass` | `S-NPH5 class` | `754260 — dense flint` | Patent Table 6 lists nd=1.75409, vd=26.0. |
| L5 / S8 | `glass` | `TAFD33 (HOYA)` | `916364 — high-index lanthanum glass` | Patent Table 6 lists nd=1.91597, vd=36.4. |
| L6 / S11 | `glass` | `NbFD15 class` | `786275 — dense flint` | Patent Table 6 lists nd=1.78630, vd=27.5. |
| L7 / S12 | `glass` | `TAF5 (HOYA)` | `769497 — lanthanum crown` | Patent Table 6 lists nd=1.76864, vd=49.7. |

### Phase 2 — Retained-information audit

- Confirmed flagged rows against local `patents/US_2015268449_A1.pdf`, Table 6. Stored nd/vd values matched the patent.
- Non-flagged prescription fields were not fully rekeyed in this queue pass.

### Phase 3 — Spectral / metadata enrichment

- No catalog entries added; public catalog/source checks did not support unique vendor labels for the changed rows.

### Phase 4 — Analysis sync

- Updated the analysis narrative, glass table, manufacturing notes, and source note to use patent-code labels instead of unsupported vendor claims.

### Verification

- `npm run generate:glass-reports` — passed; lens cleared from both glass mismatch queues.
- `npm run typecheck`, `npm run format:check`, `npm run lint`, and `npm run test` — passed.

## 2026-06-24 - Systematic patent-table audit

### Patent evidence

- Rendered `patents/US_2015268449_A1.pdf` pages containing Numerical Example 2 / Tables 6-10 because the OCR text is incomplete.
- Confirmed the prescription, focus variables, aspherical coefficients, and element focal-length table against the current data file.
- The patent table does not publish semi-diameters or effective diameters.

### Updates

| Area | Before | After | Disposition |
|---|---|---|---|
| L1 APD | `apd: false` | `apd: "inferred"` | FPL51-family ED fluorophosphate row; patent lists nd/vd only. |
| Glass labels | May code-backed relabels | unchanged | L2-L7 remain patent-code labels where public catalog candidates are not unique enough. |
| High-index status | L5 ultra-high-index role | unchanged | Patent nd = 1.91597 supports the UHR/Petzval-controller note. |
| SDs | ray-trace-derived estimates | unchanged | No patent clear-aperture column; current front/rear proportions remain visually plausible. |
