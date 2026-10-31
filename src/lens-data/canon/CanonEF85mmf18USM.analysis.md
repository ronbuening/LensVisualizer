# CANON EF 85 mm f/1.8 USM

## Patent Reference and Design Identification

**Patent:** JP H05-157964 A (JPH05157964A)\
**Application Number:** JP H3-349692\
**Filed:** 6 December 1991\
**Published:** 25 June 1993\
**Inventor:** Hiroshi Endo\
**Applicant:** Canon Inc.\
**Title:** インナーフォーカス式の望遠レンズ (_Inner focus telephoto lens_)

This analysis concerns the native infinity prescription in Example 1 and a separately derived near-focus extension. The patent table, rather than a secondary optical reconstruction, supplies the radii, element thicknesses, native air gaps and glass coordinates. [1, ¶0023–0024, printed pp. 3–4]

The selected correlation with the Canon EF85 mm f/1.8 USM rests on several converging features:

1. The example specifies 85.0 mm and f/1.8; Canon gives the same marketed focal length and maximum aperture. [1, ¶0024; 2; 3]
2. Both the example and Canon’s product specification have nine elements in seven air-separated groups. The patent additionally organizes those elements into three functional power groups. [1, Fig. 1; 2]
3. The patent moves an internal negative group imageward to focus closer. Canon identifies rear focusing with USM and separately documents ring-type USM and full-time manual operation. These descriptions are compatible but do not identify the exact retail moving elements. [1, ¶0009; 3; 4]
4. The filing precedes Canon’s July 1992 market introduction. Timing supports plausibility but is not proof of implementation. [1, front page; 2]
5. Canon identifies the product as an EF-mount full-frame lens. This supplies the model’s production taxonomy, rather than a claim that the patent measured an exact production image circle. [5; 6]

No primary manufacturer statement located in the cited sources identifies this patent example as the manufactured prescription. The correlation consequently remains selected and plausible, not manufacturer-confirmed. Canon’s 0.85 m minimum focusing distance and 0.13× maximum magnification are production specifications; the patent’s finite-distance plot is labeled 0.8 m and does not define the distance origin. Those quantities are not treated as interchangeable. [1, ¶0008, Fig. 4; 2]

## Optical Architecture

The design is an all-spherical, positive–negative–positive rear-focus prime. Its nine elements form seven air-separated assemblies: four singlets in G1, the L5–L6 cemented doublet in G2, and the L7–L8 cemented doublet followed by L9 in G3. The stop is the ninth tabulated plane, between G1 and G2. G1, G2 and G3 are the groups that Fig. 1 numbers 1, 2 and 3, and its SP is the stop; the patent gives the elements no reference signs, so L1–L9 simply count them from the front. There are sixteen refracting interfaces and no modeled rear filter or sensor-cover plate. [1, ¶0007–0008, ¶0010, ¶0013, ¶0024, Fig. 1]

Calculated isolated functional-group focal lengths at the native spacing are +82.211212 mm for G1, -59.521301 mm for G2 and +53.873495 mm for G3. These are complete-group focal lengths in air; they are neither additive element powers nor a decomposition of aberration contributions. The combined G1–G2 focal length is +354.119303 mm. The rear group restores the system’s convergence after the movable negative doublet.

The literal prescription gives an effective focal length of 84.997673 mm. Its last refracting vertex is 73.520000 mm behind the first; the calculated Gaussian infinity back focal distance is 38.905092 mm, placing the image plane at 112.425092 mm from the first vertex. The patent does not tabulate that image distance. The title’s term “telephoto” is retained as bibliographic wording: the modeled first-vertex-to-image ratio TL/EFL is 1.322684, so the prescription does not meet the strict geometric criterion TL/EFL < 1. Its BFD is also shorter than its EFL, so it is not classified here as retrofocus.

No dimensional rescaling, aspheric conversion, glass-index substitution or source-radius correction is applied. The image distance, stop radius, clear semi-diameters and finite-focus gaps are explicitly modeled quantities.

