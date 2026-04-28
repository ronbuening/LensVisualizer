# Carl Zeiss Pro-Tessar 35mm f/3.2 — Optical Analysis

**Patent:** DE 1,089,183 (Deutsches Patentamt)
**Filed:** 25 March 1955 · **Published:** 15 September 1960
**Applicant:** Fa. Carl Zeiss, Heidenheim/Brenz
**Inventor:** Dr. Günther Lange, Königsbronn (Württemberg)
**Example analyzed:** Table 1 (Example 1) — the full system per Fig. 1

---

## 1. Historical Context and Design Concept

The Pro-Tessar 35mm f/3.2 was part of the Zeiss Ikon Contaflex interchangeable front-cell system, introduced for leaf-shutter SLR cameras beginning with the Contaflex III in 1956. The Contaflex cameras permanently housed three rear elements in two groups within the camera body — a biconcave middle lens and a cemented rear doublet — together with the Synchro-Compur leaf shutter, the aperture diaphragm, and the helical focusing mechanism. The front element of the standard 50mm f/2.8 Tessar could be removed via a bayonet latch and replaced with a Pro-Tessar auxiliary front cell to change the system focal length.

The 35mm f/3.2 Pro-Tessar replaced an earlier 35mm f/4 version. It provided a moderate wide-angle field of view (ω = 32° half-field, covering the full 24×36 mm frame diagonal) while maintaining the same back focal distance as the standard 50mm Tessar, so that the mirror clearance and film-plane registration of the camera body remained unchanged. This constraint — a fixed back focal distance across focal lengths — is the defining challenge of the Pro-Tessar concept and drives the entire optical architecture.

The patent references an older German patent, DE 1,018,238, as prior art.

## 2. System Architecture

The complete optical system comprises **eight elements in six groups** arranged as follows:

| Region | Elements | Groups | Description |
|--------|----------|--------|-------------|
| Interchangeable front cell | L_I through L_V (5 elements) | 4 groups | Patented front system; bayonet-mounted |
| Camera body (fixed) | L_VII, L_VIII, L_IX (3 elements) | 2 groups | Rear portion of the basic Tessar objective |

The patent numbers the elements and surfaces to maintain consistency with the basic Tessar objective (Table 2). In the Tessar alone, L_VI is the front element, L_VII is the biconcave middle lens, and L_VIII–L_IX form the cemented rear doublet. The Pro-Tessar removes L_VI and substitutes the five-element front cell L_I–L_V, preserving the L_VII–L_IX numbering (and their surface numbers r₁₂–r₁₆) from the basic objective.

The aperture diaphragm (labeled "Bl" in the patent figures) sits in the air gap between L_V and L_VII — that is, between the removable front cell and the fixed body optics.

### 2.1 Front Cell: The Patent's Contribution

The patent text describes the front cell as comprising "five lenses grouped into four members" (*fünf Linsen, die zu vier Gliedern zusammengefaßt sind*):

- **Group A:** L_I + L_II — a cemented diverging meniscus doublet, convex toward the subject
- **Group B:** L_III — a positive meniscus, concave toward the subject
- **Group C:** L_IV — a biconvex positive singlet
- **Group D:** L_V — a thin negative meniscus, concave toward the subject

A large air gap (d₃ ≈ 0.542f) separates the front doublet from the remaining elements, giving the front cell a distinctive two-cluster layout visible in the patent drawing: a large front meniscus doublet standing well ahead of a compact three-element cluster (L_III–L_IV–L_V) positioned just before the diaphragm.

### 2.2 Body-Mounted Rear Section

The rear section is the standard Tessar rear half:

- **L_VII:** A biconcave flint singlet (the "middle lens" of the Tessar structure)
- **L_VIII + L_IX:** A cemented doublet — negative meniscus L_VIII bonded to biconvex positive L_IX — forming the Tessar's characteristic rear achromatic group

## 3. Aspherical Surfaces

**There are no aspherical surfaces in this design.** All fourteen refracting surfaces are spherical. This is entirely expected for a 1955 design era; aspherical surfaces in mass-produced photographic objectives were essentially nonexistent until the 1970s. The aberration correction relies entirely on glass selection, surface curvature balancing, and the power distribution across the eight elements.

## 4. Optical Prescription

