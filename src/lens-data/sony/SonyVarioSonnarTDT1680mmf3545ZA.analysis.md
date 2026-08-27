## Patent Reference and Design Identification

**Patent:** US 2007/0229969 A1\
**Application Number:** US 11/724,215\
**Priority:** 2006-03-29, JP 2006-090568\
**Filed:** 2007-03-15\
**Published:** 2007-10-04\
**Inventor:** Hiroyuki Matsumoto\
**Assignee:** Sony Corporation\
**Title:** Variable-Magnification Optical System\
**Embodiment analyzed:** Example 1

The prescription modeled here is **SONY VARIO-SONNAR T* DT 16-80mm f/3.5-4.5 ZA**, using Example 1 of US 2007/0229969 A1 as the fixed production correlation. The patent does not identify SAL1680Z by product name, so the patent-to-product assignment is a corpus/modeling correlation rather than a manufacturer-confirmed mapping. The correlation is nevertheless supported by several independent points of agreement.

1. Sony announced the SAL1680Z as a Carl Zeiss Vario-Sonnar T* DT 16-80mm F3.5-4.5 ZA for APS-C Alpha cameras. The original June 2006 announcement gave a planned November 2006 release; Sony later moved availability to March 2007, and a September 2007 Sony release describes the lens as having been released in March 2007. The patent's Japanese priority date is 29 March 2006, placing the design work immediately before the production announcement.
2. Sony specifies **14 elements in 10 groups**. Example 1 contains fourteen glass elements, and its four cemented pairs reduce those fourteen elements to ten air-separated optical blocks. The patent's four labels GR1-GR4 are moving zoom groups, not the same counting convention as Sony's ten optical groups.
3. Sony specifies APS-C coverage. The Example 1 aberration plots use a maximum image height of **Y' = 14.2 mm**, corresponding to a 28.4 mm image-circle diameter, consistent with the APS-C format used by the data file.
4. Sony states that the production lens uses **two glass-molded aspherical lenses**. Example 1 has exactly two aspherical lens surfaces, source surfaces s7 and s25, located on L4 and L12 respectively. This is structural correlation evidence; the patent itself does not state the production manufacturing process for those two aspheres.
5. The patent's published zoom anchors are **16.4, 35.8, and 78.0 mm** with FNo. **3.61, 4.50, and 4.64**. Sony markets the lens as **16-80mm f/3.5-4.5**. The data file therefore keeps the marketed range separate from the modeled design values rather than scaling the prescription to the marketing endpoints.
6. Sony specifies a **0.35 m minimum focus distance**, **0.24× maximum magnification**, manual zoom, Sony A-mount, APS-C format, seven aperture blades, and body-integrated rather than lens-integrated stabilization. The patent independently states that focusing is performed by moving GR2 (¶0350), while its zooming description states that all four groups move (¶0326-0334); accordingly, no optical stabilization group is modeled.

The final data file applies **no uniform scale factor**. All radii and aspheric coefficients therefore retain the selected patent embodiment's dimensional scale; no coefficient transformation is required.

The source PDF is the authority for Table 1. Several machine-parsed values were checked against the rendered table and corrected as OCR errors: s8 is **R = 12.655 mm**, s19 is **R = 17.086 mm**, s22 is **R = 16.419 mm**, and s26 is **R = -772.135 mm**. Paragraph 0302's parsed wavelength unit is likewise normalized from an OCR reading of “587.56 mm” to the physically and contextually correct **587.56 nm** d line. These are transcription corrections to parsed text, not changes to the patent document.

The data model also normalizes four source-specified 0.010 mm adhesive layers at n = 1.51400. The duplicate same-radius adhesive planes are not represented as synthetic elements; instead, each 0.010 mm axial interval is absorbed into the downstream modeled element thickness at the cemented junction. The resulting TypeScript prescription is therefore the numerical authority for all computed quantities quoted below. This normalization preserves axial stations but changes the exact first-order matrix slightly relative to a raw model that propagates explicitly through the adhesive medium.

