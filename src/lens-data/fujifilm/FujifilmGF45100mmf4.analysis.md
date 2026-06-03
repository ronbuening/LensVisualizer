# FUJINON GF45-100mmF4 R LM OIS WR - Optical Analysis

## Patent Reference and Design Identification

**Patent:** US 2020/0379223 A1  
**Application Number:** 16/884,884  
**Filed:** May 27, 2020  
**Published:** December 3, 2020  
**Priority:** May 29, 2019 (JP 2019-100680)  
**Inventor:** Ryoko Tomioka  
**Applicant / Assignee:** FUJIFILM Corporation  
**Title:** Zoom Lens and Imaging Apparatus  
**Embodiment analyzed:** Example 1 (Table 1 prescription; Table 2 specifications and variable separations; Table 3 aspheric coefficients; Figs. 1-3, 12, 21-22)

This analysis transcribes and interprets Example 1 of US 2020/0379223 A1. The patent is not a teardown of the shipping FUJINON GF45-100mmF4 R LM OIS WR; it is a close patent-family embodiment. The identification rests on several convergent points.

1. **Applicant and timing.** The filing is FUJIFILM's own 2019 priority application by Ryoko Tomioka. The production GF45-100mmF4 R LM OIS WR entered the GFX system in the same product cycle.
2. **Format and focal range.** Example 1 gives f = 45.95 / 63.82 / 97.97 mm and FNo. = 4.10 / 4.10 / 4.11 at wide, middle, and telephoto positions. The diagonal full angle is 64.4° / 47.0° / 31.2°, consistent with a 44 x 33 mm GFX standard zoom.
3. **Group architecture.** The patent's lens consists of four powered groups in positive-negative-positive-positive order. The third group is split into G3a, G3b, and G3c, with G3b moving laterally for image-shake correction (¶0007, ¶0075).
4. **Special-element signature.** The embodiment contains three aspherical elements: L22 and L31 are bi-aspheric, and L34 has an aspheric object-side surface. It also contains one very high-Abbe positive in G3a (L33, νd = 94.66) and one ED-class positive in G3c (L36, νd = 81.54).
5. **Focus and stabilization.** The patent focuses by moving only L25 in G2 toward the object (¶0090-¶0091), and stabilizes by decentering the cemented G3b doublet (¶0075-¶0078).

### Production specifications versus the patent embodiment

Manufacturer-published production specifications control hard product claims. Fujifilm publishes the production lens as a 45-100 mm constant-f/4 GFX zoom with 16 elements in 12 groups, including 3 aspherical, 1 ED, and 1 Super ED elements; it also publishes a 62.6°-30.6° angle of view, 0.65 m wide / 0.82 m telephoto focusing range, 0.13x maximum magnification, 82 mm filter size, and 9 rounded aperture blades.

| Specification | Production lens | Patent Example 1 |
|---|---:|---:|
| Focal length | 45-100 mm | 45.95-97.97 mm |
| Maximum aperture | f/4 | FNo. 4.10-4.11 |
| Angle of view | 62.6°-30.6° | 64.4°-31.2° |
| Elements / groups | 16 / 12 | 17 / 12 |
| Special elements | 3 aspherical, 1 ED, 1 Super ED | 3 aspherical elements; νd 81.54 and νd 94.66 positives |
| Focus range | 0.65 m wide / 0.82 m tele | infinity data only |
| Image stabilization | Optical IS | G3b lateral decentering group |

The production lens and patent therefore match strongly at the architectural and specification-family level, but not in element count. Example 1 is a 17-element embodiment; the shipping product is published as 16 elements. The most conservative reading is that the patent records the design family rather than the exact production prescription. The data file accordingly labels the prescription as **Patent Example 1**.

All radii, thicknesses, and refractive indices used here are from the patent tables. The patent uses the standard radius sign convention: a radius is positive when the surface is convex toward the object side (¶0109). Refractive indices and Abbe numbers are d-line values, with the d, C, F, and g lines defined at 587.56 nm, 656.27 nm, 486.13 nm, and 435.84 nm respectively (¶0027).

