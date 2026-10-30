# Audit Log - CANON EF 70-300 mm f/4.5-5.6 DO IS USM

Patent: JP 2004-317867 A, Numerical Example 1

## 2026-08-19 - Patent-figure and glass-coverage audit

### Glass classification

- Rechecked the data and local `patents/JP2004317867A.pdf`. The patent publishes nd/vd coordinates but no vendor or glass names.
- Replaced four Abbe-only descriptions with vendor-neutral coordinate classes: E2 `834372`, E6 `847239`, and E14/E16 `835427`.
- Those classes select existing coordinate-compatible S-LAH60, S-NPH53, and S-LAH55 catalog curves without choosing a production supplier or glass variant. Strict Sellmeier coverage rises from 13/17 to 17/17 elements.

### Semi-diameter review

- Inspected PDF page 25, Figure 1, the Numerical Example 1 wide-angle section, at 600 dpi:
  `npm run audit:patent-figure -- src/lens-data/canon/CanonEF70300mmf4556DOISUSM.data.ts patents/JP2004317867A.pdf 25 0.12,0.535,0.43,0.635 --axis=0.587 --dpi=600`.
- The calibrated scale was 77.08 µm/px and the median figure/data ratio was 0.976. Reliable normalized group ratios were 0.94-1.15, below the audit's strong-evidence threshold.
- The automated E9 row was contaminated by the `SP` stop line; a manual high-resolution reading put its optical rim near 10.8 mm, only about 10% below the modeled 12.0 mm.
- Retained all surface SDs, `STO.sd = 10.5`, and `gapSagFrac = 0.97`; no figure-backed correction was justified.

### Diagram labels and movement order

- Compared the supplied site screenshot directly with Figure 1. The patent names the seven functional groups `L1`-`L7`, not `G1`-`G7`; updated the visible group annotations, header spec, subtitle, focus description, and variable-gap labels to the source notation.
- Renamed LensVisualizer's individual glass members from `L1`-`L17` to neutral `E1`-`E17`. Figure 1 does not name individual elements, so this avoids overloading the patent's `L1`-`L7` group labels while leaving the diagram's numeric element labels unchanged.
- Retained the required runtime surface label `STO` as the schema-standard equivalent of the patent's `SP`. The `DO1`, `D2`, and `D3` bonded-pair annotations, surface-4 diffractive-phase marker, surface-11A asphere marker, L2 IS role, and L6 focus role agree with the prescription and source description.
- Checked every visible element type against the signed surface radii, isolated element power, and Figure 1 silhouette. The meniscus/biconvex/biconcave classifications are consistent, and E7 is the only aspheric element; no type correction or additional material tag is warranted.
- Paragraphs [0009] and [0024] explicitly put L1, L3, and L6 objectward from wide to tele, keep L2, L5, and L7 fixed, and move L6 imageward from infinity to close focus. The runtime profile reproduces those directions: wide-to-tele shifts are L1 `-65.170`, L3 `-10.800`, L4 `+7.730`, and L6 `-14.310` mm relative to the fixed image plane; L5/L7 remain fixed and L2 differs by only `0.010` mm from rounded source gaps.
- The 21 zoom control points are strictly ordered from `72.16` to `290.26` mm. At wide/middle/tele, close focus moves L6 imageward by `0.713980`, `2.399338`, and `7.934380` mm respectively; every authored D25 increase is balanced by the same D31 decrease, and the focus travel grows monotonically toward tele.

### Glass and color completeness

- Re-ran the compatible-glass resolver for all 17 elements. Every element uses Sellmeier dispersion; the largest coefficient-evaluated residuals are about `|Δnd| = 0.0000052` and `|Δvd| = 0.043`, well inside the catalog guards.
- The patent provides only d-line `nd/vd`, so no production supplier, measured C/F/g indices, `dPgF`, or APD status can be recovered responsibly. The E2, E6, and E14/E16 vendor-neutral coordinate classes remain the defensible dispositions; no additional catalog row or diagram APD tag is supported.

### Identity and metadata

- Verified the display name against Canon's product identity and the repository's spacing policy. `CANON EF 70-300 mm f/4.5-5.6 DO IS USM` remains correct.

## 2026-10-30 — Original native shape, glass and control review

### Exact source and native images

Selected original `patents/JP2004317867A.pdf`, JP2004-317867A, Numerical Example 1. Front page confirms filed 2003-04-17, published 2004-11-11, Hiroshi Endo / Canon Inc. Bare bulk notation ¶0052 pp12–13; source equation images ¶0053/0054 p13; all 33 stations/17 media and asphere/DO terms pp14–15; motion cams pp15–16; focus cam p17. Table 2's rotated grid is on p10, Table 3's condition grid on p24. Figure 1 p25 is the wide section; Figure 2 is a power/motion diagram, not a tele section. Native Figure 1 is1162 × 651 at≈400 dpi; tables≈200 dpi. Old 600 dpi viewing is upsampling. Native crops and actual rendered SVG were inspected. Reading uncertainty±0.3–0.6 mm at inferred scale plus schematic error; no source SD column exists.

