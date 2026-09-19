## Patent Reference and Design Identification

**Patent:** JP 2021-36283 A
**Application Number:** 特願2019-157740
**Filed:** 2019-08-30
**Published:** 2021-03-04
**Inventors:** 山下 豊史; 伊藤 智春; 栗林 知憲; 古井田 啓吾; 三輪 哲史; 小松原 陽子; 渡邊 勝也; 野中 杏菜; 槇田 歩
**Applicant:** Nikon Corporation
**Title:** 光学系、光学機器、および光学系の製造方法
**Embodiment analyzed:** Example 1 / 第1実施例

The implemented prescription is Example 1 of JP 2021-36283 A. The patent describes a six-element, five-group, all-spherical 36.000 mm f/2.006 system whose aperture stop lies between the cemented L2/L3 pair and L4. Example 1 uses whole-system unit focusing: the entire optical system moves toward the object as the rear image-space gap D12 increases. These source facts are given in ¶0058–0059 and Table 1; Fig. 1 shows the same order and focus direction.

The production correlation to the Nikon AF Nikkor 35mm f/2D is strong but not manufacturer-confirmed. Nikon's official Japanese specifications give 35 mm, f/2, six elements in five groups, 62° full-frame angle of view, 0.25 m minimum focus, and 0.23× maximum reproduction; Nikon USA gives 0.24× maximum reproduction. The patent example independently traces to a 35.99965 mm EFL, F/2.006, a near-state subject-to-image-plane distance of 0.249890 m, and |β| = 0.236656. The official Nikon construction diagram also closely matches the patent's element count, order, and broad shapes. Nikon does not identify this patent or example as the production prescription, and Nikon USA describes the production lens as rear focusing, which conflicts with the patent's unit-focus mechanism. The data therefore models the fixed patent example rather than substituting the production focusing mechanism.

No uniform scaling is applied. The marketed 35 mm f/2 designation and the patent/design values remain separate.

## Optical Architecture

Example 1 consists, object to image, of a negative meniscus L1; a cemented positive L2 / negative L3 pair; the aperture stop; a biconcave negative L4; a positive meniscus L5; and a biconvex positive L6. L1 plus the L2/L3 cemented pair form the patent's front functional group GF. L4, L5, and L6 form the rear functional group GR. The stop is source plane 6 and is represented as the single `STO` plane in the data.

The independently recomputed d-line EFL is 35.999651812 mm. The surface-12 vertex-to-image back focal distance is 37.937451326 mm, and the first-to-last lens-surface vertex track is 49.800 mm. Under the project's first-order terminology, the design satisfies the retrofocus criterion because BFD exceeds EFL (`BFD/EFL = 1.05383`). It does not satisfy the telephoto criterion: the computed total length is 87.737451326 mm and `TL/EFL = 2.43717`.

The patent's front and rear functional groups are both net positive despite containing negative elements. Parsed-final-data matrices give GF an EFL of 39.702770222 mm (+25.1872 D) and GR an EFL of 101.308069042 mm (+9.87088 D). The cemented L2/L3 pair has an air-equivalent net EFL of 30.490059441 mm (+32.7976 D). Those group values are sequential or cemented-system quantities; they are not interchangeable with the standalone air-equivalent focal lengths quoted for individual elements below.

## Element-by-Element Analysis

### L1 — Negative Meniscus

`nd = 1.51680`, `νd = 64.12`. Glass: `J-BK7A-class (coordinate-compatible spectral proxy; supplier unproven)`. Standalone air-equivalent `f = -57.6508 mm`.

L1 is the isolated front negative meniscus. Its rear surface is followed by the prescription's largest internal air space, 16.000 mm, before the L2/L3 cemented pair. The negative standalone power is a property of L1 considered in air; the complete system calculation, not that isolated value, establishes its in-situ contribution.

The Stage 1 catalog review found HIKARI J-BK7A coordinate-compatible at the d-line, but the patent does not name a supplier or glass type. The data therefore retains a BK7-class label rather than asserting J-BK7A as the production melt.

### L2 — Biconvex Positive, first component of the cemented pair

`nd = 1.78797`, `νd = 47.17`. Glass: `N-LAF21-class (coordinate-compatible spectral proxy; patent dPgF retained; supplier unproven)`. Standalone air-equivalent `f = +20.0284 mm`.

L2 is the strong positive component of the only cemented group. Its rear surface is also the L2-to-L3 cemented interface, so the medium after that surface is L3 glass rather than air. The implemented surface therefore carries the downstream L3 element identity, consistent with the source prescription and current data rules.

No authoritative named catalog match was established strongly enough to replace the class-level label. Its individual standalone power should not be confused with the +32.7976 D net power of the complete cemented pair.

### L3 — Negative Meniscus, second component of the cemented pair

`nd = 1.53172`, `νd = 48.96`. Glass: `PBL6Y-class (coordinate-compatible spectral proxy; supplier unproven)`. Standalone air-equivalent `f = -52.4327 mm`.