The patent provides all data normalized to a focal length of f = 1. Paraxial ABCD-matrix ray trace confirms the system EFL = **1.0000** in these normalized units. To obtain production dimensions for a 35 mm lens, a uniform scale factor of **×35.0** is applied to all R, d, and sd values. The patent states an aperture ratio of 1:3.2 and a "Bildwinkel" (field angle) of 32°, which in German optical convention of this era denotes the half-field angle ω measured from the optical axis to the image diagonal — corresponding to a total field of approximately 64° and full coverage of the 24×36 mm format.

### 4.1 Surface Data (Normalized, f = 1)

| Surface | Radius | Thickness | nd | νd | Element |
|---------|--------|-----------|------|------|---------|
| r₁ | +1.01065 | 0.13640 | 1.74000 | 28.2 | L_I front |
| r₂ | +3.19587 | 0.03546 | 1.74400 | 44.9 | L_I / L_II cemented junction |
| r₃ | +0.438637 | 0.541955 | 1.0 | — | L_II rear → air |
| r₄ | −10.2530 | 0.27280 | 1.50378 | 66.7 | L_III front |
| r₅ | −0.802773 | 0.06820 | 1.0 | — | L_III rear → air |
| r₆ | +0.556187 | 0.26325 | 1.50378 | 66.7 | L_IV front |
| r₇ | −0.695180 | 0.01855 | 1.0 | — | L_IV rear → air |
| r₈ | −0.675456 | 0.02728 | 1.74400 | 44.9 | L_V front |
| r₉ | −1.28151 | 0.05456 | 1.0 | — | L_V rear → air (stop in gap) |
| r₁₂ | −1.15040 | 0.03683 | 1.62536 | 35.6 | L_VII front |
| r₁₃ | +0.464608 | 0.11130 | 1.0 | — | L_VII rear → air |
| r₁₄ | −13.0947 | 0.03274 | 1.54869 | 45.4 | L_VIII front |
| r₁₅ | +0.576566 | 0.12276 | 1.72000 | 50.3 | L_VIII / L_IX cemented junction |
| r₁₆ | −0.779994 | s′ = 1.16 | 1.0 | — | L_IX rear → image |

The surface numbering skips r₁₀, r₁₁ and d₁₀, d₁₁ because those surfaces belong to L_VI (the single front element of the basic Tessar), which is removed and replaced by the Pro-Tessar front cell in the combined system.

### 4.2 Transcription Verification

The patent independently lists the surface refractive powers (Δn/r) for all fourteen surfaces on page 3 (Claim 5 table). All fourteen values were verified to match the powers computed from the transcribed radii and indices to six or more significant figures, confirming transcription fidelity.

### 4.3 Production Dimensions (Scaled ×35.0)

At production scale for a 35 mm focal length:

| Parameter | Normalized | Production |
|-----------|------------|------------|
| EFL | 1.000 | 35.0 mm |
| BFL (computed) | 1.162 | 40.7 mm |
| BFD (patent s′) | 1.160 | 40.6 mm |
| f-number | 3.2 | 3.2 |
| Front group track (r₁ to r₉) | 1.364 | 47.7 mm |
| Gap to body optics (d₉) | 0.055 | 1.9 mm |
| Rear section track (r₁₂ to r₁₆) | 0.304 | 10.6 mm |
| Total optical track | 1.722 | 60.3 mm |
| Total track to image | 2.882 | 100.9 mm |
| Entrance pupil diameter | 0.3125 | 10.9 mm |
| Half-field angle (ω) | — | 32° |
| Image half-diagonal (at ω = 32°) | — | 21.9 mm |

The computed paraxial BFL (1.162) agrees with the patent-stated s′ (1.16) to within 0.2%, confirming that the prescription is fully self-consistent. The negligible difference is attributable to rounding in the patent's stated s′ value.

## 5. Element-by-Element Analysis

### 5.1 L_I — Dense Flint Meniscus (Front of Cemented Doublet)

| Property | Value |
|----------|-------|
| Shape | Positive meniscus, convex to subject |
| Surfaces | r₁ = +1.01065, r₂ = +3.19587 |
| Thickness | 0.13640 (4.77 mm production) |
| Glass | nd = 1.74000, νd = 28.2 |
| Identification | **Schott SF3** (nd = 1.74000, νd = 28.30) — exact nd match |

