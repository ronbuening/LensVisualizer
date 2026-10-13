## Patent Reference and Design Identification

**Patent:** US 2024/0192475 A1  
**Application Number:** US 18/532,417  
**Filed:** December 7, 2023  
**Published:** June 13, 2024  
**Priority:** December 8, 2022, JP 2022-196022  
**Inventor:** Takahiro Kitada  
**Applicant:** Panasonic Intellectual Property Management Co., Ltd.  
**Title:** Zoom Lens System, and Image Capture Device and Interchangeable Lens Unit Including the Zoom Lens System  
**Embodiment analyzed:** Example 1, Figure 1 and Tables 1–3, at infinity focus.

The prescription is correlated with the PANASONIC LUMIX S 14-28mm f/4-5.6 MACRO, model S-R1428. The patent does not name that lens, and Panasonic's product documents do not identify Example 1 as its production prescription. The attribution rests on matching construction and timing, not on a manufacturer-confirmed prescription.

1. Example 1 has fourteen elements in ten groups, as Panasonic gives for S-R1428.
2. Panasonic lists one aspherical ED lens, one aspherical lens, three ED lenses and one UHR lens, without positions. Example 1 matches that census by glass class: L9 (νd 71.7) is its only aspherical low-dispersion element, L2 is the other aspherical element, L3, L8 and L13 (νd 68.6, 81.6, 81.6) are three further low-dispersion elements, and L7 (nd 2.001) is the single very-high-index element. This is a class-level match, not a maker statement of positions.
3. The three tabulated design focal lengths, 14.5582 / 19.8039 / 26.9273 mm, span the marketed 14–28 mm range without being numerically identical to it. Their F-numbers are 4.13947 / 4.78588 / 5.68020; the marketed maximum-aperture range is F4–5.6.
4. The patent describes an internally focusing four-group zoom with G3 moving toward the image for closer objects. Panasonic documents a stepping-motor focusing system and an externally constant zoom length. Mechanical exterior length and optical first-vertex-to-image distance are different quantities.
5. The December 2022 priority precedes the January 4, 2023 UK product announcement. Chronology is corroborative and does not prove adoption of the specific embodiment.

Panasonic identifies S-R1428 as a full-frame L-Mount lens with a seven-blade circular diaphragm, 0.15 m minimum image-plane focus distance throughout zoom, maximum magnification 0.25× at wide and 0.5× at tele, a 77 mm filter thread and an approximately 89.8 mm external length. Those production values are not used to derive a near-focus configuration or to rescale the patent's dimensions. The patent's image semi-heights are 20 / 20.5 / 21 mm, short of the 21.63 mm full-frame half-diagonal. [1–4]

## Optical Architecture

The design is a negative–positive–negative–negative zoom of four moving groups. G1 contains three negative elements followed by one positive element; G2 contains two cemented doublets, a positive element aspherical on both faces and a weak positive meniscus. G3 and G4 are each a cemented positive/negative doublet. The aperture stop lies between G1 and G2 and travels with G2. The grouping and shapes follow ¶¶0033–0044 and Figure 1. [1]

“Four groups” and “ten groups” count different things: four zoom groups that each move as a unit, and ten air-separated groups in the usual catalog sense. The patent prints a 0.01 mm adhesive layer inside each cemented doublet, and the model keeps the four layers as printed, so the data file has eighteen element entries for fourteen lens elements. The camera-side cover plate is traced separately and is not a lens element.

| Zoom group | Elements | Group focal length in air, mm | Function                                   |
| ---------- | -------- | ----------------------------: | ------------------------------------------ |
| G1         | L1–L4    |                    -24.256973 | Negative leading group                     |
| G2         | L5–L10   |                    +20.081468 | Positive central group, following the stop |
| G3         | L11–L12  |                    -36.297875 | Negative internal-focus group              |
| G4         | L13–L14  |                   -217.229794 | Weak negative rear group                   |

Each focal length is that of the whole group in air, including its internal spacings and cement layers.

