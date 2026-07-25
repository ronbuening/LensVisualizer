## Patent Reference and Design Identification

**Patent:** US 2015/0226942 A1\
**Application Number:** 14/614,722\
**Priority:** February 7, 2014\
**Filed:** February 5, 2015\
**Published:** August 13, 2015\
**Inventor:** Takashi Suzuki\
**Applicant:** FUJIFILM Corporation\
**Title:** *Teleconverter Lens and Imaging Apparatus*\
**Embodiment analyzed:** Example 1

The data file models Example 1 as a TCL-X100 front converter mounted on the published X100 master lens. The patent does
not identify the commercial accessory by name, so the production correlation remains an inference fixed by the job card
rather than a claim of express manufacturer confirmation. Several independent features converge:

1. Example 1 contains a four-element, four-group front converter, matching Fujifilm's published TCL-X100 constitution.
2. The master contains eight elements in six air-separated groups and one element with two aspherical surfaces, matching
   the pre-X100V X100-series 23 mm f/2 lens constitution published by Fujifilm.
3. The computed master focal length is 23.7167 mm, consistent with the rounded 23 mm product specification.
4. The mounted prescription computes to 32.8181 mm and 1.3837506× focal-length magnification. Fujifilm describes the
   accessory as an approximately 1.4× converter producing an approximately 33 mm actual focal length and a 50 mm-equivalent
   field of view.
5. The patent gives f/2.05 and a 44.4° full field. Fujifilm markets the mounted system as retaining the master lens's f/2
   aperture.
6. The patent priority date and Fujifilm's addition of TCL-X100 support to the original X100 firmware place the numerical
   example within the relevant product period.

No uniform scale is applied. Marketing values remain separate from the exact prescription results: 33 mm and f/2 are
product labels, while 32.8180507068 mm and f/2.05 are the modeled design values.

## Optical Architecture

The mounted system contains 12 glass elements in 10 air-separated groups. Its front converter has four physical elements
in four air-separated groups, although the patent describes two functional power groups: positive front group G1, formed
by L11 alone, and net-negative rear group G2, formed by the air-spaced L21, L22, and L23 sequence. The widest converter
air space separates G1 from G2. This positive-negative arrangement behaves as a nearly afocal front conversion system:
it changes angular scale and raises the complete-system focal length while leaving the master image plane nearly fixed.

The converter's computed focal-length factor is 1.3837506×. Its functional G1 has a net focal length of +97.5032 mm,
whereas the complete G2 sequence has an in-situ net focal length of -70.5579 mm. The latter figure describes the three
rear converter elements acting together with their published air spaces; it is distinct from the standalone focal length
of any one element.

The eight-element master begins with the cemented L31/L32 pair ahead of the aperture stop. Behind the stop are L33, the
cemented L34/L35 pair, the double-aspherical L36 meniscus, negative L37, and plano-convex L38. The two cemented pairs are
both net positive in air despite being assembled from strongly opposed standalone powers: L31/L32 computes to
+34.3944 mm, and L34/L35 to +54.1239 mm. This separation between element power and cemented net power is essential to the
interpretation of the master.

The active vertex track is 76.2400 mm and the air-equivalent back focal distance is 5.6208142155 mm. Under the project
terminology, the mounted design is neither telephoto nor retrofocus: its active track exceeds its focal length, while its
back focal distance is substantially shorter than its focal length. “Teleconverter” describes the accessory's function,
not a telephoto architectural classification.

The patent's plane-parallel cover/filter member PP is excluded from the sequential model. Its optical-path effect is
retained by replacing the rear plate assembly with the final 5.6208142155 mm air-equivalent spacing from surface 23 to
the image plane. The stop position is published, but its 5.1915021168 mm semi-diameter is inferred from the modeled
32.8181 mm focal length and f/2.05 aperture.

The patent publishes no clear apertures. Every surface semi-diameter is therefore a disclosed modeling inference derived
from the stop and field rays, the patent section drawing, the 67 mm accessory filter thread as a mechanical upper bound,
and the current geometry constraints. These inferred diameters are not patent dimensions.

## Element-by-Element Analysis

