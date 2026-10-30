# Audit Log — Nikon AF Zoom-Nikkor 28-200mm f/3.5-5.6 G IF-ED

Patent: US 6,621,643 B2, Example 1 / Figure 1.

## 2026-07-29 — Patent-figure SD, display-name, and glass audit

### Semi-diameter review

The patent does not publish clear apertures for these elements, so the revised values remain Figure 1-derived
visualization estimates constrained by the exact surface validator.

| Surfaces | Before | After | Figure evidence |
|---|---:|---:|---|
| 4–5 | 23.3, 23.3 mm | 19.0, 19.0 mm | Figure 1 shows L12 appreciably narrower than the leading cemented L11 pair. |
| 6A–8 | 10.2, 10.2, 10.2 mm | 12.5, 12.5, 12.5 mm | The hybrid L21 component is broader in the patent section than in the original model. |

The leading L11 pair and the remaining rear groups were already within the visual-measurement tolerance of Figure 1
and were left unchanged.

The post-edit figure screen has a `1.113` whole-lens median figure/data ratio. After normalizing by that scale, both
revised components read `1.00`: L12 is `1.000`, and the two material layers of hybrid L21 are `0.999` and `1.004`.

### Glass classification

| Elements | Before | After | Disposition |
|---|---|---|---|
| L11b | `640601 — lanthanum crown class` | `J-LAK01 (Hikari; patent code 640601)` | Current Hikari J-LAK01 retains `nd = 1.640000`; the final code digit reflects the catalog's rounded `νd = 60.20` rather than patent `60.09`. |
| L12, L31, L32 | `498825 — ED glass (catalog unresolved)` | `J-FKH1 (Hikari; patent code 498825)` | Current Hikari J-FKH1 has identical `nd = 1.497820` and a `νd` difference of only 0.05. |

Added the previously absent J-LAK01 formula-3 row to the shared glass catalog. The labels retain the patent codes and
the analysis identifies both assignments as coordinate successors rather than proof of the historical melts.

### Metadata and analysis sync

- Normalized the display name to separate the aperture from the `G` designation.
- Updated the analysis heading, element descriptions, glass table, chromatic discussion, SD provenance, and Hikari source.

## 2026-10-30 — Fresh source outline and glass reinspection

- Directly inspected local `patents/US6621643.pdf`: all three Example 1 Figure 1 zoom states (PDF p. 2, 600 dpi crops), source d-line/asphere/composite descriptions (p. 26), and the complete Table 1 prescription/material/asphere/spacing block (p. 27). The source explicitly identifies both glass/resin composites. Native figure raster is 300 ppi (`pdfimages -list`); 600 dpi is a 2× render. All convex/concave faces, the cemented L11 boundary, and both resin/glass interfaces were reviewed.
- Figure 1 L21 rear shows a resolved short vertical stroke above and below the concave S8 curve. Mean source cap/edge q ≈ 0.81, edge ≈ 118 native px, one-native-pixel band ±0.016; separate endpoint/ink ambiguity is approximately ±0.02. First-to-last vertex span gives approximately 8.5 native px/mm. The inferred depth 3.80 mm gives cap radius 10.028007 mm and q = 0.80224 under the retained 12.5 mm outer rim, within that source band. It is an inferred cut with the normal full-beam guard, without a source-depth exemption. The entire L21 compound remains connected; S7's resin/glass boundary and the four aspheric caps are unchanged. Other faces, including rear hybrid L2, have no separately resolved flat end and retain their existing bounds.
- Fresh glass-only check: all 14 Table 1 nd/νd pairs retained. Twelve ordinary-glass media resolve to compatible coefficient-backed curves (J-SF03, J-LAK01, J-FKH1, J-LASF05, J-LASF016, FD225, J-BK7A, H-ZLaF50D, including repeated coordinates); two `1.55389 / 38.09` resin layers remain explicitly unresolved. Names are qualified spectral proxies, not production suppliers. Removed 24 catalog-derived C/F/g overrides from eight ordinary-glass rows because the source prints only nd/νd, not those line indices. The current catalog curves now supply their spectral response; no source partial datum is discarded, and no patent APD claim is added. All previous resolver curve selections remain identical.
- Focused surface and image-circle checks pass (0 undersized, 0 skipped), as do all three stated axial aperture stations. Nine focus/zoom SVG states were directly inspected: finite paths, zero hidden trim, no detached resin wing. Shared dispersion/resolver validation passes 93 tests; AST scan has zero duplicate properties/parse errors. Source R/d/aspheres, stop, zoom/focus controls, and tolerances are unchanged. Aspheric clear caps are unchanged; numeric public values remain based on those caps. Dense cut sweep results are recorded below.

- Dense independent inferred-cut probe: 21 zoom × 21 focus states, grid 41, 0.5° field step, 10,357,033 beam rays. S8 cap 10.028007 mm, required margin 0.05 mm; furthest refined reach 9.1557 mm at zoom 0 / focus 0.35 / field 37.967°. Zero clipped rays, zero within-margin rays, and no unlaunchable fields.