The negative leading group and long back focal distance make this a retrofocus design at all three printed stations. The paraxial back focal distances of the lens alone, before the camera-side plate, are 15.810560 / 22.332150 / 32.693224 mm, each longer than the corresponding focal length. The distances from the last lens vertex to the image plane in the table are longer still because they include the cover plate. “Tele” below means the long end of the zoom; the lens is not a telephoto design.

| Infinity station | Calculated EFL, mm | First vertex → image, mm | Last lens → image, mm | Printed image semi-height, mm |
| ---------------- | -----------------: | -----------------------: | --------------------: | ----------------------------: |
| Wide             |          14.557763 |                108.22938 |              16.52728 |                          20.0 |
| Middle           |          19.803204 |                104.63759 |              23.04939 |                          20.5 |
| Tele             |          26.926096 |                106.86514 |              33.41134 |                          21.0 |

Measured from the fixed image plane, G1 first moves toward the image and then reverses toward the object across the tabulated stations, while G2, G3 and G4 move toward the object. The G3–G4 separation and the space behind G4 both grow toward the long end. [1, ¶0045 and Table 3A]

The three printed configurations are used as they stand, and the gaps between them are interpolated linearly. Paragraph 0027 states that the connecting lines in the figure are not the actual group movement, so the patent supplies no continuous zoom cam. The interpolated model and its focus error are discussed below.

## Element-by-Element Analysis

The focal lengths on the first lines are thick-lens values for each element alone in air; Table 3B of the patent prints the same values rounded. Element shapes follow ¶¶0041–0044. A glass label names catalog glasses whose nd and νd match the printed pair (“coordinate candidates”); it does not establish the supplier. [1]

### L1 — Negative Meniscus, convex to object

nd = 1.80420, νd = 46.5. Glass: N-LASF44 (SCHOTT; HOYA TAF3D shares the coordinate; supplier unconfirmed). f = -31.5453 mm.

L1 is the first negative meniscus of G1, convex toward the object, and is followed by a 5.1 mm air space before L2. It corresponds to the patent's G1L1.

Figure 1 draws L1 with a stepped rim, so its front and rear clear radii are estimated separately, at 21.0 and 15.2 mm. The rear surface, R = 16.087 mm, is drawn almost to a hemisphere: at 15.2 mm its rim angle is 70.9° and its edge meets the front rim of L2. The flat shoulder outside that radius is a mounting surface, not clear aperture. [1, ¶¶0035, 0041]

### L2 — Negative Meniscus (2× Asph), convex to object

nd = 1.53380, νd = 55.6. Glass: Unmatched (Panasonic moulding material 1.53380/55.6; no catalog row; line indices from US 2017/0059832 A1). f = -41.5445 mm.

L2 is the second negative meniscus of G1 and is aspherical on both faces, patent surfaces 3 and 4. It is one of the design's two aspherical elements.

Its pair nd 1.53380 / νd 55.6 has no row in the catalogs checked, so the glass stays Unmatched, but it is a real material: Examples 1, 3, 4 and 5 all print it in this position (Example 2, a different construction, prints 1.59201 / 67.0), and Panasonic uses the same pair for double-aspherical elements in two earlier patents. One of them, US 2017/0059832 A1, prints its line indices (nC 1.53100, nF 1.54060, ng 1.54600, P_g,F 0.56232, ΔPgF +0.0120 on the Schott normal line); the model carries those values for L2, on the assumption that an identical nd / νd pair from the same applicant in the same role is the same material. [11] The rear clear radius of 12.2 mm follows Figure 1, where the rear asphere ends just above the rim of L3 with 0.62 mm of air between the two faces. [1, ¶0041; Tables 1–2, 4]

### L3 — Biconcave Negative

nd = 1.59283, νd = 68.6. Glass: FCD505 (HOYA; catalog dispersion formula gives the printed nd 1.59283; supplier unconfirmed) — ED class, inferred. f = -42.1608 mm.

L3 is the biconcave negative element of G1 and the high-Abbe negative lens of condition (2). Its νd = 68.6 satisfies the principal 65–100 interval but not the narrower preferred ranges that begin at 70 and 80.

