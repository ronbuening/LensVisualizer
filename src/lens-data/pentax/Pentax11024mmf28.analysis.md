## Patent Reference and Design Identification

**Patent:** US 4,223,982
**Inventor:** Takahiro Sugiyama
**Assignee:** Asahi Kogaku Kogyo Kabushiki Kaisha (Tokyo, Japan)
**Priority:** JP 53-6031, January 23, 1978
**Filed:** January 9, 1979
**Granted:** September 23, 1980
**Title:** Semi-Wide Angle Photographic Lens Having Short Overall Length
**Embodiment analyzed:** Example 2

The prescription transcribes **Example 2** of the patent. The identification of this embodiment with the production Pentax-110 24mm f/2.8 lens rests on the following convergent evidence:

1. **Element and group count.** The patent describes six elements in five components; all three examples share this count, and the production lens is documented as 6 elements / 5 groups.
2. **Focal length.** The patent is normalized to $F = 100$. Scaling by $\times 0.24$ yields $f = 24.0$ mm, matching the marketed focal length exactly.
3. **Aperture ratio.** All three examples specify 1:2.8, matching the production lens.
4. **Half-angle of view.** The patent states $\pm 24°$. For the 110 format (13 × 17 mm, diagonal 21.4 mm), $\omega = \arctan(10.70 / 24.0) = 24.0°$, an exact match.
5. **Assignee and timing.** The patent is assigned to Asahi Kogaku Kogyo (Pentax) with a 1978 priority date; the Pentax Auto 110 system was announced in 1978 and shipped in 1979.
6. **Designer attribution.** Takahiro Sugiyama is documented as a wide-angle specialist at Asahi Optical. The compact semi-wide-angle formula in this patent is consistent with his known body of work.
7. **Back focal distance.** Example 2 yields BFD = $95.951$ ($\times 0.24 = 23.03$ mm), which is compatible with the Pentax-110 mount's 27 mm flange distance after accounting for the mirror box and film gate offset.
8. **Body-mounted rear stop compatibility.** The production Auto 110 body uses a combined shutter/aperture behind the lens mount. Example 2's long back focal distance leaves room to model that production rear stop while preserving the patent prescription from L1 through L6.
9. **Example 2 specifically.** Among the three examples, Example 2 has the lowest Petzval sum ($0.195 \times F$ vs. $0.208$ and $0.244$), the most compact total track ($\Sigma d = 50.62 = 0.51 F$), and employs the highest-index glasses (L2 and L6 use $n_d = 1.80610$, $\nu_d = 40.9$ rather than the $n_d = 1.76200$ of Examples 1 and 3). These traits — optimal field curvature, minimum size, and maximum use of costly high-index lanthanum glass — are consistent with a production-selected embodiment for a premium miniature system.

## Optical Architecture

The Pentax-110 24mm f/2.8 is a compact six-element semi-wide-angle design with the power sequence **negative – positive – negative – positive (cemented) – positive**. This arrangement is not a classical retrofocus (the back focal distance of $0.96 F$ is slightly less than the focal length, not greater), nor is it a symmetric double-Gauss. It is a purpose-built compact semi-wide-angle formula in which a strong positive front component (L1 + L2, combined $f_{1,2} = 71.35 = F/1.40$) is followed by a negative diverger (L3), a weakly positive achromatic cemented doublet (L4 + L5, $f = +201.1$), and a final positive collector (L6, $f = +120.8$). The overall topology — positive front group, negative center, positive rear group — places the design in the broad family of "positive-negative-positive" triplet-derived systems, though with six elements distributed across five components it is substantially more complex than a classical triplet. The negative front meniscus L1 bends incoming off-axis bundles inward to keep the physical diameter small, while L2 provides the bulk of the front group's converging power.

The combined focal length of the first three components is $F_{1,2,3} = -427.0$, a very weak net divergence that places the burden of final convergence entirely on the rear group (L4 + L5 + L6). This long-lever arrangement is what makes the exceptionally long back focal distance possible: at $0.96 F$, it nearly equals the focal length despite the lens having only $0.51 F$ total track. The patent text identifies this BFD as a specific design goal, as the Pentax-110 is a single-lens reflex camera requiring a mirror box clearance of approximately 20 mm (at the $f = 24$ mm production scale).

