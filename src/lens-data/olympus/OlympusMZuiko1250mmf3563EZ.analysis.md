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
inventors; the numerical example is retained at its native scale.
The supporting evidence converges as follows:

1. The example contains ten powered lens elements in nine air-separated
   components, matching the manufacturer brochure's optical count.
2. L2, L5 and L8 each have two aspheric faces. The brochure identifies two
   aspherical elements and a DSA element. This supports the structural
   correlation without independently identifying the patent's materials.
3. The patent's short-to-long range is 12.243–48.956 mm, close to the marketed
   12–50 mm. These are deliberately separate design and marketing quantities.
4. The native nominal f-numbers are 3.64–6.48, compared with marketed
   F3.5–6.3. The mismatch is not removed by changing the source iris target.
5. Numerical Example 2 includes infinity and nominal 0.35 m focus at all
   three zoom stations. The manufacturer specifies 0.35 m normal focusing.
6. A negative singleton G2 performs internal focus and wobbling in the
   patent. The manufacturer describes a linear MSC focus drive. The
   architecture is compatible, although the optical table does not specify
   the production actuator's dimensions or control law.
7. The application predates the December 2011 launch announcement. The
   preserved official launch capture records a January 2012 release plan.

The brochure identifies the Micro Four Thirds system. Its marketed field is
84–24°, whereas the patent's full field is 89.71–24.46°.
The source numerical image height is 10.815 mm; the aberration plots round this
to FIY10.82. Neither field discrepancy is silently replaced with the marketed
number. The patent permits electronic wide-end barrel-distortion correction
(¶0118), but that does not establish the production camera's exact crop or
correction map.

The product also offers a separate macro mode. The brochure's 0.20 m macro
distance is excluded from this normal-focus transcription; the archived
launch capture describes a fixed telephoto-region macro setting without
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
computed from the actual data-file radii, thicknesses and native d-line indices.
For the cemented pair this means mathematically isolating each component;
neither isolated value is the power of the shared interface in situ.
Every named catalog glass below is a coordinate-compatible spectral proxy.
A manufacturer or melt identity is not established by its label.

### L1 — Negative Meniscus, convex to object

nd = 1.77250, νd = 49.60. Glass: S-LAH66 class (OHARA). f = -34.181234 mm.

L1 opens the fixed negative G1 with a stronger rear-surface curvature than
front-surface curvature. Together with negative L2 and positive L3 it gives
the front group its negative net power, as expressly described in ¶0090–0091.
Its front and rear modeled clear radii are unequal, 18.0 and 14.0 mm;
these are inferred optical rims, not manufacturer diameters. The larger
front region supports the wide-field chief. The drawing's peripheral
mechanical outline is not modeled as extra refractive material.

### L2 — Aspherical Negative Meniscus, convex to object

nd = 1.58313, νd = 59.38. Glass: S-BAL42 class (OHARA). f = -38.690727 mm.

Both faces, 3A and 4A, are aspheric. This negative element introduces
non-spherical shape freedom within the front negative group before the
moving focus singleton. The sign of its paraxial power remains negative;
higher-order shape terms do not alter the vertex curvatures used to compute
that power. The rear face has substantial departure at the inferred rim,
so a spherical drawing surrogate would misrepresent both its outline and
its clearance to the adjacent surface. The selected S-BAL42 proxy does not
establish an S-grade rather than L-grade production molding glass.

### L3 — Positive Meniscus, convex to object

nd = 1.80810, νd = 22.76. Glass: S-NPH1 class (OHARA). f = +37.806978 mm.

L3 is the positive member of the otherwise negative front group. Its low
Abbe number contrasts with the two preceding negative members and provides
a chromatic degree of freedom across G1. This is a power/material observation,
not an isolated attribution of a measured aberration correction. All three
G1 elements remain at fixed internal separations during the modeled motions
(¶0091–0093).

### L4 — Negative Meniscus, convex to image

nd = 1.74100, νd = 52.64. Glass: S-LAL61 class (OHARA). f = -44.910700 mm.

L4 alone forms G2, so its isolated focal length also equals the complete
focus-group focal length. Its negative meniscus bends with the convex face
toward the image, in agreement with ¶0091. Source conditions (5)–(7)
constrain its relative power, shape and index. Its single-element construction
is central to the small moving focus unit described in ¶0092; mass and
actuator performance cannot be derived from an optical coordinate alone.

