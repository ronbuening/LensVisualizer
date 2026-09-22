## Patent Reference and Design Identification

**Patent:** WO 2024/057734 A1
**Application Number:** PCT/JP2023/027399
**Priority:** 2022-09-13
**Filed:** 2023-07-26
**Published:** 2024-03-21
**Inventors:** Masaru Amano; Taiga Noda; Yasutaka Shimada; Yuya Hirakawa
**Applicant:** FUJIFILM Corporation
**Title:** Zoom lens and imaging device
**Embodiment analyzed:** Example 17

The prescription modeled here is Example 17 of WO 2024/057734 A1. The example is described in the patent at ¶¶0292–0297 and tabulated in Tables 49–51 on printed pages 98–99. Table 49 supplies the radii, axial spacings, d-line indices, Abbe numbers, partial-dispersion ratios, effective diameters, and specific gravities. Table 50 gives the three published infinity-focus zoom states. Table 51 gives the six aspherical-surface coefficient sets. The patent identifies the zoom architecture as four lens groups, G1− / G2+ / G3− / G4+, with G3 as the focus group and G4 fixed relative to the image plane during zooming. [WO 2024/057734 A1, ¶¶0292–0297, Fig. 35, Tables 49–51.]

The production correlation is strong but is not presented as manufacturer confirmation. FUJIFILM's production specifications for the FUJINON XF16-50mmF2.8-4.8 R LM WR state 11 elements in 9 groups, including 3 aspherical and 3 ED elements, a 16–50 mm focal range, f/2.8–4.8 maximum aperture, 0.24 m minimum focus distance, and inner focusing. The May 2024 launch material also states that the focus group is driven by a linear motor. The patent example independently has 11 glass elements in 9 air-separated optical groups, three double-aspherical elements, a computed design range of 16.4899–48.5702 mm, published F-numbers of 2.88–4.94, and a compact single-element G3 focus group. The WO publication preceded the product announcement by roughly two months. These convergences support the identification, but no FUJIFILM source located for this dossier explicitly states that Example 17 is the production prescription.

The modeled lens is therefore identified as a patent-grounded research reconstruction of the production XF16-50mm optical formula rather than a manufacturer-certified production prescription. Marketing specifications are kept separate from the exact design quantities throughout this analysis.

## Optical Architecture

Example 17 is a four-group negative-positive-negative-positive zoom. In power-sign order, the groups are:

- **G1−:** L11–L13, a three-element negative front group.
- **G2+:** L21–L26, a six-element positive group containing the aperture stop and two cemented doublets.
- **G3−:** L31, a single negative double-aspherical element that the patent identifies as the focus group.
- **G4+:** L41, a single positive final group fixed relative to the image plane during zoom.

The implemented prescription contains 11 glass elements in 9 air-separated optical groups. The distinction matters because G2 contains two cemented pairs: L22+L23 and L24+L25. Those interfaces do not introduce air gaps even though the physical glass-element count remains eleven.

Independent first-order recomputation from the final `.data.ts` gives isolated group focal lengths of approximately −27.1262 mm for G1, +19.9421 mm for G2, −31.7897 mm for G3, and +51.3479 mm for G4. These are isolated-group powers in air, not claims about each group's in-situ contribution after interaction with the rest of the zoom.

The zoom motion is not a simple monotonic four-group translation. Using G4 as the fixed image-side reference, the verified wide-to-tele motions are +2.3411 mm for G1, −23.7910 mm for G2, −14.8650 mm for G3, and 0 mm for G4, where positive is imageward and negative objectward. G1 reverses direction between the three published states; G2 and G3 do not. This reversal is preserved explicitly by the three zoom keyframes rather than approximated by a two-endpoint model.

The design is not described here as a telephoto or retrofocus configuration. The verified tele total-track/EFL ratio is greater than one, while the wide back-focus/EFL ratio is below one; those results do not meet the project's definitions for those labels.

The patent's rear parallel plate PP, source surfaces 22–23, is not included as an active LensVisualizer element. The plate is an ancillary plane-parallel optical member rather than a powered zoom-lens component. Its effect on the source back-focus reference is retained by replacing the source rear path with an air-equivalent spacing of 14.9577556962 mm after surface 21. No dimensional scaling is applied to the prescription.

## Element-by-Element Analysis

