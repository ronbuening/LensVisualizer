## Patent Reference and Design Identification

**Patent:** US 5,402,268<br />
**Filed:** March 14, 1994; continuation of application filed April 21, 1993<br />
**Priority:** Japan, May 18, 1992 (JP 4-24480)<br />
**Granted:** March 28, 1995<br />
**Inventor:** Wataru Tatsuno<br />
**Assignee:** Nikon Corporation<br />
**Title:** “Telephoto Lens System Allowing Short-Distance Photographing Operation”<br />
**Embodiment analyzed:** Example 1 / First Embodiment, Fig. 1, Table 1, claim 14

The prescription models the NIKON AF MICRO-NIKKOR 200mm f/4D IF-ED with the first numerical embodiment of
US 5,402,268. The patent does not identify a commercial lens by product name, so the production correlation is an
inference rather than a manufacturer-confirmed patent attribution. The correlation is nevertheless supported by several
independent points of agreement.

1. The patent gives a 200.0 mm, f/4.0 system; the independently traced Example 1 prescription has an effective focal
   length of 200.145720 mm. Nikon specifies the production lens as 200 mm f/4.
2. Both the patent embodiment and the production lens contain 13 elements in 8 air-separated physical groups.
3. The patent gives a full field of 12.33°, while Nikon specifies 12°20′ for FX/35 mm coverage.
4. Example 1 publishes focusing from infinity to β = −1.0000; Nikon specifies 1:1 maximum reproduction at a marketed
   minimum focus distance of 0.5 m and describes the production lens as an internal-focusing design.
5. The production optical section marks two ED elements in the front section. Their positions correspond to L12 and L2,
   the two Example 1 elements with the unusually high νd = 82.6 coordinate.
6. The sequence of meniscus, cemented-doublet, and rear-group shapes in Nikon's optical section follows the topology of
   Fig. 1 closely, including the long separation inside the rear fixed group.

The selected embodiment is used at its native scale. No focal-length scaling is applied, and no cover glass, filter,
sensor plate, inactive dummy plane, or mechanical plane is added to or removed from the patent prescription. The 21
published refracting surfaces are all spherical, so no aspheric coefficient conversion or scaling rule is involved.

Where the PDF text layer conflicts with the rendered numerical tables, the rendered patent page is treated as the source
authority; no rendered numerical value is altered. The source caption “Variable Interval in Zooming” is retained as a
source wording anomaly: Example 1 is a fixed-focal-length prime and the three columns are
infinity, β = −0.5000, and β = −1.0000 focus states. A second source tension is real rather than an OCR error: the prose
says G1 moves objectward during close focusing, while the tabulated 1:1 endpoint returns G1 to its infinity axial
position. The analysis follows the published numerical table.

## Optical Architecture

Example 1 is a four-functional-group internal-focusing macro prime with a **positive / positive / negative / positive**
power sequence. The 13 glass elements form eight air-separated physical groups, five of which are cemented doublets. G1
and G3 move during focusing; G2 and G4 remain fixed. The architecture therefore separates the major focusing action from
the long rear positive relay and avoids moving the entire lens assembly to reach 1:1.

| Functional group | Elements | Computed in-situ EFL | Focus behavior | Principal structural role |
|---|---|---:|---|---|
| G1 | L11 + L12, L2 | +114.998349 mm | Nonlinear motion | Front positive group with two ED-class positive elements |
| G2 | L31 + L32 | +243.701007 mm | Fixed | Weak positive fixed group and reference for the moving groups |
| G3 | L41 + L42, L51 + L52 | −47.991137 mm | Moves imageward | Strong negative internal focus group |
| G4 | L61 + L62, L7, L8 | +119.999894 mm | Fixed | Rear positive group with a long internal air interval |

The patent itself calls the invention a telephoto lens system. Under the project's stricter geometric classification,
however, the final data have S1-to-image track / EFL = 1.114546, so the prescription is not labeled “telephoto” by the
project rule requiring a ratio below 1. It is also not retrofocus: BFD / EFL = 0.294604, far below the criterion
BFD > EFL. The word “telephoto” therefore appears here only as part of the patent's own terminology, not as the
computed project architecture label.

