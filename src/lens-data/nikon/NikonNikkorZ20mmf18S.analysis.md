# NIKON NIKKOR Z 20mm f/1.8 S

## Patent Reference and Design Identification

**Patent:** WO 2021/117429 A1

**Application Number:** PCT/JP2020/042794

**Priority:** JP 2019-223170, 2019-12-10

**Filed:** 2020-11-17

**Published:** 2021-06-17

**Inventor:** Fumiaki Ohtake

**Applicant:** Nikon Corporation

**Title:** Optical System, Optical Device, and Method for Manufacturing Optical System
**Embodiment analyzed:** Example 1

The prescription is Example 1 of WO 2021/117429 A1, transcribed at its native scale. The patent gives a five-functional-group optical system, the stop position, three focus states, five aspherical surfaces, and the complete refractive-index/Abbe-number prescription in Table 1 (¶¶0072–0081; Fig. 1). The data file adopts this embodiment as the production correlation for the NIKON NIKKOR Z 20mm f/1.8 S. This is an engineering correlation rather than a manufacturer statement that the commercial lens is Example 1.

Several independent characteristics converge. Nikon specifies the production lens as a 20 mm f/1.8 full-frame Z-mount lens with 14 elements in 11 groups, three ED elements, three aspherical lens elements, a 94° FX angle of view, 0.20 m minimum focus distance from the focal plane, 0.19× maximum reproduction, and a multi-focusing system.[1] The patent example has 14 physical lens elements in 11 air-separated groups, three elements at nd = 1.49782 and νd = 82.57, three physical aspherical elements, a published 94° full field, and two independently moving focus groups. Its paraxial design values are EFL = 19.7525565 mm and FNO = 1.850; its near-focus state computes to |β| = 0.184392 at 0.200961 m from the image plane. Nikon's 2020 release further states that its multi-focusing system uses multiple AF drive units to control multiple focus lens groups, consistent with the two-group patent kinematics.[2]

The marketing and design quantities remain distinct. The commercial designation is 20 mm f/1.8, while the modeled prescription is 19.7525565 mm at F/1.850. No scale factor has been applied.

## Optical Architecture

Example 1 is an asymmetric ultra-wide-angle prime organized by the patent into five functional lens groups, G1 through G5. The physical prescription contains 14 lens elements in 11 air-separated groups. LensVisualizer carries 15 optical-media entries because the patent's single hybrid L12 element is modeled as a glass substrate plus its bonded resin layer; `elementCount` therefore remains 14.

The front group G1 (GA) is negative, with a computed focal length of -21.4156 mm. It contains L11, the hybrid L12, and the L13–L14 cemented pair. G2 (GF) is the single positive L21 focusing element, f = +54.9147 mm. G3 is a fixed positive relay/core group, f = +33.6325 mm, containing L31 through L37; the aperture stop lies inside this functional group between L32 and L33. G4 is the weak negative L41 focusing group, f = -313.9163 mm. G5 is the fixed negative aspherical L51 group, f = -240.3679 mm. The patent's compound rear groups compute to fC = +36.8800 mm for G3+G4+G5 and fB = +32.7421 mm for G2+G3+G4+G5.

This is not classified as retrofocus under the project rule `BFD > EFL`: the infinity back focal distance is 13.3071 mm versus EFL 19.7526 mm. It is likewise not telephoto under the project rule `TL/EFL < 1`; the first-surface-to-image distance is 119.4255 mm. The useful architectural description is therefore a strongly asymmetric five-group wide-angle system with a negative front group, a positive floating group, a positive fixed core, and two weak negative rear groups rather than a classical retrofocus label.

The principal design distinction is the dual floating focus system. G2 shifts toward the image while G4 shifts toward the object as focus moves closer. This changes two internal conjugates without translating the complete optical system, and it is the feature most directly aligned with Nikon's production Multi-FS description.[2]

## Element-by-Element Analysis

### L11 — Negative Meniscus

**nd = 1.69680, νd = 55.53. Glass: S-LAL14 (OHARA; coordinate match). Isolated f = -43.3362 mm.**

