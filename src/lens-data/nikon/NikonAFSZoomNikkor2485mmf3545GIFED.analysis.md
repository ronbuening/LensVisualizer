# NIKON AF-S ZOOM-NIKKOR 24-85mm f/3.5-4.5 G IF-ED

## Patent Reference and Design Identification

**Patent:** JP 2003-241093 A
**Application Number:** JP2002039122A
**Filed:** 2002-02-15
**Published:** 2003-08-27
**Inventor:** Satoshi Hayakawa
**Applicant:** Nikon Corporation
**Title:** Zoom lens
**Embodiment analyzed:** Example 2

The prescription is taken from Example 2 of JP 2003-241093 A. The patent describes a five-group zoom with positive,
negative, positive, negative, and positive group powers and gives Example 2 at 25.0, 50.0, and 82.5 mm infinity-focus
stations (JP 2003-241093 A, ¶¶0031-0036; PDF pp. 5-6, Tables 4-6). The implemented design preserves those native patent
dimensions; it is not uniformly scaled to the marketed 24-85 mm endpoints.

The identification with the production AF-S Zoom-Nikkor 24-85mm f/3.5-4.5G IF-ED is a research correlation rather than a
manufacturer-confirmed patent attribution. Several independent features converge:

1. Nikon specifies the production lens as a 24-85 mm full-frame F-mount zoom with 15 elements in 12 groups, one ED glass
   element, one hybrid-type aspherical element, internal focusing, 0.38 m closest focus, and 1:4.7 maximum reproduction.
2. Example 2 reconciles to 15 physical elements in 12 air-separated groups when the thin medium at surfaces 6-7 and its
   glass substrate are treated as one physical hybrid component represented by two optical media.
3. The patent uses one aspherical surface in G2 and one very-low-dispersion coordinate, `nd = 1.49782`, `νd = 82.5`;
   those features align with Nikon's one hybrid asphere and one ED-element production specification without proving the
   exact production melt.
4. The patent states that focusing is performed by G2, while Nikon identifies the production lens as IF (Internal
   Focusing) (JP 2003-241093 A, ¶0045).
5. The patent stations of 25.0-82.5 mm, f/3.6-4.7, and 84.8°-28.0° are close to, but deliberately kept separate from,
   Nikon's marketed 24-85 mm, f/3.5-4.5, and 84°-28°30′ specifications.
6. Nikon's product history places the lens in 2002; the application was filed on 2002-02-15 and published on 2003-08-27.

No Nikon source used for this analysis states that JP 2003-241093 A is the production lens's patent. The data file therefore
uses the patent as the prescription source and the Nikon specifications as correlation and product metadata, not as proof
of formal patent-product identity.

The final implemented infinity-state first-order results are 24.965152 mm, 50.061770 mm, and 82.416179 mm EFL. Their
corresponding back focal distances, measured from the last lens vertex to the image plane in air, are 38.571499 mm,
45.371659 mm, and 48.571774 mm. These values were recomputed from the final `.data.ts` by both sequential reduced-angle
tracing and an independent ABCD chain; they are not substituted marketing values.

At the 25 mm station only, BFD exceeds EFL, so the design satisfies the project's `BFD > EFL` retrofocus criterion there.
The 50 mm and 82.5 mm stations do not. None of the three published stations satisfies the project's telephoto criterion
`TL/EFL < 1` when `TL` is measured from the first to the last lens vertex.

## Optical Architecture

Example 2 is a five-group positive-negative-positive-negative-positive zoom. The patent makes the G2 architecture central
to the design: G2 contains, in patent-local nomenclature, a first negative component, a second negative component, a first
positive component, and a second positive component (JP 2003-241093 A, ¶¶0005, 0009-0011, 0031-0032). The LensVisualizer
labels are global physical-element labels, so the four physical components of patent G2 correspond here to L4, L5, L6,
and L7 rather than to the patent's local L1-L4 notation.

The independently calculated isolated air-to-air group powers are:

| Group | Physical contents | Power (1/mm) | Isolated EFL (mm) |
|---|---|---:|---:|
| G1 | L1-L3 | +0.012047556 | +83.004390 |
| G2 | L4-L7 | -0.068592753 | -14.578800 |
| G3 | L8-L10 | +0.045286868 | +22.081456 |
| G4 | L11-L12 | -0.027905309 | -35.835474 |
| G5 | L13-L15 | +0.025198057 | +39.685600 |

