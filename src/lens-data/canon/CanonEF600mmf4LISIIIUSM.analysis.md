## Patent Reference and Design Identification

**Patent:** US 2019/0041605 A1\
**Application Number:** US 16/051,787\
**Priority:** JP 2017-152258, August 7, 2017\
**Filed:** August 1, 2018\
**Published:** February 7, 2019\
**Inventors:** Shinichiro Saito; Makoto Nakahara\
**Applicant:** Canon Inc. (the patent prints Canon Kabushiki Kaisha)\
**Title:** _Optical System and Image Pickup Apparatus_\
**Example details:** Numerical Data 4

The prescription is the user-selected Example 4 of US 2019/0041605 A1. The patent describes a telephoto imaging system with a positive first lens unit L1, a negative focusing unit L2, and a third lens unit L3 containing a transverse image-stabilization subunit. Example 4 is the F4.12, 2.11° half-field design shown in Figure 4A and tabulated as Numerical Data 4 on patent PDF page 14.

The production correlation is fixed here to the **CANON EF 600mm f/4 L IS III USM**, but it remains an identification inference rather than a statement made by Canon or by the patent. The correlation rests on several convergent points:

1. Numerical Data 4 specifies a 588.00 mm focal length and F4.12, close to the production lens's marketed 600 mm f/4 identity.
2. The patent gives a 21.64 mm image height, appropriate to the diagonal half-field of the 135 full-frame format represented by the data file.
3. The selected source and current model contain 16 powered lenses plus required drawn filter G, totaling
   17 elements / 13 air-separated groups. Both plates and source physical gaps are represented; catalog
   counts now include G and match the retained production count. No filter-omission rule is applied.
4. The prescription contains exactly two repeated 1.43387 / 95.10 low-dispersion bodies and one distinct 1.43700 / 95.10 body. The repeated pair and distinct body retain qualified associations with the production fluorite and Super UD count; historical chemistry remains unresolved; Canon states that the production lens uses two fluorite elements and one Super UD element.
5. The patent assigns axial focusing to the single negative L2 unit and transverse image stabilization to a negative subunit inside L3, matching the production lens's inner-focus/IS architecture at the level relevant to the optical model.
6. The patent priority date is August 2017, and Canon records the EF 600mm f/4L IS III USM as marketed in December 2018.

No dimensional scaling is applied. The marketed 600 mm f/4 specification is therefore kept separate from the modeled design values: the final TypeScript prescription computes an EFL of 587.932441 mm and uses the patent's F4.12 as `nominalFno`. Example 4 is entirely spherical, so no aspheric coefficient transformation is applicable.

## Optical Architecture

The design is a three-unit telephoto system in the patent's terminology: positive L1, negative L2, and a weak-net-power L3. Independent first-order tracing of the final data gives `TL/EFL = 0.807542`; under the project definition `TL/EFL < 1`, this is a telephoto design. Its back focal length is much shorter than its focal length (`BFL/EFL = 0.137046`), so it is not retrofocus.

The 16-powered-lens section, followed by required G as the seventeenth element/thirteenth group, divides as follows:

- **L1, surfaces 1–13:** the large positive front unit. Its computed EFL is +237.937023 mm. It contains five air-spaced elements followed by the E6–E7 cemented pair.
- **STO, patent surface 14:** the aperture stop, explicitly located by the patent between L1 and L2. Its axial position is source-published; its physical semi-diameter is not. The authored `sd = 22.42736934 mm` is a modeling value derived from F4.12 and the traced entrance pupil.
- **L2, surfaces 15–16:** a single negative meniscus, E8, with computed EFL −120.515837 mm. This is the sole axial focusing unit.
- **L3, surfaces 17–29:** the rear correction/relay unit. With the printed rounded spacings its computed EFL is approximately −50.07 m, so its net paraxial power is very small compared with L1 and L2. Figure 4A divides it into the fixed positive L3A (E9–E10), transverse negative L3B (E11–E12), and fixed L3C (E13–E16) subunits. The element-to-subunit boundaries are figure-derived because Numerical Data 4 does not label the rows numerically.

The nearly afocal character of L3 is sensitive to the patent's two-decimal spacing precision. The published Table 1 value for the L3 focal length is −47,873.47 mm, while the rounded prescription gives −50,069.95 mm. A fresh sensitivity trial finds d24 = 3.785210317 mm can reproduce the stated power inside the interval
that rounds to 3.79 mm. This is an unconfirmed rounding hypothesis, not proof of an authoring error or
historical dimension. The contradiction remains unresolved and the printed 3.79 mm is unchanged.

