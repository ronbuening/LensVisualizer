## Patent Reference and Design Identification

**Patent:** JP 2022-073433 A
**Filed:** 2 November 2020
**Published:** 17 May 2022
**Inventor:** Takeshi Asakura
**Applicant:** Sigma Corporation
**Title:** Imaging optical system
**Embodiment analyzed:** Numerical Example 1

The prescription represents a construction correlation with the SIGMA 24mm f/2
DG DN Contemporary, rather than a manufacturer-confirmed factory prescription.
The original Japanese publication supplies the numerical design; its attached PAJ
front matter provides the Latin-script inventor name. The prescription and
asphere tables occur on PDF p. 11 and PDF p. 12 respectively, corresponding to
printed pages 10 and 11. The extra PDF page is the PAJ cover. [1]

Several independent features support the selected correlation:

1. The example contains 13 glass elements in 11 air-separated groups, matching
   the production construction count.
2. Two double-sided aspheric elements provide four aspheric surfaces. Sigma
   describes two glass-molded aspheric elements in the product.
3. Two 1.55032/75.50 glasses and one 1.43700/95.10 glass provide a low-dispersion
   arrangement consistent with the marketed two SLD and one FLD elements.
   Those commercial designations do not identify a glass supplier or melt.
4. Native infinity focal length is 24.00 mm, with a printed f-number of 2.07;
   the commercial lens is designated 24mm F2.
5. The application was filed before Sigma's September 2021 announcement and
   24 September 2021 Japanese release. [2,3]

Important differences remain. Native infinity coverage is 90.08°, whereas Sigma
lists 84.1°. The patent's finite state is 255 mm from object to image, whereas
Sigma lists a 245 mm minimum focusing distance. The explanation by digital
correction remains unverified. Neither difference is removed by scaling or by
substituting marketed values into the optical model.

The product is a full-frame mirrorless lens supplied in L-Mount and Sony E-mount.
The original DG DN product page is used for this identification; a later product
bearing a shortened DG name is not substituted as the selected lens. [2]

## Optical Architecture

The design uses three functional groups with positive-negative-positive power,
with the aperture stop between the front positive group G1 and the movable
negative group G2. Functional groups are distinct from the 11 air-separated
optical groups. The front group contains eight elements, the focus group two,
and the fixed rear group three (¶0066–0069). [1]

The principal architectural choice is to place a small negative focusing unit
behind a fixed stop. The patent explains that leaving both the large front group
and the stop stationary reduces moving mass (¶0021–0023). Its positive and
negative focus elements provide two refractive components within that compact
moving group; this is a source-described chromatic-control strategy, not a
quantified claim of residual color performance.

At infinity, the calculated focal lengths of G1, G2 and G3 are respectively
+25.004484 mm, -74.466760 mm and +59.891030 mm. These are isolated group powers
with air outside each group, not element powers or sums of element focal lengths.
The complete system has EFL 24.001372 mm and paraxial back focal distance
17.180528 mm from the final vertex. The complete lens therefore is not classified
as retrofocus solely because the patent describes a retrofocus-like distribution
within G1 (¶0029). Its first-vertex-to-image track is approximately 90.00 mm. [1]

The source includes no rear cover plate or in-lens filter. No scaling, plate
replacement, source-value repair or synthetic cement layer is applied. The two
cemented boundaries are retained as actual glass-to-glass interfaces.

## Element-by-Element Analysis

The focal lengths below are calculated for each individual element isolated in
air. In the two cemented pairs, this convention deliberately differs from the
power of the assembled pair and from the element's in-situ contribution. Glass
names denote catalog-coordinate equivalents only; the patent prints nd and νd
without naming the production supplier.

### L11 Negative Meniscus

nd = 1.59349, νd = 67.00. Glass: PCD51 (HOYA coordinate equivalent). f = -39.553 mm.

The object-convex front meniscus supplies negative power ahead of the positive
bulk of G1. Its more strongly curved rear surface makes the meniscus negative.
The placement is part of the patent's front-group arrangement in ¶0067. A
specific share of coma or distortion correction cannot be assigned from power
sign alone.

### L12 Negative Meniscus

nd = 1.55032, νd = 75.50. Glass: FCD705 (HOYA coordinate equivalent). f = -179.350 mm.

