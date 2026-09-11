## Patent Reference and Design Identification

**Patent:** US 2021/0231930 A1\
**Priority:** JP 2020-012968, January 29, 2020\
**Filed:** January 15, 2021\
**Published:** July 29, 2021\
**Inventor:** Shunsuke Miyagishima\
**Applicant / Assignee:** FUJIFILM Corporation\
**Title:** *Imaging Lens and Imaging Apparatus*\
**Embodiment analyzed:** Example 1

The modeled prescription is Example 1, identified in ¶0082 and Figure 1 of the patent. The patent gives a three-functional-group wide-angle lens in which G1 is positive and fixed, G2 is positive and moves for focusing, and G3 is negative and fixed. Example 1 contains 13 glass elements and three cemented interfaces, corresponding to ten air-separated optical components. The LensVisualizer data retains this numerical embodiment at its native scale.

The production correlation fixed for this analysis is the FUJIFILM FUJINON GF 30mm f/3.5 R WR. The correlation is not a manufacturer statement that the production lens is Example 1; it is an authorial identification supported by convergent source facts:

1. Fujifilm specifies 13 elements in 10 groups, including two aspherical and two ED elements; Example 1 has 13 elements, ten air-separated components, and two elements with aspheres on both faces.
2. Fujifilm markets the lens as 30 mm f/3.5; the patent publishes f = 30.890 mm and FNo. = 3.51 for Example 1.
3. Fujifilm publishes an approximately 84–84.7° angle of view; Example 1 publishes 84.2° at infinity.
4. Fujifilm describes an internal-focus system; Example 1 focuses by translating only G2 toward the object while G1 and G3 remain fixed relative to the image plane (¶0082).
5. The patent priority date precedes Fujifilm’s June 30, 2020 product announcement and late-July 2020 launch timing.

The marketed 30 mm and f/3.5 values are therefore kept separate from the design values. The computed paraxial EFL of the final data file is 30.890120992212 mm, consistent with the patent’s rounded 30.890 mm. No uniform scaling is applied.

Two source issues are preserved explicitly. First, ¶0058 calls the first negative lens of G2 “L11”; Figure 1, ¶0059, ¶0062, and the numerical prescription establish that this is L21, which is the label used in the data file. Second, the rendered Table 1 page places nd = 1.73800 and νd = 32.33 on surface 19, the L31/L32 cemented interface; a parsed-text displacement that can associate those values with surface 20 is not followed. Table 1 and Table 16 also disagree on Conditional Expression 10: the symmetric L12 radii make the expression exactly 0, while Table 16 prints 0.006. Neither source value is silently altered.

## Optical Architecture

Example 1 is best described as a three-functional-group wide-angle internal-focus prime rather than by forcing it into a classic named lineage. From object to image the power sequence is positive G1, positive G2, and negative G3. Independent d-line paraxial computation gives group focal lengths of +213.929847 mm, +44.568242 mm, and −100.430521 mm respectively. These are functional-group powers; they are not the same quantity as the ten marketed/air-separated groups recorded by `groupCount`.

G1 contains two negative lenses followed by two positive lenses. The patent uses the negative front lenses to obtain the wide field while controlling distortion and off-axis ray angles, then restores positive group power with the rear singlets (¶0053–0057). G2 contains two negative-positive cemented pairs, the aperture stop between them, and a rear positive aspherical singlet. This entire five-element group translates rigidly during focus (¶0059–0062, ¶0082). G3 contains a positive-negative cemented pair followed by a negative singlet and a rear positive singlet; the group remains stationary and is negative in aggregate (¶0063–0064).

The patent optional parallel plate PP at surfaces 25–26 is excluded from the ordinary sequential model because it represents a filter/cover-glass class optical member that the patent itself permits to be omitted (¶0049). Its d-line optical-path effect is retained by replacing the source S24-to-Sim geometry with an air-equivalent rear spacing of 22.941704641350 mm. This gives a normalized S1-to-image-plane track of 121.341704641350 mm without introducing a sensor-cover element into the lens prescription.

Under the project’s explicit architectural definitions, the design is neither telephoto nor retrofocus: the verified patent vertex TTL/EFL ratio is 3.185484447, and BFL/EFL is 0.742703613. The wide field therefore does not justify using “retrofocus” as a synonym for this layout.

## Element-by-Element Analysis

