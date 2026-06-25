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

## 2026-06-25 - APD, high-index, and semi-diameter audit

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| All elements | `glass`, `nd`, `vd` | 2026-05-19 audited labels and patent constants | Retained | US 3,915,558 Example 8 was rechecked against the current data file. The previous BAF3 correction remains valid; the remaining LLF1 rows are still intentionally unresolved historical labels. |

### Phase 2 - Retained-information audit

- Rechecked Example 8 radii, thicknesses, glass constants, and the surface 11A asphere coefficient conversion against the patent. No prescription or asphere edit was needed.
- Confirmed the patent does not publish clear apertures. Stored SDs remain project-inferred values constrained by the f/1.4 ray bundle, patent drawing proportions, and asphere-rendering stability.
- The patent provides infinity data only; the existing unit-focus approximation remains documented.

### Phase 3 - Spectral / metadata enrichment

- `apd: false` remains appropriate for all elements. The patent provides no partial-dispersion columns.
- High-index status for LaK8, SF6, BAF3, and related glasses remains represented in glass labels and roles.

### Phase 4 - Analysis sync

- No analysis prose change was required for this pass.

### Verification

- `npm run generate:glass-reports` - passed (7 files, 7 tests); generated report state retained.
- `npm run typecheck` - passed.
- `npm run format:check` - passed.
- `npm run test -- __tests__/src/lens-data/lensDataTyping.test.ts __tests__/src/optics/validateLensData.test.ts __tests__/src/optics/buildLens.test.ts` - passed (3 files, 143 tests).
- `npm run test` - failed outside this audit's edits: stale/generated route metadata is missing Rodenstock lens routes, and the existing Sonnar 50/1.5 skew-ray chromatic assertion differs by 0.0011856 mm.
