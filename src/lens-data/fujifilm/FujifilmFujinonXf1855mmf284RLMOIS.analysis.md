# FUJIFILM FUJINON XF 18-55mm f/2.8-4 R LM OIS — Optical Analysis

## Patent Reference and Design Identification

**Patent:** US 2015/0177500 A1\
**Application Number:** 14/635,195\
**Priority:** JP 2012-194735, September 5, 2012\
**Filed:** March 2, 2015\
**Published:** June 25, 2015\
**Inventors:** Tetsuya Ori; Michio Cho\
**Applicant:** FUJIFILM Corporation\
**Title:** “Zoom Lens and Imaging Apparatus”\
**Embodiment analyzed:** Example 1 (Fig. 1; Tables 1–4 and 21)

The implemented prescription is Example 1 of US 2015/0177500 A1. The production-lens attribution is a strong convergent research correlation, not a manufacturer-confirmed patent attribution. The final data file therefore keeps patent-design quantities separate from FUJIFILM marketing specifications and does not “correct” the patent toward the marketed lens.

The correlation rests on several independent points. FUJIFILM specifies the production XF18-55mm as 14 elements in 10 groups with three aspherical elements, one anomalous-dispersion element, an 18–55 mm focal-length range, F2.8–F4 maximum aperture, linear-motor autofocus, and optical image stabilization. Example 1 contains 14 glass elements in 10 air-separated optical assemblies, has three glass elements carrying six aspherical surfaces, includes a very-low-dispersion 1.49700/81.54 coordinate, computes to 18.5606–53.4679 mm EFL, publishes FNo 2.89–4.13, and assigns transverse stabilization to G3-2. The patent priority date is September 5, 2012; FUJIFILM’s X Mount concept material records the XF18-55 as the kit lens introduced with the X-E1 in 2012. These convergences support identification without establishing that Example 1 was manufactured unchanged. (Patent Fig. 1; Tables 1–4; ¶0059; FUJIFILM product sources listed below.)

There are also explicit limits to the match. The patent tele-end design value is 53.46 mm rather than the marketed 55 mm, and its published FNo range is 2.89–4.13 rather than F2.8–F4. FUJIFILM regional specification pages also disagree on angle of view: one lists 76.5°–29°, while another lists 79.1°–28.4°; Example 1 publishes 79.4°–28.6°. These differences are retained rather than reconciled into a single synthetic specification.

The source was modeled at scale s = 1. The patent prescription therefore remains at its published dimensional scale. Three extraction corrections from the Stage 1 source review remain in force: the rendered Table 1 value at surface 1 is 51.5416 rather than the parser/OCR reading “S1.5416”; the d-line wavelength is 587.6 nm rather than the text-extraction artifact “587.6 mm”; and ambiguous Table 4 exponent/sign readings were taken from the rendered pages. These are transcription corrections, not proposed corrections to the patent.

## Optical Architecture

Example 1 is a five-group positive–negative–positive–positive–positive zoom. From the object side the order is G1(+), G2(−), aperture stop St, G3(+), G4(+), and G5(+). G3 is subdivided into G3-1(+) and G3-2(−); G4 is subdivided into G4-1(+) and G4-2(−). The patent uses G3-2 for transverse hand-shake correction and G4-2 for axial focusing. G5 is fixed during zoom. (US 2015/0177500 A1, ¶0057, ¶0059, ¶0075.)

The following powers are isolated paraxial powers computed from the final `.data.ts`, not in-situ powers inside the complete zoom. They are useful for confirming the architecture but must not be read as a decomposition of the assembled system’s aberrations.

| Segment | Verified isolated focal length (mm) | Power sign |
|---|---:|:---:|
| G1 | +85.381 | + |
| G2 | -17.384 | − |
| G3-1 | +20.488 | + |
| G3-2 | -30.765 | − |
| G3 | +39.447 | + |
| G4-1 | +20.964 | + |
| G4-2 | -28.646 | − |
| G4 | +44.034 | + |
| G5 | +61.643 | + |

The verified zoom motion reproduces the patent’s stated relationships. From wide to the long-focal-length state, the G1–G2 spacing increases, the G2–G3 spacing decreases, and the G4–G5 spacing increases; G5 remains fixed. G2 is stationary from wide to middle in the reconstructed group-front coordinates and then shifts slightly objectward by the final state. The table below gives group-front locations relative to the fixed G5 front surface; negative values lie toward the object side.

