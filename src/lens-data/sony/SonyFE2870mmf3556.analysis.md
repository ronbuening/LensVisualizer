# Sony FE 28-70mm F3.5-5.6 OSS — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** US 2015/0077859 A1  
**Application Number:** 14/447,842  
**Filed:** July 31, 2014  
**Published:** March 19, 2015  
**Priority:** JP 2013-192194, filed September 17, 2013  
**Inventors:** Fumikazu Kanetaka; Kodai Nagamatsu  
**Assignee:** Sony Corporation  
**Title:** Zoom Lens and Imaging Apparatus  
**Embodiment analyzed:** Numerical Example 4; Tables 13-17; FIGS. 13-16

Numerical Example 4 is the closest disclosed prescription for the Sony FE 28-70mm F3.5-5.6 OSS (SEL2870). The identification rests on convergent rather than single-point evidence.

1. The example is a 9-element / 8-group full-frame standard zoom; Sony's published production specification is also 9 elements in 8 groups.
2. The example contains three aspherical elements: G4, G7, and G8. These supply five aspherical surfaces: 7, 8, 13, 14, and 16. Sony describes the production lens as using three aspherical elements.
3. The example includes one very-low-dispersion positive element at `nd = 1.49700`, `νd = 81.61`, corresponding to the production lens's single ED element.
4. The patent focal-length range is `f = 28.82-67.90 mm`, with patent F-numbers `F3.59-F5.74`. This is the design-level counterpart of the marketed 28-70mm F3.5-5.6 range.
5. The patent's maximum image height is `Y = 21.633 mm`, equivalent to a 43.266 mm diagonal image circle, matching a 35mm full-frame sensor.
6. The patent states that the third group travels for focusing, and Example 4's GR3 is a single negative element. This agrees with a compact internal-focus standard-zoom implementation, although the patent does not describe Sony's production drive motor.
7. The priority date, September 2013, aligns with the first-generation Sony full-frame E-mount system period.

The production lens includes Optical SteadyShot. The patent prescription analyzed here is a centered zoom and focus prescription; it does not identify a decentered stabilizing group or publish stabilization displacements. The data file therefore models the centered optical formula only.

## Optical Architecture

The lens is a four-group negative-positive-negative-positive standard zoom. The patent emphasizes this `GR1(-) / GR2(+) / GR3(-) / GR4(+)` power distribution because it supports a roughly 37° wide-end half-field, compact front diameter, favorable off-axis aberration correction by negative groups placed around the stop, and reduced sensor-side ray angles from the positive rear group (¶0004, ¶0040).

GR1 contains three spherical elements: two negative lenses followed by a positive meniscus. Its job is to form the wide-angle retrofocus front section. At the wide end, the air-equivalent back focal distance after folding the patent filter is about 33.17 mm, greater than the 28.85 mm computed EFL; the design is therefore retrofocus at the wide end. At the long end this description should not be extended into a telephoto-ratio claim; the patent uses "telephoto end" only as a zoom-position term.

GR2 is the main positive group. It contains G4, the stop, the G5/G6 cemented ED doublet, and G7. It carries the strongest positive power in the lens and most of the high-order spherical-aberration correction through the two double-sided molded-asphere candidates G4 and G7.

GR3 is a single biconcave negative lens, G8. It is both a zooming group and the focusing group. Its single-element construction follows the patent's stated aim of reducing focus-group mass and actuator load (¶0058).

GR4 is a fixed positive meniscus, G9. It remains stationary during zooming and focusing. Its weak positive power bends the exit bundle toward the optical axis and participates in field-curvature correction close to the image plane. The patent specifically favors a single spherical positive lens in this rear group to control cost where lens diameter is relatively large (¶0040, ¶0060).

The patent includes a flat filter `FL` between G9 and the image plane. The data file excludes that filter from the surfaces array and folds it into the final air-equivalent back focal distance: `30.521 + 2.500 / 1.51680 + 1.000 = 33.169207 mm`.

The patent does not publish semi-diameters. The data-file semi-diameters are conservative mechanical clear-aperture estimates, constrained by the patent drawing, the computed ray envelopes, element front/rear diameter ratios, edge thickness, and cross-gap sag clearance across both infinity and close-focus states. They should not be read as measured production clear apertures.

## Element-by-Element Analysis

### G1 — Negative Meniscus, convex to object

`nd = 1.83480`, `νd = 42.72`. Glass: S-LAH55V (OHARA) / TAFD5G-class dense lanthanum flint. `f = -49.5 mm`.

