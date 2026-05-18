# Panasonic Leica DG Summilux 15mm f/1.7 ASPH — Optical Analysis

## Patent Reference and Design Identification

**Patent:** US 2015/0268449 A1, "Single Focal Length Imaging Optical System, Lens Barrel, Interchangeable Lens Apparatus and Camera System."
**Applicant:** Panasonic Intellectual Property Management Co., Ltd., Osaka (JP).
**Inventors:** Yoshiaki Kurioka (Osaka), Takehiro Nishioka (Nara).
**Filed:** February 25, 2015. **Published:** September 24, 2015. **Priority:** March 20, 2014 (JP 2014-057474).

**Embodiment analyzed:** Numerical Example 2, corresponding to Embodiment 2 (FIG. 3, Tables 6–10).

The identification of Example 2 as the production prescription for the Panasonic Leica DG Summilux 15mm f/1.7 ASPH (model H-X015) rests on the following convergent evidence:

1. **Element and group count.** The patent example has 9 elements in 7 groups; the production lens specifies exactly 9 elements in 7 groups.
2. **Aspherical element count.** Five aspherical surfaces are distributed across three elements (L2, L7, L9) in Example 2; Panasonic's product literature lists three aspherical elements.
3. **Focal length.** The computed EFL is 15.484 mm, consistent with the marketed 15 mm focal length and the 30 mm full-frame equivalent on Micro Four Thirds.
4. **Maximum aperture.** The patent states F/1.765, consistent with the marketed f/1.7 specification.
5. **Image height.** The patent specifies Y = 10.0 mm (half-diagonal of a 20 mm image circle), which represents the design's performance-optimized field rather than the extreme sensor corner. The Micro Four Thirds sensor diagonal is 21.6 mm (half-diagonal 10.8 mm), so the production lens illuminates slightly beyond the patent's optimization boundary; this is standard practice in modern digital lens patents.
6. **Focus mechanism.** The patent describes inner focus via the second lens unit G2 moving along the optical axis, consistent with Panasonic's published description of an internal focusing system with a stepping motor.
7. **Patent timing.** The priority date (March 2014) precedes the lens's announcement at Photokina 2014 and its market release.

Among the five numerical examples, Example 2 provides the closest match to the production lens's overall compactness (L = 53.8 mm) and back focal distance. Examples 3 and 4 share a nearly identical surface prescription with Example 2 but differ only in their aspherical coefficients; Example 2 most closely reproduces the published aberration curves for the production lens.

## Optical Architecture

The Summilux 15mm f/1.7 is a three-unit design with a positive–positive–negative power distribution:

- **G1 (front unit, positive):** Five elements (L1–L5) in four groups, including one cemented doublet (L3+L4). Focal length f_G1 = +29.74 mm. This group serves as the primary refracting unit: it collects the wide-angle field (2ω ≈ 70.5°), introduces the initial convergence, and establishes the aperture stop's position immediately behind it.
- **G2 (second unit, positive):** Three elements (L6–L8) in two groups, with L6 and L7 cemented. Focal length f_G2 = +16.64 mm. G2 provides the dominant focusing power and functions as the inner-focus group, moving toward the object on close focusing.
- **G3 (third unit, negative):** A single negative meniscus element (L9). Focal length f_G3 = −61.05 mm. This weak diverging field-flattener sits close to the image plane, correcting Petzval curvature and controlling the back focal distance.

The overall track length is 53.82 mm (L/Y = 5.38), and the total system EFL is 15.484 mm — yielding a track-to-focal-length ratio TL/EFL of 3.48. The BFD from the last glass surface to the image plane is 14.23 mm, giving BFD/EFL = 0.92 — just under the BFD > EFL threshold that defines a strict retrofocus design. Nevertheless, the architecture carries strong retrofocus influence: the negative-leading front group (L1 and L2 are both negative) extends the total track length dramatically beyond what a simple positive group of the same focal length would require. Given the lens's 36 mm physical length (tip to mount flange) and the MFT flange-to-sensor distance of 19.25 mm, the rear element L9 sits several millimeters past the mount plane inside the camera body — typical of fast wide-angle designs for mirrorless systems with no mirror box to clear.

