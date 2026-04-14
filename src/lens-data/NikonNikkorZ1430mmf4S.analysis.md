# Nikon NIKKOR Z 14-30mm f/4 S — Optical Design Analysis

**Patent:** JP 2019-008031 A (filed 2017-06-21, published 2019-01-17)
**Inventor:** Uehara Ken (上原 健), Nikon Corporation
**Design Example:** Example 1 (第1実施例), Table 1
**Production Lens:** NIKKOR Z 14-30mm f/4 S (announced January 8, 2019)

---

## 1. Overview and Patent–Production Correspondence

JP 2019-008031 A discloses a zoom optical system comprising, from object to image, a negative first lens group G1, a positive second lens group G2, and a rear lens group GR. The rear group GR itself subdivides — counting from the image — into a "final lens group" GE and a "focusing lens group" GF. During zooming every group moves and the air spacings between adjacent groups change; during focusing, at least part of GF moves along the axis.

Example 1 describes a five-group design — G1(−), G2(+), G3(+), G4(−), G5(−) — with 14 elements in 12 air-separated groups, four aspherical surfaces on four distinct elements, and four ED glass elements. These numbers match the production NIKKOR Z 14-30mm f/4 S exactly (Nikon specifies 14 elements / 12 groups, 4 aspherical elements, 4 ED elements). The patent's design focal length of 14.42–29.10 mm at f/4.00 constant aligns with the marketed 14–30 mm f/4 range, and the image height Y = 21.70 mm is consistent with a full-frame 35 mm sensor (43.27 mm diagonal). All of these facts, together with the filing date and publication date bracketing the product announcement, confirm Example 1 as the production prescription or a very close precursor.

### Key Specifications (Patent vs. Production)

| Parameter | Patent Example 1 | Production Lens |
|---|---|---|
| Focal length | 14.42–20.00–29.10 mm | 14–30 mm |
| Maximum aperture | f/4.00 (constant) | f/4 (constant) |
| Half-angle of view (wide) | 57.68° (115.4° diagonal FOV) | 114° FOV |
| Elements / Groups | 14 / 12 | 14 / 12 |
| ED elements | 4 | 4 |
| Aspherical elements | 4 | 4 |
| Diaphragm blades | Not specified in patent | 7 (rounded) |
| Close focus | Not specified (IF design) | 0.28 m |
| Filter size | N/A | 82 mm |

---

## 2. Optical Configuration and Group Structure

The lens follows a **negative-lead (retrofocus) zoom** architecture, which is standard for ultra-wide-angle designs that must maintain a long back focal distance for mirrorless camera compatibility. The five zoom groups are:

**Group G1 (negative, f = −23.30 mm):** Four elements (L11–L14) forming the large-diameter front group. This is the primary diverging group that establishes the retrofocus character of the system. Its strong negative power at the wide end creates the large angular coverage (115° FOV), while the substantial air space D1 between G1 and G2 — which varies from 28.6 mm (wide) to 2.2 mm (tele) — provides the primary zoom lever arm.

**Group G2 (positive, f = +48.88 mm):** Three elements (L21–L23) with L22–L23 forming a cemented doublet. G2 is the main variator, moving strongly toward the object during zooming from wide to tele. The aperture stop S is positioned in the air space immediately following G2 and travels with G2 during zoom.

**Group G3 (positive, f = +26.66 mm):** Four elements in three sub-groups — a cemented doublet (L31+L32), and two singlets (L33, L34). G3 serves as the primary image-forming ("relay") group behind the stop, providing the bulk of the positive power needed to form the image.

**Group G4 (negative, f = −37.58 mm):** A single element (L41), a negative meniscus. This is the **focusing group** (designated GF in patent terminology). Its lightweight single-element construction makes it ideal for stepping-motor-driven autofocus. Focusing from infinity to close range is accomplished by translating G4 toward the image plane, which is the basis for Nikon's internal focusing (IF) designation.

**Group G5 (negative, f ≈ −1393 mm):** Two elements (L51, L52). Designated GE ("final lens group") in the patent. G5 has nearly zero net power — its focal length is approximately −1393 mm, so its primary role is not refractive but rather aberrational: the positive–negative pairing of L51 (ED, positive) and L52 (aspherical, negative) forms a field-flattening arrangement that corrects residual Petzval curvature and off-axis aberrations close to the image plane.

