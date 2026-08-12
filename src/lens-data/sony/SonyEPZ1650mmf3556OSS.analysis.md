## Patent Reference and Design Identification

- **Patent:** US 2015/0316753 A9
- **Application Number:** 13/862,667
- **Filed:** April 15, 2013
- **Priority:** JP 2012-052721, March 9, 2012; JP 2012-134773, June 14, 2012
- **Published:** November 5, 2015, corrected publication
- **Inventor:** Masaharu Hosoi
- **Assignee:** Sony Corporation
- **Title:** *Zoom Lens and Imaging Apparatus*
- **Embodiment analyzed:** Example 1 / Numerical Value Embodiment 1

The prescription is the project-selected correlation for the **SONY E PZ 16-50mm f/3.5-5.6 OSS**. The patent does not
name SELP1650, so the production identification is an inference rather than a manufacturer-confirmed patent assignment.
The correlation is nevertheless convergent:

1. Example 1 contains nine physical elements in eight air-separated element groups, matching Sony's published 8-group,
   9-element production specification.
2. The patent's three infinity-focus design states are 16.48, 28.20, and 48.50 mm, closely corresponding to the marketed
   16-50 mm range.
3. The patent gives maximum-aperture values of f/3.61, f/4.77, and f/5.77, close to the marketed f/3.5-5.6 range while
   remaining distinct design values in the model.
4. The patent moves the rear subgroup of the positive second group laterally for shake correction, consistent with the
   production lens's Optical SteadyShot mechanism (¶0113-0114, ¶0174-0177).
5. The patent's aberration plots extend to image height `y = 14.2 mm`, consistent with the APS-C image format used by the
   production lens.

The wide-end field figures are not identical. Sony specifies an APS-C angle of view of 83°-32°, whereas Example 1 gives
half-angles of 46.00°, 27.66°, and 16.19°, or 92.00° full at the wide state and 32.38° full at tele. That discrepancy is
preserved as a product-versus-design/reference-definition difference and is not used to alter the prescription.

Sony's marketed specifications are kept separate from the patent design. The data file stores the marketed focal range
as 16-50 mm and the independently computed design EFL endpoints as 16.480902-48.506052 mm; the patent's published
16.48, 28.20, and 48.50 mm values remain the zoom interpolation control positions. It also records Sony E mount, APS-C
format, seven aperture blades, and the marketed minimum-focus range of 0.25-0.30 m. The exact optical model uses the
patent's `nominalFno` array of `[3.61, 4.77, 5.77]` rather than the marketed f/3.5-5.6 labels.

No dimensional scaling has been applied. The prescription is modeled at `s = 1.0`, so radii, spacings, image-plane
coordinates, and aspheric coefficients remain in the patent's native millimeter scale.

## Optical Architecture

Example 1 is a four-moving-power-group **negative-positive-negative-positive** zoom (¶0157-0160):

- **GR1, negative:** L1 negative meniscus followed by L2 positive meniscus.
- **GR2, positive:** a positive front subgroup G2f followed by a positive rear subgroup G2r.
- **GR3, negative:** L8 alone; the patent designates this group for axial focusing.
- **GR4, positive:** L9 alone.

The data file reports nine glass elements and eight air-separated element groups. Those production-style counts are not
the same as the four patent kinematic/power groups GR1-GR4. Within GR2, the patent further divides the group into G2f
and G2r because the rear subgroup is assigned the independent lateral shake-correction function.

The front subgroup G2f contains L3, the cemented L4/L5 pair, and L6. The rear subgroup G2r is L7 alone. The aperture stop
lies between L3 and L4 and moves integrally with GR2 (¶0167). The modeled stop location therefore comes directly from the
patent; only its semi-diameter is inferred.

First-order calculations from the final data arrays give the following isolated group focal lengths:

| Group | Computed EFL (mm) | Interpretation |
|---|---:|---|
| GR1 | -23.0709 | Negative front group |
| G2f | +20.5630 | Positive front subgroup of GR2 |
| G2r | +46.8674 | Positive rear / shake-correction subgroup |
| GR2 | +17.0617 | Net positive second group |
| GR3 | -19.3463 | Negative focus group |
| GR4 | +45.7715 | Positive rear group |

