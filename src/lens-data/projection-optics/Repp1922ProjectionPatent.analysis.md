# REPP 100mm f/2.2 PROJECTION LENS — US 1,415,002 A

## Patent Reference and Design Identification

**Patent:** US 1,415,002 A, *Projection Lens*  
**Application Number:** Serial No. 411,772  
**Filed:** September 21, 1920  
**Granted:** May 2, 1922  
**Inventor:** William H. Repp  
**Assignee:** Projection Optics Company, Inc. (Rochester, New York)  
**Example details:** sole numerical example; table on specification page 2, lines 12–17, repeated on the drawing sheet with a full-size section; F = 100 mm, F/2.2

The patent describes a projection objective derived from the Petzval portrait lens. Its stated aim is economy in manufacture rather than a new correction scheme: the four lenses use only two different curved radii, 57.111 mm and 38.314 mm, plus three plano surfaces. The 57.111 mm curve appears four times (both faces of the crown in the cemented pair, the front of the flint meniscus and the front of the rear crown). The stronger 38.314 mm curve is used once. Because plano surfaces are common to every focal length, the patent argues that each new step in a series of projection focal lengths needs only two new curves while the corrections carry over.

The model transcribes the single worked example at its printed scale. The specification states a 100 mm equivalent focal length and a relative aperture of F/2.2. The drawing sheet repeats the same radii, thicknesses and glass table under the note "Equivalent Focal Length 100 mm".

The link to a production lens is weak. Projection Optics Company was founded in Rochester in 1918 by Repp and two former Crown Optical colleagues, and it made projection lenses until Beseler bought it in 1958. A 2025 history of the company by Delta Lenses suggests that this design "might have been used" for the firm's early Pro-Jex series of theatre projection lenses, and that the series was likely designed around the patent's F/2.2 speed. No catalogue, construction diagram or measured lens confirms that link, so this file is a patent reference without a documented production match. The company's better-known Super-Lite series of 1923 followed a different Repp design, US 1,479,251, with two cemented doublets.

## Optical Architecture

The lens is a four-element, three-group Petzval-type objective with positive power in both halves:

1. A cemented front pair: an equiconvex crown (I) cemented to a plano-concave flint (II). Its focal length is +135.86 mm, 1.359 F, against the patent's "approximately 1.36 times".
2. A long air space of 28.094 mm.
3. A rear pair of separate lenses: a strongly curved negative flint meniscus (III) and a plano-convex crown (IV), 5.595 mm apart. Together they have a focal length of +242.43 mm, 2.424 F, against the patent's "about 2.42 times".

The patent says the front pair is corrected by itself for spherical aberration and colour. The weaker rear pair is also achromatized by itself, and its lens shapes and separations correct the whole system for spherical aberration, coma and flatness of field. The text adds that the glasses and shapes allowed the first air space to be shortened from 46.6 mm in Petzval's original to about 28.2 mm. The table and the drawing both print 28.094 mm, which the model uses.

The patent places the screen to the left and the film at the right-hand focal plane. The model follows that orientation: parallel light from the screen side comes to focus on the film plane, the reverse of the projection direction. The track from the first to the last vertex is 58.229 mm, and the computed paraxial back focus of 61.622 mm makes the distance from the first vertex to the image plane 119.851 mm. The patent prints no back focus.

No stop is printed or drawn. A projection lens of this type normally works at full aperture with no iris. The model places an iris plane in the middle of the first air space, 14.047 mm from each lens, sized for F/2.2 (18.45 mm radius). The F/2.2 axial beam, 45.45 mm across at the entrance pupil, fills the front lens almost to its rim. In the physical lens, the front cell would therefore set the aperture.

## Element-by-Element Analysis

The table prints the radii without signs. The signs in the data file follow the drawing and the text: lens I is described as equiconvex, II as plano-concave, III as a "convex concavo" negative meniscus and IV as "convex plano". With these signs the model reproduces the printed focal length and both stated component ratios. The axial spherical aberration at F/2.2 also stays below 0.3 mm across the pupil, as expected for a corrected projection objective. Reversing the curvature of the rear pair would give a 189 mm system.

### L1 / Lens I — Biconvex Positive (equiconvex)

`nd = 1.5160, νd = 63.8.` Glass: crown, patent index and V only. `f = +57.18 mm`.

Lens I carries the front pair's positive power. Both faces have the common 57.111 mm radius, so the element is symmetric and is ground with a single tool. Its edge thickness at the 23 mm rim is 1.13 mm, consistent with the thin edge in the drawing.

### L2 / Lens II — Plano-Concave Negative

