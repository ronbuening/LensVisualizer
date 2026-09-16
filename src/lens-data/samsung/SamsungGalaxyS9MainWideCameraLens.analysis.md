## Patent Reference and Design Identification

**Patent:** US 2021/0149156 A1
**Application Number:** US 17/163,752
**Filed:** February 1, 2021
**Published:** May 20, 2021
**Priority:** November 8, 2017; March 2, 2018
**Inventors:** Jae Hyuk Huh; Jae Hyun Baik; Yong Joo Jo
**Assignee:** Samsung Electro-Mechanics Co., Ltd.
**Title:** Optical Imaging System
**Embodiment analyzed:** Example 1, FIGS. 1-6, Tables 1-4, ¶¶0098-0131

The prescription is Example 1 of US 2021/0149156 A1. The patent describes seven air-separated lenses, a variable stop
(VST) in front of the first lens, an infrared-block filter behind the seventh lens, and an image sensor behind that filter
(¶0100). Tables 1-3 give the same lens prescription at three aperture states, F1.5, F2.0, and F2.4; only the VST effective
aperture radius changes. Table 4 gives the more precise radii and the aspherical coefficients used by the implemented
model. The patent publication itself is the authority for the optical prescription and conventions.

The link to the Samsung Galaxy S9 production camera is strong but remains an inference rather than a manufacturer-confirmed
patent attribution. Several independent facts converge:

1. Example 1 specifies a nominal focal length of 4.3 mm and a full field of view of 76.72° (Tables 1-3).
2. Samsung specifies the Galaxy S9 rear camera with a 77° field of view and Dual Aperture F1.5/F2.4, together with a
   12 MP autofocus sensor and OIS.
3. Independent SM-G960F EXIF examples report a 4.3 mm focal length and f/1.5.
4. The patent's earliest Korean priority, November 8, 2017, predates Samsung's February 25, 2018 Galaxy S9 announcement;
   a second Korean priority followed on March 2, 2018.
5. The patent applicant/assignee is Samsung Electro-Mechanics Co., Ltd.; Samsung Electro-Mechanics separately documents
   camera-module lens and actuator manufacturing capability, but no located Samsung source explicitly states that Example 1
   is the production Galaxy S9 main-camera prescription.

The patent includes an intermediate F2.0 state that is not one of the Galaxy S9's two marketed Dual Aperture endpoints.
That difference is retained rather than explained away. The data file therefore identifies the production correlation as
inferred, not manufacturer-confirmed.

Samsung's product specification gives a 1/2.55-inch-type sensor. The current LensVisualizer taxonomy supplied with this
job has no exact 1/2.55-inch-type identifier, so the data file intentionally leaves `imageFormat` unset rather than
substituting the available 1/2.3-inch-type category.

## Optical Architecture

Example 1 is a seven-element, seven-group, all-aspherical smartphone objective. It is best described directly by its
verified power distribution rather than by forcing it into a historical named lens family. The standalone element-power
sequence is positive-negative-positive-positive-positive-positive-negative, or `+ - + + + + -` (¶¶0121-0129). Because
standalone powers do not equal in-situ group behavior, the sequence is used here only as a first-order description.

The computed effective focal length of the final parsed model is 4.313424827 mm. The patent prints `f = 4.3 mm`, and the
0.013425 mm difference is within the precision implied by that one-decimal source value. The first four elements taken as
an isolated sequential subsystem have a synthetic focal length of 4.418825859 mm. The isolated L5-L7 rear block has an
EFL of -11.473738611 mm; this negative standalone block value does not mean that those three elements behave as a detachable
negative converter inside the assembled objective.

The source first-surface-to-image TTL is 5.177 mm. The final model omits the patent's flat infrared-block plate, as required
by the data specification, and replaces the source path `0.267 mm air + 0.110 mm at n = 1.518 + 0.680 mm air` with the
paraxially equivalent 1.019463768 mm air spacing. The resulting normalized S1-to-image model track is 5.139463768 mm.
The raw patent TTL remains the value used for patent conditions and architecture comparisons; the normalized model track
is not substituted for it.