These are isolated group powers calculated from the final prescription with each group placed in air. They describe the
intrinsic power sign and magnitude of each group; they are not equivalent to a claim about any one group's in-situ
aberration contribution.

The patent specifies the zoom-gap sequence directly. From wide to tele, D5 grows from 2.45 to 29.35 mm, D13 falls from
13.20 to 2.29 mm, D18 grows from 1.45 to 11.46 mm, and D22 falls from 11.21 to 1.19 mm (JP 2003-241093 A, ¶0036, Table 6).
With the image plane fixed, the final-model group-front shifts from 25.0 to 82.5 mm are G1 -26.00 mm, G2 +0.90 mm,
G3 -10.01 mm, G4 0.00 mm, and G5 -10.02 mm, where positive is imageward. Thus G4 is stationary between the three
published stations in this reference frame, while G2 has only a small net imageward change and the other moving groups
shift objectward overall. Sampling the three patent stations does not prove the detailed continuous cam path between them.

The patent's general discussion attributes two design-level benefits to its G2 arrangement: bringing chief rays in G1 and
G2 closer to the axis to reduce group diameter, and dividing G2 so its front portion is negative and rear portion positive
to make aberration correction easier (JP 2003-241093 A, ¶0010). It also states that including a cemented component in G2
can reduce the size of that group and lessen sensitivity to decenter from manufacturing error (¶0011). Those statements
are patent design claims; they are not inferred from the glass codes alone.

The final model contains 28 refracting surfaces plus one inserted aperture-stop plane. It retains the source's 15 physical
lens count, but its `elements` array has 16 optical-media entries because the physical hybrid aspherical component is split
into a thin front layer and a glass substrate. No rear cover plate, filter, dummy plane, or mechanical component is added.
The patent's printed terminal surface labels 36, 37, and 38 are corrected to sequential model labels 26, 27, and 28; their
numerical radii, spacings, and media are unchanged.

## Element-by-Element Analysis

The focal lengths below are standalone air-to-air component powers calculated from the final parsed prescription. They are
not focal lengths of the elements in situ inside the complete zoom. Cemented-group net powers are stated separately where
useful so that individual-element power is not confused with compound power.

### G1 — L1/L2 Cemented Pair and L3

#### L1 — Negative Meniscus

`nd = 1.84666`, `νd = 23.8`. Glass: `847238 class`. Standalone `f = -118.980 mm`.

L1 is the first physical element and the negative member of the front cemented pair D1. Its rear surface is the cemented
junction into L2. The high-index, relatively low-Abbe coordinate is retained as a six-digit class rather than assigned to
a specific supplier glass, because the patent gives optical coordinates rather than a melt name.

#### L2 — Biconvex Positive

`nd = 1.69680`, `νd = 55.5`. Glass: `697555 class`. Standalone `f = +96.577 mm`.

L2 shares the surface-2 cemented boundary with L1 and completes D1. Although the individual components have opposite signs,
the calculated air-to-air net power of the cemented pair is only `+0.001944766 1/mm`, equivalent to approximately
`+514.201 mm`. This weak positive compound result is distinct from the individual standalone powers of L1 and L2.

#### L3 — Positive Meniscus

`nd = 1.78800`, `νd = 47.4`. Glass: `788474/788475 class`. Standalone `f = +98.638 mm`.

L3 is the air-separated third element of G1. In the complete group it follows the weakly positive D1 pair and completes the
positive-power G1 assembly. No specific aberration-correction role is assigned to L3 beyond this verified structural and
power relationship because the patent does not identify one at the element level.

### G2 — Hybrid L4, Cemented L5/L6, and L7

G2 is the strongest isolated group in the prescription and has negative net power, `f = -14.579 mm` in air. The patent
specifically discusses the negative-front/positive-rear distribution of G2 and identifies the `νd = 22.8` positive
component used to satisfy its dispersion condition (JP 2003-241093 A, ¶¶0010, 0014, 0032).

#### L4 — Physical Hybrid Aspherical Component

The physical L4 is represented by two authored optical-media entries:

- **L4r thin layer:** `nd = 1.55389`, `νd = 38.1`. Glass: `Unmatched (thin hybrid-asphere layer, n_d=1.55389, v_d=38.1)`.
- **L4 substrate:** `nd = 1.83481`, `νd = 42.7`. Glass: `835427 class`.

Together they form one physical negative meniscus with standalone air-to-air `f = -18.837 mm`. The 0.10 mm front medium,
the Nikon production specification for one hybrid-type aspherical element, and the 15-element physical count support the
composite interpretation. The patent itself does not say that the thin medium is resin, so the analysis does not treat
that material identity as a source fact.

