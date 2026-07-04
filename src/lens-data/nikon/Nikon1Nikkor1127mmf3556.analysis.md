## Patent Reference and Design Identification

**Patent:** US 2015/0153549 A1  
**Filed:** Feb. 7, 2015; continuation of PCT/JP2013/071491, filed Aug. 8, 2013  
**Published:** Jun. 4, 2015  
**Priority:** Aug. 8, 2012  
**Inventor:** Mami Muratani  
**Applicant / Assignee:** Nikon Corporation  
**Title:** Zoom Lens System, Optical Apparatus and Method for Manufacturing Zoom Lens System  
**Embodiment analyzed:** Fourth Example, Table 4; FIGS. 7A-7C and 8A-8C

The prescription transcribed here is the fourth numerical example of US 2015/0153549 A1. It is identified as a patent-stage design for the Nikon 1 NIKKOR 11-27.5mm f/3.5-5.6 standard zoom for the Nikon 1 / CX system. The strongest identification point is the front parallel plane plate: Nikon's published construction lists the lens as eight optical elements in six groups, with one ED element, one aspherical element, and one protective glass element. Example 4 is the numerical example in this patent that adds a parallel plane protective plate P in front of the ordinary two-group optical core, while retaining the same 3+5 refractive layout behind it.

The match is supported by the patent's focal range and aperture values. Example 4 gives $f = 11.35$, $17.40$, and $26.71$ mm at the wide, intermediate, and telephoto states, with $FNO = 3.63$, $4.56$, and $5.77$. These values correspond to Nikon's marketed 11-27.5mm f/3.5-5.6 range after the normal production and catalog rounding. The patent image height is $Y = 8.19$ mm, giving a 16.38 mm design image circle, closely matching the CX-format diagonal. Nikon publishes the CX frame as a 1-inch-type format; its active still-image diagonal is about 15.86 mm.

The remaining convergent evidence is consistent: the optical core has eight refractive elements in six air-separated groups, one ED-class element, and one aspherical surface. The patent states that the aperture stop lies between G1 and G2, that the low-pass filter lies between G2 and the image plane, that the stop moves with G2 during zooming, and that focusing is performed by moving the entire first group G1. Nikon's product data lists autofocus, internal focusing, seven diaphragm blades, a 0.30 m minimum focus distance, and no vibration-reduction mechanism for the standard lens.

The rear low-pass filter listed in the patent is a camera-side filter stack, not an optical element of the interchangeable lens. In the data file, it is omitted from the surface array and its optical path is folded into the final air-equivalent back focal distance. The front protective plate P is retained because it is part of Nikon's published lens construction and because Example 4 explicitly includes it.

## Optical Architecture

The design is a compact negative-positive two-group zoom preceded by a plane protective plate. The optical encounter order is:

P - G1 - aperture stop - G2 - camera low-pass filter - image plane.

The transcribed data file includes P, G1, the aperture stop, and G2. It excludes the low-pass filter and uses the patent's air-equivalent back focal distance after the last lens surface.

G1 is a negative front group consisting of three air-spaced elements: a high-index negative meniscus L1, an ED biconcave negative L2, and a high-dispersion positive meniscus L3. Its paraxial focal length is $f_1 = -17.413$ mm, matching the patent's rounded $-17.41$ mm value. G1 supplies the negative leading power needed for the wide end and performs the focus movement.

The aperture stop is disposed between G1 and G2. In the zooming operation of Example 4, the patent states that the protective plate P moves with G1 and that the aperture stop moves with G2. The low-pass filter remains fixed. The G1-to-stop/G2 separation $d_8$ changes from 17.4708 mm at wide angle to 8.37574 mm at the intermediate position and 2.42841 mm at telephoto. Thus the front and rear optical groups approach each other monotonically from wide to tele.

