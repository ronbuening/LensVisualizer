# FUJIFILM EBC X-FUJINON W 24mm f/2.8 DM — Optical Analysis

## Patent Reference and Design Identification

**Patent:** US 4,158,482\
**Application No.:** 826,756\
**Priority:** August 27, 1976 (Japan 51-102433)\
**Filed:** August 22, 1977\
**Granted:** June 19, 1979\
**Inventors:** Yoshikazu Doi; Yutaka Sakai\
**Assignee:** Fuji Photo Optical Co., Ltd.\
**Title:** *Inverted Telephoto Type Super-Wide Angle Lens*\
**Embodiment analyzed:** Example 1 / Table I

The modeled prescription is the patent's first numerical example, uniformly scaled from its normalized focal length of
1.001 to the 24 mm production class. The scale factor is

$$
s = \frac{24}{1.001} = 23.9760239760.
$$

Every dimensional prescription quantity in the data model is scaled by this factor. Example 1 is entirely spherical, so
there are no aspheric coefficients and no coefficient transformation is applicable. Recalculation from the final rounded
TypeScript prescription gives a paraxial effective focal length of 24.003004659 mm, stored as
`focalLengthDesign: 24.003005`, rather than forcing the model to exactly 24.000 mm.

The patent does not identify a commercial product by name. This analysis nevertheless treats Example 1 as the fixed
production correlation selected by the job card. The correlation is convergent and is not an explicit manufacturer-to-patent identification:

1. The patent states that the design can be manufactured as a 24 mm f/2.8 lens for 24 × 36 mm film.
2. Example 1 is a 9-element, 8-group design with an 84° full angle of view.
3. Fuji-authored X-FUJINON literature lists the production 24 mm f/2.8 as 9 elements in 8 groups with an 84° diagonal
   angle of view.
4. The patent states that a commercially available 49 mm filter can be used; Fuji's lens table also gives a 49 mm filter
   size for the production lens.
5. The patent timing is consistent with the Fujica-X system period.

There is a nomenclature conflict between the fixed job-card label and Fuji's own product literature. The job card uses
“X-Fujinon-SW 24mm f2.8 DM EBC,” whereas the Fuji-authored interchangeable-lens table designates the 24 mm f/2.8 as
**EBC X-FUJINON W 24mm f/2.8 DM** and uses **SW** for the 19 mm f/3.5. The modeled lens name therefore follows the manufacturer-supported `W` designation.

The production system was the historical Fujica-X bayonet. The data file does not assign `lensMounts` because the
current taxonomy has no historical Fujica-X id; the modern `fujifilm-x` id denotes the later APS-C mirrorless mount and
is not equivalent. The modeled image format is `135-full-frame`, consistent with the patent's explicit 24 × 36 mm film
application.

## Optical Architecture

The patent calls the design an “inverted telephoto type” super-wide-angle lens. In current project terminology it is a
**retrofocus** design: the independently recomputed paraxial back focal distance is 36.605102756 mm, greater than the
24.003004659 mm effective focal length. The first-to-last refracting-vertex span is 48.258940 mm, so TL/EFL = 2.0105
and the design does not satisfy the project telephoto criterion TL/EFL < 1; BFD/EFL = 1.5250 confirms the retrofocus
classification. The modeled optical train contains nine elements in eight air-separated groups, with one cemented pair,
L4–L5.

The power distribution is strongly asymmetric. Independent matrix reduction of the final data gives an equivalent EFL of
−21.501933 mm for the L1–L3 front assembly and +23.686655 mm for the L4–L9 rear assembly. These are equivalent powers of
the selected multi-element spans with their actual internal spacings and air on the external sides; they are not the
standalone focal lengths of individual elements and should not be read as per-element in-situ ray-bending contributions.
The negative front assembly supplies the long-back-focus architecture, while the positive rear assembly restores net
convergence toward the image plane.

The central L4–L5 cemented doublet is only weakly positive as an isolated cemented assembly: its equivalent EFL is
+118.880662 mm. This net value is distinct from L4's standalone −34.3316 mm focal length and L5's standalone +26.9812 mm
focal length. The patent uses their dispersion contrast, together with the high Abbe number of L6, as part of its
chromatic balancing strategy.

The aperture stop lies between L6 and L7 in Figure 1, but the patent gives neither a numerical stop position nor a stop
diameter. The model places the stop 40% of the way through the patent's `d11` gap from r11 toward r12. At production
scale this divides the gap into 1.285115 mm before the stop and 1.927672 mm after it. The physical stop semi-diameter,
6.309601 mm, is back-solved through the front group to reproduce the source F/2.8. It is therefore a modeling inference,
not an independently published aperture dimension. With the final rounded prescription the modeled aperture evaluates
to f/2.800000054; the data stores this value in `apertureDesign` and `nominalFno`, while `apertureMarketing` remains 2.8.

