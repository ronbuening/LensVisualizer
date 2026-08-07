# MAMIYA N 210mm f/8 L

## Patent Reference and Design Identification

**Patent:** JP 2000-028919 A<br>
**Filed:** 9 July 1998<br>
**Published:** 28 January 2000<br>
**Inventor:** Hideyuki Suga<br>
**Applicant:** Mamiya-OP Co., Ltd.<br>
**Title:** Medium-Telephoto Lens<br>
**Embodiment analyzed:** Example 1

The prescription is a production-scale transcription of Example 1. The selected numerical example is fixed by the job
card; no values from Examples 2 or 3 are blended into the model. Four independent features support its correlation with
the Mamiya N 210mm f/8 L for the Mamiya 7 system:

1. The patent and production lens both use seven elements in five groups.
2. Uniformly scaling the patent's 100.06mm example to the marketed 210mm focal length produces a computed design focal
   length of 209.958mm.
3. The patent's modeled f/8.15 and 24.38° full field agree with the rounded production specifications of f/8 and 24°.
4. The application belongs to Mamiya-OP and places a low-dispersion positive element in the front cemented group,
   consistent with the production lens's published low-dispersion construction.

This is a convergent production correlation, not a documented manufacturer statement that Example 1 was released under
the commercial lens name.

The model applies a uniform scale factor of

$$
s = \frac{210}{100.06} = 2.098740755546672.
$$

All radii, center thicknesses, air spaces, inferred clear apertures, stop dimensions, and image-plane distances are
scaled by $s$; refractive indices and Abbe numbers are unchanged. The design is entirely spherical, so there are no
aspheric coefficients to transform.

Two signs printed in the A-publication are not used literally. Its Example 1 table gives positive values for R4 and R6,
whereas the later family grant JP 4187311 B2 gives both radii as negative. The negative signs also reproduce the
published focal length and conditional-expression values; the positive signs do not. The data therefore treats the two
signs as source corrections rather than as undocumented changes to the design.

## Optical Architecture

The lens is an all-spherical telephoto consisting of a converging front group, a long stop space, and a net-diverging
rear group. The front group G1 contains a positive meniscus L1 followed by the cemented L2–L3 pair. The rear group G2
contains the positive meniscus L4, the cemented L5–L6 pair, and the negative meniscus L7. The physical count is seven
elements in five air-spaced groups; the cemented pairs are D1 (L2–L3) and D2 (L5–L6).

Computed as complete air-bounded subsystems at the production scale, G1 has an effective focal length of +153.470mm and
G2 has an effective focal length of −230.935mm. These are subsystem results, not the same quantities as either the
standalone element powers or the cemented-pair powers. D1 remains weakly negative as a cemented unit
($f = -340.678$mm), while D2 is more strongly negative ($f = -194.358$mm). Their surrounding positive elements and
axial separation produce the final positive 209.958mm system.

The first surface-to-image track is 177.743mm, giving $TL/EFL = 0.846562$. The design is therefore telephoto under the
project criterion $TL/EFL < 1$. Its 73.666mm back focal distance is only 0.350861 times the EFL, so it is not a
retrofocus design. This compactness corresponds to the patent's condition on front-group power and its approximately
0.85 total-length objective (¶¶0013–0016).

The aperture stop lies in the long air space between the two power groups. The patent identifies the stop only in
Figure 1 and does not publish an axial coordinate or diameter. The data places it at 0.483 of the published d5 space
after surface 5 and solves its physical radius, 8.9409mm at production scale, from the modeled f/8.15 entrance pupil.
The stop placement and diameter are therefore modeling inferences. The semi-diameters are likewise inferred from the
patent figure, ray containment, and physical geometry; they are not patent dimensions.

## Element-by-Element Analysis

### L1 — Positive Meniscus, Convex to the Object

**nd = 1.4875, νd = 70.2. Glass: 487702/704 fluor-crown class (catalog equivalent not unique). Standalone f = +114.402mm.**

L1 is the first positive collector and establishes much of the entrance-side convergence. Its high Abbe number limits
the primary dispersion introduced by this initial positive power. It is air-spaced from D1 by only 0.504mm in the
scaled model, so L1 and the cemented pair act as a compact front assembly even though they remain separate physical
groups.

The patent defines the front assembly as the converging group G1. L1's standalone focal length must not be read as the
power of that assembly: the complete G1 subsystem, including L1, D1, thicknesses, and spacing, has a computed focal
length of +153.470mm.

### L2 — Biconvex Positive Member of D1

**nd = 1.4970, νd = 81.6. Glass: 497816 low-dispersion fluorophosphate-crown class. Standalone f = +85.537mm.**

L2 is the strongest low-dispersion positive member in the prescription. Its unusually high Abbe number provides low
primary chromatic dispersion for the positive power placed near the front of the lens. The patent does not publish
line indices or partial-dispersion data, however, so the glass supports a low-dispersion classification rather than an
APO or anomalous-dispersion claim.

L2 is cemented directly to L3. The positive standalone power listed above therefore describes L2 in isolation, not the
power of the cemented D1 pair.

