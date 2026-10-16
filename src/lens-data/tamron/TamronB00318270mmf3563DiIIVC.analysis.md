## Patent Reference and Design Identification

**Patent:** JP 2010-044103 A  
**Application Number:** JP 2008-206018  
**Filed:** 2008-08-08  
**Published:** 2010-02-25  
**Inventors:** Akio Arakawa; Yuichi Muramatsu  
**Applicant:** Tamron Co., Ltd.  
**Title:** High Variable Power Zoom Lens  
**Embodiment analyzed:** Sole numerical embodiment (¶0018–0024), Figure 1

The modeled lens is the TAMRON AF 18-270mm f/3.5-6.3 Di II VC LD Aspherical [IF] MACRO, Model B003. The association with this patent rests on construction and special-element positions; Tamron does not cite the patent, and production units need not use the exact tabulated radii or materials.

The evidence for the association:

1. The table contains 18 glass elements in 13 air-separated groups once the three 0.2 mm aspherical resin layers are counted as parts of their hybrid elements. Tamron specifies 18 elements in 13 groups with three hybrid aspherical elements, two LD elements and one AD element.
2. The patent spans 18.40–264.21 mm at f/3.50–6.32, close to the marketed 18–270 mm f/3.5–6.3 envelope without scaling the design.
3. The four groups have positive–negative–positive–positive power; the second group focuses and a negative rear subgroup of the third group shifts sideways for stabilization. This matches the product's inner focusing [IF] and VC stabilization, although Tamron's description does not establish the patent's exact movements.
4. Tamron's construction diagram colors the hybrid aspheres at L4, L13 and L15, LD glass at L2 and L11 and AD glass at L3. Those are the prescription's three resin-layer positions, its two νd = 81.61 positive lenses and its νd = 63.39 phosphate-crown lens.
5. The August 2008 application and the 2008 B003 introduction belong to the same development period. The later 18-270mm B008 PZD is a different 16-element design.

Tamron's official B003 specifications identify APS-C coverage, Canon and Nikon versions, 0.49 m minimum focus across the zoom range, 1:3.5 maximum magnification at 270 mm, a 72 mm filter thread and seven diaphragm blades. Those are production specifications, not optical results calculated from this infinity-only model.

## Optical Architecture

The system is a four-group, roughly 14× refractive zoom of 18 elements in 13 air-separated groups. All 35 numbered surfaces are kept, including the flat stop at surface 15. The three resin layers are modeled as separate thin media cemented to their glass substrates, so the element list has 21 entries for 18 physical lenses.

The group focal lengths below are calculated from the unchanged prescription and reproduce the patent's ¶0023 values to the printed precision.

| Group | Surfaces | Calculated focal length (mm) | Role |
|---|---|---:|---|
| LG1 | 1–5 | +108.563017 | Positive front group |
| LG2 | 6–14 | -13.813013 | Negative variator and objectward focusing group |
| LG3 | 16–27 | +45.229680 | Positive central assembly |
| LG4 | 28–35 | +48.814590 | Positive rear group |
| LG3a | 16–23 | +26.821520 | Positive front subgroup of LG3 |
| LG3b | 24–27 | -40.500029 | Negative laterally moving stabilization subgroup |

Across the three published zoom states, D5 increases while D14 and D27 decrease and the back focus grows. Relative to the fixed image plane, all four groups move toward the object from wide to tele; the front vertex travels 90.0 mm (total length 145.4 mm at wide, 235.4 mm at tele).

At the wide end the back focus (38.7 mm) is about twice the focal length (18.4 mm), the long rear clearance a DSLR mirror box requires.

## Element-by-Element Analysis

Elements are numbered L1–L18 from the front. A hybrid asphere is listed as its resin layer (suffix r) and glass substrate (suffix g). Each entry gives the patent's d-line index and Abbe number, the glass class from the six-digit code, and the focal length of the element alone in air; cemented-component focal lengths follow each entry. The glass classes are not supplier identifications.

### Component 1: L1 / L2 (surfaces 1–3)

**L1 — Negative Meniscus.** nd = 1.84666, νd = 23.78. Glass: 847238 dense-flint class. f = −272.54 mm.

