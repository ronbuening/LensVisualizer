# Nikon AF-S NIKKOR 24-120mm f/4G ED VR — Optical Analysis

**Patent:** US 2010/0220400 A1
**Application Number:** 12/695,327; priorities JP 2009-019331 and JP 2009-019334, both filed Jan. 30, 2009
**Filed:** Jan. 28, 2010
**Published:** Sep. 2, 2010
**Inventors:** Hiroshi Yamamoto, Satoshi Miwa, Takeshi Suzuki, Haruo Sato
**Assignee:** Nikon Corporation
**Title:** Zoom Lens, Optical Apparatus Equipped Therewith and Method for Manufacturing the Zoom Lens
**Embodiment analyzed:** Example 1, Table 1 and Figs. 1–3

## Patent Reference and Design Identification

The production lens identified here is the Nikon AF-S NIKKOR 24-120mm f/4G ED VR, model 2193. The patent presents four worked examples. Example 1 is the embodiment that aligns with the production constant-aperture FX 24-120mm f/4 lens; Examples 2–4 are separate higher-ratio or smaller-format designs in the same application.

The identification rests on convergent evidence.

1. **Constant maximum aperture.** Example 1 lists FNO = 4.12 / 4.13 / 4.14 from wide to telephoto. The other examples are variable-aperture designs: 3.57–5.96, 3.63–5.84, and 3.58–5.89.
2. **Focal-length range.** Example 1 gives f = 24.70 / 45.75 / 116.39 mm, matching the marketed 24-120 mm range after normal production rounding.
3. **Image circle.** Example 1 lists IH = 21.6 mm, a 43.2 mm full-frame image circle. Examples 3 and 4 list IH = 14.5 mm and are APS-C/DX-class examples.
4. **Element and group count.** Example 1 resolves to 17 glass elements in 13 air-separated groups, matching Nikon's published optical construction.
5. **Special-element count.** Example 1 contains three aspherical surfaces on three separate elements: surface 6 on L21, surface 13 on L24, and surface 27 on L51. Its two likely ED elements are the J-PSKH1/S-FPM2-class anomalous-dispersion crowns at L12 and L34, matching Nikon's published count of two ED elements and three aspherical elements.
6. **Focus and stabilization arrangement.** Paragraph 0084 states that focusing is by moving G2 object-ward and that vibration reduction is performed by decentering the cemented negative component in G4. This matches the production lens's internal-focus and VR architecture.
7. **Timing.** The Japanese priority filings in Jan. 2009, the U.S. filing in Jan. 2010, and the Sep. 2010 publication bracket the production lens's 2010 release window.

Where manufacturer specifications and patent values differ, Nikon's published specifications govern hard product specifications. The patent values describe the design embodiment, not necessarily the rounded marketed lens.

| Hard spec | Nikon official specification | Example 1 design value |
|---|---:|---:|
| Focal length | 24-120 mm | 24.70-116.39 mm |
| Maximum aperture | f/4 constant; minimum f/22 | FNO 4.12-4.14 |
| Construction | 17 elements / 13 groups | 17 elements / 13 groups |
| Special elements | 2 ED, 3 aspherical | 2 inferred ED, 3 aspherical surfaces |
| FX picture angle | 84°-20°20′ | 2ω = 85.24°-20.28° |
| Minimum focus distance | 0.45 m | patent close table is a characterization state |
| Maximum reproduction ratio | 0.24× | not reached by the patent close table |
| Diaphragm | 9 rounded blades | aperture stop in G3 |
| Filter size | 77 mm | not specified in the patent |
| Stabilization | VR II | decentering cemented negative component in G4 |

## Optical Architecture

Example 1 is a five-group positive-negative-positive-negative-positive zoom for a full-frame SLR. The first group is positive, the second group is a negative variator and focus group, and the rear group is subdivided into G3 positive, G4 negative, and G5 positive. This is a positive-lead high-ratio standard-zoom layout rather than a retrofocus wide-angle or a true telephoto design.

Independent paraxial tracing of the prescription reproduces the patent's group focal lengths within rounding tolerance.

| Group | First surface | Focal length | Function |
|---|---:|---:|---|
| G1 | 1 | +106.848 mm | Front collector and chromatic pre-corrector |
| G2 | 6 | −17.844 mm | Variator and inner-focus group |
| G3 | 14 | +25.331 mm | Positive relay group carrying the aperture stop |
| G4 | 22 | −30.712 mm | Negative stabilization group; includes the VR doublet |
| G5 | 27 | +45.007 mm | Rear positive imaging group |

