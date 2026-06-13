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
