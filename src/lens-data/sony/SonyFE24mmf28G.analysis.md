## Patent Reference and Design Identification

**Patent:** JP 2022-030896 A  
**Application Number:** 2020-135214  
**Filed:** 2020-08-07  
**Published:** 2022-02-18  
**Inventors:** Yamazoe Jun'ichi (山添 純一), Tazaki Ryōhei (田崎 涼平)  
**Applicants:** Tamron Co., Ltd. (株式会社タムロン); Sony Group Corporation (ソニーグループ株式会社)  
**Title:** 光学系及び撮像装置 (Optical System and Imaging Apparatus)  
**Classification:** G02B 13/00, G02B 13/18  
**Claims:** 9  
**Worked examples:** 4  
**Embodiment analyzed:** Example 1 (実施例1)

Example 1 is identified as the closest patent embodiment for the Sony FE 24mm F2.8 G (SEL24F28G) by convergent prescription and product evidence.

1. **Element and group count.** The patent embodiment has eight lens elements in seven air-separated groups when the two resin-hybrid aspherical components are counted as single composite lenses, matching Sony's published 8-element / 7-group construction.
2. **Focal length.** The patent focal length is $f = 24.710$ mm, corresponding to the marketed 24 mm focal length.
3. **Maximum aperture.** The patent gives $F_{no} = 2.884$, corresponding to the marketed f/2.8 maximum aperture.
4. **Image circle and field.** The patent half-field angle is $\omega = 42.489^\circ$ and the ideal image height from $F \tan\omega$ is 22.634 mm, appropriate for 35 mm full frame. Sony publishes an 84° full-frame angle of view.
5. **Focusing system.** The patent uses inner focusing: G1 and G3 remain fixed relative to the image plane while positive G2 moves objectward. Sony publishes internal focusing with a dual linear-motor drive system; the motor technology is production metadata, not part of the patent prescription.
6. **Close-focus distance.** The patent publishes the near-focus state at 180.000 mm measured from the first lens surface. Sony publishes 0.18 m minimum focus in MF and 0.24 m in AF.
7. **Special-element pattern.** The prescription contains four aspherical surfaces on three optical components: two resin-hybrid aspherical layers and a double-sided aspherical glass element. It also contains two patent-listed positive anomalous-dispersion fluorophosphate elements, L5 and L7. Sony regional product pages describe “two AA elements and three ED glasses.” The patent supports the aspherical construction directly and supports L5/L7 as fluorophosphate low-dispersion elements directly; a one-for-one mapping from patent glass rows to the production marketing count remains inferred rather than proven.
8. **Patent timing.** The patent was filed in August 2020 and published in February 2022; Sony announced the FE 24mm F2.8 G in March 2021.

Examples 2-4 in the same patent share the same broad three-group architecture and inner-focus kinematics. Example 2 has a different rear-group construction and shorter back focus. Example 3 uses a ten-lens construction and a faster design aperture. Example 4 is close to Example 1, but its glass choices, rear group, and back focus differ. Example 1 is the closest match to the production lens by focal length, aperture, element/group count, close-focus distance, and overall construction.

## Optical Architecture

The design is a compact full-frame wide-angle prime with a positive-positive-negative group sequence. The patent describes this power distribution as a “telephoto configuration” because the front positive power and rear negative power compact the total optical length relative to a less concentrated design. In the classical photographic sense, however, the lens is not a telephoto lens: its air-equivalent total track is 60.000 mm for a 24.710 mm focal length, so $T_L/F_L = 2.428 > 1$.

The first group, G1, spans surfaces 1-11 and has $f_{G1} = +19.31$ mm. It is subdivided into a negative front subgroup G1a, the aperture stop, and a positive rear subgroup G1b. G1a comprises L1 and the first hybrid composite L2/L2r. It spreads the high-angle wide-field ray bundle while distributing the negative power across two components. G1b contains L3 and the cemented L4/L5 doublet, providing the main converging power and primary chromatic correction.

