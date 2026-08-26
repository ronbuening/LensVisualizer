## Patent Reference and Design Identification

- **Patent:** US 7,158,320 B2
- **Application Number:** 11/150,456
- **Priority:** June 11, 2004 (JP 2004-174057)
- **Filed:** June 10, 2005
- **Granted:** January 2, 2007
- **Inventor:** Akihiro Nishio
- **Assignee:** Canon Kabushiki Kaisha
- **Title:** Optical System and Image Pickup Apparatus Including the Same
**Embodiment analyzed:** Numerical Embodiment 3 / Example 3

The prescription represented here is Numerical Embodiment 3 of US 7,158,320 B2. The patent describes this embodiment as
one of its five-unit telephoto zoom examples and defines the units, from object to image, as L1 positive, L2 negative,
L3 positive, L4 positive, and L5 negative. Its distinctive feature is a 0.10 mm optically active adhesive layer in the
front cemented assembly: polyvinylcarbazole containing dispersed ITO particles. For Embodiments 3 and 5, the patent says
that the ITO particles are mixed at 15% in the adhesive of a positive cemented lens in L1. The numerical table then gives
that selected adhesive as `Nd = 1.721040` and `νd = 12.55`. The selected example is entirely spherical. [US 7,158,320 B2,
Fig. 5; pp. 7-10.]

The job-card correlation is the CANON EF 100-300mm f/4.5-5.6 USM. That relationship is treated as a fixed design
correlation, not as proof of production provenance. Several independent features converge:

1. Canon's product record gives 13 elements in 10 groups, while Numerical Embodiment 3 contains 13 ordinary glass
   elements in 10 air-separated groups. The modeled ITO adhesive is an additional optical medium and is not counted as a
   fourteenth ordinary production element.
2. Canon describes the production lens as a five-group zoom, matching the five functional units L1-L5 in Fig. 5.
3. The patent's published zoom control points are 103.35, 173.68, and 291.85 mm; the product is marketed as 100-300 mm.
   Those are kept separate in the data file rather than forcing the patent to the marketed endpoints.
4. The patent charts give f/4.65, f/5.21, and f/5.80 for the three rendered states, with the Numerical Embodiment 3
   heading instead printing f/5.81 at the tele end. The production lens is marketed as f/4.5-5.6. The difference is
   treated as the usual separation between exact design/example values and rounded product labeling, not as a scale
   factor.
5. Canon documents rear focusing by movement of the fourth group in the production lens. Numerical Embodiment 3 has a
   distinct fourth positive zoom unit, L4, but the patent does not publish any finite-object focus motion for it; the
   architecture is therefore compatible with the production mechanism without proving that the patent table is the
   production focus prescription.

There is also a decisive chronology limitation. Canon dates the EF 100-300mm f/4.5-5.6 USM to June 1990, whereas the
selected patent claims June 11, 2004 priority. The patent therefore cannot be the originating patent for the 1990 product,
and it does not establish that production lenses used the later patent's ITO/polyvinylcarbazole adhesive. The model retains
the user-selected correlation while stating that limitation explicitly.

The production metadata in the data file follows Canon's catalog identity: Canon EF mount, 135/full-frame coverage,
13 elements in 10 groups, eight diaphragm blades, 1.5 m closest focusing distance, and an f/40 minimum aperture. These
are manufacturer facts. The exact optical prescription, zoom spacings, design focal lengths, and modeled f-numbers come
from the selected patent and the verified data file.

## Optical Architecture

Numerical Embodiment 3 is a five-unit zoom with the power sequence `+ - + + -`. The 13 ordinary glass elements are
organized into 10 air-separated groups. Three of those groups are cemented: the front E1 + ITO + E2 assembly, the E8 +
E9 pair in L4, and the E12 + E13 pair in L5. The ITO layer is treated as an explicit optical medium because the patent
assigns it its own refractive index and dispersion; `elementCount` nevertheless remains 13 because Canon and the patent
count ordinary glass elements, not the adhesive, as the physical lens count.

Independent air-bounded unit matrices give the following fixed powers for the five functional zoom units:

| Unit | Composition | Net unit EFL (mm) | Power sign |
|---|---|---:|---|
| L1 | C1 (E1 + ITO + E2) + E3 | +112.244179 | Positive |
| L2 | E4 + E5 | -73.236060 | Negative |
| L3 | E6 + E7 | +109.653805 | Positive |
| L4 | C2 (E8 + E9) + E10 | +73.069889 | Positive |
| L5 | E11 + C3 (E12 + E13) | -36.049535 | Negative |

These unit powers are not additive surrogates for the focal length of the assembled lens. Their contribution to the
whole system depends on the changing axial separations. In the published infinity states, the full prescription traces to
103.355237, 173.693088, and 291.836243 mm EFL, closely reproducing the patent's 103.35, 173.68, and 291.85 mm control
points.

The zoom kinematics are best interpreted in an image-fixed reference frame. Across the wide-to-tele change, L1 moves
objectward by 48.501 mm, L3 by 23.241 mm, and L5 by 24.991 mm. L2 and L4 remain fixed relative to the image plane within
the 0.05 mm tolerance appropriate to the patent's 0.01 mm spacing precision. The aperture stop moves with the L3 region.
No meaningful reversal appears between the three published zoom states. This kinematic interpretation is a computed
result from the published D6, D10, D15, and D20 values; it is not a separate motion table printed by the patent.

The patent calls the architecture a telephoto zoom. Under the stricter geometric criterion used in this project,
`optical track / EFL < 1`, only the tele endpoint is telephoto in the quantitative sense: the ratio is 0.7087 at
291.85 mm. The wide and middle ratios are 1.5319 and 1.0606. None of the three states is retrofocus under the independent
`BFD > EFL` test.

The aperture stop is source-defined at R11 and is stored as the required single `STO` surface. The patent does not
publish its physical diameter. The data file therefore uses an inferred base semi-diameter of 12.263999865 mm, constrained
by the wide-state f/4.65 chart value. Re-inverting the three patent chart f-numbers gives the effective stop semi-diameters
required to reproduce those chart values: 12.264, 12.341, and 12.405 mm. The source does not provide enough information
to distinguish chart/prescription rounding from unreported iris motion, so no separate iris-motion law is reconstructed.

Numerical Embodiment 3 contains no FP fixed flare-cutter plane and no SSP moving sub-flare-cutter plane. Those symbols
belong to other patent embodiments. No sensor cover glass, filter plate, dummy plane, mirror, folded path, or diffractive
surface is inserted into this sequential model. The patent also gives no D25 image-plane spacing; the rear spacing in the
data file is the independently solved Gaussian back focal distance at each zoom state.

No uniform scale factor is applied. All radii, thicknesses, zoom gaps, semi-diameters, and image distances therefore
remain in the patent design scale. Because Example 3 has no aspherical surfaces, the data file has an empty `asph` object
and no asphere-coefficient scaling or conic conversion is applicable.

## Element-by-Element Analysis

### C1 — E1 + ITO + E2, front cemented assembly in L1

**E1 — Negative Meniscus.** `nd = 1.805181, νd = 25.4. Glass: 805254 dense-flint class (catalog-equivalent coefficient proxy; production supplier unspecified). f = -724.707237 mm.`

E1 is a weak negative meniscus when considered as an isolated air-bounded element. It forms the front member of the
three-medium cemented stack and should not be described as determining the sign of the complete assembly by itself.

**ITO — Negative Meniscus Adhesive Layer.** `nd = 1.721040, νd = 12.55. Glass: Unmatched (patent-defined 15% ITO/polyvinylcarbazole adhesive composite). f = -892.818117 mm.`

The ITO layer is only 0.10 mm thick, but the two bounding radii are different, so it carries a small negative standalone
power. The patent's purpose for this layer is chromatic rather than gross paraxial power: the high-dispersion particulate
mixture is placed inside a positive cemented lens so that a comparatively small negative adhesive power can participate in
secondary-spectrum correction without requiring a thick concave layer. [US 7,158,320 B2, pp. 5-8.]

**E2 — Biconvex Positive.** `nd = 1.516330, νd = 64.2. Glass: 517642 crown class (catalog-equivalent coefficient proxy; production supplier unspecified). f = +132.210860 mm.`

E2 is the strong positive member of C1. The combination of weak negative E1, weak negative ITO, and positive E2 produces
a positive cemented assembly. Independent matrix calculation gives C1 a net air-bounded EFL of +198.789782 mm. This is
separate from the three standalone member focal lengths and from C1's behavior after E3 and the remaining zoom units are
placed in the complete system.

