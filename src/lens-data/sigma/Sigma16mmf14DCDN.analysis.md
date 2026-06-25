# Sigma 16mm F1.4 DC DN | Contemporary

## Patent Reference and Design Identification

**Patent:** JP 2018-205527 A (特開2018-205527)
**Application Number:** 特願2017-110648 (P2017-110648)
**Filed:** 2017-06-05 (平成29年6月5日)
**Published:** 2018-12-27 (平成30年12月27日)
**Applicant:** 株式会社シグマ (Sigma Corporation)
**Inventors:** Hiromichi Ochiai (落合 裕道), Ryosuke Sato (佐藤 良祐)
**Title:** 大口径広角レンズ ("Large-aperture wide-angle lens")
**Classification:** IPC G02B 13/04, G02B 13/18
**Worked examples:** 6 (実施例1–6)
**Embodiment analyzed:** Numerical Example 1 (数値実施例1)

JP 2018-205527 A discloses a fast wide-angle mirrorless lens whose stated purpose is to keep the optical system compact, cover a comparatively large imaging sensor, and make the focus group light enough for smooth contrast autofocus (¶0003–0012). Numerical Example 1 is the closest match to the production Sigma 16mm F1.4 DC DN | Contemporary.

The identification rests on convergent evidence rather than on a single dimensional coincidence.

1. **Element and group count.** Example 1 has 16 glass elements in 13 air-spaced groups, matching Sigma's published construction for the production lens. The patent's Example 2 also has 16 elements but separates the front cemented pair into another air-spaced group, while Examples 4 and 5 use different front-group constructions.

2. **Special-glass count.** Sigma publishes three FLD elements, two SLD elements, and two molded-glass aspherical elements for the lens. Example 1 contains three elements at nd = 1.43700, νd = 95.10, corresponding to the FLD positions L14, L17, and L42; two elements at nd = 1.59282, νd = 68.63, corresponding to the SLD positions L21 and L31; and two aspherical surfaces, on the image sides of L13 and L23.

3. **Focal length, aperture, and image height.** Example 1 tabulates f = 16.45 mm, F-number = 1.46, full field 2ω = 84.21°, and image height Y = 14.20 mm. The production lens is marketed as 16 mm F1.4 for APS-C; the patent's Ø28.4 mm image circle is consistent with that format.

4. **Focus mechanism.** The patent moves only the positive third group G3 toward the object for close focus (¶0022, ¶0076). Sigma's production description identifies an inner-focus design with a light focus group and stepping-motor autofocus.

5. **Close-focus consistency.** The patent only tabulates an intermediate 1:40 reproduction state, but an independent paraxial solve using the same single-G3 movement reaches β = -1/9.9 at a front-vertex object distance of 141.970 mm. Added to the cover-glass-folded optical track of 108.318 mm, this gives 250.288 mm from image plane to object, effectively reproducing Sigma's published 0.25 m minimum focus distance and 1:9.9 maximum magnification.

The data file therefore transcribes Example 1 without focal-length scaling. The 16 mm production value is treated as the marketed nominal focal length, while the patent design focal length remains 16.446 mm by paraxial trace. The patent's final plane-parallel plate is not included as a lens element in the data file; its optical path is folded into the final air gap as described in the Verification Summary.

## Optical Architecture

The lens is a large-aperture retrofocus wide-angle design for mirrorless cameras. It is not a long-back-focus SLR retrofocus design in the older sense; instead, the patent uses a short-flange mirrorless layout with a deliberately structured negative front group to control stop diameter, chief-ray angle, field curvature, and focus-group mass.

From object side to image side, the prescription is organized as follows:

- **G1 — negative**, f₁ = -25.91 mm. This group is divided into:
  - **G1A — negative**, f₁A = -25.04 mm, a five-element front collector.
  - **G1B — positive**, f₁B = +168.02 mm, divided again into:
    - **G1Bp — positive**, f₁Bp = +28.72 mm.
    - **G1Bm — negative**, f₁Bm = -25.81 mm.