### L11 — Neg. Meniscus (2× Asph)

nd = 1.85108, νd = 40.12. Glass: Q-LASFH58S equivalent (catalog proxy; vendor unresolved). f = −22.654508 mm (standalone air–air).

L11 is the object-side negative meniscus and carries both front-group aspheres. The patent specifically favors an aspherical first lens because it provides degrees of freedom for distortion, astigmatism, and coma correction (¶0056). Its isolated negative power is strong, but it operates inside a weakly positive G1 rather than as an independent negative front group.

### L12 — Biconcave Negative

nd = 1.49700, νd = 81.59. Glass: 497816 low-dispersion class. f = −67.090837 mm (standalone air–air).

L12 is the biconcave second lens of G1. The patent attributes this position to reduction of off-axis ray angle and suppression of sagittal coma and focus-related angle-of-view change (¶0054). Its νd = 81.59 coordinate is the highest-dispersion-control value in G1 and satisfies the patent's preference for a second lens with νd ≥ 60 (¶0070). The production specification's two ED elements correlate naturally with L12 and L24, but that mapping is an author inference rather than a patent label.

### L13 — Biconvex Positive

nd = 1.78470, νd = 26.29. Glass: S-TIH23-class (OHARA exact-coordinate candidate). f = +103.347804 mm (standalone air–air).

L13 is the first positive singlet in the rear half of G1. The patent describes plural positive singlets in G1 as a means of strengthening the group's positive power while retaining the two negative front lenses needed for the wide field (¶0054). Its low νd = 26.29 contrasts sharply with L12 and is the v3 term used in Conditional Expression 6.

### L14 — Biconvex Positive

nd = 1.78590, νd = 44.21. Glass: S-LAH51-class (OHARA coordinate candidate). f = +41.022976 mm (standalone air–air).

L14 is the rear positive lens of G1 and ends the fixed front group with a convex image-side surface. The patent identifies that rear convex surface as favorable for distortion and astigmatism correction (¶0055). Together the four elements yield a computed G1 focal length of +213.929847 mm, so the group is positive but much weaker than the moving G2.

### L21 — Negative Meniscus

nd = 1.79952, νd = 42.25. Glass: S-LAH52Q-class (OHARA coordinate candidate). f = −33.159271 mm (standalone air–air).

L21 begins the moving G2 as the negative member of the L21/L22 cemented pair. The patent describes this negative-positive cemented construction as a way to control field curvature and astigmatism while containing chromatic aberration within the focus group (¶0059–0060). Its standalone focal length is not the focal length of the cemented pair.

### L22 — Positive Meniscus

nd = 1.62299, νd = 58.16. Glass: S-BSM15-class (OHARA exact-coordinate candidate). f = +23.748995 mm (standalone air–air).

L22 is the positive partner of L21 and lies immediately before the aperture stop. The L21/L22 cemented pair has a computed net focal length of +93.314977 mm, despite the much stronger isolated air–air powers of its two components. This distinction is important: the interface index transition materially changes the pair's in-situ power.

### L23 — Negative Meniscus

nd = 1.95375, νd = 32.32. Glass: 954323 class (S-LAH98 / TAFD45L exact-coordinate candidates). f = −19.762090 mm (standalone air–air).

L23 follows the aperture stop and is the negative member of the second G2 cemented pair. Its very high nd = 1.95375 and moderate νd = 32.32 coordinate has exact matches in more than one vendor catalog, so the data file retains a vendor-neutral 954323-class description. The patent's stop-centered G2 arrangement places negative-positive cemented pairs on both sides of the stop (¶0062).

### L24 — Positive Meniscus

nd = 1.49700, νd = 81.59. Glass: 497816 low-dispersion class. f = +25.779390 mm (standalone air–air).

L24 is the positive, low-dispersion partner of L23. Its coordinate is identical to L12 at nd = 1.49700 and νd = 81.59. The L23/L24 pair is net negative in isolation, with a computed cemented focal length of −77.914006 mm, even though L24 itself is a strong positive element. This is another case where standalone element power and cemented net power must not be conflated.

### L25 — Pos. Meniscus (2× Asph)

nd = 1.58135, νd = 59.38. Glass: Q-SK52S equivalent (qualified spectral proxy). f = +35.250879 mm (standalone air–air).

