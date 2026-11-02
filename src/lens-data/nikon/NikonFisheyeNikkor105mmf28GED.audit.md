# Audit Log - Nikon AF DX Fisheye-Nikkor 10.5mm f/2.8G ED

Patent: US 7,161,746 B2, Example 9 / Table 9 / FIG. 17

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/US7161746.pdf`. The patent text maps Example 9 to FIG. 17 and Table 9.
- The patent discusses front-lens diameter as a design constraint but does not publish full clear semi-diameters for Example 9.
- FIG. 17 labels seven lens components, with cemented components accounting for the data file's 10 glass elements / 7 groups. Stored SDs match the figure hierarchy: a very large front L1 at 18 mm, stepped-down front-group elements through 6.4-14.6 mm, a 6.0 mm stop, and a compact rear G2 expanding to 10.3 mm at the final element.
- No SD values changed. Current values remain inferred from FIG. 17 and constrained by the signed-sag and cross-gap checks documented in the data header.

## 2026-10-30 — Fresh source figure, physical filter and glass review

Directly inspected `US7161746.pdf` PDF page 18 Figure 17 at 600 dpi and native 300-ppi raster, page 30 Table 9, and page 26's 587.6-nm d-line/media definition. Every exposed/convex/concave face and the three cemented boundaries was reviewed. Figure axial first-to-last scale is approximately 11.5 px/mm at 150 dpi. The front rim is approximately 27 mm (native half-height≈620 px, rear-cap q≈0.61±0.003); S1 grows from 18 to 27 mm, while S2 retains clear SD14.6 and gains `rimExtensionSd:27`. The apparent source rear cap is beyond the existing .9R=14.805-mm bound; adopted q=.541 is deliberately conservative. L2's continuous S3 cap grows14→16.8 mm, S4 grows12→13.3 mm and gains a land to16.8 (native q≈.79±.005, adopted.792). The narrow .25-mm S6–S7 gap and stepped D1 cemented body remain unchanged. The small height steps at cemented interfaces are not independent exposed lands. No additional concave cut is supported.

All ten Table 9 nd/vd pairs match exactly. Existing L6b nC=1.49514,nF=1.50123,ng=1.5045 are absent from the source and were removed; actual FCD1 catalog dispersion replaces that unsourced complete row. All ten current resolver curves are available and explicitly qualified, without proving production supplier/melt. L6b's ED/APD tag remains a class inference, not a published partial-dispersion claim. No source partials are omitted or fabricated. Existing d13=6.4398 source-consistency correction remains disclosed and unchanged; the printed8.776 still conflicts with its own conditional/TL values.

Surface/canonical/inferred-cut checks, image-circle, and iris-limited f2.88 pass. Nine actual SVG states have finite paths/zero automatic trim and were viewed. Projection-aware vector pupil tests at infinity and focus-slider endpoint preserve25/25 axial samples;60° improves14→17/25 and75°0→15/25 relative to baseline. At85°/90° the generic chief bracket still fails although some aimed samples trace, so this does not verify the entire stated180° field. This example has no published finite focus law; slider samples are not new source conjugates. Shared glass suites pass3 files / 94 tests.
