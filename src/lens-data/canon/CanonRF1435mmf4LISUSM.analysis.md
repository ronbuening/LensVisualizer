# CANON RF 14-35mm f/4 L IS USM — Optical Analysis

## Patent Reference and Design Identification

**Patent:** US 2022/0171174 A1\
**Application Number:** 17/535,432\
**Priority:** December 1, 2020 (JP 2020-199535)\
**Filed:** November 24, 2021\
**Published:** June 2, 2022\
**Inventor:** Takahiro Hatada\
**Applicant:** Canon Kabushiki Kaisha\
**Title:** *Zoom Lens and Imaging Apparatus Including the Same*\
**Embodiment analyzed:** Numerical Example 3

The prescription modeled here is Numerical Example 3 of US 2022/0171174 A1. The patent describes Example 3 as a
six-group negative-lead zoom in which the first group is negative, the second and third groups are positive, the fourth
and fifth groups are negative, and the sixth group is positive. The partial group LN inside L2 is the image-stabilization
group, and L4 is the focusing group. In wide-to-tele zooming, L1 first moves imageward and then reverses objectward,
L2 through L5 move objectward, and L6 remains stationary. In infinity-to-close focusing, L4 moves imageward (¶0029).

The production correlation used by the data file is the **CANON RF 14-35mm f/4 L IS USM**. It is a correlation from
convergent design evidence, not a statement by Canon that this patent is the retail prescription. The principal matching
criteria are:

1. **Focal range and aperture.** Numerical Example 3 is 14.42–33.95 mm at f/4.08–4.12, consistent with the marketed
   14–35 mm constant-f/4 specification after normal product rounding.
2. **Construction count.** The patent example contains 16 physical glass elements in 12 air-separated groups. Canon
   specifies 16 elements in 12 groups for the production lens.
3. **Special-element count.** The prescription contains three `nd = 1.49700, νd = 81.5` elements, one of which has two
   aspherical surfaces. Canon specifies three UD elements, including one UD aspherical element, and three aspherical
   elements overall.
4. **Aspherical distribution.** Six aspherical surfaces occur on exactly three physical elements: E2, E13, and E15.
5. **Image format.** The patent image height is 21.64 mm, corresponding to a 43.28 mm diameter image circle and therefore
   the 135/full-frame class used by the RF lens.
6. **Focusing and stabilization architecture.** The patent places a rear-side focusing group L4 behind the LN
   stabilization group. Canon specifies optical IS and Nano USM; Canon Japan separately identifies the production
   lens as using a rear-focus system.
7. **Timing.** The priority application predates Canon's June 29, 2021 product announcement. Canon Camera Museum records
   the production lens as marketed in September 2021.

The modeled prescription is unscaled: `s = 1.0`. Consequently, radii, spacings, semi-diameters, and image-plane
coordinates remain at patent scale, and the aspheric coefficients require no dimensional scaling transform.

One patent field-angle inconsistency is retained rather than silently reconciled. The Numerical Example 3 table prints a
wide half-angle of 53.26°, while Figure 8A labels the wide state `ω = 56.3°`. The simple paraxial quantity
`atan(21.64 / 14.42)` is 56.329°, which supports the figure value, but the data file does not author a projection override
from either conflicting source value.

## Optical Architecture

The design is best described by the patent's own term, a **negative-lead zoom** (¶0036), rather than by applying a
telephoto or retrofocus label to the entire zoom. The six zoom groups have the power sequence
**negative–positive–positive–negative–negative–positive**. Independent paraxial calculation from the final prescription
gives the following in-air group focal lengths:

| Group | Surfaces | Net focal length | Zoom/focus behavior |
|---|---|---:|---|
| L1 | 1–8 | −22.934 mm | Moves imageward, then reverses objectward during zoom |
| L2 | STO–18 | +62.852 mm | Moves objectward; contains LP and the LN IS group |
| L3 | 19–23A | +21.503 mm | Moves objectward |
| L4 | 24–25 | −35.510 mm | Moves objectward in zoom; moves imageward for close focus |
| L5 | 26A–27A | −94.241 mm | Moves objectward |
| L6 | 28–29 | +114.546 mm | Stationary in zoom |

