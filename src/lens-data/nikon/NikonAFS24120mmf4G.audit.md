# Nikon AF-S NIKKOR 24-120mm f/4G ED VR Patent Audit

## 2026-06-24 Patent Recheck

Reviewed local untracked patent file `patents/US20100220400A1.pdf`, Example 1 / Table 1 and FIGS. 1-3.

### Prescription, Zoom, Focus, And VR

- The data file remains aligned to Example 1: `f = 24.70 / 45.75 / 116.39 mm`, `FNO = 4.12 / 4.13 / 4.14`, `IH = 21.6 mm`, and the 17 element / 13 group layout.
- The stored infinity zoom gaps and patent close-range gaps are consistent with the Table 1 values already described in the analysis.
- The patent states G2 focusing and decentering of the cemented negative component in G4 for vibration reduction; the current grouping and notes remain appropriate.

### Glass And APD

- No glass relabels were needed. The generated Sellmeier report already shows 17/17 trusted and 17/17 Sellmeier coverage for this data file.
- L12 and L34 remain correctly marked `apd: "inferred"` with HIKARI J-PSKH1 catalog line-index fields. This APD status is catalog/product-count inference, not a patent-published partial-dispersion table.
- The patent prescription itself publishes `nd` and Abbe number only. It does not publish `nC`, `nF`, `ng`, `θgF`, `Pg,F`, or `dPgF` rows for Example 1.
- The FK5-class rows L33 and L52 have high Abbe numbers, but the analysis correctly keeps Nikon's two ED elements on the J-PSKH1/S-FPM2-class L12 and L34 rows because those are the anomalous-dispersion catalog matches.

### Semi-Diameters

- US 2010/0220400 A1 does not publish per-surface clear-aperture radii for Example 1.
- Current SDs remain reconstructed rendering apertures constrained by ray envelopes, FIG. 1 proportions, the 77 mm filter limit, edge-thickness checks, `sd/|R| < 0.90`, and cross-gap sag clearance.
- The proportions are rational for the drawing: broad front collector, tightened variator/stop region, and moderate rear re-expansion through the positive imaging group.

## 2026-10-29 — Fresh figure, concave-end and glass reinspection

Directly inspected original `patents/US20100220400A1.pdf`: Figure 1 on PDF page 2 at 600 dpi, complete Example 1 / Table 1 and three asphere blocks on pages 22–23, and paragraph 85’s d-line587.6 nm definition. `pdfimages -list` confirms a300 ppi raster source. The Figure 1 first/last vertex span is about 1162 native px over 107.83 mm, or10.8 native px/mm.

Every face of all seventeen elements and four cemented boundaries was inspected. L21 has a resolved continuous front asphere and a concave rear cap ending at a short vertical land. Native cap/edge radial picks are approximately 124/170: q 0.7294 ±0.0102 from ±(1+q)/edge. The absolute source heights are about 11.5 mm clear /15.8 mm outer. Accordingly S6A’s continuous clear cap grows14 → 15.8 mm; S7 keeps its11.5 mm clear cap and adds `rimExtensionSd:15.8`. This differs from cutting the existing S7 aperture: the cap and all rays inside it are retained. Both faces now close one connected solid L21 outline at the taller rim.

No other resolved cap-end land supports further clipping. G3’s small connecting bevel is not converted into a flat land; all four cemented interfaces remain unchanged. No source-supported resin interface exists in this selected prescription. The generic manufacturing variants are not evidence for adding a resin wing or layer. Actual nine-state SVG inspection confirms connected outlines, no detached wing and zero hidden trimming.

All three source aspheric profiles and conic conversions are unchanged. Current departure from the matching paraxial sphere / absolute rim-slope angle is S6A(15.8): +489.6917 µm /6.3991°, S13A(11): −51.5922 µm /1.1144°, S27A(14): −298.4039 µm /4.3248°. The enlarged S6A stays monotonic through its full cap. Public values are synchronized to these current clear radii.

Fresh glass review confirms all seventeen source nd/νd pairs, grouped by the ten distinct coordinate rows already listed in the public glass table. All seventeen catalog resolutions are compatible: S-TIH53 (L11/L23/L32), J-PSKH1 (L12/L34), S-LAH97 (L13/L31/L42), S-LAH59 (L21), J-LASF017 (L22), S-LAH53 (L24), FC5 (L33/L52), J-LASF021 (L41/L53), S-LAL8 (L43), S-BAL35 (L51). Each name is a qualified spectral counterpart; supplier, melt and fabrication identity remain unspecified.

Example1 prints no θgF, ΔPgF or individual C/F/g indices. Remove the two catalog-derived `dPgF:0.0135` overrides and six catalog-only line-index fields on L12/L34; retain their qualified inferred APD classification. These media now use the compatible J-PSKH1 curve anchored to source nd. The runtime branch changes from explicit line indices to Sellmeier, with PgF0.54395604 → 0.54399727; no source dispersion is discarded.

Focused `audit:surface` and `audit:image-circle` pass. Actual SVG paths at focus/zoom 0, 0.5 and 1 are finite with zero hidden trimming; rendered montages were inspected. The shared dispersion and glass-resolution parity suites pass (2 files / 93 tests). A temporary source-coordinate/resolver check confirms all 45 media in this triad, 44 compatible catalog curves and the one deliberately unresolved L12; `assertCatalogConsistent` passes. No R/d, aspheric coefficient, gap, focus, zoom or iris control was changed. Aperture evaluation is within 3% at all three zoom stations with no rim limiter or failed beam. The source focus-spacing inconsistency and product-correlation limits remain disclosed.
