# Yongnuo YN 40mm f/2.8 N: qualified patent representative

## Patent Reference and Design Identification

**Patent:** CN 207216120 U  
**Application Number:** 201721346680.8  
**Filed:** 2017-10-16  
**Granted:** 2018-04-10  
**Inventor:** Yongxiao Zhuang (庄永肖; romanized here)  
**Applicant:** Shenzhen Yongnuo Photographic Equipment Co., Ltd. (深圳市永诺摄影器材股份有限公司)  
**Title:** Imaging Lens and Imaging Device (成像镜头及成像装置)  
**Example details:** Instance 2 (实例2), ¶0072 onward, Tables1/2 on physical PDF8, Fig2 on PDF10. Whole literal example, no scale conversion.

The primary patent states 40mm f/2.8 and six taking elements. The named product association comes from the secondary OpticalBench bibliography and a secondary review reproducing what it calls the official YN40 diagram. The ordered six-element/four-group structure agrees with Fig2, including two cemented pairs and a final double-asphere. This supports a qualified probable family, not exact factory glass, prescription or production embodiment selection. The secondary bibliography's Example01P numbering does not override the original Instance2. This association existed in an earlier bibliography and is not a new discovery.

## Optical Architecture

Two positive groups flank the iris. The source quotes group focal lengths104mm and47mm; the taking train is six elements in four groups. A source camera-side plane plate90 is represented separately through rearPlates and excluded from the taking-element count. Source optics and all axial distances are preserved. The literal matrix gives EFL40.2604108mm and image plane61.76mm from the first vertex. Paraxial best focus lies0.821424mm beyond that source plane, independently confirmed. The file does not move the image plane to hide this discrepancy.

## Element-by-Element Analysis

### L1: Positive biconvex front member, cemented to L2

nd = 1.80099, νd = 34.97. Glass: Unmatched (literal source d-line index/Abbe). Isolated-in-air thick-lens focal length = +33.052 mm, derived, not the in-system power of a cemented member.

The shape and position are literal; detailed aberration allocation is not established from the published prescription alone.

### L2: Negative biconcave rear member of front doublet

nd = 1.603423, νd = 38.01. Glass: Unmatched (literal source d-line index/Abbe). Isolated-in-air thick-lens focal length = -20.847 mm, derived, not the in-system power of a cemented member.

The shape and position are literal; detailed aberration allocation is not established from the published prescription alone.

### L3: Positive meniscus between front doublet and iris

nd = 1.883004, νd = 40.81. Glass: Unmatched (literal source d-line index/Abbe). Isolated-in-air thick-lens focal length = +37.699 mm, derived, not the in-system power of a cemented member.

The shape and position are literal; detailed aberration allocation is not established from the published prescription alone.

### L4: Negative biconcave front member of rear doublet

nd = 1.755, νd = 27.53. Glass: Unmatched (literal source d-line index/Abbe). Isolated-in-air thick-lens focal length = -12.960 mm, derived, not the in-system power of a cemented member.

The shape and position are literal; detailed aberration allocation is not established from the published prescription alone.

### L5: Positive biconvex rear member of rear doublet

nd = 1.835, νd = 42.74. Glass: Unmatched (literal source d-line index/Abbe). Isolated-in-air thick-lens focal length = +18.641 mm, derived, not the in-system power of a cemented member.

The shape and position are literal; detailed aberration allocation is not established from the published prescription alone.

### L6: Positive meniscus with two aspheric faces

nd = 1.829, νd = 37.1. Glass: Unmatched (literal source d-line index/Abbe). Isolated-in-air thick-lens focal length = +31.239 mm, derived, not the in-system power of a cemented member.

The shape and position are literal; detailed aberration allocation is not established from the published prescription alone.

## Glass Identification and Selection

The source explicitly gives the d-line reference587.6nm (¶0078). All six nd/νd pairs and plate1.5168/64.2 are copied literally. No catalog melt, supplier or partial-dispersion identity is established. The runtime's Abbe-based dispersion model is not evidence of exact chromatic factory behavior. The plate is2mm thick followed by1mm air; the last taking surface's35.75mm gap is before the plate, not total back focus.

