## Patent Reference and Design Identification

**Patent:** EP 2 469 319 A2\
**Application Number:** EP 11194965.7\
**Filed:** 2011-12-21\
**Published:** 2012-06-27\
**Priority:** JP 2010-284858 (2010-12-21); KR 20110123237 (2011-11-23)\
**Inventor:** Makoto Misaka\
**Applicant:** Samsung Electronics Co., Ltd.\
**Title:** Vibration proof zoom lens and photographing apparatus having the same\
**Example details:** ¶0198–0207, pp. 16–17 (prescription ¶0199, zoom data ¶0200, aspheres ¶0201, focus travel ¶0202); section FIG. 3 (zoom lens 101); aberrations FIGS. 14–22; conditional values Table 1. Unscaled millimetres.

The patent describes a four-group stabilized superzoom for a camera with contrast-detection autofocus, in which a single light positive element does the focusing (¶0009–0011, ¶0151). It does not name a product. Example 2 correlates with the Samsung NX 18-200mm F3.5-6.3 ED OIS on these points:

1. **Construction.** Example 2 has 18 elements in 13 groups, the count Samsung gives for the lens.
2. **Special elements.** Three aspherical surfaces on three elements (L9, L13, L15) and two elements of nd 1.49700, νd 81.6 (L2, L10), against Samsung's three aspherical and two ED elements.
3. **Range.** f = 18.50–194.15 mm at F3.55–6.50 covers the APS-C NX format without rescaling; FIG. 14 labels the wide-angle half-field 39.81°.
4. **Focus and stabilization.** L9 alone moves for focus, a light group suited to the lens's voice-coil autofocus motor, and a cemented doublet shifts across the axis for optical stabilization.
5. **Close focus.** The patent's near state is an object distance of 0.5 m, Samsung's minimum focus distance. There the model's magnification at tele is 0.281×, against the 1:3.6 (0.278×) Photozone lists.
6. **Timing.** The Japanese priority date of 21 December 2010 precedes the lens's announcement on 21 February 2011.

Example 3 has the same construction element for element, also with three aspheres and two νd 81.6 elements. Its weak negative meniscus ahead of the stop is convex toward the object instead of concave, and its radii, spacings and several glasses differ in detail. No construction drawing from Samsung has been found that would separate the two, so Example 2 serves as the representative design. Example 1 (17 elements in 12 groups, without that meniscus) does not fit the published count.

The US family member, US 2012/0154913 A1 (granted as US 9,140,905 B2), prints η15 = 1.53123 for L15 of Example 2. The EP publication prints 1.58123, as do EP Examples 1 and 3 for the corresponding element. With 1.53123 the traced EFL becomes 20.94 / 88.33 / 259.88 mm and the image falls 4.4–24.8 mm behind the printed image plane, and condition (5) rises from 0.227 to 0.263. The US value is therefore a misprint; the model uses the EP value.

## Optical Architecture

The design is a positive-negative-positive-positive zoom. Example 2 labels its groups G11–G14; the model shows them as G1–G4. The diagram brackets G3 by its four part groups, lettered after the focal lengths f3f, f3a, f3b and f3c of Table 1: G3f (L8), G3a (L9), G3b (the triplet L10–L12) and G3c (the stabilizing doublet L13–L14).

| Group | Elements         | Focal length, mm | Role                                                |
| ----- | ---------------- | ---------------: | --------------------------------------------------- |
| G1    | L1–L3            |           +84.35 | Positive front collector                            |
| G2    | L4–L7            |           −13.29 | Negative variator                                   |
| G3    | L8, stop, L9–L14 |    +35.84 (tele) | Relay with focusing element and stabilizing doublet |
| G4    | L15–L18          |           +44.09 | Positive rear group                                 |

G3 is the patent's main subject. In object-to-image order it holds a weak negative meniscus (L8, the "fourth part group", ¶0124), the stop, the focusing element L9 (first part group), the cemented triplet L10–L12 (second part group) and the stabilizing doublet L13–L14 (third part group). ¶0016–0019 explain the split: with the positive triplet between the focusing element and the stabilizing doublet, the focus and stabilization sensitivities can be set separately, and the triplet's two cemented surfaces correct the colour of the light reaching the doublet, so that stabilization adds little lateral colour. L8 adjusts the power distribution of G3, increasing focus sensitivity at tele (¶0131, ¶0150).

