# Audit Log - Olympus Zuiko 9-36mm f/2.0-2.4

Patent: US 2003/0072086 A1, Example 1

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/US20030072086A1.pdf`. Example 1 maps to FIGS. 1(a)-1(c).
- The patent publishes prescription, zoom data, and the rear prism/filter train, but no full powered-surface clear-aperture table.
- FIG. 1 shows a very large front G1, compact G2/G3 groups around the fixed stop, a moderate G4, and a flat prism/filter rear train. Stored SDs follow that hierarchy: 29.0-24.8 mm in G1, about 10.2-11.3 mm in G2, a 5.72 mm stop, 9.1-12.4 mm through G3/G4, and 13.0 mm for the prism.
- No SD values changed. Current values remain inferred from FIG. 1, zoom ray envelopes, and prism-aware rendering constraints.

## 2026-09-23 — Rear plates modeled as `rearPlates`

- Read Example 1 on PDF page 27 (printed page 7) at 250 dpi: d28 = 1.0000 air after the 24.0 mm prism, d29 = 1.5700
  filter plate nd 1.54771 νd 62.84, d30 = 1.0000 air, d31 = 0.8000 cover glass nd 1.52300 νd 55.00, L = 1.290 to the
  image plane. No plate designations are printed; no catalog glass is compatible with either nd/νd pair, so `glass` is
  omitted (Abbe dispersion). The prism stays in `surfaces`.
- The legacy 4.8248 mm fold was a re-closed image plane (printed train is 4.8297 mm air-equivalent), so surface 28 now
  stores 4.8248 − 1.5397 − 2.29 = 0.9951 mm (printed 1.000) and both plates keep their printed gaps after them.
  Paraxial check against the previous data: EFL identical; defocus changes by 0.00002 mm (0.9951 rounding) at every
  zoom station. Physical track grows by 0.830 mm.
