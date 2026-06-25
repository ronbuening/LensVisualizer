# Audit Log - Canon EF-S 55-250mm f/4-5.6 IS STM

Patent: US 2014/0211029 A1, Numerical Embodiment 3

## 2026-06-25 - Canon folder patent audit

### Source note

- The exact patent PDF was missing from the local `patents/` tree at the start of this pass. The Google Patents PDF link was fetched to `patents/US20140211029A1.pdf` and validated with `pdfinfo` before use.

### Phase 1 - Glass corrections

- Rechecked the local PDF, data file, and analysis sidecar.
- No glass label changes were needed. The HOYA NBFD15 row and the OHARA-equivalent labels match the patent nd/vd values.
- High-index rows L22, L23, L31, L33, and L41 remain correctly represented by nd values and dense-flint / high-index labels.

### Phase 2 - Retained-information audit

- Confirmed the patent `Effective diameter` column is present for Numerical Embodiment 3. The stored `sd` values are half of those printed full diameters.
- Retained the documented d28 value for the 135.16 mm column because it is internally consistent with the variable-gap row and paraxial BFD check.

### Phase 3 - Spectral / metadata enrichment

| Element | Field | Before | After | Justification |
|---|---|---|---|---|
| L32 | `apd` / `apdNote` | omitted | `inferred` | S-FPL51 UD fluorophosphate element matching Canon's one-UD production count. |

- Retained L22 `apd: "patent"` and `dPgF: 0.025` from the patent theta_gF condition.

### Phase 4 - Analysis sync

- No prose change needed; the analysis already identifies L32 as the UD fluorophosphate element and L22 as the patent APD element.

### Verification

- `npm run generate:glass-reports` - passed (7 files, 7 tests).
- `npm run typecheck` - passed before and after metadata regeneration.
- `npm run format:check` - passed.
- `npm run lint` - passed.
- `npm run test` - initially exposed stale generated route metadata; after `npm run generate:metadata`, passed (183 files, 2212 tests).
