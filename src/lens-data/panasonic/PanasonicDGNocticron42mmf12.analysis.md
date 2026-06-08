# Panasonic Leica DG Nocticron 42.5 mm f/1.2 ASPH Power O.I.S.

## Patent Reference and Design Identification

**Patent:** US 2015/0192839 A1  
**Application Number:** 14/576,932  
**Filed:** December 19, 2014  
**Published:** July 9, 2015  
**Priority:** JP 2014-000401, January 6, 2014  
**Inventor:** Kyoichi Miyazaki  
**Applicant:** Panasonic Intellectual Property Management Co., Ltd. (Osaka, Japan)  
**Title:** Single Focal Length Lens System, Interchangeable Lens Apparatus and Camera System  
**Embodiment analyzed:** Numerical Example 5 / Embodiment 5 (FIG. 9)

The patent discloses five numerical examples of a positive-negative-positive single-focal-length system. Numerical Example 5 is the prescription transcribed in the paired data file.

The identification with the Leica DG Nocticron 42.5 mm f/1.2 ASPH Power O.I.S. is based on convergent evidence rather than on a manufacturer-published statement that Example 5 is the production formula.

1. **Format and field.** Numerical Example 5 is computed for an image height of 10.815 mm, matching the half-diagonal of the 17.3 x 13.0 mm Four Thirds / Micro Four Thirds frame. The patent's 14.7073° half-field gives a 29.4° diagonal field, matching Panasonic's published 29° angle of view.
2. **Focal length and aperture.** The patent EFL is 41.6508 mm at infinity. The production lens is specified as 42.5 mm. The patent F-number is 1.284, while the manufacturer specification is f/1.2; the data file therefore stores the marketed aperture separately from the design aperture.
3. **Element and group count.** The patent drawing labels L1-L15, but L15 is a plane-parallel sensor-cover/filter plate. The powered lens is L1-L14: 14 elements in 11 air-spaced groups, matching Panasonic's published 14 elements / 11 groups.
4. **Special-element census.** The powered prescription contains two aspherical surfaces, one ED element (L10, n_d = 1.49700, νd = 81.6), and one ultra-high-index element (L1, n_d = 2.00069). This matches Panasonic's stated two aspherical lenses, one ED lens, and one UHR lens.
5. **Focus configuration.** The patent states that G1 and G3 remain fixed while the single negative element L9 in G2 moves toward the image side during focusing (¶0109). The variable gaps d15 and d17 conserve their sum, confirming a single translating internal-focus element.
6. **Image stabilization.** The patent identifies L11 as the image-blur-compensating element, moving perpendicular to the optical axis (¶0110). This corresponds to the production Power O.I.S. feature.
7. **Close focus and magnification.** The close-focus column is the 500 mm object-distance state. Its d0 value of 407.5 mm plus the patent optical track of 92.4997 mm gives 500 mm from the image plane. The product of the Table 35 unit magnifications is -0.1016x, matching the published approximately 0.1x maximum magnification.

The patent is therefore the correct Nocticron design family. The specific production prescription is not published by Panasonic, and all five numerical examples share the same architecture. Example 5 differs from Examples 1, 2, and 4 chiefly in stop placement and in its slower patent F-number. The document treats Example 5 as a representative assigned embodiment, not as a uniquely proven production prescription.

## Optical Architecture

The design is a fast three-unit P-N-P prime for a short-telephoto field of view on Micro Four Thirds. It should not be called a telephoto optical construction in the strict track-length sense: the patent optical track is 92.4997 mm against a 41.6508 mm EFL, so TL/EFL = 2.22, not less than 1. The "short telephoto" designation here refers to the field of view, not to a telephoto ratio.

Power distribution by patent unit is:

| Unit | Elements | Patent focal length | Role                                                          |
| ---- | -------: | ------------------: | ------------------------------------------------------------- |
| G1   |    L1-L8 |        +43.39643 mm | Main positive collector and aberration-correction stack       |
| G2   |       L9 |        -40.54224 mm | Single-element internal-focus group                           |
| G3   |  L10-L14 |        +35.36912 mm | Rear relay, color correction, stabilization, field correction |