HOYA lists FCD505 at nd 1.59282, νd 68.63; its catalog dispersion formula evaluates to 1.59283 at the d line, the value the patent prints, and the same pair recurs for L3 in Example 2. FCD505 is a low-dispersion crown with positive anomalous partial dispersion (catalog P_g,F 0.5443, ΔPgF +0.0159), so L3 is tagged as one of the three ED lenses Panasonic lists. That assignment is by glass class, since Panasonic gives counts and no positions, and the catalog match does not establish the supplier. [1, ¶0035 and Tables 4, 16; 2; 5]

### L4 — Biconvex Positive

nd = 1.67196, νd = 31.5. Glass: Unmatched (patent dense-flint class; nd 1.67196, nu 31.5). f = +30.5604 mm.

L4 is the biconvex positive element at the rear of G1, separated from L3 by a 0.46 mm air space. Its positive power partly offsets the three negative elements ahead of it; the group as a whole remains negative at −24.26 mm.

The pair nd 1.67196 / νd 31.5 has no catalog row, and Example 2 prints 1.66945 / 32.4 in the same position. [1, ¶¶0035, 0041; Table 4]

### L5 — Negative Meniscus, convex to object

nd = 1.77319, νd = 49.6. Glass: Unmatched (patent high-index crown class; nd 1.77319, nu 49.6). f = -17.9554 mm.

L5 is the negative meniscus at the front of G2, 1.4 mm behind the aperture stop. With L6 it forms the first cemented doublet, D1, which has net positive power.

The patent prints the cement layer as its own 0.01 mm medium between two surfaces of equal radius, 7.3307 mm, and the model keeps it. The pair nd 1.77319 / νd 49.6 has no catalog row; Example 2 prints the catalog pair 1.77250 / 49.6 here. [1, ¶0037; Tables 1, 4]

### L6 — Biconvex Positive

nd = 1.70147, νd = 40.9. Glass: Unmatched (patent high-index flint class; nd 1.70147, nu 40.9). f = +8.5595 mm.

L6 is the strong biconvex positive rear element of D1. It outweighs the negative L5, and the doublet's focal length with the cement layer included is +15.724236 mm. Figure 1 draws L6 slightly smaller in diameter than L5, a 0.2 mm step at the joint that the model reproduces.

The pair nd 1.70147 / νd 40.9 has no catalog row; Example 2 prints the catalog pair 1.70154 / 41.1 here. [1, ¶¶0037, 0042; Table 4]

### L7 — Biconcave Negative

nd = 2.00100, νd = 29.1. Glass: S-LAH99 (OHARA; coordinate equivalent; supplier unconfirmed). f = -7.9554 mm.

L7 is the biconcave negative front element of the second cemented doublet, D2, and has the highest refractive index in the design. It is cemented to the low-index, low-dispersion L8, an index step of 0.504 across the joint. In Figure 1 its rim is level with L5's and well under L8's.

OHARA S-LAH99 and S-LAH99W match the printed pair. Panasonic lists one UHR (ultra-high-refractive-index) lens without a position; L7 is the only element near nd 2.0 and is the class-level candidate. It carries no special-dispersion tag. [1, ¶¶0037, 0042; 2; 6]

### L8 — Biconvex Positive

nd = 1.49700, νd = 81.6. Glass: FCD1 (HOYA; coordinate equivalent; supplier unconfirmed) — ED class, inferred. f = +26.9948 mm.

L8 is the biconvex positive rear element of D2. Despite its positive power the doublet is net negative, with focal length −11.610671 mm. Figure 1 draws L8 with a square-cut rim that stands above L7's, so the modeled step sits at the cement layer: both L8 faces carry a clear radius of 7.0 mm and both L7 faces 5.8 mm.

HOYA FCD1 and SCHOTT N-PK52A match the printed pair. L8 is tagged as one of the three ED lenses Panasonic lists, a class-level assignment. [1, ¶¶0037, 0042; 2; 5, 7]

### L9 — Biconvex Positive (2× Asph)