The final parallel glass block G at patent surfaces 30–31 is drawn as a plane-parallel plate: 2.20 mm thick, nd 1.51633, νd 64.14, 5.25 mm behind surface 29, with 73.90 mm of air to the image plane. Those printed spacings give an air-equivalent back focus of 5.25 + 2.20/1.51633 + 73.90 = 80.600871 mm against the patent's rounded 80.59 mm. The patent lists no clear aperture for the plate, so its revised 22 mm semi-diameter follows the original optical rectangle in Fig. 4A and is checked by tracing.

All surface semi-diameters are modeling values because Numerical Data 4 does not publish clear apertures. They were derived from the F4.12 marginal ray and then constrained by edge thickness, actual rim slope, cross-gap geometry, and off-axis ray containment. No layout parameter is used as a substitute for physical clearance.

## Element-by-Element Analysis

### E1 — Biconvex Positive, patent G1P

`nd = 1.59349, νd = 67.00. Glass: PCD51 (HOYA) spectral proxy (historical material, supplier and melt unspecified). f = +453.812077 mm.`

E1 is the large front collector and the patent's positive lens G1P. Paragraphs 0035–0036 and 0040–0053 make G1P a central design variable: its refractive index, Abbe number, relative partial dispersion, focal length, shape factor, and hardness are all constrained to balance compactness against spherical and chromatic correction. The standalone focal length quoted above is the power of E1 by itself, not the power of L1 in situ.

The data file's PCD51 label is catalog-derived: the HOYA coordinate matches the stored `nd` and `νd`. Numerical Data 4 does not publish absolute `nC`, `nF`, or `ng`, but its `θgF = 0.5361` gives the authored `dPgF = +0.00499400` through the repository’s normal-line relation.

### E2 — Biconvex Positive

`nd = 1.43387, νd = 95.10. Glass: CaF2 spectral proxy (historical material/supplier unresolved). f = +187.103675 mm.`

E2 is the first of two elements with the repeated 1.43387 / 95.10 material coordinate. The patent does not name the material, so the fluorite identification is not a direct patent fact. It is the data file's qualified product-correlation inference: the repeated coordinate occurs exactly twice and Canon states that the production lens contains two fluorite elements.

Its positive power is substantially stronger than E1's standalone power, but the element operates deep inside the converging L1 bundle after the very large E1-to-E2 spacing. Its contribution therefore cannot be interpreted from standalone focal length alone; the complete L1 matrix remains the relevant measure of front-unit behavior.

### E3 — Biconcave Negative, patent G1N

`nd = 1.80610, νd = 33.27. Glass: NBFD15-W (HOYA) spectral proxy (historical material, supplier and melt unspecified). f = −109.711528 mm.`

E3 is the first negative lens in L1 and corresponds to the patent's G1N. Paragraphs 0041 and 0056–0061 specifically constrain G1N's Abbe number, relative partial dispersion, surface shape, spacing from G1P, and focal-length relation to G1P. Its strong negative standalone power counteracts the positive front elements while providing a high-dispersion partner in the patent's chromatic balancing scheme.

The NBFD15-W assignment is catalog-derived from the stored `nd`/`νd` coordinates. The patent’s Table 1 lists G1N = −187.104 mm, while the actual surfaces 5–6 give −109.711528 mm.
The discrepancy is unresolved; the literal prescription is retained and no source table value is substituted.

### E4 — Positive Meniscus

`nd = 1.43387, νd = 95.10. Glass: CaF2 spectral proxy (historical material/supplier unresolved). f = +281.941870 mm.`

E4 is the second occurrence of the 1.43387 / 95.10 material coordinate and is therefore the second CaF2-proxy body under the same qualified product inference used for E2. It follows E3 across a 0.15 mm air gap, forming a close negative-positive correction pair without a cemented interface.

Its moderate positive power helps restore convergence after E3 while keeping the two low-dispersion bodies distributed within L1 rather than concentrated at the front surface.

### E5 — Positive Meniscus

`nd = 1.84666, νd = 23.88. Glass: S-NPH53 (OHARA; legacy) spectral proxy (historical material, supplier and melt unspecified). f = +166.944809 mm.`

E5 combines high index with low Abbe number. The legacy OHARA S-NPH53 coordinate is an exact match to the patent at the published precision: `nd = 1.84666`, `νd = 23.88`, and `θgF = 0.6218`. The patent itself does not name a vendor, so this is a catalog-derived equivalence rather than a historical material identification. Its positive power precedes the final cemented pair of L1.

The high-index, high-dispersion coordinate is consistent with a compact corrective role in the rear half of the front group. That role is inferred from the power distribution and position; the patent does not assign an element-specific aberration function to E5.

### E6–E7 cemented pair

