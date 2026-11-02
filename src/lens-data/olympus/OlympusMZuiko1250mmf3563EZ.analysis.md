# OLYMPUS M.ZUIKO DIGITAL ED 12-50mm f/3.5-6.3 EZ

## Patent Reference and Design Identification

**Patent:** JP 2012-173420 A (JP2012173420A)  
**Application Number:** JP 2011-33632  
**Filed:** 18 February 2011  
**Published:** 10 September 2012  
**Inventors:** Koji Ogata; Kazuteru Kawamura; Yasuharu Yamada; Hirohiko Kimata  
**Applicant:** Olympus Imaging Corporation  
**Title:** ズームレンズ (Zoom lens)  
**Example details:** Numerical Example 2, Figure 2; normal-focus states only

This prescription is a qualified design correlation to the Olympus
M.ZUIKO DIGITAL ED 12–50mm F3.5–6.3 EZ, rather than a manufacturer-confirmed
identification of its exact production prescription.
The original patent's bibliographic header and continuation identify all four
inventors; the numerical example is used at its published scale, without
rescaling. The supporting evidence converges as follows:

1. The example contains ten powered lens elements in nine air-separated
   components, matching the manufacturer brochure's optical count.
2. L2, L5 and L8 each have two aspheric faces, six aspherical surfaces on
   three elements. The brochure identifies two aspherical elements and a DSA
   element, and OM Digital Solutions' construction diagram shades element 2
   (L2) as the DSA element and elements 5 and 9 (L5, L8) as aspherical. This
   supports the structural correlation without identifying the materials.
3. The same diagram shades element 6 (L6a) as the HR (high-refractive-index)
   element and element 7 (L6b) as the one ED element, cemented together. The
   patent's pair is a high-index negative lens (nd 1.834) cemented to a
   high-Abbe positive lens (νd 81.54), so the positions agree.
4. The patent's short-to-long range is 12.243–48.956 mm, close to the marketed
   12–50 mm. These are deliberately separate design and marketing quantities.
5. The patent's nominal f-numbers are 3.64–6.48, compared with marketed
   F3.5–6.3. The model keeps the patent's values rather than adjusting the
   iris to the marketed numbers.
6. Numerical Example 2 includes infinity and nominal 0.35 m focus at all
   three zoom stations. The manufacturer specifies 0.35 m normal focusing.
7. A negative singleton G2 performs internal focus and wobbling in the
   patent. The manufacturer describes a linear MSC focus drive. The
   architecture is compatible, although the optical table does not specify
   the production actuator's dimensions or control law.
8. The application predates the December 2011 launch announcement, which
   records a January 2012 release plan.

The brochure identifies the Micro Four Thirds system. Its marketed field is
84–24°, whereas the patent's full field is 89.71–24.46°.
The source numerical image height is 10.815 mm; the aberration plots round this
to FIY10.82. Neither field discrepancy is silently replaced with the marketed
number. The patent permits electronic wide-end barrel-distortion correction
(¶0118), but that does not establish the production camera's exact crop or
correction map.

The product also offers a separate macro mode. The brochure's 0.20 m macro
distance is excluded from this normal-focus transcription, and the macro
mode is not modeled; the launch announcement describes a fixed
telephoto-region macro setting without
giving its exact focal length.
No macro spacing is inferred from the six supplied states, and no additional
example or sibling patent supplies missing values.
[Patent, PDF pp.1,15–16,20–22,28,31–33,36; manufacturer brochure, PDF p.13.]

## Optical Architecture

The five motion groups follow a negative–negative–positive–negative–positive
power sequence. This is a negative-lead zoom with two separately useful
negative groups ahead of its principal positive group, rather than a simple
front negative attachment followed by an invariant positive imaging lens.
The rear positive singleton completes the power distribution.
The ten-element/nine-component count must not be confused with these five
kinematic groups. The stop lies inside G3, between L5 and the cemented L6 pair.
The camera-side plate is a separate non-powered propagation component.

