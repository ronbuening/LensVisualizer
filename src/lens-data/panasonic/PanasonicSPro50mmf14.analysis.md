# Panasonic LUMIX S PRO 50mm f/1.4 — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** WO 2020/158622 A1 (JP), "撮像光学系と、撮像光学系を用いる撮像装置およびカメラシステム" (Imaging optical system, imaging apparatus using imaging optical system, and camera system).
**Applicant:** Panasonic Intellectual Property Management Co., Ltd.
**Inventors:** Yoshinaga Shunichiro (吉永 俊一郎), Suzuki Yasuhito (鈴木 靖人).
**Filed:** 2020-01-24 (international), priority 2019-01-28.
**Published:** 2020-08-06.
**Embodiment analyzed:** Numerical Example 3 (数値実施例3), corresponding to Embodiment 3 (実施の形態3, ¶0058–0078).

The identification of Example 3 as the production prescription rests on the following convergent evidence:

1. **Element and group count:** 13 elements in 11 groups — matches Panasonic's published specification exactly.
2. **Aspherical element count:** 2 aspherical elements (L4 with both surfaces aspherical, L13 with both surfaces aspherical) — matches the published "2 aspherical lenses."
3. **ED element count:** 3 elements with anomalous positive partial dispersion (L5, L6, L12) — matches the published "3 ED lenses."
4. **Focal length:** Patent EFL = 49.00 mm at infinity — consistent with the marketed 50 mm nominal value.
5. **F-number:** Patent F/1.47 — consistent with the marketed F/1.4.
6. **Minimum focus distance:** Patent object distance at maximum magnification yields MFD ≈ 439.5 mm from the image plane — matches the published 0.44 m.
7. **Maximum magnification:** Patent states −0.15× at close focus — matches the published 0.15×.
8. **Diagonal angle of view:** Paraxial half-field $\theta = \arctan(21.63/49.0) \approx 23.8°$, yielding a full diagonal of approximately 47.6° — consistent with the published 47°.
9. **Focus mechanism:** Dual-group inner focus with opposing-motion single elements (L9 moves toward the image, L10 moves toward the object) — consistent with the published "double focus system" using a linear motor and stepping motor.
10. **Patent timing:** Priority date January 2019 follows the lens announcement (September 2018) and coincides with the start of commercial availability — a typical sequence for Japanese optical patents filed during or shortly after product launch.

Examples 1 and 4 are eliminated because they have 11 and 12 elements respectively, not 13. Example 2 shares the same 13-element/11-group structure and 2+3 special element count, but Example 3 differs in the placement of its aspherical surfaces — L4 is biconvex in Example 3 versus L3 (negative meniscus) in Example 2 — and provides a closer match to the published MTF behavior and the lens cross-section proportions visible in Panasonic's product documentation.

---

## Optical Architecture

The LUMIX S PRO 50mm f/1.4 is a high-speed normal prime following a modified Gauss-derivative architecture with an extended front collector and a post-stop corrector section. The lens comprises four functional groups arranged object-to-image as:

**G1 (positive front group, 8 elements in 7 groups):** The primary refracting assembly. It contains all the axial power needed to converge the wide f/1.4 entrance beam, with internal chromatic correction via two ED elements and a cemented flint doublet. A single aspherical element (L4) controls high-order spherical aberration. G1 is fixed during focusing.

**G2 (negative, single element L9 — focus group Fn):** A small-diameter negative meniscus positioned immediately behind the aperture stop, in the zone of minimum beam diameter. During focusing from infinity to close, L9 translates 6.10 mm toward the image. Its negative power increases the divergence of the post-stop beam, shifting the focal point. This is the primary focus-sensitivity element, driven by the linear motor.

**G3 (positive, single element L10 — focus group Fp):** A high-index biconvex element adjacent to G2 on the image side. During focusing, L10 translates 1.28 mm toward the object — counter to L9's motion. Its role is to compensate the field curvature introduced by L9's motion, maintaining flat-field performance across the focus range. This element is driven by the stepping motor.

**G4 (negative rear group, 3 elements in 2 groups):** A fixed corrector section containing a cemented doublet (L11+L12) and an aspherical negative meniscus (L13). G4 provides field flattening, lateral color correction, and distortion control. The rearmost element L13 (both surfaces aspherical) is the primary off-axis aberration corrector. G4 is fixed during focusing.

The overall power distribution is positive–negative–positive–negative, a telephoto-like arrangement that contributes to the relatively compact 130 mm barrel length (total optical track 148.0 mm) despite the fast aperture. The system Petzval sum is $+0.00125\ \text{mm}^{-1}$, corresponding to a Petzval radius of approximately −798 mm — well-corrected for a lens of this speed.

---

## Element-by-Element Analysis

### L1 — Positive Meniscus, convex to object

