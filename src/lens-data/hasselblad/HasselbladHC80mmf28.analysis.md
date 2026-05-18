# Hasselblad HC 80mm f/2.8 — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** US 2001/0050819 A1, "Gaussian Lens for Photography."
**Inventor:** Kazunori Ohno (Omiya City, Japan).
**Filed:** March 8, 2001 (US). **Priority:** March 28, 2000 (JP 2000-089202).
**Published:** December 13, 2001.
**Embodiment analyzed:** Embodiment 3 (Table 3, Figs. 4A–4C).

The patent is not assigned to a corporate entity, but Kazunori Ohno is a career lens designer at Fuji Photo Optical Co., Ltd. (later Fujinon Corporation, now a division of Fujifilm). His name appears on multiple Fujifilm-assigned patents spanning zoom lenses, viewfinder optics, and imaging objectives (e.g., US 5,179,472 assigned to Fuji Photo Optical; US 8,514,504 assigned to Fujifilm Corporation). A Fujifilm corporate blog identifies "Kazunori Oono" (alternate romanization of 大野) as a former Senior Manager of the Optical Device Division. The Hasselblad H-system lenses are manufactured by Fujifilm under the SUPER-EBC Fujinon designation.

The identification of Embodiment 3 with the Hasselblad HC 80mm f/2.8 rests on the following convergent evidence:

1. **Element and group count.** The patent describes a 6-element, 6-group Gaussian design with all elements air-spaced — no cemented surfaces. Hasselblad specifies 6 elements in 6 groups for the HC 80mm f/2.8.
2. **All-spherical design.** The patent contains no aspherical surface data for any embodiment, consistent with the HC 80mm f/2.8 having no aspherical surfaces.
3. **Focal length.** The patent prescription is normalized to $f = 100$ mm. Scaled by 0.80× to $f = 80$ mm, the design covers the marketed 80 mm focal length.
4. **Aperture.** The design f-number is F/2.9, consistent with a marketed aperture of f/2.8 (the design value is typically slightly slower than the marketed value due to tolerance margins).
5. **Image circle and field angle.** At $f = 100$ mm, the patent states $2\omega = 46.7°$, yielding a full image diagonal of $2 \times 100 \times \tan(23.35°) \approx 86.3$ mm. Scaled to $f = 80$ mm, the diagonal becomes $\approx 69.1$ mm, matching the 645-format diagonal of $\approx 69.7$ mm. Hasselblad lists the angle of view as 46° diagonal.
6. **Design architecture.** The patent describes a double-Gauss form designed for an SLR camera with an appropriate back focal length — consistent with the Hasselblad H-system's reflex mirror clearance requirements.
7. **Patent timing.** The Japanese priority date (March 2000) precedes the Hasselblad H-system launch in 2002 by approximately two years, aligning with typical lens development timelines.
8. **Focus mechanism.** The patent provides only infinity-focus data, consistent with unit focus (entire lens translating), as the HC 80mm f/2.8 employs.
9. **Minimum focus distance.** At MFD = 0.70 m and $f = 80$ mm, the paraxially computed magnification is $\approx 1\!:\!6.8$, close to Hasselblad's specified maximum magnification of 1:6.5.

Embodiments 1 and 4 use different glass combinations; Embodiment 2 uses a closely related palette but with distinct rear-group glasses. Embodiment 3 reuses the L1 glass (S-LAH51) in L5, giving the rear group a particularly symmetric Abbe-number character against the front group, and pairs L6 with a lanthanum crown (S-LAL14, $\nu_d = 49.3$). All four embodiments show well-corrected aberrations (Figs. 2–5), but Embodiment 3's symmetric glass architecture and its near-optimal centering within the conditional expression ranges make it a strong candidate for the production optical formula.

## Optical Architecture

The design is a **modified Gaussian (double-Gauss)** of the all-air-spaced type — a six-element derivative of the classical Planar/Biotar topology in which no surfaces are cemented. The patent explicitly positions this in the lineage of Gaussian lenses without joined surfaces, citing Japanese Patent H8-33512 and Laid Open Application H8-220424 as predecessors, while claiming broader field coverage than those earlier designs (¶0004).

