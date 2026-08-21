## Patent Reference and Design Identification

**Patent:** US 2019/0041605 A1\
**Application Number:** US 16/051,787\
**Priority:** JP 2017-152258, August 7, 2017\
**Filed:** August 1, 2018\
**Published:** February 7, 2019\
**Inventors:** Shinichiro Saito; Makoto Nakahara\
**Applicant:** Canon Inc. (the patent prints Canon Kabushiki Kaisha)\
**Title:** *Optical System and Image Pickup Apparatus*\
**Embodiment analyzed:** Example 4 / Numerical Data 4

The prescription is the user-selected Example 4 of US 2019/0041605 A1. The patent describes a telephoto imaging system with a positive first lens unit L1, a negative focusing unit L2, and a third lens unit L3 containing a transverse image-stabilization subunit. Example 4 is the F4.12, 2.11° half-field design shown in Figure 4A and tabulated as Numerical Data 4 on patent PDF page 14.

The production correlation is fixed here to the **CANON EF 600mm f/4 L IS III USM**, but it remains an identification inference rather than a statement made by Canon or by the patent. The correlation rests on several convergent points:

1. Numerical Data 4 specifies a 588.00 mm focal length and F4.12, close to the production lens's marketed 600 mm f/4 identity.
2. The patent gives a 21.64 mm image height, appropriate to the diagonal half-field of the 135 full-frame format represented by the data file.
3. The active LensVisualizer model contains 16 refracting elements in 12 air-separated groups. Counting the patent's final parallel glass block G gives 17 glass bodies in 13 groups, matching Canon's published 17-element/13-group construction. The model excludes G because the current data specification omits filters and similar final parallel plates.
4. The prescription contains exactly two repeated 1.43387 / 95.10 low-dispersion bodies and one distinct 1.43700 / 95.10 body. The data file identifies the repeated pair as fluorite and the distinct body as Canon Super UD by manufacturer-constrained correlation; Canon states that the production lens uses two fluorite elements and one Super UD element.
5. The patent assigns axial focusing to the single negative L2 unit and transverse image stabilization to a negative subunit inside L3, matching the production lens's inner-focus/IS architecture at the level relevant to the optical model.
6. The patent priority date is August 2017, and Canon records the EF 600mm f/4L IS III USM as marketed in December 2018.

No dimensional scaling is applied. The marketed 600 mm f/4 specification is therefore kept separate from the modeled design values: the final TypeScript prescription computes an EFL of 587.932441 mm and uses the patent's F4.12 as `nominalFno`. Example 4 is entirely spherical, so no aspheric coefficient transformation is applicable.

## Optical Architecture

The design is a three-unit telephoto system in the patent's terminology: positive L1, negative L2, and a weak-net-power L3. Independent first-order tracing of the final data gives `TL/EFL = 0.807542`; under the project definition `TL/EFL < 1`, this is a telephoto design. Its back focal length is much shorter than its focal length (`BFL/EFL = 0.137046`), so it is not retrofocus.

The active 16-element/12-group model divides as follows:

- **L1, surfaces 1–13:** the large positive front unit. Its computed EFL is +237.937023 mm. It contains five air-spaced elements followed by the E6–E7 cemented pair.
- **STO, patent surface 14:** the aperture stop, explicitly located by the patent between L1 and L2. Its axial position is source-published; its physical semi-diameter is not. The authored `sd = 22.42736934 mm` is a modeling value derived from F4.12 and the traced entrance pupil.
- **L2, surfaces 15–16:** a single negative meniscus, E8, with computed EFL −120.515837 mm. This is the sole axial focusing unit.
- **L3, surfaces 17–29:** the rear correction/relay unit. With the printed rounded spacings its computed EFL is approximately −50.07 m, so its net paraxial power is very small compared with L1 and L2. Figure 4A divides it into the fixed positive L3A (E9–E10), transverse negative L3B (E11–E12), and fixed L3C (E13–E16) subunits. The element-to-subunit boundaries are figure-derived because Numerical Data 4 does not label the rows numerically.

The nearly afocal character of L3 is sensitive to the patent's two-decimal spacing precision. The published Table 1 value for the L3 focal length is −47,873.47 mm, while the rounded prescription gives −50,069.95 mm. The source audit shows that an unprinted value inside the rounding interval of the published 3.79 mm spacing is sufficient to recover the Table 1 value; no prescription spacing is altered in the data file.

