# Audit Log - Canon Serenar 85mm f/1.5

Patent: US 2,645,973, Example 1
Catalog version: local working tree, 2026-05-19

## 2026-05-19 - Full patent audit and glass relabel

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L2 / 3 | `glass` | `SK family (639/555, unconfirmed)` | `K-SK18 (Sumita)` | Patent Example 1 lists nd=1.6385, vd=55.5. Sumita K-SK18 publishes code 639555, nd=1.63854, vd=55.5 with public coefficients. |
| L4 / 5 | `glass` | `SF8 (Schott)` | `S-TIM28 (OHARA)` | Patent Example 1 lists nd=1.6889, vd=31.1. OHARA S-TIM28 publishes code 689311 and matches within patent rounding; current Schott N-SF8 has code 689313 and a different Abbe value. |
| L7 / 11 | `glass` | `SK family (639/555, unconfirmed)` | `K-SK18 (Sumita)` | The rear collector repeats the same nd/vd pair as L2; same public catalog match. |

### Phase 2 - Retained-information audit

- Checked Example 1 normalized surface rows against the data file after the documented 85x scale factor. Stored radii, thicknesses, glass constants, and back focus match the patent table except for the intentional widened `d2` clearance note already documented in the file.
- Confirmed the patent publishes no effective diameters or aspherical coefficients; semi-diameters and `asph: {}` remain project-authored.
- Confirmed the stop split remains an inferred layout choice because the patent does not specify the iris location inside the air gap.

### Phase 3 - Spectral / metadata enrichment

- Added Sumita K-SK18 to the glass catalog from refractiveindex.info's Sumita Zemax data, unlocking Sellmeier/polynomial dispersion for the repeated 639555 row.

### Phase 4 - Analysis sync

- Updated the L2/L7 prose, L4 glass note, glass summary table, and source note for the public coefficient-backed matches.

### Verification

- `npm run generate:glass-reports` — passed; Serenar 85mm is absent from the current six-digit missing-Sellmeier, unresolved-glass, catalog-mismatch, and relabel-by-lens queues for the corrected rows.
- `npm run typecheck` — passed.
- `npm run format:check` — passed.
- `npm run test` — passed (131 files, 1666 tests; expected error-boundary console output only).