The power distribution is **positive–positive–negative | stop | negative–positive–positive**, with the front group $G_1$ (L1–L3) and the rear group $G_2$ (L4–L6) disposed nearly symmetrically about the aperture stop (¶0038). This quasi-symmetry is the defining characteristic of double-Gauss designs and serves to cancel the aberrations that are antisymmetric about the stop — lateral chromatic aberration, distortion, and coma — between the two halves.

The computed Petzval sum is $\Sigma P = 0.00130\;\text{mm}^{-1}$ ($\Sigma P \times f = 0.130$), yielding a Petzval radius of $R_P \approx -769$ mm. This is a very well-corrected value for a $f/2.8$ Gaussian — indicating that the field curvature is controlled primarily through deliberate balancing of positive and negative element powers rather than through exotic glass or aspherical correction.

Back focal distance is $B_f = 76.09$ mm at $f = 100$ mm (patent scale), giving $B_f/f = 0.761$ — sufficient for the Hasselblad H-system's reflex mirror clearance. In production ($f = 80$ mm), the back focal distance is approximately 60.9 mm and the total optical track from first surface to the image plane is approximately 113 mm.

A distinctive architectural feature is the patent's emphasis on two "air lenses" formed by the nearly adjacent, same-sign curved surfaces bounding the air gaps between L2–L3 and between L4–L5. These air spaces, governed by patent Conditions (3) and (5), function as weak positive and negative air lenses respectively, and are the primary mechanism for balancing spherical aberration and field curvature without cemented surfaces.

## Element-by-Element Analysis

All numerical values below are at the patent's normalized focal length $f = 100$ mm. For production dimensions, multiply linear values by 0.80.

### L1 — Positive Meniscus, convex to object

$n_d = 1.78589$, $\nu_d = 44.2$. Glass: S-LAH51 (OHARA) — lanthanum dense flint. $f = +101.9$ mm.

L1 is the front collector — the first positive element in the Gaussian front group. Its meniscus shape with the convex surface toward the object ($R_1 = +47.55$ mm, $R_2 = +110.75$ mm) is chosen to minimize spherical aberration and field curvature relative to a biconvex alternative (¶0035). The patent states that a high-index material is selected for this element to keep the surface curvatures moderate while providing sufficient refractive power. S-LAH51 ($n_d = 1.786$, $\nu_d = 44.2$) is a workhorse lanthanum flint widely used in photographic objectives — it provides high refractive index at a moderate Abbe number, and the patent notes that it is "relatively inexpensive and not difficult to work" (¶0035).

L1 carries the bulk of the front group's positive power (its focal length of 101.9 mm is close to the system's 100 mm EFL), and because it operates at the largest beam diameter, its contribution to third-order spherical aberration is significant. The meniscus shape distributes refraction across both surfaces, keeping the angle of incidence at each surface low.

### L2 — Positive Meniscus, convex to object

$n_d = 1.51680$, $\nu_d = 64.1$. Glass: S-BSL7 (OHARA) — borosilicate crown (BK7 equivalent). $f = +88.3$ mm.

L2 is the achromatizing positive element of the front group. The patent explicitly requires a "relatively low index of refraction and a large Abbe number" for this element (¶0035), and S-BSL7 ($n_d = 1.517$, $\nu_d = 64.1$) satisfies this exactly — it is the standard BK7-class borosilicate crown and the most economical optical glass in common production. Its meniscus shape ($R_3 = +36.27$ mm, $R_4 = +164.67$ mm) is more strongly curved than L1, and L2 provides roughly equal positive power ($f = 88.3$ mm) while introducing the chromatic dispersion imbalance needed for achromatic correction when paired with L3.

The image-side surface $R_4$ and the object-side surface of L3 ($R_5$) together bound the front air lens (discussed below). The ratio $R_4/R_5 = 1.191$ (Condition 3) determines the refractive power of this air lens and governs the magnitude of balancing spherical aberration it introduces. The patent stipulates $1.0 < R_4/R_5 < 1.3$ to avoid excessive coma sensitivity (¶0046).

### L3 — Negative Meniscus, convex to object

