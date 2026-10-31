# Canon EF-S 24mm f/2.8 STM — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** JP 2015-111192 A, “Optical System and Image Pickup Apparatus Having the Same”\
**Applicant:** Canon Inc.\
**Inventor:** Yuichi Gyoda (行田 裕一)\
**Filed:** 2013-12-06\
**Published:** 2015-06-18\
**Example details:** Numerical Example 1, ¶0066–67, PDF pp. 10–11; Fig. 1 p. 15; Fig. 2 p. 16; Tables 1/2 pp. 14/15.

Example 1 is correlated with the Canon EF-S 24mm f/2.8 STM by its six elements/five groups, 24.50 mm focal length, f/2.88 aperture, single rear asphere and unit focus. The patent does not identify a retail product, production prescription, supplier or manufacturing process. The original PDF was inspected again on **2026-10-30**; earlier audit dates are preserved.

## Optical Architecture

A negative front unit (positive L1/FG1 and negative L2/FG2) precedes the flare stop P, main stop SP, and positive rear unit. The rear unit contains the cemented L3/L4 pair followed by positive L5 and aspherical L6. The source names the flare stop as surface 5 and the main stop as surface 6. Model labels now follow source surfaces 1–4, 5P, STO, 7–11, 12A and 13.

The omitted **dimensioned flare stop is restored** as an air-only clipping plane, radius **8.13/2 = 4.065 mm**, 4.00 mm after S4 and 3.26 mm before the main stop. The old combined 7.26 mm air interval is preserved physically. This direct source restoration changes peripheral clipping; it does not change refractive power. The six glass paths remain the element layer's rendered contents.

All source R/d, six index/Abbe pairs, the main-stop location, S12 asphere and printed 35.68 mm infinity image gap remain literal. The source main-stop ED 8.78 mm implies radius 4.39 mm; the ordinary-prime canonical f/2.88 rule gives **4.367463094 mm**, 0.5134% smaller. The current stop rule is retained and that published-radius/model difference remains explicit. No authored stop radius or tolerance bypass is introduced.

| Element  | Source surfaces | Form                             | Printed standalone focal length (mm) | Source nd / νd | Qualified spectral proxy |
| -------- | --------------- | -------------------------------- | -----------------------------------: | -------------- | ------------------------ |
| L1 / FG1 | 1–2             | Positive meniscus                |                                40.28 | 1.91082 / 35.3 | TAFD35 (HOYA)            |
| L2 / FG2 | 3–4             | Negative meniscus                |                               −22.32 | 1.48749 / 70.2 | S-FSL5 (OHARA)           |
| L3 / RG1 | 7–8             | Positive meniscus, cemented      |                                19.87 | 1.69680 / 55.5 | N-LAK14 (SCHOTT)         |
| L4 / RG2 | 8–9             | Negative meniscus, cemented      |                               −13.72 | 1.80610 / 33.3 | NBFD15 (HOYA)            |
| L5 / RG3 | 10–11           | Biconvex positive, source APD    |                                24.62 | 1.59522 / 67.7 | S-FPM2 (OHARA)           |
| L6 / RG4 | 12A–13          | Positive meniscus, front asphere |                                42.54 | 1.58313 / 59.4 | S-BAL42 (OHARA)          |

The standalone element powers describe each member in air. Optical-role interpretations do not uniquely assign an in-situ focal length to a member of the bonded pair. No separate cement medium or hybrid resin layer is published.

## Glass Identification and Selection

The original explicitly defines d = 587.6 nm, g = 435.8 nm, F = 486.1 nm and C = 656.3 nm in ¶0030 (p. 6); ¶0062 (p. 10) defines all numerical ndi/νdi at d. All six literal pairs were checked directly and now record `indexReference: "d"`. The wavelength definitions are genuine source evidence; individual numerical C/F/g indices are not supplied. **No per-lens line-index override existed or was added/removed.**