L3 completes the positive L2/L3 cemented pair and lies immediately ahead of the aperture-stop gap. The patent gives a partial-dispersion ratio `θgF = 0.5599` for this material. The retained OHARA PBL6Y catalog row is an excellent coordinate and partial-dispersion class match, but it does not prove that Nikon used OHARA PBL6Y in the production lens.

The pair's positive net power demonstrates why the isolated negative sign of L3 is not an adequate description of the cemented group's behavior.

### L4 — Biconcave Negative

`nd = 1.80518`, `νd = 25.35`. Glass: `Unmatched (805254 class; SF6-like nd/νd but partial dispersion incompatible)`. Standalone air-equivalent `f = -21.4999 mm`.

L4 is the first refracting element behind the stop and the strongest negative standalone element in the prescription by absolute dioptric power. It is separated from L5 by a 2.200 mm air space.

SCHOTT N-SF6 is nearly coincident in `nd` and `νd`, but its catalog line indices give `θgF ≈ 0.61575`, whereas the patent specifies 0.6115. That residual is materially larger than the coordinate-class matches retained for L1 and L3, so the data deliberately does not label L4 as N-SF6.

### L5 — Positive Meniscus

`nd = 1.74810`, `νd = 52.28`. Glass: `E-LAKH1-class (coordinate-compatible spectral proxy; supplier unproven)`. Standalone air-equivalent `f = +39.2840 mm`.

L5 is a positive meniscus in the rear functional group. Its rear surface is followed by only 0.100 mm of air before L6, making L5 and L6 a closely spaced but non-cemented pair. E-LAKH1 supplies a compatible spectral proxy, with the patent partial dispersion retained independently.

### L6 — Biconvex Positive

`nd = 1.68348`, `νd = 54.80`. Glass: `Unmatched (683548 class; patent partial dispersion retained as dPgF)`. Standalone air-equivalent `f = +54.3189 mm`.

L6 is the rear positive element and the specific positive lens identified by the patent as satisfying conditions (1)–(7). The source gives `θgF = 0.5501` and a center thickness of 3.600 mm. The independently recomputed standalone focal length is 54.318886 mm, matching the patent's `fP2 = 54.319 mm` to source precision.

The patent explicitly connects the positive-lens index, Abbe number, and partial-dispersion conditions to correction of primary chromatic error and secondary spectrum (¶0012–0022, ¶0031–0038). That is a statement of the patent's design rationale. The LensVisualizer data converts the published `θgF` into `dPgF` using the runtime normal line without inventing C/F/g indices; no apochromatic classification is asserted.

## Glass Identification and Selection

Patent refractive indices and Abbe numbers are preserved. Named catalog glasses below are coordinate-compatible spectral proxies, not identifications of the production supplier or historical melt. The runtime compatibility guards are unchanged; no catalog-derived line indices are copied into the prescription.

| Element | Patent nd | Patent νd | Runtime glass annotation |
|---|---:|---:|---|
| L1 | 1.51680 | 64.12 | J-BK7A-class (coordinate-compatible spectral proxy; supplier unproven) |
| L2 | 1.78797 | 47.17 | N-LAF21-class (coordinate-compatible spectral proxy; patent dPgF retained; supplier unproven) |
| L3 | 1.53172 | 48.96 | PBL6Y-class (coordinate-compatible spectral proxy; supplier unproven) |
| L4 | 1.80518 | 25.35 | Unmatched (805254 class; SF6-like nd/νd but partial dispersion incompatible) |
| L5 | 1.74810 | 52.28 | E-LAKH1-class (coordinate-compatible spectral proxy; supplier unproven) |
| L6 | 1.68348 | 54.80 | Unmatched (683548 class; patent partial dispersion retained as dPgF) |

