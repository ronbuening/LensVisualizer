## Patent Reference and Design Identification

**Patent:** WO 2020/230915 A1\
**Application Number:** PCT/KR2019/005710\
**Filed:** 13 May 2019\
**Published:** 19 November 2020\
**Inventor:** Moon-Kyung Kim\
**Applicant:** Samyang Optics Co., Ltd.\
**Title:** *Internal Focus Wide-Angle Lens System and Electronic Apparatus Including the Same*\
**Embodiment analyzed:** Example 1 / First Embodiment

The prescription is the first embodiment of WO 2020/230915 A1, retained at its native patent scale. The production correlation is the user-selected Samyang AF 24mm f/2.8 FE; it is treated as the fixed correlation for this record, not as a manufacturer-confirmed patent attribution. The public product specification and the patent example converge in several ways:

1. Samyang specifies the production lens as a full-frame Sony E-mount 24mm f/2.8 with seven elements in seven groups, three ASP elements, and two HR elements. Example 1 contains seven air-separated elements and three aspherical elements, with the aspheres on L31, L41, and L51. [1, Tables 1-2; 2]
2. The patent gives `FL=25 mm` and an independently recomputed paraxial EFL of 25.026319 mm, while the production focal length is marketed as 24 mm. The data therefore preserves the patent scale rather than rescaling the design to the marketing number. [1, Table 1; 2]
3. The patent infinity half-field is 41.131°, or 82.262° full field, closely matching Samyang's 82.1° full-frame angle-of-view specification. [1, Table 3; 2]
4. The patent infinity f-number is 2.892, close to the marketed f/2.8. The data uses the exact modeled value, `nominalFno=2.892`, while retaining f/2.8 as marketing metadata. [1, Table 3; 2]
5. Samyang specifies a 0.24 m minimum focus distance and 0.13× maximum magnification. The patent close row is labeled `TL=0.2m` and gives magnification 0.12144×. The patent's D0/TL reference-plane wording is internally inconsistent, so the production 0.24 m value is retained separately rather than equated to the patent row. [1, ¶0125-¶0126; 2]

Samyang announced the AF 24mm f/2.8 FE in June 2018 for July 2018 availability, whereas the patent application was filed in May 2019. The dates are therefore treated as historical context only, not as independent correlation evidence or manufacturer confirmation. [1; 3]

## Optical Architecture

The design is a compact three-functional-group internal-focus wide-angle prime. It contains seven physical glass elements, all air-separated; accordingly the production/catalog count is seven elements in seven groups. The patent separately organizes those seven air-spaced elements into three functional groups: fixed front group G11 (L11-L41), moving focus group G21 (L51-L61), and fixed rear group G31 (L71). The aperture stop lies between G11 and G21. [1, ¶0054-¶0065; Fig. 1]

The power distribution is not obvious from the individual element signs. Five standalone elements are negative and only L31 and L61 are positive, yet independent paraxial matrix calculations from the final prescription give an isolated EFL of +61.069 mm for G11 and +17.742 mm for G21, while G31/L71 is -33.472 mm. At the published infinity separation, the combined G11+G21 subsystem is strongly positive at +14.704 mm. These are air-spaced group powers, not cemented-doublet powers; the design has no cemented interfaces.

This power balance follows the patent's stated design logic. The first element is negative, the two-lens focusing group may be positive, and the rear negative group is used to correct field curvature; the patent specifically describes L71 as a possible field flattener. The two-element G21 construction is also tied to rapid focusing and aberration correction. [1, ¶0066-¶0068]

Under the LensVisualizer taxonomy, the design is neither telephoto nor retrofocus. The normalized no-device track is 52.13888 mm, giving track/EFL = 2.083, so it does not satisfy the project's `TL/EFL < 1` telephoto criterion. The paraxial BFD from surface 15 is 23.49697 mm, giving BFD/EFL = 0.939, so it does not satisfy the `BFD > EFL` retrofocus criterion. This deliberately differs from the patent's looser use of “telephoto” for a design whose EFL exceeds its back focal length. [1, ¶0071]

