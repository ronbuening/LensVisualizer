## Patent Reference and Design Identification

**Patent:** JP 2022-155067 A  
**Application Number:** JP 2021-58398  
**Filed:** 2021-03-30  
**Published:** 2022-10-13  
**Inventors:** 宮川 直己; 細野 誉士雄  
**Applicant:** Sony Group Corporation  
**Title:** ズームレンズおよび撮像装置 (Zoom lens and imaging apparatus)  
**Embodiment analyzed:** Example 1 / 実施例1

The prescription represented here is Example 1 of JP 2022-155067 A. The patent describes a fisheye zoom for a
36.0 × 24.0 mm full-frame image sensor, with an equisolid-angle circular-fisheye state at the short end and an
equidistant diagonal-fisheye state at the long end. Example 1 contains 16 elements in 13 air-separated groups and uses
four zoom-moving groups: G1, G2A, G2B, and G2C. G2B, the L13–L14 pair, is also identified by the patent as the focus
group. See JP 2022-155067 A, ¶0075–¶0083, Tables 1–5, and Fig. 1.

The production correlation to the Sony FE 8-14mm F3.5 Fisheye G (SEL814G) is strong but is not manufacturer-confirmed.
The identification rests on several convergent points:

1. Sony specifies the production lens as 13 groups / 16 elements, matching Example 1 exactly in physical count.
2. The patent and Sony both describe a full-frame fisheye zoom that changes from circular coverage at the wide end to
   diagonal coverage at the tele end.
3. Both sources identify the wide-end mapping as equisolid-angle and the tele-end mapping as equidistant.
4. The patent filing and publication precede Sony's 2026 product announcement by several years.

Two numerical differences prevent the patent example from being presented as a confirmed production prescription.
Example 1 publishes 7.55–12.59 mm and F2.90/F2.89, whereas Sony markets the production lens as 8–14 mm F3.5. No single
uniform scale maps both patent focal-length endpoints onto the marketed endpoints, so the data file preserves the patent
geometry without scaling and stores the marketed values separately. Sony's public product and specification pages do not
identify JP 2022-155067 A or Example 1 as the production formula.

The source patent is therefore the authority for the prescription, while Sony's product documentation is used only for
production identity, mount, format, marketed focal range/aperture, projection description, and close-focus metadata.

## Optical Architecture

Example 1 is a four-moving-group fisheye zoom built around a negative front group and a net-positive rear section. The
patent defines G1 as negative and G2 as positive overall; G2 is subdivided into positive G2A, positive G2B, and negative
G2C. The final data file preserves those four functional groups and the patent's 16-element / 13-group construction.

Paraxial tracing of the finalized data gives the following group focal lengths. These are in-situ group powers calculated
from the actual group surface ranges, not sums of isolated element powers:

| Group | Elements | Calculated focal length | Patent function / state role |
|---|---|---:|---|
| G1 | L1–L6 | -11.290002 mm | Negative front group; zoom-moving |
| G2A | L7–L12 | +18.386212 mm | Positive subgroup containing the aperture stop; zoom-moving |
| G2B | L13–L14 | +62.018437 mm | Positive zoom-moving focus group |
| G2C | L15–L16 | -58.586386 mm | Negative rear subgroup; zoom-moving |

These values reproduce patent Table 5 to the precision permitted by the rounded prescription. JP 2022-155067 A,
Table 5; ¶0076–¶0082.

With the image plane held fixed, the Wide-to-Tele axial shifts computed from the published endpoint spacings are
+3.72 mm for G1, -9.48 mm for G2A, -6.54 mm for G2B, and -7.78 mm for G2C, where positive motion is toward the image.
Thus G1 moves toward the image while the three G2 subgroups move toward the object between the two published endpoints.
Only the Wide and Tele infinity states are published; no claim is made about monotonicity or reversal at unreported
intermediate focal lengths.

The computed Gaussian effective focal lengths are 7.550345 mm at Wide and 12.590118 mm at Tele. Paraxial back focal
distances from the final refracting surface S30 are 14.087300 mm and 21.870789 mm, respectively. Because BFD exceeds EFL
at both published endpoints, the implemented model satisfies the project's narrow paraxial criterion for describing the
layout as retrofocus-like; the patent itself does not use that label.

