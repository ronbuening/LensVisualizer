# Pentax-DA 35 mm F2.8 Macro Limited — Optical Analysis

## Patent Reference and Design Identification

**Patent:** US 7,715,118 B2  
**Application Number:** 12/062,721  
**Filed:** April 4, 2008  
**Priority:** April 9, 2007 (JP 2007-101302)  
**Granted:** May 11, 2010  
**Inventor:** Koji Kato  
**Assignee:** Hoya Corporation  
**Title:** Macro Lens System  
**Embodiment analyzed:** Example 1 (Table 1; FIG. 1)

The prescription transcribed here is Example 1 of US 7,715,118 B2, a Hoya-assigned family of compact macro lenses for digital single-lens-reflex cameras. The patent states the design problem directly: a digital SLR can use a film-era SLR mount and therefore still needs a long flange-back distance, while the smaller digital image format calls for a shorter focal length; the lens must also reach approximately 1:1 magnification while controlling spherical aberration and distortion from infinity to close focus.

The production lens match is based on convergent evidence rather than on a published Pentax prescription.

1. **Element and group count.** Example 1 is a 9-element / 8-group design. Ricoh publishes the HD Pentax-DA 35 mm F2.8 Macro Limited as 9 elements in 8 groups, and the same count applies to the earlier smc version.
2. **Aperture.** The patent lists $F_{NO} = 1{:}2.88$ for Example 1. Ricoh markets the lens as f/2.8 with a minimum aperture of f/22. The data file therefore records f/2.8 as the production nominal aperture and 2.88 as the patent design aperture.
3. **Focal length.** Independent paraxial tracing of Example 1 gives $f = 34.41498\ \mathrm{mm}$, matching the patent's $f = 34.41\ \mathrm{mm}$. The production hard spec is the marketed 35 mm.
4. **Image format and field.** The patent aberration plots for Example 1 use $y = 14.24\ \mathrm{mm}$ and list $\omega = 23.4°$. Ricoh publishes a 44° angle of view for the production APS-C K-mount lens. The Ricoh value is treated as the manufacturer hard spec; the patent value is retained as the optical example's reported half-field.
5. **Macro range.** The patent tabulates the surface-13 air space at infinity, -0.5x, and -1.0x. Re-solving the finite conjugates with the patent back focus gives $m \approx -0.9994$ at $d_{13}=24.13\ \mathrm{mm}$ and an object-to-image distance of about 139.0 mm, matching Ricoh's 0.139 m minimum focusing distance and 1.00x maximum magnification.
6. **Focus configuration.** The patent focuses by moving the positive first group and positive second group together toward the object while keeping the negative third group stationary relative to the image plane. That is consistent with the extending-barrel behavior of the production DA 35 mm Macro Limited.
7. **Patent timing and product lineage.** The priority date is April 2007 and the grant date is May 2010, bracketing the 2008 smc DA Limited lens. Ricoh's 2013 HD DA Limited announcement added HD coating and a rounded diaphragm to the Limited series and lists the same 35 mm f/2.8, 9/8, 44°, 0.139 m, and 1.00x optical hard specs.

There remains a bounded embodiment ambiguity. Examples 1, 4, and 6 are all near-34 mm designs; Examples 2, 3, and 5 are near-30.9 mm designs and are too wide to be plausible representatives of a marketed 35 mm APS-C normal macro. Example 4 has a shorter back focal distance than Example 1, and Example 6 is a close variant of Example 1 with small radius and glass substitutions. Because Pentax has not published the production prescription, Example 1 is treated as the representative patent formula rather than asserted as a disclosed production formula.

## Optical Architecture

Example 1 is an all-spherical retrofocus macro organized as positive-positive-negative by group from object to image:

- **Group 10, positive first lens group** (surfaces 1-7, $f_1 = +103.8\ \mathrm{mm}$). It is internally split at the largest air space into sub-group 11 and sub-group 12.
  - **Sub-group 11, negative first sub-lens group** (surfaces 1-4, $f_{1a} = -41.6\ \mathrm{mm}$): a positive meniscus followed by a negative meniscus.
  - **Sub-group 12, positive second sub-lens group** (surfaces 5-7, $f_{1b} = +36.2\ \mathrm{mm}$): a cemented biconvex-plus-biconcave doublet.
