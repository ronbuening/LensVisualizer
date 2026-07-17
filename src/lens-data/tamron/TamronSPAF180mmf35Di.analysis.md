## Patent Reference and Design Identification

**Patent:** JP 2003-329924 A  
**Application Number:** JP 2002-135804  
**Filed:** May 10, 2002  
**Published:** November 19, 2003  
**Inventor:** Yuichi Muramatsu (村松 雄一)  
**Applicant:** Tamron Co., Ltd. (株式会社タムロン)  
**Title:** 望遠マクロレンズ光学系 (Telephoto Macro Lens Optical System)  
**Embodiment analyzed:** Example 2 (第2実施形態; optical system 200)

Example 2 is identified with high confidence as the prescription underlying the Tamron SP AF 180mm F/3.5 Di LD [IF] Macro 1:1, model B01. The patent does not name the commercial model, so the identification rests on convergent evidence rather than an explicit statement:

1. Example 2 has 14 elements in 11 air-separated groups, exactly matching Tamron's published B01 specification. Example 1 has 13 elements in 10 groups and is excluded.
2. Two Example 2 elements have $n_d = 1.49700$ and $\nu_d = 81.61$. Those coordinates exactly match OHARA S-FPL51 and are consistent with Tamron's statement that B01 uses two LD elements.
3. The patent gives $f = 176.9587$ mm and FNO 3.536 at infinity, consistent with the marketed 180 mm f/3.5 designation.
4. The prescription includes a −1× state. After uniform scaling to the marketed 180 mm focal length, the independently traced object-to-image distance at that state is 468.63 mm, agreeing with Tamron's published 0.47 m minimum focus distance and 1:1 maximum reproduction ratio.
5. The patent's fixed LG1 plus three moving rear groups matches Tamron's published floating internal-focus description and constant external length.
6. The aberration plots extend to image height $Y = 21.633$ mm, essentially the diagonal half-height of the 36 × 24 mm format.
7. Tamron's own product history places model B01 in 2003, the same year as publication.
8. Paragraph ¶0021 says Example 2 adds one positive element to LG3 relative to Example 1 to reduce spherical and axial chromatic aberration and to shorten LG3 travel. The added element accounts for the production lens's 14-element count.

Two prescription ambiguities were resolved by numerical verification:

- **Surface 23:** the printed value is $R_{23} = -69.3962$ mm. This value reproduces all three patent focal lengths; reading it as −89.3962 mm does not.
- **Fourth variable gap:** the focus table labels the gap `D(20)`, but surface 20 lies inside glass. The physical variable gap is after surface 22. The data file therefore uses `D(22)`.

The patent prescription is uniformly scaled by

$$
S = \frac{180}{176.9587} = 1.0171864961
$$

to represent the manufacturer-published 180 mm focal length. All radii, axial distances, variable gaps, element focal lengths, and inferred semi-diameters in the data file use this factor. Refractive indices, Abbe numbers, f-number, and power ratios are unchanged. The unscaled patent dimensions are retained in the verification tables below.

The patent does not publish clear semi-diameters. Those in the data file were inferred from combined paraxial marginal- and chief-ray envelopes and then constrained by the 72 mm filter diameter, signed cross-gap sag clearance, edge thickness, element diameter ratios, and the renderer's spherical-rim limit. They are implementation estimates, not patent-listed manufacturing dimensions.

## Optical Architecture

Example 2 is an all-spherical, four-lens-group macro system with positive-negative-positive-negative group power:

| Patent group | Surfaces | Elements | Patent-scale focal length | Scaled focal length | Principal role |
|---|---:|---:|---:|---:|---|
| LG1 | 1–11 | 6 | +81.9976 mm | +83.4069 mm | Fixed front collector and principal chromatic-correction group |
| LG2 | 12–16 | 3 | −48.0569 mm | −48.8829 mm | Main negative focusing group |
| LG3 | 18–22 | 3 | +58.2593 mm | +59.2605 mm | Positive compensating group behind the stop |
| LG4 | 23–26 | 2 | −107.5793 mm | −109.4282 mm | Weakly moving negative rear correction group |

The aperture stop is surface 17, between LG2 and LG3. LG1 is fixed, the stop remains at a fixed axial station, and LG2–LG4 move differentially during focus. The optical formula contains three cemented doublets: L5+L6 in LG1, L8+L9 in LG2, and L11+L12 in LG3.

