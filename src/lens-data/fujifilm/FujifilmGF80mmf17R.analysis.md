## Patent Reference and Design Identification

**Patent:** US 2021/0294073 A1
**Inventor:** Masato Kondo (Saitama, JP)
**Applicant:** FUJIFILM Corporation, Tokyo, Japan
**Priority:** JP 2020-047018, March 17, 2020
**Filed:** March 4, 2021
**Published:** September 23, 2021
**Title:** Imaging Lens and Imaging Apparatus
**Embodiment analyzed:** Example 1 (Tables 1-4, FIG. 2, FIG. 3)

The prescription transcribed here is **Example 1** (Tables 1–4, FIG. 2, FIG. 3). Convergent evidence linking this embodiment to the production FUJINON GF80mmF1.7 R WR:

1. **Element/group count.** 12 elements in 9 groups (patent: 2 + 6 + 4 elements across 3 groups, 9 air-separated groups). Manufacturer specification: 12 elements in 9 groups.
2. **Special elements.** Patent Example 1 contains two elements at $n_d$ = 1.43875, $\nu_d$ = 94.66, matching S-FPL55 (OHARA) — a super-ED fluorophosphate glass. One element (L26) carries aspherical surfaces on both sides. Manufacturer specification: 1 aspherical element, 2 Super ED elements.
3. **Focal length and aperture.** Patent: $f$ = 78.68 mm, $F_{No}$ = 1.75. Production: $f$ = 80 mm (marketed), $F_{No}$ = 1.7 (marketed). The patent's computed EFL of 78.68 mm is within the rounding tolerance expected for a nominal 80 mm lens; the minor difference between the patent's 1.75 and the marketed 1.7 (less than one-tenth of a stop) is a standard marketing-to-design margin.
4. **Image circle.** Patent: $Y$ = 27.35 mm (max image height), giving a diagonal of 54.7 mm. The GFX sensor (43.8 × 32.9 mm) has a half-diagonal of 27.39 mm — the patent's 27.35 mm matches to within 0.04 mm (0.15%), consistent with the patent's use of a slightly conservative image circle.
5. **Half-field angle.** Patent: 2$\omega$ = 38.0°. Manufacturer: 37.7°. The minor difference reflects rounding and the focal-length marketing offset.
6. **Focus mechanism.** Patent: inner focus, only G2 moves toward the object side, G1 and G3 fixed. Production: inner focusing with DC motor.
7. **Minimum focus distance.** Patent: 700 mm (object to image plane). Production: 0.7 m.
8. **Patent timing.** Priority date March 2020; lens announced January 2021, shipped March 2021.

