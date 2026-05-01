# Sigma 50mm f/2.8 — Sigma DP3 Merrill
## JP 2014-126652 A, Example 3 (Numerical Example 3)
### Optical Analysis

---

## 1. Patent Identification

| Field | Value |
|---|---|
| Publication number | JP 2014-126652 A (特開2014-126652) |
| Application number | 特願2012-282344 |
| Filing date | 2012-12-26 |
| Publication date | 2014-07-07 |
| Assignee | Sigma Corporation (株式会社シグマ), Kawasaki, Japan |
| Inventor | Noriyuki Ogasawara (小笠原 典行) |
| Title | 結像光学系 (Imaging Optical System) |
| Int. Cl. | G02B 13/00, G02B 13/18 |
| Example used | Example 3 (数値実施例3) |

The patent discloses a medium-telephoto imaging optical system designed for compact digital cameras with large-format image sensors, targeting diagonal field angles near 30° in the APS-C format. The primary design goals are simultaneously achieving a compact total length, a physically small aperture-stop diameter compatible with a leaf shutter, and high optical performance. The patent covers four numerical examples; Example 3 is identified herein as the basis for the production Sigma DP3 Merrill lens.

---

## 2. Product Context

The Sigma DP3 Merrill (released June 2013) is a fixed-lens compact digital camera using Sigma's APS-C-format Foveon X3 "Merrill" direct-image sensor (approximately 23.5 × 15.7 mm, sensor diagonal ≈ 28.3 mm, half-diagonal Y ≈ 14.15 mm). The camera is unusual in that its fixed lens is designed from the outset for this specific sensor, with no need to accommodate a mirror box or interchangeable-mount flange distance. This freedom permits a telephoto-type power structure to be employed without the back-focus-distance penalties imposed by SLR or mirrorless-ILC designs.

**Production specifications (Sigma first-party):**

| Parameter | Value |
|---|---|
| Focal length (marketed) | 50 mm |
| Maximum aperture (marketed) | f/2.8 |
| Angle of view (diagonal) | ≈ 31.7° |
| 35mm-equivalent focal length | ≈ 75 mm |
| Elements / Groups | 10 / 8 |
| Aspherical surfaces | 1 |
| Minimum focus distance | 22.5 cm (from front of lens, per Sigma) |
| Filter thread | 46 mm |

**Correspondence to Example 3:**

| Parameter | Patent (Example 3) | Production |
|---|---|---|
| EFL (computed) | 48.715 mm | 50 mm (nominal) |
| F-number | F/2.91 | F/2.8 |
| Total track | 55.00 mm | — |
| Elements / Groups | 10 / 8 | 10 / 8 ✓ |
| Aspherical surfaces | 1 | 1 ✓ |
| Image height Y | 14.20 mm | ≈ 14.15 mm ✓ |

The ~2.6% difference in focal length (48.715 mm patent vs 50 mm marketed) is within the normal range of prescription refinement between patent filing and production release. The f-number difference (F/2.91 vs F/2.8) may reflect a minor stop aperture adjustment in production. All structural identifying parameters — element count, group count, single aspherical surface, and image circle — match exactly, and all six conditional expressions are satisfied, confirming Example 3 as the production basis.

---

## 3. Optical Layout

The design is a **telephoto-type two-group system**: a positive front group G1 (containing the aperture stop) followed by a negative rear group G2. The term "telephoto type" (望遠型) refers to the power arrangement — positive front, negative rear — not necessarily to the lens being physically shorter than its focal length.

The total track of 55.00 mm is slightly longer than the EFL of 48.72 mm. The telephoto character is better characterized by two quantities:

- **BFD/EFL = 0.181**: The back focal distance (8.835 mm) is only 18% of the EFL. A conventional single-group lens of the same focal length would require BFD ≈ EFL ≈ 49 mm. The telephoto structure reduces this to 8.8 mm, enabling a much shallower camera body.
- **Principal plane positions**: The front principal plane H lies 1.876 mm in front of (to the object side of) surface 1. The rear principal plane H′ lies 39.88 mm in front of the last lens surface, placing it at only 15.1 mm from surface 1 — deep inside the front half of the barrel. This forward migration of H′ is the defining hallmark of a telephoto design.