The patent does not publish conventional clear semi-diameters or a physical stop diameter. The modeled surface semi-diameters are therefore authoring quantities constrained by paraxial ray envelopes, the published 14.2 mm image height, the asphere-condition effective heights, Fig. 1 proportions, and the current edge-thickness/rim-slope/cross-gap geometry rules. The stop position itself is published as s17 and is retained as the single `STO`; only its physical semi-diameter is inferred.

No sensor cover glass, filter, inactive dummy plane, flare cutter, or mechanical component is included in the prescription.

## Optical Architecture

Example 1 is a four-moving-group zoom with the power sequence **positive / negative / positive / positive** from object to image. The final normalized first-order calculation gives group focal lengths of **GR1 +95.0336 mm, GR2 -13.2608 mm, GR3 +76.8591 mm, and GR4 +36.1956 mm**, reproducing the patent's power signs.

GR1 contains the front L1-L2 cemented pair followed by L3. It is a weak positive front group overall. GR2 contains L4 through L8 and is the strongest negative moving group; the patent assigns this group both zoom motion and focusing. GR3 contains the aperture stop followed by the L9-L10 cemented pair and is positive. GR4 contains L11 through L14 and is positive.

The zoom motion is not a simple monotonic translation of all four groups. From wide to telephoto, the patent states that GR1, GR3, and GR4 move toward the object, while GR2 first moves toward the image and then reverses toward the object (¶0329-0334). The published variable gaps show the same behavior: d6 increases from 1.834 to 19.221 to 37.207 mm, while d16 decreases from 16.744 to 6.805 to 0.800 mm and d21 decreases from 10.106 to 2.973 to 0.600 mm. These three zoom anchors are retained directly in the data file.

The complete lens should not be described globally as a telephoto design under the project criterion `TL/EFL < 1`; it does not satisfy that condition at any modeled zoom anchor. At the wide and middle anchors the system does satisfy the project whole-system retrofocus criterion `BFD > EFL`, while the telephoto anchor does not. The patent separately uses “retrofocus” terminology for a local negative-positive power sequence in GR3; that source terminology describes the subgroup arrangement rather than a global classification across the full zoom range.

The four cemented pairs are D1 = L1+L2, D2 = L5+L6, D3 = L9+L10, and D4 = L13+L14. The focal lengths quoted for individual elements in the next section are **standalone element powers in air derived from the final normalized data**. They must not be read as the focal lengths of the cemented pairs or of the moving groups in situ.

## Element-by-Element Analysis

### D1 — L1 + L2 Front Cemented Pair

**L1 — Negative Meniscus.** `nd = 1.84666`, `νd = 23.78`. Glass: **847238 — dense flint coordinate class (vendor non-unique)**. Standalone `f = -92.489988 mm`.

L1 is the first element of GR1 and has a convex object-side surface, matching the patent's description in ¶0102. Its strong high-index, low-Abbe coordinate makes it the negative member of the front cemented pair, but the patent does not identify a historical vendor melt.

**L2 — Biconvex Positive.** `nd = 1.83500`, `νd = 42.98`. Glass: **835430 — high-index lanthanum-flint coordinate class (exact current melt unresolved)**. Standalone `f = +80.579571 mm`.

L2 is cemented to L1 and supplies the positive member of D1. In the final normalized model, the source adhesive layer between the two elements is removed as a separate medium and its 0.010 mm axial interval is absorbed into L2's modeled thickness. The pair is weakly positive in context, while L2's quoted focal length remains the standalone value of the individual element.

### L3 — Positive Meniscus

`nd = 1.83500`, `νd = 42.98`. Glass: **835430 — high-index lanthanum-flint coordinate class (exact current melt unresolved)**. Standalone `f = +112.068482 mm`.

L3 is the rear element of GR1. The patent describes it as a positive meniscus with its convex surface toward the object (¶0104). Together with D1 it completes the positive first moving group without introducing another cemented interface.

### L4 — Negative Meniscus with Object-Side Asphere

`nd = 1.76743`, `νd = 49.48`. Glass: **M-TAF101 (HOYA catalog-equivalent coefficient proxy; production supplier unspecified)**. Standalone `f = -18.727365 mm`.

L4 begins GR2 as a strong negative front element of that group. The patent describes it as a negative meniscus with a convex object-side surface and identifies s7 as aspherical (¶0108). In the data file, source s7 is labeled `7A`.

