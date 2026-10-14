## Patent Reference and Design Identification

**Patent:** JP 2019-023693 A  
**Application Number:** JP 2017-142519  
**Filed:** 24 July 2017  
**Published:** 14 February 2019  
**Inventor:** Masakazu Hibino  
**Applicant:** Sigma Corporation  
**Title:** Large Aperture Ratio Lens (大口径比レンズ)  
**Embodiment analyzed:** Numerical Example 1

The prescription describes a large-aperture, internally focused portrait lens; the patent states its aim as F1.2 with the field of a 90 mm lens in 35 mm terms. The patent applicant is Sigma Corporation, and the lens is sold by Olympus. Neither company has published a statement linking the two, so the identification below is an inference from construction, not a manufacturer-confirmed production prescription. [P1, ¶0001, ¶0068–0074]

The marketed lens is the OLYMPUS M.ZUIKO DIGITAL ED 45mm f/1.2 PRO: 14 elements in 10 groups with 1 ED, 4 HR and 1 aspherical element, a 27° field and 0.5 m closest focus. Example 1 has a 44.10 mm focal length, F1.28, a 27.57° field and a 10.82 mm image height, the Four Thirds half-diagonal. The prescription is used at the patent's scale. [P1; M2]

The identification rests on several points that agree:

1. All four numerical examples have 14 elements in 10 groups, one aspherical surface on the rear of the fifth element, a cemented triplet behind it and a single negative focusing element; they differ in glass. Olympus's lens diagram marks the sixth element, the front of the cemented triplet, as the ED lens, the first, second, ninth and eleventh as HR lenses and the fifth as the aspherical lens. [P1, Examples 1–4; M2, M3]
2. Only Example 1 fits that map. Its one glass with νd above 65 is L6 (νd 68.63), and its four elements with nd above 1.9 are L1, L2, L9 and L11. Example 2 has no glass above νd 43; Example 3 has two νd 75.50 elements (L6 and L8) and three elements above nd 1.9; Example 4 puts its νd 75.50 glass at L8, the rear of the triplet.
3. The patent's 0.5 m state places the object 398.8 mm in front of the first surface at a magnification of −0.104. Olympus lists 0.5 m closest focus, 0.1× magnification and a 40 cm working distance. [P1, PDF p13; M2, M5]
4. The first surface is 101.22 mm from the image plane. The lens is 84.9 mm long, which with the 19.25 mm Micro Four Thirds flange distance puts its front rim 104.15 mm from the sensor, 2.9 mm ahead of that vertex. [M2]
5. The patent's stated aims, a light focusing group and a small change of image height when that group is wobbled for autofocus, agree with Olympus's description of a lightweight focusing unit. Which element moves is taken from the patent. [P1, ¶0016–0021, ¶0068–0073; M3]

The application was filed on 24 July 2017. Olympus announced the lens on 26 October 2017, three months later, for release on 24 November 2017. [M1]

## Optical Architecture

| Group | Surfaces | Printed f / mm | Computed f / mm |
| --- | --- | --- | --- |
| G1 | S1–S6 | 422.98 | +422.971731 |
| G2 | S8–S16 | 31.97 | +31.972168 |
| G3 | S17–S18 | -52.00 | -51.999822 |
| G4 | S19–S25 | 53.08 | +53.078657 |
| G2a | S8–S10 | -102.97 | -102.967570 |
| G2b | S11–S16 | 29.23 | +29.234001 |

The sequence is a weakly positive G1, the stop S, a positive G2, a negative G3 and a positive G4. These four patent groups are functional units, not the ten air-separated groups of the marketed count. G2 combines a negative front part, G2a, with a stronger positive rear part, G2b. The patent credits the positive G2 with reducing the chief-ray angle at the focusing group, and the positive G4 with lowering the power needed in front of it and with correcting the aberrations of the negative focusing group. These are the patent's group-level explanations; it gives no element-by-element aberration breakdown. [P1, ¶0018–0021, ¶0055]

The distinguishing choice is a single negative internal focusing lens behind the main positive power. The fixed groups in front of and behind it carry the correction that a light moving group cannot supply alone. The patent describes no stabilization group, floating group or separate aberration-control movement, and the model has none. [P1, ¶0057, ¶0071]