| Published state | G1 (mm) | G2 (mm) | G3 (mm) | G4 (mm) | G5 (mm) |
|---|---:|---:|---:|---:|---:|
| Wide | -66.76 | -58.22 | -31.77 | -14.82 | 0.00 |
| Middle | -78.66 | -58.22 | -38.66 | -23.55 | 0.00 |
| Telephoto label | -93.76 | -60.81 | -46.58 | -31.93 | 0.00 |

“Telephoto” is retained here only as the patent’s long-zoom state label. Under the project’s architectural terminology, the design is not classified as telephoto because normalized active track divided by EFL remains greater than 1 at all three published states. It is likewise not labeled retrofocus. The safer architectural description is therefore the verified five-group +−+++ standard zoom rather than a historical prime-lens family label.

The optional parallel plate PP drawn between G5 and image plane Sim is not a lens element. Patent ¶0058 and ¶0096 describe PP as a camera-dependent cover glass, prism, or filter equivalent. The model keeps the source path physically: surface 25 stores the printed 11.83 mm air gap, and PP (2.85 mm, nd = 1.51680, νd = 64.20, N-BK7 class) plus the 2.42 mm air gap to the image plane are carried in `rearPlates`. Every analysis traces through the plate, but it is not drawn in the cross-section. Its paraxial air equivalent is 11.83 + 2.85/1.51680 + 2.42 = 16.1289556962 mm from surface 25, and the physical track is 0.971 mm longer than that air-equivalent path.

## Element-by-Element Analysis

The focal lengths in the opening line of each element subsection are verified standalone thick-element focal lengths in air computed from the final model. They are not in-situ element powers. Glass names marked as catalog equivalents reproduce the patent d-line coordinate but do not identify FUJIFILM’s actual supplier or melt.

### L11 — Negative Meniscus

nd = 1.92286, νd = 18.90. Glass: S-NPH2 (OHARA). f = −123.780 mm.

L11 is the front negative meniscus of the cemented G1 doublet. Its standalone power is negative, but it is not the power sign of G1 as a whole. Together with L12 the isolated G1 matrix is positive, with an isolated group focal length of +85.381 mm. The patent identifies G1 as the positive first zoom group; it does not assign an element-specific aberration task to L11.

### L12 — Positive Meniscus

nd = 1.83481, νd = 42.73. Glass: S-LAH55V (OHARA). f = +49.603 mm.

L12 is the positive rear member of the same cemented G1 doublet, joined to L11 at the shared surface 2. The cemented interface therefore carries the downstream L12 medium in the model rather than a synthetic cement layer. The pair supplies the positive net power required of G1 while retaining the two-element arrangement shown in Fig. 1 and Table 1.

### L21 — Negative Meniscus

nd = 1.62041, νd = 60.29. Glass: S-BSM16 (OHARA). f = −18.830 mm.

L21 is the first element of G2, a negative meniscus followed by two additional elements. It contributes negative standalone power to a group whose verified isolated focal length is −17.384 mm. The patent treats G2 as the negative variator group at the architectural level; no separate aberration function is stated for L21.

### L22 — Biconcave Negative (2× Asph)

nd = 1.69098, νd = 52.95. Glass: 691530 coordinate class (catalog unresolved). f = −41.005 mm.

L22 is the central negative element of G2 and is aspherical on both faces, surfaces 6A and 7A. Its patent coordinate remains catalog-unresolved as a named supplier glass, so the data file preserves the 691530 coordinate class rather than assigning a speculative vendor. Its two aspheres are analyzed separately below.

### L23 — Positive Meniscus

nd = 1.92286, νd = 18.90. Glass: S-NPH2 (OHARA). f = +46.068 mm.

L23 is the rear positive meniscus of G2. Its positive standalone power does not change the verified negative sign of the complete G2 assembly. In the final model, the complete G2 assembly remains negative, with isolated focal length −17.384 mm.

### L31 — Biconvex Positive (2× Asph)

nd = 1.80348, νd = 40.44. Glass: 803404 coordinate class (catalog unresolved). f = +21.364 mm.

L31 is the front positive biconvex element of G3-1 and carries aspheres on both faces, 11A and 12A. This placement is directly supported by the patent: ¶0067 states that both surfaces of the positive lens closest to the object side in G3-1 are desirably aspheric so that aberrations can be better balanced with G3-2. G3-1 as a whole is positive, with verified isolated focal length +20.488 mm.