| Group | Source surfaces | Constituents | Computed standalone focal length (mm) |
|---|---|---|---:|
| G1 | 1–6 | L1, L2, L3 | -41.219245 |
| G2 | 7–8 | L4 | -44.910700 |
| G3 | 9–14 | L5, stop, L6a/L6b | +18.398809 |
| G4 | 15–18 | L7, L8 | -23.276273 |
| G5 | 19–20 | L9 | +45.180474 |

Group powers are calculated with each group isolated in air. They are not
individual contributions to the assembled system's focal length.
G3's positive L5 front subgroup has f = +17.308549 mm; its rear cemented
L6a/L6b subgroup is weakly positive at +445.391483 mm. The assembled G3 value
therefore depends on subgroup separation as well as their separate powers.

G1 and G5 are nominally fixed relative to the image during zoom. G2 first
moves imageward and then reverses objectward; G3 and G4 move objectward.
The literal printed rows retain a 0.0002 mm total-track difference between
wide and the other stations. Thus an exactly fixed first vertex and exactly
fixed rear group cannot both be asserted for every last printed decimal.
The source's mechanical description and that tiny numerical rounding remain
separate facts. The depicted arrows are not continuous cam trajectories
(¶0084, ¶0092–0093).

### Zoom Path

The patent prints three infinity zoom stations and the matching 0.35 m near
states; the model reproduces all six gap sets exactly. Paragraph 0017
attributes most of the zoom ratio to G3, with G4 moving objectward so that
both the G3–G4 and G4–G5 spacings widen. Paragraph 0018 has G2 and G4 acting
together as the compensator, and claim 2 has G2 move first imageward and then
objectward.

The 198 intermediate positions are an inferred reconstruction built on that
description, not the factory cam. G3's position is the zoom coordinate. G2
follows a smooth law through its three printed positions with a single
reversal; its peak is placed between the middle and tele stations, 0.15 mm
beyond the printed middle-station D6 (9.4745 mm against 9.3245 mm). G4 is then
solved paraxially at each position so that infinity focus lands on the fixed
image plane, holding the 0.003–0.010 mm residual of the printed stations
interpolated between them. G3 and G4 move objectward throughout, D8 narrows
and D14 and D18 widen monotonically, and the focal length rises steadily;
intermediate focal lengths are spaced geometrically between printed stations.
The peak placement is a choice among those that keep G4 monotone, not a
recovered value.

At the wide station, the air-equivalent back focal distance exceeds the
12.243 mm focal length, consistent with a retrofocus tendency.
At the long station, the approximately 100.11 mm air-equivalent track exceeds
48.956 mm; the package is not telephoto-shortened by a track/focal-length
criterion. These are state-specific first-order descriptions, not a new
patent classification.

## Element-by-Element Analysis

The following focal lengths are standalone thick-element values in air,
computed from the prescription radii and thicknesses and the patent's d-line
indices. For the cemented pair this means mathematically isolating each
component; neither isolated value is the power of the shared interface in situ.
Each named glass below is a catalog equivalent matched to the patent's nd/νd.
The production supplier and melt are unspecified.

### L1 — Negative Meniscus, convex to object

nd = 1.77250, νd = 49.60. Glass: S-LAH66 (OHARA catalog equivalent; production supplier unspecified). f = -34.181234 mm.

L1 opens the fixed negative G1 with a stronger rear-surface curvature than
front-surface curvature. Together with negative L2 and positive L3 it gives
the front group its negative net power, as expressly described in ¶0090–0091.
Its front and rear modeled clear radii are unequal, 18.0 and 14.0 mm;
these are inferred optical rims, not manufacturer diameters. The larger
front region supports the wide-field chief. The drawing's peripheral
mechanical outline is not modeled as extra refractive material.

### L2 — Aspherical Negative Meniscus, convex to object

nd = 1.58313, νd = 59.38. Glass: S-BAL42 (OHARA catalog equivalent; production supplier unspecified). f = -38.690727 mm.

