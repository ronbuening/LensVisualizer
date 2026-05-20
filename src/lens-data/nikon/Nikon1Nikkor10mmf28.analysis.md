# Nikon 1 NIKKOR 10mm f/2.8 — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** JP 2011-248340 A  
**Application Number:** 特願2011-89211 (P2011-89211)  
**Priority:** 特願2010-104461 (P2010-104461), April 28, 2010  
**Filed:** April 13, 2011  
**Published:** December 8, 2011  
**Inventor:** Take Toshinori (武 俊典)  
**Applicant:** Nikon Corporation (株式会社ニコン)  
**Title:** 撮影レンズ、光学装置、撮影レンズの製造方法  
**Classification:** G02B 13/00, G02B 13/18  
**Total claims:** 14  
**Worked examples:** 7  
**Embodiment analyzed:** Example 1 (第1実施例)

JP 2011-248340 A describes a compact wide-angle photographic lens for digital cameras. Example 1 is a two-group, six-element prescription with a weak positive first group and a strongly powered positive second group, followed by a filter stack. The patent gives $f = 10.30$ mm, $F_{NO} = 2.92$, $2\omega = 78.61^\circ$, $Y = 8.20$ mm, physical total length $TL = 37.9644$ mm, and air-equivalent total length $37.0144$ mm.

Example 1 is the most likely patent embodiment for the production Nikon 1 NIKKOR 10mm f/2.8. The convergence is as follows.

1. The prescription focal length, $f = 10.3001$ mm by paraxial trace, corresponds to the 10 mm marketed focal length.
2. The patent's $F_{NO} = 2.92$ is consistent with a marketed f/2.8 lens.
3. The patent image height $Y = 8.20$ mm covers the Nikon CX-format half diagonal of approximately 7.93 mm.
4. The prescription contains two aspherical surfaces, matching Nikon's production specification of two aspherical elements.
5. The patent describes focus by moving the second lens group toward the object; Nikon describes the production lens as an autofocus CX-format 10 mm f/2.8 lens with a 0.20 m minimum focus distance.
6. The priority and filing dates precede the 2011 Nikon 1 launch window.

The production lens data in this analysis uses Nikon's manufacturer-published specifications for hard production specs: 10 mm focal length, f/2.8 maximum aperture, f/11 minimum aperture, CX format, 77° angle of view, seven diaphragm blades, two aspherical elements, 0.20 m minimum focus distance, 40.5 mm filter size, 55.5 × 22 mm dimensions, and 77 g weight. The prescription itself follows the patent's numerical Example 1.

## Optical Architecture

The lens is a compact positive-positive two-group wide-angle design rather than a classical retrofocus lens. The first group, G1, is a single weak biconvex positive element. The second group, G2, contains a negative meniscus, a positive meniscus, the aperture-stop region, a negative-positive cemented doublet, and a rear positive aspherical element. The patent figure for Example 1 shows this arrangement with a separate filter stack behind G2.

The group powers are highly asymmetric. A surface-by-surface paraxial trace gives

| Quantity                                |        Value |
| --------------------------------------- | -----------: |
| System EFL                              |   10.3001 mm |
| G1 focal length                         | +164.9097 mm |
| G2 focal length                         |   +9.9989 mm |
| Air-equivalent BFD, surface 14 to image |   14.4310 mm |
| Physical TL, first surface to image     |   37.9644 mm |
| Air-equivalent TL, filter stack folded  |   37.0144 mm |

G1 therefore contributes very little positive power; its focal length is roughly sixteen times the system focal length. Its principal role is not convergence but ray-bundle management. It gently changes the incidence of oblique bundles before they reach the steeply powered front of G2.

The internal structure of G2 is more important. L21 is a strongly negative meniscus and L22 is a high-index positive meniscus. This negative-positive pairing within an otherwise positive group moves the rear principal plane forward and gives an air-equivalent back focal distance larger than the focal length, approximately $BFD/EFL = 1.40$. That does not make the whole lens a classical retrofocus design, because the front group is not negative; it is better described as a compact positive-positive layout with a retrofocus-like internal sub-arrangement in G2.