The focal lengths below are **standalone element focal lengths in air** computed from the final modeled surface radii, thickness, and d-line index. They should not be read as the in-situ contribution of the same element inside its cemented pair or zoom group. Cemented-pair net powers are stated separately where applicable.

### L11 — Negative Meniscus

**nd = 1.77250, νd = 49.60. Glass: 773496 — S-LAH66-equivalent class, supplier unresolved. f_air = −29.2640 mm.**

L11 is the object-side member of G1. Its two positive radii form a negative meniscus under the patent sign convention because the rear surface is more strongly curved. Its high index permits substantial negative standalone power without an exceptionally thick element.

The coordinate audit found an exact nd/νd match to OHARA S-LAH66, but the patent does not identify a supplier. The data therefore retains an equivalent-class label rather than asserting that FUJIFILM used a specific OHARA melt.

### L12 — Biconcave Negative, Double Aspherical

**nd = 1.58510, νd = 58.74. Glass: Unmatched (nd=1.58510, νd=58.74). f_air = −42.9432 mm.**

L12 is the middle element of G1 and carries the first two aspherical surfaces, 3A and 4A. Its biconcave geometry gives negative standalone power. The adjacent air spacing to L13 is only 0.1200 mm at the axis, so the modeled semi-diameters were constrained by a direct cross-gap sag check rather than by an obsolete radius-ratio heuristic.

No authoritative public catalog identity was established for the 1.58510 / 58.74 coordinate. The glass remains explicitly unmatched. The aspherical geometry is treated independently from any supplier attribution.

### L13 — Positive Meniscus

**nd = 2.05091, νd = 26.95. Glass: 051269 — TAFD65 spectral proxy (supplier unresolved). f_air = +46.2017 mm.**

L13 is the positive rear member of the otherwise negative G1. Its very high refractive index and low Abbe number set it apart from the two preceding negative elements. The isolated three-element group remains negative at −27.1262 mm, so L13 reduces but does not reverse the net negative power of G1.

HOYA TAFD65 provides a compatible spectral proxy at nd 2.05090 and νd 26.94. The patent-derived partial dispersion remains unchanged; the proxy does not identify the production supplier.

### L21 — Positive Meniscus

**nd = 1.49700, νd = 81.61. Glass: 497816 — N-PK52A / FCD1-equivalent ED class, supplier unresolved. f_air = +49.5712 mm.**

L21 is the first glass element of positive group G2 and lies object-side of the aperture stop. Its high Abbe number places it in a low-dispersion crown class. Exact nd/νd coordinates occur in more than one public catalog family, including SCHOTT N-PK52A and HOYA FCD1, so the patent coordinate does not uniquely establish a supplier.

The patent's condition-table rows 29–30 create a source inconsistency here. Their numerical values correspond to L21's νd and normal-line deviation, but the condition definition calls for a negative lens within the P group. Independent standalone-power calculation gives L21 positive power. The prescription is therefore retained as published, and the condition rows are treated as inconsistent source metadata rather than as a reason to relabel L21.

### L22 — Biconvex Positive, Cemented Pair D1

**nd = 1.59283, νd = 68.63. Glass: 593686 — FCD505 spectral proxy (supplier unresolved). f_air = +25.9892 mm.**

L22 begins cemented pair D1 and is a relatively strong positive standalone element. Surface 11 is a cemented interface rather than an air boundary; in the data model it therefore carries the downstream L23 index and element identity.

HOYA FCD505 provides a coordinate-compatible spectral proxy at 1.59282 / 68.63, also used for L24. Patent-derived partial dispersion is retained, without claiming a production supplier.

### L23 — Biconcave Negative, Cemented Pair D1

**nd = 1.54814, νd = 45.82. Glass: 548458 — S-TIL1-equivalent class, supplier unresolved. f_air = −53.5960 mm.**

L23 completes D1. Considered alone in air it is negative, but the cemented pair L22+L23 has a verified net focal length of +47.6268 mm. That cemented result is the appropriate pair-level statement; the +25.9892 mm and −53.5960 mm standalone values are not additive powers in the assembled group.

The coordinate is close to OHARA S-TIL1 but not sufficient to establish supplier identity. The analysis therefore uses an equivalent-class description only.

### L24 — Biconvex Positive, Cemented Pair D2

**nd = 1.59283, νd = 68.63. Glass: 593686 — FCD505 spectral proxy (supplier unresolved). f_air = +17.7253 mm.**

L24 is the strongest positive standalone element in G2. It uses the same 1.59283 / 68.63 coordinate as L22 and begins the second cemented pair, D2.

