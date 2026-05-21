# Canon EF 70-300mm f/4-5.6L IS USM — Optical Analysis

## Patent Reference and Design Identification

**Patent:** JP 2013-140404 A (Japan)
**Application Number:** 特願2013-87254 (P2013-87254) — divisional of 特願2010-81072 (P2010-81072)
**Filed:** 2013-04-18 (divisional); original filing 2010-03-31
**Published:** 2013-07-18
**Inventor:** Sugita Shigenobu (杉田 茂宣)
**Applicant:** Canon Kabushiki Kaisha (キヤノン株式会社)
**Title:** ズームレンズおよび光学機器 (Zoom Lens and Optical Apparatus)
**Embodiment analyzed:** Numerical Example 1 (数値例1; Reference Example 1 / 参考例1)
**Worked examples:** 5 numerical examples
**Claims:** 7

JP 2013-140404 A concerns a telephoto zoom architecture in which a positive first lens unit moves a long distance toward the object during zooming. The stated problem is the reduction of performance sensitivity to decentering of that extended front unit. Numerical Example 1 is the prescription transcribed here.

The match to the Canon EF 70-300mm f/4-5.6L IS USM rests on convergent optical and product evidence:

1. **Element and group count.** Numerical Example 1 has 19 glass elements in 14 air-separated groups, matching Canon's published specification for the production lens.
2. **Focal-length range.** The patent prescription gives 72.20, 135.00, and 290.00 mm design focal lengths. This is consistent with the marketed 70-300 mm range after ordinary production rounding.
3. **Maximum aperture.** The patent gives f/4.20, f/4.67, and f/5.86 at the three zoom positions, corresponding to the marketed f/4-5.6 class.
4. **Special glass count.** Two elements have $n_d = 1.49700$, $\nu_d = 81.5$, matching S-FPL51-class UD glass. Canon's product specification states that the lens uses two UD elements.
5. **Image circle.** The patent image height is 21.64 mm, giving a 43.28 mm diagonal image circle, appropriate for Canon EF 135-format full frame.
6. **Spherical-only prescription.** Numerical Example 1 contains no aspherical coefficient table and no aspherical surface designations.
7. **Timing.** The original filing date of 2010-03-31 precedes Canon's November 2010 market listing for the production lens.
8. **Stabilization context.** Canon identifies the production lens as an IS lens with a four-stop stabilizer, while the patent drawing and prescription include a compact post-stop negative unit suitable for the stabilizing group, although the patent does not explicitly assign IS function to a numbered group.

Reference Example 1 is not the claimed configuration of claim 1 in this divisional publication. Reference Examples 1-4 use the first-unit configuration with a rear positive meniscus having an image-side concave surface, governed by conditions (1)-(3). Numerical Example 5 is the working example aligned with the alternative biconvex-positive / biconcave-negative first-unit configuration governed by conditions (4)-(5). That claim-structure distinction does not weaken the production match for Numerical Example 1; the optical prescription, element count, focal range, field coverage, and special-glass count all align with the EF 70-300mm f/4-5.6L IS USM.

## Optical Architecture

The design is a six-unit telephoto zoom with power sequence **positive-negative-positive-negative-positive-negative** ($+\,-\,+\,-\,+\,-$). It uses 19 all-spherical elements in 14 air-separated groups and covers a 4.02× zoom ratio from 72.20 mm to 290.00 mm in the patent prescription.

| Unit | Surfaces | Elements | Unit focal length | Principal role |
|------|----------|----------|------------------:|----------------|
| L1 | 1-5 | 3 / 2 groups | +133.29 mm | Moving front collector; decentering-sensitive unit addressed by the patent |
| L2 | 6-10 | 3 / 2 groups | -36.99 mm | Stationary negative variator / mechanical datum |
| L3 | 11-16 | 3 / 2 groups + stop | +56.33 mm | Positive relay around the aperture stop |
| L4 | 17-19 | 2 / 1 cemented group | -108.86 mm | Compact negative compensator; probable IS group |
| L5 | 20-26 | 4 / 3 groups | +40.19 mm | Stationary positive imaging group |
| L6 | 27-34 | 4 / 4 groups | -47.63 mm | Rear negative focusing/imaging group candidate |

