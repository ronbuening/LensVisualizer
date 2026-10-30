# Nikon AF-S DX MICRO-NIKKOR 85mm f/3.5G ED VR Patent Audit

Patent: US 2009/0190220 A1, Example 1

## 2026-08-18 — Initial integration audit

- Reviewed the untracked local patent PDF `patents/US20090190220A1.pdf`; Figure 2 on PDF page 3 is the controlling optical section.
- The original SD ladder made L11 the largest front element, whereas the patent shows the L13/L14 cemented pair as the tallest part of G1. It also understated the diameter of the G4 vibration-reduction pair.

| Surfaces      |               Before (mm) |                After (mm) |
| ------------- | ------------------------: | ------------------------: |
| 1 / 2 / 3 / 4 | 15.5 / 15.0 / 14.6 / 13.5 | 14.0 / 13.8 / 13.0 / 13.0 |
| 5 / 6 / 7     |       13.25 / 13.0 / 12.7 |        15.0 / 15.0 / 15.0 |
| 19 / 20 / 21  |           8.6 / 8.6 / 8.5 |        10.5 / 10.5 / 10.3 |

- Replaced class-only annotations with the compatible catalog entries already selected by the resolver; no new catalog row was required.
- Normalized the display name to `NIKON AF-S DX MICRO-NIKKOR 85mm f/3.5G ED VR`.

## 2026-08-18 — Screenshot follow-up

- Compared the supplied rendering directly with Figure 2. The revised G1 and VR-pair heights align with the source silhouette; no further SD change was justified.
- Confirmed published dual-focus travel: G2 moves `+15.2850mm` imageward, G3 moves `−12.9922mm` objectward, and G1/G4/G5 remain axially fixed.
- Marked L33 as the single inferred ED position, matching the production one-ED count, while leaving G4's transverse VR behavior separate from axial focus motion.

## 2026-08-18 — Cemented-pair proportion correction

- Re-inspected a 600 dpi render of Figure 2 after the site screenshot exposed that the earlier silhouette assessment had over-read leader-line and flange ink. This supersedes the SD conclusion in the preceding screenshot follow-up.
- The optical outlines put D1 below L11 and near L12 in height. They put D4 modestly above G3 but below the rear G5 elements; the enlarged site rendering violated both orderings.

| Cemented pair  | Surfaces     |        Before (mm) |          After (mm) | Figure-supported ordering |
| -------------- | ------------ | -----------------: | ------------------: | ------------------------- |
| L13 / L14 (D1) | 5 / 6 / 7    | 15.0 / 15.0 / 15.0 | 13.25 / 13.0 / 12.7 | L11 > D1 ≈ L12            |
| L41 / L42 (D4) | 19 / 20 / 21 | 10.5 / 10.5 / 10.3 |     9.5 / 9.5 / 9.4 | G5 > D4 ≈ G3              |

- The image-circle audit reports no undersized surfaces, and the real validator accepts all six reduced SDs without edge-thickness, rim-slope, cross-gap, or SD-ratio errors. Restoring the smaller D1 rim also makes the earlier lens-specific `gapSagFrac = 0.94` allowance unnecessary, so the lens now uses the default `0.90` policy with +0.139453 mm clearance at the shared 13.0 mm material rim.

## 2026-10-29 — Fresh figure, concave-end and glass reinspection

Directly inspected original `patents/US20090190220A1.pdf`: Figure 2 on PDF page 3 at 600 dpi, complete Example 1 / Table 1 on page 55, and paragraph 111’s d-line 587.6 nm definition on page 54. `pdfimages -list` confirms a 300 ppi raster source. Figure 2 gives about 19.7 native px/mm from the 89.16296 mm first-to-last-vertex span; its endpoint ratios remain approximate because leader strokes cross several outlines.

Every face of all fourteen elements and four cemented interfaces was checked. No resolved short cap-to-rim vertical land is present on an air/glass face. The G1 negative doublet’s almost-flat exterior faces and the G2/G5 concave faces continue to the rim. Brackets and crossing leader lines are excluded. No additional clipping or height extension is justified; all geometry is retained, including the previously documented S4–S5 physical-gap constraint. `audit:aperture --raise` has no proposed increase.

All fourteen Table 1 nd/νd pairs are retained. Compatible curves by element are S-LAH66 (L11), S-LAL14 (L12), S-TIH1 (L13), J-LAF01 (L14), N-BK7 (L21/L22/L31), J-SF03 (L23/L42), E-FD4 (L32), J-FKH1 (L33), S-LAH60 (L41), S-NSL3 (L51), S-LAH51 (L52). No source partial dispersion or line-index fields exist. L33’s APD note and public prose now consistently describe the existing tag as a compatible-catalog inference, with production identity and patent anomaly unspecified; no spectral parameter changes.

Focused surface and image-circle checks pass. The nominal-aperture audit proposes no height raises. Actual SVG paths at all nine focus/zoom combinations (0, 0.5, 1) are finite with zero hidden trimming, and the rendered compound outlines were inspected. A temporary source/resolver check covers all 48 modeled media in this triad: 44 compatible catalog curves and four explicit unresolved media. All source nd/νd values and every runtime C/d/F/g channel remain unchanged; `assertCatalogConsistent` passes. Source R/d, aspheric coefficients, stop, focus and zoom controls are unchanged.