## Focus Mechanism

Only the static source infinity configuration is authored. The supported large-distance sentinel does not represent a reconstructed near-focus mechanism. The source-plane defocus remains a material limitation even at infinity; no finite focus or best-focus MTF claim is made.

## Aspherical Surfaces

Both faces of L6 are aspherical. Literal standard conic constants and even coefficients (mm units):

| Surface | K | A4 | A6 | A8 | A10 |
| --- | --- | --- | --- | --- | --- |
| S10 | -21.3807 | -2.231688e-5 | 1.1154082e-7 | -1.6802243e-9 | 1.1278013e-11 |
| S11 | 0.70151 | 1.530636e-5 | 1.8595495e-7 | -1.8656923e-9 | 1.3794272e-11 |

The prose reverses the radial/sag variable names relative to its displayed equation; this is documented, not treated as permission to change the coefficients or conic convention. Manufacturing method is not independently established. No spherical replacement or coefficient refit is used.

## Apertures and Source Geometry

Independent Fig2 measurement uses11 internal axial landmarks, scale15.23863px/mm with maximum fit residual0.765px; rear propagation is visibly compressed and excluded from scale calibration. Clear semi-diameters are schematic estimates with approximately±0.3mm observational uncertainty, not factory tolerances. S3 has a7.45mm curved face and8.83mm outer straight land; S7 has6.60mm face and7.87mm land. Opaque lands are an explicit modeling assumption, not a published opacity specification. No ray fitting was used to choose these endpoints.

The f-stop UI sequence through f/16 is an authored control range, not a source-verified retail minimum-aperture specification. The F2.8-derived physical iris6.37510mm agrees with independently measured drawing6.3654±0.3mm. The drawing is not a published dimensional stop schedule. Rear plate clear diameter is unspecified: the rearPlates schema's nonclipping default is retained, not a claim of a measured full-frame plate aperture. Native construction uses default gapSag90%, with no override.

## Validation Scope and Qualifications

Bounded native construction passes; EFL40.2604108mm and source plane61.76mm match the independent matrix. Sparse nominal and actual chief-bracketed36×24mm full-frame tests cover five field fractions0,.5,.7,.85,1, each25pupil samples plus chief. All five chiefs reach the source image plane; counts including chief are26/26,26/26,23/26,18/26,14/26. These are sparse ray counts, not area-weighted illumination, dense field coverage or image-quality acceptance. The0.821424mm source-plane defocus and peripheral clipping are unrepaired and prominent limitations.

The three earlier isolated strict TypeScript attempts terminated137 without diagnostics; their cause remains unestablished. After workspace recovery, the unchanged model body passed isolated strict TypeScript against main4caca439fdd7186caf6cf458b1c56e6e114b752b (TypeScript5.9.3, ES2022, no ambient package types). Fresh native import/construction also passed with unchanged optical results. These scoped checks are not full-corpus compatibility or application validation. Full current-main compatibility, browser/compiled-viewer QA, dense MTF and full application validation are explicitly deferred to integration, not claimed passed. Hidden visibility is retained. This qualified representative is not a publication or deployment approval.

## Sources

- [Original CN207216120U PDF](https://patentimages.storage.googleapis.com/8f/80/cc/231dd010a52b21/CN207216120U.pdf), SHA2566190475e5438b616754b7245e0f530eb8d5908815a8c8986102b5aa1588a2e29.
- [Patent record](https://patents.google.com/patent/CN207216120U/zh).
- [OpticalBench bibliography](https://photonstophotos.net/GeneralTopics/Lenses/OpticalBench/OpticalBenchHub.htm), secondary association.
- [Named retail review](https://www.smzdm.com/zy/detail/avdjz3g/) and [reproduced section](https://am.zdmimg.com/201709/10/59b5157a57c1d3786.jpg_e600.jpg), secondary and not verified maker-hosted.
- [Corrected source, independent literal review and1233-body dedup checkpoint](https://drive.google.com/file/d/1WCbrvlsOSvb-RPYeQJhytMpfIf5V02EX/view).
