## Patent Reference and Design Identification

**Patent:** US 4,134,645 A  
**Application Number:** 827,636  
**Filed:** 1977-08-25  
**Granted:** 1979-01-16  
**Priority:** 1976-08-26 (JP 51-101957)  
**Inventors:** Takahiro Sugiyama, Toshifumi Kubota, Rensuke Adachi  
**Assignee:** Asahi Kogaku Kogyo Co., Ltd.  
**Title:** Miniaturized telephoto camera lens  
**Example details:** Example 1, repeated in claim 1; section in Fig. 1, aberration plots in Fig. 2. The patent is normalized to F = 100; every printed radius, spacing and the back focus is multiplied by exactly 1.2 for f = 120 mm.

The smc Pentax-M 120mm f/2.8 was introduced in 1977 for the Pentax K mount as part of the compact M series. Pentax's [LX camera manual](https://retro-camera.ru/files/Pentax-LX-Manual-EN.pdf) (lens table, printed page 60) lists it as five elements in five groups, with a 21° angle of view, an f/32 minimum aperture, a 1.2 m minimum focus, a 49 mm filter thread, a diameter and length of 62.5 × 63 mm and a weight of 275 g; reference listings add an eight-blade diaphragm. It replaced the SMC Pentax 120mm f/2.8 of the K series, which reference listings give as five elements in four groups.

This page models Example 1 as a patent design probably close to that lens, not a confirmed factory prescription; the patent names no product. The association rests on five points:

1. The example's five single lenses in five air-spaced components match the retail construction of five elements in five groups, all spherical.
2. At the 1.2 scale the example is a 120 mm f/2.8, and its printed half-field of 10.2° reaches 21.6 mm of image height, the corner of the 35 mm frame; Pentax gives the angle of view as 21°.
3. The patent's three examples fit the three M-series telephotos introduced in 1977, each of five elements in five groups: Example 1 (f/2.8, ±10.2°) the 120mm f/2.8, Example 2 (f/3.5, ±9.0°) the 135mm f/3.5 and Example 3 (f/3.5, ±8.2°) the 150mm f/3.5. Example 1 is the only f/2.8 design of the three.
4. The front vertex lies 106.78 mm ahead of the image plane. The retail length of 63 mm, which excludes the mount, plus the 45.46 mm K-mount flange distance puts the front of the barrel about 108.5 mm from the film.
5. The August 1976 priority date falls shortly before the lens's introduction, and the PhotonsToPhotos Optical Bench Hub lists Example 1 as this lens.

No Pentax construction diagram could be found to compare with Fig. 1; the LX manual gives only a specification table, so the attribution remains probable rather than confirmed. The printed example also carries an unresolved inconsistency in its first-order values, described under Image Plane and Source Erratum.

## Optical Architecture

Five spherical singlets form a compact telephoto: a positive front group of L1 (positive meniscus), L2 (biconcave) and L3 (positive meniscus), all closely spaced, then a long air space d6 of 34.608 mm (28.84 at F = 100) and a rear pair of L4 (positive meniscus) and L5 (negative meniscus, concave to the object), 5.832 mm apart. The power sequence is P-N-P, then P-N. There are no cemented surfaces, aspheric surfaces or cover plates.

The front group has a composite focal length of 93.57 mm (77.97 at F = 100), and the first four lenses together 63.05 mm (52.54 at F = 100, against the printed 52.73; see the erratum). The rear negative L5 spreads the converging beam, which places the rear principal plane well ahead of the lens: the lens is 64.152 mm from S1 to S10, and the image plane lies 106.776 mm behind S1, 0.89 times the focal length. The patent measures compactness by this "telescopic ratio" of total length plus back focus to focal length. It presents Example 1 as a wide-angle telephoto that keeps the ratio, while Examples 2 and 3 shorten the lens further (81.08 and 79.34 at F = 100 against 88.98) at a slight sacrifice in field (col. 1).

The patent's seven conditions set the layout, and Example 1 meets all of them:

| Condition | Range at F = 100 | Example 1 |
|---|---|---|
| (1) F1.2.3 | F/1.8 to F/1.2 (55.6 to 83.3) | F/1.283 = 77.97 |
| (2) F1.2.3.4 | F/2.5 to F/1.85 (40.0 to 54.1) | F/1.896 = 52.73 (52.54 traced) |
| (3) d6 | 0.22F to 0.32F | 28.84 |
| (4) ν2 | below 28 | 25.4 |
| (5) ν1, ν3 | above 58 | 65.0, 61.2 |
| (6) n5 | above 1.62 | 1.80610 |
| (7) d8 | 0.015F to 0.065F | 4.86 |

Condition (5) is printed as "ν1 · ν3 > 58" and is read here as a bound on each Abbe number. Example 1 sits near the long end of condition (1): the patent sets F1.2.3 at F/1.28 in this example to provide the wider field, since a shorter front-group focal length burdens L1 and L3 and narrows their coverage (col. 2). Its recurring concern is the Petzval sum, which tends to fall as a telephoto is shortened; conditions (4) to (7) are chosen to keep it from falling (col. 2–3).

