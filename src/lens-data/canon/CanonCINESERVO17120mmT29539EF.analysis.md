# CANON CINE-SERVO 17-120mm T2.95-3.9 (CN7×17 KAS S/E1)

## Patent Reference and Design Identification

**Patent:** JP 2015-94867 A\
**Application Number:** JP2013-234392\
**Filed:** 12 November 2013\
**Published:** 18 May 2015\
**Inventors:** Tsuyoshi Wakazono; Tomoyuki Nakamura; Kazuya Shimomura; Yu Inomoto\
**Applicant:** Canon Inc.\
**Title:** Zoom lens and image pickup apparatus\
**Embodiment analyzed:** Numerical Example 1 / Embodiment 1

The LensVisualizer prescription transcribes Numerical Example 1 of JP 2015-94867 A without dimensional scaling. The patent describes a large-imager professional zoom formed, from object to image, by a fixed positive first unit U1, moving negative units U2 and U3, an aperture stop, and a fixed positive relay/imaging unit Ur. U1 is itself divided into negative U11, positive internal-focus U12, and positive U13. The numerical example contains 27 physical glass elements in 22 air-separated glass groups, with aspherical surfaces on the first and fourth physical elements. The implemented design EFL is 17.020590 mm, 51.027433 mm, and 118.942934 mm at the three published infinity-focus stations; these are computed from the final model, not substituted marketing focal lengths. The corresponding computed BFD from the surface-50 vertex is 46.004764 mm, 45.993897 mm, and 46.011032 mm.

The selected production correlation is the Canon CN7×17 KAS S/E1, marketed as the CINE-SERVO 17-120mm T2.95-3.9 in EF mount. The correlation is convergent rather than manufacturer-confirmed:

1. Numerical Example 1 covers 17.00-119.00 mm at 7.00×, while Canon specifies the production lens as 17-120 mm at 7×.
2. The patent publishes an image height of 14.80 mm, implying a 29.60 mm diameter; Canon specifies a 29.6 mm image circle for EOS C500 coverage. Separately, patent Table 1 prints `IS = 28.20 mm`, numerically matching Canon's 28.2 mm EOS C300 image circle. The patent nevertheless defines `IS` as twice image height, so the 28.20/29.60 mm conflict remains a source inconsistency rather than evidence that one value should replace the other.
3. The application was filed in November 2013, before Canon's August 2014 marketing date for the CN7×17.
4. The patent's stated application is a large-imager professional television/cinema zoom with internal focusing and servo-capable camera integration, consistent with the production lens's use case.

Canon does not state in the cited manufacturer material that JP 2015-94867 A, Example 1 is the production prescription. The model therefore keeps the relationship explicitly inferential. It likewise keeps photometric and geometric aperture quantities separate: Canon's marketed T2.95 from 17-91 mm and T3.9 at 120 mm are production T-numbers, whereas the optical prescription uses the patent's F-number stations F2.8, F2.8, and F3.4.

The production metadata represented by the model is the EF variant and Canon's 29.6 mm circular coverage. No `imageFormat` taxonomy identifier is assigned because the available 22 × 16 mm `35mm-cinema` entry does not represent Canon's published 26.2 × 13.8 mm / 29.6 mm C500 coverage.

Primary patent locations: JP 2015-94867 A, ¶¶0048-0052 and Fig. 1 for Embodiment 1; pp. 12-13 for Numerical Example 1; Table 1 on p. 19 for the conditional values.

## Optical Architecture

The functional power sequence is positive-negative-negative-positive around the aperture stop: U1 is fixed and positive, U2 is a moving negative variator, U3 is a moving negative compensator, and Ur is a fixed positive relay. The computed first-order focal lengths of these units are +55.127139 mm for U1, −32.232401 mm for U2, −79.649472 mm for U3, and +52.966223 mm for Ur. Within U1, U11 is −45.055216 mm, the single-element focusing unit U12 is +118.630287 mm, and U13 is +73.400950 mm.

