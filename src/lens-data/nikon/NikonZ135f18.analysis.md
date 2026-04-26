# Optical Design Analysis: NIKKOR Z 135mm f/1.8 S Plena

**Patent:** WO 2024/147268 A1 (PCT/JP2023/044790)
**Priority:** JP 2023-000837, January 6, 2023
**Published:** July 11, 2024
**Applicant:** Nikon Corporation
**Inventor:** Mami Muratani (村谷 真美)
**Co-inventors:** Hiroshi Yamamoto, Tomonori Kuribayashi, Takuro Ono

**Numerical example analyzed:** Example 1 (Table 1, Fig. 1)

---

## 1. Patent Overview and Production Identification

Patent WO 2024/147268 A1 discloses an optical system comprising a front group with positive refractive power, an aperture stop, and a rear group, satisfying three core conditional expressions that govern the balance between front and rear group power, rear-group compactness, and telephoto ratio. The patent contains ten numerical examples spanning a range of design variants. Prior art cited by the examiner includes Canon JP 2017-215493 A, Sigma JP 2020-030383 A, and Nikon's own WO 2022/009588 A1.

The first numerical example (Example 1) is the design most closely corresponding to the production NIKKOR Z 135mm f/1.8 S Plena, based on convergent evidence: f = 132.30 mm at F/1.85 for a 43.4 mm image circle (full-frame 35mm), with 16 elements in 5 lens groups (marketed as 14 groups by counting individual elements and cemented pairs independently), and a total track length of 147.45 mm. The production lens measures 98 × 139.5 mm and weighs 995 g. A filter (FL) and 16 mm flange-to-sensor distance are included in the total track, consistent with Nikon Z-mount geometry.

The production specification lists 16 elements in 14 groups with 4 ED elements, 1 aspherical element, and 1 SR (Short-wavelength Refractive) element, equipped with both ARNEO Coat and Meso Amorphous Coat. The patent Example 1 matches all of these counts exactly: one aspherical surface (surface 11, L6 front), one SR glass (L1), and four ED fluorophosphate elements — three in the front group (L2, L3, L4 at νd = 82.57) and one in the rear group (L10 at νd = 67.90).

The patent prescription is at f = 132.30 mm, which is within the normal range of production tolerance for a lens marketed as 135mm. No scaling factor has been applied.

---

## 2. System Overview

### 2.1 Global Parameters

| Parameter | Value | Description |
|-----------|-------|-------------|
| f | 132.30 mm | System focal length |
| ff | 113.43 mm | Front group focal length |
| fr | −227.10 mm | Rear group focal length |
| TL | 147.45 mm | Total track (first surface to image) |
| Bf | 13.89 mm | Back focus (air-equivalent) |
| FNO | 1.85 | F-number |
| Y | 21.70 mm | Maximum image height |
| 2ω | 18.6° | Full field angle (paraxial) |

The system EFL was independently verified at 132.30 mm via paraxial system-matrix ray trace. The paraxial full-field angle of 18.6° (computed as 2 × arctan(Y/f)) is slightly larger than the production specification of 18°10′ (18.17°); the 0.46° difference is consistent with the mild pincushion distortion typical of telephoto designs, where the real chief ray angle at full field is slightly smaller than the paraxial prediction.

### 2.2 Group Structure

The design comprises five lens groups in the patent's notation. Nikon markets the lens as "14 groups" because each standalone element or cemented pair is counted as a separate group. The relationship is: 12 standalone elements + 2 cemented doublets = 14 groups.

| Group | Power | Elements | Surfaces | Patent EFL | Verified EFL | Role |
|-------|-------|----------|----------|-----------|-------------|------|
| G1 | Positive | L1–L6 | 1–12 | +89.30 mm | +89.30 mm | Front group (GF includes L1–L5 only) |
| G2 | Negative | L7 | 13–14 | −69.14 mm | −69.14 mm | Focus group 1 (Gfo) |
| G3 | Positive | L8–L12 | 15–23 | +116.43 mm | +116.43 mm | Fixed rear group |
| G4 | Positive | L13 | 24–25 | +126.75 mm | +126.75 mm | Focus group 2 |
| G5 | Negative | L14–L16 | 26–31 | −71.11 mm | −71.11 mm | Rear-most group (Gi) |

All five group focal lengths were verified independently via system-matrix ray trace and match the patent values to within rounding.

### 2.3 Front Group / Rear Group Partition