G1 contains the defining first sub-lens-unit E: two cemented negative-positive doublets, L4+L5 and L6+L7. The patent places the aperture diaphragm between L7 and L8 for Example 5 (¶0106). L8 is the first aspherical element and sits immediately behind the stop.

G2 is only L9, a negative meniscus. It is the focusing element and moves toward the image side from infinity to close focus (¶0107, ¶0109).

G3 begins with the ED meniscus L10, followed by the aspherical stabilizing element L11, a negative meniscus L12, and the final cemented doublet L13+L14. The plane-parallel plate L15 is not included in the production element count or in the data file's `elements` array; its optical effect is folded into the final air-equivalent back focal distance.

The main architectural decision is to keep the focus group extremely small while doing most of the f/1.2-class aberration work in the fixed front unit. The patent explicitly links the single negative focusing element to reduced aberration fluctuation and high-speed focusing (¶0115), while the two cemented doublets in G1 are controlled by conditions (1)-(4) (¶0128).

## Element-by-Element Analysis

The focal lengths below are standalone thick-lens-in-air values computed from the patent radii, center thicknesses, and d-line refractive indices. They reproduce Table 33 to the quoted precision.

### L1 - Biconvex Positive (UHR)

n_d = 2.00069, νd = 25.5. Glass: UHR lanthanum flint, TAFD40 / H-ZLaF90A / J-LASFH17 class. f = +65.49 mm.

L1 is the front collector. Its extremely high refractive index permits a high-power positive front element without extreme curvature at the first surface. In the patent-to-product match, L1 is the only plausible UHR element because it is the only powered element with n_d near 2.00.

### L2 - Positive Meniscus, convex to object

n_d = 1.91082, νd = 35.2. Glass: TAFD35 / H-ZLaF4LA / K-LaSFn23 class. f = +144.07 mm. Patent lens element F.

L2 is a weak positive meniscus preceding the sub-unit E stack. Together with L3, it is part of the positive-negative pair that the patent credits with reducing total length (¶0114).

### L3 - Negative Meniscus, convex to object

n_d = 1.71736, νd = 29.5. Glass: S-TIH1 / E-FD1 / H-ZF3 class. f = -38.46 mm. Patent lens element G.

L3 supplies the negative member of the front F-G pair. Its shape factor is condition (5): with R1 = 104.0316 mm and R2 = 21.7306 mm, (R1 + R2)/(R1 - R2) = 1.528. The patent states that this controls aberration of rays passing near the effective diameter of element G and suppresses coma degradation (¶0133-¶0138).

### L4 - Biconcave Negative

n_d = 1.74077, νd = 27.8. Glass: S-TIH13 / E-FD13 class. f = -24.39 mm. Patent lens element A; cemented to L5.

L4 is the first negative element of sub-unit E and the strongest negative element in G1. Its focal-length ratio is condition (1), |f/f_A| = 1.708, within the patent's 1.0-2.2 range.

### L5 - Biconvex Positive

n_d = 1.72916, νd = 54.7. Glass: S-LAL18 / TAC8 / H-LaK52 class. f = +26.57 mm. Patent lens element B; cemented to L4.

L5 is the positive member of the first cemented doublet. The L4-L5 pairing balances a high-dispersion negative element against a lower-dispersion positive lanthanum crown. Cementing the pair is specifically cited by the patent as reducing performance loss from decentering between A and B (¶0112). Its ratio is condition (2), f/f_B = 1.568.

### L6 - Biconcave Negative

n_d = 1.73800, νd = 32.3. Glass: S-NBH53(V) / J-KZFH9 class. f = -30.86 mm. Patent lens element C; cemented to L7.

L6 is the negative member of the second cemented doublet. Its ratio is condition (3), |f/f_C| = 1.350. In Example 5 it is explicitly biconcave (¶0106), unlike the meniscus L6 forms used in some other examples.

### L7 - Biconvex Positive

n_d = 1.91082, νd = 35.2. Glass: TAFD35 / H-ZLaF4LA / K-LaSFn23 class. f = +34.27 mm. Patent lens element D; cemented to L6.

