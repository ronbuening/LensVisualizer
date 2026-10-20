## Patent Reference and Design Identification

**Patent:** US 2025/0334778 A1  
**Application Number:** US 19/184,203  
**Filed:** April 21, 2025  
**Published:** October 30, 2025  
**Inventor:** Ryosuke Sato  
**Applicant / Assignee:** Sigma Corporation  
**Title:** Imaging Optical System  
**Embodiment analyzed:** Numerical Example 2

The prescription is transcribed at unit scale from the selected A-publication, PDF pp42–44
(printed pp11–13), with the optical section in Figure 6, PDF p7. The front page records
Japanese priority application 2024-072064, dated April 26, 2024. It is a priority application
number, not a substituted numerical source.

The construction is correlated with the SIGMA 35mm f/1.2 DG II | Art, with these convergent observations:

1. The patent has 17 elements in 13 air-separated groups and four double-sided aspheric elements.
   Sigma specifies the same element/group and aspheric-element counts.
2. The selected patent section has a positive front meniscus and two independently moving
   focus groups. Sigma independently describes a floating two-group focus design with dual
   linear actuators. This supports architectural correlation without establishing identical
   factory surface positions. Five functional groups differ from 13 air-separated assemblies.
3. The native infinity EFL is 34.600573 mm and the source aperture is F1.24, close to the
   marketed 35mm and F1.2 values. They are retained without rescaling.
4. The printed infinity full field is 63.74°, versus Sigma's marketed 63.4°.
   The model's exact source-field chief ray reaches 21.631262 mm at the printed 31.87° half-field,
   consistent with the source image height of 21.63 mm.

Sigma's official specification lists full-frame mirrorless coverage, L-Mount and Sony E,
11 rounded diaphragm blades, F16 minimum aperture, 0.28 m minimum focus distance and 1:5.3
maximum reproduction. Its launch notice gives September 25, 2025. These are production facts,
not extra optical constraints fitted to this prescription. The selected source only provides
an infinity state and a roughly 1.477 m finite test state. A manufacturer-confirmed unchanged
factory prescription is not established by these similarities. [S1–S3]

## Optical Architecture

This is a five-functional-group, two-group inner-focusing, large-aperture prime. Its signed
power sequence is positive–positive–positive–positive–negative. The broad middle group G3
is split into a negative front subgroup, the aperture diaphragm, and a positive rear subgroup.
The patent names these G3a (surfaces 7–11, printed f = −35.31 mm), S and G3b (surfaces 13–20,
printed f = +39.46 mm), and Figure 6 brackets them inside G3. The diagram's group labels
use the same notation: G1, G2, G3a, G3b, G4 and G5, with the stop drawn between G3a and G3b.
The patent gives no designations to individual elements, so L1–L17 number them in order.
This arrangement is explicitly described in ¶0152–0157. It should not be reduced to a named
historical design family without additional evidence.

| Functional group | Source surfaces | Standalone group EFL (mm) | Motion in the published focus change |
|---|---|---:|---|
| G1 | 1–2 | +265.452 | Nominally fixed |
| G2 | 3–6 | +280.368 | Objectward |
| G3 | 7–20 | +84.368 | Nominally fixed |
| G4 | 21–24 | +49.375 | Objectward |
| G5 | 25–31 | -68.055 | Nominally fixed |

The first-to-image track is 128.7355 mm. Infinity paraxial BFD, measured from the final lens
vertex, is 17.497711 mm; the printed last gap remains 17.4972 mm. The first principal plane
is 51.358553 mm imageward of the first vertex, and the rear principal plane is 17.102862 mm
objectward of the final vertex. The design is not called telephoto or retrofocus here:
its track exceeds EFL, and its BFD is shorter than EFL.

G2 and G4 provide the two focusing movements. The patent attributes their separated
positions and distinct travel to controlling breathing and focus-dependent aberrations
(¶0049–0059, ¶0081–0093). These are source design rationales, not a measured breathing or
aberration-performance claim for the manufactured lens.

The surface-by-surface Petzval sum is +0.001993633 mm⁻¹. This first-order sum uses
φ/(n·n′) at every refracting interface. It is not a computed sagittal or tangential
field-curvature curve, and it does not by itself certify a flat image surface.

## Element-by-Element Analysis

The following focal lengths are standalone thick-element values with air on both sides.
They describe each shape and material independently. Cemented net powers and installed
functional-group behavior are reported separately; neither should be inferred by adding
these standalone focal lengths.

