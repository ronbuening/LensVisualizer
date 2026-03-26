# Optical Analysis: Canon RF 100mm f/2.8 L Macro IS USM

## Patent JP2021-47297A — Numerical Example 1

**Patent:** JP2021-47297A (Published 2021.03.25)
**Applicant:** Canon Inc.
**Inventors:** Taki Yoshiyuki (滝 慶行), Mori Takehiro (森 丈大), Nakahara Makoto (中原 誠) *(given name readings approximate; no furigana provided)*
**Title:** Optical System and Imaging Apparatus Having the Same (光学系及びそれを有する撮像装置)
**Filing Date:** 2019.09.19

---

## 1. Patent-to-Production Identification

The patent discloses three numerical examples of a macro lens system with an integrated spherical aberration (SA) control mechanism. Example 1 is identified as the basis for the production Canon RF 100mm f/2.8 L Macro IS USM through convergent criteria:

| Parameter | Patent Example 1 | Canon RF 100mm f/2.8 L Macro |
|---|---|---|
| Element / group count | 17 elements / 13 groups | 17 elements / 13 groups |
| Design focal length | 100.81 mm | 100 mm (marketed) |
| Maximum aperture | f/2.92 | f/2.8 (marketed) |
| Minimum aperture | — (not patent-specified) | f/32 (Canon Europe spec) |
| Maximum magnification | 1.4× | 1.4× |
| Image circle | 43.28 mm diagonal | 43.27 mm (36 × 24 mm sensor) |
| Half-field angle | ω ≈ 12.1° (2ω ≈ 24.2°) | — |
| SA control mechanism | Dual focus group differential movement | SA Control Ring |
| Close focus distance | 0.26 m (Canon specification) | 0.26 m (from sensor plane) |
| Lens total length | 162.37 mm | 148 mm (optical length, excluding mount) |
| Aperture blades | — (not patent-specified) | 9 (Canon specification) |

The small discrepancy in marketed f-number (2.8 vs. patent 2.92) is typical of the relationship between production marketing specs and patent optical data, where the patent value represents the true geometric f-number at infinity rather than the rounded commercial specification. The 162.37 mm patent total length represents the optical track from the first lens surface to the image plane (sensor). Subtracting the RF mount flange-to-sensor distance of 20 mm yields a front-surface-to-flange distance of approximately 142.4 mm; the marketed 148 mm physical length includes the barrel housing that extends approximately 5.6 mm beyond the front optical surface to accommodate the filter thread and protective bezel.

---

## 2. Optical Architecture

### 2.1 Group Structure

The lens comprises five functional lens groups arranged object-to-image as L1–SP–L2–L3–L4–L5, where SP denotes the aperture stop. The overall power arrangement is +(−)+(−)(−), forming a macro lens architecture with dual floating-focus negative groups flanking a fixed positive relay, and a trailing negative field flattener.

| Group | Power | Surfaces | Elements | Focal Length | Function |
|---|---|---|---|---|---|
| L1 | Positive | 1–14 | 8 (in 6 air-separated sub-groups) | Net positive (sub-groups: −167.2, +85.3, +68.4 mm) | Front fixed group; primary positive power contribution |
| SP | — | 15 | — | — | Aperture stop (9-blade iris, Canon spec) |
| L2 | Negative | 16–20 | 3 (in 2 sub-groups) | −36.20 mm | 1st focus group / SA control |
| L3 | Positive | 21–25 | 3 (in 2 sub-groups) | +37.11 mm | Intermediate fixed positive group |
| L4 | Negative | 26–29 | 2 (in 2 sub-groups) | −163.75 mm | 2nd focus group / SA control |
| L5 | Negative | 30–31 | 1 | −76.25 mm | Rear fixed field-flattening element |

During focusing from infinity to 1.4× magnification, groups L1, L3, and L5 remain stationary while L2 and L4 translate toward the image along independent trajectories (floating focus). This is driven by the lens's dual Nano USM linear motor system, which provides independent actuation for each focus group.

### 2.2 Sub-Group Breakdown Within L1

Group L1 is itself a complex assembly containing six air-separated sub-groups:

| Sub-group | Surfaces | Elements | Focal Length | Configuration |
|---|---|---|---|---|
| G1 | 1–9 | 5 | −167.21 mm | Negative front sub-group (modified Gauss front) |
| G2 | 10–12 | 2 | +85.34 mm | Cemented doublet (positive) |
| G3 | 13–14 | 1 | +68.41 mm | Single positive element |

Despite G1's individually negative focal length, the combined L1 assembly (G1 + G2 + G3) produces net positive power. The patent does not directly state the combined L1 focal length — the sub-group focal lengths listed above are from the patent's group data table, and computing the exact thick-lens combined power requires accounting for the principal plane separations between the sub-groups. The negative front sub-group G1 acts as a diverging pre-group that controls Petzval sum and field curvature while the subsequent positive sub-groups G2 and G3 converge the beam toward the aperture stop.