The patent publishes only an approximate 32 mm effective diameter for L1. The model uses a 16.0 mm semi-diameter on r1
and 15.4 mm on r2; the smaller rear value keeps the actual spherical rim slope within the current geometry limit. The
remaining semi-diameters are inferred from the exact ray envelope, Figure 1 proportions, edge-thickness constraints, and
cross-gap clearance. None should be interpreted as patent-tabulated clear apertures.

The final surface-to-image distance in the data file is 36.611389 mm, the uniformly scaled form of the patent's stated
normalized BFD of 1.527. Recalculation from the rounded modeled surfaces gives a paraxial BFD of 36.605102756 mm. The
0.006286 mm difference is the retained source-rounding residual rather than a second focus state.

## Element-by-Element Analysis

The focal lengths below are the data file's **standalone thick-element focal lengths in air**. They are useful for
classifying each element's intrinsic power, but they do not represent the element's in-situ contribution after preceding
ray heights and refractive media are taken into account.

### L1 — Negative Meniscus

**nd = 1.62280, νd = 56.9. Glass: S-BSM10 (623569 crown coordinate; catalog equivalent, vendor undetermined). f = −49.9632 mm.**

L1 is the large front negative meniscus, convex toward the object as described by the patent. It begins the strongly
negative retrofocus front assembly and is the only element for which the patent supplies an approximate effective
diameter: about 32 mm. The production-scale model therefore uses the source statement only as an r1 aperture anchor;
r2 is separately constrained by surface geometry rather than being forced to the same 16 mm semi-diameter.

### L2 — Biconvex Positive

**nd = 1.51823, νd = 59.0. Glass: 518590 crown coordinate class; vendor undetermined. f = +128.8279 mm.**

L2 is a relatively weak positive biconvex element inside the front assembly. Its positive power moderates the strong
negative action of L1 and L3 without overturning the negative net power of the L1–L3 span. The final matrix reduction of
that complete span remains negative at −21.501933 mm equivalent EFL.

### L3 — Negative Meniscus

**nd = 1.62299, νd = 58.1. Glass: 623581/582 crown coordinate class; vendor undetermined. f = −33.0644 mm.**

L3 is the second negative meniscus of the front assembly and is also convex toward the object in the patent description.
Together with L1 it supplies most of the negative power required ahead of the positive rear section. Its standalone focal
length is substantially shorter in magnitude than L1's, but the optical effect of the assembled front section depends on
the intervening L2 and the large air separations, not on addition of standalone powers.

### L4–L5 — Cemented Positive Doublet D1

**L4: nd = 1.68273, νd = 44.5. Glass: BAF22 (683445 barium-flint coordinate; catalog equivalent, vendor undetermined). f = −34.3316 mm.**\
**L5: nd = 1.69895, νd = 30.1. Glass: 699301 dense-flint coordinate class; vendor undetermined. f = +26.9812 mm.**

L4 is a plano-concave negative element cemented directly to the positive biconvex L5. The r8 cemented interface is
modeled as the entrance to L5, with L5's refractive index and element identity; no synthetic cement layer is present.
Although the individual elements have substantial opposite standalone powers, the cemented pair is only weakly positive
as a unit, with a computed equivalent EFL of +118.880662 mm.

The patent explicitly makes the Abbe-number separation of this doublet part of the design condition. The final data give
νd(L4) − νd(L5) = 44.5 − 30.1 = 14.4, inside the required interval 10 < ν4 − ν5 < 16. This is an Abbe-number chromatic
balancing condition. The source does not publish line indices or anomalous partial-dispersion data for these glasses, so
no apochromatic or anomalous-dispersion claim follows from the prescription.

### L6 — Biconvex Positive

**nd = 1.64000, νd = 60.2. Glass: J-LAK01 (640602 lanthanum-crown coordinate; catalog equivalent, vendor undetermined). f = +20.8164 mm.**

L6 is the strongest standalone positive element in the design and sits immediately before the inferred aperture stop.
Its high Abbe number is deliberate in the patent: ν6 = 60.2 satisfies the stated condition 53 < ν6 < 61. The patent
relates this choice to balancing chromatic effects associated with the strong front negative section and the cemented
L4–L5 component.

Because the stop follows L6, this element also occupies a sensitive location for ray-height and pupil behavior. The data
file does not assign a separate in-situ focal contribution to L6; its stored `fl` remains the isolated thick-element value
in air.