Its cemented interface with L25 is surface 14. As with D1, the data assigns the interface to the downstream glass medium rather than introducing a synthetic cement layer.

### L25 — Biconcave Negative, Cemented Pair D2

**nd = 1.65411, νd = 39.68. Glass: 654397 — S-NBH5-equivalent class, supplier unresolved. f_air = −14.5601 mm.**

L25 is a strong negative standalone element and completes D2. The verified net focal length of L24+L25 is −181.8683 mm, showing that the cemented pair is weakly negative as a unit even though its individual members have much larger standalone powers of opposite sign.

The patent coordinate is extremely close to OHARA S-NBH5, but the supplier remains unproven. No anomalous-dispersion performance claim is attached to that class label.

### L26 — Positive Meniscus, Double Aspherical

**nd = 1.58510, νd = 58.74. Glass: Unmatched (nd=1.58510, νd=58.74). f_air = +55.0610 mm.**

L26 is the rear element of G2 and carries aspherical surfaces 16A and 17A. It follows the two cemented pairs and completes the positive G2 group.

The same unmatched 1.58510 / 58.74 material coordinate appears on L12. This repeated coordinate is retained exactly from the patent; no attempt is made to infer that the same vendor or melt necessarily supplied both elements.

### L31 — Biconcave Negative, Double Aspherical Focus Element

**nd = 1.76802, νd = 49.24. Glass: 768492 — M-TAF101-equivalent class, supplier unresolved. f_air = −31.7897 mm.**

L31 is both the complete G3 group and the published focus group. Its two aspherical surfaces are 18A and 19A. Because G3 contains only this one element, its standalone focal length and the isolated group focal length are the same within numerical precision.

The coordinate is strongly compatible with the HOYA M-TAF101 class, but the patent does not establish a supplier. The production lens is documented by FUJIFILM as an inner-focus design driven by a linear motor; the patent establishes the optical focus-group direction but does not identify that motor.

### L41 — Positive Meniscus, Fixed Final Group

**nd = 1.61773, νd = 49.81. Glass: 618498 — S-BSM28-equivalent class, supplier unresolved. f_air = +51.3479 mm.**

L41 is the sole element of G4 and is fixed relative to the image plane during zoom. Its isolated group focal length therefore equals its standalone focal length.

The coordinate is close to OHARA S-BSM28, but the specific gravity and the absence of supplier attribution justify retaining an equivalent-class rather than an exact vendor identity.

## Glass Identification and Selection

The patent publishes nd, νd, θgF, and specific gravity for each glass. It does not publish supplier names. The data file therefore separates patent coordinates from catalog-equivalence labels. `dPgF` values in the data are computed directly from the patent's θgF and νd using the normal-line expression `θgF − (0.6438 − 0.001682·νd)`; they are not independently measured catalog values.

| Data label | nd | νd | dPgF | Elements | Identification status |
| --- | ---: | ---: | ---: | --- | --- |
| 773496 — S-LAH66-equivalent class | 1.77250 | 49.60 | −0.008723 | L11 | Exact nd/νd class match; supplier unresolved |
| Unmatched 1.58510 / 58.74 | 1.58510 | 58.74 | −0.003839 | L12, L26 | No defensible exact public identity established |
| 051269 — TAFD65 proxy | 2.05091 | 26.95 | +0.006260 | L13 | High-index class; supplier unresolved |
| 497816 — N-PK52A / FCD1-equivalent ED class | 1.49700 | 81.61 | +0.032338 | L21 | Exact coordinate across multiple vendor families; not a unique melt |
| 593686 — FCD505 proxy | 1.59283 | 68.63 | +0.014496 | L22, L24 | Compatible catalog curve; supplier unresolved |
| 548458 — S-TIL1-equivalent class | 1.54814 | 45.82 | +0.002159 | L23 | Close coordinate match; supplier unresolved |
| 654397 — S-NBH5-equivalent class | 1.65411 | 39.68 | −0.004438 | L25 | Extremely close coordinate match; supplier unresolved |
| 768492 — M-TAF101-equivalent class | 1.76802 | 49.24 | −0.009338 | L31 | Strong class compatibility; supplier unresolved |
| 618498 — S-BSM28-equivalent class | 1.61773 | 49.81 | −0.000340 | L41 | Close coordinate match; supplier unresolved |

