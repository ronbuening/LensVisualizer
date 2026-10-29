# Olympus M.Zuiko Digital ED 12–200mm f/3.5–6.3

## Patent Reference and Design Identification

**Patent:** JP 2020-154139 A, related grant JP 7204554 B2.  
**Application Number:** JP 2019-052558.  
**Filed:** March 20, 2019.  
**Published:** September 24, 2020.  
**Inventors:** Masahiro Imamura (今村 雅弘), Toyonori Kon (今 豊紀).  
**Applicant:** Olympus Corporation.  
**Example details:** 数値実施例1 (Numerical Example 1), ¶0162, pp. 18–19; cross-section Fig. 1, aberrations Fig. 9. No dimensional scaling.

**Scope:** The model reproduces the patent's infinity states only. It is not a factory prescription and does not simulate the product's close-focus range. At the wide end the patent's image height (10.06 mm) is smaller than the Four Thirds half-diagonal (10.82 mm).

The product association is unusually direct:

1. The front page records a prior disclosure on January 24, 2019, citing the Olympus `12-200_35-63/spec.html` product page.
2. Olympus announced the 12–200mm f/3.5–6.3 on February 13, 2019, for sale in late March 2019.
3. The maker's 16 elements / 11 groups and three aspherical elements match Example 1: five cemented doublets plus six singlets, with four aspheric surfaces on three elements.
4. Example 1 gives 12.36–196.04 mm and f/3.60–6.47, close to the marketed 12–200 mm and f/3.5–6.3.
5. The maker describes a single lightweight cemented inner-focus lens; ¶0081 and ¶0097 identify G4, a cemented doublet, as the focusing group.

None of these statements says that Example 1 is the as-manufactured prescription, and one glass differs from the maker's construction diagram (L12; see Glass Identification).

## Optical Architecture

The five groups have power sequence **positive–negative–positive–negative–positive**. Independent d-line group focal lengths are +105.055736, −10.963828, +17.747552, −19.224134 and +50.534992 mm. Their element counts are 3/5/4/2/2.

- **G1, S1–5:** front positive collector comprising L1–L2 cemented doublet and L3. Its low-dispersion positive members distribute chromatic power across the large front section.
- **G2, S6–14:** negative variator with three negative elements, a positive singlet and a cemented correcting pair. Its strong negative power and large change in separation from G1 support the wide zoom ratio.
- **G3, S15–22:** iris followed by a strongly converging double-aspheric singlet, an ED-bearing doublet and a positive meniscus. The iris at S15 is an actual stop, not glass.
- **G4, S23–25:** negative cemented doublet. The patent identifies it as the focus group; the model authors no focus travel for it.
- **G5, S26–28:** fixed positive rear doublet containing an aspheric negative front element.

¶0099 describes G1–G4 moving objectward from wide to tele, G5 fixed, and the iris moving with G3; G2's printed positions also reverse at the first and third intermediate states (Int.1, Int.3). Positions between the printed states are inferred (see Zoom Path and Image Plane), not a recovered production cam.

S29–S30 is the camera cover glass, 4.11 mm thick at nd 1.51633 and νd 64.14 (¶0091). It is modelled as a rear plate, excluded from the 16-element count and hidden in the section drawing; the optional low-pass filter of ¶0092 is not added. The trailing gap is the printed 2.07 mm and d28 stays at the printed 12.93 mm, so G5 does not move.

## Element-by-Element Analysis

Element focal lengths below are isolated thick-lens-in-air paraxial values derived from the printed two radii, thickness and nd. A cemented element's contribution in the assembled lens differs because its adjacent medium is not air. Glass names are catalog equivalents matched on nd and νd, not identified production suppliers. Optical roles are design interpretation unless a patent paragraph is cited.

### L1 — Negative Meniscus

nd = 2.00069, νd = 25.46. Glass: J-LASFH17 (HIKARI catalog equivalent; production supplier unspecified). f = -267.406 mm.

