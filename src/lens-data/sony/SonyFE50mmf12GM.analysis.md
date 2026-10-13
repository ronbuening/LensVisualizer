# SONY FE 50mm f/1.2 GM — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** JP 2022-140076 A\
**Application Number:** JP2021-40723\
**Filed:** 2021-03-12\
**Published:** 2022-09-26\
**Inventors:** Yosuke Utagawa; Masaki Maruyama\
**Applicant:** Sony Group Corporation\
**Title:** 撮像レンズおよび撮像装置\
**Embodiment analyzed:** Example 1 / 実施例1

The prescription implemented here is Example 1 of JP 2022-140076 A. The patent gives a 53.90 mm design focal length, Fno 1.21, 21.76° half field, 21.63 mm image height, 14 powered elements, and a two-group floating-focus mechanism. The LensVisualizer model retains that native design scale rather than scaling the prescription to the marketed 50 mm nominal focal length. [JP 2022-140076 A, pp. 12–15, Tables 1–5, ¶¶0064–0072]

The association with the production Sony FE 50mm F1.2 GM (SEL50F12GM) is a strong convergent inference, not a manufacturer-confirmed patent-to-product identification. The following points converge:

1. Example 1 contains 14 elements in 10 air-separated physical groups, matching Sony's published 14-element/10-group construction.
2. The patent has exactly three aspheric elements—G4, G11, and G14—each with two aspheric surfaces. Sony describes the production lens as using three XA elements. The patent itself does not use the XA manufacturing designation, so the equivalence is structural rather than terminological.
3. Patent groups GR2 and GR4 are independently moving focus groups with fixed GR3 between them. Sony's developer material describes two independently driven floating focus groups with a fixed optical group between them.
4. The patent design values f = 53.90 mm and Fno = 1.21 are consistent with a marketed 50 mm f/1.2 lens without requiring scale conversion.
5. The patent near endpoint is d0 = 280 mm from the first lens surface. Adding the patent physical lens-to-image distance L = 130 mm places the object about 0.410 m from the image plane, compatible with Sony's marketed 0.4 m minimum focus distance after reference-plane normalization.
6. The patent was filed on 2021-03-12, five days before Sony announced the FE 50mm F1.2 GM on 2021-03-17. [Sony product specifications; Sony Japan launch release, 2021-03-17; Sony α Universe developer interview, 2021-03-17]

No Sony primary source identified in the dossier states that JP 2022-140076 A Example 1 is the production prescription. That limit is retained throughout this analysis.

## Optical Architecture

Example 1 is best described directly from the patent as a five-functional-group large-aperture normal prime rather than assigning it to a classical named family that the patent does not use. The functional power sequence is positive GR1, negative GR2, positive GR3, positive GR4, and negative GR5. Independent recomputation from the implemented prescription gives group focal lengths of approximately +58.849 mm, -85.223 mm, +232.234 mm, +51.542 mm, and -70.886 mm respectively, reproducing Table 5 within the source precision. [JP 2022-140076 A, p. 15, Table 5]

The physical construction contains 14 elements and four cemented pairs, yielding 10 air-separated physical groups. The aperture stop lies between GR2 and GR3. GR1, GR3, and GR5 are fixed in the two published focus states; GR2 moves toward the image and GR4 moves toward the object as focus changes from infinity to the published near state. [JP 2022-140076 A, ¶¶0065–0072; Tables 1 and 3]

The patent attributes several system-level correction goals to this architecture. Moving two or more groups during focusing is described as facilitating control of field curvature, distortion, and lateral chromatic variation over focus. The positive and negative elements within GR2 are described as assisting axial chromatic correction. A positive and a negative element in GR3 are likewise described as useful for axial chromatic correction and Petzval control. These are patent-level statements about the group architecture; they should not be read as a surface-by-surface aberration decomposition. [JP 2022-140076 A, ¶¶0025, 0028]

The implemented infinity-state effective focal length is 53.899471893 mm from both sequential height/reduced-angle tracing and an independent ABCD calculation. The physical track from surface 1 to the image plane is 130.0002 mm, matching the patent's L = 130.00 mm, because the sensor-side plane-parallel optical member FL is modeled in `rearPlates` rather than folded into an air-equivalent back focus. [JP 2022-140076 A, p. 14, Tables 1–2; p. 32, Table 31]

