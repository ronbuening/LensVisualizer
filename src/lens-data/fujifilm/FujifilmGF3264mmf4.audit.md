# Audit Log - FUJIFILM FUJINON GF32-64mmF4 R LM WR

Patent: US 10,191,246 B2, Example 1

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/US10191246.pdf`. The patent publishes Example 1 prescription, zoom data, asphere data, and the wide/tele figure, but no clear-aperture or semi-diameter table.
- The figure shows a very large G1 at the object side, compact G2-G4 groups around the aperture stop, and a larger final G5 near the image side.
- Stored SDs follow that shape: G1 starts at 34.0 mm, the middle groups contract through roughly 9.6-14.2 mm, and final G5 expands to 22.0-24.0 mm.
- No SD values changed. Current values remain inferred from the patent figure, zoom ray envelopes, f/4 stop geometry, edge thickness, and cross-gap sag checks.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Replaced the air-equivalent last gap (27.9461687764 mm) with Table 1 Example 1 (PDF p. 36, column 15): surface 27
  d = 25.8035 mm, then `rearPlates` PP 3.2500 mm, nd 1.51680, νd 64.20 (N-BK7 class), and 0.0000 mm from PP to the
  image plane (`gapAfterMm: 0`). The surface 27 gap is fixed across zoom, so no `var` entry changed.
- Paraxial check against the previous data: EFL identical and defocus unchanged at every zoom station and focus
  keyframe (worst difference 3e-11 mm), because the legacy value was the exact fold 25.8035 + 3.25/1.5168. Physical
  track grows by 3.25(1 − 1/1.5168) = 1.107 mm.