### L7 — Biconcave Negative

**nd = 1.76182, νd = 26.5. Glass: 762265/266 dense-flint coordinate class; vendor undetermined. f = −16.3390 mm.**

L7 is a strong negative biconcave element immediately behind the stop. The patent specifically requires its rear surface
to have a larger radius-of-curvature magnitude than its front surface, a relationship retained by the scaled data. It
introduces a strong negative contribution inside an otherwise net-positive rear assembly and works in conjunction with
L8 and L9 to complete the rear correction and convergence.

### L8 — Positive Meniscus, Convex to Rear

**nd = 1.62041, νd = 60.3. Glass: 620603 crown coordinate class; vendor undetermined. f = +48.2953 mm.**

L8 is modeled as a positive meniscus convex toward the image side. This orientation follows Figure 1, Table I, the
abstract, the summary, and Claim 1. One sentence in the detailed preferred-embodiment prose instead calls L8 convex to
the front. That sentence conflicts with the numerical prescription and the other patent descriptions, so the data follows
the convergent numerical and graphical evidence rather than silently adopting the isolated wording error.

### L9 — Near-Plano-Convex Positive

**nd = 1.62230, νd = 53.1. Glass: 622531-533 dense-crown coordinate class; vendor undetermined. f = +34.4071 mm.**

L9 is the final positive element. Its front radius is extremely large at production scale, so the surface is nearly
planar, while the rear surface carries the useful curvature. L9 completes the positive rear assembly ahead of the long
image space required by the retrofocus layout.

## Glass Identification and Selection

Table I publishes only sodium d-line refractive index and Abbe number. It does not name glass manufacturers or catalog
types and does not publish `nC`, `nF`, `ng`, Sellmeier coefficients, or `dPgF`. Cross-checking the patent coordinates
against authoritative OHARA, HOYA, SCHOTT, HIKARI, CDGM, and SUMITA catalogs produces multiple exact or near-exact
coordinate equivalents for several positions. Those matches are insufficient to establish the actual production glass
maker.

The data file preserves the source coordinates and uses six-digit classes or explicitly qualified catalog equivalents
for runtime dispersion. Multiple public catalogs contain exact or near-exact coordinate
equivalents, but the patent does not establish which maker supplied the production melts.

| Element | nd | νd | Data-file glass annotation | Optical use |
|---|---:|---:|---|---|
| L1 | 1.62280 | 56.9 | S-BSM10 (623569 crown coordinate; catalog equivalent, vendor undetermined) | Front negative meniscus |
| L2 | 1.51823 | 59.0 | 518590 crown coordinate class; vendor undetermined | Weak positive member of front assembly |
| L3 | 1.62299 | 58.1 | 623581/582 crown coordinate class; vendor undetermined | Negative front member |
| L4 | 1.68273 | 44.5 | BAF22 (683445 barium-flint coordinate; catalog equivalent, vendor undetermined) | Negative member of D1 |
| L5 | 1.69895 | 30.1 | 699301 dense-flint coordinate class; vendor undetermined | Positive member of D1 |
| L6 | 1.64000 | 60.2 | J-LAK01 (640602 lanthanum-crown coordinate; catalog equivalent, vendor undetermined) | Strong positive pre-stop element |
| L7 | 1.76182 | 26.5 | 762265/266 dense-flint coordinate class; vendor undetermined | Strong negative post-stop element |
| L8 | 1.62041 | 60.3 | 620603 crown coordinate class; vendor undetermined | Positive rear meniscus |
| L9 | 1.62230 | 53.1 | 622531-533 dense-crown coordinate class; vendor undetermined | Final positive element |

The absence of line-index and partial-dispersion data is material. The patent's chromatic discussion can support the
stated Abbe-number balancing logic, but it does not support identification of a particular anomalous-dispersion glass or
a higher-order spectral classification. Chromatic modeling for this prescription must therefore remain at the quality
supported by `nd` and `νd` alone unless a new primary source identifies the actual melts or publishes line data.

## Focus Mechanism

The modeled prescription is an infinity state only. The patent gives no finite-conjugate prescription, focus-spacing
table, object-distance series, magnification series, or internal-group travel for Example 1. Accordingly, the data file
uses `NO_INTERNAL_RECONSTRUCTION`, with an empty `var` object and an empty `varLabels` array; no internal focus motion is
synthesized from product specifications.

Fuji's production literature gives a minimum focusing distance of 0.25 m, and the data file retains that value as
`closeFocusM` product metadata. The manufacturer source does not define a prescription reference plane or disclose which
optical group moves to reach that distance. The 0.25 m value therefore does not establish a modeled close-focus optical
state and must not be interpreted as a finite-conjugate validation of the patent prescription.