The patent title calls the system a telephoto macro lens. Under the strict mechanical telephoto criterion used in this project, however, the infinity-focus first-surface-to-image track is 208.6319 mm and

$$
\frac{TL}{EFL} = \frac{208.6319}{176.9591} = 1.1790,
$$

so the numerical example is not a compact telephoto design in the $TL/EFL < 1$ sense. The refractive assembly itself, from the first to the last lens vertex, is 149.3579 mm long, or 0.8440× EFL; the long 59.274 mm rear image distance raises the complete track above one focal length. “Telephoto macro” is therefore retained as the patent's category name, not as a strict telephoto-ratio classification.

The surface-by-surface Petzval sum, calculated as

$$
P = \sum_i \frac{\phi_i}{n_i n_i'}, \qquad \phi_i = \frac{n_i' - n_i}{R_i},
$$

is $+9.79648 \times 10^{-4}\ \mathrm{mm}^{-1}$ for the patent prescription, corresponding to a Petzval radius of +1020.78 mm under this sign convention. After scaling, the sum is $+9.63095 \times 10^{-4}\ \mathrm{mm}^{-1}$ and the radius is +1038.32 mm.

## Element-by-Element Analysis

The focal lengths in this section are standalone thick-element values in air at the patent scale. For cemented components, these values describe the individual element removed from its assembly; they are not the component's in-situ power at the cemented interface. The paired data file stores the uniformly scaled values.

### L1 — Biconvex Positive

$n_d = 1.48749$, $\nu_d = 70.21$. Glass: S-FSL5 (OHARA catalog-coordinate match). $f = +163.727$ mm.

L1 is the fixed front collector. Its relatively low index and high Abbe number provide moderate positive power with limited primary chromatic contribution. The unequal curvatures distribute the refraction more strongly at the front surface while retaining a biconvex form.

### L2 — Positive Meniscus, Convex to Object (LD)

$n_d = 1.49700$, $\nu_d = 81.61$. Glass: S-FPL51 (OHARA catalog-coordinate match). $f = +149.959$ mm.

L2 is the first low-dispersion positive element. The rear radius of +5000 mm is nearly plane, so most of its power is at the front surface. The S-FPL51 catalog match has $\Delta P_{g,F} = +0.0280$; because the patent publishes only $n_d$ and $\nu_d$, the partial-dispersion identification is catalog-supported but not patent-explicit.

### L3 — Biconcave Negative

$n_d = 1.83400$, $\nu_d = 37.17$. Glass: S-LAH60 (OHARA catalog-coordinate match). $f = -140.749$ mm.

L3 supplies high-index negative power between the two S-FPL51-coordinate elements. Its substantially lower Abbe number makes it the principal compensating partner in the front chromatic-correction section. The high index reduces the curvature required for a given surface power relative to a lower-index flint.

### L4 — Biconvex Positive (LD)

$n_d = 1.49700$, $\nu_d = 81.61$. Glass: S-FPL51 (OHARA catalog-coordinate match). $f = +154.010$ mm.

L4 is the second low-dispersion positive element. It repeats the L2 glass coordinates but uses a biconvex form. Together, L2, L3, and L4 form the main positive-negative-positive color-correction sequence in LG1.

### L5 + L6 — Cemented Doublet D1

**L5:** $n_d = 1.74400$, $\nu_d = 44.79$. Glass: S-LAM2 (OHARA catalog-coordinate match). Standalone $f = -81.052$ mm.  
**L6:** $n_d = 1.51633$, $\nu_d = 64.15$. Glass: S-BSL7 (OHARA catalog-coordinate match). Standalone $f = +79.976$ mm.

The cemented pair has a net patent-scale focal length of −2191.54 mm. Its nearly power-neutral result is analytically important: the strong individual component powers largely cancel, while the large dispersion difference and strongly curved cemented interface provide chromatic correction. The individual standalone focal lengths must not be confused with their in-situ behavior inside the cemented assembly.

### L7 — Biconcave Negative

$n_d = 1.69680$, $\nu_d = 55.50$. Glass: S-LAL14 (OHARA catalog-coordinate match). $f = -65.008$ mm.

L7 is the strongest independent negative component in LG2 and supplies most of that group's diverging action. LG2's group focal length is −48.0569 mm, so L7 works with D2 rather than acting as an isolated focus lens.

### L8 + L9 — Cemented Doublet D2

