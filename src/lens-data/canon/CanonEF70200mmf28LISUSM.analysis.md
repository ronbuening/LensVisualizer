## Patent Reference and Design Identification

**Patent:** JP2002162564A\
**Application Number:** JP2000-361115\
**Filed:** 2000-11-28\
**Published:** 2002-06-07\
**Inventor:** Akira Harada\
**Applicant:** Canon Inc.\
**Title:** ズームレンズ及びそれを用いた光学機器 (Zoom lens and optical apparatus using the same)\
**Embodiment analyzed:** Example 1 / Numerical Example 1

The prescription modeled here is Numerical Example 1 of JP2002162564A. The data file preserves that embodiment rather than modifying it to force agreement with the production lens. The correlation to the CANON EF 70-200mm f/2.8L IS USM rests on several convergent facts, but it is not manufacturer confirmation of the patent-to-product identity.

1. The patent application was filed on 28 November 2000. Canon lists the production EF70-200mm f/2.8L IS USM as marketed in September 2001, placing the patent work immediately before the commercial lens.
2. Numerical Example 1 is a large-aperture zoom with published control points at 72.50, 99.50, and 194.99 mm and a source f-number of 2.9. The production lens is marketed as 70-200mm f/2.8.
3. The patent places axial focusing in the second front-component unit, g2, and places optical image stabilization in a negative rear-relay unit, g5B, that moves perpendicular to the optical axis. Those mechanisms are consistent with the production lens being an internally focusing, optically stabilized EF zoom, but the manufacturer does not identify this patent as its production prescription.
4. The decisive limitation is the count mismatch. Numerical Example 1 contains 21 refractive elements in 19 air-separated physical groups, while Canon specifies 23 elements in 18 groups for the production lens. The embodiment is therefore retained as a correlated patent design, but not as the exact 23/18 commercial formula.

The patent's Numerical Example 1 publishes `f = 72.49805`, `fno = 1:2.9`, and `2ω = 34.2°-12.4°`, followed by the three-column variable-spacing table. Independent tracing of the final data file gives 72.497675, 99.494745, and 194.979940 mm effective focal lengths at the three authored zoom states. Canon's 70-200mm and f/2.8 values remain separate marketed specifications rather than replacements for the patent design values.

## Optical Architecture

The patent divides the system into a front zoom/focus component `G1` and a rear relay component `G2` that is axially fixed during zoom; within `G2`, `g5B` moves transversely for stabilization. In Numerical Example 1 the seven functional units are, from object to image, positive `g1`, positive `g2`, negative `g3`, positive `g4`, positive `g5A`, negative `g5B`, and positive `g5C`. The aperture stop follows `g4` and precedes `g5A`. This sign sequence is reproduced by independent isolated-subassembly calculations from the final data file.

| Functional unit | Surfaces | Patent role | Isolated subassembly EFL |
|---|---|---|---:|
| g1 | 1-6 | Fixed front positive unit | +201.216 mm |
| g2 | 7-10 | Axial focusing unit; zoom mover | +135.220 mm |
| g3 | 11-17 | Negative zoom unit | -27.985 mm |
| g4 | 18-23 | Positive zoom compensating unit | +92.062 mm |
| g5A | 25-30 | Positive front section of rear relay | +52.009 mm |
| g5B | 31-35 | Negative transverse IS unit | -29.920 mm |
| g5C | 36-41 | Positive rear section of rear relay | +58.935 mm |

These focal lengths describe each unit isolated as a subassembly in air. They are not in-situ power contributions: the complete zoom depends on the separations among units, and those separations change strongly with focal length.

The three published zoom states move `g2`, `g3`, and `g4` toward the image while leaving `g1`, the stop, and the rear relay axially fixed at source precision. The final data file reproduces the published D6, D10, D17, and D23 spacings, whose sum remains 54.06 mm at every state.