The rear section is intentionally extended. The patent makes the axial interval DA between cemented L6 and L7 part of
its correction strategy, and Example 1 sets that interval to 46.5 mm. This separates the last two singlets from the
front of G4 and gives the rear group a role beyond simple positive relay power: the patent specifically relates this
spacing to control of oblique rays and distortion.

## Element-by-Element Analysis

### L1 — L11 + L12 Cemented Positive Doublet

**L11:** nd = 1.80384, νd = 33.9. Glass: E-LAFH2 catalog equivalent (patent 804339; production supplier
unspecified).
Standalone f = −189.502331 mm.<br />
**L12:** nd = 1.49782, νd = 82.6. Glass: J-FKH1 catalog equivalent (patent 498826; production supplier
unspecified). Standalone f = +122.468927 mm.

L11 is the negative meniscus at the object side of the system; L12 is the biconvex positive rear member of the cemented
pair. In isolation their powers are opposite and considerably stronger than the net doublet, whose computed cemented EFL
is +344.592347 mm. This distinction matters: L11 is not evidence that the front group is negative. The cemented L1 unit
is weakly positive, and with L2 it forms the substantially stronger positive G1.

The patent singles out the power of the front negative lens through condition (2), fA/f1. Its discussion states that an
excessively strong L11 makes spherical-aberration correction difficult, while insufficient negative power weakens both
spherical- and chromatic-aberration correction. The front negative member therefore has a deliberately constrained role
inside a positive moving group rather than serving as a separate negative front group.

L12 carries the same nd/νd pair as L2. Nikon's production optical section marks the corresponding two front positive
elements as ED glass. J-FKH1 supplies a coefficient-backed spectral model at the same coordinate, but the label is a
catalog-equivalent assignment and does not claim that Hikari supplied Nikon's production melt.

### L2 — Positive Meniscus

**nd = 1.49782, νd = 82.6. Glass: J-FKH1 catalog equivalent (patent 498826; production supplier unspecified).
f = +171.464632 mm.**

L2 is a positive meniscus, convex toward the object, separated from L1 by only 0.3 mm of air. Together, L1 and L2 form
G1 with a computed in-situ EFL of +114.998349 mm. L2 is the second νd = 82.6 element and the second position that aligns
with an ED-marked element in Nikon's production section.

Because G1 moves during focus, L2 participates in the patent's deliberate change of front-group contribution at close
range. The source does not assign an independent aberration function to L2, so its role is best described at the group
level: it supplies positive power and low-dispersion positive glass within the moving front group.

### L3 — L31 + L32 Cemented Positive Doublet

**L31:** nd = 1.79631, νd = 40.9. Glass: NBFD2 catalog equivalent (patent 796409; production supplier unspecified).
Standalone f = −104.311476 mm.<br />
**L32:** nd = 1.60311, νd = 60.7. Glass: J-SK14 catalog equivalent (patent 603607; production supplier unspecified).
Standalone f = +71.679576 mm.

L31 and L32 form the fixed positive G2. The cemented pair has a computed EFL of +243.701007 mm, identical to G2 because
no other element belongs to that functional group. The negative-front/positive-rear pairing allows the fixed group to
remain weakly positive while presenting a cemented interface of substantial curvature.

Mechanically, G2 is the fixed reference between the two moving groups. The focus law changes d5 between G1 and G2 and
d8 between G2 and G3, while the G2 glass itself remains stationary. Its relatively weak positive power also appears in
condition (1), which constrains f2/f1 and thereby limits how strong the moving front group can become relative to this
fixed positive group.

### L4 — L41 + L42 Cemented Negative Doublet

**L41:** nd = 1.62280, νd = 57.0. Glass: S-BSM10 catalog equivalent (patent 623570; production supplier
unspecified). Standalone f = −60.320053 mm.<br />
**L42:** nd = 1.80384, νd = 33.9. Glass: E-LAFH2 catalog equivalent (patent 804339; production supplier
unspecified). Standalone f = +73.492675 mm.

