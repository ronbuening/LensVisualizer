# NIKON AF-S DX ZOOM-NIKKOR 17-55mm f/2.8G IF-ED

## Patent Reference and Design Identification

**Patent:** US 2005/0013015 A1

**Application Number:** 10/892,169

**Filed:** July 16, 2004

**Priority:** July 17, 2003 (JP 2003-198644); July 5, 2004 (JP 2004-198349)

**Published:** January 20, 2005

**Inventor:** Takayuki Sensui

**Assignee:** Nikon Corporation

**Title:** *Zoom Lens System*

**Embodiment analyzed:** Example 5

The prescription is the Example 5 four-group zoom disclosed in US 2005/0013015 A1. The patent gives three infinity
zoom states at 17.55, 31.43, and 52.70 mm, a nominal FNO of 2.89 in Table 5, three aspherical surfaces, and a
14-element/10-group construction. Figure 9 shows the internal-focus arrangement, and ¶0126 states that the first lens of
G2 together with the following cemented pair moves toward the image for close focusing.

The production correlation is the Nikon AF-S DX Zoom-Nikkor 17-55mm f/2.8G IF-ED specified by the job card. The
correlation rests on several convergent features rather than a manufacturer statement that Example 5 is the production
prescription:

1. Nikon specifies the production lens as a 17-55 mm constant-f/2.8 DX zoom with 14 elements in 10 groups, while
   Example 5 is a 17.55-52.70 mm, approximately f/2.9, 14-element/10-group zoom.
2. Nikon specifies three aspherical elements; Example 5 has three aspherical surfaces, each on a different element.
3. Nikon specifies internal focusing; Example 5 focuses by translating only an internal three-element carrier within G2.
4. The patent priorities are from 2003 and 2004, and Nikon records the production 17-55 mm f/2.8G IF-ED as released in
   2004 with the D70.
5. Nikon specifies Nikon F-bayonet and DX-format coverage for the production lens, matching the product identity stored
   in the data file. These are production metadata, not patent prescription quantities.

Nikon's marketed focal-length range of 17-55 mm and aperture of f/2.8 are therefore kept separate from the patent design
values. No uniform scaling is applied: the wide and tele endpoint ratios do not define one common scale factor. All
radii, spacings, refractive indices, Abbe numbers, image-plane spacings, and aspherical coefficients remain at the
Example 5 scale.

The patent does not publish clear semi-diameters or a stop diameter for Example 5. The stop's axial location is
source-published between G2 and G3, but the modeled clear apertures and wide-state stop semi-diameter are inferred from
ray containment, Figure 9 proportions, and geometry constraints. No sensor cover glass, filter, inactive dummy plane, or
mechanical component is included in the sequential optical model.

## Optical Architecture

Example 5 is a negative-lead four-group zoom with power sequence negative-positive-negative-positive. The aperture stop
lies between G2 and G3 and moves with G3 during zooming, as specified in ¶¶0089-0090 and shown in Figure 9. The final
prescription contains 14 physical glass elements in 10 air-separated groups, including four cemented pairs.

Independent paraxial reduction of the final prescription gives the following isolated functional-group focal lengths.
These are group powers computed with each functional group isolated between air spaces; they are not the same as the
standalone focal lengths of individual elements and do not by themselves describe each group's in-situ contribution in
the complete zoom.

| Functional group | Surface span | Computed group focal length |
|---|---|---:|
| G1 | 1-5 | -31.428081 mm |
| G2 | 6A-12 | +34.986201 mm |
| G3 | STO-18 | -32.618705 mm |
| G4 | 19-25 | +36.537512 mm |

G1 is the negative front group. It combines a large negative meniscus with a cemented negative-positive rear pair. Its
position establishes the negative-lead character and supplies the strong front-end divergence required by the wide
field.

G2 is positive. It contains the three-element internal-focus carrier—L4 followed by the L5/L6 cemented pair—and a rear
positive singlet L7. During zooming the whole G2 assembly translates as a group. During focusing, only surfaces 6A-10
move; L7 remains behind as the stationary rear member of G2 relative to the focus motion.

G3 is negative and carries the aperture stop. It consists of the L8/L9 cemented pair followed by the negative singlet
L10. Its placement between the positive G2 and positive G4 groups provides a second negative-power section in the relay,
and the patent explicitly couples the stop to this group's zoom motion.

