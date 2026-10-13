# RICOH GR III 18.3mm f/2.8 — Patent Model

## Patent Reference and Design Identification

**Patent:** US 2019/0154946 A1

**Inventor:** Kazuyasu Ohashi

**Assignee:** Ricoh Co., Ltd.

**Priority:** 2017-11-22

**Filed:** 2018-09-26

**Published:** 2019-05-23

**Embodiment analyzed:** Example 5, Figures 5 and 23

**Title:** Imaging Lens, Camera, and Portable Information Terminal Device

The six-element, four-component design is associated here with the GR III
because its 18.28 mm focal length, f/2.87 aperture, 38.2° half field and
two aspheric elements correspond to that camera's optical configuration.
This correlation does not establish an identical production prescription.
The diagram follows the numerical patent example, with the explicit
filter-spacing inference below. The product designation remains 18.3mm f/2.8.

The application PDF provides Figure 5 on p4, Figure 23 on p16, the conic
equation on p26 and Example 5's coefficients on p27. The grant,
US 10,948,683 B2, confirms the table on p17 and coefficients on p28.

## Optical Architecture

A front optical group LO and rear optical group LI lie on opposite sides
of the aperture stop. Each contains a singlet and a cemented doublet,
giving four air-separated components overall. The front singlet is negative;
the doublets supply convergence; the final meniscus has weak negative
paraxial power and two aspheric surfaces.

The patent describes three internal air lenses: the two outer air gaps
have biconvex boundaries and the central gap has biconcave boundaries.
These describe the spaces between glass components, not additional glass
elements. The central gap contains the stop, 1.10 mm after surface 5 and
1.20 mm before surface 7. These stop spacings are source values.

## Element-by-Element Analysis

### L11 — Negative Meniscus with Aspheric Rear

nd = 1.51633, νd = 64.06. Glass: OHARA L-BSL7 (patent named).
Calculated isolated-element f = −60.898 mm.

The front meniscus has a concave surface facing the image. Surface 2
carries polynomial terms through order 14. Its weak negative power and
peripheral aspheric shape contribute to the front group's pupil and
aberration balance. A specific production manufacturing process is not
established merely by the glass designation.

### L12 and L13 — Front Cemented Doublet

L12: nd = 1.63980, νd = 34.47. Glass: OHARA S-TIM27 (patent named).
Calculated isolated-element f = −8.899 mm.

L13: nd = 1.88100, νd = 40.14. Glass: HOYA TAFD33 (patent named).
Calculated isolated-element f = +7.392 mm.

The biconcave negative member and biconvex positive member share surface 4.
Their differing dispersions provide a chromatic balancing pair. The quoted
individual powers use each element's two radii in air; they are descriptive
quantities, not the power of each member embedded in the cemented assembly.

### L21 and L22 — Rear Cemented Doublet

L21: nd = 1.88100, νd = 40.14. Glass: HOYA TAFD33 (patent named).
Calculated isolated-element f = +6.294 mm.

L22: nd = 1.69895, νd = 30.13. Glass: OHARA S-TIM35 (patent named).
Calculated isolated-element f = −7.310 mm.

The positive member lies nearest the stop. Its negative partner has the
lowest Abbe number in the example. Surface 8 is their cemented interface.
This rear doublet combines convergence with dispersion compensation.

### L23 — Weak Negative Meniscus with Two Aspheres

nd = 1.88202, νd = 37.22. Glass: HOYA M-TAFD307 (patent named).
Calculated isolated-element f = −1619.679 mm.

The nearly equal negative radii produce weak paraxial power. Both surfaces
carry aspheric terms, permitting substantial peripheral correction despite
that small axial power. Attribution of a particular amount of coma or
astigmatism correction to either surface would require a separate analysis.

## Glass Identification and Dispersion

Unlike patents that publish only nd and νd, Figure 23 explicitly names the
following glasses and their partial dispersion ratios. Vendor names here
are source attributions for the example, not a claim about production batches.

| Element | Patent glass | nd / νd | PgF |
|---|---|---|---|
| L11 | OHARA L-BSL7 | 1.51633 / 64.06 | 0.5333 |
| L12 | OHARA S-TIM27 | 1.63980 / 34.47 | 0.5922 |
| L13, L21 | HOYA TAFD33 | 1.88100 / 40.14 | 0.5701 |
| L22 | OHARA S-TIM35 | 1.69895 / 30.13 | 0.6030 |
| L23 | HOYA M-TAFD307 | 1.88202 / 37.22 | 0.5769 |

