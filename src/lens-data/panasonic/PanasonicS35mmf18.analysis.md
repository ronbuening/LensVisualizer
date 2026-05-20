# Optical Analysis: Panasonic Lumix S 35mm F1.8

## CN 216772097U — Example 1 (实施例一)

**Patent:** CN 216772097 U (Utility Model), "大口径内对焦式光学系" (Large-Aperture Inner-Focus Optical System)  
**Applicant:** 厦门松下电子信息有限公司 (Xiamen Panasonic Electronic Information Co., Ltd.)  
**Inventors:** 郑艺丹, 陈汉钊, 詹晓晴  
**Filed:** 2021-10-11 &ensp;|&ensp; **Granted:** 2022-06-17  
**Embodiment analyzed:** Example 1 (第一实施例, ¶0096–0120)

---

## 1. Patent-to-Production Identification

The following convergent evidence links Example 1 of CN 216772097U to the production Panasonic Lumix S 35mm F1.8 (model S-S35, L-mount):

1. **Element and group count.** The prescription contains 11 glass elements in 9 air-separated groups — matching Panasonic's published specification exactly.
2. **Aspherical elements.** Three elements carry aspherical surfaces (L18, L21, L31), totaling 6 aspherical surfaces. Panasonic markets "3 aspherical lenses."
3. **ED elements.** Three elements use glasses with νd > 65 (L12 at νd = 81.6; L14 at νd = 81.6; L16 at νd = 68.6), matching the "3 ED lenses" specification.
4. **Focal length.** The patent's computed EFL at infinity is 33.845 mm — consistent with a marketed 35 mm focal length, with the small difference accounted for by the typical convention of rounding to the nearest standard designation.
5. **Maximum aperture.** The patent states F/1.871; marketing rounds to f/1.8.
6. **Minimum focus distance.** 0.24 m in the patent; 0.24 m (9.5″) in Panasonic's specification.
7. **Field angle.** The patent gives 2ω ≈ 65.2° at infinity. Panasonic publishes a 63° angle of view, which agrees after digital distortion correction reduces the effective FOV.
8. **Image circle.** The aberration diagrams show maximum image height H = 21.63 mm, yielding a 43.26 mm diagonal — the full-frame 35 mm format.
9. **Focus mechanism.** The patent describes inner focus via a single negative element (Group 2) moving along the optical axis, consistent with Panasonic's description of a linear-motor driven inner-focus design.
10. **Patent timing.** Filed October 2021; the S-S35 was announced November 9, 2021 and shipped in late November 2021 — typical for a utility model filed just before product launch.

---

## 2. Optical Architecture

The design is a three-group inner-focus system with a positive–negative–positive power distribution:

- **Group 1 (G1):** Positive. Comprises two subgroups (G1a and G1b) separated by the aperture stop. G1a is the front collector; G1b is a post-stop corrector relay. Together they form the "fixed" assembly — neither subgroup moves during focus.
- **Group 2 (G2):** Negative. A single concave element that translates along the optical axis for focusing. Its negative power diverges the converging beam from G1, and the magnitude of that divergence controls the image conjugate.
- **Group 3 (G3):** Positive (weakly). A biconvex element followed by a negative meniscus; together they serve as a field-flattening and telecentric relay that delivers the image to the sensor.

Between the optical system and the image plane, a flat cover glass (CG, nd = 1.51680, νd = 64.2) is present. Per the patent (¶0095), this CG is optional and models the camera's sensor stack.

### Verified system parameters (paraxial ray trace)

| Parameter | Value |
|---|---|
| EFL (infinity) | 33.845 mm |
| F-number (infinity) | F/1.871 |
| Total track (S1 to image) | 101.0 mm |
| Back focal distance (from last glass to image, incl. CG) | 15.52 mm |
| Half-field angle | 32.6° |
| Image circle diameter | 43.26 mm |
| MFD | 0.24 m |
| Focus travel (G2 shift, ∞ → MFD) | 6.92 mm |
| Petzval radius | −447 mm |

