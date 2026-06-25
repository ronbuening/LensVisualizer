# Audit Log - Carl Zeiss Tessar 50mm f/3.5

Patent: CH 314381 A, Example 1  
Catalog version: local working tree, 2026-06-25

## 2026-06-25 - APD, high-index, and semi-diameter audit

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| All elements | `glass`, `nd`, `vd` | Existing Schott labels and patent constants | Retained | CH 314381 Example 1 gives `nd`/`vd` values only. The stored prescription matches the patent table after x0.500005 scaling; F8 and LF5 remain unresolved historical rows in generated reports, while the current annotations preserve the patent constants. |

### Phase 2 - Retained-information audit

- Rechecked Example 1 radii, thicknesses, glass constants, and back-focus scaling against the Swiss patent table; no prescription edits were needed.
- Confirmed the patent does not list semi-diameters. Stored SDs remain inferred from marginal/chief rays, f/3.5 stop requirements, production filter clearance, and the front-element edge-thickness limit.
- Stop placement remains inferred within the second air gap as documented in the data header; the patent gives the gap but not a numerical iris split.

### Phase 3 - Spectral / metadata enrichment

- `apd: false` remains appropriate for all elements. The patent has no line-index or partial-dispersion data.
- The design intentionally avoids very high-index lanthanum glass; the highest-index conventional BAF10 element is already called out in the data and analysis.

### Phase 4 - Analysis sync

- No analysis prose change was required. The analysis already documents the conventional-glass, no-lanthanum, no-asphere design envelope and the inferred SD constraints.

### Verification

- `npm run generate:glass-reports` - passed (7 files, 7 tests); generated report state retained.
- `npm run typecheck` - passed.
- `npm run format:check` - passed.
- `npm run test -- __tests__/src/lens-data/lensDataTyping.test.ts __tests__/src/optics/validateLensData.test.ts __tests__/src/optics/buildLens.test.ts` - passed (3 files, 143 tests).
- `npm run test` - failed outside this audit's edits: stale/generated route metadata is missing Rodenstock lens routes, and the existing Sonnar 50/1.5 skew-ray chromatic assertion differs by 0.0011856 mm.