The stored ΔPgF values are rounded deviations from the normal line
PgF = 0.6438 − 0.001682νd. No element is identified as an ED or APD element
by the patent. The named glass and spectral data are retained.

## Focus Mechanism and Image Plane

Paragraph 0132 allows integral translation of the imaging lens for focusing
and also mentions movement of the image pickup surface as an alternative.
The viewer uses the integral-lens option: both optical groups and the stop
move together toward the object. There is no zoom mechanism.

No finite-focus numerical station is published for Example 5. The 0.10 m
slider endpoint is an **inferred object-to-image paraxial scenario**, not a
patent claim about normal or macro modes in the camera. Independent
reduced-angle propagation through the full prescription gives:

| Quantity | Value |
|---|---|
| First-to-last vertex length | 14.590 mm |
| Calculated focal length | 18.285348 mm |
| Calculated infinity BFD, no filter | 14.431291 mm |
| Adopted air-equivalent infinity gap | 14.430282 mm |
| Gap at 0.10 m object-to-image conjugate | 20.739543 mm |
| Modeled lens travel | 6.309261 mm |

The intermediate gap and distance readouts interpolate this scenario; they
are not independently tabulated patent focus stations.

### Apparent Filter-Spacing Error in Both Publications

Figure 23 literally prints d11 = 0.70 mm air, d12 = 12.807 mm in filter
glass (nd = 1.51633), and d13 = 1.40 mm air. Both the application and grant
have this ordering. Taken literally, their air-equivalent distance is
10.546051 mm, which conflicts with the calculated 14.431291 mm focus and
Figure 5's thin filter close to the image plane.

The model adopts the **inferred reordered sequence** 12.807 mm air,
1.40 mm filter and 0.70 mm air. Its air-equivalent distance is
12.807 + 1.40/1.51633 + 0.70 = 14.430282 mm, agreeing with paraxial focus
to 0.00101 mm. The thin filter is omitted from the viewer, so this equivalent
air distance is used instead of the former 14.907 mm physical total.
This remains an apparent source-table correction requiring explicit
qualification; it is not a verified literal spacing schedule.

## Aspherical Surfaces

The source uses the standard conic expression with **1 + K** under the
square root, followed by even powers of radial height. No conic conversion
is needed.

| Surface | K | A4 | A6 | A8 | A10 | A12 | A14 |
|---|---|---|---|---|---|---|---|
| 2 | 0 | 2.49546e−4 | 5.30767e−7 | −1.77772e−7 | 2.52567e−8 | −9.46560e−10 | 1.70552e−11 |
| 10 | 0 | 2.21965e−4 | −7.84181e−7 | 0 | 0 | 0 | 0 |
| 11 | 7.28422 | 6.02712e−4 | 8.85505e−6 | −5.39399e−8 | 4.60086e−9 | 0 | 0 |

Surface 2's A6 exponent is **−7**, legible in both original PDFs. The
previous −6 inference from other examples was incorrect. At 5 mm height
that error alone added 0.074639 mm to the surface sag. Other examples'
coefficients do not override this example's printed number.

## Diagram Dimensions and Limits

Figure 5 was inspected at 600 dpi using the 14.59 mm vertex span as the
scale reference. It shows the front singlet taller than the doublets, and
the final element close to the front doublet's height. The adopted rims are
5.9/5.8 mm for L11, 4.9 mm at the front doublet with a 4.6 mm exit,
4.4 mm for the rear doublet, and 4.9 mm for L23. These are drawing estimates;
the patent does not publish clear semi-diameters. Label leaders and brackets
are excluded from the measurement. Surface and image-circle checks pass.

## Sources

[US 2019/0154946 A1](https://patents.google.com/patent/US20190154946A1/en),
Example 5, Figures 5 and 23, ¶0132 and ¶0244–0265.
[US 10,948,683 B2](https://patents.google.com/patent/US10948683B2/en),
Figure 23 and Example 5 coefficients, original PDF pp17 and 28.
