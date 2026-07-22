# CANON EF 28-90mm f/4-5.6 II USM

## Patent Reference and Design Identification

**Patent:** JP 2009-282554 A  
**Application Number:** JP 2009-203574  
**Filed:** 3 September 2009 (divisional application)  
**Related parent filed:** 26 May 1999  
**Published:** 3 December 2009  
**Inventor:** Makoto Misaka  
**Applicant:** Canon Inc.  
**Title:** Zoom Lens  
**Embodiment analyzed:** Numerical Example 6  
**Data-file subtitle:** JP 2009-282554 A — Numerical Example 6; production correlation inferred

The prescription is Numerical Example 6 of JP 2009-282554 A. The data file retains the patent-scale radii, center thicknesses, refractive indices, Abbe numbers, zoom spacings, and aspheric coefficients. No uniform production scaling has been applied.

The named production lens is the **CANON EF 28-90mm f/4-5.6 II USM**, introduced in September 2002 for the Canon EF 135-format system. Canon lists a 10-element, 8-group construction, five diaphragm blades, micro-USM autofocus, a 0.38 m closest focusing distance, 0.30× maximum magnification at 90 mm, and a 58 mm filter thread. Canon's published block diagram marks one aspherical lens.

**Author-established correlation.** Canon does not explicitly identify Numerical Example 6 as the production prescription. The selected mapping rests on the following convergent evidence:

1. **Focal range.** The patent states 28.90, 50.02, and 86.89 mm; the product is marketed as 28–90 mm. The computed Gaussian EFLs are 28.904387667, 50.014500526, and 86.899293947 mm. The marketing endpoints are rounded product designations, not a uniform scale of the prescription.
2. **Construction.** Both records give 10 physical elements in 8 air-spaced construction groups. The patent's optical system is organized into four moving functional groups with power sequence negative-positive-negative-positive.
3. **Asphere.** Numerical Example 6 has one aspherical surface, surface 17A on E9 in the fourth group. Canon's production diagram marks one aspherical lens in the rear part of the system.
4. **Format and field.** The patent's published full fields of 73.6°, 46.8°, and 28.0° correspond to computed image heights of approximately 21.62–21.67 mm, or a 43.3 mm image-circle diameter, consistent with the 135-format EF product.
5. **Focusing.** The patent states that Group 1 moves for focusing (¶0020). Canon identifies micro-USM as the production drive system, although Canon does not publish the internal moving optical group.
6. **Close focus.** Canon's rounded 0.38 m and 0.30× specifications are consistent with a constrained first-group reconstruction; at the tele position the model gives 0.297530139×.
7. **Timing.** The related parent was filed in 1999, before the 2002 product introduction. The present 2009 publication is a later divisional and is not treated as the design's first disclosure date.
8. **Distinctive kinematics.** The patent's second and fourth groups move together, the stop travels with Group 3, and Group 1 reverses direction during zooming. The numerical spacings reproduce those relationships to the patent's printed precision.

The aperture correlation is compatible but not numerically identical. The product is marketed as f/4–5.6, while the patent headline gives f/3.83–5.88 and the physical stop model gives f/3.846027780, f/4.451141943, and f/5.878770585. The data file therefore stores `apertureDesign = 3.846027780` and uses marketed endpoints in `nominalFno` (`4` at wide and `5.6` at tele); the intermediate control remains the modeled 4.451141943 because Canon does not publish an intermediate aperture marking.

The product has no documented optical stabilization in the cited Canon record, and the patent prescription contains no stabilization group. No image-stabilization function is assigned to any element.

Throughout this analysis, **source fact** denotes a directly published patent, manufacturer, or catalog statement; **computed result** denotes a code-derived quantity; **catalog-derived result** denotes a public-glass-catalog property; and **author inference/modeling choice** denotes correlation, reconstructed spacing, inferred aperture, or inferred semi-diameter.

## Optical Architecture

**Source fact.** The patent describes a four-group negative-lead zoom with power sequence

\[
G_1(-)\;G_2(+)\;G_3(-)\;G_4(+).
\]

The ten elements form eight air-spaced construction groups because E5-E6 and E7-E8 are cemented doublets. The aperture stop is 1.80 mm in front of Group 3 and moves with it. The inactive flare-cutter plane shown between Group 4 and the image plane is not included as a refracting surface.