The final parallel glass block G at patent surfaces 30–31 is omitted from the LensVisualizer prescription. Surface 29 instead carries the patent's 80.59 mm air-equivalent back focus to the image plane. This preserves the source's own LD/BF reference convention while excluding the filter-like plate from the ordinary sequential model.

All surface semi-diameters are modeling values because Numerical Data 4 does not publish clear apertures. They were derived from the F4.12 marginal ray and then constrained by edge thickness, actual rim slope, cross-gap geometry, and off-axis ray containment. No layout parameter is used as a substitute for physical clearance.

## Element-by-Element Analysis

### E1 — Biconvex Positive, patent G1P

`nd = 1.59349, νd = 67.00. Glass: PCD51 (HOYA). f = +453.812077 mm.`

E1 is the large front collector and the patent's positive lens G1P. Paragraphs 0035–0036 and 0040–0053 make G1P a central design variable: its refractive index, Abbe number, relative partial dispersion, focal length, shape factor, and hardness are all constrained to balance compactness against spherical and chromatic correction. The standalone focal length quoted above is the power of E1 by itself, not the power of L1 in situ.

The data file's PCD51 label is catalog-derived: the HOYA coordinate matches the stored `nd` and `νd`. Numerical Data 4 does not publish absolute `nC`, `nF`, or `ng`, but its `θgF = 0.5361` gives the authored `dPgF = +0.00499400` through the patent's own normal-line relation.

### E2 — Biconvex Positive

`nd = 1.43387, νd = 95.10. Glass: Fluorite (CaF2; manufacturer-constrained). f = +187.103675 mm.`

E2 is the first of two elements with the repeated 1.43387 / 95.10 material coordinate. The patent does not name the material, so the fluorite identification is not a direct patent fact. It is the data file's manufacturer-constrained assignment: the repeated coordinate occurs exactly twice and Canon states that the production lens contains two fluorite elements.

Its positive power is substantially stronger than E1's standalone power, but the element operates deep inside the converging L1 bundle after the very large E1-to-E2 spacing. Its contribution therefore cannot be interpreted from standalone focal length alone; the complete L1 matrix remains the relevant measure of front-unit behavior.

### E3 — Biconcave Negative, patent G1N

`nd = 1.80610, νd = 33.27. Glass: NBFD15-W (HOYA). f = −109.711528 mm.`

E3 is the first negative lens in L1 and corresponds to the patent's G1N. Paragraphs 0041 and 0056–0061 specifically constrain G1N's Abbe number, relative partial dispersion, surface shape, spacing from G1P, and focal-length relation to G1P. Its strong negative standalone power counteracts the positive front elements while providing a high-dispersion partner in the patent's chromatic balancing scheme.

The NBFD15-W assignment is catalog-derived from the stored `nd`/`νd` coordinates. The patent's Table 1 lists an inconsistent G1N focal length of −187.104 mm; the actual surfaces 5–6 independently give −109.711528 mm. The data file preserves the prescription and does not substitute the erroneous table value.

### E4 — Positive Meniscus

`nd = 1.43387, νd = 95.10. Glass: Fluorite (CaF2; manufacturer-constrained). f = +281.941870 mm.`

E4 is the second occurrence of the 1.43387 / 95.10 material coordinate and is therefore the second fluorite-labeled body under the same manufacturer-constrained inference used for E2. It follows E3 across a 0.15 mm air gap, forming a close negative-positive correction pair without a cemented interface.

Its moderate positive power helps restore convergence after E3 while keeping the two low-dispersion bodies distributed within L1 rather than concentrated at the front surface.

### E5 — Positive Meniscus

`nd = 1.84666, νd = 23.88. Glass: S-NPH53 (OHARA; legacy). f = +166.944809 mm.`

E5 combines high index with low Abbe number. The legacy OHARA S-NPH53 coordinate is an exact match to the patent at the published precision: `nd = 1.84666`, `νd = 23.88`, and `θgF = 0.6218`. The patent itself does not name a vendor, so this is a catalog-derived equivalence rather than a source-labeled material. Its positive power precedes the final cemented pair of L1.

The high-index, high-dispersion coordinate is consistent with a compact corrective role in the rear half of the front group. That role is inferred from the power distribution and position; the patent does not assign an element-specific aberration function to E5.

### E6–E7 cemented pair

**E6:** `nd = 1.80420, νd = 46.50. Glass: N-LASF44 (SCHOTT). f = −89.468882 mm.`\
**E7:** `nd = 1.43700, νd = 95.10. Glass: 437951 ultra-low-dispersion class; spectral proxy FCD100 (HOYA). f = +109.196204 mm.`

