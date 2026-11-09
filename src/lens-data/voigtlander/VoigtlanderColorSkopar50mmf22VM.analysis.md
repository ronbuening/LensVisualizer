## Patent Reference and Design Identification

**Patent:** JP 2025-187904 A (published application)  
**Application Number:** JP 2024-097017  
**Filed:** 2024-06-14  
**Published:** 2025-12-25  
**Inventor:** Tatsuya Moriyama  
**Applicant:** Cosina Co., Ltd.  
**Title:** 光学レンズ系 (Optical lens system)  
**Example details:** 第1実施形態; Tables 1–3 (¶0030–¶0042) and Fig. 1; all surfaces spherical (¶0040); no scaling.

The Voigtländer Color-Skopar 50mm F2.2 VM is a compact rangefinder lens for the VM (Leica M) bayonet, released by Cosina on 17 July 2024. Cosina lists 7 elements in 6 groups, three of them anomalous partial dispersion glass, a 47.3° angle of view, f/2.2 to f/16 with 10 blades, a 0.5 m minimum focus with rangefinder coupling from infinity to 0.7 m, a 39 mm filter, a length of 30.0 mm and a weight of 135 g.

Embodiment 1 is a probable match to that lens, not a confirmed factory prescription. The evidence:

1. **Construction.** Seven spherical menisci in six groups with one cemented pair behind the stop. Of the patent's three embodiments only this one has the 7/6 count: Embodiment 2 (8/7) adds a third front positive singlet, and Embodiment 3 (8/6) replaces the rear positive singlet with a cemented pair.
2. **Special glass.** Cosina's section colours the second, third and sixth elements as anomalous partial dispersion glass. The patent's glasses at those positions match HOYA FCD1, HOYA FD225 and OHARA S-NBM51, and the patent's own ΔPgF condition (¶0010, ¶0033) points to L2.
3. **Focal length, aperture and field.** f = 48.455 mm, F2.254 and 2ω = 47.59°, against the marketed 50 mm, f/2.2 and 47.3°.
4. **Focus.** The whole lens moves for focus (¶0023), and the printed close state lies 0.70 m from object to image, the limit of the rangefinder coupling.
5. **Timing.** The application was filed on 14 June 2024 by Cosina, in the month the lens was announced and a month before its release.

Cosina's section agrees with Fig. 1 in element count, grouping, the cemented pair and the direction of every meniscus. Its air spacings do not follow Embodiment 1, however. Scaled to the same S1–S14 length, the drawing gives about 7.4 mm for the space around the stop (patent 10.59 mm), about 6.6 mm behind the cemented pair (3.02 mm) and about 5.4 mm ahead of the last element (7.46 mm). Element thicknesses agree within about 0.4 mm. Either the production spacing was revised or the drawing is schematic, so the model represents the design family rather than a verified production formula.

Element names follow the patent, which calls the cemented L4/L5 pair "L6"; the two rear singlets are therefore L7 and L8, and no single element is named L6.

## Optical Architecture

Two positive groups sit either side of the stop (¶0026). The first group G1 is three air-spaced menisci, positive L1, positive L2 and negative L3, with no cemented lens, which keeps the front small (¶0008). The second group G2 is the cemented pair L4/L5 convex to the object, the weak positive meniscus L7 and the thick negative meniscus L8, both concave to the object. Every element is a meniscus and every surface is spherical. There is no cover plate.

The patent's central device is the air space AL1 between L2 and L3 (surfaces 4 and 5). It has the shape of a positive meniscus convex to the object, so it acts as a negative lens and turns G1 into a convex-convex-concave-concave Gauss front with a strong telephoto bias (¶0009, ¶0028). Behind the stop, the cemented pair is the strongest positive component, and the negative last lens shortens the back focus (¶0029). Focusing by moving the whole lens means no focusing space is needed between the groups (¶0017).

Table 1 gives f1 = 132.301 mm and f2 = 57.996 mm; the model gives 132.16 and 57.997 mm. The surfaces sum to 56.48 mm from S1 to the image at f = 48.455 mm, with a back focus of 13.99 mm.

| Condition | Range | Embodiment 1 | Model |
|---|---|---|---|
| Gr1P-ΔPgF (largest ΔPgF of a G1 positive lens) | > 0.015 | 0.0374 | +0.0375 (L2, FCD1 catalog) |
| Gr1P-nd | > 1.90 | 2.00100 | 2.001 (L1) |
| f / f21 | > 1.15 | 1.18 | 1.18 (f21 = 41.06 mm) |
| Gr2P-νd | 28.40 to 44.30 | 44.27 | 44.27 (L7) |
| Gr2P-nd | 1.610 to 1.790 | 1.61340 | 1.61339 (L7) |
| L-H / L-BF | > 3.2 | 4.04 | 4.04 |
| L-H / f | < 1.30 | 1.17 | 1.17 |

