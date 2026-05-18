# Canon EF-S 24mm f/2.8 STM — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** JP 2015-111192 A (Japan), "Optical System and Image Pickup Apparatus Having the Same"
**Applicant:** Canon Inc. (Tokyo, Japan)
**Inventor:** Gyoda Yuichi (行田 裕一)
**Filed:** December 6, 2013 (Priority: 特願2013-252979)
**Published:** June 18, 2015

**Embodiment analyzed:** Numerical Example 1 (数値実施例１, ¶0066)

The following convergent evidence identifies Example 1 as the production Canon EF-S 24mm f/2.8 STM (released November 2014):

1. **Element/group count:** 6 elements in 5 air-separated groups — matches Canon's published specification exactly.
2. **Aspherical element count:** One aspherical surface (surface 12) on the rearmost element — matches Canon's specification of "one aspherical element."
3. **Focal length:** Patent EFL = 24.50 mm; production lens marketed as 24 mm.
4. **Maximum aperture:** Patent F/2.88; production lens marketed as f/2.8.
5. **Image circle:** Patent image height 13.66 mm (image circle diameter ≈ 27.3 mm), consistent with the Canon APS-C sensor diagonal of 26.82 mm with slight margin.
6. **Half-field angle:** Patent states 29.14°, yielding a diagonal angle of view of 58.3° — Canon publishes 59°10′.
7. **Focus mechanism:** Patent Example 1 describes unit focusing by advancing the entire optical assembly toward the object (¶0051); Canon's specification reads "Focus Adjustment: Full lens extension."
8. **Design type:** Retrofocus (negative-positive) with long back focal distance (BFD/EFL = 1.46), as required for the EF-S mount's 44 mm flange distance operating on an APS-C sensor.
9. **Patent timing:** Filed December 2013, roughly eleven months before the November 2014 product release.

## Optical Architecture

The Canon EF-S 24mm f/2.8 STM is a six-element retrofocus design with a negative-power front group followed by a positive-power rear group, separated by a flare-cut stop (P) and the aperture stop (SP). The flare-cut stop (surface 5, ¶0016) sits in the air space between the front and rear groups, blocking stray marginal rays that the strongly diverging front group would otherwise scatter into the rear group as ghost images or veiling flare. The overall power distribution is **negative–positive**, the defining characteristic of the retrofocus (inverted telephoto) layout. This architecture enables a back focal distance (35.68 mm) substantially longer than the focal length (24.50 mm), with BFD/EFL = 1.46 — necessary to clear the EF-S mirror box and accommodate the sensor cover glass assembly.

The six elements divide into five air-separated groups:

| Group | Elements | Power | Role |
|-------|----------|-------|------|
| G1 | L1 (FG1) | Positive ($f$ = +40.3 mm) | Front collector; establishes retrofocus leverage |
| G2 | L2 (FG2) | Negative ($f$ = −22.3 mm) | Diverging element; primary contributor to negative front-group power |
| G3 | L3+L4 (RG1+RG2) | Negative ($f$ = −31.3 mm) | Cemented doublet; corrects spherical aberration, high-order coma, and sagittal flare |
| G4 | L5 (RG3) | Positive ($f$ = +24.6 mm) | Main positive relay; strongest single contributor to rear-group convergence |
| G5 | L6 (RG4) | Positive ($f$ = +42.5 mm) | Field-flattening positive meniscus with aspherical front surface |

The front group FB (G1 + G2) carries a combined focal length of −62.0 mm. The rear group RB (G3 + G4 + G5, comprising surfaces 7–13) carries a combined focal length of +22.1 mm. The pronounced asymmetry — the rear group's power magnitude exceeds that of the front group by a factor of roughly 2.8 — produces the long back focal distance characteristic of a retrofocus layout while keeping the total track compact at 64.83 mm (2.65× the focal length).

## Element-by-Element Analysis

### L1 (FG1) — Positive Meniscus, Convex to Object

$n_d$ = 1.91082, $\nu_d$ = 35.3. Glass: S-LAH55V (OHARA) — dense lanthanum flint. $f$ = +40.3 mm.