The L4 pair is a meniscus-shaped cemented negative doublet with computed cemented EFL −276.455203 mm. Although its net
power is modest compared with the following L5 doublet, its cemented interface is explicitly part of the patent's design
conditions. Condition (3) constrains the radius of that interface relative to whole-system focal length and the index
difference across the cement.

The patent explains condition (3) in terms of Petzval balance, astigmatism, and spherical aberration. The interface is
therefore not merely a convenient cement line: its surface power is one of the variables used to keep field curvature and
astigmatic correction in balance without making spherical correction unmanageable.

### L5 — L51 + L52 Cemented Negative Doublet

**L51:** nd = 1.80518, νd = 25.4. Glass: S-TIH6 catalog equivalent (patent 805254; production supplier
unspecified). Standalone f = +160.184962 mm.<br />
**L52:** nd = 1.62041, νd = 60.1. Glass: J-SK16 catalog equivalent (patent 620601; production supplier
unspecified). Standalone f = −42.921845 mm.

L5 is the stronger of the two negative cemented units in G3. Its computed cemented EFL is −57.630123 mm. In combination
with L4 and their 3.7 mm air separation, the complete moving G3 reaches −47.991137 mm.

This strong negative power is central to the internal-focus mechanism. As G3 moves imageward, the interval from fixed G2
increases while the interval to fixed G4 decreases by almost the same amount. The patent's discussion treats that G3
motion as the main focusing displacement and uses the smaller nonlinear G1 displacement to suppress the aberration
variation that would remain if G3 moved alone.

### L6 — L61 + L62 Cemented Positive Doublet

**L61:** nd = 1.68893, νd = 31.1. Glass: S-TIM28 catalog equivalent (patent 689311; production supplier
unspecified). Standalone f = −107.274379 mm.<br />
**L62:** nd = 1.62041, νd = 60.1. Glass: J-SK16 catalog equivalent (patent 620601; production supplier
unspecified). Standalone f = +52.477312 mm.

L6 is a cemented positive doublet at the front of fixed G4. Its computed cemented EFL is +99.174536 mm. The patent's
condition (4) applies directly to the L61/L62 cemented interface and relates its surface power to correction at the
minimum-focus side, especially spherical aberration and oblique-image behavior.

L6 does not operate as an isolated +99 mm objective. Its effect must be read together with the long DA interval, negative
L7, positive L8, and their separations. Those components form a +119.999894 mm in-situ G4 while keeping the image plane
at the published back focus.

### L7 — Negative Meniscus

**nd = 1.77279, νd = 49.4. Glass: M-TAF1 catalog equivalent (patent 773494; production supplier unspecified).
f = −113.254745 mm.**

L7 is a negative meniscus, convex toward the image, positioned 46.5 mm behind L6. The patent makes this long separation a
formal design variable, DA, and condition (5) constrains DA/F. Its discussion says that increasing the interval can
strengthen correction of oblique rays but also enlarges the required rear-element diameter and makes back-focus control
more difficult; reducing it too far weakens distortion correction.

Accordingly, L7's placement is at least as significant as its standalone negative power. It is the first singlet in the
widely spaced rear portion of G4 and works with L8 to shape the final positive group rather than acting as an independent
negative group.

### L8 — Positive Meniscus

**nd = 1.54814, νd = 45.9. Glass: E-FEL1 catalog equivalent (patent 548459; production supplier unspecified).
f = +176.972875 mm.**

L8 is the final positive meniscus and the last glass element before the published back-focus interval. It follows L7 by a
0.4 mm air gap, so the negative-positive pair closes the long rear group compactly after the large L6-to-L7 separation.
The source does not assign a separate conditional expression to L8; its verified role is therefore described through the
net G4 behavior rather than by attributing an unsupported single-element aberration function.

The final G4 remains fixed throughout focusing. That fixed rear reference is consistent with the patent's goal of
limiting focus-induced mechanical extension while preserving a long working distance at high magnification.

## Glass Identification and Selection

The patent supplies only d-line refractive index and Abbe number. It does not name a glass manufacturer, glass catalog,
partial-dispersion value, or C/F/g-line index. The data file preserves those patent coordinates exactly while assigning
the closest compatible coefficient-backed catalog entry as an optical dispersion model. These are catalog equivalents,
not claims about Nikon's historical supplier or production melt.

