# Sony FE 85mm f/1.4 GM — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** WO 2017/130571 A1
**Application Number:** PCT/JP2016/086059
**Priority:** JP 2016-012401, filed 26 January 2016
**Filed:** 5 December 2016
**Published:** 3 August 2017
**Inventors:** Masaki Maruyama, Hiroyuki Matsumoto
**Applicant:** Sony Corporation
**Title:** Image Pickup Lens and Image Pickup Device (撮像レンズおよび撮像装置)
**Classification:** G02B 13/00, G02B 13/18
**Embodiment analyzed:** Example 2 (数値実施例2; Tables 4–6, Fig. 3)

The international application describes a large-aperture prime for interchangeable-lens digital still and mirrorless cameras (¶0001). It discloses nine numerical examples of a three-group lens in which a positive first group G1 and a third group G3 stay fixed relative to the image plane while a positive second group G2 moves toward the object for close focus (¶0007, ¶0015–¶0016). Example 2 is published in Table 4 (lens data, PDF p. 23, printed p. 21), Table 5 (asphere, same page), and Table 6 (system values and focus spacings, PDF p. 24, printed p. 22), with its section drawing in Fig. 3 and aberration curves in Fig. 4 (drawing sheet 2/10, PDF p. 58).

Example 2 is identified with the first-generation Sony FE 85mm F1.4 GM (SEL85F14GM) by convergent evidence:

1. **Construction.** Table 4 resolves to 11 elements in 8 air-separated groups; Sony lists 8 groups / 11 elements.
2. **Special elements.** The prescription carries exactly one aspherical surface (surface 13, the front of L7) and three low-dispersion crowns (L2, νd = 81.61; L3 and L8, νd = 68.62). Sony's launch release describes one XA (extreme aspherical) element and three ED elements, and Sony's published construction diagram marks the seventh element as XA and the second, third and eighth as ED, the same positions.
3. **Focal length and aperture.** Table 6 gives f = 86.85 mm and Fno = 1.45; the product is marketed as 85 mm F1.4.
4. **Field.** Table 6 gives ω = 13.99°, and the aberration plots use an image height Y = 21.633 mm, the half-diagonal of the 36 × 24 mm format. Sony lists a 29° angle of view on 35 mm full frame.
5. **Close focus.** The patent's close state is labelled 0.85 m with β = 0.118. Sony specifies AF minimum focus 0.85 m, MF minimum focus 0.8 m, and 0.12× maximum magnification.
6. **Focus mechanism.** In Example 2 a four-element focus group (two cemented doublets) moves between a fixed front group and a fixed rear group. Sony's release describes a ring-drive SSM that moves a large, heavy focus group.
7. **Timing and assignee.** The Japanese priority application was filed on 26 January 2016; Sony announced the lens on 3 February 2016 for March 2016 availability. The applicant is Sony Corporation.

Two sibling examples come close. Example 5 (Tables 13–15) has f = 86.08 mm, F/1.44 and β = 0.118, but only 8 elements in 7 groups. Example 6 (Tables 16–18) shares the 8-group / 11-element construction, F/1.45 and a single asphere, but has f = 82.45 mm, β = 0.115, and only two crowns with νd above 65; Example 2 has three, matching Sony's count of ED elements. No Sony document names this application or its Example 2 as the production prescription, so the identification is a strong correlation rather than a manufacturer confirmation. The MF limit of 0.8 m does not correspond to any published patent state. The 2024 successor, the FE 85mm F1.4 GM II (SEL85F14GM2), is a different design of 11 groups / 14 elements with two XA and two ED elements according to Sony; it is not described by this application.

## Optical Architecture

Example 2 is a positive–positive–negative three-group inner-focus prime. Its infinity-state group focal lengths, each computed standalone in air, are:

- **G1** (L1–L4, fixed): f1 = +156.26 mm, or 1.80 f.
- **G2** (L5–L8, focus): f2 = +79.47 mm, or 0.915 f.
- **G3** (L9–L11, fixed): f3 = −204.41 mm, or −2.35 f.

The aperture stop sits in the air space between G1 and G2 (¶0071), so it stays fixed while the focus group moves toward it for close focus. The patent states that G3 of this example has negative refractive power (¶0087).

The front group is three positive menisci convex to the object followed by a negative meniscus (L4) whose strongly curved rear surface (R = 30.425 mm) faces the stop. G2 opens with a cemented doublet whose first surface is concave toward the stop (R = −57.485 mm). The two concave surfaces facing each other across the stop space, with collecting menisci on the object side, follow the pattern of the double-Gauss family. This classification is an interpretation of the prescription, not a statement in the patent. The departures from a classical double-Gauss are substantial:

- The rear half is a movable, net-positive focus unit whose power alone exceeds that of the whole system (f2 = 0.915 f).
- One surface of that unit is a strongly figured asphere.
- A fixed negative group G3 closes the system.

The distinguishing choice is the power split. G2 is the strongest group, and G1 is comparatively weak at 1.80 f. G1 converges the axial beam before it reaches the moving group: the paraxial marginal ray of the F/1.45 bundle falls from 29.95 mm at surface 1 to 15.85 mm at surface 10. The 27.69 mm-long focus group therefore works at about half the front-element beam height. G3 sits where the chief ray dominates. At L11 the paraxial chief-ray height for the full 21.633 mm image height is 2.57 times the marginal-ray height at surface 19, which gives this group strong leverage on field-dependent aberrations.

Track length from surface 1 to the paraxial image is 124.165 mm (TL/EFL = 1.430), and the computed back focal distance in air is 16.861 mm. The design is therefore neither a telephoto (TL/EFL < 1) nor a retrofocus (BFD > EFL). Table 4 publishes no back distance. Fig. 3 draws a filter or cover plate (FL) ahead of the image plane but tabulates no data for it, so the modeled image plane is the paraxial infinity focus in air. The paraxial entrance pupil lies 46.80 mm behind surface 1 and the exit pupil 50.21 mm ahead of surface 20.

## Element-by-Element Analysis

The data file restores five of the patent's three-decimal indices to five decimals. These are the catalog nd values of coordinate-exact HOYA glasses, and each rounds to the printed value: 1.593 → 1.59282, 1.620 → 1.62004, 1.821 → 1.82115, 1.755 → 1.75520, and 1.569 → 1.56883. With the restored indices the paraxial EFL is 86.848 mm against the published 86.85 mm. With the printed indices it is 86.784 mm, within the uncertainty of three-decimal index rounding. Focal lengths below are standalone thick-lens values in air. Glass names are inferred from catalog coordinates; the patent names no supplier.

### G1 — Fixed Front Group

#### L1 — Positive Meniscus, convex to object

nd = 1.618, νd = 63.40. Glass: PCD4 (HOYA) — dense phosphate crown class, inferred. f = +139.25 mm.

L1 is the first of three positive menisci that share the convergence of the full-aperture beam. It meets the largest marginal-ray height in the system (29.95 mm, paraxial, at F/1.45). Its front surface makes the largest positive (undercorrecting) third-order spherical-aberration contribution in G1 (SI = +1.246). The phosphate crown combines moderate index with low dispersion; the catalog partial dispersion of PCD4 lies close to the normal line, and the data file does not mark it as an anomalous-dispersion glass.

#### L2 — Positive Meniscus, convex to object

nd = 1.497, νd = 81.61. Glass: FCD1 (HOYA) — fluorophosphate ED class, inferred. f = +172.05 mm.

L2 is the lowest-dispersion element in the prescription. Its coordinate is also matched by SCHOTT N-PK52A and CDGM H-FK61, so only the glass class is secure. The catalog ΔPgF of FCD1 is +0.0323 (catalog-derived, under the HOYA inference). Its primary axial-colour contribution (CI = +0.056) is about half that of the stronger L1 (+0.102).

#### L3 — Positive Meniscus, convex to object

nd = 1.59282, νd = 68.62. Glass: FCD515 (HOYA) — ED phosphate crown class, inferred. f = +221.31 mm.

L3 is the weakest of the three front collectors. It uses the same glass coordinate as L8 in the focus group. No non-HOYA catalog glass is coordinate-exact for nd = 1.593 / νd = 68.62. Within HOYA, FCD505 has the same catalog nd, νd and line indices as FCD515, so the label choice between the two has no numerical effect. FCD515 carries a catalog ΔPgF of +0.0157.

#### L4 — Negative Meniscus, concave to image

nd = 1.62004, νd = 36.30. Glass: E-F2 (HOYA) — F2-type flint class, inferred. f = −66.09 mm.

L4 closes G1 as the negative lens the claims require as its rearmost element (¶0018, claim 1). Its rear surface (R = 30.425 mm) faces the stop across a 10.9 mm air space. Its flint glass offsets most of the primary axial colour generated by the three crowns ahead of it. In the Abbe-linear Seidel accounting, L1–L3 contribute CI = +0.207 and L4 contributes −0.193, leaving G1 with +0.014.