G2 is a positive rear group with five elements in three air-separated subgroups: biconvex positive L4, cemented doublet L56, and cemented doublet L78. Its paraxial focal length is $f_2 = +17.055$ mm, matching the patent's rounded $+17.05$ mm value. The patent's design argument is that a positive single element plus two cemented doublets forms a modified triplet. This distributes the coma and chromatic correction burden more evenly than a simple positive-negative-positive triplet of three singlets.

## Element-by-Element Analysis

### P - Plane Protective Plate

nd = 1.51680, νd = 63.88. Glass: BK7 / S-BSL7 class protective glass. f = infinity.

The protective plate is a plane-parallel glass window ahead of the first powered group. Its two plane surfaces add no paraxial power. Its optical significance is instead axial: it adds glass path before G1 and is moved together with G1 during zooming in Example 4. The patent describes the plate as a protection member disposed on the object side of the first lens group.

This element is the principal reason for selecting Example 4 rather than Example 1. Nikon's published construction for the production 1 NIKKOR 11-27.5mm f/3.5-5.6 explicitly includes a protective glass element in addition to the eight optical elements and six groups.

### L1 - Negative Meniscus with Aspherical Rear Surface

nd = 1.85135, νd = 40.14. Glass: M-TAFD305 class high-index lanthanum flint. f = -14.26 mm.

L1 is the strongest negative component in G1. Its radii are $R_3 = +22.1410$ mm and $R_4 = +7.6618$ mm, making it a negative meniscus with the concave surface facing the image side. The high refractive index allows the lens to carry substantial negative power without forcing still steeper curvature.

The image-side surface is the only aspherical surface in Example 4. It corrects the high-order aberration load created by the compact negative front group, especially at the wide-angle end where the front group handles the largest field angles. The physical clear aperture on this element is constrained by the very narrow air gap between L1 and L2; the semi-diameter used in the data file is therefore deliberately conservative rather than a full unvignetted paraxial envelope.

### L2 - Biconcave Negative ED Element

nd = 1.49782, νd = 82.57. Glass: J-FKH1 class ED fluorophosphate crown. f = -45.97 mm.

L2 is the sole ED-class element in the prescription. Its low refractive index and very high Abbe number satisfy the patent's conditions $n_{dL2} < 1.62$ and $ν_{dL2} > 62.00$. It supplies weak negative power while providing the low-dispersion partner needed to correct lateral chromatic aberration in the negative front group.

The combination of L2 with the dense-flint L3 produces a large dispersion separation within G1. This is the main chromatic correction mechanism of the first group and explains why the ED glass is placed in the negative front group rather than in G2.

### L3 - Positive Meniscus, Convex to Object

nd = 1.84666, νd = 23.80. Glass: S-TIH53 equivalent (N-SF57HT / FDS90-SG class dense flint). f = +32.03 mm.

L3 is a high-dispersion positive meniscus. Its positive power partially compensates the negative power of L1 and L2, while its low Abbe number counterbalances L2's ED behavior. In the front group, this element is not simply a field corrector; it is a chromatic balancing element paired against the very high-Abbe L2.

The front-group Petzval contribution is moderated by the division of negative power between L1 and L2 and by the positive L3. This is important in a CX-format zoom because the field is small in absolute millimeters but steep in angular terms at the wide end.

### L4 - Biconvex Positive

nd = 1.63854, νd = 55.34. Glass: S-BSM18 class dense barium crown. f = +26.01 mm.

L4 is the first powered lens after the stop and the front collector of G2. Its biconvex form bends the post-stop bundle toward the image side and establishes the positive rear-group power. The patent's conditional expression on the shape factor of this element is intended to balance coma and spherical aberration without requiring an additional aspherical surface in G2.

Because L4 sits immediately after the stop, it sees relatively high marginal-ray height. Its moderate-index barium-crown class glass keeps the element positive but not excessively dispersive, leaving chromatic correction to the two cemented doublets behind it.

### L56 - First Cemented Doublet, Net Weak Negative

#### L5 - Biconvex Positive