**Computed result.** Isolated functional-group powers from the final TypeScript sequence are:

| Functional group | Elements | EFL (mm) | Optical function established by patent or placement |
|---|---|---:|---|
| G1 | E1-E3 | −36.699831010 | Negative front group; zoom compensator and focusing group |
| G2 | E4-E6 | +26.974178559 | Principal positive variator and largest positive-power contribution |
| G3 | E7-E8 | −50.138684298 | Stop-coupled negative moving group |
| G4 | E9-E10 | +86.484587178 | Rear positive group with the sole asphere |

The patent identifies G2 as the principal variator and as the group carrying the largest positive-power burden across the zoom range (¶0023). G1 supplies the negative-lead entrance geometry. G3 is a compact cemented negative group immediately behind the stop. G4 is a weak positive rear relay containing the single aspherical corrector.

### Zoom motion

All four functional groups move during zooming. Coordinates in the verification model are referenced to the fixed flare-cutter plane, with the object side negative.

| Group or plane | Wide position (mm) | Intermediate position (mm) | Tele position (mm) | Wide-to-tele behavior |
|---|---:|---:|---:|---|
| G1 front, surface 1 | −83.65 | −75.03 | −87.15 | Moves imageward, then reverses objectward; net −3.50 mm |
| G2 front, surface 7 | −33.51 | −46.56 | −70.30 | Monotonic objectward; total 36.79 mm |
| Stop | −23.15 | −31.33 | −49.48 | Moves objectward with G3 |
| G3 front, surface 13 | −21.35 | −29.53 | −47.68 | Monotonic objectward; total 26.33 mm |
| G4 front, surface 16 | −3.82 | −16.88 | −40.62 | Monotonic objectward; total 36.80 mm |

G2 and G4 maintain a front-vertex separation of approximately 29.68–29.69 mm, confirming their common motion within the 0.01 mm precision of the patent table, as anticipated by claim 2 and ¶0027. The stop-to-G3 front spacing remains exactly 1.80 mm. G1's reversal is preserved by the three published zoom positions and would be lost in a two-endpoint model.

### Axial length, back focus, and principal planes

The patent's D19 values terminate at an inactive flare cutter rather than at the image plane. The data file omits that dummy plane and stores the computed image-plane back focal distance after surface 19.

| Zoom position | EFL (mm) | BFD from surface 19 (mm) | Surface 1 to image plane (mm) | H1 from surface 1 (mm) | H2 from surface 19 (mm) |
|---|---:|---:|---:|---:|---:|
| 28.90 mm | 28.904387667 | 38.719113072 | 122.369113072 | 43.267560894 | 9.814725406 |
| 50.02 mm | 50.014500526 | 51.794644886 | 113.764644886 | 39.507213118 | 1.780144360 |
| 86.89 mm | 86.899293947 | 75.537349273 | 125.887349273 | 27.147278970 | −11.361944674 |

The principal-plane migration is substantial: the rear principal plane moves from 9.815 mm imageward of the last surface at wide angle to 11.362 mm objectward of it at tele. That migration, rather than a simple physical extension, is central to the focal-length change.

The strict whole-system telephoto criterion is not met: total-track/EFL is 4.233583, 2.274633, and 1.448658. The patent's phrase “telephoto type” refers to the tele-end distribution of positive and negative group powers, not to a strict total-track ratio below unity. The BFD/EFL ratios are 1.339558, 1.035593, and 0.869252. The first two states have BFD greater than EFL, but the tele state does not; the zoom is therefore not classified globally as retrofocus.

### Pupil geometry

The inferred 6.900 mm stop semi-diameter produces the following paraxial pupils. Pupil positions are signed axial coordinates: entrance-pupil positions are measured from surface 1 toward the image, and exit-pupil positions are measured from surface 19, with negative values lying objectward of that surface.

| Zoom position | Entrance pupil z from surface 1 (mm) | Entrance pupil semi-diameter (mm) | Exit pupil z from surface 19 (mm) | Exit pupil semi-diameter (mm) |
|---|---:|---:|---:|---:|
| 28.90 mm | 27.037969458 | 3.757693563 | −27.196236666 | 8.569276343 |
| 50.02 mm | 24.744012586 | 5.618165087 | −19.165866167 | 7.971045628 |
| 86.89 mm | 27.266487022 | 7.390941073 | −11.242899927 | 7.380816103 |

