# CANON RF 200-800mm f/6.3-9 IS USM — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** US 2024/0134166 A1  
**Application Number:** 18/490,639  
**Priority:** October 24, 2022, under the corrected A9/family record  
**Filed:** October 19, 2023, under the corrected A9/family record  
**Published:** April 25, 2024  
**Inventor:** Kohei Kimura  
**Applicant:** Canon Kabushiki Kaisha  
**Title:** Zoom Lens and Imaging Apparatus Including the Same  
**Embodiment analyzed:** First Numerical Example / Example 1

The prescription transcribed here is the first numerical example of US 2024/0134166 A1. The selected A1 front page
contains one-day errors in both the filing and Japanese-priority dates: it prints October 18, 2023 and October 23, 2022.
The later corrected publication US 2024/0231055 A9 gives October 19, 2023 and October 24, 2022, and the specification itself
states that Japanese Patent Application 2022-170052 was filed on October 24, 2022. The A1 prescription remains the source
for the optical data; the A9 correction is used only for the date metadata.

The identification with the production CANON RF 200-800mm f/6.3-9 IS USM is a research correlation rather than a Canon
statement that Example 1 is the production formula. Several independent features converge:

1. The patent example publishes 203.00–776.00 mm and f/6.42–9.18, close to the marketed 200–800 mm and f/6.3–9 range.
2. Media transitions in the example give 17 elements in 11 air-separated groups, exactly matching Canon's published
   production construction.
3. Three elements use the low-dispersion coordinate `nd = 1.49700`, `νd = 81.5`; Canon specifies three UD elements in the
   production lens. The count is strongly convergent, but the patent does not itself call those elements UD or identify a
   glass supplier.
4. The patent makes L2 the transverse image-stabilizing unit and L5 the focusing unit. Canon's production lens provides
   in-lens optical IS and Nano USM focusing, although Canon does not identify the production moving groups by patent label.
5. The patent's 2022 priority and 2023 filing are consistent with the product's late-2023 announcement and marketing.

The marketed and design quantities are therefore kept separate. The data file stores `focalLengthMarketing: [200, 800]`
while the verified Gaussian endpoint EFLs are 203.006060 mm and 776.180743 mm. It likewise stores the modeled design
f-numbers 6.42, 7.30, and 9.18 rather than treating the marketed f/6.3–9 designation as the exact prescription aperture.

Primary prescription references: US 2024/0134166 A1, first exemplary embodiment at ¶¶0062–0065, First Numerical Example
at PDF page 18 / printed page 6, and Table 1 at PDF page 20 / printed page 8.

## Optical Architecture

Example 1 is a six-unit zoom with power sequence **positive – negative – positive – positive – negative – negative**:
L1 (+), L2 (−), L3 (+), L4 (+), L5 (−), and L6 (−). The implemented prescription contains 17 physical glass elements in
11 air-separated groups and one aperture stop at source surface 19, represented by the required `STO` label in the data
file. All 29 selected-example surfaces are retained; no sensor cover plate, filter, dummy plane, or air-equivalent rear
spacing conversion is used.

The independently recomputed unit focal lengths are +302.682 mm for L1, −71.480 mm for L2, +99.386 mm for L3,
+82.713 mm for L4, −66.777 mm for L5, and −203.484 mm for L6. These are in-situ unit powers calculated from the grouped
surface sequences and are distinct from the isolated-in-air focal lengths listed for individual elements below. They
reproduce the patent's unit table within 0.01 mm.

During zooming, the patent specifies that L1 moves toward the object side while L2 remains axially fixed. The verified
spacing states preserve that architecture: with the L2 start used as a fixed reference, the image plane stays within
0.01 mm of a constant axial position across the three tabulated states, while L1 moves 89.98 mm from wide to telephoto,
consistent with the Table-1 value `m1 = 89.979 mm`. The six varying axial gaps are D5, D10, D19, D22, D26, and D29. D19
and D26 change direction between the wide/intermediate and intermediate/telephoto intervals; this is a reversal in those
published gap series, not by itself a claim that an entire lens unit reverses its absolute motion.