nd = 1.59319, νd = 67.90. Glass: J-PSKH1, Hikari phosphate crown. f = +10.33 mm.

#### L6 - Biconcave Negative

nd = 1.74400, νd = 44.80. Glass: S-LAM2 class lanthanum flint. f = -7.55 mm.

The L56 cemented doublet has a computed net focal length of -130.70 mm. It is therefore only weakly negative as a unit, despite the strong powers of its two components. This weak net negative power is exactly the role required by the patent's modified-triplet structure: the group contributes chromatic and field correction without making G2's net positive power too low.

The cemented interface at $R_{13} = -15.0148$ mm is a major chromatic-correction surface. L5's high Abbe number and L6's lower Abbe number create the dispersion contrast needed for axial color correction in the rear group. The pair also supplies a negative Petzval contribution that helps counter the positive field curvature produced by L4 and L8.

### L78 - Second Cemented Doublet, Net Positive

#### L7 - Negative Meniscus

nd = 1.90366, νd = 31.27. Glass: J-LASFH13HS / S-LAH95 class ultra-high-index dense flint. f = -13.83 mm.

#### L8 - Biconvex Positive

nd = 1.61772, νd = 49.78. Glass: S-BSM28 class dense barium crown. f = +9.67 mm.

The L78 cemented doublet has a computed net focal length of +29.55 mm. L7 is the highest-index powered element in the prescription and satisfies the patent's high-index negative-element condition for G2. Its high index allows a negative meniscus with manageable curvature while still giving strong field-flattening and chromatic leverage.

L8 provides the positive rear power that completes G2. Together, L7 and L8 form the positive rear half of the modified-triplet arrangement. Their cemented interface at $R_{16} = +8.5586$ mm provides a second important chromatic-correction interface in G2, complementing the L56 interface rather than concentrating all rear-group axial color correction in one cemented pair.

## Glass Identification and Selection

| Element | nd | νd | Best catalog class | Quality | Optical role |
|---|---:|---:|---|---|---|
| P | 1.51680 | 63.88 | BK7 / S-BSL7 class | Class match | Protective plane plate |
| L1 | 1.85135 | 40.14 | M-TAFD305 class | Close / class | High-index negative meniscus |
| L2 | 1.49782 | 82.57 | J-FKH1 class | Close / class | ED negative element in G1 |
| L3 | 1.84666 | 23.80 | S-TIH53 equivalent (N-SF57HT / FDS90-SG class dense flint) | Catalog-backed equivalent | Dense-flint positive chromatic partner |
| L4 | 1.63854 | 55.34 | S-BSM18 class | Close / class | Moderate-dispersion positive collector |
| L5 | 1.59319 | 67.90 | J-PSKH1 | Exact | Positive crown in L56 |
| L6 | 1.74400 | 44.80 | S-LAM2 class | Close / class | Negative lanthanum flint in L56 |
| L7 | 1.90366 | 31.27 | J-LASFH13HS / S-LAH95 class | Close / class | Ultra-high-index negative in L78 |
| L8 | 1.61772 | 49.78 | S-BSM28 class | Close / class | Positive barium crown in L78 |

The glass palette is typical of a compact Japanese zoom of this period: high-index lanthanum flints for compact negative power, low-dispersion fluorophosphate glass for the ED correction, and barium/phosphate crowns in the cemented rear-group correctors. The exact catalog vendor cannot be proven from the patent alone because the numerical table publishes refractive indices and Abbe numbers rather than glass names. The data file therefore uses catalog-class annotations where vendor identity is inferred from nd/νd matching rather than explicitly stated by the patent.

The chromatic strategy is divided by group. G1 uses the large dispersion contrast between L2 and L3 to control lateral color over the zoom range. G2 uses the two cemented interfaces in L56 and L78 to handle longitudinal chromatic aberration in the converging rear bundle.

## Focus Mechanism

