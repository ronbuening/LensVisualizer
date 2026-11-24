# NIKON NIKKOR 18.5mm f/2.8 (Nikon COOLPIX A)

## Patent Reference and Design Identification

**Patent:** US 9,915,803 B2\
**Inventors:** Atsushi Suzuki\
**Assignee:** Nikon Corporation\
**Filed:** 2014-02-14 (PCT)\
**Priority:** 2013-02-19 (JP 2013-029580 and JP 2013-029581)\
**Published:** 2018-03-13 (U.S. grant)\
**Title:** Optical System, Optical Apparatus, and Method for Manufacturing the Optical System\
**Example details:** Table 1 and Figures 1–2

The patent gives a normalized focal length of 1.00 and allows proportional scaling. The model multiplies the radii,
thicknesses and gaps, including the image gap, by 18.5. Each order-$n$ aspheric coefficient is divided by
$18.5^{n-1}$, with the same base conic. The 18.497 mm effective focal length rounds to Nikon's marked 18.5 mm.
The model opens to the patent's f/2.88. Nikon marks the camera f/2.8. [1–3]

The patent family is a probable match for the COOLPIX A. Three pieces of evidence support that identification.

1. Nikon specifies a fixed 18.5 mm f/2.8 lens with seven elements in five groups and a 23.6 × 15.6 mm DX sensor.
   DPReview reports one aspherical element. Example 1 has the same counts and covers a comparable field. [1–3, 5]
2. DC Watch's interview identifies Atsushi Suzuki, the patent's inventor, as the camera's optical and lens barrel
   designer. [1, 4]
3. Nikon announced the camera on March 5, 2013, two weeks after the priority filings. The patent describes a
   retractable lens for a slim compact camera with an aperture near f/2.8 and a field near 75°. [1, 2]

Examples 1, 3, 5, 6, 7, and 8 all have seven elements in five groups and one aspherical surface. Examples 2 and 4
have eight elements in six groups. Example 1 is the first numerical design. It places the asphere on L7, while
Example 8 places it on L6. A public Nikon section drawing is unavailable for locating the asphere and cemented
pairs, so the exact production prescription remains unknown. [1–5]

## Optical Architecture

Example 1 is a wide-angle prime. A front negative meniscus and a positive meniscus form a weak
converging pair ahead of the stop. After the stop come a converging cemented pair (L3/L4, +22.43 mm), a diverging
cemented pair (L5/L6, −33.67 mm), and a positive rear meniscus. The patent relates the weak power of the front pair
and the stop position to control of coma and distortion with a small front lens. The five groups count the air-spaced
optical components, including each cemented pair as one. [1]

Two plane-parallel plates follow L7 in the patent's filter group FL. Nikon states that the camera has no optical
low-pass filter. The composition of the production sensor stack remains unknown. [1, 2]

## Element-by-Element Analysis

The focal lengths below are for each element in air.

### L1 — Negative meniscus

**nd = 1.57957, νd = 53.74. Glass unidentified. f = −23.65 mm.**

The front meniscus is convex toward the object and spreads the incoming bundle. Its concave rear face and the weak
combined power of L1 and L2 help control off-axis coma and distortion. [1]

### L2 — Positive meniscus

**nd = 1.77250, νd = 49.62. Glass equivalent J-LASF016 (Hikari). f = +25.10 mm.**

This object-facing positive meniscus counterbalances L1. The spacing and curvatures leave the two lenses with
weak positive power together, with the stop immediately behind L2. [1]

### L3 — Biconvex positive

**nd = 1.88300, νd = 40.66. Glass equivalent J-LASF08A (Hikari). f = +8.84 mm.**

L3 supplies the positive power of the first cemented pair. It presents a convex face immediately behind the
stop, a shape the patent associates with coma control. [1]

### L4 — Biconcave negative

**nd = 1.69895, νd = 30.13. Glass equivalent S-TIM35 (Ohara). f = −13.47 mm.**

The more dispersive member of the first pair reduces its positive power. The shared surface with L3 lies at
surface 7. [1]

### L5 — Biconcave negative

**nd = 1.69895, νd = 30.13. Glass equivalent S-TIM35 (Ohara). f = −11.94 mm.**

L5 provides the negative power of the second pair. It presents a deeply concave face to the air gap and shares
surface 10 with L6. [1]

### L6 — Biconvex positive

**nd = 1.75500, νd = 52.33. Glass equivalent J-LASKH2 (Hikari). f = +20.12 mm.**

L6 is the less dispersive member of the second pair. It offsets part of L5's power before the bundle reaches the
rear meniscus across a 0.202 mm air gap. [1]

### L7 — Aspherical positive meniscus