E6 and E7 share the surface-12 cemented interface. SCHOTT N-LASF44 reproduces E6's published `nd = 1.80420`, `νd = 46.50`, and `θgF = 0.5572` exactly at source precision; because the patent does not name a vendor, the label remains a catalog-derived equivalence. Their individual powers have opposite signs, and the cemented pair has a computed net EFL of −463.350731 mm. This net power is distinct from either standalone element focal length and from the positive +237.937023 mm power of L1 as a complete unit.

E7 is the unique 1.43700 / 95.10 body. The data file identifies it as the production lens's one Super UD element by the conjunction of that unique coordinate and Canon's published one-Super-UD count. That product identity remains manufacturer-constrained; FCD100 is a coordinate-compatible public spectral proxy, not an assertion about Canon's production supplier. The patent's `θgF = 0.5326` gives `dPgF = +0.04875820`, which remains authoritative at g when the proxy supplies the rest of the curve.

### E8 — Negative Meniscus / L2 focus unit

`nd = 1.59349, νd = 67.00. Glass: PCD51 (HOYA). f = −120.515837 mm.`

E8 is the entirety of the second lens unit L2. Its standalone focal length therefore equals the computed L2 EFL to the precision shown. The patent expressly requires L2 to have negative refractive power and to move during focusing, while claim 15 keeps L3 fixed during focusing.

Because E8 is small relative to the front group and is the only axial focus unit, the design obtains internal focusing without translating the massive front collector. The finite-focus travel in the data file is a constrained reconstruction rather than a published spacing table, as described below.

### L3A — E9/E10 cemented pair

**E9:** `nd = 1.89286, νd = 20.36. Glass: S-NPH4 (OHARA). f = −81.408919 mm.`\
**E10:** `nd = 1.73800, νd = 32.26. Glass: S-NBH53 (OHARA; legacy). f = +63.382733 mm.`

The E9/E10 cemented negative-positive pair has a computed net EFL of +279.954428 mm. Figure 4A places it inside L3A, which the patent describes as a positive fixed subunit. That correspondence comes from the drawing and the computed positive pair power, not a numerical label in the table.

S-NPH4 is a catalog-derived OHARA assignment for E9. For E10, the legacy OHARA S-NBH53 data reproduce the patent coordinate exactly at the published precision (`1.73800 / 32.26 / 0.5899`). The legacy qualifier is intentional: later S-NBH53V data are close but not identical. The patent does not identify the vendor.

### L3B IS — E11/E12 cemented pair

**E11:** `nd = 1.80518, νd = 25.46. Glass: FD60-W (HOYA). f = +57.478514 mm.`\
**E12:** `nd = 1.59349, νd = 67.00. Glass: PCD51 (HOYA). f = −51.604950 mm.`

The E11/E12 pair has a computed cemented net EFL of −763.157302 mm. HOYA FD60-W reproduces E11's `nd = 1.80518` and `νd = 25.46`; HOYA states that FD60-W is the transmittance-improved FD60 with unchanged composition and other material characteristics. The patent `θgF = 0.6156` gives `dPgF = +0.01462372`. Its location and negative net power match the L3B subunit shown in Figure 4A. Paragraph 0024 describes L3B as the negative subunit that moves in a direction containing a component perpendicular to the optical axis for image-blur correction.

The LensVisualizer data remains centered because the patent does not publish a transverse stabilization displacement. L3B is therefore labeled as the IS group, but no unverified decenter state is introduced into the prescription.

### E13 — Biconcave Negative

`nd = 1.81600, νd = 46.62. Glass: S-LAH59 (OHARA). f = −56.987445 mm.`

E13 begins the figure-identified L3C region after L3B. It is a comparatively strong negative element and uses the catalog-resolved S-LAH59 coordinate. In combination with E14 and the E15–E16 pair it forms the final fixed rear correction train.

Its standalone power should not be confused with the net power of L3C or with the nearly afocal behavior of L3 as a whole; the air spaces and neighboring powers materially change the in-situ result.

### E14 — Positive Meniscus

`nd = 1.85478, νd = 24.80. Glass: S-NBH56 (OHARA). f = +82.602886 mm.`

E14 is a high-index, low-Abbe positive meniscus separated from E13 by 3.79 mm of air. S-NBH56 is a catalog-derived OHARA assignment matching the stored d-line coordinates.

The element reverses part of E13's negative power before the long 30.08 mm relay gap to the final cemented pair. Its element-specific aberration role is an inference from position and power; the patent does not name one.