The entrance pupil expands strongly toward tele, while the exit pupil moves toward the final surface and contracts slightly. These are paraxial results from the stored prescription and inferred stop, not manufacturer-published dimensions.

### Aperture and semi-diameter model

**Author inference/modeling choice.** The patent locates the aperture stop but does not publish its clear diameter. The stored stop semi-diameter is 6.900 mm, selected from the published design f-numbers. It yields modeled infinity-focus f-numbers of 3.846027780, 4.451141943, and 5.878770585.

All surface semi-diameters are inferred rather than patent-listed. They satisfy positive edge thickness, actual spherical or aspherical rim-slope limits, cemented-interface compatibility, the 90% shared-band cross-gap rule, and the sampled display-field ray envelope. The minimum element edge thickness is 0.123795624 mm at E6; the maximum rim angle is 53.234308°; and the narrowest cross-gap margin is 0.008511396 mm between surfaces 17A and 18. The 60%-field display sample passes all 36 tested rays, while six of 36 marginal rays at the patent's full field are pupil-clipped in the front group. That result is treated as full-field mechanical vignetting, not as proof of incomplete image-circle coverage.

## Element-by-Element Analysis

### E1 — Negative Meniscus, Convex to Object

**nd = 1.622992, νd = 58.16. Glass: S-BSM15 (OHARA; probable catalog equivalence). Standalone f = −59.434955 mm.**

**Source fact.** The patent places an object-convex negative meniscus first and states that this form eases wide-end distortion and coma while helping to limit front-element diameter (¶0021–0022). E1 is the first of two negative elements used to concentrate the front group's negative power.

**Computed placement.** E1 carries less standalone negative power than E2 but has the largest clear aperture in the system. Its meniscus form bends the wide-angle bundle before the stronger biconcave member, reducing the angular burden on the following elements.

### E2 — Biconcave Negative

**nd = 1.622992, νd = 58.16. Glass: S-BSM15 (OHARA; probable catalog equivalence). Standalone f = −46.693390 mm.**

**Source fact.** The patent's preferred Group 1 form uses a biconcave second negative lens (¶0022). Together, E1 and E2 provide the concentrated negative lead used to keep the front group compact.

**Author interpretation.** E2 is the stronger of the two standalone negative elements in G1. Its placement behind E1 makes it the principal negative-power contributor within the front group, while the shared S-BSM15-equivalent material keeps the two-element negative section spectrally consistent.

### E3 — Positive Meniscus, Convex to Object

**nd = 1.846660, νd = 23.78. Glass: S-TIH53 (OHARA; probable catalog equivalence). Standalone f = +76.592150 mm.**

**Source fact.** The patent places a positive lens behind the two negative members to assist tele-end spherical-aberration correction (¶0021–0022). E3 completes G1 without reversing its net negative power.

The S-TIH53-equivalent assignment is catalog-derived. Its low Abbe number places it in dense-flint territory. No isolated chromatic role is claimed solely from that classification; the element operates as part of the full three-element moving group.

### E4 — Biconvex Positive

**nd = 1.701536, νd = 41.24. Glass: S-BAH27 (OHARA; probable catalog equivalence). Standalone f = +60.213140 mm.**

E4 is the air-spaced positive singlet at the front of G2. The patent identifies G2 as the main variator and the system's most important positive-power group (¶0023). E4 supplies positive power ahead of the cemented E5-E6 subassembly while keeping G2 to three physical elements.

Although S-BAH27 belongs to a barium-family catalog class, νd = 41.24 places it on the flint side of the usual crown/flint division. Its optical role is therefore described from placement and group power, not from the family name.

### E5 — Negative Meniscus, Cemented Member J2

**nd = 1.846660, νd = 23.78. Glass: S-TIH53 (OHARA; probable catalog equivalence). Standalone f = −41.769774 mm.**

E5 is the negative, high-dispersion member of the G2 cemented doublet. Surface 10 is the shared interface and carries the downstream E6 medium in the data model.

The quoted focal length is E5's standalone thick-lens value in air. It does not represent E5's actual in-situ power within the cemented pair, where the interface transitions directly from E5's index to E6's index.

