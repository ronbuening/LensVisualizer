# Optical Design Analysis: Sigma 30mm f/2.8 (DP2 Merrill)

## Patent Reference and Design Identification

**Patent:** JP 2013-156459 A, "結像光学系" (Imaging Optical System)
**Applicant:** Sigma Corporation (株式会社シグマ), Kawasaki, Kanagawa
**Inventor:** Tomoki Kōno (幸野 朋来)
**Filed:** 2012-01-31 (Priority: P2012-17449)
**Published:** 2013-08-15
**Embodiment used:** Numerical Example 4 (数値実施例４), ¶0065–¶0070

The prescription is identified with the production lens used in the Sigma DP2 Merrill (2012) compact camera by the following convergent evidence:

1. **Element and group count.** The patent embodiment has 8 elements in 6 groups; the production lens is marketed as 8 elements in 6 groups.
2. **Focal length.** The computed EFL of 29.60 mm is consistent with the marketed 30 mm focal length.
3. **Maximum aperture.** The computed F/2.86 at infinity matches the marketed F/2.8 within normal rounding.
4. **Image circle.** The design image height $Y = 14.20$ mm yields a $28.4$ mm circle, covering the $23.5 \times 15.7$ mm Foveon X3 sensor (diagonal $\approx 28.26$ mm).
5. **Aspherical surface count.** Example 4 has exactly one aspherical surface (surface 9, the rear of L5). Sigma's marketing materials describe the production lens as using "one aspherical element," consistent with this embodiment — and distinguishing it from Examples 1–3, which employ two aspherical surfaces.
6. **High-refraction element count.** The production lens is described as using "three high-refraction elements." Example 4 contains three elements with $n_d > 1.8$: L1 ($n_d = 1.88300$), L4 ($n_d = 1.88300$), and L8 ($n_d = 1.91082$).
7. **Patent timing.** The filing date (January 2012) predates the DP2 Merrill's market introduction later that year, consistent with typical Sigma patent-to-product lead times.
8. **MFD.** The production lens focuses to 280 mm (0.28 m). The patent documents focusing to 1000 mm, but the front-group unit-focus mechanism can be extended to shorter distances without structural change; the 1000 mm data point is a patent convention, not a mechanical limit.

Example 4 is selected over the other six embodiments because it is the only one satisfying all four production-matching criteria simultaneously:

- **Aspherical count:** Examples 1–3 each use two aspherical surfaces (S1 and S9), inconsistent with the marketed "one aspherical element." Examples 4–7 each use one aspherical surface. → Examples 1–3 eliminated.
- **Focal length:** Example 5 ($f = 33.29$ mm) and Example 6 ($f = 26.86$ mm) deviate from the marketed 30 mm by more than any reasonable scaling allowance. → Examples 5 and 6 eliminated.
- **Group count:** Example 7's G1A sub-group contains two air-separated elements (L1 and L2 with a 0.67 mm air gap, per ¶0083), producing 7 air-separated groups rather than the marketed 6. → Example 7 eliminated.
- **High-refraction elements:** Among the remaining candidates, only Example 4 has three elements with $n_d > 1.8$ (L1, L4, L8). Examples 1 and 3 have no elements above $n_d = 1.773$; Example 2 has only two ($n_d > 1.8$: L4 and L8, but not L1).

Example 4 uniquely satisfies all four criteria.


## Optical Architecture

The design is a **telephoto-type** imaging system with a positive front group (G1) followed by a negative rear group (G2). The telephoto ratio — defined as the ratio of total optical track to effective focal length — is approximately 1.35, indicating meaningful but not extreme longitudinal compaction. This is a deliberate trade-off: the patent text (¶0022) explains that the telephoto configuration was chosen over the retrofocus, triplet, and double-Gauss types to achieve compactness while maintaining image-side telecentricity for sensor compatibility.

### Group structure

The lens comprises two principal groups and five sub-assemblies:

| Group | Elements | Configuration | Focal length |
|-------|----------|---------------|-------------|
| G1A (front sub-group) | L1 + L2 (cemented) | Positive doublet | +39.05 mm |
| Aperture stop | — | Between G1A and G1B | — |
| G1B (rear sub-group, part 1) | L3 + L4 (cemented) | Negative–positive doublet | — |
| G1B (rear sub-group, part 2) | L5 (singlet, 1× asph) | Biconvex positive | — |
| G1B combined | L3 + L4 + L5 | Positive group | +29.90 mm |
| G1 combined | L1–L5 | Positive | +22.94 mm |
| G2 | L6, L7, L8 (all air-spaced) | Negative | −61.01 mm |

### Power distribution

The system's overall positive power is concentrated in G1, which carries $f_{\text{G1}} = 22.94$ mm. G2 acts as a negative relay, diverging the converging cone from G1 to extend the back focal distance while maintaining manageable exit angles for the sensor. The ratio $f_1/f = 0.775$ places the design comfortably within the patent's conditional expression (1): $0.54 < f_1/f < 1.09$.

### Concentric symmetry

A defining feature of the design is the quasi-symmetric arrangement of G1A and G1B around the aperture stop. The last surface of G1A ($R_3 = +17.50$ mm, concave toward the image) and the first surface of G1B ($R_5 = -15.47$ mm, concave toward the object) face each other across the stop with nearly matched curvatures. This concentricity enables cancellation of off-axis aberrations — coma, distortion, and lateral color — between the two halves of G1, as described in ¶0023. The residual aberrations presented to G2 are substantially smaller than either sub-group would produce individually, which is critical because G2's negative power magnifies any uncorrected residuals.


## Element-by-Element Analysis

### L1 — Biconvex Positive (G1A front element)

$n_d = 1.88300$, $\nu_d = 40.80$. Glass: S-LAH58 (OHARA) — high-index lanthanum glass. $f = +15.9$ mm.

L1 is a strongly positive biconvex element ($R_1 = +15.36$ mm, $R_2 = -151.19$ mm) that serves as the system's primary collector. Its high refractive index ($n_d = 1.883$) achieves strong positive power with moderate surface curvatures, suppressing Petzval contribution per unit of optical power (Petzval scales as $\phi/n_d$ for a thin element in air). The rear surface ($R_2 = -151.19$ mm) is nearly flat, making L1 approximately plano-convex in character — this bending is close to the minimum-spherical-aberration shape for a positive singlet, concentrating refraction at the front surface where the beam diameter is largest and marginal-ray angles are most manageable.

This element is all-spherical in Example 4. In Examples 1–3, the corresponding front surface carries an aspherical correction; Example 4 achieves comparable performance with spherical surfaces only on L1 by shifting the aspherical correction budget entirely to L5's rear surface.

### L2 — Biconcave Negative (G1A rear element)

$n_d = 1.67270$, $\nu_d = 32.17$. Glass: S-TIM25 (OHARA) — short flint. $f = -23.3$ mm.

L2 is cemented to L1, forming the G1A doublet. Its surfaces ($R_1 = -151.19$ mm, $R_2 = +17.50$ mm) are formally biconcave, though the nearly flat junction radius ($R_1 = -151.19$ mm) gives the element an effectively plano-concave character. The primary role of this cemented interface is chromatic correction rather than power splitting: the Abbe number difference $\Delta\nu_d = 8.63$ between L1 and L2 provides achromatic balancing for the doublet. The rear surface $R_2 = +17.50$ mm is the strongly concave surface that faces the stop, establishing the first half of the concentric symmetry.

The flint glass S-TIM25 has moderate dispersion ($\nu_d = 32.17$), paired with L1's S-LAH58 ($\nu_d = 40.80$). This is a relatively narrow Abbe spread for a cemented achromat — the doublet is not strongly achromatized. Instead, the pairing is tuned primarily for monochromatic aberration balance: L2's negative power partially offsets L1's spherical aberration contribution while the cemented interface avoids ghost reflections.

### L3 — Symmetric Biconcave Negative (G1B, cemented front)

$n_d = 1.69895$, $\nu_d = 30.05$. Glass: S-TIM28 (OHARA) — dense short flint. $f = -11.0$ mm.