## Element-by-Element Analysis

The patent table gives N and ν without naming a spectral line. Its Figure 4 d/g trace labels do not establish the bulk reference. All nine printed pairs match catalog d-line coordinates, so the table is read as d-line $n_d$ and $\nu_d$ (see Glass Identification and Source Qualifications), and the glass names below are catalog spectral proxies. Every quoted element focal length is calculated for that element isolated in air. In particular, a cemented member’s standalone focal length must not be substituted for its in-situ contribution.

### L1 — Biconvex Positive

$n_d$ = 1.65160, $\nu_d$ = 58.5. Glass: LAL7 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified). f = +199.017 mm.

L1 is the first of the three positive singlets in G1. Its relatively weak standalone power begins the progressive convergence described in ¶0011, before the more strongly powered following menisci. The index–Abbe pair is consistent with a lanthanum-crown class; it does not identify a supplier or demonstrate a special partial-dispersion property. The patent assigns the gradual convergence to the three-element combination rather than publishing an individual aberration budget. [1, ¶0010–0011]

### L2 — Positive Meniscus, convex to object

$n_d$ = 1.77250, $\nu_d$ = 49.6. Glass: LAH66 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified). f = +135.794 mm.

L2 continues the front positive sequence. Its meniscus orientation agrees with ¶0010, and it shares its recorded glass coordinates with L9 despite a different shape and position. The higher index and moderate Abbe number distinguish it from L1, but their use is not evidence that the two elements make separable, uniquely assigned chromatic contributions. Its quoted focal length is for L2 alone in air. [1, ¶0010, ¶0024]

### L3 — Positive Meniscus, convex to object

$n_d$ = 1.71300, $\nu_d$ = 53.8. Glass: LAL8 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified). f = +54.567 mm.

L3 is the strongest isolated positive singlet in G1. Its rear face and the front face of L4 bound the narrow air space explicitly discussed by the patent as a negative air lens. That surface pair, rather than L3 in isolation, is credited with a higher-order spherical-aberration and sagittal-flare correction function. The glass class remains an inference from coordinates, not a recovered melt specification. [1, ¶0012, ¶0024]

### L4 — Negative Meniscus, concave to image

$n_d$ = 1.71736, $\nu_d$ = 29.5. Glass: SF1 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified). f = -40.896 mm.

L4 terminates G1 with negative standalone power and a strongly concave image-facing surface. It precedes the stop and counteracts the power of the first three positive elements within the complete positive group. Paragraph 0011 contains a sign inconsistency: it describes positive spherical aberration being balanced by positive spherical aberration. That wording is retained as an unresolved textual inconsistency; it is not silently changed or used to assign a measured aberration sign to L4. [1, ¶0010–0012]

### L5 — Positive Meniscus, cemented to L6

$n_d$ = 1.80518, $\nu_d$ = 25.4. Glass: SF6 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified). f = +134.283 mm.

L5 is the positive, more dispersive member of the moving G2 doublet. Its rear surface, R11, is a glass-to-glass transition into L6, not an air surface or a layer of generic cement. The positive focal length above describes an isolated L5 in air; it is therefore not the focal power of the actual cemented interface. L5 and L6 move rigidly together in the reconstruction. [1, Fig. 1, ¶0024]

### L6 — Biconcave Negative, cemented to L5

$n_d$ = 1.51633, $\nu_d$ = 64.2. Glass: S-BSL7 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified). f = -41.497 mm.

L6 supplies the stronger opposing standalone power within G2. The complete L5–L6 assembly has a calculated focal length of -59.521301 mm and is the negative focusing group identified by the patent. The low-dispersion crown/high-dispersion positive pairing provides a degree of freedom for chromatic balancing, but no individual chromatic correction amount follows from the two Abbe numbers alone. Its index of 1.51633 is distinct from the 1.51680 of N-BK7. [1, ¶0009, ¶0020, ¶0024]

### L7 — Biconcave Negative, cemented to L8

