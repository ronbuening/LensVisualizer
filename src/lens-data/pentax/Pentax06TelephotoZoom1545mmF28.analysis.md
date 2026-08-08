## Patent Reference and Design Identification

**Patent:** US 9,784,950 B2
**Application Number:** 14/426,558
**Priority:** September 11, 2012 (JP 2012-199428)
**Filed (PCT):** July 1, 2013
**U.S. §371 date:** March 6, 2015
**Granted:** October 10, 2017
**Inventors:** Masakazu Saori; Yoshimitsu Ohara
**Assignee:** Ricoh Imaging Company, Ltd.
**Title:** *Zoom Lens System and Electronic Imaging Apparatus Using the Same*
**Embodiment analyzed:** Example 1 / Numerical Embodiment 1 (Figures 1–6; Tables 1–3)

The modeled prescription is the first numerical embodiment of US 9,784,950 B2 and is correlated with the production PENTAX-06 TELEPHOTO ZOOM 15–45mm f/2.8. The patent does not identify a commercial model by name, so the production relationship is a fixed modeling correlation rather than a manufacturer-confirmed statement.

Several independent features converge on that identification. First, the patent embodiment and the production lens both contain 14 elements in 10 groups. Second, the computed design focal-length range is 15.499–44.043 mm, while the production lens is marketed as 15–45 mm. Third, the patent specifies FNO = 2.9 throughout the three tabulated zoom positions, close to the marketed constant f/2.8 designation but retained separately in the model as the design aperture. Fourth, the patent image height is 4.70 mm, and its 17.6°–6.0° half-field corresponds to approximately 35.2°–12.0° full field; RICOH's Q7 lens table gives 35°–12° for the production 06 TELEPHOTO ZOOM. Fifth, the manufacturer describes two ED elements plus one super-low-dispersion element, while the patent-coordinate glass audit resolves two elements as OHARA S-FPL51 and the focusing element L13 as OHARA S-FSL5. Finally, the Japanese priority date, September 11, 2012, is the same date as RICOH's launch announcement for the production lens. These points establish a strong correlation without converting inference into source fact.

The production lens is a PENTAX Q-mount zoom marketed at 15–45 mm and f/2.8, with a 1.0 m closest focusing distance, approximately 0.05× maximum reproduction, and 14 elements in 10 groups. RICOH's Q7 documentation gives 35°–12° angle of view and identifies the 06 TELEPHOTO ZOOM as fully compatible with the 1/1.7-inch Q7 format. Those manufacturer values are retained as product metadata and do not replace the patent's exact design quantities.

No uniform scaling is applied: the model uses the patent prescription at scale factor $s=1$. The embodiment is entirely spherical, so no aspheric coefficient transformation is applicable.

## Optical Architecture

The lens is a four-group positive–negative–positive–positive zoom. In patent notation the groups are G1(+), G2(−), G3(+), and G4(+), arranged from object to image. G1 and G4 remain stationary relative to the image plane during zooming, while G2 and G3 move imageward from the short focal-length extremity toward the long focal-length extremity. The aperture stop lies between G2 and G3 and moves integrally with G3. This is the central kinematic structure shown in the patent's zoom-path diagram and embodied by the variable gaps in the data file.

G1 is itself divided into two positive subgroups. G1a is the front cemented L11/L12 pair, composed of a weak negative high-dispersion meniscus followed by a strong positive low-dispersion biconvex element. G1b is the positive meniscus L13, which is the sole focusing element. The complete G1 has a computed in-air group focal length of +46.585 mm, reproducing the patent's +46.59 mm group value. The G1a cemented pair alone is much weaker, with a computed net focal length of +121.997 mm; L13 contributes substantial positive power independently and also supplies the focus motion.

G2 is the main negative variator. It consists of two biconcave negative singlets, L21 and L22, followed by the cemented L23/L24 pair. L22 is the strongest standalone negative element in the prescription at approximately −12.17 mm focal length. The L23/L24 cemented pair is net positive at +36.050 mm, but the complete G2 remains strongly negative at −10.775 mm because of the first two singlets. During zooming, the first surface of G2 moves 17.24 mm imageward from wide to tele.

