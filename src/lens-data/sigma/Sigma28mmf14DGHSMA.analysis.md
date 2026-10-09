## Patent Reference and Design Identification

**Patent:** JP 2019-219472 A
**Application Number:** JP 2018-115803
**Filed:** 2018-06-19
**Published:** 2019-12-26
**Inventors:** Hokuto Usami, Kenta Fujita
**Applicant:** Sigma Corporation
**Title:** Imaging Optical System
**Embodiment analyzed:** Numerical Example 5

The modeled design is Numerical Example 5 of the original Japanese publication,
including its source-listed rear filter. The prescription and aspheric tables
are in ¶0084, PDF pp. 20–22 (printed pp. 19–21); Figure 21 is the corresponding
infinity-focus section on PDF p. 29. The exact production prescription is unconfirmed.

The association with the SIGMA 28mm f/1.4 DG HSM ART rests on convergent construction evidence:

1. The selected example has 17 elements in 12 air-separated groups, matching the product specification.
2. Both constructions use three aspheric elements; the patent makes both faces of each aspheric.
3. The manufacturer's two FLD and three SLD positions agree qualitatively with the special-glass layout of the example.
4. The native focal length and aperture are close to the marketed 28 mm and f/1.4, without being identical.

Sigma identifies the product as full-frame, offers SA, Canon EF, Nikon F, Sony E
and L-Mount variants, and identifies the first-release edition as A019. Its
specification gives 75.4° angle of view, a 0.28 m minimum focusing distance,
1:5.4 maximum magnification and a nine-blade rounded diaphragm. Those production
facts do not replace the patent's optical values or establish its focus law.
The official section and the patent section show closely related architecture,
but neither provides a factory prescription confirmation. [2]

## Optical Architecture

The design combines a weak positive fixed front group with a stronger positive
rear-focus group; the patent calls them L1 and L2. The negative menisci at
the front create the negative lead-in
typical of a retrofocus wide-angle construction, even though the complete fixed
front group has positive net power. The stop lies within the moving rear group.
The rear plate is camera-side and remains fixed with the image plane. [1, ¶¶0080–0082]

At infinity, the final prescription computes an EFL of 28.718206 mm against
the printed 28.72 mm. The computed paraxial physical last-lens-vertex BFD is 38.978945 mm,
including the physical LPF. The authored last-vertex-to-image distance is
38.978800 mm; the first-vertex-to-authored-image track is 152.060300 mm.
The corresponding air-equivalent BFD is 38.481007 mm; it is
reported only for comparison and is not substituted into the authored spacing.
Both BFD definitions exceed EFL, supporting the retrofocus description.
The physical track/EFL ratio is 5.294909; no telephoto characterization is implied.

The functional group powers are assembled quantities, including the listed
internal spacings. They are distinct from the standalone element powers below.

| Assembly | Source surfaces | Computed focal length (mm) | Interpretation |
|---|---|---:|---|
| Fixed front group L1 | 1–14 | +186.693469 | Weak net positive assembly |
| Moving rear group L2 | 15–30 | +54.139419 | Positive rear-focus assembly, including stop |
| All lenses before stop | 1–21 | +53.192947 | Patent Lsf, evaluated at infinity |
| D1 | 7–9 | +136.070948 | First front cemented pair |
| D2 | 10–12 | -51.760429 | Second front cemented pair |
| D3 | 19–21 | -55.811637 | Cemented pair before stop |
| T1 | 23–26 | -40.186953 | Negative post-stop triplet, the patent's L2c |

The full physical system's front principal plane is +52.324489 mm
from the first vertex. Its rear principal plane is +10.260739 mm
from the last lens vertex with the LPF retained. For the lens-only subsystem,
excluding the LPF, the latter offset is +9.762801 mm.
These different model reference planes must not be mixed.

The per-refracting-surface Petzval sum is 0.002839172 mm⁻¹, calculated as
Σ[(n′−n)/(Rnn′)], including all cemented interfaces. It is a first-order curvature
measure; it does not separately determine sagittal or tangential best-focus surfaces.

## Element-by-Element Analysis

