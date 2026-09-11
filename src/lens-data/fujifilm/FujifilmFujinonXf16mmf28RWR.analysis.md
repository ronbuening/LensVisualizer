# FUJIFILM FUJINON XF 16mm f/2.8 R WR — Optical Analysis

## Patent Reference and Design Identification

**Patent:** US 2020/0073096 A1\
**Filed:** August 8, 2019\
**Priority:** August 29, 2018\
**Published:** March 5, 2020\
**Inventor:** Ryosuke Nagami\
**Applicant / Assignee:** FUJIFILM Corporation\
**Title:** *Imaging Lens and Imaging Apparatus*\
**Embodiment analyzed:** Example 3

The prescription modeled here is Example 3 of US 2020/0073096 A1. The patent does not name the production XF16mmF2.8 R WR, so the product association is an author inference rather than a manufacturer-confirmed identification. The correlation is nevertheless specific: Example 3 has ten elements in eight air-separated physical groups, two physical aspherical elements, a single internal positive focusing element, a design focal length of 16.48 mm, and a design F-number of 2.88. FUJIFILM specifies the production XF16mmF2.8 R WR as a 16 mm f/2.8 X-mount lens with ten elements in eight groups, including two aspherical elements, and an inner-focusing system driven by a stepping motor.

The production and patent field specifications are intentionally kept separate. FUJIFILM gives an 83.2° angle of view for the production lens, whereas Example 3 gives a maximum total design field of 89.2° at infinity. The data therefore retains the patent field as the modeled rectilinear field rather than treating the rounded production specification as a prescription constraint.

The timing is also compatible with the correlation without proving it. The patent claims Japanese priority from August 29, 2018, and FUJIFILM lists March 20, 2019 as the production lens release date. The US publication followed on March 5, 2020.

No dimensional scaling is applied. The modeled prescription remains at patent scale, `s = 1.0`: the exact design focal length is 16.479792674 mm while the catalog focal length remains 16 mm, and the design aperture is FNo 2.88 while the marketed aperture is f/2.8.

## Optical Architecture

Example 3 is a three-group wide-angle prime with a positive / positive / negative main-group power sequence. The patent divides the positive first group G1 around the aperture stop: negative G1a precedes the stop and positive G1b follows it. The element order is therefore:

1. G1a: L11, L12, L13;
2. aperture stop;
3. G1b: cemented L14+L15, L16, cemented L17+L18;
4. G2: L21, the sole focusing element;
5. G3: L31, the fixed negative rear group.

Independent d-line group-matrix calculations from the final data give focal lengths of +23.905275 mm for G1, +35.518739 mm for G2, and -59.794591 mm for G3. Within G1, G1a is net negative at -65.875491 mm and G1b is net positive at +27.120158 mm. These are group-level paraxial quantities and are distinct from the isolated focal lengths of the individual elements listed below.

The principal architectural choice is the use of a single positive biconvex element as the moving G2 focus group while the larger front group and the negative rear group remain fixed. Patent ¶0042 states that only G2 moves toward the object when focusing closer. Patent ¶0043 links that arrangement to a small moving focus unit, and ¶0067 specifically identifies a one-lens biconvex G2 as a favorable form for a compact focusing group.

The patent calls the positive / positive / negative arrangement a “telephoto type configuration” in ¶0045. Under the Lens Patent Decomposition taxonomy, however, “telephoto” is reserved for `TL/EFL < 1`. The normalized plate-omitted model has `TL/EFL = 3.611667894`, so the data is not classified as telephoto. It is likewise not retrofocus under the project criterion: the independently computed Gaussian back focal distance is 14.082318275 mm, giving `BFD/EFL = 0.854520354`, below unity. The authored surface-19-to-image air-equivalent spacing is 14.079538095 mm; that is the normalized model image-plane spacing rather than the Gaussian BFD. The patent's descriptive terminology is therefore preserved as a source statement but not adopted as the project architecture label.

## Element-by-Element Analysis

### L11 — Negative Meniscus

`nd = 1.53996`, `νd = 59.73`. Glass: `540597 — barium crown class`. Isolated-element `f = -65.693510 mm`.

L11 is the object-side negative meniscus of G1a. Patent ¶0046 requires the first lens to be negative with an object-side surface convex toward the object. Paragraph 0047 associates that front negative-meniscus form with moving the entrance pupil toward the object side and with favorable control of astigmatism, distortion, and peripheral illumination in a wide-angle system.

Its negative standalone power begins the diverging front section. In the completed three-element G1a, that negative tendency remains dominant even after the positive L13, giving the verified G1a focal length of -65.875491 mm.

