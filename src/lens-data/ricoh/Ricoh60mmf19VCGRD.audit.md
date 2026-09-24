# Audit Log — Ricoh GR Lens 6.0mm f/1.9 (GR DIGITAL IV)

Patent: JP 2010-164839 A, Example 4 / Figure 4.

## 2026-08-08 — Patent-figure SD, diagram-label, aperture, and glass audit

- Compared the site section with Figure 4 on patent page 16. The front 1F pair, compact 1R element, central 2F
  cemented pairs, and final 2R asphere follow the patent's relative envelopes; no SD change cleared the evidence threshold.
- Added L1–L8 source labels and retained the patent's 1F / 1R / 2F / 2R subgroup annotations.
- Corrected the header aperture text to distinguish the marketed `f/1.9` from Example 4's `f/1.99` design instead of
  displaying only the rounded product value.
- Rechecked both asphere markers, all rounded `νd` badges, and all eight glass identities. Every optical glass resolves
  to a coordinate-compatible coefficient-backed catalog row; the historical S-LAH65 assignment uses its audited
  obsolete-glass coefficients rather than a current V/VS substitute.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Read Table 7 on patent page 15: surface 15 D = 7.08, plate `F` (¶0067) at surfaces 16–17 with D = 1.50, N = 1.50000,
  ν = 64.00; no spacing is printed after surface 17. Surface 15 now stores the printed 7.08 mm, and the plate's
  `gapAfterMm = 0.604199096476275` is derived, not printed (legacy air-equivalent paraxial BFD
  8.684199096476275 − 7.08 − 1.50/1.50000), preserving the file's solved image plane. No catalog glass is compatible
  with 1.50000 / 64.00, so `glass` is omitted (Abbe dispersion).
- Against the previous folded data, EFL is identical and paraxial defocus is unchanged (worst |Δ| 4.4e-16 mm). Physical
  track grows by t(1 − 1/n) = 0.500 mm, from 45.944199 to 46.444199 mm.