The second group, G2, spans surfaces 12-16 and has $f_{G2} = +34.73$ mm. It is the sole focusing group. It contains the second hybrid composite L6r/L6 and the positive ED aspherical meniscus L7. G2 moves 1.542 mm toward the object between infinity and the 0.18 m patent state; its internal spacings remain fixed.

The third group, G3, is a single biconcave element L8 at surfaces 17-18 with $f_{G3} = -25.62$ mm. It is the rear negative compacting and field-control group. Its negative power increases the rear-group lateral magnification and helps hold the back focus and overall length within the patent’s compactness conditions.

The system effective focal length independently computed from the prescription is 24.709 mm. The project data file excludes the patent cover glass and folds its optical path into the final air gap: $18.907 + 2.500/1.51680 + 1.000 = 21.555$ mm, matching the patent’s air-equivalent back focus.

## Element-by-Element Analysis

### L1 — Negative Meniscus, Convex to Object

nd = 1.48749, νd = 70.44. Glass: FC5 (HOYA, 487/704 code) / S-FSL5 (OHARA, 487/702 code) class — low-dispersion fluorocrown class. f = -36.45 mm.

L1 is the front negative meniscus of G1a. Both radii are positive ($R_1 = +27.692$ mm, $R_2 = +10.708$ mm), making it convex to the object and substantially negative. Its steep rear surface supplies most of the element power and begins the wide-angle beam expansion before the stop.

L1 is the largest clear-aperture element in G1a, but not the widest surface in the complete prescription. The widest listed patent clear aperture is the rear surface of L8 at $H = 9.640$ mm; L1’s front clear aperture is $H = 8.930$ mm.

The glass assignment is best treated as an index-code match rather than a named patent disclosure. The patent gives only nd and νd; the six-digit code is 487/704, which corresponds closely to HOYA FC5 in cross-reference tables.

### L2 + L2r — Hybrid Composite Negative Lens, G1a Rear

L2 body: nd = 1.48749, νd = 70.44. Glass: FC5 (HOYA, 487/704 code) / S-FSL5 (OHARA, 487/702 code) class — low-dispersion fluorocrown class. f = -33.11 mm.  
L2r resin: nd = 1.53610, νd = 41.21. Material: proprietary optical resin. f = +134.44 mm as an isolated thin layer.  
Composite net: f = -43.98 mm.

The second G1a component is a hybrid composite: a biconcave low-dispersion glass body with a thin aspherical resin layer on the image-side face. The patent prose explicitly describes this component as a composite lens in which an image-side aspherical resin layer is unified with a biconcave lens.

The glass body provides the dominant negative power. The resin layer has only weak standalone positive power but supplies the first aspherical correction surface, located where the wide-angle beam has already been expanded by L1 and the L2 glass body. This placement makes the surface useful for field curvature, astigmatism, and coma control before the aperture stop.

In the data file the resin is modeled as an explicit optical element because it has its own refractive index, Abbe number, thickness, and aspherical outer surface. The top-level element count remains eight, following the patent and production convention that counts each hybrid composite as one lens element.

### L3 — Biconvex Positive, G1b Front

nd = 1.83481, νd = 42.72. Glass: S-LAH55VS (OHARA, 835/427 code) — high-index lanthanum dense flint. f = +21.68 mm.

L3 is the first powered element after the stop and the strongest positive singlet in the front half of the system. Its biconvex shape ($R_1 = +46.922$ mm, $R_2 = -28.663$ mm) gathers the diverged beam from G1a and begins forming the convergent bundle that feeds the cemented chromatic-correction doublet.

The high refractive index is the important material choice. It allows the element to supply substantial positive power without radii so steep that spherical aberration and manufacturing sensitivity would become excessive. With νd below 50, this is a dense flint-family material rather than a crown despite its lanthanum content.

The patent’s general description states that aspherical surfaces are useful in G1b and G2 for aberration correction, but Example 1 leaves G1b all-spherical. In this embodiment, the strongest aspherical spherical-aberration correction is instead carried downstream by the G2 hybrid surface and the double-sided L7 asphere.

### L4 + L5 — Cemented Chromatic-Correction Doublet, G1b Rear