## Optical Architecture

Example 1 is a positive-lead standard zoom of the form **G1 positive - G2 negative - G3 positive - G4 positive** (¶0007, ¶0071). During zooming from wide to telephoto, G1, G2, and G3 move toward the object on separate trajectories while G4 remains fixed relative to the image plane (¶0073). The aperture stop lies between G2 and G3 and moves with G3 (¶0076, ¶0107).

The verified paraxial group focal lengths are:

| Group | Role | Focal length |
|---|---|---:|
| G1 (L11-L12) | Positive front collector, cemented doublet | +128.3 mm |
| G2 (L21-L25) | Negative variator, contains focus lens | -29.9 mm |
| G3 (L31-L39) | Positive relay, contains OIS sub-group | +35.2 mm |
| G3a (L31-L33) | Fixed front relay sub-group | +45.3 mm |
| G3b (L34-L35) | Decentering OIS doublet | -71.6 mm |
| G3c (L36-L39) | Fixed rear relay sub-group | +66.9 mm |
| G4 (L41) | Fixed positive field group | +140.0 mm |

The patent physical track from the first surface to the image plane, including the plane-parallel optical member PP, grows from 169.56 mm at wide angle to 198.89 mm at telephoto. The data file excludes PP as sensor/cover glass and folds its optical path into the final air-equivalent back focus; in that representation the track is 168.47 / 179.75 / 197.80 mm at wide, middle, and telephoto positions.

The zoom variables are the G1-G2 gap DD[3], the G2-G3 gap DD[12], and the G3-G4 gap DD[28]. DD[3] opens from 1.77 to 24.93 mm, DD[12] closes from 20.15 to 5.26 mm, and DD[28] opens from 4.00 to 25.06 mm. Because the patent provides only infinity-focus zoom tables, the data file models zoom only and does not invent close-focus gap values.

## Element-by-Element Analysis

Standalone element focal lengths below are thick-lens-in-air paraxial values computed from the Table 1 prescription. In cemented assemblies, these standalone values should not be mistaken for in-situ group powers.

### G1 - Positive collector

**L11 - Negative meniscus, convex to object.**  
nd = 1.91082, νd = 35.25. Glass: HOYA TAFD35 / TAFD35L. f = -146.2 mm.

L11 is the high-index negative member of the front cemented doublet. Its object-side convex meniscus shape follows the patent's preferred G1 construction (¶0098). The high index keeps the front curvatures moderate while allowing G1 to contribute chromatic correction before the negative variator.

**L12 - Positive meniscus, convex to object.**  
nd = 1.62041, νd = 60.37. Glass: 620603 crown class, closest to HOYA BACD16 / OHARA S-BSM16 / N-SK16 family. f = +66.7 mm.

L12 is the positive crown partner cemented to L11. The patent's νd = 60.37 is slightly higher than the most common catalog values for S-BSM16/BACD16-class glasses, so the identification is kept as a class rather than an exact glass name. The L11-L12 cemented pair has a net focal length of +128.3 mm.

### G2 - Negative variator and focus group

**L21 - Negative meniscus, convex to object.**  
nd = 2.00069, νd = 25.46. Glass: HOYA TAFD40. f = -34.4 mm.

L21 supplies the strong front-negative power of the variator. Its very high index and high dispersion are typical of a compact negative zoom group where surface curvatures must stay manufacturable.

**L22 - Positive meniscus, convex to image, bi-aspheric.**  
nd = 1.58254, νd = 59.47. Glass: HOYA M-BACD12 / MC-BACD12 class; no exact public catalog match. f = +218.0 mm.