L7 is the positive member of the second E doublet and uses the same high-index glass class as L2 and L13. The patent states that cementing C and D reduces decentering sensitivity (¶0113). The ratio f/f_D = 1.216 satisfies condition (4). The aperture stop follows after a 0.7000 mm air gap.

### L8 - Biconvex Positive, object-side asphere

n_d = 1.77010, νd = 49.7. Glass: moldable lanthanum, M-TAF / K-LaFK50 equivalent class. f = +40.73 mm.

L8 is the first element after the stop and carries aspherical surface 14 on its object side. Its placement gives the asphere leverage over the axial marginal bundle immediately behind the diaphragm. The patent identifies the surface as aspherical but does not assign a single aberration term to it (¶0106); spherical-aberration trimming is an optical interpretation, not a patent statement.

### L9 - Negative Meniscus, convex to object (focusing element)

n_d = 1.64769, νd = 33.8. Glass: N-SF2 / E-FD2 / H-ZF1 class. f = -40.54 mm. Patent lens element H.

L9 is the whole second lens unit G2 and the internal-focus element. The patent emphasizes that using one negative lens element for the focusing unit reduces moving mass and keeps aberration fluctuation small (¶0115). Its focal-length ratio |f/f_H| = 1.027 satisfies condition (6).

### L10 - Positive Meniscus, convex to object (ED)

n_d = 1.49700, νd = 81.6. Glass: S-FPL51 / FCD1 / N-PK52A / D-FK61A class. f = +218.42 mm.

L10 is the ED element. Its weak positive power and high Abbe number allow it to reduce residual longitudinal color from the fast front group without adding a large monochromatic aberration burden. The patent's own line indices give P_g,F = 0.53875 and ΔP_g,F ≈ +0.032 against the Schott normal line, so it is the only strongly anomalous partial-dispersion element in the design.

### L11 - Positive Meniscus, convex to object (stabilizer, object-side asphere)

n_d = 1.77010, νd = 49.7. Glass: moldable lanthanum, M-TAF / K-LaFK50 equivalent class. f = +44.99 mm.

L11 is the image-blur-compensating element (¶0110). It moves perpendicular to the optical axis during stabilization (¶0117-¶0118). Its object-side aspherical surface 20 helps hold decentering aberrations down while the element is laterally displaced; the patent specifically refers to suppressing decentering coma and decentering astigmatism (¶0118).

### L12 - Negative Meniscus, convex to object

n_d = 1.58144, νd = 40.9. Glass: LF5 / E-FL5 / QF50 class. f = -62.89 mm.

L12 is a weak negative meniscus in G3. It is one of the negative elements behind the stop evaluated by the partial-dispersion criterion of condition (7). Its value, 0.0018 x νd + P_g,F = 0.6503, lies inside the broad patent band but is not the minimum selected in Table 36.

### L13 - Biconvex Positive

n_d = 1.91082, νd = 35.2. Glass: TAFD35 / H-ZLaF4LA / K-LaSFn23 class. f = +20.76 mm. Cemented to L14.

L13 is the strongest standalone positive powered element in the prescription. In combination with L14 it forms the final rear doublet, supplying G3's main converging power and helping set the oblique-ray correction near the image plane.

### L14 - Biconcave Negative

n_d = 1.72047, νd = 34.7. Glass: N-KZFS8 / S-NBH8 class. f = -33.11 mm. Patent lens element I; cemented to L13.

L14 is the negative member of the final doublet and is the element selected by condition (7) in Table 36. The computed value 0.0018 x νd + P_g,F = 0.6458 is the minimum among the relevant negative elements behind the stop. The patent links this criterion to chromatic correction in the peripheral field (¶0145-¶0148).

### L15 - Plane-parallel plate (excluded from powered lens count)

n_d = 1.51680, νd = 64.2. Glass: BK7-class cover/filter plate.

L15 is the plane-parallel plate following L14. It is not counted as one of the production lens elements. The data file excludes it from `elements` and `surfaces` and folds its paraxial effect into the final air-equivalent back focal distance after surface 26.