The principal architectural distinction is not merely zoom ratio but the deliberate change in image mapping. The patent
states that an ordinary fisheye zoom tends to preserve a single projection law, whereas this design intentionally changes
projection with zoom so that a relatively modest focal-length change can move from circular to diagonal fisheye coverage.
Condition (1) measures that change against an equisolid reference, while condition (4) places a negative lens unit in G2
to support the long-end mapping behavior. JP 2022-155067 A, ¶0031–¶0036 and ¶0053–¶0057.

The data model uses `fisheye-equisolid` as a fixed reference convention across the zoom because the current schema exposes
one projection kind and the patent itself uses equisolid image height as the condition-(1) baseline at both endpoints.
This is a reference convention only. The patent's Tele state remains an equidistant diagonal-fisheye design, not an
equisolid design.

## Element-by-Element Analysis

The focal lengths in this section are standalone thick-element focal lengths calculated with each physical element placed
independently in air. They describe each element's isolated paraxial power and must not be confused with cemented-stack
power or in-situ group behavior. Where the patent does not assign an element-specific aberration function, the discussion
is intentionally limited to geometry, group membership, cementing, aspheric status, and patent-defined conditional roles.

### L1 — Negative Meniscus, convex to object

**nd = 1.80420, νd = 46.5. Glass: 804465 class (supplier unproven). f = -27.330019 mm.**

L1 is the first element of negative group G1 and is a negative meniscus convex toward the object, exactly as described in
¶0077. Its strongly curved front-end placement is part of the wide-angle intake geometry visible in patent Fig. 1.
Condition (7) applies directly to this first element's two radii; the final prescription gives 0.538867 for
`(R11-R12)/(R11+R12)`, reproducing the patent's tabulated 0.539. The patent links this shape condition to maintaining a
fisheye-scale field while avoiding an unsuitable first-element form; that is the source-supported role claimed here.

### L2 — Negative Meniscus with two aspherical surfaces

**nd = 1.76802, νd = 49.2. Glass: 768492 class (supplier unproven). f = -25.030846 mm.**

L2 is the second negative meniscus in G1 and carries aspherical surfaces 3A and 4A. The patent explicitly identifies both
surfaces as aspherical in ¶0077. Condition (8) constrains the balance between L1 and L2 power; the calculated standalone
ratio `fL2/fL1` is 0.915874, compared with 0.916 in Table 21. The patent discusses that ratio in terms of maintaining the
front-group balance needed for field coverage, compactness, and correction difficulty. No more specific aberration
assignment is stated for L2 alone.

### L3 — Positive Meniscus, convex to object

**nd = 1.85451, νd = 25.2. Glass: 855252 class (supplier unproven). f = +53.675582 mm.**

L3 is the first positive element inside G1. The patent describes it only by shape and group membership: a positive meniscus
convex toward the object, following the two front negative menisci. It is not cemented and is not aspherical. The final
analysis therefore does not attribute a specific aberration correction function to L3 beyond its verified positive
standalone power within a group whose net power remains negative. JP 2022-155067 A, ¶0077.

### L4 — Biconcave Negative

**nd = 1.72916, νd = 54.7. Glass: 729547 class (supplier unproven). f = -18.089579 mm.**

L4 is a biconcave negative element in G1. It is an air-spaced spherical element and has substantially stronger isolated
negative power than L5. The patent does not assign L4 a separate named correction task, so its role is stated only as part
of the verified negative front-group power distribution. JP 2022-155067 A, ¶0077.

### L5 — Negative Meniscus, cemented to L6

**nd = 1.80420, νd = 46.5. Glass: 804465 class (supplier unproven). f = -100.498817 mm.**

L5 is a weak negative meniscus convex toward the object and forms cemented pair C1 with L6. Its standalone focal length is
not the power of the cemented pair. The final-model trace gives the complete L5+L6 cemented unit a net focal length of
+28.313239 mm in air, demonstrating why isolated powers and cemented-stack power must be kept separate. JP 2022-155067 A,
¶0077 and Table 1.

### L6 — Biconvex Positive, cemented to L5

**nd = 1.59270, νd = 35.4. Glass: 593354 class (supplier unproven). f = +22.049562 mm.**