The element labels E1–E17 below are the model's physical front-to-rear slots.
The patent reserves L1 and L2 for its two lens groups and names no single
element; of the cemented components it labels only the triplet, L2c, which is
T1 here. Quoted focal lengths are standalone thick-lens values in air, not contributions
that can be added to recover the assembled system power. Glass labels describe
coordinate classes; vendor candidates are discussed separately.

### E1 — Negative Meniscus

nd = 1.76385, νd = 48.49. Glass: S-LAH96 (OHARA coordinate equivalent, 764485; supplier unconfirmed). f = -75.521 mm.

The first element is a negative meniscus convex toward the object. It precedes
the aspheric negative meniscus and the positive members of the fixed group.
Its sign follows the numerical prescription and the description in ¶0081;
a unique aberration allocation is not established by that sign alone.

### E2 — Neg. Meniscus (2× Asph)

nd = 1.59201, νd = 67.02. Glass: M-PCD51 (HOYA coordinate equivalent, 592670; supplier unconfirmed). f = -76.563 mm.

Both surfaces, 3A and 4A, are aspheric. The rear face uses K = −1, while the
front uses a spherical conic base. This negative meniscus adds independent
peripheral-shape variables to the front section without changing the axial
paraxial power from the higher-order polynomial terms. [1, ¶¶0052–0053, 0081, 0084]

### E3 — Biconvex Positive

nd = 1.95375, νd = 32.32. Glass: TAFD45L (HOYA coordinate equivalent, 954323; supplier unconfirmed). f = +113.483 mm.

This high-index positive singlet precedes the two cemented pairs in the fixed
group. It is biconvex despite its relatively weak front curvature. The source
explicitly describes the element as biconvex; it is not modeled as a plane-faced
lens or merged with the following doublet. [1, ¶0081]

### E4 — Biconcave Negative

nd = 1.43700, νd = 95.10. Glass: FCD100 (HOYA coordinate equivalent, 437951; supplier unconfirmed). f = -67.525 mm.

E4 is the negative, very-low-dispersion member of D1 and shares surface 8 with
E5. The low-dispersion/high-index pairing contributes to the patent's first
front-group chromatic balance. Its very high Abbe number is compatible with
the manufacturer's first FLD position, but does not name the supplier. [1, ¶¶0019–0027, 0081]

### E5 — Biconvex Positive

nd = 1.91082, νd = 35.25. Glass: TAFD35L (HOYA coordinate equivalent, 911353; supplier unconfirmed). f = +46.995 mm.

E5 is the positive member of D1. The shared interface carries the downstream
E5 medium; an artificial air gap or generic cement layer would change the
published construction. The assembled D1 is positive, while its chromatic
power-over-Abbe balance is evaluated using the two standalone elements. [1, ¶0081]

### E6 — Biconcave Negative

nd = 1.73800, νd = 32.33. Glass: S-NBH53V (OHARA coordinate equivalent, 738323; supplier unconfirmed). f = -25.066 mm.

E6 begins D2 as a negative biconcave element. Its dispersion contrast with E7
makes the pair's first-order chromatic balance opposite in sign to D1.
The source's strategy is cancellation between the two front cemented pairs,
not a claim that either pair is independently achromatic. [1, ¶¶0024–0027]

### E7 — Biconvex Positive

nd = 1.59282, νd = 68.63. Glass: FCD515 (HOYA coordinate equivalent, 593686; supplier unconfirmed). f = +50.120 mm.

E7 is the positive, lower-dispersion member of D2 and is cemented to E6 at
surface 11. Its coordinate closely matches HOYA FCD515/FCD505 class data.
The assembled D2 nevertheless has negative net power: the standalone positive
power of E7 is not the power of the complete cemented assembly. [1, ¶0081; 3]

### E8 — Biconvex Positive

nd = 1.80420, νd = 46.50. Glass: TAF3D (HOYA coordinate equivalent, 804465; supplier unconfirmed). f = +46.337 mm.

This positive biconvex singlet ends the fixed front group. The following air
gap, d14, is the first focus variable. E8 remains fixed relative to the image
while the following group moves toward the object for the finite state.
No independent production focus mechanism is inferred from its shape. [1, ¶0080]

### E9 — Biconvex Positive

nd = 1.76385, νd = 48.49. Glass: S-LAH96 (OHARA coordinate equivalent, 764485; supplier unconfirmed). f = +88.019 mm.