## Glass Identification and Selection

The patent publishes refractive index, Abbe number, C/F/g-line indices, and P_g,F, but it does not name glass vendors. Vendor labels in the table below are catalog-class identifications by six-digit n_d/νd matching and partial-dispersion consistency. Where multiple vendors publish close equivalents, the label is deliberately written as a class rather than as a unique melt identity.

| Element(s)  |     n_d |   νd | Patent P_g,F | Catalog-class identification                          | Function                       |
| ----------- | ------: | ---: | -----------: | ----------------------------------------------------- | ------------------------------ |
| L1          | 2.00069 | 25.5 |      0.61349 | TAFD40 / H-ZLaF90A / J-LASFH17 class                  | UHR front collector            |
| L2, L7, L13 | 1.91082 | 35.2 |      0.58210 | TAFD35 / H-ZLaF4LA / K-LaSFn23 class                  | High-index positive elements   |
| L3          | 1.71736 | 29.5 |      0.60338 | S-TIH1 / E-FD1 / H-ZF3 class                          | Front negative meniscus G      |
| L4          | 1.74077 | 27.8 |      0.60762 | S-TIH13 / E-FD13 class                                | Negative element A             |
| L5          | 1.72916 | 54.7 |      0.54521 | S-LAL18 / TAC8 / H-LaK52 class                        | Positive element B             |
| L6          | 1.73800 | 32.3 |      0.58981 | S-NBH53(V) / J-KZFH9 class                            | Negative element C             |
| L8, L11     | 1.77010 | 49.7 |      0.55362 | Moldable lanthanum, M-TAF / K-LaFK50 equivalent class | Aspherical elements            |
| L9          | 1.64769 | 33.8 |      0.59229 | N-SF2 / E-FD2 / H-ZF1 class                           | Focus element H                |
| L10         | 1.49700 | 81.6 |      0.53875 | S-FPL51 / FCD1 / N-PK52A / D-FK61A class              | ED element                     |
| L12         | 1.58144 | 40.9 |      0.57667 | LF5 / E-FL5 / QF50 class                              | Rear negative meniscus         |
| L14         | 1.72047 | 34.7 |      0.58336 | N-KZFS8 / S-NBH8 class                                | Condition-(7) negative element |

The palette is economical: the 1.91082/35.2 high-index glass recurs in L2, L7, and L13, while the 1.77010/49.7 moldable-lanthanum-class glass is used for both aspherical elements. L10 is the only ED glass and the only element with a large positive ΔP_g,F.

## Focus Mechanism

Focusing is internal and is performed by L9 alone. G1 and G3 remain fixed relative to the image surface; L9 translates toward the image side from infinity to the close-object state (¶0109). The patent optical track remains constant at 92.4997 mm, including the sensor-cover/filter plate.

| Object distance | d15 (mm) | d17 (mm) | d15 + d17 (mm) |
| --------------- | -------: | -------: | -------------: |
| Infinity        |   1.6489 |   7.2205 |         8.8694 |
| 3000 mm         |   2.3293 |   6.5401 |         8.8694 |
| 500 mm          |   6.5938 |   2.2756 |         8.8694 |

The conserved d15 + d17 sum confirms pure translation of L9 between fixed neighboring units. From infinity to the 500 mm object-distance state, L9 moves 4.9449 mm toward the image. The computed EFL changes from 41.6510 mm to 42.1824 mm over the same interval. Multiplying the patent unit magnifications at 500 mm gives -0.1016x.

The patent describes the optical focus mechanism but does not specify the autofocus motor type. The production specification confirms AF/MF switching, focus ring operation, and optical stabilization, but the motor type is not needed for the optical prescription.

## Aspherical Surfaces

Two surfaces are aspherical: surface 14, the object-side surface of L8, and surface 20, the object-side surface of L11.

The patent equation is the standard even-asphere form:

$$
Z(h)=\frac{h^2/r}{1+\sqrt{1-(1+K)(h/r)^2}}+\sum A_n h^n
$$

In this convention K = 0 is a spherical base. The patent's conic constant is therefore copied directly into the data file with no K = κ - 1 conversion.

