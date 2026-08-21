# PANASONIC LUMIX S PRO 16-35mm f/4

## Patent Reference and Design Identification

**Patent:** JP 2021-076829 A

**Application Number:** JP 2020-164074

**Priority:** 2019-11-01

**Filed:** 2020-09-29

**Published:** 2021-05-20

**Inventor:** Takahiro Kitaguchi

**Applicant:** Panasonic Intellectual Property Management Co., Ltd.

**Title:** Imaging optical system, imaging apparatus, and camera system

**Embodiment analyzed:** Embodiment 1 / Numerical Example 1

The prescription represents Numerical Example 1 of JP 2021-076829 A. The publication does not name the commercial
S-R1635 lens, so the association with the PANASONIC LUMIX S PRO 16-35mm f/4 is a production-correlation inference rather
than a manufacturer-confirmed identification. The data file treats that user-selected correlation as fixed.

Several independent features converge on the production lens:

1. The patent gives design focal lengths of 16.5534, 24.1174, and 33.8782 mm, with modeled maximum f-numbers of
   4.12005, 4.10925, and 4.12028. These values closely bracket the marketed 16-35mm f/4 specification without optical
   scaling.
2. The prescription contains 12 physical lens elements in nine air-separated groups. Panasonic specifies 12 elements
   in nine groups for the production lens.
3. Five aspherical surfaces are distributed across three physical lenses: the hybrid L2/P lens, L5, and L8. This agrees
   with Panasonic's stated count of three aspherical lenses. L7 has the 497816 low-dispersion class associated with the
   single ED element in the marketed specification. L6 has `nd = 1.90698` and is the natural candidate for Panasonic's
   single UHR element. Both product-element assignments remain correlations because the patent does not use Panasonic's
   production labels.
4. The patent priority date precedes Panasonic's 2019-11-06 product announcement by five days.
5. The patent centers its design objective on limiting focus-induced field-angle change while correcting aberrations,
   and it uses a translating G3 focus group (¶0004-0005, ¶0030). Panasonic separately describes suppression of focus
   breathing for the production lens.

The data preserves the patent at its native scale. No radius, thickness, semi-diameter, image-plane coordinate, or
aspherical coefficient was scaled, and no coefficient transformation was applied. Marketed values remain separate from
the exact design values.

## Optical Architecture

The optical system is a four-unit negative-positive-negative-negative wide-angle zoom. In patent terminology, G1 is
negative, G2 is positive, G3 is negative, and G4 is negative (¶0018-0022). The four moving units contain 12 physical
lens elements. Because the thin resin layer P is modeled as a separate optical material, the data file has 13 element
records while retaining the patent's physical `elementCount` of 12. Counting air-separated physical assemblies rather
than moving units gives nine groups, matching the production specification.

G1 contains L1, the hybrid L2/P lens, L3, and L4. Its computed focal length is -26.857304 mm. The first three physical
lenses are negative menisci; L4 is positive and partially offsets the front section's negative power. This arrangement
creates the front-diverging action needed for the wide field while keeping the rear groups at a mirrorless-compatible
back-focus distance.

G2 contains L5, the aperture stop, the cemented L6-L7 pair, and L8. Its computed focal length is +29.719955 mm. L5 is a
strong positive double-asphere before the stop. Behind the stop, the negative L6 and positive low-dispersion L7 form a
cemented negative pair, followed by the separated positive double-asphere L8.

G3 is the cemented L9-L10 focus doublet. Its computed focal length is -63.328554 mm. It is the only unit translated for
focus in the published mechanism. G4 is the cemented L11-L12 rear pair. Its computed focal length is -813.075251 mm, so
it is a very weak negative, nearly afocal relay rather than a strong final power group.

During zooming from wide to tele, G2, G3, and G4 move toward the object. G1 first moves imageward and then reverses
between the middle and tele positions, as shown in Figure 1 and described in ¶0029. The G1-G2 gap D9 contracts from
27.6237 to 1.9767 mm. The infinity-focus G2-G3 gap D17 contracts from 1.0000 to 0.1511 mm, while the G3-G4 gap D20
increases from 8.0528 to 10.1353 mm. The back focal distance grows from 17.50941 to 37.66432 mm as G4 moves away from
the fixed image plane.

Independent paraxial tracing gives back focal distances greater than the corresponding effective focal lengths at all
three zoom positions. The model is therefore retrofocus under the project's strict `BFD > EFL` criterion. It is not a
telephoto configuration under the separate `total track / EFL < 1` criterion.