The patent states that focusing from infinity to a close object is performed by moving the entire first lens group G1. It separately states that, in Example 4, the protective plate P moves with G1 during zooming. The patent does not publish a separate close-focus spacing table for P, so the data file keeps P at its tabulated fixed spacing ahead of G1 while modeling the focus action as the G1/front-unit objectward displacement required by the paraxial solve. The stop and G2 remain fixed for focus at a given zoom position.

The patent gives the infinity-focus zoom spacings but does not publish a close-focus spacing table. The close-focus values below were solved paraxially for a 0.30 m object distance measured from the image plane, using the Example 4 prescription with the rear LPF folded into the final air-equivalent back focal distance.

| Zoom state | $d_8$ at infinity | $d_8$ at 0.30 m | Focus-unit displacement |
|---|---:|---:|---:|
| Wide | 17.4708 mm | 18.6130 mm | +1.1422 mm |
| Intermediate | 8.37574 mm | 9.51237 mm | +1.13663 mm |
| Telephoto | 2.42841 mm | 3.58312 mm | +1.15471 mm |

The positive sign means that the air space between G1 and the stop/G2 increases. In physical terms, the front unit moves objectward for close focus. This direction is the opposite of a rearward-retracting focus interpretation. The paraxial close-focus magnification computed from the same model is approximately 0.044x at wide angle, 0.067x at the intermediate position, and 0.104x at telephoto.

## Aspherical Surfaces

Example 4 has one aspherical surface: surface 4A, the image-side surface of L1.

The patent sag equation is written in the form:

$$
X(y)=\frac{y^2}{r\left[1+\sqrt{1-Ky^2/r^2}\right]}+A_4y^4+A_6y^6+A_8y^8+A_{10}y^{10}
$$

In this convention, the tabulated patent value $K = 1$ corresponds to a spherical base. The standard conic constant used in the data file is therefore $K_{standard}=K_{patent}-1$. For Example 4, $K_{patent}=0.7721$, so $K_{standard}=-0.2279$.

| Surface | R | Patent K | Standard K | A4 | A6 | A8 | A10 |
|---|---:|---:|---:|---:|---:|---:|---:|
| 4A | +7.6618 mm | 0.7721 | -0.2279 | -7.96219e-6 | +8.08394e-8 | -3.39865e-9 | -1.43235e-10 |

The rear L1 asphere corrects the high-order aberration burden created by the compact negative front group. Its coefficients are substantially different from those of Example 1, so the Example 4 asphere must be transcribed from Table 4 rather than copied from the first example.

## Conditional Expressions

The fourth example satisfies the patent's stated conditional expressions. Representative values from Table 4 are reproduced below, with focal lengths and distances independently rechecked from the prescription.

| Expression | Formula | Example 4 value |
|---|---|---:|
| (1-1) | $(-f_1)/|f_{L56}|$ | 0.133 |
| (1-2) | $SL56/f_2$ | 0.355 |
| (1-3) | $SB/S_2$ | 0.135 |
| (1-4) | $f_2/TL_w$ | 0.285 |
| (1-5) | $n_{dLi}$ for the high-index negative lens in G2 | 1.903 (L7) |
| (2-1) | $(r_{4R}+r_{4F})/(r_{4R}-r_{4F})$ | -0.074 |
| (2-2) | $|f_{L78}/f_{L56}|$ | 0.226 |
| (2-3) | $f_2/S_2$ | 1.297 |
| (3-1) | $f_2/f_w$ | 1.503 |
| (4-1) | $S_2/TL_w$ | 0.220 |
| (4-2) | $f_2/\sqrt{f_w f_t}$ | 0.980 |
| (5-1) | $S_1/f_w$ | 0.769 |
| (5-2) | $(r_{2F}+r_{1R})/(r_{2F}-r_{1R})$ | 0.855 |
| (5-4) | $(r_{1R}-r_{1F})/(r_{1R}+r_{1F})$ | -0.486 |
| (6-3) | $(-f_1)/S_1$ | 1.995 |
| (6-4) | $f_{L1}/f_{L2}$ | 0.310 |
| (6-6) | $n_{dL2}$ | 1.498 |
| (6-7) | $ν_{dL2}$ | 82.57 |