nd = 1.55332, νd = 71.7. Glass: M-FCD500 (HOYA moulding glass; coordinate equivalent; supplier unconfirmed) — ED class, inferred. f = +19.0330 mm.

L9 is a biconvex positive element with aspheres on both faces, patent surfaces 18 and 19, set between two 0.2 mm air spaces behind D2 and ahead of L10.

HOYA M-FCD500, a low-dispersion glass of HOYA's moldable M- series, matches the printed pair. L9 is the only aspherical low-dispersion element in Example 1 and is tagged as the aspherical ED lens Panasonic lists; the assignment is by glass class. [1, ¶0042; Table 2; 2; 5]

### L10 — Positive Meniscus, convex to image

nd = 1.81012, νd = 21.2. Glass: Unmatched (patent dense-flint class; nd 1.81012, nu 21.2). f = +63.8398 mm.

L10 is a weak positive meniscus, convex toward the image, that completes G2 behind L9. Its high dispersion contrasts with the low-dispersion L9 ahead of it.

The pair nd 1.81012 / νd 21.2 has no catalog row; Example 2 prints 1.80827 / 21.6 here. [1, ¶¶0037, 0042; Table 4]

### L11 — Biconvex Positive

nd = 1.94595, νd = 18.0. Glass: FDS18 (HOYA; coordinate equivalent; supplier unconfirmed). f = +23.1680 mm.

L11 is the biconvex positive element of the focusing group G3, the lens the patent's conditions call LG3p. Its νd = 18.0 satisfies condition (5).

HOYA FDS18 and FDS18-W match the printed pair; the dispersion data used are those of HOYA's July 2026 catalog file. [1, ¶0038 and Table 16; 5]

### L12 — Biconcave Negative

nd = 1.92119, νd = 24.0. Glass: FDS24 (HOYA; coordinate equivalent; supplier unconfirmed). f = -13.6444 mm.

L12 is the biconcave negative rear element of G3. With L11 and the cement layer it gives the focusing group its focal length of −36.297875 mm; the doublet moves as one unit.

HOYA FDS24 matches the printed pair. [1, ¶¶0038, 0043, 0046; 5]

### L13 — Positive Meniscus, convex to image

nd = 1.49700, νd = 81.6. Glass: FCD1 (HOYA; coordinate equivalent; supplier unconfirmed) — ED class, inferred. f = +31.6590 mm.

L13 is the positive meniscus at the front of G4, convex toward the image and cemented to L14. It is the low-dispersion positive lens LG4p of condition (6).

Its printed pair repeats L8's, so the same FCD1 / N-PK52A class applies, and it is tagged as the third of the ED lenses Panasonic lists, again by glass class. [1, ¶¶0039, 0044 and Table 16; 2; 5]

### L14 — Negative Meniscus, convex to image

nd = 1.80309, νd = 35.2. Glass: Unmatched (patent dense-flint class; nd 1.80309, nu 35.2). f = -29.0072 mm.

L14 is the final negative meniscus, also convex toward the image. L13 and L14 nearly cancel, leaving G4 weakly negative at −217.229794 mm. Figure 1 draws a flange on L14 beyond the rim of L13, so its rear clear radius of 12.7 mm is larger than the 11.0 mm of the cemented face.

The air space behind G4 grows from 13.4 mm at the wide end to 30.4 mm at the long end (Table 3A). The pair nd 1.80309 / νd 35.2 has no catalog row, and Example 2 prints 1.80255 / 28.2 here. [1, ¶¶0039, 0044–0045; Tables 1, 3 and 4]

### Cement layers and camera-side plate

The four cement layers C1–C4 have nd = 1.56732, νd = 42.8 and a centre thickness of 0.01 mm. They lie inside L5–L6, L7–L8, L11–L12 and L13–L14. The patent prints them as separate media without naming the adhesive, and Example 2 prints the same pair. The model keeps them as printed; they are not counted among the fourteen lens elements. [1, Tables 1, 4]

The camera-side plane-parallel plate is 2.1 mm thick with nd = 1.51680 and νd = 64.2. It is traced as a rear plate and is not drawn or numbered as a lens element. SCHOTT N-BK7 and HOYA BSC7 match the printed pair; the patent names no material. [1, Figure 1 and Table 1; 5, 7]