These are focal lengths of the indicated group prescriptions bounded by air. They should not be read as the same thing
as each group's marginal contribution when embedded in the complete zoom at a particular spacing.

All four power groups move during zooming in Example 1 (¶0160). With the image plane normalized to a fixed axial
coordinate, GR1 first moves imageward from wide to the intermediate state by 2.787 mm, then reverses and ends only
0.244 mm imageward of its wide position at tele. Over wide-to-tele, GR2, GR3, and GR4 move monotonically objectward by
21.999, 15.655, and 13.020 mm respectively. The reversal is carried by the published spacing table rather than an
interpolated invention; the three patent states bracket it explicitly.

The four variable axial spacings are D4, D14, D16, and D18 (¶0171). Their infinity-focus values are:

| State | D4 (mm) | D14 (mm) | D16 (mm) | D18 to IMG (mm) |
|---|---:|---:|---:|---:|
| 16.48 mm | 23.043 | 3.325 | 3.775 | 13.817 |
| 28.20 mm | 10.230 | 4.565 | 5.594 | 20.784 |
| 48.50 mm | 0.800 | 9.669 | 6.410 | 26.837 |

The patent states that an unshown cover glass is placed between GR4 and the image surface (¶0168), but gives no radius,
thickness, or refractive index for it. The model therefore excludes that plate, as required by the project data rules.
D18 is retained as the patent's source vertex-to-IMG separation and is modeled as air; an air-equivalent correction for
the omitted plate cannot be computed without its unpublished thickness and refractive index.

The patent does not publish semi-diameters. The authored clear-aperture radii begin as modeling inferences from the
paraxial marginal/chief-ray envelope over all three zoom states. The off-axis chief ray is launched at the project
default 0.60 fraction of each patent half-field angle, rather than at 60% of the patent's 14.2 mm plotted image height.
Figure 1 then provides an independent silhouette check: its first element is materially taller than the initial
9.9/9.6 mm envelope, so L1 is enlarged to 12.2/11.8 mm. The rear asphere stops short of the approximately 12.5 mm drawn
rim at the largest validator-safe height. All final values were rechecked for image-circle coverage, edge thickness,
actual aspherical rim slope, conic domain, shared-band cross-gap intrusion, off-axis containment, and silhouette
plausibility. These dimensions should not be read as patent-published mechanical apertures.

## Element-by-Element Analysis

### L1 — Negative Meniscus, Rear Asphere

`nd = 1.88300`, `νd = 40.80`. Glass: **TAFD30 (HOYA coordinate identification)**. Standalone EFL:
**-14.7281 mm**. Catalog-derived `dPgF = -0.0093`.

L1 is the first element of GR1 and supplies the strong negative contribution required by the front group's net negative
power. The patent describes it as a negative meniscus with its convex surface facing the object side (¶0161). Its rear
surface, 2A, is aspherical.

The TAFD30 name is a catalog-coordinate identification, not evidence that Sony purchased HOYA glass for the production
lens. The patent's `nd/νd = 1.88300/40.80` corresponds to the historical HOYA coordinate; HOYA's 2019 catalog update
changed the displayed `νd` value from 40.80 to 40.81. The authored line indices and `dPgF` are catalog-derived additions
from the current HOYA data, while the patent's 40.80 Abbe number remains unchanged in the prescription.

### L2 — Positive Meniscus

`nd = 2.00272`, `νd = 19.32`. Glass: **E-FDS2 (HOYA coordinate identification)**. Standalone EFL:
**+47.5267 mm**. Catalog-derived `dPgF = +0.0316`.

L2 is the second member of GR1 and is described by the patent as a positive meniscus with its convex surface toward the
object (¶0161). Its positive power partially offsets L1, while the two-element group remains negative as a whole at
-23.0709 mm.

The very high refractive index and low Abbe number make L2 spectrally and refractively distinct from L1. The exact
chromatic role of the pair is not separately assigned by the patent; the design-level statement is that this two-element
first group contributes to correction of distortion, coma, lateral chromatic aberration, and axial chromatic aberration
(¶0144-0145). Any more specific division of those corrections between L1 and L2 would be an optical interpretation.

### L3 — Positive Meniscus, Two Aspherical Surfaces

