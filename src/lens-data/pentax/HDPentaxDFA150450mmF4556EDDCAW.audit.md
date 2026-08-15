# Audit Log — HD PENTAX-D FA 150-450mm f/4.5-5.6 ED DC AW

Patent: US 2016/0327774 A1, Numerical Embodiment 1, Figures 1 and 4

## 2026-08-14 — Patent-figure, metadata, and glass review

### Semi-diameters

| Element / surfaces | Before | After | Evidence |
|---|---:|---:|---|
| L54, 32–33 | 9.0 mm | 12.4 mm | Figure 1 draws the final meniscus close to the diameter of L51–L53; the former value made it roughly one-third smaller. The revised rim restores the patent's rear-group profile. |

The remaining group envelopes agree with Figures 1 and 4 within the drawing tolerance.

### Labels and glass

- Corrected the displayed model name to Ricoh's `HD PENTAX-D FA` styling.
- Matched Ricoh's construction drawing to patent L12, L13, and L53 (three ED positions) and L42 (anomalous-dispersion position), added inferred diagram tags and the official count, and retained all patent coordinates as vendor-neutral identities.
- Identified OHARA S-TIM27 as a source-precision catalog equivalent for L33's patent 640345 coordinate. This supplies verified Sellmeier coverage while leaving the production supplier unspecified.
- All 18 elements now have coordinate-compatible Sellmeier coverage.

### Motion

- Rechecked the 153.5 / 260 / 440 mm ordering and all reconstructed 2.0 m rows. Wide-to-tele group travel follows the patent without reversal; close focus moves negative G5 imageward, increasing D26 while decreasing BF by the same amount.

### Verification

- `audit:surface` accepted the 12.4 mm surface pair.
- `audit:image-circle` reported zero undersized surfaces.