### L5 — Aspherical Biconvex Positive

nd = 1.58313, νd = 59.38. Glass: S-BAL42 class (OHARA). f = +17.308549 mm.

L5 is the positive front subgroup of G3 and carries aspheres 9A and 10A.
It precedes the aperture stop, while the cemented pair follows the stop.
The ratio of its focal length to that of G3 is about 0.940743, satisfying
condition (8). The positive front subgroup consequently accounts for most
of G3's standalone converging power, but the separated rear pair still
changes its principal planes and net power. No individual third-order
aberration contribution has been isolated numerically.

### L6a — Negative Meniscus of the cemented L6 pair

nd = 1.83400, νd = 37.16. Glass: S-LAH60 class (OHARA). f = -13.930981 mm.

L6a is the high-index negative component of the cemented L6 pair. Its rear
face is the same physical interface as L6b's front face, source surface 13.
There is no artificial air film or generic cement layer. The source's
constraints on the rear G3 subgroup's negative material include its index
and Abbe number, conditions (10)–(11); ¶0049–0050 relates these to Petzval,
chromatic correction and material cost. Those are patent-stated design
arguments, not measurements of this single component in isolation.

### L6b — Biconvex Positive of the cemented L6 pair

nd = 1.49700, νd = 81.54. Glass: S-FPL51 class (OHARA). f = +14.725695 mm.

The positive low-dispersion partner satisfies the high-Abbe condition (9).
Its νd = 81.54 is compatible with an S-FPL51-class ED crown, although neither
the numerical table nor coordinate matching proves that production used
that named melt. L6a and L6b together are only weakly positive when isolated
as a cemented block. Their opposing powers and contrasting dispersion offer
chromatic balancing freedom; that does not establish apochromatic performance
or a measured secondary-spectrum cancellation.

### L7 — Negative Meniscus, concave to image

nd = 1.83481, νd = 42.71. Glass: S-LAH55 class (OHARA). f = -20.848917 mm.

L7 provides the strong negative contribution in G4. The source's shape
ratio condition (12), index condition (13), and Abbe condition (14) apply to
this negative component. Paragraphs ¶0057–0059 connect the preferred ranges
to wide-end distortion, field curvature, package size and glass cost.
The qualified S-LAH55 proxy must not silently become S-LAH55V: a family-like
name alone is insufficient to establish spectral equivalence.

### L8 — Aspherical Positive Meniscus, explicitly plastic

nd = 1.53071, νd = 55.69. Glass: Unmatched plastic (polymer and spectrum unknown). f = +192.151127 mm.

The patent explicitly states that L8 is made of plastic (¶0091). Both
faces, 17A and 18A, are aspheric, and the vertex-based standalone power is
weakly positive. The highly negative conic constants and polynomial terms
shape the peripheral surface while the vertex radii preserve that weak
paraxial power. The polymer is unidentified. A catalog mineral-glass
coordinate, or a broadly similar commercial polymer index, would not
establish its material identity or dispersion curve. It therefore remains
Unmatched and uses only the declared nd/νd fallback.

### L9 — Positive Meniscus, convex to image

nd = 1.75211, νd = 25.05. Glass: FF8 class (HOYA). f = +45.180474 mm.

L9 is the positive rear singleton G5 and is nominally fixed relative to
the image. The patent explicitly identifies the imageward-convex meniscus
(¶0091). Condition (15) bounds its Abbe number; ¶0061 associates G5 with
lateral-color correction particularly toward the telephoto end. The selected
HOYA FF8 class is a coordinate-compatible proxy, not a manufacturer attribution.
The following camera plate is not part of L9 or of the ten-element count.

## Glass Identification and Selection

The native table gives d-line refractive index and Abbe number, not supplier
names. A fresh coordinate search covered CDGM, HIKARI, HOYA, OHARA, SCHOTT and
SUMITA originals: 3,179 overlapping rows from catalog and optical-design
formats, rather than 3,179 unique material formulations.
Strict source-rounding matches and the broader runtime-compatible window
are recorded separately. A runtime match is not an exact-coordinate proof.