## Element-by-Element Analysis

### L1 — Positive Meniscus

nd = 1.51821, νd = 65.0. Glass: OHARA BSL22 catalog equivalent, a borosilicate crown. f = +121.4 mm.

The front crown, convex to the object (R1 = 46.78 mm, R2 = 174.58 mm), modeled like L2 and L3 at 22 mm semi-diameter. Its low dispersion satisfies condition (5); the patent ties conditions (4) and (5) to keeping the power of each front lens moderate so that the Petzval sum does not fall (col. 2).

### L2 — Biconcave Negative

nd = 1.80518, νd = 25.4. Glass: S-TIH6 (OHARA) equivalent, a dense flint. f = −109.0 mm.

The only negative element of the front group, 3.828 mm behind L1 and 0.096 mm ahead of L3 on the axis, with the stronger curve facing the object (R3 = −135.26 mm, R4 = 251.68 mm). Condition (4), ν2 < 28, corrects the color of the first three lenses and makes condition (3) more effective (col. 2). The patent adds that the front three lenses carry most of the achromatism and leave it somewhat over-corrected (col. 2–3).

### L3 — Positive Meniscus

nd = 1.55963, νd = 61.2. Glass: S-BAL50 (OHARA) equivalent, a barium crown. f = +84.5 mm.

The strongest positive element, with the stronger curve facing the object as the claims require (R5 = 37.13 mm, R6 = 160.97 mm). It completes the front group, whose composite focal length condition (1) bounds, and is followed by the long air space d6, whose length condition (3) sets between compactness and the Petzval sum (col. 2).

### L4 — Positive Meniscus

nd = 1.80518, νd = 25.4. Glass: S-TIH6 (OHARA) equivalent, a dense flint. f = +100.0 mm.

Convex to the object (R7 = 36.73 mm, R8 = 64.72 mm), 34.608 mm behind L3. Because the front group over-corrects color, the correction of lateral color left to L4 is insufficient, and with L5 only d8 behind it (condition 7) L4 has to be a glass of low Abbe number; a high-index flint or dense flint also limits the fall in the Petzval sum (col. 3). Example 1 uses the same dense flint as L2, where Examples 2 and 3 use a lighter flint (1.72825 / 28.5). Its rear radius R8 is the value under the source erratum.

### L5 — Negative Meniscus

nd = 1.80610, νd = 40.9. Glass: S-LAH53 (OHARA) equivalent, a lanthanum flint. f = −49.1 mm.

The telephoto negative element, concave to the object (R9 = −24.65 mm, R10 = −67.24 mm), 5.832 mm behind L4. Condition (6) asks for an index above 1.62 to prevent a decrease in the Petzval sum (col. 3); Example 1 uses 1.806, where Examples 2 and 3 use 1.640 and 1.652. Condition (7) keeps d8 between 0.015F and 0.065F; a smaller d8 makes color correction and assembly difficult, a larger one lowers the Petzval sum.

## Glass Identification

The patent gives indices and Abbe numbers without naming a spectral line; Fig. 2 plots the d and g lines. All five pairs equal catalog d-line rows at the printed precision and none equals an e-line row, so the table is read as d-line. The table gives catalog equivalents; the supplier of the production glass is not established.

| Element | Patent nd / νd | Catalog equivalent | Catalog nd / νd | Type |
|---|---|---|---|---|
| L1 | 1.51821 / 65.0 | BSL22 (OHARA) | 1.51821 / 65.04 | Borosilicate crown |
| L2, L4 | 1.80518 / 25.4 | S-TIH6 (OHARA) | 1.80518 / 25.43 | Dense flint |
| L3 | 1.55963 / 61.2 | S-BAL50 (OHARA) | 1.55963 / 61.17 | Barium crown |
| L5 | 1.80610 / 40.9 | S-LAH53 (OHARA) | 1.80610 / 40.93 | Lanthanum flint |

For L2 and L4, SCHOTT SF6 and Sumita K-SFLD6 match equally, and for L5 SCHOTT P-LASF47; OHARA is used throughout for consistency. L1's pair equals OHARA BSL22, a discontinued borosilicate crown, so all five elements trace on OHARA catalog dispersion. The patent prints no partial dispersions. The palette repeats the dense flint of L2 in the positive L4 and puts a high-index lanthanum flint in the telephoto negative L5.

## Focus Mechanism

The patent names no focusing group or movement and prints the infinity state only, so no gap varies and the focus control stays at infinity. The 1.2 m minimum focus is the retail specification and is not traced.

## Image Plane and Source Erratum