| Axial anchor from r1 | 72.50 state | 99.50 state | 194.99 state |
|---|---:|---:|---:|
| g1 / r1 | 0.00 mm | 0.00 mm | 0.00 mm |
| g2 / r7 | 24.32 mm | 30.57 mm | 52.10 mm |
| g3 / r11 | 39.21 mm | 53.51 mm | 82.74 mm |
| g4 / r18 | 89.65 mm | 96.24 mm | 100.74 mm |
| STO | 114.45 mm | 114.45 mm | 114.45 mm |
| g5A / r25 | 114.70 mm | 114.70 mm | 114.70 mm |
| g5B / r31 | 140.16 mm | 140.16 mm | 140.16 mm |
| g5C / r36 | 155.05 mm | 155.05 mm | 155.05 mm |

Canon categorizes the production lens as a telephoto zoom. Under the project's stricter paraxial architecture test, however, the modeled prescription is not labeled a telephoto-form system because `TL/EFL` remains greater than 1 at all three states; it is likewise not retrofocus because `BFD/EFL` remains below 1. The marketing category and the computed architecture classification are therefore kept separate.

The design is entirely spherical. No aspherical surface, diffractive surface, folded path, cover plate, filter, or inactive dummy surface occurs in Numerical Example 1.

## Element-by-Element Analysis

### L1 — Negative Meniscus

**nd = 1.74950, νd = 35.3. Glass: 750353 coordinate class (spectral surrogate: OHARA S-LAM7). f = -259.450 mm.**

L1 is the front negative meniscus of positive unit g1. Its weak negative standalone power offsets part of the strong positive power that follows while allowing the front group to retain a large entrance aperture. The relatively high index and lower Abbe number make it the dispersive counterpart to the two high-Abbe positive elements behind it.

The OHARA name is a spectral surrogate chosen because its catalog coordinates closely reproduce the patent's `nd/νd` pair. It is not an attribution of Canon's actual production glass.

### L2 — Biconvex Positive

**nd = 1.49700, νd = 81.5. Glass: 497816 fluorophosphate-crown coordinate class (spectral surrogate: OHARA S-FPL51). f = +209.461 mm.**

L2 is the first high-Abbe positive element in g1. Its positive standalone power and very high Abbe number make it a natural chromatic counterweight to L1. In the complete group, that pairing allows positive front-group power without requiring the same chromatic power that a lower-Abbe positive glass would introduce.

The data file carries OHARA S-FPL51 line indices as a modeled spectral surrogate. The patent itself publishes only the `nd/νd` pair and does not name a supplier.

### L3 — Positive Meniscus

**nd = 1.49700, νd = 81.5. Glass: 497816 fluorophosphate-crown coordinate class (spectral surrogate: OHARA S-FPL51). f = +248.010 mm.**

L3 is a second high-Abbe positive element completing g1. Its meniscus form and moderate positive standalone power extend the chromatic strategy of L2 while shaping the beam presented to the moving g2 focus unit.

The duplication of the 1.49700/81.5 coordinate in L2 and L3 is a source fact of the patent prescription; the S-FPL51 identification remains a catalog-coordinate model rather than a production-material claim.

### L4 — Negative Meniscus

**nd = 1.84666, νd = 23.8. Glass: 847238 dense-flint coordinate class (spectral surrogate: OHARA S-TIH53). f = -477.613 mm.**

L4 is the front element of the g2 focusing unit. In isolation it is only weakly negative, but it sits immediately ahead of the much stronger positive L5. The strong refractive index contrast allows the two-element focus group to achieve positive net power in a short axial package.

The low Abbe number of L4 also provides dispersion opposite to the high-Abbe L5. Because the complete g2 unit moves axially for focus, controlling the chromatic balance within that moving unit is more important than its individual lens powers considered separately.

### L5 — Positive Meniscus

**nd = 1.48749, νd = 70.2. Glass: 487702/704 fluor-crown coordinate class (spectral surrogate: OHARA S-FSL5). f = +103.244 mm.**

L5 supplies most of the positive standalone power of g2. Together with L4 it produces an isolated g2 EFL of +135.220 mm. The group therefore remains positive even though its first element is negative.