The patent defines the front group (GF) and rear group (GR) boundary differently from the five lens groups. Per paragraph [0108]:

- **Front group (GF):** L1 through L5 (within G1, up to and including the cemented doublet)
- **Rear group (GR):** L6, G2 (L7), G3 (L8–L12), G4 (L13), G5 (L14–L16)

This asymmetric partition places the aperture stop and L6 within the rear group. The front group thus consists of a powerful positive subassembly (ff = +113.43 mm) that generates the telephoto effect, while the rear group is weakly negative overall (fr = −227.10 mm), handling aberration correction and providing a divergent exit cone that enlarges the image circle.

---

## 3. Conditional Expression Verification

The patent's three core conditional expressions were verified against Example 1's stated parameters:

| Condition | Expression | Computed | Patent | Range |
|-----------|-----------|----------|--------|-------|
| (1) | ff / \|fr\| | 0.499 | 0.499 | 0.10 – 1.50 |
| (2) | tr / TL | 0.283 | 0.283 | 0.13 – 0.45 |
| (3) | f / TL | 0.897 | 0.897 | 0.50 – 1.20 |

Condition (1) governs the power balance between the front and rear groups, controlling the trade-off between system compactness and the level of spherical aberration, coma, field curvature, and distortion. A ratio of 0.499 means the front group has roughly half the focal length of the rear group in absolute terms — a design point near the lower end of the allowed range, indicating relatively strong front-group power and a relatively weak (long-focal-length) rear group. This is consistent with a telephoto ratio (f/TL) of 0.897, meaning the total track is only about 10% longer than the focal length — a compact design for this aperture class.

Condition (2) constrains the sum of center thicknesses of all rear-group elements relative to the total track. At 0.283, this places roughly 28% of the optical path through glass in the rear group, a moderate value that balances weight and aberration correction.

Condition (3) is the telephoto ratio. At 0.897, the design is slightly less telephoto than some competitors (which might reach 0.80–0.85 at this focal length), but the sacrifice in compactness buys the dramatically oversized image circle that gives the Plena its signature characteristic: near-zero vignetting and consistently circular bokeh to the frame edges.

---

## 4. Element-by-Element Analysis

### 4.1 Element Summary Table

| Element | Surface(s) | nd | νd | fl (mm) | Type | Glass / Category | Group |
|---------|-----------|------|-------|---------|------|-----------------|-------|
| L1 | 1–2 | 1.66382 | 27.35 | +189.8 | Pos. meniscus (convex to obj.) | **SR glass** | G1/GF |
| L2 | 3–4 | 1.49782 | 82.57 | +225.2 | Pos. meniscus (convex to obj.) | **ED fluorophosphate** | G1/GF |
| L3 | 5–6 | 1.49782 | 82.57 | +298.6 | Pos. meniscus (convex to obj.) | **ED fluorophosphate** | G1/GF |
| L4 | 7–(8) | 1.49782 | 82.57 | +103.1 | Biconvex positive | **ED fluorophosphate** | G1/GF |
| L5 | (8)–9 | 1.85451 | 25.15 | −55.0 | Biconcave negative | Anomalous high-index flint (Nf) | G1/GF |
| L6 | *11–12 | 1.51680 | 64.14 | +234.1 | Pos. meniscus (1× asph., convex to obj.) | BK7-type borosilicate crown | G1/GR |
| L7 | 13–14 | 1.69680 | 55.52 | −68.8 | Neg. meniscus (convex to obj.) | Barium crown/flint | G2/GR |
| L8 | 15–16 | 1.80809 | 22.74 | +172.4 | Pos. meniscus (concave to obj.) | S-NPH1-type phosphate flint (anomalous ΔPgF ≈ +0.029) | G3/GR |
| L9 | 17–(18) | 1.85451 | 25.15 | −62.7 | Biconcave negative | Anomalous high-index flint | G3/GR |
| L10 | (18)–19 | 1.59319 | 67.90 | +276.3 | Pos. meniscus (convex to obj.) | **ED fluorophosphate crown** (near S-FPM2) | G3/GR |
| L11 | 20–21 | 1.80440 | 39.61 | +48.9 | **Biconvex positive (Pr)** | LaF / dense flint | G3/GR |
| L12 | 22–23 | 1.83481 | 42.73 | −173.1 | Neg. meniscus (convex to obj.) | Dense lanthanum flint | G3/GR |
| L13 | 24–25 | 1.85883 | 30.00 | +127.6 | Pos. meniscus (convex to obj.) | Dense lanthanum short flint (non-catalog) | G4/GR |
| L14 | 26–27 | 1.78590 | 44.17 | −71.1 | Biconcave negative | Lanthanum flint | G5/GR |
| L15 | 28–29 | 1.84666 | 23.78 | +88.8 | Pos. meniscus (convex to obj.) | Dense short flint | G5/GR |
| L16 | 30–31 | 1.81600 | 46.59 | −89.0 | Neg. meniscus (concave to obj.) | Lanthanum flint | G5/GR |
| FL | 32–33 | 1.51680 | 64.14 | — | Flat filter | BK7 (IR-cut / cover glass) | — |

