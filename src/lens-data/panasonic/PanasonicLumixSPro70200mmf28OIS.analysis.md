## Patent Reference and Design Identification

**Patent:** US 2021/0132345 A1
**Application Number:** US 17/085,457
**Priority:** JP 2019-199522, 1 November 2019; JP 2020-164075, 29 September 2020
**Filed:** 30 October 2020
**Published:** 6 May 2021
**Inventors:** Takehiro Nishioka; Hisayuki Ii
**Applicant:** Panasonic Intellectual Property Management Co., Ltd.
**Title:** *Zoom Lens System, and Lens Barrel, Image Capture Device, and Camera System Including the Zoom Lens System*
**Embodiment analyzed:** Third embodiment / Third Example of Numerical Values, Tables 7, 8, and 9A–9D

The prescription is correlated with the PANASONIC LUMIX S PRO 70-200mm f/2.8 O.I.S. (S-E70200). The patent does not
name the commercial lens, so the identification is a production correlation rather than a manufacturer confirmation.
The selected example is fixed by the project job card and is supported by several convergent features:

1. The patent example contains 22 glass elements and five cemented pairs, giving 17 physical air-separated groups.
   Panasonic specifies 22 elements in 17 groups for the S-E70200. [1, pp. 13–14; 2]
2. The seven kinematic groups have the power sequence positive–negative–positive–positive–negative–positive–negative.
   Panasonic's optical-design account gives the same seven-group sequence. [1, ¶¶0094–0123; 3]
3. The patent uses two rear focus groups, G5 negative and G6 positive, which move in opposite directions during focusing.
   Panasonic describes the production lens as a rear double-focus system using two independently controlled groups. [1,
   ¶0123; 3]
4. The example has one physical aspherical element, L15, with both surfaces aspherical. Panasonic specifies one
   aspherical lens in the production construction. [1, Table 8; 2]
5. Three elements have `nd = 1.49700`, `νd = 81.6`, and two have `nd = 1.43700`, `νd = 95.1`. These counts correspond
   to Panasonic's three ED and two UED elements, although the patent does not identify their trade names or melt vendor.
   [1, Table 7; 2]
6. Panasonic describes a three-element image-stabilization group with negative–positive–positive power order, an ED
   second element, and an aspherical third element. L13–L15 is the unique matching sequence in the selected prescription.
   [3]
7. The patent control states span 72.4497–193.0002 mm at a 21.63 mm image height and approximately f/2.8, consistent
   with the marketed 70–200 mm full-frame lens. No uniform scaling is applied. [1, Table 9A; 2]
8. The first Japanese priority date precedes Panasonic's 6 November 2019 product announcement by five days, and the
   optical-design article is presented by Nishioka, matching the first-named inventor. [1; 3; 4]

The manufacturer specifications and the modeled prescription are kept separate. Panasonic markets a 70–200 mm,
constant-f/2.8 L-Mount lens with 0.95 m closest focus, approximately 0.21× maximum magnification, and an 11-blade
aperture. The normalized LensVisualizer model computes 72.4595046 mm, 120.0165637 mm, and 193.0248816 mm at its three
published infinity-focus zoom states. Its fixed authored stop gives f/2.8326250, f/2.8944338, and f/2.9285456 after the
prescribed source normalization. [2]

The patent's five 0.01 mm adhesive shells are not represented as generic cement elements. Each shell is collapsed into
the downstream glass, preserving the external vertex positions and using the downstream element's index at the cemented
junction. The parallel plate P is also omitted from the ordinary lens prescription. Its optical thickness is retained by
replacing the physical rear sequence with an air-equivalent spacing of 33.4744936709 mm after surface 45. These are
modeling normalizations, not corrections to the patent.

No source radius, index, Abbe number, aspheric coefficient, or published zoom spacing is corrected. No scale factor or
asphere-coefficient transformation is applied.

## Optical Architecture

The design contains 22 elements in 17 physical groups and seven zoom/focus kinematic groups. The apparent discrepancy
between 17 groups and seven groups is a counting distinction: Panasonic's product specification counts air-separated
physical groups, whereas G1–G7 describe bodies that move together during zooming and focusing.