G3 is a compact cemented positive/negative pair, L31/L32, immediately behind the moving stop. Its computed net focal length is +30.574 mm, agreeing with the patent's +30.57 mm. The group moves imageward by 9.26 mm from wide to tele and compensates the image-plane shift induced by the stronger variator motion of G2.

G4 is a stationary positive relay composed of two subgroups. G4a contains positive L41 followed by the cemented L42/L43 pair; the latter is net negative at −83.798 mm, but together G4a is positive at +44.492 mm. G4b is the air-spaced L44/L45 pair and is positive at +36.255 mm. The complete G4 has a computed focal length of +24.717 mm, matching the patent's +24.72 mm. Its fixed axial position provides the stable rear relay against which the moving G2/G3 pair changes magnification.

The product name uses “Telephoto Zoom” in the ordinary focal-range sense. Under the project's stricter architectural definition, however, the tele position is not a telephoto form because the source total length divided by EFL is approximately 1.715, greater than unity. It is likewise not retrofocus: the normalized back focal distance remains shorter than EFL at both wide and tele positions.

The original patent includes a plane-parallel optical filter OP between G4 and the image plane. LensVisualizer excludes that plate under the current data policy. Its first-order optical effect is therefore folded into the rear air spacing after surface 25 so that the same paraxial image plane is retained. No sensor cover glass, dummy plane, flare-cutter plane, or folded path is present in the active model.

The patent publishes the stop location but not its clear diameter. The model therefore uses an inferred 3.93 mm stop semi-diameter, back-solved from the patent's FNO = 2.9. The resulting modeled wide/mid/tele f-numbers are 2.8961, 2.9017, and 2.9027. Element semi-diameters are likewise modeling values rather than patent data; they were derived from exact spherical marginal- and chief-ray tracing across all modeled zoom/focus states and checked for positive edge thickness, acceptable rim slope, shared-band cross-gap clearance, and off-axis containment.

## Element-by-Element Analysis

### L11 — Negative Meniscus, front element of D1

**nd = 1.80810, νd = 22.8. Glass: S-NPH1 (OHARA). Standalone f = −130.684 mm.**

L11 is the negative front member of the first cemented pair. The patent explicitly identifies this element as a high-dispersion glass and gives OHARA S-NPH1 as the example material. Its weak negative standalone power means that its principal function is not gross system divergence; instead it moderates the strongly positive L12 while introducing a large dispersion contrast at the first cemented interface.

The element's position at the entrance of the optical train gives that dispersion contrast leverage over axial and lateral chromatic balance before the zooming groups. The patent's conditions place special emphasis on the low Abbe number of this first negative element: the more precise Table 19 value is νd = 22.76, while Table 1 rounds it to 22.8. The data file retains the patent's rounded prescription coordinate but uses the catalog-resolved S-NPH1 spectral lines for chromatic modeling.

### L12 — Biconvex Positive, rear element of D1

**nd = 1.49700, νd = 81.6. Glass: S-FPL51 (OHARA, catalog-derived match). Standalone f = +62.373 mm.**

L12 is the positive rear member of the front cemented pair. Its low index and very high Abbe number oppose the chromatic behavior of L11 while providing most of the positive standalone power in D1. The L11/L12 pair is nevertheless only moderately positive as a cemented unit, with a computed net focal length of +121.997 mm, illustrating why standalone element powers must not be added directly to infer cemented-group behavior.

The patent does not name S-FPL51 for L12. That designation is a catalog match to the stored 1.49700/81.6 coordinate. Because the production specification states that the lens contains two ED elements and the data resolves exactly two elements—L12 and L42—to S-FPL51 coordinates, these two are the natural correspondence to the marketed ED pair. That mapping remains a catalog/model inference rather than a manufacturer element-by-element identification.

### L13 — Positive Meniscus, focusing subgroup G1b

**nd = 1.48749, νd = 70.2. Glass: S-FSL5 (OHARA). Standalone f = +69.906 mm.**

L13 is both a positive optical contributor and the entire focusing subgroup G1b. The patent explicitly states that this single element moves toward the object when focus changes from infinity to a finite distance. It also identifies S-FSL5 as an example material, specifies a low specific gravity of 2.46, and describes the glass as having anomalous-dispersion characteristics. This is the only element for which the patent itself directly couples the focusing function with an anomalous-dispersion glass choice.

