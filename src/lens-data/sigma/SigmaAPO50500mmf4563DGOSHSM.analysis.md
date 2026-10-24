# Sigma APO 50-500mm f/4.5-6.3 DG OS HSM: Example 2

## Patent Reference and Design Identification

**Patent:** JP 2011-039260 A  
**Application Number:** JP 2009-186204  
**Filed:** August 11, 2009  
**Published:** February 24, 2011  
**Granted as:** JP 5417083 B2 (February 12, 2014; identical Example 2 tables)  
**Inventor:** Tomoki Kono  
**Assignee:** Sigma Corporation  
**Title:** 防振機能を有する高変倍比ズームレンズ (High variable power ratio zoom lens having a vibration-proof function)  
**Embodiment analyzed:** Numerical Example 2 (¶0034), lens section Figure 8

The patent sets out to build a roughly 10× zoom whose telephoto field is 6.5° or less, and which is both stabilized and compact (¶0013). It discloses three numerical examples. Example 2 is the one that matches the production **APO 50-500mm F4.5-6.3 DG OS HSM** (2010):

- **Element count.** Example 2 has 22 elements in 16 air-separated groups, the count Sigma publishes. Examples 1 and 3 each have 41 surfaces and 23 elements, with a four-element fifth group.
- **Special glass.** Example 2 has exactly four elements at nd 1.49700 / νd 81.6 (L2, L3, L9 and L14). These are the four positions Sigma's construction diagram colours as SLD glass.
- **Focal range.** Example 2 covers f = 51.50–485.00 mm at F/4.57–6.47. Example 3 is a shorter 43–426 mm variant.
- **Layout.** The maker's diagram shows the same layout element by element:
  - a three-element front group and a single large negative element;
  - a singlet followed by a singlet and a cemented pair;
  - an SLD singlet and a cemented pair ahead of the stop, then a cemented pair behind it;
  - five elements in the sixth group and two cemented pairs at the rear.

The correlation is strong, but a patent example is not a certified factory prescription.

Sigma lists 22 elements in 16 groups, minimum focus 50–180 cm, 1:3.1 maximum magnification, a 95 mm filter and Sigma, Canon, Nikon, Pentax and Sony A mounts. The patent's design focal lengths and f-numbers are kept rather than the marketed 50–500 mm and f/4.5–6.3.

## Optical Architecture

Seven groups in sign order **positive–negative–negative–positive–negative–positive–negative** (claim 1):

- **G1 (+), L1–L3:** a negative meniscus followed by two SLD positives.
- **G2 (−), L4:** a single, nearly plano-concave variator.
- **G3 (−), L5–L8:** sub-group G3a, the positive singlet L5, followed by the negative stabilizing sub-group G3b (L6 plus the cemented pair L7/L8).
- **G4 (+), L9–L11:** an SLD singlet and a cemented doublet.
- **The stop.** It follows G4 and travels with G5.
- **G5 (−), L12/L13:** one cemented doublet.
- **G6 (+), L14–L18:** an SLD meniscus, two crown positives and a cemented doublet.
- **G7 (−), L19–L22:** two cemented doublets.

All 38 refracting surfaces are spherical.

Isolated group focal lengths, calculated from the prescription:

| Group | f (mm) |
| --- | ---: |
| G1 | +197.42 |
| G2 | −63.71 |
| G3 | −133.38 |
| G3a | +69.50 |
| G3b | −40.03 |
| G4 | +54.43 |
| G5 | −49.92 |
| G6 | +31.41 |
| G7 | −42.33 |

Zooming from wide to tele:

- G2 moves 28.55 mm toward the image (claim 1).
- G3 stays fixed relative to the image (claim 3, ¶0027). That keeps the stabilizer actuator stationary.
- G1, G4, G5 (with the stop), G6 and G7 move toward the object by 86.74, 28.67, 21.73, 29.98 and 37.23 mm.
- Total length grows from 261.34 mm to 348.07 mm.

The five conditions all hold for Example 2. The patent tabulates them, and they reproduce from the prescription:

| Condition | Range | Example 2 | Paragraph |
| --- | --- | ---: | --- |
| (1) f1/fT | 0.35–0.45 | 0.41 (197.42 / 485) | ¶0022–0023 |
| (2) \|L1T/fT\| | 0.15–0.23 | 0.179 (86.74 / 485) | ¶0024 |
| (3) \|f7/fT\| | 0.07–0.12 | 0.087 | ¶0025–0026 |
| (4) \|f3a/f3\| | < 0.6 | 0.52 | ¶0028–0029 |
| (5) \|m2T·m3T/fT\| | 0.003–0.004 | 0.0035 | ¶0030 |