---

## 3. Aspherical Surfaces

**The patent prescription for Example 1 contains no aspherical surfaces.** This is verified by three independent checks:

1. No surface in the prescription table carries an asterisk or aspherical marker.
2. No aspherical coefficient table is provided for any of the three numerical examples in the patent.
3. The patent text (¶0051–0054) describes only standard surface data (r, d, nd, νd) without aspherical parameters.

This is a noteworthy design characteristic. Achieving the stated optical performance — sharp imaging at f/2.8 across the full field from infinity to 1.4× magnification — without any aspherical surfaces is unusual for a modern high-performance macro lens. The correction of spherical aberration, coma, and higher-order monochromatic aberrations relies entirely on the 17-element all-spherical prescription, with the aberration balance distributed across the many air-spaced groups and cemented interfaces.

Some third-party retail listings describe the lens as incorporating "UD and aspherical elements." However, Canon's own product pages (Canon USA, Canon Europe) do not mention UD glass or aspherical elements for this lens — a notable omission, since Canon routinely highlights these features when present (e.g., the RF 100-300mm f/2.8 L IS USM explicitly lists "1 fluorite lens and 4 UD glass elements"). The third-party claims appear to be generic marketing copy rather than Canon-sourced specifications. The patent as filed contains no evidence of aspherical surfaces in Example 1, and Canon's official silence on special glass types is consistent with the all-spherical, all-standard-glass design described in the patent.

---

## 4. Glass Identification and Element Analysis

### 4.1 Identification Methodology

Glass types were identified by matching the patent-stated nd (refractive index at d-line, 587.6 nm) and νd (Abbe number) values against the OHARA, Schott, HOYA, HIKARI, CDGM, and Sumita catalogs. Canon sources optical glass primarily from OHARA and Hikari, with Hoya and others as secondary suppliers. Where multiple catalog matches exist, all candidates are listed; the "primary match" column reflects the most likely supplier based on Canon's known supply chain.

### 4.2 Element-by-Element Description

The following analysis proceeds element-by-element from front (object side) to rear (image side). Focal lengths are from the patent's single-lens data table (thick-lens values).

---

#### Element 1 (L1) — Biconcave Negative

| Parameter | Value |
|---|---|
| Surfaces | 1–2 (front of cemented doublet D1) |
| Radii | R₁ = −94.260 mm, R₂ = +40.575 mm |
| Center thickness | 1.74 mm |
| nd / νd | 1.83481 / 42.7 |
| Glass match | **S-LAH55V** (OHARA) — Lanthanum heavy crown |
| Focal length | −33.78 mm (patent) |
| Shape | Biconcave negative (weak front, strong rear) |

**Optical role:** L1 is the front element of cemented doublet D1. As a strong negative biconcave element in dense lanthanum crown glass (with a weakly curved front surface at R₁ = −94.3 mm and a more strongly curved rear at R₂ = +40.6 mm), it serves two functions: (a) bending the incoming marginal rays inward while distributing refraction across a strongly curved rear surface shared with the cemented partner, and (b) introducing negative Petzval contribution early in the system to flatten the field. The high-index, moderate-dispersion S-LAH55V glass allows strong curvatures without excessive chromatic contribution.

#### Element 2 (L2) — Biconvex Positive (cemented with L1)

| Parameter | Value |
|---|---|
| Surfaces | 2–3 (rear of cemented doublet D1) |
| Radii | R₁ = +40.575 mm (junction), R₂ = −137.454 mm |
| Center thickness | 7.43 mm |
| nd / νd | 1.76182 / 26.5 |
| Glass match | **S-TIH18** (OHARA) / SF14 (Schott) — Titanium flint |
| Focal length | +41.88 mm (patent) |
| Shape | Biconvex positive |

**Optical role:** L2 completes doublet D1, providing the primary positive power of the front sub-group. The high-dispersion flint glass (νd = 26.5) paired against L1's crown (νd = 42.7) corrects axial chromatic aberration across the large-aperture front group. The 7.43 mm thickness is substantial, contributing to the thick-element aberration correction strategy used throughout this design. Despite L2's strong individual positive power, D1 as a cemented pair has a net negative focal length of approximately −196 mm (computed from the thick-lens prescription) — the negative L1 dominates due to its much stronger curvatures. The chromatic correction across the cemented junction is the primary purpose of D1, with the net power contribution being modestly negative.

#### Element 3 (L3) — Biconvex Positive (weakly curved rear)

| Parameter | Value |
|---|---|
| Surfaces | 4–5 |
| Radii | R₁ = +124.812 mm, R₂ = −698.851 mm |
| Center thickness | 2.98 mm |
| nd / νd | 1.83481 / 42.7 |
| Glass match | **S-LAH55V** (OHARA) — same glass as L1 |
| Focal length | +127.06 mm (patent) |
| Shape | Weak biconvex (nearly plano-convex, rear surface very weakly curved) |