Both faces, 3A and 4A, are aspheric, and the manufacturer's construction
diagram shades this position as the lens's DSA element. This negative
element introduces non-spherical shape freedom within the front negative
group before the moving focus singleton. The sign of its paraxial power remains negative;
higher-order shape terms do not alter the vertex curvatures used to compute
that power. The rear face has substantial departure at the inferred rim,
so a spherical drawing surrogate would misrepresent both its outline and
its clearance to the adjacent surface. The S-BAL42 catalog equivalent does
not establish whether production used an S-grade or an L-grade (low-Tg
molding) glass.

### L3 — Positive Meniscus, convex to object

nd = 1.80810, νd = 22.76. Glass: S-NPH1 (OHARA catalog equivalent; production supplier unspecified). f = +37.806978 mm.

L3 is the positive member of the otherwise negative front group. Its low
Abbe number contrasts with the two preceding negative members and provides
a chromatic degree of freedom across G1. This is a power/material observation,
not an isolated attribution of a measured aberration correction. All three
G1 elements remain at fixed internal separations during the modeled motions
(¶0091–0093).

### L4 — Negative Meniscus, convex to image

nd = 1.74100, νd = 52.64. Glass: S-LAL61 (OHARA catalog equivalent; production supplier unspecified). f = -44.910700 mm.

L4 alone forms G2, so its isolated focal length also equals the complete
focus-group focal length. Its negative meniscus bends with the convex face
toward the image, in agreement with ¶0091. Source conditions (5)–(7)
constrain its relative power, shape and index. Its single-element construction
is central to the small moving focus unit described in ¶0092; mass and
actuator performance cannot be derived from an optical coordinate alone.

### L5 — Aspherical Biconvex Positive

nd = 1.58313, νd = 59.38. Glass: S-BAL42 (OHARA catalog equivalent; production supplier unspecified). f = +17.308549 mm.

L5 is the positive front subgroup of G3 and carries aspheres 9A and 10A; the
manufacturer's diagram shades it as an aspherical element.
It precedes the aperture stop, while the cemented pair follows the stop.
The ratio of its focal length to that of G3 is about 0.940743, satisfying
condition (8). The positive front subgroup consequently accounts for most
of G3's standalone converging power, but the separated rear pair still
changes its principal planes and net power. No individual third-order
aberration contribution has been isolated numerically.

### L6a — Negative Meniscus of the cemented L6 pair

nd = 1.83400, νd = 37.16. Glass: S-LAH60 (OHARA catalog equivalent; production supplier unspecified) — HR element. f = -13.930981 mm.

L6a is the high-index negative component of the cemented L6 pair, and the
manufacturer's construction diagram shades it as the lens's one HR
(high-refractive-index) element. Its rear
face is the same physical interface as L6b's front face, source surface 13.
There is no artificial air film or generic cement layer. The source's
constraints on the rear G3 subgroup's negative material include its index
and Abbe number, conditions (10)–(11); ¶0049–0050 relates these to Petzval,
chromatic correction and material cost. Those are patent-stated design
arguments, not measurements of this single component in isolation.

### L6b — Biconvex Positive of the cemented L6 pair

nd = 1.49700, νd = 81.54. Glass: S-FPL51 (OHARA catalog equivalent; production supplier unspecified) — ED element. f = +14.725695 mm.

The positive low-dispersion partner satisfies the high-Abbe condition (9),
and the manufacturer's construction diagram shades it as the lens's one ED
element, cemented to the HR element ahead of it. Its νd = 81.54 matches the
S-FPL51 catalog coordinate, although neither the numerical table nor the
coordinate match proves that production used that named glass. The model
therefore marks its anomalous partial dispersion as inferred from the
catalog equivalent rather than published. L6a and L6b together are only
weakly positive when isolated as a cemented block. Their opposing powers and contrasting dispersion offer
chromatic balancing freedom; that does not establish apochromatic performance
or a measured secondary-spectrum cancellation.