Using the correct surface-by-surface Petzval formulation, $\sum \Phi/(n n')$, the refracting prescription through surface 14 gives a Petzval sum of approximately $+0.01737\ \mathrm{mm}^{-1}$, corresponding to a Petzval radius of about $-57.6$ mm under the adopted sign convention. The rear doublet and the rear asphere are therefore not optional refinements; they are part of the field-curvature and chromatic-correction machinery needed to keep a 78.61° field usable on the CX image circle.

## Element-by-Element Analysis

### L11 — Biconvex Positive, Fixed Front Group

$n_d = 1.48749$, $\nu_d = 70.23$. Glass: S-FSL5 (OHARA). $f = +164.91$ mm.

L11 is a nearly symmetric weak biconvex element with $R_1 = +160.5145$ mm and $R_2 = -160.5440$ mm. The element is fixed relative to the image plane. Its optical power is small, but its position makes it useful for preconditioning off-axis ray bundles before they enter the much stronger second group.

The glass choice is a low-index, high-Abbe fluorosilicate crown. That is appropriate for a weak front element because it avoids adding unnecessary longitudinal or lateral color at a large beam diameter. It also helps keep the first group light and thin, consistent with the pancake mechanical envelope.

### L21 — Negative Meniscus, Convex to Object, Rear Asphere

$n_d = 1.58913$, $\nu_d = 61.16$. Glass: S-BAL35 (OHARA). $f = -10.39$ mm.

L21 is the front power-shaping element of G2. Its front surface is weakly convex to the object, while its rear surface is a steep aspherical surface with $R = +4.8842$ mm. The element is a negative meniscus despite using a crown-type glass, because the rear curvature dominates.

This element creates the divergent part of the internal G2 relay. It increases back focus and helps control oblique aberrations before the positive meniscus L22 reconverges the bundle. The rear asphere is positioned where the ray heights and ray angles are still high, giving it substantial leverage over spherical aberration and field curvature.

S-BAL35 is a moderate-index barium-aluminum crown. The catalog value $n_d = 1.58913$ matches the patent index; the patent's $\nu_d = 61.16$ differs trivially from OHARA's listed 61.14, a normal catalog/melt rounding difference.

### L22 — Positive Meniscus, Convex to Object

$n_d = 1.74950$, $\nu_d = 35.28$. Glass: S-LAM7 (OHARA). $f = +13.36$ mm.

L22 is the strong pre-stop positive component. Its front radius, $R = +9.0140$ mm, gives it substantial positive power, while its weak rear radius, $R = +79.5499$ mm, maintains a meniscus form that moderates oblique aberrations.

The correct catalog identification is OHARA S-LAM7, not S-NBM51. The patent's stored pair $n_d = 1.74950$, $\nu_d = 35.28$ matches S-LAM7 directly; S-NBM51 is a 613/443 glass and does not match the prescription. With $\nu_d = 35.28$, this is a flint-territory high-index lanthanum glass despite the LAM family name.

L22 introduces useful converging power in a compact axial space, but its high dispersion must be balanced downstream. That is the role of the L23/L24 cemented doublet.

### Aperture Stop Region — FS1, S, FS2

The aperture stop is located between L22 and the rear cemented doublet. In the patent table, surface 7 is the first flare-cut stop, surface 8 is the aperture stop, and surface 9 is the second flare-cut stop. These mechanical flare stops are retained in the axial spacing but are not separate refracting surfaces in the data file. The optical aperture stop is represented as `STO`.

The physical stop semi-diameter inferred from the patent design f-number is approximately 2.230 mm. This is obtained by tracing the stop-to-entrance-pupil magnification through the front optics and enforcing the patent's $F_{NO} = 2.92$. The production lens uses a seven-blade diaphragm and an f/2.8 to f/11 aperture range.

### L23 — Biconcave Negative, Cemented Doublet Front Component

$n_d = 1.80810$, $\nu_d = 22.76$. Glass: S-NPH1/S-NPH1W class (OHARA). $f = -9.89$ mm in air.

L23 is a strongly dispersive biconcave negative element cemented to L24. Its first surface, $R = -8.6375$ mm, is concave toward the object; its cemented rear surface is a weak positive-radius interface, $R = +113.7348$ mm. The element carries substantial negative standalone power.

The corrected glass identification is OHARA S-NPH1 or S-NPH1W class. The patent gives $n_d = 1.80810$, $\nu_d = 22.76$; OHARA lists S-NPH1 and S-NPH1W at $n_d = 1.80809$, $\nu_d = 22.76$. The earlier S-TIH18 attribution is untenable because OHARA S-TIH18 is a 722/292 glass, far from the patent's 808/228 value.

The high dispersion is deliberate. L23 supplies the negative, high-dispersion component of the achromatizing doublet. Its role is not merely to cancel power; it provides the chromatic lever needed to balance L22 and L24 within a very short total track.

### L24 — Biconvex Positive, Cemented Doublet Rear Component

$n_d = 1.75500$, $\nu_d = 52.32$. Glass: S-LAH97 (OHARA). $f = +12.97$ mm in air.

L24 is the positive partner of the cemented doublet. Its weak front interface is cemented to L23, and its rear surface $R = -10.6165$ mm provides strong positive refraction as the beam exits the doublet.

The corrected glass identification is OHARA S-LAH97. The patent's 755/523 pair matches S-LAH97 directly. It does not match S-LAL54, which is a much lower-index glass. With $n_d = 1.75500$ and $\nu_d = 52.32$, L24 is a high-index lanthanum crown used to provide positive power without the very high dispersion of L23.

The cemented L23/L24 pair is net weakly negative by thick-lens calculation, approximately $f = -111.19$ mm in air. That weak net power is important: the doublet's main function is chromatic correction and Petzval management, while the net positive rear power is left primarily to L25.

### L25 — Biconvex Positive Rear Asphere

$n_d = 1.59201$, $\nu_d = 67.02$. Glass: HOYA M-PCD51 class, molded phosphate crown. $f = +14.65$ mm.

L25 is the final powered element and the second aspherical element. Its positive power helps complete image formation after the weakly negative cemented doublet. Its rear surface is the strong hyperboloidal asphere at surface 14.

The corrected catalog interpretation is HOYA M-PCD51 class. The stored six-digit glass code is approximately 592/670, and HOYA lists M-PCD51 at 592/670 in its molded-glass table. This is more credible than a Schott N-PSK53A attribution: N-PSK53A is a 618/634-class glass, whereas the patent element is 592/670. The molded-glass context is also plausible because this element carries a production aspherical surface.

Because the patent does not publish partial-dispersion ratios or per-line index data for L25, no quantified anomalous-partial-dispersion claim is made here. It is enough to classify the element as a low-dispersion phosphate/special crown used as a rear field-correcting positive element.

## Glass Identification / Selection

The patent does not name catalog glasses, so all identifications below are based on independent $n_d/\nu_d$ matching against manufacturer catalogs. The corrected palette is as follows.

| Element | Patent $n_d$ | Patent $\nu_d$ | Corrected catalog identification  | Catalog code | Role                                            |
| ------- | -----------: | -------------: | --------------------------------- | -----------: | ----------------------------------------------- |
| L11     |      1.48749 |          70.23 | S-FSL5 (OHARA)                    |       487702 | Weak low-dispersion fixed front element         |
| L21     |      1.58913 |          61.16 | S-BAL35 (OHARA)                   |       589612 | Crown negative meniscus with rear asphere       |
| L22     |      1.74950 |          35.28 | S-LAM7 (OHARA)                    |       750353 | High-index flint-territory positive meniscus    |
| L23     |      1.80810 |          22.76 | S-NPH1 / S-NPH1W (OHARA)          |       808228 | Very high-dispersion negative doublet component |
| L24     |      1.75500 |          52.32 | S-LAH97 (OHARA)                   |       755523 | High-index positive doublet component           |
| L25     |      1.59201 |          67.02 | M-PCD51 (HOYA molded-glass class) |       592670 | Low-dispersion rear positive asphere            |

The most important corrections are L22, L23, L24, and L25. L22 is S-LAM7 rather than S-NBM51. L23 is S-NPH1/S-NPH1W class rather than S-TIH18. L24 is S-LAH97 rather than S-LAL54. L25 is best matched to HOYA M-PCD51 class, not Schott N-PSK53A.

The chromatic strategy is conventional but tightly compressed. L22 supplies strong high-index positive power before the stop. L23 supplies very high-dispersion negative power after the stop. L24 restores positive power with a significantly higher Abbe number than L23. L25 then adds low-dispersion positive rear power while carrying a strong field-correcting asphere.

## Focus Mechanism

Example 1 focuses by translating the entire second group G2 toward the object. G1 remains fixed relative to the image plane. The patent explicitly states this for Example 1, and the variable-gap table confirms it: $d_2$ decreases by the same amount that $d_{14}$ increases.

| Gap                                        |   Infinity | Patent close state, 0.50 m |     Change |
| ------------------------------------------ | ---------: | -------------------------: | ---------: |
| $d_2$                                      |  2.1334 mm |                  1.9061 mm | −0.2273 mm |
| $d_{14}$, physical to filter stack         | 10.5166 mm |                 10.7439 mm | +0.2273 mm |
| $d_{20}$, final filter-to-image gap        |  0.6644 mm |                  0.6644 mm |          0 |
| Folded air-equivalent BFD after surface 14 | 14.4310 mm |                 14.6583 mm | +0.2273 mm |

A finite-conjugate paraxial solve using the full patent system including the filter stack gives a G2 travel of 0.2273 mm for the patent's 0.50 m close-focus state, with distance measured from the image plane. This confirms that the published variable-gap table is internally consistent.

The production lens focuses to 0.20 m, but the patent does not publish a 0.20 m prescription state or aberration plots. The data file therefore uses the patent-published 0.50 m focus state rather than silently extrapolating to the production MFD. A paraxial extrapolation to 0.20 m would require roughly 0.633 mm of G2 travel, but that extrapolated state is not used in the delivered prescription.

## Aspherical Surfaces

The design uses two aspherical surfaces, both in G2: surface 4 on the rear of L21 and surface 14 on the rear of L25. The patent equation is written with $\kappa$ in the discriminant,

$$
S(y)=\frac{y^2/r}{1+\sqrt{1-\kappa y^2/r^2}}+C_4y^4+C_6y^6+C_8y^8+C_{10}y^{10}.
$$

The renderer's standard conic form uses $1+K$ in the discriminant. Therefore, for this patent, $K = \kappa - 1$.

### Surface 4A — L21 Rear Asphere

| Parameter       |                Value |
| --------------- | -------------------: |
| $r$             |           +4.8842 mm |
| Patent $\kappa$ |              +0.5528 |
| Standard $K$    |              −0.4472 |
| $C_4$           |  +7.2260 × 10$^{-5}$ |
| $C_6$           |  −3.0492 × 10$^{-6}$ |
| $C_8$           |  +2.2154 × 10$^{-7}$ |
| $C_{10}$        | −7.9802 × 10$^{-10}$ |

With the standard conic convention, $K=-0.4472$ is a prolate ellipsoidal base, not an oblate ellipsoid. The surface is steep and sits in a high-leverage position near the front of G2. Relative to the base sphere, the computed aspherical departure is about −21 µm at $h = 2.5$ mm, −50 µm at $h = 3.0$ mm, and −109 µm at $h = 3.5$ mm. This is a significant departure for such a small element and is consistent with primary spherical-aberration and field-curvature correction.

### Surface 14A — L25 Rear Asphere

| Parameter       |               Value |
| --------------- | ------------------: |
| $r$             |         −13.9521 mm |
| Patent $\kappa$ |            −11.4868 |
| Standard $K$    |            −12.4868 |
| $C_4$           | −3.0331 × 10$^{-4}$ |
| $C_6$           | +1.1991 × 10$^{-5}$ |
| $C_8$           | −1.9031 × 10$^{-7}$ |
| $C_{10}$        | +1.4300 × 10$^{-9}$ |

Surface 14A is a strong hyperboloidal asphere. Relative to the base sphere, the computed aspherical departure is about +67 µm at $h = 4.0$ mm, +168 µm at $h = 5.0$ mm, and +357 µm at $h = 6.0$ mm. Its rear position gives it strong control over field curvature, astigmatism, and distortion at the image edge. The patent specifically states that an aspherical surface in the image-side positive lens of G2 is desirable for controlling distortion and field-curvature variation during focusing.

## Conditional Expressions

Example 1 satisfies all six conditions stated in the patent.

| Condition | Expression                        | Patent range | Recomputed Example 1 value |
| --------- | --------------------------------- | -----------: | -------------------------: |
| (1)       | $f_2/f_1$                         |  0.015–0.085 |                    0.06063 |
| (2)       | $f/f_1$                           |  0.015–0.085 |                    0.06246 |
| (3)       | $(r_{3F}+r_{2R})/(r_{3F}-r_{2R})$ |    2.50–3.80 |                    3.36534 |
| (4)       | $f/f_2$                           |    0.80–1.10 |                    1.03013 |
| (5)       | $TL/\Sigma d$                     |    1.55–1.75 |                    1.68108 |
| (6)       | $TL/Y_{max}$                      |    4.00–5.00 |                    4.62980 |

Conditions (1), (2), and (4) describe the unusual power split: G1 is very weak and G2 carries almost all system power. Condition (3) controls the shape of the strong air lens between L21 and L22. Conditions (5) and (6) constrain total length relative to the glass stack and image height.

## Data File Transcription Notes

The data file transcribes only the optical imaging prescription used by the renderer. Patent surfaces 15–20 form the sensor/filter stack and are not included as independent surfaces. Their air-equivalent optical path is folded into the final air gap after surface 14A. This yields a final folded BFD of 14.4309688722 mm at infinity.

The flare-cut stops are non-refracting mechanical apertures. Their axial spaces are retained in the prescription, but the data file models only the single optical aperture stop at the patent's surface 8 position.

The patent does not publish semi-diameters. The delivered semi-diameters were estimated from entrance-pupil geometry, full-field ray envelopes, the patent figure proportions, edge-thickness limits, cross-gap sag intrusion, and the steep-surface renderer rim constraints. Surface 4A is the limiting surface; its delivered semi-diameter is deliberately conservative.

## Verification Summary

All quantitative statements used in the corrected analysis and data file were rechecked by independent paraxial code.

| Quantity                       | Patent / expected value |   Recomputed value | Result     |
| ------------------------------ | ----------------------: | -----------------: | ---------- |
| System EFL                     |                10.30 mm |       10.300145 mm | matches    |
| G1 focal length                |             164.9097 mm |        164.9097 mm | matches    |
| G2 focal length                |               9.9988 mm |          9.9989 mm | matches    |
| Air-equivalent BFD             |                14.43 mm |         14.4310 mm | matches    |
| Air-equivalent TL              |                37.01 mm |         37.0144 mm | matches    |
| G2 travel to 0.50 m            |               0.2273 mm |          0.2273 mm | matches    |
| Petzval sum through surface 14 |                       — | +0.01737 mm$^{-1}$ | recomputed |

Standalone thick-lens focal lengths in air are: L11 = +164.91 mm, L21 = −10.39 mm, L22 = +13.36 mm, L23 = −9.89 mm, L24 = +12.97 mm, L25 = +14.65 mm, and the cemented L23/L24 doublet = −111.19 mm.

## Sources

1. JP 2011-248340 A, “撮影レンズ、光学装置、撮影レンズの製造方法,” Nikon Corporation, published December 8, 2011. Primary source for Example 1 prescription, aspherical coefficients, focus table, and conditional expressions.
2. Nikon USA, “1 NIKKOR 10mm f/2.8,” archived official product page. Source for production focal length, aperture range, CX format, angle of view, diaphragm blades, aspherical-element count, minimum focus distance, filter size, dimensions, and weight.
3. OHARA Inc., “Glass Type,” official optical-glass table. Source for S-FSL5, S-BAL35, S-LAM7, S-NPH1/S-NPH1W, and S-LAH97 catalog matches.
4. HOYA Optics Division, “Glass Cross Reference Index.” Source for six-digit glass-code convention and the M-PCD51 molded-glass 592/670 match used for L25.