**Optical role:** A weakly positive collector element that continues converging the beam after doublet D1. The weak rear curvature (R₂ ≈ −699 mm) means this element is nearly plano-convex in character. It adds moderate positive power without introducing significant higher-order aberrations, and its high-index glass minimizes surface curvatures for the power delivered.

#### Element 4 (L4) — Biconvex Positive

| Parameter | Value |
|---|---|
| Surfaces | 6–7 |
| Radii | R₁ = +57.156 mm, R₂ = −88.275 mm |
| Center thickness | 6.60 mm |
| nd / νd | 1.48749 / 70.2 |
| Glass match | **S-FSL5** (OHARA) / N-FK5 (Schott) — Fluorine crown |
| Focal length | +72.24 mm (patent) |
| Shape | Biconvex positive |

**Optical role:** This is the most distinctive glass in L1's front sub-group. S-FSL5 / N-FK5 is a low-dispersion fluorine crown glass (νd = 70.2) that provides positive power with very low chromatic contribution. While Canon's official product pages for the RF 100mm f/2.8 L Macro do not list any UD (Ultra-Low Dispersion) elements — and S-FSL5 does not qualify as true UD by Canon's internal classification (which typically requires νd > 80, corresponding to glasses like FCD1 or S-FPL51) — it is nonetheless the lowest-dispersion glass in this design by a substantial margin. As such, L4 serves as the primary longitudinal chromatic aberration corrector in the front group, working in an air-spaced achromatic pair with the high-dispersion L5 that follows.

#### Element 5 (L5) — Biconcave Negative

| Parameter | Value |
|---|---|
| Surfaces | 8–9 |
| Radii | R₁ = −105.533 mm, R₂ = +51.436 mm |
| Center thickness | 1.65 mm |
| nd / νd | 1.84666 / 23.8 |
| Glass match | **S-TIH53** (OHARA) / N-SF57 (Schott) — Dense titanium flint |
| Focal length | −40.65 mm (patent) |
| Shape | Biconcave negative |

**Optical role:** A strong negative element in dense, highly dispersive flint glass. Paired across the air gap with the preceding L4 (low-dispersion positive), these two elements form an **air-spaced achromatic pair** that corrects chromatic aberration more aggressively than a cemented doublet alone. The very low Abbe number (23.8) and high index (1.847) make this glass an efficient negative chromatic corrector. Its thin profile (1.65 mm) indicates it contributes primarily to chromatic and Petzval correction rather than carrying structural or power-distribution duties.

#### Elements 6–7 (L6–L7) — Cemented Doublet D2

**L6: Negative Meniscus (front of D2)**

| Parameter | Value |
|---|---|
| Surfaces | 10–11 (front of D2) |
| Radii | R₁ = +74.803 mm, R₂ = +39.852 mm |
| Center thickness | 1.62 mm |
| nd / νd | 2.00100 / 29.1 |
| Glass match | **S-LAH79** (OHARA) — Ultra-high-index lanthanum heavy flint |
| Focal length | −87.23 mm (patent) |
| Shape | Negative meniscus, convex toward object |

**L7: Biconvex Positive (rear of D2)**

| Parameter | Value |
|---|---|
| Surfaces | 11–12 (rear of D2) |
| Radii | R₁ = +39.852 mm (junction), R₂ = −185.173 mm |
| Center thickness | 6.53 mm |
| nd / νd | 1.77250 / 49.6 |
| Glass match | **S-LAM54** (OHARA) / N-LAF34 (Schott) — Lanthanum flint |
| Focal length | +43.00 mm (patent) |
| Shape | Biconvex positive |

**Optical role of D2:** This cemented doublet is the final element pair in L1 before the aperture stop. L6 uses S-LAH79, which at nd = 2.001 is one of the highest-index optical glasses commercially available. The extreme index allows strong curvature effects with physically moderate surface radii. As a thin negative meniscus cemented to the much thicker L7 positive element, D2 forms a net positive doublet that provides the final convergence of the marginal ray bundle toward the stop while correcting both chromatic aberration (via the crown/flint pairing) and higher-order spherical aberration through the high-index bending at the cemented interface.

The combined D2 focal length is +85.34 mm (from the patent group data).

#### Element 8 (L8) — Biconvex Positive

| Parameter | Value |
|---|---|
| Surfaces | 13–14 |
| Radii | R₁ = +56.560 mm, R₂ = −409.038 mm |
| Center thickness | 4.30 mm |
| nd / νd | 1.72916 / 54.7 |
| Glass match | **S-LAL9** (OHARA) / N-LAK9 (Schott) — Lanthanum crown |
| Focal length | +68.41 mm (patent) |
| Shape | Biconvex (nearly plano-convex, weak rear surface) |

