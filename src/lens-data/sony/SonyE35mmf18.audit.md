# Audit Log - Sony E 35mm F1.8 OSS

Patent: JP 2014-089352 A, Example 1

## 2026-06-23 - Sony folder patent audit / APD + SD review

- Reviewed local `patents/JP2014089352A.pdf` against `SonyE35mmf18.data.ts` and the companion analysis sidecar.
- Patent Example 1 confirms the stored R/d/nd/vd prescription, variable focus gaps `D(7)` and `D(9)`, Fno = 1.861, and image height 14.20 mm.
- The patent text does not publish clear apertures or effective diameters. Existing `sd` values are retained as renderer-safe estimates rather than patent-derived values.
- Updated L121 from `apd: false` to `apd: "inferred"` because the patent nd/vd maps to the catalog ED fluorocrown class; no patent dPgF or theta-gF value is assigned.
- Current generated glass reports show no active Sony catalog-mismatch row for this lens.