### L12 — Negative Meniscus with Two Aspherical Surfaces

`nd = 1.51633`, `νd = 64.06`. Glass: `516641 — crown coordinate class`. Isolated-element `f = -29.581399 mm`.

L12 is the second negative element in G1a and carries the first two aspherical surfaces of the design, 3A and 4A. Its position between L11 and the positive L13 places both aspheric surfaces in the strongly diverging front section, where ray heights remain substantial.

The patent does not assign individual aberration terms to L12. The defensible interpretation is therefore limited to its structural role: L12 supplies additional negative power in G1a while its two non-spherical surfaces provide high-order shape freedom before the stop.

### L13 — Positive Meniscus

`nd = 1.72916`, `νd = 54.68`. Glass: `729547 — lanthanum crown class`. Isolated-element `f = +36.271954 mm`.

L13 is the positive member of G1a immediately before the aperture stop. It partly recovers the convergence lost through L11 and L12, although G1a as a whole remains negative. The stop lies directly after this three-element section.

Patent ¶0050 discusses the power of G1a in relation to G1 and the adjacent stop: the prescribed ratio is intended to restrain stop diameter while retaining back focus. L13 is therefore the final positive balancing element before the system enters the stop-centered G1b section.

### L14 + L15 — First G1b Cemented Doublet (D1)

**L14:** `nd = 2.00069`, `νd = 25.46`. Glass: `001255 — high-index flint class`. Isolated-element `f = +9.931129 mm`.\
**L15:** `nd = 1.72047`, `νd = 34.71`. Glass: `720347 — dense flint class`. Isolated-element `f = -14.260195 mm`.

L14 and L15 form the first cemented pair in G1b, positive first and negative second as specified in patent ¶0055 and ¶0066. The pair's verified cemented net focal length is +28.846736 mm. That cemented value is not the same quantity as either member's isolated focal length: L14 is strongly positive in isolation and L15 strongly negative, while the bonded pair remains moderately positive.

The doublet sits immediately behind the aperture stop. Patent ¶0055 notes that placing this cemented lens near the stop allows a smaller lens diameter, and ¶0053–¶0054 describes the use of cemented positive/negative combinations in G1 as part of the chromatic-correction strategy. The patent's conditional treatment of the pair is discussed separately below.

### L16 — Positive Meniscus with Two Aspherical Surfaces

`nd = 1.58313`, `νd = 59.38`. Glass: `583594 — barium crown coordinate class`. Isolated-element `f = +36.636468 mm`.

L16 is the positive single element between the two G1b cemented pairs. Surfaces 11A and 12A are aspherical. Patent ¶0066 explicitly permits a positive meniscus between the two cemented lenses, matching the Example 3 prescription.

Its placement gives G1b an additional positive contribution without adding another cemented interface. The two aspheric surfaces supply a second concentrated region of higher-order surface-shape control in the rear half of G1.

### L17 + L18 — Second G1b Cemented Doublet (D2)

**L17:** `nd = 1.84666`, `νd = 23.78`. Glass: `847238 — dense flint class`. Isolated-element `f = -9.014153 mm`.\
**L18:** `nd = 1.72916`, `νd = 54.68`. Glass: `729547 — lanthanum crown class`. Isolated-element `f = +12.497267 mm`.

L17 and L18 form the second cemented pair in G1b, negative first and positive second, as described in patent ¶0058 and ¶0066. Their verified cemented net focal length is -75.751714 mm. The doublet is therefore weakly negative as a bonded unit even though its rear member L18 is strongly positive when isolated.

Patent ¶0066 notes that the cemented surface of this second pair may be convex toward the object side and associates that geometry with lateral-chromatic correction. In Example 3, the L17/L18 interface is the positive-radius surface 14, consistent with that described form.

### L21 — Biconvex Positive Focusing Element

`nd = 1.83481`, `νd = 42.74`. Glass: `835427 — high-index lanthanum flint class`. Isolated-element `f = +35.518739 mm`.

L21 is the complete G2 group and the only element that moves during focusing. Because the group contains only this one element, its isolated-element focal length and G2 group focal length are the same within the model.

Patent ¶0042 states that G2 moves toward the object as focus moves from infinity toward the closest distance. Paragraph 0067 identifies a single biconvex lens as an available G2 form and associates that form with a compact, comparatively strong positive focusing group. The production lens is independently documented by FUJIFILM as using inner focusing driven by a stepping motor; the identification of L21 as the production moving element remains part of the patent-to-product correlation rather than a manufacturer statement.

### L31 — Negative Meniscus Rear Group

