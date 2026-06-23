# Audit Log - Schneider-Kreuznach APO-Symmar 100mm f/5.6

Patent: US 6,028,720, Example 2 / Claim 5 (Wartmann & Schauss)

## 2026-06-23 - APD status, N-PK51 code, and SD sanity audit

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L1 / S1 | `apd` | `inferred` | `patent` | US 6,028,720 describes the positive doublet alternative with anomalous-dispersion positive elements; Example 2 / Claim 5 uses the S-PHM53-class positive doublet glass. |
| L3 / S4 | `apd` | `inferred` | `patent` | Patent claim language requires the stop-flanking positive meniscuses to use anomalous partial dispersion glass with ne < 1.63 and ve > 63. |
| L4 / S6 | `glass` | `N-PK51 (Schott)` | `529770 - N-PK51 (Schott phosphate crown; no local Sellmeier)` | Patent Example 2 gives ne=1.5302, ve=76.6; the d-line cross-reference is Schott N-PK51 / code 529770. The local catalog lacks coefficients, so the unbroken code keeps a future upgrade path. |
| L4 / S6 | `apd` | `inferred` | `patent` | Patent claim language requires the stop-flanking positive meniscuses to use anomalous partial dispersion glass. |
| L6 / S10 | `apd` | `inferred` | `patent` | Same positive-doublet APD rationale as L1. |

L2 and L5 remain non-APD N-BALF5 barium light flints. The patent's environmental/high-index constraints are retained in prose; no separate high-index data field exists in the schema, and this embodiment does not use glass above n=1.63.

### Phase 2 - Retained-information audit

- R, d, ne, and ve values were checked against US 6,028,720 Example 2 / Claim 5. The file keeps the existing d-line converted `nd` / `vd` values for runtime consistency.
- The patent does not publish semi-diameters. Rendered page 2 confirms the current SD pattern: large outer doublet rims with tight doublet-to-meniscus gaps near the stop. No SD values were changed.
- Stop placement remains the split of the patent d5 air gap, consistent with the figure.

### Phase 3 - Spectral / metadata enrichment

- The patent does not publish nC, nF, ng, PgF, theta-gF, or dPgF tables. No line-index enrichment was added.
- `npm run generate:glass-reports` reports this lens at 4/6 trusted Sellmeier rows; L3 remains explicit unmatched phosphate-crown APD, and L4 / N-PK51 remains an Abbe row until catalog coefficients are added.

### Phase 4 - Analysis sync

- Updated the L3/L4 and glass-strategy prose to use the corrected e-line 522/695 class note for L3 and N-PK51 code 529770 for L4.

### Verification

- `npm run generate:glass-reports` - passed.
- `npm run typecheck` - passed.
- `npm run format:check` - passed.
- `npm run lint` - passed.
- `npm run test` - passed.

