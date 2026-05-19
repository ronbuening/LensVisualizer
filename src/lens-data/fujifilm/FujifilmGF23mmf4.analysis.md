# Fujifilm Fujinon GF 23mm f/4 R LM WR — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** US 2018/0210178 A1  
**Application Number:** 15/873,364  
**Filed:** January 17, 2018  
**Published:** July 26, 2018  
**Priority:** JP 2017-008167, filed January 20, 2017  
**Inventors:** Hiroki Saito; Shunsuke Miyagishima  
**Applicant:** FUJIFILM Corporation, Tokyo, Japan  
**Title:** Imaging Lens and Imaging Apparatus  
**Embodiment analyzed:** Example 1, Tables 1–4 and Fig. 1

Example 1 is the closest public patent embodiment found for the Fujinon GF23mmF4 R LM WR. The identification should be treated as a strong production-candidate match rather than a literal production prescription, because the patent example has 14 glass elements in 11 air-separated groups while Fujifilm's production specification lists 15 elements in 12 groups.[^fuji-spec] The prescription is nevertheless highly convergent with the production lens.

1. **Focal length and aperture.** The patent gives $f = 23.69$ mm and FNo. = 4.00 at infinity; the production lens is marketed as 23 mm f/4.[^patent]
2. **Field angle.** The patent reports $2\omega = 101.6^\circ$ at infinity; Fujifilm publishes 99.9° for the finished product. The difference is consistent with patent paraxial field definition, distortion treatment, and late-stage production optimization.
3. **Special-element count.** Example 1 contains two doubly-aspherical elements, one very-low-dispersion S-FPL55/Super-ED element, and three additional ED-class elements. Fujifilm publishes two aspherical elements, one Super ED element, and three ED elements for the production lens.[^fuji-spec]
4. **Focusing architecture.** The patent describes a fixed first group, a positive second group that moves for focusing, and a fixed third group. That is consistent with a compact internal-focus GF wide-angle lens driven by a linear motor.
5. **Format.** The field angle and image height correspond to the 44 × 33 mm GFX image format. The patent includes a rear parallel plate PP with $n_d = 1.51680$ and 3.2 mm thickness, modeling the camera-side cover-glass/filter stack rather than a lens element.
6. **Timing.** The January 2017 Japanese priority date precedes the commercial GF23mmF4 R LM WR release window and fits Fujifilm's patent-to-product cadence for the early GFX lens set.

The patent closest-point state is 0.25 m, while Fujifilm's production specification gives a minimum focus distance of 0.38 m.[^fuji-spec] The data file therefore records the patent's 0.25 m focus endpoint because that is the only published variable-spacing state in the prescription. The analysis distinguishes that patent state from the production minimum focus limit.

## Optical Architecture

Example 1 is a three-mechanical-group, internally focusing ultra-wide-angle design. It is better described as **inverted-telephoto-derived** rather than as a strict retrofocus lens. The front section begins with three negative menisci, which is retrofocus-like, but the computed air-equivalent back focal distance from the final glass surface is 22.317 mm after folding the patent's 3.2 mm cover glass into air; this is slightly shorter than the verified effective focal length of 23.695 mm. The strict optical criterion $\mathrm{BFD} > \mathrm{EFL}$ is therefore not met for the transcribed patent example.

The net paraxial focal lengths of the three patent groups are:

| Group | Elements | Mechanical state | Computed group focal length | Main function |
|---|---:|---|---:|---|
| G1 | L11–L16 | Fixed | +167.6 mm | Wide-angle ray acceptance, first-stage chromatic correction, beam recovery before the stop |
| G2 | L21–L23 | Moving focus group | +52.8 mm | Inner focus, axial chromatic correction, focus-travel aberration stabilization |
| G3 | L31–L35 | Fixed | +894.4 mm | Rear relay, field flattening, lateral-color cleanup, back-focus management |

The important nuance is that G1 is **net weakly positive** even though its first three elements are all negative. The negative front triplet performs the wide-angle beam expansion. The L14+L15 cemented doublet and the high-index L16 then recover the beam and leave the entire front group with slight positive power. The overall group-power sequence is therefore weak-positive / positive / very-weak-positive, with the inverted-telephoto behavior embedded inside G1 rather than expressed as a net negative first group.

The aperture stop lies between G1 and G2. Placing the moving positive group immediately behind the stop keeps the focusing elements small, since the on-axis beam diameter is near its waist at that position. The patent explicitly presents this as a way to reduce focusing-group size and weight while maintaining high resolution in a wide-angle lens.