G4 is positive and contains four elements: the special-glass positive meniscus L11, a positive singlet L12, and the
rear L13/L14 cemented pair. It forms the final positive group before the image plane.

The patent's three tabulated zoom gaps move monotonically from wide to tele:

| Gap | Wide | Intermediate | Tele |
|---|---:|---:|---:|
| D5, G1 to G2 | 42.3175 mm | 14.6473 mm | 1.7500 mm |
| D12, G2 to stop/G3 | 1.3500 mm | 13.2558 mm | 26.8816 mm |
| D18, G3 to G4 | 19.8298 mm | 14.0455 mm | 5.7725 mm |

Absolute motion referenced to the fixed image plane is more complicated than these three gaps suggest. The computed G1
front position moves imageward by 17.399960 mm from wide to intermediate and then objectward by 1.632991 mm from
intermediate to tele. The G3/stop carrier similarly moves imageward by 1.635560 mm and then objectward by 0.904491 mm.
G2 and G4 do not reverse over the two modeled zoom segments. The three tabulated air gaps themselves remain monotonic;
the reversals arise only when carrier positions are normalized to the fixed image plane.

Under the project's strict terminology, the complete system is not a telephoto lens at any modeled zoom state because
its total-track/EFL ratio remains greater than one. Wide and intermediate satisfy the strict retrofocus criterion
BFD > EFL; the tele state does not. The more general and source-faithful architectural description is therefore
"negative-lead four-group zoom" rather than applying one global retrofocus or telephoto label to the full range.

The aperture data contain a source discrepancy. Table 5 prints FNO = 2.89 once for Example 5, whereas Figure 10 labels
the wide, intermediate, and tele aberration plots as 2.89, 2.90, and 2.91. The modeled `nominalFno` values preserve the
state-specific Figure 10 values because they control pupil normalization. Nikon's marketed maximum aperture remains
separately recorded as f/2.8.

## Element-by-Element Analysis

The focal length `f` quoted for each element below is the independently verified focal length of that physical element
isolated in air. It is a standalone power descriptor only. Cemented-pair net power and in-situ group behavior differ
because the adjoining refractive media and spacings change the optical context.

### L1 — Negative Meniscus with Rear Asphere

**nd = 1.744429, νd = 49.55. Glass: M-NBF1 catalog equivalent (patent 744495; production supplier unspecified). f = -49.765033 mm.**

L1 is the first and largest element of G1. Its negative meniscus form supplies a substantial part of the front group's
negative power. Surface 2A is the first of the three aspherical surfaces and is the strongest geometric asphere in the
modeled prescription.

M-NBF1 is used as a supplier-neutral dispersion proxy because its catalog coordinate falls within the project's strict
compatibility window. The patent's 744495 coordinate remains explicit, and the proxy does not identify Nikon's
production supplier or melt.

### L2 — Biconcave Negative, Special-Glass Element SL1

**nd = 1.518601, νd = 69.98. Glass: J-PKH1 catalog equivalent (patent 519700; production supplier unspecified). f = -61.228901 mm.**

L2 is the patent's SL1 element. It is biconcave and cemented to L3 at surface 4. Paragraph 0125 identifies SL1 as the
second negative lens of G1 and states that it is made from the patent's "special glass" satisfying the principal glass
conditions. The more general discussion in ¶¶0052-0054 associates this first-group glass condition with control of
off-axis chromatic coma.

J-PKH1 supplies a coordinate-compatible catalog dispersion curve. This remains a modeling proxy rather than evidence
that Nikon used a HIKARI production melt in the numerical example.

### L3 — Positive Meniscus, Cemented Partner to L2

**nd = 1.805180, νd = 25.43. Glass: SF6 class / 805254. f = +121.114440 mm.**

L3 is the positive member cemented directly to L2. Its standalone positive power is much weaker in magnitude than L2's
standalone negative power, but those isolated-air figures are not the net power of the cemented pair. The L2/L3 pair
belongs to the negative G1 assembly and must be interpreted in that in-situ context.

The high index and low Abbe number contrast with L2's lower-index, higher-Abbe coordinate. The analysis does not infer a
specific vendor or anomalous-dispersion behavior from that contrast alone.