### E15–E16 cemented rear pair

**E15:** `nd = 1.66565, νd = 35.64. Glass: H-ZBaF4 catalog equivalent (patent 666356; production supplier unspecified). f = +55.385866 mm.`\
**E16:** `nd = 1.89286, νd = 20.36. Glass: S-NPH4 (OHARA). f = −59.583092 mm.`

The final active cemented pair has a computed net EFL of +519.032506 mm. CDGM H-ZBaF4 lies within the runtime `nd`/`νd` compatibility window and supplies a qualified C/d/F spectral proxy. Its catalog partial dispersion has the opposite sign from the patent row, so the patent-derived `dPgF = −0.00145352` is retained as authoritative at g; the label does not assert a Canon production supplier. E16 returns to the catalog-resolved S-NPH4 coordinate used for E9.

The pair provides weak positive net power at the rear of L3. Together with E13 and E14 it completes the fixed L3C-side correction train before the air-equivalent back-focus spacing to the image plane.

## Glass Identification and Selection

The patent gives d-line refractive index, Abbe number, and `θgF` for every material but does not name vendors. The final data file therefore separates catalog-derived spectral proxies from manufacturer-constrained product correlations. It does not invent absolute `nC`, `nF`, or `ng`; it reconstructs all 16 `dPgF` values directly from the published `θgF` rows using `dPgF = θgF − (0.6438 − 0.001682·νd)`.

| Data-file glass label | nd | νd | Elements | Status |
|---|---:|---:|---|---|
| PCD51 (HOYA) | 1.59349 | 67.00 | E1, E8, E12 | Catalog-derived match |
| Fluorite (CaF2; manufacturer-constrained) | 1.43387 | 95.10 | E2, E4 | Manufacturer-constrained identification |
| NBFD15-W (HOYA) | 1.80610 | 33.27 | E3 | Catalog-derived match |
| S-NPH53 (OHARA; legacy) | 1.84666 | 23.88 | E5 | Catalog-derived exact coordinate match |
| N-LASF44 (SCHOTT) | 1.80420 | 46.50 | E6 | Catalog-derived exact coordinate match |
| 437951 class; spectral proxy FCD100 (HOYA) | 1.43700 | 95.10 | E7 | Manufacturer-constrained Super UD correlation; supplier-neutral proxy |
| S-NPH4 (OHARA) | 1.89286 | 20.36 | E9, E16 | Catalog-derived match within source precision |
| S-NBH53 (OHARA; legacy) | 1.73800 | 32.26 | E10 | Catalog-derived exact coordinate match |
| FD60-W (HOYA) | 1.80518 | 25.46 | E11 | Catalog-derived match |
| S-LAH59 (OHARA) | 1.81600 | 46.62 | E13 | Catalog-derived match within source precision |
| S-NBH56 (OHARA) | 1.85478 | 24.80 | E14 | Catalog-derived match |
| H-ZBaF4 catalog equivalent (patent 666356) | 1.66565 | 35.64 | E15 | Qualified spectral proxy; patent `dPgF` overrides catalog g behavior |

The two fluorite labels and the one Super UD label should be read as production-correlation inferences. Canon's manufacturer material count is a product fact; the mapping of those three production materials onto the patent's three extreme-`νd` bodies is the modeler's inference. Conversely, PCD51, NBFD15-W, S-NPH53, N-LASF44, FCD100, S-NPH4, S-NBH53, FD60-W, S-LAH59, S-NBH56, and H-ZBaF4 are catalog-derived proxy assignments whose d-line coordinates were checked against the stored prescription. All 16 active elements now have both a compatible coefficient-backed C/d/F path and patent-derived g-line correction.

## Focus Mechanism

The patent defines an inner-focus mechanism in which the negative second lens unit L2 moves during focusing. Figure 4A shows the infinity-to-proximity motion imageward, and claim 15 states that L3 does not move during focusing. Numerical Data 4, however, publishes only the infinity prescription and gives no finite-distance variable-spacing table.

The data file therefore uses the Stage-1/Stage-2 status **CONSTRAINED_RECONSTRUCTION**. Canon's published 4.2 m closest focusing distance is treated as focal-plane-to-object distance. L1 and L3 remain fixed, E8/L2 translates as a rigid body, and the sum of the two air spaces adjacent to L2 is held constant so that the total optical track remains fixed.

