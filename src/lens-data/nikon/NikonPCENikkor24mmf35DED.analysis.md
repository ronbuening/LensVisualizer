# Nikon PC-E Nikkor 24 mm f/3.5D ED — Optical Design Analysis

**Patent:** JP 2008-151949A, Example 2 (Nikon Corporation / Takayuki Sensui)
**Inventor:** Takayuki Sensui
**Applicant:** Nikon Corporation
**Filed:** December 15, 2006
**Published:** July 3, 2008
**Production lens:** PC-E NIKKOR 24 mm f/3.5D ED (Nikon product code 2168)

---

## 1. Overview

The PC-E Nikkor 24 mm f/3.5D ED is a manual-focus, perspective-control (tilt-shift) prime lens for Nikon F-mount SLR cameras. It provides ±8.5° of tilt and ±11.5 mm of shift, with ±90° of rotation about the lens axis. The optical formula presented in Example 2 of the patent is a 13-element, 10-group retrofocus wide-angle design with three ED glass elements, three aspherical elements, and Nano Crystal Coat. Focusing is achieved by translating the rear lens group (G2) along the axis while the front group (G1) remains stationary — Nikon markets this as "Rear Focusing" with "Close Range Correction."

The patent was filed by Nikon Corporation with inventor Takayuki Sensui. Of the four numerical examples provided, Example 2 is notable for its use of two composite-type aspherical elements (glass body + source-listed resin layer) in the front subgroup, matching the production lens's advertised three aspherical elements and 13-element construction.

The literal model passes centered FX checks but does not verify the full shift image circle: the source-profile limits described below restrict the centered chief-ray height to 23.81 mm against the patent’s29.3 mm.

### Manufacturer Specifications vs. Patent Design

| Parameter | Nikon (marketed) | Patent Example 2 |
|-----------|-----------------|-------------------|
| Focal length | 24 mm | 24.642 mm |
| Maximum aperture | f/3.5 | f/3.6 (FNO = 3.6) |
| Angle of view (FX) | 84° | 101° (2ω, full image circle) |
| Elements / Groups | 13 / 10 | 13 / 10 ✓ |
| ED elements | 3 | 3 ✓ |
| Aspherical elements | 3 | 3 ✓ |
| Min. focus distance | 0.21 m | (tabulated to β = −1/10) |
| Max. magnification | 0.37× | (not tabulated at full close) |
| Filter size | 77 mm | — |
| Diaphragm blades | 9 (rounded) | — |

The marketed f/3.5 versus patent f/3.6 discrepancy is typical: Nikon rounds favorably for marketing, while the patent states the unrounded design value. The angle-of-view difference is more interesting: Nikon's 84° is the standard FX-format field for a 24 mm lens (2 × arctan(21.6/24) ≈ 84°), while the patent's 2ω = 101° corresponds to the much larger design image circle needed to accommodate the ±11.5 mm shift mechanism. At the design EFL of 24.64 mm, a 101° full field implies an image semi-diagonal of approximately 29.9 mm — yielding an image circle diameter of roughly 60 mm, substantially larger than the 43.3 mm FX diagonal. This oversized corrected field is essential for a perspective-control lens: when the lens is shifted to its maximum, the projected image must remain well-corrected across the displaced sensor area.

---

## 2. Optical Architecture

The design is a **retrofocus** (inverted-telephoto) wide-angle. The back focal distance is 56.5 mm — over 2.29× the effective focal length — providing ample clearance for the F-mount SLR mirror box and the tilt-shift mechanism's mechanical travel.

The lens comprises two main groups separated by the aperture stop:

**Group 1 (G1)** — Positive, fixed during focus. Contains two subgroups:
- **Front subgroup (Gf):** Four elements (L11–L14). Three negative menisci with convex sides toward the object gradually refract off-axis ray bundles inward without introducing excessive aberration at any single surface, followed by a biconvex positive element. The meniscus cascade is the hallmark aplanatic approach of retrofocus wide-angle designs. Two of the three menisci (L11, L13) carry composite aspheric layers on their image-side surfaces.
- **Rear subgroup (Gr):** Five elements in three units (L15 alone; L16+L17 cemented doublet; L18+L19 cemented doublet). This subgroup provides the positive power that converges the beam toward the stop and corrects chromatic aberrations using ED glass.

