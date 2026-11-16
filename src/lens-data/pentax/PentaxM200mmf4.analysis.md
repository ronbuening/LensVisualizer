## Patent Reference and Design Identification

**Patent:** US 4,139,264 A  
**Application Number:** 827,637  
**Filed:** 1977-08-25  
**Granted:** 1979-02-13  
**Priority:** 1976-08-26 (JP 51-101958)  
**Inventor:** Yasuo Takahashi  
**Assignee:** Asahi Kogaku Kogyo Co., Ltd.  
**Title:** Miniaturized telephoto camera lens assembly  
**Example details:** Example 2, repeated in claim 2; section in Fig. 3, aberration plots in Fig. 4. The patent is normalized to F = 100; every printed radius and spacing is multiplied by exactly 2 for f = 200 mm.

The smc Pentax-M 200mm f/4 was introduced in 1977 for the Pentax K mount as one of the compact M-series lenses. Pentax's LX manual lists it with six elements in five groups, a 12° angle of view, an automatic diaphragm closing to f/32, a 2 m minimum focus, a 52 mm filter, 63.5 × 111 mm and 400 g. Reference listings add an eight-blade diaphragm, a 0.13× maximum magnification and a built-in sliding hood; it was made until 1984.

The patent belongs to Asahi Kogaku Kogyo, the maker of Pentax cameras and lenses, so this is an in-house design; it names no product, though. Its stated aim is a telephoto of about 200 mm for a 35 mm single-lens reflex whose length from the front vertex to the image is less than 0.85 times the focal length. This page models Example 2 as a patent design probably close to the production lens, not a confirmed factory prescription. The association rests on four points:

1. Example 2 is six spherical lenses in five components, the last two cemented, which matches the retail six elements in five groups.
2. At the ×2 scale it is a 200 mm f/4, and its printed half-field of 6.2° (12.4° full) reaches 21.7 mm of image height, the 21.6 mm corner of the 35 mm frame; Pentax rounds the angle to 12°.
3. The August 1976 priority date falls shortly before the lens's 1977 introduction, alongside the other compact M-series telephotos.
4. The PhotonsToPhotos Optical Bench Hub lists Example 2 of this patent as the smc Pentax-M 200mm f/4.

The choice between the patent's two examples rests on that listing alone. Example 1 is also six elements in five groups at f/4 with a ±6.2° field; it has slightly different radii, d6, d8 and d9, and different glass in L4 (1.51874 / 64.5) and L6 (1.80518 / 25.4). Its length from S1 to S11 differs by only 0.01 at F = 100, so nothing in the retail data separates the two.

No Pentax construction diagram could be found to compare with Fig. 3. One physical check is slightly off: at the ×2 scale the front vertex lies 159.21 mm ahead of the image, 113.75 mm ahead of the 45.46 mm K-mount flange, while the retail length of 111 mm puts the front of the barrel about 156.5 mm from the film. A front vertex 2.7 mm beyond the barrel, behind which a 52 mm filter thread still has to fit, suggests that the production lens is a few percent shorter in focal length than 200 mm or differs in detail. The attribution therefore remains probable rather than confirmed.

The later SMC Pentax-A 200mm f/4, also in this catalog, is a different design of six separate elements in six groups (US 4,550,987).

## Optical Architecture

Six spherical elements in five groups form a compact telephoto: a positive front group of L1 (positive meniscus), L2 (biconcave) and L3 (positive meniscus), all closely spaced, then the long air space d6, a single weak positive meniscus L4, a second long air space d8, and a cemented rear pair of L5 (biconcave negative) and L6 (biconvex positive). The power sequence is P-N-P, P, then a negative cemented pair (−88.5 mm). There are no aspheric surfaces or cover plates.

The front group has a composite focal length of 138.1 mm (69.0 at F = 100), and the first four lenses together 110.2 mm (55.1). The negative rear pair spreads the converging beam and moves the rear principal plane well ahead of the lens: the glass runs 96.56 mm from S1 to S11, and the image plane lies 159.21 mm behind S1, 0.796 times the focal length. The claims set the length limit at 0.85 times the focal length (condition 8).

The description lists seven conditions and the claims add the eighth; Example 2 meets all of them:

| Condition | Range at F = 100 | Example 2 |
|---|---|---|
| (1) F1.2.3 | F/1.8 to F/1.2 (55.6 to 83.3) | F/1.449 = 69.0 |
| (2) F1.2.3.4 | F/2.3 to F/1.8 (43.5 to 55.6) | F/1.815 = 55.1 |
| (3) ν1, ν3 | above 58 | 64.1, 64.1 |
| (4) ν2 | below 30 | 26.6 |
| (5) ν4, n4 | ν4 above 55, n4 below 1.55 | 64.1, 1.51633 |
| (6) \|n5 − n6\| | below 0.1 | 0.00018 |
| (7) n5, n6 | above 1.65 | 1.76200, 1.76182 |
| (8) Overall length | below 0.85F (85) | 79.60 |

