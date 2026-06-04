# Audit Log — Nikon Reflex-Nikkor·C 500mm f/8

Patent: US 3,632,190, Example 1

## 2026-06-04 — Rear corrector and primary-center diagram audit

### Phase 1 — Glass Corrections

- No glass changes. Stored nd / vd values remain aligned with the existing patent-derived prescription.

### Phase 2 — Retained-Information Audit

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L3 / surfaces `8`-`9` | Explicit render span | L3 could resolve against annular primary surface `3` and appear full-diameter | L3 now spans `8` to central duplicate surface `9` | Patent Fig. 1 and Table 1 show L3 as the small positive rear-corrector member in the clear primary center, with R9 = R3. |
| M1 / surfaces `3`-`4M` | Primary annulus | Shared primary blank could be represented by the annular shell alone | Annular primary renders only the silvered shell from `3` to `4M` | The patent drawing shows only the outer part of the primary is silvered. |
| L4 / surfaces `9`-`10` | Clear primary center | Central surfaces could be trace-only | L4 now renders as a clear central plug with the same glass, axial depth, and R3/R4 curvature as the primary blank | The patent describes one physical primary blank with an uncoated central portion filling the mirror hole. |

### Phase 3 — Spectral / Metadata Enrichment

- No spectral or catalog metadata added in this pass.

### Phase 4 — Analysis Sync

- Updated the analysis note to clarify that L4 is the clear central zone of the primary blank, rendered as a central plug while the silvered primary remains annular.

### Verification

- `npx vitest run __tests__/src/optics/mirrorOptics.test.ts __tests__/src/optics/validateLensData.test.ts __tests__/src/optics/elementRenderDiagnostics.test.ts __tests__/src/optics/exactTraceCatalog.test.ts __tests__/src/utils/catalog/lensCatalog.test.ts --reporter=verbose`
