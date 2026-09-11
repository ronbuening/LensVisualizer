# FUJIFILM FUJINON XF 16mm f/1.4 R WR

## Patent Reference and Design Identification

**Patent:** US 2016/0282590 A1\
**Priority:** March 24, 2015 (JP 2015-060676)\
**Filed:** March 4, 2016\
**Published:** September 29, 2016\
**Inventors:** Hiroki Saito; Takashi Suzuki\
**Applicant / Assignee:** FUJIFILM Corporation\
**Title:** *Imaging Lens and Imaging Apparatus*\
**Embodiment analyzed:** Example 1

This analysis treats Example 1 of US 2016/0282590 A1 as the fixed production correlation for the FUJIFILM FUJINON XF 16mm f/1.4 R WR. The patent does not name that production lens, so the identification is a correlation rather than an express manufacturer statement. The optical prescription itself is retained at native scale; the modeled infinity effective focal length is 16.475660 mm, while the production lens is marketed as 16 mm. No dimensional scaling is applied.

The correlation rests on several convergent features:

1. Example 1 contains 13 glass elements. Its two cemented interfaces leave 11 physical air-separated groups, matching Fujifilm's 13-element/11-group production specification. The patent separately organizes those elements into three functional groups, G1 through G3; those functional groups are not the same count as the 11 physical groups.
2. The prescription has two aspherical elements, L12 and L23, each with two aspherical surfaces. This matches Fujifilm's specification of two aspherical elements.
3. The patent gives an infinity focal length of 16.48 mm and FNo = 1.44; independent calculation from the final data gives 16.475660 mm. These design values are kept distinct from the marketed 16 mm and f/1.4 labels.
4. The patent gives a full field of 81.8° at infinity, while Fujifilm publishes 83.2° for the production lens. The difference is retained rather than forcing the prescription to the marketing field value.
5. At close focus, the patent gives lateral magnification β = 0.209. The final model gives |β| = 0.208950 and a physical object-to-image conjugate distance of 150.018 mm, consistent with Fujifilm's published 0.21× maximum magnification and 0.15 m minimum focus distance; Fujifilm's current Japanese specification explicitly measures that focus distance from the image-sensor plane.
6. The patent priority date, March 24, 2015, precedes Fujifilm's recorded May 21, 2015 release of the production lens by less than two months.
7. Production metadata identifies the lens with the FUJIFILM X system. The data file therefore uses the canonical `fujifilm-x` mount and `aps-c` image-format identifiers.

Fujifilm's current official lens manual and Japan Mall product record list 0.21× maximum magnification. Some localized Fujifilm eShop pages currently show 0.12×. The patent's β = 0.209 and the independent conjugate calculation support the 0.21× value, so the 0.12× listing is treated as a source-page discrepancy rather than as a change to the optical model.

The patent PDF text layer also corrupts several Table 1 and Table 2 characters and renders the d-line wavelength in ¶0068 as “587.6 mm.” The rendered tables and ¶0077 establish the intended prescription values and 587.6 nm d-line reference. No numerical patent value was otherwise corrected; the data preserves the rendered Example 1 tables after text-layer cleanup.

## Optical Architecture

Example 1 is a fixed-focal-length, three-functional-group, floating-focus wide-angle design. From object to image it consists of positive G1, positive G2, and negative G3. G1 is fixed during focusing; G2 and G3 move independently toward the object as focus is brought closer (¶0038, ¶0040, ¶0062). The aperture stop lies within G2, between L22 and L23.

The 13 elements form 11 physical air-separated groups. Two pairs are cemented: C1 is L14+L15 in G1, and C2 is L24+L25 in G2. These cemented pairs are counted as four glass elements but only two physical groups.

The computed functional-group powers at the d-line are:

| Functional group | Elements | Net EFL | Net power | Focus behavior |
|---|---|---:|---:|---|
| G1 | L11–L16 | +60.808122 mm | +16.445 D | Fixed |
| G2 | L21–L26 + stop | +22.811419 mm | +43.838 D | Moves objectward |
| G3 | L31 | −98.195602 mm | −10.184 D | Moves objectward on a different path |

