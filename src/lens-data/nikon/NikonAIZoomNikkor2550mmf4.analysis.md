## Patent Reference and Design Identification

**Patent:** US 4,189,212
**Filed:** May 4, 1977; priorities May 6, 1976 and October 26, 1976
**Granted:** February 19, 1980
**Inventors:** Norio Mizutani and Soichi Nakamura
**Assignee:** Nippon Kogaku K.K.
**Title:** Wide Angle Zoom Lens System
**Embodiment analyzed:** Example 8, with the sign of r11 corrected from the claim text

Example 8 is the prescription used here for the Nikon AI Zoom-Nikkor 25-50mm f/4. The patent example gives a focal-length range of 25.50-35.150-48.805 mm, an f/4 aperture, an 80.6° maximum field, and an 11-element arrangement in which a four-element diverging group is followed by a seven-element converging group. Nikon's own design history for the Ai Zoom Nikkor 25-50mm f/4 identifies the lens as a two-group design with four elements in the first group and seven elements in the second group, designed by Norio Mizutani, completed in February 1976, and released in 1979. That convergence is strong enough to treat Example 8 as the production-family prescription.

The Example 8 numerical table contains one transcription error: it prints r11 as +219.5. Claim 20 repeats the same prescription with r11 = -219.5. The sign must be negative. With +219.5, a paraxial trace gives a wide-end equivalent focal length of approximately 57.55 mm; with -219.5, the computed wide-end equivalent focal length is 25.499 mm, matching the patent value of 25.50 mm. The data file and this analysis therefore use r11 = -219.5.

The production lens was issued as an AI lens in 1979 and as an AI-S revision in 1981. The AI and AI-S variants are treated as the same optical formula for this prescription file.

## Optical Architecture

The lens is a two-group negative-positive wide-angle zoom. The first group is a diverging group with four separated elements, L1 through L4. The second group is a converging group with seven glass elements in six air-spaced groups: a cemented L5 doublet, three separated singlets L6-L8, and a split rear positive member L9a/L9b. This is the patent's Type II rear group, in which the ninth positive member is divided into two positive lenses to obtain additional correction freedom at wide field angles.

At the wide position, the design is retrofocus in the strict optical sense: the 39.612 mm patent back focal distance exceeds the 25.50 mm focal length. The same remains true at the long end, where the 60.709 mm patent back focal distance exceeds the 48.805 mm focal length. It is not a telephoto design; the total track is far longer than the focal length.

Zooming is produced by changing the air separation d8 between the two principal groups from 35.412 mm at 25.50 mm to 15.342 mm at 35.15 mm and 0.503 mm at 48.805 mm. The patent describes both the diverging and converging groups as movable while maintaining a fixed image plane. Nikon's design history adds the production detail that the first group moves internally without moving the front end or filter thread, and that the aperture moves with the second group while its diameter is adjusted to preserve f/4 across the zoom range.

The current data model represents the aperture stop as a fixed stop surface in the inter-group gap immediately ahead of L5. The physical production iris was zoom-cammed, but the current lens-data schema does not support zoom-dependent stop semi-diameter. The stop in the data file is therefore a layout and nominal-aperture approximation, not a separate patent-published surface.

## Element-by-Element Analysis

### L1 - Negative Meniscus, Convex to Object

nd = 1.77279, νd = 49.4. Glass: unmatched 773/494, near Hoya M-TAF1 / Ohara S-LAH66N class. f = -73.07 mm.

L1 is the negative front meniscus specified by the patent as a central feature of the diverging group. Both radii are positive, with the rear radius much shorter than the front radius, so the element is convex to the object side but has net negative power. The negative first element reduces oblique-ray deviation compared with earlier wide-angle zooms that used a positive first component, helping control front diameter at the 80.6° wide-end field.

The glass lies near the high-index, moderate-dispersion lanthanum-flint region. It does not exactly match a current public catalog entry, so the data file treats it as an unmatched 773/494 glass rather than assigning a false exact catalog name. Its Abbe number is higher than the Abbe numbers of the positive L2 and L4 members, which is the chromatic inversion required by the patent's condition (3).

### L2 - Positive Meniscus, Concave to Object

nd = 1.60342, νd = 38.0. Glass: Schott F5 / Ohara S-TIM5. f = +130.70 mm.

