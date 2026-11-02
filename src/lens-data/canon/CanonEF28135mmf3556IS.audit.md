# Canon EF 28–135mm f/3.5–5.6 IS USM Audit

## 2026-10-30 — Original-PDF shape and glass review

Directly inspected `patents/US_6061180_A.pdf`, US 6,061,180, granted May 9, 2000, Shingo Hayakawa / Canon Kabushiki Kaisha (normalized Canon Inc.). SHA-256: `cef2de761b2206ed076a2e8053734687c54d8cce9735ca985eb315017adc7072`. Numerical Example 1 begins on PDF page 45 / printed column 12 (r1–r15); PDF page 46 / column 13 continues r16–r29, all six variable-gap schedules and the r27 asphere coefficients. Figure 1(a/b/c), PDF page 2 / drawing sheet 1 of 38, gives wide/middle/tele sections. Figure 2(a/b/c), PDF pages 3–5 / sheets 2–4, gives normal aberrations with f/3.60, f/4.36 and f/5.75 and half-fields 36.9°, 23.4°, 9.3°. All Figure 3(a/b/c) stabilized plots are on PDF page 6 / sheet 5. Printed column 6 / PDF page 42 explicitly identifies 0.5° camera tilt and transverse movement of unit V; no millimetre decenter is provided.

The local original is a 56-page image-only PDF: front page, 38 drawing sheets, 17 description/claims pages. The source raster is 2320 × 3408 one-bit pixels, fitted to A4 at effective 281 × 291 ppi. Native raster extraction was inspected; enlarged viewing is magnification, not new detail. This local file contains no correction certificate. Older analysis assertions about that certificate are now qualified as unverified by this original rather than silently counted as source evidence.

Every one of sixteen elements, all concave ends, four cemented interfaces S2/S16/S19/S22 and the single S27A asphere was inspected. No separate cement medium, bonded resin/hybrid layer, source filter or rear plate is tabulated. Drawing leaders, stop blades and group brackets are excluded from optical-rim measurement. Source R/d, every numerical medium pair, all asphere coefficients, derived/paraxial stop authority and focus/zoom spacings are retained. The three nominal aperture targets are corrected separately from geometry, as described below.

### Native figure dimensions and adopted geometry

At wide angle, approximately 861 native pixels span the 98.50 mm optical stack, about 8.74 axial px/mm. The front outline's approximately 251-pixel semi-height, conditionally tied to retained inferred S1 = 30.5 mm, gives about 8.23 vertical px/mm. Page anisotropy, ink and schematic differences prevent a single precise metric scale. Practical height uncertainty is approximately ±1.2 mm. Native relay-component semi-heights are around 77 pixels; rear singlets are around 126 pixels. Adopted 9.75–10.1 mm relay caps and 15.5 mm rear caps stay conservative within that uncertainty and source geometry. These are inferred optical apertures, not published clear diameters or production blank measurements. The marketed 72 mm filter is product context, not a measuring ruler.

| Surface    | Earlier clear sd |              Adopted clear sd / outer rim | Disposition                                                                                        |
| ---------- | ---------------: | ----------------------------------------: | -------------------------------------------------------------------------------------------------- |
| S7         |         12.80 mm | clear 12.80 mm; `rimExtensionSd` 16.00 mm | Resolved vertical outer stroke before the rear concave cap; outer height anchored to S6 = 16.00 mm |
| S15        |         10.50 mm |                                   9.75 mm | C2 ends and curved bonded boundary follow source common height                                     |
| S16        |         10.00 mm |                                   9.75 mm | C2 curved interface retained, S17 already 9.75 mm                                                  |
| S20        |         10.50 mm |                                   9.75 mm | C3 matches existing S18/S19 = 9.75 mm                                                              |
| S21        |         12.30 mm |                                  10.10 mm | C4 source outline anchored conservatively to existing bonded S22                                   |
| S23        |         11.50 mm |                                  10.10 mm | C4 common outer height; no opaque land at S22                                                      |
| S24 / S25  | 17.50 / 17.50 mm |                          15.50 / 15.50 mm | Leading rear singlet                                                                               |
| S26 / S27A | 16.00 / 15.80 mm |                          15.50 / 15.50 mm | Middle rear singlet, original asphere unchanged                                                    |
| S28 / S29  | 17.00 / 17.00 mm |                          15.50 / 15.50 mm | Terminal negative meniscus                                                                         |

