# Audit Log - Olympus M.Zuiko Digital ED 12-60mm f/2.8-4.0

Patent: US 7,583,450 B2, Example 4

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/US7583450.pdf`. Example 4 maps to FIGS. 4(a)-4(c).
- The patent publishes the Example 4 prescription, zoom data, and cover-glass plate, but no full per-surface clear-aperture table for the lens elements.
- FIG. 4 shows a very large G1, compact G2/G3 groups around the stop, and a medium rear G4 before the cover glass. Stored SDs follow that hierarchy: 35.0-26.2 mm through G1, about 10.0-15.4 mm through G2/G3, and about 9.8-14.6 mm through G4.
- No SD values changed. Current values remain inferred from the patent figure, zoom ray envelopes, edge thickness, and cross-gap sag clearance.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Replaced the air-equivalent BF with the Example 4 physical rear stack (PDF p. 21, table col. 14; OD = 250 mm spacings
  p. 22): d26 = 29.58052 / 43.73719 / 60.80026 mm at infinity and close focus, then `rearPlates` plate
  d27 = 4.6000 mm, nd 1.51633, νd 64.14 (S-BSL7, exact catalog match), and d28 = 1.0586 mm to the image. The patent
  prints no plate designation, so `label` is omitted.
- Paraxial check against the previous data: EFL identical; defocus changes by at most 1e-6 mm (the legacy fold was
  exact, 29.58052 + 4.6/1.51633 + 1.0586 = 33.67276). Physical track grows by 4.6 × (1 − 1/1.51633) = 1.566 mm at every
  zoom and focus state. `closeFocusM` stays 0.25 (the patent's OD = 250 mm is measured from the image plane).

## 2026-11-14 — Published finite conjugates

Patent: US 7,583,450 B2, Example 4.

| State (zoom/keyframe) | Field | Before | After | Paraxial offset (mm) | Offset (depths of focus) | Other reference (depths) | Verdict |
|---|---|---|---|---|---|---|---|
| 0/1 | `focus.conjugates` | absent | 250 mm, `image-plane` | 0.004056842 | 0.440309 | -57.789277 | consistent |
| 1/1 | `focus.conjugates` | absent | 250 mm, `image-plane` | 0.002222543 | 0.154395 | -141.497169 | consistent |
| 2/1 | `focus.conjugates` | absent | 250 mm, `image-plane` | 0.008953000 | 0.476127 | -373.057521 | consistent |

Source: US 7,583,450 B2, Example 4, variable spacings (PDF p. 22, printed col. 15), OD = 250 mm; PDF p. 19 defines OD as measured from the image plane.

Distance-reference basis: `patent-defined`. The patent states: “OD is a subject distance as measured from the image plane.”

- State 0/1: D5 G1-G2=0.59917, D11 G2 float=0.77704, D19 G3-G4=8.09555, BF=29.58052, D13 G2-STO=26.7452 mm. The printed finite-spacing column matches these authored gaps.
- State 1/1: D5 G1-G2=19.79172, D11 G2 float=0.77704, D19 G3-G4=3.06658, BF=43.73719, D13 G2-STO=13.25433 mm. The printed finite-spacing column matches these authored gaps.
- State 2/1: D5 G1-G2=40.54294, D11 G2 float=0.77704, D19 G3-G4=0.8, BF=60.80026, D13 G2-STO=7.42963 mm. The printed finite-spacing column matches these authored gaps.

Residuals retain the authored prescription and image plane. Every declared state already has its published-focus flag.