- **Aperture stop S.**
- **G2 — positive**, f₂ = +24.01 mm, the principal rear converging group.
- **G3 — positive**, f₃ = +85.41 mm, the single moving focus group.
- **G4 — negative**, f₄ = -82.42 mm, the rear exit-angle and field-control group.

The key architectural feature is the positive G1B group inserted inside the otherwise negative front group. The patent explains that G1A first raises and redirects the marginal bundles, after which G1B reduces the angle of the axial marginal ray before the stop, limiting the stop diameter (¶0025, ¶0038). Splitting G1B into a positive front part and a negative rear part shifts the G1B image-side principal plane object-ward, further helping stop-size control (¶0038, ¶0045).

G1B also creates a chromatic-correction site ahead of the stop. In a more ordinary retrofocus arrangement, axial color is mostly corrected by positive power behind the stop. Here, because the marginal ray height in G1B is still large, the low-dispersion positive lens L17 can share axial-color correction with the negative G1Bm pair (¶0039).

The rear half of the lens is compact but not optically simple. G2 supplies the main convergence behind the stop, G3 provides focus with a single positive meniscus, and G4 restores a more sensor-friendly exit geometry. The patent's condition (9), EXP/IH = 3.56, places the exit pupil about 50.5 mm in front of the image plane, a moderate value for a fast 16 mm-class wide-angle intended for digital sensors.

A surface-by-surface Petzval calculation using Σ φ/(n · n′) over the 30 powered surfaces gives P = 4.2266 × 10⁻³ mm⁻¹, corresponding to a Petzval radius of about 236.6 mm and P · f = 0.0695. This modest residual is consistent with the patent's emphasis on using the G1Bp/G1Bm division to balance positive and negative Petzval contributions (¶0046–0047).

## Element-by-Element Analysis

The element shapes below follow the signed radii in Numerical Example 1 and agree with the patent's prose description of Example 1 (¶0070–0077). Standalone focal lengths are thick-lens, in-air values computed from each element's two radii and center thickness; cemented doublet behavior in situ is discussed separately where relevant.

### G1A — front negative collector

**L11 — Positive Meniscus, convex to object.**
nd = 1.51680, νd = 64.20. Glass: BSC7 / BK7-class borosilicate crown, six-digit code 517/642. f = +349.8 mm.

L11 is a weak positive meniscus at the front of the design. Its optical power is low, but it forms the first refracting surface seen by the wide-angle field and begins the transition into the strongly negative front collector. The patent nevertheless groups it within the overall negative G1A block (¶0070).

**L12 — Negative Meniscus, convex to object.**
nd = 2.00100, νd = 29.13. Glass: TAFD55-class high-index glass, six-digit code 001/291. f = -32.6 mm.

L12 supplies the first strong negative power. The very high index allows the negative meniscus to achieve substantial divergence without the still steeper radii that a lower-index glass would require. This is a standard trade in fast retrofocus front groups: high index reduces curvature burden, while the high dispersion must be corrected elsewhere.

**L13 — Negative Meniscus, convex to object, image-side asphere.**
nd = 1.58913, νd = 61.25. Glass: M-BACD5N-class molded barium crown, six-digit code 589/613. f = -69.7 mm.

L13 is the second negative meniscus in the front collector. Its image-side surface is aspherical. This position is useful for controlling field-dependent aberrations and distortion before the ray bundles have been compressed by the stop-side groups. The patent identifies the surface as aspherical and supplies coefficients, but it does not explicitly assign the surface to one named aberration.

**L14 + L15 — cemented doublet, biconcave negative plus biconvex positive.**

- **L14 — Biconcave Negative.** nd = 1.43700, νd = 95.10. Glass: FCD100-class FLD fluorite-equivalent glass, six-digit code 437/951. f = -59.1 mm.
- **L15 — Biconvex Positive.** nd = 2.00100, νd = 29.13. Glass: TAFD55-class high-index glass, six-digit code 001/291. f = +54.5 mm.

