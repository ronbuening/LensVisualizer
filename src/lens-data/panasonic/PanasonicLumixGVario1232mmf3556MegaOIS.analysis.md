## Patent Reference and Design Identification

**Patent:** US 2015/0097989 A1  
**Application Number:** US 14/227,257  
**Filed:** March 27, 2014  
**Published:** April 9, 2015  
**Priority:** October 7, 2013, JP 2013-210322  
**Inventors:** Hideki Kai, Takahiro Kitada, Takuya Imaoka  
**Applicant:** Panasonic Corporation  
**Title:** Zoom Lens System, Interchangeable Lens Apparatus and Camera System  
**Example details:** Tables 4–6, Figures 3–4, paragraphs 0085–0091; corroborating Japanese tables in JP 6355076 B2.

The Lumix G Vario 12–32 mm f/3.5–5.6 ASPH. MEGA O.I.S. (H-FS12032) is the compact Micro Four Thirds kit lens introduced with the Lumix GM1 in October 2013. The patent names no product, and two of its three examples share the production layout, so the correlation with Numerical Example 2 is qualified rather than certain:

1. **Construction.** Panasonic's VQT5D06 manual gives 8 elements in 7 groups with 3 aspherical elements and 1 ED element, and its construction drawing places the aspheres at L2, L4 and L7 and the ED element at L6, cemented to L5. Example 2 has this arrangement, with both faces of L2, L4 and L7 aspherical (¶0085–¶0088). Example 1 shares it; Example 3 adds aspheres on L8 and so has four aspherical elements.
2. **Focal length.** Example 2 spans 12.48–30.72 mm. Its tele end is 4 % short of the marketed 32 mm, close to the gap seen in other Panasonic zoom patents in this catalog (57.78 mm for the 12–60 mm, 290.31 mm for the 100–300 mm). Example 1 stops at 28.80 mm (10 % short) and Example 3 reaches 34.38 mm.
3. **Format and aperture.** Image height is 10.815 mm at every zoom position, the Four Thirds half-diagonal; the printed F-numbers 3.62–5.84 correspond to the marketed f/3.5–5.6.
4. **Focus and stabilization.** G3, the single element L7, focuses by moving toward the image (¶0091), and the whole of G2 (L4–L6) shifts across the axis to compensate image blur (¶0087), matching the MEGA O.I.S. specification.
5. **Timing.** The Japanese priority date, October 7, 2013, is ten days before the lens was announced.

The model uses Table 6 as printed: focal lengths **12.4800 / 19.5303 / 30.7200 mm**, F-numbers **3.62286 / 4.70493 / 5.83562**, half view angles 44.92° / 29.98° / 19.14°. ¶0073 defines the middle position nominally as √(fW·fT), which would be 19.58 mm; the table's 19.5303 mm is the value the prescription reproduces (it traces to 19.5307 mm).

## Optical Architecture

Four groups of negative–positive–negative–positive power hold eight elements in seven groups. The 0.010 mm adhesive layer between L5 and L6, printed as surface 11, is not a ninth element.

| Group | Elements                | Focal length (Table 6) | Function                                                          |
| ----- | ----------------------- | ---------------------: | ----------------------------------------------------------------- |
| G1    | L1–L3                   |           −17.05925 mm | Negative front group; zooms on a path convex to the image         |
| G2    | Diaphragm and L4–L6     |           +15.96962 mm | Positive zooming and stabilizing group; moves toward the object   |
| G3    | L7                      |           −22.57224 mm | Negative focusing group; zooms on a path convex to the object     |
| G4    | L8                      |           +31.52167 mm | Positive rear group, fixed relative to the image                  |

The stop is surface 7, 1 mm ahead of L4, and moves with G2. The table lists no cover glass: the last surface is followed directly by the printed BF.

G4 is fixed (¶0090), and the three printed BF values, 14.19915, 14.19920 and 14.19922 mm, differ by only 0.00007 mm; they are used as printed.

## Element-by-Element Analysis

### L1 — Negative Meniscus

nd = 1.90366, νd = 31.3. Glass: TAFD25 equivalent (Hoya catalog); supplier not stated. f = −16.8095 mm.

The front meniscus carries the largest share of G1's negative power ahead of the stop. Fig. 3 draws a stepped rim; the model uses an inferred 10 mm front rim and ends the deep rear surface at an 8.0 mm cut radius, with a flat land out to 9.3 mm as drawn, so the optical rear aperture is unchanged.

### L2 — Biconcave Negative Asphere

nd = 1.80755, νd = 40.9. Glass: Unmatched (no catalog glass with these values). f = −28.1316 mm.

Both faces are aspherical (¶0085). ¶0100 credits the aspherical L2 with correcting off-axis aberration at the wide-angle limit.

### L3 — Positive Meniscus

nd = 1.94595, νd = 18.0. Glass: FDS18 equivalent (Hoya catalog); supplier not stated. f = +28.5839 mm.

This positive meniscus partly offsets G1's negative power. Its very low Abbe number against the two negative elements (νd 31.3 and 40.9) points to color correction within G1; the patent does not discuss it, so this is an interpretation.

### L4 — Positive Meniscus Asphere

nd = 1.80755, νd = 40.9. Glass: Unmatched (no catalog glass with these values). f = +16.0803 mm.

The first element behind the stop has two aspherical faces (¶0086). It leads the positive G2, which ¶0101 describes as a positive–negative–positive triplet, and moves with L5/L6 both in zooming and in the stabilizing shift.

### L5–L6 — Cemented Negative/Positive Pair

L5: nd = 1.90366, νd = 31.3. Glass: TAFD25 equivalent (Hoya catalog). f = −8.9534 mm. L6: nd = 1.59282, νd = 68.6. Glass: FCD505 equivalent (Hoya catalog), ED class. f = +9.0298 mm.