### L11 — Positive Meniscus, Teleconverter Front Group G1

**nd = 1.48749, νd = 70.2. Glass: S-FSL5 (OHARA; exact 487702 coordinate match). Standalone f = +97.5032 mm.**

L11 is the sole element of the positive front group. Its high Abbe number is a source-level design requirement: the
patent places increasingly strict lower bounds on the dispersion number of this large front positive lens. Its positive
meniscus form collects the wide incident bundle without dividing the largest-diameter group among multiple elements.

The element's power must be read in the context of the nearly afocal converter. L11 alone is distinctly positive, but it
is followed across the converter's widest air space by a net-negative three-element group. The combined converter alters
the master lens's angular scale rather than functioning as a conventional positive taking lens by itself.

### L21 — Negative Meniscus, First Element of Teleconverter Rear Group G2

**nd = 1.84666, νd = 23.8. Glass: S-TIH53 (OHARA; exact 847238 coordinate match). Standalone f = -52.8657 mm.**

L21 is a high-index, high-dispersion negative meniscus. It begins the rear converter group and supplies the first major
negative contribution after the long G1-to-G2 air space. The patent's dispersion strategy depends on its low νd being
paired with the much higher-νd negative element L22 rather than on anomalous partial dispersion.

Its standalone focal length does not equal the power of G2. The complete L21/L22/L23 air-spaced sequence has the verified
net focal length of -70.5579 mm, including the spacing-dependent interactions among all three elements.

### L22 — Negative Meniscus, Low-Dispersion Partner in G2

**nd = 1.69680, νd = 55.5. Glass: S-LAL14 (OHARA; exact 697555 coordinate match). Standalone f = -38.5913 mm.**

L22 is also negative, but its Abbe number is 31.7 higher than L21's. The patent expressly uses this dispersion separation
as a condition for balancing longitudinal and lateral chromatic error in a converter whose large front group contains
only one positive element. The element therefore combines negative power with a materially different ordinary
dispersion from the preceding negative meniscus.

The data support an achromatizing interpretation at the d-line/Abbe level only. No line-index or partial-dispersion data
are available to support an apochromatic or anomalous-dispersion claim.

### L23 — Positive Meniscus, Rear Positive Element of G2

**nd = 1.59270, νd = 35.3. Glass: S-FTM16 (OHARA; exact 593353 coordinate match). Standalone f = +31.1497 mm.**

L23 is the positive rear member of the functionally negative G2 group. Its positive power bends the final converter rays
toward the entrance of the master lens while its relatively low Abbe number participates in the converter's ordinary
chromatic balance. The patent requires the lowest-νd positive lens in G2 to remain below specified upper bounds; Example 1
satisfies both.

Although L23 is the strongest positive standalone element in the converter, the preceding two negative menisci and their
air spaces leave G2 net negative. This is an in-situ group result, not a contradiction in the element labels.

### D1: L31 + L32 — Cemented Front Pair of the Master Lens

**L31: nd = 1.74077, νd = 27.8. Glass: S-TIH13 / E-FD13 class (741278 coordinate). Standalone f = -21.4136 mm.**\
**L32: nd = 1.88300, νd = 40.8. Glass: S-LAH58 (OHARA; exact 883408 coordinate match). Standalone f = +12.8919 mm.**

L31 and L32 share the cemented interface at surface 10. The interface carries the downstream L32 index and element
identity, so no synthetic cement layer is inserted. The pair combines a negative front meniscus with a substantially
stronger positive rear meniscus and has a verified cemented net focal length of +34.3944 mm.

This doublet establishes the positive front power of the master immediately before the aperture stop. The 13-point
Abbe-number separation provides ordinary dispersion leverage. The catalog-coordinate assignments improve spectral
coverage but do not prove which vendor supplied the production glass or establish a partial-dispersion claim.

### L33 — Positive Post-Stop Meniscus

**nd = 1.88300, νd = 40.8. Glass: S-LAH58 (OHARA; exact 883408 coordinate match). Standalone f = +46.7682 mm.**

