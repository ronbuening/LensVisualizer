# Leica Elmarit-TL 18 mm f/2.8 ASPH.

**Patent:** US 2020/0341238 A1  
**Application Number:** 16/618,490 (PCT/JP2018/024994)  
**Filed:** 2 July 2018 (PCT); §371(c) date 2 December 2019  
**Priority:** 6 July 2017 — JP 2017-132411  
**Published:** 29 October 2020  
**Inventor:** Hideki Kai  
**Applicant:** Panasonic Intellectual Property Management Co., Ltd. (Osaka, JP)  
**Title:** Single Focus Image Pickup Optical System, and Image Pickup Device and Camera System Using Single Focus Image Pickup Optical System  
**Embodiment analyzed:** Third Numerical Example (Tables 7-9B; FIG. 5-6)

## Patent Reference and Design Identification

The prescription transcribes the third numerical example of US 2020/0341238 A1. The patent discloses a compact fixed-focal-length wide-angle imaging system with three main groups: a positive first group, a positive second group, and a negative third group. The second group is the sole focusing group, and the first and third groups remain fixed during focus. The third numerical example is the closest patent embodiment to the production Leica Elmarit-TL 18 mm f/2.8 ASPH.

The production match is based on converging evidence rather than on any single surface value published by Leica:

1. **Element and group count.** Leica publishes 8 lenses in 6 groups. The third numerical example uses eight glass lens elements in six air-separated optical groups when the two 0.005 mm resin bond layers are treated as cement layers rather than as glass elements.
2. **Aspherical-surface count.** Leica publishes four aspherical surfaces. The third numerical example has exactly four: surfaces 3, 4, 14, and 15, corresponding to both faces of L2 and both faces of L7. This excludes the second numerical example, which has only three aspherical surfaces.
3. **Aperture.** Leica markets the lens as f/2.8. The third numerical example is F = 2.90444, which is a normal patent/design value for a marketed f/2.8 lens. The first numerical example is F = 4.10720 and is not a match.
4. **Focal length and field.** The patent design focal length is 18.4556 mm. Leica markets the lens as 18 mm and publishes a diagonal angle of view of approximately 75°. The patent's view-angle row gives 37.9021° half-field, or about 75.8° full field.
5. **Mount and format.** Leica publishes compatibility with Leica L-bayonet cameras, and the image height/field values in the patent are consistent with an APS-C image circle.
6. **Focus mechanism.** The patent requires the second group to move for focusing while the first and third groups remain fixed. Leica describes electronically controlled AF/MF operation with no front-extension focusing.
7. **Close-focus specification.** Leica publishes 0.30 m minimum focus and approximately 1:14 largest scale. The patent tabulates only the infinity state, so close focus in the data file is modeled from the manufacturer specification rather than copied from a patent close-focus table.

A reader who knows only the production lens can verify the identification from the combination of 8/6 construction, four aspherical surfaces, f/2.8 marketing aperture, APS-C L-mount format, and an internal single-group focus mechanism.

## Optical Architecture

The design is a compact wide-angle prime with positive-positive-negative main group powers. In the patent's grouping, the first group G1 is positive and is divided into a negative front sub-group G1A, the aperture stop, and a positive rear sub-group G1B. G2 is a single positive element used for internal focus, and G3 is a fixed negative rear element.

The front part is retrofocus-type in the patent's sense: G1A is negative and precedes a positive G1B, which is a standard wide-angle strategy for managing oblique bundles and securing working space behind the optical power. The full optical system, however, should not be described as a strict long-back-focus retrofocus lens. The verified infinity BFD/EFL ratio is 15.2663 / 18.4556 = 0.827, so the back focal distance is shorter than the effective focal length. The corrected description is therefore **retrofocus-type front group / inverse-telephoto-derived wide-angle**, not a strict BFD > EFL retrofocus lens.

The six air-separated groups are:

- **G1A, L1-L2, negative.** A high-index positive meniscus followed by a double-aspheric negative meniscus. Verified group focal length is approximately -125.0 mm.
- **Stop.** The aperture diaphragm sits between G1A and G1B inside G1.
- **G1B, L3-L6, positive.** Two cemented pairs: L3 + resin + L4 and L5 + resin + L6. Verified group focal length is approximately +20.19 mm.
- **G2, L7, positive.** A single double-aspheric positive meniscus. It is the internal focus group. Verified standalone focal length is +29.61 mm.
- **G3, L8, negative.** A fixed negative meniscus. Verified standalone focal length is -55.62 mm.

The most important architectural choice is the single moving focus element located between two fixed groups. That keeps the optical total length constant during focus and avoids moving the front group in a very short pancake barrel.

## Element-by-Element Analysis

Standalone focal lengths below are thick-lens-in-air values from an independent paraxial reconstruction. They reproduce patent Table 9B to four decimals. Radius signs use the patent convention: a positive radius has its center of curvature on the image side.

### L1 — Positive Meniscus, convex to object

`nd = 2.00100, νd = 29.1. Glass: OHARA S-LAH99 class. f = +34.28 mm.`

L1 is a high-index positive meniscus at the front of G1A. It begins turning wide oblique bundles inward while keeping the negative power of G1A moderate. Its very high refractive index allows the patent to obtain the required positive power without excessively strong surface curvature.

Although L1 is positive, it sits inside a net-negative G1A. This is a common compact-wide-angle compromise: the first element helps control the entrance geometry while the following negative aspheric element supplies the actual front-group divergence.

### L2 — Negative Meniscus, convex to object; both surfaces aspheric

`nd = 1.69384, νd = 53.1. Glass: Sumita K-VC80 / HOYA M-LAC130-class moldable lanthanum crown. f = -23.84 mm.`

L2 is the principal negative element in G1A. Both faces are aspherical in Table 8, despite a misleading third-embodiment prose sentence that mentions only the object-side surface. The prescription table and aspheric coefficient table are controlling.

The element's high-index, mid-dispersion crown position is consistent with a moldable aspheric glass family. Its position ahead of the stop gives it strong leverage over distortion, oblique astigmatism, and field behavior in a short wide-angle lens.

### L3 — Positive Meniscus, convex to image; cemented through resin to L4

`nd = 1.83481, νd = 42.7. Glass: OHARA S-LAH55V class. f = +7.07 mm.`

L3 is the strongest positive element in the design and opens the positive G1B sub-group. It carries substantial converging power immediately behind the stop.

In the patent table L3 does not directly touch L4. A 0.005 mm layer with nd = 1.56732 and νd = 42.8 lies between them. The layer is best treated as an ultraviolet-curing resin bond, not as a counted glass lens element. The data file models it explicitly because it is optically present in the prescription.

### L4 — Negative Meniscus, convex to image; cemented through resin to L3

`nd = 1.84666, νd = 23.8. Glass: OHARA S-TIH53 class. f = -9.00 mm.`

L4 is the dense-flint negative partner of the L3/L4 cemented pair. The Abbe-number split between L3 and L4 is large enough for the pair to provide the main axial-color correction in the high-power rear portion of G1.

The pair is a conventional high-index positive / dense-flint negative achromatizing unit. Its position just behind the stop makes it important for both chromatic and spherical correction.

### L5 — Biconcave Negative; cemented through resin to L6

`nd = 1.69895, νd = 30.0. Glass: OHARA S-TIM35 class. f = -10.59 mm.`

L5 is the negative front member of the second cemented pair. Its object-side surface carries most of its negative power; the image-side surface is weak because it is shared with the thin resin layer and then L6.

Unlike the L3/L4 pair, L5/L6 is not a strong chromatic-achromat pair because the two glasses have nearly the same Abbe number. Its role is mainly monochromatic: it helps distribute the converging power of G1B and contributes to balancing field curvature, spherical aberration, and coma in a short back half of the lens.

### L6 — Biconvex Positive; cemented through resin to L5

`nd = 2.00100, νd = 29.1. Glass: OHARA S-LAH99 class. f = +9.53 mm.`

L6 is the positive rear member of the second cemented pair and shares the same very-high-index glass family as L1. Its high index gives strong positive power with a smaller Petzval penalty than a lower-index positive element would carry.

