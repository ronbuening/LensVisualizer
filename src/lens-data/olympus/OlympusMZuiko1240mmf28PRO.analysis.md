# Optical Design Analysis: Olympus M.Zuiko Digital ED 12–40 mm f/2.8 PRO

## Patent Reference and Production-Lens Identification

**Patent:** US 2014/0139720 A1, "Zoom Lens and Image Pickup Apparatus Equipped with Same"
**Applicant:** Olympus Imaging Corp., Tokyo (JP)
**Inventors:** Yasuji Ogata, Yasuharu Yamada, Akiyoshi Tochigi, Keitaro Yokoyama
**Filed:** October 2, 2013 — **Published:** May 22, 2014
**Priority:** JP 2012-256607, filed November 22, 2012
**Embodiment used:** Example 5 (Numerical Example 5, ¶0259)

The identification of Example 5 as the production optical formula for the M.Zuiko Digital ED 12–40 mm f/2.8 PRO rests on the convergence of eight independent criteria:

1. **Element and group count.** Example 5 contains 14 elements; the production lens is specified as 14 elements in 9 groups. The five zoom units (G1–G5) of Example 5 contain exactly 9 air-separated sub-groups when counted conventionally (G1: 1, G2: 3, G3: 3, G4: 1, G5: 1).
2. **Focal length range.** Example 5 yields f = 12.25–39.10 mm at f/2.88 (constant); the production lens covers 12–40 mm at f/2.8 constant. The slight discrepancy between 39.10 mm and 40 mm is typical of marketing rounding applied to a design-stage prescription.
3. **Image circle.** The patent states an image height $i_h$ = 10.820 mm, yielding a diagonal of 21.64 mm — matching the Micro Four Thirds sensor (17.3 × 13.0 mm, diagonal ≈ 21.6 mm).
4. **Field angle.** The patent lists 2ω = 88.92° at the wide end and 30.48° at the telephoto end (real-ray values including distortion). The production lens is specified at approximately 84°–30°, which matches the paraxial field angle computed from the marketed focal lengths (2 × arctan(10.82/12) ≈ 84°). The difference between the patent's 88.92° and the production's 84° at the wide end reflects the ~8% barrel distortion, which expands the real field of view beyond the paraxial prediction.
5. **Special-element census.** The production lens contains 1 EDA (ED Aspherical), 2 aspherical, 1 DSA (Dual Super Aspherical), 2 ED, 1 HD, and 2 HR elements. Example 5 accounts for each of these designations exactly (see §Aspherical Surfaces and §Glass Identification below).
6. **Aperture stop location.** The stop is placed between G2 and G3, immediately before the front surface of G3, consistent with the production cross-section drawings.
7. **Focus mechanism.** The patent specifies G4 (a cemented doublet of two elements) as the internal focus group, moving toward the image side for close focus — matching the production lens's MSC (Movie & Still Compatible) stepping-motor inner-focus system.
8. **Patent timing.** The priority date (November 2012) precedes the production announcement (September 2013) by approximately one year, consistent with Olympus's historical patent-to-production cadence.

No other example in the patent matches the production lens as closely. Example 1 has a three-element G5 (two positives and a negative, partially cemented), while Examples 2, 3, and 7 each have a single-element G5 — all differing from Example 5's two-element cemented G5. Example 4 shares the identical lens-unit constructions (G1–G5) with Example 5 but has a different numerical prescription. Examples 6 and 7 deviate in G2 and G4 configurations (separated vs. cemented sub-groups, different element shapes).

## Optical Architecture

The design is a five-unit zoom of the form **positive–negative–positive–negative–positive**, with the power distribution G1(+) / G2(−) / G3(+) / G4(−) / G5(+). This symmetric-type power arrangement — bracketing a central positive group (G3) between negative groups (G2, G4) and enclosing everything between positive groups (G1, G5) — is a classical strategy for balancing off-axis aberrations at the wide end against axial aberrations at the telephoto end while maintaining a quasi-telecentric exit pupil appropriate for digital sensors.

