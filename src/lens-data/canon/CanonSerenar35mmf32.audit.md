# Audit Log - Canon Serenar 35mm f/3.2

Patent: US 2,645,975, Example 1

## 2026-06-25 - Canon folder patent audit

### Phase 1 - Glass corrections

- Rechecked the local patent PDF `patents/US2645975.pdf`, data file, and analysis sidecar.
- No glass label changes were needed. The Schott SK/LF labels remain appropriate for the vintage double-Gauss patent constants.
- No element requires high-index status; all stored nd values are below 1.8.

### Phase 2 - Retained-information audit

- The patent is normalized near f=1 and does not publish clear apertures or a separate stop surface. Existing SDs and central stop placement remain inferred from paraxial rays, field fraction, filter-thread constraints, and Fig. 1.
- Retained the existing scale factor to the 35 mm production focal length.

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
