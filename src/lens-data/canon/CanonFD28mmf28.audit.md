# Audit Log - Canon FD 28mm f/2.8 S.C.

Patent: US 4,046,459, Example 2 / Fig. 5 / Table 3

## 2026-06-25 - Canon folder patent audit

### Phase 1 - Glass corrections

- Rechecked the local patent PDF `patents/US4046459A.pdf`, data file, and analysis sidecar.
- No glass label changes were needed. The legacy barium-crown/flint and lanthanum-crown class labels remain intentionally descriptive where the patent gives nd/vd only.
- No element reaches the project's high-index review threshold of nd >= 1.8, though L3/L5-L7 remain higher-index conventional vintage glasses.

### Phase 2 - Retained-information audit

- The patent does not tabulate clear apertures or a separate aperture-stop surface. Existing SDs and the stop split in the L4-L5 air gap remain inferred renderer-safe values.
- Retained the normalized f=1 to 28 mm scale factor and unit-focus final BF model.

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