Surface 6A is the outer aspherical surface of the thin layer. The hybrid split therefore changes the number of modeled
media entries but not the physical lens count.

#### L5 — Biconcave Negative, Cemented to L6

`nd = 1.80400`, `νd = 46.6`. Glass: `804466 class`. Standalone `f = -16.532 mm`.

L5 is the negative member of cemented pair D2. It is followed directly by the positive L6 across the surface-10 cemented
interface. The pair's calculated net air-to-air focal length is `-23.636 mm`; this compound result remains negative even
though L6 alone is positive.

#### L6 — Positive Meniscus, Cemented to L5

`nd = 1.80809`, `νd = 22.8`. Glass: `808227/808228 high-dispersion class`. Standalone `f = +50.905 mm`.

L6 is the first positive component in the patent's local G2 sequence. Its `νd = 22.8` is explicitly published for Example 2
and satisfies the patent's condition `νd < 23.3` (JP 2003-241093 A, ¶¶0007, 0012-0015, 0032, 0036). The patent states that
its chromatic strategy uses a dispersion difference between positive and negative components in G2. That is a patent-level
statement about the design strategy; it is not an assertion that the class label identifies an anomalous-dispersion glass.

#### L7 — Positive Meniscus

`nd = 1.84666`, `νd = 23.8`. Glass: `847238 class`. Standalone `f = +34.380 mm`.

L7 is the final physical component of G2 and the second positive component in the patent's local G2 sequence. It closes the
negative group before the aperture-stop gap. The patent's G2 architecture deliberately places positive power behind the
negative front portion (¶0010); the complete isolated group nevertheless remains strongly negative.

### G3 — L8/L9 Cemented Pair and L10

#### L8 — Negative Meniscus

`nd = 1.84666`, `νd = 23.8`. Glass: `847238 class`. Standalone `f = -36.126 mm`.

L8 is the negative front member of D3. It is cemented directly to L9 and begins the positive-power G3 assembly after the
aperture stop.

#### L9 — Biconvex Positive

`nd = 1.58913`, `νd = 61.2`. Glass: `589612 class`. Standalone `f = +20.118 mm`.

L9 is substantially stronger in standalone positive power than L8 is in negative power. The calculated net power of the
D3 cemented pair is positive, `+0.022158039 1/mm`, corresponding to `+45.130 mm`. This compound power is a verified
paraxial result and should not be read as a statement about the pair's higher-order aberration balance.

#### L10 — Biconvex Positive

`nd = 1.51680`, `νd = 64.1`. Glass: `517641/517642 crown class`. Standalone `f = +40.582 mm`.

L10 is the separate rear element of G3. Together with the positive D3 pair it completes the group whose isolated focal
length is `+22.081 mm`.

### G4 — L11 and L12

#### L11 — Positive Meniscus

`nd = 1.84666`, `νd = 23.8`. Glass: `847238 class`. Standalone `f = +27.274 mm`.

L11 is the positive front component of the fourth zoom group. In the final model it is separated by only 0.10 mm of air
from L12 at surfaces 20-21. That narrow air gap becomes the limiting region for one of the tele-end modeled outer-pupil
rays; the aperture geometry is therefore retained rather than enlarged beyond the cross-gap constraint.

#### L12 — Biconcave Negative

`nd = 1.80400`, `νd = 46.6`. Glass: `804466 class`. Standalone `f = -15.647 mm`.

L12 has greater standalone negative power magnitude than L11's positive power. The combined air-separated G4 therefore
has negative isolated power, `f = -35.835 mm`. Because L11 and L12 are separated by air, no cemented-pair net power is
reported for them.

### G5 — L13, L14, and L15

#### L13 — Biconvex Positive, ED-Class Coordinate

`nd = 1.49782`, `νd = 82.5`. Glass: `498826 ED-class`. Standalone `f = +35.011 mm`.

L13 is the design's only coordinate with very high Abbe number. Nikon independently specifies one ED glass element in the
production lens, so identifying this physical component as the ED-class correlate is well supported as a production-match
inference. The patent does not name the melt or supplier. No `nC`, `nF`, `ng`, or `dPgF` values are authored for L13, so
this analysis does not claim apochromatic or anomalous-partial-dispersion behavior from `nd` and `νd` alone.

#### L14 — Biconvex Positive

`nd = 1.65160`, `νd = 58.5`. Glass: `652585/652586 class`. Standalone `f = +49.568 mm`.

