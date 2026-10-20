## Patent Reference and Design Identification

**Patent:** JP 2007-133138 A (JP2007133138A)
**Application Number:** JP 2005-326011
**Filed:** 10 November 2005
**Published:** 31 May 2007
**Inventors:** Akio Arakawa; Yuichi Muramatsu
**Applicant:** Tamron Co., Ltd.
**Title:** Zoom lens (ズームレンズ)
**Embodiment analyzed:** Example 2, ¶0074–¶0083 and Figure 5

The prescription is Example 2 of the published Japanese application. The production
correlation is the TAMRON SP AF 17-50mm f/2.8 XR Di II LD Aspherical [IF] (A16). The patent
provides the optical numbers; Tamron's product archive and instruction manual establish the
production identity and marketed specifications. Neither source explicitly confirms that this
numerical example is the final production prescription.[1–3]

The correlation rests on several independent points:

1. Example 2 has sixteen physical lens bodies in thirteen air-separated components. Its two
   bonded aspherical layers add two optical media to the numerical model without increasing
   the count of physical lens bodies. Tamron specifies sixteen elements in thirteen groups,
   with two hybrid aspherical elements and one LD element; Example 2 has two bonded
   aspherical layers and a single high-Abbe 1.49700/81.61 element (L2423).
2. The patent's 17.40–48.50 mm, f/2.88 zoom lies close to the marketed 17–50 mm f/2.8 range.
3. The patent's four-group arrangement and objectward movement of G2 for close focusing
   are consistent with an inner-focus lens. Tamron markets the A16 with the [IF] designation.
4. The application was filed in 2005, before the manufacturer's documented 2006 introduction.
5. The patent plots use a 14.5 mm image height; the production lens is intended for APS-C
   digital SLRs. This is convergent format evidence, not proof of an identical image circle.

There are also material limits to the identification. The patent's full fields are 81.1°, 50.6°
and 32.6°, whereas Tamron lists 78°45′ to 31°11′. The patent contains no production mount,
barrel dimensions, motor specification or minimum-focus spacing table. The A16 is the
non-VC lens and must not be confused with the later B005 VC model. Canon EF, Nikon F,
Sony A and Pentax K variants are covered by the manufacturer's documentation; the Nikon
versions include both built-in-motor and earlier body-driven variants.[2,3]

Example 1 of the same application (¶0070–¶0072, Figure 1) fits the product equally well: it
has the same sixteen-element, thirteen-group layout, the same 17.40–48.50 mm F2.88
specification, two bonded aspherical layers and one 1.49700/81.61 element. It differs mainly
in placing the fourth-group hybrid asphere on the rear face of a biconvex lens. No Tamron
construction diagram that would distinguish the two examples was found, so the choice of
Example 2 over Example 1 is not settled by public evidence.

## Optical Architecture

The design has positive, negative, positive and positive functional groups, G1–G4. The
fourth group is itself divided into positive subunits G41 and G42. Functional zoom groups
must be distinguished from the thirteen air-separated components used in a construction
count. The model contains eighteen entries because each source-listed bonded layer has its
own refractive index, thickness and two bounding surfaces.[1, ¶0074–¶0075]

The stop is the patent's plane r16 between G2 and G3, one millimetre ahead of r17. Its axial
location is published. Its diameter and the clear semi-diameters of the lens surfaces are
not published. The modeled apertures are inferred and are discussed below.

The following quantities are calculated at the d line from the prescription. EFL and
BFD are paraxial quantities. BFD is measured from the last lens vertex; the image
track is measured from the first vertex to the printed image plane. The last gap remains
exactly as printed, rather than being moved to the computed best-focus plane.

| State | Calculated EFL (mm) | Calculated BFD (mm) | Printed last gap (mm) | Image track (mm) |
|---|---:|---:|---:|---:|
| Wide | 17.401052 | 39.910759 | 39.9110 | 127.6202 |
| Middle | 29.998596 | 51.227968 | 51.2280 | 140.1775 |
| Tele | 48.497947 | 62.051492 | 62.0510 | 155.3119 |

The small differences between computed BFD and the printed final gap are retained as
source-rounding residuals. They are not repaired by changing the source. The curvature and spacing values remain those printed in the selected example.

