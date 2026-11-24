# OLYMPUS M.ZUIKO DIGITAL ED 30mm f/3.5 Macro

## Patent Reference and Design Identification

**Patent:** US 9,791,677 B2\
**Inventors:** Masaru Morooka\
**Assignee:** Olympus Corporation\
**Filed:** 17 November 2015\
**Priority:** JP 2014-233321, 18 November 2014\
**Published:** 17 October 2017\
**Title:** Inner focus macrolens and image pickup device using the same\
**Example details:** Fig. 6A–C, surface and focus tables in columns 18–19, and aberration plots in Fig. 12A–L

Olympus's construction drawing points to **Example 5 or 6**. Both show seven elements in six air-spaced components,
with a cemented pair behind the stop. Olympus marks L1 DSA, L5 EDA and L6 aspherical, matching the three
double-aspheric elements in the patent. The negative element ahead of the fixed rear lens corresponds to the
moving unit in Fig. 6A–C. Olympus specifies inner focus with a screw drive.
[Olympus construction drawing](https://jp.omsystem.com/content/000083238.jpg)
[OM SYSTEM product specifications](https://explore.omsystem.com/us/en/m-zuiko-ed-30mm-f3-5-macro)

Examples 2–4 have eight elements or an air-equivalent length of about 82.6 mm. Example 1 has a rear meniscus
and a 41.6° field. The drawing leaves the choice between Examples 5 and 6 open. Example 6 supplies the modeled
prescription because its 39.89° infinity field is closer to Olympus's 40° specification than Example 5's 39.65°.
[Patent, Examples 1–6](https://patents.google.com/patent/US9791677B2/en)
[Olympus lens specifications](https://jp.omsystem.com/product/lens/macro/30_35macro/spec.html)

The 30 mm f/3.5 production lens uses the Micro Four Thirds mount and a seven-blade circular diaphragm that
closes to f/22. Example 6 gives 30.43 mm and f/3.56 at infinity, with a calculated paraxial focal length of 30.42 mm.
[Olympus instruction manual](https://learnandsupport.getolympus.com/sites/default/files/media/files/2018/03/man_mzd30f35macro.pdf)
[Olympus lens specifications](https://jp.omsystem.com/product/lens/macro/30_35macro/spec.html)
[Patent, Example 6](https://patents.google.com/patent/US9791677B2/en)

## Optical Architecture

The four patent units G1 through G4 have positive, positive, negative and positive power. Their calculated focal
lengths are +129.52, +20.15, −27.74 and +45.88 mm. The seven elements form six air-spaced components because two
elements share a cemented interface. The stop sits between G1 and G2.

The weakly positive G1 places a negative element before its positive partner. The patent describes G1 and G2 as a
Gauss-type front section that carries the main aberration correction. This lets G3 focus the lens with a single
negative element. The fixed positive G4 helps set the close-range magnification. The 6.08 mm camera-side plate is
part of the patent's optical path, behind the seven powered elements.

The prescription retains the printed radii, spacings, d-line glass values and aspheres. The plate and gaps put
the image plane 73.69 mm behind the front vertex, 0.025 mm behind paraxial focus at infinity. The clear radii
and the land on surface 6 are estimated from Fig. 6C. The plate has no clear radius of its own because the
patent prints none. The calculated 4.686 mm iris radius follows the printed infinity aperture. At infinity
the chief ray reaches the Four Thirds corner at 10.82 mm image height and 19.4° half-field.

## Element-by-Element Analysis

The element focal lengths are paraxial values for each element in air.

### L1 — Biconcave negative, double aspheric

$n_d = 1.58913$, $\nu_d = 61.15$. Glass: S-BAL35 (Ohara). Focal length −15.32 mm.

The negative front element of G1 has a shallow front and much stronger rear curvature. The patent links this
configuration to reducing off-axis aberrations and moving the principal point toward the object, which helps
preserve working distance at close focus.

### L2 — Biconvex positive

$n_d = 1.72342$, $\nu_d = 37.95$. Glass: S-BAH28 (Ohara). Focal length +15.54 mm.

L2 balances the negative power of L1 and leaves G1 weakly positive. Its stronger surface faces the object.

### L3 — Negative meniscus

$n_d = 1.76182$, $\nu_d = 26.52$. Glass: S-TIH14 (Ohara). Focal length −11.62 mm.

This high-dispersion negative element opens G2 just behind the iris. Its convex side faces the image and forms
the cemented interface with L4.

### L4 — Positive meniscus

$n_d = 1.79952$, $\nu_d = 42.22$. Glass: S-LAH52 (Ohara). Focal length +17.10 mm.

The positive mate to L3 takes nearly all its curvature from its rear surface. The cemented pair has a combined
focal length of −64.91 mm in air, much weaker than either element by itself.

### L5 — Biconvex positive, double aspheric

$n_d = 1.49700$, $\nu_d = 81.61$. Glass: FCD1 (Hoya). Focal length +19.08 mm.

The low-dispersion positive element behind the doublet makes G2 net positive. The printed Abbe number
of 81.61 is consistent with Olympus's extra-low-dispersion aspherical (EDA) designation.
[Olympus construction drawing](https://jp.omsystem.com/content/000083238.jpg)

### L6 — Biconcave negative, double aspheric

$n_d = 1.51633$, $\nu_d = 64.06$. Glass: L-BSL7 (Ohara). Focal length −27.74 mm.

The thin lens is the entire moving unit G3. Its strongly concave rear surface carries most of its negative power.
The two aspheres move together.

### L7 — Biconvex positive

$n_d = 1.83481$, $\nu_d = 42.73$. Glass: S-LAH55V (Ohara). Focal length +45.88 mm.

The fixed rear element has a nearly flat front and a distinctly convex rear. It adds positive power behind the
negative focusing element and brings the beam to focus beyond the camera-side plate.

## Glass and Chromatic Correction

The glass names identify catalog curves with d-line indices and Abbe numbers close to the printed values. The
patent leaves the production suppliers and melts unspecified. In G2 the negative, high-dispersion L3 is followed
by two positive glasses with successively lower dispersion. The Abbe number of 81.61 lets L5 carry most of G2's
positive power with relatively little primary color spread. The patent gives no partial-dispersion measurements
for these elements.

## Focus Mechanism

G3 moves toward the image while G1, the stop, G2, G4, the plate and the image plane stay fixed. The gap before G3
gains exactly the distance the gap behind it loses, so their sum remains 21.72 mm.

| Focus state | d10 (mm) | d12 (mm) | G3 travel (mm) | Object to first surface (mm) | Object to image (mm) | EFL, patent / model (mm) | Printed f-number |
| ----------- | -------: | -------: | -------------: | ---------------------------: | -------------------: | -----------------------: | ---------------: |
| Infinity    |     1.80 |    19.92 |           0.00 |                            ∞ |                    ∞ |            30.43 / 30.42 |             3.56 |
| 0.5×        |     7.96 |    13.76 |           6.16 |                        54.80 |               128.49 |            27.80 / 27.79 |             4.07 |
| 1×          |    15.56 |     6.16 |          13.76 |                        23.92 |                97.61 |            22.49 / 22.48 |             5.04 |

The patent prints three sets of spacings. The finite object distances and 33 of the 36 focus positions are
calculated for the fixed image plane. The model ends at 1× and 97.61 mm from object to image. Olympus specifies
1.25× at 95 mm from the sensor, with about 14 mm of working distance from the front of the lens.
[OM SYSTEM close-focus specifications](https://explore.omsystem.com/ee/en/m-zuiko-ed-30mm-f3-5-macro-black)

With the iris fixed at its infinity size, the image-side f-numbers before clipping are about 3.58 at 0.5× and
3.55 at 1×. The 1× axial beam slightly overfills the rims of the cemented pair and L5 at surfaces 7, 8, 9A
and 10A. The printed f/4.07 and f/5.04 describe narrower close-range beams.

## Aspherical Surfaces

The sag equation uses $1-(1+k)(h/r)^2$ under the square root. The conic constant $k$ is used as printed. The
equation allows an $A_{12}$ term, and the table for Example 6 stops at $A_{10}$. The last column gives the
signed sum of polynomial terms at each estimated clear rim, relative to the base conic.

| Element / surface |    $k$ |       $A_4$ |       $A_6$ |       $A_8$ |     $A_{10}$ | Rim departure (mm) |
| ----------------- | -----: | ----------: | ----------: | ----------: | -----------: | -----------------: |
| L1 / 1A           |      0 | −3.32176e−5 |  5.48670e−7 | −1.44850e−8 |  1.39256e−10 |             −0.045 |
| L1 / 2A           | −1.967 |  1.28821e−4 | −6.24774e−8 | −1.87604e−8 |  2.57096e−10 |             +0.200 |
| L5 / 9A           |      0 | −2.85655e−5 | −1.62203e−7 |  3.86801e−9 | −7.91556e−11 |             −0.088 |
| L5 / 10A          |      0 |  7.16927e−5 |  1.84655e−7 | −1.83473e−9 | −2.03651e−11 |             +0.178 |
| L6 / 11A          |      0 | −9.84785e−6 |  1.29117e−6 | −3.74635e−8 |  3.33054e−10 |             +0.011 |
| L6 / 12A          |      0 | −1.28247e−5 |  1.02065e−6 | −3.21827e−8 |  2.85706e−10 |             −0.020 |

The largest departures are on the rear faces of L1 and L5. L6 has smaller rim departures on both faces and
supplies its correction as part of the moving focus unit.

## Conditional Expressions

Example 6 satisfies the patent's nine design conditions. Here $f$ is the infinity focal length, $f_i$ the focal
length of each unit and $f_{12}$ the combined focal length of G1 and G2. The magnifications $\beta_3$ and
$\beta_4$ are evaluated at infinity focus. $R_{2f}$ and $R_{2r}$ are the two radii of L3. $D_{23}$ is G3's
infinity-to-1× travel, $D_3$ its thickness, and $TL$ the air-equivalent length.

| Condition                         | Patent range | Calculated |
| --------------------------------- | -----------: | ---------: |
| $(1-\beta_3^2)\beta_4^2$          |     −5 to −2 |      −2.68 |
| $(R_{2f}+R_{2r})/(R_{2f}-R_{2r})$ |    −4 to 0.4 |     −1.084 |
| $f_1/f$                           |    1.2 to 30 |       4.26 |
| $f_4/f$                           |     1.2 to 2 |       1.51 |
| $f_2/f$                           |   0.2 to 1.0 |       0.66 |
| $f_3/f$                           | −3.0 to −0.1 |      −0.91 |
| $f_{12}/f$                        | 0.40 to 0.80 |       0.58 |
| $D_{23}/TL$                       | 0.10 to 0.30 |      0.192 |
| $D_3/D_{23}$                      | 0.03 to 0.20 |      0.073 |

## Sources

- Prescription, focus states and design conditions. [US 9,791,677 B2](https://patents.google.com/patent/US9791677B2/en)
- Production construction, angle of view, aperture and screw drive. [Olympus specifications](https://jp.omsystem.com/product/lens/macro/30_35macro/spec.html) and [OM SYSTEM specifications](https://explore.omsystem.com/us/en/m-zuiko-ed-30mm-f3-5-macro)
- Mount and aperture range. [Olympus instruction manual](https://learnandsupport.getolympus.com/sites/default/files/media/files/2018/03/man_mzd30f35macro.pdf)
- Maximum magnification, minimum focus and working distance. [OM SYSTEM close-focus specifications](https://explore.omsystem.com/ee/en/m-zuiko-ed-30mm-f3-5-macro-black)
- Section and special-element designations. [Olympus construction drawing](https://jp.omsystem.com/content/000083238.jpg) and [Olympus announcement](https://www.olympus-global.com/news/2016/nr160920m30macroe.html)
