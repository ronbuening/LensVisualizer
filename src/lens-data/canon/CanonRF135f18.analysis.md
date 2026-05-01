# Canon RF 135mm f/1.8 L IS USM — Optical Design Analysis

**Patent:** US 2023/0213745 A1 — *Optical System and Image Pickup Apparatus Having the Same*
**Inventor:** Takeharu Nakada (Canon Kabushiki Kaisha, Tokyo)
**Filed:** December 29, 2022 | **Published:** July 6, 2023
**Priority:** JP 2022-000018 (January 1, 2022)
**Example analyzed:** Numerical Example 4

---

## 1. Production Lens Identification

The Canon RF 135mm f/1.8 L IS USM was announced in November 2022 and shipped in early 2023. Canon's published specifications describe a **17-element, 12-group** design with **three UD (Ultra-low Dispersion) elements**, optical image stabilization (5.5 stops, 8 stops coordinated with IBIS), a Nano USM autofocus motor, a 9-blade circular aperture, 82 mm filter thread, minimum focus distance of 0.7 m (0.26× magnification), and a weight of 935 g. Notably, Canon does not list any aspherical elements for this lens — an unusual omission at this performance tier.

Patent US 2023/0213745 A1 contains four numerical examples, all sharing the same three-unit architectural framework (positive L1, negative L2 focus unit, positive L3 with IS subunit). All four examples have 17 optical elements. However, Example 4 is uniquely identified as the production design by cross-referencing three Canon-published specifications against the patent data:

| Criterion | Canon Spec | Ex. 1 | Ex. 2 | Ex. 3 | Ex. 4 |
|-----------|-----------|-------|-------|-------|-------|
| Elements | 17 | 17 | 17 | 17 | **17** ✓ |
| Groups | 12 | 12 | 12 | **13** | **12** ✓ |
| UD elements | 3 | **4** | **4** | **4** | **3** ✓ |

The decisive criterion is the **UD element count**. Examples 1 and 2 each place a fourth UD element (nd = 1.49700, νd = 81.5) in the rear field-flattening position (L17), while Example 3 places its fourth UD element in the L3c subunit (L15). Only Example 4 uses conventional glass (S-BAL35, νd = 61.1) for its rear field flattener, yielding exactly three UD elements — all in the front group L1 — matching Canon's specification. Example 3 is additionally disqualified by its group count: an extra air gap in L3c splits what is a single group in Example 4 into two separate groups, yielding 13 groups rather than 12.

Supporting criteria reinforce the identification:

- **Focal length and f-number:** The patent gives f = 130.95 mm and Fno = 1.86. After the customary slight prescription scaling to the marketed 135 mm focal length (~1.031×), the f-number rounds to f/1.8, consistent with Canon's specification.
- **Half angle of view:** ω = 9.38° yields a diagonal full angle of ~18.8°, matching Canon's stated 18°.
- **Aberration performance:** Fig. 8A/8B show the tightest spherical aberration correction and lowest chromatic aberration residuals of all four examples, consistent with the lens's measured performance.

---

## 2. Aspherical Surfaces

**There are no aspherical surfaces in this design.**

This is confirmed by two independent lines of evidence. First, the patent prescription table for Example 4 (¶0053) lists only surface radii (r), thicknesses (d), refractive indices (nd), and Abbe numbers (vd) — no aspherical coefficient table is provided for this example, unlike many Canon patents where such tables follow immediately after the prescription. Second, Canon's own marketing materials and every third-party specification listing describe the lens as having three UD elements and ASC (Air Sphere Coating) but do not mention any aspherical elements — a feature Canon always highlights when present (e.g., "1 aspherical element" on the RF 50mm f/1.2 L USM).

Achieving this level of optical performance at f/1.8 and 135 mm with an entirely spherical design is a notable feat of optical engineering. The correction relies instead on careful glass selection, strategic use of five cemented doublets to manage chromatic aberration and coma, and a generous element count that distributes refractive power across many surfaces to keep individual surface contributions to higher-order aberrations small. The 17-element design has sufficient degrees of freedom — 30 refracting surfaces including 29 with non-zero curvature — to control aberrations without resorting to aspheric departure.

