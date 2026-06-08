# Olympus Zuiko Digital ED 12–60 mm F2.8–4.0 SWD

## Patent Reference and Design Identification

**Patent:** US 7,583,450 B2  
**Application Number:** 12/150,902  
**Filed:** 2008-04-30  
**Granted:** 2009-09-01  
**Priority:** JP 2007-135425 (2007-05-22)  
**Inventor:** Atsujiro Ishii  
**Assignee:** Olympus Imaging Corp., Tokyo  
**Title:** Zoom Lens  
**Embodiment analyzed:** Example 4 (FIG. 4, FIG. 11, FIG. 12)

The patent discloses a four-group zoom of positive–negative–positive–positive power distribution for a digital single-lens reflex camera format smaller than 35 mm film. Example 4 is the embodiment corresponding to the production Olympus **Zuiko Digital ED 12–60 mm F2.8–4.0 SWD**. The requested file stem uses `MZuiko`, but the product represented by this patent is the Four Thirds DSLR **Zuiko Digital** lens, not a Micro Four Thirds M.Zuiko lens.

The identification rests on convergent evidence. Example 4 tabulates $f = 12.33 / 26.62 / 58.81$ mm and FNO $= 2.88 / 3.50 / 4.08$, matching the marketed 12–60 mm f/2.8–4.0 specification after ordinary product rounding. The patent uses a 14-element marketed construction when the thin replicated resin layer on the front G2 hybrid asphere is counted as part of its glass substrate; this matches the manufacturer's 14 elements in 10 groups. The glass palette also matches the published special-element count: one Super ED element, three ED elements including one aspherical ED element, and two non-ED aspherical elements. The patent's close-focus data use OD = 250 mm measured from the image plane, corresponding to the production 0.25 m minimum focus distance. The aberration diagrams for Example 4 are drawn to FIY = 11.15 mm, covering the Four Thirds 21.6 mm diagonal.

Independent paraxial re-tracing confirmed the printed Example 4 prescription, including the surface-4 radius $r_4 = 52.3050$ mm. With the printed radius, the trace gives $f = 12.326 / 26.621 / 58.807$ mm and reproduces the patent's condition table to rounding. No radius correction is applied in the data file.

Where the patent and manufacturer differ, the manufacturer-published product numbers govern hard product specification: 12–60 mm, f/2.8–4.0, Four Thirds mount, 0.25 m close focus, 72 mm filter, and 575 g. The patent values are reported as the underlying design prescription.

## Optical Architecture

The design is a four-group retrofocus-type standard zoom with the power sequence **positive–negative–positive–positive**. The aperture stop is immediately in front of G3 and moves with G3 in Example 4. This topology is typical of a high-ratio DSLR standard zoom: the positive first group controls front-end size and pupil position, the negative second group supplies most of the zoom variation and the internal focus motion, and the rear positive groups provide relay power and the long back focus needed for a mirror box.

- **G1 (positive, 3 elements / 2 groups):** a cemented negative-positive front doublet followed by a positive meniscus. Net focal length is $f_1 = +112.78$ mm.
- **G2 (negative, 4 marketed elements / 3 groups):** a hybrid replicated asphere, a cemented negative-positive doublet, and a rear double-sided aspherical negative meniscus. Net focal length is $f_2 = -13.39$ mm. G2 is both the variator and the internal focus group.
- **G3 (positive, 3 elements / 2 groups):** a biconvex positive singlet followed by a positive-negative cemented doublet. Net focal length is $f_3 = +104.34$ mm.
- **G4 (positive, 4 elements / 3 groups):** an aspherical ED biconvex positive, a Super ED biconvex positive, and a rear negative-positive ED cemented pair. Net focal length is $f_4 = +31.38$ mm.

