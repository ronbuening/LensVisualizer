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

The product aperture marks and patent targets remain separate. The original prescription headline on PDF p. 15 prints f/3.83–5.88, while Fig. 22 on PDF p. 29 prints wide f/3.84. Fig. 23 (PDF p. 29) prints intermediate f/4.45 and Fig. 24 (PDF p. 30) tele f/5.88. The 2026-10-30 review replaces the former retail live targets 4/4.451141943/5.6 with 3.83/4.45/5.88 using the prescription headline at wide. The 3.83/3.84 discrepancy is recorded as unresolved; neither value is claimed to identify a physical iris schedule. Catalog design aperture is now the declared source-headline 3.83. The stop position/rule and focus/zoom trajectories remain unchanged.

All index-dependent calculations below use the retained source index, read as a d-line value. Paragraph 0035 never defines the material spectral line. Source Abbe values are the literal printed values rather than catalog decimals; see the glass section.

The product has no documented optical stabilization in the cited Canon record, and the patent prescription contains no stabilization group. No image-stabilization function is assigned to any element.

Throughout this analysis, **source fact** denotes a directly published patent, manufacturer, or catalog statement; **computed result** denotes a code-derived quantity; **catalog-derived result** denotes a public-glass-catalog property; and **author inference/modeling choice** denotes correlation, reconstructed spacing, inferred aperture, or inferred semi-diameter.

## Optical Architecture

**Source fact.** The patent describes a four-group negative-lead zoom with power sequence

\[
G_1(-)\;G_2(+)\;G_3(-)\;G_4(+).
\]

The ten elements form eight air-spaced construction groups because E5-E6 and E7-E8 are cemented doublets. The aperture stop is 1.80 mm in front of Group 3 and moves with it. The inactive flare-cutter plane shown between Group 4 and the image plane is not included as a refracting surface.

**Computed result.** Isolated functional-group powers from the final TypeScript sequence are:

| Functional group | Elements |      EFL (mm) | Optical function established by patent or placement                 |
| ---------------- | -------- | ------------: | ------------------------------------------------------------------- |
| G1               | E1-E3    | −36.699831010 | Negative front group; zoom compensator and focusing group           |
| G2               | E4-E6    | +26.974178559 | Principal positive variator and largest positive-power contribution |
| G3               | E7-E8    | −50.138684298 | Stop-coupled negative moving group                                  |
| G4               | E9-E10   | +86.484587178 | Rear positive group with the sole asphere                           |

The patent identifies G2 as the principal variator and as the group carrying the largest positive-power burden across the zoom range (¶0023). G1 supplies the negative-lead entrance geometry. G3 is a compact cemented negative group immediately behind the stop. G4 is a weak positive rear relay containing the single aspherical corrector.

### Zoom motion

All four functional groups move during zooming. Coordinates in the verification model are referenced to the fixed flare-cutter plane, with the object side negative.

| Group or plane       | Wide position (mm) | Intermediate position (mm) | Tele position (mm) | Wide-to-tele behavior                                   |
| -------------------- | -----------------: | -------------------------: | -----------------: | ------------------------------------------------------- |
| G1 front, surface 1  |             −83.65 |                     −75.03 |             −87.15 | Moves imageward, then reverses objectward; net −3.50 mm |
| G2 front, surface 7  |             −33.51 |                     −46.56 |             −70.30 | Monotonic objectward; total 36.79 mm                    |
| Stop                 |             −23.15 |                     −31.33 |             −49.48 | Moves objectward with G3                                |
| G3 front, surface 13 |             −21.35 |                     −29.53 |             −47.68 | Monotonic objectward; total 26.33 mm                    |
| G4 front, surface 16 |              −3.82 |                     −16.88 |             −40.62 | Monotonic objectward; total 36.80 mm                    |

G2 and G4 maintain a front-vertex separation of approximately 29.68–29.69 mm, confirming their common motion within the 0.01 mm precision of the patent table, as anticipated by claim 2 and ¶0027. The stop-to-G3 front spacing remains exactly 1.80 mm. G1's reversal is preserved by the three published zoom positions and would be lost in a two-endpoint model.

### Axial length, back focus, and principal planes

The patent's D19 values terminate at an inactive flare cutter rather than at the image plane. The data file omits that dummy plane and stores the computed image-plane back focal distance after surface 19.