L25 is the rear positive singlet of G2 and carries two aspherical surfaces. The patent assigns the rear positive singlet in G2 a role in spherical-aberration correction (¶0059–0060). Its production glass identity remains unknown. The data uses Q-SK52S only as a coordinate-compatible spectral proxy, with the residuals documented below.

### L31 — Positive Meniscus

nd = 2.00272, νd = 19.32. Glass: E-FDS2-class (HOYA exact-coordinate candidate). f = +33.722243 mm (standalone air–air).

L31 begins fixed G3 as the positive member of the L31/L32 cemented pair. Its nd = 2.00272, νd = 19.32 coordinate is a very high-index, high-dispersion combination. The patent states only that G3 should contain both positive and negative power so that chromatic correction remains manageable (¶0063); a more specific supplier or anomalous-dispersion interpretation is not supported.

### L32 — Biconcave Negative

nd = 1.73800, νd = 32.33. Glass: S-NBH53V-class (OHARA exact-coordinate candidate). f = −22.806542 mm (standalone air–air).

L32 is the negative partner cemented to L31. The L31/L32 pair is net negative, with a computed cemented focal length of −68.704914 mm. The data file's S-NBH53V-class annotation records an exact-coordinate catalog candidate without asserting that Fujifilm used that melt.

### L33 — Negative Meniscus

nd = 1.94595, νd = 17.98. Glass: FDS18-class (HOYA exact-coordinate candidate). f = −84.984736 mm (standalone air–air).

L33 is a separate negative meniscus following the cemented pair. Its isolated focal length is relatively weak compared with L32, but it adds negative power within G3 while preserving an air gap before the rear positive element. No patent passage assigns a unique aberration to L33 alone, so its role is described conservatively as part of the negative rear-group balance.

### L34 — Biconvex Positive

nd = 1.56883, νd = 56.06. Glass: 569560 crown class (H-BaK7GT / BAC4 near-coordinate candidates). f = +72.516912 mm (standalone air–air).

L34 is the final positive element and the largest modeled rear aperture. Its positive power partially offsets the preceding negative members while the complete G3 remains negative. A fresh catalog audit resolves a very close 569560 crown family without establishing Fujifilm’s supplier. CDGM H-BaK7GT has nd = 1.56883 and νd = 56.04, only 0.02 below the patent Abbe number, while HOYA BAC4 is cross-referenced to the same 569-560 family. The data therefore records a class-level near-coordinate candidate rather than a procurement claim.

## Glass Identification and Selection

The patent publishes d-line refractive index and Abbe number but does not name glass suppliers. The data file therefore uses coordinate classes or candidate catalog names rather than claiming Fujifilm’s actual melts. Exact coordinate coincidence is treated as a catalog result, not as proof of procurement.

| Element(s) | nd | νd | Data-file glass annotation | Interpretation |
|---|---:|---:|---|---|
| L11 | 1.85108 | 40.12 | Q-LASFH58S equivalent (catalog proxy; vendor unresolved) | Exact coordinate candidate; supplier unproven. |
| L12, L24 | 1.49700 | 81.59 | 497816 low-dispersion class | Vendor-neutral high-Abbe class; production ED mapping is inferred. |
| L13 | 1.78470 | 26.29 | S-TIH23-class (OHARA exact-coordinate candidate) | Exact coordinate candidate; supplier unproven. |
| L14 | 1.78590 | 44.21 | S-LAH51-class (OHARA coordinate candidate) | Close coordinate candidate. |
| L21 | 1.79952 | 42.25 | S-LAH52Q-class (OHARA coordinate candidate) | Close coordinate candidate. |
| L22 | 1.62299 | 58.16 | S-BSM15-class (OHARA exact-coordinate candidate) | Exact coordinate candidate; supplier unproven. |
| L23 | 1.95375 | 32.32 | 954323 class (S-LAH98 / TAFD45L exact-coordinate candidates) | Multiple exact vendor matches; vendor unresolved. |
| L25 | 1.58135 | 59.38 | Q-SK52S equivalent (qualified spectral proxy) | Catalog proxy only: Δnd≈+0.00151, Δνd≈+0.13; production supplier unknown. |
| L31 | 2.00272 | 19.32 | E-FDS2-class (HOYA exact-coordinate candidate) | Exact coordinate candidate; supplier unproven. |
| L32 | 1.73800 | 32.33 | S-NBH53V-class (OHARA exact-coordinate candidate) | Exact coordinate candidate; supplier unproven. |
| L33 | 1.94595 | 17.98 | FDS18-class (HOYA exact-coordinate candidate) | Exact coordinate candidate; supplier unproven. |
| L34 | 1.56883 | 56.06 | 569560 crown class (H-BaK7GT / BAC4 near-coordinate candidates) | Very close catalog family; supplier unproven. |

