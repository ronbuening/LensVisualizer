# Hasselblad XCD 2,8/65 — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** US 2020/0319427 A1, "Lens System and Image Pickup Apparatus"
**Applicant:** Nittoh Inc., Suwa-shi, Nagano (JP)
**Inventor:** Takuya Yazaki
**Filed:** December 26, 2018 (PCT/JP2018/047819)
**Published:** October 8, 2020
**Priority Dates:** December 28, 2017 (JP 2017-254496, 2017-254497, 2017-254498)
**Embodiment analyzed:** Example 1 (Figs. 1–6)

The patent was filed by Nittoh Inc., a Suwa-based optical manufacturer known to design and produce lenses for Hasselblad's X-system. Example 1 of this patent is identified as the production design for the **Hasselblad XCD 2,8/65** based on the following convergent evidence:

1. **Element and group count.** The patent prescription contains 10 elements in 6 air-separated groups (four cemented doublets plus two singletons), matching the manufacturer's specification of "10 elements in 6 groups."
2. **Focal length.** The patent's computed EFL of 65.02 mm at infinity matches the marketed 65.0 mm focal length.
3. **Maximum aperture.** The patent gives F/2.80 at infinity, matching the marketed f/2.8.
4. **Angle of view.** The patent's 46.8° diagonal field of view matches Hasselblad's published 46° specification.
5. **Image circle.** The maximum image height in the patent's aberration plots is 28.02 mm, yielding an image circle diameter of approximately 56.0 mm — consistent with the Hasselblad X-system's 44 × 33 mm sensor (diagonal ≈ 55 mm).
6. **35mm equivalence.** The patent describes the system as having "a 35 mm equivalent focal length of 55 mm" (¶0063), while Hasselblad's official specification states 50mm equivalence. The sensor crop factor is 43.27/55.0 ≈ 0.787, giving 65 × 0.787 ≈ 51.1 mm — the manufacturer's rounded 50 mm value is adopted here per convention.
7. **Minimum focus distance.** The patent's closest object distance of 400 mm from the first lens surface, combined with the approximately 105 mm total optical path at close focus (the variable gap d12 expands from 1.00 to 14.46 mm, increasing the total track by 13.5 mm over the infinity value of 91.7 mm), gives an MFD of approximately 0.50 m from the image plane — matching the manufacturer's 0.5 m specification.
8. **Focus type.** The patent describes G1, Stop, and G2 moving as a unit while G3 remains fixed (¶0062). The official Hasselblad datasheet describes the focus type as "Front focusing," consistent with this mechanism.
9. **Patent timing.** The December 2017 priority date aligns with the lens's September 2018 announcement and subsequent market availability.


## Optical Architecture

The XCD 2,8/65 is a **positive–positive–positive three-group** design with no aspherical surfaces. The patent describes this topology as a deliberate alternative to the conventional telephoto arrangement (positive–negative), distributing positive refractive power across three groups to reduce the burden on any single group and suppress aberration at its source (¶0064). The overall design has a quasi-symmetrical arrangement of cemented doublets around the aperture stop, which aids Petzval sum correction and coma balancing.

The design consists of 10 elements organized in three macro-groups:

- **G1 (front, positive):** 4 elements in 2 cemented doublets (B11, B12). f₁ ≈ 121.9 mm. Disposed ahead of the aperture stop.
- **G2 (middle, positive):** 3 elements — 1 cemented doublet (B21) and 1 singleton (L23). f₂ ≈ 73.4 mm. Disposed behind the aperture stop.
- **G3 (rear, weakly positive):** 3 elements — 1 cemented doublet (B31) and 1 singleton (L33). f₃ ≈ 11,124 mm (extremely weak net positive power). Fixed during focusing.

The combined focal length of G1 + G2 is f₁₂ ≈ 69.1 mm, which provides nearly all of the system's refractive power. G3 functions as an aberration-correcting relay with near-zero net power: its cemented doublet B31 (f ≈ +79.5 mm) and trailing negative singlet L33 (f ≈ −75.5 mm) nearly cancel, yielding a combined group focal length exceeding 11 meters. The ratio f₃/f₁₂ ≈ 161 satisfies the patent's Condition (1): 2 ≤ f₃/f₁₂ ≤ 200.