During zooming from wide to tele, G1 moves toward the object, G2 first moves toward the image and then reverses toward the object, G3 and G4 move toward the object, and G5 remains stationary. The stationary rear group serves as a dust seal and eliminates zoom-driven mechanical noise — a feature the patent explicitly highlights for video applications (¶0088). The back focus (FB ≈ 16.0 mm equivalent air) is fixed across the zoom range, confirming compatibility with mirrorless bodies that lack a reflex mirror.

| Parameter | Wide | Standard | Tele |
|---|---|---|---|
| Focal length (mm) | 12.25 | 21.92 | 39.10 |
| f-number | 2.88 | 2.88 | 2.88 |
| 2ω (°) | 88.92 | 53.84 | 30.48 |
| Image height (mm) | 10.820 | 10.820 | 10.820 |
| Total length (mm) | 104.79 | 105.13 | 129.98 |

The zoom ratio is 3.19×, and the total track increases by roughly 25 mm from wide to tele. All five unit focal lengths have been independently verified via ABCD thick-lens ray trace (see §Verification Summary).

## Element-by-Element Analysis

### G1 — Front Positive Unit (L1 + L2, cemented doublet)

**L1 — Negative Meniscus, convex to object.**
nd = 1.92286, νd = 18.90. Glass: S-NPH2 (OHARA) — an ultra-high-index dense flint. f_standalone ≈ −245 mm (thin-lens, in air). As a standalone element L1 is weakly negative, contributing controlled divergence and strongly negative chromatic dispersion to the G1 doublet. Its very high refractive index makes it a candidate for one of the two "HR" (High Refractive) elements in the production designation, although the second HR element could be either L12 (nd = 1.946) or L13 (nd = 2.001); the official Olympus optical diagram, which would resolve this assignment, is not available for independent verification. The deep negative meniscus form (R1 = +55.06, R2 = +44.27) corrects lateral chromatic aberration at the wide end by introducing controlled short-wavelength overcorrection that the subsequent positive element compensates.

**L2 — Positive Meniscus, convex to object.**
nd = 1.69680, νd = 55.53. Glass: consistent with TAC4 (HOYA) or equivalent lanthanum crown (glass code 697/555). f_standalone ≈ +80.7 mm. L2 is the positive crown element of the G1 doublet, whose moderate Abbe number provides the chromatic counterbalance to L1's extreme dispersion. The cemented G1 doublet has a combined focal length of +115.67 mm — intentionally weak, so that G1 functions primarily as a field-angle converter and chromatic pre-corrector rather than a strong power contributor.

The patent's conditional expression (8) requires 15 < ν₁ₙ < 30 for the negative element in G1; L1's νd = 18.90 satisfies this comfortably, ensuring effective correction of chromatic aberration of magnification at the wide end.

### G2 — Variator / Diverging Unit (L3 / L4+L5 / L6)

G2 carries strong negative power (f₂ = −12.76 mm) and is the principal zoom-action group. It contains four elements in three air-separated sub-groups.

**L3 — Negative Meniscus, convex to object (DSA — Dual Super Aspherical).**
nd = 1.74320, νd = 49.29. Glass: lanthanum-class (glass code 743/493). f_standalone ≈ −18.9 mm. Both surfaces (S4, S5) are aspherical, making L3 the "DSA" element in the production designation. This is the most powerful single element in G2. At the wide end, the marginal ray height on L3 is large (the beam entering G2 is nearly parallel after the weak G1), and the dual-asphere configuration provides two independent correction handles — S4 primarily manages spherical aberration of the diverging bundle, while S5 controls coma and higher-order terms. The aspherical coefficients on S5 include a moderate conic constant (K = +0.2022), indicating a mildly oblate ellipsoidal base profile combined with fourth- through tenth-order polynomial corrections.

**L4 + L5 — Cemented Doublet (ED achromat).**
L4: nd = 1.49700, νd = 81.54 — biconcave negative. Glass: S-FPL51 (OHARA) or FCD1 (HOYA), an ED (extra-low dispersion) fluorophosphate crown. This is one of the two standalone "ED" elements in the production designation.
L5: nd = 1.75520, νd = 27.51 — biconvex positive. Glass: consistent with S-TIH4 (OHARA) or equivalent dense flint.