BFD exceeds EFL at each published state, establishing the long-back-focus, retrofocus
character of this selected design at those states. These are optical reference-plane
relationships. Tamron's published mechanical length is measured under a different convention
and should not be substituted for the vertex-to-image optical track.

| Functional group | Physical lens bodies | Isolated group EFL (mm) |
|---|---:|---:|
| G1 | 3 | +85.896508 |
| G2 | 5 | -12.438987 |
| G3 | 3 | +42.730576 |
| G4 | 5 | +37.455911 |
| G41 | 1 | +116.125087 |
| G42 | 4 | +49.476649 |

The negative G2 provides the central change in vergence between positive front and rear
assemblies. G3 follows the stop, and the two positive subunits of G4 relay the beam toward
the image. These roles follow from their position and computed power, not from a numerical
aberration decomposition. The patent specifically discusses the aspherical first subunit
of G4 as part of its correction strategy; it does not justify assigning an isolated Seidel
aberration contribution to every glass body.[1, discussion of the fourth-group first unit; ¶0074–¶0077]

The d-line surface-by-surface Petzval sum is +0.002767830289 mm⁻¹, evaluated as
Σ[(n′−n)/(Rnn′)] over every refracting interface, including both bonded layers and all
cemented junctions. It is unchanged by the air-gap zoom motion. This sum does not by itself
predict tangential or sagittal best-focus curves, which also depend on astigmatism and
higher-order effects. No flat-field or image-quality claim is inferred from its sign.

## Element-by-Element Analysis

The element names follow the patent's physical identifiers. The suffix “r” distinguishes
a modeled bonded layer from its substrate. The diagram numbers the physical elements 1–16
from the front, so L221 is Element 4 and L2411 is Element 12, with their resin layers
marked 4r and 12r. The focal lengths below are calculated with each
individual medium bounded by air, preserving its own front/rear radii and thickness. They
are useful power descriptors, but they are not the in-situ power at a cemented interface.
Compound focal lengths are separately identified where relevant. The aspherical polynomial
starts at fourth order and therefore does not change these paraxial focal lengths.

### L211 — Negative Meniscus

nd = 1.84666, νd = 23.78. Glass: 847238 dense-flint class. f = -119.5 mm.

The first medium is the negative member of the front cemented pair. Its rear face
is the shared r2 interface with L212, so the actual refraction there is between two glasses,
not glass and air. Its high index and comparatively low Abbe number describe the published
coordinate pair; they do not establish the manufacturer of the material.

The element's source prescription is in ¶0080, pp18–19; its physical grouping is shown in
Figure 5 and described in ¶0075.[1]

### L212 — Biconvex Positive

nd = 1.72000, νd = 50.25. Glass: 720503 lanthanum-crown class. f = +98.8 mm.

The positive partner of L211 completes the first cemented component. The full pair
has a calculated net focal length of +571.660067 mm, much weaker than either isolated member.
This cancellation is a paraxial result of the three-surface assembly. It is not sufficient
on its own to prove achromatization or a particular residual secondary spectrum.

The element's source prescription is in ¶0080, pp18–19; its physical grouping is shown in
Figure 5 and described in ¶0075.[1]

### L213 — Positive Meniscus

nd = 1.77250, νd = 49.60. Glass: 773496 lanthanum-glass class. f = +100.7 mm.

This air-spaced positive meniscus completes G1. The complete group is positive despite
the negative leading medium. The curved r4/r5 pair and its separation from the front doublet
must be retained together when comparing group power; summing isolated reciprocal focal
lengths would discard thickness and separation effects.

The element's source prescription is in ¶0080, pp18–19; its physical grouping is shown in
Figure 5 and described in ¶0075.[1]

### L221r — Hybrid Resin Layer (1× Asph)

nd = 1.51460, νd = 49.96. Glass: Unmatched (bonded asphere layer; no verified catalog identity). f = -138.7 mm.

This is the first source-listed 0.2 mm bonded layer, with the aspherical outer face r6.
It is counted as an optical medium for tracing, while the patent counts the bonded assembly
as the physical lens L221. “Bonded layer” is established by the source architecture; a
specific resin chemistry or commercial grade is not established.