This doublet closes G1A. It is unusual because the anomalous low-dispersion member is the negative element, while the positive partner is the very high-index, high-dispersion glass. The cemented pair is only weakly positive in air as a combined unit, so its principal role is not raw power but localized chromatic correction and aberration balancing at a high ray height near the rear of the front collector.

### G1B — positive sub-group within the front negative group

#### G1Bp — positive front pair

**L16 — Biconvex Positive.**
nd = 1.91082, νd = 35.25. Glass: TAFD35-class high-index lanthanum glass, six-digit code 911/353. f = +55.8 mm.

L16 begins the re-converging action of G1B. It has enough positive power to reduce the ray angle before the stop, while its high refractive index keeps the surface radii from becoming excessively steep.

**L17 — Biconvex Positive.**
nd = 1.43700, νd = 95.10. Glass: FCD100-class FLD fluorite-equivalent glass, six-digit code 437/951. f = +53.8 mm.

L17 is the low-dispersion positive element in G1Bp. The patent states that using low-dispersion glass in the positive G1Bp lenses allows axial chromatic aberration to be corrected within G1B, rather than leaving that correction only to the positive groups behind the stop (¶0039, ¶0052–0054). L16 and L17 have a mean Abbe number of 65.18, satisfying condition (6).

#### G1Bm — negative rear pair

**L18 — Biconcave Negative.**
nd = 1.51742, νd = 52.15. Glass: E-CF6 (HOYA). f = -47.1 mm.

L18 is the first negative element of G1Bm. It participates in the re-diverging part of G1B and contributes negative Petzval power.

**L19 — Negative Meniscus, concave to object.**
nd = 1.67270, νd = 32.17. Glass: E-FD5 (HOYA). f = -63.6 mm.

L19 finishes the G1Bm pair. Together L18 and L19 pull the G1B image-side principal plane forward and help prevent the stop from becoming excessively large. The patent explicitly links the negative G1Bm construction to both stop-diameter reduction and Petzval control (¶0038, ¶0045–0047).

### Aperture stop

The stop is placed between G1 and G2 at surface 18. The patent marks this surface as the aperture stop and gives an infinity design F-number of 1.46. The production lens is marketed as F1.4 and uses a nine-blade rounded diaphragm.

### G2 — principal positive group behind the stop

**L21 + L22 — cemented doublet, biconvex positive plus negative meniscus.**

- **L21 — Biconvex Positive.** nd = 1.59282, νd = 68.63. Glass: FCD505 (HOYA), SLD low-dispersion crown. f = +27.4 mm.
- **L22 — Negative Meniscus, concave to object.** nd = 1.74950, νd = 35.33. Glass: S-LAM7 (OHARA). f = -65.6 mm.

This doublet is the strongest positive unit behind the stop. It follows the conventional low-dispersion-positive / higher-dispersion-negative pattern for axial color correction. The doublet also supplies much of the convergence that lets the following focus group remain a single small positive element.

**L23 — Biconvex Positive, image-side asphere.**
nd = 1.69350, νd = 53.20. Glass: M-LAC130-class molded lanthanum crown, six-digit code 694/532. f = +45.4 mm.

L23 completes G2 and carries the second aspherical surface. It sits just behind the stop in a converging beam, a placement well suited to controlling spherical aberration and coma from the fast F1.4-class aperture. The patent identifies the rear surface of L23 as aspherical but does not name a single aberration target.

### G3 — single-element inner-focus group

**L31 — Positive Meniscus, convex to object.**
nd = 1.59282, νd = 68.63. Glass: FCD505 (HOYA), SLD low-dispersion crown. f = +85.4 mm.

L31 is the entire focus group. The patent makes this a design objective: a one-lens positive focus group keeps the moving mass low, which is advantageous for contrast AF and small wobbling movements during video or continuous autofocus (¶0055–0062). The low-dispersion glass choice also limits focus-dependent chromatic change.

