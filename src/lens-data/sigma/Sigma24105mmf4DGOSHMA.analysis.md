## Patent Reference and Design Identification

**Patent:** JP 2015-055858 A  
**Application Number:** JP 2013-190948  
**Filed:** 2013-09-13  
**Published:** 2015-03-23  
**Inventor:** Tomoki Kono  
**Applicant:** Sigma Corporation  
**Title:** Zoom lens with vibration-proof function  
**Embodiment analyzed:** Numerical Example 2  

This reconstruction concerns Numerical Example 2 of JP2015055858A. The selected construction is
correlated with the SIGMA 24-105mm f/4 DG OS HSM Art; it is not a manufacturer-confirmed factory
prescription. The original application supplies the numerical model. The later same-application
grant JP6125383B2 is used only to clarify the damaged construction figure and inspect the two
consistently blank coefficient cells.

The model is explicitly conditional. A10 is blank for source surfaces 28 and 29 in both
publications. Their implementation as 28A and 29A uses A10=0, producing degree-8 polynomial
departures, while the source record retains both values as unknown. The selected cells are consistently omitted, but that does not establish an exact source value. No
source-derived error bound can be assigned to an unknown omitted term. All finite-aperture
geometry, ray, pupil and image-height results below depend on this conditional treatment. Native
first-order powers do not depend on A4 or higher coefficients.

The correspondence rests on several convergent features:

- The example has 19 physical glass elements in 14 air-separated groups, matching the manufacturer construction count.
- Four aspheric surfaces lie on three elements, including a double-sided aspheric positive element in the last functional group. The product uses single- and double-sided glass-molded aspheric elements.
- Two elements have the very-low-dispersion 1.43700/95.10 coordinate, consistent with the advertised FLD class, alongside the remaining high- and moderate-dispersion palette. This identifies a material class and position, not the supplier.
- The native zoom range, field and f-number are close to the marketed 24-105 mm F4 specification; native design values are retained without scaling.
- The filing precedes the 2013-10-16 product announcement. The described inner-focus and separate stabilization mechanism are consistent with the product architecture.

