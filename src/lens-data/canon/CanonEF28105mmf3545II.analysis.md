# Canon EF 28-105mm f/3.5-4.5 II USM — Optical Prescription Analysis

## Patent Reference and Design Identification

**Patent:** JP 2002-365547 A  
**Application Number:** JP 2001-175881  
**Filed:** 11 June 2001  
**Published:** 18 December 2002  
**Inventor:** Makoto Mitsusaka (三坂 誠)  
**Applicant:** Canon Inc.  
**Title:** ズームレンズ及びそれを有する光学機器 (_Zoom Lens and Optical Apparatus Having the Same_)  
**Embodiment analyzed:** Numerical Example 1, Figures 1-4, prescription on patent p. 8

Numerical Example 1 is a strong optical correlate of the Canon EF 28-105mm f/3.5-4.5 II USM, but the patent does not identify a retail product and the correspondence cannot be treated as proof of the factory prescription. The association rests on convergent evidence:

1. Canon specifies 15 elements in 12 groups for the production lens. Example 1 contains 15 physical elements in 12 air-spaced components, including three cemented doublets.
2. The patent gives 28.90-101.37 mm and f/3.63-4.67. This closely corresponds to the marketed 28-105mm f/3.5-4.5 range, although the rounded patent tele state is shorter and slower than the retail markings.
3. The patent focal lengths and full fields produce paraxial full-field diameters of 43.244, 43.272, and 43.263 mm, consistent with the 43.27 mm diagonal of the 24 × 36 mm format.
4. The patent prescription and Canon's official construction diagram are compatible at the level of element count, cemented-pair placement, major curvature sequence, five optical groups, and stop location. The production diagram is schematic and cannot exclude every sibling numerical example.
5. Canon specifies inner focusing, Ring USM drive, a 0.50 m minimum focusing distance, and 0.19× maximum magnification. Patent ¶0021 recommends focusing by translating the compact negative second group.
6. Canon states that the October 2000 II version is practically identical optically and mechanically to the original November 1992 lens.

The dating is a material limitation. The II lens predates the June 2001 filing, and Numerical Examples 1-4 share almost the same focal range, aperture, element count, and gross topology. Example 1 is therefore best described as a closely related and probably representative Canon formula, not as a conclusively identified production prescription.

The publication contains several internal inconsistencies that must not be propagated into the optical interpretation:

- The front-page abstract describes a `+ − + + −` group sequence. Claims 1-5, ¶0011, ¶0020, Figure 1, and the numerical prescription establish `+ − + − +`.
- Paragraph 0011 appends $1.0<\lvert f_4\rvert/f_w<1.6$ to its summary of Claim 1, although Claim 1 and ¶0023 contain only the Group 3 conditions. The Group 4 ratio belongs to Claim 2 and condition (7).
- Paragraph 0046 calls L1b negative. Claim 4 and the prescription establish a positive meniscus; its standalone thick-lens focal length is +93.684 mm.
- Table 1 labels condition (6) as $ν_{4b}-ν_{3a}$, but its value, 23.8, is $ν_{4b}-ν_{4a}=53.9-30.1$, matching condition (6) in ¶0031.
- Claim 5 copies the L1-style index inequality and power-ratio range. Example 1 happens to satisfy the copied index range, but its $f_5/f_w=1.753123$ fails the printed $2.1<f_5/f_w<3.2$. Paragraphs 0050-0055 and Table 1 give the coherent conditions (15) and (16): the upper index bound uses $-0.006ν_{5b}+1.97$, and $1.4<f_5/f_w<2.1$.

## Optical Architecture

Example 1 is a 3.51× five-moving-group zoom with power sequence `positive - negative - positive - negative - positive`. It contains 15 elements in 12 air-spaced components and three cemented doublets. Numerical Example 1 supplies no aspherical coefficients or aspherical surface markings; all 27 refracting interfaces are therefore modeled as spherical, with surface 14 representing the aperture stop.