The patent's central architectural choice is the first unit. At the telephoto end, both axial marginal-ray height and off-axis chief-ray height are large in L1, so decentering of this extended unit can strongly perturb spherical aberration, coma, and field curvature. Reference Example 1 places an image-side-concave positive meniscus at the rear of L1 and cements it to a preceding negative meniscus. This keeps ray incidence closer to the surface normal at the critical rear surface and reduces sensitivity to tilt/decenter of the moving front barrel.

The telephoto-end optical track from the first surface to the final lens surface is 239.20 mm at a 290.00 mm design focal length, giving $tdt/ft = 0.825$. This satisfies the patent's compactness condition while leaving the required EF-mount mirror clearance behind the final element.

## Element-by-Element Analysis

### L1 — Positive Meniscus, Effectively Plano-Convex

$n_d = 1.48749$, $\nu_d = 70.2$. Glass: S-FSL5 (OHARA). $f = +189.9$ mm.

L1 is the front collector of the positive first zoom unit. The rear radius, $R_2 = +54691.362$ mm, is effectively flat, so the element behaves as a plano-convex low-index crown element. Its low index and high Abbe number keep the large-diameter front component mild in both Petzval contribution and primary chromatic power.

### L2 — Negative Meniscus, Convex to Object

$n_d = 1.61340$, $\nu_d = 44.3$. Glass: KZFS-class short flint, closest public match Schott N-KZFS4. $f = -131.0$ mm. Patent $\Delta P_{g,F}$ expression value: -0.00599.

L2 is cemented to L3 and is the negative member of the first-unit achromat. Its role is not merely ordinary C-F color balancing. The patent explicitly constrains the first-unit negative glass by index, Abbe number, and anomalous partial-dispersion expression. The stored $n_d$ and $\nu_d$ closely match Schott N-KZFS4, while the patent's condition (8) gives the anomalous-dispersion correction term as -0.00599.

The patent explains that excessive curvature of the object-side convex surface of this negative element can create inefficient lateral-color correction for off-axis rays. Lowering the index as far as the Petzval balance permits weakens that curvature and lets off-axis rays encounter the surface closer to normal incidence.

### L3 — Positive Meniscus, Convex to Object, UD Glass

$n_d = 1.49700$, $\nu_d = 81.5$. Glass: S-FPL51 (OHARA). $f = +99.9$ mm.

L3 is the positive UD member of the L2/L3 cemented doublet and the rearmost element of the first unit. The image-side concave surface at $R_5 = +337.720$ mm is the reference surface for condition (1), where $R_{pi}/f_1 = 2.534$.

This element supplies much of the first unit's positive power while keeping secondary color under control. Its rear concave surface is the decentering-sensitivity feature emphasized by the patent for Reference Example 1.

### L4 — Biconcave Negative

$n_d = 1.83481$, $\nu_d = 42.7$. Glass: S-LAH55V (OHARA). $f = -51.4$ mm.

L4 is the leading element of the stationary negative second unit. Its rear surface has much stronger curvature than the front surface, concentrating negative variator power while the high-index lanthanum glass limits surface curvature for a given optical power.

### L5 — Biconcave Negative

$n_d = 1.63854$, $\nu_d = 55.4$. Glass: S-BSM18 (OHARA). $f = -40.4$ mm.

L5 is the negative member of the cemented L5/L6 doublet in the second zoom unit. The correct public OHARA match for the stored $(n_d, \nu_d)$ pair is S-BSM18, not S-BAM12. Its moderate index and relatively high Abbe number make it the crown-like partner for the high-dispersion L6 element.

### L6 — Biconvex Positive

$n_d = 1.84666$, $\nu_d = 23.8$. Glass: S-TIH53 (OHARA). $f = +58.2$ mm.

L6 is the high-dispersion positive member cemented to L5. Although the element is positive in isolation, the L5/L6 cemented doublet remains a net-negative component of the second zoom unit. Its high dispersion balances the chromatic effect of L5.

### L7 — Biconvex Positive, UD Glass

$n_d = 1.49700$, $\nu_d = 81.5$. Glass: S-FPL51 (OHARA). $f = +76.6$ mm.

L7 is the second UD element and the leading element of the positive third unit. It sits just ahead of the aperture stop region, where marginal-ray heights remain significant, so its low dispersion is useful for limiting the chromatic burden of this positive relay power.