`nd = 1.69350`, `νd = 53.20`. Glass: **M-LAC130 (HOYA coordinate identification)**. Standalone EFL:
**+19.9718 mm**. Catalog-derived `dPgF = -0.0059`.

L3 is the object-side positive lens of G2f and carries aspherical surfaces 5A and 6A. The patent's design rationale gives
special attention to this position: conditional expression (3) constrains the focal length of the most object-side
positive lens in GR2 relative to the focal length of G2f so that no single positive member becomes excessively strong
(¶0129-0134).

The computed ratio is `f21/f2f = 0.97125`, agreeing with the patent's Table 25 value of 0.97. The lens therefore sits near
unity relative to the net positive front subgroup rather than dominating it by itself. This distribution is consistent
with the patent's stated strategy of sharing GR2's positive power among several positive lenses to preserve aberration
correction while reducing zoom-group travel.

### L4/L5 — Cemented Positive/Negative Pair

**L4:** `nd = 1.49700`, `νd = 81.61`. Glass: **FCD1 (HOYA coordinate identification)**. Standalone EFL:
**+16.9652 mm**. Catalog-derived `dPgF = +0.0374`.

**L5:** `nd = 1.83400`, `νd = 37.34`. Glass: **NBFD10 (HOYA coordinate identification)**. Standalone EFL:
**-8.2421 mm**. Catalog-derived `dPgF = -0.0021`.

The patent explicitly describes L4 and L5 as a cemented lens within G2f, with biconvex L4 on the object side and
biconcave L5 on the image side (¶0163). The shared surface is not modeled as an artificial cement layer: at surface 9 the
medium changes directly from L4 to L5, using L5's downstream index and element identity.

The isolated standalone powers are not the power of the cemented component. When the actual L4-to-L5 interface is
retained, the **cemented pair has a net EFL of -20.8096 mm**. The shared surface contributes
`-0.0105669 mm^-1` of refracting-surface power. Thus the doublet is a negative subcomponent embedded inside the net
positive G2f subgroup.

The glass pair also provides a large dispersion contrast: the high-Abbe FCD1 coordinate is cemented directly to the
lower-Abbe NBFD10 coordinate. The data include catalog line indices and `dPgF` for both glasses, so the contrast is
spectrally represented rather than inferred from Abbe number alone. The patent, however, does not name glass vendors or
assign a production ED label to either member.

### L6 — Biconvex Positive

`nd = 1.48749`, `νd = 70.44`. Glass: **FC5 (HOYA coordinate identification)**. Standalone EFL:
**+22.3245 mm**. Catalog-derived `dPgF = +0.0090`.

L6 is the final positive lens of G2f and is described as biconvex (¶0163). In the front subgroup it follows the net
negative L4/L5 cemented pair, restoring the subgroup's positive net power together with L3. The complete G2f
prescription has a computed EFL of +20.5630 mm.

The patent's central design argument is group-level rather than element-specific: using multiple positive elements in
GR2 permits the positive group to remain strong enough for compact zooming without forcing each individual positive lens
to carry excessive power (¶0011-0012, ¶0110-0112). L6 is one of those distributed positive contributors.

### L7 — Biconvex Positive, Shake-Correction Subgroup

`nd = 1.48749`, `νd = 70.44`. Glass: **FC5 (HOYA coordinate identification)**. Standalone EFL:
**+46.8674 mm**. Catalog-derived `dPgF = +0.0090`.

L7 is the entire rear subgroup G2r and is described as a biconvex positive lens (¶0164). Because G2r consists of this
single element in Example 1, the element's standalone focal length and the isolated subgroup focal length are the same
computed value, +46.8674 mm.

The patent moves G2r perpendicular to the optical axis for shake correction. Its stated rationale is mechanical as well
as optical: a small, light rear subgroup reduces the actuator burden of the stabilization mechanism (¶0113-0114,
¶0121-0122). In the production correlation, that architecture is consistent with Sony's Optical SteadyShot designation,
but the patent itself does not name SELP1650.

Two of the patent's conditional expressions directly govern this subgroup. The computed strength ratio is
`f2r/fw = 2.84390`, while the surface-shape expression `(R2f+R2r)/(R2f-R2r)` is `-0.87028`; both reproduce Table 25 at
its printed precision.