The six compatible catalog curves are qualified spectral proxies. A coordinate match does not identify historical supplier, melt, chemical family, moldability or manufacturing process. The earlier inconsistent L1/L3/L4 analysis labels and L6 supplier/process speculation are replaced by the actual data labels and this qualification. All six material chemistries remain unidentified.

L5's anomalous partial dispersion is genuinely published: Table 1 p. 14 gives **θgF = 0.544**, nd = 1.59522 and νd = 67.7. Condition (5), p. 7, uses θgF − (−0.001682νd + 0.6438) > 0.01. The printed coordinates imply **0.0140714**, retained rounded as `dPgF: 0.0141`, consistent with Table 2 p. 15's 0.014. The three-decimal θgF and one-decimal νd constrain precision to roughly ±0.0006 in that derived deviation. The `apd: "patent"` tag and genuine partial-dispersion constraint remain; no chemistry or exact full spectrum follows from them.

Paragraph 0032 generally allows camera-side filters, cover glass or prisms and excludes them from D. Example 1 supplies no plate radius, index, thickness or physical gaps, so no specific rear plate can be reconstructed from that generic allowance.

## Clear Apertures, Outer Rims and Concave Ends

Fig. 1 p. 15 is a native **938 × 542 pixel JPEG at approximately 199–200 ppi**. The first-to-last vertex span is about 386–388 native pixels for the literal 29.14 mm span, approximately **0.075 mm/pixel**. Two-pixel contour uncertainty is about 0.15 mm; the drawing's physical outer outlines and printed effective apertures are distinct evidence. Enlarging the raster adds no native detail.

All printed effective diameters on pp. 10–11 were independently halved. Six formerly rounded SDs are restored to their literal halves: S1 8.065, S3 6.445, S4 5.055, S8 5.685, S9 6.835 and S10 7.615 mm. The remaining clear radii are S2 7.21, S7 4.65, S11 8.36, S12A 8.88 and S13 9.47 mm. These source numbers carry printed precision, not manufacturing tolerances.

The resolved square concave end of L2 has an outer half-height about **6.9 ± 0.2 mm**. **S4 `rimExtensionSd: 6.9` preserves its printed clear radius 5.055 mm** and adds the outer shoulder. No concave-end cut is required. Every concave end, the cemented interface and the aspherical face was inspected; no `rimCutDepthMm` or source exemption is present.

Rejected drawing fits are retained as constraints. An eight-free-face shoulder trial passes the geometry guard, but native Fig. 1 does not resolve cap-to-shoulder breaks on the other seven faces: those outlines mostly continue as curved physical margins beyond the printed effective diameters. Those extra lands were removed. A 7.3 mm common optical cap for S7/S8/S9 also passes geometry, but contradicts the source's 4.65/5.685/6.835 mm clear radii. That equal-height fit and any land at the bond were rejected. The actual SVG therefore retains unequal clear-cap silhouettes for the bonded pair and other unrepresented physical margins. Leaders, stop lines and group brackets were excluded from rim measurements.

## Aspherical Surface

Source S12 (model 12A) carries the original spherical-base polynomial with K = 0, A4 = −5.24174e−5, A6 = 5.25723e−8, A8 = −3.53661e−9, A10 = 3.36031e−11 and A12 = −1.48386e−13, in millimetres and reciprocal powers. The equation (¶0063–65, p. 10) and coefficients (¶0067, p. 11) were checked in fresh 200 dpi renders. No coefficient, radius or thickness was changed to fit the figure.

## Focus and Runtime Verification

Paragraph 0051 p. 9 specifies rigid unit focus toward the object. The source publishes infinity only. The inherited image-gap track **35.68 → 42.32 mm** remains an inferred finite model; it gives object-to-image conjugates **247.461747 mm** at halfway and **160.060837 mm** at closest focus, with magnifications −0.135201 and −0.270677. These computations support the approximate 0.16 m control label, without proving production STM travel or finite aberrations.