The exact production glass remains unresolved. HOYA M-TAF101 (`nd = 1.76802`, `νd = 49.24`) is inside the project's coordinate-compatibility guard and supplies a qualified baseline dispersion curve while the patent coordinate remains authoritative. The annotation explicitly does not assert that Sony procured M-TAF101.

### D2 — L5 + L6 Cemented Pair

**L5 — Positive Meniscus.** `nd = 1.80518`, `νd = 25.46`. Glass: **805255 — dense flint coordinate class (vendor non-unique)**. Standalone `f = +58.218100 mm`.

The patent describes L5 as a positive meniscus with its concave surface toward the object (¶0109). It forms the positive member of D2.

**L6 — Biconcave Negative.** `nd = 1.88300`, `νd = 40.80`. Glass: **883408 — lanthanum high-index coordinate class (vendor non-unique)**. Standalone `f = -17.830349 mm`.

L6 is the strong negative member cemented to L5. D2 remains part of the net-negative GR2 assembly. As at D1, the final data file does not preserve the patent's 0.010 mm adhesive medium as a separate optical element; that interval is incorporated into the downstream modeled thickness.

### L7 — Biconvex Positive

`nd = 1.76182`, `νd = 26.61`. Glass: **762266 — dense flint coordinate class (vendor non-unique)**. Standalone `f = +23.401994 mm`.

L7 is a strong positive element within GR2. The patent identifies it simply as a biconvex positive lens (¶0111). Its placement between the D2 cemented pair and the rear negative meniscus L8 makes GR2 an internally mixed-power assembly even though the complete moving group remains negative.

### L8 — Negative Meniscus

`nd = 1.88300`, `νd = 40.80`. Glass: **883408 — lanthanum high-index coordinate class (vendor non-unique)**. Standalone `f = -44.918916 mm`.

L8 closes GR2. The patent describes it as a negative meniscus with its concave surface toward the object (¶0112). The air gap after L8 is d16, one of the principal zoom spacings and one of the two gaps varied by the constrained close-focus reconstruction.

### D3 — L9 + L10 Cemented Pair behind the Stop

**L9 — Negative Meniscus.** `nd = 1.83500`, `νd = 42.98`. Glass: **835430 — high-index lanthanum-flint coordinate class (exact current melt unresolved)**. Standalone `f = -49.750795 mm`.

L9 is the negative first element of GR3 and lies immediately behind the aperture stop. The patent describes it as a negative meniscus with its convex surface toward the object (¶0117).

**L10 — Biconvex Positive.** `nd = 1.56883`, `νd = 56.04`. Glass: **569560 — barium crown coordinate class (vendor non-unique)**. Standalone `f = +29.756179 mm`.

L10 is cemented to L9 and provides the stronger positive contribution, leaving GR3 positive overall. The patent explicitly emphasizes the negative-positive sequence in GR3 and states that the two-element arrangement is intended to obtain back-focus behavior without making the group axially long; it also states that using opposite-sign members assists chromatic correction (¶0022, ¶0363-0365). The verified in-situ focal length of the complete GR3 pair is **+76.8591 mm**, which is distinct from either standalone element focal length.

### L11 — Biconvex Positive

`nd = 1.51680`, `νd = 64.20`. Glass: **517642 — crown coordinate class (vendor non-unique)**. Standalone `f = +25.108276 mm`.

L11 begins GR4 as a strong positive biconvex element, consistent with ¶0122. Its relatively low index and high Abbe coordinate contrasts with the higher-index negative elements that follow in GR4, but the patent does not provide line-index or partial-dispersion data sufficient to assign a specific secondary-spectrum function to this glass.

### L12 — Biconcave Negative with Image-Side Asphere

`nd = 1.76743`, `νd = 49.48`. Glass: **M-TAF101 (HOYA catalog-equivalent coefficient proxy; production supplier unspecified)**. Standalone `f = -55.061242 mm`.

L12 is a biconcave negative element and carries the second asphere, source surface s25, stored as `25A`. The patent identifies this surface specifically in ¶0123 and again in its discussion of the subsequent positive-power group (¶0405). Its glass coordinate is the same 1.76743/49.48 pair used by L4, so the data file uses the same qualified M-TAF101 baseline curve without claiming production provenance.

