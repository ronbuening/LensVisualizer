# Audit Log — RODENSTOCK GRANDAGON-N 75mm f/6.8

Patent: DE 26 35 415 B1 / DT 26 35 415 B1, Example 1

## 2026-06-29 — e-line glass-label cleanup

### Phase 1 — Glass Corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L1 / S1 | `glass` | `K5 / N-K5 class (Schott; stored patent n_e)` | `Unmatched (K5/N-K5-class crown; DE2635415 lists n_e=1.5246, v_e=59.22)` | Local `patents/DE_2635415_B1.pdf`, page 2, claim/example 1 table lists `n_e/ν_e`; keep off d-line catalog resolver. |
| L2 / S3 | `glass` | `SF10 class (Schott legacy; stored patent n_e)` | `Unmatched (legacy dense flint; DE2635415 lists n_e=1.7343, v_e=28.47)` | The current Schott/Hoya d-line SF10-family rows do not round-trip the stored e-line index; this was the first mismatch row. |
| L3 / S4 | `glass` | `BaF8 / J-BAF8 class (stored patent n_e)` | `Unmatched (BaF8/J-BAF8-class glass; DE2635415 lists n_e=1.6269, v_e=46.71)` | Patent publishes e-line values only; class comparison retained in analysis. |
| L4 / S6 | `glass` | `BaSF4 class (Schott/Sumita equivalent; stored patent n_e)` | `Unmatched (BaSF4-class glass; DE2635415 lists n_e=1.6541, v_e=38.86)` | Patent publishes e-line values only; no melt-identical d-line catalog assertion is safe. |
| L5 / S7 | `glass` | `SF18 / S-TIH18 class (stored patent n_e)` | `Unmatched (legacy dense flint; DE2635415 lists n_e=1.7273, v_e=29.02)` | The current S-TIH18 d-line row does not round-trip the stored e-line index; this was the second mismatch row. |
| L6 / S9 | `glass` | `K5 / N-K5 class (Schott; stored patent n_e)` | `Unmatched (K5/N-K5-class crown; DE2635415 lists n_e=1.5246, v_e=59.22)` | Same patent e-line row as L1. |

### Phase 2 — Retained-Information Audit

- Re-rendered and visually checked `patents/DE_2635415_B1.pdf`; page 2 confirms Example 1 radii, spacings, `n_e`, and `ν_e` values used by the data file.
- No radius, spacing, semi-diameter, focal-length, or focus-gap changes were made in this pass.

### Phase 3 — Spectral / Metadata Enrichment

- No new `nC`, `nF`, `ng`, or `dPgF` data was available in the local patent PDF; it lists `n_e/ν_e` only.

### Phase 4 — Analysis Sync

- Updated the companion analysis so all six element descriptions and the glass-identification table distinguish patent e-line class comparisons from d-line catalog identities.

### Verification

- `npm test -- dispersion` — passed.
- `npm run generate:glass-reports` — passed; `catalog-mismatches.generated.md` now reports 0 mismatches.
- `npm run typecheck && npm run format:check && npm run lint && npm run test` — passed.