**L2 — Biconvex Positive.** nd = 1.49700, νd = 81.61. Glass: 497816 fluor-crown class (LD). f = +127.62 mm.

The cemented doublet is net positive (f = +242.93 mm). L2 is the large-Abbe positive lens that ¶0016 places in the first group to control tele-end lateral color, and the first of Tamron's two LD elements.

### Component 2: L3 (surfaces 4–5)

**L3 — Positive Meniscus.** nd = 1.61800, νd = 63.39. Glass: 618634 phosphate-crown class (AD). f = +192.23 mm.

L3 completes LG1. ¶0016 explains the choice: a second νd > 80 lens would need steeper curves, a thicker center and a larger filter size, so the third lens uses νd above 55 and nd above 1.55 instead. Tamron marks this position as its AD (anomalous dispersion) element.

### Component 3: L4r / L4g (surfaces 6–8)

**L4r — Hybrid resin layer (aspheric surface 6).** nd = 1.51460, νd = 49.96. Glass: Unmatched (resin). f = −2313.84 mm.

**L4g — Negative Meniscus.** nd = 1.80400, νd = 46.58. Glass: 804466 lanthanum-flint class. f = −22.61 mm.

Together they form the hybrid aspherical front element of LG2 (f = −22.40 mm), Tamron's first hybrid asphere. The resin's two base radii differ slightly, so the layer has a small paraxial power of its own; its aspheric departure does the correction work.

### Component 4: L5 (surfaces 9–10)

**L5 — Biconcave Negative.** nd = 1.80400, νd = 46.58. Glass: 804466 lanthanum-flint class. f = −24.79 mm.

The biconcave middle element continues the negative power of LG2.

### Component 5: L6 (surfaces 11–12)

**L6 — Biconvex Positive.** nd = 1.84666, νd = 23.78. Glass: 847238 dense-flint class. f = +20.86 mm.

A strong high-dispersion positive lens inside the net-negative LG2; it balances the color of the group's three negative lenses.

### Component 6: L7 (surfaces 13–14)

**L7 — Negative Meniscus.** nd = 1.88300, νd = 40.78. Glass: 883408 high-index lanthanum-flint class. f = −32.34 mm.

L7 closes LG2 ahead of the variable gap D14 and the stop. The whole group, not this element alone, moves toward the object to focus (¶0010).

### Component 7: L8 / L9 (surfaces 16–18)

**L8 — Negative Meniscus.** nd = 1.84666, νd = 23.78. Glass: 847238 dense-flint class. f = −112.29 mm.

**L9 — Biconvex Positive.** nd = 1.48749, νd = 70.21. Glass: 487702 fluor-crown class. f = +53.11 mm.

This weakly positive doublet (f = +103.04 mm) opens the positive front subgroup LG3a just behind the stop. Claim 3 and ¶0015 describe LG3a as at least three positive lenses, one cemented to a negative lens, plus a negative lens.

### Component 8: L10 (surfaces 19–20)

**L10 — Biconvex Positive.** nd = 1.48749, νd = 70.21. Glass: 487702 fluor-crown class. f = +52.20 mm.

¶0015 speaks of a positive meniscus with a weakly curved image side; in this example the rear radius (−111.63 mm) is about 3.4 times the front radius (+32.64 mm), so the lens is biconvex with most of its power at the front surface.

### Component 9: L11 / L12 (surfaces 21–23)

**L11 — Positive Meniscus.** nd = 1.49700, νd = 81.61. Glass: 497816 fluor-crown class (LD). f = +52.29 mm.

**L12 — Negative Meniscus.** nd = 1.83400, νd = 37.17. Glass: 834372 lanthanum-flint class. f = −93.91 mm.

The doublet is positive (f = +109.22 mm) and completes LG3a (f3a = +26.82 mm). L11 is the positive lens with νd above 80 that claim 4 and ¶0015 call for to correct tele-end color, and Tamron's second LD element.

### Component 10: L13r / L13g / L14 (surfaces 24–27)

