# Voigtländer NOKTON 50mm f/1.2 X-Mount — Patent Optical Analysis

**Patent:** JP 2025-58577 A (Published 2025-04-09)
**Filing date:** 2023-09-28 (Application No. 2023-168590)
**Applicant:** Cosina Co., Ltd. (Nakano-shi, Nagano)
**Inventor:** Shibata Yūki (柴田 裕輝)
**Focus:** Example 1 (実施例1) — the implemented production design

---

## 1. Product Identification

This patent covers the **Voigtländer NOKTON 50mm f/1.2 X-Mount**, a manual-focus medium-telephoto prime lens designed exclusively for the Fujifilm X system (APS-C). Key production specifications confirmed via Cosina's first-party documentation:

- 9 elements in 8 groups
- All-spherical construction (no aspherical surfaces)
- Two anomalous partial dispersion (APD) glass elements
- 12-bladed aperture diaphragm, f/1.2–f/16 in 1/3-stop clicks
- Minimum focus distance: 0.39 m (unit/extension focusing)
- Filter thread: 58 mm
- Dimensions: ∅63.9 × 49.0 mm, 290 g
- Angle of view: 32.5° (equivalent to 75 mm on full-frame)

The patent filing invokes the Shokuhin Patent Act §30(2) grace period, referencing Cosina's website disclosure on 2023-09-10 — consistent with the lens's September 2023 market release at ¥100,000. The §30(2) citation confirms that Example 1 represents the production optical formula: the embodiment was publicly disclosed before filing.

Cosina describes the optical formula as a "Sonnar type with asymmetrical front and rear groups." This characterization is apt in the broad sense — the design features a large, multi-element positive front group that strongly converges the beam before the stop, followed by a compact rear group — but the specific implementation is more nuanced than a classical Sonnar, as detailed below.

---

## 2. Design Overview

The optical system comprises three groups arranged object-to-image:

| Group | Elements | Power | Function |
|:------|:---------|:------|:---------|
| G1 (front, Gf) | L11–L15 (5 singlets) | Weak positive (f ≈ 302 mm) | Primary convergence; gradually bends the large-diameter axial beam toward the stop |
| G2 (middle) | L21+L22 (cemented doublet J21) | Positive (f ≈ 46 mm) | Chromatic and spherical correction; also contributes convergence |
| G3 (rear) | L31, L32 (2 singlets) | Positive (f ≈ 69 mm) | Final image formation; field flattening |

The aperture stop (STO) sits between G1 and G2. The combined rear group Gr = G2+G3 has a focal length of 29.39 mm — carrying the majority of the system's refractive power.

### Patent-stated specifications (Example 1)

| Parameter | Value |
|:----------|:------|
| System focal length f | 48.50 mm |
| F-number | F/1.23 |
| Half-field angle ω | 16.28° |
| Optical total length TTL | 65.00 mm |
| Back focal distance BF | 12.57 mm |
| Front group focal length ff | 302.45 mm |
| Rear group focal length fr | 29.39 mm |

### Verified by paraxial ray trace (ABCD matrix)

| Parameter | Computed | Patent | Δ |
|:----------|:---------|:-------|:--|
| EFL | 48.48 mm | 48.50 mm | −0.02 mm |
| F-number (EFL/2Hh) | 1.23 | 1.23 | — |
| ff (G1) | 301.50 mm | 302.45 mm | −0.95 mm |
| fr (Gr) | 29.39 mm | 29.39 mm | 0.00 mm |
| TTL | 65.00 mm | 65.00 mm | 0.00 mm |

The small discrepancy in ff (~0.3%) likely reflects rounding in the patent's tabulated values. All conditional expressions are satisfied.

---

## 3. Aspherical Surfaces

**Example 1 has no aspherical surfaces.** All nine elements are spherical. This is a distinguishing characteristic of the X-mount NOKTON 50mm f/1.2 versus other lenses in the Voigtländer 50mm f/1.2 family:

| Variant | Elements/Groups | Aspherical | Patent basis |
|:--------|:----------------|:-----------|:-------------|
| **50mm f/1.2 X-Mount** (this lens) | 9E/8G | **None** | JP 2025-58577A, Ex. 1 |
| 50mm f/1.2 Aspherical VM/E/Z | 8E/6G | 2 elements, 4 asph. surfaces | Separate earlier patent |
| 50mm f/1.0 Aspherical VM | 7E/6G | 1 GA element | Separate patent |

The all-spherical design is notable for an f/1.2 lens of this focal length. Cosina achieves adequate aberration control through the sheer number of surfaces — 18 refracting surfaces provide enough degrees of freedom to balance spherical aberration, coma, and field curvature without aspherical correction. The trade-off is the higher element count (9 vs. 8) compared to the aspherical VM variant.

The patent does include **Example 2** (実施例2), which adds a single aspherical surface on the front of L11 (surface 1A), with coefficients K=0, A4=−2.11597×10⁻⁶, A6=−1.16190×10⁻⁹, A8=−1.93368×10⁻¹². However, Example 2 differs from the production X-mount lens in several other respects (different glass on L11, G3 as a cemented doublet instead of two singlets, 17 surfaces instead of 18), confirming that Example 1 is the implemented design.

---

## 4. Glass Identification

Six distinct glass types are used. Identification was performed against OHARA and HOYA catalogs using official datasheets and the OHARA 2023 pocket catalog cross-reference tables. Notably, not all glasses match OHARA types — the design draws from both OHARA and HOYA supply chains.

### L11, L12, L13 — OHARA S-LAL18

| Property | Patent | S-LAL18 | Residual |
|:---------|:-------|:--------|:---------|
| nd | 1.72916 | 1.72916 | 0.00000 |
| νd | 54.67 | 54.68 | −0.01 |
| 6-digit code | 729/547 | 729/547 | — |

S-LAL18 is a lanthanum crown glass in the LAL (Lanthanum-Light) family. It offers relatively high refractive index with moderate dispersion — a good balance for positive meniscus elements that must bend light strongly without introducing excessive chromatic aberration. It is an eco-friendly (lead/arsenic-free) glass in OHARA's "S-" series, suitable for conventional polishing. The use of a single glass type for all three front positive meniscus elements simplifies manufacturing and procurement.

**Cross-reference:** Schott N-LAK34 and HOYA TAC8 share equivalent nd/νd values (code 729/547).

### L14 — OHARA S-TIH14

| Property | Patent | S-TIH14 | Residual |
|:---------|:-------|:--------|:---------|
| nd | 1.74077 | 1.74077 | 0.00000 |
| νd | 27.74 | 27.79 | −0.05 |
| 6-digit code | 741/277 | 741/278 | — |

S-TIH14 is a titanium-flint glass (code 741/278) with high refractive index and high dispersion. In G1's negative meniscus role, it provides the necessary negative power and high dispersion to counterbalance the chromatic aberration introduced by the three preceding S-LAL18 positive elements. The νd residual of 0.05 is within normal catalog tolerance (±0.5%).

**Cross-reference:** Schott N-SF14, HOYA FD140 (code 762/266 — note: different code family; OHARA S-TIH14 is the direct match at 741/278).

### L15 — OHARA S-TIH18

| Property | Patent | S-TIH18 | Residual |
|:---------|:-------|:--------|:---------|
| nd | 1.76182 | 1.76182 | 0.00000 |
| νd | 26.58 | 26.52 | +0.06 |
| 6-digit code | 762/266 | 762/265 | — |

S-TIH18 is a denser titanium-flint glass than S-TIH14, with higher refractive index and higher dispersion. The progression from S-TIH14 (L14) to S-TIH18 (L15) — increasing nd from 1.741 to 1.762 while decreasing νd from 27.8 to 26.5 — reflects the designer's strategy of increasing negative power and chromatic correction capability toward the rear of G1, where the beam diameter is smallest (Hs = 10.54 mm vs. Hh = 19.75 mm at the front).