$n_d = 1.92286$, $\nu_d = 20.9$, $\Delta P_{gF} = +0.0282$. Glass: S-NPH2 (OHARA) — ultra-high-index short flint. $f = +82.0\ \text{mm}$.

L1 serves as the front positive collector. Its high refractive index (the second-highest in the system) provides strong surface curvature reduction: the front radius of 66.06 mm delivers substantial convergence without excessive ray bending at either surface, limiting the spherical aberration introduced by the first element. The choice of S-NPH2 — an anomalous-dispersion short flint with very low Abbe number (20.9) — is unusual for a positive front element. In most standard designs, a positive collector would use a crown glass to minimize chromatic contribution. Here, the designer deliberately accepts axial color from L1, relying on the downstream ED elements (L5, L6) and the L6+L7 cemented doublet to compensate. The benefit is access to the extreme refractive index ($n_d = 1.923$), which is essential for keeping the front element diameter manageable at f/1.4. S-NPH2's positive $\Delta P_{gF}$ (+0.0282) means its partial-dispersion curve deviates from the normal line, which reduces L1's own contribution to secondary spectrum relative to what a normal-dispersion glass of equal $\nu_d$ would produce.

### L2 — Biconcave Negative

$n_d = 1.51680$, $\nu_d = 64.2$. Glass: S-BSL7 (OHARA), equivalent to N-BK7 (Schott). $f = -47.1\ \text{mm}$.

L2 is a strongly negative biconcave element in common borosilicate crown glass. Positioned immediately behind L1, it forms a loose air-spaced power pair with L1. Because L1 uses a high-dispersion glass (S-NPH2, $\nu_d = 20.9$) in a positive element — the reverse of the classical crown-positive/flint-negative achromatic convention — the L1+L2 pair is chromatically under-corrected: L2's low-dispersion negative power compensates only about 57% of L1's chromatic contribution. The residual is deliberately left for the downstream L6+L7 cemented doublet to over-correct and balance. L2's strong negative power ($f = -47.1\ \text{mm}$) introduces the deliberate beam divergence that creates the deeply concave wavefront entering the mid-section of G1 — a signature of the "intentionally narrow beam zone" design philosophy described in ¶0014. The large air gap after L2 ($d_4 = 16.1\ \text{mm}$) allows the diverging beam to expand before entering L3, creating separation between the axial and off-axis ray bundles that the subsequent aspherical surface (L4) exploits for zonal correction.

### L3 — Biconcave Negative

$n_d = 1.58144$, $\nu_d = 40.9$. Glass: 581/409 code — light flint class. No exact match in OHARA's catalog; the glass type may be sourced from Hoya, Sumita, or another vendor. $f = -59.9\ \text{mm}$.

L3 continues the beam divergence initiated by L2. Its negative power is weaker than L2's, acting as a corrector plate that fine-tunes the wavefront curvature before L4. The biconcave shape distributes the refraction across two surfaces with moderate curvatures (R5 = −42.32, R6 = +200.32), reducing higher-order aberration contributions from either surface individually. This element's glass is a moderate-index flint in the 581/409 family. Its intermediate dispersion ($\nu_d = 40.9$) places it between the high-dispersion short flints (L1, L7) and the low-dispersion ED crowns (L5, L6), providing a smooth chromatic transition through the front group.

### L4 — Biconvex Positive (both surfaces aspherical)

$n_d = 1.80755$, $\nu_d = 40.9$. Glass: 808409 / MC-NBFD135 code match — LAH-type lanthanum glass, likely PGM-moldable. The local catalog now resolves this code through a coefficient-backed public row, while the data label keeps the patent code visible for traceability. $f = +72.5\ \text{mm}$.

L4 is one of the two aspherical elements in the design and the only aspherical element in the front group. Both surfaces carry aspherical profiles. The glass code 808409 places it in the LAH (lanthanum, high-index) family, and the MC-NBFD135 code match supports a moldable low-Tg formulation. Given that both surfaces are aspherical, L4 is almost certainly manufactured by precision glass molding (PGM), requiring a low-Tg glass formulation in this index/dispersion range.

The aspherical profiles are mild — the fourth-order coefficients are small ($A_4 \approx 4.0 \times 10^{-7}$ on S7, $A_4 \approx 3.9 \times 10^{-6}$ on S8) — reflecting the element's role as a zonal spherical aberration corrector rather than a gross wavefront reshaper. The patent's conditional expression (5) governs this element: $|f_{LG1a}/f_{G1}| = |72.46/43.57| = 1.663$, within the preferred range 0.6–6.0 (¶0122). A value near the lower bound would mean L4's power is too strong relative to G1 and the spherical component would overwhelm the aspherical correction; a value near the upper bound would mean L4 is too weak to contribute meaningfully to optical track compactness. At 1.66, the balance is toward moderate power with effective aspherical correction of 3rd- and 5th-order spherical aberration.

