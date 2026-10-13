# Audit — LEICA SUMMILUX-TL 35mm f/1.4 ASPH.

Patent: EP 3 029 504 A1, Example 4.

## 2026-09-21 — Patent figure, glass and metadata integration

### Semi-diameters

Reviewed local `EP3029504A1.pdf, p. 22, FIG. 4` at 600 dpi and compared the optical outlines with the viewer. Retained the published effective radii and the existing inferred S11 widening to 12.7 mm. The drawing is consistent in relative proportions. Straight shoulders, leaders and group brackets make automatic front-group readings unreliable; these do not override the tabulated radii.

### Glass classification

The patent reference coordinates are retained unchanged. Catalog curves are qualified spectral proxies unless the patent explicitly names the glass supplier; no production-melt identity is inferred from a coordinate match. Compatibility uses the authored d/e reference system, not a mixed-line comparison.

| Element | Before | After |
|---|---|---|
| L11 | 834374 class (supplier unresolved) | NBFD10 class (coordinate-compatible spectral proxy; native d 1.834/37.35; supplier/melt unproven) |

### Live glass-label follow-up

Named the existing compatible spectral proxies explicitly while retaining coordinate codes and supplier/melt uncertainty: L12 → PBH21, L13 → E-CF6, L14 → TAFD5F, L15 → E-FD4, L16 → E-FD8, L17 → TAC8, L18 → S-LAM60, L21 → S-LAM60, L31 → TAFD33, L32 → TAFD5F, L33 → H-ZF1. No spectral curve or patent reference coordinate changes.

### Live geometry and travel follow-up

The live infinity/close states agree with FIG. 4: the single negative Gr2 element moves imageward by 7.10 mm while Gr1/Gr3 remain fixed. Retained published effective radii and the documented S11 tracing clearance. Both aspheric elements and all four cemented pairs match the source labels. No zoom travel applies to this prime lens.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Read Example 4 surface data (¶0065, printed page 14) and miscellaneous data (¶0067, pages 14–15): surface 21 d = 18.13;
  surfaces 22–23 are plate PT, 1.50 mm, nd 1.5168, νd 64.20, R 16.000; bf = 0.8; TL = 94.8. The fixed gap does not
  vary with focus (only d14/d16 are variable).
- Surface 21 now stores the patent's 18.13 mm, with `rearPlates` PT (N-BK7 class; `sd` 16.0 from the published
  effective radius) and gapAfter 0.80 mm. Paraxial check against the previous 19.918924 mm fold: EFL identical and
  defocus unchanged at POS1 and POS2 (the fold was carried at full precision).
- Physical track grows by 0.511 mm to 94.76 mm, now consistent with the patent's printed TL 94.8 mm.
