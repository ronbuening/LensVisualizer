## Patent Reference and Design Identification

**Patent:** [JP 2023-167728 A](https://patents.google.com/patent/JP2023167728A/en)
**Application Number:** 特願2022-79127
**Filed:** 2022-05-13
**Published:** 2023-11-24
**Inventor:** Yuki Ueda (植田 裕輝)
**Applicant:** Sigma Corporation (株式会社シグマ)
**Title:** Optical System (光学系)
**Example details:** 実施例1 (¶0080–0083, Fig. 1); prescription table 数値実施例1 (¶0123, PDF pp. 16–18). Unscaled.

The patent describes eight wide-angle examples of one layout: a negative first group G1, a single-element negative focus group G2 that moves toward the object, and a positive third group G3 that holds the stop. Example 1 is identified with the SIGMA 20mm F1.4 DG DN | Art by these points:

1. Example 1 has 17 elements in 15 groups (two cemented doublets behind the stop), Sigma's published construction.
2. Three elements are aspheric, each on both faces: L1, L8 and L17. Sigma states three aspherical elements, among them a large front element aspheric on both faces, and its construction drawing marks the first, eighth and last elements.
3. Sigma's drawing marks two SLD elements: the last element ahead of the stop and the first behind it. In Example 1 those are L10 (nd 1.55032, νd 75.50) and L11 (nd 1.59282, νd 68.62), the two low-dispersion crowns of the design.
4. The printed design values are f = 20.33 mm, F1.46, 2ω = 96.47° and Y = 21.63 mm, a full-frame 20 mm F1.4. Sigma states a 94.5° angle of view.
5. Focus moves one negative element ahead of the stop; the product is an internally focusing mirrorless lens. The patent's close state is 226 mm from the image, against Sigma's 23 cm minimum focus.
6. The application was filed in May 2022; Sigma's year code 022 dates the lens's first release to the same year.

**Why Example 1 and not Example 3.** Sigma's section drawing shows the third element as a thin meniscus convex to the image, its convex rear nested into the concave front of the biconcave fourth element. Example 1's L3 has that shape (R = −64.18 / −42.33 mm, 1.72 mm from L4's −39.68 mm front), and so does Fig. 1. Example 3's L3 is a positive meniscus convex to the object (R = 84.35 / 265.74 mm), which the drawing does not show. Example 2 has Example 1's shapes but an aspheric front face on L1 only, against Sigma's double-sided front asphere. Examples 4, 5, 7 and 8 have 15 or 16 elements, and Example 6 cements L4 to L5 and L9 to L10, giving 13 groups.

The patent is the closest published design and matches the production construction element for element; it is not a factory prescription, and the production radii, glasses and spacings may differ.

## Optical Architecture

The design is a fast retrofocus wide-angle with group powers negative, negative, positive (¶0016, ¶0080). The patent's group focal lengths are reproduced by a paraxial trace of the table:

| Group | Surfaces | Elements | Patent f (mm) | Role |
| --- | --- | --- | ---: | --- |
| G1A | 1–4 | L1–L2 | −30.91 | Two negative menisci, convex to the object |
| G1B | 5–10 | L3–L5 | +120.72 | Weak positive sub-group; shrinks the beam for the focus group |
| G1 | 1–10 | L1–L5 | −57.92 | Fixed front group, the "wide converter" of ¶0064 |
| G2 | 11–12 | L6 | −99.66 | Focus element; moves toward the object |
| G3A | 13–20 | L7–L10 | +37.61 | Positive group ahead of the stop |
| G3B | 22–29 | L11–L15 | +27.26 | Main positive group behind the stop |
| G3C | 30–33 | L16–L17 | −47.41 | Rear negative pair enclosing the air lens K |
| G3 | 13–33 | L7–L17 | +31.86 | Fixed rear group with the stop |

The paraxial trace gives EFL 20.329 mm against the printed 20.33 mm, and a back focus of 20.379 mm against the printed BF = 20.3784 mm. The track from the first vertex to the image is 129.04 mm.

Two choices set this design apart from a classic retrofocus. First, focus is moved ahead of the stop into a single negative element (¶0019–0021), so the rear groups, which must correct the large off-axis aberrations a strong negative front group leaves, have no focus travel to accommodate. Second, the rear group ends with a negative pair, G3C, which makes the whole lens closer to symmetric and pushes the exit pupil toward the image (¶0025–0026). The two G3C elements leave between them a biconvex air lens K whose image-side face carries the aspheric correction of field curvature, distortion and sagittal flare (¶0031–0033).

## Element-by-Element Analysis

### G1A — L1 and L2

**L1 — Negative meniscus, aspheric on both faces.** nd = 1.69350, νd = 53.18. Glass: L-LAL13 (OHARA), a moldable lanthanum crown. f = −58.4 mm.

The largest element of the lens. Both faces are aspheric; the front face's sag grows faster than its 161.79 mm base sphere toward the rim, and the paraboloidal rear face (K = −1) falls behind its sphere, so L1's negative power weakens toward the edge. ¶0064 assigns the negative menisci of G1A the job of holding down distortion and astigmatism, and says an asphere in G1A strengthens that correction. Fig. 1 and Sigma's drawing show the rear face ending well inside a stepped flange.

**L2 — Negative meniscus.** nd = 1.77250, νd = 49.62. Glass: TAF1 (HOYA). f = −72.6 mm.

The second front meniscus. Condition (11) asks for a high mean index in G1A, 1.73 here, so that two menisci suffice; ¶0074 says lower indices would bulge the astigmatism at mid-field or need a third meniscus.

### G1B — L3, L4 and L5

**L3 — Positive meniscus, convex to the image.** nd = 2.00100, νd = 29.13. Glass: TAFD55 (HOYA). f = +115.5 mm.

A thin, weak meniscus in the highest-index glass of the lens. ¶0065 places a positive lens first in G1B so that the elements behind it, including the focus group, can stay small. Its convex rear face nests 1.72 mm from the concave front of L4, the arrangement that identifies Example 1 on Sigma's drawing.

**L4 — Biconcave negative.** nd = 1.71700, νd = 47.98. Glass: LAF3 (HOYA). f = −44.0 mm.

The only negative element of G1B, sitting between the two TAFD55 positives.

**L5 — Biconvex positive.** nd = 2.00100, νd = 29.13. Glass: TAFD55 (HOYA). f = +45.7 mm.

The strongest element of G1B; it ends the fixed front group and converges the beam onto the focus element.

### G2 — L6

**L6 — Negative meniscus, convex to the image.** nd = 1.51680, νd = 64.20. Glass: BSC7 (HOYA). f = −99.7 mm.

The whole focus group is this one 1 mm-thick crown meniscus; ¶0076–0078 give a focus group of at most two elements, and preferably one, as the means to a light focusing mass. Because a negative group ahead of the stop moves toward the object, distortion grows more negative toward close focus (¶0020). ¶0021 prefers this arrangement to a positive group moving toward the image, which would sit further forward at infinity and need a larger diameter to keep the corners illuminated.

### G3A — L7 to L10

**L7 — Positive meniscus, convex to the object.** nd = 1.95375, νd = 32.32. Glass: TAFD45L (HOYA). f = +43.8 mm.

First converging element of the rear group.

**L8 — Biconvex positive, aspheric on both faces.** nd = 1.69350, νd = 53.20. Glass: M-LAC130 (HOYA), a moldable lanthanum crown. f = +63.6 mm.

Both aspheric faces flatten toward the rim, so the element's positive power falls off at the edge of the wide-open beam. This reading of the coefficients as spherical-aberration correction is the author's; the patent does not single out L8.

**L9 — Negative meniscus, convex to the object.** nd = 1.86966, νd = 20.02. Glass: FDS20-W (HOYA). f = −53.9 mm.

The dense flint of G3A, with high partial dispersion (PgF 0.6433).

**L10 — Positive meniscus, convex to the image (SLD).** nd = 1.55032, νd = 75.50. Glass: FCD705 (HOYA). f = +157.1 mm.

A weak low-dispersion crown just ahead of the stop. Its printed PgF of 0.5399 lies 0.027 above the patent's normal line, and Sigma marks this position as SLD glass.

### G3B — L11 to L15

**L11 + L12 — Cemented doublet.**

- **L11 — Positive meniscus, concave to the object (SLD).** nd = 1.59282, νd = 68.62. Glass: FCD515 (HOYA). f = +33.1 mm.
- **L12 — Negative meniscus.** nd = 1.85451, νd = 25.15. Glass: NBFD25 (HOYA). f = −22.8 mm.

The first element behind the stop is the second SLD element. The junction, R = −18.34 mm, is the most strongly curved surface in the lens and pairs a low-dispersion, positive-anomaly crown with a dense flint. ¶0037 and ¶0052 explain the patent's choice: positive lenses behind the stop in low-dispersion, high-anomaly glass correct axial and lateral color together, while the negatives take high-dispersion, low-anomaly glass (¶0058).

**L13 + L14 — Cemented doublet.**

- **L13 — Negative meniscus, convex to the object.** nd = 1.85451, νd = 25.15. Glass: NBFD25 (HOYA). f = −36.7 mm.
- **L14 — Biconvex positive.** nd = 1.75500, νd = 52.32. Glass: TAC6 (HOYA). f = +24.4 mm.

L14 is the strongest single positive element of the lens. Its junction (R = +20.63 mm) curves opposite to the first doublet's (R = −18.34 mm), so the two strongly curved cemented faces sit nearly symmetrically about the 0.15 mm gap between the doublets.

**L15 — Biconvex positive.** nd = 1.92286, νd = 20.88. Glass: E-FDS1 (HOYA). f = +28.9 mm.

The last element of G3B, and the subject of conditions (3) and (4): a positive lens with nd above 1.75 and positive anomalous partial dispersion (1.92 and +0.028 here). ¶0038–0039 explain that a high-index, high-anomaly positive at this position, where off-axis rays pass far from the axis, corrects lateral color and color flare without the field-curvature penalty of the usual low-index ED crowns.

### G3C — L16 and L17

**L16 — Negative meniscus, convex to the object.** nd = 1.54814, νd = 45.82. Glass: E-FEL1 (HOYA). f = −90.4 mm.

Its concave rear face (R = 28.74 mm) is the object side of the air lens K. ¶0032 describes that face as aplanatic, contributing little spherical aberration or sagittal flare, while it bends the upper off-axis rays strongly.

**L17 — Biconcave negative, aspheric on both faces.** nd = 1.80610, νd = 40.73. Glass: M-NBFD130 (HOYA), a moldable lanthanum flint. f = −104.9 mm.

The rear field element. Its front face is the image side of K, the surface ¶0033 prefers for the G3C asphere; both faces deepen toward the rim, so the element's negative power rises toward the edge as ¶0024 requires, correcting field curvature, distortion and sagittal flare without another element.

## Glass Identification / Selection

The patent prints nd, νd and PgF for every glass but names no supplier. Each pair below matches the named catalog glass in nd and νd, and in PgF within 0.0002, so the identifications are firm on optical coordinates; the production supplier is not established. ΔPgF is the patent's own deviation, PgF − (0.64833 − 0.00180·νd) (¶0013).

| Glass | nd | νd | PgF | ΔPgF | Elements | Role |
| --- | ---: | ---: | ---: | ---: | --- | --- |
| L-LAL13 (OHARA) | 1.69350 | 53.18 | 0.5482 | −0.004 | L1 | Molded front asphere |
| TAF1 (HOYA) | 1.77250 | 49.62 | 0.5503 | −0.009 | L2 | Front meniscus |
| TAFD55 (HOYA) | 2.00100 | 29.13 | 0.5994 | +0.004 | L3, L5 | High-index positives of G1B |
| LAF3 (HOYA) | 1.71700 | 47.98 | 0.5556 | −0.006 | L4 | G1B negative |
| BSC7 (HOYA) | 1.51680 | 64.20 | 0.5342 | +0.001 | L6 | Focus element |
| TAFD45L (HOYA) | 1.95375 | 32.32 | 0.5900 | −0.000 | L7 | G3A positive |
| M-LAC130 (HOYA) | 1.69350 | 53.20 | 0.5465 | −0.006 | L8 | Molded G3A asphere |
| FDS20-W (HOYA) | 1.86966 | 20.02 | 0.6433 | +0.031 | L9 | G3A flint |
| FCD705 (HOYA) | 1.55032 | 75.50 | 0.5399 | +0.027 | L10 | SLD crown ahead of the stop |
| FCD515 (HOYA) | 1.59282 | 68.62 | 0.5440 | +0.019 | L11 | SLD crown behind the stop |
| NBFD25 (HOYA) | 1.85451 | 25.15 | 0.6102 | +0.007 | L12, L13 | G3B flints |
| TAC6 (HOYA) | 1.75500 | 52.32 | 0.5472 | −0.007 | L14 | Main G3B positive |
| E-FDS1 (HOYA) | 1.92286 | 20.88 | 0.6388 | +0.028 | L15 | High-index, high-anomaly positive |
| E-FEL1 (HOYA) | 1.54814 | 45.82 | 0.5699 | +0.004 | L16 | G3C meniscus |
| M-NBFD130 (HOYA) | 1.80610 | 40.73 | 0.5693 | −0.006 | L17 | Molded rear asphere |

The three aspheric elements are all in moldable glasses (L-LAL13, M-LAC130, M-NBFD130), which suggests glass-molded aspheres; the patent does not state the process. Sigma's two SLD positions correspond to FCD705 and FCD515, the only fluorophosphate-class crowns in the design. Behind the stop the chromatic scheme follows conditions (6)–(9): the G3B positives average νd 47.3 with mean ΔPgF +0.013, the G3B negatives average νd 25.2 with ΔPgF +0.007. The model carries each printed PgF as `dPgF`, measured from the engine's normal line (0.6438 − 0.001682·νd) rather than the patent's line.

## Focus Mechanism

Inner focus by G2 alone. From infinity to the patent's close state L6 moves 7.5968 mm toward the object; G1, G3, the stop and the image plane do not move.

| Spacing | Infinity | 226 mm state |
| --- | ---: | ---: |
| d0 (object to surface 1) | ∞ | 97.4379 mm |
| d10 (L5 to L6) | 11.3900 mm | 3.7932 mm |
| d12 (L6 to L7) | 2.0000 mm | 9.5968 mm |
| BF | 20.3784 mm | 20.3784 mm |

The column is headed 226 mm, the object-to-image distance: 97.4379 mm plus the 129.0384 mm track is 226.48 mm. A paraxial trace of that state focuses at the same distance with magnification −0.160 (about 1:6.3) and EFL 18.49 mm. Sigma states 23 cm and 1:6.1 for the production lens; the model's focus slider ends at the patent's state, and positions between infinity and that state are interpolated linearly in the two spacings.

## Aspherical Surfaces

Six surfaces on three elements are aspheric. ¶0116–0117 define the sag as

$$
z = \frac{y^2/r}{1 + \sqrt{1 - (1+K)(y/r)^2}} + A_4 y^4 + A_6 y^6 + A_8 y^8 + A_{10} y^{10} + A_{12} y^{12} + A_{14} y^{14} + A_{16} y^{16}
$$

with the conventional $(1+K)$ conic term, so K = 0 is a sphere and K and the coefficients are used as printed. A16 is zero on every surface, and terms printed as zero are omitted below.

| Surface | Element | K | A4 | A6 | A8 | A10 | A12 | A14 |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| 1 | L1 front | 0 | 3.4261E-06 | −1.8342E-09 | 1.6244E-12 | −1.1413E-15 | 2.6109E-19 | — |
| 2 | L1 rear | −1 | 3.5765E-06 | 2.2043E-09 | −2.6363E-12 | 1.1577E-14 | −1.4151E-17 | — |
| 15 | L8 front | 0 | −6.4052E-06 | 6.1089E-09 | −2.7557E-11 | 2.2574E-13 | −6.8516E-16 | 6.5730E-19 |
| 16 | L8 rear | 0 | 1.9734E-06 | 1.1349E-08 | −5.3746E-11 | 2.2412E-13 | −4.6122E-16 | 2.1969E-19 |
| 32 | L17 front | 0 | −1.8625E-05 | −2.8534E-09 | −7.2938E-11 | 1.6668E-13 | — | — |
| 33 | L17 rear | 0 | 5.5601E-06 | 2.2982E-08 | −2.9978E-11 | −1.4588E-14 | — | — |

Departures from the vertex sphere at the model's clear radii:

- **Surface 1** (31.6 mm): +2.33 mm, the front face steepening toward the rim; much the largest asphere in the lens, consistent with Sigma's description of a large double-sided aspheric front element.
- **Surface 2** (23.5 mm): −0.21 mm from the 32.16 mm sphere. The paraboloidal base alone would fall about 1.6 mm short of the sphere there; the polynomial restores most of that.
- **Surfaces 15 and 16** (17.1 mm): −0.42 mm and +0.29 mm, both flattening L8 toward its rim.
- **Surfaces 32 and 33** (13.0 and 15.15 mm): −0.58 mm and +0.48 mm, both deepening L17's concave faces, so its negative power grows toward the edge.

## Conditional Expressions

The table values are the patent's correspondence table for Example 1 (¶0132); the trace of the prescription reproduces each.

| # | Expression | Bound | Example 1 |
| --- | --- | ---: | ---: |
| (1) | f_G3B / f_G3C | −1.50 to −0.20 | −0.58 |
| (2) | (R_Kr + R_Kf) / (R_Kr − R_Kf) | > 0.30 | 0.67 |
| (3) | nd of the last G3B positive (L15) | > 1.75 | 1.92 |
| (4) | ΔPgF of the last G3B positive (L15) | > 0.000 | 0.028 |
| (5) | f1_2 / f3 | −2.00 to −0.30 | −0.84 |
| (6) | mean ΔPgF of the G3B positives | > 0.000 | 0.013 |
| (7) | mean νd of the G3B positives | > 40.0 | 47.3 |
| (8) | mean ΔPgF of the G3B negatives | < 0.020 | 0.007 |
| (9) | mean νd of the G3B negatives | < 35.0 | 25.2 |
| (10) | f1 / f | −10.00 to −0.50 | −2.85 |
| (11) | mean nd of the G1A negatives | > 1.55 | 1.73 |

## Aperture and Clear Radii

The patent prints no iris diameter or clear apertures. The model sizes the stop from F1.46 at the printed stop position: radius 12.73 mm, entrance-pupil diameter 13.92 mm. Fig. 1 draws the stop mark beginning about 13.7 mm from the axis.

Every other radius is measured on Fig. 1, at 8.153 px/mm on a 400 dpi rendering, and reads the same above and below the axis. Where Fig. 1 ends a concave face short of the element's edge with a flat step (the rear faces of L1 and L2, the fronts of L4 and L6, the rear of L9), the model keeps the curve's end as the clear radius and draws the step out to the edge, as Sigma's drawing also shows for L1 and L2. Two radii are set by geometry rather than the drawing: L2's rear face ends at 20.2 mm, the largest value that keeps it from crowding L3 (Fig. 1 reads 20.6–21.2 mm); and Fig. 1 closes the air lens K at the rim, where the printed surfaces of L16 and L17 would cross at about 13.7 mm, so both faces end at 13.0 mm with steps out to the drawn 15.15 mm edge.

With these radii the F1.46 on-axis beam passes every surface at both focus states; the tightest margins are at the front of L6 (axial marginal ray 13.9 mm against 14.7 mm) and the rear of L9 (14.1 mm against 15.0 mm). The real chief ray reaches the 21.63 mm corner at 48.3°.

## Model Scope and Limitations

Wide open at infinity, the model's geometric transmission relative to the axis is 82 % at 28°, 67 % at 37°, 51 % at 43° and 29 % at the 48.2° corner, limited mainly by the front of L6, the L13–L14 doublet and the L16–L17 rims. The radii are drawing measurements, not manufacturer data, so the corner fall-off and any vignetting or MTF result near it describe this model rather than the production lens.

The model is Example 1 as printed: patent radii, indices and spacings, HOYA and OHARA catalog dispersion for the matched glasses, two printed focus states and a linear path between them. It does not model the production minimum focus of 23 cm, the stepped mechanical flanges beyond the drawn edges, or any production change to the published prescription.

## Sources

- [JP 2023-167728 A](https://patents.google.com/patent/JP2023167728A/en), Sigma Corporation: Example 1 description (¶0080–0083), Numerical Example 1 table, aspheric equation (¶0117), conditional-expression table (¶0132) and Fig. 1.
- [Sigma, 20mm F1.4 DG DN | Art product page](https://www.sigma-global.com/en/lenses/a022_20_14/): 17 elements in 15 groups, two SLD and three aspherical elements, 23 cm minimum focus, 1:6.1 maximum magnification, 94.5° angle of view, and the lens construction drawing.
- HOYA and OHARA optical-glass catalogs: nd, νd and PgF used for the glass identifications.
