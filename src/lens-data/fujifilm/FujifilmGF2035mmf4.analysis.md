# Optical Analysis - FUJIFILM FUJINON GF 20-35mm f/4 R WR

## Patent Reference and Design Identification

**Patent:** US 2022/0236544 A1  
**Application number:** US 17/580,109  
**Title:** Zoom Lens and Imaging Apparatus  
**Filed:** January 20, 2022  
**Published:** July 28, 2022  
**Priority:** JP 2021-008222; JP 2021-182842; JP 2021-200320  
**Inventor:** Ryosuke Nagami  
**Applicant / Assignee:** FUJIFILM Corporation  
**Embodiment analyzed:** Example 10, Tables 28-30 and Fig. 25-26

Example 10 is the closest patent embodiment to the production FUJINON GF20-35mmF4 R WR. The identification is strong rather than merely circumstantial:

1. Fujifilm specifies the production lens as **14 elements in 10 groups**, including **3 aspherical elements, 1 aspherical ED element, and 3 ED elements**. Example 10 has the same element count and the same special-element count.
2. The patent gives **f = 20.60 / 28.03 / 33.99 mm** at the wide, middle, and telephoto positions; the production lens is marketed as 20-35 mm.
3. The patent gives **FNo. = 4.11 / 4.08 / 4.11**; the production lens is a constant F4 zoom.
4. The patent gives **2ω = 110.0° / 87.6° / 74.6°**; Fujifilm publishes 108°-76° for the production lens.
5. The patent states that Example 10 consists of five lens groups with powers **negative-positive-positive-negative-positive**, and that the focus group is the entire second lens group G2. This agrees with the production lens's compact internal-focus premise.
6. The patent back focal length is **21.24 mm air-equivalent** at all zoom positions, consistent with a short-register mirrorless medium-format mount.

The interpretation below treats the patent prescription as the numerical authority, uses Fujifilm's published product specifications only for production-level matching, and labels glass identities by catalog match strength rather than by unsupported vendor assumption.

## Optical Architecture

The optical system is a negative-lead, internal-zoom, five-zoom-group design with the power sequence:

$$G1^- / G2^+ / G3^+ / G4^- / G5^+$$

The prescription contains fourteen glass elements in ten air-separated groups. The five moving-design groups are:

| Group |       Elements | Computed group focal length | Zoom/focus behavior                          | Primary function                                                                     |
| ----- | -------------: | --------------------------: | -------------------------------------------- | ------------------------------------------------------------------------------------ |
| G1    |        L11-L14 |                   -20.54 mm | Fixed during zoom and focus                  | Negative lead group; entrance-pupil placement, field intake, lateral color balancing |
| G2    |        L21-L22 |                   +57.15 mm | Moves during zoom; also moves as focus group | Lightweight inner-focus positive group                                               |
| G3    | Stop + L31-L34 |                   +35.82 mm | Moves during zoom only                       | Main positive converging group, stop-adjacent aberration correction                  |
| G4    |        L41-L43 |                   -36.56 mm | Moves during zoom only                       | Rear negative variator/corrector group                                               |
| G5    |            L51 |                   +62.30 mm | Fixed during zoom and focus                  | Final positive relay and exit-pupil control group                                    |

The patent calls G2-G4 the middle group GM, with GMf = G2+G3 and GMr = G4. The final group GE is G5. During zooming from wide to telephoto, G2, G3, and G4 move objectward while G1 and G5 remain stationary. The four variable spacings are conserved as a constant total:

| Gap     | Wide infinity | Middle infinity | Tele infinity |
| ------- | ------------: | --------------: | ------------: |
| DD[7]   |      17.46 mm |         7.85 mm |       2.54 mm |
| DD[11]  |       7.56 mm |         6.45 mm |       5.17 mm |
| DD[18]  |       7.45 mm |        11.97 mm |      16.41 mm |
| DD[23]  |       5.08 mm |        11.28 mm |      13.43 mm |
| **Sum** |  **37.55 mm** |    **37.55 mm** |  **37.55 mm** |

That conservation is the optical prescription counterpart of an internal zoom lens with invariant overall optical length. It also makes the fixed final group meaningful: the image-side geometry does not need to chase the zoom motion.