### L7 — Negative Meniscus, concave to image

nd = 1.83481, νd = 42.71. Glass: S-LAH55 (OHARA catalog equivalent; production supplier unspecified). f = -20.848917 mm.

L7 provides the strong negative contribution in G4. The source's shape
ratio condition (12), index condition (13), and Abbe condition (14) apply to
this negative component. Paragraphs ¶0057–0059 connect the preferred ranges
to wide-end distortion, field curvature, package size and glass cost.
S-LAH55 is kept distinct from S-LAH55V; the similar name alone does not
establish the same dispersion.

### L8 — Aspherical Positive Meniscus, explicitly plastic

nd = 1.53071, νd = 55.69. Glass: Unmatched (optical plastic per the patent; polymer unpublished). f = +192.151127 mm.

The patent explicitly states that L8 is made of plastic (¶0091). Both
faces, 17A and 18A, are aspheric; the manufacturer's diagram shades this
position as an aspherical element. The vertex-based standalone power is
weakly positive. The highly negative conic constants and polynomial terms
shape the peripheral surface while the vertex radii preserve that weak
paraxial power. The polymer is unidentified. A catalog mineral-glass
coordinate, or a broadly similar commercial polymer index, would not
establish its material identity or dispersion curve. It therefore remains
Unmatched and uses only the declared nd/νd fallback.

### L9 — Positive Meniscus, convex to image

nd = 1.75211, νd = 25.05. Glass: FF8 (HOYA catalog equivalent; production supplier unspecified). f = +45.180474 mm.

L9 is the positive rear singleton G5 and is nominally fixed relative to
the image. The patent explicitly identifies the imageward-convex meniscus
(¶0091). Condition (15) bounds its Abbe number; ¶0061 associates G5 with
lateral-color correction particularly toward the telephoto end. FF8 is a
HOYA catalog equivalent, not a supplier attribution.
The following camera plate is not part of L9 or of the ten-element count.

## Glass Identification and Selection

The patent's table gives d-line refractive index and Abbe number, not glass
or supplier names. The names below are catalog equivalents chosen by matching
those coordinates against the CDGM, HIKARI, HOYA, OHARA, SCHOTT and SUMITA
catalogs; they do not establish the production supplier or melt.

| Element | nd | νd | Catalog equivalent | Role and qualification |
|---|---:|---:|---|---|
| L1 | 1.77250 | 49.60 | S-LAH66 (OHARA) | Front negative meniscus; production supplier unspecified |
| L2 | 1.58313 | 59.38 | S-BAL42 (OHARA) | Maker's DSA element; molding grade unspecified |
| L3 | 1.80810 | 22.76 | S-NPH1 (OHARA) | High-dispersion positive of G1; production supplier unspecified |
| L4 | 1.74100 | 52.64 | S-LAL61 (OHARA) | Focusing singleton; production supplier unspecified |
| L5 | 1.58313 | 59.38 | S-BAL42 (OHARA) | Aspherical; same coordinate as L2 |
| L6a | 1.83400 | 37.16 | S-LAH60 (OHARA) | Maker's HR element; high-index negative of the cemented pair |
| L6b | 1.49700 | 81.54 | S-FPL51 (OHARA) | Maker's ED element; anomalous partial dispersion inferred from the catalog equivalent |
| L7 | 1.83481 | 42.71 | S-LAH55 (OHARA) | High-index negative of G4; production supplier unspecified |
| L8 | 1.53071 | 55.69 | Unmatched | Optical plastic per the patent; polymer unpublished |
| L9 | 1.75211 | 25.05 | FF8 (HOYA) | High-dispersion rear positive; production supplier unspecified |
| Camera plate C | 1.51633 | 64.14 | S-BSL7 (OHARA) | Camera-side plate, not a lens element |

