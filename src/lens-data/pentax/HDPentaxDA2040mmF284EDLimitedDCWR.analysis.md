## Patent Reference and Design Identification

**Patent:** JP 2015-11156 A\
**Application Number:** 特願2013-136070 (P2013-136070)\
**Filed:** 2013-06-28\
**Published:** 2015-01-19\
**Inventor:** Takahiko Oishi\
**Applicant:** Ricoh Imaging Company, Ltd.\
**Title:** ズームレンズ系 ("Zoom lens system")\
**Embodiment analyzed:** Numerical Example 1

The data file identifies the modeled production lens as **HD PENTAX-DA 20–40mm f/2.8–4 ED Limited DC WR** and transcribes Numerical Example 1 of JP 2015-11156 A. The patent itself does not name that production lens. The production correlation is therefore an author/modeling inference fixed for this dataset rather than a manufacturer-confirmed patent identification.

Several independent characteristics support that correlation:

1. Numerical Example 1 is a 9-element, 8-group design, matching the production lens specification.
2. The patent publishes focal-length states of 20.60, 30.00, and 39.00 mm, closely corresponding to the marketed 20–40 mm range without applying a scale factor.
3. The modeled maximum f-numbers are 2.9, 2.9, and 4.0; the production designation is f/2.8–4. The analysis keeps those design and marketing values separate.
4. The patent image height is 14.24 mm, or a 28.48 mm image-circle diameter, consistent with the APS-C format assigned in the final data file.
5. The patent full fields derived from its half-field entries are 71.4°, 51.4°, and 40.4°, providing an internally consistent APS-C field progression across the three design states.
6. The patent was filed on 2013-06-28, and Ricoh Imaging announced the production lens on 2013-11-07.
7. The patent states that the first lens group moves objectward for close focusing. The production lens provides 0.28 m minimum focus and 0.20× maximum reproduction; these are used only as external constraints for the disclosed close-focus reconstruction, not as patent-published spacings.

The rendered patent front page gives application number P2013-136070 and filing date 2013-06-28. Machine text extraction can misread the application year as 2012; the analysis follows the rendered source rather than that extraction artifact.

No uniform scaling is applied. The final prescription retains the patent dimensions directly, and the aspheric coefficients therefore require no scale transformation.

## Optical Architecture

Numerical Example 1 is a two-group negative-positive zoom. The negative first group G1 contains three air-spaced elements, L11, L12, and L13. The positive second group G2 is divided by the aperture stop into a positive front subgroup G2A and a positive rear subgroup G2B. G2A contains L21 followed by the cemented L22+L23 pair; G2B contains L25, L26, and L27. This gives nine glass elements in eight air-spaced groups, as recorded in the final data file and described in patent ¶¶0017–0021 and ¶¶0036–0038.

Independent paraxial calculation from the final prescription gives G1 a focal length of −31.120460 mm and G2 a focal length of +34.123684 mm, reproducing the patent Table 4 values of −31.12 and +34.12 mm within the source precision. The stop divides G2 into G2A at +50.312085 mm and G2B at +67.138668 mm. The computed ratio f2A/f2B is 0.749375671, matching the patent's 0.749 Table 29 entry for condition (1).

The zoom motion follows the patent's characteristic two-group trajectory. From wide to middle focal length, G1 first moves imageward; from middle to the tele end it reverses and moves objectward. G2 moves monotonically objectward over the same range. In the data representation, the G1–G2 spacing D6 decreases from 27.117 mm at 20.60 mm to 10.964 mm at 30.00 mm and 2.796 mm at 39.00 mm. This piecewise movement reproduces the “U-turn” of G1 described in ¶0018 rather than forcing a monotonic front-group path.

The patent also places raw surface 19, a fixed flare-cut aperture, after the final powered surface. Under ¶0034 its published fB = 37.02 mm is measured from that flare-cut plane to the image, not from surface 18. Because the flare plane has no refractive power and no published clear aperture, it is omitted from the ordinary sequential model. Its axial location is preserved by combining the raw d18 spacing with 37.02 mm, giving modeled surface-18-to-image spacings of 39.000, 49.307, and 59.175 mm at the three zoom positions. No sensor cover plate, filter plate, or other post-lens optical plate is specified in the selected embodiment, so no plate correction is applied.