**L8:** $n_d = 1.69680$, $\nu_d = 55.50$. Glass: S-LAL14 (OHARA catalog-coordinate match). Standalone $f = -58.296$ mm.  
**L9:** $n_d = 1.84666$, $\nu_d = 23.78$. Glass: S-TIH53 (OHARA catalog-coordinate match). Standalone $f = +76.487$ mm.

D2 has a net patent-scale focal length of −223.943 mm. The pair combines a negative lanthanum crown-coordinate element with a very high-index, low-Abbe positive element. Its net negative power supplements L7 while the large dispersion separation controls the chromatic variation introduced by the moving negative group.

### L10 — Biconvex Positive

$n_d = 1.58913$, $\nu_d = 61.18$. Glass: S-BAL35 (OHARA catalog-coordinate match). $f = +93.715$ mm.

L10 begins the positive LG3 immediately behind the stop. It restores convergence after LG2 and contributes to the compensating action required as LG2 moves through a large axial range.

### L11 + L12 — Cemented Doublet D3

**L11:** $n_d = 1.58913$, $\nu_d = 61.18$. Glass: S-BAL35 (OHARA catalog-coordinate match). Standalone $f = +66.463$ mm.  
**L12:** $n_d = 1.72825$, $\nu_d = 28.46$. Glass: S-TIH10 (OHARA catalog-coordinate match). Standalone $f = -124.954$ mm.

D3 has a net patent-scale focal length of +144.335 mm. Paragraph ¶0021 identifies the added positive lens in LG3 as the distinguishing change from Example 1 and attributes reduced spherical and axial chromatic aberration, plus shorter LG3 travel, to that modification. The numerical prescription implements the change as the positive L10 plus the positive-net D3 pair.

### L13 — Biconcave Negative

$n_d = 1.53172$, $\nu_d = 48.91$. Glass: S-TIL6 (OHARA catalog-coordinate match). $f = -45.194$ mm.

L13 supplies the dominant negative power in LG4. Its position near the image side gives it substantial leverage over field curvature, astigmatism, and coma, although the patent does not assign those corrections element by element. Those roles are therefore an optical interpretation of its power and placement rather than quoted patent language.

### L14 — Positive Meniscus, Convex to Object

$n_d = 1.67003$, $\nu_d = 47.25$. Glass: S-BAH10 (OHARA special-order catalog-coordinate match). $f = +90.026$ mm.

L14 partially offsets L13 but does not reverse the sign of LG4, whose net focal length remains −107.579 mm. The similar Abbe numbers of L13 and L14 mean the rear pair is not a conventional wide-dispersion achromat; its principal function is more plausibly monochromatic rear-group correction and control of the moving system's image-side conjugates.

## Glass Identification and Selection

The patent gives only $n_d$ and $\nu_d$, not manufacturer glass names. Every distinct coordinate pair in Example 2 matches an OHARA catalog entry at the listed precision. These are therefore exact **catalog-coordinate matches**, not proof that Tamron purchased a particular OHARA melt. HOYA's official cross-reference tables list equivalent or near-equivalent commercial grades for several of the same six-digit glass codes and explicitly caution that matching codes do not guarantee identical composition.

| Elements | Patent $n_d$ | Patent $\nu_d$ | OHARA coordinate match | Match status | Function in this design |
|---|---:|---:|---|---|---|
| L1 | 1.48749 | 70.21 | S-FSL5 | Exact | Low-index front crown |
| L2, L4 | 1.49700 | 81.61 | S-FPL51 | Exact | LD fluorophosphate-coordinate positive elements |
| L3 | 1.83400 | 37.17 | S-LAH60 | Exact | High-index negative chromatic partner |
| L5 | 1.74400 | 44.79 | S-LAM2 | Exact | Negative member of D1 |
| L6 | 1.51633 | 64.15 | S-BSL7 | Exact | Positive crown member of D1 |
| L7, L8 | 1.69680 | 55.50 | S-LAL14 | Exact | Negative LG2 components |
| L9 | 1.84666 | 23.78 | S-TIH53 | Exact | Dense-flint positive member of D2 |
| L10, L11 | 1.58913 | 61.18 | S-BAL35 | Exact | Positive LG3 components |
| L12 | 1.72825 | 28.46 | S-TIH10 | Exact | Dense-flint negative member of D3 |
| L13 | 1.53172 | 48.91 | S-TIL6 | Exact | Negative rear corrector |
| L14 | 1.67003 | 47.25 | S-BAH10 | Exact, special-order catalog | Positive final meniscus |