Conditions (3), (5) and (7) are printed as products ("58 < ν1 · ν3", "55 < ν4 · n4 < 1.55", "1.65 < n5 · n6") and are read here as bounds on each value; the text discusses them that way. The patent's recurring concern is the Petzval sum, which tends to fall as a telephoto is shortened. It describes the design as a development of Japanese Patent Application Publication No. 3417/1968, whose short fourth-lens spacing kept the Petzval sum up at the cost of astigmatism; this design instead lengthens d8 and uses a low-index fourth lens, then needs a high Abbe number there to keep the color correction (col. 2).

## Element-by-Element Analysis

### L1 — Positive Meniscus

nd = 1.51633, νd = 64.1. Glass: S-BSL7 (OHARA) equivalent, a borosilicate crown. f = +133.6 mm.

The front crown, convex to the object (R1 = 59.82 mm, R2 = 431.72 mm), and the largest element, at 25.2 mm semi-diameter. Condition (3) asks for Abbe numbers above 58 in L1 and L3: with lower values the front group's color could still be held by strengthening L2, but that lowers the Petzval sum (col. 2).

### L2 — Biconcave Negative

nd = 1.76182, νd = 26.6. Glass: FD140 (HOYA) equivalent, a dense flint. f = −162.4 mm.

The only negative element of the front group, 8.40 mm behind L1 and 0.10 mm ahead of L3 on the axis. Condition (4), ν2 < 30, lets L2 correct the color of the first three lenses with as little power as possible, which keeps it in balance with the other aberrations (col. 2).

### L3 — Positive Meniscus

nd = 1.51633, νd = 64.1. Glass: S-BSL7 (OHARA) equivalent, a borosilicate crown. f = +170.6 mm.

A crown meniscus with the stronger curve facing the object (R5 = 56.72 mm, R6 = 152.98 mm), as the claims require of L3 and L4. It completes the front group, whose composite focal length condition (1) bounds: a longer F1.2.3 shifts the burden of shortening the lens to L4 and costs astigmatism at its surfaces, and a shorter one lowers the Petzval sum and makes the front group's color hard to hold (col. 2).

### L4 — Positive Meniscus

nd = 1.51633, νd = 64.1. Glass: S-BSL7 (OHARA) equivalent, a borosilicate crown. f = +353.7 mm.

A weak meniscus convex to the object (R7 = 53.38 mm, R8 = 73.74 mm), alone between the 33.22 mm air space after L3 and the 28.68 mm air space before the rear pair. Condition (2) sets its power together with the front group. Condition (5) is the feature the patent singles out: a low index (n4 < 1.55) keeps the Petzval sum from falling as the lens is shortened, and because the long d8 then leaves the color correction short, L4 needs a high Abbe number (ν4 > 55) as well (col. 2).

### L5 — Biconcave Negative

nd = 1.76200, νd = 40.2. Glass: NBFD5 (HOYA) equivalent, a lanthanum dense flint. f = −34.0 mm.

The strongest element of the lens and the telephoto negative, with a deep concave front face (R9 = −28.36 mm) and a weak rear face (R10 = 309.42 mm) cemented to L6. Condition (7) asks for a high index in L5 and L6, which keeps the Petzval sum from falling; the patent also ties it to limiting the distortion produced at the last surface (col. 3).

### L6 — Biconvex Positive

nd = 1.76182, νd = 26.6. Glass: FD140 (HOYA) equivalent, a dense flint. f = +60.8 mm.

Cemented behind L5 (R10 = 309.42 mm, R11 = −54.14 mm); the pair together is negative at −88.5 mm. Condition (6) keeps the two indices within 0.1 of each other so that the cemented face adds no aberration of its own, and the cementing balances the color (col. 2–3). In Example 2 the indices differ by only 0.00018, so the cemented face has almost no d-line power and acts, by this reading, almost purely on color through the difference between νd 40.2 and 26.6.

## Glass Identification

The patent defines n as the index at the d-line (col. 2); Fig. 4 plots the d and g lines. All three pairs equal catalog d-line rows at the printed precision. The table gives catalog equivalents; the supplier of the production glass is not established.

| Element | Patent nd / νd | Catalog equivalent | Catalog nd / νd | Type |
|---|---|---|---|---|
| L1, L3, L4 | 1.51633 / 64.1 | S-BSL7 (OHARA) | 1.51633 / 64.14 | Borosilicate crown |
| L2, L6 | 1.76182 / 26.6 | FD140 (HOYA) | 1.76182 / 26.61 | Dense flint |
| L5 | 1.76200 / 40.2 | NBFD5 (HOYA) | 1.76200 / 40.26 | Lanthanum dense flint |