Two scope normalizations in the data are modeling choices rather than patent geometry. First, the patent's optional optical device OD, surfaces 16-17, is identified as a filter and/or cover glass and may be omitted; it is therefore excluded from the ordinary LensVisualizer prescription. The final air gap from surface 15 to IMG is the patent's explicit no-device `in Air = 23.467 mm` value. [1, ¶0069-¶0070; Table 3] Second, the patent publishes neither stop diameter nor clear apertures. The stop semi-diameter and all surface semi-diameters in the data are inferred modeling dimensions; the patent does publish the stop position itself.

No uniform scaling is applied (`s=1.0`). Radii, axial spacings, image-plane distance, and aspheric coefficients therefore remain at the native Example-1 scale, while the 24 mm and f/2.8 values remain separate marketing fields.

## Element-by-Element Analysis

### L11 - Negative Meniscus

`nd = 1.43700, νd = 95.10. Glass: 437951 — very-low-dispersion crown class (FCD100 coordinate; vendor unresolved). Standalone f = -37.261 mm.`

L11 is the object-side element of fixed group G11. Its negative standalone power is explicitly consistent with the patent's stated preference for a negative first lens when accepting a wide viewing angle. [1, ¶0058, ¶0066]

Its unusually high Abbe number is important in the patent's material balance. Formula 5 compares the Abbe number of this first lens with that of L21 and requires a large difference; Example 1 gives a difference of 78.6165. The patent associates that separation with chromatic-aberration control, but the prescription does not provide the line-index or partial-dispersion data needed to characterize the system as apochromatic. [1, ¶0107-¶0110; Table 13]

### L21 - Negative Meniscus

`nd = 1.98613, νd = 16.48. Glass: 986165 — very-high-index flint class (FDS16-W coordinate; vendor unresolved). Standalone f = -47.223 mm.`

L21 combines very high index with very low Abbe number. The patent permits the second lens of G11 to have either sign; the actual Example-1 prescription is negative by standalone paraxial calculation. [1, ¶0059]

The sharp `νd` contrast between L11 and L21 is a source-published design condition rather than a vendor-glass attribution. The neutral class label therefore preserves the coordinate match without asserting that Samyang used a named HOYA glass in production.

### L31 - Biconvex Positive, Rear Asphere

`nd = 1.80755, νd = 40.89. Glass: 808409 — high-index class (catalog identity unresolved). Standalone f = +13.008 mm.`

L31 is the strongest positive standalone element in the fixed front group. Its +13.008 mm power offsets the three negative standalone elements in G11 and is central to the front group's net positive power. The rear surface, 6A, is aspherical. [1, ¶0059, ¶0061; Tables 1-2]

The patent states that including an aspherical lens in G11 can reduce total length, preserve power balance with the other groups, and improve correction of performance changes with object distance. That statement applies to the architectural role of the front-group aspheres without assigning a unique aberration term to L31 alone. [1, ¶0063]

### L41 - Negative Meniscus, Rear Asphere

`nd = 1.51815, νd = 64.03. Glass: J-BK7A catalog-equivalent (patent coordinates retained; production supplier unspecified). Standalone f = -39.579 mm.`

L41 closes the fixed G11 group immediately ahead of the stop. Its standalone power is negative in Example 1, although the patent allows either sign for the fourth lens. Surface 8A is aspherical. [1, ¶0059-¶0061; Tables 1-2]

Because L41 sits adjacent to the stop, its aspherical rear surface provides a separate radial correction degree of freedom at the end of the front group. The patent treats L31 and L41 together as candidate aspherical elements within G11 rather than assigning each a single named aberration. [1, ¶0061, ¶0063]

### L51 - Negative Meniscus, Rear Asphere

`nd = 1.69815, νd = 31.19. Glass: S-TIM35 catalog-equivalent (patent coordinates retained; production supplier unspecified). Standalone f = -79.131 mm.`

L51 is the front element of the moving G21 focus group. It is a relatively weak negative element by standalone power, followed by the much stronger positive L61. Surface 11A is aspherical. [1, ¶0062, ¶0064; Tables 1-2]

The patent specifically describes G21 as a two-lens focusing group capable of positive net power and links the small lens count to rapid focusing and aberration correction. It also states that an asphere in the focusing group can reduce lens count, facilitate correction, and reduce focusing sensitivity. [1, ¶0066, ¶0068]