The 16 physical elements form 12 air-separated optical groups. That count is distinct from the six functional zoom
groups L1–L6. Four pairs are cemented doublets: D1 at surfaces 10–12, D2 at 13–15, D3/LN at 16–18, and D4 at
19–21. The data model assigns each cemented junction to the downstream element, so no synthetic cement layer is present.

L1 is a strongly negative four-element front section. It expands the wide-angle field and supplies the dominant negative
front power required by the negative-lead architecture. L2 begins immediately behind the aperture stop and contains a
positive LP section followed by the negative LN stabilization doublet. The independently calculated LP focal length is
+38.487 mm, while LN is −73.580 mm. L3 then restores substantial positive power before the separate negative focusing
group L4 and negative L5. The stationary positive L6 closes the system near the image plane.

This power distribution is deliberately asymmetric. The patent explains that a positive LP before LN reduces ray height
at the stabilization group and that locating LN relatively toward the object side of the rear group can reduce aberration
variation when LN is shifted for stabilization (¶0038–¶0041). The prescription therefore uses the stop, LP, and LN as a
compact central subsystem rather than placing the stabilization group close to the image plane.

### Zoom kinematics

The patent publishes three infinity-focus control points at 14.42, 24.42, and 33.95 mm. The variable spacings are D8,
D18, D23, D25, and D27. The data file uses these three focal lengths directly as `zoomPositions`; it does not substitute
the marketed 14 and 35 mm endpoints.

Measured from the fixed image plane, the group-start positions reproduce the patent motion description. L1 occupies
−125.88, −118.34, and −125.87 mm at wide, middle, and telephoto, showing its reversal. L2 through L5 shift toward the
object over the same sequence, while L6 begins at −20.11 mm in all three states. The non-monotonic L1 motion is therefore
represented by the three patent control points rather than approximated as one monotonic trajectory.

The design is not a strict telephoto system at any defined zoom state because total lens length divided by EFL is greater
than one throughout. Under the strict `BFD > EFL` criterion, only the wide state qualifies as retrofocus: the patent
14.99 mm back focus is slightly longer than the 14.42 mm focal length. Middle and telephoto do not satisfy that test.
These first-order classifications are why the broader architectural description remains “negative-lead zoom.”

### Aperture stop and pupil model

Patent surface 9 is the sole aperture stop and is represented as `STO`. Its listed 18.03 mm effective diameter is retained
as a clear envelope, not treated as one fixed physical iris opening. A fixed 18.03 mm opening would not reproduce the
published f/4.08–4.12 values across the zoom range.

Using the exact modeled f-numbers, the required physical iris diameters are 11.316 mm at wide, 14.008 mm at middle, and
17.270 mm at telephoto. All remain inside the 18.03 mm stop-plane envelope. The data therefore uses
`nominalFno: [4.08, 4.08, 4.12]` to control the working pupil while retaining the patent semi-diameter of 9.015 mm at the
stop plane.

The generic patent discussion states that cross-sectional views include an auxiliary stop FC (¶0025), but Example 3's
Figure 7 has no FC label and its numerical prescription has no auxiliary-stop row. The example-specific evidence is
therefore followed: no FC, dummy plane, sensor cover glass, filter, or other inactive plane is added to the sequential
model.

## Element-by-Element Analysis

The focal lengths in the element headings below are the **isolated-element paraxial focal lengths in air** stored in the
final data file. They are not the same quantity as cemented-doublet power or in-situ group power. Where a cemented or
functional-group focal length is given, it is identified separately.

### E1 — Negative Meniscus

`nd = 1.77250, νd = 49.6. Glass: 773496 class (vendor indeterminate). f = −36.035 mm.`

E1 is the first member of the negative lead group L1. Its negative isolated power begins the strong front-end divergence
needed for the 14 mm-class wide state. Because L1 as a whole is −22.934 mm, E1's isolated value should not be read as its
in-situ contribution after the other three L1 elements are included.