The data file carries OHARA catalog $n_C$, $n_F$, and $n_g$ indices for every element. L2 and L4 also carry the S-FPL51 catalog deviation $\Delta P_{g,F} = +0.0280$. This supports a spectral model beyond plain Abbe interpolation while preserving the distinction between a coordinate match and a patent-disclosed glass name.

The chromatic architecture has three principal stations:

- LG1 uses two high-Abbe S-FPL51-coordinate positive elements around the high-index, lower-Abbe L3, followed by the almost power-neutral D1 doublet.
- LG2 combines L7 with D2, whose components differ by 31.72 Abbe units.
- LG3 uses the positive-net D3 doublet with a 32.72-unit Abbe separation.

The prescription is therefore a strongly corrected long-focus achromat, but the patent and available manufacturer material do not justify labeling it apochromatic.

## Focus Mechanism

The lens uses floating internal focus. LG1 and the stop remain fixed in absolute position, while LG2, LG3, and LG4 move differently. The patent supplies infinity, −1/2×, and −1× states:

| Parameter | Infinity | −1/2× | −1× |
|---|---:|---:|---:|
| System EFL | 176.9587 mm | 138.9217 mm | 95.3078 mm |
| Patent FNO | 3.536 | 4.285 | 5.440 |
| D(11): LG1 → LG2 | 4.7192 mm | 20.9991 mm | 36.7439 mm |
| D(16): LG2 → stop | 35.5923 mm | 19.3121 mm | 3.5676 mm |
| D(17): stop → LG3 | 15.2508 mm | 9.1087 mm | 3.2000 mm |
| D(22): LG3 → LG4 | 15.1456 mm | 20.2861 mm | 25.1986 mm |
| Patent-labeled BFL | 59.274 mm | 60.275 mm | 61.271 mm |

At finite conjugates, the patent's `BFL` row is the last-surface-to-image distance for that focus state, not the Gaussian back focal length for collimated input.

Absolute group positions derived from the complete spacing table give the following infinity-to-1:1 motions:

- **LG2:** +32.0247 mm imageward. D(11) increases by the same amount while D(11)+D(16) remains constant, leaving the stop fixed.
- **LG3:** −12.0508 mm objectward, directly equal to the reduction in D(17).
- **LG4:** −1.9978 mm objectward. D(22) increases because LG3 moves objectward much farther than LG4; D(22) by itself is not LG4's absolute travel.
- **Image plane:** fixed to within 0.0008 mm, the residual being rounding in the patent table.

The previous interpretation that LG4 moved 10.1 mm imageward confused relative separation from LG3 with absolute group motion. The corrected absolute motion is approximately 2.0 mm objectward.

The sum D(11)+D(16)+D(17)+D(22)+BFL is 129.9819, 129.9810, and 129.9811 mm across the three states. Including fixed glass and air thicknesses gives a first-surface-to-image track of approximately 208.631 mm at every focus position. This is the paraxial basis for Tamron's statement that the floating IF system does not change the external length.

At the −1× state, the unscaled paraxial object distance from the first optical surface is 252.0809 mm and the first-surface-to-image track is 208.6311 mm. Uniform scaling gives an object-to-image distance of 468.6300 mm, within normal rounding of the manufacturer-published 0.47 m minimum focus distance.

## Chromatic Correction Strategy

The primary color-correction section is the L2-L3-L4 sequence in LG1. L2 and L4 have the S-FPL51 coordinate pair and catalog anomalous partial dispersion, while L3 is a high-index, substantially lower-Abbe negative element. This arrangement provides the main reduction of longitudinal color and secondary spectrum expected from Tamron's two-LD-element claim.

D1 then contributes very little net power while retaining strong refraction at its cemented interface. That makes it suitable for trimming residual chromatic error without materially changing LG1's positive power. The moving LG2 and LG3 groups each include a cemented pair with a large Abbe-number difference, which helps maintain chromatic balance as the conjugates change.

The patent's aberration plots on pages 6–7 show the d, C, and g traces at infinity, −1/2×, and −1×. They support the patent's claim that Example 2 improves axial chromatic behavior relative to Example 1, but they do not establish apochromatic correction under a formal multi-wavelength criterion.

## Conditional Expressions

The patent defines two conditions for the four-group architecture.

**Condition (1):**

$$
-0.30 < \frac{f_2}{f_\infty} < -0.26
$$