Example 1 is therefore the embodiment closest to the production GF80mmF1.7 R WR. Examples 2, 3, and 4 share the general architecture but differ in element count (Example 2 has 11 elements, Example 4 has 13) or aspherical surface distribution (Example 3 distributes aspherical surfaces across five elements, far more than the production lens's single aspherical element).


## Optical Architecture

The GF80mmF1.7 R WR is a three-group inner-focus design with positive–positive–(weakly positive) power distribution. Its overall architecture is neither a classical double-Gauss nor a strict telephoto; it more closely resembles a modified Petzval configuration with a strongly powered central group (G2) straddling the aperture stop, flanked by a weak collector (G1) and a near-afocal field-correcting group (G3).

**Group 1 (G1):** 2 elements (L11, L12). Positive refractive power as a whole ($f_{G1}$ ≈ 814 mm). Acts as a weak positive collector that pre-converges the incoming beam before the large G1–G2 air gap. The weak power keeps the front-element diameter manageable at $f$/1.7 while reducing total optical length relative to the image size (¶0044).

**Group 2 (G2):** 6 elements (L21–L26) plus the aperture stop St, which sits between L23 and L24. Positive refractive power ($f_{G2}$ ≈ 88.4 mm). This is the dominant power group and the focus group. G2 contains two cemented doublets (L22–L23 and L24–L25), each pairing a super-ED positive crown with a short-flint negative element. The doublets straddle the stop, providing symmetric achromatic correction that is preserved during focus travel. L26 is the sole aspherical element.

**Group 3 (G3):** 4 elements (L31–L34). Very weak positive power ($f_{G3}$ ≈ 1675 mm). Fixed relative to the image plane. Contains one cemented doublet (L31–L32) and two singlet negative lenses (L33, L34). The primary role of G3 is field flattening, astigmatism correction, and Petzval sum management; the three rear negative lenses pull the Petzval surface back toward the flat image plane. The patent notes (¶0055–0056) that the concave object-side surface of the rearmost element (L34) aids in correcting astigmatism and improving the Petzval sum.

The overall Petzval sum of the design is +0.00127 mm$^{-1}$, giving a Petzval radius of approximately 788 mm — a well-corrected value for a large-aperture lens of this focal length. The product $\Sigma\varphi_i/n_i \times f$ ≈ 0.10, indicating a nearly flat field.


## Element-by-Element Analysis

### L11 — Positive Meniscus, convex toward object

$n_d$ = 1.79952, $\nu_d$ = 42.25. Glass: S-NBH55 (OHARA). $f$ = +168.2 mm.

L11 is the front collector element of G1. Its high-index glass (S-NBH55, a dense barium glass with moderate dispersion) permits strong positive curvature at the front surface ($R_1$ = +82.33 mm) without requiring extreme bending — the meniscus shape keeps the angle of incidence moderate across the aperture. As the first element in a fast $f$/1.7 system covering a 43.8 × 32.9 mm sensor, L11 must handle a wide marginal ray bundle while minimizing spherical aberration introduction. The meniscus form (convex toward the object) reduces the contribution to spherical aberration relative to a biconvex shape at this position.

### L12 — Negative Biconcave

$n_d$ = 1.72825, $\nu_d$ = 28.31. Glass: S-TIH10 (OHARA) — a dense titanium flint with low Abbe number. $f$ = −202.5 mm.

L12 is the chromatic corrector of G1. Paired with L11, the strongly dispersive flint counteracts the longitudinal chromatic aberration introduced by L11's positive power. The high dispersion ($\nu_d$ = 28.31) provides substantial color correction despite L12's relatively weak negative power. The biconcave shape ($R_3$ = −420.1 mm, $R_4$ = +227.6 mm) is gentle, consistent with its role as a slow diverging element rather than a strong field-shaping lens. The Abbe-number difference $\Delta\nu$ = 42.25 − 28.31 = 13.94 across the G1 pair is modest, reflecting the fact that G1's primary job is beam conditioning rather than achromatic perfection — the heavy chromatic work falls to the cemented doublets in G2.

### L21 — Positive Meniscus, convex toward object

$n_d$ = 1.75500, $\nu_d$ = 52.34. Glass: J-LASKH2 (Hikari). $f$ = +63.2 mm.

L21 is the leading positive element of the focus group (G2). With $f$ ≈ 63 mm, it is one of the strongest individual elements in the system. Its convex-toward-object meniscus shape is specified by the patent (¶0048–0049) as advantageous for reducing the ray diameter downstream, thereby shrinking the focus group, and for suppressing spherical aberration. The high refractive index ($n_d$ = 1.755) is required by Conditional Expression (3): $1.6 < N_2 < 2.2$, where $N_2$ is the d-line index of the first lens in G2. The patent states that this high index helps reduce element diameters in the image-side portion of the focus group, reducing the mass that the DC motor must accelerate during autofocus.

### L22 — Positive Meniscus, convex toward object (Super ED)

$n_d$ = 1.43875, $\nu_d$ = 94.66. Glass: S-FPL55 (OHARA) — super-ED fluorophosphate. $f$ = +70.5 mm.

L22 is the positive crown of the first cemented achromatic doublet (L22 + L23), located on the object side of the aperture stop. S-FPL55 is one of the lowest-dispersion optical glasses in production, with $\nu_d$ = 94.66 and significant positive anomalous partial dispersion ($\Delta P_{g,F}$ ≈ +0.046 per OHARA catalog data). Its extremely low dispersion means that L22 can carry substantial positive power ($f$ ≈ 70 mm) while introducing minimal longitudinal chromatic aberration. The patent's Conditional Expression (9) requires $\nu_{2p} > 70$ for at least one positive lens in G2; L22 exceeds this threshold substantially. The meniscus shape directs refraction efficiently while controlling field curvature contributions. As part of a cemented doublet, L22's rear surface ($R$ = +329.0 mm) is the cemented junction with L23.

### L23 — Negative Meniscus, convex toward object

$n_d$ = 1.57099, $\nu_d$ = 50.80. Glass: S-BAL2 (OHARA) — a barium-lanthanum crown. $f$ = −33.4 mm.

L23 is the more dispersive negative partner of L22 in the first cemented doublet. With $\nu_d$ = 50.80, L23 provides an Abbe-number difference of $\Delta\nu$ = 94.66 − 50.80 = 43.86 across the cemented interface — a large color spread that drives powerful achromatic correction. The rear surface of L23 ($R$ = +17.99 mm) is the most steeply curved surface in the entire system, creating a strongly diverging exit that spreads the beam before it crosses the aperture stop. The meniscus shape (convex to object) and the concave image-side surface of L23 satisfy the patent's requirement (¶0051) that the image-side surface of the lens adjacent to the object side of the stop be concave — this geometry suppresses spherical aberration and helps correct astigmatism and field curvature.

### L24 — Positive Meniscus, convex toward image (Super ED)

$n_d$ = 1.43875, $\nu_d$ = 94.66. Glass: S-FPL55 (OHARA) — super-ED fluorophosphate. $f$ = +63.9 mm.

L24 is the positive crown of the second cemented achromatic doublet (L24 + L25), located on the image side of the aperture stop. It is the second super-ED element. The meniscus is oriented convex toward the image ($R_{11}$ = −41.0 mm, $R_{12}$ = −17.3 mm), creating a mirror-symmetric partner to L22's object-convex meniscus. This symmetry about the stop is a deliberate design strategy (¶0050) that balances aberration contributions — particularly coma and lateral color — between the pre-stop and post-stop halves of G2. The concave object-side surface ($R$ = −40.98 mm) satisfies Conditional Expression (4): $Rc/f_{22}$ = −0.415, which the patent identifies as critical for balancing spherical aberration correction (¶0062).

### L25 — Negative Meniscus, convex toward image

$n_d$ = 1.67270, $\nu_d$ = 32.18. Glass: E-FD5 (HOYA) — a dense flint. $f$ = −36.0 mm.

L25 is the negative flint partner of L24 in the second cemented doublet. The Abbe-number difference across this cemented pair is $\Delta\nu$ = 94.66 − 32.18 = 62.48, the maximum $\Delta\nu$ in the system and the value reported in Table 17 for Conditional Expression (10). This large dispersion spread provides the most aggressive achromatic correction in the design and is located immediately after the stop where the marginal ray height is still substantial. The stronger chromatic correction in the second doublet (62.48 vs. 43.86 for the first doublet) compensates for the fact that the post-stop sub-group also contains L26, which introduces additional dispersion through its high-index glass.

### L26 — Positive Meniscus, convex toward image (Aspherical, 2× Asph)

$n_d$ = 1.81000, $\nu_d$ = 41.00. Glass: K-VC89 (Sumita) — a high-index glass. $f$ = +51.3 mm.

L26 is the aspherical element, carrying aspherical surfaces on both its front ($R_{14}$) and rear ($R_{15}$). It is the final and strongest positive element in G2, with $f$ ≈ 51 mm. The high refractive index ($n_d$ = 1.81) permits strong curvature at the rear surface ($R_{15}$ = −33.08 mm) while keeping total internal angles within manufacturing limits. The meniscus shape, convex toward the image, is consistent with its position at the trailing edge of the converging bundle exiting the stop.

The aspherical corrections are detailed in the Aspherical Surfaces section below. The front surface (S14) provides the dominant correction. Both surfaces use a spherical base ($K$ = 0) with polynomial terms up to 20th order including both odd and even powers ($h^3$ through $h^{20}$). The primary function of the aspheric departure is to flatten the residual spherical aberration and coma across the full aperture at $f$/1.7, which the six spherical surfaces of G2's doublets cannot fully control on their own.

### L31 — Biconvex Positive (cemented with L32)

$n_d$ = 1.88300, $\nu_d$ = 39.22. Glass: 883392 high-index lanthanum class; no current catalog entry round-trips to the patent pair. $f$ = +42.0 mm.

L31 is the most strongly powered positive element in the entire system ($f$ ≈ 42 mm). It serves as the positive element of the G3 cemented doublet (L31 + L32). Despite G3's near-afocal overall power ($f_{G3}$ ≈ 1675 mm), L31 itself is aggressively positive. This is by design: the strong positive power of L31 paired with the negative L32 creates an achromatic corrector whose net power is nearly zero but whose Petzval contribution is strongly negative — exactly what the system needs to flatten the field. The biconvex shape ($R_{16}$ = +145.6, $R_{17}$ = −48.3 mm) concentrates power at the rear surface, which also forms the cemented junction with L32. The use of a high-index glass at $n_d$ = 1.883, the highest index in the system, reduces the surface curvatures needed to achieve this power, keeping higher-order aberrations under control.

### L32 — Plano-Concave Negative (cemented with L31)

$n_d$ = 1.59270, $\nu_d$ = 35.31. Glass: S-FTM16 (OHARA) — a flint glass. $f$ = −81.5 mm.

L32 is the negative flint partner of L31 in the G3 cemented doublet. Its rear surface is flat ($R_{18}$ = ∞), making it a plano-concave element. The cemented junction with L31 at $R_{17}$ = −48.32 mm creates a strongly diverging interface. L32's moderate dispersion ($\nu_d$ = 35.31) paired with L31's similarly moderate dispersion ($\nu_d$ = 39.22) creates a small $\Delta\nu$ = 3.91 — this is not an achromatic doublet in the traditional sense. Instead, the L31–L32 pair functions primarily as a field-flattening group, with the chromatic correction being secondary to the Petzval-sum management. The positive Petzval contribution from L31 ($\varphi/n$ > 0) is partially offset by the negative contribution from L32, but the net effect is a controlled negative Petzval shift that counterbalances the strong positive Petzval contribution from G2.

### L33 — Plano-Concave Negative

$n_d$ = 1.51680, $\nu_d$ = 64.21. Glass: N-BK7 (Schott) — a borosilicate crown. $f$ = −204.1 mm.

L33 is a weakly negative field-flattening element. Its front surface ($R_{19}$ = −105.5 mm) is concave toward the object, and the rear surface is flat. The low-index, high-Abbe-number glass introduces minimal chromatic disturbance while providing a negative Petzval contribution. L33 works in concert with L34 to pull the image surface toward the flat sensor plane.

### L34 — Plano-Concave Negative

$n_d$ = 1.64769, $\nu_d$ = 33.84. Glass: E-FD2 (HOYA). $f$ = −133.6 mm.

L34 is the rearmost element of the imaging lens and the strongest of the three rear negative singlets in G3. Its object-side surface ($R_{21}$ = −86.6 mm) is concave toward the object, consistent with the patent's preference (¶0055) that this surface be concave — an arrangement that corrects astigmatism. The rear surface is flat. The patent (¶0056) notes that making the last element a negative lens with a concave object-side surface provides three benefits: it improves the Petzval sum, it reduces the total optical length, and it corrects distortion. L34's moderate index ($n_d$ = 1.648) and low Abbe number ($\nu_d$ = 33.84) place it in the short-flint region of the glass map, providing a useful negative-Petzval contribution through its dispersive, negative-power character.

*Glass-catalog note:* The patent lists only refractive index and Abbe number, not vendor glass names. The catalog labels here are exact or nearest round-tripping matches to the patent values in the current project catalog; L31 remains code-labeled because no catalog entry matches its $n_d$/$\nu_d$ pair closely enough.


## Glass Identification and Selection

The design uses twelve distinct glass types. The patent gives optical constants rather than vendor glass names, so the table below lists the project catalog labels that best round-trip to the patent values; minor $\nu_d$ offsets are noted.

| Element | Glass | Vendor | $n_d$ (patent) | $\nu_d$ (patent) | $\nu_d$ (catalog) | Δνd | Class / Role |
|---------|-------|--------|-------|---------|---------|-----|-------------|
| L11 | S-NBH55 | OHARA | 1.79952 | 42.25 | 42.24 | +0.01 | Dense barium high-index. Front collector. |
| L12 | S-TIH10 | OHARA | 1.72825 | 28.31 | 28.46 | −0.15 | Dense titanium flint. Chromatic corrector in G1. |
| L21 | J-LASKH2 | Hikari | 1.75500 | 52.34 | 52.34 | 0 | Lanthanum crown. Focus group lead. |
| L22 | S-FPL55 | OHARA | 1.43875 | 94.66 | 94.66 | 0 | Super-ED fluorophosphate. Pre-stop crown. |
| L23 | S-BAL2 | OHARA | 1.57099 | 50.80 | 50.80 | 0 | Barium-lanthanum crown. Pre-stop flint partner. |
| L24 | S-FPL55 | OHARA | 1.43875 | 94.66 | 94.66 | 0 | Super-ED fluorophosphate. Post-stop crown. |
| L25 | E-FD5 | HOYA | 1.67270 | 32.18 | 32.17 | +0.01 | Dense flint. Post-stop flint partner. |
| L26 | K-VC89 | Sumita | 1.81000 | 41.00 | 41.00 | 0 | High-index aspherical element. |
| L31 | 883392 code label | — | 1.88300 | 39.22 | — | — | High-index lanthanum class (highest $n_d$). Petzval corrector. |
| L32 | S-FTM16 | OHARA | 1.59270 | 35.31 | 35.31 | 0 | Flint. Petzval corrector partner. |
| L33 | N-BK7 | Schott | 1.51680 | 64.21 | 64.17 | +0.04 | Borosilicate crown. Weak negative field flattener. |
| L34 | E-FD2 | HOYA | 1.64769 | 33.84 | 33.84 | 0 | Dense flint. Negative field flattener. |

The chromatic strategy centers on the two S-FPL55 super-ED elements (L22 and L24). S-FPL55 has one of the lowest dispersions of any commercially available optical glass ($\nu_d$ = 94.66) and exhibits significant positive anomalous partial dispersion, making it valuable for controlling secondary spectrum. By pairing each S-FPL55 element with a more dispersive partner in a cemented doublet — S-BAL2 ($\nu_d$ = 50.80) on the object side and E-FD5 ($\nu_d$ = 32.18) on the image side — the designer achieves large Abbe-number spreads (43.9 and 62.5 respectively) that provide powerful primary chromatic correction. The asymmetric doublet design (weaker correction pre-stop, stronger post-stop) likely reflects the asymmetric ray geometry: the post-stop marginal ray is already converging and carries more chromatic sensitivity.

The three highest-index glasses in the design (K-VC89 at 1.810, the L31 code-labeled high-index glass at 1.883, and S-NBH55 at 1.800) all appear in high-power positive elements (L26, L31, and L11 respectively). High refractive index reduces the surface curvatures needed to achieve a given power, which suppresses higher-order spherical aberration and reduces sensitivity to manufacturing tolerances — important in a fast $f$/1.7 design.


## Focus Mechanism

The GF80mmF1.7 R WR uses inner focusing: only Group 2 (L21–L26 plus the aperture stop) moves during focusing, while G1 and G3 remain fixed relative to the image plane. The focus group travels toward the object when focusing from infinity to close distance.

| Parameter | Infinity | 700 mm (close) |
|-----------|----------|----------------|
| DD[4] (G1–G2 air gap) | 16.340 mm | 1.932 mm |
| DD[15] (G2–G3 air gap) | 2.320 mm | 16.728 mm |
| Sum (DD[4] + DD[15]) | 18.660 mm | 18.660 mm |

The variable-gap sum is conserved at 18.660 mm, confirming that the overall track length is constant during focusing. The focus travel is 14.408 mm (= 16.340 − 1.932), with G2 moving toward the object side during close focusing. The arrow below G2 in FIG. 1 indicates this direction of travel (¶0043).

The patent states several advantages of this focus architecture (¶0043): inner focusing keeps the front element stationary, which aids dust-proof and weather-sealed construction (consistent with the "WR" designation). Moving only G2 also reduces the mass that the DC motor must drive, since G1 (the largest-diameter elements) and G3 remain fixed. The patent further notes (¶0050) that including the aperture stop within the focus group preserves optical symmetry during focus travel, suppressing aberration fluctuation. The aberration diagrams (FIG. 3) show that spherical aberration, astigmatism, and lateral color are well-controlled at both infinity and 700 mm focus distances.

The production lens specifies an MFD of 0.7 m with a maximum magnification of 0.15×, and uses a DC motor with a GMR (giant magnetoresistive) position sensor for autofocus.


## Aspherical Surfaces

The design contains two aspherical surfaces, both on element L26 (the last element of G2). Both surfaces have a spherical base conic ($K$ = 0) with polynomial corrections up to 20th order.

The patent uses the following aspherical sag equation (¶0085–0091):

$$Z_d = \frac{C \cdot h^2}{1 + \sqrt{1 - K_A \cdot C^2 \cdot h^2}} + \sum_{m} A_m \cdot h^m$$

where $C = 1/R$, $K_A$ is the conic coefficient (equivalent to $1 + K$ in the standard convention, so $K_A = 1$ corresponds to $K = 0$, a spherical base), and the sum runs over $m = 3, 4, 5, \ldots, 20$.

**Conic convention note:** The patent's $K_A$ corresponds to $(1+K)$ in the standard sag equation. Since both surfaces have $K_A$ = 1.0000000, the conic constant $K = 0$ — the aspherical correction is entirely in the polynomial terms.

**Odd-power terms:** This patent uses both odd and even powers in the polynomial ($A_3$ through $A_{20}$). This is a standard convention in Fujifilm patents; the radial coordinate $h$ is always non-negative in the context of the rotationally symmetric sag equation, so odd powers do not introduce left–right asymmetry but rather provide additional degrees of freedom for shaping the sag profile as a function of aperture height. Although $A_3 = 0$ for both surfaces, the remaining odd-power coefficients ($A_5, A_7, A_9, \ldots, A_{19}$) are non-zero and contribute materially to the total aspherical departure — in some cases comparably to adjacent even-power terms.

**Data-file limitation:** The companion `.data.ts` file encodes only the even-power coefficients ($A_4, A_6, \ldots, A_{20}$) because the current schema does not support odd powers. The odd-power coefficients are listed in full below for reference. The rendered aspherical sag in the viewer is therefore approximate; the full patent polynomial should be used for any quantitative sag computation.

### Surface 14 (L26 front, $R$ = −146.6394 mm)

| Coefficient | Value |
|-------------|-------|
| $K_A$ | 1.0000000 |
| $A_3$ | 0 |
| $A_4$ | −1.0088242 × 10$^{-6}$ |
| $A_5$ | −2.6513493 × 10$^{-7}$ |
| $A_6$ | 1.7071672 × 10$^{-8}$ |
| $A_7$ | 8.2564362 × 10$^{-10}$ |
| $A_8$ | −1.0054449 × 10$^{-12}$ |
| $A_9$ | −1.7643417 × 10$^{-11}$ |
| $A_{10}$ | 6.0868319 × 10$^{-13}$ |
| $A_{11}$ | 4.7629976 × 10$^{-14}$ |
| $A_{12}$ | 1.3561314 × 10$^{-17}$ |
| $A_{13}$ | −1.9007385 × 10$^{-16}$ |
| $A_{14}$ | 5.4134773 × 10$^{-18}$ |
| $A_{15}$ | −6.3292092 × 10$^{-19}$ |
| $A_{16}$ | 6.8084206 × 10$^{-21}$ |
| $A_{17}$ | 4.8308631 × 10$^{-21}$ |
| $A_{18}$ | −1.8685654 × 10$^{-22}$ |
| $A_{19}$ | −3.6580337 × 10$^{-24}$ |
| $A_{20}$ | 1.8806460 × 10$^{-25}$ |

The dominant even-power term is $A_4 = -1.009 \times 10^{-6}$, which is negative. On this concave-toward-object surface ($R < 0$), a negative $A_4$ adds further negative sag at the rim, making the surface more deeply concave than the spherical base. The odd-power terms (particularly $A_5$ and $A_9$) contribute comparable magnitudes at moderate aperture heights, shaping the zonal correction profile. The combined effect steepens divergence on marginal rays at S14, counteracting residual spherical aberration from L26's strong positive rear surface.

### Surface 15 (L26 rear, $R$ = −33.0799 mm)

| Coefficient | Value |
|-------------|-------|
| $K_A$ | 1.0000000 |
| $A_3$ | 0 |
| $A_4$ | 1.3965451 × 10$^{-7}$ |
| $A_5$ | −2.3150181 × 10$^{-7}$ |
| $A_6$ | 1.5432308 × 10$^{-8}$ |
| $A_7$ | 4.7477332 × 10$^{-10}$ |
| $A_8$ | −8.1934546 × 10$^{-11}$ |
| $A_9$ | −8.2435003 × 10$^{-13}$ |
| $A_{10}$ | 1.5740720 × 10$^{-13}$ |
| $A_{11}$ | 1.2547704 × 10$^{-14}$ |
| $A_{12}$ | −9.8161787 × 10$^{-16}$ |
| $A_{13}$ | −1.6440179 × 10$^{-17}$ |
| $A_{14}$ | 3.9921882 × 10$^{-18}$ |
| $A_{15}$ | −7.9972791 × 10$^{-20}$ |
| $A_{16}$ | −7.0611745 × 10$^{-21}$ |
| $A_{17}$ | 1.5944044 × 10$^{-22}$ |
| $A_{18}$ | 3.8876927 × 10$^{-24}$ |
| $A_{19}$ | 5.0171611 × 10$^{-25}$ |
| $A_{20}$ | −2.1180317 × 10$^{-26}$ |

Surface 15 has a weaker even $A_4$ term ($+1.40 \times 10^{-7}$, positive), while the odd $A_5$ term ($-2.32 \times 10^{-7}$) is larger in magnitude. The higher-order terms (both odd and even) shape the peripheral sag correction cooperatively. The combined effect of both aspherical surfaces on L26 provides a controlled variation of refraction with zonal height that counteracts residual spherical aberration and higher-order coma that the spherical doublets cannot fully control at $f$/1.7.

The placement of the aspherical element at the trailing edge of G2 (rather than at the front of the lens or near the stop) is significant: at this position, the marginal ray height is moderate and the chief ray is diverging, so the aspherical correction acts on both axial (spherical aberration) and off-axis (coma, astigmatism) wavefront errors simultaneously.


## Conditional Expressions

The patent specifies eleven conditional expressions governing the design space. All are satisfied by Example 1:

| No. | Expression | Bounds | Value (Ex. 1) | Status |
|-----|-----------|--------|---------------|--------|
| (1) | $TL^2 / (Y \times f)$ | 4 < … < 7.5 | 4.985 | ✓ |
| (2) | $G1TL / Gsum$ | 0.04 < … < 0.14 | 0.092 | ✓ |
| (3) | $N_2$ | 1.6 < … < 2.2 | 1.755 | ✓ |
| (4) | $R_c / f_{22}$ | −0.7 < … < −0.1 | −0.415 | ✓ |
| (5) | $f / f_1$ | 0.02 < … < 0.3 | 0.097 | ✓ |
| (6) | $f / f_{21}$ | 0.2 < … < 1 | 0.587 | ✓ |
| (7) | $f / f_{22}$ | 0.4 < … < 1.5 | 0.797 | ✓ |
| (8) | $|f / f_3|$ | 0 < … < 0.3 | 0.047 | ✓ |
| (9) | $\nu_{2p}$ | 70 < … | 94.66 | ✓ |
| (10) | $\max(\nu_p - \nu_n)$ | 30 < … < 75 | 62.48 | ✓ |
| (11) | $Bf / f$ | 0.1 < … < 0.5 | 0.296 | ✓ |

All eleven values were independently verified by paraxial ray trace. The computed system EFL is 78.682 mm, matching the patent's stated 78.68 mm to four significant figures.


## Verification Summary

Independent paraxial verification (y-nu marginal ray trace, surface-by-surface) confirms:

| Parameter | Patent value | Computed value | Match |
|-----------|-------------|----------------|-------|
| EFL ($f$) | 78.68 mm | 78.682 mm | ✓ |
| Back focal length ($Bf$, air-equiv.) | 23.28 mm | 23.284 mm | ✓ |
| Half-field angle ($\omega$) | 19.0° | 19.17° | ✓ (rounding) |
| $f / f_1$ (Cond. 5) | 0.097 | 0.097 | ✓ |
| $f / f_{21}$ (Cond. 6) | 0.587 | 0.586 | ✓ |
| $f / f_{22}$ (Cond. 7) | 0.797 | 0.798 | ✓ |
| $R_c / f_{22}$ (Cond. 4) | −0.415 | −0.415 | ✓ |
| $|f / f_3|$ (Cond. 8) | 0.047 | 0.047 | ✓ |
| Variable-gap conservation | — | 18.660 mm (inf.) = 18.660 mm (close) | ✓ |
| Petzval sum | — | +0.001268 mm$^{-1}$ ($R_P$ ≈ 788 mm) | — |

Group focal lengths: $f_{G1}$ ≈ 814 mm (weak positive), $f_{G2}$ ≈ 88 mm (strong positive), $f_{G3}$ ≈ 1675 mm (very weak positive).


## Sources

1. US 2021/0294073 A1, "Imaging Lens and Imaging Apparatus," Masato Kondo (Fujifilm), published September 23, 2021. Example 1 (Tables 1–4, FIG. 2–3).
2. FUJIFILM Corporation, "GF80mmF1.7 R WR — Specifications," https://www.fujifilm-x.com/en-us/products/lenses/gf80mmf17-r-wr/specifications/. Accessed May 2026.
3. Project glass catalog sources for glass identifications: OHARA, Hikari, HOYA, Sumita, and Schott catalog data as recorded in `src/optics/glassCatalogData.ts`.