The aperture diaphragm sits in the air space between G1 and G2, at surface 10 in the prescription. This placement splits the system into a front collector and a rear relay, and its position deep inside the assembly contributes to the compact barrel diameter.

## Element-by-Element Analysis

### L1 — Biconcave Negative

nd = 1.49913, νd = 80.1. Glass: L-FPL51 class (OHARA) — ED fluorophosphate crown. f = −22.49 mm.

L1 is a weakly powered negative meniscus-like element (the front surface is nearly flat at R = −261.1 mm, while the rear surface is strongly curved at R = +11.75 mm). Despite the near-planarity of its first surface, both surfaces contribute negative power, making it formally biconcave. This element serves as a negative field lens at the front of the retrofocus assembly. Its very low dispersion (νd = 80.1) — the highest Abbe number in the entire system — means that L1's negative power contributes relatively little longitudinal chromatic aberration per unit of power (the chromatic contribution of an element scales as φ/νd). This allows L1 to carry significant negative power for the retrofocus architecture without burdening the downstream chromatic correction budget. The dominant chromatic balancing occurs at the L3+L4 cemented doublet, where the large Abbe-number differential (Δνd = 14.8) between the positive element (L3, νd = 40.8) and the negative flint (L4, νd = 26.0) provides the primary achromatization. The choice of an ED-class glass for L1 also helps control secondary spectrum across the wide field angle.

### L2 — Biconcave Negative (2× Asph)

nd = 1.58542, νd = 41.7. Glass: S-TIM2 class (OHARA) — light flint. f = −37.09 mm.

Both surfaces of L2 are aspherical (surfaces 3 and 4 in the prescription). The front surface (surface 3) carries a large oblate-ellipsoid conic constant K = +5.183, producing a significant departure from the spherical base — approximately −25 μm at h = 5 mm, deepening to −81 μm at h = 7 mm. The conic alone steepens the concave surface by 28% at h = 7 mm relative to the sphere, though the alternating-sign polynomial terms partially counteract this, reducing the net steepening of the full aspherical profile to approximately 15% at the same height. Because L2 sits approximately 14.6 mm ahead of the aperture stop — far from the pupil — its aspherical surfaces primarily control off-axis aberrations: barrel distortion and coma for the wide field angle (2ω ≈ 70.5°), which are the dominant aberration challenges for a fast wide-angle lens. The rear surface (surface 4) has K = 0 (spherical base) with polynomial terms that introduce a sign-reversing departure profile: slightly negative near-axis, transitioning to strongly positive at the rim (+42 μm at h = 7 mm), providing a corrective counterbalance to surface 3.

Together, the two aspherical surfaces of L2 function as the primary distortion and coma corrector for the wide-angle front group.

### L3 + L4 — Cemented Doublet (Biconvex Positive + Negative Meniscus)

**L3:** nd = 1.88234, νd = 40.8. Glass: L-LAH53 (OHARA) — high-index lanthanum, PGM-grade. f = +10.36 mm.
**L4:** nd = 1.75409, νd = 26.0. Glass: S-NPH5 class (OHARA) — phosphate heavy flint. f = −22.71 mm.

This cemented doublet is the most powerful element group in the entire lens. L3 is a biconvex positive with the strongest individual power in the system (f = +10.36 mm), contributing the bulk of the front unit's convergence. Its high-index lanthanum glass provides a refractive index of nd = 1.88 to achieve strong curvature with manageable surface radii, while its moderate Abbe number (νd = 40.8) is balanced by the cemented partner L4. The L-LAH53 catalog entry matches the patent values almost exactly (Δnd = 0.0007, Δνd = 0.0), confirming this identification with high confidence.

L4 is a negative meniscus with its convex surface facing the image side — a classic flint partner in a cemented doublet. The heavy phosphate flint (νd = 26.0) provides the high dispersion needed for chromatic correction, and the large index step at the cemented interface (Δnd = 0.128) creates a strong chromatic correction surface. The doublet jointly corrects axial color and spherochromatism generated by the fast cone passing through the high-powered positive surfaces.