The patent's packaging logic is explicit. A positive first group condenses the beam before it reaches the moving groups, which reduces the diameter demanded of G2 and G3 (¶0041). G1 nevertheless begins with three negative lenses. The first two negatives are used to obtain the wide field while restraining front-group diameter (¶0042), and the third negative lens L13 further supports the wide-angle requirement (¶0047). Positive power is restored by the rear portion of G1, including two positive lenses, a configuration the patent associates with securing the group's positive power without worsening spherical aberration (¶0048–¶0049).

The infinity back focal length from the last lens vertex is 17.744292 mm, slightly longer than the 16.475660 mm system EFL. Under the project's explicit criterion `BFD > EFL`, this is a retrofocus wide-angle design. The ratio BFD/EFL is 1.077000. “Retrofocus” here is a computed classification, not terminology used by the patent.

The active optical prescription ends at L31. The patent then shows an optional plane-parallel member PP between the lens and image plane and explicitly states that PP may be omitted (¶0039). The data model omits PP and replaces its optical path with an air-equivalent rear spacing, preserving the patent image-plane reference without treating a sensor cover/filter plate as a lens element.

## Element-by-Element Analysis

The focal length quoted on each element line is its standalone air-isolated focal length from the final data model. It is not the element's effective contribution after interaction with neighboring lenses and air spaces. Cemented-pair and functional-group powers are stated separately where relevant.

### L11 — Negative Meniscus

`nd = 1.84666`, `νd = 23.78`. Glass: **847238 — high-index flint class (vendor indeterminate)**. `f = −43.551861 mm`.

L11 is the first of the three negative elements that open G1. Its relatively high index and low Abbe number accompany moderate standalone negative power. Together with L12, it forms the leading negative pair that the patent associates with obtaining a wide angle of view without making the first group unnecessarily large (¶0042–¶0046).

Its role should not be confused with the sign of G1 as a whole: L11 is negative, but the complete six-element G1 is positive.

### L12 — Negative Meniscus, Two Aspherical Surfaces

`nd = 1.58313`, `νd = 59.37`. Glass: **S-BAL42 class (OHARA; patent vendor unspecified)**. `f = −56.805960 mm`.

L12 is the second negative meniscus in the front group and carries the prescription's first two aspheres, surfaces 3A and 4A. The element continues the wide-angle negative front section described in ¶0042 while adding substantial higher-order shape freedom at a location where off-axis ray heights are already large.

The glass name is a coordinate-based class assignment, not a supplier identity stated by the patent. The patent does not assign a specific aberration term to L12's aspheres, so their function is described here only as additional correction freedom within the front negative section.

### L13 — Biconcave Negative

`nd = 1.48749`, `νd = 70.24`. Glass: **S-FSL5 class (OHARA; patent vendor unspecified)**. `f = −52.276778 mm`.

L13 is the third consecutive negative element in G1. The patent specifically states that including this third negative lens after the first two negatives makes it easier to obtain a large angle of view while preventing excessive growth of the first-group diameter (¶0047).

Its comparatively high `νd` separates its dispersion behavior from the dense flint-like L11 even though both are negative elements. No anomalous-partial-dispersion behavior is asserted because the source provides only d-line index and Abbe number.

### L14 — Biconvex Positive, Cemented Pair C1

`nd = 2.00100`, `νd = 29.13`. Glass: **001291 — high-index lanthanum-flint class (vendor indeterminate)**. `f = +29.021076 mm`.

L14 is the first positive element in G1 and the front member of cemented pair C1. Its standalone power is +34.458 D. It reverses the negative power sequence of L11–L13 and is one of the two positive lenses that make G1 positive overall, consistent with ¶0048–¶0049.

L14 is cemented directly to L15. The pair's computed net focal length is +45.024503 mm, corresponding to +22.210 D. That cemented net value is the relevant pair-level quantity; it is distinct from the standalone power of either member.