**Optical role:** L8 is the last element before the aperture stop, forming sub-group G3 of the L1 assembly. It provides the final positive power convergence to bring the marginal ray through the stop aperture. Its lanthanum crown glass (νd = 54.7) contributes moderate chromatic correction while the nearly-flat rear surface (R₂ ≈ −409 mm) minimizes aberration introduction at the high-angle surfaces just before the iris. This element's focal length (+68.41 mm) alone constitutes the entire G3 sub-group.

---

*— Aperture Stop (Surface 15) —*

The 9-blade aperture stop (Canon product specification; not patent-stated) is located in the air gap between L1 (rear) and L2 (front), with a semi-diameter of 15.41 mm (effective diameter 30.81 mm) at maximum aperture. This placement between the positive front group and the first negative focus group is characteristic of modified double-Gauss architectures and provides good symmetry for coma and lateral color correction.

---

#### Element 9 (L9) — Negative Meniscus

| Parameter | Value |
|---|---|
| Surfaces | 16–17 |
| Radii | R₁ = +312.322 mm, R₂ = +39.579 mm |
| Center thickness | 1.37 mm |
| nd / νd | 1.73400 / 51.5 |
| Glass match | **S-LAM51** (OHARA) / LACL60 (HOYA) — Lanthanum flint |
| Focal length | −61.88 mm (patent) |
| Shape | Negative meniscus, convex toward object |
| Group | L2 (1st focus group) |

**Optical role:** L9 is the first element of focus group L2. As a negative meniscus with a very weak front surface (R₁ ≈ 312 mm) and strongly curved rear (R₂ ≈ 40 mm), it acts as a diverging element that is highly sensitive to axial position — small translations produce large changes in the angle at which rays pass through subsequent elements. This positional sensitivity is exactly the property exploited by the SA control mechanism: translating L9 (as part of L2) shifts the balance of spherical aberration in the system.

#### Elements 10–11 (L10–L11) — Cemented Doublet D3

**L10: Biconcave Negative (front of D3)**

| Parameter | Value |
|---|---|
| Surfaces | 18–19 (front of D3) |
| Radii | R₁ = −83.866 mm, R₂ = +44.224 mm |
| Center thickness | 1.23 mm |
| nd / νd | 1.77250 / 49.6 |
| Glass match | **S-LAM54** (OHARA) / N-LAF34 (Schott) |
| Focal length | −37.33 mm (patent) |
| Shape | Biconcave negative |

**L11: Positive Meniscus (rear of D3)**

| Parameter | Value |
|---|---|
| Surfaces | 19–20 (rear of D3) |
| Radii | R₁ = +44.224 mm (junction), R₂ = +176.627 mm |
| Center thickness | 2.95 mm |
| nd / νd | 1.94595 / 18.0 |
| Glass match | **S-NPH4** (OHARA) — Ultra-high-dispersion special flint |
| Focal length | +61.70 mm (patent) |
| Shape | Positive meniscus, convex toward object |

**Optical role of D3:** This doublet completes focus group L2. The glass pairing is striking: L10 uses a moderate-index lanthanum flint (νd = 49.6) as the negative element, while L11 uses S-NPH4, an ultra-high-dispersion glass (νd = 18.0, nd = 1.946) as the positive element. This is an **anomalous doublet configuration** — normally, the higher-dispersion glass is the negative (flint) element in a crown/flint achromatic doublet. Here, the highly dispersive glass carries positive power.

This inversion serves the SA control function: the chromatic sensitivity of D3 is deliberately unbalanced so that when L2 translates axially, the resulting change in spherical aberration dominates over changes in chromatic aberration. The combined L2 group focal length is −36.20 mm.

---

#### Element 12 (L12) — Plano-Convex Positive

| Parameter | Value |
|---|---|
| Surfaces | 21–22 |
| Radii | R₁ = ∞ (flat), R₂ = −44.068 mm |
| Center thickness | 4.00 mm |
| nd / νd | 1.76385 / 48.5 |
| Glass match | **E-LAF8** (Hikari) / H-LAK12 (CDGM) — Lanthanum flint |
| Focal length | +57.69 mm (patent) |
| Shape | Plano-convex (flat front, convex rear) |
| Group | L3 (fixed intermediate positive group) |

**Optical role:** L12 begins the fixed positive group L3, positioned between the two focus groups. The flat front surface is unusual in high-performance lens design and likely reflects a manufacturing or mounting advantage — a flat surface at this position can serve as a precision reference for the mechanical spacing of the surrounding moving groups. The glass (nd = 1.764, νd = 48.5) is a lanthanum flint type. Of the candidate matches, Hikari E-LAF8 and CDGM H-LAK12 both match exactly; Canon has sourced glass from both manufacturers. This element provides the primary positive power of L3, reconverging the beam after the diverging L2 focus group.