L6 is the positive biconvex member of C1 and closes G1 at surface 11. The shared L5/L6 interface is represented as a true
cemented junction in the data: the interface medium is L6 glass rather than an invented cement layer. The pair's positive
net power acts inside a G1 assembly whose verified group focal length is still negative, -11.290002 mm. The patent does not
state a more specific individual function for L6. JP 2022-155067 A, ¶0077; Table 1.

### L7 — Positive Meniscus, convex to object

**nd = 1.80809, νd = 22.8. Glass: 808228 class (supplier unproven). f = +78.443548 mm.**

L7 begins positive subgroup G2A. The patent places the aperture stop between L7 and L8, making L7 the last powered element
before the stop in this subgroup. No element-specific aberration role is assigned by the source. The verified claim is that
L7 is a positive meniscus within G2A and participates in a subgroup whose calculated focal length is +18.386212 mm.
JP 2022-155067 A, ¶0079 and ¶0082.

### L8 — Biconvex Positive, cemented to L9

**nd = 1.49700, νd = 81.6. Glass: 497816 class (supplier unproven). f = +21.092182 mm.**

L8 is the positive member of cemented pair C2, immediately image-side of the aperture stop. Its high Abbe number is a
source coordinate, not by itself evidence of a particular supplier or of apochromatic behavior. Together with L9, the
complete cemented unit has a calculated net focal length of -123.009485 mm in air, despite L8's positive standalone power.
JP 2022-155067 A, ¶0079; Table 1.

### L9 — Negative Meniscus, concave to object, cemented to L8

**nd = 1.77250, νd = 49.6. Glass: 773496 class (supplier unproven). f = -18.023230 mm.**

L9 is the negative member of C2 and shares surface 16 with L8. The final data assigns that cemented interface to the
downstream L9 medium, preserving the physical glass transition without an intervening air or cement layer. The patent
identifies the shape and cemented relationship but does not give L9 a separate named correction function. JP 2022-155067 A,
¶0079.

### L10 — Biconvex Positive, cemented to L11

**nd = 1.49700, νd = 81.6. Glass: 497816 class (supplier unproven). f = +17.032918 mm.**

L10 is the positive biconvex member of cemented pair C3. Its isolated positive power is substantially stronger than the
isolated negative power of L11, but the shared curvature and finite thickness matter: the traced L10+L11 cemented unit has
a net focal length of +22.965224 mm in air. This distinction is retained because adding inverse standalone focal lengths
would not reproduce the cemented stack. JP 2022-155067 A, ¶0079; Table 1.

### L11 — Negative Meniscus, concave to object, cemented to L10

**nd = 2.00100, νd = 29.1. Glass: 001291 class (supplier unproven). f = -74.193082 mm.**

L11 is the negative member of C3. Its d-line index is the highest in Example 1, but the patent does not identify a vendor
melt and the final data therefore retains only the 001291 coordinate class. No vendor-specific dispersion curve is used in
the authored element. L11 remains part of positive G2A after cementing and in-situ spacing are included. JP 2022-155067 A,
¶0079; Table 1.

### L12 — Positive Meniscus, concave to object, two aspherical surfaces

**nd = 1.49710, νd = 81.6. Glass: 497816 class (supplier unproven). f = +64.064303 mm.**

L12 closes G2A and carries aspherical surfaces 21A and 22A. The patent explicitly identifies both surfaces as aspherical.
An independent catalog recheck found HOYA M-FCD1 at `nd = 1.49710`, `νd = 81.56`, code 497-816, which matches the
patent coordinate at its printed precision. The authored label is therefore the supplier-neutral 497816 coordinate class;
the catalog match does not establish that Sony used HOYA glass. The large modeled polynomial departures on
21A and 22A are discussed in the asphere section; they are evaluated at modeled, not patent-published, clear apertures.
JP 2022-155067 A, ¶0079; Tables 1 and 4.

### L13 — Negative Meniscus, concave to object

**nd = 1.73037, νd = 32.2. Glass: 730322 class (supplier unproven). f = -74.142851 mm.**

L13 is the negative member of the two-element G2B focus group. It is spherical and air-spaced from L14. The patent defines
G2B as the focus group but does not attribute the focus action to L13 alone. The pair's in-situ group focal length is
+62.018437 mm, so L13's negative standalone power should not be used as a proxy for G2B behavior. JP 2022-155067 A,
¶0080 and ¶0082.