| Element | Native nd | Native νd | Selected spectral class | Qualification |
|---|---:|---:|---|---|
| L1 | 1.77250 | 49.60 | S-LAH66 | Coordinate-compatible proxy, supplier unproven |
| L2 | 1.58313 | 59.38 | S-BAL42 | Coordinate-compatible proxy, supplier unproven |
| L3 | 1.80810 | 22.76 | S-NPH1 | Coordinate-compatible proxy, supplier unproven |
| L4 | 1.74100 | 52.64 | S-LAL61 | Coordinate-compatible proxy, supplier unproven |
| L5 | 1.58313 | 59.38 | S-BAL42 | Coordinate-compatible proxy, supplier unproven |
| L6a | 1.83400 | 37.16 | S-LAH60 | Coordinate-compatible proxy, supplier unproven |
| L6b | 1.49700 | 81.54 | S-FPL51 | Coordinate-compatible proxy, supplier unproven |
| L7 | 1.83481 | 42.71 | S-LAH55 | Coordinate-compatible proxy, supplier unproven |
| L8 | 1.53071 | 55.69 | Unmatched plastic | Explicit plastic; spectrum unknown |
| L9 | 1.75211 | 25.05 | FF8 | Coordinate-compatible proxy, supplier unproven |
| Camera plate C | 1.51633 | 64.14 | S-BSL7 | Camera-side glass proxy, not lens element |

Several manufacturers offer overlapping coordinate families. The source
coordinates are retained even where a selected catalog curve's reference
index or Abbe value differs at its last digits. S- and L-prefixed OHARA
families are not interchangeable merely because their tabulated coordinates
are similar; the model uses S-BAL42 as a spectral proxy without asserting a
production molding grade. L8's plastic designation takes precedence over any
nearby mineral-glass catalog candidate.

The pinned runtime resolves ten of the eleven material entries, counting the
camera plate, to catalog curves. L8 is the one Abbe-only fallback, so the
aggregate model dispersion quality remains Abbe-limited. The native
prescription uses 587.6 nm; catalog reference-index checks use 587.5618 nm.
That small convention difference is disclosed rather than interpreted as a
source correction.

No direct nC/nF/ng or ΔPgF values are attributed to the actual production
materials. Catalog-derived line values are replayable proxy evidence only.
In particular, neither the ED partner nor the modeled colored rays justify
an APO designation for the whole lens.

## Focus Mechanism

This is published internal focusing by negative G2/L4 alone. Near focus
moves G2 objectward. D6 decreases by exactly the amount D8 increases at each
station; D14 and D18 remain unchanged. G1, G3, G4 and G5 do not acquire a
reconstructed focus motion. The source describes G2 wobbling as well as
focusing, while the manufacturer documents the linear MSC drive.

| Native station | D6 infinity → near (mm) | D8 infinity → near (mm) | G2 objectward travel (mm) |
|---|---:|---:|---:|
| Wide | 6.6446 → 5.3346 | 30.0675 → 31.3775 | 1.3100 |
| Mid | 9.3245 → 8.0933 | 12.3503 → 13.5815 | 1.2312 |
| Tele | 5.9114 → 4.5785 | 1.5559 → 2.8888 | 1.3329 |

The source labels the near state 0.35 m without expressly locating the
object-distance reference plane. Solving the paraxial conjugate at the
unchanged source image plane gives:

| Native near station | Object to first vertex (mm) | Object to physical image (mm) | Transverse magnification |
|---|---:|---:|---:|
| wide | 247.212941 | 348.713841 | -0.04572651 |
| mid | 247.980549 | 349.481249 | -0.09087723 |
| tele | 248.197776 | 349.698476 | -0.18229567 |

The image-plane distances are compatible with the rounded 0.35 m label;
350 mm from the first vertex is not. This supports an image-plane convention
as an interpretation, but does not convert an unstated reference into a
published fact. The model therefore preserves the near gap rows without a
certified finiteConjugates entry. Exact finite-ray tests at 350 mm from the
physical image are explicitly diagnostic hypotheses.

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
states are reconstructions, not certified conjugates. Linear interpolation
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
All modeled conic domains and actual rim slopes are checked. No sampled
slope turnover occurs within these radii.

The source explicitly identifies L8 as plastic, but does not establish its
polymer or fabrication process. The manufacturer's DSA terminology supports
a double-sided-asphere structural correlation without proving which catalog
material or molding treatment supplied each surface. No unsupported hybrid
resin layer or extra refractive interface is inserted.

## Chromatic and Aberration Correction Strategy