## Element-by-Element Analysis

### G1 — Biconcave Negative

**nd = 1.77047, νd = 29.7. Glass: 770297 class (supplier unresolved). f = -51.371945 mm.**

G1 is the front element of GR1 and the first negative element encountered by the object-side beam. Its two radii are both concave in the patent sign convention, making it a true biconcave negative element. [JP 2022-140076 A, ¶0066; p. 14, Table 1]

The patent's condition (1) is tied specifically to the shape factor of this front negative lens. For Example 1 the verified value is S = -0.0832229, well inside both the general |S| < 1 and preferred |S| < 0.4 ranges. The patent states that this shape constraint is intended to aid distortion correction; the analysis therefore attributes that rationale to the condition rather than to an independent ray-aberration decomposition. [JP 2022-140076 A, ¶¶0026–0027; p. 32, Table 31]

### G2 + G3 — Cemented Positive/Negative Pair in GR1

**G2: nd = 1.91082, νd = 35.2. Glass: 911353 class (supplier unresolved). f = +54.406720 mm.**\
**G3: nd = 1.73037, νd = 32.2. Glass: 730322 class (supplier unresolved). f = -162.417728 mm.**

G2 is biconvex and G3 is a negative meniscus convex toward the image; they share the cemented interface at source surface 4. The final data follows the LensVisualizer cemented-interface rule by assigning that interface to the downstream G3 medium rather than inserting a synthetic cement layer. [JP 2022-140076 A, ¶0066; p. 14, Table 1]

The pair lies inside fixed GR1 between front negative G1 and the two-sided aspheric G4. The standalone focal lengths above are calculated for each physical element in air. They are not the in-situ contribution of the cemented pair or of GR1 as a whole.

### G4 — Biconvex Positive, Two-Sided Asphere

**nd = 1.95150, νd = 29.8. Glass: M-TAFD405 — coordinate-compatible spectral proxy (supplier unresolved). f = +52.019120 mm.**

G4 completes GR1 and carries the first two aspheric surfaces of the design, source surfaces 6 and 7, implemented as 6A and 7A. [JP 2022-140076 A, ¶0066; Tables 1 and 4]

Sony's production literature describes three XA elements, while the patent shows three two-sided aspheric physical elements. G4 is one member of that three-element structural correspondence, but the patent does not identify its manufacturing process as XA and the data file does not encode that label as a glass or surface property.

### G5 — Positive Meniscus in Moving GR2

**nd = 1.98613, νd = 16.5. Glass: 986165 class (supplier unresolved). f = +202.985178 mm.**

G5 is the positive element of the negative-power GR2 focus group. It is a positive meniscus convex toward the image. [JP 2022-140076 A, ¶0067; p. 14, Table 1]

Its νd = 16.5 is the value entering patent condition (3). The patent specifies 10 < νd(2G) < 21, with the preferred range 15 < νd(2G) < 20, and states that this dispersion range is intended to help control axial chromatic aberration and its change during focusing. [JP 2022-140076 A, ¶¶0033–0035; p. 32, Table 31]

### G6 — Biconcave Negative in Moving GR2

**nd = 1.59270, νd = 35.4. Glass: 593354 class (supplier unresolved). f = -59.864551 mm.**

G6 is the negative member of GR2. Together with G5 it forms the patent's required positive-plus-negative composition inside the negative-power moving group. [JP 2022-140076 A, ¶0067]

The patent discusses GR2 as a group rather than assigning a unique named aberration function to G6. The model therefore records its sign, shape, material coordinates, and focus-group membership without attributing an unsupported isolated correction role.

### G7 + G8 — Cemented Negative/Positive Pair in Fixed GR3

**G7: nd = 1.85451, νd = 25.2. Glass: 855252 class (supplier unresolved). f = -39.852092 mm.**\
**G8: nd = 1.71700, νd = 48.0. Glass: 717480 class (supplier unresolved). f = +35.707489 mm.**

G7 is a negative meniscus convex toward the object and G8 is biconvex positive. The pair is cemented at source surface 14 and constitutes the complete physical content of fixed GR3. [JP 2022-140076 A, ¶0068; p. 14, Table 1]