### E3 — Positive Meniscus, rear member of L1

**E3 — Positive Meniscus.** `nd = 1.487490, νd = 70.2. Glass: 487702 low-index crown class (catalog-equivalent coefficient proxy; production supplier unspecified). f = +255.316843 mm.`

E3 is an air-spaced positive meniscus behind C1. Together with the positive C1 assembly it completes the first zoom unit,
which has a verified net air-bounded EFL of +112.244179 mm. In the zoom motion, L1 is one of the units that moves
substantially relative to the image plane as focal length increases.

### E4 — Biconcave negative member of L2

**E4 — Biconcave Negative.** `nd = 1.834807, νd = 42.7. Glass: 835427 lanthanum high-index class (vendor unspecified). f = -29.364051 mm.`

E4 is the strongest negative standalone element in the second unit. Its high index permits strong negative power at the
published curvatures. The element is air-spaced from E5, so its standalone focal length should not be confused with the
net L2 focal length.

### E5 — Positive meniscus, rear member of L2

**E5 — Positive Meniscus.** `nd = 1.846658, νd = 23.9. Glass: 847238/239 high-index flint class (vendor unspecified). f = +55.443045 mm.`

E5 partially offsets E4's negative power while leaving L2 negative overall. The verified L2 unit EFL is -73.236060 mm.
At the three published zoom states L2 remains fixed relative to the image plane within source precision, while the large
D6 change in front of it is produced primarily by L1 motion.

### E6 — Biconcave negative member of L3

**E6 — Biconcave Negative.** `nd = 1.846658, νd = 23.9. Glass: 847238/239 high-index flint class (vendor unspecified). f = -91.621896 mm.`

E6 begins the third unit with negative standalone power. It uses the same stored optical coordinates as E5 but a different
shape and therefore a different power. This illustrates why glass identity and optical function cannot be inferred from
`nd` and `νd` alone.

### E7 — Biconvex positive member of L3

**E7 — Biconvex Positive.** `nd = 1.603112, νd = 60.7. Glass: 603607 dense-crown/SK14 class (vendor unspecified). f = +52.655593 mm.`

E7 more than offsets E6 in the complete L3 unit, giving L3 a verified net EFL of +109.653805 mm. The stop follows L3 in
the modeled zoom motion: their image-fixed wide-to-tele displacement is the same to the precision of the published
spacing table.

### C2 — E8 + E9, cemented pair in L4

**E8 — Biconvex Positive.** `nd = 1.487490, νd = 70.2. Glass: 487702 low-index crown class (catalog-equivalent coefficient proxy; production supplier unspecified). f = +55.662694 mm.`

**E9 — Negative Meniscus.** `nd = 1.834000, νd = 37.2. Glass: 834372/373 lanthanum high-index class (vendor unspecified). f = -63.756800 mm.`

E8 and E9 share the R17 cemented interface. The positive E8 and negative E9 powers nearly cancel in isolation; the
verified cemented-pair EFL is +389.145293 mm. That weak positive pair is followed by E10, and the full fourth unit becomes
substantially positive. The cemented-pair power is therefore a distinct quantity from both member powers and the final L4
unit power.

The patent's R16 row prints `N8 = 1.487490` but mislabels the following Abbe subscript as `ν10 = 70.2`. The data file maps
70.2 to E8/N8 because the element sequence and repeated coordinate pair make that assignment unambiguous. The raw source
error remains documented rather than being treated as if the patent printed a correct subscript.

### E10 — Biconvex positive rear member of L4

**E10 — Biconvex Positive.** `nd = 1.607289, νd = 49.2. Glass: BAF5-class coefficient proxy (patent 607492; production supplier unspecified). f = +87.843277 mm.`

E10 supplies the stronger positive contribution in L4. With C2 it produces a verified L4 unit EFL of +73.069889 mm. In
the published infinity zoom states L4 is fixed relative to the image plane within source precision. Canon's production
record identifies the fourth group as the rear-focus group, but no finite-object displacement is present in Numerical
Embodiment 3, so no focus movement is assigned here.

### E11 — Biconcave negative front member of L5