### E6 — Biconvex Positive, Cemented Member J2

**nd = 1.603112, νd = 60.64. Glass: S-BSM14 (OHARA; probable catalog equivalence). Standalone f = +22.061658 mm.**

E6 is the positive crown member of J2. The complete E5-E6 cemented assembly has a computed net EFL of **+47.430680425 mm**, not the algebraic combination of the two standalone air values.

**Source fact and computed result.** The patent requires a substantial Abbe-number separation in this doublet. The catalog-resolved values give

\[
\nu_{2p}-\nu_{2n}=60.64-23.78=36.86,
\]

matching the patent's Example 6 condition table. The patent associates this separation with tele-end axial-color correction (¶0030–0031). “Achromatizing doublet” is therefore justified; no apochromatic claim is made.

### E7 — Biconcave Negative, Cemented Member J3

**nd = 1.688931, νd = 31.07. Glass: S-TIM28 (OHARA; probable catalog equivalence). Standalone f = −16.651422 mm.**

E7 is the strong negative member of the compact stop-coupled third group. It begins immediately 1.80 mm behind the stop and supplies the dominant negative power in J3.

The standalone focal length is not an in-situ group value. The cemented interface at surface 14 transitions directly into E8 and materially changes the combined power and aberration balance.

### E8 — Positive Meniscus, Cemented Member J3

**nd = 1.846660, νd = 23.78. Glass: S-TIH53 (OHARA; probable catalog equivalence). Standalone f = +23.954582 mm.**

E8 is the positive partner of J3. Despite its positive standalone power, the completed E7-E8 assembly remains negative, with computed EFL **−50.138684298 mm**.

The patent constrains both the index and Abbe-number differences across this interface. The resolved values give

\[
\nu_{3n}-\nu_{3p}=31.07-23.78=7.29,
\]

and

\[
N_{3p}-N_{3n}=1.846660-1.688931=0.157729.
\]

The patent links these ranges to control of axial color, spherical aberration, and coma across zooming (¶0031–0033). The claim concerns the cemented pair and interface, not E8 acting independently.

### E9 — Negative Meniscus, Concave to Object, Rear Asphere

**nd = 1.583060, νd = 30.2. Glass: Unmatched (proprietary optical polymer; patent plastic-asphere class). Standalone f = −277.806212 mm.**

E9 is a weak negative meniscus at the front of G4. Its rear surface, 17A, is the prescription's sole asphere. The patent states that an asphere in G4 assists wide-end field-curvature and distortion correction and tele-end spherical-aberration correction (¶0033). It further teaches a plastic aspherical lens as a manufacturing option (¶0034).

The material does not match the searched public glass catalogs within the recorded tolerance. It is therefore retained as an unmatched proprietary optical polymer rather than assigned a speculative glass name. Canon's production diagram confirms one aspherical lens but does not independently establish the material formulation or fabrication process.

### E10 — Positive Meniscus, Concave to Object

**nd = 1.516330, νd = 64.14. Glass: S-BSL7 (OHARA; probable catalog equivalence). Standalone f = +66.761785 mm.**

E10 is the final positive element and completes G4's computed net EFL of **+86.484587178 mm**. Its positive power dominates the weak negative E9, leaving the fourth group positive as required by the patent.

**Author interpretation.** Its rear position and relatively high Abbe number make it a plausible final relay and field-balance member, but no isolated performance claim is assigned beyond the verified group power and the patent's general fourth-group correction strategy.

## Glass Identification and Selection

The patent publishes only d-line refractive indices and Abbe numbers; it does not publish vendor glass names. The data file therefore uses catalog-derived OHARA equivalences where the public entry reproduces the stored optical constants. The assignments are probable catalog identities or equivalences, not proof of the production melt supplier.