The Gr2P-nd row in Table 1 prints 1.61340, one unit in the fifth decimal above Table 2's 1.61339 for the same element; the data file follows Table 2.

## Element-by-Element Analysis

Focal lengths below are for each element alone in air.

### L1 — Positive Meniscus

nd = 2.00100, νd = 29.13. Glass: TAFD55 (HOYA) equivalent. f = +57.00 mm.

The front element, convex to the object (R1 = 28.618, R2 = 54.125 mm). Its index of 2.001 meets the patent's Gr1P-nd > 1.90 condition; ¶0011 and ¶0034 credit a high-index positive lens here with good correction of spherical aberration and coma in a short lens. A high index gives the same power with shallower curves.

### L2 — Positive Meniscus

nd = 1.49700, νd = 81.61. Glass: FCD1 (HOYA) equivalent; anomalous partial dispersion. f = +54.29 mm.

The second positive meniscus, 0.15 mm behind L1 and the thickest element of G1 (4.20 mm). It is the front group's low-dispersion crown. The patent requires the largest ΔPgF among G1's positive lenses to exceed 0.015 for chromatic correction (¶0010) and prints 0.0374 for this embodiment (¶0033); FCD1's catalog θgF gives +0.0375 on the patent's normal line, and L1's TAFD55 only +0.004, so the condition concerns L2. Cosina marks this position as anomalous partial dispersion glass.

### L3 — Negative Meniscus

nd = 1.80808, νd = 22.76. Glass: FD225 (HOYA) equivalent; anomalous partial dispersion. f = −28.53 mm.

The only negative element of G1: almost flat in front (R5 = 367.195 mm) and deeply concave toward the stop (R6 = 21.671 mm). Its front face and L2's rear face (R4 = 85.888 mm) bound the 0.64 mm air lens AL1 described above. The high-dispersion glass balances the color of the two positive menisci ahead of it, and its θgF lies well above the normal line. Cosina marks this position as anomalous partial dispersion glass.

### L4 + L5 — Cemented Pair L6

**L4:** nd = 1.75520, νd = 27.53. Glass: E-FD4 (HOYA) equivalent. f = −21.46 mm.

**L5:** nd = 1.90365, νd = 31.31. Glass: TAFD25 (HOYA) equivalent. f = +13.93 mm.

A thin negative meniscus (0.90 mm) cemented to a thick positive meniscus (5.47 mm), both convex to the object, 6.31 mm behind the stop. The cemented surface (R9 = 12.289 mm) is the most strongly curved in the lens, and the rear face is nearly flat (R10 = 406.929 mm). Together they form a positive doublet of f21 = 41.06 mm, the strongest component of G2. The condition f/f21 > 1.15 (¶0012, ¶0035) keeps this power high, which ¶0029 ties to the large reduction in length. The two flints differ by 0.15 in index but only 3.8 in νd, so the interface probably serves monochromatic correction more than color.

### L7 — Positive Meniscus

nd = 1.61339, νd = 44.27. Glass: S-NBM51 (OHARA) equivalent; anomalous partial dispersion. f = +178.21 mm.

A weak positive meniscus concave to the object, 3.02 mm behind the cemented pair (Table 1: f22 = 178.202 mm). Its glass meets the patent's condition for a positive lens of G2, 28.40 < νd < 44.30 and 1.610 < nd < 1.790, which ¶0013 gives for chromatic correction. S-NBM51's θgF lies slightly below the normal line. Cosina marks this position as anomalous partial dispersion glass.

### L8 — Negative Meniscus

nd = 1.54814, νd = 45.83. Glass: E-FEL1 (HOYA) equivalent. f = −64.18 mm.

The rear element: a thick meniscus (3.30 mm) concave to the object on both faces (R13 = −11.604, R14 = −19.059 mm), 7.46 mm behind L7 and the widest element in the model. Fig. 1 draws its front face as the concave curve followed by a flat land out to a square outer edge, and the model draws it the same way. Table 1 gives f23 = −64.175 mm. Putting a negative lens last shortens the back focus and so the total length (¶0029).

## Glass Identification and Selection

The patent prints nd and νd at the d line (587.56 nm) and plots the C, d and g lines (¶0021). Each pair below matches a catalog glass to the printed precision; the supplier Cosina uses is not stated. θgF is the catalog value, and ΔPgF is measured from the patent's own normal line, PgF − 0.64833 + 0.00180·νd (¶0010).