**L13r — Hybrid resin layer (aspheric surface 24).** nd = 1.53610, νd = 41.20. Glass: Unmatched (resin). f = +84900.60 mm.

**L13g — Biconcave Negative.** nd = 1.77250, νd = 49.60. Glass: 772496 lanthanum-flint class. f = −27.29 mm.

**L14 — Positive Meniscus.** nd = 1.80810, νd = 22.80. Glass: 808228 dense-flint class. f = +80.69 mm.

This net-negative cemented component (f = −40.50 mm) is the patent's LG3b and the product's VC group: the patent shifts it across the axis to stabilize the image (claim 2). Claim 5 describes exactly this form, a biconcave negative lens with an aspheric surface cemented to a positive meniscus convex toward the object. The resin layer's two base radii are equal, so its paraxial power is negligible and its effect comes from the aspheric departure.

### Component 11: L15r / L15g (surfaces 28–30)

**L15r — Hybrid resin layer (aspheric surface 28).** nd = 1.51460, νd = 49.96. Glass: Unmatched (resin). f = +61211.84 mm.

**L15g — Biconvex Positive.** nd = 1.48749, νd = 70.21. Glass: 487702 fluor-crown class. f = +38.11 mm.

LG4 opens with the third hybrid asphere (f = +38.14 mm). Equal base radii again leave the resin layer almost powerless paraxially; its negative A4 term flattens the outer zone.

### Component 12: L16 / L17 (surfaces 31–33)

**L16 — Biconvex Positive.** nd = 1.48749, νd = 70.21. Glass: 487702 fluor-crown class. f = +53.10 mm.

**L17 — Biconcave Negative.** nd = 1.80400, νd = 46.58. Glass: 804466 lanthanum-flint class. f = −23.83 mm.

A net-negative doublet (f = −44.27 mm) between the two positive components of the positive fourth group.

### Component 13: L18 (surfaces 34–35)

**L18 — Biconvex Positive.** nd = 1.48749, νd = 70.21. Glass: 487702 fluor-crown class. f = +61.10 mm.

The last element of LG4. The patent lists no cover glass behind it; the back focus is image-side air.

## Glass Identification and Selection

The patent tabulates nd and νd only; it names no supplier and gives no nC, nF, ng or partial-dispersion data. The glass strings therefore give the six-digit d-line code and glass class. For dispersion away from the d line the model uses catalog glasses whose nd and νd match the patent's; these are equivalents, not identified production melts. The resin layers have no catalog match and use an Abbe-number approximation.

| Elements | nd / νd | Catalog equivalent used for dispersion |
|---|---|---|
| L9, L10, L15g, L16, L18 | 1.48749 / 70.21 | S-FSL5 (OHARA) |
| L2, L11 | 1.49700 / 81.61 | H-FK61 (CDGM) |
| L4r, L15r | 1.51460 / 49.96 | none (resin) |
| L13r | 1.53610 / 41.20 | none (resin) |
| L3 | 1.61800 / 63.39 | S-PHM52 (OHARA) |
| L13g | 1.77250 / 49.60 | E-LASF016 (HIKARI) |
| L4g, L5, L17 | 1.80400 / 46.58 | H-ZLaF50D (CDGM) |
| L14 | 1.80810 / 22.80 | S-NPH1 (OHARA) |
| L12 | 1.83400 / 37.17 | J-LASF010 (HIKARI) |
| L1, L6, L8 | 1.84666 / 23.78 | J-SF03 (HIKARI) |
| L7 | 1.88300 / 40.78 | S-LAH58 (OHARA) |

Tamron's LD and AD designations match the glass coordinates: the 497816 fluor-crown equivalent of L2 and L11 has ΔPgF ≈ +0.031, and the 618634 phosphate-crown equivalent of L3 has ΔPgF ≈ +0.007. Both values come from the catalog equivalents, not from measured production glass, so no apochromatic correction is claimed.

## Focus Mechanism

The patent focuses by moving LG2 toward the object (abstract, claim 1 and ¶0010). It prints only the three infinity-focus zoom states, with no near-focus travel or object distance.

