# YASHICA ML 35 mm f/2.8 (early diamond-grip)

## Patent Reference and Design Identification

**Patent:** JP S50-132921 A (`特開昭50-132921`)
**Application Number:** `特願昭49-38016`
**Filed:** 1974-04-05
**Published:** 1975-10-21
**Inventor:** Yoshisato Fujioka
**Assignee:** Yashica Co., Ltd.
**Title:** Retrofocus-type wide-angle lens (`レトロフォーカス型広角レンズ`)
**Example details:** 実施例, the only numerical example, on publication page (3), printed at f = 100

The early diamond-grip ML 35 mm f/2.8 on page 91 of the original FX-1 manual is listed at 7 elements in 6 groups, a 64° field, f/16 minimum aperture and 0.3 m minimum focus. Its section drawing shows the patent's element order and shapes, with the iris ahead of the rear group. Yashica filed the application in April 1974, about a year before the FX-1 appeared. This is a strong architectural correlation, not a confirmed factory prescription, and it does not cover the later 6-element, 5-group ML 35 mm f/2.8 with square grip knobs. Examination had not been requested when the application was published, and no granted text is cited here.

A uniform scale of 0.35 applies to every printed radius and axial length, giving EFL 35.001 mm. The marketed 35 mm is not imposed by renormalizing the radii.

## Optical Architecture

Seven elements in six air-separated components, with one cemented pair L2/L3 (C1). The patent divides them into four groups: I (L1), II (L2/L3), III (L4) and IV (L5/L6/L7). Negative L1 expands the field and creates retrofocus clearance. Cemented group II and positive L4 restore convergence, and the iris lies between groups III and IV. The three rear singlets L5, L6 and L7 shape the final image bundle. The narrow rear gap d11 = 0.28 scales to 0.098 mm and is an air gap, not a cemented interface.

All refracting surfaces are spherical. No asphere, sensor plate, front filter, shutter blade or other unprinted optical element is added.

## Element-by-Element Analysis

### L1: Meniscus Negative

nd = 1.59181, νd = 58.3. Glass: BACD13 (HOYA, coordinate equivalent). In-air f = -57.4142 mm.

Group I on its own. The patent bounds its power by f < −f_I < 2.5f, and the example's f_I = −164.0 at f = 100 gives 1.64f. Stronger power raises the back focus and shrinks the front diameter, but the patent warns that going past the lower limit adds negative distortion and divergent coma.

### L2: Biconcave Negative

nd = 1.56384, νd = 60.8. Glass: N-SK11 (SCHOTT catalog equivalent; production supplier unspecified). In-air f = -29.4722 mm.

Front half of doublet C1. Its concave first surface (1/r3 < 0) refracts steep oblique rays toward a smaller inclination, which the patent uses to reduce the diameter of group I and limit higher-order aberration.

### L3: Biconvex Positive

nd = 1.71300, νd = 53.9. Glass: LAC8 (HOYA, coordinate equivalent). In-air f = +28.0126 mm.

Thick rear half of doublet C1. The cemented surface r4 is convex to the object with positive power, within the patent's 0 < (n3 − n2)/r4 < 0.5/f at 0.226/f. The patent credits this shape with keeping the interface nearly concentric to oblique bundles and with supplying convergent coma, which is what lets group I carry more negative power.

### L4: Biconvex Positive

nd = 1.69350, νd = 53.4. Glass: LAC13 (HOYA, coordinate equivalent). In-air f = +30.0587 mm.

Group III, the last element ahead of the stop, converging the beam toward the rear group. The patent holds the optical length from group I to group III between 0.2f and f, and the example gives 0.415f. A longer path flattens the sagittal field across the 64° angle, and a path above f defeats the compact size.

### L5: Biconcave Negative

nd = 1.71736, νd = 29.5. Glass: SF1 (SCHOTT catalog equivalent; production supplier unspecified). In-air f = -19.4598 mm.

First element behind the stop and the only flint in the design. Every other element has νd above 53, so this strong negative singlet carries the main colour correction.

### L6: Meniscus Positive

nd = 1.71300, νd = 53.9. Glass: LAC8 (HOYA, coordinate equivalent). In-air f = +33.9873 mm.

Positive meniscus, concave to the object, carrying part of the rear group's power in the same glass as L3.

### L7: Meniscus Positive