On zooming from wide to telephoto, the G1–G2 spacing increases, G2–G3 decreases, and G3–G4 decreases. G1, G3, and G4 move toward the object side; G2 first moves toward the image side and then returns slightly toward the object side. The zoom ratio from the patent design focal lengths is $58.81/12.33 = 4.77×$.

## Element-by-Element Analysis

Element focal lengths below are standalone thick-lens-in-air values. Surface numbering follows the patent prescription, with the sensor cover glass excluded and folded into the air-equivalent back focal distance.

### G1 — Front Collector

#### L1 + L2 — Cemented Doublet (Negative Meniscus + Plano-convex Positive)

**L1:** nd = 1.84666, νd = 23.78. Glass: S-TIH53 (OHARA) — dense flint. f = −219.9 mm.  
**L2:** nd = 1.56384, νd = 60.67. Glass: S-BAL41 (OHARA, non-recommended). f = +143.0 mm.

L1 is a negative meniscus convex to the object. L2 is a plano-convex positive sharing the cemented interface at surface 2. The doublet is a weak positive achromat; the high-index flint paired with S-BAL41 crown reduces the longitudinal color burden before the beam reaches the variator.

The previous analysis described L2 as an SK11-class crown. The catalog match is more specific: the stored 1.56384 / 60.67 pair is OHARA S-BAL41.

#### L3 — Positive Meniscus, convex to object

nd = 1.60311, νd = 60.64. Glass: S-BSM14 (OHARA). f = +152.6 mm.

L3 completes the positive front group. The printed $r_4 = 52.3050$ mm value is retained because the re-trace reproduces the patent's own focal-length and condition tables. With the printed surface, G1 computes to $f_1 = +112.78$ mm.

### G2 — Variator and Internal Focus Group

The second group is divided into a negative front unit and a negative rear unit. During close focusing the entire second group translates toward the object side while the internal G2 gap closes.

#### L4r + L4g — Hybrid Composite Thin Negative Meniscus (Aspherical), convex to object

**L4r resin layer:** nd = 1.51940, νd = 51.94. Glass: Unmatched UV-cured resin replica. f = −219.2 mm.  
**L4g glass substrate:** nd = 1.88300, νd = 40.76. Glass: S-LAH58 (OHARA). f = −17.6 mm.

The front-most G2 element is modeled as a separate resin layer plus high-index glass substrate because the prescription gives separate indices and thicknesses. For product element counting, the pair is one hybrid aspherical element. The aspherical surface at surface 6 is the first of the two non-ED aspherical elements in the manufacturer's specification.

#### L5 + L6 — Cemented Doublet (Biconcave ED Negative + Biconvex Positive)

**L5:** nd = 1.49700, νd = 81.54. Glass: S-FPL51 (OHARA) — ED. f = −20.9 mm.  
**L6:** nd = 1.64769, νd = 33.79. Glass: S-TIM22 (OHARA, non-recommended). f = +18.8 mm.

The biconcave S-FPL51 element is the G2 negative lens satisfying the patent's low-dispersion glass condition. Its positive flint partner partly neutralizes power while allowing strong chromatic correction inside the variator.

#### L7 — Negative Meniscus (Aspherical, both surfaces), convex to image

nd = 1.69300, νd = 53.14. Glass: M-LAC130 / P-LAK35 class moldable LAK, soft match. f = −57.2 mm.

L7 is the rear unit of G2. Both surfaces are aspherical, making it the second non-ED aspherical element. Its location near the most divergent portion of the G2 beam makes it effective for wide-end distortion, astigmatism, and focus-induced astigmatism fluctuation.

### G3 — Stop Group

#### L8 — Biconvex Positive

nd = 1.58913, νd = 61.14. Glass: S-BAL35 (OHARA). f = +63.0 mm.

L8 is the leading positive of the stop group. It begins reconverging the beam leaving G2 and establishes the marginal-ray height entering the G3 cemented pair.

#### L9 + L10 — Cemented Doublet (Biconvex Positive + Biconcave Negative)