### L15 — Biconcave Negative, Cemented Pair C1

`nd = 1.51742`, `νd = 52.43`. Glass: **S-NSL36 class (OHARA; coordinate match)**. `f = −78.099495 mm`.

L15 is the negative rear member of C1. Its standalone power is −12.804 D, partially offsetting the stronger positive L14 while preserving a net-positive cemented pair.

The large `νd` difference across the cemented interface provides primary-color balancing leverage, but the patent does not attribute a specific chromatic correction function to C1 and does not publish line-index or partial-dispersion data for these elements. No secondary-spectrum claim is therefore made for the pair.

### L16 — Positive Meniscus

`nd = 1.88300`, `νd = 40.76`. Glass: **S-LAH58 class (OHARA; patent vendor unspecified)**. `f = +33.900634 mm`.

L16 closes G1 with +29.498 D of standalone positive power. Together with L14, it supplies the two positive lenses called out in the patent's preferred first-group construction (¶0048–¶0049).

The result is a front group whose first three elements are individually negative but whose total power is positive. The computed G1 focal length is +60.808122 mm.

### L21 — Positive Meniscus

`nd = 1.81600`, `νd = 46.62`. Glass: **S-LAH59 class (OHARA; patent vendor unspecified)**. `f = +30.669791 mm`.

L21 is the first element of moving group G2 and is the group's object-side positive lens. The patent states that a positive lens in this location helps prevent the diameter of G2 from becoming large (¶0054). Its relation to the complete G2 power is also constrained by condition (3), `f2/f2a`, discussed below.

L21 is followed by negative L22 before the aperture stop. The patent treats this positive-negative pre-stop pair as favorable for lateral chromatic correction (¶0061), but it does not isolate the contribution of either element by itself.

### L22 — Negative Meniscus

`nd = 1.92286`, `νd = 18.90`. Glass: **923189 — high-index flint class (vendor indeterminate)**. `f = −26.940753 mm`.

L22 is a strong negative meniscus immediately before the stop. Its very low `νd` contrasts with L21 and establishes the positive-negative pre-stop arrangement described in ¶0061.

Because L21 and L22 move together as part of G2, their spacing relative to the fixed front group changes during focus while their internal separation remains fixed.

### L23 — Negative Meniscus, Two Aspherical Surfaces

`nd = 1.80348`, `νd = 40.45`. Glass: **Unmatched (nd=1.80348, nu_d=40.45; no defensible current public-catalog identity)**. `f = −305.775435 mm`.

L23 is the first lens after the aperture stop and carries aspherical surfaces 17A and 18A. Its standalone paraxial power is weak, only −3.270 D, despite the strongly curved physical surfaces. This combination makes the element principally a shape-sensitive correcting component rather than a major source of first-order negative power.

The patent directly assigns the first of the four post-stop lenses an advantage in spherical-aberration correction (¶0060). L23 is that lens in Example 1. The two aspherical surfaces provide additional higher-order control at this strategically sensitive post-stop position.

Several catalog curves lie inside the broad coordinate guard, but the patent supplies no evidence to choose their differing dispersion. L23 remains unidentified rather than selecting one to inflate coverage.

### L24 — Positive Meniscus, Cemented Pair C2

`nd = 1.59282`, `νd = 68.62`. Glass: **593686 — low-dispersion class (HOYA FCD505/FCD515 unresolved by nd/nu_d)**. `f = +27.531683 mm`.

L24 is the positive front member of cemented pair C2 and has +36.322 D of standalone power. It is the second lens after the stop.

The patent identifies the second and third post-stop lenses as advantageous for correction of lateral chromatic aberration (¶0060). In Example 1 those lenses are L24 and L25. Their opposite powers and substantial `νd` difference are consistent with that stated chromatic role without requiring a claim about anomalous partial dispersion.

The data file deliberately retains the unresolved 593686 class annotation. The `nd`/`νd` coordinate is consistent with more than one HOYA low-dispersion glass, so no unique catalog identity is asserted.