nd = 1.64085, νd = 56.8. Glass: LACL1 (HOYA, coordinate equivalent). In-air f = +58.8366 mm.

Near plano-convex last element, with r12 almost flat at −2929 at f = 100. It sits 0.098 mm behind L6 on the axis and shares the rear group's positive power.

## Glass Identification and Spectral Scope

The file retains the printed indices and Abbe values. All seven pairs fall on catalog glasses: BACD13 (L1), N-SK11, the current form of SK11 (L2), LAC8 (L3, L6), LAC13 (L4), SF1 (L5) and LACL1 (L7). The largest difference is at L4, where LAC13 has the printed nd and νd 53.34 against the printed 53.4. The patent names no glass or supplier, so these are coordinate equivalents and the production melts stay unconfirmed. Their catalog curves supply the dispersion, which covers primary and secondary colour for those coordinates but not coatings, absorption or melt variation.

## Focus Mechanism

Neither the patent nor the FX-1 manual states the focusing mechanism. The model assumes unit focus: the whole lens moves forward and only the back focus changes, reaching the manual's 0.3 m minimum (object to image) at 5.88 mm extension and magnification −0.168. Forty-one keyframes spaced in inverse distance sample the Gaussian extension. This is a reconstruction, not a measured helicoid law.

The 0.012 mm rounding in the printed back focus is carried through the range, so the 300 mm endpoint conjugates at 299.59 mm and the focus labels from 3 m to 0.3 m are off by at most 2.65%, largest near 3 m. The focus scale is therefore not calibrated. The patent gives no close-focus prescription, so finite-conjugate MTF is unavailable.

## Aperture, Stop and Clear Apertures

The patent sets the stop between groups III and IV and prints no offset. Fig. 1 draws it inside d7, and the FX-1 section drawing shows it in the same gap. The model places it at the middle of d7 = 19.12, split 9.56 + 9.56 at f = 100, or 3.346 + 3.346 mm. This is a modeling choice, not a recovered iris position.

At f/2.8 the paraxial entrance pupil diameter is 12.50 mm at infinity focus, which gives a stop radius of 6.815 mm. The aperture scale runs from f/2.8 to f/16, as in the manual and on the barrel. Clear semi-diameters are estimated from Fig. 1, which is drawn about 8 % shorter across the axis than along it, and the axial f/2.8 beam clears them at infinity and at 0.3 m. Both faces of each element share one rim except L1: its rear curve ends at 10.4 mm, and a flat land carries the element out to 13 mm, as Fig. 1 and the FX-1 section draw it. L4 at 8.86 mm and L6 at 8.30 mm stand a little above the figure's heights of about 8.3 and 8.0 mm, because rims cut to those heights take a clear bite out of the mid-field light. These are readings from drawings, not printed dimensions.

The printed back focus of 108.7 scales to 38.045 mm and sets the infinity image plane. The printed radii and spacings give a paraxial 108.666 (38.033 mm), so the back focus reproduces at the patent's printed precision.

## Limitations and Source Discrepancies

The patent's Seidel table, printed for f = 1, agrees with the model in its spherical and Petzval columns at all 13 surfaces (sums 1.1512 and 0.1916). Its coma, astigmatism and distortion columns do not: the printed sums are −0.1191, −0.0364 and 0.1291, and the model with the stop at mid-d7 gives +0.0027, −0.0487 and 0.1352. A single stop shift reproduces every printed coma, astigmatism and distortion value, which puts the table's chief ray 0.12 mm behind L5, where no iris can sit, while the patent text, the stop drawn in Fig. 1, the field curves of Fig. 2 and the manual section keep the stop in d7. The model follows d7 and does not reproduce those three columns.

The patent gives no clear apertures, focus data or glass names. Its one wrong element label (L8 for L7) and one misdescribed citation are corrected by the May 1974 amendment printed with it. Agreement with the patent example does not establish the factory prescription.

## Sources

- [JP S50-132921 A](https://patents.google.com/patent/JPS50132921A/en), Yashica Co., Ltd.
- [Yashica FX-1 instruction manual](https://www.cameramanuals.org/yashica_pdf/yashica_fx-1.pdf), page 91: specifications and section drawing of the ML 35 mm f/2.8.
- [ImagingPixel on the ML 35 mm f/2.8](https://www.imagingpixel.com/2018/12/yashica-ml-35mm-128-odd-one-out.html): diamond-grip 7/6 and square-grip 6/5 versions.