Eleven clear-cap fields and one outer shoulder change. Cemented boundaries remain continuous curved optical surfaces; no resin wing, opaque interface land or unsupported equal-height block is authored. One shoulder and zero inferred cuts remain.

Rejected trials and retained constraints:

- S7 clear sd = 16 mm is outside R7 = 14.259 mm and fails the existing slope guard, approaching a vertical cap. The retained 12.8 mm clear cap is already at 63.855°, below the unchanged 64.2° limit. Outer material uses the resolved shoulder instead.
- Equalizing the front C1 caps to 30.5 mm gives L2 edge thickness −0.459 mm and crossing source surfaces S2/S3. The existing 30.5/29.5/28.5 mm clear caps remain. No separate extra S3 shoulder is resolved on its nearly flat continuous stroke.
- Other unit-II clear caps retain existing edge, slope and cross-gap constraints. Source ink does not establish a better metric value strongly enough to justify inflation or invented lands.
- The preliminary rear height trial became the final candidate after source, geometry, full beam and actual SVG comparison. It preserves sampled on-axis clearance but redistributes off-axis vignetting; that is documented rather than represented as full-pupil production validation.

### Every modeled medium

All sixteen index/Abbe pairs agree with source columns 12–13. Column 12 defines only ni and νi as refractive index and Abbe number, without naming a spectral line. The full description/claims supplies no definition linking those prescription coordinates to a d-line. The d/g labels in Figures 2/3 are retained contextual evidence, not individual printed line indices. All numeric pairs and the existing d-line tracing convention remain, with an explicit approximate-reference `indexReferenceNote` and Unmatched glass disposition on every element. This qualifies source uncertainty; it is not a claim that the conventional d inference is wrong.

| Elements           | Source index / Abbe | Prior conditional OHARA comparison | Current disposition |
| ------------------ | ------------------: | ---------------------------------- | ------------------- |
| L1 / L6 / L8 / L16 |      1.84666 / 23.8 | S-TIH53                            | Unmatched           |
| L2                 |      1.69680 / 55.5 | S-LAL14                            | Unmatched           |
| L3                 |      1.71300 / 53.8 | S-LAL8                             | Unmatched           |
| L4 / L7 / L11      |      1.83481 / 42.7 | S-LAH55V                           | Unmatched           |
| L5                 |      1.80400 / 46.6 | S-LAH65V                           | Unmatched           |
| L9                 |      1.60311 / 60.7 | S-BSM14                            | Unmatched           |
| L10                |      1.51742 / 52.4 | S-NSL36                            | Unmatched           |
| L12                |      1.80518 / 25.4 | S-TIH6                             | Unmatched           |
| L13                |      1.70154 / 41.2 | S-BAH27                            | Unmatched           |
| L14                |      1.72342 / 38.0 | S-BAH28                            | Unmatched           |
| L15                |      1.58313 / 59.4 | L-BAL42                            | Unmatched           |

Sixteen previously resolved catalog curves are disabled. No per-medium C/F/g indices, relative partial dispersion or APD evidence is published or authored, so no genuine source spectral value is removed. Labels, every per-element claim and consolidated analysis now agree. The prior L-BAL42/S-BAL42 comparison is conditional and cannot establish historical chemistry, supplier, melt or molding route. Production GMo correlation remains separate from the numerical source.

### Stop, state and rendering verification

Surface and image-circle probes pass. All three original zoom stations and all 65 geometry-identical diagnostic zoom samples pass the existing 3% aperture and full-frame corner-chief checks at infinity.

A separate source restoration corrects the earlier marketed/interpolated nominal targets 3.5 / 4.24 / 5.6 to the directly printed 3.60 / 4.36 / 5.75. The first aperture preset follows wide f/3.60. Evidence is the Numerical Example 1 heading on PDF page 45 (printed endpoints), Figure 2(a/b/c) on PDF pages 3–5 (all three printed FNO labels), and Figure 3(a/b/c) on PDF page 6 (the same three repeated values). The middle f/4.36 is printed, not interpolated. This is an input/control restoration, not a source erratum, and no R/d or cam is tuned to it.