The aperture stop is explicitly published between L5 and L6 as surface 12 (¶0020, Table 1). Its axial placement is
therefore a source fact. The patent does not publish a physical stop diameter. The data uses a derived wide-state open
semi-diameter of 5.46343 mm and zoom-dependent pupil geometry consistent with the exact modeled f-numbers.

## Element-by-Element Analysis

### L1 — Negative Meniscus

**nd = 1.69144, νd = 53.6. Glass: Unmatched (691536; lanthanum-crown class). f = -40.3670 mm.**

L1 is a negative meniscus convex toward the object (¶0024). It supplies the first substantial negative power in G1 and
begins the progressive expansion of the off-axis bundle. Its relatively high index allows that power to be obtained
without assigning all of the front-group bending to a single extreme surface.

The glass name is intentionally unresolved. Several public lanthanum-crown families are numerically nearby, but none
supports a unique vendor identity at the stored `nd` and `νd` pair.

### L2 / P — Hybrid Negative Meniscus with Bonded Resin Asphere

**L2 substrate: nd = 1.71181, νd = 52.5. Glass: Unmatched (712525; lanthanum-crown class). Standalone f = -58.1978 mm.**

**P resin layer: nd = 1.51122, νd = 59.6. Material: Unmatched optical resin layer. Standalone f = -98.4319 mm.**

L2 is a negative meniscus convex toward the object. A 0.07000 mm resin layer P is bonded to its image-side surface, and
the outer resin surface 5A carries the front group's only asphere (¶0024). The physical production count treats this as
one hybrid aspherical lens, while the optical model must represent the glass substrate and resin as separate media.

The standalone focal lengths describe each layer hypothetically placed in air; they are not additive. In the actual
cemented stack, the L2 substrate and P layer share surface 4 and act as one hybrid component. The resin should not be
assigned a glass-catalog identity merely because a catalog glass happens to have a similar d-line index.

The hybrid construction places non-spherical correction on a front-group negative lens without requiring the entire
substrate to carry the molded or polished aspherical figure. The patent explicitly identifies P as a resin layer, but it
does not specify the production process used for the commercial lens.

### L3 — Weak Negative Meniscus

**nd = 1.48749, νd = 70.4. Glass: 487704 fluor-crown class, vendor-indeterminate. f = -223.4817 mm.**

L3 is a weak negative meniscus convex toward the image (¶0024). It completes the patent's sequence of three negative
front lenses while contributing much less standalone power than L1 or the L2/P hybrid. Its high Abbe number reduces the
chromatic burden associated with adding another negative element near the front of an ultrawide system.

The 487704 pair is shared by several vendors and does not identify a unique glass maker. No anomalous-partial-dispersion
property is inferred from `nd` and `νd` alone.

### L4 — Biconvex Positive

**nd = 1.72960, νd = 26.2. Glass: Unmatched (730262; dense-flint class). f = +66.2587 mm.**

L4 is the positive rear element of G1 (¶0024). It moderates the net negative power of the three preceding menisci and
helps transfer the expanded bundle into the positive G2 unit. Its high index and low Abbe number distinguish its role
from the lower-dispersion negative L3 immediately ahead of it.

The numerical pair does not match a public catalog entry closely enough to support a named vendor glass. The dense-flint
class description is therefore retained without a Sellmeier-based spectral claim.

### L5 — Biconvex Positive, Two Aspherical Surfaces

**nd = 1.57469, νd = 56.0. Glass: HOYA BAC6 legacy catalog-equivalent curve, patent code 575560; production supplier unspecified. f = +28.3634 mm.**

L5 forms the front subunit G2F and lies immediately before the stop (¶0025). It is the strongest positive element in the
positive zoom group, and both surfaces 10A and 11A are aspherical. Its location near the aperture gives those surfaces
strong leverage over axial and pupil-dependent aberrations across the zoom range.

The published prescription does not support a production-supplier identity. HOYA's obsolete BAC6 coefficient row
evaluates to `1.574441 / 56.357`, so the data uses it as a qualified barium-crown spectral proxy without replacing the
stored patent coordinates.

### L6-L7 — Cemented Negative/Positive Pair behind the Stop

**L6: nd = 1.90698, νd = 30.3. Glass: Unmatched (907303; ultra-high-index flint class). Standalone f = -14.0335 mm.**

**L7: nd = 1.49700, νd = 81.6. Glass: 497816 ED fluorophosphate-crown class, vendor-indeterminate. Standalone f = +23.4039 mm.**