L1 is the frontmost element and the only positive element in the front group. Its high refractive index ($n_d$ = 1.91) is mandated by the patent's Condition (8): $N_{dF1}$ > 1.75 (¶0042), which ensures that the element can contribute sufficient positive power with moderate surface curvatures, thereby controlling field curvature and astigmatism. With both radii positive (R1 = +23.706, R2 = +63.184), the element takes a meniscus form convex toward the object. This shape directs off-axis rays into the negative element L2 at favorable incidence angles, reducing the generation of coma and distortion early in the optical train.

The high-index, relatively low-dispersion ($\nu_d$ = 35.3) glass is characteristic of the dense lanthanum flint family. While $\nu_d$ < 50 places it firmly in flint territory, the lanthanum composition provides the high index needed to flatten the Petzval surface without the excessive dispersion of a classical dense flint. The patent specifically calls for high-index glass in this position to balance the field curvature contribution of the strongly positive rear group (¶0042).

### L2 (FG2) — Negative Meniscus, Convex to Object

$n_d$ = 1.48749, $\nu_d$ = 70.2. Glass: S-FSL5 (OHARA) — fluorite-substitute crown. $f$ = −22.3 mm.

L2 is the strongly negative element that, together with L1, forms the negative front group ($f_{FB}$ = −62.0 mm). Both radii are positive (R3 = +22.266, R4 = +7.213), forming a deeply curved negative meniscus convex to the object. The rear surface (R4 = +7.213 mm) is the most strongly curved surface in the entire lens, and the steep exit angle it imposes on transmitted rays is responsible for much of the beam divergence that creates the long back focal distance.

The glass is a low-index fluorite crown ($n_d$ = 1.487, $\nu_d$ = 70.2) — the lowest-dispersion glass in the design. Pairing this low-dispersion negative element with the high-index positive L1 ($\nu_d$ = 35.3) produces a favorable achromatic balance within the front group. The large Abbe number difference ($\Delta\nu_d$ = 34.9) between L1 and L2 enables effective correction of axial chromatic aberration contributed by the front group, particularly important given L2's strong negative power. The low index also keeps the Petzval contribution of this negative element in the correct (image-flattening) direction.

### L3 (RG1) — Positive Meniscus, Concave to Object *(cemented with L4)*

$n_d$ = 1.69680, $\nu_d$ = 55.5. Glass: S-BAL42 (OHARA) — barium crown. $f$ = +19.9 mm (standalone in air).

L3 is the first element of the rear group and the positive component of the cemented doublet (G3). Both radii are negative (R7 = −16.321, R8 = −8.400), forming a meniscus concave to the object. The standalone focal length of +19.9 mm arises because the strongly curved rear surface (R = −8.400) would have very large positive power when refracting glass into air. However, L3 does not operate in air on its rear side — it is cemented to L4.

**In-situ behavior:** Within the cemented assembly, L3's rear surface (the junction with L4) sees only the small index step from $n_d$ = 1.69680 to $n_d$ = 1.80610, producing a junction power of just −0.013 mm⁻¹ compared to the +0.083 mm⁻¹ it would have as a glass-to-air interface. Consequently, L3's in-situ focal length is approximately −17.5 mm — the element acts as a diverging component within the cemented assembly, dominated by its strongly negative front surface. This is a critical distinction: the patent reports L3's standalone focal length as +19.87 mm (which is correct for an element surrounded by air), but its actual optical contribution within the doublet is negative.

The glass is a medium-index barium crown, providing moderate dispersion ($\nu_d$ = 55.5) and a refractive index that bridges between the air interface and the higher-index flint of L4.

### L4 (RG2) — Negative Meniscus, Concave to Object *(cemented with L3)*

$n_d$ = 1.80610, $\nu_d$ = 33.3. Glass: S-TIH10 (OHARA) — dense flint. $f$ = −13.7 mm (standalone in air).