What each condition controls:

- **Condition (1)** shortens G1 so it travels less, without letting its spherical aberration and axial color be magnified by the groups behind it.
- **Condition (2)** limits G1's travel for a compact barrel.
- **Condition (3)** balances G7's focus travel against how much aberration changes as it focuses.
- **Conditions (4) and (5)** let the positive G3a lower the off-axis rays, so the moving G3b can stay small and light.

## Element-by-Element Analysis

Isolated thick-element focal lengths are calculated in air from the patent prescription. The patent prints d-line index and Abbe number (¶0032).

### L1 — Negative Meniscus

nd = 1.83400, νd = 37.3. Glass: NBFD10 (HOYA coordinate equivalent). f = −271.7 mm.

The weak high-index negative meniscus at the front of G1, convex to the object. Its higher dispersion offsets the color of the two low-dispersion positives behind it. Its gentle bending keeps the large front surfaces from adding spherical aberration at the telephoto end.

### L2 — Biconvex Positive

nd = 1.49700, νd = 81.6. Glass: FCD1 (HOYA coordinate equivalent) — SLD position. f = +190.3 mm.

The first of two fluorophosphate-class positives in G1, separated from L1 by a 1.42 mm air lens. G1 sets the axial color of the whole telephoto end, which later groups magnify (¶0022). Splitting its positive power over two SLD elements keeps secondary spectrum and spherical aberration low.

### L3 — Positive Meniscus

nd = 1.49700, νd = 81.6. Glass: FCD1 (HOYA coordinate equivalent) — SLD position. f = +288.5 mm.

The second SLD positive, a meniscus convex to the object, completes G1. G1 as a whole is +197.4 mm.

### L4 — Biconcave Negative

nd = 1.77250, νd = 49.6. Glass: N-LAF34 (SCHOTT coordinate equivalent). f = −63.7 mm.

The whole of the variator G2. Its front radius is −18,596 mm, effectively flat, so nearly all of its power sits on the concave rear face. Moving toward the image, it raises G2's magnification as the lens zooms toward tele. A high-index lanthanum crown keeps the curvature moderate for this much power.

### L5 — Biconvex Positive

nd = 1.80610, νd = 33.3. Glass: NBFD15 (HOYA coordinate equivalent). f = +69.5 mm.

The positive sub-group G3a. It converges the diverging beam leaving G2, so the off-axis rays entering G3b are lower and the stabilizing sub-group can be smaller (¶0029).

### L6 — Biconcave Negative

nd = 1.71300, νd = 53.9. Glass: LAC8 (HOYA coordinate equivalent). f = −76.3 mm.

The front element of G3b. The patent shifts this sub-group perpendicular to the axis to move the image for stabilization (claim 1; Figure 8 marks L3b with a double arrow across the axis).

### L7 / L8 — Cemented Doublet (Positive Meniscus + Biconcave Negative)

- **L7:** nd = 1.84666, νd = 23.8. Glass: FDS90 (HOYA coordinate equivalent). f = +56.5 mm.
- **L8:** nd = 1.77250, νd = 49.6. Glass: N-LAF34 (SCHOTT coordinate equivalent). f = −35.0 mm.

The doublet is −88.7 mm overall and gives G3b (−40.0 mm) most of its negative power. Pairing a dense flint with a lanthanum crown keeps lateral color low while the sub-group is decentred. The whole of G3b is only three elements, which suits a fast OS actuator.

### L9 — Biconvex Positive

nd = 1.49700, νd = 81.6. Glass: FCD1 (HOYA coordinate equivalent) — SLD position. f = +52.3 mm.

The third SLD element, at the front of G4 just ahead of the stop. The axial beam is wide here at every focal length, so low dispersion helps axial color across the zoom range.

### L10 / L11 — Cemented Doublet (Biconvex + Biconcave)

- **L10:** nd = 1.48749, νd = 70.4. Glass: H-QK3L (CDGM coordinate equivalent). f = +57.7 mm.
- **L11:** nd = 1.84666, νd = 23.8. Glass: FDS90 (HOYA coordinate equivalent). f = −51.5 mm.

An equiconvex crown (R ±55.47) cemented to a dense flint. The pair is nearly afocal (−666 mm) and acts mainly as an achromatizing and spherical-correcting element on G4's rear side, against the stop.

### L12 / L13 — Cemented Doublet (Biconcave + Positive Meniscus)

- **L12:** nd = 1.72916, νd = 54.7. Glass: TAC8 (HOYA coordinate equivalent). f = −23.3 mm.
- **L13:** nd = 1.80518, νd = 25.5. Glass: FD60 (HOYA coordinate equivalent). f = +44.3 mm.

