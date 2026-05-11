# Sigma dp0 Quattro 14mm f/4 — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** JP 2016-139087 A, "結像光学系" (Imaging Optical System).
**Applicant:** Sigma Corporation (株式会社シグマ), Kawasaki, Japan.
**Inventors:** Kōno Tomoki (幸野 朋来), Ogasawara Noriyuki (小笠原 典行).
**Filed:** 2015-01-29 (priority date); **Published:** 2016-08-04.

The prescription transcribed here is **Example 2** (数値実施例２, ¶0048–0052). Four examples are disclosed; Example 2 is identified as the production embodiment for the **Sigma dp0 Quattro** fixed-lens camera through the following convergent evidence:

1. **Element and group count.** Example 2 has 11 elements in 8 air-separated groups. The production dp0 Quattro specifies 11 elements in 8 groups (Sigma product page).
2. **Focal length.** Patent EFL = 13.97 mm at infinity; the production lens is marketed as 14 mm.
3. **Maximum aperture.** Patent F-number = 4.13; the production lens is marketed as f/4.
4. **Field angle.** Patent 2ω = 90.90°; production specification states a 91° angle of view (21 mm equivalent on the 23.5 × 15.7 mm Foveon sensor).
5. **Special element counts.** The production lens is specified with 4 FLD elements, 2 SLD elements, and 2 aspherical lenses (including one wide double-sided aspheric). Example 2 has exactly 4 elements of nd = 1.43700 / νd = 95.10 (FLD-class), 2 elements with anomalous-partial-dispersion crowns (SLD-class), and 2 aspherical lenses bearing 3 aspherical surfaces.
6. **Distortion specification.** The patent claims < 1% peak-to-valley distortion across the field (¶0017), consistent with the production specification of "less than 1% distortion."
7. **Patent timing.** The patent was filed on 2015-01-29, the same month the dp0 Quattro was announced at CP+ 2015 (February 10, 2015).

All four examples share the same topology (negative–negative–positive, 11/8, inner focus on G2). Example 2 is distinguished from the others by its F-number (4.13 vs. 3.53 in Example 1, 3.97 in Example 3, 3.99 in Example 4) and the specific choice of G2 as a single biconcave element of FLD glass — matching the production camera's optical construction.

---

## Optical Architecture

The Sigma dp0 Quattro 14mm f/4 is a **retrofocus** wide-angle design consisting of three groups arranged in a **negative–negative–positive** power distribution:

- **G1** (negative, f = −18.01 mm): Two negative meniscus lenses convex to the object (L1a, L1b), functioning as the front diverging group.
- **G2** (negative, f = −127.16 mm): A single biconcave element (L2a) serving as the inner focus group.
- **G3** (positive, f = +19.33 mm): Eight elements in five air-separated subgroups — including three cemented doublets — forming the converging rear group with the aperture stop at its front.

The combined front system G1 + G2 has a focal length of f₁₂ = −13.96 mm. The ratio |f₁₂/f| = 1.00, satisfying conditional expression (2) and producing a back focal distance of BFD = 17.69 mm, or 1.27× the system EFL. This BFD is sufficient to clear the Foveon sensor's cover glass and electronics in the dp0 Quattro body while avoiding the extreme retrofocus ratio (TL/f = 5.91) that would worsen distortion. The patent explicitly targets < 1% distortion — a level that conventional retrofocus designs struggle to achieve at 2ω > 90° (¶0005–0007).

The total track length is 82.60 mm (first lens vertex to image plane at infinity focus). The image circle covers a 14.20 mm half-diagonal, corresponding to the 23.5 × 15.7 mm Foveon X3 Quattro sensor (half-diagonal ≈ 14.13 mm).

### Key Architectural Features

The design is notable for several departures from conventional retrofocus wide-angle architecture:

**First,** G1 uses only negative meniscus elements with no positive achromatizing partner. The patent explains (¶0029–0031) that inserting a positive element into G1 would over-correct distortion at intermediate field angles while under-correcting it at the edge, because the positive element's distortion contribution is largest near-axis where the marginal and chief ray heights differ least. By using only negative menisci in G1, the distortion profile across the field remains monotonic and controllable via the aspherical surfaces on L1a.

**Second,** G2 is a single lightweight element — a deliberate choice for rapid autofocus actuation (¶0027). Its weak negative power (f = −127.16 mm) means its primary role is focus correction rather than significant contribution to the overall power balance.

**Third,** G3 concentrates all the positive power and chromatic correction in a dense stack of three cemented doublets plus two singlets. Four of the eight G3 elements are FLD (near-fluorite) glass, giving the rear group exceptional chromatic correction authority.

### Flare Cut

The patent places a flare cut (フレアカット) at surface 11 (d = 1.4753 mm) between the rear of doublet Ja and the front of singlet L3c. This mechanical aperture blocks stray light from the wide-angle front group. In the data file, the flare cut is not modeled as a separate surface; its 1.4753 mm axial extent is absorbed into the air gap following L3b (data-file surface "9", total d = 3.3000 + 1.4753 = 4.7753 mm).

---

## Element-by-Element Analysis

### L1a — Negative Meniscus, Convex to Object (2× Aspherical)

nd = 1.58313, νd = 59.46. Glass: S-BAL42 (OHARA) or L-BAL42 (OHARA, low-Tg moldable variant) — barium crown. f = −26.7 mm.

L1a is the front-most element and the design's most optically critical component. It is a large-diameter, double-sided aspherical negative meniscus that the production literature describes as "a difficult-to-manufacture large-diameter aspheric lens" sitting "first in the optical series." Both surfaces carry aspherical profiles with substantial departure from their base spheres — at the estimated rim (sd ≈ 13–15 mm), surface 1 departs by approximately −1.2 mm from its spherical base, a very large figure requiring precision glass molding or CNC polishing.

The front surface (surface 1) has a spherical base (K = 0) with a dominant negative A4 coefficient (−3.97 × 10⁻⁵), which progressively reduces the surface's refractive power toward the periphery. This is the primary mechanism for the patent's < 1% distortion claim: off-axis rays at high field angles encounter weaker bending at the rim of L1a than a sphere would provide, suppressing the barrel distortion that retrofocus designs inherently generate at the front negative group.

The rear surface (surface 2) has a paraboloidal base (K = −1.0), which is notable. The paraboloid eliminates the zone of infinite slope that a sphere of R = 9.01 mm would reach at h = R = 9.01 mm, allowing the surface to extend to larger clear apertures without manufacturing impossibility. The positive A4 term (+3.36 × 10⁻⁵) adds mild positive aspherical departure on top of the paraboloid, fine-tuning spherical aberration correction. The steep curvature of this surface (R = 9.01 mm) combined with the paraboloidal base provides the bulk of L1a's diverging power while controlling higher-order aberrations.

The glass choice (S-BAL42 / L-BAL42, nd = 1.58313) is a moderate-index barium crown with νd = 59.46 — low enough Abbe number that it introduces some chromatic dispersion, but this is deliberate: L1a's chromatism is left partially uncorrected in G1 and is instead balanced against G3's four FLD elements. The L-BAL42 designation (if the moldable variant is used) would indicate precision glass molding (PGM) manufacture, consistent with the "difficult-to-manufacture" description and the double-sided aspherical form.

### L1b — Negative Meniscus, Convex to Object

nd = 1.49700, νd = 81.60. Glass: S-FPL51 (OHARA) / FCD1 (HOYA) — ED fluorophosphate crown (SLD). f = −65.1 mm.

