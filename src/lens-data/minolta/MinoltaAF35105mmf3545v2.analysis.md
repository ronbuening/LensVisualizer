# Minolta AF 35-105mm f/3.5-4.5 New (v2) - US 4,871,239 Example 3

## Patent Reference and Design Identification

**Patent:** US 4,871,239
**Inventors:** Hisayuki Masumoto, Akira Fukushima
**Assignee:** Minolta Camera Kabushiki Kaisha
**Priority:** JP September 9, 1986 and JP October 29, 1986
**Filed:** September 9, 1987
**Granted:** October 3, 1989
**Title:** Zoom Lens System for Minimal Lens System Length and Minimal Aberrations
**Embodiment analyzed:** Example 3 / Embodiment 3

The relevant first-party technical source is US Patent 4,871,239, **"Zoom Lens System for Minimal Lens System Length and Minimal Aberrations"**, assigned to Minolta Camera Kabushiki Kaisha. The named inventors are Hisayuki Masumoto and Akira Fukushima. The US application was filed on 9 September 1987, with Japanese priorities of 9 September 1986 and 29 October 1986, and the patent issued on 3 October 1989.

This document analyzes **Example 3 / Embodiment 3**, which appears as Table 3 in the specification and again as claim 29. Claim 29 gives the design as **f = 36.0-60.0-102.0 mm**, **FNo = 3.6-4.2-4.65**, and **2ω = 61.93°-39.60°-23.91°**. Those values are the patent-scale counterpart of the marketed **Minolta AF 35-105mm f/3.5-4.5 New / RS / v2** normal zoom. The later Certificate of Correction removes several other embodiments and makes text/table corrections elsewhere, but it does not supply a corrected printed value for the Example 3 wide-angle d13 entry; the d13 correction used here is therefore a numerical reconstruction rather than an issued textual correction.

The production identification is not based on one explicit statement in the patent. It is a convergence of several data points:

1. The patent focal-length range, design aperture range, and 35 mm full-frame field angle match a 35-105 mm f/3.5-4.5 A-mount normal zoom.
2. The production lens is documented as a 12-element, 10-group 35-105 mm f/3.5-4.5 zoom with a 55 mm filter thread and 0.85 m closest focusing distance. The patent prescription contains 13 optical media, but one medium is a **0.035 mm** layer at the rear aspheric surface. Treating that layer as a thin hybrid or bonded aspheric layer reconciles the patent prescription with the production-style 12-element count.
3. The patent architecture is a compact positive-negative-positive SLR zoom with a rear-unit aspheric surface and rear-group focusing, which is the correct design class for the late-1980s Minolta AF 35-105mm f/3.5-4.5 New.
4. The patent date fits the release period of the revised 35-105mm AF zoom.

No Minolta designer interview or surviving first-party Minolta optical-glass disclosure located in this review identified the internal glass trade names or the manufacturing process used for the aspheric surface. The glass discussion therefore distinguishes between exact public catalog matches, class matches, and unresolved patent-only glass codes.

## Optical Architecture

Example 3 is a compact 35 mm SLR zoom of the **positive-negative-positive** type. It consists of:

- **Group I**, positive: L1-L3, surfaces r1-r5.
- **Group II**, negative: L4-L7, surfaces r6-r13.
- **Group III**, positive: L8-L13, surfaces r14-r23.
- **Group III-F**, the front unit of Group III: L8-L10, surfaces r14-r18.
- **Group III-B**, the rear unit of Group III: L11-L13, surfaces r19-r23.

The paraxial group powers computed from the corrected Example 3 prescription are:

| Assembly | Surfaces | Standalone paraxial EFL |
|---|---:|---:|
| Group I | r1-r5 | +63.69 mm |
| Group II | r6-r13 | -16.95 mm |
| Group III at wide | r14-r23 | +24.17 mm |
| Group III-F | r14-r18 | +34.69 mm |
| Group III-B | r19-r23 | +62.20 mm |

Group II is the negative variator. Group I is the positive front collector. Group III is the positive rear relay and the focusing group. The patent emphasizes that the front and rear units of Group III move relative to each other during zooming: the air gap **d18** between III-F and III-B decreases from wide to tele. That narrowing of the third group's internal spacing is one of the design's field-curvature correction mechanisms.