Under the project definitions, the design is retrofocus at all three published zoom states because the normalized last-powered-surface back focal distance exceeds the effective focal length. The total-track ratio TL/EFL remains greater than one throughout the zoom range.

The patent assigns a functional division to the positive second group. Paragraphs ¶0023–¶0025 state that G2A performs most of the imaging work while G2B is arranged primarily to correct coma flare, with the power balance across the stop used to maintain correction over the zoom range. That patent-stated division is more specific than a generic negative-positive zoom description and is central to this embodiment.

## Element-by-Element Analysis

The focal lengths in this section are standalone thick-element paraxial focal lengths in air computed from the final element surfaces. They are not in-situ group powers. The cemented L22+L23 pair is treated separately because its assembled power differs substantially from either constituent's standalone value.

### L11 — Negative Meniscus

**nd = 1.72916, νd = 54.7. Glass: 729547 (vendor/catalog identity unresolved). Standalone f = −37.273774 mm.**

L11 is the object-side negative meniscus of G1, convex toward the object as specified in ¶0037. Together with L12 and L13 it establishes the net negative power required by the first zoom group.

The patent does not assign a distinct aberration-correction task to L11 alone. Its role is therefore kept at the group level: it contributes to the negative front-group power and participates in the moving focus/zoom assembly rather than being labeled with an unsupported element-specific correction function.

### L12 — Neg. Meniscus (1× Asph)

**nd = 1.68900, νd = 52.8. Glass: 689528 (catalog identity unresolved). Standalone f = −50.785104 mm.**

L12 is the second negative meniscus of G1 and carries the only aspherical surface in the selected example, on its image side at surface 4A. Paragraphs ¶0026 and ¶0029–¶0031 identify this first-group asphere as a means of controlling distortion while supporting the required negative-group power distribution and chromatic correction through optical-material choice. The focus-induced stability claim in ¶0026 belongs instead to the positive L13.

The source also makes the Abbe number of the first-group aspherical element an explicit design condition. L12 has νd = 52.8, satisfying condition (4), Aνd > 52.5. The patent links that condition to chromatic correction, including lateral chromatic aberration, but it does not publish line-index or partial-dispersion data for the element.

### L13 — Positive Meniscus

**nd = 1.76182, νd = 26.5. Glass: 762265 (vendor/catalog identity unresolved). Standalone f = +79.585311 mm.**

L13 is a positive meniscus, convex toward the object, that completes the otherwise negative G1 triplet. The presence of a positive lens within G1 is deliberate rather than incidental.

Paragraph ¶0026 states that including at least one positive lens in the focusing first group reduces changes in spherical aberration, distortion, and coma as the group moves for close focus. That statement supports assigning L13 a focus-stability role at the group level, although the patent does not isolate a numerical correction contribution for L13 itself.

### L21 — Biconvex Positive

**nd = 1.74320, νd = 49.3. Glass: 743493 (vendor/catalog identity unresolved). Standalone f = +63.783312 mm.**

L21 is the first positive element of G2A. It is biconvex in the selected example and precedes the cemented L22+L23 pair.

Because the patent describes G2A as the part of G2 that performs most of the imaging work, L21 contributes to the principal positive convergence before the stop. No more specific element-level aberration assignment is published for L21, so the analysis does not infer one from shape alone.

### L22 — Biconvex Positive, cemented member D1

**nd = 1.49700, νd = 81.6. Glass: 497816 (vendor/catalog identity unresolved). Standalone f = +31.765924 mm.**

L22 is the positive member of the cemented doublet immediately before the aperture stop. Its νd = 81.6 is the highest Abbe number in the selected prescription.

The patent states in ¶0025 that placing a cemented positive-negative pair immediately in front of the stop helps correct chromatic aberration. L22's high Abbe number and positive standalone power form one side of that explicitly published pairing strategy.

### L23 — Biconcave Negative, cemented member D1

