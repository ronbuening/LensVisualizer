# Minolta MD Zoom 24-35mm f/3.5 — JP S56-158314 A, Example 1

## Patent Reference and Design Identification

**Patent:** JP S56-158314 A (特開昭56-158314, unexamined application publication)
**Application Number:** JP S55-62044 (特願昭55-62044)
**Filed:** 1980-05-10
**Published:** 1981-12-07
**Inventor:** 中村昭義 (Akiyoshi Nakamura)
**Applicant:** Minolta Camera Co., Ltd. (ミノルタカメラ株式会社)
**Title:** ズームレンズ系 (Zoom Lens System)
**Classification:** Int. Cl.³ G02B 15/14, G02B 13/04
**Worked examples:** 3
**Embodiment analyzed:** Example 1 (実施例1)

The publication claims a two-component wide-angle zoom consisting of a negative front group I and a positive rear group II, zoomed by changing the air space between them, with a fixed ten-lens order and five conditional expressions (claim, printed pp. 1–2; restated pp. 3–4). Three numerical examples share the table header f = 35〜24, FNo = 3.5, 2ω = 63°〜84° (printed pp. 7–9). Example 1 is transcribed here [1]. The inventor's name is printed in Japanese only; the romanization follows the same inventor name on Minolta's contemporaneous US 4,258,985 [9] and is a reading-consistent inference rather than a statement in this publication.

The correlation with the Minolta MD Zoom 24-35mm f/3.5 rests on convergent evidence:

1. **Applicant.** The applicant is Minolta Camera Co., Ltd.; the production lens is a Minolta SR-mount (MD) lens [2, 3].
2. **Construction.** Every example has ten air-spaced singlets in ten groups; third-party listings give 10 elements in 10 groups for the production lens [2–6].
3. **Specification.** The patent's nominal range 24–35 mm at FNo 3.5 matches the marketed 24–35 mm with a constant f/3.5 [2, 3].
4. **Field.** The patent prints 2ω = 63°–84°; lens-db lists 84° at 24 mm and 63.4° at 35 mm [2].
5. **Timing.** The application was filed in May 1980 and published in December 1981; the lens was announced in 1981, with lens-db giving August 1981 [3].
6. **Back focus.** The patent ties the lower limit of condition (1) to securing the back focus required of a single-lens-reflex lens (printed p. 4).

No Minolta specification sheet for this zoom was located; the marketed values above are third-party compilations, and a manufacturer document, if found, governs. Examples 2 and 3 share the same construction, so the evidence identifies the patent family rather than proving that Example 1 is the production prescription. The selection of Example 1 is fixed by the job definition.

## Optical Architecture

The design is a two-group negative-lead (− +) wide-angle zoom of the inverted-telephoto type described in the patent's background (printed p. 2). Group I (L1–L4: positive, negative meniscus, biconcave negative, positive) has a computed focal length F_I = −31.25 mm; group II (L5–L10: positive meniscus, two positives, biconcave negative, two positives) has F_II = +28.27 mm. All 20 surfaces are spherical.

The system is retrofocus throughout the range. Measured from the r20 vertex (paraxial, d-line, infinity), the back focal distance is 36.77 mm at the wide end, against an effective focal length of 24.61 mm (BFD/EFL = 1.494), and 45.39 mm at the tele end, against 34.14 mm (1.329).

**Nominal and computed focal lengths.** The patent labels its three spacing states f = 35, 28 and 24. The computed effective focal lengths of Example 1 are 34.14, 29.00 and 24.61 mm. Examples 2 and 3 reproduce the same three values within 0.019 mm, so the offset is a systematic nominal labelling rather than a transcription error in Example 1. The computed zoom ratio is therefore 1.39× rather than the nominal 1.46×. The data file carries the computed values as design focal lengths and the marketed 24–35 mm separately.

