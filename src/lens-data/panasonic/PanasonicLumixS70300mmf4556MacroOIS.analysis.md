## Patent Reference and Design Identification

- **Patent:** JP 2022-125453 A
- **Application number:** JP 2021-023041
- **Filed:** February 17, 2021
- **Published:** August 29, 2022
- **Inventors:** Takahiro Kitada; Takehiro Nishioka; Yoshio Matsumura; Takakazu Bito
- **Applicant:** Panasonic Intellectual Property Management Co., Ltd.
- **Title:** Zoom lens system, imaging apparatus including the same, and interchangeable lens apparatus
- **Embodiment analyzed:** Embodiment 1 / Numerical Example 1

The prescription is identified with the production **PANASONIC LUMIX S 70-300mm f/4.5-5.6 MACRO O.I.S.** by convergent evidence rather than by an explicit manufacturer statement that the patent table is the literal production prescription.

1. Panasonic announced the S-R70300 on February 17, 2021, the same day on which the Japanese application was filed. The announcement identifies an L-Mount, full-frame 70–300mm f/4.5–5.6 lens with optical stabilization and 17 elements in 11 groups.[2]
2. Numerical Example 1 contains 17 elements and 11 physical glass assemblies when the six bonded pairs are recognized. Its seven power groups follow the same positive–negative–positive–positive–negative–positive–negative sequence that Panasonic publishes for the production lens.[1,4]
3. Both the selected example and Panasonic's developer account are entirely spherical. Panasonic separately identifies two ED elements, one UED element, and one UHR element in the production lens. The example's optical coordinates provide plausible counterparts at L2 and L8, L3, and L9 respectively, although that element-by-element assignment remains a correlation inference rather than a manufacturer glass disclosure.[2,4]
4. The patent stations are 72.8000, 144.7974, and 287.9970mm at f/4.54605, f/5.43172, and f/5.85441. These design values are close to, but intentionally kept separate from, the marketed 70–300mm f/4.5–5.6 specification.[1,3]
5. The patent assigns lateral stabilization to the complete second power group and axial focusing to the compact negative fifth group, features consistent with the product's optical stabilization and telephoto close-focus design.[1,2,4]

The correlation is therefore strong, but it is not treated as manufacturer confirmation of an unchanged production prescription. Panasonic's developer article describes **five** lens groups moving during production-lens zooming, whereas Numerical Example 1 has G1 and G3–G7 moving axially while G2 remains fixed—six moving power groups in the patent model. The discrepancy may reflect production refinement, mechanical grouping terminology, or simplification in the article. It prevents the patent example's exact zoom trajectories from being presented as confirmed production kinematics.[1,4]

The final LensVisualizer model applies no dimensional scale. It does, however, normalize six repeated 0.010mm generic adhesive layers in the numerical table. Each adhesive plane is removed, its shared interface is assigned directly to the downstream element, and its thickness is added to that element. The normalization preserves every later axial station and total track but removes the explicit adhesive's small refractive contribution. Consequently, the modeled Gaussian focal lengths are 72.844591, 144.902030, and 288.233075mm rather than the raw-table values reproduced before normalization.

| Quantity | Wide | Middle | Tele |
|---|---:|---:|---:|
| Marketed focal length | 70mm | — | 300mm |
| Patent zoom station | 72.8000mm | 144.7974mm | 287.9970mm |
| Normalized modeled EFL | 72.844591mm | 144.902030mm | 288.233075mm |
| Patent modeled f-number | 4.54605 | 5.43172 | 5.85441 |
| Marketed maximum aperture | f/4.5 | — | f/5.6 |

## Optical Architecture

Numerical Example 1 is a seven-power-group telephoto zoom with the sequence

$$G1(+) - G2(-) - G3(+) - G4(+) - G5(-) - G6(+) - G7(-).$$

The 17 elements form 11 physical groups: five singlets and six cemented doublets distributed from G2 through G7. The patent's principal structural choice is the use of cemented assemblies for the rearmost three power groups. This reduces the number of independently centered rear components while allowing each rear group to combine positive and negative glass power for chromatic and field correction (¶0177–¶0181).

