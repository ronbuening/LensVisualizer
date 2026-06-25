# Audit Log - Canon EF-M 22mm f/2 STM

Patent: US 8,854,747 B2, First Numerical Example

## 2026-06-25 - Canon folder patent audit

### Phase 1 - Glass corrections

- Rechecked the local patent PDF `patents/US8854747.pdf`, data file, and analysis sidecar.
- No glass label changes were needed. The six-digit OHARA code annotations remain useful where the patent constants map to catalog/code identities.
- High-index elements L12, L21p, and L23 remain correctly marked by their nd values and lanthanum glass labels.

### Phase 2 - Retained-information audit

- The patent does not publish clear-aperture semi-diameters. Existing SDs remain ray-envelope and drawing-proportion estimates constrained by the 43 mm filter diameter and renderer safety checks.
- Retained the patent-tabulated floating focus endpoints; the production 0.15 m MFD is not extrapolated into extra optical states.

### Phase 3 - Spectral / metadata enrichment

- No fluorite, ED/UD, dPgF, theta_gF, or line-index table was found.
- No APD metadata was added.

### Phase 4 - Analysis sync

- No analysis changes needed.

### Verification

- `npm run generate:glass-reports` - passed (7 files, 7 tests).
- `npm run typecheck` - passed before and after metadata regeneration.
- `npm run format:check` - passed.
- `npm run lint` - passed.
- `npm run test` - initially exposed stale generated route metadata; after `npm run generate:metadata`, passed (183 files, 2212 tests).