### L32 — Biconcave Negative

nd = 1.67270, νd = 32.10. Glass: S-TIM25 (OHARA). f = −18.202 mm.

L32 is the negative first member of the cemented D2 pair inside G3-1. Its standalone focal length is negative, while the L32+L33 cemented pair has only weak positive net power when isolated from the rest of the lens: +150.440 mm focal length. That cemented-net value is distinct from either element power and from the complete in-situ G3-1 behavior.

### L33 — Biconvex Positive

nd = 1.49700, νd = 81.54. Glass: S-FPL51 (OHARA). f = +17.581 mm.

L33 is the positive second member of D2. Its high Abbe number is retained from the patent coordinate, and the coordinate is exactly compatible with the current OHARA S-FPL51 catalog row. That catalog equivalence does not establish the production supplier or melt. Runtime dispersion resolves the catalog curve without copying catalog line indices into the patent record; no dPgF value is authored, so no apochromatic or anomalous-partial-dispersion performance claim is made from this identification alone.

### L34 — Positive Meniscus

nd = 1.88300, νd = 40.76. Glass: S-LAH58 (OHARA). f = +26.615 mm.

L34 is the positive first member of the cemented G3-2 stabilization doublet. Patent ¶0068 specifies a positive lens followed by a cemented negative lens for G3-2, and ¶0070 imposes Np > Nn and νp < νn. Example 1 satisfies those relations directly: 1.88300 > 1.63930 and 40.76 < 44.87. The patent associates these conditions with suppressing aberration changes during hand-shake correction.

### L35 — Biconcave Negative

nd = 1.63930, νd = 44.87. Glass: S-BAM12 (OHARA). f = −14.794 mm.

L35 is the negative rear member of the G3-2 cemented doublet. The two-element stabilizer has verified isolated focal length −30.765 mm, despite the positive power of L34. The patent moves this complete negative subgroup transversely for hand-shake correction; the final centered prescription does not invent a decenter amplitude that the patent does not publish.

### L41 — Biconvex Positive (2× Asph)

nd = 1.69098, νd = 52.95. Glass: 691530 coordinate class (catalog unresolved). f = +20.964 mm.

L41 is the single positive element of G4-1 and is aspherical on both faces, 19A and 20A. Its standalone focal length, +20.964 mm, is also the isolated focal length of G4-1 because the subgroup contains only this element. The patent does not assign a separate element-level aberration mechanism to these two aspheres, so the analysis limits itself to their verified geometry and departure values.

### L42 — Biconcave Negative

nd = 1.83400, νd = 37.16. Glass: S-LAH60 (OHARA). f = −19.120 mm.

L42 is the negative first member of the cemented G4-2 focusing doublet. Patent ¶0075 defines G4-2 as the negative focusing subgroup and ¶0076 describes the preferred negative-plus-positive cemented construction. In the final data it is paired directly with L43 at surface 22.

### L43 — Positive Meniscus

nd = 1.48749, νd = 70.23. Glass: S-FSL5 (OHARA). f = +54.644 mm.

L43 is the positive rear member of the G4-2 focusing doublet. The cemented pair is net negative, with verified isolated focal length −28.646 mm, while complete G4 remains net positive at +44.034 mm. The distinction matters: element sign, cemented-subgroup sign, and parent-group sign are three different quantities.

### L51 — Biconvex Positive

nd = 1.76200, νd = 40.10. Glass: S-LAM55 (OHARA). f = +61.643 mm.

L51 is the single positive element of G5. The patent states in ¶0057 and ¶0061 that G5 remains fixed during zoom; the verified zoom reconstruction uses G5 as the axial reference. Its isolated focal length is +61.643 mm. The optional camera-side plate PP shown behind G5 in Fig. 1 is not part of this element; it is modeled separately in `rearPlates` (traced, not drawn).

## Glass Identification and Selection

The patent publishes d-line refractive index and Abbe number, not vendor glass names. The data file therefore uses authoritative catalog rows only where the stored coordinates support them. Ten distinct active coordinates have exact coordinate-compatible OHARA rows; two active coordinates remain class-only. A coordinate match is a catalog equivalence, not evidence of production procurement.