```
Object ← ∞

  G1A           S      G1B                    G2
  ┌──────────────┐  ┌─────────────────┐   ┌──────────────────────┐
  │  L1   DB1   │  │  D1(L4+L5)  L6  │   │ L7   L8   L9    L10 │
  │  (+)  (-+)  │  │    (-+)     (+)  │───│ (-) (+)  (-)    (+★)│──── I
  └──────────────┘  └─────────────────┘   └──────────────────────┘
   ←────── G1 moves as unit toward object during close focus ──────►
   d11 (variable gap between G1 and G2)
   ★ aspherical rear surface
```

G1 moves as a rigid unit toward the object during close focusing. The rear group G2 and the image sensor remain stationary. Only the air gap d11 (between G1's last surface and G2's first surface) changes during focus.

---

## 4. Surface Prescription

All values in millimetres. Spacings at infinity focus (d11 = 1.800 mm, BF = 8.835 mm).

| Surf | Label | R (mm) | d (mm) | nᵈ | Vᵈ | Medium |
|---|---|---|---|---|---|---|
| 1 | L1 front | +24.8702 | 3.9377 | 1.88300 | 40.80 | Glass (L1) |
| 2 | L1 rear | +143.8625 | 1.7773 | 1.0 | — | Air |
| 3 | L2 front | +18.4598 | 3.7358 | 1.59282 | 68.62 | Glass (L2) |
| 4 | L2/L3 junction | −133.1738 | 0.8000 | 1.80610 | 33.27 | Glass (L3) |
| 5 | L3 rear | +15.3383 | 4.4992 | 1.0 | — | Air |
| STO | Aperture stop | ∞ | 6.7172 | 1.0 | — | Air |
| 7 | L4 front | −15.1537 | 0.8000 | 1.90366 | 31.32 | Glass (L4) |
| 8 | L4/L5 junction | +24.2003 | 3.3262 | 1.83481 | 42.72 | Glass (L5) |
| 9 | L5 rear | −18.3336 | 0.1500 | 1.0 | — | Air |
| 10 | L6 front | +36.4736 | 2.1561 | 1.83400 | 37.34 | Glass (L6) |
| 11 | L6 rear | −85.1508 | **d11** | 1.0 | — | Air ← variable |
| 12 | L7 front | +44.3715 | 0.8000 | 1.62004 | 36.30 | Glass (L7) |
| 13 | L7 rear | +16.4586 | 2.5073 | 1.0 | — | Air |
| 14 | L8 front | −412.6963 | 3.8324 | 1.84666 | 23.78 | Glass (L8) |
| 15 | L8 rear | −26.2443 | 2.9513 | 1.0 | — | Air |
| 16 | L9 front | −14.7356 | 0.8000 | 1.80420 | 46.50 | Glass (L9) |
| 17 | L9 rear | −122.8394 | 0.9580 | 1.0 | — | Air |
| 18 | L10 front | +104.8826 | 4.6192 | 1.80834 | 40.92 | Glass (L10) |
| 19★ | L10 rear | −78.8550 | **BF** | 1.0 | — | Air ← aspherical, variable |

★ Aspherical surface. Variable gap values:

| Gap | Infinity focus | β = \|10\| |
|---|---|---|
| d11 (L6 rear → L7 front) | 1.8000 mm | 4.2909 mm |
| BF (L10 rear → image) | 8.8352 mm | 8.8352 mm |

---

## 5. Aspherical Surface — Surface 19

The rear surface of L10 is the sole aspherical surface in the design. The sag equation follows the standard convention:

$$z(h) = \frac{h^2/R}{1 + \sqrt{1 - (1+K)(h/R)^2}} + A_4 h^4 + A_6 h^6 + A_8 h^8 + A_{10} h^{10}$$

**Coefficients for surface 19:**

| Coefficient | Value |
|---|---|
| R | −78.8550 mm |
| K | 0.00000 |
| A₄ | −3.70226 × 10⁻⁵ |
| A₆ | +1.10203 × 10⁻⁸ |
| A₈ | −2.88695 × 10⁻¹¹ |
| A₁₀ | +1.86588 × 10⁻¹³ |

K = 0 means the base conic is a sphere; all aspherical departure is carried by the even polynomial terms A₄–A₁₀. The dominant term is A₄, which is negative. Because the base surface is concave (R < 0, center of curvature to the left), a negative A₄ increases the local sag magnitude at larger heights — the surface becomes more strongly concave away from the axis, producing increasing positive refracting power toward the margin. The patent explicitly describes this in Claim 2: "光軸からの距離が大きくなるに従って正の屈折力が強くなる形状の非球面" — an aspherical shape whose positive refractive power increases with distance from the optical axis.