L4: nd = 1.72047, νd = 34.71. Glass: S-NBH8 (OHARA, 720/347 code). f = -21.65 mm.  
L5: nd = 1.49700, νd = 81.61, ΔPgF = +0.0374 (patent). Glass: FCD1/FCD1B (HOYA) / S-FPL51 (OHARA), 497/816 code. f = +15.19 mm.  
Cemented doublet net: f = +37.77 mm.

The L4/L5 doublet is the primary axial chromatic-correction unit of G1b. L4 is a high-dispersion negative meniscus, and L5 is a strong positive fluorophosphate element. The large Abbe-number separation between νd = 34.71 and νd = 81.61 gives the pair strong primary achromatizing leverage.

L5 is also the patent’s positive lens $L_p$ in G1b satisfying condition (4), $0.012 \le \Delta PgF_{1b} \le 0.100$. The patent lists $\Delta PgF = +0.0374$ for L5. That value should be treated as a patent-defined anomalous-dispersion value, not as a Schott-normal-line catalog value.

The cemented interface at $R = +15.165$ mm carries the transition from L4 to L5. The rear surface of L5, $R = -13.100$ mm, is steep and supplies much of the doublet’s positive convergence.

### L6r + L6 — Hybrid Composite Negative Lens, G2 Front

L6r resin: nd = 1.53610, νd = 41.21. Material: proprietary optical resin. f ≈ -5449 mm as an isolated layer.  
L6 body: nd = 1.54814, νd = 45.82. Glass: S-TIL1 (OHARA, 548/458 code). f = -69.15 mm.  
Composite net: f = -67.89 mm.

The first component of the moving focus group is a hybrid composite with the resin layer on the object side. Surface 12 is aspherical, and the junction surface 13 is nearly concentric with it. The resin layer therefore behaves primarily as an aspherical correcting plate rather than as a powered lens.

The glass body is a weak negative meniscus that moderates the positive power of L7 and helps stabilize aberrations as G2 moves during focusing. Since the whole component moves with G2, its aspherical correction must remain effective at both infinity and close focus.

The two resin layers in the design share the same patent index data, nd = 1.53610 and νd = 41.21. No public catalog glass identification should be inferred for them.

### L7 — Positive ED Meniscus with Two Aspherical Surfaces, G2 Rear

nd = 1.49710, νd = 81.56, ΔPgF = +0.0369 (patent). Glass: FCD1B (HOYA) / S-FPL51 (OHARA), 497/816 code. f = +25.40 mm.

L7 is the main positive powered element in G2. It is a meniscus concave to the object, with a very weak front radius ($R_1 = -399.343$ mm) and a much stronger rear radius ($R_2 = -12.285$ mm). Both surfaces are aspherical.

Because L7 moves during focusing, its chromatic and spherical-aberration contribution changes with object distance unless controlled. The fluorophosphate glass and the paired aspherical surfaces are therefore central to maintaining correction across the focus stroke.

The patent gives a separate anomalous-dispersion value for this element, $\Delta PgF = +0.0369$. It is close to, but not identical with, the L5 value. The best catalog/code match is the FCD1B / S-FPL51 fluorophosphate region, but the patent itself names no vendor glass.

### L8 — Biconcave Negative Rear Group, G3

nd = 1.54072, νd = 47.20. Glass: S-TIL2 (OHARA, 541/472 code). f = -25.62 mm.

L8 is the only element in G3 and the last lens element before the image plane. Its biconcave form ($R_1 = -20.578$ mm, $R_2 = +43.110$ mm) gives it strong negative power. It expands the converging beam from G1/G2, increases the rear-group lateral magnification, and helps satisfy the compactness conditions centered on $\beta_3$, $BF/Y_i$, and $T_L/F_L$.

L8 also has the largest listed clear aperture in the patent prescription: $H = 9.640$ mm on the rear surface. This is consistent with its position near the image side, where it must pass a wide full-frame field after the rear negative power has expanded the bundle.

## Glass Identification and Selection