- **Diaphragm S**, located in the air space behind group 10. The patent places it 4.425 mm in front of surface 8.
- **Group 20, positive second lens group** (surfaces 8-13, $f_2 = +39.1\ \mathrm{mm}$): a biconcave negative element, a positive meniscus convex to the image, and a biconvex positive element.
- **Group 30, negative third lens group** (surfaces 14-17, $f_3 = -217.8\ \mathrm{mm}$): a near-plano negative element followed by a biconvex positive element.

The moving portion of the optical system is a retrofocus front assembly: negative sub-group 11, positive sub-group 12, and positive group 20. This arrangement supplies the long back focal distance required by an SLR mount while retaining a short normal-macro focal length for APS-C. The rear group is weakly negative and fixed; its role is not to focus but to stabilize close-range spherical aberration and astigmatism while the front assembly advances.

The patent states that the numerical embodiments use no aspherical surfaces. No ED, fluorite, or anomalous-partial-dispersion glass is needed for the design. The chromatic correction is distributed through conventional crowns, flints, dense flints, and lanthanum glasses.

A patent text error should be read as a local slip. In the Example 1 paragraph, the first group is called the "negative first lens group 10" and the third group is called the "positive third lens group 30." The claims, summary, detailed description, and paraxial prescription give the opposite power signs: group 10 is positive and group 30 is negative. The data file follows the prescription and the consistent claim language.

## Element-by-Element Analysis

Element focal lengths below are standalone thick-lens-in-air values computed from the individual element surfaces and patent glass indices. In-situ contribution differs, especially inside the cemented doublet, but the standalone values are useful for element role and shape classification.

### L1 — Positive Meniscus, convex to object

$n_d = 1.80518,\ \nu_d = 25.4.$ Glass: patent code 805254, Hoya FD60 / Schott N-SF6 / Ohara S-TIH6 class. $f = +80.6\ \mathrm{mm}$.

The front element uses a high-index dense flint in a positive meniscus form. Both surface radii are positive, so the element is convex toward the object and weakly concave toward the image. Its main architectural role is to precede the strong negative meniscus L2, giving sub-group 11 the positive-then-negative sequence that the patent specifies for miniaturization and distortion control.

### L2 — Negative Meniscus, convex to object

$n_d = 1.78590,\ \nu_d = 44.2.$ Glass: patent code 786442, Hoya NBFD11 / Ohara S-LAH51 class. $f = -25.4\ \mathrm{mm}$.

L2 is the strong negative element of sub-group 11. Its radii, $R_3 = +26.800\ \mathrm{mm}$ and $R_4 = +11.117\ \mathrm{mm}$, make it a negative meniscus convex to the object, with the smaller-radius concave surface facing the image. That is the distortion-reducing form described in the patent. The Abbe number is below 50, so despite the lanthanum/high-index character it is best treated as a dense lanthanum flint rather than as a crown.

### L3 — Biconvex Positive, cemented front component

$n_d = 1.77250,\ \nu_d = 49.6.$ Glass: patent code 773496, Hoya TAF1 / Ohara S-LAH66 class. $f = +14.4\ \mathrm{mm}$.

L3 is the positive front component of the cemented doublet in sub-group 12. The rear cemented radius, $R_6 = -14.155\ \mathrm{mm}$, is steep, so the element has strong standalone converging power even though the sub-group as a whole is moderated by the negative rear component.

### L4 — Biconcave Negative, cemented rear component

$n_d = 1.54814,\ \nu_d = 45.8.$ Glass: patent code 548458, Hoya E-FEL1 / Ohara S-TIL1 / Schott LLF1 class. $f = -22.1\ \mathrm{mm}$.

L4 is the negative rear component of the cemented doublet. The index step across the cemented interface is large: $\Delta n_d = 1.77250 - 1.54814 = 0.22436$. The patent explicitly prefers a large index difference between the cemented glasses to correct spherical aberration in sub-group 12. The pair is therefore not primarily a classical achromat. Its Abbe numbers, 49.6 and 45.8, are too close for the doublet to be a strong color-balancing element by itself.