The independently calculated LG2 focal length is −48.056947 mm and the system EFL is 176.959134 mm, giving

$$
\frac{f_2}{f_\infty} = -0.27157,
$$

which rounds to the patent's −0.2716 and satisfies the condition. Paragraphs ¶0010–0011 explain that excessive negative LG2 power increases aberration variation, while insufficient power requires excessive focus travel.

**Condition (2):**

$$
0.06 < \frac{m_3}{f_\infty} < 0.08
$$

LG3 moves 12.0508 mm between infinity and −1×, so

$$
\frac{m_3}{f_\infty} = \frac{12.0508}{176.9587} = 0.06810,
$$

which rounds to the patent's 0.0681 and satisfies the condition. The condition limits LG3 travel while preserving its ability to compensate focus-dependent aberrations.

## Verification Summary

All load-bearing paraxial values were recomputed from the numerical prescription with a reduced-angle $(y,n\theta)$ matrix trace. A second independent $(y,\theta)$ implementation was used during the final review.

| Quantity | Patent / source value | Computed value | Difference |
|---|---:|---:|---:|
| Infinity EFL | 176.9587 mm | 176.959134 mm | +0.000434 mm |
| −1/2× EFL | 138.9217 mm | 138.921617 mm | −0.000083 mm |
| −1× EFL | 95.3078 mm | 95.307784 mm | −0.000016 mm |
| Infinity BFL | 59.274 mm | 59.273870 mm | −0.000130 mm |
| $f_2/f_\infty$ | −0.2716 | −0.27157 | within rounding |
| $m_3/f_\infty$ | 0.0681 | 0.06810 | within rounding |
| Petzval sum | — | $+9.79648\times10^{-4}$ mm⁻¹ | surface-by-surface |
| Infinity total track | — | 208.6319 mm | $TL/EFL=1.1790$ |
| Scaled infinity EFL | 180 mm marketed | 180.0004 mm | +0.0004 mm |
| Scaled −1× object-to-image distance | 0.47 m MFD | 468.63 mm | −1.37 mm |

The inferred semi-diameter set was also checked numerically:

| Constraint | Verified result |
|---|---:|
| Maximum $sd/|R|$ | 0.7602 < 0.90 |
| Maximum front/rear SD ratio within one element | 1.2480 ≤ 1.25 |
| Minimum computed edge thickness | 0.531 mm |
| Maximum signed cross-gap sag fraction | 0.8890 < 0.90 |
| Front-element semi-diameter | 34.5 mm < 36 mm filter radius |

The data file's endpoint variable gaps reproduce the infinity and −1× patent states after scaling. The intermediate −1/2× state is documented here but is not stored as a third focus control point because the current prime-lens schema accepts only infinity and close-focus endpoints.

## Design Heritage and Context

The patent cites earlier long-focus macro systems whose focusing groups required large travel or produced substantial effective-f-number variation. Its proposed remedy is the four-group positive-negative-positive-negative distribution with a fixed front group and multiple moving rear groups. Example 2 refines the first embodiment by adding positive power to LG3 and reducing that group's required travel.

Tamron's official product page identifies B01 as a 2003 model with 180 mm focal length, f/3.5 maximum aperture, 14 elements in 11 groups, two LD elements, 0.47 m minimum focus, 1:1 reproduction, a 72 mm filter, and Canon EF, Nikon F, and Sony/Minolta A variants. Tamron lists production as ending in December 2016. No Pentax K version appears in Tamron's official specification or discontinued-product records.

## Sources

- JP 2003-329924 A, *望遠マクロレンズ光学系*, Tamron Co., Ltd., published November 19, 2003. Example 2 is on patent page 4; its layout and aberration plots are Figures 5–8 on pages 6–7.
- Tamron Co., Ltd., official archived product page, “SP AF180mmF/3.5 Di LD [IF] MACRO1:1,” model B01: https://www.tamron.com/jp/consumer/lenses/data/af-lens/b01.html
- Tamron Co., Ltd., official Lens History, 2003 model listing: https://www.tamron.com/global/consumer/brandsite/history/
- OHARA GmbH, official “Glass data 5 decimal places,” April 2026, plus the official special-order glass catalog for S-BAH10: https://www.ohara-gmbh.com/en/dialog/downloads.html
- HOYA Optics Europe, official Glass Cross Reference Index: https://www.hoyaoptics.eu/glass-cross-reference-index