**E6:** `nd = 1.80420, νd = 46.50. Glass: N-LASF44 (SCHOTT) spectral proxy (historical material, supplier and melt unspecified). f = −89.468882 mm.`\
**E7:** `nd = 1.43700, νd = 95.10. Glass: 437951 ultra-low-dispersion class; FCD100 (HOYA) spectral proxy; historical chemistry, supplier and melt unspecified. f = +109.196204 mm.`

E6 and E7 share the surface-12 cemented interface. SCHOTT N-LASF44 reproduces E6's published `nd = 1.80420`, `νd = 46.50`, and `θgF = 0.5572` exactly at source precision; because the patent does not name a vendor, the label remains a catalog-derived equivalence. Their individual powers have opposite signs, and the cemented pair has a computed net EFL of −463.350731 mm. This net power is distinct from either standalone element focal length and from the positive +237.937023 mm power of L1 as a complete unit.

E7 is the unique 1.43700 / 95.10 body. The data file retains a qualified association to the production lens’s Super UD count, without identifying
its historical chemistry, supplier or melt; FCD100 is a coordinate-compatible public spectral proxy, not an assertion about Canon's production supplier. The patent's `θgF = 0.5326` gives `dPgF = +0.04875820`, which remains the retained source partial-dispersion constraint at g when the qualified proxy supplies the rest of the curve.

### E8 — Negative Meniscus / L2 focus unit

`nd = 1.59349, νd = 67.00. Glass: PCD51 (HOYA) spectral proxy (historical material, supplier and melt unspecified). f = −120.515837 mm.`

E8 is the entirety of the second lens unit L2. Its standalone focal length therefore equals the computed L2 EFL to the precision shown. The patent expressly requires L2 to have negative refractive power and to move during focusing, while claim 15 keeps L3 fixed during focusing.

Because E8 is small relative to the front group and is the only axial focus unit, the design obtains internal focusing without translating the massive front collector. The finite-focus travel in the data file is a constrained reconstruction rather than a published spacing table, as described below.

### L3A — E9/E10 cemented pair

**E9:** `nd = 1.89286, νd = 20.36. Glass: S-NPH4 (OHARA) spectral proxy (historical material, supplier and melt unspecified) spectral proxy (historical material, supplier and melt unspecified). f = −81.408919 mm.`\
**E10:** `nd = 1.73800, νd = 32.26. Glass: S-NBH53 (OHARA; legacy) spectral proxy (historical material, supplier and melt unspecified). f = +63.382733 mm.`

The E9/E10 cemented negative-positive pair has a computed net EFL of +279.954428 mm. Figure 4A places it inside L3A, which the patent describes as a positive fixed subunit. That correspondence comes from the drawing and the computed positive pair power, not a numerical label in the table.

S-NPH4 is a catalog-derived OHARA assignment for E9. For E10, the legacy OHARA S-NBH53 data reproduce the patent coordinate exactly at the published precision (`1.73800 / 32.26 / 0.5899`). The legacy qualifier is intentional: later S-NBH53V data are close but not identical. The patent does not identify the vendor.

### L3B IS — E11/E12 cemented pair

**E11:** `nd = 1.80518, νd = 25.46. Glass: FD60-W (HOYA) spectral proxy (historical material, supplier and melt unspecified). f = +57.478514 mm.`\
**E12:** `nd = 1.59349, νd = 67.00. Glass: PCD51 (HOYA) spectral proxy (historical material, supplier and melt unspecified). f = −51.604950 mm.`

The E11/E12 pair has a computed cemented net EFL of −763.157302 mm. HOYA FD60-W reproduces E11's `nd = 1.80518` and `νd = 25.46`; HOYA states that FD60-W is the transmittance-improved FD60 with unchanged composition and other material characteristics. The patent `θgF = 0.6156` gives `dPgF = +0.01462372`. Its location and negative net power match the L3B subunit shown in Figure 4A. Paragraph 0024 describes L3B as the negative subunit that moves in a direction containing a component perpendicular to the optical axis for image-blur correction.

The LensVisualizer data remains centered because the patent does not publish a transverse stabilization displacement. L3B is therefore labeled as the IS group, but no unverified decenter state is introduced into the prescription.

### E13 — Biconcave Negative

`nd = 1.81600, νd = 46.62. Glass: S-LAH59 (OHARA) spectral proxy (historical material, supplier and melt unspecified). f = −56.987445 mm.`

E13 begins the figure-identified L3C region after L3B. It is a comparatively strong negative element and uses the catalog-resolved S-LAH59 coordinate. In combination with E14 and the E15–E16 pair it forms the final fixed rear correction train.

Its standalone power should not be confused with the net power of L3C or with the nearly afocal behavior of L3 as a whole; the air spaces and neighboring powers materially change the in-situ result.

