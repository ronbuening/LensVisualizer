## Patent Reference and Design Identification

**Patent:** JP 2022-067328 A
**Application Number:** JP 2020-175981
**Filed:** 20 October 2020
**Published:** 6 May 2022
**Inventor:** Daichi Tanoue
**Applicant:** Sigma Corporation
**Title:** Image Forming Optical System
**Embodiment analyzed:** Numerical Example 1

The prescription represents the selected numerical example in the supplied Japanese publication.
The supplied PDF includes a PAJ abstract cover, so PDF pages 10–11 correspond to printed patent pages 9–10.
The optical section is Figure 1 on PDF page 21, printed page 20.

The production association is a research correlation with the original C021 Sigma 24mm F3.5 DG DN | Contemporary.
It is not a manufacturer-confirmed identification of a production prescription.
The later DG-only product name is not substituted for the DG DN variant.
The principal convergent evidence is:

1. The patent has ten elements in eight air-separated groups; Sigma lists the same construction count.
2. The patent uses four aspheric surfaces on three elements; Sigma lists three aspheric elements.
3. The patent infinity focal length is 24.00 mm, consistent with the marketed 24 mm designation.
4. The patent publishes a −0.5× close state, consistent with the marketed 1:2 maximum magnification.
5. The inner-focus architecture is compatible with the compact mirrorless product.
6. Filing preceded the 1 December 2020 announcement and the Japanese release on 22 January 2021.

The differences remain meaningful.
The patent specifies F/3.62 and a full field of 81.27° at infinity; the product is marketed as F3.5 with an 84.1° field.
The published close object-to-image conjugate is approximately 105.288 mm; Sigma specifies a 108 mm minimum focus distance.
These quantities are not adjusted to force production agreement.
Sigma's full-frame DG DN model was offered for L-Mount and Sony E-mount.
The file uses canonical l-mount and sony-fe metadata and the 135-full-frame format.

## Optical Architecture

The design is a three-functional-group inner-focusing wide-angle system with positive–positive–negative group powers.
The eight air-separated groups should not be confused with these three moving/fixed functional groups.
Two cemented doublets account for the difference between ten elements and eight air-separated groups.

G1 comprises L11–L15 and stays fixed.
The aperture stop follows G1 at source surface 10.
G2 comprises L21–L23 and translates toward the object for closer focus.
G3 comprises L31–L32 and stays fixed relative to the image plane (¶0058).

The source uses a negative–negative–positive sequence at the front of G1 and a positive/negative cemented pair behind it.
G2 combines a low-dispersion positive/negative cemented pair with a double-aspheric positive element.
G3 is negative overall and includes an image-facing asphere on L31.

The following powers are calculated from the source-radius, thickness and index data, not copied from glass labels:

| Assembly | Calculated isolated EFL (mm) | Source printed EFL (mm) |
|---|---:|---:|
| G1 | +340.572151 | +340.56 |
| G2 | +17.203404 | +17.20 |
| G3 | -30.274768 | -30.27 |
| D1 cemented doublet | +82.335269 | Not tabulated |
| D2 cemented doublet | -707.250801 | Not tabulated |

The strong internal positive and negative powers coexist with a weak positive net G1.
A standalone element power is not its in-situ aberration contribution.
Likewise, the net power of a cemented assembly cannot be obtained by adding its standalone focal lengths.

The source describes the front negative/positive arrangement using retrofocus terminology (¶0018, ¶0028).
The complete selected example has a collimated back focal distance smaller than its effective focal length.
Accordingly, the reconstructed complete system is described here by its verified three-group power distribution.
No long-back-focus or telephoto performance claim is inferred from the group names.

## Element-by-Element Analysis

### L11 — Neg. Meniscus (1× Asph)

nd = 1.59271, νd = 66.97. Glass: MP-PCD51-70 (HOYA coordinate equivalent; production supplier unconfirmed). f = -34.105933 mm.