The data file carries OHARA catalog line indices and dPgF = +0.0022 for S-FSL5. These spectral values are catalog-derived, not patent-published. They support discussion of the glass's partial-dispersion behavior without implying apochromatic correction for the complete lens.

Mechanically, using a single positive element for focusing minimizes the mass that must translate. Optically, its positive power is large enough that an objectward motion of about 2.787 mm can satisfy the reconstructed 1.0 m close-focus state while the neighboring gap sum remains fixed.

### L21 — Biconcave Negative, first element of G2

**nd = 1.72916, νd = 54.7. Glass: S-LAL18 (OHARA, catalog-derived match). Standalone f = −31.393 mm.**

L21 begins the negative variator group. It provides moderate negative power before the stronger L22 and helps spread the required negative refraction over multiple surfaces rather than concentrating it in a single element. The patent describes both L21 and L22 as negative elements with concave image-side surfaces; in Example 1 both are biconcave.

The S-LAL18 assignment is catalog-derived from the exact stored coordinate. It is deliberately distinct from S-LAL18N: OHARA’s 2026 special-order table retains the conventional S-LAL18 row at 1.72916/54.68; that coordinate is closer to the patent than the newer S-LAL18N dispersion revision, so the conventional identity is retained in the data.

### L22 — Biconcave Negative, second element of G2

**nd = 1.72916, νd = 54.7. Glass: S-LAL18 (OHARA, catalog-derived match). Standalone f = −12.168 mm.**

L22 is the strongest standalone negative element in the design and supplies a large share of G2's negative power. Its location between L21 and the positive/negative cemented pair allows the variator to obtain strong negative group power while distributing surface curvature among four elements.

Because L21 and L22 use the same glass coordinates but different curvatures, their very different standalone focal lengths arise from geometry rather than material choice. The complete G2 focal length, −10.775 mm, is an in-situ group result and should not be confused with either singlet's standalone value.

### L23 — Positive Meniscus, front element of D2

**nd = 1.84666, νd = 23.8. Glass: S-TIH53 (OHARA, catalog-derived match). Standalone f = +18.530 mm.**

L23 is a high-index, high-dispersion positive meniscus cemented to L24. Its strong positive standalone power partially offsets the two preceding negative singlets. The patent specifically describes the L23/L24 cemented pair as having convex object-side and concave image-side surfaces, a shape choice it associates with control of coma and astigmatism across the zoom range.

The S-TIH53 identity is not named by the patent; it is a catalog match to the 1.84666/23.8 coordinate. Its high index allows substantial positive power from compact curvature, while the cemented negative partner determines the net behavior of the pair.

### L24 — Negative Meniscus, rear element of D2

**nd = 1.77250, νd = 49.6. Glass: S-LAH66 (OHARA, catalog-derived match). Standalone f = −33.765 mm.**

L24 completes the G2 cemented pair. Although L24 is negative as a standalone element, the cemented L23/L24 combination is net positive at +36.050 mm. This is a useful example of why cemented net power must be computed from the coupled surfaces and thicknesses rather than inferred by combining isolated focal lengths.

The S-LAH66 assignment is an exact catalog-coordinate match to the patent pair. OHARA’s 2026 special-order table retains conventional S-LAH66 at 1.77250/49.60, so it is retained instead of the newer S-LAH66N dispersion revision. In the complete group, the positive cemented tail works against L21/L22 while preserving a strongly negative G2 result.

### L31 — Biconvex Positive, front element of D3 / G3

**nd = 1.69680, νd = 55.5. Glass: S-LAL14 (OHARA, catalog-derived match). Standalone f = +12.780 mm.**

L31 is the strong positive member of the third group. It sits immediately behind the aperture stop and therefore operates where ray heights are tightly controlled by the pupil. Its standalone power is the strongest positive value among the individual elements, but the cemented negative L32 substantially reduces the net group power.

Because G3 moves together with the stop, its power acts directly in the zoom-compensation motion rather than as a stationary relay. The resulting group focal length of +30.574 mm is the physically relevant value for zoom kinematics.