| Catalog-equivalent spectral model | Patent nd | Patent νd | Elements | Coordinate comparison |
|---|---:|---:|---|---|
| E-LAFH2 | 1.80384 | 33.9 | L11, L42 | Exact nd; catalog νd differs by −0.01 |
| J-FKH1 | 1.49782 | 82.6 | L12, L2 | Exact nd; catalog νd differs by −0.03; ED-position equivalent |
| NBFD2 | 1.79631 | 40.9 | L31 | nd differs by +0.00089; catalog νd differs by +0.24 |
| J-SK14 | 1.60311 | 60.7 | L32 | Exact nd; catalog νd differs by −0.01 |
| S-BSM10 | 1.62280 | 57.0 | L41 | Exact rounded six-digit code; catalog νd differs by +0.05 |
| S-TIH6 | 1.80518 | 25.4 | L51 | Exact rounded six-digit code; catalog νd differs by +0.03 |
| J-SK16 | 1.62041 | 60.1 | L52, L62 | Exact nd; catalog νd differs by +0.15 |
| S-TIM28 | 1.68893 | 31.1 | L61 | Exact rounded six-digit code; catalog νd differs by −0.03 |
| M-TAF1 | 1.77279 | 49.4 | L7 | nd differs by −0.00029; catalog νd differs by +0.06 |
| E-FEL1 | 1.54814 | 45.9 | L8 | Exact nd; catalog νd differs by −0.08 |

All 13 elements now resolve to compatible catalog curves, so the viewer can perform coefficient-backed spectral tracing
without inventing patent line indices. The assignments still do not prove apochromatic correction, anomalous partial
dispersion, a specific secondary-spectrum behavior, or a production supplier. The two νd = 82.6 elements are described
as ED-class because their locations coincide with Nikon's two ED-marked production elements; that production correlation
is distinct from identifying a particular glass maker.

## Focus Mechanism

The patent publishes the focus law directly, so no close-focus movement is reconstructed. G2 and G4 remain fixed; G3
moves toward the image while G1 follows a separate convex nonlinear path toward the object side at intermediate
magnification. The numerical table gives three source states:

| Source state | d0, object to S1 | d5, G1→G2 | source d8, G2→G3 | d14, G3→G4 | Bf |
|---|---:|---:|---:|---:|---:|
| Infinity | ∞ | 6.6432 mm | 5.1405 mm | 45.1242 mm | 58.9638 mm |
| β = −0.5000 | 480.7237 mm | 14.2044 mm | 17.7426 mm | 32.5222 mm | 58.9638 mm |
| β = −1.0000 | 272.5885 mm | 6.6432 mm | 37.1142 mm | 13.1506 mm | 58.9638 mm |

Relative to infinity, G3 moves 12.6021 mm imageward at β = −0.5 and 31.9737 mm imageward at 1:1. The adjacent d8 and
d14 gaps conserve their sum to 0.0001 mm, consistent with source rounding. At the intermediate state, G1 moves
7.5612 mm objectward; at the 1:1 endpoint, the tabulated d5 returns to its infinity value, so G1 has zero net endpoint
displacement despite its intermediate excursion.

The nonlinear G1 reversal is stored explicitly as the β = −0.5 focus keyframe. The final data therefore reproduce all
three published rows, including d5 returning to the same value at infinity and 1:1 after its intermediate excursion.
No pseudo-zoom, aberration-control slider, or invented focus reconstruction is used to force the intermediate G1 excursion
into the viewer.

The G3 motion is nearly linear across the keyframed representation. The published β = −0.5 d8 value corresponds to
mechanical travel fraction 0.3941396 between the two endpoint d8 values; linear interpolation of d14 at that same
fraction gives 32.522139 mm, only 0.000061 mm from the published 32.5222 mm. The explicitly authored middle row preserves
both that paired G3 motion and G1's nonlinear reversal at the source state.

