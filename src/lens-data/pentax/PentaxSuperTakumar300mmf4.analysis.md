## Patent Reference and Design Identification

**Patent:** US 3,502,394  
**Filed:** September 21, 1967  
**Granted:** March 24, 1970  
**Priority:** Japan, September 26, 1966 (application 41/63,320)  
**Inventor:** Koichi Kobayashi  
**Assignee:** Asahi Kogaku Kogyo Co., Ltd. (printed as Asahi Kogaku Kogyo Kabushiki Kaisha)  
**Title:** Lens system of large telephoto ratio  
**Example details:** Table I, repeated in the claim; section in Fig. 1, aberration curves in Fig. 2, aberration coefficients in Tables II and III. The patent is normalized to F = 1.0; all lengths, including the inferred semi-diameters, are multiplied by exactly 300.

This is a patent design associated with the Asahi Super-Takumar 300mm f/4 for the M42 screw mount, not a confirmed factory prescription. The association comes from the PhotonsToPhotos Optical Bench and is probable rather than certain. It rests on four points:

1. The example's five single lenses in five air-spaced components match the retail construction of five elements in five groups.
2. At the 300 scale it is a 300 mm f/4, and its ±4.5° field covers the 8° angle of view Asahi published for the lens.
3. The assignee is Asahi Kogaku Kogyo, and the 1966 priority date falls within the Super-Takumar years.
4. Asahi's other 300 mm f/4 formulas do not fit. Collector databases list the 1958 Takumar 300mm f/4 with three elements and a later Takumar with four; the K-mount SMC Pentax 300mm f/4 of 1975 has seven elements in five groups; and the 6×7 Takumar 300mm f/4, also five elements in five groups, needs about ±8° to cover its format (it is modeled separately from US 3,467,462).

Two points weaken the match. No Asahi construction drawing of the 35 mm lens was found, so the element shapes and spacings cannot be compared with a maker diagram. And the introduction date is reported inconsistently: lens-db gives 1965, a collector's production table 1969. A 1965 launch would precede the September 1966 priority date, which would make this exact example less likely to be the production formula; a 1969 launch would follow it. The lens later continued as the Super-Multi-Coated and SMC Takumar 300mm f/4, reportedly with the same optics.

Asahi's Spotmatic II instruction manual lists the lens with five elements, an 8° angle of view, f/4 to f/22, a minimum focus of 18 ft (5.5 m) and a weight of 946 g. Collector databases add an automatic diaphragm and a 77 mm filter thread.

