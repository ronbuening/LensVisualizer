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