Sigma specifies full-frame coverage and SA, Canon EF, Nikon F and Sony A variants. The Sony A
version lacks optical stabilization. Production minimum focusing distance is 0.45 m, whereas
this prescription contains only infinity-focus zoom states. The original optical-stabilization
geometry is retained on axis without an assumed decentered operating state. [Sigma product
page](https://www.sigma-global.com/en/lenses/a013_24_105_4/) and [launch
announcement](https://press.sigmaphoto.com/product/10/sigma-corporation-announces-new-optically-stabilized-24-105mm-f4-dg-os-hsm-lens/).

## Optical Architecture

Five functional groups follow a positive-negative-positive-negative-positive power sequence.
These five moving optical assemblies should be distinguished from the 14 air-separated
construction groups. G2 is the focusing group; G3 begins with the aperture stop. G4 contains the
negative stabilization subgroup G4A and a weakly positive rear subgroup G4B. G5 is an overall
positive rear relay containing the conditional double-sided asphere. The structure and component
shapes are stated in ¶0064-0069.

| Functional group | Source surfaces | Calculated focal length, mm | Architectural role |
|---|---|---:|---|
| G1 | 1-5 | +104.319755 | Positive front assembly |
| G2 | 6-13 | -17.056476 | Negative zoom/focus assembly |
| G3 | 14-21 | +30.170208 | Positive assembly following the stop |
| G4 | 22-27 | -62.584070 | Net negative stabilization/relay assembly |
| G5 | 28-34 | +63.480882 | Positive rear assembly |
| G4A | 22-24 | -58.244994 | Negative laterally movable stabilization pair |
| G4B | 25-27 | +416.886132 | Weakly positive rear pair |

The source preserves three infinity stations. Independent sequential reduced-angle and ABCD
calculations agree, and the final implemented prescription reproduces the same first-order
system. All distances in the following table are millimetres. Back focal distance is measured
from the last powered surface vertex to the image through air; physical track is from the first
surface vertex to the image. Neither is the manufacturer’s filter-to-mount barrel length.

| Source station | EFL calculated | EFL printed | BFD calculated | BF printed | Physical track |
|---|---:|---:|---:|---:|---:|
| Wide | 24.861963 | 24.86 | 39.460965 | 39.4591 | 151.8981 |
| Intermediate | 50.581376 | 50.58 | 59.126744 | 59.1232 | 170.4742 |
| Tele | 101.709436 | 101.70 | 66.936026 | 66.9314 | 198.2044 |

Back focal distance exceeds EFL at the wide and middle stations, satisfying the stated
retrofocus criterion at those states. It does not exceed EFL at the tele end. Physical track
exceeds EFL throughout the published samples, so the tele end is not classified as a
geometrically shortened telephoto system on a track/EFL criterion. The marketed medium-telephoto
focal range is a separate description.

The per-surface d-line Petzval sum is 0.001765007272 mm^-1, calculated as Σφ/(n·n′). This is a
first-order curvature descriptor, not a measured best-focus surface or a substitute for an
astigmatism analysis. Translation of rigid groups does not change this sum because their radii
and media remain unchanged.

The three sampled group positions all move objectward relative to a fixed image plane as zoom
increases. Their endpoints do not reconstruct the continuous cam curves. In particular, the
general discussion of a G2 reversal near the wide end cannot be disproved by three monotonic
samples. The application interpolates the supplied spacings linearly and therefore provides an
approximate between-station layout rather than the patent’s unknown continuous mechanism.

## Element-by-Element Analysis

The focal length quoted for each element is its isolated thick-lens focal length in air,
computed from the final prescription. It is not the element’s in-situ power inside a cemented
assembly. Every glass name below denotes a coordinate-equivalent HOYA catalogue proxy; the
patent does not identify its supplier or melt. The stored native nd and νd remain the original
values.

### L1a — Neg. Meniscus

nd = 1.84666, νd = 23.78. Glass: FDS90 (HOYA coordinate equivalent; supplier unconfirmed). f =
-172.919009 mm.

The first element is a negative meniscus convex toward the object and is cemented to L1b. It
starts the overall positive front group without itself being a positive collector. The shared
interface must be treated as one glass-to-glass refraction (¶0064).

The high dispersion of this element differs substantially from that of its positive partner.
This is a plausible chromatic-power pairing, but the signs and Abbe numbers alone do not
establish a quantified chromatic cancellation.

### L1b — Biconvex Positive

nd = 1.59349, νd = 67.00. Glass: PCD51 (HOYA coordinate equivalent; supplier unconfirmed). f =
+136.242296 mm.

L1b is the positive biconvex partner in the first cemented doublet. The weakly curved rear face
does not make the element plano-convex; its finite source radius is retained. Together with L1a
it forms a weakly positive cemented assembly (¶0064).

The remaining positive power of G1 is supplied in part by the separate L1c. A sum of isolated
element powers would miss the cemented interface and finite thickness and is therefore not used
for the group focal length.

### L1c — Pos. Meniscus

nd = 1.77250, νd = 49.62. Glass: TAF1 (HOYA coordinate equivalent; supplier unconfirmed). f =
+123.769144 mm.

This positive meniscus is the separate rear element of G1. Its convex face points toward the
object. The following variable air gap separates the positive front assembly from the negative
G2 focus/zoom group (¶0064).

Its native high index and moderate dispersion are preserved. No special partial-dispersion or
supplier attribution follows from the coordinate match.

### L2a — Neg. Meniscus (1× Asph)

nd = 1.88300, νd = 40.80. Glass: TAFD30 (HOYA coordinate equivalent; supplier unconfirmed). f =
-20.192674 mm.

L2a is a negative meniscus convex toward the object, with aspheric front surface 6A. It is the
first component of the overall negative G2 and is explicitly described as aspheric in ¶0065. All
of its published coefficients, including nonzero A10, are retained.

The aperture is inferred and its two curved faces have different modeled extents. The front/rear
relationship is constrained by the intervening geometry and ray clearance; neither semi-diameter
is a patent-published value.

### L2b — Biconcave Negative

nd = 1.72916, νd = 54.67. Glass: TAC8 (HOYA coordinate equivalent; supplier unconfirmed). f =
-37.765918 mm.

This biconcave negative element follows L2a within G2. It provides another negative-power
contribution using a lower-index, higher-Abbe coordinate than the leading meniscus (¶0065).

Its power and position are source-grounded. A particular contribution to coma, astigmatism or
distortion is not assigned merely from the sign of its isolated power.

### L2c — Biconvex Positive

nd = 1.84666, νd = 23.78. Glass: FDS90 (HOYA coordinate equivalent; supplier unconfirmed). f =
+27.729884 mm.

L2c is the positive biconvex element embedded within the negative G2 assembly. Its
high-dispersion coordinate is also used in L1a and L4a, but the repeated material does not imply
the same optical role (¶0065).

The positive component contributes to the combined group prescription while the overall group
remains negative. Cemented-power language is inapplicable here because the neighboring
interfaces are separated by air.

### L2d — Neg. Meniscus (1× Asph)

nd = 1.69350, νd = 53.20. Glass: M-LAC130 (HOYA coordinate equivalent; supplier unconfirmed). f
= -55.046494 mm.

The final G2 element is a negative meniscus convex toward the image, with aspheric rear
surface 13A. It faces the zoom-dependent gap to the stop and G3 (¶0065).

The nonzero source A10 on 13A is important to the declared radial profile and is not included in
the conditional truncation. Only 28A and 29A use the missing-term assumption.

### L3a — Biconvex Positive

nd = 1.43700, νd = 95.10. Glass: FCD100 (HOYA coordinate equivalent; supplier unconfirmed). f =
+86.251719 mm.

L3a is a positive biconvex element immediately behind the aperture stop. Its very high Abbe
number identifies the low-dispersion coordinate class associated with the product’s FLD
elements; the HOYA FCD100 name is an optical-equivalent proxy, not factory provenance (¶0066).

The rear face is weakly convex toward the image. Both curvatures remain finite in the numerical
prescription, so a plano-convex approximation is not substituted. The exact source radii govern
the implementation.

### L3b — Neg. Meniscus

nd = 2.00100, νd = 29.13. Glass: TAFD55 (HOYA coordinate equivalent; supplier unconfirmed). f =
-45.223801 mm.

L3b is the negative meniscus at the front of the second cemented pair. Its nd=2.00100 is printed
explicitly and is not reduced to fit a more common glass. The HOYA TAFD55 coordinate provides a
compatible catalogue proxy (¶0066).

Its shared interface belongs to the following L3c medium in sequential tracing. Treating both
elements as isolated air lenses would give the wrong power for the cemented assembly.

### L3c — Biconvex Positive

nd = 1.59282, νd = 68.62. Glass: FCD515 (HOYA coordinate equivalent; supplier unconfirmed). f =
+30.984787 mm.

This positive biconvex element is cemented to L3b. It has much higher νd than the dense negative
partner. The pair is positive overall, but that net result follows from its full three-surface
matrix rather than isolated-power addition (¶0066).

The same native coordinate is used again in the separate L3d. The catalogue provides more than
one coordinate-compatible family entry; the chosen FCD515 proxy does not resolve physical
supplier identity.

### L3d — Biconvex Positive

nd = 1.59282, νd = 68.62. Glass: FCD515 (HOYA coordinate equivalent; supplier unconfirmed). f =
+69.223363 mm.

L3d is the separate positive biconvex rear component of G3. The following variable interval
leads into G4. Its power is included in the positive functional-group matrix (¶0066).

Its use of the same coordinate as L3c is preserved directly. The small air separation between
those elements remains physical, with no invented cement layer.

### L4a — Pos. Meniscus

nd = 1.84666, νd = 23.78. Glass: FDS90 (HOYA coordinate equivalent; supplier unconfirmed). f =
+57.182357 mm.

L4a is a positive meniscus concave toward the object. It is cemented to the negative biconcave
L4b, forming G4A, the negative stabilization subgroup (¶0067).

Its positive isolated focal length must not be mistaken for positive net G4A power. The group’s
net sign is negative despite the leading positive component.

### L4b — Biconcave Negative

nd = 1.54814, νd = 45.82. Glass: E-FEL1 (HOYA coordinate equivalent; supplier unconfirmed). f =
-29.892140 mm.

L4b completes the negative G4A cemented pair. Paragraph 0067 identifies lateral movement of the
entire pair as the mechanism for image stabilization, so the two glass elements are not treated
as independent moving optical groups.

The internal cemented-interface aperture is inferred large enough to contain admitted sampled
rays. Later clipping at an external boundary is distinguished from loss inside the cemented
pair; a post-clip continuation is not counted as transmitted light.

### L4c — Biconvex Positive

nd = 1.60342, νd = 38.01. Glass: E-F5 (HOYA coordinate equivalent; supplier unconfirmed). f =
+33.209713 mm.

L4c is the positive biconvex member of G4B. It is cemented to L4d and its isolated positive
focal length is close in magnitude to the following negative element’s focal length (¶0067).

The resulting subgroup is weakly positive. That cancellation makes its printed group focal
length unusually sensitive to rounding of refractive indices and radii.

### L4d — Biconcave Negative

nd = 1.74400, νd = 44.90. Glass: LAF2 (HOYA coordinate equivalent; supplier unconfirmed). f =
-33.168352 mm.

This biconcave negative element completes G4B. The full cemented matrix gives a long positive
net focal length, while G4A dominates the negative net power of the complete G4 assembly
(¶0067).

The calculated G4B value is 416.886132 mm versus the printed 416.90 mm. The residual is retained
and is consistent with a separate source-input rounding-sensitivity calculation; no prescription
value is adjusted to force exact agreement.

### L5a — Biconvex Positive (2× Asph)

nd = 1.59201, νd = 67.02. Glass: M-PCD51 (HOYA coordinate equivalent; supplier unconfirmed). f =
+31.126365 mm.

L5a is the positive biconvex front element of G5, aspheric on both 28A and 29A. It is the sole
element affected by the conditional missing-term treatment (¶0068).

Both source A10 cells remain unknown. Their modeled zero values give degree-8 polynomial
departures, not a proven exact factory surface. Native radii, thickness, nd/νd and all nonblank
coefficients are unchanged.

### L5b — Pos. Meniscus

nd = 1.43700, νd = 95.10. Glass: FCD100 (HOYA coordinate equivalent; supplier unconfirmed). f =
+200.213705 mm.

L5b is a positive meniscus concave toward the object and is cemented to the dense negative L5c.
It uses the same very-low-dispersion coordinate as L3a but in a different group and a weaker
isolated positive lens (¶0068).

Its presence does not, by itself, establish an apochromatic design. The complete spectral
performance depends on the other powers, spacings and actual material dispersions.

### L5c — Biconcave Negative

nd = 1.90366, νd = 31.31. Glass: TAFD25 (HOYA coordinate equivalent; supplier unconfirmed). f =
-22.570823 mm.

L5c is the biconcave negative rear member of that cemented pair. The strong negative isolated
power dominates the pair’s net negative sign, even though the surrounding G5 assembly is
positive overall (¶0068).

The catalogue-equivalent TAFD25 value differs slightly in νd from the printed prescription; the
source coordinate is kept, and the selected line indices remain explicitly proxy spectral
information.

### L5d — Biconvex Positive

nd = 1.77250, νd = 49.62. Glass: TAF1 (HOYA coordinate equivalent; supplier unconfirmed). f =
+47.202061 mm.

The final element is a positive biconvex component of G5. Its rear vertex defines the physical
BF reference plane and the beginning of the final air interval to the image (¶0068).

No sensor-cover plate is listed after this element in the selected example. The model therefore
adds none and makes no air-equivalent plate-spacing conversion.

## Glass Identification and Selection

The complete official HOYA catalogue, including obsolete entries, was searched by native d-line
index and Abbe coordinate. The selected names are coordinate-equivalent representatives;
alternative compatible entries remain possible. Runtime catalogue curves now supply the spectral proxies; calculated catalogue nC/nF/ng
anchors have been removed from the elements. Native patent nd and νd are unchanged. The
catalogue path preserves those reference indices and reports the spectrum as a model proxy. It does not
prove the actual material, melt or secondary-spectrum correction.

| Catalogue proxy | Native nd | Native νd | Elements |
|---|---:|---:|---|
| FDS90 (HOYA equivalent) | 1.84666 | 23.78 | L1a, L2c, L4a |
| PCD51 (HOYA equivalent) | 1.59349 | 67.00 | L1b |
| TAF1 (HOYA equivalent) | 1.77250 | 49.62 | L1c, L5d |
| TAFD30 (HOYA equivalent) | 1.88300 | 40.80 | L2a |
| TAC8 (HOYA equivalent) | 1.72916 | 54.67 | L2b |
| M-LAC130 (HOYA equivalent) | 1.69350 | 53.20 | L2d |
| FCD100 (HOYA equivalent) | 1.43700 | 95.10 | L3a, L5b |
| TAFD55 (HOYA equivalent) | 2.00100 | 29.13 | L3b |
| FCD515 (HOYA equivalent) | 1.59282 | 68.62 | L3c, L3d |
| E-FEL1 (HOYA equivalent) | 1.54814 | 45.82 | L4b |
| E-F5 (HOYA equivalent) | 1.60342 | 38.01 | L4c |
| LAF2 (HOYA equivalent) | 1.74400 | 44.90 | L4d |
| M-PCD51 (HOYA equivalent) | 1.59201 | 67.02 | L5a |
| TAFD25 (HOYA equivalent) | 1.90366 | 31.31 | L5c |

The FCD100-coordinate pair is spectrally distinct from the dense flint-coordinate partners, and
the system repeatedly combines positive and negative elements with contrasting Abbe numbers.
These are relevant design ingredients for chromatic balancing. No APO performance, anomalous
partial-dispersion correction or numerical chromatic cancellation is asserted here: native
patent line indices are absent, and the catalogue-equivalent spectra remain an approximation.
The six-term catalogue formulas reproduce their own published index coordinates; catalogue
agreement is separate from physical supplier attribution.

All 19 elements now use compatible runtime catalogue curves. PCD51, TAF1 and LAF2 resolve
to their own HOYA rows; the latter two curves were added from the vendor’s 2026-07-07
NM/CD records rather than routing their names to OHARA or Hikari. The published polynomial
coefficients are retained without fitting, and the native patent coordinates remain authoritative.
Other named proxies retain their existing compatible curves. No supplier identity is inferred.

Coverage is strongest for the full official HOYA catalogue. Limited Hikari, OHARA, Schott and
Sumita primary-source checks provide contextual alternatives, without an exhaustive cross-vendor
identity claim. CDGM was not exhaustively checked. OHARA S- and L-prefix families are not
interchanged. [HOYA
catalogue](https://www.hoya-opticalworld.com/common/agf/HOYA20260707_include_obsolete.agf).

The inferred APD highlights identify L3a/L5b (FCD100, catalog ΔPgF ≈ +0.04978) and
L3c/L3d (FCD515, catalog ΔPgF ≈ +0.01573), relative to the Schott normal line.
These correspond to the FLD and SLD positions in [Sigma's construction diagram](https://www.sigma-global.com/lenses/a013_24_105_4_specification_01.jpg).
The patent does not identify these materials as anomalous, and the color tags do not establish a production supplier or melt.

## Focus Mechanism

Paragraph 0069 states that G2 moves toward the object when focusing from infinity to nearer
objects. No finite-focus travel, finite spacing table or source magnification state is provided.
Only the published infinity-focus zoom prescriptions are represented. The production lens's
0.45 m minimum focus is not reproduced by these prescriptions.

The five source variable intervals are reproduced below. Gap changes define the three published
zoom geometries; they do not specify the continuous cam law or establish an intermediate
focusing solution.

| Interval after source surface | Wide, mm | Middle, mm | Tele, mm |
|---|---:|---:|---:|
| 5 (d5) | 3.3360 | 17.3520 | 43.1030 |
| 13 (d13) | 22.2610 | 8.3040 | 2.2550 |
| 21 (d21) | 2.8250 | 7.2730 | 9.4150 |
| 27 (d27) | 9.3350 | 3.7400 | 1.8180 |
| 34 (BF) | 39.4591 | 59.1232 | 66.9314 |

D5 increases while D13 decreases; D21 increases and D27 decreases across the supplied stations.
BF increases as G5 moves objectward relative to the image. The apparent product barrel-length
description and the optical vertex-to-image track use different endpoints and should not be
collapsed into a claim of constant optical length. The current data has no invented near-focus
group travel or stabilization decenter.

## Aspherical Surfaces

The patent defines sag as the standard conic term plus A4y^4+A6y^6+A8y^8+A10y^10 (¶0050,
supplied PDF p11). Positive sag is toward the image. K maps directly to the application’s conic
parameter and is zero on all four aspheres. The coefficients have units mm^(1-p). There is no
uniform scaling and no conic-parameter conversion. Powers 12 and14 are unused in the source
equation and are zero in the required application slots.

| Surface | K | A4 | A6 | A8 | Source A10 / implemented A10 |
|---|---:|---:|---:|---:|---|
| 6A | 0.00000 | 5.91650e-06 | -1.11810e-08 | -7.85810e-12 | 4.32170e-14 / same |
| 13A | 0.00000 | -8.67000e-07 | 1.60320e-09 | -2.28310e-10 | 1.10010e-12 / same |
| 28A | 0.00000 | -1.14570e-05 | -1.66350e-08 | 3.43440e-11 | blank (unknown) / 0, conditional |
| 29A | 0.00000 | 7.29430e-06 | -1.48540e-08 | 4.15830e-11 | blank (unknown) / 0, conditional |

No general blank-means-zero convention is used. Only the specifically approved A10 omissions on
28A and 29A are implemented as conditional zeros. No coefficient from another example is
transferred into the selected model.

All reported rim departures use the final modeled semi-diameter of that surface. They are not
departures at a patent-published clear aperture. Because K=0, subtracting the base conic here is
also subtracting the matching spherical sag.

| Surface | Modeled semi-diameter, mm | Polynomial departure at rim, μm | Actual rim angle |
|---|---:|---:|---:|
| 6A | 15.50 | +194.862669 | 8.928762° |
| 13A | 11.60 | -38.111506 | 4.865239° |
| 28A | 13.50 | -443.354343 | 10.818397° |
| 29A | 13.50 | +198.238801 | 23.681275° |

The positive departure on 6A increases sag relative to its spherical base at the modeled rim. The
negative departure on 13A decreases it. On the conditional rear element, 28A has a negative
polynomial departure and 29A a positive departure at their modeled rims. These statements
describe the calculated surface profiles; they are not an allocation of coma or distortion
correction to individual terms. In particular, the omitted A10 terms could change high-height
behavior without changing first-order curvature, and no bound on that difference is available
from the source.

## Conditional Expressions

The five published design conditions are evaluated from the native final-data matrices. fT is
the telephoto-end system EFL. βW345 is the wide-end transverse magnification of G3-G5 at the
printed image plane, calculated from the rear subsystem rather than inferred from marketing
magnification.

| Expression | Published bounds | Computed | Printed Example 2 |
|---|---|---:|---:|
| f1/fT | 0.70 < value < 1.25 | 1.025664 | 1.03 |
| f2/fT | -0.22 < value < -0.10 | -0.167698 | -0.17 |
| f4A/f4B | -0.80 < value < 0.00 | -0.139714 | -0.14 |
| f3/fT | 0.20 < value < 0.50 | 0.296631 | 0.30 |
| f2/betaW345 | 15.00 < value < 22.00 | 16.052721 | 16.05 |

All five inequalities hold. βW345 = -1.062529. The narrower preferred condition in ¶0045,
16.50 < f2/βW345 < 21.00, is not met by the calculated 16.052721. The broader
published 15.00-22.00 condition in the table is met. The limits describe relative group-power balance
and the rear subsystem magnification; satisfaction does not independently validate the
conditional aspheric truncation or certify production performance. The small printed G4B
focal-length discrepancy remains a source-precision limitation rather than a corrected patent
value.

## Image Stabilization

Paragraph 0067 identifies G4A, the L4a/L4b cemented pair, as the assembly moved approximately
perpendicular to the optical axis for stabilization. The remaining G4B pair has weak positive
net power. The example’s aberration figures include off-axis compensation illustrations, but
this implementation is the centered prescription. No quantitative lateral travel or
field-dependent stabilization trajectory is inferred from the figure, and the Sony A production
version should not be described as containing an operating OS unit.

## Aperture and Verification Summary

Physical iris size is not published. The model uses the documented current-runtime inference
from native station f-numbers. A ray at the nominal entrance-pupil radius EFL/(2F) is traced
exactly to the stop; the resulting radii are interpolated between stations. Matching the target
f-number is therefore calibration-dependent and is not independent evidence of a physical
diaphragm measurement.

| Infinity station | Native f-number target | Inferred physical iris radius, mm | Chief image-height magnitude at native full field, mm |
|---|---:|---:|---:|
| Wide | 4.06 | 7.095169 | 21.630596 |
| Intermediate | 4.11 | 8.893669 | 21.628740 |
| Tele | 4.07 | 9.901120 | 21.632404 |

The patent image semi-height is 21.63 mm at all three stations. The chief results are conditional
geometric calculations at the native published angular field, with the actual physical BF
retained. Source-rounded EFL/BFD differences remain visible; no image-plane refit was made to
improve this comparison.

Clear apertures were inferred using the legible same-application grant Figure 11 and conditional
exact-ray/geometry checks. Actual current-runtime validation and production render diagnostics
require no hidden material trim at the sampled stations or intermediate test points. An
independent three-dimensional Snell/Newton replay reproduces the same admitted rays. A separate
meridional angle-Snell calculation agrees on 498 tested rays, and a denser 17-state geometry
review checks radial stationary points as well as aperture endpoints. Field
coverage is finite sampling: the default visible UI rays, native chiefs, circular entrance-pupil
samples and separately targeted physical-iris rays have different launch definitions and are not
treated as interchangeable.

Vignetting at external element rims and the iris remains in the model. Samples that fail to
bracket a clear pre-stop path are not claimed as solved physical rays; later post-clip
trajectories are diagnostic only. The tested surviving rays do not clip inside a cemented
junction. Interpolated cached pupil-boundary launches can meet the interpolated iris differently
from the source-station calibration, so between-station behavior is not presented as a measured
aperture or continuous zoom law. Neither these checks nor the catalogue proxy spectra establish
factory MTF or complete aberration correction.

## Sources

- JP2015055858A, Numerical Example 2, ¶0047-0056 and ¶0064-0070; supplied PDF pp11 and14-16; conditions at p20, ¶0086. [Controlling publication](https://depatisnet.dpma.de/DepatisNet/depatisnet?action=pdf&docid=JP2015055858A).
- JP6125383B2, front-page same-application identity, Example 2 coefficient table p14 and Figure 11 p21. Supporting clarification only. [Grant PDF](https://patentimages.storage.googleapis.com/81/06/33/c1db73497f8736/JP6125383B2.pdf).
- [Exact-A alternative PDF](https://patentimages.storage.googleapis.com/23/10/7c/6a5487c84cfcdb/JP2015055858A.pdf), p14, confirming the two blank A10 cells without supplying values.
- Sigma, [24-105mm F4 DG OS HSM product specifications](https://www.sigma-global.com/en/lenses/a013_24_105_4/), accessed 2026-10-04.
- Sigma Corporation of America, [product announcement](https://press.sigmaphoto.com/product/10/sigma-corporation-announces-new-optically-stabilized-24-105mm-f4-dg-os-hsm-lens/), 2013-10-16.
- HOYA, [optical-glass catalogue including obsolete glasses](https://www.hoya-opticalworld.com/common/agf/HOYA20260707_include_obsolete.agf), 2026-07-07. Relevant published rows and dispersion coefficients are retained with provenance.
