**Patent:** [JP 2023-020586 A](https://patents.google.com/patent/JP2023020586A/en)

**Title:** Zoom Lens and Imaging Apparatus

**Inventors:** Daiki Kawamura, Tetsuya Ori

**Assignee:** Fujifilm Corporation

**Filed:** 2021-07-30 (application 2021-126036)

**Published:** 2023-02-09

**Example details:** 実施例1, Tables 1A, 1B and 2, Fig. 1; patent units, no scaling.

## Patent-to-Product Correlation

Example 1 is a probable match for the Fujifilm XF150-600mm F5.6-8 R LM OIS WR, not a published factory prescription;
the patent's other examples remain alternatives. The identification rests on:

1. **Construction.** 24 elements in 17 groups, the count Fujifilm publishes for the lens.
2. **Special glass.** The only glasses above νd 80 are four elements at nd 1.43700 / νd 95.10 and three at
   1.49700 / 81.54, against Fujifilm's four Super ED and three ED elements. Fujifilm's lens-configuration diagram
   marks them in the same positions: Super ED at L2, L3, L5 and L9, ED at L7, L8 and L12.
3. **Focal length and aperture.** f = 154.611–582.420 mm and F/5.76–8.19 at infinity (Table 2), a 3.77× zoom,
   against the marketed 150–600 mm f/5.6–8.
4. **Focus and stabilization.** A two-element negative focus group and a three-element negative stabilization group
   sit inside the last group, which stays fixed during zoom (¶0162).

The inventors are listed in the patent's order, 河村大樹 (Daiki Kawamura, the romanization used for his other Fujifilm patents in this catalog) and 小里哲也 (Tetsuya Ori).

## Optical Architecture

Example 1 is a five-group positive-negative-positive-positive-negative telephoto zoom (¶0076–0080; signs from the
group column of Tables 1A and 1B). In the patent's terms G3 and G4 form the intermediate group GM and G5 is the last
group GE. The data file numbers the elements L1–L24 front to rear; the patent numbers them by group (L11–L13, L21–L23,
L31–L34, L41–L42, L51–L62). Group focal lengths below are computed from Tables 1A and 1B at infinity focus.

| Group | Elements (patent labels) | Surfaces | Power, computed f | Zoom motion, wide → tele |
| --- | --- | --- | --- | --- |
| G1 | L1–L3 (L11–L13) | S1–S6 | positive, +183.1 mm | fixed |
| G2 | L4–L6 (L21–L23) | S7–S11 | negative, −53.6 mm | 72.505 mm toward the image |
| G3 | L7–L10 (L31–L34) | S12–S18 | positive, +85.4 mm | out about 11.3 mm toward the image and back; net 3.575 mm toward the object |
| G4 | L11–L12 (L41–L42) | S19–S22 | positive, +131.6 mm | back about 5.5 mm toward the object, then forward; net 6.641 mm toward the image |
| G5 | stop, L13–L24 (L51–L62) | S23–S42 | negative, −38.0 mm | fixed |

With G1 and G5 fixed, the total length stays 325.037 mm in every state; the patent credits a fixed G1 with a steadier
center of gravity (¶0081) and a fixed G5 with a simpler mechanism (¶0083). Table 2 prints only the wide and tele
spacings; Fig. 1 draws the paths between them, at the section's own axial scale (the drawn end travels match the
printed ones within 2 %). G2 moves toward the image throughout, fastest near the wide end. G3 moves about 11.3 mm
toward the image by f ≈ 300 mm, then turns back to finish 3.575 mm on the object side of its wide position. G4 first
retreats about 5.5 mm toward the object, to f ≈ 270 mm, then moves forward to finish 6.641 mm toward the image; in the
model it is the group that holds the image on the fixed plane. The model's sixteen intermediate zoom stations take G2
and G3 from the drawn paths and calculate G4's position, which stays within 0.6 mm of the drawn G4 path (see
Aperture, Stop and Model Scope).

G5 carries the stop at its front (¶0091), then the focus doublet L13–L14 (S24–S26), a fixed doublet L15–L16, the
stabilization group L17–L19 (S30–S34) and the fixed subgroup Gk, L20–L24 (¶0122). The 2.85 mm camera-side plate (S43–S44, nd 1.51680) is traced but not counted as an element.

## Element-by-Element Analysis

Element focal lengths are in-air values computed from each element's own radii, thickness and nd. The patent names no glass supplier; each element is modelled as the catalog glass
whose printed values it reproduces (see Glass Identification).

### G1: L1, L2, L3