The source coordinate is retained exactly. S-TIM35 supplies a compatible dispersion proxy (Δn ≈ +0.000797, Δν ≈ −1.06), without identifying the production glass or claiming an exact match.

### L61 - Positive Meniscus

`nd = 1.77250, νd = 49.62. Glass: 773496 — high-index class (cross-vendor coordinate). Standalone f = +16.644 mm.`

L61 is the strong positive rear element of G21. Together with the negative L51 and their 0.1 mm air gap, it forms an air-spaced focusing pair with an isolated group EFL of +17.742 mm. That group value must not be confused with either element's standalone focal length; there is no cemented net power because the pair is not cemented. [1, ¶0062]

The constant sum of the variable gaps on either side of G21 shows that L51 and L61 translate together as a rigid internal group through the published focus states.

### L71 - Plano-Concave Negative

`nd = 1.92286, νd = 20.88. Glass: 923209 — very-high-index dense-flint class (cross-vendor coordinate). Standalone f = -33.472 mm.`

L71 is the sole element of fixed rear group G31 and is identical to that group's isolated optical power. Its object-side surface is plane, matching the patent's description of L71 as a possible plano-concave negative lens. [1, ¶0065; Table 1]

The patent gives this rear negative group an explicit field-curvature function. When the positive G11 and G21 groups tend to curve the image field toward the object side, G31 may correct that field curvature, and L71 may function as a field flattener. [1, ¶0067]

## Glass Identification and Selection

The patent publishes only d-line `nd` and `νd`; it does not name glass vendors or commercial glass types. The final data uses neutral six-digit coordinates and qualified catalog equivalents without asserting a production identity. Catalog comparison used current HOYA, SCHOTT, OHARA, HIKARI, CDGM, and SUMITA optical-glass data as coordinate references, not as evidence of Samyang's production sourcing. [4-9]

| Element | Stored glass annotation | nd | νd | Interpretation |
|---|---|---:|---:|---|
| L11 | 437951 — very-low-dispersion crown class (FCD100 coordinate; vendor unresolved) | 1.43700 | 95.10 | Exact nominal FCD100 coordinate; vendor not established |
| L21 | 986165 — very-high-index flint class (FDS16-W coordinate; vendor unresolved) | 1.98613 | 16.48 | Near-exact FDS16-W coordinate; vendor not established |
| L31 | 808409 — high-index class (catalog identity unresolved) | 1.80755 | 40.89 | Class-level annotation only |
| L41 | J-BK7A catalog-equivalent (patent coordinates retained; production supplier unspecified) | 1.51815 | 64.03 | Crown-class coordinate, no unique identity |
| L51 | S-TIM35 catalog-equivalent (patent coordinates retained; production supplier unspecified) | 1.69815 | 31.19 | Compatible S-TIM35 dispersion proxy; supplier unspecified |
| L61 | 773496 — high-index class (cross-vendor coordinate) | 1.77250 | 49.62 | Multiple authoritative catalog families share the coordinate |
| L71 | 923209 — very-high-index dense-flint class (cross-vendor coordinate) | 1.92286 | 20.88 | Multiple authoritative catalog families share the coordinate |

The strongest source-defined chromatic design statement is the large Abbe-number separation between L11 and L21, formalized by Formula 5. That is sufficient to discuss a source-defined chromatic-control material contrast, but not anomalous partial dispersion or APO behavior. The data contains no authored `nC`, `nF`, `ng`, or `dPgF` values, and no production-vendor Sellmeier identity is asserted.

## Focus Mechanism

Focusing is internal. G11 and G31 remain fixed while the two-element G21 group translates toward the object as focus closes. This behavior is directly published; it is not a constrained reconstruction. [1, ¶0054-¶0055, ¶0062, ¶0066; Table 3]

| Published state | D1: STO→G21 (mm) | D2: G21→G31 (mm) | G21 travel from infinity (mm) | Patent magnification |
|---|---:|---:|---:|---:|
| Infinity | 4.33946 | 2.13342 | 0.00000 | — |
| MAG=-1/40 | 4.11302 | 2.35986 | 0.22644 | 0.025 |
| TL=0.2m | 3.25312 | 3.21976 | 1.08634 | 0.12144 |