The cemented pair has a combined focal length of approximately +305 mm — very weakly positive relative to the system's 12–39 mm range (contributing roughly 4% of the system power at the wide end). Its primary purpose is chromatic rather than refractive: the ED crown and dense flint are matched to yield strong achromatization within G2, correcting the axial chromatic aberration that would otherwise accumulate in the telephoto configuration. The patent's conditional expression (9), which requires n₂ₚ > 1.70 for the positive element in G2, is satisfied by L5 (nd = 1.75520). This high-index positive element is essential for maintaining an acceptable Petzval sum (¶0155).

**L6 — Negative Meniscus, convex to image.**
nd = 1.77250, νd = 49.60. Glass: consistent with TAF1 (HOYA) or equivalent (glass code 773/496). f_standalone ≈ −49.0 mm. Positioned at the rear of G2, L6 acts as a field-flattening element that also controls the divergence angle of pencils exiting G2 before they reach the aperture stop. Its concave-toward-object form provides negative field curvature contribution that counteracts the strong positive Petzval contribution of G3.

### Aperture Stop (between G2 and G3)

The stop is a flat surface (R = ∞) with 1.0 mm of axial separation before the first surface of G3. Its position between the diverging G2 and converging G3 is standard for this zoom type — it minimizes the stop diameter at intermediate focal lengths and allows G3 to act on a well-centered beam.

### G3 — Main Converging Unit (L7 / L8 / L9+L10)

G3 is the heart of the optical system, with a focal length of f₃ = +19.29 mm — the strongest group. It contains four elements in three air-separated sub-groups. The patent describes G3 as divided into an "object-side sub lens unit" (L7) and an "image-side sub lens unit" (L8 + L9–L10), separated by the largest internal air space (d = 3.530 mm between surfaces 13 and 14).

**L7 — Biconvex Positive (HD — High Definition, both surfaces aspherical).**
nd = 1.58313, νd = 59.38. Glass: L-BAL42 (OHARA) — an L-prefix barium crown designated for precision glass molding (PGM). f_standalone ≈ +42.0 mm. Both surfaces (S12, S13) are aspherical. The L-prefix confirms that L7 is manufactured by PGM rather than conventional polishing, which makes it the strongest candidate for the Olympus "HD" (High-Definition) designation applied to one element in the production spec. (The HD-to-element mapping is inferred from the PGM glass type and dual-asphere configuration; the official Olympus optical diagram has not been independently verified.) The conic constant on S12 is K = −2.1360 (hyperboloidal base, K < −1), generating a significantly flattened peripheral sag profile that opens the spherical aberration correction range beyond what a sphere could achieve. Surface S13 carries K = +8.4339 (strongly oblate ellipsoidal base), an extreme departure that principally targets higher-order coma.

As the object-side sub-unit of G3, L7 receives the divergent beam exiting G2 at its widest diameter. The patent notes (¶0143) that this makes the object-side surface ideal for spherical aberration correction, and that the aspheric on the front surface of G3 is specifically favored for this purpose.

**L8 — Biconvex Positive (ED).**
nd = 1.49700, νd = 81.54. Glass: S-FPL51 (OHARA) or FCD1 (HOYA) — the same ED fluorophosphate as L4. f_standalone ≈ +38.5 mm. This is the second standalone "ED" element in the production designation. Its high Abbe number satisfies the patent's conditional expression (1), which requires the largest νd among positive elements in G3 to exceed 72 (actual value: 81.54). The patent emphasizes (¶0093–0094) that this condition is essential for correcting axial chromatic aberration at the telephoto end, where G3 carries the bulk of the converging power.

**L9 + L10 — Cemented Doublet.**
L9: nd = 1.80518, νd = 25.42 — negative meniscus, convex to object. Glass: consistent with TAFD30 (HOYA) or equivalent dense flint (glass code 805/254). f_standalone ≈ −31.0 mm.
L10: nd = 1.49700, νd = 81.54 — biconvex positive. Glass: S-FPL51 (OHARA) or FCD1 (HOYA) — ED glass, same as L4 and L8. The image-side surface of L10 (S18) is aspherical, making this the "EDA" (ED Aspherical) element in the production designation. f_standalone ≈ +21.2 mm; f_cemented (L9+L10) ≈ +66.84 mm.