E9 is the first element of the moving rear group. Its positive biconvex form
is retained even though the rear curvature is comparatively weak. The element
moves rigidly with the following lenses and the stop in the source mechanism.
[1, ¶¶0080, 0082]

### E10 — Biconvex Positive (2× Asph)

nd = 1.76802, νd = 49.24. Glass: M-TAF101 (HOYA coordinate equivalent, 768492; supplier unconfirmed). f = +86.716 mm.

E10 is a positive biconvex aspheric element with surfaces 17A and 18A.
The source lists a single glass medium through the element; no resin layer
is modeled. The moldable HOYA M-TAF101 coordinate is compatible, but catalog
compatibility alone is not evidence of the manufacturing process. [1, ¶0084; 3]

### E11 — Biconvex Positive

nd = 1.92286, νd = 20.88. Glass: E-FDS1-W (HOYA coordinate equivalent, 923209; supplier unconfirmed). f = +57.942 mm.

E11 is the positive member of D3 before the stop. The patent's low-Abbe and
anomalous-partial-dispersion conditions identify this positive element.
Its source-backed anomaly is retained after conversion of the patent's normal
line to the model convention; the conversion is explained below. [1, ¶¶0028–0032]

### E12 — Biconcave Negative

nd = 1.73800, νd = 32.33. Glass: S-NBH53V (OHARA coordinate equivalent, 738323; supplier unconfirmed). f = -28.043 mm.

E12 is the negative biconcave member of D3 and ends the refracting pre-stop
section. The following air contains the aperture stop at the published axial
position. D3 is net negative, while the complete moving rear group is positive.
These descriptions refer to different assembled optical subsystems. [1, ¶0082]

### E13 — Positive Meniscus

nd = 1.45860, νd = 90.20. Glass: FCD10A (HOYA coordinate equivalent, 459902; supplier unconfirmed). f = +63.994 mm.

E13 is a positive meniscus concave toward the object, forming the front of T1.
Its very-low-dispersion coordinate agrees with HOYA FCD10A class data. The source
uses this positive element, a negative middle member and a second positive
member in one cemented triplet after the stop. [1, ¶¶0033–0038, 0082; 3]

### E14 — Biconcave Negative

nd = 1.73800, νd = 32.33. Glass: S-NBH53V (OHARA coordinate equivalent, 738323; supplier unconfirmed). f = -21.831 mm.

E14 is the strongly negative middle member of T1. The two cemented interfaces
are retained as actual changes of glass medium. The patent constrains the
triplet's summed power-over-Abbe balance and the difference between the mean
positive-element partial dispersion and this negative member. [1, ¶¶0033–0038]

### E15 — Biconvex Positive

nd = 1.49700, νd = 81.61. Glass: FCD1 (HOYA coordinate equivalent, 497816; supplier unconfirmed). f = +140.146 mm.

E15 is the positive rear member of T1. Its coordinate agrees with HOYA FCD1
class data. Its positive standalone power does not negate the triplet's negative
assembled power; the two positive members bracket the stronger negative middle
member in the source construction. [1, ¶0082; 3]

### E16 — Biconvex Positive

nd = 1.59282, νd = 68.63. Glass: FCD515 (HOYA coordinate equivalent, 593686; supplier unconfirmed). f = +38.444 mm.

This positive, lower-dispersion singlet follows the triplet and shares the
same native nd/νd coordinate as E7. It is separated from the final meniscus by
a real air gap. The prescription supports the placement and power, but does not
uniquely assign a particular off-axis aberration correction to E16 alone. [1, ¶0084]

### E17 — Pos. Meniscus (2× Asph)

nd = 1.76802, νd = 49.24. Glass: M-TAF101 (HOYA coordinate equivalent, 768492; supplier unconfirmed). f = +113.282 mm.

The last lens element is a positive meniscus concave toward the object, with
aspheric surfaces 29A and 30A. It moves with the rear-focus group; the following
air spacing to the fixed LPF increases in the finite state. The same medium as
E10 is retained without assigning an unverified glass supplier. [1, ¶¶0080, 0082, 0084]

## Glass Identification and Selection