- **L1** — Negative Meniscus, convex to the object. nd = 1.62005, νd = 36.35. Glass: Hoya E-F2 equivalent. f = −332.2 mm.
- **L2** — Biconvex Positive. nd = 1.43700, νd = 95.10. Glass: Hoya FCD100 equivalent, Super ED. f = +230.7 mm.
- **L3** — Plano-Convex Positive, convex to the object. nd = 1.43700, νd = 95.10. Glass: Hoya FCD100 equivalent, Super ED.
  f = +239.2 mm.

The fixed front group is a weak negative meniscus followed by two Super ED-class positives, where the axial beam is
widest (entrance-pupil semi-diameter 35.6 mm at the tele end). L2 and L3 meet the patent's conditions on G1's
positive lenses, νd between 81.7 and 105 and Δθ between 0.03 and 0.06 (conditions 5–8; both have Δθ = 0.046), which
¶0104–0108 tie to primary and secondary axial color. L1's index sits in the 1.55–1.8 range condition 13 gives for G1's negative lens,
which ¶0113 links to weight.

### G2: L4, L5 + L6

- **L4** — Biconcave Negative. nd = 1.69680, νd = 55.53. Glass: Ohara S-LAL14 equivalent. f = −68.9 mm.
- **L5** — Biconcave Negative, cemented to L6. nd = 1.43700, νd = 95.10. Glass: Hoya FCD100 equivalent, Super ED.
  f = −85.7 mm.
- **L6** — Positive Meniscus, convex to the object. nd = 1.85896, νd = 22.73. Glass: Ohara S-NPH5 equivalent. f = +127.7 mm.

G2 is the main variator, travelling 72.505 mm toward the image from wide to tele. The Super ED-class negative L5
matches conditions 16–17 (negative lens with high νd and positive anomalous dispersion), which ¶0116–0117 tie to
lateral color and its secondary spectrum. The low-Abbe positive L6 matches conditions 14–15 (νd 15–25 with positive
anomalous dispersion), tied to axial color and its secondary spectrum (¶0114–0115).

### G3: L7, L8, L9 + L10

- **L7** — Plano-Convex Positive, convex to the image. nd = 1.49700, νd = 81.54. Glass: Ohara S-FPL51 equivalent, ED.
  f = +156.0 mm.
- **L8** — Plano-Convex Positive, convex to the object. nd = 1.49700, νd = 81.54. Glass: Ohara S-FPL51 equivalent, ED.
  f = +249.2 mm.
- **L9** — Biconvex Positive, cemented to L10. nd = 1.43700, νd = 95.10. Glass: Hoya FCD100 equivalent, Super ED.
  f = +110.8 mm.
- **L10** — Plano-Concave Negative. nd = 1.91082, νd = 35.25. Glass: Hoya TAFD35 equivalent. f = −123.0 mm.

G3 is the patent's PA group, the first and strongest positive group of GM (¶0089–0090). Its three positives and one
negative are the make-up ¶0087 prefers for axial color. Conditions 9–12 ask its positive lenses for high νd and
positive anomalous dispersion to hold axial color steady through the zoom (¶0109–0112). L9 meets the single-lens Abbe
condition; L7 and L8, at νd 81.54, sit just under its 81.7 limit but bring the group's mean to νd 86.1, inside
condition 10.

### G4: L11, L12

- **L11** — Negative Meniscus, convex to the object. nd = 1.78590, νd = 44.20. Glass: Ohara S-LAH51 equivalent. f = −113.7 mm.
- **L12** — Biconvex Positive. nd = 1.49700, νd = 81.54. Glass: Ohara S-FPL51 equivalent, ED. f = +61.6 mm.

G4, the second positive group of GM, is an air-spaced negative-positive pair whose facing radii (34.623 and
34.608 mm, 1.500 mm apart) are nearly equal, forming a thin meniscus-shaped air lens. It carries the third ED-class
element and moves a net 6.641 mm toward the image from wide to tele.

### G5 focus doublet: L13 + L14 (S24–S26)

- **L13** — Positive Meniscus, concave to the object. nd = 1.73800, νd = 32.33. Glass: Ohara S-NBH53V equivalent. f = +57.5 mm.
- **L14** — Biconcave Negative. nd = 1.69680, νd = 55.53. Glass: Ohara S-LAL14 equivalent. f = −33.1 mm.

The patent's focus group (L51–L52), negative overall (computed f = −78.0 mm). ¶0093 prefers a focus group of two
lenses or fewer, and notes that a negative one receives a more converged beam, so it can be smaller and lighter. See
Focus Mechanism.

### G5 fixed doublet: L15 + L16

- **L15** — Biconvex Positive. nd = 1.54814, νd = 45.78. Glass: Ohara S-TIL1 equivalent. f = +39.2 mm.
- **L16** — Negative Meniscus, convex to the image. nd = 2.00069, νd = 25.46. Glass: Hoya TAFD40 equivalent. f = −72.6 mm.