From wide to tele all four groups and the stop move toward the object (¶0145). D5 (G1–G2) widens from 1.10 to 48.03 mm and D13 (G2–G3) closes from 19.46 to 1.92 mm. Inside G3, L8 and the stop travel together (D15 is fixed at 1.00 mm), the gap from the stop to L9 (D16) closes from 6.81 to 1.20 mm, and the gap from L9 to the triplet (D18) opens from 2.29 to 7.90 mm (¶0146). D25 (G3–G4) closes from 6.33 to 2.00 mm, and D32, from the last lens surface to the low-pass filter, grows from 20.76 to 60.32 mm. The overall length from the front vertex to the image is 129.57, 170.14 and 194.20 mm at the three stations.

The prescription ends with a 2.24 mm plate (nd 1.51633, νd 64.1), drawn as LPF in FIG. 3, and 0.60 mm of air to the image. The model traces it as a camera-side rear plate and does not draw it.

## Element-by-Element Analysis

Focal lengths are the model's thick-lens values for each element alone in air. Glass names are HOYA catalog glasses whose nd and νd match the printed values; they are equivalents, not Samsung's suppliers. The patent describes the elements only by sign and shape.

### L1 / L2 — Cemented Doublet C1 (Negative Meniscus + Biconvex Positive)

- **L1:** nd = 1.80518, νd = 25.5. Glass: FD60 (HOYA) catalog equivalent. f = −167.71 mm.
- **L2:** nd = 1.49700, νd = 81.6. Glass: FCD1 (HOYA) catalog equivalent, ED fluor-crown. f = +106.34 mm.

The front doublet of G1 (combined f = +292.38 mm) pairs a dense flint meniscus with the first of the two low-dispersion elements. The axial beam is widest here at tele, so this pair is where G1's axial colour is corrected. Its position fits one of Samsung's two ED elements.

### L3 — Positive Meniscus

nd = 1.62041, νd = 60.3. Glass: BACD16 (HOYA) catalog equivalent. f = +116.88 mm.

A positive meniscus convex to the object that completes the positive power of G1.

### L4 — Negative Meniscus

nd = 1.83481, νd = 42.7. Glass: TAFD5G (HOYA) catalog equivalent. f = −18.56 mm.

The strongest negative element of G2, convex to the object. Its rear face (R = 13.905 mm) is deeply curved; the model ends the curved cap at 9.4 mm and continues it with a flat land to the 13.5 mm edge.

### L5 — Biconcave Negative

nd = 1.83481, νd = 42.7. Glass: TAFD5G (HOYA) catalog equivalent. f = −26.50 mm.

The second negative element of G2, in the same lanthanum glass as L4.

### L6 — Biconvex Positive

nd = 1.84666, νd = 23.8. Glass: FDS90 (HOYA) catalog equivalent. f = +16.32 mm.

The only positive element of G2. Its dense flint offsets the colour of the three negative lanthanum elements around it.

### L7 — Biconcave Negative

nd = 1.80420, νd = 46.5. Glass: TAF3D (HOYA) catalog equivalent. f = −23.45 mm.

The last element of G2, separated from L6 by 0.14 mm of air.

### L8 — Negative Meniscus

nd = 1.74400, νd = 44.9. Glass: LAF2 (HOYA) catalog equivalent. f = −297.47 mm.

A weak meniscus concave toward the object (¶0129), 1.00 mm ahead of the stop and moving with it. Condition (8), |f3f|/ft, gives its power relative to the tele focal length: Table 1 prints 1.524 and the model gives 1.532. ¶0131 states the trade-off: a weaker L8 eases wide-angle coma, a stronger one raises focus sensitivity at tele and shortens L9's travel.

### L9 — Biconvex Positive (1× Asph)

nd = 1.58673, νd = 61.3. Glass: M-BACD5N (HOYA moulding glass), nearest catalog row. f = +36.98 mm.

The whole focusing group: a single element of 3.20 mm centre thickness with an aspherical rear face (surface 18A), whose positive power weakens away from the axis (¶0134). It moves toward the image to focus closer (¶0147). Its focal length relative to the tele focal length, f3a/ft = 0.190, matches Table 1.

### L10 / L11 / L12 — Cemented Triplet T1 (Biconvex + Biconcave + Biconvex)

