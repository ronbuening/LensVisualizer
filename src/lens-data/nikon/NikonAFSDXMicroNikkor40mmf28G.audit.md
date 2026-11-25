# Nikon AF-S DX MICRO-NIKKOR 40mm f/2.8G Patent Audit

Current model: US 2011/0176215 A1, Example 1. The earlier entries cover US 2011/0170195 A1, Example 1.

<!-- prettier-ignore-start -->

Patent: US 2011/0170195 A1, Example 1

## 2026-08-18 — Initial integration audit

- Reviewed the untracked local patent PDF `patents/US20110170195A1.pdf`; the infinity section of Figure 1 on PDF page 2 is the controlling optical section.
- Refined the inferred SDs to better reproduce the fuller rear half of G1 and the narrower G2/G3 outline in the patent figure.

| Surfaces | Before (mm) | After (mm) |
|---|---:|---:|
| 5 / 6 / 7 / 8 | 9.6 / 9.3 / 8.7 / 8.1 | 10.5 / 10.2 / 10.0 / 9.4 |
| 13 / 14A | 10.3 / 10.3 | 9.0 / 9.0 |
| 15 / 16 / 17 / 18 | 9.3 / 9.1 / 9.2 / 9.3 | 8.2 / 8.0 / 8.0 / 8.0 |

- Recomputed surface 14A at the new 9.0mm rim: sag `-1.580828mm`, reference-sphere sag `-1.650574mm`, and departure `+0.069746mm`.
- Relabeled L12, L13, and L23 to catalog-compatible HOYA `NBFD13`, `BACD4`, and `M-PCD4`. These provide checked dispersion curves while remaining explicitly vendor-unproven patent correlations.
- Normalized the display name to `NIKON AF-S DX MICRO-NIKKOR 40mm f/2.8G`.

## 2026-08-18 — Screenshot follow-up

- Rechecked the supplied infinity rendering against Figure 1. The revised G1/G2/G3 height progression follows the source; no further SD adjustment exceeded the audit threshold with sufficient visual confidence.
- Confirmed published close-focus travel: G1 moves `−26.8627mm` objectward, G2 moves `−24.4988mm` objectward with the stop, and G3 remains fixed.
- Added those focus/fixed roles to the group labels and completed curve coverage with FK5, F3, N-SK16, and J-LAF2 equivalents alongside the existing HOYA correlations.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Table 1 (PDF p. 27, printed p. 9) lists low-pass filter P1 as surfaces 19–20: d18 = 0.100 mm, t = 2.000 mm,
  nd = 1.51680, νd = 64.12, then Bf (printed 37.65, constant). Surface 18 now stores the physical 0.100 mm gap and
  `rearPlates` holds P1 as J-BK7A with `gapAfterMm` 37.65276, derived (not printed to that precision) from INF
  TL 86.85516 − Σd1–17 47.1024 − 2.100, which keeps the previous ACTL-normalized image plane.
- Paraxial check against the previous data: EFL identical; defocus changes by 0.000005 mm at INF/MID/CLD (rounding of
  2/1.5168 in the old fold). Physical track grows by 0.681 mm to 86.85516 mm, matching the patent TL.

## 2026-10-29 — Fresh shape and glass reinspection

