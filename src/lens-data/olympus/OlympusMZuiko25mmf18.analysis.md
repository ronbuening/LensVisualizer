## Patent Reference and Design Identification

**Patent:** JP 2015-075501 A  
**Application Number:** JP 2013-209493  
**Filed:** 4 October 2013  
**Published:** 20 April 2015  
**Inventor:** Yukihiro Yamamoto  
**Applicant:** Sigma Corporation  
**Title:** Imaging Optical System  
**Embodiment analyzed:** Numerical Example 1

This prescription is the selected patent correlation for the OLYMPUS M.ZUIKO DIGITAL 25mm f/1.8. The patent is a Sigma filing; neither the patent nor the Olympus product announcement confirms that this exact prescription was manufactured for Olympus. The correlation rests on convergent structural and specification evidence rather than an established commercial relationship:

1. The example has nine lens elements in seven air-separated groups, matching the marketed construction.
2. Its three aspheric surfaces occur on two lenses, matching the manufacturer's two-aspheric-element count.
3. The published design focal length and aperture are 24.53 mm and f/1.82, close to the marketed 25 mm and f/1.8.
4. The patent gives a 10.80 mm image height and 48.10° full field. The production lens is Micro Four Thirds and is specified at 47°.
5. The patent's moving internal group and 250 mm near state agree in broad mechanism and distance with the production lens's internal MSC focusing and 0.25 m minimum focus.
6. The filing precedes Olympus's 29 January 2014 announcement and planned late-February 2014 release.

The model uses the patent's original scale. Product dimensions, release details and branded focusing terminology describe the commercial lens; the prescription, internal motion and glass coordinates remain attributes of the selected patent example. [1,2]

## Optical Architecture

This is an asymmetric three-group inner-focus standard lens. The functional power sequence is positive G1, positive G2 and weak negative G3. These functional groups are distinct from the seven air-separated optical groups used in the construction count.

At infinity, the recomputed focal length is 24.530104 mm. The functional group focal lengths are G1 +88.665551 mm, G2 +23.208742 mm and G3 -444.634711 mm. G1 contains a negative meniscus, a positive biconvex lens and a cemented positive/negative pair. G2 contains the second cemented pair and a separate positive aspheric lens. G3 contains a negative followed by a positive meniscus. The patent subdivides the fixed groups, and the diagram labels those sub-groups directly: G1a (L1), G1b (L2) and G1c (the cemented pair L3-L4) make up G1, and G3a (L8) and G3b (L9) make up G3. The patent does not designate individual lens elements, so L1-L9 are sequential labels. The stop lies between the last G1 lens and G2; the patent treats it as part of the fixed front assembly. [1, ¶¶0080-0084, 0115]

The first-to-last lens vertex span is 43.4869 mm. Including the published rear filter and image-side air gap, the first-vertex-to-image distance is 60.7499 mm. The unplated air back focal distance is 15.900396 mm from the last lens vertex. With the published plate present, the corresponding physical paraxial focus lies 17.263265 mm behind that vertex. The source's BF = 1.0000 mm instead measures from the rear filter face to the specified image plane. These are different reference planes.

The physical track is longer than the focal length, and the last-lens air back focal distance is shorter. These first-order results support a compact standard-lens description without assigning a telephoto or retrofocus ratio classification. The surface-by-surface Petzval sum is 0.005648287 mm⁻¹ at the d line. That scalar does not establish tangential or sagittal field curvature, which also depends on the full ray geometry.

## Element-by-Element Analysis

The focal lengths below are independently calculated thick-element powers with the individual element surrounded by air. For cemented lenses these are comparison quantities, not their installed contribution to system power. The glass names identify catalog-coordinate equivalents; the patent does not name a supplier or melt.

### L1: Negative Meniscus

nd = 1.62588, νd = 35.74. Glass: E-F1 (HOYA equivalent). f = -32.844605 mm.

