# Audit Log - Zeiss Distagon T* 35mm f/1.4

Patent: US 3,915,558, Example 8
Catalog version: local working tree, 2026-05-19

## 2026-05-19 - Full patent audit and glass relabel

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L1 / 1 | `glass` | `Barium flint 583/465` | `BAF3 (HIKARI)` | Patent Example 8 lists nd=1.5827, vd=46.5. Hikari BAF3 publishes code 583465, nd=1.58267, vd=46.476929 with public coefficients. |

### Phase 2 - Retained-information audit

- Checked Example 8 normalized prescription rows against the data file after the documented 36.5x production scaling. Stored radii, thicknesses, glass constants, and the aspherical coefficient conversion for surface 11A remain consistent with the patent.
- Confirmed the patent provides infinity data only; the unit-focus approximation remains documented in the file.

### Phase 3 - Spectral / metadata enrichment

- Added Hikari BAF3 to the glass catalog from refractiveindex.info's Nikon/Hikari Zemax data, unlocking catalog dispersion for code 583465.

### Phase 4 - Analysis sync

- Updated the L1 glass card and glass-selection summary to identify BAF3 as the public coefficient-backed match while preserving the historical barium-flint interpretation.

### Verification

- `npm run generate:glass-reports` — passed; Distagon 35mm is absent from the current six-digit missing-Sellmeier, unresolved-glass, catalog-mismatch, and relabel-by-lens queues for the corrected row.
- `npm run typecheck` — passed.
- `npm run format:check` — passed.
- `npm run test` — passed (131 files, 1666 tests; expected error-boundary console output only).