`nd = 1.85478`, `νd = 24.80`. Glass: `855248 — dense flint class`. Isolated-element `f = -59.794591 mm`.

L31 is the entire fixed G3 group. Its negative power establishes the final negative member of the patent's + / + / - main-group sequence.

Patent ¶0046 requires the most image-side lens surface to be convex toward the image side, and ¶0068 identifies a single negative meniscus with that orientation as an available G3 form. Paragraph 0047 connects the image-side convex final surface with suppression of astigmatism and distortion and with reduction of the off-axis chief-ray incidence angle at the image plane.

## Glass Identification and Selection

The patent publishes `Nd`, `νd`, and `θgF` coordinates but does not identify glass manufacturers or catalog names. The final data therefore uses conservative six-digit coordinate/class labels instead of promoting catalog-equivalent candidates to source-backed identities.

| Data glass label | nd | νd | Element(s) | Model use |
|---|---:|---:|---|---|
| 540597 — barium crown class | 1.53996 | 59.73 | L11 | front negative meniscus |
| 516641 — crown coordinate class | 1.51633 | 64.06 | L12 | two-surface aspheric negative meniscus |
| 729547 — lanthanum crown class | 1.72916 | 54.68 | L13, L18 | positive balancing elements |
| 001255 — high-index flint class | 2.00069 | 25.46 | L14 | strong positive member of D1 |
| 720347 — dense flint class | 1.72047 | 34.71 | L15 | negative member of D1 |
| 583594 — barium crown coordinate class | 1.58313 | 59.38 | L16 | two-surface aspheric positive meniscus |
| 847238 — dense flint class | 1.84666 | 23.78 | L17 | negative member of D2 |
| 835427 — high-index lanthanum flint class | 1.83481 | 42.74 | L21 | positive focusing element |
| 855248 — dense flint class | 1.85478 | 24.80 | L31 | fixed negative rear group |

An independent catalog comparison found public entries with close coordinate equivalence for these codes, but the patent itself remains vendor-neutral. The data accordingly records class/code identities only. No `nC`, `nF`, `ng`, or `dPgF` values are authored because Example 3 does not publish those quantities and the data does not infer them from a candidate vendor glass.

The patent does make explicit use of partial-dispersion ratios in conditional expressions (6) and (7) for the cemented lenses. That supports discussion of deliberate chromatic balancing, but it does not by itself justify labeling the design apochromatic or assigning anomalous-partial-dispersion behavior to any element. No such claim is made here.

## Focus Mechanism

The patent defines a one-degree-of-freedom inner-focus system. G1 and G3 remain fixed with respect to the image plane, while G2/L21 translates toward the object as focus moves closer (¶0042). FUJIFILM independently describes the production lens as an inner-focusing design driven by a stepping motor.

The data contains three focus keyframes:

| Focus state | DD15 (mm) | DD17 (mm) | Provenance |
|---|---:|---:|---|
| Infinity | 3.34 | 4.27 | patent Table 11 |
| Patent 1 m row | 3.10 | 4.51 | patent Table 11 |
| 0.17 m sensor-plane MFD | 1.437461429 | 6.172538571 | constrained reconstruction |

The first two rows are source data. The patent gives the 1 m state without expressly identifying its distance reference plane; numerical reconstruction shows that its rounded DD15/DD17 values are consistent with 1.000 m measured from surface 1 rather than from the physical sensor plane. In the data's sensor-plane focus coordinate, that state is therefore mapped to approximately 1.06049 m and stored at `focusT = 0.160303256`.

The 0.17 m endpoint is not patent-published. It is a `CONSTRAINED_RECONSTRUCTION` tied to FUJIFILM's production minimum-focus specification, which the manufacturer defines from the imaging/focal plane. Only G2 is allowed to move, and the adjacent-gap sum is constrained to the patent's invariant 7.61 mm. The resulting G2 translation from infinity is 1.902538571 mm objectward. The reconstructed model predicts an absolute paraxial magnification of 0.134283517, consistent with FUJIFILM's rounded 0.13× production specification.

No additional moving group or floating correction is introduced.

## Aspherical Surfaces

Example 3 uses four aspherical surfaces on two physical elements: 3A and 4A on L12, and 11A and 12A on L16. Table 12 supplies the coefficients.

The patent writes the conic term as

`z(h) = C h² / [1 + sqrt(1 - KA C² h²)] + Σ A_m h^m`,

with `C = 1/R` and `h` and `z` in millimeters. Accordingly, A4 has units mm⁻³, A6 mm⁻⁵, A8 mm⁻⁷, and A10 mm⁻⁹. LensVisualizer uses the standard form containing `(1 + K)` under the square root, so the conversion is `K = KA - 1`. Example 3 has `KA = 1` on all four aspheres; consequently every authored conic constant is `K = 0`.