The element's source prescription is in ¶0080, pp18–19; its physical grouping is shown in
Figure 5 and described in ¶0075.[1]

### L221 — Negative Meniscus

nd = 1.77250, νd = 49.60. Glass: 773496 lanthanum-glass class. f = -22.0 mm.

The substrate behind the first asphere is a strongly negative meniscus. The layer and
substrate share r7, and the full H1 assembly has calculated EFL −18.916071 mm. Its net power
must not be obtained by treating that shared surface as two separated air interfaces.
The aspherical departure changes finite-height bending beyond the paraxial power.

The element's source prescription is in ¶0080, pp18–19; its physical grouping is shown in
Figure 5 and described in ¶0075.[1]

### L222 — Biconcave Negative

nd = 1.83481, νd = 42.72. Glass: 835427 lanthanum-dense-flint class. f = -23.3 mm.

The following air-spaced biconcave lens contributes another negative component to G2.
Its 1.83481/42.72 coordinate pair admits several high-index catalog candidates. The data
retains the patent's numbers and a class-level annotation; selecting a supplier by the
camera-lens brand would be unwarranted.

The element's source prescription is in ¶0080, pp18–19; its physical grouping is shown in
Figure 5 and described in ¶0075.[1]

### L223 — Biconvex Positive

nd = 1.71736, νd = 29.51. Glass: 717295 dense-flint class. f = +22.5 mm.

This biconvex positive element lies between negative components inside G2. The group
therefore contains alternating signs rather than five isolated negative lenses. Its dense-
flint coordinate pair is compatible with the legacy SF1 region, but the patent does not
name SF1 or any glass supplier.

The element's source prescription is in ¶0080, pp18–19; its physical grouping is shown in
Figure 5 and described in ¶0075.[1]

### L224 — Biconcave Negative

nd = 1.77250, νd = 49.60. Glass: 773496 lanthanum-glass class. f = -17.3 mm.

The negative element is the leading member of the second ordinary cemented pair.
Its rear r14 is a glass-to-glass junction with L225. The strong isolated negative power
helps distinguish it from the positive partner, but its in-situ behavior depends on the
shared interface and the converging or diverging bundle delivered by the preceding lenses.

The element's source prescription is in ¶0080, pp18–19; its physical grouping is shown in
Figure 5 and described in ¶0075.[1]

### L225 — Biconvex Positive

nd = 1.75520, νd = 27.51. Glass: 755275 dense-flint class. f = +33.0 mm.

The positive partner completes the rear of G2. The D2 compound remains net negative,
with calculated EFL −40.452749 mm. The following spacing d15 varies with zoom and leads
to the aperture stop. The modeled close-focus axis leaves this gap unchanged because no
finite-focus table is supplied.

The element's source prescription is in ¶0080, pp18–19; its physical grouping is shown in
Figure 5 and described in ¶0075.[1]

### L231 — Biconvex Positive

nd = 1.48749, νd = 70.21. Glass: 487702 low-index crown class. f = +36.9 mm.

The first lens behind the stop is biconvex and positive. The source gives a relatively
low index and high Abbe number for this and several later positive bodies. Such coordinate
choices describe the palette; they do not establish a separately measured contribution
to spherical aberration, coma or field curvature.

The element's source prescription is in ¶0080, pp18–19; its physical grouping is shown in
Figure 5 and described in ¶0075.[1]

### L232 — Positive Meniscus

nd = 1.48749, νd = 70.21. Glass: 487702 low-index crown class. f = +72.8 mm.

This air-spaced positive meniscus is the second positive element of G3. Its power is
weaker than that of L231 when each is considered in air. Both bodies use the same published
coordinate pair, while their curvatures and thicknesses differ. The source does not publish
individual spectral line indices for either one.

The element's source prescription is in ¶0080, pp18–19; its physical grouping is shown in
Figure 5 and described in ¶0075.[1]

### L233 — Negative Meniscus

nd = 1.83400, νd = 37.17. Glass: 834372 lanthanum-dense-flint class. f = -44.2 mm.

The final negative meniscus in G3 opposes the preceding positive power. G3 as a whole
remains positive. This element is followed by the zoom gap d22; the decreasing separation
to G4 is preserved at all three published stations. No independent movement of this lens
within G3 is introduced.