*Cemented doublets:* L4+L5 (surfaces 7–9, net fl ≈ −138 mm), L9+L10 (surfaces 17–19, net fl ≈ −80 mm). Both are net-negative per patent designation (接合負レンズ).
*Aspherical surface:* Surface 11 (L6 front) only.

### 4.2 Glass Identification and Special Elements

#### L1 — SR (Short-wavelength Refractive) Element

The front element L1 is identified as the SR element based on three converging lines of evidence. First, Nikon's product marketing explicitly states the lens contains "a short-wavelength refractive front element." Second, the patent's conditional expressions (12)–(14) define "positive lens Pf" in the front group with nd > 1.60 and νd < 31.00, and the Example 1 values table gives ndPf = 1.664, νdPf = 27.350 — matching L1 exactly. Third, the anomalous partial dispersion condition yields:

> θgF(Pf) − (0.6415 − 0.00162 × νdPf) = 0.035

Computing the normal-line value: 0.6415 − 0.00162 × 27.35 = 0.5972. Therefore θgF(L1) = 0.6322, a departure of ΔPgF = +0.035 above the normal line.

This is an exceptionally large positive anomalous dispersion for a glass in this region of the Abbe diagram (nd ≈ 1.664, νd ≈ 27.35). Standard dense flint glasses at this position — such as OHARA S-TIH6 (nd = 1.66382, νd = 27.35) — have typical θgF values around 0.608–0.610, yielding ΔPgF of only +0.011 to +0.013. The measured ΔPgF of +0.035 is approximately three times larger, strongly suggesting this is a Nikon-proprietary glass formulation or a special-order melt. Nikon describes SR glass as having "characteristics to greatly refract light with wavelengths shorter than that of blue," which aligns with the elevated partial dispersion at short wavelengths indicated by this high θgF value.

The optical role of L1 as the SR element is to pre-correct secondary spectrum at the point of maximum beam diameter. By placing a high-anomalous-dispersion positive element at the front of the system where the marginal ray height is greatest, L1 provides the maximum leverage for controlling the short-wavelength chromatic contribution without requiring as much compensating power downstream.

#### L2, L3, L4 — ED Fluorophosphate Elements

These three elements share identical glass properties: nd = 1.49782, νd = 82.57. This is a fluorophosphate crown glass with very low dispersion (high Abbe number) and correspondingly strong positive anomalous partial dispersion — the hallmarks of Nikon's ED glass designation. The nd/νd pair is close to, though not an exact catalog match for, any single published glass code (the nearest standard catalog entry being OHARA S-FPL51 at nd = 1.49700, νd = 81.54). The slight discrepancy suggests either a Nikon-specified variant, a Hikari or CDGM catalog glass, or fine-annealing to a specific index target.

All three elements are positive meniscuses convex to the object side, forming a cascading sequence of weakly convergent elements that progressively bends the marginal ray toward the axis. This distributed-power approach reduces the contribution of each surface to spherical aberration and coma compared to a single high-power positive element. The identical glass across all three means they contribute equally to primary chromatic correction and work as a unified chromatic correction system with L1 (SR) and L5 (Nf).

L4 is the strongest of the three (fl = +103.1 mm vs. +225.2 and +298.6 for L2 and L3) and is cemented to L5 to form what the patent designates a 接合負レンズ — a cemented *negative* lens. Despite L4's strong positive power, L5's even stronger negative power (fl = −55.0 mm) dominates the combination, giving the cemented pair a net thick-lens focal length of approximately −138 mm. This net-negative doublet is a deliberate design choice: it provides the chromatic correction of a classical achromatic doublet while contributing negative Petzval sum to flatten the field — a critical requirement at f/1.85 with a 43 mm image circle.

#### L5 — Anomalous Dispersion Negative Element (Nf)