### L25 — Negative Meniscus, Cemented Pair C2

`nd = 1.64769`, `νd = 33.79`. Glass: **S-TIM22 class (OHARA; coordinate match)**. `f = −63.794482 mm`.

L25 is the negative rear member of C2, with −15.675 D of standalone power. Cemented to L24, the pair has a net focal length of +53.785132 mm, or +18.592 D.

The pair therefore remains net positive while combining a relatively low-dispersion positive member with a substantially more dispersive negative member. That power/dispersion arrangement is consistent with the lateral-color function attributed to these two post-stop lenses in ¶0060.

### L26 — Plano-Convex Positive

`nd = 1.49700`, `νd = 81.61`. Glass: **497816 — low-dispersion/ED class (vendor indeterminate)**. `f = +34.940443 mm`.

L26 is the final lens of G2 and the fourth lens after the stop. Its very high Abbe number makes it the lowest-dispersion element in the data set by `νd`, although the patent does not label it as an ED element by product terminology.

The patent states that the image-side lens of the four-lens post-stop sequence is advantageous for bringing the exit pupil toward the object side (¶0060). L26 occupies that position in Example 1.

### L31 — Negative Meniscus

`nd = 1.94595`, `νd = 17.98`. Glass: **946180 — high-index flint class (vendor indeterminate)**. `f = −98.195602 mm`.

L31 is the sole element of G3. The patent permits G3 to be either positive or negative and identifies Example 1 as a negative-G3 configuration (¶0062). Its computed net group power is therefore the same as its standalone element power, −10.184 D.

G3 moves toward the object during close focusing, but by a different amount from G2. That changing G2–G3 separation is central to the floating-focus mechanism and to the patent's strategy for limiting focus-induced aberration change (¶0040, ¶0050–¶0053).

## Glass Identification and Selection

The patent publishes only d-line `nd` and `νd`; it does not name glass suppliers. The glass strings in the data file therefore distinguish direct coordinate matches, class-level matches, vendor-indeterminate six-digit classes, and an explicit unmatched coordinate. Supplier names should not be read as patent-supplied material identities.

| Element | Data-file glass annotation | nd | νd | Interpretation |
|---|---|---:|---:|---|
| L11 | 847238 — high-index flint class | 1.84666 | 23.78 | Exact/near-exact class exists across multiple vendors; supplier indeterminate |
| L12 | S-BAL42 class (OHARA) | 1.58313 | 59.37 | OHARA class-level coordinate match; patent vendor unspecified |
| L13 | S-FSL5 class (OHARA) | 1.48749 | 70.24 | OHARA class-level coordinate match; patent vendor unspecified |
| L14 | 001291 — high-index lanthanum-flint class | 2.00100 | 29.13 | Shared high-index class; supplier indeterminate |
| L15 | S-NSL36 class (OHARA) | 1.51742 | 52.43 | Coordinate match |
| L16 | S-LAH58 class (OHARA) | 1.88300 | 40.76 | Coordinate match; patent vendor unspecified |
| L21 | S-LAH59 class (OHARA) | 1.81600 | 46.62 | Coordinate match; patent vendor unspecified |
| L22 | 923189 — high-index flint class | 1.92286 | 18.90 | Shared class; supplier indeterminate |
| L23 | Unmatched | 1.80348 | 40.45 | No defensible current public-catalog identity |
| L24 | 593686 — low-dispersion class | 1.59282 | 68.62 | HOYA FCD505/FCD515 unresolved by `nd`/`νd` alone |
| L25 | S-TIM22 class (OHARA) | 1.64769 | 33.79 | Coordinate match |
| L26 | 497816 — low-dispersion/ED class | 1.49700 | 81.61 | Exact low-dispersion coordinate exists, but supplier identity is indeterminate |
| L31 | 946180 — high-index flint class | 1.94595 | 17.98 | Exact class coordinate exists, but supplier identity is indeterminate |