The patent prose names only L3/L4 as a cemented lens, but the numerical table gives a 0.005 mm resin layer between L5 and L6 and the same surface radius on both sides of the layer. Counting L5/L6 as a cemented group is also necessary to reconcile the prescription with the 8-element / 6-group production specification.

### L7 — Positive Meniscus, convex to image; focus group; both surfaces aspheric

`nd = 1.77200, νd = 50.0. Glass: Sumita K-LaFK50-class / OHARA S-LAH66-class lanthanum crown. f = +29.61 mm.`

L7 is the whole of G2 and is the sole moving focus group. It is a positive meniscus with both faces aspheric. The element moves toward the object as focus moves from infinity toward the close range.

The two aspheric faces are important because a single moving positive element changes conjugates substantially during focus. The aspheres help control the spherical aberration and field-curvature variation that would otherwise accompany a short-travel internal-focus design.

### L8 — Negative Meniscus, convex to image

`nd = 1.80809, νd = 22.8. Glass: OHARA S-NPH1 class. f = -55.62 mm.`

L8 is the fixed negative rear group. Both radii are negative, so it is a negative meniscus with the convex surface toward the image side. The third-embodiment prose calls L8 biconcave, but the numerical prescription and the patent's broader element description identify the meniscus form; the radii govern.

Its role is to tune rear-group power, exit-pupil behavior, and field flattening near the sensor. It is not a low-dispersion correction element; its dispersion is high.

## Glass Identification

The glass assignments are based on independent nd/νd matching against manufacturer catalogs and six-digit glass-code logic. The patent does not name the glass vendors, so exact catalog names should be read as catalog matches or class identifications, not as manufacturer-disclosed procurement data.

| Element | nd | νd | Catalog match / class | Role |
|---|---:|---:|---|---|
| L1, L6 | 2.00100 | 29.1 | OHARA S-LAH99 class | Very-high-index lanthanum dense flint for compact positive power |
| L2 | 1.69384 | 53.1 | Sumita K-VC80 / HOYA M-LAC130-class moldable lanthanum crown | Double-sided aspheric negative front-group element |
| L3 | 1.83481 | 42.7 | OHARA S-LAH55V class | Strong positive element in G1B |
| L4 | 1.84666 | 23.8 | OHARA S-TIH53 class | Dense-flint negative partner for L3 |
| L5 | 1.69895 | 30.0 | OHARA S-TIM35 class | Negative element in second cemented pair |
| L7 | 1.77200 | 50.0 | Sumita K-LaFK50 / OHARA S-LAH66-class lanthanum crown | Double-sided aspheric focus element |
| L8 | 1.80809 | 22.8 | OHARA S-NPH1 class | High-dispersion fixed rear negative meniscus |
| Cement layers | 1.56732 | 42.8 | UV-curing resin; not counted as glass | 0.005 mm bond layers between L3/L4 and L5/L6 |

No element is a low-dispersion ED or fluorite crown. The chromatic strategy is therefore a compact achromatized wide-angle strategy rather than an apochromat strategy: the principal chromatic correction is concentrated in the L3/L4 pair, while the remaining glasses are selected mainly for high-index power distribution, Petzval management, and manufacturable aspheric surfaces.

## Focus Mechanism

The patent focus mechanism is internal focus by G2 alone. G1 and G3 remain fixed; L7 moves toward the object for near focus. The two variable separations are d13, between L6 and L7, and d15, between L7 and L8. Conservation of the G1-to-G3 spacing requires d13 to decrease and d15 to increase by the same amount.

The patent tabulates only the infinity prescription. The close-focus state in the `.data.ts` file is therefore not a patent-published second prescription. It is a paraxial reconstruction fitted to the official Leica 0.30 m minimum focus distance.

| State | d13 | d15 | Note |
|---|---:|---:|---|
| Infinity | 2.6130 mm | 1.3000 mm | Patent Table 7 |
| 0.30 m modeled close focus | 1.5033 mm | 2.4097 mm | L7 shifted objectward by 1.1097 mm |

