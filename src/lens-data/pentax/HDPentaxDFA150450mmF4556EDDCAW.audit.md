# Audit Log — PENTAX HD D FA 150-450mm f/4.5-5.6 ED DC AW

Patent: US 2016/0327774 A1, Numerical Embodiment 1, Figures 1 and 4

## 2026-08-14 — Patent-figure, metadata, and glass review

### Semi-diameters

| Element / surfaces | Before | After | Evidence |
|---|---:|---:|---|
| L54, 32–33 | 9.0 mm | 12.4 mm | Figure 1 draws the final meniscus close to the diameter of L51–L53; the former value made it roughly one-third smaller. The revised rim restores the patent's rear-group profile. |

The remaining group envelopes agree with Figures 1 and 4 within the drawing tolerance.

### Labels and glass

- Corrected the displayed model name to the repository's `PENTAX HD D FA` convention.
- Identified OHARA S-TIM27 as a source-precision catalog equivalent for L33's patent 640345 coordinate. This supplies verified Sellmeier coverage while leaving the production supplier unspecified.
- All 18 elements now have coordinate-compatible Sellmeier coverage.

### Verification

- `audit:surface` accepted the 12.4 mm surface pair.
- `audit:image-circle` reported zero undersized surfaces.