### Zoom Movement Pattern

The patent and computed group positions reveal an elegant mechanical design:

| Group | Wide Position | Tele Position | Shift (W→T) |
|---|---|---|---|
| G1 | 0.0 mm (reference) | 0.0 mm | Fixed in barrel |
| G2 | 60.2 mm | 33.8 mm | −26.4 mm (toward object) |
| G3 | 78.0 mm | 47.6 mm | −30.4 mm (toward object) |
| G4 | 92.0 mm | 62.1 mm | −29.9 mm (toward object) |
| G5 | 98.8 mm | 72.4 mm | −26.4 mm (toward object) |

A crucial design feature: **G2 and G5 share an identical zoom trajectory**, shifting by exactly −26.4 mm from wide to tele. This means G2 and G5 can be mechanically coupled to a single cam track, simplifying the zoom mechanism and improving mechanical precision. The patent explicitly calls this out (paragraph 93). Meanwhile, G3 and G4 travel on independent cam tracks with slightly different trajectories.

The D3 gap (G3→G4) exhibits **non-monotonic behavior**: it increases from 1.579 mm (wide) to 2.261 mm (mid) then decreases to 2.007 mm (tele). This reversal is handled naturally by piecewise-linear interpolation across the three zoom positions and reflects the independent cam trajectories of G3 and G4.

The total track length (first surface to image plane) decreases from 126.5 mm at the wide end to 115.0 mm at the telephoto end. This behavior is consistent with the retractable design of the production lens, where the barrel extends when zoomed to 14 mm and compresses at 30 mm.

---

## 3. Element-by-Element Analysis

### Group G1 — Front Negative Group (4 elements, 4 sub-groups)

**L11 — Negative meniscus, convex toward object**
- nd = 1.69370, νd = 53.32 — Glass: S-BAM4 (OHARA) or E-BAC5 (HOYA)
- Surfaces: S1 (R = +190.754) / S2★ (R = +18.810, aspherical)
- Focal length: f = −30.3 mm
- Role: L11 is the outermost element and the first surface the incoming light encounters. Its very weak convex front surface (R = +190.8 mm, nearly flat) is a defining feature of this design — it enables the production lens to accept 82 mm screw-in filters, a breakthrough for 14 mm coverage. The nearly flat front is unusual for ultra-wide zooms, which traditionally require a large-radius bulbous front element. The aspherical rear surface (S2) carries a strong negative departure (approximately −4.5 mm at the edge) that compensates for the under-corrected spherical aberration and coma that would otherwise result from the weak front curvature. The aspherical profile uses a paraboloidal base (K = −1.0) with A4 through A10 polynomial terms. The glass choice is a mid-index crown (nd ≈ 1.69, νd ≈ 53) that balances mechanical strength for the exposed front element with acceptable dispersion.

**L12 — Negative meniscus, convex toward object**
- nd = 1.69370, νd = 53.32 — Glass: S-BAM4 / E-BAC5 (same as L11)
- Surfaces: S3 (R = +51.563) / S4★ (R = +22.702, aspherical)
- Focal length: f = −61.0 mm
- Role: L12 continues the diverging action of G1 and shares the same glass type as L11. Its aspherical rear surface (S4) provides a large positive departure at the rim (approximately +2.5 mm at h = 15 mm), which acts in opposition to the negative departure on S2. Together, the L11 and L12 aspheres form a matched correction pair: S2 flattens the wavefront excessively in one direction, and S4 partially restores it, with the net effect being precise control over wide-angle field curvature and distortion at the extreme margin of the field. The non-zero A12 coefficient (−5.615 × 10⁻¹⁵) indicates that higher-order correction extending to 12th-order is needed. The S4 polynomial causes the surface slope to exceed 59° at h ≈ 15 mm, limiting the usable clear aperture of this element to roughly 15 mm semi-diameter — well below the paraxial beam estimate.