### G2 — Focus Group

G2 consists of two cemented doublets, G2a (L5 + L6) and G2b (L7 + L8). They move together as a rigid unit 27.69 mm long from vertex to vertex.

#### L5 — Biconcave Negative (front of G2a)

nd = 1.62004, νd = 36.30. Glass: E-F2 (HOYA) — F2-type flint class, inferred. f = −31.00 mm.

The object-side surface of L5 is the first surface of G2 and is concave toward the object, the form ¶0049 prefers. Its radius sets condition (8), r_2a/f = −0.662. The patent assigns this surface a specific role: the negative spherical aberration and coma it generates cancel those produced by the positive power of G2 as a whole (¶0051). The third-order sums of the model are consistent with that description:

- Spherical aberration: surface 10 contributes SI = −0.637. The rest of G2 contributes +0.313, so G2 as a whole is net −0.324.
- Coma: surface 10 contributes SII = +0.363, which nearly cancels the −0.373 from the rest of G2.

These are Seidel coefficients of the implemented model in Welford's sign convention. They are not patent values.

#### L6 — Positive Meniscus, convex to object (rear of G2a)

nd = 2.001, νd = 29.13. Glass: TAFD55 (HOYA) — nd 2.00 lanthanum dense flint class, inferred. f = +31.80 mm.

L6 almost exactly cancels L5, so G2a has a standalone focal length of about −1000 mm, effectively afocal at system scale. G2a is chromatically unusual. The positive member has the lower Abbe number (29.13 against 36.30), so the doublet does not achromatize itself. It contributes CI = +0.044, the largest primary axial-colour term of any subgroup.

#### L7 — Negative Meniscus, convex to object, aspherical front (front of G2b)

nd = 1.82115, νd = 24.06. Glass: M-FDS910 (HOYA) — precision-moulding dense flint, inferred. f = −96.88 mm.

L7 carries the only aspherical surface (13A); the asphere is analysed separately below. On axis L7 is 1.5 mm thick. As a meniscus it thickens toward the rim, to 4.00 mm at the modeled semi-diameter of 17.3 mm, of which 0.50 mm comes from the aspherical departure. Because 13A is the only aspherical surface in the prescription, L7 is the only candidate for Sony's single XA element, and Sony's construction diagram marks the element in this position as XA. Its glass coordinate coincides with a HOYA glass sold for precision moulding, which is consistent with a moulded asphere; the glass identity itself remains an inference. The data file stores the catalog line indices of M-FDS910 (nC = 1.81140, nF = 1.845532, ng = 1.86682), which give θgF = 0.6237 and ΔPgF = +0.0204 against the normal line. These are catalog values under the glass inference.

#### L8 — Biconvex Positive (rear of G2b)

nd = 1.59282, νd = 68.62. Glass: FCD515 (HOYA) — ED phosphate crown class, inferred. f = +43.90 mm.

L8 is the thickest element in G2 (14.955 mm) and provides the focus group's positive power. G2b has a standalone focal length of +74.22 mm, giving condition (3), f2b/f2 = 0.934. G2b is a conventionally oriented achromat, with a low-dispersion positive element cemented to a dense-flint negative. It contributes CI = −0.027, partly offsetting G2a. The rear surface of L8 (surface 15) makes one of the two largest positive spherical-aberration terms in the lens (SI = +1.245, matched only by surface 1 at +1.246). In third order the asphere on surface 13A largely offsets it (see Aspherical Surfaces).

### G3 — Fixed Rear Group

#### L9 — Biconvex Positive (front of G3a)

nd = 2.001, νd = 29.13. Glass: TAFD55 (HOYA) — nd 2.00 lanthanum dense flint class, inferred. f = +42.07 mm.

L9 is a 15.0 mm-thick high-index biconvex element at the front of the fixed rear group. Cemented with L10, it forms G3a, a weakly positive doublet (f3a = +288.86 mm).

#### L10 — Biconcave Negative (rear of G3a)

nd = 1.7552, νd = 27.53. Glass: E-FD4 (HOYA) — dense flint class, inferred. f = −47.04 mm.

L10 and L9 have similar Abbe numbers (27.53 and 29.13), so G3a is not a classical achromat. Its net primary axial colour is small (CI = −0.009). Its lateral-colour term (CII = +0.026) is of the same order as those of G1 and G2a.

#### L11 — Negative Meniscus, concave to object (G3b)

nd = 1.56883, νd = 56.04. Glass: BAC4 (HOYA) — barium crown class, inferred. f = −112.37 mm.