At every row, `D1 + D2 = 6.47288 mm`, proving rigid translation of G21 between the fixed neighboring groups. The total published focus travel is therefore 1.08634 mm objectward. Independent first-order calculation also shows the system EFL changing from 25.02632 mm at infinity to 24.68189 mm at the `MAG=-1/40` row and 23.44182 mm at the `TL=0.2m` row; these are Gaussian focus-state values, not replacement marketing focal lengths.

The source's object-distance reference requires caution. Paragraph 125 describes `TL` as an object-to-image distance, yet the close row also gives `D0=200.04902 mm`, which cannot be reconciled with the published overall axial length if D0 is read literally in the same frame. The data therefore preserves the published D1/D2 mechanics but does not derive production MFD from D0 or TL. The production `closeFocusM=0.24 m` comes from Samyang's product specification. The intermediate UI keyframe is positioned by fractional mechanical travel rather than by assigning a physical object-distance interpretation to the contradictory D0/TL datum. [1, ¶0125-¶0126; 2]

The patent's infinity `Fno=2.892` is used as the modeled nominal f-number. Table 3 lists 2.900 and 2.905 at the two closer states; the model retains the infinity design value as `nominalFno` rather than encoding the small focus-state change as a separate aperture control.

## Aspherical Surfaces

Example 1 has three aspherical surfaces: 6A on L31, 8A on L41, and 11A on L51. These correspond to patent surfaces 6*, 8*, and 11*. [1, Tables 1-2]

The patent's Formula 7 uses the standard conic convention

`Z = cY² / [1 + sqrt(1 - (1+K)c²Y²)] + A4·Y⁴ + A6·Y⁶ + A8·Y⁸ + A10·Y¹⁰ + ...`

so the tabulated `K` values transfer directly into LensVisualizer without a κ-to-K conversion. The data retains the native scale (`s=1.0`), so no asphere coefficient transformation is applied. [1, ¶0117-¶0119]

| Surface | Element | K | A4 (mm⁻³) | A6 (mm⁻⁵) | A8 (mm⁻⁷) | A10 (mm⁻⁹) |
|---|---|---:|---:|---:|---:|---:|
| 6A | L31 rear | -52.01448 | -1.21E-04 | 2.21E-06 | -2.60E-08 | 1.42E-10 |
| 8A | L41 rear | -10.05487 | 3.41E-04 | 1.27E-06 | -1.94E-07 | 3.56E-09 |
| 11A | L51 rear | 0.60401 | 2.06E-04 | 4.04E-07 | 3.52E-08 | -3.62E-10 |

The three surfaces use materially different conic and polynomial profiles. Surface 6A combines a strongly negative conic constant with negative fourth-order correction; 8A retains a negative conic constant but reverses the sign of A4; 11A uses a positive conic constant and positive A4. This distributes independent radial correction between the fixed front group and the moving focus group rather than concentrating all aspheric correction on one element. The patent expressly links front-group aspheres to compactness and focus-dependent performance correction, and the G21 asphere to reduced lens count, easier aberration correction, and reduced focusing sensitivity. [1, ¶0063-¶0064, ¶0068]

The patent does not tabulate E/F terms for Example 1. The data therefore uses `A12=0` and `A14=0` only as unused schema terms; they are not presented as additional source-published coefficients. No manufacturing process for the three aspheres is identified in the cited patent or manufacturer specification, so the analysis does not classify them as molded, hybrid, or polished.

## Conditional Expressions

The patent defines six principal design conditions and gives Example-1 values in Table 13. Literal recomputation confirms that the prescription satisfies all six stated ranges, but two of the table's listed evaluated values do not correspond to the formulas as printed. Those inconsistencies are preserved rather than silently corrected. [1, ¶0094-¶0114; Table 13]

| Condition | Patent range | Literal Example-1 recomputation | Table 13 listed value | Result |
|---|---:|---:|---:|---|
| BF/FL | 0.82 to 1.60 | 0.94676 | 0.947 | Pass |
| tan ω | 0.83 to 1.42 | 0.87331 using HFOV=41.131° | 0.865 | Pass |
| fm/fL3 | -0.62 to -0.27 | -0.44199 | -0.44 | Pass |
| (L1+L3)/LF | 5.09 to 53.25 | 11.23389 | 11.23 | Pass |
| abs(G1V-G2V) | 20 to 80 | 78.6165 | 78.6165 | Pass |
| Y/BFL | 0.79 to 1.15 | 0.88214 | 0.91 | Pass |

