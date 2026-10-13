# Audit Log - FUJIFILM FUJINON XF56mmF1.2 R WR

Patent: JP 2023-029039 A, Example 2

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/JP2023029039A.pdf`. The patent publishes Example 2 prescription and focus data in the Japanese tables and Fig. 4 section, but no clear-aperture or semi-diameter table. The prescription table columns are `Sn`, `R`, `D`, `Nd`, `vd`, and `theta_gF`.
- Fig. 4 shows two tall front G1 elements, a large moving G2 with its widest elements object-side of the stop, and a smaller but still full-height G3 behind the focus group.
- Stored SDs follow that hierarchy: G1 is 25.4-25.6 mm, G2 tapers from about 21.5 mm to 11.6-13.1 mm around and behind the stop, and G3 remains about 11.0-13.2 mm.
- No SD values changed. Current values remain inferred from the patent figure, f/1.2 stop geometry, focus-group ray envelope, edge thickness, and cross-gap sag clearance.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Read Table 4 (p. 16) of `patents/JP2023029039A.pdf`: surface 22 d = 9.275, surfaces 23–24 optical member PP 2.850 mm, nd 1.51680, νd 64.20, θgF 0.53, then 1.013 mm to the image plane; Table 5 BF 12.167. The gap before PP does not vary with focus. Surface 22A now stores the physical 9.275 mm, and PP is a `rearPlates` entry labeled `PP` with glass N-BK7 (catalog-compatible for 1.51680 / 64.20) and no dPgF: the printed θgF (0.53, two decimals) is too coarse, so the catalog curve supplies the g line.
- Against the legacy fold (12.167012 mm), EFL is identical at infinity and close focus; paraxial defocus moves by −0.000057 mm because the old stored value did not exactly equal 9.275 + 2.850/1.51680 + 1.013 = 12.166956 mm.
- Physical track grows by 0.971 mm (t(1 − 1/n)), from the 90.018 mm air-equivalent track to 90.989 mm.
