# Audit Log - Sigma 16mm F1.4 DC DN | Contemporary

Patent: JP 2018-205527 A, Numerical Example 1

## 2026-06-13 - New lens patent audit

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| All elements | `glass` | Current draft labels | No data-file change | Patent Example 1 publishes nd/vd only; current labels are catalog-class or Sigma-published FLD/SLD assignments consistent with those values. |

### Phase 2 - Retained-information audit

- Surface rows 1-30 match JP 2018-205527 A Example 1.
- The patent's plane-parallel cover glass at surfaces 31-32 is intentionally excluded and folded into the final air-equivalent gap: 15.5341 + 2.0000 / 1.51680 + 1.0000 = 17.8527 mm.
- Focus variable spacings d23 and d25 preserve the patent single-G3 movement pattern; the close endpoint extrapolates that motion to Sigma's 0.25 m / 1:9.9 production specification.
- Aspherical surfaces 6 and 23 match the patent coefficients.
- Semi-diameters are inferred because the patent publishes no clear-aperture radii. They were visually checked against Figure 1 and pass renderer diagnostics with no trim above 0.25 mm.

### Phase 3 - Spectral / metadata enrichment

- No patent line-index or partial-dispersion data was available beyond nd/vd.
- Existing top-level metadata, mount metadata, image format, element/group counts, and focus description were retained.

### Phase 4 - Analysis sync

- No analysis text changes were required during this audit.

## 2026-06-23 - Sigma-folder patent glass sweep

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L18 | `glass` | `Crown-flint class (517/522)` | `E-CF6 (HOYA)` | Patent Example 1 stores nd/vd = 1.51742 / 52.15; HOYA E-CF6 is the exact catalog match. |
| L19 | `glass` | `Dense flint class (673/322)` | `E-FD5 (HOYA)` | Patent nd/vd = 1.67270 / 32.17; HOYA E-FD5 matches the six-digit code. |
| L21, L31 | `glass` | `SLD low-dispersion crown (593/686)` | `FCD505 (HOYA, SLD low-dispersion crown)` | Patent nd/vd = 1.59282 / 68.63; generated six-digit report resolves this as HOYA FCD505, consistent with Sigma SLD usage. |
| L22 | `glass` | `Lanthanum dense-flint class (750/353)` | `S-LAM7 (OHARA)` | Patent nd/vd = 1.74950 / 35.33; OHARA S-LAM7 is the catalog-backed match. |
| L43 | `glass` | `High-index lanthanum flint class (904/313)` | `S-LAH95 (OHARA)` | Patent nd/vd = 1.90366 / 31.32; OHARA S-LAH95 resolves the high-index rear doublet member. |

### Phase 2 - Retained-information audit

- Re-checked the extracted JP 2018-205527 A Example 1 prescription against the data file; surface radii, spacings, focus variables, and asphere coefficients were retained.
- The cover-glass omission remains intentional and documented in the header.
- The patent still provides no clear-aperture table, so no semi-diameter changes were made.

### Phase 3 - Spectral / metadata enrichment

- Retained the existing inferred APD annotations on Sigma-published FLD/SLD elements; no new patent line-index data was available.
- Glass labels now resolve the formerly code-only catalog matches, raising this lens to full trusted Sellmeier coverage in the generated report.

### Phase 4 - Analysis sync

- Updated the companion analysis prose and glass summary table for L18, L19, L21/L31, L22, and L43.

### Verification

- `npm run generate:glass-reports`