- **L1, positive:** a weakly positive cemented front pair followed by an air-spaced positive meniscus. It is the front collector and moves strongly objectward during zooming.
- **L2, negative:** four singlets in a negative-negative-positive-negative sequence. It is the principal variator and the patent's preferred inner-focus group.
- **L3, positive:** a cemented negative-positive pair followed by a positive singlet. The aperture stop moves with this group in the tabulated zoom law.
- **L4, negative:** a compact cemented positive-negative pair serving as a compensating group.
- **L5, positive:** three singlets forming the rear relay. It moves in exact axial lockstep with L3 in the published states.

Patent ¶0027 describes the wide-end allocation as a retro-type power arrangement. The independently calculated wide-state BFD/EFL is $38.890/28.903=1.345$, confirming that the back focal distance exceeds the effective focal length. Total track divided by EFL remains greater than one at every state, so the tele end is not a strict telephoto-length configuration.

## Element-by-Element Analysis

The focal lengths below are standalone, in-air, thick-lens values calculated independently from each element's radii, center thickness, and d-line index. They are not interchangeable with each element's in-situ contribution inside a cemented assembly. Cemented-net and complete-group powers are stated separately.

### L1a — Negative Meniscus, Convex to Object

**nd = 1.846660, νd = 23.8. Glass: S-TIH53-class OHARA equivalent; vendor unspecified. f = −125.336 mm.**

L1a is the high-index, high-dispersion member of the front cemented pair. Its two positive radii and negative calculated power establish an object-convex negative meniscus. Together with L1b it forms a very weak positive component of +392.040 mm, indicating that chromatic balancing is more important than net power in the pair.

### L1b — Positive Meniscus, Convex to Object

**nd = 1.622992, νd = 58.2. Glass: S-BSM15-class OHARA equivalent; vendor unspecified. f = +93.684 mm.**

L1b is the positive crown partner of L1a. The prescription and Claim 4 establish its positive sign despite the contrary wording in ¶0046. Its higher Abbe number supplies the crown side of the front achromat.

### L1c — Positive Meniscus, Convex to Object

**nd = 1.712995, νd = 53.9. Glass: S-LAL8-class OHARA equivalent; vendor unspecified. f = +92.661 mm.**

L1c is air-spaced behind the cemented pair. It raises the complete L1 group from the pair's weak +392.040 mm focal length to +76.290 mm and supplies most of the group's useful positive convergence.

### L2a — Negative Meniscus, Convex to Object

**nd = 1.834000, νd = 37.2. Glass: S-LAH60V-class OHARA equivalent; vendor unspecified. f = −19.862 mm.**

L2a is the strongest isolated negative element in the variator/focus group. Its high index permits substantial negative power with compact curvature, while its 37.2 Abbe number places it in dense-flint territory.

### L2b — Biconcave Negative

**nd = 1.804000, νd = 46.6. Glass: S-LAH65V-class OHARA equivalent; vendor unspecified. f = −25.704 mm.**

The negative-positive radius sequence establishes a biconcave element. S-LAH65V is a dense lanthanum flint, not a crown; its Abbe number is below the usual crown/flint boundary. The adjacent air spaces provide correction freedom for distortion, coma, and zoom compensation.

### L2c — Biconvex Positive

**nd = 1.846660, νd = 23.9. Glass: PBH53/PBH53W historical OHARA equivalent; vendor inferred. f = +18.944 mm.**

L2c is a strong positive insertion between negative members. It moderates the complete group's negative power while preserving a compact variator. OHARA's historical PBH53/PBH53W entry matches the rounded 847239 coordinate; the supplier remains inferred rather than patent-disclosed.

### L2d — Biconcave Negative

**nd = 1.772499, νd = 49.6. Glass: S-LAH66-class OHARA equivalent; vendor unspecified. f = −35.706 mm.**

L2d is a relatively weak biconcave negative element with a nearly flat rear surface. Conditions (8)-(10) constrain its index, Abbe number, and the complete L2 power. The independently calculated L2 group focal length is −14.739 mm.

### L3a — Negative Meniscus, Convex to Object

**nd = 1.846660, νd = 23.9. Glass: PBH53/PBH53W historical OHARA equivalent; vendor inferred. f = −35.218 mm.**

L3a is the negative member of the principal L3 cemented achromat. Its form follows directly from the two positive radii and negative standalone power.

### L3b — Biconvex Positive