**Zoom kinematics.** Only d8 varies: 13.02, 7.59 and 3.0 mm in wide-to-tele order (the patent prints them tele-first, printed p. 6). With the image plane fixed, group II moves monotonically 8.62 mm toward the object from wide to tele. Group I follows a reversing path. It first moves 1.62 mm toward the image, to a minimum r1-to-image distance of 91.78 mm at f = 31.25 mm, and then returns 0.22 mm, ending with a track of 92.00 mm at tele against 93.40 mm at wide. The turning point is the standard two-group result: with f = F_I·m₂, the track is stationary where group II works at unit magnification (m₂ = −1), which occurs at f = |F_I|. Across the range m₂ runs from −0.788 at wide to −1.092 at tele.

**Aperture stop.** The patent publishes no stop position or diameter; neither the table nor Fig. 1 shows one. The model places the stop at the middle of d12, between L6 and L7. This is an inference: d12 gave the best fit of ray-derived element heights to the Fig. 1 proportions among the surveyed gaps, and it is Example 1's one enlarged air space in the L5–L8 region. The iris radius is calibrated to f/3.5 at each station (paraxially 6.36 mm at wide to 7.45 mm at tele; the viewer's real-ray solve gives 6.52 to 7.80 mm) through the `from-nominal-fno` aperture model; this reproduces f/3.5 by construction and is not evidence of the production diaphragm. A fixed iris of the tele size would give f/2.99 at the wide end. The patent does not describe how the production lens holds a constant f/3.5.

**Zoom stations.** The data file uses five stations at 24.61, 26.70, 29.00, 31.50 and 34.14 mm. The second and fourth are derived, not published: their d8 values are solved for those focal lengths so that linear interpolation of d8 and back focus stays within 0.048 mm of focus, against 0.190 mm with the three published states alone.

## Element-by-Element Analysis

Third-order contributions quoted below are computed from the final data at f/3.5 and Y′ = 21.6 mm (the image height of Fig. 4), with the stop at its inferred position, using Seidel surface sums [12]. Spherical aberration (SA) is given as transverse ray error at full aperture, in mm (negative = undercorrected), and distortion as a percentage at Y′ = 21.6 mm (negative = barrel). Values are paired wide/tele (24.61/34.14 mm). Coma, astigmatism, distortion and lateral colour apportionments depend on the inferred stop position and are indicative only.

### Group I — negative front group

#### L1 — Positive Meniscus, convex to object

nd = 1.58913, νd = 61.11. Glass: S-BAL35 (OHARA). f = +176.6 mm.

L1 is the weakest element of group I and the first of the four lenses claimed for that group (正レンズL1). It is the element at which the paraxial chief ray is highest: 17.52 mm at its front vertex at the wide end, against 3.52 mm for the f/3.5 marginal ray, falling to 10.86 mm at tele. Its third-order spherical aberration is negligible. It contributes +14.9% (pincushion) third-order distortion at the wide end and +6.7% at tele, the largest positive distortion term in group I. That term opposes the barrel distortion generated by L2 and L3. The patent does not discuss L1 individually.

#### L2 — Negative Meniscus, convex to object

nd = 1.80500, νd = 40.97. Glass: S-LAH53 (OHARA) class — Close (patent 805410, Δnd +0.0011). f = −30.5 mm.

The claim requires L2 to be a negative meniscus with its convex surface toward the object (物体側に凸面を向けた負メニスカスレンズL2). L2 produces the largest barrel term in the system: −25.4% at wide and −11.8% at tele. Its deeply curved rear surface r4 (R = 16.10 mm) carries the steepest rim slope in the model, 55.7° at the modeled semi-diameter. L2 overcorrects spherical aberration modestly (+0.126/+0.465 mm).

#### L3 — Biconcave Negative

nd = 1.80500, νd = 40.97. Glass: S-LAH53 (OHARA) class — Close (patent 805410, Δnd +0.0011). f = −28.4 mm.

L3 is the strongest negative element of group I and the subject of condition (2). The patent states that making L3's focal length shorter than in earlier systems strengthens group I and reduces the size of the whole system (printed p. 5). In Example 1, |f₃|/F_L = 0.831. L3 overcorrects spherical aberration by +0.482 mm at wide and +1.785 mm at tele. The increase toward tele is consistent with the patent's statement that, below the lower limit of condition (3), L3's divergence overcorrects spherical aberration especially at the long-focal-length end (printed p. 5).

#### L4 — Positive Meniscus, convex to object

nd = 1.80518, νd = 25.43. Glass: S-TIH6 (OHARA). f = +38.3 mm.

