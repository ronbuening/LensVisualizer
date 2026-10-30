# Tokina AT-X 70–200mm f/4 PRO FX VCM-S — consolidated source audit

## Controlling source and retained decisions

- Original: `patents/JP5857306B2.pdf`, Example 1 / Figure 2, 28 pages, SHA-256 `35aafd7f340c0edeea8f036d2c46d0ff2d9f956e0ad42355b78ba1b7a5d41b97`. Table 1 (PDF page 9) has 34 rows, 19 glass intervals, 14 air-separated components and five cemented doublets. S20 is the explicit stop; all surfaces are spherical. The d-line definition is ¶0031 (PDF page 8). There are no source additional indices or partial ratios.
- All source R/d/nd/νd and the 72/105/194 mm infinity zoom gaps remain unscaled. S34 has no image gap. The previously approved derived 54.66 mm preserves native BFD 54.655598/54.658048/54.677508 mm and image-plane residuals +0.004402/+0.001952/−0.017508 mm. No filter, plate or cement layer is invented.
- Zoom gap sums 42.32/42.32/42.31 mm retain their 0.01 mm difference. Linear zoom interpolation can defocus by about 6.3 mm; normal controls select three native stations. Printed |f4Y/f4| = 0.540 differs from computed 0.543707, unresolved. Both the description's 0.4–0.6 and B2 claims' 0.46–0.6 bounds pass. Cs2/Cs3 = 1.529529, |f1X/f1Y| = 9.919329 and ndL1 = 1.80518 reproduce the source rounding; no scalar fit repairs the prescription.
- The prescription does not reproduce its spherical-aberration plots: d-line longitudinal aberration at the f/4.1 pupil edge is −0.78/−0.47/−0.10 mm, versus Figures 3–5 at approximately −0.06/+0.09/+0.08 mm. Distortion −3.1/+0.3/+2.5% agrees. Earlier searches established no unique transcription correction; preserve every printed value.
- The source moves G1Y (L3/L4) for focus. Figures 6–8 plot 1 m but give no travel. The existing 2026-10-14 reconstruction advances G1Y by 13.521832/13.528398/13.534466 mm through equal and opposite d4/d8 changes; other groups, iris and image remain fixed. Its 33 inverse-distance samples have ≤0.015 mm sampled interpolation defocus. Derived tele magnification 1:3.566 independently agrees with the maker's 1:3.57; no finite-MTF certification is added.
- The manufacturer's 19/14 construction, full-frame Nikon F installation and three SD positions support architectural correlation, not a factory formula or melt identity. VC remains centered; source shifts of 0.23/0.34/0.62 mm remain plot conditions. Source approximately f/4.1 calibrates inferred iris radii of 13.32–13.33 mm, without a physical-diameter claim.
- Existing `gapSagFrac: 0.96` remains. S2/S3 and S14/S15 are tight gaps; their earlier bevel approximations are qualified below. No new tolerance relaxation.

## 2026-10-30 — Fresh original shape reinspection

Figure 2 (PDF page 17) was directly viewed at 600 dpi, with native resolution 200 dpi and approximately 3.993 native pixels/mm. The complete Table 1 and definitions/tables on PDF pages 8–10 were read. Every convex/concave air face and cemented interface was inspected. Existing front bodies of 31/30.2/28.9/28.1 mm and source cemented steps remain.

| Face                    | Measured source cap / outer                               | Adopted end                                                              | Full final beam proof                                                                             |
| ----------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------- |
| S2, air exit            | q ≈ 0.94; native outer ≈124 pixels; one-pixel band ±0.016 | Depth 5.6 mm; cap 29.078432 / outer 31 mm; q 0.938014; land 1.921568 mm  | Reach 28.419777 mm; required margin 0.087235 mm; cap-to-beam clearance 0.658655 mm                |
| S31, air entrance       | q ≈ 0.87; native outer ≈56 pixels; one-pixel band ±0.033  | Depth 4.42 mm; cap 12.978342 / outer 14 mm; q 0.927024; land 1.021658 mm | Reach 12.927388 mm; margin 0.05 mm; depth 4.41 would fail                                         |
| S24, cemented interface | Drawn endpoint approximately 11.4 mm                      | No opaque cut: the boundary separates two glasses                        | The numeric-cut trial correctly rejects the glass/glass interface; retain its refracting boundary |

The adopted S31 cap moves outward beyond the source endpoint for beams, with no source-depth exemption. Measured and adopted caps remain distinct. Restoring S3's full 30.2 mm source cap with S2 depth 5.6 produces 2.016 mm land intrusion against 1.9296 mm allowed. Coupled depth 5.36 passes geometry, but its 28.47110 mm cap is below the 28.5052 mm beam floor already required with the smaller S3. Depth 5.37 and higher fails land clearance. S3 therefore retains its 28.4 mm cap. S14 at the full 13.4 mm also fails: approximately 2.75 mm intrusion versus 2.2656 mm allowed. No independently evidenced flat land exists there to justify an opaque repair; retain the 12.16 mm cap and qualified bevel approximation.

## 2026-10-30 — Fresh glass reinspection

All 19 source nd/νd pairs were reread in Table 1 and match literally. The convention is d-line, with νd printed to one decimal. Remove 76 catalog-only C/F/g/dPgF copies; retain all 19 compatible coefficient curves. The public coordinate table preserves the 15 distinct source coordinates and current proxy residuals. All 19 resolve within strict compatibility.

L3/L4 (source νd 81.5) retain S-FPL51; L12 (81.6) retains FCD1. L6's source nd 1.51633 retains L-BSL7, preserving distinct S/L families. Three SD/APD tags remain inferred from product positions. No source-measured anomaly, supplier/melt/chemistry or manufactured color performance is claimed.

## Final verification

Canonical/surface, image-circle, source-format field and aperture checks pass at all three stations: corner ≥99%, aperture within 3%. Full inferred-cut guards report no errors or untraced fields. A supplemental 96 finite-point states cover three zoom stations and 32 existing non-infinity reconstructed focus keys: the 1 m endpoint and inferred inverse-distance intermediates. These also pass, with unchanged beam maxima. This is diagnostic reconstruction, not source certification. R/d, glass coordinates, stop, focus/aperture, derived image gap and tolerances remain invariant.

Actual nine-state SVGs were rasterized and viewed: connected outlines and zero hidden trim. The identical d-line collimated grid gives 110282 retained, 0 lost, 0 gained and 34123 blocked in both versions, out of 144405 samples. Counts are not flux or production-aperture measurements. Existing dispersion, resolver and partial-line suites pass: 3 files / 94 tests. No shared engine/catalog edit or source-aberration repair.