The first element is a negative meniscus with its convex face toward the object; surface 1A is aspheric.
Figure 1 and ¶0060 also designate it negative lens L1m.
Its negative power is part of the source's front negative–negative–positive sequence.
The patent identifies that arrangement as useful for wide-angle coverage (¶0028, ¶0059).
The element's individual aberration budget has not been separated from the rest of the system.

### L12 — Negative Meniscus

nd = 1.98613, νd = 16.48. Glass: FDS16-W (HOYA coordinate equivalent; production supplier unconfirmed). f = -32.373636 mm.

The second element is a negative meniscus with its concave face toward the object.
It is the only Example 1 glass with a tabulated anomalous partial-dispersion value.
The numerical condition table identifies this 16.48-Abbe material for the source's chromatic-material inequalities.
Figure 1 and ¶0060 designate it negative lens L2m, although the symbols of those inequalities carry the subscript 1m; the notation is discussed with the conditions below.

### L13 — Positive Meniscus

nd = 2.05090, νd = 26.94. Glass: TAFD65 (HOYA coordinate equivalent; production supplier unconfirmed). f = +25.128215 mm.

The third element is a positive meniscus with a concave object-side face.
Figure 1 and ¶0060 designate it positive lens L1p.
Its index exceeds the lower bound that condition (4) assigns to that lens.
The patent connects this high-index choice with compactness and Petzval control (¶0029–0030).
That source rationale is distinct from an independently isolated aberration contribution for L13.

### L14 — Positive Meniscus

nd = 2.05090, νd = 26.94. Glass: TAFD65 (HOYA coordinate equivalent; production supplier unconfirmed). f = +29.867801 mm.

L14 is the positive component of cemented doublet D1.
Its rear surface is the shared interface with L15 at source surface 8.
The file assigns that interface to the downstream L15 medium, preserving the published index transition.
No synthetic cement layer has been inserted.

### L15 — Negative Meniscus

nd = 1.54072, νd = 47.20. Glass: E-FEL2 (HOYA coordinate equivalent; production supplier unconfirmed). f = -42.844723 mm.

L15 is the negative component of the same fixed G1 doublet.
Its medium begins at source surface 8 and ends at source surface 9.
The source provides no separate glue thickness or physical interface aperture.
The shared clear aperture is therefore a modeling inference, documented together with the other inferred diameters.

### L21 — Biconvex Positive

nd = 1.49700, νd = 81.61. Glass: FCD1 (HOYA coordinate equivalent; production supplier unconfirmed). f = +20.002207 mm.

L21 is the biconvex positive component of translating doublet D2.
Its high Abbe number makes it the low-dispersion member of this pair.
This is consistent with a chromatic-balancing role when paired with the much more dispersive L22.
Neither the source coordinate nor the product's SLD designation establishes a unique glass supplier.
L21 carries an inferred low-dispersion display tag for that position, not a patent designation.

### L22 — Negative Meniscus

nd = 1.84666, νd = 23.78. Glass: FDS90 (HOYA coordinate equivalent; production supplier unconfirmed). f = -19.285854 mm.

L22 is the negative meniscus component of D2, with its concave face toward the object.
The source interface at surface 12 changes directly from the L21 index to the L22 index.
The pair moves rigidly with G2, rather than changing cemented spacing during focus.
No claim of apochromatic performance follows merely from this dispersion pairing.

### L23 — Biconvex Positive (2× Asph)

nd = 1.85135, νd = 40.10. Glass: M-TAFD305 (HOYA coordinate equivalent; production supplier unconfirmed). f = +16.758622 mm.

L23 is the biconvex positive element completing the moving group.
Both bounding surfaces, 14A and 15A, are aspheric; 14A uses K=−1.
All published nonzero high-order coefficients are retained.
The element is moved by the source d10/d15 spacing schedule, without a fitted focus law.

### L31 — Biconcave Negative (1× Asph)