### L8 — Biconcave Negative, Rear Asphere; Axial Focus Group

`nd = 1.69680`, `νd = 55.46`. Glass: **697-555 — HOYA LAC14/M-LAC14 coordinate family**. Standalone EFL:
**-19.3463 mm**. Catalog-derived `dPgF = -0.0060`.

L8 alone forms GR3, the negative third power group, and the patent describes it as biconcave (¶0165). Surface 16A on its
image side is aspherical. The patent further specifies that the negative third group can move axially for focusing
(¶0135-0137), making L8 the focus-group element in the selected design architecture.

The computed ratio `f3/fw = -1.17393` agrees with the patent's Table 25 value of -1.17 and satisfies conditional
expression (4). The patent explains that keeping this negative focus group within the prescribed power range provides
high focus sensitivity without an excessively long focus stroke (¶0138-0143).

The 697-555 coordinate does not uniquely determine whether the physical glass form was HOYA LAC14 or M-LAC14. Current
catalog data give the same line indices and `dPgF` for the coordinate variants relevant here, so the model can carry the
spectral values without selecting a physical-form suffix. That remains a catalog-family identification, not a supplier
claim.

### L9 — Biconvex Positive, Two Aspherical Surfaces

`nd = 1.80610`, `νd = 40.73`. Glass: **806407 — NBFD13 / M-NBFD130 coordinate family (supplier unresolved)**.
Standalone EFL: **+45.7715 mm**. Catalog-family `dPgF = -0.0059`.

L9 alone forms GR4 and is described by the patent as biconvex (¶0166). Both surfaces, 17A and 18A, are aspherical. The
positive rear group supplies the final converging section before the image plane, while D18 changes substantially across
zoom as the group moves relative to IMG.

The d-line coordinate 1.80610/40.73 is the catalog code 806407. HOYA's NBFD13 coefficient row and the catalog's
M-NBFD130/MP-NBFD130 aliases resolve to that same optical-constant family, so the physical-form suffix does not block a
coefficient-backed spectral model. The data therefore retain the family-level identity and supplier caveat while adding
the NBFD13 catalog line indices. No APO claim is made for L9.

## Glass Identification and Selection

The patent publishes only d-line refractive index and Abbe number; it does not name glass makers. Independent catalog
comparison found a coherent match to HOYA coordinates across the Example 1 palette. Those names are therefore used as
**coordinate identifications**, not as evidence of Sony's actual procurement.

Where a HOYA coordinate resolves to a coefficient-backed optical family, the final data file stores catalog `nC`, `nF`,
`ng`, and `dPgF` directly on the element. This improves chromatic modeling while keeping the source hierarchy explicit:
patent `nd/νd` remain the prescription authority, and the line data are catalog-derived augmentation.

| Element(s) | `nd` | `νd` | Data-file glass annotation | `dPgF` | Status |
|---|---:|---:|---|---:|---|
| L1 | 1.88300 | 40.80 | TAFD30 | -0.0093 | Historical patent coordinate; current catalog displays νd=40.81 |
| L2 | 2.00272 | 19.32 | E-FDS2 | +0.0316 | Spectrally resolved catalog coordinate |
| L3 | 1.69350 | 53.20 | M-LAC130 | -0.0059 | Spectrally resolved catalog coordinate |
| L4 | 1.49700 | 81.61 | FCD1 | +0.0374 | Spectrally resolved catalog coordinate |
| L5 | 1.83400 | 37.34 | NBFD10 | -0.0021 | Spectrally resolved catalog coordinate |
| L6, L7 | 1.48749 | 70.44 | FC5 | +0.0090 | Spectrally resolved catalog coordinate |
| L8 | 1.69680 | 55.46 | 697-555 LAC14/M-LAC14 family | -0.0060 | Physical-form suffix unresolved; spectral values coincide |
| L9 | 1.80610 | 40.73 | 806407 NBFD13/M-NBFD130 family | -0.0059 | Coefficient-backed optical family; physical form and supplier unresolved |

HOYA classifies optical-glass families by refractive index and Abbe number and encodes those coordinates in its six-digit
catalog code. For example, FCD1's 1.49700/81.61 coordinate is represented as 497-816. That coding convention explains why
the six-digit labels are useful for an unresolved family such as 697-555 or 806-407 without pretending that the physical
form is known.

