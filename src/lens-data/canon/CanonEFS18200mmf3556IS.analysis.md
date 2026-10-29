# Canon EF-S 18–200mm f/3.5–5.6 IS

## Patent Reference and Design Identification

**Patent:** JP 2009-175324 A  
**Filed:** 2008-01-23  
**Published:** 2009-08-06  
**Inventor:** Makoto Misaka  
**Applicant:** Canon Inc.  
**Title:** Zoom Lens and Imaging Apparatus Having the Same (English translation)  
**Example details:** 数値実施例1, ¶0097, original pages 12–13; Fig. 1 and Fig. 2A–C, pages 18–19. Original millimetre scale, no uniform rescaling.

The data file transcribes Numerical Example 1, correlated with the Canon EF-S 18–200mm f/3.5–5.6 IS. The patent does not name the product. The evidence:

1. Canon's manufacturer record specifies 16 elements in 12 groups; the example has 16 glass elements in 12 air-separated components.
2. The manufacturer construction drawing identifies two UD and two aspherical elements. Their positions agree with the example's high-Abbe E2/E14 and aspherical E8/E15, respectively. This is stronger evidence than focal range alone, but not proof of identical production glass.
3. Both have a five-power-unit positive/negative/positive/negative/positive architecture, with a negative stabilization doublet behind the stop-side positive unit.
4. The patent states 18.60 / 49.94 / 193.23 mm and f/3.60 / 4.70 / 5.88 at its three infinity settings. These are kept rather than changed to the marketed 18–200 mm and f/3.5–5.6.
5. The January 2008 filing precedes Canon's September 2008 launch.
6. ¶0082 prefers moving L2 toward the object for close focus, consistent with Canon's inner focusing. Canon's 0.45 m minimum distance and 0.24× maximum magnification set the modeled close focus; the patent prints no finite spacings.

The prescription is the patent example, not a factory prescription. The patent does not print clear apertures, the image gap, image heights, close-focus spacings or a zoom cam; the data file derives these as described below.

## Optical Architecture

The optical train has five power units: positive L1, negative focusing L2, positive Gpf, negative Gn and positive Gpr. Gn contains the negative stabilization doublet Gis followed by the negative member Gisr; the diagram labels the two separately, so its six group bands are five zoom units.

Because the patent names its first two units L1 and L2, the elements are numbered E1–E16 here. The patent's own element designations are NGpf and PGpf for E9 and E10 (¶0061; NLf and PLf in Fig. 1), NGis and PGis for E11 and E12 (¶0045; NL and PL in Fig. 1), and PGpr1 for E14, the single element of subunit Gpr1 (¶0051, ¶0056); E15 and E16 form Gpr2.

| Unit | Surfaces | Elements | Interpretation                                                           |
| ---- | -------- | -------- | ------------------------------------------------------------------------ |
| L1   | S1–5     | E1–E3    | Positive front unit, including a cemented low-dispersion pair            |
| L2   | S6–13    | E4–E7    | Negative variator and preferred internal-focus unit                      |
| Gpf  | S15–19   | E8–E10   | Positive unit just behind the stop, with one asphere and a cemented pair |
| Gis  | S20–22   | E11–E12  | Negative cemented image-stabilization doublet, modeled centred           |
| Gisr | S23–24   | E13      | Negative member of the Gn unit                                           |
| Gpr  | S25–29   | E14–E16  | Positive rear relay, including low-dispersion E14 and aspherical E15     |

The aperture stop is patent surface 14, 0.57 mm before S15. The four gaps D5, D13, D19 and D24 are printed at three infinity settings. D19 + D24 is 8.63 mm at each, consistent with the integral Gpf/Gpr motion of ¶0039, and the model keeps that coupling.

The image gap is not printed; at each printed setting it is the paraxial back focus of the printed prescription. Between the printed settings the zoom positions are derived: the L1 position, D19 and the image gap follow monotone cubic curves through the printed values, and the D5/D13 split is solved so that each position is in paraxial focus at infinity. Every gap and every unit except L2 then moves in one direction from wide to tele. L2 first moves about 0.26 mm toward the image near 22 mm and then toward the object. That small dip is a product of the derived cam, not something the patent shows: Fig. 1 draws the L2 locus as a curved arrow that bows toward the object and ends turned toward the image, and its three panels, like the printed spacings, put L2's front vertex 123.9, 127.9 and 132.1 mm ahead of the image at the three settings. Between the 37 stored positions the infinity focus error stays within 0.018 mm. This is a derived cam, not Canon's.

| Printed setting | Patent f / f-number | Calculated EFL | Derived image gap | Front-to-image track |
| --------------- | ------------------- | -------------- | ----------------- | -------------------- |
| Wide            | 18.60 mm / 3.60     | 18.596597 mm   | 38.194057 mm      | 143.774057 mm        |
| Middle          | 49.94 mm / 4.70     | 49.918990 mm   | 53.776874 mm      | 172.806874 mm        |
| Tele            | 193.23 mm / 5.88    | 193.084150 mm  | 68.549684 mm      | 204.339684 mm        |