| Data-file glass annotation | Elements | nd | νd | nC | nF | ng | dPgF | Status |
|---|---|---:|---:|---:|---:|---:|---:|---|
| S-BSM15 (OHARA) | E1, E2 | 1.622992 | 58.16 | 1.619739 | 1.630450 | 1.636296 | −0.0016 | Exact six-decimal nd match; patent νd rounds to 58.2 |
| S-TIH53 (OHARA) | E3, E5, E8 | 1.846660 | 23.78 | 1.836488 | 1.872096 | 1.894189 | +0.0175 | Exact nd match; S-TIH53W optical suffix variant remains unresolved |
| S-BAH27 (OHARA) | E4 | 1.701536 | 41.24 | 1.696503 | 1.713515 | 1.723323 | +0.0018 | Exact nd match; patent νd rounds to 41.2 |
| S-BSM14 (OHARA) | E6 | 1.603112 | 60.64 | 1.600079 | 1.610024 | 1.615409 | −0.0019 | Exact nd match; reproduces the G2 condition table |
| S-TIM28 (OHARA) | E7 | 1.688931 | 31.07 | 1.682495 | 1.704665 | 1.717975 | +0.0092 | Exact nd match; reproduces the G3 condition table |
| Unmatched proprietary optical polymer | E9 | 1.583060 | 30.2 | — | — | — | — | No defensible public catalog identity |
| S-BSL7 (OHARA) | E10 | 1.516330 | 64.14 | 1.513855 | 1.521905 | 1.526214 | −0.0024 | Exact nd match; patent νd rounds to 64.1 |

The explicit line indices and `dPgF` values are catalog-derived properties stored on the element records; they are not patent-published measurements of the production melts. They support chromatic tracing at the catalog-equivalence level, but they do not justify calling the lens apochromatic.

The principal chromatic strategy is conventional achromatization through cemented pairs with controlled index and Abbe-number differences. J2 combines low-νd E5 with high-νd E6 and remains positive. J3 combines E7 and E8 with a smaller Abbe separation and a large positive index step, remaining negative. The patent explicitly regulates both pairs through conditions (5)–(7).

## Focus Mechanism

**Source fact.** The patent states that focusing is performed by moving Group 1 (¶0020). Groups 2, 3, and 4 remain at their selected zoom-state positions for the modeled focus operation. Canon identifies the production drive as micro-USM but does not publish the internal optical travel.

**Focus-model classification:** `CONSTRAINED_RECONSTRUCTION`.

The patent supplies no finite-focus spacing table. The data model treats Canon's rounded 0.38 m closest-focus specification as an image-plane-referenced object distance. At each zoom state, G1 moves objectward, increasing D6, while Groups 2–4 and the image plane remain fixed. The full object-to-image paraxial matrix is solved for zero B term.

| Zoom position | D6 at infinity (mm) | D6 at modeled close focus (mm) | G1 objectward travel (mm) |
|---|---:|---:|---:|
| 28.90 mm | 34.380000000 | 38.935758879 | 4.555758879 |
| 50.02 mm | 12.710000000 | 17.135015168 | 4.425015168 |
| 86.89 mm | 1.090000000 | 5.701506721 | 4.611506721 |

At the tele position the reconstruction gives 0.297530139×, 0.823% below Canon's rounded 0.30× specification. This agreement supports the mechanism model but does not turn the reconstructed spacings into patent-published values.

The reconstruction also produces focal-length breathing. Computed EFL changes from 28.904387667 to 26.387043039 mm at the wide state, from 50.014500526 to 42.588293458 mm at the intermediate state, and from 86.899293947 to 64.354237231 mm at tele. These are model results tied to the assumed 0.38 m reference plane, not manufacturer specifications.

## Aspherical Surfaces

Surface **17A**, the rear surface of E9, is the only asphere. Its base radius is −205.313 mm and its stored semi-diameter is 10.820 mm.

The patent defines the sag along the positive direction of light travel as

\[
X(Y)=\frac{(1/R)Y^2}{1+\sqrt{1-(Y/R)^2}}+BY^4+CY^6+DY^8+EY^{10}.
\]

The square-root term is the standard conic expression with \(1+K=1\), so the stored standard conic constant is **K = 0**. No Japanese κ-to-K offset is required for this patent.

| Stored coefficient | Value | Units |
|---|---:|---|
| K | 0 | dimensionless |
| A4 | +1.91256×10⁻5 | mm⁻3 |
| A6 | +4.84357×10⁻8 | mm⁻5 |
| A8 | −2.85693×10⁻10 | mm⁻7 |
| A10 | +1.98932×10⁻12 | mm⁻9 |
| A12 | 0 | mm⁻11 |
| A14 | 0 | mm⁻13 |