The first negative meniscus is convex toward the object and forms G1a. Its rear surface has the stronger curvature, giving the negative standalone power. The patent explicitly separates this front negative subgroup from the following positive subgroup when setting its power-ratio conditions. [1, ¶0081; conditions (4), (8)]

### L2: Biconvex Positive

nd = 1.88100, νd = 40.14. Glass: TAFD33 (HOYA equivalent). f = +23.196267 mm.

This biconvex lens forms G1b. Its very weak image-side curvature is finite in the numerical table and is retained as spherical rather than replaced by a plane. The high index and positive power distinguish it from the preceding negative lens. The patent constrains their focal-length ratio, but does not provide an isolated aberration budget for this element. [1, ¶0081; condition (8)]

### L3: Biconvex Positive (1x Asph)

nd = 1.80610, νd = 40.73. Glass: NBFD13 (HOYA equivalent). f = +25.958471 mm.

The front member of cemented pair D1 has the aspheric object-side face 5A. Its positive standalone power is paired with the negative next element across the shared spherical surface 6. The aspheric figure is a geometric sag correction, not a separate resin layer or an additional optical element. [1, ¶0081; Numerical Example 1]

### L4: Biconcave Negative

nd = 1.60342, νd = 38.01. Glass: E-F5 (HOYA equivalent). f = -20.197695 mm.

The biconcave rear member completes D1 at surface 7. Its standalone negative power is stronger in magnitude than the preceding positive member. The actual cemented G1c pair has a computed net focal length of -132.626317 mm, so its weak negative net behavior must be distinguished from either isolated element. [1, ¶0081]

### L5: Biconcave Negative

nd = 1.69895, νd = 30.05. Glass: E-FD15 (HOYA equivalent). f = -10.866943 mm.

This biconcave negative lens is the front member of cemented pair D2 and the first lens of moving group G2. Its object-side concavity faces the rear concavity of G1c across the stop-containing gap. The patent explicitly constrains this curvature pairing in condition (7). [1, ¶0082; claim 3]

### L6: Biconvex Positive

nd = 1.88100, νd = 40.14. Glass: TAFD33 (HOYA equivalent). f = +13.562980 mm.

The biconvex rear member of D2 shares surface 10 with L5. Its higher index and larger Abbe number differ from the negative partner. Both lenses translate rigidly with G2; the patent describes their combined exterior form as meniscus-shaped. A numerical aberration correction assigned to either member alone is not established by the prescription table. [1, ¶0082]

### L7: Biconvex Positive (2x Asph)

nd = 1.69350, νd = 53.20. Glass: M-LAC130 (HOYA equivalent). f = +23.141445 mm.

The final G2 lens is biconvex with both faces aspheric, 12A and 13A. The patent states that aspheres in G2 help correct aberrations, including spherical aberration, and control their variation during focusing. This is a group-level design statement; the sign of one polynomial coefficient alone is not a complete aberration attribution. [1, ¶¶0074-0075, 0082]

### L8: Negative Meniscus

nd = 1.74077, νd = 27.76. Glass: E-FD13 (HOYA equivalent). f = -39.036595 mm.

The object-convex negative meniscus forms G3a. It remains fixed while G2 moves toward the object. Its focal-length ratio to the complete lens appears directly in condition (5), placing a bound on rear negative power. [1, ¶0083; condition (5)]

### L9: Positive Meniscus

nd = 1.83481, νd = 42.72. Glass: TAFD5F (HOYA equivalent). f = +42.597165 mm.

The final positive meniscus forms G3b and remains fixed relative to the sensor. Its positive power partly offsets the preceding negative lens, leaving the complete G3 weakly negative. The patent places a plane-parallel filter after this group and discusses the desirability of controlling the angle of rays incident on the image sensor. No element-specific field-flattening or telecentricity performance is inferred here. [1, ¶¶0008-0010, 0083-0084]

## Glass Identification and Selection

The patent provides d-line refractive indices and Abbe numbers. Its d-line reference is 587.56 nm. A cross-catalog search finds exact displayed-coordinate HOYA representatives for the nine distinct lens/filter materials. These are useful spectral proxies, not supplier identifications. [1, ¶0117; 3-7]

