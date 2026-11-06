# PENTAX SMC FA* 300mm f/2.8 ED [IF]: optical design

## Patent Reference and Design Identification

**Patent:** JP H06-138385 A  
**Application Number:** JP H04-287356  
**Filed:** October 26, 1992  
**Published:** May 20, 1994  
**Inventor:** Koichi Maruyama  
**Applicant:** Asahi Kogaku Kogyo Co., Ltd.  
**Title:** Telephoto Lens (望遠レンズ)  
**Example details:** 実施例1; Table 1 (prescription), Table 2 (focus states), Fig. 1 (infinity), Fig. 3 (500 mm state); scaled ×3.

The patent sets out an inner-focus telephoto in which focusing changes the aberrations little and the shortest shooting distance is short. Its background notes that moving a single group in a conventional design changes the aberrations too much to focus close, while floating focus, which cures this, is too complex and slow for autofocus. Its three numerical examples are normalized to f = 100, F 1:2.8 and a half-field of ω = 4.1°. The model scales Example 1 uniformly by 3: every radius, thickness, gap and the printed back focus is multiplied by 3, and there are no aspheric coefficients to transform. The scaled system has a calculated EFL of 299.995 mm.

The production correlation is probable, not proven. Ricoh's catalog entry for the smc PENTAX-FA★300mm F2.8 ED[IF] agrees with Example 1 on each point that can be checked:

1. **Construction.** Ricoh lists 10 elements in 7 groups. Example 1 has nine lens elements in six air-spaced components plus a plane plate, which makes 10 / 7 when the plate is the lens's 43 mm rear filter.
2. **ED glass.** Ricoh names thin ED elements in the first and second positions. Example 1 puts 1.49700/81.6, the coordinates of FCD1 / S-FPL51 fluorophosphate glass, at L1 and L2 and nowhere else.
3. **Focus.** The [IF] designation matches the patent's single moving group 3.
4. **Field.** Ricoh's 8.2° angle of view equals 2ω.
5. **Close range.** Focused at 2.0 m object to image, the scaled Example 1 reaches 0.178×; Ricoh rates the lens at 2.0 m and 0.17×.
6. **Size.** Fig. 1 draws L1 at Ø109 mm after scaling, inside the 112 mm front protective filter. The front vertex sits 240.1 mm ahead of the K-mount flange (45.46 mm before the image), against Ricoh's 247 mm length.

The patent's other two examples share the type. Nothing in Ricoh's data selects one of them, so the identification is with the patent family. Example 1 is used because its drawing is the patent's front-page figure.

## Optical Architecture

The lens is a positive–positive–negative–positive telephoto (claim 1):

- **G1** (L1–L3): two positive ED singlets and a plano-concave flint, f1 = +245.9 mm.
- **G2** (L4/L5): a negative–positive cemented doublet, f2 = +278.9 mm.
- **G3** (L6/L7): a positive–negative cemented doublet, f3 = −96.5 mm, the only group that moves for focus.
- **G4** (L8/L9): a positive–negative cemented doublet, f4 = +220.7 mm.

The plane plate follows G4. All 15 lens surfaces are spherical. G1 and G2 together converge strongly (f12 = 159.6 mm), and the negative G3 spreads the beam again before G4 forms the image. The first-vertex-to-image length is 285.57 mm, a telephoto ratio of 0.95. The ratio is modest for a 300 mm lens because condition (4) reserves room for G3's travel.

The patent's conditions, with the values the Example 1 table gives:

| Condition | Range | Example 1 | What it controls (patent) |
| --- | --- | --- | --- |
| (1) f/f1 | 1.05–2.00 | 1.220 | G1 power: length against axial color |
| (2) f/f12 | 1.50–2.40 | 1.880 | Focus sensitivity; axial color |
| (3) f/f13 | 0.45–0.80 | 0.577 | Focus sensitivity; size and power of G3 |
| (4) d24/f | 0.20–0.35 | 0.261 | Room for G3's travel against length |
| (5) n13 − n14 | 0.05–0.25 | 0.153 | G4 interface: distortion, spherical aberration, field curvature |
| (6) f/f2 | 0.10–1.20 | 1.076 | G2 power: color against length |
| (7) n7 − n8 | > 0.13 | 0.197 | G2 interface: close-range spherical aberration |
| (8) n10 − n11 | > 0.10 | 0.234 | G3 interface: the moving group's own spherical aberration |
| (9) ν10/ν11 | 0.40–0.60 | 0.500 | Color change while G3 moves |

Conditions (2) and (3) enter the patent's focus-sensitivity relation (a), ΔfB = {−(f/f12)² + (f/f13)²}·ΔX, where ΔX is G3's axial movement. For Example 1 the factor is −3.20 (−3.19 by exact paraxial trace): each millimetre G3 moves toward the image brings the image 3.2 mm closer to the lens, offsetting the image's retreat as the object approaches. The high sensitivity is what lets a short travel reach a near object.

