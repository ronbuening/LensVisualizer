# Fujinon 23mm f/2 Super EBC — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** US 2012/0069456 A1
**Application Number:** 13/232,049
**Filed:** September 14, 2011
**Published:** March 22, 2012
**Priority Date:** September 17, 2010 (JP 2010-209220)
**Inventor:** Takashi Suzuki
**Assignee:** Fujifilm Corporation, Tokyo (JP)
**Title:** Small-Size Wide Angle Lens and Camera Including the Lens
**Embodiment analyzed:** Example 1

Example 1 is identified as the production optical formula for the Fujinon 23mm f/2 lens integrated into the Fujifilm X100 series (X100, X100S, X100T, X100F) based on the following convergent evidence:

1. **Element and group count.** The patent prescription contains 8 elements in 6 air-separated groups (two in G1, four in G2, two in G3). Fujifilm's official specification for the X100F lists "6 groups 8 lenses (1 aspherical glass moulded lens included)," an exact match.
2. **Aspherical element count.** Example 1 has one aspherical element (L6, with both surfaces aspherical). Fujifilm specifies "1 aspherical glass moulded lens."
3. **Focal length.** The patent's computed EFL of 23.72 mm is consistent with the marketed 23 mm focal length, which yields 35 mm equivalent on the X100's 23.6 × 15.6 mm APS-C sensor.
4. **Aperture.** The patent's F/2.06 maximum aperture corresponds to the marketed f/2.0, a typical rounding for commercial nomenclature.
5. **Field of view.** The patent's 2ω = 62.0° and maximum image height Y = 14.2 mm correspond to an APS-C sensor diagonal of 28.4 mm (computed: $\sqrt{23.6^2 + 15.6^2} = 28.29$ mm, half-diagonal 14.14 mm ≈ 14.2 mm).
6. **Patent timing.** The Japanese priority date (September 17, 2010) immediately follows the X100's public debut at Photokina 2010 (September 2010). The design was evidently finalized before or concurrent with the camera's announcement.
7. **Focus mechanism.** The patent describes front focusing with G1 and G2 moving together as one body (¶0039, ¶0106), consistent with the X100's non-extending lens barrel design.
8. **Camera integration.** The patent's Figure 12 depicts a compact digital camera with a fixed, non-collapsible lens — matching the X100's industrial design. The patent text (¶0117) describes the lens as having "an F-number of 2.0" and "a full angle of view approximately 60°."

The same optical formula was shared across four generations of the X100 series: the original X100 (2011), X100S (2013), X100T (2014), and X100F (2017). The successor X100V (2020) introduced a redesigned lens with a second aspherical element while retaining the 8-element/6-group count.

## Optical Architecture

The Fujinon 23mm f/2 is a compact telephoto-type wide-angle lens of positive–positive–negative power distribution, comprising three functional groups arranged along the optical axis from the object side:

**G1** (positive, f = +34.4 mm) is a cemented doublet of a negative meniscus (L1) and a positive meniscus (L2), positioned immediately in front of the aperture stop. G1 serves as the front collector, gathering the wide-angle field and converging it toward the stop.

The **aperture stop (St)** is located between G1 and G2. Its forward placement — close to the object side — is a deliberate design choice to ensure high telecentricity at the image plane (¶0074), reducing the chief ray incidence angle on the APS-C sensor's microlens array.

**G2** (positive, f = +23.4 mm) is the main power group, consisting of a positive meniscus (L3), a cemented doublet of a biconcave negative lens (L4) and a biconvex positive lens (L5), and a weakly positive aspherical lens (L6). G2 provides the majority of the system's refractive power and houses the primary achromatic corrector (L4/L5 doublet) and the sole aspherical element (L6).

**G3** (negative, f = −38.9 mm) is a two-element group comprising a negative meniscus (L7, concave to the object) and a plano-convex positive lens (L8). G3 acts as a field-flattening and telecentricity-control group, bending off-axis chief rays toward normal incidence at the image plane.