The second object-convex negative meniscus is much weaker than L11 in standalone
power. Its high Abbe number reduces material dispersion relative to the dense
flints used elsewhere in G1. The product's SLD terminology is consistent with this
position, but is not proof that the selected HOYA equivalent was used. L12, L13 and L18
carry inferred low-dispersion display tags on that basis; the patent designates none of
them. [1,2]

### L13 Biconcave Negative

nd = 1.43700, νd = 95.10. Glass: FCD100 (HOYA coordinate equivalent). f = -48.089 mm.

This biconcave negative element forms the front member of the first cemented
pair. Its very high Abbe number contrasts with the dense-flint positive L14.
That pairing provides independently adjustable power and dispersion; no exact
secondary-spectrum cancellation is inferred from the Abbe values alone.

### L14 Biconvex Positive

nd = 1.92119, νd = 23.96. Glass: FDS24 (HOYA coordinate equivalent). f = +30.708 mm.

L14 is the biconvex positive partner of L13. Their common surface is a genuine
glass-to-glass interface. The combined pair has positive focal length
+78.349901 mm, while the individual L13 and L14 focal lengths are evaluated
separately in air. The source explicitly describes this cemented construction
in ¶0067.

### L15 Negative Meniscus

nd = 1.85451, νd = 25.15. Glass: NBFD25 (HOYA coordinate equivalent). f = -23.013 mm.

The rear-convex negative meniscus follows the first cemented pair. Its rear
surface is weakly curved, not planar, and the finite source radius is retained.
The element supplies a substantial negative standalone contribution ahead of
the strong positive aspheric L16; no numerical aberration allocation is claimed.

### L16 Biconvex Positive (2× Asph)

nd = 1.85135, νd = 40.10. Glass: M-TAFD305 (HOYA coordinate equivalent). f = +19.818 mm.

This biconvex positive element carries aspheres on surfaces 10A and 11A.
It has the strongest positive standalone power in the front group. The two
aspheric profiles add higher-order shape control while retaining the printed
vertex curvatures and first-order power. The complete coefficient sets, rather
than an even-order refit or spherical approximation, are retained.

### L17 Negative Meniscus

nd = 1.85451, νd = 25.15. Glass: NBFD25 (HOYA coordinate equivalent). f = -37.824 mm.

L17 is the negative object-convex member of the second cemented pair.
The junction carries the following element's medium, so its surface refraction
cannot be represented as a glass-to-air exit. Its standalone negative power is
reported only as an element descriptor.

### L18 Biconvex Positive

nd = 1.55032, νd = 75.50. Glass: FCD705 (HOYA coordinate equivalent). f = +23.247 mm.

The biconvex positive L18 completes G1 and the second cemented pair. It uses the
same native low-dispersion coordinate as L12. The L17–L18 assembly has positive
focal length +57.228024 mm. The combination of dense-flint negative and
low-dispersion positive elements is a chromatic-design resource, but quantitative
color correction requires more evidence than the two native Abbe values.

### L21 Negative Meniscus

nd = 1.64769, νd = 33.84. Glass: E-FD2 (HOYA coordinate equivalent). f = -41.560 mm.

This object-convex negative meniscus is the first element of the moving G2 unit.
The patent identifies it as Ln and explains that it receives a converging beam
from G1 (¶0052–0053). The stated intention is to limit aberration changes while
keeping the moving group compact. Its actual residual coma is not separately
measured here.

### L22 Positive Meniscus

nd = 1.98613, νd = 16.48. Glass: FDS16-W (HOYA coordinate equivalent). f = +91.645 mm.

The positive object-convex meniscus L22 is the second, air-separated member of
G2 and is identified as Lp. Its weak positive power partly balances L21 while
leaving the group negative. The patent constrains its focal length relative to
that of G2 through condition (4). The native nd = 1.98613 is retained even though
the chosen current catalog equivalent has a slightly different rounded index.

### L31 Biconvex Positive (2× Asph)

nd = 1.69350, νd = 53.20. Glass: M-LAC130 (HOYA coordinate equivalent). f = +32.457 mm.

L31 begins the fixed positive rear group and carries aspheres 20A and 21A.
The patent discusses rear-group aspheres as a means of controlling field
curvature (¶0055). This source-stated purpose does not establish a flat focal
surface or measured field performance for every modeled aperture.

### L32 Negative Meniscus