The system becomes optically telephoto only at the long endpoint under the project's geometric criterion `TL/EFL < 1`.
The verified track/EFL ratios are 1.633646 at wide, 1.000425 at the intermediate state, and 0.543185 at telephoto. Thus
only the 776 mm state meets that criterion. No state is retrofocus because BFD remains much smaller than EFL throughout.
This usage is separate from the commercial category name "super telephoto zoom."

The aperture stop sits at the image-side end of L3, as the patent states in ¶0065. Its physical diameter is not published.
The Stage-2 model therefore uses an explicitly calibrated stop radius, discussed in the verification section rather than
presenting it as a source dimension.

## Element-by-Element Analysis

The focal length `f` stated for each element in this section is the verified focal length of that physical element
**isolated in air**. It is not the element's effective contribution when embedded in the complete zoom. Cemented-set net
powers and six-unit in-situ powers are treated separately.

### L1a — Biconvex Positive

**nd = 1.48749, νd = 70.2. Glass: 48770x crown class (supplier unresolved). f = +314.611 mm.**

L1a is the front element of the positive L1 unit. Its relatively low index and high Abbe number place the largest front
optic in a low-dispersion crown coordinate class. The patent's condition set explicitly constrains the first unit's power,
its internal air-gap proportion, and the specific gravity of this front material, linking the front group to both compact
telephoto packaging and mass control without identifying a supplier.

The 39.20 mm air interval after L1a is the largest air gap within L1 and is the `D1max` term used by inequality (9). The
verified value `D1max/TD1 = 0.636881` reproduces the published 0.637.

### L1b — Biconvex Positive, first member of C1

**nd = 1.49700, νd = 81.5. Glass: 497816 low-dispersion fluorophosphate class (supplier unresolved). f = +166.383 mm.**

L1b is the positive member of the cemented C1 pair and is one of the three elements at the 1.49700/81.5 coordinate. Its
standalone power is appreciable, but that power must not be confused with the net power of the cemented pair because L1c
nearly cancels it at first order.

The production lens uses three UD elements. The count and dispersion coordinate make L1b part of the strongest
patent-to-product chromatic correlation, but the patent does not name Canon UD material, OHARA S-FPL51, SCHOTT N-PK52A,
or any other particular melt.

### L1c — Biconcave Negative, second member of C1

**nd = 1.61340, νd = 44.3. Glass: 613443 lanthanum/crown-flint class (supplier unresolved). f = −159.917 mm.**

L1c is cemented directly to L1b and supplies the opposite standalone power. The independently calculated C1 net focal
length is about −427,837 mm at the rounded patent precision, making the pair almost afocal in first order. That very long
number should be read as near-cancellation, not as a high-precision physical focal length of the bonded pair.

C1 therefore distributes strong opposing element powers inside the broader positive L1 unit without itself carrying much
net paraxial power. The complete L1 unit, which also includes L1a and the intervening air gap, remains strongly positive at
+302.682 mm.

### L2a — Positive Meniscus, first member of C2

**nd = 1.80518, νd = 25.4. Glass: 805254 dense-flint class (supplier unresolved). f = +85.280 mm.**

L2a begins the three-element negative L2 unit. It is cemented to L2b and provides positive power within a unit whose final
net power is negative. The patent specifically assigns L2 two roles: it remains fixed in the optical-axis direction during
zooming, and it moves substantially perpendicular to the optical axis during image-shake correction (¶0064; claim 21).

The high index and low Abbe number are source facts about the coordinate, but no individual aberration correction is
attributed here solely from those material values.

### L2b — Biconcave Negative, second member of C2

**nd = 1.77250, νd = 49.6. Glass: 773496 lanthanum crown class (supplier unresolved). f = −53.696 mm.**

L2b is the strong negative member cemented to L2a. The C2 doublet has a verified net focal length of −145.838 mm. Together
with the rear negative L2c, it produces the complete L2 unit focal length of −71.480 mm.