The combined focal length of G1 + G2 (through the stop) is 19.25 mm, shorter than the system EFL of 23.72 mm. The negative G3 diverges the converging cone from G1+G2, extending the back focal distance and compressing the total track — the hallmark of a telephoto-type configuration. The telephoto ratio (total track / EFL) is (DD + BF) / f = (32.37 + 5.53) / 23.72 = 1.60, indicating a moderately telephoto design. In a symmetric wide-angle, this ratio would typically exceed 2.0; the telephoto arrangement allows the 23.72 mm EFL to fit within a total track of approximately 37.9 mm, enabling the X100's slim, non-collapsing lens barrel.

The Petzval sum of the system is +0.00534 mm⁻¹, corresponding to a Petzval radius of −187 mm. This is a respectably flat field for a wide-angle lens of this speed, achieved primarily through the high-index positive elements (four elements at nd = 1.88300) that contribute positive power with reduced Petzval curvature, and through the strong negative elements in G2 and G3 that provide compensating negative Petzval contributions.

## Element-by-Element Analysis

### L1 — Negative Meniscus, Convex to Object (G1 front)

nd = 1.74077, νd = 27.8. Glass: S-TIH13 (OHARA). f = −21.4 mm.

L1 is the front element of the cemented doublet forming G1. Its surfaces are R1 = +29.787 mm and R2 = +10.216 mm (the cemented junction), giving a meniscus shape with both centers of curvature to the right of the lens. S-TIH13 is a titanium flint with high dispersion (νd = 27.8), selected to provide chromatic correction against the high-index positive partner L2 at the cemented interface. As a negative meniscus at the system's front, L1 controls the divergence of wide-angle rays entering the system, reducing the angle of incidence on subsequent surfaces and sharing the refraction load with L2. Its negative power also contributes a favorable (negative) Petzval term that partially offsets the strong positive Petzval from the high-index positive elements downstream.

### L2 — Positive Meniscus, Convex to Object (G1 rear, cemented to L1)

nd = 1.88300, νd = 40.8. Glass: S-LAH58 (OHARA). f = +12.9 mm.