| Source station | Previous nominal target | Restored printed target | Previous derived iris radius | Restored derived iris radius | Restored real working f-number |
| -------------- | ----------------------: | ----------------------: | ---------------------------: | ---------------------------: | -----------------------------: |
| Wide           |                    3.50 |                    3.60 |                  6.715377 mm |                  6.528838 mm |                        3.62668 |
| Middle         |                    4.24 |                    4.36 |                  6.799354 mm |                  6.612215 mm |                        4.39318 |
| Tele           |                    5.60 |                    5.75 |                  6.810960 mm |                  6.633283 mm |                        5.78606 |

The existing derived/paraxial iris authority remains. A printed FNO target and its optical reproduction do not establish a physical iris-radius schedule. Actual marginal-ray working values are kept separate from nominal/paraxial targets. Focus and zoom spacings are unchanged.

A 65-position first-order census distinguishes the three original source states from illustrative intervals. Source-node computed BF agrees with authored computed gaps to <0.000001 mm; no source BF is printed. At zoom 0.828125, the interpolated actual geometry gives EFL 94.538052 mm versus displayed 103.277208 mm, and BF 56.606170 mm versus retained interpolated gap 53.217719 mm, a +3.388451 mm paraxial defocus. The source provides no intermediate cam law. Linear interpolation is not focus-preserving and is not repaired by inventing source motion.

The 21-zoom × 21-focus × nine-aperture working-ray census has identical baseline/candidate status totals: 3726 traced, 243 unavailable. The latter are nine aperture calls at 27 intermediate zoom/focus states reporting `object-inside-lens`, within zoom 0.55–0.95 and focus 0.05–0.20. No aperture is rim- or trace-limited among the available states. The source only publishes infinity spacings; finite focus remains the existing product-MFD reconstruction, with this physical-conjugate limitation retained.

The actual renderer at 441 zoom/focus states produces 7056 finite, singly connected, closed element paths and zero hidden trimming. Source-station SVGs were compared with native Figure 1(a–c). Modeled corner aiming reaches 21.65 mm. Across those 441 states, a 193-sample circular-pupil probe at axial, half-field and corner fields traces every axial sample; no chief is unaimed. Off-axis vignetting remains: infinity corner counts wide/middle/tele are 125/158/153 of 193 versus previous 129/160/159; reconstructed close counts are 115/158/146. Aimed traces and finite SVGs do not supersede the physical object-position guard or certify full-pupil illumination.

There is no inferred cut to exempt or validate. Published stabilized Figure 3 was inspected, but no unit-V decenter control exists and no millimetre decenter is given; centered runtime geometry does not certify the 0.5° stabilized state. Source fidelity, sampled runtime clearance and production correlation are separate conclusions. No source blocker remains; these model limitations are retained explicitly.

## Runtime Launch Qualification - 2026-10-30

This is a runtime-only supplement to the dated source/shape/glass review above. No original PDF was reinspected for this supplement; source review dates, prescription values, controls and review counts remain unchanged. Earlier pupil/chief grids labeled near or close sampled **collimated rays through focus-adjusted geometry**. Those labels identify the control geometry, not finite-object illumination. Independently computed finite paraxial residuals and exact-working-f-number probes remain separate; the latter use the runtime distance-label object plane.

The explicit finite-object supplement samples 20 positive focus positions at nine zoom positions. The complete current ABCD matrix, including any rear plates, supplies the real Gaussian object plane. A paraxial entrance-stop seed and inverse chief solve target actual image heights 0, 10.8250 and 21.6500 mm; paraxial object-height scaling alone is not accepted as the actual image-edge solve. Geometric roots are solved before current-aperture classification. The 21.6500 mm edge is the viewer format corner, which may exceed the selected source's image height; these probes do not establish production illumination or source support for an inferred continuous cam.