The aperture stop follows L9 and is carried with G3. G2 remains nominally fixed along the optical axis during zoom and translates perpendicular to the axis for optical image stabilization. From wide to tele, G1 and G3–G7 move toward the object relative to the image plane. The accumulated four-decimal source spacings leave a 0.10125mm apparent G2 drift; this is retained as a source-precision residual rather than silently forcing the group to an exact fixed coordinate.

One air gap reverses direction across the three published stations. D23, between G4 and G5, changes from 4.2909mm at wide to 7.8833mm at the middle station and then to 3.9453mm at tele. Retaining the middle station is therefore necessary; a two-endpoint interpolation would erase a real part of the zoom path.

The following focal lengths are **net thick-group powers recomputed from the normalized final arrays**. They are not sums of the listed standalone element powers, and they do not describe the groups' state-dependent in-situ magnifications.

| Power group | Elements | Normalized net EFL | Principal function in the model |
|---|---|---:|---|
| G1 | L1–L3 | +137.031978mm | Front collector and telephoto chromatic balancing group |
| G2 | L4–L6 | −50.908078mm | Axially fixed negative group and laterally translating O.I.S. unit |
| G3 | L7–L9 plus stop spacing | +65.836205mm | Strong central converging relay carrying the stop |
| G4 | L10–L11 | +87.402237mm | Compact positive relay doublet |
| G5 | L12–L13 | −48.112457mm | Published internal focus group |
| G6 | L14–L15 | +50.807795mm | Positive rear relay doublet |
| G7 | L16–L17 | −56.003366mm | Final negative field and pupil-control group |

Under the project's strict terminology, the complete lens qualifies as a telephoto layout only at the tele endpoint, where total track divided by EFL is 0.781427. The wide and middle states have ratios of 2.276550 and 1.349909. No state is retrofocus because back focal distance never exceeds EFL.

The patent describes an optional parallel plate between the last group and image plane, such as a cover glass or low-pass filter (¶0019). Numerical Example 1 does not tabulate that plate. It is excluded from the model rather than represented by a synthetic sensor stack. No inactive dummy plane, flare cutter, filter, or mechanical surface is included.

## Element-by-Element Analysis

The focal length given on each element's first line is the **standalone element focal length recorded in the data file from patent Table 3B**. Cemented-net and assembled-group powers are separate quantities. For downstream members whose center thickness absorbed a removed 0.010mm adhesive layer, the exact isolated power of the normalized geometry differs slightly from the published Table 3B number; the largest difference is approximately 0.035mm. The published standalone values are retained for source traceability.

### G1 — Front Positive Group

G1 combines a high-index negative meniscus with two low-dispersion positive elements. The net group is positive even though the first element is negative. This arrangement reduces the positive bending required of each crown element and provides a strong chromatic lever arm at the largest beam diameter.

#### L1 — Negative Meniscus, Convex to the Object

**nd = 1.90366, νd = 31.3. Glass: 904313 — TAFD25 / S-LAH95 class (HOYA line-index representative). Standalone f = −256.5229mm.**

L1 is a weak high-index negative meniscus at the front of the lens. Its negative power counteracts part of the strong positive collector power behind it, allowing G1 to achieve its long +137mm net focal length without excessively steep positive surfaces. Because it occupies the largest clear aperture, its high index also reduces the curvature needed for a given surface power.

#### L2 — Biconvex Positive

**nd = 1.49700, νd = 81.6. Glass: 497816 — FCD1 / S-FPL51 class (HOYA line-index representative). Standalone f = +178.6630mm.**

L2 supplies low-dispersion positive power near the front of the system. Its optical coordinates correspond to an ED-class fluorophosphate crown. The identification is a catalog-class result; the patent does not name the production melt. Together with L3, it offsets the longitudinal color introduced by the high-index negative L1 and by the strongly powered interior flints.

#### L3 — Positive Meniscus, Convex to the Object

**nd = 1.43700, νd = 95.1. Glass: 437951 — FCD100 / H-FK95 class (HOYA line-index representative). Standalone f = +176.3143mm.**

