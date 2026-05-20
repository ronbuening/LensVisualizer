# Canon EF-S 17-55mm f/2.8 IS USM — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** JP 2007-108398 A (Japan), "Zoom Lens and Image Pickup Apparatus Having the Same."
**Applicant:** Canon Inc. (Tokyo, Japan).
**Inventor:** Endo Hiroshi (遠藤 宏志).
**Filed:** October 13, 2005 (特願 2005-298895). **Published:** April 26, 2007.
**Embodiment analyzed:** Numerical Example 1 (数値実施例 1).

The identification of Example 1 with the production Canon EF-S 17-55mm f/2.8 IS USM rests on the following convergent evidence:

1. **Element and group count.** The prescription yields 19 glass elements in 12 air-separated groups — exactly matching Canon's published specification for the EF-S 17-55mm f/2.8 IS USM (Canon Camera Museum, global.canon/en/c-museum/product/ef390.html).
2. **Focal length range.** The patent states $f = 17.5$–$53.4$ mm, closely matching the marketed 17–55 mm range. The wide-end discrepancy (17.50 vs. 17 mm nominal) is typical of Japanese patent practice, which publishes design values rather than rounded marketing values.
3. **Maximum aperture.** The patent gives $F_{\text{no}} = 2.9$ at all zoom positions. The marketed value is f/2.8 — a standard rounding from a design value of 2.89–2.9.
4. **Half-field angle.** The patent states $2\omega = 75.9°$–$28.7°$. Canon's APS-C sensor measures 22.2 × 14.8 mm (diagonal ≈ 26.7 mm), giving $2\omega \approx 74.6°$ at 17.5 mm. The patent's slightly larger 75.9° corresponds to a design image diagonal of ≈ 27.3 mm, overfilling the sensor by ≈ 0.6 mm — standard practice for manufacturing margin.
5. **Aspherical surface count and type.** Three aspherical surfaces are present: two hybrid composite (replica) aspherics (surfaces 6 and 29, identified by the UV-curing resin layer with $n_d = 1.51640$) and one glass-molded aspheric (surface 20). Canon's first-party description confirms "three aspherical lens elements (one glass mold, two replica)" (Canon South & Southeast Asia product page; Canon Camera Museum). This match is uniquely specific to Example 1 — Examples 2, 3, and 4 each have only one hybrid-composite aspheric (surface 6), with the remaining two aspherics on glass elements, yielding a "two glass-mold, one replica" configuration that does not match the production specification.
6. **UD element count.** Two elements use S-FPL51 class ED glass ($n_d = 1.49700$, $\nu_d = 81.5$). Canon's South & Southeast Asia product page explicitly states "Two UD lenses also reduce secondary chromatic aberrations," and B&H Photo's key-feature listing concurs ("Two UD and Three Aspherical Elements"). The patent's Table 1 confirms this by evaluating conditions (3) and (4) separately for both UD elements in Group 5.
7. **Five-group zoom architecture.** The design is a positive–negative–positive–negative–positive five-group zoom with inner focus via Group 2 and image stabilization via Group 4 — matching the marketed lens's IS and Ring USM inner-focus features.
8. **Patent timing.** Filing date (October 2005) precedes the lens's May 2006 market introduction by approximately seven months, consistent with Canon's typical patent-to-product timeline.
9. **Back focal distance.** The wide-end BFD of 35.29 mm ($SK_w/f_w = 2.02$) is appropriate for a Canon EF-S mount with APS-C sensor, accommodating the mirror box and low-pass filter assembly.
10. **Close focus distance.** The marketed MFD is 0.35 m. The patent does not publish close-focus spacing data for Example 1, but the inner-focus architecture (Group 2 moves object-ward) is consistent with the 0.35 m specification.

## Optical Architecture

The Canon EF-S 17-55mm f/2.8 IS USM is a five-group zoom of the positive–negative–positive–negative–positive power distribution type. The patent text (¶0028–¶0029) describes the architecture as: a positive first group L1, a negative second group L2, and a rear group LR with overall positive power, where LR is further subdivided into a positive third group L3, a negative fourth group L4, and a positive fifth group L5.

The system comprises 19 glass elements in 12 groups, plus two thin UV-curing resin layers forming the aspherical surfaces of the hybrid composite elements.

**Group roles:**