The palette spans a wide dispersion range. The most conspicuous cemented contrast is L4/L5: FCD1 at `νd = 81.61` is
bonded directly to NBFD10 at `νd = 37.34`. L2 is the lowest-Abbe element at `νd = 19.32`, whereas L6 and L7 use the
higher-Abbe FC5 coordinate at 70.44. Those differences are objective properties of the prescription; assigning a precise
aberration budget to each material would require more than the paraxial and catalog data used here.

Sony states that the production SELP1650 uses ED glass and four aspherical lens elements. The patent Example 1 likewise
contains four physical elements bearing aspherical surfaces, but the patent does not identify an "ED" element by name.
Accordingly, the manufacturer ED statement is retained as product metadata rather than mapped to a specific patent
element.

## Focus Mechanism

The patent identifies GR3, the single negative L8 group, as the axial focus group and explains that its negative power
provides high focus sensitivity, allowing a shorter focus stroke (¶0135-0143). That establishes the **mechanism**, but
not a numerical close-focus state for Example 1.

All three Example 1 spacing rows are explicitly infinity-focus states (¶0172). No close-focus spacing table, object
distance row, focus stroke, or magnification row is published for this example. The final model therefore has focus
status **`NO_INTERNAL_RECONSTRUCTION`**. Every focus pair in `var` repeats the infinity value at both endpoints; no
internal movement has been invented.

Sony specifies a production minimum-focus distance of 0.25-0.30 m and maximum magnification of 0.215×. Those are
manufacturer product specifications measured for the finished lens system, not patent internal-spacing data. The schema
requires one scalar `closeFocusM`, so the data file stores 0.25 m, the minimum of Sony's published range, while
`focusDescription` preserves the complete 0.25-0.30 m statement and the absence of an internal reconstruction.

Consequently, the analysis does not quote a close-focus travel, close-focus air-gap table, or modeled finite-conjugate
magnification. The viewer's authored optical prescription remains the patent's infinity-focus zoom model.

## Aspherical Surfaces

Example 1 has six aspherical surfaces on four physical elements: L1 rear surface 2A; both surfaces 5A and 6A of L3; L8
rear surface 16A; and both surfaces 17A and 18A of L9 (¶0170). This agrees with the data file's description of four
aspherical elements and six aspherical surfaces.

The patent defines the sag with the standard conic form (¶0153-0156):

$$
x = \frac{c y^2}{1 + \sqrt{1-(1+K)c^2y^2}} + \sum A_i y^i, \qquad c=\frac{1}{R}.
$$

Thus the published `K` is already the project's standard conic constant. No `κ`-to-`K` conversion is applied. Only even
orders A4, A6, A8, and A10 are published for Example 1; the data file sets A12 and A14 to zero because the schema carries
those slots but the patent provides no nonzero terms. At `s = 1.0`, no coefficient scaling is required.

| Surface | K | A4 | A6 | A8 | A10 |
|---|---:|---:|---:|---:|---:|
| 2A | -0.083257779 | -1.2058E-05 | -3.9503E-07 | +3.1552E-09 | -2.6164E-11 |
| 5A | 0 | -6.3285E-06 | -5.1744E-07 | +1.0598E-08 | -2.0601E-10 |
| 6A | 0 | +2.3738E-06 | -2.1246E-07 | +6.8489E-10 | -7.7144E-11 |
| 16A | -0.8909625 | +6.1843E-05 | -2.7882E-07 | -1.0586E-09 | +1.0602E-11 |
| 17A | 0 | -8.8132E-05 | +7.6707E-07 | -8.7771E-09 | +7.0405E-11 |
| 18A | 0 | -9.0000E-05 | +6.3117E-07 | -8.4535E-09 | +6.5005E-11 |

The patent does not publish clear-aperture heights for these surfaces. Departure values are therefore quoted only at the
**verified inferred semi-diameters** of the final data file, not presented as patent measurements:

| Surface | Inferred SD (mm) | Computed departure from sphere of same R (mm) |
|---|---:|---:|
| 2A | 11.8 | -2.502876 |
| 5A | 6.5 | -0.044286 |
| 6A | 6.2 | -0.013539 |
| 16A | 6.0 | +0.060557 |
| 17A | 7.2 | -0.167011 |
| 18A | 7.5 | -0.220455 |