GR3 has a verified isolated functional-group focal length of +232.233919 mm, so the group is weakly positive compared with either standalone element. This is a useful illustration of why standalone element powers should not be substituted for cemented-net or functional-group power. The patent states that positive and negative lenses in GR3 facilitate axial chromatic and Petzval correction, but it does not assign those functions separately to G7 or G8. [JP 2022-140076 A, ¶0028]

G8 supplies n(3G) = 1.717 for condition (6), which falls within both the general 1.65–2.00 and preferred 1.70–1.90 ranges. [JP 2022-140076 A, ¶¶0042–0044; p. 32, Table 31]

### G9 + G10 — Cemented Negative/Positive Pair in Moving GR4

**G9: nd = 1.85451, νd = 25.2. Glass: 855252 class (supplier unresolved). f = -45.295222 mm.**\
**G10: nd = 1.69680, νd = 55.5. Glass: 697555 class (supplier unresolved). f = +46.798535 mm.**

G9 is biconcave negative and G10 is biconvex positive, cemented at source surface 17. They form the front cemented section of positive-power moving group GR4. [JP 2022-140076 A, ¶0069; p. 14, Table 1]

Their standalone powers are close in magnitude and opposite in sign, but the complete GR4 also contains G11. The verified isolated functional-group focal length of complete GR4 is +51.542439 mm. Patent condition (2) uses the ratio of GR2 and GR4 focal lengths rather than the isolated powers of these physical elements. [JP 2022-140076 A, ¶¶0030–0032; Table 5]

### G11 — Biconvex Positive, Two-Sided Asphere in Moving GR4

**nd = 1.59208, νd = 61.0. Glass: 592610 class (supplier unresolved). f = +55.437746 mm.**

G11 is the rear element of GR4 and carries aspheric surfaces 19A and 20A. It moves with G9 and G10 during focusing. [JP 2022-140076 A, ¶0069; Tables 1 and 4]

The patent does not publish a separate aberration budget for G11. The model therefore treats the element's two-sided aspheric geometry as source fact and confines quantitative interpretation to the verified sag departures at the modeled apertures given below.

### G12 + G13 — Cemented Positive/Negative Pair in Fixed GR5

**G12: nd = 1.94595, νd = 18.0. Glass: 946180 class (supplier unresolved). f = +48.816076 mm.**\
**G13: nd = 1.59270, νd = 35.4. Glass: 593354 class (supplier unresolved). f = -33.896282 mm.**

G12 is biconvex positive and G13 is biconcave negative. They are cemented at source surface 22 and form the front part of fixed rear group GR5. [JP 2022-140076 A, ¶0070; p. 14, Table 1]

G12 supplies νd(5G) = 18.0 for patent condition (7). The patent states that keeping this positive lens within 10 < νd(5G) < 21, preferably 15 < νd(5G) < 20, aids lateral chromatic correction. This is the patent's stated system rationale; it is not an independent per-element chromatic decomposition. [JP 2022-140076 A, ¶¶0045–0047; p. 32, Table 31]

### G14 — Rear Negative Meniscus, Two-Sided Asphere

**nd = 1.85135, νd = 40.1. Glass: 851401 class (supplier unresolved). f = -141.139750 mm.**

G14 is a negative meniscus convex toward the image and terminates the powered prescription. Both of its surfaces, 24A and 25A, are aspheric. [JP 2022-140076 A, ¶0070; Tables 1 and 4]

The modeled active prescription ends after 25A. Patent surfaces 26–27 form the optional plane-parallel optical member FL between the lens and image plane. The data file models that plate in `rearPlates` (2.50 mm, nd 1.51680, νd 64.2, N-BK7 class, then 1.00 mm of air to the image): every analysis traces it, but it is not drawn. Surface 25A keeps the patent's physical 13.16 mm gap to FL. The paraxial air-equivalent rear spacing is 15.8082 mm, against the Table 31 Bf = 15.80982 mm. [JP 2022-140076 A, ¶0017; Tables 1 and 31]

## Glass Identification and Selection

G4 uses the published HOYA M-TAFD405 dispersion polynomial as a compatible spectral proxy (1.95150 / 29.83 versus patent 1.95150 / 29.8). All fourteen elements now resolve to catalog curves; G11 uses the manufacturer-published OHARA L-BAL35P Sellmeier curve (1.59208 / 61.00). This does not establish Sony's supplier.

