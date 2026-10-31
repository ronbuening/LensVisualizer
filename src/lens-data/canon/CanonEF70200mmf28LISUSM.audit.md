# Canon EF70–200mm f/2.8L IS USM patent audit

## 2026-10-30 — Original shape and glass review

**Disposition:** Shape retained with resolved geometric constraints; glass reference assertions corrected. This is fresh inspection of the selected original, not fresh inspection of previously cited family or production sources.

### Exact source and image scale

`patents/JP_2002162564_A.pdf`, JP2002-162564A, Numerical Example 1. Front page: filed 2000-11-28, published 2002-06-07, Akira Harada / Canon Inc. Notation ¶0044 page 5; full 41-station prescription, 21 N/ν pairs and Table 1 page 6; wide Figure 1 page 10 and tele Figure 2 page 11. Native embedded images are 1656 × 2339 at 200 dpi. Native crops were inspected; enlarged nearest-neighbor crops were viewing aids only. Earlier 600 dpi references are upsampled viewing, not native resolution.

### Shape, bonds and rejected trial

All 21 bodies and their concave ends were checked in both figures and actual generated wide/tele SVGs. Optical outlines were separated from g1–g5C brackets, arrows, axis, stop labels and image plane. No numerical clear apertures are printed. Approximately 550 px across the train gives ±0.5–1 mm inferred-scale reading uncertainty plus schematic uncertainty; apparent one-to-three-pixel shoulders do not uniquely establish a separate outer land.

| Elements | Retained shape disposition                                                                                                       |
| -------- | -------------------------------------------------------------------------------------------------------------------------------- |
| L1–L3    | Common front group 34–34.5 mm; retain optical arc endpoints, exclude overhead brackets.                                          |
| L4–L5    | Source curved menisci, 25–26 mm; retain both concave ends and rounded focus-group envelope.                                      |
| L6–L9    | S12/S13 16.02 and S15/S16 16.38 mm caps remain under literal air-gap sag constraints. Cement S14 stays connected without a land. |
| L10–L12  | Retain 18–18.5 mm, plane S23 and literal stop-side gap; no invented cover glass.                                                 |
| L13–L15  | Retain 15.3–18.5 mm tapered endpoints and closely spaced meniscus ends.                                                          |
| L16–L18  | Retain S33/S34 12.15 mm caps, front 14 mm, rear 13 mm. Cement S32 remains connected; no opaque square IS block.                  |
| L19–L21  | Retain rear relay curved ends and final 19.5 mm element; no flanges or unprinted plate.                                          |

Full-height S12/S13 = 18 mm trial failed: combined sag 6.65 mm > allowed 5.2725 mm across source D12 = 5.55 mm, at every source zoom station. Rejected without changing R/d or the pre-existing 0.95 gap guard. No rim extension, inferred cut, cut-source exemption, resin wing or bonded-interface land is added. All R/d, source zoom table, stop and focus/IS status remain unchanged.

Source R23/R24 print `0.000`. The explicit r24 stop and flat r23 Figure 1 end support retained plane-format normalization. The previously cited US6646804B2 PDF is missing locally and was not used as a fresh substitute. D41 remains inferred Gaussian infinity distance, not a printed source row.

### Every medium and spectral evidence

All 21 original N/ν pairs were read against page 6 and retained literally; the complete per-element table is in the analysis. The notation paragraph defines bare Ni and νi with no reference line. The d/g lines in plot legends do not establish that reference. Remove all 21 unsupported explicit d references and mark all media Unmatched with qualified coordinate candidates and `indexReferenceNote`. The default d-line/Abbe interpretation is approximate. No source C/F/g, partial dispersion or APD evidence is printed for this example, and no per-lens spectral overrides existed. Zero catalog curves now resolve. No named supplier, production chemistry, UD material, melt or hybrid layer is inferred.

### Sampled runtime and retained limitations

The full 65-zoom × 21-focus census has 1,365 evaluations, 200,655 aimed pupil launches, 66,885/66,885 clear axial rays and 4,095/4,095 clear chiefs. Focus geometry is identical at all 21 slider positions for each zoom, as required by the unchanged no-internal-reconstruction state. Source stations have axial/0.6/corner pupil counts 49/45/24, 49/45/17 and 49/34/18; off-axis clipping is retained rather than forcing full-beam passage.