### L32 — Negative Meniscus, rear element of D3 / G3

**nd = 1.85026, νd = 32.3. Glass: S-LAH71 (OHARA, catalog-derived match). Standalone f = −22.331 mm.**

L32 is cemented to L31 and converts the very strong positive singlet into the more moderate positive G3 group required by the zoom trajectory. The higher index and lower Abbe number of L32 provide both power and chromatic contrast within a compact cemented pair.

The patent describes L32 as a negative meniscus with a convex image-side surface. In the completed G3 pair, L31 and L32 yield +30.574 mm rather than the value that would be suggested by treating the singlets independently.

### L41 — Positive Meniscus, first element of G4a

**nd = 1.69680, νd = 55.5. Glass: S-LAL14 (OHARA, catalog-derived match). Standalone f = +35.649 mm.**

L41 begins the stationary rear group and provides positive relay power ahead of the L42/L43 cemented pair. The same S-LAL14 coordinate used in L31 appears here, but the weaker curvature gives substantially lower standalone power.

Within G4a, L41 works with a net-negative cemented pair. The combined subgroup remains positive at +44.492 mm, showing that the rear group achieves its net positive effect through a mixture of positive and negative local powers rather than a simple stack of positive lenses.

### L42 — Positive Meniscus, front element of D4

**nd = 1.49700, νd = 81.6. Glass: S-FPL51 (OHARA, catalog-derived match). Standalone f = +20.422 mm.**

L42 is the second element in the prescription with the 1.49700/81.6 coordinate matched to S-FPL51. It is a strong positive, very-low-dispersion member cemented to the negative L43. This makes D4 a second major chromatic pairing in the lens, but unlike D1 the pair is net negative.

As with L12, identifying L42 as one of the production lens's two marketed ED elements is an inference from the exact glass coordinate and the manufacturer's stated ED-element count. The manufacturer does not publish a numbered element map.

### L43 — Negative Meniscus, rear element of D4

**nd = 1.72342, νd = 38.0. Glass: S-BAH28 (OHARA, catalog-derived match). Standalone f = −14.082 mm.**

L43 is a strong negative member cemented to L42. The completed D4 pair is net negative at −83.798 mm despite L42's strong positive standalone power. This negative cemented unit, preceded by positive L41, gives G4a its moderated positive result.

The difference in dispersion between L42 and L43 provides another chromatic-balancing lever in the stationary rear section. The validated data includes catalog line indices for both elements, allowing wavelength-dependent tracing without treating the patent's rounded νd values as the sole dispersion model.

### L44 — Biconvex Positive, first element of G4b

**nd = 1.60300, νd = 65.5. Glass: S-PHM53 (OHARA, catalog-derived match). Standalone f = +21.015 mm.**

L44 is the positive front member of the final air-spaced pair. Unlike the cemented pairs elsewhere, L44 and L45 are separated by a 2.5 mm air space at the base state, so their combined subgroup behavior includes the effect of that air gap. The resulting G4b focal length is +36.255 mm.

Its moderate index and relatively high Abbe number provide positive relay power without duplicating the very-high-dispersion behavior of the negative final element. The air-spaced pairing also gives the rear group an additional degree of aberration balancing unavailable in a cemented interface.

### L45 — Negative Meniscus, final glass element

**nd = 1.56732, νd = 42.8. Glass: S-TIL26 (OHARA, catalog-derived match). Standalone f = −44.220 mm.**

L45 is the final refracting element and the negative member of G4b. The patent describes it as a negative meniscus with a convex image-side surface. Its negative power moderates L44 and completes the positive G4 relay before the omitted optical filter and image plane.

Because the LensVisualizer model removes the patent's plane-parallel OP filter, the air distance following L45 is not copied directly from Table 1. Instead, the rear spacing is normalized so that the active surfaces focus at the same paraxial image plane as the full patent system with the filter present.

## Glass Identification and Selection

Only two active glass names are explicitly supplied by the patent: S-NPH1 for L11 and S-FSL5 for L13. Every other named OHARA glass in the data file is a catalog-derived match to the patent's stored d-line index and Abbe coordinate. The provenance distinction is therefore explicit: the numeric `nd`/`νd` prescription remains the patent authority, while `nC`, `nF`, `ng`, and `dPgF` are 2026 OHARA catalog or special-order properties attached to the matched identity.