### L1 — Positive Meniscus

nd = 1.80809, νd = 22.76. Glass: FD225 class (HOYA coordinate equivalent; supplier unconfirmed). f = +265.452 mm.

The weak positive front meniscus is G1. It is fixed relative to the image plane. Its long standalone focal length is consistent with a moderate front contribution rather than concentrating the system power at the entrance. The positive-front identification is explicit in ¶0153.

### L2 — Negative Meniscus

nd = 1.54072, νd = 47.20. Glass: E-FEL2 class (HOYA coordinate equivalent; supplier unconfirmed). f = -61.024 mm.

This negative meniscus is the first member of movable G2. Its negative standalone power opposes the positive L3 behind it. The pair remains net positive, with a much longer group focal length than either element alone (¶0154).

### L3 — Biconvex Positive (2x Asph)

nd = 1.80610, νd = 40.73. Glass: NBFD13 class (HOYA coordinate equivalent; supplier unconfirmed). f = +56.061 mm.

This double-sided aspheric biconvex element completes G2. Both of its aspheres move with L2. The patent identifies aspheric correction in the moving groups as useful for controlling changes in spherical aberration, coma and field curvature during focus (¶0139); no individual coefficient is assigned a unique aberration contribution here.

### L4 — Biconcave Negative

nd = 1.48749, νd = 70.44. Glass: FC5 class (HOYA coordinate equivalent; supplier unconfirmed). f = -51.990 mm.

This biconcave crown begins G3a. It contributes negative standalone power ahead of the diaphragm. The patent discusses spreading the axial bundle in G3a before reconvergence in G3b, while maintaining smaller moving groups (¶0123–0133). Its high Abbe number alone is not a supplier or branded-SLD identification.

### L5 — Biconcave Negative

nd = 1.69895, νd = 30.05. Glass: E-FD15 class (HOYA coordinate equivalent; supplier unconfirmed). f = -37.039 mm.

This negative element is cemented to positive L6 at source surface 10. It is the first part of the L5–L6 pair in G3a. The downstream element owns the junction in the model, so the interface is traced directly between the two glass indices, without an invented cement layer.

### L6 — Biconvex Positive

nd = 1.94594, νd = 17.98. Glass: FDS18-W class (HOYA coordinate equivalent; supplier unconfirmed). f = +56.236 mm.

The positive high-index, high-dispersion partner completes L5–L6. Its published partial-dispersion ratio is retained explicitly. G3a is negative as a whole even though this member is positive (¶0155). It is the lowest-Abbe positive lens of G3, for which the patent specifies a high-index, high-dispersion glass with high anomalous dispersion (¶0103, ¶0109–0111). Condition (9) evaluates to 0.0387 against a 0.0200 floor, so the element carries the patent anomalous-dispersion tag.

### L7 — Biconvex Positive (2x Asph)

nd = 1.77377, νd = 47.17. Glass: M-TAF401 class (HOYA coordinate equivalent; supplier unconfirmed). f = +41.780 mm.

This double-sided aspheric biconvex element begins G3b immediately behind the stop. It provides positive standalone power in the reconverging subgroup. The asphere positions, not a glass-molding manufacturing process, are established by the numerical source (¶0140 and ¶0155).

### L8 — Biconcave Negative

nd = 1.78880, νd = 28.43. Glass: S-NBH58 class (OHARA coordinate equivalent; supplier unconfirmed). f = -38.424 mm.

This biconcave element is the front member of the L8–L9 cemented pair. The OHARA S-NBH58 primary datasheet matches its 1.78880/28.43 coordinate and θgF=0.6009; the label denotes a coordinate-equivalent class, without establishing the supplier or melt. [S6]

### L9 — Positive Meniscus

nd = 1.75500, νd = 52.32. Glass: TAC6L class (HOYA coordinate equivalent; supplier unconfirmed). f = +60.657 mm.

The positive meniscus partner completes L8–L9. Their installed interface is one glass-to-glass refraction. A positive L9 does not imply that the cemented pair is positive; the separately computed pair focal length is negative.

### L10 — Negative Meniscus

nd = 1.85451, νd = 25.15. Glass: NBFD25 class (HOYA coordinate equivalent; supplier unconfirmed). f = -67.576 mm.

This negative meniscus forms the front member of L10–L11. Together with the positive L11, it is the last cemented assembly in G3b. The source describes this pairing in ¶0155; the individual glass type does not establish an independently quantified chromatic correction.