The high index relative to the following L1 glasses allows substantial surface power without requiring still tighter
curvature. The patent does not identify a supplier, and the data therefore retains only a coordinate-class label.

### E2 — Negative Meniscus, Two Aspherical Surfaces

`nd = 1.58313, νd = 59.4. Glass: 583594 class (vendor indeterminate). f = −37.825 mm.`

E2 is the second negative member of L1 and carries aspherical surfaces 3A and 4A. Its placement directly behind E1 gives
the front group two consecutive negative elements before the high-Abbe E3. This is consistent with the patent's broader
preference for multiple successive negative lenses in the first group (¶0060).

The two aspheres allow the local surface shape to depart substantially from the corresponding conic bases without adding
another element. The quantitative departures are discussed in the asphere section rather than being assigned to one
specific aberration without a full aberration decomposition.

### E3 — Biconcave Negative

`nd = 1.49700, νd = 81.5. Glass: 497816-class UD/ED crown (vendor indeterminate). f = −50.280 mm.`

E3 is the third negative element in L1 and one of the three high-Abbe `1.49700/81.5` elements in the prescription. Canon's
production specification independently states that the retail lens uses three UD elements. That makes the UD/ED role in
the production correlation defensible, but it does not establish the actual glass supplier or a specific catalog melt.

Its position in the negative lead group gives the design a high-Abbe degree of freedom before the stop. No claim of
apochromatic or anomalous-partial-dispersion behavior is made because the source does not publish `nC`, `nF`, `ng`, or
`dPgF` for this element.

### E4 — Biconvex Positive

`nd = 1.83400, νd = 37.2. Glass: 834372 class (vendor indeterminate). f = +36.293 mm.`

E4 is the positive rear member of L1. It partially counteracts the three preceding negative elements while preserving the
net negative power of the complete front group. Its placement at the rear of L1 also shapes the bundle delivered across
the large variable D8 spacing to the stop and L2.

The full L1 focal length of −22.934 mm is therefore the relevant architectural quantity; E4's +36.293 mm isolated focal
length describes only the single element in air.

### D1 — E5 + E6 Cemented Doublet in LP

**E5:** `nd = 1.95375, νd = 32.3. Glass: 954323 class (vendor indeterminate). f = −46.231 mm.`\
**E6:** `nd = 1.63980, νd = 34.5. Glass: S-TIM27 coefficient proxy (supplier unspecified; patent 640345). f = +31.689 mm.`

E5 and E6 form cemented doublet D1 at surfaces 10–12. The pair combines a negative high-index meniscus with a positive
meniscus and has a computed **cemented net focal length of +110.715 mm**. This sign reversal relative to E5 alone
illustrates why isolated-element powers cannot be substituted for the behavior of a cemented group.

D1 is the first cemented pair within the positive LP section of L2. Together with D2, and the small intervening air gap,
it contributes to the independently computed LP focal length of +38.487 mm.

### D2 — E7 + E8 Cemented Doublet in LP

**E7:** `nd = 1.91082, νd = 35.3. Glass: 911353 class (vendor indeterminate). f = −40.861 mm.`\
**E8:** `nd = 1.51633, νd = 64.1. Glass: 516641 class (vendor indeterminate). f = +23.404 mm.`

E7 and E8 form the second positive cemented pair in LP. Their computed **cemented net focal length is +54.916 mm**.
The pair combines a high-index, lower-Abbe negative member with a lower-index, higher-Abbe positive member, providing
both net positive power and an internal chromatic degree of freedom without an air interface at the cemented junction.

The patent's design rationale focuses on the net positive LP power ahead of LN rather than on an isolated D1 or D2
function. The complete LP section is +38.487 mm and is the quantity used in the patent conditional expressions.

### D3 / LN — E9 + E10 Cemented Image-Stabilization Doublet

**E9:** `nd = 1.72047, νd = 34.7. Glass: 720347 class (vendor indeterminate). f = −25.524 mm.`\
**E10:** `nd = 2.00069, νd = 25.5. Glass: 001255 class (vendor indeterminate). f = +37.889 mm.`