nd = 1.85451, νd = 25.15. Glass: NBFD25 (HOYA coordinate equivalent). f = -96.839 mm.

This negative object-convex meniscus follows the rear aspheric positive element.
Its position and shape belong to the three-element rear-group arrangement
specified in ¶0069. Its modeled apertures are estimated from Figure 1: the front
surface follows the drawn rim at 13.9 mm, while the concave rear surface is held
at 12.7 mm, just inside the drawn 12.9 mm end of the curve, so that the
shared-band clearance to L33 is kept.

### L33 Negative Meniscus

nd = 1.85451, νd = 25.15. Glass: NBFD25 (HOYA coordinate equivalent). f = -171.715 mm.

The last negative meniscus is convex toward the image. Its comparatively weak
standalone power completes the fixed rear group before the source back-focus
air gap. Its finite radii, index and thickness are retained without adding an
unpublished sensor glass stack.

## Glass Identification

The source glasses are native d-line coordinates: the patent identifies the
reference wavelength as 587.56 nm (¶0057). Nine distinct pairs occur in the
prescription. The independent review compared six primary catalog sources from HOYA, OHARA,
SCHOTT, SUMITA, HIKARI and CDGM, preserving OHARA S- and L-prefix distinctions. The table presents selected HOYA
coordinate equivalents, rather than confirmed production materials. [1,4,5]

| Equivalent | Native nd | Native νd | Elements |
|---|---:|---:|---|
| E-FD2 | 1.64769 | 33.84 | L21 |
| FCD100 | 1.43700 | 95.10 | L13 |
| FCD705 | 1.55032 | 75.50 | L12, L18 |
| FDS16-W | 1.98613 | 16.48 | L22 |
| FDS24 | 1.92119 | 23.96 | L14 |
| M-LAC130 | 1.69350 | 53.20 | L31 |
| M-TAFD305 | 1.85135 | 40.10 | L16 |
| NBFD25 | 1.85451 | 25.15 | L15, L17, L32, L33 |
| PCD51 | 1.59349 | 67.00 | L11 |

The HOYA dispersion coefficients reproduce the selected native d-line/Abbe
coordinates within the documented small catalog residuals. Several coordinates
admit multiple cooling, molding or historical catalog variants. For example,
FDS24-family alternatives share a coordinate, and the L31 coordinate has both
HOYA and OHARA near-equivalents. A successful numeric comparison does not choose
a production supplier or determine the molding process.

No per-element line indices or partial-dispersion values are printed for this
example. Catalog coefficients are retained as equivalence evidence, but are not
copied into the data as measured patent nC, nF or ng. No claim of apochromatic
performance, measured secondary-spectrum suppression or exact production color
correction is made. Independent catalog matching also found an exact rounded coordinate counterpart
for PCD51 in HIKARI J-PSKH4, and multiple near-equivalents for the E-FD2 and
M-LAC130 coordinates. These alternatives reinforce the supplier-identity limit.
The catalog search covers the identified editions, not every historical melt.

## Focus Mechanism

The source specifies inner focusing: G2 moves imageward while G1, the stop and
G3 remain stationary relative to the image plane (¶0066). Both published
configurations are retained. The finite object distance is measured from the
object to the first lens vertex; adding the optical track gives the 255 mm
object-to-image distance. [1]

| Quantity | Infinity | Native finite state |
|---|---:|---:|
| Object to first vertex | infinity | 165.0000 mm |
| Stop-to-G2 gap d15 | 3.2000 mm | 8.5816 mm |
| G2-to-G3 gap d19 | 8.2253 mm | 2.8436 mm |
| Final vertex to image | 17.1800 mm | 17.1800 mm |
| Published EFL | 24.00 mm | 23.36 mm |
| Computed EFL | 24.001372 mm | 23.362733 mm |
| Published full field | 90.08° | 83.27° |
| Published f-number | 2.07 | 2.18 |

The increase in d15 gives 5.3816 mm of imageward motion. The independently
printed decrease in d19 differs by 0.0001 mm, consistent with tabulation
rounding; the source values are preserved instead of silently enforcing equality.
The finite model's paraxial magnification is -0.137541 and its predicted image
distance is 17.180650 mm, close to the authored 17.1800 mm plane.