L1b is the second element of G1 and the weaker of the two negative menisci. Its high Abbe number (νd = 81.60) satisfies conditional expression (1): νdLA > 70.0, where νdLA is the maximum Abbe number among the negative meniscus lenses in G1. The patent explains (¶0018–0020) that this constraint limits the lateral chromatic aberration introduced by the front group. A low-dispersion glass in G1's negative meniscus means the wavelength-dependent ray bending at the edge of the field is minimized, reducing color fringing at the corners of the image.

The S-FPL51 / FCD1 glass is a fluorophosphate with positive anomalous partial dispersion (ΔPgF ≈ +0.038), classifying it as Sigma's "SLD" (Special Low Dispersion) glass. By placing an SLD element in G1, the design partially decouples the lateral color correction from the rear group, avoiding the need to over-strengthen G3's chromatic correctors — a problem the patent identifies in prior art (¶0006).

L1b's focal length (−65.1 mm) is much weaker than L1a's (−26.7 mm), so its primary structural role is to share the diverging load of G1 across two surfaces with gentler curvatures, reducing the deflection angle of off-axis rays and further suppressing distortion (¶0031).

### L2a — Biconcave Negative (Focus Element)

nd = 1.43700, νd = 95.10. Glass: FCD100 (HOYA) — super-ED fluoride crown, equivalent to fluorite (FLD). f = −127.2 mm.

L2a is the sole element of G2 and the **inner focus group**. During focusing from infinity to close range, G2 moves forward (toward the object) by up to 3.877 mm along the optical axis, closing the gap d4 while opening d6 by an equal amount. The total track remains constant at 82.60 mm, and the back focal distance is unchanged — the image plane is fixed.

The choice of FCD100 (FLD) glass for the focus element is motivated by two factors. First, at νd = 95.10 and nd = 1.43700, this near-fluorite material introduces essentially no chromatic dispersion regardless of field position, so the focus movement does not disturb the system's chromatic balance. Second, the low density of fluorophosphate glass (FCD100 has a density of 3.53 g/cm³ per the HOYA catalog, compared to ~4.5 g/cm³ for typical lanthanum flints) keeps the focus group lightweight, enabling the rapid contrast-detect autofocus the patent targets (¶0027).

L2a's weak negative power (f = −127.2 mm) means its contribution to the overall power balance is minor. Its role is primarily to shift the apparent object distance seen by G3 as the physical object moves closer, rather than to contribute substantial refractive power of its own.

### L3a — Negative Meniscus, Convex to Object (Cemented with L3b)

nd = 1.59282, νd = 68.62. Glass: M-TAC80 (HOYA) — phosphate crown (SLD). f = −24.1 mm.

L3a is the negative element of the first cemented doublet in G3 (Ja: L3a + L3b, combined f = +36.8 mm). It sits immediately behind the aperture stop, where the marginal ray height is near its maximum within the rear group. The M-TAC80 glass is a phosphate crown with moderately high index (nd = 1.593) and high Abbe number (νd = 68.62), and it exhibits positive anomalous partial dispersion. Sigma classifies this as SLD glass.

The high Abbe number of L3a relative to its negative power means it acts as a weak spectral contributor while providing strong negative surface power at the cemented interface. Its concave rear surface (R = +9.90 mm, a steep convex junction as seen by the incoming light) creates the powerful refracting interface of the doublet.

### L3b — Biconvex Positive (Cemented with L3a)

nd = 1.51680, νd = 64.19. Glass: BSC7 (HOYA), S-BSL7 (OHARA), or N-BK7 (SCHOTT) equivalent — standard borosilicate crown. f = +14.8 mm.

L3b is the positive element of the first cemented doublet. Its standard BK7-class glass (nd = 1.517, νd = 64.2) is one of the most widely used optical materials. In this position, it provides the convergent power needed to begin bending the diverging beam from G1/G2 toward a focus. The Δn at the cemented junction (L3a → L3b) is 1.51680 − 1.59282 = −0.076, creating significant negative refracting power at the interface that partially cancels the positive power of L3b's biconvex shape. This deliberate partial cancellation controls spherical aberration at the stop, where the marginal ray is tallest within G3.