| Zoom position |     EFL (mm) | BFD from surface 19 (mm) | Surface 1 to image plane (mm) | H1 from surface 1 (mm) | H2 from surface 19 (mm) |
| ------------- | -----------: | -----------------------: | ----------------------------: | ---------------------: | ----------------------: |
| 28.90 mm      | 28.904387667 |             38.719113072 |                 122.369113072 |           43.267560894 |             9.814725406 |
| 50.02 mm      | 50.014500526 |             51.794644886 |                 113.764644886 |           39.507213118 |             1.780144360 |
| 86.89 mm      | 86.899293947 |             75.537349273 |                 125.887349273 |           27.147278970 |           −11.361944674 |

The principal-plane migration is substantial: the rear principal plane moves from 9.815 mm imageward of the last surface at wide angle to 11.362 mm objectward of it at tele. That migration, rather than a simple physical extension, is central to the focal-length change.

The strict whole-system telephoto criterion is not met: total-track/EFL is 4.233583, 2.274633, and 1.448658. The patent's phrase “telephoto type” refers to the tele-end distribution of positive and negative group powers, not to a strict total-track ratio below unity. The BFD/EFL ratios are 1.339558, 1.035593, and 0.869252. The first two states have BFD greater than EFL, but the tele state does not; the zoom is therefore not classified globally as retrofocus.

### Pupil, aperture and semi-diameter model

The original locates the stop but gives no clear diameter. Actual derived iris radii are 6.928875/6.901771/6.898557 mm, with project paraxial targets 3.83/4.45/5.88. Independent collimated real-beam input-diameter ratios are 3.867915/4.508114/5.956444. The earlier 6.900 mm fixed-stop fit was an inferred diagnostic, not a published iris or the active schedule. No physical station-by-station iris diameter is established by this review.

Native Fig. 21 supports sixteen inferred cap revisions and a resolved S2 outer shoulder to 19.2 mm, preserving clear sd 14.7. Source R/d and the original asphere are retained. The 65-position diagnostic reaches the configured aperture at every zoom and at least 99% corner coverage with clear chiefs and no unsolved field. All 1,365 render states (65 zoom × 21 focus) have ten finite, closed, connected paths with zero hidden renderer trimming. Nine actual SVG views were compared directly with the selected wide source section; the source does not draw separate close-focus sections.

A 441-control × three-field × 97-pupil probe samples 128,331 rays using 380/focus mm positive object-to-image distances at finite focus and the shared field/chief solver at infinity. Every axial bundle is 97/97 clear and all chiefs clear, with no seed or aiming failures. Nine full-field marginal noBracket entries occur after S6 at tele, focus 0.30–0.70. Independent unrestricted-sphere intersections meet S7 at heights 14.035596–14.042157 mm, outside its 10 mm cap. None is an unexplained inside-cap failure. Other off-axis clipping remains sampled vignetting, not evidence of production illumination.

The geometry-identical dense copy reproduces surface positions and stop radii with zero difference. The 65-position infinity census retains −4.720239 mm maximum defocus at zoom t = 0.78125: computed BF 60.429677 versus current image gap 65.149916 mm, actual EFL 64.831256 mm. Only the three published infinity stations are quantitative anchors. The inferred 380 mm close anchors and interpolated focus/cam are not a source finite-spacing table; the positive-object probe tests rim passage and does not certify intermediate focus accuracy.
## Element-by-Element Analysis

### E1 — Negative Meniscus, Convex to Object

**Printed $n_d$ = 1.622992, $\nu_d$ = 58.2. Glass: S-BSM15 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified). Standalone f = −59.434955 mm.**

**Source fact.** The patent places an object-convex negative meniscus first and states that this form eases wide-end distortion and coma while helping to limit front-element diameter (¶0021–0022). E1 is the first of two negative elements used to concentrate the front group's negative power.

**Computed placement.** E1 carries less standalone negative power than E2 but has the largest clear aperture in the system. Its meniscus form bends the wide-angle bundle before the stronger biconcave member, reducing the angular burden on the following elements.

### E2 — Biconcave Negative

**Printed $n_d$ = 1.622992, $\nu_d$ = 58.2. Glass: S-BSM15 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified). Standalone f = −46.693390 mm.**

**Source fact.** The patent's preferred Group 1 form uses a biconcave second negative lens (¶0022). Together, E1 and E2 provide the concentrated negative lead used to keep the front group compact.

**Author interpretation.** E2 is the stronger of the two standalone negative elements in G1. Its placement behind E1 makes it the principal negative-power contributor within the front group, while their repeated literal source coordinate keeps the two-element negative section in the same dispersion class.