The wide end is retrofocus-like in the strict back-focus sense: the patent's air-equivalent BFD is 21.24 mm while the wide EFL is 20.60 mm, giving BFD/EFL = 1.031. At the telephoto end, however, the same BFD gives BFD/EFL = 0.625. The design is therefore best described as a negative-lead wide-angle zoom rather than as a retrofocus zoom over the whole focal-length range.

## Element-by-Element Analysis

### L11 - Negative meniscus, convex to object

nd = 1.95906, νd = 17.47. Glass: S-NPH3 (OHARA; 959/175 optical match). f = -45.76 mm.

L11 is the high-index, high-dispersion entrance element of G1. The very high refractive index lets Fujifilm use a strong front negative meniscus without pushing the curvatures beyond a practical molded or polished form. Its low Abbe number means it cannot be treated as a neutral front window; it participates heavily in lateral chromatic aberration, which the later ED/flint pair in G1 must balance.

OHARA S-NPH3 matches the patent's nd and νd exactly, although the patent's specific-gravity entry differs from OHARA's current catalog value. The safe identification is therefore an optical match to S-NPH3 rather than a confirmed procurement statement.

### L12 - Negative meniscus with two aspherical surfaces

nd = 1.58313, νd = 59.46. Glass: HOYA MP-/MC-BACD12 precision-molding class. f = -48.71 mm.

L12 is the main front-group aspheric corrector. It works at high off-axis ray height, so small changes in its sag profile have large leverage over barrel distortion, astigmatism, and the shape of the chief-ray bundle entering the focus group.

The exact nd/νd pair matches HOYA's BACD12 precision-molding family closely and is consistent with the role of a molded aspherical substrate.

### L13 + L14 - Front cemented achromat in G1

L13: nd = 1.49700, νd = 81.60. Glass: N-PK52A / FCD1 / S-FPL51-class ED. f = -35.76 mm standalone.  
L14: nd = 1.84667, νd = 23.79. Glass: S-TIH53-class dense flint. f = +37.46 mm standalone.  
Cemented pair focal length: -656.15 mm.

The doublet is almost neutral in net power, but it is not optically incidental. Its ED/high-dispersion pairing corrects the chromatic residue created by the strongly negative G1 entrance optics. The cemented interface R = 26.1773 mm gives the designer a high-leverage internal surface without adding an air-glass reflection.

The S-TIH53-class label should be read as a close optical class, not a verified exact catalog purchase, because the patent's listed specific gravity does not match current OHARA S-TIH53.

### L21 - Plano-convex positive focus element

nd = 1.91082, νd = 35.25. Glass: HOYA TAFD35. f = +49.15 mm.

L21 is the power-bearing element of the two-element focus group. The plano-convex form is efficient here because the element receives a divergent beam from G1 and begins the transition to the stop-side positive section. The high index keeps the required front curvature moderate despite the element's positive power.

HOYA TAFD35 is the direct nd/νd match for this focus-group element.

### L22 - Weak negative moving aspheric corrector

nd = 1.68863, νd = 31.20. Glass: HOYA E-FD8 / M-FD80 code family, 689312. f = -355.86 mm.

L22 has little standalone power, but it is critical because it moves with the focus group and carries two aspherical surfaces. Its weak negative power moderates the net positive power of G2 while allowing the aspheric profile to suppress focus-induced spherical aberration and coma variation.

HOYA's public cross-reference and refractiveindex.info coefficient page both place E-FD8/M-FD80 at code 689312. The catalog E-FD8 index is nd = 1.68893, 0.00030 above the patent value, so this should be read as a coefficient-backed code-family assignment rather than proof of the exact production melt.

### L31 + L32 + L33 - Stop-adjacent cemented triplet

L31: nd = 1.48749, νd = 70.44. Glass: N-FK5 / S-FSL5 class. f = +27.87 mm standalone.  
L32: nd = 1.75700, νd = 47.71. Glass: H-LaF6L / lanthanum-flint class. f = -14.57 mm standalone.  
L33: nd = 1.49700, νd = 81.61. Glass: N-PK52A / FCD1 / S-FPL51-class ED. f = +39.08 mm standalone.  
Cemented triplet focal length: -351.58 mm.