| Patent nd / νd | Data-file glass disposition | Elements | Spectral support carried in data |
|---|---|---|---|
| 1.92286 / 18.90 | S-NPH2 (OHARA) | L11, L23 | Runtime catalog curve (supplier-neutral proxy) |
| 1.83481 / 42.73 | S-LAH55V (OHARA) | L12 | Runtime catalog curve (supplier-neutral proxy) |
| 1.62041 / 60.29 | S-BSM16 (OHARA) | L21 | Runtime catalog curve (supplier-neutral proxy) |
| 1.69098 / 52.95 | 691530 coordinate class (catalog unresolved) | L22, L41 | nd / νd only; named catalog unresolved |
| 1.80348 / 40.44 | 803404 coordinate class (catalog unresolved) | L31 | nd / νd only; named catalog unresolved |
| 1.67270 / 32.10 | S-TIM25 (OHARA) | L32 | Runtime catalog curve (supplier-neutral proxy) |
| 1.49700 / 81.54 | S-FPL51 (OHARA) | L33 | Runtime catalog curve (supplier-neutral proxy) |
| 1.88300 / 40.76 | S-LAH58 (OHARA) | L34 | Runtime catalog curve (supplier-neutral proxy) |
| 1.63930 / 44.87 | S-BAM12 (OHARA) | L35 | Runtime catalog curve (supplier-neutral proxy) |
| 1.83400 / 37.16 | S-LAH60 (OHARA) | L42 | Runtime catalog curve (supplier-neutral proxy) |
| 1.48749 / 70.23 | S-FSL5 (OHARA) | L43 | Runtime catalog curve (supplier-neutral proxy) |
| 1.76200 / 40.10 | S-LAM55 (OHARA) | L51 | Runtime catalog curve (supplier-neutral proxy) |

The 1.49700/81.54 coordinate used by L33 is exactly compatible with the public OHARA S-FPL51 row and is the lowest-dispersion coordinate in Example 1. FUJIFILM’s production specification says the marketed lens contains one anomalous-dispersion element, making this a useful correlation point. It still does not prove that the production lens used S-FPL51 or that L33 is the manufacturer-designated production ED element. The analysis therefore does not convert catalog equivalence into supplier attribution.

Catalog-derived nC, nF, and ng overrides were removed during integration so the shared resolver supplies the catalog curves. The two unresolved coordinate classes retain Abbe fallback. No dPgF or APO claim is added.

The patent gives one explicit glass-pairing rationale for the OIS subgroup. In G3-2, the positive L34 has nd = 1.88300 and νd = 40.76, while the negative L35 has nd = 1.63930 and νd = 44.87. Thus Np > Nn and νp < νn, satisfying conditions (1) and (2). Patent ¶0070 states that these relations are intended to suppress spherical/field-curvature and chromatic changes associated with hand-shake correction. That statement is the patent’s design rationale; it is not an independently measured production-lens performance result.

## Focus Mechanism

Focus status is **NO_INTERNAL_RECONSTRUCTION**. Patent ¶0075 identifies G4-2 as the focusing subgroup and states that it moves from the object side toward the image side as focus changes from infinity toward close-up. The final prescription preserves that mechanism description but contains no invented internal travel.

Example 1 does not publish numerical close-focus spacings for G4-2. FUJIFILM specifies production minimum focus distances of 0.30 m at the wide end and 0.40 m at the telephoto end, but those external object distances do not uniquely determine the G4-2 translation and its two adjacent air gaps. The data file therefore keeps all `var` pairs identical at each zoom keyframe and uses `closeFocusM: 0.3` only as catalog/UI metadata. It must not be read as a solved close-focus optical state.

FUJIFILM markets the production lens with linear-motor autofocus. The patent, however, specifies the optical focusing subgroup and direction rather than a motor implementation. The production motor specification is therefore kept as a product-correlation fact, not used to infer additional patent mechanics.

## Aspherical Surfaces

Example 1 has six aspherical surfaces on three glass elements: 6A and 7A on L22, 11A and 12A on L31, and 19A and 20A on L41. The patent writes the sag equation as

$$
Z_d = \frac{C h^2}{1 + \sqrt{1 - K_A C^2 h^2}} + \sum_{m=3}^{20} A_m h^m.
$$

LensVisualizer uses the standard denominator containing $(1+K)$, so the conversion is $K = K_A - 1$. Every Example 1 asphere has $K_A = 1$, hence all six are stored as $K = 0$. The design is unscaled (s = 1), so the A3–A20 coefficients are copied without dimensional rescaling. Because h is radial height, the odd powers remain rotationally symmetric and do not imply a decentered surface. (Patent ¶0106–¶0110; Table 4.)