### E3 — Positive Meniscus, Convex to Object

**Printed $n_d$ = 1.846660, $\nu_d$ = 23.8. Glass: S-TIH53 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified). Standalone f = +76.592150 mm.**

**Source fact.** The patent places a positive lens behind the two negative members to assist tele-end spherical-aberration correction (¶0021–0022). E3 completes G1 without reversing its net negative power.

The printed pair matches the S-TIH53 catalog row, which serves as the spectral proxy. The source low Abbe number places this medium in a flint-like dispersion class. No isolated chromatic role is claimed solely from that classification; the element operates as part of the full three-element moving group.

### E4 — Biconvex Positive

**Printed $n_d$ = 1.701536, $\nu_d$ = 41.2. Glass: S-BAH27 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified). Standalone f = +60.213140 mm.**

E4 is the air-spaced positive singlet at the front of G2. The patent identifies G2 as the main variator and the system's most important positive-power group (¶0023). E4 supplies positive power ahead of the cemented E5-E6 subassembly while keeping G2 to three physical elements.

The printed $\nu_d$ = 41.2 falls on the flint side of the usual crown/flint division. Its optical role follows placement and group power; no historical barium chemistry or supplier is identified.

### E5 — Negative Meniscus, Cemented Member J2

**Printed $n_d$ = 1.846660, $\nu_d$ = 23.8. Glass: S-TIH53 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified). Standalone f = −41.769774 mm.**

E5 is the negative, high-dispersion member of the G2 cemented doublet. Surface 10 is the shared interface and carries the downstream E6 medium in the data model.

The quoted focal length is E5's standalone thick-lens value in air. It does not represent E5's actual in-situ power within the cemented pair, where the interface transitions directly from E5's index to E6's index.

### E6 — Biconvex Positive, Cemented Member J2

**Printed $n_d$ = 1.603112, $\nu_d$ = 60.6. Glass: S-BSM14 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified). Standalone f = +22.061658 mm.**

E6 is the positive crown member of J2. The complete E5-E6 cemented assembly has a computed net EFL of **+47.430680425 mm**, not the algebraic combination of the two standalone air values.

**Source fact and computed result.** The patent requires a substantial Abbe-number separation in this doublet. The literal source values give

\[
\nu*{2p}-\nu*{2n}=60.6-23.8=36.8,
\]

The source condition table prints 36.860, whose extra precision cannot be recovered from the rounded material rows. The broad claimed separation remains satisfied. The patent associates this separation with tele-end axial-color correction (¶0030–0031). “Achromatizing doublet” is therefore justified; no apochromatic claim is made.

### E7 — Biconcave Negative, Cemented Member J3

**Printed $n_d$ = 1.688931, $\nu_d$ = 31.1. Glass: S-TIM28 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified). Standalone f = −16.651422 mm.**

E7 is the strong negative member of the compact stop-coupled third group. It begins immediately 1.80 mm behind the stop and supplies the dominant negative power in J3.

The standalone focal length is not an in-situ group value. The cemented interface at surface 14 transitions directly into E8 and materially changes the combined power and aberration balance.

### E8 — Positive Meniscus, Cemented Member J3

**Printed $n_d$ = 1.846660, $\nu_d$ = 23.8. Glass: S-TIH53 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified). Standalone f = +23.954582 mm.**

E8 is the positive partner of J3. Despite its positive standalone power, the completed E7-E8 assembly remains negative, with computed EFL **−50.138684298 mm**.

The patent constrains both the index and Abbe-number differences across this interface. The literal source values give

\[
\nu*{3n}-\nu*{3p}=31.1-23.8=7.3,
\]

and

\[
N*{3p}-N*{3n}=1.846660-1.688931=0.157729.
\]

The patent links these ranges to control of axial color, spherical aberration, and coma across zooming (¶0031–0033). The claim concerns the cemented pair and interface, not E8 acting independently.

### E9 — Negative Meniscus, Concave to Object, Rear Asphere

**Printed $n_d$ = 1.583060, $\nu_d$ = 30.2. Glass: Unmatched (source plastic-asphere option; n=1.58306, ν=30.2; POLYCARB is a near candidate). Standalone f = −277.806212 mm.**

E9 is a weak negative meniscus at the front of G4. Its rear surface, 17A, is the prescription's sole asphere. The patent states that an asphere in G4 assists wide-end field-curvature and distortion correction and tele-end spherical-aberration correction (¶0033). It further teaches a plastic aspherical lens as a manufacturing option (¶0034).