---

## 3. Element-by-Element Analysis

### Group G1a — Front Collector (elements L11 through L15)

#### L11 — Positive Meniscus, Convex to Object

nd = 1.94595, νd = 18.0. Glass: FDS18 (HOYA, 946180). f = +88.7 mm.

L11 is the front element and uses the most extreme glass in the design: an ultra-high-index, ultra-high-dispersion flint with nd approaching 1.95 and νd = 18.0. The six-digit glass code 946180 places it at the far upper-right edge of the nd–νd glass map, and HOYA FDS18 supplies a coefficient-backed public match. Its purpose is to provide positive power with minimal surface curvature, keeping the front element diameter manageable for a fast f/1.8 lens. The high index means even a gentle meniscus shape (R1 = 66.55, R2 = 313.09) contributes meaningful convergence. The very low Abbe number (νd = 18.0) means L11 introduces strong chromatic aberration, but this is by design — it is the first half of a deliberate chromatic balancing strategy with the ED elements L12 and L14 downstream.

#### L12 — Negative Meniscus, Convex to Object (ED)

nd = 1.49700, νd = 81.6. Glass: S-FPL51 class ED fluorophosphate crown (OHARA) or equivalent. f = −35.2 mm.

L12 is the first ED element. Its very low refractive index and very high Abbe number make it the chromatic antidote to L11: it introduces strong negative power with low dispersion, partially neutralizing L11's color error while simultaneously diverging the marginal ray bundle. The large air gap after L12 (surfaces 4–5, totaling 13.83 mm) is the widest gap in the front group and serves to separate the chromatic correction pair (L11 + L12) from the aberration-correcting cemented doublet (L13 + L14) that follows. This gap also provides the physical clearance needed for the steeply diverging beam from L12's strongly curved rear surface (R = 15.70 mm).

#### L13 + L14 — Cemented Doublet (Negative + Positive)

**L13** (front of doublet): nd = 1.68893, νd = 31.2. Glass: H-ZF13 (CDGM) — dense flint. f = −28.2 mm (standalone in air).  
**L14** (rear of doublet): nd = 1.49700, νd = 81.6. Glass: S-FPL51 class ED fluorophosphate crown. f = +55.9 mm (standalone in air).  
**Cemented doublet:** f = −67.3 mm (thick-lens trace).

A cemented doublet joined at R = −318.07 mm (nearly flat junction). A thin cement layer (d = 0.01 mm, nd = 1.56732) sits at the junction — a standard UV-curing optical adhesive.

L13 is a negative element with its concave surface facing the object (R6 = −18.29 mm). It acts as a strong diverger that controls the ray height entering L14 and introduces negative chromatic aberration of the flint type. The glass, H-ZF13 (CDGM), is a dense flint with nd = 1.68893 and νd = 31.2. L14 is the second ED element in the system, paired with L13 to form an achromatic cemented doublet. The flint–crown pairing (L13 flint + L14 ED crown) corrects longitudinal chromatic aberration locally within G1a while also contributing to Petzval curvature correction. The overall doublet carries net negative power (f ≈ −67 mm), continuing the divergence trend established by L12.

The deliberate placement of two ED elements (L12 and L14) in G1a — both using the same S-FPL51-class glass — establishes the chromatic correction foundation for the entire system. The ultra-dense flint L11 at the front and the dense flint L13 provide the dispersive counterbalance.

#### L15 — Biconvex Positive

nd = 1.72916, νd = 54.7. Glass: lanthanum crown, H-LAK53A (CDGM) / S-LAL8 class (OHARA), code 729/547. f = +42.3 mm.