**nd = 1.622992, νd = 58.2. Glass: S-BSM15-class OHARA equivalent; vendor unspecified. f = +18.339 mm.**

L3b is the strong positive crown partner of L3a. The cemented pair has a net focal length of +38.215 mm. Conditions (1) and (2) apply to the arithmetic mean of L3b and L3c, giving $ν_{3p}=59.4$ and $N_{3p}=1.613052$.

### L3c — Biconvex Positive

**nd = 1.603112, νd = 60.6. Glass: S-BSM14-class OHARA equivalent, catalog code 603607. f = +46.852 mm.**

L3c is air-spaced behind the cemented pair and brings the complete L3 group to +21.876 mm. The current OHARA catalog code is 603607; the raw code 603606 obtained by rounding the patent's displayed pair is not the manufacturer's catalog code.

### L4a — Positive Meniscus, Convex to Image

**nd = 1.698947, νd = 30.1. Glass: S-TIM35-class OHARA equivalent; vendor unspecified. f = +23.773 mm.**

Both radii are negative and the calculated power is positive, establishing an image-convex positive meniscus. L4a is the high-dispersion positive member of a net-negative cemented pair.

### L4b — Biconcave Negative

**nd = 1.712995, νd = 53.9. Glass: S-LAL8-class OHARA equivalent; vendor unspecified. f = −15.223 mm.**

L4b is the lower-dispersion negative member of the pair. The complete cemented L4 group has a focal length of −38.734 mm. Conditions (4)-(7) constrain its glass, the correct $ν_{4b}-ν_{4a}=23.8$ separation, and $\lvert f_4\rvert/f_w$.

### L5a — Biconvex Positive with Weak Object Surface

**nd = 1.487490, νd = 70.2. Glass: S-FSL5-class OHARA equivalent; vendor unspecified. f = +35.708 mm.**

L5a has a nearly flat object-side surface, $R_{23}=+780.731$ mm, and a strongly curved image-side surface, $R_{24}=-17.767$ mm. It is the design's lowest-dispersion element. That fact alone does not establish Canon UD branding, which Canon's production specification does not claim.

### L5b — Biconvex Positive

**nd = 1.589130, νd = 61.1. Glass: S-BAL35-class OHARA equivalent, catalog code 589612. f = +61.645 mm.**

L5b is a moderate positive crown constrained by conditions (14)-(16). The current OHARA catalog code is 589612; the raw code 589611 obtained from the rounded patent pair must not be substituted for the manufacturer-assigned code.

### L5c — Negative Meniscus, Convex to Image

**nd = 1.846660, νd = 23.9. Glass: PBH53/PBH53W historical OHARA equivalent; vendor inferred. f = −33.698 mm.**

The two negative radii and negative calculated power establish an image-convex negative meniscus. It completes the rear relay while keeping the full L5 group positive at +50.665 mm.

## Glass Identification and Selection

The patent publishes only $n_d$ and $ν_d$ and does not identify glass manufacturers. The names below are current or historical OHARA catalog equivalents, not claims about Canon's production melts. Residuals were recalculated against the official May 2023 pocket catalog and the archival catalog containing PBH53/PBH53W.

| Patent $n_d/ν_d$ | Current catalog equivalent         | Catalog code | Residual $(Δn_d,Δν_d)$ | Used at       |
| ---------------: | ---------------------------------- | -----------: | ---------------------: | ------------- |
|  1.846660 / 23.8 | S-TIH53                            |       847238 |       0.000000 / −0.02 | L1a           |
|  1.622992 / 58.2 | S-BSM15                            |       623582 |      −0.000002 / −0.04 | L1b, L3b      |
|  1.712995 / 53.9 | S-LAL8                             |       713539 |      +0.000005 / −0.03 | L1c, L4b      |
|  1.834000 / 37.2 | S-LAH60V                           |       834372 |       0.000000 / +0.01 | L2a           |
|  1.804000 / 46.6 | S-LAH65V                           |       804466 |       0.000000 / −0.02 | L2b           |
|  1.846660 / 23.9 | PBH53 / PBH53W                    |       847239 |       0.000000 / −0.02 | L2c, L3a, L5c |
|  1.772499 / 49.6 | S-LAH66                            |       773496 |       +0.000001 / 0.00 | L2d           |
|  1.603112 / 60.6 | S-BSM14                            |       603607 |      −0.000002 / +0.04 | L3c           |
|  1.698947 / 30.1 | S-TIM35                            |       699301 |      +0.000003 / +0.03 | L4a           |
|  1.487490 / 70.2 | S-FSL5                             |       487702 |       0.000000 / +0.03 | L5a           |
|  1.589130 / 61.1 | S-BAL35                            |       589612 |       0.000000 / +0.04 | L5b           |