nd = 1.69350, νd = 53.20. Glass: M-LAC130 (HOYA coordinate equivalent; production supplier unconfirmed). f = -46.666594 mm.

L31 is a biconcave negative element at the front of fixed G3.
Its image-facing surface 17A carries terms through A20.
The patent discusses the rear negative asphere in connection with field-curvature correction (¶0048).
The model preserves that source attribution without claiming a complete measured field-curvature performance curve.

### L32 — Negative Meniscus

nd = 1.51680, νd = 64.20. Glass: BSC7 (HOYA coordinate equivalent; production supplier unconfirmed). f = -91.357610 mm.

L32 is a negative meniscus with its concave face toward the object.
It completes the fixed negative rear group.
The final surface's 19.6941 mm air spacing is the published image-plane gap at both focus endpoints.
No camera-side cover glass or filter stack is added, because none is listed for this example.

## Glass Identification and Selection

The source publishes d-line refractive indices at 587.56 nm and d-line Abbe numbers (¶0050).
It does not identify glass suppliers.
The implemented labels name the coordinate-equal HOYA catalog rows so that each element traces on a published dispersion curve; the exact source nd/νd values remain authoritative.
The following catalog comparisons are evidence of coordinate compatibility, not proof of supplier, melt or manufacturing method.

| Patent nd / νd | Elements | HOYA catalog row (model label first) | Interpretation |
|---|---|---|---|
| 1.59271 / 66.97 | L11 | MP-PCD51-70; MC-PCD51-70 | Exact printed coordinates belong to preforms; finished M-PCD51 differs |
| 1.98613 / 16.48 | L12 | FDS16-W | Catalog nd 1.98612; same printed νd |
| 2.05090 / 26.94 | L13, L14 | TAFD65 | Exact printed coordinate pair |
| 1.54072 / 47.20 | L15 | E-FEL2 | Exact printed coordinate pair |
| 1.49700 / 81.61 | L21 | FCD1 | Exact printed coordinate pair |
| 1.84666 / 23.78 | L22 | FDS90 | Exact printed coordinate pair; variants also exist |
| 1.85135 / 40.10 | L23 | M/MP/MC-TAFD305 | Exact printed coordinate pair; process attribution unproven |
| 1.69350 / 53.20 | L31 | M/MP/MC-LAC130 | Exact printed coordinate pair; process attribution unproven |
| 1.51680 / 64.20 | L32 | BSC7 | Exact printed coordinate pair |

The current HOYA AGF and Excel sources were directly examined.
Relevant coefficients, original catalog rows, document hashes and coordinate residuals are retained with the evidence.
The six-term HOYA dispersion polynomial is not a Sellmeier equation.
Independent CDGM rows supply equal-coordinate alternatives for several glasses, including H-FK61, H-ZF52 and H-K9L.
Equal nd and νd do not require equal partial dispersion.
The available catalog revisions also postdate the patent filing, so historical melt identity remains unresolved.

L12 has direct source support beyond nd and νd.
The patent defines ΔPgF = PgF + 0.0018νd − 0.64833 and tabulates ΔPgF = 0.0469.
At νd = 16.48 this gives PgF = 0.665566.
The runtime instead uses a normal line of 0.6438 − 0.001682νd.
The equivalent runtime dPgF is therefore 0.04948536.
The file stores that converted value while the patent condition remains evaluated with the original 0.0469.
This is a convention conversion; no patent spectrum is replaced by a catalog candidate.

The HOYA FDS16-W Excel sheet gives ΔPgF = 0.0469, whereas the AGF ED field gives 0.0470.
Both source values are retained distinctly rather than treated as interchangeable.
The candidate's nd differs from the patent by 0.00001.
The catalog curves are dispersion proxies for coordinate-equal glasses, not measured patent glass spectra; L12 keeps its source-derived g-line partial dispersion.