### L11 — Biconvex Positive

nd = 1.59282, νd = 68.62. Glass: FCD515 class (HOYA coordinate equivalent; supplier unconfirmed). f = +36.799 mm.

The positive biconvex partner uses the lowest-dispersion positive glass in G3. Its absolute θgF=0.5440 and νd=68.62 satisfy the patent normal-line condition for that G3 positive member. The patent specifies a low-index, low-dispersion glass with high anomalous dispersion for this lens (¶0101–0108); condition (8) evaluates to 0.0192 against a 0.0120 floor, so the element carries the patent anomalous-dispersion tag. This is the coordinate-compatible FCD515 family; source supplier and exact melt remain unconfirmed. Sigma lists one SLD element for the production lens without locating it. [S2] L11 is the likely position, but that is an inference.

### L12 — Biconcave Negative

nd = 1.69895, νd = 30.05. Glass: E-FD15 class (HOYA coordinate equivalent; supplier unconfirmed). f = -169.900 mm.

This biconcave element is the first member of G4. It travels with positive L13, rather than acting as a separately moving compensator. The patent explains the inclusion of a negative element in a lightweight positive focusing group as useful for reducing chromatic variation during focusing (¶0079–0080).

### L13 — Biconvex Positive (2x Asph)

nd = 1.76450, νd = 49.09. Glass: L-LAH91 class (OHARA coordinate equivalent; supplier unconfirmed). f = +38.689 mm.

This double-sided aspheric biconvex element completes G4. The pair has substantially greater positive group power than G2. Its exact 1.76450/49.09 coordinate and θgF=0.5528 match the OHARA L-LAH91 primary datasheet. The L-prefix is retained, and the manufacturer identifies d-line code 765491. The equivalent label does not establish the supplier or melt. [S7]

### L14 — Biconvex Positive

nd = 1.75500, νd = 52.32. Glass: TAC6L class (HOYA coordinate equivalent; supplier unconfirmed). f = +102.711 mm.

This biconvex element begins fixed rear group G5. It is the higher-Abbe positive member used in the difference condition of ¶0072–0078. Its standalone positive power is compatible with the patent’s two-positive-member strategy even though G5 is negative overall.

### L15 — Biconvex Positive

nd = 1.98612, νd = 16.48. Glass: FDS16-W class (HOYA coordinate equivalent; supplier unconfirmed). f = +43.438 mm.

This high-index biconvex element is the positive member of the rear L15–L16 cemented pair. It has the minimum positive-element Abbe number in G5, νd=16.48. The source explicitly uses its high partial-dispersion deviation in the chromatic design conditions (¶0061–0070), which call for a high-index, high-dispersion glass with high anomalous dispersion in this position. Condition (2) evaluates to 0.0470 against a 0.0250 floor, so the element carries the patent anomalous-dispersion tag. Those conditions are material evidence, not proof of apochromatic system performance.

### L16 — Biconcave Negative

nd = 1.78880, νd = 28.43. Glass: S-NBH58 class (OHARA coordinate equivalent; supplier unconfirmed). f = -23.412 mm.

This biconcave element is cemented behind L15. The pair is net negative despite L15 being positive. Its 1.78880/28.43 coordinate and θgF=0.6009 match L8 and the same OHARA S-NBH58 class. Both source coordinates and the source partial-dispersion ratio remain unchanged. [S6]

### L17 — Biconcave Negative (2x Asph)

nd = 1.85135, νd = 40.10. Glass: M-TAFD305 class (HOYA coordinate equivalent; supplier unconfirmed). f = -169.956 mm.

This double-sided aspheric biconcave element finishes G5. The patent associates rear-group aspheric shaping with astigmatism control (¶0141). The polynomial and both base radii are retained; the numerical source does not establish the manufacturing method. Its modeled 16.3 mm optical radius follows the drawn Figure 6 rim, as documented in the aperture discussion below.

The independently traced cemented-assembly EFLs are:

| Cemented assembly | Standalone assembly EFL (mm) |
|---|---:|
| L5–L6 | -119.160 |
| L8–L9 | -102.113 |
| L10–L11 | +77.429 |
| L15–L16 | -51.964 |

## Glass Identification and Selection