At the inferred rim, 2A has substantially less positive sag than the sphere with the same paraxial radius. Surfaces 5A
and 6A also finish with negative departure relative to their spherical bases, though by much smaller amounts. Surface
16A combines a near-paraboloidal conic constant (`K = -0.8909625`) with positive A4 and ends 0.060557 mm more positive
than its same-radius sphere at 6.0 mm. Surface 17A is flatter in sag than its same-radius positive sphere near the rim,
while the negative-radius 18A departs further in the negative-sag direction than its spherical base.

The inferred SD geometry remains within the modeled conic and slope limits. The largest actual rim slope among all
surfaces is 61.3° at 2A; the minimum computed physical edge thickness is 0.773238 mm at L7; and the largest positive
shared-band cross-gap intrusion is 0.545545 of the available gap, below the project's 0.90 limit. These are model
validation results, not patent dimensions.

The patent does not identify the manufacturing process used for the aspherical surfaces. The analysis therefore does not
classify them as molded, polished, hybrid/composite, or another fabrication type.

## Chromatic Correction Strategy

The source prescription itself supplies only `nd` and `νd`, but the final data file augments L1-L8 with catalog line
indices and `dPgF` where the HOYA coordinate identification is spectrally unambiguous. This permits dispersion modeling
beyond a simple Abbe approximation without changing the patent's d-line prescription. L9 remains deliberately limited
to `nd/νd` because the 806-407 coordinate does not resolve to one unique current spectral subtype.

The patent attributes chromatic correction at the architecture level rather than assigning a wavelength-correction role
to each glass. In particular, it states that the two-element negative first group contributes to correction of lateral and
axial chromatic aberration (¶0144-0145), while the multi-positive-lens construction of GR2 is primarily discussed in
terms of sharing refractive power and controlling spherical aberration and coma (¶0011-0012, ¶0110-0112).

The cemented L4/L5 pair combines the highest-Abbe coordinate in the prescription with a substantially lower-Abbe
partner, and L2 provides a still lower-Abbe high-index material in GR1. Those are demonstrable dispersion contrasts in
the modeled prescription. They support discussion of chromatic balancing, but they do not establish apochromatic
correction, nor do they identify which patent element corresponds to Sony's marketed ED-glass statement.

## Conditional Expressions

The patent defines four principal design conditions for this lens family and prints the Example 1 values in Table 25.
Independent calculation from the final prescription reproduces those values within the table's displayed precision.

| Condition | Computed Example 1 value | Patent Table 25 | Required range | Result |
|---|---:|---:|---|---|
| `f2r/fw` | 2.84390 | 2.84 | `1.2 < f2r/fw < 13.0` | Satisfied |
| `(R2f+R2r)/(R2f-R2r)` | -0.87028 | -0.87 | `-10.0 < ... < -0.1` | Satisfied |
| `f21/f2f` | 0.97125 | 0.97 | `0.7 < f21/f2f < 1.4` | Satisfied |
| `f3/fw` | -1.17393 | -1.17 | `-2.0 < f3/fw < -1.0` | Satisfied |

Condition (1) governs the positive rear subgroup G2r and balances stabilization-group power against lateral correction
travel (¶0115-0120). Condition (2) constrains the shape of that rear subgroup for spherical-aberration control
(¶0123-0128). Condition (3) constrains L3 relative to G2f so the front positive lens does not become disproportionately
strong (¶0129-0134). Condition (4) constrains the negative focus group GR3 to retain high focus sensitivity without an
excessive focus stroke (¶0138-0143).

The rendered claim 5 on PDF page 71 uses `(R2f+R2r)/(R2f-R2r)`, consistent with the body (¶0019, ¶0041, ¶0123) and
Table 25. The same expression independently evaluates to -0.87028 for Example 1. A parsed-text extraction that drops the
plus sign would create an apparent contradiction, but the rendered source is internally consistent on this condition.

## Image Stabilization

The patent assigns shake correction to G2r, the positive rear subgroup of GR2, by moving it perpendicular to the optical
axis (¶0113-0114). In Example 1, G2r consists only of L7. This arrangement separates the stabilization motion from the
main axial zoom motions while keeping the moving correction subgroup to one relatively small positive element.