$n_d = 1.60342$, $\nu_d = 38.0$. Glass: S-TIM2 (OHARA) — titanium flint. $f = -48.6$ mm.

L3 is the diverging element of the front group and the chromatic counterpart to L2. Its moderate refractive index ($n_d = 1.603$) and low Abbe number ($\nu_d = 38.0$) provide the negative dispersion needed to achromatize the front group. The patent requires a "moderate index of refraction and a low Abbe number" for L3 and bounds the Abbe number by Condition (11): $35.0 < \nu_3 < 45.0$ (¶0056).

L3 is the strongest negative element in the front group ($f = -48.6$ mm) and its rear surface $R_6$ ($R_6 = +24.04$ mm) contributes a large negative Petzval term ($-0.01565\;\text{mm}^{-1}$), nearly matching L4's front surface as the two dominant negative Petzval contributors in the system. This strongly curved rear surface, facing the aperture stop across the wide air gap $D_6 + D_7 = 26.73$ mm, is the primary source of the front group's negative Petzval contribution. The meniscus shape ($R_5 = +138.27$ mm, $R_6 = +24.04$ mm) means both surfaces curve the same way — the air gap between L3 and the stop serves as a field where the off-axis beam diverges before entering the rear group.

The $R_4/f$ ratio (Condition 2) equals 1.647 for this embodiment, satisfying $1.0 < R_4/f < 2.3$ — this condition prevents the opposing surfaces of L2 and L3 from becoming too tightly curved, which would introduce manufacturing sensitivity.

### L4 — Negative Meniscus, concave to object

$n_d = 1.72825$, $\nu_d = 28.5$. Glass: S-TIH18 (OHARA) — dense titanium flint. $f = -41.6$ mm.

L4 is the first element of the rear group $G_2$ and is the chromatic mirror of the front group's negative element L3. It is a negative meniscus with its concave surface facing the object ($R_8 = -26.90$ mm, $R_9 = -253.62$ mm) — the shape-inverse of L3's convex-to-object meniscus. This shape symmetry across the stop is the hallmark of the double-Gauss topology and is what drives the cancellation of distortion and lateral color.

S-TIH18 has the lowest Abbe number in the system ($\nu_d = 28.5$), making it the primary dispersion source for achromatizing the rear group. The patent states that the fourth element "should be made of glass material having a relatively high index of refraction and a small Abbe number" (¶0037). L4 is the strongest negative element overall ($f = -41.6$ mm), and its front surface $R_8$ produces the single largest negative Petzval contribution ($-0.01567\;\text{mm}^{-1}$) in the entire system. This is the counterbalancing term that drives the system Petzval sum toward zero.

### L5 — Positive Meniscus, convex to image

$n_d = 1.78589$, $\nu_d = 44.2$. Glass: S-LAH51 (OHARA) — lanthanum dense flint. $f = +62.5$ mm.

L5 is the rear group's primary positive element and uses the same glass as L1 — reinforcing the quasi-symmetric glass architecture across the stop. Its meniscus shape is convex toward the image ($R_{10} = -174.57$ mm, $R_{11} = -39.24$ mm), again mirroring the sign pattern of L2 in the front group. L5 carries strong positive power ($f = 62.5$ mm — shorter than L1's focal length) because it must converge the beam sufficiently to deliver the image at the required back focal distance while compensating for L4's divergence.

The patent discusses the air gap between L4 and L5 at length: the ratio $R_9/R_{10} = 1.453$ (Condition 5, range $1.1 < R_9/R_{10} < 1.6$) controls the curvature balance of the rear air lens. The net optical contribution of this air space is weakly negative ($\phi = -0.00163\;\text{mm}^{-1}$), but its geometric meniscus shape ($R_9/R_{10} > 1$) plays a key role in eliminating the astigmatic difference between the tangential and sagittal focal surfaces (¶0049; see Air Lens Architecture below for a detailed discussion). The patent further specifies that the on-axis spacing $D_9 = 0.250$ mm is designed so that L4 and L5 "contact each other at their edges" (¶0050), eliminating the need for a spacing ring and improving centration precision.