### L8 — Biconvex Positive

$n_d = 1.60311$, $\nu_d = 60.6$. Glass: S-BSM14 (OHARA). $f = +49.6$ mm.

L8 is the positive member of the L8/L9 cemented doublet in the third unit. The correct catalog identification is S-BSM14. S-PHM52 has a substantially different $n_d$ and $\nu_d$ pair and is not a valid match for this prescription.

### L9 — Negative Meniscus, Concave to Object

$n_d = 1.85026$, $\nu_d = 32.3$. Glass: S-LAH71 (OHARA). $f = -63.3$ mm.

L9 is cemented to L8 and supplies the high-index negative correction in the third-unit achromat. The correct catalog match is S-LAH71. S-LAH52 does not match the stored index or Abbe number and should not be used for this element.

### L10 — Biconcave Negative

$n_d = 1.70154$, $\nu_d = 41.2$. Glass: S-BAH27 (OHARA). $f = -27.6$ mm.

L10 is the negative member of the compact L4 doublet. The correct OHARA match is S-BAH27. It is a barium high-index glass rather than the previously inferred S-LAM51 lanthanum glass.

### L11 — Biconvex Positive

$n_d = 1.80518$, $\nu_d = 25.4$. Glass: S-TIH6 (OHARA). $f = +38.0$ mm.

L11 is cemented to L10 and forms the positive high-dispersion partner of the compact fourth unit. The doublet is net negative, with a unit focal length of -108.86 mm.

### L12 — Positive Meniscus, Concave to Object

$n_d = 1.69680$, $\nu_d = 55.5$. Glass: S-LAL14 (OHARA). $f = +80.2$ mm.

L12 is the leading element of the fifth unit. Its concave-to-object meniscus form contributes positive imaging power while gently steering the converging bundle into the following cemented achromat.

### L13 — Biconvex Positive

$n_d = 1.60311$, $\nu_d = 60.6$. Glass: S-BSM14 (OHARA). $f = +41.6$ mm.

L13 repeats the S-BSM14 glass used for L8 and is the positive member of the fifth-unit cemented doublet. It provides a substantial portion of L5 unit's positive power.

### L14 — Negative Meniscus, Concave to Object

$n_d = 1.84666$, $\nu_d = 23.8$. Glass: S-TIH53 (OHARA). $f = -48.1$ mm.

L14 is the high-dispersion negative member cemented to L13. Together the L13/L14 pair provides positive imaging power while balancing lateral and axial color in the rear half of the zoom system.

### L15 — Positive Meniscus, Convex to Object

$n_d = 1.77250$, $\nu_d = 49.6$. Glass: S-LAH66 (OHARA). $f = +108.6$ mm.

L15 is the rear positive meniscus of the fifth unit. Its moderate positive contribution helps complete the stationary imaging group's power distribution before the rear negative unit.

### L16 — Negative Meniscus, Convex to Object

$n_d = 1.88300$, $\nu_d = 40.8$. Glass: S-LAH58 (OHARA). $f = -48.7$ mm.

L16 is the leading negative element of the final unit. Its very high refractive index permits strong negative power in a compact meniscus form. This rear negative unit contributes to the long back focal distance needed by the EF SLR mount.

### L17 — Positive Meniscus, Concave to Object

$n_d = 1.80518$, $\nu_d = 25.4$. Glass: S-TIH6 (OHARA). $f = +58.8$ mm.

L17 is a positive, high-dispersion element air-spaced within the final unit. It partially offsets the negative power of L16 and L18 while contributing chromatic balancing in the rear group.

### L18 — Biconcave Negative

$n_d = 1.88300$, $\nu_d = 40.8$. Glass: S-LAH58 (OHARA). $f = -29.9$ mm.

L18 is the strongest individual negative element in the prescription. Its high-index biconcave form supplies much of the final unit's diverging power.

### L19 — Biconvex Positive

$n_d = 1.69895$, $\nu_d = 30.1$. Glass: S-TIM35 (OHARA). $f = +69.1$ mm.

L19 is the final glass element before the image plane. Its positive power partially compensates the strong negative rear-unit elements and helps control field curvature and rear-group chromatic behavior. The patent back focal distance from this element to the image plane is 46.74 mm at the wide end and 57.41 mm at the tele end.

## Glass Selection

