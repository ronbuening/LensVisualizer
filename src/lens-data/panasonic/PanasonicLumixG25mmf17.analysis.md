# PANASONIC LUMIX G 25mm f/1.7 ASPH. — Optical Analysis

## Patent Reference and Design Identification

**Patent:** US 2017/0059832 A1  
**Filed:** August 10, 2016  
**Published:** March 2, 2017  
**Priority dates:** August 31, 2015; June 10, 2016  
**Inventor:** Shunichiro Yoshinaga  
**Applicant:** Panasonic Intellectual Property Management Co., Ltd., Osaka, Japan  
**Title:** Single Focal Length Lens System, Interchangeable Lens Apparatus, and Camera System  
**Embodiment analyzed:** Numerical Example 4, corresponding to the fourth exemplary embodiment and FIG. 7

Numerical Example 4 is the closest patent embodiment for the Panasonic LUMIX G 25mm f/1.7 ASPH. (H-H025). The production specification gives a 25 mm Micro Four Thirds lens with 7 groups and 8 elements, two aspherical lenses, one UHR element, f/1.7 aperture, 0.25 m minimum focus, 0.14× maximum magnification, 46 mm filter thread, 47° angle of view, and a stepping-motor inner-focus system. The patent example gives 8 glass elements, 7 air-spaced groups, four aspherical surfaces on L6 and L7, a highest-index front element at nd = 2.00069, f = 25.8784 mm, F/1.7601, image height 10.815 mm, close-object state d0 = 175.0 mm, and a single moving negative G2 focus element. These are mutually consistent and are more specific than the nominal 25 mm product name.

The identification is therefore based on convergent evidence rather than focal length alone:

1. Example 4 is the only patent example with 8 elements; the production lens is specified as 8 elements in 7 groups.
2. Example 4 places four aspherical surfaces on two molded elements, matching the production claim of two aspherical lenses.
3. L1 has nd = 2.00069, matching the production design’s single UHR-class element.
4. The patent’s f = 25.8784 mm and F/1.7601 correspond to the marketed 25 mm f/1.7 class.
5. The patent image height H = 10.815 mm gives a 21.63 mm diagonal image circle, matching Four Thirds / Micro Four Thirds coverage.
6. The patent close-object state gives a subject-to-image distance of approximately 246.0 mm and a computed magnification of −0.144×, matching the production 0.25 m / 0.14× specification within normal rounding.
7. The patent describes a fixed G1 and G3 with G2 moving imageward for focus; Panasonic describes an inner-focus drive with a stepping motor.

## Optical Architecture

The design is a three-unit positive / negative / positive normal prime with inner focusing. It is not a true telephoto design, because the patent’s full optical track is much longer than the focal length. It is also not a true retrofocus design in the strict back-focus sense, because the air-equivalent back focus from the rear glass element is shorter than the focal length. The better description is a compact positive-negative-positive inner-focus normal-lens architecture adapted to the Micro Four Thirds register and sensor-cover stack.

The units at infinity are:

| Unit | Contents | Power | Patent focal length | Function |
|---|---:|---:|---:|---|
| G1 | L1–L5 plus aperture stop | Positive | +30.511 mm | Front collector, stop section, and primary chromatic correction |
| G2 | L6 only | Negative | −45.555 mm | Lightweight moving focus group |
| G3 | L7–L8 plus cover plate M in the patent | Positive | +31.319 mm | Rear relay and field flattening |

G1 contains a high-index positive meniscus front element, a negative meniscus diverger, a cemented negative/positive chromatic corrector, the aperture diaphragm, and a post-stop positive element. G2 is a single aspherical negative meniscus. G3 uses a strong aspherical biconvex positive element followed by a weak negative meniscus. In the patent table, G3 also includes the plane-parallel plate M, but the data file omits M and folds its paraxial optical thickness into the final air-equivalent back focus.

The L3–L4 cemented doublet is nearly afocal as a pair: its computed in-situ thick-lens net focal length is approximately −191.5 mm. Its value is not that it drives the system power, but that it supplies strong chromatic correction while leaving the beam convergence entering the stop section relatively unchanged.

## Element-by-Element Analysis

### L1 — Positive Meniscus, convex to object

nd = 2.00069, νd = 25.5. Glass: TAFD40 (Hoya) / H-ZLaF90 class. f = +28.747 mm.