The patent's 1:1 object distance is measured to the first optical vertex, not to the camera image plane. Adding the
verified S1-to-image track gives 495.6603 mm object-to-image-plane distance at β = −1.0000, consistent with Nikon's
rounded 0.5 m marketed minimum focus distance. Nikon's separately published approximately 0.26 m working distance at
1:1 uses a different mechanical reference and is not substituted for patent d0.

## Chromatic Correction Strategy

The most conspicuous glass choice is concentrated in G1. L12 and L2 both use nd = 1.49782, νd = 82.6, and occupy the
two locations marked as ED glass in Nikon's production optical section. They are paired with the strongly refracting,
lower-Abbe L11 front member and with the remainder of the positive moving group. This is consistent with a front-loaded
chromatic-correction strategy appropriate to a 200 mm lens, while keeping the low-dispersion elements inside the group
that also participates in focus compensation.

The patent itself gives one explicit chromatic clue: its discussion of condition (2) states that if the negative L11
becomes too weak, correction of both spherical and chromatic aberration becomes inadequate. The chromatic design is
therefore not reducible to “two ED elements”; it depends on the power balance between those low-dispersion positive
elements and the front negative member.

Beyond that, the source data do not justify stronger historical claims. The catalog-equivalent curves support modeled
wavelength behavior, but the patent itself provides only nd and νd. The resulting spectral trace must not be read as a
measured production melt, proof of APO correction, or proof of Nikon's glass supplier.

## Aberration Correction Strategy

The patent's central design idea is that G3 motion alone is not enough to maintain correction from infinity to high
magnification. It states that when the negative third group is used as the sole focusing group, suppressing the focus
variation of astigmatism tends to leave spherical aberration over-corrected at intermediate magnification. The first
positive group is therefore moved nonlinearly so that its contribution changes most strongly in the middle of the focus
range rather than simply translating monotonically to the 1:1 endpoint.

The cemented interface in L4 is then used as a Petzval/astigmatism control term through condition (3), while the L6
cemented interface and the long DA spacing in G4 are constrained by conditions (4) and (5). The patent links these rear
choices to spherical correction at the minimum-focus side, oblique-ray behavior, astigmatism, distortion, rear-element
diameter, and back-focus feasibility.

Independent computation on the final prescription gives a Petzval sum of +0.000478851989 mm⁻¹ using the project
surface-by-surface definition Σφ/(n·n′). Its reciprocal magnitude is 2088.327966 mm. No sign-convention-dependent
“Petzval radius” is assigned to that reciprocal.

The combination is thus a coordinated focus-and-field correction strategy: a strongly negative moving G3 supplies the
large focus displacement, nonlinear G1 motion compensates the mid-range aberration change, and the fixed rear group uses
cemented-interface power plus a large internal air interval to manage the oblique field while preserving the published
back focus.

## Conditional Expressions

The seven conditional expressions stated for Example 1 all pass when recomputed from the final data. Group focal lengths
are calculated with the published in-situ internal spacings; fA is the standalone focal length of L11, and the cemented
surface terms use the actual refractive indices on the two sides of the specified interfaces.

| Patent condition | Recomputed value | Patent rounded value | Required interval |
|---|---:|---:|---|
| f2 / f1 | 2.119169608 | 2.12 | 1.0 < value < 3.0 |
| fA / f1 | −1.647870006 | −1.65 | −3.0 < value < −1.4 |
| ra / [F(nb − na)] | 0.866966648 | 0.87 | 0.5 < value < 1.0 |
| rb / [F(nd − nc)] | −5.076205149 | −5.08 | −7.0 < value < −2.0 |
| DA / F | 0.232330724 | 0.23 | 0.05 < value < 0.35 |
| f12 / |f3| | 1.667206077 | 1.67 | 1.3 < value < 2.2 |
| f4 / |f3| | 2.500459482 | 2.50 | 1.5 < value < 2.7 |

These results distinguish three power levels that should not be conflated. Individual element focal lengths describe
each singlet isolated in air; the cemented values describe the bonded pairs as isolated units; and the G1–G4 values
include each group's actual internal air spacings. The patent conditions use the latter group quantities except where the
formula explicitly calls for the standalone L11 focal length or a particular cemented interface.