L15 is the last element before the aperture stop. As a biconvex element (R10 = +102.22, R11 = −43.24), it provides strong positive power that re-converges the beam diverged by L12 and the L13+L14 doublet. Its lanthanum crown glass offers a good balance of high index (minimizing surface curvature for given power) and moderate dispersion. Positioned immediately ahead of the stop, L15 controls the marginal ray height at the diaphragm and helps balance spherical aberration from the front group.

### Aperture Stop

The aperture stop sits between G1a and G1b (surface 12, R = ∞). The Panasonic S 35mm F1.8 uses a 9-blade rounded diaphragm. In the patent prescription, the stop semi-diameter determines the entrance pupil size; at f/1.871, the entrance pupil semi-diameter is approximately 9.04 mm (EP diameter ≈ 18.1 mm).

### Group G1b — Post-Stop Corrector (elements L16 through L18)

#### L16 + L17 — Cemented Doublet (Positive + Negative)

**L16** (front of doublet): nd = 1.59282, νd = 68.6. Glass: ED phosphate crown, code 593/686 (probable S-FPM2 (OHARA) / CDGM equivalent). f = +32.9 mm (standalone in air).  
**L17** (rear of doublet): nd = 1.80610, νd = 33.3. Glass: dense lanthanum flint, S-LAH55 (OHARA) / CDGM equivalent, code 806/333. f = −55.5 mm (standalone in air).  
**Cemented doublet:** f = +77.3 mm (thick-lens trace).

Joined at R = −26.19 mm with a 0.01 mm cement layer (nd = 1.56732). L16 is the third ED element in the system. It provides the low-dispersion crown side of a classic crown–flint achromatic doublet (ED crown leading, flint following). L17 provides the high-dispersion chromatic counterbalance. As a standalone element in air, L17 has moderate negative power (f ≈ −55.5 mm). However, within the cemented interface — where light enters from L16's glass (nd = 1.59282) rather than from air — the front-surface refraction is much weaker, and L17's effective contribution flips to very weakly positive. This reversal has no effect on the system-level ray trace (which uses the correct surrounding media at each interface) but illustrates how the cemented interface redistributes power between the doublet's members. Positioned just after the stop, this doublet corrects chromatic aberration in the converging post-stop beam and controls coma and lateral color that would otherwise degrade off-axis performance.

#### L18 — Positive Meniscus, Convex to Image (Aspherical)

nd = 1.51602, νd = 56.5. Glass: 516565 — precision-glass-molded (PGM) crown; no exact public catalog match. f = +76.3 mm.  
Aspherical surfaces: S18 (front) and S19 (rear) — both aspherical.

L18 is the first of three aspherical elements. Both of its surfaces carry aspheric departures (K = 0 on both; polynomial coefficients A4 through A10 on each). The front surface (R = −72.24) has negative A4 = −1.554×10⁻⁵, which modifies the refraction profile in the outer zones to control higher-order spherical aberration generated by the high-power front group. The rear surface (R = −26.00) has positive A4 = +4.737×10⁻⁶ with sign-alternating higher-order terms, providing a complementary correction.

L18 occupies the critical position at the rear of G1 — immediately before the variable gap that separates G1 from the focus element G2. Its aspherical surfaces fine-tune the wavefront leaving the fixed assembly before it encounters the moving focus lens.

### Group G2 — Focus Element (L21)

#### L21 — Negative Meniscus, Concave to Image (Aspherical)

nd = 1.51602, νd = 56.5. Glass: 516565 — PGM crown, same glass as L18 and L31; no exact public catalog match. f = −69.3 mm.  
Aspherical surfaces: S20 (front) and S21 (rear) — both aspherical.

L21 is the sole focusing element. It is a negative meniscus (R20 = +214.21, R21 = +30.51) with its concave surface facing the image — a shape that diverges the converging beam from G1 and extends the back focal distance. Both surfaces are aspherical, and the rear surface (S21) carries particularly strong A4 = +6.948×10⁻⁵ and A6 = −2.235×10⁻⁷ coefficients that provide the primary correction for focus-dependent spherical aberration variation.

