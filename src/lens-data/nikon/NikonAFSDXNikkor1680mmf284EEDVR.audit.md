# NikonAFSDXNikkor1680mmf284EEDVR — patent, aperture, and glass audit

## 2026-09-26 (UTC)

Source: local `patents/US20180252903A1.pdf`, Example 1; Fig. 1, PDF p. 2; Tables 1–3. Exact source pages and 600-dpi optical rims were inspected, excluding leaders, brackets, and mechanical outlines.

### Semi-diameters

S1/S2/S3 22.5/22.0/21.7 → 28.0/26.7/26.7; S6A/S7/S8 11.0/10.8/9.1 → 14.0/14.0/10.5 mm.

The automated first crop touched its edge; the wider crop remained contaminated by the many opposing label leaders. Manual 600-dpi inspection uses the approximately 1,700-px glass span for 92.38 mm (about 54 µm/px). The front doublet outline approaches 29 mm and the L21 front hybrid approximately 14.4 mm. The chosen optical rims stay inside the outer outline and pass the cemented/shared-gap constraints. Other differences are within figure uncertainty; S25 remains 8.9 mm for gap clearance.

### Glass classification

Coefficient-backed catalog coverage: **16/18 → 16/18 material entries**. Source coordinates are retained. Catalog names designate supplier-neutral spectral proxies, not production suppliers or melt identities. No measured line indices or `dPgF` were invented, and no APD claim was added from branding alone.

| Element | Authored nd / vd | Catalog curve / disposition |
| ------- | ---------------: | --------------------------- |
| L11     |   1.84666 / 23.8 | J-SF03                      |
| L12     |   1.59319 / 67.9 | J-PSKH1                     |
| L13     |   1.81600 / 46.6 | J-LASF09A                   |
| L21r    |   1.56093 / 36.6 | Unmatched                   |
| L21     |   1.81600 / 46.6 | J-LASF09A                   |
| L22     |   1.81600 / 46.6 | J-LASF09A                   |
| L23     |   1.84666 / 23.8 | J-SF03                      |
| L24     |   1.88300 / 40.7 | J-LASF08A                   |
| L31     |   1.54814 / 45.8 | LLF1                        |
| L32     |   1.51742 / 52.2 | J-KF6                       |
| L33     |   1.90200 / 25.3 | J-LASFH24                   |
| L34     |   1.49782 / 82.6 | J-FKH1                      |
| L41     |     1.79050 / 45 | Unmatched                   |
| L42     |   1.90200 / 25.3 | J-LASFH24                   |
| L43     |   1.81600 / 46.6 | J-LASF09A                   |
| L51     |   1.49782 / 82.6 | J-FKH1                      |
| L52     |   1.49782 / 82.6 | J-FKH1                      |
| L53     |   1.88202 / 37.2 | M-TAFD307                   |

### Source and modeling limits

Polynomial rim departure at enlarged S6A is 0.511811 mm, replacing 0.218951 mm at 11 mm. The analysis was updated. All W/M/T infinity stations reach the format corner. The bonded resin (1.56093/36.6) and molded L41 (1.79050/45.0) remain unmatched. Display name corrected from f/2.8-4 E to f/2.8-4E, matching Nikon’s product designation.

Surface geometry and image-circle floors pass with no undersized or skipped entries. The runtime renderer produces zero trim across sampled zoom/focus states, and the live optical silhouettes were compared with the figures. These checks do not remove the source/model limitations above.

### Second live-diagram review — shape label, ED inference, and travel

The updated front and hybrid rims align with Fig. 1 in the live site; remaining SDs are retained. L12's type changes from “Biconvex Positive” to “Positive Meniscus”: Table 1 gives positive front/rear radii 61.989/2234.55748 mm. Its positive power is unchanged.

