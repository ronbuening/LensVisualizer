# Audit Log - Laowa 12mm f/2.8 Zero-D

Patent: CN205720849U / WO2017177665A1, Example 2

## 2026-05-19 - Missing-Sellmeier queue audit

### Patent evidence

- Local patent file checked: `patents/CN205720849U.pdf`.
- The PDF text layer is empty; pages were rendered locally from the gitignored PDF and the Example 2 table was checked visually.
- Example 2 rows confirmed:
  - surface 1 / L1: nd = 1.74916, vd = 54.67.
  - surface 8 / L5: nd = 1.83481, vd = 44.72.
  - surface 19 / L12: nd = 1.90366, vd = 29.31.
  - surface 26 / L16: nd = 1.80781, vd = 40.97.

### Catalog-search disposition

- Added CDGM `D-ZLAF81-25` from the public CDGM 2022 Zemax / refractiveindex.info coefficient row; it is the coefficient-backed `808410` match used for L16.
- No coefficient-backed public matches were found for `749547`, `835447`, or `904293`.

### Changes made

| Element / surface | Before                                           | After                                     | Disposition                         |
| ----------------- | ------------------------------------------------ | ----------------------------------------- | ----------------------------------- |
| L1 / S1           | `Unmatched high-index crown class (749/547)`     | `749547 - high-index crown class ...`     | Unresolved; explicit code retained. |
| L5 / S8           | `Unmatched high-index lanthanum class (835/447)` | `835447 - high-index lanthanum class ...` | Unresolved; explicit code retained. |
| L12 / S19         | `Unmatched dense flint class (904/293)`          | `904293 - dense flint class ...`          | Unresolved; explicit code retained. |
| L16 / S26         | `Unmatched high-index class (808/410)`           | `D-ZLAF81-25 (CDGM)`                      | Coefficient-backed catalog match.   |

### Analysis sync

- Updated the L1, L5, L12, and L16 narratives plus the glass-selection table.

## 2026-06-24 - Full local patent audit

### Phase 1 - Glass, APD, and high-index status

- Reopened local `patents/CN205720849U.pdf`; the PDF has no usable text layer, so the Example 2 prescription pages were rendered and checked visually.
- Reconfirmed the previously audited glass rows: L1 / `749547`, L5 / `835447`, and L12 / `904293` remain unresolved code-label rows, while L16 remains the catalog-backed CDGM `D-ZLAF81-25` match for `808410`.
- No APD or high-index metadata changes were made in this pass. The 1.49700 / 81.61 ED-class rows already remain explicitly marked as inferred from the index/Abbe class, with no patent partial-dispersion support.

### Phase 2 - Prescription and SD check

- Checked Example 2 at f = 12.5 mm, Fno = 2.87, half-field = 60.1 deg. Stored radii, thicknesses, nd/vd rows, aspheres 3/4/26/27, and the published variable gaps D4, D12, and LB match the patent table.
- The patent does not publish semi-diameters or effective diameters. The existing SDs remain renderer estimates, not patent-listed clear apertures.
- The SD envelope was checked against the rendered patent drawing and prescription geometry: the large front negative group, tight stop, and reopening rear field-corrector group are consistent with the figure and avoid irrational proportions or cross-gap overlap in the viewer. No SD values were changed.

### Phase 3 - Spectral / metadata enrichment

- The patent publishes only nd and vd for the glass rows. No nC, nF, ng, PgF, theta_gF, dPgF, or Sellmeier coefficient source was found in the local patent, so no spectral constants were added.

## 2026-10-29 — Nikon Z-mount source figure and glass reinspection