L11 is the large front negative meniscus of G1. Its negative isolated power is consistent with the net negative power of GA. The data file's S-LAL14 assignment is a catalog-coordinate match, not evidence that Nikon used that exact commercial melt; OHARA's current S-LAL14 data reproduce the stored d-line coordinate and the stored C/F/g-line indices.[4]

As the first refracting element, L11 participates in the large angular transformation required by a 94° full-field design. The patent also uses its two radii in conditional expression (5), which constrains the front-element shape factor (¶0030–0032).

### L12 — Hybrid Negative Meniscus

**L12 glass substrate: nd = 1.77250, νd = 49.62. Glass: 773496 class (HIKARI J-LASF016 coordinate representative). Isolated f = -66.6316 mm.**

**L12 resin layer: nd = 1.51380, νd = 52.97. Glass: Unmatched hybrid resin. Isolated f = -223.7499 mm.**

L12 is one physical lens element in the patent, but its substrate and 0.050 mm bonded resin layer are distinct optical media. The two entries are therefore joined as hybrid H12 in the data file. Their actual combined power in the prescription is f = -51.4864 mm; that value is distinct from either isolated-medium focal length.

The rear resin surface, 5A, is aspherical. The resin identity is not recoverable from the patent's nd/νd pair and remains explicitly `Unmatched`. No catalog spectral line data are attached to that layer. Conditional expression (6) constrains the shape of the L12 substrate (¶0033–0035).

### L13–L14 — Cemented Biconcave/Positive-Meniscus Pair

**L13: nd = 1.49782, νd = 82.57. Glass: J-FKH1 (HIKARI; coordinate match). Isolated f = -56.5585 mm.**

**L14: nd = 1.95375, νd = 32.33. Glass: J-LASFH21 (HIKARI; coordinate match). Isolated f = +51.3152 mm.**

L13 is biconcave and strongly negative in isolation; L14 is a dense, low-Abbe positive meniscus. At their cemented interface the powers almost cancel: the actual L13+L14 cemented pair has a net focal length of approximately +902.834 mm. The pair therefore cannot be understood by adding the isolated focal lengths; the shared interface and in-situ indices matter.

The three 1.49782/82.57 elements in Example 1—L13, L34, and L35—numerically correspond to the production lens's three-element ED count. The data file uses HIKARI J-FKH1 as a coordinate match. HIKARI's current catalog gives the same nd/νd coordinate and dPgF = +0.0327.[3] This supports a low-dispersion, non-normal-partial-dispersion interpretation of the representative glass, but it does not establish Nikon's production melt.

### L21 / GF — Biconvex Positive Floating Group

**nd = 1.80400, νd = 46.60. Glass: J-LASF015 (HIKARI; coordinate match). Isolated f = +54.9147 mm.**

L21 alone constitutes G2/GF. Its isolated focal length is consequently also the focal length of the functional focusing group. During near focusing it moves imageward, changing D8 and D10 while the neighboring fixed groups remain at their published axial stations apart from source-rounding residuals.

The patent assigns particular importance to the focal length and magnification of GF: fF enters conditions (11) through (13), while βF enters conditions (14) and (15). This positive mover has a large effect on the conjugate structure; together with the counter-motion of G4, it also changes the system Gaussian focal length across the published focus states.

### L31–L32 — Cemented Positive/Negative Pair

**L31: nd = 1.95375, νd = 32.33. Glass: J-LASFH21 (HIKARI; coordinate match). Isolated f = +22.3501 mm.**

**L32: nd = 1.84666, νd = 23.80. Glass: J-SF03 (HIKARI; coordinate match). Isolated f = -28.5385 mm.**

L31 is a strong biconvex positive element cemented to the biconcave negative L32. The actual cemented pair is positive, f = +88.6316 mm, substantially weaker than L31 by itself. This pair begins fixed G3 and lies immediately ahead of the aperture stop.

Both media are high-index, relatively dispersive glasses in the representative catalog assignments. Their pairing supplies substantial refractive power near the stop while limiting the net power of the cemented unit.