| Element | nd | νd | Catalog equivalent | θgF | ΔPgF | Role |
|---|---:|---:|---|---:|---:|---|
| L1 | 2.00100 | 29.13 | TAFD55 (HOYA) | 0.5995 | +0.0036 | High-index front positive |
| L2 | 1.49700 | 81.61 | FCD1 (HOYA) | 0.5389 | +0.0375 | Low-dispersion crown, APD (Cosina) |
| L3 | 1.80808 | 22.76 | FD225 (HOYA) | 0.6287 | +0.0213 | Dense flint, APD (Cosina) |
| L4 | 1.75520 | 27.53 | E-FD4 (HOYA) | 0.6091 | +0.0103 | Flint of the cemented pair |
| L5 | 1.90365 | 31.31 | TAFD25 (HOYA) | 0.5948 | +0.0028 | High-index positive of the cemented pair |
| L7 | 1.61339 | 44.27 | S-NBM51 (OHARA) | 0.5634 | −0.0052 | Rear positive, APD (Cosina) |
| L8 | 1.54814 | 45.83 | E-FEL1 (HOYA) | 0.5700 | +0.0042 | Rear negative |

The front group pairs the FCD1-type crown of L2 with the FD225-type dense flint of L3: both lie well above the normal line, and the patent's ΔPgF condition (¶0010) applies to the crown. Behind the stop, L7 is the positive lens that meets the Gr2P conditions (¶0013); its S-NBM51-type glass lies slightly below the normal line. These three are the positions Cosina colours as anomalous partial dispersion glass. The other four are high-index or flint glasses whose θgF lies nearer the line.

## Focus Mechanism

Unit focus: the whole lens moves toward the object and only the back focus D14 changes (¶0017, ¶0023). Table 3 prints two states.

| | Infinity | Shortest distance (Table 3) |
|---|---:|---:|
| D0, object to S1 | ∞ | 642.00 mm |
| D14 | 13.99 mm | 17.96 mm |
| Object to image | ∞ | 702.45 mm (sum) |
| Magnification | 0 | −0.082× (computed) |

The extension is 3.97 mm. The printed close state, 0.70 m from object to image, is the 0.7 m limit of the rangefinder coupling. Cosina's 0.5 m minimum focus lies beyond the coupled range and is not printed, so the model stops at the printed state. Positions between the two printed states are interpolated by the app and are not a published helicoid law.

Both printed back-focus values are kept. At infinity, D14 = 13.99 mm lies 0.009 mm behind the paraxial focus (13.981 mm). At the near state, an object 642.00 mm ahead of S1 focuses 17.947 mm behind S14, against the printed 17.96 mm. The surfaces sum to 56.48 mm, against Table 1's L-H = 56.482 mm and L-BF = 13.994 mm. These differences are rounding in the printed table.

## Model Scope and Limitations

- **Scale and first-order values.** The prescription is used at the patent's own scale. The model's EFL is 48.447 mm against the printed 48.455 mm (−0.02 %), a difference from the table's rounding.
- **Stop.** Table 2 places the stop as a virtual surface, STO, 4.28 mm behind S6 and 6.31 mm ahead of S8 (¶0024). That puts it 13.45 mm behind S1, a sum rather than a printed figure. The stop diameter is not printed; the iris radius, 8.11 mm, is derived from F2.254.
- **Aperture scale.** Cosina gives f/2.2 to f/16 with a 10-blade diaphragm. The model opens at the design F2.254 and stops down through f/16.
- **Semi-diameters.** No clear aperture is printed. The rims are estimated from Fig. 1: 12.0 mm at L1, 8.7 mm on the cemented pair, 8.75 mm on L7 and 12.25 mm at the rear of L8. Fig. 1 draws the cemented pair slightly smaller (L4 8.6 mm, L5 8.3 mm); smaller rims there would cut more of the wide-open beam at mid-field. Where Fig. 1 draws a curved face ending in a flat land with a square outer edge (the rear of L3, the front of L8) or a square-cut element (L1), the model draws a flat land out to the element's outer rim; the lands pass no light. At full aperture the front rims cut part of the edge-of-field beam, so the model shows strong corner vignetting wide open.
- **Field.** The 23.797° half-field reaches about 21.64 mm image height, the corner of the 36 × 24 mm frame.
- **Production spacing.** As described above, Cosina's section draws some air spaces differently from Embodiment 1. The model follows the patent.

## Sources

- JP 2025-187904 A, Cosina Co., Ltd., 光学レンズ系 (Optical lens system), published 2025-12-25: [Google Patents](https://patents.google.com/patent/JP2025187904A/en); the tables and figures were read from the J-PlatPat publication.
- Cosina, [Voigtländer COLOR-SKOPAR 50mm F2.2 VM product page](https://www.cosina.co.jp/voigtlander/vm-mount/color-skopar-50mm-f2-2/): construction, anomalous partial dispersion elements, angle of view, aperture range, blade count, minimum focus and rangefinder coupling range, release date.
- Cosina, [lens construction diagram](https://www.cosina.co.jp/wp/wp-content/uploads/2024/06/cc-VM-50_22-LDyutr.svg).
- Cosina, [instruction manual (Japanese)](https://www.cosina.co.jp/wp/wp-content/uploads/2024/06/VM-50_22-JPN-V1_1.pdf).