¶0086 identifies the cemented pair and prints the adhesive as surface 11: a **0.010 mm layer with nd = 1.56732 and νd = 42.8** between two surfaces of radius +7.452 mm. The model keeps it as a separate layer. Panasonic's construction drawing marks L6 as the ED element, consistent with its nd/νd; the patent gives no partial dispersion.

The adhesive is modeled at its d-line index only, because the data format carries no dispersion for an undrawn layer. Chromatic ray display and polychromatic MTF are therefore unavailable for this lens; d-line analyses are unaffected.

### L7 — Biconcave Negative Asphere

nd = 1.54360, νd = 56.0. Glass: Unmatched (no catalog glass with these values). f = −22.5722 mm.

Both surfaces are aspherical in Example 2 (¶0088). This single element is G3, the focusing group. The patent calls G3 a resin element only in Examples 1 and 3 (¶0102) and gives no material for Example 2.

### L8 — Biconvex Positive

nd = 1.61800, νd = 63.4. Glass: PCD4 equivalent (Hoya catalog); supplier not stated. f = +31.5217 mm.

The rear element is spherical in this example and stays fixed relative to the image during zooming.

## Glass Identification and Selection

The patent prints nd and νd only and names no supplier. Five elements match Hoya catalog glasses at those values and carry their names as equivalents: TAFD25 (L1, L5), FDS18 (L3), FCD505 (L6, the ED element) and PCD4 (L8). L2 and L4 share nd 1.80755 / νd 40.9, and L7 has nd 1.5436 / νd 56.0; neither pair matches a catalog glass, so those elements use dispersion estimated from νd.

## Focus Mechanism

Inner focus: G3 (L7) moves toward the image to focus from infinity to a close object at every zoom position (¶0091). The patent prints no close-focus spacings, travel or object distance for this example, so the model is infinity-only and the focus control does not change the spacings.

Panasonic specifies a minimum focus distance of 0.2 m at 12–20 mm and 0.3 m at 21–32 mm, measured from the focus distance reference line; these are not modeled.

## Aspherical Surfaces

The source uses the standard conic form

$$z(h)=\frac{h^2/R}{1+\sqrt{1-(1+K)(h/R)^2}}+\sum A_nh^n.$$

The six aspherical surfaces are 3, 4, 8, 9, 14 and 15. The patent's κ is K in this equation, and the coefficients are used as printed.

| Surface |        K |          A4 |          A6 |          A8 |          A10 |         A12 |
| ------- | -------: | ----------: | ----------: | ----------: | -----------: | ----------: |
| 3       |        0 |  1.40550e−4 | −1.58941e−6 |  6.43519e−9 | −1.87697e−11 |           0 |
| 4       | 0.586836 |  1.15112e−4 | −1.97769e−6 |  6.16703e−9 | −4.93618e−11 |           0 |
| 8       |        0 |  3.20964e−6 |  2.93568e−6 | −1.57598e−7 |   3.09974e−9 |           0 |
| 9       |        0 |  8.54042e−5 |  2.80481e−6 | −1.72924e−7 |   3.57409e−9 |           0 |
| 14      |        0 | −2.30192e−4 |  9.60767e−6 | −1.56985e−7 |  9.91907e−10 |           0 |
| 15      |        0 | −1.70128e−4 |  7.65291e−6 | −8.80044e−8 |  −1.19460e−9 | 2.87826e−11 |

Coefficients are in millimetres. The aspheres are evaluated only out to the inferred semi-diameters.

## Image Stabilization

The whole of G2 (L4–L6) moves perpendicular to the axis to compensate image blur (¶0087); Panasonic markets this as MEGA O.I.S. ¶0101 notes that the compact triplet form of G2 also keeps the stabilizing actuator small. The model keeps G2 centered; no decentering is simulated.

## Zoom Path and Model Limitations

The patent prints spacings only at the wide, middle and tele positions, and ¶0073 notes that the straight lines joining them in Fig. 3 are not the actual group paths. The model adds 30 interpolated positions between them: total length and focal length follow quadratics through the three printed positions, d6 and d13 are solved for that focal length and for focus at the interpolated BF, d15 closes the total length, and BF is interpolated between the printed values. Interpolating the three printed spacing rows directly would leave the intermediate positions out of focus by up to about 1.7 mm. The interpolated positions are not the production cam.

In this interpolation G1 moves on a path convex to the image and G2 moves steadily toward the object. With G4 fixed, d15 follows G3: it rises from 4.6258 mm to about 8.91 mm near 24.6 mm and falls back to the printed 8.3258 mm at tele, so G3 moves toward the object and returns by about 0.59 mm. All three paths match ¶0090, including G3's path convex to the object side, and the G3–G4 gap still grows from wide to tele overall.

The printed BF is kept at every position; the paraxial image of the printed prescription lies 0.0007 / 0.0011 / 0.0018 mm farther back at wide / middle / tele. The semi-diameters are inferred from Fig. 3 and are not factory clear apertures.

## Sources

- [US20150097989A1 original publication](https://patents.google.com/patent/US20150097989A1/en), Tables 4–6 and Figures 3–4.
- [JP6355076B2 corroborating publication](https://patents.google.com/patent/JP6355076B2/en), original Japanese prescription and motion wording.
- [Panasonic H-FS12032 operating instructions (VQT5D06)](https://help.na.panasonic.com/wp-content/uploads/2023/02/HFS12032_VQT5D06_ENG_FRE_ESP.pdf), construction and specifications.
- [Panasonic H-FS12032 construction drawing](https://latam.connect.panasonic.com/sites/default/files/styles/full_tablet/public/media/image/2026-01/lensfeatureglobal2-construction-hfs12032.jpg.webp), positions of the aspherical and ED elements.
