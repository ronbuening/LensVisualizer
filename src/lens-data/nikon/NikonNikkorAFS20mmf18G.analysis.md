# Nikon AF-S NIKKOR 20mm f/1.8G ED — Optical Analysis

## Patent Reference and Design Identification

**Patent:** JP 2016-021011 A  
**Application Number:** 特願2014-145219 (P2014-145219)  
**Filed:** July 15, 2014  
**Published:** February 4, 2016  
**Inventors:** Fukuda Taisei (福田 泰成), Masui Atsuo (増井 淳雄), Machida Kosuke (町田 幸介)  
**Applicants:** Konica Minolta, Inc.; Nikon Corporation  
**Title:** 広角レンズ，撮像光学装置及びデジタル機器 (Wide-angle lens, imaging optical device, and digital equipment)  
**Embodiment analyzed:** Example 4 (第4実施例, EX4)

Example 4 is the best production match for the AF-S NIKKOR 20mm f/1.8G ED. The match is not based on a single numerical coincidence; it rests on the same 13-element / 11-group layout, a full-frame image height of 21.6 mm, a patent focal length of 20.6 mm, a design aperture of F/1.86, two ED-class lens elements, two aspherical lens elements, and a rear-focusing architecture in which the first group remains fixed while the second group moves toward the object for close focus. The patent describes the general invention as a negative first group and positive second group with rear-group focusing and conditions requiring Fno < 2.4 and full field angle greater than 80° (¶0006, ¶0021-¶0022). Nikon's production specification lists a 20 mm f/1.8 FX-format F-mount lens with 13 elements in 11 groups, two ED elements, two aspherical elements, rear focusing, and a 0.20 m minimum focus distance.

The patent's regional angle-of-view comparison needs care. Example 4 lists fov = 94.2°. Nikon USA lists 94° on FX format, while Nikon's global product page lists 90°. This document treats the patent's 94.2° value as the patent design value and records the manufacturer's published specifications separately.

## Optical Architecture

The design is a high-speed retrofocus wide-angle lens for a 135-format SLR. It consists of a negative first group, Gr1, and a positive second group, Gr2. Gr1 is fixed during focusing; Gr2 is the rear focusing group. The first group gives the lens its retrofocus character by expanding the incoming field and preserving mirror-box clearance, while the second group supplies the main convergence, aperture-stop control, and final aberration correction.

The patent prescription includes 13 lens elements. In the data file, the thin resin layer on L12 and the two 0.01 mm cement layers are modeled explicitly as optical media, but they are not counted as production lens elements. The sensor cover plate in patent surfaces 29-30 is not modeled as a surface, because the LensVisualizer data convention excludes sensor glass. Instead, its optical path is folded into the final air-equivalent back focal distance.

The meaningful retrofocus measure is the back focal clearance relative to focal length, not total track divided by focal length. With the patent's 36.31 mm air space from L27 to the cover plate, plus a 2.00 mm cover plate and 1.00 mm final air gap, the physical last-lens-to-image distance is 39.31 mm. Excluding the cover glass and folding it into air gives an air-equivalent final gap of 38.6286 mm. Against a 20.6001 mm computed EFL, this gives BFD/EFL ≈ 1.88. The total track from the first vertex to the image plane remains 125.31 mm.

The first group contains, from object to image: two negative menisci, a biconcave ED negative lens, a positive cemented doublet designated LS, and a positive meniscus behind the doublet. The second group begins with a negative meniscus, continues through a strong positive element and a near-afocal cemented achromat, contains the aperture stop, and finishes with a post-stop negative meniscus, a double-aspherical biconvex positive element, and a final positive meniscus.

## Element-by-Element Analysis

### L11 — Negative Meniscus, concave to image

nd = 1.72916, νd = 54.7. Glass: S-LAL18 / TAC8 class (729/547). f = −59.9 mm.

L11 is the large front diverging member of the retrofocus group. Its two positive radii, with the rear surface more strongly curved, form a negative meniscus that starts the field expansion without requiring an extremely small radius on the first surface. The high index allows significant negative power while keeping the front curvature moderate.