This architecture separates three functions that the patent treats explicitly. U11 sets the negative front-subgroup power used to manage entrance-pupil placement and front-unit diameter; the patent warns that excessive U11 power increases zoom variation of distortion and astigmatism (JP 2015-94867 A, ¶¶0025-0028). U12 supplies internal focus without moving the complete front unit. U2 provides most of the variator action, while U3 compensates image-plane motion during zooming (¶0049). Ur remains fixed and re-images the moving-unit output onto the image plane; its computed imaging magnification for the patent's relay conjugate is βr = −1.469484, consistent with Table 1's −1.47.

At the published infinity stations, the model preserves the patent spacings exactly. U2 begins at 104.38 mm, 144.88 mm, and 162.18 mm from the first-surface vertex, so its sampled motion is monotonically imageward. U3 begins at 176.19 mm, 173.70 mm, and 189.56 mm. Those numerical stations therefore show a 2.49 mm objectward excursion from wide to the middle station followed by a 15.86 mm imageward movement to tele. This sampled reversal is retained even though ¶0049 describes U3 more simply as moving imageward nonlinearly. The stop remains essentially fixed at 194.77, 194.76, and 194.76 mm; the 0.01 mm difference is at the precision of the published spacing table.

The total surface-1-to-image track is approximately 325.04 mm at wide and 325.03 mm at the middle and tele stations. The design therefore is not described here as a globally telephoto-form zoom under the project's `TL/EFL < 1` criterion. The wide station alone has BFD greater than EFL; no broader retrofocus label is applied to the entire zoom.

### Aperture and Authored Clear Apertures

The patent's surface-30 effective diameter of 34.40 mm is not treated as a published physical iris schedule. If held fixed as the physical stop, it gives approximately F2.735 at all three stations rather than the source's F2.8, F2.8, and F3.4. The LensVisualizer model therefore uses `zoomApertureModel: "from-nominal-fno"`: the physical stop is calibrated from the published F-number at each station, giving inferred stop radii of 16.802485 mm, 16.801459 mm, and 13.837828 mm. Agreement with the F-number targets is a consequence of that calibration and is not independent evidence for those diaphragm radii.

The patent's effective-diameter column is likewise not assumed to be a set of mechanical semi-diameters. Most source effective radii can be used directly, but the model uses 14.38 mm at surfaces 20/21, 10.87 mm at surface 38, and 13.95 mm at surfaces 48/49 so that the authored geometry satisfies the current shared-gap and sampled exact-containment rules. The stop uses the inferred wide-state radius rather than half of the source effective-diameter entry. These values are modeling choices, not corrections to the patent table.

## Element-by-Element Analysis

The focal lengths in this section are standalone thick-element values calculated from each element's two bounding refracting surfaces in air. They are not interchangeable with the in-situ focal length of a cemented pair or functional lens unit. Where two elements are cemented, the cemented-net focal length is stated separately.

### L1 — Negative Meniscus with Front Asphere

nd = 1.77250, νd = 49.6. Glass: 773496 class (supplier-neutral coordinate match). f = −68.476 mm standalone.

L1 is the first of the two negative elements in U11. Its front surface `1A` is one of the prescription's two aspheres. In first-order terms, L1 contributes substantial negative power at the entrance of the fixed first unit; its function should be read together with L2 and L3 because the patent's design condition is written for U11 as a subgroup, not for an isolated element. The patent attributes the front-unit power balance to entrance-pupil placement and diameter control, while the asphere is part of the patent's stated correction of zoom-dependent distortion/astigmatism and focus-dependent aberration variation (¶¶0025-0028, 0051).

### L2 — Biconcave Negative

nd = 1.77250, νd = 49.6. Glass: 773496 class (supplier-neutral coordinate match). f = −79.476 mm standalone.