The kinematic power sequence is:

| Kinematic group | Computed paraxial EFL | Principal role | Infinity-zoom behavior |
|---|---:|---|---|
| G1 | +140.567612 mm | Fixed front collector | Fixed |
| G2 | −49.015680 mm | Negative variator | Moves imageward |
| G3 | +55.603060 mm | Positive compensator | Moves objectward |
| G4 | +101.719131 mm | Fixed relay, stop, and probable O.I.S. subgroup | Fixed within source rounding |
| G5 | −61.276693 mm | First rear focus group | Reverses during zoom |
| G6 | +64.930326 mm | Second rear focus group | Moves imageward |
| G7 | −81.848742 mm | Fixed rear group | Fixed within source rounding |

G1 combines a negative front meniscus with two high-Abbe positive elements. Its net positive power begins the collection
of a wide-aperture full-frame cone while moderating the front diameter. G2 is the principal negative variator. It moves from a
group-start position of 23.4000 mm at wide angle to 67.3034 mm at telephoto, a 43.9034 mm imageward displacement. G3 is
a compact single-element positive compensator that moves 2.8359 mm toward the object between the wide and tele states.

G4 is fixed with the aperture stop and contains nine elements, including three cemented pairs and the double-sided
asphere. It is the main stationary relay and the only kinematic group containing the probable image-stabilization block.
The stop is located at the patent's surface 21 between L10 and L11. Its axial position is therefore published; only its
16.2496432811 mm semi-diameter is inferred.

G5 and G6 are compact rear groups. Their small diameters permit the double-focus arrangement described by Panasonic.
During zooming, G5 moves imageward to the middle state and then partly returns, while G6 moves steadily imageward. G7 is
a fixed negative rear group that completes the relay to the image plane.

The prescription is a telephoto zoom by focal-length category, but not a strict telephoto-form design under the project
criterion `TL/EFL < 1`. At the tele state, the normalized air-equivalent track divided by EFL is 1.161945. The normalized
Gaussian back focal distance from the last active vertex is 33.471741 mm, far below the 193.024882 mm EFL, so the design
is not retrofocus under the criterion `BFD > EFL`.

## Element-by-Element Analysis

### L1 — Negative Meniscus, convex to object

`nd = 1.90366`, `νd = 31.3`. Glass: 904313 lanthanum dense-flint class, vendor unresolved. Standalone
`f = −224.8424 mm`.

L1 is the negative leading component of G1. Its high index allows a moderate negative contribution without requiring an
extremely deep surface pair. The meniscus form faces its convex surface toward the object and works with the two positive
collectors behind it rather than acting as an independent negative front group.

### L2 — Plano-Convex Positive, convex to object

`nd = 1.49700`, `νd = 81.6`. Glass: 497816 ED fluorophosphate-crown class, vendor unresolved. Standalone
`f = +161.7103 mm`.

L2 provides the first high-Abbe positive contribution in G1. Its plane rear surface and substantial center thickness make
it a strong collector with comparatively simple surface geometry. The 497816 class is one of the three positions that
correspond to Panasonic's marketed ED count, but the patent does not establish a specific commercial glass.

### L3 — Positive Meniscus, convex to object

`nd = 1.43700`, `νd = 95.1`. Glass: 437951 UED fluorophosphate-crown class, vendor unresolved. Standalone
`f = +182.9693 mm`.

L3 closes the fixed front group with very high Abbe number and positive power. Its placement behind L1 and L2 gives G1 a
net EFL of +140.567612 mm. The high-Abbe pair L2–L3 supplies positive power while limiting the dispersion that would
otherwise accompany the front group's large ray heights.

### L4 — Biconvex Positive

`nd = 1.60562`, `νd = 43.7`. Glass: 606437 barium-flint class, vendor unresolved. Standalone
`f = +227.9454 mm`.

L4 is the positive lead element within the net-negative variator G2. Its relatively weak positive power moderates the
ray transfer into the stronger negative members behind it and allows the group to distribute power across several
surfaces rather than concentrate it in one strongly curved lens.

### L5 — Negative Meniscus, convex to object