The patent supplies d-line indices and Abbe numbers without supplier names.
The table below records coordinate-compatible public candidates, not material
identifications. HOYA's complete current including-obsolete AGF was searched;
its relevant dispersion coefficients were independently evaluated. OHARA's
primary table provides the two focused S-prefix matches. The limited coverage
of other vendors does not exclude alternatives. [3, 4]

| nd / νd | Model elements | Catalog comparison | Residual (catalog minus patent) |
|---|---|---|---|
| 1.43700 / 95.10 | E4 | FCD100 (HOYA), coordinate equivalent | Δn +0.00000; Δν +0.00 |
| 1.45860 / 90.20 | E13 | FCD10A (HOYA), coordinate equivalent | Δn +0.00000; Δν -0.01 |
| 1.49700 / 81.61 | E15 | FCD1 (HOYA), coordinate equivalent | Δn +0.00000; Δν +0.00 |
| 1.59201 / 67.02 | E2 | M-PCD51 (HOYA), coordinate equivalent | Δn +0.00000; Δν +0.00 |
| 1.59282 / 68.63 | E7, E16 | FCD515 (HOYA), coordinate equivalent | Δn +0.00000; Δν -0.01 |
| 1.73800 / 32.33 | E6, E12, E14 | S-NBH53V (OHARA), coordinate equivalent | Δn +0.00000; Δν +0.00 |
| 1.76385 / 48.49 | E1, E9 | S-LAH96 (OHARA), coordinate equivalent | Δn +0.00000; Δν +0.00 |
| 1.76802 / 49.24 | E10, E17 | M-TAF101 (HOYA), coordinate equivalent | Δn +0.00000; Δν +0.00 |
| 1.80420 / 46.50 | E8 | TAF3D (HOYA), coordinate equivalent | Δn +0.00000; Δν +0.00 |
| 1.91082 / 35.25 | E5 | TAFD35L (HOYA), coordinate equivalent | Δn +0.00000; Δν +0.00 |
| 1.92286 / 20.88 | E11 | E-FDS1-W (HOYA), coordinate equivalent | Δn +0.00000; Δν +0.00 |
| 1.95375 / 32.32 | E3 | TAFD45L (HOYA), coordinate equivalent | Δn +0.00000; Δν +0.00 |

HOYA also lists FCD505 at the FCD515 coordinate, and several polished/moldable
variants share other coordinates. The data file names the tabulated row beside
its six-digit code so that every element traces on a vendor dispersion curve;
the name is a coordinate equivalent, not a supplier identification. OHARA
S-NBH53V is an exact coordinate candidate for the negative partners; no
equivalence between S- and L-prefixed grades is assumed. The LPF's
1.52301 / 58.59 coordinate is preserved; its dispersion uses the nearest HOYA
row, C12 (1.52307 / 58.64), as in the other Sigma models that carry this
filter, and that row does not identify the filter material.

The public catalog spectra are evidence for candidate comparison, not measured
spectra of the patent melts. No nC, nF or ng values have been fabricated for the
patent elements. A targeted execution of the pinned current runtime resolved
all seventeen class-labeled elements to compatible catalog curves. This can
select a different equivalent from the comparison table: E3 resolved to
J-LASFH21, E5 to H-ZLaF4LA, E6/E12/E14 to J-KZFH9, E8 to N-LASF44,
E11 to N-SF66 and E15 to H-FK61. These are runtime selections, not revised
supplier identities. The LPF uses Abbe approximation. The runtime preserves
E11's authored PgF = 0.639046 by reconstructing its g-line index from that
ratio and the selected catalog's C/F span. Thus the converted dPgF is active
even when the six-digit class resolves to a catalog curve.

## Focus Mechanism

The source mechanism is PUBLISHED rear focus: surfaces 15–30, including the
stop, move as a rigid assembly; surfaces 1–14, the LPF and image plane stay fixed.
The numerical table specifies infinity and a finite state captioned 1.275 m.
The source d0 is referenced to the first lens vertex, rather than the image.

| Quantity | Infinity | Finite source state |
|---|---:|---:|
| d0, object to first vertex (mm) | ∞ | 1122.9079 |
| d14, intergroup air (mm) | 6.9915 | 6.2577 |
| d30, last lens to LPF air (mm) | 36.5288 | 37.2626 |
| LPF physical thickness (mm) | 1.4500 | 1.4500 |
| BF, LPF to image air (mm) | 1.0000 | 1.0000 |

