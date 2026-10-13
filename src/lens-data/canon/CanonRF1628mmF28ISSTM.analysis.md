# Canon RF 16-28mm f/2.8 IS STM — Optical Design Analysis

## 1. Patent Reference and Design Identification

**Patent:** JP 2024-101615 A (特開2024-101615)
**Application Number:** JP 2023-5613 (特願2023-5613)
**Filed:** January 18, 2023
**Published:** July 30, 2024
**Inventor:** Shinichiro Saito (printed only as 齋藤 慎一郎; the romanization is not given in the publication)
**Applicant:** Canon Inc. (キヤノン株式会社)
**Title:** ズームレンズおよび撮像装置 (Zoom Lens and Image Pickup Apparatus)
**Claims / worked examples:** 12 claims; four numerical examples
**Embodiment analyzed:** Numerical Example 1 (数値例1; Embodiment 1, Figs. 1–2)

JP 2024-101615 A describes a family of negative-lead ultra-wide zoom lenses in which a negative first group and a positive second group precede the aperture stop, and in which the first group contains at least four lens elements (claim 1). Two claim-level inequalities define the invention: the ratio of the telephoto-end distance from the first surface to the stop to the telephoto-end lens length, $0.05 \le St/TDt \le 0.45$, and the ratio of the front negative lens's focal length to the first group's, $0.30 \le fG1/f1 \le 0.98$ (claim 1, ¶0035–¶0036). The stated aim is a small lens with a wide-end full angle beyond 90° and good performance over the whole zoom range (¶0007, ¶0044).

Numerical Example 1 is a five-group design, L1(−) L2(+) L3(−) L4(+) L5(+), with the stop at the front of L4 (¶0026). The patent prints focal lengths of 15.488 / 24.114 / 27.160 mm and F2.900 at all three published states (PDF p. 16). The ratio of the printed end focal lengths is 1.754, and ¶0015 describes Example 1 as a zoom ratio of about 1.8 at an aperture ratio of about 2.9.

The correlation with the production Canon RF 16-28mm F2.8 IS STM (announced January 23, 2025) rests on the following convergent points, together with the recorded differences below:

1. **Applicant and timing.** Canon Inc. filed the application on January 18, 2023; publication followed on July 30, 2024, about six months before the product announcement.
2. **Architecture and aperture.** A negative-lead ultra-wide zoom with a constant F2.9 design aperture across a 1.754× range corresponds to a constant f/2.8, 16–28 mm product.
3. **Element and group count.** Example 1 derives exactly 16 elements in 13 air-separated groups, matching Canon's published 16 elements in 13 groups. This count does not single out Example 1: Example 3 also derives 16/13, while Examples 2 and 4 each derive 17 elements in 14 groups when their thin resin layers are counted with their substrates as ¶0027 prescribes.
4. **Angle of view.** Example 1's printed wide-end half-field of 54.532° gives a full field of 109.06°, the closest of the four examples to Canon's 108°10′ (108.17°); Examples 2–4 give 105.65°, 105.46°, and 102.40°. At the telephoto end Example 1 gives 77.49° against Canon's 75°, and Example 3 (76.86°) is closer.
5. **Front-group low-dispersion element.** Canon U.S.A. describes a large-diameter UD lens in the front group; Example 1 places a biconcave 1.49700 / 81.61 element (E3) in L1. All four examples share this feature.
6. **Focus and stabilization.** The patent's focus group is a single negative lens beside the stop (Fig. 1, ¶0078), which ¶0078 says eases quick focusing and which is consistent with the product's STM drive; its stabilization group is the cemented 10th/11th-lens doublet decentred perpendicular to the axis (¶0088), consistent with the product's optical IS.

The differences prevent claiming the exact factory prescription. Canon describes one glass-molded (GMo) asphere and one replica asphere, with the large replica element in the front-most position; Example 1 has no resin layer and places a direct asphere on a front element whose glass coordinates match only precision-moldable glass families. Canon lists four UD elements, whereas Example 1 contains five elements with νd ≥ 75; that numerical threshold does not establish Canon's manufacturer-defined UD classification. A secondary-source barrel length (112.8 mm at 16 mm, 102.1 mm at 28 mm) plus the 20 mm RF flange distance falls short of Example 1's printed first-vertex-to-image track by 7.36 mm at the wide end and 7.86 mm at the telephoto end. Example 3, by contrast, carries one resin-layer (replica-type) asphere, on its second element rather than its first, plus one double-aspheric glass element, which matches Canon's count of aspheric lenses by type but not the replica's position.

Example 1 is the closest overall match to Canon's published optical construction diagrams. The correspondence includes the four-element front group, two isolated lenses before the stop, three cemented doublets including the stabilization unit, the thin rear asphere, and the separate final positive lens. Its aspheric elements occupy the same first and penultimate positions that Canon marks. Example 3 is a close alternative in silhouette and element count, but places its front asphere on the second element. Examples 2 and 4 add a rear element, and Example 2 also reverses the stabilization doublet's interface orientation. This supports identifying the modeled architecture with the product while retaining the manufacturing and numerical differences above; Canon has not confirmed Example 1 as the exact production prescription. Specifications quoted from Canon below are marketed values and are kept separate from the design values of the example.

## 2. Optical Architecture

Example 1 is a negative-lead five-group zoom. Its paraxial group focal lengths, computed from the prescription and matching the patent's group table (PDF p. 16), are:

| Group | Surfaces | Elements | Focal length (mm) | Role |
|---|---|---|---|---|
| L1 | 1–8 | E1–E4 | −36.38 | Front negative group; pupil imaging onto the stop (¶0039) |
| L2 | 9–10 | E5 | +71.68 | Single positive lens; converges the L1 output ahead of the focus group (¶0077) |
| L3 | 11–12 | E6 | −47.17 | Single negative focus lens (¶0078) |
| L4 | STO, 14–28A | E7–E15 | +27.15 | Main positive relay behind the stop; contains the IS doublet |
| L5 | 29–30 | E16 | +68.99 | Fixed rear positive lens (¶0082) |

L1 holds four lens elements (three negative, one positive), the minimum claim 1 requires. L4 carries nine elements in six air-separated units, including three cemented doublets (D1, D2, D3). The stop is the first surface of L4, immediately behind L3, as ¶0086 recommends.

**Zoom kinematics.** Measured as front-vertex distance from the fixed image plane, L1 travels from 140.159 mm (wide) to 129.781 mm (intermediate) and then back out to 129.963 mm (telephoto): it moves toward the image and reverses after the intermediate state, as ¶0038 describes. L2 and L4 both move objectward, by 10.91 mm from the wide to the intermediate state and a further 3.95 mm to the telephoto state, and the distance from the rear vertex of L2 (surface 10) to the stop stays 12.835–12.836 mm across the three states (15.665–15.666 mm from its front vertex), constant within printed rounding. L2 and L4 therefore behave as a linked pair while L3 moves by 9.330 mm and 3.342 mm between them. L5 is fixed relative to the image plane (¶0028, ¶0082), and the printed back focus is 13.270 mm at all three states.

**First-order type.** The paraxial back focal distance is 0.857, 0.550, and 0.489 times the focal length at the wide, intermediate, and telephoto states. Because BFD < EFL at every state, the complete lens is not retrofocus in the BFD > EFL sense; the patent's description of a retrofocus-type arrangement (¶0003, ¶0038) refers to the power arrangement of the groups at the wide end. The track-to-EFL ratio of 9.05 / 5.38 / 4.79 rules out a telephoto classification. The entrance pupil lies 18.915 / 16.532 / 16.007 mm behind the first vertex, and the exit pupil 51.05 / 96.67 / 123.11 mm ahead of the last vertex.

