# Audit Log - Canon EF 8-15mm f/4L Fisheye USM

Patent: US 2012/0013996 A1, Numerical Example 1

## 2026-06-25 - Canon folder patent audit

### Phase 1 - Glass corrections

- Rechecked the local patent PDF `patents/US20120013996A1.pdf`, data file, and analysis sidecar.
- No glass label changes were needed. Class labels for HOYA FCD and OHARA/TAFD-equivalent high-index glasses remain intentional where the patent gives optical constants rather than trade names.
- High-index status remains documented through nd values and the glass labels for L1, L4-L7, L10, and L12.

### Phase 2 - Retained-information audit

- Confirmed the patent `Effective Diameter` column is present for Example 1. The stored SDs are half of the printed full diameters.
- Retained the existing close-focus reconstruction notes because the patent does not publish close-focus spacing tables for Example 1.

### Phase 3 - Spectral / metadata enrichment

- Retained patent APD metadata and structured `dPgF` values on L2, L3, and L13.
- No additional line-index values were present in the source table.

### Phase 4 - Analysis sync

- No analysis changes needed.

### Verification

- `npm run generate:glass-reports` - passed (7 files, 7 tests).
- `npm run typecheck` - passed before and after metadata regeneration.
- `npm run format:check` - passed.
- `npm run lint` - passed.
- `npm run test` - initially exposed stale generated route metadata; after `npm run generate:metadata`, passed (183 files, 2212 tests).