The doublet Ja (L3a + L3b) has a combined focal length of +36.8 mm. Its chromatic correction is modest — the Abbe number difference (Δνd = 68.62 − 64.19 = 4.4) is small — because the primary achromatization in this design is handled by the FLD doublets deeper in G3.

### L3c — Positive Meniscus, Convex to Object

nd = 1.43700, νd = 95.10. Glass: FCD100 (HOYA) — super-ED fluoride crown (FLD). f = +46.6 mm.

L3c is a standalone singlet of FLD glass positioned between the first doublet (Ja) and the second doublet (Jb). The patent places a flare cut (surface 11) in the air space between Ja and L3c; in the data file this gap is absorbed. L3c's moderate positive power (f = +46.6 mm) continues the convergence of the beam, while its near-fluorite glass contributes essentially zero chromatic aberration. This is important because L3c sits at a position where the beam diameter is still relatively large, so any chromatic contribution would spread across the field.

### L3d — Negative Meniscus, Convex to Object (Cemented with L3e)

nd = 1.83481, νd = 42.72. Glass: TAFD25 (HOYA) or S-LAH55 (OHARA) — lanthanum dense flint. f = −31.5 mm.

L3d is the negative flint element of the second cemented doublet (Jb: L3d + L3e, combined f = +67.1 mm). The high-index lanthanum flint (nd = 1.835) paired against the FLD crown L3e (nd = 1.437) creates a very large Δν at the cemented junction (νd = 42.72 vs. 95.10, a difference of 52.4 Abbe units). This is one of the design's primary chromatic correction interfaces. The large Δν means that even with relatively weak surface curvatures, the doublet achieves strong achromatization — the FLD element's near-zero dispersion lets the flint's dispersive contribution dominate the cemented interface's chromatic behavior, driving axial color toward correction.

### L3e — Biconvex Positive, Equi-Convex (Cemented with L3d)

nd = 1.43700, νd = 95.10. Glass: FCD100 (HOYA) — super-ED fluoride crown (FLD). f = +22.4 mm.

L3e is notable for its perfectly symmetric form: R_front = +18.8114 mm, R_rear = −18.8114 mm. Equi-convex elements minimize coma at unity conjugate and reduce manufacturing sensitivity. In this position behind L3d, L3e provides the majority of the doublet Jb's convergent power (the doublet's combined f = +67.1 mm, with L3e alone at f = +22.4 mm, indicating that L3d's divergent contribution partially cancels L3e's power). The FLD glass ensures that L3e's strong positive power introduces minimal chromatic aberration of its own.

The equi-convex form is the binding edge-thickness constraint in the design: at sd = 8.8 mm (the estimated clear aperture for doublet Jb), the edge thickness of L3e is approximately 0.36 mm — just above the minimum viable thickness for a cemented element.

### L3f — Biconvex Positive (Cemented with L3g)

nd = 1.43700, νd = 95.10. Glass: FCD100 (HOYA) — super-ED fluoride crown (FLD). f = +26.4 mm.

L3f is the positive element of the third and final cemented doublet (Jc: L3f + L3g, combined f ≈ −345 mm — weakly negative). Unlike the previous two doublets, Jc is a near-afocal pair whose primary role is field correction rather than power contribution. L3f's biconvex shape and FLD glass deliver strong positive power with minimal chromatism, which L3g's negative meniscus almost entirely cancels in aggregate. The result is a nearly power-neutral cemented pair that principally corrects field curvature and astigmatism by bending the beam in a spectrally neutral manner near the image end of the optical train.

### L3g — Negative Meniscus, Concave to Object (Cemented with L3f)

nd = 1.88300, νd = 40.80. Glass: TAFD30 (HOYA) or N-LASF31A (SCHOTT) — lanthanum dense flint. f = −23.8 mm.