The zoom-only variable spacings used in the corrected model are:

| Gap | Meaning | Wide | Mid | Tele |
|---|---|---:|---:|---:|
| d5 | Group I to Group II | 0.900 mm | 9.586 mm | 17.809 mm |
| d13 | Group II to Group III-F | 15.505 mm | 8.926 mm | 2.360 mm |
| d18 | Group III-F to Group III-B | 4.673 mm | 2.566 mm | 0.909 mm |

The printed claim table reads **d13 = 5.505 mm** at the shortest focal length. That value cannot be used as an optical prescription value. A paraxial trace with the printed 5.505 mm gap gives an effective focal length of **74.636 mm**, not the patent-stated 36.0 mm. Replacing it with **15.505 mm** gives **35.998 mm** and also reproduces the patent's condition value **f3w/fw = 0.671**. The error is consistent with a dropped leading digit in the printed wide-angle d13 value.

The same correction explains the otherwise puzzling final patent entry **d = 66.067-66.067-66.067**. After changing wide-angle d13 from 5.505 mm to 15.505 mm, the axial distance from the first surface to the final refracting surface at the wide setting is **66.068 mm**, essentially the printed 66.067 mm value. The final patent entry is therefore best interpreted as a constant construction length to the final surface, not as the final-surface-to-image back focal distance. The data file uses the computed paraxial back focal distances instead.

## Element-by-Element Analysis

The element focal lengths below are standalone in-air paraxial focal lengths computed from the patent radii, center thicknesses, and d-line refractive indices. They are useful for identifying element power and shape. They should not be confused with each element's in-situ contribution inside a cemented pair or zoom group.

### L1 - Negative Meniscus, convex to object

`nd = 1.84666, νd = 23.83. Glass: SF57-class dense flint; exact Schott SF57 catalog match, production vendor unproven. f = -85.5 mm.`

L1 is the front negative member of the first cemented component. Its high index and very low Abbe number make it a dense flint. In isolation it is a negative meniscus; in the cemented pair with L2 it supplies the dispersive counter-power needed to control axial and lateral color in the front positive group.

The first surface is weakly convex and the cemented rear surface is much stronger. L1 is therefore a controlled negative corrector rather than the main front collector. Its role is to keep the front group compact while allowing L2 and L3 to provide the positive power.

### L2 - Biconvex Positive

`nd = 1.67000, νd = 57.07. Glass: unresolved 670/571 high-index crown or lanthanum-crown class. f = +59.4 mm.`

L2 is the main positive component in the front cemented doublet. It carries positive power with relatively low dispersion while L1 supplies the flint partner. The cemented L1/L2 doublet is only weakly positive as a standalone component, with a computed EFL of about **+195.8 mm**, showing that it is primarily an achromatizing and aberration-shaping component rather than a simple strong collector.

### L3 - Positive Meniscus, convex to object

`nd = 1.69680, νd = 56.47. Glass: unresolved 697/565 high-index crown or lanthanum-crown class. f = +93.5 mm.`

L3 is a positive meniscus placed behind the front doublet. It strengthens Group I while keeping the surface curvatures moderate. Because it is air-spaced from the cemented doublet, it gives the designer an additional control for balancing spherical aberration and off-axis astigmatism before the beam enters the negative variator.

### L4 - Strong Negative Meniscus, convex to object

`nd = 1.77250, νd = 49.77. Glass: unresolved 773/498 dense lanthanum-flint or crown/flint-boundary class. f = -24.1 mm.`

L4 is the first and strongest element in Group II, the negative variator group. Its short negative focal length is a major contributor to the zoom ratio. The high index permits strong negative power without forcing both surfaces to extremely small radii.

Although its Abbe number is near the crown/flint boundary, the element should be treated as flint-like in this optical role. It works with L5, L6, and L7 to distribute the negative variator power over several surfaces so that distortion, lateral color, and field curvature remain controllable across the zoom range.

### L5 - Nearly Plano-Concave Negative

`nd = 1.67000, νd = 57.07. Glass: unresolved 670/571 high-index crown or lanthanum-crown class. f = -50.5 mm.`