L2 continues the negative front power with the same patent `nd/νd` coordinate as L1. The model does not assign an independent aberration-correction claim to L2; the source discusses U11 primarily as a power-distribution problem. Together, L1 and L2 provide the two negative members required by the U11 construction described in ¶0050.

### L3 — Biconvex Positive

nd = 1.95906, νd = 17.5. Glass: 959175 class (supplier-neutral coordinate match). f = +143.748 mm standalone.

L3 is the positive member of U11. Its high index and low Abbe number are part of the subgroup's strong dispersion contrast: the two negative elements use νd = 49.6 while L3 uses νd = 17.5 in the rounded prescription. The patent formalizes that relationship through condition (5), which constrains the average Abbe number of U11's negative lenses relative to its positive lens. The complete U11 subgroup computes to −45.055216 mm, close to Table 1's −45.00 mm.

### L4 — Biconvex Positive Internal-Focus Element with Rear Asphere

nd = 1.60311, νd = 60.6. Glass: 603607 class (supplier-neutral coordinate match). f = +118.630 mm standalone.

L4 alone forms U12, the positive internal focusing subgroup at surfaces 7-8. The patent states that U12 moves toward the image side for nearer subjects (¶0049). Surface `8A`, on the image side of L4, is the second asphere. Because the patent specifically associates the two aspheres with both zoom-dependent correction and focusing-aberration variation, the aspheric rear face of the moving focus element has a source-supported connection to focus-state correction. The numerical example, however, publishes no close-focus position for L4, so the implemented prescription does not invent one.

### D1 — L5 + L6 Cemented Pair

- **L5:** nd = 1.49700, νd = 81.5. Glass: 497816 class. f = +174.148 mm standalone. Shape: biconvex positive.
- **L6:** nd = 1.84666, νd = 23.8. Glass: 847238 class. f = −454.864 mm standalone. Shape: negative meniscus.

L5 and L6 form the first cemented pair in U13. Their cemented-net focal length is +282.850 mm, so the pair is weakly positive even though its second component is negative. The large Abbe-number separation is consistent with the chromatic-balancing strategy that the patent expresses for U13 through condition (4). That statement does not establish a particular commercial glass supplier or an apochromatic performance level.

### D2 — L7 + L8 Cemented Pair

- **L7:** nd = 1.84666, νd = 23.8. Glass: 847238 class. f = −113.584 mm standalone. Shape: negative meniscus.
- **L8:** nd = 1.43875, νd = 94.9. Glass: 439950 class. f = +142.431 mm standalone. Shape: positive meniscus.

D2 reverses the sign order used in D1 and has a cemented-net focal length of −524.150 mm. It is therefore weakly negative as a cemented unit despite the strong positive standalone power of L8. The pair contributes to U13's mixed-sign, strongly separated-dispersion construction. The patent treats the average positive/negative Abbe-number relationship in U13 as the relevant chromatic design variable rather than assigning a unique correction role to this individual cemented interface.

### L9 — Biconvex Positive, CaF2-Class Coordinate

nd = 1.43387, νd = 95.1. Glass: CaF2 class (supplier-neutral coordinate match). f = +310.200 mm standalone.

L9 is a weak positive element in U13 with the highest Abbe number in the prescription. Its `nd/νd` coordinate is compatible with calcium-fluoride material data, and the model labels it only as a CaF2 class because the patent does not name a supplier or melt. The shared catalog supplies a calcium-fluoride spectral proxy. The diagram uses an inferred-APD tag for this spectral proxy; it does not establish the production material or an APO designation.

### L10 — Biconvex Positive

nd = 1.77250, νd = 49.6. Glass: 773496 class (supplier-neutral coordinate match). f = +104.135 mm standalone.

L10 closes U13 and supplies the strongest positive standalone power among its four positive members after the two cemented pairs and L9. The complete U13 subgroup computes to +73.400950 mm. In conjunction with U11 and U12, it leaves the complete fixed first unit U1 positive at +55.127139 mm.

### L11 — Negative Meniscus, U2 Front Element