L11 is the single negative lens of G3b. Its shape factor (r1 + r2)/(r1 − r2) = −1.471 is condition (2), which the patent ties to three effects (¶0028):

- preventing an extreme upward deflection of off-axis bundles at the last surface;
- containing the pincushion distortion typical of systems ending in a negative group;
- avoiding strong symmetric ghosts between the last lens and sensor-side plane-parallel plates.

L11 contributes the largest negative Petzval term of any group (−5.69 × 10⁻³ mm⁻¹), offsetting much of the positive Petzval sum of G2b. Its position, where the chief ray is about 2.6 times higher than the marginal ray, weights it toward field-dependent correction.

## Glass Identification

The patent publishes nd to three decimals and νd to two. It names no supplier. A comparison against the HOYA, OHARA, SCHOTT, HIKARI, SUMITA and CDGM catalogs finds HOYA glasses coordinate-exact for all eight distinct coordinates. Five coordinates (1.618 / 63.40, 1.593 / 68.62, 1.620 / 36.30, 2.001 / 29.13 and 1.821 / 24.06) have no coordinate-exact match outside HOYA, where coordinate-exact means a catalog nd that rounds to the printed value and |Δνd| ≤ 0.005. This convergence is evidence for a single-vendor palette, not proof of supplier or melt. The labels below are therefore inferences, with class designations where other vendors tie.

| Glass (inferred) | nd (data) | νd | ΔPgF | Elements | Role |
|---|---|---|---|---|---|
| PCD4 (HOYA) | 1.618 | 63.40 | — | L1 | Dense phosphate crown; front collector |
| FCD1 (HOYA) | 1.497 | 81.61 | +0.0323 | L2 | Fluorophosphate ED crown; front collector |
| FCD515 (HOYA) | 1.59282 | 68.62 | +0.0157 | L3, L8 | ED phosphate crown; front collector and focus-group positive |
| E-F2 (HOYA) | 1.62004 | 36.30 | — | L4, L5 | F2-type flint; G1 negative and G2a negative |
| TAFD55 (HOYA) | 2.001 | 29.13 | — | L6, L9 | nd 2.00 lanthanum dense flint; G2a and G3a positives |
| M-FDS910 (HOYA) | 1.82115 | 24.06 | +0.0204 | L7 | Precision-moulding dense flint; aspherical G2b negative |
| E-FD4 (HOYA) | 1.7552 | 27.53 | — | L10 | Dense flint; G3a negative |
| BAC4 (HOYA) | 1.56883 | 56.04 | — | L11 | Barium crown; rear negative (G3b) |

All ΔPgF values are catalog-derived against the normal line θgF = 0.6438 − 0.001682 νd, under the HOYA inference; the patent publishes no partial dispersions. The L7 value is computed from the HOYA M-FDS910 catalog line indices. A dash means the data file carries no partial-dispersion field for that element. Cross-vendor names that appear in the data file's glass strings are either coordinate-exact equivalents (N-PK52A and H-FK61 for L2, H-ZF6 for L10, H-BaK7 for L11) or, where marked "cf.", near neighbours that miss the printed νd by up to 0.011 (H-ZPK1A, K-PSKn2 and N-PSK53A for L1; J-LASFH16 and S-LAH99 for L6 and L9).

The palette has three features. First, the three low-dispersion crowns (L2, L3, L8) occupy the positions Sony's construction diagram marks as ED glass; the glass types remain inferred. Second, both nd 2.00 elements are positive, both sit in cemented doublets (L6 in G2a, L9 in G3a), and they are the two strongest positive elements in the lens (f = +31.80 mm and +42.07 mm). Third, every negative element except L11 is a flint (νd < 50); L11, the only negative crown, sits where the chief ray dominates.

## Focus Mechanism

Focusing is by inner focus. G2 (L5–L8) translates toward the object while G1, the stop, and G3 stay fixed relative to the image plane (¶0016, ¶0070). Only two spacings change (¶0090):

| Spacing | Infinity | 0.85 m state | Change |
|---|---|---|---|
| D9 (stop to surface 10) | 17.857 mm | 5.761 mm | −12.096 mm |
| D15 (surface 15 to surface 16) | 3.000 mm | 15.097 mm | +12.097 mm |

The 0.001 mm mismatch between the two changes is source rounding. G2 travels 12.10 mm as a rigid unit.

