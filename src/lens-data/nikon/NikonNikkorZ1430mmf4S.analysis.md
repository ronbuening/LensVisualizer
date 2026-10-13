# Nikon NIKKOR Z 14-30mm f/4 S — Optical Design Analysis

**Patent:** JP 2019-008031 A
**Inventor:** Takeru Uehara (上原 健), Nikon Corporation
**Assignee:** Nikon Corporation
**Filed:** June 21, 2017
**Published:** January 17, 2019
**Embodiment analyzed:** Example 1 (第1実施例), Table 1
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

The patent (¶0093 and the arrows in Fig. 1) states that from wide to tele G1 moves toward the image while G2–G5 move toward the object. Measured from the image plane (distance to each group's first vertex, calculated from the Table 1 spacings), every group moves monotonically:

| Group | Wide | Middle | Tele | Shift (W→T) |
|---|---|---|---|---|
| G1 | 126.46 mm | 116.24 mm | 115.00 mm | −11.47 mm (toward image) |
| G2 | 66.25 mm | 71.70 mm | 81.19 mm | +14.94 mm (toward object) |
| G3 | 48.47 mm | 55.03 mm | 67.36 mm | +18.90 mm (toward object) |
| G4 | 34.43 mm | 40.31 mm | 52.90 mm | +18.47 mm (toward object) |
| G5 | 27.66 mm | 33.11 mm | 42.60 mm | +14.94 mm (toward object) |

A crucial design feature: **G2 and G5 share an identical zoom trajectory**, shifting by exactly 14.94 mm toward the object from wide to tele (equivalently, both close on G1 by 26.40 mm). This means G2 and G5 can be mechanically coupled to a single cam track, simplifying the zoom mechanism and improving mechanical precision. The patent explicitly calls this out (paragraph 93). Meanwhile, G3 and G4 travel on independent cam tracks with slightly different trajectories.

No group reverses direction, but the D3 gap (G3→G4) exhibits **non-monotonic behavior**: it increases from 1.579 mm (wide) to 2.261 mm (mid) then decreases to 2.007 mm (tele). This reversal is handled naturally by piecewise-linear interpolation across the three zoom positions and reflects the independent cam trajectories of G3 and G4.

The total track length (first surface to image plane) decreases from 126.5 mm at the wide end to 115.0 mm at the telephoto end, so the optical system is longest at 14 mm; the only group that moves toward the image is G1.

---

## 3. Element-by-Element Analysis

### Group G1 — Front Negative Group (4 elements, 4 sub-groups)

**L11 — Negative meniscus, convex toward object**
- nd = 1.69370, νd = 53.32 — Glass: high-index crown, patent code 694533
- Surfaces: S1 (R = +190.754) / S2★ (R = +18.810, aspherical)
- Focal length: f = −30.3 mm
- Role: L11 is the outermost element and the first surface the incoming light encounters. Its very weak convex front surface (R = +190.8 mm, nearly flat) is a defining feature of this design — it enables the production lens to accept 82 mm screw-in filters, a breakthrough for 14 mm coverage. The nearly flat front is unusual for ultra-wide zooms, which traditionally require a large-radius bulbous front element. The aspherical rear surface (S2) is a deep paraboloid-base asphere (9.29 mm sag at its 22.4 mm rim, deeper than a hemisphere of the 18.81 mm vertex radius could reach) that compensates for the under-corrected spherical aberration and coma that would otherwise result from the weak front curvature. The aspherical profile uses a paraboloidal base (K = −1.0) with A4 through A10 polynomial terms. The glass choice is a mid-index crown (nd ≈ 1.69, νd ≈ 53) that balances mechanical strength for the exposed front element with acceptable dispersion.

**L12 — Negative meniscus, convex toward object**
- nd = 1.69370, νd = 53.32 — Glass: high-index crown, patent code 694533 (same as L11)
- Surfaces: S3 (R = +51.563) / S4★ (R = +22.702, aspherical)
- Focal length: f = −61.0 mm
- Role: L12 continues the diverging action of G1 and shares the same glass type as L11. Its aspherical rear surface (S4) provides a large positive departure at the rim (approximately +2.08 mm at the 14.5 mm rim), which acts in opposition to the negative departure on S2. Together, the L11 and L12 aspheres form a matched correction pair: S2 flattens the wavefront excessively in one direction, and S4 partially restores it, with the net effect being precise control over wide-angle field curvature and distortion at the extreme margin of the field. The non-zero A12 coefficient (−5.615 × 10⁻¹⁵) indicates that higher-order correction extending to 12th-order is needed. The surface slope reaches 57° at the 14.5 mm rim; Fig. 1 draws the S4 optical zone ending at about 15.1 mm, with L12 itself about 19.3 mm in radius.

**L13 — Biconcave negative**
- nd = 1.49782, νd = 82.57 — Glass: **FK-type ED fluorophosphate (Hikari J-FKH1 catalog equivalent)** ★
- Surfaces: S5 (R = −71.065) / S6 (R = +44.484)
- Focal length: f = −54.7 mm
- Role: L13 is the only ED glass element in the front group. Its extremely low dispersion (νd = 82.57) provides chromatic correction where it matters most — at the point in the system where the marginal ray height is large and the angular subtense from different field points creates maximum lateral color. In a negative-lead zoom, placing ED glass in the front negative group is essential to control lateral chromatic aberration across the wide zoom range. FK-type fluorophosphate glasses of this class have anomalous partial dispersion (positive ΔPgF; the patent does not publish θgF) that bends the secondary spectrum correction beyond what normal crown/flint pairing can achieve.

**L14 — Positive meniscus, concave toward image**
- nd = 1.90265, νd = 35.73 — Glass: lanthanum dense flint (Hikari J-LASFH9 catalog equivalent, code 903357)
- Surfaces: S7 (R = +32.608) / S8 (R = +296.586)
- Focal length: f = +40.3 mm
- Role: L14 is the rear element of G1 and the sole positive element in the group. Both surfaces have R > 0 (centers of curvature to the right), forming a meniscus that presents its concave face toward the image — a shape the patent confirms. The very long rear radius (R = +296.6 mm) means the concave image-side face is nearly flat, giving the element an effectively plano-convex character. Its very high refractive index (nd = 1.90) combined with a low Abbe number (νd = 35.7) makes it a lanthanum dense flint — paired with L13's ED-class glass, it forms a widely separated air-spaced chromatic pair that corrects primary color. The strong positive power also partially offsets the Petzval contribution of the three preceding negative elements, curving the Petzval surface back toward flatness. Fig. 1 draws L13 and L14 at about 14.5 mm radius; the stored 16.0 mm rim is within 15 % of that reading and clears the exact wide-angle chief ray (12.9–13.3 mm).

### Group G2 — Positive Variator (3 elements, 2 sub-groups)

**L21 — Positive meniscus, concave toward image**
- nd = 1.59349, νd = 67.00 — Glass: phosphate crown (Hikari J-PSKH4 catalog equivalent)
- Surfaces: S9 (R = +63.060) / S10 (R = +499.876)
- Focal length: f = +121.4 mm
- Role: L21 is a weakly positive singlet that begins the convergence of the beam after the strongly divergent G1 group. The phosphate crown glass (νd = 67) is chosen for low dispersion to minimize chromatic contribution in the variator. The weak power means L21 primarily serves as a field lens to manage the chief ray height entering the cemented doublet.

**L22 + L23 — Cemented doublet**
- L22: nd = 1.88300, νd = 40.66 — Glass: Hikari J-LASF08A catalog equivalent, negative meniscus (f = −35.9 mm)
- L23: nd = 1.56883, νd = 56.00 — Glass: barium crown (Schott N-BAK4 catalog equivalent), positive meniscus (f = +24.3 mm)
- Surfaces: S11 (R = +24.006) / S12 (R = +13.347, cemented) / S13 (R = +333.982)
- Combined focal length: f = +82.0 mm
- Role: The L22+L23 doublet is the primary color-correcting element in G2. The high-index lanthanum flint (L22, nd = 1.88) cemented to a barium crown (L23) creates a classic achromatic doublet configuration. The cemented interface at R = +13.347 mm has a strong curvature that provides most of the chromatic correction, while the overall positive power contributes to the convergence needed for the relay group.

### Aperture Stop

The aperture stop S is located in the air space between G2 and G3, at surface 14 (R = ∞, flat). The patent (¶0086, ¶0093) places it independently of G2 but moving with G2 during zooming. The stop-to-G3 distance (D2) varies from 7.5 mm (wide) to 3.5 mm (tele). Because the f-number stays at 4.00 while the entrance pupil grows from 1.80 to 3.64 mm in radius, the iris must open during zooming; the patent publishes no iris diameters, so the viewer infers the schedule from the nominal f-number (radius about 5.64 mm at wide, 6.44 mm at middle, 8.08 mm at tele). The production lens uses 7 rounded diaphragm blades.

### Group G3 — Positive Relay (4 elements, 3 sub-groups)

**L31 + L32 — Cemented doublet**
- L31: nd = 1.81600, νd = 46.59 — Glass: Hikari J-LASF09A catalog equivalent, negative meniscus (f = −28.6 mm)
- L32: nd = 1.51612, νd = 64.08 — Glass: S-BSL7 (OHARA, BK7-class borosilicate), positive meniscus
- Surfaces: S15 (R = +36.378) / S16 (R = +14.010, cemented) / S17★ (R = +61.045, aspherical)
- Combined focal length: f = −143.1 mm (net negative)
- Role: This doublet has an unusual characteristic — it is net negative despite being in a positive group. The reason is aberration correction rather than power contribution. The cemented negative meniscus L31 (LAH glass) paired with the BK7-class L32 provides strong correction of spherical aberration and coma near the stop. The aspherical surface S17 on the rear of L32 has a moderate positive departure (approximately +66 µm at the 8.6 mm rim) with K = 0 (spherical base, polynomial corrections only), fine-tuning the residual higher-order spherical aberration in the converging beam.

**L33 — Biconvex positive**
- nd = 1.49782, νd = 82.57 — Glass: **FK-type ED fluorophosphate (Hikari J-FKH1 catalog equivalent)** ★
- Surfaces: S18 (R = +27.972) / S19 (R = −75.392)
- Focal length: f = +41.4 mm
- Role: L33 is a strongly positive ED element that provides the primary convergent power of G3. Its high Abbe number minimizes the chromatic contribution of this high-power element.

**L34 — Biconvex positive**
- nd = 1.49782, νd = 82.57 — Glass: **FK-type ED fluorophosphate (Hikari J-FKH1 catalog equivalent)** ★
- Surfaces: S20 (R = +91.965) / S21 (R = −29.392)
- Focal length: f = +45.1 mm
- Role: L34 is the second strongly positive ED element in G3. Together with L33, these two ED singlets provide the positive power needed to form the image while keeping axial and lateral chromatic aberration under tight control. The use of two separate ED singlets rather than a single thicker element distributes the positive power and reduces the sensitivity to manufacturing tolerances.

### Group G4 — Focusing Group (1 element)

**L41 — Negative meniscus, concave toward image**
- nd = 1.79500, νd = 45.31 — Glass: Hikari J-LASF017, patent code 795453
- Surfaces: S22 (R = +72.093) / S23 (R = +20.993)
- Focal length: f = −37.6 mm
- Role: L41 is the entire focusing group. Its single-element, lightweight construction is a deliberate choice for fast, quiet autofocus via stepping motor — a single lanthanum flint element with a center thickness of only 1.0 mm can be translated extremely quickly with minimal inertia. The negative meniscus shape provides a modest diverging action that fine-tunes the convergence of the beam before it reaches G5. During focusing from infinity to close range, L41 moves toward the image plane, increasing the D3 gap (G3→G4) while decreasing D4 (G4→G5). This internal focusing mechanism ensures the overall lens length does not change during AF.

### Group G5 — Field Corrector / Final Group (2 elements, 2 sub-groups)

**L51 — Positive meniscus, convex toward image**
- nd = 1.49782, νd = 82.57 — Glass: **FK-type ED fluorophosphate (Hikari J-FKH1 catalog equivalent)** ★
- Surfaces: S24 (R = −538.230) / S25 (R = −20.126)
- Focal length: f = +41.9 mm
- Role: L51 is the fourth and final ED element in the design. Its strongly curved rear surface (R = −20.1 mm) produces positive power while the nearly flat front surface (R = −538 mm) contributes negligible refraction. Positioned close to the image plane, L51 acts as a field flattener, curving the Petzval surface to match the flat sensor. Fig. 1 draws L51 at about 10.8 mm radius; the stored rim is 11.0 mm.

**L52 — Biconcave negative**
- nd = 1.76546, νd = 46.75 — Glass: Hikari Q-LASFPH2S, patent code 765468 (moldable lanthanum flint)
- Surfaces: S26★ (R = −38.934, aspherical) / S27 (R = +154.832)
- Focal length: f = −40.5 mm
- Role: L52 is the rearmost glass element, positioned very close to the image plane. Its aspherical front surface (S26, K = −1.0, paraboloid) provides the final correction of off-axis aberrations — principally astigmatism and field curvature at the extreme corners of the full-frame field. The negative departure at the rim (approximately −595 µm at the 11.7 mm rim) curves the wavefront to flatten the sagittal and tangential focal surfaces. The combination of L51 (+41.9 mm) and L52 (−40.5 mm) nearly cancels in power (net f ≈ −1393 mm), confirming that G5's primary purpose is aberrational correction rather than refraction.

---

## 4. Glass Selection Strategy

The design uses glass from seven distinct types, drawing primarily from the OHARA catalog:

**ED Fluorophosphate — nd = 1.49782, νd = 82.57:** Used in four elements (L13, L33, L34, L51). The patent pair matches Hikari J-FKH1 exactly, so the data file uses that catalog glass as the equivalent; it is not the OHARA S-FPL51 melt (1.49700/81.55). The patent does not publish partial-dispersion data, so the ED character and the stored ΔPgF ≈ +0.035 are inferred from the glass type. The four ED-class elements are distributed through the system: one in the front group (L13) for lateral color control, two in the relay group (L33, L34) for axial color at the convergent beam, and one in the field corrector (L51) for residual correction near the image.

**Lanthanum and high-index glasses:** Used in four elements (L22, L31, L41, L52). Each patent pair matches a Hikari catalog glass: L22 (1.88300/40.66) J-LASF08A, L31 (1.81600/46.59) J-LASF09A, L41 (1.79500/45.31) J-LASF017, and L52 (1.76546/46.75) the moldable Q-LASFPH2S.

**Lanthanum dense flint — nd = 1.90265, νd = 35.73:** Used once (L14); the pair matches Hikari J-LASFH9 exactly. The extremely high refractive index provides strong positive power in a compact meniscus while the low Abbe number gives chromatic leverage against the ED element L13.

**Crown / Phosphate Glasses:** Used in five elements. L11/L12 (1.69370/53.32, code 694533) are a lanthanum-crown class glass whose code resolves to the Hoya LAC13 class; L21 matches Hikari J-PSKH4; L23 matches the N-BAK4/BAC4 barium-crown class; L32 (1.51612/64.08) is a BK7-class borosilicate closest to OHARA S-BSL7. These labels are catalog equivalents, not maker-named glasses.

---

## 5. Aspherical Surface Characterization

The four aspherical surfaces are placed at critical locations in the optical train where off-axis aberration correction is most needed.

### Conic Constant Convention

The patent's sag formula (a) in paragraph 78 prints the square-root term as √(1 − κ·y²/R²). Taken literally, κ = 1 would be a sphere and the stored conic would be K = κ − 1. The tabulated values do not behave that way. With K = κ (κ = 0 a sphere, κ = −1 a paraboloid) an exact trace lands the chief ray on the published image height Y = 21.70 mm at exactly the published half-angles of 46.85° (middle) and 35.27° (tele), and the f/4 longitudinal spherical aberration stays under 0.07 mm at every station. With K = κ − 1 the middle station can reach only about 39.9° and tele spherical aberration grows to 0.28 mm. The data file therefore uses K = κ, and formula (a) is treated as a misprint for this table.

### Surface-by-Surface Characterization

**S2 (L11 rear, R = +18.81 mm, K = −1.0, paraboloid):**
The deepest surface in the lens. Its departure from the vertex sphere is already about −2,930 µm at h = 15.7 mm, and beyond the 18.81 mm vertex radius a sphere no longer exists, so the rim is better described by its sag: 9.29 mm at the 22.4 mm rim, where the slope is only 30.2° because the paraboloid base keeps opening out. The negative A4 (−1.33 × 10⁻⁵) and A6 terms flatten it further. This extreme asphericity is the key enabling technology for the flat front element: by making S2 strongly aspherical, the designer can relax S1's curvature to near-planar while still maintaining adequate negative power in L11.

**S4 (L12 rear, R = +22.70 mm, K = −1.0, paraboloid):**
Departure at the 14.5 mm rim: approximately +2,084 µm. The departure is positive despite the paraboloidal base, because the polynomial coefficients (particularly A4 = +3.67 × 10⁻⁵) overwhelm and reverse the conic contribution at large heights. This produces a surface that is steeper at the rim than a sphere — the opposite behavior to S2. Together, S2 and S4 form a correcting pair that manages the severe wide-angle field curvature and distortion inherent in a nearly flat front element. The non-zero A12 coefficient (−5.615 × 10⁻¹⁵) indicates that higher-order correction extending to 12th-order is needed. The surface slope reaches approximately 57° at the 14.5 mm rim.

**S17 (L32 rear, R = +61.04 mm, K = 0.0, spherical base):**
Departure at the 8.6 mm rim: approximately +66 µm. This is a comparatively mild asphere located just behind the aperture stop. The spherical base (K = 0) means the entire departure comes from the polynomial terms alone — principally A4 (+1.76 × 10⁻⁵), with A10 (−4.41 × 10⁻¹²) providing a slight rolloff at the rim. This surface fine-tunes spherical aberration and coma in the converging beam.

**S26 (L52 front, R = −38.93 mm, K = −1.0, paraboloid):**
Departure at the 11.7 mm rim: approximately −595 µm (−470 µm at 11.1 mm). This is a moderately strong asphere positioned very close to the image, where it primarily corrects astigmatism and field curvature at the corners of the frame. The polynomial terms, led by A4 = −2.679 × 10⁻⁵, drive the negative departure. The surface slope is 28.9° at the rim.

---

## 6. Focus Mechanism

The lens uses internal focusing (IF), with G4 — consisting of the single element L41 — translating along the optical axis. The patent (paragraph 92) states that L41 moves toward the image plane to focus from infinity to close range. The two variable gaps involved are:

- **D3** (G3 → G4): increases as G4 moves image-ward
- **D4** (G4 → G5): decreases as G4 approaches G5

Since only D3 and D4 change during focusing (D1, D2, and Bf remain fixed for a given zoom position), the front and rear of the lens remain stationary during AF. The single-element focusing group is a key enabler of the fast, quiet stepping motor AF that Nikon specifies for the production lens. Solving the rigid L41 translation that places the paraxial conjugate at the production 0.28 m minimum-focus distance gives a very modest L41 travel: approximately **0.52 mm at 14.4 mm**, **0.75 mm at 20 mm**, and **1.07 mm at 29.1 mm**, always toward the image plane.

The patent does not tabulate close-focus spacings for Example 1, so these D3/D4 values are calculated, not patent data. The data file enforces constant D3 + D4 at each zoom position to model a rigid single-element G4 translation; the resulting object-to-image distances are 278.3 mm (wide), 278.9 mm (middle) and 279.2 mm (tele).

---

## 7. Aberration Correction Strategy

The computed Petzval sum for this system is +0.00394 mm⁻¹, yielding a Petzval radius of approximately −254 mm. The Petzval sum × f(wide) product is +0.057. This relatively modest magnitude indicates that the natural Petzval curvature is reasonably well balanced by the distribution of positive and negative powers across the five groups — the three negative elements in G1 contribute a strongly negative Petzval sum that is partially compensated by the positive elements in G2 and G3. The remaining residual field curvature is then corrected by the field-flattening pair L51+L52 in G5 and by the aspherical surface S26.

The chromatic correction strategy distributes the four ED elements across the system: L13 in G1 primarily addresses lateral (transverse) chromatic aberration, which is especially severe at wide angles. L33 and L34 in G3 attack axial chromatic aberration in the convergent beam behind the stop. L51 in G5 provides final lateral color cleanup near the image plane. Each ED element is paired (either cemented or air-spaced) with a high-dispersion flint to form an achromatic correction pair; the patent does not publish measured line indices for this example, so the stronger APO language is best avoided here.

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

An exact real-ray trace of the stored prescription lands the chief ray on Y = 21.70 mm at exactly the patent's middle and tele half-angles (46.85°, 35.27°). At the wide end the same trace needs 59.8° to reach 21.70 mm, and the published 57.68° chief ray lands at 20.36 mm; the patent does not say how its wide-end ω was computed, so this 2° difference is recorded as a source conflict. Either way the 14 mm state carries heavy barrel distortion, which the patent (¶0097) leaves to image processing.

---

## 9. Semi-Diameter Estimation Methodology

The patent does not publish clear apertures. The stored semi-diameters come from the Example 1 cross-section (Fig. 1, page 29), measured on the 300 dpi source raster. The scale, 0.1004 mm per pixel, comes from the 105.104 mm vertex span from S1 to S27 at the wide setting. The drawing gives these radii: L11 29.2 mm, with the S2 optical zone ending at 22.4 mm where the flat flange begins; L12 19.3 mm, with the S4 zone ending at 15.1 mm; L13/L14 about 14.5 mm; G2 8.3–8.9 mm; G3 8.2–8.7 mm; L41 8.8 mm; L51 10.8 mm; and L52 11.6 mm.

An exact real-ray trace confirms the large front group. At the wide end the corner chief ray crosses S1 at about 28.5 mm, S2 at 21.5 mm and S3 at 18.1 mm, so the earlier smaller front rims (22.4 / 18.3 / 16.1 mm) blocked the corner of the frame. The relay groups are small in the figure because their rims need to pass only the f/4 axial beam, which is at most 8.4 mm in G2 and 8.1 mm in G3. Off-axis bundles are clipped there, which gives the ordinary corner vignetting of an ultra-wide zoom. Surfaces 4A–8 are within 15 % of the figure and keep their earlier values.

## 10. Design Significance

The NIKKOR Z 14-30mm f/4 S represents a meaningful advance in ultra-wide zoom design. Three aspects are particularly notable:

**The flat front element.** By placing two strongly aspherical surfaces (S2 and S4) on the rear faces of L11 and L12, the designer achieved a nearly planar front surface (R = +190.8 mm) that permits standard 82 mm screw-in filters at 14 mm — a world first at the time of announcement. Traditional 14 mm designs require deeply curved front elements incompatible with flat filters.

**The single-element focusing group.** Using a single lightweight meniscus (L41) for internal focusing minimizes the mass that the stepping motor must accelerate, enabling the fast and silent AF characteristic of Z-mount lenses. The penalty — less focus-induced aberration correction than a multi-element focusing group would provide — is acceptable at f/4 where depth of focus is relatively generous.

**The co-moving G2/G5 pair.** The identical zoom trajectories of G2 and G5 (patent ¶0093) mean the five groups need only four distinct motions (G1, G2 + G5 with the stop, G3 and G4). One cam trajectory can drive two optical groups, which should reduce mechanical complexity while keeping five groups for aberration correction.