**Computed aspherical departure from the spherical base:**

| Height h (mm) | Departure (µm) |
|---|---|
| 3.0 | −3.0 |
| 5.0 | −23.0 |
| 8.0 | −149 |
| 10.0 | −360 |
| 12.0 | −736 |

The departure is negative throughout and grows steeply at larger radii. This is a strongly aspherized surface by typical prime-lens standards. The estimated chief-ray height at surface 19 for the full APS-C field is approximately 10.5 mm, meaning the correction at the working aperture reaches several hundred microns. This scale of departure is required to correct the inherent pincushion distortion of the telephoto layout and to flatten the tangential field across the image circle.

The sign alternation of A₄ (−), A₆ (+), A₈ (−), A₁₀ (+) is characteristic of a zonal-balancing profile: each higher-order term corrects residual overcorrection from the preceding term at larger radii.

---

## 6. Lens Group and Element Analysis

### 6.1 Computed System Parameters

The following values were independently verified by paraxial ABCD matrix ray trace using the exact prescription from the patent table.

| Quantity | Computed | Patent | Residual |
|---|---|---|---|
| System EFL | 48.715 mm | 48.72 mm | +0.005 mm |
| BFL (∞ focus) | 8.836 mm | 8.835 mm | +0.001 mm |
| Total track | 55.003 mm | 55.00 mm | +0.003 mm |
| ENP (in front of surface 1, in object space) | 19.054 mm | — | — |
| H (front principal plane, in front of surf 1) | 1.876 mm | — | — |
| H′ (rear principal plane, ahead of surf 19) | 39.88 mm | — | — |
| H′ from surface 1 | 15.12 mm | — | — |
| Petzval radius | 614.3 mm | — | — |
| f/f1A | 0.938 | 0.94 | — |
| f/f1 | 1.399 | 1.40 | — |
| ENP/f | 0.391 | 0.391 | — |
| φA/φENP | 0.625 | 0.63 | — |

**Note on the 2ω discrepancy:** The paraxial half-field angle arctan(14.20/48.715) = 16.25° gives 2ω = 32.50°, while the patent states 2ω = 32.05° (half-angle 16.025°). The difference corresponds to approximately +1.5% pincushion distortion: the actual image height of 14.20 mm at a real half-field angle of 16.025° exceeds the paraxial prediction of 13.99 mm by 0.21 mm. This residual pincushion is inherent in the telephoto power arrangement. The aspherical surface 19 partially corrects it but does not eliminate it entirely.

### 6.2 Group Focal Lengths

| Group | Surfaces | Computed EFL | Patent EFL |
|---|---|---|---|
| G1A (front sub-group) | 1–5 | +51.942 mm | +51.94 mm |
| G1B (rear sub-group) | 7–11 | +37.955 mm | +37.96 mm |
| G1 (full front group) | 1–11 | +34.835 mm | +34.83 mm |
| G2 (rear group) | 12–19 | −49.537 mm | −49.54 mm |

### 6.3 Individual Element Focal Lengths

Computed as thick-lens subsystem EFLs with the element treated in isolation in air, giving each element's intrinsic focal length.

| Element | EFL (mm) | Sign | Note |
|---|---|---|---|
| L1 | +33.53 | Positive | High-index positive meniscus |
| L2 (isolated) | +27.6 | Positive | Front surface dominant; in air |
| L3 (isolated) | −17.0 | Negative | Dominant negative contributor within DB1 |
| DB1 (L2+L3 combined) | −57.97 | **Negative** | Net-negative cemented doublet |
| L4 (isolated) | −10.2 | Negative | Very strong biconcave negative |
| L5 (isolated) | +13.0 | Positive | Dense biconvex positive |
| L4+L5 doublet | −93.37 | Negative | Net-negative cemented pair |
| L6 | +30.87 | Positive | Short-focal-length biconvex relay |
| L7 | −42.66 | Negative | First element of G2 |
| L8 | +32.95 | Positive | Dense positive meniscus |
| L9 | −20.89 | Negative | Strong negative corrector |
| L10 | +56.32 | Positive | Final field lens, aspherical rear |

The counterintuitive result that DB1 is net-negative despite having a biconvex positive element (L2) at its front is explained in Section 7.

---

## 7. Element-by-Element Description