The small EFL differences come from tracing the rounded printed values; no radius or index has been adjusted. The six printed group focal lengths (L1 90.986, L2 −13.133, Gpf 22.315, Gis −39.673, Gisr −42.371, Gpr 28.750 mm) are reproduced. No cover glass or filter plate is added because the example specifies none.

## Element-by-Element Analysis

Element focal lengths below are thick-element paraxial values in air, not in-situ contributions. Glass names are catalog equivalents of the printed d-line coordinates; neither the patent nor Canon identifies the suppliers. The roles are optical interpretations unless a paragraph is cited.

### E1 — Meniscus Negative

nd = 1.806100, νd = 33.3. Glass: NBFD15 (HOYA) catalog equivalent. f = -114.400 mm.

The high-index negative member is cemented to low-dispersion E2. Its stronger dispersion complements the positive crown in the front collector; attribution of a measured secondary-spectrum correction would require production dispersion data.

### E2 — Biconvex Positive

nd = 1.496999, νd = 81.5. Glass: S-FPL51 (OHARA) catalog equivalent. f = +98.534 mm.

The positive high-Abbe member supplies much of the front doublet power with low dispersion. Its position matches a UD-marked element in Canon's construction diagram; the catalog equivalent is not a manufacturer identification.

### E3 — Meniscus Positive

nd = 1.603112, νd = 60.6. Glass: S-BSM14 (OHARA) catalog equivalent. f = +103.532 mm.

This positive meniscus completes the front collector. Its bending and separation from the negative moving unit influence pupil placement and wide-angle ray heights.

### E4 — Meniscus Negative

nd = 1.834807, νd = 42.7. Glass: S-LAH55V (OHARA) catalog equivalent. f = -19.380 mm.

This negative meniscus begins the focusing unit. Fig. 1 draws it square-cut at about 13.2 mm, with the strongly curved rear face ending near 9.3 mm at a flat land square to the axis. The model gives both faces a 13.25 mm rim and cuts the rear rim flat 4.09 mm behind its vertex (cut radius 9.62 mm, just outside the traced beams), so the element draws square-cut with the land Fig. 1 shows.

### E5 — Biconcave Negative

nd = 1.772499, νd = 49.6. Glass: S-LAH66 (OHARA) catalog equivalent. f = -28.372 mm.

The biconcave member strengthens the negative focus unit. Its high-index, moderate-Abbe coordinates allow substantial power with relatively compact curvature, while the adjacent air space contributes to the unit's aberration balance.

### E6 — Biconvex Positive

nd = 1.805181, νd = 25.4. Glass: S-TIH6 (OHARA) catalog equivalent. f = +17.102 mm.

The positive high-dispersion member opposes the negative elements around it. It moderates net group power and supplies a chromatic balancing degree of freedom; its exact production composition is unreported.

### E7 — Biconcave Negative

nd = 1.772499, νd = 49.6. Glass: S-LAH66 (OHARA) catalog equivalent. f = -22.887 mm.

The final negative element completes L2. Fig. 1 draws it square-cut, slightly taller than E6; its steep front face sits only 0.38 mm behind E6, so the two faces would meet near 9.5 mm and E6's estimated rim stays below its drawn outline.

### E8 — Biconvex Positive (Asph)

nd = 1.583126, νd = 59.4. Glass: L-BAL42 (OHARA) catalog equivalent, the moulding version of S-BAL42 for these glass-moulded aspheres. f = +40.301 mm.

The positive stop-adjacent biconvex element carries asphere S16. It acts on large pupil-dependent rays close to the stop and contributes correction across changing zoom separations.

### E9 — Meniscus Negative

nd = 1.805181, νd = 25.4. Glass: S-TIH6 (OHARA) catalog equivalent. f = -44.801 mm.

The negative high-dispersion member of the Gpf cemented pair, the patent's NGpf (¶0061), offsets part of the following low-dispersion member's power. Its cemented interface avoids an extra air gap while preserving chromatic design freedom.

### E10 — Biconvex Positive

nd = 1.487490, νd = 70.2. Glass: S-FSL5 (OHARA) catalog equivalent. f = +22.803 mm.

The positive low-index member, the patent's PGpf, completes the Gpf pair; the 0.318 index step from E9 satisfies condition (2a), NNGpf − NPGpf > 0.2 (¶0063–0065). Its high Abbe number complements E9; the combined pair and E8 form the positive unit behind the stop.

### E11 — Biconcave Negative

nd = 1.712995, νd = 53.9. Glass: S-LAL8 (OHARA) catalog equivalent. f = -16.233 mm.

