## Patent Reference and Design Identification

**Patent:** US 2022/0011542 A1\
**Application Number:** 17/365,917\
**Filed:** July 1, 2021\
**Priority:** JP 2020-119264, July 10, 2020\
**Published:** January 13, 2022\
**Inventor:** Hiroki Saito\
**Applicant / Assignee:** FUJIFILM Corporation\
**Title:** *Imaging Lens and Imaging Apparatus*\
**Embodiment analyzed:** Example 1

The prescription transcribed here is Example 1 of US 2022/0011542 A1. The patent defines a three-lens-group system in which G1 and G2 have positive refractive power, G3 has negative refractive power, and only G2 moves during focusing (¶0077). Example 1 contains 15 physical lens elements arranged in nine air-separated groups, with five aspherical surfaces on three elements (Tables 1–3; ¶¶0078–0086).

The correlation with the production FUJINON XF18mmF1.4 R LM WR is strong but is not manufacturer-confirmed. The identification rests on several convergent points:

1. The patent example and the production lens both have 15 elements in nine groups. FUJIFILM also specifies three aspherical elements for the production lens.
2. Example 1 has six elements in the moving G2 focus group, L21–L26. FUJIFILM states that the production lens uses a linear motor to drive all six focusing elements as one.
3. The patent gives a 17.90 mm focal length and FNo 1.44 at infinity, while the marketed lens is 18 mm f/1.4.
4. The patent maximum image height is 14.2 mm, corresponding to a 28.4 mm image diameter, consistent with the APS-C format used by the X system.
5. For the patent's 110 mm object-distance state, the source physical first-surface-to-image track including PP is 91.0641 mm, so the raw object-to-Sim distance is 201.0641 mm. With PP reduced to its air equivalent (t/n), the first-surface-to-image track is 90.0930557 mm, giving 200.0931 mm from the source object plane to the paraxially equivalent image plane. That air-equivalent value is consistent, to the precision of the published prescription, with FUJIFILM's 200 mm minimum focus distance measured from the focal plane.
6. The independently traced close-state paraxial magnification is -0.14617, close in magnitude to the marketed 0.15× maximum magnification.
7. The patent's July 2020 priority date precedes the April 2021 product announcement and planned May 2021 release.

One difference remains visible rather than being reconciled away: Table 2 gives a 78.6° full angle for Example 1 at infinity, whereas FUJIFILM specifies a 76.5° angle of view for the production lens. No located FUJIFILM source identifies US 2022/0011542 A1 as the production patent. The data file therefore treats the product attribution as a strong research correlation, not a manufacturer statement.

No dimensional scaling is applied. The modeled infinity effective focal length from the final prescription is 17.89926 mm, matching the patent's 17.90 mm value within the precision of the published table.

## Optical Architecture

Example 1 is most accurately described by the patent's own positive-positive-negative three-group architecture rather than by assigning a classical named archetype. G1 contains seven elements and the aperture stop, G2 contains six elements and is the sole moving focus group, and G3 is a fixed two-element rear group. The complete model contains 15 elements in nine air-separated groups.

Computed as isolated group segments in air, G1 has an effective focal length of +162.544 mm, G2 +32.500 mm, and G3 -443.635 mm. These are group powers of the implemented prescription, not statements that any one element independently produces the complete in-situ correction attributed to its group. The strongly positive G2 carries substantially more isolated paraxial power than the fixed front group, while the rear G3 is weakly negative.

The aperture stop follows L17 at the rear of G1. Its axial position is source-published, but its physical diameter is not: patent ¶0048 explicitly states that the stop shown in Figure 1 indicates position rather than size and shape. The modeled stop semi-diameter of 10.73762 mm is therefore a calibration to the published infinity FNo 1.44. It is not a measured or patent-tabulated diaphragm radius.