$n_d$ = 1.80518, $\nu_d$ = 25.4. Glass: SF6 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified). f = -51.732 mm.

L7 opens G3 with a very weakly curved front face and a stronger curved cemented rear interface. It uses the same recorded high-dispersion coordinates as L5, but its isolated power is negative. The patent explicitly assigns chromatic balancing within G3 to this negative, more dispersive component and the following positive, less dispersive one. That is a source-stated group strategy, not a calculated apochromatic classification. [1, ¶0013, ¶0024]

### L8 — Biconvex Positive, cemented to L7

$n_d$ = 1.80610, $\nu_d$ = 41.0. Glass: LAH53 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified). f = +47.700 mm.

L8 opposes L7 within the fixed rear doublet. Together L7–L8 have a calculated positive focal length of +527.257551 mm, confirming the weak net positive power described in ¶0013 despite the larger opposed standalone powers. The difference between the two Abbe numbers supports the source description of a chromatic balancing pair; it does not establish a supplier, anomalous dispersion, or the residual secondary spectrum. [1, ¶0013]

### L9 — Biconvex Positive

$n_d$ = 1.77250, $\nu_d$ = 49.6. Glass: LAH66 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified). f = +59.884 mm.

L9 is the final positive singlet. Paragraph 0013 states that this element bears most of G3’s positive power and acts in the negative direction against positive distortion generated upstream. The calculated standalone and assembly powers are consistent with that description: its standalone power is much stronger than that of the preceding weak-positive doublet. The distortion statement remains the patent’s explanation; no isolated-element distortion contribution is inferred merely from the lens shape. [1, ¶0013, ¶0024]

## Glass Identification and Source Qualifications

Fresh original inspection on **2026-10-30** confirms all nine bare index/Abbe pairs in Numerical Example 1, paragraph 0024 on PDF/printed pages 3–4. Paragraph 0023 defines Ni/νi as index and Abbe number without a reference wavelength, and the patent names no spectral line. The d/g labels in Figure 4/page 7 identify aberration traces; they do not establish the bulk table's reference line. 9 of 9 printed pairs match catalog d-line coordinates and none match the e-line, so the table is read as d-line. 9 media use catalog curves as spectral proxies; supplier, melt and chemistry stay unspecified.

| Elements | Printed $n_d$ | Printed $\nu_d$ | Glass                                                                                                       |
| -------- | ------------: | --------------: | ----------------------------------------------------------------------------------------------------------- |
| L1       |       1.65160 |            58.5 | LAL7 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)   |
| L2, L9   |       1.77250 |            49.6 | LAH66 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)  |
| L3       |       1.71300 |            53.8 | LAL8 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)   |
| L4       |       1.71736 |            29.5 | SF1 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)    |
| L5, L7   |       1.80518 |            25.4 | SF6 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)    |
| L6       |       1.51633 |            64.2 | S-BSL7 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified) |
| L8       |       1.80610 |            41.0 | LAH53 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)  |

All source values remain literal, including L6's 64.2 and L8's 41.0. The catalog names are coordinate matches, not supplier identifications. No source C/F/g indices, partial dispersion or APD value is published. No resin, cement thickness or hybrid medium is prescribed. Relative high/low dispersion in paragraph 0013 does not prove ED chemistry, anomalous dispersion or APO performance.

## Focus Mechanism

Paragraph 0009 moves G2 imageward from infinity toward close focus. In the selected table convention, G1, the stop and G3 remain fixed: D8 is constant, while D9 and D12 are variable. Paragraph 0022 permits a fixed stop but also describes moving-stop alternatives; the schematic stop/group bracket is not a unique mechanical specification. This model follows the literal fixed-stop table arrangement rather than introducing the alternative bracketed motion. [1, ¶0009, ¶0022, ¶0024, Fig. 1]

