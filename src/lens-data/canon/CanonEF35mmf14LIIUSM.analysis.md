# CANON EF 35mm f/1.4 L II USM

## Patent Reference and Design Identification

**Patent:** US 2015/0098138 A1\
**Application Number:** 14/492,190\
**Priority:** October 3, 2013 (JP 2013-208127)\
**Filed:** September 22, 2014\
**Published:** April 9, 2015\
**Inventor:** Takashi Shirasuna\
**Applicant:** Canon Kabushiki Kaisha\
**Title:** *Optical System and Image Pickup Apparatus Including the Same*\
**Embodiment analyzed:** Example 2 / Numerical Example 2

The prescription is Numerical Example 2 of US 2015/0098138 A1. The patent defines a fixed-focal-length optical system
with a positive first unit L1 and a positive second unit L2; L2 contains a front sub-unit L2a, the aperture stop, and a
positive rear sub-unit L2b. During focusing from infinity toward shorter object distances, L2 moves toward the object
(¶¶0027, 0030–0034, 0058–0059). The data file preserves the numerical example at its published scale (`s = 1`), with no
radius-sign conversion and no correction to a patent optical value.

This LensVisualizer entry treats Numerical Example 2 as the fixed production correlation for the CANON EF 35mm f/1.4 L
II USM. Canon does not identify this patent example as the production prescription, so the correlation is not presented
as manufacturer confirmation. The convergent evidence is nevertheless strong:

1. The numerical example contains 14 refractive elements in 11 air-separated groups; Canon publishes 14 elements in
   11 groups for the production lens.
2. Independent first-order tracing of the data file gives an effective focal length of **35.4217858624 mm**, while the
   product is marketed as a 35 mm lens.
3. The patent design is **F/1.45**; the product is marketed as f/1.4.
4. The patent image height of 21.64 mm and computed EFL give a **62.8434736865°** full rectilinear field, consistent
   with Canon's rounded 63° diagonal angle of view.
5. The numerical example places aspheres on the first and final physical elements. Canon's production block diagram
   likewise identifies two aspherical lens elements.
6. The patent was published in April 2015; Canon lists the production lens as marketed in October 2015.

There is one important material-disclosure mismatch. Canon's production literature identifies a BR optical element,
one UD lens, and two aspherical lenses. The selected numerical example supplies ordinary sequential `nd`/`νd` media
but does not separately identify a thin BR organic element or publish BR spectral constants. The LensVisualizer model
therefore represents the selected patent prescription rather than synthesizing Canon's later public BR material stack.
The production BR construction is product information, not a modification to the patent model.

No sensor cover glass, filter plate, inactive dummy plane, or mechanical component is published in Numerical Example 2,
and none is inserted into the prescription. The patent defines back focus directly from the last lens surface to the
paraxial image plane. The prescription required no scale transformation, so the asphere coefficients are stored exactly
at the patent scale; no `A_p / s^(p-1)` transformation is applied.

## Optical Architecture

The selected design is a large-aperture wide-angle **retrofocus** lens. That classification is supported by the actual
modeled reference planes: the computed back focal distance is **38.9982669961 mm**, longer than the computed EFL of
**35.4217858624 mm**. The patent itself describes the system as retrofocus and concentrates negative refractive power
toward the object side while retaining positive net power in both L1 and L2 (¶¶0030, 0036).

The optical system contains 14 elements in 11 groups. L1 spans surfaces 1–13 and contains seven elements. L2 spans
surfaces 14–26 and also contains seven elements; within it, L2a precedes the aperture stop and L2b follows it. Independent
paraxial calculation from the modeled prescription gives:

| Unit | Surfaces | Computed focal length |
|---|---|---:|
| L1 | 1–13 | +147.6794221101 mm |
| L2 | 14–26 | +55.5161024580 mm |
| L2a | 14–18 | +409.0663712735 mm |
| L2b | 20–26 | +49.0858071830 mm |

These are complete-unit paraxial focal lengths derived from each unit's full matrix with air on both sides. They are
distinct from the standalone focal lengths of individual elements and from the net powers of cemented pairs. L2a is
only weakly positive as a unit, while L2b carries much stronger positive net power.

The patent's principal architectural argument concerns aberration control around the aperture stop. Strong negative
refracting surfaces are placed before and after the stop, while positive lenses are placed where the off-axis beam width
is large in the rear part of L1. The patent states that this distribution is intended to control spherical aberration,
coma, and particularly sagittal coma flare at a large aperture ratio and wide field (¶¶0037–0043). In Numerical Example
2, the rear positive lenses of L1 and the strongly curved negative surfaces around the stop implement that stated
strategy.

