## Patent Reference and Design Identification

**Patent:** US 2004/0042087 A1  
**Application Number:** 10/633,622  
**Filed:** 5 August 2003  
**Published:** 4 March 2004  
**Priority:** 2 September 2002, JP 2002-257104  
**Inventor:** Hideyasu Takato  
**Assignee:** Olympus Optical Co., Ltd.  
**Title:** Large-aperture telephoto zoom lens  
**Example details:** Third Embodiment, Numerical data 3, ¶0088–0092; Fig. 3A–C; PDF pp. 10–11.

The original ZUIKO DIGITAL ED 50-200mm f/2.8-3.5 and the October 2007 SWD version share one optical design. Olympus's
historical specification table lists both as 16 elements in 15 groups with three ED elements, 24°–6.2° angle of view,
1.2 m minimum distance and 0.21× maximum magnification. The SWD version changed the AF drive (Supersonic Wave Drive)
and the nine-blade iris to a circular one, and weighs 995 g against 920 g, both without the tripod mount. The
September 2010 Four Thirds joint catalog's SWD section and the original VT523601/A0703 instruction sheet draw the
same layout, and Photozone's review states that the principal optical design was inherited from the predecessor.

Embodiment 3 is the probable production design, an author inference resting on:

1. Its 16 elements in 15 groups, and three νd 81.54 positive elements at L12, L43 and L51, exactly the three
   elements the Olympus catalog drawing colors as ED. The same patent's Embodiments 1 and 2 also use νd 81.54 at
   L13, four such elements.
2. Its 4× range, 24.4°–6.2° full field and G2 focusing match the product. The tele f/3.629 is kept as printed,
   not replaced by the marketed f/3.5.
3. Its 2002 priority and 2003 filing fit the lens's introduction with the Four Thirds system.
4. The later diffractive family JP 2010-039456 A / US 2010/0149652 A1 does not fit this all-refractive product.

### Unresolved middle focal-length label

| Printed state | Printed f, mm | Traced f, mm | Paraxial focus offset at the printed plane, mm | F-number | Full field |
|---|---:|---:|---:|---:|---:|
| Wide | 52.468 | 52.466379992 | −0.002180855 | 2.800 | 24.4° |
| Middle | 101.227 | 100.225234179 | −0.002246937 | 2.932 | 12.5° |
| Tele | 202.201 | 202.190938958 | −0.005263783 | 3.629 | 6.2° |

Positive offset means focus would lie behind the printed image plane. Both the A1 (p. 11) and the B2 (p. 10) print
**101.227**. The middle gaps are self-consistent: they put the paraxial focus within 0.002 mm of the printed plane and
keep G3 fixed, and no single digit, sign or transposition slip in any of them reproduces 101.227 mm with the image in
focus (the closest, D10 = 4.639, gives 101.263 mm but defocuses by 0.58 mm). A radius or thickness slip would also
move the wide and tele values, which agree to within 0.005 %. The label is therefore most likely a typo for 100.227 mm,
which would leave a +0.002 mm printed-minus-traced offset like the wide state's. The printed f-numbers support this:
they imply stop radii of 13.984 / 13.953 / 13.877 mm with 100.225 mm, but a bump to 14.093 mm with 101.227 mm. No
value has been changed; the erratum is recorded as unresolved.

## Optical Architecture

The five mechanical units have powers **positive / positive / negative / positive / positive**. There are 16 powered
lenses and one cemented doublet. The camera's low-pass filter LF in the table is not a seventeenth lens element.

| Unit | Source surfaces | Elements | Role and published motion |
|---|---|---|---|
| G1 | r1–r6 | L11–L13 | Positive front collector; moves toward the object during zoom. |
| G2 | r7–r10 | L21–L22 | Positive moving unit; objectward translation performs focusing. |
| G3 | r11–r17 | L31–L34 | Negative unit with the cemented L32/L33 doublet; fixed during zoom in ¶0091. |
| G4 | r18–r23 | L41–L43 | Positive rear unit; moves objectward during zoom. |
| G5 | stop r24–r32 | L51–L54 | Positive rear unit with the separated rear pair; carries the stop. |

The stop is the patent's r24, 1.290 mm before r25. The low-pass filter has flat r33/r34 surfaces, 4.000 mm
thickness, nd = 1.51633, νd = 64.14, and 1.000 mm of air to r35, the image plane; the model traces it as a separate
plate. Although G3 is stated fixed, the printed sums D17 + D23 + D32 are 57.308 / 57.309 / 57.298 mm, an 0.011 mm
spread larger than 0.001 mm rounding explains. Its cause is unknown, and the printed gaps are kept.