This palette spans low-dispersion crown coordinates, high-index positive and negative glasses, and several negative or positive normal-line deviations. Those coordinates are sufficient to preserve the patent's dispersion descriptors in the data, but they are not sufficient by themselves to establish a particular chromatic-correction strategy for the production lens.

FUJIFILM's production specification states that the commercial lens contains three ED elements. The patent tables do not mark three specific elements as “ED,” and the coordinate audit does not provide a unique one-to-one mapping from the production marketing label to three patent elements. The analysis therefore does not assign the marketed ED count to particular element labels beyond noting that L21 is unambiguously a very-low-dispersion 497816-class coordinate.

No `nC`, `nF`, or `ng` line indices are authored because the patent does not publish them for Example 17. The modeled `dPgF` values are useful patent-derived partial-dispersion descriptors but do not justify an apochromatic-performance claim or a full Sellmeier-quality spectral reconstruction.

## Focus Mechanism

The patent identifies G3, consisting solely of L31, as the focus group. From infinity toward the closest object, G3 moves toward the image side. This is an inner-focus architecture in the optical sense because the single-element G3 group moves internally while the front group need not translate as a unit for focusing. [WO 2024/057734 A1, ¶0292.]

FUJIFILM's production material independently describes the XF16-50mm as an inner-focus lens in which a compact focus-lens group is driven by a linear motor. The production minimum focus distance is 0.24 m from the focal plane. These product facts are mechanically consistent with the patent architecture but do not supply Example 17's missing close-focus internal spacings.

The modeled focus status is therefore **NO_INTERNAL_RECONSTRUCTION**. The `.data.ts` retains the three published infinity-focus zoom states and uses identical infinity/close values in every `var` pair. The `closeFocusM: 0.24` field is production metadata for the user interface; it is not evidence that the internal close-focus optical state has been reconstructed.

No close-focus G3 travel, adjacent-gap values, breathing curve, or intermediate focus law is claimed. Production MFD alone does not uniquely determine those internal degrees of freedom.

## Aspherical Surfaces

Example 17 has six aspherical surfaces on three elements: 3A and 4A on L12, 16A and 17A on L26, and 18A and 19A on L31. Table 51 publishes terms through A20 and includes both odd and even radial powers. Odd powers remain rotationally symmetric because the independent variable is the non-negative radial height `h`.

FUJIFILM's patent uses the base term

`Z(h) = C h² / {1 + sqrt(1 − KA C² h²)} + Σ A_m h^m`, with `C = 1/R`.

LensVisualizer uses the conventional `(1+K)` form, so the required mapping is `K = KA − 1`. Every Example 17 asphere has `KA = 1`, giving `K = 0` in the implemented file. No coefficient scaling is applied because the prescription scale factor is exactly 1.

The coefficient sets below are copied from Table 51 after the verified transcription corrections recorded in the dossier. Zero A3 terms are omitted from the data file; all nonzero A4–A20 terms are retained.

### Surface 3A — L12 Front

```text
K   = 0
A4  = -3.9924577224E-05
A5  = -5.1852215278E-06
A6  = +2.4805344695E-06
A7  = -1.7539778327E-07
A8  = -2.9581973849E-08
A9  = +3.2235598271E-09
A10 = +7.4991432654E-10
A11 = -1.2215169948E-10
A12 = -3.7721525292E-12
A13 = +1.4800537658E-12
A14 = -2.4569352907E-14
A15 = -7.7693593692E-15
A16 = +2.6871925618E-16
A17 = +1.8920218202E-17
A18 = -8.0215421148E-19
A19 = -1.7580140587E-20
A20 = +7.6944491746E-22
```

At the patent ray-envelope coordinate `ED/2 = 11.5960 mm`, the verified polynomial departure from the spherical base is −0.262769 mm. At the modeled semi-diameter of 11.6760 mm, the departure is −0.269508 mm. These values describe the implemented geometry; `ED/2` is not presented as a mechanical clear-aperture radius.

### Surface 4A — L12 Rear

```text
K   = 0
A4  = -5.2717350356E-05
A5  = -3.0603195913E-06
A6  = +2.5910625117E-06
A7  = -4.2935249742E-07
A8  = +1.9557676761E-08
A9  = +1.8271994016E-09
A10 = +3.5397011065E-10
A11 = -1.1609979679E-10
A12 = +2.4551308416E-13
A13 = +1.5549002771E-12
A14 = -6.6712880356E-14
A15 = -7.6946423481E-15
A16 = +4.7486976265E-16
A17 = +1.5719915775E-17
A18 = -1.2042993579E-18
A19 = -1.0128720673E-20
A20 = +9.6075388810E-22
```

