# NIKON AF-S DX VR ZOOM-NIKKOR 18-200mm f/3.5-5.6G IF-ED

## Patent Reference and Design Identification

**Patent:** US 2006/0072213 A1\
**Filed:** September 29, 2005\
**Published:** April 6, 2006\
**Priority:** October 1, 2004; March 31, 2005\
**Inventors:** Atsushi Shibayama; Takeshi Suzuki; Tomoki Ito\
**Assignee:** Nikon Corporation\
**Title:** *Zoom Lens System with Vibration Reduction*\
**Embodiment analyzed:** Example 2

The prescription modeled here is Example 2 of US 2006/0072213 A1. The patent describes a four-group zoom with the power sequence positive-negative-positive-positive, an aperture stop between the second and third groups, a negative rear subgroup within the third group that shifts laterally for vibration reduction, and second-group focusing toward the object. Example 2 is given in Table 2 and is illustrated by Fig. 5; its infinity aberration plots are Figs. 6A, 7, and 8A (¶0157-¶0173).

The production correlation is treated as fixed for this project, but it is an analytical correlation rather than an explicit manufacturer statement that “Example 2 is the production prescription.” The evidence converges closely:

1. Nikon names Atsushi Shibayama, Takeshi Suzuki, and Tomoki Ito as the three optical designers of the production AF-S DX VR Zoom-Nikkor 18-200mm f/3.5-5.6G IF-ED; the same three people, in the same order, are the patent inventors.
2. Nikon's design retrospective describes the production lens as a four-group positive-negative-positive-positive zoom. Example 2 has exactly that group-power sequence (¶0158-¶0159).
3. Nikon states that the production VR system shifts a doublet at the rear of the third group perpendicular to the optical axis and that an aspherical form was adopted in that VR doublet. Example 2 places the negative G32 cemented pair at the rear of G3, shifts only G32 laterally, and places an aspherical resin surface on its front element (¶0162-¶0164, ¶0168).
4. Nikon gives the production construction as 16 physical lens elements in 12 groups, with two ED elements and three aspherical lens elements. Example 2 contains 16 physical lens elements in 12 air-separated units, three aspherical physical elements, and two unusually low-dispersion 1.497000 / 81.61 elements that are the model's ED-class counterparts.
5. The patent control points are 18.50109, 70.58244, and 194.99580 mm, while the production lens is marketed as 18-200 mm. The patent FNO values are 3.57, 5.09, and 5.81, while the production designation is f/3.5-5.6. These are consistent with normal marketed rounding; the prescription is not rescaled to force the marketing endpoints.
6. Nikon records the production lens as a DX-format Nikon F-bayonet lens released in December 2005. The patent's 2004/2005 Japanese priorities and April 2006 US publication are chronologically consistent with the production-development record.

The data file therefore keeps marketing and design quantities separate. The marketed focal range is 18-200 mm, while the unscaled design range is 18.50109-194.99580 mm. The model uses `s = 1`; no radii, spacings, image-plane coordinates, or aspheric coefficients are uniformly scaled.

## Optical Architecture

The design is a four-group, high-ratio zoom of positive-negative-positive-positive form. It should not be described as a “telephoto” optical architecture merely because the long end reaches a telephoto focal length. Under the project's strict definition, the modeled total track remains longer than the EFL at the published tele control point. At the wide control point, however, the back focal length exceeds the EFL, satisfying the project's strict retrofocus test for that state.

The groups are arranged as follows:

- **G1 (+):** a cemented negative/positive front pair followed by a positive meniscus.
- **G2 (-):** four physical lenses, beginning with a resin-faced hybrid negative meniscus. G2 is also the focusing group.
- **STO:** an air-space aperture stop between G2 and G3, 0.5000 mm before surface 16 in the patent infinity prescription.
- **G3 (+):** a positive front subgroup G31 followed by the negative VR subgroup G32.
- **G4 (+):** an aspheric positive front lens, a cemented positive/negative pair, and a positive rear meniscus.