The patent also places a parallel optical member PP between the last lens and the image plane (¶0046); it represents filters and/or cover glass and has no refractive power. The data file models PP as printed in Table 1 in `rearPlates`: surface 25 keeps the 8.4141 mm gap to the plate, followed by the 2.8500 mm plate (nd 1.51680, νd 64.20) and the 1.1000 mm gap to Sim. Every analysis traces the plate, but it is not drawn as an element. Its paraxial air equivalent is 11.3930557 mm from surface 25 to the image plane.

The physical first-surface-to-image track, including PP, is 91.0641 mm at infinity (90.0931 mm with PP reduced to its air equivalent). The computed air-equivalent back focal distance from the last lens vertex is 11.3918 mm. Under the project terminology rules, the design is therefore not labeled “retrofocus” merely because it is a wide-angle lens, and no telephoto classification is assigned.

The patent publishes no clear or semi-diameters. The data file consequently uses modeled semi-diameters constrained by the exact meridional ray envelope and the optical section. For those modeled apertures, the smallest computed element edge thickness is 0.1419 mm, the largest actual rim-slope angle is 50.94°, and the largest positive shared-gap sag-intrusion fraction is 0.8909. Exact meridional containment checks cover the two published focus endpoints and three intermediate interpolation samples. These checks support the authored geometry but do not substitute for a production LensVisualizer render-diagnostics run.

## Element-by-Element Analysis

### L11 — negative meniscus, two aspherical surfaces

*nd = 1.58313, νd = 59.46. Glass: 583595 — crown class (supplier unresolved). Standalone f = -38.309 mm.*

L11 is the frontmost negative meniscus specified in ¶0078, with both surfaces 1A and 2A aspherical. Its location makes it the first major ray-bending member encountered by the wide field. The standalone focal length above is the thick-element power in air; it is not an in-situ focal contribution after coupling to the rest of G1. Because both surfaces are aspherical, their detailed role is better represented by the verified sag terms than by assigning a single aberration label from power sign alone.

### L12 — biconcave negative, first member of cemented triplet C1

*nd = 1.58313, νd = 59.46. Glass: 583595 — crown class (supplier unresolved). Standalone f = -26.853 mm.*

L12 begins the L12+L13+L14 cemented triplet described in ¶0078. Its front surface is concave toward the object, matching the structural configuration discussed in ¶0065. As part of a cemented assembly, its standalone negative power should not be interpreted independently of the following positive and negative members.

### L13 — biconvex positive, central member of cemented triplet C1

*nd = 1.89190, νd = 37.13. Glass: 892371 — high-index lanthanum-flint class (supplier unresolved). Standalone f = +17.367 mm.*

L13 is the strongest standalone positive element in C1 and shares cemented interfaces with L12 and L14. The three-element cemented set has a computed net effective focal length of +198.212 mm, so the assembly is only weakly positive despite the much stronger individual powers. The patent states generally that cemented groups in G1 are advantageous for chromatic correction (¶0071), but the model does not assign a unique chromatic contribution to L13 by itself.

### L14 — biconcave negative, rear member of cemented triplet C1

*nd = 1.48749, νd = 70.42. Glass: 487704 — low-dispersion crown class (supplier unresolved). Standalone f = -55.636 mm.*

L14 closes C1 with the highest Abbe number in the front group. Its large νd relative to L13 and L12 is part of the cemented triplet's dispersion contrast, but the patent supplies only d-line index and Abbe number; no partial-dispersion data are authored. No apochromatic or anomalous-dispersion claim follows from this coordinate alone.

### L15 — positive meniscus, aspherical front surface, first member of C2

*nd = 1.58313, νd = 59.46. Glass: 583595 — crown class (supplier unresolved). Standalone f = +62.747 mm.*

L15 is a positive meniscus convex toward the image side and carries aspherical surface 7A on its front. It is cemented directly to L16. The pair's computed net effective focal length is -40.629 mm, demonstrating why the positive standalone power of L15 should not be treated as the sign of the complete cemented component.