This triplet sits directly behind the aperture stop, where on-axis marginal rays are high and aberration leverage is strong. L31 and L33 are low-dispersion positive members bracketing the high-index negative L32. The result is a weakly negative subassembly whose main function is correction rather than simple convergence.

The nd/νd pair places L32 in a 757/477 lanthanum-flint class rather than in the lower-index LAM/LAL crown territory.

### L34 - Biconvex aspherical ED element

nd = 1.49648, νd = 81.30. Glass: unmatched ED fluorophosphate near the 497/816 family. f = +30.16 mm.

L34 is the aspherical ED element counted separately in Fujifilm's published specification. It sits after the G3 cemented triplet and supplies real positive power while correcting spherical aberration and field shape near the stop-side positive group.

Its nd/νd pair is close to FCD1/S-FPL51/N-PK52A-type ED glass but does not exactly match the common public catalog entries. The data file labels it as unmatched ED fluorophosphate rather than forcing a false exact vendor name.

### L41 + L42 - Rear negative cemented doublet

L41: nd = 1.90366, νd = 31.31. Glass: N-LASF46B / TAFD25 / S-LAH95 class. f = -31.45 mm standalone.  
L42: nd = 1.49700, νd = 81.61. Glass: N-PK52A / FCD1 / S-FPL51-class ED. f = +51.98 mm standalone.  
Cemented doublet focal length: -71.33 mm.

This is the main powered subassembly of the negative G4 group. It pairs a dense high-index negative member with an ED positive member, giving the rear variator group negative power without allowing rear-group chromatic aberration to dominate.

The patent value falls in the 904/313 dense-lanthanum-flint family; Schott N-LASF46B is a close published match.

### L43 - Negative meniscus with two aspherical surfaces

nd = 1.69350, νd = 53.20. Glass: HOYA MP-/MC-LAC130 precision-molding class. f = -79.43 mm.

L43 is the last aspherical element and the rear member of G4. Its rear surface is very weakly curved in spherical base form, so the aspherical departure supplies much of the surface's corrective behavior. The element is positioned to correct residual field curvature and chief-ray geometry before the fixed final group.

HOYA's LAC130 precision-molding family is the closest confirmed match for the patent nd/νd pair.

### L51 - Final positive meniscus

nd = 1.87070, νd = 40.73. Glass: TAFD32 / H-ZLaF64 class dense lanthanum flint. f = +62.30 mm.

L51 is the sole element of the fixed final group G5. It supplies moderate positive relay power and helps manage exit-pupil position and sensor incidence angle. Because it is stationary, it also stabilizes the final image-side correction as G2-G4 perform the zoom motion.

With νd = 40.73, this material belongs on the flint side of the conventional crown/flint boundary despite its lanthanum-family character.

## Glass Identification and Selection

The patent does not print manufacturer glass names, so the identification must be by independent nd/νd matching and by refusing false precision where no exact match was confirmed.

| Element(s)    |        Patent nd / νd | Corrected catalog interpretation              | Confidence                             |
| ------------- | --------------------: | --------------------------------------------- | -------------------------------------- |
| L11           |       1.95906 / 17.47 | OHARA S-NPH3 optical match                    | High for optical match                 |
| L12           |       1.58313 / 59.46 | HOYA MP-/MC-BACD12 precision-molding class    | High                                   |
| L13, L33, L42 | 1.49700 / 81.60-81.61 | N-PK52A / FCD1 / S-FPL51-class ED             | High as class; exact vendor not stated |
| L14           |       1.84667 / 23.79 | S-TIH53-class high-dispersion flint           | Moderate; density mismatch             |
| L21           |       1.91082 / 35.25 | HOYA TAFD35                                   | High                                   |
| L22           |       1.68863 / 31.20 | HOYA E-FD8 / M-FD80, 689312                   | Code-family coefficient-backed match   |
| L31           |       1.48749 / 70.44 | N-FK5 / S-FSL5 class                          | Moderate-high                          |
| L32           |       1.75700 / 47.71 | H-LaF6L / lanthanum-flint class               | Moderate                               |
| L34           |       1.49648 / 81.30 | Unmatched ED fluorophosphate near 497/816     | Unresolved exact vendor                |
| L41           |       1.90366 / 31.31 | N-LASF46B / TAFD25 / S-LAH95 class            | High as class                          |
| L43           |       1.69350 / 53.20 | HOYA MP-/MC-LAC130 precision-molding class    | High                                   |
| L51           |       1.87070 / 40.73 | TAFD32 / H-ZLaF64 class dense lanthanum flint | Moderate                               |