The most product-relevant conditions are the first-group compactness and glass-selection conditions: (5-1), (5-2), (6-3), (6-4), (6-6), and (6-7). Together they constrain the compact front negative group and the ED negative element that allow the lens to cover the CX diagonal without excessive lateral color.

## Verification Summary

The prescription was independently checked with a paraxial reduced-angle ray trace. The rear low-pass filter was first included exactly as in the patent to verify the prescription, then removed and replaced by the air-equivalent back focal distance for the final data file. This preserves the paraxial imaging behavior while avoiding inclusion of the camera-side filter stack as a lens element.

| Quantity | Wide | Intermediate | Telephoto | Patent value |
|---|---:|---:|---:|---|
| Computed EFL | 11.3437 mm | 17.3825 mm | 26.6644 mm | 11.35 / 17.40 / 26.71 mm |
| $FNO$ used for stop sizing | 3.63 | 4.56 | 5.77 | 3.63 / 4.56 / 5.77 |
| Physical TL | 59.9000 mm | 56.7320 mm | 59.9056 mm | 59.9000 / 56.7320 / 59.9056 mm |
| Air-equivalent BFD used in data | 18.9494 mm | 24.8765 mm | 33.9974 mm | ABF table values |

The computed group focal lengths are $f_1=-17.413$ mm and $f_2=+17.055$ mm, matching the patent's rounded $-17.41$ mm and $+17.05$ mm values. The first cemented doublet has $f_{L56}=-130.70$ mm and the second has $f_{L78}=+29.55$ mm. The surface-by-surface Petzval sum is +0.00530 mm^-1, corresponding to a Petzval radius of about -188.7 mm.

Semi-diameters were not published in Table 4. They were estimated from combined marginal and chief-ray envelopes over the three zoom positions and then constrained by physical edge thickness, element front/rear semi-diameter ratio, and cross-gap sag clearance. The limiting constraint is the narrow L1-L2 air gap after the aspherical rear surface of L1. The front-group semi-diameters in the data file therefore represent a physically conservative clear-aperture model, not a claim that the production mechanical aperture is identical.

## Design Heritage and Context

The lens belongs to the compact negative-positive zoom family used in many mirrorless and compact-camera standard zooms. The first group provides negative leading power and focus travel; the second group supplies the positive imaging power. The distinctive feature of this patent is not the two-group architecture itself, but the rear positive group's split modified-triplet structure: a positive singlet followed by a positive-negative cemented doublet and a negative-positive cemented doublet.

This arrangement reduces positional sensitivity by distributing the coma, Petzval, and chromatic correction work over two cemented pairs. In a small CX-format retractable lens, that distribution is valuable because even small element-placement errors can have visible effects at the wide-angle end.

## Sources

- US 2015/0153549 A1, Muratani / Nikon, "Zoom Lens System, Optical Apparatus and Method for Manufacturing Zoom Lens System," especially Fourth Example, Table 4 and FIGS. 7A-7C / 8A-8C.
- Nikon product specifications for the 1 NIKKOR 11-27.5mm f/3.5-5.6: focal range, CX format, f/3.5-5.6 maximum aperture, seven-blade diaphragm, one ED element, one aspherical element, internal focusing, and 0.30 m minimum focus distance.
- Nikon 1 V2 Reference Manual lens specifications: 1 NIKKOR 11-27.5mm f/3.5-5.6 construction of 8 elements / 6 groups with 1 ED element, 1 aspherical element, and 1 protective glass element.
- Nikon product-history page for the Nikon 1 system lens lineup, listing the same optical construction and protective glass note.
- Hikari, OHARA, HOYA, and Schott optical-glass catalog data used for nd/νd class matching. Where the patent does not name a catalog glass, the analysis labels the result as a class match rather than an asserted vendor identity.