This architecture gives the lens mild telephoto character. The axial distance from the first optical surface S1 to the last optical surface S17 is 69.2 mm (WL in the patent's notation, defined in ¶0069 as the total length of the lens system). The back focal distance from S17 to the sensor cover glass is an additional 20.73 mm, giving a total optical path of approximately 91.7 mm from S1 to the image plane.

The power hierarchy is f₂ < f₁ < f₃ (Condition 13), meaning G2 carries the strongest positive power. This is intentional: by suppressing the power of G1 (which handles the largest beam diameters and steepest ray angles), aberration generation in the front group is kept manageable. The strongest power is placed in G2, where the beam diameter is smaller and where anomalous-dispersion glasses can be most effective for chromatic correction.

In terms of optical elements at assembly, the four cemented doublets reduce the 10-element design to just six mountable units (B11, B12, B21, L23, B31, L33), which the patent argues reduces tolerance sensitivity and eases manufacturing (¶0084).


## Element-by-Element Analysis

### L11 — Negative Meniscus, Convex to Object (B11 front element)

nd = 1.63980, νd = 34.47. Glass: S-TIM27 (OHARA) — titanium flint. f ≈ −135.1 mm.

L11 is the frontmost element and the negative component of the first cemented doublet B11. As a meniscus convex toward the object, it bends the incoming collimated beam while introducing negative power that counterbalances the strong positive power of its cemented partner L12. The relatively low refractive index and moderate dispersion (νd = 34.5) of S-TIM27 provide the Abbe-number differential needed to create chromatic correction at the B11 cemented surface S2. In the patent's symmetry framework (¶0074), B11 is the "first cemented lens" disposed closest to the object side, and it mirrors the power arrangement of B31 closest to the image plane.

### L12 — Positive Meniscus, Convex to Object (B11 rear element)

nd = 1.83481, νd = 42.74. Glass: S-LAH55V (OHARA) — lanthanum crown, high index. f ≈ +45.3 mm.

L12 is the positive element of B11 and the primary power contributor to the front group. Its high refractive index (nd = 1.835) enables strong curvature at the cemented interface S2 while keeping the outer surface S3 relatively gentle (R = 77.6 mm). The patent specifically identifies this as one of only two high-index glasses in the system (¶0103). The cemented surface S2, convex toward the object, and its symmetrical counterpart S14 in B31, concave toward the object, are described as providing optically symmetrical performance across the stop (¶0087). S-LAH55V satisfies the patent's Condition (11): 1.75 ≤ nB11b ≤ 2.0.

The doublet B11 as a whole has a focal length of approximately +71.1 mm, forming a positive meniscus cemented group convex toward the object.

### L13 — Positive Meniscus, Convex to Object (B12 front element)

nd = 1.58913, νd = 61.13. Glass: S-BAL35 (OHARA) — barium crown. f ≈ +48.9 mm.

L13 is the positive element of the second cemented doublet B12. Using a moderate-index, low-dispersion barium crown, it provides substantial positive power (f ≈ +48.9 mm) while generating relatively little chromatic aberration. Its meniscus form, convex toward the object, continues the gentle convergence of the beam initiated by B11.

### L14 — Negative Meniscus, Convex to Object (B12 rear element)

nd = 1.60342, νd = 38.03. Glass: S-TIM5 (OHARA) — titanium flint. f ≈ −29.6 mm.

L14 is the negative element of B12. Despite having the shortest focal length of any individual element in the system (about −29.6 mm), it operates within the cemented doublet B12 where its strong diverging power is partially compensated by L13. The cemented doublet B12 as a whole has a net focal length of approximately −106.2 mm (negative), and its rear surface S6 (R = 15.62 mm) has the smallest radius of curvature in the entire front group. This strongly curved surface is the primary generator of the large air gap between G1 and the aperture stop, and it plays a critical role in collimating the beam as it approaches the diaphragm — a function the patent identifies in ¶0083 as enabling a bright, low-F-number design.

### Aperture Stop (St)

The aperture stop is located in the air gap between G1 and G2, at surface [7] in the patent's table. The d-spacing from S6 to the stop (8.75 mm) and from the stop to S8 (8.45 mm) form a nearly symmetrical air space, consistent with the patent's emphasis on overall system symmetry. The stop effective diameter is 15.1 mm (semi-diameter 7.55 mm); the paraxial marginal ray height ratio at the stop (0.653× the entrance beam height) magnifies this to an entrance pupil diameter of approximately 23.1 mm, consistent with F/2.80 at EFL = 65.02 mm. The Hasselblad datasheet states the entrance pupil is located 60 mm in front of the image plane.

### L21 — Negative Meniscus, Concave to Object (B21 front element)

nd = 1.59551, νd = 39.24. Glass: S-TIM3 (OHARA) — titanium flint. f ≈ −51.9 mm.

L21 is the negative element of the third cemented doublet B21, positioned immediately behind the aperture stop. Its concave-toward-object meniscus form mirrors the convex-toward-object form of B12's negative element L14 on the other side of the stop, contributing to the patent's symmetrical power arrangement. S-TIM3 provides moderate dispersion to create the chromatic differential at the B21 cemented interface.

### L22 — Positive Meniscus, Concave to Object (B21 rear element) — *ED Glass*

nd = 1.49700, νd = 81.54. Glass: S-FPL51 (OHARA) — fluorophosphate, anomalous low-dispersion (ED). f ≈ +109.8 mm.

L22 is marked with an asterisk (*) in the patent's prescription table, indicating anomalous dispersion glass. S-FPL51 is OHARA's widely used extra-low-dispersion (ED) fluorophosphate glass — the same material used in premium telephoto and apochromatic designs across the industry (cross-referenced to HOYA FCD1). With νd = 81.54 and anomalous partial dispersion (positive ΔPgF), it provides secondary-spectrum correction that simple crown–flint achromats cannot achieve. The patent identifies the second lens group G2 as the group with the highest refractive power, and notes that using anomalous dispersion glass here is most effective for chromatic correction (¶0088).

Within the cemented doublet B21, L22's S-FPL51 is paired with L21's S-TIM3 flint, creating the largest Abbe differential of any cemented interface in the system (Δνd ≈ 42.3) at the cemented surface S9. The doublet B21 has a net focal length of approximately −110.8 mm — negative despite containing the strongest ED element — because L21's stronger negative power prevails. Within G2, B21 functions primarily as a chromatic corrector: L23 behind it provides the group's dominant positive power (f ≈ +50.2 mm), and B21's negative contribution reduces the group's net power to the moderate f₂ ≈ 73.4 mm while correcting both primary and secondary chromatic aberration.

### L23 — Biconvex Positive — *Anomalous Dispersion Glass*

nd = 1.53775, νd = 74.70. Glass: S-FPM2 (OHARA) — fluorophosphate (moderate dispersion). f ≈ +50.2 mm.

L23 is also marked with an asterisk in the patent, indicating anomalous dispersion glass. S-FPM2 is a fluorophosphate glass in OHARA's FPM family — lower dispersion than conventional crowns (νd = 74.7) with anomalous partial dispersion, though less pronounced than S-FPL51. As the strongest individual positive element behind the stop (f ≈ 50.2 mm), L23 provides the bulk of G2's converging power. Its biconvex form (R₁ = +271.9 mm, R₂ = −29.7 mm) is heavily asymmetric, with the steep rear surface S12 doing most of the refractive work. This surface also forms the variable air gap that changes during focusing.

The use of two anomalous-dispersion glasses in G2 (S-FPL51 in L22 and S-FPM2 in L23) enables the patent to claim favorable chromatic correction — particularly secondary spectrum — without resorting to aspherical surfaces or exotic materials. This dual-ED strategy in the highest-power group is the design's primary chromatic correction mechanism.

### L31 — Positive Meniscus, Concave to Object (B31 front element)

nd = 1.89190, νd = 37.13. Glass: S-LAH79 (OHARA) — dense lanthanum flint, high index. f ≈ +36.5 mm.

L31 is the positive element of the fourth cemented doublet B31, and at nd = 1.892, it carries the highest refractive index in the entire system. S-LAH79 is OHARA's dense lanthanum glass optimized for high-index, moderate-dispersion applications. The patent identifies this element as satisfying Condition (7d): 1.88 ≤ nB31a ≤ 2.0 (¶0077), which enables the cemented surface S14 to carry substantial chromatic-correcting curvature while keeping the doublet physically compact.

L31 has the shortest focal length of any element in G3 (f ≈ +36.5 mm), providing the positive power that the doublet B31 contributes. The cemented surface S14 (R = −31.09 mm) is concave toward the object and serves as the symmetrical counterpart to B11's cemented surface S2 (R = +26.2 mm), which is convex toward the object. The patent describes this mirror-image arrangement as improving the overall system symmetry and being effective in reducing the Petzval sum (¶0074).

### L32 — Negative Meniscus, Concave to Object (B31 rear element)

nd = 1.69895, νd = 30.13. Glass: S-TIM22 (OHARA) — titanium flint, high dispersion. f ≈ −70.8 mm.

L32 is the negative flint element of B31. S-TIM22 has the lowest Abbe number in the system (νd = 30.1), providing the strongest dispersion among all elements. The Abbe differential between L31 and L32 at the cemented interface S14 is modest (Δνd ≈ 7.0) — the smallest of any cemented interface in this design. Chromatic correction at B31 relies instead on the large refractive index step between the two elements (Δnd = 0.193 — comparable to B11's Δnd = 0.195, and far exceeding B12's 0.014 or B21's 0.099), combined with the strong curvature of S14 (R = −31.09 mm). This index differential creates substantial surface power at the cement, allowing chromatic correction even with the limited Abbe spread. The patent's Condition (8) — nB31b/nB31a < 1 — is satisfied (0.90), confirming that the positive element carries the higher index, which concentrates refractive power at the cemented interface concave toward the object (¶0078).

The cemented doublet B31 has a net focal length of approximately +79.5 mm. This is a moderately strong positive power, which is almost entirely cancelled by the trailing negative element L33 to produce G3's near-zero net power.

### L33 — Negative Meniscus, Concave to Object

nd = 1.48749, νd = 70.24. Glass: S-FSL5 (OHARA) — fluorosilicate crown. f ≈ −75.5 mm.

L33 is the final optical element before the back focal distance and sensor cover glass. Its relatively low refractive index (nd = 1.487) enables a strongly curved object-side surface S16 (R = −35.5 mm) while keeping the image-side surface S17 nearly flat (R = −1023.4 mm). The patent describes this geometry as enabling the edge of L33 to sit adjacent to or touching the rear surface S15 of B31, simplifying mechanical assembly (¶0080).

L33's negative power (f ≈ −75.5 mm) serves two critical functions. First, it enables a quasi-telephoto rear configuration: the positive B31 followed by negative L33 shortens the total track relative to the effective focal length. Second, it widens the light cone toward the image plane, producing the large image circle (approximately 56 mm diameter) needed for the 44 × 33 mm medium-format sensor (¶0070). The patent notes that G3's weak net power allows each element within it to carry substantial individual power for aberration correction without increasing the group's contribution to the system power budget (¶0071).


## Glass Identification and Selection

The design uses an all-OHARA glass palette with 10 distinct glass types — every element uses a unique glass, with no glass repeated anywhere in the system. All identifications are exact matches (Δnd = 0 for every element) against the OHARA catalog. This diversity of glass types reflects the designer's strategy of optimizing each element's refractive index and dispersion independently for its specific role, rather than constraining the design to a smaller glass menu.

| Element | Glass | nd | νd | Type | Role |
|---------|-------|-------|-------|------|------|
| L11 | S-TIM27 (OHARA) | 1.63980 | 34.47 | Titanium flint | Chromatic partner in B11 |
| L12 | S-LAH55V (OHARA) | 1.83481 | 42.74 | Lanthanum crown (high-nd) | Primary positive power in G1 |
| L13 | S-BAL35 (OHARA) | 1.58913 | 61.13 | Barium crown | Positive power in B12 |
| L14 | S-TIM5 (OHARA) | 1.60342 | 38.03 | Titanium flint | Beam collimation / field correction |
| L21 | S-TIM3 (OHARA) | 1.59551 | 39.24 | Titanium flint | Chromatic partner in B21 |
| L22 | S-FPL51 (OHARA) | 1.49700 | 81.54 | Fluorophosphate (ED) | Secondary-spectrum correction |
| L23 | S-FPM2 (OHARA) | 1.53775 | 74.70 | Fluorophosphate (anomalous) | Primary positive power in G2 |
| L31 | S-LAH79 (OHARA) | 1.89190 | 37.13 | Dense lanthanum flint | Positive power in B31 + symmetry partner to L12 |
| L32 | S-TIM22 (OHARA) | 1.69895 | 30.13 | Titanium flint (high disp.) | Chromatic partner in B31 |
| L33 | S-FSL5 (OHARA) | 1.48749 | 70.24 | Fluorosilicate crown | Negative field flattener / image expander |

The chromatic strategy employs three mechanisms operating at different positions in the system:

**Cemented-doublet achromatism** at B11, B12, B21, and B31: in each doublet, the positive element has lower dispersion (higher νd) than the negative element, providing the differential dispersion needed for longitudinal chromatic correction. The Abbe differentials at the four cemented interfaces vary substantially: B21 has the largest spread (Δνd = 42.3, S-TIM3 vs S-FPL51), followed by B12 (Δνd = 23.1, S-BAL35 vs S-TIM5), B11 (Δνd = 8.3, S-TIM27 vs S-LAH55V), and B31 with the smallest (Δνd = 7.0, S-LAH79 vs S-TIM22). Only B12 and B21 are classical crown–flint pairs; B11 and B31 pair two glasses that are both flints by the traditional νd < 50 classification, achieving achromatism through the modest dispersion contrast between them and, more importantly, through their large refractive index steps (Δnd ≈ 0.195 and 0.193 respectively).

**Anomalous partial dispersion** in G2: the two ED-class elements L22 (S-FPL51) and L23 (S-FPM2) provide secondary-spectrum correction. Both glasses have positive ΔPgF (anomalous partial dispersion above the Schott normal line), which reduces the secondary spectrum that conventional crown–flint achromats leave uncorrected.

**Petzval sum control** through the negative meniscus doublets B12 and B21 flanking the stop: the strongly curved exit surface of B12 (S6, R = +15.62 mm) and entry surface of B21 (S8, R = −17.67 mm) are the dominant field-flattening surfaces, contributing −0.0241 and −0.0211 respectively to the Petzval sum. The high-index lanthanum glasses at the cemented interfaces of B11 and B31 play an indirect supporting role: by enabling strong refractive power at internal cemented surfaces, they allow the overall power distribution to be arranged so that the exit/entry surfaces near the stop can carry the extreme curvatures needed for Petzval correction. The trailing negative element L33 provides additional field flattening (−0.0092 at S16). The computed Petzval sum for the entire system is 0.00145, corresponding to a Petzval radius of approximately 691 mm — about 10.6× the focal length, indicating very well-corrected field curvature.

Only two elements use high-index glass (nd ≥ 1.8): L12 and L31. The patent explicitly highlights this as a cost-optimization feature (¶0103), noting that the symmetrical placement of these two high-index elements — one closest to the object side of G1, one in G3's cemented doublet — provides maximal aberration-correction leverage with minimal use of expensive materials.


## Focus Mechanism

The XCD 2,8/65 uses a **front-group focusing** mechanism. Groups G1 and G2, together with the aperture stop, move as a rigid unit toward the object during focusing from infinity to close focus. Group G3 remains stationary relative to the image plane.

This is a unit-focus arrangement with a single variable air gap:

| Parameter | Infinity | 2400 mm | 400 mm (MFD) |
|-----------|----------|---------|--------------|
| d12 (S12–S13 air gap) | 1.00 mm | 3.02 mm | 14.46 mm |
| Focal length | 65.02 mm | 65.03 mm | 65.09 mm |
| F-number | 2.80 | 2.88 | 3.36 |
| Angle of view | 46.8° | 45.6° | 39.6° |

The total focus travel from infinity to the closest object distance (400 mm from S1, corresponding to approximately 0.5 m from the image plane) is 14.46 − 1.00 = 13.46 mm. At closest focus, the effective F-number increases modestly from 2.80 to 3.36 (approximately 0.5 stops, consistent with the Hasselblad datasheet's specified "0.5 f-stops" exposure reduction at minimum focus distance), and the angle of view narrows from 46.8° to 39.6°.

The focal length remains remarkably stable across the focus range (65.02 → 65.09 mm), varying by less than 0.1%. This stability is a consequence of G3's extremely weak net power: since G3 contributes negligibly to the system focal length, moving the high-power groups G1+G2 changes focus conjugation without materially altering the focal length.

The patent describes this focusing arrangement as "integral" motion of G1, Stop, and G2 (¶0090). This is mechanically simpler than floating-element or multi-group focusing systems, and the single moving assembly makes it well-suited to the leaf-shutter integration required by Hasselblad's XCD lens architecture — the shutter mechanism, located near the aperture stop, moves with the focusing group rather than needing independent actuation.


## Aspherical Surfaces

This design has **no aspherical surfaces**. All 10 elements use exclusively spherical surfaces. No aspherical coefficient tables are provided in any of the patent's eight numerical examples.

This is a notable and deliberate design choice. The patent's entire philosophy centers on achieving high MTF performance through architectural symmetry, cemented-group assembly precision, and high-index glass selection. The patent text argues (¶0063–0064) that distributing positive power across three groups suppresses aberration at its source, and that cemented doublets reduce the number of independently positioned elements, improving assembly consistency and reducing tolerance sensitivity (¶0084). The patent does not discuss aspherical surfaces as an alternative; the all-spherical approach is implicit in the design rather than explicitly justified.

The all-spherical design has several practical advantages for a medium-format system:

- **Tolerance insensitivity.** Spherical surfaces are self-centering and self-aligning within cemented groups, eliminating the decentration sensitivity that aspherical surfaces introduce.
- **Manufacturing simplicity.** Conventional polishing methods suffice for all surfaces, avoiding the cost and yield constraints of precision glass molding or magnetorheological finishing.
- **Consistent performance.** The patent explicitly notes that high MTF in production depends on accurate element placement, and that cemented groups (where inter-element alignment is set permanently at cementing) provide better consistency than individually mounted elements (¶0084).

For a medium-format system where the sensor resolves approximately 5.3 μm pixels (Hasselblad X1D, 50 MP on a 44 × 33 mm sensor), the aberration budget is more forgiving per-pixel than a 35 mm-format system of equivalent angular resolution. This larger per-pixel aberration budget makes it feasible to achieve diffraction-limited or near-diffraction-limited performance with an all-spherical design, provided the glass selection and architectural symmetry are carefully optimized — which this design achieves.


## Aberration Correction Strategy

The patent's design philosophy for aberration correction rests on three pillars: architectural symmetry, cemented-interface chromatic correction, and Petzval-sum management through the strongly curved negative surfaces flanking the stop.

**Symmetry.** The arrangement of cemented doublets around the aperture stop is quasi-symmetrical in two distinct respects. In power sequence, the order is positive (B11) – negative (B12) | stop | negative (B21) – positive (B31), an approximately symmetrical inversion across the diaphragm. In meniscus orientation, the two object-side doublets (B11, B12) are both convex toward the object, while the two image-side doublets (B21, B31) are both concave toward the object — a mirror-image surface orientation across the stop. The patent describes this dual symmetry explicitly (¶0082): each doublet on the object side is composed of a positive meniscus and a negative meniscus both convex toward the object, and each doublet on the image side is composed of a negative meniscus and a positive meniscus both concave toward the object. This arrangement inherently reduces odd-order aberrations (coma, distortion, lateral color) and simplifies the correction of even-order aberrations (spherical, astigmatism, field curvature).

**Collimated beam at the stop.** By disposing the negative meniscus doublets B12 and B21 facing each other across the stop, the beam passing through the aperture is approximately collimated with respect to the optical axis (¶0083). This geometry minimizes the stop's contribution to vignetting and enables a bright design (F/2.8) despite the moderate element diameters.

**Petzval sum.** The computed Petzval sum of 0.00145 (Petzval radius ≈ 691 mm) represents excellent field-curvature correction for a 65 mm lens covering a 56 mm image circle. The primary Petzval-correcting surfaces are S6 (L14 rear, R = +15.62 mm, contribution −0.0241) and S8 (L21 front, R = −17.67 mm, contribution −0.0211) — the strongly curved surfaces of the negative meniscus doublets B12 and B21 that flank the aperture stop. Together these two surfaces contribute −0.0452 to the Petzval sum, accounting for nearly three-quarters of the total negative Petzval contribution (−0.0611) needed to offset the cumulative positive contributions (+0.0626) from the system's refracting surfaces. The rear negative element L33 provides a further −0.0092 correction at S16. The near-cancellation of these large opposing terms produces the system's very flat field.


## Design Heritage and Context

The XCD 2,8/65 occupies the "normal" focal length position in Hasselblad's X-system lens lineup, equivalent to approximately 50 mm on 35 mm-format cameras. Nittoh Inc., the patent holder and manufacturer, has been a long-standing optical development partner for Hasselblad, designing and producing multiple XCD-mount lenses.

The three-group positive–positive–positive architecture with a trailing weak corrector group is uncommon in modern lens design, where retrofocus, telephoto, and double-Gauss topologies dominate. The patent positions this configuration as an alternative to conventional telephoto (positive–negative) designs, arguing that distributing positive power across three groups reduces per-surface aberration generation and enables correction with fewer total elements (¶0005–0006). The result is a 10-element design that achieves medium-format-grade image quality without aspherical surfaces — a design philosophy that prioritizes manufacturing consistency and assembly tolerance over the raw aberration-correction flexibility that aspherical surfaces would provide.

The patent's eight numerical examples explore variations on this three-group theme, with different glass selections, element counts (8 to 10), and group sub-structures. Example 1, identified here as the production XCD 2,8/65, uses the full complement of four cemented doublets and represents the most thoroughly optimized variant in the family.


## Verification Summary

Independent paraxial ray trace (y-nu method) and ABCD-matrix group computations confirm:

| Parameter | Computed | Patent (¶0100, Fig. 3) | Δ |
|-----------|----------|------------------------|---|
| System EFL (infinity) | 65.016 mm | 65.02 mm | −0.004 mm |
| G1 focal length | 121.92 mm | 121.92 mm | 0 |
| G2 focal length | 73.40 mm | 73.40 mm | 0 |
| G3 focal length | 11,131 mm | 11,124 mm | +7 mm (0.06%) |
| G1+G2 combined | 69.09 mm | 69.09 mm | 0 |
| B31 focal length | 79.47 mm | 79.47 mm | 0 |
| L33 focal length | −75.50 mm | −75.50 mm | 0 |
| F-number (from EP trace) | 2.81 | 2.80 | +0.01 |
| Angle of view (diagonal) | 46.6° | 46.8° | −0.2° |
| Petzval sum | 0.00145 | — | — |
| Petzval radius | 691 mm | — | — |

The G3 focal length shows a 0.06% discrepancy attributable to cumulative rounding in the extremely weak net power of this group (where small differences in intermediate values are amplified by the near-cancellation of B31 and L33 powers). All other values agree to the precision of the patent's published figures.

Glass identification yielded exact OHARA catalog matches (Δnd = 0.00000) for all 10 elements. The largest Abbe-number discrepancy is 0.03 (L12: patent 42.74 vs catalog 42.71 for S-LAH55V), well within transcription tolerance.


## Sources

- US 2020/0319427 A1, "Lens System and Image Pickup Apparatus," Nittoh Inc. / Takuya Yazaki. Published October 8, 2020.
- Hasselblad XCD 2,8/65mm Datasheet (Dec 2018, v2). Available at hasselblad.com.
- OHARA Optical Glass Catalog, May 2023 edition (glass nd/νd verification).