L14 is the second positive element of G5 and is air-separated from L13 and L15. Its catalog identity remains class-level;
matching coordinates across multiple vendors are not evidence of the production supplier.

#### L15 — Negative Meniscus

`nd = 1.84666`, `νd = 23.8`. Glass: `847238 class`. Standalone `f = -36.015 mm`.

L15 is the final physical element before the image-space back focus. Together, L13-L15 form the positive-power G5 relay,
whose isolated air-to-air focal length is `+39.686 mm`. The last surface is followed directly by the patent's BF air gap;
there is no modeled rear cover plate or filter.

## Glass Identification and Selection

The patent publishes d-line refractive indices and Abbe numbers, not manufacturer glass names. The data therefore preserves
catalog coordinate classes or an explicit unmatched label. Catalog searches in the dossier used current authoritative
HIKARI, OHARA, HOYA, SCHOTT, CDGM, and SUMITA sources. Coordinate agreement supports a class assignment, not an actual
supplier or melt identity.

| Data-file glass label | `nd` | `νd` | Used at | Interpretation |
|---|---:|---:|---|---|
| `847238 class` | 1.84666 | 23.8 | L1, L7, L8, L11, L15 | High-index, low-Abbe coordinate class |
| `697555 class` | 1.69680 | 55.5 | L2 | Crown/lanthanum-crown coordinate class |
| `788474/788475 class` | 1.78800 | 47.4 | L3 | High-index crown coordinate class |
| `Unmatched (thin hybrid-asphere layer, n_d=1.55389, v_d=38.1)` | 1.55389 | 38.1 | L4r | No authoritative public glass match established |
| `835427 class` | 1.83481 | 42.7 | L4 substrate | High-index coordinate class |
| `804466 class` | 1.80400 | 46.6 | L5, L12 | High-index coordinate class |
| `808227/808228 high-dispersion class` | 1.80809 | 22.8 | L6 | Patent condition component in G2 |
| `589612 class` | 1.58913 | 61.2 | L9 | Crown coordinate class |
| `517641/517642 crown class` | 1.51680 | 64.1 | L10 | Crown coordinate class |
| `498826 ED-class` | 1.49782 | 82.5 | L13 | Very-low-dispersion / ED-class coordinate |
| `652585/652586 class` | 1.65160 | 58.5 | L14 | Crown/lanthanum-crown coordinate class |

The most distinctive production correlation is L13. HIKARI J-FKH1 is an excellent coordinate candidate for the published
`1.49782 / 82.5` pair, and Nikon states that the production lens contains one ED glass element. The data names J-FKH1 as a coordinate-compatible spectral proxy with supplier uncertainty, because neither the patent nor Nikon identifies the actual melt in this prescription.

The patent's chromatic design discussion is narrower than an APO claim. It states that chromatic correction is obtained by
using dispersion differences between positive and negative components in G2 and makes `νd < 23.3` a condition for at least
one lens (JP 2003-241093 A, ¶¶0012-0015). Example 2 gives `νd = 22.8`, which satisfies that condition. The implemented file
contains no direct C-, F-, or g-line indices and no `dPgF`; compatible catalog curves provide qualified spectral estimates without establishing production-glass identity.

## Focus Mechanism

The patent states that focusing is performed by G2, although it also notes that other groups could in principle be used
(JP 2003-241093 A, ¶0045). It publishes only infinity-focus zoom spacings. Nikon's production specification gives IF,
0.38 m closest focus, and 1:4.7 maximum reproduction, but it does not publish the internal close-focus cam spacing.

The implemented close-focus state is therefore explicitly `CONSTRAINED_RECONSTRUCTION`, not a patent-published focus law.
At each of the three zoom stations, only G2 translates. G1, G3, G4, G5, and the image plane remain fixed; total `D5 + D13`
is conserved; and a single G2 displacement is solved from the finite-conjugate condition `B = 0` for a 380 mm
object-to-image-plane distance. The fixed 0.8 mm stop split remains attached to G3.

| Zoom station | Infinity D5 (mm) | Infinity total D13 (mm) | G2 shift to close, + imageward (mm) | Close D5 (mm) | Close total D13 (mm) | Paraxial |m| |
|---|---:|---:|---:|---:|---:|---:|
| 25.0 mm | 2.45 | 13.20 | -1.429655 | 1.020345 | 14.629655 | 0.082260 |
| 50.0 mm | 16.66 | 5.78 | -2.312873 | 14.347127 | 8.092873 | 0.151239 |
| 82.5 mm | 29.35 | 2.29 | -3.924799 | 25.425201 | 6.214799 | 0.211946 |