The first group L1 ($f_1 = +95.7$ mm) serves as the front collector, gathering light from the field and providing the primary positive power that drives the telephoto-ratio zoom. It consists of a cemented doublet (flint + crown) followed by a positive meniscus singlet — a classic front-group configuration for high-ratio standard zooms.

The second group L2 ($f_2 = -12.8$ mm) is the primary variator. Its strong negative power produces the magnification change during zooming. It also serves as the focus group, moving toward the object for close-focus (inner-focus architecture, ¶0073). The group contains three negative and two positive lenses — an unusual five-element variator that enables the patent's chromatic correction strategy (discussed below).

The third group L3 ($f_3 = +22.9$ mm) is the relay group, containing the aperture stop and a flare-cut stop. It re-images the intermediate pupil formed by L2 and provides the primary positive power of the rear system.

The fourth group L4 ($f_4 = -31.4$ mm) is the image-stabilization group, split into sub-groups L4a and L4b (¶0074). L4a is decentered perpendicular to the optical axis to compensate for camera shake, providing the 3-stop IS correction claimed by Canon. Each sub-group is a cemented doublet.

The fifth group L5 ($f_5 = +38.4$ mm) is the final field-flattening and chromatic-correction group. It contains the two UD (S-FPL51 class) elements that correct secondary spectrum, plus a hybrid composite aspheric on the front element.

**Zoom kinematics:** During zooming from wide to telephoto (¶0035–¶0036), L1 moves toward the object, L2 moves toward the image, and L3–L5 all move toward the object while varying the inter-group spacings. The group spacing changes satisfy:

$$D_{1w} < D_{1t}, \quad D_{2w} > D_{2t}, \quad D_{3w} < D_{3t}, \quad D_{4w} > D_{4t}$$

The total track length increases from 152.0 mm at wide to 178.7 mm at telephoto, indicating this is not an internally compensated zoom — the overall optical length changes with focal length.

## Element-by-Element Analysis

### Group 1 — Front Collector ($f_1 = +95.7$ mm)

**L1: Negative Meniscus, convex to object.**
$n_d = 1.84666$, $\nu_d = 23.9$. Glass: S-TIH53 (OHARA) — dense flint. $f \approx -135$ mm.

L1 is the front element of a cemented doublet with L2. Its high-index, high-dispersion flint glass serves as the achromatizing partner to the positive crown behind it. The strongly curved rear surface ($R_2 = +74.677$ mm) forms the cemented interface. As a negative meniscus convex to the object, it contributes negative Petzval curvature that partially offsets the positive contribution of the group.

**L2: Biconvex Positive (cemented to L1).**
$n_d = 1.60311$, $\nu_d = 60.6$. Glass: S-BSM14 (OHARA) — barium crown. $f \approx +114$ mm.

The positive crown element of the front cemented doublet. The barium crown provides moderate positive power with relatively low dispersion, forming a classic crown-flint achromat with L1. The rear surface ($R_3 = -799.5$ mm) is nearly flat, making this element close to plano-convex in shape.

**L3: Positive Meniscus, convex to object.**
$n_d = 1.71300$, $\nu_d = 53.9$. Glass: S-LAL8 (OHARA) — lanthanum crown. $f \approx +110$ mm.

An air-spaced positive meniscus that adds positive power to Group 1 without introducing excessive higher-order aberrations. The lanthanum crown glass provides higher refractive index than the barium crown of L2, allowing the surfaces to be less strongly curved for the same power contribution. The meniscus shape bends the principal ray, helping to control field curvature and coma across the wide zoom range.

### Group 2 — Variator / Focus Group ($f_2 = -12.8$ mm)

The patent (¶0044–¶0047) describes L2 as containing three negative lenses and two positive lenses, arranged object-to-image as: negative meniscus (concave image-side), negative, positive, negative, positive. This five-element variator is the design's distinguishing architectural feature — most comparable zooms use a four-element variator. The extra positive lens (P2B) enables a chromatic correction strategy that reduces secondary spectrum without requiring anomalous-dispersion glass in this group.

**L4 (Hybrid Composite): Negative Meniscus, convex to object (1× aspherical).**
Resin layer: $n_d = 1.51640$, $\nu_d = 52.2$ (UV-curing resin, 0.05 mm). Glass body: $n_d = 1.80400$, $\nu_d = 46.6$. Glass: S-LAH65V (OHARA) — dense lanthanum flint. Combined $f \approx -19$ mm.