L2 is a weak positive meniscus with both radii negative. It is the converging member immediately ahead of L3, and together the rear surface of L2 and the front surface of L3 form the patent's converging air chamber. This air lens is the principal correction mechanism for reducing wide-end negative distortion while retaining a negative first element.

The use of a lower-Abbe positive glass here is deliberate. In the diverging group, the negative elements carry higher Abbe numbers and the positive elements carry lower Abbe numbers, an inversion used to correct chromatic aberration of magnification at large field angles.

### L3 - Biconcave Negative

nd = 1.80279, νd = 46.8. Glass: S-LAH65V class, near 804/466. f = -40.87 mm.

L3 is the strongest negative element in the front group. Its front surface is moderately concave to the object side and its rear surface is steeply concave to the image side, giving it a biconcave form. The element is the key member in the patent's distortion-control condition, because the ratio (R5 + R6)/(R5 - R6) sets the shape of the L2-L3 air lens.

With νd = 46.8, L3 sits on the flint side of the usual crown/flint boundary, despite its lanthanum character. It is therefore best treated as a dense lanthanum-flint-class glass rather than a dense lanthanum crown.

### L4 - Positive Meniscus, Convex to Object

nd = 1.80518, νd = 25.5. Glass: Schott SF6 / Ohara S-TIH6. f = +152.35 mm.

L4 is a weak positive dense-flint meniscus at the rear of the diverging group. The long air space between L3 and L4 thickens the front group and reduces zoom-induced variation in spherical aberration and field curvature. In Example 8, that air space is 18.9 mm, far greater than the 3.3 mm center thickness of L3.

The dense-flint dispersion of L4 works against the higher-Abbe negative elements in the diverging group. Its optical power is weak enough that it functions more as a field and chromatic balancing member than as a main power carrier.

### L5 - Cemented Doublet, Net Positive

#### L5a - Biconvex Positive

nd = 1.53172, νd = 48.9. Glass: Ohara S-TIL6 / LLF6 class. f = +65.00 mm.

#### L5b - Negative Meniscus

nd = 1.80518, νd = 25.5. Glass: Schott SF6 / Ohara S-TIH6. f = -178.70 mm.

L5 is the first member of the converging group and is cemented in Example 8. The doublet has a net focal length of +101.51 mm. The low-index, higher-Abbe positive front element and the dense-flint negative rear element provide axial color correction at the entrance of the rear group.

The patent text states that making the foremost positive component of the converging group into a doublet facilitates correction of axial chromatic aberration and reduces color-dependent spherical mismatch at the long focal-length condition. This is exactly the role that L5 fills in Example 8.

### L6 - Positive Meniscus, Convex to Object

nd = 1.50137, νd = 56.5. Glass: K10 class, 501/565. f = +74.33 mm.

L6 is a low-index positive meniscus in the forward part of the rear group. Its refractive index is below the patent's n < 1.65 threshold for the sixth member. This low index helps move the Petzval sum in the positive direction when balanced against the high-index negative L8.

### L7 - Positive Meniscus, Convex to Object

nd = 1.50137, νd = 56.5. Glass: K10 class, 501/565. f = +58.82 mm.

L7 is the stronger of the two low-index positive relay elements in the middle of the converging group. It carries substantial positive power ahead of L8 and helps form the Sonnar-type rear group described by the patent. Its low refractive index also satisfies the patent's n < 1.65 requirement for the seventh member.

### L8 - High-Index Negative Meniscus

nd = 1.79504, νd = 28.4. Glass: Hikari J-LAFH3 class, close 795/284. f = -20.88 mm.

L8 is the strongest individual element by absolute focal power. The front radius is extremely weak and the rear radius is strongly curved, so the element is nearly plano-concave in optical effect. It is the negative element embedded among the rear positives and is essential to the Sonnar-type correction strategy.

The patent requires L8 to have an index at least 0.17 higher than the indices of L6 and L7. Example 8 exceeds this by roughly 0.294. The high-index negative element helps keep the Petzval sum from becoming too negative while preserving the large aperture and wide field.

### L9a - Biconvex Positive

nd = 1.46450, νd = 65.8. Glass: unmatched 465/658, FK/phosphate-crown class. f = +94.82 mm.

L9a is the forward half of the split ninth member used by the Type II rear group. The patent explains that dividing the rearmost positive member into two positives gives added freedom for distortion and field-curvature correction at wider angles of view.