The low-dispersion L21 and dispersive negative L22 give a plausible chromatic-balancing pair.
The patent separately associates the high-dispersion/anomalous negative front material with lateral-color correction (¶0023–0026).
Those material strategies do not by themselves establish apochromatic performance.
In the viewer all ten labels resolve to those catalog dispersion curves; they stand in for the unidentified production glasses.

## Focus Mechanism

The source publishes a complete inner-focus motion between infinity and −0.5× reproduction.
G1, the aperture stop and G3 remain fixed; G2 moves 3.8358 mm toward the object (¶0058).
The mechanism is PUBLISHED, with no internal-focus reconstruction.
The production lens uses a stepping motor according to Sigma; the patent table alone does not specify the production drive hardware.

| Source quantity | Infinity | Published −0.5× |
|---|---:|---:|
| d0, object to first vertex (mm) | Infinity | 40.0680 |
| d10, stop to G2 (mm) | 7.0307 | 3.1949 |
| d15, G2 to G3 (mm) | 1.5000 | 5.3358 |
| Last-vertex image gap (mm) | 19.6941 | 19.6941 |
| Printed focal length (mm) | 24.00 | 19.45 |
| Printed F-number | 3.62 | 3.92 |
| Printed full field (degrees) | 81.27 | 78.13 |
| Printed image semi-height (mm) | 21.63 | 21.63 |

The two variable gaps sum to 8.5307 mm at both endpoints.
The first vertex and image plane are separated by 65.2198 mm in the rounded prescription.
Adding the published finite d0 gives an object-to-image distance of 105.2878 mm.
That value supplies closeFocusM; the marketed 108 mm value is retained only as product evidence.
A finite-conjugate entry explicitly records d0 = 40.0680 mm from the first surface.

At the close endpoint, the paraxial magnification is −0.499991 and the rounded prescription's best-image shift is approximately −0.000398 mm.
The source image-plane distance is preserved, without a defocus fit.
The close-state collimated BFD is a different conjugate quantity and must not replace the finite-object image gap.

Intermediate variable gaps are linearly interpolated mechanical states.
They are not additional patent-published focus positions or certified conjugates.
Intermediate distance labels and the default UI pupil launch remain approximations; they do not define a newly solved focus law.

## Aspherical Surfaces

Surfaces 1A, 14A, 15A and 17A are the source's starred surfaces.
The patent equation (¶0053) is:

z(y) = (y²/R) / [1 + √(1 − (1 + K)(y/R)²)] + Σ Aₚyᵖ.

The sum uses even powers from A4 through A20.
K is copied directly; no K−1 conversion is appropriate for this source.
Each Aₚ has units mm^(1−p), and the source is used at scale one.
No high-order polynomial is refitted or dropped.

| Coefficient | 1A | 14A | 15A | 17A |
|---|---:|---:|---:|---:|
| K | 0.00000 | -1.00000 | 0.00000 | 0.00000 |
| A4 | 2.22205E-05 | -5.06066E-06 | 5.59739E-05 | 1.07013E-05 |
| A6 | -4.69259E-08 | 3.02711E-07 | -1.09750E-08 | -2.50582E-07 |
| A8 | 8.56143E-10 | -5.62626E-09 | 2.66207E-09 | 1.44276E-08 |
| A10 | -2.54125E-12 | 6.54011E-11 | -8.42405E-11 | -2.35199E-10 |
| A12 | 3.90193E-15 | -1.85433E-13 | 1.45129E-12 | 1.81668E-12 |
| A14 | 0.00000E+00 | -2.87753E-15 | -1.07799E-14 | -4.10422E-15 |
| A16 | 0.00000E+00 | 2.20828E-17 | 2.85320E-17 | -3.03923E-17 |
| A18 | 0.00000E+00 | -4.32346E-20 | 0.00000E+00 | 1.99913E-19 |
| A20 | 0.00000E+00 | 0.00000E+00 | 0.00000E+00 | -3.19756E-22 |