At infinity, each millimetre of G2 travel toward the object moves the paraxial image of an infinitely distant object 0.747 mm toward the lens; at the close state the ratio is 0.726. Because G2 approaches the stop and G1, the system focal length shortens from 86.85 mm at infinity to 76.83 mm at the close state (paraxial, model).

The patent labels the close state 0.85 m with β = 0.118 (Table 6) but does not define the reference plane of the distance. In the model, the published close spacings focus an object onto the fixed image plane at a total object-to-image distance of 857.6 mm, with |β| = 0.116. The two alternative readings also fail to reproduce the printed pair: measuring 0.85 m from the image plane or from surface 1 leaves the image defocused. Example 1 shows a residual in the same direction, which points to an unstated convention of the patent rather than a transcription error in Example 2. The data file keeps the published spacings and the 0.85 m label and does not reconstruct Sony's 0.8 m manual-focus limit.

The Fig. 4 close-focus plots are headed Fno = 1.81, against 1.45 at infinity. The stop alone does not account for this: a beam filling the F/1.45 stop opening at the close state would have a working F-number of 1.469. The focus group does. As G2 moves 12.10 mm toward the stop it meets the converging axial beam earlier and higher, and the ray from the stop edge would need 18.7–20.0 mm on surfaces 10–15. Fig. 3 draws the two doublets smaller than that, at about 17.9 mm (L5–L6) and 17.3 mm (L7–L8) against a stop opening of about 19.6 mm, and the data file takes its focus-group semi-diameters from the drawing. In the model the rim of surface 13A therefore limits the close-state axial beam to about 90% of the stop radius, and the real image-space working F-number is 1.64. The printed 1.81 would correspond to a clear aperture at the rear doublet some 12–16% smaller than the drawn rim; the model keeps the drawn rims and is not adjusted toward the printed value. At the aperture the model passes, d-line longitudinal spherical aberration grows from −0.142 mm at infinity to −0.378 mm at the close state, each measured from that state's own paraxial focus. The close-focus spherical-aberration curves in Fig. 4 likewise depart toward negative values, to about −0.25 mm at their F/1.81 margin, where the model gives −0.22 mm.

Sony's release attributes the drive to a ring-drive SSM that supplies the power to move a large, heavy focus group. The four-element, 27.69 mm-long G2 is consistent with that description.

## Aspherical Surfaces

Surface 13A, the air-facing front of L7, is the only aspherical surface. The patent defines it by ¶0067:

$$z(Y)=\frac{Y^2/R}{1+\sqrt{1-(1+K)\,Y^2/R^2}}+A_4Y^4+A_6Y^6+A_8Y^8$$

This is the standard (1 + K) conic form, so the patent's K enters the model unchanged. Coefficients from Table 5:

| Surface | R (mm) | K | A4 | A6 | A8 |
|---|---|---|---|---|---|
| 13A | 122.730 | 0 | `-4.98661E-06` | `-2.69634E-09` | `1.87534E-12` |

The patent describes this asphere as having positive refracting action for the axial bundle that weakens toward the periphery of the effective diameter (¶0035, ¶0088). The sag departure from the vertex sphere, quoted at three heights, shows how strong the figure is:

- **−0.255 mm** at 14.69 mm, the paraxial marginal-ray height at F/1.45;
- **−0.330 mm** at 15.63 mm, the real marginal-ray height at F/1.45 and infinity focus;
- **−0.504 mm** at 17.3 mm, the modeled semi-diameter, which the axial beam fills at the close state.

None of these heights is published. At the modeled semi-diameter the A4 term supplies −0.447 mm of the departure, with A6 adding −0.072 mm and A8 +0.015 mm.

The local meridional curvature of the surface changes sign at a height of 11.01 mm. The surface is convex toward the object near the axis and locally concave toward the object beyond that zone. The polynomial sag would reach a maximum at 18.63 mm and turn back; the modeled semi-diameter, taken from the drawn rim in Fig. 3, stops short of that height. Real rays in the model use the zone between 11.01 mm and the rim. The patent's wording describes the axial-to-peripheral trend; the coefficients produce a reversal of local curvature inside the clear aperture.

In third order, the A4 term contributes SI = −1.526, nearly all of the surface's total of −1.531. This is the largest single negative spherical-aberration contribution in the system. It roughly offsets either of the two largest positive contributions: surface 1 (+1.246) and the rear of L8, surface 15 (+1.245). The model's total SI is +0.026; without the A4 term it would be +1.552. The patent credits the aspherical G2 with maintaining performance over the whole focusing range (¶0036).

The patent does not state the manufacturing method. The inferred glass is a HOYA precision-moulding type, which is consistent with a glass-moulded asphere, but that is an inference from the glass coordinate.