Condition (3) assigns L4 to correcting the negative-lens aberrations generated in L3; an over-strong L4 leaves spherical aberration undercorrected (printed p. 5). Here |f₃|/f₄ = 0.740. L4 contributes −0.597 mm at wide and −2.211 mm at tele, largely cancelling L3. With L1 and L2 included, group I's net spherical aberration is only +0.010 mm at wide and +0.038 mm at tele. Its dense flint has the lowest νd in group I, and it is the group's only strong positive element, so L4 is also the group's achromatizing partner. Its axial-colour contribution (−1.194 mm at wide) offsets the combined +1.200 mm of L2 and L3 (dispersion proxy; see Aberration Correction Strategy).

### Group II — positive rear group

#### L5 — Positive Meniscus, concave to object

nd = 1.69350, νd = 53.39. Glass: LAC13 (HOYA). f = +178.7 mm.

L5 is the subject of conditions (4) and (5). The patent states that L5 helps correct spherical aberration and coma and prevents loss of peripheral illumination (printed pp. 5–6). If L5 is too weak, the arrangement of three positive lenses ahead of negative L8 loses its purpose and its spherical-aberration and coma correction; if it is too strong, it refracts the bundle leaving group I excessively. Condition (5) governs the object-side surface: a flatter r9 loses the illumination benefit, and a more strongly curved r9 increases distortion beyond what is acceptable at the short end. Example 1 gives f₅/F_II = 6.32 and |r₉|/F_II = 2.69.

In the model, both L5 surfaces are nearly free of third-order spherical aberration: neither surface reaches more than about 0.3% of the largest element SA term at any station. Their coma terms reach 10.6% of the largest element coma term at tele. The meniscus, concave toward the diverging bundle from group I, therefore adds almost no spherical aberration and only modest coma. Its distortion contribution is small (+0.7% at wide). The peripheral-illumination effect described in the patent depends on real apertures that the patent does not publish and is not evaluated here.

#### L6 — Biconvex Positive

nd = 1.67003, νd = 47.15. Glass: BAF10 (HOYA). f = +37.3 mm.

L6 is the strongest positive element ahead of the inferred stop. Its rear surface is almost flat (r12 = −1389.18). The sign of r12 is first-order significant: reading it as positive would raise the EFL by 0.98–1.60 mm across the range and break the agreement of computed focal lengths with Examples 2 and 3, so the printed negative value is retained. L6 undercorrects spherical aberration (−0.329/−0.721 mm). Its glass, a barium flint by the νd < 50 convention, is used in a positive role.

#### L7 — Positive Meniscus, convex to object

nd = 1.61272, νd = 58.52. Glass: BACD4 (HOYA) — Close (613585). f = +45.5 mm.

L7 is the first element behind the inferred stop and the third of the three positive lenses that the patent places ahead of L8. Its spherical-aberration term is small (−0.060/−0.130 mm). Together with L6, it supplies most of the third-order astigmatism that opposes L8's large contribution in group II.

#### L8 — Biconcave Negative

nd = 1.80518, νd = 25.43. Glass: S-TIH6 (OHARA). f = −16.4 mm.

L8 is the most powerful element in the system and the only negative lens in group II. It is the principal corrector of the positive lenses around it:

- **Spherical aberration.** L8 overcorrects by +0.681 mm at wide and +1.356 mm at tele, against the undercorrecting L6, L7, L9 and L10.
- **Distortion.** It contributes +16.6% at wide and +12.5% at tele.
- **Petzval.** Its Petzval contribution, −0.0331 mm⁻¹, is the largest single term in the lens.
- **Axial colour.** Its contribution, +3.083/+4.425 mm in the proxy, balances the five positive elements of group II.

The same dense-flint coordinate as L4 is used here with the opposite power sign. The 1.87 mm air space behind L8 carries the model's closest shared-band approach: rim sags occupy 0.821 of the axial gap at the modeled semi-diameters.

#### L9 — Positive Meniscus, concave to object

nd = 1.51823, νd = 58.96. Glass: E-C3 (HOYA). f = +61.1 mm.