The element's source prescription is in ¶0080, pp18–19; its physical grouping is shown in
Figure 5 and described in ¶0075.[1]

### L2411r — Hybrid Resin Layer (1× Asph)

nd = 1.51460, νd = 49.96. Glass: Unmatched (bonded asphere layer; no verified catalog identity). f = +694484.1 mm.

The second 0.2 mm bonded layer has equal paraxial front and rear radii. Its isolated
paraxial power is consequently extremely weak, although finite thickness makes it nonzero.
The substantial higher-order departure on r23 is a different property; a nearly powerless
paraxial shell can still change finite-height refraction through an aspherical outer face.

The element's source prescription is in ¶0080, pp18–19; its physical grouping is shown in
Figure 5 and described in ¶0075.[1]

### L2411 — Positive Meniscus

nd = 1.48749, νd = 70.21. Glass: 487702 low-index crown class. f = +116.2 mm.

The positive substrate and its bonded layer form all of G41. Their combined focal
length is +116.125087 mm, while the substrate alone has the value above. The patent's
condition involving f41 refers to the combined physical assembly, not to the layer or
substrate evaluated separately.

The element's source prescription is in ¶0080, pp18–19; its physical grouping is shown in
Figure 5 and described in ¶0075.[1]

### L2421 — Positive Meniscus

nd = 1.48749, νd = 70.21. Glass: 487702 low-index crown class. f = +78.3 mm.

This positive meniscus begins G42 after the fixed d25 spacing. G41 and G42 are separate
subunits within the same functional fourth group. Their principal-plane separation is not
identical to that air gap, so the patent's e4 condition must be evaluated from both subunit
matrices rather than from a single prescription thickness.

The element's source prescription is in ¶0080, pp18–19; its physical grouping is shown in
Figure 5 and described in ¶0075.[1]

### L2422 — Biconcave Negative

nd = 1.83400, νd = 37.17. Glass: 834372 lanthanum-dense-flint class. f = -30.6 mm.

The negative member of the rear cemented pair uses the same source coordinates as L233.
Its entrance surface is r28 = −80.6962 mm. This sign and digit sequence are important for
reproducing both the full-system and G4 focal lengths. The interface with L2423 is the
single physical surface r29.

The element's source prescription is in ¶0080, pp18–19; its physical grouping is shown in
Figure 5 and described in ¶0075.[1]

### L2423 — Biconvex Positive

nd = 1.49700, νd = 81.61. Glass: 497816 low-dispersion crown class. f = +37.6 mm.

The positive partner has the highest published Abbe number in the example. This supports
a low-dispersion crown classification, and it is the only element whose coordinates fit
the single LD element Tamron lists for the A16; the LD identification is inferred. The D3 compound has calculated EFL −239.304365 mm,
a weak negative result despite the strong isolated powers of its two members. Neither the
Abbe number nor the compound power establishes apochromatic performance.

The element's source prescription is in ¶0080, pp18–19; its physical grouping is shown in
Figure 5 and described in ¶0075.[1]

### L2424 — Positive Meniscus

nd = 1.48749, νd = 70.21. Glass: 487702 low-index crown class. f = +81.1 mm.

The final positive meniscus completes G42. Its rear vertex is the reference plane for
the printed d32 image gap and the calculated BFD. The source places no sensor cover glass
or filter behind this element in the selected example. None is invented in the model.

The element's source prescription is in ¶0080, pp18–19; its physical grouping is shown in
Figure 5 and described in ¶0075.[1]

## Glass Identification and Selection

The prescription publishes d-line refractive indices and Abbe numbers, not commercial glass
names. Class/code labels preserve that distinction. The two bonded layers remain explicitly
Unmatched. They are not assigned a catalog glass merely because one index happens to be near
a known glass. The following are comparison candidates, not identified production melts.