The patent identifies g2, not either individual element, as the focusing unit. Its axial motion changes the neighboring D6 and D10 air spaces; no close-focus version of those spacings is published for Numerical Example 1.

### L6 — Negative Meniscus

**nd = 1.80610, νd = 40.9. Glass: 806409 lanthanum-flint coordinate class (spectral surrogate: OHARA S-LAH53). f = -46.218 mm.**

L6 is the first strongly negative element of g3. Its standalone power is substantially stronger than the weak net power of the cemented pair that follows, so it is one of the principal contributors to g3's negative isolated power.

The 806409 surrogate uses current OHARA S-LAH53 line indices, which reproduce the patent `nd` exactly and its rounded `νd` closely. This is a spectral modeling choice, not evidence that Canon used S-LAH53 in production.

### D1 — L7 + L8 Cemented Pair

**L7: nd = 1.48749, νd = 70.2. Glass: 487702/704 fluor-crown coordinate class (spectral surrogate: OHARA S-FSL5). f = -54.470 mm.**\
**L8: nd = 1.84666, νd = 23.8. Glass: 847238 dense-flint coordinate class (spectral surrogate: OHARA S-TIH53). f = +49.849 mm.**

L7 and L8 share the r14 cemented interface. Their standalone powers are of similar magnitude and opposite sign, but the cemented pair is not power-neutral: tracing the pair as a combined thick subassembly gives a weak positive EFL of +585.644 mm.

That cemented net power must be distinguished from the two isolated element powers and from g3's in-situ action. The complete g3 unit remains strongly negative, with isolated subassembly EFL -27.985 mm, because L6 and L9 supply substantial negative power around D1.

The large Abbe contrast across the cemented interface is consistent with an achromatizing role. The patent supplies the refractive coordinates but does not identify a catalog glass or state a production material pair.

### L9 — Biconcave Negative

**nd = 1.71299, νd = 53.9. Glass: 713539 lanthanum-crown coordinate class (spectral surrogate: OHARA S-LAL8). f = -77.636 mm.**

L9 closes g3 with additional negative power. Its biconcave form reinforces the negative zoom-unit power while its intermediate Abbe number avoids simply duplicating the dispersion of L6 or the D1 dense-flint member.

As g3 moves substantially toward the image during zooming, its negative power is central to the change in system magnification; the patent explicitly describes g3 as the negative zoom unit.

### L10 — Biconvex Positive

**nd = 1.49700, νd = 81.5. Glass: 497816 fluorophosphate-crown coordinate class (spectral surrogate: OHARA S-FPL51). f = +59.854 mm.**

L10 is the strong positive front element of g4. It restores positive power after g3 and is one of four elements in the prescription using the 1.49700/81.5 high-Abbe coordinate.

The g4 unit acts as the principal positive compensating unit in the front component. Its axial position changes less than g3 across the three source states, but the combined variation of g2, g3, and g4 preserves the fixed stop and rear relay station.

### L11 — Negative Meniscus

**nd = 1.66680, νd = 33.0. Glass: 667330 flint coordinate class (spectral surrogate: OHARA S-TIM39 legacy). f = -83.070 mm.**

L11 introduces negative power between the two positive members of g4. Its lower Abbe number gives g4 a substantial internal dispersion contrast rather than making the group a simple positive triplet of similar glasses.

The S-TIM39 annotation is explicitly a legacy OHARA coordinate surrogate. The patent does not supply a vendor name, and the analysis therefore does not equate the surrogate with the actual Canon melt.

### L12 — Plano-Convex Positive

**nd = 1.84666, νd = 23.8. Glass: 847238 dense-flint coordinate class (spectral surrogate: OHARA S-TIH53). f = +163.189 mm.**

L12 is the rear positive element of g4. Its rear surface is the plane r23 immediately before the variable air gap to the stop. In the Japanese publication r23 is printed as `0.000`; the verified model normalizes it to a plane because the same-family table renders the surface as infinity and a literal zero-radius sphere is physically undefined.

