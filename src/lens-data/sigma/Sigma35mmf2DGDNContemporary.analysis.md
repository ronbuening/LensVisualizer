## Patent Reference and Design Identification

**Patent:** JP 2021-165807 A\
**Application Number:** JP 2020-069658\
**Filed:** 2020-04-08\
**Published:** 2021-10-14\
**Inventor:** Kenta Fujita\
**Applicant:** Sigma Corporation\
**Title:** 結像光学系 (Imaging optical system)\
**Example details:** 数値実施例2 (Numerical Example 2), pp. 12–13; Fig. 6 (section), Figs. 7–10 (aberrations at infinity and 1517 mm); unscaled millimetres.

Sigma filed the application in April 2020 and announced the 35mm F2 DG DN | Contemporary on 1 December 2020. Example 2 matches the product on these points:

1. Construction: 10 elements in 9 groups, as four front singlets, a cemented negative-meniscus/positive pair, the stop, a single negative focusing meniscus and three rear singlets.
2. Special elements: aspherical elements at L4, L7 and L8 and the SLD element at L6, the positions Sigma marks in its construction diagram.
3. Focal length and field: f = 35.99 mm, F2.07 and 2ω = 63.53° against the marketed 35 mm, f/2 and 63.4°, with a 21.63 mm full-frame image height.
4. Focus: only the single-element G2 moves; G1, the stop and G3 stay fixed.

Example 1 has the same layout, with only one aspheric face on L7, but f = 33.81 mm and 2ω = 66.94° are further from the product. Measured against Sigma's drawing, Example 2's L9 front radius (71.2 mm) matches the drawn curve (about 70 mm), where Example 1 has 54.1 mm; Example 1's vertex spacings fit the drawing slightly closer (rms 0.54 mm against 0.68 mm). Neither example has the drawing's nearly flat L10 rear face or its shorter L9–L10 air space (about 4.4 mm against 6.29 mm), so the production prescription probably differs in detail. The model is Example 2 as printed.

## Optical Architecture

Ten elements in nine groups form a positive–negative–positive inner-focus prime: a fixed positive front group G1 (L1–L6, f = 31.17 mm), the stop (surface 12), a single negative focusing meniscus G2 (L7, f = −76.31 mm) and a fixed positive rear group G3 (L8–L10, f = 95.57 mm). The group focal lengths are the patent's own. The patent names the three groups L1, L2 and L3; this page calls them G1–G3 and keeps L1–L10 for the elements. G1 opens with a negative–positive–negative row of singlets ahead of the aspheric L4 and the cemented pair C1; G3 ends in two negative menisci with a biconvex air space between them. The 17.90 mm back focus suits a short-flange mirrorless mount (condition (1), Y/Bf = 1.21), and the total length is 79.15 mm.

## Element-by-Element Analysis

### L1 — Biconcave Negative

nd = 1.51823, νd = 58.96. Glass: E-C3 (HOYA catalog equivalent). f = −34.56 mm.

The front element is concave on both sides. Claim 1 requires the most object-side negative lens of G1 to face a concave surface to the object, which the patent credits with easier field-curvature correction (¶0020). Fig. 6 draws a stepped mounting land on its rear face, which the model draws out to 16.5 mm.

### L2 — Biconvex Positive

nd = 2.05090, νd = 26.94. Glass: TAFD65 (HOYA catalog equivalent). f = +44.29 mm.

This is the patent's positive element 1p, the first positive lens of G1. Conditions (9) and (10) require νd < 35 and ΔPgF > 0.004 so that it corrects the secondary spectrum of lateral colour (¶0052–0053); Example 2 prints νd = 26.94 and ΔPgF = 0.0053. Claim 6 and ¶0051 define that ΔPgF as the element's anomalous dispersion, so the diagram marks L2 as the patent's anomalous-dispersion element.

### L3 — Biconcave Negative

nd = 1.59270, νd = 35.45. Glass: FF5 (HOYA catalog equivalent). f = −31.52 mm.

A biconcave flint with a strongly curved front face (R = −23.74 mm) and a weak rear face, the third singlet of G1.

### L4 — Biconvex Positive (2x Asph)

nd = 1.77250, νd = 49.50. Glass: M-TAF105 (HOYA catalog equivalent, a precision-molding glass). f = +25.11 mm.

The strongest positive singlet in G1, aspheric on both faces. Sigma describes its three aspherical elements as glass-molded, which fits the moldable lanthanum glass equivalent here.

### L5 — Negative Meniscus

nd = 1.77047, νd = 29.74. Glass: NBFD29 (HOYA catalog equivalent). f = −38.35 mm.

The negative member of the cemented pair C1, a meniscus convex to the object as claim 1 requires. The patent prints θgF = 0.5951 for it. The focal length is for the element alone in air; the cemented pair has f = +69.42 mm.

### L6 — Biconvex Positive

nd = 1.59282, νd = 68.62. Glass: FCD515 (HOYA catalog equivalent) — the SLD element. f = +25.11 mm.