Table 1 publishes θgF = 0.5360, 0.5548, 0.5599, 0.6115, 0.5465, and 0.5501 for L1–L6. These ratios are converted to `dPgF` using the runtime normal line `0.6438 − 0.001682νd`; they are source data, not fitted catalog indices. PBL6Y uses the [Ohara 24-10 datasheet](https://oharacorp.com/wp-content/uploads/datasheets/ehpbl06y.pdf), whose θgF = 0.5599 agrees with L3. E-LAKH1 is a close coordinate proxy for L5; the authored partial dispersion controls the g-line. L4/L6 remain unresolved.

## Focus Mechanism

Example 1 uses published unit focus, not a reconstructed internal mechanism. Patent ¶0058 states that the complete optical system moves toward the object when focusing from infinity toward a finite distance. D1 through D11 remain fixed; only D12, the rear image-space distance, changes in the source table.

| Focus state | `focusT` in model | D12 (mm) | Computed β | Whole-lens translation from infinity |
|---|---:|---:|---:|---:|
| Infinity | 0.000000 | 37.938 | — | 0.000 mm |
| Published intermediate | 0.213686 | 39.138 | -0.033349 | 1.200 mm objectward |
| Published near | 1.000000 | 46.457 | -0.236656 | 8.519 mm objectward |

The intermediate `focusT` coordinate is a model mapping, not a fourth patent quantity: it is derived from the current normalized focus convention using the computed 1.169939 m subject-to-image-plane distance and the 0.25 m close-focus endpoint. The D12 values themselves are source-published.

At the near state, the paraxial finite-conjugate solution gives a 0.249890 m subject-to-image-plane distance and |β| = 0.236656. Those values closely align with Nikon's marketed 0.25 m minimum focus and regional 0.23×/0.24× reproduction specifications, which is useful production-correlation evidence. It does not remove the documented focusing-mechanism contradiction: Nikon USA describes the marketed lens as rear focusing, whereas the patent example is unit focus.

## Conditional Expressions

Example 1 identifies L6 as the positive lens used by the patent's chromatic-condition framework. Recalculation from the final implemented prescription and retained source `θgF` gives:

| Condition | Recomputed value | Base requirement | Result |
|---|---:|---|---|
| C1: `ndP2 - (2.015 - 0.0068νdP2)` | 0.041120 | > -0.010 | satisfied |
| C2: `νdP2` | 54.80 | 50.00 < value < 65.00 | satisfied |
| C3: `θgFP2` | 0.5501 | > 0.545 | satisfied |
| C4: `θgFP2 - (0.6418 - 0.00168νdP2)` | 0.000364 | > -0.010 | satisfied |
| C5: `fP2/fR` | 0.536175 | -10.00 < value < 10.00 | satisfied |
| C6: `fP2/f` | 1.508873 | 0.10 < value < 15.00 | satisfied |
| C7: `DP2` | 3.600 mm | > 0.400 mm | satisfied |

The optional stronger variants are not satisfied by this embodiment: `θgF > 0.555` (condition 3-1) is false and the condition-4 residual does not exceed 0.010 (condition 4-1). The patent table's combined condition labels therefore should not be read as evidence that Example 1 satisfies those stronger alternatives.

## Verification Summary

The final data revision reproduces the patent's first-order quantities within source precision. Independent height/reduced-angle and ABCD implementations agree on the d-line system matrix. The resulting EFL is 35.999651812 mm, BFD is 37.937451326 mm from the last lens vertex, and total length is 87.737451326 mm. Surface-by-surface Petzval calculation using `φ/(n·n′)` sums to 0.005283161751 mm⁻¹, corresponding to a reciprocal magnitude of 189.280595 mm.

The patent does not publish physical semi-diameters or diaphragm diameter. The data's stop semi-diameter, 9.606081611 mm, is therefore calibrated from the published F/2.006 and the computed entrance-pupil magnification; reproducing F/2.006 is a calibration round trip, not independent evidence for a physical iris dimension. Refracting-surface semi-diameters are modeled from exact spherical meridional ray sampling at the three published focus states, with approximately 10% clearance. The current portable geometry checks pass edge thickness, actual rim slope, cross-gap intrusion, sampled intermediate focus states, and finite full-field meridional containment. These checks are not a substitute for the repository's production render diagnostics.

Example 1 has no aspherical surfaces. No cover glass, filter, dummy plane, or mechanical plane is omitted from the selected patent table, and no air-equivalent rear-spacing conversion or scale transformation is required.

## Sources

1. Japan Patent Office, **JP 2021-36283 A**, *光学系、光学機器、および光学系の製造方法*, published 2021-03-04. Example 1: ¶0058–0063, Table 1, Fig. 1; general glass/condition definitions: ¶0009–0056.
2. Nikon Imaging Japan, **AI AF Nikkor 35mm f/2D — Overview**: https://nij.nikon.com/products/lineup/nikkor/fmount/ai_af_nikkor_35mm_f2d/
3. Nikon Imaging Japan, **AI AF Nikkor 35mm f/2D — Main Specifications and lens construction diagram**: https://nij.nikon.com/products/lineup/nikkor/fmount/ai_af_nikkor_35mm_f2d/spec.html
4. Nikon USA, **AF NIKKOR 35mm f/2D — Tech Specs**: https://www.nikonusa.com/p/af-nikkor-35mm-f2d/1923/overview
5. Nikon Corporation, **AF Nikkor 35mm f/2D instruction manual**: https://nij.nikon.com/support/manual/nikkor/AF35mmf2_%2880%2911.pdf
6. HIKARI GLASS CO., LTD., **J-BK7A data sheet**: https://www.hikari-g.co.jp/optical_glass/general_optical_glass/document/BK/J_BK7A.pdf
7. OHARA, **Optical Glass Pocket Catalog 2023-05**, PBL6Y row: https://oharacorp.com/wp-content/uploads/2023/06/ohara-pocket-catalog-2023-05.pdf
8. SCHOTT, **Optical Glass Datasheet N-SF6**: https://media.schott.com/api/public/content/71867e8f4d09454b9ed013ea40429b29?v=c310af5c

L2’s N-LAF21 proxy is supported by the [SCHOTT datasheet collection](https://www.schott.com/en-gb/products/optical-glass/-/media/Project/OnEx/Products/O/optical-glass/Downloads/schott-optical-glass-collection-datasheets-english-may2019.pdf?rev=5358bb64e13a44f2b37f5065490509af): nd 1.78800, vd 47.49, PgF 0.5555. Its coordinates closely match the patent and its partial-dispersion difference is only 0.0007; the patent dPgF still controls the modeled g-line.