The palette spans very high-index, low-`νd` flint classes and several much lower-dispersion glasses. The strongest explicitly patent-grounded chromatic arrangement is around G2. The patent states that the L21/L22 pre-stop pair is advantageous for lateral chromatic correction (¶0061), and that post-stop L24/L25 is likewise advantageous for lateral chromatic correction (¶0060). The L24/L25 cemented pair combines opposite powers and a large Abbe-number contrast while retaining net positive power.

Fujifilm's production specification states that the lens contains two ED elements. The patent does not identify any element as “ED,” and the data file contains no manufacturer-supplied mapping between that marketing count and Example 1's element labels. The low-dispersion annotations therefore remain optical-glass classifications rather than a claim that specific patent elements are the two production ED elements.

No `nC`, `nF`, `ng`, or `dPgF` fields are authored. APD tags are explicitly inferred from compatible catalog curves; the patent d-line coordinates alone do not establish anomalous dispersion or an APO designation.

## Focus Mechanism

The lens uses a published floating-focus mechanism. G1 remains fixed with respect to the image plane; G2 and G3 translate toward the object on different paths as focus moves from infinity to close distance (¶0040). The aperture stop moves with G2 because it lies inside that functional group.

The patent publishes three focus states—INFINITY, MIDDLE, and CLOSE—rather than only endpoint positions. The final data file preserves all three. The normalized middle control coordinate, `focusPositions[1] = 0.2499413665`, is the only inferred focus quantity: it is a solved UI interpolation coordinate based on the conjugate distances, not a patent-published mechanical scale.

| Quantity | INFINITY | MIDDLE | CLOSE |
|---|---:|---:|---:|
| Patent `DD11` (G1→G2 gap) | 5.5671 mm | 5.0428 mm | 2.3627 mm |
| Patent `DD23` (G2→G3 gap) | 1.0017 mm | 1.0660 mm | 1.9168 mm |
| Patent `DD25` (L31→PP gap) | 13.7445 mm | 14.2045 mm | 16.0338 mm |
| Data S25 air-equivalent rear spacing | 17.744056 mm | 18.204056 mm | 20.033356 mm |
| Patent β | 0.000 | 0.031 | 0.209 |
| Patent FNo | 1.44 | 1.46 | 1.59 |

From infinity to middle focus, G2 moves 0.5243 mm objectward and G3 moves 0.4600 mm objectward. From infinity to close focus, G2 moves 3.2044 mm objectward and G3 moves 2.2893 mm objectward. The G2–G3 air gap therefore increases as focus approaches the close limit. No reversal occurs across the three published states.

The sum `DD11 + DD23 + DD25` is 20.3133 mm in all three patent states, so the physical first-surface-to-image-plane track remains constant when PP is included. The final data preserves the same image-plane transfer while omitting PP. The plate contribution is replaced by an air-equivalent offset of `2.8500/1.51680 + 2.1206 = 3.999555696 mm`, which is added to each published `DD25` value.

The stop's axial location is source-published at patent surface 16. Its physical semi-diameter is not published. The data value `sd = 7.713774749562 mm` is inferred by calibrating the infinity prescription to FNo = 1.44. With that fixed stop, paraxial calculation predicts F/1.45586 at MIDDLE, closely reproducing the patent's F/1.46, but predicts approximately F/1.53438 at CLOSE rather than F/1.59. Because the patent gives no stop diameter or finite-conjugate F-number definition, the model retains the fixed stop and does not invent a state-dependent aperture.

The production lens is specified by Fujifilm to focus from 0.15 m to infinity. Fujifilm product information also describes the production lens as internally focused by a DC coreless motor. That motor description is manufacturer product information, not a feature stated by the patent.

## Aspherical Surfaces

Example 1 has four aspherical surfaces: 3A and 4A on L12, and 17A and 18A on L23. The first pair lies in the front negative section of G1; the second pair lies immediately after the stop on the first post-stop lens of G2.

The patent defines the surface sag as