The negative displacement sign means that G2 moves objectward from the infinity position under the model's convention.
Fresh root solving from the final data finds one root in the positive-gap domain at each station, with transfer-matrix
`B` residuals below `7e-12 mm`. At 82.5 mm the model gives reciprocal magnification `1/|m| = 4.718`, close to Nikon's
published 1:4.7 maximum reproduction ratio. That production ratio was used only as a cross-check, not as a solver target.

The interpolated internal motion shown between the authored infinity and reconstructed close endpoints is a visualization
model. The patent does not publish enough finite-distance stations to establish the actual production cam law continuously.

## Aspherical Surfaces

Example 2 has one aspherical surface: source surface 6, implemented as `6A` on the thin layer of physical hybrid element L4
(JP 2003-241093 A, ¶¶0034-0035, Tables 4-5). Nikon independently describes the production lens as having one hybrid-type
aspherical lens element, which is part of the product-correlation evidence rather than proof of the thin layer's material.

The patent gives the base sag equation as

$$
x = \frac{c y^2}{1 + \sqrt{1 - \kappa c^2 y^2}} + C_4 y^4 + C_6 y^6 + \cdots
$$

with `c = 1/R`. LensVisualizer uses a standard conic denominator containing `1 + K`, so this patent's convention maps as
`K = κ - 1`. Example 2's `κ = -0.8350` therefore becomes `K = -1.8350` (JP 2003-241093 A, ¶¶0017-0018; Table 5).

Table 5 also prints a nonzero `C3` although Equation 1's displayed polynomial tail begins at `C4` and then lists even
orders. The data preserves the explicit table value as a rotationally symmetric radial cubic term rather than silently
discarding it. The final authored coefficients are:

| Term | Value |
|---|---:|
| `K` | -1.8350 |
| `A3` | -6.1899e-7 mm^-2 |
| `A4` | -2.2261e-6 mm^-3 |
| `A6` | +3.4664e-8 mm^-5 |
| `A8` | -3.2166e-10 mm^-7 |
| `A10` | +5.5491e-13 mm^-9 |
| `A12` | +9.6020e-16 mm^-11 |

No scale transformation is applied to the prescription, so these coefficient values remain at the patent's native scale.
At the modeled `sd = 11.600 mm` rim of surface 6A, the verified sag is `1.186456 mm`; its departure from the corresponding
spherical base is `-0.057569 mm`, and its polynomial departure from the mapped conic base is `-0.032092 mm`. These rim
numbers depend on the modeled semi-diameter because the patent does not publish a clear aperture.

The patent itself states that using the aspherical lens in G2 can effectively correct aberrations, particularly field
curvature and distortion (JP 2003-241093 A, ¶0049). That is the appropriate source-supported interpretation of the
asphere's design role; stronger attribution of specific residuals to individual coefficients would require additional
aberration decomposition not performed here.

## Chromatic Correction Strategy

The patent explicitly frames its condition around dispersion in G2. It states that chromatic correction is obtained mainly
from the dispersion difference between positive and negative lens components and that increasing this difference in G2
supports chromatic correction without forcing smaller radii and a larger second group (JP 2003-241093 A, ¶¶0012-0015).
Example 2's designated positive G2 component has `νd = 22.8`, below the stated limit of 23.3.

The implemented design also contains L13 at `nd = 1.49782`, `νd = 82.5`, recorded as `498826 ED-class`; Nikon's product
page independently says the production lens uses one ED glass element. That correlation supports calling L13 the ED-class
production correlate. It does not establish a supplier, a particular Sellmeier curve, or anomalous partial dispersion.
The data file therefore carries no APO flag and no unsupported line-index or `dPgF` fields.

## Conditional Expressions

The patent's explicit condition is:

$$
\nu_d < 23.3
$$

for at least one lens in the five-group system (JP 2003-241093 A, ¶¶0007, 0012-0015). Example 2 publishes a corresponding
value of `νd = 22.8` (¶0036, Table 6), and the implemented G2 positive component L6 retains that value exactly. The
condition therefore passes directly; no tolerance or reconstructed value is needed for this comparison.

## Verification Summary and Modeling Limits