The patent states that G1, G3, and G4 move toward the object when zooming from wide to tele, while the G1-G2 gap increases, the G2-G3 gap decreases, and the G3-G4 gap decreases in Example 2 (¶0159). The stop moves axially with G31 (¶0166). The final data file implements the three patent control points directly, using the variable gaps D5, D14, D24, and BF.

The following paraxial powers are computed from the final prescription at the d line with each listed unit considered in air. These values distinguish isolated cemented-unit power from whole-group power; they do not imply that an isolated component has the same contribution when embedded in the complete zoom.

| Unit | Computed isolated EFL | Interpretation |
|---|---:|---|
| D1 = L11 + L12 | +515.658178 mm | weak net-positive front cemented pair |
| G1 | +100.054253 mm | positive first zoom group |
| G2 | -14.530078 mm | strong negative focusing/zoom group |
| D2 = L32 + L33 | +124.152707 mm | net-positive cemented pair inside G31 |
| G31 | +26.386000 mm | positive front subgroup of G3 |
| G32 = L34 + L35, including the resin face | -39.611840 mm | negative laterally shifted VR subgroup |
| G3 | +49.212080 mm | positive third group after combining G31 and G32 in situ axially |
| D4 = L42 + L43 | -49.305807 mm | net-negative cemented pair inside G4 |
| G4 | +43.067122 mm | positive fourth zoom group |

The stop position is published, but its physical diameter is not. The data file therefore uses an inferred fixed stop semi-diameter of 7.34 mm. That value is derived from the three patent FNO states and produces modeled wide-open paraxial f-numbers of 3.58166384, 5.08116976, and 5.80946094 at the three control points. Those modeled values are deliberately distinct from both the patent's rounded FNO row (3.57, 5.09, 5.81) and the marketed f/3.5-5.6 designation.

The patent does not publish general clear semi-diameters. With one exception, the surface semi-diameters in the data file are therefore modeling inferences constrained by traced marginal/chief rays and the current geometry validator. Surface 21A is the exception: its patent asphere table gives an effective diameter of 15.0 mm, so the model retains a 7.5 mm semi-diameter there. The inferred dimensions are not presented as patent measurements.

No sensor cover glass, filter, inactive dummy plane, flare-cutter plane, or mechanical component is included. Surface 20 remains in the prescription because it is the real planar L33 glass-to-air exit and changes refractive medium; it is not a removable dummy surface.

## Element-by-Element Analysis

### G1 - Front Positive Group

#### L11 - Negative Meniscus

**nd = 1.850260, νd = 32.35. Glass: J-LASF021 (HIKARI catalog equivalent; production supplier unspecified). f = -146.180838 mm.**

L11 is the negative member of the D1 cemented pair. Its standalone power is negative, but it is bonded to the strongly positive L12 and the pair has a weak positive net EFL of +515.658178 mm. The distinction is important: the negative sign of L11 does not make the cemented pair negative, and the cemented pair's weak power is not the same as the +100.054253 mm power of the complete G1 after L13 is included.

The high index and modest Abbe number place L11 on the high-index, higher-dispersion side of the pair. The data file deliberately stores a coordinate class rather than a historical vendor glass because the patent supplies only `nd` and `νd`.

#### L12 - Biconvex Positive

**nd = 1.497000, νd = 81.61. Glass: H-FK61 (CDGM catalog equivalent; production supplier unspecified). f = +113.682439 mm.**

L12 is the positive member of D1. Its very high Abbe number is the strongest low-dispersion coordinate in the prescription and makes it the natural chromatic partner to L11 within the front cemented pair.

Nikon markets the production lens as containing two ED elements. The model identifies L12, together with L32, as the two ED-class counterparts because both share the 1.497000 / 81.61 coordinate. That mapping is a correlation inference from the prescription and the production element count; Nikon's cited product material does not identify the individual ED element numbers.

#### L13 - Positive Meniscus

**nd = 1.603000, νd = 65.47. Glass: S-PHM53 (OHARA catalog equivalent; production supplier unspecified). f = +122.891175 mm.**