| Surface | K | A4 | A6 | A8 | A10 |
|---|---:|---:|---:|---:|---:|
| 3A | 0 | +2.0475055E-04 | -2.8858581E-06 | +2.6924719E-08 | -1.1080869E-10 |
| 4A | 0 | +2.2955992E-04 | -2.8272217E-06 | +2.6938117E-08 | -1.4157104E-10 |
| 11A | 0 | +1.9239198E-05 | +3.6727167E-07 | +1.5572212E-07 | -1.0598583E-09 |
| 12A | 0 | +1.4097228E-04 | +5.1002854E-07 | +1.3065139E-07 | -2.3152786E-10 |

All four surfaces use positive fourth-order coefficients, with higher-order terms shaping the peripheral departure. Because the L12 and L16 base curvatures have different signs, the coefficient signs alone should not be read as identical physical bulging directions or as proof of a particular aberration contribution; the patent does not assign such surface-by-surface roles.

The model is unscaled (`s = 1.0`). Therefore the aspheric coefficients are retained exactly as published; the general scaling transform `A_p,scaled = A_p,patent / s^(p-1)` produces no numerical change here, and `K` is unchanged.

Example 3 publishes no surface semi-diameters or clear-aperture heights. The model semi-diameters are inferred values, so no “patent-aperture” aspheric departure is quoted.

## Conditional Expressions and Source Correction

The patent uses a family of conditional expressions to delimit group powers, cemented-pair glass properties, system length, and back focus. Independent calculation from the final Example 3 data reproduces the published Table 21 values at the table's stated precision except for the documented condition-(5) source error. The values below use the independently computed EFL of 16.479792674 mm rather than the rounded Table 10 value of 16.48 mm.

| Condition | Patent bound | Example 3 computed | Result |
|---|---|---:|---|
| (1) `f/f2` | 0.35 < x < 0.75 | 0.463975 | satisfies |
| (2) `f1/f1a` | -0.5 < x < 0.3 | -0.362886 | satisfies |
| (3) `f1/f1b` | 0.4 < x < 0.95 | 0.881458 | satisfies |
| (4) `N1bp` | 1.8 < x < 2.1 | 2.00069 | satisfies |
| (5) `ν1bp - ν1bn` | -50 < x < 0 | -9.25 | satisfies; also satisfies (5-1) |
| (6), D1 positive | 0.645 < x < 0.72 | 0.659468 | satisfies |
| (6), D2 positive | 0.645 < x < 0.72 | 0.642934 | does not satisfy individually |
| (7), D1 negative | 0.645 < x < 0.72 | 0.645978 | satisfies |
| (7), D2 negative | 0.645 < x < 0.72 | 0.663344 | satisfies |
| (8) `f/f1` | 0.4 < x < 1 | 0.689379 | satisfies |
| (9) `DG1/f` | 1.6 < x < 2.5 | 2.023691 | satisfies |
| (10) `f/f3` | -0.8 < x < -0.05 | -0.275607 | satisfies |
| (11) `DS/(f tan ω)` | 2 < x < 2.85 | 2.464392 | satisfies |
| (12) `TL/(f tan ω)` | 3 < x < 4.5 | 3.662452 | satisfies |
| (13) `Bf/(f tan ω)` | 0.8 < x < 1.1 | 0.866365 | satisfies |

For condition (6), patent ¶0054 requires that at least one cemented lens contain positive and negative members satisfying expressions (6) and (7). The first cemented pair D1 meets both. The second positive member's 0.642934 result falls just below the 0.645 lower bound, so it is not represented as satisfying (6) individually.

Table 21 prints condition (5) for Example 3 as -29.22. That value is inconsistent with the patent's own definition of the most-object-side G1b cemented pair: L14 has `νd = 25.46` and L15 has `νd = 34.71`, giving `25.46 - 34.71 = -9.25`. The printed -29.22 instead equals `25.46 - 54.68`, using L18 rather than L15 as the second operand. The analysis therefore preserves -29.22 as the source's printed value while using -9.25 as the definition-correct result. No prescription field depends on the erroneous table value.

## Verification Summary

Independent reduced-angle and ABCD calculations performed from the final TypeScript surface arrays give an effective focal length of 16.479792674 mm and a Gaussian back focal distance of 14.082318275 mm, reproducing Example 3 Table 10 at its 0.01 mm precision. The corresponding principal-plane offsets are +22.852720796 mm from surface 1 for the front principal plane and -2.397474399 mm from surface 19 for the rear principal plane under the model sign convention. The modeled stop and entrance-pupil geometry give FNo 2.880000235, reproducing the patent's FNo 2.88.