The group distribution is 3 / 4 / 4 / 3 / 3 elements. Counting cemented pairs as one air-separated component, the lens has 13 groups: two in G1, four in G2, three in G3, two in G4, and two in G5.

The four inter-group air gaps change as follows at infinity focus:

| Gap | Between | Wide | Middle | Telephoto | Motion from wide to telephoto |
|---|---|---:|---:|---:|---|
| d1 | G1-G2 | 2.899 | 17.248 | 44.501 | increases |
| d2 | G2-G3 | 24.017 | 11.369 | 1.199 | decreases |
| d3 | G3-G4 | 1.779 | 5.564 | 8.842 | increases |
| d4 | G4-G5 | 8.342 | 4.578 | 1.300 | decreases |

The patent states this same first-order kinematic rule: G1-G2 increases, G2-rear group decreases, and, in the five-group form, G3-G4 increases while G4-G5 decreases during zooming from wide to telephoto.

## Element-by-Element Analysis

### L11 — Negative Meniscus, convex to object

nd = 1.84666, νd = 23.77. Glass: S-TIH53 (OHARA dense flint). f = −168.71 mm.

L11 is the high-index, high-dispersion front member of the leading cemented doublet. Its meniscus bend is set by two positive radii, so it is convex to the object and concave to the cemented interface. In isolation it is a negative element; in the cemented pair it supplies the dispersive power needed to control the positive crown behind it.

### L12 — Biconvex Positive, inferred ED

nd = 1.593189, νd = 67.87. Glass: HIKARI J-PSKH1 / S-FPM2-class anomalous phosphate crown. f = +134.77 mm.

L12 is the positive low-dispersion partner in the front cemented doublet. The L11-L12 doublet has only weak net positive power, about +680 mm, so its main purpose is chromatic balancing at a location where ray heights are large, not strong convergence. HIKARI's J-PSKH1 data list ΔPgF = +0.0135, which makes this the first of the two inferred ED elements.

### L13 — Positive Meniscus, convex to object

nd = 1.75500, νd = 52.29. Glass: S-LAH97 (OHARA lanthanum crown). f = +125.94 mm.

L13 is the air-spaced positive element completing G1. Its positive power supplies most of the front group's converging action, while the preceding cemented pair moderates color and high-order aberrations before the negative variator.

### L21 — Negative Meniscus with object-side asphere

nd = 1.81600, νd = 46.63. Glass: S-LAH59 (OHARA lanthanum dense crown). f = −19.71 mm.

L21 is the strongly negative leading element of G2. It has a very weakly curved object-side base radius and a strongly curved image-side surface. The object-side asphere at surface 6 is explicitly favored by the patent for correction of wide-angle field curvature and distortion.

### L22 — Negative Meniscus, concave to object

nd = 1.79500, νd = 45.30. Glass: HIKARI J-LASF017 lanthanum dense flint. f = −68.66 mm.

L22 is the negative lens immediately object-side of the strongest positive lens in G2. Its two negative radii form the shape term in conditional expression (1). The element is weak by itself but important to the balance between wide-angle coma and telephoto spherical aberration.

### L23 — Biconvex Positive

nd = 1.84666, νd = 23.77. Glass: S-TIH53 (OHARA dense flint). f = +25.89 mm.

L23 is the sole positive singlet in G2 and the strongest positive component in the negative variator. Its dense-flint glass balances the negative elements surrounding it and helps keep the G2 group compact while maintaining the required zoom ratio.

### L24 — Biconcave Negative with image-side asphere

nd = 1.80610, νd = 40.94. Glass: S-LAH53 (OHARA lanthanum flint). f = −34.65 mm.

L24 is the rear negative element of G2. Its image-side surface is nearly flat and aspherical. Paragraph 0061 identifies the most image-side G2 surface as a preferred location for correcting telephoto spherical aberration, which is exactly the function of surface 13 here.

### L31 — Biconvex Positive

nd = 1.75500, νd = 52.29. Glass: S-LAH97 (OHARA lanthanum crown). f = +63.93 mm.

L31 is the first element of the positive relay group. It sits immediately object-side of the aperture stop and begins the relay convergence after the negative variator.

### L32 — Negative Meniscus, convex to object

nd = 1.84666, νd = 23.77. Glass: S-TIH53 (OHARA dense flint). f = −50.63 mm.

L32 is the negative member of the G3 cemented doublet. Its high dispersion makes it the achromatizing partner to the fluor-crown positive element behind it.

### L33 — Biconvex Positive