## Chromatic Correction Strategy

The patent publishes only nd and νd, so chromatic behaviour can be analysed at two levels. The first uses the patent's own Abbe numbers in a linear dispersion model, giving primary colour. The second uses the catalog line indices of the inferred HOYA glasses, which is valid only under that inference.

At the primary level, axial colour is balanced subgroup by subgroup rather than within a single achromat:

| Subgroup | CI (axial) | CII (lateral) |
|---|---|---|
| G1 | +0.014 | −0.032 |
| G2a | +0.044 | +0.027 |
| G2b | −0.027 | −0.002 |
| G3a | −0.009 | +0.026 |
| G3b | −0.007 | −0.015 |
| Total | +0.015 | +0.004 |

These are third-order sums in mm for the F/1.45 marginal ray and the 21.633 mm chief ray, d-line based.

Two balances stand out:

- **Axial colour.** G2b offsets about 60% of the undercorrecting term of G2a. G1 and G3 are each nearly neutral (+0.014 and −0.016).
- **Lateral colour.** The negative term of G1, ahead of the stop, is offset by the positive terms of G2a and G3a behind it, leaving a small system total. The patent cites large lateral colour at infinity as a deficiency of earlier large-aperture designs (¶0005).

In the Abbe-linear model the residual paraxial axial colour is −0.126 mm (F focus minus C focus). The transverse colour at the full 21.633 mm image height is −0.011 mm (F minus C).

With the inferred HOYA line indices, the paraxial foci relative to d lie at:

- C: +0.057 mm
- F: −0.071 mm
- g: −0.045 mm

The C and g offsets have the same signs as the separation of the C and g curves near the axis in the infinity spherical-aberration plot of Fig. 4, which shows C, d, and g but not F (¶0082). The paraxial foci are not brought together at C and F: a primary residual of −0.128 mm (F minus C) remains, and the g focus falls between d and F.

The data file marks L2, L3 and L8 as inferred anomalous-dispersion crowns, with catalog ΔPgF from +0.0157 to +0.0323; the dense flint of L7 also has a positive catalog ΔPgF (+0.0204). Partial-dispersion values alone do not establish how secondary spectrum is corrected, and no secondary-spectrum calculation beyond the paraxial foci above is offered here. Nothing in the available data supports an apochromatic classification, and none is claimed. The design is described here as an achromat that uses low-dispersion crowns.

## Aberration Correction Strategy

A third-order (Seidel) decomposition of the implemented model shows how the design distributes its corrections. As a consistency check, the real-ray transverse spherical aberration at 5% of the F/1.45 pupil reproduces the Seidel sum to within 0.5%.

| Group | SI (spherical) | SII (coma) | Petzval term Σφ/(nn′) (mm⁻¹) |
|---|---|---|---|
| G1 | +0.463 | +0.077 | +1.22 × 10⁻³ |
| G2a | −0.036 | +0.846 | −4.33 × 10⁻³ |
| G2b | −0.288 | −0.855 | +9.44 × 10⁻³ |
| G3a | +0.164 | +0.167 | +0.19 × 10⁻³ |
| G3b | −0.277 | −0.223 | −5.69 × 10⁻³ |
| Total | +0.026 | +0.011 | +0.83 × 10⁻³ |

Three patterns follow from the table and the patent text:

- **Spherical aberration.** The weakly powered G1 undercorrects, as does G3a. G2 overcorrects through the concave entrance surface 10 and the asphere 13A, and G3b adds further overcorrection. The net third-order residual is small.
- **Coma.** G2a and G2b nearly cancel each other in situ. The patent ties the correction of spherical aberration and coma inside G2 to condition (5) (¶0041) and the suppression of aberrations generated in G2 to condition (7) (¶0047); here f2a/f2 = −12.58 and f2b/f2a = −0.074. A focus group whose coma is balanced internally is consistent with the patent's objective of small aberration change during focusing (¶0006), although this third-order result is computed at infinity only.
- **Field curvature.** The Petzval sum is 8.28 × 10⁻⁴ mm⁻¹, a Petzval radius of about 1207 mm or 13.9 f. G2b's large positive Petzval term is cancelled by the negative terms of G2a and L11.

At infinity the model's real-ray distortion at the full 21.633 mm image height is +0.88% (pincushion), falling to +0.44% at 70% and +0.22% at 50% of that height. The patent associates condition (2) with containing this pincushion tendency of a negative rear group (¶0028).

## Conditional Expressions