## Glass Identification and Selection

The printed nd/νd pairs were compared with the current OHARA, HOYA, SCHOTT, HIKARI, CDGM and SUMITA catalogs. A catalog match fixes a glass type and its dispersion curve; it does not establish which supplier Panasonic used. [5–10]

| Element |      nd |   νd | Glass                                                                                                      | Maker class (inferred) |
| ------- | ------: | ---: | ---------------------------------------------------------------------------------------------------------- | ---------------------- |
| L1      | 1.80420 | 46.5 | N-LASF44 (SCHOTT; HOYA TAF3D shares the coordinate; supplier unconfirmed)                                  | —                      |
| L2      | 1.53380 | 55.6 | Unmatched (Panasonic moulding material 1.53380/55.6; no catalog row; line indices from US 2017/0059832 A1) | Aspherical             |
| L3      | 1.59283 | 68.6 | FCD505 (HOYA; supplier unconfirmed)                                                                        | ED                     |
| L4      | 1.67196 | 31.5 | Unmatched (patent dense-flint class; nd 1.67196, nu 31.5)                                                  | —                      |
| L5      | 1.77319 | 49.6 | Unmatched (patent high-index crown class; nd 1.77319, nu 49.6)                                             | —                      |
| L6      | 1.70147 | 40.9 | Unmatched (patent high-index flint class; nd 1.70147, nu 40.9)                                             | —                      |
| L7      | 2.00100 | 29.1 | S-LAH99 (OHARA; coordinate equivalent; supplier unconfirmed)                                               | UHR                    |
| L8      | 1.49700 | 81.6 | FCD1 (HOYA; coordinate equivalent; supplier unconfirmed)                                                   | ED                     |
| L9      | 1.55332 | 71.7 | M-FCD500 (HOYA moulding glass; coordinate equivalent; supplier unconfirmed)                                | Aspherical ED          |
| L10     | 1.81012 | 21.2 | Unmatched (patent dense-flint class; nd 1.81012, nu 21.2)                                                  | —                      |
| L11     | 1.94595 | 18.0 | FDS18 (HOYA; coordinate equivalent; supplier unconfirmed)                                                  | —                      |
| L12     | 1.92119 | 24.0 | FDS24 (HOYA; coordinate equivalent; supplier unconfirmed)                                                  | —                      |
| L13     | 1.49700 | 81.6 | FCD1 (HOYA; coordinate equivalent; supplier unconfirmed)                                                   | ED                     |
| L14     | 1.80309 | 35.2 | Unmatched (patent dense-flint class; nd 1.80309, nu 35.2)                                                  | —                      |

The low-dispersion positive elements L8, L9 and L13 are paired with higher-dispersion negative or weakly positive partners in G2 and G4. The patent separately requires a high-Abbe negative lens in G1 (condition 2, L3) and a low-Abbe positive lens in G3 (condition 5, L11). Panasonic lists one aspherical ED lens, one aspherical lens, three ED lenses and one UHR lens, without positions; by glass class Example 1 supplies exactly that census, and the last column and the special-dispersion tags in the data file follow it. The match is at class level: no maker document assigns the positions. [2]

L1, L3, L7, L8, L9, L11, L12, L13 and the rear plate resolve to catalog glasses (N-LASF44, FCD505, S-LAH99, FCD1, M-FCD500, FDS18, FDS24, FCD1 and N-BK7), and their indices away from the d line come from those glasses' catalog dispersion formulas. These are present-day catalog data, not measurements of the production melts. The stored ΔPgF values are the catalog P_g,F measured from the normal line ΔPgF = PgF − (0.6438 − 0.001682 νd): −0.008387 (L1), +0.004846 (L7), +0.032351 (L8 and L13), +0.017199 (L9), +0.041043 (L11), +0.016768 (L12) and −0.000916 (plate). FCD505's P_g,F of 0.5443 puts L3 at +0.0159 on the same line. Vendor ΔPgF columns use other reference lines and are not copied. [5–7]