At infinity the first vertex S1 is 101.2192 mm from the image plane and the last lens vertex S25 is 18.5159 mm from it. The track is 2.294932 times the focal length and the back distance is shorter than the focal length, so the layout is neither a telephoto (ratio below one) nor a retrofocus type. The Petzval sum is 0.002192223284 mm⁻¹, a Petzval radius of 456.157914 mm; it is not the full sagittal or tangential field curvature.

## Element-by-Element Analysis

The focal lengths below are for each thick element alone in air. At cemented surfaces the neighboring glass changes the surface power, so these values cannot be added like thin lenses. Each glass name is the catalog glass at the patent's nd and νd; the supplier and melt are not identified.

### L1 — Plano-Convex

nd = 1.95375, νd = 32.32. Glass: S-LAH98 (OHARA, coordinate equivalent). f = +67.960052 mm (isolated thick element in air).

L1 is the plano-convex front element of G1; its rear surface is printed as a plane. With the positive and negative menisci that follow, it leaves G1 only weakly positive. It is the first of the four positions that Olympus's diagram marks as HR (high refractive index) lenses. [P1, ¶0069; M3]

### L2 — Positive Meniscus

nd = 1.92286, νd = 20.88. Glass: E-FDS1 (HOYA, coordinate equivalent). f = +180.614377 mm (isolated thick element in air).

L2 is the positive meniscus between L1 and the negative meniscus ahead of the stop. Both surfaces are convex toward the object; the positive power comes from their unequal curvature and the element's thickness. The same nd 1.92286, νd 20.88 glass is printed for L9 and L11, and all three are HR positions in Olympus's diagram. [P1, ¶0069; M3; G2]

### L3 — Negative Meniscus

nd = 1.64769, νd = 33.84. Glass: E-FD2 (HOYA, coordinate equivalent). f = -41.037395 mm (isolated thick element in air).

L3 completes G1 with a negative meniscus whose image-side surface is the more strongly curved. Its negative power cancels most of the positive power of L1 and L2, which is why the patent describes G1's positive power as small. Figure 1 draws a flange beyond the curved surfaces; the modeled clear radii follow the curved surfaces only. [P1, ¶0055, ¶0069, Fig. 1]

### L4 — Biconcave Negative

nd = 1.75211, νd = 25.05. Glass: FF8 (HOYA, coordinate equivalent). f = -18.281049 mm (isolated thick element in air).

L4 is the negative member of the cemented doublet G2a, the first lens behind the stop. The doublet is negative overall even though L5 is strongly positive on its own. The patent sets the ratio of the positive G2b to the negative G2a (condition 2) to limit spherical aberration without lengthening the lens. [P1, ¶0027–0030, ¶0070]

### L5 — Biconvex Positive (1× Asph)

nd = 1.85135, νd = 40.10. Glass: M-TAFD305 (HOYA, coordinate equivalent). f = +24.045506 mm (isolated thick element in air).

L5 completes G2a. Its image-side surface, S10, is the only aspherical surface in the example; the cemented surface is spherical. Olympus's diagram marks this fifth element as the aspherical lens. The prescription does not say whether the surface is molded, hybrid or polished. [P1, ¶0070, aspherical table; M3]

### L6 — Biconvex Positive

nd = 1.59282, νd = 68.63. Glass: FCD515 (HOYA, coordinate equivalent). f = +47.486961 mm (isolated thick element in air).

L6 begins the positive-negative-positive cemented triplet of G2b and has the highest Abbe number in the lens. Olympus describes a cemented triplet that contains the ED lens and marks this sixth element as that lens. The patent gives only nd and νd, not a glass name, and does not call the glass anomalous, so the element is tagged as an inferred special-dispersion glass. The Abbe-number differences of the patent's conditions (5) and (6) are discussed below; they do not by themselves establish apochromatic correction. [P1, ¶0045–0054, ¶0070; M2, M3]

### L7 — Biconcave Negative

nd = 1.85478, νd = 24.80. Glass: S-NBH56 (OHARA, coordinate equivalent). f = -24.453757 mm (isolated thick element in air).