The physical stop diameter is not published. The data model uses a stop semi-diameter of **13.2881528655 mm**, inferred
from the patent F/1.45 and the entrance-pupil magnification of the final prescription. This produces a computed entrance-
pupil semi-diameter of **12.2144089181 mm** and exactly reproduces F/1.45 in the paraxial model. It is a modeling
inference, not a patent dimension.

Likewise, the patent publishes no clear apertures. Surface semi-diameters in the data file are inferred modeling
apertures constrained by marginal and off-axis ray envelopes, Fig. 3 proportions, edge thickness, actual rim slope,
shared-gap intrusion, and cemented-interface containment. They are not source dimensions. Independent geometry checks
give positive edge thickness throughout and no geometry failure at either modeled focus state.

## Element-by-Element Analysis

### E1 — Negative Meniscus, rear asphere

**nd = 1.58313, νd = 59.4. Glass: 583594 BAL42 class; OHARA S-BAL42 spectral proxy, patent vendor unresolved. Standalone f = -88.6325 mm.**

E1 is the object-side negative meniscus specified by the patent as the first component of L1. Its convex object-side
face and negative standalone power establish the initial retrofocus divergence. The rear face, surface 2A, is
aspherical. The patent specifically requires the negative element closest to the object as part of the power
distribution that secures a long back focus while maintaining a wide field (¶¶0030, 0036, 0058).

The standalone focal length describes E1 isolated in air. Its actual contribution inside L1 depends on the following
air gap and the other six L1 elements.

### E2 — Biconcave Negative

**nd = 1.48749, νd = 70.2. Glass: 487702 FSL5/FK5 class; OHARA S-FSL5 spectral proxy, patent vendor unresolved. Standalone f = -70.4267 mm.**

E2 is the second negative component of L1. Together with E1 and E4 it distributes the front negative power rather than
placing the entire retrofocus burden on one surface. This agrees with the patent's stated preference for three or more
negative lenses in L1 so that the negative power is shared and aberration growth can be moderated (¶¶0044–0045).

### E3 — Biconvex Positive

**nd = 1.91082, νd = 35.3. Glass: 911353 high-index low-dispersion class; CDGM H-ZLaF4LA spectral proxy, patent vendor unresolved. Standalone f = +53.9774 mm.**

E3 is the first positive lens in L1. It begins the re-convergence of the strongly diverged front-group beam while the
unit as a whole remains arranged in retrofocus form. Its high refractive index allows substantial positive standalone
power with the published curvatures. The glass identity is not source-proven; only the patent `nd`/`νd` pair is a source
fact.

### E4 — Biconcave Negative

**nd = 1.53172, νd = 48.8. Glass: 532488 TIL6/LLF6/QF6A class; OHARA S-TIL6 spectral proxy, patent vendor unresolved. Standalone f = -57.9340 mm.**

E4 is the third negative lens in L1. It completes the patent's front-heavy distribution of negative power before the
rear positive portion of L1. Its position immediately ahead of the final two positive groups in L1 places it at the
transition between the strongly retrofocus front section and the rear converging section.

### D1 — E5 + E6 cemented pair

**E5: nd = 1.49700, νd = 81.5. Glass: 497816 FPL51/FCD1 class; OHARA S-FPL51 spectral proxy. Standalone f = +87.9674 mm.**\
**E6: nd = 1.80518, νd = 25.4. Glass: 805254 TIH6/SF6 class; OHARA S-TIH6 spectral proxy. Standalone f = -107.0205 mm.**

E5 and E6 form the first cemented pair. The patent describes this portion of Example 2 as a cemented positive lens made
from a positive element and a negative element (¶0058). E5 is the second positive lens counted from the image side
within L1, so its object-side surface is the reference used in the patent's `PL` condition.

The large dispersion contrast between the two source `νd` values is a real property of the patent prescription. The
catalog curves used by LensVisualizer are proxy identifications and do not prove the production glass
vendors. Evaluated as a complete cemented pair in air, D1 has a net focal length of **+438.0894 mm**; it is therefore
only weakly positive even though E5 and E6 have much stronger isolated powers. Optically, the pair sits in the rear
region of L1 where the patent deliberately places positive power in a large off-axis beam to counter sagittal coma
generated elsewhere in the system (¶¶0039–0043).

