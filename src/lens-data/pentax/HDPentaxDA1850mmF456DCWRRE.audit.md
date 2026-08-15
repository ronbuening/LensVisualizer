# Audit Log — PENTAX HD DA 18-50mm f/4-5.6 DC WR RE

Patent: JP 2016-6455 A, Numerical Example 2, Figure 10 and Tables 5–8

## 2026-08-14 — Patent-figure, metadata, and glass review

### Semi-diameters

| Element / surfaces | Before | After | Evidence |
|---|---:|---:|---|
| Hybrid L12, 3–5A | 10.5 / 10.0 / 9.8 mm | 12.5 / 12.0 / 11.8 mm | Figure 10 shows the hybrid member substantially larger than the previous envelope and only moderately smaller than L11. |
| L13, 6–7 | 10.0 / 9.8 mm | 12.0 / 11.8 mm | Figure 10 gives L13 nearly the same rim height as hybrid L12. |

The revised surface 5A polynomial departure and total sag were recomputed at the new 11.8 mm modeled aperture. The remaining group shapes agree with Figure 10 within the drawing's measurement uncertainty.

### Labels and glass

- Removed the decimal point from the internal lens key, fixing schema validation.
- Romanized inventor 古賀 知也 as Tomoya Koga and corrected the displayed model name.
- Identified S-NSL5 and S-NBH55 as source-precision catalog equivalents for patent coordinates 522598 and 800299. The production suppliers remain unspecified, and the bonded resin remains unmatched.

### Verification

- `audit:surface` accepted the revised prescription.
- `audit:image-circle` reported zero undersized surfaces.