Six pairs have no catalog row: L2, L4, L5, L6, L10 and L14. For five of them the patent's other examples print a different value in the same position every time — L4 1.67196 / 1.66945 / 1.67960 / 1.67179 / 1.68897, L5 1.77319 / 1.77250 / 1.77687 / 1.77468 / 1.78037, L6 1.70147 / 1.70154 / 1.69977 / 1.70096 / 1.70032, L10 1.81012 / 1.80827 / 1.79808 / 1.80859 / 1.81076 and L14 1.80309 / 1.80255 / 1.82937 / 1.80977 / 1.73051 across Examples 1–5 — and only Example 2's L5 and L6 land on catalog pairs. Those Example 1 values are therefore taken as index values optimised for this design rather than misprints of catalog glasses; the five elements stay Unmatched and, like the cement layers, are traced with a dispersion model based on the Abbe number alone. L2 is different: its pair recurs in four of the five examples and is traced with the line indices Panasonic published for it elsewhere. The d-line prescription is as printed in every case.

With five materials unidentified and a sixth known only by its line indices, the chromatic traces describe this model and are not a measurement of the production lens's colour correction.

## Focus Mechanism

Paragraph 0046 and Figure 1 identify G3, the cemented doublet L11–L12, as the internal focusing group. It moves toward the image for nearer objects, so at a given zoom setting d21 grows and d25 shrinks by the same amount. Example 1, however, tabulates only infinity-focus spacings. [1]

The model is therefore infinity-only. The focus control moves nothing, and at every zoom setting the spacings and image plane are those of the printed infinity state. Panasonic's 0.15 m minimum focus distance and 0.5× maximum magnification are product specifications; the patent prints no near-focus spacings from which to model them. [2]

The general camera-system text in ¶0162 names G4 as the group that moves for focusing. That conflicts with ¶0046, Figure 1 and claim 1, which all name G3; the description of this embodiment is followed here.

## Aspherical Surfaces

Patent surfaces 3 and 4 on L2, and 18 and 19 on L9, are aspherical. The patent's equation is

$$z(h)=\frac{h^2/R}{1+\sqrt{1-(1+K)(h/R)^2}}+\sum A_n h^n.$$

K is the standard conic constant and is used as printed. Only even orders A4–A14 are given; lengths are in millimetres and each A_n in mm^(1−n), unscaled. In the data file these surfaces are labelled 3A, 4A, 18A and 19A. [1, ¶0163 and Table 2]

| Coefficient |           3A |           4A |          18A |          19A |
| ----------- | -----------: | -----------: | -----------: | -----------: |
| K           |  9.10375E-01 | -9.49882E-01 |  0.00000E+00 |  0.00000E+00 |
| A4          |  2.25898E-05 |  6.97194E-05 | -6.56399E-05 |  6.18242E-06 |
| A6          | -4.12855E-07 | -9.89610E-07 |  2.10293E-08 | -1.38698E-07 |
| A8          |  3.68903E-09 |  1.51689E-08 |  2.51435E-09 |  9.61955E-11 |
| A10         | -2.27397E-11 | -1.43321E-10 |  2.03077E-11 | -3.43267E-11 |
| A12         |  7.14463E-14 |  6.56888E-13 |  0.00000E+00 |  4.15133E-13 |
| A14         | -9.62268E-17 | -1.20294E-15 |  0.00000E+00 |  0.00000E+00 |

At the estimated clear radii the polynomial terms contribute, relative to each surface's base conic:

| Surface | Clear radius, mm | Polynomial departure, µm | Rim angle |
| ------- | ---------------: | -----------------------: | --------: |
| 3A      |             14.8 |                 -665.861 |   42.482° |
| 4A      |             12.2 |                 +452.059 |   49.336° |
| 18A     |              8.3 |                 -216.501 |    7.435° |
| 19A     |              8.3 |                  -22.727 |   40.151° |

