# Fujifilm Fujinon 23mm f/2 (X100V / X100VI) — Optical Analysis

## Patent Reference and Design Identification

**Patent:** US 2020/0333569 A1
**Application Number:** 16/847,170
**Filed:** April 13, 2020
**Published:** October 22, 2020
**Priority:** JP 2019-078782, filed April 17, 2019
**Inventor:** Masato Kondo
**Applicant:** FUJIFILM Corporation, Tokyo, Japan
**Title:** Imaging Lens and Imaging Apparatus
**Embodiment analyzed:** Example 1 (Figs. 1–2, Tables 1–3)

Example 1 of US 2020/0333569 A1 is identified as the optical design implemented in the revised Fujinon 23mm f/2 lens introduced with the Fujifilm X100V (February 2020) and carried forward unchanged in the X100VI (February 2024). The convergent evidence is as follows:

1. **Element and group count.** Example 1 has 8 elements in 6 groups. Fujifilm's published specifications for the X100V/X100VI lens state 8 elements in 6 groups.
2. **Aspherical element count.** Two elements carry aspherical surfaces (L23 and L31, four aspheric surfaces total). Fujifilm's specifications state "two aspherical elements."
3. **Focal length.** The patent's computed paraxial EFL is 23.689 mm. The marketed focal length is 23 mm (35 mm equivalent on APS-C).
4. **Maximum aperture.** The patent's FNo is 2.06 at the design level. The marketed aperture is f/2.0.
5. **Image circle.** The patent's maximum image height is $Y_\text{max} = 14.20$ mm, yielding a diagonal of 28.4 mm. The Fujifilm X-Trans APS-C sensor measures 23.5 × 15.7 mm (diagonal ≈ 28.2 mm), consistent with this image circle.
6. **Half-field angle.** The patent states $2\omega = 62.0°$. At $f = 23$ mm on APS-C, the diagonal field of view is approximately 62°.
7. **Design architecture.** The patent's three-group positive–positive–negative telephoto-type layout, with G1+G2 integral focusing and a fixed rear G3, matches Fujifilm's published description of the X100V's revised lens design as optimized for close-focus image quality.
8. **Camera form factor.** Figs. 12–13 of the patent depict a compact camera with an integral (non-interchangeable) lens — the physical form factor of the X100 series.
9. **Timing.** The Japanese priority application (April 2019) precedes the X100V announcement (February 2020) by approximately ten months, consistent with typical patent-to-production lead times.

The previous X100-series lens (X100 through X100F, 2013–2018) used a different optical formula covered by earlier Fujifilm patents. The X100V's revised lens was specifically marketed as having improved close-focus performance and the addition of a second aspherical element, both of which distinguish Example 1 from the earlier design.

## Optical Architecture

The lens follows a three-group telephoto-type configuration arranged, from object to image, as: a first positive lens group (G1), an aperture stop (St), a second positive lens group (G2), and a third negative lens group (G3). The positive–positive–negative power distribution shortens the total length relative to the focal length — the total track is only 38.35 mm for a 23.7 mm EFL, yielding a telephoto ratio of approximately 1.62. This compact geometry is essential for the X100V's thin body profile, where much of the optical assembly resides within the camera body itself.

G1 comprises two elements forming a single cemented doublet (L11+L12) with moderate positive power ($f_{G1} \approx +42.7$ mm). The doublet corrects axial chromatic aberration while keeping the front group compact.

G2 comprises three elements in two air-separated subgroups: a cemented doublet (L21+L22) followed by a biconvex singlet (L23). G2 provides strong positive power ($f_{G2} \approx +20.1$ mm) and contains all four aspherical surfaces of L23. The cemented pair within G2 is weakly negative in aggregate ($f \approx -212$ mm), functioning primarily as a chromatic corrector, while the biconvex L23 carries the converging power.

G3 comprises three air-separated singlets — a weak negative aspheric lens (L31), a stronger negative plano-concave lens (L32), and a weak positive plano-convex lens (L33). G3 provides overall negative power ($f_{G3} \approx -25.8$ mm) and remains stationary during focusing, acting as a field-flattening and aberration-correction group.

The combined G1+G2 system has $f_{G12} \approx +18.6$ mm, satisfying the patent's Conditional Expression (3): $f_{G12}/f = 0.79$. This ratio governs the balance between focus-travel length and aberration stability during focusing.