| Lens / plate | Catalog-coordinate equivalent | nd | νd |
|---|---|---:|---:|
| L1 | E-F1 (HOYA equivalent) | 1.62588 | 35.74 |
| L2 | TAFD33 (HOYA equivalent) | 1.88100 | 40.14 |
| L3 | NBFD13 (HOYA equivalent) | 1.80610 | 40.73 |
| L4 | E-F5 (HOYA equivalent) | 1.60342 | 38.01 |
| L5 | E-FD15 (HOYA equivalent) | 1.69895 | 30.05 |
| L6 | TAFD33 (HOYA equivalent) | 1.88100 | 40.14 |
| L7 | M-LAC130 (HOYA equivalent) | 1.69350 | 53.20 |
| L8 | E-FD13 (HOYA equivalent) | 1.74077 | 27.76 |
| L9 | TAFD5F (HOYA equivalent) | 1.83481 | 42.72 |
| Rear filter F | BSC7 (HOYA equivalent) | 1.51680 | 64.20 |

The element records carry only the patent's nd and νd. Color tracing uses the dispersion curves of the named HOYA catalog rows, each of which reproduces its patent coordinate pair; no catalog line index is stored as though it were patent data.

Cross-vendor candidates include OHARA S- and L-family glasses, HIKARI alternatives, SCHOTT and Sumita coordinates. These families are not interchangeable identities. In particular, low-softening-temperature L-LAL13 is not the same designation as S-LAL13. The M-LAC130 coordinate also has a SCHOTT P-LAK35 equivalent at the displayed precision. TAFD5F and TAFD5G share the chosen nd/νd pair and visible line indices at the retained precision; the model's TAFD5F label represents that equivalence class. [3-6]

The palette combines moderately dispersive negative glasses with higher-index positive glasses, but the source supplies no melt-resolved chromatic allocation. The analysis therefore makes no apochromatic or anomalous-partial-dispersion performance claim. Catalog compatibility and calculated color behavior do not establish a manufactured-lens glass formulation.

## Focus Mechanism

The focus disposition is PUBLISHED. G2, consisting of L5-L7 and surfaces 9-13, moves 2.9383 mm toward the object between the source's infinity and 250 mm shooting-distance states. G1, the stop, G3 and the image plane remain fixed. The rear filter stays at the source location. [1, ¶0080; Numerical Example 1]

| Physical spacing | Infinity | Near state |
|---|---:|---:|
| d8: stop to G2 | 8.0395 mm | 5.1012 mm |
| d13: G2 to G3 | 1.6000 mm | 4.5383 mm |
| Filter rear to image | 1.0000 mm | 1.0000 mm |

The two variable gaps sum to 9.6395 mm at both endpoints, confirming rigid translation between fixed surrounding groups. The model interpolates those published gap endpoints linearly. It does not supply additional source keyframes or a reconstructed motor-position versus object-distance law.

The final near prescription gives an EFL of 23.578516 mm and lateral magnification -0.124126. Its paraxial object-to-first-vertex distance is 189.266845 mm, or 250.016745 mm to the image plane. The image-plane interpretation agrees with the source's stated 250 mm shooting distance within the printed prescription precision. The source does not expressly define that reference plane; the first-vertex interpretation does not agree. The exact on-axis image-space value 1/(2NA) is 1.868946, agreeing with Fig. 3's near-state Fno = 1.87. This finite-conjugate quantity differs from the nominal infinity calibration. The production lens's 0.12× maximum magnification and MSC mechanism are separate manufacturer specifications. [2]

## Aspherical Surfaces

The patent writes the conventional conic base with denominator 1 + √(1 − (1 + K)(h/R)²), followed by even radial powers. All three tabulated conic constants are K = 0. No conic conversion or geometric scaling is applied. The coefficient units are mm^(1−p) for Aₚ when radial height h is in millimetres. [1, ¶0076; Numerical Example 1]