L33 is the first glass element behind the stop. Its moderate positive power continues the master lens's convergence before
the strongly opposed L34/L35 cemented pair. Positioning this element directly behind the aperture gives it substantial
influence over the axial ray bundle without assigning it the extreme standalone power seen in the following doublet.

Its rear clear aperture is intentionally smaller than the next group's front aperture because the intervening air gap is
only 0.30 mm. This diameter change belongs to the inferred geometry model; it is not a published mechanical dimension.

### D2: L34 + L35 — Central Cemented Opposed-Power Pair

**L34: nd = 1.59270, νd = 35.3. Glass: S-FTM16 (OHARA; exact 593353 coordinate match). Standalone f = -9.4970 mm.**\
**L35: nd = 1.88300, νd = 40.8. Glass: S-LAH58 (OHARA; exact 883408 coordinate match). Standalone f = +9.8800 mm.**

L34 and L35 form the strongest opposed-power pair in the master. L34 is biconcave and strongly negative; L35 is biconvex
and almost equally strong in the positive direction. Their cemented interface is surface 16, which correctly carries the
downstream L35 index and element identity.

Despite the near equality of the standalone focal-length magnitudes, the thick cemented combination is not optically
neutral. Its verified net focal length is +54.1239 mm. The pair redistributes strong surface powers within a modest net
positive group, giving the master substantial bending freedom without requiring the complete group to be strongly
negative.

### L36 — Weak Positive Meniscus with Two Aspherical Surfaces

**nd = 1.56865, νd = 58.6. Glass: Unmatched (nd=1.56865, νd=58.6; no authoritative catalog match). Standalone f = +178.3055 mm.**

L36 is weakly positive in paraxial power but carries the master lens's only two aspherical surfaces, 18A and 19A. Its role
is therefore dominated by higher-order surface shaping rather than Gaussian power. Both surfaces depart strongly from
their K = -1 base conics at the validated 8.5 mm semi-diameter.

Fujifilm's production description identifies one glass-molded aspherical element in the pre-X100V master lens. That
manufacturer fact is consistent with the data model's single double-aspherical element, but the patent itself does not
name the commercial camera or independently prove the manufacturing correspondence.

### L37 — Negative Rear Meniscus

**nd = 1.80810, νd = 22.8. Glass: S-NPH1 (OHARA; exact 808228 coordinate match). Standalone f = -21.9604 mm.**

L37 adds a concentrated negative contribution behind the double-aspherical element. Its high index and low Abbe number
make it the master lens's most dispersive stored coordinate. In the sequential power distribution it opposes the positive
L36 and L38 elements and forms the principal negative member of the rear correction sequence.

The coordinate resolves exactly to the cataloged S-NPH1 position. That supplies a defensible Sellmeier model while
remaining a catalog assignment rather than proof of the production supplier.

### L38 — Plano-Convex Positive Rear Element

**nd = 1.88300, νd = 40.8. Glass: S-LAH58 (OHARA; exact 883408 coordinate match). Standalone f = +52.8063 mm.**

L38 is the final active glass element. Its curved object-side surface and plane image-side surface provide positive rear
power before the normalized image-space gap. It restores convergence after L37 and terminates the master prescription
without adding another curved glass-to-air surface at the rear.

The plane rear surface is followed directly by the air-equivalent image spacing. The excluded PP cover/filter plate is
not treated as a thirteenth lens element and is not included in the stated element or group counts.

## Glass Identification and Selection

The patent publishes nd and νd only. It names no glass vendors and supplies no C-, F-, or g-line index table. The
six-digit coordinates can nevertheless select exact entries already present in the project catalog. These assignments
enable Sellmeier tracing; they are optical-coordinate matches, not assertions about the production supplier.