The rear assembly moves 0.7338 mm objectward, with equal and opposite gap changes.
The sum of physical track and d0 is 1274.9682 mm, consistent with the integer
caption 1275 mm. The model endpoint follows these tabulated distances rather
than the manufacturer's 0.28 m minimum distance. The source plots label the
finite state f/1.48 and half-field 37.17°; those labels are retained as source
facts and do not reset the inferred physical stop.

At this finite configuration the computed EFL is 28.658455 mm.
The paraxial best-focus magnification is -0.025001,
and the best-focus plane lies 0.000152 mm beyond the
authored plane. The source-rounded prescription is retained without adjusting
its image distance to eliminate that residual.

Between the two tabulated states, spacing interpolation is only a model
approximation. It does not establish a measured or uniquely reconstructed
production focus law. Sigma documents an HSM motor, but the motor information
adds no missing optical spacings. [1, ¶0080 and ¶0084; 2]

## Aspherical Surfaces

The three aspheric elements are E2 (3A, 4A), E10 (17A, 18A) and E17 (29A, 30A).
The patent defines the conic-plus-polynomial sag as

z(h) = (h²/R) / [1 + √(1 − (1 + K)(h/R)²)] + A4h⁴ + A6h⁶ + A8h⁸ + A10h¹⁰ + A12h¹².

Its K is already the model's conic constant: no conversion is applied.
Coefficients retain the source units mm^(1−p) for Ap, with lengths in millimetres.
K is dimensionless. There is no uniform rescaling. Only even orders through A12
are published; the required unused A14 slot is zero. [1, ¶¶0052–0053 and ¶0084]

| Surface | K | A4 | A6 | A8 | A10 | A12 |
|---|---:|---:|---:|---:|---:|---:|
| 3A | 0.0 | -3.9398E-06 | 8.2421E-09 | -8.6736E-12 | 0.0000E+00 | 0.0000E+00 |
| 4A | -1.0 | -4.3891E-06 | 1.3317E-09 | 8.3525E-12 | -5.3271E-14 | 3.4710E-17 |
| 17A | 0.0 | -2.1535E-06 | -9.2600E-10 | -2.1205E-11 | 6.6801E-14 | 0.0000E+00 |
| 18A | 0.0 | 1.6303E-06 | -4.1954E-09 | -6.8591E-12 | 5.1181E-14 | 0.0000E+00 |
| 29A | 0.0 | -7.6843E-06 | -7.4072E-09 | 6.8616E-11 | -9.0126E-14 | 0.0000E+00 |
| 30A | 0.0 | -3.6277E-07 | -3.7194E-09 | 5.8130E-11 | -5.9129E-14 | 0.0000E+00 |

The full polynomial and conic determine the peripheral shape; the sign of A4
alone cannot establish the direction of the total departure. At the explicitly
inferred model semi-diameters, departures from the same-radius vertex sphere are:

| Surface | Modeled semi-diameter (mm) | Full sag departure from vertex sphere (mm) |
|---|---:|---:|
| 3A | 23.6 | -0.632776 |
| 4A | 20.7 | -3.491762 |
| 17A | 20.3 | -0.248161 |
| 18A | 20.3 | +0.393687 |
| 29A | 17.7 | -0.592981 |
| 30A | 17.7 | +0.231565 |

At 3A and 17A the total sag is lower than the corresponding vertex sphere.
At 18A it is higher; the opposing departures provide distinct shape freedoms
on the two faces of E10. Surface 4A's much larger negative departure includes
its parabolic conic base and must not be attributed solely to the polynomial.
The final meniscus has negative departure at 29A and positive departure at 30A.
These statements describe geometry, not uniquely identified aberration corrections.

No asphere manufacturing process is established by the numerical table. The
model uses one medium for each aspheric element and does not invent a hybrid
resin layer. All quoted departures are at modeled apertures, not published
or measured production clear apertures.

## Chromatic Correction Strategy

The patent targets axial chromatic correction through complementary cemented
pairs in the front group and through material/power constraints in the rear.
For each front doublet it defines Ac as the sum of each standalone element's
power divided by its Abbe number. The two pairs have opposite signs, allowing
partial cancellation in the total. This is the source's stated first-order
balance; it is not a substitute for a full polychromatic aberration evaluation.
[1, ¶¶0019–0032]

