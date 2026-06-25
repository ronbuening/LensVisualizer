# Audit Log - Carl Zeiss Planar T* 50mm f/1.4

Patent: US 3,874,771, Example 5  
Catalog version: local working tree, 2026-06-25

## 2026-06-25 - APD, high-index, and semi-diameter audit

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| All elements | `glass`, `nd`, `vd` | Existing Schott historical labels and patent constants | Retained | US 3,874,771 Example 5 lists d-line index and Abbe number only. The stored values match the patent table after the documented x50 scaling; the generated glass reports still lack coefficient-backed matches for the historical labels, so no relabel was defensible. |

### Phase 2 - Retained-information audit

- Rechecked Table 5 radii, thicknesses, and glass constants against the data file after x50 scaling; no prescription edits were needed.
- Confirmed the patent does not list clear apertures or surface semi-diameters. The stored SDs remain inferred from the f/1.4 marginal ray, mechanical clearance, and the documented `sd/|R|` constraint at surface 6.
- The midpoint stop placement remains an inference from the central air space and patent figure; the patent does not give an exact axial iris position.

### Phase 3 - Spectral / metadata enrichment

- `apd: false` remains appropriate for all elements. The patent provides no partial-dispersion columns or anomalous-dispersion claims for Example 5.
- High-index status is already represented by the LaK/LaF/SF glass labels and element roles. There is no separate high-index schema field to add.

### Phase 4 - Analysis sync

- No analysis prose change was required. The analysis already describes the all-spherical high-index lanthanum/dense-flint double-Gauss strategy and does not claim APD glass.

### Verification

- `npm run generate:glass-reports` - passed (7 files, 7 tests); generated report state retained.
- `npm run typecheck` - passed.
- `npm run format:check` - passed.
- `npm run test -- __tests__/src/lens-data/lensDataTyping.test.ts __tests__/src/optics/validateLensData.test.ts __tests__/src/optics/buildLens.test.ts` - passed (3 files, 143 tests).
- `npm run test` - failed outside this audit's edits: stale/generated route metadata is missing Rodenstock lens routes, and the existing Sonnar 50/1.5 skew-ray chromatic assertion differs by 0.0011856 mm.