L22 is weakly positive and near-afocal. Its two aspherical surfaces, patent surfaces 6 and 7, primarily shape the steep off-axis bundles entering the variator after L21. The moldable-crown class is plausible for a glass-molded asphere, but the stored nd is about 0.0006 lower than the common M/MC-BACD12 catalog value, so the catalog name is not asserted as an exact match.

**L23 - Biconcave negative.**  
nd = 1.48749, νd = 70.24. Glass: OHARA S-FSL5 / FK5 class. f = -41.7 mm.

L23 is the low-dispersion negative member of the variator achromat. It is cemented to the dense-flint positive L24 at surface 9.

**L24 - Biconvex positive.**  
nd = 1.84666, νd = 23.78. Glass: OHARA S-TIH53 / Schott N-SF57 class. f = +32.1 mm.

The L23-L24 cemented pair provides strong color balancing inside G2. L24's high dispersion counters the low-dispersion negative L23 while maintaining the negative group power needed for zooming.

**L25 - Plano-concave negative focus lens.**  
nd = 1.65160, νd = 58.55. Glass: OHARA S-LAL7 / S-LAL7Q. f = -69.1 mm.

L25 is the single moving focus lens identified in the patent (¶0090-¶0091). It moves toward the object when focusing from infinity to a shorter object distance. Its focal-length ratio to G2 is fFoc/f2 = 2.314, satisfying the patent's focus-lens condition.

### G3a - Fixed front relay

**L31 - Biconvex positive, bi-aspheric.**  
nd = 1.69350, νd = 53.20. Glass: HOYA M-LAC130 / MC-LAC130 moldable lanthanum crown. f = +37.2 mm.

L31 is the first strong positive relay element behind the stop. Its two aspherical surfaces, patent surfaces 14 and 15, control spherical aberration and off-axis aberrations in the converging beam.

**L32 - Biconcave negative.**  
nd = 1.64769, νd = 33.79. Glass: OHARA S-TIM22 / N-SF2 class. f = -31.0 mm.

L32 is the negative flint member of the G3a cemented achromat. It is nearly plano-concave on the front side and strongly concave toward the image side, matching the patent's preferred G3a sequence (¶0100).

**L33 - Biconvex positive, Super ED.**  
nd = 1.43875, νd = 94.66. Glass: OHARA S-FPL55 / FCD100-class Super ED. f = +37.8 mm.

L33 is the Super-ED positive in G3a. It forms the positive partner of the L32-L33 cemented doublet and is one of the two high-Abbe positive elements flanking the stabilizer. Its image-side convex surface creates clearance for the moving G3b group (¶0087).

### G3b - Decentering image-stabilization group

**L34 - Positive meniscus, concave to object, aspheric resin.**  
nd = 1.62426, νd = 23.06. Material: unmatched high-index, high-dispersion optical resin; W3bp = 1.228. f = +392.4 mm.

L34 is deliberately unusual. It is the positive member of the OIS doublet, but it is very weak in standalone power and is specified with a low specific gravity. Table 28 gives W3bp = 1.228, far below optical glass and consistent with a molded optical polymer. This supports the patent's stated goal of reducing the moving stabilizer mass (¶0004-¶0006, ¶0097).

**L35 - Biconcave negative.**  
nd = 1.48749, νd = 70.24. Glass: OHARA S-FSL5 / FK5 class. f = -60.6 mm.

L35 is the low-dispersion negative member cemented to L34. The positive element has νd = 23.06 and the negative has νd = 70.24, satisfying the patent's condition v3bp < v3bn and limiting chromatic changes during stabilizer decentering (¶0078-¶0086).

### G3c - Fixed rear relay

**L36 - Biconvex positive, ED.**  
nd = 1.49700, νd = 81.54. Glass: OHARA S-FPL51 / HOYA FCD1-class ED. f = +38.1 mm.

L36 is the ED positive on the image side of the stabilizer. Together with L33, it corrects the axial color introduced by the high-dispersion positive resin element in G3b (¶0081). Its object-side convex surface also opens peripheral clearance for the OIS group (¶0087).