### L33 — Biconcave Negative

**nd = 1.63980, νd = 34.55. Glass: J-SF7 (HIKARI; coordinate match). Isolated f = -30.5751 mm.**

L33 is the first refracting element after the aperture stop. Its biconcave negative power opposes the positive front portion of G3. Because it sits immediately behind the stop, changes in marginal-ray height across it are comparatively constrained by the aperture geometry; this makes its strong negative power useful within the fixed correction core without introducing a moving degree of freedom.

### L34 — Biconvex Positive

**nd = 1.49782, νd = 82.57. Glass: J-FKH1 (HIKARI; coordinate match). Isolated f = +31.9219 mm.**

L34 is the second of the three high-Abbe 1.49782/82.57 elements. It restores positive power after L33 while introducing a low-dispersion contribution within the fixed central group. Its catalog representative carries the same C/F/g-line data and +0.0327 dPgF value as L13 and L35.[3]

### L35–L36 — Cemented Positive/Negative Pair

**L35: nd = 1.49782, νd = 82.57. Glass: J-FKH1 (HIKARI; coordinate match). Isolated f = +28.9958 mm.**

**L36: nd = 1.95375, νd = 32.33. Glass: J-LASFH21 (HIKARI; coordinate match). Isolated f = -26.4130 mm.**

L35 is the third high-Abbe element and is cemented to the dense-flint negative meniscus L36. The actual cemented pair is nearly afocal, with net f = -872.386 mm. As with L13–L14, the weak net power masks large but opposing constituent powers.

This pairing places a high-Abbe positive component directly against a much lower-Abbe high-index negative component. The data therefore support a strong chromatic-compensation role, but no claim of apochromatic correction is made without a system-level chromatic residual calculation.

### L37 — Biconvex Positive

**nd = 1.96300, νd = 24.11. Glass: S-TIH57 (OHARA; coordinate match). Isolated f = +38.5060 mm.**

L37 is a dense biconvex positive element at the rear of fixed G3. OHARA S-TIH57 is an exact coordinate match to the stored nd/νd pair; the current OHARA datasheet also reproduces the stored C/F/g-line indices and dPgF = +0.0187.[5]

Together with the preceding positive/negative sequence, L37 leaves G3 with a moderate net positive focal length of +33.6325 mm despite the strong alternating constituent powers.

### L41 / G4 — Double-Aspherical Negative Meniscus Floating Group

**nd = 1.86100, νd = 37.10. Glass: L-LAH94 (OHARA; coordinate match). Isolated f = -313.9163 mm.**

L41 alone constitutes the weak negative G4 focusing group. Both of its surfaces, 24A and 25A, are aspherical. Near focus is reached with G4 moving 0.91571 mm objectward relative to infinity, opposite the imageward motion of G2.

The data file's L-LAH94 identification is an exact OHARA coordinate match. OHARA classifies L-LAH94 in its low-Tg molded-aspherical family, and its datasheet reproduces the stored C/F/g-line indices and dPgF = -0.0029.[6] That catalog fact makes the material assignment compatible with molded-asphere manufacture, but the patent does not establish that Nikon used L-LAH94 or a particular production process for L41.

### L51 — Double-Aspherical Negative Meniscus

**nd = 1.86100, νd = 37.10. Glass: L-LAH94 (OHARA; coordinate match). Isolated f = -240.3679 mm.**

L51 is the fixed rear negative group G5 and carries aspherical surfaces 26A and 27A. It shares the same patent nd/νd coordinate and the same catalog representative as L41. Its position at the rear of the system makes it the final refractive correction before the 13.307 mm image-space gap.

G4 and G5 are individually weak in first-order power compared with the central elements, but their position and aspherical surface freedom give the rear system additional control without adding further air-spaced groups.

## Glass Identification and Selection

The patent publishes nd and νd but no commercial glass names. The names in the data file are catalog-coordinate identifications or representatives. They are therefore catalog-derived annotations, not patent facts and not claims about Nikon's production melts. Current HIKARI and OHARA primary catalog data were checked against the stored line indices and dPgF values.[3–6]