### G4 — rear negative group

**L41 — Negative Meniscus, convex to object.**
nd = 1.80518, νd = 25.46. Glass: SF6 / S-TIH6-class dense flint, six-digit code 805/255. f = -45.9 mm.

L41 begins the final negative group. Its negative power contributes to chief-ray control near the sensor and forms part of the rear balancing group governed by condition (3).

**L42 + L43 — cemented doublet, biconvex positive plus negative meniscus.**

- **L42 — Biconvex Positive.** nd = 1.43700, νd = 95.10. Glass: FCD100-class FLD fluorite-equivalent glass, six-digit code 437/951. f = +38.4 mm.
- **L43 — Negative Meniscus, concave to object.** nd = 1.90366, νd = 31.32. Glass: S-LAH95 (OHARA). f = -56.7 mm.

The rear doublet is net negative in situ as part of G4. L42 is the third FLD element in the system, paired with a high-index flint. The pair supplies rear chromatic correction while also helping hold the exit geometry within the patent's EXP/IH condition.

## Glass Identification and Selection

The patent gives nd and νd, not vendor glass names. The names below are therefore catalog-class identifications, with exact vendor identity left nonexclusive unless the code is a well-known exact match. Six-digit codes are used as the more stable identifier. Sigma's own published construction count establishes which elements are FLD, SLD, and molded aspherical elements.

| Element(s) | nd | νd | Six-digit code | Catalog class used in analysis | Optical role |
|---|---:|---:|---:|---|---|
| L11 | 1.51680 | 64.20 | 517/642 | BSC7 / BK7-class crown | Weak positive front meniscus |
| L12, L15 | 2.00100 | 29.13 | 001/291 | TAFD55-class high-index glass | Strong compact front-group power |
| L13 | 1.58913 | 61.25 | 589/613 | M-BACD5N-class molded barium crown | Front aspherical meniscus |
| L14, L17, L42 | 1.43700 | 95.10 | 437/951 | FCD100-class FLD fluorite-equivalent glass | Secondary-spectrum and axial-color correction |
| L16 | 1.91082 | 35.25 | 911/353 | TAFD35-class high-index lanthanum glass | G1Bp positive power |
| L18 | 1.51742 | 52.15 | 517/522 | E-CF6 (HOYA) | G1Bm negative power |
| L19 | 1.67270 | 32.17 | 673/322 | E-FD5 (HOYA) | G1Bm negative meniscus |
| L21, L31 | 1.59282 | 68.63 | 593/686 | FCD505 (HOYA), SLD low-dispersion crown | Rear positive doublet member and focus group |
| L22 | 1.74950 | 35.33 | 750/353 | S-LAM7 (OHARA) | G2 doublet flint |
| L23 | 1.69350 | 53.20 | 694/532 | M-LAC130-class molded lanthanum crown | Rear G2 asphere |
| L41 | 1.80518 | 25.46 | 805/255 | SF6 / S-TIH6-class dense flint | G4 negative front member |
| L43 | 1.90366 | 31.32 | 904/313 | S-LAH95 (OHARA) | G4 rear negative member |

The chromatic strategy is distributed. L17 gives the pre-stop positive G1Bp group a low-dispersion element at high marginal-ray height. L21 corrects the main rear positive doublet. L31 keeps the focus group from adding excessive focus-dependent color. L42 provides a rear low-dispersion positive member in the G4 cemented doublet. This is a sophisticated achromatizing strategy, but the patent does not publish line indices or partial-dispersion ratios, so the analysis should not describe the design as apochromatic.

## Focus Mechanism

Focusing is by inner focus. The third group G3, consisting only of L31, moves toward the object as focus shifts from infinity to near distance; the front groups, stop, G2, and G4 remain fixed (¶0022, ¶0076).

The patent tabulates one near state, labelled 40倍距離. In context this is a 1:40 reproduction state, β ≈ -0.025, not the production minimum focus distance. At that patent state, d23 decreases and d25 increases by the same amount, confirming that a single rigid group is moving between two fixed neighbors.

