# CARL ZEISS JENA ORTHOMETAR 100mm f/4.5 (US 1,792,917 Design)

## Patent Reference and Design Identification

**Patent:** US 1,792,917, *Photographic Objective*  
**Application Number:** Serial No. 221,592  
**Filed:** September 23, 1927 (German priority September 28, 1926)  
**Granted:** February 17, 1931  
**Inventor:** Willy Merté  
**Assignee:** Carl-Zeiss-Stiftung (the patent reads "the firm Carl Zeiss, of Jena")  
**Example details:** one numerical example, given both in the text table and on the drawing sheet, for a focal length of 100 units

The patent contains a single numerical example and a single figure. The data file stores that example as printed: ten radii with their signs, six glass thicknesses, two air spaces, the two distances from the diaphragm to the neighbouring surfaces, and a refractive index nD and Abbe number ν for each of three glasses. The text table and the lettering on the drawing sheet agree in every value. The patent states that the objective "sharply covers at a relative aperture of 1:4.5 an image field of 65°", and that each half may also be used on its own.

The link to the Orthometar is at the level of the lens family, not of a production prescription. The patent's construction, two cemented outer pairs and two inner air-spaced menisci around a central diaphragm, is the Orthometar type. Wikimedia Commons carries a redrawing of this patent's figure under the title "Merté US1792917A (Orthometar, 1927)", and its general diagram of the Orthometar type shows the same layout. Zeiss sold lenses under that name at f/4.5, among them a 35 mm f/4.5 Orthometar for the Contax from 1937. The patent itself does not use the name, and no maker's publication of a production prescription was found to compare against, so the 100-unit example cannot be tied to one catalogue lens.

## Optical Architecture

The objective is an unsymmetrical double objective of six elements in four groups, with the power order negative, positive, diaphragm, positive, negative when counted by group. Each half consists of a cemented pair on the outside, made of a biconvex and a biconcave element, and a single positive meniscus on the inside that faces the diaphragm with its concave side. The two halves resemble each other but are not identical; the front half is slightly longer and its radii differ from the rear half's by a few percent.

The patent's claim rests on how the two halves correct astigmatism. Each half is described as tested alone, with parallel light entering from the meniscus side through a small diaphragm placed there. At larger field angles the sagittal and tangential image points of one half then lie in the opposite order to those of the other half, so that the two halves compensate each other when combined. The patent presents this as the means of getting a good correction over a large field.

The computed focal length of the printed table is 100.15, the back focus is 86.74 and the length from the first to the last surface is 30.33.

## Element-by-Element Analysis

### L1 / Element I — Biconvex Positive, Front Cemented Pair

nD = 1.61087, ν = 55.8. Glass: dense barium crown class. f = +33.9 mm.

The front element carries most of the positive power of the front half. Its strongly curved first surface (r1 = +25.90) and weak cemented surface (r2 = −96.10) keep the cemented interface nearly flat, so the pair's chromatic correction comes mainly from the difference in dispersion and little from interface curvature.

### L2 / Element II — Biconcave Negative, Front Cemented Pair

nD = 1.53994, ν = 47.4. Glass: extra-light flint class. f = −28.4 mm.

Cemented behind L1, this element has the lower index and the higher dispersion of the pair. Its deep rear surface (r3 = +18.41) faces the first meniscus across an air space of only 0.75. Taken together, L1 and L2 form a weak negative component, f = −557 mm.

### L3 / Element III — Positive Meniscus, Concave Toward the Diaphragm

nD = 1.56064, ν = 61.1. Glass: barium crown class. f = +115.9 mm.

The meniscus is convex toward the object (r4 = +23.78, r5 = +35.54). Its front surface is flatter than the surface r3 it follows, so the thin air space between them narrows toward the rim, and the two surfaces would touch at a height of about 10 mm. That geometry limits how large this element can be.

### L4 / Element IV — Positive Meniscus, Concave Toward the Diaphragm

nD = 1.56064, ν = 61.1. Glass: the same barium crown as L3. f = +113.8 mm.

The mirror counterpart of L3 behind the diaphragm (r6 = −33.12, r7 = −22.74), with nearly the same focal length. The air space behind it is 1.57, about twice that of the front half.

### L5 / Element V — Biconcave Negative, Rear Cemented Pair

nD = 1.53994, ν = 47.4. Glass: the same extra-light flint as L2. f = −27.0 mm.

The counterpart of L2. Its front surface (r8 = −18.14) faces the rear meniscus, and its rear surface (r9 = +77.38) is cemented to L6.