L7 is the negative middle member of the triplet, cemented to both positive neighbors. Its index and dispersion contrasts act at those two glass-to-glass surfaces, so the triplet's chromatic effect cannot be read from the isolated element powers. [P1, ¶0045–0054, ¶0070]

### L8 — Biconvex Positive

nd = 1.87070, νd = 40.73. Glass: TAFD32 (HOYA, coordinate equivalent). f = +28.614498 mm (isolated thick element in air).

L8 completes the triplet. The triplet is positive overall but weaker than the whole of G2b, which also includes L9. The three elements share one estimated clear radius, and the cemented surfaces are modeled without a cement layer or air space. [P1, ¶0070]

### L9 — Biconvex Positive

nd = 1.92286, νd = 20.88. Glass: E-FDS1 (HOYA, coordinate equivalent). f = +52.941265 mm (isolated thick element in air).

L9 is a fixed biconvex positive lens behind the triplet. It completes G2b and is followed by the first variable gap, d16; it does not move with the focusing element. It is the third HR position in Olympus's diagram. [P1, ¶0027–0030, ¶0070–0071; M3]

### L10 — Negative Meniscus

nd = 1.56732, νd = 42.84. Glass: E-FL6 (HOYA, coordinate equivalent). f = -51.999822 mm (isolated thick element in air).

L10 alone forms the negative G3. It is a negative meniscus, convex toward the object, and moves toward the image for closer focus while every other group stays fixed. The patent makes the focusing group a single lens to keep it light; Olympus separately describes a lightweight focusing unit. [P1, ¶0021, ¶0057, ¶0071; M3]

### L11 — Biconvex Positive

nd = 1.92286, νd = 20.88. Glass: E-FDS1 (HOYA, coordinate equivalent). f = +28.175536 mm (isolated thick element in air).

L11 begins the fixed positive rear group G4 and is the fourth HR position in Olympus's diagram. The patent assigns the correction of the astigmatism, lateral color and distortion introduced by the negative focusing group to G4 as a whole, not to individual elements. [P1, ¶0020–0021, ¶0072; M3]

### L12 — Biconvex Positive

nd = 1.87070, νd = 40.73. Glass: TAFD32 (HOYA, coordinate equivalent). f = +44.402106 mm (isolated thick element in air).

L12 is the positive member of the rear cemented pair. Its object-side surface is nearly flat, printed as R = 1000 mm, and is kept at that radius. The pair is negative overall although L12 is positive. [P1, ¶0072, surface table]

### L13 — Biconcave Negative

nd = 1.80809, νd = 22.76. Glass: FD225 (HOYA, coordinate equivalent). f = -18.236023 mm (isolated thick element in air).

L13 is the biconcave negative member cemented to L12, followed by an air space before the final meniscus. In the model, off-axis rays clipped here are lost at the element's rim; the cemented surface itself is clear. [P1, ¶0072, Fig. 1]

### L14 — Positive Meniscus

nd = 1.87070, νd = 40.73. Glass: TAFD32 (HOYA, coordinate equivalent). f = +84.566799 mm (isolated thick element in air).

L14 is the final positive meniscus, convex toward the object, and completes the positive G4. Behind it is the plane-parallel optical filter that the patent lists; it is traced but is not one of the fourteen lens elements. [P1, ¶0072–0073]

The labels C1–C3 below are this model's names for the three cemented assemblies. Their focal lengths are computed with the cemented surfaces in place and differ from any sum of the isolated values above.

| Cemented assembly | Elements | Computed f / mm |
| --- | --- | --- |
| C1 | L4–L5 | -102.967570 |
| C2 | L6–L7–L8 | +60.299328 |
| C3 | L12–L13 | -31.362730 |

## Glass Identification and Spectral Modeling

The example gives d-line refractive indices and Abbe numbers only. Each pair was compared with the OHARA, HOYA, SCHOTT, HIKARI, CDGM and SUMITA catalogs. A match in nd and νd identifies a glass type, not the supplier, the melt or the glass used in production. [P1, ¶0059; G1–G6]

