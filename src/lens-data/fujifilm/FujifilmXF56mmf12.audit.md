# Audit Log - Fujifilm XF 56mm F1.2 R

Patent: US 2015/0212302 A1, Example 3

## 2026-05-19 - Missing-Sellmeier queue audit

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L15 / S8 | `glass` | `Dense flint (752/251, uncertain)` | `FF8 (HOYA fluor flint)` | Patent Example 3 gives nd=1.75211 and vd=25.1. Public HOYA FF8 data is code 752251 and supplies a coefficient-backed formula-3 match. |
| L16 / S10 | `glass` | `Flint (673/382, uncertain)` | `S-NBH52 (OHARA)` | Patent Example 3 gives nd=1.67300 and vd=38.2. OHARA S-NBH52 is nd=1.672999 / vd=38.15, matching the 673382 code family within normal rounding. |

### Phase 2 - Patent evidence

- Local patent file: `patents/US20150212302A1.pdf` is present but gitignored; rechecked it via local text extraction and cross-checked the public Google Patents HTML.
- Confirmed Example 3 rows for L15 / S8 (nd=1.75211, vd=25.1) and L16 / S10 (nd=1.67300, vd=38.2).
- No radius, spacing, asphere, stop, mount, or format edits made.

### Phase 3 - Catalog-search disposition

- Added HOYA FF8 to `glassCatalogData.ts` from the public HOYA Zemax / refractiveindex.info formula-3 row.
- Added `code6: "673382"` to existing OHARA S-NBH52 so future code annotations resolve directly.

### Phase 4 - Analysis sync

- Updated the L15/L16 narratives and glass summary table to remove the uncertain-code interpretation.

### Verification

- `npm run generate:glass-reports` - passed.
- `npm run typecheck` - passed.
- `npm run format:check` - passed.
- `npm run lint` - passed.
- `npm run test` - passed, 131 test files / 1666 tests.