The patent publishes d-line refractive index and Abbe number but does not name glass manufacturers or melts. The data file therefore uses six-digit optical-coordinate classes and qualified spectral proxies without asserting a specific supplier. Authoritative HOYA, OHARA, SCHOTT, HIKARI, CDGM, and SUMITA catalog families were checked during the source audit; several coordinates admit cross-vendor equivalents, so coordinate agreement alone does not resolve supplier identity.

| Data glass class | nd | νd | Elements | Status |
|---|---:|---:|---|---|
| 770297 class | 1.77047 | 29.7 | G1 | Supplier unresolved |
| 911353 class | 1.91082 | 35.2 | G2 | Supplier unresolved |
| 730322 class | 1.73037 | 32.2 | G3 | Supplier unresolved |
| M-TAFD405 spectral proxy | 1.95150 | 29.8 | G4 | Supplier unresolved |
| 986165 class | 1.98613 | 16.5 | G5 | Supplier unresolved |
| 593354 class | 1.59270 | 35.4 | G6, G13 | Supplier unresolved |
| 855252 class | 1.85451 | 25.2 | G7, G9 | Supplier unresolved |
| 717480 class | 1.71700 | 48.0 | G8 | Supplier unresolved |
| 697555 class | 1.69680 | 55.5 | G10 | Supplier unresolved |
| L-BAL35P proxy | 1.59208 | 61.0 | G11 | Supplier unresolved |
| 946180 class | 1.94595 | 18.0 | G12 | Supplier unresolved |
| 851401 class | 1.85135 | 40.1 | G14 | Supplier unresolved |

No nC, nF, ng, or dPgF fields are authored. The patent does not publish those per-element spectral quantities, and catalog line indices from one candidate glass cannot be transferred to the model while supplier/melt identity remains unresolved. Consequently, this analysis makes no APO or anomalous-partial-dispersion performance claim.

The patent does provide system-level glass constraints. In Example 1 the verified average index of the positive elements in GR1 is n(ave) = 1.93116; the positive GR3 element uses n(3G) = 1.717; and the low-Abbe positive elements in GR2 and GR5 use νd = 16.5 and 18.0 respectively. Their role is discussed in the patent's conditional expressions rather than inferred here from generic glass-family labels. [JP 2022-140076 A, ¶¶0033–0047; p. 32, Table 31]

## Focus Mechanism

Example 1 uses a published double-floating focus arrangement. GR2 moves toward the image while GR4 moves toward the object as focus changes from infinity to the patent's near endpoint. GR1, the aperture stop, GR3, and GR5 remain fixed in the published endpoint geometry. [JP 2022-140076 A, ¶¶0020, 0071–0072; Table 3]

| Variable spacing | Infinity | Published near | Change |
|---|---:|---:|---:|
| d7, after 7A | 2.7386 mm | 8.8679 mm | +6.1293 mm |
| d11, after G6 | 17.1293 mm | 11.0000 mm | -6.1293 mm |
| d15, after G8 | 9.9306 mm | 5.2530 mm | -4.6776 mm |
| d20, after 20A | 3.0000 mm | 7.6776 mm | +4.6776 mm |

These paired changes conserve the adjacent gap sums and keep the fixed stop/GR3/GR5 stations unchanged. From the implemented endpoints, GR2's front surface moves +6.1293 mm toward the image and GR4's front surface moves 4.6776 mm toward the object.

The patent gives only two focus states for Example 1: infinity and a near state with d0 = 280.0000 mm from the object plane to the first lens surface. No nonlinear intermediate group-motion law is published. LensVisualizer therefore stores the published endpoints and interpolates intermediate slider positions only for visualization; those interpolated positions are not presented as source-published mechanical states.

The product metadata uses Sony's marketed 0.4 m minimum focus distance. The patent's near reference plane differs: d0 is measured to the first lens surface, and adding the source physical L = 130 mm gives approximately 0.410 m from object plane to image plane. The two numbers are therefore compatible only after reference-plane normalization, not by treating 280 mm as the camera's quoted MFD.