### L3 — Biconcave Negative Member of D1

**nd = 1.7570, νd = 47.8. Glass: 757478 lanthanum-flint class. Standalone f = −64.842mm.**

L3 supplies strong negative power immediately behind the low-dispersion L2. Its higher index and lower Abbe number form
the contrasting member of the front cemented pair. The D1 cemented combination has a computed focal length of
−340.678mm at production scale, even though L2 alone is positive and L3 alone is substantially negative.

The function of D1 is therefore not equivalent to either constituent element. Within the complete front group, L1 and
the air-spaced/cemented geometry overcome D1's weak net divergence and leave G1 converging. This distinction between
standalone power, cemented net power, and subsystem behavior is essential to the design's interpretation.

### L4 — Positive Meniscus, Concave to the Object

**nd = 1.6989, νd = 30.1. Glass: 699301 dense-flint class. Standalone f = +203.462mm.**

L4 begins the rear group with weak positive power. Its low Abbe number satisfies the patent's $ν_4 < 37$ requirement
and differs from the higher-dispersion ordering that might be expected from a simple positive-crown /
negative-flint achromat. The patent treats this glass choice together with the following cemented pair as part of the
rear group's aberration balance (¶¶0020–0023).

Although L4 is positive by itself, G2 is negative as a complete subsystem. Its role must therefore be read in relation
to the strong negative D2 pair, L7, and the axial position of the stop rather than as an independent converging group.

### L5 — Biconcave Negative Member of D2

**nd = 1.6031, νd = 60.6. Glass: 603606/607 dense-crown class. Standalone f = −41.242mm.**

L5 is the strongest negative standalone element in the scaled prescription. It provides the principal negative power in
D2 while retaining a comparatively high Abbe number. The patent specifically requires $ν_5 > 52$, and Example 1 uses
60.6.

The strongly curved object-side surface of L5 is also the steepest authored spherical rim in the model. That geometric
fact does not by itself establish an aberration contribution, but it is consistent with L5's dominant negative power in
the rear cemented pair.

### L6 — Biconvex Positive Member of D2

**nd = 1.7725, νd = 49.6. Glass: 773496 lanthanum-flint class. Standalone f = +56.261mm.**

L6 is a high-index positive element cemented to L5. The index difference is $N_6 - N_5 = 0.1694$, comfortably above the
patent's lower limit of 0.08. The patent associates this index separation with correction across the rear cemented
interface while maintaining the required rear-group power (¶¶0020–0023).

L6 does not reverse D2 into a positive component. The cemented pair remains negative with a computed focal length of
−194.358mm, showing that the positive standalone value of L6 cannot be substituted for the net behavior of the pair.

### L7 — Negative Meniscus, Concave to the Object

**nd = 1.7618, νd = 26.5. Glass: 762265/266 dense-flint class. Standalone f = −244.957mm.**

L7 completes the rear group with weak negative power and a low-Abbe, high-index glass. Its meniscus form closes the
rear power distribution without creating a retrofocus-length back focus. The patent describes the rear group as a
positive L4, the negative-positive D2 cemented pair, and an object-side-concave negative meniscus L7 (¶0019).

One earlier passage (¶0011) uses wording that can be read as calling L7 positive. The abstract, claims, later embodiment
description, numerical radii, and independently computed standalone power all establish a negative meniscus. The data
follows that internally consistent interpretation rather than the isolated contradictory wording.

## Glass Identification and Selection

The patent publishes d-line refractive indices and Abbe numbers but does not identify glass vendors. The data therefore
uses six-digit coordinate classes or class descriptions rather than asserting unique catalog identities.

| Element | Stored glass classification | nd | νd | Evidential limit |
|---|---|---:|---:|---|
| L1 | 487702/704 fluor-crown class | 1.4875 | 70.2 | Multiple catalog equivalents; vendor unproved |
| L2 | 497816 low-dispersion fluorophosphate-crown class | 1.4970 | 81.6 | Low-dispersion class established; vendor unproved |
| L3 | 757478 lanthanum-flint class | 1.7570 | 47.8 | Coordinate-class match; vendor unproved |
| L4 | 699301 dense-flint class | 1.6989 | 30.1 | Coordinate-class match; vendor unproved |
| L5 | 603606/607 dense-crown class | 1.6031 | 60.6 | Multiple close cross-vendor equivalents |
| L6 | 773496 lanthanum-flint class | 1.7725 | 49.6 | Multiple close cross-vendor equivalents |
| L7 | 762265/266 dense-flint class | 1.7618 | 26.5 | Coordinate-class match; vendor unproved |

The optical strategy uses large dispersion contrasts in both cemented pairs. D1 combines the very high-Abbe positive L2
with the lower-Abbe negative L3. D2 reverses the simple crown/flint expectation by pairing a high-Abbe negative L5 with
a lower-Abbe, higher-index positive L6. L4 and L7 add low-Abbe glasses around that pair. This distribution is directly
supported by the published $n_d$ and $ν_d$ values and by the patent's conditions; the detailed secondary-spectrum
behavior is not recoverable from Abbe numbers alone.