The material's formulation is unspecified. The source teaches a plastic-asphere option, but its generic teaching and index/Abbe coordinate do not establish this example's chemistry or forming process. The pair matches no catalog row within tolerance, so the medium stays Unmatched, with POLYCARB only a near candidate. Canon's production diagram supports an aspherical component as correlation evidence; it does not identify the historical material.

### E10 — Positive Meniscus, Concave to Object

**Printed $n_d$ = 1.516330, $\nu_d$ = 64.1. Glass: S-BSL7 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified). Standalone f = +66.761785 mm.**

E10 is the final positive element and completes G4's computed net EFL of **+86.484587178 mm**. Its positive power dominates the weak negative E9, leaving the fourth group positive as required by the patent.

**Author interpretation.** Its rear position and relatively high Abbe number make it a plausible final relay and field-balance member, but no isolated performance claim is assigned beyond the verified group power and the patent's general fourth-group correction strategy.

## Glass Identification and Selection

All ten modeled media are taken from Numerical Example 6 on PDF p. 15. Paragraph 0035 on PDF p. 9 defines Ni/νi as refractive index and Abbe number without a spectral line. The d/g labels on the aberration figures name plotted wavelengths; they do not define the table coordinates.

The patent names no spectral line. 9 of 10 printed pairs match catalog d-line coordinates and none match the e-line, so the table is read as d-line. 9 media use catalog curves as spectral proxies; supplier, melt and chemistry stay unspecified. The remaining medium, the E9 plastic asphere (1.583060 / 30.2), has no exact catalog match and stays Unmatched.

The Abbe values are the literal printed values, rounded to one decimal; catalog decimals are not substituted. The original prints no individual line indices, partial dispersion or APD evidence, so the catalog curves supply the C/F/g values. The coordinate match fixes the reference line only. There is no bonded layer, source filter, rear plate or numerical cement medium.

| Medium | Printed $n_d$ | Printed $\nu_d$ | Glass                                                                                                         |
| ------ | ------------: | --------------: | ------------------------------------------------------------------------------------------------------------- |
| E1     |      1.622992 |            58.2 | S-BSM15 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)  |
| E2     |      1.622992 |            58.2 | S-BSM15 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)  |
| E3     |      1.846660 |            23.8 | S-TIH53 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)  |
| E4     |      1.701536 |            41.2 | S-BAH27 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)  |
| E5     |      1.846660 |            23.8 | S-TIH53 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)  |
| E6     |      1.603112 |            60.6 | S-BSM14 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)  |
| E7     |      1.688931 |            31.1 | S-TIM28 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)  |
| E8     |      1.846660 |            23.8 | S-TIH53 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)  |
| E9     |      1.583060 |            30.2 | Unmatched (source plastic-asphere option; n=1.58306, ν=30.2; POLYCARB is a near candidate)                    |
| E10    |      1.516330 |            64.1 | S-BSL7 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)   |

Table 1 on PDF p. 17 prints ν2p−ν2n = 36.860 and ν3n−ν3p = 7.290. Literal Example 6 rows yield 36.8 and 7.3. The precision basis is not printed and is recorded as unresolved in `source.errata`; rounding is a possible explanation, not an established cause. Catalog decimals are not substituted to force agreement. The claimed broad ranges remain satisfied. E9's formulation is unspecified; the source's plastic-asphere option does not identify a proprietary polymer formulation or historical manufacturing process.

## Focus Mechanism

**Source fact.** The patent states that focusing is performed by moving Group 1 (¶0020). Groups 2, 3, and 4 remain at their selected zoom-state positions for the modeled focus operation. Canon identifies the production drive as micro-USM but does not publish the internal optical travel.

**Focus-model classification:** `CONSTRAINED_RECONSTRUCTION`.

The patent supplies no finite-focus spacing table. The data model treats Canon's rounded 0.38 m closest-focus specification as an image-plane-referenced object distance. At each zoom state, G1 moves objectward, increasing D6, while Groups 2–4 and the image plane remain fixed. The full object-to-image paraxial matrix is solved for zero B term.

| Zoom position | D6 at infinity (mm) | D6 at modeled close focus (mm) | G1 objectward travel (mm) |
| ------------- | ------------------: | -----------------------------: | ------------------------: |
| 28.90 mm      |        34.380000000 |                   38.935758879 |               4.555758879 |
| 50.02 mm      |        12.710000000 |                   17.135015168 |               4.425015168 |
| 86.89 mm      |         1.090000000 |                    5.701506721 |               4.611506721 |