**L9:** nd = 1.54814, νd = 45.79. Glass: S-TIL1 (OHARA). f = +28.1 mm.  
**L10:** nd = 1.80400, νd = 46.57. Glass: S-LAH65V (OHARA). f = −20.8 mm.

The cemented pair is weakly negative as a unit and serves mainly as the G3 chromatic corrector. S-LAH65V is a dense lanthanum flint in this context; its Abbe number is below the practical crown/flint boundary.

### G4 — Rear Relay and Field Group

#### L11 — Biconvex Positive (Aspherical, both surfaces) — ED

nd = 1.49650, νd = 81.53. Glass: HOYA MP-FCD1-M20 / FCD1-class moldable ED, soft match. f = +34.6 mm. ΔPgF ≈ +0.031 inferred.

L11 is the aspherical ED element in the manufacturer's special-element count. It carries substantial positive relay power while correcting astigmatism and coma across the zoom range.

#### L12 — Biconvex Positive — Super ED

nd = 1.43875, νd = 94.93. Glass: S-FPL53 (OHARA) — Super ED. f = +77.2 mm. ΔPgF ≈ +0.0505.

L12 is the lowest-dispersion element in the prescription and supplies the strongest secondary-spectrum correction. It works with the ED elements in G2 and G4 to reduce lateral color, the chromatic aberration emphasized by the patent.

#### L13 + L14 — Cemented Pair (Biconcave Negative + Biconvex ED Positive)

**L13:** nd = 1.88300, νd = 40.76. Glass: S-LAH58 (OHARA). f = −19.8 mm.  
**L14:** nd = 1.49700, νd = 81.54. Glass: S-FPL51 (OHARA) — ED. f = +24.8 mm.

The rear cemented pair is close to afocal as a pair and functions as a chromatic and field corrector at the rear of G4. L14 is the second S-FPL51 element and the third ED element in the product's published non-Super-ED count.

## Glass Identification and Selection

Glass identities were rechecked against manufacturer catalogs by nd / νd matching. Exact OHARA matches were retained where the stored patent values matched catalog values. For moldable aspheres where the stored nd / νd pair is close but not exact to a catalog entry, the analysis uses a class label rather than a false exact designation.

| Element | nd | νd | ΔPgF | Catalog identification | Role |
|---|---:|---:|---:|---|---|
| L1 | 1.84666 | 23.78 | +0.0165 | S-TIH53 (OHARA) | Dense-flint front achromat partner |
| L2 | 1.56384 | 60.67 | −0.0003 | S-BAL41 (OHARA) | Crown partner in front achromat |
| L3 | 1.60311 | 60.64 | +0.0005 | S-BSM14 (OHARA) | Corrected front positive meniscus |
| L4r | 1.51940 | 51.94 | — | Unmatched resin | Hybrid aspherical layer |
| L4g | 1.88300 | 40.76 | −0.0083 | S-LAH58 (OHARA) | High-index G2 substrate |
| L5 | 1.49700 | 81.54 | +0.0319 | S-FPL51 (OHARA) | G2 negative ED |
| L6 | 1.64769 | 33.79 | +0.0075 | S-TIM22 (OHARA) | Flint partner in G2 doublet |
| L7 | 1.69300 | 53.14 | — | M-LAC130 / P-LAK35 class | Moldable double-aspheric G2 meniscus |
| L8 | 1.58913 | 61.14 | +0.0001 | S-BAL35 (OHARA) | G3 leading positive |
| L9 | 1.54814 | 45.79 | +0.0021 | S-TIL1 (OHARA) | G3 positive doublet element |
| L10 | 1.80400 | 46.57 | −0.0087 | S-LAH65V (OHARA) | Dense lanthanum flint in G3 |
| L11 | 1.49650 | 81.53 | ≈ +0.031 | HOYA MP-FCD1-M20 / FCD1 class | Moldable aspherical ED |
| L12 | 1.43875 | 94.93 | +0.0505 | S-FPL53 (OHARA) | Super ED secondary-spectrum corrector |
| L13 | 1.88300 | 40.76 | −0.0083 | S-LAH58 (OHARA) | Rear high-index negative |
| L14 | 1.49700 | 81.54 | +0.0319 | S-FPL51 (OHARA) | Rear ED positive |