The Petzval sum of the complete system is $\Sigma P = 0.0032$ mm$^{-1}$, corresponding to a Petzval radius of approximately 311 mm — a well-corrected value for an APS-C format lens. The positive contributions from G1 and G2 are substantially canceled by the negative power of G3, particularly L32.

## Element-by-Element Analysis

### L11 — Negative Meniscus (convex to object)

$n_d = 1.71736$, $\nu_d = 29.51$. Glass: TAFD25 (HOYA). $f \approx -29.3$ mm.

L11 is the front element and the negative component of the G1 cemented doublet. Its convex-to-object meniscus shape serves two purposes: the convex front surface ($R = +30.98$ mm) admits the marginal ray bundle at a gentle angle, reducing spherical aberration at the entrance; the strongly curved rear surface ($R = +12.43$ mm) creates the cemented interface with L12. The high-dispersion glass TAFD25 ($\nu_d = 29.5$) partners with L12's lower-dispersion lanthanum-dense flint ($\nu_d = 39.2$) to correct axial chromatic aberration across the G1 doublet. Although both L11 and L12 are flint-type glasses by conventional classification ($\nu_d < 50$), the Abbe-number differential of approximately 10 units between them is sufficient for effective primary chromatic correction at this aperture. As a dense flint with relatively high refractive index ($n_d = 1.717$), TAFD25 also keeps the Petzval contribution of L11 moderate despite its negative power.

### L12 — Positive Meniscus (convex to object), cemented to L11

$n_d = 1.88300$, $\nu_d = 39.22$. Glass: Unmatched (lanthanum-dense flint; nearest catalog entry S-LAH79 (OHARA) matches $n_d$ exactly but $\Delta\nu_d = 1.54$). $f \approx +17.0$ mm.

L12 is the positive element of the G1 doublet and carries the group's net positive power. Its very high refractive index ($n_d = 1.883$) allows strong positive curvature at the cemented junction ($R = +12.43$ mm) while maintaining a relatively weak rear surface ($R = +64.18$ mm). The cemented surface is convex toward the object side, which the patent (¶0040) identifies as advantageous for suppressing wavelength-dependent spherical aberration. The $n_d$ matches S-LAH79 exactly, but the $\nu_d = 39.22$ is approximately 1.5 units below S-LAH79's published Abbe number (40.76). This discrepancy suggests either a proprietary glass variant or a melt-specific adjustment. The same glass is reused for L33.

### L21 — Negative Meniscus (concave to object), cemented to L22

$n_d = 1.69895$, $\nu_d = 30.05$. Glass: S-TIM35 (OHARA) — exact match. $f \approx -12.1$ mm.

L21 is the first element of G2 and forms the negative component of the G2 cemented doublet. Its concave object-side surface ($R = -10.59$ mm) is the strongest negative curvature in the entire system. The patent (¶0042) notes that making this surface concave prevents off-axis rays from being strongly refracted at the G2 entrance, thereby suppressing off-axis aberrations. S-TIM35 is a titanium-flint glass with moderate dispersion ($\nu_d = 30.05$), providing the chromatic differential needed against L22's lower-dispersion lanthanum flint. L21 and L32 share identical glass — a common cost-reduction strategy.

### L22 — Biconvex Positive, cemented to L21

$n_d = 1.77250$, $\nu_d = 49.61$. Glass: S-LAH66 (OHARA) — exact match. $f \approx +15.1$ mm.

L22 is the positive element of the G2 cemented pair. Its image-side surface ($R = -15.33$ mm) is strongly convex toward the image, and the patent (¶0042–0043) identifies this curvature as working with L21's concave entrance to manage off-axis ray refraction. S-LAH66 is a lanthanum-containing glass with high refractive index ($n_d = 1.773$) and moderate Abbe number ($\nu_d = 49.6$). It serves the lower-dispersion role in the L21/L22 chromatic pair, making it an effective achromatizing partner for the higher-dispersion S-TIM35 of L21. The L21+L22 cemented pair has a combined focal length of approximately $-212$ mm — weakly negative overall. This means the doublet functions primarily as an aberration corrector rather than a power-contributing element; the positive convergence within G2 is delegated almost entirely to L23.

### L23 — Biconvex Positive (2× Aspherical)