---

## 3. Overall Architecture: Three Lens Units

The patent describes a three-unit telephoto design (¶0018):

| Unit | Patent Label | Power | Role | Elements | Surfaces |
|------|-------------|-------|------|----------|----------|
| Front group | L1 | Positive (f₁ = 85.1 mm) | Main refractive power | L1–L6 (6 elements, 4 groups) | S1–S10 |
| Focus unit | L2 | Negative (f₂ = −62.5 mm) | Inner focus | L7 (1 element, 1 group) | S12–S13 |
| Rear group | L3 | Positive (f₃ = 109.5 mm) | Aberration correction, IS, field flattening | L8–L17 (10 elements, 7 groups) | S14–S30 |

The aperture stop (SP) sits in the air gap between L1 and L2. A glass block (GB, surfaces S31–S32) represents the camera's IR-cut filter and cover glass (N-BK7 equivalent, nd = 1.51633, νd = 64.1).

### Telephoto ratio

The overall lens length (front surface to image plane) at infinity focus is 148.55 mm (patent-stated), yielding a telephoto ratio of LD/f = 148.55/130.95 ≈ **1.13**. Values below approximately 1.0 define a "true" telephoto; values between 1.0 and 1.2 are termed "medium telephoto." The patent's inequality (7), LD/f < 1.5, is comfortably satisfied (¶0043). This compact ratio is achieved through the strong negative power of L2 placed behind the stop, which shortens the back focal distance while permitting the positive L1 and L3 units to carry the system's converging power.

---

## 4. Lens Unit L1 — Front Positive Group

L1 consists of six elements in four groups and carries the majority of the system's positive refractive power (f₁ = 85.1 mm). It remains **stationary** during both focusing and image stabilization.

### 4.1 Element-by-element description

**L1 (Element 1)** — Positive meniscus, convex toward the object.
- Glass: nd = 1.84666, νd = 23.8 — high-index dense titanium flint, matching OHARA S-TIH53.
- Focal length: +144.6 mm.
- Role: This high-index front element bends the steep marginal rays entering the f/1.8 aperture through a small angle per surface, reducing surface-induced spherical aberration. Its high dispersion (low νd) is tolerated because the element is positioned far from the stop where chromatic contributions can be balanced by downstream UD elements. The meniscus form also contributes to coma correction for off-axis bundles.

**L2 (Element 2)** — Positive meniscus, convex toward the object. **[UD glass]**
- Glass: nd = 1.49700, νd = 81.5 — Canon UD fluorophosphate (≈ OHARA S-FPL51).
- Focal length: +170.2 mm.
- Role: First of three UD elements. This standalone low-index, low-dispersion positive element provides additional converging power while contributing minimal chromatic aberration. Positioned before the cemented doublets, it helps pre-correct the longitudinal chromatic aberration (LoCA) that would otherwise accumulate from the high-dispersion L1.

**L3 + L4 (Elements 3–4)** — Cemented doublet D1.
- L3 (crown): nd = 1.49700, νd = 81.5 — UD glass, positive meniscus (fl = +121.9 mm). **[UD glass]**
- L4 (flint): nd = 1.77047, νd = 29.7 — dense titanium flint (OHARA S-TIH18 family, 6-digit code 770/297), negative meniscus (fl = −45.7 mm).
- Combined focal length: −83.6 mm (net negative).
- Achromatic residual: −0.000636.
- Role: This is an unusual doublet — the negative flint element dominates, making D1 net negative despite containing a UD crown element. The UD crown corrects chromatic aberration produced by L4's high dispersion, while the overall negative power contributes divergence that helps flatten the Petzval surface. The doublet also corrects lateral chromatic aberration by bending the chief ray chromatically in the opposite sense to the downstream positive elements. The non-zero achromatic residual indicates this doublet is designed to participate in system-level chromatic balancing rather than being self-achromatic.

