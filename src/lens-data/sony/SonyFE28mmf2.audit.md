# Audit Log - Sony FE 28mm F2

Patent: US 10,191,254 B2, Numerical Example 10

## 2026-06-23 - Sony folder patent audit / APD + SD review

- Reviewed local `patents/US10191254.pdf` against `SonyFE28mmf2.data.ts` and the companion analysis sidecar.
- Patent Table 28 confirms the stored R/d/nd/vd prescription for Example 10, including the folded cover-glass representation used in the data file. Tables 29-32 match the asphere and first-order rows already documented in the analysis.
- The patent text does not publish clear apertures or effective diameters. Existing `sd` values are retained as renderer-safe estimates rather than patent-derived values.
- No glass, APD, high-index, spacing, or SD edits were needed in this pass.
- Current generated glass reports show no active Sony catalog-mismatch row for this lens.