L5 is a weaker negative element in Group II. Its first surface, r8 = -1357.755 mm, is almost plane in paraxial effect, so the element behaves as a nearly plano-concave negative lens. It continues the negative action of the variator with less power than L4.

Because L5 is air-spaced between L4 and L6, Group II distributes power over a longer axial interval instead of compressing it into one strong negative cell. That is useful in a zoom where the off-axis chief rays pass through the negative group at changing heights.

### L6 - Positive Meniscus, dense flint

`nd = 1.84666, νd = 23.83. Glass: SF57-class dense flint; exact Schott SF57 catalog match, production vendor unproven. f = +28.0 mm.`

L6 is a strong positive element inside the negative second group. The dense-flint dispersion appears unusual for a positive element, but it is useful for chromatic balancing: Group II can remain net negative while using L6 to moderate color errors introduced by the surrounding negative components.

The element forms an internal negative-positive-negative correction sequence with L5 and L7. Its strong positive front surface also helps shape the beam entering the rear side of the variator.

### L7 - Biconcave Negative

`nd = 1.61800, νd = 63.39. Glass: N-PSK53A-class high-Abbe crown; exact Schott N-PSK53A catalog match, production vendor unproven. f = -34.8 mm.`

L7 closes Group II with a high-Abbe negative element. It is biconcave in paraxial form and is separated from Group III by the large variable d13 gap.

Its high Abbe number keeps the trailing negative power of Group II from adding excessive secondary color. It also helps shape the exit pupil and manages distortion as the beam transitions into the rear positive group.

### L8 - Biconvex Positive

`nd = 1.67000, νd = 57.07. Glass: unresolved 670/571 high-index crown or lanthanum-crown class. f = +27.6 mm.`

L8 is the first element of Group III-F. It is a strong positive biconvex relay element immediately behind the aperture region. It reconverges the beam after the negative variator and establishes much of Group III's positive power.

Its glass selection is consistent with a high-index, high-Abbe crown that can carry positive power without becoming the main chromatic error source.

### L9 - Biconvex Positive, front element of cemented pair

`nd = 1.51680, νd = 64.20. Glass: BK7/BSC7/H-K9L-class borosilicate crown. f = +21.4 mm.`

L9 is a strong positive crown element cemented to L10. Its low index and high Abbe number are consistent with BK7-family borosilicate crown glass. By itself it is strong; in the cemented doublet, however, it is deliberately countered by the high-index negative L10.

The L9/L10 cemented pair is slightly negative as a standalone component, with a computed EFL of about **-78.9 mm**. That confirms that the pair is primarily a correction cell rather than a simple positive relay element.

### L10 - Biconcave Negative, rear element of cemented pair

`nd = 1.80741, νd = 31.59. Glass: unresolved 807/316 high-index dense-flint class. f = -15.7 mm.`

L10 is the flint member of the L9/L10 cemented doublet. It has very strong negative power and high dispersion. It offsets L9's strong positive power and helps suppress chromatic and spherical-aberration residuals inside Group III-F.

The high index keeps the negative curvatures compact, which matters in a short rear relay group.

### L11 - Biconvex Positive

`nd = 1.72000, νd = 42.02. Glass: unresolved 720/420 lanthanum-flint / LAM-class high-index glass. f = +22.7 mm.`

L11 is the positive front member of Group III-B. It forms the positive portion of the rear unit's telephoto-like positive-negative arrangement.

This element is important to both focusing and compactness. Group III-B participates in the rear focusing operation described by the patent, and L11 provides the converging action that lets the following rear negative component correct field and coma without making the rear unit negative as a whole.

### L12 - Thin Aspheric Layer

`nd = 1.51790, νd = 52.31. Glass: thin hybrid/composite aspheric layer, code 518/523; bulk catalog identity not assigned. f = +379.6 mm in air, not physically meaningful as a separate thick lens.`

L12 is only **0.035 mm** thick and carries the aspheric surface r21. It is best modeled as a thin bonded or hybrid aspheric layer on the front of the rear negative component. The patent gives the optical medium and its index, but it does not name the manufacturing method.

