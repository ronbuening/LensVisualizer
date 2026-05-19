# Audit Log - Fujifilm XF 50-140mm F2.8 R LM OIS WR

Patent: US 2017/0090163 A1, master lens / Table 1

## 2026-05-19 - Missing-Sellmeier queue audit

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L22 / S9 | `glass` | `Barium-flint class (622 532 - no current-catalog match; specialty or internal Fujifilm melt)` | `S-BSM22 (OHARA)` | Patent Table 1 gives nd=1.62230 and vd=53.17. Public OHARA AGF/refractiveindex.info data for S-BSM22 is code 622532 and round-trips the stored pair. |

### Phase 2 - Patent evidence

- Local patent file: `patents/US20170090163A1.pdf` is present but gitignored; rechecked it via local text extraction and cross-checked the public Google Patents HTML.
- Confirmed the master-lens Table 1 row 9 for L22: nd=1.62230, vd=53.17.
- No radius, spacing, zoom-gap, stop, mount, or format edits made.

### Phase 3 - Catalog-search disposition

- Added OHARA S-BSM22 to `glassCatalogData.ts` from the public OHARA Zemax / refractiveindex.info coefficient row.
- This supersedes the earlier "specialty or internal Fujifilm melt" interpretation for L22.

### Phase 4 - Analysis sync

- Updated the glass inventory and L22 note to identify S-BSM22 as the coefficient-backed match.

### Verification

- `npm run generate:glass-reports` - passed.
- `npm run typecheck` - passed.
- `npm run format:check` - passed.
- `npm run lint` - passed.
- `npm run test` - passed, 131 test files / 1666 tests.