For Formula 2, the table's 0.865 is reproduced by `Y/FL = 21.63/25 = 0.8652`, not by `tan(41.131°) = 0.87331`. For Formula 6, the listed 0.91 is reproduced by `Y/BF = 21.63/23.669 = 0.91385`, not by the printed `Y/BFL = 21.63/24.52 = 0.88214`. Neither discrepancy changes the pass/fail status of Example 1.

The conditions reinforce the design's main themes: relatively long back focus for a compact mirrorless wide angle, a large half-field, a positive front-plus-focus subsystem balanced by a negative rear group, controlled focus travel, a large Abbe contrast between the first two elements, and sensor-field/back-focus matching. The patent's terminology is retained for these conditions, while the LensVisualizer telephoto/retrofocus classifications follow the stricter project definitions described above.

## Verification Summary

Independent reduced-angle tracing and a separately assembled ABCD matrix agree to numerical precision for the final active prescription. At infinity, the paraxial EFL is 25.026319 mm versus the patent's nominal 25 mm, and the BFD from surface 15 is 23.496973 mm versus the patent's no-device `in Air` value of 23.467 mm. The residuals are consistent with the source's rounded headline values.

The stop location is source-published, but its diameter is not. The modeled `STO.sd = 4.71225 mm` is inferred from the 25.026319 mm EFL, the patent infinity f-number of 2.892, and the independently traced entrance-pupil magnification. Re-tracing the final arrays gives an entrance-pupil semi-diameter of 4.326821 mm and an implied f-number of 2.891999.

All lens-surface semi-diameters are likewise inferred rather than source-published. The final dimensions pass independent checks for element edge thickness, actual spherical/aspherical rim slope, the positive-K conic limit on 11A, shared-band cross-gap intrusion at all three focus states, and on-/off-axis ray containment at the modeled 0.60 field fraction. These checks validate the authored geometry without presenting the inferred apertures as patent dimensions.

Surface-by-surface Petzval summation using `φ/(n·n′)` gives +0.004481833 mm⁻¹, corresponding to -223.123 mm under the `R_P = -1/sum` convention. This is a computed system property; the patent's qualitative assignment of L71 as a field flattener remains the source statement about the rear group's purpose. [1, ¶0067]

## Sources

1. WO 2020/230915 A1, *Internal Focus Wide-Angle Lens System and Electronic Apparatus Including the Same*, PCT/KR2019/005710, Samyang Optics Co., Ltd., inventor Moon-Kyung Kim, published 19 November 2020. Primary prescription source; especially ¶0054-¶0071, ¶0094-¶0119, Tables 1-3 and 13, and Fig. 1.
2. LK Samyang, “AF 24mm F2.8 FE,” official product page: https://www.lksamyang.com/en/product/product-view.php?seq=376 — production identity, Sony E mount, full-frame coverage, 24 mm f/2.8, 7 elements/7 groups, 3 ASP, 2 HR, 82.1° angle of view, 0.24 m MFD, 0.13× maximum magnification, and seven aperture blades.
3. LK Samyang, “Samyang Unveils the AF 24mm F2.8 FE, SONY Autofocus Lens,” 20 June 2018: https://www.lksamyang.com/en/about/notice-view.php?seq=491 — launch timing, full-frame Sony E-mount identity, and July 2018 availability.
4. HOYA Optical World, optical-glass data/catalog resources: https://www.hoya-opticalworld.com/english/datadownload/index.html
5. SCHOTT Advanced Optics, optical-glass catalog/search: https://www.us.schott.com/shop/advanced-optics/en/search/
6. OHARA INC., optical-glass catalog data: https://www.ohara-inc.co.jp/en/product/catalog/
7. HIKARI, optical-glass catalog downloads: https://www.hikari-g.co.jp/optical_glass/catalog/
8. CDGM, optical-glass database: https://www.cdgmgd.com/database/toWebDatabase.htm?k=Products_Data
9. SUMITA Optical Glass, current optical-glass downloads and Data Book: https://www.sumita-opt.co.jp/en/download/