Sony's developer interview describes the production lens as using two independently driven floating focus groups, with two XD linear motors per moving group and a fixed optical group between them. That mechanical description closely parallels the patent kinematics, but it is product-correlation evidence rather than proof that the manufactured spacings equal Example 1 exactly.

## Aspherical Surfaces

Example 1 has six aspherical surfaces on three physical elements: 6A and 7A on G4, 19A and 20A on G11, and 24A and 25A on G14. The patent defines the standard rotationally symmetric conic form

$Z(h) = \frac{c h^2}{1 + \sqrt{1 - (1+K)c^2 h^2}} + A_4h^4 + A_6h^6 + A_8h^8 + A_{10}h^{10} + A_{12}h^{12} + A_{14}h^{14} + A_{16}h^{16}$.

The patent's `k` maps directly to LensVisualizer `K`; no conic offset conversion is required. All six Example 1 surfaces use K = 0. No uniform scaling is applied, so the published coefficients are retained directly in millimeter units. [JP 2022-140076 A, ¶¶0062–0063; p. 15, Table 4]

| Surface | K | A4 | A6 | A8 | A10 | A12 | A14 | A16 |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| 6A | 0 | -5.976020e-7 | -2.335360e-10 | +1.541120e-13 | -1.396530e-16 | 0 | 0 | 0 |
| 7A | 0 | +6.845000e-7 | -1.509490e-10 | +1.722880e-13 | -1.121910e-16 | 0 | 0 | 0 |
| 19A | 0 | -1.541850e-6 | -1.015820e-9 | +3.580780e-13 | -3.243740e-16 | 0 | 0 | 0 |
| 20A | 0 | -1.087690e-6 | -1.311960e-9 | +1.789610e-12 | -1.308740e-15 | 0 | 0 | 0 |
| 24A | 0 | -3.062910e-6 | -4.896450e-8 | +1.648620e-10 | -1.899140e-13 | 0 | 0 | 0 |
| 25A | 0 | +3.172860e-6 | -4.122420e-8 | +1.526870e-10 | -1.313110e-13 | 0 | 0 | 0 |

Because the patent does not publish clear apertures, asphere departures are only quoted at the model's verified semi-diameters, not as patent dimensions. The calculated polynomial departures from the conic base are approximately -0.4690 mm at 6A (sd 28.08 mm), +0.3627 mm at 7A (27.66 mm), -0.4663 mm at 19A (22.01 mm), -0.3335 mm at 20A (21.90 mm), -0.5379 mm at 24A (16.11 mm), and +0.0576 mm at 25A (16.76 mm).

Those values describe geometric departure of the modeled surfaces. They do not, by themselves, establish how much spherical aberration, coma, or another individual aberration each surface corrects. The patent does not provide a per-surface aberration decomposition, so no such assignment is made here.

## Conditional Expressions

The patent defines seven principal conditions and, for each, a preferred tighter range. The implemented Example 1 values below were recomputed from the final prescription; all fall inside the preferred ranges. [JP 2022-140076 A, ¶¶0026–0047; p. 32, Table 31]

| Condition | Patent range | Preferred range | Implemented Example 1 |
|---|---|---|---:|
| (1) shape factor `|S|` of front negative lens | < 1.00 | < 0.40 | `S = -0.0832229` |
| (2) `f2/f4` | -4.5 to -1.0 | -4.2 to -1.5 | -1.6534486 |
| (3) `νd(2G)` | 10.0 to 21.0 | 15.0 to 20.0 | 16.5 |
| (4) `Bf/f` | 0.20 to 1.00 | 0.23 to 0.70 | 0.2933176 |
| (5) `n(ave)` in GR1 positive lenses | 1.75 to 2.00 | 1.80 to 1.95 | 1.93116 |
| (6) `n(3G)` | 1.65 to 2.00 | 1.70 to 1.90 | 1.717 |
| (7) `νd(5G)` | 10.0 to 21.0 | 15.0 to 20.0 | 18.0 |

The patent links condition (1) to distortion control, condition (2) to balancing focus-group powers and focus travel, conditions (3) and (7) to chromatic-correction behavior, condition (4) to back-focus balance, condition (5) to keeping GR1 compact without excessive dispersion, and condition (6) to Petzval/field-curvature balance without excessively dispersive high-index glass. These are patent-stated rationales rather than independently isolated aberration sensitivities.