| Glass | Patent nd / νd | Elements | Identification status | Chromatic role in the modeled system |
|---|---:|---|---|---|
| S-NPH1 (OHARA) | 1.80810 / 22.8 | L11 | Patent-named | High-dispersion negative member of front D1 pair |
| S-FPL51 (OHARA) | 1.49700 / 81.6 | L12, L42 | Catalog-derived exact coordinate match | Very-low-dispersion positive members in D1 and D4 |
| S-FSL5 (OHARA) | 1.48749 / 70.2 | L13 | Patent-named | Low-density focusing element; patent describes anomalous dispersion |
| S-LAL18 (OHARA) | 1.72916 / 54.7 | L21, L22 | Catalog-derived exact coordinate match | Negative variator singlets |
| S-TIH53 (OHARA) | 1.84666 / 23.8 | L23 | Catalog-derived coordinate match | High-index/high-dispersion positive member of D2 |
| S-LAH66 (OHARA) | 1.77250 / 49.6 | L24 | Catalog-derived exact coordinate match | Negative partner in D2 |
| S-LAL14 (OHARA) | 1.69680 / 55.5 | L31, L41 | Catalog-derived coordinate match | Positive power in moving G3 and stationary G4a |
| S-LAH71 (OHARA) | 1.85026 / 32.3 | L32 | Catalog-derived coordinate match | Negative/high-index partner in D3 |
| S-BAH28 (OHARA) | 1.72342 / 38.0 | L43 | Catalog-derived coordinate match | Negative partner to low-dispersion L42 in D4 |
| S-PHM53 (OHARA) | 1.60300 / 65.5 | L44 | Catalog-derived exact coordinate match | Positive rear relay element |
| S-TIL26 (OHARA) | 1.56732 / 42.8 | L45 | Catalog-derived exact coordinate match | Negative final relay element |

The front D1 pair has the largest Abbe-number contrast in the design: low-νd S-NPH1 against the very high-νd S-FPL51 match. D4 repeats the use of S-FPL51 but pairs it with the lower-νd S-BAH28 negative element. These two widely separated low-dispersion positive elements correspond naturally to the manufacturer's statement that the production lens uses two ED elements. L13 adds a third low-dispersion material, S-FSL5, which the patent itself identifies and describes as anomalously dispersive.

The spectral annotations make it possible to discuss those pairings with more than an Abbe-only model. However, the data does not justify labeling the complete lens apochromatic. The appropriate conclusion is narrower: the prescription uses multiple low-dispersion and dispersion-contrasting pairs, and the manufacturer explicitly states that its special-glass selection is intended to control chromatic aberration across the zoom range.

## Focus Mechanism

The patent defines an inner-focus mechanism in which G1a remains fixed and the single positive element L13 (G1b) moves toward the object as focus changes from infinity to a finite distance. It does not publish finite-focus spacings. The data file therefore uses a **CONSTRAINED_RECONSTRUCTION**, not a claimed patent table.

The reconstruction preserves the patent mechanism exactly in degree-of-freedom count: only L13 translates. At each zoom position the gap ahead of L13 decreases by the same amount that the gap behind L13 increases, so the adjacent-gap sum is conserved and all other groups retain their infinity-focus positions. The fixed image plane is then used as the image condition. RICOH's published 1.0 m closest focusing distance supplies the external constraint.

| Zoom state | L13 objectward travel | D3 at close focus | D5 at close focus | Reconstructed |m| |
|---|---:|---:|---:|---:|
| Wide, 15.50 mm | 2.787169 mm | 2.012831 mm | 4.437169 mm | 0.017306× |
| Intermediate, 21.49 mm | 2.787154 mm | 2.012846 mm | 11.827154 mm | 0.024001× |
| Tele, 44.04 mm | 2.787067 mm | 2.012933 mm | 21.677067 mm | 0.049176× |

The nearly constant 2.787 mm travel across the three tabulated zoom positions follows from the modeled one-element focusing constraint rather than from published close-focus data. At tele, the reconstructed 0.049176× paraxial magnification agrees closely with the manufacturer's rounded approximately 0.05× maximum reproduction figure, providing an independent consistency check on the chosen close-focus solution.