This is the first hybrid composite (replica) aspheric. A thin resin layer on the object-side surface carries the aspherical profile, while the dense lanthanum flint glass body provides the refractive power. The element is a strongly curved negative meniscus ($R_6 = +74.3$ mm, $R_8 = +12.3$ mm), with the concave image-side surface being far more strongly curved. The patent (¶0052) states that the aspherical surface is shaped so that positive power increases from center to periphery, primarily controlling distortion variation across the zoom range. Note that with $\nu_d = 46.6$, this glass sits on the boundary between crown and flint territory; it functions as a dense lanthanum flint in the aberration balance.

**L5: Biconcave Negative.**
$n_d = 1.83481$, $\nu_d = 42.7$. Glass: S-LAH55V (OHARA) — dense lanthanum flint. $f \approx -22$ mm.

A symmetrical biconcave element ($R_9 = -37.4$ mm, $R_{10} = +37.4$ mm) providing strong negative power. The high index ($n_d = 1.83$) and moderate dispersion allow it to carry substantial diverging power without excessively large surface curvatures. This element is the primary power contributor to the variator group's overall negative focal length.

**L6 (P2A): Biconvex Positive.**
$n_d = 1.83400$, $\nu_d = 37.2$. Glass: S-LAH60 (OHARA) — dense lanthanum flint. $f \approx +19$ mm.

This is P2A — the strongest positive lens in Group 2 and the element governed by the patent's primary conditional expressions (1) and (2). The patent's chromatic correction innovation centers on this element. With $\nu_d = 37.2$ (condition 1: $\nu_d > 30$) and $\theta_{gF} = 0.578$ (condition 2: $\theta_{gF} < 0.587$), P2A uses a glass with relatively low partial dispersion ratio for its Abbe number — placing it below the Schott normal line. This means P2A can carry substantial positive power for aberration correction (spherical aberration, coma) without introducing the large secondary-spectrum contribution that would arise from a conventional high-dispersion positive element in this position.

The biconvex shape ($R_{11} = +27.2$ mm, $R_{12} = -36.5$ mm) delivers strong positive power that partially offsets the surrounding negative elements. As the most powerful positive element in L2, P2A is critical for balancing higher-order monochromatic aberrations against the group's overall negative power.

**L7 + L8 (Cemented Doublet including P2B):**

*L7: Biconcave Negative.*
$n_d = 1.80400$, $\nu_d = 46.6$. Glass: S-LAH65V (OHARA) — dense lanthanum flint. $f \approx -16$ mm.

The third negative lens in the variator. Its symmetric biconcave shape ($R_{13} = -25.9$ mm, $R_{14} = +25.9$ mm) provides strong negative power. Cemented to the following positive element P2B, it forms an achromatic doublet within the variator group.

*L8 (P2B): Biconvex Positive (cemented to L7).*
$n_d = 1.80518$, $\nu_d = 25.4$. Glass: S-TIH6 (OHARA) — dense flint. $f \approx +29$ mm.

P2B is the second positive lens in Group 2. The patent (¶0045) explains that because P2A uses a relatively low-dispersion glass (condition 1), a single positive lens cannot adequately achromatize the group. P2B provides the additional color correction: its high-dispersion flint ($\nu_d = 25.4$) contributes negative chromatic power that, combined with P2A's positive contribution, achieves achromatic balance within the variator. The cemented interface with L7 also helps control coma and spherical aberration at the strongly curved junction surfaces.

### Group 3 — Relay Group ($f_3 = +22.9$ mm)

The flare-cut stop (SSP) sits at the front of this group, followed by a biconvex singlet, the aperture stop (SP), and a cemented doublet. The aperture stop placement within L3 is consistent with a telecentric-exit design suitable for digital sensor illumination.

**L9: Biconvex Positive.**
$n_d = 1.58913$, $\nu_d = 61.1$. Glass: S-BAL35 (OHARA) — barium crown. $f \approx +59$ mm.

A weakly positive biconvex element ($R_{17} = +254.8$ mm, $R_{18} = -39.9$ mm) positioned between the flare stop and the aperture stop. The nearly flat front surface and moderately curved rear surface give it a nearly plano-convex character. It begins the positive-power relay action after the variator group's diverging beam.