L3 is the lowest-index and highest-Abbe element in the example. Its coordinate is consistent with a UED-class fluorophosphate crown and with Panasonic's statement that the production lens contains one UED element. The rear surface is very weakly curved, so most of the element's power is concentrated at its object-side surface while the element completes the front group's chromatic correction.

### G2 — Fixed Negative O.I.S. Group

G2 has a net focal length of −50.908078mm. It consists of a biconcave singlet followed by a cemented negative-positive meniscus pair. The complete group is fixed axially during the published zoom motion and shifts laterally for stabilization (¶0040, ¶0042).

#### L4 — Biconcave Negative

**nd = 1.58913, νd = 61.3. Glass: 589613 — BACD5 / N-SK5 class (HOYA line-index representative). Standalone f = −73.9868mm.**

L4 begins the negative variator with a moderate-index, relatively low-dispersion biconcave form. Its air separation from the following doublet gives G2 three independently curved outer surfaces while keeping the stabilized assembly compact.

#### D1: L5 + L6 — Cemented Negative-Positive Pair

**L5: nd = 1.59349, νd = 67.0. Glass: 593670 — PCD51 / J-PSKH4 class (HOYA line-index representative). Standalone f = −52.1737mm.**

**L6: nd = 1.84666, νd = 23.8. Glass: 847238 — FDS90-SG / N-SF57 class (HOYA line-index representative). Standalone f = +71.6229mm.**

L5 is a negative meniscus of comparatively low dispersion; L6 is a high-index, high-dispersion positive meniscus. Their shared 30.7258mm interface forms a strong achromatizing junction. The standalone positive power of L6 does not make D1 positive: in its actual cemented environment and with L4 ahead of it, G2 remains strongly negative.

The choice of a cemented pair is also mechanically relevant. The whole G2 assembly is the O.I.S. unit, so bonding L5 and L6 reduces the number of separate components whose centration must be maintained while the group is translated laterally.

### G3 — Positive Relay and Stop Group

G3 is a compact positive group with normalized net EFL +65.836205mm. It uses one air-spaced positive singlet followed by a strong low-dispersion/high-index cemented doublet. The aperture stop follows the group and moves with it during zoom.

#### L7 — Biconvex Positive

**nd = 1.87071, νd = 40.7. Glass: 871407 — TAFD32-class (HOYA representative; catalog Δnd = −0.00001). Standalone f = +60.7655mm.**

L7 is a high-index positive singlet that begins reconverging the beam after G2. The high index permits substantial positive power in a 2.62mm center thickness. The nearest current catalog representative differs from the patent index by only 0.00001, but the label remains a class identification rather than a production-glass assertion.

#### D2: L8 + L9 — Cemented Positive-Negative Pair

**L8: nd = 1.49700, νd = 81.6. Glass: 497816 — FCD1 / S-FPL51 class (HOYA line-index representative). Standalone f = +38.5128mm.**

**L9: nd = 2.00100, νd = 29.1. Glass: 001291 — TAFD55-W / S-LAH99 class (HOYA line-index representative). Standalone f = −33.6010mm.**

D2 places an ED-class positive element against an ultra-high-index negative element at the shared −38.6611mm surface. The individual powers are both strong, while their differing dispersion provides local chromatic compensation. L9's index of 2.001 is consistent with the UHR category identified by Panasonic for the production lens, but the precise commercial melt remains unproven.

The Embodiment 1 prose does not explicitly call L8 and L9 cemented. The numerical table nevertheless gives coincident radii separated only by the repeated 0.010mm adhesive material used at every other bonded interface. The final model therefore treats D2 as cemented. This resolves the prose omission from the selected example itself and yields the production-matching count of 11 physical groups.

### G4 — Positive Cemented Relay

#### D3: L10 + L11 — Cemented Negative-Positive Pair

**L10: nd = 1.84666, νd = 23.8. Glass: 847238 — FDS90-SG / N-SF57 class (HOYA line-index representative). Standalone f = −96.1853mm.**

**L11: nd = 1.80610, νd = 33.3. Glass: 806333 — NBFD15-W / J-LASFH6 class (HOYA line-index representative). Standalone f = +46.5423mm.**