### E14 — Positive Meniscus

`nd = 1.85478, νd = 24.80. Glass: S-NBH56 (OHARA) spectral proxy (historical material, supplier and melt unspecified). f = +82.602886 mm.`

E14 is a high-index, low-Abbe positive meniscus separated from E13 by 3.79 mm of air. S-NBH56 is a catalog-derived OHARA assignment matching the stored d-line coordinates.

The element reverses part of E13's negative power before the long 30.08 mm relay gap to the final cemented pair. Its element-specific aberration role is an inference from position and power; the patent does not name one.

### E15–E16 cemented rear pair

**E15:** `nd = 1.66565, νd = 35.64. Glass: H-ZBaF4 spectral proxy (compatible coordinates; historical material and supplier unspecified). f = +55.385866 mm.`\
**E16:** `nd = 1.89286, νd = 20.36. Glass: S-NPH4 (OHARA) spectral proxy (historical material, supplier and melt unspecified) spectral proxy (historical material, supplier and melt unspecified). f = −59.583092 mm.`

The final active cemented pair has a computed net EFL of +519.032506 mm. CDGM H-ZBaF4 lies within the runtime `nd`/`νd` compatibility window and supplies a qualified C/d/F spectral proxy. Its catalog partial dispersion has the opposite sign from the patent row, so the patent-derived `dPgF = −0.00145352` is retained as authoritative at g; the label does not assert a Canon production supplier. E16 returns to the catalog-resolved S-NPH4 coordinate used for E9.

The pair provides weak positive net power at the rear of L3. Together with E13 and E14 it completes the fixed L3C-side correction train before physical filter G and the trailing source image gap.

## Glass Identification and Selection

The patent gives d-line refractive index, Abbe number, and `θgF` for every material but does not name vendors. The final data file therefore separates catalog-derived spectral proxies from qualified product associations. It does not invent absolute `nC`, `nF`, or `ng`; it retains all 17 `dPgF` values, including G, derived from the published absolute `θgF` rows using `dPgF = θgF − (0.6438 − 0.001682·νd)`.

| Data-file glass label                                                                                                                                  |      nd |    νd | Elements    | Status                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------: | ----: | ----------- | -------------------------------------------------------------------- |
| PCD51 (HOYA) spectral proxy (historical material, supplier and melt unspecified)                                                                       | 1.59349 | 67.00 | E1, E8, E12 | Catalog-derived match                                                |
| Fluorite (CaF2 spectral proxy; historical material and supplier unspecified)                                                                           | 1.43387 | 95.10 | E2, E4      | Qualified product association; CaF2 spectral proxy                   |
| NBFD15-W (HOYA) spectral proxy (historical material, supplier and melt unspecified)                                                                    | 1.80610 | 33.27 | E3          | Catalog-derived match                                                |
| S-NPH53 (OHARA; legacy) spectral proxy (historical material, supplier and melt unspecified)                                                            | 1.84666 | 23.88 | E5          | Catalog-derived exact coordinate match                               |
| N-LASF44 (SCHOTT) spectral proxy (historical material, supplier and melt unspecified)                                                                  | 1.80420 | 46.50 | E6          | Catalog-derived exact coordinate match                               |
| 437951 class; spectral proxy FCD100 (HOYA)                                                                                                             | 1.43700 | 95.10 | E7          | Qualified Super UD product association; supplier-neutral proxy       |
| S-NPH4 (OHARA) spectral proxy (historical material, supplier and melt unspecified) spectral proxy (historical material, supplier and melt unspecified) | 1.89286 | 20.36 | E9, E16     | Catalog-derived match within source precision                        |
| S-NBH53 (OHARA; legacy) spectral proxy (historical material, supplier and melt unspecified)                                                            | 1.73800 | 32.26 | E10         | Catalog-derived exact coordinate match                               |
| FD60-W (HOYA) spectral proxy (historical material, supplier and melt unspecified)                                                                      | 1.80518 | 25.46 | E11         | Catalog-derived match                                                |
| S-LAH59 (OHARA) spectral proxy (historical material, supplier and melt unspecified)                                                                    | 1.81600 | 46.62 | E13         | Catalog-derived match within source precision                        |
| S-NBH56 (OHARA) spectral proxy (historical material, supplier and melt unspecified)                                                                    | 1.85478 | 24.80 | E14         | Catalog-derived match                                                |
| H-ZBaF4 spectral proxy (patent 666356)                                                                                                                 | 1.66565 | 35.64 | E15         | Qualified spectral proxy; patent `dPgF` overrides catalog g behavior |
| S-BSL7 spectral proxy                                                                                                                                  | 1.51633 | 64.14 | G           | Qualified spectral proxy; source θgF = 0.5353 retained               |