| Catalog glass at the patent's nd/νd | Patent nd | Patent νd | ΔPgF from the catalog curve | Use |
| --- | --- | --- | --- | --- |
| OHARA S-LAH98 | 1.95375 | 32.32 | +0.001101 | L1 |
| HOYA E-FDS1 | 1.92286 | 20.88 | +0.030290 | L2, L9, L11 |
| HOYA E-FD2 | 1.64769 | 33.84 | +0.005526 | L3 |
| HOYA FF8 | 1.75211 | 25.05 | +0.017546 | L4 |
| HOYA M-TAFD305 | 1.85135 | 40.10 | -0.006833 | L5 |
| HOYA FCD515 | 1.59282 | 68.63 | +0.015751 | L6 |
| OHARA S-NBH56 | 1.85478 | 24.80 | +0.010203 | L7 |
| HOYA TAFD32 | 1.87070 | 40.73 | -0.007063 | L8, L12, L14 |
| HOYA E-FL6 | 1.56732 | 42.84 | +0.002596 | L10 |
| HOYA FD225 | 1.80809 | 22.76 | +0.023135 | L13 |
| HOYA BSC7 | 1.51680 | 64.20 | -0.001535 | plate F |

The low-dispersion L6 and the high-dispersion L7 are the pair that the patent's Abbe-difference conditions address. That describes the intended balance of axial color; it does not support a numerical claim about secondary spectrum. HOYA lists FCD515 at νd 68.62 against the patent's 68.63; the data file keeps the patent's value, and the traced dispersion is the catalog curve's. Olympus's four HR positions (L1, L2, L9, L11) are the four elements with nd above 1.9. [P1, ¶0045–0054; M3; G2]

The patent prints no indices at other wavelengths, and the data file stores none. Each element names the catalog glass at the patent's nd and νd, and the C-, F- and g-line indices used in color traces come from that glass's published dispersion curve. Those curves reproduce the printed nd to within 0.000005 and the printed νd to within 0.01. The rear filter is treated the same way.

ΔPgF in the table is the catalog glass's relative partial dispersion, PgF = (ng − nF)/(nF − nC), minus the normal line 0.6438 − 0.001682·νd at the patent's νd. The values are therefore catalog-derived: the patent does not designate any glass as anomalous, and no apochromatic claim follows from them.

## Focus Mechanism

Focusing is internal: the negative G3 (L10) moves toward the image. G1, the stop, G2, G4 and the filter F stay fixed. [P1, ¶0071, Fig. 1]

| Patent state | Object to S1 / mm | d16 / mm | d18 / mm | G3 travel toward image / mm | Computed EFL / mm | Paraxial magnification |
| --- | --- | --- | --- | --- | --- | --- |
| INF | ∞ | 1.7000 | 9.5346 | 0.0000 | 44.105540922 | — |
| 40倍 | 1738.8853 | 2.9131 | 8.3215 | 1.2131 | 43.723257815 | -0.025002723 |
| 0.5m | 398.7806 | 6.9499 | 4.2847 | 5.2499 | 42.167736237 | -0.103863872 |

The two near states put the object 1840.1045 mm and 499.9998 mm from the image plane. The row labeled 40倍 is therefore a 1:40 reduction, and the 0.5 m row is the marketed minimum focus distance at the marketed 0.1× magnification. In all three states d16 + d18 = 11.2346 mm and the image plane is fixed. The model places the middle state at 0.2717 of the focus range, in proportion to inverse object-to-image distance.

The patent measures the object distance d0 from the first surface, while its 0.5 m label is measured from the image plane. Positions between the printed states are interpolated from the printed gaps; the patent gives no continuous focus law.

Olympus describes the production MSC focus system as a lightweight focusing unit driven by a stepping motor through a lead screw. It does not publish which element moves or how far; those come from the patent. [M3]

The patent prints no stop diameter. The model's iris radius, 12.3646138704 mm, is set so that the infinity f-number equals the printed 1.28, and it is held there at every focus state.

The patent prints F1.30 and F1.34 for the near states without defining the near-state F-number or saying how the stop behaves. With the iris fixed, the model's image-side axial aperture barely changes:

| Patent state | Printed F-number | Computed axial 1/(2 NA), fixed iris |
| --- | --- | --- |
| INF | 1.28 | 1.279698505 |
| 40倍 | 1.30 | 1.279465949 |
| 0.5m | 1.34 | 1.274517472 |