D3 is net positive despite its negative front member. The positive L11 carries the dominant isolated power, while the lower-Abbe L10 supplies opposing power on the object side of the shared 226.5087mm interface. Its compact 3.60mm construction makes G4 a small relay group whose spacing relative to G5 reverses across the zoom range.

### G5 — Negative Internal Focus Group

#### D4: L12 + L13 — Cemented Positive-Negative Pair

**L12: nd = 1.86966, νd = 20.0. Glass: 870200 — FDS20-W class (HOYA line-index representative). Standalone f = +40.0416mm.**

**L13: nd = 1.80610, νd = 33.3. Glass: 806333 — NBFD15-W / J-LASFH6 class (HOYA line-index representative). Standalone f = −21.6822mm.**

The strong negative power of L13 dominates the positive L12, giving D4 a normalized net focal length of −48.112457mm. The group is small in diameter relative to the front assemblies and is the group identified by the embodiment-specific patent text as moving toward the image for close focus (¶0041). Its cemented construction is consistent with the patent's aim of obtaining a lightweight, accurately centered rear focusing unit.

### G6 — Positive Rear Relay

#### D5: L14 + L15 — Cemented Positive-Negative Pair

**L14: nd = 1.65844, νd = 50.9. Glass: 658509 — BACED5 / S-BSM25 class (HOYA line-index representative). Standalone f = +35.5547mm.**

**L15: nd = 1.92286, νd = 20.9. Glass: 923209 — E-FDS1-W / N-SF66 class (HOYA line-index representative). Standalone f = −118.9628mm.**

L14 supplies most of D5's positive power. L15 is a weak high-index negative meniscus convex toward the image. Their combination gives G6 a normalized net EFL of +50.807795mm while adding a strong dispersion contrast immediately behind the focus group.

### G7 — Final Negative Group

#### D6: L16 + L17 — Cemented Positive-Negative Pair

**L16: nd = 1.85883, νd = 30.0. Glass: 859300 — NBFD30 class (HOYA line-index representative). Standalone f = +52.6743mm.**

**L17: nd = 1.80420, νd = 46.5. Glass: 804465 — TAF3D / S-LAH65VS class (HOYA line-index representative). Standalone f = −27.7663mm.**

The final doublet is net negative because L17 is substantially stronger than L16. Both surfaces of L17 are concave, and its rear surface is the last optical surface in the numerical model. The group shifts the exit pupil toward the object side and supplies rear negative power for field balancing. The patent uses the focal length of L17 and the net powers of G6 and G7 in conditions (7)–(9), linking the final doublet directly to total length, manufacturing curvature, and rear-group power balance.

## Glass Identification and Selection

The patent publishes only d-line refractive index and Abbe number. It does not identify glass vendors, trade names, Sellmeier coefficients, C/F/g-line indices, or anomalous partial-dispersion deviations. The data file therefore separates three levels of information:

- The exact `nd` and `νd` values are patent facts.
- The six-digit codes and glass-family descriptions are catalog classifications based on the optical coordinates.
- The stored `nC`, `nF`, `ng`, and `dPgF` values are taken from matched representatives in the HOYA optical-glass Excel catalog updated June 1, 2026.[5]

Those line indices make the LensVisualizer spectral model more informative than a plain Abbe interpolation, but they do **not** establish that Panasonic purchased the named HOYA melts. No apochromatic designation is claimed. The representative data are used as class-level spectral surrogates, and the patent coordinates remain authoritative for the d line.

| Optical class | Elements | Patent coordinates | Interpretation in the final data |
|---|---|---|---|
| 497816 ED fluorophosphate crown | L2, L8 | nd 1.49700, νd 81.6 | FCD1 / S-FPL51-class representative |
| 437951 very-low-dispersion fluorophosphate | L3 | nd 1.43700, νd 95.1 | FCD100 / H-FK95-class representative |
| 001291 ultra-high-index lanthanum glass | L9 | nd 2.00100, νd 29.1 | TAFD55-W / S-LAH99-class representative |
| 847238 dense flint | L6, L10 | nd 1.84666, νd 23.8 | FDS90-SG / N-SF57-class representative |
| 806333 high-index flint | L11, L13 | nd 1.80610, νd 33.3 | NBFD15-W / J-LASFH6-class representative |
| Other crown/lanthanum/flint classes | L1, L4, L5, L7, L12, L14–L17 | As stored per element | Class-level HOYA representatives with explicit coordinate qualification |