The patent states that the positive-negative-negative three-lens makeup of L2 is used to suppress eccentric aberration
when the unit is shifted for stabilization. That is a patent design statement, not an inference from the isolated element
powers.

### L2c — Biconcave Negative

**nd = 1.83481, νd = 42.7. Glass: 835427 high-index lanthanum class (supplier unresolved). f = −142.471 mm.**

L2c completes the axially fixed L2 stabilization unit. Its negative isolated power reinforces the negative net power of
C2, giving the unit the verified −71.480 mm focal length used by the zoom architecture.

Because the patent moves the complete L2 transversely for stabilization while keeping it fixed during zoom, L2's axial
station is a useful reference for checking the published zoom kinematics. The Stage-2 computation used that reference and
found only 0.01 mm spread in the final image-plane position, consistent with source rounding.

### L3a — Biconvex Positive

**nd = 1.49700, νd = 81.5. Glass: 497816 low-dispersion fluorophosphate class (supplier unresolved). f = +62.071 mm.**

L3a is the first element of the positive L3 unit and the second 1.49700/81.5 low-dispersion-coordinate element in the
prescription. It is air-spaced from the C3 pair behind it.

The complete L3 unit is positive at +99.386 mm. The stop is placed at the image-side end of this unit, so L3 is also the
last powered unit ahead of the diaphragm in the source grouping.

### L3b — Negative Meniscus, first member of C3

**nd = 1.77250, νd = 49.6. Glass: 773496 lanthanum crown class (supplier unresolved). f = −39.999 mm.**

L3b is the negative member of cemented pair C3. Its isolated focal length is almost exactly −40 mm at the source
precision. The C3 pair as a whole remains negative, with a verified cemented focal length of −155.838 mm.

This element is therefore part of an internal negative subassembly inside a unit whose net power remains positive. That
statement follows from the verified paraxial powers; it does not assign a particular aberration correction to L3b alone.

### L3c — Positive Meniscus, second member of C3

**nd = 1.54072, νd = 47.2. Glass: 541472 flint/crown class (supplier unresolved). f = +53.518 mm.**

L3c is cemented to L3b and partially offsets its negative power. The pair remains net negative, while the complete L3
unit stays positive because L3a supplies enough positive power to dominate the weaker net-negative C3 and C4 subassemblies.

The element's glass coordinate is catalog-compatible with OHARA S-TIL2, but that catalog match is retained only as
candidate evidence. The production data file deliberately uses a supplier-unresolved class label.

### L3d — Biconvex Positive, first member of C4

**nd = 1.51823, νd = 58.9. Glass: 518590 crown class (supplier unresolved). f = +48.585 mm.**

L3d starts the second cemented pair in L3. It has substantial positive isolated power, but C4 is nearly afocal compared
with the individual members: the computed cemented-pair focal length is approximately −2004 mm.

This near-cancellation again illustrates why standalone element focal lengths cannot be added directly to infer the
complete unit power.

### L3e — Negative Meniscus, second member of C4

**nd = 1.77250, νd = 49.6. Glass: 773496 lanthanum crown class (supplier unresolved). f = −46.420 mm.**

L3e is the negative partner of L3d and the final glass element before the aperture stop. The patent explicitly places the
stop closest to the image side in L3 (¶0065). In the implemented model, surface 18 exits L3e into air, followed by 6.04 mm
to the flat `STO` plane.

The stop's modeled semi-diameter is not a patent dimension and therefore is not used here to infer a production element
clear aperture.

### L4a — Negative Meniscus, first member of C5

**nd = 2.00069, νd = 25.5. Glass: 001255 high-index flint class (supplier unresolved). f = −71.028 mm.**

L4a begins the positive L4 unit even though its own isolated power is negative. At `nd` slightly above 2.0, it is the
highest-index coordinate in the selected prescription.

The evidence review found compatible rows including HOYA TAFD40-W and HIKARI J-LASFH17, but the patent does not identify
which, if either, was intended. The data therefore retains the generic 001255 coordinate class.