A positive cemented doublet (computed f = +87.2 mm) that stays fixed between the focus and stabilization groups.

### G5 stabilization group: L17 + L18, L19 (S30–S34)

- **L17** — Biconvex Positive. nd = 1.80519, νd = 25.48. Glass: Hoya FD60 equivalent. f = +32.2 mm.
- **L18** — Biconcave Negative. nd = 1.72915, νd = 54.64. Glass: Ohara S-LAL18 equivalent. f = −23.9 mm.
- **L19** — Biconcave Negative. nd = 1.81600, νd = 46.54. Glass: Hoya TAF5 equivalent. f = −36.1 mm.

The patent's stabilization group (L55–L57): a cemented positive-negative doublet and a negative singlet. See Image
Stabilization.

### G5 fixed subgroup Gk: L20 + L21 + L22, L23, L24

- **L20** — Biconvex Positive. nd = 1.67300, νd = 38.26. Glass: Ohara S-NBH52V equivalent. f = +19.7 mm.
- **L21** — Biconcave Negative. nd = 2.00069, νd = 25.46. Glass: Hoya TAFD40 equivalent. f = −13.3 mm.
- **L22** — Biconvex Positive. nd = 1.73800, νd = 32.33. Glass: Ohara S-NBH53V equivalent. f = +31.6 mm.
- **L23** — Biconvex Positive. nd = 1.60342, νd = 38.03. Glass: Ohara S-TIM5 equivalent. f = +31.0 mm.
- **L24** — Biconcave Negative. nd = 1.62041, νd = 60.37. Glass: Ohara S-BSM16 equivalent. f = −31.4 mm.

Gk (patent L58–L62) is positive (computed f = +51.5 mm), opposite in sign to the stabilization group as ¶0121 prefers,
and stays fixed during zoom and focus. It opens with the lens's only cemented triplet and ends with the negative L24,
53.922 mm ahead of the camera-side plate.

## Glass Identification / Selection

The patent prints nd, νd and θgF for every element at the d-line (587.56 nm, ¶0107) but names no supplier. Every pair
coincides with an Ohara or Hoya catalog glass, which the model names as a coordinate equivalent (supplier unconfirmed),
and it keeps the printed θgF as dPgF against the normal line 0.6438 − 0.001682·νd, so the g-line follows the patent. The
patent measures anomalous dispersion on its own line, Δθ = θgF + 0.00162·νd − 0.64159 (¶0106).

| Printed nd / νd / θgF | Elements | Fujifilm class (inferred) | Δθ, patent formula | Catalog coincidence (observation) |
| --- | --- | --- | ---: | --- |
| 1.43700 / 95.10 / 0.53364 | L2, L3, L5, L9 | Super ED | 0.046 | FCD100 class (Hoya FCD100, θgF 0.5336) |
| 1.49700 / 81.54 / 0.53748 | L7, L8, L12 | ED | 0.028 | S-FPL51 / FCD1 class (Ohara S-FPL51, θgF 0.5375) |

For 20 of the 24 elements the catalog glass also reproduces the printed θgF within 0.0006; the exceptions are L1
(E-F2, +0.0013), L15 (S-TIL1, catalog θgF not tabulated), L17 (FD60, +0.0022) and L19 (TAF5, +0.0009). The class split follows the counts: these are the only glasses above
νd 80, four and three of them. The low-dispersion elements sit in G1 (two), G2 (one), G3 (three) and G4 (one); G5 has
none and uses ordinary and high-index glasses, including two elements at nd 2.00069 (L16, L21).

## Focus Mechanism

Inner focus by the negative L13–L14 doublet (S24–S26), which moves toward the image from infinity to 2.4 m (¶0094);
the patent measures the distance from the image plane (¶0166). Only DD23 and DD26 change, and their sum stays
32.123 mm. Travel is 1.447 mm at the wide end and 21.651 mm at the tele end.

| State (Table 2) | DD23 mm | DD26 mm | Printed f mm | Printed FNo. | Printed 2ω | Model EFL mm |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Wide, infinity | 5.239 | 26.884 | 154.611 | 5.76 | 10.4° | 154.601 |
| Tele, infinity | 5.239 | 26.884 | 582.420 | 8.19 | 2.8° | 582.397 |
| Wide, 2.4 m | 6.686 | 25.437 | — | 5.85 | 10.2° | 140.227 |
| Tele, 2.4 m | 26.890 | 5.233 | — | 9.48 | 2.4° | 241.557 |

The model's 2.4 m states place the object 2400.3 mm (wide) and 2400.0 mm (tele) from the image plane, at
magnifications −0.071 and −0.243. The patent does not describe the focus drive. At the model's sixteen calculated zoom
stations (172.5–553.7 mm) the doublet's 2.4 m position is calculated as well; its travel rises from 1.789 to
19.317 mm. Focus positions between these rows are interpolated, not patent cam positions.