The intermediate model uses linear interpolation of those gaps, not a published
continuous cam law. With inverse-distance focus labels, tested intermediate
states in the original five-position check have up to 0.356 mm of paraxial
defocus at the fixed image plane. A denser 1,000-position scan finds a maximum
sampled magnitude of 0.358193 mm near focusT = 0.540. That
limitation does not change the published endpoints and is not hidden by moving
the image plane. The marketed 245 mm minimum focus is outside the modeled native
endpoint; no extrapolated mechanical law is supplied.

## Aspherical Surfaces

Both L16 and L31 are double-sided aspheres. The native equation is

z(h) = (h²/R) / [1 + √(1 − (1 + K)(h/R)²)] + Σ Aₚhᵖ.

The source's K is already the conventional conic constant; all four values are
zero. No K-to-(K−1) conversion is required. Polynomial orders are the even
powers A4 through A14, in mm^(1−p), with h and z in mm. All coefficients below
retain the original signs and source precision (¶0060, PDF p. 12). [1]

| Surface | A4 | A6 | A8 | A10 | A12 | A14 |
|---|---:|---:|---:|---:|---:|---:|
| 10A | -1.14330E-05 | 9.28267E-09 | -2.05847E-12 | 3.52257E-13 | -2.10462E-15 | 0.00000E+00 |
| 11A | 6.80065E-06 | -2.99492E-09 | 6.42501E-11 | -7.03480E-14 | -3.63922E-16 | 0.00000E+00 |
| 20A | -1.35312E-05 | 1.54289E-08 | 1.78792E-10 | -1.96390E-12 | 9.36503E-15 | 0.00000E+00 |
| 21A | 5.37598E-07 | -3.68634E-08 | 5.74454E-10 | -4.41849E-12 | 1.46830E-14 | 0.00000E+00 |

At the inferred modeled apertures, the signed departures from the corresponding
vertex-radius spheres are:

| Surface | Modeled semi-diameter | Sag departure |
|---|---:|---:|
| 10A | 11.9 mm | -200.650 µm |
| 11A | 11.9 mm | +146.768 µm |
| 20A | 13.1 mm | -218.551 µm |
| 21A | 13.1 mm | +45.149 µm |

The negative front-surface departures move the rim objectward relative to the
base sphere, while the positive rear-surface departures make the negative sag
less deep. The complete polynomial, rather than the A4 sign alone, governs the
rim shape. These are computed departures at inferred apertures, not published
aspheric tolerances or measured production departures.

Sigma describes the product as using glass-molded aspheric elements. That
manufacturer statement supports the product construction, but does not establish
an exact process or cooling variant for every coordinate-equivalent glass. [2]

## Conditional Expressions

The inequalities and their definitions are given in ¶0020, ¶0028, ¶0034, ¶0039
and ¶0043; the numerical comparison table is on printed pages 18–19 (PDF pages
19–20). All are evaluated at the source infinity configuration. [1]

| Condition | Calculated ratio | Printed rounded value |
|---|---:|---:|
| -5 < f2/f < -2.5 | -3.102604 | -3.1 |
| 0.2 < pp2G1/f1 < 1.0 | 0.600452 | 0.6 |
| 2.0 < f3/f < 3.5 | 2.495317 | 2.5 |
| 0.7 < fLp/abs(f2) | 1.230687 | 1.2 |
| 0.05 < D_EXP_G2 × IH / (D_EXP_IMG × f) < 0.25 | 0.107989 | 0.11 |

Here pp2G1 is the rear principal-point offset from G1's last surface, and fLp is
the standalone focal length of L22. The final condition compares exit-pupil
separation from G2's last surface with exit-pupil separation from the image,
scaled by image height and whole-system focal length. Every ratio satisfies its
printed range; the small differences from the printed values follow the source
table's rounding precision.

The calculated surface-by-surface Petzval sum is +0.002135134 mm⁻¹. This scalar
sum is not a measurement of the tangential or sagittal image surface, and does
not by itself establish field flatness or an aberration-correction result.

## Modeling Limits

The physical iris diameter is absent from the patent. Its inferred radius,
9.303667 mm, is calibrated by tracing the native infinity entrance-pupil radius
through the front optics to the source stop. It is not an independently measured
physical aperture. Exact image-space working f-numbers are approximately 2.071742
at infinity and 2.175911 at the native finite state, agreeing with the source
rounding without introducing a changing iris schedule.