L12/L34/L51/L52 gain `apd: "inferred"` from their compatible J-PSKH1/J-FKH1 curves (catalog dPgF approximately +0.0144/+0.0337). The distinction from patent-listed APD is explicit in the inspector; no per-lens catalog-derived line indices or dPgF are authored. Coverage remains 16/18. The bonded resin lacks a published dispersion curve, and L41's closest catalog alternatives TAF2/J-LASF017 miss the index guard by 0.0040/0.0045. No supported additional catalog row was found.

Table 3 and the local sliders order zoom 16.49 → 35.00 → 77.79 mm with all groups traveling objectward relative to the fixed image plane. Infinity-to-near focus moves only G2 objectward by 1.215/1.954/3.923 mm at W/M/T; all other groups remain fixed at each zoom station. The source Nikon Corporation spelling already matches the canonical assignee node.

The hybrid layer/substrate pairs retain their H-group diagram brackets and explicit layer descriptions, but omit the glass-doublet inspector tag. A bonded aspheric layer is part of one physical lens; displaying “DOUBLET” solely because it has two modeled media was misleading. Actual glass doublet/triplet tags are retained. Catalog labels were shortened to “supplier-neutral catalog proxy” to keep the qualification readable in the inspector.

## 2026-10-29 — Fresh figure, concave-end and glass reinspection

Directly inspected original `patents/US20180252903A1.pdf`: all W/M/T portions of Figure 1 on PDF page 2 at 600 dpi, paragraph 143 and the asphere equation on page 33, complete Example 1 / Tables 1–3 on pages 34–35. Paragraph 147 defines nd/νd at d-line 587.6 nm; paragraph 143 explicitly identifies L21’s object-side resin layer, and L41/L53 are glass-molded aspheres. The figure raster is natively 300 ppi (`pdfimages -list`).

Every convex/concave face and all cemented/resin interfaces were inspected. L21’s rear S8 draws a flat land beyond the curved cap. Wide-state scale is about 9.2 native px/mm over the 92.377 mm first-to-last span. Cap/edge radial picks are about 93/132, q = 0.705 ±0.0129 for one native pixel. S8 retains its existing 10.5 mm clear cap and adds `rimExtensionSd:14`; adopted q = 0.75 is deliberately outward from the figure pick. The substrate now supports the resin layer out to the same 14 mm blank height. The full compound path is connected at all nine render states, without a detached resin wing. No other resolved short vertical break supports additional trimming; shared interfaces and beveled edges are retained.

All eighteen source coordinate pairs are unchanged. Sixteen compatible curves remain: J-SF03 (L11/L23), J-PSKH1 (L12), J-LASF09A (L13/L21/L22/L43), J-LASF08A (L24), LLF1 (L31), J-KF6 (L32), J-LASFH24 (L33/L42), J-FKH1 (L34/L51/L52), M-TAFD307 (L53). The resin 1.56093/36.6 and molded L41 1.79050/45.0 remain unresolved; no loose catalog match or production chemistry is inferred. Four inferred APD tags remain qualified as catalog-based. Table 1 prints no partial dispersions or C/F/g indices, and no spectral override is added.

The S8 extension preserves all clear caps and coefficients. Fresh current asphere departure / absolute slope checks reproduce S6A(14): +511.8113 µm /14.4179°, S23A(9.6): +17.8080 µm /7.6509°, S32A(12.3): +191.4937 µm /9.1974°. Public existing departure numbers match these unchanged caps.

Focused surface and image-circle checks pass. The nominal-aperture audit proposes no height raises. Actual SVG paths at all nine focus/zoom combinations (0, 0.5, 1) are finite with zero hidden trimming, and the rendered compound outlines were inspected. A temporary source/resolver check covers all 48 modeled media in this triad: 44 compatible catalog curves and four explicit unresolved media. All source nd/νd values and every runtime C/d/F/g channel remain unchanged; `assertCatalogConsistent` passes. Source R/d, aspheric coefficients, stop, focus and zoom controls are unchanged.