- Directly inspected original `patents/CN205720849U.pdf`, Example 2: Figure 3 on PDF p. 15 at 600 dpi and all source table rows/definitions on pp. 7–9. The PDF has no usable text layer. Inspected all 16 elements, concave and convex air faces, and cemented boundaries. The 300 ppi native figure gives approximately 14.92 px/mm from the first/last vertex span; its screened schematic dimensions are not published apertures.
- The drawing ends the rear concave caps of L1, L2 and L3 before their outer edges. Preserve optical `sd` 20.8, 15 and 8.7 mm and add `rimExtensionSd` 24.5, 18 and 10.5 mm to S2, S4A and S6 respectively, using the existing opposite-face outer rims. These are opaque lands, not increases to clear aperture. The rear aspheric negative member has no resolved additional land that would justify reducing its existing cap; retain it and all remaining convex/concave and cemented faces. No additional `rimCutDepthMm` is needed because the three supported lands can preserve the existing smaller caps.
- Fresh glass check: all 16 nd/νd pairs match the rendered Example 2 table, with the d-line convention explicit in ¶0076. In particular, the source really prints L1 1.74916/54.67, L5 1.83481/44.72 and L12 1.90366/29.31; do not substitute familiar catalog coordinates. These three remain unmatched; the other 13 retain compatible coefficient-backed proxies. L16 is the qualified CDGM D-ZLAF81-25 coordinate match. The three 1.49700/81.61 ED/APD assignments remain inferred. No source nC/nF/ng, PgF or Sellmeier data were found, and no supplier identity is established.
- Verification: focused `audit:surface` passes; `audit:image-circle` reports zero undersized surfaces. Actual production SVG geometry has zero hidden trim across focus/zoom 0, 0.5, 1; its rasterized section was inspected. Catalog consistency and selected-proxy compatibility pass. Optical caps and numerical prescription are unchanged.

## 2026-10-30 — Fresh F-mount optical rims and glass

- Reopened original `patents/CN 205720849 U.pdf`: Example 2 Figure 3 PDFp.15 at native resolution and 600 dpi; source definitions/table, aspheres and states pp.7–9. All 16 nd/νd pairs and d-line¶0076 verified. Thirteen compatible coefficient proxies retained; L 1(749547),L 5(835447),L 12(904293) remain unresolved source coordinates. Catalog suggestions alone do not identify historical supplier/melt. No source line indices, PgF/theta or coefficients, and no catalog-only per-lens spectral copies. Three 1.49700/81.61 APD labels remain inferred class assignments only.
- Original source S 26 row clearly printsK 0.4154/A 4=1.60608e-004; earlier analysis claimed 0.4151/e-001. Corrected that prose; numerical asphere is unchanged.
- Retain S 2/S 4 A/S 6 clear caps 20.8/15/8.7 and independently resolved flat outer lands 24.5/18/10.5. Restore continuous/connected source caps S 8/S 9:9.4→10;S 14:8→8.8;S 16:8.2→8.4;S 21/S 25:11.8→12;S 26 A:11.6→11.8 mm. No invented cemented interface lands. Rear aspheric member has no resolved further land. At 11.8 mm S 26 A/S 27 A departures~1919.1/1905.8µm. All other optical rims retained.
- Source optical scale~14.92 px/mm; outlines/stroke imply~0.2–0.3 mm uncertainty. No printed apertures or cut depths. No new cut, no source exemption. Canonical build and surface checks pass; image-circle floor zero undersized. Actual 9-stateSVG inspected, finite paths and zero hidden trim. Common-field 16×16 stop lattice:2508 retained/0 lost/0 gained, counts not flux. Source field/aperture are qualified geometric checks, not physical flux or production performance. R/d/aspheres/stop/focus/aperture/tolerances unchanged.

## 2026-10-31 — Scoped material/reference followup; bounded negative

Preserve completed June 24 and October 29/30 whole source/shape dates. Directly checked all sixteen Example 2 media in native `CN205720849U.pdf`, pp. 7–9, with explicit d-line paragraph 0076 p. 7 and Figure 3 p. 15. Native table/figure pages are 2481×3509 at 300 ppi. All modeled bonded members and two double-aspheric glass elements are accounted for; no extra layer or plate is inferred. No per-medium numerical line/partial data is printed, and the three ED/APD tags remain inferred. This is a scoped material/figure association check, not a new shape audit.

Reuse the prior six-vendor search. Additional NHG 2601 screening covers 182 native coefficient rows; no stronger source-compatible match appears for L1 1.74916/54.67, L5 1.83481/44.72 or L12 1.90366/29.31. Nearest broad candidates require materially different F−C spans: L5 TAFD5 +4.061805%, L12 J-LASFH13 −6.280679% (NHG H-ZLaF70B −6.355652%). They are rejected for source fidelity, not enabled merely by the broad coordinate window. L1's nearest NHG H-LaK3 also misses νd by −3.72. Osaka OKP and Kuraray's published polymer tables provide no compatible coefficient lead; no contact forms or supplier inquiries were sent. The analysis links the primary datasets and distinguishes the bounded search from an exhaustive materials claim.

Coverage remains 13/16; all source numeric/spectral/APD, geometry and control fields remain unchanged. No new curve or shared catalog row is requested. Previous source/rim/runtime constraints remain applicable.