The paraxial power of this layer alone is weak. Its purpose is to place the aspheric departure at a high-leverage rear-unit position where off-axis rays and high-order spherical-aberration terms are significant.

### L13 - Rear Negative Meniscus / Weak Plano-Concave Element

`nd = 1.80500, νd = 40.97. Glass: unresolved 805/410 dense lanthanum-flint / LASF-class glass. f = -27.1 mm.`

L13 is the final powered body of the lens. Together with the thin L12 layer, it forms the negative component of Group III-B. The element has a strong negative front region and a very weak rear curvature at r23 = 503.492 mm.

The patent's general description states that the rear unit preferably uses a positive component followed by a negative component. In Example 3, L11 supplies the positive component and L12/L13 form the rear negative component. This shortens the back part of the optical system while preserving enough image-side distance for a 35 mm SLR mirror box.

## Glass Identification and Selection

The patent gives refractive index and Abbe number, not glass trade names. Exact vendor assignments are made only where a public manufacturer catalog gives an exact match. A match to Schott or another catalog does **not** prove that Minolta used that supplier in production.

| Element(s) | Patent nd / νd | Six-digit code | Identification used here | Role |
|---|---:|---:|---|---|
| L1, L6 | 1.84666 / 23.83 | 847/238 | SF57-class dense flint; exact Schott SF57 match | High-index, high-dispersion flint for front achromat and Group II chromatic balance |
| L2, L5, L8 | 1.67000 / 57.07 | 670/571 | Unresolved high-index crown / lanthanum-crown class | Positive power and moderate negative corrective power |
| L3 | 1.69680 / 56.47 | 697/565 | Unresolved high-index crown / lanthanum-crown class | Additional front-group positive power |
| L4 | 1.77250 / 49.77 | 773/498 | Unresolved dense lanthanum-flint or crown/flint-boundary class | Strong negative variator power |
| L7 | 1.61800 / 63.39 | 618/634 | N-PSK53A-class high-Abbe crown; exact Schott N-PSK53A match | High-Abbe negative corrector at rear of Group II |
| L9 | 1.51680 / 64.20 | 517/642 | BK7-family borosilicate crown | Low-dispersion positive member of the Group III-F doublet |
| L10 | 1.80741 / 31.59 | 807/316 | Unresolved high-index dense flint | Strong negative cemented partner to L9 |
| L11 | 1.72000 / 42.02 | 720/420 | Unresolved lanthanum-flint / LAM-class high-index glass | Positive front member of rear unit |
| L12 | 1.51790 / 52.31 | 518/523 | Thin hybrid/composite aspheric layer | Carries the r21 aspheric departure |
| L13 | 1.80500 / 40.97 | 805/410 | Unresolved dense lanthanum-flint / LASF-class glass | Rear negative component and field/coma control |

The palette is typical of a compact late-1980s zoom: high-index dense flints are used where strong corrective power is needed, high-Abbe crowns restrain color, and lanthanum-type glasses carry compact positive power. The patent gives no basis for claiming ED, anomalous partial dispersion, fluorite, or apochromatic behavior.

## Focus Mechanism

The patent identifies the focusing group clearly. The front and rear units of the third lens group, **III-F and III-B**, are shifted toward the image side when focusing from infinity to a close object. In Example 3, that means the focusing optical set is:

- **III-F:** L8, L9, L10; surfaces r14-r18.
- **III-B:** L11, L12, L13; surfaces r19-r23.

The patent also states that the rear unit III-B should move in the same direction as III-F, and that moving the rear unit integrally with the front unit is desirable for a simpler barrel mechanism. The prescription table does not publish close-focus spacing values for Example 3, so the exact close-focus stroke cannot be recovered from the patent alone.

The data file therefore models the patent's infinity prescription and zoom motion. It does **not** fabricate a close-focus endpoint. Its focus variable entries use identical infinity and close values to preserve the zoom layout while documenting that the true close-focus mechanical stroke is unavailable.

## Aspherical Surface

Example 3 has **one aspherical surface**, surface **r21**, on the object-side face of the thin L12 layer bonded to the rear negative component. In the data file this surface is labeled **21A**.

The patent writes the aspheric sag as a spherical base plus even-order polynomial terms. No separate conic constant is listed for Example 3. In the standard project convention this is treated as **K = 0**, with the polynomial terms below.