E9 and E10 form the cemented LN doublet at surfaces 16–18. Its independently computed **cemented net focal length is
−73.580 mm**, identical to the LN functional-group focal length because LN is this cemented pair alone.

The patent requires the first and last surfaces of LN to be concave and explains that this shape helps limit coma and
field-curvature variation when LN is displaced for image stabilization (¶0040). In the numerical prescription, surface
16 has `R = −101.166 mm` and surface 18 has `R = +52.661 mm`, so the outer faces satisfy that stated geometry.

E9 supplies the negative member whose Abbe number enters conditional expression (4). The prescription prints `νd = 34.7`;
Table 1 rounds the same quantity as 34.71. The data keeps the prescription value rather than replacing it with the table's
extra digit.

### D4 — E11 + E12 Cemented Doublet in L3

**E11:** `nd = 1.80400, νd = 46.5. Glass: 804465/466 class (vendor indeterminate). f = −32.618 mm.`\
**E12:** `nd = 1.49700, νd = 81.5. Glass: 497816-class UD/ED crown (vendor indeterminate). f = +23.671 mm.`

E11 and E12 form cemented doublet D4 at surfaces 19–21. Their computed **cemented net focal length is +84.830 mm**.
D4 begins the positive L3 group and pairs a negative higher-index member with the second `1.49700/81.5` high-Abbe
positive element.

This doublet is followed by the separate positive aspherical E13. The combination gives L3 a much stronger net positive
focal length of +21.503 mm than D4 alone, again illustrating the difference between cemented-group and full-group power.

### E13 — Biconvex Positive, Two Aspherical Surfaces

`nd = 1.49700, νd = 81.5. Glass: 497816-class UD/ED crown (vendor indeterminate). f = +26.523 mm.`

E13 is the second, air-spaced positive element of L3 and carries aspherical surfaces 22A and 23A. It is the third
`1.49700/81.5` element in the prescription. Because Canon specifies one UD aspherical element in the production lens,
E13 is the direct structural match in the selected production correlation.

Its positive isolated power works with D4 to create the +21.503 mm L3 group. The paired aspheres allow the L3 rear
member to shape the bundle delivered to the focusing group without adding another glass element.

### E14 — Negative Meniscus, L4 Focus Group

`nd = 1.80400, νd = 46.5. Glass: 804465/466 class (vendor indeterminate). f = −35.510 mm.`

E14 is the complete L4 group: a single negative meniscus at surfaces 24–25. It therefore has the same isolated and group
focal length, −35.510 mm. The patent identifies L4 as the group that moves imageward during infinity-to-close focusing
(¶0029).

Because L4 is air-spaced between L3 and L5, its translation can change conjugate focus without disturbing cemented
interfaces. The final data file models close focus by changing only the two air gaps surrounding E14 while conserving
their sum at each zoom position.

### E15 — Biconcave Negative, Two Aspherical Surfaces

`nd = 1.85400, νd = 40.4. Glass: L-LAH85V-class coordinate match (supplier not established). f = −94.241 mm.`

E15 is the complete negative L5 group and carries aspherical surfaces 26A and 27A. Its isolated focal length therefore
matches the L5 group focal length of −94.241 mm.

The glass annotation is deliberately a **class coordinate match**, not a supplier attribution. The Stage 1 catalog audit
found the current OHARA L-LAH85V coordinates to be the closest match to the patent pair, but the patent itself does not
name OHARA and the data does not claim the production melt was supplied by OHARA.

### E16 — Positive Meniscus, Stationary L6

`nd = 1.48749, νd = 70.2. Glass: S-FSL5-class coordinate match (supplier not established). f = +114.546 mm.`

E16 is the stationary positive L6 rear group. Because it is a single element, its isolated focal length is also the L6
group focal length, +114.546 mm. L6 stays fixed during zooming while the preceding groups change position around it
(¶0029).

Its moderate positive power closes the moving-group train while preserving the approximately 15 mm rear clearance of the
patent prescription. As with E15, the S-FSL5 label records a coordinate-class match rather than a proven supplier.