Source-station EFL/BFL = 72.497675/60.519267, 99.494745/60.523196, 194.979940/60.532373 mm. Fixed-iris f = 2.900000/2.900088/2.900295; derived Gaussian plane residual is zero. Source 17.1°/6.2° chiefs are clear at 21.613919/21.547875 mm. All 21 SVG paths remain finite, closed and connected, with zero renderer trimming throughout the grid.

The 62 non-source interpolated zoom positions are illustrative: maximum aperture +3.814% (f/3.010607, z = 0.796875), 15/65 positions above 3%; maximum Gaussian defocus +4.904329 mm (z = 0.78125). No prescription, iris or cam fit is made to hide these limits. Centered IS only; no source close-focus spacing or numerical decenter is provided. Source Figures 4/6 concern vibration-compensation tilt, not an authored perspective-control setting. No cuts are present. Narrow surface/image-circle/aperture/field guards pass at the three source stations; production correlation remains qualified by 21/19 versus 23/18 counts.

### Historical coverage qualification

Older undated 600 dpi rim and live-site comparisons are retained as historical context in the source history; this entry supplies their actual native-scale qualification. Older family and catalog findings are not redated or counted as newly inspected originals. No production supplier or exact-production prescription claim follows from this review.

## 2026-10-31 — d-line inferred from printed coordinates

Scope: reference-line classification and catalog curves only. No source pair, geometry, rim, stop or control changed, and no new whole-lens review is claimed.

The patent names no spectral line for its index and Abbe columns, and the 2026-10-30 review marked every medium `Unmatched` for that reason. Under the coordinate test in `src/lens-data/LENS_DATA_SPEC.md`, 21 of 21 printed pairs match a catalog nd/νd within |Δn| ≤ 6e-5 and |Δν| ≤ 0.15, and none matches a catalog ne/νe. The table is therefore read as d-line, and the per-element `indexReferenceNote` fields are removed.

21 media carry qualified catalog curves. Rows keep the earlier selection where it is still an exact match. Catalog-copied C/F/g indices and dPgF stay removed. Supplier, melt and chemistry stay unspecified.

| Element | Printed n / ν | Curve | Δn | Δν |
| --- | --- | --- | --- | --- |
| Element 1 | 1.7495 / 35.3 | S-LAM7 | -0.000003 | -0.017 |
| Element 2 | 1.497 / 81.5 | S-FPL51 | -0.000001 | +0.046 |
| Element 3 | 1.497 / 81.5 | S-FPL51 | -0.000001 | +0.046 |
| Element 4 | 1.84666 / 23.8 | S-TIH53 | -0.000000 | -0.022 |
| Element 5 | 1.48749 / 70.2 | S-FSL5 | -0.000000 | +0.036 |
| Element 6 | 1.8061 / 40.9 | S-LAH53 | -0.000002 | +0.026 |
| Element 7 | 1.48749 / 70.2 | S-FSL5 | -0.000000 | +0.036 |
| Element 8 | 1.84666 / 23.8 | S-TIH53 | -0.000000 | -0.022 |
| Element 9 | 1.71299 / 53.9 | S-LAL8 | +0.000005 | -0.033 |
| Element 10 | 1.497 / 81.5 | S-FPL51 | -0.000001 | +0.046 |
| Element 11 | 1.6668 / 33 | S-TIM39 | -0.000000 | +0.055 |
| Element 12 | 1.84666 / 23.8 | S-TIH53 | -0.000000 | -0.022 |
| Element 13 | 1.7725 / 49.6 | S-LAH66 | -0.000001 | -0.002 |
| Element 14 | 1.84666 / 23.8 | S-TIH53 | -0.000000 | -0.022 |
| Element 15 | 1.60311 / 60.6 | S-BSM14 | +0.000002 | +0.041 |
| Element 16 | 1.84666 / 23.8 | S-TIH53 | -0.000000 | -0.022 |
| Element 17 | 1.6935 / 53.2 | L-LAL13 | -0.000000 | -0.014 |
| Element 18 | 1.6935 / 53.2 | L-LAL13 | -0.000000 | -0.014 |
| Element 19 | 1.497 / 81.5 | S-FPL51 | -0.000001 | +0.046 |
| Element 20 | 1.834 / 37.2 | S-LAH60 | -0.000000 | -0.040 |
| Element 21 | 1.834 / 37.2 | S-LAH60 | -0.000000 | -0.040 |