No scale factor was applied, so these coefficients are the normalized patent values without an \(A_p/s^{p-1}\) transformation; K is unchanged.

**Computed result.** At the stored 10.820 mm semi-diameter, the polynomial departure from the K = 0 base sphere is **+0.329935443 mm**, and the actual aspheric rim-slope angle is **5.028228°**. Under the patent's +X convention, the positive departure places the aspheric profile imageward of the base sphere at that height. The patent states the intended correction direction—stronger negative refractive effect toward the periphery—but the departure value alone is not treated as an independent performance measurement.

**Manufacturing provenance.** The patent explicitly teaches a plastic aspherical lens in G4 (¶0034), and the prescription index/dispersion pair is retained as an unmatched optical-polymer class. Canon's product page identifies an aspherical lens but does not state whether the production component was molded plastic, a composite replica, or another fabrication form. The analysis therefore does not infer a more specific process.

## Patent Conditional Expressions

The final data file reproduces all seven Example 6 conditions within the audit tolerance of 0.0011.

| Condition | Computed value | Patent table | Residual | Result |
|---|---:|---:|---:|---|
| \(|f_1/f_w|\) | 1.269890346 | 1.270 | −0.000109654 | Pass |
| \(f_2/f_w\) | 0.933362580 | 0.933 | +0.000362580 | Pass |
| \(|f_3/f_w|\) | 1.734902571 | 1.735 | −0.000097429 | Pass |
| \(f_4/f_w\) | 2.992546269 | 2.992 | +0.000546269 | Pass |
| \(\nu_{2p}-\nu_{2n}\) | 36.860000000 | 36.860 | 0.000000000 | Pass |
| \(\nu_{3n}-\nu_{3p}\) | 7.290000000 | 7.290 | approximately 0 | Pass |
| \(N_{3p}-N_{3n}\) | 0.157729000 | 0.158 | −0.000271000 | Pass |

The first four expressions regulate group power relative to the wide-state focal length. The last three regulate the two cemented doublets. The close agreement is also an internal check against mixing Example 6 with a sibling prescription.

## Verification Summary

| Quantity | 28.90 mm state | 50.02 mm state | 86.89 mm state |
|---|---:|---:|---:|
| Computed infinity EFL (mm) | 28.904387667 | 50.014500526 | 86.899293947 |
| Patent focal length (mm) | 28.90 | 50.02 | 86.89 |
| EFL residual (mm) | +0.004387667 | −0.005499474 | +0.009293947 |
| Modeled infinity f-number | 3.846027780 | 4.451141943 | 5.878770585 |
| BFD from surface 19 (mm) | 38.719113072 | 51.794644886 | 75.537349273 |
| Surface 1 to image plane (mm) | 122.369113072 | 113.764644886 | 125.887349273 |
| TL/EFL | 4.233583 | 2.274633 | 1.448658 |
| BFD/EFL | 1.339558 | 1.035593 | 0.869252 |

The surface-by-surface Petzval sum is **0.00157689886866 mm⁻¹**, corresponding to a reciprocal radius of **634.156076763 mm**. Air-gap changes do not alter this first-order sum.

Every stored standalone element focal length agrees with an independent thick-lens calculation within 4.8×10⁻7 mm. The two cemented net powers are +47.430680425 mm for J2 and −50.138684298 mm for J3. These checks distinguish the individual air-reference focal lengths from the in-situ cemented behavior.

The data file uses the exact Canon EF mount identifier `canon-ef` and the `135-full-frame` image-format identifier. The projection is the ordinary rectilinear default. No perspective-control, folded-path, mirror, or stabilization metadata is present.

## Sources and References

- JP 2009-282554 A, *Zoom Lens*, Canon Inc., Numerical Example 6, especially ¶0019–0034, ¶0044, Table 1, and Figures 21–24.
- [Canon Camera Museum: EF28-90mm f/4-5.6 II USM](https://global.canon/en/c-museum/product/ef370.html).
- [OHARA Optical Glass Pocket Catalog](https://oharacorp.com/wp-content/uploads/2023/06/ohara-pocket-catalog-2023-05.pdf).
- Companion verification record: `CanonEF2890mmf456II.audit.md`.