### L12 — Negative Meniscus with Hybrid Aspherical Rear Layer

Glass body: nd = 1.72916, νd = 54.7. Glass: S-LAL18 / TAC8 class. Glass-body f = −71.6 mm. Composite f = −51.9 mm.  
Resin layer: nd = 1.51380, νd = 53.0. Glass: patent UV-cure resin layer.

L12 is a hybrid composite asphere: a glass meniscus body with a thin resin layer bonded to the rear surface. The aspheric profile is on surface 5. The patent's design discussion states that a first-group negative lens with an aspherical surface is desirable for correcting the distortion produced by the negative front group (¶0034). The computed standalone glass-body focal length is −71.6 mm, while the composite glass-plus-resin pair is −51.9 mm; that difference is why the resin layer is modeled explicitly in the data file.

### L13 — Biconcave Negative ED Element

nd = 1.49700, νd = 81.6. Glass: S-FPL51 / FCD1 class ED fluorophosphate. f = −66.2 mm.

L13 is the low-dispersion negative element satisfying the patent's condition that at least one first-group negative lens should have νd > 70 (¶0013, ¶0035-¶0036). Its biconcave form carries moderate negative power, but its more important role is chromatic: placing ED-class glass in the negative front group suppresses lateral chromatic error at large field angles before the beam reaches the LS doublet.

### L14 + Cement + L15 — First Cemented Doublet LS

L14: nd = 1.80610, νd = 33.3. Glass: HOYA NBFD15 class (806/333). f = +37.9 mm.  
Cement: nd = 1.51400, νd = 42.8. Patent 0.01 mm cement layer.  
L15: nd = 1.84666, νd = 23.8. Glass: S-TIH53 / FDS90 class (847/238). f = −78.2 mm.  
Doublet f = +71.6 mm.

The earlier draft identified L14 as S-TIH6. That was incorrect: S-TIH6 corresponds to the 805/255 glass used by L16, not to the 806/333 glass at L14 and L24. L14 and L24 match the HOYA NBFD15 code family. L15 remains a very dense, very dispersive flint corresponding closely to the S-TIH53 / FDS90 class.

This cemented doublet is the patent's named LS component. It has positive net power and sits after the three negative front lenses. The patent's central condition (1), `(R2 + R1) / (R2 - R1)`, uses the object-side and image-side radii of this first cemented lens in Gr1; for Example 4, `(−217.291 + 73.126) / (−217.291 − 73.126) = 0.4965`, which rounds to the table value 0.50. The patent states that the condition balances spherical aberration and coma, especially sagittal and meridional coma (¶0022).

### L16 — Positive Meniscus, convex to object

nd = 1.80518, νd = 25.5. Glass: FD60 / S-TIH6 class (805/255). f = +76.6 mm.

L16 is the positive element after LS in Gr1. The previous analysis called it S-TIH4; the corrected catalog match is the 805/255 dense flint class, represented by HOYA FD60 and OHARA S-TIH6. The patent specifically notes that placing a positive lens on the image side of the first cemented lens reduces the aberration burden carried by that cemented lens (¶0027). In this design it narrows the beam before the Gr1-Gr2 air gap and reduces the required diameter of the moving rear group.

### L21 — Negative Meniscus, concave to image

nd = 1.80420, νd = 46.5. Glass: TAF3 / S-LAH65V / N-LASF44 class (804/465). f = −66.9 mm.

L21 is the first lens in the moving rear group. Its catalog family is a high-index lanthanum flint or dense-lanthanum-flint class, not a crown: νd = 46.5 places it on the flint side of the crown/flint boundary. The patent states that making the most object-side lens in Gr2 negative is desirable for correcting field curvature (¶0037). L21 performs that field-shaping role before the strong positive power of L22.

### L22 — Biconvex Positive

nd = 1.63854, νd = 55.5. Glass: BACD18 / S-BSM18 class (639/555). f = +26.8 mm.