### E7 — Biconvex Positive

**nd = 1.72916, νd = 54.7. Glass: 729547 LAL18/TAC8 class; OHARA S-LAL18 spectral proxy, patent vendor unresolved. Standalone f = +49.5865 mm.**

E7 is the final element of L1 and the first positive lens counted from the image side within that unit. It follows D1
with only a 0.20 mm air interval and supplies strong positive standalone power near the L1/L2 boundary. Together with
D1 it forms the rear positive concentration that the patent associates with sagittal-coma control in the wide beam
region of L1.

### E8 — Biconvex Positive

**nd = 1.91082, νd = 35.3. Glass: 911353 high-index low-dispersion class; CDGM H-ZLaF4LA spectral proxy, patent vendor unresolved. Standalone f = +50.2426 mm.**

E8 begins L2a, the front sub-unit of the focusing unit. It has substantial positive standalone power, but L2a's net
power is much weaker because the following cemented pair includes a strong negative component. This distinction is
important: E8's isolated focal length does not describe the net behavior of L2a.

### D2 — E9 + E10 cemented pair

**E9: nd = 1.49700, νd = 81.5. Glass: 497816 FPL51/FCD1 class; OHARA S-FPL51 spectral proxy. Standalone f = +99.4960 mm.**\
**E10: nd = 1.65412, νd = 39.7. Glass: 654397 NBH5/KZFS5 class; OHARA S-NBH5 spectral proxy. Standalone f = -31.8110 mm.**

D2 closes L2a immediately ahead of the stop. E10 is much stronger as an isolated negative element than E9 is as an
isolated positive element. The complete cemented pair has a net focal length of **-47.7755 mm**, so D2 is negative even
though L2a as a whole remains weakly positive. The strongly negative image-side surface of E10 lies just before the
aperture stop and is one of the surfaces that implements the patent's stated strategy of placing strong negative
refraction around the stop (¶0037).

### D3 — E11 + E12 cemented pair

**E11: nd = 1.80518, νd = 25.4. Glass: 805254 TIH6/SF6 class; OHARA S-TIH6 spectral proxy. Standalone f = -32.8450 mm.**\
**E12: nd = 1.72916, νd = 54.7. Glass: 729547 LAL18/TAC8 class; OHARA S-LAL18 spectral proxy. Standalone f = +283.9316 mm.**

D3 begins immediately behind the aperture stop. E11 is a strong negative meniscus, while E12 is a weak positive
meniscus when isolated in air. The complete cemented pair has a net focal length of **-38.0035 mm**. The object-side
surface of E11 is therefore the post-stop counterpart to the strong negative refraction ahead of the stop. The patent
explicitly associates the negative surfaces on both sides of the stop with correction of spherical aberration and coma
through high order (¶0037), while later positive power restores the net-positive character of L2b.

### E13 — Biconvex Positive

**nd = 1.59522, νd = 67.7. Glass: 595677 FPM2 class; OHARA S-FPM2 spectral proxy, patent vendor unresolved. Standalone f = +41.2795 mm.**

E13 provides the strongest positive standalone power in the rear part of L2b after D3. It helps re-converge the beam
after the strong post-stop negative section and contributes to L2b's computed positive net focal length of
+49.0858 mm. Its high source `νd` is part of the prescription itself; the FPM2 name is only a coordinate-compatible
spectral proxy.

### E14 — Positive Meniscus, front asphere

**nd = 1.85400, νd = 40.4. Glass: 854404 LAH85V class; OHARA L-LAH85V spectral proxy, patent vendor unresolved. Standalone f = +66.5997 mm.**

E14 is the final positive meniscus and carries the second aspherical surface, 25A, on its object-side face. It completes
the positive rear unit and shapes the final converging bundle before the 39.00 mm published back-focus interval. The
asphere provides a non-spherical correction at the last powered element without adding another refractive element.

## Glass Identification and Selection

The patent identifies optical media only by d-line refractive index and d-line Abbe number. It does not name OHARA,
CDGM, SCHOTT, HOYA, HIKARI, SUMITA, or any other glass supplier, and it does not publish C-, F-, or g-line indices for
Numerical Example 2. Accordingly, the data file's glass names are **catalog-derived spectral proxies**, not source or
production material identifications.

The ten distinct patent coordinate pairs are represented as follows:

| Patent nd / νd | Elements | Data-file class | Spectral proxy | Catalog residual Δnd / Δνd |
|---|---|---|---|---:|
| 1.58313 / 59.4 | E1 | 583594 BAL42 class | OHARA S-BAL42 | 0.00000 / -0.02 |
| 1.48749 / 70.2 | E2 | 487702 FSL5/FK5 class | OHARA S-FSL5 | 0.00000 / +0.03 |
| 1.91082 / 35.3 | E3, E8 | 911353 high-index low-dispersion class | CDGM H-ZLaF4LA | 0.00000 / -0.05 |
| 1.53172 / 48.8 | E4 | 532488 TIL6/LLF6/QF6A class | OHARA S-TIL6 | 0.00000 / +0.04 |
| 1.49700 / 81.5 | E5, E9 | 497816 FPL51/FCD1 class | OHARA S-FPL51 | 0.00000 / +0.04 |
| 1.80518 / 25.4 | E6, E11 | 805254 TIH6/SF6 class | OHARA S-TIH6 | 0.00000 / +0.02 |
| 1.72916 / 54.7 | E7, E12 | 729547 LAL18/TAC8 class | OHARA S-LAL18 | 0.00000 / -0.02 |
| 1.65412 / 39.7 | E10 | 654397 NBH5/KZFS5 class | OHARA S-NBH5 | 0.00000 / -0.02 |
| 1.59522 / 67.7 | E13 | 595677 FPM2 class | OHARA S-FPM2 | 0.00000 / +0.04 |
| 1.85400 / 40.4 | E14 | 854404 LAH85V class | OHARA L-LAH85V | 0.00000 / -0.02 |

The engine evaluates these compatible catalog curves directly. Catalog-derived `nC`, `nF`, `ng`, and `dPgF`
copies are omitted so they cannot override the curve or masquerade as patent-measured spectral evidence.
These curves remain modeling proxies and do not identify Canon's production suppliers or melts.

The prescription contains several large dispersion contrasts, most visibly in D1 (81.5 / 25.4) and D3 (25.4 / 54.7).
Those source `νd` values support describing the patent's achromatizing pairings. They do not support calling the model
apochromatic. Canon separately states that the production lens uses one UD element and a BR optical element with unusual
blue-light dispersion, but the selected numerical example does not identify which patent medium corresponds to the
production UD glass and does not publish a separate BR material layer. No such identity is imposed on the data model.

## Focus Mechanism

The patent states that focusing from infinity toward a near object is performed by translating the positive second lens
unit L2 toward the object (¶¶0032, 0059). Numerical Example 2, however, publishes only the infinity prescription. It
contains no short-distance spacing row, no object-distance table, and no numerical focus travel.

The data file therefore uses a **CONSTRAINED_RECONSTRUCTION** rather than presenting a fabricated patent row. The model
keeps L2 rigid and translates it objectward while the image plane remains fixed. Only the air gap between L1 and L2 and
the rear back-focus interval change:

| State | L1–L2 gap after s13 | BF after s26 |
|---|---:|---:|
| Infinity | 7.690000 mm | 39.000000 mm |
| Reconstructed close state | 0.065731 mm | 46.624269 mm |

The sum of those two intervals remains **46.69 mm**, so the modeled L2 travel is **7.6242688101 mm** toward the object.
Independent paraxial solution of the final data arrays gives an absolute magnification of **0.2100000000×** and a
focal-plane-to-subject distance of **281.749511 mm** at the selected close state. Those results are consistent with
Canon's rounded production specifications of 0.21× maximum magnification and 0.28 m closest focusing distance.

The close state is therefore a code-solved, mechanism-constrained model, not a patent-published focus position. Canon
specifies ring-type USM for the production lens, but the patent does not assign a particular motor or mechanical drive
displacement to the numerical example.

## Aspherical Surfaces

Numerical Example 2 has two aspherical surfaces: surface 2A on the rear face of E1 and surface 25A on the front face of
E14. The patent uses the standard conic-constant equation

$$
z(h)=\frac{h^2/R}{1+\sqrt{1-(1+K)(h/R)^2}}+A_4h^4+A_6h^6+A_8h^8+A_{10}h^{10}+A_{12}h^{12}.
$$

Thus the published `K` values are already standard conic constants; no κ-to-K conversion is required. Both aspheres
have `K = 0`, so their base conics are spheres and the departure comes from the even-order polynomial terms.