The rear surface $R_{11}$ has the strongest curvature of any positive-contributing Petzval surface ($+0.01122\;\text{mm}^{-1}$), and this element therefore plays a dominant role in the system's Petzval balance.

### L6 — Positive Meniscus, convex to image

$n_d = 1.74330$, $\nu_d = 49.3$. Glass: S-LAL14 (OHARA) — lanthanum crown. $f = +82.2$ mm.

L6 is the field-flattening element and the final positive meniscus of the rear group. Its convex-to-image shape ($R_{12} = -618.10$ mm, $R_{13} = -55.91$ mm) gives it a nearly flat object-side surface and a strongly curved image-side surface — the bulk of L6's refractive power is concentrated at $R_{13}$, the last refracting surface before the back focal space. The patent states that L6 "should be made of glass material having a high index of refraction and a large Abbe number" to allow "excellent correction of chromatic aberration and other aberrations in the rear lens group" (¶0037).

S-LAL14 ($n_d = 1.743$, $\nu_d = 49.3$) is a lanthanum crown glass — distinctly different from the lanthanum dense flint (S-LAH51) used in L1 and L5. Its higher Abbe number makes it a better chromatic partner for the low-$\nu_d$ element L4 in the rear group, while its high refractive index keeps the curvature of $R_{13}$ moderate. The strong rear surface $R_{13}$ contributes $+0.00763\;\text{mm}^{-1}$ to the Petzval sum, completing the positive–negative balance of the full system.

L6 operates on a converging beam that is already close to the image plane, so it primarily controls the residual field curvature and astigmatism at the image periphery. Its relatively gentle front curvature ($R_{12} = -618$ mm, nearly flat) means it introduces minimal additional spherical aberration.

## Glass Identification and Selection

The design uses only four distinct glass types across six elements. All identifications are within $\Delta n_d < 0.0001$ and $\Delta\nu_d < 0.2$ of the nearest OHARA catalog entries.

| Element | $n_d$ | $\nu_d$ | Catalog Match | Class | $f$ (mm) | Role |
|---------|-------|--------|---------------|-------|----------|------|
| L1 | 1.78589 | 44.2 | S-LAH51 (OHARA) | Lanthanum dense flint | +101.9 | Front collector |
| L2 | 1.51680 | 64.1 | S-BSL7 (OHARA) | Borosilicate crown | +88.3 | Achromatizing positive |
| L3 | 1.60342 | 38.0 | S-TIM2 (OHARA) | Titanium flint | −48.6 | Front diverger |
| L4 | 1.72825 | 28.5 | S-TIH18 (OHARA) | Dense titanium flint | −41.6 | Rear diverger |
| L5 | 1.78589 | 44.2 | S-LAH51 (OHARA) | Lanthanum dense flint | +62.5 | Rear converger |
| L6 | 1.74330 | 49.3 | S-LAL14 (OHARA) | Lanthanum crown | +82.2 | Field flattener |

Cross-vendor equivalents exist for all of these glasses: S-BSL7 ≈ N-BK7 (Schott) ≈ BSC7 (HOYA); S-TIM2 ≈ F5 (Schott); S-TIH18 ≈ SF10 (Schott) ≈ FD60 (HOYA); S-LAL14 ≈ LACL60 (HOYA). Since Fujifilm has historically sourced glass from both OHARA and HOYA, the OHARA designations should be understood as representative catalog matches; the actual production glass vendor is not specified in the patent.

The chromatic strategy is straightforward double-Gauss achromatization. Each half of the lens pairs one or two high-$\nu_d$ positive elements with one low-$\nu_d$ negative element: L1 ($\nu_d = 44.2$) + L2 ($\nu_d = 64.1$) against L3 ($\nu_d = 38.0$) in the front group; L4 ($\nu_d = 28.5$) against L5 ($\nu_d = 44.2$) + L6 ($\nu_d = 49.3$) in the rear group. The patent governs these pairings explicitly through Conditions (9)–(11), which bound the differences $\nu_2 - \nu_1$, $\nu_2 - \nu_3$, and the absolute value of $\nu_3$.