nd = 2.00100, νd = 29.1. Glass: 001291 class (supplier-neutral coordinate match). f = −42.088 mm standalone.

L11 begins U2 and has the highest refractive index in that moving unit. It supplies strong negative power at the front of the variator. The patent identifies U2 as the negative group that moves monotonically imageward from wide to tele; the numerical prescription supports that kinematic description at all three published stations.

### L12 — Biconcave Negative

nd = 1.72916, νd = 54.7. Glass: 729547 class (supplier-neutral coordinate match). f = −47.454 mm standalone.

L12 provides a second strong negative contribution inside U2. Its Abbe number is higher than L11's, but the patent does not assign a specific chromatic or aberration-correction function to that difference. The source discusses U2 primarily as the variator in the zoom mechanism.

### L13 — Biconvex Positive

nd = 1.78472, νd = 25.7. Glass: 785257 class (supplier-neutral coordinate match). f = +31.072 mm standalone.

L13 is the strongest positive standalone element in U2. Its positive power is embedded between negative members rather than making U2 positive overall. This sign alternation allows the four-element unit to retain a computed net focal length of −32.232401 mm while distributing surface power across several curvatures and glass coordinates.

### L14 — Negative Meniscus, U2 Rear Element

nd = 1.83481, νd = 42.7. Glass: 835427 class (supplier-neutral coordinate match). f = −50.609 mm standalone.

L14 restores negative power at the rear of U2. The complete unit remains the strongest moving negative group in first-order power, with a computed focal length of −32.232401 mm. Its axial movement, rather than any modeled element deformation, produces the principal variator action.

### D3 — L15 + L16 Cemented U3 Pair

- **L15:** nd = 1.72916, νd = 54.7. Glass: 729547 class. f = −52.342 mm standalone. Shape: biconcave negative.
- **L16:** nd = 1.92286, νd = 18.9. Glass: 923189 class. f = +155.141 mm standalone. Shape: biconvex positive.

The two elements of U3 are cemented, and their net focal length is −79.649472 mm. Here the cemented-net power is essentially the complete functional-group power because U3 consists only of D3. The patent identifies U3 as the compensator for zoom-induced image-plane motion. The sampled numerical movement is not strictly monotonic, so the data table takes precedence over a simplified directional reading of ¶0049.

### L17 — Biconvex Positive, Relay Entrance

nd = 1.60311, νd = 60.6. Glass: 603607 class (supplier-neutral coordinate match). f = +72.975 mm standalone.

L17 is the first refracting element after the stop and begins the fixed relay Ur. Its positive power establishes the front of a relay that remains stationary throughout zooming. The complete relay is +52.966223 mm and is evaluated separately from any single element's standalone power.

### D4 — L18 + L19 Cemented Pair

- **L18:** nd = 1.48749, νd = 70.2. Glass: 487702 class. f = +58.259 mm standalone. Shape: biconvex positive.
- **L19:** nd = 2.00069, νd = 25.5. Glass: 001255 class. f = −54.179 mm standalone. Shape: negative meniscus.

D4 contains individually strong positive and negative elements whose cemented-net focal length is −1507.894 mm. The near cancellation means that interpreting either standalone focal length as the pair's in-situ power would be misleading. The 001255 coordinate now names the J-LASFH17 supplier-neutral proxy; the shared catalog supplies its compatible spectral curve.

### L20 — Positive Meniscus

nd = 1.58913, νd = 61.1. Glass: 589612 class (supplier-neutral coordinate match). f = +68.908 mm standalone.

L20 adds positive relay power after D4. Its role in the model is established by its position and first-order power; the patent does not isolate a particular aberration contribution for this element.

### D5 — L21 + L22 Cemented Pair

- **L21:** nd = 1.88300, νd = 40.8. Glass: 883408 class. f = −29.898 mm standalone. Shape: biconcave negative.
- **L22:** nd = 1.92286, νd = 18.9. Glass: 923189 class. f = +23.694 mm standalone. Shape: biconvex positive.