### L5 — Biconcave Negative

$n_d = 1.74077,\ \nu_d = 27.8.$ Glass: patent code 741278, Hoya E-FD13 / Ohara S-TIH13 class. $f = -24.3\ \mathrm{mm}$.

L5 is the first element behind the stop and the first element of group 20. It is a dense-flint biconcave negative lens. The patent gives this element a specific function: it reduces spherical aberration that would otherwise arise from the strong rear positive power in the retrofocus front assembly. Its low Abbe number also helps distribute chromatic correction through the rear part of the moving assembly.

### L6 — Positive Meniscus, convex to image

$n_d = 1.62041,\ \nu_d = 60.3.$ Glass: patent code 620603, Hoya BACD16 / Schott N-SK16 / Ohara S-BSM16 class. $f = +39.6\ \mathrm{mm}$.

L6 is a crown-glass positive meniscus with both radii negative, making the crescent convex toward the image. It carries part of group 20's converging power without forcing a single rear positive element to become too strong. The high Abbe number keeps this positive power comparatively low in dispersion.

### L7 — Biconvex Positive

$n_d = 1.74100,\ \nu_d = 52.7.$ Glass: patent code 741527, Hoya TAC2 / Ohara S-LAL61 class. $f = +31.8\ \mathrm{mm}$.

L7 is the rear positive element of the moving front assembly. Its surfaces are symmetric in radius, $+46.415\ \mathrm{mm}$ and $-46.415\ \mathrm{mm}$. It supplies positive power with moderate curvature, and its rear surface bounds the sole variable air space of the focus mechanism.

### L8 — Negative Meniscus / near-plano biconcave element

$n_d = 1.77250,\ \nu_d = 49.6.$ Glass: patent code 773496, Hoya TAF1 / Ohara S-LAH66 class. $f = -43.5\ \mathrm{mm}$.

L8 begins the fixed rear group. The object-side radius is very long, $R_{14} = -265.321\ \mathrm{mm}$, while the image-side radius is $+38.543\ \mathrm{mm}$. Strictly, both surfaces are concave in the sign convention used here, so it is a weak biconcave element; functionally it behaves as the patent's negative meniscus with the active concavity facing the image.

### L9 — Biconvex Positive

$n_d = 1.54814,\ \nu_d = 45.8.$ Glass: patent code 548458, Hoya E-FEL1 / Ohara S-TIL1 / Schott LLF1 class. $f = +56.4\ \mathrm{mm}$.

L9 is the rearmost element and is a symmetric biconvex positive. Paired with the stronger negative L8, it leaves group 30 weakly negative overall. That weak negative rear group remains fixed during focusing and is the design's close-range stabilizing group.

## Glass Identification and Selection

The patent prints refractive index and Abbe number, not vendor glass names. The glass labels below are therefore catalog identifications, not transcribed patent text. Hoya naming is preferred where the match is close because the patent is assigned to Hoya; exact or near-exact equivalents from Ohara, Schott, Hikari, Sumita, and CDGM are used to avoid circular identification.

| Element(s) | Patent code | $n_d$ | $\nu_d$ | Preferred identification | Match note / role |
|---|---:|---:|---:|---|---|
| L1 | 805254 | 1.80518 | 25.4 | FD60 / N-SF6 / S-TIH6 class | Hoya FD60 is listed as 805255; Schott N-SF6 and Ohara S-TIH6 are listed as 805254. Dense flint front meniscus. |
| L2 | 786442 | 1.78590 | 44.2 | NBFD11 / S-LAH51 class | Hoya NBFD11 is listed near 786439; Ohara S-LAH51 and several equivalents list 786442. Dense lanthanum flint negative meniscus. |
| L3, L8 | 773496 | 1.77250 | 49.6 | TAF1 / S-LAH66 class | Exact cross-reference code 773496. Positive doublet component and rear negative element. |
| L4, L9 | 548458 | 1.54814 | 45.8 | E-FEL1 / S-TIL1 / LLF1 class | Exact code 548458. Light flint doublet rear and rear positive element. |
| L5 | 741278 | 1.74077 | 27.8 | E-FD13 / S-TIH13 class | Exact code 741278. Dense flint biconcave corrector behind the stop. |
| L6 | 620603 | 1.62041 | 60.3 | BACD16 / N-SK16 / S-BSM16 class | Exact code 620603. Low-dispersion crown positive meniscus. |
| L7 | 741527 | 1.74100 | 52.7 | TAC2 / S-LAL61 class | Hoya TAC2 is listed as 741526; Ohara S-LAL61 is 741527. Lanthanum crown biconvex positive. |

