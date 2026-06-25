# Audit Log - Canon FD 24mm f/2.8 S.S.C.

Patent: US 3,748,021, Example 2

## 2026-06-25 - Canon folder patent audit

### Phase 1 - Glass corrections

- Rechecked the local patent PDF `patents/US3748021.pdf`, data file, and analysis sidecar.
- No glass label changes were needed. The vintage OHARA/Schott-equivalent class labels remain appropriate for a normalized older patent that gives optical constants rather than current catalog names.
- High-index E4 and E6 remain correctly documented as SF6/S-TIH6-class dense flints.

### Phase 2 - Retained-information audit

- The patent does not tabulate clear apertures. Existing SDs remain inferred from marginal/chief ray heights and renderer constraints after scaling the normalized patent example to 24 mm.
- Retained the patent-derived floating D4 focus behavior and paraxial 0.3 m close-focus BF solve.

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