The negative member of the Gis doublet, the patent's NGis (¶0045), lies at the front of the stabilization subunit. Its strongly curved cemented interface helps form a compact negative group; the model shows it centred only.

### E12 — Meniscus Positive

nd = 1.806100, νd = 33.3. Glass: NBFD15 (HOYA) catalog equivalent. f = +26.317 mm.

The positive high-dispersion partner, the patent's PGis, moderates the net negative Gis power and its colour. The centred model says nothing about decentring sensitivity, shift range or stabilization performance.

### E13 — Meniscus Negative

nd = 1.834807, νd = 42.7. Glass: S-LAH55V (OHARA) catalog equivalent. f = -42.370 mm.

The negative meniscus is the Gisr subunit. It follows Gis by a fixed 3.05 mm air gap and zooms with it as part of the negative Gn unit (¶0069); only Gis shifts for stabilization.

### E14 — Biconvex Positive

nd = 1.496999, νd = 81.5. Glass: S-FPL51 (OHARA) catalog equivalent. f = +30.246 mm.

The positive low-dispersion rear element shares the high-Abbe coordinates of E2. It is the patent's PGpr1, the single element of subunit Gpr1; its νd 81.5 meets condition (1a), 80 < νPGpr1 < 97, which the patent ties to axial colour at the tele end (¶0056–0059). It sits at the second UD-marked position in Canon's construction diagram and leads the positive rear relay.

### E15 — Biconvex Positive (Asph)

nd = 1.583126, νd = 59.4. Glass: L-BAL42 (OHARA) catalog equivalent, the moulding version of S-BAL42 for these glass-moulded aspheres. f = +22.812 mm.

The positive member carries asphere S27 and is cemented to E16; the pair is the patent's subunit Gpr2 (¶0051–0052). The high-order polynomial terms change peripheral sag and off-axis correction; their values and signs are as printed.

### E16 — Meniscus Negative

nd = 1.834807, νd = 42.7. Glass: S-LAH55V (OHARA) catalog equivalent. f = -24.196 mm.

The negative rear member balances the positive aspherical partner. Its rear face is followed by a derived image distance, not a printed back focus.

## Glass Identification and Selection

The printed indices are d-line values (¶0092). The names below are catalog equivalents that match the printed nd and νd; they select dispersion curves and are not identified factory glass.

| Elements     | Patent nd | Patent νd | Catalog equivalent |
| ------------ | --------- | --------- | ------------------ |
| E1, E12      | 1.806100  | 33.3      | NBFD15 (HOYA)      |
| E2, E14      | 1.496999  | 81.5      | S-FPL51 (OHARA)    |
| E3           | 1.603112  | 60.6      | S-BSM14 (OHARA)    |
| E4, E13, E16 | 1.834807  | 42.7      | S-LAH55V (OHARA)   |
| E5, E7       | 1.772499  | 49.6      | S-LAH66 (OHARA)    |
| E6, E9       | 1.805181  | 25.4      | S-TIH6 (OHARA)     |
| E8, E15      | 1.583126  | 59.4      | L-BAL42 (OHARA)    |
| E10          | 1.487490  | 70.2      | S-FSL5 (OHARA)     |
| E11          | 1.712995  | 53.9      | S-LAL8 (OHARA)     |

Each equivalent matches the printed nd to six decimals and νd within 0.05. E2 and E14 sit at the two positions Canon marks UD, and their 1.497 / 81.5 coordinates are those of fluorophosphate UD-class glass, so both carry an inferred anomalous-dispersion tag; the patent itself prints no partial dispersion. The pairings of low- and high-dispersion glass show the first-order colour correction intent, not measured production colour performance.

## Focus Mechanism

¶0082 prefers moving the negative unit L2 toward the object for near focus. The model changes D5 and D13 by equal and opposite amounts, leaving the other spacings and the image plane unchanged at each zoom position. All finite focus settings are **derived**: the patent prints no close-focus spacings for this example.

Canon's minimum focus distance is 0.45 m, measured from the image plane. At focus slider position q > 0 the model targets an object-to-image distance of 450/q mm and solves paraxially for the L2 shift that images that object on the fixed image plane. Eleven focus keyframes at q = (i/10)³ are stored for each zoom position; between keyframes the slider's distance label and the distance the interpolated spacings focus on differ by up to about 5 %.

| Printed zoom | L2 travel at q = 1     | Calculated close magnification |
| ------------ | ---------------------- | ------------------------------ |
| 18.60 mm     | 0.918378 mm objectward | -0.053646                      |
| 49.94 mm     | 2.070198 mm objectward | -0.126237                      |
| 193.23 mm    | 8.897638 mm objectward | -0.244369                      |