L_I is the first element of the cemented front doublet. It is a positive meniscus of dense flint glass (high index, high dispersion) with both surfaces convex toward the subject. The front radius (+1.01065f ≈ +35.4 mm) is relatively steep, making this the largest-diameter element and the most prominent physical feature of the Pro-Tessar. The rear radius (+3.19587f ≈ +111.9 mm) is much flatter, forming the cemented junction with L_II.

As a high-dispersion flint element in the cemented front doublet, L_I's primary role is **chromatic balancing** within the achromatic pair. Its strong positive power combined with high dispersion (νd = 28.2) produces substantial longitudinal chromatic aberration; L_II then compensates with opposite-sign chromatism from its negative power at moderate dispersion (νd = 44.9). The dispersion difference across the cemented junction allows the doublet to be achromatized while maintaining a specific net negative power. Because the front doublet is overall diverging, L_I also contributes to the quasi-retrofocus behavior that ensures a long back focal distance.

### 5.2 L_II — Lanthanum Flint Negative Element (Rear of Cemented Doublet)

| Property | Value |
|----------|-------|
| Shape | Negative meniscus, convex to subject |
| Surfaces | r₂ = +3.19587 (cemented), r₃ = +0.438637 |
| Thickness | 0.03546 (1.24 mm production) |
| Glass | nd = 1.74400, νd = 44.9 |
| Identification | **Schott LaF2** (nd = 1.74400, νd = 44.72) — exact nd match, or **LaF21** (nd = 1.74397, νd = 44.85) |

L_II is a thin negative meniscus cemented to L_I. Both its surfaces have positive radii (convex to object), but the rear surface r₃ = +0.438637 is steeply curved compared to the cemented junction r₂ = +3.19587, giving L_II very strong negative refractive power at its rear surface (φ₃ = −1.696 in normalized units — the single strongest refracting surface in the entire system).

The use of a lanthanum flint glass is noteworthy. Lanthanum glasses, introduced by Schott in the 1930s–1940s, provide high refractive index with moderate dispersion — a combination impossible with classical flints. L_II's νd = 44.9 is substantially less dispersive than L_I's νd = 28.2, giving the cemented interface strong chromatic leverage despite the very small index difference across the junction (Δnd = 0.004).

The cemented doublet L_I + L_II has a combined thick-lens focal length of approximately **−41.7 mm** at production scale. It functions as a diverging front group that spreads the incoming light cone before it reaches the positive rear cluster, allowing the system to maintain a long back focal distance relative to its 35 mm EFL. This is the key structural feature that makes the Pro-Tessar wide-angle concept work.

### 5.3 L_III — Phosphate Crown Positive Meniscus

| Property | Value |
|----------|-------|
| Shape | Positive meniscus, concave to subject |
| Surfaces | r₄ = −10.2530, r₅ = −0.802773 |
| Thickness | 0.27280 (9.55 mm production) |
| Glass | nd = 1.50378, νd = 66.7 |
| Identification | **Schott PK1** (nd = 1.50340, νd = 66.81) — near-exact match |
| Focal length | +59.9 mm (production) |

L_III is a thick positive meniscus with both surfaces concave toward the subject (negative R values). The front surface r₄ = −10.253 is very weakly curved (nearly flat), while the rear surface r₅ = −0.803 has moderate curvature. This gives L_III positive power: the rear surface, where light exits from glass (n = 1.504) to air (n = 1.0), has strong positive refracting power (φ₅ = +0.628).

The glass is a phosphate crown — a low-index, low-dispersion material. The six-digit glass code 503.667 matches Schott PK1 closely. Phosphate crowns were prized for their very low dispersion combined with partial dispersion characteristics helpful for secondary spectrum correction.

L_III's role is to provide **moderate positive power with minimal chromatic contribution**, beginning to converge the divergent beam from the front doublet. Its thick center section (9.5 mm) and meniscus shape also contribute to control of spherical aberration and coma.

### 5.4 L_IV — Phosphate Crown Biconvex Positive

| Property | Value |
|----------|-------|
| Shape | Biconvex |
| Surfaces | r₆ = +0.556187, r₇ = −0.695180 |
| Thickness | 0.26325 (9.21 mm production) |
| Glass | nd = 1.50378, νd = 66.7 |
| Identification | **Schott PK1** (same glass as L_III) |
| Focal length | +23.1 mm (production) |