| Element | nd | νd | Patent ΔPgF | Catalog-style assignment | Role |
|---|---:|---:|---:|---|---|
| L1 | 1.48749 | 70.44 | — | FC5 (HOYA 487/704) / S-FSL5 (OHARA 487/702) class | Low-dispersion negative front meniscus |
| L2 | 1.48749 | 70.44 | — | FC5 (HOYA 487/704) / S-FSL5 (OHARA 487/702) class | Low-dispersion negative body of first hybrid |
| L2r | 1.53610 | 41.21 | — | Proprietary optical resin | Rear aspherical resin layer |
| L3 | 1.83481 | 42.72 | — | S-LAH55VS (OHARA), 835/427 code | High-index positive collector |
| L4 | 1.72047 | 34.71 | — | S-NBH8 (OHARA), 720/347 code | High-dispersion negative achromat partner |
| L5 | 1.49700 | 81.61 | +0.0374 | FCD1/FCD1B / S-FPL51 class, 497/816 code | Positive ED element in G1b doublet |
| L6r | 1.53610 | 41.21 | — | Proprietary optical resin | Front aspherical resin layer in G2 |
| L6 | 1.54814 | 45.82 | — | S-TIL1 (OHARA), 548/458 code | Weak negative moving-group body |
| L7 | 1.49710 | 81.56 | +0.0369 | FCD1B / S-FPL51 class, 497/816 code | Positive ED moving-group asphere |
| L8 | 1.54072 | 47.20 | — | S-TIL2 (OHARA), 541/472 code | Negative rear-group field/compactness element |

Only L5 and L7 carry patent-published ΔPgF values. Catalog anomalous-dispersion values are not asserted for L1/L2 or L4 because the patent does not publish those values, and catalog-name matching from nd/νd alone is not enough to prove a partial-dispersion curve.

The anomalous-dispersion reference used by the patent is defined through the C7 and F2 glass points: $PgF = 0.5393$, $\nu_d = 60.49$ and $PgF = 0.5829$, $\nu_d = 36.30$. This yields a patent-normal line of approximately $PgF_{normal} = 0.6484 - 0.001803\nu_d$. Values quoted from the patent therefore should not be mixed silently with Schott-normal-line catalog ΔPgF values.

The chromatic strategy is concentrated in two places. First, L4/L5 forms a high-dispersion-negative / low-dispersion-positive cemented doublet in the converging portion of G1b. Second, L7 keeps the moving focus group’s positive power in a low-dispersion fluorophosphate material so chromatic aberration does not vary excessively with focus position.

## Focus Mechanism

The lens uses inner focusing. G1 and G3 remain fixed relative to the image plane, while G2 translates objectward as the lens focuses from infinity to the 180 mm patent near-focus state.

| Parameter | Infinity | 180 mm state |
|---|---:|---:|
| D(11), G1/G2 gap | 4.520 mm | 2.978 mm |
| D(16), G2/G3 gap | 2.535 mm | 4.077 mm |
| D(11) + D(16) | 7.055 mm | 7.055 mm |
| G2 displacement | — | 1.542 mm objectward |

The invariant sum D(11) + D(16) confirms rigid-body translation of G2. The patent’s Table 3 labels these variable spacings as D(5) and D(7), but that is inconsistent with the surface prescription, which marks D(11) and D(16) as the only variable spacings in Example 1. The data file uses D(11) and D(16).

Sony’s production specifications distinguish AF and MF close-focus limits: 0.24 m in AF and 0.18 m in MF. The patent prescription corresponds to the MF limit.

## Aspherical Surfaces

The patent defines the aspherical sag as:

$$
z = \frac{c h^2}{1 + \sqrt{1 - (1+K)c^2h^2}} + A_4h^4 + A_6h^6 + A_8h^8
$$

where $c = 1/r$, $h$ is ray height, $K$ is the conic constant, and unlisted higher coefficients are zero. For Example 1 all four aspherical surfaces use $K = 0$, so the base conic is spherical and all departure comes from the even polynomial terms.

### Surface 5 — Rear resin surface of L2/L2r

