# Audit Log - Zeiss Biogon 21mm f/4.5

Patent: US 2,721,499, Example 2
Catalog version: local working tree, 2026-05-19

## 2026-05-19 - Full patent audit and code-only source recheck

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L1 / 1 | `glass` | `BK crown (504/667)` | retained | Patent Example 2 lists nd=1.50380, vd=66.7. Checked public catalog sources did not provide a coefficient-backed exact match for code 504667. |
| L4 / 6 | `glass` | `SK7 dense crown (607/595)` | `K-SK7 (Sumita)` | Patent Example 2 lists nd=1.60739, vd=59.5. Sumita K-SK7 publishes code 607595 with public coefficients and matches within patent rounding. |
| L5 / 8 | `glass` | `BaK/SK crown (561/575)` | retained | Patent Example 2 lists nd=1.56093, vd=57.5. No coefficient-backed exact public match was found for code 561575. |
| L6 / 9 | `glass` | `SK-type dense crown (625/533)` | retained | Patent Example 2 lists nd=1.62500, vd=53.3. Public catalog candidates are only family-near, not exact enough to relabel. |
| L8 / 12 | `glass` | `LaK/SK crown (642/581)` | retained | Patent Example 2 lists nd=1.64200, vd=58.1. No coefficient-backed exact public match was found for code 642581. |

### Phase 2 - Retained-information audit

- Rechecked the Example 2 patent table against the data file after the documented 0.21x production scaling. Stored radii, thicknesses, and glass constants match the patent table.
- Confirmed the patent publishes no effective diameters or aspherical coefficients; semi-diameters and `asph: {}` remain project-authored.

### Phase 3 - Spectral / metadata enrichment

- Added Sumita K-SK7 to the catalog from refractiveindex.info's Sumita Zemax data, unlocking Sellmeier/polynomial dispersion for the 607595 row.

### Phase 4 - Analysis sync

- Updated the L4 table/prose to use K-SK7 while leaving the remaining unmatched legacy glass codes unresolved.

### Verification

- `npm run generate:glass-reports` — passed; the SK7/607595 row is cleared, while L1 / 504667, L5 / 561575, L6 / 625533, and L8 / 642581 remain in the six-digit missing-Sellmeier report as unresolved legacy codes.
- `npm run typecheck` — passed.
- `npm run format:check` — passed.
- `npm run test` — passed (131 files, 1666 tests; expected error-boundary console output only).

## 2026-06-25 - APD, high-index, and semi-diameter audit

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| All elements | `glass`, `nd`, `vd` | 2026-05-19 audited labels and patent constants | Retained | US 2,721,499 Example 2 was rechecked against the current data file. The previous K-SK7 correction remains valid; the remaining legacy-code rows still lack coefficient-backed exact matches. |

### Phase 2 - Retained-information audit

- Rechecked Example 2 prescription values against the x0.21 stored scale. No radii, spacing, or glass-constant edits were needed.
- Confirmed again that the patent provides no clear apertures or semi-diameters. Stored SDs remain figure- and ray-trace-derived values, as documented in the analysis.
- The known Example 2 paraxial EFL discrepancy remains a patent/table property already documented in the analysis and data comments.

### Phase 3 - Spectral / metadata enrichment

- `apd: false` remains appropriate for all elements. The patent provides no line-index or partial-dispersion information.
- High-index crown status in the rear meniscus and cemented interface remains documented in the glass labels and analysis prose.

### Phase 4 - Analysis sync

- No analysis prose change was required for this pass.

### Verification

- `npm run generate:glass-reports` - passed (7 files, 7 tests); generated report state retained.
- `npm run typecheck` - passed.
- `npm run format:check` - passed.
- `npm run test -- __tests__/src/lens-data/lensDataTyping.test.ts __tests__/src/optics/validateLensData.test.ts __tests__/src/optics/buildLens.test.ts` - passed (3 files, 143 tests).
- `npm run test` - failed outside this audit's edits: stale/generated route metadata is missing Rodenstock lens routes, and the existing Sonnar 50/1.5 skew-ray chromatic assertion differs by 0.0011856 mm.