## Element-by-Element Analysis

### L11 — Negative Meniscus, convex to object

$n_d = 1.69680$, $\nu_d = 55.53$. Glass: S-LAL14 / LAC14 class. $f = -56.47$ mm.

L11 is the first negative meniscus in the system, with $R_1 = +37.6470$ mm and $R_2 = +18.8736$ mm. It accepts the steep off-axis ray bundles required for a field angle slightly over 100° and begins the inverted-telephoto front-section expansion. The moderately high index keeps the front surface curvature from becoming still stronger, while the relatively high Abbe number for this index class limits the chromatic penalty of placing negative power at the highest field ray heights.

This element was previously easy to misidentify because the six-digit glass code 697/555 is close to several high-index crowns. The best catalog match is S-LAL14 / LAC14 class, not S-BAM4. S-BAM4 has substantially different index and dispersion and cannot be reconciled with the patent's $n_d = 1.69680$ and $\nu_d = 55.53$.

### L12 — Negative Meniscus, convex to object, two aspherical surfaces

$n_d = 1.58313$, $\nu_d = 59.38$. Glass: S-BAL42. $f = -51.38$ mm.

L12 is the first aspherical element. Both surfaces, patent surfaces 3 and 4, are aspherical. The element remains negative in paraxial power, but the bilateral aspheric departures reshape the way that negative power is distributed from the center to the rim. In this position, that is an efficient way to control distortion, coma, and sagittal/tangential field separation introduced by the strong front negative section.

The glass is best identified as S-BAL42-class barium crown glass. The prior S-BAL35 attribution is not supported by catalog values; S-BAL35 is too high in both index and Abbe number relative to the patent data.

### L13 — Negative Meniscus, ED-class fluorophosphate

$n_d = 1.49700$, $\nu_d = 81.59$. Glass: S-FPL51 / FCD1 class. $f = -45.12$ mm.

L13 is the third consecutive front negative element. Its front surface is very weakly curved ($R_1 = +332.1847$ mm), while most of the negative power comes from the rear surface ($R_2 = +20.9717$ mm). This concentrates its bending action at a point where the ray bundle has already been prepared by L11 and L12.

The ED fluorophosphate glass is used at a high chief-ray height, making L13 a principal lateral-chromatic-aberration corrector in the front half of the design. The patent value $n_d = 1.49700$, $\nu_d = 81.59$ falls in the S-FPL51/FCD1 family; the exact vendor cannot be proven from the patent alone, but the glass class is clear.

### L14 — Biconvex Positive, cemented to L15

$n_d = 1.65412$, $\nu_d = 39.73$. Glass: S-NBH5 / N-KZFS5 class. $f = +18.04$ mm.

L14 is the strongest standalone positive element in Example 1. It is cemented to L15, forming the first achromatic doublet. After the three negative front elements expand the field, L14 supplies the primary positive recovery power that bends the beam back toward the stop.

The glass is a short-flint / KZFS-like class rather than the titanium flint attribution sometimes suggested by six-digit-code lookup. Its role is not just to add positive power; paired with the very dispersive L15, it allows the doublet to correct chromatic error without using a conventional high-Abbe crown in this location.

### L15 — Negative Meniscus, concave to object, cemented to L14

$n_d = 1.84666$, $\nu_d = 23.78$. Glass: S-TIH53 / FDS90 class. $f = -25.52$ mm.

L15 is the high-index, high-dispersion component of the L14+L15 doublet. The large index step at the cemented interface ($R = -18.4080$ mm) supplies strong chromatic leverage in a compact axial length.

Because both L14 and L15 lie after the front negative triplet but before the stop, this doublet corrects color and coma contributions before the beam is handed to the moving focus group. The weak rear curvature of L15 ($R = -131.6846$ mm) limits the aberration burden of the exit surface.

### L16 — Positive Meniscus, concave to object

$n_d = 2.00069$, $\nu_d = 25.43$. Glass: TAFD40 / H-ZLaF90 class. $f = +47.27$ mm.

L16 is a compact ultra-high-index positive meniscus immediately ahead of the aperture stop. Its $n_d$ slightly above 2.0 allows useful positive power while keeping the meniscus form comparatively weak. This is an efficient way to condition the beam entering the stop without requiring a large-diameter, strongly bulged element.