All other semi-diameters are estimated from Figure 1, which is drawn to the
prescription's own vertex spacing, and are floor-checked by exact-ray clearance
and shared-band geometry. Element rims follow the drawn edges, so each element
renders as the squared block the figure shows. The flat lands drawn on surfaces
4, 5, 8, 17 and 19 are not modeled: the rears of L21 and L22 are carried to their
element edges at 9.6 and 10.1 mm, where the drawn curves end at 8.2 and 8.8 mm,
and the L17–L18 junction is carried to the L18 rim. Only the rear of the front
element (13.1 mm) and the rear of L32 (held at 12.7 mm against a drawn 12.9 mm by
the inter-element gap clearance) stop at the drawn curve end, because the full
edge height is not geometrically possible there. No
source-listed clear diameter is changed, because the prescription does not
publish one.

At five sampled focus positions, all sampled axial iris rays pass. Chiefs and
central-quarter-pupil samples remain inside the inferred apertures at axial,
half and full field. The infinity 45.04° chief reaches 21.631118 mm image height;
the finite chief at 21.63 mm independently recovers an 83.267736° full incoming
field. These results support retaining the native field values, without assuming
the unverified digital-correction explanation for the commercial field difference.

Outer-pupil rays can be clipped: the front and rear groups trim the bundle
toward the corner. The L21 rear rim (9.6 mm) stands 1.5 mm outside the F/2.07
axial marginal ray, which is 8.08 mm high there at infinity. Some outer aims also fail
to find a valid intersection and remain numerically unresolved; they are not
relabeled as proven physical vignetting. The polar sample counts are not area-weighted illumination or transmission
measurements. Independent meridional checks at 17 focus positions also contain
the full axial iris and the central quarter-radius bundle at all three sampled
fields; this remains finite coverage, not a proof over every ray or state. Positive edge thickness,
actual rim-slope, conic-domain and shared-band gap checks apply to the inferred
geometry; finite sampling does not prove every continuous field or focus state.

No modulation transfer, coating performance, ghosting, manufacturing tolerance,
photographic color rendering or production-unit equivalence is inferred from the
prescription alone.

## Sources

1. Japan Patent Office, [JP 2022-073433 A](https://depatisnet.dpma.de/DepatisNet/depatisnet?action=pdf&docid=JP2022073433A),
   original Japanese publication, 17 May 2022. ¶0057–0064 define conventions;
   ¶0065–0070 and PDF pp. 11–12 supply Numerical Example 1; Figure 1 and condition
   values appear on PDF pp. 19–20. Original supplied PDF retained without alteration.
2. Sigma, [24mm F2 DG DN Contemporary product specifications](https://www.sigma-global.com/en/lenses/c021_24_2/),
   retrieved 4 October 2026. Product construction, mounts, full-frame format,
   marketed field and minimum focus, and glass-molded asphere description.
3. Sigma, [Japanese announcement and release notice](https://www.sigma-global.com/jp/news/2021/09/09/16502/),
   9 September 2021; release 24 September 2021.
4. HOYA, [Optical glass data downloads](https://www.hoya-opticalworld.com/english/datadownload/),
   HOYA20260707 include-obsolete AGF catalog, retrieved 4 October 2026.
   Relevant coefficient rows and coordinate residuals are retained as equivalence evidence.
5. OHARA, [Optical glass catalog](https://oharacorp.com/glass-catalog/),
   OHARA_260701 numerical catalog, retrieved 4 October 2026. Candidate comparisons
   preserve S- and L-prefix identity rather than collapsing those families.

6. SCHOTT, [Optical glass downloads](https://www.schott.com/en-gb/products/optical-glass-p1000267/downloads),
   June 2025 preferred/special AGF catalog, retrieved 4 October 2026.
7. SUMITA, [Optical glass data](https://www.sumita-opt.co.jp/en/download/),
   21 August 2026 AGF edition, retrieved 4 October 2026.
8. HIKARI, [Optical glass catalog](https://www.hikari-g.co.jp/optical_glass/catalog/),
   June 2025 all-glass numerical workbook, retrieved 4 October 2026.
9. CDGM, [Optical glass data sheets](https://www.cdgmgd.com/accessory/2021-11-18/client/www.cdgmgd.com/f44bac33-96f4-4f40-a15d-54061708cbaa.pdf),
   manufacturer-hosted collection, retrieved 4 October 2026.