### L4b — Biconvex Positive, second member of C5

**nd = 1.61340, νd = 44.3. Glass: 613443 lanthanum/crown-flint class (supplier unresolved). f = +38.405 mm.**

L4b is cemented to L4a and dominates the sign of the C5 pair. The verified cemented focal length is +82.713 mm, identical
to the complete L4 unit focal length because L4 consists only of this cemented pair.

This is a clear example of a positive unit assembled from a negative high-index front member and a stronger positive rear
member. The statement concerns paraxial power distribution and does not by itself establish an aberration-correction role.

### L5a — Biconvex Positive

**nd = 1.51742, νd = 52.4. Glass: 517524 crown class (supplier unresolved). f = +96.113 mm.**

L5a is the positive front element of the negative L5 focusing unit. It is air-spaced from L5b rather than cemented. The
complete two-element unit has verified focal length −66.777 mm.

The patent states that L5 moves toward the image side when focusing from infinity toward a close object and notes that its
relatively small diameter permits high-speed focusing (¶0065). The Stage-2 data does not model that travel because the
patent provides no close-focus spacing state.

### L5b — Biconcave Negative

**nd = 1.59522, νd = 67.7. Glass: 595677 low-dispersion high-index crown class (supplier unresolved). f = −38.418 mm.**

L5b supplies the stronger negative isolated power that makes the two-element L5 unit net negative. Its higher Abbe number
than L5a is a material-coordinate fact, but no claim of anomalous partial dispersion is made because the selected patent
provides no element-specific `nC`, `nF`, `ng`, or `dPgF` data.

The imageward movement of the complete L5 unit, rather than motion of L5b alone, is the published focus mechanism.

### L6a — Biconcave Negative, first member of C6

**nd = 1.49700, νd = 81.5. Glass: 497816 low-dispersion fluorophosphate class (supplier unresolved). f = −43.848 mm.**

L6a is the third and final 1.49700/81.5 element. It is cemented to L6b in the last physical group of the prescription.
Its negative standalone power is stronger than the positive power of its partner.

The placement of the three 1.49700/81.5 elements across L1, L3, and L6 gives the design low-dispersion glass at widely
separated axial locations. The prescription alone does not justify calling the system apochromatic, because Abbe number
does not encode the partial-dispersion behavior needed for that conclusion.

### L6b — Biconvex Positive, second member of C6

**nd = 1.72047, νd = 34.7. Glass: 720347 high-index flint class (supplier unresolved). f = +56.669 mm.**

L6b is the positive rear member of the final cemented pair. The pair remains net negative with computed focal length
−203.484 mm, which is also the focal length of the complete L6 unit.

The rear surface of L6b is surface 29. The published D29 spacing is therefore the back-focus interval from the surface-29
vertex to the image plane: 37.98 mm, 61.62 mm, and 96.27 mm in the three tabulated source states.

## Glass Identification and Selection

The patent publishes only d-line `nd` and `νd` coordinates. It does not name OHARA, HOYA, SCHOTT, HIKARI, CDGM, Sumita,
or any other supplier, and it does not publish element-specific C-, F-, or g-line indices or anomalous-partial-dispersion
values. The data file therefore uses coordinate classes rather than supplier names. The catalog candidates below are
cross-checks from the Stage-1 evidence, not assertions about Canon's actual glass procurement.