The two CaF2-proxy positions and the one Super UD association are qualified product correlations, not
historical chemistry identifications. Canon's manufacturer material count is a product fact; the mapping of those three production materials onto the patent's three extreme-`νd` bodies is the modeler's inference. Conversely, PCD51, NBFD15-W, S-NPH53, N-LASF44, FCD100, S-NPH4, S-NBH53, FD60-W, S-LAH59, S-NBH56, and H-ZBaF4 are catalog-derived proxy assignments whose d-line coordinates were checked against the stored prescription. All 17 modeled media have compatible coefficient-backed C/d/F proxies plus genuine source-derived g-line
constraints. No curve proves a historical material, melt or supplier. Source spectral ratios remain
authoritative even when a catalog proxy has a different g-line partial dispersion.

## Focus Mechanism

The patent defines an inner-focus mechanism in which the negative second lens unit L2 moves during focusing. Figure 4A shows the infinity-to-proximity motion imageward, and claim 15 states that L3 does not move during focusing. Numerical Data 4, however, publishes only the infinity prescription and gives no finite-distance variable-spacing table.

The data file therefore uses the Stage-1/Stage-2 status **CONSTRAINED_RECONSTRUCTION**. Canon's published 4.2 m closest focusing distance is treated as focal-plane-to-object distance. L1 and L3 remain fixed, E8/L2 translates as a rigid body, and the sum of the two air spaces adjacent to L2 is held constant so that the total optical track remains fixed.

| Gap                             |     Infinity | Modeled 4.2 m |        Change |
| ------------------------------- | -----------: | ------------: | ------------: |
| STO → surface 15 (`D14`)        |  3.490000 mm |  22.396940 mm | +18.906940 mm |
| Surface 16 → surface 17 (`D16`) | 38.060000 mm |  19.153060 mm | −18.906940 mm |
| Adjacent-gap sum                | 41.550000 mm |  41.550000 mm |             0 |

The resulting rigid translation is 18.906939851 mm imageward. Independent paraxial imaging at that state gives `|m| = 0.149215`, consistent with Canon's rounded 0.15× maximum-magnification specification. The close-focus spacings and magnification agreement are modeling results, not patent-published finite-focus data.

The production lens name identifies a USM product, but the patent does not specify the focusing actuator in the optical prescription. No motor model is therefore attached to the reconstructed movement.

## Chromatic Correction Strategy

The patent treats chromatic control as a central part of the architecture. In particular, it imposes material constraints on the front positive lens G1P and the first negative lens G1N, and it discusses the relation of their Abbe numbers and relative partial dispersions to axial and lateral chromatic correction (¶0035–0036, ¶0040–0061).

Within the fixed production correlation, the front group combines two fluorite-labeled positive elements, one Super-UD-labeled positive element, several high-index flints, and multiple PCD51 bodies. Canon independently states that the production EF 600mm f/4L IS III USM uses two fluorite elements and one Super UD element for chromatic correction. The patent prescription supplies the complementary high- and low-dispersion coordinates needed to distribute positive and negative power through L1 and the rear correction groups.

No claim of apochromatic performance is made here. The patent does not publish absolute `nC`, `nF`, or `ng`, so compatible catalog coefficients supply C/d/F where available. At g, every element uses the source-derived `dPgF` reconstructed from Numerical Data 4 rather than silently inheriting a catalog's relative partial dispersion. The three production-correlated fluorite/Super UD positions carry `apd: "inferred"`, distinguishing the product-material inference from patent-named APD tags.

## Conditional Expressions

The patent gives fifteen principal conditions and successively tighter preferred ranges. The values below were independently recomputed from the final TypeScript prescription where they depend on geometry or power; `θgF` and Knoop hardness are source values from Numerical Data 4/Table 1. Two condition families expose internal inconsistencies in Table 1 and are preserved rather than silently corrected.