### L6 / Element VI — Biconvex Positive, Rear Cemented Pair

nD = 1.61087, ν = 55.8. Glass: the same dense barium crown as L1. f = +31.9 mm.

The rear element closes the system with r10 = −25.37. With L5 it forms a weak negative component, f = −682 mm.

## Glass Identification and Selection

The patent prints three glasses, each used twice in mirror positions, and gives an index nD and an Abbe number ν for each. It names no glass maker and no catalogue numbers.

| Elements | nD | ν | Class |
| --- | --- | --- | --- |
| I and VI | 1.61087 | 55.8 | Dense barium crown |
| II and V | 1.53994 | 47.4 | Extra-light flint |
| III and IV | 1.56064 | 61.1 | Barium crown |

The data file stores the printed values with the sodium D line as the index reference. None of the three glasses matches a current catalogue glass closely enough to take its name, so each is labelled with its printed values only. The class names in the table are a reading of the printed numbers, not statements from the patent. In each cemented pair the positive element has the higher index and the lower dispersion, which is the arrangement of the "new achromat" that allows a flat field together with colour correction.

## Focus Mechanism

The patent gives data for an object at infinity only and describes no focusing arrangement. The data file is an infinity-only model; an objective of this kind would be focused by moving the whole lens.

## Printed and Inferred Values

Printed in the patent and stored unchanged: all radii, thicknesses and air spaces; the diaphragm position, 2.90 behind r5 and 2.80 in front of r6; nD and ν; the relative aperture 1:4.5; the 65° field.

Inferred for the model:

- **Back focus.** The patent prints none. The image plane is placed at the computed paraxial image distance, 86.7413 behind the last surface.
- **Diaphragm opening.** A radius of 9.24 mm, the value that gives f/4.5 at the computed focal length.
- **Clear diameters.** The patent prints none, so every semi-diameter is an estimate that follows the proportions of the drawing. The drawing shows the outer pairs about 1.26 times as tall as the menisci, each pair square-rimmed with a bevel down to the flint face that meets the meniscus, and that flint face ending at about the meniscus rim height. Drawn to the table's axial scale, every element is about 9 % smaller than the f/4.5 axial beam needs, so the beam sets the overall size. The inner menisci and the faces next to them are the smallest that pass it: 9.8 mm on r3 and r4, 9.4 mm on r5, 9.2 mm on r6, 9.4 mm on r7 and 9.5 mm on r8. The outer pairs are set to 12 mm in the drawing's proportion. At 9.8 mm the air space between r3 and r4 has almost closed, so those rims are near the largest the printed geometry allows.

With these rims the full f/4.5 axial beam passes. At the edge of the stated field, 32.5° off axis, the central ray passes every surface, and about half of the beam's width is cut off at the outer pairs, leaving about 35 % of the axial illumination by geometric vignetting alone. The patent prints no diameters, so that amount of corner darkening is a property of the estimated rims, not a statement from the patent.

## Model Scope and Limitations

| Quantity | Patent | Model |
| --- | --- | --- |
| Focal length | 100 | 100.15 |
| Relative aperture | 1:4.5 | f/4.5 |
| Image field | 65° | central ray passes to 32.5° off axis |
| Back focus | not printed | 86.74 |
| First to last surface | 30.33 (sum of printed values) | 30.33 |

The focal length of the printed table is 0.15 % longer than the nominal 100, which is within what the table's rounding to two decimals explains. The longitudinal spherical aberration computed from the printed values is +0.29 mm for the marginal ray at f/4.5 and reaches −0.62 mm at 70 % of the aperture: the margin is brought close to the paraxial focus and a zonal residual remains, as expected for a corrected design of this date. Nothing in the table suggests a misprint.

The model covers infinity focus only. Its clear diameters and its corner illumination are estimates, as set out above, and it carries no image format, because the patent states a field angle and no film size.

## Sources

- US 1,792,917, *Photographic Objective*, Willy Merté, assignor to the firm Carl Zeiss, Jena; granted February 17, 1931. Text table and drawing sheet.
- Wikimedia Commons, "Merté US1792917A (Orthometar, 1927)" (redrawing of the patent figure) and "Orthometar.jpg" (general diagram of the Orthometar type): https://commons.wikimedia.org/wiki/File:Orthometar.jpg
- Pacific Rim Camera, Photographica Pages, Contax 35 mm f/4.5 Orthometar (introduced 1937): https://pacificrimcamera.com/pp/zicontax35orth4.htm