**nd = 1.78800, νd = 47.4. Glass: 788474 (vendor/catalog identity unresolved). Standalone f = −33.313686 mm.**

L23 is the negative member cemented to L22. The shared surface is raw patent surface 10; in the data model that interface carries the downstream L23 element identity and index, preserving the physical medium change across the cemented junction.

The positive and negative standalone powers of L22 and L23 nearly cancel when assembled. Independent in-situ calculation through surfaces 9–11 gives the cemented pair a net focal length of +293.288733 mm. This weak net positive power must not be confused with either L22's +31.765924 mm or L23's −33.313686 mm standalone focal length. The pair's published importance is primarily its placement and chromatic role immediately before the stop, not a strong net refractive power by itself.

### L25 — Positive Meniscus

**nd = 1.71700, νd = 47.9. Glass: 717479 (vendor/catalog identity unresolved). Standalone f = +100.484119 mm.**

L25 is the first element of G2B behind the stop and is a positive meniscus convex toward the object. Together with L26 and L27 it forms the positive rear subgroup.

The patent attributes coma-flare correction chiefly to G2B as a whole. It does not assign a unique correction function to L25, so the element is best understood as part of the positive rear-group power distribution around the explicitly negative L26.

### L26 — Negative Meniscus

**nd = 1.84666, νd = 23.8. Glass: 847238 (vendor/catalog identity unresolved). Standalone f = −50.199170 mm.**

L26 is the only negative element in G2B and has the lowest Abbe number in the prescription. It is a negative meniscus convex toward the object.

Paragraph ¶0025 gives L26 a specific aberrational purpose: the negative lens in G2B is arranged to generate negative spherical aberration so that spherical aberration can be corrected at the relatively small f-numbers targeted by the design. This is a source-stated mechanism, not an inference from the element's negative power alone.

### L27 — Biconvex Positive

**nd = 1.60300, νd = 65.5. Glass: 603655 (vendor/catalog identity unresolved). Standalone f = +40.149892 mm.**

L27 is the final powered element and is biconvex. Its positive standalone power is the stronger of the two positive standalone contributions within G2B.

The patent does not isolate an aberration term for L27. In the published architecture it completes the positive G2B subgroup whose combined role is to maintain positive rear power while supporting the coma-flare and spherical-aberration correction strategy described around L26.

## Glass Identification and Selection

The patent gives d-line refractive indices and d-line Abbe numbers, but no glass trade names. The final data file therefore retains six-digit optical-coordinate codes rather than assigning vendor identities. A current multi-vendor catalog comparison shows that several coordinates have close or essentially equivalent entries from more than one manufacturer, so nd/νd alone is insufficient to select a unique OHARA, HOYA, SCHOTT, HIKARI, SUMITA, or CDGM glass.

| Element | Glass annotation | nd | νd | Prescription role |
|---|---|---:|---:|---|
| L11 | 729547 (vendor/catalog identity unresolved) | 1.72916 | 54.7 | Negative G1 meniscus |
| L12 | 689528 (catalog identity unresolved) | 1.68900 | 52.8 | Negative G1 aspheric meniscus |
| L13 | 762265 (vendor/catalog identity unresolved) | 1.76182 | 26.5 | Positive G1 meniscus |
| L21 | 743493 (vendor/catalog identity unresolved) | 1.74320 | 49.3 | Positive G2A element |
| L22 | 497816 (vendor/catalog identity unresolved) | 1.49700 | 81.6 | Positive member of cemented D1 |
| L23 | 788474 (vendor/catalog identity unresolved) | 1.78800 | 47.4 | Negative member of cemented D1 |
| L25 | 717479 (vendor/catalog identity unresolved) | 1.71700 | 47.9 | Positive G2B meniscus |
| L26 | 847238 (vendor/catalog identity unresolved) | 1.84666 | 23.8 | Negative G2B meniscus |
| L27 | 603655 (vendor/catalog identity unresolved) | 1.60300 | 65.5 | Final positive G2B element |