### All elements and constrained shape changes

E1 and bonded E2/E3 were checked against the full source optical rim. Restore S4/S5 SD23.8/23.6→27.0 mm, matching the native continuous pair height without an interface land. A27.2 mm common-height trial crosses E3 at the rim with−0.052 mm edge thickness; rejected. The adopted27 mm remains positive, finite and untrimmed under literal R/d.

E4–E6 negative IS bodies retain S7/S8 clear caps10.6 mm and connected S9 cement; no full-height12 mm negative block. E7/E8 retain the sole aspheric face, literal coefficients and constrained meniscus ends. E9 retains its inferred12 mm single negative body, excluding the SP leader from measurement. E10–E13 rear cluster is source-connected: S21/S22 clear caps10.5→11.0 mm remove finite wide-state boundary clipping (sampled maxima10.512559/10.521551 mm) within the native envelope and unchanged gap guard. E14–E16 retain the normalized zero-distance equal-radius29/30 material interface; no invented air/cement/resin layer. E17 retains its19 mm terminal meniscus. No remaining resolved shoulder justifies an outer extension; no disconnected wing, opaque bonded land or inferred concave-end cut is authored. Existing gapSagFrac0.97, R/d, stop, phase/asphere and cams are unchanged.

### Every medium, phase and source-equation limitations

All 17 literal N/ν pairs match original pp14–15. Bulk reference wavelength is unreported in ¶0052; only DOEλ0 is explicitly d-line in ¶0054. Mark all 17 Unmatched with approximate coordinate candidates and reference notes, zero active catalog curves. No genuine C/F/g, partial dispersion or APD evidence is printed, and no per-lens override existed. Historical catalogs do not prove production supplier, melt or chemistry. No microscopic resin thickness/material prescription or three-layer DO geometry is provided.

The raw c2/c4/c6 values−7.27275e-5/−3.95105e-9/−3.14725e-12 and d-line DOEreference stay unchanged. Actual ¶0054 prints2πλ0 and C1·a²; the retained OPD/+1 interpretation is explicitly an adopted model supported by source focal/back-focus scale, not literal reproduction of that defective equation. Native asphere denominator has undefined H; existing standard spherical-base K=0 is retained as interpretation, with literal b/c/d. Table 3 prints DXT/MF bound 0.05–0.08 against example values0.56/0.67. These are separate structured unresolved source.errata notes; no exact correction, radius fit or phase scaling is invented.

### Source cams and all-state runtime

Fresh coefficient evaluation gives tele shifts−65.184060/−10.812550/+7.722790/−14.310666 mm for L1/L3/L4/L6. The 21 retained knots agree with the rounded source motion data within 0.008824 mm; source spacing columns stay literal, and L4 turning point0.0748997827 is included. Focus-cam shifts agree within 1e-9 mm, W/M/T0.713980/2.399338/7.934380 mm, consistent with Table 2 rounded endpoint 0.71/7.93 mm. D25+D31 remains conserved.

Actual-state iris checks across 81 distinct zoom coordinates (65 uniform plus all 21 knots) × 21 focus positions give1,701 states,250,047 aimed pupil rays,83,349 clear axial rays and5,103 clear chiefs. All 17 paths finite/closed/connected, zero renderer trimming. Source W/M/T infinity counts49/44/31,49/48/28,49/37/27; close counts49/44/31,49/46/26,49/40/22. Peripheral vignetting remains. Narrow guards pass without new allowances; no cuts require a beam exemption.

Separate65-position infinity aperture/first-order census stays within 3% of the iris schedule; max Gaussian defocus+0.121533 mm at z=.96875. Source-cam endpoint diagnostic conjugates≈1485.547/1504.948/1505.883 mm do not establish an exact source distance-reference plane. Interpolated cam/focus states, centered IS only, unresolved bulk reference, ideal phase optics and17/14-versus18/12 production correlation remain qualified.

### Historical-date preservation

The 2026-08-19 entry above is preserved as its actual historical review. Its17-active-curves, explicit bulk d-line, fixed STO.sd and600 dpi detail claims are superseded by this fresh original/reference and current-schema review; they are not reissued as fresh evidence. No auxiliary publication or production page was silently substituted.

The directly printed endpoint half-fields 16.7°/4.25° have clear chiefs at 21.652893/22.322699 mm, 100.09%/103.19% of the format semi-diagonal; these source-angle heights remain distinct from the runtime format-corner solve.