**Focus kinematics.** L21 translates rearward (toward the image) when focusing from infinity to close distance. The two variable air gaps that bound L21 change symmetrically:

| Conjugate | d1 (G1 → G2) | d2 (G2 → G3) | d1 + d2 |
|---|---|---|---|
| Infinity | 1.800 mm | 7.856 mm | 9.656 mm |
| 1/40× magnification | 2.523 mm | 7.133 mm | 9.656 mm |
| MFD (0.24 m) | 8.721 mm | 0.935 mm | 9.656 mm |

The sum d1 + d2 = 9.656 mm is rigorously conserved across the entire focus range, confirming that G2 slides within a fixed-length barrel with no change in overall optical length. This is a hallmark of a well-designed inner-focus system: the lens does not change physical length during focusing, and the linear motor only needs to drive a single, lightweight element (≈ 2.7 mm center thickness of low-density glass) — enabling the fast, quiet AF performance Panasonic advertises.

At MFD, the focal length drops to 30.29 mm (a 10.5% reduction) and the effective f-number rises slightly to F/1.93. Despite the substantial EFL change, the field angle shifts by only 0.62° (65.17° → 64.55°), less than 1% — indicating that the inner-focus design effectively suppresses focus breathing. This is the metric that matters for video: while the paraxial focal length changes as G2 moves, the angular field of view seen by the sensor remains nearly constant, preventing the distracting "pumping" effect visible in lenses with poor breathing control. This well-suppressed breathing is consistent with Panasonic's video-oriented marketing emphasis for the S-series f/1.8 primes.

### Group G3 — Field Flattener / Relay (L31, L32)

#### L31 — Biconvex Positive (Aspherical)

nd = 1.51602, νd = 56.5. Glass: 516565 — PGM crown, same glass as L18 and L21; no exact public catalog match. f = +55.9 mm.  
Aspherical surfaces: S24 (front) and S25 (rear) — both aspherical.

L31 is the third and final aspherical element. It is a biconvex lens (R24 = +300.00, R25 = −31.65) with most of its power concentrated on the strongly curved rear surface. The front surface is nearly flat (R = 300 mm) and carries the stronger aspherical departure (A4 = +2.874×10⁻⁵), compensating for its weak base curvature — the aspheric polynomial does the refractive work that the gentle sphere cannot. The rear surface has a smaller A4 = +1.480×10⁻⁵ layered on top of its much stronger spherical base, fine-tuning the correction at the field edge. Positioned after the focus group, L31 receives a beam whose convergence angle varies with focus distance; its aspherical surfaces must therefore provide correction that is robust across the full focus range.

#### L32 — Negative Meniscus, Concave to Object

nd = 1.51680, νd = 64.2. Glass: N-BK7 (Schott) / H-K9L (CDGM) class, code 517/642. f = −70.1 mm.

L32 is the final optical element. As a negative meniscus (R26 = −26.14, R27 = −96.53) with its concave surface facing the object, it diverges the converging beam from L31, extending the back focal distance to 12.42 mm (to the CG front) while simultaneously flattening residual Petzval curvature. The net power of G3 (L31 + L32 combined) is weakly positive at f ≈ +169 mm, so G3 acts primarily as a field corrector rather than a power group.

The choice of BK7-class glass for L32 — the most common and inexpensive optical glass — reflects that this element operates in a region of low ray heights and gentle curvatures, where material cost can be minimized without compromising performance.

---

## 4. Glass Selection Summary

The design uses 7 distinct glass types across 11 elements. The patent does not name glass vendors, and the Xiamen Panasonic origin suggests CDGM (China) as the probable primary supplier, though OHARA, HOYA, and Schott equivalents exist for most types.