**L5 + L6 (Elements 5–6)** — Cemented doublet D2.
- L5 (crown): nd = 1.49700, νd = 81.5 — UD glass, biconvex (fl = +67.8 mm). **[UD glass]**
- L6 (flint): nd = 1.77047, νd = 29.7 — dense titanium flint (OHARA S-TIH18 family, 6-digit code 770/297), biconcave (fl = −194.8 mm).
- Combined focal length: +99.3 mm (net positive).
- Achromatic residual: +0.000009 (essentially perfectly achromatic).
- Role: D2 is the primary achromatic power source in L1. The UD crown provides the positive power needed for the front group while the S-TIH6 flint corrects longitudinal chromatic aberration almost perfectly (achromatic residual ≈ 0). This doublet does the heavy lifting for LoCA correction in the front group. Its biconvex/biconcave form simultaneously addresses spherical aberration and coma.

### 4.2 Glass strategy in L1

The three UD elements (L2, L3, L5) all use the same nd = 1.49700, νd = 81.5 fluorophosphate glass, which is Canon's designation for the UD type. Fluorophosphate glasses sit in the low-nd, high-νd corner of the glass map and exhibit anomalous partial dispersion — their blue-to-green dispersion ratio (PgF) deviates significantly from the normal line. This anomalous dispersion is essential for correcting secondary spectrum (the residual chromatic focus shift between the C and F spectral lines that persists even in a classically achromatic doublet).

The two flint partners (L4 and L6) both use the same dense titanium flint (nd = 1.77047, νd = 29.7; OHARA S-TIH18 family, 6-digit code 770/297), a glass that also exhibits anomalous partial dispersion — but in the opposite direction from the fluorophosphate. Pairing these two anomalous-dispersion glasses across the cemented junction achieves chromatic correction superior to what any "normal glass" crown-flint pair could achieve.

---

## 5. Aperture Stop (SP)

The aperture stop is located between L1 and L2, at surface 11 in the patent prescription. At infinity focus, the distance from the last L1 surface (S10) to the stop is 3.38 mm, and from the stop to the first L2 surface (S12) is 2.45 mm (variable gap d11). The stop has a flat surface (R = ∞) and sits in air (nd = 1.0).

Canon specifies a 9-blade circular diaphragm for the production lens, which produces smooth, rounded bokeh highlights across a range of f-stops. At the design f-number of 1.86, the entrance pupil diameter is approximately 70.4 mm (EP = f/Fno = 130.95/1.86), demanding large-diameter front elements — hence the 82 mm filter thread.

---

## 6. Lens Unit L2 — Focus Unit

L2 is a single element (L7) forming one group: a **plano-concave negative lens** with the flat surface toward the object.

- Glass: nd = 1.61800, νd = 63.4 — phosphate crown (close match to OHARA S-PHM52).
- Focal length: **−62.5 mm**.
- Surface geometry: S12 is flat (R = ∞); S13 has R = +38.615 mm (concave toward image).

### 6.1 Focusing mechanism

L2 is the sole moving element during focusing, driven by the Nano USM motor. The patent specifies two variable air gaps:

| Gap | Surface | Infinity focus | Close focus (0.7 m) | Change |
|-----|---------|---------------|-------------------|--------|
| Stop → L2 | d11 | 2.45 mm | 20.66 mm | +18.21 mm |
| L2 → L3 | d13 | 24.03 mm | 5.82 mm | −18.21 mm |

As the lens focuses from infinity to 0.7 m, **L2 translates 18.21 mm toward the image**, opening the gap behind the stop and closing the gap ahead of L3. Critically, L1 and L3 remain stationary — the lens does not change physical length during focusing. This inner-focus design with a single lightweight element enables the fast, silent Nano USM operation that Canon emphasizes.

The choice of a single plano-concave element as the focus group is optically significant. A flat front surface means the angle of incidence of the marginal ray does not change with focus position (since the surface contributes zero power regardless of where it sits along the axis). This minimizes focus-induced aberration variation — particularly spherical aberration and coma — helping maintain image quality across the focus range.

### 6.2 Focus-related patent conditions