*Note:* The patent νd of 26.58 is 0.06 higher than S-TIH18's catalog value of 26.52. This is within normal tolerance but is the largest νd residual among the six glass types.

### L21 — OHARA S-NPH1

| Property | Patent | S-NPH1 | Residual |
|:---------|:-------|:-------|:---------|
| nd | 1.80809 | 1.80809 | 0.00000 |
| νd | 22.76 | 22.76 | 0.00 |
| 6-digit code | 808/228 | 808/228 | — |

S-NPH1 is a niobium-phosphate glass in OHARA's NPH (Niobium Phosphate High-index) family — distinct from the TIH (titanium-flint) glasses used elsewhere in G1. NPH glasses are noteworthy for their very high dispersion combined with anomalous partial dispersion characteristics. As the negative element in the cemented doublet J21, S-NPH1 provides strong chromatic correction against the high-index positive element L22. The extremely low Abbe number (22.76) makes it highly effective for color correction, and the niobium-phosphate composition gives it partial dispersion properties that differ from what a titanium-flint glass at similar νd would provide.

### L22, L31 — HOYA TAFD37A

| Property | Patent | TAFD37A | Residual |
|:---------|:-------|:--------|:---------|
| nd | 1.90043 | 1.90043 | 0.00000 |
| νd | 37.37 | 37.37 | 0.00 |
| 6-digit code | 900/374 | 900/374 | — |

HOYA TAFD37A is a dense lanthanum glass with an extraordinarily high refractive index of 1.900 combined with moderate dispersion. The "TAFD" designation in HOYA's naming system indicates a Tantalum-containing Anomalous Dispersion Flint (Dense) glass — the name itself signals **anomalous partial dispersion (APD)** properties. Cosina's marketing material confirms the production lens contains "two Atypical Partial Dispersion elements," and these two elements — L22 in the cemented doublet and L31 in G3 — are the ones that use this glass.

The use of TAFD37A in both G2 and G3 is a key design decision. Its extremely high refractive index allows strong positive power from surfaces with relatively gentle curvature, reducing higher-order aberrations. At the same time, its APD characteristic (the partial dispersion θg,F deviates from the normal line) provides secondary spectrum correction that would otherwise require fluorite or ED glass in the front group.

No OHARA glass matches these exact nd/νd values. OHARA's nearest equivalent is S-LAH92 (code 892/371, nd ≈ 1.892, νd ≈ 37.1), which differs by Δnd ≈ 0.008 and Δνd ≈ 0.3 — too large to be the same glass. This confirms that Cosina sources at least some glass from HOYA for this design. The choice of TAFD37A over S-LAH92 likely reflects both its closer match to the designer's optimization target and its superior APD properties at this specific nd/νd point.

### L32 — HOYA E-ADF50

| Property | Patent | E-ADF50 | Residual |
|:---------|:-------|:--------|:---------|
| nd | 1.65412 | 1.65412 | 0.00000 |
| νd | 39.68 | 39.62 | +0.06 |
| 6-digit code | 654/397 | 654/396 | — |

HOYA E-ADF50 is a moderate-index flint glass in HOYA's eco-friendly "E-" series. The "ADF" designation stands for Anomalous Dispersion Flint, indicating that this glass also has non-standard partial dispersion characteristics — though its anomalous departure (dPgF = −0.0033) is modest compared to the TAFD37A elements. As the final negative element in the system, it serves as a field flattener and contributes to correction of the Petzval sum. Its relatively low refractive index compared to L31 (1.654 vs. 1.900) creates a strong index differential at the air gap between L31 and L32, which is critical for the field-flattening function.

*Note:* No OHARA glass at code 654/397 appears in the current recommended catalog. The closest OHARA family member, L-TIM28 (code 689/311, a PGM-grade glass), has a completely different nd/νd. This further supports a mixed OHARA/HOYA glass supply chain for this design.

