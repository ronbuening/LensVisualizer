# Audit Log — NIKON AF NIKKOR 35mm f/2D

## 2026-09-19 — Patent figure, glass, and integration audit

Source: `patents/JP2021036283A.pdf`, PDF page 34; JP 2021-36283 A Ex.1 — strong form correlation; attribution unconfirmed; patent unit focus differs from Nikon RF.

### Semi-diameters

600 dpi screening: crop `0.18,0.225,0.335,0.365` --rot90. Optical rims were inspected visually; labels, ray bundles, group brackets, and mechanical flanges were excluded.

Retained SDs. Figure/data ratios are 1.02–1.13 after rejecting labels, within the 15% measurement band; no justified silhouette correction. Table 1 partial-dispersion ratios 0.5360/0.5548/0.5599/0.6115/0.5465/0.5501 are now represented as dPgF = theta_gF − (0.6438 − 0.001682*vd), using the runtime baseline rather than the patent condition baseline. This preserves source spectral information without inventing C/F/g indices. L4/L6 remain unmatched; N-SF6 is explicitly rejected by partial dispersion.

### Glass

Patent nd/vd values are unchanged. Catalog names denote supplier-neutral spectral proxies.

| Element | nd / vd | Disposition |
|---|---|---|
| L1 | 1.5168 / 64.12 | J-BK7A-class (coordinate-compatible spectral proxy; supplier unproven) |
| L2 | 1.78797 / 47.17 | N-LAF21-class (coordinate-compatible spectral proxy; patent dPgF retained; supplier unproven) |
| L3 | 1.53172 / 48.96 | PBL6Y-class (coordinate-compatible spectral proxy; supplier unproven) |
| L4 | 1.80518 / 25.35 | Unmatched (805254 class; SF6-like nd/νd but partial dispersion incompatible) |
| L5 | 1.7481 / 52.28 | E-LAKH1-class (coordinate-compatible spectral proxy; supplier unproven) |
| L6 | 1.68348 / 54.8 | Unmatched (683548 class; patent partial dispersion retained as dPgF) |

### Metadata and validation

Reviewed display formatting and romanized inventor metadata against existing canonical catalog names. Production correlations remain qualified; patent designs are not asserted to be manufacturer-confirmed production prescriptions. Surface audits pass. The image-circle audit reports no undersized surfaces.

### Local-site follow-up

Compared the localhost silhouette directly with Fig. 1 and retained the SDs within measurement uncertainty. Exercised infinity-to-near focus: the whole patent assembly moves 8.519 mm objectward with the image plane fixed, in the published order. The caption retains the distinction from production rear focusing; no zoom travel exists. L2 now uses the existing N-LAF21 curve: SCHOTT publishes nd 1.78800, vd 47.49, PgF 0.5555 versus patent 1.78797, 47.17, 0.5548. The authored patent dPgF remains authoritative. L4 and L6 stay unresolved.

Assignee review: all three Kinoptiks use the same canonical Les Appareils de Precision Kinoptik; all three Nikons use Nikon Corporation. The corpus contains no additional spelling duplicate to consolidate. The older Nippon Kogaku K.K. is a historical legal name linked to Nikon, not a spelling alias.

## 2026-10-29 — F-mount surface and glass reinspection

Fresh original source: `patents/JP2021036283A.pdf`, Example 1 Figure 1 on PDF page 34, Table 1 on page 11 and d-line/partial-dispersion definitions on pages 9–10. Directly inspected the 600 dpi rotated vector figure and every convex/concave face, including cemented S4. The vector figure’s working raster has about 995 px across the 49.8 mm first-to-last vertex span, or about 20 px/mm at 600 dpi; there is no embedded native bitmap.

Added S2 rear concave extension from its retained 13.4 mm clear cap to the full source-scaled 16.6 mm L1 outer height. Its source-visible cap-end stroke is clear. The coupled continuous S1 front cap also grows 15.1→16.6 mm; canonical geometry passes without changing source R/d or constraints. This supersedes the provisional conservative extension to 15.1 and matches the complete source outline. S7/S8/S9 curves meet their rims without separately resolved lands; no additional cut is inferred. All source R/d, other optical caps, aperture and published unit-focus states remain unchanged. Production attribution and the disagreement with Nikon’s rear-focus specification remain qualified.

All six source nd/νd pairs and θgF values match Table 1. Retained all source partial-dispersion overrides: θgF=0.5360/0.5548/0.5599/0.6115/0.5465/0.5501 converts under 0.6438−0.001682νd to dPgF=0.00004984/−0.00966006/−0.00154928/0.01033870/−0.00936504/−0.00152640. Four media retain compatible curves; L4/L6 remain explicitly unresolved. Current L4 coordinate candidates’ curve θgF values differ from the source (closest SF6 about 0.610246 versus 0.6115); no exact all-source spectral match is established or forced. No compatible current nd/νd row exists for L6. No new supplier or APD identity is inferred.

| Medium | Source nd / νd | Current coefficient-backed proxy |
|---|---|---|
| L1 | 1.516800 / 64.12 | J-BK7A |
| L2 | 1.787970 / 47.17 | N-LAF21 |
| L3 | 1.531720 / 48.96 | PBL6Y |
| L4 | 1.805180 / 25.35 | Unresolved |
| L5 | 1.748100 / 52.28 | E-LAKH1 |
| L6 | 1.683480 / 54.8 | Unresolved |

All selected curves are qualified spectral proxies; source coordinates and any source θgF remain authoritative. No tolerance was relaxed. Focused surface, image-circle and aperture audits pass on this absolute-path candidate; current-label resolver and `assertCatalogConsistent()` pass. Native SVG geometry at nine focus/zoom states has no hidden rim trim; the rendered outlines were inspected. Shared dispersion/partial-dispersion suites passed 2 files / 93 tests for this wave. Full gates and commit integration are performed by the coordinator.

Coupled-outline follow-up: the 16.6 mm continuous S1 cap and S2 land pass focused surface/image-circle/aperture/field checks, with at least 99% format-corner coverage. Nine focus/zoom SVG states were re-rendered and inspected with no hidden trim. Source glass and partial-dispersion values are unchanged.