| Catalog assignment | nd | νd | Elements | Evidentiary status |
|---|---:|---:|---|---|
| S-FSL5 (487702) | 1.48749 | 70.2 | L11 | Exact catalog-coordinate match |
| S-TIH53 (847238) | 1.84666 | 23.8 | L21 | Exact catalog-coordinate match |
| S-LAL14 (697555) | 1.69680 | 55.5 | L22 | Exact catalog-coordinate match |
| S-FTM16 (593353) | 1.59270 | 35.3 | L23, L34 | Exact catalog-coordinate match |
| S-TIH13 / E-FD13 class (741278) | 1.74077 | 27.8 | L31 | Shared cross-vendor coordinate |
| S-LAH58 (883408) | 1.88300 | 40.8 | L32, L33, L35, L38 | Exact catalog-coordinate match |
| Unmatched (1.56865 / 58.6) | 1.56865 | 58.6 | L36 | No authoritative catalog match within the audit threshold |
| S-NPH1 (808228) | 1.80810 | 22.8 | L37 | Exact catalog-coordinate match |

The converter uses ordinary dispersion contrast deliberately. L11 is a high-νd positive front element; G2 combines a
very low-νd negative L21, a much higher-νd negative L22, and a lower-νd positive L23. This pattern satisfies the patent's
Abbe-number conditions and supports ordinary longitudinal/lateral chromatic balancing. It does not establish anomalous
partial dispersion.

No element carries explicit patent-derived `nC`, `nF`, `ng`, or `dPgF` in the final data. The catalog resolver may use
the named assignments' Sellmeier curves, but the model makes no APO claim and does not attribute the production melt's
secondary-spectrum behavior to a vendor.

## Focus Mechanism

**Focus status: `NO_INTERNAL_RECONSTRUCTION`.**

The patent gives one static prescription and does not publish object-distance states, variable air gaps, focusing-group
identity, or mechanical travel. Accordingly, the data file contains no `var` entries and represents only the published
infinity state. No unit-focus, inner-focus, rear-focus, or floating-focus mechanism is invented.

Fujifilm publishes a 0.14 m minimum focusing distance with the converter attached. That value is measured from the front
of the accessory and is retained as product metadata only. It does not define a sensor-referenced object distance or
constrain how the master lens moves internally. The analysis therefore gives no close-focus spacing table, focus travel,
or computed close-focus magnification.

## Aspherical Surfaces

L36 carries aspherical surfaces 18A and 19A. The patent uses the radial sag form

$$
z(h)=\frac{c h^2}{1+\sqrt{1-K_A c^2h^2}}+\sum_{m=3}^{20}A_m h^m,
$$

where $h$ is nonnegative radial height. LensVisualizer uses the standard conic denominator
$\sqrt{1-(1+K)c^2h^2}$, so the exact conversion is $K=K_A-1$. Both patent values are $K_A=0$; both data-file values are
therefore $K=-1$. The odd powers remain rotationally symmetric because they operate on radial height rather than a signed
Cartesian coordinate.

No dimensional scale transformation is applied. The radii, spacings, and all polynomial coefficients retain the patent's
published scale.

| Coefficient | 18A | 19A |
|---|---:|---:|
| K | -1 | -1 |
| A3 | 1.3592650e-04 | -3.6381176e-04 |
| A4 | 3.7162356e-06 | 1.5137686e-03 |
| A5 | -6.5383916e-05 | -1.4708597e-03 |
| A6 | 1.2224508e-05 | 6.8718645e-04 |
| A7 | -6.7024023e-07 | -1.7619011e-04 |
| A8 | -7.0851318e-08 | 2.2970993e-05 |
| A9 | -1.4834043e-09 | -1.2455617e-06 |
| A10 | 4.6943650e-10 | 1.7608222e-07 |
| A11 | 7.0944713e-11 | -6.3140576e-08 |
| A12 | 4.0056802e-12 | 5.2054679e-09 |
| A13 | -2.5358331e-13 | 6.6772864e-10 |
| A14 | -6.2786396e-14 | -9.4611209e-11 |
| A15 | -7.2519329e-15 | -3.2254693e-12 |
| A16 | -6.2665147e-16 | 5.9858623e-13 |
| A17 | -1.2454499e-16 | 2.3337864e-14 |
| A18 | 7.5045399e-18 | -1.1788037e-15 |
| A19 | 9.4871080e-18 | -3.5021994e-16 |
| A20 | -7.9734604e-19 | 1.8725398e-17 |