### L4 — Biconvex Positive with Front Asphere

**nd = 1.677900, νd = 55.34. Glass: S-LAL12 (OHARA). f = +95.399474 mm.**

L4 is the first element of G2 and the first element of the rigid internal-focus carrier. Surface 6A is aspherical.
During
close focusing L4 translates imageward together with the following cemented pair L5/L6, while L7 does not join this
focus translation.

The S-LAL12 annotation is retained because the stored d-line coordinates exactly match the current OHARA catalog entry.
This is a catalog-coordinate identification, not a statement that the patent names OHARA as Nikon's supplier.

### L5 — Negative Meniscus, Front Member of the G2 Cemented Pair

**nd = 1.846660, νd = 23.78. Glass: S-TIH53 (OHARA). f = -55.950331 mm.**

L5 is the negative member of the moving L5/L6 cemented pair. Its dense, low-Abbe glass and negative standalone power are
paired with L6's positive, higher-Abbe power at the cemented interface on surface 9.

The pair moves rigidly with L4 during focusing, so its internal cemented geometry is preserved while the air spaces on
its two sides change. This mechanism is directly specified by ¶0126.

### L6 — Biconvex Positive, Rear Member of the G2 Cemented Pair

**nd = 1.618000, νd = 63.38. Glass: 618634 phosphate-crown class. f = +47.297017 mm.**

L6 supplies the positive member of the moving G2 cemented pair. Its standalone focal length is shorter in magnitude than
that of L5, but the actual cemented doublet behavior depends on the shared interface and the two glass indices rather
than on a simple sum of isolated powers.

The final glass annotation remains a class designation. No vendor-specific line indices or Sellmeier assignment are
introduced beyond what the stored prescription can defend.

### L7 — Biconvex Positive with Front Asphere

**nd = 1.739929, νd = 49.25. Glass: Unmatched (740493; nd=1.739929, νd=49.25). f = +58.620218 mm.**

L7 is the rear positive singlet of G2. Surface 11A is aspherical. It participates in G2's zoom translation but is not
part of the focus carrier, so close focusing changes the spacing between L6 and L7 while leaving L7 itself outside the
rigid surfaces-6A-through-10 focus motion.

The 740493 coordinate remains explicitly unmatched. A current named catalog candidate differs too much in refractive
index to justify relabeling, so the data preserve the patent coordinate rather than forcing a glass identity.

### L8 — Biconvex Positive, Front Member of the G3 Cemented Pair

**nd = 1.846660, νd = 23.78. Glass: S-TIH53 (OHARA). f = +28.922092 mm.**

L8 begins the glass portion of G3 immediately after the aperture stop. It is the positive member of the L8/L9 cemented
pair and has the strongest positive standalone element power in the prescription.

Because G3 as a whole has negative computed power, L8's positive standalone contribution is more than offset by the
negative elements that follow, especially L9 and L10. This illustrates why standalone element power must not be used as
a substitute for functional-group power.

### L9 — Biconcave Negative, Rear Member of the G3 Cemented Pair

**nd = 1.804000, νd = 46.58. Glass: S-LAH65V (OHARA). f = -26.604968 mm.**

L9 is cemented to L8 at surface 15 and provides strong negative standalone power inside G3. The S-LAH65V annotation
is an
exact d-line coordinate match to the current OHARA catalog.

Together with L10, L9 converts the local positive power of L8 into a net negative functional group. The pair's actual
in-situ action includes the cemented L8/L9 interface and the air space before L10.

### L10 — Biconcave Negative, Rear Singlet of G3

**nd = 1.804000, νd = 46.58. Glass: S-LAH65V (OHARA). f = -35.114431 mm.**

L10 is the rear negative singlet of G3 and uses the same stored glass coordinate as L9. It completes the negative G3
assembly before the variable D18 gap to G4.

The 1.9 mm air space between surfaces 16 and 17 is also the tightest modeled cross-gap geometry in the prescription. At
the shared 9.5 mm semi-diameter, the verified sag intrusion is 1.661544 mm, or 0.874497 of the gap, below the model's
0.90 clearance limit.

### L11 — Positive Meniscus, Special-Glass Element SL2

