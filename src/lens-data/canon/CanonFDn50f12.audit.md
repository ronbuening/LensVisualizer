# Audit Log - Canon New FD 50mm f/1.2

Patent: US 4,364,643, Embodiment 3

## 2026-06-25 - Canon folder patent audit

### Phase 1 - Glass corrections

- Rechecked the local patent PDF `patents/US4364643.pdf`, data file, and analysis sidecar.
- No glass label changes were needed. The six-digit legacy code labels remain the most useful future-upgrade annotations.
- High-index status remains important to the design and is already documented for the positive-element strategy, especially L4 and L6.

### Phase 2 - Retained-information audit

- The patent is normalized at f=1 and does not publish clear apertures. Existing SDs remain estimates from f/1.2 marginal rays, mechanical clearance, and the R6 rim cap.
- Retained the inferred stop location centered in the D6 air gap from Fig. 3.

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