The design distributes ordinary achromatization across the cemented L1, L3, and L4 pairs and the low-dispersion positive members in L5. The patent provides no line indices or partial-dispersion data. The appropriate characterization is therefore a multi-group achromatic zoom, not an apochromatic design.

## Focus Mechanism

Canon specifies inner focusing driven by Ring USM, full-time manual focusing, a 0.50 m minimum focusing distance throughout the zoom range, and 0.19× maximum magnification. Patent ¶0021 permits unit or group focusing but recommends translating L2 because it is compact and maintains performance.

The patent publishes no finite-conjugate spacing table. A first-order model was therefore solved with the image plane and L1/L3/L4/L5 fixed while L2 moves objectward. The object plane was placed 500.0 mm in front of the image plane, consistent with the conventional measurement of minimum focus distance from the film plane. The paired data file uses these inferred values to provide a coherent focus control; they are not asserted as Canon's production cam law.

| Zoom state | L2 motion from infinity | Focused D5 | Focused D13 | Paraxial magnification |
| ---------- | ----------------------: | ---------: | ----------: | ---------------------: |
| 28.90 mm   |     1.200 mm objectward |   0.750 mm |   15.860 mm |              −0.06754× |
| 50.00 mm   |     1.963 mm objectward |  11.807 mm |   10.283 mm |              −0.10926× |
| 101.37 mm  |     4.511 mm objectward |  24.129 mm |    6.471 mm |              −0.17788× |

The tele-state first-order magnitude, 0.1779×, is close in scale to Canon's rounded 0.19× production value, but it does not prove the inferred L2-only focus law.

## Zoom Kinematics

With the image plane fixed, the independently solved group positions reproduce the patent's overall zoom description. Negative motion is objectward.

| Group / stop | Wide position | Mid position | Tele position | Wide-to-tele motion |
| ------------ | ------------: | -----------: | ------------: | ------------------: |
| L1 front     |      −118.410 |     −130.425 |      −145.202 |          −26.792 mm |
| L2 front     |      −103.650 |     −103.845 |      −103.752 |           −0.102 mm |
| Stop         |       −74.620 |      −81.155 |       −87.422 |          −12.802 mm |
| L3 front     |       −74.550 |      −81.085 |       −87.352 |          −12.802 mm |
| L4 front     |       −63.810 |      −67.405 |       −70.722 |           −6.912 mm |
| L5 front     |       −51.290 |      −57.825 |       −64.092 |          −12.802 mm |

L3, L5, and the stop move in exact lockstep because $D_{19}+D_{22}=9.05$ mm at all three positions. L2 is nearly stationary: the rounded table places it 0.196 mm objectward at mid and then 0.094 mm imageward by tele, leaving a net 0.102 mm objectward displacement. This small printed-state reversal is not shown by the patent's schematic arrow and is plausibly within the effect of rounded prescription data.

The variable-gap changes from wide to tele are $ΔD_5=+26.69$ mm, $ΔD_{13}=-12.70$ mm, $ΔD_{19}=+5.89$ mm, and $ΔD_{22}=-5.89$ mm, matching the patent's increase-decrease-increase-decrease sequence.

## Conditional Expressions

All detailed conditions (1)-(16) and preferred conditions (1a)-(16a) were recalculated directly from Numerical Example 1. The group-power ratios use independently traced group focal lengths and the patent's published $f_w=28.90$ mm. Small differences from Table 1 result from the rounded surface prescription.

Table 1 does not print $ν_{3p}$ and $N_{3p}$ directly. It lists the two positive-glass entries separately: $ν_{3b}=58.2$, $ν_{3c}=60.6$, $N_{3b}=1.622992$, and $N_{3c}=1.603112$. Their arithmetic means are the quantities defined in ¶0023.

