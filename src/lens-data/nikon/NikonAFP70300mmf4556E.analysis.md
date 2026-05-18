# Nikon AF-P NIKKOR 70-300mm f/4.5-5.6E ED VR — Patent Example 1 Optical Analysis

## Patent Reference and Design Identification

**Patent:** US 2019/0353880 A1
**Inventor:** Kosuke Machida
**Applicant:** Nikon Corporation
**Filed:** November 21, 2016 (PCT filing)
**Published:** November 21, 2019
**Title:** Zoom optical system, optical apparatus, imaging apparatus and method for manufacturing the zoom optical system
**Embodiment analyzed:** First Example / Example 1, Fig. 1 and Table 1

The working patent is **US 2019/0353880 A1**, "Zoom optical system, optical apparatus, imaging apparatus and method for manufacturing the zoom optical system." The applicant is Nikon Corporation and the named inventor is Kosuke Machida. The PCT filing date is 21 November 2016, and the United States publication date is 21 November 2019. The numerical embodiment transcribed here is **First Example / Example 1**, shown in Fig. 1 and Table 1 of the patent.

The production lens identified with this embodiment is the **AF-P NIKKOR 70-300mm f/4.5-5.6E ED VR**, announced by Nikon on 11 July 2017. The identification rests on convergent evidence rather than a single matching parameter:

1. Nikon's published production specification gives 18 elements in 14 groups, including one ED glass element. Example 1 has 18 physical glass elements and 14 production-style air-separated groups when cemented pairs are counted as single groups.
2. Nikon specifies a 70-300 mm full-frame telephoto zoom at f/4.5-5.6. Example 1 recomputes as 72.099-292.007 mm at patent design FNO values of f/4.49, f/4.86, and f/5.88 for wide, middle, and telephoto states.
3. Nikon describes an AF-P stepping-motor lens with internal focusing and VR. Example 1 focuses by moving a compact rear negative group and stabilizes by laterally shifting a cemented positive group near the stop.
4. Nikon's product material identifies one ED element. In Example 1, the most plausible counterpart is L13, the very-low-dispersion FK-class positive member of the front cemented pair with νd = 81.61. L11 and L33 are also low-dispersion FK-family catalog matches, but their νd = 70.31 values do not align as strongly with Nikon's single ED-feature count.
5. The patent filing precedes the product release and addresses the same product-level priorities: a compact telephoto zoom, reduced focusing-group mass, quiet/high-speed AF, optical blur correction, and chromatic-aberration suppression.

No lens-specific first-party designer interview was used for this identification. The production-link claims therefore rest on the patent prescription, Nikon's official product page, Nikon's July 2017 release, and Hikari/Nikon optical-glass catalog data.

## Optical Architecture

Example 1 is a five-group telephoto zoom with the power distribution:

**G1 positive / G2 negative / G3 positive / G4 negative / G5 positive**

In the patent's broader terminology, G1 is the front lens group GFS, G2 is the negative M1 group, G3 is the positive M2 group, and G4 is the negative RN focusing group. G5 is a fixed image-side relay group placed behind the RN group. Paragraphs ¶0124-¶0130 describe the Example 1 group constitution, and ¶0131 identifies G4 as the group moved for focusing.

The design is a compact long telephoto zoom at its telephoto end. Table 1 gives TL = 245.82 mm and f = 292.0 mm at telephoto, so TL/f = 0.842. That is a true telephoto arrangement by the usual TL/EFL < 1 criterion at the long end. The wide setting is not telephoto by that strict ratio; the telephoto designation applies to the long-end packaging.

G1 supplies the front positive collector and the first achromatizing cemented pair. G2 is the principal negative variator. G3 is the main positive compensator and contains the aperture stop, the vibration-reduction cemented group, and the dense achromatizing pairs around the stop. G4 is the compact rear negative focusing group. G5 restores image-side convergence, controls coma and field curvature after focusing, and sets the back-focus condition required by the F-mount camera body.

The first-order focal lengths independently recalculated from Table 1 are:

| Group | Patent role | Computed focal length |
|---|---|---:|
| G1 | Front positive group / GFS | +145.319 mm |
| G2 | Negative variator / GM1 | -29.546 mm |
| G3 | Positive M2 group / GM2 | +38.298 mm |
| G4 | Negative rear focus group / GRN | -48.034 mm |
| G5 | Positive image-side relay | +324.469 mm |