The reconstruction treats the manufacturer's 1.0 m minimum focusing distance as object plane to fixed image/sensor plane. Because the patent contains no finite-focus object-distance reference convention, this reference-plane choice is explicitly a modeling assumption.

## Chromatic Correction Strategy

The patent's design rationale places unusual emphasis on the first-group materials. It requires the focusing element L13 to have a high Abbe number and the first negative element L11 to have a very low Abbe number, with the stated objective of maintaining chromatic correction while keeping the focusing member small and light. Example 1 implements those requirements with patent-named S-FSL5 for L13 and S-NPH1 for L11.

The complete prescription extends that dispersion management beyond G1. Cross-vendor catalog equivalences show that an `nd`/`νd` coordinate alone does not establish a manufacturer; the OHARA identities used here are catalog-derived model assignments, with the patent’s explicit OHARA naming of L11 and L13 providing the vendor context. Catalog matching places S-FPL51 at L12 and L42, separated widely along the optical axis. L12 forms the positive member of the front cemented pair with high-dispersion L11, while L42 forms the positive member of the rear D4 pair with lower-νd negative L43. The manufacturer independently describes the production lens as containing two ED elements plus one super-low-dispersion element; the two S-FPL51 matches and the S-FSL5 focusing element provide a coherent model-level correspondence to that statement.

Other cemented pairs use different index/dispersion combinations: the high-index S-TIH53/S-LAH66 match in D2 and S-LAL14/S-LAH71 in D3. Their roles are not reducible to color correction alone, because they also determine local power and the balance of spherical, coma, astigmatic, and field-curvature contributions. The patent specifically associates the G2 configuration and the shapes of L23/L24 with coma and astigmatism correction, while the broader glass palette supplies the wavelength dependence required to keep that correction usable through the zoom range.

No APO designation is inferred. The model has enough catalog line data to perform wavelength-dependent tracing, but neither the patent nor the manufacturer characterizes the lens as apochromatic.

## Conditional Expressions

The patent gives seven numerical conditions and Table 19 claims that all six embodiments satisfy them. Example 1 reproduces six of the seven directly. Condition (5), however, contains a source contradiction that is preserved rather than repaired.

| Condition | Patent requirement | Example 1 value used for verification | Result |
|---|---|---:|---|
| (1) | $60 < \nu_{d1b} < 75$ | 70.2 | Pass |
| (2) | $\nu_{d1a} < 24$ | 22.76 (Table 19; Table 1 rounds 22.8) | Pass |
| (3) | $1.0 < SP_{1b} < 1.8$ | 1.175289 | Pass |
| (4) | $-0.3 < f_2/f_t < -0.18$ | −0.244658 | Pass |
| (5) | $4.5 < TL/ST_2 < 5.5$ | 4.382251 computed; Table 19 prints 4.88 | **Source contradiction** |
| (6) | $0.15 < D_4/LD_4 < 0.35$ | 0.297143 | Pass |
| (7) | $SG_{1b} < 2.8$ | 2.46 | Pass |

Condition (5) can be recomputed directly from the Example 1 zoom table. G1 is stationary, so the G2 travel from wide to tele is the change in d5: 18.89 − 1.65 = 17.24 mm. With the patent's tele total length TL = 75.55 mm, the ratio is 75.55/17.24 = 4.38225058. That value is below the stated lower limit of 4.5 and does not equal the 4.88 printed in Table 19. Because the underlying zoom spacings reproduce the focal lengths and group motion correctly, the discrepancy is treated as a patent-source inconsistency rather than silently forcing the prescription to satisfy the printed condition.

## Verification Summary

Independent verification of the final TypeScript arrays reproduces the principal first-order quantities of Example 1. Reduced-angle sequential tracing and an independently multiplied ABCD matrix agree to floating-point precision. The three infinity-focus EFLs are 15.499333, 21.495194, and 44.043049 mm, matching the patent's 15.50, 21.49, and 44.04 mm values within source precision.