`nd = 1.6182, νd = 36.4.` Glass: flint, patent index and V only. `f = −92.38 mm`.

Lens II is cemented to lens I on the shared 57.111 mm surface. Its rear face is plano. The concave cemented interface, with an index step of about 0.10, corrects the colour and spherical aberration of the front pair. Together with lens I it gives the +135.86 mm front component.

### L3 / Lens III — Negative Meniscus

`nd = 1.6182, νd = 36.4.` Glass: flint, the same as lens II. `f = −201.14 mm`.

Lens III is the "very pronounced negative meniscus" of the text. Both faces bow toward the screen: the front face has the common 57.111 mm radius and the rear face the stronger 38.314 mm radius. It is only 3.141 mm thick on the axis but 5.98 mm at the rim. With the following air space it supplies the rear group's correction of field curvature and coma.

### L4 / Lens IV — Plano-Convex Positive

`nd = 1.5160, νd = 63.8.` Glass: crown, the same as lens I. `f = +110.68 mm`.

Lens IV is a simple plano-convex crown with its 57.111 mm face toward the screen and its plano face toward the film. The air space between III and IV is 5.595 mm on the axis and 2.76 mm at the rim. The patent notes that it uses different separations in other versions, depending on whether flatness of field or a short overall length matters more.

## Glass Identification and Selection

The patent uses only two glasses. It gives each by its index for the sodium yellow D line and by V, the "dispersive reciprocal":

| Lenses | nD | V | Class |
|---|---:|---:|---|
| I and IV | 1.5160 | 63.8 | Crown |
| II and III | 1.6182 | 36.4 | Flint |

No maker or glass type is named, and the data file carries no catalogue label. The indices are referred to the sodium D line (589.3 nm), as the patent states. The engine derives the C and F indices from nD and V with normal partial dispersion, so colour is modelled, but the secondary spectrum is approximate.

## Focus Mechanism

The patent gives no focusing data, object distances or movements. The model is an infinity-only reference in the patent's orientation, with the film plane at the computed paraxial back focus. No focus movement is modelled, and `closeFocusM` = 1e15 marks focus as not modelled rather than giving a minimum distance.

## Apertures and Model Verification

The model was checked against the patent page images:

- **Prescription.** Every radius, thickness, air space, index and V value matches the printed table, and the drawing repeats the same values with the radii rounded to two decimals. The table itself misprints three row labels: γ3 for γ5, d7 for d4, and d7 for γ7. Each value is placed by its position.
- **First order.** The paraxial focal length is 99.998 mm against the printed 100 mm, and the f-number is 2.2.
- **Spherical aberration.** At F/2.2 the longitudinal values are −0.09, −0.29, −0.29 and −0.19 mm at pupil fractions 1.0, 0.85, 0.7 and 0.5.
- **Clear apertures.** The patent calls its drawing a full-size diagram. Calibrated against the printed thicknesses, the drawn diameters measure 46.2 to 46.6 mm, and every surface uses a 23 mm semi-diameter. The drawn edge thicknesses agree with the model's: 1.13 mm for I, 9.35 mm for II, 5.98 mm for III and 1.25 mm for IV. The F/2.2 axial ray reaches 22.73 mm on the front surface, so every rim passes the full axial beam.
- **Iris.** The model's iris is sized from the paraxial entrance pupil. A real marginal ray at that height reaches the iris at 19.12 mm, slightly above the 18.45 mm iris radius, so the outermost real rays of the F/2.2 bundle are stopped there. The real-ray working aperture is about F/2.27.
- **Field.** The patent states no field. At 13 mm image height, about the half-diagonal of a 35 mm motion-picture frame, the chief ray clears every rim, and the front rims trim about 11–12 % of the oblique bundle's width. The viewer's default half-field of 28.5° follows from the rims and is not a patent claim.

## Sources

1. William H. Repp, **US Patent 1,415,002, "Projection Lens,"** assigned to Projection Optics Company, Inc.; filed September 21, 1920, granted May 2, 1922. Drawing sheet: PDF p. 1; specification: PDF pp. 2–3, table on p. 3 (printed page 2). https://patents.google.com/patent/US1415002A/en
2. Delta Lenses, **"The Projection Optics Story"** (2025): company founding, the Pro-Jex series and its possible link to this patent, the Super-Lite series and later history. https://deltalenses.com/the-projection-optics-story/
3. William H. Repp, **US Patent 1,479,251, "Projecting Lens,"** granted January 1, 1924: the later two-doublet design associated with the Super-Lite series. https://patents.google.com/patent/US1479251A/en