L3g is the highest-index glass in the design (nd = 1.883). Its junction with L3f creates the second major chromatic correction interface: Δνd = 95.10 − 40.80 = 54.3 Abbe units, similar to the L3d/L3e interface. The two flint–FLD doublets (Jb and Jc) work in tandem to control both axial and lateral chromatic aberration across the field. L3g's concave-to-object meniscus form bends the converging beam outward slightly, introducing negative Petzval contribution that helps flatten the field.

### L3h — Negative Meniscus, Concave to Object (1× Aspherical)

nd = 1.80610, νd = 40.73. Glass: E-FDS1 (HOYA) or S-TIH6 (OHARA) — titanium flint. f = −84.4 mm.

L3h is the last element before the image plane, separated from the L3f/L3g doublet by a 2.57 mm air gap. Its rear surface (surface 21 in the patent, surface "19A" in the data file) is aspherical with K = 0 (spherical base) and positive polynomial coefficients (A4 = +4.28 × 10⁻⁵, A6 = +8.81 × 10⁻⁸, A8 = +3.93 × 10⁻¹⁰, A10 = +2.22 × 10⁻¹²). The positive departure steepens the concave surface at the periphery, which has two effects: it introduces negative field curvature contribution at the image end (countering the system's residual Petzval), and it corrects residual astigmatism by differentially adjusting sagittal and tangential ray paths at the edge of the field.

The titanium flint glass (nd = 1.806, νd = 40.73) is a high-index, high-dispersion material. Placing it at the rear of the system — where it sees a converging beam at relatively small ray heights — means its dispersive contribution is modest in absolute terms, but it provides the final chromatic trimming needed to balance the system's overall color correction.

---

## Glass Identification and Selection

The glass palette is dominated by two families: HOYA FCD100 (super-ED fluoride crown, Sigma's "FLD") and various flints paired against them for achromatization. The prevalence of HOYA designations (FCD100, M-TAC80, BSC7, TAFD25, TAFD30, E-FDS1) suggests HOYA as the primary glass vendor for this design, consistent with Sigma's known use of HOYA glass in its dp-series compact cameras.

| Element | nd | νd | Glass (Best Match) | Vendor | Family | Sigma Class |
|---------|----|----|-------------------|--------|--------|-------------|
| L1a | 1.58313 | 59.46 | S-BAL42 / L-BAL42 | OHARA | Barium crown | — |
| L1b | 1.49700 | 81.60 | S-FPL51 / FCD1 | OHARA / HOYA | ED fluorophosphate | SLD |
| L2a | 1.43700 | 95.10 | FCD100 | HOYA | Super-ED fluoride | FLD |
| L3a | 1.59282 | 68.62 | M-TAC80 | HOYA | Phosphate crown | SLD |
| L3b | 1.51680 | 64.19 | BSC7 / S-BSL7 | HOYA / OHARA | Borosilicate (BK7) | — |
| L3c | 1.43700 | 95.10 | FCD100 | HOYA | Super-ED fluoride | FLD |
| L3d | 1.83481 | 42.72 | TAFD25 / S-LAH55 | HOYA / OHARA | Lanthanum dense flint | — |
| L3e | 1.43700 | 95.10 | FCD100 | HOYA | Super-ED fluoride | FLD |
| L3f | 1.43700 | 95.10 | FCD100 | HOYA | Super-ED fluoride | FLD |
| L3g | 1.88300 | 40.80 | TAFD30 / N-LASF31A | HOYA / SCHOTT | Lanthanum dense flint | — |
| L3h | 1.80610 | 40.73 | E-FDS1 / S-TIH6 | HOYA / OHARA | Titanium flint | — |

All 11 glass identifications match catalog entries to within Δnd ≤ 0.00012 and Δνd ≤ 0.04 — effectively exact matches. The TAFD30 catalog entry lists νd = 40.76, differing from the patent's stated 40.80 by 0.04 Abbe units; this is within normal rounding tolerance.

### Chromatic Correction Strategy

The design's chromatic strategy centers on two complementary mechanisms:

**Lateral (transverse) color** is controlled at the front group by placing an SLD element (L1b, νd = 81.60) in G1. The patent's conditional expression (1), νdLA > 70.0, ensures that the front negative menisci do not introduce excessive wavelength-dependent ray deflection at high field angles. This is critical for a 91° field of view where lateral color can dominate image quality at the corners.

**Axial (longitudinal) color** is corrected by the two FLD–flint cemented doublets in G3 (Jb: L3d/L3e with Δνd = 52.4, and Jc: L3f/L3g with Δνd = 54.3). Each doublet pairs a near-fluorite FLD element (νd = 95.10) against a lanthanum dense flint (νd ≈ 41–43), creating large Abbe-number differences that achieve strong achromatization per unit of surface curvature. The use of four FLD elements overall — one in G2 and three in G3 — is a generous allocation of expensive near-fluorite glass that allows the individual surface curvatures to remain moderate, reducing sensitivity to manufacturing tolerances.

The first cemented doublet (Ja: L3a/L3b) has a small Δνd of only 4.4 and contributes little to achromatization. Its role is primarily structural (converging the beam behind the stop) with any chromatic effect being secondary.

---

## Focus Mechanism

The lens employs **inner focus** with a single moving element. G2 (the biconcave L2a) translates forward along the optical axis as the focus distance decreases from infinity to close range.

| Parameter | Infinity | Close (200 mm) | Δ |
|-----------|----------|----------------|---|
| d4 (L1b rear → L2a front) | 16.797 mm | 12.920 mm | −3.877 mm |
| d6 (L2a rear → STO) | 4.477 mm | 8.354 mm | +3.877 mm |
| BFD (L3h rear → image) | 17.687 mm | 17.687 mm | 0 |
| Total track | 82.60 mm | 82.60 mm | 0 |
| d0 (object → surface 1) | ∞ | 117.40 mm | — |
| Overall focus distance | ∞ | 200 mm | — |

The gap conservation sum Δd4 + Δd6 = 0 confirms that only G2 moves and both G1 and G3 are stationary. The total track and BFD remain constant, meaning the lens barrel does not extend during focusing and the image plane is fixed — essential properties for a fixed-lens camera where the sensor position is permanently set.

The focus group consists of a single element (L2a) made from low-density FCD100 glass. The patent states (¶0027) that a lightweight focus group is "desirable" for enabling rapid autofocus and reducing the size of the actuator required to move it. At an estimated mass of roughly 1–2 grams (based on the element's dimensions and FCD100's density of 3.53 g/cm³), L2a is among the lightest possible focus groups for a 14 mm wide-angle lens.

The production dp0 Quattro specifies a minimum focus distance (MFD) of 18 cm. The patent's Example 2 publishes close-focus data at 200 mm (object to image plane, i.e., total conjugate distance). The data file uses the patent's 200 mm conjugate for the variable gap values; the production lens likely focuses slightly beyond the published Example 2 prescription.

---

## Aspherical Surfaces

The design uses three aspherical surfaces on two elements, following the patent's sag equation (¶0036):

$$z = \frac{(1/r) \cdot y^2}{1 + \sqrt{1 - (1+K)(y/r)^2}} + A_4 y^4 + A_6 y^6 + A_8 y^8 + A_{10} y^{10}$$

where $r$ is the base radius of curvature, $K$ is the conic constant (K = 0 for a sphere, K = −1 for a paraboloid), and $A_4$ through $A_{10}$ are the polynomial coefficients. This is the standard aspherical sag convention with K used directly as the conic constant.

### Surface 1 — L1a Front (Convex to Object)

| Parameter | Value |
|-----------|-------|
| R | +23.0837 mm |
| K | 0.00000 (spherical base) |
| A4 | −3.96887 × 10⁻⁵ |
| A6 | +2.94290 × 10⁻⁸ |
| A8 | −5.15347 × 10⁻¹¹ |
| A10 | 0 |

The spherical base (K = 0) means the aspherical departure comes entirely from the polynomial terms. The dominant A4 term is negative, which reduces the sag relative to the sphere at the periphery. Physically, this means the front surface becomes progressively flatter toward the rim — its local curvature decreases with height, weakening its refractive power for off-axis rays. This is the key mechanism for distortion control: by reducing the bending of peripheral rays at the front element, the design avoids the excessive barrel distortion inherent in retrofocus architectures at 2ω > 90°.

### Surface 2 — L1a Rear (Concave to Image)

| Parameter | Value |
|-----------|-------|
| R | +9.0102 mm |
| K | −1.00000 (paraboloidal base) |
| A4 | +3.35668 × 10⁻⁵ |
| A6 | −1.00793 × 10⁻⁷ |
| A8 | −1.13985 × 10⁻⁹ |
| A10 | 0 |

The paraboloidal base (K = −1) is a notable feature. A sphere with R = 9.01 mm reaches infinite slope at h = R = 9.01 mm, beyond which the sag discriminant becomes negative and the surface is physically undefined. The paraboloid eliminates this singularity: its sag reduces to $z = y^2/(2R)$, and its slope $dz/dy = y/R$ grows linearly without the divergence a sphere encounters at h = R. At h = R = 9.01 mm, the paraboloid slope is exactly 1.0 (45°), compared to the sphere's infinite slope at the same height. This allows the surface to extend to clear apertures well beyond 9 mm — necessary for this wide-angle lens where the front element must capture rays from half-angles exceeding 45°.

The positive A4 coefficient (+3.36 × 10⁻⁵) adds mild positive departure to the paraboloid, slightly steepening the periphery relative to a pure paraboloid. The combination of the paraboloidal base and the polynomial correction provides precise control of spherical aberration at the steep rear surface of L1a.

### Surface 21 — L3h Rear (Concave to Object)

| Parameter | Value |
|-----------|-------|
| R | −47.8074 mm |
| K | 0.00000 (spherical base) |
| A4 | +4.27783 × 10⁻⁵ |
| A6 | +8.80624 × 10⁻⁸ |
| A8 | +3.92712 × 10⁻¹⁰ |
| A10 | +2.22145 × 10⁻¹² |

All polynomial coefficients are positive, producing aspherical departure that is positive relative to the base sphere (i.e., less sag in the negative/concave direction — the surface curves less strongly toward the object than a sphere would). The positive departure effectively steepens the local curvature for peripheral rays relative to paraxial, providing a field-flattening action that compensates the system's positive Petzval sum (+0.00560 mm⁻¹, corresponding to a Petzval radius of +178.7 mm, backward-curving field). The correction is most significant at higher ray heights, where it also addresses residual astigmatism by differentially adjusting sagittal and tangential ray paths at the edge of the field.

This is the only aspherical surface on a flint-glass element. The E-FDS1 / S-TIH6 titanium flint is not a moldable glass (it does not carry a PGM-class designation), suggesting this surface is likely polished rather than glass-molded. The departure at the expected semi-diameter (~9 mm) is relatively modest — approximately +0.03 mm — consistent with conventional aspherical polishing.

### Manufacturing Summary

| Element | Surface(s) | Base | Departure from Base at Rim | Probable Manufacture |
|---------|-----------|------|---------------------------|---------------------|
| L1a | 1 (front) | Sphere (K = 0) | ~1.2 mm (polynomial) | Precision glass mold (PGM) |
| L1a | 2 (rear) | Paraboloid (K = −1) | ~0.12 mm (polynomial) | Precision glass mold (PGM) |
| L3h | 21 (rear) | Sphere (K = 0) | ~0.03 mm (polynomial) | Polished glass asphere |

The production lens claims two aspherical *lenses* with three aspherical *surfaces*. L1a accounts for one lens with two aspherical surfaces (the "wide double-sided aspheric" in Sigma's description), and L3h accounts for the second lens with one aspherical surface.

---

## Conditional Expressions

The patent defines two conditional expressions (¶0014, ¶0018–0025):

| Expression | Condition | Example 2 Value | Status |
|------------|-----------|-----------------|--------|
| (1) | νdLA > 70.0 | 81.6 | Satisfied |
| (2) | 0.80 < \|f₁₂/f\| < 1.40 | 1.00 | Satisfied |

**Expression (1):** νdLA is the maximum Abbe number among the negative meniscus lenses in G1. With L1b at νd = 81.60 (S-FPL51 / FCD1), the condition is comfortably satisfied. The patent notes (¶0020) that tightening the limit to νdLA > 80.0 further improves secondary spectrum correction — Example 2 satisfies this stricter bound as well.

**Expression (2):** |f₁₂/f| = |−13.96 / 13.97| = 1.00, placing it in the center of the allowed range. The patent explains (¶0021–0025) that this ratio balances the back focal distance (which shortens as the ratio increases) against the total track length (which grows as the G2–G3 spacing increases with shorter f₁₂). The value of 1.00 yields a BFD of 1.27 × EFL — within the patent's stated target of 1.2–1.4× (¶0007).

---

## Verification Summary

Independent paraxial ray trace (ABCD matrix and y-nu methods) confirms the patent's published values:

| Parameter | Computed | Patent | Match |
|-----------|----------|--------|-------|
| EFL (infinity) | 13.965 mm | 13.97 mm | ✓ |
| BFD (infinity) | 17.687 mm | 17.6874 mm | ✓ |
| Total track | 82.596 mm | 82.60 mm | ✓ |
| G1 focal length | −18.01 mm | −18.01 mm | ✓ |
| G2 focal length | −127.16 mm | −127.16 mm | ✓ |
| G12 focal length | −13.96 mm | −13.96 mm | ✓ |
| G3 focal length | +19.33 mm | +19.33 mm | ✓ |
| Petzval sum | +0.00560 mm⁻¹ | — | — |
| Petzval radius | +178.7 mm | — | — |

Semi-diameters are not published in the patent. Values in the data file are estimated from a combined marginal + chief ray trace at the full 2ω = 90.90° field angle, with ~8% mechanical clearance and front-group reduction for expected vignetting. The equi-convex element L3e (R = ±18.81 mm, ct = 4.726 mm) is the edge-thickness-limiting element at sd = 8.8 mm (ET ≈ 0.36 mm).

---

## Sources

1. JP 2016-139087 A, "結像光学系," Sigma Corporation, published 2016-08-04. Example 2 (¶0048–0052).
2. Sigma Corporation product page, "dp0 Quattro — Specifications." sigma-global.com. Accessed 2026.
3. Sigma Corporation of America press release, February 10, 2015. Announcement of the dp0 Quattro at CP+ 2015.
4. HOYA Optical Glass Catalog (FCD100: nd = 1.43700, νd = 95.10; FCD1: nd = 1.49700, νd = 81.61; M-TAC80: nd = 1.59282, νd = 68.62; TAFD25: nd = 1.83481, νd = 42.72; TAFD30: nd = 1.88300, νd = 40.76; E-FDS1: nd = 1.80610, νd = 40.73; BSC7: nd = 1.51680, νd = 64.20).
5. OHARA Optical Glass Catalog (S-BAL42 / L-BAL42: nd = 1.58313, νd = 59.46; S-FPL51: nd = 1.49700, νd = 81.61; S-LAH55: nd = 1.83481, νd = 42.72; S-TIH6: nd = 1.80610, νd = 40.73).