$$
Z_d = \frac{C h^2}{1 + \sqrt{1-K_A C^2 h^2}} + \sum_{m=3}^{20} A_m h^m,
$$

where `h` is radial height and `C = 1/R`. LensVisualizer uses the standard denominator

$$
1 + \sqrt{1-(1+K)(h/R)^2},
$$

so the stored conic constant is `K = KA - 1`. The design is not scaled, and therefore none of the polynomial coefficients is rescaled. The patent uses both odd and even powers of radial height; because `h` is a non-negative radial coordinate, those odd powers remain rotationally symmetric.

The final stored conics are:

- 3A: `K = +2.0752596`
- 4A: `K = −0.00423896`
- 17A: `K = −0.51438177`
- 18A: `K = −0.21846116`

The complete coefficient set is retained at patent precision:

| Coefficient | 3A | 4A | 17A | 18A |
|---|---:|---:|---:|---:|
| A3 | −2.65317480E−04 | −3.49579070E−04 | −1.35575240E−05 | +7.08777250E−05 |
| A4 | +1.12981170E−04 | +1.14317460E−04 | +4.00452570E−06 | +4.32872590E−05 |
| A5 | +4.10267740E−05 | +5.62309750E−05 | −2.71706850E−05 | +2.10669970E−05 |
| A6 | −9.45556540E−06 | −1.36256260E−05 | +8.92469580E−06 | −5.39885280E−06 |
| A7 | +6.14952850E−07 | +1.04810890E−06 | −4.66642640E−07 | +6.46388730E−07 |
| A8 | −9.26077340E−10 | −1.41160310E−08 | −1.43156160E−07 | +1.36003750E−07 |
| A9 | −3.20788170E−10 | −8.73869140E−10 | +9.74088520E−09 | −7.81075960E−09 |
| A10 | −1.00291110E−10 | −1.18031060E−10 | +7.51304580E−09 | −5.09421830E−09 |
| A11 | +1.07747640E−12 | +5.49178780E−12 | −2.09959640E−10 | +6.91239770E−11 |
| A12 | +3.31836040E−13 | +4.56661300E−13 | −3.43066120E−10 | +1.93294200E−10 |
| A13 | +1.99930120E−14 | +1.26084060E−14 | +4.18584360E−11 | −2.07214340E−11 |
| A14 | −1.57000080E−15 | −2.84848820E−15 | −7.36628980E−13 | +1.38928550E−13 |
| A15 | −8.12198830E−17 | −7.25137130E−17 | +1.92274670E−13 | −9.55898300E−14 |
| A16 | +2.03517290E−18 | +5.65534640E−18 | −3.96197070E−14 | +2.05997680E−14 |
| A17 | +3.81886310E−19 | +5.32699600E−19 | −1.69503000E−15 | +1.09518530E−15 |
| A18 | −1.12509580E−20 | −2.41523880E−20 | +6.02555680E−16 | −3.16334470E−16 |
| A19 | −3.02462450E−22 | −4.48611060E−22 | −3.25377370E−17 | +1.37786480E−17 |
| A20 | +1.04935450E−23 | +2.23842820E−23 | +4.40635320E−19 | −4.49166620E−20 |

The L12 pair gives the negative front section higher-order surface freedom without adding another element. The L23 pair is more directly tied to the patent's stated aberration strategy because L23 is the first post-stop lens, a position explicitly identified as advantageous for spherical-aberration correction (¶0060).

The patent does not publish clear apertures for these aspheres. Their LensVisualizer semi-diameters are inferred modeling values, so no “departure at the published rim” is quoted. The source also does not establish whether the production aspheres were molded, polished, or made by another manufacturing process.

## Chromatic Correction Strategy

Chromatic correction is distributed across more than one part of G2 rather than assigned to a single isolated achromat. The patent explicitly identifies two arrangements as favorable for lateral chromatic aberration: the positive-negative pair L21/L22 before the stop (¶0061), and the L24/L25 pair among the four post-stop lenses (¶0060).