For Bf, the source deserves a specific qualification. Table 31 publishes Bf = 15.80982 mm as an air-equivalent distance from the last powered surface to the image plane. Recomputing the plate-equivalent distance from the rounded Table 1 rows gives 15.8082068 mm, a -0.0016132 mm difference. The model now uses the Table 1 rows directly (13.16 mm air, the 2.50 mm FL plate in `rearPlates`, 1.00 mm air), so its paraxial image plane sits 0.0016 mm nearer than the Table 31 Bf would place it; no patent row is altered.

## Verification Summary

The prescription is retained at native scale. The computed infinity EFL is 53.899471893 mm, compared with the patent's printed 53.90 mm. Sequential height/reduced-angle tracing and an independently coded ABCD implementation agree to numerical precision in the portable verifier.

The aperture-stop axial location is source-published, but its physical diameter is not. The modeled stop semi-diameter is 20.22509 mm, calibrated so that the parsed infinity prescription produces f/1.209999745 against the patent's Fno = 1.21. This agreement is therefore a calibration result, not independent evidence of the production diaphragm diameter.

Likewise, all surface semi-diameters are modeled rather than patent-published. They were constructed from exact meridional ray envelopes at the two published focus endpoints and then checked against edge thickness, actual rim slope, conic domain, and shared-band gap intrusion. The narrowest verified edge thickness is approximately 0.68243 mm at G11; the largest modeled rim angle is approximately 41.00° at surface 14; and the smallest shared-band cross-gap margin is approximately 0.03029 mm at the 23→24A gap. These are model-geometry results, not dimensions extracted from the patent.

The final model's surface-by-surface Petzval sum, computed as Σφ/(n·n′), is 0.001699067335 mm⁻¹. This value is a paraxial design diagnostic from the implemented prescription; it is not a manufacturer specification.

No patent radius, spacing, refractive index, Abbe value, focus endpoint, or asphere coefficient was corrected. The sensor-side FL plate is modeled in `rearPlates` with its Table 1 spacings rather than folded into the last gap. The resulting first-surface-to-image track is 130.0002 mm, matching the source physical L = 130.00 mm.

## Sources and References

1. Japan Patent Office. **JP 2022-140076 A**, *撮像レンズおよび撮像装置*, published 2022-09-26. Example 1: ¶¶0064–0080; Tables 1–5; conditions summarized in Table 31. The prescription, focus states, asphere equation, coefficients, and patent rationale in this analysis come from this publication.
2. Sony USA. **SEL50F12GM Specifications**. https://www.sony.com/electronics/support/lenses-e-mount-lenses/sel50f12gm/specifications — production element/group count, mount/format, nominal focal length/aperture, minimum focus distance, maximum magnification, aperture-blade count, dimensions, and weight.
3. Sony Japan. **FE 50mm F1.2 GM launch release**, 2021-03-17. https://www.sony.jp/CorporateCruise/Press/202103/21-0317/ — announcement timing and three-XA-element product description.
4. Sony α Universe. **FE 50mm F1.2 GM developer interview**, 2021-03-17. https://www.sony.jp/ichigan/a-universe/news/547/ — independently driven dual floating-focus groups, fixed optical group between them, XD linear-motor arrangement, and focus-position sensing.
5. Authoritative optical-glass catalog families checked for coordinate compatibility: HOYA Optical World (https://www.hoya-opticalworld.com/), OHARA (https://oharacorp.com/), SCHOTT optical glass (https://www.schott.com/en-gb/products/optical-glass-p1000267), HIKARI (https://www.hikari-g.co.jp/optical_glass/catalog/), CDGM (https://www.cdgmgd.com/), and SUMITA (https://www.sumita-opt.co.jp/en/download/). These checks support coordinate-class review only; they do not establish Sony's glass supplier or melt identity.

The close-focus label uses the patent endpoint 0.410 m from the image plane (280 mm object distance plus 130 mm lens-to-image track), separately from Sony’s rounded marketed 0.4 m. The live diagram preserves GR2’s 6.1293 mm imageward travel and GR4’s 4.6776 mm objectward travel. Figure 1’s nearly common G2/G3 optical rim is represented by 27 mm semi-diameters at surfaces 3–5; the flat FL plate is traced through `rearPlates` but not drawn.