The design uses four ED-class elements distributed across G1, G3, and G4. This is not a single apochromatic block; it is a distributed correction strategy. G1 corrects the lateral-color burden of the negative front section, G3 corrects the main stop-side converging section, and G4 corrects chromatic error introduced by the rear negative variator.

## Focus Mechanism

The focus group is the entire G2 group, consisting only of L21 and L22. During focusing from infinity to the patent's β = -0.1 state, DD[7] increases and DD[11] decreases by the same amount, so the physical motion is an imageward translation of G2 while the rest of the optical system stays fixed for that zoom position.

| Zoom position | DD[7] infinity | DD[7] β=-0.1 | DD[11] infinity | DD[11] β=-0.1 | G2 imageward travel |
| ------------- | -------------: | -----------: | --------------: | ------------: | ------------------: |
| Wide          |       17.46 mm |     19.50 mm |         7.56 mm |       5.52 mm |             2.04 mm |
| Tele          |        2.54 mm |      3.91 mm |         5.17 mm |       3.80 mm |             1.37 mm |

The production minimum focus distance is 0.35 m with a maximum telephoto magnification of 0.14x. The patent's β = -0.1 table is not identical to the production MFD; it is a published internal focus-reference state used to show the focus mechanism's movement.

There is no optical image-stabilization group in Example 10. Conditional Expression (17), the vibration-proof-group expression, is blank for Example 10, and the production GF20-35mmF4 R WR relies on camera-body stabilization where available.

## Aspherical Surfaces

Eight aspherical surfaces appear on four elements: L12 (surfaces 3 and 4), L22 (10 and 11), L34 (17 and 18), and L43 (22 and 23).

The patent sag equation is:

$$
Z_d = \frac{C h^2}{1 + \sqrt{1 - K_A C^2 h^2}} + \sum_{m=3}^{10} A_m h^m
$$

with $C = 1/R$. In the project-standard conic equation, $K = K_A - 1$. Since every Example 10 asphere has $K_A = 1$, the project conic constant is **K = 0** for all aspherical surfaces.

The patent includes odd powers A5, A7, and A9. The current renderer data model stores even powers only. The `.data.ts` file therefore uses an even-order least-squares refit over the selected rendering semi-diameter. The original patent coefficients remain summarized here:

| Surface |             A4 |             A5 |             A6 |             A7 |             A8 |             A9 |            A10 |
| ------- | -------------: | -------------: | -------------: | -------------: | -------------: | -------------: | -------------: |
| 3       | +4.1300441E-05 | -2.4033683E-06 | -4.8681225E-08 | +5.3290405E-09 | +1.7877787E-10 | -1.7943006E-11 | +3.2566028E-13 |
| 4       | +3.0099143E-05 | -1.6543125E-06 | -8.7456445E-08 | +1.0604481E-09 | -9.8343487E-12 | +3.5349032E-11 | -1.6366418E-12 |
| 10      | +5.8666005E-05 | -1.1082747E-07 | -2.0831316E-08 | +3.2732275E-08 | -5.0650804E-09 | +3.6587411E-10 | -1.0976748E-11 |
| 11      | +6.2126215E-05 | -1.8583677E-06 | +6.8611949E-07 | -1.0884906E-07 | +1.1559071E-08 | -6.5016237E-10 | +1.5338197E-11 |
| 17      | -9.5480325E-06 | +8.5764274E-07 | -1.3625695E-07 | +4.6449896E-09 | +8.2283721E-10 | -8.4896133E-11 | +2.3243095E-12 |
| 18      | +5.1436650E-06 | +3.5383265E-07 | -5.7514914E-08 | +1.6762465E-09 | +1.7360953E-10 | -1.4084261E-11 | +8.0801659E-14 |
| 22      | -2.2230188E-05 | -2.5662668E-06 | +6.2977636E-08 | +1.5501381E-08 | -1.3231686E-09 | +7.9174894E-11 | -4.3970839E-12 |
| 23      | -1.4798556E-06 | -3.9669057E-06 | +1.9581443E-07 | +1.5953243E-08 | -8.6203549E-10 | -4.6746994E-11 | +2.4548978E-12 |

