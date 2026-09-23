# Audit Log - SONY FE 24mm f/2.8 G

Patent: JP 2022-030896 A, Example 1 / FIG. 1

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/JP2022030896A.pdf`. Example 1 is shown by FIG. 1 on PDF page 19.
- The patent publishes clear-aperture H values. Stored surface SDs use those H values, with the stop semi-diameter paraxially adjusted to 5.6105 mm to reproduce the patent Fno = 2.884 while treating patent H = 5.769 as the local clear/effective radius.
- FIG. 1 shows a compact G1, a stop just before the moving G2, and a rear G3 that grows slightly toward the image side. Current SDs match the H-backed silhouette: 8.93 mm at the front, a 5.6105 mm stop, and rear surfaces increasing to 9.64 mm before the folded cover-glass gap.
- No SD values changed.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Read Example 1 Table 1 across PDF pages 12–13 (rendered page 13 confirms the text layer): surface 18 d = 18.907;
  surfaces 19–20 are cover glass CG, 2.500 mm, nd 1.51680, νd 64.20 (no θgF, no H); 20 → IMG is 1.000 mm. Table 2
  BF = 21.555 = 18.907 + 2.500/1.51680 + 1.000. The last gap is not focus-variable.
- Surface 18 now stores the patent's 18.907 mm, with `rearPlates` CG (N-BK7, the 1.51680 / 64.2 catalog match) and
  gapAfter 1.000 mm. Paraxial check against the previous data: EFL identical; defocus changes by 0.0002 mm at both
  focus keyframes (rounding in the old 21.555). Physical track grows by 0.852 mm to 60.852 mm.