| Gap | Infinity | Modeled 4.2 m | Change |
|---|---:|---:|---:|
| STO → surface 15 (`D14`) | 3.490000 mm | 22.396940 mm | +18.906940 mm |
| Surface 16 → surface 17 (`D16`) | 38.060000 mm | 19.153060 mm | −18.906940 mm |
| Adjacent-gap sum | 41.550000 mm | 41.550000 mm | 0 |

The resulting rigid translation is 18.906939851 mm imageward. Independent paraxial imaging at that state gives `|m| = 0.149215`, consistent with Canon's rounded 0.15× maximum-magnification specification. The close-focus spacings and magnification agreement are modeling results, not patent-published finite-focus data.

The production lens name identifies a USM product, but the patent does not specify the focusing actuator in the optical prescription. No motor model is therefore attached to the reconstructed movement.

## Chromatic Correction Strategy

The patent treats chromatic control as a central part of the architecture. In particular, it imposes material constraints on the front positive lens G1P and the first negative lens G1N, and it discusses the relation of their Abbe numbers and relative partial dispersions to axial and lateral chromatic correction (¶0035–0036, ¶0040–0061).

Within the fixed production correlation, the front group combines two fluorite-labeled positive elements, one Super-UD-labeled positive element, several high-index flints, and multiple PCD51 bodies. Canon independently states that the production EF 600mm f/4L IS III USM uses two fluorite elements and one Super UD element for chromatic correction. The patent prescription supplies the complementary high- and low-dispersion coordinates needed to distribute positive and negative power through L1 and the rear correction groups.

No claim of apochromatic performance is made here. The patent does not publish absolute `nC`, `nF`, or `ng`, so compatible catalog coefficients supply C/d/F where available. At g, every element uses the source-derived `dPgF` reconstructed from Numerical Data 4 rather than silently inheriting a catalog's relative partial dispersion. The three production-correlated fluorite/Super UD positions carry `apd: "inferred"`, distinguishing the product-material inference from patent-named APD tags.

## Conditional Expressions

The patent gives fifteen principal conditions and successively tighter preferred ranges. The values below were independently recomputed from the final TypeScript prescription where they depend on geometry or power; `θgF` and Knoop hardness are source values from Numerical Data 4/Table 1. Two condition families expose internal inconsistencies in Table 1 and are preserved rather than silently corrected.

| No. | Printed definition / base range | Value from final prescription or source | Table 1 | Result |
|---:|---|---:|---:|---|
| 1 | `LD/f < 1.0` | 0.807542 | 0.807 | Pass |
| 2 | `1.58 < ndG1P < 1.80` | 1.59349 | 1.59349 | Pass |
| 3 | `50 < νdG1P < 75` in ¶0031; `63 < ... < 75` in claim 1 | 67.00 | 67.00 | Pass under both printed bounds |
| 4 | `0.534 < θgF,G1P < 0.560` | 0.5361 | 0.536 | Pass |
| 5 | `0.40 < fG1P/f1 < 1.5` | 1.907278 | 0.772 | **Does not pass printed definition; Table 1 inconsistent** |
| 6 | `0.7 < (R2+R1)/(R2−R1) < 5.5` for G1P | 0.887122 | 0.887 | Pass |
| 7 | `−2.8 < f1/f2 < −1.2` | −1.974322 | −1.974 | Pass |
| 8 | `24 < νdG1N < 45` | 33.27 | 33.27 | Pass |
| 9 | `0.58 < θgF,G1N < 0.595` | 0.5881 | 0.588 | Pass |
| 10 | `−1.0 < (R2+R1)/(R2−R1) < −0.1` for G1N | −0.256620 | −0.257 | Pass |
| 11 | `0.17 < dPN/f < 0.45` | 0.300409 | 0.300 | Pass |
| 12 | `1.5 < |fG1P/fG1N| < 3.0` | 4.136412 | 2.425 | **Does not pass printed definition; Table 1 inconsistent** |
| 13 | `0.3 < f1/f < 0.7` | 0.404701 | 0.405 | Pass |
| 14 | `350 < HKG1P < 500` | 440 | 440 | Pass |
| 15 | `0.2 < dF2/LD < 0.5` | 0.394520 | 0.394 | Pass |

Condition 5 is the clearest source contradiction. Surfaces 1–2 give `fG1P = 453.812077 mm`, while L1 gives `f1 = 237.937023 mm`, so the printed ratio is 1.907278. Table 1's 0.772 is instead reproduced by dividing G1P's focal length by the approximately 588 mm system focal length. No such substitution is made in the data.

