# Sigma 40mm f/1.4 DG HSM Art — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** JP 2020-012952 A (Japanese unexamined patent application)
**Title:** 撮像レンズ (Imaging Lens)
**Applicant:** Sigma Corporation (株式会社シグマ), Kawasaki-shi, Kanagawa, Japan
**Inventor:** Yamanaka Kenji (山中 健史)
**Filed:** 18 July 2018 (Heisei 30), priority application 特願2018-134615
**Published:** 23 January 2020 (Reiwa 2)

The prescription transcribed here is **Numerical Example 1** (数値実施例1), the first of four embodiments disclosed. It is identified as the production design of the **Sigma 40mm f/1.4 DG HSM | Art** (edition A018) by the following convergent evidence:

1. **Element and group count:** 16 elements in 12 groups — matches the production lens exactly.
2. **FLD and SLD element count:** Three fluorite-equivalent (FLD) elements and three special low-dispersion (SLD) elements, matching Sigma's published glass count.
3. **Focal length:** The patent's computed EFL of 41.20 mm, with a marketed focal length of 40 mm — consistent with typical rounding practice.
4. **Maximum aperture:** F/1.45 design aperture against the marketed F/1.4.
5. **Half-field angle:** 2ω = 55.87° (patent) vs. 56.8° (production spec) — within typical specification-vs-design tolerance, with the production value reflecting real-world correction.
6. **Full-frame image circle:** Image height Y = 21.63 mm corresponds to a 43.26 mm diagonal — full 35 mm format coverage.
7. **Aspherical surfaces:** Two aspherical surfaces, both on the rearmost element — consistent with the production lens.
8. **Focus mechanism:** Floating inner focus with two independently moving groups (G2 and G3), matching the production lens's HSM-driven internal focus.
9. **Patent timing:** Filed July 2018, published January 2020; the production lens was announced September 2018 and shipped December 2018.
10. **Minimum focus distance:** 393 mm at the close-focus data position (vs. 400 mm marketed MFD) — within flange-distance offset tolerance.

## Optical Architecture

The Sigma 40mm f/1.4 Art is a **modified retrofocus** (negative-leading) design with a negative-positive-positive group power distribution: G1 (weakly negative, f = −653.7 mm) – G2 (positive, f = +90.2 mm) – Stop – G3 (positive, f = +73.2 mm). The overall system EFL is 41.20 mm, total track is 171.00 mm, and the back focal distance is 39.00 mm. The BFD of 39 mm — nearly equal to the focal length — is substantially longer than a symmetric Gaussian design would achieve at this focal length, confirming the effectiveness of the negative-leading architecture in securing SLR-compatible flange clearance (44 mm for Sigma SA mount). The total track ratio (TT/EFL = 4.15) reflects the optical complexity demanded by the cine-grade performance target.

The sixteen elements distribute as follows:

- **Group 1 (G1):** Fixed front group, surfaces 1–14, comprising two subgroups:
  - **G1A (negative subgroup):** Three elements — a positive meniscus (L1) and two negative meniscus lenses (L2, L3) all convex to the object. The two negatives are fluorite-equivalent FLD glass (nd = 1.43700, νd = 95.10) and provide the retrofocus divergence that secures back focal distance. L1 serves as a positive corrector to control the negative distortion inherent in the retrofocus arrangement (¶0042).
  - **G1B (positive subgroup):** Five elements in two cemented doublets plus a single — Component X (L4 + L5), Component Y (L6 + L7), and the biconvex positive L8. The two doublets serve distinct chromatic and geometric roles as explained in the conditional-expression analysis below.
- **Group 2 (G2):** Focus group, surfaces 15–19 — a high-index biconvex singlet (L9, nd = 1.92286) followed by a cemented doublet (L10 + L11). Moves toward the object during close focusing, with 6.16 mm travel from infinity to MFD.
- **Aperture stop (S):** Surface 20, positioned between G2 and G3. Moves with G3 during focus.
- **Group 3 (G3):** Rear focus group, surfaces 21–29 — a cemented negative doublet (L12 + L13, Component L3a), a negative meniscus (L14), a biconvex positive (L15), and a positive meniscus with two aspherical surfaces (L16). Moves forward by 7.21 mm at close focus, traveling independently from G2 (floating focus).