The computed group focal lengths are G1 = +46.585193 mm, G2 = −10.775465 mm, G3 = +30.574208 mm, and G4 = +24.716887 mm, reproducing Patent Table 3. Surface-by-surface Petzval summation using $\phi/(n n')$ gives +0.006353632857 mm⁻¹, corresponding to a signed Petzval radius of approximately −157.39 mm under the $R_P=-1/\Sigma P$ convention.

The inferred 3.93 mm stop semi-diameter yields modeled wide/mid/tele f-numbers of 2.896051, 2.901727, and 2.902682. These values support the data file's use of the exact wide-state modeled value for `nominalFno`, while the separate `apertureMarketing: 2.8` and `apertureDesign: 2.9` fields preserve the distinction between product labeling and the patent design.

The final semi-diameter set passes the independent geometry checks: every element retains positive edge thickness, the actual spherical rim slopes remain within the current limit, shared-band cross-gap intrusion remains below the configured allowance in all modeled states, and representative off-axis rays stay within the declared clear apertures. The worst computed cross-gap intrusion ratio is 0.58286 and the smallest representative non-stop ray clearance is approximately 0.357 mm. The patent itself publishes none of these clear apertures, so these are validation results for the model rather than source dimensions.

The modeled semi-diameters and structured quantities are internally consistent with the same prescription, zoom states, and constrained focus model used for the first-order calculations.

## Sources and References

1. **US 9,784,950 B2**, Masakazu Saori and Yoshimitsu Ohara, *Zoom Lens System and Electronic Imaging Apparatus Using the Same*, Ricoh Imaging Company, Ltd., granted October 10, 2017. Example 1 / Numerical Embodiment 1: Figures 1–6 and Tables 1–3; zoom path: Figure 37; numerical conditions: Table 19.
2. **RICOH IMAGING**, “PENTAX-06 TELEPHOTO ZOOM,” launch announcement, September 11, 2012. Manufacturer source for production identity, Q mount, marketed 15–45 mm f/2.8 range, 14-element/10-group construction, special-glass count, 1.0 m minimum focus, and approximately 0.05× maximum magnification: <https://www.ricoh-imaging.co.jp/english/news/2012/20120911_4.html>.
3. **RICOH IMAGING**, “06 TELEPHOTO ZOOM,” product page. Manufacturer source for the current/discontinued product specification, Q7 69–207 mm equivalent range, 35°–12° Q7 angle of view, five diaphragm blades, 1.0 m closest focus, and approximately 0.05× reproduction: <https://www.ricoh-imaging.co.jp/english/products/lens/q/high-performance/06-telephoto-zoom/>.
4. **RICOH IMAGING**, “PENTAX Q7 Interchangeable-Lens Specifications.” Manufacturer source for Q-mount identification, 06 TELEPHOTO ZOOM 35°–12° angle of view on Q7, 14-element/10-group construction, and 1.0 m minimum shooting distance: <https://www.ricoh-imaging.co.jp/english/products/q7/lenses/index.html>.
5. **RICOH IMAGING**, “PENTAX Q7.” Manufacturer source identifying the Q7 sensor as 1/1.7-inch and the 06 TELEPHOTO ZOOM as fully compatible with that format: <https://www.ricoh-imaging.co.jp/english/products/q7/>.
6. **OHARA INC.**, “Glass Type.” Authoritative catalog source for the S-series glass coordinates and line indices used in the data file, including S-FPL51, S-FSL5, S-NPH1, and the other catalog-resolved matches: <https://www.ohara-inc.co.jp/en/product/01000/>.
7. **OHARA INC.**, “Comparative Table of Recommended Glasses.” Cross-reference source used to distinguish vendor-equivalent classes from exact OHARA identities: <https://www.ohara-inc.co.jp/en/product/01002/>.
8. **OHARA INC.**, “Introducing S-TIH53WN, S-LAH66N, and S-LAL18N,” January 30, 2025. Source for the dispersion changes in the N-suffix revisions: <https://www.ohara-inc.co.jp/en/news/2025/0127/14998/>.
9. **OHARA INC.**, “Announcement of 2026 Updates to the OHARA Optical Glass Lineup,” May 26, 2026. Source for the move of conventional S-LAL18 and S-LAH66 to Special Order status: <https://www.ohara-inc.co.jp/en/news/2026/0526/16493/>.
