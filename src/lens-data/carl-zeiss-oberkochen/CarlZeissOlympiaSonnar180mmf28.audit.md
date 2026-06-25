# Audit Log - Carl Zeiss Olympia-Sonnar 180mm f/2.8

Patent: DE 1,268,404 B, Example 2 / Table II  
Catalog version: local working tree, 2026-06-25

## 2026-06-25 - APD, high-index, and semi-diameter audit

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| All elements | `glass`, `nd`, `vd` | Existing Schott labels and patent constants | Retained | DE 1,268,404 Table II lists the four `nd`/`vd` pairs, and all four rows already resolve to trusted catalog/Sellmeier coverage in the generated reports. No glass relabel was needed. |

### Phase 2 - Retained-information audit

- Rechecked Table II after x180 scaling. Radii, thicknesses, glass constants, and the split of the post-L3 air space around the stop remain consistent with the patent.
- Confirmed the patent does not publish clear apertures. Stored SDs remain inferred from the f/2.8 marginal ray, drawing proportions, and 67 mm filter-thread clearance.
- The fixed unit-focus model remains appropriate; the patent does not publish internal focusing data.

### Phase 3 - Spectral / metadata enrichment

- `apd: false` remains appropriate. The patent provides no partial-dispersion data.
- High-index/high-dispersion status for SF56A/SF11 and SF4 is already represented in glass names and element roles.

### Phase 4 - Analysis sync

- No analysis prose change was required. The existing analysis already describes the four-element glass pairing and patent constraints.

### Verification

- `npm run generate:glass-reports` - passed (7 files, 7 tests); generated report state retained.
- `npm run typecheck` - passed.
- `npm run format:check` - passed.
- `npm run test -- __tests__/src/lens-data/lensDataTyping.test.ts __tests__/src/optics/validateLensData.test.ts __tests__/src/optics/buildLens.test.ts` - passed (3 files, 143 tests).
- `npm run test` - failed outside this audit's edits: stale/generated route metadata is missing Rodenstock lens routes, and the existing Sonnar 50/1.5 skew-ray chromatic assertion differs by 0.0011856 mm.
