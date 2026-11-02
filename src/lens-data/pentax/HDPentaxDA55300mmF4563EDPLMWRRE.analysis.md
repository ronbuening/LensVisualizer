# PENTAX HD DA 55–300mm f/4.5–6.3 ED PLM WR RE — patent-derived reconstruction

## Patent Reference and Design Identification

**Patent:** [US 2017/0329112 A1](https://patents.google.com/patent/US20170329112A1/en)  
**Application Number:** US 15/432,108  
**Filed:** 2017-02-14  
**Published:** 2017-11-16  
**Priority:** JP 2016-098112, 2016-05-16; JP 2017-020845, 2017-02-08  
**Inventor:** Tomoya Koga  
**Applicant:** Ricoh Imaging Company, Ltd.  
**Title:** Zoom lens system  
**Example details:** Tables 1–3; Figs. 1–6 and the four-group motion diagram in Fig. 67. Scale factor 1; no prescription rescaling.

The model represents Numerical Embodiment 1. Its association with the commercial PLM lens is **provisional**. Neither the patent nor Ricoh’s product material explicitly identifies the commercial product as this exact numerical prescription.

The manufacturer independently confirms the 2016 F4.5–6.3 PLM/retractable generation, not the earlier F4–5.8 WR generation. Convergent evidence includes:

1. Fourteen elements in eleven air-separated optical components, including three cemented pairs.
2. A rear focusing assembly with two small elements, consistent with the patent’s negative G4 and the manufacturer’s PLM description.
3. Corresponding positive/negative element shapes, including the low-dispersion positive member before the stop.
4. Native 56.500–291.188 mm, F4.60–6.48 and 29.0–5.4° full fields, near the marketed 55–300 mm, F4.5–6.3 and 29.0–5.4°.
5. A priority date preceding the manufacturer’s 2016-06-09 launch.

These are correlation criteria, not proof of production radii, glass melts or mechanical cams. Other embodiments share the same architecture; Embodiment 2, for example, has native F4.50–6.27. It cannot be excluded by headline specifications alone.

## Optical Architecture

The prescription is a four-group **positive–negative–positive–negative** telephoto zoom. The commercial eleven-group count means eleven air-separated components, not eleven independently moving groups.

| Assembly | Surfaces                 | Elements | Source focal length |
| -------- | ------------------------ | -------: | ------------------: |
| G1       | 1–5                      |        3 |         +166.473 mm |
| G2       | 6–10                     |        3 |          −33.874 mm |
| G3       | 11–22, including stop 16 |        6 |          +35.379 mm |
| G3F      | 11–15                    |        3 |          +50.571 mm |
| G3R      | 17–22                    |        3 |          +45.787 mm |
| G4       | 23–26                    |        2 |          −39.835 mm |

G3F and G3R are parts of one rigid zoom assembly, separated by the diaphragm and fixed internal spacings. Only the gaps after surfaces 5, 10 and 22, and the physical back focus after surface 26, change across the three printed infinity stations. G4 also provides rear focus. Figs. 1 and 4 show the same optical assembly at the wide and tele limits; Fig. 67 provides motion context. Paragraph 0108 describes that path for Embodiments 1–4: from wide to tele, G1 advances toward the object, G2 moves toward the image and then back toward the object (a U-turn), and G3 and G4 first move slightly toward the image and then toward the object, past their wide-angle positions.

The diaphragm is source surface 16, 2.700 mm after surface 15 and 15.026 mm before surface 17. Its modeled radius follows each printed design F-number; the patent supplies no physical iris-radius schedule. The nine-blade count comes from the manufacturer, not the patent’s numerical table.

No camera-side cover plate or filter is prescribed. The final source surface is curved surface 26; paragraph 0188 defines back focus from the final lens surface to the image. No assumed sensor stack is inserted, and the manufacturer’s 58 mm external filter thread is not treated as an optical clear aperture.

## Element-by-Element Analysis

The focal lengths below are isolated-element, air-to-air thick-lens calculations using the printed radii, center thickness and d-line index. For a cemented element, they are descriptive isolated powers, not the power of that element embedded in its adjacent glass. Glass names are **inferred catalog equivalents**, never source-named suppliers.

### L11 — Positive Meniscus

nd = 1.51633, νd = 64.14. Glass: S-BSL7 (OHARA), inferred equivalent. f = +137.151 mm.

The front positive meniscus supplies collecting power with a weakly curved rear face. Its comparatively low index and moderate dispersion are consistent with an ordinary crown. The element is not the ED member identified by the manufacturer.

### L12 — Negative Meniscus

nd = 1.78590, νd = 44.20. Glass: S-LAH51 (OHARA), inferred equivalent. f = -82.849 mm.

This negative meniscus is cemented to L13 at source surface 4. The patent singles out its partial dispersion and power in the front-group conditions; its printed θgF is 0.5631 (¶0197). The pairing combines positive group power with a dispersive negative correction term.

### L13 — Positive Meniscus

nd = 1.48749, νd = 70.24. Glass: S-FSL5 (OHARA), inferred equivalent. f = +92.795 mm.

The positive low-index crown completes the G1 cemented pair. Its νd of 70.24 is higher than L12’s 44.20, providing an achromatizing contrast. Its identity as an OHARA equivalent is an inference, not a supplier disclosure.

### L21 — Biconcave Negative

nd = 1.79952, νd = 42.22. Glass: S-LAH52 (OHARA), inferred equivalent. f = -23.249 mm.

The strongly negative front member of G2 is cemented to L22 at surface 7. In isolation it carries more negative power than the following positive member carries positive power; the complete G2 is the negative variator (¶0192).

### L22 — Positive Meniscus

nd = 1.84666, νd = 23.78. Glass: S-TIH53 (OHARA), inferred equivalent. f = +32.254 mm.

The high-index, high-dispersion positive meniscus counteracts part of L21’s power while contributing chromatic balancing within the cemented pair. The source identifies a positive meniscus convex toward the object, not an aspherical element.

### L23 — Biconcave Negative

nd = 1.80400, νd = 46.58. Glass: S-LAH65V (OHARA), inferred equivalent. f = -61.286 mm.

This separate biconcave negative completes G2. The high-index negative members allow the group’s strong net negative power with comparatively restrained curvature. Its individual contribution to aberration correction is uncertain.

### L31F — Biconvex Positive

nd = 1.72916, νd = 54.68. Glass: S-LAL18 (OHARA), inferred equivalent. f = +59.267 mm.

The first positive singlet of G3F lies ahead of the cemented ED-positive/negative pair. Together, the three elements have the source group focal length +50.571 mm. The diaphragm is behind this sub-group.

### L32F — Biconvex Positive

nd = 1.49700, νd = 81.55. Glass: S-FPL51 (OHARA), inferred equivalent. f = +43.520 mm.

Ricoh’s optical diagram marks the position corresponding to L32F as the ED element. Its νd of 81.55 and a close S-FPL51 catalog equivalent support an ED-class interpretation, but the patent does not name that commercial glass.

### L33F — Biconcave Negative

nd = 1.80610, νd = 33.27. Glass: NBFD15 (HOYA), inferred equivalent. f = -45.283 mm.

The dispersive negative member is cemented to L32F at source surface 14. The low-dispersion positive and higher-dispersion negative pair supports axial-color balancing in the positive relay. Both members remain spherical.

### L31R — Negative Meniscus

nd = 1.80610, νd = 33.27. Glass: NBFD15 (HOYA), inferred equivalent. f = -62.211 mm.

The rear relay begins after the diaphragm with this negative meniscus. It uses the same printed index/Abbe pair as L33F, but is air-spaced and performs a different positional role in the G3R assembly (¶0194).

### L32R — Biconvex Positive

nd = 1.58913, νd = 61.13. Glass: S-BAL35 (OHARA), inferred equivalent. f = +57.991 mm.

A symmetrical-radius biconvex crown follows L31R. The source radii are +67.476 and −67.476 mm. Its positive power contributes to G3R’s net positive focal length of +45.787 mm.

### L33R — Positive Meniscus

nd = 1.58313, νd = 59.37. Glass: S-BAL42 (OHARA), inferred equivalent. f = +51.646 mm.

The final positive meniscus of G3R has a strongly curved front and weakly curved rear face. This shape is one distinction from Numerical Embodiment 2, whose corresponding member is biconvex; it matters to embodiment identification but does not alone prove production equivalence.

### L41 — Positive Meniscus

nd = 1.78472, νd = 25.68. Glass: S-TIH11 (OHARA), inferred equivalent. f = +77.012 mm.

The front element of G4 is a positive meniscus convex toward the image. Its isolated focal length agrees with the source +77.012 mm (¶0198). It moves rigidly with L42 for focusing; its internal 1.968 mm air gap does not change.

### L42 — Biconcave Negative

nd = 1.69680, νd = 55.53. Glass: S-LAL14 (OHARA), inferred equivalent. f = -25.572 mm.

The stronger biconcave negative gives the two-element rear group its net negative power. Its isolated focal length agrees with the source −25.572 mm (¶0199). The source requires G4 to move imageward for closer subjects, rather than moving the full lens or either relay sub-group.

## Glass Identification and Selection

The patent prints fourteen nd/νd pairs but no manufacturer glass names. The equivalents below provide catalog dispersion curves with closely matching coordinates. Alternatives exist across suppliers. A close coordinate match supports a modeling equivalent, not a production-supplier claim.

| Element |      nd |    νd | Inferred catalog equivalent |
| ------- | ------: | ----: | --------------------------- |
| L11     | 1.51633 | 64.14 | S-BSL7 (OHARA)              |
| L12     | 1.78590 | 44.20 | S-LAH51 (OHARA)             |
| L13     | 1.48749 | 70.24 | S-FSL5 (OHARA)              |
| L21     | 1.79952 | 42.22 | S-LAH52 (OHARA)             |
| L22     | 1.84666 | 23.78 | S-TIH53 (OHARA)             |
| L23     | 1.80400 | 46.58 | S-LAH65V (OHARA)            |
| L31F    | 1.72916 | 54.68 | S-LAL18 (OHARA)             |
| L32F    | 1.49700 | 81.55 | S-FPL51 (OHARA)             |
| L33F    | 1.80610 | 33.27 | NBFD15 (HOYA)               |
| L31R    | 1.80610 | 33.27 | NBFD15 (HOYA)               |
| L32R    | 1.58913 | 61.13 | S-BAL35 (OHARA)             |
| L33R    | 1.58313 | 59.37 | S-BAL42 (OHARA)             |
| L41     | 1.78472 | 25.68 | S-TIH11 (OHARA)             |
| L42     | 1.69680 | 55.53 | S-LAL14 (OHARA)             |

The prescription retains the printed nd/νd unchanged. The chromatic model uses compatible equivalent catalog curves at C/d/F, including their catalog d-line indices; these are not exactly anchored to the printed d-line values. The catalog-minus-prescription offsets are at most about 0.00000418 in nd and 0.00503 in νd. In particular, L32F’s high Abbe number supports its ED-class description, but no claim of exact production chromatic performance or apochromatism follows.

For L12, paragraph 0197 prints θgF = 0.5631. The stored normal-line deviation is derived explicitly:

$$
\Delta P_{g,F}=0.5631-(0.6438-0.001682\times44.20)=-0.0063556.
$$

This is not an extra measured line index and does not, by itself, establish an anomalous-material classification for L12. Its source nd/νd pair remains unchanged. Chromatic tracing uses the compatible catalog C/d/F shape and reconstructs the g channel from the source-derived ΔPgF where available; inferred curves support only qualified polychromatic calculations.

## Focus Mechanism

Paragraph 0114 identifies G4 as the focusing group and specifies motion **toward the image** from infinity to a nearer object. The two G4 elements move together; the 2.110, 1.968 and 1.000 mm internal spacings stay fixed. Only d22 and the final back-focus gap change with focus, by equal and opposite amounts.

The patent supplies infinity-focus prescriptions only. The manufacturer’s 0.95 m minimum object-to-image distance and 0.30× maximum reproduction ratio are product specifications, not patent-published numerical focus rows. The inferred close-focus positions satisfy the d-line paraxial image condition with G4 translation alone.

| Native zoom anchor | Inferred G4 imageward travel to 0.95 m | Inferred paraxial reproduction magnitude |
| ------------------ | -------------------------------------: | ---------------------------------------: |
| 56.500 mm          |                            0.905432 mm |                                0.067663× |
| 132.085 mm         |                            4.037439 mm |                                0.143092× |
| 291.188 mm         |                           11.818399 mm |                                0.296383× |

Nine total focus controls comprise infinity and eight inferred finite positions, at normalized controls 0 through 1 in steps of 0.125. Their distance labels use 0.95 m divided by the nonzero normalized control. Interpolation between those controls remains approximate, with a maximum sampled image-plane refocus of 0.036633 mm. Near infinity, distance labels are sensitive to these small image-plane offsets: the grid includes a 12.95% distance-label discrepancy at a nominal 121.6 m. These are sampled bounds, not universal accuracy claims or production-cam measurements. The finite focus positions are inferred, and finite-distance MTF is unavailable.

The inferred tele reproduction ratio is close to 0.30×, consistent with the product specification but insufficient for independent identification. Finite ray tracing at the inferred object planes does not establish patent-published focus positions.

## Zoom Motion and Reconstruction Limits

The three source infinity rows are retained literally:

| Source state |       f | F-number | Half-field |     d5 |    d10 |   d22 | Back focus |
| ------------ | ------: | -------: | ---------: | -----: | -----: | ----: | ---------: |
| Wide         |  56.500 |     4.60 |      14.5° |  2.392 | 39.049 | 3.010 |     52.474 |
| Intermediate | 132.085 |     5.14 |       6.0° | 53.371 | 18.199 | 5.736 |     57.967 |
| Tele         | 291.188 |     6.48 |       2.7° | 79.101 |  3.044 | 3.310 |     81.814 |

All lengths are millimeters. The source image semi-height is 14.24 mm at every station, represented by a 28.48 mm image circle. The printed tele total length is 233.845 mm, whereas the printed component sum is 233.846 mm; the model retains this 0.001 mm rounding difference.

Straight interpolation of the three native gap rows produces millimeter-scale intermediate defocus. The continuous model includes 38 **unpublished** zoom control points. G1/G2/G3 motions and total track are piecewise interpolated; G4’s intermediate position follows the paraxial infinity image condition, preserving the sum of its adjacent gaps. The maximum added G4 offset from the simple interpolation is about 0.563 mm. The modeled directions agree with paragraph 0108 at the printed stations: G1, G3 and G4 end farther from the image at every printed step, and G2 reverses at 132.085 mm. The early imageward hook that paragraph 0108 gives G3 and G4 falls between the printed 56.5 and 132.085 mm rows. Those rows cannot place it, so the interpolated cam moves both groups toward the object from the start.

The resulting 41 controls approximate zoom motion, without establishing the production cam. Only indices 0, 20 and 40 are published source states; intermediate positions are interpolated.

## Spherical Surfaces and Clear Apertures

Paragraph 0188 explicitly states that none of the eleven numerical embodiments uses an aspherical lens. This model has no aspheric coefficients, conic corrections or diffractive surfaces.

The source prints no clear semi-diameters. The modeled optical rims follow Fig. 1, measured as full element widths at the drawn wide state. Figure scale follows the drawn vertex spacings of the axial prescription, not the 58 mm filter thread, and the drawn rim positions reproduce the prescription’s surface sags, so the drawing holds one scale in both directions. Every modeled rim agrees with the drawing within 1.5 %, and the small steps between neighbours follow it: L31F stands above the L32F/L33F pair, and L31R below L32R. These are drawing-derived values, not precision manufacturing dimensions.

Measuring full widths cancels the drawing’s slightly tilted optical axis. Source radii and gaps remain unchanged. The model allows surface sag to occupy up to 90% of an air gap.

## Model Scope and Limitations

The prescription has paraxial EFLs of 56.501989, 132.093643 and 291.218774 mm. The corresponding paraxial back-focus residuals against the literal source are +0.002313, +0.006426 and +0.013997 mm. The printed source gaps retain these rounding residuals.

The commercial identity and production focus/zoom cams remain uncertain. The inferred glass curves and clear apertures limit predictions of chromatic performance and field illumination; optical calculations do not establish exact production performance.

## Sources

- [Original USPTO publication scan, US 2017/0329112 A1](https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/20170329112), especially PDF pages 53, 58–59, Figs. 1/4 and Fig. 67.
- [Searchable patent transcription](https://patents.google.com/patent/US20170329112A1/en); the original scan is authoritative for numerical tables.
- [Ricoh product specification and optical construction](https://www.ricoh-imaging.co.jp/english/products/lens/k/telephoto/hdpentax-da-55-300_re/index.html).
- [Ricoh launch announcement, 2016-06-09](https://news.ricoh-imaging.co.jp/rim_info2/2016/20160609_019390.html).
- [Ricoh product brochure](https://www.ricoh-imaging.co.jp/japan/support/catalog/pdf/hdpentax-da-55-300_re.pdf).