**nd = 1.497820, νd = 82.52. Glass: J-FKH1 catalog equivalent (patent 498825; production supplier unspecified). f = +70.995952 mm.**

L11 is the first positive element of G4 and is identified by the patent as SL2. Paragraphs 0055-0057 explain the purpose
of the fourth-group special-glass condition in terms of chromatic correction, particularly upper-ray chromatic coma and
on-axis chromatic aberration.

The high Abbe number is retained directly from the patent. It is not sufficient by itself to establish anomalous partial
dispersion, fluorite equivalence, or apochromatic performance.

### L12 — Biconvex Positive

**nd = 1.618000, νd = 63.38. Glass: 618634 phosphate-crown class. f = +89.140324 mm.**

L12 is the central positive singlet of G4. It uses the same stored glass coordinate as L6 but is a separate physical
element with a different curvature pair and standalone power.

Its placement between the front special-glass positive element and the rear cemented pair makes it part of the positive
relay group rather than a focus or zoom-separation element in its own right.

### L13 — Biconvex Positive, Special-Glass Element SL3

**nd = 1.497820, νd = 82.52. Glass: J-FKH1 catalog equivalent (patent 498825; production supplier unspecified). f = +41.482500 mm.**

L13 is the patent's SL3 element and the positive front member of the rear G4 cemented pair. It shares the same d-line
coordinate as L11 but has substantially stronger standalone positive power because of its different curvatures.

As with L11, the analysis treats the high-Abbe coordinate as a source fact without adding unreported partial-dispersion
properties.

### L14 — Negative Meniscus, Rear Cemented Partner

**nd = 1.846660, νd = 23.78. Glass: S-TIH53 (OHARA). f = -43.345344 mm.**

L14 is cemented to L13 at surface 24 and is the final glass element of the prescription. Its negative standalone power
opposes L13's positive power within the rear pair, while the complete G4 group remains positive.

Surface 25 is the final refracting surface. The patent does not print the subsequent image-plane distance, so the model
uses the independently solved optical back focal distance as the final zoom-dependent spacing rather than substituting
the camera's mechanical flange distance.

## Glass Identification and Selection

All stored indices and Abbe numbers are d-line quantities. Example 5 publishes `nd` and `νd` but no per-element `nC`,
`nF`, `ng`, `PgF`, or `dPgF`. The final data therefore avoid vendor-specific spectral augmentation except where a glass
name is used as a coordinate-compatible catalog label. No element carries authored line-index or anomalous-partial-
dispersion fields.

| Data-file glass annotation | nd | νd | Elements | Audit status |
|---|---:|---:|---|---|
| M-NBF1 catalog equivalent (patent 744495; production supplier unspecified) | 1.744429 | 49.55 | L1 | Supplier-neutral proxy; residual Δn=-0.001129, Δν=-0.22 |
| J-PKH1 catalog equivalent (patent 519700; production supplier unspecified) | 1.518601 | 69.98 | L2 | Supplier-neutral proxy; residual Δn=-0.000001, Δν=-0.09 |
| SF6 class / 805254 | 1.805180 | 25.43 | L3 | Class/code; Schott SF6 is an exact coordinate match |
| S-LAL12 (OHARA) | 1.677900 | 55.34 | L4 | Exact current OHARA coordinate match |
| S-TIH53 (OHARA) | 1.846660 | 23.78 | L5, L8, L14 | Exact current OHARA coordinate match |
| 618634 phosphate-crown class | 1.618000 | 63.38 | L6, L12 | Class/code; CDGM H-ZPK1A residual Δn=0, Δν=-0.01 |
| Unmatched (740493; nd=1.739929, νd=49.25) | 1.739929 | 49.25 | L7 | Unmatched; L-LAM60 Δn=-0.003271, Δν=-0.05 |
| S-LAH65V (OHARA) | 1.804000 | 46.58 | L9, L10 | Exact current OHARA coordinate match |
| J-FKH1 catalog equivalent (patent 498825; production supplier unspecified) | 1.497820 | 82.52 | L11, L13 | Supplier-neutral proxy; residual Δn=0, Δν=+0.05 |