### L14 — Positive Meniscus, concave to object, two aspherical surfaces

**nd = 1.49710, νd = 81.6. Glass: 497816 class (supplier unproven). f = +37.026773 mm.**

L14 is the positive member of G2B and carries aspherical surfaces 25A and 26A. As with L12, the HOYA M-FCD1 catalog
coordinate supports a 497816 class label at the patent's printed precision, without establishing supplier identity. G2B's
verified positive group focal length and
its published focus-group identity are properties of the L13–L14 pair in situ; no finite-focus displacement is supplied
by the patent. JP 2022-155067 A, ¶0080 and ¶0082; Tables 1 and 4.

### L15 — Biconcave Negative, patent negative lens unit Fn

**nd = 1.80420, νd = 46.5. Glass: 804465 class (supplier unproven). f = -25.787021 mm.**

L15 is the biconcave negative element in G2C and is explicitly identified by the patent as the negative lens unit `Fn` for
Example 1. This is one of the few individual elements for which the patent states a system-level function: condition (4)
uses its negative focal length and distance to the image plane, and ¶0053 explains that the specified negative unit is
used to obtain the positive distortion shift associated with the long-end projection change relative to the wide-end
reference. The final calculation gives condition (4) as -2.792503 versus -2.794 in Table 21. JP 2022-155067 A, ¶0026,
¶0053–¶0055, and Table 21.

### L16 — Positive Meniscus, concave to object

**nd = 1.61997, νd = 63.9. Glass: 620639 class (supplier unproven). f = +60.236003 mm.**

L16 is the final powered element and the positive member of negative subgroup G2C. It is spherical and is followed by the
published variable rear spacing `d30` to the image plane. The patent does not assign L16 an individual named correction
role. In the complete G2C subgroup, its positive standalone power combines with L15 and their separation to give the
verified group focal length of -58.586386 mm. JP 2022-155067 A, ¶0081; Tables 1, 3, and 5.

## Glass Identification and Selection

The patent publishes only d-line refractive index `nd` and Abbe number `νd`; it does not identify glass suppliers or melt
names for Example 1. The final data therefore uses six-digit coordinate classes where a public catalog coordinate is a
defensible match and `Unmatched (...)` where it is not. Candidate catalog names below are evidence for the coordinate
class only, not supplier attribution.

| Stored class / coordinate | Elements | Patent nd / νd | Recorded public catalog comparison | Disposition |
|---|---|---:|---|---|
| 804465 class | L1, L5, L15 | 1.80420 / 46.5 | SCHOTT N-LASF44; HOYA TAF3D | Coordinate-exact; supplier unproven |
| 768492 class | L2 | 1.76802 / 49.2 | HOYA M-TAF101 | Coordinate-compatible within patent νd rounding |
| 855252 class | L3 | 1.85451 / 25.2 | HOYA NBFD25 | Coordinate-compatible within patent νd rounding |
| 729547 class | L4 | 1.72916 / 54.7 | SUMITA K-LaK18 | Coordinate-exact; supplier unproven |
| 593354 class | L6 | 1.59270 / 35.4 | HOYA FF5 | Six-digit coordinate-class match |
| 808228 class | L7 | 1.80809 / 22.8 | OHARA S-NPH1 | Coordinate-compatible within patent νd rounding |
| 497816 class | L8, L10 | 1.49700 / 81.6 | SCHOTT N-PK52A; HOYA FCD1/FCD1B class | Coordinate-compatible within patent νd rounding |
| 773496 class | L9 | 1.77250 / 49.6 | SUMITA K-LaSFn7; HOYA TAF1 | Coordinate-exact; supplier unproven |
| 001291 class | L11 | 2.00100 / 29.1 | HIKARI J-LASFH16; OHARA S-LAH99; HOYA TAFD55-W | Coordinate-compatible; supplier unproven |
| 497816 class | L12, L14 | 1.49710 / 81.6 | HOYA M-FCD1, code 497-816 (`nd = 1.49710`, `νd = 81.56`) | Coordinate-compatible at patent precision; supplier unproven |
| 730322 class | L13 | 1.73037 / 32.2 | HOYA NBFD32 | Coordinate-compatible within patent νd rounding |
| 620639 class | L16 | 1.61997 / 63.9 | HOYA PCD40 | Six-digit coordinate-class match |