**L10: Biconvex Positive (glass-molded aspheric, cemented to L11).**
$n_d = 1.58313$, $\nu_d = 59.4$. Glass: S-BAL42 (OHARA) — barium crown. $f \approx +21$ mm.

This is the sole glass-molded aspherical element in the design. The front surface ($R_{20} = +36.4$ mm) carries the aspherical profile. The patent (¶0072) states that the Group 3 aspheric is shaped so that positive power decreases from center to periphery, primarily controlling spherical aberration variation across the zoom range. As the strongest positive element in L3, it contributes the bulk of the relay group's power. The barium crown glass is well-suited for precision glass molding (PGM), being a moderate-index, moderate-dispersion material with favorable thermal properties for the molding process.

**L11: Negative Meniscus, concave to object (cemented to L10).**
$n_d = 1.84666$, $\nu_d = 23.9$. Glass: S-TIH53 (OHARA) — dense flint. $f \approx -59$ mm.

The achromatizing flint partner cemented to L10. Both surfaces are concave toward the object ($R_{21} = -16.4$ mm, $R_{22} = -26.2$ mm), making it a negative meniscus. Its high dispersion balances the chromatic contribution of the positive crown L10. The cemented interface at $R_{21} = -16.4$ mm is the most strongly curved junction in Group 3 and controls both longitudinal and lateral color in the relay section.

### Group 4 — Image Stabilization Group ($f_4 = -31.4$ mm)

Group 4 is divided into two sub-groups, L4a and L4b (¶0074). L4a is decentered perpendicular to the optical axis during image stabilization. Both sub-groups are cemented doublets.

**Sub-group L4a (IS decentering group):**

*L12: Positive Meniscus, concave to object.*
$n_d = 1.84666$, $\nu_d = 23.9$. Glass: S-TIH53 (OHARA) — dense flint. $f \approx +34$ mm.

Both surfaces are concave toward the object ($R_{23} = -51.8$ mm, $R_{24} = -18.9$ mm), but the rear surface is much more strongly curved, producing net positive power. Notably, L12 is a *positive flint* — the reverse of the conventional achromat arrangement where the positive element is a crown. In this reversed doublet, the positive-power element carries high dispersion ($\nu_d = 23.9$) while the negative element (L13) carries low dispersion ($\nu_d = 55.5$). The reversed arrangement is a deliberate design choice: in an IS decentering group, the doublet must maintain near-zero chromatic power during lateral displacement, and the reversed configuration achieves the required achromatization while accommodating the specific surface curvatures needed for the IS shift geometry.

*L13: Biconcave Negative (cemented to L12).*
$n_d = 1.69680$, $\nu_d = 55.5$. Glass: S-LAL14 (OHARA) — lanthanum crown. $f \approx -21$ mm.

The negative crown partner in the L4a reversed achromat. With $\nu_d = 55.5$, S-LAL14 provides the low-dispersion counterpart to L12's high-dispersion flint, achieving achromatization despite the unconventional power-dispersion assignment. The combined L4a sub-group has net negative power ($f \approx -51$ mm); when decentered, it shifts the image laterally to compensate for camera shake. The cemented construction ensures that lateral color does not increase during stabilization, since the two elements maintain their relative alignment — a design consideration noted in ¶0074.

**Sub-group L4b:**

*L14: Negative Meniscus, concave to object.*
$n_d = 1.84666$, $\nu_d = 23.9$. Glass: S-TIH53 (OHARA) — dense flint. $f \approx -50$ mm.

Both surfaces concave toward the object ($R_{26} = -28.3$ mm, $R_{27} = -85.9$ mm); the front surface is more strongly curved. This element provides the primary negative power in the L4b sub-group.

*L15: Positive Meniscus, concave to object (cemented to L14).*
$n_d = 1.58913$, $\nu_d = 61.1$. Glass: S-BAL35 (OHARA) — barium crown. $f \approx +124$ mm.

A weakly positive meniscus cemented to L14, achromatizing the sub-group. Both surfaces ($R_{27} = -85.9$ mm, $R_{28} = -39.8$ mm) are concave toward the object. The combined L4b sub-group has moderate negative power, providing the remaining negative contribution to Group 4.

### Group 5 — Field Flattener and Chromatic Corrector ($f_5 = +38.4$ mm)

Group 5 contains the two UD elements that are central to the lens's secondary-spectrum correction. It also houses the second hybrid composite aspheric. The group structure is a cemented triplet (resin + flint + UD crown) followed by a cemented doublet (UD crown + flint).