#### Elements 13–14 (L13–L14) — Cemented Doublet D4

**L13: Biconvex Positive (front of D4)**

| Parameter | Value |
|---|---|
| Surfaces | 23–24 (front of D4) |
| Radii | R₁ = +96.460 mm, R₂ = −37.249 mm |
| Center thickness | 6.22 mm |
| nd / νd | 1.72916 / 54.7 |
| Glass match | **S-LAL9** (OHARA) / N-LAK9 (Schott) — same glass as L8 |
| Focal length | +37.59 mm (patent) |
| Shape | Biconvex positive |

**L14: Negative Meniscus (rear of D4)**

| Parameter | Value |
|---|---|
| Surfaces | 24–25 (rear of D4) |
| Radii | R₁ = −37.249 mm (junction), R₂ = −102.953 mm |
| Center thickness | 1.37 mm |
| nd / νd | 2.00069 / 25.5 |
| Glass match | **S-LAH78** (OHARA) — Ultra-high-index lanthanum heavy flint |
| Focal length | −58.94 mm (patent) |
| Shape | Negative meniscus, concave toward object |

**Optical role of D4:** The second element of L3 is another powerfully correcting cemented doublet. L14 uses S-LAH78, the second ultra-high-index glass (nd = 2.001) in the design. The crown/flint pairing (S-LAL9 crown, νd = 54.7 vs. S-LAH78 flint, νd = 25.5) provides strong chromatic correction. The combined L3 focal length is +37.11 mm — nearly a perfect match in magnitude to L2's −36.20 mm, creating an approximate local telescopic (afocal) relay between the two focus groups. This near-symmetry means that L3 reimages the L2 aberration pattern into L4 with controlled magnification, enabling the SA control mechanism to operate with balanced sensitivity across both focus groups.

---

#### Element 15 (L15 / L41) — Biconcave Negative

| Parameter | Value |
|---|---|
| Surfaces | 26–27 |
| Radii | R₁ = −51.432 mm, R₂ = +224.397 mm |
| Center thickness | 1.21 mm |
| nd / νd | 1.83481 / 42.7 |
| Glass match | **S-LAH55V** (OHARA) — same glass as L1 and L3 |
| Focal length | −50.02 mm (patent) |
| Shape | Biconcave negative |
| Group | L4 (2nd focus group) — designated L41 in patent |

**Optical role:** L15/L41 is the negative element of the second focus group L4. It provides the primary diverging power of L4 and, like L9 in L2, is positioned where axial translation produces strong changes in spherical aberration. The 19.35 mm air gap following L15 to L16 is exceptionally large for elements within the same "group" — this wide spacing allows L41 and L42 to function semi-independently for aberration purposes while still being mechanically coupled as a single moving unit.

#### Element 16 (L16 / L42) — Positive Meniscus

| Parameter | Value |
|---|---|
| Surfaces | 28–29 |
| Radii | R₁ = −76.056 mm, R₂ = −37.684 mm |
| Center thickness | 3.76 mm |
| nd / νd | 1.67270 / 32.1 |
| Glass match | **S-TIM28** (OHARA) — Titanium flint |
| Focal length | +106.82 mm (patent) |
| Shape | Positive meniscus, concave toward object |
| Group | L4 (2nd focus group) — designated L42 in patent |

**Optical role:** L16/L42 is the positive element of L4, partially compensating L41's negative power. The combined L4 focal length is −163.75 mm — much weaker than L2's −36.20 mm. This asymmetry is by design: L4 operates as a weak negative group with a large internal air space, giving it high sensitivity to spherical aberration change per unit of axial translation while having relatively low focus sensitivity. The patent's conditional expression (5) requires 0.20 < ff₁/ff₂ < 0.50, where ff₁ and ff₂ are the focal lengths of L2 and L4 respectively. For Example 1, ff₁/ff₂ = (−36.20)/(−163.75) = 0.22, satisfying this condition.

The use of S-TIM28 (νd = 32.1) — a moderately dispersive titanium flint — for the positive L42 element is another instance of the anomalous glass-power pairing seen in D3. In conventional doublet design, flint glass carries negative power; here it carries positive power. This choice prioritizes the aberration sensitivity profile needed for SA control over conventional chromatic correction strategy.

---

#### Element 17 (L17) — Biconcave Negative

| Parameter | Value |
|---|---|
| Surfaces | 30–31 |
| Radii | R₁ = −53.234 mm, R₂ = +291.242 mm |
| Center thickness | 1.73 mm |
| nd / νd | 1.58913 / 61.1 |
| Glass match | **S-BAL35** (OHARA) — Barium crown |
| Focal length | −76.25 mm (patent) |
| Shape | Biconcave negative |
| Group | L5 (fixed rear group) |