`nd = 1.69680`, `νd = 55.5`. Glass: 697555 lanthanum-crown class, vendor unresolved. Standalone
`f = −60.9511 mm`.

L5 supplies a major part of G2's negative power. The comparatively high index and moderate Abbe number support a compact
negative meniscus immediately before the first cemented pair. Its standalone power should not be confused with the net
power of G2, which also includes L4, D1, and L8.

### D1: L6–L7 — Cemented Negative/Positive Pair

L6: `nd = 1.48749`, `νd = 70.4`. Glass: 487704 fluor-crown class, vendor unresolved. Standalone
`f = −61.9187 mm`.

L7: `nd = 1.90366`, `νd = 31.3`. Glass: 904313 lanthanum dense-flint class, vendor unresolved. Standalone
`f = +45.6049 mm`.

The pair combines a high-Abbe negative biconcave element with a high-index, low-Abbe positive biconvex element. Its
normalized cemented-block EFL is +165.002138 mm, even though L6 alone is strongly negative. The cemented net is therefore
weakly positive relative to its individual components and functions inside the negative variator rather than defining
G2's sign by itself.

The data model uses surface 12 as the direct L6–L7 interface, carrying L7's index and element identity. The patent's
0.01 mm adhesive shell is absorbed into L7's 6.21 mm center thickness.

### L8 — Biconcave Negative

`nd = 1.60311`, `νd = 60.7`. Glass: 603607 dense-crown class, vendor unresolved. Standalone
`f = −75.5764 mm`.

L8 completes G2 and restores the group's negative sign after the weakly positive D1 block. The full normalized group has
an EFL of −49.015680 mm. G2's large zoom displacement makes this distributed negative power the main focal-length
control of the system.

### L9 — Biconvex Positive

`nd = 1.80450`, `νd = 39.6`. Glass: 805396 dense barium-flint class, vendor unresolved. Standalone
`f = +55.6031 mm`.

L9 is the sole element of G3, so its standalone and group focal lengths are identical at +55.603060 mm. It acts as the
positive compensator between the moving negative variator and the fixed central relay. Its modest objectward zoom travel
maintains image conjugacy as G2 moves through a much longer range.

### L10 — Positive Meniscus, convex to object

`nd = 1.49700`, `νd = 81.6`. Glass: 497816 ED fluorophosphate-crown class, vendor unresolved. Standalone
`f = +184.3158 mm`.

L10 is the positive element immediately before the stop. Its high Abbe number directly satisfies the patent's condition
for the object-side stop-adjacent lens. The meniscus starts G4 and guides the converging bundle toward the fixed aperture
without introducing an additional moving stop assembly.

### D2: L11–L12 — Cemented Positive/Negative Pair

L11: `nd = 1.43700`, `νd = 95.1`. Glass: 437951 UED fluorophosphate-crown class, vendor unresolved. Standalone
`f = +136.7850 mm`.

L12: `nd = 1.84666`, `νd = 23.8`. Glass: 847238 dense-flint class, vendor unresolved. Standalone
`f = −27.7749 mm`.

L11 is the positive element immediately after the stop and carries the highest Abbe number in the prescription. L12 is a
strong dense-flint negative partner. Their normalized cemented-block EFL is −34.660921 mm. This is a clear example of the
difference between standalone and cemented power: L11 is positive, but the strong L12 contribution makes D2 net
negative.

The high-Abbe/low-Abbe pairing provides a local chromatic degree of freedom around the aperture stop. The patent's
adhesive shell is collapsed into L12's 1.21 mm center thickness at the retained surface 23 junction.

### D3: L13–L14 — Cemented Negative/Positive Pair

L13: `nd = 1.84666`, `νd = 23.8`. Glass: 847238 dense-flint class, vendor unresolved. Standalone
`f = −152.1903 mm`.

L14: `nd = 1.49700`, `νd = 81.6`. Glass: 497816 ED fluorophosphate-crown class, vendor unresolved. Standalone
`f = +59.2087 mm`.