## Conditional Expressions

The patent imposes two explicit dispersion conditions on Example 1. Both are satisfied directly by the final data:

| Patent condition | Final value | Result |
|---|---:|---|
| $53 < \nu_6 < 61$ | 60.2 | Satisfied |
| $10 < \nu_4 - \nu_5 < 16$ | 14.4 | Satisfied |

These conditions are source facts tied to the patent's chromatic design rationale. They do not, by themselves, identify
vendor glasses or establish anomalous partial dispersion.

## Verification Summary

Independent sequential height/reduced-angle tracing and a separate ABCD calculation of the final rounded TypeScript
surfaces agree to numerical precision. The principal independent cross-checks are:

| Quantity | Verified value | Interpretation |
|---|---:|---|
| Effective focal length | 24.003004659 mm | Computed from final data arrays |
| Paraxial BFD from r17 | 36.605102756 mm | Computed paraxial focus |
| Authored r17→image spacing | 36.611389 mm | Scaled patent BFD, retained as source value |
| Modeled f-number | 2.800000054 | Consequence of inferred stop size chosen from source F/2.8 |
| Entrance-pupil radius | 4.286250749 mm | Computed from final stop/front-group model |
| Petzval sum | +0.007020116327 mm⁻¹ | Surface-by-surface $\phi/(n n')$ sum |
| Petzval radius | −142.447781972 mm | $R_P=-1/\sum P_i$ under the project sign convention |
| L1–L3 equivalent EFL | −21.501933 mm | Computed front-assembly equivalent power |
| L4–L5 equivalent EFL | +118.880662 mm | Computed cemented-pair equivalent power |
| L4–L9 equivalent EFL | +23.686655 mm | Computed rear-assembly equivalent power |

The model contains no sensor cover plate, filter plate, inactive dummy plane, flare cutter, or mechanical component. The
49 mm filter mentioned by the patent and manufacturer is an external accessory specification, not an optical surface.
No omitted optical plate requires an air-equivalent rear-spacing correction in Example 1.

The all-spherical prescription uses `asph: {}`. No conic convention or aspheric polynomial applies, and the uniform scale
therefore requires only dimensional scaling; there are no coefficients to transform by
$A_{p,\mathrm{scaled}}=A_{p,\mathrm{patent}}/s^{p-1}$.

## Sources and References

1. Yoshikazu Doi and Yutaka Sakai, **US 4,158,482**, *Inverted Telephoto Type Super-Wide Angle Lens*, Fuji Photo
   Optical Co., Ltd., granted June 19, 1979. Example 1 / Table I and Figure 1 are the prescription sources.\
   https://patents.google.com/patent/US4158482A/en
2. Fuji Photo Film Co., Ltd., **Fujica AX-5 owner literature / X-FUJINON interchangeable-lens table**. Manufacturer-
   authored archival scan hosted by CameraManuals. The table identifies the EBC X-FUJINON W 24 mm f/2.8 DM production
   lens and its published element/group count, angle of view, minimum focus, and filter size.\
   https://cameramanuals.org/fuji_pdf/fujica_ax-5.pdf
3. Fuji Photo Film Co., Ltd., **Fujica AX-3 system brochure**. Manufacturer-authored archival scan hosted by Pacific Rim
   Camera; used for Fujica-X system context and product nomenclature.\
   https://www.pacificrimcamera.com/rl/00869/00869.pdf
4. Authoritative optical-glass catalogs consulted for coordinate matching: OHARA, HOYA, SCHOTT, HIKARI, CDGM, and
   SUMITA. No catalog candidate is treated as the production glass without a primary-source identity link.

### Catalog-resolution review — 2026-09-12 UTC

L1, L4, and L6 now name qualified S-BSM10, BAF22, and J-LAK01 catalog equivalents. Their catalog-minus-patent coordinate differences are approximately (−0.0000011, +0.15), (−0.0002341, +0.1717), and (+0.000000013, 0) in nd/νd. These labels repair unresolved shorthand code ranges; they do not identify the historical supplier. All nine elements resolve through the existing catalog, with no invented spectral measurements.

### Patent-rim review — 2026-09-12 UTC

US4158482.pdf, page 2, Fig. 1 was visually inspected at 600 dpi. The estimated apertures were retained. The first and third negative menisci have obvious mechanical steps, and L6 automated rim readings are contaminated by the internal dimension labels. The unobstructed optical rims do not justify changes beyond the existing slope and gap constraints. Surface validation and image-circle audits pass.