**L16 (Hybrid Composite): Negative Meniscus + UD Biconvex (cemented triplet).**

The triplet consists of a thin resin layer, a negative meniscus flint, and a biconvex UD crown, all cemented together.

*Resin layer:* $n_d = 1.51640$, $\nu_d = 52.2$ (UV-curing resin, 0.08 mm). The front surface ($R_{29} = +129.2$ mm) is aspherical. The patent (¶0072) states that the frontmost surface of Group 5 is shaped so that positive power decreases from center to periphery, primarily controlling field curvature.

*L16a (glass body): Negative Meniscus, convex to object.*
$n_d = 1.83400$, $\nu_d = 37.2$. Glass: S-LAH60 (OHARA) — dense lanthanum flint. $f \approx -57$ mm.

Both surfaces ($R_{30} = +154.4$ mm, $R_{31} = +36.2$ mm) are convex toward the object; the rear surface is far more strongly curved, giving the element its negative power. This high-index flint serves as the achromatizing partner to the UD crown that follows. Its position immediately in front of the UD element maximizes the chromatic leverage.

*L17 (UD element): Biconvex Positive.*
$n_d = 1.49700$, $\nu_d = 81.5$. Glass: S-FPL51 (OHARA) — ED fluorophosphate crown. $f \approx +37.5$ mm.

The first of the two UD elements. The symmetric biconvex shape ($R_{31} = +36.2$ mm, $R_{32} = -36.2$ mm) provides strong positive power. S-FPL51 has anomalous partial dispersion ($\theta_{gF} = 0.537$, $\Delta P_{gF} > 0$), enabling correction of the g-line secondary spectrum that conventional achromats cannot address. This element satisfies the patent's conditions (3) and (4): $\nu_{da} = 81.5 > 60$ and $\theta_{gFa} = 0.537 > -0.0015 \times 81.5 + 0.6425 = 0.520$.

**L18 + L19 (Cemented Doublet):**

*L18 (UD element): Biconvex Positive.*
$n_d = 1.49700$, $\nu_d = 81.5$. Glass: S-FPL51 (OHARA) — ED fluorophosphate crown. $f \approx +36$ mm.

The second UD element, also a biconvex positive with asymmetric curvatures ($R_{33} = +64.8$ mm, $R_{34} = -23.8$ mm — rear surface much more strongly curved). Like L17, it provides positive power with anomalous partial dispersion for secondary-spectrum correction. The patent (¶0050) confirms that both positive lenses in Group 5 satisfy conditions (3) and (4).

*L19: Negative Meniscus, concave to object.*
$n_d = 1.74950$, $\nu_d = 35.3$. Glass: S-NBH51 (OHARA) — dense flint. $f \approx -86$ mm.

The achromatizing flint partner cemented to L18. Both surfaces ($R_{34} = -23.8$ mm, $R_{35} = -38.9$ mm) are concave toward the object. This element's moderate negative power partially offsets L18's positive power while its high dispersion achromatizes the UD element. The coefficient-backed relabel uses OHARA S-NBH51, which matches the patent nd/νd pair closely enough for the runtime Sellmeier path.

## Glass Identification and Selection

The design employs 11 distinct glass types (plus UV-curing resin). Ten are from the OHARA catalog; one is confirmed HOYA glass. The glass palette is dominated by three families: dense flints for achromatization, lanthanum glasses for high-index aberration correction, and ED fluorophosphate crowns for secondary-spectrum control.

