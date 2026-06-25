# Audit Log - Canon Serenar 100mm f/3.5 I

Patent: DE 1,022,027 B

## 2026-06-25 - Canon folder patent audit

### Phase 1 - Glass corrections

- Rechecked the local patent PDF `patents/DE_1022027_B.pdf`, data file, and analysis sidecar.
- No glass label changes were needed. The vintage Schott/OHARA/HOYA class labels remain intentionally descriptive for older nd/vd-only materials.
- No element requires high-index status; all stored nd values are below 1.8.

### Phase 2 - Retained-information audit

- The patent does not publish clear apertures or a separate stop position. Existing SDs and the stop location remain conservative renderer-safe estimates.
- Retained the unscaled f=100 mm patent prescription and existing paraxial audit values in the file header.

### Phase 3 - Spectral / metadata enrichment

- No fluorite, ED/UD, APD, theta_gF, dPgF, or line-index table was found.
- No APD metadata was added.

### Phase 4 - Analysis sync

- No analysis changes needed.

### Verification

- `npm run generate:glass-reports` - passed (7 files, 7 tests).
- `npm run typecheck` - passed before and after metadata regeneration.
- `npm run format:check` - passed.
- `npm run lint` - passed.
- `npm run test` - initially exposed stale generated route metadata; after `npm run generate:metadata`, passed (183 files, 2212 tests).