The even-order refit residuals are small enough for diagrammatic rendering; they should not be treated as a replacement for the patent's full optical prescription in a production optical-design program.

| Data-file surface | Fit semi-diameter | RMS sag residual | Max absolute residual |
| ----------------- | ----------------: | ---------------: | --------------------: |
| 3A                |         15.000 mm |         3.314 µm |              9.233 µm |
| 4A                |         14.000 mm |         1.876 µm |              5.256 µm |
| 10A               |          8.400 mm |        0.0004 µm |             0.0014 µm |
| 11A               |          8.400 mm |        0.0012 µm |             0.0034 µm |
| 17A               |         10.500 mm |        0.0028 µm |             0.0085 µm |
| 18A               |         10.500 mm |        0.0012 µm |             0.0037 µm |
| 22A               |         13.400 mm |         1.661 µm |              4.837 µm |
| 23A               |         13.865 mm |         0.725 µm |              2.265 µm |

## Conditional Expressions

The most relevant Example 10 conditional-expression values are:

| Expression | Meaning       | Patent value | Comment                                                                           |
| ---------- | ------------- | -----------: | --------------------------------------------------------------------------------- | ----- | ------------------------------------------------------------- |
| (1)        | Bfw / (fw tan |           ωw | )                                                                                 | 0.722 | Short but not extreme back focus for the 55° half-field       |
| (2)        |               |  Dfoct / DpM |                                                                                   | 0.092 | Focus travel small relative to zoom motion                    |
| (3)        | EDMf / EDMr   |        0.653 | Middle-group front/rear effective diameters are balanced for a compact focus unit |
| (9)        | Pexpw / fw    |        5.000 | At the rounded upper boundary of the basic range; do not overstate telecentricity |
| (12)       | fw /          |           f1 |                                                                                   | 1.003 | G1 has nearly the same focal-length magnitude as the wide EFL |
| (14)       | fw /          |         ffoc |                                                                                   | 0.360 | Two-element focus group has moderate positive power           |
| (15)       | GMave         |        3.710 | Middle group stays within the moving-mass constraint                              |
| (17)       | fw /          |          fis |                                                                                   | blank | No optical stabilization group in Example 10                  |
| (28)       | ft / fw       |        1.650 | Modest zoom ratio appropriate for an ultra-wide medium-format zoom                |

Expression (9) is the important caution. The patent table prints **5.000** for a condition whose basic expression is written with a strict upper bound of **< 5**. Because the table is rounded to three decimals, the unrounded design may still satisfy the claim, but the precise statement is that Example 10 is at the printed boundary rather than comfortably inside it.

## Verification Summary

The prescription was re-entered and checked with a paraxial y-nu matrix ray trace. The cover glass was excluded from the `.data.ts` surface list and folded into the final back focal distance as an air-equivalent path.

| Zoom position | Patent f | Computed EFL | Patent Bf | Computed air-equivalent BFD |
| ------------- | -------: | -----------: | --------: | --------------------------: |
| Wide          | 20.60 mm |   20.6008 mm |  21.24 mm |                  21.2374 mm |
| Middle        | 28.03 mm |   28.0347 mm |  21.24 mm |                  21.2398 mm |
| Tele          | 33.99 mm |   33.9845 mm |  21.24 mm |                  21.2280 mm |

The agreement is within the precision expected from the patent's rounded variable spacings. The variable-gap conservation check gives 37.55 mm at all three infinity zoom positions.

## Sources

- US Patent Application Publication US 2022/0236544 A1, "Zoom Lens and Imaging Apparatus," Ryosuke Nagami, FUJIFILM Corporation, published July 28, 2022. Example 10, Tables 28-30 and 33, Fig. 25-26.
- Fujifilm official specifications, FUJINON GF20-35mmF4 R WR.
- OHARA S-NPH3 and S-TIH53 official glass data.
- SCHOTT N-PK52A and N-LASF46B official glass datasheets.
- HOYA Optics news and cross-reference materials for TAFD35, E-FD8/M-FD80, and precision-molding glass families.
