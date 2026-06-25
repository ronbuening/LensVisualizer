# Audit Log - Canon EF 20-35mm f/2.8L

Patent: US 5,000,550, Numerical Example 1

## 2026-06-25 - Canon folder patent audit

### Phase 1 - Glass corrections

- Rechecked the local patent PDF `patents/US5000550.pdf`, data file, and analysis sidecar.
- No glass label changes were needed. The patent gives nd/vd values but not modern procurement names; the stored class/equivalent labels remain intentionally non-exclusive.
- The high-index rows (L3, L4, L5, L8, L10, and L15) are already indicated by nd >= 1.8 and dense-flint / high-index class labels.

### Phase 2 - Retained-information audit

- Confirmed the patent does not publish clear apertures for this example. Existing `sd` values remain renderer-safe estimates from ray envelopes and cross-gap/edge constraints.
- Retained the inferred stop semi-diameter used to represent the tele-end f/2.8 equivalent physical stop.

### Phase 3 - Spectral / metadata enrichment

- No patent line-index, dPgF, theta_gF, fluorite, ED, or APD-specific table was found.
- No APD metadata was added.

### Phase 4 - Analysis sync

- No analysis changes needed; the companion analysis already treats the glass labels as catalog-equivalent/class annotations.

### Verification

- `npm run generate:glass-reports` - passed (7 files, 7 tests).
- `npm run typecheck` - passed before and after metadata regeneration.
- `npm run format:check` - passed.
- `npm run lint` - passed.
- `npm run test` - initially exposed stale generated route metadata; after `npm run generate:metadata`, passed (183 files, 2212 tests).