L_IV is the strongest positive element in the system, with a focal length of only +23.1 mm — approximately 0.66× the system EFL. Its biconvex shape distributes power across both surfaces (φ₆ = +0.906, φ₇ = +0.725), giving it a roughly symmetrical bending. L_IV is made from the same low-dispersion phosphate crown as L_III.

As the dominant positive power element, L_IV is the primary **converging element** of the front cell. Positioned immediately before the thin negative L_V, it forms a quasi-doublet pair (the air gap d₇ between them is only 0.649 mm at production scale). This L_IV–L_V pair corrects chromatic aberration within the positive cluster: L_IV contributes strong positive power with low dispersion, while L_V provides compensating negative chromatism from its high-dispersion lanthanum flint glass.

### 5.5 L_V — Lanthanum Flint Negative Meniscus

| Property | Value |
|----------|-------|
| Shape | Negative meniscus, concave to subject |
| Surfaces | r₈ = −0.675456, r₉ = −1.28151 |
| Thickness | 0.02728 (0.955 mm production) |
| Glass | nd = 1.74400, νd = 44.9 |
| Identification | **Schott LaF2 / LaF21** (same glass as L_II) |
| Focal length | −68.5 mm (production) |

L_V is a thin negative meniscus immediately following L_IV, with both surfaces concave to the subject. At only 0.955 mm center thickness, it is the thinnest element in the system. Its glass is identical to L_II — lanthanum flint, providing high index and moderate dispersion.

L_V's primary function is **chromatic correction of the positive cluster L_III–L_IV**. Its moderate negative power (f = −68.5 mm) partially offsets the positive power of L_IV without significantly reducing the cluster's net positive convergence. The lanthanum flint's moderate dispersion (νd = 44.9) provides just enough negative chromatism to achromatize the low-dispersion phosphate crown elements ahead of it.

L_V also contributes to **field curvature control**. Its Petzval contribution is negative (−0.299 in normalized units), helping to flatten the field against the strong positive Petzval contributions of L_III (+0.385) and L_IV (+1.084).

### 5.6 L_VII — Flint Biconcave Negative (Body-Mounted)

| Property | Value |
|----------|-------|
| Shape | Biconcave |
| Surfaces | r₁₂ = −1.15040, r₁₃ = +0.464608 |
| Thickness | 0.03683 (1.29 mm production) |
| Glass | nd = 1.62536, νd = 35.6 |
| Identification | **Schott F7** (nd = 1.62588, νd = 35.70) or **F13** (nd = 1.62588, νd = 35.58) — near-exact |
| Focal length | −18.4 mm (production) |

L_VII is the strongest negative element in the entire system, with a focal length of only −18.4 mm. It is the biconcave "middle lens" of the original Tessar architecture — the element that in Paul Rudolph's 1902 design provided the critical negative power and field-flattening function between the front positive element and the rear cemented group.

In the Tessar layout, L_VII is the primary **Petzval correction element**. Its Petzval contribution (−1.163 normalized) is by far the largest of any element group and substantially overcorrects the Petzval sum, which the positive rear doublet then partially compensates. L_VII's flint glass also provides **chromatic leverage** — its high dispersion (νd = 35.6) combined with strong negative power makes it the dominant source of negative chromatism in the rear section.

The strongly curved rear surface r₁₃ = +0.465 (16.3 mm production radius) makes this element the most optically "intense" component of the body-mounted section, with the highest surface powers.

### 5.7 L_VIII — Light Flint Negative Biconcave (Front of Rear Cemented Doublet)

| Property | Value |
|----------|-------|
| Shape | Biconcave (weakly, nearly plano-concave) |
| Surfaces | r₁₄ = −13.0947, r₁₅ = +0.576566 |
| Thickness | 0.03274 (1.15 mm production) |
| Glass | nd = 1.54869, νd = 45.4 |
| Identification | **Schott LLF7** (nd = 1.54850, νd = 45.52) — near-exact match (Δnd = 0.00019, Δνd = 0.12) |
| Cemented to | L_IX at surface r₁₅ |

