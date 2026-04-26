# Nikon AF-S NIKKOR 85mm f/1.4G — Patent Analysis

**Patent:** US 8,767,319 B2 — Example 1  
**Filed:** February 24, 2011 (PCT/JP2011/054084)  
**Priority:** March 2, 2010 (JP 2010-045271)  
**Granted:** July 1, 2014  
**Inventors:** Yoshihito Souma (Sakai, JP), Satoru Shibata (Chiyoda-ku, JP)  
**Assignees:** Konica Minolta Advanced Layers, Inc. (Tokyo) / Nikon Corporation (Tokyo)

---

## 1. Identification as the Production Design

Example 1 of US 8,767,319 matches the production Nikon AF-S NIKKOR 85mm f/1.4G across every verifiable specification. The convergent evidence is strong:

- **Element/group count:** 10 elements in 9 groups — matching Nikon's published specification exactly. Nine of the ten elements are air-spaced (each constituting its own "group"), while elements L31 and L32 are cemented into a single doublet, yielding 10 elements / 9 groups.
- **Focal length:** The patent prescription yields f = 85.000 mm by paraxial ray trace, matching the marketed 85 mm.
- **Minimum focus distance:** The patent gives an object distance of 719.0 mm at close focus. Adding the total track length of 126.370 mm gives a total object-to-image distance of 845.4 mm — within rounding of the production specification of 0.85 m.
- **Maximum magnification:** β = −0.1175 at close focus, i.e., 1:8.5 — consistent with the production specification of approximately 1:8.3 (the small discrepancy reflects rounding in both the patent and marketing spec).
- **All-spherical design:** No aspherical coefficients are listed for any surface in Example 1. This matches the well-documented all-spherical construction of the production lens, which uses no aspherical or ED glass elements.
- **No ED or special-dispersion glass:** Every glass in the prescription is a conventional optical glass — no fluorite, ED, Super ED, or anomalous-dispersion materials appear. This is consistent with multiple independent reviews confirming the production lens contains no special glass elements.
- **F-number:** The patent states FNO = 1.45, while the production lens is marketed as f/1.4. This small discrepancy is normal — patents report the numerically precise geometric f-number, while marketing rounds to the nearest standard value. At close focus, the effective FNO rises to 1.71, consistent with the expected focus-extension loss.
- **Inner-focus mechanism:** Gr1 and Gr3 are stationary; Gr2 (carrying the aperture stop) translates 9.600 mm toward the object when focusing from infinity to 0.85 m. The front and rear of the lens barrel do not move during focusing, consistent with the production lens's IF design.

The joint assignment to Konica Minolta Advanced Layers, Inc. (a Konica Minolta subsidiary specializing in optical device design and manufacture) and Nikon Corporation further supports this as the design underlying the production AF-S NIKKOR 85mm f/1.4G, which was announced in August 2010.

It should be noted that Example 2 in the patent also has a 10 elements / 9 groups configuration with the same group architecture (including the cemented L3N doublet in Gr3), and cannot be definitively ruled out as the production design on element count alone. However, Example 1 is the first numerical example — typically the preferred embodiment in Japanese patent practice — and its prescription data produce exact agreement with the stated focal length and all conditional expressions. The analysis in this document uses Example 1 throughout.

---

## 2. Overall Optical Architecture

The system comprises three lens groups, all having positive refractive power:

| Group | Elements | Surfaces | Focal Length (mm) | Power | Role |
|-------|----------|----------|-------------------|-------|------|
| Gr1 | L11, L12, L13 | 1–6 | +252.7 | Weak positive | Front collector — gathers light and sets up Gr2 |
| Gr2 | L21, L22, L23, L24 + STO | 7–15 | +61.9 | Strong positive | Focusing group — carries aperture stop |
| Gr3 | L31+L32 (cemented), L3P | 16–20 | +684.5 | Very weak positive | Rear corrector — controls residual spherical and field |

