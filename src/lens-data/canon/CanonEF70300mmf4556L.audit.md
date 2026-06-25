# Audit Log - Canon EF 70-300mm f/4-5.6L IS USM

Patent: JP 2013-140404 A, Numerical Example 1

## 2026-06-25 - Canon folder patent audit

### Phase 1 - Glass corrections

- Rechecked the local patent PDF `patents/JP2013140404A.pdf`, data file, and analysis sidecar.
- No glass label changes were needed. The patent nd/vd rows match the current catalog-equivalent labels, including the explicitly documented KZFS-class L2 short flint.
- High-index rows remain correctly represented by their nd values and dense-flint / lanthanum labels.

### Phase 2 - Retained-information audit

- Confirmed the patent table has a `有効径` column. The stored `sd` values are half of those full effective diameters, matching the file header.
- Retained the existing infinity zoom variables and absence of close-focus spacings; the patent does not publish a separate close-focus prescription.

### Phase 3 - Spectral / metadata enrichment

| Element | Field | Before | After | Justification |
|---|---|---|---|---|
| L3 | `apd` / `apdNote` | omitted | `inferred` | S-FPL51 UD fluorophosphate element; analysis and Canon production specs identify two UD elements. |
| L7 | `apd` / `apdNote` | omitted | `inferred` | Second S-FPL51 UD element in the positive relay unit. |

- Retained L2 `apd: "patent"` and `dPgF: -0.00599` from patent condition (8).

### Phase 4 - Analysis sync

- No prose change needed; the analysis already identifies L3/L7 as UD elements and L2 as the patent-governed anomalous-dispersion glass.

### Verification

- `npm run generate:glass-reports` - passed (7 files, 7 tests).
- `npm run typecheck` - passed before and after metadata regeneration.
- `npm run format:check` - passed.
- `npm run lint` - passed.
- `npm run test` - initially exposed stale generated route metadata; after `npm run generate:metadata`, passed (183 files, 2212 tests).