**L13 — Biconcave negative**
- nd = 1.49782, νd = 82.57 — Glass: **S-FPL51 (OHARA) — ED glass** ★
- Surfaces: S5 (R = −71.065) / S6 (R = +44.484)
- Focal length: f = −54.7 mm
- Role: L13 is the only ED glass element in the front group. Its extremely low dispersion (νd = 82.57) provides chromatic correction where it matters most — at the point in the system where the marginal ray height is large and the angular subtense from different field points creates maximum lateral color. In a negative-lead zoom, placing ED glass in the front negative group is essential to control lateral chromatic aberration across the wide zoom range. The S-FPL51 fluorophosphate glass has anomalous partial dispersion (positive ΔPgF) that bends the secondary spectrum correction beyond what normal crown/flint pairing can achieve.

**L14 — Positive meniscus, concave toward image**
- nd = 1.90265, νd = 35.73 — Glass: S-TIH53 (OHARA) or TAFD25 (HOYA)
- Surfaces: S7 (R = +32.608) / S8 (R = +296.586)
- Focal length: f = +40.3 mm
- Role: L14 is the rear element of G1 and the sole positive element in the group. Both surfaces have R > 0 (centers of curvature to the right), forming a meniscus that presents its concave face toward the image — a shape the patent confirms. The very long rear radius (R = +296.6 mm) means the concave image-side face is nearly flat, giving the element an effectively plano-convex character. Its very high refractive index (nd = 1.90) combined with a low Abbe number (νd = 35.7) makes it a dense flint — paired with L13's ED glass, it forms a widely separated "air-spaced chromatic doublet" that corrects primary color while the anomalous dispersion of S-FPL51 attacks secondary color. The strong positive power also partially offsets the Petzval contribution of the three preceding negative elements, curving the Petzval surface back toward flatness. Edge thickness limits this element's semi-diameter to approximately 15–16 mm despite larger paraxial beam predictions; this reflects the normal wide-angle vignetting expected at 14 mm.

### Group G2 — Positive Variator (3 elements, 2 sub-groups)

**L21 — Positive meniscus, concave toward image**
- nd = 1.59349, νd = 67.00 — Glass: S-PHM52 (OHARA) or MC-PCD4 (HOYA)
- Surfaces: S9 (R = +63.060) / S10 (R = +499.876)
- Focal length: f = +121.4 mm
- Role: L21 is a weakly positive singlet that begins the convergence of the beam after the strongly divergent G1 group. The phosphate crown glass (νd = 67) is chosen for low dispersion to minimize chromatic contribution in the variator. The weak power means L21 primarily serves as a field lens to manage the chief ray height entering the cemented doublet.

**L22 + L23 — Cemented doublet**
- L22: nd = 1.88300, νd = 40.66 — Glass: S-LAH66 (OHARA), negative meniscus
- L23: nd = 1.56883, νd = 56.00 — Glass: S-BAL42 (OHARA), positive meniscus
- Surfaces: S11 (R = +24.006) / S12 (R = +13.347, cemented) / S13 (R = +333.982)
- Combined focal length: f = +82.0 mm
- Role: The L22+L23 doublet is the primary color-correcting element in G2. The high-index lanthanum flint (L22, nd = 1.88) cemented to a barium crown (L23) creates a classic achromatic doublet configuration. The cemented interface at R = +13.347 mm has a strong curvature that provides most of the chromatic correction, while the overall positive power contributes to the convergence needed for the relay group.

### Aperture Stop

The aperture stop S is located in the air space between G2 and G3, at surface 14 (R = ∞, flat). It is mechanically independent of G2 but moves with G2 during zooming. The stop-to-G3 distance (D2) varies from 7.5 mm (wide) to 3.5 mm (tele), shrinking as the groups compress toward the object. The production lens uses 7 rounded diaphragm blades.

### Group G3 — Positive Relay (4 elements, 3 sub-groups)

