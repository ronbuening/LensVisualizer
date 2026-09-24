# Audit Log — Ricoh GR Lens 6.0mm f/1.9 (GR DIGITAL III)

Patent: JP 2010-72639 A, Example 4 / Figure 4.

## 2026-08-08 — Patent-figure SD, diagram-label, and glass audit

- Compared the infinity site section directly with Figure 4 on patent page 20. L1/L2 and Group II already match the
  patent's relative envelopes. The isolated positive L3 was visibly too tall: about 74% of L1 in the data versus about
  58% in the drawing.
- Reduced both L3 rims (surfaces 5–6) from `5.2 / 5.0 mm` to `4.1 / 4.1 mm`. The normal-density on/off-axis display rays
  retain at least 0.60 mm radial clearance at both published focus endpoints, and the exact surface validator passes.
- Added L1–L8 source labels while retaining the patent's Group I / Group II and the two true cemented-pair annotations.
- Rechecked all eight rounded `νd` badges and catalog assignments. Every glass is coefficient-backed and coordinate
  compatible; the three high-Abbe positions remain descriptive dispersion classifications rather than unsupported
  manufacturer melt claims.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Re-read Table 10 (Example 4, PDF p. 16) and Table 11 from the rendered page: C = 5.52 / 5.66 mm (infinity / 300 mm),
  surfaces 16–17 t = 1.24, N 1.50000, ν 64.00, no designation or glass name; the surface-17 D is not printed. Surface 15
  now stores the physical C values and the plate is a `rearPlates` entry. Its 0.8998094 mm gap to the image is derived,
  not printed (previous normalized 7.2464760762 mm air-equivalent BF − 5.52 − 1.24/1.50000), preserving the image plane.
- No catalog glass matches 1.50000 / 64.00 (nearest BSL7-class and BK4 are off in nd), so `glass` is omitted.
- Plate check: EFL identical and paraxial defocus unchanged at both focus keyframes (worst difference 7e-16 mm); physical
  track grows 0.4133 mm, the plate's t(1 − 1/n). `closeFocusM: 0.3` is the patent's quoted object-to-image distance and is
  unchanged. Surface validation and image-circle audits pass.