The whole of G5 (−49.9 mm), directly behind the stop. It moves with the stop and diverges the beam into the strong positive relay G6. The flint partner corrects the color of the strong biconcave crown.

### L14 — Positive Meniscus

nd = 1.49700, νd = 81.6. Glass: FCD1 (HOYA coordinate equivalent) — SLD position. f = +152.6 mm.

The fourth SLD element opens G6. It is concave to the object, so the bundle diverging from G5 meets it at moderate incidence.

### L15 — Positive Meniscus

nd = 1.51680, νd = 64.2. Glass: H-K9L (CDGM coordinate equivalent). f = +152.7 mm.

A weak crown meniscus, also concave to the object. It shares G6's positive power with L14.

### L16 — Biconvex Positive

nd = 1.48749, νd = 70.4. Glass: H-QK3L (CDGM coordinate equivalent). f = +82.5 mm.

A low-dispersion crown positive. Spreading G6's +31.4 mm power over four positive elements keeps each surface's spherical aberration small.

### L17 / L18 — Cemented Doublet (Biconvex + Negative Meniscus)

- **L17:** nd = 1.48749, νd = 70.4. Glass: H-QK3L (CDGM coordinate equivalent). f = +47.7 mm.
- **L18:** nd = 1.84666, νd = 23.8. Glass: FDS90 (HOYA coordinate equivalent). f = −67.0 mm.

The doublet that completes G6 and achromatizes the relay. The rear face is nearly flat (R −743.7) and faces the variable gap D33 ahead of the focusing group.

### L19 / L20 — Cemented Doublet (Biconvex + Biconcave)

- **L19:** nd = 1.80518, νd = 25.5. Glass: FD60 (HOYA coordinate equivalent). f = +44.5 mm.
- **L20:** nd = 1.71300, νd = 53.9. Glass: LAC8 (HOYA coordinate equivalent). f = −25.6 mm.

The front doublet of the focusing group G7 (−62.2 mm). Here the flint is the positive member, a reversed arrangement that controls color change as G7 moves for focusing.

### L21 / L22 — Cemented Doublet (Biconcave + Biconvex)

- **L21:** nd = 1.83400, νd = 37.3. Glass: NBFD10 (HOYA coordinate equivalent). f = −28.1 mm.
- **L22:** nd = 1.56732, νd = 42.8. Glass: E-FL6 (HOYA coordinate equivalent). f = +39.8 mm.

The rear doublet (−123.7 mm) and the last optical surfaces. With L19/L20 it makes G7 a compact negative group of −42.3 mm. The patent keeps its power within condition (3), so focus travel stays short without large swings in spherical aberration or astigmatism (¶0026).

## Glass Identification

Every element keeps the patent's printed nd and νd. Each coordinate equals a catalog glass, used here only for dispersion; production suppliers are unconfirmed.

| Glass (vendor) | nd / νd | Elements | Role |
| --- | --- | --- | --- |
| FCD1 (HOYA) | 1.49700 / 81.6 | L2, L3, L9, L14 | SLD positives |
| H-QK3L (CDGM) | 1.48749 / 70.4 | L10, L16, L17 | low-dispersion crowns |
| H-K9L (CDGM) | 1.51680 / 64.2 | L15 | crown |
| LAC8 (HOYA) | 1.71300 / 53.9 | L6, L20 | lanthanum crown negatives |
| TAC8 (HOYA) | 1.72916 / 54.7 | L12 | lanthanum crown negative |
| N-LAF34 (SCHOTT) | 1.77250 / 49.6 | L4, L8 | high-index negatives |
| NBFD10 (HOYA) | 1.83400 / 37.3 | L1, L21 | high-index negatives |
| NBFD15 (HOYA) | 1.80610 / 33.3 | L5 | high-index positive |
| E-FL6 (HOYA) | 1.56732 / 42.8 | L22 | light flint |
| FD60 (HOYA) | 1.80518 / 25.5 | L13, L19 | dense flints |
| FDS90 (HOYA) | 1.84666 / 23.8 | L7, L11, L18 | dense flints |

The chromatic strategy puts the low-dispersion glass where the axial beam is widest and most magnified:

- two SLD elements in G1;
- one in G4, at the stop;
- one at the entrance of the relay G6.

Each of the cemented doublets in G3b, G4, G5, G6 and G7 pairs a dense flint with a crown. The patent itself names no special glass. The SLD attribution comes from Sigma's construction diagram together with the 81.6 Abbe number.

## Zoom, Stop and OIS

The patent tabulates three infinity states: f = 51.50, 159.61 and 485.00 mm at F/4.57, 5.73 and 6.47, with full fields 46.37°, 15.03° and 4.97°.