**L37 - Biconcave negative.**  
nd = 1.67003, νd = 47.23. Glass: OHARA S-BAH10 / HOYA BAF10 / Schott N-BAF10 class. f = -88.0 mm.

L37 is a barium dense-flint negative in the rear relay. It is cemented to L38, forming a second rear achromat after the stabilizer.

**L38 - Biconvex positive.**  
nd = 1.51680, νd = 64.20. Glass: HOYA BSC7 / OHARA S-BSL7 / Schott N-BK7 class. f = +101.4 mm.

L38 is the crown partner of the L37-L38 doublet. Its low power and crown dispersion help stabilize rear-relay color without adding much field curvature.

**L39 - Negative meniscus, convex to image.**  
nd = 1.90043, νd = 37.37. Glass: HOYA TAFD37. f = -42.9 mm.

L39 is the rear negative meniscus of G3c. The patent specifically favors a negative meniscus at the image side of G3c paired with a single positive G4 element to control distortion and lateral color across zooming (¶0088).

### G4 - Fixed positive field group

**L41 - Positive meniscus, convex to image.**  
nd = 2.00272, νd = 19.32. Glass: HOYA E-FDS2. f = +140.0 mm.

L41 is the single fixed fourth-group element. Its very low Abbe number satisfies the patent's vLast < 30 condition and helps balance lateral chromatic aberration where chief-ray height is large (¶0089). The fourth group remains fixed during zooming (¶0073).

## Glass Identification and Selection

The glass palette is dominated by Japanese catalog glasses from HOYA and OHARA, with several cross-vendor equivalents. Identifications below are based on the stored nd/νd pair and public catalog matches. Where the patent values do not match a catalog entry closely enough, the entry is labeled as a class or unmatched material.

| Element | nd | νd | Identification | Note |
|---|---:|---:|---|---|
| L11 | 1.91082 | 35.25 | HOYA TAFD35 / TAFD35L | exact catalog match |
| L12 | 1.62041 | 60.37 | 620603 crown class | close to BACD16 / S-BSM16; νd slightly high |
| L21 | 2.00069 | 25.46 | HOYA TAFD40 | exact catalog match |
| L22 | 1.58254 | 59.47 | M-BACD12 / MC-BACD12 class | moldable crown; nd about 0.0006 below common catalog value |
| L23 | 1.48749 | 70.24 | OHARA S-FSL5 / FK5 class | used twice, also L35 |
| L24 | 1.84666 | 23.78 | OHARA S-TIH53 / N-SF57 class | dense flint variator partner |
| L25 | 1.65160 | 58.55 | OHARA S-LAL7 / S-LAL7Q | focus lens |
| L31 | 1.69350 | 53.20 | HOYA M-LAC130 / MC-LAC130 | moldable aspheric crown |
| L32 | 1.64769 | 33.79 | OHARA S-TIM22 / N-SF2 class | G3a flint |
| L33 | 1.43875 | 94.66 | OHARA S-FPL55 / FCD100-class | Super ED |
| L34 | 1.62426 | 23.06 | unmatched optical resin | W3bp = 1.228, not glass |
| L35 | 1.48749 | 70.24 | OHARA S-FSL5 / FK5 class | OIS negative |
| L36 | 1.49700 | 81.54 | OHARA S-FPL51 / FCD1-class | ED |
| L37 | 1.67003 | 47.23 | OHARA S-BAH10 / BAF10 / N-BAF10 class | rear relay flint |
| L38 | 1.51680 | 64.20 | HOYA BSC7 / S-BSL7 / N-BK7 class | crown partner |
| L39 | 1.90043 | 37.37 | HOYA TAFD37 | high-index rear negative |
| L41 | 2.00272 | 19.32 | HOYA E-FDS2 | extreme dense flint |

