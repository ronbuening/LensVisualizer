# Glass Catalog 2026-06-29

## Summary
- Expanded source-backed Schott glass coverage and cleaned up e-line-only class labels that should not resolve through d-line catalog entries.
- Refactored the monolithic glass catalog into vendor shards while preserving the stable aggregate `RAW_CATALOG` order.

## Changes
- Added 10 Schott catalog entries and updated generated glass reports.
- Marked several Leica, Rodenstock, and Sony e-line/class-only annotations as explicit unmatched rows.
- Added structured alias records, duplicate six-digit precedence coverage, and shared spectral-line constants.
- Added a 2026-06-29 changelog entry for the user-visible chromatic coverage improvement.

## Verification
- `npm test -- dispersion` - passed.
- `npm run typecheck` - passed.
- `npm run format:check` - passed.
- `npm run lint` - passed.
- `npm run test` - passed.
- `npm run generate:glass-reports` - passed; no additional tracked report changes.

## Follow-ups
- None known.