## Aperture Stop and Clear-Aperture Model

The patent gives f/4.0 but does not publish an aperture-stop plane, stop diameter, clear semi-diameter, or aperture-height
table. The stop and clear apertures in the data are therefore modeling inferences, not patent facts.

For the viewer model, `STO` is placed at the midpoint of the infinity d8 air interval, 2.57025 mm after surface 8, and is
held fixed relative to G2. The source d8 gap is represented as the fixed S8-to-STO segment plus the variable STO-to-S9
segment; the totals remain 5.1405 mm at infinity and 37.1142 mm at 1:1. The modeled stop semi-diameter is 19.097853 mm.
Paraxial propagation through the actual pre-stop data gives an entrance-pupil semi-diameter of 25.018216 mm and a modeled
wide-open f-number of 3.999999913 at the computed EFL. These are model outputs from an inferred stop, not source-published
pupil dimensions.

The patent also supplies no element clear apertures. The authored semi-diameters were constrained from on-axis and
off-axis rays across all three published focus states, the relative proportions of Nikon's production optical section,
and the current edge-thickness, actual-rim-slope, cross-gap, and containment rules. In the final geometry the minimum
element edge thickness is 0.619565 mm, the maximum actual rim-slope angle is 40.736050°, and the maximum non-stop shared-
gap intrusion fraction is 0.894226. L5 uses a 16.0 mm front and 17.0 mm cemented/rear semi-diameter so its displayed
height more closely follows Fig. 1 while retaining physical edge and gap clearance. The full on-axis f/4 pupil and the
viewer's default visible off-axis fan remain contained in all three source states. Full-field/full-pupil corner bundles
may vignette at exterior element rims; that is treated as physical wide-open vignetting rather than hidden by layout
controls.

## Verification Summary

Independent reduced-angle y–ν tracing and ABCD multiplication agree to machine precision on the final TypeScript surface
array. The primary first-order results are:

| Quantity | Final computed value | Source comparison |
|---|---:|---|
| Effective focal length | 200.145720214 mm | Patent detailed value 200.1499 mm |
| Back focal length from S21 | 58.961743933 mm | Patent Bf 58.9638 mm |
| S1-to-image track at infinity | 223.0717 mm | Computed from the final data |
| Modeled f-number | 3.999999913 | Patent/data nominal f/4.0; inferred stop model |
| Petzval sum | +0.000478851989 mm⁻¹ | Surface-by-surface computation |
| S1-to-image / EFL | 1.114546 | Does not meet the project telephoto criterion |
| BFD / EFL | 0.294604 | Does not meet the project retrofocus criterion |

The finite-focus matrix at β = −0.5000 gives paraxial lateral magnification −0.5000041 with a residual imaging B term of
−0.004493 mm. At β = −1.0000 it gives magnification −0.9999983 with B = −0.001826 mm. These residuals are at the scale
expected from the patent's rounded tabular spacings and independently confirm the published focus states.

The final prescription reproduces all seven patent conditions and independently recomputed EFL, BFL, Petzval, and
finite-focus results within floating-point noise.

## Sources and References

- Wataru Tatsuno, **US 5,402,268**, “Telephoto Lens System Allowing Short-Distance Photographing Operation,” Nikon
  Corporation, granted March 28, 1995. Example 1 / First Embodiment, Fig. 1, Table 1, claim 14.
- Nikon Imaging Japan, **AI AF Micro-Nikkor 200mm f/4D IF-ED**, product overview and specifications:
  https://nij.nikon.com/products/lineup/nikkor/fmount/ai_af_micro-nikkor_200mm_f4d_if-ed/
- Nikon, **AF Micro-Nikkor ED 200mm f/4D IF instruction manual**, production specifications and reproduction range:
  https://nij.nikon.com/support/manual/nikkor/AFMCED200mm_f4D_02.pdf
- Nikon USA, **AF Micro-Nikkor 200mm f/4D IF-ED**, official specifications and technology notes:
  https://www.nikonusa.com/p/af-micro-nikkor-200mm-f4d-if-ed/1989/overview