The parsed final prescription gives a paraxial rear focal distance of 1.000165697 mm from the S14A vertex. Using the
project's terminology tests, raw `TTL/EFL = 1.200206381`, so the design is not labeled telephoto, and `BFD/EFL =
0.231872755`, so it is not labeled retrofocus. The surface-by-surface Petzval sum, evaluated as `φ/(n·n′)`, is
0.0481425433 1/mm.

The source places VST in front of L1 and publishes VST effective-aperture radii of 1.550, 1.100, and 0.900 mm, but it
does not provide a VST-to-S1 axial distance or establish that those tabulated ray-used radii equal the physical aperture-
stop or entrance-pupil radii required by LensVisualizer. The implemented model therefore uses exactly one flat `STO`
coincident with the S1 vertex and calibrates its wide-open semi-diameter to 1.437808276 mm so that the independently
computed 4.313424827 mm EFL gives f/1.5. That agreement verifies only the stop calibration; it is not independent evidence
for the physical production iris diameter or its axial location.

The corrected aspheric signs pass the formerly clipped 0.83-pupil axial sample (launch height
1.193380869 mm). Its image-plane intercept is about -0.004673 mm; a 1.0 mm launch gives -0.001576 mm,
compared with +0.384126 mm before correction. These monochromatic checks support the sign interpretation,
but do not establish full-field performance or validate the unspecified stop position. The modeled rear
rims remain truncated because the published coefficient precision cannot reproduce their full envelope.

## Element-by-Element Analysis

### L1 - Positive Meniscus, two aspherical surfaces

`nd = 1.544, νd = 56.094. Glass: Unmatched (544561 optical-material class; supplier unknown). f = +4.46973 mm.`

L1 is the strongest positive standalone element in the prescription and forms the front collecting member. The patent
describes its object-side surface as convex and its image-side surface as concave in the paraxial region (¶0121). Both
surfaces are aspherical. Its relatively high Abbe number is a source coordinate, not evidence for a particular named
catalog glass or plastic resin.

### L2 - Negative Meniscus, two aspherical surfaces

`nd = 1.661, νd = 20.353. Glass: Unmatched (661204 optical-material class; supplier unknown). f = -9.65996 mm.`

L2 supplies the principal negative standalone power immediately behind L1. The patent gives a convex object-side surface
and a concave image-side surface in the paraxial region (¶0122). L1 and L2 deliberately use substantially different
Abbe-number coordinates in the source, and ¶0123 explicitly calls for a difference greater than 30. The available data do
not establish a specific supplier material or a higher-order partial-dispersion behavior.

### L3 - Weak Positive Meniscus, two aspherical surfaces

`nd = 1.544, νd = 56.094. Glass: Unmatched (544561 optical-material class; supplier unknown). f = +173.616 mm.`

L3 is positive by the patent's description and by independent thick-element calculation, but its standalone paraxial
power is weak. The patent describes a convex object-side surface and a concave image-side surface (¶0124). The element
reuses the same d-line coordinate class as L1 and L4. Its actual contribution inside the complete seven-element system
cannot be inferred from the large standalone focal length alone.

### L4 - Positive Meniscus, two aspherical surfaces

`nd = 1.544, νd = 56.094. Glass: Unmatched (544561 optical-material class; supplier unknown). f = +9.81082 mm.`

L4 is a materially stronger positive element than L3. The patent describes both paraxial surface shapes as a convex-front,
concave-rear meniscus (¶0125). With the Table-4 polynomial signs retained, the common published 1.192 mm
radius gives a positive edge thickness of 0.225050 mm. The former negative edge thickness was introduced
by the model's coefficient negation, not established by the source. Both modeled rims now use 1.21584 mm
(1.02× the published effective radius).

### L5 - Near-Afocal Weak Positive Meniscus, two aspherical surfaces

`nd = 1.661, νd = 20.353. Glass: Unmatched (661204 optical-material class; supplier unknown). f = +1.22238×10^7 mm.`

The source gives both paraxial radii as approximately -1000 mm and describes L5 as a positive element with very large
radii, concave on the object side and convex on the image side (¶0126). Its computed standalone power is therefore only
slightly positive. The value is useful as a first-order characterization of the isolated element, not as a measure of its
in-situ effect on the assembled objective.

### L6 - Weak Positive Biconvex Element, two aspherical surfaces

`nd = 1.639, νd = 23.528. Glass: Unmatched (639235 optical-material class; supplier unknown). f = +782.559 mm.`

L6 is another weak positive standalone element. The patent describes both surfaces as convex in the paraxial region and
states that at least one surface may contain an inflection point toward the edge (¶¶0127-0128). The final geometry keeps
that source description separate from any unsupported claim about a specific aberration function.

### L7 - Negative Meniscus, two aspherical surfaces

`nd = 1.534, νd = 55.656. Glass: Unmatched (534557 optical-material class; supplier unknown). f = -11.2789 mm.`

L7 is the rear negative element adjacent to the normalized image-space gap. The patent describes a convex object-side
surface and a concave image-side surface in the paraxial region, again allowing an inflection point toward the edge
(¶¶0129-0130). The source infrared-block plate follows L7 but is not modeled as a LensVisualizer optical element; its
first-order path effect is incorporated into the air-equivalent rear spacing described above.

## Glass Identification and Selection

The patent publishes d-line refractive index and Abbe number but does not identify a supplier or named catalog material.
It also states that all lenses may be formed from plastic, while not limiting the disclosure exclusively to plastic
(¶0085). For that reason, the final data preserves coordinate classes rather than assigning speculative glass names.

| Coordinate class | nd | νd | Elements | Final label disposition |
|---|---:|---:|---|---|
| 544561 | 1.544 | 56.094 | L1, L3, L4 | Unmatched; supplier unknown |
| 661204 | 1.661 | 20.353 | L2, L5 | Unmatched; supplier unknown |
| 639235 | 1.639 | 23.528 | L6 | Unmatched; supplier unknown |
| 534557 | 1.534 | 55.656 | L7 | Unmatched; supplier unknown |

Authoritative OHARA, HOYA, SCHOTT, HIKARI, CDGM, and SUMITA catalog sources were checked during extraction, but no exact
named public-catalog identity was established for these four source coordinates. The data therefore contains no authored
`nC`, `nF`, `ng`, or `dPgF` fields and no validated Sellmeier identity. Abbe-only coordinates are insufficient to support
an apochromatic or anomalous-partial-dispersion claim, so none is made here.

## Focus Mechanism

The implemented focus status is `NO_INTERNAL_RECONSTRUCTION`. Example 1 publishes aperture changes, not focus travel.
Tables 1-3 repeat the same S1-S17 radii, media, and spacings while changing only VST aperture and F-number. Paragraph
0110 states that the focal point remains at the same position when F-number changes in this example.

No finite-object-distance table, focus-dependent air gap, moving-group displacement, or production autofocus law is
published for Example 1. Consequently, `var` and `varLabels` are empty and no internal focus motion is invented. The data
field `closeFocusM: 0.10` comes from independent Camera FV-5 Galaxy S9 rear-camera metadata because the schema requires a
minimum-focus value; it is product metadata only and does not constrain or validate any modeled focus movement.

## Aspherical Surfaces

All fourteen lens surfaces S1-S14 are aspherical in Example 1 (¶0131 and Table 4). The patent equation on printed page 4
(PDF page 37) uses a negative conic-base term:

`Z = -cY² / [1 + √(1 - (1 + K)c²Y²)] + A·Y⁴ + B·Y⁶ + ...`

The implemented model retains Table-4 radii, conic constants, and polynomial signs in the usual
positive-conic, object-to-image sag convention. The negative numerator printed in Equation (1) is treated
as a source equation error, an interpretation supported by the Figure 1 contours and exact axial tracing.
The earlier model instead negated every polynomial term, reversing the peripheral bends and creating an
artificial L4 crossing. This correction is an explicit source interpretation, not a claim that the printed
equation has a positive numerator. No coefficient fitting or dimensional scaling is applied.

The tables below give the implemented coefficients, now identical in sign to Table 4.
A dash means no nonzero term is authored at that order.

| Surface | K | A4 | A6 | A8 | A10 | A12 | A14 | A16 | A18 | A20 |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| 1A | -1.6552217 | 1.16091e-2 | 9.65387e-2 | -3.155559e-1 | 6.103956e-1 | -7.409635e-1 | 5.643710e-1 | -2.624528e-1 | 6.77393e-2 | -7.4222e-3 |
| 2A | -24.000204 | -1.29476e-2 | -3.63024e-2 | 4.14684e-2 | -4.31300e-2 | 4.27570e-2 | -3.64053e-2 | 2.09420e-2 | -6.6627e-3 | 8.573e-4 |
| 3A | -50.6870574 | -3.89719e-2 | -3.10197e-2 | -2.133e-4 | 2.203593e-1 | -4.423371e-1 | 4.475599e-1 | -2.552890e-1 | 7.85311e-2 | -1.02827e-2 |
| 4A | 4.8241626 | -4.34129e-2 | -6.33982e-2 | 1.513420e-1 | -3.827429e-1 | 8.176100e-1 | -1.0506755 | 7.674961e-1 | -2.880086e-1 | 4.22082e-2 |
| 5A | -12.7994972 | -8.2797e-3 | 1.615828e-1 | -9.392688e-1 | 2.4165689 | -3.961589 | 4.1252343 | -2.5899193 | 9.003932e-1 | -1.340505e-1 |
| 6A | -42.8915719 | -1.081493e-1 | 3.169587e-1 | -8.513916e-1 | 1.2909706 | -1.5485732 | 1.5974902 | -1.137569 | 4.537753e-1 | -7.54816e-2 |
| 7A | -0.3530718 | -2.370002e-1 | 5.814920e-1 | -1.662903 | 3.4439451 | -5.2966339 | 5.6879394 | -3.8338174 | 1.4272539 | -2.227640e-1 |
| 8A | -4.2495116 | -2.47478e-2 | -4.17117e-2 | 3.110626e-1 | -1.0130564 | 1.7589418 | -1.8091287 | 1.1258055 | -3.970271e-1 | 6.13702e-2 |
| 9A | 0 | 8.30070e-2 | -8.112926e-1 | 2.3021412 | -4.1836612 | 5.0467303 | -4.0494266 | 2.0724279 | -6.104917e-1 | 7.84477e-2 |
| 10A | 0 | 2.627193e-1 | -1.1387755 | 2.0723941 | -2.4444138 | 1.9176466 | -9.907477e-1 | 3.234978e-1 | -6.01376e-2 | 4.8119e-3 |
| 11A | 0 | 4.625186e-1 | -1.1116904 | 1.591279 | -1.6061269 | 1.0855971 | -4.768917e-1 | 1.297930e-1 | -1.97278e-2 | 1.2726e-3 |
| 12A | 0 | 1.464370e-1 | -1.698953e-1 | 1.117498e-1 | -6.34561e-2 | 2.87105e-2 | -9.0165e-3 | 1.7792e-3 | -1.964e-4 | 9.2e-6 |
| 13A | -10.8244988 | -2.005729e-1 | 5.26574e-2 | 1.02193e-2 | -9.0359e-3 | 2.3863e-3 | -3.304e-4 | 2.41e-5 | -7e-7 | — |
| 14A | -5.5973242 | -1.362365e-1 | 6.26627e-2 | -2.52880e-2 | 7.5010e-3 | -1.4408e-3 | 1.697e-4 | -1.12e-5 | 3e-7 | — |

Because many surfaces use large higher-order terms with alternating signs, a single A4 coefficient is not a sufficient
summary of the peripheral shape. The patent itself is the stronger source for qualitative edge-shape statements: it
explicitly allows inflection behavior on L6 and L7 (¶¶0128, 0130).

The patent's effective-aperture radii are ray-used radii, not published physical lens rims (¶0073).
Each element uses a common rim, matching the flat closures in Figure 1. L1–L4 use 1.02× the larger
source radius; L5/L6 use 1.02× the smaller radius because extending their front surfaces to the
larger rear radii causes polynomial divergence. These conservative rims also truncate their envelopes. The rear surfaces cannot safely use the full 2.720/2.880 mm
radii: the seven-decimal Table-4 polynomial values produce a crossing at the common 2.720 mm height
(edge thickness -2.699029 mm), inconsistent with Figure 1. S13 also begins turning back toward the
image near a 2.0 mm height. A rounding interval of only ±0.00000005 in an A18 coefficient contributes
about ±3.321 mm of sag at 2.72 mm; printed zero A20 terms also cannot establish the original precision.
The related US10935759B2 Table 4 repeats the same rounded values.

Both rear rims are therefore conservatively truncated at 2.0 mm. This avoids the divergent periphery
but visibly understates the patent's rear envelope. The model is a partial reconstruction, not a faithful
full-aperture replica of Figure 1. Higher-precision source coefficients are needed to restore that envelope;
no values are fitted to the drawing, and no geometry-validation tolerance is relaxed.

## Image Stabilization

Samsung's Galaxy S9 rear-camera specification lists optical image stabilization. Example 1 of the patent does not publish
a decentered stabilization state, a stabilization-group displacement, or an element assignment for OIS. Because the
patent-to-product correlation itself remains inferred, no stabilization motion is modeled or attributed to a particular
element.

## Conditional Expressions

US 2021/0149156 A1 gives ten explicit conditions in ¶¶0094-0096. The selected Example 1 satisfies all ten under the
verified source/model definitions below. Conditions 6 and 7 use the published VST effective-aperture radii as entrance-
pupil-diameter proxies because VST is in front of the lens; those two checks do not independently determine the physical
STO diameter used by the LensVisualizer model.

| # | Patent condition | Verified Example 1 value | Result |
|---:|---|---:|---|
| 1 | `TTL/IMGHT < 2.0` | 1.479142857 | Pass |
| 2 | `FOV ≥ 70°` | 76.72° | Pass |
| 3 | `1.64 < Nmax ≤ 1.75` | 1.661 | Pass |
| 4 | `4.7 < TTL < 6.00 mm` | 5.177 mm | Pass |
| 5 | `4.0 < f < 4.5 mm` | 4.313424827 mm | Pass |
| 6 | `f/EPDmax ≤ 1.7` | 1.387096774 | Pass |
| 7 | `f/EPDmin > 2.0` | 2.388888889 | Pass |
| 8 | `-0.5 < (|Ri|-|Rj|)/(|Ri|+|Rj|) < 0.5` | 0 | Pass |
| 9 | `0.8 < |Ri/Rj| ≤ 1.2` | 1 | Pass |
| 10 | `f14 > f` | 4.418825859 mm > 4.313424827 mm | Pass |

For Condition 1, `IMGHT = 3.50 mm` comes from the maximum image-height ordinate in FIGS. 2, 4, and 6 rather than from the
larger S17 effective-aperture radius. Conditions 4 and 5 retain the patent reference planes and source precision. The
filter-normalized LensVisualizer rear spacing is a model transformation and is not used to rewrite the patent's 5.177 mm
TTL.

## Sources and References

- Jae Hyuk Huh, Jae Hyun Baik, and Yong Joo Jo, **Optical Imaging System**, US Patent Application Publication
  **US 2021/0149156 A1**, published May 20, 2021. Example 1: FIGS. 1-6; Tables 1-4; Eq. 1; ¶¶0073, 0085, 0094-0131.
  Public mirror: https://patents.google.com/patent/US20210149156A1/en
- Samsung Electronics, **Galaxy S9 Specifications / camera specifications**. Rear camera specifications include
  1/2.55-inch-type sensor, 77° FOV, Dual Aperture F1.5/F2.4, AF, and OIS:
  https://www.samsung.com/us/app/smartphones/galaxy-s9/specs/
- Samsung Global Newsroom, **Built for the Way We Communicate Today: Samsung Galaxy S9 and S9+**, February 25, 2018:
  https://news.samsung.com/global/built-for-the-way-we-communicate-today-samsung-galaxy-s9-and-s9-plus
- Samsung Electro-Mechanics, **Camera Module / Main Core Technology**:
  https://sem.samsung.com/global/product/module/camera-module/main-core-technology.do
- Wikimedia Commons, **File:Wombat foot.jpg**, SM-G960F EXIF metadata reporting 4.3 mm and f/1.5:
  https://commons.wikimedia.org/wiki/File:Wombat_foot.jpg
- Camera FV-5, **Technical camera details of Samsung Galaxy S9 - rear main camera**, used only for the 0.10 m
  `closeFocusM` metadata field:
  https://www.camerafv5.com/es/devices/manufacturers/samsung/scv38_scv38_0/
- Official optical-glass catalog sources consulted for coordinate matching: OHARA,
  https://www.ohara-inc.co.jp/en/product/catalog/ ; HOYA,
  https://www.hoya-opticalworld.com/english/datadownload/index.html ; SCHOTT,
  https://www.schott.com/en-us/products/optical-glass-p1000267/downloads ; HIKARI,
  https://www.hikari-g.co.jp/optical_glass/catalog/document/HIKARI_Catalog.pdf ; CDGM,
  https://cdgmglass.com/ ; SUMITA, https://www.sumita-opt.co.jp/en/download/ .