**nd = 1.79050, νd = 45.01. Glass unidentified. f = +39.19 mm.**

This positive meniscus faces its convex side toward the image. The image-side asphere reshapes the outer part of
the surface, where oblique rays pass well away from the axis. [1]

## Glass Identification and Selection

The model preserves the patent's d-line coordinates. Catalog glasses with similar coordinates supply dispersion
curves. The production glass suppliers and melts are unknown.

| Position           |      nd |    νd | Catalog equivalent |
| ------------------ | ------: | ----: | ------------------ |
| L1                 | 1.57957 | 53.74 | Unmatched          |
| L2                 | 1.77250 | 49.62 | J-LASF016 (Hikari) |
| L3                 | 1.88300 | 40.66 | J-LASF08A (Hikari) |
| L4, L5             | 1.69895 | 30.13 | S-TIM35 (Ohara)    |
| L6                 | 1.75500 | 52.33 | J-LASKH2 (Hikari)  |
| L7                 | 1.79050 | 45.01 | Unmatched          |
| Both filter plates | 1.51680 | 64.20 | BSC7 (Hoya)        |

The two cemented pairs each combine a more dispersive negative member with a less dispersive positive member.
The model estimates dispersion from the Abbe number for L1 and L7. [1]

## Focus Mechanism

Table 1 gives only the infinity spacings, the model's single focus state. The camera uses contrast-detect autofocus
to about 0.50 m in normal mode and 0.10 m in macro mode, both measured from the center of the front lens surface.
Nikon's team describes making room for close-focus travel. The moving group and its travel remain unspecified.
DPReview measured 0.20× magnification in macro mode. [1, 3–5]

## Aspherical Surface

Table 1 specifies a single asphere on L7 at surface 13A. The radical in the patent's sag expression is
$\sqrt{1-\kappa y^2/r^2}$. In the convention with $1+K$ inside the curvature term, its $\kappa=1.0000$
corresponds to $K=0$ and a spherical base. [1]

| Term     | Table 1 value |
| -------- | ------------: |
| $A_4$    |  1.0347 × 10⁰ |
| $A_6$    |  3.0500 × 10⁰ |
| $A_8$    |  6.0720 × 10⁰ |
| $A_{10}$ | −3.0169 × 10¹ |

At the clear rim the combined polynomial gives a positive sag departure from the base sphere, reducing the
magnitude of its negative edge sag. The patent identifies the rear asphere as a means of correcting field
curvature and astigmatism. [1]

## Conditional Expressions

At the patent's normalized scale, the front pair meets the condition $|f_{12}/f| > 6.6$. Table 1 gives 6.615
and the model gives 6.610. The second condition limits $(-f_1/d)/f$ to the range 0.75–1.20, where $d$ is
the distance from the first to the last lens surface. Table 1 and the model both give 0.939 at that scale.
The patent relates these limits to coma and distortion control in a short lens. [1]

## Aperture, Field, and Image Plane

Table 1 fixes the stop at surface 5. The printed f/2.88 gives a calculated iris radius of 3.935 mm. The clear radii
and the outer lands at surfaces 2 and 9 are estimated from Figure 1. The camera has a seven-blade iris with
19 third-stop settings, from f/2.8 to f/22. [1, 3, 5]

The printed 38.9° half-field gives a 14.615 mm image height, 3.3% beyond the 14.145 mm DX corner. The rims admit
the axial beam. At the DX corner (about 38.0°), the chief ray clears the rims and about 97% of the pupil area
is transmitted. [1, 3]

The model places the image plane at the printed gap of 0.705 mm behind the last plate. The calculated paraxial
focus lies 0.698 mm behind that plate, about 0.007 mm in front of the printed plane. [1]

## Sources

1. [US 9,915,803 B2, _Optical System, Optical Apparatus, and Method for Manufacturing the Optical System_](https://patents.google.com/patent/US9915803B2/en),
   Embodiment 1, Table 1, Figures 1–2, and Examples 2–8.
2. Nikon, [_Digital Compact Camera Nikon COOLPIX A_](https://www.nikon.com/company/news/2013/0305_cpx_01/),
   March 5, 2013 announcement.
3. Nikon, [_COOLPIX A Specifications_](https://nij.nikon.com/products/lineup/compact/a/spec.html).
4. DC Watch, [_An Interview About the Lens of the Nikon COOLPIX A_](https://dc.watch.impress.co.jp/docs/news/interview/593500.html),
   interview with Atsushi Suzuki and the camera development team.
5. DPReview, [_Nikon Coolpix A Comparative Review_](https://www.dpreview.com/reviews/1257143006/nikon-coolpix-a/),
   lens construction, aspherical element count, smallest aperture setting, and measured macro magnification.