The source provides nd, νd and the absolute partial-dispersion ratio θgF for every glass.
All available primary HOYA catalog coordinates, including obsolete grades, were searched
before choosing equivalent labels. Relevant catalog formula coefficients were then checked
at C/d/F/g wavelengths. A coordinate-compatible catalog name is not a supplier or melt
identification. Molded-grade and environmental-prefix alternatives remain distinct candidate
records; they are not silently declared interchangeable.

| Element | nd | νd | Source θgF | Model ΔPgF |
|---|---:|---:|---:|---:|
| L1 | 1.80809 | 22.76 | 0.6287 | +0.02318232 |
| L2 | 1.54072 | 47.20 | 0.5678 | +0.00339040 |
| L3 | 1.80610 | 40.73 | 0.5694 | -0.00589214 |
| L4 | 1.48749 | 70.44 | 0.5306 | +0.00528008 |
| L5 | 1.69895 | 30.05 | 0.6028 | +0.00954410 |
| L6 | 1.94594 | 17.98 | 0.6546 | +0.04104236 |
| L7 | 1.77377 | 47.17 | 0.5557 | -0.00876006 |
| L8 | 1.78880 | 28.43 | 0.6009 | +0.00491926 |
| L9 | 1.75500 | 52.32 | 0.5473 | -0.00849776 |
| L10 | 1.85451 | 25.15 | 0.6103 | +0.00880230 |
| L11 | 1.59282 | 68.62 | 0.5440 | +0.01561884 |
| L12 | 1.69895 | 30.05 | 0.6028 | +0.00954410 |
| L13 | 1.76450 | 49.09 | 0.5528 | -0.00843062 |
| L14 | 1.75500 | 52.32 | 0.5473 | -0.00849776 |
| L15 | 1.98612 | 16.48 | 0.6656 | +0.04951936 |
| L16 | 1.78880 | 28.43 | 0.6009 | +0.00491926 |
| L17 | 1.85135 | 40.10 | 0.5695 | -0.00685180 |

The engine's normal line is 0.6438 − 0.001682·νd, so the stored value is
ΔPgF = θgF − (0.6438 − 0.001682·νd). The patent conditions instead subtract
0.6483 − 0.0018·νd. These are two different baselines; the patent-condition
deviation is not copied directly into the data's ΔPgF field. [S1, S5]

The primary catalog coverage combines the complete supplied HOYA catalog with directly
checked OHARA S-NBH58 and L-LAH91 datasheets. L8/L16 and L13 respectively match those
OHARA coordinates and partial-dispersion ratios; these are class-level equivalents.
Other vendors were considered through archived catalog excerpts rather than a complete
fresh manufacturer search. All 17 elements, including L2 on HOYA's E-FEL2 row, resolve to
compatible engine catalog entries. [S6–S7]
All 17 runtime partial-dispersion ratios reproduce the source values.

No complete nC/nF/ng set is invented from an incomplete source. Catalog equivalents supply
a C/d/F curve where available, while the source θgF anchors g relative to F and C.
This is useful spectral evidence, but it is not a factory melt measurement or an APO
performance certification. [S1, S4–S5]

## Focus Mechanism

The published mechanism is two-group inner focus: G2 (L2–L3) and G4 (L12–L13) move objectward;
G1, G3 and G5 are nominally fixed relative to the image plane (¶0152 and Figure 6).
Both published spacing columns are preserved:

| Surface after gap | Infinity d (mm) | Finite test d (mm) |
|---|---:|---:|
| 2 | 7.5696 | 7.0438 |
| 6A | 3.5035 | 4.0289 |
| 20 | 6.9518 | 6.3311 |
| 24A | 2.2921 | 2.9132 |

The G2 front moves objectward by 0.5258 mm and the G4 front by 0.6211 mm.
The literal four-gap tables imply a −0.0004 mm shift of nominally fixed G3. The
cause is not established: four independently rounded four-decimal gaps allow only
0.0002 mm summed discrepancy. The source numbers are retained without a repair;
exact mechanical invariance of G3 is not asserted by the numerical model.
Total track remains 128.7355 mm. The constant final source gap is 17.4972 mm.

The finite source object plane is 1348.7267 mm before the first vertex. Adding the modeled
track gives 1477.4622 mm object-to-image, which rounds to the printed 1477 mm heading.
The finite-state EFL is 34.135916 mm. At paraxial best focus, transverse
magnification is −0.024999930. At the unchanged authored image plane, the ABCD A
coefficient is −0.024980737; residual defocus means that coefficient alone is not
a unique conjugate-plane magnification. The retained image plane differs from paraxial best focus by
0.000655 mm; the source gap is not adjusted to optimize that residual.

