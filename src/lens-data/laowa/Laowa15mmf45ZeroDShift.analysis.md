## Patent Reference and Design Identification

**Patent:** [CN 110955036 B](https://patents.google.com/patent/CN110955036B/en)
**Application Number:** CN 201911290460.1
**Filed:** 2019-12-16
**Published:** 2020-04-03 (CN 110955036 A)
**Granted:** 2024-10-18
**Inventor:** Dayong Li (李大勇)
**Assignee:** Anhui Changgeng Optics Technology Co., Ltd. (安徽长庚光学科技有限公司)
**Title:** 一种超广角移轴镜头 (An ultra-wide-angle shift lens)
**Example details:** 实施例1, ¶0040–¶0065, Fig. 1 (section), Fig. 2 (aberrations), Fig. 3 (shift field); native millimetres, no scaling.

The patent describes an ultra-wide shift lens for full-frame (36 × 24 mm) SLR and mirrorless bodies. Its abstract
claims a field of view above 100° unshifted and above 125° at the 10 mm shift limit. Example 1 prints f = 15.4908 mm
(15.491 mm in ¶0051), F/4.6, half-angle ω = 63.66° and a maximum image height of 31.3 mm (¶0051–¶0054). The 31.3 mm
height is the paraxial Ymax = F·tan ω of claim 1, the corner of the frame at full shift; ¶0042 states an image field of
at least 62 mm and at least 10 mm of unvignetted shift up, down, left and right. Figure 3 draws the 36 × 24 mm frame
inside a 61 mm circle with 10 mm shifts in each direction.

The Laowa 15mm f/4.5 Zero-D Shift is identified with this example on construction, not on a maker statement:

1. **Construction.** Example 1 has 17 elements in 11 groups, the count Venus Optics publishes for the lens.
2. **Aspheres.** The patent makes both faces of L2 and L17 aspheric; the maker's section diagram marks the second
   and last elements as glass aspherical elements, and the maker lists two aspherical elements.
3. **ED positions.** The three νd 81.61 elements (L3, L14, L16) fall exactly on the three elements the maker's diagram
   marks as extra-low dispersion glass.
4. **Section shape.** The maker's diagram reproduces Figure 1 element for element: the deep front meniscus, the
   S-shaped asphere, the thick biconvex element ahead of the stop, the triplet behind it and the thin aspheric rear
   meniscus.
5. **Coverage and shift.** The patent's ≥ 62 mm field and ≥ 10 mm shift correspond to the marketed Ø65 mm image
   circle and ±11 mm full-frame shift.
6. **Applicant and timing.** Anhui Changgeng Optics Technology is the company behind Venus Optics (Laowa); the
   application was filed in December 2019 and the lens was announced on 30 October 2020.

The design values differ slightly from the marketed ones (15.49 mm against 15 mm, F/4.6 against f/4.5). Example 2 of the
same patent has the same construction and nearly the same first-order values (f = 15.4971 mm, ω = 63.645°, 0.0154×
close state); nothing in the public record selects one example over the other, and Example 1 is used as the first
worked example. Neither example is confirmed by Venus Optics as the production prescription.

## Optical Architecture

The lens is a three-group retrofocus design, negative–negative–positive (¶0005). From the model's paraxial trace the
group focal lengths are G1 −24.37 mm, G2 −105.98 mm and G3 +36.93 mm.

- **G1 (L1–L2, fixed):** two negative menisci convex to the object. Claim 1 limits G1 to two consecutive negative
  lenses; ¶0002 contrasts this with earlier wide shift lenses whose first group held four or five negative elements.
- **G2 (L3–L8, focusing):** a negative meniscus, two cemented pairs (C1, C2) and a 10 mm thick biconvex element ahead
  of the stop. Claim 1 fixes six lenses in G2.
- **G3 (L9–L17, focusing):** behind the stop, a cemented triplet (C3), a cemented pair (C4), a biconvex singlet, a
  second cemented pair (C5) and the aspheric rear meniscus. Claim 1 fixes nine lenses in G3.

The long back focus is the governing requirement. At 51.76 mm (3.34 × f) it leaves room for the shift mechanism in
front of the camera mount, and ¶0026–¶0028 explain the conditions in terms of keeping G3 small enough to move without
striking the mount or being shaded by it. The four conditional expressions and the model's values:

| Condition | Range | Patent, Example 1 | Model |
| --- | --- | --- | --- |
| (1) EX/Ymax | 0.5–0.85 | 0.712 | 0.712 (entrance pupil 22.28 mm behind S1) |
| (2) \|F3/F\| | 1.8–2.8 | 2.384 | 2.384 |
| (3) \|BF/F\| | 3.2–3.7 | 3.342 | 3.342 |
| (4) \|F2/F\| | 3.5–8 | 6.842 | 6.842 |

Shift moves the whole optical unit across the camera frame. Venus Optics specifies ±11 mm on full frame and no tilt,
and the model declares that range. Because the lens is rotationally symmetric, an 11 mm shift along the 24 mm side
puts the far frame corner 29.2 mm from the lens axis, inside the patent's 31.3 mm maximum image height.

## Element-by-Element Analysis

### L1: Negative Meniscus, convex to object

nd = 1.90000, νd = 43.00. Glass: Unmatched. f = −82.13 mm.

The large front element of G1. Its rear face (R = 21.54 mm) is nearly hemispherical, and Figure 1 draws it almost to
its full radius: the element bends the oblique bundles of the wide field toward the axis.

### L2: Negative Meniscus, both faces aspheric

nd = 1.58444, νd = 59.16. Glass: K-CSK120-M (Sumita) coordinate equivalent, a moulding glass. f = −38.69 mm.

The second negative element of G1. Both faces are aspheric (S3, S4), and the combination thins the element's negative
power toward the rim, giving the S-shaped rear face visible in Figure 1 and in the maker's diagram. In a lens sold on
low distortion this is the main distortion-control element of the front group (author's interpretation).

### L3: Negative Meniscus, convex to object

nd = 1.49700, νd = 81.61. Glass: FCD1 (Hoya) coordinate equivalent — ED fluorophosphate class. f = −31.89 mm.

The first element of the focusing group G2 and the first ED position in the maker's diagram. Its deep concave rear
face (R = 13.82 mm) continues the negative power of G1 with a low-dispersion glass, limiting the lateral colour the
strongly negative front of a retrofocus design produces.

### C1: L4 + L5 (cemented, net f = −34.2 mm)

- **L4, Biconvex Positive:** nd = 1.60342, νd = 38.01. Glass: E-F5 (Hoya) coordinate equivalent. f = +25.01 mm.
- **L5, Biconcave Negative:** nd = 1.90000, νd = 43.00. Glass: Unmatched. f = −13.05 mm.

A negative cemented pair in G2. The strong negative L5 sets the net power; the flint-like L4 in front gives the pair
its colour balance.

### C2: L6 + L7 (cemented, net f = +52.0 mm)

- **L6, Biconvex Positive:** nd = 1.72825, νd = 28.32. Glass: E-FD10 (Hoya) coordinate equivalent. f = +18.49 mm.
- **L7, Biconcave Negative:** nd = 1.92286, νd = 20.88. Glass: E-FDS1 (Hoya) coordinate equivalent. f = −26.47 mm.

A weakly positive pair of two dense flints; the very low νd of L7 against L6 corrects colour within G2.

### L8: Biconvex Positive

nd = 1.68893, νd = 31.16. Glass: E-FD8 (Hoya) coordinate equivalent. f = +37.99 mm.

A 10 mm thick element closing G2 just ahead of the stop. It is the main positive element of the otherwise negative
focusing group.

### C3: L9 + L10 + L11 (cemented triplet, net f ≈ +999 mm)

- **L9, Biconvex Positive:** nd = 1.60342, νd = 38.01. Glass: E-F5 (Hoya) coordinate equivalent. f = +21.20 mm.
- **L10, Biconcave Negative:** nd = 1.88300, νd = 40.80. Glass: TAFD30 (Hoya) coordinate equivalent. f = −9.79 mm.
- **L11, Biconvex Positive:** nd = 1.56732, νd = 42.84. Glass: E-FL6 (Hoya) coordinate equivalent. f = +19.45 mm.

The first component behind the stop. Its net power is almost zero; the two strongly curved cemented interfaces act on
spherical aberration and colour close to the stop without adding power.

### C4: L12 + L13 (cemented, net f = +146.5 mm)

- **L12, Biconvex Positive:** nd = 1.84666, νd = 23.78. Glass: FDS90 (Hoya) coordinate equivalent. f = +19.81 mm.
- **L13, Negative Meniscus, concave to object:** nd = 1.91082, νd = 35.25. Glass: TAFD35 (Hoya) coordinate
  equivalent. f = −22.85 mm.

A weakly positive pair with a strongly curved interface (R = −17.68 mm) concave to the stop.

### L14: Biconvex Positive

nd = 1.49700, νd = 81.61. Glass: FCD1 (Hoya) coordinate equivalent — ED fluorophosphate class. f = +26.68 mm.

The main positive singlet of G3 and the second ED position in the maker's diagram.

### C5: L15 + L16 (cemented, net f = +252.2 mm)

- **L15, Biconcave Negative:** nd = 1.90366, νd = 28.00. Glass: Unmatched. f = −19.55 mm.
- **L16, Biconvex Positive:** nd = 1.49700, νd = 81.61. Glass: FCD1 (Hoya) coordinate equivalent — ED fluorophosphate
  class. f = +20.92 mm.

An achromatic pair: a high-index flint against the third ED element, near the rear of the lens where the off-axis
bundles are widely separated, which suits lateral-colour correction.

### L17: Negative Meniscus, concave to object, both faces aspheric

nd = 1.80781, νd = 40.97. Glass: Unmatched. f = −65.10 mm.

The last element, 51.76 mm ahead of the image. Both aspheric faces depart from their base spheres by nearly the same
amount (see Aspherical Surfaces), so the asphere acts on the off-axis bundles near the image rather than on axial power.

## Glass Identification

The patent prints d-line nd and νd only. Apart from L2, every printed pair that matches a catalog row matches a HOYA
row exactly (E-F5 at νd 38.01 and E-FL6 at νd 42.84 are HOYA-specific values), so the labels name HOYA coordinate
equivalents; L2 matches only the Sumita moulding glass K-CSK120-M. The production supplier is not published.

| Glass (coordinate equivalent) | nd | νd | Elements | Role |
| --- | --- | --- | --- | --- |
| FCD1 (Hoya) | 1.49700 | 81.61 | L3, L14, L16 | ED fluorophosphate; the maker's three ED positions |
| K-CSK120-M (Sumita) | 1.58444 | 59.16 | L2 | Moulding glass for the front double asphere |
| E-F5 (Hoya) | 1.60342 | 38.01 | L4, L9 | Light flint |
| E-FL6 (Hoya) | 1.56732 | 42.84 | L11 | Light flint |
| E-FD8 (Hoya) | 1.68893 | 31.16 | L8 | Dense flint |
| E-FD10 (Hoya) | 1.72825 | 28.32 | L6 | Dense flint |
| FDS90 (Hoya) | 1.84666 | 23.78 | L12 | Dense flint |
| E-FDS1 (Hoya) | 1.92286 | 20.88 | L7 | Very dense flint |
| TAFD30 (Hoya) | 1.88300 | 40.80 | L10 | Lanthanum dense flint |
| TAFD35 (Hoya) | 1.91082 | 35.25 | L13 | Lanthanum dense flint |
| Unmatched | 1.90000 | 43.00 | L1, L5 | High-index lanthanum type |
| Unmatched | 1.90366 | 28.00 | L15 | High-index flint |
| Unmatched | 1.80781 | 40.97 | L17 | Rear double-aspheric element |

L15's nd of 1.90366 is the index of HOYA TAFD25, whose νd is about 31.3; no catalog glass has νd 28.00 at that index,
and the data file keeps the printed value. The printed value is consistent with the rest of the patent: Example 2
prints the same 1.90366/28.00 for its L15, and with νd 28.00 the model reproduces the axial C and g curves of
Figure 2, while TAFD25's dispersion would move the C focus about 0.16 mm and the g focus about 0.77 mm away from them.
The round 1.90000/43.00 of L1 and L5 also matches no catalog row; Example 2 repeats it (for its L5) and the
1.80781/40.97 of L17.

The catalog curves give FCD1 a positive anomalous partial dispersion. The patent prints no partial-dispersion data, so
the secondary-spectrum behaviour of the ED elements is catalog-derived.

## Focus Mechanism

Focusing moves two groups in opposite directions while the front group stays fixed (¶0006): G2 moves toward the image
and G3 toward the object. The patent prints the infinity state and a 0.01× state (¶0065):

| Gap | Infinity | 0.01× | Change |
| --- | --- | --- | --- |
| D4 (G1–G2) | 7.9482 | 7.9700 | +0.0218 |
| D14 (G2–stop) | 4.7930 | 4.4451 | −0.3479 |
| D29 (back focus) | 51.7633 | 52.0821 | +0.3188 |

G2 moves 0.022 mm and G3 about 0.32 mm. The stop keeps its printed 1.5 mm spacing to L9 in both states, so it travels
with G3; Figure 1's G3 bracket also starts at the stop. The three changes do not sum to zero: the moving gaps' total
is 0.0073 mm shorter in the close state, so the printed close state places the image 0.0073 mm nearer the front
element than a fixed-track move would. The model keeps the printed spacings unchanged.

The patent does not print the object distance of the 0.01× state. From the printed spacings the paraxial object lies
1491.4 mm ahead of S1, 1.637 m from the image, at β = −0.0103; the data file's close-focus distance is that calculated
value. The marketed minimum focus distance of 0.2 m is far closer than the printed state and is not modelled. The focus
control steps between the two printed states only.

## Aspherical Surfaces

Four surfaces are aspheric: both faces of L2 (S3, S4) and both faces of L17 (S28, S29). The patent's sag equation
(¶0064) is

z = (y²/r) / (1 + √(1 − (1 + K)(y/r)²)) + A4y⁴ + A6y⁶ + A8y⁸ + A10y¹⁰ + A12y¹²

so K is the standard conic constant (K = 0 is a sphere) and is used as printed. Coefficients as printed (¶0056–¶0057):

| Surface | K | A4 | A6 | A8 | A10 | A12 |
| --- | --- | --- | --- | --- | --- | --- |
| S3 | 0.7661 | 5.07719E-05 | −1.50100E-07 | 2.77602E-10 | −2.74947E-13 | 5.56030E-17 |
| S4 | −0.5783 | 2.36603E-05 | 1.41915E-08 | −1.60806E-09 | 4.65224E-12 | −4.18024E-15 |
| S28 | 0.4514 | 1.61763E-04 | −3.69059E-07 | 1.95986E-09 | −1.00029E-11 | 5.38629E-14 |
| S29 | −11.3986 | 3.67580E-05 | 3.62033E-07 | −4.30505E-09 | 2.02846E-11 | −3.99374E-14 |

At a height of 16 mm S3 lies 1.73 mm behind its base sphere and S4 4.16 mm ahead of it: the convex front steepens and
the concave rear flattens toward the rim, so L2's negative power falls off steeply with height. This is the S-shaped
profile of the drawings and the usual means of holding distortion down in a retrofocus ultra-wide. On L17, S28 and S29
both lie about 0.75–0.78 mm behind their base spheres at 9 mm, a near-parallel bending of the rim zone that changes the
off-axis bundles with little effect on axial power. The patent does not say how the aspheres are made; L2's catalog
match is a moulding glass.

## Model Scope and Limitations

- **Prescription.** All 29 surfaces, the stop, the four aspheres and both spacing states are as printed. The model's
  paraxial EFL is 15.4905 mm (printed 15.4908 mm) and its back focal distance 51.762 mm (printed D29 51.7633 mm); the
  image plane stays at the printed D29.
- **Apertures.** The patent prints no semi-diameters or stop diameter. The stop radius is derived from the printed
  F/4.6. The element rims are estimated from Figure 1, which is drawn to scale, and the flat rims it draws on L2, L3, L5
  and L17 are shown as lands. The nearly hemispherical rear face of L1 runs to a 74° rim slope, and L1 and L2 nearly
  meet at their rims, as the figure draws them.
- **Coverage and shift.** The chief ray reaches the edge of the 65 mm image circle (32.5 mm image height, about 64.8°),
  beyond the patent's 31.3 mm, and so covers the frame corner at the full ±11 mm shift. Wide open, the modelled
  geometric transmission is about 78 % at the unshifted frame corner and about 48 % at the shifted corner. These
  figures follow from the estimated rims, not from a published measurement. The ±8 mm medium-format shift is not
  modelled.
- **Close focus.** Only the printed 0.01× state is modelled; the marketed 0.2 m minimum focus distance is not.
- **Glass.** Thirteen of the seventeen elements resolve to catalog glasses; L1, L5, L15 and L17 trace with dispersion
  estimated from their printed nd and νd. On axis the model's d and C curves agree with Figure 2; its g focus lies about
  0.03 mm nearer the lens than the plotted one, the size of shift a slightly higher partial dispersion in L15 (the most
  sensitive of the estimated glasses) would remove.

## Sources

- CN 110955036 B, original publication: [patent PDF](https://patentimages.storage.googleapis.com/29/3a/d4/2ae900392956e2/CN110955036B.pdf),
  ¶0040–¶0065 and Figures 1–3.
- Venus Optics, [Laowa 15mm f/4.5 Zero-D Shift product page](https://www.venuslens.net/product/laowa-15mm-f-4-5-zero-d-shift-nf/):
  17 elements in 11 groups, two aspherical elements, 110° angle of view, shift ±11 mm (full frame) and ±8 mm (medium
  format), Ø65 mm image circle, 0.2 m minimum focus, and mounts Canon EF and RF, Nikon F and Z, Sony E, Pentax K,
  L-Mount, Fujifilm G and Hasselblad XCD.
- Venus Optics, [optical construction diagram](https://www.venuslens.net/wp-content/uploads/2020/10/Gstr-1.png):
  aspherical and extra-low dispersion positions.
- Newsshooter, [announcement of 30 October 2020](https://www.newsshooter.com/2020/10/30/laowa-15mm-f-4-5-zero-d-shift-lens/):
  launch date, construction and specifications.