The high-index negative member of the front cemented doublet supplies opposing power without requiring comparably strong surface curvature. The lower-index positive partner carries the stronger net positive action; the pairing supports chromatic balancing.

### L2 — Positive Meniscus

nd = 1.43875, νd = 94.93. Glass: S-FPL53 (OHARA catalog equivalent; production supplier unspecified). f = +129.007 mm.

This very low-dispersion positive member shares S2 with L1. Its high Abbe number reduces the chromatic cost of the positive front collector; a catalog-equivalent dispersion curve does not establish Olympus's actual supplier.

### L3 — Positive Meniscus

nd = 1.59282, νd = 68.63. Glass: FCD515 (HOYA catalog equivalent; production supplier unspecified). f = +172.312 mm.

The separate positive meniscus completes G1. Its lower dispersion than ordinary dense flints allows additional front-group power without assigning all correction to the first doublet.

### L4 — Negative Meniscus

nd = 1.88300, νd = 40.76. Glass: S-LAH58 (OHARA catalog equivalent; production supplier unspecified). f = -20.370 mm.

The first strong negative meniscus of G2 expands the ray bundle. Fig. 1 draws its rear face as a cap that ends near 10 mm and then a flat land out to the edge; the model gives the faces 13.0 and 12.8 mm semi-diameters and cuts the rear rim flat 4.71 mm behind its vertex (cut radius about 9.96 mm).

### L5 — Biconcave Negative (Aspherical)

nd = 1.80280, νd = 40.55. Glass: Unmatched (1.80280, 40.55). f = -26.962 mm.

The aspheric negative singlet follows the meniscus. S8 supplies a high-order correction surface in the strong negative group, where oblique-ray geometry changes rapidly through zoom. No catalog glass matches its coordinates (nearest: S-LAH63, 1.8044/39.59).

### L6 — Biconvex Positive

nd = 1.80810, νd = 22.76. Glass: S-NPH1 (OHARA catalog equivalent; production supplier unspecified). f = +21.908 mm.

The positive singlet interrupts G2's negative power. Its low Abbe number provides a dispersive counterweight; assignment of a particular aberration balance is qualitative, not a sensitivity optimization.

### L7 — Biconcave Negative

nd = 1.88300, νd = 40.76. Glass: S-LAH58 (OHARA catalog equivalent; production supplier unspecified). f = -18.282 mm.

This negative element is cemented to L8 at S13. The high index permits substantial negative power in a compact thickness.

### L8 — Biconvex Positive

nd = 1.92286, νd = 20.88. Glass: PBH21 (OHARA catalog equivalent; production supplier unspecified). f = +66.197 mm.

The positive partner of L7 completes G2. The large dispersion and shared interface offer chromatic balancing freedom. PBH21 is a catalog equivalent, not a production identification.

### L9 — Biconvex Positive (Double Aspherical)

nd = 1.76960, νd = 49.30. Glass: Unmatched (1.76960, 49.30). f = +18.763 mm.

The biconvex positive singlet directly behind the iris has two aspheric faces, S16 and S17. Its strong power makes these surfaces effective for controlling axial and oblique aberration balance. No catalog glass matches its coordinates (nearest: HOYA MC-TAF101-100, 1.76902/49.29).

### L10 — Negative Meniscus

nd = 1.91082, νd = 35.25. Glass: TAFD35 (HOYA catalog equivalent; production supplier unspecified). f = -15.550 mm.

The negative front member of the G3 doublet shares S19 with the very low-dispersion positive L11. The strongly opposed powers provide a chromatic correction lever.

### L11 — Biconvex Positive

nd = 1.43875, νd = 94.93. Glass: S-FPL53 (OHARA catalog equivalent; production supplier unspecified). f = +18.023 mm.

This ED-class positive partner has the same printed nd/νd pair as L2. It carries substantial positive power within G3; no apochromatic performance claim follows solely from that pair.

