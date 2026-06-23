# Audit Log - Sony FE 70-200mm F4 G OSS

Patent: US 2015/0226945 A1, Numerical Example 1

## 2026-06-23 - Sony folder patent audit / APD + SD review

- Reviewed local `patents/US20150226945A1.pdf` against `SonyFE70200mmf4G.data.ts` and the companion analysis sidecar.
- Patent Table 1 confirms the stored R/d/nd/vd zoom prescription for Example 1, and Tables 2-3 confirm the variable gap and asphere rows already used by the data file.
- The patent text does not publish clear apertures or effective diameters. Existing `sd` values are retained as renderer-safe estimates, matching the file header note.
- Updated L12, L13, and L412 from untagged APD to `apd: "inferred"` because the patent nd/vd values map to ED/Super-ED fluorophosphate catalog classes; no patent dPgF or theta-gF values are assigned.
- Current generated glass reports show no active Sony catalog-mismatch row for this lens.