## Element-by-Element Analysis

The following focal lengths are calculated for each isolated element in air from the printed radii, central
thickness and nd. For the cemented pair these are isolated powers, not its in-situ power split. The named glasses are
catalog equivalents matching the printed nd/νd, not the patent's or Olympus's stated suppliers.

### L11 — Negative Meniscus

nd = 1.84666, νd = 23.78. Glass: S-TIH53 (catalog equivalent; supplier unconfirmed). f = -510.581 mm.

The front negative meniscus pairs with the following low-dispersion positive. Its high dispersion provides a chromatic balancing degree of freedom.

### L12 — Biconvex Positive

nd = 1.49700, νd = 81.54. Glass: S-FPL51 (catalog equivalent; supplier unconfirmed). f = +180.684 mm.

The first of the three νd 81.54 positive elements carries front-unit positive power. It sits where the Olympus catalog drawing shows the front group's ED element, and ¶0025 calls for anomalous-dispersion glass in the first group to control axial color.

### L13 — Positive Meniscus

nd = 1.48749, νd = 70.23. Glass: S-FSL5 (catalog equivalent; supplier unconfirmed). f = +565.734 mm.

This positive meniscus completes G1. Unlike the corresponding element in Embodiments 1 and 2, its νd is 70.23 rather than 81.54, and the Olympus drawing shows it as ordinary glass.

### L21 — Negative Meniscus

nd = 1.84666, νd = 23.78. Glass: S-TIH53 (catalog equivalent; supplier unconfirmed). f = -244.680 mm.

The high-index negative meniscus is the front member of the moving G2 focusing pair.

### L22 — Positive Meniscus

nd = 1.51633, νd = 64.14. Glass: S-BSL7 (catalog equivalent; supplier unconfirmed). f = +89.399 mm.

The positive G2 member gives the pair positive net power. The patent states that G2 focuses but prints no close-focus spacings for it.

### L31 — Biconcave Negative

nd = 1.88300, νd = 40.76. Glass: S-LAH58 (catalog equivalent; supplier unconfirmed). f = -35.620 mm.

The front negative G3 lens begins the only net-negative unit, which stays fixed during zooming (¶0075–0076).

### L32 — Biconcave Negative

nd = 1.48749, νd = 70.23. Glass: S-FSL5 (catalog equivalent; supplier unconfirmed). f = -43.382 mm.

The low-dispersion negative member of the cemented doublet opens at r13 and shares r14 with L33.

### L33 — Biconvex Positive

nd = 1.84666, νd = 23.78. Glass: S-TIH53 (catalog equivalent; supplier unconfirmed). f = +33.161 mm.

The high-dispersion positive member closes the cemented doublet at r15. There is no air gap at r14.

### L34 — Negative Meniscus

nd = 1.77250, νd = 49.60. Glass: S-LAH66 (catalog equivalent; supplier unconfirmed). f = -47.873 mm.

The final negative meniscus completes G3. In the model its rear clear radius (12.8 mm) is larger than its front one (12.1 mm): the full-aperture tele beam needs about 12.65 mm at the rear face, while the concave front face must stay short of L33's rear across the 2.005 mm gap.

### L41 — Biconvex Positive

nd = 1.69680, νd = 55.53. Glass: S-LAL14 (catalog equivalent; supplier unconfirmed). f = +76.435 mm.

The positive front G4 lens is followed by a close high-index negative element. Their individual spherical curvatures supply balancing powers.

### L42 — Negative Meniscus

nd = 1.80610, νd = 40.92. Glass: S-LAH53 (catalog equivalent; supplier unconfirmed). f = -74.250 mm.

The negative G4 meniscus is followed by the second high-Abbe positive.

### L43 — Biconvex Positive

nd = 1.49700, νd = 81.54. Glass: S-FPL51 (catalog equivalent; supplier unconfirmed). f = +56.244 mm.

This νd 81.54 positive lies immediately ahead of the moving stop, where ¶0045 places anomalous-dispersion glass; the Olympus drawing shows it as ED.

### L51 — Biconvex Positive

nd = 1.49700, νd = 81.54. Glass: S-FPL51 (catalog equivalent; supplier unconfirmed). f = +59.444 mm.