L1 is the strongest positive element in the front section. The very high refractive index lets Panasonic concentrate front-group power into a short-radius meniscus without requiring an excessively large front element. Its rear radius is weak compared with the front radius, so the element is a positive meniscus rather than a biconvex collector.

The patent does not name the glass, but the nd/νd code 001/255 matches Hoya TAFD40 and the Hoya cross-reference class that includes Hikari H-ZLaF90. The patent line indices give PgF = 0.61349 and ΔPgF ≈ +0.0126 relative to the Schott normal line.

### L2 — Negative Meniscus, convex to object

nd = 1.51742, νd = 52.1. Glass: E-CF6 (Hoya) / S-NSL36 class. f = −20.587 mm.

L2 is a steep negative meniscus placed directly behind the high-index L1 collector. It reduces the excessive convergence and helps control Petzval curvature from the front group. The large air gap behind L2 gives the beam room to expand before reaching the cemented L3–L4 corrector.

The glass code 517/522 corresponds to Hoya E-CF6 and its cross-reference family. Its patent PgF value is 0.55883, only mildly above the normal partial-dispersion line.

### L3–L4 — Cemented Biconcave / Biconvex Chromatic Corrector

L3: nd = 1.75211, νd = 25.0. Glass: FF8 (Hoya, 752/251). f = −11.172 mm.  
L4: nd = 1.72916, νd = 54.7. Glass: TAC8 (Hoya) / S-LAL18 class. f = +14.691 mm.

L3 and L4 are cemented at surface 6. L3 is a dense flint negative element; L4 is a lower-dispersion lanthanum crown positive element. The pair forms the primary achromatizing doublet in G1.

The standalone focal lengths of the two elements are strong, but the cemented pair has only weak net power when traced as a doublet. This distinction matters: L3 and L4 are not weak elements individually. Their strong but opposed powers correct chromatic aberration while keeping the first-unit power distribution moderate.

L3 is also the element used for condition (1) in Table 36 of the patent. Its PgF = 0.61909 and νd = 25.0 give PgF + 0.0018νd = 0.6641. L4 has negative anomalous partial dispersion relative to the normal line, which complements L3 rather than satisfying the patent’s anomalous-positive condition.

### L5 — Biconvex Positive

nd = 1.80420, νd = 46.5. Glass: TAF3 (Hoya) / N-LASF44 class. f = +27.466 mm.

L5 is a positive post-stop element that completes G1. Its position behind the aperture lets it contribute positive power without excessively enlarging the front collector. Its Abbe number places it in dense-flint territory despite the lanthanum-glass family resemblance; it should not be described as a crown.

The patent line indices give PgF = 0.55785 and ΔPgF ≈ −0.0077. That negative deviation is useful because the design otherwise contains several positive anomalous-dispersion elements.

### L6 — Negative Meniscus, convex to object; both surfaces aspherical

nd = 1.53380, νd = 55.6. Glass: unmatched 53380/55.6 anomalous PGM crown, patent line indices only. f = −45.555 mm.

L6 is the entire G2 focusing unit. It moves toward the image when focusing from infinity to close distance. Both radii are positive, so the element is a negative meniscus with its convex side facing the object. Patent ¶0061 calls it biconcave, but the numerical prescription and FIG. 7 show the meniscus form. The numerical table governs the analysis.

No public Hoya, Ohara, Schott, Hikari, CDGM, or Sumita catalog match was found for nd = 1.53380 and νd = 55.6. The material is therefore recorded as unmatched rather than assigned to a speculative catalog name. Its patent line indices give PgF = 0.56232 and ΔPgF ≈ +0.0120, which is unusually high for this index/Abbe region and is central to condition (3).

### L7 — Biconvex Positive; both surfaces aspherical

nd = 1.53380, νd = 55.6. Glass: unmatched 53380/55.6 anomalous PGM crown, patent line indices only. f = +24.177 mm.

L7 is the main positive rear relay element. It reconverges the beam after the negative moving group and supplies most of the rear-unit positive power. Both surfaces are aspherical, and both use the same unmatched anomalous-dispersion material as L6.

For condition (2), Table 36 identifies L7 as lens element B. Its partial-dispersion metric is the same as L6: PgF + 0.0018νd = 0.6624. The paired use of the same material on adjacent negative and positive elements is a deliberate chromatic strategy: it lets G2 move for focus while retaining a controlled secondary-spectrum balance against the fixed G3 positive element.