The positive member of C1, just ahead of the stop, with θgF = 0.5440 printed. Condition (4) holds the pair's first-order achromatism for axial colour and condition (5) its secondary spectrum (¶0033–0037); Example 2 gives 0.0003 and 0.0013 against limits of 0.0005 and 0.0023. Sigma's diagram marks this element SLD.

### L7 — Negative Meniscus (2x Asph)

nd = 1.69350, νd = 53.20. Glass: M-LAC130 (HOYA catalog equivalent, a precision-molding glass). f = −76.31 mm.

The whole focusing group G2: a thin negative meniscus convex to the object, aspheric on both faces. The meniscus form lowers the marginal-ray incidence on its front face and so the spherical aberration G2 generates (¶0056); a single lens keeps the moving mass low for fast, precise focusing (¶0057).

### L8 — Biconvex Positive (2x Asph)

nd = 1.77250, νd = 49.50. Glass: M-TAF105 (HOYA catalog equivalent, a precision-molding glass). f = +31.37 mm.

The positive power of G3, aspheric on both faces, with a nearly flat front (R = 189.96 mm) and a strong rear curve.

### L9 — Negative Meniscus

nd = 1.59270, νd = 35.45. Glass: FF5 (HOYA catalog equivalent). f = −67.91 mm.

A negative meniscus convex to the object. Its rear face (R = 25.60 mm) and the front face of L10 (R = −21.23 mm) bound a biconvex air space that closes to contact near 11.6 mm height.

### L10 — Negative Meniscus

nd = 1.60342, νd = 38.01. Glass: E-F5 (HOYA catalog equivalent). f = −119.30 mm.

The last element, a weak negative meniscus concave to the object, 17.90 mm ahead of the image plane. Sigma's drawing shows this element with a nearly flat rear face, unlike the patent's R = −30.59 mm.

## Glass Identification and Selection

The patent prints d-line indices (587.56 nm) and Abbe numbers. Every pair matches a HOYA catalog glass to the printed precision; these names are catalog equivalents, not a production supplier identification. The two moldable types (M-TAF105 and M-LAC130) sit on the three aspherical elements, and FCD515 at L6 is the SLD position in Sigma's diagram. L2's TAFD65 is the high-dispersion glass the patent requires to have anomalous partial dispersion (condition (10)). The patent prints θgF for the C1 pair and ΔPgF for L2 by its own normal line (ΔPgF = θgF + 0.0018·νd − 0.64833); the data file restates them against the Schott normal line (θgF = 0.6438 − 0.001682·νd).

| Element  | Glass (HOYA equivalent) | nd      | νd    | Printed partial dispersion | Role                      |
| -------- | ----------------------- | ------- | ----- | -------------------------- | ------------------------- |
| L1       | E-C3                    | 1.51823 | 58.96 | —                          | Front negative            |
| L2       | TAFD65                  | 2.05090 | 26.94 | ΔPgF 0.0053                | Lateral-colour positive   |
| L3, L9   | FF5                     | 1.59270 | 35.45 | —                          | Negative flints           |
| L4, L8   | M-TAF105                | 1.77250 | 49.50 | —                          | Molded aspheric positives |
| L5       | NBFD29                  | 1.77047 | 29.74 | θgF 0.5951                 | C1 negative               |
| L6       | FCD515                  | 1.59282 | 68.62 | θgF 0.5440                 | C1 positive, SLD          |
| L7       | M-LAC130                | 1.69350 | 53.20 | —                          | Molded aspheric focus     |
| L10      | E-F5                    | 1.60342 | 38.01 | —                          | Rear negative             |

## Focus Mechanism

Inner focus: G2 (L7) moves 1.0246 mm toward the image for close focus while G1, the stop and G3 stay fixed relative to the image plane (claim 1). The patent prints two states.

| Interval              | Infinity   | Printed close state (1517 mm) |
| --------------------- | ---------- | ----------------------------- |
| d0 (object to S1)     | ∞          | 1438.33 mm                    |
| d12 (stop to L7)      | 3.0000 mm  | 4.0246 mm                     |
| d14 (L7 to L8)        | 13.3214 mm | 12.2968 mm                    |
| BF                    | 17.8981 mm | 17.8981 mm                    |

The close state sits 1438.33 mm in front of the first surface; with the 79.1482 mm track that is 1517.48 mm object to image, which the patent heads as 1517 mm. Magnification there is −0.0250, and the patent's close-state plots (Fig. 8) are labelled F2.09 and ω = 31.20°; the model's paraxial working f-number at that state is 2.09. Sigma's retail minimum focus is 0.27 m (1:5.7), much closer than the patent prints, so the model stops at the printed state. Positions between the two states use linear gap interpolation, not a patent cam.

## Aspherical Surfaces

Six surfaces are aspherical: both faces of L4 (7, 8), L7 (13, 14) and L8 (15, 16). The patent uses $z=(h^2/R)/(1+\sqrt{1-(1+K)(h/R)^2})+\sum A_n h^n$, the standard form in which K = 0 is a sphere; every face has K = 0, and the coefficients are copied unchanged.