| Gap | 51.50 mm | 159.61 mm | 485.00 mm |
| --- | ---: | ---: | ---: |
| D6 | 4.4846 | 71.1215 | 119.7684 |
| D8 | 37.3327 | 18.3990 | 8.7836 |
| D15 | 34.1206 | 15.3257 | 5.4551 |
| D20 | 3.3424 | 7.0959 | 10.2772 |
| D24 | 10.8357 | 6.8703 | 2.5899 |
| D33 | 10.4485 | 12.0071 | 3.2000 |
| BF | 54.9770 | 72.4248 | 92.2021 |

**Mislabelled table rows.** Example 2's variable-gap tables label their fifth and sixth rows "d28" and "d35". Those labels belong to Examples 1 and 3, which have 41 surfaces. In Example 2, surfaces 28 and 35 carry fixed spacings (0.15 and 0.80 mm), and the only remaining variable gaps are d24 and d33. The rows are applied there, and every printed value is unchanged. The grant repeats the same labels. With this reading:

- G3's distance to the image is the same at all three columns, as claim 3 requires.
- The computed EFLs are 51.498, 159.602 and 484.954 mm.
- The paraxial back focus agrees with the printed Bf within 0.003–0.018 mm, which is rounding.

**Solved zoom positions.** The model shows a continuous zoom through 65 stations. The three published states sit at stations 0, 20 and 64. The other stations are solved cam points, not the factory cam:

- G1–G6 positions are interpolated between the source columns.
- G7 keeps each station in focus at infinity, within 0.02 mm.
- Stations are denser toward tele, where the cam curves most.
- Every group moves monotonically, and G3 holds still.

**Stop and OIS.** The stop diameter is not published. The iris is sized from the printed design f-numbers at each station, giving a stop radius of about 10.45–10.50 mm across the range. The model shows the stabilizing sub-group G3b centred; it does not model decentration.

## Focus Mechanism

Rear focusing by the negative group G7 (claim 2). G7 moves toward the image for closer distances; D33 opens and BF closes by the same amount. The patent prints one finite-distance column per zoom state, at roughly constant magnification −0.025:

| | 51.50 mm | 159.61 mm | 485.00 mm |
| --- | ---: | ---: | ---: |
| Object distance from S1 (mm) | 1978.66 | 6115.96 | 18651.93 |
| Object to image (m) | 2.24 | 6.43 | 19.00 |
| D33, finite (mm) | 10.6847 | 12.5251 | 4.3431 |
| BF, finite (mm) | 54.7410 | 71.9069 | 91.0585 |
| G7 travel (mm) | 0.236 | 0.518 | 1.144 |

These are the patent's test conjugates, not the production minimum focus distance. The maker lists 50–180 cm, which would need more G7 travel than the patent tabulates. The focus slider stops at the patent's near state. Positions between infinity and that state are interpolated G7 positions, and the distances shown for them are estimates. Sigma drives focus with HSM; the patent does not mention a drive.

## Aspherical Surfaces

None. All 38 refracting surfaces of Example 2 are spherical.

## Model Scope and Limitations

- The prescription, published spacings and design f-numbers are literal. The intermediate zoom and focus positions, the iris radius and all clear radii are derived.
- **Clear radii.** They are measured from Figure 8, which is drawn to scale: the vertex spacings, the drawn stop and the rim sags all agree with the prescription. The front element is 43.5 mm. Where the figure draws a flat mounting flange outside a concave face, the radius stops where the curve ends. Two of those faces (S22 behind the stop and S27 in G6) sit right at the on-axis beam of the design f-number. The off-axis vignetting this produces is kept as drawn.
- **Mislabelled spacing rows.** The source's d28/d35 labels are read as d24/d33. Nothing else in Example 2 supports another reading.

## Sources

1. JP 2011-039260 A (Sigma Corporation). Claims and description: printed pages 2–6. Example 2 tables: printed page 8 (¶0034). Figure 8 (lens section) and Figures 9–11: printed page 12.
2. JP 5417083 B2, the granted publication of the same application. Example 2 is on printed page 8.
3. [Sigma APO 50-500mm F4.5-6.3 DG OS HSM product page](https://www.sigma-global.com/en/lenses/50_500_45_63_os/): construction diagram, 22 elements / 16 groups, SLD glass, 50–180 cm minimum focus, 1:3.1 maximum magnification, 95 mm filter, available mounts.
4. [Imaging Resource specifications](https://imaging-resource.com/lenses/sigma/50-500mm-f4.5-6.3-dg-os-hsm-apo/specifications): 22 elements / 16 groups including four SLD elements.