The aperture-dependent polynomial contribution must be evaluated as a sum, not interpreted from A4 alone.
At the file's explicitly inferred semi-diameters, the contributions relative to the respective conic bases are:

| Surface | Inferred semi-diameter (mm) | Polynomial contribution (mm) | Actual rim slope (degrees) |
|---|---:|---:|---:|
| 1A | 12.1 | +0.589908 | 41.550 |
| 14A | 10.5 | +0.053458 | 4.847 |
| 15A | 10.5 | +0.781558 | 29.875 |
| 17A | 9.4 | +0.158758 | 20.348 |

For 14A, the reference base is a paraboloid because K=−1; its listed polynomial contribution is not a departure from a sphere.
Despite negative A4, the full 14A polynomial contributes positive sag at the modeled rim.
The other three conic bases have K=0.
The patent does not publish clear-aperture dimensions or a manufacturing process for these particular surfaces.
A matching molded-glass catalog coordinate is not evidence that the patented part was molded by that supplier.

## Conditional Expressions

The printed correspondence table is at ¶0095, PDF page 20 / printed page 19.
The following values are recomputed from the source model; glass inequalities retain the patent's original dispersion convention.

| Condition | Recomputed value | Required range |
|---|---:|---|
| f2/f3 | -0.56824231 | -0.7 < value < -0.3 |
| vd1m | 16.48000000 | value < 25 |
| deltaPgF1m | 0.04690000 | value > 0.015 |
| ndL1p | 2.05090000 | value > 1.85 |
| beta3 | 1.76210529 | 1.25 < value < 2.33 |
| LT/Ymax | 3.01524734 | 2.5 < value < 3.3 |
| beta3^2*(1-beta2^2) | 3.10005075 | 2.5 < value < 3.5 |

The seven inequalities hold for the numerical interpretation supported by the tables.
There is a source naming discrepancy: ¶0060 and the Figure 1 leaders name L11 as negative lens L1m, L12 as negative lens L2m and L13 as positive lens L1p, but the printed νd1m = 16.48 and ΔPgF1m = 0.0469 are the values of L12 (L2m).
L11 instead has νd = 66.97.
The general condition text requires a qualifying negative lens within G1 without naming it (¶0023), and L12 supplies the published condition coordinates; in all six examples the surface-3 lens is the only one with a tabulated ΔPgF.
This treatment preserves both the physical prescription and the contradictory notation.
It does not claim that L11 satisfies those glass bounds.

## Reconstruction Limits and Verification

All optical radii, axial spacings, medium indices and nonzero asphere coefficients remain source values.
There is no uniform scaling, source-fit correction, omitted camera stack or invented focus endpoint.
Clear semi-diameters are inferred from the Figure 1 optical extents and checked against exact ray and geometry requirements.
Flat drawing rims are not treated automatically as optical clear apertures.
The rear face of L15 (surface 9) is the clearest case: its bowl is drawn ending near 5.0 mm under a flat annulus that runs out to the 7.3 mm rim of the doublet, so the file uses 5.2 mm, the smallest 0.1 mm step that still passes the full-stop bundle at 60% of the source field.
Surface 17A is held at 9.4 mm, below the drawn 9.75–9.9 mm, because the L31–L32 air space closes at the rim and the viewer's cross-gap rule keeps a tenth of the vertex gap open.
Surface 18 keeps the drawn 11.9 mm outer rim of L32 so that the element retains its flat top; its bowl is drawn ending near 9.8 mm, and rays reaching it are already limited by surface 17A.
L12 and L13 are drawn level at about 8.9 mm; the air-gap rule behind L11 caps L12 at 8.8 mm, and L13 uses the same 8.8 mm so that the pair renders level.
The physical stop radius is inferred as approximately 4.196005 mm by tracing the nominal infinity entrance-pupil edge to the published stop plane.
F/3.62 agreement is consequently an aperture calibration, not independent physical diaphragm evidence.