The L9–L10 pair is a classic ED achromatic doublet placed on the image side of G3. The aspherical surface on L10's rear face (K = −0.7208, with fourth- through tenth-order polynomial terms) primarily controls coma in the image-side sub-unit. The patent explains (¶0144) that by the time the beam reaches the image-side sub-unit, axial and off-axis pencils are spatially separated, making this location effective for independent coma correction via aspherical departure.

The G3 sub-unit analysis satisfies all three related conditional expressions: D₃/f_w = 1.827 (condition 5), d_(A)/D₃ = 0.158 (condition 6), and f₃f/f₃r = 1.619 (condition 7), confirming the balanced power distribution between the two sub-units.

### G4 — Focus Unit (L11 + L12, cemented doublet)

**L11 — Negative Meniscus, convex to object (aspherical front surface).**
nd = 1.80610, νd = 40.88. Glass: LAH-class, glass code 806/409 — likely a precision-moldable lanthanum flint (L-prefix or M-prefix). f_standalone ≈ −16.3 mm (negative). The object-side surface (S19) is aspherical with a large conic constant K = +9.034 (strongly oblate ellipsoidal base), which provides strong negative fourth-order spherical correction. This aspheric is critical for maintaining focus-dependent aberration stability.

**L12 — Positive Meniscus, convex to object.**
nd = 1.94595, νd = 17.98. Glass: extreme dense flint (glass code 946/180), consistent with TAFD45 (HOYA) or equivalent. f_standalone ≈ +53.9 mm (individually positive, serving as the achromatizing dense flint partner to L11 within the negative cemented doublet). Although L12 is individually positive, its extreme dispersion (νd = 17.98 — the lowest Abbe number in the design) provides the chromatic counterbalance to L11's moderate-dispersion glass (νd = 40.88). Both elements are in the flint family (νd < 50), but the large Abbe-number differential between them (Δνd ≈ 23) produces effective achromatization within the cemented pair. The cemented G4 doublet has a combined focal length of −23.87 mm.

G4 is the **focus group**. The patent states (¶0202) that focusing from infinity to the close-focus distance (0.25 m object-to-image) is achieved by moving G4 toward the image side. The focus travel amounts at each zoom position are:

| Zoom position | Direction | Travel (mm) |
|---|---|---|
| Wide (12.25 mm) | → image | 0.557 |
| Standard (21.92 mm) | → image | 1.565 |
| Tele (39.10 mm) | → image | 4.431 |

At the telephoto end, G4 must traverse roughly 4.4 mm — a modest stroke that permits rapid autofocus with the production lens's MSC stepping motor. The patent further notes (¶0112–0114) that G4 supports wobbling (continuous small-amplitude oscillation for contrast-detect AF during video recording), which requires a lightweight, compact focus group. The cemented two-element construction of G4 satisfies this: its total axial thickness is only 2.96 mm.

The conditional expression (4) requires 1.0 < |f₄|/f_w < 5.0; the actual value is |−23.87|/12.25 = 1.949, placing it comfortably in the center of the range — balancing moderate focus travel (not too large) against manageable aberration control (not too much power in G4).

### G5 — Stationary Rear Unit (L13 + L14, cemented doublet)

**L13 — Negative Meniscus, convex to object.**
nd = 2.00069, νd = 25.46. Glass: ultra-high-index dense flint (glass code 2001/255). f_standalone ≈ −92.2 mm. With a refractive index exceeding 2.0 — among the highest used in any modern photographic lens — L13 is almost certainly one of the two "HR" (High Refractive) elements in the production designation. The most likely HR pairing is L13 with either L1 (nd = 1.923) or L12 (nd = 1.946); without the official Olympus optical diagram, the exact assignment cannot be confirmed.

**L14 — Biconvex Positive.**
nd = 1.58313, νd = 59.38. Glass: L-BAL42 (OHARA) — the same barium crown used in L7. f_standalone ≈ +23.9 mm. The cemented G5 doublet has a combined focal length of +33.39 mm.