- **L10:** nd = 1.49700, νd = 81.6. Glass: FCD1 (HOYA) catalog equivalent, ED fluor-crown. f = +27.63 mm.
- **L11:** nd = 1.84666, νd = 23.8. Glass: FDS90 (HOYA) catalog equivalent. f = −27.34 mm.
- **L12:** nd = 1.51742, νd = 52.2. Glass: E-CF6 (HOYA) catalog equivalent. f = +51.37 mm.

The second part group (combined f = +48.01 mm). Its two cemented surfaces (¶0135) pair the second ED element with a dense flint, so the axial colour of the relay is corrected ahead of the stabilizing doublet (¶0019).

### L13 / L14 — Cemented Doublet C2, Stabilizing Group (Biconcave Negative (1× Asph) + Positive Meniscus)

- **L13:** nd = 1.69090, νd = 53.3. Glass: M-LAC130 (HOYA moulding glass), nearest catalog row. f = −15.03 mm.
- **L14:** nd = 1.72825, νd = 28.3. Glass: E-FD10 (HOYA) catalog equivalent. f = +29.01 mm.

The third part group (combined f = −28.57 mm) moves perpendicular to the axis to stabilize the image (¶0148). It is achromatized as a negative group, with the higher-dispersion glass in the positive element, so that a decentred doublet adds little lateral colour. The front face of L13 (surface 23A) is aspherical, with negative power that weakens away from the axis (¶0136).

### L15 — Biconvex Positive (1× Asph)

nd = 1.58123, νd = 59.5. Glass: M-BACD12 (HOYA moulding glass), nearest catalog row. f = +31.01 mm.

The first element of G4, with an aspherical rear face (surface 27A) whose positive power weakens away from the axis (¶0138). This is the element whose index the US publication misprints.

### L16 / L17 — Cemented Doublet C3 (Biconvex Positive + Biconcave Negative)

- **L16:** nd = 1.51742, νd = 52.2. Glass: E-CF6 (HOYA) catalog equivalent. f = +19.29 mm.
- **L17:** nd = 1.83481, νd = 42.7. Glass: TAFD5G (HOYA) catalog equivalent. f = −10.06 mm.

A negative cemented pair (combined f = −24.39 mm) in the middle of G4, joined at a strongly curved interface (R = −11.984 mm).

### L18 — Biconvex Positive

nd = 1.58144, νd = 40.9. Glass: E-FL5 (HOYA) catalog equivalent. f = +36.77 mm.

The last element. With it, the model's exit pupil lies 63, 86 and 92 mm ahead of the last lens surface at wide, middle and tele, so the light reaches the sensor at moderate angles throughout the zoom.

## Glass Identification and Selection

| Elements    | Glass (catalog equivalent) | nd      | νd   | Role                                   |
| ----------- | -------------------------- | ------- | ---- | -------------------------------------- |
| L1          | FD60 (HOYA)                | 1.80518 | 25.5 | Flint of the front doublet             |
| L2, L10     | FCD1 (HOYA)                | 1.49700 | 81.6 | ED crowns; Samsung's two ED elements   |
| L3          | BACD16 (HOYA)              | 1.62041 | 60.3 | Barium crown                           |
| L4, L5, L17 | TAFD5G (HOYA)              | 1.83481 | 42.7 | Lanthanum negatives                    |
| L6, L11     | FDS90 (HOYA)               | 1.84666 | 23.8 | Dense flints                           |
| L7          | TAF3D (HOYA)               | 1.80420 | 46.5 | Lanthanum negative                     |
| L8          | LAF2 (HOYA)                | 1.74400 | 44.9 | Weak meniscus ahead of the stop        |
| L9          | M-BACD5N (HOYA), nearest   | 1.58673 | 61.3 | Aspherical focusing element            |
| L12, L16    | E-CF6 (HOYA)               | 1.51742 | 52.2 | Crowns of the cemented groups          |
| L13         | M-LAC130 (HOYA), nearest   | 1.69090 | 53.3 | Aspherical negative of the stabilizer  |
| L14         | E-FD10 (HOYA)              | 1.72825 | 28.3 | Flint of the stabilizer                |
| L15         | M-BACD12 (HOYA), nearest   | 1.58123 | 59.5 | Aspherical positive at the front of G4 |
| L18         | E-FL5 (HOYA)               | 1.58144 | 40.9 | Last positive element                  |

