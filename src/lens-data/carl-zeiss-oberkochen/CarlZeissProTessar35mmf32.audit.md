# Audit Log - Carl Zeiss Pro-Tessar 35mm f/3.2

Patent: DE 1,089,183 B, Table 1  
Catalog version: local working tree, 2026-06-25

## 2026-07-06 - Mount metadata review

- Added `lensMounts: ["zeiss-contaflex"]` and `imageFormat: "135-full-frame"`.
- The data file header identifies the prescription as the Contaflex front-cell plus body-mounted Tessar rear section. Source review confirms the 35 mm f/3.2 Pro-Tessar as a Contaflex convertible-lens option, not a generic DKL lens.

### Sources

- DE 1,089,183 B, Table 1.
- Contaflex SLR overview, Pro-Tessar convertible system and 35 mm f/3.2 listing, https://en.wikipedia.org/wiki/Contaflex_SLR

## 2026-06-25 - APD, high-index, and semi-diameter audit

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| All elements | `glass`, `nd`, `vd` | Existing Schott historical labels and patent constants | Retained | DE 1,089,183 Table 1 provides the numeric `nd`/`vd` pairs but no coefficient-backed catalog data. The stored values match the patent table after x35 scaling; generated reports still treat the historical labels as unresolved, so no relabel was made. |

### Phase 2 - Retained-information audit

- Rechecked Table 1 geometry against the current front-cell plus Tessar rear prescription. Radii, glass thicknesses, air spaces, and the body-mounted rear-section numbering remain consistent with the patent.
- Confirmed the patent table does not publish clear-aperture columns. Stored SDs remain inferred from marginal/chief rays, the patent figure, surface-ratio limits, and rear-doublet edge thickness.
- The stop remains placed at the approximate patent-figure shutter/diaphragm position in the `d9` gap.

### Phase 3 - Spectral / metadata enrichment

- `apd: false` remains appropriate for all elements; no partial-dispersion or APD data is printed in the patent.
- The high-index lanthanum/dense-flint status remains represented in `glass` labels and role text for LaF2, LaK10, and SF/F elements.

### Phase 4 - Analysis sync

- No analysis prose change was required. The analysis already documents the high-index lanthanum strategy and the patent-derived front-cell constraints.

### Verification

- `npm run generate:glass-reports` - passed (7 files, 7 tests); generated report state retained.
- `npm run typecheck` - passed.
- `npm run format:check` - passed.
- `npm run test -- __tests__/src/lens-data/lensDataTyping.test.ts __tests__/src/optics/validateLensData.test.ts __tests__/src/optics/buildLens.test.ts` - passed (3 files, 143 tests).
- `npm run test` - failed outside this audit's edits: stale/generated route metadata is missing Rodenstock lens routes, and the existing Sonnar 50/1.5 skew-ray chromatic assertion differs by 0.0011856 mm.