| Data-file glass annotation | nd | νd | dPgF | Elements | Status |
|---|---:|---:|---:|---|---|
| S-LAL14 (OHARA) | 1.69680 | 55.53 | -0.0080 | L11 | Exact coordinate match |
| 773496 class; J-LASF016 representative | 1.77250 | 49.62 | -0.0093 | L12 substrate | Coordinate-class representative |
| Unmatched hybrid resin | 1.51380 | 52.97 | — | L12 resin | No defensible catalog identity |
| J-FKH1 (HIKARI) | 1.49782 | 82.57 | +0.0327 | L13, L34, L35 | Exact coordinate match |
| J-LASFH21 (HIKARI) | 1.95375 | 32.33 | +0.0004 | L14, L31, L36 | Exact coordinate match |
| J-LASF015 (HIKARI) | 1.80400 | 46.60 | -0.0087 | L21 | Exact coordinate match |
| J-SF03 (HIKARI) | 1.84666 | 23.80 | +0.0171 | L32 | Exact coordinate match |
| J-SF7 (HIKARI) | 1.63980 | 34.55 | +0.0051 | L33 | Exact coordinate match |
| S-TIH57 (OHARA) | 1.96300 | 24.11 | +0.0187 | L37 | Exact coordinate match |
| L-LAH94 (OHARA) | 1.86100 | 37.10 | -0.0029 | L41, L51 | Exact coordinate match |

The most conspicuous dispersion structure is the repeated 1.49782/82.57 high-Abbe material at L13, L34, and L35, numerically matching Nikon's count of three ED production elements.[1] In the catalog-resolved model these three entries also carry a significant positive dPgF. They are paired elsewhere with dense lower-Abbe glasses such as 1.95375/32.33 and 1.84666/23.80. This combination provides multiple independent levers for primary and secondary chromatic correction. The analysis does not label the complete lens apochromatic; that would require a system-level chromatic residual criterion, not merely the presence of low-dispersion and anomalous-partial-dispersion media.

## Focus Mechanism

The patent publishes all three focus states, so the focus model is `PUBLISHED`, not a reconstruction. G2/GF moves toward the image and G4 moves toward the object as focus is brought closer (¶0072; Fig. 1). G1, G3, and G5 remain fixed. The infinity, middle, and near rows are stored as exact focus keyframes.

| State | Object distance from first surface | D8 | D10 | D23 | D25 | Computed β |
|---|---:|---:|---:|---:|---:|---:|
| Infinity | ∞ | 3.83333 | 9.69148 | 7.98377 | 8.05896 | — |
| Middle | 583.6824 mm | 4.66117 | 8.86123 | 7.83192 | 8.21231 | -0.0324077 |
| Near | 81.5339 mm | 8.49234 | 5.03506 | 7.06806 | 8.97413 | -0.1843919 |

From infinity to the middle state, G2 moves 0.82784 mm imageward and G4 moves 0.15185 mm objectward. At the near state the corresponding displacements are 4.65901 mm imageward and 0.91571 mm objectward. The near state has a first-surface-to-image track of 119.42759 mm; adding the patent's 81.5339 mm object distance from the first optical surface yields 0.20096149 m from the image plane, consistent with Nikon's rounded 0.20 m minimum-focus specification. The computed near magnification magnitude 0.184392 is likewise consistent with Nikon's rounded 0.19× maximum reproduction ratio.[1] The Gaussian EFL changes from 19.75256 mm at infinity to 19.40337 mm at the published middle state and 17.81205 mm at the near state, so the moving-group prescription exhibits first-order focus breathing rather than constant system focal length.

Nikon identifies the commercial mechanism as Multi-FS and states that multiple AF drive units control multiple focus lens groups; its release also identifies STM drive.[2] Those manufacturer statements corroborate the multi-group character of the patent mechanism. They do not independently establish that the production actuators map one-for-one to patent groups G2 and G4.

## Aspherical Surfaces