G5 is stationary during both zooming and focusing. Its positive power ensures a quasi-telecentric exit pupil position appropriate for the Micro Four Thirds sensor's microlens array. The negative-before-positive cemented construction acts as a final chromatic corrector and field flattener. The patent emphasizes (¶0088) that the stationary G5 serves as a physical seal against dust and, for cameras with built-in microphones, prevents zoom motor noise from propagating through the rear optical path.

## Glass Identification and Selection

The design employs a distinctive glass palette spanning an unusually wide range of refractive indices (1.497 to 2.001) and Abbe numbers (17.98 to 81.54).

| Element | nd | νd | Glass / Class | Role |
|---|---|---|---|---|
| L1 | 1.92286 | 18.90 | S-NPH2 (OHARA) | HR candidate — chromatic pre-corrector |
| L2 | 1.69680 | 55.53 | TAC4 (HOYA) class (697/555) | Crown partner for G1 achromat |
| L3 | 1.74320 | 49.29 | Lanthanum class (743/493) | DSA substrate (moldable) |
| L4 | 1.49700 | 81.54 | S-FPL51 (OHARA) / FCD1 (HOYA) | ED — G2 achromat |
| L5 | 1.75520 | 27.51 | Dense flint, TIH4 class (755/275) | Flint partner for L4 |
| L6 | 1.77250 | 49.60 | TAF1 (HOYA) class (773/496) | Field-flattening meniscus |
| L7 | 1.58313 | 59.38 | L-BAL42 (OHARA) | HD (inferred) — PGM asphere substrate |
| L8 | 1.49700 | 81.54 | S-FPL51 (OHARA) / FCD1 (HOYA) | ED — G3 chromatic corrector |
| L9 | 1.80518 | 25.42 | TAFD30 (HOYA) class (805/254) | Dense flint for L9+L10 achromat |
| L10 | 1.49700 | 81.54 | S-FPL51 (OHARA) / FCD1 (HOYA) | EDA — ED + aspherical |
| L11 | 1.80610 | 40.88 | LAH class (806/409), moldable | Aspherical focus element |
| L12 | 1.94595 | 17.98 | Extreme dense flint (946/180) | HR candidate; flint in G4 achromat |
| L13 | 2.00069 | 25.46 | Ultra-high-index flint (2001/255) | HR candidate — Petzval corrector in G5 |
| L14 | 1.58313 | 59.38 | L-BAL42 (OHARA) | Crown partner for G5 doublet |

Three distinct glass types dominate the design: the ED fluorophosphate (nd = 1.497, νd = 81.54) appears three times (L4, L8, L10), and the PGM barium crown L-BAL42 (nd = 1.583, νd = 59.38) appears twice (L7, L14). This consolidation reduces manufacturing complexity and cost. The three strongest HR candidates — L1 (nd = 1.923), L12 (nd = 1.946), and L13 (nd = 2.001) — account for the production lens's "2 HR" designation; the most probable pairing is L1 + L13 (bracketing the system at front and rear) or L12 + L13 (both in the rear half), but the official assignment has not been independently confirmed.

The chromatic correction strategy is distributed across four achromatic pairs: L1+L2 (G1), L4+L5 (G2), L8 with L9+L10 (G3), and L13+L14 (G5). Each pair combines a low-dispersion crown (νd > 55) with a high-dispersion flint (νd < 30), following classical achromatic doublet principles. The use of three ED elements (νd > 81) — one in G2 and two in G3 — is specifically mandated by the patent's conditional expression (1) and is the primary mechanism for suppressing axial chromatic aberration at the telephoto end, where G3's converging power is dominant.

## Focus Mechanism

The lens employs **inner focusing** via the fourth zoom unit (G4), a cemented negative doublet of two elements (L11 + L12). During focusing from infinity to the minimum object distance:

- G4 translates axially toward the image side.
- All other groups (G1, G2, G3, G5) remain stationary during focus.
- The aperture stop remains fixed relative to G3.

