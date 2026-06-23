# Audit Log - Sony E 30mm F3.5 Macro

Patent: JP 2012-159613 A, Example 1

## 2026-06-23 - Sony folder patent audit / APD + SD review

- Reviewed local `patents/JP2012159613A.pdf` against `SonySEL30mmf35.data.ts` and the companion analysis sidecar.
- Patent Example 1 confirms the stored R/d/nd/vd prescription, variable focus gaps `D11` and `D14`, Fno, focal length, and image height.
- The patent text does not publish clear apertures or effective diameters. Existing `sd` values are retained as renderer-safe estimates rather than patent-derived values.
- Updated L114 from untagged APD to `apd: "inferred"` because the patent nd/vd and line indices map to the advertised ED fluorophosphate catalog class; no patent dPgF is assigned.
- Current generated glass reports show no active Sony catalog-mismatch row for this lens.