## Element-by-Element Analysis

Focal lengths are thick elements isolated in air, at the ×3 scale.

### L1 — Biconvex Positive

nd = 1.49700, νd = 81.6. Glass: FCD1 (HOYA) / S-FPL51 class — ED fluorophosphate (inferred). f = +253.5 mm.

The front collector and the strongest positive element of G1. Its rear face is weak (r2 = −989.6 mm), so it is close to plano-convex. The largest positive power sits in ED glass, which keeps G1's axial color small; condition (1) caps the group's power for the same reason.

### L2 — Positive Meniscus, convex to object

nd = 1.49700, νd = 81.6. Glass: FCD1 (HOYA) / S-FPL51 class — ED (inferred). f = +297.7 mm.

The second ED crown splits the front convergence with L1, which keeps the spherical aberration of each surface small at f/2.8.

### L3 — Plano-Concave Negative

nd = 1.72047, νd = 34.7. Glass: not identified. f = −256.8 mm.

A flat front and concave rear close G1. This flint is the achromatizing partner of the two ED crowns; with them it sets G1's residual color before the long air space to G2.

### L4 / L5 — Cemented Doublet (G2)

- **L4**, Negative Meniscus: nd = 1.78590, νd = 44.2. Glass: not identified. f = −117.1 mm.
- **L5**, Positive Meniscus: nd = 1.58913, νd = 61.2. Glass: not identified. f = +80.7 mm.

The doublet is positive and converges the beam onto the focusing group. Condition (7) asks for an index step of more than 0.13 at the cemented face (0.197 here). The patent explains that the step gives the interface an overcorrecting spherical aberration, which offsets the change at close range so the lens stays sharp wide open at its shortest distance.

### L6 / L7 — Cemented Focusing Doublet (G3)

- **L6**, Positive Meniscus, concave to object: nd = 1.80518, νd = 25.4. Glass: not identified. f = +158.4 mm.
- **L7**, Biconcave Negative: nd = 1.57099, νd = 50.8. Glass: not identified. f = −59.7 mm.

The only moving group. Its cemented face carries an undercorrecting spherical aberration (condition 8), so the group's own spherical aberration is small and moving it disturbs the correction little. The Abbe ratio ν10/ν11 = 0.500 (condition 9) keeps axial and lateral color steady through the focus travel.

### L8 / L9 — Cemented Rear Doublet (G4)

- **L8**, Biconvex Positive: nd = 1.69350, νd = 53.2. Glass: not identified. f = +63.9 mm.
- **L9**, Biconcave Negative: nd = 1.54072, νd = 47.2. Glass: not identified. f = −86.9 mm.

The fixed rear doublet forms the final image. Condition (5) bounds its index step: too small and distortion and spherical aberration cannot be corrected together, too large and the Petzval sum turns negative and the field is overcorrected.

### F — Plane-Parallel Plate (rear filter)

nd = 1.51633, νd = 64.1. Glass: not identified (borosilicate-crown coordinates). Thickness 2.01 mm.

The patent lists the plate as surfaces 16–17 without naming it, and the design is computed with it in place. It sits 9.0 mm behind G4 and 74.58 mm ahead of the image. Ricoh's 10-element count and 43 mm filter identify it, by inference, as the lens's rear filter, so the model draws and traces it as an element.

## Glass Identification and Selection

| Elements | nd | νd | Glass (model) | Role |
| --- | --- | --- | --- | --- |
| L1, L2 | 1.49700 | 81.6 | FCD1 (HOYA) / S-FPL51 class, ED | Positive crowns of G1 |
| L3 | 1.72047 | 34.7 | not identified | G1 flint |
| L4 | 1.78590 | 44.2 | not identified | G2 negative, high index |
| L5 | 1.58913 | 61.2 | not identified | G2 positive |
| L6 | 1.80518 | 25.4 | not identified | G3 positive, dense flint |
| L7 | 1.57099 | 50.8 | not identified | G3 negative |
| L8 | 1.69350 | 53.2 | not identified | G4 positive |
| L9 | 1.54072 | 47.2 | not identified | G4 negative |
| F | 1.51633 | 64.1 | not identified | Rear filter |

The patent gives n at the d-line (588 nm) and ν only. Every pair coincides with a catalog glass, but the patent names none. The model labels only L1 and L2, the two elements Ricoh identifies as ED; their anomalous partial dispersion is inferred from the catalog fluorophosphate, not printed by the patent. The other eight pairs are traced from nd/νd alone.

G3 pairs a dense-flint positive (νd 25.4) with a lighter negative (νd 50.8), the usual arrangement for a negative achromat. By thin-lens arithmetic its residual color equals that of a single negative lens of νd ≈ 129, so moving it shifts the color balance little, which is what condition (9) asks.