The prescription uses 14 distinct public or class-level glass identifications across 19 elements. Four catalog corrections are important: L5 matches S-BSM18, L8/L13 match S-BSM14, L9 matches S-LAH71, and L10 matches S-BAH27.

| Glass / class | $n_d$ | $\nu_d$ | Elements | Role |
|---------------|------:|--------:|----------|------|
| S-FSL5 (OHARA) | 1.48749 | 70.2 | L1 | Low-index front collector crown |
| KZFS-class short flint, N-KZFS4 equivalent | 1.61340 | 44.3 | L2 | Negative anomalous-dispersion first-unit glass |
| S-FPL51 (OHARA) | 1.49700 | 81.5 | L3, L7 | UD positive elements |
| S-LAH55V (OHARA) | 1.83481 | 42.7 | L4 | High-index negative variator glass |
| S-BSM18 (OHARA) | 1.63854 | 55.4 | L5 | Crown-like negative member in L2 doublet |
| S-TIH53 (OHARA) | 1.84666 | 23.8 | L6, L14 | High-dispersion titanium flint partners |
| S-BSM14 (OHARA) | 1.60311 | 60.6 | L8, L13 | Moderate-index positive doublet partners |
| S-LAH71 (OHARA) | 1.85026 | 32.3 | L9 | Dense lanthanum negative achromat partner |
| S-BAH27 (OHARA) | 1.70154 | 41.2 | L10 | Negative member of compact fourth-unit doublet |
| S-TIH6 (OHARA) | 1.80518 | 25.4 | L11, L17 | High-dispersion positive partners |
| S-LAL14 (OHARA) | 1.69680 | 55.5 | L12 | Positive meniscus in fifth unit |
| S-LAH66 (OHARA) | 1.77250 | 49.6 | L15 | Rear positive fifth-unit corrector |
| S-LAH58 (OHARA) | 1.88300 | 40.8 | L16, L18 | Very high-index negative rear-unit glasses |
| S-TIM35 (OHARA) | 1.69895 | 30.1 | L19 | Final positive rear corrector |

The chromatic strategy uses both ordinary achromatization and anomalous partial dispersion. S-FPL51 UD elements supply low-dispersion positive power in L1 and L3, while high-dispersion titanium and dense lanthanum flints appear in the cemented doublets. L2's KZFS-class glass is specifically governed by conditions (6)-(8), including the negative anomalous partial-dispersion expression value of -0.00599.

## Focus Mechanism

The production Canon lens is specified with USM autofocus and a 1.2 m minimum focus distance. The patent, however, publishes only infinity-focus zoom spacings for Numerical Example 1. It gives no close-focus prescription, magnification-dependent variable gaps, or moving focus-group table.

The final negative unit L6 is the most plausible primary focusing candidate because the patent's background discussion notes rear negative-unit focusing as a way to simplify the front-unit drive, and L6 is a four-element negative rear unit. That remains an inference, not an explicit disclosure for Numerical Example 1.

The data file therefore models the patent prescription at infinity focus only. Each zoom variable is encoded with identical infinity and close-focus values so that the file preserves the published zoom geometry without inventing unsupported floating-focus movements.

| Variable gap | Wide | Mid | Tele | Function in data file |
|--------------|-----:|----:|-----:|-----------------------|
| d5 | 2.78 | 32.18 | 56.78 | L1-L2 zoom gap |
| d10 | 26.47 | 14.15 | 1.28 | L2-L3 zoom gap |
| d16 | 6.01 | 24.56 | 44.99 | Stop/L3 to L4 zoom gap |
| d19 | 16.39 | 10.16 | 2.60 | L4-L5 zoom gap |
| d26 | 11.97 | 10.82 | 1.30 | L5-L6 zoom gap |
| BF | 46.74 | 47.82 | 57.41 | Final surface to image plane |

## Aspherical Surfaces

Numerical Example 1 has no aspherical surfaces. All listed optical surfaces are spherical, and the patent provides no aspherical coefficient table for this example.

## Image Stabilization

Canon identifies the production EF 70-300mm f/4-5.6L IS USM as a stabilized lens with a four-stop optical image stabilizer. JP 2013-140404 A does not describe the IS mechanism directly; its invention is directed to reducing front-unit decentering sensitivity during zoom extension.