L5 is the patent's designated "negative lens Nf" in the front group: nd = 1.85451, νd = 25.15, with a positive anomalous partial dispersion of ΔPgF = +0.010 (from conditions (15)–(17)). While smaller than L1's departure, this anomalous dispersion in the negative partner of the L4+L5 cemented doublet is critically important for secondary spectrum correction. In a classical achromatic doublet, the positive and negative elements must have different partial dispersions to reduce secondary spectrum. Here, both L4 (ED fluorophosphate) and L5 (anomalous high-index flint) have positive ΔPgF values — but the fluorophosphate has much larger anomalous dispersion than the flint. The difference between their partial dispersions, combined with their focal lengths and positions, reduces the residual secondary spectrum beyond what a conventional achromat could achieve.

The glass nd = 1.85451 with νd = 25.15 does not correspond exactly to any standard OHARA or Schott catalog glass, suggesting this may be a Hikari, CDGM, or Nikon-specification glass. It appears twice in the prescription (also as L9), indicating it is a production glass with established supply.

#### L6 — Aspherical Element

L6 (nd = 1.51680, νd = 64.14) is unambiguously BK7-type glass (OHARA S-BSL7 or Schott N-BK7). Its front surface (surface 11) is the sole aspherical surface in the system, with conic constant K = 1.0 (hyperboloidal) and polynomial correction terms through A10.

The aspherical departure at the rim is significant. At a semi-diameter of 18 mm, the departure from the base sphere (R = 105.96 mm, K = 0) reaches −175 µm (the aspherical surface is flatter than the spherical reference at the rim). The negative departure flattens the marginal zone of the surface, reducing the high-order spherical aberration contribution. This is consistent with the element's position immediately after the aperture stop, where it intercepts the marginal ray at nearly full aperture height and can most efficiently correct residual spherical aberration and coma left by the front group.

The aspherical coefficients are:

| Coefficient | Value |
|-------------|-------|
| K | 1.0000 |
| A4 | −1.741 × 10⁻⁶ |
| A6 | −1.130 × 10⁻¹⁰ |
| A8 | −2.868 × 10⁻¹⁴ |
| A10 | +9.211 × 10⁻¹⁷ |

The conic height limit for K = 1.0 is |R|/√(1+K) = 74.9 mm, well above any realistic semi-diameter for this element, so the conic discriminant remains positive across the full clear aperture.

The choice of BK7 for the aspherical element is typical of precision-glass-molded (PGM) aspherics, as BK7 has well-characterized molding properties, low cost, and a moderate refractive index that keeps surface curvatures manageable.

#### L7 — Focus Group 1 (G2)

L7 is a single negative meniscus (nd = 1.69680, νd = 55.52) that constitutes the entirety of G2. Its focal length of −68.8 mm makes it a relatively strong negative element. It is one of the two focus groups (the other being G4/L13), and is designated as "Gfo" — the focusing group positioned closest to the object.

During focusing from infinity to close distance, L7 moves from the object side toward the image side (gap D12 increases from 1.749 to 15.346 mm while D14 decreases from 22.105 to 8.507 mm). The net G2 group movement (D12 + D14 change) sums to essentially zero (−0.001 mm), confirming that L7's physical displacement is accommodated entirely by redistributing the air space between L6 and L8.

The glass nd = 1.69680, νd = 55.52 is consistent with OHARA S-BAH27 or similar barium crown glasses. This glass class offers moderate refractive index and good chemical durability — practical considerations for a focus element subject to mechanical motion.

#### L8 — Positive Meniscus (Concave to Object)

L8 (nd = 1.80809, νd = 22.74) is a positive meniscus oriented concave to the object. Its very low Abbe number (22.74) makes it one of the highest-dispersion elements in the system. The nd/νd values match closely with OHARA S-NPH1 (nd = 1.80810, νd = 22.76), a phosphate-based extra-high-dispersion glass.

Although the low Abbe number might suggest L8 is an ordinary high-dispersion flint, the OHARA catalog reveals that S-NPH1 possesses strong positive anomalous partial dispersion: ΔPgF = +0.0261 on OHARA's normal line, or approximately +0.029 relative to the patent's own normal-line formula (0.6415 − 0.00162 × νd). This anomalous dispersion is larger than L5's patent-stated ΔPgF of +0.010 and approaches L1's (SR) value of +0.035. In other words, S-NPH1 bends short-wavelength light disproportionately more than a "normal" glass of the same Abbe number would, providing secondary spectrum correction from the high-dispersion side of the Abbe diagram — complementing the ED fluorophosphates (L2–L4, L10), which provide it from the low-dispersion side.