D5 combines the strongest negative and strongest positive standalone powers in the rear relay. The cemented pair is nevertheless positive overall at +105.232 mm. The modeled semi-diameter at its entry surface is reduced to 10.87 mm so that sampled clipping, when present, occurs at an air-facing boundary rather than inside the cemented pair; this is a LensVisualizer geometry choice, not a published clear-aperture value.

### L23 — Biconcave Negative

nd = 2.00069, νd = 25.5. Glass: 001255 class (supplier-neutral coordinate match). f = −17.790 mm standalone.

L23 is the strongest negative standalone element in the entire prescription. It is followed by a sequence of positive relay elements, so its large local power should not be confused with the net power of Ur. The source does not assign L23 a separate aberration function.

### L24 — Biconvex Positive

nd = 1.48749, νd = 70.2. Glass: 487702 class (supplier-neutral coordinate match). f = +54.716 mm standalone.

L24 begins a repeated use of the same high-Abbe, moderate-index coordinate in the rear relay. The recurrence of this coordinate at L18, L24, L25, and L26 is a prescription fact; it does not establish a supplier identity.

### L25 — Biconvex Positive

nd = 1.48749, νd = 70.2. Glass: 487702 class (supplier-neutral coordinate match). f = +45.450 mm standalone.

L25 is somewhat stronger than L24 while using the same optical coordinate. Its contribution remains part of the fixed relay's distributed positive power rather than a separate moving function.

### L26 — Positive Meniscus

nd = 1.48749, νd = 70.2. Glass: 487702 class (supplier-neutral coordinate match). f = +156.569 mm standalone.

L26 is a weaker positive element than L24 and L25 and continues the same 487702 coordinate family. Its meniscus form precedes the final negative element and contributes to the relay's rear power distribution.

### L27 — Negative Meniscus, Final Element

nd = 1.84666, νd = 23.8. Glass: 847238 class (supplier-neutral coordinate match). f = −95.790 mm standalone.

L27 is the final glass element before the published 46.02 mm image-space distance. It closes the fixed relay with negative standalone power while the complete Ur remains positive. BFD values quoted for the design are measured from the surface-50 vertex, not from the rear principal plane or from a mechanical mount datum.

## Glass Identification and Selection

The patent supplies `nd` and `νd` rather than vendor glass names. The model uses named supplier-neutral spectral proxies for the source coordinate classes. The catalog names below are coordinate anchors used to audit those classes; they are not claims that Canon purchased those specific glasses. Spectral curves resolve through the shared catalog; copied catalog C/F/g values have been removed so they cannot masquerade as measured patent indices or bypass coordinate validation. No element carries `dPgF`.

| Model class | nd | νd | Elements | Coordinate-compatible catalog anchor |
|---|---:|---:|---|---|
| 773496 class | 1.77250 | 49.6 | L1, L2, L10 | OHARA S-LAH66 |
| 959175 class | 1.95906 | 17.5 | L3 | OHARA S-NPH3 |
| 603607 class | 1.60311 | 60.6 | L4, L17 | OHARA S-BSM14 |
| 497816 class | 1.49700 | 81.5 | L5 | OHARA S-FPL51 |
| 847238 class | 1.84666 | 23.8 | L6, L7, L27 | OHARA S-TIH53 |
| 439950 class | 1.43875 | 94.9 | L8 | OHARA S-FPL53 |
| CaF2 class | 1.43387 | 95.1 | L9 | calcium fluoride material coordinate |
| 001291 class | 2.00100 | 29.1 | L11 | OHARA S-LAH99 |
| 729547 class | 1.72916 | 54.7 | L12, L15 | OHARA S-LAL18 |
| 785257 class | 1.78472 | 25.7 | L13 | OHARA S-TIH11 |
| 835427 class | 1.83481 | 42.7 | L14 | OHARA S-LAH55V |
| 923189 class | 1.92286 | 18.9 | L16, L22 | OHARA S-NPH2 |
| 487702 class | 1.48749 | 70.2 | L18, L24, L25, L26 | OHARA S-FSL5 |
| 001255 class | 2.00069 | 25.5 | L19, L23 | HIKARI J-LASFH17 |
| 589612 class | 1.58913 | 61.1 | L20 | OHARA S-BAL35 |
| 883408 class | 1.88300 | 40.8 | L21 | OHARA S-LAH58 |