The patent notes that L3 and L4 are cemented with each other (¶0058). This cemented interface at R = −13.122 mm is one of the most strongly curved internal surfaces in the system, and its fabrication requires high-precision alignment of two elements with very different thermal expansion coefficients.

### L5 — Biconvex Positive

nd = 1.91597, νd = 36.4. Glass: TAFD33 (HOYA) — ultra-high-index lanthanum dense flint. f = +45.46 mm.

L5 is the final element of the front unit G1 and the element the patent's conditional expressions single out as "the lens element having positive optical power and placed closest to the image side" in the front unit. Its ultra-high refractive index (nd = 1.916 — the highest in the entire system) satisfies condition (1): nd_A > 1.8 (actual: 1.92). The patent (¶0088–0092) explains that this high index is essential to flatten the Petzval sum: because the Petzval contribution of a positive surface is φ/(n·n'), a high nd reduces the curvature contribution per unit of power. At nd = 1.916, L5 adds significant positive power (+45.5 mm focal length) while contributing relatively little to the Petzval sum. The HOYA TAFD33 catalog entry matches the patent values with exceptional precision (Δnd = 0.0002, Δνd = 0.0), making this the strongest glass identification in the prescription.

The nearly symmetric biconvex shape (R_front = +81.14, R_rear = −84.53) distributes the refraction nearly equally across both surfaces, minimizing coma contribution at this position where the beam is converging toward the stop. L5 acts as the final collector that shapes the converging cone entering the aperture diaphragm.

### Aperture Stop (between G1 and G2)