L_VIII is a thin negative element forming the front half of the Tessar's rear cemented doublet. Its front surface r₁₄ = −13.095 is nearly flat (production radius −458 mm), making the element effectively plano-concave. The steeply curved rear surface r₁₅ = +0.577 (20.2 mm production) is the cemented junction with L_IX.

The glass is identified as a light-light flint (LLF type) — a relatively unusual glass category with moderate index and moderate dispersion, sitting between crown and flint territory on the glass map. In the cemented doublet with L_IX, L_VIII's role is to provide **achromatic correction** at the junction surface. The index step from L_VIII (nd = 1.549) to L_IX (nd = 1.720) at the curved junction r₁₅ creates positive refracting power that helps the doublet converge the beam while the dispersion difference (νd = 45.4 vs. 50.3) provides the needed chromatic balancing.

### 5.8 L_IX — Lanthanum Crown Biconvex Positive (Rear of Rear Cemented Doublet)

| Property | Value |
|----------|-------|
| Shape | Biconvex |
| Surfaces | r₁₅ = +0.576566 (cemented), r₁₆ = −0.779994 |
| Thickness | 0.12276 (4.30 mm production) |
| Glass | nd = 1.72000, νd = 50.3 |
| Identification | **Schott LaK10** (nd = 1.72000, νd = 50.34) — exact match |
| Cemented to | L_VIII at surface r₁₅ |

L_IX is the final optical element, a relatively thick biconvex positive element of lanthanum crown glass. LaK10 provides high refractive index (1.720) with moderate dispersion (νd = 50.3) — a characteristically "lanthanum" combination that allows strong positive power without excessive chromatic aberration.

The cemented doublet L_VIII + L_IX together has a focal length of approximately **+30.1 mm** at production scale. As the rear positive group of the Tessar architecture, it provides the system's final converging power, directing the beam toward the image plane. The doublet also provides **chromatic correction for the rear section** and, through its positive Petzval contribution (+0.621 normalized), partially compensates the strong overcorrection from L_VII.

## 6. Glass Summary

| Element | nd | νd | Six-Digit Code | Identification | Confidence |
|---------|------|------|----------------|----------------|------------|
| L_I | 1.74000 | 28.2 | 740.282 | Schott SF3 (dense flint) | Exact nd |
| L_II | 1.74400 | 44.9 | 744.449 | Schott LaF2 (lanthanum flint) | Exact nd |
| L_III | 1.50378 | 66.7 | 503.667 | Schott PK1 (phosphate crown) | Near-exact |
| L_IV | 1.50378 | 66.7 | 503.667 | Schott PK1 (phosphate crown) | Near-exact |
| L_V | 1.74400 | 44.9 | 744.449 | Schott LaF2 (lanthanum flint) | Exact nd |
| L_VII | 1.62536 | 35.6 | 625.356 | Schott F7 or F13 (flint) | Near-exact |
| L_VIII | 1.54869 | 45.4 | 548.454 | Schott LLF7 (light-light flint) | Near-exact |
| L_IX | 1.72000 | 50.3 | 720.503 | Schott LaK10 (lanthanum crown) | Exact |

The glass palette is notable for its heavy use of lanthanum glass types — three of the eight elements use lanthanum glasses (LaF2 for L_II and L_V, LaK10 for L_IX). By 1955, lanthanum glasses were still relatively modern materials; their presence here reflects Zeiss's access to Schott's advanced glass catalog and Dr. Lange's willingness to exploit these newer high-index types for aberration control.

Six distinct glass types are used across eight glass elements: SF3, LaF2, PK1, F7, LLF7, and LaK10. However, only four melt batches are needed, since two types are each shared by two elements — PK1 for both L_III and L_IV, and LaF2 for both L_II and L_V. This glass commonality simplifies manufacturing and procurement.

## 7. Focusing Mechanism

The Contaflex cameras from the III onward employ **unit focusing**: the entire lens assembly — including both the interchangeable front cell and the body-mounted rear section — moves axially as a unit via the camera body's helical mechanism. Neither the front cell nor the rear section moves independently during focus; the only distance that changes is the back focal distance from the last surface (r₁₆) to the film plane.

This means:

- All internal air gaps (d₁ through d₁₃) remain constant during focusing.
- The variable dimension is the **BFD** (back focal distance from r₁₆ to the image plane).
- At infinity focus, the BFD equals the patent's stated s′ = 1.16 (≈ 40.6 mm at production scale).
- As the lens focuses closer, the entire assembly moves forward, increasing the BFD.