| Surface | R | K | A4 | A6 | A8 | A10 | A12 |
|---|---:|---:|---:|---:|---:|---:|---:|
| r21 / 21A | -25.806 mm | 0 | -6.6020e-5 | -5.2200e-8 | -6.4384e-9 | -1.1612e-10 | -8.4797e-13 |

The negative coefficients on this rear-unit surface increase the departure in the direction that weakens the peripheral effect of the spherical base under the project's sign convention. Functionally, the surface controls high-order spherical aberration and sagittal flare while also helping the rear unit manage field curvature and coma.

The patent does not state whether the asphere was molded glass, polished glass, or a hybrid/composite layer. The extremely small 0.035 mm medium thickness and separate refractive index make the hybrid/bonded-layer interpretation the most plausible data-model representation, but it remains an inference from the prescription pattern rather than a manufacturing claim.

## Verification Summary

The corrected prescription was re-traced independently with a paraxial ABCD / y-nu ray trace. The following values were obtained:

| Zoom position | Patent f | Computed EFL | Computed BFL from r23 |
|---|---:|---:|---:|
| Wide | 36.0 mm | 35.998 mm | 36.767 mm |
| Mid | 60.0 mm | 59.997 mm | 45.362 mm |
| Tele | 102.0 mm | 101.996 mm | 53.435 mm |

The patent's condition values are also reproduced:

| Quantity | Patent value | Computed value |
|---|---:|---:|
| f3w / fw | 0.671 | 0.67125 |
| Δd3 / fw | 0.105 | 0.10456 |
| fw / f3B | 0.579 | 0.57882 |
| (T3-B + Bw - fw) / fw | 0.256 | 0.25574 |

The surface-by-surface Petzval sum, computed as φ/(n n'), is approximately **+0.002160 mm^-1** for the whole prescription. Under the sign convention used in the trace, this corresponds to a Petzval radius of about **-463 mm**. The small magnitude is consistent with the patent's emphasis on controlling field curvature through Group III's internal spacing rather than through a simple static field-flattener element alone.

## Data Model Notes

The `.data.ts` file intentionally differs from a literal print transcription in three places:

1. The wide-angle d13 value is corrected from printed **5.505 mm** to **15.505 mm** because the printed value fails the patent focal length and condition checks.
2. The printed final **d = 66.067 mm** is treated as the wide-position construction length from r1 to r23, not as the image-side back focal distance. The data file uses the computed BFL values as the final surface-to-image distance.
3. The patent table does not provide an aperture stop row for Example 3. The data file inserts `STO` in the d13 gap, **1.0 mm before r14**, and splits d13 accordingly. This follows the schematic stop position immediately before Group III-F and keeps the total corrected r13-to-r14 gap unchanged.

Semi-diameters in the data file are inferred, not patent-published clear apertures. They were constrained by the 35 mm image field, by marginal/chief-ray envelopes, by edge-thickness checks, and by cross-gap sag intrusion limits. The resulting values are rendering apertures suitable for LensVisualizer, not manufacturer mechanical aperture specifications.

## Sources

Primary source:

- US Patent 4,871,239, *Zoom Lens System for Minimal Lens System Length and Minimal Aberrations*, Minolta Camera Kabushiki Kaisha, issued 3 October 1989. Relevant portions: Table 3 / claim 29, claim 30, Figure 3, and the issued Certificate of Correction.

Production-identification references used only as corroborating sources:

- Minolta, *AF Zoom Lenses Instruction Manual* scan, 35-105mm f/3.5-4.5 specifications.
- LensTip, *Konica Minolta AF 35-105 mm f/3.5-4.5 N - lens specifications*.
- Kamerastore, *Minolta 35-105mm f/3.5-4.5 AF Zoom (RS)*.

Glass-catalog references consulted for class matching:

- SCHOTT, *Optical Glass Datasheet SF57*.
- SCHOTT, *Optical Glass Datasheet N-PSK53A*.
- SCHOTT, *Optical Glass Datasheet N-BK7*.
- OHARA, HOYA, HIKARI, CDGM, and Sumita public catalog data for non-exact class comparisons.
