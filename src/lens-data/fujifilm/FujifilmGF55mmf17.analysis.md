# Fujifilm Fujinon GF 55mm F1.7 R WR — Patent Analysis

## 1. Patent Reference and Design Identification

**Patent:** US 2023/0341664 A1, *Imaging Lens and Imaging Apparatus*  
**Application Number:** 18/304,391  
**Filed:** April 21, 2023  
**Published:** October 26, 2023  
**Priority:** JP 2022-072610, filed April 26, 2022  
**Inventors:** Yasutaka Shimada; Shunsuke Miyagishima  
**Applicant:** FUJIFILM Corporation, Tokyo, Japan  
**Embodiment analyzed:** Example 1, Tables 1–3 and FIGS. 1–3

Example 1 is the implemented prescription for the production FUJINON GF55mmF1.7 R WR. The match is not a single-specification coincidence; it is a convergence of the patent table, product specifications, and Fujifilm's launch description.

1. The patent example contains 14 glass elements in 10 air-spaced groups when the optical member PP / sensor cover glass is excluded from the photographic lens proper. Fujifilm specifies the production lens as 14 elements in 10 groups.
2. Fujifilm specifies two aspherical elements and two ED elements. In Example 1, the aspherical elements are L24 and L34, with aspheric coefficients on both surfaces of each element: surfaces 11, 12, 24, and 25. The two ED-class elements are L22, $n_d = 1.49700$, $\nu_d = 81.61$, and L26, $n_d = 1.59283$, $\nu_d = 68.63$.
3. The patent's infinity-focus focal length is 56.67 mm and the open F-number is 1.75. The production lens is marketed as 55 mm and F1.7. The difference is normal production naming and aperture rounding, not a design mismatch.
4. The patent's total angle of view is 52.8° at infinity. Fujifilm specifies 52.9° for the production lens. From the computed EFL, the patent half-field gives an image height of $56.6715 \times \tan(26.4^\circ) = 28.132$ mm, or a 56.264 mm diagonal image circle. That covers the 43.8 × 32.9 mm GFX sensor diagonal of 54.78 mm with a modest margin.
5. Fujifilm states that one aspherical element is placed behind the aperture blades to control spherical aberration and that another aspherical element is placed at the back for edge-to-edge sharpness. In Example 1, L24 is immediately image-side of the stop, and L34 is the rear element of G3.
6. Fujifilm describes an eight-element focusing group including one aspherical element and two ED elements. In Example 1, G2 contains exactly L21–L28, includes L24 as the single aspherical element in the focus group, contains the two ED-class elements L22 and L26, and moves as a unit for focus.
7. The patent table gives the closest state as 0.4 m from the first lens surface. Using the rounded table spacings, a paraxial finite-conjugate trace gives an actual closest object distance of 376.58 mm from the front vertex. Adding the physical front-vertex-to-focal-plane length of 122.508 mm gives 499.09 mm from the focal plane, matching Fujifilm's 0.5 m minimum-focus specification.

The production lens and patent example also align chronologically. Fujifilm announced the GF55mmF1.7 R WR on September 12, 2023, and the US application published on October 26, 2023 from an April 2022 Japanese priority filing.

## 2. Optical Architecture

Example 1 is a three-group inner-focus normal lens with a negative-positive-negative group power distribution:

| Group | Contents | Movement | Paraxial focal length |
|---|---:|---|---:|
| G1 | L11–L12 | Fixed | −267.816 mm |
| G2 | L21–L28 plus aperture stop | Moves object-side for close focus | +56.417 mm |
| G3 | L31–L34 | Fixed | −690.669 mm |

The design is not a telephoto lens in the strict optical sense. Its air-equivalent total track length is 121.418 mm and its infinity-focus EFL is 56.6715 mm, so TTL/EFL = 2.14. The system is better described as a modern large-aperture inner-focus normal lens with weak negative front and rear correcting groups surrounding a powerful moving positive group.