Example 1 has five aspherical surfaces on three physical lens elements: 5A on the bonded resin layer of L12, 24A and 25A on L41, and 26A and 27A on L51. This matches the commercial specification of three aspherical lens elements in count, although the manufacturer does not identify the patent surface numbers.[1]

The patent writes the conic term with `sqrt(1 - κ·y²/R²)` (¶¶0066–0067). LensVisualizer uses the standard `sqrt(1 - (1+K)·y²/R²)` convention, so the authored conversion is `K = κ - 1`. Thus patent κ = 0 on surface 5 becomes K = -1, while patent κ = 1 on surfaces 24–27 becomes K = 0. No dimensional scale was applied, so the polynomial coefficients are unscaled source values.

| Surface | K | A4 | A6 | A8 | A10 | A12 |
|---|---:|---:|---:|---:|---:|---:|
| 5A | -1 | +2.259130E-06 | -1.461190E-09 | -3.652600E-11 | +7.291860E-14 | -1.225000E-16 |
| 24A | 0 | -2.369490E-05 | +4.594490E-08 | -2.401490E-10 | +4.370080E-14 | 0 |
| 25A | 0 | +1.038850E-05 | -1.052830E-08 | +2.537300E-10 | -2.362820E-12 | +5.655600E-15 |
| 26A | 0 | +5.703380E-05 | -5.965690E-07 | +1.497910E-09 | -2.219430E-12 | 0 |
| 27A | 0 | +6.206550E-05 | -5.081560E-07 | +1.341610E-09 | -1.314540E-12 | 0 |

Surface 5A is the explicitly modeled hybrid/composite asphere: the glass substrate and resin layer are separate optical media even though the patent counts L12 as one physical element. L41 and L51 each use aspheric freedom on both faces. Asphere departures are not quoted here; the patent does not publish clear apertures, and the semi-diameters in the data file are derived modeling values rather than source aperture data.

## Chromatic Correction Strategy

The modeled glass palette alternates high-Abbe positive or negative components with dense lower-Abbe partners across several groups. The most direct production-level evidence is Nikon's specification of three ED elements.[1] Example 1 contains exactly three elements at nd = 1.49782, νd = 82.57: L13 in G1 and L34/L35 in G3. In the data file these are represented by HIKARI J-FKH1, whose current catalog provides explicit C/F/g indices and dPgF = +0.0327.[3]

The design does not concentrate chromatic correction in one cemented achromat. Instead, the low-dispersion entries are distributed between the negative front group and the fixed central group, while dense flints appear in the L13–L14, L31–L32, and L35–L36 pairings. That distribution is consistent with a wide-angle system that must control chromatic errors over a large field while also accommodating two moving focus groups. This is an interpretation of the prescription and catalog data, not a specific patent claim about individual aberration allocations.

Because the final data file contains authoritative catalog line indices and dPgF for the resolved glasses, the model has more spectral information than nd/νd alone. Even so, no APO designation is assigned: the available evidence establishes material dispersion behavior, not a system-level apochromatic performance criterion.

## Conditional Expressions

The patent gives fifteen design inequalities for the first embodiment (¶¶0012–0059 and the summary table at ¶¶0098–0099). The values below were recomputed from the final prescription where possible. Conditions (7) and (8) use the patent-published 94° full field and FNO 1.850 because Example 1 does not publish the clear-aperture data needed to derive them independently from a physical stop.