The largest Abbe-number contrast within a cemented assembly occurs at L22/L23: νd = 81.6 for the positive element and νd = 47.4 for the negative element. This is consistent with the patent's stated use of that pre-stop cemented pair for chromatic correction. It does not, by itself, establish anomalous partial dispersion or a specific vendor glass.

Ricoh's production construction diagram independently marks the middle pre-stop L22 position as ED and the final L27 position as anomalous-dispersion glass. The fixed production correlation therefore carries `apd: "inferred"` at those two patent positions. The tags record the manufacturer diagram mapping; they do not assign a production supplier, invent per-line indices, or claim that the patent itself publishes a `dPgF` value.

## Focus Mechanism

The patent explicitly identifies G1 as the focusing group. Paragraphs ¶0018 and ¶0026 state that focusing from infinity toward a finite object distance is performed by moving G1 toward the object. The patent does not publish finite-focus spacing rows, object-distance tables, or magnification values for Numerical Example 1.

The final data file therefore uses the status **CONSTRAINED_RECONSTRUCTION** rather than presenting close-focus values as source data. The reconstruction keeps G2 and the image plane fixed, translates only G1 as required by the patent, and uses the production minimum-focus specification of 0.28 m as a single external scalar constraint. For the solve, 0.280 m is normalized from the image plane; that reference-plane choice is a modeling assumption, not a patent statement.

| Zoom state | Infinity D6 | Reconstructed close D6 | G1 objectward shift | Reconstructed |m| at 0.28 m |
|---|---:|---:|---:|---:|
| 20.60 mm | 27.117 mm | 32.234744 mm | 5.117744 mm | 0.108586935× |
| 30.00 mm | 10.964 mm | 15.919911 mm | 4.955911 mm | 0.153290483× |
| 39.00 mm | 2.796 mm | 7.793782 mm | 4.997782 mm | 0.201071751× |

At the tele end, the reconstructed magnification is 0.201071751×, close to the production specification of 0.20×. That agreement is a cross-check on the constrained model; it does not convert the reconstructed D6 values into patent-published data.

Manufacturer literature identifies the production lens as using a DC autofocus motor, but it does not publish the identity of the internally driven optical group. The analysis therefore does not equate the production motor description with the patent's G1 mechanism beyond the fixed project correlation.

## Aspherical Surfaces

Only one aspherical surface is present in Numerical Example 1: the image-side surface of L12. The patent labels it surface 4*; the LensVisualizer data label is `4A`.

Paragraph ¶0033 defines the asphere with the standard conic expression

$$
x = \frac{c y^2}{1 + \sqrt{1 - (1+K)c^2 y^2}} + A_4y^4 + A_6y^6 + A_8y^8 + A_{10}y^{10} + \cdots .
$$

The patent's K is therefore already the standard conic constant used by the data model. No κ-to-K or KA-to-K conversion is required.

For surface 4A the published coefficients are:

- K = 0.000
- A4 = −1.834×10⁻⁵ mm⁻³
- A6 = −7.423×10⁻⁸ mm⁻⁵
- A8 = +8.340×10⁻¹¹ mm⁻⁷
- A10 = −8.259×10⁻¹³ mm⁻⁹

The patent publishes no A12 or A14 term for Example 1; the data structure carries those higher entries as zero. Because no scaling is applied to the prescription, the coefficients are stored without dimensional transformation.

The patent provides no clear-aperture semi-diameter for surface 4A. The final data model uses an independently derived semi-diameter of 13.5 mm. At that verified modeled rim, the higher-order polynomial contribution relative to the K = 0 spherical base is −1.132561277 mm, with an actual modeled rim-slope angle of 27.812356°. Those values describe the validated LensVisualizer aperture, not a patent-published asphere rim.

The polynomial is dominated by negative A4 and A6 terms, with a smaller positive A8 term and negative A10 term. Across the modeled aperture the net higher-order departure is therefore negative relative to the spherical base. The patent links this aspheric surface chiefly to distortion control and to maintaining a practical power distribution in G1.

## Chromatic Correction Strategy

The patent treats chromatic correction as a distributed function rather than attributing it to a single named ED glass. Two features are explicit.