Several candidate catalog records provide C/F/g-line indices or partial-dispersion data, but those properties belong to
the catalog candidates, not to the unidentified patent melts. They are deliberately not copied into the authored elements.
Consequently, this analysis does not make an APO or anomalous-partial-dispersion performance claim. The broad spread in
`νd` values is a source fact; assigning a specific secondary-spectrum strategy to a particular vendor glass would require
stronger material identification and spectral verification than this dossier provides.

## Focus Mechanism

The patent explicitly states that G2B, consisting of L13 and L14, moves axially for focusing. It also states that G1,
G2A, G2B, and G2C all move during zooming. JP 2022-155067 A, ¶0082 and Fig. 1.

Only two spacing states are numerically published for Example 1: Wide at infinity and Tele at infinity. The source does
not provide finite-focus values for the gaps adjacent to G2B. For that reason the implemented focus status is
`NO_INTERNAL_RECONSTRUCTION`. The data's focus vectors repeat the infinity spacing at each zoom endpoint rather than
inventing a close-focus displacement.

| Variable spacing | Wide infinity | Tele infinity | Authored close-focus value |
|---|---:|---:|---|
| d11 | 14.40 mm | 1.20 mm | Repeats infinity value |
| d22 | 2.26 mm | 5.20 mm | Repeats infinity value |
| d26 | 3.14 mm | 1.90 mm | Repeats infinity value |
| d30 | 14.10 mm | 21.88 mm | Repeats infinity value |

Sony specifies a 0.15 m minimum focus distance and 0.22× maximum magnification for the production SEL814G. Those values
are retained as production metadata, but they are not used to solve a patent focus law because the correlated product and
Example 1 differ in focal range and maximum aperture and the necessary vertex/object-distance reference is unpublished.
Therefore no internal focus travel, close-focus group position, or focus-breathing result is claimed here.

## Aspherical Surfaces

Example 1 has six aspherical surfaces: 3A and 4A on L2, 21A and 22A on L12, and 25A and 26A on L14. The patent's rendered
equation on PDF page 16 is

`x = c y² / (1 + sqrt(1 - (1+k)c²y²)) + A4 y⁴ + A6 y⁶ + A8 y⁸ + A10 y¹⁰ + A12 y¹²`.

Here `c = 1/R` and the patent's `k` maps directly to the standard conic constant `K`; all six Example 1 rows have `K = 0`.
No `K = k - 1` conversion is used. No geometric scaling is applied, so the published coefficients are stored unchanged.
JP 2022-155067 A, ¶0073–¶0075 and Table 4.

| Surface | Element | K | A4 | A6 | A8 | A10 | A12 |
|---|---|---:|---:|---:|---:|---:|---:|
| 3A | L2 | 0 | +2.33340e-6 | -7.29061e-8 | +2.87282e-10 | 0 | 0 |
| 4A | L2 | 0 | -1.56889e-5 | -1.44891e-7 | -1.08148e-9 | 0 | 0 |
| 21A | L12 | 0 | -1.81795e-4 | -8.63681e-7 | -4.90494e-9 | 0 | 0 |
| 22A | L12 | 0 | -9.41065e-5 | -5.72772e-7 | -1.46426e-9 | 0 | 0 |
| 25A | L14 | 0 | +9.06211e-6 | +2.43882e-7 | -1.05452e-9 | 0 | 0 |
| 26A | L14 | 0 | +4.99814e-5 | +1.00934e-7 | 0 | 0 | 0 |

The patent does not publish clear semi-diameters, so asphere departure cannot be quoted at a source-verified rim. Using
the final modeled semi-diameters, the executed verifier obtains the following polynomial departure from the spherical
conic base at the modeled rim:

| Surface | Modeled sd | Polynomial departure at modeled sd |
|---|---:|---:|
| 3A | 13.15 mm | -0.050336 mm |
| 4A | 10.25 mm | -0.472973 mm |
| 21A | 8.85 mm | -1.714750 mm |
| 22A | 9.35 mm | -1.187449 mm |
| 25A | 10.00 mm | +0.229051 mm |
| 26A | 10.45 mm | +0.727480 mm |

The sign here describes the algebraic polynomial sag added to the spherical base at the selected modeled radius. It is not
an element-by-element statement about a particular aberration contribution. The dossier does not establish whether these
surfaces are molded, polished, hybrid, or made by another manufacturing process, so no manufacturing method is assigned.