At the validated 8.5 mm semi-diameter, surface 18A has a full sag of -0.3744655 mm and a polynomial departure of
-1.1279330 mm from its base conic. Surface 19A has a full sag of -0.2692667 mm and a departure of -0.6741012 mm. These
values are quoted only at the data file's verified rim; they are not extrapolated to the 67 mm filter-thread radius.

The rendered patent table, rather than degraded OCR strings, establishes the decimal points and signs above. In
particular, the large even and odd contributions on 19A are intentionally retained together; discarding the odd orders
would materially change the surface.

## Conditional Expressions

Example 1 satisfies every general and preferred condition used by the patent. The rendered patent page establishes the
strict inequalities `35 < νd2n` and `0.28 < DD/DSUM`; OCR forms that resemble subtraction are not the source equations.

| Patent condition | Example 1 value | Result |
|---|---:|---|
| 55 < νd1p | 70.2 | Pass |
| 60 < νd1p | 70.2 | Pass |
| 3 < νd2n2 − νd2n1 | 31.7 | Pass |
| 9 < νd2n2 − νd2n1 | 31.7 | Pass |
| νd2p < 45 | 35.3 | Pass |
| νd2p < 40 | 35.3 | Pass |
| 30 < νd2n | 55.5 | Pass |
| 35 < νd2n | 55.5 | Pass |
| 0.20 < DD/DSUM | 0.3730265 | Pass |
| 0.28 < DD/DSUM | 0.3730265 | Pass |

The conditions describe ordinary glass dispersion and converter spacing. They do not identify vendor glasses or prove
anomalous partial dispersion.

## Verification Summary

All quantitative results in this section were recomputed from the final TypeScript arrays rather than copied from the
patent's rounded product-like specifications.

| Quantity | Verified result |
|---|---:|
| Master focal length | 23.7167374943 mm |
| Mounted focal length | 32.8180507068 mm |
| Focal-length magnification | 1.3837506409× |
| Modeled maximum aperture | f/2.05 |
| Entrance-pupil semi-diameter | 8.0044026114 mm |
| Physical stop semi-diameter | 5.1915021168 mm |
| Active vertex track | 76.2400000000 mm |
| Air-equivalent back focal distance | 5.6208142155 mm |
| Paraxial image height at 22.2° | 13.3927984152 mm |
| Petzval sum | +0.004645306999 mm⁻¹ |
| Petzval radius, -1/P | -215.2710252 mm |

The exact arbitrary-order meridional trace sends the defined on-axis and off-axis ray families, including both 22.2°
chief rays, to the image plane. The inferred geometry has a minimum edge thickness of 0.3128 mm, a maximum actual rim
angle of 54.49°, and a positive minimum cross-gap margin of 0.0185 mm under the current 0.90 gap criterion. These are
model-validation results, not manufacturer mechanical specifications.

The final mounted EFL differs from the rounded 33 mm marketing value by about 0.18 mm. The design f-number is 2.05 rather
than exactly 2.0. Both differences are retained rather than removed by scaling.

## Sources

1. Takashi Suzuki, *Teleconverter Lens and Imaging Apparatus*, US 2015/0226942 A1, Example 1, Tables 1, 2, 7, 8, and 9;
   especially ¶¶0035–0065 and Figures 1 and 4.
2. FUJIFILM, [TCL-X100 II Tele Conversion Lens](https://www.fujifilm-x.com/global/products/accessories/tcl-x100ii/):
   approximately 1.4× conversion, 50 mm-equivalent field, and 14 cm close-focus description.
3. FUJIFILM Digital Camera FAQ,
   [X100-series conversion lenses](https://digitalcamera-support-ja.fujifilm.com/digitalcamerapcdetail?aid=000003129):
   approximately 33 mm actual focal length, f/2 retention, 14 cm front-reference minimum distance, and 67 mm filter size.
4. FUJIFILM, [X100F specifications](https://www.fujifilm-x.com/global/products/cameras/x100f/): pre-X100V master lens
   constitution and APS-C format.
5. FUJIFILM, [X100 firmware history](https://www.fujifilm-x.com/en-us/support/download/firmware/cameras/x100/):
   Ver. 2.10 support for the TCL-X100.