G1 is the first and largest refractive element in the system. Its positive radii, `R1 = +34.0816 mm` and `R2 = +18.3083 mm`, define a negative meniscus convex to the object side. The element supplies high front-end divergence without requiring an aspherical surface in the large-diameter front group.

The shape factor `(R1a + R1b)/(R1a - R1b) = 3.32` is one of the patent's central constraints. The patent ties this range to spherical-aberration correction at the long end (¶0042). The high index keeps the curvatures practical for the required negative power.

### G2 — Biconcave Negative

`nd = 1.74400`, `νd = 44.72`. Glass: S-LAM2 / LaF2-class lanthanum flint. `f = -46.4 mm`.

G2 is the second negative member of GR1. It shares the wide-angle divergence with G1 but uses a different 744/447-448 glass class. That change gives the front group an additional chromatic degree of freedom instead of making the two negative lenses simple duplicates.

The element is biconcave by radius sign: the front radius is negative and the rear radius is positive. Its power is similar to G1's but its ray-height role is different because it works after G1 has already expanded and redirected the bundle.

### G3 — Positive Meniscus, convex to object

`nd = 1.92290`, `νd = 20.88`. Glass: E-FDS1 (HOYA) / N-SF66-class high-index, high-dispersion flint. `f = +71.0 mm`.

G3 is the positive member that closes the front negative group. Its very high index and low Abbe number allow it to oppose the chromatic power of G1 and G2 without neutralizing GR1's required net negative power.

The relevant catalog region is the 923/209 class. E-FDS1 or N-SF66 class is the closest public catalog description for `nd ≈ 1.9229`, `νd ≈ 20.88`.

### G4 — Biconvex Positive, two aspherical surfaces

`nd = 1.58310`, `νd = 59.46`. Glass: L-BAL42-class low-softening barium crown. `f = +30.0 mm`.

G4 is the first element of GR2 and sits immediately before the aperture stop. It is the strongest single positive element in the system when treated as an in-air component. Its double-sided aspherical form corrects the spherical aberration that would otherwise be introduced by such a compact positive group.

The catalog match is a 583/594 low-softening barium-crown class. The L-prefix form is compatible with molded-glass asphere production, although the patent does not specify the manufacturing process.

### G5/G6 — Cemented ED Doublet behind the stop

G5: `nd = 1.49700`, `νd = 81.61`. Glass: FCD1 (HOYA) / S-FPL51-class ED fluorophosphate crown. In-air `f = +32.0 mm`.

G6: `nd = 1.63980`, `νd = 34.57`. Glass: E-FD7 (HOYA) / S-TIM27-class flint. In-air `f = -19.7 mm`.

The G5/G6 cemented doublet is the main axial-color correction unit in GR2. The Abbe-number separation is large: `Δνd ≈ 47.0`. The doublet sits just behind the stop where marginal ray height is high enough for axial color and spherical correction to be efficient.

As a cemented assembly, G5/G6 is not simply the sum of two standalone thin lenses. A direct paraxial trace of surfaces 10-12 gives a net doublet focal length of `-59.9 mm`; this negative in-situ result is important because the surrounding G4 and G7 positives must overcome it to make GR2 net positive.

### G7 — Biconvex Positive, two aspherical surfaces

`nd = 1.58310`, `νd = 59.46`. Glass: L-BAL42-class low-softening barium crown. `f = +34.2 mm`.

G7 is the rear positive element of GR2. Like G4, it uses the 583/594 barium-crown class and carries two aspherical surfaces. Its position after the cemented doublet gives it leverage over residual spherical aberration, coma, and field curvature as the beam exits the positive group.

The aspherical coefficients on surfaces 13 and 14 are the largest in the example. At the adopted data-file semi-diameter of 9.30 mm, the polynomial departures are substantial, so the element should be treated as a shaped molded/aspherical component rather than as a mildly retouched spherical lens.

### G8 — Biconcave Negative, one aspherical surface; focusing group

`nd = 1.69350`, `νd = 53.20`. Glass: L-LAL13 / S-LAL13-class lanthanum crown. `f = -36.3 mm`.

G8 is the whole of GR3. It is a thin single negative lens with a nearly flat front surface and a stronger positive rear radius. The rear surface is aspherical. The patent's single-element GR3 construction directly supports low moving mass for focusing (¶0058).