L4 is the sole negative element in the rear group and the only element the patent designates as having a meniscus shape "concave toward the object" (物体側に凹面を向けたメニスカス形状, ¶0026). Both radii are negative (R8 = −8.400, R9 = −36.438), with the more strongly curved surface toward the object. The patent's shape factor for this element is:

$$\frac{R_{2a} + R_{2b}}{R_{2a} - R_{2b}} = \frac{-8.400 + (-36.438)}{-8.400 - (-36.438)} = -1.60$$

This satisfies Condition (1): $-3.0 < \text{value} < -1.1$ (¶0034). The patent explains that if L4 were biconvex or convex-to-object instead of this concave-to-object meniscus shape, rays striking its object-side surface would be "kicked upward" (跳ね上げられ), generating excessive coma and astigmatism.

**In-situ behavior:** Within the cemented assembly, L4's front surface is the low-power junction, while its rear surface (R9 = −36.438, glass → air) carries the dominant power of +(1.0 − 1.80610)/(−36.438) = +0.022 mm⁻¹. The result is that L4 in-situ acts as a weakly positive element ($f \approx$ +108 mm), in stark contrast to its strongly negative standalone character. The combined cemented doublet (L3+L4) has a net focal length of −31.3 mm.

**Purpose of the cemented doublet:** The patent emphasizes (¶0025–0026) that cementing L3 to L4 suppresses high-order spherical aberration and sagittal flare that would otherwise arise at the strongly curved junction interface. If these surfaces were separated by an air gap, the large refractive bending at each glass-air interface would generate severe higher-order aberrations. Cementing eliminates these two high-power glass-air transitions, replacing them with a single low-power glass-glass junction.

The crown-flint pairing (L3: $\nu_d$ = 55.5; L4: $\nu_d$ = 33.3; $\Delta\nu_d$ = 22.2) also provides chromatic correction within the rear group. The flint component L4 achromatizes against the dominant positive power of the rear group, which is carried primarily by L5 and L6.

### L5 (RG3) — Biconvex Positive

$n_d$ = 1.59522, $\nu_d$ = 67.7. Glass: S-FPM2 (OHARA) — fluorophosphate crown. $f$ = +24.6 mm.

L5 is the strongest air-separated positive element in the rear group and the primary source of convergent power. Its biconvex shape (R10 = +227.537, R11 = −15.547) gives it a nearly plano-convex profile — the front surface is very weakly curved while the rear surface carries most of the refracting power. This strongly asymmetric form reduces coma by presenting a nearly flat surface to the weakly diverging beam emerging from the negative cemented doublet, concentrating the refraction at the steeply curved rear surface where the beam geometry is more favorable.

The glass is a fluorophosphate crown with high Abbe number ($\nu_d$ = 67.7) and positive anomalous partial dispersion. The patent specifies through Conditions (4) and (5) (¶0038) that the RG3 element must satisfy:

$$1.55 < N_{dR3} < 1.65 \qquad \text{and} \qquad \theta_{gF,R3} - (-0.001682 \cdot \nu_{dR3} + 0.6438) > 0.01$$

From Table 1, $\theta_{gF,R3}$ = 0.544, yielding a deviation of +0.014 above the Schott normal line. This positive anomalous partial dispersion ($\Delta P_{gF}$ ≈ +0.014) means the glass has proportionally more dispersion in the blue-violet region (g-to-F, 435.8–486.1 nm) relative to the primary spectrum (F-to-C) than a "normal" glass of the same Abbe number. The patent requires this property to correct lateral chromatic aberration (¶0038); positive $\Delta P_{gF}$ in a strongly positive element provides an extra degree of freedom for secondary spectrum correction that is unavailable with normal-dispersion glasses. Without it, the secondary spectrum residual — manifesting as color fringing at the field edges — would remain uncorrected in this wide-angle design.

### L6 (RG4) — Positive Meniscus, Concave to Object (1× Aspherical Surface)

$n_d$ = 1.58313, $\nu_d$ = 59.4. Glass: E-C3 / BSC3 class (HOYA) or H-ZBAK6 (CDGM) — borosilicate crown. $f$ = +42.5 mm.