The total track of $0.51 F$ (12.15 mm in production) makes this one of the most compact semi-wide-angle SLR lens designs of its era. At a production weight of 13 grams and an overall barrel length of approximately 13 mm from the mount flange, the lens is among the smallest interchangeable-lens optics ever manufactured.

There are **no aspherical surfaces** in this design. The patent text, prescription tables, and claims make no mention of aspherical coefficients, and no aspherical surface tables are provided for any of the three examples. This is consistent with a late-1970s design optimized for low-cost, high-volume manufacture: all six elements are conventional polished spherical glass.

## Element-by-Element Analysis

### L1 — Negative Meniscus, Convex to Object

$n_d = 1.72825$, $\nu_d = 28.5$. Glass: S-TIH10 (OHARA) — dense flint. $f = -150.6$ (F = 100 units); $-36.1$ mm in production.

L1 is a negative meniscus with its convex surface directed toward the object ($R_1 = +76.53$, $R_2 = +44.06$; both radii positive, forming a meniscus that bulges toward the object side). Its role is to pre-bend the oblique ray bundles inward before they enter the strongly positive L2. By placing a negative element at the front, the designer reduces the diameter required of L2 and subsequent elements, directly contributing to the compact form factor. The dense flint glass ($\nu_d = 28.5$) provides high dispersion, which is deliberately paired against L2's lower dispersion to achieve partial chromatic correction across the front group. The meniscus shape minimizes coma introduction by keeping the element approximately concentric to the stop — a standard technique in wide-angle front groups.

This glass ($n_d = 1.72825$, $\nu_d = 28.5$) is one of the common dense-flint coordinates in optical design. In Examples 1 and 3 of the patent it is shared with L4, but Example 2 substitutes the higher-index 762265 titanium-flint class for L4, gaining refractive index in the cemented doublet.

### L2 — Biconvex Positive

$n_d = 1.80610$, $\nu_d = 40.9$. Glass: S-LAH53 (Ohara) / NBFD3 (Hoya) — lanthanum dense flint. $f = +48.5$ (F = 100); $+11.6$ mm in production.

L2 is the most powerful element in the system and the engine of the front positive group. With $R_1 = +49.22$ and $R_2 = -173.55$, it is a biconvex lens that is strongly curved on its front surface and nearly flat on the rear, giving it a plano-convex-like bending. This shape minimizes the amount of spherical aberration generated per unit of converging power — the classical minimum-aberration bending for a single positive element in converging light.

The lanthanum dense flint glass ($n_d = 1.80610$) is the highest-index material in Example 2. Its high refractive index allows the element to achieve the required convergence with shallower surface curvatures than a lower-index crown would need, directly reducing higher-order spherical aberration. The moderate Abbe number ($\nu_d = 40.9$) means that this is not a low-dispersion glass, and its chromatic contribution must be balanced elsewhere — primarily by the L3 crown element downstream and the L4 + L5 cemented doublet.

Together, L1 and L2 form the first two components and yield a combined focal length $F_{1,2} = 71.35 = F/1.40$. The patent's Condition (1) requires $F/1.7 < F_{1,2} < F/1.1$ (i.e., $58.8 < F_{1,2} < 90.9$), and the value of 71.35 sits comfortably within this range. A front group that is too weak (high $F_{1,2}$) would require excessively strong rear elements and degrade coma and distortion; one that is too strong (low $F_{1,2}$) would not produce sufficient back focal distance.

### L3 — Biconcave Negative

$n_d = 1.58913$, $\nu_d = 61.1$. Glass: SK5 (Schott) / BACD5 (Hoya) — barium crown. $f = -51.6$ (F = 100); $-12.4$ mm in production.

L3 is a biconcave element ($R_5 = -48.98$, $R_6 = +82.29$) that diverges the beam converged by L1 + L2. Its crown-type glass ($\nu_d = 61.1$) makes it the primary axial color corrector in the front half of the system: while L2 converges all wavelengths and bends blue more than red (positive chromatism), L3's divergence reverses part of this, and its high Abbe number means it introduces relatively less secondary dispersion per unit of power than a flint would.