### D4 — L13 + L14 Rear Cemented Pair

**L13 — Biconcave Negative.** `nd = 1.90366`, `νd = 31.32`. Glass: **904313 — high-index lanthanum coordinate class (vendor non-unique)**. Standalone `f = -23.491242 mm`.

L13 is the negative member of the rear cemented pair. Its high refractive index permits substantial standalone negative power with relatively compact curvature.

**L14 — Biconvex Positive.** `nd = 1.51680`, `νd = 64.20`. Glass: **517642 — crown coordinate class (vendor non-unique)**. Standalone `f = +22.311660 mm`.

L14 is the final positive element and is cemented to L13. The patent describes GR4 as a positive group containing, in order, a positive lens, a negative lens, a negative lens, and a positive lens (¶0120-0126). This mixed sequence is central to the patent's attempt to balance compactness, back focus, and exit-pupil placement in the rear system, but the analysis does not assign individual higher-order aberration functions beyond what the source or verified model establishes.

## Glass Identification and Selection

The patent supplies only d-line `nd` and `νd` coordinates. It does not name glass vendors or melts, and it publishes no `nC`, `nF`, `ng`, or `dPgF` values. The data file therefore uses neutral six-digit coordinate classes and coordinate-compatible catalog-equivalent curves. These labels describe spectral proxies, not historical melt provenance.

| Data-file glass annotation | nd | νd | Elements | Interpretation |
|---|---:|---:|---|---|
| 847238 — dense flint coordinate class | 1.84666 | 23.78 | L1 | Exact coordinate class; vendor non-unique |
| 835430 — high-index lanthanum-flint coordinate class | 1.83500 | 42.98 | L2, L3, L9 | Nearest current cross-vendor matches lie at 835427–835431; exact named melt unresolved |
| M-TAF101 catalog-equivalent proxy | 1.76743 | 49.48 | L4, L12 | Qualified HOYA baseline curve; production supplier unspecified |
| 805255 — dense flint coordinate class | 1.80518 | 25.46 | L5 | Exact coordinate class; vendor non-unique |
| 883408 — lanthanum high-index coordinate class | 1.88300 | 40.80 | L6, L8 | Coordinate class; vendor non-unique |
| 762266 — dense flint coordinate class | 1.76182 | 26.61 | L7 | Exact coordinate class; vendor non-unique |
| 569560 — barium crown coordinate class | 1.56883 | 56.04 | L10 | Exact coordinate class; vendor non-unique |
| 517642 — crown coordinate class | 1.51680 | 64.20 | L11, L14 | Exact coordinate class; vendor non-unique |
| 904313 — high-index lanthanum coordinate class | 1.90366 | 31.32 | L13 | Exact coordinate class; vendor non-unique |

The broad glass strategy is visible from the coordinate spread: the design combines several high-index, low-to-moderate-Abbe negative members with lower-index, higher-Abbe positive members, particularly in GR3 and the rear cemented pair. The patent itself notes chromatic-correction benefits for the negative-positive GR3 pair (¶0022, ¶0365). All fourteen glass elements now resolve to coefficient-backed curves, but no stronger claim of apochromatic or anomalous-partial-dispersion behavior is made because the patent publishes no per-element line indices or `dPgF` values and the catalog equivalents do not establish Sony's production melts.

## Focus Mechanism

The patent states that focusing is performed by moving **GR2**, the negative second group (¶0350). It gives no finite-object spacing table for Example 1. The final data file therefore uses the Stage-1/Stage-2 focus status **`CONSTRAINED_RECONSTRUCTION`** rather than presenting close-focus spacings as published data.

The reconstruction uses Sony's published **0.35 m minimum focus distance** as the finite-object constraint. At each W/M/T zoom anchor, GR2 alone translates while the adjacent-gap sum `d6 + d16` is conserved. The image plane is held fixed. The resulting close-focus spacings were solved from the final normalized TypeScript prescription after cement normalization.