The chromatic pairing that matters most is the cemented L6 pair in G3: the
HR negative L6a (νd 37.16) against the ED positive L6b (νd 81.54), whose
ranges the patent sets in conditions (9)–(11). The patent's coordinates are
kept even where a catalog curve's reference index or Abbe value differs in its
last digits. S- and L-prefixed OHARA families are not interchangeable merely
because their tabulated coordinates are similar, so the S-BAL42 equivalent does
not assert a production molding grade for L2 or L5. L8's plastic designation
takes precedence over any nearby mineral-glass coordinate.

Ten of the eleven materials, counting the camera plate, resolve to catalog
dispersion curves. L8 uses only its nd/νd, so the model's dispersion for that
element is Abbe-limited. The patent uses 587.6 nm; catalog reference indices
are given at 587.5618 nm, a small convention difference rather than a source
correction.

No measured nC/nF/ng or ΔPgF values are attributed to the production
materials; catalog-derived line values describe the catalog equivalents only.
In particular, neither the ED element nor the modeled colored rays justify
an APO designation for the whole lens.

## Focus Mechanism

This is published internal focusing by negative G2/L4 alone. Near focus
moves G2 objectward. D6 decreases by exactly the amount D8 increases at each
station; D14 and D18 remain unchanged. G1, G3, G4 and G5 do not acquire a
reconstructed focus motion. The source describes G2 wobbling as well as
focusing, while the manufacturer documents the linear MSC drive.

| Station | D6 infinity → near (mm) | D8 infinity → near (mm) | G2 objectward travel (mm) |
|---|---:|---:|---:|
| Wide | 6.6446 → 5.3346 | 30.0675 → 31.3775 | 1.3100 |
| Mid | 9.3245 → 8.0933 | 12.3503 → 13.5815 | 1.2312 |
| Tele | 5.9114 → 4.5785 | 1.5559 → 2.8888 | 1.3329 |

The source labels the near state 0.35 m without expressly locating the
object-distance reference plane. Solving the paraxial conjugate at the
unchanged source image plane gives:

| Near station | Object to first vertex (mm) | Object to physical image (mm) | Transverse magnification |
|---|---:|---:|---:|
| wide | 247.212941 | 348.713841 | -0.04572651 |
| mid | 247.980549 | 349.481249 | -0.09087723 |
| tele | 248.197776 | 349.698476 | -0.18229567 |

The image-plane distances are compatible with the rounded 0.35 m label;
350 mm from the first vertex is not. This supports an image-plane convention
as an interpretation, but does not convert an unstated reference into a
published fact. The model therefore keeps the printed near gaps without
asserting a certified object distance. Finite-ray checks that place the
object 350 mm from the image plane rest on that assumption.

Figure 9 labels FNO 3.598, 5.117 and 6.246 without expressly defining
the near-state f-number convention.
Holding the paraxially inferred infinity iris gives 3.597484, 5.116219 and
6.242014. The strict last-place differences remain visible. The infinity
f-number inputs are printed to only two decimals, so this comparison cannot
be treated as a three-decimal independent measurement of iris diameter.
Geometric EFL/entrance-pupil f-number and finite image-cone working f-number
are different quantities.

At intermediate zoom positions the near state moves G2 objectward by the
amount that refocuses the fixed image plane at an object-to-image distance
interpolated between the three printed near states. Those intermediate near
states are reconstructions, not published conjugates. Linear interpolation
between the infinity and near rows is a display convenience, not a calibrated
motor-distance relation.

## Aspherical Surfaces

L2 carries 3A/4A, L5 carries 9A/10A, and plastic L8 carries 17A/18A.
The source uses the conventional conic constant K:

z(h) = c h² / [1 + √(1 − (1 + K)c²h²)] + A4 h⁴ + A6 h⁶ + A8 h⁸ + A10 h¹⁰ + A12 h¹².

Here c = 1/R; R and h are in millimetres. A_p therefore has units
mm^(1−p). No uniform scale, conic conversion or coefficient rescaling is
applied. Printed A12 values, including explicit zeros for 9A/10A/17A/18A, are
retained; unlisted A14 is set to zero on all six surfaces. The original table supplies only even powers.
[Patent ¶0108 and Numerical Example 2, PDF pp.17,20–21.]

