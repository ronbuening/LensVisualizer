# Audit Log - Sony FE 28-70mm F3.5-5.6 OSS

Patent: US 2015/0077859 A1, Numerical Example 4

## 2026-06-23 - Sony folder patent audit / APD + SD review

- Reviewed local `patents/US20150077859A1.pdf` against `SonyFE2870mmf3556.data.ts` and the companion analysis sidecar.
- Patent Table 13 confirms the stored R/d/nd/vd prescription for Example 4, and Tables 14-17 match the variable gaps, first-order data, and asphere rows used by the data file.
- The patent text does not publish clear apertures or effective diameters. Existing `sd` values are retained as renderer-safe estimates rather than patent-derived values.
- Updated G5 from untagged APD to `apd: "inferred"` because the patent nd/vd maps to the catalog ED fluorophosphate class; no patent dPgF or theta-gF value is assigned.
- Current generated glass reports show no active Sony catalog-mismatch row for this lens.