The central architectural choice is the moving G2 block. G2 carries almost all of the system power and contains the aperture stop, the two ED-class elements, one aspherical element, and the highest-index glasses in the design. G1 and G3 remain fixed with respect to the image plane. The variable spacings on either side of G2 sum to a constant 18.98 mm:

| Focus state | DD[4] G1–G2 | DD[18] G2–G3 | Sum |
|---|---:|---:|---:|
| Infinity | 15.47 mm | 3.51 mm | 18.98 mm |
| Closest | 4.28 mm | 14.70 mm | 18.98 mm |

G2 therefore moves 11.19 mm toward the object when focusing from infinity to the closest published state. The mechanical length of the optical system is held constant.

The sensor cover / optical member PP is not modeled as part of the lens in the companion `.data.ts` file. The patent lists 17.4498 mm of air, 3.2000 mm of glass at $n_d = 1.51680$, and 1.0582 mm of air after surface 25. This is folded into the final air-equivalent BFD as:

$$17.4498 + \frac{3.2000}{1.51680} + 1.0582 = 20.6177 \text{ mm}.$$

## 3. Element-by-Element Analysis

### L11 — Negative meniscus, convex to object

$n_d = 1.59270$, $\nu_d = 35.45$. Glass: FF5-class dense flint, HOYA 593-354 code. $f = -81.74$ mm.

L11 is a weak negative meniscus that sets the front collector geometry and helps establish the negative power of G1. Its standalone power is modest relative to the system focal length. The element is not the high-index front-group element; that role belongs to L12. The common product-language phrase about high-refractive glass at the front should therefore be read as a front-group statement rather than a literal identification of the foremost glass.

### L12 — Positive meniscus, convex to object

$n_d = 1.95375$, $\nu_d = 32.31$. Glass: OHARA S-LAH98 / HOYA TAFD45 class. $f = +113.72$ mm.

L12 is the high-index positive member in G1. It counterbalances L11 but does not make G1 positive. The group remains weakly negative, with $f/f_1 = -0.2116$. The very high index permits a positive meniscus with comparatively moderate curvature, reducing the spherical-aberration burden at the large entrance pupil of an F1.7 medium-format lens.

### L21 — Positive meniscus, convex to object

$n_d = 2.05091$, $\nu_d = 26.95$. Glass: HOYA TAFD65-class, 051-269 code. $f = +58.40$ mm.

L21 is the first optical member of the moving focus group and is the highest-index element in the prescription. It supplies strong positive power with relatively controlled curvature. The patent's conditional expression for the average index of the first and last positive lenses in G2 is met largely because L21 and L28 are both very high-index elements.

### L22 — Biconvex ED positive, cemented to L23

$n_d = 1.49700$, $\nu_d = 81.61$. Glass: HOYA FCD1 / OHARA S-FPL51 class. $f = +82.97$ mm.

L22 is the first ED-class element and forms the positive half of the pre-stop cemented doublet. Its high Abbe number offsets the low-Abbe, high-index elements that surround it in the moving group. Because it is ahead of the aperture stop, it contributes to both axial color correction and the balance of oblique bundles entering the stop.

### L23 — Biconcave negative, cemented to L22

$n_d = 1.78880$, $\nu_d = 28.43$. Glass: OHARA S-NBH58. $f = -47.72$ mm.

L23 is a dense-flint negative element cemented to L22. It is not OHARA S-NBH51; S-NBH58 is the catalog-consistent match to $n_d = 1.78880$, $\nu_d = 28.43$. The pair acts as a compact achromat immediately ahead of the stop, with a weak cemented interface and most of the optical effect carried by the outer surfaces.

### Aperture stop

The stop is placed between L23 and L24. In the patent table, surface 9 has 4.2600 mm to the stop and the stop has 6.6500 mm to L24. The physical stop semi-diameter inferred from the infinity F-number is 13.727 mm. This value images through the front part of the system to an entrance-pupil semi-diameter of 16.192 mm, giving $56.6715 / (2 \times 16.192) = 1.75$.

### L24 — Aspherical positive meniscus, convex to image