The glass has an unusually low refractive index and high Abbe number. No exact match was found in current public Ohara, Hoya, Schott, Hikari, Sumita, or CDGM catalog data, so it is treated as an unmatched FK/phosphate-crown-class glass rather than assigned a speculative vendor identity.

### L9b - Biconvex Positive

nd = 1.50137, νd = 56.5. Glass: K10 class, 501/565. f = +88.04 mm.

L9b is the rear positive member nearest the image plane. Its position gives it strong leverage over field curvature and distortion. It shares the same low-index crown-class glass used for L6 and L7, continuing the rear group's Petzval-balancing strategy.

## Glass Selection

The glass palette spans eight optical types across eleven elements.

| Code | Assignment | nd | νd | Elements | Note |
|---|---:|---:|---:|---|---|
| 773/494 | Unmatched, near Hoya M-TAF1 / Ohara S-LAH66N | 1.77279 | 49.4 | L1 | High-index negative front meniscus |
| 603/380 | Schott F5 / Ohara S-TIM5 | 1.60342 | 38.0 | L2 | Lower-Abbe positive in the front group |
| 803/468 | S-LAH65V class | 1.80279 | 46.8 | L3 | Dense lanthanum-flint-class negative |
| 805/255 | Schott SF6 / Ohara S-TIH6 | 1.80518 | 25.5 | L4, L5b | Dense flint achromatizing partner |
| 532/489 | Ohara S-TIL6 / LLF6 class | 1.53172 | 48.9 | L5a | Positive member of cemented L5 |
| 501/565 | K10 class | 1.50137 | 56.5 | L6, L7, L9b | Low-index positives for Petzval balance |
| 795/284 | Hikari J-LAFH3 class | 1.79504 | 28.4 | L8 | Strong high-index negative rear element |
| 465/658 | Unmatched FK/phosphate-crown class | 1.46450 | 65.8 | L9a | Low-dispersion split rear positive |

The major chromatic pattern is the patent's Abbe-number inversion in the diverging group. L1 and L3 are negative elements with higher Abbe numbers than the positive L2 and L4 elements. That arrangement is used to suppress chromatic aberration of magnification and chromatic field-curvature mismatch at the wide end. The rear group then uses the L5 cemented doublet for axial color and uses low-index positive elements around a high-index negative L8 to keep the Petzval sum near zero.

No apochromatic claim is made. The patent does not publish partial-dispersion data, and the available prescription gives only nd and νd.

## Focus Mechanism

The patent publishes only infinity-focus zoom spacings. The production lens focuses by unit extension of the optical assembly and has a published minimum focus distance of 0.6 m. The data file therefore leaves the internal prescription unchanged during focusing and varies only the final back-focus gap.

Close-focus back-focus values in the data file are approximations solved from a 0.6 m object-to-image distance under a unit-focus model. They are intended to make the viewer's focus slider behave plausibly; they are not patent-published close-focus data.

| Zoom position | Patent BFD at infinity | Unit-focus BFD at 0.6 m, approximated |
|---|---:|---:|
| 25.50 mm | 39.612 mm | 40.989 mm |
| 35.15 mm | 48.348 mm | 50.970 mm |
| 48.805 mm | 60.709 mm | 65.937 mm |

## Conditional Expressions

The front-group distortion condition gives (R5 + R6)/(R5 - R6) = 0.696, within the specified 0.5 to 1.2 range. The auxiliary ratio |R2|/|R6| = 0.835 also falls inside the specified 0.7 to 1.6 range.

The L3-L4 air space condition is the one marginal inconsistency in Example 8. With D = 18.9 mm and f1 = -45.379 mm, D/|f1| = 0.417. This is slightly above the stated upper limit of 0.4. The numerical example and claim are otherwise internally consistent, so the excess is best treated as a small rounded-example tension rather than as a transcription error.

The L4 focal-length condition is satisfied: f4 = +152.35 mm, while the stated range is 1.5|f1| < f4 < 3.5|f1|, or 68.07-158.83 mm for this example.

The front-group power ratios are all within the patent ranges.