### L16 — negative meniscus, rear member of C2

*nd = 2.00069, νd = 25.43. Glass: 001254 — high-index flint class (supplier unresolved). Standalone f = -26.375 mm.*

L16 is the negative meniscus nearest the image side among the negative lenses in G1. Its νd = 25.43 is the quantity used by patent condition (6), and its strongly negative standalone power dominates the net sign of C2. The patent discusses this position as favorable for longitudinal chromatic correction (¶0057–¶0059); that statement is a patent design rationale, not a separately isolated element-aberration measurement.

### L17 — biconvex positive

*nd = 1.95375, νd = 32.32. Glass: 954323 — high-index lanthanum class (supplier unresolved). Standalone f = +28.620 mm.*

L17 is the final glass element in G1 and sits immediately before the stationary stop. Its positive standalone power completes a front group whose computed isolated effective focal length is +162.544 mm. The stop placement after G1 also reduces the number of components included in the moving focus group, consistent with the architecture described in ¶0066 and ¶0077.

### L21 — biconvex positive, first member of C3

*nd = 1.59282, νd = 68.62. Glass: 593686 — low-dispersion crown class (supplier unresolved). Standalone f = +21.078 mm.*

L21 begins the moving G2 group and is cemented to L22. The pair has a computed net effective focal length of +112.745 mm. FUJIFILM markets the production lens as containing one ED element, and the L21 coordinate is low-dispersion, but the patent does not name a glass supplier or identify an element as the production ED element. The data therefore does not promote that correlation to a source fact.

### L22 — plano-concave negative, rear member of C3

*nd = 1.85451, νd = 25.15. Glass: 855252 — dense-flint class (supplier unresolved). Standalone f = -23.171 mm.*

L22 follows L21 at a cemented interface and changes to a much lower-Abbe, higher-index material. The positive net power of C3 is the combined result of both elements and their shared surface. The design's chromatic interpretation should therefore be made at the cemented-pair level rather than by treating the glass coordinate as evidence for a specific correction term.

### L23 — plano-convex positive, first member of C4

*nd = 1.77250, νd = 49.61. Glass: 773496 — high-index moderate-dispersion class (supplier unresolved). Standalone f = +20.005 mm.*

L23 is the second positive member of G2 and is cemented to L24. Although L23 and L24 each have substantial standalone power, the computed C4 pair is nearly power-neutral, with net effective focal length -816.573 mm. That near cancellation is a paraxial property of the cemented set; it does not by itself identify which aberrations the pair corrects.

### L24 — negative meniscus, rear member of C4

*nd = 1.85451, νd = 25.15. Glass: 855252 — dense-flint class (supplier unresolved). Standalone f = -19.572 mm.*

L24 shares the same d-line coordinate as L22 and completes C4. The pair's weak negative net power contrasts with the much stronger standalone values of its two members. The patent permits cemented elements in G2 and states that such a cemented configuration can be advantageous in suppressing aberration generation (¶0072), but it does not isolate an aberration budget for L24.

### L25 — biconvex positive

*nd = 2.00272, νd = 19.32. Glass: 003193 — high-index high-dispersion class (supplier unresolved). Standalone f = +23.150 mm.*

L25 is the positive lens closest to the image side among the positive lenses in G2. Its νd = 19.32 is therefore the value used by patent condition (7). The element combines very high refractive index with low Abbe number, but no supplier-specific dispersion curve is authored, so only the patent's d-line/Abbe-level statements are supported.

### L26 — negative meniscus, two aspherical surfaces

*nd = 1.80610, νd = 40.73. Glass: 806407 — high-index moderate-dispersion class (supplier unresolved). Standalone f = -48.732 mm.*