At `ED/2 = 11.3700 mm`, the verified departure is −0.476677 mm. At the modeled 11.4500 mm semi-diameter it is −0.491456 mm. This is the largest negative departure among the six surfaces at their source ray-envelope coordinates.

### Surface 16A — L26 Front

```text
K   = 0
A4  = -5.6037435788E-05
A5  = +3.1167800426E-05
A6  = -1.2244498970E-05
A7  = +8.8195816761E-06
A8  = -6.7867359661E-06
A9  = +3.2546395675E-06
A10 = -8.5662423567E-07
A11 = +7.0195083659E-08
A12 = +2.9312859944E-08
A13 = -9.8979829383E-09
A14 = +7.0957205291E-10
A15 = +1.7513910904E-10
A16 = -3.3067578340E-11
A17 = +8.4621971776E-14
A18 = +3.1936536227E-13
A19 = -1.3737554812E-14
A20 = -4.9418073255E-16
```

At `ED/2 = 5.6310 mm`, the verified departure is +0.015907 mm; at the modeled 5.7110 mm semi-diameter it is +0.017808 mm.

### Surface 17A — L26 Rear

```text
K   = 0
A4  = +1.2569879863E-04
A5  = -7.5279325899E-05
A6  = +6.4157441890E-05
A7  = -1.9839925072E-05
A8  = +2.8564232827E-06
A9  = -1.9471728126E-06
A10 = +1.3130566099E-06
A11 = -2.7080897841E-07
A12 = -3.3138540630E-08
A13 = +1.9982480626E-08
A14 = -1.4609034040E-09
A15 = -3.8665233524E-10
A16 = +5.9181199574E-11
A17 = +1.8030436086E-12
A18 = -6.3938312332E-13
A19 = +8.2530816674E-15
A20 = +1.8462205892E-15
```

At `ED/2 = 5.4080 mm`, the verified departure is +0.137378 mm; at the modeled 5.4880 mm semi-diameter it is +0.147460 mm.

### Surface 18A — L31 Front

```text
K   = 0
A4  = +2.2182976106E-04
A5  = +1.5988017197E-04
A6  = -4.0281193641E-05
A7  = -1.2599590175E-05
A8  = +6.0729275695E-06
A9  = -7.5192822427E-08
A10 = -3.2506466278E-07
A11 = +4.1261623607E-08
A12 = +7.5425197952E-09
A13 = -1.9722081930E-09
A14 = -1.9659215468E-11
A15 = +4.2064233563E-11
A16 = -2.2729807827E-12
A17 = -4.3559581003E-13
A18 = +3.9316231229E-14
A19 = +1.7903786194E-15
A20 = -2.0767406726E-16
```

At `ED/2 = 6.3225 mm`, the verified departure is +0.375732 mm; at the modeled 6.4025 mm semi-diameter it is +0.391088 mm.

### Surface 19A — L31 Rear

```text
K   = 0
A4  = +2.1168787378E-04
A5  = +1.9172323717E-04
A6  = -5.4763367412E-05
A7  = -1.0775863051E-05
A8  = +7.0239831857E-06
A9  = -4.0331436842E-07
A10 = -3.3375296967E-07
A11 = +5.5906836513E-08
A12 = +6.6807831613E-09
A13 = -2.1984273415E-09
A14 = -4.5547438975E-12
A15 = +4.2239233657E-11
A16 = -2.0174335823E-12
A17 = -4.0704851021E-13
A18 = +3.0963800243E-14
A19 = +1.5796411710E-15
A20 = -1.4972112878E-16
```

At `ED/2 = 6.4605 mm`, the verified departure is +0.431835 mm; at the modeled 6.5405 mm semi-diameter it is +0.449010 mm.

These departures are geometric comparisons to each surface's spherical base, not measurements of production asphere manufacturing error or claims about a specific aberration contribution.

## Chromatic Correction Strategy

The source provides more dispersion information than a simple nd/νd prescription because θgF is tabulated for each element. The data converts this to a numeric `dPgF` proxy for each element, preserving the sign and magnitude of the patent coordinate's deviation from the stated normal line. This permits the patent's glass-selection conditions to be discussed without pretending that complete wavelength-dependent refractive-index data are available.