| State | d23 / gap before G3 | d25 / gap after G3 | G3 object-ward travel | Object distance from front vertex | Magnification |
|---|---:|---:|---:|---:|---:|
| Infinity | 3.3044 mm | 2.0917 mm | 0 | ∞ | 0 |
| Patent 1:40 state | 2.8751 mm | 2.5210 mm | 0.4293 mm | 635.6343 mm | -0.025 |
| Data-file close endpoint | 1.6098 mm | 3.7863 mm | 1.6946 mm | 141.970 mm | -0.101 |

The data file uses the last row as its close-focus endpoint because it is the paraxial solution that matches Sigma's published 0.25 m / 1:9.9 production specification. The match is not forced by changing the group architecture; it is the same two-gap conservation pattern extended farther in the same direction. The sum d23 + d25 remains 5.3961 mm in all states.

## Aspherical Surfaces

The patent uses the standard conic-plus-even-polynomial sag form (¶0132):

$$z = \frac{(1/r)y^2}{1 + \sqrt{1 - (1+K)(y/r)^2}} + A_4y^4 + A_6y^6 + A_8y^8 + A_{10}y^{10} + A_{12}y^{12} + A_{14}y^{14} + A_{16}y^{16}$$

Here K is the standard conic constant directly: K = 0 is a spherical base and K = -1 is a paraboloidal base. There is no evidence that the patent is using a shifted κ convention.

**Surface 6 — rear of L13.** K = -1.28713.

| Coefficient | Value |
|---|---:|
| A4 | +3.03098 × 10⁻⁵ |
| A6 | -1.10729 × 10⁻⁷ |
| A8 | +1.95111 × 10⁻⁹ |
| A10 | -1.86588 × 10⁻¹¹ |
| A12 | +9.78438 × 10⁻¹⁴ |
| A14 | -2.62044 × 10⁻¹⁶ |
| A16 | +2.69032 × 10⁻¹⁹ |

This is a strong front-group asphere on a negative meniscus. Its base conic is hyperboloidal under the standard convention. Its position is most relevant to distortion, coma, and other field-dependent aberrations introduced before the stop.

**Surface 23 — rear of L23.** K = 0.

| Coefficient | Value |
|---|---:|
| A4 | +1.05989 × 10⁻⁵ |
| A6 | -8.95266 × 10⁻⁹ |
| A8 | +8.67772 × 10⁻¹² |
| A10 | +3.47060 × 10⁻¹⁴ |
| A12 | -1.61820 × 10⁻¹⁶ |
| A14 | 0 |
| A16 | 0 |

This asphere sits behind the stop on a positive element in a converging beam. Its placement is suited to spherical aberration and coma correction at the fast design aperture. Sigma describes the production lens as using two molded glass aspherical elements.

## Chromatic Correction Strategy

The patent's color-correction strategy is tied to the G1B architecture. The positive G1Bp group includes low-dispersion glass so that axial color can be corrected on both sides of the stop, not only by the rear positive group (¶0039). This is the central chromatic distinction between the patent's design and a more ordinary retrofocus layout.

The rear side of the stop uses two separate chromatic sites. The L21/L22 cemented doublet in G2 is the main positive achromatizing unit. The L42/L43 cemented doublet in G4 places another FLD positive element near the exit side, where lateral color and chief-ray control are sensitive. The moving focus element L31 is also low dispersion, reducing focus-dependent color shift.

Because the patent does not publish C-line, F-line, g-line, or partial-dispersion data, the glass assignments should be read as catalog-class identifications from nd/νd and Sigma's published element counts, not as proof of a fully specified apochromatic correction model.

## Conditional Expressions

The patent states nine conditions and tabulates corresponding values for all six examples. Example 1 satisfies each condition. Independent paraxial checks reproduce conditions (1)–(8) directly and reproduce condition (9) as EXP/IH = 3.557, matching the patent's rounded 3.56.