The current-state iris grid covers both authored focus endpoints and 19 interpolated positions: **21 states, 3,087 aimed rays**, 49 disk pupil samples at axial/60%/full generic-APS-C field. All 63 chiefs pass; zero unaimed launches. At infinity/halfway/closest focus the bundles are **49/34/22**, **45/34/25**, **45/35/27**. Of 1,029 axial samples, **965 pass**: four marginal samples clip source S7 at focus 0.25–1.0. The previous model has the same axial limit; the flare-stop restoration changes the off-axis bundles from 49/41/22, 45/41/27, 45/41/29. At **f/3.2**, all 1,029 sampled axial rays and all chiefs pass. The published clear cap is retained through this full-aperture finite limitation.

Actual generated element SVGs were compared with Fig. 1 at infinity, halfway and closest focus. All six paths are finite, closed and connected at all 21 states, with **zero hidden renderer trimming**. Canonical surface, source-station aperture and image-circle checks pass; the runtime generic-APS-C corner is clear at about 30.8°.

At the **published 29.14°** half-field, a clear chief reaches **13.298948 mm**, 93.82% of generic APS-C radius 14.175 mm. The source's nominal image height is 13.66 mm; the actual traced chief is about 2.65% below f·tan ω, consistent with the roughly −2.7 ± 0.2% distortion read from native Fig. 2 p. 16. This is a source-plot comparison, not a replacement for the printed field or image height. Runtime corner clearance extends beyond the printed source field.

First-order tracing gives **EFL 24.506198 mm**, versus printed 24.50, and BFL **35.686740 mm**, versus retained source image gap 35.68 (residual +0.006740 mm). The literal source spacings sum to **D 29.14 mm / track 64.82 mm**, while Table 1 p. 14 and the summary p. 11 give **29.15 / 64.83 mm**. The cause is unresolved: last-digit rounding is a hypothesis, not evidence of exact replacement spacings. `source.errata` records this contradiction, preserving every printed R/d and the focus controls.

## Sources and Scope

The fresh review used the selected local original **JP2015111192A.pdf**, without substituting a family publication. Source transcription, drawing-derived outer form, sampled runtime clearance and retail correlation are separate conclusions. The main-iris contract mismatch, unrepresented physical outer margins, inferred finite focus and finite full-aperture clipping remain explicit limitations; catalog curves do not establish production materials or performance.

## 2026-10-31 — Source-reference field clarification

Scoped annotation correction, reusing the completed 2026-10-30 whole source/shape/glass work and the earlier 2026-05-20/2026-06-25 glass/APD work. Direct reinspection of the selected original confirms **JP 2015-111192 A, Numerical Example 1**: ¶0030 p. 6 defines d/g/F/C as 587.6/435.8/486.1/656.3 nm, and ¶0062 p. 10 explicitly defines numerical ndi/νdi at d; the six pairs appear on pp. 10–11; Fig. 1 is on p. 15. Fresh 200 dpi page renders were used to read the definitions and selected prescription; the figure was checked for example/material mapping. This is not a new shape measurement or whole-prescription review.

All 6 existing `indexReferenceNote` strings were positive d-line citations, with no reference uncertainty. Per the data specification, that field is reserved for an unspecified source line; its presence had made the inspector label these confirmed coordinates `n (source)` / `ν (source)`. The citations are retained here and in the data header, while the repeated uncertainty-field annotations are removed. The existing `indexReference: "d"` remains on every medium, so the inspector can identify the confirmed `nd` / `νd` coordinates.

All source pairs, APD tags, genuine spectral fields and precision qualifications, compatible curve identities, four compiled color-channel indices, surfaces, rims and controls are unchanged. No new catalog curve, supplier/melt identification, geometry change or fresh shape-inspection claim is made. Prior source/runtime limitations and their actual review dates remain in force.

L5 retains the genuine source-derived `dPgF: 0.0141` and `apd: "patent"`; the existing rounding qualification for θgF = 0.544, νd = 67.7 and Table 2's 0.014 is unchanged.