The strong negative power of L3 is critical to two of the patent's design goals. First, it pushes the combined focal length of the first three components to a very large negative value ($F_{1,2,3} = -427.0$), satisfying Condition (3) ($|F_{1,2,3}| > F/0.3 = 333.3$). This condition ensures that the rear group can be moderately powered rather than excessively strong, keeping coma and spherical aberration under control. Second, the Petzval field curvature contributions of L3's two surfaces are strongly negative ($-0.00757$ and $-0.00451$ respectively, summing to $-0.01208$ of the system's $+0.00196$ total), making L3 the single largest contributor to Petzval flattening in the design. Without this element's field-flattening contribution, the Petzval surface would curve inward steeply, degrading corner sharpness on the 110 format.

The air gap $d_4 = 6.20$ between L2 and L3 is governed by Condition (4): $0.05 F < d_4 < 0.15 F$ (i.e., $5.0 < d_4 < 15.0$). The patent text notes that this gap relates to both overall length and chromatic aberration of magnification — making the gap too small tightens the Petzval sum constraint excessively, while making it too large increases the residual lateral chromatic aberration from the front group that must be corrected by the rear elements.

### L4 + L5 — Cemented Achromatic Doublet (Fourth Component)

#### L4 — Biconcave Negative (front element of doublet)

$n_d = 1.76182$, $\nu_d = 26.6$. Glass: S-TIH14 (OHARA) / FD140-N-SF14 class — titanium dense flint. $f = -47.5$ (F = 100 units); $-11.4$ mm in production. These are standalone in-air focal lengths; in the cemented context (where the rear medium is L5's glass rather than air), L4's effective contribution is weaker ($f_{\text{cem}} \approx -85.6$).

#### L5 — Biconvex Positive (rear element of doublet)

$n_d = 1.77250$, $\nu_d = 49.6$. Glass: TAF1 (Hoya) / N-LAF34 (Schott) — lanthanum flint. $f = +42.2$ (F = 100 units); $+10.1$ mm in production. As with L4, the cemented-context effective focal length is longer ($f_{\text{cem}} \approx +64.9$) because the junction interface is nearly index-matched and contributes negligible refracting power.

L4 and L5 are cemented together along surface $r_8$ ($R = +84.16$) to form the fourth component, which the patent specifies has a positive resultant focal length. The combined doublet focal length is $f_{4,5} = +201.1$ (F = 100), or $+48.3$ mm in production — a weak positive power.

This doublet is an achromatic pair in the classic sense: L4's high-dispersion titanium flint ($\nu_d = 26.6$) is paired with L5's moderate-dispersion lanthanum flint ($\nu_d = 49.6$), which serves the crown role in the pair despite being technically classified as a flint by the $\nu_d = 50$ boundary. A paraxial chromatic verification using the cemented-context surface powers gives $\phi_4 / \nu_4 + \phi_5 / \nu_5 = -0.000128$, very close to zero, confirming that the doublet is designed to introduce near-zero longitudinal chromatic aberration of its own. The slight residual negative (undercorrected) value is deliberate: it compensates for the net positive chromatism contributed by the air-separated elements L2 and L6 elsewhere in the system.

The glass selection here is distinctive. L4 uses the 762265 titanium-flint class, now catalog-backed as OHARA S-TIH14, which achieves very high dispersion ($\nu_d = 26.6$) at a moderately high refractive index ($n_d = 1.76182$). Its partner L5 uses a lanthanum flint at ($n_d = 1.77250$, $\nu_d = 49.6$), matching TAF1 (Hoya) and N-LAF34 (Schott, $\nu_d = 49.62$) — the 0.02 difference in Abbe number is within the patent's single-decimal-place rounding. The near-equality of L4's and L5's refractive indices ($\Delta n_d = 0.01068$) means that the cemented interface $r_8$ is very weak optically ($\phi_8 = +0.000127$), contributing essentially zero Petzval curvature. This is a hallmark of a well-designed achromatic cemented pair: the interface corrects chromatic aberration without disturbing the field curvature balance.

### L6 — Positive Meniscus, Concave to Object

$n_d = 1.80610$, $\nu_d = 40.9$. Glass: S-LAH53 (Ohara) / NBFD3 (Hoya) — lanthanum dense flint. $f = +120.8$ (F = 100); $+29.0$ mm in production.

L6 is a positive meniscus with its concave surface directed toward the object ($R_{10} = -175.36$, $R_{11} = -63.53$; both radii negative, forming a meniscus that cups toward the object side). Its rear surface is the more steeply curved, providing the converging refraction that brings the beam to focus at the image plane. Using the same high-index lanthanum dense flint as L2, L6 benefits from the reduced curvature requirements that high-$n_d$ glass affords, minimizing higher-order aberrations in the converging beam near the image.

L6's moderate positive power ($f = +120.8$) is the final contributor to the system's overall convergence. Together with the L4 + L5 doublet, it forms the rear positive group that must compensate for L3's divergence and deliver the total system power. Because L6 is the closest element to the image plane (separated by only $d_9 = 0.41$ from L5 and followed by the long back focal distance), it acts as a field-flattening corrector: its Petzval contribution from the rear surface ($r_{11}$: $+0.00703$) is the single largest positive contribution in the system, partially canceling the Petzval flattening from L3 and restoring the balance to the system's net Petzval sum of $+0.00196$ ($0.195 \times F$, as reported by the patent).

The air gap between L5 and L6 is extremely small at $d_9 = 0.41$ (F = 100), or only 0.098 mm in production. This near-contact arrangement minimizes the separation between the chromatic-correcting doublet and the final power element, reducing the lateral color that would otherwise accumulate across a wider gap.

## Glass Identification and Selection

Example 2 uses four distinct glass types across six elements. The design employs two lanthanum-containing glasses (L2/L6 and L5) and two traditional flints (L1 and L3), with glass selection driven by the competing demands of compactness (requiring high index), chromatic correction (requiring appropriate Abbe pairing), and Petzval field-flattening.

| Element | $n_d$ | $\nu_d$ | Glass (Primary Match) | Class | Role |
|---------|-------|---------|----------------------|-------|------|
| L1 | 1.72825 | 28.5 | S-TIH10 (OHARA) | Dense flint | Negative meniscus; ray bending, coma control |
| L2 | 1.80610 | 40.9 | S-LAH53 (Ohara) / NBFD3 (Hoya) | Lanthanum dense flint | Main positive power; reduced SA via high index |
| L3 | 1.58913 | 61.1 | SK5 (Schott) / BACD5 (Hoya) | Barium crown | Negative diverger; Petzval flattener; axial color corrector |
| L4 | 1.76182 | 26.6 | S-TIH14 (OHARA) / FD140-N-SF14 class | Titanium dense flint | Doublet flint; high-dispersion chromatic partner |
| L5 | 1.77250 | 49.6 | TAF1 (Hoya) / N-LAF34 (Schott) | Lanthanum flint | Low-dispersion doublet partner (crown role) |
| L6 | 1.80610 | 40.9 | S-LAH53 (Ohara) / NBFD3 (Hoya) | Lanthanum dense flint | Rear positive collector; field flattener |

The chromatic strategy is distributed across the entire system rather than concentrated in a single achromatic pair. L2 (lanthanum dense flint, $\nu_d = 40.9$) and L3 (barium crown, $\nu_d = 61.1$) form an air-spaced partial achromatizing pair in the front group, while L4 ($\nu_d = 26.6$) and L5 ($\nu_d = 49.6$) form the cemented achromatic doublet in the rear. L2 and L6 share the same high-index lanthanum dense flint, providing symmetric chromatic contributions that bookend the system. L1's dense flint and L3's barium crown contribute additional chromatic terms whose balance was optimized as part of the full system design rather than in isolation.

The use of the 762265 titanium-flint class for L4 is notable. Titanium-containing flints were a relatively recent addition to glass catalogs in the late 1970s, offering high dispersion at higher refractive index than conventional dense flints like SF6. This allowed the cemented interface with L5 to be nearly index-matched ($\Delta n_d = 0.01068$), a technique that suppresses both Petzval contribution and higher-order chromatic terms from the cement surface.

## Focus Mechanism

The patent publishes only the infinity-focus prescription and does not provide close-focus variable gap data. This, combined with the production lens's simple helicoid barrel and the absence of any floating-element or inner-focus mechanism, identifies the Pentax-110 24mm f/2.8 as a **unit-focus** design: the entire optical assembly translates forward along the optical axis to focus on closer objects, with only the back focal distance changing.

The manufacturer-specified minimum focus distance is **0.35 m** (13.8 inches), measured from the film plane. At production scale ($f = 24$ mm), the focus extension computed via finite-conjugate paraxial ray trace is approximately 1.93 mm, yielding a close-focus BFD of 24.96 mm versus the infinity BFD of 23.03 mm.

The back focal distance increases from 23.03 mm (infinity) to approximately 24.96 mm (0.35 m). Since the Pentax-110 flange distance is 27 mm, the mirror box and film-gate offset account for approximately 4 mm, and the unit-focus extension simply increases the air gap between the rear of the lens barrel and the fixed body aperture/shutter plane. In the data file this is represented as the gap from L6's rear surface to the rear stop increasing from 2.50 mm to 4.43 mm, while the stop-to-image distance remains fixed at 20.53 mm.

## Aperture and Stop Position

The Pentax-110 system has an unusual aperture arrangement. The lens barrel itself contains no iris diaphragm. Instead, the aperture mechanism is integrated into the camera body as a rectangular scissor-type shutter/aperture assembly positioned immediately behind the lens mount. This combined shutter and aperture covers f/2.8 (wide open) through f/13.5 (minimum). The rectangular blade geometry produces a distinctive non-circular bokeh signature at intermediate apertures.

Because the body-mounted aperture is physically located behind the last lens element, the production effective aperture stop is at the rear of the optical assembly rather than between the lens groups as in a conventional SLR lens. This has implications for the aberration balance: the asymmetric stop placement means that the front group operates farther from the stop than the rear group, which shifts the distribution of off-axis aberrations (particularly coma and lateral color) compared to a centrally stopped design. The patent's aberration plots (Fig. 4) show well-controlled spherical aberration and distortion at f/2.8, with modest astigmatism at the field edge, but the patent does not explicitly state the stop plane used to generate those plots.

The data file therefore prioritizes the production truth: the `STO` surface is placed behind L6 in the back-focus space. At infinity focus, the S11-to-image BFD is split as 2.50 mm from L6 rear to the body stop and 20.53 mm from the stop to the image plane, preserving the patent's total 23.03 mm back focal distance. At close focus, only the L6-to-stop gap changes, because the optical assembly translates while the body shutter/aperture and film plane remain fixed.

The caveat is that US 4,223,982 publishes the lens prescription and aberration plots but not the exact production shutter plane. Any apparent stop reference in the patent figure should be treated as a design or drawing convention, not proof that the manufactured Auto 110 lens contained an inter-element diaphragm. The rear-stop placement in the diagram is therefore a production-informed model layered onto the patent prescription, rather than a literal transcription of a stop coordinate from the patent table.

## Conditional Expressions

The patent defines five conditional expressions governing the design. All are satisfied by Example 2:

| Condition | Inequality | Example 2 Value | Range | Status |
|-----------|-----------|-----------------|-------|--------|
| (1) | $F/1.7 < F_{1,2} < F/1.1$ | $F_{1,2} = 71.35$ | $58.82 – 90.91$ | Satisfied |
| (2) | $0.005 F < d_2 < 0.1 F$ | $d_2 = 2.49$ | $0.50 – 10.00$ | Satisfied |
| (3) | $\|F_{1,2,3}\| > F/0.3$ | $\|F_{1,2,3}\| = 426.99$ | $> 333.33$ | Satisfied |
| (4) | $0.05 F < d_4 < 0.15 F$ | $d_4 = 6.20$ | $5.00 – 15.00$ | Satisfied |
| (5) | $0.4 F < \Sigma d < 0.7 F$ | $\Sigma d = 50.62$ | $40.00 – 70.00$ | Satisfied |

Condition (1) governs the combined power of the front two components and controls the balance between back focal distance and coma/distortion correction. Example 2's value of $F/1.40$ sits near the stronger (lower) end of the range, reflecting the design's priority on achieving the longest possible BFD within the compact form.

Condition (3) constrains the combined focal length of the first three components to be very long (positive or negative), ensuring that the rear group carries the final convergence without excessive power concentration. Example 2's value of $-427$ is comfortably above the $333.3$ threshold.

Condition (5) is the compactness constraint. Example 2's total track of $0.51 F$ is very close to the lower bound of $0.40 F$, reflecting the extreme miniaturization required for the Pentax-110 format.

## Verification Summary

Paraxial ray trace (y-nu method, 11 refracting surfaces; rear `STO` inserted as a flat air plane) confirms the following against the patent's published values:

| Parameter | Computed | Patent | Δ |
|-----------|----------|--------|---|
| EFL | 99.987 | 100 | −0.013 |
| BFD | 95.940 | 95.951 | −0.011 |
| $F_{1,2}$ | 71.346 | 71.352 | −0.006 |
| $F_{1,2,3}$ | −427.181 | −426.985 | −0.196 |
| $\Sigma d$ | 50.62 | 50.62 | 0.00 |
| Petzval sum $\times F$ | 0.1956 | 0.195 | +0.001 |

All values agree to within rounding tolerance of the patent's published precision (two to three decimal places). The small discrepancies are consistent with intermediate rounding in the patent's own calculations.

**Element focal lengths** (thick-lens, in-air convention, F = 100 units):

| Element | $f$ (patent scale) | $f$ (production, mm) |
|---------|-------------------|---------------------|
| L1 | −150.6 | −36.1 |
| L2 | +48.5 | +11.6 |
| L3 | −51.6 | −12.4 |
| L4 | −47.5 | −11.4 |
| L5 | +42.2 | +10.1 |
| L6 | +120.8 | +29.0 |
| L4+L5 doublet | +201.1 | +48.3 |

**OCR note:** The patent scan renders $d_8$ (the center thickness of L5) as "0.04" in both the Example 2 table and the Claims section. This value is physically impossible (0.01 mm in production) and is inconsistent with the patent's own $\Sigma d = 50.62$ checksum. The correct reading is $d_8 = 10.04$, confirmed by the $\Sigma d$ match and by comparison with Examples 1 and 3, which have $d_8 = 10.74$ and $11.60$ respectively. The leading "1" was dropped during scanning or typesetting.

## Design Heritage and Context

The Pentax Auto 110 system, introduced in 1978, was the world's first (and remains the only) interchangeable-lens SLR system built around the 110 film format. The 13 × 17 mm frame is approximately the same size as a modern Micro Four Thirds sensor (17.3 × 13 mm), making these lenses a topic of renewed interest among mirrorless camera adapters. The 24mm f/2.8 was the standard (normal) lens of the system, equivalent to a 48 mm lens on 35 mm film.

The concept of a 110-format SLR reportedly originated at Sugaya Optical Company, which manufactured subminiature cameras and prototyped a 110 SLR before selling the concept to Asahi Optical (Pentax). The optical designs for the Pentax-110 lens system were developed in-house at Asahi by Takahiro Sugiyama, documented as a wide-angle design specialist.

The design's defining achievement is its combination of a very long back focal distance ($0.96 F$, required for the SLR mirror) with an extremely short total track ($0.51 F$), yielding a production lens only 12 mm deep and weighing 13 grams. Among SLR normal lenses of any format, a BFD-to-track ratio of $95.95 / 50.62 = 1.90$ is exceptionally high; most comparable semi-wide-angle SLR lenses achieve ratios of 1.0 to 1.4. This was accomplished through a disciplined glass selection using late-1970s high-index lanthanum and titanium glasses, and the five conditional expressions that constrain the power distribution to maintain this extreme geometry while keeping aberrations well corrected.

## Sources

- US 4,223,982 (primary source for all prescription data, conditional expressions, and aberration plots).
- Pentax Auto 110 product specifications (6 elements / 5 groups, 24mm f/2.8, MFD 0.35m, filter Ø25.5mm, weight 13g).
- Schott Optical Glass Catalog and datasheet for N-LAF34 ($n_d = 1.77250$, $\nu_d = 49.62$; glass code 773496).
- Hoya Optical Glass Catalog (TAF1 glass identification, $n_d = 1.77250$, $\nu_d = 49.6$).
- Ohara Optical Glass Catalog (S-LAH53, S-TIH10, and S-TIH14 glass identification cross-references).
- Camera-wiki.org, Wikipedia "Pentax Auto 110" (production history and system specifications).
- "Known and Unknown Pentax Lens Designers and Their Lenses" (Douglas Viewfinder blog) — Sugiyama biographical attribution.