Table 28 (PDF p. 45, printed p. 43) tabulates the conditions for all examples. Values recomputed from the implemented model (restored indices) agree with the Example 2 column to the printed precision, except condition (5). Because G2a is nearly afocal, f2a/f2 is unusually sensitive to index rounding: the restored indices give −12.58 and the printed three-decimal indices give −12.62, bracketing the tabulated −12.59.

| Condition | Range (¶) | Table 28 | Model |
|---|---|---|---|
| (1) f3b/f3a | −1.6 < · < 0 (¶0024) | −0.39 | −0.389 |
| (2) (r1 + r2)/(r1 − r2) | −10 < · < 0.0 (¶0027) | −1.47 | −1.471 |
| (3) f2b/f2 | 0 < · < 1.6 (¶0031) | 0.93 | 0.934 |
| (4) f1/f3 | −1.5 < · < 0.5 (¶0037) | −0.76 | −0.764 |
| (5) f2a/f2 | −35 < · < −4 (¶0040) | −12.59 | −12.58 |
| (6) f2b2/f2b1 | 0 < · < 5 (¶0044) | — | not applicable |
| (7) f2b/f2a | −1.5 < · < 0.0 (¶0046) | −0.07 | −0.074 |
| (8) r_2a/f | −1 < · < −0.1 (¶0050) | −0.66 | −0.662 |

All applicable conditions are satisfied. Condition (6) applies only to examples whose G2b is split into two components (Examples 3 and 9; ¶0043). Under PCT Article 19 the applicant amended claim 1 to require −1.5 < f1/f3 < 0.2, labelled (4A) (amended claims, PDF p. 53). Example 2 satisfies the narrowed range.

Example 2 also lies inside every narrower preferred range (¶0026, ¶0029, ¶0033, ¶0039, ¶0042, ¶0048, ¶0052):

| Condition | Preferred range | Model | Inside? |
|---|---|---|---|
| (1)′ | −1.0 < · < −0.1 | −0.389 | Yes |
| (2)′ | −6.5 < · < −0.05 | −1.471 | Yes |
| (3)′ | 0.25 < · < 1.3 | 0.934 | Yes |
| (4)′ | −1.0 < · < 0.2 | −0.764 | Yes |
| (5)′ | −33 < · < −4 | −12.58 | Yes |
| (7)′ | −1.3 < · < 0.0 | −0.074 | Yes |
| (7)″ | −1.0 < · < 0.0 | −0.074 | Yes |
| (8)′ | −0.7 < · < −0.35 | −0.662 | Yes |

## Model Scope and Limitations

The model uses the data file's restored indices, the published spacings, and a computed back distance. Its first-order values compare with the patent as follows:

| Quantity | Patent | Model | Note |
|---|---|---|---|
| Focal length, infinity | 86.85 mm | 86.848 mm | 86.784 mm with printed three-decimal indices |
| Half-field ω | 13.99° | 13.987° | from Y = 21.633 mm and the paraxial EFL |
| Fno, infinity | 1.45 | 1.449 | real-ray image-space value; the stop was sized to this F-number, so agreement is calibration |
| G2 travel | 12.096 mm (from D9) | 12.096 mm | rigid-group spacing sum conserved to 0.001 mm |
| Close state | 0.85 m, β = 0.118 | 857.6 mm object-to-image, \|β\| = 0.116 | distance reference undefined in the patent |
| Fno, close state | 1.81 (Fig. 4) | 1.64 | set in the model by the focus-group rims drawn in Fig. 3, not by the stop |
| Conditions (1)–(5), (7), (8), (4A) | Table 28 | all in range; reproduced except (5), −12.58 against −12.59 | (6) not applicable |

No stop diameter or semi-diameters are published. The stop semi-diameter (19.77 mm) is the real-ray stop height of an F/1.45 entrance beam, so the infinity F-number agreement confirms the calibration only; it is not evidence of the production diaphragm. The semi-diameters come from two sources:

- **Focus group and L9 (surfaces 10–17).** Scaled from Fig. 3, which draws the two focus doublets and the rear cemented doublet square-cut: 17.9 mm for L5–L6, and 17.3 mm for L7–L8 and for L9. The focus-group rims clear the F/1.45 axial beam at infinity, which needs at most 16.49 mm there; L9 clears both the axial beam and the corner chief ray.
- **All other surfaces (1–8 and 18–20).** Meridional real-ray envelopes of the axial F/1.45 bundle, a 60%-field fan, and the full-field chief ray at both published focus states and three intermediate samples, with about 8% clearance, reduced where edge thickness or gap clearance binds. Fig. 3 draws these rims within about 6% of the modeled values. It ends the concave rear faces of L1–L4 on flat annuli 5–9% lower, at or below the height of the F/1.45 axial ray on L1–L3, so those faces were not reduced to the drawing. The drawing also shows L10 and L11 meeting at their rims; the model keeps the rear of L10 and the front of L11 at 15.9 mm, short of that contact height.