L3 has a remarkable property: it is **exactly symmetric**, with $R_5 = -15.47$ mm and $R_6 = +15.47$ mm. A symmetric biconcave element generates no coma or astigmatism for an axial beam, placing the entire burden of these aberrations on adjacent elements where they can be controlled more precisely. The strong negative power ($f = -11.0$ mm) of L3 makes it the dominant Petzval-flattening element within G1; its front surface alone contributes $-0.0266$ mm$^{-1}$ to the Petzval sum, one of the two largest negative contributions in the system (the other being L7's front surface at $-0.0280$ mm$^{-1}$).

L3 is cemented to L4 to form the G1B doublet. S-TIM28 is a dense short flint with low Abbe number ($\nu_d = 30.05$); L4's S-LAH58 ($\nu_d = 40.80$) has lower dispersion, and the $\Delta\nu_d = 10.75$ difference provides partial chromatic balancing within the doublet.

### L4 — Biconvex Positive (G1B, cemented rear)

$n_d = 1.88300$, $\nu_d = 40.80$. Glass: S-LAH58 (OHARA) — same glass as L1. $f = +15.3$ mm.

L4 ($R_6 = +15.47$ mm, $R_7 = -94.35$ mm) is the positive partner of the L3–L4 cemented doublet in G1B. Together, the doublet has a combined positive power that, with L5, gives G1B its overall $f = +29.9$ mm focal length. The Abbe number difference within the doublet ($\Delta\nu_d = 10.75$) is slightly larger than in the G1A doublet, providing somewhat stronger chromatic correction post-stop.

The use of the same glass (S-LAH58) in both L1 and L4 is typical of designs that exploit stop-symmetry: identical glass types on both sides of the stop facilitate cancellation of lateral chromatic aberration, because the wavelength-dependent deviation produced by L1/L2 before the stop is mirrored by L3/L4 after it.

### L5 — Biconvex Positive, rear surface aspherical (G1B singlet)

$n_d = 1.77250$, $\nu_d = 49.47$. Glass: S-LAL59 (OHARA, probable) — lanthanum crown. $f = +19.8$ mm.

L5 ($R_8 = +34.82$ mm, $R_9 = -26.18$ mm*) is the only element in the design with an aspherical surface. Its rear surface (S9) carries the aspherical correction described below. L5 contributes significant positive power ($f = +19.8$ mm) and is the last element of G1 before the air gap to G2. Its position at the rear of G1, where the marginal ray height is decreasing and the chief ray height is increasing, makes it effective for controlling both spherical aberration (via the marginal ray) and field curvature (via the chief ray).

The glass S-LAL59 is a high-index lanthanum crown ($n_d = 1.773$, $\nu_d \approx 49.6$). The slightly lower Abbe number compared to a conventional crown (such as BK7 at $\nu_d = 64$) means L5 contributes some residual chromatic aberration, but its high index keeps surface curvatures manageable for the strongly positive power required at this position.

### L6 — Negative Meniscus, convex to object (G2 front element)

$n_d = 1.58144$, $\nu_d = 40.89$. Glass: S-TIM2 (OHARA) — light flint. $f = -107.0$ mm.

L6 ($R_{10} = +150.15$ mm, $R_{11} = +43.88$ mm) is a weakly negative meniscus that begins the G2 diverging relay. Its power is intentionally weak ($f = -107.0$ mm) to avoid introducing large aberrations at this position, where the beam has already converged significantly. L6 primarily serves a field-flattening role: its Petzval contribution ($-0.006$ mm$^{-1}$, combining both surfaces) gently bends the image surface toward flatness.

The large air gap following L6 ($d_{11} = 5.46$ mm) is the widest spacing in the system. This separation gives the chief ray substantial lateral displacement between L6 and L7, enabling the remaining G2 elements to attack field aberrations independently of axial ones.

### L7 — Negative Meniscus, concave to object (G2 middle element)

$n_d = 1.53172$, $\nu_d = 48.84$. Glass: S-TIL6 (OHARA) — titanium flint, low-index. $f = -23.6$ mm.

L7 ($R_{12} = -12.38$ mm, $R_{13} = -1000.00$ mm) is the strongest negative element in G2 ($f = -23.6$ mm) and the primary field-correcting lens. Its front surface ($R = -12.38$ mm) has the tightest radius in the entire rear group, generating significant negative Petzval contribution ($-0.028$ mm$^{-1}$). The rear surface is effectively flat ($R = -1000$ mm), making L7 nearly plano-concave.

The relatively low refractive index ($n_d = 1.532$) is unusual for a strongly curved element, but it is deliberate: a lower index at high curvature produces more Petzval correction per unit of optical power, because the Petzval sum scales as $\phi/(n \cdot n')$. Using a lower-index glass amplifies the Petzval-flattening effect relative to the element's contribution to other aberrations.

### L8 — Biconvex Positive (G2 rear element)

$n_d = 1.91082$, $\nu_d = 35.25$. Glass: S-LAH79 (OHARA) — very high-index lanthanum glass. $f = +31.1$ mm.

L8 ($R_{14} = +63.82$ mm, $R_{15} = -49.10$ mm) is the final optical element before the image plane. It is strongly positive ($f = +31.1$ mm) and serves two purposes: it bends the peripheral ray bundles back toward the optical axis to achieve image-side quasi-telecentricity (controlling the exit angle for the Foveon sensor), and it contributes positive Petzval to partially offset L7's strong negative contribution, keeping the net Petzval sum small and positive.

S-LAH79 is the highest-index glass in the system ($n_d = 1.911$). At this position near the image plane, where both marginal and chief rays are at significant heights, a high-index glass minimizes surface curvatures and the associated higher-order aberrations that would otherwise degrade corner performance. The moderate Abbe number ($\nu_d = 35.25$) places it in the flint regime by classical dispersion criteria, though its lanthanum chemistry gives it optical properties distinct from traditional flint glasses; its chromatic contribution is balanced against L7's contribution in the opposite sense.


## Glass Identification and Selection

The design uses a palette of six distinct glasses, all from the OHARA catalog (consistent with Sigma's established supply chain for Japanese-designed optics). The identifications are based on $n_d$/$\nu_d$ matching against published OHARA catalogs.

| Element | $n_d$ | $\nu_d$ | Glass | Vendor | Role | Confidence |
|---------|-------|---------|-------|--------|------|------------|
| L1, L4 | 1.88300 | 40.80 | S-LAH58 | OHARA | High-index lanthanum (LaH) | Exact ($\Delta\nu_d \leq 0.04$) |
| L2 | 1.67270 | 32.17 | S-TIM25 | OHARA | Short flint | Exact ($\Delta\nu_d \leq 0.07$) |
| L3 | 1.69895 | 30.05 | S-TIM28 | OHARA | Dense short flint | Exact |
| L5 | 1.77250 | 49.47 | S-LAL59 | OHARA | Lanthanum crown (LaL) | Probable ($\Delta\nu_d \approx 0.15$) |
| L6 | 1.58144 | 40.89 | S-TIM2 | OHARA | Light flint | Probable ($\Delta\nu_d \approx 0.14$) |
| L7 | 1.53172 | 48.84 | S-TIL6 | OHARA | Titanium flint, low-index | Exact (code 532/489) |
| L8 | 1.91082 | 35.25 | S-LAH79 | OHARA | Very high-index lanthanum (LaH) | Exact |

### Chromatic strategy

The design does not pursue apochromatic correction. No ED or anomalous-dispersion glasses are used. Instead, chromatic aberration is managed through the stop-symmetric doublet architecture: the G1A doublet (L1/L2) and the G1B doublet (L3/L4) generate lateral color in opposite senses relative to the stop, producing substantial cancellation. The moderate Abbe spreads within each doublet ($\Delta\nu_d \approx 8.6$ and $10.8$ respectively) indicate that axial color correction is distributed rather than concentrated — neither doublet is strongly achromatized in isolation, but their combined action with the G2 field group achieves adequate chromatic performance for an APS-C sensor at $f/2.8$.

### Refractive index strategy

The three highest-index elements (L1, L4, L8, all $n_d > 1.88$) are positioned where they carry the most optical power. This is the core of the "three high-refraction elements" that Sigma highlights in marketing materials. High-index glass at power-bearing surfaces reduces curvatures and, through the Petzval sum formula $\Sigma \phi_i / (n_i \cdot n_i')$, suppresses field curvature per unit of power. The net Petzval sum of the system is $+0.0028$ mm$^{-1}$, corresponding to a Petzval radius of approximately $357$ mm — well-corrected for the $28.4$ mm image circle.

### Glass correction note

The original version of this analysis misidentified L7 as S-NSL36 (OHARA). S-NSL36 has $n_d = 1.51742$, $\nu_d = 52.43$ (code 517/524), which disagrees with the patent's $n_d = 1.53172$, $\nu_d = 48.84$ by $\Delta n_d = 0.013$ — well outside acceptable tolerance. The correct identification is S-TIL6 (OHARA), code 532/489, a titanium flint glass whose catalog properties match the patent values.


## Focus Mechanism

The lens uses **front-group unit focusing**: the entire G1 assembly (L1–L5 plus the aperture stop) translates forward along the optical axis as focus shifts from infinity to close distances. G2 (L6–L8) remains stationary.

| Parameter | Infinity | 1000 mm |
|-----------|----------|---------|
| Object distance (to S1) | $\infty$ | 959.6 mm |
| Air gap d9 (L5 rear → L6 front) | 2.32 mm | 2.88 mm |
| EFL | 29.60 mm | 29.26 mm |
| F-number | 2.86 | 2.91 |
| Total length | 39.83 mm | 40.39 mm |
| $2\omega$ (full field) | 52.05° | 51.12° |

The focus travel from infinity to 1000 mm is $0.56$ mm. The EFL shortens slightly at closer focus ($29.60 \rightarrow 29.26$ mm) due to the change in conjugate — a normal thick-lens effect in unit-focus systems.

The production lens focuses to 280 mm (0.28 m). The patent publishes only the infinity and 1000 mm positions, so the full focus travel to MFD is not directly available from the prescription. The close-focus gap $d_9$ at MFD was solved via paraxial finite-conjugate trace, yielding $d_9 \approx 4.65$ mm — a total focus travel of $2.33$ mm from the infinity position. Since G2 remains fixed in configuration, the image-side exit angles remain approximately stable across the focus range — an important property for the Foveon X3 sensor, whose layered structure is sensitive to steep incidence angles at the periphery.

The patent describes this focus mechanism in ¶0019 (general description) and ¶0065 (Example 4): "前記第１レンズ群Ｇ１は、無限遠から近距離へのフォーカシングに際して光軸に沿って物体側に移動する" — G1 moves toward the object side along the optical axis when focusing from infinity to close range.


## Aspherical Surface

Example 4 has a single aspherical surface: **surface 9**, the rear face of L5.

### Aspheric equation

The patent (¶0046) defines the aspherical sag as:

$$Z(h) = \frac{h^2 / R}{1 + \sqrt{1 - (1+K)(h/R)^2}} + A_4 h^4 + A_6 h^6 + A_8 h^8 + A_{10} h^{10}$$

where $h$ is the radial distance from the optical axis, $R$ is the base radius of curvature, $K$ is the conic constant, and $A_4$ through $A_{10}$ are the polynomial coefficients.

### Coefficients for surface 9

| Parameter | Value |
|-----------|-------|
| $R$ | $-26.1800$ mm |
| $K$ | $0.0000$ (spherical base) |
| $A_4$ | $+5.92280 \times 10^{-5}$ |
| $A_6$ | $-9.44710 \times 10^{-9}$ |
| $A_8$ | $0$ |
| $A_{10}$ | $0$ |

The conic constant is zero, so the base curve is a standard sphere. All aspherical correction comes from the even-order polynomial terms. Only $A_4$ and $A_6$ are non-zero; $A_8$ and $A_{10}$ are exactly zero, making this a relatively simple aspherical profile.

### Aspherical departure

The aspherical departure from the spherical base curve at various beam heights:

| $h$ (mm) | $A_4$ term ($\mu$m) | $A_6$ term ($\mu$m) | Total departure ($\mu$m) |
|----------|---------------------|---------------------|--------------------------|
| 2.0 | +0.95 | −0.001 | +0.95 |
| 3.0 | +4.80 | −0.007 | +4.79 |
| 4.0 | +15.16 | −0.039 | +15.12 |
| 5.0 | +37.02 | −0.148 | +36.87 |
| 6.0 | +76.76 | −0.441 | +76.32 |

The $A_4$ term dominates at all practical aperture heights. The $A_6$ term provides a small negative correction at larger heights, preventing overcorrection at the zone boundary. The total departure reaches approximately $76$ $\mu$m at $h = 6$ mm, which is a moderate aspherical departure — well within the range of precision glass molding (PGM) or polished glass manufacture.

### Correction role

Surface 9 is the concave rear surface of L5 ($R = -26.18$ mm). The positive $A_4$ coefficient adds sag in the same direction as the base sphere at the paraxial zone, but because this is a concave surface ($R < 0$), the net effect is to **reduce the surface's curvature at the periphery** relative to the base sphere. In aberration terms, this modifies the spherical aberration contribution of the surface at the rim of the beam, providing the designer a degree of freedom to balance the system's total spherical aberration budget — particularly important at $f/2.8$ where marginal-ray heights are substantial. The result, visible in the patent's aberration plots (Fig. 17), is a well-controlled spherical aberration profile across the full aperture.

The choice to place the asphere on L5's rear surface — rather than on L1's front as in Examples 1–3 — is a manufacturing simplification. L5 is a smaller element than L1, and its rear surface sees a converging beam of reduced diameter, allowing the aspherical departure to be achieved with less absolute sag excursion. The trade-off is slightly less direct control over marginal-ray aberrations (which are larger at the front of the lens), but Example 4's aberration plots in the patent show performance comparable to the two-asphere designs.

Given the moderate departure and the glass type (S-LAL59, a moldable lanthanum crown), this surface is likely manufactured as a precision glass-molded (PGM) asphere.


## Conditional Expressions

The patent defines four conditional expressions. Example 4 satisfies all of them:

| Expression | Range | Example 4 value | Tightened range | Status |
|------------|-------|-----------------|-----------------|--------|
| (1) $f_1/f$ | $0.54$–$1.09$ | $0.775$ | $0.65$–$0.95$ | ✓ (within tightened) |
| (2) $BF/d_{G2}$ | $0.41$–$0.98$ | $0.562$ | $0.50$–$0.85$ | ✓ (within tightened) |
| (3) $f_{1A}/f_{1B}$ | $0.57$–$2.14$ | $1.306$ | $0.70$–$1.95$ | ✓ (within tightened) |
| (4) $f_1/f_2$ | $-0.59$–$-0.20$ | $-0.376$ | $-0.50$–$-0.25$ | ✓ (within tightened) |

All four values fall within both the broad and tightened ranges specified in the patent claims (¶0025–¶0043), indicating that Example 4 sits near the center of the design space.

**Expression (1)** governs the balance between compactness and exit-angle control. At $f_1/f = 0.775$, G1 carries enough power to keep the total length short without creating excessively steep exit angles that would reduce sensor sensitivity at the corners.

**Expression (2)** controls the ratio of back focal distance to G2's axial thickness. At $0.562$, there is adequate space behind G2 for the IR-cut filter and cover glass ($BF_{\text{air-equiv}} \approx 6.7$ mm) without making G2 so thick that it adds unnecessary length.

**Expression (3)** balances the power split within G1 between the sub-groups flanking the stop. At $f_{1A}/f_{1B} = 1.306$, G1A is weaker than G1B, which biases the system toward better image-side telecentricity (since G1B, being closer to G2, has more influence on the exit ray geometry).

**Expression (4)** controls Petzval balance between G1 and G2. At $f_1/f_2 = -0.376$, the negative power of G2 is sufficient to flatten the field without overcorrecting into a backward-curving image surface.


## Petzval Sum and Field Correction

The net Petzval sum of the system is $+0.00280$ mm$^{-1}$, corresponding to a Petzval radius of approximately $357$ mm. For the image semi-diagonal of $14.2$ mm, this implies a Petzval sag of only $\sim 0.28$ mm — negligible for an APS-C sensor. The flat field is achieved through a distributed correction strategy rather than a single field-flattening element:

The dominant positive Petzval contributors are L1 ($+0.031$ mm$^{-1}$) and L5 ($+0.029$ mm$^{-1}$ combined surfaces). The dominant negative contributors are L3 ($-0.027$ mm$^{-1}$ front surface) and L7 ($-0.028$ mm$^{-1}$ front surface). These four elements account for the bulk of the Petzval budget, and their contributions nearly cancel. L8's positive contribution ($+0.017$ mm$^{-1}$) is balanced against L6's and the remaining L7 surface to reach the final small positive residual.


## Design Heritage and Context

The patent (¶0021–¶0024) explicitly positions this design against four classical alternatives for wide-angle lenses: retrofocus, triplet, double Gauss, and telephoto. The inventor argues that the retrofocus type produces excessive total length, the triplet struggles with field curvature at large apertures, the double Gauss is difficult to make compact, and the standard telephoto (without stop-symmetric correction) suffers from distortion and lateral color.

The solution is a hybrid: a telephoto power distribution ($f_1 > 0$, $f_2 < 0$) combined with a stop-symmetric correction strategy borrowed from the double Gauss. The G1A and G1B sub-groups flanking the stop behave like a modified Gauss pair, canceling off-axis aberrations, while G2 acts as a field-flattening diverger that extends the back focal distance for filter clearance and controls image-side telecentricity.

This architecture is specific to the requirements of a compact, fixed-lens camera with a large sensor — a design space where the lens must be short enough to keep the camera body thin, yet must cover an APS-C image circle with exit angles compatible with the Foveon X3 sensor's angular sensitivity characteristics. The Sigma dp2 Quattro (2014), which shares identical optical specifications (30 mm, f/2.8, 8 elements / 6 groups, MFD 280 mm, maximum magnification 1:7.6), likely uses the same or a closely related optical design, though this has not been independently confirmed.


## Verification Summary

The following quantities were independently computed via paraxial ray trace (y-nu method) from the Example 4 prescription and compared against the patent's published values:

| Quantity | Patent value | Computed value | Match |
|----------|-------------|----------------|-------|
| EFL (infinity) | 29.60 mm | 29.603 mm | ✓ |
| $f_{\text{G1}}$ | 22.94 mm | 22.944 mm | ✓ |
| $f_{\text{G1A}}$ | 39.05 mm | 39.045 mm | ✓ |
| $f_{\text{G1B}}$ | 29.9 mm | 29.904 mm | ✓ |
| $f_{\text{G2}}$ | −61.01 mm | −61.005 mm | ✓ |
| $f_1/f$ | 0.78 | 0.775 | ✓ |
| $BF/d_{G2}$ | 0.56 | 0.562 | ✓ |
| $f_{1A}/f_{1B}$ | 1.31 | 1.306 | ✓ |
| $f_1/f_2$ | −0.38 | −0.376 | ✓ |
| Petzval sum | — | +0.00280 mm$^{-1}$ | — |
| Total length | 39.83 mm | 39.830 mm | ✓ |

All values agree within rounding of the patent's stated precision. Element focal lengths were computed via thick-lens-in-air formula and used in the element-by-element analysis. The close-focus gap at MFD = 0.28 m ($d_9 \approx 4.65$ mm) was solved via paraxial finite-conjugate trace and is consistent with the patent's published 1000 mm data point ($d_9 = 2.88$ mm) after accounting for the extended focus travel.


## Sources

1. JP 2013-156459 A (2013-08-15), "結像光学系," Sigma Corporation.
2. Sigma DP2 Merrill product specifications, https://www.sigma-global.com/en/cameras/dp2-merrill/
3. OHARA optical glass catalog — consulted for $n_d$/$\nu_d$ cross-reference and 6-digit glass code verification.
4. Amateur Photographer, "Sigma DP2 Merrill review" (2012) — source for "one aspherical element and three high-refraction elements" claim, attributed to Sigma marketing materials.