L13 is the air-spaced rear positive member of G1. It raises the complete first-group power from the weak D1 cemented-pair value to a computed G1 EFL of +100.054253 mm. In architectural terms, G1 is therefore positive even though its first physical element is negative.

### G2 - Negative Focusing Group

#### L21r - Bonded Aspheric Resin Layer

**nd = 1.553890, νd = 38.09. Glass: Unmatched (optical resin layer; patent nd=1.553890, νd=38.09). f: not separately authored.**

L21r is a modeling entry for the thin bonded resin layer on the object side of physical lens L21. The patent explicitly describes L21 as an aspherical lens produced by applying a resin layer to its object-side surface (¶0161). Treating the resin as an optically distinct medium preserves the published 0.1500 mm layer thickness and refractive index without increasing the patent's physical element count.

Its optical power is not reported as an independent standalone element in the data file. The isolated `fl` stored for L21 is the value of the hybrid resin-plus-glass physical lens considered together.

#### L21 - Negative Meniscus Hybrid

**nd = 1.816000, νd = 46.63. Glass: J-LASF09A (HIKARI catalog equivalent; production supplier unspecified). f = -19.324874 mm for the complete L21 hybrid.**

L21 is the first physical lens of G2 and is a strong negative meniscus. Its object-side surface is the resin-carried asphere 6A. The hybrid lens is therefore optically stronger than would be described by the base-glass body alone; the authored standalone focal length includes the bonded resin layer.

Because G2 is the focusing group, L21's strong negative power participates directly in the change of conjugate when G2 translates toward the object. The patent does not assign a separate aberration-correction role to L21 beyond identifying the hybrid asphere and the group architecture, so the analysis does not infer one more narrowly.

#### L22 - Biconcave Negative

**nd = 1.816000, νd = 46.63. Glass: J-LASF09A (HIKARI catalog equivalent; production supplier unspecified). f = -26.797663 mm.**

L22 is the second consecutive negative lens in G2 and uses the same index/Abbe coordinate as the L21 glass body. It reinforces the group's negative power while remaining air-spaced from L21 and L23.

The complete G2 has a computed isolated EFL of -14.530078 mm. That group value is substantially stronger than the standalone value of any one negative member because it results from the entire four-lens sequence and its internal air gaps.

#### L23 - Biconvex Positive

**nd = 1.846660, νd = 23.78. Glass: J-SF03 (HIKARI catalog equivalent; production supplier unspecified). f = +21.015051 mm.**

L23 is a strong positive lens embedded within the otherwise negative G2. Its high index and low Abbe number distinguish it from the adjacent negative members. The positive standalone sign does not change the sign of G2 as a whole; rather, it forms part of the internal power balance of a group whose net EFL remains -14.530078 mm.

The dense-flint class label is coordinate-based. It is not a claim that Nikon used a particular vendor melt.

#### L24 - Negative Meniscus

**nd = 1.788000, νd = 47.38. Glass: J-LASF014 (HIKARI catalog equivalent; production supplier unspecified). f = -41.191618 mm.**

L24 is the rear negative member of G2 and the last physical lens before the aperture-stop gap. Its rear surface is surface 14, so focusing movement of G2 changes the D14 spacing between this surface and the stop/G31 assembly.

The patent's focus mechanism therefore changes the two air spaces that bracket G2: D5 decreases and D14 increases by the same translation when focusing closer. L24 itself remains rigidly fixed within G2.

### G31 - Positive Front Subgroup of G3

#### L31 - Biconvex Positive

**nd = 1.603000, νd = 65.47. Glass: S-PHM53 (OHARA catalog equivalent; production supplier unspecified). f = +34.131931 mm.**

L31 is the front positive lens of G31 and is encountered 0.5000 mm behind the aperture stop. Its power and the following L32/L33 cemented pair produce a computed G31 EFL of +26.386000 mm.

The stop and G31 move together axially during zooming (¶0166), so the stop-to-L31 spacing remains fixed in the three published control states.

#### L32 - Biconvex Positive

