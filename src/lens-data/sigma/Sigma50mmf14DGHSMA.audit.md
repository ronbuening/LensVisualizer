# Audit Log - SIGMA 50mm f/1.4 DG HSM | Art

Patent: JP 2015-114366 A, Numerical Example 1 / FIG. 1

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/JP2015114366A.pdf`. Numerical Example 1 is illustrated by FIG. 1 on PDF page 27.
- The patent does not publish clear apertures. The current SD set remains inferred and checked against sd/|R|, element front/rear SD ratio, signed air-gap clearance, and positive element edge thickness.
- FIG. 1 is faint in the local PDF, but the diameter hierarchy is visible: a large G1A/G1B front converter group, then smaller floating G2A/G2B subgroups around the stop. Stored SDs follow that shape, starting at 33.0/32.0 mm, narrowing through the central 20-23 mm group, using a 14.64 mm stop, and keeping the rear subgroups around 16.6-18.0 mm.
- No SD values changed.

## 2026-10-30 — Fresh F-mount source, rims and glass review

- Reopened `patents/JP2015114366A.pdf` (SHA-256 `e9ad67a164af9a348a47b913ee2bfa270aed45e47a42755338b47eaf3c4d1663`), Example1 pp.11–12 all13 nd/vd pairs and source near d0=258mm/400mm image-plane state; d587.6nm is defined¶0057 onp.10. No individual C/F/g or partial ratio is printed. All13 compatible curves retained, including E-F1,E-FD10 and M-TAF1 reference families; they are spectral proxies with production supplier/melt unspecified.
- PDFp.27 Figure1 has severe dropout even at600dpi. Exact-publication [original Figure1](https://patentimages.storage.googleapis.com/9b/db/d2/7c60653d9aca10/2015114366-4.png) recovers it (native685×390,SHA-256 `c08a917ddd0553a08b5cb2825c6c3e645bb4651a2863b263212e32392bdcb781`). Paired infinity image5 reads F1.46/ω23.60, matching Example1. Local tables remain literal numerical authority.
- Native axial span S1x≈94 to S23x≈509 over103.2001mm gives≈4.02px/mm. L2's concave arc ends≈92px from the axis versus≈121px body height:q≈0.76, roughly23±0.5mm clear radius and30±0.5mm body. Adopt common S3/S4 outer28.5mm, constrained below R4=28.7552 rather than forcing the schematic's30mm body. S4 inferred cut depth11.5mm resolves cap23.0026mm; it is a source-shape inference with native-pixel uncertainty, no `rimCutDepthSource` exemption. Other small/oblique corners are retained without numeric cuts.
- Full shared inferred-cut guard runs after all rim edits and passes with required margin~0.069mm; peak uncut-beam reach22.4892mm at the published finite endpoint/field29.4074°. Temporary source d0=258mm finite-conjugate endpoint also passes; no candidate focus/control/certification is changed. Canonical checks and9 actual SVG views pass,finite paths,zero hidden trim,connected triplet/doublets. Native f1.46 remains iris-limited;format-corner chief clears and image-circle finds nothing undersized.
- Matched16-point stop-lattice samples retain7,962,lost0,gain168 (not flux). R/d/aspheres/nd/vd/reference/stop/focus/aperture controls and tolerances remain unchanged. Body/cut values are qualified inferred geometry, not manufacturer clear apertures.