## Image Stabilization

The stabilization group is L17–L19 (S30–S34), negative overall (computed f = −27.3 mm). A negative group receives a
more converged beam and can be small (¶0095); one positive and two negative lenses in that order is the patent's
preferred form for limiting aberration change during stabilization (¶0158). The positive Gk behind it (f = +51.5 mm)
gives |fis/fisr| ≈ 0.53, inside the 0.32–1.1 range of condition 21 (¶0121). The patent gives no decentering amount,
so the model traces the group centered only.

## Aperture, Stop and Model Scope

The patent prints the stop position (S23, at the front of G5) but no clear apertures and no iris diameter, so every
semi-diameter in the model is inferred from Fig. 1. The drawing is not to one scale: across the axis it is about 8 %
smaller than along it, and at that transverse scale its stop is 13.97 mm in radius, the F/5.76 stop. G3 (about
23.3 mm), the focus doublet (14.0 mm) and the small rear group (9.2–10.5 mm) are modeled at the drawn sizes. The front
group is modeled 1.2 mm larger than drawn, with the drawn steps between its three elements, because the drawn size
would cut corner light at the tele end. At every zoom station, printed or calculated, the iris, not a lens rim, limits
the wide-open on-axis beam, and no rim blocks the corner chief ray.

The iris is derived from the printed infinity F-numbers, F/5.76 at wide and F/8.19 at tele, because the patent gives
no iris schedule. With the same iris, the 2.4 m states give paraxial F/5.84 and F/9.59 against the printed 5.85 and
9.48; the tele near value is not reproduced, and no iris schedule is fitted to it. Because the stop sits in the fixed
G5, one iris radius gives the same image-space F-number at every zoom position, so the printed rise from F/5.76 to
F/8.19 means the iris closes from 13.79 to 9.70 mm in radius toward tele. The F-numbers of the calculated stations
assume that this radius changes linearly with focal length; that is a modeling inference, not a patent value or
Fujifilm's aperture schedule.

| Zoom station | Model EFL mm | F-number | Source |
| --- | ---: | ---: | --- |
| 0, wide | 154.601 | 5.76 | Table 2 |
| 1 | 172.487 | 5.83 | calculated, Fig. 1 at s = 0.071 |
| 2 | 191.883 | 5.91 | calculated, s = 0.144 |
| 3 | 212.493 | 6.00 | calculated, s = 0.217 |
| 4 | 234.538 | 6.10 | calculated, s = 0.290 |
| 5 | 257.580 | 6.20 | calculated, s = 0.361 |
| 6 | 281.736 | 6.32 | calculated, s = 0.430 |
| 7 | 306.668 | 6.44 | calculated, s = 0.496 |
| 8 | 332.317 | 6.57 | calculated, s = 0.559 |
| 9 | 358.599 | 6.71 | calculated, s = 0.619 |
| 10 | 385.407 | 6.86 | calculated, s = 0.676 |
| 11 | 412.634 | 7.02 | calculated, s = 0.730 |
| 12 | 440.117 | 7.18 | calculated, s = 0.781 |
| 13 | 468.294 | 7.36 | calculated, s = 0.830 |
| 14 | 496.518 | 7.55 | calculated, s = 0.876 |
| 15 | 524.544 | 7.75 | calculated, s = 0.919 |
| 16 | 553.675 | 7.97 | calculated, s = 0.961 |
| 17, tele | 582.397 | 8.19 | Table 2 |

Here s is the fraction of Fig. 1's wide-to-tele locus length at which G2 and G3 are read; each locus is scaled so its
ends match the printed travel. G4 and the focus doublet are calculated paraxially, G4 so that the infinity image lies
on the fixed image plane and the doublet so that the close row focuses 2.4 m from the image plane. Only stations 0 and
17 are patent states.

Other limits: dispersion comes from the printed nd, νd and θgF only; zoom and focus positions between the stations are
interpolated, which keeps the infinity image within 0.28 mm of the image plane and the 2.4 m rows between 2398 and
2431 mm from it; finite-distance MTF is available only at the two printed 2.4 m states; and the stabilization group is
traced centered.

## Sources

- [JP 2023-020586 A](https://patents.google.com/patent/JP2023020586A/en): Example 1 (Tables 1A, 1B and 2; Fig. 1).
- [Fujifilm, XF150-600mm F5.6-8 R LM OIS WR specifications](https://www.fujifilm-x.com/global/products/lenses/xf150-600mmf56-8-r-lm-ois-wr/specifications/):
  24 elements in 17 groups, including four Super ED and three ED elements, with the lens-configuration diagram that
  marks their positions.