| # | Expression | Patent bound | Patent Ex. 1 | Independent check |
|---|---|---:|---:|---:|
| (1) | f₁/f | -2.4 to -0.6 | -1.58 | -1.575 |
| (2) | f₁A/f₁B | -0.3 to 0.0 | -0.15 | -0.149 |
| (3) | f₁A/f₄ | 0.1 to 0.5 | 0.30 | 0.304 |
| (4) | D1B/D1S | 0.5 to 0.75 | 0.63 | 0.630 |
| (5) | β₁Bp | -1.8 to -0.6 | -1.17 | -1.171 |
| (6) | ν₁Bp | 50 to 80 | 65.18 | 65.18 |
| (7) | f₂/f₃ | 0.1 to 0.44 | 0.28 | 0.281 |
| (8) | SI/f₃ | 0.52 to 1.0 | 0.66 | 0.658 |
| (9) | EXP/IH | 2.5 to 4.5 | 3.56 | 3.557 |

The group focal lengths used here are the patent's group definitions, not standalone element powers. In particular, the individual members of the cemented groups can have different standalone powers from their in-situ contributions because their cemented interfaces refract into another glass rather than into air.

## Verification Summary

The revised transcription was checked with an independent paraxial y-ν matrix trace.

- Infinity EFL = 16.44623 mm, matching the patent's 16.45 mm after rounding.
- Group focal lengths reproduce the patent table: G1 = -25.91 mm, G2 = +24.01 mm, G3 = +85.41 mm, G4 = -82.42 mm; G1A = -25.04 mm, G1B = +168.02 mm, G1Bp = +28.72 mm, G1Bm = -25.81 mm.
- The final plane-parallel plate at surfaces 31–32 was removed from the data file and folded into the last air gap as 15.5341 + 2.0000 / 1.51680 + 1.0000 = 17.8527 mm. This preserves the paraxial optical path while avoiding a sensor-cover-glass element in the LensVisualizer data.
- The patent's physical front-vertex-to-image length is 109.00 mm including the plane-parallel plate. The folded data-file optical track is 108.318 mm.
- The MFD endpoint in the data file is the solved β = -1/9.9 state: d23 = 1.6098 mm and d25 = 3.7863 mm. This keeps d23 + d25 constant and gives a sensor-to-object distance of 250.288 mm in the same paraxial model.
- Petzval sum = 4.2266 × 10⁻³ mm⁻¹, Petzval radius ≈ 236.6 mm, P · f = 0.0695.
- The inferred semi-diameters pass the project constraints used for this data file: sd/|R| < 0.90, front/rear element SD ratio ≤ 1.25, edge thickness ≥ 0.5 mm at the checked rim, and cross-gap sag intrusion ≤ 90% of the relevant air gap.

## Sources

- JP 2018-205527 A (特開2018-205527), Sigma Corporation, "大口径広角レンズ," filed 2017-06-05 and published 2018-12-27. Numerical Example 1 supplies the surface prescription, aspherical coefficients, variable focus spacings, group focal lengths, and conditional-expression table.
- Sigma Corporation, "16mm F1.4 DC DN | Contemporary," official product page. Current product specifications list the available mounts, APS-C DC format, 16 elements in 13 groups, 3 FLD elements, 2 SLD elements, 2 molded glass aspherical elements, 9 rounded diaphragm blades, F16 minimum aperture, 0.25 m minimum focus distance, 1:9.9 maximum magnification, and 67 mm filter size.
- HOYA Optical Glass Catalogue and HOYA glass cross-reference resources, used for six-digit glass-code interpretation and HOYA-class matches such as FCD100, TAFD55, and M-BACD5N.
- OHARA optical glass catalog and Schott optical glass data resources, used as cross-checks for common crown/flint and dense-flint class naming. Where the patent's nd/νd values do not uniquely identify a vendor, the analysis uses class language rather than an exclusive catalog assertion.