The printed near-state values therefore describe a narrower axial beam than a fixed iris passes. The patent's spherical-aberration plot for 0.5 m (Fig. 4) ends at about −0.03 mm at full aperture. The traced prescription gives −0.032 mm for the ray whose 1/(2 NA) is the printed 1.34, which crosses the stop plane 11.83 mm from the axis, and −0.079 mm for the ray through the edge of the 12.36 mm iris. ¶0067 mentions a flare-cut stop FS in the lens figures, but Figure 1 draws none and the surface table lists none. A fixed aperture of about 14.7 mm semi-diameter at S11 would reproduce both printed near-state values; that is an inference, and the model keeps the iris fixed and adds no such aperture. [P1, ¶0067, Figs. 3–4]

## Aspherical Surfaces

The only aspherical surface is S10 (labeled 10A in the data file), the image-side surface of L5. The patent's sag equation has the standard denominator 1 + √(1 − (1+K)y²/R²), so K is used as printed and K = 0 is a spherical base. The sag is that conic base plus A4y⁴ + A6y⁶ + A8y⁸ + A10y¹⁰. [P1, ¶0061, PDF pp11 and 13]

| Term at S10 | Printed value | Units |
| --- | --- | --- |
| K | 0.00000 | dimensionless |
| A4 | 8.27980E-06 | mm^-3 |
| A6 | 5.62700E-09 | mm^-5 |
| A8 | 9.98870E-12 | mm^-7 |
| A10 | -5.98660E-15 | mm^-9 |

The patent prints no terms above A10, and the coefficients are used unscaled. The positive A4, A6 and A8 terms offset part of the negative sag of the spherical base toward the rim, which weakens this convex surface's positive power at the edge; the negative A10 term limits that trend. The patent does not state how the surface is made.

At the estimated 15.3 mm semi-diameter of S10 the departure from the spherical base is +551.685208 µm. The surface slope is 3.948577° at that rim and at most 6.366956° inside it, with no reversal of sign. The 15.3 mm radius is an estimate read from Figure 1, not a published effective diameter.

## Conditional Expressions

The patent's conditions address the space and power of the focusing group, the negative/positive split within G2, the power in front of the focusing group, the stop image seen by the focusing group, and the triplet's dispersion differences. Every computed value lies inside both the stated and the preferred bounds. [P1, ¶0022–0054, PDF p19 condition table]

| Condition | Expression | Printed bounds | Computed | Printed value |
| --- | --- | --- | --- | --- |
| 1 | DFcI/f3 | -1.07 < ratio < -0.65 | -0.820812426 | -0.82 |
| 2 | f2b/f2a | -0.8 < ratio < -0.18 | -0.283914649 | -0.28 |
| 3 | f12/f | 0.7 < ratio < 1.05 | 0.945981992 | 0.95 |
| 4 | FcEntp/h | -13 < ratio < -7 | -9.461141619 | -9.46 |
| 5 | νp − νn | 10 < difference < 60 | 43.830000000 | 43.82 |
| 6 | νp′ − νn | 10 < difference < 55 | 15.930000000 | 15.93 |

DFcI is measured from G3's rear surface to the image at infinity; f3 is the negative G3 focal length. f12 is the combined G1+G2 focal length, not the sum of individual group focal lengths. FcEntp is the image of the stop formed by G2, referenced to the front vertex of G3; h is the height of the maximum-field chief ray in the plane perpendicular to the axis through that vertex. [P1, ¶0022, ¶0031, ¶0040]

For condition (4), the image of the stop formed by G2 lies -67.348066656 mm from the front vertex of G3, negative meaning toward the object. The real full-field chief ray crosses the plane through that vertex at a height of 7.118386910 mm. Their ratio is -9.461141619.

The printed value of condition (5) is 43.82, but the printed Abbe numbers give 68.63 − 24.80 = 43.83; both lie inside the bounds. The catalog νd of FCD515, 68.62, would give the printed 43.82, but the patent's 68.63 is kept.

¶0046 calls G3 positive in its explanation of the triplet's chromatic role. The claims, ¶0071, the prescription and the computed group focal length all make G3 negative in this example, so that wording is treated as an error in the patent text.

## Computed First-Order Values and Model Limits

