## Patent Reference and Design Identification

**Patent:** [JP 2017-223778 A](https://patents.google.com/patent/JP2017223778A/en)  
**Application Number:** JP2016-117760  
**Filed:** 14 June 2016  
**Published:** 21 December 2017  
**Inventor:** Noriyuki Ogasawara (original 小笠原典行)  
**Applicant:** Sigma Corporation  
**Title:** 防振機能を備えた変倍結像光学系 (original Japanese; translation: Variable-magnification imaging optical system with image stabilization)  
**Example details:** Example 1 (数値実施例１), pp. 13–14; Figure 1 and infinity aberration Figures 2, 5 and 8. The grant [JP 6690425 B2](https://patents.google.com/patent/JP6690425B2/en) prints identical numerical tables for all five examples and a clearer Figure 1.

**This is a related patent design for the 2017 C017 DSLR lens, not a confirmed factory prescription.** It is not the later mirrorless DG DN 100–400, which has 22 elements in 16 groups and comes from JP 2021-92636 A. The [Sigma specification page](https://www.sigma-global.com/en/lenses/c017_100_400_5_63/?tab=specification) lists Sigma SA, Canon EF and Nikon F mounts, 21 elements in 15 groups, 1.6 m minimum focus, 1:3.8 maximum magnification, a 67 mm filter, 86.4 × 182.3 mm dimensions and 1160 g (SA figures). Its [construction diagram](https://www.sigma-global.com/lenses/c017_100_400_5_63_specification_01_2.jpg) marks four SLD elements.

Example 1 is the best fit among the patent's five examples:

1. **Construction.** Sigma's 21 elements in 15 groups and six cemented pairs match Example 1. Example 4 has 20 elements.
2. **Special glass.** Sigma's SLD positions are L2, L3, L18 and L20, where Example 1 prints νd = 81.61, 81.61, 75.50 and 81.61. Examples 2 and 3 print νd = 68.62 at L18.
3. **Layout.** Sigma's diagram, measured at the wide position, fits Example 1 to 0.14 mm RMS over 32 surface positions. Examples 2, 5 and 3 fit to 0.57, 0.74 and 1.20 mm.
4. **Close focus.** Moving G4 to reach 1.6 m gives 1:3.81 at the tele position against Sigma's 1:3.8. This does not separate the examples, which give 1:3.78 to 1:3.84.
5. **Architecture and timing.** The +/−/+/+/− five-group layout, G4 focusing and G2b stabilization suit the C017, and the June 2016 filing precedes its 2017 release.

These features do not establish numerical factory identity. The printed design is 103.16–387.95 mm at **F5.15/5.92/6.50** against the marketed 100–400 mm f/5–6.3, and the model keeps the design values. The printed image height is **21.63 mm**.

## Optical Architecture

There are 21 spherical elements in 15 air-separated groups. The patent tabulates no asphere, resin layer or rear plate. Group focal lengths calculated from the d-line table, which reproduce the printed values, are:

| Unit | Surfaces        | Calculated EFL, mm | Axial role                                      |
| ---- | --------------- | -----------------: | ----------------------------------------------- |
| G1   | S1–S5           |        +160.355020 | Positive front zoom unit                        |
| G2   | S6–S15          |         -36.021304 | Fixed negative unit; G2b decentered for OS only |
| G3   | S16–S24         |         +64.437713 | Positive zoom unit, stop immediately behind     |
| G4   | S26–S32         |         +53.204238 | Positive zoom and internal-focus unit           |
| G5   | S33–S37         |         -58.909508 | Negative rear zoom unit                         |

The iris is surface 25, on the image side of G3 (¶0075), 4.10 mm behind S24, so it travels with G3; the variable gap d25 follows it. Its radius follows the printed F-number at each zoom position: the paraxial entrance pupil is 20.03 / 33.80 / 59.68 mm across at wide / middle / tele, and the stop radius is 10.53 / 10.50 / 10.51 mm. G2a (S6–S10) and G2b (S11–S15) stay fixed axially during zoom and focus (claim 2, ¶0072–0073); only G2b moves laterally for stabilization, which the model does not simulate. The printed spacings hold G2 within 0.0006 mm of one position relative to the image.

### Printed states and the derived zoom cam

| Position | Printed f, mm | Computed EFL, mm | Printed BF, mm | Paraxial BFD minus printed BF, mm |
| -------- | ------------: | ---------------: | -------------: | --------------------------------: |
| Wide     |        103.16 |     103.16548752 |        52.6388 |                      +0.000939466 |
| Middle   |        200.12 |     200.11859168 |        79.0754 |                      +0.000615706 |
| Tele     |        387.95 |     387.94926066 |        95.3018 |                      -0.003135711 |

The model keeps every printed radius, thickness, index and gap, and the printed image plane. The patent prints only these three states, and interpolating straight between them would leave about 11 mm of defocus at intermediate focal lengths, so the model needs a derived cam.

The derived cam keeps d5, d15 and BF linear between the printed positions, and keeps d25 + d32 linear so G2 holds its printed position. Only the split between d25 and d32 is solved, which moves G4 to hold paraxial infinity focus. The focal lengths between printed positions are calculated results, not a chosen schedule. This is an inferred cam, not Sigma's factory cam. The gap d25 turns once, at the printed middle position, and no other gap reverses.

The model carries 46 zoom stations, of which three are printed. Gaps interpolate linearly between stations, so the focus error peaks just short of the tele position, where G4 moves fastest: 0.022 mm at infinity and 0.038 mm in the worst focus state, against a depth of focus of ±2λN² = ±0.050 mm at F/6.5. At the stations themselves the error stays within the printed tele residual of 0.003 mm.

## Element-by-Element Analysis

The focal lengths below are in-air thick-element values calculated from each element's radii, thickness and index. They describe shape and sign, not the power of an element inside a cemented group. Roles follow the patent's text where it gives one and the element's position otherwise. Glass names denote catalog equivalents; production suppliers are not identified.

### L1 — Negative Meniscus

nd = 1.83481, νd = 42.72. Glass: TAFD5F (HOYA equivalent). f = -150.668 mm.

Front negative meniscus of G1, convex to the object (¶0070), cemented to L2 as C1. Its lower Abbe number provides the dispersion contrast against L2.

### L2 — Biconvex Positive

nd = 1.49700, νd = 81.61. Glass: FCD1 (HOYA equivalent). f = +149.279 mm.

Biconvex positive element of the C1 doublet. Sigma's diagram marks this position SLD; the patent prints nd/νd only.

### L3 — Biconvex Positive

nd = 1.49700, νd = 81.61. Glass: FCD1 (HOYA equivalent). f = +163.116 mm.

Biconvex singlet closing G1. Sigma's diagram marks this position SLD; the patent prints nd/νd only.

### L4 — Positive Meniscus

nd = 1.69895, νd = 30.05. Glass: E-FD15 (HOYA equivalent). f = +187.616 mm.

Positive meniscus forming component G2a1 at the front of the fixed second group. With the negative G2a2 behind it, it gives G2a its telephoto power arrangement, which narrows the beam reaching the stabilizing group (¶0029).

### L5 — Biconvex Positive

nd = 1.54814, νd = 45.82. Glass: E-FEL1 (HOYA equivalent). f = +161.105 mm.

Biconvex positive element of the cemented component G2a2 (C2).

### L6 — Biconcave Negative

nd = 1.83481, νd = 42.72. Glass: TAFD5F (HOYA equivalent). f = -56.714 mm.

Biconcave negative element of C2, giving G2a2 its negative power.

### L7 — Biconcave Negative

nd = 1.72916, νd = 54.67. Glass: TAC8 (HOYA equivalent). f = -99.799 mm.

Front biconcave element of the stabilizing subgroup G2b (¶0073).

### L8 — Biconcave Negative

nd = 1.72916, νd = 54.67. Glass: TAC8 (HOYA equivalent). f = -35.445 mm.

Biconcave negative element of the G2b doublet C3.

### L9 — Positive Meniscus

nd = 1.85478, νd = 24.80. Glass: S-NBH56 (OHARA equivalent). f = +69.290 mm.

High-dispersion positive meniscus of C3, convex to the object, paired with the higher-Abbe L8.

### L10 — Biconvex Positive

nd = 1.59349, νd = 67.00. Glass: PCD51 (HOYA equivalent). f = +65.574 mm.

Biconvex front element of G3. The patent places strong positive power here to turn the diverging beam from G2 toward parallel (¶0058).

### L11 — Biconvex Positive

nd = 1.59349, νd = 67.00. Glass: PCD51 (HOYA equivalent). f = +91.752 mm.

Second biconvex element of G3. Splitting the positive power across three lenses holds down negative spherical aberration (¶0058).

### L12 — Negative Meniscus

nd = 2.00100, νd = 29.13. Glass: TAFD55 (HOYA equivalent). f = -92.727 mm.

Negative meniscus, convex to the image, supplying positive spherical aberration against the positive lenses of G3 (¶0057–0058).

### L13 — Positive Meniscus

nd = 1.69895, νd = 30.05. Glass: E-FD15 (HOYA equivalent). f = +85.840 mm.

Positive meniscus of the cemented doublet C4 at the rear of G3.

### L14 — Negative Meniscus

nd = 2.00100, νd = 29.13. Glass: TAFD55 (HOYA equivalent). f = -67.236 mm.

Negative meniscus of C4, carrying the strong negative surface ahead of the stop. The patent cements it to L13 to improve assembly accuracy around that surface (¶0058).

### L15 — Positive Meniscus

nd = 1.71736, νd = 29.50. Glass: E-FD1L (HOYA equivalent). f = +109.750 mm.

Positive meniscus, convex to the image, at the front of the focusing group G4.

### L16 — Biconvex Positive

nd = 1.65844, νd = 50.85. Glass: BACED5 (HOYA equivalent). f = +40.638 mm.

Biconvex positive element of the G4 doublet C5.

### L17 — Biconcave Negative

nd = 1.95375, νd = 32.32. Glass: TAFD45 (HOYA equivalent). f = -37.492 mm.

The single negative lens of G4, with positive lenses on both sides. The patent uses it to limit the change of spherical and axial chromatic aberration during focusing (¶0125–0127).

### L18 — Biconvex Positive

nd = 1.55032, νd = 75.50. Glass: FCD705 (HOYA equivalent). f = +87.827 mm.

Biconvex rear element of G4. Sigma's diagram marks this position SLD; the patent prints nd/νd only.

### L19 — Negative Meniscus

nd = 1.95375, νd = 32.32. Glass: TAFD45 (HOYA equivalent). f = -45.138 mm.

Negative meniscus, convex to the object, at the front of the rear group G5.

### L20 — Biconcave Negative

nd = 1.49700, νd = 81.61. Glass: FCD1 (HOYA equivalent). f = -43.380 mm.

Biconcave negative element of the rear doublet C6. Sigma's diagram marks this position SLD; the patent prints nd/νd only.

### L21 — Biconvex Positive

nd = 1.73800, νd = 32.26. Glass: S-NBH53 (OHARA equivalent). f = +37.052 mm.

High-dispersion biconvex element closing C6 and the lens.

## Glass Identification and Selection

| Element |      nd |    νd | Catalog equivalent | Sigma diagram |
| ------- | ------: | ----: | ------------------ | ------------- |
| L1      | 1.83481 | 42.72 | TAFD5F (HOYA)      |               |
| L2      | 1.49700 | 81.61 | FCD1 (HOYA)        | SLD           |
| L3      | 1.49700 | 81.61 | FCD1 (HOYA)        | SLD           |
| L4      | 1.69895 | 30.05 | E-FD15 (HOYA)      |               |
| L5      | 1.54814 | 45.82 | E-FEL1 (HOYA)      |               |
| L6      | 1.83481 | 42.72 | TAFD5F (HOYA)      |               |
| L7      | 1.72916 | 54.67 | TAC8 (HOYA)        |               |
| L8      | 1.72916 | 54.67 | TAC8 (HOYA)        |               |
| L9      | 1.85478 | 24.80 | S-NBH56 (OHARA)    |               |
| L10     | 1.59349 | 67.00 | PCD51 (HOYA)       |               |
| L11     | 1.59349 | 67.00 | PCD51 (HOYA)       |               |
| L12     | 2.00100 | 29.13 | TAFD55 (HOYA)      |               |
| L13     | 1.69895 | 30.05 | E-FD15 (HOYA)      |               |
| L14     | 2.00100 | 29.13 | TAFD55 (HOYA)      |               |
| L15     | 1.71736 | 29.50 | E-FD1L (HOYA)      |               |
| L16     | 1.65844 | 50.85 | BACED5 (HOYA)      |               |
| L17     | 1.95375 | 32.32 | TAFD45 (HOYA)      |               |
| L18     | 1.55032 | 75.50 | FCD705 (HOYA)      | SLD           |
| L19     | 1.95375 | 32.32 | TAFD45 (HOYA)      |               |
| L20     | 1.49700 | 81.61 | FCD1 (HOYA)        | SLD           |
| L21     | 1.73800 | 32.26 | S-NBH53 (OHARA)    |               |

Indices and Abbe values use the d line, 587.56 nm (¶0060). The patent gives no glass names, suppliers or partial-dispersion data. Every printed nd/νd pair equals a public catalog glass to the printed precision (|Δνd| ≤ 0.01), and the pairs recur across the patent's five examples or sit beside other catalog values at the same position, so they read as catalog glass and not as optimizer-floated values. The named equivalents supply the modeled dispersion. They do not identify the production melts.

The four SLD positions on Sigma's diagram are tagged as inferred anomalous dispersion, with catalog θgF = 0.5389 for FCD1 and 0.5400 for FCD705. L10 and L11 (PCD51, θgF = 0.5366) have a high Abbe number but carry no SLD mark on Sigma's diagram. All 21 glasses resolve to catalog dispersion, so no position stays on an Abbe-number estimate, and C/d/F and photopic MTF are available at infinity focus. These results rest on the catalog equivalents, and no chromatic equivalence to Sigma's product plots is claimed.

## Focus Mechanism

Claim 3 and ¶0043 and ¶0076 state that **G4 alone (S26–S32) moves toward the object** for near focus, and Figure 1 draws the same arrow. The patent favors G4 because the beam entering it is nearly afocal, so focusing barely changes the magnification and the group's travel stays short (¶0046). The patent prints no finite-focus state. The model shortens d25 and lengthens d32 by equal amounts, leaving every other group and the image plane fixed. Sigma gives 1.6 m as the minimum focus distance, which the model reads as object to image plane. The travel below is calculated, not printed or measured:

| Zoom position | Derived G4 travel, mm | Magnification at 1.6 m |
| ------------- | --------------------: | ---------------------: |
| Wide          |              1.626635 |              −0.070487 |
| Middle        |              4.051992 |              −0.132508 |
| Tele          |             12.449161 |              −0.262167 |

The tele magnification of 1:3.81 is close to Sigma's 1:3.8, which supports this reading without proving it. The 13 focus keys sit at 0, steps of 1/8 to 1/2 and steps of 1/16 beyond, and each key focuses paraxially on its nominal object distance at every zoom station. Between stations the focus error stays within the ±0.050 mm depth given above. **Finite MTF is unavailable** because the patent publishes no finite conjugate.

## Image Stabilization

G2b (S11–S15) moves transversely for shake correction (¶0073). The model is centred only and represents no stabilization shift. The patent's Figures 4, 7 and 10 show transverse aberrations with the axis tilted 0.4° under stabilization. Figures 3, 6 and 9 show the centred state, and Figures 2, 5 and 8 show longitudinal aberrations at infinity.

## Semi-Diameters and Modeling Limits

The patent prints no clear apertures, so every semi-diameter is inferred, and none is a measured factory aperture. They are measured from the grant's Figure 1 at the wide position, the only print that keeps its glass lines, at 8.2 px/mm from the printed axial layout. The drawing is true to scale within 1 %: its arcs, stop tick and element edge widths all fit the prescription. L3 reaches 32.9 mm and L19 reaches 11.8 mm. L1 and L2 read 33.65 mm and are set to 33.4 mm, which keeps the front element inside the 67 mm filter thread. Sigma's construction diagram draws the front group 1.2 to 2 mm smaller and L19 about 2.4 mm larger. The on-axis beam stays clear of all of them at every printed position; it reaches 29.84 mm at S1 at the tele position and 8.02 mm at S33.

The figure ends seven concave faces on flat lands. At S12, S13 and S24 the land is a cut that ends the cap at 12.00, 11.59 and 11.03 mm, on the drawn land, and every traced beam clears it. S12 and S13 would cross at 12.44 mm without their lands.

At S10, S20, S34 and S35 the clear aperture itself ends at 12.2, 12.1, 10.7 and 11.7 mm, and a land carries the outline out to the element edge at 14.5, 13.0, 11.8 and 14.0 mm. These heights sit where the drawing, the on-axis beam and the patent's own ray plots agree. The on-axis beam needs 12.16 mm at S10 and 12.03 mm at S20, and the outermost rays the patent plots at the wide corner pass S34 at 10.71 mm and S35 at 11.68 mm.

Wide open at infinity, geometric transmission at the frame corner is 47 % at the wide position, 65 % at the middle position and 57 % at the tele position. The front rims set the middle and tele values: Sigma's smaller front group would give 61 % and 53 %, with the wide position unchanged. The S10 and S20 apertures also shade the field inside the corner. At the wide position transmission is 73 % at 9.7°, where it would be 82 % without them.

The patent's meridional fans in Figures 3, 6 and 9 show that the design vignettes more than this. Off axis they stop short of the full pupil, at -0.33 and +0.53 of it at the wide corner and -0.31 and +0.81 at the tele corner. Seven circular apertures reproduce every readable fan end within about 0.01 of the pupil at all three zoom positions: S3 29.95, S6 19.66, S10 12.2, S17 12.5, S27 11.28, S28 11.31 and S34 10.7 mm. S10 and S34 are the lands modeled above. The other five lie inside glass that Figure 1 draws to its full edge with no land, so the model leaves them out. With all seven, corner transmission would be 37 %, 50 % and 46 %, so the modeled corners are an upper bound on the printed design.

The model keeps the printed image plane at every printed position, and it does not refit best focus. The stabilizer stays centred, and the intermediate zoom and all finite-focus positions are derived.

## Sources

- [Sigma C017 specifications](https://www.sigma-global.com/en/lenses/c017_100_400_5_63/?tab=specification) and [construction diagram](https://www.sigma-global.com/lenses/c017_100_400_5_63_specification_01_2.jpg).
- [Photography Blog, availability and pricing, 31 March 2017](https://www.photographyblog.com/news/sigma_100_400mm_f5_6.3_dg_os_hsm_availability_and_pricing_announced), for the count of four SLD elements and the April 2017 availability.
- [JP 2017-223778 A](https://patents.google.com/patent/JP2017223778A/en), Example 1 pp. 13–14, definitions p. 12, group motion ¶0070–0077.
- [JP 6690425 B2](https://patents.google.com/patent/JP6690425B2/en), identical numerical tables and a clearer Figure 1.