| Surface | K | A4 | A6 | A8 | A10 | A12 |
|---|---:|---:|---:|---:|---:|---:|
| 3A | 1.2447 | 2.0075E-05 | -2.7611E-07 | 2.4894E-10 | 3.5331E-12 | -9.3037E-15 |
| 4A | -1.0662 | 2.1822E-05 | -3.0982E-07 | -1.7795E-09 | 1.9840E-11 | -5.0306E-14 |
| 9A | 0.0000 | -3.8287E-05 | -4.3941E-08 | 1.5034E-10 | 1.3526E-11 | 0.0000E+00 |
| 10A | 0.0000 | 6.6094E-05 | -2.9345E-08 | -1.6201E-09 | 3.6897E-11 | 0.0000E+00 |
| 17A | -82.6051 | 2.9743E-04 | -7.3765E-06 | 9.2595E-08 | -8.7606E-10 | 0.0000E+00 |
| 18A | -271.4873 | 2.8604E-04 | -6.8173E-06 | 8.5146E-08 | -7.3142E-10 | 0.0000E+00 |

A polynomial coefficient's sign alone does not describe the complete
surface: the conic and other powers must be evaluated together.
The following departures subtract a sphere with the same vertex radius and
use the explicitly inferred, rather than source-published, clear rim.

| Surface | Inferred semi-diameter (mm) | Asphere minus base sphere at rim (mm) |
|---|---:|---:|
| 3A | 13.00 | -0.214301269 |
| 4A | 13.00 | -3.113223366 |
| 9A | 7.30 | -0.108352722 |
| 10A | 7.30 | +0.186045921 |
| 17A | 7.00 | -0.088563615 |
| 18A | 7.00 | +0.004519332 |

The two L2 faces depart in the negative axial direction relative to their
base spheres, especially 4A at its large inferred rim. L5's front and rear
faces have opposite signed rim departures. L8's large negative conics and
higher orders yield a negative front departure but a small positive rear
departure at the selected rim. These are evaluated shape statements,
not an assignment of isolated spherical-aberration or coma coefficients.
The conic domains and rim slopes of all six surfaces were checked, and no
slope turnover occurs within these radii.

The source explicitly identifies L8 as plastic, but does not establish its
polymer or fabrication process. The manufacturer's construction diagram
labels L2, not L8, as the DSA element and shades L5 and L8 as aspherical
elements. That agrees with the patent's three double-aspheric elements
without showing which material or molding process produced each surface.
No hybrid resin layer or extra refractive interface is inserted.

## Chromatic and Aberration Correction Strategy

The power-opposed L6 pair combines a relatively high-index negative component
with a high-Abbe positive component: the manufacturer's HR element (L6a)
cemented to its one ED element (L6b). The patent's conditions (9)–(11) state
material ranges for this rear part of G3, and its text relates those ranges
to chromatic correction and Petzval control. The negative front group and
rear positive L9 provide further chromatic degrees of freedom.
The numerical model supports those architecture/material descriptions,
but does not isolate each component's Seidel contribution.

The total d-line surface Petzval sum is +0.003737471282 mm⁻¹ under the
sum (n'−n)/(n n' R) convention. This is invariant across the modeled air-gap
changes. It is not the complete tangential or sagittal image-surface
curvature, and a small sum alone does not establish flat-field performance.

Paragraph ¶0118 permits electronic correction of wide-end barrel distortion.
The geometric trace contains no electronic warp, crop, stabilization motion,
or measured camera processing profile. Aberration plots in Figures 8 and 9
are source plots, not measured production MTF or newly regenerated curves.
The d/g/C plot legend uses 587.6/435.8/656.3 nm respectively. The plots show
SA and AS scales of ±0.30 mm, distortion ±10%, and lateral color ±0.02 mm;
those axes do not alone establish a maximum model error.

## Conditional Expressions