### L1 — High-Index Positive Meniscus (LP1, G1A)
**Surfaces 1–2 | R₁ = +24.870 mm, R₂ = +143.863 mm | Center thickness = 3.938 mm**

Both radii are positive and the front surface is more strongly curved (|R₁| < |R₂|), forming a positive meniscus convex toward the object. EFL = +33.5 mm.

**Glass:** nd = 1.88300, Vd = 40.80. This matches **Ohara S-LAH55** (nd = 1.88300, Vd = 40.76; Δnd = 0, ΔVd = +0.04) and its Hoya equivalent **TAC8** to within catalog melt tolerances. S-LAH55 is a dense lanthanum aluminate glass — very high index, moderate dispersion.

**Role:** L1 is specifically identified in the patent as LP1 and is the subject of Condition (4): NdLP1 > 1.85 (Example 3: nd = 1.883 ✓). The very high refractive index achieves the required positive convergence with gentle surface curvatures, suppressing third-order spherical aberration and coma. The meniscus form reduces the Petzval contribution per unit refractive power compared to a biconvex design. Crucially, L1 concentrates the axial beam into a smaller diameter before the aperture stop — the mechanism by which Condition (1) (φA/φENP < 0.70) is satisfied, enabling compact leaf-shutter operation.

### DB1 — Cemented Doublet L2+L3 (G1A)
**Surfaces 3–5 | L2: R₃ = +18.460 mm, d = 3.736 mm | Junction: R₄ = −133.174 mm | L3: d = 0.800 mm, R₅ = +15.338 mm**

L2 is biconvex (R₃ > 0, R₄ < 0 as seen from within L2); L3 is biconcave (R₄ < 0 at entry, R₅ > 0 at rear). The combined focal length of DB1 is −57.97 mm — it is a net-negative doublet overall, despite having a biconvex positive element (L2) at its front.

This is understood from the individual surface refracting powers:

| Surface | Description | R (mm) | φ (mm⁻¹) | f_surface (mm) |
|---|---|---|---|---|
| 3 | L2 front (air→L2 glass) | +18.4598 | +0.0321 | +31.1 |
| 4 | L2/L3 junction (L2→L3 glass) | −133.1738 | −0.0016 | −624 |
| 5 | L3 rear (L3 glass→air) | +15.3383 | −0.0526 | −19.0 |

The cemented interface (R₄ = −133.17 mm) contributes negligible power because both the radius is large and the refractive index difference across it is modest (n₃ − n₂ = 1.806 − 1.593 = 0.213). L2's front surface contributes +31 mm equivalent focal length. L3's rear surface, where dense glass (nd = 1.806) exits to air across a tightly curved convex surface (R₅ = +15.34 mm), contributes −19 mm. The thin-lens combination of +31 and −19 gives a diverging result; the exact thick-lens EFL is −57.97 mm. **L3's rear surface dominates the power of DB1.**

**L2 glass:** nd = 1.59282, Vd = 68.62. This matches **Ohara S-PHM52** exactly (Δnd = 0, ΔVd = 0). S-PHM52 is an **anomalous partial dispersion (APD)** glass: its Pg,F value (≈ 0.545) lies above the standard glass line by ΔPg,F ≈ +0.017 at Vd = 68.62 (standard value: 0.528). Positive anomalous partial dispersion means the glass refracts short wavelengths relatively more than expected for a glass of its Abbe number class. When used as the positive element of an achromatic doublet, this property reduces the secondary chromatic aberration (the residual color left uncorrected by a conventional achromat). L2 satisfies Condition (5): VdDB1 > 65 (Example 3: Vd = 68.62 ✓).

**L3 glass:** nd = 1.80610, Vd = 33.27. No exact match has been confirmed in the Ohara, Hoya, or Schott catalog lines. The closest confirmed identification is **CDGM H-ZF52** (nd = 1.80610, Vd = 33.27; exact match on both parameters). Given that CDGM glasses appear in other Sigma designs, this is plausible but unconfirmed. The combination of L2 (APD crown, Vd = 68.62) and L3 (dense flint, Vd = 33.27) yields an Abbe difference ΔVd ≈ 35.4, sufficient for achromatic correction plus secondary-spectrum reduction via L2's APD property.

**Role:** DB1 provides the principal chromatic correction for the entire front group. The use of an APD glass (L2, S-PHM52) as the doublet's positive element, paired with a dense flint negative (L3), corrects primary color via the Abbe number difference and reduces secondary spectrum via L2's anomalous partial dispersion. Together with the positive L1 ahead of it, DB1 completes G1A as a compact telephoto sub-system: L1 (EFL +33.5 mm) followed by DB1 (EFL −58.0 mm) gives G1A a net EFL of +51.9 mm while keeping the physical length short.