At the tele position the reconstruction gives 0.297530139×, 0.823% below Canon's rounded 0.30× specification. This agreement supports the mechanism model but does not turn the reconstructed spacings into patent-published values.

The reconstruction also produces focal-length breathing. Computed EFL changes from 28.904387667 to 26.387043039 mm at the wide state, from 50.014500526 to 42.588293458 mm at the intermediate state, and from 86.899293947 to 64.354237231 mm at tele. These are model results tied to the assumed 0.38 m reference plane, not manufacturer specifications.

## Aspherical Surfaces

Surface **17A**, the rear surface of E9, is the only asphere. Its base radius is −205.313 mm and its adopted inferred semi-diameter is 10.000 mm.

The patent defines the sag along the positive direction of light travel as

\[
X(Y)=\frac{(1/R)Y^2}{1+\sqrt{1-(Y/R)^2}}+BY^4+CY^6+DY^8+EY^{10}.
\]

The square-root term is the standard conic expression with \(1+K=1\), so the stored standard conic constant is **K = 0**. No Japanese κ-to-K offset is required for this patent.

| Stored coefficient |          Value | Units         |
| ------------------ | -------------: | ------------- |
| K                  |              0 | dimensionless |
| A4                 |  +1.91256×10⁻5 | mm⁻3          |
| A6                 |  +4.84357×10⁻8 | mm⁻5          |
| A8                 | −2.85693×10⁻10 | mm⁻7          |
| A10                | +1.98932×10⁻12 | mm⁻9          |
| A12                |              0 | mm⁻11         |
| A14                |              0 | mm⁻13         |

No scale factor was applied, so these coefficients are the normalized patent values without an \(A_p/s^{p-1}\) transformation; K is unchanged.

**Computed result.** At the adopted 10.000 mm semi-diameter, the polynomial departure from the K = 0 base sphere is **+0.231015600 mm**, and the actual aspheric rim-slope angle is **3.081691°**. Under the patent's +X convention, the positive departure places the aspheric profile imageward of the base sphere at that height. The patent states the intended correction direction—stronger negative refractive effect toward the periphery—but the departure value alone is not treated as an independent performance measurement.

**Manufacturing provenance.** The patent explicitly teaches a plastic aspherical lens in G4 (¶0034). The prescription index/Abbe pair matches no catalog row, and no historical formulation or forming process is established. Canon's product page identifies an aspherical lens but does not state whether the production component was molded plastic, a composite replica, or another fabrication form. The analysis therefore does not infer a more specific process.

## Patent Conditional Expressions

The power and index conditions remain consistent with Example 6. Two Abbe-difference cells cannot be reproduced to the table's extra precision from its own rounded material rows; they remain explicitly unresolved. All seven broad claimed intervals remain satisfied.

| Condition             | Computed value | Patent table |     Residual | Result                      |
| --------------------- | -------------: | -----------: | -----------: | --------------------------- | ------------ | ---- |
| \(                    |        f_1/f_w |           \) |  1.269890346 | 1.270                       | −0.000109654 | Pass |
| \(f_2/f_w\)           |    0.933362580 |        0.933 | +0.000362580 | Pass                        |
| \(                    |        f_3/f_w |           \) |  1.734902571 | 1.735                       | −0.000097429 | Pass |
| \(f_4/f_w\)           |    2.992546269 |        2.992 | +0.000546269 | Pass                        |
| \(\nu*{2p}-\nu*{2n}\) |   36.800000000 |       36.860 | −0.060000000 | Source precision unresolved |
| \(\nu*{3n}-\nu*{3p}\) |    7.300000000 |        7.290 | +0.010000000 | Source precision unresolved |
| \(N*{3p}-N*{3n}\)     |    0.157729000 |        0.158 | −0.000271000 | Pass                        |

The first four expressions regulate group power relative to the wide-state focal length. The last three regulate the two cemented doublets. The first four group-power ratios also distinguish Example 6 from sibling configurations. The two Abbe discrepancies are not hidden by substituting catalog precision.

## Verification Summary