The previous analysis identified this element as S-BAL42. That was not supported by catalog values; S-BAL42 is a different glass. The 639/555 prescription value instead matches the BACD18 / S-BSM18 / SK18 class. L22 is the strongest positive lens in Gr2 and supplies the principal convergence before the rear achromatizing doublet.

### L23 + Cement + L24 — Rear Near-Afocal Cemented Doublet

L23: nd = 1.59282, νd = 68.6. Glass: HOYA FCD515 ED phosphate-crown class (593/686). f = +51.0 mm.  
Cement: nd = 1.51400, νd = 42.8. Patent 0.01 mm cement layer.  
L24: nd = 1.80610, νd = 33.3. Glass: HOYA NBFD15 class (806/333). f = −45.6 mm.  
Doublet f = −377.7 mm.

This cemented pair has very weak net power but strong chromatic leverage because it combines a high-Abbe ED-class positive element with a dense flint negative element. It is better described as a near-afocal achromatizing corrector than as a major power component. The previous draft's uncertainty around L23 was too broad; the 593/686 glass code matches HOYA FCD515 closely, while L24 shares the same corrected NBFD15-class identification as L14.

### L25 — Negative Meniscus, concave to object

nd = 1.90366, νd = 31.3. Glass: S-LAH95 (OHARA, 904/313). f = −20.7 mm.

The previous analysis identified L25 as S-LAH79. That is wrong: S-LAH79 is a different, much higher-index glass. The patent value matches OHARA S-LAH95. Placed immediately behind the stop, L25 has strong negative power and contributes to Petzval flattening and spherical-aberration balance. Its very high index allows that negative power without an even smaller front radius.

### L26 — Biconvex Positive, both surfaces aspherical

nd = 1.69350, νd = 53.2. Glass: 694/532 moldable lanthanum-crown class; closest public OHARA match L-LAL13/S-LAL13 class. f = +35.3 mm.

L26 carries the two post-stop aspherical surfaces, surfaces 25 and 26. The patent states that at least one aspherical surface behind the stop is desirable because it can correct spherical aberration and coma generated in front of the stop (¶0039). L26 is therefore the main high-order correction element in the rear part of the design.

The catalog naming should remain cautious. The prior draft called this S-LAL13. Current public OHARA data closest to the patent value is an L-prefix moldable lanthanum glass in the L-LAL13 class, but the patent value is not a perfect current-catalog identity. The data file therefore records it as a close 694/532 moldable lanthanum-crown class rather than an exact catalog assertion.

### L27 — Positive Meniscus, convex to image

nd = 1.61800, νd = 63.4. Glass: S-PHM52 (OHARA, 618/633). f = +39.5 mm.

L27 is the final positive meniscus. It provides the last strong convergence before the long rear clearance and contributes to final field shaping. Because the image-space beam is steep and the sensor stack sits behind the lens, this element also influences the exit pupil location and image-side ray angles.

## Glass Identification and Selection

The patent itself gives only nd and νd, not vendor names. The following identifications are catalog matches or class matches derived from the nd/νd pairs. Exact vendor identity should not be over-claimed unless the patent or manufacturer says so.

| Element   |      nd |   νd | Corrected identification            | Confidence                | Role                         |
| --------- | ------: | ---: | ----------------------------------- | ------------------------- | ---------------------------- |
| L11, L12  | 1.72916 | 54.7 | S-LAL18 / TAC8 class                | Exact class match         | High-index negative menisci  |
| L12 resin | 1.51380 | 53.0 | Patent UV-cure resin                | Patent-listed only        | Hybrid aspherical layer      |
| L13       | 1.49700 | 81.6 | S-FPL51 / FCD1 class                | Exact class match         | ED negative lens             |
| L14, L24  | 1.80610 | 33.3 | HOYA NBFD15 class                   | Exact match to 806/333    | Dense flint in doublets      |
| L15       | 1.84666 | 23.8 | S-TIH53 / FDS90 class               | Exact class match         | Very dense flint in LS       |
| L16       | 1.80518 | 25.5 | FD60 / S-TIH6 class                 | Exact class match         | Positive Gr1 collector       |
| L21       | 1.80420 | 46.5 | TAF3 / S-LAH65V / N-LASF44 class    | Exact/near class match    | Negative field corrector     |
| L22       | 1.63854 | 55.5 | BACD18 / S-BSM18 class              | Exact class match         | Strong positive Gr2 lens     |
| L23       | 1.59282 | 68.6 | HOYA FCD515 ED phosphate crown      | Exact 593/686 class match | Rear axial-color corrector   |
| L25       | 1.90366 | 31.3 | S-LAH95                             | Exact OHARA match         | Post-stop negative corrector |
| L26       | 1.69350 | 53.2 | L-LAL13/S-LAL13 close 694/532 class | Close match               | Double-aspherical substrate  |
| L27       | 1.61800 | 63.4 | S-PHM52                             | Exact OHARA match         | Final positive meniscus      |