The close-focus endpoint is **derived**, not published: the patent prints only the infinity gaps. The image plane is held at its infinity position and only the rigid axial displacement of G2 is solved. The target is 850 mm from the object plane to that fixed image plane, a modeling convention based on Canon’s marketed 0.85 m minimum focus distance. The patent does not state the origin of the distance for its separate 0.8 m plot.

| Modeled gap           | Native infinity | Derived 850 mm object-to-image endpoint |
| --------------------- | --------------: | --------------------------------------: |
| D9, after STO         |     3.590000 mm |                            14.780563 mm |
| D12, after surface 12 |    16.300000 mm |                             5.109437 mm |

The unique geometrically admissible solution translates G2 imageward by 11.190563 mm. A second algebraic solution makes the rear gap negative and is rejected. The paraxial conjugate condition is met to better than 1e-8 mm at the fixed image plane. Predicted transverse magnification is -0.127006, rather than a value fitted to Canon’s 0.13× specification. Effective focal length at the derived endpoint is 87.176243 mm. No other group motion, image-plane shift or intermediate focus state is introduced.

Between the two endpoints, the gaps interpolate linearly with the focus control. The displayed distance label follows an inverse-distance estimate and is not an exact mechanical calibration. At the midpoint, the label is 1700 mm, while the interpolated gaps focus at approximately 1488 mm object-to-image distance. At the close endpoint, label and focus agree at 850 mm.

An object placed at a labelled intermediate distance would image up to 0.77 mm from the fixed plane in the paraxial sense. This is a discrepancy between the label and the conjugate, not a focus error of the two solved endpoints. The image plane is the same at every focus position.

Canon’s ring-type USM and full-time manual focus describe the retail actuator. They do not establish the exact patent group mapping. Likewise, the production source’s non-rotating front group alone would not prove an axially fixed front group; the fixed-group assumption here follows the selected patent mechanism. [2–4]

## Aberration Correction and the Air Lens

The patent’s main architectural argument is to reduce focus-dependent aberration changes by distributing positive power around a movable negative group. It describes progressive convergence through the first three positive elements, and specifically credits the narrow air space between L3 and L4 with a negative-air-lens contribution to higher-order spherical aberration and sagittal flare. These are source explanations of the combination, not independently isolated surface-aberration measurements. [1, ¶0005–0007, ¶0011–0012]

The rear group combines a weak-positive cemented chromatic-balancing pair with a stronger positive singlet. Paragraph 0013 associates the final singlet with distortion correction and the doublet with reduced chromatic changes during focusing. The sign inconsistency in ¶0011 prevents an unqualified repetition of that paragraph’s spherical-aberration cancellation claim.

For the literal monochromatic index set, the calculated surface-by-surface Petzval sum is +0.002143551 mm⁻¹. Its reciprocal is a paraxial Petzval radius of approximately 466.516 mm under the stated sign convention. That radius is not the measured tangential or sagittal focal surface, and it does not establish a flat image field. The patent’s d- and g-line aberration plots identify the reference lines but not individual glass melts. [1, Fig. 4]

## Conditional Expressions

The patent defines f12 as the combined G1–G2 focal length at infinity, f as the complete system focal length, and f2/f3 as the isolated functional-group focal lengths. Its bounds constrain the balance between length, rear clearance, focusing travel and focus-dependent aberration changes. The source explanations are qualitative design constraints, not separate numerical performance guarantees. [1, ¶0015–0021]

| Source condition        | Calculated from the literal infinity table | Printed Example 1 summary |
| ----------------------- | -----------------------------------------: | ------------------------: |
| 2.2 < f12/f < 4.5       |                                   4.166223 |                      4.18 |
| 0.55 < \|f2\|/f < 0.85  |                                   0.700270 |                      0.70 |
| 0.75 < f3/\|f2\| < 1.15 |                                   0.905113 |                      0.91 |

All three inequalities are satisfied. The first printed summary is not reproduced by the literal rounded prescription: 4.166223 rounds to 4.17, not 4.18. A separate bounded sensitivity calculation shows that values within the printed thickness rounding intervals can bracket 4.18 while retaining the stated focal-length precision. This establishes conditional rounding compatibility, not an identified correction or recovery of the unpublished unrounded design. The native prescription remains unchanged. [1, Table 1, printed p. 5]