**Surface 14 (L8 object side):** R = +35.52720 mm, K = -6.32271E-01, A4 = -1.42435E-07, A6 = +4.80045E-10, A8 = -4.47091E-11, A10 = +6.57429E-13, A12 = -4.36493E-15, A14 = +1.40294E-17, A16 = -1.77567E-20. At the verified data-file semi-diameter h = 14.65 mm, the full asphere is -0.101 mm shallower than the best spherical base with the same vertex radius. Relative to the conic base alone, the polynomial contribution is -0.0096 mm.

**Surface 20 (L11 object side):** R = +31.66080 mm, K = -1.19401E+00, A4 = +2.50312E-06, A6 = -6.28166E-09, A8 = +2.11966E-10, A10 = -3.72303E-12, A12 = +2.97405E-14, A14 = -1.15161E-16, A16 = +1.74070E-19. At the verified data-file semi-diameter h = 16.65 mm, the full asphere is -0.116 mm shallower than the corresponding spherical base, while the polynomial term alone adds +0.295 mm relative to the conic base. This mixed conic/polynomial behavior is consistent with a stabilizing element that must remain well behaved under decentering.

## Conditional Expressions

The patent states seven conditional expressions and gives their values in Table 36. The values below were recomputed from the prescription.

| #   | Expression          | Element | Computed | Patent Example 5 | Patent band       |
| --- | ------------------- | ------- | -------: | ---------------: | ----------------- |
| (1) | \|f/f_A\|           | L4      |    1.708 |             1.71 | 1.0 < x < 2.2     |
| (2) | f/f_B               | L5      |    1.568 |             1.57 | 0.5 < x < 2.0     |
| (3) | \|f/f_C\|           | L6      |    1.350 |             1.35 | 0.5 < x < 1.7     |
| (4) | f/f_D               | L7      |    1.216 |             1.22 | 0.5 < x < 1.8     |
| (5) | (R1 + R2)/(R1 - R2) | L3      |    1.528 |            1.528 | 0.7 < x < 2.2     |
| (6) | \|f/f_H\|           | L9      |    1.027 |             1.03 | 0.8 < x < 1.2     |
| (7) | 0.0018 x νd + P_g,F | L14     |   0.6458 |           0.6458 | 0.638 < x < 0.652 |

All seven broad conditions are satisfied. The tighter secondary ranges stated in ¶0129-¶0149 are also satisfied for Example 5. For condition (7), L12 gives 0.6503 and L9 gives 0.6531; L14 is the tabulated minimum and is the relevant element for the condition.

## Image Stabilization

The image-blur-compensating unit is L11 in G3. It moves in a direction perpendicular to the optical axis to compensate image movement caused by system vibration (¶0110, ¶0117). The patent states that this approach suppresses growth of the overall system and maintains small decentering coma and astigmatism (¶0118). The patent does not publish a stabilization stroke.

## Chromatic Correction Strategy

Chromatic correction is distributed between the front cemented doublets and the rear ED element. In G1, L4-L5 and L6-L7 pair negative and positive elements of different dispersion to control primary longitudinal color in the high-aperture front cone. In G3, L10 supplies the explicit ED correction.

Using the patent line indices for L10 (n_C = 1.49514, n_F = 1.50123, n_g = 1.50451), P_g,F = 0.53875. Against the Schott normal line P_g,F(normal) = 0.6438 - 0.001682νd, this is ΔP_g,F ≈ +0.0322. That is the signature of a fluorophosphate ED crown and is the strongest secondary-spectrum lever in the prescription.

The design should not be described as apochromatic. The patent does not make an APO claim, and the glass selection is a one-ED-element achromatizing strategy rather than a multi-anomalous-glass apochromat. The more precise description is a fast, well-corrected achromat with deliberate secondary-spectrum reduction from L10 and peripheral color control through condition (7).

## Data-File Transcription Notes

The data file transcribes Numerical Example 5 at patent scale. It does not rescale the prescription to the marketed 42.5 mm focal length.