Every matched name reproduces the printed nd to five decimals and νd within 0.05, so the chromatic trace uses the catalog dispersion curves for fifteen elements. The three aspherical elements (L9, L13, L15) print indices 0.0019–0.0026 below HOYA's moulding glasses M-BACD5N (1.58913 / 61.25), M-LAC130 (1.69350 / 53.20) and M-BACD12 (1.58313 / 59.46) with Abbe numbers within 0.1, the pattern of indices quoted after moulding. They take those catalog dispersion curves while the trace keeps the printed nd; the pairs recur unchanged in Examples 1 and 3. The patent does not say which elements are ED. The two νd 81.6 elements are tagged as inferred ED positions because no other glass in the example is a low-dispersion crown.

Colour is corrected group by group: the ED/flint doublet in G1, the flint L6 inside G2, the ED/flint triplet in G3 and the negative achromat that stabilizes. The patent's aberration plots use 546.1 nm as the reference line and add 656.3, 587.6, 486.1 and 435.8 nm (¶0195).

## Focus Mechanism

Only L9 moves. It travels toward the image (¶0147), widening D16 and narrowing D18 by the same amount; G1, G2, L8 with the stop, the triplet, the stabilizing doublet, G4 and the image plane stay fixed. ¶0202 prints the travel at an object distance of 0.5 m. The close rows are the printed infinity gaps with that travel applied:

| Station | Travel, mm | D16 ∞ → 0.5 m, mm | D18 ∞ → 0.5 m, mm | Object to image, mm | Magnification |
| ------- | ---------: | ----------------: | ----------------: | ------------------: | ------------: |
| Wide    |      0.691 |     6.812 → 7.503 |     2.288 → 1.597 |               499.4 |        0.046× |
| Mid     |      1.750 |     4.301 → 6.051 |     4.799 → 3.049 |               500.2 |        0.155× |
| Tele    |      6.822 |     1.200 → 8.022 |     7.900 → 1.078 |               500.2 |        0.281× |

The traced close rows focus within 0.6 mm of 500 mm measured from the image plane, so the patent's 0.5 m is an object-to-image distance; from the front vertex the object is 370, 330 and 306 mm away. This is also Samsung's 0.5 m minimum focus distance, and the tele magnification agrees with the published 1:3.6. At tele L9 uses almost all of D18, leaving 1.08 mm to the triplet. ¶0192 and ¶0205 write the near distance as "0.5mm", a typographical slip for the 0.5 m that ¶0202 and ¶0207 give.

The viewer interpolates the gaps linearly between the infinity and 0.5 m rows; positions in between are not printed. The patent ties single-element focusing to contrast-detection autofocus, which needs a light group that can move back and forth in very small steps (¶0009–0011); Samsung drives it with a voice-coil motor.

## Aspherical Surfaces

All three conic constants are zero, so each asphere is a sphere plus even polynomial terms under either conic convention. The coefficients are as printed in ¶0201:

| Surface | Element   | R, mm   | A4        | A6         | A8          | A10 |
| ------- | --------- | ------- | --------- | ---------- | ----------- | --- |
| 18A     | L9 rear   | −49.701 | 8.6468e-6 | −6.0751e-9 | 0           | 0   |
| 23A     | L13 front | −77.659 | 1.1980e-5 | −3.0461e-8 | 0           | 0   |
| 27A     | L15 rear  | −58.820 | 1.4007e-5 | 1.2894e-8  | −9.8111e-10 | 0   |

Each positive A4 flattens its surface toward the rim. On the convex rear faces of L9 and L15 that weakens the positive power at the edge, and on the concave front of L13 it weakens the negative power, as ¶0134, ¶0136 and ¶0138 describe. The departure from the base sphere at the model's clear radius is 0.043 mm on 18A (8.5 mm), 0.028 mm on 23A (7.2 mm) and 0.059 mm on 27A (9.5 mm). On L9 the asphere holds spherical aberration steady as the element moves; on L13 it controls the coma that decentring would otherwise add; on L15 it acts on the off-axis bundles entering G4.

## Image Stabilization

The cemented doublet L13–L14 (f = −28.57 mm) shifts perpendicular to the axis to move the image opposite to the shake (¶0148). Condition (3) bounds its power: above 0.25 the shift needed at tele becomes too large, and below 0.05 the coma change during stabilization becomes hard to correct (¶0086). Example 2 gives |f3c|/ft = 0.147. FIGS. 16, 19 and 22 plot the transverse aberrations for a 0.3° correction at 546.1 nm (¶0194, ¶0206). The model keeps the doublet centred.

