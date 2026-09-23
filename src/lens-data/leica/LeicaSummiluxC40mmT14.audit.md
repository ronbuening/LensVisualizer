# Audit — LEICA SUMMILUX-C 40mm T1.4

Patent: US 8,508,864 B2, Example 2.

## 2026-09-21 — Patent figure, glass and metadata integration

### Semi-diameters

Reviewed local `US_8508864_B2.pdf, p. 12, FIG. 13a (also FIG. 12, p. 11)` at 600 dpi and compared the optical outlines with the viewer. Retained Table 3 published clear-aperture half-diameters. Ray bundles and group brackets contaminate automated figure readings; the tabulated apertures take precedence. The omitted front filter is excluded from the optical model. The explicit 28 mm design image diagonal on printed p. 16 supplies `imageCircleMm`; it is distinct from the marketed 33 mm circle and does not require inventing a canonical format id.

### Glass classification

The patent reference coordinates are retained unchanged. Catalog curves are qualified spectral proxies unless the patent explicitly names the glass supplier; no production-melt identity is inferred from a coordinate match. Compatibility uses the authored d/e reference system, not a mixed-line comparison.

Removed copied catalog nC/nF/ng from all 15 elements so the runtime uses the named OHARA Sellmeier curves. Catalog-derived dPgF retains its attribution. The patent supplier statement and named glass corrections are preserved.

### Live diagram follow-up

Retained the published SDs after comparison with FIG. 13a–c. G2 travels objectward by 6.190 mm as Table 3's S19 gap decreases and S29 gap increases; the opposite prose direction is a source error already documented in the analysis. Source L2–L16 labels, four cemented pairs and both aspheric labels agree with the prescription.

Added patent APD tags for L2/L7/L16 (S-FPL51) and L4/L11/L12/L13 (S-FPL53), explicitly identified on printed p. 17. L15's S-NPH1 dense flint is also tagged from the Example 2 identification and claim 7's abnormal-partial-dispersion description. Numerical dPgF remains catalog-derived. These tags correct the viewer colors without changing the spectral curves.

### Image format

Set `imageFormat: "35mm-cinema"` (22 × 16 mm, 27.2 mm diagonal) to match the Summilux-C 100 mm from the same patent. The canonical id is covered by the patent's 28 mm design image diagonal (`imageCircleMm`, printed p. 16). The marketed 33 mm Super 35 circle still has no separate id, and `lensMounts` stays unset because the taxonomy has no PL mount id. The image-circle floor check passes with no undersized surfaces.