| Source nd / νd | Adopted annotation | Examples of comparison candidates |
|---|---|---|
| 1.84666 / 23.78 | 847238 dense-flint class | FDS90 (Hoya), S-TIH53W (Ohara), S-TIH53 (Ohara) |
| 1.72000 / 50.25 | 720503 lanthanum-crown class | S-LAL10 (Ohara), J-LAK10 (Hikari), LAC10 (Hoya) |
| 1.77250 / 49.60 | 773496 lanthanum-glass class | S-LAH66 (Ohara), E-LASF016 (Hikari), N-LAF34 (Schott) |
| 1.51460 / 49.96 | Unmatched (bonded asphere layer; no verified catalog identity) | No credible coordinate match established |
| 1.83481 / 42.72 | 835427 lanthanum-dense-flint class | TAFD5F (Hoya), TAFD5G (Hoya), J-LASF05 (Hikari) |
| 1.71736 / 29.51 | 717295 dense-flint class | SF1 (Schott), S-TIH1 (Ohara), J-SF1 (Hikari) |
| 1.75520 / 27.51 | 755275 dense-flint class | S-TIH4 (Ohara), E-FD4 (Hoya), H-ZF6 (CDGM) |
| 1.48749 / 70.21 | 487702 low-index crown class | S-FSL5 (Ohara), J-FK5 (Hikari), FK5 (Sumita) |
| 1.83400 / 37.17 | 834372 lanthanum-dense-flint class | J-LASF010 (Hikari), S-LAH60 (Ohara), S-LAH60V (Ohara) |
| 1.49700 / 81.61 | 497816 low-dispersion crown class | FCD1 (Hoya), H-FK61 (CDGM), J-FK01A (Hikari) |

The material narrative also requires care. ¶0076 proposes molding suitable rear-group
lenses in plastic, while ¶0089 describes G3/G4 lenses as plastic-molded. The numerical
example supplies no chemical compositions or named grades. The catalog-glass comparisons
therefore describe optical-coordinate compatibility, not proof that every physical lens body
is glass or that any catalog material was used in production.[1]

The comparison candidates come from the OHARA, HOYA, Schott, Hikari, CDGM and Sumita
catalogs. SUMITA's K-FK5 datasheet gives νd = 70.4 for the 1.48749/70.21 coordinate, +0.19
from the source value.[10] A candidate's absence from this table is not evidence that a
manufacturer offered no matching glass.

OHARA's S- and L-prefixes and revision suffixes must remain distinct. In particular, its
2025 notice distinguishes S-LAH66 from S-LAH66N and S-TIH53W from S-TIH53WN by dispersion
properties, despite matching nominal d-line indices. A name chosen only from nd would lose
that distinction.[4–7]

The viewer resolves each six-digit class code to one coordinate-compatible catalog glass for
its dispersion. That choice is a modeling convenience, not supplier information. The bonded
layers remain unresolved. No source nC, nF, ng or ΔPgF value exists for any element; the
ΔPgF ≈ +0.031 noted for L2423 is the S-FPL51-class catalog value, not a melt value. Abbe-only data and proxy catalog choices do not establish
APO correction, anomalous-dispersion performance or a measured secondary spectrum.

## Focus Mechanism and Zoom Motion

The patent states that G2 moves toward the object for focusing.[1, ¶0077] It does not give
finite-focus spacing rows, intermediate object distances, close-focus magnifications or a
cam law. The model therefore shows infinity focus only: the two focus entries at each zoom
station are identical, and must not be read as a claim that the same prescription focuses
at both infinity and 0.27 m.

The 0.27 m close-focus distance is the production minimum focus distance from Tamron's
documentation. It is kept as marketed metadata only; no close-focus state or close-focus
performance is modeled. The source identifies the moving group, but a production
MFD alone cannot determine the complete optical movement law or its dependence on zoom.

The source spacing schedule is preserved without smoothing away its middle station:

| Gap after source surface | Wide (mm) | Middle (mm) | Tele (mm) |
|---|---:|---:|---:|
| d5 | 2.4784 | 15.2707 | 26.0258 |
| d15 | 13.9316 | 5.7911 | 0.9983 |
| d22 | 6.5792 | 3.1677 | 1.5168 |
| d32 | 39.9110 | 51.2280 | 62.0510 |

The statements that d5 increases and d15/d22 decrease describe relative group separations.
Absolute movement needs a reference frame. In the fixed-image frame used below, the first
vertex of each group is negative toward the object. This is a reconstruction of vertex
positions from the printed distances, not a separately published cam measurement.