There is a source inconsistency: the printed general equation and accompanying prose stop at A10, but the selected numerical table explicitly includes nonzero A12 coefficients. The model retains all of those values and extends the same convention with A12 h¹². This is a disclosed equation/table interpretation, not a fitted substitute surface.

| Coefficient | 5A on L3 | 12A on L7 | 13A on L7 |
|---|---:|---:|---:|
| K | 0.00000E+00 | 0.00000E+00 | 0.00000E+00 |
| A4 | -7.37304E-06 | -9.75750E-06 | 2.85098E-05 |
| A6 | 2.98804E-08 | 4.13773E-08 | 2.22304E-08 |
| A8 | -9.79820E-10 | 9.86608E-10 | 1.48907E-09 |
| A10 | 1.28606E-11 | -5.04731E-11 | -3.83056E-11 |
| A12 | -5.25852E-14 | 2.93810E-13 | 1.38708E-13 |

Relative to each spherical base, the total polynomial departure at the model's chosen rim is negative on 5A and 12A and positive on 13A. This describes the local geometric displacement, not the sign of an isolated wavefront aberration. The higher-order terms must be evaluated together; their alternating signs make a leading-A4-only description incomplete.

| Surface | Modeled semi-diameter | Polynomial departure from base sphere |
|---|---:|---:|
| 5A | 11.00 mm | -0.096510887 mm |
| 12A | 9.75 mm | -0.147066231 mm |
| 13A | 9.75 mm | +0.203330768 mm |

These are modeled apertures, not patent-published clear apertures. The source does not identify the asphere manufacturing process. Catalog availability of moldable equivalents is insufficient to establish that the commercial lens uses that process.

## Conditional Expressions

The source's eight conditions are evaluated at infinity. G1a is L1, G1b is L2, G3a is L8; fsa and fsb are the systems before and after the stop, and f23 is the combined G2/G3 system. DG2 is the stop-to-G2 gap. R1c and R2 are the opposing concave radii at source surfaces 7 and 9. [1, claims 1-4; ¶0130]

| Condition | Required range | Computed value | Printed value |
|---|---|---:|---:|
| (1) Φexp/f | 1.00 < value < 10.00 | 1.319126 | 1.32 |
| (2) DG2/f | 0.20 < value < 0.60 | 0.327740 | 0.33 |
| (3) fsa/fsb | 1.60 < value < 11.00 | 3.628854 | 3.63 |
| (4) abs(f1a/f) | 0.80 < value < 8.00 | 1.338951 | 1.34 |
| (5) abs(f3a/f) | 0.55 < value < 3.90 | 1.591375 | 1.59 |
| (6) f2/f23 | 0.40 < value < 1.50 | 0.949874 | 0.95 |
| (7) abs(R1c R2/f²) | 0.10 < value < 1.30 | 0.290895 | 0.29 |
| (8) abs(f1b/f1a) | 0.10 < value < 1.65 | 0.706243 | 0.71 |

All eight computed values fall inside the specified ranges. Φexp/f uses the final modeled physical stop, whose radius is calibrated by an exact axial marginal ray to the rounded source f/1.82. A purely paraxial stop calibration gives 1.314326 for condition (1), slightly below the printed 1.32 rounding interval; that raw comparison remains documented. The physical stop is not independently published, so these alternatives describe calibration conventions rather than a recovered diaphragm measurement.

The rounded G1/fsa prescription gives +88.665551 mm rather than the table's +88.66 mm, narrowly outside its strict 0.01 mm rounding interval; independent half-last-digit input perturbations reach that interval. The rounded G3 prescription gives −444.634711 mm rather than the table's −444.61 mm. This weak net power is sensitive to the printed radii, thicknesses and indices: half-last-digit corner perturbations include the printed result. The source values have not been adjusted to force agreement.

## Model Boundaries

The source's 4.0000 mm rear filter is explicitly traced, with its original physical gaps and dispersion proxy. It is camera-side optics and is separate from the nine-lens construction count. No air-equivalent substitution or arbitrary axial rescaling is used.