### L8 — Negative Meniscus, convex to image

nd = 1.58144, νd = 40.9. Glass: E-FL5 (Hoya) / S-TIL25 class. f = −84.462 mm.

L8 is a weak rear negative meniscus. Both radii are negative, so the element is concave to the object and convex to the image. Patent ¶0062 describes the eighth element as having a convex object-side surface, but the radius signs and FIG. 7 show the opposite orientation. As with L6, the numerical prescription is controlling.

L8’s role is primarily field correction. Its weak negative power reduces Petzval curvature and helps shape the exit-side beam before the cover-glass proxy.

### M — Plane-Parallel Plate in the Patent, omitted from the data file

nd = 1.51680, νd = 64.2. Glass class: BSC7 / N-BK7 equivalent. Optical power: none.

The patent includes a 4.2 mm plane-parallel plate M after L8, followed by a 1.0 mm air gap and a dummy BF plane. This plate represents the sensor-cover / filter stack rather than a lens element in the interchangeable lens. The data file therefore excludes M from the rendered surfaces and folds the plate into the final air-equivalent back focus: 10.8 + 4.2/1.51680 + 1.0 + BF.

At infinity, this gives an air-equivalent final spacing of 14.5736 mm after L8. At the closest patent focus state, it becomes 14.5749 mm.

## Glass Identification and Selection

The patent publishes nd, νd, nC, nF, ng, and PgF values but not catalog names. Those line indices are retained for every material in the data file, but the APD badge is limited to the Table 36 condition elements: L3, L7, and L6. Glass identities below are catalog matches or cross-reference-class matches. Where no authoritative public match was found, the material is left as unmatched.

| Element | nd | νd | PgF | ΔPgF | Identification | Status |
|---|---:|---:|---:|---:|---|---|
| L1 | 2.00069 | 25.5 | 0.61349 | +0.0126 | TAFD40 (Hoya) / H-ZLaF90 class | matched by code 001/255 |
| L2 | 1.51742 | 52.1 | 0.55883 | +0.0027 | E-CF6 (Hoya) / S-NSL36 class | matched by code 517/522 |
| L3 | 1.75211 | 25.0 | 0.61909 | +0.0173 | FF8 (Hoya) | matched by code 752/251 |
| L4 | 1.72916 | 54.7 | 0.54521 | −0.0066 | TAC8 (Hoya) / S-LAL18 class | matched by code 729/547 |
| L5 | 1.80420 | 46.5 | 0.55785 | −0.0077 | TAF3 (Hoya) / N-LASF44 class | matched by code 804/465 |
| L6 | 1.53380 | 55.6 | 0.56232 | +0.0120 | Unmatched 53380/55.6 anomalous PGM crown | no public catalog match found |
| L7 | 1.53380 | 55.6 | 0.56232 | +0.0120 | Unmatched 53380/55.6 anomalous PGM crown | no public catalog match found |
| L8 | 1.58144 | 40.9 | 0.57667 | +0.0017 | E-FL5 (Hoya) / S-TIL25 class | matched by code 581/409 |
| M | 1.51680 | 64.2 | 0.53418 | −0.0016 | BSC7 / N-BK7 class | cover plate; omitted from data file |

The prior glass palette should not be treated as a set of exact vendor claims unless the nd/νd pair is actually present in the relevant catalog. L6 and L7 are the important exception: the patent’s line-index data are real, but the catalog name is not recoverable from public manufacturer catalogs. The data file therefore preserves their measured line indices and marks the glass string as unmatched.

## Focus Mechanism

Focusing is by movement of G2 only. G1 and G3 remain fixed relative to the image surface, and the moving unit is the single negative aspherical L6 element.

| Parameter | Infinity | Intermediate | Close patent state |
|---|---:|---:|---:|
| Patent object distance d0 | ∞ | 939.5121 mm | 175.0000 mm |
| d10, G1–G2 spacing | 2.3500 mm | 3.4869 mm | 8.6131 mm |
| d12, G2–G3 spacing | 9.5295 mm | 8.3965 mm | 3.2651 mm |
| Patent BF after dummy plane | 0.00461 mm | 0.00488 mm | 0.00594 mm |
| Air-equivalent data-file BF after L8 | 14.5736 mm | 14.5739 mm | 14.5749 mm |
| System focal length | 25.8784 mm | 26.0073 mm | 26.0867 mm |
| F-number | 1.7601 | 1.7904 | 1.9146 |
| Viewing half-angle | 23.6324° | 23.1232° | 21.1160° |
| Computed lateral magnification | 0 | −0.0274× | −0.1441× |