The data file intentionally carries no authored `nC`, `nF`, `ng`, or `dPgF` values. The patent does not publish those per-element quantities, and the coordinate matches are not strong enough to promote a guessed vendor’s spectral data into the prescription. Consequently this analysis makes no apochromatic or anomalous-partial-dispersion claim.

## Focus Mechanism

The patent’s preferred Example 1 mechanism is internal focus by rigid translation of G2 alone. G1 and G3 remain stationary relative to the image plane, and G2 moves toward the object as focus approaches (¶0051, ¶0064, ¶0082). The two variable gaps on either side of G2 therefore change by equal and opposite amounts: DD8 decreases while DD17 increases, keeping DD8 + DD17 fixed at 11.410 mm.

The LensVisualizer focus model is explicitly `CONSTRAINED_RECONSTRUCTION`. Infinity and 1.2 m are patent-published states. The production minimum-focus endpoint at 0.32 m is not in the patent table; it is solved in code from Fujifilm’s published minimum focus distance while preserving the single rigid G2 degree of freedom.

| State | focusT | DD8 (mm) | DD17 (mm) | G2 objectward travel (mm) | Provenance |
|---|---:|---:|---:|---:|---|
| Infinity | 0 | 6.190000000000 | 5.220000000000 | 0 | Patent Table 2 |
| 1.2 m | 0.266666666667 | 5.791000000000 | 5.619000000000 | 0.399000000000 | Patent Table 2 |
| 0.32 m | 1 | 4.108859949689 | 7.301140050311 | 2.081140050311 | Constrained reconstruction |

The intermediate coordinate is `0.32 / 1.2 = 0.266666666667`, because the focus control maps infinity to 0 and the authored close-focus distance to 1. Piecewise interpolation between these three keyframes is a LensVisualizer modeling behavior, not a set of additional patent-published mechanical positions.

At the reconstructed 0.32 m endpoint, the verified paraxial magnification is −0.148453872×; its magnitude is consistent with Fujifilm’s rounded 0.15× production specification. This agreement is an endpoint cross-check, not evidence that the patent publishes the 0.32 m spacing.

## Aspherical Surfaces

Example 1 has four aspherical surfaces: 1A and 2A on L11, and 16A and 17A on L25. The patent uses radial height `h` and writes the base conic term as

`Zd = C h² / [1 + sqrt(1 − KA C² h²)] + Σ A_m h^m`.

LensVisualizer uses `sqrt(1 − (1+K) C² h²)`, so the conversion is `K = KA − 1`. Table 3 gives `KA = 1` for all four surfaces; therefore the authored conic constant is `K = 0` on 1A, 2A, 16A, and 17A. The patent also uses non-zero odd radial powers. Because `h` is radial height, those odd terms remain rotationally symmetric and do not imply decenter or anamorphism.

The prescription is not scaled, so the polynomial coefficients are copied without a dimensional scale transform. If a scale factor had been applied, each `A_p` would require division by `s^(p−1)`; here `s = 1`. A3 is published as zero on all four surfaces and is omitted from the data file under the current schema.