| No. | Printed definition / base range                        | Value from final prescription or source | Table 1 | Result                                                     |
| --: | ------------------------------------------------------ | --------------------------------------: | ------: | ---------------------------------------------------------- | ----- | ---------------------------------------------------------- |
|   1 | `LD/f < 1.0`                                           |                                0.807542 |   0.807 | Pass                                                       |
|   2 | `1.58 < ndG1P < 1.80`                                  |                                 1.59349 | 1.59349 | Pass                                                       |
|   3 | `50 < νdG1P < 75` in ¶0031; `63 < ... < 75` in claim 1 |                                   67.00 |   67.00 | Pass under both printed bounds                             |
|   4 | `0.534 < θgF,G1P < 0.560`                              |                                  0.5361 |   0.536 | Pass                                                       |
|   5 | `0.40 < fG1P/f1 < 1.5`                                 |                                1.907278 |   0.772 | **Does not pass printed definition; Table 1 inconsistent** |
|   6 | `0.7 < (R2+R1)/(R2−R1) < 5.5` for G1P                  |                                0.887122 |   0.887 | Pass                                                       |
|   7 | `−2.8 < f1/f2 < −1.2`                                  |                               −1.974322 |  −1.974 | Pass                                                       |
|   8 | `24 < νdG1N < 45`                                      |                                   33.27 |   33.27 | Pass                                                       |
|   9 | `0.58 < θgF,G1N < 0.595`                               |                                  0.5881 |   0.588 | Pass                                                       |
|  10 | `−1.0 < (R2+R1)/(R2−R1) < −0.1` for G1N                |                               −0.256620 |  −0.257 | Pass                                                       |
|  11 | `0.17 < dPN/f < 0.45`                                  |                                0.300409 |   0.300 | Pass                                                       |
|  12 | `1.5 <                                                 |                               fG1P/fG1N |  < 3.0` | 4.136412                                                   | 2.425 | **Does not pass printed definition; Table 1 inconsistent** |
|  13 | `0.3 < f1/f < 0.7`                                     |                                0.404701 |   0.405 | Pass                                                       |
|  14 | `350 < HKG1P < 500`                                    |                                     440 |     440 | Pass                                                       |
|  15 | `0.2 < dF2/LD < 0.5`                                   |                                0.394520 |   0.394 | Pass                                                       |

Condition 5 is the clearest source contradiction. Surfaces 1–2 give `fG1P = 453.812077 mm`, while L1 gives `f1 = 237.937023 mm`, so the printed ratio is 1.907278. Table 1's 0.772 is instead reproduced by dividing G1P's focal length by the approximately 588 mm system focal length. No such substitution is made in the data.

Condition 12 inherits a second Table 1 inconsistency. The actual G1N surfaces 5–6 give `fG1N = −109.711528 mm`, so `|fG1P/fG1N| = 4.136412`. Table 1 prints `fG1N = −187.104 mm`, essentially the negative of the preceding positive E2 focal length, and its reported condition-12 value follows that erroneous number. The base and tighter 12a/12b ranges therefore fail under the printed definition for the actual prescription; the same is true of 5a/5b for condition 5. These are documentary contradictions, not changes applied to Example 4.

Condition 15 uses the source-defined axial distance from the image-side vertex of L2 to the image plane.
The current model traces G physically and does not remove it. Summing the rounded Numerical Data 4 spacings from surface 16 through the image plane gives `dF2 = 187.31 mm` and `dF2/LD = 0.394520`. Table 1 gives the higher-precision `dF2 = 187.294 mm` and `LD = 474.779 mm`, yielding 0.394487 and printing as 0.394. The current physical model also has 187.31 mm from the L2 rear vertex to its image plane. The old
186.55 mm omission-normalized value is superseded; it is not substituted into the source condition.

## Image Stabilization

Paragraph 0024 divides L3 into a fixed positive L3A, a negative L3B that moves transversely for image-blur correction, and a fixed L3C. Claims 13–15 preserve the same basic arrangement and keep the third lens unit fixed during axial focusing.

For Example 4, Figure 4A identifies E9/E10 as positive L3A and E11/E12 as negative L3B. Their independently computed cemented focal lengths are +279.954428 mm and −763.157302 mm, respectively, matching the power signs stated for those subunits. The data annotations now expose those source-facing names directly instead of generic D2/D3 labels.

The patent does not publish the transverse displacement used for stabilization. The LensVisualizer prescription therefore models the centered optical state only and does not invent an IS decenter distance.

## Verification Summary

Independent reduced-angle tracing of the final TypeScript surfaces gives an EFL of 587.932441 mm and a BFL of 80.573809 mm from surface 29. The patent's rounded values are 588.00 mm and 80.59 mm. The authored surface-1-to-image track is 475.54 mm with the filter plate G in place; the patent's 474.78 mm total length uses the air-equivalent BF.

The sequential y–ν basis trace and independently multiplied ABCD matrix agree to machine precision, and the cardinal-factorization check differs by only `2.78 × 10⁻17`. Surface-by-surface Petzval summation using `φ/(n·n′)` gives `−4.2618813 × 10⁻5 mm⁻1`, corresponding to a Petzval radius of approximately −23.464 m.

The modeled semi-diameters remain geometry-valid at both infinity and the reconstructed close-focus state under the current edge-thickness, actual-rim-slope, cross-gap, and off-axis-containment criteria. These aperture dimensions are authoring inferences; the patent itself publishes neither the clear semi-diameters nor a physical stop diameter.