The L24/L25 cemented pair is the clearest numerical example. L24 is positive with `νd = 68.62`, L25 is negative with `νd = 33.79`, and the pair remains net positive at +18.592 D. This opposition of sign and dispersion is consistent with the patent's stated lateral-color role while avoiding any unsupported claim about secondary spectrum.

L26 has the highest Abbe number in the design, `νd = 81.61`, and the data identifies it only as a low-dispersion/ED class with vendor indeterminate. L13 (`νd = 70.24`) and L24 (`νd = 68.62`) are also relatively low-dispersion glasses. These d-line values help describe the dispersion distribution, but they do not establish anomalous partial dispersion.

The production specification states “2 ED elements.” The patent's Table 1 does not label ED elements, and the analysis therefore does not assign that production count to named patent elements. Without direct `nC`, `nF`, `ng`, `dPgF`, or a fully validated supplier-specific Sellmeier resolution for each candidate, an APO or anomalous-dispersion claim would exceed the available evidence.

## Conditional Expressions

The patent uses three first-order relationships to bound the preferred group structure. The tighter nested ranges are also satisfied by Example 1.

For the first group,

$$
-1.5 < f_{1ab}/f_1 < -0.1,
$$

with preferred subranges `−1.0 < f1ab/f1 < −0.2` and `−0.7 < f1ab/f1 < −0.3` (¶0043–¶0046). Here `f1ab` is the combined focal length of L11+L12 and `f1` is the focal length of G1.

For the moving groups,

$$
0.1 < f_2/|f_3| < 0.7,
$$

with the preferred upper bound tightened to 0.5 (¶0050–¶0053).

For the first positive lens in G2,

$$
0.3 < f_2/f_{2a} < 2,
$$

with the preferred range `0.6 < f2/f2a < 1.7` (¶0055–¶0058).

| Expression | Computed from final prescription | Patent Table 13 |
|---|---:|---:|
| `f1ab/f1` | −0.379553915 | −0.380 |
| `f2/|f3|` | +0.232305913 | +0.232 |
| `f2/f2a` | +0.743774842 | +0.744 |

The computed values reproduce Table 13 within the patent's printed rounding and fall inside the tighter preferred ranges.

## Verification Summary

Independent paraxial calculations were performed directly from the final TypeScript surface and element arrays using sequential height/reduced-angle tracing with a separate ordinary-angle ABCD cross-check. The two first-order methods agree to numerical roundoff.

| State | Computed EFL | Patent f | Computed |β| | Patent β |
|---|---:|---:|---:|---:|
| INFINITY | 16.475660 mm | 16.48 mm | 0.000014 | 0.000 |
| MIDDLE | 16.381334 mm | 16.38 mm | 0.031100 | 0.031 |
| CLOSE | 15.815479 mm | 15.82 mm | 0.208950 | 0.209 |

At infinity, the computed back focal distance (BFD) from the L31 rear vertex is 17.744292 mm. The PP-normalized rear spacing stored in the data is 17.744056 mm, a residual of about 0.000237 mm. This is the expected comparison after the auxiliary plate is removed by air-equivalent normalization.

Surface-by-surface Petzval summation using `φ/(n·n′)` gives `+0.005745970001 mm⁻¹`, corresponding to a signed reciprocal of approximately +174.035 mm. This is a first-order field-curvature quantity, not a direct prediction of the final best-focus image surface after higher-order correction.

The semi-diameters in the data are not patent dimensions. They were inferred from the patent's Figure 1 section and ray envelopes, then checked against the current geometry criteria. Across all three published focus states the independent checks give a minimum element edge separation of 1.000 mm, a maximum actual rim-slope angle of 59.092°, and a minimum shared-gap clearance margin of 0.02136 mm under the 0.90 gap-sag criterion. The selected aspheric semi-diameters remain inside their real conic domains, and the default on-axis and 0.6-field ray sets clear all modeled surfaces in all three states.

These checks validate the authored geometry as a LensVisualizer model; they do not convert the inferred semi-diameters into source-published clear-aperture dimensions.