At the rim of 3A the polynomial reduces the sag of its positive-K conic. At 4A it adds sag to a near-parabolic conic. At 18A and 19A, K is zero and the polynomial displaces both rims toward the object relative to their spherical bases. These are the signs of the whole polynomial at the rim, not of A4 alone: on 3A and 19A the two differ.

Surface 4A reaches a clear radius of 12.2 mm, larger than its vertex radius R = 10.7692 mm. The near-parabolic conic, K = −0.949882, keeps the profile real there, where a sphere of the same vertex radius would not exist, so its +452.059 µm is a departure from the conic only. The slope of 4A peaks at 49.34° near 12.1 mm, about where Figure 1 ends the surface. Measured from spheres of the same vertex radius, the other three rims depart by +404.933 µm (3A), −216.501 µm (18A) and −22.727 µm (19A).

The patent publishes no clear apertures, so these rim values depend on the radii estimated from Figure 1. [1]

## Conditional Expressions

The six principal conditions are evaluated from the printed prescription. BFw in condition (1) is the air-equivalent back focus from the last lens surface, not the small BF entry of Table 3A, which is measured from the dummy surface behind the cover plate. [1, ¶¶0113–0147 and Table 16]

| Condition             |     Value | Allowed interval  |
| --------------------- | --------: | ----------------- |
| fw / BFw              |  0.920691 | 0.5 < value < 1.5 |
| νd of G1L3            | 68.600000 | 65 < value < 100  |
| DL1 / DL2             |  0.441176 | 0.1 < value < 0.9 |
| &#124;fG3 / fG2&#124; |  1.807531 | 0.5 < value < 2.5 |
| νd of LG3p            | 18.000000 | 14 < value < 35   |
| νd of LG4p            | 81.600000 | 65 < value < 100  |

All six hold. The patent also states narrower preferred ranges; of those, L3's νd = 68.6 falls outside the preferred 70–90 and 80–85 ranges of condition (2).

## Image Plane, Interpolated Zoom and Model Limits

The image plane is where the patent puts it. The patent closes each station with a dummy surface 32 and a small signed BF of 0.02728 / 0.03369 / −0.06036 mm. The model drops the dummy surface, holds the plate-to-image gap at 1.02728 mm and carries each station's BF difference in d29, which becomes 13.4 / 19.92211 / 30.28406 mm. The distance from the lens to the image is unchanged. The cover plate sits at most 0.08764 mm from its tabulated position, which has no effect on the image formed through a plane-parallel plate.

At the three printed stations the paraxial focus lies −0.001214 / −0.001734 / −0.002610 mm from the printed image plane, within the precision of the printed values. The iris radius that reproduces the printed F-numbers is 5.075844 / 5.075809 / 5.075763 mm; it is derived from those F-numbers, since the patent prints no stop diameter.

Between the printed stations the gaps are interpolated linearly. That is an estimate, not the production cam: in a 401-point sweep the paraxial focus error reaches −0.672669 mm about halfway between the middle and long-end stations, where the computed focal length is 23.113808 mm against an interpolated label of 23.614919 mm. The on-axis marginal ray lands up to 0.065126 mm from the axis at the image plane in the same region. Intermediate settings are not refocused, so rays drawn there do not converge exactly on the image plane.

Paragraph 0025 defines the middle focal length as √(fw·ft), which is 19.799319 mm from the printed end values, while Table 3A prints 19.8039 mm. The middle prescription computes to 19.803204 mm and so supports the table; the printed spacings and focal length are used.

The Petzval sum is +0.003625363414 mm⁻¹, taken as Σ φ/(n·n′) over every refracting surface with the cement layers included, a Petzval radius of about 276 mm. It does not by itself give the best-focus field surface, which also depends on astigmatism.

### Clear apertures

The clear radii of the lens elements are estimated from the optical curves of Figure 1 at about 0.098 mm per pixel, with mounting flanges excluded, and checked against exact on-axis and full-field chief rays at the three printed stations. The wide panel governs; the middle and long-end panels serve as a cross-check. Two cemented joints carry the small rim steps the figure draws: L6 at 5.5 mm under L5 at 5.7 mm, and L7 at 5.8 mm under L8 at 7.0 mm.