| Coordinate class | nd | νd | Used at | Catalog-compatible examples retained in evidence |
|---|---:|---:|---|---|
| 48770x crown | 1.48749 | 70.2 | L1a | OHARA S-FSL5; SCHOTT N-FK5 |
| 497816 low-dispersion fluorophosphate | 1.49700 | 81.5 | L1b, L3a, L6a | OHARA S-FPL51; SCHOTT N-PK52A; SUMITA K-PFK80; CDGM H-FK61 |
| 613443 lanthanum/crown-flint | 1.61340 | 44.3 | L1c, L4b | OHARA S-NBM51 |
| 805254 dense flint | 1.80518 | 25.4 | L2a | OHARA S-TIH6 |
| 773496 lanthanum crown | 1.77250 | 49.6 | L2b, L3b, L3e | OHARA S-LAH66; kept distinct from later S-LAH66N |
| 835427 high-index lanthanum | 1.83481 | 42.7 | L2c | OHARA S-LAH55V |
| 541472 flint/crown | 1.54072 | 47.2 | L3c | OHARA S-TIL2 |
| 518590 crown | 1.51823 | 58.9 | L3d | OHARA S-NSL3 |
| 001255 high-index flint | 2.00069 | 25.5 | L4a | HOYA TAFD40-W; HIKARI J-LASFH17; CDGM H-ZLaF90 class |
| 517524 crown | 1.51742 | 52.4 | L5a | OHARA S-NSL36 |
| 595677 low-dispersion high-index crown | 1.59522 | 67.7 | L5b | OHARA S-FPM2 |
| 720347 high-index flint | 1.72047 | 34.7 | L6b | OHARA S-NBH8 |

Every coordinate has at least one catalog-compatible candidate within the audit guardrail of Δn ≤ 0.003 and Δν ≤ 2.0.
Several are exact or nearly exact coordinate matches, but identical six-digit coordinates do not prove identical
composition or supplier. This is why the data file omits catalog line indices even where a candidate catalog can provide
them.

Three elements share the 1.49700/81.5 low-dispersion coordinate, matching Canon's published production count of three UD
lenses. This is evidence for the product correlation, not a basis for writing `S-FPL51`, `N-PK52A`, or "Canon UD" as the
patent glass name. Likewise, the available Abbe-only prescription is insufficient to support an APO or anomalous-
dispersion performance claim.

## Focus Mechanism

The source focus mechanism is internal focusing by L5. The patent states that the negative L5 unit moves toward the image
side from infinity toward close focus (¶0065). It also gives the telephoto-end paraxial magnifications used in inequality
(10): `βft = 2.360` for the focusing unit and `βrt = 1.498` for the following system. Independent conjugate calculations
from the rounded prescription reproduce these as 2.360260 and 1.498446.

The patent does **not** publish a close-focus L5 position, adjacent close-focus gaps, total focus travel, or a numerical
close-focus prescription. Consequently the model status is `NO_INTERNAL_RECONSTRUCTION`. All authored focus pairs repeat
the published infinity spacing at each zoom state; the viewer therefore has no internally reconstructed close-focus
optical state.

The data field `closeFocusM: 0.8` is production metadata, not an optical constraint on the prescription. Canon publishes
0.8 m minimum focus at 200 mm, with larger minimum distances toward the long end. Those manufacturer values do not
uniquely solve the position of L5, so no focus travel has been inferred from them.

## Chromatic Correction Evidence

The prescription contains a broad range of d-line dispersion coordinates, from `νd = 81.5` for the three 1.49700 elements
to `νd = 25.4–25.5` for the dense/high-index flint coordinates in L2a and L4a. Opposing positive and negative powers are
also distributed among different dispersion classes within several cemented pairs.

Those facts support a description of deliberate chromatic balancing, and the patent's condition discussion explicitly
links the front material's specific gravity/dispersion tradeoff to chromatic correction. They do not establish
apochromatic correction. The source gives no element-specific partial-dispersion data, and the data file intentionally
contains no `nC`, `nF`, `ng`, or `dPgF` fields. Any stronger secondary-spectrum claim would require a defensible catalog
identity or direct line data that is absent here.

The production correlation is nevertheless notable: the patent has exactly three elements at the 1.49700/81.5
coordinate, while Canon specifies three UD elements in the production 17-element design. Because multiple suppliers offer
compatible material coordinates, the correlation is at the class/count level only.

## Conditional Expressions

The patent places eleven conditions around the first embodiment's group geometry, power distribution, focus sensitivity,
and front-material properties. Table 1 on PDF page 20 / printed page 8 gives the first-embodiment values. Conditions
(1)–(10) were independently recomputed from the extracted prescription and first-order model; condition (11) is discussed
separately because specific gravity is not encoded in `nd`/`νd` alone.

