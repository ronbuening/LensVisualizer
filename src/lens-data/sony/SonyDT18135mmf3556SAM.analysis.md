## Patent Reference and Design Identification

**Patent:** [US 2013/0155294 A1](https://patents.google.com/patent/US20130155294A1/en)  
**Application Number:** 13/680,809  
**Priority:** JP 2011-278265, filed 20 December 2011  
**Filed:** 19 November 2012  
**Published:** 20 June 2013  
**Inventors:** Hideki Kai; Syuuji Maki  
**Applicant:** Sony Corporation  
**Title:** Zoom Lens and Image Pickup Unit  
**Example details:** Numerical Example 1, Tables 1–3 (PDF p. 17), Figs. 1A–1C; unscaled.

Example 1 is strongly correlated with the Sony DT 18-135mm F3.5-5.6 SAM (SAL18135), an APS-C zoom for the A-mount. The evidence converges:

1. Sony specifies 14 elements in 11 groups, with one ED glass element and two aspherical elements. Example 1 has 14 lenses in 11 air-separated groups. Its two aspherical surfaces sit on L21 and L42, each on a thin bonded layer, and L41 (nd 1.49700, νd 81.61) is its only low-dispersion fluor-crown glass.
2. Sony's construction diagram places the two aspherical elements in the L21 and L42 positions and the ED element in the L41 position.
3. The printed focal lengths are 18.56 / 50.01 / 130.89 mm at F/3.61 / 4.43 / 5.79, against the marketed 18–135 mm f/3.5–5.6. The printed full fields, 2ω = 78.1° / 30.9° / 12.2°, match Sony's APS-C angle of view of 76° to 12°.
4. At the wide end the front vertex is 128.54 mm from the image. Less the A-mount's 44.5 mm flange focal distance, about 84 mm of lens lies ahead of the flange, against Sony's 86.0 mm barrel length.
5. The patent describes the design as an interchangeable lens for a digital single-lens reflex camera with a zoom ratio of about 7 to 8.5 (¶0064). Example 1's ratio is 7.05.

Example 2 of the same patent has the same layout and the same zoom spacings, but it uses the 1.49700/81.61 glass in both L41 and L44 and different glasses in L32 and L33. That would be two ED elements, against Sony's one, so Example 1 is the closer match. Sony has not published the production prescription, so this is a strong correlation, not a certified match.

## Optical Architecture

The lens is a four-group positive–negative–positive–positive zoom (¶0026, ¶0080):

| Group | Lenses | Surfaces | Focal length (calculated) | Function |
| ----- | -----: | -------- | ------------------------: | -------- |
| G1 | 3 | 1–5 | +88.50 mm | Front positive group |
| G2 | 4 | 6–14 | −13.83 mm | Negative variator; the patent's example focusing group |
| G3 | 3 | 15–20 | +81.26 mm | Stop and positive relay group |
| G4 | 4 | 21–28 | +37.27 mm | Rear positive group with the ED lens and the second asphere |

All four groups move toward the object from wide to tele. D5 (G1–G2) widens from 2.02 to 42.45 mm, while D14 (G2–G3) narrows from 21.83 to 1.40 mm and D20 (G3–G4) from 8.00 to 1.00 mm (Table 3). With the image plane fixed, G1 travels 58.07 mm, G2 17.64 mm, G3 38.07 mm and G4 45.07 mm. G2 moves only 3.44 mm between the wide and middle stations and 14.20 mm from the middle to tele. The front vertex to image distance grows from 128.54 mm at wide to 154.44 mm and 186.61 mm.

The patent explains the motion group by group (¶0032–¶0034). At wide, the short D5 makes G1 and G2 act together as one negative front group, a retrofocus arrangement suited to the wide angle. At tele, the long D5 turns G1 and G2 into a telephoto pair. The change in D14 moves the off-axis bundle through G2 at different heights at the two ends, so on-axis and off-axis aberrations can be corrected separately. G3 and G4 are both positive, so changing D20 does little to the magnification but corrects field curvature.

The aperture stop is the first surface of G3 and moves with it (¶0027).

## Element-by-Element Analysis

The focal lengths below are calculated in air from each element's radii and centre thickness. Glass names are catalog equivalents matched by nd/νd; the patent names no supplier.

### L11 — Negative Meniscus

nd = 1.84666, νd = 23.78. Glass: FDS90 (HOYA) equivalent. f = −135.6 mm.

A dense-flint front meniscus, convex to the object and cemented to L12. It is the flint member of the front achromatic doublet.

### L12 — Positive Meniscus

nd = 1.72916, νd = 54.67. Glass: TAC8 (HOYA) equivalent. f = +91.5 mm.

The lanthanum-crown member of the front doublet, convex to the object. The doublet as a whole is weakly positive, f = +287.7 mm.

### L13 — Positive Meniscus

nd = 1.77250, νd = 49.62. Glass: TAF1 (HOYA) equivalent. f = +125.5 mm.

A lanthanum-crown meniscus that completes G1 and carries most of its remaining positive power.

### L21 — Hybrid Aspherical Negative Meniscus

Resin layer nd = 1.53420, νd = 41.73, 0.15 mm thick, Unmatched; f = −288.2 mm. Glass body nd = 1.83481, νd = 42.72. Glass: TAFD5F (HOYA) equivalent. f = −23.0 mm.

The strongest negative element of G2 and the first of the lens's two aspheres. Table 1 prints the 0.15 mm layer as its own medium in front of the glass body, and surface 6, the layer's object-side face, is aspherical. The patent does not name the layer material. A layer this thin, with a low index and an Abbe number near 42, is read here as a bonded resin layer forming a hybrid asphere. The model keeps the layer and the glass as separate media; the combined hybrid lens has f = −21.3 mm.

### L22 — Biconcave Negative

nd = 1.77250, νd = 49.62. Glass: TAF1 (HOYA) equivalent. f = −24.0 mm.

The second negative lens of G2, 6.07 mm behind L21.

### L23 — Biconvex Positive

nd = 1.84666, νd = 23.78. Glass: FDS90 (HOYA) equivalent. f = +21.9 mm.

An equiconvex lens (R = ±35.964 mm) and the only positive lens of G2. Its dense-flint glass balances the colour of the three negative lenses around it.

### L24 — Negative Meniscus

nd = 1.77250, νd = 49.62. Glass: TAF1 (HOYA) equivalent. f = −40.1 mm.

Concave to the object, it closes G2 1.73 mm behind L23.

### L31 — Negative Meniscus

nd = 1.83481, νd = 42.72. Glass: TAFD5F (HOYA) equivalent. f = −69.1 mm.

The front of the G3 cemented pair, convex to the object. The patent uses a glass of index 1.8 or more here so that the object-side radius, R31 = 28.265 mm, can stay long, which lowers the group's sensitivity to decentring (¶0038).

### L32 — Biconvex Positive

nd = 1.56384, νd = 60.83. Glass: N-SK11 (SCHOTT) equivalent. f = +25.1 mm.

The low-index partner of L31. The index step of about 0.27 at the cemented surface corrects aberration without adding a lens (¶0038). The pair together is positive, f = +40.0 mm.

### L33 — Negative Meniscus

nd = 1.83481, νd = 42.72. Glass: TAFD5F (HOYA) equivalent. f = −72.8 mm.

Convex to the image, it closes G3. The patent uses it to reduce G3's positive power and with it the relative sensitivity of G3 to G4 (¶0038).

### L41 — Biconvex Positive (ED)

nd = 1.49700, νd = 81.61. Glass: FCD1 (HOYA) equivalent, ED fluorophosphate class. f = +27.5 mm.

The 7.00 mm thick front lens of G4 and the strongest positive lens of that group. It sits in the position Sony's diagram marks as the lens's single ED element. The patent prints no partial dispersion, so its anomalous dispersion is inferred from the glass class.

### L42 — Hybrid Aspherical Negative Meniscus

Resin layer nd = 1.53420, νd = 41.73, 0.15 mm thick, Unmatched; f = +225.2 mm. Glass body nd = 1.83400, νd = 37.34. Glass: NBFD10 (HOYA) equivalent. f = −39.8 mm.

The second hybrid asphere, convex to the object, with the same layer material as L21. The patent states that an asphere on the object side of this negative lens improves the correction of on-axis aberration (¶0039). The combined hybrid lens has f = −48.6 mm.

### L43 — Negative Meniscus

nd = 1.51742, νd = 52.15. Glass: E-CF6 (HOYA) equivalent. f = −52.9 mm.

The front of the rear cemented pair, convex to the object.

### L44 — Biconvex Positive

nd = 1.48749, νd = 70.44. Glass: FC5 (HOYA) equivalent. f = +34.4 mm.

The last lens. With L43 it forms what the patent calls an achromatic lens, with a small index difference (0.030) and a large Abbe-number difference (18.29), to correct chromatic aberration at the telephoto end (¶0039). The pair is positive, f = +94.6 mm.

## Glass Identification and Selection

Table 1 gives d-line indices and Abbe numbers (¶0076). Every glass row matches a catalog glass: nine distinct glasses, eight of them HOYA glasses with the printed nd and νd within 0.01. The one exception, 1.56384/60.83, has no HOYA entry in the catalog and is matched to SCHOTT N-SK11 (νd 60.80). These are optical equivalents, not a statement of Sony's supplier.

| Glass | Printed nd | Printed νd | Elements | Role |
| ----- | -: | -: | -------- | ---- |
| FDS90 (HOYA) | 1.84666 | 23.78 | L11, L23 | Dense flint: front doublet flint, the positive lens of G2 |
| TAC8 (HOYA) | 1.72916 | 54.67 | L12 | Lanthanum crown of the front doublet |
| TAF1 (HOYA) | 1.77250 | 49.62 | L13, L22, L24 | Lanthanum crown for G1 and the G2 negatives |
| TAFD5F (HOYA) | 1.83481 | 42.72 | L21, L31, L33 | High-index lanthanum flint |
| N-SK11 (SCHOTT) | 1.56384 | 60.83 | L32 | Low-index crown in the G3 doublet |
| FCD1 (HOYA) | 1.49700 | 81.61 | L41 | ED fluorophosphate crown |
| NBFD10 (HOYA) | 1.83400 | 37.34 | L42 | High-index flint body of the second hybrid asphere |
| E-CF6 (HOYA) | 1.51742 | 52.15 | L43 | Low-index flint of the rear achromat |
| FC5 (HOYA) | 1.48749 | 70.44 | L44 | Fluor crown of the rear achromat |
| Unmatched resin | 1.53420 | 41.73 | L21, L42 layers | Hybrid asphere layers |

The chromatic strategy is concentrated in G4. L41 carries the rear group's strongest positive power in a low-dispersion glass, and the L43/L44 pair satisfies the patent's condition (5), |1/(f43·ν43) + 1/(f44·ν44)|, at 5.1 × 10⁻⁵, which the patent ties to the correction of axial colour at the telephoto end (¶0059). The resin layers have no catalog match and are traced with Abbe-number dispersion only.

## Focus Mechanism

The patent says the zoom lens focuses on a close object by moving, for example, G2 along the axis (¶0029). It prints no close-focus spacings, object distance or magnification, so the model is an infinity-focus prescription at three zoom stations and has no focus movement.

Sony specifies a 0.45 m minimum focus distance and a 0.25× maximum magnification, with autofocus driven by an in-lens SAM (Smooth Autofocus Motor).

## Aspherical Surfaces

Two surfaces are aspherical: surface 6 (model `6A`), the object-side face of the L21 layer, and surface 23 (model `23A`), the object-side face of the L42 layer. The patent's expression (¶0078) is

`x = c·y² / [1 + (1 − (1 + k)·c²·y²)^½] + A·y⁴ + B·y⁶ + C·y⁸ + D·y¹⁰ + E·y¹²`,

which is the engine's own convention, so K = k and A4…A12 = A…E.

| Coefficient | Surface 6 | Surface 23 |
| ----------- | --------: | ---------: |
| R | 98.407 mm | 43.493 mm |
| K | 1 | −3.15 |
| A4 | 1.728E−05 | −4.010E−05 |
| A6 | −1.468E−08 | −8.455E−08 |
| A8 | −4.855E−11 | −8.174E−10 |
| A10 | 7.204E−13 | 5.619E−12 |
| A12 | — | −2.246E−14 |

Surface 6 departs from its base sphere by about +0.16 mm at 10 mm height and +0.70 mm at its 14 mm rim. The extra sag adds positive surface power toward the edge of the strongly negative L21. A profile of this kind on the front of a wide-angle negative group usually controls barrel distortion and field curvature at the wide end; the patent does not state the purpose of this surface.

Surface 23 departs by about −0.21 mm at 8 mm and −0.46 mm at its 9.5 mm rim, flattening the face toward the edge. The patent ties this asphere to on-axis aberration (¶0039). At about 9.59 mm the sag stops increasing, which bounds the usable rim of this face.

Both aspheres are hybrid: the aspherical shape is carried by the 0.15 mm layer printed in Table 1, and the glass bodies are spherical. Sony counts the two hybrid lenses as its two aspherical elements.

## Conditional Expressions

Table 7 lists six conditional values for Example 1. Calculated from the prescription, they agree:

| No. | Expression | Table 7 | Calculated |
| --- | ---------- | ------: | ---------: |
| (1) | f3/f4 | 2.18 | 2.180 |
| (2) | ft/R31 | 4.6 | 4.631 |
| (3) | (R35 + R31)/(R35 − R31) | 0.17 | 0.165 |
| (4) | f4r/f4 | 2.54 | 2.538 |
| (5) | \|1/(f43·ν43) + 1/(f44·ν44)\| | 5.1E−05 | 5.06E−05 |
| (6) | ft/ΔX1 | 2.26 | 2.254 |

Here f4r is the focal length of the L43/L44 cemented pair and ΔX1 the travel of G1 from wide to tele (¶0054, ¶0061). The patent states that both examples satisfy every expression (¶0086).

## Model Scope and Limitations

- The traced focal lengths are 18.564 / 50.040 / 130.997 mm, within 0.08% of the printed values, and the stop radius at each station is set from the printed f-number.
- Table 1 leaves the last gap blank, and the patent prints no back focus or image height. The back focus here, 38.532 / 59.395 / 83.601 mm, is the paraxial image distance of the printed prescription. No cover glass or filter is listed, so the back focus is in air.
- The patent's half-angles, traced as real chief rays, reach Y = 14.20 / 14.23 / 14.24 mm, so the printed field corresponds to a 28.4 mm image circle, the APS-C format.
- No clear apertures are published. The semi-diameters are inferred, and the outer rims agree with the Fig. 1A section to within about 6%. Fig. 1A draws flat lands outside the curved faces of L21 (rear), L22 (both faces) and L42 (rear), and the diagram draws them too; they carry no light. Surfaces 8 and 18 stop where the facing surfaces close to about a tenth of their axial gap, L33 is square-cut at 9.0 mm as drawn, and surface 23 stays inside the radius where its sag turns over.
- At the wide-end corner, the inferred rims vignette the off-axis bundle, mostly at the rear of G1 (surfaces 4–5, up to about 60% of one side of the bundle) and at the front of G4 (about a third). This is the usual behaviour of a compact 18–135 mm zoom and is not a transcription defect.
- The model is infinity-only; the close-focus behaviour of G2 is not represented.
- Between the three printed stations the zoom spacings are interpolated linearly; intermediate stations are not published.
- The two resin layers have no catalog material and use Abbe-number dispersion. The glass bodies use catalog dispersion curves.

## Sources

1. [US 2013/0155294 A1](https://patents.google.com/patent/US20130155294A1/en), Numerical Example 1, Tables 1–3 and 7, Figs. 1A–1C; Numerical Example 2, Tables 4–6.
2. [Sony Japan, DT 18-135mm F3.5-5.6 SAM features](https://www.sony.jp/ichigan/products/SAL18135/feature_1.html): lens construction, ED and aspherical element counts, SAM drive, minimum focus distance, maximum magnification, filter size, dimensions and weight.
3. [Sony Japan lens construction diagram for the SAL18135](https://www.sony.jp/products/picture/y_SAL18135_comosition.jpg).
4. [Sony Japan, DT 18-135mm F3.5-5.6 SAM specifications](https://www.sony.jp/ichigan/products/SAL18135/spec.html): construction (11 groups, 14 elements), APS-C angle of view 76°–12°, minimum aperture f/22–36, seven aperture blades, 0.45 m minimum focus, 0.25× magnification, 62 mm filter, 76.0 × 86.0 mm, 398 g.