The total track length is 126.370 mm with a back focal distance of 41.050 mm. The track-to-focal-length ratio is 1.49 — the system is about 49% longer than its focal length, meaning this is not a true telephoto arrangement (which would be shorter than its focal length). Instead, the additional length is necessary to accommodate the large air gaps required for the inner-focus mechanism and to maintain adequate mirror clearance for the Nikon F-mount (flange distance 46.5 mm, requiring approximately 38.5 mm of clear back focus). The 41.05 mm BFD provides this clearance with modest margin.

The positive-positive-positive group power distribution is a deliberate departure from the classical Sonnar-type or Gauss-type arrangements traditionally used for fast 85 mm lenses. By making all three groups positive, the designers avoid the steep off-axis ray bending that a negative second group would cause — which was the chief drawback of Patent Document 1 (JP-A-H1-154111) cited in the patent's background section. The tradeoff is that chromatic and spherical aberration correction must be handled within each group rather than relying on a strong negative group for flattening, demanding careful glass selection and element shaping.

Despite the all-positive group layout, the Petzval sum is well controlled. Computing the surface-by-surface Petzval contribution Σ φᵢ/(nᵢnᵢ') yields a total Petzval sum of +0.0020, corresponding to a Petzval field curvature radius of approximately 499 mm. This is over 23 times the maximum image height (21.6 mm), indicating excellent intrinsic field flatness — achieved through the use of high-index lanthanum glasses (which contribute less Petzval curvature per unit of refractive power) and the strong negative elements L22, L32, and L13, which provide the negative Petzval contributions needed to offset the positive elements.

---

## 3. Aspherical Surfaces

**There are none.** Example 1 contains no aspherical surface data whatsoever — every surface in the prescription is spherical. This is confirmed by the patent text, which does not reference any aspherical coefficients for this example, and by multiple independent reviews of the production lens that note the complete absence of aspherical elements.

This is a notable design choice. The Nikon 85mm f/1.4G achieves its performance entirely through glass selection and surface curvature optimization with spherical surfaces. This contrasts with more recent fast 85 mm designs (such as the Sigma 85mm f/1.4 DG DN Art, Sony FE 85mm f/1.4 GM, and Sony FE 85mm f/1.4 GM II) that rely heavily on aspherical elements for tighter wide-open correction.

The all-spherical approach has practical implications. Aspherical surfaces can introduce "onion-ring" artifacts in out-of-focus highlights — a particular concern for a lens valued primarily for bokeh quality. By using only spherical surfaces, the 85mm f/1.4G avoids this entirely, producing characteristically smooth bokeh that reviewers have consistently praised. The deliberate retention of controlled residual spherical aberration at wide apertures contributes to the lens's distinctive rendering.

---

## 4. Element-by-Element Analysis

### 4.1 Group 1 — Front Collector (Surfaces 1–6)

Group 1 is a classic positive front group of three elements. Its weak positive power (f = +252.7 mm) means it contributes relatively little convergence on its own — its primary role is to collect the incoming beam and begin gradually bending it toward the axis, feeding a well-conditioned beam into Gr2 where the heavy lifting occurs.

#### L11 — Positive Meniscus (Surfaces 1–2)

| Property | Value |
|----------|-------|
| Radii | R₁ = +54.231, R₂ = +281.169 mm |
| Thickness | 9.430 mm |
| Glass | nd = 1.62041, νd = 60.3 → **OHARA S-BSM16** (barium silicate crown; SCHOTT equiv. N-SK16) |
| Shape | Positive meniscus, convex to object |
| Focal length | +106.6 mm (thick lens) |

L11 is the front element — the largest and most exposed glass in the system. It is a moderately powered positive meniscus that begins the process of collecting the wide f/1.4 cone. The barium silicate glass (S-BSM16, nd = 1.620, SCHOTT N-SK16 equivalent) is a mid-index crown with good transmission, reasonable hardness, and excellent chemical durability — all desirable properties for an exposed front element. Its Abbe number of 60.3 provides moderate chromatic control. The meniscus shape keeps surface angles manageable at the rim despite the large aperture, limiting higher-order spherical aberration contributions.

#### L12 — Positive Meniscus (Surfaces 3–4)

| Property | Value |
|----------|-------|
| Radii | R₁ = +39.221, R₂ = +54.944 mm |
| Thickness | 9.640 mm |
| Glass | nd = 1.80400, νd = 46.6 → **OHARA S-LAH65V** (lanthanum heavy flint) |
| Shape | Positive meniscus, convex to object |
| Focal length | +133.9 mm (thick lens) |

L12 continues converging the beam and is the thickest element in the system at 9.640 mm. The high-index lanthanum glass (S-LAH65V, nd = 1.804) allows the element to contribute significant positive power with relatively gentle curvatures — the radii ratio R₁/R₂ = 0.71 keeps the bending mild. The high index also reduces the Petzval contribution per unit of power, helping to flatten the field. This is a workhorse glass in modern high-performance lens design, offering a favorable combination of high index and moderate dispersion.

#### L13 — Negative Meniscus (Surfaces 5–6)

| Property | Value |
|----------|-------|
| Radii | R₁ = +72.063, R₂ = +26.207 mm |
| Thickness | 2.090 mm |
| Glass | nd = 1.80610, νd = 33.3 → **OHARA S-NBH56** (niobium high-index flint) |
| Shape | Negative meniscus, concave to image |
| Focal length | −52.2 mm (thick lens) |

L13 is the only negative element in Group 1 and serves a critical role: it partially compensates the positive Petzval sum accumulated by L11 and L12, corrects first-group chromatic aberration, and diverges the beam entering the large air gap before Group 2. The niobium-containing S-NBH56 provides high index (1.806) with relatively high dispersion (νd = 33.3), making it effective as a flint counterpart to the two preceding crowns. Its thin profile (2.09 mm) and strong rear curvature (R₂ = +26.2 mm, a steeply concave image-side surface) make it the most aggressively shaped element in Gr1. The strong divergence from this surface is what produces the large air gap (17.3 mm at infinity) separating Gr1 from Gr2.

### 4.2 Group 2 — Focusing Group + Aperture Stop (Surfaces 7–15)

Group 2 is the heart of the optical system and the focusing group. It carries the aperture stop and provides the dominant convergence (f = +61.9 mm), contributing the bulk of the system's refractive power. During focus from infinity to 0.85 m, the entire group translates 9.600 mm toward the object. This inner-focus arrangement keeps the front and rear barrel lengths constant and avoids rotating the front element — desirable for filter use and for keeping the lens sealed.

The patent's core insight is in the construction of this group: it contains only a single negative element (L22), flanked by a positive element before it (L21) and two positive elements after it (L23, L24). This P-N-P-P sequence allows the group to achieve adequate chromatic correction with minimal weight — important for fast, quiet autofocus via the Silent Wave Motor.

#### L21 — Positive Meniscus (Surfaces 7–8)

| Property | Value |
|----------|-------|
| Radii | R₁ = +55.974, R₂ = +105.851 mm |
| Thickness | 2.310 mm |
| Glass | nd = 1.83481, νd = 42.7 → **OHARA S-LAH55V** (lanthanum heavy flint) |
| Shape | Positive meniscus, convex to object |
| Focal length | +139.4 mm (thick lens) |

L21 is the first element of the focusing group and the most object-side positive lens in Gr2. It begins re-converging the divergent beam emerging from Gr1. The high-index lanthanum glass minimizes surface curvatures and keeps the Petzval contribution under control. Its focal length ratio relative to L22 is a key patent parameter: f21/f22 = 139.4/(−35.7) = −3.905, falling within the required range of −5 < f21/f22 < −1 (conditional formula 2). This ratio governs the balance between the axial ray height after the negative element and the flexibility in spherical aberration correction — too negative, and the downstream elements must be impractically large; too close to −1, and there isn't enough divergence to correct spherical aberration effectively.

#### Aperture Stop (Surface 9)

The aperture stop is located in the air space between L21 and L22, at a distance of 2.814 mm after L21's rear surface. Its position within the focusing group means it moves with the group during focusing — a deliberate design choice that keeps off-axis ray heights relatively stable across the focus range. At the patent's stated FNO of 1.45, the entrance pupil semi-diameter is approximately 29.3 mm (= 85/(2 × 1.45)). The physical stop aperture will be somewhat smaller than this, since Gr1 magnifies the stop's apparent size as seen from object space.

#### L22 — Biconcave Negative (Surfaces 10–11)

| Property | Value |
|----------|-------|
| Radii | R₁ = −40.001, R₂ = +67.072 mm |
| Thickness | 1.200 mm |
| Glass | nd = 1.69895, νd = 30.1 → **OHARA S-TIH18** (titanium flint) |
| Shape | Biconcave |
| Focal length | −35.7 mm (thick lens) |

L22 is the only negative element in the entire focusing group, and its shape is the subject of the patent's primary conditional formula. The shape factor (R₁ + R₂)/(R₁ − R₂) = (−40.001 + 67.072)/(−40.001 − 67.072) = −0.253, lying within the required range of −0.5 to −0.1. This biases the element toward having a stronger image-side surface, which controls how much positive spherical aberration the element contributes — critical for balancing the negative spherical aberration generated by the surrounding positive elements.

The titanium flint glass (S-TIH18) has relatively low index (1.699) but very high dispersion (νd = 30.1), making it an efficient chromatic corrector. The combination of strong negative power and high dispersion in a single thin element (just 1.2 mm thick) is what allows the focusing group to achieve acceptable chromatic correction with only one negative lens — the patent's central innovation for weight reduction.

L22 is the most important element in the lens for controlling residual spherical aberration and, by extension, bokeh character. The patent explicitly notes that the design allows "easy setting of proper residual spherical aberration as desired" — a clear reference to the deliberate under-correction that gives the 85mm f/1.4G its characteristic rendering at wide apertures.

#### L23 — Positive Meniscus (Surfaces 12–13)

| Property | Value |
|----------|-------|
| Radii | R₁ = −426.237, R₂ = −71.448 mm |
| Thickness | 3.070 mm |
| Glass | nd = 1.88300, νd = 40.8 → **OHARA S-LAH58** (lanthanum heavy flint) |
| Shape | Positive meniscus, convex to image |
| Focal length | +96.8 mm (thick lens) |

L23 is the first of two positive elements following L22. Its nearly flat front surface (R₁ = −426.2 mm) and more strongly curved rear surface (R₂ = −71.4 mm) create a meniscus that is convex to the image side. The very high-index glass (S-LAH58, nd = 1.883 — the second-highest index in the system, after only L31's S-LAH79 at 1.904) allows this element to contribute meaningful positive power with almost no curvature on its front face, which minimizes higher-order aberration contributions. This element begins to re-converge the beam after L22's divergence.

#### L24 — Biconvex Positive (Surfaces 14–15)

| Property | Value |
|----------|-------|
| Radii | R₁ = +71.673, R₂ = −58.340 mm |
| Thickness | 6.873 mm |
| Glass | nd = 1.72916, νd = 54.7 → **OHARA S-LAL14** (lanthanum light flint) |
| Shape | Biconvex |
| Focal length | +45.1 mm (thick lens) |

L24 is the strongest positive element in the focusing group and the thickest element in Gr2 (6.873 mm). Its biconvex shape provides strong convergence from both surfaces. The lanthanum light flint glass (S-LAL14) has the highest Abbe number in the focusing group (νd = 54.7), making it the primary "crown" partner to L22's "flint" role in the chromatic correction of Gr2. The combination of L22 (νd = 30.1, negative power) and L24 (νd = 54.7, positive power) forms the principal achromatic pair within the focusing group.

The patent explains that placing two positive elements (L23 and L24) after L22 provides additional "flexibility in correction of spherical aberration" — the negative spherical aberration generated by these two elements can be distributed between them, allowing finer control than a single post-negative positive element would permit.

### 4.3 Group 3 — Rear Corrector (Surfaces 16–20)

Group 3 has very weak positive power (f = +684.5 mm) and functions as an aberration corrector rather than a significant contributor to system power. It remains stationary during focusing and is responsible for final correction of longitudinal and lateral chromatic aberration, field curvature, and — critically — controlling the residual spherical aberration that defines the lens's bokeh signature.

#### L3N — Cemented Doublet: L31 + L32 (Surfaces 16–18)

This is the only cemented component in the lens, and its design is the subject of conditional formula (5).

**L31 — Positive Meniscus (Surfaces 16–17)**

| Property | Value |
|----------|-------|
| Radii | R₁ = −66.600, R₂ = −37.963 mm |
| Thickness | 3.700 mm |
| Glass | nd = 1.90366, νd = 31.3 → **OHARA S-LAH79** (lanthanum heavy flint) |
| Shape | Positive meniscus, convex to image |
| Individual FL | +92.1 mm (thick lens) |

**L32 — Biconcave Negative (Surfaces 17–18)**

| Property | Value |
|----------|-------|
| Radii | R₁ = −37.963, R₂ = +51.067 mm |
| Thickness | 1.690 mm |
| Glass | nd = 1.64769, νd = 33.8 → **OHARA S-TIH53** (titanium flint) |
| Shape | Biconcave |
| Individual FL | −33.4 mm (thick lens) |

**Combined L3N doublet focal length: −50.6 mm**

The L3N cemented doublet is a masterful piece of aberration engineering. The cement surface (R = −37.963 mm, convex to the image side) sits at the interface between two glasses whose refractive indices differ by |nL31 − nL32| = |1.90366 − 1.64769| = 0.256 — well above the 0.2 minimum required by conditional formula (5).

The patent explains why this works: because the cemented surface is convex to the image side, the astigmatism and distortion generated at this surface are "comparatively suppressed," while the large index difference across the cement allows the surface to produce a controlled amount of spherical aberration "in a way comparatively independent of other aberrations." In other words, this cemented doublet is a spherical aberration tuning mechanism — the designers can adjust the residual spherical aberration (and thus the bokeh character) by modifying the cement surface radius and the index difference, without disturbing the carefully balanced astigmatism and distortion correction.

The choice of S-LAH79 (nd = 1.904) for L31 is significant. This is among the highest-index glasses in the OHARA catalog, sitting near the practical upper limit of commercially available optical glass refractive index. Using it here maximizes the index difference at the cement surface, which maximizes the "tuning range" for spherical aberration control.

#### L3P — Biconvex Positive (Surfaces 19–20)

| Property | Value |
|----------|-------|
| Radii | R₁ = +85.957, R₂ = −85.957 mm |
| Thickness | 6.000 mm |
| Glass | nd = 1.83400, νd = 37.2 → **OHARA S-LAH60V** (lanthanum heavy flint) |
| Shape | Biconvex, equi-radii |
| Focal length | +52.4 mm (thick lens) |

L3P is the final optical element before the image plane and has a distinctive property: its front and rear radii are equal in magnitude (±85.957 mm), making it an equi-biconvex element. This symmetric shape minimizes coma from L3P itself, which is important because it sits far from the stop where off-axis ray heights are significant.

The patent states that placing a positive component after the negative doublet in Gr3 is necessary to control the exit angles of off-axis rays — without it, the rays would emerge at steep angles that would be incompatible with the angular acceptance of digital image sensors. L3P ensures that the telecentric tendency of the exit beam is maintained.

---

## 5. Focusing Mechanism

The focus system is a pure inner-focus design with two variable air gaps:

| Gap | Surface | At infinity | At 0.85 m | Change |
|-----|---------|-------------|-----------|--------|
| Gr1–Gr2 | d₆ | 17.306 mm | 7.706 mm | −9.600 mm |
| Gr2–Gr3 | d₁₅ | 1.700 mm | 11.300 mm | +9.600 mm |

The changes are exactly equal and opposite (Δd₆ + Δd₁₅ = 0.000 mm), confirming that the total track length remains constant — Gr2 translates as a rigid unit toward the object, closing the Gr1–Gr2 gap while opening the Gr2–Gr3 gap by the same amount. At close focus, the Gr2–Gr3 gap is 11.3 mm — a substantial opening that accommodates the full 9.6 mm of travel.

This is a straightforward inner-focus (two-variable-gap) system, not a floating-focus design. Floating focus uses three or more variable gaps with independent group movements to correct close-focus aberrations; here, only a single group moves. The patent's approach to close-focus performance is instead to control aberrations within Gr2 itself (via the single-negative-element architecture described above) so that the group's self-contained correction is adequate across the full focus range.

Note on terminology: some reviews describe this lens as having a "floating elements design." In Nikon's usage, this term refers broadly to any internal-focusing system where air spacings change during focus — it does not necessarily imply the stricter optical-engineering definition of floating focus (independently moving groups). The patent is unambiguous: Gr2 moves as a single unit, while Gr1 and Gr3 remain stationary.

The focusing group (Gr2) consists of four elements totaling approximately 13.5 mm of glass thickness. The patent emphasizes the weight advantage: by limiting Gr2 to a single negative element, the focusing group is lighter than the five-element designs of prior art (Patent Document 2, JP-A-H7-199066), enabling faster Silent Wave Motor-driven autofocus.

---

## 6. Glass Selection Summary

All ten elements use conventional optical glasses — no ED, Super ED, fluorite, or anomalous partial dispersion materials appear anywhere in the design. The glass palette is dominated by OHARA's lanthanum-based families:

| Element | OHARA Glass | Family | nd | νd | Role |
|---------|-------------|--------|------|------|------|
| L11 | S-BSM16 | Barium silicate crown | 1.620 | 60.3 | Front element — durable, good transmission |
| L12 | S-LAH65V | Lanthanum heavy flint | 1.804 | 46.6 | High-index positive — power with low Petzval |
| L13 | S-NBH56 | Niobium high-index flint | 1.806 | 33.3 | Dispersive negative — Gr1 chromatic correction |
| L21 | S-LAH55V | Lanthanum heavy flint | 1.835 | 42.7 | First positive in focusing group |
| L22 | S-TIH18 | Titanium flint | 1.699 | 30.1 | Only negative in Gr2 — chromatic + SA control |
| L23 | S-LAH58 | Lanthanum heavy flint | 1.883 | 40.8 | Second-highest index — gentle post-negative convergence |
| L24 | S-LAL14 | Lanthanum light flint | 1.729 | 54.7 | Crown of Gr2 achromatic pair — highest νd in Gr2 |
| L31 | S-LAH79 | Lanthanum heavy flint | 1.904 | 31.3 | Highest-index in system — cement doublet positive |
| L32 | S-TIH53 | Titanium flint | 1.648 | 33.8 | Cement doublet negative — SA tuning surface |
| L3P | S-LAH60V | Lanthanum heavy flint | 1.834 | 37.2 | Equi-biconvex — exit angle and field correction |

Glass identifications are based on exact nd/νd matching to the OHARA catalog (all matches exact to five decimal places in nd and within 0.1 in νd). OHARA's Hikari subsidiary produces equivalent grades (Q-LAH55, Q-LAH65, etc.) that share identical optical constants, and production may use either interchangeably.

The absence of anomalous partial dispersion glasses means this lens does not achieve apochromatic correction. Secondary spectrum (the residual longitudinal chromatic aberration between the d-line and short-wavelength lines after primary achromatization) is managed but not eliminated. This is consistent with the design philosophy: at f/1.4, the depth of focus is extremely shallow, and secondary spectrum is less perceptible than in longer or slower lenses where it can visibly degrade on-axis sharpness.

---

## 7. Conditional Expression Verification

The patent defines six conditional expressions. All six have been independently verified against Example 1 by paraxial ray trace:

| Formula | Expression | Required Range | Computed Value | Status |
|---------|-----------|---------------|----------------|--------|
| (1) | (R1+R2)/(R1−R2) for L22 | −0.5 to −0.1 | −0.253 | ✓ |
| (2) | f₂₁/f₂₂ (L21 / L22 focal length ratio) | −5 to −1 | −3.905 | ✓ |
| (3) | β₂ (Gr2 lateral magnification at ∞) | 0.05 to 0.55 | 0.321 | ✓ |
| (4) | β₃ (Gr3 lateral magnification at ∞) | 0.9 to 1.2 | 1.048 | ✓ |
| (5) | |nL31 − nL32| (cement index difference) | > 0.2 | 0.256 | ✓ |
| (6) | f₂/f (Gr2/system focal length ratio) | 0.5 to 0.85 | 0.728 | ✓ |

All values match the patent's Table 1 to at least three significant figures. The complete system focal length computes to 85.000 mm, and all three group focal lengths match the patent's stated values to within ±0.01 mm.

---

## 8. Aberration Performance

The patent provides aberration plots for Example 1 at both infinity (POS1) and close focus (POS2). While we cannot reproduce the exact curves without full ray tracing, the plots reveal several notable characteristics:

**At infinity (FNO = 1.45):** Spherical aberration shows the expected under-correction pattern for a fast lens designed with bokeh quality in mind — the curves for the d, g, and c lines spread moderately at full aperture. Astigmatism is well-controlled with the meridional and sagittal surfaces remaining closely spaced to the field edge (Y' = 21.6 mm). Distortion is minimal, well under 2%.

**At close focus (effective FNO = 1.71):** The effective f-number increases from 1.45 to 1.71 at close focus — a larger increase than the simple (1 + |β|) approximation would predict, because in an inner-focus design the pupil magnification changes as the focusing group moves. The astigmatism curves show slightly more separation than at infinity, which is expected — this is the tradeoff inherent in a single-moving-group design without floating-element correction. The patent text acknowledges this and frames it as acceptable: the design deliberately trades some close-focus off-axis correction for focusing-group weight reduction.

**Focus shift:** The deliberate retention of residual spherical aberration has a practical consequence: focus shift. When the lens is stopped down from f/1.4, the best-focus plane shifts axially as the marginal ray contributions (which carry the most spherical aberration) are progressively blocked by the smaller aperture. This is independently confirmed by reviewer testing, which identifies f/2.8 as a particularly problematic aperture where the subject can visibly drift out of the focal plane. The predecessor AF 85mm f/1.4D did not exhibit this behavior to the same degree, suggesting the f/1.4G's residual SA profile — shaped by the patent's single-negative-element architecture and the L3N tuning doublet — trades focus consistency across apertures for the desired wide-open bokeh character. On mirrorless bodies (via FTZ adapter), this issue is mitigated because focusing occurs at the taking aperture rather than wide open.

**Longitudinal chromatic aberration (LoCA):** Reviewers consistently report significant axial color fringing at f/1.4, visible as magenta fringing in front of the focus plane and green behind it. This is the expected consequence of an all-conventional-glass design with no ED or anomalous-dispersion elements — the secondary spectrum is managed but not eliminated. The fringing diminishes progressively on stopping down and is largely gone by f/2.8. Nikon's later designs in the f/1.4 prime series (notably the AF-S NIKKOR 105mm f/1.4E ED, released 2016) introduced ED glass to specifically address this limitation, though at the cost of aspherical elements and greater weight. Nikon's approach with the 85mm f/1.4G appears to have been a deliberate choice: prioritize smooth bokeh and low weight over clinical chromatic correction.

---

## 9. Design Philosophy and Historical Context

The AF-S NIKKOR 85mm f/1.4G represents the culmination of Nikon's traditional approach to fast portrait lenses. All three generations of Nikon 85mm f/1.4 lenses (the AI-s of 1981, the AF-D of 1995, and this AF-S G of 2010) share a commitment to all-spherical construction without exotic glass materials — a design philosophy that prioritizes smooth, predictable bokeh and a distinctive rendering character over the clinical wide-open sharpness that aspherical elements provide.

The patent was filed by Konica Minolta Advanced Layers, Inc., a Konica Minolta subsidiary that manufactures optical devices and components, in collaboration with Nikon Corporation. This type of joint-assignee arrangement — where a specialist optical component manufacturer contributes to the design of a lens marketed by the camera manufacturer — is not uncommon in the Japanese lens industry, though it is notable for a lens in Nikon's flagship f/1.4 prime series.

The design's most distinctive technical contribution is the single-negative-element focusing group. Prior art either used a negative second group (causing large front diameter) or a positive second group with five elements (too heavy for fast AF). By carefully constraining the negative element's shape via conditional formula (1) and supporting it with two trailing positive elements, the designers achieved a focusing group that is both optically adequate and mechanically lightweight.

---

## 10. Appendix: Complete Surface Prescription (Example 1)

For reference, the full surface prescription as given in the patent. All surfaces are spherical. Units are millimeters.

| Surf | R (mm) | d (mm) | nd | νd | Element | Note |
|------|--------|--------|------|------|---------|------|
| 1 | 54.231 | 9.430 | 1.62041 | 60.3 | L11 front | |
| 2 | 281.169 | 0.300 | — | — | L11 rear → air | |
| 3 | 39.221 | 9.640 | 1.80400 | 46.6 | L12 front | |
| 4 | 54.944 | 3.708 | — | — | L12 rear → air | |
| 5 | 72.063 | 2.090 | 1.80610 | 33.3 | L13 front | |
| 6 | 26.207 | **17.306** | — | — | L13 rear → air | Variable (focus) |
| 7 | 55.974 | 2.310 | 1.83481 | 42.7 | L21 front | |
| 8 | 105.851 | 2.814 | — | — | L21 rear → air | |
| 9 | ∞ | 5.935 | — | — | Aperture stop | |
| 10 | −40.001 | 1.200 | 1.69895 | 30.1 | L22 front | |
| 11 | 67.072 | 5.137 | — | — | L22 rear → air | |
| 12 | −426.237 | 3.070 | 1.88300 | 40.8 | L23 front | |
| 13 | −71.448 | 0.150 | — | — | L23 rear → air | |
| 14 | 71.673 | 6.873 | 1.72916 | 54.7 | L24 front | |
| 15 | −58.340 | **1.700** | — | — | L24 rear → air | Variable (focus) |
| 16 | −66.600 | 3.700 | 1.90366 | 31.3 | L31 front | Cemented ↓ |
| 17 | −37.963 | 1.690 | 1.64769 | 33.8 | L31→L32 cement | Cemented ↑ |
| 18 | 51.067 | 2.267 | — | — | L32 rear → air | |
| 19 | 85.957 | 6.000 | 1.83400 | 37.2 | L3P front | |
| 20 | −85.957 | 41.050 | — | — | L3P rear → image | BFD |

**Variable gaps (focus):**

| Focus position | d₆ (mm) | d₁₅ (mm) | β |
|----------------|---------|----------|---|
| Infinity (POS1) | 17.306 | 1.700 | 0 |
| 0.85 m (POS2) | 7.706 | 11.300 | −0.1175 |

---

*Analysis prepared from US 8,767,319 B2 with independent numerical verification of all stated values via paraxial ray trace. Glass identifications are inferential, based on exact nd/νd matching to the OHARA optical glass catalog.*