The design is described by the patent as achieving F/1.4 brightness with well-corrected sagittal coma flare — a persistent challenge in fast standard-length primes — through the dual-doublet subgroup G1B and the concentric negative elements in G3 (¶0047, ¶0054). Sigma has stated that this lens was originally developed to meet the optical performance standard of their high-end cine prime line (the FF High Speed Prime Line), and the design was subsequently housed in the Art series.

## Element-by-Element Analysis

### L1 — Positive Meniscus, convex to object (G1A)

nd = 1.77250, νd = 49.62. Glass: S-LAH66 (OHARA) — lanthanum crown. f = +184.7 mm.

L1 is a thick (5.55 mm), strongly curved positive meniscus positioned at the leading edge of the optical system, where it encounters the highest peripheral chief ray heights. Its positive power at this location counteracts the negative distortion generated by the retrofocus architecture (¶0042). The lanthanum crown glass provides high refractive index at moderate dispersion, enabling a compact, low-curvature positive element that introduces minimal chromatic error. This glass (S-LAH66) is reused at L8 further into the system, standardizing inventory.

### L2 — Negative Meniscus, convex to object (G1A, FLD)

nd = 1.43700, νd = 95.10. Glass: FCD100 (HOYA) — fluorite-equivalent fluorophosphate (FLD). f = −82.2 mm.

L2 is the first of two FLD negative meniscus lenses that constitute the diverging core of subgroup G1A. Its front radius (R = +191.9 mm) and rear radius (R = +30.25 mm) create strong negative power that diverges the axial beam, producing the height separation between marginal and chief rays exploited throughout the rest of the system. The fluorite-class glass provides extremely low dispersion (νd = 95.10) combined with strong positive anomalous partial dispersion (ΔPgF ≈ +0.053), enabling secondary-spectrum correction of lateral color at the field periphery where this element's chief-ray contribution dominates. The patent's condition (9) — VnA × ΔPgFnA > 1.0 — is satisfied at 5.36 (patent value, computed from full-precision catalog data) for this element (¶0043–0044).

### L3 — Negative Meniscus, convex to object (G1A, FLD)

nd = 1.43700, νd = 95.10. Glass: FCD100 (HOYA) — same FLD fluorophosphate as L2. f = −132.1 mm.

L3 duplicates L2's material but with weaker power (longer front radius R = +424.0 mm), sharing the negative-divergence duty to keep individual surface contributions moderate. By distributing the required G1A negative power across two FLD elements, the design doubles the secondary-spectrum correction capacity without overloading any single surface (¶0021). The anomalous dispersion condition (9) is again satisfied at 5.36.

### L4 (LX1) — Biconcave Negative, cemented with L5 (Component X, G1B)

nd = 1.64769, νd = 33.84. Glass: E-FD15 (HOYA) — dense flint. f = −48.3 mm (standalone).

L4 is the negative element of Component X, a cemented doublet in subgroup G1B that the patent identifies as serving a "new-type achromatism" (新色消し) role (¶0026). The biconcave shape (R7 = −38.18, R8 = +172.54 mm) generates strong divergence. Its dense-flint glass provides the high-dispersion partner needed for achromatization. In Component X, where the chief ray is high relative to the marginal ray, the chromatic effect is leveraged primarily toward field-curvature correction rather than axial color correction (¶0026).

### L5 (LX2) — Biconvex Positive, cemented with L4 (Component X, G1B)

nd = 1.83481, νd = 42.72. Glass: S-LAH55V (OHARA) — lanthanum dense crown. f = +50.9 mm (standalone).

L5 is the positive partner of Component X. Its lanthanum glass offers high refractive index (1.83481) at moderate dispersion — a valuable combination for generating positive power without excessive surface curvature. The biconvex shape (R8 = +172.54, R9 = −56.30 mm) converges the beam after L4's divergence. The Abbe-number ratio between L4 and L5 is VX1/VX2 = 33.84/42.72 = 0.79, satisfying condition (2) of the patent (range 0.6–1.2). This relatively close Abbe-number pairing — unusual for a classical achromatic doublet — is characteristic of the "new-type achromatism" where the cemented interface serves primarily a geometric (field curvature) role rather than a purely chromatic one.

The combined Component X has a very long focal length (f ≈ +2527 mm by thick-element trace), meaning it is nearly afocal as a unit — its primary function is the differential bending of axial and chief rays at the cemented interface.

### L6 (LY1) — Positive Meniscus, concave to object (Component Y, G1B, SLD)