The actual finite-conjugate selector recognizes only the authored focusT=1 station,
with the object point 1348.7267 mm before the first vertex. It selects no finite
conjugate at infinity or at the sampled interpolated positions 0.25, 0.5 and 0.75.
This certifies selector behavior, not a completed finite-distance MTF calculation.

The two endpoints have PUBLISHED spacing evidence. Intermediate slider positions use
piecewise-linear gap interpolation, not a measured continuous cam. No motion is extrapolated
to the marketed 0.28 m minimum focus distance. The near numerical state is a patent test
configuration, not the production minimum-distance model.

The verified first-order axial image-shift sensitivities at infinity are +0.036110 for G2
and +1.355642 for G4, per millimeter of imageward group translation. Their absolute ratio
is 0.026636. These are group-conjugate derivatives independently checked by small translations,
not motor travel ratios or a measured autofocus trajectory.

## Aspherical Surfaces

L3, L7, L13 and L17 are double-sided aspheres: source surfaces 5/6, 13/14, 23/24 and 30/31.
The source equation (PDF p41, ¶0190) is
z = (h²/R)/(1 + √[1 − (1+K)(h/R)²]) + Σ Aₚhᵖ,
with millimeter lengths and even powers 4–12. All source K values are zero, so no conic
parameter conversion is required. The schema-completion A14 term is zero; it is not a
new fitted coefficient.

| Surface | A4 | A6 | A8 | A10 | A12 |
|---|---:|---:|---:|---:|---:|
| 5A | -1.99816E-06 | -1.32897E-09 | -2.08157E-11 | 3.95950E-15 | 0.00000E+00 |
| 6A | -4.72277E-07 | -3.38850E-10 | -2.11984E-11 | 2.31760E-14 | 0.00000E+00 |
| 13A | -1.03559E-06 | -1.87709E-09 | -7.13483E-12 | 1.19593E-14 | 0.00000E+00 |
| 14A | 7.71680E-07 | -1.40925E-09 | -8.22545E-12 | 9.14549E-15 | 0.00000E+00 |
| 23A | -1.71933E-06 | 7.19596E-10 | -1.65373E-11 | 1.66871E-14 | 0.00000E+00 |
| 24A | 3.82753E-06 | -5.16977E-09 | -8.71093E-12 | 1.35974E-14 | 0.00000E+00 |
| 30A | 2.91423E-05 | -2.82416E-07 | 6.89447E-10 | -5.19770E-13 | 0.00000E+00 |
| 31A | 4.31949E-05 | -2.72422E-07 | 7.46965E-10 | -4.31810E-13 | -6.05302E-16 |

At the final modeled optical semi-diameters, the departures from the corresponding
K=0 spheres are:

| Surface | Modeled semi-diameter (mm) | Departure (µm) |
|---|---:|---:|
| 5A | 18.4 | -536.480 |
| 6A | 18.4 | -242.706 |
| 13A | 21.5 | -480.037 |
| 14A | 21.5 | -156.839 |
| 23A | 19.3 | -400.066 |
| 24A | 19.3 | +193.688 |
| 30A | 16.3 | -492.191 |
| 31A | 16.3 | +877.391 |

These are model-aperture departures, not published manufacturing apertures.
At the listed rims, 5A/6A and 13A/14A both lie objectward of their base spheres;
23A and 24A have opposite signed departures, as do 30A and 31A. A sign alone does not
isolate spherical aberration, coma or astigmatism. The full polynomial and the surrounding
rays determine the optical effect. The nonzero A12 term on 31A is retained.

## Conditional Expressions

All thirteen Example 2 values are reproduced from the retained source prescription.
D24 is the distance from s6 to s21; D2S is s6 to the diaphragm; D4S is diaphragm to s21;
LT is first vertex to image. The min/max subscripts select positive elements within the
named functional group, using their standalone power sign. βR is downstream transverse
magnification. The source's preferred bounds are transcribed here at their main stated
ranges, not silently replaced by its tighter optional bounds. [S1, PDF pp34–38 and PDF p49]