Note that L8 is *not* one of Nikon's four designated ED elements — those are the fluorophosphate crowns L2, L3, L4, and L10 (see §4.2 L9+L10 below). L8's anomalous dispersion serves a distinct and complementary role: where ED fluorophosphates provide low-dispersion positive power with elevated partial dispersion, L8 provides high-dispersion positive power with anomalous partial dispersion. The two effects operate on different parts of the chromatic correction budget.

L8's position at the entrance of G3 — the large fixed group between the two focus groups — places it where the off-axis beam is spread widely, and its high dispersion combined with anomalous partial dispersion is exploited to balance the chromatic contributions of the ED fluorophosphate elements upstream.

#### L9 + L10 — Cemented Doublet

L9 (nd = 1.85451, νd = 25.15, same glass as L5) and L10 (nd = 1.59319, νd = 67.90) form a cemented doublet within G3. Like the L4+L5 doublet in the front group, the patent designates this combination as a 接合負レンズ — a cemented negative lens. L9 is biconcave (fl = −62.7 mm) and L10 is a weak positive meniscus (fl = +276.3 mm), giving the pair a net thick-lens focal length of approximately −80 mm. The net negative power contributes to Petzval sum correction.

**L10 is the fourth ED element.** The production lens is marketed with four ED elements, and L10's glass properties identify it as the one in the rear group. Its nd/νd pair (1.59319 / 67.90) places it squarely in the fluorophosphate crown region of the Abbe diagram, close to OHARA S-FPM2 (nd = 1.59522, νd = 67.74). While its Abbe number is lower than the three front-group ED elements (L2–L4 at νd = 82.57), it is well within the fluorophosphate family — glasses with moderate-to-high νd that exhibit positive anomalous partial dispersion. This identification was initially missed because the νd = 67.9 value was misattributed to a standard phosphate crown (S-PHM52), which has similar nd but does not share the fluorophosphate's anomalous dispersion characteristics. The pairing of L10's ED fluorophosphate with L9's anomalous high-index flint (ΔPgF = +0.010, same glass as L5) provides local secondary spectrum correction within G3, paralleling the L4+L5 doublet structure in the front group.

#### L11 — Biconvex Positive (Pr / Pfoi)

L11 is the patent's designated "Pr" — the strongest biconvex positive single lens in the rear group. At fl = +48.9 mm, it has by far the shortest focal length of any single element in the system, making it the workhorse power element of the rear group. The patent also designates it as "Pfoi" — the strongest biconvex positive element positioned behind the most object-side focus group.

Its glass (nd = 1.80440, νd = 39.61) falls in the lanthanum dense flint region of the Abbe diagram. This high-index glass provides strong positive power with manageable curvatures. The conditional expression (4) gives fPr/|fr| = 0.221, meaning L11's focal length is about 22% of the rear group focal length — a dominant contribution that anchors the positive power of G3.

#### L12 — Negative Meniscus

L12 (nd = 1.83481, νd = 42.73) is a weakly negative meniscus convex to the object (fl = −173.1 mm) that serves as a field-flattening corrector following L11. Its glass is a high-index lanthanum flint. The combination of L11 (strong positive biconvex) followed immediately by L12 (weak negative meniscus) resembles a thick-lens equivalent of an air-spaced doublet that corrects Petzval sum and field curvature.

#### L13 — Focus Group 2 (G4)

L13 is a single positive meniscus (nd = 1.85883, νd = 30.00, fl = +127.6 mm) that constitutes G4, the second focus group. During focusing from infinity to close distance, L13 moves from the image side toward the object side (D23 decreases from 9.528 to 3.345 mm; D25 increases from 3.500 to 9.684 mm). Like G2, the net displacement sum is effectively zero (D23 + D25 change = +0.001 mm).

The counter-directional movement of G2 (toward image) and G4 (toward object) during close focusing is a floating-focus design that maintains aberration correction across the focus range. This two-group floating system is driven by Nikon's "Multi-Focus System" using dual STM stepping motors.

The nd/νd pair (1.85883 / 30.00) does not match standard catalog glasses precisely, suggesting a specialty or Nikon-specified glass. This is a high-index glass with moderately low dispersion for its refractive index, placing it in the dense lanthanum short flint region of the Abbe diagram.

#### L14, L15, L16 — Rear Group (G5)