The patent identifies three positions as "special glass": SL1 at L2 in G1 and SL2/SL3 at L11/L13 in G4. Those labels
are patent design roles, not vendor glass names. Nikon markets the production 17-55 mm lens as using three ED glass
elements, but the selected patent does not publish enough spectral data to establish a one-to-one identity between its
three special-glass positions and Nikon's production ED designations. The analysis therefore keeps the marketing fact
and the patent glass coordinates separate.

The chromatic strategy that can be stated directly from the patent is narrower. The principal special-glass conditions
require high Abbe number, refractive index above 1.40, and a positive value of the patent's combined index-dispersion
expression. The patent explains that the G1 special glass assists lower-ray chromatic-coma correction, while special
glasses in G4 assist upper-ray chromatic-coma and axial chromatic correction. These are source-stated design purposes;
no apochromatic or anomalous-partial-dispersion claim is added.

## Focus Mechanism

Example 5 uses internal focusing. Paragraph 0126 states that the first G2 lens and the following cemented second/third
lenses move together toward the image for close focus. In the final surface labels this is the rigid carrier spanning
surfaces 6A-10: L4 plus the cemented L5/L6 pair. L7 remains outside the focus translation.

The patent publishes infinity zoom spacings and finite-conjugate block magnifications, but it does not publish the
finite-focus D5 and D10 spacings. The close-focus model is therefore a **CONSTRAINED_RECONSTRUCTION**, not a direct
transcription of a missing table. It uses the one degree of freedom specified by the mechanism:

- D5 increases by an imageward translation `δ`.
- D10 decreases by the same `δ`.
- D5 + D10 is conserved independently at each zoom state.

The resulting close endpoints are:

| Zoom state | Carrier travel δ | D5 at infinity → close | D10 at infinity → close | Fixed-image-plane close conjugate |
|---|---:|---:|---:|---:|
| Wide | 4.002402 mm | 42.317500 → 46.319902 mm | 4.862400 → 0.859998 mm | 398.970335 mm |
| Intermediate | 3.551058 mm | 14.647300 → 18.198358 mm | 4.862400 → 1.311342 mm | 398.968414 mm |
| Tele | 3.856624 mm | 1.750000 → 5.606624 mm | 4.862400 → 1.005776 mm | 398.986025 mm |

The three modeled fixed-image-plane conjugates average 398.974925 mm. This is a computed model endpoint, not a Nikon
published minimum focusing distance. Nikon specifies 0.36 m MFD and 0.20× maximum reproduction ratio for the production
lens; those marketed values are not substituted into the patent reconstruction.

The patent's close rows also contain a small internal numerical inconsistency. Using the printed first-block
magnifications literally gives a different object distance and the product of the published block magnifications does
not exactly equal the coarsely printed total β. With the reconstructed carrier travel, the non-fitted downstream block
magnifications are reproduced to a maximum absolute residual of 4.7070e-6, while the products of the internally
consistent block magnifications are approximately -0.066916, -0.114628, and -0.195538 rather than the printed -0.065,
-0.112, and -0.191. Traced to the authored fixed image plane, however, the complete-system paraxial magnifications are
-0.065321, -0.112007, and -0.190758, closely matching the coarsely printed total β values. The model therefore preserves
the source-described mechanism without treating the product of independently rounded block magnifications as an exact
rear-plane constraint.

## Aspherical Surfaces

Example 5 has three aspherical surfaces: 2A on L1, 6A on L4, and 11A on L7. The patent writes its sag equation in the
form

$$
x = \frac{c y^2}{1 + \sqrt{1 - \kappa c^2 y^2}} + C_4y^4 + C_6y^6 + C_8y^8 + C_{10}y^{10} + C_{12}y^{12},
$$

where dimensional consistency requires `c = 1/R`. The prose in ¶0096 calls `c` a radius, but the printed equation
requires curvature; the model follows the equation. Relative to the standard LensVisualizer conic denominator
`sqrt(1 - (1+K)(y/R)^2)`, the conversion is

$$
K_{standard} = \kappa_{patent} - 1.
$$

No scale transformation is applied, so the stored `A4` through `A12` values equal the patent's `C4` through `C12`
values numerically.