The patent's L15 plane-parallel plate is excluded, per the project rule that sensor glass and cover plates do not appear as lens elements. Its paraxial effect is folded into the final air-equivalent distance after surface 26. The resulting final distance is 18.5914 mm, computed by tracing the infinity marginal ray after surface 26 to focus.

Semi-diameters are not published by the patent. They were inferred by combined marginal/chief paraxial ray tracing, then constrained by renderer safety checks: sd/|R| < 0.90, front/rear surface ratio not exceeding 1.25, minimum computed edge thickness at least 0.43 mm after rounding, and signed cross-gap clearance retained at the close-focus d17 spacing. These semi-diameters are rendering apertures, not manufacturer-published mechanical clear apertures.

## Verification Summary

The prescription was rechecked by an independent paraxial y-u trace and standalone thick-lens calculations.

| Quantity                        |        Recomputed |             Patent value | Source              |
| ------------------------------- | ----------------: | -----------------------: | ------------------- |
| EFL at infinity                 |        41.6510 mm |               41.6508 mm | Table 32            |
| EFL at 3000 mm                  |        41.8046 mm |               41.8044 mm | Table 32            |
| EFL at 500 mm                   |        42.1824 mm |               42.1822 mm | Table 32            |
| Patent optical track            |        92.4999 mm |               92.4997 mm | Table 32            |
| G1 focal length                 |       +43.3966 mm |             +43.39643 mm | Table 34            |
| G2 focal length                 |       -40.5422 mm |             -40.54224 mm | Table 34            |
| G3 focal length                 |       +35.3693 mm |             +35.36912 mm | Table 34            |
| L1-L14 standalone focal lengths | match to rounding |                 Table 33 | Table 33            |
| Focus-gap conservation          |         8.8694 mm |                8.8694 mm | Table 32            |
| Close-focus magnification       |          -0.1016x | unit product in Table 35 | Table 35            |
| Folded final BFD after L14      |        18.5914 mm |      computed from trace | Table 29 + Table 32 |

The surface-by-surface Petzval sum, computed as Σφ/(n n') over powered surfaces L1-L14, is +0.0027759 mm^-1. The corresponding Petzval radius is +360.24 mm and P x f = +0.1156. This is not tabulated by the patent, but it is consistent with the relatively controlled astigmatism plot for Numerical Example 5 in FIG. 10.

## Design Heritage and Context

The patent belongs to Panasonic's family of compact three-unit P-N-P interchangeable-camera prime lenses. The background cites JP 2012-242472 and JP 2013-037080 as earlier positive-negative-positive three-unit systems with a first-unit stop and second-unit focusing (¶0007). The present design's contribution is the front sub-unit E of four elements A-D, the focal-length conditions governing those elements, the single negative focusing unit, and the rear stabilizing element.

Within Micro Four Thirds, the production Nocticron uses this architecture to deliver an 85 mm-equivalent field of view with optical stabilization and a very large marketed f/1.2 aperture. The patent design aperture is slower than the marketing designation in Example 5, so the data file preserves both values rather than forcing them to agree.

## Sources

- US 2015/0192839 A1, "Single Focal Length Lens System, Interchangeable Lens Apparatus and Camera System," K. Miyazaki, Panasonic Intellectual Property Management Co., Ltd. Primary source for prescription tables, aspherical coefficients, conditional expressions, focus motion, and stabilization description.
- Panasonic Australia, "LEICA DG NOCTICRON 42.5mm / F1.2 ASPH. / POWER O.I.S. (H-NS043E) Micro Four Thirds Lens," official specifications. Used for manufacturer-published focal length, aperture, construction, Micro Four Thirds mount, Power O.I.S., closest focusing distance, magnification, and angle of view.
- Panasonic owner’s manual VQT5E43 for H-NS043. Used as an official secondary specification source for focal length, aperture range, construction, O.I.S. switch, AF/MF switch, mount, close focus, magnification, dimensions, and weight.
- OHARA, HOYA, Schott, HIKARI, CDGM, and Sumita optical-glass catalogs. Used for catalog-class glass labels by n_d/νd and partial-dispersion comparison; the patent itself does not disclose vendor glass names.