The E11 material satisfies the source's low-Abbe and anomalous-dispersion
conditions. Its printed ΔPgf = 0.0283 uses the patent baseline
0.64833 − 0.0018νd. At νd = 20.88 this yields absolute PgF = 0.639046.
The model's baseline is 0.6438 − 0.001682νd, so its structured dPgF is 0.03036616.
The original and converted quantities describe the same published partial-
dispersion ratio; copying 0.0283 directly into the model would use the wrong
normal line. The patent explicitly discusses this element's anomalous behavior,
which supports its source-derived annotation. [1, condition (5), ¶¶0028–0032]

For T1, the patent gives only the difference between the mean positive-member
PgF and the negative member's PgF. Its printed value is 0.053. A separate
coordinate-compatible FCD10A/FCD1/S-NBH53V catalog-proxy calculation gives
0.053019, corroborating the constraint without identifying the actual materials.
The source does not determine three individual PgF values. No assertion of
apochromatic production performance follows from these constraints alone.

## Conditional Expressions

Conditions use the patent's definitions in ¶¶0018–0048 and the Example 5 column
of the condition table on PDF p. 26 (printed p. 25). The numerical comparisons
below retain the distinction between direct calculations and printed spectral
inputs. Powers refer to thick standalone elements or the indicated assembled
group, consistently with the reproduced source quantities.

| Condition | Governing requirement | Printed value | Computed or preserved value | Disposition |
|---|---|---:|---:|---|
| 1 | &#124;ΣAc&#124; < 0.0015 | 0.0005 | 0.000495327 | Bound satisfied |
| 2 | Ac for one front pair > 0 | 0.0004 | 0.000447934 | Bound satisfied |
| 3 | Ac for the other front pair < 0 | -0.0009 | -0.000943261 | Bound satisfied |
| 4 | νd(E11) < 30 | 20.88 | 20.880000000 | Bound satisfied |
| 5 | Patent ΔPgf(E11) > 0.0090 | 0.0283 | 0.0283 | Source spectral input; bound satisfied |
| 6 | &#124;AL2c&#124; < 0.0020 | 0.0012 | 0.001156173 | Bound satisfied |
| 7 | &#124;mean PgF(positive) − PgF(negative)&#124; < 0.065 | 0.053 | 0.053 | Source spectral input; bound satisfied |
| 8 | 1.50 < φ/φsf < 3.80 | 1.85 | 1.852237823 | Bound satisfied |
| 9 | 1.50 < φ/φ2 < 2.80 | 1.89 | 1.885195012 | Bound satisfied; reproduced to printed precision |

Condition (9) prints 1.89 in the Example 5 column. The unchanged prescription
computes 1.885195, within the 0.005 half-last-place tolerance. The separately
printed group and system focal lengths are also reproduced. All source radii,
spacings and indices are retained without repair.

## Aperture, Geometry and Model Limits

The source identifies the axial stop position but gives no physical iris
radius or per-surface clear apertures. The modeled stop radius, 14.0416215372 mm,
is inferred by exact axial Snell tracing from an entrance radius of
9.835002 mm at the native f/1.46 target.
This is an aperture calibration, not an independent measurement of diaphragm size.

The inferred lens semi-diameters are informed by Figure 21 and constrained by
actual sag, conic domain, rim slope, element thickness, shared-gap clearance
and off-axis ray containment. Surfaces 11, 25 and 26 take the heights at which
Figure 21 draws the flat tops of D2 and T1, and surface 21 ends where the
figure ends the concave rear face of E12, inside its flat annulus. Surface 10
ends at 19.3 mm, where Figure 21 and Sigma's construction diagram both end the
concave front face of E6. Surfaces 4A and 7 end at 20.7 and 20.2 mm, where
both drawings end the rear face of E2 and the front face of E4 against E3; the
faces close 97% and 98% of their air gaps without touching, so this lens sets
its shared-gap limit to 98% in place of the default 90%. Surface 2 stops at
the shared-gap limit, below the rim the figure draws. Figure 21 is drawn at 0.1923 mm/px along the
axis but 0.186 mm/px in height, as its drawn curvatures and its stop tick
show; the stored rims were first read at the axial scale and stand about 3 %
above the drawn heights, a uniform offset that is left in place.
The apertures are not obtained by equating filter
thread or barrel diameter with optical radius. Model corner chiefs and on-axis
bundles pass the sampled states; peripheral lens-edge vignetting is retained.
The exact infinity chief at the source half-field reaches 21.630127 mm,
consistent with the published 21.63 mm image height.