nd = 1.55032, νd = 75.50. Glass: M-FCD500 (HOYA) — PGM-compatible SLD fluorophosphate. f = +60.6 mm (standalone).

L6 is the positive element of Component Y, the second cemented doublet in G1B. Its meniscus shape (both radii negative: R10 = −1641.7, R11 = −32.70 mm) curves concave to the object, with the strongly curved rear surface providing positive power. This is Sigma's SLD designation — a phosphate crown with νd = 75.50 and ΔPgF ≈ +0.028, offering low dispersion with moderate anomalous character. The Abbe-number ratio VY1/VY2 = 75.50/38.01 = 1.99 satisfies condition (3) (range 1.6–2.5), confirming that Component Y follows "old-type achromatism" (旧色消し) — a classical wide-Abbe-gap achromatic doublet where the primary role is high-order spherical aberration correction (¶0026).

The shape factor of L6 — condition (4), (RY11 + RY12)/(RY11 − RY12) = 1.04 — controls the balance between coma and spherical aberration at the doublet (¶0032).

### L7 (LY2) — Biconcave Negative, cemented with L6 (Component Y, G1B)

nd = 1.60342, νd = 38.01. Glass: E-F3 (HOYA) — flint. f = −47.9 mm (standalone).

L7 provides the high-dispersion negative partner in the classical achromatic doublet of Component Y. Its biconcave shape (R11 = −32.70, R12 = +246.88 mm) generates divergence. Component Y as a whole has a focal length of approximately −226 mm, acting as a net weak negative unit that trims the beam geometry entering G2 while completing the chromatic correction of subgroup G1B.

### L8 — Biconvex Positive (G1B)

nd = 1.77250, νd = 49.62. Glass: S-LAH66 (OHARA) — lanthanum crown, same glass as L1. f = +88.3 mm.

L8 closes subgroup G1B, collecting the beam after the two cemented doublets. Its biconvex form (R13 = +83.28, R14 = −377.1 mm) provides moderate convergence, transitioning the beam into the variable gap d14 separating G1 from the moving focus group G2. The reuse of S-LAH66 reflects a practical manufacturing choice — minimizing glass inventory across the system.

### L9 — Biconvex Positive (G2, focus group)

nd = 1.92286, νd = 20.88. Glass: S-NPH2 (OHARA) — super-dense lanthanum flint (highest nd in the system). f = +83.7 mm.

L9 is the leading element of the focus group G2. Its exceptionally high refractive index enables the requisite positive power with gentle surface curvatures (R15 = +90.44, R16 = −527.5 mm), which is critical for maintaining low aberration sensitivity across the focus range. Despite its very low Abbe number (20.88), S-NPH2 is a sound choice here: because the element sits close to the stop, its chief-ray height is low, limiting its lateral-color contribution. The axial-color burden of this high-dispersion singlet is managed by the surrounding SLD and FLD elements in G2 and G3.

### L10 — Biconvex Positive, cemented with L11 (G2 doublet)

nd = 1.59282, νd = 68.63. Glass: PCD51 (HOYA) — SLD phosphate crown. f = +41.8 mm (standalone).

L10 is the crown element of G2's cemented doublet. Its SLD glass provides low dispersion (νd = 68.63, ΔPgF ≈ +0.015) while the biconvex shape (R17 = +55.64, R18 = −44.61 mm) concentrates the beam toward the aperture stop. The nearly symmetric radii distribute refraction between the front and rear surfaces, controlling spherical aberration at full aperture.

### L11 — Biconcave Negative, cemented with L10 (G2 doublet)

nd = 1.58144, νd = 40.89. Glass: E-FL5 (HOYA) — light flint. f = −36.0 mm (standalone).

L11 provides the achromatizing negative partner in the G2 doublet. Its biconcave shape (R18 = −44.61, R19 = +39.38 mm) terminates G2 with an image-side surface that is concave toward the sensor — a configuration the patent specifically requires (Claim 5 / ¶0012) to maintain proper aberration interaction between the moving G2 and the post-stop G3. The cemented doublet L10+L11 has a net long focal length (≈ −408 mm), so it functions primarily as an aberration-correcting unit rather than a power element — the convergent power of G2 is dominated by L9's singlet contribution.

### L12 (L31) — Biconvex Positive, cemented with L13 (Component L3a, G3, FLD)