The printed Example 1 does not reproduce its own first-order values. Traced as printed, it gives f = 99.23, a back focus of 35.21 and F1.2.3.4 = 52.54 at F = 100, against the stated 100, 35.52 and 52.73; F1.2.3, which does not involve L4, reproduces at 77.97. Examples 2 and 3 of the same patent reproduce their stated values to rounding. Among single-digit and transposed-digit changes to the table, one candidate stands out: r8 = 53.39 instead of the printed 53.93 gives f = 99.98, a back focus of 35.51 and F1.2.3.4 = 52.73, all three to rounding. The claim, the British and German counterparts and the Japanese original, JP S53-27421 A, all print 53.93, so no second source supports the change; the model keeps the printed radius, and the data file records the discrepancy as an unresolved erratum. The printed Petzval sum of 0.170 is also nearer the 53.39 reading (0.170 by the usual surface sum) than the printed table (0.179), but that sum does not reproduce the Petzval values of Examples 2 and 3 either, so it carries little weight.

As a result the model's focal length is 119.08 mm rather than 120 mm, and its paraxial back focus is 42.249 mm. The final gap keeps the printed back focus of 42.624 mm (35.52 at F = 100), so the image plane lies 0.375 mm behind paraxial focus and is not refocused. Fig. 2 shows undercorrected zonal spherical aberration peaking near −0.09 at F = 100 around 0.7 of the aperture; the model traces −0.080 there and −0.054 at full aperture (−0.096 and −0.065 mm at 120 mm). The sharpest axial focus therefore lies further still in front of the printed plane, and image quality evaluated at the printed plane includes this defocus.

## Aperture Stop and Clear Apertures

The patent neither prints nor draws a stop, and Fig. 1 shows none. The model places it in the long air space d6, 20.608 mm behind S6 (17.17 at F = 100), the position the PhotonsToPhotos Optical Bench also uses. The position is inferred from the patent's own astigmatism curves, which depend on it while the axial data do not. Traced along the real chief ray, the model's sagittal and meridional fields at 5.1°, 7.65° and 10.2° are −0.068, −0.140, −0.214 and −0.066, −0.117, −0.152 at F = 100, against about −0.066, −0.145, −0.198 and −0.066, −0.13, −0.146 plotted in Fig. 2; with the stop 5 mm behind S6 the meridional field would instead turn back to +0.30 at the edge. At f/2.8 the entrance pupil radius is 21.26 mm and the stop radius 13.64 mm.

The patent prints no semi-diameters, so all are inferred:

| Element | Model sd (mm) | Basis |
|---|---|---|
| L1, L2, L3 | 22 | The front group, drawn at nearly one height in Fig. 1 |
| L4, L5 | 11.5 | The rear pair, drawn about half as tall as the front group |

Both heights are Fig. 1 read at the scale of its S1 to S10 vertex span; the figure is a schematic, so they are approximate. The full f/2.8 beam passes on axis. Off axis both the front rims and the rims of L4 and L5 cut the oblique beam: about 98 % of it passes at 5.1° and 73 % at the 10.2° field edge. Stopped down to f/4, nearly the full beam passes at every field (99.6 % at the edge).

## Model Scope and Limitations

| Quantity | Patent, F = 100 | Patent × 1.2 | Model |
|---|---|---|---|
| Focal length | 100 | 120.0 | 119.081 |
| Back focus | 35.52 | 42.624 | 42.249 paraxial |
| S1 to S10 | 53.46 | 64.152 | 64.152 |
| F1.2.3 | 77.97 | 93.56 | 93.57 |
| F1.2.3.4 | 52.73 | 63.28 | 63.05 |

- The prescription is the patent's, not a confirmed factory one, and it keeps the printed r8 under the unresolved erratum above.
- Stop position and all semi-diameters are inferred; the stop position rests on the astigmatism curves of Fig. 2.
- The image plane is the printed back focus, 0.375 mm behind paraxial focus.
- The model is static at infinity and says nothing about performance at 1.2 m.
- The patent gives indices and Abbe numbers only, so behavior away from the d-line rests on the catalog equivalents. On axis, the model's g-line focus agrees with Fig. 2 to within about 0.005 at F = 100 (+0.156 paraxial against about +0.16 plotted).

## Sources

- [US 4,134,645 A](https://patents.google.com/patent/US4134645A/en), text, Example 1, claim 1 and Figs. 1–2.
- [JP S53-27421 A](https://patents.google.com/patent/JPS5327421A/en), the Japanese original, which also prints r8 = 53.93.
- [Pentax LX camera manual](https://retro-camera.ru/files/Pentax-LX-Manual-EN.pdf), lens table on printed page 60: construction, angle of view, minimum aperture, minimum focus, size, weight and filter.
- [Cine Lens Wiki: Pentax-M SMC 120mm f/2.8](https://cinelenswiki.com/lens:pen-msmc120mmf2.8): 1977 release and eight-blade diaphragm; [SMC Pentax 120mm f/2.8](https://cinelenswiki.com/lens:pensmc120mmf2.8): the K-series predecessor.
- [PhotonsToPhotos Optical Bench Hub](https://www.photonstophotos.net/GeneralTopics/Lenses/OpticalBench/OpticalBenchHub.htm), which lists Examples 1 to 3 of the patent as the Pentax-M 120mm f/2.8, 135mm f/3.5 and 150mm f/3.5.