## Model Scope and Limitations

The source publishes f/1.8 and the stop station but no iris radius. The current canonical runtime uses the unchanged inferred physical radius 14.593623 mm. The older 14.995052 mm exact-ray calibration is a historical convention diagnostic, not the current runtime radius or a published diaphragm dimension. This review does not change the stop or aperture controls.

Every semi-diameter is modeled rather than printed. Fresh inspection uses the native 630 × 375 px Figure 1 on page 5 at about 200 dpi; the textual prescription is vector-rendered at 200 dpi for legibility. Higher raster rendering of the figure is upsampling. Its schematic outlines support ratios, not manufacturing tolerances; estimated reading uncertainty is±0.5 mm at retained scale plus unquantified schematic error.

R8's clear optical cap remains16.1 mm. The resolved flat annulus now uses `rimExtensionSd:20.4`, matching the existing R7 outer height while preserving optical aperture. Native cap/outer-height ratio is approximately 0.80±0.02; adopted 16.1/20.4=0.789. This is an outer shoulder of one connected glass body, not an inferred cut. Extending the entire spherical cap to 20.4 mm passes the numerical surface guard but disagrees with the source's flat annulus: spherical sag becomes9.637162 mm instead of5.474907 mm, reaching0.817162 mm past the axial stop station. That source-inconsistent trial is rejected without claiming a validator failure or changing R/d.

The source L7 front-to-bonded-height ratio is about 0.94±0.03. Its front S13 is raised15→16 mm while the bonded S14 remains17 mm, preserving the visible step. No land is added at the material interface. L1/L2/L3 remain26.9/24.1/21.2 mm; moving G2 retains15 mm clear caps; L8 retains17 mm and L9 retains19 mm. Every concave end, shared interface and fixed/moving gap is checked with literal radii and unchanged guards. No additional layer, wing or inferred rim cut is introduced.

With the inferred rims, chief rays at the patent’s 14.3° half-field and at the full-frame corner pass at infinity, at the derived endpoint and at intermediate focus positions. At infinity, the 14.3° source chief reaches a calculated image height of 21.377161 mm at the derived Gaussian plane. The separate full-frame corner has radius 21.633308 mm; its native modeled chief angle is 14.472310°. This distinction is preserved rather than adjusting source field, focal length or image plane to make the two identical.

The modeled elements retain positive edge thickness, and the moving doublet clears its neighbors throughout the focus travel. Ordinary off-axis vignetting at the inferred rims remains. The model does not establish production illumination or resolution.

The prescription has no aspherical surface and no stabilization group, and no rear optical plate is modeled. The 0.85 m endpoint is calculated rather than published, so it is not presented as a patent finite-conjugate state. The numerical conclusions apply to the printed index set, the stated reference planes, the inferred apertures and the single-group focus model, not to an independently measured retail sample.

## Sources and References

