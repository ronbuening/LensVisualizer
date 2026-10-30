# Tamron SP AF 60mm f/2 G005 — source audit

## 2026-10-30 — Fresh original shape and glass reinspection

Controlling original: `patents/US20110286116A1.pdf`, Embodiment 1 / ¶0046. Figure 1A/B (PDF page 2) was directly inspected at 600 dpi; the complete media/focus table and d-line definitions in ¶0045–46 (PDF page 12) were visually read. Every face and cemented boundary was inspected. The source has 14 physical glasses in 10 air-separated groups, without aspheres, extra layers or plates. Its object:image ratio 5:1 means 0.2×, followed by 1:1. Product correlation remains qualified: Tamron G005 marks physical elements 2/4 as LD, whereas this example's high-Abbe glasses are 3/5.

### Shape disposition

The native figure is 300 dpi. Its first-to-last vertex span of 81.4564 mm occupies approximately 2018 pixels at 600 dpi, giving about 12.39 native pixels/mm. Existing front caps already exceed the schematic proportions and are retained. Rear continuous caps grow to 15 mm at S16/17 and 14.5 mm at S18–25. All compound interfaces remain connected and the literal R/d values are preserved.

S7's concave air exit has a distinct flat end. The measured cap/outer ratio is approximately 0.825; a native outer radius of about 194 pixels gives a one-native-pixel ratio band of approximately 0.815–0.835. Applied to the retained 17.2 mm body, this suggests about 14.2 mm clear radius. The full final beam reaches 15.152928 mm at focus 0.45 and field 7.58298°, requiring 0.05 mm clearance. The adopted 1.85 mm depth gives a 15.238832 mm clear cap, ratio 0.885979 and 1.961168 mm land. A 1.84 mm depth would give only 15.198195 mm, below the required 15.202928 mm. The adopted cap is explicitly moved outward from the figure for beams; no printed-depth exemption or tolerance change is used. Other bevels and weak curves do not establish further opaque cuts.

### Glass disposition

All 14 source d-line nd/νd pairs match literally; νd is printed to one decimal. No C/F/g indices, partial ratios or individual anomalous-material designations are supplied. Remove 56 catalog-only spectral copies. All 14 glasses retain compatible coefficient coverage.

| Elements | Source nd / νd | Qualified current proxy disposition                             |
| -------- | -------------- | --------------------------------------------------------------- |
| L1       | 1.80610 / 33.3 | Retain NBFD15                                                   |
| L2       | 1.80610 / 40.9 | Retain S-LAH53                                                  |
| L3, L5   | 1.49700 / 81.6 | FCD1 replaces S-FPL51: coefficient νd 81.60895 versus 81.54589  |
| L4       | 1.75520 / 27.5 | Retain S-TIH4                                                   |
| L6       | 1.80400 / 46.6 | Retain S-LAH65V                                                 |
| L7       | 1.51680 / 64.2 | Retain BSC7                                                     |
| L8, L14  | 1.84666 / 23.8 | Retain S-TIH53                                                  |
| L9, L12  | 1.69680 / 55.5 | Retain S-LAL14                                                  |
| L10      | 1.77250 / 49.6 | TAF1 replaces S-LAH66N: coefficient νd 49.62428 versus 49.54791 |
| L11      | 1.72825 / 28.5 | Retain S-TIH10                                                  |
| L13      | 1.54072 / 47.2 | Retain S-TIL2                                                   |

The curve changes improve agreement with the coarse printed coordinates. They establish no supplier or melt identity. L3/L5 APD tags remain inferred, with the production-position mismatch explicit. No source spectral precision is invented and no manufactured apochromatic performance is claimed.

### Verification and limits

Canonical/surface, image-circle, source-format field and aperture checks pass: corner coverage ≥99%, design f/2.06 within 3%. The full shared cut guard reports no errors or untraced fields. A finite-point supplement at both printed macro-gap states uses independently derived paraxial object conjugates and the unchanged image plane; it also passes. These calculated distances are not added as source-certified MTF conjugates. R/d, stop/aperture, focus controls, rear image plane and tolerances are invariant.

Actual nine-state buildLens/computeElementShapes SVGs were rasterized and viewed: connected glass, zero hidden trim. An identical d-line collimated grid of 144405 samples across three focus states, three zoom coordinates and five field fractions gives 67851 retained, 0 lost, 3915 gained and 72639 blocked in both versions. Counts are samples, not flux or finite-source performance. Candidate resolution is 14/14 strict. Existing dispersion, glass-resolution and partial-line suites pass: 3 files / 94 tests. No shared catalog/engine change or per-lens test.