Condition 12 inherits a second Table 1 inconsistency. The actual G1N surfaces 5–6 give `fG1N = −109.711528 mm`, so `|fG1P/fG1N| = 4.136412`. Table 1 prints `fG1N = −187.104 mm`, essentially the negative of the preceding positive E2 focal length, and its reported condition-12 value follows that erroneous number. The base and tighter 12a/12b ranges therefore fail under the printed definition for the actual prescription; the same is true of 5a/5b for condition 5. These are documentary contradictions, not changes applied to Example 4.

Condition 15 uses the patent's defined axial distance from the image-side vertex of L2 to the image plane, not the air-equivalent rear spacing used by the active LensVisualizer model after G is removed. Summing the rounded Numerical Data 4 spacings from surface 16 through the image plane gives `dF2 = 187.31 mm` and `dF2/LD = 0.394520`. Table 1 gives the higher-precision `dF2 = 187.294 mm` and `LD = 474.779 mm`, yielding 0.394487 and printing as 0.394. The active model's normalized 186.55 mm distance is a modeling-reference quantity and is not substituted into the patent condition.

## Image Stabilization

Paragraph 0024 divides L3 into a fixed positive L3A, a negative L3B that moves transversely for image-blur correction, and a fixed L3C. Claims 13–15 preserve the same basic arrangement and keep the third lens unit fixed during axial focusing.

For Example 4, Figure 4A identifies E9/E10 as positive L3A and E11/E12 as negative L3B. Their independently computed cemented focal lengths are +279.954428 mm and −763.157302 mm, respectively, matching the power signs stated for those subunits. The data annotations now expose those source-facing names directly instead of generic D2/D3 labels.

The patent does not publish the transverse displacement used for stabilization. The LensVisualizer prescription therefore models the centered optical state only and does not invent an IS decenter distance.

## Verification Summary

Independent reduced-angle tracing of the final TypeScript surfaces gives an EFL of 587.932441 mm and a BFL of 80.573809 mm from surface 29. The patent's rounded values are 588.00 mm and 80.59 mm. The authored surface-1-to-image track is exactly 474.78 mm because surface 29 carries the source-defined air-equivalent BF.

The sequential y–ν basis trace and independently multiplied ABCD matrix agree to machine precision, and the cardinal-factorization check differs by only `2.78 × 10⁻17`. Surface-by-surface Petzval summation using `φ/(n·n′)` gives `−4.2618813 × 10⁻5 mm⁻1`, corresponding to a Petzval radius of approximately −23.464 m.

The modeled semi-diameters remain geometry-valid at both infinity and the reconstructed close-focus state under the current edge-thickness, actual-rim-slope, cross-gap, and off-axis-containment criteria. These aperture dimensions are authoring inferences; the patent itself publishes neither the clear semi-diameters nor a physical stop diameter.

## Sources

1. Shinichiro Saito and Makoto Nakahara, **US 2019/0041605 A1, “Optical System and Image Pickup Apparatus,”** published February 7, 2019. Primary prescription source: Figure 4A; ¶0024–0027; ¶0030–0067; Numerical Data 4; Table 1; claims 13–15.
2. Canon Camera Museum, **EF600mm f/4L IS III USM**, product record and specifications: <https://global.canon/en/c-museum/product/ef475.html>.
3. Canon Camera Museum (Japanese), **EF600mm F4L IS III USM**, manufacturer statement identifying two fluorite elements and one Super UD element: <https://global.canon/ja/c-museum/product/ef475.html>.
4. HOYA Corporation, **Optical Glass / Optical World**, used for PCD51, NBFD15-W, FD60-W, and FCD100 coordinate checks, including HOYA's NBFD15-W / FD60-W transmittance-improvement notice: <https://www.hoya-opticalworld.com/>.
5. SCHOTT, **N-LASF44 optical-glass datasheet**, used for the E6 coordinate check: <https://media.schott.com/api/public/content/bd4fa2fe91a04937b7de073bea46cfa9>.
6. OHARA Inc., **Optical Glass Catalog and legacy datasheets**, used for S-NPH53, S-NPH4, S-NBH53, S-LAH59, and S-NBH56 coordinate checks: <https://www.ohara-inc.co.jp/en/product/catalog/>.
7. CDGM, **Optical Glass Data Sheet**, June 2022, H-ZBaF4, used as a qualified C/d/F spectral proxy while preserving the patent-derived g-line correction.
8. I. H. Malitson, “A redetermination of some optical properties of calcium fluoride,” *Applied Optics* 2 (1963), used only as an independent CaF2 dispersion check.
