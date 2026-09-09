# NIKON NIKKOR Z 50mm f/1.2 S — Patent Model

## Patent Reference and Design Identification

**Patent:** WO 2021/241230 A1

**Inventor:** Hiroki Harada

**Assignee:** Nikon Corporation

**Filed:** 2021-05-12

**Priority:** 2020-05-28

**Published:** 2021-12-02

**Embodiment analyzed:** Example 1, Table 1 and Figure 1

This diagram follows **Example 1, Table 1** of WO 2021/241230 A1,
*Optical System, Optical Device, and Method for Manufacturing Optical System*.
The applicant is Nikon Corporation and the inventor is Hiroki Harada
(原田 壮基). Priority is 2020-05-28; the PCT application was filed 2021-05-12
and published 2021-12-02.

The local publication's Table 1 occupies PDF pp28–31, its asphere equation
is on p26, and Figure 1 is on p63. The 17-element construction, three
aspherical surfaces, large aperture and two focusing groups support use as
a model associated with the Z 50mm f/1.2 S. The numerical example does not
establish an identical production prescription, glass supplier, motor system,
or production close-focus endpoint.

| Quantity | Patent Example 1 |
|---|---|
| Infinity focal length | 51.29 mm |
| F-number | 1.23 |
| Half field | 22.8° |
| Image semi-height | 21.60 mm |
| Total length including filter and image gap | 163.307 mm |
| Air-equivalent back focus | 12.567 mm, rounded |
| Close object distance from first surface | 467.50 mm |
| Close magnification | −0.1000 |

The f/1.2 designation identifies the associated product; the aperture control
uses the example's f/1.23. Its finite focus station is approximately 0.630 m
from the modeled image plane, not the former 0.45 m control label.

## Optical Architecture

The positive front group A contains nine elements. The rear assembly B
contains two moving groups, F1 and F2, and a stationary rear group R.
The stop lies between A and F1. There are two cemented doublets, L18–L19
and L42–L43, giving 17 elements in 15 air-separated groups.

| Group | Patent surfaces | Paraxial group focal length |
|---|---|---|
| A | 1–18 | +114.58 mm |
| F1 | 20–23 | −707.60 mm |
| F2 | 24–27 | +57.73 mm |
| R | 28–34 | −157.33 mm |

These are optical/movement groups, distinct from the 15 construction groups.
The front group has AF and AR subdivisions in Figure 1; both are stationary
relative to one another during focusing. F1 has weak negative net power;
F2 is positive and carries two aspheres. The negative rear group carries the
third asphere and the second cemented doublet.

## Element-by-Element Analysis

Shapes below describe the paraxial curvatures; an aspheric rim can depart
substantially from that base shape. Individual correction roles are optical
interpretations, not a claim that an element independently corrects one
aberration.

| Element | Base shape / placement | Optical role |
|---|---|---|
| L11 | Negative meniscus | Front divergence |
| L12 | Positive meniscus, high index | Chromatic and power balance in AF |
| L13 | Negative meniscus | Completes the front AF subdivision |
| L14 | Positive meniscus | Begins the positive AR sequence |
| L15 | Symmetric biconvex | Strong positive contribution |
| L16 | Positive meniscus | Distributes convergence through AR |
| L17 | Positive meniscus | Strong positive contribution |
| L18 | Biconvex, cemented to L19 | Positive member of first doublet |
| L19 | Biconcave | Negative member immediately before stop |
| L21 | Negative meniscus | Negative contribution in F1 |
| L22 | Plano-convex | Positive contribution balancing F1 |
| L31 | Biconvex base, aspheric rear | Positive member of F2 |
| L32 | Biconvex base, aspheric front | Positive member of F2 |
| L41 | Positive meniscus | First element in fixed rear group |
| L42 | Biconvex, cemented to L43 | Positive member of rear doublet |
| L43 | Biconcave | Negative member of rear doublet |
| L44 | Biconcave base, aspheric front | Final negative element |

## Glass Identification and Dispersion

The table publishes refractive indices and Abbe numbers, not commercial
glass names. Catalog names below identify numerical dispersion models only.
They do not establish production suppliers or chemical compositions.

| Elements | Patent nd / νd | Catalog model |
|---|---|---|
| L11 | 1.64000 / 60.1 | S-BSM81 |
| L12 | 1.94595 / 18.0 | FDS18 |
| L13 | 1.55298 / 55.1 | J-KZFH4 |
| L14–L17 | 1.59349 / 67.0 | J-PSKH4 |
| L18, L22 | 1.59319 / 67.9 | J-PSKH1 |
| L19 | 1.73800 / 32.3 | S-NBH53V |
| L21 | 1.72047 / 34.7 | S-NBH8 |
| L31 | 1.59306 / 67.0 | J-PSKH4, approximate nd match |
| L32 | 1.76450 / 49.1 | S-LAH96 |
| L41 | 1.61800 / 63.3 | S-PHM52 |
| L42 | 1.90265 / 35.8 | J-LASFH9 |
| L43 | 1.61266 / 44.5 | N-KZFS4 |
| L44 | 1.51680 / 64.0 | J-BK7 |