The modeled 0.30 m state gives paraxial magnification β = -0.06848, or approximately 1:14.6. That is consistent with Leica's published approximate 1:14 maximum scale and 343 mm × 228 mm smallest object field. The small difference is expected because the manufacturer values are rounded and measured mechanically, while the reconstruction is paraxial and uses the patent's infinity prescription.

The prior draft's statement that the drive is a stepping motor has been removed. Leica's technical data supports electronically controlled AF/MF with manual override, but does not identify the motor type.

## Aspherical Surfaces

Four surfaces are aspherical: 3 and 4 on L2, and 14 and 15 on L7. These four surfaces match Leica's published ASPH specification and distinguish the third numerical example from the second.

The patent's third-embodiment prose contains two copy/paste errors. It says only the object-side surface of L2 is aspherical, although Table 7 marks both surfaces 3 and 4. It also says the image-side surface of L3 is aspherical, which is true of the second numerical example but not of the third. Table 7 and Table 8 control the prescription: in the selected example, L3 is spherical and L2/L7 are the two double-sided aspheric elements.

The patent uses the standard even-order asphere equation:

$$
Z=\frac{h^2/r}{1+\sqrt{1-(1+K)(h/r)^2}}+\sum A_nh^n
$$

Here K = 0 denotes a spherical conic base. This is the standard conic convention, not a shifted Japanese κ convention.

**Surface 3A, L2 object side.** K = 0; A4 = -1.61457E-04, A6 = 7.00707E-06, A8 = -1.73998E-07, A10 = 1.71888E-09, A12 = 0, A14 = 0. At the inferred 6.0 mm semi-diameter, the aspheric departure from the spherical base is -0.0706 mm.

**Surface 4A, L2 image side.** K = -5.31488E-01; A4 = 1.83770E-04, A6 = 9.56358E-06, A8 = 2.36100E-07, A10 = 4.57222E-09, A12 = 0, A14 = 0. At the inferred 5.1 mm semi-diameter, the total departure from the K = 0 spherical surface of the same vertex radius is -0.1391 mm; the polynomial component alone is +0.4551 mm.

**Surface 14A, L7 object side.** K = 0; A4 = -3.34972E-05, A6 = -1.35259E-06, A8 = 4.18710E-08, A10 = -6.42356E-10, A12 = 0, A14 = 0. At the inferred 8.3 mm semi-diameter, the aspheric departure from the spherical base is -0.6548 mm.

**Surface 15A, L7 image side.** K = -2.04613E+00; A4 = -5.18764E-05, A6 = -2.72762E-07, A8 = -7.09851E-09, A10 = 6.26453E-10, A12 = -1.31377E-11, A14 = 5.97116E-14. At the inferred 9.3 mm semi-diameter, the total departure from the K = 0 spherical surface of the same vertex radius is -0.5414 mm; the polynomial component alone is -1.2674 mm.

The front aspheres primarily correct distortion and off-axis aberrations generated by the negative front sub-group. The focus-group aspheres primarily stabilize spherical aberration and field curvature as L7 changes conjugates during internal focus.

## Conditional Expressions

The patent defines five conditional expressions and tabulates their values for each numerical example. Independent paraxial reconstruction confirms that the third numerical example satisfies all five conditions when the patent's own tabulated definitions are reconciled with the prescription.

| # | Expression | Range | Patent Ex. 3 | Independently computed | Comment |
|---|---|---:|---:|---:|---|
| (1) | TL / Y' | 2.3-3.0 | 2.74 | 2.744 | Uses implied Y' ≈ 14.2 mm, not the 13.2 mm aberration-plot height |
| (2) | TG / TL | 0.5-0.7 | 0.61 | 0.608 | Uses claim definition: first-to-last lens-surface distance |
| (3) | TL / FL | 1.5-2.5 | 2.11 | 2.111 | Direct from TL and EFL |
| (4) | (1 - β2G²)·β3G² | 1.0-1.5 | 1.10 | 1.103 | β2G = 0.5806; β3G = 1.2898 |
| (5) | Nd2G | 1.70-1.85 | 1.7725 | 1.77200 | L7 / G2 refractive index |