D3 has a normalized cemented-block EFL of +100.476310 mm. L13 is a weak negative meniscus relative to L14's stronger
positive power, so the pair is net positive. The wide separation in Abbe number provides a chromatic balancing pair while
keeping the second element in the ED-class position identified by Panasonic's stabilization-group description.

The retained surface 27 junction carries L14's index and element identity, and the shell thickness is absorbed into
L14's 6.01 mm center thickness.

### L15 — Biconvex Positive, two aspherical surfaces

`nd = 1.58578`, `νd = 59.5`. Glass: SCHOTT P-SK57Q1 catalog equivalent; production supplier unspecified.
Standalone `f = +60.7002 mm`.

L15 is the only aspherical element in the model. Both surface 30A and surface 31A carry polynomial aspheres. It follows
D3 with only a 0.3 mm air gap, forming the third member of the probable L13–L15 stabilization subgroup. The centered
three-element block has a computed standalone EFL of +40.027044 mm in the final normalized arrays.

SCHOTT P-SK57Q1 (`nd = 1.58600`, `νd = 59.5`) supplies a coefficient-backed curve within `0.00022` of the patent
index and at the same Abbe number. It is used as a catalog equivalent; neither the patent nor Panasonic identifies the
production melt supplier.

### D4: L16–L17 — Cemented Negative/Positive Pair

L16: `nd = 1.69350`, `νd = 53.2`. Glass: 694532 lanthanum-crown class, vendor unresolved. Standalone
`f = −73.1786 mm`.

L17: `nd = 1.85883`, `νd = 30.0`. Glass: 859300 dense-flint class, vendor unresolved. Standalone
`f = +57.7674 mm`.

D4 is net positive with a normalized cemented-block EFL of +226.504417 mm. Its individual elements are much stronger
than the net block, indicating substantial cancellation. Positioned at the rear of fixed G4, the pair completes the
stationary relay before the two moving focus groups.

The surface 33 junction uses L17's index and element identity. The absorbed adhesive thickness gives L17 a 3.71 mm
center thickness in the normalized model.

### D5: L18–L19 — Cemented First Focus Group

L18: `nd = 1.86966`, `νd = 20.0`. Glass: 870200 very dense-flint class, vendor unresolved. Standalone
`f = +53.4213 mm`.

L19: `nd = 1.70154`, `νd = 41.1`. Glass: SUMITA BASF7 catalog equivalent; production supplier not identified. Standalone
`f = −28.4135 mm`.

D5 is the complete G5 focus group. Its normalized cemented-block and group EFL are both −61.276693 mm. L18 is
plano-convex and positive, but L19 is sufficiently strong and negative to determine the pair's net sign. This distinction
is important because the patent's focus-sensitivity condition concerns the net moving group, not either element in
isolation.

The data model collapses the final adhesive shell into L19's 0.71 mm center thickness. G5 reverses during zooming and is
published to move toward the image during focusing from infinity toward close range.

### L20 — Biconvex Positive Second Focus Group

`nd = 1.84666`, `νd = 23.8`. Glass: 847238 dense-flint class, vendor unresolved. Standalone and group
`f = +64.9303 mm`.

L20 is the complete G6 focus group. Its positive sign opposes the negative G5 group, allowing the two groups to vary
spherical aberration, field curvature, and image conjugacy through coordinated motion. The patent states that G6 moves
toward the object during close focusing, opposite to G5.

### L21 — Biconcave Negative

`nd = 1.84666`, `νd = 23.8`. Glass: 847238 dense-flint class, vendor unresolved. Standalone
`f = −39.5016 mm`.

L21 is the strong negative lead element of fixed rear group G7. Its position after the positive focus group establishes a
negative rear relay before the final meniscus. The element's short standalone focal length supplies most of G7's negative
power.

### L22 — Positive Meniscus, convex to object

`nd = 1.71700`, `νd = 47.9`. Glass: HOYA LAF3 catalog equivalent; production supplier not identified. Standalone
`f = +77.1082 mm`.

L22 partially offsets L21 but does not reverse the group sign; G7 remains negative at −81.848742 mm. Its rear surface is
the last active refracting surface. The following physical plate in the patent is omitted, and the image plane is reached
through the documented 33.4744936709 mm air-equivalent spacing.

