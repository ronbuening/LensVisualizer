# Audit Log - Carl Zeiss Contarex Planar 55mm f/1.4

Patent: DE 1,170,157 B, sole example  
Catalog version: local working tree, 2026-06-25

## 2026-06-25 - APD, high-index, and semi-diameter audit

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| All elements | `glass`, `nd`, `vd` | Existing Schott labels and patent constants | Retained | DE 1,170,157 B gives the sole prescription with `nd`/`vd` only. The stored values match after x55 scaling, including the intentionally collapsed coincident flat cemented surfaces. LF7 and LaF10 rows remain unresolved in generated reports, so no catalog relabel was made. |

### Phase 2 - Retained-information audit

- Rechecked the patent table against the current data file after x55 scaling. The surface sequence remains faithful to the patent while collapsing zero-thickness coincident flat surfaces into practical cemented junctions.
- Confirmed the patent provides no explicit semi-diameter data. Stored SDs remain inferred from f/1.4 marginal/chief rays, 20 degree half-field, B56 filter-thread clearance, and mechanical edge clearance.
- The stop position remains inferred from patent Fig. 1 inside the large central air gap.

### Phase 3 - Spectral / metadata enrichment

- `apd: false` remains appropriate for all elements; the patent provides no line-index or partial-dispersion information.
- High-index lanthanum/dense-flint status is already represented in the LaF3, SF6, and LaF10 labels and corresponding role prose.

### Phase 4 - Analysis sync

- No analysis prose change was required. The analysis already documents the high-index lanthanum/dense-flint strategy and the zero-asphere prescription.

### Verification

- `npm run generate:glass-reports` - passed (7 files, 7 tests); generated report state retained.
- `npm run typecheck` - passed.
- `npm run format:check` - passed.
- `npm run test -- __tests__/src/lens-data/lensDataTyping.test.ts __tests__/src/optics/validateLensData.test.ts __tests__/src/optics/buildLens.test.ts` - passed (3 files, 143 tests).
- `npm run test` - failed outside this audit's edits: stale/generated route metadata is missing Rodenstock lens routes, and the existing Sonnar 50/1.5 skew-ray chromatic assertion differs by 0.0011856 mm.