| Coefficient | Value |
|---|---:|
| K | 0.0000E+00 |
| A4 | +1.6217E-04 |
| A6 | +5.4176E-07 |
| A8 | +1.8017E-08 |

All listed polynomial coefficients are positive. On the weak positive radius of surface 5, the surface gains increasing polynomial sag toward the rim. This is the first high-leverage wide-field correction surface after the two negative G1a components.

### Surface 12 — Front resin surface of L6r/L6

| Coefficient | Value |
|---|---:|
| K | 0.0000E+00 |
| A4 | +7.7335E-05 |
| A6 | -8.1694E-07 |
| A8 | +3.8172E-09 |

Surface 12 moves with G2. Its positive A4 and negative A6 terms give it a non-simple departure profile, useful for controlling focus-dependent coma, astigmatism, and spherical residuals without adding much powered resin thickness.

### Surface 15 — Front surface of L7

| Coefficient | Value |
|---|---:|
| K | 0.0000E+00 |
| A4 | -1.2010E-04 |
| A6 | +6.1727E-07 |
| A8 | -2.7390E-09 |

Surface 15 has the largest-magnitude A4 term in the design. Because the base radius is nearly flat, the polynomial departure dominates the useful correcting action of this surface. It is one of the main spherical-aberration correction surfaces in G2.

### Surface 16 — Rear surface of L7

| Coefficient | Value |
|---|---:|
| K | 0.0000E+00 |
| A4 | +3.8253E-05 |
| A6 | -3.5929E-09 |
| A8 | +1.6953E-09 |

Surface 16 sits on the steep rear face of the positive L7 meniscus and immediately precedes the G2/G3 variable air gap. Its aspherical departure works together with surface 15 to control spherical aberration and higher-order off-axis residuals across the focus stroke.

The three aspherical optical components in the patent are therefore L2/L2r, L6r/L6, and L7. The two resin layers correspond structurally to hybrid/AA-style composite aspherical elements; L7 is the double-sided glass asphere in the moving focus group.

## Chromatic Correction Strategy

The front half of the system uses negative low-dispersion elements followed by a positive achromatizing section. L1 and L2 both use a 487/704-type fluorocrown, reducing chromatic burden in the negative front subgroup. The main achromatic pairing is L4/L5: a high-dispersion negative short flint cemented to a positive fluorophosphate ED element.

The moving focus group repeats the low-dispersion positive strategy with L7. This matters because G2 is the only group whose axial position changes. If G2 contained a high-dispersion positive element, axial color and focus-dependent chromatic residuals would change more strongly between infinity and close focus.

The patent’s ΔPgF values for L5 and L7 are high under the patent’s own anomalous-dispersion convention. Those values support secondary-spectrum control, but the design should not be called apochromatic from the patent data alone; the patent provides only limited line-dispersion information and does not publish full spectral correction curves.

## Conditional Expressions

The patent defines conditions (1), (2), and (4)-(8), with expression (3) defining the ideal image height. Example 1 satisfies all listed conditions.

| Expression | Formula | Patent value | Independently computed | Bounds |
|---|---|---:|---:|---|
| (1) | $\lvert\beta_3\rvert$ | 1.859 | 1.859 (patent table) | 1.7-5.0 |
| (2) | $BF / Y_i$ | 0.952 | 0.9523 | 0.4-2.0 |
| (4) | $\Delta PgF_{1b}$ | 0.0374 | 0.0374 (patent table) | 0.012-0.100 |
| (5) | $T_L/F_L$ | 2.428 | 2.4282 | 1.0-2.9 |
| (6) | $f_1/F_L$ | 0.782 | 0.7815 | 0.5-1.1 |
| (7) | $\{1-(\beta_2)^2\}(\beta_3)^2$ | 1.818 | 1.820 from rounded β values | 1.0-4.0 |
| (8) | $L_{1a}/Y_i$ | 0.456 | 0.4558 | 0.1-0.9 |