### Coefficients: 6A and 7A

| Order | 6A | 7A |
|---|---:|---:|
| A3 | 2.8680435000e-04 | 1.4710535000e-05 |
| A4 | -3.9606900000e-04 | -2.5234353000e-04 |
| A5 | 9.6790033000e-05 | 4.6561754000e-05 |
| A6 | -1.0299938000e-05 | -1.8863447000e-06 |
| A7 | -4.7183893000e-08 | -6.6117816000e-07 |
| A8 | 4.8830620000e-08 | 8.2982647000e-09 |
| A9 | 2.8165954000e-09 | 8.5750395000e-09 |
| A10 | -7.8456146000e-11 | 6.6105996000e-10 |
| A11 | -1.9153122000e-11 | -2.5092683000e-11 |
| A12 | -1.6490387000e-12 | -1.1264706000e-11 |
| A13 | -2.8876807000e-14 | -1.2106212000e-12 |
| A14 | -3.1702830000e-15 | -1.1330751000e-14 |
| A15 | -7.1431744000e-16 | 1.2237835000e-14 |
| A16 | -4.2397046000e-17 | 1.9833659000e-15 |
| A17 | -1.1404544000e-17 | 9.1340677000e-17 |
| A18 | 5.7084738000e-18 | -1.8548064000e-17 |
| A19 | 5.4911330000e-19 | -3.0052754000e-18 |
| A20 | -7.6120916000e-20 | 2.3872349000e-19 |

### Coefficients: 11A and 12A

| Order | 11A | 12A |
|---|---:|---:|
| A3 | 7.3438711000e-05 | 1.5350520000e-04 |
| A4 | -9.4826486000e-05 | -1.1234510000e-05 |
| A5 | 4.8179429000e-05 | -2.7955827000e-05 |
| A6 | -8.0733758000e-06 | 2.5344483000e-05 |
| A7 | -1.8747216000e-06 | -5.7895894000e-06 |
| A8 | 9.2289795000e-07 | 2.7149949000e-07 |
| A9 | -1.0322294000e-07 | -7.7087474000e-09 |
| A10 | 2.4327727000e-09 | 1.9673684000e-08 |
| A11 | -9.9236793000e-10 | -3.2960969000e-10 |
| A12 | 1.2442535000e-11 | -4.9795800000e-10 |
| A13 | 3.1439069000e-11 | -7.1976033000e-11 |
| A14 | 3.7267059000e-12 | 7.4278993000e-12 |
| A15 | -3.3950388000e-13 | 6.0588979000e-12 |
| A16 | -7.3787814000e-14 | -8.0903072000e-13 |
| A17 | -1.5506159000e-14 | -1.5774630000e-14 |
| A18 | 1.7800306000e-16 | -1.1585061000e-15 |
| A19 | 6.1454204000e-16 | 1.3703794000e-15 |
| A20 | -4.1314580000e-17 | -8.5615323000e-17 |

### Coefficients: 19A and 20A

| Order | 19A | 20A |
|---|---:|---:|
| A3 | 1.2573913000e-04 | 1.1028933000e-04 |
| A4 | -1.3483498000e-04 | -4.2533206000e-05 |
| A5 | 4.5494707000e-05 | 1.8296780000e-05 |
| A6 | -7.5505829000e-06 | -4.0469416000e-06 |
| A7 | 5.5708415000e-07 | 1.1053299000e-06 |
| A8 | -7.0799306000e-08 | -1.8753429000e-07 |
| A9 | 2.4324572000e-08 | 7.5019091000e-09 |
| A10 | -2.5318801000e-09 | 7.7102039000e-10 |
| A11 | 3.1163560000e-11 | 3.0528520000e-10 |
| A12 | -2.5903722000e-11 | -4.8459994000e-11 |
| A13 | 5.8337715000e-12 | -2.5038094000e-12 |
| A14 | -9.3756335000e-14 | -2.2579873000e-13 |
| A15 | -3.8335644000e-14 | 1.8387367000e-13 |
| A16 | 2.2295140000e-15 | -1.3190284000e-14 |
| A17 | 2.0027372000e-17 | -8.0764066000e-17 |
| A18 | -1.9289346000e-18 | 6.5915836000e-18 |
| A19 | -9.9096954000e-19 | 1.4602602000e-18 |
| A20 | 6.9998913000e-20 | -3.2280458000e-20 |