L26 is the final element in the moving G2 group and the negative meniscus central to conditions (1)–(3). Its object-side and image-side surfaces are 21A and 22A, both aspherical. The patent specifically connects the shape of this image-side negative meniscus and the preceding air-lens relationship to field-curvature, spherical-aberration, and coma considerations (¶0052–¶0054). Those statements are patent rationale; the analysis does not decompose the finished lens's aberrations into element-by-element percentages.

### L31 — biconvex positive, first member of C5

*nd = 1.60300, νd = 65.46. Glass: 603655 — phosphate-crown class (supplier unresolved). Standalone f = +88.135 mm.*

L31 begins the fixed rear group G3 and is cemented to L32. The pair is weakly negative overall, with computed net effective focal length -443.635 mm. The patent states that adding a fixed rear G3 can aid lateral chromatic correction and overall size reduction (¶0067), while assigning G3 negative power allows stronger positive power in G2 and suppresses focus-group travel (¶0068). These are group-level design rationales rather than isolated measurements of L31.

### L32 — plano-concave negative, rear member of C5

*nd = 1.84667, νd = 23.79. Glass: 847238 — dense-flint class (supplier unresolved). Standalone f = -73.354 mm.*

L32 is the final physical lens element. Its cemented pairing with the higher-Abbe L31 yields the weak negative G3 power noted above. Surface 25 is flat and is followed by the patent's 8.4141 mm gap to the PP plate, which is traced through `rearPlates` but not drawn as a lens element.

## Glass Identification and Selection

The patent publishes d-line refractive index and Abbe number but does not identify suppliers or glass trade names. The data file therefore uses neutral six-digit/class labels rather than asserting OHARA, HOYA, SCHOTT, HIKARI, CDGM, or SUMITA identities from coordinate matches alone. The catalog audit found coordinate-compatible candidates for the active glasses, but coordinate agreement is not treated as supplier or melt proof.

| Data label | nd | νd | Elements | Description in model |
|---|---:|---:|---|---|
| 583595 | 1.58313 | 59.46 | L11, L12, L15 | Crown class, supplier unresolved |
| 892371 | 1.89190 | 37.13 | L13 | High-index lanthanum-flint class, supplier unresolved |
| 487704 | 1.48749 | 70.42 | L14 | Low-dispersion crown class, supplier unresolved |
| 001254 | 2.00069 | 25.43 | L16 | High-index flint class, supplier unresolved |
| 954323 | 1.95375 | 32.32 | L17 | High-index lanthanum class, supplier unresolved |
| 593686 | 1.59282 | 68.62 | L21 | Low-dispersion crown class, supplier unresolved |
| 855252 | 1.85451 | 25.15 | L22, L24 | Dense-flint class, supplier unresolved |
| 773496 | 1.77250 | 49.61 | L23 | High-index moderate-dispersion class, supplier unresolved |
| 003193 | 2.00272 | 19.32 | L25 | High-index high-dispersion class, supplier unresolved |
| 806407 | 1.80610 | 40.73 | L26 | High-index moderate-dispersion class, supplier unresolved |
| 603655 | 1.60300 | 65.46 | L31 | Phosphate-crown class, supplier unresolved |
| 847238 | 1.84667 | 23.79 | L32 | Dense-flint class, supplier unresolved |

No element in the data file carries nC, nF, ng, or dPgF because the patent does not publish those values. This limits spectral interpretation to the d-line/Abbe level unless a vendor identity is independently established and validated. In particular, the production specification's “one ED element” statement does not by itself establish which patent element is the production ED glass, and the model makes no APO or anomalous-partial-dispersion claim.

## Focus Mechanism

The focus state is source-published rather than reconstructed. Patent ¶0049 and ¶0077 state that only G2 moves toward the object as focus changes from infinity toward the closest object; G1, G3, the aperture stop, and image plane remain fixed. Table 2 supplies the two variable air gaps directly.

| State | DD[12] after stop | DD[22] after L26 | Sum |
|---|---:|---:|---:|
| Infinity | 6.58 mm | 6.72 mm | 13.30 mm |
| 110 mm object distance | 4.08 mm | 9.22 mm | 13.30 mm |