The patent's close-focus data is tabulated at an object-to-image distance of 0.25 m (¶0252). The production lens specifies a minimum focus distance (MFD) of 0.20 m, measured from the sensor plane to the subject. These figures are broadly consistent: the patent's 0.25 m is the total object-to-image conjugate used for aberration evaluation, while the production MFD is an engineering specification that may reflect a slightly different object distance or a production-optimized focus cam. At the telephoto end, the focus travel of 4.43 mm is modest relative to the total track, enabling high-speed AF. The small size and weight of G4 (two elements, total thickness 2.96 mm) are explicitly cited (¶0111, ¶0114) as advantages for reducing focus motor noise and enabling wobbling for continuous video AF.

The variable air gaps associated with focusing are d18 (G3–G4 gap, increases as G4 moves toward the image) and d21 (G4–G5 gap, decreases by the same amount since G5 is stationary). Gap conservation has been independently verified: d18 + d21 remains constant at each zoom position across the focus range.

| Zoom | d18 (∞) | d18 (close) | d21 (∞) | d21 (close) | Travel |
|---|---|---|---|---|---|
| Wide (12.25 mm) | 1.888 | 2.445 | 4.699 | 4.142 | 0.557 |
| Standard (21.92 mm) | 8.257 | 9.822 | 9.748 | 8.183 | 1.565 |
| Tele (39.10 mm) | 13.074 | 17.505 | 11.755 | 7.324 | 4.431 |

The focus travel increases strongly with focal length (0.56 mm at wide, 4.43 mm at tele), which is characteristic of inner-focus zoom designs where the focus sensitivity scales with the telephoto magnification of the downstream groups.

## Aspherical Surfaces

The design contains **six aspherical surfaces** distributed across **four elements**, employing the standard aspheric sag equation:

$$Z(h) = \frac{h^2/R}{1 + \sqrt{1 - (1+K)(h/R)^2}} + A_4 h^4 + A_6 h^6 + A_8 h^8 + A_{10} h^{10}$$

The conic convention is standard: K = 0 corresponds to a sphere, K = −1 to a paraboloid. All six aspherical surfaces carry polynomial terms through 10th order.

### Surface 4 (L3 front — DSA)

K = −9.0073 (hyperboloidal base, K ≪ −1). This strongly negative conic flattens the base sag dramatically at the periphery, creating a surface that is nearly flat at the rim despite a finite vertex radius of curvature (R = 159.57 mm). The polynomial terms are small relative to the conic departure. This surface primarily corrects spherical aberration introduced by the strong divergence of the G2 variator.

### Surface 5 (L3 rear — DSA)

K = +0.2022 (mildly oblate). R = 12.84 mm — a strongly curved surface with modest conic departure. The dominant fourth-order coefficient (A₄ = −2.08 × 10⁻⁵) adds negative overcorrection at the rim, balancing the residual spherical aberration from S4. This surface also significantly affects coma correction because the chief ray height is non-negligible here at wide field angles.

### Surface 12 (L7 front — HD)

K = −2.1360 (hyperboloidal base). R = 29.38 mm. The A₄ term is small (7.73 × 10⁻⁷), indicating that the conic departure alone provides the bulk of the correction. This surface is the primary spherical aberration corrector for G3 at the telephoto end, where the axial beam converges through L7 at maximum height. The hyperboloidal form (sag rising more slowly than a sphere at the periphery) reduces the marginal ray convergence angle compared to a spherical surface of the same vertex radius.

### Surface 13 (L7 rear — HD)

K = +8.4339 (strongly oblate ellipsoidal base). R = −148.10 mm (weakly curved). Despite the weak base curvature, the large positive conic constant creates substantial sag departure at the rim. The A₄ term (4.01 × 10⁻⁵) is significant and reinforces the oblate departure. This surface principally targets coma and astigmatism for off-axis fields in the standard-to-tele range.

### Surface 18 (L10 rear — EDA)

K = −0.7208 (prolate ellipsoidal base, −1 < K < 0). R = −32.06 mm. The polynomial terms are very small (A₄ = 5.68 × 10⁻⁷), indicating fine-tuning corrections. This aspheric sits at the rear of the G3 image-side sub-unit, where axial and off-axis pencils are well separated — the patent identifies this location as optimal for coma correction (¶0144).

### Surface 19 (L11 front — G4 focusing element)