| Zoom anchor | GR2 shift, + imageward (mm) | d6 infinity → close (mm) | d16 infinity → close (mm) | Paraxial magnification at 0.35 m |
|---|---:|---:|---:|---:|
| 16.4 mm | -1.169292 | 1.834 → 0.664708 | 16.744 → 17.913292 | -0.063549 |
| 35.8 mm | -1.854548 | 19.221 → 17.366452 | 6.805 → 8.659548 | -0.126943 |
| 78.0 mm | -3.440561 | 37.207 → 33.766439 | 0.800 → 4.240561 | -0.233698 |

Negative shift in the table means movement toward the object. At the telephoto anchor, the modeled magnification magnitude of **0.2337×** at exactly 0.35 m is consistent with Sony's rounded **0.24×** production specification, but it is not presented as a patent-published finite-focus result.

The model does not introduce additional floating groups or multi-group focus motion because the patent identifies GR2 as the focusing group and provides no numerical evidence for a more complex close-focus mechanism.

## Aspherical Surfaces

Example 1 has two aspherical surfaces: source s7 on L4 and source s25 on L12. The data file labels these surfaces `7A` and `25A`.

The patent defines sag as

$$
X(H)=\frac{C_0H^2}{1+\sqrt{1-\varepsilon C_0^2H^2}}+\sum A_jH^j,
$$

with $C_0=1/R$. LensVisualizer uses the standard conic form containing $1-(1+K)(H/R)^2$, so the conversion is

$$
K=\varepsilon-1.
$$

For both Example 1 aspheres the patent gives `ε = 1.0000`, hence the data file correctly stores **K = 0**. Because no uniform scaling is applied, the polynomial coefficients are transcribed without a scaling transformation.

### Surface 7A — L4 Object Side

- `K = 0`
- `A4 = +2.3830e-5 mm^-3`
- `A6 = -5.0335e-8 mm^-5`
- `A8 = +1.7795e-10 mm^-7`
- `A10 = -6.5132e-13 mm^-9`
- `A12 = +1.6069e-15 mm^-11`

The patent evaluates this surface under Condition F using an effective-diameter ratio. Independent evaluation of the coefficients reproduces the Table 15 endpoint at an implied effective semi-height of **13.700760 mm**. The authored `7A.sd = 13.8 mm` encloses that verified effective height and passes the geometry gate; at that verified stored semi-diameter, the polynomial departure from the spherical reference term is **+0.664167 mm**. The semi-diameter remains a modeled clear-aperture quantity rather than a patent-tabulated aperture.

### Surface 25A — L12 Image Side

- `K = 0`
- `A4 = +5.4171e-5 mm^-3`
- `A6 = +1.3027e-7 mm^-5`
- `A8 = -1.4452e-10 mm^-7`
- `A10 = +6.9268e-12 mm^-9`
- `A12 = +2.5530e-14 mm^-11`

This surface is evaluated under Condition C. The coefficients reproduce the Table 14 endpoint at an implied effective semi-height of **8.772220 mm**. The authored `25A.sd = 9.0 mm` encloses the verified condition-table height and passes the geometry gate; at that verified stored semi-diameter, the polynomial departure from the spherical reference term is **+0.449788 mm**. The semi-diameter remains an inferred clear-aperture value.

Across the complete normalized model, the independent geometry gate finds no positive-K conic-height issue because both aspheres use K = 0. The maximum actual rim slope occurs instead at spherical surface 8, not at either asphere.

Sony's production announcement states that SAL1680Z uses two glass-molded aspherical lenses. The one-to-one count with L4 and L12 is part of the production-correlation evidence; the patent's asphere tables establish surface shape, not the production molding process.

## Conditional Expressions

The patent uses several first-order conditions to define the intended power distribution. Recalculation from the final normalized TypeScript prescription gives the following values.

| Condition | Patent criterion | Final normalized value | Status |
|---|---|---:|---|
| A | `0.5 < f3/fGS(W) < 5` | 2.123436 | Satisfies |
| B | `0.1 < f3/fall(W) < 8` | 4.686532 | Satisfies |
| D | `2 < |f1/f2| < 12` | 7.166526 | Satisfies |
| E | printed `0.9 < f12(W)/fall(W) < 1.5` | -1.050295 signed; +1.050295 magnitude | Source sign contradiction |

