# Audit Log - Canon EF-S 18-55mm f/3.5-5.6 IS

Patent: US 2007/0058265 A1, Numerical Example 2

## 2026-06-25 - Canon folder patent audit

### Source note

- The exact patent PDF was missing from the local `patents/` tree at the start of this pass. The Google Patents PDF link was fetched to `patents/US20070058265A1.pdf` and validated with `pdfinfo` before use.

### Phase 1 - Glass corrections

- Rechecked the local PDF, data file, and analysis sidecar.
- No glass label changes were needed. L41 remains `Unmatched (583/302 flint; obsolete HOYA E-F3-class candidate)` because no coefficient-backed exact public match is known.
- High-index L14 and L22 remain correctly represented by their nd values and dense-flint labels.

### Phase 2 - Retained-information audit

- The patent does not publish clear apertures. Existing SDs remain estimates from paraxial ray envelopes, patent drawing proportions, the 58 mm filter constraint, and renderer clearance limits.
- Retained the paraxial D8 focus estimate for the production 0.25 m MFD; the patent does not publish close-focus spacing columns.

### Phase 3 - Spectral / metadata enrichment

- No patent dPgF, theta_gF, fluorite, ED/UD, or line-index table was found for this example.
- No APD metadata was added.

### Phase 4 - Analysis sync

- No analysis changes needed.

### Verification

- `npm run generate:glass-reports` - passed (7 files, 7 tests).
- `npm run typecheck` - passed before and after metadata regeneration.
- `npm run format:check` - passed.
- `npm run lint` - passed.
- `npm run test` - initially exposed stale generated route metadata; after `npm run generate:metadata`, passed (183 files, 2212 tests).