### L4+L5 Cemented Doublet (G1B)
**Surfaces 7–9 | L4: R₇ = −15.154 mm, junction R₈ = +24.200 mm | L5: junction R₈, R₉ = −18.334 mm**

L4 is biconcave (R₇ < 0, R₈ > 0 from within L4); L5 is biconvex (R₈ > 0, R₉ < 0). The doublet sits immediately behind the aperture stop, with a combined EFL of −93.4 mm.

**L4 glass:** nd = 1.90366, Vd = 31.32. This matches **Ohara S-NPH2** exactly (Δnd = 0, ΔVd ≈ 0). S-NPH2 is among Ohara's densest glasses — extremely high index with very low Abbe number.

**L5 glass:** nd = 1.83481, Vd = 42.72. This matches **Ohara S-LAH58** and its Hoya equivalent **TAC4** exactly (Δnd = 0, ΔVd = 0). S-LAH58 is a dense lanthanum crown — high index, moderate dispersion, complementary to L4 as the achromat pair.

**Role:** The doublet sits immediately behind the stop, where marginal ray height is small (~4.2 mm) and the chief ray grows rapidly with field angle. It therefore corrects axial aberrations introduced by G1A — primarily spherical aberration and axial chromatic aberration — efficiently and without greatly affecting field aberrations. The very high index of L4 (nd = 1.904) enables a strongly curved concave entry surface (R₇ = −15.15 mm) to contribute large negative power in small physical extent. The net-negative L4+L5 combined with the following positive L6 creates the G1B telephoto arrangement, yielding a net positive G1B EFL of +38.0 mm.

### L6 — Biconvex Positive Relay (G1B)
**Surfaces 10–11 | R₁₀ = +36.474 mm, R₁₁ = −85.151 mm | Center thickness = 2.156 mm**

An asymmetric biconvex lens with the front surface more strongly curved. EFL = +30.87 mm.

**Glass:** nd = 1.83400, Vd = 37.34. No exact match confirmed in major catalogs. Candidate glasses from secondary sources include **CDGM H-LAF51** or **Hikari J-LASF019** (both at nd = 1.83400, Vd = 37.34), but neither is confirmed for this lens. The identification is uncertain.

**Role:** L6 provides the convergence needed to bring the L4+L5 diverging beam into a net-converging state within G1B. Its asymmetry (stronger front surface) contributes coma correction against the doublet's aberration profile. The variable gap d11 is immediately behind L6 — during close focusing, L6 moves with G1 while G2 remains stationary.

### L7 — Negative Meniscus (G2)
**Surfaces 12–13 | R₁₂ = +44.372 mm, R₁₃ = +16.459 mm | Center thickness = 0.800 mm**

Both radii are positive; R₁₂ > R₁₃, so the image-side surface is more strongly curved, forming a negative meniscus convex toward the object. EFL = −42.66 mm.

**Glass:** nd = 1.62004, Vd = 36.30. Closest match: **Hoya CF6** (nd = 1.62004, Vd = 36.26; ΔVd = +0.04). Identification tentative.

**Role:** L7 is the first diverging element of G2 and begins the telephoto rear-group action. The moderate index (nd = 1.62) keeps the Petzval contribution modest per unit negative power — lower-index elements at significant off-axis heights generate less Petzval curvature per diopter than high-index alternatives.

**Semi-diameter note:** The rear surface (surface 13, R₁₃ = +16.46 mm) faces a 2.507 mm air gap to L8's nearly-flat front surface (R₁₄ = −412.70 mm). This tight gap with a strongly curved surface limits the clear aperture: paraxial ray trace predicts ~9.3 mm SD at surface 13, but the 90%-of-gap cross-gap intrusion constraint caps it at 8.1 mm. The front surface (surface 12) is similarly reduced to 8.5 mm. This represents real geometric vignetting at this gap location for full aperture and field.

### L8 — Positive Meniscus (G2)
**Surfaces 14–15 | R₁₄ = −412.697 mm, R₁₅ = −26.244 mm | Center thickness = 3.832 mm**