Condition E is internally inconsistent in the patent. Paragraph 0444 states that the combined power of GR1 and GR2 is negative, so the combined focal length is negative. The independently calculated signed ratio is consequently negative. The patent nevertheless prints the Example 1 value as **+1.050**, which is reproduced by the magnitude of the computed ratio. The analysis therefore retains the contradiction rather than silently changing the source expression: the printed table behaves as though an absolute value, or an equivalent sign normalization, were intended.

The two asphere-specific conditions are also reproduced from the final coefficients. The maximum absolute residual against the patent's three-decimal tables is **0.000468** for Table 14 / Condition C and **0.000442** for Table 15 / Condition F, both within the printed precision.

## Verification Summary

All quantitative values in this section are computed from the final normalized data file, not from the earlier raw-cement transcription.

| Zoom anchor | Computed EFL (mm) | Patent focal heading (mm) | Computed BFD (mm) | Modeled FNo |
|---|---:|---:|---:|---:|
| W | 16.401640 | 16.4 | 37.255045 | 3.61 |
| M | 35.776597 | 35.8 | 53.423043 | 4.50 |
| T | 78.042607 | 78.0 | 72.831368 | 4.64 |

The EFL residuals remain below the source precision implied by the patent's focal-length headings. Independent reduced-angle and ordinary-angle ABCD calculations agree to **4.27e-14** in the matrix elements.

The surface-by-surface Petzval sum, using `φ/(n·n′)`, is **+0.002601899459 mm^-1**, corresponding to a reciprocal Petzval radius of **+384.334605 mm**. This is a computed first-order design quantity, not a patent-tabulated value.

The physical stop diameter is not published. When the patent FNo values constrain the pupil solution, the required physical stop semi-radii are **5.966500 mm at W, 6.342609 mm at M, and 7.955325 mm at T**. The data file therefore uses `STO.sd = 7.955325 mm` as the maximum inferred mechanical opening, while the zoom-dependent `nominalFno` values define the modeled wide-open aperture at each anchor.

The Figure 1 rim review retained the source-condition floors at 7A and 25A, narrowed L3 and GR4, and enlarged L8 so the rendered silhouette follows the stepped patent profile more closely. The final set passes the project geometry and image-circle audits with minimum modeled element edge thickness **1.447005 mm**, maximum actual rim slope **63.243°**, and worst shared-band cross-gap intrusion **0.560223×** the air gap against the 0.90 limit.

## Sources and References

1. **US 2007/0229969 A1**, Hiroyuki Matsumoto, *Variable-Magnification Optical System*, Sony Corporation, published 4 October 2007. Example 1: Fig. 1, Tables 1-2, Figs. 2-4, ¶0099-0126, ¶0300-0313, ¶0325-0355, and ¶0366-0466.
2. Sony USA, **SAL1680Z Specifications**: https://www.sony.com/electronics/support/lenses-a-mount-lenses/sal1680z/specifications
3. Sony Japan, **Alpha lens announcement**, 6 June 2006: https://www.sony.jp/CorporateCruise/Press/200606/06-0606/lens.html
4. Sony Japan, **SAL1680Z release-date change notice**, 20 September 2006: https://www.sony.jp/products/di-world/alpha/news/060920C.html
5. Sony Japan, **Alpha 700 / SAL1680Z kit announcement**, 6 September 2007: https://www.sony.jp/CorporateCruise/Press/200709/07-0906D/
6. HOYA Optical Glass, **Cross Reference Index**: https://www.hoya-opticalworld.com/english/products/crossreference.html
7. HOYA Optical Glass, **Optical Glass Data Download**: https://www.hoya-opticalworld.com/english/datadownload/index.html
8. SCHOTT Advanced Optics, **N-LASF41 optical-glass datasheet**: https://media.schott.com/api/public/content/dd3c78ffb0fd43f19e5a02757e44f525
9. OHARA, **S-LAH optical-glass catalog**: https://oharacorp.com/glass-type/optical-glass/s-lah/

The manufacturer sources establish product identity, mount/format, marketed focal and aperture range, group/element count, asphere count, release timing, minimum focus distance, magnification, zoom method, and aperture-blade count. The patent and final normalized prescription remain the authority for the optical prescription and exact design computations.