G5 is a three-element negative group (EFL = −71.11 mm) that serves as the final optical group before the sensor. Its negative power creates a divergent exit cone that enlarges the image circle beyond what the sensor requires, producing the Plena's signature characteristics: minimal vignetting and consistently circular bokeh to the frame corners.

**L14** (nd = 1.78590, νd = 44.17) is a biconcave negative element (fl = −71.1 mm) that provides the primary negative power of G5. Its glass is a lanthanum flint, consistent with OHARA S-LAM55 or similar.

**L15** (nd = 1.84666, νd = 23.78) is a positive meniscus convex to the object (fl = +88.8 mm). Its very low Abbe number (23.78) indicates a dense short flint, consistent with OHARA S-TIH53 (nd = 1.84666, νd = 23.78) — a near-exact catalog match. This element provides chromatic correction within G5, balancing L14's chromatic contribution.

**L16** (nd = 1.81600, νd = 46.59) is the final optical element — a negative meniscus concave to the object (fl = −89.0 mm). The nd/νd pair falls in the lanthanum flint region but does not match standard OHARA or Schott catalog entries precisely (the nearest candidates include OHARA S-LAH64 at nd = 1.78800, νd = 47.37 and Schott N-LAF33 at nd = 1.78582, νd = 44.05, neither of which is a close match). This glass may be sourced from Hikari, CDGM, or a Nikon-specified melt. This element is designated as "Li1" (the most image-side lens) in the patent, and its divergent effect on the exiting beam is what produces the oversized image circle.

The patent's conditional expression (7) gives Da/Bf = 0.310, where Da is the axial distance between L16's object-side surface and L15's image-side surface. This ratio constrains how far apart the last two elements can be relative to the back focus, governing field curvature and coma correction at the image plane.

---

## 5. Aspherical Surface Analysis

The design employs a single aspherical surface — the front surface of L6 (surface 11). This surface uses a conic of revolution (K = 1.0, hyperboloidal) plus even-order polynomial deformation terms. The sag equation is:

> Z(h) = (h²/R) / [1 + √(1 − (1+K)(h/R)²)] + A4·h⁴ + A6·h⁶ + A8·h⁸ + A10·h¹⁰

The aspherical departure from a spherical reference surface was computed at several ray heights:

| h (mm) | Spherical sag (mm) | Aspherical sag (mm) | Departure (µm) |
|--------|-------------------|---------------------|----------------|
| 5.0 | 0.1180 | 0.1170 | −1.0 |
| 10.0 | 0.4729 | 0.4565 | −16.5 |
| 15.0 | 1.0671 | 0.9831 | −84.0 |
| 18.0 | 1.5401 | 1.3650 | −175.1 |

The negative departure indicates that the aspherical surface is progressively flatter than the base sphere toward the rim. The effect is to reduce the zone of strongest convergence at the element periphery, directly correcting higher-order spherical aberration. The departure reaches approximately −175 µm at h = 18 mm, which is a moderate asphere by modern standards — achievable via precision glass molding on BK7.

The position of this asphere immediately after the aperture stop is strategically important. At this location, the on-axis and off-axis beams are best separated in ray height. The aspherical correction primarily addresses spherical aberration (which depends on marginal ray height), while having minimal impact on off-axis aberrations like astigmatism and distortion. This placement is a common feature in modern high-performance telephoto designs.

---

## 6. Focus Mechanism

### 6.1 Floating Focus Architecture

The Plena uses a floating inner-focus system with two independently moving groups: G2 (L7) and G4 (L13). This is Nikon's "Multi-Focus System" driven by dual STM stepping motors. The four variable air gaps and their values at infinity and close focus are:

| Gap | Surface | Infinity (mm) | Close (mm) | Change (mm) |
|-----|---------|--------------|------------|-------------|
| D12 | 12 | 1.749 | 15.346 | +13.597 |
| D14 | 14 | 22.105 | 8.507 | −13.598 |
| D23 | 23 | 9.528 | 3.345 | −6.183 |
| D25 | 25 | 3.500 | 9.684 | +6.184 |

### 6.2 Movement Analysis

The sum of all four variable gaps remains constant at 36.882 mm across the focus range (verified to ±0.001 mm), confirming that the system is purely internally focusing — no change in overall length occurs.

The gap pairs reveal the independent group movements:
- **G2 (L7):** D12 + D14 net change = −0.001 mm ≈ 0. L7 moves toward the image by 13.597 mm within the fixed gap between L6 and L8.
- **G4 (L13):** D23 + D25 net change = +0.001 mm ≈ 0. L13 moves toward the object by 6.183 mm within the fixed gap between L12 and L14.