## Glass Identification and Selection

The patent publishes d-line refractive index and Abbe number but no supplier names, melt codes, Sellmeier coefficients,
line indices, or partial-dispersion values. The data therefore preserves the optical coordinates and uses conservative
class-level annotations. S-TIM27 supplies a compatible dispersion curve for E6 without asserting that Canon used OHARA
glass. `nC`, `nF`, `ng`, and `dPgF` are intentionally absent from all elements.

| Data-file glass annotation | nd | νd | Elements | Interpretation |
|---|---:|---:|---|---|
| 773496 class (vendor indeterminate) | 1.77250 | 49.6 | E1 | Dense front-group class; supplier unresolved |
| 583594 class (vendor indeterminate) | 1.58313 | 59.4 | E2 | Moderate-index crown-class coordinate |
| 497816-class UD/ED crown (vendor indeterminate) | 1.49700 | 81.5 | E3, E12, E13 | Three high-Abbe elements; production correlation to Canon's three UD elements |
| 834372 class (vendor indeterminate) | 1.83400 | 37.2 | E4 | High-index L1 positive member |
| 954323 class (vendor indeterminate) | 1.95375 | 32.3 | E5 | Very high-index D1 negative member |
| S-TIM27 coefficient proxy (supplier unspecified; patent 640345) | 1.63980 | 34.5 | E6 | Exact six-digit-code proxy for D1 positive partner; supplier not established |
| 911353 class (vendor indeterminate) | 1.91082 | 35.3 | E7 | High-index D2 negative member |
| 516641 class (vendor indeterminate) | 1.51633 | 64.1 | E8 | Higher-Abbe D2 positive partner |
| 720347 class (vendor indeterminate) | 1.72047 | 34.7 | E9 | Negative LN member; enters patent condition (4) |
| 001255 class (vendor indeterminate) | 2.00069 | 25.5 | E10 | Very high-index LN positive partner |
| 804465/466 class (vendor indeterminate) | 1.80400 | 46.5 | E11, E14 | Used in L3 negative member and L4 focus element |
| L-LAH85V-class coordinate match (supplier not established) | 1.85400 | 40.4 | E15 | Closest catalog-coordinate class retained without supplier claim |
| S-FSL5-class coordinate match (supplier not established) | 1.48749 | 70.2 | E16 | High-Abbe rear positive class retained without supplier claim |

The strongest production-level glass evidence is the **count and placement** of the three `1.49700/81.5` elements.
Canon specifies three UD elements, including one UD asphere. The patent provides exactly three elements at that
coordinate, and E13 is aspherical on both surfaces. This supports the production correlation while remaining distinct
from catalog identification.

No element is labeled anomalous-partial-dispersion glass in the data. In particular, the `1.72047/34.7` coordinate of E9
has catalog equivalents in families sometimes associated with unusual partial dispersion, but the patent supplies no
line data or `dPgF`. A secondary-spectrum or APO claim would therefore exceed the evidence available to this model.

## Focus Mechanism

The patent gives the mechanism but not the close-focus spacing table: L4 moves imageward when focusing from infinity to a
close distance (¶0029). Canon independently specifies a Nano USM **rear-focusing system**, a minimum focusing distance of
0.20 m at every zoom setting, and a maximum magnification of 0.38× at 35 mm for the production lens.

The data file therefore uses a **CONSTRAINED_RECONSTRUCTION**, not a claim of patent-published close-focus data. The
0.200 m manufacturer MFD is normalized as object-to-sensor distance. L4 has one axial degree of freedom; D23 increases
and D25 decreases by the same amount so the L3-to-L5 interval is conserved at each zoom state. A paraxial solve places
the image at the fixed patent image plane.

| Zoom state | D23 infinity | D23 close | D25 infinity | D25 close | L4 imageward shift |
|---|---:|---:|---:|---:|---:|
| 14.42 mm | 1.400 mm | 2.282992 mm | 7.460 mm | 6.577008 mm | 0.882992 mm |
| 24.42 mm | 2.290 mm | 3.760420 mm | 6.570 mm | 5.099580 mm | 1.470420 mm |
| 33.95 mm | 1.880 mm | 3.852945 mm | 6.970 mm | 4.997055 mm | 1.972945 mm |