nd = 1.48749, νd = 70.45. Glass: FC5 / N-FK5-class fluor-crown. f = +29.93 mm.

L33 is the positive low-dispersion member of the G3 cemented doublet. The doublet focal length is about +79.09 mm. The patent's stored νd is closer to the HOYA/SCHOTT FK5-class value than to the OHARA S-FSL5 listing, so the safer description is FK5-class fluor-crown rather than a single-vendor OHARA assignment.

### L34 — Biconvex Positive, inferred ED

nd = 1.593189, νd = 67.87. Glass: HIKARI J-PSKH1 / S-FPM2-class anomalous phosphate crown. f = +64.94 mm.

L34 is the rear positive singlet of G3 and the second inferred ED element. Its role is chromatic correction in the relay group, not apochromatic correction of the whole lens. The patent does not name this element as ED; the assignment follows from the glass's anomalous partial dispersion and Nikon's published count of two ED elements.

### L41 — Positive Meniscus, concave to object

nd = 1.85026, νd = 32.35. Glass: HIKARI J-LASF021 lanthanum dense flint. f = +28.08 mm.

L41 is the positive front member of the cemented negative VR component. Both radii are negative, so the element is concave to the object. Its high index helps keep the stabilization component compact.

### L42 — Biconcave Negative

nd = 1.75500, νd = 52.29. Glass: S-LAH97 (OHARA lanthanum crown). f = −18.78 mm.

L42 is the stronger negative member of the G4 cemented component. The L41-L42 pair has net focal length about −52.53 mm and is the component the patent identifies for vibration reduction by decentering.

### L43 — Negative Meniscus, concave to object

nd = 1.71300, νd = 53.89. Glass: S-LAL8 (OHARA lanthanum crown). f = −80.74 mm.

L43 is a weak negative singlet completing G4. It separates the decentering cemented component from the rear imaging group and contributes to the net negative power of G4.

### L51 — Biconvex Positive with object-side asphere

nd = 1.58913, νd = 61.18. Glass: S-BAL35 (OHARA barium crown). f = +32.93 mm.

L51 is the strong positive lead element of G5. Its object-side asphere is not singled out in the patent prose, but its position and power make it a logical corrector for residual spherical aberration and coma in the exit cone.

### L52 — Positive Meniscus, concave to object

nd = 1.48749, νd = 70.45. Glass: FC5 / N-FK5-class fluor-crown. f = +44.40 mm.

L52 is the low-dispersion positive member of the final cemented pair. Its object-side surface is concave to the object in the prescription. This conflicts with the patent prose's phrase describing the final pair as a cemented positive lens, because the numerical prescription gives the pair weak negative net power.

### L53 — Negative Meniscus, concave to object

nd = 1.85026, νd = 32.35. Glass: HIKARI J-LASF021 lanthanum dense flint. f = −32.10 mm.

L53 is the high-index dispersive rear member of the final cemented pair. The L52-L53 pair computes to approximately −109.95 mm, not positive. The analysis therefore follows the prescription rather than the contradictory prose label.

## Glass Identification and Selection

Glass identifications were checked against manufacturer catalog values by six-digit nd/νd code and by nearest available public catalog entry. Where a patent code matches several cross-vendor equivalents, the table favors the closest optical match and labels non-unique cases as a class.

| Prescription nd / νd | Elements | Catalog assignment | Residual note | Role |
|---|---|---|---|---|
| 1.84666 / 23.77 | L11, L23, L32 | S-TIH53, OHARA | catalog νd 23.78 | dense flint achromatizing partner |
| 1.593189 / 67.87 | L12, L34 | J-PSKH1, HIKARI; S-FPM2-class | HIKARI nd exact, νd within 0.03 | anomalous-dispersion ED crown |
| 1.75500 / 52.29 | L13, L31, L42 | S-LAH97, OHARA | catalog νd about 52.32 | lanthanum crown |
| 1.81600 / 46.63 | L21 | S-LAH59, OHARA | catalog νd about 46.62 | high-index variator glass |
| 1.79500 / 45.30 | L22 | J-LASF017, HIKARI | catalog nd exact, νd about 45.31 | lanthanum dense flint |
| 1.80610 / 40.94 | L24 | S-LAH53, OHARA | catalog νd about 40.92 | lanthanum flint |
| 1.48749 / 70.45 | L33, L52 | FC5 / N-FK5-class fluor-crown | closer to HOYA/SCHOTT class than OHARA S-FSL5 | low-dispersion crown |
| 1.85026 / 32.35 | L41, L53 | J-LASF021, HIKARI | catalog nd and νd match | lanthanum dense flint |
| 1.71300 / 53.89 | L43 | S-LAL8, OHARA | catalog νd about 53.87 | lanthanum crown |
| 1.58913 / 61.18 | L51 | S-BAL35, OHARA | catalog νd about 61.14 | barium crown |