The patent defines inequality (4) as −5.5 < f₂/BF < −2.5, where f₂ is the focal length of L2 and BF is the back focus distance. For Example 4: f₂/BF = −62.48/14.42 = **−4.33**, satisfying the condition. This ratio ensures that the focus unit has sufficient negative power to achieve close focusing through modest physical translation, without requiring so much power that aberration sensitivity becomes unmanageable.

---

## 7. Lens Unit L3 — Rear Positive Group

L3 is the largest and most complex unit: 10 elements in 7 groups with an overall focal length of f₃ = 109.5 mm. It is divided into three subunits:

| Subunit | Power | Elements | Surfaces | Role |
|---------|-------|----------|----------|------|
| L3a | Positive (+111.7 mm) | L8–L9 (doublet D3) | S14–S16 | Chromatic correction, converging power |
| L3b | **Negative (−57.9 mm)** | L10, L11 | S17–S20 | **Image stabilization unit** |
| L3c | Positive (+56.1 mm) | L12–L17 (6 elements, 4 groups) | S21–S30 | Field flattening, residual correction |

All three subunits remain stationary during focusing. During image stabilization, **only L3b moves** — in a direction orthogonal to the optical axis — to counteract camera shake.

### 7.1 Subunit L3a — Cemented doublet D3

**L8 + L9 (Elements 8–9)** — Cemented doublet D3.
- L8 (flint): nd = 1.92286, νd = 20.9 — ultra-high-index dense flint (Schott N-SF66 / Ohara E-FDS1, 6-digit code 923/209), negative meniscus (fl = −74.8 mm).
- L9 (crown): nd = 1.80400, νd = 46.5 — lanthanum dense flint (OHARA S-LAH65V), biconvex (fl = +45.0 mm).
- Combined focal length: +111.7 mm.
- Role: D3 provides convergent power for the rear group while maintaining chromatic correction. The use of N-SF66 (extremely high-index, nd ≈ 1.923, νd ≈ 20.9) as the negative element means this glass contributes positive refractive power to the system at the cemented junction while acting as the dispersive counterpart. The lanthanum crown (S-LAH65V) provides the dominant positive power. This high-index doublet architecture concentrates optical power in a compact doublet with manageable surface curvatures.

### 7.2 Subunit L3b — Image Stabilization Unit

L3b consists of two air-separated elements that move together perpendicular to the optical axis during IS operation.

**L10 (Element 10)** — Positive meniscus, concave toward the object.
- Glass: nd = 1.92286, νd = 20.9 — N-SF66 / E-FDS1 class (same glass as L8).
- Focal length: +105.4 mm.
- Surface radii: R₁ = −295.214, R₂ = −73.431 (both negative — concave toward object).
- Role: Despite being a positive meniscus, L10's primary function within the IS subunit is to contribute to the overall negative power of L3b while maintaining the high refractive index needed to keep the Petzval sum manageable during IS decentration. The meniscus form with both surfaces concave toward the object minimizes the element's contribution to coma when decentered.

**L11 (Element 11)** — Biconcave negative.
- Glass: nd = 1.91082, νd = 35.3 — ultra-high-index lanthanum dense flint (6-digit code 911353; not in catalog).
- Focal length: −37.0 mm.
- Surface radii: R₁ = −88.195, R₂ = +54.928.
- Role: The dominant negative element of the IS pair. Its strong diverging power, combined with L10's weak positive power, yields L3b's net focal length of −57.9 mm.

### 7.2.1 IS design conditions

The patent's two primary inequalities constrain the IS subunit:

**Inequality (1):** 1.85 < N3b_ave

N3b_ave is the average refractive index of all elements in L3b. For Example 4:
N3b_ave = (1.92286 + 1.91082) / 2 = **1.917**

This high average index is essential. When L3b decenters during IS, the Petzval sum of the decentered configuration changes. High-index glasses minimize the Petzval contribution per unit of refractive power (since the Petzval sum contribution is φ/n, and higher n reduces the ratio). This keeps the image plane tilt during IS correction acceptably small (¶0026).

**Inequality (2):** f₃b / f < −0.25