The production lens is officially described as using two ED elements, one UED element, and one UHR element.[2,3,4] In the correlated patent example, L2 and L8 are the two 497816 low-dispersion elements, L3 is the 437951 very-low-dispersion element, and L9 is the 001291 index-2.001 element. That mapping is optically and geometrically persuasive, but it remains an inference from the patent prescription and Panasonic's published element categories.

### Chromatic Correction Strategy

Chromatic correction is distributed rather than confined to one achromat. The front group places two low-dispersion positive elements behind a high-index negative meniscus. G2 then uses a low-dispersion negative meniscus cemented to a high-dispersion positive partner. G3 repeats the complementary strategy more strongly by cementing an ED-class positive L8 to the index-2.001 negative L9. Each of the four rearmost power groups is also a positive-negative or negative-positive cemented pair.

This repeated alternation gives the design multiple local degrees of freedom for longitudinal and lateral color while retaining seven power groups and six published axial zoom trajectories. The patent explicitly requires high Abbe number in at least one of the two positive G1 elements and in the designated positive G3 element (conditions (2) and (4), ¶0147–¶0165). L2, L3, and L8 satisfy those requirements directly.

## Focus Mechanism

The selected embodiment states that G5—the cemented L12+L13 negative doublet—moves toward the image when focusing from infinity to a near object (¶0041). A later camera-system paragraph instead names G4 (¶0217). That later statement conflicts with the embodiment-specific description and the layout; it is treated as a drafting carry-over error. The data file follows G5.

The patent does not publish a close-focus spacing row, focus travel, object-distance table, or intermediate zoom focus law. The final model is therefore classified as **NO_INTERNAL_RECONSTRUCTION**. Every close member of every `[d∞, dclose]` pair is identical to its infinity member. The viewer contains the three published infinity zoom states but no invented focus trajectory.

Panasonic publishes minimum focus distances of 0.54m at 70mm and 0.74m at 300mm, with 0.5× maximum magnification at 300mm.[3] The required `closeFocusM` catalog field stores the shortest marketed distance, 0.54m. It is metadata only and does not imply that the modeled groups move to a computed 0.54m state.

A Stage 1 mechanism diagnostic moved only G5 while conserving the sum of its adjacent air gaps. At the marketed tele endpoint it produced approximately 0.493× at a 0.74m image-plane-referenced object distance. This supports the product correlation, but it remains a diagnostic rather than an authored focus state because the patent does not establish the complete close-focus prescription.

## Image Stabilization

The patent specifies that all three elements of G2 move perpendicular to the optical axis for image stabilization (¶0042). Numerical Example 1 states that a 0.551mm lateral displacement of G2 at tele compensates a 0.3° tilt of the full lens system (¶0224–¶0225).

Independent reduced-angle tracing of the raw patent model gives the tele stabilization sensitivity

$$(1-\beta_{G2})\,\beta_{GR}=-2.736292,$$

which agrees with the patent's −2.73639 value. The image displacement predicted from the system tilt is 1.507888mm; the displacement predicted from the 0.551mm group shift and sensitivity is 1.507697mm, a residual of 0.000191mm at the printed source precision.

The centered LensVisualizer prescription does not simulate the decentered O.I.S. state. It records G2's functional identity and validates the published sensitivity independently, while all rendered zoom stations remain centered. Panasonic's separate 5.5-stop stabilization claim is a marketed system-performance specification, not a result derived from this paraxial model.[2]

## Conditional Expressions

The patent gives nine design conditions. The raw prescription reproduces the consolidated Example 1 values within source precision. Cement normalization changes the full-system and group quantities slightly but leaves every inequality comfortably satisfied.

