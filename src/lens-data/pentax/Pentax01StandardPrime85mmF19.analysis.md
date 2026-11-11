## Patent Reference and Design Identification

**Patent:** US 2012/0268834 A1  
**Application Number:** US 13/450,767  
**Filed:** April 19, 2012  
**Published:** October 25, 2012  
**Priority:** April 22, 2011, JP 2011-095966  
**Inventor:** Yoichi Nomura  
**Assignee:** Pentax Ricoh Imaging Company, Ltd.  
**Title:** Photographing lens system  
**Example details:** Tables 1–3, Fig. 1; millimetres as printed, no scaling.

The application was granted as US 8,970,968 B2 on March 3, 2015, with the same Numerical Embodiment 1 tables. The [complete patent](https://patentimages.storage.googleapis.com/d1/a3/13/8a6db002de4037/US20120268834A1.pdf) supplies the prescription. Numerical Embodiment 1 is taken as the optics of the PENTAX-01 STANDARD PRIME, the standard lens of the Pentax Q system, released on August 31, 2011. The correlation is not a factory prescription; it rests on converging evidence:

1. **Focal length and aperture.** The embodiment is f = 8.5 mm at F1.9, the production lens's marketed values.
2. **Construction.** The [2011 announcement](https://www.ricoh-imaging.co.jp/japan/news/2011/201109.html) and the [product page](https://www.ricoh-imaging.co.jp/english/products/lens/q/high-performance/01-standard-prime/) give 8 elements in 5 groups with two aspherical elements. The patent has eight elements in five groups — a negative singlet, three cemented pairs and a positive singlet — with three aspheric surfaces on two elements.
3. **Construction drawing.** The [Impress launch report](https://dc.watch.impress.co.jp/docs/news/455172.html) reproduces the lens construction drawing: a flat-fronted negative first element, two cemented pairs, an air space, then a cemented pair and a biconvex singlet, with aspherical (AL) marks on the rear element of that pair and on the last element. This is the layout of Fig. 1.
4. **Format and timing.** The patent's image height Y = 4.65 mm is the half-diagonal of the 1/1.7-inch Q-mount format, and the Japanese priority date precedes the launch by four months.

All nine numerical embodiments share this layout, focal length, aperture and image height; they differ in curvatures and glass, so the patent does not single one out. Embodiment 1, the lead example, is used.

The printed half-field W = 30.8° belongs to Y = 4.65 mm: a real chief ray traced at 30.8° lands at 4.649 mm, so the printed angle includes the design's barrel distortion (about −8 % against f·tan ω at that height). Ricoh quotes 58° for the 1/1.7-inch Q7 and Q-S1 and 49.5° for the 1/2.3-inch Q and Q10; these are nominal angles for each sensor and do not conflict with the patent. Table 3 gives F1.9, while the aberration plots are labelled F1.93; the model uses F1.9.

## Optical Architecture

The design is a compact positive–positive lens with a central stop. The front group GF (f = 15.96 mm) holds a negative meniscus L1 and two positive cemented pairs, C1 (L2 + L3) and C2 (L4 + L5). The rear group GR (f = 11.12 mm) holds the negative cemented pair C3 (L6 + L7) and the biconvex aspheric singlet L8. The stop sits 13.457 mm behind the first vertex, between C2 and C3. Eight elements form five air-separated groups.

L1 gives the back focus a mirrorless body needs, so that dust on L8 stays out of focus (¶0069). The relatively thick positive elements L3 and L4 correct the barrel distortion that L1 introduces (¶0059). Focusing with L8 alone keeps the moving group small and light (¶0074).

The camera body's optical filter OP (0.55 mm) and cover glass CG (0.50 mm), both nd 1.51680 / νd 64.2, sit behind L8. They are traced as rear plates with their printed gaps (4.194 mm to OP, 2.02 mm between the plates, 0.53 mm to the image), and they are neither drawn nor counted as lens elements. The printed dB = 0.53 mm is the gap after the cover glass: the d values plus dB sum to 31.298 mm, the printed L = 31.30 mm, although ¶0057 defines back focus from the last lens surface. L8's rear vertex is 7.794 mm from the image through the plates. The model's EFL is 8.5007 mm and its paraxial back focus behind the cover glass is 0.5299 mm, so no refocusing is applied.

Semi-diameters are not printed. They were estimated from Fig. 1, scaled on the drawn 30.768 mm from the first surface to the rear face of the cover glass, and checked against the real-ray beam. As in the figure, the concave rear face of L1 and the concave front face of L6 end short of their element edges in flat lands; the L6 cap, drawn at about 2.4 mm, is modelled at 2.5 mm, where it trims the oblique beams only slightly. The iris radius follows from F1.9. With these rims the beam at the 1/1.7-inch corner is strongly vignetted at full aperture: about 29 % of the axial light reaches it.

## Element-by-Element Analysis

Focal lengths are for each element alone in air; the cemented pairs are C1 f = +20.0 mm, C2 f = +18.0 mm and C3 f = −37.4 mm. Roles follow the patent's description.

| Element | nd | νd | Glass | f (mm) | Form and role |
| --- | ---: | ---: | --- | ---: | --- |
| L1 | 1.51680 | 64.2 | BSC7 (Hoya) | −11.5 | Negative meniscus with a nearly flat front (R1 = 1072.6 mm); secures the back focus (¶0057, ¶0069) |
| L2 | 1.59551 | 39.2 | E-F8 (Hoya) | −9.0 | Biconcave negative of C1; its concave front face corrects astigmatism (¶0060) |
| L3 | 1.88300 | 40.8 | TAFD30 (Hoya) | +6.7 | Thick biconvex positive of C1; corrects spherical aberration and coma (¶0060) and, with L4, the distortion of L1 (¶0059) |
| L4 | 1.77250 | 49.6 | TAF1 (Hoya) | +8.8 | Thick biconvex positive of C2 |
| L5 | 1.58144 | 40.9 | E-FL5 (Hoya) | −15.1 | Biconcave negative of C2, concave toward the stop |
| L6 | 1.76182 | 26.6 | FD140 (Hoya) | −4.7 | Biconcave negative of C3; generates negative spherical aberration with little effect off axis (¶0061) |
| L7 | 1.75501 | 51.2 | M-TAC60 (Hoya) | +6.5 | Biconvex positive of C3 with an aspheric rear face; suppresses spherical aberration and coma (¶0061–¶0062) |
| L8 | 1.80610 | 40.7 | M-NBFD130 (Hoya) | +11.0 | Biconvex positive with two aspheric faces; the focusing element (¶0055) |

## Glass Identification

The patent prints helium d-line indices and Abbe numbers (¶0085). All eight pairs match Hoya catalog rows at the printed precision: BSC7, E-F8, TAFD30, TAF1, E-FL5, FD140, M-TAC60 and M-NBFD130. Pentax belonged to Hoya when the design was filed in Japan, but the production melts are not documented; Ohara's S-TIM8, S-LAH58, S-LAH66 and S-TIH14 also match four of the pairs within that precision. The moldable M-NBFD130 row is used for the double-aspheric L8 on the inference that it is a glass-molded asphere; NBFD13 has the same coordinates. L7 (1.75501 / 51.2), whose rear face is aspheric, matches only HOYA's moldable M-TAC60 (1.75501 / 51.16), a glass since discontinued. The two camera plates use the BSC7 row. No partial-dispersion data are printed.

The chromatic correction is set by two conditions. Condition (3), |νd6 − νd7| > 20, pairs the dense flint L6 (νd 26.6) with L7 (νd 51.2) in C3 to remove color the front group leaves (¶0072); the difference is 24.6. Condition (4), νd8 > 40, keeps the focusing element's dispersion low so that axial and lateral color change little through focus (¶0079); L8 has νd 40.7.

## Focus Mechanism

L8 alone advances toward the object to focus from infinity to near distances (¶0055), an internal rear-focus arrangement chosen so that the focusing group is small and light for fast autofocus (¶0074). The patent prints only the infinity state and no focus travel, so the model is fixed at infinity, with the 0.53 mm gap behind the cover glass. Ricoh gives a 0.2 m minimum focus distance and about 0.05× maximum magnification.

## Aspherical Surfaces

Surface 12 (the rear face of L7) and surfaces 13 and 14 (both faces of L8) are aspheric: three surfaces on two elements, matching Ricoh's two aspherical elements. The patent's sag equation (¶0086) is x = cy²/(1 + [1 − (1 + K)c²y²]^½) + A4y⁴ + A6y⁶ + A8y⁸ + …, so its K is the standard conic constant. K = 0 on all three surfaces, and only A4–A8 are printed; higher orders are zero.

| Surface | A4 | A6 | A8 |
| --- | ---: | ---: | ---: |
| 12 | 5.422E−05 | 9.393E−06 | 1.579E−08 |
| 13 | −2.804E−04 | 1.077E−06 | 5.386E−08 |
| 14 | −1.145E−04 | −3.647E−06 | 1.262E−07 |

On surface 12 (R = −11.214 mm) the positive A4 flattens the rear face toward the rim, so its positive power falls off with height, as ¶0062 describes. On L8 the larger negative A4 of surface 13 weakens the front face toward the rim, and surface 14 only partly offsets it, so the element as a whole loses positive power toward the rim (¶0078). The patent does not say how either element is made.

## Conditional Expressions

| Condition | Expression | Printed (Embodiment 1) | Model |
| --- | --- | ---: | ---: |
| (1) | 0.35 < fF/fR < 1.5 | 1.44 | 1.436 |
| (2) | −1.4 < fL1/f < −0.9 | −1.35 | −1.350 |
| (3) | \|νd6 − νd7\| > 20 | 24.6 | 24.6 |
| (4) | νd8 > 40 | 40.7 | 40.7 |

## Sources

- US 2012/0268834 A1 and its grant US 8,970,968 B2 ([Google Patents](https://patents.google.com/patent/US8970968B2/en)).
- Ricoh Imaging, [PENTAX Q announcement, June 23, 2011](https://www.ricoh-imaging.co.jp/japan/news/2011/201109.html) and [01 STANDARD PRIME product page](https://www.ricoh-imaging.co.jp/english/products/lens/q/high-performance/01-standard-prime/).
- Impress Digital Camera Watch, [launch report with the lens construction drawing](https://dc.watch.impress.co.jp/docs/news/455172.html).