The counter-directional movement of these two groups is characteristic of a floating-focus system designed to maintain aberration correction at close focus. The negative G2 moving toward the image increases the divergence of the beam entering G3, while the positive G4 moving toward the object compensates by converging the beam earlier. This coordinated movement maintains the balance of spherical aberration and field curvature as focus distance changes.

The patent states (paragraph [0107]) that G2 moves object-to-image and G4 moves image-to-object when focusing from infinity to close distance. The production close-focus distance is 0.82 m (maximum magnification 1:4.8).

---

## 7. Anomalous Partial Dispersion and Chromatic Correction Strategy

The design's chromatic correction strategy relies on multiple anomalous-dispersion glasses positioned throughout the system. The patent explicitly identifies two glass types by their anomalous dispersion conditions:

### 7.1 Positive Lens Pf (L1, SR Glass)

| Property | Value |
|----------|-------|
| nd | 1.66382 |
| νd | 27.35 |
| θgF | 0.6322 |
| Normal-line θgF | 0.5972 |
| **ΔPgF** | **+0.035** |

This departure of +0.035 is roughly three times larger than what a conventional glass at this position on the Abbe diagram would exhibit. Nikon's SR glass technology achieves this by incorporating specialized glass-forming compounds that produce elevated refractive indices specifically at short (blue-violet) wavelengths, shifting the g-line index upward relative to normal dispersion behavior. The effect is that L1 bends blue-violet light more strongly than a normal glass of the same nd and νd would, providing powerful correction of secondary spectrum (the residual chromatic error after primary achromatization).

### 7.2 Negative Lens Nf (L5)

| Property | Value |
|----------|-------|
| nd | 1.85451 |
| νd | 25.15 |
| θgF | 0.6108 |
| Normal-line θgF | 0.6008 |
| **ΔPgF** | **+0.010** |

L5's anomalous dispersion is more modest but still positive, meaning both the positive and negative elements of the L4+L5 doublet have positive ΔPgF. The key to secondary spectrum correction is the *difference* in ΔPgF between paired positive and negative elements, not the absolute values. The ED fluorophosphate (L4) likely has a much larger positive ΔPgF (typically +0.035 to +0.045 for glasses in this region), so the net ΔPgF difference between L4 and L5 drives the secondary spectrum correction.

### 7.3 Overall Chromatic Strategy

The chromatic correction architecture can be understood as a layered system operating across three zones of the lens. At the front, L1 (SR, ΔPgF = +0.035) provides broad-spectrum short-wavelength correction across the full beam aperture. Immediately behind it, L2, L3, and L4 (ED fluorophosphate) provide the primary achromatic positive power, paired with L5 (anomalous flint, ΔPgF = +0.010) in a cemented doublet for tight local correction. In the rear group, L10 (ED fluorophosphate, νd = 67.90) is paired with L9 (same anomalous flint as L5, ΔPgF = +0.010) in a cemented doublet that mirrors the L4+L5 structure for local secondary spectrum correction within G3. Additionally, L8 (S-NPH1-type glass, ΔPgF ≈ +0.029) provides chromatic balancing from the high-dispersion side of the Abbe diagram — a complementary mechanism to the ED fluorophosphates. L15 (dense short flint, νd = 23.78) also contributes to chromatic correction in G5.

The use of anomalous-dispersion glasses at *both* ends of the Abbe diagram — high-νd fluorophosphate crowns (L2–L4, L10) and low-νd phosphate-based flints with positive ΔPgF (L8, S-NPH1-type) — is characteristic of modern designs aiming to simultaneously control primary chromatic aberration, secondary spectrum, and spherochromatism. The SR element (L1) adds a third degree of freedom by providing anomalous dispersion at an intermediate Abbe number.

Despite this extensive correction, reviewers note that the production Plena shows visible longitudinal chromatic aberration (LoCA) wide open, particularly on high-contrast edges. This is a fundamental challenge at f/1.8 and 135 mm focal length: spherochromatism (the chromatic variation of spherical aberration) grows rapidly with aperture, and even sophisticated multi-glass chromatic correction cannot fully eliminate it at this speed without additional aspherical surfaces or diffractive elements. The LoCA is well-controlled by f/2.8, consistent with the expected third-order scaling.

---

## 8. Optical Role Summary by Group