No glass in the design supports an apochromatic or anomalous-partial-dispersion claim. The design is a conventional achromatic macro with chromatic correction distributed across the dense flints L1 and L5, the higher-Abbe crown L6, the lanthanum crown L7, and the two repeated lanthanum/light-flint glasses used in the cemented and rear groups.

## Focus Mechanism

The lens focuses by rigid front-assembly advance. Groups 10 and 20 move together toward the object, while group 30 remains fixed with respect to the imaging plane. The distance between groups 10 and 20 does not change; the only published focus variable is the air space after surface 13.

| Focus state | Patent magnification | $d_{13}$ (mm) | Front-assembly advance (mm) | Computed magnification | Computed object-to-image distance |
|---|---:|---:|---:|---:|---:|
| Infinity | 0 | 1.00 | 0.00 | approximately 0 | infinity |
| Intermediate | -0.5x | 12.57 | 11.57 | -0.4998x | 161.9 mm |
| Closest | -1.0x | 24.13 | 23.13 | -0.9994x | 139.0 mm |

The close-focus computation is made with the patent back focus and the Example 1 surface table. It independently reproduces the production 0.139 m minimum focusing distance and 1.00x maximum magnification within rounding.

## Conditional Expressions

The patent states three inequalities. The Example 1 values below were recomputed from the prescription rather than copied from the patent's Table 7.

**Condition (1):** $0.32 < d/f < 0.7$

Here $d$ is the air separation between sub-group 11 and sub-group 12, surface 4 to surface 5. For Example 1, $d = 11.89\ \mathrm{mm}$ and $f = 34.41498\ \mathrm{mm}$, so $d/f = 0.34549$. Patent Table 7 rounds this to 0.35.

**Condition (2):** $-10 < f_3/f < -6$

The fixed third group has $f_3 = -217.834\ \mathrm{mm}$. With $f = 34.41498\ \mathrm{mm}$, $f_3/f = -6.32963$. Patent Table 7 gives -6.33.

**Condition (3):** $-0.75 < f_{1b-2}/f_{1a} < -0.55$

The combined focal length of sub-group 12 plus group 20 is $f_{1b-2} = +26.426\ \mathrm{mm}$, and the focal length of negative sub-group 11 is $f_{1a} = -41.558\ \mathrm{mm}$. The ratio is therefore $-0.63588$, matching the patent's rounded -0.64.

## Aberration-Correction Strategy and Design Philosophy

The design solves a combined conjugate and packaging problem. A 1:1 macro must hold correction across a large focus range, while an APS-C SLR normal macro must keep a long enough back focus for the mirror box. The patent's answer is to make the focusing assembly itself a retrofocus system and to hold a weak negative group fixed behind it.

Sub-group 11 supplies the negative front power needed for back focus. Its positive-then-negative element sequence is not incidental: the patent describes the negative meniscus shape as a way to reduce negative distortion and keep the spacing to the preceding positive element short. Sub-group 12 then restores positive power and uses a steep, high-index-step cemented interface as a spherical-aberration correction surface.

Group 20 splits positive power across two positive elements and places a biconcave negative element ahead of them. This is the specific corrective structure the patent identifies for reducing the spherical aberration otherwise generated by the strong rear positive power in the moving retrofocus assembly.

Group 30 is the close-focus stabilizer. Because it is fixed while the front assembly moves by about 23 mm, the ray bundle changes at the rear group as magnification increases. The weak negative rear pair is used to control spherical aberration and astigmatism at close range without a multi-group floating mechanism.

