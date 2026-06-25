# Audit Log - Zeiss Touit Makro-Planar T* 50mm f/2.8 Macro

Patent: JP 2015-161792 A, Example 1  
Catalog version: local working tree, 2026-06-25

## 2026-06-25 - APD, high-index, and semi-diameter audit

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| All elements | `glass`, `nd`, `vd` | Existing OHARA/HOYA class labels and patent constants | Retained | The local `patents/` folder does not contain JP2015161792A, so the patent was checked from Google Patents and its downloadable PDF. The tables provide `nd`/`vd` but no clear-aperture data. The existing labels preserve the patent constants and current catalog-near assignments; the remaining generated-report issue is the unresolved S-BAH10 row. |

### Phase 2 - Retained-information audit

- Rechecked the patent description for Example 1. It defines the basic lens table, specifications table, moving-distance table, and aspheric coefficients, but no semi-diameter column.
- Stored SDs remain inferred values constrained by the f/2.88 stop, edge thickness, front/rear SD ratios, and cross-gap sag intrusion limits.
- The PP cover-glass exclusion and folded final BFD remain consistent with the data header and project convention.

### Phase 3 - Spectral / metadata enrichment

- Existing inferred APD metadata on S-FPM2 L12/L42 and S-PHM52 L43 was retained. The patent itself gives no `dPgF` or line-index columns; these APD flags are catalog-inferred.
- High-index status for the S-TIH53, E-FDS1/MP-FDS1, and related dense-flint elements is already represented in labels and role prose.

### Phase 4 - Analysis sync

- No analysis prose change was required. The analysis already explains the APD entries as catalog-inferred and documents the absence of patent clear apertures.

### Verification

- `npm run generate:glass-reports` - passed (7 files, 7 tests); generated report state retained.
- `npm run typecheck` - passed.
- `npm run format:check` - passed.
- `npm run test -- __tests__/src/lens-data/lensDataTyping.test.ts __tests__/src/optics/validateLensData.test.ts __tests__/src/optics/buildLens.test.ts` - passed (3 files, 143 tests).
- `npm run test` - failed outside this audit's edits: stale/generated route metadata is missing Rodenstock lens routes, and the existing Sonnar 50/1.5 skew-ray chromatic assertion differs by 0.0011856 mm.