nd = 1.43700, νd = 95.10. Glass: FCD100 (HOYA) — the same FLD fluorophosphate used in L2 and L3. f = +53.3 mm (standalone).

L12 is the third and final FLD element. Positioned immediately after the aperture stop, the axial beam height is near its maximum while the chief ray crosses the axis — making this position ideal for controlling axial chromatic aberration and spherical aberration simultaneously (¶0049). The biconvex shape (R21 = +84.02, R22 = −32.20 mm) provides strong convergence. Condition (11) — V31 > 60 — is satisfied at 95.10, ensuring low axial color contribution from this critical element.

### L13 (L32) — Biconcave Negative, cemented with L12 (Component L3a, G3)

nd = 1.64769, νd = 33.84. Glass: E-FD15 (HOYA) — dense flint, same glass as L4. f = −33.5 mm (standalone).

L13 is the achromatizing partner in Component L3a. The cemented interface between L12 and L13 has a refractive-index difference of Δn = 1.64769 − 1.43700 = 0.211, which combined with the Abbe-number difference of ΔV = 33.84 − 95.10 = −61.26 yields the condition (10) value of 100 × (N32−N31)/(V32−V31) = −0.34 (range −0.7 to −0.05). This interface provides strong spherical-aberration correction while maintaining axial color balance.

The component L3a as a whole is a net negative doublet (f ≈ −93 mm), positioned immediately after the stop as the first element of G3. The patent notes that the overall G3 configuration — a cemented negative doublet (L3a) followed by a negative meniscus (L14) and then positive elements (L15, L16) — departs from the typical double-Gauss arrangement and enables improved sagittal coma flare correction (¶0047).

### L14 (L33) — Negative Meniscus, concave to object (G3)

nd = 1.62588, νd = 35.74. Glass: S-TIM35 (OHARA) — titanium flint. f = −55.5 mm.

L14 is the concentric negative meniscus that the patent identifies as the critical sagittal-coma-flare corrector (¶0054). Its concave-to-object shape (R24 = −26.99, R25 = −121.03 mm) creates a surface configuration approximately concentric with the aperture stop. Condition (12) — R33/Ds33, where Ds33 is the on-axis distance from the stop to L14's front surface (17.75 mm) — evaluates to −1.52 (range −1.8 to −1.0), confirming the near-concentric geometry. This concentricity minimizes the angle of incidence of off-axis ray bundles, suppressing sagittal coma and enabling flat image performance across the field at F/1.4.

### L15 (L34) — Biconvex Positive (G3, SLD)

nd = 1.59282, νd = 68.63. Glass: PCD51 (HOYA) — SLD phosphate crown, same glass as L10. f = +42.2 mm.

L15 provides convergent power in the rear of G3, relaying the corrected beam toward the image plane. Its SLD glass minimizes chromatic contribution at a position where residual secondary spectrum from the front groups would otherwise accumulate. The biconvex shape (R26 = +64.69, R27 = −40.83 mm) is moderately asymmetric, bending the beam progressively to reduce surface-angle errors at full aperture.

### L16 — Positive Meniscus (2× Aspherical), concave to object (G3)

nd = 1.85135, νd = 40.10. Glass: S-NBH56 (OHARA) — niobium-phosphate dense crown. f = +74.1 mm.

L16 is the final element before the image plane and carries the design's only two aspherical surfaces (surfaces 28 and 29). Its meniscus shape (R28 = −430.04, R29 = −54.99 mm) is concave to the object, placing both aspherical surfaces in a region of high beam convergence where they can fine-tune the final wavefront. The niobium-dense-crown glass (S-NBH56) provides high refractive index (1.85135), enabling strong refractive power from moderate surface curvatures. The patent specifies that the aspherical surfaces provide progressively increasing negative power toward the periphery (¶0056), enabling spherical-aberration correction without degrading off-axis performance.

## Glass Identification and Selection

The design uses eleven distinct glass types across sixteen elements, drawing from the HOYA and OHARA catalogs. The chromatic strategy is structured around three FLD (fluorite-class) elements and three SLD (special low-dispersion) elements, consistent with Sigma's published product specifications.