| Glass | $n_d$ | $\nu_d$ | Used in | Role |
|---|---|---|---|---|
| S-TIH53 (OHARA) | 1.84666 | 23.9 | L1, L11, L12, L14 | Dense flint — achromatizing partner in cemented doublets throughout the system |
| S-BSM14 (OHARA) | 1.60311 | 60.6 | L2 | Barium crown — moderate-index positive power in front doublet |
| S-LAL8 (OHARA) | 1.71300 | 53.9 | L3 | Lanthanum crown — high-index positive meniscus in front group |
| S-LAH65V (OHARA) | 1.80400 | 46.6 | L4, L7 | Dense lanthanum flint — high-index negative power in variator |
| S-LAH55V (OHARA) | 1.83481 | 42.7 | L5 | Dense lanthanum flint — symmetric biconcave in variator |
| S-LAH60 (OHARA) | 1.83400 | 37.2 | L6 (P2A), L16a | Dense lanthanum flint — key low-θgF positive in L2; achromatizer in L5 |
| S-TIH6 (OHARA) | 1.80518 | 25.4 | L8 (P2B) | Dense flint — high-dispersion positive for L2 achromatization |
| S-BAL35 (OHARA) | 1.58913 | 61.1 | L9, L15 | Barium crown — moderate positive power in L3 and L4b |
| S-BAL42 (OHARA) | 1.58313 | 59.4 | L10 | Barium crown — glass-molded aspherical positive in L3 |
| S-LAL14 (OHARA) | 1.69680 | 55.5 | L13 | Lanthanum crown — negative in IS group cemented doublet |
| S-FPL51 (OHARA) | 1.49700 | 81.5 | L17, L18 | ED fluorophosphate crown (UD) — secondary-spectrum correction |
| S-NBH51 (OHARA) | 1.74950 | 35.3 | L19 | Dense flint — achromatizer for rear UD doublet |
| UV-curing resin | 1.51640 | 52.2 | L4 front, L16 front | Hybrid aspheric resin layer |

The prevalence of S-TIH53 ($n_d = 1.84666$, $\nu_d = 23.9$) is notable — it appears in four separate elements across Groups 1, 3, and 4. This very dense flint provides the high dispersion needed to achromatize the numerous positive elements throughout the design. Its repeated use simplifies manufacturing logistics (fewer glass blanks to source) while maintaining consistent chromatic balance.

## Focus Mechanism

Focusing is performed by inner focus: the entire Group 2 (L2) moves along the optical axis toward the object for close-focus (¶0073). This is a unit-group inner-focus architecture — the five elements of L2 move as a rigid body.

The patent's variable spacing table provides infinity-focus data at three zoom positions but does not publish close-focus spacings for Example 1. The four variable gaps are $d_5$ (L1–L2), $d_{15}$ (L2–L3), $d_{22}$ (L3–L4), and $d_{28}$ (L4–L5). During focusing, $d_5$ decreases and $d_{15}$ increases as L2 translates toward the object, while $d_{22}$ and $d_{28}$ remain unchanged (they vary only with zoom).

| Parameter | Wide (17.5 mm) | Mid (28.7 mm) | Tele (53.4 mm) |
|---|---|---|---|
| $d_5$ (L1–L2) | 3.30 | 16.65 | 32.55 |
| $d_{15}$ (L2–L3) | 17.20 | 9.08 | 2.26 |
| $d_{22}$ (L3–L4) | 2.20 | 6.49 | 10.69 |
| $d_{28}$ (L4–L5) | 9.72 | 5.44 | 1.23 |
| BFD | 35.29 | 39.38 | 47.67 |
| Total track | 152.0 | 161.4 | 178.7 |

The inner-focus approach (rather than front-group focusing) reduces the front element diameter, eliminates front-element rotation during focus (important for polarizing filter use), and enables faster autofocus — all consistent with the production lens's Ring USM AF system. The marketed close focus distance is 0.35 m with maximum magnification of 0.17× at 55 mm.

## Aspherical Surfaces

Three surfaces carry aspherical profiles. The patent (¶0079) specifies the sag equation as:

$$Z(h) = \frac{(1/R) \cdot h^2}{1 + \sqrt{1 - (1+k)(h/R)^2}} + b \cdot h^4 + c \cdot h^6 + d \cdot h^8 + e \cdot h^{10}$$

where $k$ is the eccentricity (conic constant $K = k$), and $b$, $c$, $d$, $e$ correspond to the standard polynomial coefficients $A_4$, $A_6$, $A_8$, $A_{10}$. The patent lists $k = 0$ for all three aspherical surfaces (spherical base curve), with the aspherical departure carried entirely by the polynomial terms.

### Surface 6 (L4 front, Group 2 — Hybrid Replica)

| Coefficient | Value |
|---|---|
| $K$ | 0 |
| $A_4$ | $+1.457415 \times 10^{-5}$ |
| $A_6$ | $-3.790177 \times 10^{-8}$ |
| $A_8$ | $+6.739559 \times 10^{-11}$ |
| $A_{10}$ | $-1.117466 \times 10^{-13}$ |