| Surface | K | A4 | A6 | A8 | A10 | A12 |
|---|---:|---:|---:|---:|---:|---:|
| 2A | 0 | -1.08011e-6 | -5.77575e-9 | +9.49534e-12 | -1.96264e-14 | +5.77980e-18 |
| 25A | 0 | -7.38078e-6 | -2.82130e-9 | +6.15573e-12 | -3.38342e-14 | +3.92626e-17 |

The current schema also carries `A14: 0` on both surfaces; that zero is schema padding, not an additional coefficient
published by the patent. Because no scale factor is applied, every published coefficient is stored unchanged.

The patent does not publish clear apertures, so asphere departure can only be quoted at the inferred and geometry-
validated modeling semi-diameters. At the modeled rim of surface 2A (`h = 20.6 mm`), the polynomial departure from the
K=0 base sphere is **-0.5642985635 mm**. At surface 25A (`h = 17.8 mm`), it is **-0.8369517922 mm**. These are model-edge
quantities, not patent clear-aperture specifications. The negative departure on 2A reduces its positive spherical sag
at the rim; on 25A, whose base radius is negative, the negative departure moves the modeled rim farther objectward than
the spherical base.

Canon describes the production lens as using two aspherical lens elements, one glass-molded and one ground asphere.
The patent numerical example establishes the two aspherical surfaces but does not assign those manufacturing methods to
surfaces 2A and 25A. The analysis therefore does not map the production manufacturing labels to a specific patent
surface.

## Chromatic Correction Strategy

The patent's primary discussion is framed around large-aperture wide-angle aberration correction rather than named glass
materials. Nevertheless, the prescription itself uses large `νd` contrasts in the cemented pairs and several high-Abbe
positive elements. The data model preserves those source `nd`/`νd` coordinates and supplements them with catalog line-
index proxies only for chromatic tracing.

Production literature adds a separate fact: Canon's EF 35mm f/1.4L II USM uses a BR optical element, one UD lens, and
two aspherical lenses. Canon states that the BR element is an organic optical material placed between two glass elements
and designed to refract blue light strongly. That production construction must remain separate from the patent model,
because Numerical Example 2 neither labels a BR layer nor publishes BR line indices. The LensVisualizer prescription
therefore should not be used to infer the exact production BR or UD material assignment.

No APO designation is made. The authored `dPgF` values belong to catalog proxies chosen to improve numerical chromatic
tracing; they are not direct measurements or source-published partial-dispersion data for the patent embodiment.

## Aberration Correction Strategy

The patent explicitly targets sagittal coma flare in a large-aperture wide-angle system. Its stated approach has two
complementary parts.

First, strong negative refracting surfaces are arranged before and after the aperture stop. The patent associates this
with correction of spherical aberration and coma through high order (¶0037). Numerical Example 2 places a strongly
negative surface at the rear of E10 immediately ahead of the stop and another at the front of E11 immediately behind it.

Second, positive lenses are concentrated in the rear part of L1, where the patent says the off-axis beam has substantial
width and the axial marginal ray reaches a high position. These positive lenses are intended to counter sagittal coma
produced by the strong negative surfaces (¶¶0039–0043). D1 and E7 occupy this region in Example 2.

The independently computed Petzval sum of the complete prescription is **+0.002809194348 mm⁻¹**, evaluated surface by
surface as `φ/(n·n′)`. This is a computed design quantity, not a patent-published field-curvature value. It is included to
characterize the final data model and should not be interpreted as a direct prediction of best-focus curvature without
higher-order tracing.

## Conditional Expressions

The patent gives three principal inequalities for this design family. The modeled prescription satisfies all three and their preferred sub-ranges:

| Condition | Patent range | Preferred range | Computed value |
|---|---|---|---:|
| `PL/D1` | 0.15 < PL/D1 < 0.50 | 0.22 < PL/D1 < 0.40 | 0.2869256557 |
| `ok1/D1` | 1.0 < ok1/D1 < 3.0 | 1.2 < ok1/D1 < 2.5 | 1.4536670778 |
| `f1/f2` | 1.5 < f1/f2 < 5.0 | 2.0 < f1/f2 < 4.0 | 2.6601186966 |

`PL` is measured from the object-side surface of the second positive lens counted from the image side in L1 to the last
surface of L1; `D1` is the first-to-last-surface length of L1. `ok1` is the distance from the final L1 surface to the rear
principal point of L1, positive toward the image side. `f1` and `f2` are the focal lengths of L1 and L2 respectively
(¶¶0042–0050).

