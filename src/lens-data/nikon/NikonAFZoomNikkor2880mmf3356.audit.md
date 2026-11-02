# Audit Log - Nikon AF Zoom-Nikkor 28-80mm f/3.3-5.6

Patent: US 5,485,314, Fourth Embodiment / Table 4

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/US5485314.pdf`. The Fourth Embodiment corresponds to FIGS. 4A-4C and Table 4.
- The patent discusses front-lens diameter and stop placement, but does not publish a full clear-aperture table.
- FIGS. 4A-4C show a modest front negative G1 and a much smaller G2 around the aperture stop and rear relay. Stored SDs follow that relationship: 18.0-14.6 mm across the front cemented group and about 6.45-11.0 mm through the compact rear group, with a 7.9 mm stop.
- No SD values changed. Current values remain figure-derived estimates with rendering and sag-clearance constraints.

## 2026-10-30 — Fresh source outline and glass reinspection

- Directly inspected local `patents/US5485314.pdf`: Embodiment 4 Figures 4A–C (PDF p. 5, all three zoom states rendered at 600 dpi and rotated), complete Table 4 (pp. 11–12), d-ray/asphere definitions (p. 10), and explicit fourth-embodiment resin/glass construction (p. 12; general compound definition p. 9). Native raster is 300 ppi (`pdfimages -list`), so 600 dpi is a 2× render. Inspected all convex/concave faces and the thin compound interface.
- Minimal axial-beam raises: S8 7.9→8.3, S9 7.4→8.3 (square L4), S10 7.7→7.9, S11 6.45→6.9 mm. All three stated apertures now trace to f/3.3, f/4.5, f/5.6 exactly. The larger square L5 candidate at 7.9 mm is rejected: S11→S12 intrusion 1.390 mm exceeds the unchanged 90% bound 1.215 mm of the source 1.350 mm gap. No source spacing or tolerance was relaxed.
- Figure 4 clearly shows an outer flat end on L1's concave compound rear. The full rear extension 14.6→18 mm was tested and rejected: the existing S2 glass/resin interface gives −1.362 mm resin edge thickness at its 16 mm radius. Do not draw an isolated resin wing or author a forbidden land on the cemented interface. Retain the qualified tapered compound approximation. No additional L5 trim is supported: its very short apparent cap/end break is inseparable from native ink thickness, so there is no robust source q below 1. Other faces retain existing bounds. The front aspheric cap remains 14.6 mm (departure −1.435732 mm, slope 46.343740°).
- Fresh glass-only check: all 7 Table 4 nd/νd pairs retained at d ray λ = 587.6 nm. Six glass media resolve to compatible coefficient-backed curves, including current J-LAFH3 for source `1.79504 / 28.6`; resin `1.49712 / 55.9` stays unresolved. Qualified the glass names as spectral proxies and removed the unsupported UV-curing resin identification; the source establishes a resinous compound, not cure chemistry or production supplier. No source C/F/g or partial ratios are printed and none are authored. Resolver selections and all RGB/V responses are unchanged.
- Focused surface/image-circle checks pass (0 undersized, 0 skipped); all three nominal axial stations pass. Nine actual SVG states were inspected with finite paths and zero hidden trim. Shared dispersion/resolver validation passes 93 tests; AST scan finds no duplicate properties or parse errors. Public material coverage and current derived stop radii are synchronized. Source R/d/aspheres, stop position, zoom/focus gaps, aperture controls, and tolerances remain unchanged.