The patent's lateral-aberration figures report the following eccentricity-correction labels for Example 1:

| Zoom state | `dec` values printed in the patent |
|---|---|
| Wide | `+0.162`, `-0.162` |
| Intermediate | `+0.196`, `-0.196` |
| Tele | `+0.231`, `-0.231` |

The accessible Example 1 text identifies `dec` as the eccentricity correction amount but does not explicitly state its
unit. The values are therefore reproduced without assigning one. They are source facts from Figs. 5-13 and ¶0174-0177,
not authored millimeter shifts.

Sony specifies Optical SteadyShot for SELP1650. The correspondence between that production feature and the patent's
single-element G2r lateral correction group is part of the production-correlation evidence, but it should not be read as
Sony's explicit confirmation that this patent is the SELP1650 production formula.

## Verification Summary

The final data arrays reproduce the patent's three stated focal lengths to their printed precision. Sequential
height/reduced-angle tracing and an independent ABCD matrix chain give:

| State | Patent f (mm) | Computed EFL (mm) | Residual (mm) | Gaussian BFL from S18 (mm) | Published D18 (mm) |
|---|---:|---:|---:|---:|---:|
| Wide | 16.48 | 16.480902 | +0.000902 | 13.941228 | 13.817 |
| Intermediate | 28.20 | 28.201403 | +0.001403 | 20.858185 | 20.784 |
| Tele | 48.50 | 48.506052 | +0.006052 | 26.668942 | 26.837 |

The two first-order methods agree to a maximum matrix difference of `1.11×10^-16`. The surface-by-surface Petzval sum,
computed as `φ/(n n')` at every interface, is `+0.004605484907 mm^-1`, corresponding to a reciprocal radius of
+217.1324 mm.

The difference between Gaussian BFL from the last refracting surface and patent D18 is retained rather than normalized
away. D18 is the source spacing to the published image surface in a design that also mentions an unparameterized cover
glass; Gaussian BFL is a paraxial calculation from the modeled refracting prescription. They are related but not
identical quantities.

The final inferred semi-diameters pass the independent geometry checks applied to the authored prescription: positive
physical edge thickness, actual rim-slope limits, asphere conic domains, shared-band cross-gap limits, and off-axis
containment at all three zoom states.

## Sources and References

1. **Hosoi, Masaharu.** *Zoom Lens and Imaging Apparatus.* US 2015/0316753 A9, corrected publication, November 5, 2015.
   Example 1 / Numerical Value Embodiment 1, especially ¶0150-0178 and Table 25. The prescription, asphere equation,
   zoom states, stop location, group arrangement, and stabilization figures are taken from this source.
2. **Sony Electronics.** "SELP1650 Specifications." Official Sony support page. Product specifications used here include
   Sony E-mount, APS-C format, 16-50 mm focal length, f/3.5-5.6 maximum aperture, 8 groups / 9 elements, seven aperture
   blades, Optical SteadyShot, 0.25-0.30 m minimum focus distance, 0.215× maximum magnification, and 64.7 × 29.9 mm
   dimensions. <https://www.sony.com/electronics/support/lenses-e-mount-lenses/selp1650/specifications>
3. **Sony Electronics.** "E PZ 16-50 mm F3.5-5.6 OSS." Official product page. Used for the manufacturer statement that
   the production lens uses ED glass and four aspherical lens elements. <https://electronics.sony.com/imaging/lenses/aps-c-e-mount/p/selp1650>
4. **HOYA Group Optics Division.** "Optical Glass Data Download." Current catalog data, Excel revision 2026-06-01.
   Catalog-coordinate names and authored line-index/`dPgF` fields are derived from this source where the coordinate is
   spectrally unambiguous. <https://www.hoya-opticalworld.com/english/datadownload/index.html>
5. **HOYA Group Optics Division.** "Designation of Glass Types." Used for HOYA family and six-digit coordinate-code
   conventions. <https://www.hoya-opticalworld.com/english/technical/001.html>
6. **HOYA Group Optics Division.** "Updated Information 2019." Records the TAFD30 `νd` display change from 40.80 to
   40.81 on 2019-06-14. <https://www.hoya-opticalworld.com/english/datadownload/data_up2019.html>