L2 is cemented to L1 at the R2 = +10.216 mm junction surface. Its rear surface is R3 = +85.567 mm, making it a positive meniscus (both radii positive, strong front curvature). S-LAH58 is an ultra-high-index lanthanum crown (nd = 1.883) with moderate dispersion, among the densest optical glasses in common use. The high index serves a dual purpose: it provides strong positive power from relatively shallow curvature, reducing higher-order spherical aberration, and it minimizes the Petzval contribution per unit of power because $\phi / (n \cdot n')$ is smaller when $n$ is large. The cemented interface with L1 creates an achromatizing pair — the low-νd flint (L1) paired with the higher-νd crown (L2) — that corrects axial chromatic aberration in G1. The combined G1 doublet has a focal length of +34.4 mm.

### L3 — Positive Meniscus, Convex to Image (G2 front)

nd = 1.88300, νd = 40.8. Glass: S-LAH58 (OHARA). f = +46.8 mm.

L3 is the first element after the aperture stop, with R5 = −15.211 mm and R6 = −11.699 mm (both radii negative, meaning both surfaces are concave toward the object — the convex face points toward the image). The patent notes (¶0094) that a positive meniscus with convex surface facing the image side "can contribute more to reduction in the size of the apparatus." L3's role is to begin converging the axial beam after the stop while maintaining a manageable angle of incidence for the cemented doublet that follows. Its moderate positive power (f = +46.8 mm) and high-index S-LAH58 glass keep spherical aberration contributions low. The meniscus shape also helps control coma, as the concentric-like bending reduces the oblique aberration contribution compared to a biconvex element at this position.

### L4 — Biconcave Negative (G2, cemented with L5)

nd = 1.59270, νd = 35.3. Glass: S-FTM16 (OHARA). f = −9.5 mm.

L4 is the front (negative) element of the cemented doublet in G2. Its surfaces are R7 = −10.059 mm and R8 = +13.211 mm, a strongly biconcave shape with the shortest radius of curvature of any surface in the system. S-FTM16 is a titanium flint with relatively low index (nd = 1.593) and moderate dispersion (νd = 35.3). The patent specifies a conditional expression 1.7 > Nd2n (¶0034, formula 6), requiring that the negative element in G2's cemented doublet have a refractive index below 1.7; L4 at nd = 1.59270 satisfies this comfortably. The primary role of L4 is Petzval flattening: its strong negative power (f = −9.5 mm) contributes a large negative Petzval term that counteracts the positive Petzval contributions from L3, L5, and L8. The low index is deliberate — it ensures that the overcorrected spherical aberration from the deeply biconcave surfaces partially compensates the undercorrected spherical contribution from the surrounding high-index positive elements. The patent states (¶0102) that satisfying both formulas (6) and (7) allows "both curvature of field and spherical aberrations to be corrected in an excellent manner."

### L5 — Biconvex Positive (G2, cemented with L4)

nd = 1.88300, νd = 40.8. Glass: S-LAH58 (OHARA). f = +9.9 mm.

L5 is cemented to L4 at the R8 = +13.211 mm junction surface. Its rear surface is R9 = −18.976 mm, forming a strongly biconvex element with the system's largest center thickness (7.36 mm). This is the single most powerful element in the system (f = +9.9 mm), providing the majority of G2's positive refractive power. The patent requires 1.8 < Nd2p (formula 7), mandating high index for the positive element of the cemented doublet; S-LAH58 at nd = 1.883 satisfies this with margin. The L4/L5 cemented pair is not a conventional achromat — its Abbe-number difference (Δνd = 5.5) is far too small for full chromatic correction, and a thin-lens chromatic analysis shows the doublet retains a net undercorrected residual. Rather, the cemented interface serves primarily to reduce the total chromatic contribution at the G2 position, while the remaining correction is distributed across the G1 doublet and the L7/L8 pair in G3. The thick biconvex form of L5 also introduces deliberate higher-order spherical aberration that is partially balanced by the aspherical correction on L6.

### L6 — Weakly Positive Aspherical Meniscus, Convex to Object (G2 rear)

nd = 1.56865, νd = 58.6. Glass: K-VC89 (Sumita). f = +178.3 mm (paraxial).

L6 is the sole aspherical element in the system, with both surfaces (S10, S11) carrying aspherical profiles. Its paraxial radii are R10 = +47.945 mm and R11 = +89.234 mm, forming a weakly positive meniscus with convex surface toward the object. The patent (¶0094) specifies that "the shape of a paraxial region of the lens L6 is a convex surface facing the object side." K-VC89 is a Sumita barium-crown–class glass with moderate index and low dispersion (νd = 58.6), suitable for a glass-molded aspherical element. Fujifilm's specification explicitly states the aspherical element is "glass moulded" (GMo), indicating a precision-glass-molding process rather than a hybrid resin layer or polished glass asphere.

The paraxial focal length of +178.3 mm indicates that L6 contributes only weak positive power to the system; its primary purpose is aberration correction through its aspherical profiles, not refractive power. The patent positions L6 between the cemented doublet (L4/L5) in G2 and the negative meniscus (L7) in G3, a location the patent identifies as optimal (¶0091): placing the aspherical lens before the cemented doublet would compromise field curvature correction, while placing it after L7 would compromise spherical aberration correction.

The aspherical profiles on L6 are discussed in detail in the Aspherical Surfaces section below.

### L7 — Negative Meniscus, Concave to Object (G3 front)

nd = 1.80809, νd = 22.8. Glass: S-NBH55 (OHARA). f = −22.0 mm.

L7 has surfaces R12 = −12.593 mm and R13 = −45.060 mm, a meniscus shape with the concave side facing the object. S-NBH55 is a dense niobium-barium flint with very high dispersion (νd = 22.8), the most dispersive glass in the system. The patent requires 1.75 < Nd3n (formula 4); L7 at nd = 1.80809 satisfies this. The high index ensures that L7's negative meniscus shape generates strong negative power without requiring extremely steep curvatures, while the high dispersion enables lateral chromatic aberration control in the rear group. L7's primary architectural role is to diverge off-axis ray bundles before they reach L8 — the patent explains (¶0089) that "after the off-axial rays are refracted in directions away from optical axis Z by the negative meniscus lens, the off-axial rays are condensed by the positive lens [L8]," creating a quasi-telecentric exit cone at the image plane.

### L8 — Plano-Convex Positive, Convex to Object (G3 rear)

nd = 1.88300, νd = 40.8. Glass: S-LAH58 (OHARA). f = +52.8 mm.

L8 is the final optical element, with R14 = +46.628 mm (convex to object) and R15 = ∞ (flat rear surface), a plano-convex shape. The patent requires 1.8 < Nd3p (formula 5); S-LAH58 at nd = 1.883 satisfies this. As the most-image-side element, L8 condenses the diverging off-axis rays from L7 back toward the optical axis, ensuring near-telecentric chief ray incidence at the sensor. The plano-convex form minimizes the angle of incidence on the flat rear surface, reducing surface reflections and ghosting from the element closest to the sensor. L8 also serves as a partial field flattener: its positive power, combined with L7's negative power, creates a negative-positive pair in G3 (combined f = −38.9 mm) that provides the Petzval-compensating negative group power essential to the telephoto-type architecture.

## Glass Selection and Identification

The design uses a constrained glass palette dominated by a single ultra-high-index lanthanum crown (S-LAH58, used in four of eight elements) paired with three specialized flint or dense-flint types. All glass identifications are exact matches (Δnd = 0, Δνd = 0) against manufacturer catalog values.

| Element | nd | νd | Glass | Vendor | Type | Role |
|---------|-------|------|-------|--------|------|------|
| L1 | 1.74077 | 27.8 | S-TIH13 | OHARA | Titanium flint | Chromatic corrector (G1 negative) |
| L2 | 1.88300 | 40.8 | S-LAH58 | OHARA | Lanthanum crown | Primary positive (G1) |
| L3 | 1.88300 | 40.8 | S-LAH58 | OHARA | Lanthanum crown | Post-stop positive (G2) |
| L4 | 1.59270 | 35.3 | S-FTM16 | OHARA | Titanium flint | Achromatic negative (G2 doublet) |
| L5 | 1.88300 | 40.8 | S-LAH58 | OHARA | Lanthanum crown | Primary positive (G2 doublet) |
| L6 | 1.56865 | 58.6 | K-VC89 | Sumita | Barium crown (GMo) | Aspherical corrector (G2) |
| L7 | 1.80809 | 22.8 | S-NBH55 | OHARA | Niobium-barium flint | Diverger / lateral color (G3) |
| L8 | 1.88300 | 40.8 | S-LAH58 | OHARA | Lanthanum crown | Field lens / telecentricity (G3) |

The dominant theme is the repeated use of S-LAH58 (OHARA), a demanding ultra-high-index glass (nd = 1.883). Four of the eight elements use it, including all three key positive-power positions (L2, L5, L8) and the post-stop meniscus L3. The rationale is Petzval sum management: at nd = 1.883, each positive element contributes proportionally less field curvature per unit of power than a lower-index positive element would, because the Petzval contribution per surface scales as $\phi / (n \cdot n')$. The patent's conditional expression formula (8) requires that the average refractive index Ndp across the highest-index positive in G1, the biconvex in G2, and the rear positive in G3 must exceed 1.8 (¶0037–0038). With all three at nd = 1.883, the average is exactly 1.883, well above the threshold.

The chromatic correction strategy is distributed across the system rather than concentrated in any single achromatic doublet. The G1 cemented pair (S-TIH13 at νd = 27.8 against S-LAH58 at νd = 40.8, Δνd = 13.0) provides the most conventional achromatizing contribution. The G2 cemented pair (S-FTM16 at νd = 35.3 against S-LAH58 at νd = 40.8, Δνd = 5.5) has a much smaller Abbe-number difference and does not fully achromatize; its cemented interface primarily serves Petzval flattening and spherical aberration control, with chromatic reduction being a secondary benefit. The remaining balance is carried by the un-cemented L7/L8 pair in G3 and the weakly powered L3 and L6.

S-NBH55 (νd = 22.8) in L7 is the system's highest-dispersion glass and provides lateral chromatic aberration control in the rear group, where off-axis ray heights are largest. Its very high dispersion combined with negative power generates lateral color correction that compensates the lateral color introduced by the positive elements in G2.

The sole non-OHARA glass, K-VC89 (Sumita), was selected for the aspherical element L6 because of its suitability for precision glass molding. Glass-molded aspherical elements require glasses with specific thermal properties — a low transformation temperature (Tg) and a manageable viscosity curve — that enable the molding process. The K-VC89 barium crown class (nd = 1.569, νd = 58.6) is specifically formulated for moldability while retaining acceptable optical properties.

## Focus Mechanism

The lens employs front focusing (¶0039, ¶0106): groups G1 and G2 move together as a single unit toward the object when focusing from infinity to close distances, while G3 remains fixed relative to the image plane. The patent describes this architecture choice as advantageous for compactness (¶0106): because the aperture stop is positioned near the front of the system, the moving groups (G1 + G2) have smaller lens diameters and lower mass than the rear group, reducing the load on the focus drive motor.

The combined focal length of the focus unit (G1 + G2) is fG12 = 19.25 mm, yielding fG12/f = 0.812 (satisfying the patent's formula (9): 0.6 < fG12/f < 0.9). This ratio governs the focus-throw sensitivity: a ratio closer to 1.0 would require larger physical movement for the same change in object conjugate, while a ratio closer to 0.6 would amplify aberration fluctuation during focusing. The value of 0.812 represents a balance between compact focus travel and stable aberration control.

Fujifilm's published minimum focus distance for the X100F is 10 cm (macro mode). The patent does not publish close-focus spacing data for Example 1, so the variable air gap at close focus in the companion data file is estimated. When G1+G2 move toward the object for close focusing, the air gap between G2 and G3 (the gap after surface S11, which is 5.13 mm at infinity focus) increases, while the distance from G3 to the sensor remains fixed because G3 is stationary relative to the image plane.

## Aspherical Surfaces

L6 carries aspherical profiles on both surfaces (S10 and S11), making it the system's sole aspherical element. The patent identifies the aspherical equation as (¶0125–0129):

$$Z_d = \frac{C \cdot h^2}{1 + \sqrt{1 - K \cdot C^2 \cdot h^2}} + \sum_{m} A_m \cdot h^m$$

where $C = 1/R$ is the paraxial curvature, $K$ is the conic constant, and $A_m$ are the polynomial coefficients for $m = 3, 4, 5, \ldots, 20$.

Two features of this equation deserve comment regarding the convention used in the companion data file.

First, the conic term uses $1 - K \cdot C^2 h^2$ under the radical, rather than the standard $1 - (1+K) \cdot C^2 h^2$. In the patent's convention, $K = 0$ produces a parabolic base curve ($Z = C h^2 / 2$), whereas the standard convention uses $K = 0$ for a sphere. With $K = 0$ on both patent surfaces, the standard-convention equivalent would be $K_{\text{std}} = -1$ (a paraboloid). At the relevant semi-diameters (~6 mm), the sag difference between these two base curves is on the order of a few microns and is fully absorbed by the polynomial refit described below.

Second, the equation includes **odd-order terms** ($A_3$, $A_5$, $A_7$, etc.) in addition to the standard even-order terms. Since $h$ is defined as a radial distance from the optical axis ($h \geq 0$), terms like $A_3 h^3$ are rotationally symmetric and produce valid surface profiles. However, odd-order terms are not supported by the renderer's sag equation.

**Coefficient refit.** For the companion data file, the full patent sag profile (parabolic base + odd+even polynomial) was evaluated at 500 height samples over $h \in [0,\, 6.0 \text{ mm}]$ (the estimated semi-diameter of L6). A least-squares fit was then performed against the standard sag equation with a spherical base ($K = 0$, standard convention) and even-order polynomial coefficients $A_4$ through $A_{20}$. The fit residuals are small: 0.16 µm maximum error for S10 and 0.73 µm for S11, well within manufacturing tolerance.

Both surfaces have conic constant K = 0 (spherical base in standard convention) in the data file. The refitted even-order coefficients from the data file faithfully reproduce the patent's sag profiles within the usable aperture zone.

The patent's polynomial is numerically ill-conditioned at heights above approximately 7 mm — individual terms reach magnitudes of hundreds of millimeters but cancel nearly perfectly — indicating that the polynomial was optimized for a smaller clear aperture than the raw marginal+chief ray estimate would suggest. The L6 semi-diameters in the data file are accordingly capped at 6.0 mm, where the polynomial remains well-behaved.

The rear surface S11 carries the dominant aspherical correction: its even-order polynomial coefficients are substantially larger than those of S10, indicating that S11 primarily corrects residual spherical aberration from the strong biconvex L5 and simultaneously controls field curvature and coma that accumulate across the post-stop elements. The front surface S10, with smaller coefficients, provides fine-tuning of the zonal balance.

## Verification Summary

Independent paraxial ray tracing (y-nu method) confirms all patent-stated parameters:

| Parameter | Computed | Patent | Match |
|-----------|----------|--------|-------|
| System EFL | 23.717 mm | 23.72 mm | ✓ |
| Back focus (air) | 5.526 mm | 5.53 mm | ✓ |
| 2ω (full field) | 61.8° | 62.0° | ✓ |
| DD (track, S1–S15) | 32.37 mm | 32.37 mm | ✓ |
| SS (stop to S15) | 27.49 mm | 27.49 mm | ✓ |
| fG12 (G1+G2 combined) | 19.25 mm | 19.25 mm | ✓ |
| f/Y | 1.670 | 1.670 | ✓ |
| (SS+BF)/(DD+BF) | 0.871 | 0.871 | ✓ |
| Fno×(DD+BF)/Y | 5.498 | 5.498 | ✓ |
| fG12/f | 0.812 | 0.812 | ✓ |

All conditional expressions from the patent claims are satisfied:

| Formula | Condition | Value | Satisfied |
|---------|-----------|-------|-----------|
| (1) | 1 < f/Y < 2 | 1.670 | ✓ |
| (2) | 0.7 < (SS+BF)/(DD+BF) < 0.95 | 0.871 | ✓ |
| (3) | 3.4 < Fno×(DD+BF)/Y < 8 | 5.498 | ✓ |
| (4) | 1.75 < Nd3n | 1.80809 | ✓ |
| (5) | 1.8 < Nd3p | 1.88300 | ✓ |
| (6) | 1.7 > Nd2n | 1.59270 | ✓ |
| (7) | 1.8 < Nd2p | 1.88300 | ✓ |
| (8) | 1.8 < Ndp | 1.88300 | ✓ |
| (9) | 0.6 < fG12/f < 0.9 | 0.812 | ✓ |

The Petzval sum of +0.00534 mm⁻¹ (Petzval radius −187 mm) is consistent with the well-corrected astigmatism shown in the patent's aberration diagrams (Figures 7A–7D), where the sagittal and tangential fields track closely out to ω = 31°.

## Sources

- US 2012/0069456 A1, "Small-Size Wide Angle Lens and Camera Including the Lens," Fujifilm Corporation, published March 22, 2012.
- Fujifilm X100F official specifications: https://fujifilm-x.com/en-us/products/cameras/x100f/specifications — confirming 23mm f/2, 8 elements in 6 groups, 1 aspherical glass moulded lens, 10 cm MFD.
- Fujifilm X100 launch specification (Photography Blog, February 2011): confirming "6 groups 8 lenses (1 aspherical glass moulded lens included)."
- OHARA optical glass catalog (pocket edition, 2023): S-TIH13 (nd = 1.74077, νd = 27.8), S-LAH58 (nd = 1.88300, νd = 40.8), S-FTM16 (nd = 1.59270, νd = 35.3), S-NBH55 (nd = 1.80809, νd = 22.8).
- Sumita optical glass catalog: K-VC89 (nd = 1.56865, νd = 58.6).