The element's high index permits positive surface power with relatively modest curvature at the plane-ended rear of the front component. The complete g4 isolated EFL is +92.062 mm.

### L13 — Positive Meniscus

**nd = 1.77250, νd = 49.6. Glass: 773496 lanthanum-flint coordinate class (spectral surrogate: OHARA S-LAH66). f = +110.546 mm.**

L13 begins the fixed rear relay immediately after the stop and is the first element of positive unit g5A. The patent explains that g5A converges the beam before the image-stabilizing unit, reducing the axial beam diameter incident on g5B.

The stored S-LAH66 line indices are a catalog surrogate for the patent coordinate. The analysis does not substitute the later S-LAH66N coordinate or treat either name as a Canon supplier attribution.

### L14 — Negative Meniscus

**nd = 1.84666, νd = 23.8. Glass: 847238 dense-flint coordinate class (spectral surrogate: OHARA S-TIH53). f = -61.277 mm.**

L14 provides a strong negative contribution inside otherwise positive g5A. This alternating sign helps shape the converging beam before the IS group while providing chromatic leverage against the positive members L13 and L15.

Its standalone power is not a measure of g5A's system contribution. The complete isolated g5A subassembly remains positive at +52.009 mm.

### L15 — Biconvex Positive

**nd = 1.60311, νd = 60.6. Glass: 603607 dense-crown coordinate class (spectral surrogate: OHARA S-BSM14). f = +35.252 mm.**

L15 is the strongest positive standalone element in g5A. It completes the beam-converging unit immediately before the constant D30 gap to g5B.

The modeled semi-diameter of this element is also the most edge-thickness-constrained in the final geometry. That dimension is not patent-published; it is an inferred clear aperture validated against edge thickness, rim slope, ray containment, and cross-gap geometry.

### D2 — L16 + L17 Cemented Pair

**L16: nd = 1.84666, νd = 23.8. Glass: 847238 dense-flint coordinate class (spectral surrogate: OHARA S-TIH53). f = +74.943 mm.**\
**L17: nd = 1.69350, νd = 53.2. Glass: 694532 lanthanum-crown coordinate class (spectral surrogate: OHARA L-LAL13). f = -32.532 mm.**

L16 and L17 form the cemented front pair of the transverse IS unit g5B, sharing surface r32. Although L16 is positive in isolation, the cemented pair as a whole is negative, with isolated subassembly EFL -58.905 mm.

The `L-LAL13` prefix is intentional. OHARA's current low-Tg coordinate for code 694532 is L-LAL13; the data file does not relabel it as S-LAL13. The coordinate assignment is again a surrogate, not a supplier identification.

The distinction between the pair and the full IS unit is important: D2 is already negative, but g5B also contains the separate negative L18, yielding a complete isolated unit EFL of -29.920 mm.

### L18 — Biconcave Negative

**nd = 1.69350, νd = 53.2. Glass: 694532 lanthanum-crown coordinate class (spectral surrogate: OHARA L-LAL13). f = -64.496 mm.**

L18 is the separate rear negative element of g5B. Together with the positive L16 and negative L17, it gives the IS unit the one-positive/two-negative composition preferred by the patent for maintaining substantial negative power while limiting required transverse travel.

No decentered position of L18 or the g5B unit is authored in the data file. The prescription represents the centered reference state only.

### L19 — Biconvex Positive

**nd = 1.49700, νd = 81.5. Glass: 497816 fluorophosphate-crown coordinate class (spectral surrogate: OHARA S-FPL51). f = +38.118 mm.**

L19 begins g5C and is the strongest positive standalone element of that rear unit. The patent assigns g5C positive power after the negative IS unit so that the relay can correct aberrations generated by g5B while completing image formation.

Its high Abbe number also restores a high-Abbe positive component late in the system, complementing the denser lanthanum-flint elements that follow.

### L20 — Negative Meniscus