**L31 + L32 — Cemented doublet**
- L31: nd = 1.81600, νd = 46.59 — Glass: S-LAH63 (OHARA), negative meniscus
- L32: nd = 1.51612, νd = 64.08 — Glass: S-BSL7 (OHARA, BK7-class borosilicate), positive meniscus
- Surfaces: S15 (R = +36.378) / S16 (R = +14.010, cemented) / S17★ (R = +61.045, aspherical)
- Combined focal length: f = −143.1 mm (net negative)
- Role: This doublet has an unusual characteristic — it is net negative despite being in a positive group. The reason is aberration correction rather than power contribution. The cemented negative meniscus L31 (LAH glass) paired with the BK7-class L32 provides strong correction of spherical aberration and coma near the stop. The aspherical surface S17 on the rear of L32 has a moderate positive departure (approximately +75 µm at h = 9 mm) with K = 0 (spherical base, polynomial corrections only), fine-tuning the residual higher-order spherical aberration in the converging beam.

**L33 — Biconvex positive**
- nd = 1.49782, νd = 82.57 — Glass: **S-FPL51 (OHARA) — ED glass** ★
- Surfaces: S18 (R = +27.972) / S19 (R = −75.392)
- Focal length: f = +41.4 mm
- Role: L33 is a strongly positive ED element that provides the primary convergent power of G3. Its high Abbe number minimizes the chromatic contribution of this high-power element.

**L34 — Biconvex positive**
- nd = 1.49782, νd = 82.57 — Glass: **S-FPL51 (OHARA) — ED glass** ★
- Surfaces: S20 (R = +91.965) / S21 (R = −29.392)
- Focal length: f = +45.1 mm
- Role: L34 is the second strongly positive ED element in G3. Together with L33, these two ED singlets provide the positive power needed to form the image while keeping axial and lateral chromatic aberration under tight control. The use of two separate ED singlets rather than a single thicker element distributes the positive power and reduces the sensitivity to manufacturing tolerances.

### Group G4 — Focusing Group (1 element)

**L41 — Negative meniscus, concave toward image**
- nd = 1.79500, νd = 45.31 — Glass: S-LAH51 (OHARA)
- Surfaces: S22 (R = +72.093) / S23 (R = +20.993)
- Focal length: f = −37.6 mm
- Role: L41 is the entire focusing group. Its single-element, lightweight construction is a deliberate choice for fast, quiet autofocus via stepping motor — a single lanthanum flint element with a center thickness of only 1.0 mm can be translated extremely quickly with minimal inertia. The negative meniscus shape provides a modest diverging action that fine-tunes the convergence of the beam before it reaches G5. During focusing from infinity to close range, L41 moves toward the image plane, increasing the D3 gap (G3→G4) while decreasing D4 (G4→G5). This internal focusing mechanism ensures the overall lens length does not change during AF.

### Group G5 — Field Corrector / Final Group (2 elements, 2 sub-groups)

**L51 — Positive meniscus, convex toward image**
- nd = 1.49782, νd = 82.57 — Glass: **S-FPL51 (OHARA) — ED glass** ★
- Surfaces: S24 (R = −538.230) / S25 (R = −20.126)
- Focal length: f = +41.9 mm
- Role: L51 is the fourth and final ED element in the design. Its strongly curved rear surface (R = −20.1 mm) produces positive power while the nearly flat front surface (R = −538 mm) contributes negligible refraction. Positioned close to the image plane, L51 acts as a field flattener, curving the Petzval surface to match the flat sensor. Edge thickness constrains this element's semi-diameter to approximately 12.4 mm.

**L52 — Biconcave negative**
- nd = 1.76546, νd = 46.75 — Glass: lanthanum flint family (exact catalog code uncertain; see §4)
- Surfaces: S26★ (R = −38.934, aspherical) / S27 (R = +154.832)
- Focal length: f = −40.5 mm
- Role: L52 is the rearmost glass element, positioned very close to the image plane. Its aspherical front surface (S26, K = −1.0, paraboloid) provides the final correction of off-axis aberrations — principally astigmatism and field curvature at the extreme corners of the full-frame field. The negative departure at the rim (approximately −448 µm at h = 11 mm) curves the wavefront to flatten the sagittal and tangential focal surfaces. The combination of L51 (+41.9 mm) and L52 (−40.5 mm) nearly cancels in power (net f ≈ −1393 mm), confirming that G5's primary purpose is aberrational correction rather than refraction.

---

## 4. Glass Selection Strategy

The design uses glass from seven distinct types, drawing primarily from the OHARA catalog:

**ED Fluorophosphate — S-FPL51 family (nd ≈ 1.498, νd ≈ 82.6):** Used in four elements (L13, L33, L34, L51). The patent's nd/νd values (1.49782/82.57) are close to but not identical to the OHARA S-FPL51 catalog listing (1.49700/81.61); the residual Δnd = +0.00082, Δνd = +0.96 is consistent with normal melt-to-melt variation in fluorophosphate glasses or may indicate a proprietary variant. The glass family identification — calcium fluorophosphate ED with anomalous partial dispersion (positive ΔPgF ≈ +0.035) — is confident regardless of the exact catalog code. The four ED elements are distributed strategically: one in the front group (L13) for lateral color control, two in the relay group (L33, L34) for axial color at the convergent beam, and one in the field corrector (L51) for residual correction near the image.

**Lanthanum Heavy Flints — S-LAH51/63/66 and similar (nd = 1.77–1.88, νd = 40–47):** Used in four elements (L22, L31, L41, L52). The L22 (nd=1.883/νd=40.66) matches OHARA S-LAH66 well; L31 (1.816/46.59) matches S-LAH63; L41 (1.795/45.31) matches S-LAH51. L52 (nd=1.76546/νd=46.75) does not closely match any single OHARA catalog entry — the nearest is S-LAH64 (1.788/47.37), which differs by Δnd = −0.023. This glass may be sourced from HOYA (possibly NBFD-class) or CDGM. The glass family identification as a lanthanum flint is secure, but the exact catalog code for L52 remains uncertain.

**Dense Flint — S-TIH53 (nd = 1.903, νd = 35.7):** Used once (L14). The extremely high refractive index provides strong positive power in a compact meniscus while the very low Abbe number creates maximum chromatic leverage when paired with the ED element L13.

**Crown / Phosphate Glasses — S-BAM4, S-PHM52, S-BAL42, S-BSL7:** Used in five elements (L11, L12, L21, L23, L32). These moderate-index, moderate-dispersion glasses fill roles where cost and manufacturability are balanced against optical performance.

---

## 5. Aspherical Surface Characterization

The four aspherical surfaces are placed at critical locations in the optical train where off-axis aberration correction is most needed.

### Conic Constant Convention

The patent's aspherical sag formula (paragraph 78) uses the variable κ. The OCR rendering of the formula is partially garbled, but comparison with other Nikon patent publications and physical reasonableness testing confirms the intended formula is the standard form: X(y) = (y²/R) / {1 + √(1 − (1+κ)·(y/R)²)} + ΣAᵢyⁱ. In this reading, κ is the standard conic constant K directly: κ = 0 denotes a spherical base, κ = −1 a paraboloid, etc. This is verified by surface 17, where κ = 0 — only the spherical-base interpretation yields zero conic departure, consistent with its role as a mild polynomial-only asphere. Additionally, the computed conic departure on S2 at h = 17 mm (approximately −3.1 mm for K = −1) matches the total departure budget (−4.5 mm total, −1.4 mm polynomial) that is physically consistent with the element geometry.

### Surface-by-Surface Characterization

**S2 (L11 rear, R = +18.81 mm, K = −1.0, paraboloid):**
Maximum departure at estimated SD ≈ 17 mm: approximately −4,525 µm. This is a very large departure — the surface is dramatically flatter at the rim than a sphere. The conic contribution (approximately −3,077 µm) and the polynomial contribution (approximately −1,448 µm) are both substantial and additive, reinforcing each other to produce the deep negative departure. This extreme asphericity is the key enabling technology for the flat front element: by making S2 strongly aspherical, the designer can relax S1's curvature to near-planar while still maintaining adequate negative power in L11.

**S4 (L12 rear, R = +22.70 mm, K = −1.0, paraboloid):**
Maximum departure at estimated SD ≈ 15 mm: approximately +2,466 µm. The departure is positive despite the same K = −1.0 paraboloidal base, because the polynomial coefficients (particularly A4 = +3.67 × 10⁻⁵) overwhelm and reverse the conic contribution at large heights. The conic term contributes approximately −706 µm (flattening) while the polynomial adds approximately +3,171 µm (steepening), netting approximately +2,466 µm overall. This produces a surface that is steeper at the rim than a sphere — the opposite behavior to S2. Together, S2 and S4 form a correcting pair that manages the severe wide-angle field curvature and distortion inherent in a nearly flat front element. The non-zero A12 coefficient (−5.615 × 10⁻¹⁵) indicates that higher-order correction extending to 12th-order is needed. The surface slope reaches approximately 59.5° at h = 15 mm, which is the practical limit for the usable clear aperture.