| Element(s) | nd | νd | Code | Class | Role |
|---|---|---|---|---|---|
| L11 | 1.94595 | 18.0 | 946180 | FDS18 (HOYA) | High-index positive collector; extreme nd minimizes front diameter |
| L12, L14 | 1.49700 | 81.6 | 497/816 | ED fluorophosphate (S-FPL51 class) | Primary chromatic correction; two ED elements in front group |
| L13 | 1.68893 | 31.2 | 689/312 | Dense flint, H-ZF13 (CDGM) | Achromatic partner for L14 in cemented doublet |
| L15 | 1.72916 | 54.7 | 729/547 | Lanthanum crown, H-LAK53A (CDGM) / S-LAL8 class | High-index pre-stop converger |
| L16 | 1.59282 | 68.6 | 593/686 | ED phosphate crown (probable S-FPM2 (OHARA) / CDGM equivalent) | Third ED element; post-stop chromatic correction |
| L17 | 1.80610 | 33.3 | 806/333 | Dense lanthanum flint, S-LAH55 (OHARA) / CDGM equivalent | Achromatic partner for L16 in cemented doublet |
| L18, L21, L31 | 1.51602 | 56.5 | 516565 | PGM moldable crown (unmatched — probable proprietary low-Tg glass) | All three aspherical elements; single moldable material |
| L32 (+ CG) | 1.51680 | 64.2 | 517/642 | BK7 class — H-K9L (CDGM) / N-BK7 (Schott) | Field flattener; cover glass |

**Chromatic strategy.** The design employs three ED elements (νd > 65) paired with high-dispersion flints in two achromatic doublets (L13+L14 in G1a, L16+L17 in G1b). L11's extreme low-Abbe glass (νd = 18.0) works with L12 (νd = 81.6) as a separated chromatic pair at the front of the system. This distributed correction — one separated pair plus two cemented doublets — is typical of modern fast wide-angle primes and provides good control of both primary and secondary chromatic aberration.

**Aspherical glass selection.** All three aspherical elements use the same nd = 1.51602, νd = 56.5 glass. This uniformity strongly suggests a single precision-glass-molded (PGM) material — a low-softening-temperature glass optimized for high-volume asphere production. Using one material for all molded elements simplifies the manufacturing toolchain and reduces cost. The moderate index and Abbe number indicate a borosilicate or barium crown composition suitable for glass molding.

**Optical cement.** Both cemented doublets (L13+L14 and L16+L17) use a thin adhesive layer (d = 0.01 mm, nd = 1.56732, νd = 42.8). This is consistent with standard UV-curing optical cements such as Norland NOA 61 or equivalent. The cement's refractive index (1.567) falls between the glasses it bonds, minimizing Fresnel reflection losses at the cemented interfaces.

---

## 5. Focus Mechanism

The Lumix S 35mm F1.8 uses **inner focus** via a single moving element:

- **Moving group:** G2 (L21 only) — a lightweight negative meniscus.
- **Fixed groups:** G1 (L11–L18) and G3 (L31–L32) remain stationary.
- **Drive:** Linear motor (per Panasonic product documentation), consistent with the low mass and short travel of a single-element focus group.
- **Travel:** 6.92 mm rearward travel from infinity to MFD.
- **Gap conservation:** The sum of the two variable air gaps (d1 + d2 = 9.656 mm) is constant at all focus positions, confirming that the total optical length does not change. This is mechanically advantageous: the lens barrel length is fixed, and only L21 translates within the barrel.

The single-element inner-focus approach is a key feature of the Panasonic S-series f/1.8 prime family (24 mm, 35 mm, 50 mm, 85 mm), all of which share a similar architectural philosophy. The lightweight focus element enables the fast, near-silent autofocus performance emphasized in Panasonic's video-oriented marketing.

| Focus position | Object distance | d1 (mm) | d2 (mm) | EFL (mm) | F/# | 2ω (°) |
|---|---|---|---|---|---|---|
| Infinity | ∞ | 1.800 | 7.856 | 33.845 | 1.871 | 65.17 |
| 1/40× | ~1.35 m | 2.523 | 7.133 | 33.451 | 1.878 | 65.03 |
| MFD | 0.24 m | 8.721 | 0.935 | 30.288 | 1.928 | 64.55 |