The former FCD505/S-FPM2 labels obscured closer catalog counterparts.
J-PSKH4 matches the four 1.59349/67.0 elements; J-PSKH1 matches the
1.59319/67.9 pair. For L31, the J-PSKH4 catalog nd is 1.59349, differing
from the patent's 1.59306; the runtime accepts it as a nearby dispersion
model while retaining the patent's scalar index in the prescription.

The two J-PSKH1 positions carry **inferred** APD markings based on the
compatible catalog curve. They are not patent-listed material identities.
The other lower-dispersion crowns are not marked APD merely because their
Abbe number is near 67. Catalog chromatic predictions remain approximations
to unreported production glasses.

## Focus Mechanism and Image Reference

Table 1 gives these infinity-to-close gaps:

| Gap | Infinity | Close | Interpretation |
|---|---|---|---|
| d19 | 19.164 mm | 11.437 mm | Stop to F1 |
| d23 | 2.000 mm | 3.584 mm | F1 to F2 |
| d27 | 1.900 mm | 8.043 mm | F2 to R |
| d36 | 0.702 mm | 0.701 mm | Filter to image |

F1 moves 7.727 mm toward the object relative to A and R. F2 moves 6.143 mm
in the same direction, a differential of 1.584 mm. These directions agree
with Figure 1. A and R remain stationary relative to one another; the
0.001 mm source change in the final image gap causes a correspondingly
small common shift when the diagram is anchored to its fixed image plane.
Intermediate focus positions interpolate the source gaps and approximate
the object-distance labels.

Patent surface 9 is a dummy plane in air. Combining d8 = −3.000 mm and
d9 = 3.100 mm preserves the actual 0.100 mm separation. Diagram labels
thereafter are one less than patent surface numbers.

The patent includes a 1.600 mm filter with nd = 1.51680 after L44.
The diagram omits that camera-side plate and uses the paraxial air equivalent:

- Infinity rear gap: 10.810 + 1.600 / 1.51680 + 0.702 = **12.566852 mm**.
- Close rear gap: **12.565852 mm**.
- Close object-to-image distance: 467.500 + 162.759852 = **630.259852 mm**.

The old model ended at the filter's front face, 10.810 mm after L44.
Preserving the object leg and using the air-equivalent image plane corrects
that omission without inventing additional group movement. Independent
paraxial propagation through the rounded close prescription leaves less than
0.004 mm ray-height residual for a unit reduced-angle launch from the source
object point; the source station is retained rather than fitted.

## Aspherical Surfaces

Equation (a), paragraph 0109 on PDF p26, is:

$$
S(y)=\frac{y^2/r}{1+\sqrt{1-\kappa y^2/r^2}}
+A_4y^4+A_6y^6+\cdots+A_{16}y^{16}.
$$

The engine uses $1+K$ inside the radical, so **K = κ − 1**.

| Patent surface | Diagram label | κ | Engine K | A16 |
|---|---|---|---|---|
| 25 | 24A | 15.2295 | 14.2295 | −2.27720 × 10⁻²² |
| 26 | 25A | −0.11590 | −1.11590 | +1.17040 × 10⁻²¹ |
| 33 | 32A | 9.47940 | 8.47940 | 0 |

All published coefficients through A16 are retained. A small coefficient
cannot be dismissed without evaluating the high power of the ray height.
The old data copied κ directly into K and omitted the two nonzero A16 terms.
The revised surfaces follow the printed equation. Surface 26's base is
hyperbolic under the standard K convention, not the previously described
mild prolate ellipsoid.

## Diagram Dimensions and Limits

The patent does not list clear semi-diameters. Figure 1 was rendered at
600 dpi and compared by optical rims. The approximately 2,771-pixel span
between the first and last optical vertices represents 150.194 mm.
The front rims are roughly 28–31.5 mm and the rear rims roughly 19–20 mm;
the former display shrank several front elements to 20–23 mm without
support in the numerical example.

The revised estimates retain stepped rims where required. The S4 exit is
limited to 26.5 mm by the adjacent air-gap constraint. S31 is limited to
17.75 mm and S32A to 18 mm near the final asphere. Larger trial rims caused
cross-gap overlap and were rejected. Surface validation and rendered-element
checks pass at infinity, midpoint and close focus, without hidden trimming.
These remain constrained figure estimates, not measured production apertures.

## Sources

- [WO 2021/241230 A1](https://patents.google.com/patent/WO2021241230A1/en): local original PDF, title page, equation (a), Table 1 and Figure 1.
- Hikari catalog entries J-PSKH1/J-PSKH4 and other catalog curves are documented in the site's glass catalog; their role here is numerical compatibility, not historical identification.