Both radii are negative, with R₁₄ nearly flat (very large radius). R₁₅ = −26.24 mm has its center of curvature to the left, making the rear surface concave from the object side and **convex toward the image**. This is consistent with the patent description: "像側に凸面を向けた正メニスカスレンズ" (positive meniscus with convex face toward the image). Net power is positive, EFL = +32.95 mm.

**Glass:** nd = 1.84666, Vd = 23.78. This matches **Schott SF57** exactly (Δnd = 0, ΔVd = 0) and also **Ohara S-TIH53**. SF57 is a very dense flint with extremely high dispersion.

**Role:** L8 is architecturally unconventional: it is a *positive* element made of *dense flint* glass. Standard practice assigns crown glass (high Vd) to positive elements and flint glass (low Vd) to negative elements. Reversing this produces a positive element that bends light while simultaneously over-correcting chromatic aberration in the direction a negative element would — its chromatic contribution opposes that of ordinary positive elements in G2. This technique, found in telephoto apochromat designs, helps balance secondary chromatic aberration across the rear group.

### L9 — Negative Meniscus (G2)
**Surfaces 16–17 | R₁₆ = −14.736 mm, R₁₇ = −122.839 mm | Center thickness = 0.800 mm**

Both radii are negative; |R₁₆| < |R₁₇| (front surface more strongly curved), forming a negative meniscus with concave face toward the object (convex toward the image). EFL = −20.89 mm — the shortest negative focal length of any single element in the system.

**Glass:** nd = 1.80420, Vd = 46.50. This matches **Hoya TAFD37** exactly (Δnd = 0, ΔVd = 0) and approximately **Ohara S-LAH65** (nd = 1.80440, Vd = 46.57; Δnd = +0.0002, ΔVd = +0.07). Identification is likely Hoya TAFD37 or equivalent but not definitively confirmed.

**Role:** L9 is the highest-power negative element in the system (EFL = −20.89 mm). Its principal function is Petzval correction: a strong negative element with moderately high Vd at large off-axis height efficiently counteracts the cumulative positive Petzval from the many high-index positive elements throughout G1 and G2. Together with L7 and L8, L9 forms a loosely achromatic sub-assembly in G2 with balanced chromatic contributions.

### L10 — Biconvex Positive with Aspherical Rear (G2)
**Surfaces 18–19★ | R₁₈ = +104.883 mm, R₁₉ = −78.855 mm (aspherical) | Center thickness = 4.619 mm**

An asymmetric biconvex lens with the rear surface more strongly curved (|R₁₈| > |R₁₉|). EFL = +56.32 mm.

**Glass:** nd = 1.80834, Vd = 40.92. No confirmed exact catalog match. The values fall in the dense lanthanum crown region. Secondary sources suggest **Hoya TACD5** as a possibility, but this is unconfirmed.

**Role:** As the last powered element before the image plane, L10 acts as a field-flattening and distortion-correcting element. The on-axis marginal ray height at surface 18 is only ~1.9 mm (the beam is tightly converging), so L10's contribution to axial aberrations is small. The off-axis chief ray, however, is at ~9.2 mm and growing — L10 operates primarily on the field structure.

The aspherical rear surface (surface 19) carries the dominant higher-order field correction. At full-field chief-ray heights of ~10–12 mm, the aspherical departure reaches −360 to −736 µm relative to the spherical base. This scale of correction is required because the telephoto layout generates pincushion distortion and tangential field curvature that cannot be adequately corrected by spherical surfaces alone. Placing the aspherical surface here — at the last element, where the axial beam is compact — isolates the correction to field structure and minimizes its impact on on-axis performance. The patent specifies this in Claim 2 as a distinct design requirement: the rearmost G2 element must have an aspherical surface whose positive power increases with distance from the axis.

---

## 8. Focusing Mechanism

The Sigma DP3 Merrill uses **unit focusing of G1**. The entire front group — L1 through L6 plus the aperture stop and its mechanical carrier — translates forward (toward the object) along the optical axis. G2 and the image sensor remain stationary relative to the camera body.

**Variable gap d11** (L6 rear to L7 front) increases as G1 moves forward. At infinity focus, d11 = 1.800 mm. At the patent's β = |10| data point, d11 = 4.291 mm — G1 has traveled 2.491 mm toward the object. Since G2 and the sensor are both stationary, BF (the distance from L10's rear surface to the sensor) is geometrically constant at 8.835 mm at all focus settings.