Several elements have conspicuous low-dispersion coordinates, most notably L21 at νd = 81.61 and L22/L24 at νd = 68.63. Other members pair higher index with substantially lower Abbe number, including L13 at nd = 2.05091 / νd = 26.95 and L25 at nd = 1.65411 / νd = 39.68. These coordinate differences establish that the group uses deliberately varied dispersion classes, but they do not by themselves prove how much longitudinal or lateral chromatic aberration each element corrects in the assembled system.

The production lens is marketed as containing three ED elements. The patent and the catalog-coordinate audit do not uniquely identify which three patent elements correspond to FUJIFILM's production ED designation. No apochromatic label is therefore applied, and no secondary-spectrum performance claim is made from the Abbe and `dPgF` fields alone.

## Conditional Expressions and Source Discrepancies

Tables 64–65 publish 53 conditional-expression values for Example 17. Most of the independently recomputable entries agree with the extracted prescription within source-precision tolerances. Several do not, and the discrepancies are preserved rather than used to alter Tables 49–51.

| Condition | Published | Independently recomputed | Treatment |
| --- | ---: | ---: | --- |
| (3) `(-ΔP)/fw` | 1.4365 | 1.442760 | Numeric mismatch; prescription retained |
| (16) `G1ave` | 4.07 | 4.27 | Source-table mismatch using Table 49 specific gravities |
| (17) `GPave` | 3.76 | 3.455 | Source-table mismatch using Table 49 specific gravities |
| (29) `νPn` | 81.61 | 81.61 | Semantic contradiction: value identifies positive L21 although definition requires a negative P-group lens |
| (30) normal-line deviation for `Pn` | 0.0323 | 0.032338 | Same semantic contradiction as condition 29 |
| (42) `DSOcew/TLw` | 0.5231 | 0.523097 numeric proxy | Example 17 has no qualifying cemented interface object-side of the stop |
| (43) `ΔN/ΔP` | 0.6232 | 0.624816 | Numeric mismatch; directly extracted zoom spacings retained |
| (52) `(-BRt)(ft·tanωt)` | 0.0447 | 0.047624 | Source-model mismatch using published tele state and traced magnifications |

Conditions (5), (6), and (8) are retained as source-only values where the publication does not provide enough independent physical aperture or field-reference information to turn their reproduction into a non-circular check. Dash entries remain not applicable.

The prescription itself is supported more directly by Tables 49–51: independent sequential reduced-angle tracing and a separately implemented ABCD calculation reproduce the published EFL and BFL at all three zoom states. The condition-table discrepancies are therefore treated as source limitations, not as evidence that the main prescription should be changed.

## Verification Summary

The final `.data.ts` was reloaded by the dossier verifier rather than re-entered as a separate hard-coded model. Independent sequential and ABCD first-order calculations agree to floating-point precision.

| State | Published EFL (mm) | Computed EFL (mm) | Published Bf (mm) | Computed BFL (mm) |
| --- | ---: | ---: | ---: | ---: |
| Wide | 16.49 | 16.489918 | 14.96 | 14.956957 |
| Middle | 31.51 | 31.510197 | 14.92 | 14.917109 |
| Tele | 48.57 | 48.570175 | 14.86 | 14.852531 |

The surface-by-surface Petzval calculation, using `φ/(n·n′)` for each refracting surface in the active 1–21 model, sums to +0.00270768516 mm⁻¹. This is a first-order Petzval result for the modeled d-line prescription; it is not a field-curvature measurement of the production lens.

The patent `ED` values are maximum effective ray-envelope diameters, not stated mechanical clear apertures. The final model therefore uses a disclosed semi-diameter rule of `ED/2 + 0.08 mm` on active refracting surfaces. Portable geometry checks on that modeled clearance give a minimum element edge thickness of 1.2541 mm, a maximum actual rim-slope angle of 61.196°, and a worst shared-gap intrusion ratio of 0.894834 against the 0.90 limit. Exact meridional off-axis tracing covered 30 rays over the three published zoom states plus two intermediate zoom samples without clipping at the two cemented internal interfaces.

The physical diaphragm radius is likewise not published. The authored wide-state stop semi-diameter, 6.71112653 mm, is an exact-ray calibration to the published f/2.88 target. Required exact-ray radii at the middle and tele states are approximately 7.16814 mm and 7.17631 mm for the source f/3.75 and f/4.94 targets. These values are calibration quantities, not independent evidence of the production blade opening.