The portable diagnostic checks cover five focus settings, three apertures and
4,263 exact meridional/skew ray samples, including additional finite-state rays
to the published image-height edge. Those rays are aimed at physical-iris
coordinates and checked at 31 interior points per traversed glass segment.

A separate targeted execution of the pinned application optics modules tested
150 actual default-display-fan launches: five focus settings, f/1.46, f/4 and
f/16, all five default off-axis fractions, and both focus-tracking choices.
Every tested ray traversed all 32 surfaces without clipping and had a finite
straight-air extension to the authored image plane. The default fan uses
chief-relative entrance-pupil launch heights and the runtime's aperture-derived
field; it is distinct from the source-field physical-iris grid. An independent
meridional trace agreed with the runtime intercepts within 1.1 × 10⁻⁹ mm and
found no material-boundary excursion at 63 interior samples per glass segment.
This sampling does not establish clearance over a continuous domain or measure
production vignetting. Both ray samples predate the figure-based values of
surfaces 10, 11, 21, 25 and 26. An exact meridional re-trace at both published
focus states transmits the same bundle with the values of 11, 21, 25 and 26 as
before them. The higher rim of surface 10 widens the transmitted tangential
bundle at infinity from 81.5, 66.6 and 53.8 % to 83.6, 70.0 and 55.5 % of the
stop diameter at 0.5, 0.7 and 0.85 of the image height, and leaves the axial
beam and the corner bundle unchanged.

The most restrictive independent rim-closure thickness is 0.312796 mm, at E13;
the maximum actual rim slope is 63.600577°. Optical dimensions remain inferred,
especially at tapered cemented-group rims. The actual targeted
buildLens/validateLensData execution passed. Full project type checking,
Prettier, production-render hidden-trim validation and integration builds
remain unperformed; the optical-module execution does not substitute for them.

The physical LPF is retained as a 1.4500 mm plate at nd = 1.52301 and νd = 58.59,
followed by 1.0000 mm air. It is omitted only from the drawn element count, not
from optical propagation. There is no manual air-equivalent folding of its
thickness into d30. No production-render, measured spot/MTF, supplier-identity
or full-spectrum production-performance claim is made by this reconstruction.

## Sources

1. [Japan Patent Office, JP 2019-219472 A, Imaging Optical System](https://depatisnet.dpma.de/DepatisNet/depatisnet?action=pdf&docid=JP2019219472A).
   Original Japanese publication with PAJ wrapper; ¶¶0018–0059 define conditions
   and conventions; ¶¶0080–0084 and PDF pp. 20–22 contain Numerical Example 5;
   PDF p. 26 contains the condition table; Figure 21 and plots 22–25 are on
   PDF pp. 29–30. The PAJ wrapper supplies the Latin-script inventor names.
2. [Sigma Corporation, 28mm F1.4 DG HSM](https://www.sigma-global.com/en/lenses/a019_28_14/),
   specifications and [official construction diagram](https://www.sigma-global.com/lenses/a019_28_14_specification_01_01.jpg),
   accessed 2026-10-04. Product identity, marketed quantities and qualitative construction only.
3. [HOYA, optical-glass data downloads](https://www.hoya-opticalworld.com/english/datadownload/index.html),
   [20260707 AGF including obsolete glasses](https://www.hoya-opticalworld.com/common/agf/HOYA20260707_include_obsolete.agf).
   Catalog coordinate and dispersion comparisons; actual supplier identity unconfirmed.
4. [OHARA, Glass Type table](https://www.ohara-inc.co.jp/product/01000/) and
   [S-NBH53V detailed data](https://www.ohara-inc.co.jp/assets/product/pdf/jsnbh53v.pdf),
   accessed 2026-10-04. Focused S-LAH96/S-NBH53V coordinate and spectral-proxy evidence.