**Why G1-only focus is sufficient** is explained in the patent (§[0013]): "第２レンズ群Ｇ２の結像倍率が+１．０より大きいため、前記第１レンズ群Ｇ１をフォーカスレンズ群として用いることで、全体繰り出しよりも移動量を抑制することができ" — because G2's imaging magnification is greater than +1.0, using G1 as the focusing group suppresses the required movement amount compared to whole-lens unit-focus extension. Empirically: at β = |10|, G1 travels 2.491 mm, whereas an equivalent whole-lens unit-focus system would require approximately f/β = 48.72/10 ≈ 4.87 mm — a travel saving of approximately 2×. This reduction in focus stroke is a direct consequence of the telephoto group arrangement and G2's magnification property.

**On the β = |10| data point**: The patent's variable-spacing table includes β = |10| (10× macro magnification, image ten times larger than object) as a design-verification condition. At this setting, the object lies approximately 55 mm from the front of the lens — a deep-macro regime not relevant to normal photography. The production Sigma DP3 Merrill specifies a minimum focus distance of 22.5 cm from the front element, which corresponds to an approximate reproduction ratio of ~0.27× (1:3.7), far less extreme than the patent's β = |10| verification point. The stable BF at β = |10| simply confirms that the G1-only focus mechanism maintains correct image position even at extreme magnifications.

---

## 9. Design Intent: Conditional Expressions

The patent defines six conditional expressions. All are satisfied by Example 3 (values verified by independent paraxial ray trace):

| Condition | Inequality | Computed | Patent | Status |
|---|---|---|---|---|
| (1) φA/φENP | 0.60 < x < 0.70 | 0.625 | 0.63 | ✓ |
| (2) f/f1A | 0.80 < x < 1.10 | 0.938 | 0.94 | ✓ |
| (3) f/f1 | 1.30 < x < 1.50 | 1.399 | 1.40 | ✓ |
| (4) NdLP1 | > 1.85 | 1.883 | — | ✓ |
| (5) VdDB1 | > 65 | 68.62 | — | ✓ |
| (6) ENP/f | 0.365 < x < 0.400 | 0.391 | 0.391 | ✓ |

**Condition (1)** — φA/φENP = 0.625: The axial ray bundle diameter at the physical stop is 62.5% of the entrance pupil diameter. G1A concentrates the beam before the stop, so the physical stop blades operate on a smaller diameter than the entrance aperture — the direct mechanism enabling the compact leaf shutter. Values below 0.60 would require G1A power so high that spherical aberration becomes intractable; values above 0.70 would not sufficiently reduce the stop diameter.

**Condition (2)** — f/f1A = 0.938: G1A's focal length (51.94 mm) is close to but slightly longer than the total system focal length (48.72 mm). This near-unity ratio balances the convergence between G1A, G1B, and G2. Exceeding 1.10 over-powers G1A, causing spherical and comatic excess; falling below 0.80 weakens G1A, forcing the stop further from G1A, which raises chief-ray height at G1A and increases manufacturing decentering sensitivity.

**Condition (3)** — f/f1 = 1.40: The full front group G1 (EFL = 34.83 mm) is substantially stronger than the total system (48.72 mm). This ratio of 1.40 sits near the center of the allowed range, representing a moderate telephoto power balance. A higher ratio (stronger G1) produces a more compact layout but increasingly difficult secondary chromatic and manufacturing sensitivity. A lower ratio reduces compaction and requires larger G1 focusing travel.

**Condition (4)** — NdLP1 = 1.883: L1 uses glass above nd = 1.85. Very high index achieves the needed convergence with gentle surfaces, minimizing spherical aberration and Petzval contribution.

**Condition (5)** — VdDB1 = 68.62: The positive element of DB1 (L2) has Abbe number above 65, ensuring it is a low-dispersion glass. Combined with L2's anomalous partial dispersion (ΔPg,F ≈ +0.017), this enables secondary-spectrum control within G1A.

**Condition (6)** — ENP/f = 0.391: The entrance pupil lies 19.054 mm **in front of** (to the object side of) the first lens surface. This distance arises because the stop is placed inside the lens behind the positive G1A group: G1A images the stop to a position in object space, 19 mm in front of surface 1. ENP/f ≈ 0.391 sits near the upper allowed limit. Values above 0.400 would push the ENP further in front of the lens (deeper stop placement), raising chief-ray heights at G1A's elements and amplifying decentering sensitivity. Values below 0.365 would require stronger G1A power, worsening spherical aberration and coma.

---

## 10. Field Flatness

The Petzval sum, computed surface-by-surface as