The equal-and-opposite changes correspond to a rigid 2.50 mm objectward translation of G2. No additional internal motion is inferred. Intermediate focus positions in the viewer are interpolation between the two published spacing states rather than additional patent-published mechanical positions.

FUJIFILM states that the production XF18mmF1.4 uses a linear AF motor and that all six focusing elements move as one. This is consistent with the six-element G2 mechanism in the patent example, but it remains part of the correlation evidence rather than proof that the patent example and production prescription are identical.

The source's “110 mm” distance is measured from the object to the first lens surface. Including the source PP plate, the raw 91.0641 mm first-surface-to-Sim track gives 201.0641 mm from object to Sim. With PP reduced to its air equivalent, the first-surface-to-image track is 90.0930557 mm, so the same source object plane lies 200.0931 mm from the paraxially equivalent image plane. FUJIFILM specifies a 20 cm minimum focus distance measured from the focal plane. The final data therefore uses `closeFocusM = 0.2` as the production/model reference while retaining the patent's published internal spacings at the close endpoint. The paraxial magnification at that patent state is -0.14617, compared with the marketed 0.15× maximum magnification.

## Aspherical Surfaces

Five surfaces are aspherical: 1A and 2A on L11, 7A on L15, and 21A and 22A on L26. The patent uses

`Zd = C h² / {1 + sqrt(1 - KA C² h²)} + Σ A_m h^m`, with `C = 1/R` and `m = 3 ... 16`.

LensVisualizer uses the standard conic form containing `1 + K`, so the conversion is `K = KA - 1`. The patent permits both odd and even powers of radial height; the nonzero odd terms remain rotationally symmetric because `h` is radial height. A3 is zero for all five surfaces and is omitted from the authored data.

The coefficients below are the published Example 1 values after only the conic-constant convention conversion; no dimensional scaling is applied.

### Surface 1A — L11 front

`K = 2.8510739`

`A4 = 8.2101298E-05`, `A5 = -9.5739997E-06`, `A6 = 5.9588626E-07`, `A7 = -3.0455959E-08`, `A8 = -1.9480492E-09`, `A9 = 4.0864450E-10`, `A10 = -1.4919699E-11`, `A11 = -1.8257720E-13`, `A12 = -2.7147724E-14`, `A13 = 3.4618551E-15`, `A14 = -2.7227826E-18`, `A15 = -6.6705344E-18`, `A16 = 1.4994304E-19`.

At the modeled 14.8 mm semi-diameter, the verified total departure from a sphere of the same paraxial radius is +0.53788 mm. Because the conic and polynomial terms act together, the surface is not reduced here to a single-coefficient aberration interpretation.

### Surface 2A — L11 rear

`K = -5.3296751`

`A4 = 3.1069943E-04`, `A5 = -1.0193003E-05`, `A6 = -9.9029127E-07`, `A7 = 7.4165898E-09`, `A8 = 5.8171636E-09`, `A9 = 1.7037688E-10`, `A10 = -1.6321215E-11`, `A11 = -1.4903567E-12`, `A12 = -2.8746210E-13`, `A13 = 5.1753338E-14`, `A14 = -2.5285882E-15`, `A15 = 4.0808858E-17`, `A16 = -8.7993111E-21`.

At the modeled 12.2 mm semi-diameter, the verified total departure from a sphere of the same paraxial radius is -0.40201 mm. The polynomial departure from the converted conic is much larger than that net sphere-referenced number, illustrating why the conic and polynomial terms must be interpreted together.

### Surface 7A — L15 front

`K = -4.0025899`