## Focus Mechanism

Only G3 moves (claim 1). Table 2 prints the infinity state and an object distance of 500, ×3 in the model:

| State (×3) | f (mm) | M | d9 (mm) | d12 (mm) |
| --- | --- | --- | --- | --- |
| Infinity | 300.00 | 0 | 10.98 | 58.80 |
| 1500 mm | 233.49 | −0.253 | 37.05 | 32.73 |

G3 moves 26.07 mm toward the image while G1, G2, the iris, G4 and the filter stay fixed, so the lens length does not change. The patent does not say where its 500 mm distance is measured from. Measured object to image plane, it reproduces the printed state: the close row focuses at 1500 mm with M = −0.2528 and f = 233.50 mm, within 0.016 mm of the infinity image plane. Measured from the first vertex, it would give M = −0.193 and leave 14 mm of defocus. The model therefore takes the printed distance as object to image.

The patent state is closer than the production lens's 2.0 m and 0.17×. At 2.0 m object to image, the model needs 17.80 mm of G3 travel and reaches 0.178×. The slider's intermediate positions place G3 at ten equal steps of its travel, each labelled with the distance the paraxial conjugate law gives; they are not a factory cam. The focal length shortens from 300 mm to 233.5 mm at the close state, the usual breathing of a negative inner-focus group.

## Aperture, Stop and Clear Apertures

The patent prints no stop. The model places the iris in d9, 5.6 mm behind r9, fixed with G2. That is the middle of the 9.3 mm of air between the rims of r9 and r10 at infinity, where G3 is closest. G3 moves away from it, so the iris clears the focus group at every position. Ahead of G3, the iris also remains the aperture stop at every focus distance. An iris behind G3 would, at the close state, need G2 about 15 % wider than Fig. 1 draws it to pass its F/2.8 beam. The FA★ 300mm f/4.5 of the same period puts its iris in the same place, ahead of the focusing doublet. The position is an inference. The iris radius, 25.80 mm, comes from the F/2.8 design f-number; Ricoh lists f/32 as the minimum aperture.

The rims follow Fig. 1, measured at 26.56 px/mm from the 70.33 mm (native) r1–r17 vertex span. The drawing places every element just outside the F/2.8 axial beam:

| Element | Rim (mm) | Fig. 1 (mm) | F/2.8 axial beam (mm) |
| --- | --- | --- | --- |
| L1 | 54.5 | 54.45 | 53.57 |
| L2 | 50.5 | 50.49 | 49.79 |
| L3 | 47.1 | 46.86 | 46.11 |
| L4 / L5 | 31.7 | 31.68 | 31.56 |
| L6 / L7 | 25.4 | 25.35 | 24.98 |
| L8 / L9 | 19.4 | 19.38 | 16.51 |
| F | 20.5 | 19.71 | 13.77 |

The filter rim is a ray-trace value: the highest ray that reaches the image at either focus end crosses it at 19.47 mm, plus 5 %, rounded up. The full f/2.8 axial beam passes at both infinity and the close state. Off axis, the drawn rims cut the corner bundle to about 58 % at 4.1° wide open. That vignetting follows Fig. 1 and is not removed by widening rims.

## Aspherical Surfaces

None. Every surface is spherical, as printed.

## Model Scope and Limitations

- The printed fB of 24.86 (74.58 mm) is kept as the air between the filter and the image plane. The Gaussian back focus is 74.563 mm, a −0.017 mm residual left as printed.
- The iris position, every clear aperture, the filter identification and the intermediate focus law are modelling choices, described above.
- Production identity with Example 1 is a probable correlation from Ricoh's published data, not a confirmed factory prescription.

## Sources

1. [JP H06-138385 A (Google Patents)](https://patents.google.com/patent/JPH06138385A/en): claims, conditions (1)–(9) and relation (a), Example 1 Tables 1 and 2, d-line note (¶0036), Figs. 1 and 3.
2. [Ricoh discontinued 35 mm lens catalog](https://www.ricoh-imaging.co.jp/japan/products/filmcamera/lens/index35_others.html), FA★300mm F2.8 ED[IF] entry: 7 groups / 10 elements, ED glass in the first and second elements, inner focus, 8.2°, 2.0 m, 0.17×, 43 mm filter, 112 mm front protective filter, 123 × 247 mm, 2500 g, minimum F32.
3. [Imaging Resource](https://old.imaging-resource.com/lenses/pentax/300mm-f2.8-ed-if-smc-p-fa/specifications) and [Lenstip](https://lenstip.com/326-Pentax_smc_FA_300_mm_f_2.8_ED_(IF)-lens_specifications.html) specification pages: 10 elements / 7 groups, 2.0 m minimum focus.