| Quantity                         | 28.90 mm state | 50.02 mm state | 86.89 mm state |
| -------------------------------- | -------------: | -------------: | -------------: |
| Computed infinity EFL (mm)       |   28.904387667 |   50.014500526 |   86.899293947 |
| Patent focal length (mm)         |          28.90 |          50.02 |          86.89 |
| EFL residual (mm)                |   +0.004387667 |   −0.005499474 |   +0.009293947 |
| Project paraxial target f-number |           3.83 |           4.45 |           5.88 |
| BFD from surface 19 (mm)         |   38.719113072 |   51.794644886 |   75.537349273 |
| Surface 1 to image plane (mm)    |  122.369113072 |  113.764644886 |  125.887349273 |
| TL/EFL                           |       4.233583 |       2.274633 |       1.448658 |
| BFD/EFL                          |       1.339558 |       1.035593 |       0.869252 |

The surface-by-surface Petzval sum is **0.00157689886866 mm⁻¹**, corresponding to a reciprocal radius of **634.156076763 mm**. Air-gap changes do not alter this first-order sum.

Every stored standalone element focal length agrees with an independent thick-lens calculation within 4.8×10⁻7 mm. The two cemented net powers are +47.430680425 mm for J2 and −50.138684298 mm for J3. These checks distinguish the individual air-reference focal lengths from the in-situ cemented behavior.

The data file uses the exact Canon EF mount identifier `canon-ef` and the `135-full-frame` image-format identifier. The projection is the ordinary rectilinear default. No perspective-control, folded-path, mirror, or stabilization metadata is present.

## Original-Figure Review — 2026-10-30

The exact local source is `patents/JP2009282554A.pdf`. Native Fig. 21, PDF p. 28, is a 993 × 775 embedded raster at approximately 199 ppi. About 566 pixels span the 83.65 mm first-to-last vertex distance, around 6.77 px/mm or 0.15 mm per native pixel. Practical endpoint uncertainty is ±0.5 mm. Enlargements are reading magnification only. FC, SP, IP, leaders and brackets are excluded from optical-rim measurement. The source prints no clear diameters.

All ten elements, concave ends and both cemented interfaces were compared with this matching section and actual SVGs. S1 follows the roughly 19.2 mm front rim; S2 keeps clear sd 14.7 and adds `rimExtensionSd: 19.2` for the resolved outer shoulder. The land is flat beyond the 18.35 mm sphere radius, with the optical cap retained inside its domain. S3/4 follow about 15 mm, S5/6 14.5, S7/8 and cemented S9/10/11 about 10, cemented S13/14/15 about 7.3, and S16/17A/18/19 about 10. Equal connected cemented endpoints follow the visible component boundary; no opaque interface fill is added.

The first concave cap remains gap constrained. Restoring S2 clear to 15.3 mm gives 9.03 mm combined intrusion against 8.631 mm allowed across D2 = 9.59. Keeping the old S3 = 15.2 with the new shoulder gives 8.649 against 8.631 mm allowed; independently visible roughly 15 mm S3 endpoints support the adopted 15.0. A rear uniform 11.3 mm blank trial gives 0.43 against 0.360 mm allowed across D17 = 0.40. The adopted source-sized 10 mm rear caps preserve that guard. No R/d or asphere is tuned to fit a drawing, no tolerance is relaxed, and no inferred cut, opaque bonded land or unsupported compound blank is introduced.

The source's inactive surface-20 flare cutter remains omitted. Raw D19 = 0/13.06/36.80 mm ends at that plane; the existing independently solved BF values imply an approximately 38.72–38.74 mm FC-to-image distance. That small variation is retained as reconstruction uncertainty rather than claimed as a printed fixed camera-side gap. Source fidelity, sampled runtime clearance and the retail association are separate conclusions. See the [audit sidecar](./CanonEF2890mmf456II.audit.md).

## Source-Stated Catalog Focal Length — 2026-10-30

The catalog design focal length copies the source-stated 28.9 / 86.89 mm endpoints from PDF p. 15 (Numerical Example 6 heading and variable-spacing focal-length row). Computed 28.904387667 / 86.899293947 mm EFLs remain model diagnostics. This metadata follow-up adds no original shape/glass review and changes no R/d, asphere, stop, zoom/focus gap or aperture rule.

## Sources and References

- JP 2009-282554 A, _Zoom Lens_, Canon Inc., Numerical Example 6, especially ¶0019–0034, ¶0044, Table 1, and Figures 21–24.
- [Canon Camera Museum: EF28-90mm f/4-5.6 II USM](https://global.canon/en/c-museum/product/ef370.html).
- [OHARA Optical Glass Pocket Catalog](https://oharacorp.com/wp-content/uploads/2023/06/ohara-pocket-catalog-2023-05.pdf).
- [Companion audit](./CanonEF2890mmf456II.audit.md).