L6 is a strong negative meniscus and L7 is a positive meniscus cemented to it at surface 14 (¶0025). Their independently
computed cemented net focal length is -33.317531 mm. This cemented value, rather than either standalone focal length,
describes the pair's net paraxial power inside G2.

The pair combines a very high-index, relatively dispersive negative element with a low-index, high-Abbe positive element.
That contrast provides a direct means of balancing power and axial color behind the stop. L7 satisfies patent condition
(2), which requires the positive element in G2R to have `νd > 65`.

The 497816 pair is a cross-vendor ED fluorophosphate-crown class. It is consistent with the marketed count of one ED
lens, but the patent does not identify the commercial vendor or publish line-index data. The model therefore does not
claim apochromatic correction or anomalous partial dispersion.

### L8 — Biconvex Positive, Two Aspherical Surfaces

**nd = 1.58133, νd = 46.5. Glass: Unmatched (581465; barium-flint class; nearest public candidate J-BAF3, Δnd = +0.00134, Δνd = -0.02). f = +27.5046 mm.**

L8 is a separated positive element after the L6-L7 cemented pair, and both surfaces 16A and 17A are aspherical (¶0025).
It completes the rear subunit identified in the patent as G2R.

The distinction between standalone, cemented, and subassembly power is material here. The L6-L7 cemented pair is
negative at -33.317531 mm, but the complete L6-L7-plus-air-plus-L8 subassembly computes to +63.643352 mm. Patent ¶0025
calls G2R negative; that statement conflicts with the published prescription. The numerical surfaces are internally
consistent with the rest of the patent and are preserved without alteration. The complete subassembly is described as
positive in this analysis, while the source contradiction remains explicit.

J-BAF3 is the nearest public catalog candidate and falls within the project's ordinary numerical-match tolerance, but
it has a different six-digit code and the patent names no vendor. L8 therefore remains `Unmatched`; the candidate and
residuals are recorded without using its Sellmeier data as though the identity were certain.

### L9-L10 — Cemented Negative Focus Doublet G3

**L9: nd = 1.84666, νd = 23.8. Glass: 847238 dense-flint class, vendor-indeterminate. Standalone f = +28.1291 mm.**

**L10: nd = 1.81040, νd = 33.1. Glass: Unmatched (810331; lanthanum-flint class; nearest public candidate J-LASFH6, Δnd = -0.00430, Δνd = +0.24). Standalone f = -18.7375 mm.**

L9 is biconvex and L10 is biconcave; they are cemented at surface 19 (¶0026). Their net focal length is -63.328554 mm,
so the pair functions as a negative focus group even though its front member is strongly positive.

L9 satisfies condition (4), which places the positive G3 element between `νd = 14` and `νd = 35`. The low Abbe number
of the positive member is a deliberate part of the patent's balancing strategy rather than an ED designation.

G3 translates toward the image for closer focus. Its cemented construction keeps the internal interface fixed while the
two adjacent air gaps change by equal and opposite amounts in the reconstructed focus model.

### L11-L12 — Weak Cemented Rear Pair G4

**L11: nd = 1.48749, νd = 70.4. Glass: 487704 fluor-crown class, vendor-indeterminate. Standalone f = +43.0795 mm.**

**L12: nd = 1.91082, νd = 35.2. Glass: K-LaSFn23 SUMITA catalog equivalent; patent nd retained and production supplier unspecified. Standalone f = -38.5099 mm.**

L11 is biconvex and L12 is biconcave; they are cemented at surface 22 (¶0027). Their individual powers are substantial
and opposite, but the cemented pair is nearly afocal, with a net focal length of -813.075251 mm. This weak negative net
power explains why G4 can move significantly during zooming without behaving as a dominant focal-length-setting group.

L12 satisfies condition (3), requiring the final negative lens to have `nd > 1.8`. SUMITA's first-party K-LaSFn23 row
is 1.91100/35.2, only +0.00018 in index from the patent value. The data therefore uses its published dispersion curve as
a catalog equivalent while retaining the exact patent index and leaving the production supplier unspecified.

L11 shares the 487704 high-Abbe class used by L3. As elsewhere in the design, the class label does not establish a unique
vendor or an anomalous-dispersion property.

## Glass Identification and Selection

The patent publishes only d-line refractive indices and Abbe numbers. It does not give `nC`, `nF`, `ng`, `dPgF`,
Sellmeier coefficients, or manufacturer glass names. The table therefore separates exact stored optical values from
catalog-class interpretation.