## Projection and Distortion Strategy

The patent defines four fisheye projection laws in ¶0031 and uses equisolid-angle image height
`Y = 2f sin(θ/2)` as the comparison reference for condition (1). It then states that Example 1 is equisolid-angle at Wide
and equidistant (`Y = fθ`) at Tele. This deliberate projection change is the central behavior that distinguishes the
example from a conventional fisheye zoom whose mapping remains substantially constant. JP 2022-155067 A, ¶0031–¶0036 and
¶0083.

At the common published half-field of 95°, exact meridional tracing of the final data gives image heights of 11.306391 mm
at Wide and 21.624678 mm at Tele. The patent rounds those to 11.30 mm and 21.63 mm. The wide endpoint therefore fills a
roughly 22.6 mm image-circle diameter, appropriate to a circular fisheye on 36 × 24 mm, while the tele endpoint reaches
about 43.26 mm diameter, approximately the full-frame diagonal. Those image-circle diameters are twice the patent image
heights and are stored as projection metadata; the exact traced heights are the independently recomputed quantities.

The fixed `fisheye-equisolid` data-field kind should therefore be read as a reference frame for distortion evaluation, not
as a claim that Tele follows equisolid geometry. The patent's Tele mapping remains equidistant, and its departure from the
equisolid reference is intentional.

## Conditional Expressions

Example 1 satisfies all ten patent conditions tabulated in Table 21. The calculated column below is regenerated from the
source/final prescription and the specified reference definitions; the small residuals are consistent with the patent's
rounded base tables and three-decimal condition table.

| Condition | Patent range | Calculated | Table 21 |
|---|---|---:|---:|
| (1) `(Ywa/Ywc)/(Yta/Ytc)` | 0.7 < x < 0.98 | 0.871166 | 0.872 |
| (2) `|f1|/fw` | 0.8 < x < 3.0 | 1.495365 | 1.495 |
| (3) `bfw/|f1|` | 0.5 < x < 2.5 | 1.248893 | 1.249 |
| (4) `(fn/ft)(dn/Yta)` | -5.1 < x < -1.5 | -2.792503 | -2.794 |
| (5) `θw` | 80° < x < 110° | 95.000° | 95° |
| (6) `θt` | 80° < x < 110° | 95.000° | 95° |
| (7) `(R11-R12)/(R11+R12)` | 0.1 < x < 1.0 | 0.538867 | 0.539 |
| (8) `fL2/fL1` | 0.1 < x < 2.0 | 0.915874 | 0.916 |
| (9) `|fFL|/fw` | 2.0 < x < 15.0 | 8.214362 | 8.214 |
| (10) `Yta/Ywa` | 1.6 < x < 3.2 | 1.914159 | 1.913 |

Condition (3) follows the patent's own back-focus definition for this condition, using published `d30`, while the
independent Gaussian BFD from S30 is reported separately in the verification section. Condition (4) uses the calculated
standalone power of L15, the patent's Example 1 `Fn` lens unit, and the Tele axial distance defined by the patent. This
keeps the source condition reproduction distinct from the final-model cardinal-point calculation.

## Verification Summary

The numerical checks were rerun from the finalized `.data.ts`, not from a parallel hard-coded prescription. A sequential
height/reduced-angle trace and a separately implemented y–θ ABCD matrix calculation reproduce the same endpoint system
matrices to floating-point precision.

| Quantity | Wide | Tele | Source comparator |
|---|---:|---:|---:|
| Gaussian EFL | 7.550345 mm | 12.590118 mm | 7.55 / 12.59 mm |
| Paraxial BFD from S30 | 14.087300 mm | 21.870789 mm | d30 = 14.10 / 21.88 mm |
| S1-to-IMG track | 98.25 mm | 94.53 mm | 98.26 / 94.54 mm |
| Exact 95° chief-ray image height | 11.306391 mm | 21.624678 mm | 11.30 / 21.63 mm |
| Modeled f-number | 2.90 | 2.89 | 2.90 / 2.89 |

The 0.01 mm track differences and the small BFD residuals are retained rather than hidden by altered tolerances. They are
consistent with a prescription whose individual spacings are mostly printed to 0.01 mm while system values are tabulated
separately.