The final data was reloaded through the dossier's strict TypeScript-literal parser rather than verified from a separate
hard-coded prescription. Sequential height/reduced-angle tracing and a separately implemented ABCD chain agree within
`1e-10 mm` for EFL and BFD at all three published infinity stations. The surface-by-surface Petzval sum, using
`phi/(n*n′)` for all 28 refracting surfaces, is `+0.003789612473 1/mm`, corresponding to a reciprocal magnitude of
`263.879224 mm`. The neutral `STO` contributes no refracting term.

The aperture stop requires explicit modeling because the patent gives placement but no dimensions. Paragraphs 0046-0047
and Figure 3 place S between G2 and G3, adjacent to the object side of G3, and moving with G3. The data splits D13 with an
inferred 0.8 mm stop offset ahead of G3. Physical stop semi-diameters of 6.434349, 6.544478, and 7.023810 mm are calibrated
from the patent's f/3.6, f/4.5, and f/4.7 station values. The resulting f-number agreement is therefore calibration, not
independent evidence of the production diaphragm diameter.

The patent publishes no surface clear apertures. Every `sd` remains modeled. Figure 3 on PDF page 8 shows a broader
G2 cemented pair and following positive meniscus than the initial ray-envelope estimates: surfaces 9–11 now use 9.4 mm
and surfaces 12–13 use 8.8 mm. The front hybrid layer and its substrate retain their stepped optical rims; annotations,
group brackets, and manufacturing outlines were excluded from the measurement. Surface validation passes, and production
render diagnostics show zero hidden trims across 15 sampled zoom/focus combinations.

The outer-pupil diagnostic retains a tele-end modeled clip rather than enlarging apertures beyond the narrow L11/L12
cross-gap geometry. At the 82.5 mm infinity station, the +0.75 default off-axis pupil ray first clips at surface 20 by
approximately `0.257803 mm`; the opposite field/pupil sign is symmetric. This is a model-dependent vignetting result, not a
patent-published clear-aperture measurement.

Repository integration checks now include metadata, surface and image-circle validation, production render diagnostics,
and exact corner chief-ray coverage at all three source zoom stations. The glass audit confirms coefficient-backed
catalog proxies for 15/16 modeled material regions. The unnamed 1.55389/38.1 hybrid layer remains on Abbe fallback;
no public coefficient source or production material identity was established. Existing glass coordinates, including
L13's ED-class coordinate, are retained. L13 now uses explicitly inferred APD color from the compatible J-FKH1 proxy (catalog dPgF approximately +0.0337); this is not a source-measured partial dispersion or a production-melt identification.

## Sources

1. Japan Patent Office, **JP 2003-241093 A, “Zoom lens”**, Satoshi Hayakawa, Nikon Corporation, published 2003-08-27.
   Prescription authority: Example 2, especially PDF p. 5 Tables 4-5, PDF p. 6 Table 6, PDF p. 8 Figure 3, and
   ¶¶0010-0018, 0031-0037, 0045-0049. Searchable translation and metadata:
   <https://patents.google.com/patent/JP2003241093A/en>
2. Nikon Corporation, **AF-S Zoom-Nikkor 24-85mm f/3.5-4.5G IF-ED (3.5x)**. Production specifications used for product
   correlation, construction, special-element count, IF, closest focus, and maximum reproduction ratio:
   <https://imaging.nikon.com/imaging/lineup/lens/f-mount/zoom/normalzoom/af-s_zoom24-85mmf_35-45g/>
3. Nikon Corporation, **Our Product History: 2000s**. Production timing reference:
   <https://imaging.nikon.com/imaging/information/products_history/2000/>
4. Glass-coordinate audit sources retained in the dossier evidence: HIKARI Optical Glass Catalog 2023
   (<https://www.nikon.com/business/components/lineup/materials/optical-glass/assets/pdf/hikari_catalog2023.pdf>) and
   HIKARI FK listings (<https://www.nikon.com/business/components/lineup/materials/optical-glass/catalog/fk.html>); OHARA
   glass listings (<https://oharacorp.com/glass-type/s-tih-s-nph/>); HOYA Optics Division data
   (<https://www.hoya-opticalworld.com/english/news/index.html>); SCHOTT optical-glass datasheets
   (<https://www.schott.com/shop/medias/schott-datasheet-n-bk7-eng.pdf>); CDGM Optical Glass Database
   (<https://www.cdgmgd.com/database/toWebDatabase.htm?k=Products_Data&url=database>); and SUMITA Optical Glass Data
   (<https://www.sumita-opt.co.jp/en/download/>). These sources support class-level coordinate comparisons only unless a
   specific catalog identity is explicitly established.