| Material | nd | νd | Used in | Identification status |
| --- | ---: | ---: | --- | --- |
| 691536 lanthanum-crown class | 1.69144 | 53.6 | L1 | Unmatched; no unique vendor identity |
| 712525 lanthanum-crown class | 1.71181 | 52.5 | L2 | Unmatched; no unique vendor identity |
| Optical resin layer P | 1.51122 | 59.6 | P | Non-glass material; catalog glass identities rejected |
| 487704 fluor-crown class | 1.48749 | 70.4 | L3, L11 | Cross-vendor class |
| 730262 dense-flint class | 1.72960 | 26.2 | L4 | Unmatched |
| BAC6 catalog-equivalent curve; patent code 575560 | 1.57469 | 56.0 | L5 | Coefficient-backed HOYA legacy proxy; production supplier unspecified |
| 907303 ultra-high-index flint class | 1.90698 | 30.3 | L6 | Unmatched |
| 497816 ED fluorophosphate-crown class | 1.49700 | 81.6 | L7 | Cross-vendor class |
| 581465 barium-flint class | 1.58133 | 46.5 | L8 | Unmatched; J-BAF3 nearest candidate (Δnd +0.00134, Δνd -0.02) |
| 847238 dense-flint class | 1.84666 | 23.8 | L9 | Cross-vendor class |
| 810331 lanthanum-flint class | 1.81040 | 33.1 | L10 | Unmatched; J-LASFH6 nearest candidate (Δnd -0.00430, Δνd +0.24) |
| K-LaSFn23 catalog equivalent | 1.91082 | 35.2 | L12 | Coefficient-backed SUMITA equivalent; patent index retained; production supplier unspecified |

The chromatic strategy is visible in the deliberate alternation of high- and low-Abbe materials, especially the
cemented L6-L7 pair with `νd = 30.3` and `81.6`. The two 487704 elements provide high-Abbe negative-front and positive-rear
members, while several high-index flint-class elements carry strong power in compact shapes. These relationships support
achromatic balancing as a design inference, but the available data does not justify an APO designation or a claim about
secondary-spectrum correction.

All element records explicitly set `apd: false`. BAC6 and K-LaSFn23 supply coefficient-backed tracing curves, but
neither is used to back-fill patent line indices or partial-dispersion claims. Other catalog candidates remain rejected
where the available coordinates do not support a defensible proxy.

## Focus Mechanism

The patent specifies internal focusing by translation of G3 alone toward the image as focus moves from infinity to a
near object (¶0030). It does not publish close-focus spacings, focus travel, or magnification tables. The data therefore
uses the disclosed `CONSTRAINED_RECONSTRUCTION` rather than presenting inferred rows as patent facts.

The reconstruction normalizes Panasonic's 0.25 m minimum-focus specification to the sensor plane. The three published
zoom anchors are retained, and 30 derived control points are inserted along the same piecewise-linear infinity zoom path.
At all 33 control points, G3 moves imageward: D17 increases by the focus travel and D20 decreases by the same
amount. Their sum remains constant, G4 and the image plane remain fixed, and the complete object-to-image matrix is
solved to the finite-conjugate imaging condition.

| Zoom state | D17 infinity | D17 close | D20 infinity | D20 close | G3 shift | Computed magnification |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| 16.5534 mm | 1.000000 | 2.747044997 | 8.052800 | 6.305755003 | 1.747044997 mm | 0.111393× |
| 24.1174 mm | 0.929100 | 3.449585452 | 8.682600 | 6.162114548 | 2.520485452 mm | 0.157215× |
| 33.8782 mm | 0.151100 | 3.605873403 | 10.135300 | 6.680526597 | 3.454773403 mm | 0.228626× |

The telephoto-end result agrees with Panasonic's rounded approximately 0.23× maximum magnification. That agreement is a
validation of the constrained model, not evidence that the manufacturer used these exact reconstructed gap values. The
30 additional control points are modeling values, not patent rows: each preserves the interpolated infinity zoom path,
conserves D17 + D20, and is independently solved at 250 mm. A 33-knot reconstruction reduces the maximum sampled
between-knot object-distance error from 39.2 mm for the original three-row interpolation to 0.246 mm. The patent's
stated purpose is to reduce the change in field angle during focusing; no independent quantitative breathing percentage
is claimed here.

The patent and prescription contain no stabilization group. Mechanical drive details are not encoded in the optical
data and are not inferred from the focus reconstruction.

## Aspherical Surfaces