The stop axial location is published. Its radius, 6.041072948 mm, and all lens semi-diameters are model inferences. The rear cap of surface 7 and front cap of surface 9 use modeled semi-diameters of 7.80 and 6.30 mm, distinguished from their larger flanges in Fig. 1. The rear cap of surface 2 follows the same reading at 12.0 mm, the drawn curve end. These three caps are kept below the element's outer rim because a full-height concave face would wrap toward the next lens or the stop; the diagram therefore shows L1, L4 and L5 with a bevelled edge where Fig. 1 draws a flat land. L8 and L9 are instead modeled as squared blocks at their drawn outer rims, 10.0 mm on surfaces 14 and 15 and 10.5 mm on surfaces 16 and 17 (drawn 9.98 and 10.66 mm); the flat lands Fig. 1 draws on their rear faces, starting near 8.9 and 9.6 mm, are not modeled. Surface 7 remains clear of the published stop plane. The second cemented junction remains 8.75 mm. The selected apertures pass the sampled core-ray and geometric checks, including current production render diagnostics without hidden material trimming. A dense skew-pupil test retains exterior off-axis aperture losses while passing cemented-interface containment. It samples nine focus positions, eleven fields through the published 24.05° half-field, four apertures and 289 pupil points per bundle. Finite sampling is not a continuum guarantee. The model therefore does not establish unvignetted full-field pupil transmission, production barrel dimensions or measured peripheral illumination.

The two published focus states are preserved exactly; intermediate optical distances are interpolated. The remaining limitations are the unconfirmed product attribution, inferred clear apertures, A12 equation extension and catalog-proxy spectral properties. None of these should be read as direct measurements of a retail Olympus lens.

## Sources

1. JP 2015-075501 A, *Imaging Optical System*, Sigma Corporation, Yukihiro Yamamoto, published 20 April 2015. Original supplied PDF: English PAJ cover; printed Japanese pp. 11, 14-16, 22-23 (PDF pp. 12, 15-17, 23-24); ¶¶0076, 0080-0084, 0115-0124, 0130. Original unmodified file included in the dossier: JP2015075501A.pdf.
2. Olympus, [M.ZUIKO DIGITAL 25mm F1.8 launch announcement](https://www.olympus.co.jp/jp/news/2014a/nr140129zuikoj.html), 29 January 2014. Construction, specifications, announcement/release timing and MSC internal focusing; retrieved 5 October 2026.
3. HOYA, [Optical Glass Data Download](https://www.hoya-opticalworld.com/english/datadownload/index.html), June 2026 Excel catalog and July 2026 obsolete-inclusive OpticStudio catalog; relevant exact-coordinate rows and C/F/g indices, retrieved 5 October 2026. [Cross-vendor index](https://www.hoya-opticalworld.com/english/products/crossreference.html).
4. OHARA, [Comparative Table of Recommended Glasses](https://www.ohara-inc.co.jp/en/product/01002/) and official OHARA_260701 catalog; polished/molding families kept distinct.
5. HIKARI, [Optical Glass Catalog Downloads](https://www.hikari-g.co.jp/optical_glass/catalog/), All Catalog Data sheet, accessed 5 October 2026.
6. SCHOTT, [Optical Glass](https://www.schott.com/en-us/products/optical-glass), official June 2025 AGF; and *Optical Materials for Precision Molding*, January 2014, P-LAK35 coordinate table. Sumita, [Optical Glass Downloads](https://www.sumita-opt.co.jp/en/download/), August 2026 AGF. Coordinate compatibility does not identify composition or supplier.
7. CDGM, official June 2022 *Optical Glass Data Sheet*, H-K9L row; limited numeric comparison of the rear-filter coordinate. [Manufacturer catalog PDF](https://www.cdgmgd.com/accessory/2022-06-28/client/www.cdgmgd.com/9b32dd2c-55f4-4d4c-b2d2-48f52c9d5f07.pdf).
