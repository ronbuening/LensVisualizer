## Patent Reference and Design Identification

**Patent:** [JP 2018-180348 A](https://patents.google.com/patent/JP2018180348A/en)
**Filed:** 2017-04-17
**Published:** 2018-11-15
**Inventors:** Shunichiro Yoshinaga, Hiroaki Suzuki, Yoshiaki Kurioka
**Applicant:** Panasonic Intellectual Property Management Co., Ltd.
**Title:** Imaging optical system, imaging device, and camera system
**Example details:** Tables 1, 2 and 3A–3D, ¶0127–0128, pp. 15–18; Figures 1 and 2, p. 25. Values are unscaled.

Numerical Example 1 is a qualified production correlation for the Panasonic Leica DG Vario-Elmarit 8-18mm f/2.8-4 ASPH. (H-E08018). The model covers infinity focus only, with intermediate zoom positions interpolated between the three printed stations. Panasonic does not state which example the lens follows; the association rests on convergent evidence:

1. Panasonic's specification lists 15 elements in 10 groups, matching Example 1. Example 2 has 11 groups (L3 and L4 are not cemented), Example 3 has 14 elements and Example 4 has 16.
2. Panasonic lists one aspherical ED element, three other aspherical elements, two ED elements and one UHR element. Example 1 has four elements aspheric on both faces, of which L12 (nd 1.49700, νd 81.5) is the low-dispersion one; L3 (νd 75.5) and L9 (νd 81.6) are the other low-dispersion elements, and L7 (nd 2.00100) is the very-high-index element. Panasonic's construction diagram highlights the same positions. Example 2 has no low-dispersion asphere.
3. The application was filed on 2017-04-17, the day before Panasonic announced the lens.
4. The printed 8.2678–17.2434 mm range (zoom ratio 2.08563) and F/2.90–3.99 are close to the marketed 8–18 mm (2.25×) and f/2.8–4; the prescription is not rescaled.

The second inventor's name is romanized as **Hiroaki Suzuki**, as printed in the US family grant US 10,338,361 B2. The JP grant JP 6917538 B2 prints the same numerical data, and neither family member corrects the focusing or iris text discussed below. The US grant prints BF to fewer decimal places; the JP publication's five-decimal values are used.

## Optical Architecture

Example 1 is a negative-lead, five-group wide-angle zoom: 15 elements in 10 groups, with zoom-group powers **negative, positive, negative, negative, positive**. The aperture stop A (surface 10) sits in air inside G2, between L5 and L6. Three cemented doublets, one cemented triplet and six singlets make up the 10 groups. The group focal lengths below are the printed Table 3C values.

| Group | Surfaces             | Elements | Printed focal length (mm) | Architectural role                                  |
| ----- | -------------------- | -------- | ------------------------: | --------------------------------------------------- |
| G1    | 1–7                  | L1–L4    |                 −15.00425 | Negative front group of the retrofocus layout       |
| G2    | 8–16, including stop | L5–L9    |                  17.69510 | Positive variator carrying the stop                 |
| G3    | 17–19                | L10–L11  |                 −34.10326 | Thin negative cemented doublet                      |
| G4    | 20–24                | L12–L14  |                −147.25216 | Weak net-negative rear correction group             |
| G5    | 25–26                | L15      |                  38.86136 | Positive rear asphere, described as fixed in ¶0028  |

Paraxial recalculation from the prescription gives −15.0042, 17.6951, −34.1040, −147.2549 and 38.8614 mm; the largest difference from Table 3C is 0.0027 mm, in G4.

From wide to tele (¶0028), G1 moves imageward while G2 (with the stop), G3 and G4 move objectward; d7 and d19 shrink while d16 and d24 grow. The interpolated intermediate positions keep these directions throughout. ¶0028 also calls G5 fixed, but the printed BF falls from 14.16084 to 14.14666 mm (0.01418 mm); the model keeps the printed BF. The interpolated path is not the factory cam.

## Element-by-Element Analysis

Focal lengths are the printed Table 3B values for each element alone in air; for cemented members they are not in-situ powers. Shapes follow ¶0023–0027 and the printed radii. Glass names are catalog equivalents matching the printed nd/νd; the actual supplier is unconfirmed.

### L1: Negative Meniscus (G1)

nd = 1.80420, νd = 46.5. Glass: TAF3 (HOYA) equivalent. f = −31.1190 mm.

Surfaces 1/2. The leading negative meniscus, convex to the object, begins the diverging retrofocus front group. Both surfaces are spherical.

### L2: Neg. Meniscus (2× Asph) (G1)

nd = 1.58699, νd = 59.5. Glass: K-CSK120 (Sumita) equivalent. f = −30.9275 mm.

Surfaces 3/4. Both faces are aspheric. This negative element sits ahead of the front cemented pair; the polynomial departures provide correction degrees of freedom at the large front-group ray heights.

### L3: Biconcave Negative (G1)

nd = 1.55032, νd = 75.5. Glass: FCD705 (HOYA) equivalent — ED. f = −22.5764 mm.

Surfaces 5/6. This low-dispersion negative element is cemented to L4. The difference in dispersion and opposite isolated powers permits chromatic balancing. Panasonic marks this position as ED; the patent publishes no partial-dispersion data.

### L4: Positive Meniscus (G1)

nd = 1.83481, νd = 42.7. Glass: S-LAH55 (OHARA) equivalent. f = +21.1486 mm.

Surfaces 6/7. The positive member of the front cemented pair shares surface 6 with L3 and closes G1.

### L5: Pos. Meniscus (2× Asph) (G2)

nd = 1.58699, νd = 59.5. Glass: K-CSK120 (Sumita) equivalent. f = +58.4940 mm.

Surfaces 8/9. This weak positive meniscus, concave to the object and aspheric on both faces, precedes the stop. The K = 10 conic of surface 8 limits its usable radius (see Aspherical Surfaces).

### L6: Positive Meniscus (G2)

nd = 1.84666, νd = 23.8. Glass: S-TIH53 (OHARA) equivalent. f = +10.9702 mm.

Surfaces 11/12. The first positive member of the G2 cemented triplet follows the stop. It shares surface 12 with the very-high-index negative member.

### L7: Biconcave Negative (G2)

nd = 2.00100, νd = 29.1. Glass: TAFD55 (HOYA) equivalent — UHR. f = −5.5777 mm.

Surfaces 12/13. The high-index negative center of the triplet has the strongest negative isolated power of the three members. Panasonic marks this position as its UHR (ultra-high refractive index) element.

### L8: Biconvex Positive (G2)

nd = 1.65412, νd = 39.7. Glass: S-NBH5 (OHARA) equivalent. f = +14.0713 mm.

Surfaces 13/14. The final positive triplet member shares surface 13 with L7. Its νd difference from L7 supports ordinary chromatic balancing.

### L9: Biconvex Positive (G2)

nd = 1.49700, νd = 81.6. Glass: FCD1 (HOYA) equivalent — ED. f = +20.8509 mm.

Surfaces 15/16. The positive low-dispersion singlet completes G2; Panasonic marks this position as ED. Its rear air gap, d16, varies with zoom.

### L10: Biconvex Positive (G3)

nd = 1.94595, νd = 18.0. Glass: FDS18 (HOYA) equivalent. f = +18.9041 mm.

Surfaces 17/18. The positive front member of the thin G3 doublet is followed by a less dispersive negative partner. Figure 1 draws the focusing arrow under this group, while ¶0029 names G4 (see Focus and Zoom Mechanism).

### L11: Biconcave Negative (G3)

nd = 1.84666, νd = 23.8. Glass: S-TIH53 (OHARA) equivalent. f = −12.0551 mm.

Surfaces 18/19. This negative member closes G3. The combined group is negative although L10 alone is positive.

### L12: Biconvex Positive (2× Asph) (G4)

nd = 1.49700, νd = 81.5. Glass: S-FPL51 (OHARA) equivalent — ED. f = +18.3989 mm.

Surfaces 20/21. The low-dispersion positive double-asphere starts G4. It corresponds to the aspherical ED element in Panasonic's construction.

### L13: Biconcave Negative (G4)

nd = 1.80610, νd = 33.3. Glass: NBFD15 (HOYA) equivalent. f = −9.7347 mm.

Surfaces 22/23. The negative member of the rear cemented pair shares surface 23 with L14. The pair and L12 combine into a weakly negative G4.

### L14: Positive Meniscus (G4)

nd = 1.62041, νd = 60.3. Glass: S-BSM16 (OHARA) equivalent. f = +31.2112 mm.

Surfaces 23/24. This positive member closes the G4 cemented pair. The following variable air gap, d24, separates G4 from the final singlet.

### L15: Biconvex Positive (2× Asph) (G5)

nd = 1.68893, νd = 31.1. Glass: S-TIM28 (OHARA) equivalent. f = +38.8614 mm.

Surfaces 25/26. The final positive double-asphere is the whole of G5. Its printed distance to the image changes by 0.01418 mm over the zoom range, although ¶0028 calls G5 fixed.

## Glass Identification and Selection

Every printed nd/νd pair matches a current catalog glass to the printed precision, and the data file names that glass as a catalog equivalent with the supplier unconfirmed. A matching pair does not identify the production melt, and the patent publishes no partial-dispersion data.

The prescription pairs high-index flints with three low-dispersion elements: L3 (νd 75.5) in G1, and L9 and L12 (νd 81.6 and 81.5) on either side of G3. These match Panasonic's two ED elements and one aspherical ED element. With no published partial dispersion, no apochromatic claim is made; chromatic analyses use the catalog dispersion of the named equivalents.

| Element |      nd |   νd | Catalog equivalent | Panasonic designation |
| ------- | ------: | ---: | ------------------ | --------------------- |
| L1      | 1.80420 | 46.5 | TAF3 (HOYA)        |                       |
| L2      | 1.58699 | 59.5 | K-CSK120 (Sumita)  | Aspherical            |
| L3      | 1.55032 | 75.5 | FCD705 (HOYA)      | ED                    |
| L4      | 1.83481 | 42.7 | S-LAH55 (OHARA)    |                       |
| L5      | 1.58699 | 59.5 | K-CSK120 (Sumita)  | Aspherical            |
| L6      | 1.84666 | 23.8 | S-TIH53 (OHARA)    |                       |
| L7      | 2.00100 | 29.1 | TAFD55 (HOYA)      | UHR                   |
| L8      | 1.65412 | 39.7 | S-NBH5 (OHARA)     |                       |
| L9      | 1.49700 | 81.6 | FCD1 (HOYA)        | ED                    |
| L10     | 1.94595 | 18.0 | FDS18 (HOYA)       |                       |
| L11     | 1.84666 | 23.8 | S-TIH53 (OHARA)    |                       |
| L12     | 1.49700 | 81.5 | S-FPL51 (OHARA)    | Aspherical ED         |
| L13     | 1.80610 | 33.3 | NBFD15 (HOYA)      |                       |
| L14     | 1.62041 | 60.3 | S-BSM16 (OHARA)    |                       |
| L15     | 1.68893 | 31.1 | S-TIM28 (OHARA)    | Aspherical            |

## Focus and Zoom Mechanism

### Infinity focus only

The patent tabulates infinity focus only. ¶0013 defines the arrow attached to a group in Figures 1, 3, 5 and 7 as its focusing motion from infinity to close range; Figure 1 draws that arrow under G3, but ¶0029 states that G4 moves imageward. The same conflict appears in JP 6917538 B2 (¶0036–0037) and US 10,338,361 B2 (column 4), and no correction has been found. The model therefore has no focus travel: every focus setting shows the infinity geometry. Panasonic's 0.23 m minimum focus distance is catalog information only.

### Printed zoom stations

| Quantity                 |     Wide |   Middle |     Tele |
| ------------------------ | -------: | -------: | -------: |
| Focal length (mm)        |   8.2678 |  11.6445 |  17.2434 |
| F-number                 |  2.90468 |  3.56972 |  3.98898 |
| Half-angle (°)           |  53.1986 |  42.7157 |  32.0045 |
| Image height (mm)        |  10.0000 |  10.3000 |  10.8150 |
| d7 (mm)                  |  22.8204 |  10.6305 |   1.5141 |
| d16 (mm)                 |   1.3000 |   3.3512 |   5.8971 |
| d19 (mm)                 |   6.8084 |   4.7573 |   2.2116 |
| d24 (mm)                 |   0.9372 |   4.8164 |  12.2095 |
| BF (mm)                  | 14.16084 | 14.15583 | 14.14666 |

At the printed BF, the paraxial image lies 0.00064, 0.00073 and 0.00093 mm in front of the image plane at wide, middle and tele. The printed image planes are kept unchanged. Real chief rays at the printed half-angles reach 10.0006, 10.2993 and 10.8152 mm on those planes, reproducing the printed image heights.

### Intermediate zoom positions

The patent prints only the wide, middle and tele states, and ¶0012 notes that the lines joining them in Figure 1 are not the actual group motion. Interpolating all four variable gaps linearly would leave intermediate zooms out of focus by up to 0.66 mm. The model instead interpolates d7, d24, BF and the F-number linearly and shifts G3, keeping d16 + d19 at its interpolated sum, so that the image stays in focus; the shift from the linear position reaches about 0.30 mm. This is a zoom compensation, not a focusing assumption, and not the factory cam.

The zoom control has 33 positions: positions 0, 16 and 32 are the printed states, and the other 30 are interpolated, with calculated focal lengths. Between positions the gaps change linearly, and the added focus error stays within about 0.0041 mm (0.0051 mm including the printed-plane offsets), within the 2λN² depth of focus of about 0.0099 mm at F/2.90. The narrowest variable air gap is 0.9372 mm (d24 at wide).

### Iris conflict

¶0028 says the open iris diameter is the same at wide and middle and larger at tele. The printed F-numbers instead need paraxial stop radii of about 5.29, 4.75 and 4.99 mm, so the wide and middle diameters differ by about 11%. The model keeps the printed F-numbers and sets the stop radius at each zoom position from the printed or interpolated F-number.

## Aspherical Surfaces

The printed equation uses the standard conic plus even radial powers:

$$z(h)=\frac{h^2/R}{1+\sqrt{1-(1+K)(h/R)^2}}+\sum_p A_p h^p.$$

K is the conic constant, not 1+K. Radii, coefficients, thicknesses and gaps are unscaled, and every printed term is kept, including the very small high orders. Four elements carry eight aspheric surfaces (L2, L5, L12 and L15, both faces each). Polynomial data alone does not establish molded-glass, resin-hybrid or polished manufacture.

| Surface |              K | Printed coefficients (mm-based sag convention)                                                                    |
| ------- | -------------: | ----------------------------------------------------------------------------------------------------------------- |
| 3       | -1.0564600e+00 | A4=1.8084500e-05, A6=-8.0832800e-07, A8=7.0641600e-09, A10=-2.7728400e-11, A12=4.2708100e-14, A14=0.0000000e+00   |
| 4       | -5.2538500e-01 | A4=-4.8225200e-05, A6=-1.8175300e-06, A8=1.3993000e-08, A10=-5.4844900e-11, A12=-3.8543300e-25, A14=0.0000000e+00 |
| 8       |  1.0000000e+01 | A4=-7.2657800e-05, A6=2.1030800e-06, A8=5.1289200e-09, A10=1.0872300e-09, A12=2.7356000e-28, A14=0.0000000e+00    |
| 9       |  3.8697100e-01 | A4=-2.3890500e-05, A6=9.0233100e-07, A8=3.5479500e-09, A10=2.4212700e-10, A12=1.3673100e-27, A14=0.0000000e+00    |
| 20      | -9.5963800e-03 | A4=-1.0746500e-05, A6=-9.9689900e-08, A8=2.1684600e-09, A10=-3.8115100e-11, A12=-2.7738800e-24, A14=0.0000000e+00 |
| 21      | -3.4481200e-01 | A4=7.3299300e-05, A6=-2.7603900e-07, A8=2.8773400e-09, A10=-3.7792400e-11, A12=-3.5179700e-26, A14=0.0000000e+00  |
| 25      | -4.9555600e+00 | A4=3.5043200e-05, A6=1.1463900e-07, A8=-7.5968500e-10, A10=-4.7854200e-12, A12=-2.8918700e-25, A14=-1.2790400e-27 |
| 26      |  9.4663600e+00 | A4=4.3440600e-05, A6=1.1165500e-07, A8=-4.8986600e-10, A10=-8.0605000e-12, A12=3.7355400e-24, A14=-1.8099000e-27  |

Positive and negative A4 terms bend the radial departure in opposite directions relative to the conic base, but the net shape includes all orders; a single coefficient sign is not an isolated aberration attribution. Surface 8 has K = 10, which limits its conic sag to a radius of about 6.953 mm; its 6.4 mm semi-diameter lies inside that limit.

## Clear Apertures and Field Coverage

No clear apertures are published. Every semi-diameter is inferred from the proportions of Figure 1, and none is enlarged beyond what the figure supports; the rear singlet's is 10.0 mm. The inferred rims vignette oblique beams near the field edge, and the model keeps that vignetting.

The 21.63 mm image-circle diameter is twice the tele image height of 10.815 mm. The patent's wide and middle image heights are smaller, 10.0 and 10.3 mm; the MTF table below uses edge heights interpolated between the printed values.

## Reference-Wavelength MTF

The values below are d-line (587.6 nm) MTF at 40 lp/mm on the printed or interpolated image plane, at the field edge for each zoom position, wide open and at f/8.

|  Zoom | Edge height (mm) | Wide-open sagittal | Wide-open tangential | f/8 tangential |
| ----: | ---------------: | -----------------: | -------------------: | -------------: |
|     0 |         10.00000 |            0.69813 |              0.24619 |        0.54035 |
| 0.252 |         10.15120 |            0.63273 |              0.66735 |        0.68603 |
|   0.5 |         10.30000 |            0.77483 |              0.26534 |        0.55500 |
| 0.752 |         10.55956 |            0.37388 |              0.20779 |        0.36119 |
|     1 |         10.81500 |            0.71543 |              0.65273 |        0.67994 |

At the middle zoom position, the 10.815 mm tele image height, beyond the printed 10.3 mm, gives a tangential MTF40 of about 0.162.

Refocusing to best axial MTF would move the image plane by about −0.004, +0.008, +0.011, +0.022 and +0.008 mm at zoom 0, 0.252, 0.5, 0.752 and 1; the model does not apply these shifts. Doing so would change the middle-zoom edge tangential MTF40 from 0.265 to 0.217 and the 0.752 value from 0.208 to 0.246, so the weak tangential response at the field edge does not come from the choice of image plane.

## Sources and References

- [JP 2018-180348 A original PDF](https://patentimages.storage.googleapis.com/61/44/48/d2f4be717a23de/JP2018180348A.pdf): the transcribed publication.
- [US 10,338,361 B2 PDF](https://patentimages.storage.googleapis.com/c6/a7/f7/4c36e3d7701e01/US10338361.pdf): US family grant; inventor romanization, with the same focusing and iris text.
- [JP 6917538 B2 PDF](https://patentimages.storage.googleapis.com/8c/b6/5e/343840ea75acbe/JP6917538B2.pdf): JP family grant with the same Japanese text and tables.
- [Panasonic H-E08018 features and specifications](https://help.na.panasonic.com/answers/features-and-specifications-lumix-lens-model-h-e08018/): construction, special elements, aperture blades and minimum focus distance; it does not name the patent example.
- [Panasonic H-E08018 construction diagram](https://panasonic.jp/content/experience-fragments/panasonic/jp/ja/content/dc/products/H-E08018/lp4_ind1_H-E08018_cxf/master/_jcr_content/root/c_lay014/c_lay001_434717760_c/c_lay011/c_gen003.coreimg.jpeg/1714357736121/leica-dg-vario-elmarit-8-18-bnr02a-pc.jpeg): positions of the aspherical, ED, aspherical ED and UHR elements.