The largest travel is 8.897638 mm, at tele. The tele magnification is close to Canon's 0.24×, but that is not independent confirmation: Canon's minimum distance is the input. The close-focus track, focus breathing and finite-distance aberrations are not manufacturer data, and finite-distance MTF stays unavailable because the patent prints no close-focus state.

## Aspherical Surfaces

The patent uses the spherical-base sag plus A·h² + B·h⁴ + C·h⁶ + D·h⁸ + E·h¹⁰ (with a further printed zero F term). Here A = 0 for both surfaces. It is a quadratic coefficient, **not** the conic constant. The equivalent data convention is K = 0, A4 = B, A6 = C, A8 = D, A10 = E. No scaling is applied.

| Source surface | Element   | K   | A4          | A6          | A8           | A10         |
| -------------- | --------- | --- | ----------- | ----------- | ------------ | ----------- |
| S16            | E8 rear   | 0   | 9.19247e−6  | 5.07959e−9  | 0            | 0           |
| S27            | E15 front | 0   | −1.00175e−5 | −6.53404e−9 | −1.88855e−12 | 4.62133e−13 |

Coefficients use millimetres and the corresponding reciprocal powers. S16's positive polynomial departure increases sag relative to its negative-radius spherical base. S27 includes negative low-order and positive tenth-order departure, so its peripheral behavior cannot be summarized by A4 alone. Canon describes two glass-molded aspherical elements, consistent with the two full-thickness aspherical elements in this example; no unprinted resin layer is introduced.

## Image Stabilization

The patent's negative Gis doublet comprises E11/E12 (NGis/PGis), surfaces S20–22. The model shows the centred lens only: no lateral shift of Gis, decentring aberration or stabilization benefit is simulated. The construction supports the IS correlation, not a measure of stabilization performance.

## Clear Apertures and Field Bounds

The patent does not print semi-diameters. They were estimated from Fig. 1, scaled by its 105.58 mm wide-state first-to-last-vertex span, and checked against aspheric sag and the neighbouring air spaces. Figure scale, line thickness and drawn mount outlines leave real uncertainty.

The largest front radius is 29 mm. Smaller clear radii in the strongly curved L2 unit keep glass edges positive and avoid cutting into neighbouring air spaces: E4 is square-cut at 13.25 mm with a flat land on its rear face at 9.62 mm, as Fig. 1 draws it, E5 uses 9.4 mm and E6 8.9 mm. E7 takes the 10.1 mm square-cut height Fig. 1 draws. These are estimates, not published diameters.

The patent's aberration figures label half-angles of 36.29°, 15.30° and 4.04° at the three printed settings but give no image height. Traced at those angles, the chief ray lands at 12.88, 14.22 and 13.97 mm; at the wide end the gap to f·tan ω (13.66 mm) is barrel distortion. Canon's [EOS 50D record](https://global.canon/en/c-museum/product/dslr799.html) lists the lens as a companion to that body, whose 22.3 × 14.9 mm sensor has a 13.41 mm corner radius. The app's generic APS-C format uses a 14.175 mm semi-diagonal. At both heights the chief ray clears every estimated rim at all zoom positions, and the axial beam at each station's F-number clears every rim; corner bundles are partly vignetted, most strongly at the front group.

## Model Scope and Limitations

The prescription, aspheres and printed spacings are the patent's. The image gap, intermediate zoom positions, intermediate F-numbers, close-focus spacings and clear apertures are derived as described above; the narrow edge and air clearances that result depend on the estimated rims and are not manufacturing tolerances.

Off-axis performance at the intermediate zoom positions depends on the derived cam, so it is the least certain part of the model; the three printed settings are the patent's own design states. Spectral results use the catalog-equivalent glasses. The model does not establish Canon's cam, retail image quality, stabilization behaviour or manufacturing dimensions.

## Sources

1. [Canon Camera Museum: EF-S18–200mm f/3.5–5.6 IS](https://global.canon/en/c-museum/product/ef399.html): manufacturer construction, special-element count, release timing and mechanical/close-focus specifications.
2. [Canon original construction diagram](https://global.canon/ja/c-museum/wp-content/uploads/2015/05/ef399-lens-construction.gif): independent topology and special-element-position comparison.
3. [JP2009175324A original publication PDF](https://patentimages.storage.googleapis.com/74/fe/f7/2599d8a8e6d5e8/JP2009175324A.pdf): original Japanese source, Numerical Example 1, pp. 12–13; Fig. 1 and Fig. 2A–C, pp. 18–19; ¶0039, ¶0082 and ¶0092.
4. [JP2009175324A on Google Patents](https://patents.google.com/patent/JP2009175324A/ja): searchable Japanese text, checked against the original PDF page images.
5. [Canon Camera Museum: EOS 50D](https://global.canon/en/c-museum/product/dslr799.html): contemporary lens/body pairing and sensor dimensions; the corner radius is derived, not a published lens image circle.