The table below uses the printed wide focal length 12.243 mm in the
normalizations and source first-vertex positions for movement. Δ denotes
objectward displacement from wide to tele. A second convention, using the
computed wide focal length and a fixed-image frame, changes only tiny
normalized rounding terms.
All inequalities are strict and all fifteen pass. Rounded patent-column
values remain distinct from recomputation.

| Condition | Definition | Required interval | Computed | Patent Example 2 |
|---|---|---|---:|---:|
| (1) | (d45T-d45W)/fw | 0.5 < value < 2 | 1.08694764 | 1.09 |
| (2) | Delta3/fw; objectward positive | 2 < value < 3 | 2.38869558 | 2.39 |
| (3) | Delta4/fw; objectward positive | 1 < value < 1.6 | 1.08696398 | 1.09 |
| (4) | Delta5/fw; objectward positive | -0.5 < value < 0.5 | 0.00001634 | 0 |
| (5) | f2/fw | -6 < value < -2 | -3.66827575 | -3.67 |
| (6) | (r2L-r2R)/(r2L+r2R) | -1 < value < -0.4 | -0.60202753 | -0.6 |
| (7) | nd2 | 1.65 < value < 2.15 | 1.74100000 | 1.741 |
| (8) | f3f/f3 | 0.7 < value < 1.3 | 0.94074293 | 0.94 |
| (9) | vd3bp | 65 < value < 96 | 81.54000000 | 81.54 |
| (10) | nd3bn | 1.75 < value < 2.05 | 1.83400000 | 1.834 |
| (11) | vd3bn | 20 < value < 55 | 37.16000000 | 37.16 |
| (12) | (r4L-r4R)/(r4L+r4R) | 0.4 < value < 1.6 | 0.78797613 | 0.79 |
| (13) | nd4 | 1.65 < value < 2.05 | 1.83481000 | 1.83481 |
| (14) | vd4 | 20 < value < 60 | 42.71000000 | 42.71 |
| (15) | vd5 | 15 < value < 30 | 25.05000000 | 25.05 |

For condition (4), the first-vertex result is about 0.00001634, while the
fixed-image result is zero to numerical precision. The difference comes
from the unchanged 0.0002 mm printed track variation, not a modeled extra
rear-group travel. Both round to the patent's 0.00.
The conditions constrain architecture and material choices; satisfying them
does not independently establish product attribution or production image quality.
[Patent ¶0014–0061; Example 2 column, ¶0120, PDF p.28.]

## Verification Summary and Implementation Limits

The model keeps the camera-side plate at its printed 4.080 mm thickness,
followed by the printed 0.745 mm image gap. The plate is traced but not
drawn, does not clip rays, and is not counted as a lens element; its traced
aperture is not a source value.
The physical last-powered-to-image distance is 15.988400 mm; replacing the
plate thickness by thickness/index gives 14.599107 mm. Neither should be
confused with the calculated Gaussian rear focal distance.

| Infinity station | Published EFL (mm) | Computed EFL (mm) | Computed air-equivalent Gaussian BF (mm) | Gaussian image residual (mm) |
|---|---:|---:|---:|---:|
| wide | 12.243 | 12.243219510 | 14.596446131 | -0.002661037 |
| mid | 24.463 | 24.462599012 | 14.594842854 | -0.004264314 |
| tele | 48.956 | 48.954985126 | 14.588842667 | -0.010264501 |

The computed physical tracks are 101.500900, 101.500700 and 101.500700 mm;
the corresponding air-equivalent tracks are 100.111607, 100.111407 and
100.111407 mm. The patent prints 100.11 mm at each station.
Against the printed summary values there remain a tele EFL difference of
−0.001015 mm and mid/tele air-equivalent BF differences of −0.005157/−0.011157 mm.
These are not represented as exact matches. They are consistent with the
rounding of the printed rows, but that is not a recovery of the original
unrounded prescription. No optical source value is changed to fit the
published summary.