**nd = 1.83400, νd = 37.2. Glass: 834372 lanthanum-flint coordinate class (spectral surrogate: OHARA S-LAH60). f = -48.718 mm.**

L20 supplies the negative middle contribution of g5C. It is paired by glass coordinate with L21 but has opposite standalone power because of its curvature form.

The common glass coordinate does not make the two elements a cemented group; they are air-separated and act as separate optical elements within g5C.

### L21 — Biconvex Positive

**nd = 1.83400, νd = 37.2. Glass: 834372 lanthanum-flint coordinate class (spectral surrogate: OHARA S-LAH60). f = +86.332 mm.**

L21 is the final positive element and completes g5C. The isolated g5C subassembly EFL is +58.935 mm, consistent with the patent's positive rear-unit requirement.

The rear spacing after r41 is not a patent movement row. The data file uses a computed paraxial BFD at each zoom state so that the rounded source prescription terminates on the modeled infinity-focus image plane.

## Glass Identification and Selection

The patent gives `n` and `ν` values but does not name glass manufacturers. The data file therefore treats the patent coordinates as authoritative and stores catalog names only as spectral surrogates. The modeled `nC`, `nF`, `ng`, and `dPgF` values come from those surrogates and enable wavelength-dependent calculations; they are not source-published line indices and do not identify the production melt.

| Patent coordinate class | Spectral surrogate | Patent nd / νd | Elements | Modeled dPgF |
|---|---|---:|---|---:|
| 750353 | OHARA S-LAM7 | 1.74950 / 35.3 | L1 | +0.00267 |
| 497816 | OHARA S-FPL51 | 1.49700 / 81.5 | L2, L3, L10, L19 | +0.03187 |
| 847238 | OHARA S-TIH53 | 1.84666 / 23.8 | L4, L8, L12, L14, L16 | +0.01656 |
| 487702/704 | OHARA S-FSL5 | 1.48749 / 70.2 | L5, L7 | +0.00454 |
| 806409 | OHARA S-LAH53 | 1.80610 / 40.9 | L6 | -0.00655 |
| 713539 | OHARA S-LAL8 | 1.71299 / 53.9 | L9 | -0.00782 |
| 667330 | OHARA S-TIM39 legacy | 1.66680 / 33.0 | L11 | +0.00685 |
| 773496 | OHARA S-LAH66 | 1.77250 / 49.6 | L13 | -0.00803 |
| 603607 | OHARA S-BSM14 | 1.60311 / 60.6 | L15 | +0.00038 |
| 694532 | OHARA L-LAL13 | 1.69350 / 53.2 | L17, L18 | -0.00600 |
| 834372 | OHARA S-LAH60 | 1.83400 / 37.2 | L20, L21 | -0.00369 |

An independent catalog comparison gives maximum coordinate residuals of `|Δnd| = 0.00001` and `|Δνd| < 0.06`, which are sufficiently small for the stated surrogate purpose. The unusually high-Abbe 1.49700/81.5 coordinate is repeated in four positive elements across g1, g4, and g5C, while the very low-Abbe 1.84666/23.8 coordinate appears repeatedly in opposing positive and negative roles. That wide dispersion spread provides substantial chromatic design freedom throughout the zoom rather than concentrating correction in a single doublet.

All 21 elements now resolve to coordinate-compatible catalog Sellmeier curves. The discontinued S-TIM39 entry uses the manufacturer's formula-2 coefficients from [OHARA_260701.AGF](https://oharacorp.com/wp-content/uploads/catalogs/OHARA_260701_CATALOG.zip); its catalog Abbe number is 33.054985, while the patent's 33.0 is retained.

The stored `dPgF` values are derived from the surrogate line indices using the SCHOTT normal-line definition of ΔPg,F. Because those line indices are modeled rather than patent-published, the analysis does not claim that the production lens uses the named OHARA glasses, nor does it claim apochromatic correction from the surrogate assignments alone.

## Focus Mechanism