The main correction to the previous document is the dense-glass palette. L14/L24 are not S-TIH6; L16 is the 805/255 S-TIH6/FD60-class element. L22 is not S-BAL42; it is 639/555 BACD18/S-BSM18 class. L25 is not S-LAH79; it is S-LAH95. L21 should be described as a dense lanthanum flint class, not as a lanthanum crown.

## Focus Mechanism

The focus mechanism is rear-group focusing. The patent states that the first group remains fixed while the second group moves toward the object during close focusing (¶0006, ¶0043, ¶0045). This matches Nikon's production RF designation: only the rear lens group moves during focusing.

The patent gives only the infinity prescription; it does not publish separate close-focus air spacings. A paraxial close-focus solve for Nikon's 0.20 m minimum focus distance gives a Gr2 object-ward shift of 5.375 mm. The Gr1-Gr2 air gap therefore closes from 7.510 mm to 2.135 mm. Holding total physical track constant, the patent-space L27-to-cover-plate distance increases from 36.310 mm to 41.685 mm. In the data file, after folding out the 2.00 mm cover plate, the final air-equivalent distance increases from 38.629 mm to 44.003 mm.

| Spacing                           |  Infinity | Estimated 0.20 m close focus | Notes                  |
| --------------------------------- | --------: | ---------------------------: | ---------------------- |
| Gr1-Gr2 gap after surface 13      |  7.510 mm |                     2.135 mm | Gr2 moves object-ward  |
| Patent physical air gap after L27 | 36.310 mm |                    41.685 mm | Before cover plate     |
| Data-file air-equivalent BFD      | 38.629 mm |                    44.003 mm | Cover glass folded out |
| Paraxial magnification            |         0 |                       0.235× | Nikon publishes 0.23×  |

## Aspherical Surfaces

The patent uses the standard even-polynomial conic sag equation, with K listed directly as the conic constant:

$$z(h)=\frac{c h^2}{1+\sqrt{1-(1+K)c^2h^2}}+\sum_j A_j h^j$$

where c is vertex curvature, h is ray height, K is the conic constant, and the nonzero A terms are even-order coefficients.

### Surface 5 — rear surface of the hybrid L12 resin layer

K = −1.4701e−1  
A4 = −1.4200e−5  
A6 = −9.1344e−8  
A8 = +5.7092e−10  
A10 = −3.8761e−12  
A12 = +1.1697e−14  
A14 = −1.6800e−17

This is the front-group distortion and coma-control asphere. It is a hybrid composite surface, not a monolithic glass-molded surface.

### Surface 25 — front surface of L26

K = 0  
A4 = +1.6819e−5  
A6 = +1.1963e−7  
A8 = +5.3088e−10  
A10 = −7.1472e−13  
A12 = −1.8781e−14  
A14 = +7.6960e−17

### Surface 26 — rear surface of L26

K = −6.3616e−1  
A4 = +3.5114e−5  
A6 = +1.1816e−7  
A8 = +8.6824e−10  
A10 = −8.9067e−13  
A12 = +5.2841e−16  
A14 = −1.7693e−17

Surfaces 25 and 26 form the post-stop double-aspherical corrector. Their combined role is to reduce spherical aberration and coma after the stop while preserving the rear group's positive convergence.