1. Japan Patent Office, **JP H05-157964 A**, _インナーフォーカス式の望遠レンズ_, published 25 June 1993. Primary supplied publication: front-page bibliographic data; ¶0007–0024; Example 1 on printed pp. 3–4; Table 1 and Fig. 1 on p. 5; Fig. 4 on p. 7. [Publication record](https://patents.google.com/patent/JPH05157964A/en).
2. Canon Camera Museum, **EF85 mm f/1.8 USM**, specification table and descriptive text. [Manufacturer record](https://global.canon/en/c-museum/product/ef313.html).
3. Canon USA, **EF 85 mm f/1.8 USM**, Technical Specifications, including “Focus Adjustment.” [Manufacturer support](https://www.usa.canon.com/support/p/ef-85 mm-f-1-8-usm).
4. Canon, **EF Lens Catalogue 2018**, EF85 mm f/1.8 USM product block, PDF p. 4 of 27, printed p. 8. [Official catalog PDF](https://asia.canon/media/document/2023/08/25/ac24e05e0718479ea233d5c19cb197c6_Canon_EF_Lens_Catalogue_2018.pdf).
5. Canon UK, **How to read Canon lens names**, EF section and named EF85 mm example. [Mount guide](https://www.canon.co.uk/store/buying-guides/how-to-read-canon-lens/).
6. Canon UK, **85 mm lens comparison**, IMAGE SIZE row for EF 85 mm f/1.8 USM. [Format comparison](https://www.canon.co.uk/store/canon-85 mm-lenses/).
7. OHARA, **OHARA_260701 catalog** and current/historical optical-glass tables. Original catalog types and prefixes retained in coordinate comparisons. [Official catalog archive](https://oharacorp.com/wp-content/uploads/catalogs/OHARA_260701_CATALOG.zip).
8. HOYA, **HOYA20260601 optical-glass data table**. [Official workbook](https://www.hoya-opticalworld.com/common/xls/HOYA20260601.xlsx).
9. SCHOTT, **Optical glass catalog**, preferred and historical glass entries used for the stated coordinate comparisons. [Official workbook](https://media.schott.com/api/public/content/7f5a58f7fa754445abab44cafc76acb3?v=a102056c&download=true).
10. HIKARI, **HIKARI ALL Catalog Data**, Data worksheet. [Official workbook](https://www.hikari-g.co.jp/optical_glass/catalog/document/HIKARI_ALL_Catalog_Data.xlsx).
11. CDGM, **Optical glass catalog, September 2026**, optical glass worksheet. [Official workbook](https://www.cdgmgd.com/downloadFile.htm?uid=d5ilBXjFgXCK9VxoDmb).
12. SUMITA, **Optical-glass catalog**, current and historical coordinate records. [Official glass data](https://www.sumita-opt.co.jp/en/download/).

## 2026-10-30 — Original Review and Complete Focus-State Results

The original front page confirms filed 1991-12-06, published 1993-06-25, Hiroshi Endo / Canon Inc. Numerical Example 1 is pp3–4; Table 1/Figure 1 p5; corresponding Figure 4 p7. All 17 stations, nine media, fixed D8 and variable D9/D12 were read against the original. Native Figure 1 and actual newly generated SVG agree on connected bodies and the restored R8 shoulder. Leaders, group brackets, SP, focus arrow and axis are excluded from optical-rim measurements.

All source R/d, the stop, D17 and the derived 0.85 m G2 endpoint remain unchanged. The infinity EFL/BFL is84.997673/38.905092 mm with zero numerical Gaussian plane residual. The modeled physical iris is14.593623 mm throughout focus. At half/close focus the retained matrix conjugates are1488.329524/850.000000 mm, with magnifications−0.065038/−0.127006. These are derived model conjugates, separate from the patent's0.8 m plot and the inverse-distance slider label. The canonical stop choice and fixed-stop mechanism are preserved; no alternate moving-stop model is substituted.

The full21-focus grid gives 3,087 aimed pupil launches,1,029/1,029 clear axial samples and 63/63 clear chiefs. Axial/0.6-field/corner counts are49/45/19 at infinity,49/47/23 at half and 49/48/33 at close. All nine SVG paths are finite, closed and connected with zero hidden renderer trimming. Peripheral vignetting remains. The source 14.3° infinity chief is clear at 21.377161 mm,98.82% of the 135-format diagonal semi-height; the runtime format-corner chief is independently clear. No cuts require exemptions.

Paragraph 0011's repeated-positive sign statement and Table 1's4.18 versus literal 4.166223 ratio are formal unresolved source errata. No exact correction is invented. Historical rounding-compatibility calculations remain unconfirmed explanations rather than source replacements. The previous stage/corpus dates and 2026-10-12 catalog record remain historical. The d-line reading rests on the printed coordinates matching catalog values, not on the Figure 4 plot labels, and no catalog name identifies a supplier.