**G1 (L1–L6):** The primary power group of the system, with the largest elements and strongest positive contribution. L1 (SR) provides front-end short-wavelength correction. L2–L4 (ED) distribute positive power to minimize aberrations. The L4+L5 cemented doublet is net-negative (fl ≈ −138 mm), providing chromatic correction and contributing negative Petzval sum for field flattening; the front group's overall positive power comes from the cumulative surplus of the three standalone positive meniscuses (L1–L3) and L6. L6 (aspherical) corrects residual spherical aberration and coma after the stop.

**G2 (L7):** A single negative meniscus serving as the first focus group. Its negative power provides divergence that, when its position changes, adjusts the focal plane position. Its relatively simple single-element construction minimizes weight and enables fast AF response.

**G3 (L8–L12):** The main rear corrector group, containing five elements in three optical subassemblies: L8 alone (anomalous-dispersion high-index flint, ΔPgF ≈ +0.029), the L9+L10 cemented doublet (net-negative, fl ≈ −80 mm, pairing L9's anomalous flint with L10, the fourth ED fluorophosphate, for Petzval and secondary spectrum correction), and L11+L12 as an air-spaced corrector pair. L11 (Pr) is the strongest positive element in the rear group (fl = +48.9 mm), providing the converging power needed to form the image. The chromatic architecture within G3 operates from both ends of the Abbe diagram: L10's ED fluorophosphate provides low-dispersion anomalous power while L8's S-NPH1-type glass provides high-dispersion anomalous power, together counterbalancing the chromatic contributions of the front group.

**G4 (L13):** The second focus group — a single positive meniscus that moves opposite to G2 during focusing. Its positive power partially compensates for the divergence introduced by G2's negative power, and their counter-directional movement maintains the balance of spherical aberration correction across the focus range.

**G5 (L14–L16):** The negative rear group that defines the Plena's optical character. By diverging the exit beam, G5 projects an image circle larger than the sensor diagonal, producing near-zero vignetting and maintaining circular bokeh to the frame edges. The three-element construction (negative–positive–negative) provides local chromatic and coma correction while maintaining the required negative power. L16's rear surface is nearly flat (R = −2372.96 mm, surface power φ ≈ 0.0003), contributing negligible refraction — the divergent exit geometry is established primarily by L16's much more strongly curved front surface (R = −70.45 mm) and by the cumulative negative power of G5 as a whole.

---

## 9. Design Philosophy Notes

The Plena's design philosophy, as articulated by Nikon in its press materials and conditional expressions, represents a deliberate departure from the conventional telephoto-prime optimization that prioritizes maximum compactness (minimum telephoto ratio). Instead, the Plena accepts a moderate telephoto ratio of 0.90 to achieve three goals simultaneously:

1. **Oversized image circle** — achieved through G5's divergent rear group design, providing near-zero vignetting that eliminates cat's-eye bokeh in the corners.

2. **Secondary spectrum control** — achieved through a multi-layer chromatic correction strategy using SR, ED, and anomalous-dispersion flint glasses positioned at multiple strategic locations throughout the system.

3. **Floating focus with minimal breathing** — achieved through counter-directional G2/G4 movement that preserves the aberration balance across focus distances, with the total variable gap sum remaining constant.

The single aspherical surface is used sparingly and strategically — only where it provides the greatest leverage (immediately post-stop) — keeping manufacturing complexity and cost manageable relative to designs that employ multiple aspherical surfaces.

---

## 10. Sources

- WO 2024/147268 A1, Example 1 (Table 1, paragraphs [0098]–[0121])
- Nikon Corporation press release, September 27, 2023
- NIKKOR Z 135mm f/1.8 S Plena product page (Nikon USA, Nikon Consumer imaging)
- NIKKOR lens glossary (Nikon Consumer, SR glass description)
- OHARA optical glass catalog (glass identification reference; S-NPH1 datasheet for ΔPgF = +0.0261; S-FPM2 datasheet for nd = 1.59522, νd = 67.74)
- refractiveindex.info (OHARA Zemax catalog 2017-11-30, S-NPH1 entry: nd = 1.808095, Vd = 22.76)
- Paraxial ray trace verification via system-matrix method (independently computed; system EFL and all five group EFLs verified to ≤0.01 mm of patent values)
- Conditional expression verification (all three core conditions and anomalous dispersion conditions computed from patent-stated parameters)
- Cemented doublet net focal lengths verified via thick-lens system-matrix computation