**Aperture stop (S)** — Located between G1 and G2. Moves with G2 during focusing.

**Group 2 (G2)** — Positive, moves along the axis for focusing. Four elements in three units (L21 alone; L22+L23 cemented doublet; L24 alone). Contains ED glass and the third aspherical surface on L24's rear face. This group provides the final convergence to the image plane and corrects residual spherical aberration, coma, and chromatic aberrations.

### Verified Group Focal Lengths

| Group | Focal Length (mm) | Character |
|-------|------------------:|-----------|
| Gf (front subgroup, L11–L14) | −184.0 | Negative (retrofocus front) |
| Gr (rear subgroup, L15–L19) | +314.2 | Positive (convergence) |
| G1 (entire, L11–L19) | +404.2 | Weakly positive overall |
| G2 (L21–L24) | +69.5 | Strongly positive (focus group) |
| Whole system | +24.64 | Matches patent EFL ✓ |

The condition f1/f = 404.2/24.64 = 16.40 matches the patent's stated value exactly. The ratio f1/f2 = 404.2/69.5 = 5.81 also matches the patent (5.82, rounding difference). The strongly positive G2 relative to the weakly positive G1 produces the large retrofocus back-focus distance, while G2's compact size (D2/f = 0.822) enables lightweight, rapid focusing.

---

## 3. Element-by-Element Analysis

### 3.1 Front Subgroup (Gf) — Retrofocus Diverging Section

**L11 — Composite Aspherical Negative Meniscus** (Surfaces 1–3)

L11 is the front element: a high-index lanthanum glass body (nd = 1.8040, νd = 46.58; S-LAH65V) with a thin source-listed resin layer (nd = 1.55389, νd = 38.09; cure unspecified) bonded to its image-side surface. The resin's outer surface (Surface 3) is aspherical with a hyperboloidal base conic (K = −2 in standard convention; the patent's κ = −1 maps to K = κ − 1 = −2).

As the first element in the cascade, L11 accepts the widest off-axis ray bundles. Its convex-to-object meniscus shape distributes the refraction across both surfaces to moderate incidence angles (the aplanatic condition). Surface 3 is a diverging interface (resin-to-air), and the aspherical departure flattens it progressively toward the rim. This flattening reduces the surface's divergent power at large ray heights, so off-axis rays are bent outward less aggressively than they would be by a sphere. In a retrofocus design, the front negative menisci tend to over-diverge extreme off-axis bundles, producing barrel distortion; the asphere counteracts this by reducing the divergence precisely where it would be most harmful. The patent (¶14) describes this as an aspherical surface "whose convergence increases toward the lens periphery" — meaning the surface becomes progressively less divergent (relatively more convergent) at larger heights.

Standalone element focal lengths: glass body f ≈ −55.5 mm; resin layer f ≈ −140.3 mm; composite f ≈ −39.9 mm (strong negative).

**L12 — Negative Meniscus** (Surfaces 4–5)

A high-index lanthanum glass (nd = 1.8010, νd = 34.96; Hikari J-LAF016) meniscus, convex to the object. This is the second aplanatic surface in the cascade, continuing the gradual inward bending of off-axis beams. Its relatively high dispersion (νd ≈ 35) is intentional: the negative power combined with higher dispersion contributes a chromatic correction term that partially offsets the axial color introduced by the positive elements downstream.

Standalone element focal length: f ≈ −57.3 mm.

**L13 — Composite Aspherical Negative Meniscus** (Surfaces 6–8)