The chromatic strategy is concentrated in L5, L11, L12, and L14. L5 satisfies the patent's requirement for a low-dispersion negative lens in G2. L11, L12, and L14 satisfy the corresponding positive-lens requirement in G4. The Super ED L12 is the strongest anomalous-partial-dispersion element and is the main secondary-spectrum corrector.

## Focus Mechanism

Focusing is internal. The whole second group moves toward the object side as subject distance decreases, and the internal gap between the G2 front and rear units closes. G1, G3, G4, and the image-side spacing are not focus groups.

The patent publishes infinity and OD = 250 mm spacings. OD is measured from the image plane, so the patent close-focus condition corresponds to 0.25 m.

| Gap | Wide ∞ | Wide 0.25 m | Mid ∞ | Mid 0.25 m | Tele ∞ | Tele 0.25 m |
|---|---:|---:|---:|---:|---:|---:|
| d5, G1–G2 | 0.842 | 0.599 | 20.864 | 19.792 | 43.410 | 40.543 |
| d11, G2 internal | 3.188 | 0.777 | 3.188 | 0.777 | 3.188 | 0.777 |
| d13, G2–stop | 24.085 | 26.745 | 9.772 | 13.254 | 2.152 | 7.430 |
| d19, G3–G4 | 8.096 | 8.096 | 3.067 | 3.067 | 0.800 | 0.800 |
| BF, air-equivalent | 33.673 | 33.673 | 47.829 | 47.829 | 64.893 | 64.893 |

Corrected paraxial close-focus magnification at OD = 250 mm is −0.088 / −0.161 / −0.267 at wide, mid, and telephoto. The telephoto value agrees with the manufacturer's maximum reproduction ratio of 0.28× within expected first-order rounding.

## Aspherical Surfaces

The patent uses the sag form

$$x = \frac{y^2/r}{1 + \sqrt{1 - (K+1)(y/r)^2}} + A_4 y^4 + A_6 y^6 + A_8 y^8 + A_{10} y^{10} + A_{12} y^{12}.$$

The radical contains $(K+1)$, so the tabulated K is the standard conic constant directly. K = 0 is a spherical base conic. Example 4 uses five aspherical surfaces on three marketed elements: surface 6 on the hybrid G2 front element, surfaces 12 and 13 on the rear G2 meniscus, and surfaces 20 and 21 on the aspherical ED element in G4.

| Surface | Element | K | A4 | A6 | A8 | A10 | A12 |
|---|---|---:|---:|---:|---:|---:|---:|
| 6 | L4r/L4g hybrid | 34.8871 | 3.0812e−5 | −9.6291e−8 | 1.8012e−10 | −2.2992e−13 | −1.4937e−16 |
| 12 | L7 front | 0.0251 | −3.4769e−5 | 6.1141e−7 | −3.8025e−9 | 1.0400e−11 | 0 |
| 13 | L7 rear | −18.7766 | −4.3652e−5 | 5.5882e−7 | −3.6933e−9 | 9.8343e−12 | 0 |
| 20 | L11 front | 0 | −1.2143e−5 | −7.3098e−9 | 2.7747e−10 | −3.6706e−12 | 0 |
| 21 | L11 rear | 0 | 2.0138e−5 | −3.6119e−8 | 3.7265e−10 | −3.9715e−12 | 0 |

Surface 6 is a replicated hybrid asphere and primarily attacks wide-end distortion and astigmatism. Surfaces 12 and 13 act near the rear of the focus group, where they control distortion, astigmatism, and focus-induced astigmatism change. Surfaces 20 and 21 are on the G4 ED positive element and primarily control coma and astigmatism across the zoom range.

