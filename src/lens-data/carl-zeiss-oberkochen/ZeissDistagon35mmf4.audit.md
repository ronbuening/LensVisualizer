# Audit Log - Carl Zeiss B-Distagon 35mm f/4

Patent: US 3,038,380, sole numerical example  
Catalog version: local working tree, 2026-06-25

## 2026-06-25 - APD, high-index, and semi-diameter audit

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| All elements | `glass`, `nd`, `vd` | Existing Schott/class labels with patent constants | Retained | US 3,038,380 lists only refractive index and Abbe number. The stored prescription matches the patent table after x35 scaling; unresolved catalog rows such as K10, LAK7, BAFD8/BAH28, BAF11, and LAK9 remain intentionally class-labelled. |

### Phase 2 - Retained-information audit

- Rechecked the US 3,038,380 table values against the current surfaces: radii, thicknesses, and `nd`/`vd` constants match after x35 scaling.
- Confirmed the patent omits semi-diameters. Stored SDs remain project-inferred values constrained by marginal/chief rays, edge thickness, `sd/|R|`, cross-gap sag intrusion, and practical element SD ratios.
- The stop split in the `d5` air space remains drawing-derived; the patent marks the diaphragm location but does not publish a numerical split.

### Phase 3 - Spectral / metadata enrichment

- No APD metadata was added. The patent provides no line-index or partial-dispersion data.
- High-index status is already expressed in the dense-flint/lanthanum glass labels and roles for LIII, LIV, LV, and LVII.

### Phase 4 - Analysis sync

- No analysis prose change was required. The existing analysis describes the high-index rear triplet and the absence of patent clear apertures.

### Verification

- `npm run generate:glass-reports` - passed (7 files, 7 tests); generated report state retained.
- `npm run typecheck` - passed.
- `npm run format:check` - passed.
- `npm run test -- __tests__/src/lens-data/lensDataTyping.test.ts __tests__/src/optics/validateLensData.test.ts __tests__/src/optics/buildLens.test.ts` - passed (3 files, 143 tests).
- `npm run test` - failed outside this audit's edits: stale/generated route metadata is missing Rodenstock lens routes, and the existing Sonnar 50/1.5 skew-ray chromatic assertion differs by 0.0011856 mm.
