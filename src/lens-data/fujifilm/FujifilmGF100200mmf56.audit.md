# Audit Log - FUJIFILM FUJINON GF100-200mmF5.6 R LM OIS WR

Patent: US 2019/0361195 A1, Example 1

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/US20190361195A1.pdf`. The patent publishes Example 1 prescription, zoom/focus data, asphere data, and Fig. 1 section, but no clear-aperture or semi-diameter table.
- Fig. 1 shows the positive front group as the largest aperture, smaller moving G2/G3 groups, a stop in front of the rear section, and a moderate final group near the image side.
- Stored SDs preserve that visual hierarchy: G1 begins around 25-27 mm, G2/G3 are mostly 11-14.7 mm, the stop is about 11.1 mm, and the rear group re-expands to about 14.5-15.4 mm.
- No SD values changed. Current values remain inferred from the patent figure, zoom-state ray envelopes, f/5.6 stop geometry, edge thickness, and cross-gap sag checks.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Replaced the air-equivalent fold (stored d34 = 60.62 mm) with the patent's physical rear stack from Table 1-continued
  (PDF p. 28): d34 = 57.4777 mm (fixed; G4 does not move), then `rearPlates` PP 3.2000 mm, nd 1.51680, νd 64.20
  (N-BK7 catalog match), and d36 = 1.0314 mm to the image plane. The plate is traced by every analysis and not drawn.
- Paraxial check against the previous data: EFL identical at all three zoom stations; defocus moves by −0.0012 mm, the
  rounding in the old 60.62 mm (exact fold 60.6188 mm). Physical track grows by 3.2 × (1 − 1/1.5168) = 1.090 mm less
  that rounding (1.089 mm).