Physically, L4 sits at the point where the beam transitions from diverging (after L2–L3) to converging (entering L5–L8). This is an ideal location for aspherical correction: the axial and zonal ray heights are well-separated, allowing the aspherical departure to selectively correct higher-order zones without disturbing the paraxial correction established by the spherical surfaces upstream.

### L5 — Biconvex Positive (ED)

$n_d = 1.59282$, $\nu_d = 68.6$, $\Delta P_{gF} = +0.0194$. Glass: FCD515 (Hoya) — ED fluorophosphate crown. Hoya's catalog lists FCD515 at $n_d = 1.59282$, $\nu_d = 68.63$, $\Delta P_{gF} = 0.0194$ — an exact match on all three parameters. The closest OHARA equivalent is S-FPM2 ($n_d = 1.59522$, $\nu_d = 67.73$; $\Delta n_d = 0.0024$), which does not match. $f = +56.2\ \text{mm}$.

L5 is the first of the three ED (extra-low dispersion) elements. Its positive anomalous partial dispersion ($\Delta P_{gF} = +0.0194$, satisfying condition (6) at ¶0127: $\Delta P_{gF} > 0.015$) enables secondary-spectrum correction by providing a dispersion curve that deviates from the Schott normal line. In combination with the high-dispersion flints in G1 (L1, L7), L5's anomalous dispersion allows simultaneous correction of primary axial color (C–F) and reduction of secondary spectrum (deviation at the g-line). L5 carries substantial positive power ($f = +56.2\ \text{mm}$), making it a major contributor to G1's total convergence. Its biconvex shape distributes the positive power across two moderately curved surfaces (R9 = +82.0, R10 = −53.4), minimizing coma contributions.

### L6 — Biconvex Positive (ED), cemented with L7

$n_d = 1.59282$, $\nu_d = 68.6$, $\Delta P_{gF} = +0.0194$. Glass: FCD515 (Hoya) — same ED fluorophosphate crown as L5. $f = +61.4\ \text{mm}$.

L6 is the second ED element and the positive component of the L6+L7 cemented doublet. It uses the same glass as L5, providing identical anomalous dispersion characteristics. The cemented doublet (L6+L7) is the chromatic engine of the front group: L6's low-dispersion crown paired with L7's high-dispersion dense flint (S-NBH56, $\nu_d = 24.8$) provides strong achromatization concentrated near the zone of maximum marginal ray height. The doublet's combined focal length is $f = -50.4\ \text{mm}$ — net negative — meaning the cemented pair acts as a diverging corrector that partially counterbalances the strong convergence of L5 and L8. This push-pull arrangement (L5 converges, L6+L7 diverges, L8 converges again) is characteristic of well-corrected high-speed Gauss derivatives, distributing the total system power across multiple surfaces to reduce aberration loading on any single element.

### L7 — Biconcave Negative, cemented with L6

$n_d = 1.85478$, $\nu_d = 24.8$. Glass: S-NBH56 (OHARA) — high-index dense barium short flint. $f = -26.8\ \text{mm}$.

L7 is the strongest negative element in the design ($f = -26.8\ \text{mm}$). Its high refractive index and high dispersion make it the primary achromatizing partner for L6. The cemented interface (R12 = −52.05) carries the largest glass-to-glass refractive index step in the system ($\Delta n = 1.85478 - 1.59282 = 0.262$). While this step is modest compared to glass–air interfaces, its chromatic significance is outsized: at a cemented surface, the full index difference operates without a reflection loss, and the large $\Delta \nu_d$ between L6 and L7 ($68.6 - 24.8 = 43.8$) makes this the most chromatically active surface in the design. The combination of L6+L7 corrects both axial and lateral chromatic aberration in the high-aperture zone of G1 while maintaining spherical-coma balance through careful radius selection at the cemented interface.

### L8 — Biconvex Positive (LG1R)

$n_d = 1.80420$, $\nu_d = 46.5$. Glass: S-LAH65VS (OHARA) — high-index LAH-type lanthanum glass. $f = +38.2\ \text{mm}$.

L8 is the final element of G1 and is designated LG1R in the patent's nomenclature — the rearmost element of the front group, responsible for converging the beam tightly before it enters the aperture stop. L8 carries the strongest positive power in G1 ($f = +38.2\ \text{mm}$), and its location immediately before the stop means it operates on the tallest marginal ray in the convergent section. The patent's primary conditional expression (1) governs the relationship between L8 and G1: $f_{LG1R}/f_{G1} = 38.17/43.57 = 0.876$, which lies in the preferred range 0.79–1.0 (¶0103–0104). This tight ratio indicates that L8 contributes a large fraction of G1's total convergence — the "light-concentrating effect" referenced in ¶0101 — which is essential for reducing the beam diameter at the stop and enabling the small-diameter focus elements (L9, L10) that follow.