| Condition | Expression | Recomputed / cross-check | Published | Residual | Patent bound |
|---:|---|---:|---:|---:|---|
| 1 | `TD12t/TG12` | 6.959860 | 6.960 | −0.000140 | 4.3 < x < 12.0 |
| 2 | `TD1/TD2` | 7.344869 | 7.348 | −0.003131 | 3.6 < x < 30.0 |
| 3 | `m1/f1` | 0.297276 | 0.297 | +0.000276 | 0.1 < x < 0.5 |
| 4 | `f1/fw` | 1.490998 | 1.491 | −0.000002 | 1.0 < x < 3.0 |
| 5 | `f2/fw` | −0.352109 | −0.352 | −0.000109 | −1.0 < x < −0.2 |
| 6 | `ft/TTDw` | 2.340432 | 2.340 | +0.000432 | 1.0 < x < 3.5 |
| 7 | `ft/skw` | 20.434914 | 20.433 | +0.001914 | 8.0 < x < 35.0 |
| 8 | `TTDw/skw` | 8.731259 | 8.733 | −0.001741 | 5.0 < x < 20.0 |
| 9 | `D1max/TD1` | 0.636881 | 0.637 | −0.000119 | 0.4 < x < 0.9 |
| 10 | `|(1−βft²)βrt²|` | 10.263063 | 10.261 | +0.002063 | 4.0 < x < 20.0 |
| 11 | `G1d` | 2.460† | 2.460 | 0.000 | 2.0 < x < 3.0 |

The residuals are consistent with the rounded surface and spacing values printed in the patent. No prescription value was
altered to force a closer match.

Condition (10) is particularly relevant to the focus layout: the patent defines it as the telephoto-end position
sensitivity of the focusing unit. The independently calculated L5/L6 magnifications reproduce the Table-1 values and give
the condition value 10.263063.

† Condition (11) requires specific gravity. The patent publishes `G1d = 2.460`, but the optical table itself provides only
`nd` and `νd`. The audit found that the front coordinate is catalog-compatible with OHARA S-FSL5, whose catalog specific
gravity is 2.46; using that row reproduces the numerical condition. This supports consistency of the coordinate class but
does **not** establish that Canon used OHARA glass.

## Image Stabilization

The stabilization unit is L2. In the first embodiment, the patent states that L2 is fixed along the optical axis during
zooming and that the unit moves substantially perpendicular to the optical axis for image-shake correction (¶0064;
claim 21). L2 contains three elements in positive-negative-negative order, matching the data's L2a, L2b, and L2c.

The patent further states that this three-lens L2 construction suppresses eccentric aberration during image-shake
correction. That explanation is retained as a source claim. The present data file does not implement a transverse IS
control or decentered tracing state, so no numerical stabilization displacement, decentered aberration result, or
production shake-correction rating is inferred from the prescription.

Canon specifies in-lens optical stabilization for the production RF 200-800mm and rates the production system at up to
5.5 stops under its stated conditions. That production feature supports the product correlation but is mechanically
separate from the centered patent model analyzed here.

## Verification Summary

The completed data file preserves the 29-surface Example-1 prescription without scale change or optical-surface omission.
Source surface 19 is normalized only to the required `STO` label and an effectively infinite radius. The final surface gap
D29 remains the source back-focus interval. All selected-example lens surfaces are spherical; the data therefore has
`asph: {}` and no conic or polynomial conversion is involved.

First-order calculations were run from the parsed `.data.ts` values, not from a separate copy of the intended
prescription. Sequential height/reduced-angle tracing and an independently assembled ABCD matrix agree to floating-point
precision at all three published zoom states.

| State | EFL (computed / source) | BFD (computed / source) | Track (computed / source) | Paraxial half-field (computed / source) |
|---|---:|---:|---:|---:|
| Wide | 203.006060 / 203.00 mm | 37.983068 / 37.98 mm | 331.640 / 331.63 mm | 6.08463° / 6.08° |
| Intermediate | 390.814057 / 390.84 mm | 61.614183 / 61.62 mm | 390.980 / 390.98 mm | 3.16932° / 3.17° |
| Telephoto | 776.180743 / 776.00 mm | 96.312698 / 96.27 mm | 421.610 / 421.61 mm | 1.59700° / 1.60° |