No element carries published $n_C$, $n_F$, $n_g$, or $dP_{gF}$ data, and all data entries explicitly set `apd: false`.
Accordingly, the prescription should be described as using low-dispersion glass and achromatizing index/dispersion
contrasts, not as apochromatic or as dependent on anomalous partial dispersion.

## Focus Mechanism

The patent supplies only an infinity prescription. It provides no finite-conjugate table, moving-group diagram,
variable air spaces, or mechanical constraint from which an internal focus model could be solved. The data therefore
uses `NO_INTERNAL_RECONSTRUCTION`, an empty `var` object, and no close-focus optical state.

The production minimum focus distance of 7m is retained as manufacturer metadata. The system brochure's generic
helicoid-focus description does not identify whether this particular lens uses whole-lens translation or internal group
motion. A reference-plane-normalized conjugate check of the infinity design gives approximately 7.051m for the published
0.032× maximum magnification. The 51mm difference is compatible with rounded production specifications, but it cannot
establish a focus mechanism. The analysis therefore does not infer one.

## Chromatic Correction Strategy

The front and rear cemented pairs use different chromatic arrangements. In D1, L2 places very low primary dispersion on
the positive member, while L3 supplies the negative power with a lower Abbe number. In D2, L5 carries strong negative
power at $ν_d = 60.6$ and L6 contributes positive power at $ν_d = 49.6$, while their refractive-index difference remains
large. The low-Abbe L4 and L7 then bracket the rear cemented pair within G2.

The patent's conditions constrain this palette rather than identifying specific melts. The data preserves those source
coordinates and avoids replacing them with a single vendor's Sellmeier model. As a result, first-order color balancing
can be discussed from the $n_d/ν_d$ pairs, but higher-order color behavior remains outside the evidential scope of the
prescription.

## Conditional Expressions

The computed values below come from the corrected, uniformly scaled TypeScript prescription. Uniform scaling leaves the
dimensionless conditions unchanged.

| Patent condition | Example 1 / computed value | Required range | Result |
|---|---:|---:|---|
| $F_{12}/F$ | 0.730953736 (patent: 0.731) | $0.6 < F_{12}/F < 0.9$ | Satisfied |
| $\lvert F_{345}/F \rvert$ | 1.099910473 (patent: 1.100) | $0.85 < \lvert F_{345}/F \rvert < 1.45$ | Satisfied |
| $N_6-N_5$ | 0.1694 (patent rounded: 0.169) | $N_6-N_5 > 0.08$ | Satisfied |
| $ν_4$ | 30.1 | $ν_4 < 37$ | Satisfied |
| $ν_5$ | 60.6 | $ν_5 > 52$ | Satisfied |

The first condition bounds the front-group power relative to the full lens; the second bounds the magnitude of the
rear-group power. The latter three conditions regulate the index and dispersion relationship around D2. The corrected
R4 and R6 signs are necessary to reproduce the first two printed values.

## Verification Summary

The final TypeScript surface array was independently traced rather than assumed to match the Stage 1 transcription.
Its principal results are:

| Quantity | Verified result |
|---|---:|
| Design effective focal length | 209.958369551mm |
| Modeled maximum aperture | f/8.149999998 |
| Back focal distance | 73.666247326mm |
| First-surface-to-image track | 177.742801415mm |
| Track / EFL | 0.846562115 |
| BFD / EFL | 0.350861209 |
| Petzval sum | +0.000587510299mm⁻¹ |
| Reciprocal Petzval magnitude | 1702.097820mm |

The authored semi-diameters were not published by the patent. They were constrained by the inferred f/8.15 stop,
Figure 1 proportions, exact meridional ray bundles, positive edge thickness, actual rim slope, shared-gap clearance, and
no standalone geometric trimming requirement. The smallest computed edge thickness is 0.541mm, the maximum spherical
rim-slope angle is 36.092°, and the narrowest remaining clearance to the cross-gap limit is 1.473mm. The default on-axis
and 0.60-field ray bundles clear every surface. Full-field pupil sampling accepts 87.1% of the tested pupil interval,
which is consistent with some corner vignetting and is not represented as full-pupil transmission.

No cover glass, filter, dummy plane, flare cutter, or mechanical surface appears in the active Example 1 path, and none
has been added. The final image spacing is the computed infinity back focal distance. Because the prescription has no
aspheres, there is no conic convention or coefficient departure to report.

## Sources

- JP 2000-028919 A, *Medium-Telephoto Lens*, especially Example 1, Table 1, Figure 1, and ¶¶0013–0024.
- JP 4187311 B2, Example 1 table, used to resolve the R4 and R6 signs printed inconsistently in the A-publication.
- Mamiya, *Mamiya 7 II System Brochure*, lens specifications and 210mm lens description, pp. 14 and 17:
  <https://galerie-photo.com/manuels/m7II_brochure_english.pdf>.
- Authoritative OHARA, HOYA, SCHOTT, HIKARI, SUMITA, and CDGM optical-glass catalogs and cross-reference tables, as
  recorded in the accompanying audit.