---

## 6. Aspherical Surfaces

The design contains **six aspherical surfaces** distributed across **three precision-glass-molded elements**. All use the standard even-polynomial sag equation with K = 0 (spherical base conic) on every surface:

$$Z(h) = \frac{h^2 / R}{1 + \sqrt{1 - (h/R)^2}} + A_4 h^4 + A_6 h^6 + A_8 h^8 + A_{10} h^{10}$$

**Note on surface numbering.** The aspherical coefficient table in the patent labels surfaces with a systematic offset relative to the prescription table. In Example 1, the offset is +1 (the asph data for "第19面" corresponds to prescription table surface S18*, etc.). This discrepancy was cross-verified against all four examples in the patent: Examples 1–3 each show an offset of +1 (each has one non-optical dummy flat surface, S5, before the first asphere), while Example 4 shows an offset of +2 (it has two such dummy surfaces). The root cause appears to be that the aspherical coefficient section uses a surface numbering convention from the optical design software that excludes non-optical reference planes, while the published prescription table numbers all surfaces sequentially including dummies.

The asterisk-marked surfaces in the prescription table are the authoritative identification. This is confirmed by two independent checks: (1) taking the asph labels literally would assign aspherical coefficients to flat air gaps (e.g., "第22面" → S22, which has R = ∞), which is physically impossible; and (2) the asterisk-based mapping yields exactly 3 aspherical elements (L18, L21, L31), matching the Panasonic production specification. The mapping is:

| Patent asph label | Prescription surface | Element | Position |
|---|---|---|---|
| "第19面" | S18* | L18 | Front |
| "第20面" | S19* | L18 | Rear |
| "第21面" | S20* | L21 | Front |
| "第22面" | S21* | L21 | Rear |
| "第25面" | S24* | L31 | Front |
| "第26面" | S25* | L31 | Rear |

### Aspherical coefficients

**L18 front (S18\*):** R = −72.23640 mm  
K = 0, A4 = −1.55403×10⁻⁵, A6 = −2.45467×10⁻⁸, A8 = +2.50355×10⁻¹⁰, A10 = −3.87306×10⁻¹³

**L18 rear (S19\*):** R = −26.00470 mm  
K = 0, A4 = +4.73655×10⁻⁶, A6 = −7.15905×10⁻⁹, A8 = +1.19263×10⁻¹⁰, A10 = −1.60781×10⁻¹³

**L21 front (S20\*):** R = +214.21280 mm  
K = 0, A4 = +4.97404×10⁻⁵, A6 = −2.03601×10⁻⁷, A8 = +2.89599×10⁻¹⁰

**L21 rear (S21\*):** R = +30.50850 mm  
K = 0, A4 = +6.94755×10⁻⁵, A6 = −2.23480×10⁻⁷, A8 = +2.84101×10⁻¹⁰

**L31 front (S24\*):** R = +300.00000 mm  
K = 0, A4 = +2.87359×10⁻⁵, A6 = −9.88945×10⁻⁹, A8 = −3.25614×10⁻¹¹

**L31 rear (S25\*):** R = −31.64850 mm  
K = 0, A4 = +1.48027×10⁻⁵, A6 = −6.62808×10⁻¹⁰, A8 = −4.28859×10⁻¹¹

### Interpretation of aspherical corrections

**L18 (post-stop corrector).** L18's front surface (S18*) has negative A4, which flattens the sag profile in the outer zones — this counters higher-order spherical aberration generated by the fast f/1.8 beam converging through the front group. The rear surface (S19*) has a weaker positive A4, providing a secondary correction that fine-tunes the wavefront exiting G1 before it crosses the variable gap to the focus element.

