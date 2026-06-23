# Audit Log - Sony FE 70-200mm F2.8 GM OSS

Patent: US 2019/0018229 A1, Numerical Example 1

## 2026-06-23 - Sony folder patent audit / APD + SD review

- Reviewed local `patents/US20190018229A1.pdf` against `SonyFE70200mmf28G.data.ts` and the companion analysis sidecar.
- Patent Table 1 confirms the stored R/d/nd/vd zoom prescription for Example 1, and Table 2 confirms the asphere coefficient rows already used by the data file.
- The patent text does not publish clear apertures or effective diameters. Existing `sd` values are retained as renderer-safe estimates rather than patent-derived values.
- No glass, APD, high-index, spacing, or SD edits were needed in this pass.
- Current generated glass reports show no active Sony catalog-mismatch row for this lens.