| Coefficient | 1A | 2A | 16A | 17A |
|---|---:|---:|---:|---:|
| K | 0 | 0 | 0 | 0 |
| A4 | -2.8886874E-06 | -1.9266855E-05 | +1.1426426E-10 | +2.1286361E-05 |
| A5 | -6.5306725E-07 | -6.8136315E-07 | -5.7428082E-06 | -1.1336064E-05 |
| A6 | +2.0127359E-08 | -5.1386769E-08 | -5.1973760E-08 | +3.2648953E-06 |
| A7 | +1.3907664E-09 | +1.5435168E-09 | +2.9635184E-07 | -7.1293049E-07 |
| A8 | +1.3104211E-11 | -1.8823117E-10 | -1.8237844E-08 | +1.0856552E-07 |
| A9 | -2.3166044E-12 | +1.2882017E-11 | -9.4716911E-09 | -4.7133356E-09 |
| A10 | -1.5905045E-13 | -5.8433378E-14 | +8.3598439E-10 | -1.9454358E-09 |
| A11 | -3.5069163E-15 | -9.2461790E-14 | +2.1406144E-10 | +3.3012812E-10 |
| A12 | -4.0112500E-17 | +1.1586160E-14 | -2.2603381E-11 | +1.3422800E-12 |
| A13 | -1.3482658E-18 | -1.3601845E-15 | -2.7933578E-12 | -3.7812852E-12 |
| A14 | +2.3430938E-18 | +2.3396195E-17 | +3.2181986E-13 | +9.4470544E-14 |
| A15 | +7.8738693E-20 | +4.6200395E-18 | +2.2872157E-14 | +3.1663551E-14 |
| A16 | +6.0688836E-21 | -9.1617300E-19 | -2.6332566E-15 | -1.7021310E-15 |
| A17 | -5.8425280E-22 | +7.7555717E-20 | -1.0554255E-16 | -9.4195383E-17 |
| A18 | -6.8412335E-23 | -3.5245709E-22 | +9.1228254E-18 | +6.0289050E-18 |
| A19 | +4.7409996E-24 | -1.7353689E-22 | +6.2511786E-19 | +2.0266550E-19 |
| A20 | -7.1601272E-26 | +3.7488999E-24 | -3.9051285E-20 | -1.2179780E-20 |

At the verified modeled semi-diameters, the polynomial departures from the spherical base are −0.509422 mm at 1A, −1.549889 mm at 2A, −0.025182 mm at 16A, and +0.027131 mm at 17A. These departures are computed at inferred model apertures, not at patent-published clear apertures; Example 1 provides no semi-diameter table. The front L11 pair therefore carries the stronger modeled aspheric departure, consistent with the patent’s explicit use of the first aspherical lens for wide-field aberration control, while the L25 pair provides smaller high-order corrections around the rear of the moving focus group.

## Chromatic Correction Strategy

The chromatic strategy can be discussed only at the d-line/Abbe level supported by the source. In G1, L12 has νd = 81.59 while L13 has νd = 26.29; the patent formalizes this dispersion contrast through Conditional Expression 6 and describes the high-Abbe second lens as favorable for chromatic correction (¶0070–0071). In G2, L24 repeats the same 1.49700 / 81.59 coordinate and is cemented to the much higher-index, lower-Abbe L23. These are strong achromatizing pairings in the ordinary Abbe-number sense.

Fujifilm’s production specification states that the commercial lens contains two ED elements. The two νd = 81.59 elements, L12 and L24, are the natural correlation candidates, but the patent does not label them “ED” and does not publish partial-dispersion data. The analysis therefore stops at that correlation and does not infer APO behavior, anomalous partial dispersion, or a specific supplier family.

## Conditional Expressions

The patent supplies thirteen inequalities intended to keep the wide-angle, compact, internally focusing architecture within useful power, shape, and dispersion ranges. Table 16 reports Example 1 inside every stated bound. The independent extraction audit re-evaluated all thirteen expressions from the rounded prescription; every inequality remains satisfied, with Expression 10 retaining the patent-internal contradiction noted below.

| Expr. | Quantity | Claimed range | Patent Table 16 | Independent check |
|---:|---|---|---:|---|
| 1 | f2/f1 | −0.5 < value < 0.5 | 0.209 | Pass |
| 2 | \|f3/f2\| | 1 < value < 3 | 2.258 | Pass |
| 3 | TTL/f1 | −0.1 < value < 0.55 | 0.460 | Pass |
| 4 | fA/f1 | −0.1 < value < 0.2 | 0.144 | Pass |
| 5 | f3/f1 | −1 < value < 0.5 | −0.471 | Pass |
| 6 | ν12 − ν3 | 25 < value < 45 | 34.57 | Pass |
| 7 | (1 − β2²)β3² | 1.5 < value < 2.5 | 2.189 | Pass |
| 8 | β3 | 1.4 < value < 1.55 | 1.486 | Pass |
| 9 | (R12 − R11)/(R12 + R11) | −1 < value < −0.5 | −0.774 | Pass |
| 10 | (R22 + R21)/(R22 − R21) | −1.5 < value < 0.1 | **0.006** | Pass; Table 1 recomputes to 0 |
| 11 | (Rstr − Rstf)/(Rstr + Rstf) | −1 < value < −0.3 | −0.645 | Pass |
| 12 | f2f/f2r | 0 < value < 2.5 | 1.784 | Pass |
| 13 | dd/TTL2 | 0.09 < value < 0.17 | 0.128 | Pass |