The full surface-by-surface Petzval sum, using `φ/(n·n′)` on every refracting surface, is
`8.6349771 × 10⁻⁵ mm⁻¹`. Its reciprocal is about 11,581 mm under the adopted sign convention. The patent gives no Petzval
target, so this is a computed diagnostic rather than a source-match claim.

The physical stop diameter is also not a source quantity. The modeled wide-state `STO.sd = 12.986356 mm` is calibrated so
that the paraxial entrance pupil gives the published f/6.42 design value. The same calculation implies 13.219894 mm and
13.250667 mm wide-open stop radii at the intermediate and telephoto states when the source f/7.30 and f/9.18 values are
used. Matching those targets is calibration, not independent diaphragm-diameter verification.

Clear semi-diameters are likewise modeled because the patent provides none. The Stage-2 geometry checks give a minimum
modeled element edge thickness of 1.063339 mm, a maximum spherical rim-slope angle of 33.159769°, and a limiting shared-
band gap-intrusion fraction of 0.898107 at the S8→S9 air gap. Exact spherical meridional sample rays at the three published
states, plus two representative interpolated zoom states, do not first-clip at any modeled surface. These are
portable finite-sampling checks, not a substitute for LensVisualizer's production render diagnostics.

The design is therefore numerically self-consistent at the published infinity-focus zoom states, while three important
modeling limits remain explicit: the iris size is calibrated rather than measured, all clear apertures are inferred, and
no close-focus internal reconstruction exists.

## Sources / References

1. Kohei Kimura, **"Zoom Lens and Imaging Apparatus Including the Same," US 2024/0134166 A1**, published April 25,
   2024. First exemplary embodiment ¶¶0062–0065; First Numerical Example, PDF p.18 / printed p.6; Table 1, PDF p.20 /
   printed p.8. Original patent PDF is included in the dossier. Machine-readable cross-reference:
   <https://patents.google.com/patent/US20240134166A1/en>
2. **US 2024/0231055 A9**, corrected publication for application 18/490,639, published July 11, 2024; used only for the
   corrected filing/priority metadata: <https://patents.google.com/patent/US20240231055A9/en>
3. Canon U.S.A., **RF200-800mm F6.3-9 IS USM technical specifications** — 200–800 mm, RF mount, 17 elements in 11 groups,
   three UD elements, minimum-focus distances, Nano USM, and in-lens IS:
   <https://www.usa.canon.com/support/p/rf200-800mm-f6-3-9-is-usm>
4. Canon Inc., **Canon Camera Museum — RF200-800mm F6.3-9 IS USM** — production construction and November 2023 marketed
   date: <https://global.canon/en/c-museum/product/rf530.html>
5. Canon U.S.A., **November 2, 2023 lens announcement** — product announcement timing:
   <https://www.usa.canon.com/newsroom/2023/20231102-lens>
6. Authoritative catalog evidence recorded in the dossier includes OHARA optical-glass tables and 2023 pocket catalog,
   SCHOTT optical-glass data, HOYA cross-reference and TAFD40-W data, HIKARI optical-glass catalog, SUMITA optical-glass
   data, and the CDGM optical-glass database. These sources support coordinate compatibility only; they do not establish
   Canon's glass supplier.

## Catalog spectral proxy audit

The integration audit retains every patent index and Abbe value. The following annotations now select coordinate-compatible catalog curves at runtime, without identifying the production supplier or melt. Earlier coordinate-only descriptions above remain source descriptions; an unresolved supplier does not mean that no spectral proxy is available. No measured line indices or unsupported APD tags are added.

| Element | Patent nd / vd | Runtime spectral proxy |
|---|---|---|
| L1a | 1.48749 / 70.2 | N-FK5 |