The third meniscus in the cascade. The glass body is a barium-based crown (nd = 1.5831, νd = 59.38; S-BAL42) — notably different from the high-index glasses of L11 and L12. A source-listed resin layer (same nd = 1.5539 material as L11) is bonded to the image-side surface, with an aspherical outer face (Surface 8; K = −2 in standard convention).

The choice of a lower-index crown for L13 compared to L11 and L12 is significant. By this point in the cascade, the marginal ray height has decreased and the off-axis beams have already been substantially redirected. Using a lower-index glass here reduces the surface power per unit curvature, which moderates higher-order aberration contributions at this position. The aspherical departure on Surface 8 follows the same pattern as Surface 3 — the surface is flatter than a sphere at the rim. Since Surface 8 is a diverging interface (light passing from higher-index resin into air), this flattening reduces the divergent power at the rim, effectively lessening the off-axis ray divergence and assisting with distortion and lateral color control.

Standalone element focal lengths: glass body f ≈ −135.0 mm; resin layer f ≈ −758.0 mm; composite f ≈ −114.7 mm (weaker negative than L11 or L12).

**L14 — Biconvex Positive** (Surfaces 9–10)

A moderately dispersive glass (nd = 1.5814, νd = 40.75; E-FL5). This element terminates the front subgroup by providing positive power to partially converge the beam before it enters the rear subgroup. Its biconvex shape distributes the positive refraction across both surfaces for minimum spherical aberration contribution.

Standalone element focal length: f ≈ +37.8 mm (strong positive).

The front subgroup as a whole has a focal length of −184.0 mm, confirming its diverging character. The patent's condition (6) gives (−f_Gf)/f_Gr = 0.59, indicating a moderate retrofocus ratio within G1 — the front subgroup's divergence is roughly 59% of the rear subgroup's convergence.

### 3.2 Rear Subgroup (Gr) — Convergence and Chromatic Correction

**L15 — Biconcave Negative ED Glass** (Surfaces 11–12)

This is the first of three ED glass elements (nd = 1.4970, νd = 81.61; S-FPL51). Its biconcave shape provides negative power (f ≈ −32.8 mm), but its primary role is chromatic: the very high Abbe number means this element introduces minimal chromatic dispersion of its own. Positioned between the strongly positive L14 and the cemented doublet L16+L17, it creates an air-spaced triplet-like configuration that enables fine correction of both axial and lateral chromatic aberrations.

S-FPL51 supplies an anomalous-dispersion catalog proxy for these source coordinates; the patent does not publish its partial-dispersion value or identify that material. The three positions have the same source pair and share a qualified catalog curve; their production material identities are unconfirmed.

**L16 + L17 — Cemented Doublet** (Surfaces 13–15)

L16 (biconvex positive, nd = 1.5481, νd = 45.79; S-TIL1) is cemented to L17 (negative meniscus convex to image, nd = 1.8061, νd = 40.94; S-LAH53). The doublet has a combined focal length of +192.4 mm (weakly positive), functioning primarily as a corrector rather than a power element. The cemented interface at R = −25.703 mm provides a strong chromatic and spherical aberration correction surface. The near-flat rear surface of L17 (R = −564.6 mm) indicates that L17 is a thin negative meniscus contributing predominantly to chromatic balancing rather than geometric ray bending.

**L18 + L19 — Cemented Doublet** (Surfaces 16–18)

L18 (negative meniscus convex to object, nd = 1.8040, νd = 46.58; S-LAH65V — same glass as L11) is cemented to L19 (biconvex positive, nd = 1.5481, νd = 45.79; S-TIL1 — same glass as L16). This doublet is significantly more powerful (f ≈ +43.5 mm) and provides the bulk of the rear subgroup's convergent power, directing the beam toward the aperture stop.

The near-equal Abbe numbers of L18 and L19 (46.58 vs. 45.79) might seem counterproductive for achromatization, but the doublet's role here is primarily geometric: it converges the beam while controlling coma and field curvature. Chromatic correction at this position is handled by the upstream ED element L15 and the cemented interface in L16+L17.

### 3.3 Group 2 (G2) — Focus Group