The correct identification is TAFD40 / H-ZLaF90 class, not TAFD65 or S-NPH53. TAFD65 has materially different published optical constants. The patent value is very close to HOYA TAFD40 in index and to CDGM H-ZLaF90 in both index and Abbe number; the safest data-file annotation is therefore a class identification.

### L21 — Negative Meniscus, convex to object

$n_d = 1.54072$, $\nu_d = 47.23$. Glass: S-TIL2 / E-FEL2 class. $f = -100.67$ mm.

L21 is the first element of the moving G2 focus group. It is only weakly negative, so its purpose is less about adding gross optical power than about preconditioning the ray heights and vergence entering the strong L22+L23 cemented doublet.

Its modest index and mid-low Abbe number place it on the flint side of the crown/flint boundary. It should not be described as a lanthanum crown. The moving group sits just behind the stop, so L21 can remain small in diameter and mechanically light.

### L22 — Biconvex Positive, Super-ED, cemented to L23

$n_d = 1.43875$, $\nu_d = 94.66$. Glass: S-FPL55. $f = +25.25$ mm.

L22 is the optical core of the focusing group. It supplies the dominant positive power in G2 and uses very-low-dispersion S-FPL55-class glass. The patent's conditional expression (5) requires at least one positive G2 lens with $70 < \nu_{2p} < 100$, and the preferred range is $80 < \nu_{2p} < 95$. L22's $\nu_d = 94.66$ lies at the upper end of that preferred range.

Because L22 moves during focusing, its chromatic behavior affects not only infinity correction but also the stability of axial color over focus travel. The S-FPL55 selection is therefore central to keeping the focusing group powerful without making focus breathing and longitudinal color excessive.

### L23 — Negative Meniscus, concave to object, cemented to L22

$n_d = 1.76200$, $\nu_d = 40.10$. Glass: S-LAM55. $f = -86.67$ mm.

L23 is the flint partner in the focus-group cemented doublet. Its negative power and moderate dispersion balance the low-dispersion positive L22, converting a very strong positive fluorophosphate element into a better corrected achromatic focusing unit.

The correct match is S-LAM55-class glass. The previously proposed S-LAH63Q attribution is not consistent with the patent's index and Abbe number.

### L31 — Positive Meniscus, concave to object, two aspherical surfaces

$n_d = 1.80625$, $\nu_d = 40.91$. Glass: L-LAH53. $f = +73.35$ mm.

L31 is the second doubly-aspherical element and the first element of the fixed rear group. It receives the beam after the moving focusing group, so it must correct residual spherical aberration and off-axis aberrations that would otherwise vary strongly with focus position.

The glass is best identified as L-LAH53, an OHARA low-transition-temperature lanthanum flint class used for precision glass molding. The earlier S-LAH51 attribution is not supported by the patent's $n_d = 1.80625$ and $\nu_d = 40.91$ pair.

### L32 — Plano-Concave Negative, cemented to L33

$n_d = 1.72047$, $\nu_d = 34.71$. Glass: S-NBH8 / N-KZFS8 class. $f = -31.55$ mm.

L32 begins the rear cemented doublet. Its object-side surface is plane in the patent table, and its cemented rear surface is $R = +22.7320$ mm. In standalone form it is a strong plano-concave negative element.

The glass is a niobium/barium short-flint class, best matched by S-NBH8 / N-KZFS8. The plane front surface keeps one surface from adding additional higher-order aberration while the cemented junction performs most of the chromatic work.

### L33 — Positive Meniscus, ED-class fluorophosphate, cemented to L32

$n_d = 1.49700$, $\nu_d = 81.59$. Glass: S-FPL51 / FCD1 class. $f = +67.12$ mm.

L33 is the ED positive partner in the rear doublet. Its placement deep in G3, where the off-axis ray height remains significant, makes it effective for lateral color cleanup after the beam has passed the stop and focus group.

Together, L32 and L33 form a gently positive rear doublet. The doublet contributes less to gross power than to balancing chromatic aberration, field curvature, and astigmatism before the final two singlets.

### L34 — Biconcave Negative

$n_d = 1.60342$, $\nu_d = 38.03$. Glass: S-TIM5 / F5 class. $f = -99.21$ mm.

L34 is a thin biconcave negative element positioned close to the image plane. Its role is principally field-curve and astigmatism trimming in the rear relay. Because it is late in the system, a comparatively small amount of negative power can have a meaningful effect on the image surface while leaving the entrance-side packaging unchanged.

The glass identification as S-TIM5 / F5 class is consistent with the patent values.

