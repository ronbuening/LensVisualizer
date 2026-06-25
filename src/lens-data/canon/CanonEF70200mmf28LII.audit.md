# Audit Log - Canon EF 70-200mm f/2.8L IS II USM

Patent: US 2009/0296231 A1, Numerical Embodiment 2

## 2026-06-25 - Canon folder patent audit

### Phase 1 - Glass corrections

- Rechecked the local patent PDF `patents/US20090296231A1.pdf`, data file, and analysis sidecar.
- No glass label changes were needed. The patent gives nd/vd values only; the OHARA-equivalent labels remain nearest public catalog matches, not Canon material disclosures.
- High-index rows are already represented by their nd/vd values and dense-flint / dense-lanthanum labels.

### Phase 2 - Retained-information audit

- No clear-aperture/effective-diameter table was found for Numerical Embodiment 2 in the local PDF text. Existing SDs remain inferred from marginal/chief-ray envelopes and renderer limits as documented in the file header.
- Retained the infinity-only zoom model; the patent does not tabulate close-focus spacings.

### Phase 3 - Spectral / metadata enrichment

- Retained existing `apd: "patent"` metadata on the PR/N2 fluorophosphate elements and the fluorite/UD elements already identified in the file.
- No new dPgF values were added because S-FPL51 elements already carry line-index data and the patent provides only the conditional theta_gF inequality for the PR/N2 material family.

### Phase 4 - Analysis sync

- No analysis changes needed.

### Verification

- `npm run generate:glass-reports` - passed (7 files, 7 tests).
- `npm run typecheck` - passed before and after metadata regeneration.
- `npm run format:check` - passed.
- `npm run lint` - passed.
- `npm run test` - initially exposed stale generated route metadata; after `npm run generate:metadata`, passed (183 files, 2212 tests).