**L21 — Equi-Biconvex Positive ED Glass** (Surfaces 20–21)

A symmetric biconvex element (R_front = +34.76, R_rear = −34.76 mm) in ED glass (nd = 1.4970, νd = 81.61; S-FPL51). The symmetric shape minimizes coma at the design conjugate. This is the strongest positive element in G2 (f ≈ +36.6 mm) and carries the majority of G2's converging power. As an ED element, it contributes to axial color correction while introducing positive anomalous partial dispersion.

**L22 + L23 — Cemented Doublet** (Surfaces 22–24)

L22 (biconcave negative, nd = 1.8340, νd = 37.17; S-LAH60) is cemented to L23 (biconvex positive ED, nd = 1.4970, νd = 81.61; S-FPL51). The combined focal length is −49.7 mm (negative), making this a Schott-type achromatic corrector. The Abbe number difference of 81.61 − 37.17 = 44.44 provides strong achromatization at the junction surface. The patent's condition (5) requires Δν2 > 36.00; the computed value of 38.62 satisfies this comfortably.

This doublet's negative power partially offsets L21's strong positive contribution, yielding a net G2 focal length of +69.5 mm. The balance between L21's positive power and the doublet's negative correction produces well-controlled spherical aberration and axial color across the focusing range.

**L24 — Positive Meniscus with Aspherical Rear Surface** (Surfaces 25–26)

The final optical element, made of BK7-type glass (nd = 1.5163, νd = 64.14; S-BSL7 / N-BK7). Its rear surface (Surface 26) is aspherical with a paraboloidal base conic (K = −1 in standard convention; patent κ = 0). This is a meniscus with both radii negative, convex toward the image side. The standalone focal length is +144.0 mm (weakly positive).

The aspherical departure on Surface 26 is substantial: at the rim the surface is progressively shallower than the corresponding sphere. Surface 26 is a converging interface (glass-to-air at a concave surface), and the aspherical flattening at the rim progressively reduces this convergence at large ray heights. The effect is to pull marginal rays — which would otherwise be overcorrected by the preceding positive elements — back toward the paraxial focus, directly correcting residual spherical aberration and field curvature. Because L24 is the last element before the image plane (after the long 56.5 mm back-focus air gap), its aspherical surface acts at large ray heights where polynomial correction is most efficient.

---

## 4. Aspherical Surfaces

The design employs three aspherical surfaces on three distinct elements. All three use even-order polynomial coefficients (C4 through C12 or C10) superimposed on a conic base curve. No odd-order terms are present.

### Conic Convention

The patent's sag formula uses κ (kappa) in the discriminant: X(y) = (y²/r) / [1 + √(1 − κ·y²/r²)] + Σ Cn·y^n. Comparing with the standard convention Z(h) = (h²/R) / [1 + √(1 − (1+K)·(h/R)²)] + Σ An·h^n, we identify κ = 1+K, therefore K = κ − 1.

| Surface | Element | R (mm) | κ (patent) | K (standard) | Base Conic Type |
|---------|---------|-------:|:----------:|:------------:|:----------------|
| 3 | L11 resin rear | +17.929 | −1.0 | −2.0 | Hyperboloid |
| 8 | L13 resin rear | +26.486 | −1.0 | −2.0 | Hyperboloid |
| 26 | L24 rear | −40.130 | 0.0 | −1.0 | Paraboloid |

The hyperboloidal base conics (K = −2) on the composite aspheric surfaces produce a sag profile that is substantially flatter than a sphere at the same radius of curvature. The choice of K = −2 rather than a pure sphere (K = 0) as the starting point reduces the magnitude of polynomial coefficients needed, which improves manufacturing tolerance sensitivity.

### Polynomial Coefficients

**Surface 3** (L11 resin, R = +17.929 mm):