The G2 imageward travel from infinity to the closest tabulated patent state is 6.2631 mm. The production maximum magnification specification of 0.14× is consistent with the finite-conjugate matrix result of −0.144× at d0 = 175 mm.

The close-object patent state gives 175.0 mm from object to the first patent surface plus 71.0046 mm from first surface to image plane, or 246.0 mm subject-to-image. Panasonic rounds the product specification to 0.25 m.

## Aspherical Surfaces

The four aspherical surfaces are on L6 and L7: patent surfaces 11, 12, 13, and 14. In the data file they are labeled 11A, 12A, 13A, and 14A. The patent equation uses the standard conic form with K = 0 corresponding to a spherical base curve. All four Example 4 conic constants are zero, so the asphericity is carried entirely by the even-order polynomial terms through A16.

| Surface | K | A4 | A6 | A8 | A10 | A12 | A14 | A16 |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| 11A | 0 | +1.61276e−5 | −5.81668e−7 | −2.09502e−9 | +7.71341e−10 | −2.10800e−11 | +2.38633e−13 | −1.00673e−15 |
| 12A | 0 | +1.81047e−5 | +1.27838e−6 | −1.03829e−7 | +3.56865e−9 | −6.09424e−11 | +5.06181e−13 | −1.58084e−15 |
| 13A | 0 | +1.78062e−5 | +2.01697e−7 | −9.59188e−9 | +2.58013e−10 | −3.40082e−12 | +2.22992e−14 | −5.27487e−17 |
| 14A | 0 | +4.87160e−5 | −1.55628e−7 | +3.63235e−9 | −5.25127e−11 | +9.47811e−13 | −9.91324e−15 | +4.47375e−17 |

At the data-file semi-diameters, the polynomial departures from the spherical base are:

| Surface | Data semi-diameter | Polynomial departure | Total sag | Rim slope |
|---|---:|---:|---:|---:|
| 11A | 10.2 mm | −0.3910 mm | −0.1855 mm | 49.3° |
| 12A | 10.2 mm | +0.7703 mm | +3.2636 mm | 51.4° |
| 13A | 11.8 mm | +1.1791 mm | +3.4839 mm | 53.2° |
| 14A | 11.8 mm | +2.3103 mm | −1.4603 mm | 58.8° |

These departures are not patent-published clear-aperture values; they are reported only for the estimated semi-diameters used in the LensVisualizer data file. Surface 14A carries the largest positive polynomial departure in the implemented model and is the most rim-slope-sensitive of the four aspheres.

## Chromatic Correction Strategy

The patent’s central chromatic correction condition is the partial-dispersion metric PgF + 0.0018νd. For Example 4, Table 36 uses L3 as lens element A for condition (1), L7 as lens element B for condition (2), and L6 as lens element C for condition (3). L6 and L7 are adjacent in the optical train but lie on opposite sides of the variable d12 gap, so their relative spacing changes with focus.

The design therefore uses anomalous positive partial dispersion in three places: L3 in G1, L6 in the moving negative focus group, and L7 in G3. L4 and L5 have negative ΔPgF and balance the positive anomalous glasses. This explains why L5, although positive and image-side of the stop, is not the element used for condition (2): its PgF + 0.0018νd value is below the specified lower limit.

The practical effect is not apochromatic correction in the usual photographic-lens marketing sense. The supported statement is narrower: the patent uses anomalous partial dispersion to reduce axial and lateral chromatic residuals while preserving a light single-element focus group.

## Conditional Expressions

The patent lists seven conditional expressions. Independent computation from the Example 4 prescription gives the following values.

| Condition | Patent expression | Element(s) | Computed | Patent Table 36 | Status |
|---|---|---|---:|---:|---|
| (1) | 0.647 < PgF_A + 0.0018νd_A < 0.75 | L3 | 0.6641 | 0.6641 | satisfied |
| (2) | 0.647 < PgF_B + 0.0018νd_B < 0.75 | L7 | 0.6624 | 0.6624 | satisfied |
| (3) | 0.647 < PgF_C + 0.0018νd_C < 0.75 | L6 | 0.6624 | 0.6624 | satisfied |
| (4) | −0.5 < (R1_B + R2_B)/(R1_B − R2_B) < 1.0 | L7 | 0.213 | 0.21 | satisfied |
| (5) | 0.2 < (R1_C + R2_C)/(R1_C − R2_C) < 3.0 | L6 | 1.191 | 1.19 | satisfied |
| (6) | 0.3 < \|f_B/f_C\| < 2.5 | L7/L6 | 0.531 | −0.53 signed | satisfied |
| (7) | 0.2 ≤ \|f/f_D\| ≤ 3.0 | system/L6 | 0.568 | −0.57 signed | satisfied |