| Element(s) | nd | νd | ΔPgF | Glass | Vendor | Sigma Class | Role |
|---|---|---|---|---|---|---|---|
| L1, L8 | 1.77250 | 49.62 | −0.009 | S-LAH66 | OHARA | Standard | Lanthanum crown, moderate-dispersion positive |
| L2, L3, L12 | 1.43700 | 95.10 | +0.053 | FCD100 | HOYA | FLD | Fluorite-equivalent ED fluorophosphate |
| L4, L13 | 1.64769 | 33.84 | +0.003 | E-FD15 | HOYA | Standard | Dense flint, achromatizing partner |
| L5 | 1.83481 | 42.72 | −0.011 | S-LAH55V | OHARA | Standard | Lanthanum dense crown |
| L6 | 1.55032 | 75.50 | +0.028 | M-FCD500 | HOYA | SLD | PGM fluorophosphate crown |
| L7 | 1.60342 | 38.01 | ±0.000 | E-F3 | HOYA | Standard | Flint |
| L9 | 1.92286 | 20.88 | +0.029 | S-NPH2 | OHARA | Standard | Super-dense lanthanum flint |
| L10, L15 | 1.59282 | 68.63 | +0.015 | PCD51 | HOYA | SLD | Phosphate crown |
| L11 | 1.58144 | 40.89 | +0.005 | E-FL5 | HOYA | Standard | Light flint |
| L14 | 1.62588 | 35.74 | +0.006 | S-TIM35 | OHARA | Standard | Titanium flint |
| L16 | 1.85135 | 40.10 | −0.006 | S-NBH56 | OHARA | Standard | Niobium-phosphate dense crown |

The chromatic correction strategy employs a front-loaded secondary-spectrum architecture: the three FLD elements (L2, L3 in G1A and L12 in G3) carry the bulk of the anomalous dispersion correction, with their high positive ΔPgF (+0.053) used at positions of maximum chief-ray or marginal-ray height respectively. The three SLD elements (L6 in G1B, L10 and L15 in G2/G3) provide secondary support with moderate positive anomalous character (ΔPgF = +0.015 to +0.028), distributed across the central and rear regions.

The use of HOYA M-FCD500 (L6) is notable — the "M-" prefix in the HOYA catalog denotes a glass formulated for precision glass molding (PGM), suggesting that L6 may be a molded element rather than conventionally polished. S-NBH56 (L16), by contrast, carries OHARA's "S-" prefix for standard polished glass; the aspherical manufacturing method on L16 is not determinable from the glass designation alone.

The glass palette is split between HOYA and OHARA catalogs, with six of eleven distinct glasses from HOYA and five from OHARA. This balanced dual-vendor sourcing likely reflects the need for specific HOYA PGM formulations (M-FCD500) and specialty phosphate crowns (PCD51) not available in the OHARA line.

## Focus Mechanism

The lens employs a **floating inner focus** system with two independently moving groups (¶0057). G1 remains fixed relative to the image plane; G2 and G3 (with the aperture stop attached) move toward the object during close focusing, each with different travel distances.

| Parameter | Infinity | Close (393 mm) | Δ |
|---|---|---|---|
| d14 (G1–G2 gap) | 8.767 mm | 2.603 mm | −6.164 mm |
| d19 (G2–Stop gap) | 7.391 mm | 6.342 mm | −1.049 mm |
| BF (last surface to image) | 39.000 mm | 46.212 mm | +7.212 mm |

The total track from the front vertex to the image plane remains constant at 171.00 mm (verified: Δd14 + Δd19 + ΔBF = 0.000 mm), confirming that G1 is fixed and the overall length does not change during focus — a requirement for the lens's dust-and-splash-proof barrel construction.

G2 travels 6.16 mm toward the object during close focusing, while G3 (plus stop) travels 7.21 mm in the same direction — G3 moves farther than G2 by 1.05 mm, causing the G2–G3 gap (d19) to close slightly. The differential movement enables independent correction of astigmatism and field curvature across the focus range (¶0023, ¶0057). The production lens uses a Hyper Sonic Motor (HSM) with ring-type ultrasonic drive for this internal focus mechanism, and supports manual override (MO) focus with switchable sensitivity via the Sigma USB Dock.

The patent publishes close-focus data at a 393 mm object distance (measured from the front vertex), which corresponds to the production lens's marketed 400 mm MFD when the flange-to-front-vertex distance is included.

## Aspherical Surfaces

The design has two aspherical surfaces — both on L16, the rearmost element — on surfaces 28 (front) and 29 (rear). The aspherical equation follows the standard form stated in ¶0061:

$$z = \frac{(1/r) \cdot y^2}{1 + \sqrt{1 - (1+K)(y/r)^2}} + A_4 y^4 + A_6 y^6 + A_8 y^8 + A_{10} y^{10} + A_{12} y^{12}$$

where $K$ is the conic constant (K = 0 for both surfaces, i.e., the base curve is spherical) and coefficients are provided up to the 12th order.

### Surface 28 (L16 front, concave to object)

| Coefficient | Value |
|---|---|
| K | 0.0000 |
| A4 | −2.73662 × 10⁻⁶ |
| A6 | +3.07519 × 10⁻⁹ |
| A8 | +3.90515 × 10⁻¹¹ |
| A10 | −1.94154 × 10⁻¹⁴ |
| A12 | 0.0 |

The dominant A4 coefficient is **negative**, meaning the surface develops progressively more negative departure from the base sphere with increasing height. On a surface that is weakly concave to the object (R = −430.0 mm), this increases the negative power contribution at the periphery, correcting residual spherical aberration in the converging beam. The small positive A6 and A8 terms introduce a mid-zone inflection that fine-tunes the zonal correction profile.

### Surface 29 (L16 rear, concave to object)

| Coefficient | Value |
|---|---|
| K | 0.0000 |
| A4 | +3.26804 × 10⁻⁶ |
| A6 | +3.98767 × 10⁻⁹ |
| A8 | +3.58258 × 10⁻¹¹ |
| A10 | 0.0 |
| A12 | 0.0 |

Surface 29's A4 is **positive**, producing increasing positive departure at the rim. On a surface that is more strongly concave to the object (R = −54.99 mm), the positive departure flattens the surface at large heights relative to the base sphere. Since this is the exit surface (glass to air, φ = (1.0 − 1.85135)/R > 0), a flatter rim reduces the positive refractive power of this surface at the periphery. Combined with surface 28's increasing negative contribution, the net effect is that L16 develops progressively increasing negative power toward the field edge — precisely the "光軸から離れるほど負のパワーが強くなる非球面" described in ¶0056. This aspherical profile enables peripheral spherical-aberration correction without degrading off-axis performance, as the aspherical departure primarily affects the axial marginal ray while leaving oblique ray bundles largely unperturbed.

Both surfaces use S-NBH56 glass (OHARA). The "S-" prefix in the OHARA catalog denotes standard polished glass, in contrast to OHARA's "L-" prefix which designates glasses specifically formulated for precision glass molding (PGM). The patent does not specify the aspherical manufacturing method. At nd = 1.85135, the element could be fabricated as a polished glass asphere, a hybrid composite (resin-on-glass), or a glass-molded element using PGM preforms if available for this composition. The element's rearmost position (small diameter, moderate aspherical departure) is compatible with any of these methods.

## Conditional Expressions

The patent defines twelve conditional inequalities governing the design. All are satisfied by Example 1 as tabulated in the patent's own conditional-expression summary (pp. 18–19):

| Condition | Expression | Ex. 1 Value | Range | Status |
|---|---|---|---|---|
| (1) | f3/fw | 1.78 | 1.3–2.5 | ✓ |
| (2) | VX1/VX2 | 0.79 | 0.6–1.2 | ✓ |
| (3) | VY1/VY2 | 1.99 | 1.6–2.5 | ✓ |
| (4) | (RY11+RY12)/(RY11−RY12) | 1.04 | 0.4–2.5 | ✓ |
| (5) | \|fw/fX1\| | 0.86 | 0.4–1.5 | ✓ |
| (6) | fw/fX2 | 0.80 | 0.3–1.2 | ✓ |
| (7) | fw/fY1 | 0.68 | 0.4–1.5 | ✓ |
| (8) | \|fw/fY2\| | 0.86 | 0.5–1.5 | ✓ |
| (9) | VnA × ΔPgFnA | 5.36* | > 1.0 | ✓ |
| (10) | 100×(N32−N31)/(V32−V31) | −0.34 | −0.7 to −0.05 | ✓ |
| (11) | V31 | 95.10 | > 60 | ✓ |
| (12) | R33/Ds33 | −1.52 | −1.8 to −1.0 | ✓ |