| Surface | Standard K | A4 | A6 | A8 | A10 | A12 |
|---|---:|---:|---:|---:|---:|---:|
| 2A | -1 | 4.40610e-6 | -5.89290e-11 | 1.12530e-11 | -1.85420e-14 | 1.32970e-17 |
| 6A | 0 | -1.92900e-6 | 2.71180e-10 | 2.50890e-12 | 0 | 0* |
| 11A | 0 | 1.56610e-6 | -1.53820e-10 | -4.17120e-13 | -6.25410e-16 | 0* |

`*` The patent does not print C12 for surfaces 6 or 11. Zero is used only as the explicit absent-term model value. The
schema also stores A14 = 0 because the patent polynomial terminates at C12; A14 is not a source-published coefficient.

The semi-diameters used to evaluate the modeled rims are inferred rather than patent values. At the verified 18.0 mm
semi-diameter of 6A, the asphere lies 0.165627 mm below its same-radius spherical reference. At the patent-figure-refined
16.0 mm semi-diameter of 11A, it lies 0.0976 mm above its same-radius spherical reference. No same-radius spherical departure
is quoted for 2A at its 26.0 mm modeled semi-diameter because that height exceeds the reference sphere's radius and the
spherical sag is not real there. The K = -1 asphere itself remains geometrically valid; its verified rim-slope angle is
59.594436°.

The front 2A asphere is therefore not treated as a small perturbation to a conventional spherical rim. Its conic term is
fundamental to the realizable surface shape at the modeled clear aperture. The 6A and 11A surfaces are spherical-base
(`K = 0`) even-asphere departures with polynomial corrections of opposite leading sign.

## Chromatic Correction Strategy

The patent's chromatic strategy is expressed primarily through glass-coordinate conditions rather than through published
line-by-line dispersion curves. SL1 in G1 has nd = 1.518601 and νd = 69.98; SL2 and SL3 in G4 each have nd = 1.497820
and νd = 82.52. All three satisfy the patent's principal special-glass inequalities.

The source explains the intent spatially. In G1, the selected negative special glass is associated with lower off-axis
rays and chromatic-coma correction. In G4, positive special-glass elements are associated with upper off-axis rays,
chromatic coma, and on-axis chromatic correction. The design uses high-Abbe positive elements in the rear group together
with much lower-Abbe dense glasses elsewhere, but `nd` and `νd` alone do not establish secondary-spectrum behavior.

For that reason the model makes no APO claim, does not label the special glasses as fluorite, and does not synthesize
`dPgF`, `nC`, `nF`, or `ng` from modern catalog analogues. The named OHARA entries have public catalog dispersion data,
but those catalog curves do not identify the remaining Nikon melts and are not copied into authored line-index fields.

## Conditional Expressions

The patent's principal special-glass conditions are

$$
67.0 < \nu_d,
$$

$$
1.40 < N,
$$

and

$$
0 < N + 0.0032\nu_d - 1.734.
$$

For the selected Example 5 coordinates, the third expression evaluates to +0.008537 for SL1 and +0.027884 for each of
SL2 and SL3. All three therefore satisfy the principal glass condition set. The narrower preferred expression
`0 < N + 0.0122νd - 2.5188` is not satisfied by these Example 5 coordinates: it evaluates to -0.146443 for SL1 and
-0.014236 for SL2/SL3. This is not a contradiction because the patent presents the narrower set as preferred rather than
as a requirement met by every example.

The four group-power conditions are also satisfied. Independent computation from the final prescription gives:

| Condition | Patent range | Example 5 computed value |
|---|---:|---:|
| (-f1) / fw | 1.5 < value < 2.3 | 1.790774 |
| f2 / sqrt(fw·ft) | 0.75 < value < 1.6 | 1.150411 |
| (-f3) / f2 | 0.6 < value < 1.2 | 0.932331 |
| f4 / sqrt(fw·ft) | 0.8 < value < 2.0 | 1.201421 |

These reproduce Table 12's rounded 1.79, 1.15, 0.93, and 1.20 values. The underlying computed group focal lengths are
-31.428081, +34.986201, -32.618705, and +36.537512 mm for G1 through G4 respectively.

## Verification Summary

Independent sequential height/reduced-angle tracing and an ABCD matrix check reproduce the patent's three infinity
focal lengths from the final prescription:

| State | Patent f | Computed EFL | Computed BFD from surface 25 | Total first-vertex to image track |
|---|---:|---:|---:|---:|
| Wide | 17.55 mm | 17.549976901 mm | 38.599926339 mm | 173.460026339 mm |
| Intermediate | 31.43 mm | 31.427949152 mm | 42.748666069 mm | 156.060066069 mm |
| Tele | 52.70 mm | 52.699891911 mm | 51.926156615 mm | 157.693056615 mm |

The post-surface-25 BFD values are computed because Table 5 does not print the image-plane spacing. They are optical
vertex-to-image distances and are not Nikon F-mount flange distances.

The surface-by-surface Petzval sum, using `φ/(n·n′)`, is +0.004239106184 mm⁻¹, with reciprocal magnitude 235.898785 mm.
This is a computed prescription property, not a source-published field-curvature radius.

The inferred semi-diameters satisfy the current geometry checks over every authored infinity and close zoom endpoint.
The minimum verified element edge thickness is 0.519483 mm, the maximum actual rim slope is 59.594436° at 2A, and the
largest shared-band cross-gap intrusion fraction is 0.874497 at the 16-to-17 gap. Fresh exact meridional tracing with
the authored aspheres and Snell refraction contains the full source-field chief ray at all three infinity states and the
on-axis wide-open marginal ray at every infinity and modeled close state; the tightest non-stop case is surface 16 at
tele, using 0.978371 of its clear semi-diameter at infinity and 0.978227 at close. Extreme full-field marginal rays are
not used as a universal clear-aperture sizing requirement because off-axis pupil vignetting is permissible in the model.

The stop placement itself is source-published. Its clear semi-diameter is not. The base stored stop semi-diameter,
7.968287391 mm, is the inferred wide-state value consistent with the Figure 10 f/2.89 normalization. The corresponding
paraxial stop semi-diameters required by the state-specific f-numbers are 7.968287391, 8.551649863, and 10.281494283 mm.
The zoom-dependent `nominalFno` values provide this aperture normalization in the data model.

No uniform geometric scaling, sensor-cover compensation, filter omission correction, or dummy-plane removal changes the
Example 5 prescription. The only non-source geometric additions are the computed rear image-plane spacings, the
constrained close-focus D5/D10 states, and the inferred clear semi-diameters/aperture size described above.

## Sources and References

1. Takayuki Sensui, **US 2005/0013015 A1, "Zoom Lens System,"** Nikon Corporation, published January 20, 2005.
   Example 5: ¶¶0124-0129, Table 5, Figures 9 and 10. General stop/focus/asphere notation: ¶¶0089-0099. Conditional
   expressions and glass rationale: ¶¶0050-0085.
2. Nikon USA, **AF-S DX Zoom-Nikkor 17-55mm f/2.8G IF-ED** product specifications:
   https://www.nikonusa.com/p/af-s-dx-zoom-nikkor-17-55mm-f28g-if-ed/2147/overview
3. Nikon Imaging, **NIKKOR — The Thousand and One Nights No. 88**, DX lens-lineup history; records the 17-55 mm f/2.8G
   IF-ED as released in 2004 with the D70:
   https://imaging.nikon.com/imaging/information/story/0088/index.html
4. OHARA, **S-LAL optical-glass family**:
   https://oharacorp.com/glass-type/s-lal/
5. OHARA, **S-TIH53**:
   https://oharacorp.com/glass/s-tih53/
6. OHARA, **S-LAH optical-glass family**:
   https://oharacorp.com/glass-type/optical-glass/s-lah/
7. Hikari Glass, **J-PK optical-glass family** (J-PKH1):
   https://www.hikari-g.co.jp/optical_glass/general_optical_glass/j-pk/
8. Hikari Glass, **J-FK optical-glass family** (J-FKH1):
   https://www.hikari-g.co.jp/optical_glass/general_optical_glass/j-fk/
9. SCHOTT Advanced Optics, **Optical Glass** catalog/search entry for SF6:
   https://www.us.schott.com/shop/advanced-optics/en/search/
10. CDGM, **Optical Glass Database** (H-ZPK1A):
    https://www.cdgmgd.com/database/toWebDatabase.htm?typeId=5&url=database
11. OHARA, **Low Softening Temperature Optical Glass** (L-LAM60):
    https://oharacorp.com/optical-glass/low-softening-temperature-optical-glass/