First, L22 and L23 form a cemented positive-negative pair immediately before the aperture stop. Paragraph ¶0025 states that this location and pairing improve chromatic-aberration correction. In the final prescription the positive L22 has νd = 81.6 and the negative L23 has νd = 47.4, providing a substantial dispersion contrast while their standalone powers nearly cancel in the cemented assembly.

Second, condition (4) requires the aspherical element in G1 to have Aνd > 52.5. L12 has νd = 52.8 and therefore satisfies the condition. Paragraph ¶0031 associates that threshold with correction of lateral chromatic aberration and related chromatic errors.

The official construction mapping supports ED/APD display tags at L22 and L27, but not a stronger spectral classification. Without manufacturer-identified glass species or published per-element line indices, the prescription cannot substantiate an APO label or numerical secondary-spectrum performance for either position.

## Aberration Correction Strategy

The patent's correction strategy is organized around the stop and the power distribution of the two positive subgroups. Paragraphs ¶0023–¶0025 describe G2A as performing most of the imaging and G2B as primarily correcting coma flare. The condition f2A/f2B keeps the two positive powers in a range intended to avoid excessive pre-stop bending at one extreme and insufficient rear positive power at the other.

Spherical aberration is addressed more locally in G2B. The patent states that the negative L26 is used to generate negative spherical aberration so that the complete rear group can maintain correction at the small f-numbers sought by the design. The positive L25 and L27 retain the net positive power of G2B around that negative element.

The first group handles a different set of constraints. L12's image-side asphere is introduced to improve distortion while allowing the required negative front-group power, and L13 supplies a positive element within the moving negative group. Paragraph ¶0026 states that including that positive element reduces focus-induced variation of spherical aberration, distortion, and coma as G1 moves objectward.

These mechanisms explain why the design should not be reduced to the labels “negative front group” and “positive rear group.” The patent deliberately partitions imaging and correction across G2A, the stop, and G2B while using the aspheric moving G1 to control wide-angle distortion and focus sensitivity.

## Conditional Expressions

The patent gives five principal conditions for the design family. Recalculation from the final data preserves the source wording while recording two discrepancies in the Example 1 tabulation.

| Condition | Patent expression | Final-data result | Assessment |
|---|---|---:|---|
| (1) | 0.65 < f2A/f2B < 1.0 | 0.749375671 | Satisfies; agrees with Table 29 value 0.749 |
| (2) | 0.5 < FP/RP < 1.5 | 0.897706559 | Satisfies the printed broad range; Table 29's 1.114 corresponds to the reciprocal RP/FP = 1.113949753 |
| (3) | 1.6 < fasp/f1 < 5.0 | 1.631887939 | Satisfies; Table 29 prints 1.716, an isolated Example 1 source error |
| (4) | Aνd > 52.5 | 52.8 | Satisfies |
| (5) | −0.92 < f1/f2 < −0.8 | −0.911990057 | Satisfies; agrees with Table 29 value −0.912 |

Condition (2) requires special care. Claims and ¶¶0007–0008 print FP/RP, while Table 29 gives 1.114 for Example 1 and the preferred range in ¶0008 is 1.0 < FP/RP < 1.4. Direct paraxial calculation gives FP/RP = 0.897706559 and RP/FP = 1.113949753. The table therefore numerically corresponds to the reciprocal of the printed definition. The analysis preserves both the printed formula and the numerical inconsistency rather than silently rewriting the patent.

Condition (3) contains a separate Example 1 table error. Using the final L12 standalone power and G1 group power gives fasp/f1 = 1.631887939, not 1.716. The same computation applied to Examples 2–7 reproduces their Table 29 values to source precision, isolating the mismatch to Example 1. The corrected computed value remains within the claimed inequality.

## Modeling Normalization and Clear-Aperture Bounds

The stop position itself is source-defined: raw surface 12 lies between the L22+L23 cemented pair and L25. What the patent does not provide is a physical stop diameter or any lens semi-diameters. The final data therefore distinguishes the published axial stop position from model-derived clear apertures.