The strongest source-backed chromatic statement concerns U11 and U13 rather than individual commercial glass names. For U11, the patent constrains the ratio of average Abbe numbers of the negative and positive lenses; for U13, it constrains the reciprocal sign-family relationship. The prescription satisfies both conditions. This supports a deliberate dispersion split inside the fixed front unit, but `nd/νd` and catalog spectral proxies alone are not sufficient to characterize the complete lens as apochromatic or to confirm anomalous partial dispersion in a production element.

## Focus Mechanism

The focus model is `NO_INTERNAL_RECONSTRUCTION`. JP 2015-94867 A states that positive U12, surfaces 7-8, moves imageward to focus on nearer objects (¶0049). The numerical example publishes only infinity-focus prescriptions at 17, 51, and 119 mm; it does not give close-focus values for the air spaces on either side of U12.

Canon specifies a production minimum object distance of 0.85 m measured from the image sensor. That external observable does not uniquely determine U12's internal translation as a function of zoom. A pure translation of U12 at a fixed zoom position would increase the air space before it and reduce the air space after it by the same amount, but the magnitude of that movement is unknown. Accordingly, `closeFocusM: 0.85` is retained as product metadata only. The three authored variable gaps D18, D26, and D29 are zoom-only and use identical infinity/close entries; there is no synthetic finite-conjugate prescription.

This limitation means the model can describe the published infinity zoom architecture and the identity of the focusing group, but it does not support quantitative claims about close-focus internal travel, focus breathing, close-focus aberrations, or reproduction ratio from an internally reconstructed state.

## Aspherical Surfaces

The patent uses aspheres on source surfaces 1 and 8, corresponding to LensVisualizer surfaces `1A` and `8A`. The patent equation uses a conic term of the form

`1 + sqrt(1 - k*y^2/r^2)`.

LensVisualizer uses the standard form

`1 + sqrt(1 - (1+K)*(h/R)^2)`.

Therefore the stored conic conversion is `K = k - 1`. This is a convention mapping, not a correction to the source. No dimensional scaling is applied, so the published A-coefficients are retained unchanged.

### Surface 1A — Front Surface of L1

Patent `k = 3.77301`; LensVisualizer `K = 2.77301`.

- A4 = 3.05128 × 10⁻⁷ mm⁻³
- A6 = 1.87256 × 10⁻¹⁰ mm⁻⁵
- A8 = −1.41108 × 10⁻¹³ mm⁻⁷
- A10 = 4.60119 × 10⁻¹⁷ mm⁻⁹
- A12 = −6.36153 × 10⁻²¹ mm⁻¹¹

At the authored semi-diameter h = 44.135 mm, the verified aspheric sag departs from the same-radius spherical base by +1.570598 mm. The calculated rim-slope angle there is 18.204°. The patent states that its aspheres are used primarily to control zoom variation of distortion and astigmatism and aberration variation during focusing (¶0051); no more specific surface-by-surface allocation is claimed here.

### Surface 8A — Rear Surface of L4 / U12

Patent `k = −3.64841`; LensVisualizer `K = −4.64841`.

- A4 = 3.34659 × 10⁻⁷ mm⁻³
- A6 = 7.99224 × 10⁻¹¹ mm⁻⁵
- A8 = −5.42827 × 10⁻¹⁴ mm⁻⁷
- A10 = 1.99335 × 10⁻¹⁷ mm⁻⁹
- A12 = −5.62220 × 10⁻²¹ mm⁻¹¹