- Directly viewed local `patents/US20110170195A1.pdf`, Example 1 Figure 1 on PDF page 2 at 600 dpi (infinity section; checked finite panels), Table 1 page 27, and d-line definition page 26. Rechecked all 9 active media and source low-pass plate P1. Every nd/νd is retained; all 10 catalog curves resolve. Plate J-BK7A is now explicitly qualified. No source C/F/g indices, partial dispersion, APD measurement or production supplier identities are supplied or invented.
- Reviewed all 18 active faces plus the low-pass plate. The 300 dpi source has an approximately 1328-render-pixel first-to-last-powered-vertex span at 600 dpi over 47.1024 mm, about 14.1 native px/mm; ray/leader ink is excluded. Native edge heights for S2/S7/S8/S10 are approximately152/120/120/125 px. Measured cap shares are q≈0.86±0.013 /0.88±0.016 /0.89±0.016 /0.86±0.015, using ±(1+q)/edge.
- Kept optical SDs on S2/S8/S10 at 10.5/9.4/8.3 mm and added outer extensions 11.3/10.0/9.4 mm. Adopted cap shares 0.929/0.940/0.883 are farther out than the measured ends, retaining the existing clear caps. At S7, the initial figure-derived 1.02 mm cut (radius 8.999 mm) failed the full beam guard: at the β=-1 keyframe, field 7.50°, reach 9.0956 mm requires radius>=9.1456 mm. Adopted inferred depth 1.06 mm / radius 9.171841 mm / outer 10.0 mm (q 0.917); full inferred-cut validation passes without a source-depth flag or tolerance change. No other land is resolved; S14A/clear 9.0 mm and its existing departure remain unchanged.
- Surface/image-circle audits pass. Infinity remains iris-limited f/2.680; all published finite keyframes are included in geometry/beam checks. Nine actual SVG states include INF/MID/CLD focus controls 0/0.91065793/1, with 9 finite paths and zero trim diagnostics; raster inspected. Source-coordinate and catalog-consistency checks pass. Existing source Bf/reference-plane normalization remains disclosed.

## 2026-11-03 — Close-focus endpoint relabel

`focus.closeFocusM` 0.163 → 0.153 m. The close-focus distance now records where the authored close row focuses — its paraxial in-focus object-to-image distance — so the close-focus label and `closeFocusM` agree within 2 %. The old value was up to -6.3 % from that row. No gap, keyframe, published flag or other optical value changed.

- Why the old value differed: printed beta = -1 row focuses at 0.1526 m; focus description gives the marketed 0.163 m.
- `catalog.closeFocusM.marketing` 0.163 m keeps the maker's figure; the focus readout names it beside the close-focus label where the two differ by more than 2 %.

Text sync: header and focus.description: focus.closeFocusM is the 0.15264661 m CLD conjugate; Nikon's 0.163 m is catalog metadata.

## 2026-11-14 — Published finite conjugates

Patent: US 2011/0170195 A1, Example 1.

| Zoom / keyframe | Field | Before | After | Source locator | Paraxial residual |
| --- | --- | --- | --- | --- | --- |
| 0 / 1 | `focus.conjugates` | Absent | 80.4055 mm, `first-surface` | PDF p. 27, Table 1, Variable Distances, MID / CLD columns, d0 row; d0 = 80.4055; d1a=3.21650, d1b=4.00000, d2=13.37100 mm | +0.000781631 mm / +0.059292 depths; consistent |
| 0 / 2 | `focus.conjugates` | Absent | 38.9287 mm, `first-surface` | PDF p. 27, Table 1, Variable Distances, MID / CLD columns, d0 row; d0 = 38.9287; d1a=5.33230, d1b=4.00000, d2=25.70880 mm | +0.002977066 mm / +0.156106 depths; consistent |

Reference evidence: d0 indicates a distance along the optical axis between the object and the first lens group G1

The authored gaps, image plane and published-state flags are retained.

<!-- prettier-ignore-end -->

## 2026-11-23 — Source changed to US 2011/0176215 A1, Example 1

### Production correlation

