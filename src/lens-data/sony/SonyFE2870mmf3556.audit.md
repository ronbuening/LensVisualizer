# Audit Log - Sony FE 28-70mm F3.5-5.6 OSS

Patent: US 2015/0077859 A1, Numerical Example 4

## 2026-06-23 - Sony folder patent audit / APD + SD review

- Reviewed local `patents/US20150077859A1.pdf` against `SonyFE2870mmf3556.data.ts` and the companion analysis sidecar.
- Patent Table 13 confirms the stored R/d/nd/vd prescription for Example 4, and Tables 14-17 match the variable gaps, first-order data, and asphere rows used by the data file.
- The patent text does not publish clear apertures or effective diameters. Existing `sd` values are retained as renderer-safe estimates rather than patent-derived values.
- Updated G5 from untagged APD to `apd: "inferred"` because the patent nd/vd maps to the catalog ED fluorophosphate class; no patent dPgF or theta-gF value is assigned.
- Current generated glass reports show no active Sony catalog-mismatch row for this lens.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Read Example 4 Table 13 on PDF page 24 (printed page 11) at 160 dpi: surface 18 d = 30.521; surfaces 19–20 are filter
  FL, 2.500 mm, nd 1.51680, νd 64.20; 20 → image is 1.000 mm. The gap is fixed (not in Table 16), so one value serves
  every zoom station and focus keyframe.
- Surface 18 now stores the patent's 30.521 mm, with `rearPlates` FL (N-BK7 class for 1.51680 / 64.2) and gapAfter
  1.000 mm. Paraxial check against the previous data: EFL identical at all three zoom stations; defocus unchanged
  (worst difference 2.5e-7 mm). Physical track grows by 0.852 mm, the filter's t(1 − 1/n).