L9 and L10 form the rear positive pair, where the chief-ray height grows again behind the stop (5.03 mm at L10's front vertex at the wide end). L9 contributes −7.0% barrel distortion at wide and −5.3% at tele, part of the rear-group counterweight to L8's pincushion term. Its spherical-aberration term is small (−0.083/−0.115 mm).

#### L10 — Biconvex Positive

nd = 1.52584, νd = 52.06. Glass: Unmatched (526521 crown/light-flint boundary; nearest HOYA CF2 at Δνd −1.0). f = +45.5 mm.

L10 has the same focal length as L7 to the quoted precision, but a strongly asymmetric bending: r20 = −25.02 against r19 = 539.97. It contributes −7.3% distortion at wide and −5.6% at tele, and −0.295/−0.514 mm of spherical aberration. With a modeled semi-diameter of 8.1 mm, it has the thinnest modeled edge in the lens, 0.80 mm.

## Glass Identification

The patent publishes only nd and νd (d-line), with no partial-dispersion or line-index data. Each coordinate was compared, without seeding, with current OHARA, HOYA, Schott, HIKARI, CDGM and Sumita catalog rows [11], using the distance √(Δnd² + (Δνd/50)²). The data file names a glass from a Japanese vendor in the LensVisualizer runtime set when an Exact or Close candidate exists, and a six-digit code otherwise. These are coordinate correspondences, not supplier identifications. The 1980 melts are not established, and no supplier is inferred from the Minolta name.

| Code   | Elements | Role                                  | Data label            | Nearest catalog evidence                                        | Class (nearest / label) |
| ------ | -------- | ------------------------------------- | --------------------- | --------------------------------------------------------------- | ----------------------- |
| 589611 | L1       | weak front positive                   | S-BAL35 (OHARA)       | CDGM D-ZK3A 0.00019; OHARA S-BAL35 0.00057                      | Exact / Exact           |
| 805410 | L2, L3   | strong negatives of group I           | S-LAH53 (OHARA) class | HIKARI J-LASF03 0.0011; OHARA S-LAH53 0.0014 (all Δnd +0.0011)  | Close / Close           |
| 805254 | L4, L8   | achromatizing partners in both groups | S-TIH6 (OHARA)        | Schott SF6 0.00004; OHARA S-TIH6 0.00010                        | Exact / Exact           |
| 694534 | L5       | weak front positive of group II       | LAC13 (HOYA)          | CDGM H-LaK6A 0.00022; HOYA LAC13 0.00088                        | Exact / Exact           |
| 670472 | L6       | strong positive before stop           | BAF10 (HOYA)          | HIKARI J-BAF10 0.00016; HOYA BAF10 0.00070                      | Exact / Exact           |
| 613585 | L7       | positive behind stop                  | BACD4 (HOYA)          | HIKARI J-SK4 0.00037; HOYA BACD4 0.00115                        | Exact / Close           |
| 518590 | L9       | rear positive                         | E-C3 (HOYA)           | HOYA E-C3 0.00006                                               | Exact / Exact           |
| 526521 | L10      | rear positive                         | code only             | KF6 family (CDGM H-KF6, HOYA E-CF6) 0.0086; Schott N-KF9 0.0110 | Equivalent / code only  |

The palette uses eight coordinates for ten elements. Two coordinates do double duty. The high-index lanthanum flint 805410 forms both strong negatives of group I. The dense flint 805254 appears as group I's positive achromatizing partner (L4) and as group II's negative corrector (L8), so one glass serves opposite power signs in the two groups. For 805410, the nearest current candidates all lie 0.0011 above the patent nd, far outside the five-decimal print precision; the data label therefore carries the code and the Close qualifier. For 526521, no current glass is closer than Equivalent class. The nearest metric match (the KF6 family, 0.0086) differs by −0.0084 in nd. Schott N-KF9 falls inside the runtime round-trip tolerance, but at a metric distance of 0.0110, so naming it would overstate the match; L10 carries a code-and-class label instead. By the νd < 50 convention, L2, L3, L4, L6 and L8 are flints and the rest are crowns.

## Focus Mechanism

**Status: constrained reconstruction.** The patent publishes infinity spacings only. It gives no object distance, close-focus spacing or focusing statement for the examples. Its background, however, discusses focusing by extending front group I (前群Ⅰを繰り出してフォーカシングをする場合). When the group powers are weakened to control zooming aberrations, total length and group travel grow, illumination at close range falls, and the minimum focusing distance cannot be shortened (printed pp. 2–3). The stated object of the invention is a compact zoom with a short minimum focusing distance.

The data file therefore models unit extension of group I, with group II and the image plane fixed. The extension is solved paraxially for an object 0.3 m from the image plane. That distance is the minimum focusing distance listed by several third-party sources [2–6]; one retailer lists 1 m [7], and no manufacturer value was located. One review also lists floating elements for this lens [4]; the patent describes no floating group, and none is modeled.

| Station | EFL (mm) | d8 ∞ (mm) | d8 at 0.3 m (mm) | Group I extension (mm) | Paraxial magnification |
| ------- | -------- | --------- | ---------------- | ---------------------- | ---------------------- |
| Wide    | 24.61    | 13.020    | 17.130           | 4.110                  | −0.104                 |
| Derived | 26.70    | 10.214    | 14.309           | 4.095                  | −0.112                 |
| Mid     | 29.00    | 7.590     | 11.676           | 4.086                  | −0.121                 |
| Derived | 31.50    | 5.170     | 9.252            | 4.082                  | −0.132                 |
| Tele    | 34.14    | 3.000     | 7.086            | 4.086                  | −0.143                 |

The extension varies by only 0.028 mm across the zoom range. Solving the same condition with group I alone reproduces the authored extensions to within 0.001 mm. The requirement is that group I image the object at its own infinity focal point, carried forward by the extension, so group II never enters it. Zoom position enters only through the small change in the r1-to-image distance. A single focusing travel therefore serves the whole zoom range to within that spread. By Newton's equation, the extension for a given object distance scales roughly with F_I². This links the patent's stronger group I (condition (2)) to its stated goal of a shorter minimum focusing distance.

Because the semi-diameters are modeled rather than published, the model cannot test the patent's concern about close-range peripheral illumination. The close-focus states are also paraxial reconstructions and are not optimized for real-ray best focus.

## Aberration Correction Strategy

The patent's background states the problem directly (printed p. 2). A divergent-front zoom favours wide angles, but distortion, coma and the other aberrations vary strongly with zooming. The usual remedy, weaker group powers, makes the lens long and the focusing travel large. The claimed solution keeps the groups strong and moves the correction burden inside them. A strong negative L3 is balanced by a dense-flint positive L4 (conditions (2) and (3)). In group II, a weak meniscus L5 that adds almost no spherical aberration precedes three positives that are balanced by the strong negative L8 (conditions (4) and (5)).

The third-order group sums below are computed from the final data. They have the same units and caveats as in the element section; colour terms use the proxy nF − nC = (nd − 1)/νd because no line indices are published.

| Quantity (third order)             | Group I wide | Group II wide | Total wide | Group I tele | Group II tele | Total tele |
| ---------------------------------- | ------------ | ------------- | ---------- | ------------ | ------------- | ---------- |
| Spherical aberration (mm)          | +0.010       | −0.085        | −0.075     | +0.038       | −0.129        | −0.091     |
| Coma (mm)                          | −0.127       | +0.075        | −0.051     | −0.230       | +0.150        | −0.080     |
| Distortion at Y′ 21.6 (%)          | −14.7        | +5.8          | −8.9       | −7.2         | +4.3          | −2.9       |
| Axial colour, BFD(F) − BFD(C) (mm) | −0.050       | −0.087        | −0.138     | −0.097       | −0.018        | −0.116     |
| Lateral colour at Y′ 21.6 (mm)     | −0.138       | +0.105        | −0.033     | −0.143       | +0.111        | −0.033     |

Several features follow from these figures:

- **Spherical aberration.** It is held to a small undercorrection by near-cancellation inside each group, not between groups. The group sums are an order of magnitude smaller than the L3/L4 and L8 terms that compose them.
- **Axial colour.** Each group is also nearly achromatized on its own: the group sums are small beside the element terms of L4 and L8, and the total shifts by only 0.022 mm from wide to tele.
- **Lateral colour.** It is balanced between the groups instead, and the balance holds over the range at −0.033 mm.
- **Petzval sum.** It is zoom-invariant at +0.00427 mm⁻¹ (Petzval radius −234.2 mm). Group I contributes −0.0202 mm⁻¹ and group II +0.0245 mm⁻¹, so the net is about a fifth of either group's magnitude.
- **Distortion.** It is dominated by group I's barrel term, which falls by half from wide to tele as group I's chief-ray heights shrink. The third-order total of −8.9% at wide greatly overstates the real value: exact chief rays give a maximum barrel of −3.25% near 0.85 of the field, recovering to −2.86% at Y′ = 21.6 mm. At tele the real distortion is −1.24% at the field edge. Fig. 4 shows the same qualitative behaviour, with barrel distortion largest at f = 24, an extremum inside the field, and much smaller values at f = 35. The plotted magnitudes were not digitized.

Fig. 4 also shows the astigmatism plot at f = 24, with one curve leaving the ±0.5 mm plot frame near full field. The figure does not label which curve is sagittal and which meridional, and the model's real-ray field curves were not computed, so no comparison is drawn.

## Conditional Expressions

The patent prints the five inequalities without per-example values. They are evaluated below with group focal lengths from the data file, standalone thick-lens element focal lengths, and F_L equal to the computed long-end EFL (34.14 mm).

| Condition | Expression            | Range       | Example 1 | Thin-lens f_i | Status    |
| --------- | --------------------- | ----------- | --------- | ------------- | --------- |
| (1)       | F_II / \|F_I\|        | 0.80 – 0.95 | 0.905     | —             | Satisfied |
| (2)       | \|f₃\| / F_L          | 0.75 – 1.5  | 0.831     | 0.834         | Satisfied |
| (3)       | \|f₃\| / f₄           | 0.65 – 0.95 | 0.740     | 0.739         | Satisfied |
| (4)       | f₅ / F_II             | 3.5 – 7.0   | 6.32      | 6.50          | Satisfied |
| (5)       | \|r₉\| / F_II, r₉ < 0 | 2.0 – 3.5   | 2.69      | —             | Satisfied |

The patent does not say whether f_i is a thick- or thin-lens focal length; both readings satisfy every condition. With the nominal F_L = 35, condition (2) becomes 0.811, still within range. Condition (1) lies closest to a limit, 0.045 below its upper bound. The patent associates exceeding that bound with a relatively stronger group I and with distortion and astigmatism at the short end (printed p. 4), which is consistent with the dominant group I distortion term computed above. The patent's commentary on conditions (2)–(5) is summarized in the element sections.

## Verification Summary

All values below come from the final data file, traced with a sequential paraxial routine and an independently written matrix routine (agreement better than 10⁻¹³ mm), plus exact meridional rays where stated.

| Quantity              | Patent                             | Model                                        | Note                                                             |
| --------------------- | ---------------------------------- | -------------------------------------------- | ---------------------------------------------------------------- |
| EFL wide / mid / tele | f = 24 / 28 / 35 (labels)          | 24.61 / 29.00 / 34.14 mm                     | Nominal labelling; Examples 2 and 3 agree with Example 1         |
| FNo                   | 3.5 (table); F/3.6 (Fig. 4 labels) | f/3.5                                        | Calibrated through the inferred stop, not independently verified |
| 2ω wide / tele        | 84° / 63°                          | 84.19° / 65.29° (exact chief ray at Y′ 21.6) | Printed values match 2·atan(21.6/f) for the nominal 24 and 35 mm |
| Distortion            | barrel, largest at f = 24 (Fig. 4) | −2.86% wide, −1.24% tele at Y′ 21.6          | Qualitative agreement                                            |
| Back focus            | not published                      | 36.77 – 45.39 mm                             | Computed paraxial focus per station                              |
| Petzval sum           | not published                      | +0.00427 mm⁻¹                                | Surface-by-surface Σφ/(nn′)                                      |

The Seidel implementation was checked against exact and paraxial traces at every station before use. Spherical aberration agrees with an exact marginal ray at 5% aperture to within 0.17%, distortion with an exact chief ray at 1 mm image height to within 0.14%, and the colour terms with direct F/C paraxial traces to within 0.03%. The printed angles coincide with 2·atan(21.6/f) at the nominal 24 and 35 mm (83.97° and 63.36°), so they appear to be derived from the nominal labels. At the computed focal lengths, the paraxial values are 82.54° and 64.64°.

## Design Heritage and Context

The three examples of the publication are close variants of one design and reach the same computed focal lengths to within 0.020 mm of one another. Example 2 changes L3 to nd 1.78560, νd 42.81, L6 to nd 1.66892, νd 45.01 and L9 to nd 1.51680, νd 64.12, and it moves the enlarged air space in group II from d12 to d14 (3.51 mm). Example 3 keeps Example 1's glasses but gives L10 a concave front surface (r19 = −671.61) and places its enlarged gap at d10 (2.15 mm). Because that gap moves between examples, the sibling tables do not identify a common stop gap, and the stop of Example 1 remains an inference.

An earlier Minolta system guide lists an MD Zoom 24-50mm f/4 but not the 24-35mm [10]. Third-party histories place the 24-35mm among the MD III-styled lenses introduced from 1981 [8]. No Minolta document located in this work describes the optical relationship between the two zooms.

## Sources

1. Minolta Camera Co., Ltd. (inventor 中村昭義). _ズームレンズ系_ (Zoom Lens System). Japanese Unexamined Patent Application Publication JP S56-158314 A (特開昭56-158314), published 7 December 1981; application JP S55-62044, filed 10 May 1980. Gazette pp. 59–63: claim and conditions, printed pp. 1–4; condition commentary and state order, pp. 4–6; Examples 1–3, pp. 7–9; Figs. 1–6, gazette pp. 62–63. Retrieved from J-PlatPat (INPIT).
2. lens-db.com. "Minolta MD Zoom 24-35mm F/3.5." https://lens-db.com/minolta-md-zoom-24-35mm-f35-1981/ (accessed 1 October 2026).
3. lens-db.com. "Minolta MD 24-35mm F/3.5." https://lens-db.com/minolta-md-24-35mm-f35-1981/ (accessed 1 October 2026).
4. Lens QA Works (minolta.su). "Minolta MD 24-35mm 1:3.5 Zoom — review." https://minolta.su/minolta-md-24-35mm-f3-5-zoom/ (accessed 1 October 2026).
5. Dyxum forum. "Samples: Minolta MD Zoom 24-35mm F3.5." https://www.dyxum.com/dforum/samples-minolta-md-zoom-2435mm-f3-5_topic136337.html (accessed 1 October 2026).
6. allphotolenses.com. "Minolta MD 24-35 mm f/3.5." https://allphotolenses.com/lenses/item/c_2673.html (accessed 1 October 2026).
7. Kamerastore. "Minolta 24-35mm f3.5 MD Zoom." https://kamerastore.com/en-us/products/minolta-24-35mm-f3-5-md-zoom (accessed 1 October 2026).
8. earthsunfilm.com. "VMLP 42: Minolta MD Zoom 24-35mm, f/3.5 — A Good Thing in a Small Package." https://earthsunfilm.com/vmlp-42-minolta-md-zoom-24-35mm-f-3-5-a-good-thing-in-a-small-package/ (accessed 1 October 2026).
9. Minolta Camera Co., Ltd. (inventor Akiyoshi Nakamura). _Inverted telephoto type wide angle lens system._ US 4,258,985 A. https://patents.google.com/patent/US4258985 (accessed 1 October 2026).
10. Minolta. _A Guide to the Minolta SLR System_ (SLR SYS 909E). https://archive.org/details/minolta-slr-system-guide (accessed 1 October 2026).
11. OHARA, HOYA, Schott, HIKARI, CDGM and Sumita optical-glass catalog data as distributed with the _opticalglass_ Python package, version 2.0.2 (catalog spreadsheets as distributed: OHARA 2025-03-12, HOYA 2026-04-01, CDGM 2024-09, Sumita ver. 14.01.03, and the package's Schott and HIKARI files).
12. W. T. Welford. _Aberrations of Optical Systems._ Bristol: Adam Hilger, 1986. Seidel surface sums, ch. 8.