$n_d = 1.80780$, $\nu_d = 40.86$. Glass: Unmatched (closest candidate TAFD33 (HOYA), $n_d = 1.80610$, $\Delta n_d = 0.0017$). $f \approx +21.8$ mm.

L23 is the most optically significant single element in the design. It is the lens closest to the image side in G2, and the patent (¶0041, ¶0045) specifically identifies it as a biconvex lens whose surface curvatures satisfy Conditional Expression (1): $(R_a + R_b)/(R_a - R_b) = 0.02$, where $R_a = +34.72$ mm (front) and $R_b = -33.48$ mm (rear). This ratio being close to zero means the two surfaces have nearly equal and opposite radii — an almost symmetrical biconvex form. Both surfaces are aspherical.

The near-symmetry of L23 is central to controlling spherical aberration. A symmetrical biconvex element minimizes coma for on-axis rays, and the aspherical departures on both surfaces provide additional freedom to correct residual spherical aberration, field curvature, and astigmatism. The high refractive index ($n_d > 1.80$) satisfies Conditional Expression (6) ($N_{d23} > 1.75$), which the patent (¶0050) identifies as advantageous for shortening the total length and ensuring adequate spherical aberration correction.

The glass $n_d = 1.80780$ does not match any standard catalog entry exactly. The closest candidate, HOYA TAFD33 ($n_d = 1.80610$), differs by $\Delta n_d = 0.0017$. This may indicate a proprietary composition optimized for precision glass molding of the aspherical surfaces.

As the sole power-carrying element in G2 outside the cemented doublet, L23 is the primary element responsible for converging the on-axis beam toward focus. Its thick center (5.00 mm) — the thickest element in the system — reflects the strong bending required.

### L31 — Weak Negative Meniscus (2× Aspherical)

$n_d = 1.51633$, $\nu_d = 64.06$. Glass: S-BSL7 (OHARA) — exact match (equivalent to N-BK7). $f \approx -329$ mm.

L31 is the first element of G3 and the second aspherical element in the design. It has very weak negative power with a nearly flat front surface ($R = +666.6$ mm) and a gently curved rear surface ($R = +135.0$ mm). Both surfaces carry aspherical profiles.

Despite its weak paraxial power, L31's aspherical surfaces are critical. The patent (¶0044) identifies the aspheric lens of G3 as "advantageous in correcting astigmatism." Because L31 sits far from the stop and close to the image, off-axis ray bundles are well separated at its surfaces, allowing the aspherical departures to selectively correct field-dependent aberrations — principally astigmatism and field curvature — without disturbing the on-axis correction established by the preceding groups.

The choice of BSL7/BK7-class glass ($n_d = 1.516$, $\nu_d = 64.1$) is deliberate: this low-index, low-dispersion borosilicate crown contributes minimal chromatic aberration of its own, ensuring that L31's aspherical correction does not introduce secondary color.

### L32 — Plano-Concave Negative

$n_d = 1.69895$, $\nu_d = 30.05$. Glass: S-TIM35 (OHARA) — exact match (same glass as L21). $f \approx -21.7$ mm.

L32 is the strongest negative element in G3 and the primary field-flattening element in the system. Its concave front surface ($R = -15.17$ mm) carries all of the element's power; the rear surface is flat ($R = \infty$). The Petzval contribution of L32 ($-0.0271$ mm$^{-1}$) is the single largest negative Petzval contribution in the design, directly counteracting the positive Petzval sum accumulated by G1 and G2. The patent (¶0044) states that the "negative lens continuously disposed on the image side of the aspheric lens" reduces the Petzval sum of the system.

The use of high-dispersion S-TIM35 flint glass ($\nu_d = 30.05$) in this position introduces deliberate lateral chromatic aberration, balanced against L33's chromatic contribution. The reuse of S-TIM35 (identical to L21) reduces the number of distinct glass types in the bill of materials.

### L33 — Plano-Convex Positive

$n_d = 1.88300$, $\nu_d = 39.22$. Glass: Unmatched (same glass as L12). $f \approx +93.4$ mm.

L33 is the final optical element before the cover glass and image plane. It is a weak positive plano-convex singlet (front surface $R = +82.50$ mm, flat rear surface). The patent (¶0044) states that "disposing the positive lens closest to the image side in the third lens group G3 is advantageous in correcting distortion." L33's gentle positive power bends the chief ray toward the optical axis, reducing the angle of incidence on the sensor — an important consideration for digital sensors with microlens arrays that suffer efficiency losses at steep incidence angles. Its Petzval contribution ($+0.0057$ mm$^{-1}$) partially offsets L32's strong negative contribution, fine-tuning the net Petzval sum.