### L35 — Biconvex Positive, ED-class phosphate crown

$n_d = 1.53775$, $\nu_d = 74.70$. Glass: S-FPM3. $f = +73.58$ mm.

L35 is the final glass element. Its radii are equal in magnitude and opposite in sign ($+77.7950$ mm and $-77.7950$ mm), giving it a nearly symmetric biconvex form. The S-FPM3 ED-class glass provides a final low-dispersion positive component near the image side.

The patent notes that a positive lens closest to the image side helps secure back focus. In this design L35 also moderates the exit-ray geometry presented to the sensor cover-glass stack.

## Glass Identification and Selection

The corrected glass palette is as follows. The patent does not name vendors, so identifications are made by matching $n_d$ and $\nu_d$ against manufacturer catalogs and cross-reference tables. Where the match is not exact or multiple vendors publish close equivalents, the table uses a class label rather than a unique catalog assertion.

| Element | $n_d$ | $\nu_d$ | Corrected identification | Function |
|---|---:|---:|---|---|
| L11 | 1.69680 | 55.53 | S-LAL14 / LAC14 class | High-index front negative meniscus |
| L12 | 1.58313 | 59.38 | S-BAL42 | Moldable/barium-crown aspherical negative meniscus |
| L13 | 1.49700 | 81.59 | S-FPL51 / FCD1 class | Front ED negative element |
| L14 | 1.65412 | 39.73 | S-NBH5 / N-KZFS5 class | Positive short-flint doublet component |
| L15 | 1.84666 | 23.78 | S-TIH53 / FDS90 class | Dense short-flint doublet component |
| L16 | 2.00069 | 25.43 | TAFD40 / H-ZLaF90 class | Ultra-high-index positive meniscus |
| L21 | 1.54072 | 47.23 | S-TIL2 / E-FEL2 class | Weak negative focusing-group preconditioner |
| L22 | 1.43875 | 94.66 | S-FPL55 | Super-ED positive focusing element |
| L23 | 1.76200 | 40.10 | S-LAM55 | Lanthanum-medium-flint doublet partner |
| L31 | 1.80625 | 40.91 | L-LAH53 | Moldable lanthanum-flint aspherical rear corrector |
| L32 | 1.72047 | 34.71 | S-NBH8 / N-KZFS8 class | Rear dense-flint doublet component |
| L33 | 1.49700 | 81.59 | S-FPL51 / FCD1 class | Rear ED doublet component |
| L34 | 1.60342 | 38.03 | S-TIM5 / F5 class | Thin rear negative field-correction element |
| L35 | 1.53775 | 74.70 | S-FPM3 | Final ED positive element |

The chromatic strategy is distributed rather than concentrated. L13 and L33 are ED-class elements placed on opposite sides of the stop where chief-ray heights are useful for lateral-color correction. L22 is the Super-ED element in the moving focus group, directly satisfying the patent's $\nu_{2p}$ condition and stabilizing axial color during focusing. L35 adds a lower-Abbe ED-class positive element near the image plane for residual color and exit-geometry control.

Several prior glass labels were rejected after catalog cross-checking. The most consequential corrections are L11 from S-BAM4 to S-LAL14/LAC14 class, L12 from S-BAL35 to S-BAL42, L16 from TAFD65/S-NPH53 to TAFD40/H-ZLaF90 class, L21 from a lanthanum crown attribution to S-TIL2/E-FEL2 class, L23 from S-LAH63Q to S-LAM55, L31 from S-LAH51 to L-LAH53, and L32 from S-NBH56 to S-NBH8/N-KZFS8 class.

## Focus Mechanism

The lens uses internal focus by translating G2, the positive group immediately behind the aperture stop. G1 and G3 remain fixed relative to the image plane. The patent's variable-spacing table gives the following focus movement from infinity to the 0.25 m closest-point state:

| Variable gap | Infinity | Patent closest point, 0.25 m | Change |
|---|---:|---:|---:|
| DD[12], stop to L21 | 7.4861 mm | 5.4732 mm | −2.0129 mm |
| DD[17], L23 to L31 | 3.9687 mm | 5.9816 mm | +2.0129 mm |
| Sum | 11.4548 mm | 11.4548 mm | 0.0000 mm |

The equal-and-opposite gap change verifies pure internal translation of G2. From infinity to the patent closest-point state, G2 moves object-ward by 2.0129 mm. The system focal length changes only slightly, from the patent's 23.69 mm at infinity to 23.63 mm at the closest point, and the F-number changes from 4.00 to 4.09.