| Source face | K   | A4           | A6           | A8           | A10          | A12          | A14         |
| ----------- | --- | ------------ | ------------ | ------------ | ------------ | ------------ | ----------- |
| 7           | 0   | -6.95250E-06 | -4.10290E-09 | 1.17900E-10  | -3.69840E-13 | 0            | 0           |
| 8           | 0   | 2.90950E-06  | -6.07080E-09 | 9.19730E-11  | -2.76620E-13 | 0            | 0           |
| 13          | 0   | 2.84270E-05  | -1.44570E-07 | -9.08680E-11 | 0            | 0            | 0           |
| 14          | 0   | 3.48940E-05  | -1.15340E-07 | -1.09740E-09 | 2.18750E-11  | -2.25530E-13 | 8.20780E-16 |
| 15          | 0   | -7.91560E-06 | 1.45400E-08  | -2.33200E-11 | 0            | 0            | 0           |
| 16          | 0   | 1.14300E-06  | 1.85070E-10  | -1.55070E-11 | 0            | 0            | 0           |

The patent prints coefficients through A14 for every face, with zeros where a term is unused. Departures from the base sphere at the model's semi-diameters are below; the G2 faces carry the largest A4 terms and the largest departure on face 14. Sigma describes all three aspherical elements as glass-molded.

| Face | Semi-diameter (mm) | Departure (µm) |
| ---- | ------------------ | -------------- |
| 7    | 13.8            | -218.051       |
| 8    | 13.8            | 115.274        |
| 13   | 10.6            | 139.326        |
| 14   | 10.6            | 225.516        |
| 15   | 12.4            | -147.320       |
| 16   | 12.4            | 19.028         |

## Clear Apertures, Stop and Geometry

The patent prints no clear apertures. The model's semi-diameters follow the element proportions of Fig. 6; the L1 rear face has a 13.8 mm optical zone and the drawn land out to 16.5 mm. The stop position is printed, and its radius (10.14 mm) is set by the design F/2.07.

The rear pair limits the corner. L9's rear face and L10's front face meet at 11.65 mm height, so both optical faces end at 11.5 mm. Beyond them the flat lands Fig. 6 draws carry L9 out to its 12.5 mm edge and L10 out to 13.4 mm, where L10's rear face also ends; L9's front face runs to 12.5 mm. The upper half of the wide-open beam at 90–100% field is cut at surface 19, and the chief ray to the 21.63 mm corner crosses it at 10.62 mm.

| Faces        | Semi-diameter (mm) |
| ------------ | ------------------ |
| 1            | 16.5               |
| 2            | 13.8 (land 16.5)   |
| 3, 4         | 14.5               |
| 5, 6         | 13.5               |
| 7A, 8A       | 13.8               |
| 9–11         | 13.1               |
| STO          | 10.14 (F/2.07)     |
| 13A, 14A     | 10.6               |
| 15A, 16A     | 12.4               |
| 17           | 12.5               |
| 18           | 11.5 (land 12.5)   |
| 19           | 11.5 (land 13.4)   |
| 20           | 13.4               |

## Model Scope and Limitations

The model gives EFL = 35.993 mm against the patent's 35.99 mm, and a paraxial back focus 0.0005 mm longer than the printed 17.8981 mm; the image plane stays at the printed BF. On-axis spherical aberration (−0.01 mm at full aperture), astigmatism at ω = 31.77° (sagittal −0.14 mm, meridional −0.34 mm) and distortion (−2.95%) agree with the patent's Fig. 7. Near the axis the C and g lines focus about 0.04 and 0.03 mm behind the d line, as Fig. 7 plots them to within its 0.01 mm reading.

The corner vignetting comes from the inferred rims. Geometric corner illumination at f/2.07 is about 53% at infinity and 55% at the printed close state. At full field the meridional beam reaches the same upper limit as the patent's Fig. 9 fans (+0.25 of the pupil radius); at 50–90% field and on the lower side it is a little wider than the fans. The fan ends point to clear radii of about 10.6 mm at surface 15 and 12.5 mm at surface 8, inside the 12.1 mm and 13.8 mm that Fig. 6 draws there; the model keeps the drawn sizes. The production lens's rims, and the detail differences between the patent and Sigma's drawing, are not known.

## Sources

- [JP 2021-165807 A](https://patents.google.com/patent/JP2021165807A/en): Example 2 prescription, focus and asphere tables, conditional values, Figs. 6–10.
- [Sigma 35mm F2 DG DN | Contemporary product page](https://www.sigma-global.com/en/lenses/c020_35_2/): construction (10 elements / 9 groups, 1 SLD, 3 aspherical), angle of view, minimum focus and the construction diagram.
- [Sigma announcement, 1 December 2020](https://www.sigma-global.com/en/news/2020/12/01/10959/): release and glass-molded aspherical elements.