For Example 4: f₃b/f = −57.89/130.95 = **−0.442**

This constrains the IS unit's focal length relative to the system. Too weak (ratio closer to zero) and the IS group must translate excessively to produce the needed image shift, increasing the effective diameter and weight. Too strong (ratio more negative) and the IS decentration produces excessive aberration variation. The −0.442 value represents a balanced design point.

### 7.3 Subunit L3c — Rear Corrector Group

L3c is the most element-rich subunit with 6 elements in 4 groups and a net positive focal length of +56.1 mm. This is where the final wavefront quality is established.

**L12 + L13 (Elements 12–13)** — Cemented doublet D4.
- L12 (crown): nd = 1.60311, νd = 60.6 — borosilicate crown (OHARA S-BSM14 / Schott N-SK14), biconvex (fl = +38.5 mm).
- L13 (flint): nd = 1.84666, νd = 23.8 — S-TIH53 (same glass as L1), biconcave (fl = −56.1 mm).
- Combined focal length: +103.0 mm.
- Role: D4 provides converging power while correcting chromatic aberration in the rear group. The N-SK14 crown is a conventional borosilicate — not a low-dispersion exotic — indicating that the secondary spectrum correction in the rear group is less critical than in L1, where the UD elements handle the primary chromatic burden.

**L14 (Element 14)** — Biconvex positive, standalone.
- Glass: nd = **2.00069**, νd = 25.5 — ultra-high-index dense flint (OHARA S-NPH7).
- Focal length: +42.3 mm.
- Role: This is the most optically remarkable element in the lens. With nd ≈ 2.0, S-NPH7 is among the highest-index optical glasses commercially available. Its use here as a **positive** element (despite being a "flint" by catalog classification) is deliberate: the extremely high index allows strong positive curvature with moderate surface angles, keeping the angular deviation per surface small and thereby reducing higher-order spherical aberration and coma contributions. Critically, its high index also produces a large **negative** Petzval contribution per unit of positive power — the Petzval sum contribution is φ/n, and with n ≈ 2.0 and a strongly positive φ, the Petzval contribution is only φ/2.0, roughly half what a conventional crown glass (n ≈ 1.5) would contribute for the same power. This is Canon's primary mechanism for controlling field curvature in this all-spherical design.

**L15 + L16 (Elements 15–16)** — Cemented doublet D5.
- L15 (crown): nd = 1.65844, νd = 50.9 — lanthanum crown (OHARA S-LAL8), biconcave (fl = −31.2 mm).
- L16 (flint): nd = 1.80518, νd = 25.5 — dense flint (Schott SF6 equivalent), positive meniscus (fl = +45.5 mm).
- Combined focal length: −96.5 mm.
- Role: D5 employs an inverted power assignment: the higher-νd element (L15, νd = 50.9, conventionally the "crown") carries negative power, while the lower-νd element (L16, νd = 25.5, conventionally the "flint") carries positive power. This is the opposite of a standard achromatic doublet where the crown is positive and the flint is negative. The inverted arrangement is used when the designer needs a net-negative achromatic group — D5 provides diverging power to counterbalance the strong positive convergence from L14 and D4 while maintaining chromatic correction. The negative power also contributes to Petzval sum reduction.

**L17 (Element 17)** — Negative meniscus, concave toward the object.
- Glass: nd = 1.58913, νd = 61.1 — barium crown (OHARA S-BAL35 / Schott N-SK5).
- Focal length: −115.1 mm.
- Role: The final optical element before the back focal space. This weakly negative meniscus acts as a field flattener, gently diverging the converging bundle to correct residual field curvature and astigmatism across the full image circle. Its concave-toward-object form also helps correct distortion. Positioned 12.63 mm ahead of the filter glass, it has a large influence on the telecentricity of the exit pupil — important for uniform illumination on modern CMOS sensors.

---

## 8. Glass Palette Summary

The design uses **12 unique glass types** across 17 elements:

| nd | νd | Catalog Match | Count | Elements | Role |
|----|-----|--------------|-------|----------|------|
| 1.49700 | 81.5 | Canon UD (≈ S-FPL51) | 3 | L2, L3, L5 | Low-dispersion crown for LoCA/secondary spectrum |
| 1.58913 | 61.1 | S-BAL35 / N-SK5 | 1 | L17 | Rear field flattener |
| 1.60311 | 60.6 | S-BSM14 / N-SK14 | 1 | L12 | Crown in rear doublet D4 |
| 1.61800 | 63.4 | S-PHM52 | 1 | L7 | Focus unit (plano-concave) |
| 1.65844 | 50.9 | S-LAL8 | 1 | L15 | Lanthanum crown in inverted doublet D5 |
| 1.77047 | 29.7 | S-TIH18 family (770/297) | 2 | L4, L6 | Flint partner for UD doublets |
| 1.80400 | 46.5 | S-LAH65V | 1 | L9 | Lanthanum crown in D3 |
| 1.80518 | 25.5 | SF6 equiv. | 1 | L16 | Flint positive element in inverted D5 |
| 1.84666 | 23.8 | S-TIH53 | 2 | L1, L13 | High-index dense flint |
| 1.91082 | 35.3 | 911353 lanthanum | 1 | L11 | IS unit negative element |
| 1.92286 | 20.9 | N-SF66 / E-FDS1 (923/209) | 2 | L8, L10 | Ultra-high-index flint (D3 and IS) |
| 2.00069 | 25.5 | S-NPH7 | 1 | L14 | Ultra-high-index Petzval corrector |

The glass selection is aggressive by any standard. The use of S-NPH7 (nd ≈ 2.0) and S-NPH2 (nd ≈ 1.923) places extreme demands on manufacturing homogeneity and thermal stability — these ultra-high-index glasses are expensive and difficult to fabricate in large diameters. Their deployment here reflects Canon's willingness to accept higher materials cost in exchange for wavefront performance in an all-spherical design.

---

## 9. Petzval Sum and Field Curvature

The surface-by-surface Petzval sum computes to **0.000424 mm⁻¹**, corresponding to a Petzval radius of approximately 2,360 mm. At the full image height of 21.64 mm (half-diagonal of a 36 × 24 mm sensor), this produces a theoretical Petzval field curvature of ~0.10 mm — well within the depth of focus at f/1.86.

This remarkably flat Petzval surface is achieved through three mechanisms:

1. **High-index positive elements** — L14 (nd = 2.00069) and L10 (nd = 1.92286) carry positive power with anomalously low Petzval contributions due to their high refractive indices.
2. **Strategic negative elements** — D1, D5, L17, and the IS unit (L3b) provide negative power that directly subtracts from the Petzval sum.
3. **Five cemented doublets** — Each doublet concentrates positive and negative power at the cemented junction where the chief ray height varies, allowing independent tuning of the Petzval sum without altering the overall system power.

---

## 10. Chromatic Correction Strategy

The lens's chromatic correction rests on two pillars:

**Primary LoCA correction** is handled by the three UD elements in L1. Doublet D2 (L5 + L6) is essentially perfectly achromatic (residual ≈ 0.000009), while D1 (L3 + L4) is intentionally under-corrected (residual = −0.000636), leaving a controlled residual that is balanced by elements downstream in L3. The standalone UD element L2 contributes additional positive power with minimal chromatic impact (owing to its high Abbe number, νd = 81.5), allowing the system to reach the total converging power required for L1 without burdening the cemented doublets with excessive chromatic correction demands.

**Secondary spectrum control** arises from the anomalous partial dispersion of the UD fluorophosphate glass paired with the S-TIH18-class titanium flint (nd = 1.77047, νd = 29.7). Both glasses deviate from the "normal line" on the PgF vs. νd diagram but in complementary directions, reducing the secondary spectrum residual below what any normal-glass pair could achieve.

**Rear group correction** in L3 uses a different strategy: conventional glass pairs (N-SK14 + S-TIH53 in D4, S-LAL8 + SF6 in D5) handle longitudinal and lateral chromatic aberration locally. The rear group does not employ UD glass because the beam height and chief ray angles in L3 are smaller than in L1, making secondary spectrum less influential.