The values below are computed from the prescription as printed, with the filter in place and the image plane at the printed position:

| Patent state | Printed EFL / mm | Computed EFL / mm | Paraxial focus behind the printed image plane / mm |
| --- | --- | --- | --- |
| INF | 44.10 | 44.105540922 | +0.000516320 |
| 40倍 | 43.72 | 43.723257815 | +0.000526047 |
| 0.5m | 42.17 | 42.167736237 | +0.000599527 |

The 0.0055 mm difference from the printed infinity focal length is within what the rounding of the printed radii, gaps and indices allows.

The filter F is 4.0000 mm thick with nd = 1.51680 and νd = 64.20, 13.5159 mm behind S25 and 1.0000 mm in front of the image. It is traced as printed (S26–S27) but not drawn, and is not folded into an air-equivalent gap. The patent's BF of 1.0000 mm is measured from the rear of the filter, S27, not from the last lens surface.

### Estimated clear apertures

The patent prints no effective diameters, so every semi-diameter is an estimate read from Figure 1. The figure is drawn about 10 % taller than it is long. Its vertex spacings match the prescription at 11.05 px/mm along the axis (page rendered at 400 dpi), but its drawn surface curves fit the printed radii only at 12.20 px/mm across the axis, so heights are read at that vertical scale. The cross-sections of Examples 2–4 show the same stretch, and at that scale the drawn stop mark stands 12.31 mm from the axis against the 12.36 mm stop radius that gives F1.28. Rims follow the ends of the curved surfaces and exclude the drawn mounting flanges, with one exception: the front surface of L4, whose curve ends at 12.7 mm, carries the cemented doublet's 15.3 mm rim so that the doublet is drawn as the square block of the figure. No traced ray reaches that surface above 12.51 mm.

The cemented triplet is drawn with one square-cut rim, which reads 17.1 mm. At that height L6 and L8 keep edges of 1.110 mm and 1.089 mm, against about 1.18 mm drawn for each, and the rim clears the largest axial marginal-ray height over the three printed states, 16.898 mm at 0.5 m with the iris fixed, by 0.20 mm. Read at the horizontal scale instead, the same outline would stand at 18.9 mm, above the 18.46 mm at which L8's edge thickness reaches zero. At a height of 15.7 mm L2 and L3 close to 0.687 of the axial gap between them. Across the stop, S6 and S8 are 4.427 mm apart at the 13.4 mm rim of S6, and the front corner of L4 stays 1.063 mm behind the stop plane. No surface profile reverses slope, and no neighboring surfaces touch at any focus position between the printed states.

### Field angle and vignetting

The printed full field narrows slightly at the near states. Reading it as the angle of the incoming chief ray at the first surface, for the ray through the center of the stop that reaches the printed image height of 10.82 mm, reproduces all three printed values:

| Patent state | Printed full field / ° | Computed full field at Y = 10.82 mm / ° |
| --- | --- | --- |
| INF | 27.57 | 27.565633412 |
| 40倍 | 27.48 | 27.475126221 |
| 0.5m | 27.23 | 27.230305407 |

The patent does not say where its near-state angle is measured, so this reading is an inference from the agreement.

At full aperture the axial beam and the chief ray of every field point pass unclipped at all three states. Off-axis beams are partly clipped by the estimated rims, from about 0.12 of the image height outward at infinity and from about 0.04 of it at 0.5 m; at the 10.82 mm corner a little under 60 % of the meridional beam height, and about 55 % of the on-axis beam's cross-sectional area, passes at infinity (about 64 % of the area at 0.5 m). The limiting rims are the curve ends of S4, S18 and S23, with the rim of S19 at infinity and that of S15 at 0.5 m. That vignetting depends on the estimated semi-diameters and on the straight element edges drawn between them; it is not a published property of the lens. The ray model is geometric, at the d line, with a circular iris and no coating or absorption losses.

## Performance Evidence and Applicability

The patent gives longitudinal and transverse aberration diagrams for Example 1 at its three focus states, and Olympus describes the production lens's spherical aberration as deliberately shaped for its out-of-focus rendering. Neither is replaced here by a simulated performance curve. [P1, Figs. 2–7; M3]