Conditions (2) and (3) together encode the design's central innovation: Component X uses a "new achromatism" pairing (close Abbe numbers, VX1/VX2 ≈ 0.8) where the cemented interface's geometric bending of field-marginal rays dominates, primarily correcting field curvature; Component Y uses "old achromatism" (wide Abbe gap, VY1/VY2 ≈ 2.0) where the strong refractive-index contrast at the cemented surface controls high-order spherical aberration (¶0026). The patent argues this division of labor — field curvature in X, high-order SA in Y — is essential for simultaneous correction at F/1.4 while both doublets also contribute achromatizing effects as a secondary benefit (¶0026–0027).

*Note on condition (9): The patent's conditional table reports 5.36 for all four examples, computed from full-precision catalog PgF data. Using the two-decimal PgF = 0.53 printed in the surface-data table yields 5.03. The discrepancy is purely a rounding artifact; the full-precision PgF for FCD100 glass (approximately 0.5337) recovers the patent's stated value.

## Aberration Correction Strategy

The patent's aberration strategy, as described in ¶0020–0056, can be summarized as a five-layer approach:

**Retrofocus divergence and field flattening (G1A):** Two FLD negative meniscus lenses create the beam divergence needed for back-focal-distance clearance while simultaneously correcting lateral color and field curvature via their anomalous dispersion. The leading positive meniscus (L1) controls negative distortion inherent in the retrofocus arrangement.

**Dual-doublet geometric and chromatic correction (G1B):** Component X (new achromatism) corrects field curvature while providing secondary chromatic correction; Component Y (old achromatism) corrects high-order spherical aberration using the strong refractive-index contrast at its cemented interface (¶0026). The dual-doublet approach grants two additional degrees of freedom compared to a single cemented group.

**High-index focus group (G2):** L9's S-NPH2 glass (nd = 1.923) minimizes surface curvatures in the moving group, reducing focus-dependent aberration drift. The G2 cemented doublet (L10 + L11) trims residual axial color and astigmatism.

**Concentric rear correction (G3):** The negative doublet L3a plus the concentric meniscus L14 implement an off-Gauss sagittal-coma correction strategy. L14's concentricity with the stop (R33/Ds33 = −1.52) is the patent's primary mechanism for achieving flat sagittal performance across the 56° field at F/1.4.

**Aspherical field-edge cleanup (L16):** The dual-asphere final element provides the fine-tuning needed to push residual spherical aberration and coma below the 8K resolution threshold claimed for the cine-derived optical design.

## Design Heritage and Context

The Sigma 40mm f/1.4 DG HSM Art (A018) is historically significant as Sigma's first still-photography lens whose optical design originated from the company's high-end cine lens program (the FF High Speed Prime Line). Rather than adapting an existing Art-series still design for cinema use — as Sigma had done with previous cine primes — the 40mm f/1.4's optical formula was designed from the outset to meet cine-lens performance standards for field uniformity and sagittal performance, then packaged in the Art-series housing.

The 40mm focal length was not previously offered in the Art series. Its selection was driven by cinema conventions, where 40mm is a preferred standard lens for Super 35 and full-frame digital cinematography. The resulting optical system is substantially larger and heavier (1,200 g / 87.8 × 131 mm for the SA mount) than typical 40mm still-photography primes — reflecting the optical complexity required to achieve F/1.4 with uniform field performance across the full 43.3 mm image circle.

The patent was filed by inventor Yamanaka Kenji, with the publication appearing approximately thirteen months after the production lens began shipping. All four numerical examples share the same 16-element / 12-group architecture, three-FLD / three-SLD material palette, and floating dual-group focus mechanism, varying only in specific glass choices, curvatures, and spacings — suggesting the four embodiments represent optimization iterations around a single architectural concept.

## Sources

- JP 2020-012952 A, "撮像レンズ" (Imaging Lens), Sigma Corporation / Yamanaka Kenji, published 23 January 2020.
- Sigma Corporation product page: "40mm F1.4 DG HSM | Art" — specifications, lens construction diagram, and technology descriptions. https://www.sigma-global.com/en/lenses/a018_40_14/
- Sigma Corporation press release (September 2018): development announcement confirming cine-lens origin of the optical design.
- Kazuto Yamaki (Sigma CEO), interview with Imaging Resource (September 2020): discussion of FLD glass equivalence to fluorite and Sigma's glass selection methodology.
- HOYA Corporation optical glass catalog: FCD100, M-FCD500, PCD51, E-FD15, E-F3, E-FL5 catalog entries.
- OHARA Corporation optical glass catalog (May 2023 pocket edition): S-LAH66, S-LAH55V, S-NPH2, S-TIM35, S-NBH56 catalog entries.