A notable feature of the glass palette is its economy. S-BSL7 (BK7) is the cheapest optical glass in common production. S-TIM2 and S-TIH18 are standard catalog flints. Only L1, L5, and L6 use lanthanum glasses, and even these (S-LAH51, S-LAL14) are mainstream catalog types rather than exotic high-index or ED materials. The patent explicitly emphasizes producibility and cost control (¶0003, ¶0050, ¶0053), and the glass selection reflects this — no glass in the system is particularly expensive or difficult to polish. This is consistent with the HC 80mm f/2.8's position as the most affordable lens in the Hasselblad HC lineup.

## Focus Mechanism

The Hasselblad HC 80mm f/2.8 employs **unit focus**: the entire optical assembly translates as a rigid body along the optical axis. The patent provides prescription data only at infinity focus, with no variable-spacing tables, which is consistent with a unit-focus design where no internal air gaps change during focusing.

At the production focal length of 80 mm, paraxial computation gives the following focus parameters:

| Parameter | Infinity | MFD (0.70 m) |
|-----------|----------|-------------|
| Object distance from H | ∞ | 621 mm |
| Image distance from H' | 80.0 mm | 91.8 mm |
| BFD (from last surface) | 60.9 mm | 72.7 mm |
| Extension from infinity | — | 11.8 mm |
| Magnification | 0 | 1:6.8 |

Hasselblad specifies a maximum magnification of 1:6.5, which is close to the paraxially computed 1:6.8. The small discrepancy likely reflects differences between the production optical formula and the patent's Example 3 prescription, or the measurement convention for minimum focus distance (Hasselblad measures from the image plane; the paraxial model assumes measurement from H, with $HH' \approx -13.1$ mm).

Unit focus is the simplest and most mechanically robust focus implementation, well-suited to a medium-format standard lens with a built-in leaf shutter — the shutter mechanism moves with the optics and no internal group motion is required. The trade-off is that at close focus, the entire lens extends forward, increasing the overall length. At the 0.70 m MFD, the extension is approximately 11.8 mm — modest given the lens barrel's 84 mm diameter.

## Aspherical Surfaces

The design has **no aspherical surfaces**. All twelve refracting surfaces are spherical. This is consistent with both the patent text (which describes no aspheric equation or coefficient table) and the Hasselblad HC 80mm f/2.8's specifications, which do not mention aspherical elements.

The all-spherical design is a deliberate choice tied to the patent's manufacturing philosophy. An all-air-spaced, all-spherical system avoids the cost and complexity of both cemented surfaces and aspherical molding or polishing, making the lens straightforward to produce by conventional glass-grinding methods. The patent devotes considerable text to manufacturing suitability (¶0002–¶0003, ¶0050–¶0053), and the absence of aspherical surfaces is part of that design intent.

Aberration correction is achieved entirely through the choice of glass types, curvature distribution, and the deliberate use of "air lenses" between closely spaced element pairs.

## Air Lens Architecture

A distinctive feature of this patent is the explicit use of two controlled air gaps as optical elements in their own right. The patent identifies these air spaces as functional "air lenses" whose curvature ratios are governed by Conditions (3)–(5).

### Front Air Lens (L2–L3 gap)

The air gap between L2's rear surface ($R_4 = +164.67$ mm) and L3's front surface ($R_5 = +138.27$ mm) is only $D_4 = 0.059$ mm thick — essentially zero clearance. Both bounding radii are positive and of similar magnitude, giving the air space a weak positive refractive power. At $f = 100$ mm (patent scale), the thin-air-lens power is $+0.00123\;\text{mm}^{-1}$ ($f_{air} \approx +816$ mm).

The patent states that this positive air lens "produces high spherical aberration" of opposite sign to the spherical aberration generated by the rest of the front group, thereby creating a balancing effect that "makes the overall spherical aberration generated by the front group significantly smaller and also prevents off-axis coma aberration in the sagittal direction" (¶0036). The ratio $R_4/R_5 = 1.191$ controls the strength of this effect.

The extremely thin spacing ($D_4 = 0.059$ mm) is governed by Condition (6), which bounds $0.001 < (D_4 + D_9)/f < 0.017$. The patent notes that this thin gap "enables a proper spacing to be attained by simply inserting a MYLAR plate between the second and third lens elements" (¶0050), eliminating the need for a spacing ring and reducing both cost and centration error.