The choice of S-LAH65VS ($n_d = 1.804$, $\nu_d = 46.5$) balances high refractive index (for surface curvature reduction) against moderate dispersion (to avoid reintroducing chromatic aberration after the L6+L7 doublet's correction). S-LAH65VS is a lanthanum-series glass with an Abbe number near the traditional crown–flint boundary, whose dispersion curve lies close to the Schott normal line.

### Aperture Stop

The aperture stop is positioned between G1 and G2, at the waist of the beam. The production lens uses 11 diaphragm blades forming a circular aperture (per Panasonic's published specification; the patent does not specify blade count). The maximum aperture corresponds to F/1.47 at infinity focus. The stop is fixed during focusing.

### L9 — Negative Meniscus, convex to object (Focus Element Fn)

$n_d = 1.71736$, $\nu_d = 29.5$. Glass: 717295 code, now backed by the existing SF1 / S-TIH1 catalog code path. $f = -76.0\ \text{mm}$.

**Note on aspherical surfaces:** In Example 3, L9's surfaces (S17, S18) are *not* aspherical — the patent's aspherical data table (Table 3B) lists only surfaces 7, 8, 24, and 25 as aspherical. This differs from Example 1, where L9 (the Fn element) does carry aspherical surfaces. L9 in Example 3 is all-spherical.

L9 is the first of the two focus elements and constitutes G2 on its own. It is designated Fn — the negative-power focus element — in the patent's notation. The patent's design philosophy (¶0014) explains the rationale: by placing the focus group in the beam waist behind the stop, where the clear aperture is naturally small, the focus element can be physically tiny and lightweight even though the system aperture is f/1.4. L9 is a meniscus with radii R17 = +64.14, R18 = +29.20 (both positive, meaning the element is convex to the object and strongly concave to the image), giving it negative power. During focusing from infinity to close, L9 moves 6.10 mm toward the image, increasing the air space d16 from 1.50 mm to 7.60 mm and decreasing d18 from 19.69 mm to 12.31 mm.

The conditional expression (4) governs L9: $f_{Fn}/f_w = -76.0/49.0 = -1.551$, within the preferred range −1.7 to −1.3 (¶0121). If L9 were stronger (ratio closer to −0.5), focus sensitivity would be high but field curvature variation during focusing would be excessive. If weaker (ratio beyond −2.0), focus travel would become impractically long. At −1.55, L9 provides moderate focus sensitivity with manageable aberration variation.

The 717295 glass is a dense flint type with moderate refractive index and low Abbe number, suitable for a meniscus focus element where chromatic contribution should be minimized (the thin, weakly powered element contributes little chromatic aberration regardless of glass choice, so the designer had latitude to optimize for other properties — presumably thermal stability and moldability/machinability for the focus element assembly). The catalog match is code-backed; it does not assert the production supplier.

### L10 — Biconvex Positive (Focus Element Fp)

$n_d = 1.94595$, $\nu_d = 18.0$, $\Delta P_{gF} = +0.0386$. Glass: FDS18 (HOYA) — ultra-high-index, ultra-high-dispersion short flint. $f = +52.0\ \text{mm}$.

L10 is the second focus element, designated Fp in the patent. It constitutes G3 and moves 1.28 mm toward the object during focusing — counter-directionally to L9. The patent explains (¶0105) that Fp's motion compensates the field curvature introduced by Fn's movement, preserving flat-field performance from infinity to close focus.

L10 uses FDS18, the highest-index glass in the system ($n_d = 1.946$) and also the most dispersive ($\nu_d = 18.0$). Its anomalous partial dispersion is the largest in the system ($\Delta P_{gF} = +0.0386$). Despite being a positive element with extremely high dispersion — which would normally introduce severe axial color — L10 operates at very small ray heights (it sits in the narrow beam zone just behind the stop) and its center thickness is only 5.1 mm, limiting its total chromatic contribution. The patent's condition (8) notes that having a positive element with $\nu_d < 35$ behind the stop aids lateral color correction (¶0136); at $\nu_d = 18.0$, L10 strongly satisfies this condition.

The choice of ultra-high-index glass for a biconvex focus element also minimizes surface curvatures (R19 = +147.4, R20 = −72.7 — relatively gentle for a 52 mm focal length), which reduces the sensitivity of spherical aberration to focus position. This is critical because L10 moves during focusing and any change in its aberration contribution would degrade image quality at intermediate distances.

### L11 — Biconcave Negative, cemented with L12

$n_d = 1.56732$, $\nu_d = 42.8$. Glass: S-TIL26 (OHARA) — light flint. $f = -62.1\ \text{mm}$.

L11 is the negative component of the L11+L12 cemented doublet in the rear group G4. This doublet provides chromatic correction for the rear section of the lens, compensating the residual lateral color that the focus elements and the post-stop geometry introduce. S-TIL26 is a moderate-index light flint, serving as the dispersive partner in the doublet. Its biconcave shape (R21 = −154.2, R22 = +45.8) creates a strongly diverging surface on the image side that counteracts the convergence of L10 and prevents over-correction of field curvature.

### L12 — Biconvex Positive (ED), cemented with L11

$n_d = 1.55032$, $\nu_d = 75.5$, $\Delta P_{gF} = +0.0277$. Glass: FCD705 (HOYA) — fluorophosphate crown, exact catalog match. $f = +47.0\ \text{mm}$.

L12 is the third and final ED element in the design, and the only one in the rear group. FCD705 has the highest Abbe number in the system ($\nu_d = 75.5$), making it the lowest-dispersion glass used. Its anomalous partial dispersion ($\Delta P_{gF} = +0.0277$) contributes to secondary-spectrum correction in the image-side section of the lens — particularly important for controlling lateral chromatic aberration at the field edges, which is difficult to correct from the front group alone.

The cemented doublet L11+L12 has a combined focal length of $f = +162.0\ \text{mm}$, meaning it is weakly positive. Its primary role is chromatic rather than power-related: the high-dispersion/low-dispersion interface (R22, where $\Delta n = 1.55032 - 1.56732 = -0.017$) provides a color-dependent refraction that fine-tunes both axial and lateral color across the image field.

### L13 — Negative Meniscus, convex to image (both surfaces aspherical)

$n_d = 1.68822$, $\nu_d = 31.1$. Glass: L-TIM28(P) class (OHARA) — precision-glass-moldable (PGM) titanium flint. Closest catalog match: L-TIM28 ($n_d = 1.68893$, $\nu_d = 31.16$; $\Delta n_d = 0.0007$). $f = -52.3\ \text{mm}$.

L13 is the rearmost optical element and the second aspherical element in the design. Both surfaces carry aspherical profiles with significantly stronger coefficients than L4: $A_4 = 1.33 \times 10^{-5}$ on S24 and $A_4 = 3.61 \times 10^{-6}$ on S25. The element is designated LGnR — the rearmost element of the rear group — and has negative power, as required by the patent's general construction (¶0027). Its meniscus shape (R24 = −30.73, R25 = −215.59, both negative) presents both surfaces concave to the object — R24 deeply so and R25 nearly flat — making it a meniscus convex to the image side. The deep object-side concavity on S24 provides the primary field-flattening curvature.

**Note:** The patent text (¶0076) describes L13 as "物体側に凸面を有するメニスカスレンズ" (meniscus having convex surface on the *object* side), but the numerical data (both R negative) shows it is convex to the *image* side. The equivalent element in Example 1 (L11, identical radii pattern R21 = −35.11, R22 = −214.70) is correctly described in ¶0036 as "像側に凸面を有するメニスカスレンズ" (convex to image side). The Embodiment 3 text appears to contain a typographical error.

The aspherical profiles on L13 correct the off-axis aberrations that accumulate through the entire system — primarily astigmatism, field curvature, and distortion. Because L13 is close to the image plane and far from the stop, the chief ray height is large relative to the marginal ray height, giving the aspherical surfaces strong leverage over field-dependent aberrations with minimal impact on axial correction. The fourth-order coefficient on S24 ($A_4 = +1.33 \times 10^{-5}$) is positive, indicating that the surface becomes less steeply curved toward the periphery — flattening the outer field zones and reducing the inward-curving Petzval contribution of the negative element.

Given that both surfaces are aspherical, L13 is almost certainly manufactured by precision glass molding. The glass properties ($n_d = 1.688$, $\nu_d = 31.1$) are consistent with OHARA's L-TIM28(P) moldable titanium flint ($n_d = 1.68893$, $\nu_d = 31.16$; $\Delta n_d = 0.0007$), which is the standard fabrication method for rear-group aspherical correctors in modern mirrorless lens designs. Glass molding enables complex aspherical profiles on both surfaces simultaneously in a single manufacturing step.

---

## Glass Identification and Selection

| Element | $n_d$ | $\nu_d$ | $\Delta P_{gF}$ | Glass / Code | Vendor | Role |
|---------|-------|---------|-----------------|--------------|--------|------|
| L1 | 1.92286 | 20.9 | +0.028 | S-NPH2 | OHARA | Ultra-high-index short flint; front collector |
| L2 | 1.51680 | 64.2 | — | S-BSL7 | OHARA | Borosilicate crown; achromatic partner to L1 |
| L3 | 1.58144 | 40.9 | — | 581/409 | Uncertain | Light flint; beam divergence corrector |
| L4 | 1.80755 | 40.9 | — | 808409 / MC-NBFD135 code match | Code-backed (PGM) | Moldable La glass; aspherical SA corrector |
| L5 | 1.59282 | 68.6 | +0.019 | FCD515 (ED) | Hoya | ED fluorophosphate crown; SA correction |
| L6 | 1.59282 | 68.6 | +0.019 | FCD515 (ED) | Hoya | ED crown; achromatic in L6+L7 doublet |
| L7 | 1.85478 | 24.8 | — | S-NBH56 | OHARA | Dense Ba short flint; chromatic corrector |
| L8 | 1.80420 | 46.5 | — | S-LAH65VS | OHARA | LAH-type La glass; beam concentrator (LG1R) |
| L9 | 1.71736 | 29.5 | — | 717295 / SF1-S-TIH1 code path | Code-backed | Focus element Fn |
| L10 | 1.94595 | 18.0 | +0.039 | FDS18 | HOYA | Ultra-high-index short flint; focus Fp |
| L11 | 1.56732 | 42.8 | — | S-TIL26 | OHARA | Light flint; rear doublet negative component |
| L12 | 1.55032 | 75.5 | +0.028 | FCD705 | HOYA | ED fluorophosphate crown; rear chromatic corrector |
| L13 | 1.68822 | 31.1 | — | L-TIM28(P) class | OHARA (PGM) | Moldable Ti-flint; aspherical field corrector |

L5/L6 glass: the patent values ($n_d = 1.59282$, $\nu_d = 68.6$, $\Delta P_{gF} = 0.0194$) match Hoya FCD515 exactly on all three parameters ($n_d = 1.59282$, $\nu_d = 68.63$, $\Delta P_{gF} = 0.0194$). No OHARA catalog glass matches these values (closest is S-FPM2 with $\Delta n_d = 0.0024$, $\Delta\nu_d = 0.87$). Hoya sourcing for ED elements in a Panasonic design with Leica collaboration is plausible — Hoya is a major Japanese optical glass supplier with an established ED fluorophosphate line.

**Chromatic correction strategy.** The design uses a distributed chromatic architecture. In the front group, the L6+L7 cemented doublet is the primary achromatizing element, pairing ED crown (Hoya FCD515) with dense flint (S-NBH56). The cemented doublet is deliberately over-corrected chromatically to compensate the substantial positive chromatic residual introduced by L1 (S-NPH2, $\nu_d = 20.9$ — an ultra-high-dispersion glass used in a positive element). The L1+L2 air-spaced pair is *not* an achromatic doublet; L2 (S-BSL7) only partially cancels L1's color, leaving a designed residual for downstream correction. In the rear group, the L11+L12 cemented doublet provides lateral color correction using S-TIL26 and the third ED element (FCD705). The three ED elements (L5, L6, L12) all have positive $\Delta P_{gF}$ exceeding 0.015, satisfying the patent's condition (6) for secondary-spectrum correction. The design does not achieve full APO correction — the front group's anomalous-dispersion strategy reduces secondary spectrum but does not eliminate it — which is typical for fast f/1.4 primes where aperture-dependent aberrations take priority over chromatic perfection.

---

## Focus Mechanism

The lens uses a dual inner-focus system with two independently moving single elements (¶0037, ¶0077):

| Parameter | Infinity | Close (−0.15×) | Δ |
|-----------|----------|----------------|---|
| d16 (stop → L9 front) | 1.500 mm | 7.596 mm | +6.096 mm |
| d18 (L9 rear → L10 front) | 19.687 mm | 12.315 mm | −7.372 mm |
| d20 (L10 rear → L11 front) | 2.000 mm | 3.278 mm | +1.278 mm |
| Total variable gap | 23.187 mm | 23.189 mm | +0.002 mm (≈ 0) |

**L9 (Fn)** translates 6.10 mm toward the image side, driven by the linear motor (high-speed actuator, 480 fps sensor drive). This is the primary focus-sensitivity element. Its negative power in the converging post-stop beam provides efficient focus-distance control: a small physical translation produces a large shift in the image conjugate position.

**L10 (Fp)** translates 1.28 mm toward the object side, driven by the stepping motor. Its counter-directional motion compensates the field curvature that L9's movement introduces. The patent explains (¶0105) that without Fp, single-element focusing with Fn alone would produce unacceptable field curvature variation — especially problematic at close focus where the magnification is significant (−0.15×). By independently controlling two focus elements, the system maintains flat-field performance from infinity to close focus while enabling very fast autofocus (only two lightweight single elements move, not multi-element groups).

The total variable-gap sum is conserved to within 0.002 mm, confirming that G1 and G4 are mechanically fixed. The minimum object distance from the image plane is approximately 440 mm (0.44 m), matching Panasonic's published specification.

At close focus, the system focal length shortens from 49.0 mm to 45.2 mm — a 7.7% reduction characteristic of inner-focus designs where the focus group shifts the effective power distribution. This also produces a modest increase in F-number from 1.47 to 1.56, and a narrowing of the half-field angle from 25.7° to 23.4°.

---

## Aspherical Surfaces

The design contains two aspherical elements with a total of four aspherical surfaces. The patent uses the standard conic + even-polynomial sag equation (¶0159–0160):

$$Z(h) = \frac{h^2/r}{1 + \sqrt{1 - (1+\kappa)(h/r)^2}} + \sum A_n h^n$$

where $\kappa$ is the conic constant (labeled $K$ in the data file convention, related by $K_{\text{standard}} = \kappa$; the patent confirms $\kappa = 0$ for all surfaces, meaning spherical base curves) and $A_n$ are the even-order polynomial coefficients. All four surfaces have $\kappa = 0$, so the aspherical departure is entirely in the polynomial terms.

### Surface 7 (L4 front)

| Coefficient | Value |
|-------------|-------|
| $\kappa$ | 0 |
| $A_4$ | $+4.04714 \times 10^{-7}$ |
| $A_6$ | $+2.58016 \times 10^{-9}$ |
| $A_8$ | $+4.51006 \times 10^{-12}$ |
| $A_{10}$ | $-1.10997 \times 10^{-14}$ |

This is a very mild aspherical surface — the $A_4$ coefficient is three orders of magnitude smaller than on L13's surfaces. The positive $A_4$ on a surface with large positive $R$ (+249.4 mm) means the surface sags slightly more than a sphere at the periphery, modifying the wavefront shape at higher zonal heights. This provides a degree of freedom for balancing the higher-order spherical aberration contributions of the strongly curved spherical surfaces downstream (L5–L8).

### Surface 8 (L4 rear)

| Coefficient | Value |
|-------------|-------|
| $\kappa$ | 0 |
| $A_4$ | $+3.87260 \times 10^{-6}$ |
| $A_6$ | $+1.87609 \times 10^{-9}$ |
| $A_8$ | $+7.45815 \times 10^{-12}$ |
| $A_{10}$ | $-1.12514 \times 10^{-14}$ |

The rear surface of L4 has $A_4$ roughly ten times larger than the front surface, making it the more optically active of the two aspherical profiles on L4. The positive $A_4$ on a surface with negative $R$ (−75.2 mm) steepens the effective curvature at the rim relative to a sphere. The combined effect of surfaces 7 and 8 is to introduce a controlled higher-order correction to the spherical aberration — specifically targeting the 5th- and 7th-order residuals that the spherical surfaces in L5–L8 cannot address.

### Surface 24 (L13 front)

| Coefficient | Value |
|-------------|-------|
| $\kappa$ | 0 |
| $A_4$ | $+1.32764 \times 10^{-5}$ |
| $A_6$ | $+9.38299 \times 10^{-9}$ |
| $A_8$ | $-5.00850 \times 10^{-11}$ |
| $A_{10}$ | $+7.82519 \times 10^{-14}$ |

This is the strongest aspherical surface in the design, with $A_4$ roughly 30× larger than L4's front surface. The positive $A_4$ on a strongly concave surface ($R = -30.73\ \text{mm}$) reduces the surface's effective curvature toward the rim, flattening the outer zones. This is the primary field-curvature and astigmatism corrector. The sign reversal at $A_8$ (negative) creates a subtle inflection in the aspherical profile at intermediate heights, providing an additional degree of freedom for balancing sagittal and tangential focus positions across the image field.

### Surface 25 (L13 rear)

| Coefficient | Value |
|-------------|-------|
| $\kappa$ | 0 |
| $A_4$ | $+3.61044 \times 10^{-6}$ |
| $A_6$ | $+5.93299 \times 10^{-9}$ |
| $A_8$ | $-4.07704 \times 10^{-11}$ |
| $A_{10}$ | $+5.45033 \times 10^{-14}$ |

The rear surface of L13 ($R = -215.6\ \text{mm}$, nearly flat) carries a complementary aspherical profile to S24. The weaker $A_4$ coefficient and similar sign pattern ($+/+/-/+$) indicate that this surface provides fine-tuning of the distortion and astigmatism correction established by S24. Because S25 faces the image plane across a long air gap ($d_{25} = 13.42\ \text{mm}$ to the cover glass), its aspherical profile has significant leverage over the ray angles entering the sensor — making it effective for controlling telecentricity and chief-ray incidence angle at the image periphery, which is critical for uniform sensor illumination in mirrorless cameras.

**Manufacturing summary.** L4 (808409 LAH-type lanthanum glass, PGM-grade) and L13 (L-TIM28(P) class, PGM-grade) are both precision-glass-molded aspherical elements. PGM fabrication is the standard method for volume production of aspherical lens elements in interchangeable camera lenses, offering high surface accuracy (sub-wavelength form error) at lower cost per unit than polished glass aspherics. Both elements use glass compositions in regions of the $n_d$–$\nu_d$ diagram where low-Tg moldable variants are commonly offered.

---

## Conditional Expressions

The patent defines eight conditional expressions governing the design. Example 3's values (verified by independent paraxial computation) and their satisfaction status are:

| Condition | Expression | Patent Value | Computed Value | Range | Satisfied? |
|-----------|-----------|-------------|----------------|-------|------------|
| (1) | $f_{LG1R}/f_{G1}$ | 0.876 | 0.876 | 0.38–1.75 | Yes |
| (2) | $L_{sff}/f_w$ | 0.565 | — | 0.02–1.1 | Yes |
| (3) | $L_{g1rnf}/f_w$ | 0.051 | — | 0.029–0.1 | Yes |
| (4) | $f_{Fn}/f_w$ | −1.551 | −1.551 | −2.0 to −0.5 | Yes |
| (5) | $|f_{LG1a}/f_{G1}|$ | 1.663 | 1.663 | 0.6–6.0 | Yes |
| (6) | $\Delta P_{gF}$ (L5) | 0.019 | — | > 0.015 | Yes |
| (6) | $\Delta P_{gF}$ (L6) | 0.019 | — | > 0.015 | Yes |
| (7) | $F_{no}/f_w \times L$ | 4.441 | 4.441 | 2.7–6.0 | Yes |
| (8) | $\nu_d$ (Lp = L10) | 18.0 | — | < 35 | Yes |

All conditions are satisfied, and conditions (1), (4), and (5) fall within the more restrictive "preferred" sub-ranges defined in ¶0103–0126.

---

## Verification Summary

The following quantities were independently verified via Python paraxial ray trace (y-nu method) against the patent's published values:

| Quantity | Computed | Patent | Δ |
|----------|---------|--------|---|
| System EFL | 49.001 mm | 49.000 mm | +0.001 |
| BFD (from S25, air-equivalent) | 15.809 mm | 15.809 mm | < 0.001 |
| Total optical track | 148.004 mm | 148.004 mm | 0.000 |
| G1 focal length | 43.57 mm | — | — |
| G2 (L9) focal length | −76.00 mm | −76.00 mm | 0.000 |
| G3 (L10) focal length | 52.04 mm | 52.04 mm | 0.000 |
| G4 focal length | −78.62 mm | — | — |
| Petzval sum | +0.00125 mm⁻¹ | — | — |
| Variable-gap conservation | 0.002 mm | ≈ 0 | OK |

All 13 individual element focal lengths were verified to within ±0.0004 mm of the patent's Table 3D values, confirming the prescription transcription is error-free.

**Back focal distance.** The patent includes a cover glass (surfaces 26–27: 2.10 mm flat plate, $n_d = 1.51680$) and a back focus distance of 1.004 mm to the image plane. The data file excludes the cover glass per project convention and folds the physical path into an air-equivalent BFD on the last surface: $13.42 + 2.10/1.5168 + 1.004 = 15.809\ \text{mm}$.

**Semi-diameter estimation.** The patent does not provide semi-diameters. SDs were estimated by combined marginal ray trace (at the F/1.47 design aperture) and chief ray trace (at 60% of the full half-field angle), with 8% mechanical clearance added. Front element SDs were capped by the 77 mm filter thread constraint ($\text{SD}_{\max} \approx 35\ \text{mm}$). Surface 4 (L2 rear, $R = 24.46\ \text{mm}$) required special treatment: the sd/|R| < 0.90 constraint limits its SD to 19.0 mm, producing natural off-axis vignetting at this surface. Cross-gap sag intrusion at the L2–L3 gap (the largest air gap in G1 at 16.1 mm) was verified at 84% of the gap, within the 90% rendering limit. All other constraints — edge thickness, element SD ratio (≤ 3.0), and slope-based rim angle — were satisfied across all surfaces. The L2 front/rear SD ratio (27.0/19.0 = 1.42) is elevated but physically consistent with the tight rear radius and deep Gauss-derivative beam divergence at this location.

---

## Sources

1. WO 2020/158622 A1, "撮像光学系と、撮像光学系を用いる撮像装置およびカメラシステム," Panasonic IP Management, published 2020-08-06. Numerical Example 3, Tables 3A–3D.
2. Panasonic official product page, LUMIX S PRO 50mm F1.4 (S-X50): 13 elements / 11 groups, 2 aspherical, 3 ED, f/1.4, MFD 0.44 m, 0.15× max magnification, 47° diagonal FOV, 77 mm filter, 11 blades, 955 g.
3. Public optical glass catalogs: OHARA S-NPH2, S-BSL7, S-NBH56, S-LAH65VS, S-TIL26, L-TIM28(P); HOYA FDS18, FCD515, FCD705; and MC-NBFD135 code-match data — referenced for $n_d$, $\nu_d$, $\Delta P_{gF}$, and moldability classification.
4. Hoya optical glass catalog: FCD515 ($n_d = 1.59282$, $\nu_d = 68.63$, $\Delta P_{gF} = 0.0194$) — exact match for L5 and L6 ED elements. Data verified via refractiveindex.info (Hoya optical glass spec sheets).