## Conditional Expressions

Example 4 satisfies the seven patent conditions.

| Condition | Expression            | Patent range | Example 4 value | Verification note                               |
| --------- | --------------------- | -----------: | --------------: | ----------------------------------------------- |
| (1)       | (R2 + R1) / (R2 − R1) |   0.3 to 1.2 |            0.50 | Computed 0.4965 from R1 = 73.126, R2 = −217.291 |
| (2)       | Fno                   |        < 2.4 |            1.86 | Patent value                                    |
| (3)       | fov                   |        > 80° |           94.2° | Patent value                                    |
| (4)       | f1 / f                |    −10 to −1 |            −4.0 | −82.275 / 20.6 = −3.99                          |
| (5)       | tp / tn               |       1 to 8 |            3.04 | 5.75 / 1.89 = 3.04                              |
| (6)       | Nd                    |        > 1.8 |      1.81, 1.85 | L14/L15 in LS                                   |
| (7)       | νd                    |         > 70 |            81.6 | L13 ED negative lens                            |

## Verification Summary

The prescription was re-entered and traced independently with a paraxial y-u ABCD calculation using the patent sign convention. The following values were recomputed from the surface table, including the explicit 0.01 mm cement layers and the patent cover glass.

| Parameter                            |        Patent value | Recomputed value | Result                                      |
| ------------------------------------ | ------------------: | ---------------: | ------------------------------------------- |
| System EFL                           |             20.6 mm |       20.6001 mm | Matches                                     |
| Gr1 focal length                     |          −82.275 mm |      −82.2751 mm | Matches                                     |
| Gr2 focal length                     |          +38.687 mm |      +38.6881 mm | Matches within 0.001 mm                     |
| fB after cover plate                 |             1.00 mm |        1.0007 mm | Matches within patent rounding              |
| Total track                          |           125.31 mm |        125.31 mm | Matches                                     |
| Air-equivalent BFD used in data file | Not directly listed |       38.6286 mm | Derived from 36.31 + 2 / 1.51680 + 1        |
| Close-focus shift estimate           |       Not published |        5.3748 mm | Paraxial estimate for 0.20 m MFD            |
| Close-focus magnification estimate   |       Not published |           0.235× | Consistent with Nikon's 0.23× specification |

The Petzval sum, computed surface by surface using φ/(n·n′) through the last lens, is +0.004874 mm⁻¹ under the project sign convention, corresponding to a Petzval curvature radius of approximately −205 mm. This is a modestly flattened result for such a short retrofocus lens and is consistent with the field-curvature-control roles assigned to L21, L25, and the final positive meniscus.

## Data File Notes

The data file preserves the patent surface sequence through surface 28 and omits the cover plate surfaces 29-30. The two 0.01 mm cement layers are modeled explicitly as thin optical media to preserve the patent paraxial power. Semi-diameters are inferred because the patent does not list clear apertures; they are chosen for stable rendering rather than as measured production clear apertures.

The data file uses the marketed aperture, nominalFno = 1.8, as required by the LensVisualizer data specification. The patent design aperture, F/1.86, is recorded separately as apertureDesign.

## Sources

1. JP 2016-021011 A, Japan Patent Office, published February 4, 2016. Primary prescription source for Example 4.
2. Nikon Imaging, “AF-S NIKKOR 20mm f/1.8G ED,” official product specification page. Used for production focal length, optical construction, ED/aspherical counts, minimum focus distance, filter size, and RF/SWM metadata.
3. Nikon USA, “AF-S NIKKOR 20mm f/1.8G ED,” official product / refurbished product specification page. Used for FX angle-of-view, F-mount, rear focusing, and production construction cross-checks.
4. OHARA optical glass catalog pages for S-LAL18, S-FPL51, S-TIH6, S-TIH53, S-LAH65V, S-BSM18, S-LAH95, L-LAL13, and S-PHM52.
5. HOYA optical glass cross-reference and optical glass report tables for TAC8, NBFD15, FD60, BACD18, FCD515, and FDS90 class identifications.