### L12 — Positive Meniscus

nd = 1.51633, νd = 64.14. Glass: S-BSL7 (OHARA catalog equivalent; production supplier unspecified). f = +61.282 mm.

The positive meniscus completes G3 and shapes the bundle incident on the negative focus group. Its crown-like dispersion contrasts with the higher-index members ahead.

### L13 — Negative Meniscus

nd = 1.83481, νd = 42.73. Glass: S-LAH55V (OHARA catalog equivalent; production supplier unspecified). f = -14.881 mm.

The negative member of G4 dominates the doublet's power. ¶0081 and ¶0097 identify this cemented doublet as the focusing group; no focus travel is modelled.

### L14 — Positive Meniscus

nd = 1.68893, νd = 31.07. Glass: S-TIM28 (OHARA catalog equivalent; production supplier unspecified). f = +54.568 mm.

The positive partner shares S24 with L13 and partially offsets its power. The lightweight cemented-unit description is independently consistent with the 2019 maker release.

### L15 — Negative Meniscus (Aspherical)

nd = 1.80280, νd = 40.55. Glass: Unmatched (1.80280, 40.55). f = -44.808 mm.

The aspheric negative member at the front of fixed G5 is cemented to L16. S26 offers a rear correction degree of freedom. Its glass has the same unmatched coordinates as L5.

### L16 — Biconvex Positive

nd = 1.51742, νd = 52.43. Glass: S-NSL36 (OHARA catalog equivalent; production supplier unspecified). f = +24.791 mm.

The final positive member completes the fixed positive rear relay. The source camera plate after G5 is a separate camera-side component and is not counted as L17.

## Glass Identification and Selection

The patent publishes d-line refractive indices and Abbe numbers, not OEM glass names or partial-dispersion measurements. The model retains these coordinates. Thirteen elements have catalog equivalents; the three aspheric elements (L5, L9, L15) match no catalog glass, consistent with moldable glasses outside the public catalogs, and use an Abbe-based approximation. C/d/F and photopic results are therefore model estimates, not measured production chromatic performance.

| Elements | Catalog equivalent or unresolved class | nd / νd         | Maker diagram |
| -------- | -------------------------------------- | --------------- | ------------- |
| L1       | J-LASFH17 (HIKARI)                     | 2.00069 / 25.46 | Super HR      |
| L2, L11  | S-FPL53 (OHARA)                        | 1.43875 / 94.93 | Super ED      |
| L3       | FCD515 (HOYA)                          | 1.59282 / 68.63 | ED            |
| L4, L7   | S-LAH58 (OHARA)                        | 1.88300 / 40.76 |               |
| L5, L15  | Unmatched (1.80280, 40.55)             | 1.80280 / 40.55 | Aspherical    |
| L6       | S-NPH1 (OHARA)                         | 1.80810 / 22.76 |               |
| L8       | PBH21 (OHARA)                          | 1.92286 / 20.88 | HR            |
| L9       | Unmatched (1.76960, 49.30)             | 1.76960 / 49.30 | Aspherical    |
| L10      | TAFD35 (HOYA)                          | 1.91082 / 35.25 | HR            |
| L12      | S-BSL7 (OHARA)                         | 1.51633 / 64.14 | ED            |
| L13      | S-LAH55V (OHARA)                       | 1.83481 / 42.73 |               |
| L14      | S-TIM28 (OHARA)                        | 1.68893 / 31.07 |               |
| L16      | S-NSL36 (OHARA)                        | 1.51742 / 52.43 |               |

The maker's construction diagram (two Super ED, two ED, one Super HR, two HR, three aspherical) agrees with Example 1 at L1, L2, L3, L11 and the HR positions L8 and L10, so L2, L3 and L11 carry inferred anomalous-dispersion tags. It also colours L12 as ED, but Example 1 prints an ordinary borosilicate crown there (nd 1.51633, νd 64.14), so L12 is left untagged; the production lens probably differs from Example 1 in this one glass. No apochromatic claim is made.