**Petzval balance.** Summed surface by surface as $\phi/(n n')$, the group Petzval contributions are −23.33 (L1), +8.46 (L2), −11.97 (L3), +20.16 (L4), and +9.73 (L5) × 10⁻³ mm⁻¹, for a total of +3.06 × 10⁻³ mm⁻¹ and a Petzval radius of −327.3 mm at every zoom state. The two negative groups nearly cancel the Petzval curvature of the three positive groups.

## 3. Element-by-Element Analysis

Focal lengths below are standalone thick-lens values in air; cemented doublets are also given as net cemented powers. In-situ behavior is described separately where computed. Third-order contributions are normalized Seidel coefficients at the wide end (Welford convention, EFL = 1, unit marginal height, unit chief-ray angle, A4 aspheric terms included) and are quoted only to compare units within the same state.

### E1 — Negative Meniscus, convex to object (aspherical rear surface 2A)

nd = 1.88202, νd = 37.22, θgF = 0.5770. Glass: 882372 coordinates, coordinate-compatible with HOYA M-TAFD307 and CDGM D-ZLaF67-25 (precision-moldable families); supplier unconfirmed. f = −29.83 mm.

E1 is the strongest negative element of L1 and carries the design's only front-group asphere. Its focal length relative to the group's defines claim 1's second condition, fG1/f1 = 0.8199 (¶0042). At the wide end the chief ray at the printed field meets surface 1 at 20.24 mm while the axial F2.9 ray is at 2.67 mm, so E1 works almost entirely on the off-axis bundle. E1 is the largest single contributor to third-order distortion at the wide end (+0.423, including the −0.290 contribution of the 2A aspheric term), and its first-order lateral-color term (+0.0161) is the largest of the three negative lenses in L1.

### E2 — Negative Meniscus, convex to object

nd = 1.80420, νd = 46.50, θgF = 0.5572. Glass: 804465 coordinates (HOYA TAF3D, OHARA S-LAH65VS, Schott N-LASF44 are coordinate-compatible); supplier unconfirmed. f = −55.05 mm.

E2 is the second of the two consecutive leading negative lenses addressed by condition (6), |fG1/fG2| = 0.542 (¶0062–¶0063). With E1 and E3 it forms the run of three consecutive negative lenses that ¶0074 recommends for keeping L1 small while correcting wide-angle field curvature and coma. E2 is spherical, one of the three spherical lenses in L1 that ¶0076 prefers for limiting the astigmatic difference caused by aspheric form errors.

### E3 — Biconcave Negative, low dispersion

nd = 1.49700, νd = 81.61, θgF = 0.5386 (ΔPgF = +0.0321). Glass: 497816 fluorophosphate class (HOYA FCD1 and Schott N-PK52A among exact-class candidates); supplier unconfirmed. f = −66.28 mm.

E3 is the only νd ≥ 75 element in L1 and so the natural counterpart of the front-group UD element in Canon's description. Its first-order lateral-color term at the wide end is +0.0045, against +0.0161 for E1 and +0.0071 for E2; the patent does not assign it a specific role. Its θgF lies above the normal line, but the patent itself does not label the glass anomalous.

### E4 — Biconvex Positive, high index

nd = 1.91082, νd = 35.25, θgF = 0.5824. Glass: 911352 coordinates (HOYA TAFD35, CDGM H-ZLaF4LA); supplier unconfirmed. f = +36.29 mm.

E4 is the single positive lens of L1 and the highest-index material in the group, so it supplies the values of conditions (3)–(5): nd1m = 1.91082, νd1m = 35.25, θgF1m = 0.5824 (¶0057–¶0061). ¶0075 prefers a positive singlet in L1 with index at least 1.7, and ¶0058 explains the trade-off: a high-index positive lens in the negative front group aids primary achromatization and compactness but makes the secondary spectrum of lateral color harder to correct. In the third-order budget at the wide end, E4's lateral-color term (−0.0217) offsets the combined +0.0277 of E1–E3, leaving L1 with a net +0.0060.

### E5 — Biconvex Positive (L2)

nd = 1.65160, νd = 58.54, θgF = 0.5390. Glass: 652585 coordinates (OHARA S-LAL7Q, Schott N-LAK7); supplier unconfirmed. f = +71.68 mm.

E5 forms L2 by itself, as ¶0077 prefers. The patent's reason is that a single positive lens after L1 limits the beam diameter and can make the axial beam entering the adjacent focus group nearly afocal, reducing focus-dependent spherical aberration and coma. The group magnification of L2 is −2.347 at the wide end and −13.056 at the telephoto end, so the beam leaving L2 approaches afocal toward the long end. Its νd of 58.54 lies inside the 40–60 range ¶0077 gives for limiting chromatic variation of coma during focusing.

### E6 — Negative Meniscus, concave to object (L3, focus)

nd = 1.77250, νd = 49.63, θgF = 0.5508. Glass: 772496 coordinates (HOYA TAF1, OHARA S-LAH66, Schott N-LAF34); supplier unconfirmed. f = −47.17 mm.

E6 is the entire focus group (¶0078). Its νd of 49.63 falls inside the 45–60 range ¶0080 recommends for limiting axial color at close focus. In third order, L2 and L3 carry large spherical-aberration contributions of opposite sign (+2.25 and −2.81 at the wide end) and first-order axial-color terms of opposite sign (+0.0291 and −0.0488). Moving E6 changes its ray heights and therefore this balance; it is this focus-dependent variation that ¶0077's near-afocal argument addresses. E6's shape defines condition (8), SFX = 1.138, and its focal length condition (9), fX/f1 = 1.297 (¶0067–¶0068).

### E7 — Biconvex Positive, first element behind the stop

nd = 1.55032, νd = 75.50, θgF = 0.5405 (ΔPgF = +0.0237). Glass: HOYA FCD705 (550755); the only exact-class candidate in the loaded catalogs. f = +40.51 mm.

E7 is the first of four positive νd ≥ 75 lenses behind the stop. ¶0081 asks for at least two, and preferably three, such lenses in the rear group LR to correct lateral color from the wide field and axial color from the large aperture. ¶0087 prefers that the element following the stop present a strongly convex surface to the object side. E7 does present a convex front (R = 74.62 mm) to the stop, but its stronger curvature is on the rear surface (R = −30.96 mm).

### E8 + E9 — Cemented Doublet D1 (net f = +158.27 mm)

- **E8:** nd = 1.49700, νd = 81.61, θgF = 0.5386 (ΔPgF = +0.0321). Glass: 497816 fluorophosphate class (HOYA FCD1, Schott N-PK52A); supplier unconfirmed. f = +26.69 mm. Biconvex positive.
- **E9:** nd = 1.80440, νd = 39.59, θgF = 0.5729. Glass: 804396 coordinates (OHARA S-LAH63Q, HIKARI J-LASF013); supplier unconfirmed. f = −29.64 mm. Negative meniscus.

D1 pairs a low-dispersion crown with a lanthanum flint, leaving a weakly positive net power. At the wide end D1 contributes −0.0383 to the axial-color sum, offsetting E7 (+0.0511), and −16.86 to the spherical-aberration sum, the largest negative term of any unit in the lens.

### E10 + E11 — Cemented Doublet D2, image stabilization (net f = −83.44 mm)

- **E10:** nd = 1.84666, νd = 23.79, θgF = 0.6191 (ΔPgF = +0.0153). Glass: 847238 coordinates (HOYA FDS90, OHARA S-TIH53, Schott N-SF57); supplier unconfirmed. f = +50.78 mm. Positive meniscus, concave to object.
- **E11:** nd = 1.60562, νd = 43.70, θgF = 0.5721. Glass: 606437 coordinates (OHARA S-BAM4, Schott N-BAF4); supplier unconfirmed. f = −32.17 mm. Biconcave negative.

Counting lenses from the object side, E10 and E11 are the 10th and 11th lenses, the cemented pair that ¶0088 decentres for image stabilization. The net power is negative, as ¶0088 prefers for the stabilizing group. Pairing a dense-flint positive lens with a lower-dispersion negative lens leaves the doublet's own first-order axial-color term small (+0.0070 at the wide end, against +0.0511 for E7 and −0.0383 for D1). Section 9 gives its decentring sensitivity.

### E12 — Biconvex Positive, low dispersion

nd = 1.43700, νd = 95.10, θgF = 0.5326 (ΔPgF = +0.0488). Glass: HOYA FCD100 (437951); the only exact-class candidate in the loaded catalogs (OHARA S-FPL53 is equivalent-class). f = +35.45 mm.

E12 is the first of two FCD100-class elements, the lowest-dispersion glass in the design. It is a strong positive contributor in L4: at the wide end +14.66 in spherical aberration and +0.0237 in axial color.

### E13 + E14 — Cemented Doublet D3 (net f = −44.31 mm)

- **E13:** nd = 1.43700, νd = 95.10, θgF = 0.5326 (ΔPgF = +0.0488). Glass: HOYA FCD100 (437951); only exact-class candidate. f = +31.46 mm. Biconvex positive.
- **E14:** nd = 1.83481, νd = 42.72, θgF = 0.5650. Glass: 835427 coordinates (HOYA TAFD5G, OHARA S-LAH55V); supplier unconfirmed. f = −16.63 mm. Biconcave negative, the strongest single element in the lens.

D3 couples the second FCD100-class lens to a strong high-index negative element, giving a net negative doublet. The νd difference across its cemented interface (95.10 against 42.72) is the largest in the lens. At the wide end D3 is the largest lateral-color contributor in L4 (−0.0113) and offsets E12's axial-color term with −0.0350.

### E15 — Negative Meniscus, concave to object (aspherical surfaces 27A and 28A)

nd = 1.58313, νd = 59.46, θgF = 0.5418. Glass: 583595 coordinates (HOYA M-BACD12 and CDGM H-ZK2 are both exact-class); supplier unconfirmed. f = −119.92 mm.

E15 is a weak negative meniscus closing L4 with both surfaces aspherical; despite its weak paraxial power it is the second major aspheric corrector of the system (Section 6). Its coordinates match HOYA's moldable M-BACD12 family, but also conventional glass (CDGM H-ZK2). They are consistent with a glass-molded element without establishing one. Surfaces 27A and 28A are the aspheric surfaces behind the stop that ¶0084 recommends for field-curvature correction at the wide end.

### E16 — Positive Meniscus, convex to image (L5)

nd = 1.48749, νd = 70.44, θgF = 0.5303. Glass: 487704 coordinates (HOYA FC5, Schott N-FK5); supplier unconfirmed. f = +68.99 mm.

E16 is L5 by itself and does not move during zoom or focus. ¶0082 gives the dust-sealing rationale for a fixed last group in an interchangeable lens, and ¶0083 prefers that the last lens be convex toward the image to secure back focus and suppress ghosts from sensor reflections. Its focal length defines condition (11), fw/fR = 0.224.

## 4. Glass Identification and Selection

The patent publishes nd, νd, and θgF at the d-line (¶0054) but no line indices. Glass names are therefore coordinate matches against six vendor catalogs (OHARA, HOYA, Schott, HIKARI, CDGM, Sumita) using the distance $\sqrt{\Delta n_d^2 + (\Delta\nu_d/50)^2}$. Every coordinate in Example 1 has at least one exact-class match (distance < 0.001), and most are shared by several vendors, so the listed names identify glass types, not suppliers. ΔPgF is the patent θgF minus the normal line $0.6438 - 0.001682\,\nu_d$.

| Code | nd / νd | θgF | ΔPgF | Coordinate-compatible glasses | Used in | Role |
|---|---|---|---|---|---|---|
| 882372 | 1.88202 / 37.22 | 0.5770 | −0.0042 | HOYA M-TAFD307; CDGM D-ZLaF67-25 | E1 | Aspheric front negative (moldable families only) |
| 804465 | 1.80420 / 46.50 | 0.5572 | −0.0084 | Schott N-LASF44; HOYA TAF3/TAF3D; OHARA S-LAH65VS | E2 | L1 negative |
| 497816 | 1.49700 / 81.61 | 0.5386 | +0.0321 | HOYA FCD1; Schott N-PK52A; CDGM H-FK61; HIKARI J-FK01A | E3, E8 | Low-dispersion negative (L1) and crown of D1 |
| 911352 | 1.91082 / 35.25 | 0.5824 | −0.0021 | HOYA TAFD35; CDGM H-ZLaF4LA | E4 | High-index positive in L1 (nd1m) |
| 652585 | 1.65160 / 58.54 | 0.5390 | −0.0063 | OHARA S-LAL7Q; Schott N-LAK7 | E5 | L2 positive |
| 772496 | 1.77250 / 49.63 | 0.5508 | −0.0095 | HOYA TAF1; Schott N-LAF34; OHARA S-LAH66 | E6 | Focus lens |
| 550755 | 1.55032 / 75.50 | 0.5405 | +0.0237 | HOYA FCD705 | E7 | Low-dispersion positive behind stop |
| 804396 | 1.80440 / 39.59 | 0.5729 | −0.0043 | OHARA S-LAH63Q; HIKARI J-LASF013 | E9 | Flint of D1 |
| 847238 | 1.84666 / 23.79 | 0.6191 | +0.0153 | HOYA FDS90; OHARA S-TIH53; CDGM H-ZF52A | E10 | Dense-flint positive of IS doublet |
| 606437 | 1.60562 / 43.70 | 0.5721 | +0.0018 | OHARA S-BAM4; Schott N-BAF4 | E11 | Negative of IS doublet |
| 437951 | 1.43700 / 95.10 | 0.5326 | +0.0488 | HOYA FCD100 | E12, E13 | Lowest-dispersion positives in L4 |
| 835427 | 1.83481 / 42.72 | 0.5650 | −0.0069 | HOYA TAFD5G; OHARA S-LAH55V | E14 | Strong negative of D3 |
| 583595 | 1.58313 / 59.46 | 0.5418 | −0.0020 | HOYA M-BACD12; CDGM H-ZK2 | E15 | Double-aspheric corrector |
| 487704 | 1.48749 / 70.44 | 0.5303 | +0.0050 | HOYA FC5; Schott N-FK5 | E16 | Fixed rear positive |

Five elements have νd ≥ 75: E3 in L1 and the four positive lenses E7, E8, E12, and E13 behind the stop. Four such positive lenses in LR exceed the two-to-three that ¶0081 recommends. Canon's published count is four UD elements; which four Canon designates, and whether FCD100-class glass is marketed under a different name, is not established from the sources.

Two coordinates have only one exact-class glass type in the loaded catalogs: 550755 (HOYA FCD705; CDGM H-FK55 is the nearest other glass and is equivalent-class) and 437951 (HOYA FCD100; OHARA S-FPL53 is equivalent-class). A third, 882372, is exact-class only against precision-moldable families (HOYA M-TAFD307 and its MP-/MC- variants; CDGM D-ZLaF67-25). These are catalog-derived coordinate matches, not supplier confirmation. The loaded OHARA file covers only the S-series, and the HIKARI file excludes its moldable series.

## 5. Focus Mechanism

Example 1 focuses internally by moving L3 (E6) toward the object for near objects, with every other group and the image plane fixed (Fig. 1 arrow, ¶0025, ¶0078). The patent publishes infinity states only and gives no close-focus spacings, distances, or magnifications.

The close-focus spacings in the data file are therefore a **constrained reconstruction**. L3 moves objectward with D10 + D12 held constant at each zoom station. Its travel is solved paraxially so that an object at Canon's minimum focus distance, measured from the image plane, images onto the fixed infinity image plane. Canon publishes 0.25 m at 16 mm and 0.20 m at 28 mm. The 0.213 m value at the intermediate station is a linear interpolation in focal length, not published data, and the viewer interpolates linearly between stations.

| Station | EFL (mm) | D10 ∞ / close (mm) | D12 ∞ / close (mm) | L3 travel (mm) | Available (mm) | Object to image (m) | Paraxial β | Canon max. mag. |
|---|---|---|---|---|---|---|---|---|
| Wide | 15.488 | 6.971 / 3.341 | 4.664 / 8.294 | 3.630 | 6.971 | 0.250 | −0.112 | 0.11× |
| Intermediate | 24.114 | 8.548 / 3.579 | 3.088 / 8.057 | 4.969 | 8.548 | 0.213 (interpolated) | −0.220 | — |
| Telephoto | 27.160 | 9.157 / 3.362 | 2.479 / 8.274 | 5.795 | 9.157 | 0.200 | −0.284 | 0.26× |

After the spacings are rounded to 0.001 mm, the reconstructed conjugates lie 250.012 / 213.007 / 199.996 mm from the image plane when the image is held on the paraxial infinity focus, as in the solve. That focus lies 0.0009 / 0.0002 / 0.0014 mm behind the authored image plane at the printed 13.270 mm back focus; requiring focus on the authored plane itself, the same spacings image objects 250.086 / 213.012 / 200.014 mm away. The difference is immaterial at the scale of the marketed distances. The paraxial magnification at the wide end agrees with Canon's 0.11×. At the telephoto end it exceeds Canon's 0.26× by 0.024. This is a plausibility comparison between a paraxial model and a marketed figure, not a mismatch test; possible reasons include production differences, real-ray versus paraxial magnification, and the reference plane of the marketed distance.

The focus sensitivity, defined as the paraxial image shift per millimetre of objectward L3 travel, is 0.469 at the wide end, 1.060 at the intermediate state, and 1.321 at the telephoto end. These values equal $(1-\beta_3^2)(\beta_4\beta_5)^2$ evaluated with the group magnifications of the model. The image-side displacement that the close object would produce with the lens frozen at its infinity spacing grows faster: 1.92 mm at the wide end, 6.16 mm at the intermediate state, and 9.15 mm at the telephoto end. As a result, the longest travel is needed at the telephoto end despite the higher sensitivity there. In every state the solved travel uses less than 64 % of the L2–L3 air space available at infinity. Canon describes a leadscrew-type STM drive; the patent does not discuss actuators.

## 6. Aspherical Surfaces

Three surfaces on two elements are aspherical: 2A (rear of E1) and 27A / 28A (both surfaces of E15). The patent's equation 【数1】 (¶0095) is

$$X = \frac{H^2/R}{1+\sqrt{1-(1+K)(H/R)^2}} + A_4H^4 + A_6H^6 + A_8H^8 + A_{10}H^{10} + A_{12}H^{12}$$

with X the sag along the direction of light travel. This is the standard (1 + K) conic form: K = 0 is a spherical base, and all three surfaces have K = 0. No odd-order terms are used. The data file copies the coefficients unchanged at native scale (no scaling), adding A14 = 0 only to complete the schema.

| Surface | R (mm) | K | A4 | A6 | A8 | A10 | A12 |
|---|---|---|---|---|---|---|---|
| 2A | 22.1371 | 0 | −7.11444e-06 | 2.28099e-09 | −8.75851e-11 | 2.46405e-13 | −4.26701e-16 |
| 27A | −64.2569 | 0 | −7.98050e-05 | 4.31831e-07 | −1.02601e-08 | 9.74514e-11 | −3.31880e-13 |
| 28A | −800.0000 | 0 | −3.06766e-05 | 2.19257e-07 | −3.28288e-09 | 3.23801e-11 | −9.88714e-14 |

The patent does not publish clear apertures. Departures are therefore quoted at the modeled semi-diameters of the data file, which were derived from ray floors and Fig. 1 proportions and are not published values.

| Surface | Modeled sd (mm) | Departure from base sphere at 70 % sd (mm) | at 100 % sd (mm) |
|---|---|---|---|
| 2A | 17.3 | −0.174 | −0.994 |
| 27A | 11.7 | −0.334 | −1.490 |
| 28A | 11.7 | −0.103 | −0.259 |

**Surface 2A.** On this rear surface of E1, concave toward the image (R = +22.14 mm), the negative departure makes the surface progressively shallower than its base sphere toward the rim. At the wide end the real chief ray at the printed field crosses 2A at 16.31 mm while the axial F2.9 ray is at 2.66 mm, so the surface acts mainly on the off-axis bundle. Its third-order A4 contributions at the wide end are of similar magnitude across spherical aberration (+0.183), coma (−0.213), astigmatism (+0.248), and distortion (−0.290). No single aberration dominates at third order, and the higher-order coefficients (A6–A12) are not captured by that measure.

**Surfaces 27A and 28A.** Both surfaces of E15 depart toward the object, the front surface more strongly (−1.490 mm against −0.259 mm at the modeled rim). The element therefore becomes thicker toward its edge than its spherical base (by 1.231 mm at the modeled rim), which in effect adds negative power toward the periphery. Here the chief ray is only about 2.5 times the marginal-ray height (8.60 against 3.37 mm at 27A, wide end, compared with about 6.1 at 2A), and the third-order A4 terms are dominated by spherical aberration: −3.375 (27A) and +1.083 (28A) at the wide end, rising to −13.267 and +4.572 at the telephoto end, where the axial beam is widest. The pair also contributes to coma (−1.587 / +0.559 at the wide end) and distortion (−0.351 / +0.149). E15 is thus principally an aperture-aberration corrector with a secondary field role, complementing the field-dominated action of 2A.

**Manufacturing type.** The prescription contains no resin rows, so neither aspheric element is a composite (replica) element as tabulated. E1's coordinates match only precision-moldable glass families in the loaded catalogs, and E15's are compatible with moldable glass. Both are therefore consistent with glass-molded aspheres, but this is an inference from glass coordinates, not a patent statement. It conflicts with Canon's description of the production lens (one GMo and one replica asphere, with the replica front-most). Examples 2 and 4 of the same patent show the alternative the family contains: a 0.250 mm and a 0.100 mm resin layer, respectively, on the rear of the front element, carrying the front-group asphere.

## 7. Chromatic Correction Strategy

The chromatic design follows the patent's stated logic. The high-index positive lens in L1 (E4) provides the primary color balance of the negative front group, the leading negatives are kept strong for compactness (¶0058–¶0063), and several low-dispersion positive lenses behind the stop correct lateral and axial color (¶0081). The patent also states that lateral color and distortion arising from the strong front negative lens are corrected by image processing (¶0039). The optical correction is therefore not intended to be complete by itself.

First-order chromatic sums were computed with the published data alone: $n_F - n_C = (n_d - 1)/\nu_d$ and $n_g - n_F = \theta_{gF}(n_F - n_C)$ (¶0054). The coefficients are normalized in the same way as the Seidel sums above.

| Group | Axial C–F (W) | Lateral C–F (W) | Axial C–F (T) | Lateral C–F (T) |
|---|---|---|---|---|
| L1 | +0.0128 | +0.0060 | +0.0225 | +0.0084 |
| L2 | +0.0291 | −0.0033 | +0.0291 | −0.0033 |
| L3 | −0.0488 | +0.0020 | −0.0514 | +0.0012 |
| L4 | +0.0048 | −0.0072 | −0.0030 | −0.0093 |
| L5 | +0.0014 | +0.0027 | +0.0008 | +0.0028 |
| Total | −0.0007 | +0.0002 | −0.0020 | −0.0001 |

The lateral-color terms of L1 and L4 are of opposite sign and similar magnitude at both ends. Within L1, E4 offsets the three negatives (Section 3). Within L4, the largest contributor is doublet D3. The axial terms are dominated by the L2/L3 pair, whose sum changes little with zoom (−0.0197 at the wide end, −0.0223 at the telephoto end), with L1, L4, and L5 balancing the remainder.

Paraxial traces with the corresponding index differences confirm the sums independently. The F- and C-line paraxial foci differ by 0.011 mm at the wide end, 0.036 mm at the intermediate state, and 0.055 mm at the telephoto end. The g- and F-line foci differ by 0.013 mm, 0.016 mm, and 0.021 mm. The paraxial F–C lateral color is −0.022 % of image height at the wide end and +0.014 % at the telephoto end.

The five νd ≥ 75 elements lie +0.024 to +0.049 above the normal line in θgF, and four of them are positive lenses behind the stop; eight of the sixteen elements lie above the line in all. These first-order figures are consistent with a well-corrected achromat at first order. They do not measure real-ray chromatic behavior at the edge of a 109° field, and the patent does not claim apochromatic correction. No such claim is made here.

## 8. Distortion and Field Strategy

Example 1 accepts large distortion at the wide end by design. ¶0039 assigns strong power to the front negative lens for compactness and wide coverage and corrects the resulting distortion and lateral color electronically. Condition (12) bounds the third-order distortion coefficient V at the wide end: 0.2 ≤ V ≤ 1.0, with the upper limit set by the resolution lost when the corrected image is stretched (¶0071).

The printed image heights confirm the strategy. At the printed half-fields of 54.532°, 42.075°, and 38.744°, a real chief ray lands at 17.5504, 20.1006, and 20.4603 mm, against printed values of 17.550, 20.100, and 20.460 mm. The wide-end image height is well below the 21.63 mm semi-diagonal of the full-frame format. Relative to $f\tan\omega$, the real distortion at the printed field is −19.27 % at the wide end, −7.67 % at the intermediate state, and −6.12 % at the telephoto end.

The third-order coefficient reproduces the printed V = 0.2663 when the aspheric A4 terms are included. The spherical surfaces alone give 0.7573. By group at the wide end, L1 contributes +0.418, and L4 −0.193 is the main offset. The 2A aspheric term (−0.290) and the E15 aspheric pair (−0.351 and +0.149) together reduce V by 0.491. The result sits near the lower end of the claimed range, consistent with the patent's use of a bounded rather than a minimal V (¶0071).

Because the printed image heights are pre-correction, the viewer's analysis field is not limited to the printed half-field. The data file declares no image circle, so the viewer traces the chief ray to the 21.63 mm format corner and reaches half-fields of about 58.2°, 44.5°, and 40.5° at infinity focus. Off-axis behavior in the viewer beyond the printed half-fields is an extrapolation outside the patent's evaluated field.

## 9. Image Stabilization

¶0088 states that Examples 1–4 stabilize the image by decentring the cemented lens formed by the 10th and 11th lenses perpendicular to the axis. It also notes that the stabilizing group preferably has negative power. In Example 1 this is D2 (E10 + E11, surfaces 19–21, net f = −83.44 mm), a small doublet inside L4 at modeled semi-diameters of 10.9 mm.

The paraxial image displacement per unit decentring of D2 is −0.468 at the wide end, −0.607 at the intermediate state, and −0.657 at the telephoto end. These values equal $(1-\beta_{IS})\beta_{rear}$, and the image moves opposite to the decentring. Because the stabilizing group lies behind L2 and moves with L4, its magnification changes with zoom, and a given decentring is more effective toward the telephoto end. Canon specifies optical IS with a 5.5-stop rating (manufacturer figure). The decentring range and the stabilization performance are not published in the patent and are not modeled in the data file.

## 10. Conditional Expressions

The patent's Table 1 (PDF p. 21) lists the conditions for Example 1. Values below are recomputed from the prescription; the claim and range columns refer to the broadest ranges in the claims and ¶0036, ¶0057, ¶0073, and ¶0079.

| Condition | Expression | Range | Example 1 (computed) | Table 1 | Satisfied |
|---|---|---|---|---|---|
| (1) | St/TDt | 0.05–0.45 | 0.3876 | 0.388 | Yes |
| (1T) | St/TDt | 0.050–0.405 | 0.3876 | — | Yes |
| (2) | fG1/f1 | 0.30–0.98 | 0.8199 | 0.8199 | Yes |
| (2T) | fG1/f1 | 0.30–0.86 | 0.8199 | — | Yes |
| (3) | nd1m | 1.90–2.40 | 1.91082 | 1.91082 | Yes |
| (4) | νd1m | 23–40 | 35.25 | 35.250 | Yes |
| (5) | θgF1m | 0.57–0.64 | 0.5824 | 0.5824 | Yes |
| (6) | \|fG1/fG2\| | 0.35–0.64 | 0.542 | 0.542 | Yes |
| (7) | \|f1\|/skm | 1.8–4.2 | 2.742 | 2.742 | Yes |
| (8) | SFX | 0.98–3.00 | 1.138 | 1.138 | Yes |
| (9) | fX/f1 | 1.0–2.4 | 1.297 | 1.297 | Yes |
| (10) | \|f1\|/fLRw | 0.4–0.7 | 1.195 | 0.527 | See note |
| (11) | fw/fR | 0.15–0.40 | 0.224 | 0.224 | Yes |
| (12) | V | 0.2–1.0 | 0.266 | 0.266 | Yes |
| (13) | ωw (°) | 45–60 | 54.532 | — | Yes |
| (14) | \|f3/f2\| | 0.2–1.0 | 0.658 | — | Yes |

Example 1 also satisfies every narrower (a) and (b) range of ¶0049, ¶0051, ¶0092, and ¶0093, except condition (10) as defined.

**Condition (10) discrepancy.** Claim 9 and ¶0052 define condition (10) as $|f1|/fLRw$, the first group's focal length divided by the combined wide-end focal length of the groups behind the stop. For Example 1 that ratio is 36.383 / 30.4398 = 1.195, outside the claimed 0.4–0.7. The printed 0.527 is instead $|f1|/fR$ = 36.383 / 68.9923, using the last group's focal length. All four examples follow the same pattern: computed from Table 1's own entries, $|f1|/fLRw$ is 1.195, 1.112, 1.222, and 1.443 for Examples 1–4, while the printed values 0.527, 0.504, 0.596, and 0.568 equal $|f1|/fR$. The prose of ¶0069 also writes the denominator as "fRw". The patent is internally inconsistent on this condition; the prescription itself is unaffected, and the discrepancy is reported rather than resolved here.

**Other textual slips.** ¶0079 says condition (14) is normalized by L4's focal length, whereas the formula and Table 1 context use f2; the formula is followed. ¶0041 refers to "Tdw" where TDt is meant.

## 11. Verification Summary

All quantities below were recomputed from the prescription in the data file by an independent sequential paraxial trace, cross-checked with a separately coded ABCD matrix method, and compared with the patent at printed precision.

| Quantity | Wide | Intermediate | Telephoto | Patent |
|---|---|---|---|---|
| EFL (mm) | 15.4881 | 24.1147 | 27.1601 | 15.488 / 24.114 / 27.160 |
| Paraxial BFD (mm) | 13.2709 | 13.2702 | 13.2714 | 13.270 |
| First vertex to image (mm) | 140.159 | 129.781 | 129.963 | 140.161 / 129.781 / 129.964 |
| Real chief-ray image height (mm) | 17.5504 | 20.1006 | 20.4603 | 17.550 / 20.100 / 20.460 |
| Group focal lengths (mm) | −36.3828, 71.6765, −47.1741, 27.1457, 68.9924 | | | −36.383, 71.676, −47.174, 27.146, 68.992 |

The track differs from the printed lens length by −0.002 mm at the wide end and −0.001 mm at the telephoto end, within the rounding of the printed gaps. Table 1's derived quantities (TD, St, Sw, fG1, fG2, fLRw, fLRt, fR, V, and the group magnifications) reproduce within printed-precision tolerances. The telephoto β2 (−13.056 against printed −13.051) has the widest tolerance because L2 is nearly afocal there.

**Implemented-model notes.** The stop diameter is not published. The data file uses the printed F2.9 to set a zoom-dependent iris, giving real-ray stop radii of 8.062 / 10.158 / 10.966 mm (paraxial 7.894 / 9.779 / 10.462 mm); agreement with F2.9 is a calibration, not independent evidence of a diaphragm size. All semi-diameters are modeled. No cover glass or filter is tabulated, so none is modeled, and the last air space is the printed back focus. The LensVisualizer engine (`buildLens`) reproduces the same station focal lengths (15.4881 / 24.1147 / 27.1601 mm) and an F-number of 2.90 at each station. The marketed 16–28 mm f/2.8 figures remain separate from the design's 15.49–27.16 mm F2.9.

## 12. Design Heritage and Context

The patent situates itself among Canon's negative-lead wide zooms. Its background cites JP 2019-135552 A and JP 2019-191307 A for negative–positive–subsequent-group zooms, and JP 2022-126058 A for a design with negative groups at both ends for a shorter length at large aperture (¶0002–¶0005). It notes that negative-lead designs are commonly chosen beyond a 90° field because they ease wide-end aberration correction (¶0003). Against that background, the patent's distinguishing claims concern the front-group structure and power split (conditions (1) and (2)), with the dependent claims bounding the residual distortion left for electronic correction (claim 11).

The four numerical examples trace a small design space around one layout: a four-element L1, a single-lens L2, a single-lens focus group L3, a stop-led rear group, and a fixed last lens. Examples 1 and 4 have five groups; Example 2 divides the rear group into four groups (seven in total, ¶0029) and Example 3 into three (six in total, ¶0031). Examples 2–4 place the front-group asphere on a thin resin layer, whereas Example 1 uses a direct glass asphere. Example 1 has the shortest wide-end focal length of the four (15.488 mm, against 16.475–17.423 mm) and the widest printed field, yet the smallest printed distortion coefficient (V = 0.2663, against 0.2697, 0.3148, and 0.2865).

## 13. Sources

1. Japan Patent Office. *JP 2024-101615 A*, "ズームレンズおよび撮像装置" (Zoom Lens and Image Pickup Apparatus), applicant Canon Inc., inventor 齋藤 慎一郎; application 2023-5613 filed January 18, 2023; published July 30, 2024. Cited by paragraph (¶), by PDF page for the numerical examples (pp. 15–20), Table 1 (p. 21), and Figs. 1–2 (p. 24).
2. Canon Inc. (Japan). "【交換レンズ】RF16-28mm F2.8 IS STM 機種仕様." Canon support FAQ, answer 105228. https://faq.canon.jp/app/answers/detail/a_id/105228/ (accessed September 29, 2026).
3. Canon Inc. "表現の幅を広げる超広角ズームレンズ“RF16-28mm F2.8 IS STM”を発売." Press release, January 23, 2025, distributed via PR TIMES. https://prtimes.jp/main/html/rd/p/000001076.000013980.html (accessed September 29, 2026).
4. Canon Europe. "Canon RF 16-28mm F2.8 IS STM — Specifications." https://www.canon-europe.com/lenses/rf-16-28mm-f2-8-is-stm/specifications/ (accessed September 29, 2026).
5. Canon Hong Kong. Product announcement for the RF16-28mm F2.8 IS STM, January 23, 2025. https://hk.canon/en/consumer/rf16-28mm-f2-8-is-stm-embargo/news (accessed September 29, 2026).
6. Canon U.S.A. "RF16-28mm F2.8 IS STM." Product page. https://www.usa.canon.com/shop/p/rf16-28mm-f2-8-is-stm-lens (accessed September 29, 2026).
7. Canon Singapore. "Canon's Latest Lens Redefines a New RF Standard," January 23, 2025. https://sg.canon/en/consumer/latest-lens-redefines-a-new-rf-standard/news (accessed September 29, 2026).
8. Video SALON. "キヤノン、ズーム全域F2.8の超広角ズームレンズ「RF16-28mm F2.8 IS STM」." https://videosalon.jp/news/canon_rf16-28mm (accessed September 29, 2026). Secondary source for extended barrel lengths only.
9. Optical glass catalogs of OHARA (S-series), HOYA, Schott, HIKARI, CDGM, and Sumita, as distributed with the *opticalglass* 2.0.2 Python package (M. Hayford); catalog coordinates computed at 587.56, 486.13, 656.27, and 435.83 nm.
10. W. T. Welford, *Aberrations of Optical Systems* (Bristol: Adam Hilger, 1986), for the Seidel and first-order chromatic sum conventions used in Sections 3, 6, 7, and 8.
11. Canon Marketing Japan. Official January 23, 2025 [press release](https://corporate.jp.canon/newsroom/newsrelease/2025/pr-0123), including the downloadable optical construction diagram at 16 mm; cross-checked against the [Japanese product specifications diagram](https://personal.canon.jp/product/camera/rf/rf16-28-f28/spec) on October 1, 2026.