**E11 — Biconcave Negative.** `nd = 1.834807, νd = 42.7. Glass: 835427 lanthanum high-index class (vendor unspecified). f = -42.819830 mm.`

E11 provides a strong negative contribution at the front of the fifth unit. L5 moves relative to the image plane during
zooming and ends as the strongest negative functional unit in the verified group-power decomposition.

### C3 — E12 + E13, rear cemented pair in L5

**E12 — Negative Meniscus.** `nd = 1.834807, νd = 42.7. Glass: 835427 lanthanum high-index class (vendor unspecified). f = -29.363430 mm.`

**E13 — Positive Meniscus.** `nd = 1.784718, νd = 25.7. Glass: 785257 dense-flint class (vendor unspecified). f = +33.004359 mm.`

E12 and E13 form the final cemented pair at R24. Although the standalone member powers are nearly equal and opposite,
their cemented combination remains negative, with a verified net EFL of -248.096905 mm. Combined with E11, the full L5
unit has a net EFL of -36.049535 mm. The last refracting surface is R25; the image spacing after it is not a patent row but
the Gaussian BFD required by each published zoom state.

## Glass Identification and Selection

The patent supplies `nd` and `νd` for the ordinary elements but does not identify an ordinary-glass manufacturer. The
final data therefore uses supplier-neutral coordinate classes and qualified catalog-equivalent coefficient proxies rather
than asserting production identities. The patent coordinates remain authoritative, and the proxies do not establish
historical melts or patent partial-dispersion behavior.

| Stored glass annotation | nd / νd | Elements | Data status |
|---|---|---|---|
| 805254 dense-flint class; supplier unspecified | 1.805181 / 25.4 | E1 | Catalog-equivalent coefficient proxy |
| Unmatched patent-defined 15% ITO/polyvinylcarbazole adhesive composite | 1.721040 / 12.55 | ITO | Patent-defined non-glass medium |
| 517642 crown class; supplier unspecified | 1.516330 / 64.2 | E2 | Catalog-equivalent coefficient proxy |
| 487702 low-index crown class; supplier unspecified | 1.487490 / 70.2 | E3, E8 | Catalog-equivalent coefficient proxy |
| 835427 lanthanum high-index class (vendor unspecified) | 1.834807 / 42.7 | E4, E11, E12 | Coordinate class only |
| 847238/239 high-index flint class (vendor unspecified) | 1.846658 / 23.9 | E5, E6 | Coordinate class only |
| 603607 dense-crown/SK14 class (vendor unspecified) | 1.603112 / 60.7 | E7 | Coordinate class only |
| 834372/373 lanthanum high-index class (vendor unspecified) | 1.834000 / 37.2 | E9 | Coordinate class only |
| BAF5-class coefficient proxy; supplier unspecified | 1.607289 / 49.2 | E10 | Compatible catalog curve for patent 607492 |
| 785257 dense-flint class (vendor unspecified) | 1.784718 / 25.7 | E13 | Coordinate class only |

The ordinary palette alternates lower-dispersion crown-type coordinates with denser and generally higher-index flint or
lanthanum classes across the zoom units. That pattern is consistent with conventional primary chromatic balancing, but
the data file intentionally does not assign anomalous-partial-dispersion behavior to any ordinary element. No ordinary
element has authored `nC`, `nF`, `ng`, or `dPgF`; the compatible catalog curves improve chromatic tracing without
becoming production-glass or patent partial-dispersion claims.

The ITO adhesive is different in kind. It is not represented as a catalog glass at all. The patent explicitly presents
the inorganic-particle/polymer mixture as a high-dispersion, low-partial-dispersion material intended to improve
chromatic correction. That source statement is discussed below, but the selected Example-3 row itself gives only `Nd`
and `νd`; it does not provide a self-consistent selected-row `nC`, `nF`, `ng`, or `θgF`. Accordingly, the data file does
not claim APO performance and does not enable a selected-example line-index proof of anomalous dispersion.

## Focus Mechanism

Canon describes the production EF 100-300mm f/4.5-5.6 USM as a rear-focusing lens and, on the Japanese Camera Museum
page, identifies the fourth group as the moving focus group. Canon also gives a 1.5 m closest focusing distance and 0.2×
maximum magnification. Those values describe the production lens.