**Optical role:** L17 is the sole element of group L5, the last optical element before the image plane. As a weak biconcave negative in a relatively low-index, low-dispersion barium crown, it serves as a **field flattener**. Positioned at a large distance from the stop (surface 29's d = 26.63 mm at infinity to L17, plus the back focus), L17 operates where off-axis ray bundles are spread wide, making it effective at correcting field curvature (Petzval sum) and astigmatism without significantly impacting axial aberrations. The low-index, low-dispersion glass minimizes any chromatic side-effects of this correction.

The back focal distance from L17's rear surface to the image plane is 14.66 mm (at infinity focus). Since the Canon RF mount flange-to-sensor distance is 20 mm, L17's rear surface sits approximately 5.3 mm forward of (inside) the lens mount flange — comfortably within the lens barrel rather than protruding into the camera body.

*Note: L17's patent-stated νd = 61.1 differs by 0.1 from the S-BAL35 catalog value of 61.2. This is within typical rounding tolerance for patent data and does not affect identification confidence.*

---

## 5. Focusing Mechanism

### 5.1 Floating Focus Architecture

The lens uses a dual-group floating focus system. Groups L2 and L4 translate independently toward the image during focusing from infinity to close range, while L1, L3, and L5 remain stationary. The independent trajectories are driven by dual Nano USM linear motors — one per focus group.

| Gap | ∞ Focus | 0.5× Mag | 1.4× Mag | Δ (∞→1.4×) |
|---|---|---|---|---|
| d15 (stop → L2) | 3.10 mm | 11.72 mm | 27.41 mm | +24.31 mm |
| d20 (L2 → L3) | 27.41 mm | 18.80 mm | 3.10 mm | −24.31 mm |
| d25 (L3 → L4) | 4.17 mm | 11.48 mm | 29.50 mm | +25.33 mm |
| d29 (L4 → L5) | 26.63 mm | 19.32 mm | 1.30 mm | −25.33 mm |

The sums d15 + d20 = 30.51 mm and d25 + d29 = 30.80 mm remain constant across the entire focus range (verified: ∞, 0.5×, and 1.4× positions all sum to within 0.01 mm, with the residual attributable to patent rounding). This confirms that each focus group moves within a fixed mechanical envelope. At maximum magnification (1.4×), both groups have traveled approximately 24–25 mm toward the image, leaving only 3.10 mm (L2) and 1.30 mm (L4) of clearance to the next group — essentially bottoming out their travel range.

### 5.2 Focus Sensitivity

The patent defines the focus sensitivity (ES) for each group as:

> ES = (1 − βf²) × βR²

where βf is the lateral magnification of the focus group and βR is the combined lateral magnification of all groups between that focus group and the image plane.

| Parameter | L2 (1st Focus) | L4 (2nd Focus) |
|---|---|---|
| Focus sensitivity |ES| | 3.98 | 2.78 |
| SA sensitivity |ΔSA| | 0.57 | 0.62 |

Both focus sensitivities fall within the patent's required range of 2.50–4.50, ensuring efficient focusing without excessive group travel. L2 has higher focus sensitivity (3.98 vs. 2.78) because it operates closer to the stop where marginal ray heights are larger, while L4 has slightly higher SA sensitivity (0.62 vs. 0.57), making it the more influential group for the SA control function.

---

## 6. SA Control Mechanism

### 6.1 Operating Principle

The Canon RF 100mm f/2.8 L Macro IS USM is distinguished by its SA (Spherical Aberration) Control Ring — a physical ring on the lens barrel that allows the photographer to deliberately introduce controlled spherical aberration for creative bokeh effects. The patent describes the underlying mechanism:

At any given focus position, the two focus groups L2 and L4 can be shifted from their normal positions by controlled amounts. Because L2 and L4 have different ratios of SA sensitivity to focus sensitivity, it is possible to find paired displacements that produce a net change in spherical aberration while keeping the focal plane position approximately constant.

The patent text (¶20) describes the general principle at infinity focus: for SA overcorrection, L2 shifts toward the image while L4 shifts toward the object (opposite directions). For undercorrection, the directions reverse.

The numerical data provided is at 0.5× magnification, where the groups have already traveled approximately 8–12 mm image-ward from their infinity positions:

| State | d15 | d20 | d25 | d29 | Description |
|---|---|---|---|---|---|
| Normal | 11.72 | 18.80 | 11.48 | 19.32 | Standard focus at 0.5× |
| SA Position 1 | 12.72 | 17.80 | 12.65 | 18.15 | SA variant 1 |
| SA Position 2 | 10.72 | 19.80† | 10.25 | 20.55 | SA variant 2 |

†**Note on d20 in Position 2:** The patent prints d20 = 18.80 for Position 2, which produces a total-track discrepancy of 1.0 mm (d15 + d20 = 29.52, vs. 30.52 for Normal and Position 1). Since all other variable-gap pairs sum to their expected constants, this is most likely a typographical error in the patent; d20 = 19.80 restores consistency and is the value used in the table above.

In Position 1, L2 shifts +1.0 mm toward the image while L4 shifts +1.17 mm toward the image. In Position 2 (corrected), L2 shifts −1.0 mm toward the object while L4 shifts −1.23 mm toward the object. At the 0.5× operating point, both groups shift in the same direction for each SA variant, but with different magnitudes. The differential displacement — arising from the different SA sensitivity ratios (|ΔSA₁| = 0.57 vs. |ΔSA₂| = 0.62) — produces a net spherical aberration change while the focus shift contributions approximately cancel. The patent labels these positions simply "aberration variable 1" and "aberration variable 2" without specifying which corresponds to overcorrection or undercorrection at this magnification.

### 6.2 Practical SA Effects

In Canon's user-facing implementation, the SA Control Ring has positions from −2 to +2, with 0 as the neutral (locked) default:

- **Minus settings (−1, −2):** Introduce undercorrected spherical aberration. Marginal rays focus behind the paraxial focus, creating a dreamy, soft-focus effect on the subject with smooth, "glowing" background bokeh.
- **Plus settings (+1, +2):** Introduce overcorrected spherical aberration. Marginal rays focus in front of the paraxial focus, creating harder-edged, "bubble" or "swirly" bokeh circles in the background.
- **Zero (locked):** Standard sharp imaging with no deliberately introduced SA.

The effect is most pronounced at wide apertures (f/2.8–f/4) and diminishes rapidly as the aperture is stopped down, since spherical aberration is proportional to the cube of the ray height at the aperture.

---

## 7. Glass Summary

### 7.1 Glass Map Position

The 17 elements use 13 distinct glass types spanning a wide range of the nd/νd glass map:

| Glass | nd | νd | Category | Elements | Count |
|---|---|---|---|---|---|
| S-LAH55V (OHARA) | 1.83481 | 42.7 | High-index lanthanum crown | L1, L3, L15 | 3 |
| S-TIH18 (OHARA) | 1.76182 | 26.5 | Titanium flint | L2 | 1 |
| S-FSL5 (OHARA) | 1.48749 | 70.2 | Low-dispersion fluorine crown | L4 | 1 |
| S-TIH53 (OHARA) | 1.84666 | 23.8 | Dense titanium flint | L5 | 1 |
| S-LAH79 (OHARA) | 2.00100 | 29.1 | Ultra-high-index La heavy flint | L6 | 1 |
| S-LAM54 (OHARA) | 1.77250 | 49.6 | Lanthanum flint | L7, L10 | 2 |
| S-LAL9 (OHARA) | 1.72916 | 54.7 | Lanthanum crown | L8, L13 | 2 |
| S-LAM51 (OHARA) | 1.73400 | 51.5 | Lanthanum flint | L9 | 1 |
| S-NPH4 (OHARA) | 1.94595 | 18.0 | Ultra-high-dispersion special flint | L11 | 1 |
| E-LAF8 (Hikari) | 1.76385 | 48.5 | Lanthanum flint | L12 | 1 |
| S-LAH78 (OHARA) | 2.00069 | 25.5 | Ultra-high-index La heavy flint | L14 | 1 |
| S-TIM28 (OHARA) | 1.67270 | 32.1 | Titanium flint | L16 | 1 |
| S-BAL35 (OHARA) | 1.58913 | 61.2 | Barium crown | L17 | 1 |

### 7.2 Notable Glass Choices

**Ultra-high-index glasses (nd ≥ 2.0):** Two elements (L6 and L14) use glasses with nd ≈ 2.00, among the highest refractive indices available in commercial optical glass. These enable strong aberration correction at cemented interfaces with physically moderate curvatures. Both are positioned at critical doublet junctions — L6 in the pre-stop convergence group and L14 in the inter-focus-group relay.

**Ultra-high-dispersion glass (S-NPH4, νd = 18.0):** L11 uses one of the most dispersive optical glasses available. Its placement as a positive element in the L2 focus group — rather than in the conventional negative-flint role — is a deliberate design choice that optimizes the SA sensitivity profile of L2 for the aberration control function.

**Low-dispersion element (S-FSL5, νd = 70.2):** L4's fluorine crown is the lowest-dispersion glass in the design and serves as the primary longitudinal chromatic aberration corrector for the wide-aperture front group.

**Repeated glass types:** Three glasses are used in multiple elements — S-LAH55V (3×), S-LAM54 (2×), and S-LAL9 (2×). Glass reuse reduces manufacturing complexity and material inventory costs. The repeated use of S-LAH55V in L1, L3, and L15 (spanning both the front fixed group and the second focus group) suggests this glass was selected for its combination of high index, moderate dispersion, and established manufacturing reliability.

---

## 8. Conditional Expressions

The patent defines seven conditional expressions that constrain the design space. Values for Example 1:

| Expression | Condition | Example 1 Value | Range |
|---|---|---|---|
| (1) \|ΔSA₁\| | SA sensitivity, L2 | 0.57 | 0.50–0.90 |
| (2) \|ΔSA₂\| | SA sensitivity, L4 | 0.62 | 0.50–0.90 |
| (3) \|ES₁\| | Focus sensitivity, L2 | 3.98 | 2.50–4.50 |
| (4) \|ES₂\| | Focus sensitivity, L4 | 2.78 | 2.50–4.50 |
| (5) ff₁/ff₂ | Focus group focal length ratio | 0.22 | 0.20–0.50 |
| (6) Δmf₁/Δmf₂ | SA control travel ratio | 0.70 | 0.50–0.80 |
| (7) \|ffN/ffP\| | L4 element focal length ratio | 0.47 | 0.30–0.55 |

All values for Example 1 fall within the specified ranges. Expression (5) is particularly informative: ff₁/ff₂ = 0.22 is near the lower bound, indicating L2 has much shorter (stronger) focal length than L4 — L2 is the "workhorse" focus group, while L4 is a weaker auxiliary that provides the differential SA sensitivity needed for the control function.

---

## 9. Design Philosophy and Significance

### 9.1 Architecture Summary

This lens represents an unusual intersection of macro lens, portrait lens, and creative-effect optic. Its key architectural decisions include:

1. **All-spherical design (in the patent):** Achieving f/2.8 macro performance to 1.4× magnification without aspherical surfaces is remarkable for a modern high-performance lens. The large 17-element count provides enough degrees of freedom to correct higher-order aberrations through glass choice, element bending, and air spacing rather than surface figure. Canon's own product pages do not list aspherical or UD elements for this lens, consistent with the patent prescription.

2. **Dual floating-focus groups with integrated SA control:** The same two groups that provide focusing also enable the SA control feature, avoiding the need for additional moving elements. This is mechanically elegant — the dual Nano USM motors serve double duty.

3. **Deliberate use of anomalous glass-power pairings:** Multiple doublets in the design use high-dispersion glass for the positive element (L11/S-NPH4, L16/S-TIM28) rather than the conventional negative-flint configuration. This prioritizes the SA control aberration profile over purely minimizing chromatic aberration.

4. **Weak L4 with large internal air space:** The 19.35 mm air gap within L4 (between L41 and L42) is exceptional. It allows the two sub-elements to function as a "distributed negative group" with aberration properties that differ fundamentally from a compact cemented pair.

### 9.2 Historical Context

The SA control concept is not new to Canon — the EF 135mm f/2.8 Soft Focus (1987) offered a similar feature via a simpler mechanism. However, the RF 100mm f/2.8 L Macro IS USM integrates SA control into a high-performance modern macro lens without compromising baseline sharpness, which is a significantly more challenging design problem. The patent's solution — using the floating focus groups' differential aberration sensitivities — is an elegant approach that avoids dedicated soft-focus optics.

---

## 10. Prescription Verification

The complete prescription was independently verified:

| Check | Result |
|---|---|
| Paraxial EFL | 100.80 mm computed vs. 100.81 mm patent-stated (Δ = 0.01 mm) |
| Total optical track | 162.37 mm (exact match to patent) |
| Back focal distance | 14.66 mm (exact match to patent) |
| Variable gap sums (∞) | d15+d20 = 30.51 mm, d25+d29 = 30.80 mm |
| Variable gap sums (0.5×) | d15+d20 = 30.52 mm, d25+d29 = 30.80 mm |
| Variable gap sums (1.4×) | d15+d20 = 30.51 mm, d25+d29 = 30.80 mm |
| Surface value transcription | All 31 surfaces verified (R, d, nd, sd) |

The 0.01 mm EFL deviation and 0.01 mm variable-gap-sum variation at 0.5× are within the expected rounding tolerance of the patent's numerical data (which uses 2–3 decimal places for distances).

---

## Source Documentation

- **Primary source:** JP2021-47297A, published 2021.03.25, Canon Inc.
- **Production specifications:** Canon RF 100mm f/2.8 L Macro IS USM product page (Canon USA, Canon Europe)
- **Glass catalog references:** OHARA Optical Glass Catalog (2023 edition), Schott Optical Glass Data Sheets, Hikari Glass Catalog
- **EFL verification:** Independent paraxial ray trace computation (100.80 mm computed vs. 100.81 mm patent-stated; Δ = 0.01 mm)
- **Review sources for production lens characteristics:** The Digital Picture, Dustin Abbott (November 2021), OpticalLimits (June 2024), Digital Camera World (July 2021)

---

*Analysis prepared from patent JP2021-47297A Numerical Example 1. Glass identifications are based on nd/νd catalog matching and represent the most probable assignments; Canon may use equivalent or proprietary melt variants. The production Canon RF 100mm f/2.8 L Macro IS USM may incorporate optimizations not reflected in this patent filing.*