**nd = 1.497000, νd = 81.61. Glass: H-FK61 (CDGM catalog equivalent; production supplier unspecified). f = +29.460746 mm.**

L32 is the positive member of the D2 cemented pair and is the second element carrying the 1.497000 / 81.61 low-dispersion coordinate. As with L12, the ED-class label is supported by the coordinate and by Nikon's two-ED production specification, but the precise historical vendor identity is not asserted.

L32's standalone positive power is +29.460746 mm. The cemented L32/L33 pair is much weaker, with a net EFL of +124.152707 mm, because L33 contributes substantial negative power at the shared interface and rear plane.

#### L33 - Plano-Concave Negative

**nd = 1.850260, νd = 32.35. Glass: J-LASF021 (HIKARI catalog equivalent; production supplier unspecified). f = -36.879308 mm.**

L33 is the negative member of D2. Its object-side cemented surface is shared with L32, and its rear face, surface 20, is planar. Although the radius of surface 20 is infinite and therefore its paraxial surface power is zero, it remains an active glass-to-air boundary and cannot be removed from the sequential model.

The positive D2 net power and the positive L31 combine to make G31 strongly positive. This front subgroup then works axially with the negative G32 subgroup to yield a positive G3 as a whole.

### G32 - Negative Vibration-Reduction Subgroup

#### L34r - Bonded Aspheric Resin Layer

**nd = 1.553890, νd = 38.09. Glass: Unmatched (optical resin layer; patent nd=1.553890, νd=38.09). f: not separately authored.**

L34r is the second thin resin modeling medium in the data file. The patent states that physical lens L34 is a biconcave negative lens whose object-side asphere is formed by applying a resin layer (¶0164). Surface 21A is therefore modeled as the air-to-resin entrance followed by a 0.1000 mm resin-to-glass junction at surface 22.

The patent gives a 15.0 mm effective diameter for surface 21. The model preserves that published diameter instead of enlarging the aspheric zone to eliminate all off-axis marginal clipping.

#### L34 - Biconcave Negative Hybrid

**nd = 1.772500, νd = 49.61. Glass: J-LASF016 (HIKARI catalog equivalent; production supplier unspecified). f = -23.816870 mm for the complete L34 hybrid.**

L34 is the negative member of the cemented G32 vibration-reduction pair. The standalone focal length stored in the data file includes the bonded L34r resin layer. It is therefore a physical-lens value for the hybrid construction, not the power of the base glass alone.

The complete G32 subgroup, after L35 is cemented to L34, has a computed isolated EFL of -39.611840 mm. That net negative sign matches the patent's description of G32 as the negative rear subgroup of G3 (¶0162-¶0164).

#### L35 - Positive Meniscus

**nd = 1.805180, νd = 25.43. Glass: S-TIH6 (OHARA catalog equivalent; production supplier unspecified). f = +58.795916 mm.**

L35 is the positive meniscus cemented to L34. Its standalone sign is positive, but the net G32 pair remains negative because the negative L34 hybrid and the cemented interface dominate the unit's total power.

This distinction is especially relevant to the stabilization mechanism: the physical unit that shifts laterally is the complete G32 pair, not L34 or L35 independently. Nikon's production retrospective likewise describes a shifted doublet at the rear of the third group.

### G4 - Rear Positive Group

#### L41 - Biconvex Positive Asphere

**nd = 1.676974, νd = 54.52. Glass: S-LAL12 (OHARA catalog equivalent; production supplier unspecified). f = +34.485046 mm.**

L41 is the strongly positive aspheric front lens of G4. Its object-side surface 25A is the third and final asphere in Example 2 (¶0165).

OHARA S-LAL12 falls within the catalog-compatibility window (`Δnd = +0.000926`, `Δνd = +0.820`) and supplies a checked dispersion curve. The patent's `nd` and `νd` remain authoritative, and the label does not claim a historical melt identity.

#### L42 - Biconvex Positive

**nd = 1.487490, νd = 70.24. Glass: S-FSL5 (OHARA catalog equivalent; production supplier unspecified). f = +52.320529 mm.**