The ED assignment requires care. Two glass families in the design have high Abbe numbers: the J-PSKH1/S-FPM2-class glass at L12 and L34, and the FK5-class glass at L33 and L52. Raw Abbe number alone would favor the FK5-class glass, but that is not the controlling criterion for Nikon's ED designation. HIKARI J-PSKH1 lists ΔPgF = +0.0135, while FK5-class crowns sit much closer to the normal partial-dispersion line. On that basis L12 and L34 are the inferred ED elements. This is an inference from glass identity and Nikon's published count, not a patent statement naming the ED elements.

The design is a well-corrected achromatic standard zoom with two anomalous-dispersion elements. The data do not support calling it apochromatic; the patent's own lateral chromatic aberration plots are on a ±0.050 mm scale and show residual color.

## Focus Mechanism

Focusing is by object-side translation of G2. Paragraph 0084 states this directly, and paragraph 0103 identifies at least part of G2 as the preferred focusing group. The stop, G3, G4, and G5 do not intentionally move for focus.

The two gaps bracketing G2 conserve their sum at each zoom setting:

| Zoom state | d1 infinity → close | d2 infinity → close | G2 object-side shift | d1 + d2 |
|---|---:|---:|---:|---:|
| Wide | 2.899 → 2.077 | 24.017 → 24.840 | 0.822 mm | 26.916 / 26.917 |
| Middle | 17.248 → 16.566 | 11.369 → 12.051 | 0.682 mm | 28.617 / 28.617 |
| Telephoto | 44.501 → 43.557 | 1.199 → 2.143 | 0.944 mm | 45.700 / 45.700 |

The patent close-range table contains one anomalous entry: d3 at the wide end changes from 1.779 mm to 1.799 mm. This is inconsistent with the stated G2-only focus mechanism and with the exact d1+d2 conservation above. The data file transcribes the patent value but notes it as a probable table artifact rather than a real floating-focus motion.

Solving the patent close-state prescriptions for the object plane gives magnification around 0.033× at all three zoom settings. The subject-to-sensor distances are approximately 0.844 m at wide, 1.448 m at the middle position, and 3.409 m at telephoto. These are aberration-characterization states used for Figs. 3A–3C, not the production minimum-focus state. Nikon's product specification of 0.45 m and 0.24× governs the shipping lens.

## Aspherical Surfaces

The design has three aspherical surfaces.

| Surface | Element | Patent κ | Standard K | A4 | A6 | A8 | A10 |
|---|---|---:|---:|---:|---:|---:|---:|
| 6 | L21 object side | +1.0000 | 0 | +1.31870e−5 | −3.10490e−8 | +4.74440e−11 | −3.43860e−14 |
| 13 | L24 image side | +1.0000 | 0 | −9.26690e−7 | −2.12150e−8 | +8.52640e−12 | −8.74630e−14 |
| 27 | L51 object side | −3.0000 | −4 | −7.12220e−6 | −3.55240e−9 | +4.19740e−11 | −1.12730e−13 |

The patent equation in paragraph 0082 is:

$$ S(y)=\frac{y^2/r}{1+\sqrt{1-\kappa(y/r)^2}} + A_4y^4+A_6y^6+A_8y^8+A_{10}y^{10}. $$

This means the patent's κ is not the standard conic constant K. The relationship is K = κ − 1. Surfaces 6 and 13 therefore have spherical bases plus polynomial terms; surface 27 has a hyperbolic base with K = −4.

Surface 6 is the most object-side G2 surface and is used for wide-angle field curvature and distortion correction. Surface 13 is the most image-side G2 surface and is used for telephoto spherical-aberration correction. Surface 27 is a rear-group corrective asphere; the patent does not assign it a specific prose role, so its interpretation as an exit-cone spherical/coma corrector follows from its location and power.

The patent leaves fabrication open: fine grinding, glass molding, resin-on-glass compound asphere, diffractive surface, GRIN lens, and plastic lens are all mentioned as permissible variants. It does not identify the fabrication method for these three surfaces.

## Conditional Expressions

The patent gives five conditional expressions and tabulates the values for Example 1. Independent recomputation from Table 1 reproduces the tabulated values.

