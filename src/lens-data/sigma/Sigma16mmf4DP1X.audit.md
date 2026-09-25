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

## 2026-09-24 — Image circle set to the Foveon sensor

The field-coverage audit measured the modeled edge against the canonical APS-C corner (14.175 mm), which is larger than
the DP1-series 20.7 × 13.8 mm Foveon sensor (12.44 mm half-diagonal), so the lens read 86% although it traces the
patent's full 2ω = 73.7°. Example 1's condition (4) prints |Is/d4| = 2.23 (JP 2008-040033 A ¶0024, PDF p. 5); with
d4 = 1.30 + 4.30 = 5.60 mm that puts Is, the image height, at 12.49 mm, and f·tan 36.85° = 12.49 mm agrees. The file
keeps `imageFormat: "aps-c"` (no taxonomy id fits the Foveon sensor) and now sets `imageCircleMm: 24.9`, the sensor
diagonal. The declared 36.85° field reaches 12.22 mm, 98% of the new corner; the last 2% is the design's barrel
distortion at the patent field. No semi-diameter or prescription value changed.