L42 is the positive member of the D4 cemented pair. Its relatively high Abbe number contrasts with the higher-index, more dispersive L43 that follows.

Despite L42's positive standalone power, the L42/L43 cemented pair has a computed net EFL of -49.305807 mm. The pair must therefore be distinguished from the complete G4, which is positive after L41 and L44 are included.

#### L43 - Biconcave Negative

**nd = 1.834000, νd = 37.17. Glass: S-LAH60 (OHARA catalog equivalent; production supplier unspecified). f = -24.977518 mm.**

L43 is the negative member of D4. The sign and magnitude of its standalone power are sufficient to drive the cemented L42/L43 unit negative even though L42 itself is positive.

The fourth group as a whole remains positive, with a computed EFL of +43.067122 mm. This is a direct example of why cemented-pair power cannot be substituted for whole-group power in describing the architecture.

#### L44 - Positive Meniscus

**nd = 1.516800, νd = 64.12. Glass: N-BK7 (SCHOTT catalog equivalent; production supplier unspecified). f = +70.034226 mm.**

L44 is the rear positive meniscus and final physical lens. Its rear surface is surface 31, from which the patent tabulates Bf to the image plane.

The final air gap is a zoom-dependent back-focus spacing, not an interchangeable-lens flange distance. No mechanical flange reference plane is present in the optical prescription, so Bf should not be equated directly with Nikon F flange focal distance.

## Glass Identification and Selection

The patent publishes only d-line refractive index and Abbe number. It does not identify vendors or catalog glass names. The data file uses coordinate-compatible catalog equivalents for dispersion modeling without treating them as proof of Nikon's historical melts. Only the two patented optical-resin layers remain unmatched.

| Patent coordinate `nd / νd` | Data-file identification | Used in | Status in the model |
|---|---|---|---|
| 1.850260 / 32.35 | J-LASF021 (HIKARI catalog equivalent) | L11, L33 | compatible curve; supplier unspecified |
| 1.497000 / 81.61 | H-FK61 (CDGM catalog equivalent) | L12, L32 | ED positions inferred from production count |
| 1.603000 / 65.47 | S-PHM53 (OHARA catalog equivalent) | L13, L31 | compatible curve; supplier unspecified |
| 1.553890 / 38.09 | Unmatched optical resin layer | L21r, L34r | patent explicitly identifies resin layers |
| 1.816000 / 46.63 | J-LASF09A (HIKARI catalog equivalent) | L21, L22 | compatible curve; supplier unspecified |
| 1.846660 / 23.78 | J-SF03 (HIKARI catalog equivalent) | L23 | compatible curve; supplier unspecified |
| 1.788000 / 47.38 | J-LASF014 (HIKARI catalog equivalent) | L24 | compatible curve; supplier unspecified |
| 1.772500 / 49.61 | J-LASF016 (HIKARI catalog equivalent) | L34 | compatible curve; supplier unspecified |
| 1.805180 / 25.43 | S-TIH6 (OHARA catalog equivalent) | L35 | compatible curve; supplier unspecified |
| 1.676974 / 54.52 | S-LAL12 (OHARA catalog equivalent) | L41 | compatible curve; supplier unspecified |
| 1.487490 / 70.24 | S-FSL5 (OHARA catalog equivalent) | L42 | compatible curve; supplier unspecified |
| 1.834000 / 37.17 | S-LAH60 (OHARA catalog equivalent) | L43 | compatible curve; supplier unspecified |
| 1.516800 / 64.12 | N-BK7 (SCHOTT catalog equivalent) | L44 | compatible curve; supplier unspecified |

The two 1.497000 / 81.61 elements occupy different positive groups: L12 is in the front G1 cemented pair and L32 is in the positive G31 cemented pair. This distribution is consistent with Nikon's marketed statement that the production lens contains two ED elements, but the patent itself provides only their refractive coordinates.