The design has five aspherical surfaces on three physical lenses:

- 5A: the outer surface of bonded resin layer P on the hybrid L2 lens;
- 10A and 11A: both surfaces of L5;
- 16A and 17A: both surfaces of L8.

The patent uses the standard conic form (¶0118-0119):

$$
Z(h)=\frac{h^2/R}{1+\sqrt{1-(1+K)(h/R)^2}}+\sum A_n h^n.
$$

Its tabulated `κ` is therefore the standard conic constant `K`; no `K = κ - 1` conversion is applied. Lengths and radial
height are in millimeters, so `A_n` has units of `mm^(1-n)`. No scaling was applied to the prescription, and the
coefficients below are copied without transformation.

| Surface | K | A4 | A6 | A8 | A10 | A12 | A14 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| 5A | -8.60744E-01 | -1.09058E-05 | -3.39948E-08 | -7.35568E-11 | 1.89948E-13 | -8.19926E-16 | 0 |
| 10A | 0 | -1.01233E-05 | -8.60053E-08 | 2.86697E-09 | -2.94258E-11 | 1.68258E-13 | 0 |
| 11A | 0 | 1.58943E-05 | 2.92108E-08 | -5.38824E-10 | 3.70371E-11 | -4.51108E-13 | 2.42691E-15 |
| 16A | 0 | -2.35150E-05 | 1.19948E-07 | -3.24297E-09 | 1.40767E-11 | 2.15242E-13 | -2.59066E-15 |
| 17A | 0 | -1.50992E-05 | -8.96894E-08 | -2.74366E-09 | 2.94693E-11 | -3.11976E-13 | 0 |

The stored semi-diameters are inferred rather than patent-published, but they pass the current geometry and ray checks.
At those verified radii, the full asphere departure from a spherical surface with the same vertex radius is:

| Surface | Stored semi-diameter | Departure from same-R sphere | Polynomial departure from conic base |
| --- | ---: | ---: | ---: |
| 5A | 14.2 mm | -5.431363 mm | -0.835512 mm |
| 10A | 10.9 mm | +0.060761 mm | +0.060761 mm |
| 11A | 10.2 mm | +0.341401 mm | +0.341401 mm |
| 16A | 10.3 mm | -0.428047 mm | -0.428047 mm |
| 17A | 10.3 mm | -0.673356 mm | -0.673356 mm |

Surface 5A combines a near-paraboloidal negative conic with negative fourth- and sixth-order terms on the front-group
hybrid. L5 uses opposite-signed fourth-order coefficients on its two surfaces, distributing correction across the
strong positive pre-stop element. L8 uses negative fourth-order coefficients on both surfaces, with higher orders
modulating the peripheral departure. These descriptions concern the coefficient structure; the patent does not assign
a manufacturing process to L5 or L8.

The patent publishes no clear-aperture heights. Consequently, the data's semi-diameters are inferred model quantities,
and no asphere departure is presented as a departure at a published aperture. The inferred apertures were checked
against edge thickness, actual aspherical rim slope, conic limits, cross-gap intrusion, off-axis containment, and render
trim at all defined zoom/focus endpoints.

## Chromatic Correction Strategy

The patent's glass conditions concentrate chromatic control in three places. L7 supplies a high-Abbe positive member
inside the post-stop cemented pair. L9 deliberately uses a low-Abbe positive material in the translating G3 pair. L12
uses a very high index in the final negative element. The accompanying patent text links these conditions to axial and
lateral color as well as spherical aberration and field curvature (¶0081-0096).

The L6-L7 cemented pair provides the clearest achromatizing contrast. Its negative member combines high index with
`νd = 30.3`, while its positive partner has `νd = 81.6`. The remaining system uses high-Abbe 487704 elements in G1 and
G4, plus dense-flint and lanthanum-flint classes where compact power is required.

This is an interpretation of the `nd`/`νd` distribution and the patent conditions. Without line indices, `dPgF`, or a
unique catalog Sellmeier resolution for the key materials, the model cannot evaluate anomalous partial dispersion or
support an apochromatic-performance claim.

## Conditional Expressions

The principal inequalities in JP 2021-076829 A are reproduced below using the exact values of Numerical Example 1.

| Condition | Requirement | Example 1 value | Result |
| --- | --- | ---: | --- |
| (1) | `0.05 < R1_L1c / R2_L1c < 0.8` | 0.711211818 | Pass |
| (2) | `νd_LG2Rp > 65` | 81.6 | Pass |
| (3) | `nd_LG4Rn > 1.8` | 1.91082 | Pass |
| (4) | `14 < νd_LG3p < 35` | 23.8 | Pass |