The patent's optional parallel plate PP is not included as a lens element. Paragraph 0039 identifies PP as a no-power filter/cover-glass surrogate that may be omitted. The model therefore replaces the physical 11.10 mm air + 2.85 mm plate at `n = 1.51633` + 1.10 mm air path with a 14.079538095 mm air-equivalent rear spacing from surface 19 to the image plane. This moves the normalized model image plane 0.970461905 mm objectward relative to the patent's physical Sim plane while preserving the paraxial optical path.

The patent also publishes no stop diameter or surface semi-diameters. The modeled stop semi-diameter, 4.084637 mm, is back-solved from the Example 3 F-number and verified entrance-pupil magnification; it is not a source-published aperture. The remaining semi-diameters are likewise modeling inferences based on the patent Figure 3 silhouette, paraxial ray envelopes, and edge-thickness, actual-rim-slope, cross-gap, containment, and no-trim geometry constraints.

The final inferred aperture set passes independent geometry checks at infinity, at the patent 1 m state, and at the reconstructed 0.17 m endpoint. The verified minimum element rim thickness is 0.761070 mm, and the largest modeled rim-slope angle is 62.860561° at surface 4A. These are model-validation results, not patent dimensions.

Surface-by-surface Petzval contributions computed as `φ/(n·n′)` sum to 0.006339550471 mm⁻¹, corresponding to a signed Petzval radius of -157.739891 mm under the project's `R_P = -1/ΣP` convention. This is a computed first-order field-curvature quantity, not a patent-stated value.

## Sources and References

1. Ryosuke Nagami, **US 2020/0073096 A1**, *Imaging Lens and Imaging Apparatus*, FUJIFILM Corporation, published March 5, 2020. Example 3: FIG. 3, FIG. 8, Tables 9–12 and 21; especially ¶0039–¶0047, ¶0050–¶0068, ¶0072–¶0078, and ¶0083.
2. FUJIFILM, **FUJINON XF16mmF2.8 R WR — Product Overview**: <https://www.fujifilm-x.com/en-us/products/lenses/xf16mmf28-r-wr/>.
3. FUJIFILM, **XF16mmF2.8 R WR Lens Manual / Specifications**: <https://dl.fujifilm-x.com/support/manual/lenses/lens_xf16mmf28_manual_01.pdf>.
4. FUJIFILM Japan, **フジノンレンズ XF16mmF2.8 R WR** (production release date and product information): <https://www.fujifilm-x.com/ja-jp/products/lenses/xf16mmf28-r-wr/>.
5. OHARA, **Optical Glass Pocket Catalog / Technical Catalog**: <https://www.ohara-inc.co.jp/en/product/technology/>.
6. HOYA, **Optical Glass / TAFD40-W data**: <https://www.hoya-opticalworld.com/common/pdf2018/TAFD40-W.pdf>.
7. SCHOTT Advanced Optics, **Optical Glass Catalog**: <https://www.us.schott.com/shop/advanced-optics/en/search/>.
8. HIKARI (Nikon), **Optical Glass Catalog**: <https://www.nikon.com/business/components/lineup/materials/optical-glass/catalog/>.
9. CDGM, **Optical Glass Catalog**: <https://www.cdgmgd.com/accessory/2019-04-01/client/www.cdgmgd.com/22346a49-2c13-41a5-afa1-57c98287068c.pdf>.
10. SUMITA Optical Glass, **Optical Glass Data Book**: <https://www.sumita-opt.co.jp/download_files/en/data/glassdatabook_ver14.02.00.pdf>.

The catalog sources support coordinate-equivalence checks only. Because the patent names no glass supplier or catalog type, the final data file retains vendor-neutral coordinate/class labels.


## Integration Audit — 2026-09-11 UTC

Inspected the exact local US 2020/0073096 A1, PDF page 4, Fig. 3, rotated 90 degrees at 600 dpi; screening crop `0.21,0.405,0.665,0.765`. Retained the existing SDs. The apparent 13.8 mm L21 result includes non-optical ink; direct inspection gives approximately 10.2 mm, consistent with the 10.5/10.3 mm authored surfaces. All 10 elements resolve through coordinate-compatible catalog curves; six-digit labels do not identify a production vendor or manufacturing process.

Display name checked against the manufacturer product designation; the existing FUJINON XF name, aperture and R/LM/OIS/WR suffixes are correct. Structured patent assignee metadata uses the existing canonical `Fujifilm Corporation` spelling.