The remaining palette alternates high-index/high-dispersion members with higher-Abbe positive partners in several cemented or closely spaced units. That arrangement is consistent with ordinary achromatizing practice, but the data does not support an apochromatic classification. No `nC`, `nF`, `ng`, `PgF`, or `dPgF` values are published for Example 2, and none are authored in the data file. Consequently, no anomalous-partial-dispersion or APO claim is made from `nd`/`νd` alone.

## Focus Mechanism

The patent states that focusing from infinity to a close object is performed by moving G2 toward the object (¶0167). The mechanism is therefore an internal focusing translation of the complete second group, not unit focusing of the whole lens and not an independently floating multi-group reconstruction.

For a rigid G2 translation toward the object, the adjacent gaps change by equal and opposite amounts:

`D5_close = D5_infinity - δ`

`D14_close = D14_infinity + δ`

The sum `D5 + D14` is therefore conserved at each zoom position while the image plane remains fixed.

The patent's focus table states that the listed movement is for a shooting distance of 500 mm, but its wide row is inconsistent with that conjugate. The final data file therefore uses a **CONSTRAINED_RECONSTRUCTION**. The focusing group, direction, adjacent-gap conservation, infinity spacings, fixed image plane, and 500 mm target are all constrained by the patent; only the corrupted or rounded movement value is solved.

| Zoom control point | Patent δ | Authored solved δ for 500.000 mm | D5 at close focus | D14 at close focus |
|---|---:|---:|---:|---:|
| 18.50109 mm | 0.855000 mm | 0.954821883 mm | 1.115178117 mm | 30.354821883 mm |
| 70.58244 mm | 2.944000 mm | 2.944389620 mm | 35.055610380 mm | 13.944389620 mm |
| 194.99580 mm | 9.422000 mm | 9.421757313 mm | 50.578242687 mm | 11.221757313 mm |

With the corrected wide back focus, the published wide movement of 0.855 mm images a shooting distance of approximately 547.193 mm rather than 500 mm. By contrast, the printed mid and tele movements image approximately 500.068 mm and 499.974 mm, confirming the intended reference convention to the source precision. Solving the same rigid-group mechanism gives the authored wide value of 0.954821883 mm.

The mid and tele values in the data file are also code-solved to the exact 500.000 mm conjugate rather than rounded back to the printed three-decimal values. The differences are only +0.000389620 mm and -0.000242687 mm respectively.

Nikon specifies a 0.5 m minimum focusing distance for the production lens. That manufacturer specification is consistent with the patent's target, but it is not used as a free fitting parameter: the reconstruction follows the patent mechanism and final prescription.

## Aspherical Surfaces

Example 2 contains three aspherical physical lens elements: L21, L34, and L41. The first two are hybrid resin-faced elements; the third is the front positive lens of G4. The data labels the corresponding surfaces `6A`, `21A`, and `25A`.

The patent writes the conic term in the form

`x = (h²/r) / [1 + sqrt(1 - κ(h/r)²)] + b h⁴ + c h⁶ + d h⁸ + e h¹⁰`.

LensVisualizer uses the standard conic form with `sqrt(1 - (1 + K)(h/R)²)`. The required conversion is therefore

`K_standard = κ_patent - 1`.

All three Example 2 surfaces have `κ = 1.0000`, so all three are stored with standard `K = 0`. There is no conic mismatch hidden in the data.

| Surface | Physical location | K | A4 | A6 | A8 | A10 |
|---|---|---:|---:|---:|---:|---:|
| 6A | L21 bonded resin front surface | 0 | +1.00790E-05 | -4.17580E-08 | +1.36860E-10 | -2.18740E-13 |
| 21A | L34 bonded resin front surface | 0 | +9.66620E-06 | +3.29250E-09 | 0 | 0 |
| 25A | L41 object-side asphere | 0 | -1.94720E-05 | +2.75020E-09 | 0 | 0 |

The prescription is unscaled (`s = 1`). Consequently, the aspheric polynomial coefficients are transcribed directly. If a uniform scale had been applied, each coefficient of radial power `p` would require `A_p,scaled = A_p,patent / s^(p-1)` while `K` remained unchanged; no such transformation is needed here.