The production lens's marketed 16–50 mm and f/2.8–4.8 specifications are not substituted for the patent's exact design values. The computed design range is 16.4899–48.5702 mm and the source maximum-aperture sequence is 2.88 / 3.75 / 4.94. Likewise, the production 0.24 m minimum focus distance is retained as metadata without inventing close-focus internal spacings.

The integration review preserves the supplied semi-diameters: the local JP WO2024/057734 A5 file contains amendments, not the original Example 17 prescription and figure. An exact local WO 2024/057734 A1 figure remains required before any diagram-derived aperture revision.

## Viewer aperture and glass classification

The runtime uses `zoomApertureModel: "from-nominal-fno"` to infer a changing physical iris from the published infinity f-numbers. The wide / middle / long-state stop radii are 6.711127 / 7.168142 / 7.176309 mm. These are exact-ray calibration results, not source-published diaphragm measurements; interpolation does not establish a production cam law.

L21, L22, and L24 carry **inferred APD** colors. Their coordinate-compatible catalog curves have appreciable positive partial-dispersion deviations; the inspector records the curve and approximate ΔPgF. The flags describe spectral proxies and do not identify the production supplier. No catalog-derived line indices are represented as patent measurements.

## Sources / References

1. **WO 2024/057734 A1, “Zoom lens and imaging device.”** PCT/JP2023/027399, published 2024-03-21. Example 17: ¶¶0292–0297; Fig. 35; Tables 49–51, printed pp. 97–99. Conditional-expression tables: Tables 64–65, printed pp. 112–113.
   Google Patents: https://patents.google.com/patent/WO2024057734A1/en
   PDF: https://patentimages.storage.googleapis.com/27/c7/82/11aa3ae95b1f95/WO2024057734A1.pdf

2. **US 2025/0208392 A1**, family publication used only for normalized Latin-script inventor names.
   https://patents.google.com/patent/US20250208392A1/en

3. **FUJIFILM Corporation, “Fujifilm Launches ‘FUJINON Lens XF16-50mmF2.8-4.8 R LM WR’,” 2024-05-16.** Product timing, production identity, focal range, and launch information.
   https://www.fujifilm.com/jp/ja/news/list/11347

4. **FUJIFILM X Series, XF16-50mmF2.8-4.8 R LM WR Specifications.** Production 11-element/9-group construction, 3 aspherical and 3 ED elements, focal range, aperture range, minimum focus distance, and physical specifications.
   https://www.fujifilm-x.com/en-ca/products/lenses/xf16-50mmf28-48-r-lm-wr/specifications/

5. **FUJIFILM North America, X-T50 / XF16-50mm launch release, 2024-05-16.** Inner-focus and linear-motor description; expected June 2024 availability.
   https://www.fujifilm.com/us/en/news/digital-cameras/fujifilm-announces-x-t50-camera-and-fujinon-xf16-50mm-lens

6. **FUJIFILM XF16-50mmF2.8-4.8 R LM WR Owner's Manual.** Production lens construction, nine-blade diaphragm, minimum focus distance, and linear-motor note.
   https://dl.fujifilm-x.com/support/manual/lenses/lens_xf16-50mmf28-48_r_lm_wr_manual_01.pdf

7. **OHARA optical-glass catalog and product pages.** Used for S-LAH66, S-TIL1, S-NBH5, S-BSM28, and related coordinate comparisons.
   https://oharacorp.com/

8. **HOYA Optical World catalog/cross-reference material.** Used for FCD1 and M-TAF101-class coordinate comparisons.
   https://www.hoya-opticalworld.com/english/datadownload/index.html

9. **SCHOTT Advanced Optics optical-glass catalog.** Used for N-PK52A coordinate comparison.
   https://www.schott.com/en-us/products/optical-glass-p1000267

10. **HIKARI Glass optical-glass catalog.** Checked for unresolved coordinate coverage.
    https://www.hikari-g.co.jp/optical_glass/catalog/

11. **CDGM Glass catalog.** Checked for unresolved coordinate coverage; no exact authoritative row was recovered for the remaining unmatched coordinates in the recorded search.
    https://www.cdgmglass.com/

12. **SUMITA Optical Glass catalog.** Checked for K-GFK68 and related coordinate comparisons.
    https://www.sumita-opt.co.jp/en/products/preform.html
