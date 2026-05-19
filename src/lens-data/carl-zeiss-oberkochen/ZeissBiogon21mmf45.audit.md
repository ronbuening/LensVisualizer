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