The full paraxial Petzval sum is +0.0029703374 mm⁻¹, equivalent to a signed Petzval radius of about +336.662 mm under the
stated sign convention. This is a surface-power sum `φ/(n·n′)` and should not be read as the corrected sagittal or
tangential field shape of the final fisheye.

The aperture stop requires a modeling disclosure. The patent locates the stop at S14 but gives no physical diameter. The
stored Wide stop semi-diameter, 4.96686 mm, is calibrated so the modeled entrance pupil reproduces the published Wide
F2.90. The effective Tele stop semi-diameter required by the same endpoint-f-number model is about 5.92606 mm for F2.89.
If the Wide-calibrated physical stop were instead held fixed, the paraxial Tele value would be about f/3.45. Thus agreement
with the source f-number is a calibration result, not independent evidence for an unpublished iris diameter.

Surface semi-diameters are likewise modeled because the patent gives none. The final geometry was checked at zoom
coordinates 0, 0.25, 0.5, 0.75, and 1.0. Under the portable geometry implementation, all modeled glass edges retain
positive edge thickness, the aspherical rim slopes stay within the declared 76° allowance, all conic domains are valid,
and shared-band sag intrusion stays within the 0.90 gap policy. Exact meridional ray checks at all five states show the
95° chief ray, both on-axis marginal rays, and the default five-sample 57° off-axis bundle reaching the image plane.
Deliberate ±1 edge-pupil samples show expected clipping at S18 near zoom 0.75 and at S15 at Tele; those results are retained
as mechanical vignetting rather than being hidden by enlarging the modeled apertures.

The patent Fig. 1 optical section on PDF page 47 was used only as a qualitative shape and spacing cross-check. It shows the
same Wide/Tele ordering, the four functional group labels, the stop between L7 and L8, the G2B focus arrow, and the rear
`Fn` designation at L15. It was not used as a dimensional source for semi-diameters.

No real LensVisualizer repository validation was available in this dossier. Project TypeScript checking, Prettier,
`buildLens()` / `validateLensData()`, project exact tracing, runtime glass resolution, and production render diagnostics
remain integration-stage checks and are not represented here as completed by the portable verifier.

## Sources and References

1. Japan Patent Office, **JP 2022-155067 A**, “ズームレンズおよび撮像装置,” published 2022-10-13. Example 1:
   ¶0075–¶0091; Tables 1–5; Figs. 1–5. General fisheye conditions and projection discussion: ¶0030–¶0058; Table 21.
2. Sony Electronics, **FE 8-14mm F3.5 Fisheye G | SEL814G**,
   https://electronics.sony.com/imaging/lenses/all-e-mount/p/sel814g (retrieved 2026-09-17).
3. Sony USA, **SEL814G Specifications**,
   https://www.sony.com/electronics/support/lenses-e-mount-lenses/sel814g/specifications (retrieved 2026-09-17).
4. Sony Japan, **ソニー初フィッシュアイズームレンズ 『FE 8-14mm F3.5 Fisheye G』発売**, 2026-09-08,
   https://www.sony.jp/CorporateCruise/Press/202609/26-0908B/ (retrieved 2026-09-17).
5. HOYA Corporation Optics Division, **M-FCD1 — Low Dispersion Glass Material for Molded Optics Lens**,
   https://www.hoya-opticalworld.com/english/pdf/M-FCD1_120524.pdf; official NBFD25/NBFD32 datasheets and glass lists
   (retrieved 2026-09-17).
6. SCHOTT, **Optical Glass Collection** and N-PK52A datasheet, https://www.schott.com/ (retrieved 2026-09-17).
7. OHARA Corporation, official S-NPH1 and S-LAH99 optical-glass data pages, https://oharacorp.com/ (retrieved 2026-09-17).
8. HIKARI GLASS CO., LTD., **Optical Glass Catalog**, revision 2025-06-01,
   https://www.hikari-g.co.jp/optical_glass/catalog/document/HIKARI_Catalog.pdf (retrieved 2026-09-17).
9. SUMITA OPTICAL GLASS, Inc., **Optical Glass Data Book**, revision 14.02.00,
   https://www.sumita-opt.co.jp/download_files/en/data/glassdatabook_ver14.02.00.pdf (retrieved 2026-09-17).