| Coefficient | Value |
|-------------|------:|
| K | −2.0 |
| A4 | −4.13510 × 10⁻⁷ |
| A6 | −6.54140 × 10⁻⁹ |
| A8 | +4.34370 × 10⁻¹¹ |
| A10 | −1.52710 × 10⁻¹³ |
| A12 | +2.2759 × 10⁻¹⁶ |

**Surface 8** (L13 resin, R = +26.486 mm):

| Coefficient | Value |
|-------------|------:|
| K | −2.0 |
| A4 | +1.11340 × 10⁻⁵ |
| A6 | −1.45900 × 10⁻⁸ |
| A8 | +1.29450 × 10⁻¹¹ |
| A10 | +2.41080 × 10⁻¹⁴ |
| A12 | −9.7211 × 10⁻¹⁶ |

**Surface 26** (L24 rear, R = −40.130 mm):

| Coefficient | Value |
|-------------|------:|
| K | −1.0 |
| A4 | +9.31650 × 10⁻⁶ |
| A6 | +1.97700 × 10⁻⁸ |
| A8 | −4.09340 × 10⁻¹¹ |
| A10 | +1.60590 × 10⁻¹³ |

Note: The patent provides coefficients through C12 for Surfaces 3 and 8, and through C10 for Surface 26. The patent's C12 notation uses the form "0.XXXXX E-NN" (e.g., "0.22759E-15" = 2.2759 × 10⁻¹⁶).

---

## 5. Glass Selection and Chromatic Strategy

Table 2 supplies 15 modeled media: 13 physical glass elements and two source-listed resin layers (¶0041). The source gives d-line nd/νd only, with no numeric θgF or C/F/g index anchors. The 13 current coefficient curves below are qualified spectral proxies. The resin layers remain unresolved; UV curing and specific chemistry are not stated.

| Element | Source nd / νd | Current curve (native nd / νd) | Qualification |
|---|---:|---|---|
| L11 | 1.804000 / 46.58 | S-LAH65V (Ohara; 1.803999 / 46.583400) | Spectral proxy; supplier/melt unconfirmed |
| L11r | 1.553890 / 38.09 | Unresolved resin layer | Abbe estimate; chemistry/cure unestablished |
| L12 | 1.801000 / 34.96 | J-LAF016 (Hikari; 1.801000 / 34.920000) | Spectral proxy; supplier/melt unconfirmed |
| L13 | 1.583130 / 59.38 | S-BAL42 (Ohara; 1.583126 / 59.374700) | Spectral proxy; supplier/melt unconfirmed |
| L13r | 1.553890 / 38.09 | Unresolved resin layer | Abbe estimate; chemistry/cure unestablished |
| L14 | 1.581440 / 40.75 | E-FL5 (Hoya; 1.581440 / 40.890000) | Spectral proxy; supplier/melt unconfirmed |
| L15 | 1.497000 / 81.61 | S-FPL51 (Ohara; 1.496999 / 81.545900) | Spectral proxy; supplier/melt unconfirmed |
| L16 | 1.548140 / 45.79 | S-TIL1 (Ohara; 1.548141 / 45.784277) | Spectral proxy; supplier/melt unconfirmed |
| L17 | 1.806100 / 40.94 | S-LAH53 (Ohara; 1.806098 / 40.926000) | Spectral proxy; supplier/melt unconfirmed |
| L18 | 1.804000 / 46.58 | S-LAH65V (Ohara; 1.803999 / 46.583400) | Spectral proxy; supplier/melt unconfirmed |
| L19 | 1.548140 / 45.79 | S-TIL1 (Ohara; 1.548141 / 45.784277) | Spectral proxy; supplier/melt unconfirmed |
| L21 | 1.497000 / 81.61 | S-FPL51 (Ohara; 1.496999 / 81.545900) | Spectral proxy; supplier/melt unconfirmed |
| L22 | 1.834000 / 37.17 | S-LAH60 (Ohara; 1.834000 / 37.160000) | Spectral proxy; supplier/melt unconfirmed |
| L23 | 1.497000 / 81.61 | S-FPL51 (Ohara; 1.496999 / 81.545900) | Spectral proxy; supplier/melt unconfirmed |
| L24 | 1.516330 / 64.14 | S-BSL7 (Ohara; 1.516330 / 64.140000) | Spectral proxy; supplier/melt unconfirmed |