The previous [Muratani and Tanaka Example 1](https://patents.google.com/patent/US20110170195A1/en) has nine elements in eight air-separated groups, including one cemented doublet behind the stop, and one asphere. The [Mouri and Tanaka Example 1](https://patents.google.com/patent/US20110176215A1/en) has nine elements in seven groups, with two cemented doublets in front of the stop and five singlets behind it. It is all spherical. Nikon specifies the seven-group construction, F-mount DX coverage, 40 mm f/2.8–22, 38°50′ angle of view, 0.163 m minimum focus measured from the focal plane, 1:1 maximum reproduction, 52 mm filter thread and seven rounded blades. Nikon announced the lens on July 12, 2011 and reports an August 2011 release. Its product drawing marks no ED, Super ED or aspherical positions. [Nikon specifications](https://imaging.nikon.com/imaging/lineup/lens/f-mount/specialpurpose/micro/af-s_dx_micro40mmf_28g/), [construction drawing](https://imaging.nikon.com/imaging/lineup/lens/f-mount/specialpurpose/micro/af-s_dx_micro40mmf_28g/img/pic_004.jpg), [launch announcement](https://www.jp.nikon.com/company/news/2011/0712_nikkor_01/).

Nikon's Tale 88 credits Motohisa Mouri with the production design, describes two moving groups and one fixed group, and reports just over 30 mm of front travel and f/4.2 effective at 1:1. Example 1 gives 30.053 mm of front travel and a paraxial working f/4.217. The registered model has the production drawing's two front doublets and five singlets. Over 112 readable crossings on seven rows, first/last-powered-vertex registration gives 3.89 native pixels RMS for Example 1 and 1.30 for Example 5. The latter's three weak aspheres and f/4.117 working aperture at 1:1 make Example 1 the closer match to the published specifications. Example 1's S5 seam and S6 exit sit about 7 and 8 native pixels rearward. The overlay uses the original 1240 × 764 image and one uniform scale, with the model at infinity and the maker drawing's focus unspecified. PhotonsToPhotos also indexes Example 1 under the production name, corroborating the identification independently of Nikon's account. [Tale 88](https://imaging.nikon.com/imaging/information/story/0088/index.html), [original production section](https://imaging.nikon.com/imaging/information/story/0088/img/pic_01.jpg), [PhotonsToPhotos Optical Bench](https://www.photonstophotos.net/GeneralTopics/Lenses/OpticalBench/OpticalBench.htm).

### Transcription, stop and conjugates

Read the cover, Fig. 1 (PDF p. 2), Figs. 2A and 2B (p. 3), Fig. 3 (p. 4), the Example 1 description (pp. 26–27) and both parts of Table 1 on p. 27 from Poppler page images. Rechecked surfaces 1–17, all radii, fixed thicknesses and air spaces, nine index/Abbe pairs and every variable-distance column. Surface 7 is the iris and stays 2.500 mm behind S6. Its 7.547917 mm radius is inferred from the Table 1 design f/2.887 and the first-order entrance pupil, whose radius is 6.931035 mm. Index reference is helium d (587.6 nm, ¶0094). All powered surfaces are spherical. The example contains air from S17 to the image. The previous file's camera-side plate came from the earlier patent. [Publication PDF](https://patentimages.storage.googleapis.com/cb/14/1b/1cf1db8be7b0b1/US20110176215A1.pdf).

The final gap is written as 39.818 mm using Specifications Bf. The S17 row's 39.8 mm is the same distance at lower precision, and 52.700 + 39.818 reproduces printed infinity TL 92.518 mm. Figure 2A gives FNO 2.87 and Table 1 gives 2.887. Aperture uses Table 1. Figure 2B gives object-space NA 0.11, and the model's exact iris-limited 1:1 ray gives 0.11453, which rounds to 0.11. No sign or digit correction is supported. The infinity EFL is 40.01980 mm versus the printed 40 mm. Conditional expression (3) gives 4.38 in Table 1 and 4.33879 calculated from the Table 1 prescription, both within the stated range. Ordinary rounding at the displayed precision does not reconcile the two values (it allows about 4.310 to 4.368), so this remains an unresolved source discrepancy; the prescription is kept as printed. No scaling or refitting was applied.

| Focus    | Printed $d_0$, $d_7$, $d_{13}$ (mm) | Object to image from source / in focus (mm) | EFL (mm) | Paraxial image behind S17 (mm) | Paraxial working f/# | Exact cone f/# |
| -------- | ----------------------------------- | ------------------------------------------- | -------: | -----------------------------: | -------------------: | -------------: |
| Infinity | ∞, 7.200, 1.200                     | ∞                                           | 40.01980 |                       39.82509 |                2.887 |          2.959 |
| 1:2      | 78.087, 6.688, 16.234               | 185.127 / 185.290                           | 37.88205 |                       39.85866 |                3.547 |          3.659 |
| 1:1      | 38.206, 7.253, 31.200               | 160.777 / 160.879                           | 36.27100 |                       39.91982 |                4.217 |          4.375 |

Table 1 gives an infinity EFL and infinity f-number only. The finite EFLs and working f-numbers are derived at the fixed iris. The calculated image offsets from the 39.818 mm air gap are +0.00709, +0.04066 and +0.10182 mm at the printed object positions. At the finite paraxial images, magnifications are −0.50064 and −1.00215 versus printed −0.5 and −1.0. Both declared finite conjugates pass the source-distance audit at 2.75 and 4.88 quarter waves. Object distances in the middle column are reconstructed from $d_0$ and optical track for the source values and solved against the fixed plane for the in-focus values. The focus rail uses 0, 0.86825542 and 1 for the three published configurations, with interpolation between them and the paraxial 0.160879 m endpoint. The production 0.163 m remains in the catalog metadata. G1 and its iris travel 14.522 and 30.053 mm, and G2 travels 15.034 and 30.000 mm at 1:2 and 1:1. G3 stays fixed. There is no zoom axis.

The longitudinal spherical-aberration check at 100%, 85%, 70% and 50% of the paraxial infinity entrance radius gives d-line shifts of −0.138, −0.057, −0.041 and −0.028 mm relative to paraxial focus. Fig. 2A shows the same increasingly negative turn at the margin, approximately −0.16 mm. Exact iris-edge traces at infinity and 1:1 give d-line shifts of −0.113 and −0.074 mm, with the latter turning negative near the edge as in Fig. 2B. The loop and sign of the near g trace are reproduced, with a paraxial g-minus-d shift of +0.026 mm at infinity and −0.165 mm at 1:1. The approximate plotted g shifts near the axis are about zero and −0.16 mm. The 1:1 g marginal shift reaches +0.225 mm in the proxy-glass model versus roughly +0.13 mm in Fig. 2B. The plots resolve trends and constrain the transcription. The exact source pupil, unrounded prescription and glass dispersion remain unspecified.

### Semi-diameters and clearance

Fig. 1 was rendered at 600 dpi and rotated to put the object at left. The first and last glass-vertex centers are about x = 1551 and 3825 in that image, spanning 52.700 mm, or about 43.15 rendered px/mm (21.58 native px/mm at the embedded 300 dpi). The S1–S4 vertices independently give about 43.1 px/mm over 17.50 mm. Near-axis vertex centers establish the scale. The optical edges are read on both sides of the axis, excluding leader lines, focus brackets and rays. The automatic envelope readings near G2 include label ink, so the observed rim segments take precedence. Both maker images corroborate the wider G3 rims and the land at the exit of the front doublet. The patent draws the two singlets immediately behind the iris shorter than the maker section. Their patent rim heights are used.

| Example 1 surface | Inherited estimate (mm) | Fig. 1 rim estimate (mm) |             Final (mm) |
| ----------------- | ----------------------: | -----------------------: | ---------------------: |
| 1                 |                    11.3 |                     11.1 |                   11.1 |
| 2                 |                    10.5 |         10.7 shared seam |                   10.7 |
| 3                 |                    10.6 |     9.0 cap / 10.7 outer | 9.197 cap / 10.7 outer |
| 4                 |                    10.5 |                      9.6 |                    9.6 |
| 5                 |                    10.0 |          9.4 shared seam |                    9.4 |
| 6                 |    9.4 (10.0 extension) |                      9.4 |                    9.4 |
| 8                 |     8.3 (9.4 extension) |                      8.4 |                    8.4 |
| 9                 |                     8.6 |                      8.4 |                    8.4 |
| 10                |                     9.4 |                      9.1 |                    9.1 |
| 11                |                     9.8 |                      9.1 |                    9.1 |
| 12, 13            |                9.0, 9.0 |                 9.6, 9.6 |               9.6, 9.6 |
| 14, 15            |                8.2, 8.0 |               11.4, 11.4 |             11.4, 11.4 |
| 16, 17            |                8.0, 8.0 |               11.7, 11.7 |             11.7, 11.7 |

The inherited column maps the previous outline by element position onto the new prescription as a comparison baseline. The S3 land starts at about 195 native px from the axis and extends to about 231 px, giving a cap-to-rim ratio near 0.84 ± 0.01. That cap needed extra clearance: the figure-only 9.0 mm cut intercepted the wide-open beam at focus 0.50 and field 11.85°, where the uncut beam reaches 9.107 mm. The 3.76 mm sag cut moves the cap end to 9.197 mm and passes the full beam-margin sweep. The inherited S6 and S8 extensions have no land in Example 1's figure and were dropped. The squared singlets use equal radii on both faces. The small steps at the front seams are approximated by the connecting glass edges.

The app's exact d-line trace reaches the physical iris edge and clears every glass rim at each published state and at 0.05 focus increments. The closest such axial glass clearance is 0.300 mm at S13 at 1:1. The nominal paraxial marginal launch likewise clears the glass there by 0.004 mm in the exact trace, with the fixed iris limiting the real beam. The image-circle and surface audits pass at the default validator limits. The DX corner chief ray clears the glass, and the 20.479° patent chief ray reaches 14.994 mm. The jsdom cross-section renders nine lens outlines and two iris marks with no forced trims at the three published configurations. At the rear, the drawn near-contact is a real narrow air gap in the prescription.

| Infinity field angle | Earlier patent (%) | Example 1 with inherited rims (%) | Example 1 with figure-derived rims (%) |
| -------------------- | -----------------: | --------------------------------: | -------------------------------------: |
| 0°                   |              100.0 |                             100.0 |                                  100.0 |
| 5°                   |               96.3 |                              97.8 |                                  100.0 |
| 10°                  |               88.5 |                              86.4 |                                   98.1 |
| 15°                  |               69.2 |                              64.1 |                                   83.0 |
| 19.5°                |               45.3 |                              35.3 |                                   58.7 |
| 20.479°              |               39.9 |                              29.0 |                                   52.7 |

These percentages are geometric transmission from the same 64-cell-across stop sampler. The final on-axis transmission is 100% at all three published positions. At the model's respective DX edges it gives 78.8% at 1:2 and 89.7% at 1:1, with the same fractions when the S3 land is removed for comparison. The wide-open infinity design remains f/2.887 as the rim-limited tracing half-field changes from 23.54° on the inherited Example 1 rims to 28.88° on the new rims. The DX analysis field is narrower.

### Glass dispositions

Every element keeps the six-decimal index and two-decimal Abbe values from Table 1. The following Ohara curves round to those pairs. Direct evaluation at C/d/F gives maximum absolute residuals of $2.42 \times 10^{-7}$ in $n_d$ and 0.00428 in $\nu_d$. The older Ohara equivalence table establishes era plausibility. The positive identification is a catalog-coordinate match. Material identity, production melt and supplier remain open. No ED or APD tags are supported by the maker section, and no spectral constants were inferred as patent data. [Ohara technical catalog](https://oharacorp.com/glass-catalog/), [older Ohara glass catalog and equivalence table](https://wp.optics.arizona.edu/optomech/wp-content/uploads/sites/53/2016/10/Ohara_Glass_Catalog.pdf).

| Element |    $n_d$ | $\nu_d$ | Spectral equivalent |
| ------- | -------: | ------: | ------------------- |
| L11     | 1.743997 |   44.79 | S-LAM2              |
| L12     | 1.516330 |   64.14 | S-BSL7              |
| L13     | 1.699998 |   48.08 | S-LAM51             |
| L14     | 1.581439 |   40.75 | S-TIL25             |
| L21     | 1.740769 |   27.79 | S-TIH13             |
| L22     | 1.651597 |   58.55 | S-LAL7              |
| L23     | 1.740999 |   52.64 | S-LAL61             |
| L31     | 1.772499 |   49.60 | S-LAH66             |
| L32     | 1.548141 |   45.78 | S-TIL1              |

Open: Nikon has not identified a numbered patent example as the factory prescription. The production drawing's focus setting, the second doublet profile difference, the infinity design versus marked aperture and the source's exact spectral and mechanical aperture data remain unresolved. The model reproduces the published prescription at the precision available.