## Original Shape and Glass Review — 2026-10-30

The exact original `patents/US20190041605A1.pdf` supplies Numerical Data 4 on PDF p. 14 (printed p. 7),
matching Fig. 4A/4B on PDF p. 5 (sheet 4), and Table 1 on PDF p. 15 (printed p. 8). Every source
R/d row, medium pair and relative partial-dispersion row was checked directly. Paragraph 0032 on
PDF p. 10 explicitly defines the material d reference and absolute θgF ratio; paragraph 0027 on
PDF p. 9 prints d 587.56, g 435.835, C 656.27 and F 486.13 nm. The source publishes no absolute
per-medium C/F/g index. All 17 genuine `dPgF` values are retained; G’s stored −0.00062 differs from
the exact derived −0.00061652 by only 0.00000348, within the spec’s 0.0003 retention tolerance.
A published partial-dispersion ratio does not identify a material as anomalous; the three existing
APD tags remain inferred, and product-material identities stay qualified.

The native page bitmap is 2560 × 3300 px at 300 ppi. The unresampled optical crop is 1620 × 630 px;
about 1486 px from first vertex to image over the 475.54 mm physical path gives 3.125 px/mm,
or 0.320 mm/px. Practical rim uncertainty is ±0.8 mm. Historical 600 dpi renders and current 2×/4×
crops are reading enlargements, not higher native resolution. Optical boundaries are separated
from group brackets, IS/focus arrows, leaders, stop strokes and rays.

| Surfaces     | Adopted clear sd (mm) | Resolved outer sd (mm) |
| ------------ | --------------------- | ---------------------- |
| 1–2          | 74                    | —                      |
| 3 / 4        | 45.5 / 44.8           | —                      |
| 5–6          | 44.8 / 44.5           | —                      |
| 7–8          | 43                    | —                      |
| 9–10         | 33.2                  | —                      |
| 11 / 12 / 13 | 32.5 / 32.5 / 32.4    | —                      |
| 15–16, focus | 22.5                  | —                      |
| 17–19        | 17.5                  | —                      |
| 20 / 21 / 22 | 16.1 / 16.1 / 14.6    | S22: 16.1              |
| 23 / 24      | 14.5 / 15.5           | S23: 15.5              |
| 25–26        | 15.2                  | —                      |
| 27–29        | 18                    | —                      |
| 30–31, G     | 22                    | —                      |

Nineteen existing caps change. Two resolved shoulders preserve S22/S23’s existing optical caps;
no opaque bonded-interface land is introduced. Every element, concave end, the four cemented
interfaces and G was inspected. The source’s zero D4 air interval is retained rather than
inventing cement; the opposing radii open outward and retain about 0.096668 mm at the rim.
The source does not resolve separate shoulders at the other small concave ends, so none is invented.
The actual generated SVG at approximately the native figure scale was compared with all groups.

Rejected trials preserve geometric limits: full S22/S23 optical caps at the blank heights need
4.20 mm sag intrusion across D22 = 4.13 mm, above the unchanged default allowance 3.717 mm.
Uniform 33 mm E6/E7 caps make E7’s edge thickness −0.250 mm; the 32.5/32.4 mm caps retain a
finite connected positive edge instead. No R/d, inferred cut, aperture, cam or tolerance changes
are used to force agreement. All 201 sampled focus states have 17 finite closed connected contours
and zero hidden renderer trimming under the unchanged default 0.90 gap guard.

The source infinity state passes surface, image-circle, project 3% aperture and ≥99% corner-field
checks. The unchanged derived iris is 22.427369340 mm: project paraxial f/4.12 versus independent
real input-diameter f/4.211719224, a convention-dependent difference rather than a source iris
measurement. A 101-focus × three-field × 97-pupil census traces 29,391 rays with no seed/aim
failures; all axial samples and all chiefs clear. Its 401 off-axis `noBracket` entries before the
first surface independently meet the unrestricted first sphere outside its 74 mm cap; zero
inside-cap misses are unexplained. The baseline has the same 401 bounded cap misses.

The existing L2 cam remains a constrained reconstruction. Its actual close object-to-image
conjugate is 4200.271808 mm rather than an exact published 4.2 m state. Finite field heights use
Gaussian magnification; this does not establish a production focus map. Physical infinity focus
is 81.322937 mm behind R29 versus the source physical path 81.35 mm, retaining −0.027063 mm
defocus without fitting a rear gap. Source BF/LD use an air-equivalent convention, while the
current G plate is physical. Only centered IS is encoded; numerical transverse actuator travel,
moved-state clearance and attached-converter combinations are unverified.