The chromatic strategy centers on the stabilizer. The moving G3b doublet deliberately uses a high-dispersion positive element and a low-dispersion negative element, satisfying v3bp < v3bn and v3bn - v3bp = 47.18. The fixed positive elements on either side, L33 (νd = 94.66) and L36 (νd = 81.54), reduce the axial color burden created by that high-dispersion resin positive. The data file supplies catalog line-index fields for S-FPL55 and S-FPL51, but no unsupported numeric ΔPgF values are asserted here because the patent itself publishes only nd and νd.

## Focus Mechanism

The patent uses internal focusing by **L25 alone**. L25 is the rearmost element of G2 and moves toward the object for shorter object distances (¶0090). The production lens is described by Fujifilm as using a linear-motor internal-focus system, but the patent tables publish only infinity-focus zoom spacings. No close-focus prescription is present.

| Variable gap | Wide | Middle | Tele | Function in data file |
|---|---:|---:|---:|---|
| DD[3] | 1.77 | 10.67 | 24.93 | zoom only |
| DD[12] | 20.15 | 12.96 | 5.26 | zoom only |
| DD[28] | 4.00 | 13.57 | 25.06 | zoom only |

Because close-focus gaps are not tabulated, the data file uses identical infinity and close-focus values for those variables. The `closeFocusM` field records Fujifilm's production minimum focus distance at the wide end for catalog display, not a modeled close-focus optical state.

## Aspherical Surfaces

Example 1 uses five aspherical surfaces on three elements: surfaces 6 and 7 on L22, surfaces 14 and 15 on L31, and surface 19 on L34. The patent marks these surfaces with asterisks in Table 1 and gives coefficients in Table 3.

The patent sag formula is:

$$
Zd = rac{C h^2}{1 + \sqrt{1 - KA \cdot C^2 h^2}} + \sum_m A_m h^m
$$

In the standard conic notation used by the data file, $K = KA - 1$. Example 1 gives KA = 1.0000000 for every aspherical surface, so the standard conic constant is K = 0 for all five aspheres; all departure comes from the polynomial terms.

| Surface | Element | A4 | A6 | A8 | A10 | A12 | A14 | A16 |
|---|---|---:|---:|---:|---:|---:|---:|---:|
| 6 | L22 front | +3.0320507E-06 | +7.7238248E-09 | -5.6674531E-11 | +7.7710768E-14 | +4.0020465E-16 | -1.4412121E-18 | +1.5225693E-21 |
| 7 | L22 rear | +2.0975509E-06 | +3.6773521E-09 | -3.9337229E-11 | +4.7729609E-14 | +2.3293492E-16 | -5.2998395E-19 | +3.1541188E-22 |
| 14 | L31 front | -4.8903066E-06 | -1.7950741E-09 | +1.5202450E-11 | +8.5439410E-14 | -3.3109941E-16 | -3.1184262E-18 | +1.1161610E-20 |
| 15 | L31 rear | +2.6929775E-06 | -9.7459299E-10 | +5.2156920E-11 | -1.1283672E-13 | -2.9372467E-17 | -2.4518032E-18 | +9.2207161E-21 |
| 19 | L34 front | +1.5879642E-06 | +1.8183323E-09 | +4.5043089E-11 | -2.3033303E-13 | -6.4311905E-16 | +8.6767356E-18 | -2.1736388E-20 |

L22's two aspheres correct the strongly diverging wide-angle bundles after L21. L31's two aspheres control spherical aberration and field behavior immediately behind the stop. L34's single asphere is on the resin positive of the moving OIS group, reducing the aberration penalty as that group decenters.

## Image Stabilization

Image stabilization is performed by G3b, the cemented L34-L35 doublet. It moves in a direction intersecting the optical axis during image-shake correction (¶0075). The patent's stated problem is to reduce stabilizer mass while reducing chromatic change during correction (¶0004-¶0006).