$n_d = 1.77210$, $\nu_d = 49.30$. Glass: unmatched molded lanthanum-crown class, 772/493 code. $f = +65.40$ mm.

L24 is the first aspherical element and sits immediately behind the aperture stop. It is the aspherical element Fujifilm describes as controlling spherical aberration behind the aperture blades. The glass constants do not match a single public OHARA, HOYA, Schott, HIKARI, CDGM, or Sumita catalog entry closely enough to justify a specific catalog name. The safest designation is therefore a molded lanthanum-crown class glass, not the previously tempting but incorrect L-LAH84 assignment.

Both surfaces of L24 are aspherical. The element's meniscus orientation places a concave surface toward the stop and the steeper convex surface toward the image side. Its polynomial departure reaches −843 µm on surface 11 and −317 µm on surface 12 at $h = 15$ mm; at the conservative inferred clear semi-diameter of 16.6 mm the departures are approximately −1525 µm and −536 µm.

### L25 — Biconcave negative, cemented to L26

$n_d = 1.62589$, $\nu_d = 35.71$. Glass: HOYA E-F1 / OHARA S-TIM1 class. $f = -20.42$ mm.

L25 is the strongest standalone negative element in G2 and begins the first negative-positive cemented pair behind the stop. Its steep front surface contributes substantial negative Petzval curvature, while the cemented pairing with the ED-class L26 controls the chromatic cost of that power.

### L26 — Biconvex ED-class positive, cemented to L25

$n_d = 1.59283$, $\nu_d = 68.63$. Glass: HOYA FCD515/FCD505 class, 593-686 code. $f = +23.60$ mm.

L26 is the second ED-class element and the positive half of the L25–L26 cemented group. The code match is to HOYA's 593-686 fluorocrown family, cross-referenced to S-FPM2 / K-GFK68-type material. The element is not FCD10; FCD10 lies in a much higher-Abbe region and does not match this prescription.

### L27 — Biconcave negative, cemented to L28

$n_d = 1.78880$, $\nu_d = 28.43$. Glass: OHARA S-NBH58. $f = -23.41$ mm.

L27 repeats the same dense-flint glass used in L23 and begins the second negative-positive cemented pair behind the stop. Its role is to help turn the post-stop bundle while maintaining the chromatic balance established by L22 and L26.

### L28 — Biconvex positive, cemented to L27

$n_d = 2.00069$, $\nu_d = 25.43$. Glass: HOYA TAFD40 / HIKARI J-LASFH17 class, 001-255 code. $f = +24.99$ mm.

L28 is a very high-index, low-Abbe positive element at the image side of G2. It is the last element in the moving focus group. Together with L21 it satisfies the patent's high-index end-positive constraint for G2. The HIKARI catalog point is $n_d = 2.000690$, $\nu_d = 25.46$; the patent's $\nu_d = 25.43$ is within normal catalog/patent rounding and melt-variant tolerance.

### L31 — Biconvex positive, cemented to L32

$n_d = 1.84850$, $\nu_d = 43.79$. Glass: HIKARI J-LASFH22. $f = +33.87$ mm.

L31 begins G3 and is the positive member of the rear cemented achromat. The catalog match is HIKARI J-LASFH22, code 849-438. This is a better identification than a generic TAFD25-class label; TAFD25 is in a different high-index, low-Abbe region.

### L32 — Biconcave negative, cemented to L31

$n_d = 1.59551$, $\nu_d = 39.22$. Glass: HOYA E-F8 / OHARA S-TIM8 class. $f = -39.54$ mm.

L32 completes the G3 cemented doublet. The Abbe split between L31 and L32 is only 4.57, which is intentionally modest. A larger split would give more chromatic leverage but would also tend to require steeper cemented curvature and would worsen spherical-aberration sensitivity.

### L33 — Weak negative meniscus, concave to object

$n_d = 1.54072$, $\nu_d = 47.23$. Glass: HOYA E-FEL2 / OHARA S-TIL2 class. $f = -157.97$ mm.