### Rear Air Lens (L4–L5 gap)

The air gap between L4's rear surface ($R_9 = -253.62$ mm) and L5's front surface ($R_{10} = -174.57$ mm) is $D_9 = 0.250$ mm — also very thin. Both bounding radii are negative and of similar magnitude, giving the air space a weak negative refractive power ($\phi_{air} = -0.00163\;\text{mm}^{-1}$, $f_{air} \approx -613$ mm).

The patent describes this as a "negative air lens" that prevents "high spherical aberration from being generated by the rear lens group" and is "useful for correction of curvature of field and astigmatism" (¶0037). This functional description is consistent with the computed negative net power. Condition (5) bounds $R_9/R_{10}$ between 1.1 and 1.6; the patent states this is "to give a slightly positive refractive power to the air lens" (¶0049). The apparent contradiction between ¶0037's "negative air lens" and ¶0049's "slightly positive refractive power" is best understood as a distinction between the geometric meniscus shape of the air space ($R_9/R_{10} > 1$ produces a positive meniscus form, thicker at center) and the net refractive contribution of its bounding surfaces, which is negative because the glass on the L5 side ($n_d = 1.786$) has a higher index than the glass on the L4 side ($n_d = 1.728$). The patent notes that $D_9$ is designed so that L4 and L5 "contact each other at their edges" (¶0050), using the edge contact itself as a self-centering mechanical feature.

Together, these two air lenses allow the all-air-spaced design to achieve aberration correction comparable to conventional double-Gauss lenses with cemented doublets, while retaining the manufacturing advantages of individually mountable, single-glass elements.

## Conditional Expressions

The patent defines eleven conditional expressions governing the design. Embodiment 3 satisfies all eleven:

| Condition | Expression | Range | Emb. 3 Value | Status |
|-----------|------------|-------|-------------|--------|
| (1) | $(N_1 - N_2)/(N_3 - N_2)$ | $2.6$ – $4.3$ | 3.107 | ✓ |
| (2) | $R_4/f$ | $1.0$ – $2.3$ | 1.647 | ✓ |
| (3) | $R_4/R_5$ | $1.0$ – $1.3$ | 1.191 | ✓ |
| (4) | $R_{10}/f$ | $-3.5$ – $-1.4$ | −1.746 | ✓ |
| (5) | $R_9/R_{10}$ | $1.1$ – $1.6$ | 1.453 | ✓ |
| (6) | $(D_4 + D_9)/f$ | $0.001$ – $0.017$ | 0.003 | ✓ |
| (7) | $D_{6\text{-}7}/f$ | $0.22$ – $0.30$ | 0.267 | ✓ |
| (8) | $D_{8\text{-}12}/f$ | $0.18$ – $0.25$ | 0.214 | ✓ |
| (9) | $\nu_2 - \nu_1$ | $12.0$ – $25.0$ | 19.9 | ✓ |
| (10) | $\nu_2 - \nu_3$ | $18.0$ – $30.0$ | 26.1 | ✓ |
| (11) | $\nu_3$ | $35.0$ – $45.0$ | 38.0 | ✓ |

Conditions (1)–(3) govern the front group: (1) constrains the refractive-index relationship among L1, L2, and L3 to keep the front air lens productive for spherical-aberration balancing while maintaining achromatic correction; (2) prevents the L2–L3 opposing surfaces from becoming too tightly curved for manufacturing; (3) controls the air lens power between L2 and L3.

Conditions (4)–(5) govern the rear air lens: (4) constrains L5's object-side curvature to maintain Petzval correction without excessive chromatic residuals; (5) controls the curvature ratio of the rear air lens boundaries to eliminate the tangential/sagittal astigmatic split (see the Air Lens section for discussion of the positive-meniscus geometry versus net negative power).

Conditions (6)–(8) govern mechanical layout: (6) ensures the two critical air gaps (L2–L3 and L4–L5) are thin enough for MYLAR-plate spacing; (7) provides adequate space between the front and rear groups for the aperture stop and leaf shutter; (8) constrains the rear group's total thickness to maintain back focal length without excess weight.