The three ED/APD positions remain qualified inferences from the source pairs and production three-ED count. The former dPgF = +0.030 copies on L15/L21/L23 came from generic catalog interpretation, not the patent, and have been removed. These elements now follow their existing S-FPL51 curve directly. No source partial-dispersion value is available to convert against the engine’s 0.6438 − 0.001682νd baseline. The source condition Δν2 = 38.62 concerns mean Abbe-number contrast in G2, not anomalous partial dispersion, and is retained.

### Chromatic Correction Strategy

The design's chromatic correction operates at three levels:

1. **Primary achromatization** within G2 is handled by the L22+L23 cemented doublet, where the S-LAH60/S-FPL51 pair provides a Δνd of 44.4. The patent's condition (5) requires Δν2 > 36.0 to ensure adequate lateral color correction; the achieved value of 38.62 (computed as the difference between the mean νd of G2's positive elements and the mean νd of G2's negative elements) satisfies this.

2. **Secondary spectrum correction** is a qualified interpretation of the inferred ED positions and their S-FPL51 catalog curve. The patent supplies no per-element partial-dispersion measurement; no fixed catalog anomaly is stored as a source constraint.

3. **Within G1**, the L16+L17 cemented doublet provides local chromatic balancing at the beam-convergence zone. The catalog curve does not establish a source-measured anomaly or production identity for L17.

---

## 6. Focus Mechanism

The lens focuses by translating G2 (including the aperture stop) along the optical axis while G1 remains fixed. This is a simple rear-group unit-focus mechanism: only the air gap between G1 and G2 (designated D18 in the patent) changes during focusing.

### Variable Spacing Table (Patent Data)

| Focus State | D18 (mm) | BF (mm) | D18 + BF (mm) | ΔD18 (mm) |
|-------------|:--------:|:-------:|:-------------:|:---------:|
| Infinity | 11.681 | 56.500 | 68.181 | 0 |
| β = −1/30 | 10.857 | 57.324 | 68.181 | −0.824 |
| β = −1/10 | 9.213 | 58.968 | 68.181 | −2.468 |

The sum D18 + BF = 68.181 mm is conserved across all focus states, confirming rigid-body translation of G2.

### Close-Focus Extrapolation

The patent tabulates focus data only to β = −1/10 (magnification 0.1×). The production lens achieves a maximum magnification of 0.37× at a minimum focus distance of 0.21 m (from the focal plane). To estimate the variable gaps at close focus, a paraxial conjugate solve was performed using `scipy.optimize.brentq`:

| Focus State | D18 (mm) | BF (mm) | Focus Dist. (mm) | |m| |
|-------------|:--------:|:-------:|:----------------:|:----:|
| Close (0.21 m) | 3.035 | 65.146 | 210.0 | 0.352 |

The paraxial model yields |m| ≈ 0.352 at 210 mm, versus Nikon's marketed 0.37×. The ~5% discrepancy is expected: paraxial approximations underestimate magnification at close range for retrofocus designs where thick-lens and pupil-shifting effects become significant. The computed D18 = 3.035 mm represents approximately 8.6 mm of G2 travel from infinity — a substantial excursion that exercises the lens well beyond the patent's tabulated range.

Nikon describes the focus system as "Rear Focusing" with "Close Range Correction" (CRC). In Nikon's terminology, CRC typically implies a floating-element design with multiple independently moving groups. Here, however, only one gap varies — G2 moves as a unit. The "Close Range Correction" designation likely refers to the inherently well-corrected close-range performance enabled by the internal rear-group focus rather than a multi-group floating mechanism.

---

## 7. Semi-Diameter Estimation