| Condition | Meaning | Patent Example 1 value | Final normalized model | Required range |
|---|---|---:|---:|---:|
| (1) | BFw / fT | 0.0786 | 0.078673 | 0.05 to 0.15 |
| (2) | νd of designated positive G1 glass | 81.6 / 95.1 | unchanged | greater than 65 |
| (3) | Tele G5–G6 spacing / tele total length | 0.1630 | 0.162980 | 0.10 to 0.25 |
| (4) | νd of designated positive G3 glass | 81.6 | unchanged | greater than 65 |
| (5) | G5 focus sensitivity expression | −7.27964 | −7.29187 | −10 to −5 |
| (6) | G2 O.I.S. sensitivity expression | −2.73639 | −2.73857 | −3.5 to −1.5 |
| (7) | Final negative element f / wide total length | −0.16743 | −0.16743 | −0.3 to 0 |
| (8) | Final cement radius / G7 focal length | 0.50225 | 0.50227 | 0.3 to 0.7 |
| (9) | G6 focal length / G7 focal length | −0.90723 | −0.90723 | −1.5 to −0.5 |

For condition (7), the normalized isolated focal length of L17 differs from the retained Table 3B value by about 0.001mm; either value rounds to the same displayed ratio. Conditions (5) and (6) are the most sensitive to the removed adhesive power because they depend on in-situ tele magnifications.

## Verification Summary

The final TypeScript arrays were independently parsed and traced rather than checked against a separate hand-maintained prescription. Sequential reduced-angle tracing and ABCD multiplication give unit determinants at all three zoom stations.

| State | EFL | BFL | Total track | Full-field chief-ray image height |
|---|---:|---:|---:|---:|
| Wide | 72.844591mm | 22.676048mm | 165.834340mm | 21.634411mm |
| Middle | 144.902030mm | 43.902154mm | 195.604490mm | 21.629634mm |
| Tele | 288.233075mm | 61.369440mm | 225.233090mm | 21.631974mm |

The patent image height is 21.633mm. The largest chief-ray residual is 0.003366mm. Exact spherical tracing recovers the authored f-numbers and gives entrance-pupil semi-diameters of 8.011855, 13.338503, and 24.616748mm. The corresponding physical stop semi-diameters are 9.698704, 10.276258, and 10.888078mm.

The patent publishes no clear apertures. All surface semi-diameters are modeling inferences derived from marginal and chief-ray envelopes at the three zoom positions, the patent image height and field angles, and the modeled wide-open stop. Geometry checks on the final arrays give a minimum element edge thickness of 0.623086mm, a maximum spherical rim-slope angle of 29.848879°, and a minimum physical cross-gap clearance of 0.022318mm. No conic check is applicable because the design is all-spherical, and no hidden render trim is required.

The normalized surface-by-surface Petzval sum, evaluated as $\phi/(n n')$, is +0.001067626633mm⁻¹. Its reciprocal is +936.657038mm. This is a paraxial Petzval quantity, not the aberrated best-focus surface.

## Sources

1. [JP 2022-125453 A, *Zoom lens system, imaging apparatus including the same, and interchangeable lens apparatus*](https://patents.google.com/patent/JP2022125453A/ja), Numerical Example 1, Tables 1–3D and Figure 1.
2. Panasonic North America, [“Panasonic Introduces New Telephoto Zoom Lens for the LUMIX S Series with Macro Capability”](https://na.panasonic.com/news/panasonic-introduces-new-telephoto-zoom-lens-for-the-lumix-s-series-with-macro-capability-lumix-s-70-300mm-f4.5-5.6-macro-o.i.s.-s-r70300), February 17, 2021.
3. Panasonic, [S-R70300 official features and specifications](https://help.na.panasonic.com/answers/features-and-specifications-lumix-lens-model-s-r70300/).
4. Panasonic Optical Design Department, [Fourth Edition: LUMIX S 70-300mm F4.5-5.6 MACRO O.I.S.](https://www.panasonic.com/in/consumer/cameras-camcorders/lenses-learn/article/this-is-the-optical-design-department-fourth-edition.html).
5. HOYA Group Optics Division, [Optical Glass Data Download](https://www.hoya-opticalworld.com/english/datadownload/index.html), Excel catalog updated June 1, 2026.