## Glass Identification and Selection

The patent publishes only d-line refractive indices and Abbe numbers. It does not name glass manufacturers, catalog
codes, Sellmeier coefficients, C/F/g-line indices, or anomalous partial-dispersion values. Catalog names in the data
file therefore describe coefficient-backed optical equivalents rather than asserting the production melt vendor.

| Stored glass class | `nd` | `νd` | Elements | Function in the prescription |
|---|---:|---:|---|---|
| 904313 lanthanum dense-flint class | 1.90366 | 31.3 | L1, L7 | High-index front negative and positive cemented partner |
| 497816 ED fluorophosphate-crown class | 1.49700 | 81.6 | L2, L10, L14 | Three high-Abbe positive positions matching the marketed ED count |
| 437951 UED fluorophosphate-crown class | 1.43700 | 95.1 | L3, L11 | Two very-high-Abbe positive positions matching the marketed UED count |
| 606437 barium-flint class | 1.60562 | 43.7 | L4 | Positive lead member of G2 |
| 697555 lanthanum-crown class | 1.69680 | 55.5 | L5 | Strong negative meniscus in G2 |
| 487704 fluor-crown class | 1.48749 | 70.4 | L6 | High-Abbe negative member of D1 |
| 603607 dense-crown class | 1.60311 | 60.7 | L8 | Rear negative member of G2 |
| 805396 dense barium-flint class | 1.80450 | 39.6 | L9 | Compact positive compensator |
| P-SK57Q1 catalog equivalent (SCHOTT) | 1.58578 | 59.5 | L15 | Coefficient-backed molded-crown match; production supplier unidentified; double-sided aspherical element |
| 694532 lanthanum-crown class | 1.69350 | 53.2 | L16 | Negative member of D4 |
| 859300 dense-flint class | 1.85883 | 30.0 | L17 | Positive member of D4 |
| 870200 very dense-flint class | 1.86966 | 20.0 | L18 | Positive member of negative focus pair D5 |
| BASF7 catalog equivalent (SUMITA) | 1.70154 | 41.1 | L19 | Coefficient-backed coordinate match; production supplier unidentified; negative member of D5 |
| 847238 dense-flint class | 1.84666 | 23.8 | L12, L13, L20, L21 | Strong negative partners and compact rear positive focus element |
| LAF3 catalog equivalent (HOYA) | 1.71700 | 47.9 | L22 | Exact coordinate match; production supplier unidentified; positive rear meniscus |

The main chromatic strategy is distributed rather than confined to one achromat. High-Abbe positive elements appear in
the front collector, immediately before and after the stop, and inside the probable stabilization block. They are paired
with high-index, low-Abbe negative elements in D2 and D3 and with other negative members throughout G2 and the rear
relay.

Panasonic's ED/UED terminology is a manufacturer statement about the production lens. The data file records the matching
patent classes and uses coefficient-backed catalog equivalents where the coordinates support them, without claiming a
production supplier. No APO or anomalous-partial-dispersion claim is made because the model contains no `nC`, `nF`,
`ng`, or `dPgF` fields.

## Focus Mechanism

The production lens and the patent use a rear double-focus arrangement. G5 is a negative cemented pair and G6 is a
single positive element. The patent states that, when focusing from infinity toward a close object, G5 moves toward the
image while G6 moves toward the object. [1, ¶0123]

Panasonic explains that locating both focus groups at the rear reduces their diameter and mass relative to a front-group
focus system. Independent motion also allows the two groups to balance spherical aberration, field curvature, and focus
breathing as object distance changes. [3]

The patent does not publish close-focus group travels, close-focus spacing rows, or a complete object-distance and
magnification table. The manufacturer specifies a 0.95 m closest focusing distance and approximately 0.21× maximum
magnification, but those rounded product values do not uniquely determine two independent group trajectories. [2]

The data file therefore has focus status `NO_INTERNAL_RECONSTRUCTION`. Every close-focus member of the six `var` arrays
is identical to its corresponding infinity value. The 0.95 m field is retained as product metadata only; the viewer does
not simulate the internal close-focus state. No focus travel is inferred or concealed in the rear image spacing.