Patent Table 36 records signed ratios for conditions (6) and (7), even though the governing inequalities use absolute values. The signed entries are −0.53 and −0.57; their absolute magnitudes are the values used to test the stated conditions.

## Verification Summary

The prescription was re-entered directly from the rasterized Table 22 rather than from the prior analysis text. Two OCR-sensitive values are especially important: surface 1 thickness d1 = 4.30000 mm and surface 2 spacing d2 = 1.52650 mm. Using the erroneous d1/d2 values sometimes produced by OCR changes the computed EFL and is not acceptable.

Independent paraxial y–ν ray tracing reproduces the patent’s load-bearing values:

| Quantity | Computed | Patent |
|---|---:|---:|
| System EFL at infinity | 25.8784 mm | 25.8784 mm |
| Full physical patent track | 71.0046 mm | 71.0046 mm |
| Data-file track with cover folded out | 69.5736 mm | derived |
| G1 focal length | +30.5110 mm | +30.51097 mm |
| G2 focal length | −45.5554 mm | −45.55524 mm |
| G3 focal length | +31.3196 mm | +31.31949 mm |
| L1 focal length | +28.7471 mm | +28.7470 mm |
| L2 focal length | −20.5869 mm | −20.5869 mm |
| L3 focal length | −11.1722 mm | −11.1722 mm |
| L4 focal length | +14.6906 mm | +14.6906 mm |
| L5 focal length | +27.4664 mm | +27.4664 mm |
| L6 focal length | −45.5554 mm | −45.5552 mm |
| L7 focal length | +24.1768 mm | +24.1767 mm |
| L8 focal length | −84.4622 mm | −84.4622 mm |
| L3–L4 cemented-pair net focal length | −191.5 mm | derived |
| Surface-by-surface Petzval sum | +0.004122 mm⁻¹ | derived |
| Petzval radius | 242.6 mm | derived |
| Close-state magnification | −0.1441× | consistent with 0.14× production spec |

The Petzval value was computed surface by surface as Σφ/(n·n′), not by summing thin element powers. That distinction is material for this design because the L3–L4 cemented pair and the cover plate otherwise invite misleading thin-lens shortcuts.

The semi-diameters in the data file are estimates. The largest constraints are L2 rear / L3 front cross-gap clearance, the L4 edge thickness, and the aspherical rim slopes on L6 and L7. The implemented aspherical rim slopes remain below 64.2°, the L3–L4 and L7–L8 air gaps pass the 90% gap-intrusion test, and all element front/rear semi-diameter ratios remain within 1.25.

## Sources

- US Patent Application Publication US 2017/0059832 A1, Yoshinaga, “Single Focal Length Lens System, Interchangeable Lens Apparatus, and Camera System,” especially ¶0060–¶0064, ¶0070–¶0072, Tables 22–28, and Table 36.
- Panasonic Japan, H-H025 product specification page for LUMIX G 25mm / F1.7 ASPH., including 7 groups / 8 elements, two aspherical lenses, one UHR lens, Micro Four Thirds mount, F1.7 aperture, 0.25 m minimum focus, 25 mm focal length, 0.14× maximum magnification, 47° angle of view, 46 mm filter, 52 mm length, and 125 g mass.
- Panasonic UK / Ireland, H-H025E product page, confirming 8 elements in 7 groups, two aspherical lenses, one Ultra High Refractive Index lens, Micro Four Thirds system, 25 mm / 50 mm equivalent focal length, F1.7 aperture, and 46 mm filter.
- HOYA Optics Europe, Glass Cross Reference Index and Optical Glass Catalogue/Data pages, for Hoya glass-code matches and cross-vendor equivalents.
- Ohara, Schott, Hikari, CDGM, and Sumita public catalog/cross-reference data used only as secondary checks where Hoya did not provide a unique exact identification.