At h = 37.620 mm, the verified departure from the same-radius spherical base is +1.355220 mm and the calculated rim-slope angle is 10.910°. Because this surface lies on the moving U12 focus element, the patent's general statement about controlling focus-induced aberration variation applies directly to the aspheric focusing member, but the source does not decompose that correction into individual Seidel or higher-order terms.

## Chromatic Correction Strategy

The front fixed unit contains the prescription's largest Abbe-number contrasts. U11 combines two negative elements at νd = 49.6 with a positive element at νd = 17.5. U13 combines negative components at νd = 23.8 with positive members spanning νd = 49.6, 81.5, 94.9, and 95.1. JP 2015-94867 A explicitly treats these average-dispersion relationships as conditions for balancing monochromatic correction with chromatic correction (¶¶0035-0043).

The executed model gives `ν13pa/ν13na = 3.37290` from the rounded prescription, inside the patent's 2.0-5.8 range and close to Table 1's 3.38. It gives `ν11na/ν11pa = 2.83429`, inside the 2.0-3.6 range and close to Table 1's 2.84. The small differences are consistent with the surface table printing `νd` to one decimal place while Table 1 evidently uses less-rounded glass data.

The shared catalog curves allow more useful spectral replay than an Abbe-only model for these coordinate classes, but their evidentiary scope remains limited: they reproduce catalog classes that match the patent coordinates. They do not establish Canon's exact melts, and inferred-APD tags describe only the adopted spectral proxies. L5, L8 and L9 use S-FPL51, S-FPL53 and CaF2 curves with engine-baseline ΔPgF approximately +0.0308, +0.0502 and +0.0548, respectively. No copied catalog line indices or `dPgF` override the shared resolver.

## Conditional Expressions

Numerical Example 1 satisfies the patent's principal conditions when recomputed from the prescription and independently traced first-order model.

| Condition | Computed | Table 1 | Patent range |
|---|---:|---:|---:|
| (1) `f1/fw` | 3.23885 | 3.24 | 2.6-4.5 |
| (2) `|f11/f1|` | 0.81730 | 0.82 | 0.6-0.9 |
| (3) `|βr|` | 1.46948 | 1.47 | 0.0-1.5 |
| (4) `ν13pa/ν13na` | 3.37290 | 3.38 | 2.0-5.8 |
| (5) `ν11na/ν11pa` | 2.83429 | 2.84 | 2.0-3.6 |
| (6) `fw/IS`, using Table-1 `IS = 28.20 mm` | 0.60357 | 0.60 | 0.4-1.2 |
| (6), using the patent definition `IS = 2 × 14.80 mm` | 0.57502 | — | 0.4-1.2 |

Table 1 also contains a separate labeling inconsistency: it prints the `ν13pa/ν13na = 3.38` row as condition (5) and the `ν11na/ν11pa = 2.84` row as condition (4), opposite the equation numbering defined in ¶0035 and ¶0040 and in claims 1-2. The table above follows the patent-defined semantic numbering while preserving the printed Table-1 swap as a source discrepancy; the numerical values themselves are not altered.

Condition (6) exposes rather than resolves the patent's internal image-size inconsistency. The text defines `IS` as twice image height, while Numerical Example 1 gives image height 14.80 mm and Table 1 prints 28.20 mm. Both values satisfy the claimed inequality, so neither branch requires a prescription correction.

## Verification Summary

The final prescription was recomputed from the actual authored data values. Sequential height/reduced-angle tracing and an independently composed ABCD matrix agree to better than 1 × 10⁻¹² in the three published states. The calculated EFL/BFD pairs are 17.020590/46.004764 mm at wide, 51.027433/45.993897 mm at the middle station, and 118.942934/46.011032 mm at tele. These reproduce the rounded source values within the source-precision tolerances established for the patent table.