## Aspherical Surfaces

L15 carries the only two aspherical surfaces: 30A and 31A. The patent uses the standard conic convention

$$
Z(h)=\frac{h^2/R}{1+\sqrt{1-(1+K)(h/R)^2}}+\sum A_n h^n,
$$

where `K = 0` is the spherical-base case. The printed `K` values are entered directly; no alternate-κ conversion is
required. No scale factor is applied, so none of the polynomial coefficients is transformed.

| Surface | K | A4 | A6 | A8 | A10 | A12 | A14 |
|---|---:|---:|---:|---:|---:|---:|---:|
| 30A | 9.97221E+00 | −3.94139E−06 | −6.42008E−09 | 9.84655E−11 | −2.27304E−13 | −2.10054E−17 | 2.31090E−18 |
| 31A | −5.11777E+00 | 9.64000E−07 | −3.12961E−09 | 9.40918E−11 | −1.49427E−13 | −4.27405E−16 | 3.25178E−18 |

At the verified authored semi-diameter of 16.6 mm, surface 30A departs from its vertex sphere by +0.264254 mm and has an
actual rim-slope angle of 23.3224°. Its validator conic limit is 24.541918 mm, leaving substantial radial margin. At the
verified 16.7 mm semi-diameter, surface 31A departs from its vertex sphere by +0.750268 mm and has a rim-slope angle of
5.0517°.

These departures are computed at the model's inferred clear apertures, not at patent-published semi-diameters. The patent
provides no clear-aperture table. Panasonic states that the production design uses one aspherical lens and describes a
new processing method for that element, but the public account does not establish the production glass supplier. [3]

## Chromatic Correction Strategy

The high-Abbe elements are distributed at optically influential locations. L2 and L3 sit in the fixed front collector,
where axial ray heights are large. L10 and L11 straddle the aperture stop. L14 is the positive ED-class element inside
the probable stabilization block. This distribution corresponds to Panasonic's published count of three ED and two UED
elements. [2; 3]

The two stop-adjacent elements also satisfy the patent's explicit chromatic conditions. The object-side lens L10 has
`νd = 81.6`, and the image-side lens L11 has `νd = 95.1`; both exceed the stated limit of 65. [1, ¶¶0171–0174 and Table
13]

The prescription also uses several high-index, low-Abbe elements as compact power partners. D2 pairs the very-high-Abbe
L11 with the strong 847238-class L12, while D3 pairs the same dense-flint class at L13 with the ED-class L14. These are
local achromatizing relationships, but the available data is insufficient to characterize secondary spectrum or claim
apochromatic correction.

## Image Stabilization

Panasonic describes the production O.I.S. group as a three-element negative–positive–positive block. The second element
is ED and the third is aspherical. The selected prescription contains one unique sequence satisfying those conditions:
L13 negative, L14 positive with `νd = 81.6`, and L15 positive with two aspherical surfaces. L13–L15 is therefore modeled
as the probable stabilization subgroup. This is an author inference from the manufacturer architecture and prescription,
not an explicit label in the patent numerical table. [3]

In the centered infinity model, L13–L15 has a standalone block EFL of +40.027044 mm. That value describes the paraxial
power of the centered three-element block; it is not a decentered stabilization sensitivity or an in-situ O.I.S. travel
measurement.

Neither the patent example nor the manufacturer source publishes the subgroup's decenter amplitude, actuator trajectory,
or stabilized off-axis prescription. The data file therefore contains no decentered O.I.S. state or stabilization
control. The O.I.S. identification is recorded only in the element roles and interpretive analysis.

## Conditional Expressions

The patent gives four conditions and reports the third example's values in Table 13. These checks are evaluated from the
raw patent prescription because the inequalities use the patent's physical total length and adhesive/plate model.

| Patent condition | Verified source-model result | Published result | Status |
|---|---:|---:|---|
| `−0.23 < f2/TTL < −0.15` | −0.217849687 | −0.218 | Satisfied |
| `−3.2 < (1−β1²)β2² < −2.4` | −2.827583209 | −2.83 | Satisfied |
| `νd1 > 65` before the stop | 81.6 | 81.6 | Satisfied |
| `νd2 > 65` after the stop | 95.1 | 95.1 | Satisfied |