Of 169 positive-real-object geometries, 507/507 target chiefs converge: 507 clear the current caps and 0 clip. A further 11 sampled control geometries have no positive real Gaussian object, first at zoom 0.625, focus 0.05 (object-to-first-surface -3698.819992 mm); finite-object bundles are not asserted for them. Across the converged fields, 193 current-iris samples per field give 89,564 passed, 7,467 clipped, 820 failed and 0 unaimed rays. Minimum sampled axial transmission is 193/193. Failed traces are retained numerical/path outcomes, separately from clipping: `noBracket @ STO` (820). No clear aperture, R/d, stop, cam, tolerance or source field is altered to clear those diagnostics.

Selected current close geometries, with Gaussian conjugates and their exact aimed bundle counts:

| Zoom control | Aberration control | Gaussian object-to-image (m) | Distance label (m) | Axis / half / edge passing of 193 | Chief result          |
| -----------: | -----------------: | ---------------------------: | -----------------: | --------------------------------- | --------------------- |
|            0 |                  0 |                  0.499999802 |           0.500000 | 193 / 179 / 120                   | clear / clear / clear |
|          0.5 |                  0 |                  0.500000044 |           0.500000 | 193 / 188 / 159                   | clear / clear / clear |
|            1 |                  0 |                  0.499999991 |           0.500000 | 193 / 193 / 152                   | clear / clear / clear |

The largest sampled relative difference between a positive Gaussian object-to-image conjugate and its distance label is 749.198853% at zoom 0.75, focus 0.25, aberration control 0: Gaussian 16.983977066 m versus label 2.000000000 m. This is a first-order conjugate/control distinction, not a new production-distance measurement. Nominal infinity controls remain in their separate collimated checks; their small rounding residual is not converted into a finite-source claim.

## 2026-10-31 — d-line inferred from printed coordinates

Scope: reference-line classification and catalog curves only. No source pair, geometry, rim, stop or control changed, and no new whole-lens review is claimed.

The patent names no spectral line for its index and Abbe columns, and the 2026-10-30 review marked every medium `Unmatched` for that reason. Under the coordinate test in `src/lens-data/LENS_DATA_SPEC.md`, 16 of 16 printed pairs match a catalog nd/νd within |Δn| ≤ 6e-5 and |Δν| ≤ 0.15, and none matches a catalog ne/νe. The table is therefore read as d-line, and the per-element `indexReferenceNote` fields are removed.

16 media carry qualified catalog curves. Rows keep the earlier selection where it is still an exact match. Catalog-copied C/F/g indices and dPgF stay removed. Supplier, melt and chemistry stay unspecified.

| Element | Printed n / ν | Curve | Δn | Δν |
| --- | --- | --- | --- | --- |
| Element 1 | 1.84666 / 23.8 | S-TIH53 | -0.000000 | -0.022 |
| Element 2 | 1.6968 / 55.5 | S-LAL14 | -0.000003 | +0.032 |
| Element 3 | 1.713 / 53.8 | S-LAL8 | -0.000005 | +0.067 |
| Element 4 | 1.83481 / 42.7 | S-LAH55V | -0.000003 | +0.025 |
| Element 5 | 1.804 / 46.6 | S-LAH65V | -0.000001 | -0.017 |
| Element 6 | 1.84666 / 23.8 | S-TIH53 | -0.000000 | -0.022 |
| Element 7 | 1.83481 / 42.7 | S-LAH55V | -0.000003 | +0.025 |
| Element 8 | 1.84666 / 23.8 | S-TIH53 | -0.000000 | -0.022 |
| Element 9 | 1.60311 / 60.7 | S-BSM14 | +0.000002 | -0.059 |
| Element 10 | 1.51742 / 52.4 | S-NSL36 | -0.000003 | +0.031 |
| Element 11 | 1.83481 / 42.7 | S-LAH55V | -0.000003 | +0.025 |
| Element 12 | 1.80518 / 25.4 | S-TIH6 | +0.000001 | +0.025 |
| Element 13 | 1.70154 / 41.2 | S-BAH27 | -0.000004 | +0.039 |
| Element 14 | 1.72342 / 38 | S-BAH28 | -0.000000 | -0.044 |
| Element 15 | 1.58313 / 59.4 | L-BAL42 | -0.000004 | -0.014 |
| Element 16 | 1.84666 / 23.8 | S-TIH53 | -0.000000 | -0.022 |