L33 is a weak field-shaping meniscus. Its object-side surface is much stronger than its rear surface, so it can influence field curvature with little net power. The correct catalog family is E-FEL2 / S-TIL2, not E-FL5; E-FL5 is the 581/409 glass family and does not match the patent constants.

### L34 — Rear aspherical near-afocal meniscus

$n_d = 1.68863$, $\nu_d = 31.20$. Glass: HOYA M-FD80 / E-FD8 class, close match. $f = -885.24$ mm.

L34 is the rear aspherical corrector. It has very little paraxial power; its function is non-paraxial correction near the image side. The closest public catalog family is E-FD8 / S-TIM28 / J-SF8, and the molded HOYA M-FD80 class is the relevant low-Tg cross-reference. The patent value is close, not exact, so the data file records it as a class match rather than an exact catalog identity.

The front and rear surfaces are both aspherical. At $h = 15$ mm, surface 24 departs from its spherical base by −1296 µm and surface 25 by −1019 µm. At the inferred 18.5 mm semi-diameter, the departures are approximately −3021 µm and −2284 µm. This rear placement gives the asphere strong leverage over field curvature, astigmatism, and distortion.

## 4. Glass Identification and Selection

The patent gives optical constants but does not name glass suppliers. The table below uses catalog-consistent public identifiers. A catalog label here is an optical-constant match or class identification, not proof that Fujifilm purchased the melt from that supplier.

| Element | Patent $n_d$ | Patent $\nu_d$ | Corrected glass identification | Confidence |
|---|---:|---:|---|---|
| L11 | 1.59270 | 35.45 | FF5, HOYA 593-354 code | Exact by code |
| L12 | 1.95375 | 32.31 | S-LAH98 / TAFD45 class | Exact within rounding |
| L21 | 2.05091 | 26.95 | TAFD65, HOYA 051-269 code | Exact by code |
| L22 | 1.49700 | 81.61 | FCD1 / S-FPL51 class | Exact |
| L23 | 1.78880 | 28.43 | S-NBH58 | Exact |
| L24 | 1.77210 | 49.30 | Unmatched molded lanthanum-crown class, 772/493 | Unmatched |
| L25 | 1.62589 | 35.71 | E-F1 / S-TIM1 class | Exact by code |
| L26 | 1.59283 | 68.63 | FCD515/FCD505 class, 593-686 code | Exact by code |
| L27 | 1.78880 | 28.43 | S-NBH58 | Exact |
| L28 | 2.00069 | 25.43 | TAFD40 / J-LASFH17 class | Close/exact by index |
| L31 | 1.84850 | 43.79 | J-LASFH22 | Exact |
| L32 | 1.59551 | 39.22 | E-F8 / S-TIM8 class | Exact by code |
| L33 | 1.54072 | 47.23 | E-FEL2 / S-TIL2 class | Exact |
| L34 | 1.68863 | 31.20 | M-FD80 / E-FD8 class | Close |

The most important correction is the dense-flint and high-index glass palette. L23 and L27 are S-NBH58, not S-NBH51. L21 is a HOYA TAFD65-class 2.05-index material, not S-NBH8. L12 is S-LAH98 / TAFD45-class, not S-NPH5. L26 belongs to the 593/686 fluorocrown family, not FCD10. These differences are not cosmetic; they change the chromatic and spherical-aberration interpretation of the design.

The chromatic correction strategy is conventional but carefully distributed. L22 is a very high-Abbe ED positive ahead of the stop, L26 is a second ED-class positive behind the stop, and the dense flints L23/L27 help control secondary color and Petzval curvature. The design should be described as a well-corrected large-aperture achromat. The patent does not publish partial-dispersion values sufficient to claim apochromatic correction.

## 5. Focus Mechanism

The lens uses inner focusing. G2, containing eight glass elements and the aperture stop, moves as one unit toward the object. G1 and G3 remain fixed with respect to the image plane.