## Conditional Expressions

Table 1 prints Example 2's values for the eight conditions, with ft = 194.15 mm. The ranges are the limits the description states (¶0067–0068, ¶0084–0086, ¶0093–0094, ¶0131). The model's group focal lengths reproduce the printed values:

| Condition | Quantity   | Range     | Table 1 | Model |
| --------- | ---------- | --------- | ------: | ----: |
| (1)       | f3a/ft     | 0.1–0.3   |   0.190 | 0.190 |
| (2)       | f3b/ft     | 0.15–0.35 |   0.249 | 0.247 |
| (3)       | \|f3c\|/ft | 0.05–0.25 |   0.147 | 0.147 |
| (4)       | fRa/ft     | 0.05–0.3  |   0.185 | 0.185 |
| (5)       | fRb/ft     | 0.1–0.35  |   0.227 | 0.227 |
| (6)       | f1/ft      | 0.25–0.65 |   0.434 | 0.434 |
| (7)       | \|f2\|/ft  | 0.04–0.1  |   0.069 | 0.068 |
| (8)       | \|f3f\|/ft | 0.5–5.0   |   1.524 | 1.532 |

f3a, f3b, f3c and f3f are the focal lengths of L9, the triplet, the stabilizing doublet and L8; fRa is G3 at tele and fRb is G4. The differences in (2), (7) and (8) are in the third decimal; the patent does not say how its values were computed.

## Model Scope and Limitations

The traced focal lengths are 18.50, 68.41 and 193.87 mm against the printed 18.50, 68.50 and 194.15 mm, and the infinity image lies within 0.03 mm of the printed image plane at each station. The iris at each station is sized from the printed F-number (F3.55, 5.81, 6.50); the patent prints no stop diameter.

The patent prints no clear apertures. All semi-diameters are estimates from FIG. 3, checked by ray trace, and they vignette the wide-open corners heavily at the wide end: about 43 % of the wide-open beam reaches the corner of the APS-C frame at wide, 82 % at the middle setting and 60 % at tele. At wide the largest share is cut by L4's deeply curved rear face, whose cap ends at 9.4 mm in the flat land FIG. 3 draws, and the rest by the rims behind the stop. FIG. 3 also draws the front element at the model's 52.2 mm clear diameter, small beside the lens's 67 mm filter thread. The traced field still reaches the corner of the format at all three stations. At 0.5 m at tele the beam that fills the wide-open stop spreads to 9.9–10.0 mm across L9 and the front of the triplet, beyond their 8.5 mm rims, which FIG. 3 draws at about that height at all three focal lengths; with the object 500 mm from the image about 71 % of it reaches the centre of the frame. The patent prints no close-focus F-number to compare.

Between the three printed focal lengths the gaps are interpolated linearly. That is not Samsung's zoom cam, and it leaves the intermediate focal lengths well out of focus at infinity: the paraxial image falls up to 5.6 mm ahead of the sensor near 36 mm and up to 10.7 mm behind it near 141 mm. Image quality is meaningful only at the three printed focal lengths. The stabilizing shift is not simulated. L9, L13 and L15 use estimated dispersion.

## Sources

1. [EP 2 469 319 A2](https://patents.google.com/patent/EP2469319A2/en): Example 2 tables (¶0199–0202, pp. 16–17), FIG. 3, FIGS. 14–22, Table 1, and the descriptions of zoom lens 101 (¶0122–0151).
2. [US 2012/0154913 A1](https://patents.google.com/patent/US20120154913A1/en): US family member; its Example 2 prints η15 = 1.53123.
3. [Photozone, Samsung NX 18-200mm f/3.5-6.3 ED OIS review](https://photozone.de/samsungnx/748_samsungnx18200f3563): 18 elements in 13 groups with 3 aspherical and 2 ED elements, 0.50 m minimum focus (1:3.6), 67 mm filter, 7 aperture blades, OIS.
4. [Photography Bay, 2011 Samsung NX lens line-up (21 February 2011)](https://photographybay.com/2011/02/21/2011-samsung-nx-series-lens-line-up-unveiled): announcement date, May 2011 availability, F22 minimum aperture, voice-coil autofocus motor and OIS.