The diaphragm is located in the air space between L5 and L6, at surface 10 in the prescription (d = 5.866 mm from the stop to L6's front surface). Production implementation uses a 7-blade circular aperture design. The stop placement approximately mid-system provides partial symmetry for distortion and lateral color correction, though the negative-leading front group means the system is not geometrically symmetric about the stop.

### L6 + L7 — Cemented Doublet (Biconcave Negative + Biconvex Positive, 1× Asph)

**L6:** nd = 1.78630, νd = 27.5. Glass: NbFD15 class (HOYA) — niobium-containing flint. f = −10.98 mm.
**L7:** nd = 1.76864, νd = 49.7. Glass: TAF5 (HOYA) — tantalum flint. f = +14.17 mm.

This cemented doublet is the leading element of the focusing group G2. L6 is a biconcave negative with the strongest individual negative power in the system (f = −10.98 mm), and its high-dispersion niobium flint glass (νd = 27.5) provides the chromatic lever arm needed to correct the axial color introduced by the positive elements ahead. The cemented interface at R = +72.38 mm is relatively weak, meaning most of the chromatic correction occurs at L6's strongly curved front surface (R = −9.86 mm) and L7's rear surface.

L7's rear surface (surface 13) is aspherical, carrying strong positive departure (+90 μm at h = 5 mm, increasing rapidly to +388 μm at h = 7 mm). This departure profile, combined with the A16 and A18 higher-order coefficients that this surface uniquely employs in the prescription, indicates that surface 13 is the primary corrector for higher-order spherical aberration and oblique spherical aberration in the post-stop relay. The tantalum flint glass of L7 (νd = 49.7) provides the chromatic complement to L6's heavier flint: the Abbe-number differential (Δνd = 22.2) across the cemented interface drives the achromatization, with L7's moderate dispersion balancing L6's strong dispersion.

Together, the L6+L7 doublet is a powerful achromatic unit at the front of the focusing group. The cemented construction ensures stability of the correction under the mechanical stresses of the stepping-motor focus drive.

### L8 — Biconvex Positive

nd = 1.77074, νd = 49.5. Glass: L-LAH83 (OHARA) — high-index lanthanum, PGM-grade. f = +18.21 mm.

L8 is the final element of the focusing group G2. Its nearly plano-convex shape (R_front = +5230, nearly flat; R_rear = −14.07, strongly curved) concentrates all the positive power on the rear surface. This geometry is characteristic of a field-lens element that redirects off-axis ray bundles toward the optical axis without introducing substantial spherical aberration to the on-axis beam. L8's lanthanum glass (νd = 49.5) matches L7's dispersion closely (Δνd < 0.3), minimizing color imbalance within the moving focus group. L-LAH83 provides the closest catalog match (Δnd = 0.002, Δνd = 0.1); TAF1 (HOYA) has identical catalog properties and is an equivalent candidate.

The G2 unit comprising L6+L7+L8 has a combined focal length of +16.64 mm. During focusing from infinity to the 0.20 m minimum focus distance, this entire unit translates forward along the optical axis (toward the object side), as described in ¶0062 and indicated by the arrow in FIG. 3.

### L9 — Negative Meniscus (2× Asph)

nd = 1.69748, νd = 29.0. Glass: E-FD15 class (HOYA) — dense flint. f = −61.05 mm.

L9 constitutes the entire third lens unit G3. It is a negative meniscus with its convex surface facing the image side (both surfaces have negative R values: R_front = −10.52, R_rear = −14.52). Both surfaces are aspherical, and they carry the largest departures in the entire system: surface 16 departs by +370 μm at h = 5 mm, and surface 17 by +290 μm at the same height. These massive positive departures (relative to the spherical base) flatten what would otherwise be a deeply concave surface profile, effectively making L9 act as a weaker meniscus at the rim than its paraxial curvatures would suggest.

The patent identifies L9 as the field-flattener: it controls Petzval curvature (condition 4: f/f_B = −0.25), flattens the image surface, and adjusts the back focal distance for the Micro Four Thirds flange clearance. The patent further notes (¶0131–0133) that this rear negative element should be a single element (not cemented) and should have a concave surface facing the object side — both of which L9 satisfies. The meniscus shape with the concave surface facing the object suppresses overcorrection of the Petzval sum while simultaneously controlling sagittal field curvature (¶0133).

L9's dense flint glass (νd = 29.0) also contributes to lateral chromatic aberration correction: being placed far from the stop and carrying negative power in a high-dispersion glass, it generates lateral color of opposite sign to the front group's contribution.

## Glass Selection

| Element | nd | νd | Glass | Vendor | Class | Role |
|---------|-------|------|-------|--------|-------|------|
| L1 | 1.49913 | 80.1 | FPL51 class | OHARA | ED fluorophosphate | Low-dispersion negative crown |
| L2 | 1.58542 | 41.7 | S-TIM2 class | OHARA | Light flint | Aspherical corrector substrate |
| L3 | 1.88234 | 40.8 | L-LAH53 | OHARA | High-index lanthanum (PGM) | High-power positive collector |
| L4 | 1.75409 | 26.0 | S-NPH5 class | OHARA | Phosphate heavy flint | Chromatic partner to L3 |
| L5 | 1.91597 | 36.4 | TAFD33 | HOYA | Ultra-high-index La flint | Petzval control, high-nd positive |
| L6 | 1.78630 | 27.5 | NbFD15 class | HOYA | Niobium flint | Chromatic corrector in focus group |
| L7 | 1.76864 | 49.7 | TAF5 | HOYA | Tantalum flint | Achromatic partner to L6 |
| L8 | 1.77074 | 49.5 | L-LAH83 | OHARA | High-index lanthanum (PGM) | Field lens in focus group |
| L9 | 1.69748 | 29.0 | E-FD15 class | HOYA | Dense flint | Aspherical field-flattener |

The glass palette spans a wide refractive-index range: from nd = 1.499 (L1, ED crown) to nd = 1.916 (L5, ultra-high-index), satisfying condition (7): nd_MMAX − nd_MMIN = 0.42. The patent explains (¶0123–0130) that this spread is essential to control spherical aberration across a range of field angles without increasing the element count. The maximum-index element (L5) is placed closest to the image side within the front unit, where it suppresses the Petzval sum contribution; the minimum-index element (L1) is placed at the front, where its low index minimizes surface reflection losses at the large entrance aperture.

The Panasonic/Leica glass supply chain for this lens appears to draw from both OHARA (front-group elements L1–L4, and L8) and HOYA (elements L5–L7, L9). OHARA provides the PGM-grade variants (the "L-" prefix glasses like L-LAH53 for L3 and L-LAH83 for L8, which are low-Tg formulations suitable for precision glass molding) and conventional glasses (S-TIM2 for L2, S-NPH5 for L4). HOYA supplies the specialty tantalum and niobium glasses (TAF5 for L7, NbFD15 for L6), the ultra-high-index TAFD33 for L5, and the dense flint for the rear corrector (E-FD15 for L9). Among these, the three aspherical elements — L2 (S-TIM2), L7 (TAF5), and L9 (E-FD15) — are the elements most likely fabricated by precision glass molding. L3, despite using a PGM-grade glass (L-LAH53), is a spherical element and would be conventionally ground and polished.

## Focus Mechanism

The lens employs inner focusing: the second lens unit G2 (comprising L6, L7, and L8 — surfaces 11 through 15) translates as a rigid unit along the optical axis during focusing. Per ¶0062, G2 moves toward the object side when focusing from infinity to close range. The first lens unit G1 and the third lens unit G3 remain stationary relative to the image surface.

This means the variable air gaps in the prescription are:

| Gap | Surface | d at ∞ (mm) | d at MFD (mm) | Role |
|-----|---------|-------------|---------------|------|
| Before G2 | STO | 5.866 | 4.779 | Decreases as G2 moves forward |
| After G2 | 15 | 2.100 | 3.187 | Increases as G2 moves forward |

The conservation constraint d_STO + d_15 = 7.966 mm holds across all focus states. At the 0.20 m minimum focus distance, G2 translates forward by δ = 1.087 mm. The close-focus gap values were derived via paraxial conjugate solve (scipy.optimize.brentq) at an object distance of 146.185 mm from S1 (corresponding to 0.20 m from the sensor plane).

The back focal distance (after L9) remains unchanged during focus, as G3 is fixed. The production lens uses a stepping motor drive for the focus group, enabling smooth, quiet autofocus suitable for both stills and video recording. The minimum focus distance is 0.20 m (7.87 in.), yielding a maximum magnification of approximately 0.1× (0.2× in 35mm equivalent terms).

The inner-focus architecture is well suited to the compact barrel design: because the front and rear groups are stationary, the lens barrel does not extend during focusing, and the 46 mm filter thread remains fixed — important for polarizer and graduated-filter users.

## Aspherical Surfaces

Five surfaces in the prescription are aspherical, distributed across three elements:

- **L2 (surfaces 3 and 4):** Both surfaces of the biconcave negative corrector in the front group.
- **L7 (surface 13):** The rear surface of the biconvex positive in the cemented focus-group doublet.
- **L9 (surfaces 16 and 17):** Both surfaces of the rear negative meniscus field-flattener.

### Aspherical Equation

The patent (¶0141–0146) defines the sag as:

$$Z(h) = \frac{h^2 / r}{1 + \sqrt{1 - (1 + \kappa)(h/r)^2}} + \sum A_n h^n$$

where $\kappa$ is the conic constant (K in the standard notation used here), $r$ is the vertex radius of curvature, and $A_n$ are the polynomial coefficients. The patent uses K directly as the conic constant — no offset convention applies (i.e., K = 0 corresponds to a spherical base surface).

### Coefficients

**Surface 3 (L2 front):**
K = +5.18341, A4 = −2.39853×10⁻⁵, A6 = +1.51467×10⁻⁶, A8 = −2.84434×10⁻⁸, A10 = +3.40010×10⁻¹⁰, A12 = −1.36175×10⁻¹², A14–A18 = 0.

**Surface 4 (L2 rear):**
K = 0, A4 = −2.02569×10⁻⁵, A6 = +1.67870×10⁻⁶, A8 = −3.65979×10⁻⁸, A10 = +4.84842×10⁻¹⁰, A12 = −2.36003×10⁻¹², A14–A18 = 0.

**Surface 13 (L7 rear):**
K = 0, A4 = +1.26458×10⁻⁴, A6 = +1.79290×10⁻⁶, A8 = −1.16002×10⁻⁷, A10 = +4.53927×10⁻⁹, A12 = −7.11480×10⁻¹¹, A14 = −1.77737×10⁻¹³, A16 = +1.87772×10⁻¹⁴, A18 = −1.59045×10⁻¹⁶.

**Surface 16 (L9 front):**
K = 0, A4 = +8.41464×10⁻⁴, A6 = −1.50602×10⁻⁵, A8 = +2.74677×10⁻⁷, A10 = −3.52174×10⁻⁹, A12 = +3.09424×10⁻¹¹, A14 = −1.23311×10⁻¹³, A16–A18 = 0.

**Surface 17 (L9 rear):**
K = 0, A4 = +6.85533×10⁻⁴, A6 = −1.32978×10⁻⁵, A8 = +2.44739×10⁻⁷, A10 = −3.34871×10⁻⁹, A12 = +3.02662×10⁻¹¹, A14 = −1.23632×10⁻¹³, A16–A18 = 0.

### Interpretation

**Surface 3** is the only surface with a non-zero conic constant (K = +5.18). This oblate-ellipsoid base on a concave surface (R = −26.36 mm) deepens the curvature more rapidly at the rim than a sphere would, producing a departure of approximately −81 μm at h = 7 mm. Because L2 is positioned far from the aperture stop (14.6 mm), the aspherical departure primarily affects off-axis ray bundles — controlling barrel distortion and coma across the 70.5° field — rather than on-axis spherical aberration. The large K value is unusual and suggests that L2 is precision glass-molded (the S-TIM2 glass is available in moldable form), as polishing an oblate-ellipsoid surface to this specification would be extremely difficult.

**Surface 4** uses polynomial-only correction (K = 0) with a distinctive sign-reversal profile: the departure is slightly negative near-axis (flattening), transitions through zero around h ≈ 4.5 mm, and becomes strongly positive at the rim (+42 μm at h = 7 mm). This counter-profile to surface 3 creates a compound aspherical corrector pair within a single element.

**Surface 13** carries the highest-order terms in the prescription (A16, A18), indicating that this surface performs fine wavefront correction at the relay position behind the stop. The strong positive departure (+90 μm at h = 5 mm) acts to overcorrect the spherical aberration generated by the preceding negative element L6, compensating across a wide range of ray heights. This is the only aspherical surface within a cemented group, and its position at the exit surface of the doublet (where it interfaces with air) allows it to be fabricated independently on L7 before cementing.

**Surfaces 16 and 17** (both surfaces of L9) carry the largest absolute departures in the system: surface 16 reaches +370 μm at h = 5 mm, and surface 17 reaches +290 μm. Both profiles are monotonically positive with an alternating-sign polynomial series that rolls off the departure growth at the rim. The net effect is to transform L9 from a steep meniscus (paraxially) into a much flatter shape at the rim, which is the higher-order field-correction mechanism: while the Petzval sum is a paraxial quantity unaffected by aspherical terms, the strong positive departure at the rim reduces the effective negative power that off-axis ray bundles experience, correcting the higher-order field curvature (W₂₂₀) and astigmatism (W₂₂₂) that the Petzval approximation cannot capture. This separation between the paraxial Petzval control (handled by L9's spherical base curvatures and nd) and the higher-order field correction (handled by the aspherical departure) is a hallmark of modern digitally optimized designs. The consistency of the coefficient magnitudes between the two surfaces (A4 differs by ~23%, A6 by ~12%) reflects the matched aspherical correction strategy typical of precision glass-molded (PGM) doublet-like pairs.

### Manufacturing Notes

The three aspherical elements (L2, L7, L9) are likely manufactured by precision glass molding (PGM), consistent with Panasonic's established PGM production capabilities for consumer interchangeable lenses. The glass types used — S-TIM2 for L2, TAF5 for L7, and E-FD15 for L9 — are all available in moldable formulations. PGM is the expected fabrication method for consumer lenses at this price point when three or more aspherical elements are specified; polished-glass aspherics at this element count would be cost-prohibitive for a $600 retail product.

## Conditional Expressions

The patent (¶0085–0130) specifies seven conditions that the optical system should satisfy. All are met by Example 2:

| Condition | Expression | Range | Example 2 Value | Status |
|-----------|-----------|-------|-----------------|--------|
| (1) | nd_A | > 1.8 | 1.92 | Satisfied |
| (2) | L / Y | < 8.0 | 5.38 | Satisfied |
| (3) | L_M / Y | < 3.5 | 1.70 | Satisfied |
| (4) | f / f_B | −0.60 to −0.05 | −0.25 | Satisfied |
| (5) | f / f_A | 0.03 to 0.50 | 0.34 | Satisfied |
| (6) | f_M / f | 1.00 to 3.50 | 1.92 | Satisfied |
| (7) | nd_MMAX − nd_MMIN | 0.25 to 0.60 | 0.42 | Satisfied |

Here, nd_A is the d-line index of L5 (the positive element closest to the image side in the front unit); L is the overall optical length (53.82 mm); Y is the maximum image height (10.0 mm); f is the system focal length (15.48 mm); f_B is the focal length of L9 (−61.05 mm); f_A is the focal length of L5 (+45.46 mm); f_M is the focal length of the front unit G1 (+29.74 mm); and the nd range spans L1 (1.499) to L5 (1.916).

## Petzval Sum and Field Curvature

The surface-by-surface Petzval sum, computed as $\sum \phi_i / (n_i \cdot n_i')$, yields a value of +0.00530 mm⁻¹, corresponding to a Petzval radius of +188.8 mm. The dimensionless Petzval product (Petzval sum × EFL) is 0.082, indicating a nearly flat Petzval surface — well suited to a digital sensor without the tolerance for significant field curvature. This low Petzval sum is achieved through the combination of the high-index L5 (which contributes positive power with minimal Petzval contribution) and the weak negative field-flattener L9 (which subtracts from the Petzval sum at the rear of the system). The result, visible in the patent's astigmatism plot (FIG. 4), is that the sagittal and meridional focal surfaces are well-controlled across the full 10 mm image height.

## Verification Summary

| Parameter | Computed | Patent (Table 8) | Agreement |
|-----------|----------|-------------------|-----------|
| EFL | 15.484 mm | 15.4836 mm | 0.001% |
| F-number | — | 1.76542 | — |
| Half field angle | — | 35.256° | — |
| Overall length | 53.815 mm | 53.8153 mm | < 0.001% |
| G1 focal length | 29.744 mm | 29.74355 mm | < 0.01% |
| G2 focal length | 16.644 mm | 16.64412 mm | < 0.01% |
| G3 focal length | −61.055 mm | −61.05483 mm | < 0.01% |

All nine individual element focal lengths match patent Table 9 to four decimal places (tolerance < 0.001 mm). Element focal lengths were computed using the in-air convention (each element treated as if surrounded by air), consistent with the patent's Table 9 methodology. The system matrix elements (A, B, C, D) were computed via the ABCD transfer-matrix method, with a secondary y-nu ray trace confirming the EFL independently.

A notable discrepancy appears in the field-angle check: the paraxial prediction tan(35.256°) × 15.484 = 10.95 mm exceeds the patent's stated maximum image height Y = 10.0 mm by approximately 9.5%. This indicates that the design carries significant barrel distortion at the full field angle — the chief ray at the edge of the field arrives closer to the axis than the paraxial prediction would suggest. This is consistent with Panasonic's well-documented digital distortion correction pipeline for Micro Four Thirds lenses: the raw optical image exhibits barrel distortion that the camera firmware corrects electronically, and the distortion correction profile is embedded in the image metadata for use by compatible raw-processing software. The patent's aberration diagram (FIG. 4) confirms this, showing approximately −8 to −9% distortion at maximum image height.

## Sources

- US 2015/0268449 A1 (Kurioka, Nishioka; Panasonic IP Management), published September 24, 2015.
- Japanese Priority Application 2014-057474, filed March 20, 2014.
- Panasonic product specifications for H-X015 (LEICA DG SUMMILUX 15mm / F1.7 ASPH), official Panasonic global product page.
- OHARA Optical Glass Catalog (L-FPL51, S-TIM2, L-LAH53, S-NPH5, L-LAH83 data sheets).
- HOYA Optical Glass Catalog (TAFD33, NbFD15, TAF5, E-FD15 data sheets).