L6 is the rearmost element and carries the only aspherical surface in the design (surface 12, its object-facing side). Both radii are negative (R12 = −34.842, R13 = −15.035), forming a positive meniscus concave to the object. The element sits at the point in the optical train where both axial and off-axis ray bundles reach their largest diameters (effective diameter of surface 13 is 18.94 mm, the largest in the lens), making it the optimal location for an aspherical corrector.

The patent notes (¶0045) that L6 (RG4) is the preferred position for an asphere because both the on-axis marginal ray height and the off-axis chief ray height are large at this element. Placing the asphere here allows a single surface to simultaneously address field curvature and residual spherical aberration — corrections that would otherwise require additional elements.

The glass is a borosilicate crown of moderate index and dispersion. Its $n_d$ and $\nu_d$ match two catalog entries within transcription tolerance: HOYA E-C3 / BSC3 and CDGM H-ZBAK6 (both $\Delta n_d$ = 0, $\Delta\nu_d$ < 0.1). No OHARA catalog glass corresponds to this $n_d$/$\nu_d$ pair, suggesting Canon sourced this element from HOYA or CDGM, or used a proprietary moldable variant with the same refractive properties. Canon's high-volume production of this pancake lens at a low price point would strongly favor precision glass molding (PGM) over conventional polishing for the aspherical element.

## Glass Identification and Selection

The design uses six distinct glass types spanning a wide range of refractive index (1.487–1.911) and Abbe number (33.3–70.2). All identifications are based on exact $n_d$/$\nu_d$ matching against the OHARA, HOYA, and CDGM catalogs; residuals are within transcription tolerance ($\Delta n_d$ < 1×10⁻⁴, $\Delta\nu_d$ < 0.3).

| Element | $n_d$ | $\nu_d$ | Glass (probable) | Family | Role |
|---------|-------|---------|-------------------|--------|------|
| L1 | 1.91082 | 35.3 | S-LAH55V (OHARA) | Dense lanthanum flint | High-index positive collector; Petzval field flattening |
| L2 | 1.48749 | 70.2 | S-FSL5 (OHARA) | Fluorite crown | Low-dispersion negative; front-group achromatization |
| L3 | 1.69680 | 55.5 | S-BAL42 (OHARA) | Barium crown | Crown component of cemented achromatic doublet |
| L4 | 1.80610 | 33.3 | S-TIH10 (OHARA) | Dense flint | Flint component of cemented doublet; aberration correction |
| L5 | 1.59522 | 67.7 | S-FPM2 (OHARA) | Fluorophosphate crown | Anomalous dispersion positive; lateral color correction |
| L6 | 1.58313 | 59.4 | E-C3 / BSC3 (HOYA) or H-ZBAK6 (CDGM) | Borosilicate crown | Moldable aspherical field flattener (PGM variant inferred) |

**Chromatic strategy:** The design employs two distinct achromatic pairings. In the front group, L1 ($\nu_d$ = 35.3) and L2 ($\nu_d$ = 70.2) provide a large Abbe number difference of 34.9, correcting the axial chromatic aberration introduced by the front group's strong negative power. In the rear group, the cemented doublet L3 ($\nu_d$ = 55.5) + L4 ($\nu_d$ = 33.3) provides $\Delta\nu_d$ = 22.2, achromatizing the rear group's positive contributions. L5's fluorophosphate glass ($\theta_{gF}$ = 0.544, $\Delta P_{gF}$ ≈ +0.014) addresses secondary spectrum — particularly lateral color at the field edges — without requiring an ED element.

**Petzval sum:** The surface-by-surface Petzval sum is +0.00426 mm⁻¹, giving a Petzval radius of +235 mm (9.6× the focal length). This moderately under-corrected Petzval sum reflects the difficulty of balancing field curvature in a compact retrofocus design with only six elements. L1's high refractive index ($n_d$ = 1.911) is the primary countermeasure: by increasing $n_d$ at a strongly positive surface, its Petzval contribution ($\phi / n \cdot n'$) is reduced, partially compensating for the dominant positive contributions of the rear group.