The production lens focuses only to 0.38 m according to Fujifilm's published specification. That does not invalidate the patent match; it means the production mechanism or firmware likely restricts the travel relative to the more aggressive patent example.

## Aspherical Surfaces

Example 1 uses four aspherical surfaces on two elements:

| Patent surface | Data-file label | Element | Location |
|---:|---|---|---|
| 3 | 3A | L12 | Front surface of first aspherical negative meniscus |
| 4 | 4A | L12 | Rear surface of first aspherical negative meniscus |
| 18 | 18A | L31 | Front surface of rear-group aspherical positive meniscus |
| 19 | 19A | L31 | Rear surface of rear-group aspherical positive meniscus |

The patent defines the aspherical sag as:

$$
Z_d = \frac{C h^2}{1 + \sqrt{1 - K_A C^2 h^2}} + \sum_{m=3}^{16} A_m h^m
$$

where $C = 1/R$. In the standard LensVisualizer convention,

$$
Z(h) = \frac{(h^2/R)}{1 + \sqrt{1 - (1+K)(h/R)^2}} + A_4 h^4 + A_6 h^6 + \cdots,
$$

so the standard conic constant is $K = K_A - 1$. The patent includes odd-order polynomial terms through A15. Those odd terms are not currently represented by the LensVisualizer data schema, so the data file stores even-order least-squares refits over the selected semi-diameters rather than a direct copy of only the even coefficients. Directly dropping the odd terms would produce physically unacceptable sag errors because the patent's even and odd terms partially cancel.

Patent coefficients are:

| Surface | $K_A$ | A3 | A4 | A5 | A6 | A7 | A8 | A9 | A10 | A11 | A12 | A13 | A14 | A15 | A16 |
|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| 3 | 2.3870981E+00 | 0 | 1.3164601E-05 | 3.7489399E-05 | -9.0886271E-06 | 6.9230821E-07 | 1.2051507E-08 | -3.0922057E-09 | -1.8716276E-10 | 3.2360551E-11 | -2.7750763E-13 | -1.0746371E-13 | 4.4146963E-15 | 1.3699526E-18 | -1.8537021E-18 |
| 4 | 8.4821095E-01 | 0 | 6.7671516E-05 | -8.6018398E-06 | 1.3169953E-05 | -5.4639754E-06 | 9.8841110E-07 | -9.3642276E-08 | 5.3588470E-09 | -3.7242141E-10 | 3.8140685E-11 | -2.1958768E-12 | 1.9430076E-14 | 2.9974805E-15 | -8.7320490E-17 |
| 18 | 3.1749483E+00 | 0 | -2.0241709E-05 | 1.0107437E-05 | -6.5813373E-06 | 1.7046433E-06 | -2.1892518E-07 | 1.1207529E-08 | 4.5982414E-10 | -1.0981936E-10 | 1.1286182E-11 | -1.1325544E-12 | 8.4071210E-14 | -3.3942895E-15 | 5.5092813E-17 |
| 19 | -4.9871650E+00 | 0 | -1.6116072E-05 | -1.5085955E-06 | 2.0396242E-06 | -1.2725118E-06 | 3.5828518E-07 | -5.2035910E-08 | 3.4286943E-09 | 4.4752370E-11 | -2.3342677E-11 | 1.4508103E-12 | -2.4220469E-14 | -8.0819177E-16 | 2.7188905E-17 |

The data-file refits use the same standard conic constants but replace the full odd/even polynomial with an even-only approximation. The verified residuals over the selected semi-diameters are:

| Surface | Selected semi-diameter | Standard $K$ | Maximum sag residual | RMS sag residual |
|---|---:|---:|---:|---:|
| 3A | 14.5 mm | +1.3870981 | 0.00038 mm | 0.00016 mm |
| 4A | 12.2 mm | −0.1517891 | 0.00023 mm | 0.00010 mm |
| 18A | 16.5 mm | +2.1749483 | 0.00377 mm | 0.00071 mm |
| 19A | 16.8 mm | −5.9871650 | 0.00851 mm | 0.00167 mm |

The rear surface of L31 is the most demanding approximation because it combines a strong negative standard conic constant with significant higher-order correction. The refit error remains small relative to the element dimensions and is preferable to a direct unsupported odd-term transcription.

## Conditional Expressions

The patent lists five design conditions for the group powers, stop-to-image length, and the Abbe number of a positive G2 lens. Independent paraxial tracing of Example 1 gives:

| Expression | Meaning | Patent condition | Verified value | Patent Table 13 |
|---|---|---:|---:|---:|
| (1) | $f / f_2$ | $0.1 < f/f_2 < 0.6$ | 0.4485 | 0.449 |
| (1-2) | preferred $f / f_2$ | $0.4 < f/f_2 < 0.52$ | 0.4485 | — |
| (2) | $BS/(f\tan\omega)$ | $2 < BS/(f\tan\omega) < 3$ | 2.607 | 2.608 |
| (3) | $f_2/f_3$ | $-0.2 < f_2/f_3 < 0.2$ | 0.0591 | 0.059 |
| (4) | $f_2/f_1$ | $0 < f_2/f_1 < 1.5$ | 0.3152 | 0.315 |
| (5) | $\nu_{2p}$ | $70 < \nu_{2p} < 100$ | 94.66 | 94.660 |

Here $BS$ is the physical axial distance from the stop to the image plane including the patent's PP plate. The verified value uses $BS = 75.7187$ mm and $\omega = 50.8^\circ$.

## Data-File Implementation Notes

The project data file excludes sensor glass and camera-side cover glass. The patent's PP plate is therefore not entered as a separate optical element or surface. Instead, its optical path is folded into the final back-focus gap as

$$
20.2074 + \frac{3.2}{1.51680} = 22.3171\ \text{mm}.
$$

The patent does not publish clear apertures or semi-diameters. The data-file semi-diameters were estimated from paraxial marginal and chief-ray geometry, then reduced where necessary to satisfy practical rendering constraints: $sd/|R| < 0.90$, front/rear semi-diameter ratio within each element not exceeding 1.25, edge thickness above 0.3 mm, and cross-gap sag intrusion below 90% of the relevant air gap. The selected stop semi-diameter is 6.175 mm, derived from the patent F/4 entrance pupil using the paraxial front-group pupil magnification.

## Verification Summary

Independent paraxial tracing confirmed the following values at the d-line:

| Quantity | Verified value | Patent value or implication |
|---|---:|---:|
| Effective focal length, infinity | 23.6946 mm | 23.69 mm |
| Patent close-state focal length | 23.63 mm in patent table | 23.63 mm |
| Group G1 focal length | +167.60 mm | implied by condition (4) |
| Group G2 focal length | +52.83 mm | implied by condition (1) |
| Group G3 focal length | +894.41 mm | implied by condition (3) |
| G2 movement, infinity to 0.25 m | 2.0129 mm object-ward | DD[12]/DD[17] table |
| Gap-conservation error | 0.0000 mm | internal focus |
| Surface-by-surface Petzval sum | +0.0038489 mm⁻¹ | not tabulated |
| Petzval radius | +259.8 mm | not tabulated |
| Physical BFD from final lens surface to image, including PP thickness | 23.4074 mm | 20.2074 + 3.2 mm |
| Data-file folded air-equivalent BFD | 22.3171 mm | PP excluded by data convention |

The prescription is internally consistent. The main limitations are not transcription errors but production/patent differences: the production lens adds one element and one group, and its published minimum focus distance is 0.38 m rather than the patent example's 0.25 m.

## Sources

[^patent]: FUJIFILM Corporation, Hiroki Saito and Shunsuke Miyagishima, "Imaging Lens and Imaging Apparatus," US 2018/0210178 A1, published July 26, 2018. Primary source for Example 1 prescription, focus movement, conditional expressions, and aspherical coefficients.

[^fuji-spec]: FUJIFILM, "FUJINON GF23mmF4 R LM WR — Specifications," official product specifications. Used for production element/group count, special-element count, angle of view, minimum focus distance, aperture, filter size, and mount-format identification. https://www.fujifilm-x.com/global/products/lenses/gf23mmf4-r-lm-wr/specifications/

Additional catalog and cross-reference sources used for glass identification:

- OHARA Corporation, optical glass catalog pages for S-FPL55, S-FPL51, S-TIH53, S-TIM5, S-FPM3, S-LAL14, S-BAL42, S-TIL2, S-LAM55, S-NBH5, S-NBH8, and L-LAH53/low-Tg glasses.
- HOYA Group Optics Division, optical glass datasheet for TAFD40 / TAFD40-W and HOYA optical-glass cross-reference index.
- CDGM optical glass catalog data for H-ZLaF90 class confirmation of the 001/255 high-index flint glass pair.