| Group | Wide z (mm) | Middle z (mm) | Tele z (mm) |
|---|---:|---:|---:|
| G1 | -127.6202 | -140.1775 | -155.3119 |
| G2 | -111.5418 | -111.3068 | -115.6861 |
| G3 | -78.5902 | -86.4957 | -95.6678 |
| G4 | -59.8110 | -71.1280 | -81.9510 |

G2 moves slightly imageward between the first two sampled stations and then objectward
between the middle and telephoto stations in this frame. The middle station therefore
brackets a reversal and cannot be discarded. Piecewise-linear interpolation preserves
these stations, but does not establish the actual continuous cam trajectory between them.
The model's focus columns add no further group motion.

## Aspherical Surfaces

The patent's equation (5) is

X(H) = (H²/r) / [1 + √(1 − A(H/r)²)] + A4H⁴ + A6H⁶ + A8H⁸ + A10H¹⁰.

The data file writes the radical as √[1 − (1 + K)(H/r)²], so K = A − 1.
Both source surfaces have A = 1.0, hence K = 0. They have a spherical base with a polynomial
departure. No scaling is applied. Each coefficient Ap has units mm^(1−p), and the source
contains no nonzero odd-order, A12 or higher-order terms.[1, ¶0081, ¶0084–¶0086]

| Surface / medium | K | A4 (mm⁻³) | A6 (mm⁻⁵) | A8 (mm⁻⁷) | A10 (mm⁻⁹) |
|---|---:|---:|---:|---:|---:|
| 6A / L221r | 0 | 2.90197e-05 | -4.65112e-08 | -1.58866e-11 | 6.56635e-13 |
| 23A / L2411r | 0 | -3.95596e-05 | 2.05532e-08 | -1.48358e-10 | 3.67409e-13 |

Surface 6A is the object-facing surface of the bonded assembly in G2. Its positive leading
fourth-order coefficient is modified by the higher terms. Surface 23A lies on the object-
facing bonded assembly of G41 and has a negative leading fourth-order term. The signs of the
full sag departure, rather than an isolated coefficient, describe the actual surface change
at a selected height. The patent explicitly identifies these as bonded aspherical faces;
no particular resin, replication method or supplier is assigned.[1, ¶0075]

| Surface | Modeled semi-diameter (mm) | Departure from spherical base at that radius (mm) |
|---|---:|---:|
| 6A | 12.8 | +0.640507 |
| 23A | 11.8 | -0.748024 |

These departures are calculated at modeled apertures. They are not departures at a
patent-published clear radius. The minimum source layer thickness is an on-axis thickness;
it must not be substituted for the thickness of the full aspherical coating at its rim.
Geometry checks retain the source interfaces and assess the full conic-plus-polynomial sag.

## Conditional Expressions

The four conditions discussed by the patent can be evaluated without guessing a glass name
or a focus law. Group focal lengths use the full source groups in air, and e4 is the interval
between the relevant principal planes of G41 and G42, rather than the d25 vertex gap.

| Condition | Computed value | Published bounds |
|---|---:|---|
| abs(f2)/fw | 0.714841069 | 0.5–0.8 |
| f3/ft | 0.881080085 | 0.5–1.0 |
| f41/f4 | 3.100314009 | 2.8–3.5 |
| e4 (mm) | 12.208587229 | 10.0–18.0 mm |

All four calculated values lie inside their respective ranges. The small departure of the
computed ratio f41/f4 from the printed 3.100 is consistent with the source's displayed ratio
precision. Satisfaction of the inequalities demonstrates these first-order conditions only;
it is not an independent reproduction of every aberration diagram or of the production lens.

## Model Scope and Limitations

The source provides the stop location but no physical iris diameter schedule. The model
sizes the stop by tracing an on-axis ray launched at EFL/(2 × 2.88) to the stop at each
published zoom station. The resulting inferred stop semi-diameters are 7.248015446,
8.182159932 and 9.289930370 mm. Agreement with f/2.88 is a calibration result. It is not an
independent measurement of an unpublished mechanical diaphragm.