Conditions (9)–(11) constrain the Abbe-number palette for achromatic balance and material economy.

## Design Heritage and Context

The Hasselblad HC 80mm f/2.8 belongs to a long lineage of double-Gauss normal lenses for medium-format SLR cameras. The Hasselblad V-system's standard lens was the Carl Zeiss Planar 80mm f/2.8 — a 7-element, 5-group double-Gauss with cemented doublets that served as the default Hasselblad lens for over four decades. When Hasselblad transitioned to the H-system in 2002, the optical design partnership shifted from Zeiss to Fujifilm, and the new HC 80mm f/2.8 adopted a simpler 6-element all-air-spaced topology.

This design philosophy — fewer elements, no cemented interfaces, all-spherical — prioritizes manufacturing yield and cost control over the marginal performance gains that aspherical surfaces or exotic glass would provide. The patent's extensive discussion of MYLAR-plate spacing, edge-contact centering, and glass workability (¶0050–¶0053) reveals a design optimized for large-scale production by Fujifilm's optical factories.

The four embodiments in the patent explore the accessible parameter space within this fixed topology: Embodiments 1 and 3 share the S-TIM2/S-LAH51 material pairing and the same L4 glass (S-TIH18, $\nu_d = 28.5$), differing primarily in the rear-group positive elements; Embodiment 2 substitutes a different dense flint in L4 ($n_d = 1.710$, $\nu_d = 29.5$) and uses S-LAH51 in L6; Embodiment 4 replaces L1's lanthanum dense flint with a lanthanum crown (S-LAL14, $\nu_d = 49.3$), widening Condition (9) to $\nu_2 - \nu_1 = 14.8$ and demonstrating the design's tolerance to material substitution.

## Verification Summary

Paraxial verification was performed via y-nu matrix ray trace and confirmed independently via two-ray ABCD system matrix computation. All values agree with the patent to within numerical precision:

| Parameter | Patent | Computed |
|-----------|--------|----------|
| EFL | 100.000 mm | 100.000 mm |
| BFD | 76.090 mm | 76.090 mm |
| $F_{\rm NO}$ | 2.9 | — (input) |
| $2\omega$ | 46.7° | 46.7° (from image diagonal) |
| Petzval sum | — | 0.00130 mm⁻¹ |
| Petzval radius | — | −769 mm |

All eleven patent conditions were independently recomputed and confirmed satisfied.

## Sources

1. US 2001/0050819 A1, "Gaussian Lens for Photography," Kazunori Ohno, published December 13, 2001.
2. US 5,179,472, "Zoom lens," Kazunori Ohno and Hitoshi Miyano, assigned to Fuji Photo Optical Co., Ltd. (confirming inventor affiliation).
3. US 8,514,504 B2, "Image pickup lens, image pickup apparatus, and portable terminal device," assigned to Fujifilm Corporation (confirming continued Fujifilm affiliation).
4. Fujifilm Corporate Blog, "The History of FUJINON: the heritage of XF Lenses" (July 30, 2015) — identifies "Kazunori Oono, Ex-Senior Manager of the Optical Device Division."
5. Hasselblad product page, HC 2.8/80 (hasselblad.com/h-system/lenses/hc2880mm/).
6. Adorama product listing, Hasselblad HC 80mm f/2.8 — specifications: 6 elements / 6 groups, 46° AoV, MFD 0.70 m, 67 mm filter, f/2.8–32.
7. ShaShinKi product listing — specifications: 46°/38°/29° (diag/hor/vert), max magnification 1:6.5.
8. LENS-DB.COM entry, Hasselblad HC 80mm F/2.8 — notes "SUPER-EBC FUJINON 2,8/80 HASSELBLAD — made by Fujifilm."
9. OHARA glass catalog (S-LAH51, S-BSL7, S-TIM2, S-TIH18, S-LAL14).
10. Kamerastore product listings for Hasselblad 80mm f/2.8 Planar C, CF, and CB — confirming 7 elements / 5 groups for C/CF versions and 6 elements for the CB redesign.