Source condition (5)/(12) and unit-L3 focal-power contradictions are formalized as unresolved
`source.errata`. The matching unprinted d24 trial is a rejected sensitivity hypothesis; all
published geometry remains unchanged. Source fidelity, sampled runtime behavior and production
correlation are separate findings.

## Source-Stated Catalog Focal Length — 2026-10-30

The catalog design focal length copies the source-stated 588 mm from PDF p. 14 (Numerical Data 4, Various data / focal length, printed page 7). The computed 587.932441008 mm EFL remains an independent runtime result. The source group-power contradictions and all original geometry/controls remain unchanged. This metadata follow-up adds no original shape/glass review and changes no R/d, asphere, stop, zoom/focus gap or aperture rule.

## Sources

1. Shinichiro Saito and Makoto Nakahara, **US 2019/0041605 A1, “Optical System and Image Pickup Apparatus,”** published February 7, 2019. Primary prescription source: Figure 4A; ¶0024–0027; ¶0030–0067; Numerical Data 4; Table 1; claims 13–15.
2. Canon Camera Museum, **EF600mm f/4L IS III USM**, product record and specifications: <https://global.canon/en/c-museum/product/ef475.html>.
3. Canon Camera Museum (Japanese), **EF600mm F4L IS III USM**, manufacturer statement identifying two fluorite elements and one Super UD element: <https://global.canon/ja/c-museum/product/ef475.html>.
4. HOYA Corporation, **Optical Glass / Optical World**, used for PCD51, NBFD15-W, FD60-W, and FCD100 coordinate checks, including HOYA's NBFD15-W / FD60-W transmittance-improvement notice: <https://www.hoya-opticalworld.com/>.
5. SCHOTT, **N-LASF44 optical-glass datasheet**, used for the E6 coordinate check: <https://media.schott.com/api/public/content/bd4fa2fe91a04937b7de073bea46cfa9>.
6. OHARA Inc., **Optical Glass Catalog and legacy datasheets**, used for S-NPH53, S-NPH4, S-NBH53, S-LAH59, and S-NBH56 coordinate checks: <https://www.ohara-inc.co.jp/en/product/catalog/>.
7. CDGM, **Optical Glass Data Sheet**, June 2022, H-ZBaF4, used as a qualified C/d/F spectral proxy while preserving the patent-derived g-line correction.
8. I. H. Malitson, “A redetermination of some optical properties of calcium fluoride,” _Applied Optics_ 2 (1963), used only as an independent CaF2 dispersion check.

## Scoped source-partial and catalog follow-up — 2026-10-31

Retain the actual **2026-10-30** complete original shape/glass review and earlier Aug 20/Aug 21/Oct 4 records. This narrow comparison directly checks US20190041605A1 Numerical Data 4, PDF page 14 / printed 7, source S1/S15/S21 (E1/E8/E12): **nd 1.59349/νd 67.00/θgF0.5361**. ¶0032 on page 10 defines θgF=(Ng−NF)/(NF−NC) and νd=(Nd−1)/(NF−NC); ¶0027 page 9 specifies d587.56/g435.835/C656.27/F486.13 nm. These are absolute partial ratios, not a source normal-line residual. The retained dPgF+0.004994 converts the published θ through the engine line0.6438−0.001682νd. Figure 4A page 5 confirms the free-air E1/E8 and E11–E12 cemented interface atS21, plus the separate G block. Native pages are2560×3300 at 300 ppi; crop enlargement adds no source detail. No separate source cement/resin medium or absolute C/F/g table is invented.

The proposed M-PCD51 replacement is rejected after considering the full source constraints. Existing PCD51 evaluates nd 1.593493092/νd 67.001846/PgF 0.536645275; M-PCD51 gives1.592013746/67.022703/0.535869111. The alternative reduces raw partial error from+0.000545275 to−0.000230889, but worsens source nd by−0.001476254 and the source-implied C–F span0.00885805970: current0.00885786178 versus alternate0.00883303296. Effective borrowed-curve νd moves67.001497→67.189832 against source 67.00.

Both runtime candidates already reproduce θgF0.5361 because the source-derived dPgF remains authoritative at g. Thus the raw partial improvement does not establish better traced source accuracy. The retained official HOYA20260707 AGF distinguishes PCD51 row 694 from molding-grade M-PCD51 row 7214; no source manufacturing process or supplier is identified by either name. Keep all three PCD51 assignments and all 17 genuine partial fields, including G. Data remains byte-identical; every channel, geometry/control and earlier limitation remains unchanged. Only repeated proxy wording is cleaned up, and this scoped negative decision adds no complete source-shape review count.