For L2 and L6, J-SF14 (Hikari, νd 26.58) and S-TIH14 (OHARA, 26.52) also match; for L5, S-LAM55 (OHARA, 40.10). The patent prints no partial dispersions, so behavior away from the d-line rests on these catalog curves. The palette uses only three glasses: one crown for all three positive singlets, one dense flint for both L2 and L6, and a lanthanum flint chosen to match L6's index in the cemented pair.

## Focus Mechanism and Image Plane

The patent names no focusing group or movement and prints the infinity state only, so no gap varies and the focus control stays at infinity. The 2 m minimum focus is the retail specification and is not traced.

The patent prints no back focus. The final gap of 62.6492 mm is the paraxial back focus, 31.3246 at F = 100, so the image plane is computed, not printed. Fig. 4 shows undercorrected zonal spherical aberration of about −0.15 near 0.7 of the aperture, returning to slightly positive at full aperture (F = 100). The model traces −0.150 at 0.7 and +0.080 at full aperture (−0.300 and +0.161 mm at 200 mm), so the sharpest axial focus lies slightly in front of the paraxial plane.

## Aperture Stop and Clear Apertures

The patent neither prints nor draws a stop, and Fig. 3 shows none. Its position is read from the field curves of Fig. 4, which depend on where the chief ray crosses the axis. With the stop in the second long air space d8, 3.12 mm behind L4 (1.56 at F = 100), the traced curves follow the plot across the field:

| At 6.2°, F = 100 | Fig. 4 | Model | Stop at the midpoint of d6 |
|---|---|---|---|
| ΔM (tangential) | −0.104 | −0.103 | −0.170 |
| ΔS (sagittal) | −0.026 | −0.032 | −0.037 |
| Distortion | +1.16 % | +1.11 % | +1.08 % |

Over seven field readings the tangential curve agrees to 0.003 RMS; the further forward in d6 the stop sits, the further the curve overshoots at the edge. The position is still an inference, good to about ±2 mm at the model scale. At f/4 the entrance pupil radius is 25.0 mm and the stop radius 13.69 mm.

The patent prints no semi-diameters, so all are inferred from Fig. 3, which is drawn to scale (14.14 px per mm of the model at 600 dpi, from the S1 to S11 span):

| Element | Model sd (mm) |
|---|---|
| L1 | 25.2 |
| L2 | 23.6 |
| L3 | 23.0 |
| L4 | 15.6 |
| L5, L6 | 12.5 (L5's front face 11.1) |

Fig. 3 ends the deep concave front face of L5 short of the element's edge, at about 10.8 mm, and bevels it out to the rim. The model keeps that face's clear cap to 11.1 mm and draws a flat land from there to the 12.5 mm edge.

The full f/4 beam passes on axis. Off axis, with the stop well behind the front group, the oblique beam rides high on L1 to L3 and low on the rear pair, and both sets of rims cut into it: about 91 % of the wide-open beam passes at 3.1° and about 70 % at the 6.1° corner.

## Model Scope and Limitations

| Quantity | Patent, F = 100 | Patent × 2 | Model |
|---|---|---|---|
| Focal length | 100 | 200.0 | 200.030 |
| F1.2.3 | 69.0 | 138.0 | 138.11 |
| F1.2.3.4 | 55.1 | 110.2 | 110.24 |
| Petzval sum | −0.06 | — | −0.062 at F = 100 |
| S1 to image | below 85 (condition 8) | below 170 | 159.21 |

- The prescription is the patent's, not a confirmed factory one, and the choice of Example 2 over Example 1 rests on the PhotonsToPhotos listing.
- The ×2 scale assumes a 200 mm production focal length; the retail length suggests the production lens may be a few percent shorter.
- All semi-diameters are inferred. The stop position is inferred from the field curves of Fig. 4, not printed or drawn.
- The image plane is the paraxial back focus; the patent prints none.
- The model is static at infinity and says nothing about performance at 2 m.
- The body table's Petzval line is misprinted "31 0.06"; claim 2 repeats the example with −0.06, which the model matches.
- The patent gives indices and Abbe numbers only, so behavior away from the d-line rests on the catalog equivalents.

## Sources

- [US 4,139,264 A](https://patents.google.com/patent/US4139264A/en), text, Example 2, claim 2 and Figs. 3–4.
- [Pentax LX manual](https://retro-camera.ru/files/Pentax-LX-Manual-EN.pdf), printed p. 61: construction, angle of view, minimum aperture, minimum focus, filter, size and weight.
- [Cine Lens Wiki: Pentax-M SMC 200mm f/4](https://cinelenswiki.com/lens:pen-msmc200mmf4): diaphragm blades, magnification, sliding hood, and the 1977–1984 production span.
- [PhotonsToPhotos Optical Bench Hub](https://www.photonstophotos.net/GeneralTopics/Lenses/OpticalBench/OpticalBenchHub.htm), which lists Example 2 of the patent as the smc Pentax-M 200mm f/4.