The power-opposed L6 pair combines a relatively high-index negative component
with a high-Abbe positive component. The patent's conditions (9)–(11) state
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
objectward displacement from wide to tele. These conventions reproduce the
independent source calculation. A second result branch uses computed fw and
a fixed-image frame; it changes only tiny normalized rounding terms.
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

The actual implemented source states retain the camera plate at physical
thickness 4.080 mm, followed by the literal 0.745 mm image gap. The plate
surfaces are non-clipping propagation surfaces and are excluded from the
lens-element count. Their runtime display extent is not a source aperture.
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
Strict system-value comparisons retain a tele EFL discrepancy of −0.001015 mm
and mid/tele air-equivalent BF discrepancies of −0.005157/−0.011157 mm.
These are not represented as exact matches. Independent input-rounding
sensitivity and explicit rounding-box witnesses show possible printed-row
sensitivity; they are not a recovery of the original unrounded prescription
or rigorous global nonlinear uncertainty bounds. No optical source value is
changed to fit the published summary.

Actual runtime stop semi-diameters are 5.175559, 5.380468 and 6.417866 mm.
They are obtained by the project's exact-ray calibration to the native
infinity f-number, and differ from paraxial inferred iris radii of 5.007827,
5.175516 and 6.033889 mm. Neither set is a published physical diaphragm size.
The calibration target's reproduction is not independent stop-size evidence.

All native infinity full-aperture axial samples and source-field chiefs pass
the declared inferred rims. Five field fractions and 97 launch-pupil samples
per field are recorded separately for the source angles and for image-height
coverage. Transmitted counts in the source-angle set are:

| Station | Axis | 0.3 field | 0.6 field | 0.8 field | Full field |
|---|---:|---:|---:|---:|---:|
| Wide | 97 | 97 | 97 | 97 | 74 |
| Mid | 97 | 97 | 97 | 97 | 97 |
| Tele | 97 | 86 | 88 | 97 | 97 |

These are finite geometric launch-disk samples, not relative-illumination
measurements. Off-axis losses are retained. At the source angles the absolute
chief image heights are 10.815129, 10.816224 and 10.813822 mm; a separate
coverage solve reaches the source's 10.815 mm height. Neither test licenses
an unvignetted entire pupil over a continuous field.

The near diagnostic separately traces 97 on-axis rays and five 97-ray field
sets at each native near gap state, assuming the object is 350 mm from the
physical image plane. All near diagnostic chiefs reach their chosen image
heights without clipping. The five field transmission counts are
97/97/97/97/85, 97/97/97/97/97 and 97/86/97/97/97.
This is conditional ray evidence, not a new published near-field prescription
or a certified object-distance reference.

The inferred geometry has minimum sampled material thickness 0.509991 mm,
maximum shared-band gap intrusion fraction 0.897415, and maximum within-rim
slope angle 59.034871°. The default 0.90 gap guard is retained.
Actual rendering reports ten bodies and zero trim over 165 zoom/focus samples.
Finite sampling does not prove the whole continuous control domain.

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
   Figures 8–9 pp.32–33. The unchanged original PDF is included.
2. [Olympus, ZUIKO Digital Lens brochure, 2013](https://device.report/m/b97c485a5b9837a1387ea34c3c99c63c10877ef205f41e5fa3c441e221b6172f.pdf).
   Manufacturer-origin brochure preserved from a mirror, PDF p.13
   (printed pp.24–25), lens diagram and technical specifications.
   The complete original file's SHA256 begins b97c485a5b98.
3. [Olympus, M.ZUIKO DIGITAL ED 12–50mm F3.5–6.3 EZ launch announcement](https://www.olympus.co.jp/jp/news/2011b/nr111216zuikoj.html),
   16 December 2011, updated 18 January 2012. A previously archived rendered
   text capture is preserved with provenance; it is not claimed to be
   original HTML or a new download of the page.
4. Manufacturer optical-glass catalogs: CDGM September 2026 optical/i-line
   catalogs; HIKARI glass data; HOYA optical-glass data including obsolete
   grades; OHARA recommended S-series, low-Tg L-series and July 2026 optical
   design catalog; SCHOTT preferred/special optical glasses; SUMITA version
   14.02. Exact URLs, versions, original byte hashes, relevant rows and
   coefficient locations are retained in the accompanying evidence.
   The current project's selected catalog curves are additional qualified
   spectral proxies, distinct from confirmation of a production material.