The reconstructed telephoto state gives a paraxial magnification magnitude of 0.380866 at the normalized 0.200 m
object-to-sensor distance, agreeing with Canon's marketed 0.38× to normal rounding. That agreement supports the chosen
reference-plane normalization and one-group mechanism constraint, but it does not turn the reconstructed spacings into
published patent values.

The model does not attempt to represent autofocus motor dynamics, focus breathing outside the three solved zoom control
points, or a separate floating correction group. Only the L4 mechanism explicitly supported by the patent is authored.

## Aspherical Surfaces

Six aspherical surfaces are present on three physical elements: 3A and 4A on E2, 22A and 23A on E13, and 26A and 27A on
E15. This matches Canon's production count of three aspherical elements, while the exact coefficients come solely from
Numerical Example 3.

The patent uses the standard conic form (¶0063):

$$
Z(h)=\frac{h^2/R}{1+\sqrt{1-(1+K)(h/R)^2}}+A_4h^4+A_6h^6+A_8h^8+A_{10}h^{10}+A_{12}h^{12}+A_{14}h^{14}.
$$

Thus the patent's `k` maps directly to the data file's standard `K`; no alternate κ-to-K conversion is required. The
prescription is not scaled (`s = 1`), so the tabulated coefficients are stored exactly as printed. Had a scale factor
been applied, each coefficient would require `A_p,scaled = A_p,patent / s^(p-1)`, but no such transform occurs here.

| Surface | K | A4 | A6 | A8 | A10 | A12 | A14 |
|---|---:|---:|---:|---:|---:|---:|---:|
| 3A | 0 | −4.032330e−05 | +2.843100e−07 | −1.854190e−09 | +6.481250e−12 | −1.223780e−14 | +9.288920e−18 |
| 4A | −0.560601 | −6.164520e−05 | +2.382190e−07 | −1.710890e−09 | −6.464930e−12 | +6.501940e−14 | −1.769650e−16 |
| 22A | 0 | −1.678370e−05 | −3.648430e−08 | +1.076180e−09 | −1.243500e−11 | +7.096010e−14 | 0 |
| 23A | 0 | +1.931770e−05 | −1.275750e−07 | +6.123780e−10 | −8.153720e−12 | +4.334820e−14 | 0 |
| 26A | 0 | +2.551010e−05 | −2.648460e−07 | −4.549600e−10 | +8.831990e−12 | −3.330760e−14 | 0 |
| 27A | 0 | +3.690790e−05 | −2.562850e−07 | +4.521830e−10 | +1.472500e−12 | −6.146780e−15 | 0 |

Paragraph 0063 prints the general expression only through A12, but Numerical Example 3 explicitly tabulates nonzero A14
terms for surfaces 3 and 4. The data preserves those A14 values as the natural continuation of the same even-power radial
polynomial rather than silently discarding them.

At the patent effective semi-diameters, the independently evaluated polynomial departures from the corresponding conic
bases are:

| Surface | Semi-diameter | Polynomial departure from conic base |
|---|---:|---:|
| 3A | 15.825 mm | −1.417408 mm |
| 4A | 13.230 mm | −2.300130 mm |
| 22A | 9.635 mm | −0.134220 mm |
| 23A | 10.005 mm | +0.088752 mm |
| 26A | 10.550 mm | −0.031439 mm |
| 27A | 11.105 mm | +0.205604 mm |

The front-group aspheres therefore carry the largest polynomial departures in the prescription, while the L3 and L5
aspheres apply smaller but still measurable edge reshaping. Surface 4A uses `K = −0.560601`; at its full published
semi-diameter, a same-radius spherical reference is not real, so its departure is correctly stated relative to the patent
conic base rather than to a sphere.

Canon Camera Museum describes the production lens as using two glass-molded aspherical elements plus one UD aspherical
element. The selected patent correlation places the UD asphere at E13. The patent itself does not specify manufacturing
process for each individual aspherical surface, so the data does not encode a process designation.