Surface-by-surface Petzval calculation using `φ/(n·n′)` gives +0.002889883 mm⁻¹, equivalent to a signed Petzval radius of approximately +346.035 mm under the recorded convention. This is a first-order curvature sum; it is not a measured field-curvature map and should not be substituted for exact off-axis image-surface tracing.

The authored geometry has positive element edge thickness at every element; the minimum verified edge thickness is 1.590268 mm for L22 between surfaces 39 and 40. The largest authored rim slope is 54.426427° at surface 2. Shared-gap checks cover 110 gap/state samples at five zoom positions, and the nonlinear meridional containment trace reports no internal-cement clipping and no tracing errors in its published and intermediate-state samples. Some sampled rays are physically vignetted at air-facing boundaries; that is treated as clipping, not hidden by enlarging the clear apertures. These checks are portable model verification, not LensVisualizer's unavailable production renderer.

No sensor cover glass, rear filter plate, dummy optical plane, or dimensional scale transformation is present in Numerical Example 1. The published 46.02 mm rear distance after surface 50 is therefore retained as image-space air rather than converted through an omitted plate.

## Sources and References

1. Japan Patent Office, **JP 2015-94867 A**, *Zoom lens and image pickup apparatus*, published 18 May 2015. Numerical Example 1: pp. 12-13; Embodiment 1 architecture: ¶¶0048-0052 and Fig. 1; asphere equation: ¶0075; conditional values: Table 1, p. 19. The supplied JP publication is the transcription authority.
2. Canon Inc., **Canon Camera Museum — CN7×17 KAS S/E1 / CN7×17 KAS S/P1**: https://global.canon/en/c-museum/product/cesl449.html — production focal range, T-number, mount variants, image-circle coverage, MOD, iris-blade count, weight, and August 2014 marketing date.
3. Canon Inc., **CN7x17 / CN10x25 Operation Manual**: https://global.canon/ja/c-museum/wp-content/uploads/2021/07/cesl491_en.pdf — production-system/mechanical context.
4. US family reference, **US 9,310,592 B2**, *Zoom lens and image pickup apparatus including the same*: https://patents.google.com/patent/US9310592B2/en — family cross-check; not used to replace the selected JP numerical source.
5. US family inventor normalization: https://patents.justia.com/patent/9310592 — Latin-script forms cross-checked against inventor order on the JP publication's final page.
6. OHARA Inc., optical-glass catalog: https://www.ohara-inc.co.jp/en/product/01000/ — coordinate-class audit for the applicable six-digit classes.
7. HOYA Corporation, Optics Division data downloads: https://www.hoya-opticalworld.com/english/datadownload/index.html — coordinate-class audit including 001255 / TAFD40-W.
8. SCHOTT Advanced Optics, optical-glass catalog: https://www.us.schott.com/shop/advanced-optics/en/Optical-Glass/ — cross-vendor coordinate audit.
9. HIKARI GLASS CO., LTD., optical-glass catalog: https://www.hikari-g.co.jp/optical_glass/catalog/ — cross-vendor coordinate audit.
10. SUMITA OPTICAL GLASS, Inc., optical-glass data: https://sumita-opt.co.jp/en/download/ — cross-vendor coordinate audit.
11. CDGM optical-glass catalog: https://cdgmglass.com/ — cross-vendor coordinate audit.
12. Corning Incorporated, **OptiGrade Calcium Fluoride Data Sheet**: https://www.corning.com/content/dam/corning/media/worldwide/csm/documents/Corning_AdvancedOptics_OpticalGradeCaF2_DataSheet.pdf — CaF2 coordinate-class comparison.

## Image-format reference

`imageFormat: "super-35-1.9"` uses the 26.2 × 13.8 mm EOS C500 frame in [Canon’s CN7×17 operating manual](https://downloads.canon.com/nw/camera/products/cine-lenses/cine-servo/pdfs/b-im-20237-4-web.pdf). The explicit 29.6 mm production image circle remains. The larger 24.9 × 18.7 mm silent-film aperture is not substituted; the patent/product correlation remains inferential.