Condition (1) applies to L3, the third negative lens of G1. The optional lower refinements `> 0.2` and `> 0.4` pass, but
the optional upper refinements `< 0.6` and `< 0.5` do not. Those refinements are presented as preferred alternatives,
not mandatory requirements, so their failure is not a contradiction.

L7 also satisfies the preferred condition-(2) interval `80 < νd < 85`. L12 satisfies the preferred condition-(3)
threshold `nd > 1.91`. L9 satisfies the preferred condition-(4) interval `17 < νd < 25`.

The G2R power statement in ¶0025 is separate from these inequalities. Its negative sign is contradicted by the complete
published numerical subassembly, which computes positive. No radius, index, or spacing has been changed to reconcile
the prose.

## Verification Summary

Sequential height/reduced-angle tracing and an independent ABCD assembly reproduce the patent's three infinity-focus
states from the final data arrays:

| State | Computed EFL | Patent EFL | Computed BFD | Patent BFD | Computed track | Patent track |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Wide | 16.553306959 mm | 16.5534 mm | 17.509254696 mm | 17.50941 mm | 122.35591 mm | 122.3559 mm |
| Middle | 24.117252146 mm | 24.1174 mm | 25.976951093 mm | 25.97712 mm | 115.30422 mm | 115.3042 mm |
| Tele | 33.878024297 mm | 33.8782 mm | 37.664131860 mm | 37.66432 mm | 118.09742 mm | 118.0974 mm |

The three system determinants equal unity within 1.3E-15. The calculated entrance and exit pupils and principal-plane
positions also reproduce the patent at source-precision tolerances. Surface-by-surface Petzval computation using
`φ / (n n′)` gives a total of +0.002733711400 mm^-1 and a signed Petzval radius of -365.803062 mm under the project's
`-1 / sum` convention.

The patent publishes neither semi-diameters nor stop diameters. The model's inferred apertures pass all six
published-anchor focus/zoom states and sampled states across all 32 interpolation intervals. The minimum element edge thickness is
0.256418 mm, the maximum actual rim angle is 63.157°, and the minimum clearance to the 90% cross-gap intrusion limit is
0.023337 mm. No conic-limit failure or geometry-implied render trim was found. The Stage 4 verifier executes 36 anchor
rays and 108 representative interval-sampling rays using on-axis marginal rays, complete 0.6-field bundles, and
full-field chief rays; none exceeds the stored semi-diameters.

No sensor cover glass, filter, inactive dummy plane, flare-cutter plane, or mechanical part appears in Numerical Example
1. None was therefore omitted from an otherwise active optical sequence, and no air-equivalent rear-spacing correction
was required. Surface 9, despite its very large radius, is the active rear surface of L4 rather than a dummy plane.


## Sources

1. JP 2021-076829 A, *Imaging optical system, imaging apparatus, and camera system*, especially ¶0017-0030,
   ¶0074-0096, ¶0117-0122, Numerical Example 1, Tables 1-3, and Figures 1-2.
2. Panasonic, official LUMIX S PRO 16-35mm F4 (S-R1635) specifications:
   <https://www.panasonic.com/au/consumer/lumix-cameras-video-cameras/lumix-camera-lenses/lumix-s-lenses/s-r1635.specs.html>
3. Panasonic North America, product announcement dated 2019-11-06:
   <https://na.panasonic.com/news/panasonic-launches-two-new-l-mount-interchangeable-lenses-for-the-lumix-s-series-full-frame-digital-single-lens-mirrorless-camera>
4. Panasonic, S-R1635 operating instructions:
   <https://help.na.panasonic.com/wp-content/uploads/2023/02/SR1635_DVQX1971ZB_ENG_FRE_ESP_CHI_GER_ITA_RUS_TAI.pdf>
5. OHARA optical-glass catalog resources: <https://www.ohara-inc.co.jp/en/product/01002/>
6. HIKARI optical-glass catalog resources: <https://www.hikari-g.co.jp/optical_glass/>
7. SCHOTT optical-glass datasheets: <https://www.schott-pharma.com/en/products/optical-glass-p1000267/downloads>
8. SUMITA Optical Glass Data Book: <https://www.sumita-opt.co.jp/en/download/>
9. HOYA six-vendor optical-glass cross-reference, including CDGM:
   <https://www.hoyaoptics.eu/glass-cross-reference-index>
