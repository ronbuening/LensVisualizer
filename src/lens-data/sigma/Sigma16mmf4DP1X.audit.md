# Audit Log - Sigma DP1x 16.6mm f/4

Patent: JP 2008-040033 A, Example 1

## 2026-06-13 - New lens patent audit

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| G5 / S11 | `glass` | `Hoya BACD5 / Ohara S-BAL35 / Hikari J-SK5 crown` | `M-BACD5N (Hoya) / S-BAL35 / N-SK5 crown` | Patent row 11 gives nd = 1.58913, vd = 61.2. M-BACD5N, S-BAL35, and N-SK5 are exact catalog-class matches; the prior label resolved first to N-SK16 and failed the nd safety net. |

### Phase 2 - Retained-information audit

- Surface rows 1-12 match JP 2008-040033 A Example 1.
- Focus variable spacings d10 and BF match the patent infinity and finite-distance table.
- Surface 10A uses K = A - 1 = +1.5919 from the patent's aspherical equation convention; A4-A10 match the published coefficients.
- Semi-diameters are inferred because the patent publishes no clear-aperture radii. They were visually checked against Figure 1 and pass renderer diagnostics with no trim above 0.25 mm.

### Phase 3 - Spectral / metadata enrichment

- The patent publishes nd/vd only; no line-index or partial-dispersion values were available to add.
- Existing top-level metadata, fixed-lens-camera mount metadata, image format, element/group counts, projection metadata, and focus description were retained.

### Phase 4 - Analysis sync

- Updated the G5 element paragraph and glass-identification table to use the corrected M-BACD5N / S-BAL35 / N-SK5 catalog-class label.