The catalog identification is the 694/532 lanthanum-crown class. The patent's `nd`, `νd` pair places this element in the 694/532 lanthanum-crown class. L-LAL13 is plausible for a molded or low-softening interpretation; S-LAL13 is the polished-glass counterpart in the same optical class.

Finite-conjugate paraxial solving of the data file indicates that close focus is represented by image-ward motion of GR3: D14 increases and D16 decreases. The resulting motion is a useful warning against inferring focus direction solely from the sign of the focus group power.

### G9 — Positive Meniscus, convex to image; fixed rear group

`nd = 1.74950`, `νd = 35.04`. Glass: E-LAF7 (HOYA) / H-LaF4-class dense lanthanum flint. `f = +104.9 mm`.

G9 is the fixed fourth group. Both radii are negative, so the meniscus is convex toward the image side. The patent explicitly describes this fourth group as one positive lens and keeps its surfaces spherical to reduce cost in a relatively large rear element (¶0040, ¶0060).

The shape factor `(R4a + R4b)/(R4a - R4b) = 5.19` satisfies the patent's preferred field-curvature condition. The element is weak in power compared with GR2, but its rear position gives it strong leverage over chief-ray angle and field curvature at the sensor.

## Glass Identification and Selection

The patent publishes `nd` and `νd`, not manufacturer glass names. The following names are catalog-class identifications, with exact matches used where available and class labels used where catalog revisions differ slightly.

| Element | Patent `nd` | Patent `νd` | Adopted catalog class | Role |
|---|---:|---:|---|---|
| G1 | 1.83480 | 42.72 | S-LAH55V / TAFD5G class, 835427 | High-index front negative |
| G2 | 1.74400 | 44.72 | S-LAM2 / LaF2 class, 744447-448 | Second front negative |
| G3 | 1.92290 | 20.88 | E-FDS1 / N-SF66 class, 923209 | High-dispersion positive achromatizing member |
| G4 | 1.58310 | 59.46 | L-BAL42 class, 583594 | Moldable/aspherical positive crown |
| G5 | 1.49700 | 81.61 | FCD1 / S-FPL51 class, 497816 | ED positive member of cemented doublet |
| G6 | 1.63980 | 34.57 | E-FD7 / S-TIM27 class, 640346 | High-dispersion negative doublet mate |
| G7 | 1.58310 | 59.46 | L-BAL42 class, 583594 | Moldable/aspherical positive crown |
| G8 | 1.69350 | 53.20 | L-LAL13 / S-LAL13 class, 694532 | Negative focus element |
| G9 | 1.74950 | 35.04 | E-LAF7 / H-LaF4 class, 750350 | Fixed rear positive meniscus |

The chromatic strategy is conventional but carefully distributed. GR1 uses a very high-dispersion positive G3 against the two moderate-dispersion negative lenses. GR2 uses the ED/flint cemented doublet immediately behind the stop. The rear positive G9 then applies a final field-edge and chief-ray-angle trim, with its relatively high dispersion participating in lateral-color balance.

## Focus Mechanism

The patent states that the third lens group travels during focusing. In Numerical Example 4 this group is a single biconcave negative lens, G8. The patent does not publish close-focus spacings, so the data file uses a paraxial finite-conjugate solution constrained by Sony's official endpoint minimum-focus distances: 0.30 m at the wide end and 0.45 m at the long end. The mid-zoom focus distance is linearly interpolated only for smooth viewer behavior; it is not a separately published Sony specification.

| Zoom position | MFD used | D14 infinity | D14 close | D16 infinity | D16 close | Paraxial magnification |
|---|---:|---:|---:|---:|---:|---:|
| 28.82 mm | 0.300 m | 2.990 | 4.568 | 4.959 | 3.381 | 0.137x |
| 44.26 mm | 0.359 m | 8.085 | 10.812 | 8.477 | 5.750 | 0.163x |
| 67.90 mm | 0.450 m | 14.420 | 18.517 | 16.115 | 12.018 | 0.193x |

The finite-conjugate solve uses the physical patent track for the MFD constraint, including the flat filter thickness, even though the data file folds that filter into the final air-equivalent BFD for rendering. The tele-end computed magnification, `0.193x`, is within rounding of Sony's published `0.19x` maximum magnification.

## Aspherical Surfaces

The patent's aspherical equation uses a standard conic base plus even-order polynomial terms. All conic constants in Example 4 are `K = 0`, and all 10th-order terms are zero. The data file labels the aspherical surfaces with an `A` suffix: `7A`, `8A`, `13A`, `14A`, and `16A`.