Unit focusing preserves the optical correction achieved at the design conjugate (infinity) better than front-cell focusing, since no internal element spacings change. The tradeoff is that the entire heavy lens-plus-shutter assembly must move, requiring a more robust helical mechanism.

## 8. Paraxial Properties

All values computed via ABCD matrix thick-lens paraxial ray trace from the patent prescription.

### 8.1 System-Level Properties

| Property | Normalized (f = 1) | Production (35 mm) |
|----------|--------------------|--------------------|
| Effective focal length | 1.000 | 35.0 mm |
| Back focal length (computed) | 1.162 | 40.7 mm |
| Back focal distance (patent s′) | 1.160 | 40.6 mm |
| f-number | 3.2 | 3.2 |
| Half-field angle (ω) | 32° | 32° |
| Entrance pupil diameter | 0.3125 | 10.9 mm |
| Image half-diagonal (at ω = 32°) | — | 21.9 mm |

The computed paraxial BFL (1.162) agrees closely with the patent-stated s′ (1.160), confirming that the prescription is self-consistent. The minor difference (0.17%) is attributable to rounding in the patent's printed s′ value.

### 8.2 Subsystem Focal Lengths

| Subsystem | EFL (normalized) | EFL (production) |
|-----------|------------------|-------------------|
| L_I + L_II (front cemented doublet) | −1.190 | −41.7 mm |
| L_III (positive meniscus) | +1.712 | +59.9 mm |
| L_IV (biconvex positive) | +0.660 | +23.1 mm |
| L_V (negative meniscus) | −1.957 | −68.5 mm |
| Front cell, all 5 elements (L_I–L_V) | +0.576 | +20.1 mm |
| L_VII (biconcave negative) | −0.525 | −18.4 mm |
| L_VIII + L_IX (rear cemented doublet) | +0.860 | +30.1 mm |
| Rear section (L_VII + L_VIII-L_IX) | −3.240 | −113.4 mm |

The front cell (L_I–L_V) has strong net positive power (f ≈ +20.1 mm), while the body-mounted rear section (L_VII–L_IX) is weakly negative (f ≈ −113.4 mm). This positive-front / negative-rear power distribution, combined with the physical separation between the groups, yields a system EFL (35 mm) that is substantially longer than the front cell's focal length — the hallmark of a telephoto-like power arrangement operating in reverse. The long BFD (≈ 40.6 mm, exceeding the 35 mm EFL, giving a retrofit ratio of 1.16) provides the mirror clearance required for SLR operation.

### 8.3 Petzval Sum

| Group | Petzval Contribution |
|-------|---------------------|
| L_I + L_II | −0.551 |
| L_III | +0.385 |
| L_IV | +1.084 |
| L_V | −0.299 |
| L_VII | −1.163 |
| L_VIII + L_IX | +0.621 |
| **Total** | **+0.077** |

The Petzval sum is small and positive, corresponding to a Petzval radius of approximately −452 mm at production scale. This indicates a mildly inward-curving Petzval surface — a favorable result for a wide-angle lens, as the natural field curvature is gentle and can be further corrected through balancing astigmatism.

The dominant negative Petzval contributor is L_VII (−1.163), the biconcave body-mounted flint element. This single element provides more negative Petzval curvature than all other negative elements combined, and is the primary field-flattening mechanism — a role inherited directly from the classical Tessar architecture.

### 8.4 Comparison with Grundobjektiv

The patent provides the basic Tessar objective ("Grundobjektiv") in Table 2 for comparison. Both systems are designed to share the same back focal distance (camera register), but the Pro-Tessar combination achieves a shorter focal length.

| Property | Grundobjektiv (Table 2) | Pro-Tessar + Rear (Table 1) |
|----------|------------------------|-----------------------------|
| EFL (normalized) | ~1.41 | 1.000 |
| Elements | 4 (in 3 groups) | 8 (in 6 groups) |
| EFL ratio | 1.00× | ~0.71× |

The patent notes that the two focal lengths stand in a ratio of approximately 1 : √2 (0.707), consistent with the computed ratio. At production scale, this means the basic Tessar is approximately a 49 mm lens and the Pro-Tessar combination is a 35 mm lens — a full focal-length step wider.