Two definitional inconsistencies remain in the patent text. First, Table 9A lists image height H = 13.2 mm for the aberration plots, but the condition-table value TL/Y' = 2.74 implies Y' ≈ 14.2 mm. The condition table is therefore using a larger maximum image height than the plotted aberration height. Second, the body text describes TG as a sum of element thicknesses, but claim 2 defines it as the distance from the object-closest lens surface to the image-closest lens surface. The claim definition reproduces the tabulated value; the thickness-sum reading does not.

Condition (4) is also typeset inconsistently in the summary table. The prose and the claim use the squared third-group magnification form, and the squared form reproduces the tabulated values. A cubed exponent does not.

## Verification Summary

A fresh paraxial y-u / ABCD reconstruction was run from the Table 7 prescription before this revision was written.

| Quantity | Patent | Computed |
|---|---:|---:|
| Effective focal length at infinity | 18.4556 mm | 18.4556 mm |
| Back focal distance | 15.26634 mm | 15.2663 mm |
| Total optical length | 38.9660 mm | 38.9660 mm |
| BFD / EFL | — | 0.8272 |
| G1A / G1B / G1 / G2 / G3 signs | - / + / + / + / - | - / + / + / + / - |
| Surface-by-surface Petzval sum | — | +0.006176 mm^-1 |
| Petzval radius | — | -161.9 mm |

Standalone element focal lengths were reproduced as follows: L1 +34.2753 mm, L2 -23.8415 mm, L3 +7.0727 mm, L4 -8.9971 mm, L5 -10.5914 mm, L6 +9.5266 mm, L7 +29.6069 mm, and L8 -55.6207 mm. These match patent Table 9B to the precision needed for transcription verification.

The inferred semi-diameters were also checked for edge thickness and signed cross-gap sag intrusion. The tightest air gap is between L4 rear and L5 front: the selected semi-diameters give 1.0409 mm signed intrusion across a 1.1630 mm gap, or 89.5% of the gap. That is deliberately just under the 90% project limit and avoids hidden renderer trim while preserving a plausible compact rear-G1 aperture.

## Manufacturer Specifications vs. Patent

Manufacturer hard specifications govern the production lens where they differ from the patent. The patent values are still retained in the data file as design values.

| Specification | Leica production specification | Patent Example 3 |
|---|---|---|
| Focal length | 18 mm | 18.4556 mm |
| Maximum aperture | f/2.8 | F = 2.90444 |
| Angle of view | approx. 75° / 65° / 46° | 37.9021° half-field in Table 9A |
| Elements / groups | 8 / 6 | 8 glass elements / 6 groups, with two explicit resin bond layers |
| Aspherical surfaces | 4 | 4: surfaces 3, 4, 14, 15 |
| Minimum focus | 0.30 m | not tabulated |
| Maximum magnification | approx. 1:14 | not tabulated |
| Mount / format | Leica L bayonet / APS-C | interchangeable-camera imaging system / APS-C-scale field |
| Filter | E39 internal thread | not specified |
| Dimensions / weight | approx. 21 mm to bayonet, approx. 62 mm largest diameter, approx. 80 g; product copy also states 20.5 mm length | not specified |

## Sources

- US 2020/0341238 A1, *Single Focus Image Pickup Optical System, and Image Pickup Device and Camera System Using Single Focus Image Pickup Optical System*, Hideki Kai / Panasonic Intellectual Property Management Co., Ltd., published 29 October 2020. Numerical Example 3, Tables 7-9B, FIG. 5-6, ¶0051-0100, ¶0124-0126, and claims 1-8.
- Leica Camera AG, official technical data for the Leica Elmarit-TL 18 mm f/2.8 ASPH., order numbers 11088 and 11089: L bayonet, 8/6 optical construction, four aspherical surfaces, 75°/65°/46° angle of view, 0.30 m focusing range, approximate 1:14 largest scale, E39 filter thread, and approximate dimensions/weight.
- OHARA optical-glass catalog pages for S-LAH99, S-LAH55V, S-TIH53, S-TIM35, S-LAH66, and S-NPH1; HOYA and Sumita catalog/cross-reference data for the moldable lanthanum-crown classes used to identify L2 and L7.