The semi-diameters used for asphere evaluation are modeled clear apertures, not values published by the patent. At those modeled rims, the polynomial departures from the K = 0 base conics are:

| Surface | Modeled sd (mm) | Departure from base conic (mm) |
|---|---:|---:|
| 6A | 7.70 | -0.232450 |
| 7A | 7.70 | -0.332808 |
| 11A | 7.20 | +0.140421 |
| 12A | 6.30 | +0.091815 |
| 19A | 9.20 | +0.290537 |
| 20A | 9.10 | +0.594710 |

The signs above describe the modeled departure relative to each surface’s spherical base at the authored semi-diameter; they should not be converted into a simple one-coefficient aberration story. L31’s paired aspheres have the clearest patent-stated functional context because ¶0067 explicitly relates them to balancing G3-1 with the stabilization subgroup. The patent does not state a manufacturing method for these aspheres, so no molded/polished/composite process is asserted here.

## Chromatic Correction Strategy

The prescription uses a broad spread of d-line indices and Abbe numbers, but the analysis avoids assigning chromatic behavior from glass class alone. The strongest source-grounded chromatic statement concerns G3-2: patent condition (2), νp < νn, is explicitly tied by ¶0070 to chromatic correction during hand-shake compensation. Example 1 satisfies it with L34/L35 as noted above.

Within G3-1, L32 and L33 form a cemented negative/positive pair whose verified isolated net focal length is +150.440 mm. L33’s low-dispersion coordinate is catalog-compatible with S-FPL51, but the file contains no dPgF and the patent does not identify an APO target. The correct interpretation is therefore a strongly dispersed glass palette with catalog-curve support on compatible rows, not an apochromatic classification.

## Image Stabilization

The patent assigns optical image stabilization to G3-2, the cemented L34+L35 subgroup. It moves perpendicular to the optical axis for hand-shake correction. Patent ¶0063 explains the architectural rationale: placing a negative correction subgroup behind positive G3-1 narrows the ray bundle entering G3-2 and is intended to reduce the stabilizer’s required diameter and movement while limiting aberration fluctuation compared with moving the whole G3.

No numerical transverse displacement range is published for Example 1. The LensVisualizer data therefore identifies the stabilizer group in prose and grouping metadata but does not author a decentered OIS state. No source-verified stabilization travel or performance magnitude is claimed. The production lens’s OIS specification is used only as one of the correlation criteria.

## Conditional Expressions

The patent’s conditions (3)–(9) were recomputed from the final model rather than copied from Table 21. The calculation uses the isolated G1, G3-2, and G4-2 focal lengths, the final-model wide and long-state EFLs, and the published first-group radii. The calculated values reproduce the two-decimal Example 1 entries within 0.005 in every case and satisfy both the broad and preferred patent bounds.

| Condition | Final-model calculation | Table 21 | Residual |
|---|---:|---:|---:|
| (3) | 4.600151 | 4.60 | +0.000151 |
| (4) | 1.596872 | 1.60 | -0.003128 |
| (5) | -1.657550 | -1.66 | +0.002450 |
| (6) | -0.575393 | -0.58 | +0.004607 |
| (7) | -1.543360 | -1.54 | -0.003360 |
| (8) | -0.535754 | -0.54 | +0.004246 |
| (9) | -1.652587 | -1.65 | -0.002587 |

Conditions (1) and (2) are also satisfied directly by the G3-2 glass coordinates: Np > Nn and νp < νn. The numerical agreement with Table 21 is a source/model consistency check; it does not demonstrate production-lens identity by itself. (Patent ¶0070, ¶0077–¶0089, Table 21.)

## Verification Summary

The final `.data.ts` was loaded by the Stage 2/3 verifier rather than by a separate hard-coded copy. A TypeScript-aware loader was used when available, with a strict literal-parser fallback; deliberately mutated duplicate-key and arithmetic-expression inputs are rejected. The implemented prescription reproduces the source first-order quantities as follows:

| State | Patent f (mm) | Computed EFL (mm) | Residual (mm) | Computed air-equivalent BFD from S25 (mm) |
|---|---:|---:|---:|---:|
| Wide | 18.56 | 18.560557954 | +0.000557954 | 16.125170710 |
| Middle | 31.50 | 31.495448834 | -0.004551166 | 16.118578637 |
| Telephoto label | 53.46 | 53.467893963 | +0.007893963 | 16.129473668 |