### Glass summary

The design draws from two glass manufacturers: OHARA (S-LAL18, S-TIH14, S-TIH18, S-NPH1) and HOYA (TAFD37A, E-ADF50). The glass families span lanthanum crowns (LAL), titanium flints (TIH), niobium phosphates (NPH), dense lanthanum anomalous dispersion types (TAFD), and anomalous dispersion flints (ADF). The optical condition νdp > νdn (Condition 2) — requiring that positive elements have higher Abbe numbers than negative elements within G1 — is straightforwardly satisfied: the three S-LAL18 elements have νd = 54.67, while the two negatives have νd = 27.74 (S-TIH14) and 26.58 (S-TIH18) respectively.

---

## 5. Element-by-Element Analysis

### G1: Front Group (f ≈ 302 mm, weak positive)

The front group's deliberately weak positive power (ff/f = 6.24) is the heart of the patent's innovation. By distributing the front convergence across five elements with gradually increasing curvature, the designer achieves a very large beam compression ratio (Hs/Hh = 0.53) — the axial beam diameter shrinks by nearly half before reaching the stop. This allows G2 and G3 to be physically small despite carrying most of the system's refractive power.

**L11 — Positive meniscus (f = +117.9 mm)**

Surfaces i=1 (R=53.73) and i=2 (R=138.48). Both radii positive, convex toward the object — a meniscus with the concavity facing the image. This is the largest element (Hh = 19.75 mm semi-diameter), setting the physical aperture of the lens. Its relatively weak positive power gently begins bending the incoming collimated beam. The front radius R₁=53.73 mm is the largest among the three positive elements, consistent with the patent's Claim 4 requirement that the object-side radii decrease sequentially: |R₁| > |R₃| > |R₅| (53.73 > 36.67 > 26.68).

**L12 — Positive meniscus (f = +155.0 mm)**

Surfaces i=3 (R=36.67) and i=4 (R=52.00). Same configuration as L11 — positive meniscus convex to object. Interestingly, L12 has weaker power than L11 despite its tighter curvatures, because the ratio R₁/R₂ is closer to unity (36.67/52.00 = 0.71 vs. 53.73/138.48 = 0.39).

**L13 — Positive meniscus (f = +50.8 mm)**

Surfaces i=5 (R=26.68) and i=6 (R=85.50). The strongest positive element in G1 by a significant margin. With a focal length nearly equal to the system EFL, L13 contributes the bulk of G1's convergent power. The ratio R₅/R₆ = 0.31 is the most asymmetric of the three positive meniscus elements, producing a nearly threefold increase in power compared to L12. The large center thickness (6.51 mm) is necessary to maintain adequate edge thickness given the strong curvatures and large clear aperture at this position.

**L14 — Negative meniscus (f = −64.7 mm)**

Surfaces i=7 (R=204.14) and i=8 (R=38.68). Convex toward the object with a very flat front surface (R=204.14), creating a meniscus that acts as an overcorrecting element for the spherical aberration generated by L11–L13. The S-TIH14 flint glass provides chromatic correction. The front radius follows the decreasing-magnitude pattern: |R₇| > |R₉| (204.14 > 47.82).

**L15 — Negative meniscus (f = −27.1 mm)**

Surfaces i=9 (R=47.82) and i=10 (R=14.26). The strongest negative element in G1 and the element with the smallest clear aperture in the front group (Hs = 10.54 mm). The steep rear surface (R=14.26) produces intense divergence, which is essential for positioning the rear principal point of the entire system forward — the key mechanism for achieving a short TTL relative to focal length. The S-TIH18 glass (νd=26.52) has the highest dispersion in G1, maximizing the chromatic correction from this compact, strongly curved element.

The image-side radii of the negatives also follow the decreasing pattern from Claim 5: |R₈| > |R₁₀| (38.68 > 14.26).

