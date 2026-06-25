# Audit Log - SIGMA 35mm F1.4 DG DN | Art

Patent: JP 2022-33487 A, Numerical Example 1

## 2026-06-23 - Sigma-folder patent glass sweep

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L5 / S8 | `glass` | `Heavy flint, code 593/355 (vendor uncertain)` | `593355 — heavy flint (vendor uncertain; no exact public catalog match)` | Patent Example 1 stores nd/vd = 1.59270 / 35.45. No exact public catalog match was found, so the unbroken six-digit token preserves a future auto-upgrade path. |
| L7 / S11 | `glass` | `HOYA FCD10A (459/902)` | `459902 — HOYA FCD10A (ELD fluorophosphate crown; no coefficient-backed catalog entry yet)` | Patent nd/vd = 1.45860 / 90.19 and Sigma identifies the production class as ELD. The label keeps the HOYA identity while making the six-digit code machine-readable for later coefficient backfill. |

### Phase 2 - Retained-information audit

- Re-checked the extracted JP 2022-33487 A Example 1 prescription against the data file; surface radii, spacings, focus variables, and asphere coefficients were retained.
- The patent does not publish clear-aperture radii, so the F/1.4 renderer-safe semi-diameter estimates were retained.
- Existing close-focus extrapolation from the patent's single finite-focus state remains documented in the header and analysis.

### Phase 3 - Spectral / metadata enrichment

- Retained the existing patent-backed APD / `dPgF` assignments on the FLD, ELD, and SLD elements.
- L5 and L7 now use unbroken six-digit glass tokens where no coefficient-backed catalog entry is currently available.

### Phase 4 - Analysis sync

- Updated the companion analysis text and the special-low-dispersion table for the L5 and L7 glass-label changes.

### Verification

- `npm run generate:glass-reports`
