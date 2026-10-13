# Audit Log - Sony FE 28mm F2

Patent: US 10,191,254 B2, Numerical Example 10

## 2026-06-23 - Sony folder patent audit / APD + SD review

- Reviewed local `patents/US10191254.pdf` against `SonyFE28mmf2.data.ts` and the companion analysis sidecar.
- Patent Table 28 confirms the stored R/d/nd/vd prescription for Example 10, including the folded cover-glass representation used in the data file. Tables 29-32 match the asphere and first-order rows already documented in the analysis.
- The patent text does not publish clear apertures or effective diameters. Existing `sd` values are retained as renderer-safe estimates rather than patent-derived values.
- No glass, APD, high-index, spacing, or SD edits were needed in this pass.
- Current generated glass reports show no active Sony catalog-mismatch row for this lens.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Read Table 28 (Example 10) on PDF page 32 (printed column 27) at 160 dpi: surface 18 d = 15.309; surfaces 19–20 are
  an unlabeled cover glass, 2.500 mm, nd 1.516798, νd 64.2; Table 30 BF = 1.000. The sum 15.309 + 2.5/1.516798 +
  1.000 reproduces the legacy 17.957209 exactly.
- Surface 18 now stores the patent's 15.309 mm, with a `rearPlates` entry (N-BK7 class; S-BSL7 is the 1.51633
  variant) and gapAfter 1.000 mm. Plate check against the previous data: EFL identical; paraxial defocus unchanged
  (|Δ| < 1e-14 mm) at infinity and at the 0.25 m close-focus keyframe. Physical track grows by 0.852 mm.