## Chromatic Correction Strategy

The glass distribution supplies chromatic leverage in several separated parts of the system without requiring a claim of
apochromatic correction. The three high-Abbe `1.49700/81.5` elements occur in L1 (E3) and L3 (E12 and E13), placing the
production-correlated UD material on both sides of the central stop/L2 subsystem.

Within the cemented pairs, relatively lower-Abbe negative and positive members are combined at D1, D2, D3/LN, and D4.
These interfaces give the design additional power/dispersion balancing freedom without introducing air gaps at the
cemented boundaries. The patent's explicit chromatic constraint on LN is modest: the negative lens included in LN must
satisfy `30 < νLN < 60` (¶0044, ¶0050), and E9's retained prescription value of 34.7 satisfies it.

The three production-correlated UD positions carry `apd: "inferred"` so the site diagram shows Canon's published
special-element count, including the UD asphere at E13. This is a display classification, not a patent glass-melt or
dispersion-curve claim: the model remains **Abbe-only** because the patent does not publish per-element line indices or
partial dispersion. The analysis therefore does not infer APO behavior or secondary-spectrum cancellation from the
`nd/νd` coordinate coincidence.

## Image Stabilization

The image-stabilization group is LN, the cemented E9/E10 doublet at surfaces 16–18 inside L2. The patent states that LN
moves in a direction containing a component perpendicular to the optical axis to correct image blur (claim 1; ¶0025,
¶0029). The centered sequential prescription represents the zero-decenter state only.

LN has a computed net focal length of −73.580 mm. Its first and last optical surfaces are both concave in the sense
specified by the patent. The patent attributes this outer-surface form to reducing fluctuations in coma and field
curvature during stabilization (¶0040). It also places positive LP immediately before LN so the off-axis ray height at
LN can be reduced (¶0039–¶0041).

The data file does not author an IS decenter range because the patent does not provide a direct lateral-displacement table
for Numerical Example 3. Figures 9A and 9B show lateral-aberration results for image stabilization corresponding to 0.3°
of correction, but that correction angle is not itself a mechanical decenter distance. No synthetic lateral travel is
therefore introduced.

Canon independently specifies optical image stabilization for the production lens. That product feature supports the
correlation but does not establish the patent's exact IS actuator stroke or decenter amount.

## Conditional Expressions

The patent defines eight design conditions in ¶0044 and gives Example 3 values in Table 1. Independent calculation from
the final prescription reproduces those values to the precision expected from the rounded prescription.

| Condition | Computed | Patent range | Result |
|---|---:|---:|---|
| `fLN / ft` | −2.167294 | −4.0 < x < −1.0 | Pass |
| `fLP / ft` | +1.133639 | 0.8 < x < 1.8 | Pass |
| `fLN / fLP` | −1.911804 | −2.4 < x < −0.8 | Pass |
| `νLN` | 34.7 | 30 < x < 60 | Pass |
| `(r1 + r2) / (r1 − r2)` | +0.315322 | −1.0 < x < 1.0 | Pass |
| `dLN / dt` | +0.117184 | 0.00 < x < 0.25 | Pass |
| `f1 / fw` | −1.590459 | −2.2 < x < −1.0 | Pass |
| `f1 / skw` | −1.529981 | −2.2 < x < −0.9 | Pass |

For condition (5), the LN boundary radii are `r1 = −101.166 mm` and `r2 = +52.661 mm`. For condition (6), the relevant
LN axial distance is 14.75 mm and the telephoto entire lens length is 125.87 mm. These quantities are evaluated from the
same prescription used by the data file rather than copied from Table 1.

## Verification Summary

Independent sequential height/reduced-angle tracing and a 2×2 ABCD calculation agree exactly for the three patent zoom
states. The first-order results are:

| State | Computed EFL | Patent EFL | Computed BFD | Patent BF |
|---|---:|---:|---:|---:|
| Wide | 14.418880 mm | 14.42 mm | 14.990534 mm | 14.99 mm |
| Middle | 24.420467 mm | 24.42 mm | 15.000928 mm | 14.99 mm |
| Telephoto | 33.959239 mm | 33.95 mm | 15.034273 mm | 14.99 mm |