Two first-order implementations reproduce the source geometry: reduced-angle ABCD matrices and separate sequential height/angle tracing.
The infinity EFL is 23.995956 mm and collimated BFD is 19.693768 mm.
The close-state EFL is 19.448714 mm.
The surface-by-surface Petzval sum is 0.003105479 mm⁻¹.
It is a first-order curvature measure, not a measured sagittal or tangential image surface.

Actual project construction and element-render diagnostics were exercised at focusT = 0, 0.25, 0.5, 0.75 and 1.
The tested geometry needed no hidden render trim.
Exact stop-aimed axial and 60%-source-field bundles transmit at those discrete states.
For the three intermediate mechanical states, native bundles use independently calculated Gaussian object planes; these are diagnostic conjugates, not additional published focus stations.
At the two published endpoints, direct source-angle chief rays reach image semi-heights of approximately 21.63097 and 21.63098 mm.
Some full-field marginal rays vignette on exterior lens faces; those rays are retained as clipped.
No tested ray first clips at either internal cemented interface.
Finite sampling does not establish behavior over the entire continuous focus range.

The current viewer's default near-focus launch is not the same as a true finite-object, stop-aimed bundle.
At focusT = 0.75 and 1 its default ±0.83 axial samples clip at the stop, while explicitly aimed physical rays transmit.
Ghost continuation is not counted as transmission.
No iris, source spacing or default ray fraction has been changed to conceal that difference.
The native baseline field helper also reports a smaller half-field than the source angle; direct source-angle chief tracing is reported separately.
These viewer limitations do not justify altering the published prescription.

The source close F-number 3.92 remains a published specification.
Its finite-conjugate convention and the physical iris diameter are not independently specified, so no exact source-diameter reproduction is asserted.
Full production image quality, manufacturing clear apertures, coatings and mechanical tolerances are outside this numerical reconstruction.

## Sources

1. Japan Patent Office, JP 2022-067328 A, supplied original JP2022067328A.pdf. Metadata: PDF pp.1–2; conventions and mechanism: pp.8–9, ¶0050–0062; Numerical Example 1: pp.10–11; conditions: p.20; Figure 1: p.21. PDF pagination includes one PAJ abstract cover.
2. [Sigma, original 24mm F3.5 DG DN | Contemporary product specifications](https://www.sigma-global.com/en/lenses/c021_24_35/). Product identity, mounts, format, construction, motor, aperture and close-focus specifications; accessed 5 October 2026.
3. [Sigma, 1 December 2020 launch announcement](https://www.sigma-global.com/en/news/2020/12/01/10961/). Global launch month January 2021.
4. [Sigma-authored Japanese release via PR TIMES](https://prtimes.jp/main/html/rd/p/000000025.000031110.html). Product subsection gives 22 January 2021 release date.
5. [HOYA Optical Glass data-download index](https://www.hoya-opticalworld.com/english/datadownload/index.html), [AGF including obsolete glasses, 7 July 2026](https://www.hoya-opticalworld.com/common/agf/HOYA20260707_include_obsolete.agf), and [Excel catalog, 1 June 2026](https://www.hoya-opticalworld.com/common/xls/HOYA20260601.xlsx). Candidate rows, exact source excerpts and polynomial coefficients are preserved with the evidence.
6. [HOYA technical explanation of refractive index and dispersion](https://www.hoya-opticalworld.com/english/technical/002.html). Partial-dispersion reference conventions.
7. [CDGM official optical-glass catalog](https://www.cdgmgd.com/accessory/2022-06-28/client/www.cdgmgd.com/9b32dd2c-55f4-4d4c-b2d2-48f52c9d5f07.pdf). Independently inspected alternatives demonstrate that d-line coordinate matches are not unique supplier identifications.


8. [HOYA glass-type designations](https://www.hoya-opticalworld.com/english/technical/001.html). TAFD denotes dense tantalum flint; coordinate-compatible naming does not establish the patent glass supplier.