Surface 21A is the only Example 2 asphere for which the patent publishes an effective diameter: 15.0 mm. At the corresponding 7.5 mm semi-diameter, independent evaluation of the authored polynomial gives a departure from the same-radius sphere of +0.031170455 mm; at half that radial height, 3.75 mm, the departure is +0.001920685 mm. These reproduce the patent's `Xm` and `X50` condition values to its printed precision.

The aspheres serve different structural locations. Surface 6A is carried by the first element of the negative focusing group. Surface 21A is carried by the laterally shifted negative VR subgroup, where the patent specifically makes the asphere part of the vibration-reduction concept. Surface 25A begins the rear positive group. The analysis does not assign each polynomial a more specific aberration budget than the patent and final data support.

## Image Stabilization

The stabilization mechanism is intrinsic to the patent architecture. G3 is split into positive G31 and negative G32, and only G32 shifts substantially perpendicular to the optical axis for vibration reduction (¶0162-¶0164, ¶0168). In Example 2, G32 is the cemented L34/L35 pair, with the resin-carried asphere 21A on its object side.

The patent defines a vibration-reduction coefficient and gives explicit wide and tele displacement examples. Using its relation `shift = f tan(θ) / Kvr` gives:

| State | f | Rotational blur | Kvr | Computed lateral shift | Patent shift |
|---|---:|---:|---:|---:|---:|
| Wide | 18.50 mm | 0.60° | 1.134 | 0.170845 mm | 0.171 mm |
| Tele | 195.00 mm | 0.20° | 2.009 | 0.338816 mm | 0.339 mm |

The computed values agree with the patent's three-decimal displacement values. Nikon's later design retrospective independently describes the production lens as shifting a doublet at the rear of the third group and states that an aspherical form was adopted to limit performance degradation when that doublet was displaced. This is strong production-correlation evidence, but it is not treated as a manufacturer certification of the exact Example 2 table.

The LensVisualizer data object identifies G32 and its optical construction but does not invent a user-adjustable lateral VR state beyond what the current sequential data schema represents.

## Conditional Expressions

US 2006/0072213 A1 supplies fifteen design conditions across its two related formulations of the invention. The final prescription satisfies the applicable conditions when the corrected wide back focus is used.

| Condition | Computed value | Result |
|---|---:|---|
| (1) `f1/fw` | 5.408019 | PASS |
| (2) `Bfw/fw` | 2.056342 | PASS |
| (3) `f3/fw` | 2.659956 | PASS |
| (4) `f3R/f3F` | -1.501245 | PASS |
| (5) `f3/f4` | 1.142683 | PASS |
| (6) `fw/Re` | -0.659684 | PASS |
| (7) `M2t` | -0.837446 | PASS |
| (8) `f1/fw` | 5.408019 | PASS |
| (9) `f3/fw` | 2.659956 | PASS |
| (10) `|X50|` | 0.001920685 mm | PASS |
| (11) `|Xm|` | 0.031170455 mm | PASS |
| (12) `|X50|/|Xm|` | 0.061619 | PASS |
| (13) `f3/f4` | 1.142683 | PASS |
| (14) `Bfw/fw` | 2.056342 | PASS |
| (15) `Ds/f3` | 0.227586 | PASS |

Conditions (10) and (11) use the patent's 15.0 mm effective diameter for surface 21A. Their numerical bounds are 0.00075-0.075 mm under the patent's stated inequalities.

Conditions (2) and (14) are also useful diagnostics of the US source error in the wide Bf row. The US Table 2 prints 33.04456 mm, which gives `Bfw/fw = 1.786087`. That value is inconsistent with the same table's printed 2.056 ratio and fails condition (14)'s 1.80 lower bound. The corrected/model value 38.04456 mm gives 2.056342 and is independently reproduced by paraxial tracing.

## Verification Summary

The final TypeScript arrays were re-evaluated independently with sequential height/reduced-angle tracing and a separately assembled ABCD matrix. The two first-order methods agree to numerical precision. The principal control-point results are:

| State | Patent design f | Computed EFL | Model Bf | Computed BFL | Modeled F/# from 7.34 mm stop |
|---|---:|---:|---:|---:|---:|
| Wide | 18.50109 mm | 18.50116432 mm | 38.04456 mm | 38.04472868 mm | 3.58166384 |
| Mid | 70.58244 mm | 70.58282890 mm | 67.30022 mm | 67.30053555 mm | 5.08116976 |
| Tele | 194.99580 mm | 194.99659532 mm | 79.17192 mm | 79.17208233 mm | 5.80946094 |

The wide Bf requires an explicit source correction. US Table 2 prints **33.04456 mm**. The model uses **38.04456 mm** because the latter is reproduced by the prescription trace, yields the patent's own `Bfw/fw = 2.056` condition value, and is corroborated by the corresponding Japanese-family publication JP 2006-284763 A, which prints 38.04456 mm for the wide Example 2 back focus. The raw US value is not silently overwritten in the audit trail.

The focus model also requires the explicitly disclosed constrained reconstruction described above. No additional focus group or floating degree of freedom is invented.

The data model applies no uniform scale. It omits no active optical plate or dummy plane from Example 2, and it retains surface 20 as the real planar L33 exit. The patent-published stop location is preserved, while the stop diameter and all general semi-diameters except the 15.0 mm surface-21A effective diameter are modeling inferences.

The authored semi-diameters were checked against edge thickness, actual rim slope, conic-domain, shared-gap intrusion, and meridional ray-containment constraints across the defined wide/mid/tele infinity and 0.5 m focus states. The retained 7.5 mm semi-diameter on 21A produces limited outer marginal vignetting consistent with preserving the patent's effective aspheric diameter; on-axis marginal and full-field chief rays remain contained in the tested states. Layout controls are not used to conceal invalid surface geometry.

The surface-by-surface Petzval sum computed as `φ/(n n′)` is +0.001760204250 mm⁻¹. This near cancellation is the algebraic result of positive and negative surface contributions and should not be confused with weak individual group powers.

## Sources / References

1. **US 2006/0072213 A1**, Atsushi Shibayama, Takeshi Suzuki, and Tomoki Ito, *Zoom Lens System with Vibration Reduction*, Nikon Corporation, published April 6, 2006. Example 2: Fig. 5; Table 2; ¶0157-¶0173. The source PDF is the numerical authority for the prescription.
2. **Nikon Consumer, “NIKKOR - The Thousand and One Nights No.82: AF-S DX VR Zoom-Nikkor 18-200mm f/3.5-5.6G IF-ED.”** https://imaging.nikon.com/imaging/information/story/0082/ — production-design history, named optical designers, four-group power sequence, rear-G3 VR doublet, aspherical VR construction, and December 2005 production timing.
3. **Nikon Consumer, “Our Product History: 2000's.”** https://imaging.nikon.com/imaging/information/products_history/2000/ — production construction of 16 elements in 12 groups, two ED elements, three aspherical elements, and built-in SWM.
4. **Nikon USA, legacy product page, “AF-S DX VR Zoom-NIKKOR 18-200mm f/3.5-5.6G IF-ED.”** https://www.nikonusa.com/p/af-s-dx-vr-zoom-nikkor-18-200mm-f35-56g-if-ed/2159/overview — Nikon F-bayonet, DX format, marketed focal range, and construction metadata.
5. **Nikon USA, press release, November 1, 2005, “Nikon Adds New 18-200MM Lens to its Nikkor Line of Lenses.”** https://www.nikonusa.com/press-room/nikon-adds-new-18-200mm-lens-t — marketed ED/aspherical counts, internal focusing, seven-blade rounded diaphragm, 0.5 m minimum focus, and December 2005 availability.
6. **JP 2006-284763 A**, Nikon Corporation, corresponding Japanese-family publication, published October 19, 2006. Example 2 variable-distance data print `Bf = 38.04456 / 67.30022 / 79.17192 mm`; this family source is used only to corroborate the wide-back-focus error in the US publication.