Within the patent prescription, L4 is the best optical candidate for the IS group. It is a compact cemented doublet immediately behind the aperture stop, has small clear apertures of roughly 22.8-23.6 mm in the patent table, and has relatively weak net negative power compared with the surrounding relay and imaging units. This assignment should be treated as an informed optical inference rather than an explicit patent statement.

## Zoom Kinematics

The patent's variable-spacing table and the computed absolute group positions show two stationary optical datums: L2 and L5. L2 is explicitly described by the patent as stationary during zooming; L5 stationarity follows from the published variable gaps and total-track data.

| Unit | Wide front position from image | Tele front position from image | Movement |
|------|-------------------------------:|-------------------------------:|---------:|
| L1 | 185.20 mm | 239.20 mm | +54.00 mm objectward |
| L2 | 163.55 mm | 163.55 mm | stationary |
| L3 | 128.32 mm | 153.51 mm | +25.19 mm objectward |
| L4 | 110.89 mm | 97.10 mm | -13.79 mm imageward |
| L5 | 89.49 mm | 89.49 mm | stationary |
| L6 | 66.02 mm | 76.69 mm | +10.67 mm objectward |

The large objectward travel of L1 is the mechanical condition that motivates the patent. The stationary L2 unit reduces relative decentering error between the moving front collector and the following negative variator.

## Conditional Expressions

Numerical Example 1 satisfies the conditions applicable to the Reference Example 1 first-unit form.

| Condition | Meaning | Computed value | Status |
|-----------|---------|---------------:|--------|
| (1) | $1.55 < R_{pi}/f_1 < 2.90$ | 2.534 | satisfied |
| (2) | $0.80 < R_{pi}/td_1 < 9.00$ | 6.254 | satisfied |
| (3) | $0.50 < R_{pi}/R_{no} < 6.00$ | 3.451 | satisfied |
| (6) | $1.50 < N_n < 1.78$ | 1.61340 | satisfied |
| (7) | $20 < \nu_{dN} < 55$ | 44.3 | satisfied |
| (8) | $-0.015 < \theta_{gF}-0.6438+0.001682\nu_{dN} < 0.002$ | -0.00599 | satisfied |
| (9) | $0.2 < tdt/ft < 1.0$ | 0.825 | satisfied |

Conditions (4) and (5) apply to the alternative working-example first-unit form and are not applicable to Numerical Example 1.

## Verification Summary

Independent paraxial y-u ray tracing of the transcribed prescription reproduced the patent focal lengths and back focal distances. The residual image height for an incoming parallel axial ray was below 0.0003 mm at all three zoom positions.

| Parameter | Wide | Mid | Tele |
|-----------|-----:|----:|-----:|
| EFL computed | 72.2035 mm | 135.0357 mm | 290.1091 mm |
| EFL patent | 72.20 mm | 135.00 mm | 290.00 mm |
| BFL computed | 46.7462 mm | 47.8482 mm | 57.4696 mm |
| BF patent | 46.74 mm | 47.82 mm | 57.41 mm |
| Patent f-number | 4.20 | 4.67 | 5.86 |
| Patent half-field | 16.68° | 9.10° | 4.27° |

The six unit focal lengths computed independently from the surface prescription are +133.291, -36.987, +56.331, -108.856, +40.187, and -47.632 mm, agreeing with the patent unit table to the shown precision.

The surface semi-diameters in the paired data file are half of the patent's 有効径 values. The unscaled patent diameters pass the renderer-oriented edge and cross-gap checks when converted to semi-diameters; the tightest air gap is the L4-L5 boundary inside the second zoom unit, which remains below the 90% sag-intrusion threshold.

## Sources

- JP 2013-140404 A, published 2013-07-18. Primary source for the prescription, variable gaps, condition values, and design rationale.
- Canon Camera Museum, "EF70-300mm f/4-5.6L IS USM." https://global.canon/en/c-museum/product/ef407.html
- OHARA optical-glass catalog pages for S-FSL5, S-FPL51, S-LAH55V, S-BSM18, S-TIH53, S-BSM14, S-LAH71, S-BAH27, S-TIH6, S-LAL14, S-LAH66, S-LAH58, and S-TIM35.
- SCHOTT Advanced Optics, N-KZFS4 optical glass datasheet and product page.