## Glass Selection

The design uses six distinct glass types across eight elements. Two glasses — S-TIM35 and the $n_d = 1.883$ lanthanum-dense flint — are each used twice, reducing the bill of materials.

| Element | $n_d$ | $\nu_d$ | Best catalog match | Confidence | Role |
|---------|-------|---------|-------------------|------------|------|
| L11 | 1.71736 | 29.51 | TAFD25 (HOYA) | Exact | Dense flint, chromatic partner in G1 doublet |
| L12, L33 | 1.88300 | 39.22 | Unmatched (near S-LAH79 (OHARA), $\Delta\nu_d = 1.54$) | Approximate | High-index LaF, positive power carriers |
| L21, L32 | 1.69895 | 30.05 | S-TIM35 (OHARA) | Exact | Titanium flint, chromatic correction and field flattening |
| L22 | 1.77250 | 49.61 | S-LAH66 (OHARA) | Exact | Lanthanum flint, lower-dispersion partner in G2 doublet |
| L23 | 1.80780 | 40.86 | Unmatched (near TAFD33 (HOYA), $\Delta n_d = 0.0017$) | Approximate | Aspherical biconvex, primary convergence in G2 |
| L31 | 1.51633 | 64.06 | S-BSL7 (OHARA) | Exact | BK7-class crown, aspherical field corrector |

The chromatic correction strategy relies on two cemented doublets. In G1, the TAFD25 flint ($\nu_d = 29.5$) partners with the high-index lanthanum-dense flint ($\nu_d = 39.2$) — a modest Abbe differential of approximately 10 units, supplemented by the high refractive-index differential at the cemented junction. In G2, S-TIM35 ($\nu_d = 30.1$) partners with S-LAH66 ($\nu_d = 49.6$) — a larger Abbe differential of approximately 19.5 units, providing the primary axial chromatic correction. No ED or anomalous-partial-dispersion glasses are used; the design achieves its chromatic correction through conventional high/low-dispersion flint pairings.

The two glasses that lack exact catalog matches ($n_d = 1.88300 / \nu_d = 39.22$ and $n_d = 1.80780 / \nu_d = 40.86$) share a common pattern: their $n_d$ values match known catalog entries, but the $\nu_d$ values diverge by 1–2 units. This is consistent with either proprietary glass compositions (particularly for the precision-molded aspherical L23) or deliberate slight obfuscation in the patent filing — a common practice in Japanese optical patents.

## Focus Mechanism

The lens uses an integral-group focusing scheme. During focusing from infinity to close distance, G1 and G2 move together as a unit along the optical axis, while G3 remains stationary relative to the image plane. This is indicated by the double-arrow annotation beneath G1 and G2 in the patent's Fig. 1 (¶0038).

The single variable air gap is the space between L23's rear surface and L31's front surface, which measures 1.100 mm at infinity focus. As the G1+G2 assembly moves forward (toward the object), this gap increases. Paraxial refocus to the manufacturer's published MFD of 0.10 m yields an estimated close-focus gap of approximately 7.98 mm (extension of 6.88 mm). The patent does not publish close-focus spacing data for Example 1.

This focusing architecture has several advantages for the X100 series. Only 5 of the 8 elements (G1+G2) move during focusing as a rigid group, reducing the mass that the autofocus motor must drive. Because G3 is fixed, the aspherical field correction provided by L31 and the field-flattening contribution of L32 remain constant regardless of focus position — the patent (¶0047) notes that this reduces "fluctuation in aberrations during focusing."

## Aspherical Surfaces

The design employs four aspherical surfaces distributed across two elements: L23 (surfaces 7A and 8A in the data file) and L31 (surfaces 9A and 10A). Both elements carry aspheric profiles on both their front and rear surfaces.

### Aspheric equation convention

The patent (¶0057–0058) uses the sag equation:

$$Z_d = \frac{C \cdot h^2}{1 + \sqrt{1 - K_A \cdot C^2 \cdot h^2}} + \sum A_m \cdot h^m$$

