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

## 2026-09-25 — MTF image-plane census

Classification: small published-plane/paraxial mismatch; finite-aperture design focus is plausible but not explicitly established.

Visually inspected local `patents/US_8508864_B2.pdf`, PDF pp. 28–30 (printed cols. 15–19), Example 2/Table 3. All active S3–S29 radii and spacings and the K/A–F coefficients at S6 and S25 match, without scaling. All 15 glass assignments and nd/vd pairs are consistent with the named OHARA glasses and rounded source codes; the table supplies codes/names, not full-precision melt indices. Existing STIH16→S-TIH6 and SFP151→S-FPL51 spelling repairs remain disclosed. S19=6.990/3.865/0.800 and S29=44.800/47.925/50.990 correctly select F1 first.

The only plate is the front L1 (3 mm S-BSL7 plus 2 mm air before S3). Its omission has no paraxial infinity-focus effect. No rear cover glass or hidden Bf row exists: S29 goes directly 44.800 mm to image S30. F1's object distance is 1,000,010 mm (the source's infinity approximation); its approximately 0.0015 mm finite-distance focus effect is too small to explain the residual. The independent matrix gives EFL 39.026254849 mm and BFL 44.761612972 mm. The prose calls the focal length substantially 40 mm, not an exact prescription result.

The text evaluates polychromatic diffraction MTF at full aperture, multiple fields and focus states (Fig. 14), without identifying the listed plane as Gaussian focus or describing a best-focus selection. An on-axis reference-index geometric diagnostic (812 rays, grid 32, 10/20/40 lp/mm) selects −0.009391372 mm, score 0.950786 → 0.991177. This supports retaining the small design-plane difference but does not prove the designer's intent. Offset **−0.038387028 mm remains unchanged** (limit 0.023032423 mm); retain the published plane, delete the completed Section E row, and add no changelog entry.

Validation: focused runtime/paraxial check; full corpus gates at the ten-lens checkpoint.