$$\Pi = \sum_i \frac{n'_i - n_i}{n_i \cdot n'_i \cdot R_i}$$

evaluates to **Π = 0.001628 mm⁻¹**, corresponding to a Petzval radius of **614.3 mm**.

For context, the uncorrected thin-lens Petzval sum for the same focal length is Π₀ = 1/f = 0.02053 mm⁻¹. The design reduces this by **92.1%** — achieved through the deliberate placement of strong negative elements (L3, L4, L9) at high ray heights and high refractive index, counteracting the large positive Petzval contributions from the many high-index positive elements. The remaining 7.9% of the uncorrected Petzval sum corresponds to a 614 mm radius of curvature of the Petzval surface — well outside the image circle. The aspherical surface 19 provides additional tangential field correction beyond what the paraxial Petzval sum captures.

---

## 11. Glass Selection Summary

| Element | nd | Vd | Best catalog match | Confidence | Note |
|---|---|---|---|---|---|
| L1 | 1.88300 | 40.80 | Ohara S-LAH55 / Hoya TAC8 | High | Δnd = 0, ΔVd = +0.04 |
| L2 | 1.59282 | 68.62 | Ohara S-PHM52 | High | Exact; APD glass, ΔPg,F ≈ +0.017 |
| L3 | 1.80610 | 33.27 | CDGM H-ZF52 | Moderate | No Ohara/Hoya/Schott exact match |
| L4 | 1.90366 | 31.32 | Ohara S-NPH2 | High | Exact match |
| L5 | 1.83481 | 42.72 | Ohara S-LAH58 / Hoya TAC4 | High | Exact match |
| L6 | 1.83400 | 37.34 | CDGM H-LAF51 or Hikari J-LASF019 | Low | No confirmed major-catalog match |
| L7 | 1.62004 | 36.30 | Hoya CF6 | Moderate | ΔVd ≈ +0.04 |
| L8 | 1.84666 | 23.78 | Schott SF57 / Ohara S-TIH53 | High | Exact match |
| L9 | 1.80420 | 46.50 | Hoya TAFD37 | Moderate | Ohara S-LAH65: Δnd = +0.0002 |
| L10 | 1.80834 | 40.92 | Uncertain; Hoya TACD5 possible | Low | No confirmed match |

Glass identification is inferential: catalog nd/Vd pairs are compared against the patent values and residuals reported. For L3 and L6, no major Western catalog provides an exact match; CDGM or Hikari formulations are the most likely sources. L10's glass remains unconfirmed at catalog level. Sigma may also use proprietary or non-catalog glass formulations. Identifications marked "Low" confidence should not be cited as confirmed without additional sourcing.

---

## 12. Summary

The Sigma DP3 Merrill lens (JP 2014-126652 A, Example 3) is a purpose-designed medium-telephoto prime optimized for the APS-C Foveon sensor format. Its distinguishing characteristics are:

- A **telephoto power structure** that places H′ only 15.1 mm from surface 1 (39.9 mm ahead of the last surface), enabling BFD = 8.8 mm at f = 48.7 mm — a BFD/EFL ratio of 0.18 — in a 55 mm total track.
- An **internal aperture stop** between G1A and G1B, positioned 19.05 mm in front of the first surface as an entrance pupil, contracting the marginal beam to 62.5% of the entrance pupil diameter and enabling compact leaf-shutter operation.
- A **high-index front positive meniscus** (L1, nd = 1.883) that efficiently converges the axial beam before the stop with minimal spherical aberration and Petzval contribution.
- A **net-negative cemented doublet DB1** (L2+L3) in which L3's rear surface (f_surface = −19.0 mm) dominates the power, combined with an APD positive element (L2, S-PHM52, ΔPg,F ≈ +0.017) to achieve secondary-spectrum correction within G1A.
- **Unit focus of G1** with G2 (magnification > +1.0) amplifying focus displacement — G1 travels approximately half the distance of an equivalent unit-focus design at β = |10|.
- A single **strongly aspherical surface** (surface 19, rear of L10) correcting pincushion distortion and tangential field curvature, with departures reaching −736 µm at h = 12 mm.
- A **92.1% reduction in Petzval sum** relative to the uncorrected thin-lens value, achieved through careful placement of high-index negative elements (L3, L4, L9) at strategic heights within the optical train.

All six patent conditional expressions are satisfied and all group focal lengths agree with patent-stated values to within 0.01 mm.