The computation uses $F_L = 24.710$ mm, $BF = 21.555$ mm, $T_L = 60.000$ mm, $f_1 = 19.312$ mm, $\omega = 42.489^\circ$, and $Y_i = F_L \tan\omega = 22.634$ mm. The patent’s $Y = 19.924$ mm in Table 2 is the actual maximum image height used in the aberration plots; the conditional expressions use the ideal height $Y_i$ from expression (3).

The expression (7) recomputation differs slightly from the patent table because the patent publishes rounded $\beta_2 = 0.688$ and $\beta_3 = 1.859$. Using those rounded values gives 1.820, while the patent table gives 1.818 from unrounded internal values.

## Verification Summary

All load-bearing values were re-derived from the patent surface table using a paraxial y-ν ray trace and independent thick-lens group calculations.

| Quantity | Patent | Computed | Difference |
|---|---:|---:|---:|
| System EFL | 24.710 mm | 24.709 mm | -0.001 mm |
| G1 focal length | 19.312 mm | 19.311 mm | -0.001 mm |
| G2 focal length | 34.734 mm | 34.735 mm | +0.001 mm |
| G3 focal length | -25.620 mm | -25.619 mm | +0.001 mm |
| Air-equivalent BF | 21.555 mm | 21.555 mm | 0.000 mm |
| Air-equivalent total track | 60.000 mm | 59.999 mm | -0.001 mm |
| G2 focus travel | 1.542 mm | 1.542 mm | 0.000 mm |
| Petzval sum, lens only | — | +0.002690 mm^-1 | — |
| Petzval radius, lens only | — | 371.7 mm | — |

Standalone and compound focal lengths were also checked: L1 = -36.45 mm, L2 glass = -33.11 mm, L2/L2r composite = -43.98 mm, L3 = +21.68 mm, L4 = -21.65 mm, L5 = +15.19 mm, L4/L5 doublet = +37.77 mm, L6r/L6 composite = -67.89 mm, L7 = +25.40 mm, and L8 = -25.62 mm.

The data file reproduces the patent prescription with two deliberate implementation choices. First, sensor cover glass is excluded and folded into the final air-equivalent back focus, following the project data specification. Second, the aperture-stop semi-diameter is set to 5.6105 mm so the paraxial entrance pupil reproduces the patent F-number of 2.884; the patent’s tabulated stop H value of 5.769 mm is retained in the analysis as a clear-aperture value rather than as the entrance-pupil-defining stop radius.

## Sources

- JP 2022-030896 A, Japan Patent Office / J-PlatPat. Primary source for the prescription, group construction, focusing movement, conditional expressions, cover-glass path, and aspherical coefficients.
- Sony Support, “SEL24F28G Specifications.” Source for production focal length, mount, full-frame format, lens construction, angle of view, minimum focus distances, aperture, filter size, dimensions, and weight. https://www.sony.com/electronics/support/lenses-e-mount-lenses/sel24f28g/specifications
- Sony regional product pages for SEL24F28G. Source for production feature language including “two AA elements and three ED glasses,” noted here as marketing terminology rather than a patent-glass identification. https://www.sony-asia.com/lenses/products/sel24f28g
- Sony Asia Pacific press release, “Sony Introduces Three New High-Performance G Lenses to Full-Frame Lens Series,” 2021-03-24. Source for announcement timing and product context. https://www.sony-asia.com/pressrelease?prName=sony-introduces-three-new-high-performance-g-lenses-to-full-frame-lens-series
- HOYA Optical Glass, “Glass Cross Reference Index.” Source for six-digit glass-code cross-reference method and FC5/FCD-family equivalence checks. https://www.hoya-opticalworld.com/english/products/crossreference.html
- OHARA optical-glass catalog pages and comparative tables. Source for catalog checks on S-LAH55VS, S-NBH8, S-TIL1, S-TIL2, S-FSL5, and S-FPL51 assignments. https://oharacorp.com/glass/s-lah55vs/ ; https://oharacorp.com/glass/s-nbh8/ ; https://oharacorp.com/glass/s-til1/ ; https://www.ohara-inc.co.jp/en/product/01002/