A surface-by-surface Petzval calculation, using $\sum \varphi/(n n')$, gives $+0.004196\ \mathrm{mm}^{-1}$, corresponding to a Petzval radius of about $-238.3\ \mathrm{mm}$. This is a computed diagnostic rather than a patent-stated value. The negative Petzval contributions are distributed mainly through L2, L4, and L5 rather than concentrated in a single field-flattening element.

## Data-File Implementation Notes

The data file transcribes Example 1 at patent scale. The final surface distance is the patent back focal distance, $f_B = 38.72\ \mathrm{mm}$. No sensor cover glass is included.

The patent places the aperture stop 4.425 mm in front of surface 8, so the original surface-7-to-surface-8 air space of 8.43 mm is split into $d_7 = 4.005\ \mathrm{mm}$ and $d_{STO} = 4.425\ \mathrm{mm}$. The physical stop semi-diameter used in the data file is 6.86 mm, computed from the patent F-number by tracing the paraxial entrance pupil.

The variable gap is stored as `"13": [1.00, 24.13]`, matching the patent's infinity and -1.0x entries. The -0.5x value, 12.57 mm, is documented in the analysis but not encoded in the two-endpoint focus slider.

Semi-diameters are inferred because the patent does not list them. The selected values preserve the published ray geometry closely enough for visualization while satisfying renderer limitations at the small-radius surfaces and narrow air gaps. These values should not be read as manufacturer-published clear apertures.

## Verification Summary

| Quantity | Independently computed | Patent / manufacturer value |
|---|---:|---:|
| System EFL at infinity | 34.41498 mm | 34.41 mm |
| Back focal distance | 38.729 mm paraxial / 38.72 mm stored | 38.72 mm |
| Patent design F-number | 2.88 | 1:2.88 |
| Stop semi-diameter for 1:2.88 | 6.862 mm | derived from patent FNO |
| Group 10 focal length | +103.80 mm | positive first group |
| Sub-group 11 focal length | -41.56 mm | negative first sub-lens group |
| Sub-group 12 focal length | +36.16 mm | positive second sub-lens group |
| Group 20 focal length | +39.10 mm | positive second group |
| Group 30 focal length | -217.83 mm | negative third group |
| Condition (1), $d/f$ | 0.34549 | 0.35 |
| Condition (2), $f_3/f$ | -6.32963 | -6.33 |
| Condition (3), $f_{1b-2}/f_{1a}$ | -0.63588 | -0.64 |
| Close-focus magnification at $d_{13}=24.13$ | -0.9994x | -1.0x / 1.00x |
| Close-focus object-to-image distance | 138.99 mm | 0.139 m MFD |
| Petzval sum | +0.004196 mm$^{-1}$ | computed diagnostic |

## Design Heritage and Context

The patent contrasts its approach with three prior macro strategies: floating-element macros, mechanically simpler designs that degrade beyond about -1/10x, and retrofocus macro approaches that either become hard to center or risk internal collision at high magnification. The Example 1 architecture combines a single moving focusing assembly with a fixed rear correction group. In product terms, that yields a compact APS-C normal macro that reaches life size while retaining the SLR back focus demanded by the K mount.

The HD Pentax-DA 35 mm F2.8 Macro Limited introduced in 2013 is best treated as an optical continuation of the smc DA Limited formula with updated coating and diaphragm presentation, not as a separate prescription in this analysis.

## Sources and References

- US 7,715,118 B2, "Macro Lens System," Koji Kato, Hoya Corporation; filed April 4, 2008, priority JP 2007-101302, granted May 11, 2010. Example 1, Table 1, Table 7, FIGS. 1-3, claims 1-9, and the detailed description supply the optical prescription, focus mechanism, and conditional expressions.
- Ricoh Imaging Americas, "HD PENTAX DA 35mm F2.8 Macro Limited," current product specifications.
- Ricoh Imaging Company, Ltd., "Five HD PENTAX-DA Limited interchangeable lenses for K-mount lens-interchangeable digital cameras, featuring high-grade HD coating and round-shaped diaphragm," August 28, 2013.
- Hoya Group Optics Division, "Glass Cross Reference Index," used for Hoya, Schott, Ohara, Hikari, Sumita, and CDGM glass-code cross-checks.