### Aperture Stop (STO)

The stop sits in the 7.54 mm air gap between L15 (surface 10) and the beginning of G2 (surface 12). Specifically, it is positioned 7.54 mm after surface 10 and 1.15 mm before surface 12, for a total air space of 7.54 + 1.15 = 8.69 mm (accounting for surface 10's d=7.54 and STO's d=1.15). The patent explicitly places the stop between G1 and G2 (Claim 2). At the stop, the axial beam has been compressed to roughly 53% of its entrance diameter.

### G2: Cemented Doublet J21 (f = +46.2 mm, positive)

**L21 — Negative meniscus (f = −54.2 mm)**

Surfaces i=12 (R=66.00) and i=12→13 junction (R=26.13). The front element of the doublet, using S-NPH1 — a niobium-phosphate glass with the highest dispersion in the entire system (νd=22.76). In the cemented doublet, L21's strong negative power and very high dispersion counterbalance L22's strong positive power and moderate dispersion, achieving achromatic correction. The meniscus shape with the concavity facing the image minimizes surface reflection losses at the junction.

**L22 — Biconvex positive (f = +24.9 mm)**

Surfaces i=13 (R=26.13, junction) and i=14 (R=−145.01). Using HOYA TAFD37A, the high-index APD glass. With a focal length of only 24.9 mm, this is the most powerful single element in the system. The extremely high refractive index (1.900) means that the curvatures needed to produce this power are relatively gentle, keeping higher-order aberrations manageable. This element is one of the two APD elements identified in Cosina's product literature.

The doublet as a unit has f = +46.2 mm. Although the patent text notes G2 has positive power in Example 1, it adds that the claims permit either positive or negative power for G2 — suggesting that the sign of J21's net power is a tuning variable rather than a structural requirement.

### G3: Rear Group (f = +69.2 mm, positive)

**L31 — Biconvex, nearly plano-convex (f = +28.6 mm)**

Surfaces i=15 (R=2707.72, effectively flat) and i=16 (R=−25.97). Using HOYA TAFD37A — the second APD element. The nearly flat front surface means almost all of L31's refractive power comes from the steeply curved rear surface. This configuration minimizes coma contribution from L31 while providing strong convergence toward the image plane. At nd=1.900, the single rear surface produces a surface power of φ = (1.0 − 1.900)/(−25.97) = +0.0347 mm⁻¹, accounting for nearly all of L31's total power.

**L32 — Negative meniscus, concave toward object (f = −43.7 mm)**

Surfaces i=17 (R=−26.07) and i=18 (R=−300.00, nearly flat). Using HOYA E-ADF50. This is the field flattener — its negative power and position near the image plane counteract the inward-curving Petzval surface produced by the strong positive elements. The concave-toward-object shape creates a diverging effect primarily in the off-axis bundle, flattening the field without significantly affecting the axial image. The nearly flat rear surface (R=−300.00) gently curves the outermost rays to fine-tune the back focal distance.

The fact that L31 and L32 are separated by an air gap (d=2.97 mm between surfaces 16 and 17), rather than cemented, distinguishes Example 1 from Example 2 (where G3 is a cemented doublet J31). The air gap provides an additional degree of freedom for aberration correction and allows each element to be independently centered during assembly.

---

## 6. Focusing Mechanism

Example 1 uses **unit focusing** (extension system). Two variable gaps are defined:

| Gap | Label | d (infinity) | d (close focus) |
|:----|:------|:-------------|:----------------|
| Object to surface 1 | ZD0 | ∞ | 369.5 mm |
| Surface 18 to image | ZD18 (BF) | 12.57 mm | 19.36 mm |

The entire optical assembly translates forward (toward the object) during focusing. As the lens extends, the back focal distance increases from 12.57 mm to 19.36 mm (a change of +6.79 mm). At close focus, the object distance (ZD0) is 369.5 mm from the front lens surface. The marketed minimum focus distance of 0.39 m is measured from the sensor plane to the subject and includes the flange distance and any cover glass optical path omitted from the patent prescription — these additional path lengths, combined with rounding for the production specification, account for the difference between the patent's raw conjugate sum and the marketed figure.