Traced at the d line, the prescription reproduces the patent's longitudinal plots (Figs. 2–4) to within their reading resolution of about 0.005 mm and 0.1 %. The aperture in each row is that of the printed F-number, and ΔS and ΔM are the sagittal and meridional image surfaces:

| Patent state | Spherical aberration at 0.7 of the aperture / at its edge (mm) | ΔS / ΔM at 0.7 of the image height (mm) | ΔS / ΔM at the corner (mm) | Distortion at the corner |
| --- | --- | --- | --- | --- |
| INF | -0.006 / -0.041 | -0.010 / +0.046 | -0.002 / -0.002 | +0.01 % |
| 40倍 | +0.003 / -0.029 | -0.018 / +0.029 | -0.002 / +0.057 | +0.27 % |
| 0.5m | +0.022 / -0.032 | -0.057 / -0.072 | -0.037 / +0.095 | +1.11 % |

No MTF, diffraction, polychromatic point-spread or bokeh simulation was computed for this analysis. The catalog-derived dispersion curves, the estimated rims and the circular model stop (the production lens has nine blades) limit what the model can say about production color correction, vignetting or out-of-focus rendering.

The model is the printed prescription traced as it stands. It says nothing about production tolerances, coatings, stray light, baffles or measured image quality.

## Sources

[P1] Japan Patent Office, JP 2019-023693 A, *Large Aperture Ratio Lens* (大口径比レンズ), published 14 February 2019, applicant Sigma Corporation, inventor Masakazu Hibino. An English abstract page precedes the Japanese publication in the PDF used, so PDF page numbers are one greater than the printed page numbers. Numerical Example 1: surface table PDF p12; asphere, system, variable-gap and group tables p13; condition table p19; Fig. 1 p20. Relevant prose: ¶0018–0021, ¶0022–0057 and ¶0059–0074.

[M1] Olympus, [announcement of the M.Zuiko Digital ED 17mm F1.2 PRO and 45mm F1.2 PRO](https://www.olympus-global.com/news/2017/nr00630.html), 26 October 2017. Used for the 45mm lens's construction and launch statements only.

[M2] Olympus / OM SYSTEM, [Japanese 45mm F1.2 PRO specifications](https://jp.omsystem.com/product/lens/single/pro/45_12pro/spec.html). Production specifications and lens diagram.

[M3] Olympus / OM SYSTEM, [Japanese design and features explanation](https://jp.omsystem.com/product/lens/single/pro/45_12pro/feature.html). Lens diagram marking the ED, HR and aspherical elements; cemented triplet, aspherical placement, focusing actuator and stated bokeh-design intent.

[M4] Olympus, [instruction manual](https://download.omsystem.com/pages/inst/mzded45f12pro/manual_mzded45f12pro.pdf), English printed pp7–8 (specifications on PDF p6).

[M5] OM SYSTEM, [M.Zuiko Digital ED 45mm F1.2 PRO product page](https://explore.omsystem.com/us/en/m-zuiko-ed-45mm-f1-2-pro). Minimum working distance of 40 cm.

[G1] OHARA, [optical-glass catalog archive dated 1 July 2026](https://oharacorp.com/wp-content/uploads/catalogs/OHARA_260701_CATALOG.zip); S- and L-prefix glass families checked separately.

[G2] HOYA, [optical-glass AGF catalog including obsolete glasses, 7 July 2026](https://www.hoya-opticalworld.com/common/agf/HOYA20260707_include_obsolete.agf).

[G3] SCHOTT, [optical-glass catalog download](https://media.schott.com/api/public/content/a79c07aa61da4c05a2c0bbab93d09a7f?v=3b65e351&download=true).

[G4] HIKARI, [all-glass catalog workbook](https://www.hikari-g.co.jp/optical_glass/catalog/document/HIKARI_ALL_Catalog_Data.xlsx).

[G5] CDGM, [September 2026 catalog workbook](https://www.cdgmgd.com/downloadFile.htm?uid=d5ilBXjFgXCK9VxoDmb).

[G6] SUMITA, [optical-glass download](https://www.sumita-opt.co.jp/en/wp/wp-content/themes/sumita-opt-en-v2026/download-files.php).

A catalog match does not establish which glass the production lens uses.