## 9. Design Philosophy and Patent Claims

The patent's claims define the interchangeable front cell (L_I through L_V) through a series of parametric constraints, all expressed as ratios relative to the *combined system's* focal length f. The key structural constraints from Claim 1 are:

- **Front doublet (L_I + L_II):** Must be a cemented diverging meniscus, convex toward the subject, containing a positive element ("Sammellinse") of high-dispersion glass (ν < 50). First-group center thickness: 0.06f to 0.30f. Front outer radius: 0.50f to 2.00f. Rear outer radius: 0.20f to 0.80f. *(Example 1: d₁+d₂ = 0.172f, r₁ = +1.011f, r₃ = +0.439f — all within range.)*
- **Asymmetric collecting element (L_III):** Must stand 0.20f to 0.70f behind the front doublet, with its more strongly curved surface facing away from the subject. That surface's radius: −1.20f to −0.60f, and must be less than one-third the absolute value of the other surface's radius. Thickness: 0.12f to 0.48f. *(Example 1: d₃ = 0.542f, r₅ = −0.803f, |r₅|/|r₄| = 0.078 < 0.333, d₄ = 0.273f.)*
- **Collecting surface behind L_III:** The front cell must include a collecting surface convex toward the subject with R in [0.35f, 0.80f] — this is r₆ = +0.556f (L_IV's front surface). Its vertex distance from the last surface of the front cell (r₉) must be between 0.15f and 0.50f. *(Example 1: distance = 0.364f.)*
- **Last surface of the front cell (r₉):** Must be a collecting surface with R between −2.0f and −1.0f. Between this surface and the collecting surface r₆, at least one dispersing surface must exist. *(Example 1: r₉ = −1.282f; r₈ is dispersing with φ = −1.101.)*
- **Last element (L_V):** Must be a meniscus-shaped dispersing lens of glass with ν < 50, with front radius between −1.0f and −0.5f, and vertex separation from the penultimate lens less than 0.10f. *(Example 1: r₈ = −0.675f, d₇ = 0.019f.)*

**Claim 2** adds that the air gap between the front cell and the body-mounted middle lens (L_VII) must be less than 0.20f (Example 1: d₉ = 0.055f) and the overall build length of the front cell must lie between 0.80f and 1.65f (Example 1: 1.364f).

**Claim 4** requires that the mean refractive index of all dispersing (negative-power) elements exceeds the mean of all collecting (positive-power) elements. In Example 1: mean nd of negative elements (L_II, L_V) = 1.744, versus mean nd of positive elements (L_I, L_III, L_IV) = 1.583 — satisfied with substantial margin. This constraint ensures that the high-index glasses are concentrated in the negative elements, which is the key to maintaining Petzval correction: negative power in high-index glass produces more Petzval flattening per unit of power than would be achieved with lower-index materials.

**Claim 5** ties the specific numerical example to Claims 1–4, allowing tolerances of ±0.5/f on surface refractive powers (Δn/r) and ±0.2f on vertex distances.

## 10. Summary of Key Design Features

The Pro-Tessar 35mm f/3.2 represents an elegant mid-century solution to the problem of providing interchangeable focal lengths within the constraints of a leaf-shutter SLR. Its most notable design features are:

1. **All-spherical construction** — no aspherical surfaces; all correction is achieved through glass selection and surface balancing across eight elements.

2. **Lanthanum glass exploitation** — three elements use lanthanum-based glasses (LaF2, LaK10), leveraging their high-index/moderate-dispersion properties for chromatic control and compactness.

3. **Divergent front doublet architecture** — the negative power cemented doublet (L_I + L_II) spreads the beam before the positive cluster, providing the long back focal distance needed for SLR mirror clearance while achieving a 35 mm system focal length.

4. **Shared rear section** — the body-mounted L_VII–L_IX group is identical to the standard Tessar's rear half, enabling the interchangeable front-cell concept with no modification to the camera body optics.

5. **Unit focusing** — all elements move together during focus, preserving the design correction across the focus range. The only variable dimension is the BFD.

6. **Well-controlled Petzval sum** — the overall Petzval sum is small (+0.077 normalized), corresponding to a Petzval radius of approximately −452 mm at production scale, enabling flat field performance across the 64° total field despite the asymmetric power distribution.