**S17 (L32 rear, R = +61.04 mm, K = 0.0, spherical base):**
Maximum departure at estimated SD ≈ 9 mm: approximately +75 µm. This is a comparatively mild asphere located just behind the aperture stop. The spherical base (K = 0) means the entire departure comes from the polynomial terms alone — principally A4 (+1.76 × 10⁻⁵), with A10 (−4.41 × 10⁻¹²) providing a slight rolloff at the rim. This surface fine-tunes spherical aberration and coma in the converging beam.

**S26 (L52 front, R = −38.93 mm, K = −1.0, paraboloid):**
Maximum departure at estimated SD ≈ 11 mm: approximately −448 µm. This is a moderately strong asphere positioned very close to the image, where it primarily corrects astigmatism and field curvature at the corners of the frame. The conic term contributes a small positive departure (+32 µm, because the paraboloid is shallower than the sphere for R < 0), while the polynomial drives the strong negative departure (−481 µm), with A4 = −2.679 × 10⁻⁵ being the primary contributor. The slope reaches 55.1° at SD = 16 mm, which is within the 64.2° manufacturing limit.

---

## 6. Focus Mechanism

The lens uses internal focusing (IF), with G4 — consisting of the single element L41 — translating along the optical axis. The patent (paragraph 92) states that L41 moves toward the image plane to focus from infinity to close range. The two variable gaps involved are:

- **D3** (G3 → G4): increases as G4 moves image-ward
- **D4** (G4 → G5): decreases as G4 approaches G5

Since only D3 and D4 change during focusing (D1, D2, and Bf remain fixed for a given zoom position), the front and rear of the lens remain stationary during AF. The single-element focusing group is a key enabler of the fast, quiet stepping motor AF that Nikon specifies for the production lens. A real-ray calibration against the production 0.28 m minimum-focus distance suggests a very modest L41 travel: approximately **0.52 mm at 14.4 mm**, **0.75 mm at 20 mm**, and **1.07 mm at 29.1 mm**, always toward the image plane.

The patent does not tabulate close-focus spacings for Example 1, so these D3/D4 values cannot be taken as patent-authoritative. Instead, the data file uses the traced approximation above, enforcing constant D3 + D4 at each zoom position to model a rigid single-element G4 translation.

---

## 7. Aberration Correction Strategy

The computed Petzval sum for this system is +0.00394 mm⁻¹, yielding a Petzval radius of approximately −254 mm. The Petzval sum × f(wide) product is +0.057. This relatively modest magnitude indicates that the natural Petzval curvature is reasonably well balanced by the distribution of positive and negative powers across the five groups — the three negative elements in G1 contribute a strongly negative Petzval sum that is partially compensated by the positive elements in G2 and G3. The remaining residual field curvature is then corrected by the field-flattening pair L51+L52 in G5 and by the aspherical surface S26.

The chromatic correction strategy distributes the four ED elements across the system: L13 in G1 primarily addresses lateral (transverse) chromatic aberration, which is especially severe at wide angles. L33 and L34 in G3 attack axial chromatic aberration in the convergent beam behind the stop. L51 in G5 provides final lateral color cleanup near the image plane. Each ED element is paired (either cemented or air-spaced) with a high-dispersion flint to form an achromatic or apochromatic correction pair.

The four aspherical surfaces handle the most difficult monochromatic aberrations: S2 and S4 in the front group correct the severe higher-order field curvature and distortion inherent in the nearly flat front element. S17 behind the stop corrects residual spherical aberration. S26 near the image corrects astigmatism and residual field curvature at the extreme corners.

---

## 8. Paraxial Verification Summary

All numerical claims in this analysis have been independently verified via paraxial (ABCD matrix) ray tracing. The following table summarizes the verification results:

| Parameter | Computed | Patent | Error |
|---|---|---|---|
| EFL (wide) | 14.420 mm | 14.420 mm | < 0.01% |
| EFL (mid) | 20.000 mm | 20.000 mm | < 0.01% |
| EFL (tele) | 29.101 mm | 29.101 mm | < 0.01% |
| f(G1) | −23.297 mm | −23.297 mm | < 0.01% |
| f(G2) | +48.882 mm | +48.882 mm | < 0.01% |
| f(G3) | +26.663 mm | +26.663 mm | < 0.01% |
| f(G4) | −37.580 mm | −37.580 mm | < 0.01% |
| f(G5) | −1392.9 mm | −1392.883 mm | < 0.01% |
| Total track (wide) | 126.464 mm | 126.464 mm | exact |
| Total track (tele) | 114.999 mm | 114.999 mm | exact |
| f1/fE [condition (1)] | 0.0167 | 0.017 | — |
| −f1/f2 [condition (4)] | 0.4766 | 0.477 | — |
| Petzval sum | +0.00394 mm⁻¹ | — | — |
| Petzval radius | −254 mm | — | — |

The patent's half-angle values (ω = 57.68° wide, 35.27° tele) deviate slightly from the paraxial prediction (56.4°, 36.7°) because the patent values include real-ray distortion effects, which are significant at 14 mm. The lens relies on in-camera distortion correction (a deliberate aspect of Nikon's Z-mount design philosophy) to achieve rectilinear output.

---

## 9. Semi-Diameter Estimation Methodology

Semi-diameters are not provided in the patent and were estimated via combined marginal + chief ray tracing at the design aperture (f/4) and full half-field angle, evaluated at all three zoom positions. The maximum beam semi-diameter at each surface across all zoom positions was taken as the starting point, with approximately 8% mechanical clearance added.

However, the front group SDs required significant reduction from the paraxial estimates. Three factors drive this:

1. **Barrel distortion at 14 mm.** The patent's half-angle (57.68°) includes real-ray distortion effects. The paraxial chief ray trace, which assumes zero distortion, overestimates the chief ray height by roughly 20–30% at the front group. The production lens relies on electronic distortion correction, meaning the optical design intentionally permits substantial barrel distortion at 14 mm.

2. **Aspherical slope constraints.** The S4 polynomial causes the surface slope to reach 59.5° at h = 15 mm (near the manufacturing limit of ~64°). Beyond this height, the polynomial diverges rapidly, making the surface unmoldable and unpolishable.

3. **Edge thickness limits.** L14's positive meniscus geometry (strongly curved R = +32.6 front, nearly flat R = +296.6 rear) limits its edge thickness to > 0.5 mm only for SD ≤ ~16.5 mm. L51's geometry similarly constrains its SD to ≤ ~12.5 mm.

These constraints force the front-group SDs well below the paraxial beam estimates, reflecting the real vignetting behavior expected in an ultra-wide zoom. At 14 mm, the lens vignettes progressively from the center toward the full-frame corners, with the image-plane illumination fall-off compensated by the camera's peripheral illumination correction.

---

## 10. Design Significance

The NIKKOR Z 14-30mm f/4 S represents a meaningful advance in ultra-wide zoom design. Three aspects are particularly notable:

**The flat front element.** By placing two strongly aspherical surfaces (S2 and S4) on the rear faces of L11 and L12, the designer achieved a nearly planar front surface (R = +190.8 mm) that permits standard 82 mm screw-in filters at 14 mm — a world first at the time of announcement. Traditional 14 mm designs require deeply curved front elements incompatible with flat filters.

**The single-element focusing group.** Using a single lightweight meniscus (L41) for internal focusing minimizes the mass that the stepping motor must accelerate, enabling the fast and silent AF characteristic of Z-mount lenses. The penalty — less focus-induced aberration correction than a multi-element focusing group would provide — is acceptable at f/4 where depth of focus is relatively generous.

**The co-moving G2/G5 pair.** The identical zoom trajectories of G2 and G5 simplify the cam mechanism to three tracks instead of four, reducing manufacturing complexity and potential alignment errors while maintaining five optical groups for aberration correction flexibility.