The design solves that problem by using only two elements in the moving group, by making the positive member a low-specific-gravity resin element, and by pairing that high-dispersion positive with a low-dispersion negative. The neighboring fixed groups are shaped for mechanical clearance: L33's image-side surface and L36's object-side surface are both convex toward the stabilizer, increasing off-axis clearance for lateral motion (¶0087).

The patent's lateral-aberration figures for Example 1 show the system with and without vibration reduction at wide and telephoto positions under a 0.4° tilt condition (Figs. 21-22). Those diagrams are not re-rendered in the data file, but they support the identification of G3b as the OIS group.

## Conditional Expressions

Table 28 gives the Example 1 values for the patent's conditional expressions. Independent paraxial computation reproduces all expressions that depend only on the first-order prescription.

| No. | Expression | Verified value |
|---|---|---:|
| (1) | D3bp / D3bn | 0.382 |
| (2) | v3bp < v3bn | 23.06 < 70.24 |
| (3) | |f3bp / f3bn| | 6.470 |
| (4) | D3bp / Dac | 0.082 |
| (5) | |(1 - β3bw) · βrw| | 0.953 (patent table) |
| (6) | |(1 - β3bt) · βrt| | 1.306 (patent table) |
| (7) | v3bn - v3bp | 47.18 |
| (8) | vLast | 19.32 |
| (9) | fFoc / f2 | 2.314 |
| (10) | fw / f1 | 0.358 |
| (11) | fw / |f2| | 1.539 |
| (12) | fw / f3 | 1.305 |
| (13) | fw / f4 | 0.328 |
| (14) | f3 / f4 | 0.252 |
| (15) | W3bp | 1.228 |

Expressions (5) and (6) depend on the patent's stated lateral magnification terms for image-shake correction and are reported on the patent table's authority. The remaining values were recomputed directly from the prescription.

## Verification Summary

The Table 1/2/3 prescription was independently ray-traced with a paraxial y-nu matrix calculation.

| Quantity | Verified result |
|---|---:|
| EFL, wide / middle / tele | 45.947 / 63.829 / 97.963 mm |
| Published f, wide / middle / tele | 45.95 / 63.82 / 97.97 mm |
| Folded air-equivalent BFD after excluding PP | 26.78 mm |
| Group focal lengths G1 / G2 / G3 / G4 | +128.3 / -29.9 / +35.2 / +140.0 mm |
| Petzval sum, surface-by-surface | +8.5003E-04 mm^-1 |
| Petzval radius | approximately +1176 mm |

The Petzval sum is computed surface by surface as φ/(n · n′), not from thin-lens element approximations. Semi-diameters are not published in the patent; the data file's semi-diameters are inferred and pass the project's edge-thickness, SD-ratio, cross-gap sag, and rim-height checks. The tightest clearances are in the G2 region around surfaces 5-8 and at several cemented high-curvature elements, so the file uses deliberately conservative semi-diameters rather than ray-height maxima alone.

## Sources

- US 2020/0379223 A1, FUJIFILM Corporation, "Zoom Lens and Imaging Apparatus," Example 1: Table 1 prescription, Table 2 zoom specifications, Table 3 aspherical coefficients, Table 28 conditional-expression correspondence, and Figs. 1-3, 12, 21-22.
- Fujifilm published specifications for the FUJINON GF45-100mmF4 R LM OIS WR: production focal range, aperture, element/group count, special-element count, focus range, maximum magnification, filter size, and diaphragm data.
- OHARA optical-glass catalog data for S-FSL5, S-TIH53, S-LAL7/S-LAL7Q, S-TIM22, S-FPL55, S-FPL51, S-BAH10, and S-BSL7 class cross-checks.
- HOYA optical-glass catalog data for TAFD35/TAFD35L, TAFD40, M/MC-BACD12 class, M/MC-LAC130, TAFD37, E-FDS2, and BSC7 class cross-checks.
- Schott catalog equivalence used only as a class cross-reference where Japanese catalog names are not uniquely determined by nd/νd.