## Sources

- Saito, Hiroki; Suzuki, Takashi. **US 2016/0282590 A1, “Imaging Lens and Imaging Apparatus.”** FUJIFILM Corporation, published September 29, 2016. Example 1, Figure 1, Tables 1–3 and 13, especially ¶0037–¶0041, ¶0042–¶0063, and ¶0067–¶0077. https://patents.google.com/patent/US20160282590A1/en
- FUJIFILM. **XF14mmF2.8 R / XF16mmF1.4 R WR / XF23mmF1.4 R Lens Manual and Specifications.** Production specifications for construction, focal length, angle of view, aperture, focus range, maximum magnification, and aperture blades. https://dl.fujifilm-x.com/support/manual/lenses/lens_xf14_xf16_xf23_manual_02.pdf
- FUJIFILM Japan. **FUJINON XF16mmF1.4 R WR Specifications.** Current product specification stating the 15 cm minimum focus distance from the image-sensor plane and 0.21× maximum magnification. https://www.fujifilm-x.com/ja-jp/products/lenses/xf16mmf14-r-wr/specifications/
- FUJIFILM Japan Mall. **FUJINON Lens XF16mmF1.4 R WR.** Product record with May 21, 2015 release date and 13-element/11-group, 0.15 m, 0.21× specifications. https://mall-jp.fujifilm.com/shop/g/g16641210/
- FUJIFILM USA. **XF16mmF1.4 product information.** Production mechanical information including internal focusing and DC coreless motor. https://shopusa.fujifilm-x.com/xf16mmf1-4-xf16mmf1-4/
- FUJIFILM eShop Denmark. **FUJINON XF16mmF1.4 R WR.** Localized product listing showing the conflicting 0.12× maximum-magnification value discussed above. https://eshop.fujifilm-x.com/dk/fujinon-xf16mmf1-4-r-wr.html
- OHARA Corporation. **Optical Glass Catalog.** Coordinate and glass-class reference used for OHARA-class annotations. https://oharacorp.com/glass-catalog/
- HOYA Group Optics Division. **Optical Glass Data Download.** Coordinate reference used for HOYA-class and unresolved cross-vendor checks. https://www.hoya-opticalworld.com/english/datadownload/index.html
- SUMITA Optical Glass, Inc. **Optical Glass Data.** Cross-check source for public-catalog coordinate alternatives. https://www.sumita-opt.co.jp/en/download/


## Integration Audit — 2026-09-11 UTC

Inspected the exact local US 2016/0282590 A1, PDF page 2, Fig. 1 infinity panel at 600 dpi; screening crop `0.30,0.31,0.66,0.475`. Retained the existing SDs. The apparent 17 mm rear rims in the automatic screen are ray/leader contamination; enlarged inspection shows approximately 9–12 mm optical extents. Twelve of 13 elements resolve to catalog curves. L23 (1.80348/40.45) remains explicitly unmatched; no production supplier or new dispersion fit is inferred.

Display name checked against the manufacturer product designation; the existing FUJINON XF name, aperture and R/LM/OIS/WR suffixes are correct. Structured patent assignee metadata uses the existing canonical `Fujifilm Corporation` spelling.


## Diagram and Spectral Review — 2026-09-11 UTC

Rechecked the local drawing against Fig. 1; retained the current SDs and physical element labels.
L11, L22, L24, L26 and L31 now show inferred APD from their compatible catalog curves, with the selected proxy
and derived departure identified in each inspector note. Positive short-flint APD is distinguished from ED glass.
L23 remains unmatched: J-LASF013, S-LAH63 and NBFD3 are near the coordinate, but no independent spectral evidence
selects among them. No new absolute line indices or production supplier identities were inferred.

The published focus rows are correctly ordered infinity–middle–close. With the image plane fixed, G1 stays fixed,
G2 moves 3.2044 mm objectward and G3 moves 2.2893 mm objectward. The rear gap increases accordingly.