The model therefore stays at infinity focus at every zoom position. Its 0.49 m focus-scale end is Tamron's marketed minimum focus distance, not a modeled near-focus state, and the marketed 1:3.5 maximum magnification is not reproduced. Without the focusing movement, an object at 0.49 m is far out of focus in the model: at the tele end, axial rays at half and 0.83 of the stop radius land 4.40 mm and 7.26 mm off axis on the image plane.

### Zoom states

| Quantity | Wide | Middle | Tele |
|---|---:|---:|---:|
| Patent focal length (mm) | 18.400 | 71.099 | 264.210 |
| D5 (mm) | 2.058 | 39.047 | 68.462 |
| D14 (mm) | 30.539 | 11.868 | 1.055 |
| D27 (mm) | 7.717 | 3.529 | 2.329 |
| Patent BF (mm) | 38.685 | 75.562 | 97.163 |

The zoom slider interpolates gaps linearly between stations. With only these three states, a 14× zoom interpolated that way leaves the image up to 13.5 mm out of focus between them, so the model adds ten calculated stations, five in each interval, at focal lengths spaced evenly in log f (23.05, 28.87, 36.17, 45.31, 56.76, 88.49, 110.13, 137.06, 170.58 and 212.30 mm). At each, LG1, LG3 and LG4 sit on a smooth curve (quadratic in log focal length) through their three printed positions, and LG2, the patent's focusing group, is placed so that the image falls on the fixed image plane. The resulting gaps stay positive and smooth; LG2 moves objectward to about 210 mm and then returns about 1.2 mm toward the image at the tele end. Between stations the remaining defocus is below 0.25 mm up to about 125 mm and at most 0.92 mm near 240 mm. The calculated stations are first-order states, not Tamron's cam, and the printed stations are unchanged.

## Aspherical Surfaces

Surfaces 6A, 24A and 28A are the outer faces of the three resin layers (L4r, L13r, L15r). The patent's equation is

x = (H²/r) / [1 + √(1 − A(H/r)²)] + A4 H⁴ + A6 H⁶ + A8 H⁸ + A10 H¹⁰.

Its A=1.0 corresponds to conventional K=A−1=0.0. Entering A directly as K would change the surface. All coefficients are preserved without scaling; absent A12 and A14 are zero. Coefficient A_p has units mm^(1−p).

| Surface | Source A / model K | A4 | A6 | A8 | A10 |
|---|---|---|---|---|---|
| 6A | 1.0 / 0.0 | 7.56725E-06 | -7.65747E-09 | -2.26456E-11 | 1.23747E-13 |
| 24A | 1.0 / 0.0 | 7.89296E-06 | 9.60742E-09 | 3.69345E-11 | -7.34306E-13 |
| 28A | 1.0 / 0.0 | -3.19107E-05 | -5.55382E-09 | -3.27936E-11 | 3.69412E-13 |

At the model semi-diameters, the departures from the spherical base are +0.270 mm at 6A (14.5 mm), +0.142 mm at 24A (11.5 mm) and −0.627 mm at 28A (11.8 mm). The semi-diameters are inferred, so these are model-rim values, not published clear-aperture departures.

The thinnest points of the resin layers are 0.021 mm on L4r and 0.058 mm on L13r; L15r is thinnest at its 0.200 mm center. The patent thicknesses are kept unchanged. L4r's outer and bonded faces have different base radii, which is why its positive aspheric departure can exceed its center thickness without the two faces crossing.

## Conditional Expressions and Source Discrepancies

The prescription reproduces the patent's group focal lengths (¶0023), but two of the printed condition values (¶0024) do not follow from those same focal lengths. No radii, gaps or indices are altered to force agreement.

| Condition | Calculated from the prescription | Printed | Bound |
|---|---:|---:|---|
| f1/ft | 0.4109 | 0.4030 | 0.35 < ratio < 0.45 |
| abs(f2)/ft | 0.0523 | 0.052 | 0.04 < ratio < 0.065 |
| f3/ft | 0.1712 | 0.1737 | 0.15 < ratio < 0.25 |

The first and third printed values disagree at printed precision; all three conditions are still satisfied. Because the prescription, the group focal lengths and the system focal lengths agree with one another, the prescription is kept as printed.