The Petzval sum, recomputed surface by surface as $\sum \Phi/(n n')$, is **+9.50 × 10⁻⁴ mm⁻¹**. The surface-by-surface calculation is used here rather than a thin-element approximation because several powers are cemented-interface powers inside multi-element groups.

## Element-by-Element Analysis

The element focal lengths below are **standalone in-air thick-lens values** calculated from each physical element's two bounding radii, center thickness, and d-line index. For cemented elements, these focal lengths describe the element's individual sign and relative strength; the in-situ power of the cemented assembly differs because the second surface of the front element is not an air interface.

### G1 — Front Positive Collector and Front Achromat

#### L11 — Positive convexo-plano collector

nd = 1.48749, νd = 70.31. Glass: J-FK5 (Hikari). f = +224.6 mm.

L11 is a weak positive front collector. Its plano rear surface limits unnecessary surface power at the first air gap, while the FK-family low-dispersion glass limits axial color contribution from the large-diameter front element. Because this element occupies the largest mechanical aperture, weak curvature also helps keep the front cell compatible with the production 67 mm filter class.

L11 works with the L12/L13 cemented pair to establish the front group's net focal length of +145.319 mm. It is not treated as the marketed ED element; its role is a low-dispersion positive collector.

#### L12 — Negative meniscus in the front cemented doublet

nd = 1.62004, νd = 36.40. Glass: J-F2 (Hikari). f = -160.4 mm.

L12 is the negative flint member of the first cemented doublet. In isolation it is a negative meniscus, but in the front group it is bonded directly to L13. Its flint dispersion supplies the negative chromatic component needed to balance the low-dispersion positive member.

The cemented interface between L12 and L13 has R = 49.8109 mm. That strong cemented surface lets the design introduce chromatic correction without adding an extra air gap near the front of the lens, where ray heights are large and mechanical diameter is expensive.

#### L13 — Positive meniscus, very-low-dispersion member of the front doublet

nd = 1.49700, νd = 81.61. Glass: J-FK01A class (Hikari) — probable ED counterpart. f = +114.3 mm.

L13 is the strongest match to Nikon's one-ED-element production statement. Its νd = 81.61 is the most extreme low-dispersion value in Example 1, and it is placed in the front achromat where low dispersion has high leverage over longitudinal color before the beam enters the negative variator.

The Hikari name is treated as a catalog-class identification rather than a guaranteed proprietary melt name. The patent gives nd and νd but not vendor glass names.

### G2 — Negative Variator Group

#### L21 — Negative meniscus at the entrance of the variator

nd = 1.69680, νd = 55.52. Glass: J-LAK14 (Hikari). f = -55.0 mm.

L21 begins the negative variator group with a high-index lanthanum crown. Its position immediately behind G1 lets it expand the beam and establish the zooming leverage needed for a 70-300 mm class range.

The high index keeps the negative power compact. Its moderate Abbe number prevents this first variator element from becoming the dominant color source; stronger chromatic work is distributed between L22-L24 and the front cemented achromat.

#### L22 — Positive biconvex dense-flint compensator within G2

nd = 1.78472, νd = 25.64. Glass: J-SF11 (Hikari). f = +33.7 mm.

L22 is a positive biconvex element made from very high-dispersion dense flint. A positive element inside a net-negative variator is not contradictory; it provides internal aberration balancing and prevents G2 from becoming a simple stack of negative lenses.

The strong air spaces on both sides of L22 form part of the variator's air-lens structure. In the data file, the L21-L22 clear apertures are deliberately reduced relative to a fully unvignetted paraxial field envelope to satisfy the real 67 mm front-filter class and the renderer's sag-clearance constraints.

#### L23 — Negative biconcave lanthanum dense-flint element

nd = 1.77250, νd = 49.62. Glass: J-LASF016 (Hikari). f = -41.0 mm.

L23 supplies a strong negative component in G2. Although the catalog family name contains "lanthanum," νd = 49.62 places it on the flint side of the crown/flint divide. Its job is to deepen the variator's negative power while keeping the group short.

The biconcave form distributes negative power across two surfaces. This reduces sensitivity compared with concentrating the same power in a single steep meniscus.

#### L24 — Final negative meniscus of G2

nd = 1.85026, νd = 32.35. Glass: J-LASF021 (Hikari). f = -46.7 mm.

L24 is a high-index, high-dispersion negative meniscus at the exit of the variator group. It finishes the net-negative G2 power and conditions the beam for G3.

Because L24 sits just before variable spacing d13, it strongly influences the zoom-dependent ray height entering the positive M2 group. Its high index allows strong negative bending without extremely tight radius values.

### G3 — Positive Compensator, VR Group, Stop Region, and Rear Positive Relay

#### L31 — Negative member of the vibration-reduction cemented group

nd = 1.80100, νd = 34.92. Glass: J-LAF016 (Hikari). f = -66.9 mm.

L31 is the negative member of the patent's A lens group, which is also the vibration-reduction group. The patent's conditional expressions use this negative element's refractive index and Abbe number relative to L32.

In the cemented L31/L32 pair, L31 reduces the chromatic and coma burden that would result if the VR group were a single positive moving element. This matters because the pair is shifted laterally for blur correction; residual chromatic power or asymmetric aberration in that moving group would appear as decentering color or decentering coma.

#### L32 — Positive member of the vibration-reduction cemented group

nd = 1.64000, νd = 60.20. Glass: J-LAK01 (Hikari). f = +33.8 mm.

L32 is the positive crown partner of L31. The cemented pair recomputes to **+67.213 mm**, giving fvr/fTM2 = 1.755 against the G3/M2 group focal length of +38.298 mm. This is the patent's central condition (1).

The pair's n-ratio is 1.098 and its Abbe ratio is 0.580, satisfying conditions (2) and (3). The design therefore treats the VR group as an achromatized positive module rather than a single decentered positive lens.

#### L33 — Positive biconvex member of the pre-stop cemented pair

nd = 1.48749, νd = 70.31. Glass: J-FK5 (Hikari). f = +39.9 mm.

L33 is a positive low-dispersion FK-family element in a cemented pair with L34. Its position before the aperture stop and after the VR pair makes it part of the main positive relay within G3.

This element is not counted as the marketed ED element in this analysis. It is a low-dispersion positive partner whose role is stop-region color and spherical-aberration control.

#### L34 — Negative biconcave member of the L33/L34 pair

nd = 1.80610, νd = 40.97. Glass: J-LASF03 (Hikari). f = -47.7 mm.

L34 is the high-index, moderate-dispersion flint partner to L33. In the cemented pair, it supplies the negative chromatic component needed to keep the pre-stop positive cell from behaving like an uncontrolled positive singlet.

The L33/L34 pair recomputes to **+186.143 mm**, so it is a weak positive achromatizing and aberration-shaping cell rather than the dominant power source of G3.

#### Aperture stop S

The aperture stop is patent surface 20. In the data file it is labeled **STO** as required by the project schema. It is placed after the L33/L34 pair and before the L35/L36 pair.

This central placement lets the designer split aberration correction around the stop: L31/L32 and L33/L34 act on the object side, while L35/L36 and L37 shape the image-side pupil, field behavior, and downstream focus-group sensitivity.

#### L35 — Negative meniscus in the post-stop cemented pair

nd = 1.83400, νd = 37.18. Glass: J-LASF010 (Hikari). f = -39.6 mm.

L35 is the negative high-index member of the post-stop cemented pair. The patent describes the L35/L36 cell as a negative cemented lens; recomputation gives **-392.704 mm**, which is weakly negative as an assembly.

Its function is not large negative power. It fine-tunes spherical aberration, coma, and chromatic residuals after the stop while keeping the post-stop section compact.

#### L36 — Positive biconvex crown in the post-stop pair

nd = 1.51680, νd = 63.88. Glass: J-BK7A / BK7-family class (Hikari). f = +44.9 mm.

L36 is a positive borosilicate-crown partner cemented to L35. The BK7-family class gives a moderate-index, high-Abbe positive member against a dense-flint negative member.

The pair is optically well placed for cleanup after the stop and before the final positive G3 element. Its weak net negative power prevents it from dominating the group focal length.

#### L37 — Final positive biconvex element of G3

nd = 1.80100, νd = 34.92. Glass: J-LAF016 (Hikari). f = +55.5 mm.

L37 is a high-index positive biconvex element at the rear of G3. It completes the positive M2 group and delivers the correct ray geometry into the rear negative focus group.

Because it sits immediately before variable gap d25, L37 strongly affects the focus group's sensitivity. Its high index provides convergence in a short axial space, while its flint-like Abbe number is balanced by the surrounding cemented cells.

### G4 — Negative Rear Focusing Group

#### L41 — Positive meniscus in the moving RN group

nd = 1.80518, νd = 25.45. Glass: J-SF6 (Hikari). f = +102.6 mm.

L41 is the positive meniscus member of the moving rear negative group. It is a dense flint with very low Abbe number, but its standalone optical sign is positive. In combination with L42, the two-element group is negative with a recomputed focal length of **-48.034 mm**.

The positive member moderates the aberrations of the strong negative L42. A compact single negative focus lens would impose greater coma, breathing, and chromatic sensitivity.

#### L42 — Negative biconcave dominant member of the moving RN group

nd = 1.77250, νd = 49.62. Glass: J-LASF016 (Hikari). f = -30.9 mm.

L42 is the dominant negative member of the focusing group. Paragraph ¶0131 states that focusing from a long distant object to a short distant object is performed by moving the fourth lens group G4 in the image-surface direction. Since Example 1 G4 contains only L41 and L42, these two elements are the complete focusing group.

This small moving group is consistent with Nikon's AF-P stepping-motor production emphasis: low moving mass supports fast and quiet focus without moving the front group or the full optical unit.

### G5 — Positive Rear Relay and Field Group

#### L51 — Negative meniscus behind the focusing group

nd = 1.62004, νd = 36.40. Glass: J-F2 (Hikari). f = -100.9 mm.

L51 is a negative meniscus immediately behind the RN focusing group. The patent separately prefers a negative meniscus with a concave object-side surface adjacent to the image side of the RN group; in Example 1, this is L51.

Because L51 is fixed while G4 moves, it helps stabilize coma and field curvature over focus travel.

#### L52 — Final positive biconvex element

nd = 1.67003, νd = 47.14. Glass: J-BAF10 (Hikari). f = +79.7 mm.

L52 is the final positive relay and field element. It balances L51 according to condition (6), where (-fN)/fP = 1.266 for the strongest adjacent negative and positive elements behind the RN group.

This final element restores image-side convergence, contributes to field and Petzval balancing, and helps set the back-focus distance. Its νd = 47.14 places it on the flint side of the crown/flint boundary despite the barium-family name.

## Glass Identification and Selection

The patent gives nd and νd but does not name proprietary glass types. The names below are Hikari/Nikon J-series catalog matches or class matches. They should be read as catalog identifications for data annotation, not as proof of the exact production melts.

| Hikari catalog glass | nd | νd | Elements | Optical use |
|---|---:|---:|---|---|
| J-FK5 | 1.48749 | 70.31 | L11, L33 | Low-dispersion FK crown used as a weak collector and pre-stop achromat partner. |
| J-F2 | 1.62004 | 36.40 | L12, L51 | Flint used for front achromat and rear relay negative power. |
| J-FK01A class | 1.49700 | 81.61 | L13 | Very-low-dispersion FK-class glass; probable counterpart to Nikon's one ED element. |
| J-LAK14 | 1.69680 | 55.52 | L21 | High-index lanthanum crown at the variator entrance. |
| J-SF11 | 1.78472 | 25.64 | L22 | Very high-dispersion dense flint positive element inside G2. |
| J-LASF016 | 1.77250 | 49.62 | L23, L42 | Dense lanthanum flint; νd below 50, so treated as flint. |
| J-LASF021 | 1.85026 | 32.35 | L24 | High-index, high-dispersion negative variator element. |
| J-LAF016 | 1.80100 | 34.92 | L31, L37 | Lanthanum flint in the VR doublet and rear of G3. |
| J-LAK01 | 1.64000 | 60.20 | L32 | Lanthanum crown; positive VR-doublet partner. |
| J-LASF03 | 1.80610 | 40.97 | L34 | Dense lanthanum flint in the pre-stop cemented pair. |
| J-LASF010 | 1.83400 | 37.18 | L35 | High-index lanthanum flint in the post-stop cemented pair. |
| J-BK7A / BK7-family class | 1.51680 | 63.88 | L36 | Borosilicate crown partner in the post-stop achromat. |
| J-SF6 | 1.80518 | 25.45 | L41 | Dense flint positive meniscus in the moving focus group. |
| J-BAF10 | 1.67003 | 47.14 | L52 | Barium flint final relay element. |

The chromatic strategy is not based on a large number of ED elements. Nikon publishes one ED element for the production lens, and the patent's most plausible counterpart is L13. The rest of the correction is distributed across crown/flint pairings: L12/L13 in the front group, L31/L32 in the VR group, L33/L34 and L35/L36 around the stop, and L51/L52 behind the focus group.

## Focus Mechanism

Example 1 uses **rear internal focusing**. G4, the negative RN group containing L41 and L42, moves toward the image surface when focusing from infinity to the patent's short-distance state. The internal spacing inside G4 remains fixed, so the pair translates as a unit.

The variable-spacing table gives equal and opposite changes in d25 and d29, confirming unit translation of G4:

| Zoom state | d25 infinity | d25 short distance | d29 infinity | d29 short distance | G4 imageward travel |
|---|---:|---:|---:|---:|---:|
| Wide | 2.180 | 2.837 | 21.418 | 20.761 | 0.657 mm |
| Middle | 3.742 | 4.562 | 19.856 | 19.036 | 0.820 mm |
| Telephoto | 3.895 | 5.614 | 19.703 | 17.984 | 1.719 mm |

This focus movement is not the same as the production lens's official minimum-focus specification. Nikon publishes a minimum focus distance of 1.2 m and a maximum reproduction ratio of 0.25x. The patent's short-distance state is an aberration-reporting conjugate; paraxial reconstruction gives β ≈ -0.033 and object distances, measured from the first surface, of approximately 2.10 m, 2.91 m, and 8.55 m for the wide, middle, and telephoto patent short-distance states.

## Aspherical Surfaces

Example 1 is an **all-spherical prescription**. Table 1 lists spherical radii, thicknesses, d-line indices, Abbe numbers, a plane aperture stop, and variable spacings. It provides no aspherical surface labels, no conic constants, and no even-order aspherical coefficients.

The patent contains generic language allowing spherical, plane, or aspherical surfaces in the broader invention. That generic language does not instantiate an asphere in Example 1. Nikon's product page identifies an ED element but does not advertise an aspherical element. The data file therefore sets `asph: {}`.

## Image Stabilization

The vibration-reduction group is the cemented L31/L32 pair at the front of G3. Paragraph ¶0132 states that image-position displacement from camera shake is corrected by moving the positive cemented lens consisting of L31 and L32 in a direction orthogonal to the optical axis. This group is the patent's A lens group.

The recomputed focal length of L31/L32 is **+67.213 mm**. The recomputed M2/G3 focal length is **+38.298 mm**, giving fvr/fTM2 = 1.755 and satisfying condition (1). Nikon's production release describes VR with NORMAL and SPORT modes and a 4.5-stop CIPA-based claim at the telephoto setting. The patent does not use Nikon's product-mode terminology, but it identifies the optical group that is decentered for blur correction.

The patent also gives example decentering calculations. At the wide setting, f = 72.1 mm and the vibration-proof coefficient is 1.65, so correcting 0.30° of rotational blur requires 0.23 mm of lateral VR-group movement. At telephoto, f = 292.0 mm and the coefficient is 2.10, so correcting 0.20° requires 0.49 mm. These values are consistent with a compact cemented VR group placed in the positive M2 group.

## Conditional Expressions

The patent's principal conditions were recalculated from the Table 1 prescription. Rounded values match the patent's corresponding-value table.

| No. | Expression | Patent / computed value | Stated range | Result |
|---|---:|---:|---:|---|
| (1) | `fvr / fTM2` | 1.755 | 1.10 < value < 2.00 | Pass |
| (2) | `nvrN / nvrP` | 1.098 | 1.00 < value < 1.25 | Pass |
| (3) | `νvrN / νvrP` | 0.580 | 0.30 < value < 0.90 | Pass |
| (4) | `(-fTM1) / f1` | 0.203 | 0.15 < value < 0.35 | Pass |
| (5) | `fTM2 / f1` | 0.264 | 0.20 < value < 0.40 | Pass |
| (6) | `(-fN) / fP` | 1.266 | 0.70 < value < 2.00 | Pass |
| (7) | `f1 / fw` | 2.016 | 1.80 < value < 3.50 | Pass |
| (8) | `f1 / (-fTM1)` | 4.918 | 3.70 < value < 5.00 | Pass |
| (9) | `f1 / fTM2` | 3.794 | 3.20 < value < 5.00 | Pass |

Conditions (1)-(3) govern the positive cemented VR group. Condition (6) governs the negative-positive rear relay immediately behind the moving RN focus group. Together they show that the patent is primarily about a telephoto zoom with a light rear focusing group and a stabilized positive cemented group that can be shifted without excessive decentering aberration.

## Data-File Transcription Notes

The `.data.ts` prescription transcribes Table 1 at the patent scale without focal-length scaling. The zoom positions are the patent design focal lengths **72.1, 100.0, and 292.0 mm** rather than rounded production markings. The marketed focal-length range is stored separately as 70-300 mm.

The patent lists d5, d13, d25, and d29 in the variable-spacing table. The data file also treats surface 33 / BF as a zoom-only variable because Table 1 gives BF = 39.12, 46.45, and 67.12 mm at the W/M/T infinity states. The short-distance focus table does not list separate BF values, so each short-distance state uses the same BF as its corresponding infinity zoom state while d25 and d29 exchange focus travel.

The patent omits clear-aperture semi-diameters. The data file therefore uses inferred SDs. A fully unvignetted paraxial chief-plus-marginal field envelope would exceed the production 67 mm filter class at some zoom states. The stored SDs instead reflect a practical rendered mechanical aperture set: front SDs are constrained by the filter class, and several internal SDs are reduced to satisfy edge-thickness and signed cross-gap sag-intrusion checks. These SDs are not patent-published mechanical dimensions.

The aperture-stop semi-diameter used for the patent design-state FNOs is approximately 11.2 mm. This reproduces the Table 1 FNO sequence to rounding when combined with the W/M/T pupil magnification. The viewer-facing `nominalFno` field stores Nikon's marketed endpoint apertures, with the patent middle FNO retained as the middle interpolation value.

## Verification Summary

A paraxial y-ν ray trace was rerun from the Table 1 prescription. The computed effective focal lengths and back focal distances agree with the patent values to normal rounding precision:

| Zoom state | Patent f (mm) | Computed EFL (mm) | Patent BF (mm) | Computed BF (mm) |
|---|---:|---:|---:|---:|
| Wide | 72.1 | 72.099 | 39.12 | 39.118 |
| Middle | 100.0 | 99.997 | 46.45 | 46.451 |
| Telephoto | 292.0 | 292.007 | 67.12 | 67.123 |

Additional independent checks:

- Group focal lengths recompute as +145.319, -29.546, +38.298, -48.034, and +324.469 mm for G1-G5.
- The A/VR group L31/L32 recomputes as +67.213 mm, giving fvr/fTM2 = 1.755.
- The focus movement is internally consistent: d25 increases and d29 decreases by equal amounts at each zoom state.
- The surface-by-surface Petzval sum is +9.50 × 10⁻⁴ mm⁻¹.
- The data-file SD set passes edge-thickness, element SD-ratio, and signed cross-gap sag-intrusion checks under the project constraints used for this transcription.

## Sources / References

1. **US 2019/0353880 A1**, "Zoom optical system, optical apparatus, imaging apparatus and method for manufacturing the zoom optical system," Nikon Corporation, inventor Kosuke Machida. Primary source for Example 1 prescription, group descriptions, focus and VR mechanisms, and conditional expressions.
2. **Nikon Global product page**, "AF-P NIKKOR 70-300mm f/4.5-5.6E ED VR." Source for production specifications: 70-300 mm, f/4.5-5.6, 18 elements in 14 groups including one ED glass element, IF, VR, STM, minimum focus distance 1.2 m, maximum reproduction ratio 0.25x, 67 mm filter thread, rounded 9-blade diaphragm, and 680 g mass.
3. **Nikon Corporation release, 11 July 2017**, "Nikon releases the AF-P NIKKOR 70-300mm f/4.5-5.6E ED VR." Source for release timing, stepping-motor emphasis, VR 4.5-stop claim, SPORT VR mode, dust/drip resistance statement, ED-element statement, close-focus statement, and electromagnetic diaphragm statement.
4. **Hikari Glass Co., Ltd. / Nikon optical-glass catalog, 2023**, Optical Glass (J-series). Source for glass-type and class matches to the patent's nd/νd pairs.