The third νd 81.54 positive, also drawn as ED, lies behind the stop. It and L43 place low-dispersion positive power on both sides of the iris.

### L52 — Biconcave Negative

nd = 1.64769, νd = 33.79. Glass: S-TIM22 (catalog equivalent; supplier unconfirmed). f = -67.466 mm.

This negative G5 lens follows a short air gap. Its modeled clear radius is set by the neighboring surfaces and the full-aperture beam.

### L53 — Biconvex Positive

nd = 1.65160, νd = 58.55. Glass: S-LAL7 (catalog equivalent; supplier unconfirmed). f = +56.513 mm.

The separated positive rear lens continues the positive G5 relay. Its 28.111 mm preceding air gap is fixed within G5.

### L54 — Negative Meniscus

nd = 1.83481, νd = 42.72. Glass: S-LAH55V (catalog equivalent; supplier unconfirmed). f = -78.501 mm.

The final negative meniscus follows 11.765 mm of air. The variable D32 is the physical distance to the camera filter, not the complete back focal distance.

## Glass Identification and Selection

The patent explicitly defines d-line indices in ¶0080 and publishes nd/νd, but no manufacturer glass codes or
full wavelength-index table. Ohara catalog equivalents with matching nd/νd are used for wavelength-dependent
calculations, with the printed nd kept at the d-line. Several vendors offer glasses at these coordinates; the
chosen catalog equivalent is not evidence of Olympus's actual supplier.

| Elements | nd | νd | Catalog equivalent |
|---|---:|---:|---|
| L11, L21, L33 | 1.84666 | 23.78 | S-TIH53 |
| L12, L43, L51 | 1.49700 | 81.54 | S-FPL51 |
| L13, L32 | 1.48749 | 70.23 | S-FSL5 |
| L22 | 1.51633 | 64.14 | S-BSL7 |
| L31 | 1.88300 | 40.76 | S-LAH58 |
| L34 | 1.77250 | 49.60 | S-LAH66 |
| L41 | 1.69680 | 55.53 | S-LAL14 |
| L42 | 1.80610 | 40.92 | S-LAH53 |
| L52 | 1.64769 | 33.79 | S-TIM22 |
| L53 | 1.65160 | 58.55 | S-LAL7 |
| L54 | 1.83481 | 42.72 | S-LAH55V |

The three νd 81.54 elements, the ED elements of the Olympus drawing, resolve to S-FPL51 and are tagged as
patent-designated anomalous-dispersion glass: the patent calls for it in G1 (¶0025) and around the stop in G4 and
G5 (¶0045), and each is the only νd 81.54 element in its unit, but their partial dispersion here is the catalog value, not a measured melt, so no apochromatic
claim follows from nd/νd alone. The LF plate uses S-BSL7 on the same basis.

## Focus Mechanism

Paragraphs 0078 and 0091 identify G2 as the focusing group, moving toward the object for closer subjects. The
patent prints no close-focus spacings for this embodiment. Table 1 gives only a focusing stroke of Δd/ft = 0.102
(about 20.6 mm at tele) and a maximum magnification MG = −0.255; a paraxial check of that stroke at tele gives
−0.254× about 1.05 m from the image, in line with ¶0021's "as short as 1 m". The production lens is specified at
1.2 m and 0.21×, so its focusing range differs from the patent's.

**Focus is not modeled.** The model is infinity-only and its focus control is disabled; the 1.2 m in the data file
is the maker's minimum focus distance, not a traced close state.

## Zoom Reconstruction

The patent prints only the wide, middle and tele spacings. Interpolating all five gaps linearly between them would
defocus the image by up to about 0.97 mm, so the 30 intermediate stations are reconstructed: D6, D10 and D32 (and
with them G1, G2 and G5) stay linear between the printed states, and **G4** is shifted, D17 − x and D23 + x, to hold
the paraxial image plane at the interpolated printed residual. The largest shift is 0.70 mm. All printed gaps and
the image plane are unchanged, and G1, G2, G4 and G5 all move toward the object throughout. This is a modeling
choice, not Olympus's cam.

With 33 equally spaced stations, the defocus added between stations stays below about 0.009 mm, the size of the
wide-open depth-of-focus reference 2λN² (0.0092 mm at f/2.8). The three printed states are marked published; the
other 30 are not.

The printed focal labels are kept at 52.468 / 101.227 / 202.201 mm. Intermediate labels equal the traced EFL plus
the interpolated printed-minus-traced offset, so near the middle they run up to about 1.01 mm above the traced
focal length; the zoom readout itself shows the traced EFL.