Numerical Embodiment 3, however, publishes only infinity zoom spacings. It gives no finite-object distance table, no L4
focus displacement, no magnification-state prescription, and no focus travel. The production MFD and magnification do not
uniquely determine the internal fourth-group motion because the principal planes and effective focal properties of the
complete zoom vary with group position.

The data therefore uses focus status `NO_INTERNAL_RECONSTRUCTION`. Every `[infinity, close]` pair in `var` is identical at
each zoom position. The 1.5 m value remains catalog metadata rather than being converted into a synthetic close-focus
optical state. No total focus travel is asserted because the sources do not provide one and the selected prescription
does not determine it uniquely.

The distinction matters particularly for L4. At infinity, L4 is effectively fixed during zoom in the image-referenced
analysis. That does not conflict with Canon's statement that L4 moves during focusing; zoom motion and focus motion are
separate degrees of freedom, and only the former is numerically published in this patent example.

## Chromatic Correction Strategy

The patent's central design idea is the use of a solid adhesive layer whose dispersion differs markedly from ordinary
optical glass. It discusses inorganic fine particles dispersed in a transparent polymer and identifies ITO as especially
useful because of its low Abbe number. For Embodiments 3 and 5, the ITO/polyvinylcarbazole adhesive is placed in the
positive cemented lens of L1 and uses a 15% ITO mixture. [US 7,158,320 B2, pp. 3-8.]

In Numerical Embodiment 3 the adhesive has `Nd = 1.721040` and `νd = 12.55`. Its isolated air-bounded focal length is
-892.818117 mm, while the complete E1 + ITO + E2 cemented assembly is positive at +198.789782 mm. This is precisely the
power separation contemplated by the patent: a small negative adhesive contribution is embedded inside an overall
positive cemented lens. The adhesive's chromatic role should therefore not be reduced to the sign of its paraxial power.

The patent also gives a generic 20% ITO/polyvinylcarbazole recipe with `Nd = 1.6959`, `νd = 12.55`, and
`θgF = 0.518`. That recipe is not the selected 15% Example-3 material and is not imported into the data file. The direct
Example-3 table and the patent's Table 1 are internally inconsistent for the adhesive parameters, so no `θgF`, `dPgF`, or
line-index value is assigned to the selected modeled adhesive beyond what the direct row actually provides.

Consequently, the prescription may be described as implementing the patent's ITO-based chromatic-correction concept,
but the LensVisualizer data do not substantiate an apochromatic classification or a validated anomalous-dispersion model.
The necessary selected-material line data are not present.

## Conditional Expressions

The patent sets bounds on the adhesive material and on the relation between the adhesive power and the complete cemented
lens. The US grant contains several textual inconsistencies; the Japanese family member JP 4,612,810 B2 provides the
self-consistent form used for the power-ratio check.

| Condition | Source form relevant to the audit | Example-3 result | Status |
|---|---|---:|---|
| (1) | `10 < νIT < 27` in the abstract/claims and Japanese family; one US body rendering prints a lower bound of 8 | `νIT = 12.55` | Passes either rendering |
| (1a) | `10 < νIT < 16` | `νIT = 12.55` | Passes |
| (2) | `0.3 < θIT < 0.7` | No reliable selected-row `θIT` | Not independently evaluable |
| (2a) | `0.4 < θIT < 0.6` | No reliable selected-row `θIT` | Not independently evaluable |
| (3) | `0.04 < Fs / |Fit| < 1` in JP 4,612,810 B2 | `0.222654288` | Passes |

The direct Example-3 row gives `νITO = 12.55`, but US Table 1 lists 11.51 for Example 3 under condition (1) and 0.484
under condition (2). Because the table's condition-(1) number already conflicts with the selected numerical row, the
0.484 value is not treated as a trustworthy selected-material `θIT` datum.

The US text also prints condition (3) as `1 < Fs/|Fit| < 0.04`, an impossible ordering. The Japanese family prints
`0.04 < Fs/|Fit| < 1`. Independent calculation from the final data gives the air-bounded adhesive focal length
`Fit = -892.818117 mm` and the front cemented-assembly focal length `Fs = +198.789782 mm`, hence
`Fs/|Fit| = 0.222654288`. That agrees with the US Table 1 value 0.223 after rounding and independently supports the
Japanese inequality ordering.