| No. | Expression | Example 1 value | Patent range | Result |
|---:|---|---:|---|---|
| 1 | fB / fC | 0.887802 | 0.78 < x < 1.00 | Pass |
| 2 | BLDF / TL | 0.040192 | 0.010 < x < 0.160 | Pass |
| 3 | βB / βC | 4.143090 | 1.00 < x < 10.00 | Pass |
| 4 | -fA / f | 1.084193 | 0.50 < x < 1.50 | Pass |
| 5 | L11 shape factor | -1.621506 | -3.00 < x < 0.00 | Pass |
| 6 | L12 substrate shape factor | -3.231454 | -5.00 < x < -2.00 | Pass |
| 7 | 2ω | 94.000° | 60.00° < x < 130.00° | Pass |
| 8 | FNO | 1.850 | 1.20 < x < 3.00 | Pass |
| 9 | STL / TL | 0.492698 | 0.35 < x < 0.70 | Pass |
| 10 | Bf / TL | 0.111425 | 0.05 < x < 0.30 | Pass |
| 11 | fF / f | 2.780133 | 1.50 < x < 4.50 | Pass |
| 12 | fF / fB | 1.677190 | 1.00 < x < 3.00 | Pass |
| 13 | dF / TL | 0.272281 | 0.15 < x < 0.40 | Pass |
| 14 | 1 / βF | 0.241367 | 0.00 < x < 0.60 | Pass |
| 15 | (βF + 1/βF)^-2 | 0.052020 | x < 0.18 | Pass |

The complete set passes with the final TypeScript arrays and the patent's stated field/F-number inputs. The notation follows the patent's definitions in ¶0064.

## Verification Summary

Sequential height/reduced-angle tracing and an independent ABCD accumulation give EFL = 19.7525565 mm. The residual to the patent's more precise variable-spacing header value, 19.7523 mm, is +0.0002565 mm. The computed back focal distance from the last vertex is 13.3070787 mm, and the first-surface-to-image distance is 119.4255400 mm; both agree with the rounded patent values at source precision. The Petzval sum, evaluated surface by surface as `φ/(n·n′)`, is +0.00226617 mm^-1, corresponding to a reciprocal magnitude of 441.27 mm.

The patent does not publish semi-diameters or a stop diameter. The data file therefore uses derived semi-diameters and an inferred stop semi-diameter of 10.2622021 mm calibrated to the published FNO 1.850. These values are modeling choices, not source facts. Across infinity, published middle focus, and published near focus, the derived geometry has a minimum edge thickness of 0.473244 mm, a maximum actual rim slope of 50.275°, and a maximum shared-air-gap intrusion ratio of 0.562165. The on-axis marginal bundle and the viewer's default 0.6-field off-axis fan remain contained in all three states.

The same derived-aperture model does not pass a paraxial 47° full-field chief-ray containment test at the front of the lens. That does not contradict the patent's 94° image field: the authored semi-diameters are not source clear apertures, and the production optical/mechanical vignetting profile is not published in the numerical example. They should therefore be read as a validated LensVisualizer rendering/tracing model, not as Nikon mechanical drawings.

No patent source correction was required. No scale factor was applied. The selected example contains no sensor cover glass, filter, inactive dummy/flare-cutter plane, folded path, or other omitted plate requiring an air-equivalent rear-spacing correction. The only non-source geometry added by the data model is the inferred aperture/semi-diameter set described above.

## Sources and References

1. Nikon Corporation, **NIKKOR Z 20mm f/1.8 S** product specifications and lens construction: https://imaging.nikon.com/imaging/lineup/lens/z-mount/z_20mmf18s/
2. Nikon Corporation, **Nikon releases the fast, ultra-wide-angle prime NIKKOR Z 20mm f/1.8 S...**, 2020-02-12: https://www.nikon.com/company/news/2020/0212_lens_02/
3. HIKARI Glass Co., Ltd., **HIKARI ALL Catalog Data**, current catalog workbook: https://www.hikari-g.co.jp/optical_glass/catalog/document/HIKARI_ALL_Catalog_Data.xlsx
4. OHARA INC., **S-LAL14** current optical-glass datasheet: https://www.ohara-inc.co.jp/assets/en/product/pdf/eslal14.pdf
5. OHARA INC., **S-TIH57** current optical-glass datasheet: https://www.ohara-inc.co.jp/assets/en/product/pdf/estih57.pdf
6. OHARA INC., **L-LAH94** current low-Tg optical-glass datasheet: https://www.ohara-inc.co.jp/assets/en/product/pdf/ellah94.pdf
7. Nikon Corporation, **WO 2021/117429 A1**, Example 1, especially ¶¶0063–0067, ¶¶0072–0081, Table 1, and Fig. 1.