| Condition | Expression and source bound | Computed Example 2 value |
|---|---|---:|
| (1) | 0.30 < D24/LT < 0.65 | 0.465982 |
| (2) | theta_gF_min5p - 0.6483 + 0.0018*vd_min5p > 0.0250 | 0.046964 |
| (3) | vd_min5p < 24.00 | 16.480000 |
| (4) | vd_max5p - vd_min5p > 15.00 | 35.840000 |
| (5) | 0.50 < (1-beta4^2)*beta4R^2 < 2.50 | 1.355642 |
| (6) | abs(((1-beta2^2)*beta2R^2)/((1-beta4^2)*beta4R^2)) < 0.50 | 0.026636 |
| (7) | vd_max3p-vd_min3p > 30.00 | 50.640000 |
| (8) | theta_gF_max3p - 0.6483 + 0.0018*vd_max3p > 0.0120 | 0.019216 |
| (9) | theta_gF_min3p - 0.6483 + 0.0018*vd_min3p > 0.0200 | 0.038664 |
| (10) | D2S/LT > 0.06 | 0.150575 |
| (11) | D4S/LT > 0.15 | 0.315407 |
| (12) | -3.00 < f3a/f < -0.50 | -1.020578 |
| (13) | 0.50 < f3b/f < 3.00 | 1.140366 |

Each computed value lies inside its stated bound. The normal-line deviations in (2), (8)
and (9) are patent-baseline quantities, distinct from the model ΔPgF table above. Conditions
(5) and (6) are focus sensitivities, not an assessment of production focus breathing.

## Verification and Limitations

Source radii, spacings, indices, Abbe numbers and asphere coefficients are unchanged.
No scale factor, source repair, rear-plate substitution or synthetic cement is applied.
No sensor plate is present in the numerical example, so none is invented for the model.

The physical iris radius is inferred by tracing an axial ray of entrance height
EFL/(2·1.24) to the source diaphragm. The calibrated radius is 18.000304 mm. Matching
F1.24 is calibration, not independent confirmation of an unpublished diaphragm diameter.
The source prints F1.24 at both endpoint states; the model uses the current ordinary
fixed-physical-iris focus behavior, not an invented focus-dependent aperture schedule.

Clear semi-diameters are estimated from Figure 6 and floor-checked by exact ray tracing;
the patent publishes no effective diameters. The figure was measured at its native 300 dpi.
Its vertex crossings and image plane fit the Example 2 infinity spacings within about two
pixels at 18.36 px/mm, so the drawing is a scaled plot of this prescription. Its stop marks
begin 17.97 mm from the axis, against the 18.000 mm iris calibrated from F1.24. Rims were
read on both sides of the axis and agree within one pixel (0.06 mm). Edge thickness,
actual-rim slope, conic domain and shared-band gap intrusion all pass with the stored
values, and no layout margin or geometry policy was relaxed.

The figure draws several concave faces with a flat annulus outside the polished bowl.
The bowl ends were located from the axial position of each annulus: 26.4–26.8 mm on
surface 2, 17.7 mm on surface 4, 14.0 mm on surface 8, 14.5 mm on surface 9, 17.7 mm on
surface 22 and 14.7 mm on surface 29. Three of them match the traced F1.24 axial marginal
heights within 0.05 mm (14.09, 14.43 and 17.65 mm on surfaces 8, 9 and 22). Surfaces 4 and 29
are modeled at their bowl ends, because running either bowl to the element rim would
carry its edge past the front vertex of the next element. The renderer joins unequal
front and rear rims with a straight edge, so L2 and L16 show a chamfer where the figure
has a square annulus. Surfaces 2, 9 and 22 keep the drawn rim height, which leaves the
bowl 0.7, 1.8 and 0.2 mm deeper at the rim than drawn. G4 follows its drawn 19.3–19.5 mm
rim and L17 its drawn 16.3 mm rim. L4 is drawn as a 15.3 mm block; its front face is
modeled at 15.2 mm and its rear face at 14.5 mm, between the 14.0 mm bowl end and the
14.6 mm at which its bowl would crowd the L5 bowl behind it.