**L21 (focus element).** Both surfaces carry strong positive A4 (roughly 5–7×10⁻⁵), with sign-alternating A6 terms. These profiles are tuned to minimize the variation in spherical aberration as L21 translates during focusing. Without aspherical correction on the focus element itself, the aberration balance would shift unacceptably across the 6.92 mm focus travel — particularly critical for a lens marketed for video use, where focus racking must produce smooth, stable image quality.

**L31 (field flattener).** L31's front surface (S24*) is nearly flat (R = 300 mm) with gentle A4 = +2.87×10⁻⁵, acting primarily as a field curvature corrector. Its rear surface (S25*) has positive A4 but negative A6 and A8, creating a correction profile where the aspherical departure grows at moderate heights (driven by the positive A4 term) but rolls off at the edge of the field (where the negative higher-order terms dominate) — targeting astigmatism correction at intermediate and full field angles.

---

## 7. Conditional Expressions

The patent defines nine conditional expressions governing the design. All are satisfied by Example 1:

| Condition | Expression | Computed value | Range |
|---|---|---|---|
| (1) | D1b / D1a | 0.511 | 0.0 – 2.0 |
| (2) | D1b / L | 0.181 | 0.1 – 0.5 |
| (3) | f1a / f | 9.623 | −50 – 20 |
| (4) | f11 / f | 2.622 | 1.0 – 9.0 |
| (5) | \|f1b / f1a\| | 0.126 | < 1.5 |
| (6) | fL1 / D1b | 4.942 | 1 – 11 |
| (7) | Df / D | 0.164 | 0.10 – 0.30 |
| (8) | Nd_max − Nd_min | 0.000 | < 0.3 |
| (9) | BF / Y | 0.718 | 0.05 – 1.5 |

where: D1a = 30.20 mm (G1a axial length); D1b = 15.44 mm (G1b axial length); L = 85.48 mm (first-to-last lens surface); f = 33.845 mm (system EFL); f1a = 325.7 mm (G1a focal length); f1b = 41.0 mm (G1b focal length); f11 = 88.7 mm (L11 focal length); fL1 = 76.3 mm (L18 focal length, last element of G1); Df = 16.56 mm (G1 rear to G3 front); D = 101.0 mm (total optical length); Y = 21.63 mm (maximum image height).

Condition (8) is particularly noteworthy: Nd_max − Nd_min = 0.000, meaning the only element between G1 and G3 is L21 (focus element), and there is only one element there with a single nd. The patent states (¶0084) that this condition is beneficial for correcting spherical aberration and coma — a single-element focus group of uniform index simplifies the aberration balance during focus travel.

---

## 8. Design Context

The Panasonic Lumix S 35mm F1.8 belongs to the Lumix S f/1.8 prime series — a family of lenses (initially 24 mm, 35 mm, 50 mm, 85 mm, later joined by an 18 mm) sharing common physical dimensions, filter size (67 mm), and architectural philosophy. All use a single-element inner-focus design, enabling compact construction and fast, quiet autofocus for video applications. The S-S35 was the fourth lens in the original quartet, announced alongside firmware updates for several Lumix S zoom lenses in November 2021.

The patent was filed by Xiamen Panasonic (厦门松下), a subsidiary responsible for designing and manufacturing Panasonic's interchangeable camera lenses in China. The utility model format (实用新型) is consistent with the patent strategy used for several other Lumix S-series optics — utility models provide faster grant times and lower filing costs compared to invention patents, which is advantageous for product designs where time-to-market is critical.

---

## Sources

- CN 216772097 U, "大口径内对焦式光学系," Xiamen Panasonic Electronic Information Co., Ltd., granted 2022-06-17.
- Panasonic product page, Lumix S 35mm F1.8 (S-S35), https://www.panasonic.com/.
- Panasonic North America press release, November 9, 2021, "Panasonic Announces Compact, Lightweight LUMIX S 35mm F1.8 (S-S35)."
- OHARA optical glass catalog (2023 edition), for glass cross-reference data.