The air-equivalent rear reference is 16.1289556962 mm from surface 25 (11.83 mm air + 2.85/1.51680 mm through PP + 2.42 mm air). The BFD values above differ from that reference by −0.003785 mm, −0.010377 mm, and +0.000518 mm at wide, middle, and long state respectively, all inside the ±0.02 mm source-precision-aware check. The ABCD and independently coded sequential y–ν matrices agree to within 2.2×10⁻14 in the worst published state.

The surface-by-surface Petzval sum, using φ/(n·n′) for every active refracting surface, is 0.002557019824249 mm⁻¹, corresponding to a reciprocal scale of 391.080269 mm. This is a first-order field-curvature quantity, not a claim about the final image surface after higher-order aberration correction.

The physical stop radius is not published. The authored `STO.sd = 5.78 mm` is a modeling calibration derived from the published wide-state FNo = 2.89; with the final paraxial model it gives f/2.889374 at the wide state. Agreement here is therefore calibration closure, not independent measurement of the diaphragm.

The modeled semi-diameters pass the portable edge-thickness, actual-rim-slope, conic-domain, and shared-gap checks. Exact meridional containment was checked at all three published zoom states plus six intermediate states using the on-axis full pupil, ±0.6 field full-pupil bundles, and full-field chief rays. The model deliberately allows only the documented outermost ±0.6-field pupil clipping at the S12/S13 air-space boundary; these authored clear apertures are not production measurements.

Figure 1 was reviewed at 600 dpi during integration. L21 now uses 13.9 mm at surface 4 and 9.4 mm at surface 5, following the distinct front and rear optical rims rather than extending the rear surface through the mechanical flange. Other element apertures remain unchanged.

## Viewer aperture and glass classification

The runtime uses `zoomApertureModel: "from-nominal-fno"` to infer a changing physical iris from the published infinity f-numbers. The wide / middle / long-state stop radii are 5.821384 / 5.691235 / 5.620209 mm. These are exact-ray calibration results, not source-published diaphragm measurements; interpolation does not establish a production cam law.

L11, L23, and L33 carry **inferred APD** colors. Their coordinate-compatible catalog curves have appreciable positive partial-dispersion deviations; the inspector records the curve and approximate ΔPgF. The flags describe spectral proxies and do not identify the production supplier. No catalog-derived line indices are represented as patent measurements.

## Sources

1. **Primary patent:** Tetsuya Ori and Michio Cho, “Zoom Lens and Imaging Apparatus,” US 2015/0177500 A1, published June 25, 2015. Relevant locations: Fig. 1; ¶0057–¶0076; ¶0096–¶0112; Tables 1–4; Table 21. The original PDF is included with this dossier.
2. **FUJIFILM production specification:** “XF18-55mmF2.8-4 R LM OIS Specifications,” FUJIFILM, https://www.fujifilm-x.com/en-ca/products/lenses/xf18-55mmf28-4-r-lm-ois/specifications/ (retrieved 2026-09-18).
3. **FUJIFILM product overview:** “FUJINON XF18-55mmF2.8-4 R LM OIS,” FUJIFILM, https://www.fujifilm-x.com/en-us/products/lenses/xf18-55mmf28-4-r-lm-ois/ (retrieved 2026-09-18).
4. **FUJIFILM X system / format context:** https://www.fujifilm.com/us/en/consumer/digitalcameras/x and https://www.fujifilm-x.com/en-us/filmmaking/ (retrieved 2026-09-18).
5. **FUJIFILM release-timing context:** “X Mount Lens Concept Book,” https://dl.fujifilm-x.com/ja-jp/products/brochure/x-mount-lens_conceptbook_01.pdf (retrieved 2026-09-18).
6. **FUJIFILM localized specification cross-check:** https://www.fujifilm-x.com/zh-cn/products/lenses/xf18-55mmf28-4-r-lm-ois/specifications/ (retrieved 2026-09-18).
7. **OHARA catalog evidence:** OHARA optical-glass product pages and detailed/pocket catalogs, including https://oharacorp.com/wp-content/uploads/2024/02/all-detailed-data-20240131.pdf and https://oharacorp.com/wp-content/uploads/2023/06/ohara-pocket-catalog-2023-05.pdf (retrieved 2026-09-18). Catalog identities are treated as coordinate-compatible equivalents, not production-supplier proof.