| Condition | Expression | Example 1 | Claimed range | Preferred range | Result |
|---|---|---:|---:|---:|---|
| (1) | (r2 + r1) / (r2 − r1) | 2.386 | 0.80-3.50 | 0.90-3.00 | satisfies both |
| (2) | (−f2) / fw | 0.722 | 0.50-0.90 | 0.60-0.85 | satisfies both |
| (3) | f1 / \|f4\| | 3.479 | 2.00-6.00 | 3.55-5.54 | satisfies claim; just below preferred lower bound |
| (4) | (−f2) / BFw | 0.464 | 0.30-0.60 | 0.35-0.55 | satisfies both |
| (5) | fw / BFw | 0.642 | 0.45-0.80 | 0.47-0.77 | satisfies both |

The radii for condition (1) are those of L22: r1 = −31.9349 and r2 = −78.0281. The group focal lengths used in the remaining conditions are f1 = +106.848, f2 = −17.844, and f4 = −30.712. Condition (3) is the only nuance: the example satisfies the claim but lies slightly below the tighter preferred lower bound. That does not make the embodiment noncompliant.

## Image Stabilization

Vibration reduction is performed by decentering the cemented negative component in G4, namely L41-L42. The pair computes to about −52.53 mm. Paragraph 0084 states that this cemented negative lens is moved in a direction having a component substantially perpendicular to the optical axis.

The power of G4 is tied to conditional expression (3). If G4 becomes too strong, field-curvature variation and decentering coma during stabilization become harder to correct together; if G1 becomes too strong relative to G4, telephoto spherical aberration and wide-angle lateral color become more conspicuous. Example 1 sits inside the claimed range, though just outside the patent's preferred lower limit.

## Verification Summary

The prescription was re-entered from Table 1 and independently checked with paraxial y-ν and ABCD tracing. The computed system values agree with the patent values to normal rounding tolerance.

| Quantity | Computed | Patent |
|---|---:|---:|
| EFL, wide / middle / telephoto | 24.704 / 45.755 / 116.403 mm | 24.70 / 45.75 / 116.39 mm |
| BFD, wide / middle / telephoto | 38.543 / 48.786 / 64.326 mm | 38.496 / 48.783 / 64.317 mm |
| Total lens length, wide / middle / telephoto | 146.398 / 158.342 / 190.966 mm | 146.351 / 158.339 / 190.957 mm |
| Group focal lengths G1-G5 | +106.848 / −17.845 / +25.332 / −30.713 / +45.008 mm | +106.848 / −17.844 / +25.331 / −30.712 / +45.007 mm |
| Petzval sum | +3.179e−3 mm−1 | not tabulated |

The small BFD and total-length differences are explained by the calculation using the full refractive prescription and the patent's rounded Bf table. The group focal-length match confirms the sign convention, glass indices, and cemented-junction treatment.

The .data.ts file uses the patent prescription without focal-length scaling. Semi-diameters are reconstructed because the patent does not publish clear-aperture radii. The reconstruction was constrained by paraxial marginal/chief-ray envelopes, Fig. 1 proportions, the 77 mm filter constraint, edge-thickness checks, sd/|R| < 0.90, and cross-gap sag clearance.

## Design Heritage and Context

The 24-120mm f/4G ED VR replaced Nikon's earlier variable-aperture AF-S 24-120mm f/3.5-5.6G IF-ED VR as the constant-aperture FX travel/standard zoom. Its architecture is characteristic of Nikon's late F-mount full-frame zoom practice: a positive front collector, negative variator/focus group, stop-bearing positive relay, separate negative VR group, and positive rear imaging group.

The same patent family also develops a 28-300mm-class full-frame superzoom and DX-format examples, but those prescriptions should not be conflated with the 24-120mm f/4G design. The later NIKKOR Z 24-120mm f/4 S is a separate mirrorless optical formula rather than a direct reuse of this F-mount prescription.

## Sources

- US 2010/0220400 A1, Nikon Corporation, "Zoom Lens, Optical Apparatus Equipped Therewith and Method for Manufacturing the Zoom Lens," Example 1, Table 1 and Figs. 1–3.
- Nikon official product specifications for AF-S NIKKOR 24-120mm f/4G ED VR, model 2193.
- HIKARI J-PSKH1, J-LASF017, and J-LASF021 optical-glass datasheets.
- OHARA S-TIH53, S-LAH97, S-LAH59, S-LAH53, S-LAL8, S-BAL35, S-FPM2, and S-FSL5 optical-glass datasheets and catalog tables.
- SCHOTT N-FK5 datasheet and HOYA cross-reference table for the 487704 FK5-class crown assignment.