Table I and the claim table print the same prescription except for R3, which is −0.74505 in Table I and +0.74505 in the claim. The model uses the negative value. The text gives the second lens a concave front face and a concave rear face, Fig. 1 draws it biconcave, and the patent's own Seidel table settles the question: its Petzval term for surface 3 is −0.560, which is $(n' - n)/(n n' R_3)$ for $R_3 = -0.74505$ (the positive radius gives +0.560), and the printed Petzval sum of −0.219 is reproduced only with the negative radius.

## Optical Architecture

A two-group telephoto: a positive front group G1 of three singlets (L1 biconvex, L2 biconcave, L3 positive meniscus) and, 111 mm behind it, a small negative rear group G2 of two singlets (L4 biconcave, L5 biconvex), the patent's lenses 1 to 5 and its group names. The power sequence is P-N-P, then N-P. There are no cemented, aspheric or plane surfaces.

At this scale the front group has a focal length of +187.75 mm (0.626F) and the rear group −151.65 mm (−0.506F). The rear group enlarges the front group's image 1.60 times, so the 300 mm focal length is reached with the front vertex only 236.0 mm ahead of the image. That is a telephoto ratio of 1.271 against the printed 1.27, which the patent defines as the focal length divided by the distance from the front lens surface to the image plane. The lens measures 161.18 mm from S1 to S10, and the computed paraxial back focus is 74.84 mm.

The claim sets four conditions, all met by the example:

| Condition | Range | Example |
|---|---|---|
| n1, n3 | below 1.55 | 1.50977, 1.48749 |
| \|R2\|, rear face of L1 convex | 1.2F to 4F | 2.8201F |
| R6 | 2F to 4F | 3.4511F |
| d2 | above 0.03F | 0.0535F |

The description restates the last condition once as d2 above 0.037F; the example meets both. The stated aim is to balance axial and oblique aberration while keeping the zonal spherical aberration positive or very small, within −0.001F of the paraxial image plane. Besides the third-order coefficients per surface (Table II), the patent prints third- to ninth-order spherical aberration coefficients (Table III).

## Element-by-Element Analysis

### L1 — Biconvex Positive

nd = 1.50977, νd = 61.9. Glass: Unmatched (no catalog glass at this pair), a crown. f = +208.2 mm.

The largest element, 75.15 mm across, with a strongly convex front face (R1 = 120.75 mm) and a nearly flat convex rear face (R2 = −846.03 mm, 2.82F). The patent keeps its index below 1.55 to avoid overcorrecting the Petzval sum and to hold the zonal spherical aberration small, and uses the convex rear face, with |R2| between 1.2F and 4F, to undercorrect higher-order spherical aberration. The 16.05 mm air space to L2 (d2 above 0.03F) lowers the marginal ray before it reaches L2, which the patent says prevents overcorrection of spherical aberration.

### L2 — Biconcave Negative

nd = 1.71736, νd = 29.5. Glass: SF1 (SCHOTT) equivalent, a dense flint. f = −212.3 mm.

The only negative element of the front group and its flint: with a low-index crown on each side it makes the front group a positive achromat. Its concave front face (R3 = −223.52 mm) carries the largest third-order spherical aberration term in the lens, −7.606 at F = 1 in Table II, against the positive terms of surfaces 1, 2 and 5. The sign of this radius is the one the patent prints inconsistently.

### L3 — Positive Meniscus

nd = 1.48749, νd = 70.0. Glass: Unmatched (an FK5-type crown; catalog rows are about 0.2 higher in νd). f = +188.5 mm.

Convex to the object and 0.3 mm behind L2 on the axis, it is slightly stronger than L1 and has the lowest index in the lens, again under the condition n3 < 1.55. Its weakly concave rear face (R6 = 1035.33 mm, 3.45F) is the second face the patent uses to undercorrect higher-order spherical aberration, and the patent adds that this concave face corrects the aberrations of the oblique bundle.

### L4 — Biconcave Negative

nd = 1.72916, νd = 54.8. Glass: S-LAL18 (OHARA) equivalent, a lanthanum crown. f = −43.69 mm.

The strongest element in the lens, 111 mm behind L3. Its deep front face (R7 = −37.65 mm) gives the largest Petzval term in Table II (−3.360 at F = 1); the rear group's terms total −1.42 against +1.20 for the front group, leaving the small negative sum of −0.219. It supplies most of the rear group's negative power.

### L5 — Biconvex Positive

nd = 1.76200, νd = 40.3. Glass: NBFD5 (HOYA) equivalent, a lanthanum flint. f = +67.49 mm.

2.63 mm behind L4. With L4 it forms a rear group of −151.65 mm in which the negative element has the lower dispersion, the usual arrangement for a negative achromat. Surfaces 8 and 9, facing each other across the air space, carry large distortion terms of opposite sign in Table II (−16.59 and +21.14 at F = 1).

## Glass Identification

The patent defines n as the d-line index. The table gives catalog equivalents by index and Abbe number; the supplier of the production glass is not established.

| Element | Patent nd / νd | Catalog equivalent | Catalog nd / νd | Type |
|---|---|---|---|---|
| L1 | 1.50977 / 61.9 | none found | — | Crown |
| L2 | 1.71736 / 29.5 | SF1 (SCHOTT) | 1.71736 / 29.51 | Dense flint |
| L3 | 1.48749 / 70.0 | none within 0.15 in νd (S-FSL5, OHARA: 1.48749 / 70.24) | — | Fluor crown, FK5 type |
| L4 | 1.72916 / 54.8 | S-LAL18 (OHARA) | 1.72916 / 54.68 | Lanthanum crown |
| L5 | 1.76200 / 40.3 | NBFD5 (HOYA) | 1.76200 / 40.26 | Lanthanum flint |

Each group is achromatized on its own: in the positive front group two low-index crowns (L1, L3) surround one dense flint (L2); in the negative rear group the negative lanthanum crown L4 is paired with the positive lanthanum flint L5. The patent prints no partial dispersions, and Fig. 2(b) plots spherical aberration in d, g and C light only. L2, L4 and L5 trace on their catalog dispersion curves; L1 and L3 on the printed index and Abbe number alone.

## Focus Mechanism and Image Plane

The patent names no focusing group or movement and prints the infinity state only, so no gap varies and the focus control stays at infinity. Asahi gives a minimum focus of 18 ft (5.5 m) for the retail lens; that state is not modeled.

The patent prints no back focus. The final gap is the computed paraxial back focus, 74.838 mm, the same 74.84 mm that the PhotonsToPhotos transcription gives.

## Aperture Stop and Clear Apertures

The patent neither prints nor draws a stop. The model follows the PhotonsToPhotos reconstruction and places it 82 mm behind S6 and 29 mm ahead of L4, inside the printed 111 mm air space, whose total is unchanged. Its radius, 15.20 mm, is set by the paraxial entrance pupil at f/4 (37.50 mm radius); PhotonsToPhotos lists a 30.98 mm stop diameter, 1.9 % larger. The aperture scale runs to f/22, as in Asahi's specification.

The patent prints no semi-diameters either. The model uses the PhotonsToPhotos clear diameters: 75.15 mm for L1, 68.29 mm for L2, 67.55 mm for L3 and 22.08 mm for both rear elements. Read at its axial scale, Fig. 1 draws L1 70.6 mm across, L2 and L3 65 mm and L4 and L5 22 mm. The rear pair matches the figure within 1 %. The front three are drawn 4 to 6 % smaller than the wide-open on-axis beam needs (37.50 mm radius at S1, 34.10 mm at S3, 33.68 mm at S5), so the model keeps their rims just outside that beam. The figure is a patent schematic, so these readings are approximate.

The small rear group cuts the oblique beam. Wide open, the model passes 77 % of the beam at 2.1° and 39 % at the 4.1° corner of the 35 mm frame.

## Model Scope and Limitations

| Quantity | Patent, F = 1.0 | Patent × 300 | Model |
|---|---|---|---|
| Focal length | 1.0 | 300 | 300.022 |
| F-number | 1:4 | f/4 | f/4.00 |
| Half-field | 4.5° | 4.5° | 4.5° |
| Telephoto ratio | 1.27 | 1.27 | 1.271 |
| Back focus | not printed | — | 74.838 paraxial |
| Petzval sum | −0.219 | — | −0.219 at F = 1 |

- The prescription is the patent's, not a confirmed factory one, and the link to the production lens is probable, not documented by Asahi.
- R3 follows Table I's negative sign, not the claim table's positive one.
- Stop position and all clear apertures come from the PhotonsToPhotos reconstruction, not from the patent.
- The image plane is the computed paraxial back focus.
- The model is static at infinity and says nothing about performance at 5.5 m.
- The patent's ±4.5° field reaches 23.6 mm of image height, beyond the 21.6 mm corner of the 35 mm frame.
- Behavior away from the d-line rests on catalog curves for L2, L4 and L5 and on the printed index and Abbe number for L1 and L3.

## Sources

- [US 3,502,394](https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/3502394), Table I, claim, Figs. 1–2 and Tables II–III.
- [PhotonsToPhotos Optical Bench, US 3,502,394](https://www.photonstophotos.net/GeneralTopics/Lenses/OpticalBench/Data/US003502394_Example01P.txt): product association, stop position and clear apertures.
- [Asahi Spotmatic II instruction manual, lens table](https://audio.manualsonline.com/manuals/mfg/pentax/spotmatic_ii.html?p=33): elements, angle of view, minimum aperture, minimum focus and weight.
- [lens-db, Asahi Super-Takumar 300mm F/4](https://lens-db.com/asahi-super-takumar-300mm-f4-1965): construction, diaphragm, filter thread, introduction year and earlier versions.
- [Pentax Forums, Takumar 300mm F4](https://www.pentaxforums.com/lensreviews/Takumar-300mm-F4-1958.html): the three- and four-element predecessors.
- [Cine Lens Wiki, SMC Pentax 300mm f/4](https://cinelenswiki.com/lens:pensmc300mmf4): construction of the 1975 K-mount lens.
