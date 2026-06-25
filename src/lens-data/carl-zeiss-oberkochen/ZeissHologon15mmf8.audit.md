# Audit Log - Carl Zeiss Hologon 15mm f/8

Patent: DE 1,241,637 B, single example  
Catalog version: local working tree, 2026-06-25

## 2026-06-25 - APD, high-index, and semi-diameter audit

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L_I, L_III | `glass`, `nd`, `vd` | `SF6 (Schott)` | Retained | The patent lists `nd = 1.80518`, `vd = 25.46` for both negative menisci, matching SF6. |
| L_II | `glass`, `nd`, `vd` | `LAK8 (Schott)` | Retained | The patent lists `nd = 1.71300`, `vd = 53.89` for the central positive element, matching the retained LAK8 class annotation. |

### Phase 2 - Retained-information audit

- Rechecked the sole patent example after x15 scaling. Radii, thicknesses, and the internal stop split through L_II remain consistent with the patent table and figure.
- Confirmed the patent does not list semi-diameters. Stored SDs remain figure-derived values constrained to stay inside tangent/full-radius limits for the near-hemispherical elements.
- The internal stop remains an optically neutral aperture plane inside L_II glass, matching the physical aperture placement described in the data header.

### Phase 3 - Spectral / metadata enrichment

- `apd: false` remains appropriate for all three elements. The patent gives no partial-dispersion data or APD claim.
- High-index status is already captured by the SF6 and LAK8 glass labels and analysis prose.

### Phase 4 - Analysis sync

- No analysis prose change was required. The analysis already explains the symmetric SF6/LAK8/SF6 strategy and the figure-derived SD treatment.

### Verification

- `npm run generate:glass-reports` - passed (7 files, 7 tests); generated report state retained.
- `npm run typecheck` - passed.
- `npm run format:check` - passed.
- `npm run test -- __tests__/src/lens-data/lensDataTyping.test.ts __tests__/src/optics/validateLensData.test.ts __tests__/src/optics/buildLens.test.ts` - passed (3 files, 143 tests).
- `npm run test` - failed outside this audit's edits: stale/generated route metadata is missing Rodenstock lens routes, and the existing Sonnar 50/1.5 skew-ray chromatic assertion differs by 0.0011856 mm.