| Condition                                    |             Recalculated value |                 Table 1 basis / value | Result    |
| -------------------------------------------- | -----------------------------: | ------------------------------------: | --------- |
| $50<ν_{3p}<65$                               |                           59.4 |                 mean of 58.2 and 60.6 | satisfied |
| $-0.001ν_{3p}+1.61<N_{3p}<-0.006ν_{3p}+2.04$ | 1.613052; bounds 1.5506-1.6836 |         mean of 1.622992 and 1.603112 | satisfied |
| $0.6<f_3/f_w<0.9$                            |                       0.756955 |                              0.756955 | satisfied |
| $36<ν_{4b}<61$                               |                           53.9 |                                  53.9 | satisfied |
| $-0.005ν_{4b}+1.90<N_{4b}<-0.005ν_{4b}+2.03$ | 1.712995; bounds 1.6305-1.7605 |                              1.712995 | satisfied |
| $12<ν_{4b}-ν_{4a}<34$                        |                           23.8 | 23.8; Table 1 subscript is misprinted | satisfied |
| $1.0<\lvert f_4\rvert/f_w<1.6$               |                       1.340269 |                              1.340242 | satisfied |
| $36<ν_{2d}<59$                               |                           49.6 |                                  49.6 | satisfied |
| $-0.008ν_{2d}+2.11<N_{2d}<-0.005ν_{2d}+2.03$ | 1.772499; bounds 1.7132-1.7820 |                              1.772499 | satisfied |
| $0.4<\lvert f_2\rvert/f_w<0.6$               |                       0.509983 |                              0.509965 | satisfied |
| $49<ν_{1b}<62$                               |                           58.2 |                                  58.2 | satisfied |
| $-0.001ν_{1b}+1.62<N_{1b}<-0.008ν_{1b}+2.13$ | 1.622992; bounds 1.5618-1.6644 |                              1.622992 | satisfied |
| $2.1<f_1/f_w<3.2$                            |                       2.639794 |                              2.639758 | satisfied |
| $36<ν_{5b}<64$                               |                           61.1 |                                  61.1 | satisfied |
| $-0.001ν_{5b}+1.62<N_{5b}<-0.006ν_{5b}+1.97$ | 1.589130; bounds 1.5589-1.6034 |                              1.589130 | satisfied |
| $1.4<f_5/f_w<2.1$                            |                       1.753123 |                              1.753045 | satisfied |

The preferred sub-ranges also pass:

| Preferred condition                          |                 Value / bounds | Result    |
| -------------------------------------------- | -----------------------------: | --------- |
| $55<ν_{3p}<62$                               |                           59.4 | satisfied |
| $-0.007ν_{3p}+2.01<N_{3p}<-0.006ν_{3p}+1.98$ | 1.613052; bounds 1.5942-1.6236 | satisfied |
| $0.68<f_3/f_w<0.83$                          |                       0.756955 | satisfied |
| $49<ν_{4b}<59$                               |                           53.9 | satisfied |
| $-0.008ν_{4b}+2.11<N_{4b}<-0.008ν_{4b}+2.15$ | 1.712995; bounds 1.6788-1.7188 | satisfied |
| $19<ν_{4b}-ν_{4a}<24$                        |                           23.8 | satisfied |
| $1.15<\lvert f_4\rvert/f_w<1.5$              |                       1.340269 | satisfied |
| $44<ν_{2d}<56$                               |                           49.6 | satisfied |
| $-0.008ν_{2d}+2.13<N_{2d}<-0.005ν_{2d}+2.03$ | 1.772499; bounds 1.7332-1.7820 | satisfied |
| $0.45<\lvert f_2\rvert/f_w<0.55$             |                       0.509983 | satisfied |
| $55<ν_{1b}<62$                               |                           58.2 | satisfied |
| $-0.007ν_{1b}+2.01<N_{1b}<-0.006ν_{1b}+1.98$ | 1.622992; bounds 1.6026-1.6308 | satisfied |
| $2.4<f_1/f_w<2.9$                            |                       2.639794 | satisfied |
| $55<ν_{5b}<62$                               |                           61.1 | satisfied |
| $-0.007ν_{5b}+2.01<N_{5b}<-0.006ν_{5b}+1.98$ | 1.589130; bounds 1.5823-1.6134 | satisfied |
| $1.6<f_5/f_w<1.9$                            |                       1.753123 | satisfied |