The source publishes no clear-aperture table. The current caps combine the literal Example 2 prescription, Figure 3’s optical outline and the repository’s geometric/beam limits. The 2026-10-30 original-figure reinspection below records the accepted source-supported growth and the two hybrid-profile bounds. Those bounds prevent a literal reproduction of the schematic outer rims; they are not claims that the drawing publishes smaller numerical diameters. The design aperture remains the printed f/3.6, separately from marketed f/3.5. The actual front clear semi-diameter is 25.5 mm; a 60%-field envelope is not a source clear-aperture measurement.

---

## 8. Petzval Sum and Field Curvature

The computed Petzval sum is **+0.00389 mm⁻¹**, yielding a Petzval radius of approximately **257 mm**. This is a relatively well-controlled value for a retrofocus wide-angle, reflecting the careful balance between the negative front subgroup and the positive rear groups. For context, the diagonal half-image-height on an FX sensor is approximately 21.6 mm; the Petzval sag at the image corner is about 0.91 mm — a moderate value that the design's astigmatism correction is expected to balance.

Retrofocus designs inherently tend toward inward-curving (positive Petzval) fields because the net positive power is concentrated toward the rear. The three ED elements (all with low refractive index, nd ≈ 1.497) contribute disproportionately to the Petzval sum because each surface's Petzval contribution scales as φ/(n·n'), and lower-index media amplify this ratio. This is a known tradeoff of fluorophosphate ED glasses, and the designer has compensated with high-index glasses elsewhere, including J-LAF016 and the S-LAH family, whose large n values suppress their Petzval contributions.

---

## 9. Retrofocus Characterization

| Parameter | Value |
|-----------|------:|
| EFL | 24.64 mm |
| BFD (infinity) | 56.50 mm |
| BFD / EFL | 2.29 |
| Total optical track | 152.5 mm |
| Front vertex to last surface | 96.0 mm |