The patent states that focusing is associated with axial movement of the second lens unit `g2` (r7-r10). It specifically presents this arrangement as a way to reduce the size and moving mass of the focus unit compared with front-unit focusing in a large-aperture zoom. The source also discusses a close range of about 1.5 m in explaining the concept, but Numerical Example 1 does not publish a corresponding close-focus spacing table.

The data model therefore has focus status **NO_INTERNAL_RECONSTRUCTION**. Every focus endpoint stored in `var` is identical to the published infinity-focus state. Canon's production closest focusing distance of 1.4 m is retained only as product metadata and does not drive a synthetic g2 position.

Because Numerical Example 1 provides no close-focus spacing table, no internal focus travel, magnification curve, or close-focus aberration result is authored from the patent prescription.

## Chromatic Correction Strategy

Chromatic correction is distributed through most of the system. The most conspicuous source-level pattern is the repeated use of high-Abbe positive glasses: L2, L3, L10, and L19 all use the 1.49700/81.5 coordinate, and L5/L7 use 1.48749/70.2. These are opposed by several much lower-Abbe high-index elements, especially the 1.84666/23.8 coordinate used in L4, L8, L12, L14, and L16.

The two cemented groups illustrate different uses of this contrast. D1 combines a high-Abbe negative L7 with a low-Abbe positive L8 and has only weak positive net power despite the much stronger standalone powers of its members. D2 combines low-Abbe positive L16 with intermediate-Abbe negative L17 and is negative as a cemented pair before the additional negative L18 is added to g5B.

The data's surrogate line indices and `dPgF` values permit more realistic spectral tracing than an Abbe-only model, but the spectral layer must be interpreted as catalog-backed modeling. The patent itself does not publish `nC`, `nF`, `ng`, `PgF`, or supplier names for Numerical Example 1. Consequently the analysis does not assign Canon UD branding to specific patent elements and does not use the surrogate data to assert an APO classification.

## Image Stabilization

The rear relay is the defining feature of the patent. It is arranged positive-negative-positive as g5A-g5B-g5C, with the negative g5B unit moving perpendicular to the optical axis to displace the image and correct vibration blur. The surrounding positive groups remain centered in the patent's IS concept.

The prescription implements the patent's preferred g5B composition directly: one positive lens (L16) and two negative lenses (L17 and L18). L16 and L17 form a cemented negative pair, and L18 adds further negative power. Independently isolated, g5B has EFL -29.920 mm. The patent states that relatively strong negative power raises stabilization sensitivity, while g5A reduces the beam diameter entering the IS unit and g5C corrects aberration associated with the negative relay section.

The data file models only the centered reference prescription. It does not add an IS decenter coordinate or attempt to reproduce the patent's illustrated stabilization states. Accordingly, no quantitative transverse travel, image-shift sensitivity, or decentered aberration result is claimed here.

## Conditional Expressions

The patent constrains the rear relay with three power-ratio conditions and one back-focus condition. The independent calculations below use isolated g5A/g5B/g5C subassembly powers from the final data file, the recomputed wide-state EFL, and the normalized r41-to-image BFD at the tele state.

| Condition | Patent requirement | Computed | Patent Table 5 | Result |
|---|---|---:|---:|---|
| (1) `f5A/f5B` | `-2.5 < x < -1.0` | -1.738290 | -1.738 | Pass |
| (2) `f5C/f5B` | `-2.5 < x < -1.0` | -1.969759 | -1.970 | Pass |
| (3) `f5B/fw` | `-1.0 < x < -0.1` | -0.412700 | -0.413 | Pass |
| (4) `Bf/ft` | `x > 0.25` | 0.310454 | 0.310 | Pass |

For these ratios the isolated subassembly focal lengths are `f5A = +52.0093 mm`, `f5B = -29.9198 mm`, and `f5C = +58.9348 mm`. The computed values agree with Table 5 to the published three-decimal precision. Condition (4) uses the patent's definition of back focus: the distance from the last image-side lens vertex to the image plane.

## Verification Summary

