# Audit Log - Carl Zeiss Distagon T* 28mm f/2

Patent: DE 2,359,156 A1, Example 12  
Catalog version: local working tree, 2026-06-25

## 2026-06-25 - APD, high-index, and semi-diameter audit

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| All elements | `glass`, `nd`, `vd` | Existing Schott class labels with patent constants | Retained | The local `patents/` folder does not contain DE 2359156 A1, so the Example 12 table was rechecked from Google Patents. The source table gives `nd`/`vd` only, not glass names or line indices. Existing class labels preserve the exact patent constants and remain catalog-near annotations rather than explicit patent names. |

### Phase 2 - Retained-information audit

- Rechecked Example 12 geometry from the Google Patents table/HTML against the stored normalized prescription and the documented 28.8 mm scale. The high-leverage radii noted in the analysis (`R4a`, `R4b'`, and `R7'`) remain consistent with the current data file.
- Confirmed DE 2359156 A1 Example 12 does not publish clear apertures or surface semi-diameters. The stored SDs remain inferred values constrained by the patent figure, f/2.1 stop, 55 mm production filter thread, edge thickness, and cross-gap sag limits.
- The production floating close-range correction remains metadata only; the patent publishes no close-focus spacing table for Example 12.

### Phase 3 - Spectral / metadata enrichment

- No `apd` flags were added. The patent has no partial-dispersion data and the retained glass labels are historical/class matches rather than APD material identifications.
- High-index status is retained in the glass names and role prose for the dense-flint and lanthanum-class elements.

### Phase 4 - Analysis sync

- No analysis prose change was required. The analysis already documents the missing local patent PDF, the inferred SD methodology, and the status of the glass labels as catalog-near rather than patent-printed names.

### Verification

- `npm run generate:glass-reports` - passed (7 files, 7 tests); generated report state retained.
- `npm run typecheck` - passed.
- `npm run format:check` - passed.
- `npm run test -- __tests__/src/lens-data/lensDataTyping.test.ts __tests__/src/optics/validateLensData.test.ts __tests__/src/optics/buildLens.test.ts` - passed (3 files, 143 tests).
- `npm run test` - failed outside this audit's edits: stale/generated route metadata is missing Rodenstock lens routes, and the existing Sonnar 50/1.5 skew-ray chromatic assertion differs by 0.0011856 mm.