| Quantity | Infinity | Closest published state |
|---|---:|---:|
| Patent focal length | 56.67 mm | 58.40 mm |
| Computed focal length | 56.6715 mm | 58.4014 mm |
| Patent open F-number | 1.75 | 1.97 |
| Patent total angle of view | 52.8° | 45.2° |
| DD[4] | 15.47 mm | 4.28 mm |
| DD[18] | 3.51 mm | 14.70 mm |
| G2 travel | — | 11.19 mm object-side |

The EFL increases by 3.05% at the closest focus configuration. This is a moderate amount of focus breathing for a fast medium-format normal lens. The patent architecture suppresses focus-induced aberration fluctuation by moving the aperture stop with G2 and by leaving the rear aspherical correcting group fixed near the image plane.

A finite-conjugate paraxial trace with the patent close-focus spacings and fixed image plane gives a best-focus object distance of 376.58 mm from the front vertex and a lateral magnification of −0.165. Adding the physical optical track to the focal plane gives 499.09 mm, matching the official 0.5 m / 0.17× production specification after rounding.

The production AF mechanism uses a DC motor according to Fujifilm. The patent does not describe the motor implementation; it only specifies the optical focusing movement.

## 6. Aspherical Surfaces

The patent uses the aspheric sag expression:

$$Z_d = \frac{C h^2}{1 + \sqrt{1 - K_A C^2 h^2}} + \sum A_m h^m.$$

This is the $K_A = 1 + K$ convention relative to the standard renderer form. All four Example 1 aspherical surfaces list $K_A = 1.0000000$, so the standard conic constant is $K = 0$ for surfaces 11, 12, 24, and 25. Their base conics are spherical and all aspheric correction is carried by the even-order polynomial terms.

| Data-file surface | Patent surface | Element | A4 | A6 | A8 | A10 |
|---|---:|---|---:|---:|---:|---:|
| 11A | 11 | L24 front | −9.7134740E−06 | −1.5209098E−07 | +3.5418863E−09 | −5.5997685E−11 |
| 12A | 12 | L24 rear | −1.9062669E−06 | −1.2250081E−07 | +2.8717554E−09 | −4.4123528E−11 |
| 24A | 24 | L34 front | −2.3970257E−05 | −9.8719288E−09 | −2.3513245E−11 | +7.9437317E−13 |
| 25A | 25 | L34 rear | −1.9100502E−05 | −2.9730877E−08 | +3.1883941E−10 | −1.9712131E−12 |

The higher-order coefficients are:

| Surface | A12 | A14 | A16 | A18 | A20 |
|---|---:|---:|---:|---:|---:|
| 11A | +5.5503196E−13 | −3.4564182E−15 | +1.3078108E−17 | −2.7329980E−20 | +2.3977500E−23 |
| 12A | +4.2981705E−13 | −2.6519418E−15 | +1.0024634E−17 | −2.1139450E−20 | +1.8963057E−23 |
| 24A | −6.7634995E−15 | +2.8013170E−17 | −5.8875024E−20 | +5.6671369E−23 | −1.5057050E−26 |
| 25A | +7.8749013E−15 | −2.0296268E−17 | +3.3821126E−20 | −3.3769127E−23 | +1.5598490E−26 |

The sag departures from the spherical base, computed from the full A4–A20 polynomial, are:

| Surface | h = 5 mm | h = 10 mm | h = 15 mm | Inferred SD |
|---|---:|---:|---:|---:|
| 11A | −7.5 µm | −139.8 µm | −842.6 µm | −1525 µm at 16.6 mm |
| 12A | −2.3 µm | −50.0 µm | −316.7 µm | −536 µm at 16.6 mm |
| 24A | −15.1 µm | −248.5 µm | −1295.8 µm | −3021 µm at 18.5 mm |
| 25A | −12.3 µm | −202.4 µm | −1018.5 µm | −2284 µm at 18.5 mm |

The large departures confirm that L24 and L34 are not decorative aspheres. L24 controls axial and zonal spherical aberration near the stop. L34, nearly afocal in the paraxial trace, controls off-axis residuals close to the image plane.

## 7. Conditional Expressions

The patent's conditional expressions are reproduced by paraxial trace to the published precision:

| # | Expression | Patent range | Computed Example 1 value |
|---|---|---:|---:|
| 1 | TTL² / (f² · tan ωm) | 5 to 15 | 9.247 |
| 2 | Bf / f | 0.1 to 0.6 | 0.3638 |
| 3 | f3 / f2 | −18.5 to −1 | −12.242 |
| 4 | (N2po + N2pi) / 2 | 1.86 to 2.2 | 2.0258 |
| 5 | (ν2po + ν2pi) / 2 | 15 to 40 | 26.190 |
| 6 | f3 / f1 | 1.5 to 3.5 | 2.579 |
| 7 | f / f1 | −0.35 to −0.08 | −0.2116 |
| 8 | ν3p − ν3n | 1 to 10 | 4.570 |
| 9 | DG3 / Bf | 0.85 to 2 | 1.117 |

The strongest design signal is conditional expression 4. The end positives of G2 are L21 and L28, with indices 2.05091 and 2.00069. Their average, 2.0258, places the design deep in the patent's high-index preferred region.

## 8. Petzval Sum and Field Correction

A surface-by-surface Petzval calculation using $\sum (n' - n)/(n n' R)$ over the refracting surfaces, excluding the cover glass, gives:

$$P = +0.0015433\ \mathrm{mm}^{-1}, \quad P f = 0.08746.$$

This is a low positive Petzval product for a fast normal lens and is consistent with the design's weak negative G1 and G3 groups, dense-flint negative elements, and rear aspherical corrector. The rear group's paraxial focal length is −690.669 mm, so G3 is not primarily a power group. It is a field, lateral-color, and distortion-correction group.

## 9. Verification Summary

The corrected prescription was independently re-run as a paraxial ABCD trace before the data file was written.

| Quantity | Patent / source value | Independent calculation |
|---|---:|---:|
| Infinity EFL | 56.67 mm | 56.6715 mm |
| Close-configuration EFL | 58.40 mm | 58.4014 mm |
| Air-equivalent BFD at infinity | 20.62 mm | 20.6174 mm |
| G1 focal length | — | −267.816 mm |
| G2 focal length | — | +56.417 mm |
| G3 focal length | — | −690.669 mm |
| Physical front vertex to focal plane | — | 122.508 mm |
| Air-equivalent TTL | — | 121.418 mm |
| Closest object distance from front vertex | 0.4 m rounded | 0.3766 m |
| Closest focus distance from focal plane | 0.5 m | 0.4991 m |
| Magnification at closest trace | 0.17× | −0.165× |
| Petzval product $P f$ | not published | +0.08746 |

The data file preserves the patent's infinity prescription, uses the official marketed focal length and aperture for product metadata, and uses the official 0.5 m close-focus distance for the viewer metadata. The patent's cover glass is excluded from the surfaces array and folded into the final air-equivalent back focal distance.

## 10. Sources

- US 2023/0341664 A1, *Imaging Lens and Imaging Apparatus*, FUJIFILM Corporation. Example 1, Tables 1–3; FIGS. 1–3; paragraphs describing the three-group focusing architecture and aspheric equation.
- FUJIFILM Corporation, official GF55mmF1.7 R WR specifications: 14 elements in 10 groups; two aspherical and two ED elements; 55 mm focal length; 52.9° angle of view; F1.7 maximum aperture; 0.5 m minimum focus distance; 0.17× maximum magnification; 11 rounded blades; 99.3 mm length; 780 g weight; 77 mm filter.
- FUJIFILM Corporation press release, September 12, 2023, announcing the GF55mmF1.7 R WR and describing the eight-element focus group, one focus-group asphere, two ED elements, rear asphere, high-refractive glasses, 11 diaphragm blades, and DC motor AF.
- OHARA and HOYA public catalog/cross-reference data for S-LAH98, S-NBH58, S-TIM8, S-TIL2, FCD1, FCD515/FCD505, E-F1, E-F8, E-FEL2, E-FD8, TAFD40, TAFD45, and TAFD65-class glasses.
- HIKARI public catalog data for J-LASFH17 and J-LASFH22.