The baseline calibrated entrance-pupil radius is 13.951844 mm. The actual UI's
current-pupil helper yields 14.907547 mm at infinity; these values support different launch
conventions. Both were tested separately, rather than treating a physical iris grid as
proof about a display fan. With the stored semi-diameters the runtime half-field estimate
is 32.721789°, limited by rear surfaces 29 and 31A, so the default 60% field is 19.633073°;
the source's 60%-field angle would be 19.122°. A replay of the diagram fans through the
actual current-state pupil, field, ray-density and trace helpers covered five focus
samples, four apertures and both focus-tracking settings. All 240 on-axis normal samples,
190 of 200 default off-axis normal samples and 430 of 440 default off-axis dense samples
reached the last lens without clipping. The 10 clipped rays are all −0.75-pupil rays at
F1.24 and stop first at surface 21, an air-side face; this is wide-open vignetting at the
drawn G4 aperture. Passing them would need 20.6–21.4 mm on L12 and L13, against drawn
rims of 19.3–19.6 mm. The package's earlier tallies, in
which all 200 baseline/current-UI launch samples and every default-fan sample were clear,
were recorded with its original semi-diameters and an 18.411691° default field, and they
no longer describe the stored model. These are sampled source-helper checks, not a
mounted React or browser test.

A separate physical iris survey used 65 stop targets at three focus states, three fields
and three apertures. It was run with the package's original semi-diameters and has not
been repeated for the stored values. The on-axis grids all transmitted, while off-axis
full pupils vignetted. The full-corner F1.24 survey had unresolved rim aiming for 5, 3 and
3 targets at the infinity, midpoint and finite states respectively. Those targets are not
called transmitted or assumed to be definitively vignetted. All solved survey rays first
clipped outside cemented interfaces. These finite samples do not establish full-aperture
corner throughput or a continuous-state guarantee. With the stored semi-diameters, the
current-pupil five-ray fan at the 31.87° source half-field transmits 160 of 200 samples.
The 40 clipped samples stop first at surface 1 (10), surface 18 (10) or surface 29 (20),
all outside cemented junctions; 30 of them are at F1.24 and 10 at F2.8. Clipped rays do
not count as transmitted.

With the stored semi-diameters the minimum sampled element thickness is 0.789964 mm, at
the rim of L11, and the maximum rim angle is 49.880833°, on cemented surface 19. The
actual element-render diagnostics report zero hidden trim at five focus samples. The
local browser rendering was compared with Figure 6 at infinity and at the published
finite state.

Paraxial matrices and a separate sequential implementation agree. A portable 3D
Newton-intersection/vector-Snell implementation independently reproduces the recorded
pinned-runtime launch fixtures within 10⁻⁶ mm. The separately tested source geometry is
repeatable, but tolerances, inferred radii, catalog equivalence and the finite survey scope
remain material limits. Full application type checking, formatting, browser UI and corpus
integration checks are not asserted by the optical account.

## Sources

- [S1] Ryosuke Sato, Sigma Corporation, *Imaging Optical System*, US 2025/0334778 A1,
  October 30, 2025. Original supplied PDF, pp1, 7, 33–39, 41–44 and 49;
  Numerical Example 2 is on PDF pp42–44, its variable and asphere tables on PDF p43,
  and conditional-expression values on PDF p49.
  [Original publication service](https://depatisnet.dpma.de/DepatisNet/depatisnet?action=pdf&docid=US20250334778A1).
- [S2] Sigma, [35mm F1.2 DG II | Art product specifications](https://www.sigma-global.com/en/lenses/a025_35_12/),
  accessed October 4, 2026; lens-construction line (17 elements in 13 groups, one SLD and four
  aspherical elements) rechecked October 6, 2026.
- [S3] Sigma, [Launch schedule of Sigma 35mm F1.2 DG II | Art](https://www.sigma-global.com/en/news/2025/09/09/011116/),
  September 9, 2025.
- [S4] HOYA GROUP Optics Division, [official glass data downloads](https://www.hoya-opticalworld.com/english/datadownload/)
  and [2026-07-07 AGF including obsolete glasses](https://www.hoya-opticalworld.com/common/agf/HOYA20260707_include_obsolete.agf).
- [S5] LensVisualizer current-main spectral convention and runtime helpers,
  commit 53470da5a5cbda1807d1e523fbc71963e5a1adc7,
  [dispersion.ts](https://github.com/ronbuening/LensVisualizer/blob/53470da5a5cbda1807d1e523fbc71963e5a1adc7/src/optics/dispersion.ts).


- [S6] OHARA, [S-NBH58 datasheet, OHARA 25-04](https://www.ohara-inc.co.jp/assets/en/product/pdf/esnbh58.pdf), page 1; checked October 4, 2026.
- [S7] OHARA, [L-LAH91 datasheet, OHARA 25-04](https://www.ohara-inc.co.jp/assets/en/product/pdf/ellah91.pdf), page 1; checked October 4, 2026.
