## Patent Reference and Design Identification

**Patent:** [RU 2592746 C1](https://patents.google.com/patent/RU2592746C1/en)
**Application Number:** 2015110965
**Filed:** 27 March 2015
**Published:** 27 July 2016
**Inventor:** Vladimir Aleksandrovich Bogdankov
**Assignee:** PJSC Krasnogorsky Zavod named after S. A. Zverev (the front page prints the company's earlier legal form, OAO)
**Title:** High-aperture lens (Светосильный объектив)
**Example details:** Table 2, printed p. 6; spectral weights in Table 1; MTF plots in Figs. 2–5. Native dimensions in millimetres, without scaling.

RU 2592746 C1 contains one worked example, the prescription of Table 2. The patent presents it as a fast objective for reflex cameras of APS-C format (25.5 × 18.6 mm), calculated for a focal length of 50 mm and a relative aperture of 1:1.2, with a back focus of at least 39 mm. The listed characteristics of the calculated design are f′ = 51.478 mm, entrance pupil diameter 41.05 mm, back focus S′ = 39.777 mm and system length 119.577 mm. [1, pp. 4–6]

The example agrees with the KMZ Zenitar 1.2/50 S on several independent points:

1. **Construction.** Table 2 has eight elements in seven groups, all spherical. The maker's booklet lists 7 groups and 8 elements. [2]
2. **Format and mounts.** The patent is written for APS-C reflex cameras and names the Nikon F mount; the product is an APS-C lens sold in Canon EF and Nikon F mounts. [1, p. 6] [2]
3. **Focal length and aperture.** The patent's nominal 50 mm and 1:1.2 are the product's marked values.
4. **Field.** The maker gives an angular field of 32°. The patent's MTF plots run to an image height of 14.15 mm, which is 30.7° across the diagonal at the design focal length.
5. **Maker and designer.** The patent belongs to the Krasnogorsk plant that builds the lens.

This is a strong correlation, not a statement from the maker. No KMZ document seen here says that Table 2 is the production prescription, and the maker's booklet prints no section drawing to compare. The patent has no other example. A public section drawing of the lens shows the same element shapes, cemented pair and stop position. [3]

## Optical Architecture

The design is a double-Gauss derivative with a long back focus. The patent divides it into two components separated by the aperture stop. Component I is three single elements: a plano-convex positive, a positive meniscus and a negative meniscus, all convex to the object. Component II is a cemented negative meniscus (a negative and a positive element) concave to the object, a positive meniscus concave to the object, a plano-convex positive with its curved face to the image, and a plano-convex positive with its curved face to the object. [1, p. 5]

Against the earlier design it cites as closest (RU 2431165, back focus 33.32 mm), the patent claims the plane front face of the first element, an all-single front component, the added plano-convex element behind the stop and the plane last surface. The stated result is a back focus long enough for reflex cameras, with better resolution and simpler manufacture. [1, pp. 4–5]

There are no aspherical surfaces. Three of the sixteen surfaces are plane.

## Element-by-Element Analysis

Focal lengths are for each element alone in air, computed from the Table 2 radii and thicknesses with the e-line indices given under Glass Identification. The roles are a reading of the prescription and of the patent's own description, not measured aberration contributions.

### L1 — Plano-Convex Positive, Convex to Object

TK21, ne = 1.659961, νe = 50.81. R = +77.62 / plane, thickness 8.1 mm, f = +117.61 mm.

The front collector. Its rear face is plane, one of the features the patent claims.

### L2 — Positive Meniscus, Convex to Object

TK21. R = +39.72 / +85.11, thickness 8.7 mm, f = +104.86 mm.

The second positive element of the front component. It continues the convergence begun by L1 with a meniscus bent toward the stop.

### L3 — Negative Meniscus, Convex to Object

LF5, ne = 1.578326, νe = 41.05. R = +157.4 / +18.7, thickness 4.25 mm, f = −37.11 mm.

The negative element in front of the stop. Its steep rear surface, 10.2 mm ahead of the stop, is the front half of the Gauss pair of concave surfaces facing the stop.

### D1: L4 + L5 — Cemented Negative Meniscus, Concave to Object

L4: TF10, ne = 1.813767, νe = 25.17. R = −18.45 / −2443, thickness 2.5 mm, f = −22.86 mm.
L5: TK21. R = −2443 / −29.79, thickness 7.85 mm, f = +45.64 mm.
Doublet focal length −62.79 mm.

The front surface, 8 mm behind the stop, mirrors the rear of L3. The cemented interface is nearly plane (R = −2443 mm) and joins a dense flint to a crown of much lower dispersion, so it works mainly on colour.

### L6 — Positive Meniscus, Concave to Object

TK21. R = −105.44 / −42.46, thickness 6.5 mm, f = +103.47 mm.

The first of three positive elements that bring the beam back to convergence behind the doublet.

### L7 — Plano-Convex Positive, Convex to Image

TK14, ne = 1.615506, νe = 60.34. R = plane / −45.19, thickness 7.8 mm, f = +73.42 mm.

The element the patent adds behind the second lens of the rear component, compared with the earlier design.

### L8 — Plano-Convex Positive, Convex to Object

TK14. R = +58.34 / plane, thickness 5.65 mm, f = +94.78 mm.

The last element. Its plane rear face sits 39.777 mm from the image. The patent notes that its clear diameter does not exceed 36.1 mm, which lets the lens fit reflex mounts including Nikon F. [1, p. 6]

## Glass Identification

Table 2 prints glass names only: ТК-21, ЛФ-5, ТФ-10 and ТК-14 (TK21, LF5, TF10, TK14). It gives no refractive indices or Abbe numbers. These are Russian GOST glass types; the Russian LF5 is not the Schott glass of the same name.

| Glass | Elements       | ne       | νe    |
| ----- | -------------- | -------- | ----- |
| TK21  | L1, L2, L5, L6 | 1.659961 | 50.81 |
| LF5   | L3             | 1.578326 | 41.05 |
| TF10  | L4             | 1.813767 | 25.17 |
| TK14  | L7, L8         | 1.615506 | 60.34 |

The numbers in the data file are catalogue values for the mercury e line (546.07 nm), not patent values. The e line is chosen because Table 1 of the patent gives the wavelength 0.54607 µm the weight 1, with six other wavelengths from 0.43 to 0.67 µm weighted lower. The choice is supported by the result: with the e-line values the model gives a focal length of 51.4744 mm and a back focus of 39.7777 mm against the printed 51.478 and 39.777 mm, while the d-line values of the same glasses give 51.492 and 39.794 mm.

Catalogue values are nominal. The actual melts used for the calculation or in production are not known.

## Focus Mechanism

The patent gives one state, an object at infinity, and no moving group or close-focus spacing. The model is therefore infinity only. The production lens focuses manually to 0.45 m. [2]

## Stop, Clear Apertures and Image Plane

**Printed.** The stop is row 7 of Table 2, 10.2 mm behind L3 and 8 mm ahead of L4, with a clear diameter of 25.1 mm. Table 2 also prints a clear diameter for every lens surface, and the model's semi-diameters are those values divided by two. The last gap is the printed 39.777 mm. Nothing in the prescription is inferred except the glass indices described above.

**Aperture.** The printed diameters do not pass the stated 1:1.2. The 25.1 mm stop corresponds to a paraxial f/1.30, and a real axial ray fills it at about f/1.265. An axial beam of f/1.2 would be cut at surfaces 5, 6, 8, 9 and 16, and the stated 41.05 mm entrance pupil (f/1.254) at surfaces 8 and 9. The model keeps the printed stop and diameters, so its design f-number is 1.30 beside the marked 1.2. The patent's own figures are left as printed and the difference is not corrected.

**Image plane.** The paraxial back focus is 39.7777 mm, so the printed gap is in focus. On-axis longitudinal spherical aberration at f/1.30 is +0.010, +0.007, −0.012 and −0.021 mm at pupil zones 1, 0.85, 0.7 and 0.5.

**Field.** The chief ray reaches both the 14.15 mm image height of the patent's plots and the 15.78 mm half-diagonal of its stated 25.5 × 18.6 mm format. Off-axis vignetting is heavy: at 14.15 mm the printed diameters cut up to about 65 % of the beam on one side, mainly at the rear elements. This comes from the patent's diameters, not from estimated rims.

## Sources

1. RU 2592746 C1, "Светосильный объектив", OAO Krasnogorsky Zavod im. S. A. Zvereva, published 27 July 2016. [Google Patents](https://patents.google.com/patent/RU2592746C1/en)
2. KMZ, Zenitar 1.2/50 S booklet. [zenit.photo](https://www.zenit.photo/upload/iblock/6fa/mhqrzfb5z0a1c4lpowi5pyq8bg32lxy9/booklet_lens_zenitar_1_2_50s_eng.pdf)
3. allphotolenses.com, Zenitar 1.2/50 section drawing. [Image](http://allphotolenses.com/public/files/optical/607d6d9a455a68ed6400d0a40e094bee.gif)