| Quantity | Computed | Patent range | Status |
|---|---:|---:|---|
| `abs(f11)/abs(f1)` | 1.610 | 1.2-3.8 | Satisfied |
| `abs(f12)/abs(f1)` | 2.880 | 1.8-4.0 | Satisfied |
| `abs(f13)/abs(f1)` | 0.901 | 0.4-1.2 | Satisfied |
| `abs(f14)/abs(f1)` | 3.357 | 1.2-3.8 | Satisfied |

The Type II rear-group power ratios also satisfy the patent ranges. The Type II table's applicable range for f25/f2 is 1.0 < f25/f2 < 3.5, so Example 8's f25/f2 = 2.308 is compliant.

| Quantity | Computed | Patent range | Status |
|---|---:|---:|---|
| f21/f2 | 2.471 | 1.9-3.5 | Satisfied |
| f22/f2 | 1.809 | 1.1-1.9 | Satisfied |
| f23/f2 | 1.432 | 1.1-3.5 | Satisfied |
| `abs(f24)/f2` | 0.508 | 0.4-0.6 | Satisfied |
| f25/f2 | 2.308 | 1.0-3.5 | Satisfied |
| f26/f2 | 2.143 | 1.2-4.0 | Satisfied |

The Type II rear-group shape factors are likewise within range: Q21 = -0.589, Q22 = -1.374, Q23 = -1.847, Q24 = 0.984, Q25 = 0.526, and Q26 = 0.496. The refractive-index conditions are also satisfied, because n(L6) = n(L7) = 1.50137 < 1.65, and n(L8) - n(L6) = n(L8) - n(L7) = 0.294.

## Aberration Correction Strategy

The aberration diagram for Example 8 is Figure 17. It shows spherical aberration, astigmatism, distortion, and chromatic aberration of magnification at the three focal-length positions. At 25.5 mm, the distortion curve remains within the ±5% plotted scale and is roughly -3% by visual reading. At the long end, distortion approaches the axis and the astigmatic separation narrows.

The design's correction strategy is consistent with the patent prose. The front group uses a negative front meniscus to reduce oblique-ray deviation, then uses the L2-L3 converging air chamber to restore distortion control. The rear group uses a Sonnar-derived positive-positive-positive-negative-positive-positive arrangement to project the principal plane forward while preserving enough correction freedom for f/4 and an 80.6° field.

The surface-by-surface Petzval sum is +0.001698 mm^-1, corresponding to a Petzval radius of approximately -589 mm under the sign convention used here. That weak value is consistent with a design balanced by low-index positive rear elements around a high-index negative L8.

## Verification Summary

Independent paraxial y-nu and ABCD traces were rerun from the patent prescription using the corrected r11 = -219.5. Agreement with the patent focal lengths and back focal distances is within ordinary rounding error.

| Position | Computed EFL | Patent EFL | Computed BFD | Patent BFD |
|---|---:|---:|---:|---:|
| Wide | 25.4988 mm | 25.500 mm | 39.6084 mm | 39.612 mm |
| Mid | 35.1475 mm | 35.150 mm | 48.3430 mm | 48.348 mm |
| Tele | 48.8007 mm | 48.805 mm | 60.7028 mm | 60.709 mm |

The computed group focal lengths are f1 = -45.379 mm and f2 = +41.080 mm, matching the patent's -45.37879 mm and +41.082 mm values. The computed standalone element focal lengths used in the data file were also checked against independent thick-lens calculations.

Semi-diameters are not published in the patent. The data file uses inferred semi-diameters derived from marginal/chief paraxial ray envelopes and then reduced conservatively to satisfy renderer constraints: sd/|R| < 0.90, element front/rear semi-diameter ratio not exceeding 1.25, positive edge thickness, and signed cross-gap sag intrusion below 90% of the corresponding air gap. The resulting clear apertures should be treated as visualization clear apertures, not manufacturer mechanical drawings.

## Sources

- US Patent 4,189,212, "Wide Angle Zoom Lens System," Nippon Kogaku K.K., granted February 19, 1980.
- Nikon, "The tale of the original wide-angle zoom lens, the Zoom Nikkor 25-50mm f/4," NIKKOR - The Thousand and One Nights, No. 46.
- Schott glass datasheets for F5 and SF6.
- Ohara glass datasheets for S-TIM5, S-TIH6, S-TIL6, and S-LAH65V-class comparison.
- Hoya catalog/cross-reference data for M-TAF1-class comparison.
- Hikari glass data for J-LAFH3-class comparison.