Surface semi-diameters start from exact ray envelopes. Where the wide-angle panel of Figure 5
draws a rim clearly higher or lower, the model follows the drawing: L213 is square-cut at
23.0 mm, L222 stands at 9.4 mm (the drawn block, admitted by a 0.96 gap-sag allowance), the G41 hybrid at 11.8 mm, L2421 and the
L2422/L2423 pair at 12.2 mm, and L2424 at 13.2 mm. Every rim clears the axial marginal ray at
f/2.88 and the chief ray to the 14.5 mm image height at all three zoom stations. Where the
figure draws neighbours overlapping (L223 with L224, L232 with L233), the model keeps the
largest rims that do not cross, so the front face of L224 and the facing surfaces of
L232/L233 sit below the drawn height. The figure's flat rear land on L221 cannot be drawn by
the renderer, which joins the two rims of an element with a straight edge. Cemented junction
apertures preserve internal containment. These values are model dimensions and should not be
used as manufacturing measurements.

At the modeled apertures, the thinnest material edge is 0.74 mm (the L221r bonded layer at its
rim; the thinnest glass edge is 1.23 mm, L2421) and the steepest rim angle is 50.0° (surface 8).
The model covers an APS-C image circle of 14.2 mm radius at all three zoom stations. Toward the
corners the drawn rims cut part of the off-axis bundle, most at the telephoto end, where the
rear group passes about half of the meridional bundle at the 16° corner field; this vignetting
follows from the modeled apertures and is not a measured property of the production lens.
Full-field transmission and production MTF are not established.

The unchanged source spacings describe infinity-focus designs. No finite-focus optical
performance, stabilization system or apochromatic performance is inferred.

## Sources

1. Japan Patent Office, JP 2007-133138 A, *Zoom lens*, 31 May 2007. Original supplied PDF;
   Example 2 in ¶0074–¶0083, pp17–20; asphere equation (5), p20; Figure 5 and aberration
   Figures 6–8, p22. [Searchable publication](https://patents.google.com/patent/JP2007133138A/en).
2. Tamron, [Model A16 archived product specifications](https://www.tamron.com/jp/consumer/lenses/data/af-lens/a16.html),
   accessed 2 October 2026. Product identity, construction, marketed range/aperture, MFD,
   mounts and release year; not a patent attribution.
3. Tamron, [A16 English instruction manual, revision 1208](https://s3-ap-northeast-1.amazonaws.com/tamron-docs/consumer/support/download/inst/a16/a16inst_1208_en.pdf),
   accessed 2 October 2026. APS-C use, marketed specification and mount-dependent notes.
4. OHARA, [S-LAL10](https://oharacorp.com/glass/s-lal10/),
   [S-LAH66](https://oharacorp.com/glass/s-lah66/) and
   [S-FSL5](https://oharacorp.com/glass/s-fsl5/) manufacturer data; accessed 2 October 2026.
5. OHARA, [S-TIH53WN, S-LAH66N and S-LAL18N revision notice](https://www.ohara-inc.co.jp/en/news/2025/0127/14998/),
   30 January 2025. Distinguishes revised dispersion coordinates from preceding grades.
6. HOYA, [Optical-glass data download index](https://www.hoya-opticalworld.com/english/datadownload/index.html),
   current index accessed 2 October 2026; retained 2026-07-07 manufacturer AGF inventory.
7. Hikari Glass, [Optical Glass Catalog, 1 June 2025](https://www.hikari-g.co.jp/optical_glass/catalog/document/HIKARI_Catalog.pdf),
   accessed 2 October 2026. Catalog comparison evidence, not source-melt identification.
8. Schott, [Optical Glass catalog](https://media.schott.com/api/public/content/ff189abcb12f498aa221f54fd0b2055c?v=f6ee045d),
   official catalog, accessed 2 October 2026. SF1 and related comparison coordinates.
9. CDGM, [Optical-glass database](https://www.cdgmgd.com/database/toWebDatabase.htm?k=Products_Data&url=database),
   accessed 2 October 2026. H-FK61 comparison row.

10. SUMITA, [K-FK5 manufacturer datasheet, catalog version 13.00.00](https://www.sumita-opt.co.jp/abbe/pdf/k-fk5.pdf?1633830818=), accessed 2 October 2026. Coordinate comparison only.