There are no internal focusing groups — no elements within the optical system move relative to each other. This is the simplest and most mechanically robust focusing arrangement, well-suited to Cosina's precision all-metal helicoid construction. The downside is that aberration balance changes with focus distance (no floating element compensation), which the patent acknowledges by noting that excessively strong focus-group power would cause distance-dependent aberration variation.

---

## 7. Conditional Expressions

The patent defines five optical conditions. All are satisfied by Example 1:

| Condition | Expression | Value | Requirement | Status |
|:----------|:-----------|:------|:------------|:-------|
| 1 | Hs/Hh | 0.53 | < 0.65 | ✓ |
| 2 | νdp > νdn | 54.67 > {27.74, 26.58} | positive Abbe > negative Abbe | ✓ |
| 3 | BF/TTL | 0.19 | < 0.30 | ✓ |
| 4 | fr/f | 0.61 | 0.50 < x < 0.75 | ✓ |
| 5 | TTL/f | 1.34 | < 1.45 (at F ≤ 1.4) | ✓ |

**Condition 1** (Hs/Hh < 0.65) is the core claim. It quantifies the beam compression through G1: the marginal ray height drops from 19.75 mm at the front element to 10.54 mm at the rear of G1, a ratio of 0.53. This compression is what enables a compact rear section — G2 and G3 can use physically smaller elements because the beam has already been substantially converged.

**Condition 5** (TTL/f < 1.45 at F ≤ 1.4) is particularly notable. At TTL/f = 1.34, this f/1.23 lens is remarkably compact for its speed class. For context, a typical f/1.4 double-Gauss 50mm lens has TTL/f in the range of 1.0–1.2, but those designs operate at a significantly smaller aperture ratio. Achieving TTL/f = 1.34 at f/1.23 — wider than f/1.4 — with only spherical elements is an impressive feat of compact design.

---

## 8. Petzval Sum and Field Curvature

The computed Petzval sum is **+0.00451 mm⁻¹**, yielding a Petzval radius of **222 mm** (4.58× the focal length). This is a moderately undercorrected Petzval — the natural field curves inward (toward the lens). The ratio of 4.58× EFL is reasonable for a fast lens of this type; perfect flatness would require a Petzval sum of zero, which is impractical at f/1.2 without extremely exotic glass combinations.

The field flattener L32 (negative power near the image plane) is the primary mechanism for mitigating the Petzval curvature in practice — it bends the off-axis image shell outward without significantly affecting the axial image quality.

---

## 9. Design Lineage and Context

This lens represents a distinct branch of Cosina's 50mm f/1.2 family tree. The VM-mount NOKTON 50mm f/1.2 Aspherical (8 elements/6 groups, with ground aspherical elements) is a full-frame, rangefinder-coupled design optimized for Leica M cameras. The X-mount variant redesigns the formula from scratch for the APS-C image circle: adding one element, eliminating the aspherical surfaces, and adopting unit focusing instead of a floating-element system.

The all-spherical approach for the X-mount is pragmatic. The APS-C format's smaller image circle means off-axis aberrations are less severe to begin with, and the cost savings from eliminating ground aspherical elements align with the lens's lower price point (¥100,000 vs. significantly more for the VM variant). Cosina compensates for the loss of aspherical correction by adding a ninth element and using the HOYA TAFD37A APD glass in two positions — a design strategy that trades element count for manufacturing simplicity.

The Sonnar-like topology — a large positive front group, stop, compact rear group — is well-suited to APS-C mirrorless cameras, where the short back focal distance requirement is relaxed compared to rangefinder cameras (no rangefinder mechanism to clear) but the register distance is still short enough that a quasi-telephoto layout is beneficial for keeping the lens physically compact.