Two rims sit closer to their neighbours than the viewer's default limits allow, and the data file sets lens-specific limits for them. The rear of L1 (surface 2) is drawn to 15.2 mm, where it meets the front rim of L2; its rim angle of 70.885° is the largest in the model, against a default limit of 64.2° and a limit of 71° set here. The rear of L2 (surface 4A) is drawn to 12.2 mm, just above L3; at L3's 12.0 mm rim the two facing surfaces take up 93.2 % of their 9.083 mm axial gap, against a default limit of 90 % and a limit of 94 % set here, and 0.62 mm of air remains. Neither pair of surfaces crosses, and no element is trimmed when drawn. The stop radius is derived separately from the printed F-numbers.

No clear radius is published for the camera-side plate; it is traced as a plate wide enough not to clip any ray.

Chief rays traced at the patent's half-fields of 56.9492° / 47.4704° / 38.7833° reach image heights of 19.999895 / 20.495251 / 20.999938 mm, against the printed 20 / 20.5 / 21 mm. With these rims the chief ray to the 21.63 mm full-frame corner also clears every surface at all three stations, although the patent's own field stops short of that corner. Because the rims are estimates, the off-axis illumination of the model is indicative only.

## Sources

1. [US 2024/0192475 A1](https://patents.google.com/patent/US20240192475A1/en), Takahiro Kitada, Panasonic Intellectual Property Management Co., Ltd. Bibliography: PDF p. 1. Figure 1: PDF p. 2. Motion and figure conventions: PDF p. 15, ¶¶0025–0031. Embodiment 1: PDF p. 16, ¶¶0033–0046. Sag equation and Tables 1–2: PDF p. 24, printed p. 11. Tables 3A–D and Example 2's Table 4: PDF p. 25, printed p. 12. Table 16 and claims: PDF p. 31, printed p. 18.
2. Panasonic, [S-R1428 specifications](https://panasonic.jp/dc/products/S-R1428/spec.html), archived October 11, 2026 and viewed October 13, 2026: construction of 14 elements in 10 groups (one aspherical ED lens, one aspherical lens, three ED lenses, one UHR lens), seven-blade circular diaphragm, minimum focus distance 0.15 m, maximum magnification 0.5×; also mount, format and dimensions.
3. Panasonic, [S-R1428 product description](https://panasonic.jp/dc/products/S-R1428.html?select-mode=1), archived October 11, 2026; optical construction, internal mechanisms and focusing drive.
4. Panasonic UK, [product announcement, January 4, 2023](https://www.panasonic.com/uk/corporate/news/articles/panasonic-introduces-lumix-s-14-28mm-f4-5-6-macro-s-r1428-a-compact-ultra-wide-angle-l-mount-zoom-lens-with-macro-capability.html); Panasonic [operating instructions DVQX2345ZA](https://help.na.panasonic.com/wp-content/uploads/2023/03/SR1428_DVQX2345ZA_ENG_FRE_ESP.pdf).
5. HOYA, [optical-glass data downloads](https://www.hoya-opticalworld.com/english/datadownload/index.html): catalog workbook of June 1, 2026 and glass-data file of July 7, 2026, the latter used for FDS18.
6. OHARA, [optical-glass catalog](https://oharacorp.com/glass-catalog/): S-glass data of April 2, 2026.
7. SCHOTT, [optical glass](https://www.schott.com/en-us/products/optical-glass): catalog data of November 13, 2025; N-LASF44, N-PK52A and N-BK7.
8. HIKARI, [optical-glass catalog](https://www.hikari-g.co.jp/optical_glass/catalog/): catalog data revised through June 1, 2025.
9. CDGM, [optical glass](https://www.cdgmgd.com/): September 2026 glass-data file.
10. SUMITA, [downloads](https://www.sumita-opt.co.jp/en/download/): glass data version 14.02.00 and glass-data file of August 21, 2026.
11. Panasonic Intellectual Property Management Co., Ltd., US 2017/0059832 A1, Table 23: nC, nF, ng and P_g,F of the nd 1.53380 / νd 55.6 material.