The final data file was independently checked by sequential reduced-angle y-ν tracing and by separate ABCD matrix multiplication. The two first-order calculations agree exactly at the reported numerical precision. Recomputed EFL/BFD pairs are 72.497675/60.519267 mm, 99.494745/60.523196 mm, and 194.979940/60.532373 mm for the three published zoom states.

The patent gives the stop station but not its clear radius. The modeled stop semi-diameter is therefore an inference: 17.778959714 mm, calibrated once at the wide state to the patent's f/2.9. Keeping that same physical stop gives modeled f-numbers of 2.900000, 2.900088, and 2.900295 across the three states. Canon's marketed f/2.8 remains separate product metadata.

Numerical Example 1 also omits clear semi-diameters. The surface `sd` values are modeling apertures derived from the calibrated marginal bundle, full-frame chief-ray containment, off-axis pupil samples, the patent section drawing, and the production barrel envelope. A 600 dpi audit of Figure 1 on local PDF page 10 refined the first element to a 34.0 mm common rim and the final element to 19.5 mm, following the optical outlines rather than the group brackets. The remaining apertures retain their ray-envelope and geometry constraints. Surface and image-circle audits pass after these changes. The data therefore uses `gapSagFrac = 0.95`; this is a geometry-policy requirement, not a layout adjustment used to conceal invalid surfaces.

The paraxial Petzval sum, evaluated surface by surface as `φ/(n·n′)`, is +0.001285839 mm⁻¹, with reciprocal +777.702 mm. This is a first-order Petzval quantity rather than a measured field-curvature radius.

Two source/model normalizations must remain explicit. First, the Japanese Numerical Example 1 table prints r23 and r24 as `0.000`; the same-family English table and the optical drawing establish both as planes, so the data encodes them as effectively infinite radius. Second, the rear D41 spacing is derived independently at each rounded zoom state to terminate the model on the paraxial infinity-focus image plane; it is not a patent-published variable-spacing row.

No uniform scaling was applied, so all patent radii and published axial spacings remain in the source millimeter scale. No aspheric coefficient transformation is applicable. No sensor cover glass, filter, inactive dummy plane, or mechanical part is present in the selected numerical prescription, so no omitted-plate air-equivalent correction was required.

## Sources / References

- **JP2002162564A**, Canon Inc., Akira Harada, *ズームレンズ及びそれを用いた光学機器*, Numerical Example 1. The uploaded Japanese publication is the transcription authority; page 6 contains the prescription and Table 1, page 9 contains Table 5, and the lens sections/aberration figures follow on pages 10-16.
- **US6646804B2**, *Zoom lens system and optical apparatus using the same*. Same-family English publication used only for translation and legibility cross-checks, including the g1-g5C architecture, focus/IS descriptions, conditions, and plane notation for r23/r24: https://patents.google.com/patent/US6646804B2/en
- **Canon Camera Museum**, *EF70-200mm f/2.8L IS USM*. Production identity and marketed specifications, including September 2001 release, 23 elements / 18 groups, eight diaphragm blades, f/32 minimum aperture, 1.4 m closest focusing distance, and 0.17× maximum magnification: https://global.canon/en/c-museum/product/ef365.html
- **Canon U.S.A. Support**, *EF 70-200mm f/2.8L IS USM*. Manufacturer specification identifying the production lens as an inner-focusing USM design: https://www.usa.canon.com/support/p/ef-70-200mm-f-2-8l-is-usm
- **OHARA INC.**, optical-glass catalog and comparison resources. Used only to construct the data file's coordinate-compatible spectral surrogates; the patent does not identify the production glass supplier: https://www.ohara-inc.co.jp/en/product/01000/ and https://www.ohara-inc.co.jp/en/product/01002/
- **SCHOTT Advanced Optics**, TIE-29 *Refractive Index and Dispersion*. Source for the relative-partial-dispersion and ΔPg,F normal-line definitions used for modeled `dPgF`: https://www.schott.com/shop/medias/tie-29-refractive-index-and-dispersion-eng.pdf