`A4 = -5.9789840E-05`, `A5 = 4.0272162E-07`, `A6 = -1.2393722E-06`, `A7 = 3.9428093E-07`, `A8 = -3.5102283E-08`, `A9 = -2.4364513E-09`, `A10 = 3.7344047E-10`, `A11 = 3.9820245E-11`, `A12 = -6.3260902E-12`, `A13 = -2.0073400E-13`, `A14 = 7.3073525E-14`, `A15 = -4.4848603E-15`, `A16 = 9.4036412E-17`.

At the modeled 10.42 mm semi-diameter, the verified total departure from a sphere of the same paraxial radius is -0.22116 mm.

### Surface 21A — L26 front

`K = -6.0000027`

`A4 = -1.5689881E-05`, `A5 = -6.5802732E-06`, `A6 = -6.9255100E-07`, `A7 = 1.4479909E-08`, `A8 = 1.4122715E-08`, `A9 = -3.4964926E-10`, `A10 = -7.5590845E-11`, `A11 = 6.1173246E-12`, `A12 = -9.6603698E-13`, `A13 = 7.7251258E-14`, `A14 = 1.1107596E-15`, `A15 = -3.0214962E-16`, `A16 = 7.8465436E-18`.

At the modeled 10.9 mm semi-diameter, the verified total departure from a sphere of the same paraxial radius is -2.66354 mm. This is the largest sphere-referenced departure among the five modeled aspherical rims except for the rear surface of the same element.

### Surface 22A — L26 rear

`K = -2.4211109`

`A4 = 3.0065970E-05`, `A5 = -1.9431301E-05`, `A6 = 3.3138973E-06`, `A7 = -4.3716353E-07`, `A8 = 2.8105186E-08`, `A9 = 1.7441042E-09`, `A10 = -1.5417488E-10`, `A11 = -2.3068826E-11`, `A12 = 1.2815061E-12`, `A13 = 2.3110962E-13`, `A14 = -2.7371328E-14`, `A15 = 1.2010839E-15`, `A16 = -2.1499728E-17`.

At the modeled 9.95 mm semi-diameter, the verified total departure from a sphere of the same paraxial radius is -2.79953 mm. The patent does not specify whether these aspheres are molded, polished, or composite, so no manufacturing process is assigned here.

## Conditional Expressions

Example 1 satisfies all ten broad conditions stated by the patent. The values below were recalculated from the final prescription or, where applicable, from its independently computed group/element focal lengths. The “Table 10” column preserves the printed patent summary rather than silently replacing it.

| No. | Patent condition | Recalculated | Table 10 | Disposition |
|---:|---|---:|---:|---|
| 1 | `0.5 < rF / Y < 3` | 1.13881 | 1.14 | Satisfies |
| 2 | `0.06 < (rF-rR)/(rF+rR) < 0.27` | 0.189559 | 0.19 | Satisfies |
| 3 | `0.35 < (rRR+rF)/(rRR-rF) < 1` | 0.474373 | 0.47 | Satisfies |
| 4 | `1.2 < TL2 / Y < 2` | 1.585577 | 1.59 | Satisfies |
| 5 | `-2.5 < r1F / f < -0.3` | -0.781101 | -0.78 | Satisfies |
| 6 | `15 < ν1 < 38` | 25.43 | 25.43 | Satisfies |
| 7 | `10 < ν2 < 27` | 19.32 | 19.32 | Satisfies |
| 8 | `0.05 < f2 / f1 < 0.32` | 0.199945 | 0.20 | Satisfies |
| 9 | `0.7 < fL1 / fL2 < 2` | 1.426607 | 1.43 | Satisfies |
| 10 | `20 < νmax - νmin < 100` | 44.99 | 44.98 | Satisfies; source discrepancy retained |

Conditions (1)–(9) agree with the patent's Table 10 values to the expected two-decimal rounding. Condition (10) is materially different at the last printed decimal: Table 10 gives 44.98, while the printed Table 1 negative-lens extrema 70.42 and 25.43 subtract to 44.99. The data file retains the Table 1 element Abbe numbers and the analysis preserves both values. The 0.01 discrepancy does not affect satisfaction of condition (10).