## Chromatic Correction Strategy

The patent identifies secondary spectrum in lateral chromatic aberration as a major difficulty in wide-ratio digital SLR standard zooms. Example 4 addresses this by placing low-dispersion anomalous glass in both the negative variator and the rear positive relay group. The result is not formally an apochromatic specification, but it is a strong secondary-spectrum-control strategy for a 4.77× retrofocus standard zoom.

The controlling elements are L5 in G2, L11/L12/L14 in G4, and the dense flint/crown achromatization in G1 and G3. L12, the S-FPL53 element, has the largest positive ΔPgF and therefore does the heaviest residual g-line correction.

## Conditional Expressions

The patent states the following group-power and glass conditions:

$$0.1 < |f_2/f_1| < 0.14, \qquad 0.1 < |f_4/f_3| < 0.6$$

$$n_d > 1.4, \qquad \nu_d > 80.$$

The narrowed preferred ranges are $0.11 < |f_2/f_1| < 0.135$, $0.13 < |f_4/f_3| < 0.5$, $1.7 > n_d > 1.4$, and $120 > \nu_d > 80$.

Using the printed Example 4 prescription, the independently computed group focal lengths are $f_1 = +112.78$ mm, $f_2 = -13.39$ mm, $f_3 = +104.34$ mm, and $f_4 = +31.38$ mm.

| Condition | Patent table | Computed | Result |
|---|---:|---:|---|
| $f_2/f_1$ | −0.119 | −0.1187 | within full and narrowed ranges |
| $f_4/f_3$ | +0.301 | +0.3008 | within full and narrowed ranges |

The glass conditions are satisfied by L5 in G2 and by L11, L12, and L14 in G4.

## Verification Summary

All numerical checks below were re-derived by a Python paraxial ray trace from the printed Example 4 prescription.

- **System EFL:** the trace gives $f = 12.326 / 26.621 / 58.807$ mm at the wide, intermediate, and telephoto positions, matching the patent's $12.33 / 26.62 / 58.81$ mm table to rounding.
- **Group focal lengths:** $f_1 = +112.78$ mm, $f_2 = -13.39$ mm, $f_3 = +104.34$ mm, and $f_4 = +31.38$ mm; these reproduce the patent's Ex. 4 condition table.
- **Back focus:** after folding the patent cover glass into air, BF is 33.673 / 47.829 / 64.893 mm, within a few micrometers of the paraxial image distances from surface 26.
- **Petzval sum:** surface-by-surface $\sum (n'-n)/(R n n') = +2.758 \times 10^{-3}$ mm$^{-1}$, giving a Petzval radius of approximately −362.6 mm and $P f_\text{wide} = 0.034$.
- **Field and zoom ratio:** to FIY = 11.15 mm, the paraxial diagonal field is 84.2° / 45.5° / 21.5° and the zoom ratio is 4.77×.
- **Close focus:** OD = 250 mm gives paraxial magnification −0.088 / −0.161 / −0.267 across the three zoom states.

## Sources

- US 7,583,450 B2, "Zoom Lens," Atsujiro Ishii / Olympus Imaging Corp. — Example 4 prescription, zoom/focus spacing tables, conditional expressions, and aberration diagrams.
- OM Digital Solutions / Olympus ZUIKO DIGITAL lens specification table — product construction, special-element count, field angle, close focus, aperture range, filter size, dimensions, and mass.
- OHARA optical glass catalog and datasheets: S-TIH53, S-BAL41, S-BSM14, S-LAH58, S-FPL51, S-TIM22, S-BAL35, S-TIL1, S-LAH65V, and S-FPL53.
- HOYA optical glass catalog and moldable-glass references for MP-FCD1 / FCD1-class and M-LAC130 / P-LAK35-class soft matches.