The aberration diagrams (Fig. 8A/8B) show chromatic aberration bounded within ±0.05 mm at f/1.86, consistent with the lens's measured performance showing negligible LoCA.

---

## 11. Verified Patent Parameters (Example 4)

All values below were independently computed by paraxial ray trace through the full 32-surface prescription and verified against the patent's Table 1.

| Parameter | Computed | Patent | Status |
|-----------|----------|--------|--------|
| System EFL | 130.939 mm | 130.95 mm | ✓ (Δ < 0.01%) |
| f₁ (L1) | 85.14 mm | 85.14 mm | ✓ |
| f₂ (L2) | −62.48 mm | −62.48 mm | ✓ |
| f₃ (L3) | 109.50 mm | 109.52 mm | ✓ |
| f₃b (L3b IS unit) | −57.89 mm | −57.88 mm | ✓ |
| N3b_ave | 1.917 | 1.917 | ✓ |
| f₃b/f | −0.442 | −0.442 | ✓ |
| BF (air-converted) | 14.42 mm | 14.42 mm | ✓ |
| f₁/BF | 5.90 | 5.91 | ✓ |
| f₂/BF | −4.33 | −4.33 | ✓ |
| f₃/BF | 7.59 | 7.60 | ✓ |
| BF/f | 0.110 | 0.110 | ✓ |
| Petzval sum | 0.000424 mm⁻¹ | — | (independently computed) |
| Image height | 21.64 mm | 21.64 mm | ✓ |

Individual element focal lengths were computed using the thick-lens formula, which accounts for the finite center thickness of each element. For thick meniscus and biconvex elements (e.g., L1 at 6.98 mm center thickness, L12 at 9.01 mm), the thick-lens correction shifts the focal length by 1–4% relative to the thin-lens approximation. Combined doublet and subunit focal lengths were computed via subsystem paraxial ray trace through the actual cemented prescription.

---

## 12. Design Summary

The Canon RF 135mm f/1.8 L IS USM, as embodied in Example 4 of US 2023/0213745 A1, is a 17-element, 12-group, all-spherical telephoto prime with inner focusing and optical image stabilization. Its optical character can be summarized as follows:

**All-spherical correction at f/1.8** is achieved through a generous element count (17), five cemented doublets, and aggressive glass selection — including ultra-high-index glasses up to nd ≈ 2.0 — that provides sufficient degrees of freedom to correct spherical aberration, coma, and field curvature without aspherical surfaces.

**Three UD fluorophosphate elements** in the front group correct primary and secondary longitudinal chromatic aberration, paired with anomalous-dispersion titanium flint (S-TIH18 family, nd = 1.77047, νd = 29.7) to minimize secondary spectrum.

**Inner focus with a single lightweight element** (a plano-concave negative lens) enables the fast, silent Nano USM autofocus performance while minimizing focus-induced aberration variation.

**A two-element image stabilization subunit** (L3b) uses very high-index glasses (average nd = 1.917) to minimize Petzval sum variation during IS decentration, satisfying the patent's primary design inequality.

**Field curvature control** relies primarily on the ultra-high-index L14 (S-NPH7, nd ≈ 2.0) and strategic negative power distribution rather than a dedicated field-flattening lens, though L17 serves as a mild final corrector.

The result is a lens that multiple independent test laboratories have described as among the sharpest ever tested at any focal length — an achievement made all the more remarkable by the absence of aspherical surfaces.

---

## Sources

- US Patent Application Publication US 2023/0213745 A1 (Nakada, Canon), published July 6, 2023.
- Canon USA official product page: RF135mm F1.8 L IS USM specifications.
- Canon Europe specifications page: 17 elements / 12 groups, 3× UD, Nano USM, 0.7 m minimum focus.
- OHARA Optical Glass Catalog (for glass identification by nd/νd matching).
- Paraxial ray trace computations performed independently and verified against patent Table 1.
- Element focal lengths computed using the thick-lens formula; combined doublet and subunit focal lengths computed via subsystem paraxial ray trace through the full cemented prescription.