where $C = 1/R$ is the paraxial curvature, $h$ is the radial height, $K_A$ is the conic constant parameter, and $A_m$ are the polynomial coefficients. The parameter $K_A$ in this patent corresponds to $(1 + K)$ in the standard optical convention. Since $K_A = 1.0$ for all four aspheric surfaces, the conic constant $K = 0$ in every case — all base curves are spherical.

### Non-standard polynomial terms and refit methodology

A notable feature of this patent's aspheric specification is the inclusion of odd-order polynomial terms ($A_3, A_5, A_7, \ldots$) alongside the conventional even-order terms. The summation runs from $m = 3$ through $m = 20$, yielding 18 coefficients per surface. Standard rotationally symmetric aspheric specifications use only even-order terms ($h^4, h^6, h^8, \ldots$), because the sag of a smooth rotationally symmetric surface is naturally expressed as a polynomial in $h^2$. The odd-order terms ($h^3, h^5, \ldots$) do not break rotational symmetry — $h^m$ for any integer $m$ is rotationally symmetric since $h = \sqrt{x^2 + y^2}$ — but they introduce sag profiles not representable in the standard even-order basis. This extended form is encountered in several Fujifilm patents and likely reflects internal design-code conventions.

For the companion data file, the patent's odd+even coefficients have been refitted to even-order-only polynomials ($A_4$ through $A_{20}$) via weighted least-squares regression over the clear aperture of each surface. The maximum refit error is below 0.20 µm (surface 9A), with RMS errors below 0.08 µm on all four surfaces — well within manufacturing tolerances.

### Surface-by-surface aspherical roles

**L23 front (surface 7A, $R = +34.72$ mm).** This surface carries the most aggressive aspherical departure in the design. The refitted profile steepens convergence at the rim, increasing the bending of marginal rays. Together with surface 8A, it jointly controls spherical aberration, coma, and higher-order zonal errors across the thick biconvex element.

**L23 rear (surface 8A, $R = -33.48$ mm).** The rear surface carries a strong positive $A_4$ departure that opens up the periphery, creating a complex correction profile that varies across aperture zones. Surfaces 7A and 8A work as a correction pair to balance the spherical aberration budget of the entire system.

**L31 front and rear (surfaces 9A and 10A).** These surfaces carry smaller departures than L23's, consistent with L31's weak paraxial power and its role as a field corrector. Because L31 is positioned far from the aperture stop and close to the image, off-axis ray bundles are well separated radially at these surfaces, and the patent (¶0044) identifies L31's aspherical contribution as primarily correcting astigmatism.

## Verification Summary

The following patent-stated values were independently verified via paraxial y-nu ray trace:

| Parameter | Patent value | Computed value | Agreement |
|-----------|-------------|----------------|-----------|
| $f$ (EFL) | 23.689 mm | 23.689 mm | $\Delta < 0.001$ mm |
| $B_f$ (air equiv.) | 4.861 mm | 4.861 mm | Exact |
| $\text{TL}$ | 38.35 mm | 38.35 mm | Exact |
| $2\omega$ | 62.0° | 61.9° (paraxial) | $\Delta = 0.1°$ |
| $f_{G12}/f$ | 0.79 | 0.786 | $\Delta = 0.004$ |
| $(R_a + R_b)/(R_a - R_b)$ | 0.02 | 0.018 | $\Delta = 0.002$ |
| $\text{FNo} \times \text{TL} / Y_\text{max}$ | 5.56 | 5.56 | Exact |
| Petzval sum | — | 0.0032 mm$^{-1}$ | $R_P \approx 311$ mm |

All conditional expressions (1) through (6) are satisfied within the specified bounds.

## Sources

- US 2020/0333569 A1 (primary source for all optical prescription data and design rationale).
- Fujifilm X100V product page, https://fujifilm-x.com/global/products/cameras/x100v/specifications/ — confirms 8 elements / 6 groups, 2 aspherical elements, fixed FUJINON 23mm f/2 lens, MFD ≈ 10 cm.
- Fujifilm X100VI specifications, https://fujifilm-dsc.com/en/manual/x100vi/technical_notes/spec/ — confirms sensor dimensions (23.5 × 15.7 mm APS-C), focal length f = 23 mm, maximum aperture F2.0.
- OHARA optical glass catalog (May 2023) — used for S-TIM35, S-LAH66, S-BSL7, S-LAH79 identification.
- HOYA optical glass catalog — used for TAFD25, TAFD33 identification.