Figure 1 is captioned as the telephoto end, but its spacings match the wide-angle column: the drawn D5/D14 ratio is about 0.065, against 0.067 at wide and 64.9 at tele.

## Image Stabilization

The patent assigns stabilization to lateral shifts of the negative LG3b subgroup, L13r–L14 (¶0011 and claim 2); Figures 8–10 show coma for shifts of 0.07 mm at wide and ±0.47 mm at tele. The model is centered and does not simulate the shift. Tamron's VC description confirms the product feature, not this prescription's correction performance.

## Model Scope and Limitations

The prescription is in millimetres and unscaled. The blank index after surface 35 is read as air, and surface 15 is a flat aperture stop. The patent lists no camera cover plate and none is added.

| Quantity | Wide | Middle | Tele |
|---|---:|---:|---:|
| Calculated EFL (mm) | 18.400 | 71.098 | 264.214 |
| Calculated back focus (mm) | 38.685 | 75.562 | 97.163 |
| First vertex to image plane (mm) | 145.407 | 196.414 | 235.417 |
| Modeled stop radius (mm) | 8.096 | 8.092 | 8.100 |
| Patent f-number | 3.50 | 5.24 | 6.32 |

The stop diameter is not published. The model sizes the iris to give the patent's f-numbers at the three printed states; the resulting radii are nearly equal, and a single fixed iris would give f/3.500, 5.237 and 6.323, so the patent's values are consistent with a stop that does not change with zoom. The calculated stations use the f-numbers that this near-constant iris gives (f/3.72 at 23 mm to f/6.28 at 212 mm).

Semi-diameters are inferred from the patent figure and ray clearance, not published. Figure 1's optical curves give a descending front outline: surface 1 uses 29.0 mm, the first doublet's shared/rear faces 28.5 mm, and the following singlet 27.0 mm. These replace the previous 30.5/30.0 mm front rims; the later rim estimates are retained. The 14.5 mm image-corner chief ray passes at every zoom station. Some outer-field rays are vignetted, as in the real lens; at the tele end, for example, a ray at 2.78° through the outer pupil (0.75 of its radius) would strike the front surface at 33.9 mm, outside its 29.0 mm radius.

The printed full fields of 76.5°/23.1°/6.3° equal 2 atan(14.5/f) at their stated precision (76.48°/23.05°/6.28°). The coma diagrams (Figures 3, 5 and 7) instead give the real incident half-angles 39.51°/11.22°/3.093°, and real chief rays at those angles reach the 14.5 mm image height in the model, so the difference is the lens's distortion.

No MTF, transmission, stabilization or manufacturing-tolerance performance is claimed for the model.

## Sources

- [JP 2010-044103 A](https://depatisnet.dpma.de/DepatisNet/depatisnet?action=pdf&docid=JP002010044103A): English abstract page followed by the Japanese publication; printed pages 6–7 (¶0018–0024) contain the prescription, zoom gaps, asphere equation and coefficients, and group and condition values; printed page 8 contains Figure 1. Wavelengths are given in ¶0025.
- [Tamron B003 specifications (Japanese archive page)](https://www.tamron.com/jp/consumer/lenses/data/af-lens/b003/): marketed specifications, 18/13 construction, three hybrid aspherical, two LD and one AD elements, IF/VC, mounts and 2008 introduction.
- [Tamron B003 brochure (French distributor)](https://hvsgroup.fr/documentations/Tamron/Tamron-catalogue-18-270-B003-fr.pdf): construction diagram marking the LD and hybrid aspherical elements.
- [HOYA](https://www.hoya-opticalworld.com/english/datadownload/index.html), [OHARA](https://www.ohara-inc.co.jp/en/product/catalog/), [SCHOTT](https://www.schott.com/en-gb/products/optical-glass), [SUMITA](https://www.sumita-opt.co.jp/en/download/), [HIKARI](https://www.hikari-g.co.jp/optical_glass/catalog/) and [CDGM](https://www.cdgmglass.com/) glass catalogs: catalog equivalents for the patent's glass coordinates. They do not identify Tamron's actual glass suppliers.
