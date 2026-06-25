# Audit Log - Zeiss ZX1 Distagon T* 35mm f/2

Patent: US 2018/0180842 A1, Example 1  
Catalog version: local working tree, 2026-06-25

## 2026-06-25 - APD, high-index, and semi-diameter audit

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L5 / AF9-AF10 | `apd`, `dPgF`, `apdNote` | unset | `apd: "inferred"`, `dPgF: 0.0123` | Patent Table 1 names S-FPM2 (OHARA). The patent does not publish partial-dispersion constants, but this maker folder already treats catalog S-FPM2 as inferred APD with `dPgF: 0.0123` in the Touit file. |
| L7 / AF13-AF14 | `apd`, `dPgF`, `apdNote` | unset | `apd: "inferred"`, `dPgF: 0.0123` | Same S-FPM2 material and same catalog-inferred APD convention as L5. |
| All elements | `glass`, `nd`, `vd`, line indices | Existing OHARA catalog values | Retained | US 2018/0180842 A1 Table 1 names OHARA glass trade names but does not print numeric `nd`/`vd`; the current data uses OHARA catalog values and has full trusted Sellmeier coverage in generated reports. |

### Phase 2 - Retained-information audit

- Rechecked Table 1 surface radii, thicknesses, glass names, and semi-diameters against the data file. The stored SDs are patent-listed values, unlike the inferred SDs used by the older lenses in this folder.
- Confirmed the AF17-AF20 BK7 filter plates are intentionally folded into an air-equivalent final BFD rather than represented as lens elements, matching the patent's exclusion of the filter stack from the camera lens.
- Rechecked focus-variable gaps AF7, AF10, and AF14 against Table 2; no spacing edit was needed.

### Phase 3 - Spectral / metadata enrichment

- Added inferred APD metadata to L5 and L7 to match the catalog S-FPM2 convention already used in `ZeissTouit50mmf28Macro.data.ts`.
- High-index status for S-TIH6, S-NPH1, S-TIH1, S-LAH59, and L-LAM69 remains represented in catalog glass labels, line indices, and role prose.

### Phase 4 - Analysis sync

- Updated `ZeissZX1Distagon35mmf2.analysis.md` so the L5/L7 prose, glass table, and chromatic-correction summary describe S-FPM2 as catalog-inferred APD rather than merely low-dispersion glass.

### Verification

- `npm run generate:glass-reports` - passed (7 files, 7 tests); generated report state retained.
- `npm run typecheck` - passed.
- `npm run format:check` - passed.
- `npm run test -- __tests__/src/lens-data/lensDataTyping.test.ts __tests__/src/optics/validateLensData.test.ts __tests__/src/optics/buildLens.test.ts` - passed (3 files, 143 tests).
- `npm run test` - failed outside this audit's edits: stale/generated route metadata is missing Rodenstock lens routes, and the existing Sonnar 50/1.5 skew-ray chromatic assertion differs by 0.0011856 mm.