## Focus Mechanism

The lens employs **unit focusing**: all six elements translate together as a rigid assembly toward the object when focusing from infinity to close (¶0051). No internal air gaps change during focusing. The entire optical barrel extends forward, driven by a Canon STM (Stepping Motor) actuator.

Canon publishes a minimum focus distance of 0.16 m (measured from the sensor plane), yielding a maximum magnification of 0.27×. The patent does not provide close-focus prescription data for Example 1 (only Example 3 includes floating-focus variable spacings), but unit focusing is fully defined by the mechanical extension of the assembly. Because no internal spacings change, the only prescription value that varies with conjugate is the back focal distance: the entire lens moves forward as a rigid body, increasing the BFD by the extension distance.

**Close-focus back focal distance:** A finite-conjugate paraxial ABCD matrix trace at the Canon-published MFD of 0.16 m (object distance = 160 − 64.83 = 95.17 mm from the front vertex) yields a close-focus BFD of 42.32 mm (compared to 35.68 mm at infinity), corresponding to a lens extension of 6.64 mm. The computed magnification at this conjugate is −0.271×, matching Canon's published 0.27× to within rounding. The self-consistency between the patent's infinity prescription, Canon's published MFD, and Canon's published magnification confirms that no floating group or air-gap change is required.

| Parameter | Infinity | Close focus (0.16 m) |
|-----------|----------|---------------------|
| BFD | 35.68 mm | 42.32 mm |
| Extension from infinity | — | 6.64 mm |
| Magnification | 0× | 0.27× |

Unit focusing is the simplest and lowest-cost focus mechanism, consistent with the EF-S 24mm f/2.8 STM's positioning as an ultra-compact, budget-friendly pancake lens. The trade-off is that aberration balance degrades at close focus — particularly field curvature and lateral color — because no floating group compensates for conjugate changes. The patent acknowledges this limitation and presents Example 3 as a floating-focus variant for improved close-range performance (¶0054).

## Aspherical Surface

### Location and Convention

The sole aspherical surface is **surface 12** — the object-facing (front) surface of element L6 (RG4). The patent's aspheric equation (¶0063–0064) uses the standard form:

$$Z(h) = \frac{(1/r)\,h^2}{1 + \sqrt{1 - (1+K)(h/r)^2}} + A_4 h^4 + A_6 h^6 + A_8 h^8 + A_{10} h^{10} + A_{12} h^{12}$$

where $r$ is the paraxial radius of curvature, $K$ is the conic constant, and $A_4$ through $A_{12}$ are the polynomial coefficients. The conic constant convention is standard: $K = 0$ corresponds to a sphere.

### Coefficients (Surface 12)

| Parameter | Value |
|-----------|-------|
| $R$ | −34.842 mm |
| $K$ | 0.0 |
| $A_4$ | −5.24174 × 10⁻⁵ |
| $A_6$ | +5.25723 × 10⁻⁸ |
| $A_8$ | −3.53661 × 10⁻⁹ |
| $A_{10}$ | +3.36031 × 10⁻¹¹ |
| $A_{12}$ | −1.48386 × 10⁻¹³ |

### Departure Profile