The model's stop semi-diameters are 5.175559, 5.380468 and 6.417866 mm at
wide, middle and tele, set by real-ray calibration to the patent's infinity
f-numbers; paraxial iris radii for the same f-numbers would be 5.007827,
5.175516 and 6.033889 mm. Neither set is a published diaphragm size, and
reproducing the f-number after calibration is not independent evidence of
the stop size.

The patent does not publish semi-diameters. The model's rims are inferred
from the wide-end cross-section in Figure 2(a) and checked by real-ray trace:
at all three printed stations the full-aperture axial rays and the chief
rays at the patent's field angles clear every rim. Sampling 97 rays across
the pupil at each of five field fractions gives these transmitted counts at
the patent's field angles:

| Station | Axis | 0.3 field | 0.6 field | 0.8 field | Full field |
|---|---:|---:|---:|---:|---:|
| Wide | 97 | 97 | 97 | 97 | 74 |
| Mid | 97 | 97 | 97 | 97 | 97 |
| Tele | 97 | 86 | 88 | 97 | 97 |

These are geometric ray counts, not relative-illumination measurements.
Off-axis losses are retained. At the patent's field angles the absolute
chief image heights are 10.815129, 10.816224 and 10.813822 mm; a separate
coverage solve reaches the source's 10.815 mm height. Neither test licenses
an unvignetted entire pupil over a continuous field.

The same sampling at each printed near state, with the object assumed 350 mm
from the image plane, finds every chief ray reaching its image height without
clipping. The transmitted counts over the five field fractions are
97/97/97/97/85, 97/97/97/97/97 and 97/86/97/97/97 at wide, middle and tele.
These counts depend on that assumed object distance.

At the inferred rims the thinnest element edge is 0.51 mm, at L9, which
Figure 2 draws nearly knife-edged. The closest pair of facing surfaces, L1's
rear and L2's front, use 0.897 of their axial air gap at the rim, inside the
0.90 limit the model allows. The steepest rim slope is 59.0°, on L1's rear
surface. The rendered section draws all ten elements without overlap at the
six printed states.

Every intermediate zoom position holds infinity focus within the printed
stations' 0.003–0.010 mm residual band, but the path between printed stations
remains an inferred visualization. The six printed states are the basis for
comparing the model with the patent.

## Sources and References

1. [JP2012173420A, Olympus Imaging Corporation](https://patents.google.com/patent/JP2012173420A/en).
   Original Japanese publication: bibliographic header PDF p.1 and inventor
   continuation p.36; architecture and mechanism ¶0090–0093, pp.15–16;
   conic equation ¶0108, p.17; air-equivalent convention ¶0110, p.18;
   Numerical Example 2 pp.20–22; conditions ¶0120, p.28;
   camera plate ¶0121, pp.28–29; Figure 2 p.31;
   Figures 8–9 pp.32–33.
2. [Olympus, ZUIKO Digital Lens brochure, 2013](https://device.report/m/b97c485a5b9837a1387ea34c3c99c63c10877ef205f41e5fa3c441e221b6172f.pdf).
   Manufacturer brochure (mirror copy), PDF p.13 (printed pp.24–25), lens
   diagram and technical specifications.
3. [Olympus, M.ZUIKO DIGITAL ED 12–50mm F3.5–6.3 EZ launch announcement](https://www.olympus.co.jp/jp/news/2011b/nr111216zuikoj.html),
   16 December 2011, updated 18 January 2012.
4. OM Digital Solutions, construction diagram for the M.ZUIKO DIGITAL ED
   12–50mm F3.5–6.3 EZ (manufacturer lens information), shading the DSA,
   aspherical, ED and HR elements.
5. Manufacturer optical-glass catalogs: CDGM September 2026 optical/i-line
   catalogs; HIKARI glass data; HOYA optical-glass data including obsolete
   grades; OHARA recommended S-series, low-Tg L-series and July 2026 optical
   design catalog; SCHOTT preferred/special optical glasses; SUMITA version
   14.02. The selected catalog equivalents do not confirm the production
   materials.
