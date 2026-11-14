# Audit Log - FUJIFILM FUJINON XF 16mm f/2.8 R WR

Patent: US 2020/0073096 A1, Example 3 / Table 9

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Read Example 3 Table 9 on PDF page 21 of the local `patents/US20200073096A1.pdf` (200 dpi render): surface 19
  d = 11.10; surfaces 20–21 are the parallel plate PP (¶0039), 2.85 mm, Nd 1.51633, νd 64.14, θgF 0.53531; surface
  21 → Sim is 1.10 mm. 11.10 + 2.85/1.51633 + 1.10 reproduces the previous folded 14.079538095 mm exactly.
- Surface 19 now stores the patent's 11.10 mm, with `rearPlates` PP labeled S-BSL7 (exact OHARA 1.51633 / 64.14
  coordinate) and dPgF −0.00060652 from the patent θgF against the project normal line; gapAfter 1.10 mm.
- Paraxial check against the previous data: EFL identical; defocus unchanged (< 1e-9 mm) at all three focus
  keyframes. Physical track grows by 0.970 mm to 60.49 mm, so the model image plane is now the patent's physical Sim
  plane, which is the plane the 1.06049 m and reconstructed 0.17 m focus distances were already referenced to.

## 2026-11-14 — Source-certified finite conjugates

Patent: US20200073096A1.

| Zoom / keyframe | Field | Before | After | Source and paraxial residual |
|---|---|---|---|---|
| 0 / 1 | `focus.conjugates` | No declaration | 1000 mm, `first-surface` | Example 3, Table 11, 1 m column; DD[15]=3.10, DD[17]=4.51 mm; ¶0083 (PDF p.21 (printed p.9)). Offset +0.000953999 mm / +0.097989 depths; alternate reference 1.8435642521746056 depths; `consistent`. |

The patent prints the distance without defining its datum. The first-surface reference is identified by the conjugate audit (`referenceBasis: audit-resolved`), which discriminates the alternative. This basis is recorded in the declaration’s `source` and the accompanying results; the current conjugate schema has no separate reference-basis field.

The declared states already carry published focus flags. No prescription, gap, image-plane, or existing conjugate value changes.