Expression 10 is the only material source inconsistency. Table 1 gives L12 radii of −66.86544 mm and +66.86544 mm, making the numerator exactly zero; the rendered Table 16 page unambiguously prints 0.006. Both values fall inside the claimed inequality, so the contradiction does not change the design’s pass/fail status and is left unresolved rather than “corrected.”

## Verification Summary

The final TypeScript arrays reproduce the rounded Example 1 d-line prescription without scale change. Independent sequential height/reduced-angle tracing and ABCD multiplication agree to below 1×10⁻¹² on the basis-ray columns. The computed EFL is 30.890120992212 mm; the computed BFL from S24 is 22.942204454640 mm. The surface-by-surface Petzval sum using φ/(n·n′) is +0.002671790292615 mm⁻¹, whose reciprocal is +374.280872 mm under that stated convention. The reciprocal is not relabeled as a physical best-focus field radius.

The patent publishes the stop position but not its physical aperture. The modeled `STO.sd = 7.538629140837 mm` is therefore an inference calibrated so that the computed entrance pupil gives the patent’s infinity FNo. = 3.51. Likewise, every lens-surface semi-diameter is inferred rather than transcribed. The authored apertures were checked at infinity, the published 1.2 m state, and the reconstructed 0.32 m state for positive edge thickness, actual rim slope, conic validity, shared-band cross-gap intrusion, and exact off-axis ray containment. No layout parameter is used to hide an invalid optical geometry.

The normalized 44×33 format half-diagonal is 27.390007 mm. In the exact meridional model, the infinity chief ray reaches that corner at a 41.672162° half-field, close to but distinct from the patent’s 42.1° half-field because the latter is a published angular specification rather than a directly published image-height row.

## Sources / References

- US 2021/0231930 A1, *Imaging Lens and Imaging Apparatus*, Shunsuke Miyagishima / FUJIFILM Corporation, Example 1, especially Figures 1–3, ¶0049–0086, Tables 1–3, and Table 16.
- FUJIFILM, GF30mmF3.5 R WR specifications: https://www.fujifilm-x.com/en-us/products/lenses/gf30mmf35-r-wr/specifications/
- FUJIFILM, product announcement, June 30, 2020: https://www.fujifilm-x.com/global/news/portable-high-resolution-lens-ideally-suited-for-landscape-and-everyday-adventures-announcing-fujinon-gf30mmf3-5-r-wr/
- FUJIFILM, GF30mmF3.5 R WR lens manual: https://dl.fujifilm-x.com/support/manual/lenses/lens_gf30mmf35_r_wr_manual_02.pdf
- HIKARI optical-glass catalog: https://www.hikari-g.co.jp/optical_glass/catalog/
- OHARA optical-glass catalog: https://oharacorp.com/
- HOYA optical-glass data: https://www.hoya-opticalworld.com/english/datadownload/index.html
- SCHOTT optical-glass data: https://www.schott.com/en-us/products/optical-glass-p1000267/downloads
- CDGM optical-glass data: https://www.cdgmgd.com/
- Sumita optical-glass data: https://sumita-opt.co.jp/en/download/

### Patent-rim and glass audit (2026-09-11 UTC)

Fig. 1 (PDF p.2) was inspected at 600 dpi and rotated clockwise. The 98.40 mm glass span gives 42.51 µm/px. Clean optical rims agree within roughly 15%; the repeated 16.8 mm automatic readings through G2 are the group bracket, not glass. SDs were retained after surface and image-circle checks.

The catalog now includes Hikari Q-LASFH58S from its published nine-term power series, matching L11 at 1.85108 / 40.12. L25 uses the existing Q-SK52S curve at 1.58286 / 59.51 as an explicitly qualified spectral proxy for the patent 1.58135 / 59.38. All 13 elements resolve to catalog dispersion. Neither annotation establishes a historical supplier or a molding process. Source: [Hikari optical glass catalog](https://www.hikari-g.co.jp/optical_glass/catalog/document/HIKARI_Catalog.pdf), PDF pp.179 and 189.