## Focus Mechanism

The production lens focuses internally with G4, a cemented doublet (¶0081, ¶0097; maker's release). The maker gives a minimum focus distance of 0.22 m at the wide end and 0.70 m at the tele end, with maximum magnification 0.10× / 0.23×. The patent prints no close-focus states and no G4 focus travel.

The model therefore authors **no focus travel**: every zoom station has a single infinity state, the focus control stays at ∞ and reads "Not modeled", and no close-focus magnification is reproduced. The 0.22 m value is product metadata only. A G4-only close-focus reconstruction was evaluated and not adopted: without printed finite states, its distance labels could not be kept consistent with the computed conjugates across the zoom range.

## Aspherical Surfaces

The source uses the ordinary conic-plus-even-power sag equation (¶0161):

$$z(h)=\frac{ch^2}{1+\sqrt{1-(1+k)c^2h^2}}+A_4h^4+A_6h^6+A_8h^8+A_{10}h^{10}.$$

The printed k is the conic constant itself, not 1 + k. All four surfaces have k = 0. Dimensions are millimetres and coefficients are unscaled. Missing higher-order terms are zero.

| Surface / element | k   | A4           | A6           | A8           | A10         |
| ----------------- | --- | ------------ | ------------ | ------------ | ----------- |
| 8 / L5            | 0.0 | 1.12785e-05  | 5.20627e-08  | -6.24419e-10 | 5.53011e-12 |
| 16 / L9           | 0.0 | -1.23210e-05 | 1.68482e-08  | -5.43531e-10 | 4.63308e-12 |
| 17 / L9           | 0.0 | 4.19357e-05  | -4.48267e-08 | 0.00000e+00  | 0.00000e+00 |
| 26 / L15          | 0.0 | 5.41632e-06  | 3.11917e-08  | -1.32665e-10 | 2.86882e-13 |

S8 has positive low-order polynomial departure with alternating higher orders. S16 has a negative A4 term while the second L9 face S17 has positive A4; these are distinct corrections, not one averaged asphere. S26 supplies a weaker rear polynomial correction. Signs describe local departure from the spherical base, not a standalone claim about system aberration sign. The patent does not establish the production molding or polishing process for each face.

## Zoom Path and Image Plane

The five printed states are 12.36, 25.56, 46.76, 93.32 and 196.04 mm (W, Int.1, Int.2, Int.3, T); the model's d-line EFLs there are 12.362, 25.560, 46.760, 93.332 and 196.134 mm.

Between the printed states the zoom path is inferred, not a recovered production cam. From W to Int.3, G1–G3 move linearly and G4 is solved at each station for paraxial infinity focus. Applied from Int.3 to T, that law makes G4 back up by about 0.19 mm before advancing, which the printed states do not call for; in that segment G1, G3 and G4 therefore move linearly and G2 is solved instead, its path departing by up to 0.80 mm from a straight line between the printed positions. Every gap and group then moves monotonically within each printed segment, apart from G2's printed reversals at Int.1 and Int.3. The model uses 42 stations, 37 of them inferred; the inferred stations are in focus to 0.0001 mm, and linear interpolation between stations adds at most 0.018 mm of defocus.

d28 is held at the printed 12.93 mm and the cover-glass trailing gap at 2.07 mm, so the image plane is fixed relative to the fixed G5. Against that plane the printed states keep paraxial defocus of −0.003, +0.030, +0.009, −0.032 and −0.017 mm (image distance minus back focus); the Int.1 and T values include the printed d30 of 2.06 and 2.09 mm, which is not carried. Whether these residuals are rounding or deliberate image-plane offsets is not established, and they are not removed. The d-line reference is stated in ¶0157.

The LTL row is internally inconsistent with ¶0159: its 99.37–166.44 mm values match the S1–S28 length, although ¶0159 defines a BF-inclusive length. At the wide end the physical total is 118.47 mm and the air-equivalent total 117.07 mm. The prescription is not shortened to fit the row; the discrepancy is recorded in `source.errata`.

## Clear Apertures, Iris and Field Coverage

No effective-diameter table is published. Rims are estimated from Fig. 1 and checked against the geometry and the printed aperture: about 25 mm semi-diameter for L1, 23.8 mm at the rear of L2 (drawn about 1.3 mm lower than L1), 23 mm for L3, 13.0 mm for L4, whose concave rear cap ends at 9.96 mm on a flat land square to the axis as Fig. 1 draws it (an inferred rim cut, placed just outside the wide-open beams), and 6.5–12 mm for the later elements, with the L10–L11 doublet level with L12 and below L9. All three panels of Fig. 1 share one scale with no vertical stretch, and the wide, Int.2 and tele panels agree on these heights to within about 3%. The 72 mm filter thread is only an outer envelope. These are estimates, not manufacturer clear apertures.

The iris follows the printed f-number schedule (3.60/4.66/5.45/6.08/6.47), not the marketed f/3.5–6.3, and the estimated rims pass the full on-axis beam at every station. Seven blades and a minimum aperture of f/22 are maker data.

The wide-angle row prints 2ω = 83.93° and image height 10.06 mm; the chief ray at 41.96° reaches 10.06 mm without clipping. Fig. 9, however, labels ω = 44.64° (89.28° full angle), a discrepancy within the source; the table value is used, and the model does not assume digital distortion correction explains the difference.

The Four Thirds half-diagonal is 10.82 mm. At 12.36 mm the chief ray to that corner (43.9°) is clipped at S1 (26.8 mm against 25 mm), so the modelled field reaches 10.36 mm (96% of the corner radius); the 13.39 mm and 14.44 mm stations reach 97% and 99%, and from 15.51 mm onward the full corner is reached. This is chief-ray loss, not ordinary marginal vignetting. Because the patent's own wide-angle image height is smaller than the corner, the rims are not enlarged to cover it.

## Model Scope and Limitations

- Thirteen glasses are catalog equivalents and three are unmatched, so chromatic results (C/d/F and photopic) are model estimates. Fig. 9 plots g/C/d (435.84/656.27/587.56 nm).
- The model covers infinity focus only; close-focus behaviour and focus breathing are not represented.
- Positions between the five printed zoom states are inferred, and the printed states keep the small paraxial defocus residuals listed above.
- At the wide end the full Four Thirds corner is clipped (above); results at the extreme corner there describe the model's estimated rims, not the production lens.

## Sources

1. [JP 2020-154139 A](https://patentimages.storage.googleapis.com/ca/ad/17/1b2bf74e31ae09/JP2020154139A.pdf): front page; ¶0081, ¶0091–0092, ¶0097, ¶0099, ¶0157–0162; Figs. 1 and 9.
2. [JP 7204554 B2](https://patentimages.storage.googleapis.com/b5/76/4d/a1a3deb57fd289/JP7204554B2.pdf): the grant of the same application; its Example 1 table is identical to the A publication's.
3. [Olympus announcement, February 13, 2019](https://www.olympus-global.com/news/2019/nr01088.html) and [detailed release PDF](https://www.olympus-global.com/news/2019/contents/nr01088/nr01088_00002.pdf): introduction, construction and the single cemented inner-focus lens.
4. [OM SYSTEM specifications](https://jp.omsystem.com/product/lens/zoom/mzuiko/12-200_35-63/spec.html) and [features](https://jp.omsystem.com/product/lens/zoom/mzuiko/12-200_35-63/feature.html): product data and the construction diagram.
5. OHARA, HOYA and HIKARI catalogs: catalog-equivalent glass identification only.