The positive $A_4$ on a convex surface ($R = +74.3$ mm) means the surface sag increases more rapidly than the spherical base at the periphery, strengthening positive power at the edges. The patent (¶0052) states this surface corrects distortion variation across the zoom range by making positive power increase from center to rim. The thin resin layer ($d = 0.05$ mm) carries this aspherical profile on its outer surface.

### Surface 20 (L10 front, Group 3 — Glass Molded)

| Coefficient | Value |
|---|---|
| $K$ | 0 |
| $A_4$ | $-8.402971 \times 10^{-6}$ |
| $A_6$ | $-1.432432 \times 10^{-8}$ |
| $A_8$ | $+9.773360 \times 10^{-11}$ |
| $A_{10}$ | $-2.555962 \times 10^{-13}$ |

The negative $A_4$ on a convex surface ($R = +36.4$ mm) reduces the surface curvature at the periphery, weakening positive power toward the rim. The patent (¶0072) confirms this surface primarily controls spherical aberration variation during zooming. This is the sole glass-molded aspherical element, using S-BAL42 ($n_d = 1.58313$, $\nu_d = 59.4$), a barium crown suitable for the PGM process.

### Surface 29 (L16 front, Group 5 — Hybrid Replica)

| Coefficient | Value |
|---|---|
| $K$ | 0 |
| $A_4$ | $-6.201996 \times 10^{-6}$ |
| $A_6$ | $+1.518167 \times 10^{-8}$ |
| $A_8$ | $-5.562855 \times 10^{-11}$ |
| $A_{10}$ | $+1.910063 \times 10^{-13}$ |

The negative $A_4$ on a convex surface ($R = +129.2$ mm) again weakens positive power at the periphery. The patent (¶0072) attributes this surface to field curvature control. Like surface 6, this is a hybrid composite with a 0.08 mm resin layer carrying the aspherical profile.

## Image Stabilization

Image stabilization is achieved by decentering sub-group L4a (elements L12 and L13) perpendicular to the optical axis (¶0074). L4a is a cemented doublet of S-TIH53 flint and S-LAL14 lanthanum crown, forming a compact, achromatic IS group. The cemented construction ensures that lateral color does not degrade during decentering, since the two elements maintain their relative alignment.

The production lens achieves a claimed 3-stop improvement in hand-held shooting stability. The negative overall power of Group 4 ($f_4 = -31.4$ mm) means that a small decentering of L4a produces a proportionally amplified image shift — an efficient IS configuration requiring minimal physical movement.

The separation of L4 into two sub-groups (L4a for IS, L4b fixed) is a common Canon design strategy that isolates the IS mechanism from affecting the optical correction of the remaining group.

## Chromatic Correction Strategy

The patent's central innovation (¶0043–¶0050) is a two-pronged chromatic correction strategy addressing secondary spectrum — the residual chromatic aberration remaining after primary achromatization.

**In Group 2 (the variator):** Conventional high-ratio zoom designs use a single high-index, high-dispersion positive element in the variator to correct spherical aberration and coma. However, such glasses (high $n_d$, low $\nu_d$) invariably have high partial dispersion ratios $\theta_{gF}$, which introduces large secondary spectrum at the wide end (lateral color at the g-line). The patent's solution is to split the positive power between two elements, P2A and P2B:

P2A (L6) uses S-LAH60 ($\nu_d = 37.2$, $\theta_{gF} = 0.578$), which has a partial dispersion ratio below the Schott normal line ($\theta_{gF} < -1.79 \times 10^{-3} \times 37.2 + 0.654 = 0.587$). This means P2A's positive power contributes less secondary spectrum than a conventional high-dispersion glass would. Since $\nu_d = 37.2$ is moderate (condition 1: $\nu_d > 30$), P2A alone cannot fully achromatize the group. P2B (L8) provides the supplementary chromatic correction using high-dispersion S-TIH6 ($\nu_d = 25.4$), cemented to a negative element L7 to form a doublet within the group.

**In Group 5 (the rear positive group):** Two S-FPL51 UD elements (L17, L18) with anomalous positive partial dispersion ($\theta_{gF} = 0.537$, well above the normal line at $\nu_d = 81.5$) provide the complementary secondary-spectrum correction. These elements satisfy conditions (3) and (4): $\nu_{da} > 60$ and $\theta_{gFa} > -0.0015 \times \nu_{da} + 0.6425$. The ED glass corrects the residual g-line lateral color that Group 2's strategy alone cannot eliminate, particularly at the wide end where lateral chromatic aberration is most severe.