For the focus-sensitivity expression, the independent raw-source trace gives `β1 = 2.283236407` and
`β2 = 0.819225163`. A direct finite-difference translation of G5 gives an image sensitivity of −2.827583208, confirming
the expression's value and sign. These are audit computations of the selected patent example, not close-focus states in
the normalized viewer model.

## Verification Summary

The final TypeScript arrays were independently traced with sequential height/reduced-angle propagation and equivalent
ABCD matrices. The normalized states are:

| State | Computed EFL | Fixed-stop f-number | Air-equivalent track | Gaussian BFD from last active vertex |
|---|---:|---:|---:|---:|
| Wide | 72.459504623 mm | 2.832625019 | 224.284393671 mm | 33.496096474 mm |
| Middle | 120.016563673 mm | 2.894433760 | 224.284293671 mm | 33.461460762 mm |
| Tele | 193.024881576 mm | 2.928545591 | 224.284293671 mm | 33.471741039 mm |

The small difference between the fixed 33.4744936709 mm rear spacing and each Gaussian focus distance is the disclosed
result of replacing the proprietary adhesive shells and rear plate with the normalized LensVisualizer model. It is not a
correction to the patent table.

Surface-by-surface Petzval summation using `φ/(n·n′)` gives `0.001173825349 mm⁻¹`, corresponding to a reciprocal magnitude
of 851.915492 mm under the stated sign convention. The value describes the paraxial surface-power sum; it is not a direct
measurement of the final best-focus field surface.

The patent publishes no semi-diameters. The authored values are inferred from the solved 16.2496432811 mm stop,
paraxial marginal and chief-ray envelopes at all three zoom states, the patent section drawing, and mechanical limits.
They pass the local geometry gate with a minimum positive edge thickness of 0.476597 mm, a maximum actual rim-slope
angle of 36.994770°, a minimum cross-gap clearance of 0.371128 mm, and a maximum cross-gap intrusion fraction of
0.894900. Representative on-axis rays pass all modeled clear apertures. No representative ray first clips at a cemented
junction.

The stop location is source-published, but its diameter and all element semi-diameters are modeling inferences. The rear
parallel plate is omitted with its optical effect retained in air-equivalent spacing. No dummy or mechanical surfaces are
included. No close-focus trajectory, O.I.S. decenter, spectral line data, or scale transformation is invented.

## Sources

1. Takehiro Nishioka and Hisayuki Ii, *Zoom Lens System, and Lens Barrel, Image Capture Device, and Camera System
   Including the Zoom Lens System*, US 2021/0132345 A1, published 6 May 2021. Selected source: Third Example of Numerical
   Values, Tables 7, 8, and 9A–9D.
2. Panasonic, “LUMIX S PRO 70-200mm F2.8 O.I.S. Lens S-E70200,” official product specifications:
   https://shop.panasonic.com/products/s-series-pro-70-200mm-f2-8-l-mount-lens
3. Panasonic Optical Design Department, “Third Edition: LUMIX S PRO 70-200mm F2.8 O.I.S.”:
   https://www.panasonic.com/au/consumer/lumix-cameras-video-cameras/lumix-s-series-full-frame-cameras-learn/article/this-is-the-optical-design-department-third-edition.html
4. Panasonic North America, “Panasonic Launches Two New L-Mount Interchangeable Lenses for the LUMIX S Series,”
   6 November 2019:
   https://na.panasonic.com/news/panasonic-launches-two-new-l-mount-interchangeable-lenses-for-the-lumix-s-series-full-frame-digital-single-lens-mirrorless-camera
5. Companion LensVisualizer data, audit, verification script, and calculation-results artifacts for
   `PanasonicLumixSPro70200mmf28OIS`.
6. HOYA optical-glass Zemax catalog, 7 July 2026, and SUMITA all-glass Zemax catalog, 7 November 2025 — coefficient
   sources for the LAF3 and BASF7 catalog-equivalent classifications.