| Surface | Element | K | A4 | A6 | A8 | Polynomial departure at adopted SD |
|---|---|---:|---:|---:|---:|---:|
| 7A | G4 front | 0 | -3.98377e-6 | -5.79927e-8 | +4.30524e-10 | -0.056 mm at 10.10 mm |
| 8A | G4 rear | 0 | +1.00321e-5 | -4.12693e-8 | +3.39391e-10 | +0.077 mm at 9.60 mm |
| 13A | G7 front | 0 | +2.63642e-5 | -3.31405e-7 | +1.10828e-8 | +0.603 mm at 9.30 mm |
| 14A | G7 rear | 0 | +3.68743e-5 | -3.76569e-7 | +1.27129e-8 | +0.744 mm at 9.30 mm |
| 16A | G8 rear | 0 | +2.00869e-5 | -1.53748e-7 | +6.54544e-10 | +0.065 mm at 8.50 mm |

Surface 7A has a negative fourth-order coefficient and flattens the peripheral zone of G4's front surface. Surface 8A supplies the complementary rear-surface correction. Surfaces 13A and 14A are much stronger and should be understood as the main higher-order correction pair in the positive second group. Surface 16A keeps the single negative focus element better behaved across focus travel.

## Conditional Expressions

Example 4 satisfies all six conditional expressions summarized by the patent.

| Expression | Formula | Example 4 value | Patent purpose |
|---|---|---:|---|
| (1) | `(R1a + R1b)/(R1a - R1b)` | 3.32 | Front negative-lens shape for tele-end spherical aberration |
| (2) | `(R4a + R4b)/(R4a - R4b)` | 5.19 | Rear positive-lens shape for field curvature |
| (3) | `|f2/f3|` | 0.70 | GR2/GR3 power balance |
| (4) | `|f3/f4|` | 0.35 | Focus group / rear group balance |
| (5) | `|f1/f2|` | 1.38 | GR1/GR2 power balance |
| (6) | `Lmax/Y` | 5.01 | Compactness relative to image height |

The power-balance values used above are the patent's Table 17 values: `f1 = -34.80 mm`, `f2 = +25.13 mm`, `f3 = -36.09 mm`, and `f4 = +104.11 mm`.

## Verification Summary

Independent paraxial tracing of the transcribed Example 4 prescription gives the following values.

| Quantity | Computed | Patent value | Comment |
|---|---:|---:|---|
| EFL, wide | 28.855 mm | 28.82 mm | Patent rounding difference |
| EFL, mid | 44.303 mm | 44.26 mm | Patent rounding difference |
| EFL, tele | 67.899 mm | 67.90 mm | Agreement |
| GR1 focal length | -34.861 mm | -34.80 mm | Agreement |
| GR2 focal length | +25.151 mm | +25.13 mm | Agreement |
| GR3 focal length | -36.254 mm | -36.09 mm | Agreement |
| GR4 focal length | +104.852 mm | +104.11 mm | Agreement within published precision |
| Petzval sum | +0.002154 mm^-1 | not separately stated | Surface-by-surface `phi/(n n')` calculation |
| Petzval radius | +464.2 mm | not separately stated | Reciprocal of Petzval sum |

The small residuals are consistent with patent table rounding. No scaling was applied to the prescription.

## Image Stabilization

Sony's production lens includes Optical SteadyShot. US 2015/0077859 A1 does not disclose an OSS decenter prescription for this embodiment and does not identify which group, if any, would be shifted for stabilization. The supplied data file therefore contains no decentered IS state. It should be read as the centered design prescription at each zoom and focus position.

## Sources

- US 2015/0077859 A1, "Zoom Lens and Imaging Apparatus," Fumikazu Kanetaka and Kodai Nagamatsu, Sony Corporation, published March 19, 2015; Numerical Example 4, Tables 13-17 and FIGS. 13-16.
- Sony official SEL2870 specifications and product page: FE 28-70mm F3.5-5.6 OSS, model SEL2870.
- OHARA Corporation and OHARA GmbH optical-glass catalog data for S-LAH55V, L-BAL42, L-LAL13, and S-LAL13 class glasses.
- HOYA Optics Division glass designation and catalog data for FCD1 and E-FDS1-class glasses; HOYA cross-reference tables for six-digit glass-code classes.
- Independent paraxial ABCD and finite-conjugate ray traces run from the patent prescription during this review.