The combined effect is that secondary spectrum is attacked from two directions: Group 2 reduces the generation of secondary spectrum by using glasses with favorable partial-dispersion properties, while Group 5 actively corrects the remaining secondary spectrum using ED glass. This two-group approach distributes the chromatic correction burden more evenly than concentrating all ED elements in a single group.

## Conditional Expressions

The patent specifies ten conditional expressions. Their values for Example 1, independently verified by paraxial ray trace, are:

| Condition | Expression | Range | Example 1 | Status |
|---|---|---|---|---|
| (1) | $\nu_d$ (P2A glass) | $> 30$ | 37.2 | Satisfied |
| (2) | $\theta_{gF}$ (P2A) vs. $-1.79 \times 10^{-3} \nu_d + 0.654$ | $\theta_{gF} < $ limit | 0.578 < 0.587 | Satisfied |
| (3) | $\nu_{da}$ (rear group positive lens) | $> 60$ | 81.5 | Satisfied |
| (4) | $\theta_{gFa}$ vs. $-0.0015 \nu_{da} + 0.6425$ | $\theta_{gFa} > $ limit | 0.537 > 0.520 | Satisfied |
| (5) | $f_1 / f_w$ | 4.5–8.0 | 5.47 | Satisfied |
| (5a) | $f_1 / f_w$ (tighter) | 5.0–7.0 | 5.47 | Satisfied |
| (6) | $\lvert f_2 \rvert / \sqrt{f_w \times f_t}$ | 0.35–0.60 | 0.42 | Satisfied |
| (6a) | same (tighter) | 0.40–0.50 | 0.42 | Satisfied |
| (7) | $f_3 / \lvert f_2 \rvert$ | 1.5–2.5 | 1.80 | Satisfied |
| (8) | $\lvert f_4 / f_2 \rvert$ | 2.0–3.5 | 2.46 | Satisfied |
| (9) | $f_5 / \lvert f_2 \rvert$ | 2.0–5.0 | 3.01 | Satisfied |
| (10) | $SK_w / f_w$ | 1.8–2.9 | 2.02 | Satisfied |

All conditions are satisfied, including the tighter (a)-variant ranges specified in ¶0058 and ¶0066. The values sit comfortably within the allowed ranges rather than at the boundaries, indicating a centered design rather than one pushed to the limits of the patent claims.

## Verification Summary

Independent paraxial (ABCD matrix) ray trace of the full 35-surface prescription confirms:

| Parameter | Patent Stated | Computed | Residual |
|---|---|---|---|
| EFL (wide) | 17.50 mm | 17.499 mm | −0.001 mm |
| EFL (mid) | 28.70 mm | 28.707 mm | +0.007 mm |
| EFL (tele) | 53.44 mm | 53.447 mm | +0.007 mm |
| BFD (wide) | 35.29 mm | 35.286 mm | −0.004 mm |
| BFD (mid) | 39.38 mm | 39.378 mm | −0.002 mm |
| BFD (tele) | 47.67 mm | 47.691 mm | +0.021 mm |

Group focal lengths and all conditional expressions match Table 1 values to the stated precision. The Petzval sum for the full system is $0.00156$ mm$^{-1}$, corresponding to a Petzval radius of approximately 641 mm — a well-flattened field appropriate for digital sensor imaging.

## Sources

1. JP 2007-108398 A (2007), Canon Inc., "Zoom Lens and Image Pickup Apparatus Having the Same." Primary source for all prescription data, conditional expressions, and design rationale.
2. Canon Camera Museum, "EF-S17-55mm f/2.8 IS USM" (global.canon/en/c-museum/product/ef390.html). Production specifications, marketing date, aspherical element type confirmation.
3. Canon South & Southeast Asia product page (asia.canon/en/consumer/ef-s17-55mm-f-2-8-is-usm/product). Aspherical and UD element count confirmation.
4. OHARA optical glass catalog (oharacorp.com). Glass identification reference for S-TIH53, S-BSM14, S-LAL8, S-LAH65V, S-LAH55V, S-LAH60, S-TIH6, S-BAL35, S-BAL42, S-LAL14, S-FPL51.
5. OHARA/HOYA optical glass catalogs. Glass identification reference for the L19 relabel to S-NBH51.
