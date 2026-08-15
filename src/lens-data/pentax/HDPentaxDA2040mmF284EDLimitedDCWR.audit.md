# Audit Log — HD PENTAX-DA 20-40mm f/2.8-4 ED Limited DC WR

Patent: JP 2015-11156 A, Numerical Example 1, Figure 1 and Tables 1–4

## 2026-08-14 — Patent-figure, metadata, and glass review

### Semi-diameters

No SD change was justified. The element-to-element taper agrees with Figure 1 after normalization. Treating the drawing's radial scale as an absolute dimension would require the front element to exceed its 17.097 mm surface radius, confirming that the figure is illustrative rather than dimensionally uniform.

### Labels and glass

- Romanized inventor 大石 崇彦 as Takahiko Oishi and corrected the displayed model name to Ricoh's `HD PENTAX-DA` styling.
- Matched Ricoh's construction drawing to patent positions L22 (ED) and L27 (anomalous-dispersion glass), added inferred APD tags for the diagram, and added the official special-glass count. No line indices or vendor identity were invented.
- Added the patent power signs to the G1, G2A, and G2B diagram labels.
- Eight of nine elements have coordinate-compatible Sellmeier coverage. Patent coordinate 689528 remains unresolved: the closest coefficient-backed catalog families differ too much in refractive index to assign without inventing material behavior.

### Motion

- Rechecked the three published infinity states and the constrained close-focus solve. Zoom order remains 20.60 / 30.00 / 39.00 mm; G1 follows the patent's imageward-then-objectward reversal while G2 moves monotonically objectward. Close focus moves G1 objectward by increasing D6 at every zoom station.

### Verification

- `audit:image-circle` reported zero undersized surfaces.
- The unchanged prescription passes the shared lens validator.