K = +9.0337 (strongly oblate ellipsoidal base). R = 573.67 mm (nearly flat vertex). The combination of a nearly flat base curvature with a large positive conic creates a surface that curves progressively more strongly toward the periphery. This unusual profile provides the correction needed to maintain aberration balance across the focus range: as G4 translates during focusing, the ray heights on S19 change, and the progressive aspherical departure compensates for the resulting aberration shift.

### Aspherical coefficient summary

| Surface | R (mm) | K | A₄ | A₆ | A₈ | A₁₀ |
|---|---|---|---|---|---|---|
| 4 (L3 front) | 159.570 | −9.0073 | 1.709E-05 | 7.326E-08 | −5.005E-10 | 1.352E-12 |
| 5 (L3 rear) | 12.838 | +0.2022 | −2.081E-05 | −1.032E-07 | 2.027E-09 | −2.240E-11 |
| 12 (L7 front) | 29.383 | −2.1360 | 7.729E-07 | −5.881E-08 | −8.182E-10 | −3.278E-12 |
| 13 (L7 rear) | −148.099 | +8.4339 | 4.012E-05 | −3.175E-08 | −1.271E-09 | −5.500E-13 |
| 18 (L10 rear) | −32.064 | −0.7208 | 5.677E-07 | 1.306E-08 | 1.182E-11 | −1.162E-14 |
| 19 (L11 front) | 573.671 | +9.0337 | −1.725E-06 | −4.044E-08 | 3.103E-09 | −3.490E-11 |

### Olympus designations mapped to elements

| Designation | Element | Surfaces | Description |
|---|---|---|---|
| DSA (Dual Super Aspherical) | L3 | S4, S5 | Both surfaces aspherical; strongest diverging element in G2 |
| HD (High Definition) — inferred | L7 | S12, S13 | Both surfaces aspherical; PGM L-BAL42 glass |
| EDA (ED Aspherical) | L10 | S18 | One aspherical surface on ED fluorophosphate glass |
| Aspherical | L11 | S19 | One aspherical surface on focus-group front element |
| ED (Extra-low Dispersion) | L4, L8 | — | νd = 81.54; L10 also uses the same ED glass but is counted as EDA |
| HR (High Refractive) — 2 of 3 | L1, L12, L13 | — | nd > 1.92; exact pairing uncertain without official diagram |

The production lens specifies four aspherical elements, which the patent accounts for as DSA (L3) + HD (L7) + EDA (L10) + aspherical (L11). The DPReview announcement confirms "four aspherical lenses including a DSA lens."

## Zoom Mechanism

During zooming from the wide-angle end (12.25 mm) to the telephoto end (39.10 mm), the four variable air gaps change as follows:

| Gap | Surface | Wide (mm) | Standard (mm) | Tele (mm) | Function |
|---|---|---|---|---|---|
| G1–G2 | d3 | 0.843 | 3.172 | 26.504 | Opens strongly; G1 separates from G2 |
| G2–G3 | d10 | 19.767 | 6.359 | 1.056 | Closes strongly; G2 approaches G3 |
| G3–G4 | d18 | 1.888 | 8.257 | 13.074 | Opens; G3 moves ahead of G4 |
| G4–G5 | d21 | 4.699 | 9.748 | 11.755 | Opens; G4 moves ahead of stationary G5 |

The dominant zoom action comes from the rapid opening of d3 (G1–G2) and simultaneous closing of d10 (G2–G3). This pairing — G1 moving forward while G2 and G3 converge — is the classical telescopic zoom mechanism: at the telephoto end, G1 and G2–G3 form an effective Galilean telescope that magnifies the angular subtense of the incoming beam before it converges through G3.

G5 is fixed relative to the image plane throughout zooming and focusing, serving as a sealed rear element. The total track increases by approximately 25.2 mm from wide to tele, accommodated by the forward motion of G1 (which extends the barrel).

## Conditional Expression Verification

All conditional expressions defined in the patent have been verified against the computed prescription values for Example 5:

| Expression | Formula | Value | Range | Status |
|---|---|---|---|---|
| (1) | ν₃ₚ | 81.54 | 72–110 | ✓ |
| (2) | \|f₂\|/FB | 0.798 | 0.4–1.5 | ✓ |
| (3) | f₃/FB | 1.206 | 0.5–1.8 | ✓ |
| (4) | \|f₄\|/f_w | 1.949 | 1.0–5.0 | ✓ |
| (5) | D₃/f_w | 1.827 | 1.4–2.1 | ✓ |
| (6) | d_(A)/D₃ | 0.158 | 0.11–0.5 | ✓ |
| (7) | f₃f/f₃r | 1.619 | 0.5–2.3 | ✓ |
| (8) | ν₁ₙ | 18.90 | 15–30 | ✓ |
| (9) | n₂ₚ | 1.75520 | 1.70–2.15 | ✓ |
| (10) | \|f₂\|/iₕ | 1.179 | 0.5–1.9 | ✓ |
| (11) | f₃/iₕ | 1.783 | 0.7–2.5 | ✓ |
| (12) | Fno_w | 2.88 | 1.7–3.4 | ✓ |
| (13) | Fno_t | 2.88 | 2.3–4.3 | ✓ |
| (14) | f_t/f_w | 3.19 | 2.7–7.0 | ✓ |
| (15) | f_w/iₕ | 1.132 | 0.9–1.5 | ✓ |

## Verification Summary

Independent ABCD thick-lens paraxial ray traces confirm the following patent-stated values:

| Quantity | Computed | Patent | Δ |
|---|---|---|---|
| EFL wide (mm) | 12.2519 | 12.25 | < 0.01 |
| EFL standard (mm) | 21.9178 | 21.92 | < 0.01 |
| EFL tele (mm) | 39.1008 | 39.10 | < 0.01 |
| f₁ (mm) | 115.667 | 115.668 | < 0.01 |
| f₂ (mm) | −12.758 | −12.758 | < 0.01 |
| f₃ (mm) | 19.293 | 19.293 | < 0.01 |
| f₄ (mm) | −23.873 | −23.873 | < 0.01 |
| f₅ (mm) | 33.389 | 33.390 | < 0.01 |
| FB equiv. air (mm) | 15.996 | 15.996 | exact |
| Petzval radius (mm) | −356.7 | — | — |

The Petzval radius of −356.7 mm (corresponding to a Petzval sum of +0.00280 mm⁻¹) is moderately positive, indicating a slight tendency toward inward-curving field. In practice, this is compensated by the astigmatism introduced by G2 and G4's meniscus elements, yielding the flat field performance observed in the production lens's aberration plots.

## Aberration Correction Strategy

The patent provides aberration diagrams for Example 5 at all three zoom positions, both at infinity and at close focus (FIGS. 16A–16L and 17A–17L). The key observations are:

The spherical aberration is well controlled at all zoom positions, with maximum residual under ±0.20 mm at full aperture. The astigmatism field curves (tangential and sagittal) show moderate separation at the wide end that tightens at the telephoto end; the positive Petzval sum is substantially compensated by the over-corrected astigmatism, keeping the best image surface reasonably flat. Distortion is moderate at the wide end (approximately −8% barrel) and transitions to mild pincushion (approximately +2%) at the telephoto end — values that are typical for this class of zoom and are corrected electronically in the production camera's image pipeline. Lateral chromatic aberration is well controlled at all positions, with the g-line and C-line traces staying within ±0.02 mm of the d-line trace.

The overall aberration signature demonstrates the effectiveness of the symmetric P-N-P-N-P power arrangement in distributing correction responsibilities: G1 and G2 manage the wide-angle off-axis aberrations (distortion, lateral color, coma), while G3's aspherical surfaces and ED elements handle the telephoto axial aberrations (spherical, axial color). G4's aspherical surface maintains focus-dependent balance, and G5's high-index doublet provides final telecentricity and residual chromatic correction.

## Sources

1. US 2014/0139720 A1, "Zoom Lens and Image Pickup Apparatus Equipped with Same," Ogata et al., published May 22, 2014. Example 5 (¶0259).
2. OM System / Olympus official product specifications for the M.Zuiko Digital ED 12–40 mm f/2.8 PRO and PRO II.
3. OHARA optical glass catalog (S-NPH2, S-FPL51, L-BAL42 designations).
4. HOYA optical glass catalog (TAC4, TAF1, FCD1, TAFD30 designations).