## Modeling Scope and Quantitative Checks

The implemented prescription reproduces the patent focal lengths at both published focus states: 17.89926 mm against 17.90 mm at infinity, and 17.65173 mm against 17.65 mm at the 110 mm state. A separately implemented ABCD calculation agrees with the sequential reduced-angle trace to floating-point precision.

The surface-by-surface Petzval sum, evaluated as `φ/(n·n′)` over the active surfaces, is +0.00382752 mm⁻¹, corresponding to a reciprocal magnitude of 261.27 mm. This is a computed property of the modeled prescription; the patent does not publish a Petzval total for comparison.

The stop radius is calibration-dependent. With STO semi-diameter 10.73762 mm, the paraxial entrance-pupil radius is 6.21502 mm and the recomputed infinity f-number is 1.44000004. Because the physical diaphragm diameter is not published, this agreement verifies the calibration arithmetic rather than independently discovering the stop size.

Once that infinity calibration is fixed, the published close-state f-number provides a separate pupil/focus check. At the 110 mm state the paraxial exit-to-entrance pupil diameter ratio is 2.17854 and the finite-conjugate magnification magnitude is 0.146171. Using `N_eff = N × (1 + |m|/P)` gives 1.53662, which rounds to the patent's FNo 1.54. This close-state agreement is not a second measurement of the stop diameter; it tests the published focus motion, pupil geometry, and finite-conjugate behavior against an independent Table 2 quantity.

The modeled semi-diameters are likewise not patent dimensions. They are geometry choices constrained by the optical section and ray envelope. They pass the implemented edge-thickness, actual rim-slope, conic-domain, shared-gap intrusion, and sampled exact-ray containment checks. The default sampled pupil bundles pass at both published endpoints and three interpolation states; a denser 41-point 0.6-field sweep reaches the intended outer aperture boundary at surface 16 for the extreme rim sample but does not first clip at a cemented junction or produce a backward intersection. These statements should not be read as a claim that the production barrel apertures or LensVisualizer render trim have been measured.

## Sources and References

1. **US 2022/0011542 A1**, Hiroki Saito, *Imaging Lens and Imaging Apparatus*, published January 13, 2022. Example 1; especially ¶¶0027–0028, 0046–0049, 0052–0069, 0077–0086; Tables 1–3 and 10; Figures 1–4. The original publication PDF is included with the dossier.
2. **FUJIFILM, XF18mmF1.4 R LM WR — Specifications.** https://www.fujifilm-x.com/en-us/products/lenses/xf18mmf14-r-lm-wr/specifications/ — production focal length, aperture, 15/9 configuration, three aspherical elements, one ED element, 76.5° angle of view, 20 cm focus range, and 0.15× maximum magnification.
3. **FUJIFILM, XF18mmF1.4 R LM WR — Product Overview.** https://www.fujifilm-x.com/en-us/products/lenses/xf18mmf14-r-lm-wr/ — linear AF motor and six focusing elements moving as one.
4. **FUJIFILM, XF18mmF1.4 R LM WR Owner's Manual, BL00005081-100.** https://dl.fujifilm-x.com/support/manual/lenses/lens_xf18mmf14_r_lm_wr_manual_01.pdf — minimum focus distance specified as 20 cm measured from the focal plane.
5. **FUJIFILM, “Fujifilm Announces New FUJINON XF18mmF1.4 R LM WR Lens,” April 15, 2021.** https://www.fujifilm-x.com/global/news/fujifilm-announces-new-fujinon-xf18mmf1-4-r-lm-wr-lens/ — X Series identity and planned May 2021 release.
6. Glass-coordinate review used the current authoritative catalog sources recorded in the dossier for OHARA, HOYA, SCHOTT, HIKARI, CDGM, and SUMITA. The analysis deliberately retains neutral class/code labels because those coordinate matches do not establish FUJIFILM's supplier or melt selection.