## Independent Paraxial Verification

The p. 8 prescription was re-entered independently and traced in both reduced-angle $[y,nθ]$ and ordinary-angle $[y,θ]$ formulations. The two methods reproduced the first-order results to numerical precision.

### System States

| State | Patent $f$ | Computed EFL | Difference | Computed BFD | First surface to image | Full field | Paraxial full-field diameter |
| ----- | ---------: | -----------: | ---------: | -----------: | ---------------------: | ---------: | ---------------------------: |
| Wide  |      28.90 |    28.902522 |  +0.002522 |    38.889556 |             118.409556 |      73.6° |                    43.243698 |
| Mid   |      50.00 |    49.997626 |  −0.002374 |    45.425398 |             130.425398 |      46.8° |                    43.271810 |
| Tele  |     101.37 |   101.333334 |  −0.036666 |    51.691521 |             145.201521 |      24.1° |                    43.263015 |

The tele residual is 0.0367 mm, or about 0.036%, consistent with the radii, spacings, and indices being rounded in the publication.

### Group, Cemented-Component, and Element Powers

| Assembly           | Calculated focal length |
| ------------------ | ----------------------: |
| L1                 |           +76.290053 mm |
| L2                 |           −14.738516 mm |
| L3                 |           +21.876004 mm |
| L4                 |           −38.733775 mm |
| L5                 |           +50.665258 mm |
| L1a-b cemented net |          +392.040101 mm |
| L3a-b cemented net |           +38.215018 mm |
| L4a-b cemented net |           −38.733775 mm |

The 15 standalone element focal lengths are given in the element sections and duplicated in the paired data file for the inspector.

### Petzval Sum

The Petzval contribution was calculated surface by surface as

$$
P_i=\frac{(n_i'-n_i)/R_i}{n_i n_i'}.
$$

The total is $P=+0.002822581$ mm$^{-1}$, corresponding to a first-order Petzval radius of +354.286 mm under the adopted sign convention. No thin-element shortcut was used.

### Inferred Semi-Diameters

The patent does not publish clear apertures. The data-file semi-diameters are reconstruction values based on combined marginal and chief-ray envelopes and checked against the production lens's 58 mm filter thread. Independent geometry and ray checks give:

- maximum $sd/\lvert R\rvert=0.771884$ at surface 21, below the 0.90 renderer limit;
- maximum front/rear semi-diameter ratio of 1.42553 within an element, at L2a;
- minimum calculated element edge thickness of 0.5022 mm, at L1c;
- minimum signed residual air-gap clearance of 0.3201 mm, equal to 10.46% of D26;
- minimum paraxial clearance of 0.6588 mm for the default infinity bundles at 60% field and the configured pupil fractions.

The gap and element checks were repeated at all three infinity states and the inferred close-focus states. These semi-diameters are viewer reconstructions, not measurements of production clear apertures.

## Sources

1. Canon Inc., **JP 2002-365547 A**, _ズームレンズ及びそれを有する光学機器_, especially Claims 1-6, ¶0011-0058, Numerical Example 1 on p. 8, Table 1 on p. 11, and Figures 1-4.
2. Canon Camera Museum, [EF28-105mm f/3.5-4.5 II USM](https://global.canon/en/c-museum/product/ef362.html), official specifications and construction diagram.
3. Canon Camera Museum, [EF28-105mm f/3.5-4.5 USM](https://global.canon/en/c-museum/product/ef314.html), official original-version specifications.
4. OHARA, [Optical Glass Pocket Catalog, May 2023](https://oharacorp.com/wp-content/uploads/2023/06/ohara-pocket-catalog-2023-05.pdf), official $n_d$, $ν_d$, catalog-code, and dispersion data.
5. OHARA, [_Optical Glass_ catalog 02-06](https://wp.optics.arizona.edu/optomech/wp-content/uploads/sites/53/2016/10/Ohara_Glass_Catalog.pdf), archival PBH53/PBH53W 847239 data.