## Clear Apertures and Physical Geometry

No numerical clear apertures are published. Fig. 3A, which draws the same rims as Fig. 3C, gives radii of about
32 mm for G1, 22.6 mm for L21, 21 mm for L22, 13.2 mm for the L31–L33 block, 14.0 mm for L34, 15.6 mm for G4,
L51 and L53, 14.7 mm for L52 and 13.2 mm for L54. G1, L21, G4, L51, L53 and L54 are modeled at those values.
Where the drawing shows neighbours touching, the printed surfaces would cross below the drawn rims: r8/r9 at
about 20.9 mm, r12/r13 at 12.0 mm, r15/r16 at 12.6 mm and r26/r27 at 14.3 mm. The figure draws those faces
touching, with flat lands on L21's rear and L34's front, so L22 (20.0 mm), G3 (11.5–12.8 mm) and L52 (13.5 mm)
stay below the drawn outlines. L22 is held by the r8/r9 gap (20.3 mm is the most it admits); G3 and L52 sit
just above the full-aperture tele beam. The two drawn lands are modeled as flat rim cuts: L21's rear face is cut
5.44 mm behind its vertex (land at 20.7 mm), and L34's front face runs to 12.8 mm with a cut 2.14 mm deep (land at
12.2 mm, just outside the tele beam), so L34 renders square as drawn.

At r12/r13 and r15/r16 the tele marginal ray alone needs rims whose sags fill 0.911 and 0.915 of the air gap, so
the file allows up to 0.93 of a gap (the default is 0.90). No radius, thickness or index is altered, and no glass
is hidden by render trimming.

Across zoom and iris states the thinnest modeled glass edge is about 1.60 mm and the smallest air clearance about
0.045 mm. No zoom station is rim-limited at its full aperture.

## Fields and Image Quality

Table 1 gives an image-circle radius of **11.14 mm**, whereas ¶0066 describes 11.1 mm. The model's field analyses
use the Four Thirds half-diagonal of 10.82 mm. At the printed full-field angles, the d-line chief rays land
11.153 / 11.065 / 11.066 mm from the axis, and they leave the last surface at 7.4° to 5.8°, matching the patent's
|EW| of 5.8–7.4° (Condition 11).

The model's MTF is modest wide open: at the wide end and f/2.8, the photopic tangential MTF at 40 cycles/mm is
about 0.04 at half field (0.21 on axis). These are calculations on the patent prescription with catalog glass equivalents, not
measured Olympus MTF.

## Model Scope and Limitations

The prescription is the patent's, transcribed from the original page images. The middle focal-length label is a
recorded, unresolved source erratum. The model is infinity-only, its 30 intermediate zoom stations are a
reconstruction rather than Olympus's cam, its clear apertures are estimated, and its glasses are catalog
equivalents; no manufacturing tolerance or factory MTF is implied.

## Sources

1. [US 2004/0042087 A1, original USPTO PDF](https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/20040042087),
   especially Fig. 3 and ¶0066–0093, Numerical data 3.
2. [US 6,867,924 B2, original USPTO PDF](https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/6867924),
   same application; it reprints the same middle label.
3. [Olympus SWD release, 17 October 2007](https://www.olympus.co.jp/jp/news/2007b/nr071017zuikoj.html) and
   [original specifications](https://www.olympus.co.jp/jp/news/2007b/nr071017zuikospj.html).
4. [OM Digital Solutions historical Four Thirds specifications](https://support.jp.omsystem.com/jp/support/cs/DI/AccM/DI004041J.html),
   original non-SWD and SWD columns, updated 23 May 2011.
5. Olympus-authored Four Thirds Lenses Joint Catalog, September 2010, imprint N8020445-0910-01(B,T), PDF p. 9
   (printed p. 15) and p. 12; SWD section drawing with the ED elements marked.
6. [Original non-SWD instruction sheet VT523601/A0703](https://learnandsupport.getolympus.com/sites/default/files/media/files/2018/03/Zuiko_Digital_ED_50-200mm_F28-35_Instructions_JP_EN_DE_FR_ES_KR.pdf),
   lens configuration drawing and specifications of the original version.
7. [Photozone, Olympus Zuiko Digital 50-200mm f/2.8-3.5 ED SWD review](https://photozone.de/olympus--four-thirds-lens-tests/454-oly502002835),
   February 2010; notes the optical design inherited from the predecessor.