With $K$ = 0 (spherical base), the aspherical departure is entirely due to the polynomial terms. At the semi-diameter of 8.88 mm (half of the patent's listed effective diameter of 17.76 mm), the total departure from the base sphere is −0.370 mm (−370 µm), which is substantial. The individual term contributions at the rim are:

| Term | Departure at $h$ = 8.88 mm |
|------|---------------------------|
| $A_4 h^4$ | −326 µm |
| $A_6 h^6$ | +26 µm |
| $A_8 h^8$ | −137 µm |
| $A_{10} h^{10}$ | +102 µm |
| $A_{12} h^{12}$ | −36 µm |
| **Total** | **−370 µm** |

The departure is dominated by the $A_4$ term (−326 µm), with $A_8$ (−137 µm) and $A_{10}$ (+102 µm) contributing significant higher-order corrections. The $A_6$ term (+26 µm) and $A_{12}$ term (−36 µm) provide zonal fine-tuning. The sign pattern of the coefficients — alternating negative and positive — indicates a complex correction profile that cannot be achieved by a simple conic.

The **negative departure** on this concave-to-object surface ($R$ < 0) means the aspherical surface sags more steeply at the periphery than the base sphere. Since surface 12 has negative paraxial power (−0.0167 mm⁻¹; it refracts air into glass at a concave-to-object interface), the increased curvature at the rim makes the local negative power stronger at larger ray heights. This reduces the net positive power of element L6 at the periphery (since the rear surface carries the dominant positive power), modifying the converging wavefront in two complementary ways. For spherical aberration, the departure introduces a controlled negative (under-corrected) contribution at this surface that offsets over-corrected residuals from the strongly positive rear elements. For field-dependent aberrations, the reduced peripheral element power alters the higher-order astigmatic and field curvature balance, flattening the image surface beyond what the paraxial Petzval sum alone determines. The higher-order polynomial terms ($A_8$ through $A_{12}$) provide zonal fine-tuning that shapes the correction profile across the full aperture, suppressing zonal spherical aberration and residual oblique astigmatism that the six-element spherical design cannot correct on its own.

The patent states (¶0045) that placing the asphere on L6 (RG4) is advantageous because both axial and off-axis ray bundles are large at this element, enabling a single surface to correct both on-axis (spherical aberration) and off-axis (field curvature, astigmatism) aberrations. Were the asphere placed on an element closer to the aperture stop, it would primarily affect on-axis aberrations and would have less leverage on the field.

### Manufacturing

The glass ($n_d$ = 1.58313, $\nu_d$ = 59.4) matches two catalog entries: HOYA BSC3 / E-C3 and CDGM H-ZBAK6, both within exact tolerance ($\Delta n_d$ = 0, $\Delta\nu_d$ < 0.1). No OHARA catalog glass corresponds to this $n_d$/$\nu_d$ pair, suggesting Canon sourced this element from HOYA, CDGM, or used a proprietary moldable variant with the same refractive properties. Canon's high-volume production of this pancake lens at a low price point would strongly favor precision glass molding (PGM) over conventional polishing for the aspherical element.

## Conditional Expressions

The patent defines eight conditional inequalities (¶0033, ¶0043). Example 1 satisfies all eight, as well as the tighter preferred ranges (Conditions 1a–8a):

| Condition | Expression | Required range | Preferred range | Example 1 value | Status |
|-----------|-----------|----------------|-----------------|-----------------|--------|
| (1) | $(R_{2a}+R_{2b})/(R_{2a}-R_{2b})$ | (−3.0, −1.1) | (−2.5, −1.4) | −1.60 | ✓ Preferred |
| (2) | $\|f_F / f\|$ | (1.5, 8.0) | (2.0, 5.0) | 2.53 | ✓ Preferred |
| (3) | $f_R / f$ | (0.50, 1.20) | (0.70, 1.18) | 0.90 | ✓ Preferred |
| (4) | $N_{dR3}$ | (1.55, 1.65) | — | 1.59522 | ✓ |
| (5) | $\theta_{gF,R3} - (-0.001682 \nu_{dR3} + 0.6438)$ | > 0.01 | — | 0.014 | ✓ |
| (6) | $BF / f$ | (1.0, 2.5) | (1.2, 2.0) | 1.46 | ✓ Preferred |
| (7) | $D / f$ | (0.5, 1.8) | (0.9, 1.7) | 1.19 | ✓ Preferred |
| (8) | $N_{dF1}$ | > 1.75 | > 1.80 | 1.91082 | ✓ Preferred |

## Verification Summary

Independent paraxial y-$\overline{u}$ ray trace (ABCD matrix method) confirms the patent's published values:

| Parameter | Computed | Patent | Residual |
|-----------|----------|--------|----------|
| System EFL | 24.506 mm | 24.50 mm | +0.006 mm |
| BFD (infinity) | 35.687 mm | 35.68 mm | +0.007 mm |
| Front group $f_{FB}$ | −62.01 mm | −62.02 mm | +0.01 mm |
| Rear group $f_{RB}$ | +22.08 mm | +22.08 mm | < 0.01 mm |
| Total track | 64.83 mm | 64.83 mm | < 0.01 mm |
| Lens total thickness $D$ | 29.14 mm | 29.15 mm | −0.01 mm (rounding) |
| L1 standalone $f$ | +40.28 mm | +40.28 mm | < 0.01 mm |
| L2 standalone $f$ | −22.32 mm | −22.32 mm | < 0.01 mm |
| L3 standalone $f$ | +19.87 mm | +19.87 mm | < 0.01 mm |
| L4 standalone $f$ | −13.72 mm | −13.72 mm | < 0.01 mm |
| L5 standalone $f$ | +24.62 mm | +24.62 mm | < 0.01 mm |
| L6 standalone $f$ | +42.55 mm | +42.54 mm | +0.01 mm |
| Petzval sum | +0.00426 mm⁻¹ | — | — |
| BFD (close, MFD = 0.16 m) | 42.32 mm | — | — |
| Magnification at MFD | 0.271× | 0.27× (Canon spec) | < 0.01 |

The 0.01 mm residual on the lens total thickness $D$ (computed 29.14 mm vs. patent Table 1's 29.15 mm) is a last-digit rounding artefact: summing all element thicknesses from the prescription yields 2.83 + 0.90 + 4.82 + 0.80 + 4.39 + 3.55 = 17.29 mm of glass, plus inter-element air gaps within the lens (excluding the final BFD) totaling 0.25 + 4.00 + 3.26 + 3.24 + 0.20 + 0.90 = 11.85 mm, giving $D$ = 29.14 mm. The patent's table rounds to 29.15. All conditional expression values reproduced to within rounding of the patent's tabulated results (Tables 1 and 2).

## Design Heritage and Context

The Canon EF-S 24mm f/2.8 STM (released November 2014) is the second pancake lens in Canon's EOS lineup, following the EF 40mm f/2.8 STM (2012). Both share a design philosophy of extreme compactness — the EF-S 24mm measures just 22.8 mm in length (barrel depth) and weighs 125 g — achieved through a minimal element count and unit focusing.

The six-element retrofocus architecture described in JP 2015-111192A represents a compact evolution of the classic negative-positive wide-angle formula. With only six elements (two in the negative front group, four in the positive rear group including one cemented doublet), the design achieves a half-field angle of 29.1° (diagonal angle of view ≈ 58°) while maintaining the long back focal distance required by the EF-S mount. The patent explicitly prioritizes compactness through its rear-group construction: three positive lenses and one negative lens are shown to be the minimum configuration that simultaneously controls spherical aberration, coma, sagittal flare, and field curvature (¶0019–0021). Adding a fourth positive lens would improve correction but enlarge the system; reducing the negative count below one would sacrifice aberration balance.

The patent also presents three alternative embodiments. Example 3 ($f$ = 20.65 mm, floating focus) uses a front-group asphere and floating focus for improved close-range performance at a wider field angle. Example 4 ($f$ = 27.59 mm) cements the front-group elements FG1 and FG2 into a single doublet, reducing the group count from five to four at a narrower half-field angle of 26.3°. Example 1's balance of simplicity, compactness, and optical quality at the 24.5 mm focal length made it the production choice.

## Sources

1. JP 2015-111192 A (2015), "光学系及びそれを有する撮像装置" (Optical System and Image Pickup Apparatus Having the Same), Canon Inc., Inventor: Gyoda Yuichi.
2. Canon Inc. official product specifications: EF-S 24mm f/2.8 STM (canon-europe.com, usa.canon.com).
3. OHARA Inc. optical glass catalog (ohara-inc.co.jp) — S-LAH55V, S-FSL5, S-BAL42, S-TIH10, S-FPM2.
4. HOYA Corporation optical glass catalog — BSC3 / E-C3 (borosilicate crown).
5. CDGM optical glass catalog — H-ZBAK6 (borosilicate crown).