The numerical heading and Fig. 6C likewise differ at the tele endpoint: the heading gives f/5.81, while Fig. 6C labels
f/5.80. The operational `nominalFno` array uses the state-chart values 4.65, 5.21, and 5.80 because those are the three
explicitly rendered states used for pupil geometry; the 5.81 heading value remains documented rather than silently
replaced.

## Verification Summary

The final data file was recomputed as a sequential d-line system using height/reduced-angle (`y-ν`) tracing and an
independent ABCD basis-ray check. The two matrix constructions agree to floating-point precision at all three zoom
control points.

| State | Patent focal length (mm) | Computed EFL (mm) | Derived BFD from R25 (mm) | Optical track R1 to image (mm) |
|---|---:|---:|---:|---:|
| Wide | 103.35 | 103.355237 | 44.507909 | 158.327909 |
| Middle | 173.68 | 173.693088 | 53.963875 | 184.223875 |
| Tele | 291.85 | 291.836243 | 69.498780 | 206.828780 |

The largest focal-length residual is 0.013757 mm. The authored D25 values are not patent spacings; they are the Gaussian
BFDs required to place the image plane at focus. Recalculation from the final TypeScript arrays reproduces those D25
values to better than 3×10^-10 mm.

Surface-by-surface Petzval summation using `φ/(n n')` gives `-1.18637924222955×10^-4 mm^-1`. This number is independent of
the changing air gaps and is therefore the same at all zoom states. It is a computed diagnostic of the modeled
prescription, not a quantity printed by the patent.

The patent does not publish semi-diameters. The data-file apertures are therefore modeling inferences derived from the
full axial wide-open marginal ray and the default displayed off-axis fan at 0.60 of the published half-field and pupil
fractions through ±0.75, checked at all three zoom positions. The smallest verified ray-envelope clearance is 0.305238 mm
at surface 24 in the tele state. The same apertures retain positive edge thickness, acceptable spherical rim slope, and
positive shared-band cross-gap clearance under the current validator policy. These semi-diameters should not be cited as
patent or manufacturer clear-aperture specifications.

The approximately 21.63 mm image half-height inferred from the three patent half-field labels is consistent across the
zoom range, but it is likewise a derived quantity rather than a printed image-height row. The model uses the production
135/full-frame format as catalog metadata and does not substitute a manufacturer frame dimension for the patent's optical
control points.

No plate correction, cover-glass removal, or dummy-surface folding is required for Example 3. No scaling is applied. No
focus reconstruction is present. No aspherical departure exists to verify. These absences are part of the model
definition, not missing analysis.

## Design Heritage and Context

The chronology prevents a conventional patent-to-product provenance narrative. The EF 100-300mm f/4.5-5.6 USM was
marketed in 1990, while the selected patent belongs to a 2004-priority family concerned with ITO-particle adhesive as a
chromatic-correction material. The useful relationship is therefore architectural: the later numerical example closely
reproduces the production lens's element/group count, five-group zoom structure, focal range, variable-aperture class, and
rear-focus-compatible fourth group.

That distinction is important because the ITO adhesive is the patent's most novel feature. The later filing can show that
Canon analyzed such a material in a formula closely corresponding to the older lens class; it cannot establish that 1990
production samples contained that material. The analysis therefore treats the production lens name as the fixed catalog
correlation and the patent as the exact source of the modeled prescription, without collapsing those two claims into a
single provenance assertion.

## Sources and References

1. Akihiro Nishio, **US 7,158,320 B2**, *Optical System and Image Pickup Apparatus Including the Same*, Canon Kabushiki
   Kaisha, granted January 2, 2007. Numerical Embodiment 3, Fig. 5, Fig. 6A-C, and pp. 7-10 supply the prescription and
   selected-example optical values.
2. Canon Camera Museum, **EF100-300mm f/4.5-5.6 USM** (English), manufacturer product record:
   <https://global.canon/en/c-museum/product/ef290.html>.
3. Canon Camera Museum, **EF100-300mm F4.5-5.6 USM** (Japanese), manufacturer product record; explicitly identifies
   fourth-group rear focusing: <https://global.canon/ja/c-museum/product/ef290.html>.
4. **JP 4,612,810 B2**, Japanese family member of the selected US patent; used only to resolve the internally impossible
   US rendering of condition (3): <https://patents.google.com/patent/JP4612810B2/ja>.