The small closure differences between the printed prescription and the patent's rounded summary values are retained
rather than fitted away. Printed spacings plus printed BF total 139.79 mm versus the patent's 139.80 mm summary; the
printed L1 spacings give D1 = 50.71 mm versus 50.72 mm in the unit table; and independent calculation gives
f2 = 55.516102 mm versus the printed 55.50 mm summary. These differences are consistent with the precision of the
published table and do not require source correction.

## Verification Summary

Independent re-entry of Numerical Example 2 gives the same system matrix from sequential height/reduced-angle tracing
and a separate ABCD chain at double precision. The following values are therefore properties of the modeled
prescription:

| Quantity | Verified value |
|---|---:|
| Effective focal length | 35.4217858624 mm |
| Back focal distance from s26 | 38.9982669961 mm |
| Full field from h = 21.64 mm | 62.8434736865° |
| Modeled wide-open f-number | 1.4500000000 |
| L1 focal length | +147.6794221101 mm |
| L2 focal length | +55.5161024580 mm |
| Petzval sum | +0.002809194348 mm⁻¹ |
| Reconstructed close-focus magnification | 0.2100000000× |
| Reconstructed focal-plane-to-subject distance | 281.749511 mm |

The inferred semi-diameter model was checked at infinity and at the reconstructed close state. The maximum actual rim
angle is **50.8863°** at surface 2A, the minimum computed element edge thickness is **1.327843579 mm**, and the tightest
shared-gap policy reserve is **0.163312 mm** at the s4→s5 air gap. Dense 0.6-field pupil scans found no ray whose first
clip occurred at an internal cemented interface.

These geometry values validate the authored modeling apertures; they do not convert those apertures into patent source
data.

## Sources / References

- Shirasuna, Takashi. **US 2015/0098138 A1, “Optical System and Image Pickup Apparatus Including the Same.”** Canon
  Kabushiki Kaisha, published April 9, 2015. Numerical Example 2 and Fig. 3 are the prescription and layout sources.
  <https://patents.google.com/patent/US20150098138A1/en>
- Canon Camera Museum. **EF35mm f/1.4L II USM.** Production specifications, October 2015 marketing date, 14 elements /
  11 groups, 0.28 m closest focus, 0.21× maximum magnification, and production optical block diagram.
  <https://global.canon/en/c-museum/product/ef452.html>
- Canon Inc. **“Canon develops new camera-lens optical element that enables exceptionally high levels of chromatic
  aberration correction.”** August 27, 2015. BR optical element composition and production-lens debut.
  <https://global.canon/en/news/2015/aug27e.html>
- Canon Hong Kong. **EF35mm f/1.4L II USM specifications.** 63° diagonal field, ring-type USM, 0.28 m closest focus,
  0.21× maximum magnification, 9 blades, and f/22 minimum aperture.
  <https://hk.canon/en/consumer/ef35mm-f-1-4l-ii-usm/main/specification?subCategory=ef-lenses>
- OHARA Corporation. **Optical Glass Catalog.** Catalog source for the S-BAL42, S-FSL5, S-TIL6, S-FPL51, S-TIH6,
  S-LAL18, S-NBH5, S-FPM2, and L-LAH85V spectral proxies used by the data model.
  <https://oharacorp.com/glass-catalog/>
- CDGM Glass. **Optical Glass Catalog.** Catalog source for the H-ZLaF4LA spectral proxy used for the 1.91082 / 35.3
  patent coordinate.
  <https://www.cdgmgd.com/go.htm?k=Special_Flint_Glass&url=goods>
## Integration audit — 2026-09-11 UTC

US 2015/0098138 A1, Fig. 3, PDF p4 (600 dpi; crop 0.27,0.48,0.655,0.65). Retained the SDs: clean optical rims agree within about 10%; the apparent E2/E10/E11/E13 oversizing in automated ENV/RIM readings comes from overlapping rays or brackets. No clear-aperture table is published.

Surface validation and image-circle audits passed. Display names were checked against the shared all-caps maker/line, separated system-token, and aperture conventions; the existing titles already conform. Patent optical coordinates and inferred-focus qualifications were preserved.

Direct local-SVG comparison confirms the retained optical rims and element/group labels. L2a and L2b move objectward from infinity toward near focus while L1 remains fixed. E5/E9 (S-FPL51) and E13 (S-FPM2) now carry inferred APD tags from the compatible catalog curves; no patent partial-dispersion measurement or production supplier is asserted.