The authored stop semi-diameter is 9.7 mm. Paraxial inversion of the modeled f-number requires physical stop radii of 8.062234, 9.640430, and 8.084680 mm at the wide, middle, and tele-end states, respectively, so the authored stop envelope clears all three wide-open states.

The lens-surface semi-diameters are likewise modeling results. They were constrained by exact meridional marginal and chief rays, the Example 1 optical sections, edge thickness, actual rim slope, and cross-gap geometry. The tightest modeled glass clearance is the 1.267 mm air gap between surfaces 16 and 17. At the shared 8.35 mm radial band its computed sag intrusion is 1.199900 mm, leaving 0.067100 mm of physical rim clearance. The data therefore uses `gapSagFrac = 0.95`; this is a clear-aperture modeling parameter, not a patent dimension.

At the middle zoom position, one modeled positive-edge 0.6-field wide-open ray clips surface 16 at both infinity and the reconstructed close-focus state. The corresponding wide and tele sampled bundles clear, and no sampled ray first clips inside the cemented L22+L23 pair. This localized edge vignetting is retained rather than enlarging surface 16 beyond the validated 16→17 rim geometry.

The maximum actual modeled rim slope is 61.323959° at surface 2, below the current 64.2° validation limit. The minimum modeled element edge thickness is 1.257249 mm at L27. These values characterize the authored clear-aperture model; they are not dimensions published by Ricoh Imaging or by the patent.

## Verification Summary

Independent sequential y–ν tracing and a separately accumulated ABCD matrix give identical effective focal lengths to numerical precision for the final TypeScript prescription. The three infinity states reproduce the patent focal lengths and normalized rear conjugates within the precision expected from radii and spacings rounded to 0.001 mm and refractive indices tabulated to five decimal places.

| State | Computed EFL | Patent f | Computed BFD from surface 18 | Normalized source BFD | Direct modeled track | Patent L |
|---|---:|---:|---:|---:|---:|---:|
| Wide | 20.600371 mm | 20.60 mm | 39.005086 mm | 39.000 mm | 117.235 mm | 117.24 mm |
| Mid | 30.001162 mm | 30.00 mm | 49.313083 mm | 49.307 mm | 111.389 mm | 111.39 mm |
| Tele | 39.000810 mm | 39.00 mm | 59.181225 mm | 59.175 mm | 113.089 mm | 113.09 mm |

The final group powers are G1 = −31.120460 mm and G2 = +34.123684 mm, consistent with the patent Table 4 entries. The total Petzval sum is +0.00308701055 mm⁻¹, corresponding to a reciprocal magnitude of +323.937992 mm under the adopted sign convention. It is invariant with zoom because the selected states change only air spacings, not refracting surface powers.

Full-field chief-ray checks give image-plane heights of 14.249884, 14.209983, and 14.228709 mm for the patent's wide, middle, and tele-end field angles, consistent with the rounded published image height Y = 14.24 mm. These are verification results from the authored model rather than additional patent data.

## Sources and References

- **Primary prescription:** JP 2015-11156 A, *ズームレンズ系* (“Zoom lens system”), Numerical Example 1. Relevant passages include ¶¶0017–0034 and ¶¶0035–0039; Tables 1–4 give the selected prescription, asphere, zoom-state data, and group focal lengths; Table 29 gives the conditional-expression values.
- **Ricoh Imaging product page:** HD PENTAX-DA 20–40mm F2.8–4 ED Limited DC WR. Used for production identity, APS-C/K-mount context, 0.28 m minimum focus, 0.20× maximum reproduction, and other marketed specifications. https://www.ricoh-imaging.co.jp/english/products/lens/k/standard/hdpentax-da-20-40/
- **Ricoh Imaging launch release, 2013-11-07:** used for launch timing and production mount designation. https://news.ricoh-imaging.co.jp/rim_info2/2013/20131107_018815.html
- **Optical-glass catalog comparison:** current OHARA, HOYA, SCHOTT, HIKARI, SUMITA, and CDGM catalog/cross-reference material was used only to test whether the patent nd/νd coordinates uniquely identify vendor glasses. It did not support unique vendor assignments for this prescription, so the final data retains unresolved six-digit coordinate annotations.