The BFD/EFL ratio of 2.29 is characteristic of F-mount retrofocus wide-angle designs, providing sufficient clearance (approximately 46.5 mm flange-to-sensor distance plus the tilt-shift mechanism's depth). The generous back-focus also accommodates the 11.5 mm shift travel without vignetting the image circle.

---

## 10. Tilt-Shift Considerations

While the patent itself describes a generic wide-angle lens design without explicitly addressing tilt-shift mechanics, several design choices reflect the requirements of perspective control:

1. **Oversized image circle.** To permit ±11.5 mm shift without vignetting, the lens must illuminate a circle substantially larger than the 43.3 mm FX diagonal. At maximum shift, the effective image diagonal becomes approximately 43.3 + 2×11.5 ≈ 66 mm, requiring the lens to cover medium-format territory at its periphery. The three-meniscus front group with aspherical correction is engineered to maintain image quality across this extended field.

2. **Large back-focus distance.** The 56.5 mm BFD accommodates both the F-mount flange depth and the mechanical pivot/slide mechanism for tilt and shift, which sits between the rear element and the camera body.

3. **Rear-group focus.** By fixing G1 and moving only the compact G2, the focus mechanism avoids disturbing the tilt/shift alignment. The lens's physical length does not change during focusing, and the front element does not rotate — both essential for a tilt-shift lens where the photographer may have carefully set shift and tilt positions before focusing.

4. **Nano Crystal Coat.** Nikon specifies that the production lens carries Nano Crystal Coat (NCC) on selected elements. The patent (¶57) notes that broadband anti-reflection coatings may be applied to reduce flare and ghosting. NCC is particularly beneficial in wide-angle tilt-shift designs: the extreme incidence angles on the front meniscus surfaces and the many air-glass interfaces (26 surfaces total) create numerous potential ghost reflection paths.

---

## 11. Summary of Element Roles

| Element | f (mm) | Glass | Primary Role |
|---------|-------:|-------|--------------|
| L11 | −39.9 | S-LAH65V + resin | Front aplanatic meniscus; aspherical distortion control |
| L12 | −57.3 | J-LAF016 | Second aplanatic meniscus; chromatic balance (high dispersion) |
| L13 | −114.7 | S-BAL42 + resin | Third aplanatic meniscus; aspherical field correction |
| L14 | +37.8 | E-FL5 | Positive power; partial beam convergence |
| L15 | −32.8 | S-FPL51 (ED) | ED negative; axial/lateral color + APD correction |
| L16 | +30.4 | S-TIL1 | Cemented w/ L17; spherical + chromatic correction |
| L17 | −33.4 | S-LAH53 | Cemented w/ L16; chromatic balancing at junction |
| L18 | −72.2 | S-LAH65V | Cemented w/ L19; field curvature correction |
| L19 | +28.0 | S-TIL1 | Cemented w/ L18; convergence toward stop |
| L21 | +36.6 | S-FPL51 (ED) | Primary G2 positive; ED axial color correction |
| L22 | −21.4 | S-LAH60 | Cemented w/ L23; achromatization (high dispersion) |
| L23 | +39.7 | S-FPL51 (ED) | Cemented w/ L22; ED lateral color + APD correction |
| L24 | +144.0 | S-BSL7 / N-BK7 | Weak positive; aspherical SA/field curvature cleanup |

---

## 12. Computational Verification

All numerical claims in this document were independently verified via a paraxial ABCD matrix ray trace implemented in Python. The key results are:

- **EFL:** 24.6421 mm (patent: 24.64209 — agreement to 0.001 mm)
- **BFD:** 56.501 mm (patent: 56.500 — agreement to 0.001 mm)
- **f1/f:** 16.40 (patent: 16.40 ✓)
- **f1/f2:** 5.81 (patent: 5.82 — rounding agreement ✓)
- **D2/f:** 0.822 (patent: 0.822 ✓)
- **D12/f:** 0.74 (patent: 0.74 ✓)
- **(−f1a)/f1b:** 0.59 (patent: 0.59 ✓)
- **Δν2:** 38.62 (patent: 38.62 ✓)
- **D18 + BF conservation:** 68.181 mm at all tabulated focus states ✓
- **Element shapes:** All 13 elements verified against patent prose descriptions ✓
- **Petzval sum:** +0.00389 mm⁻¹ (Petzval radius ≈ 257 mm), computed surface-by-surface ✓
- **Close-focus solve:** D18 = 3.035 mm at 0.21 m focus distance (|m| = 0.352, paraxial approximation)
- **Semi-diameter constraints:** source-derived outlines retain the documented hybrid and adjacent-gap limits; current geometry and actual renders are checked without changing tolerances.

All patent condition expressions verify to the precision provided.

## Original-figure reinspection and outline limits (2026-10-30)

The source Figure 3 review raises the front clear radius to 25.5 mm and opens continuous source-supported outlines elsewhere. The S5 concave rear cap opens to 16.5 mm with a drawn land to 19.5 mm; its adopted cap fraction.846 agrees with the measured≈.850±.007. The source’s full hybrid outer outlines cannot be reproduced with its literal profiles. H1/H2 common junction/rear caps are conservatively15.6/15.3 mm, with positive resin edges.028451/.029350 mm; the next tested profile bounds are documented in the audit. Both compounds remain connected, without a resin-only wing or invented shared-interface land.

Continuous caps at S9/10, S11/12, S14, S21, S22/23/24 and S25/26A have also grown toward the source outline. Tighter gaps and beam requirements prevent other full-figure changes. Asphere departures at their final caps are−3.304977 mm(S3A,15.6), −.445770 mm(S8A,15.3) and+.408608 mm(S26A,13). No source radius, spacing or polynomial has been fitted to the drawing.

All centered FX checks pass. A separate probe of the patent’s29.3 mm image height reaches23.81 mm(81%), limited at the first hybrid junction. The literal model therefore does not verify the entire101° shift image circle or maximum-shift optical performance. Source-scale reductions in the rear outlines would also clip traced beams and are omitted. The source-listed resin layers remain unresolved spectral media with unspecified cure, and catalog curves remain qualified proxies.