The increasing BFD residual at telephoto reaches +0.044273 mm. No source spacing is altered to force exact agreement;
the residual is consistent with the prescription's printed radius, spacing, and index precision. The wide-state printed
spacings sum to 125.88 mm while the patent's “Entire lens length” row says 125.87 mm; the data preserves the printed
spacings and does not absorb the 0.01 mm discrepancy into an arbitrary gap.

Surface-by-surface Petzval summation using `φ/(n·n′)` gives `+0.002962614965 mm⁻¹`, with reciprocal
`+337.539644 mm` under the retained sign convention. This is a Petzval sum only and is not presented as a traced
best-focus field-curvature surface.

All authored element edge thicknesses are positive at the patent semi-diameters. The minimum is 1.275230 mm at E10. The
largest actual rim angle is 62.765° at surface 2, below the current approximately 64.2° validator limit, and all aspheric
conic domains are valid.

The closest shared-band air-gap case is 4A→5. At the patent semi-diameter of 13.095 mm, the two boundary sags intrude
10.022449 mm into the 10.87 mm axial gap, leaving 0.847551 mm physical clearance. The intrusion fraction is 0.922028.
The data therefore uses `gapSagFrac: 0.93` rather than shrinking the patent effective diameters to satisfy the shared
0.90 default. This is a geometry-validation margin override, not a layout device.

A meridional d-line containment stress test at 60% of the source half field found no clipping at cemented internal
junctions in any of the six modeled zoom/focus states. One outer telephoto/infinity ray vignettes at surface 21, an air
boundary at the rear of D4, which is consistent with ordinary edge vignetting rather than an impossible cemented-group
intersection.

The sequential model omits no published refracting plate from Numerical Example 3. It also adds no sensor cover glass,
filter, auxiliary stop, dummy plane, flare-cutter plane, blocker, or mechanical component. Surface semi-diameters are
one-half the patent's published effective diameters; they are not inferred from ray heights. The only reconstructed
optical state is close focus, explicitly described above.

## Sources / References

1. **US 2022/0171174 A1**, Takahiro Hatada, *Zoom Lens and Imaging Apparatus Including the Same*, Canon Kabushiki
   Kaisha, published June 2, 2022. Numerical Example 3; especially ¶0029, ¶0036–¶0064, Figures 7–9, and Table 1.
2. **Canon U.S.A.**, “RF14-35mm F4 L IS USM Lens,” announcement dated June 29, 2021. Product identity, announced focal
   range/aperture, minimum focus, maximum magnification, optical IS, and Nano USM.\
   https://www.usa.canon.com/newsroom/2021/20210629-lens
3. **Canon U.S.A.**, “RF14-35mm F4 L IS USM,” official product specifications. RF mount, 14–35 mm f/4, 16 elements in
   12 groups, three UD elements, three aspherical elements including one UD asphere, 0.20 m minimum focus, 0.38× maximum
   magnification, nine blades, optical IS, and Nano USM.\
   https://www.usa.canon.com/shop/p/rf14-35mm-f4-l-is-usm
4. **Canon Japan**, “RF14-35mm F4 L IS USM,” official product page. Identifies the production lens as using a rear-focus
   system and Nano USM.\
   https://personal.canon.jp/product/camera/rf/rf14-35-f4l
5. **Canon Camera Museum**, “RF14-35mm F4 L IS USM.” Marketed September 2021; 16 elements in 12 groups; 0.20 m minimum
   focusing distance; 0.38× maximum magnification; nine diaphragm blades; production block diagram and special-element
   description.\
   https://global.canon/en/c-museum/product/rf509.html
6. Current official optical-glass catalogs from **OHARA, HOYA, HIKARI, SCHOTT, CDGM, and SUMITA** were used for the
   coordinate-class audit. Because the patent does not identify a supplier, the final data retains class-level or
   coordinate-match annotations rather than assigning unproven production glass names.