The resulting front clear aperture of about 63 mm diameter follows from these modeled values, not from the patent or Sony, and is not a measured production dimension. Table 4 gives no back distance and no data for the plate drawn in Fig. 3, so the image plane is the paraxial infinity focus in air.

## Design Heritage and Context

The application positions itself against two Japanese publications (¶0003–¶0005):

- **JP 2011-128273 A** — a three-group lens (G1 positive or negative, G2 positive, G3 positive or negative) focused by moving G2, with half-angles of about 6°–9° and F2.0–2.8.
- **JP 2009-244699 A** — a two-group positive–positive lens focused by moving the second group, with a half-angle of about 14° and about F1.4.

The application states that, scaled to the same sensor size, both leave large coma and lateral colour at infinity and large aberration change during focusing. In the implemented model of Example 2:

- the focus group's third-order coma is balanced internally;
- lateral colour is balanced across the stop;
- the focus group carries its own strong asphere.

The international search report (completed 17 February 2017) cites earlier publications from Nikon (JP 2013-025175 A; JP 7-152001 A, family US 5,751,485 A) and Canon (JP 2002-098894 A; JP 3-141313 A; JP 2013-218015 A) as category X documents against claim 1, indicating that the examiner regarded the basic three-group arrangement as known. The Article 19 amendment that narrowed claim 1 with condition (4A) was received on 26 May 2017, after the search report.

Within Sony's line, the design was succeeded in 2024 by the FE 85mm F1.4 GM II, a different 11-group / 14-element design with two XA and two ED elements.

## Sources

1. Maruyama, M.; Matsumoto, H. (Sony Corporation). *撮像レンズおよび撮像装置 / Image Pickup Lens and Image Pickup Device.* International Publication WO 2017/130571 A1, 3 August 2017; PCT/JP2016/086059, filed 5 December 2016; priority JP 2016-012401, 26 January 2016. Cited: ¶0001, ¶0003–¶0007, ¶0015–¶0018, ¶0024–¶0052, ¶0065–¶0071, ¶0082, ¶0084–¶0090; Tables 4–6 (PDF pp. 23–24) and 28 (PDF p. 45); Figs. 3–4 (sheet 2/10); Article 19 amended claims (PDF pp. 53–56); International Search Report (PDF pp. 67–70).
2. Sony. "SEL85F14GM Specifications." Sony Middle East and Africa support site. https://www.sony-mea.com/en/electronics/support/lenses-e-mount-lenses/sel85f14gm/specifications (accessed 2 October 2026).
3. Sony Electronics. "Sony Launches New G Master Brand of Interchangeable Lenses." Press release, 3 February 2016. https://www.prnewswire.com/news-releases/sony-launches-new-g-master-brand-of-interchangeable-lenses-300214486.html (accessed 2 October 2026).
4. Sony. "SEL85F14GM2 Specifications." Sony Middle East and Africa support site. https://www.sony-mea.com/en/electronics/support/lenses-e-mount-lenses/sel85f14gm2/specifications (accessed 2 October 2026).
5. Sony India. "SEL85F14GM2 Specifications." https://www.sony.co.in/electronics/camera-lenses/sel85f14gm2/specifications (accessed 2 October 2026).
6. HOYA Corporation. Optical glass catalog data (dispersion formulae and nd/νd for PCD4, FCD1, FCD515, E-F2, TAFD55, M-FDS910, E-FD4, BAC4), April 2026 edition, as distributed with the `opticalglass` 2.0.2 Python package. OHARA, SCHOTT, HIKARI, SUMITA and CDGM catalog data from the same distribution were used for the cross-vendor comparison.
7. Welford, W. T. *Aberrations of Optical Systems.* Bristol: Adam Hilger, 1986. Seidel sum definitions and sign convention used for the third-order decomposition.
8. Sony Marketing (Japan). "FE 85mm F1.4 GM (SEL85F14GM)" product page, lens construction diagram marking the XA and ED elements. https://www.sony.jp/ichigan/products/SEL85F14GM/feature_1.html (accessed 10 October 2026).
