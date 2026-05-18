# Optical Design Analysis: smc Pentax-DA★ 16-50mm f/2.8 ED AL[IF] SDM

## US 7,301,711 B2 — Example 6 (Embodiment 6)

---

## 1. Patent Reference and Design Identification

**Patent:** US 7,301,711 B2, "Fast Zoom Lens System"
**Inventor:** Masakazu Saori (Saitama, JP)
**Assignee:** PENTAX Corporation, Tokyo, JP
**Filed:** November 6, 2006
**Granted:** November 27, 2007
**Priority:** JP P2005-322558, filed November 7, 2005

**Embodiment analyzed:** Numerical Example 6 (Table 6; Figs. 21–24E)

The identification of Example 6 as the production design rests on the following convergent evidence:

1. **Element and group count.** Example 6 contains 15 glass elements in 12 air-separated groups, matching the manufacturer specification exactly (Ricoh Imaging product page: "15 elements in 12 groups").
2. **Focal length range.** The patent states f = 16.48–48.50 mm with a zoom ratio of 2.94×. The production lens covers 16–50 mm — a close match after rounding to a marketing-friendly focal length.
3. **Constant aperture.** F/2.9 across all zoom positions. The production lens is marketed as f/2.8, the nearest standard f-stop; the patent's F/2.9 is the precise paraxial value.
4. **Aspherical element count.** Three elements carry aspherical surfaces in Example 6: a hybrid composite resin asphere in Group 20, a glass asphere in Group 30, and a double-asphere in Group 40. The production lens is specified as having "three aspherical elements."
5. **ED element count.** Two elements use S-FPL51 (nd = 1.49700, νd = 81.6) — one in Group 30 and one in Group 40. The production spec states "two ED (Extra-low Dispersion) elements."
6. **APS-C image circle.** The half-field angles (42.0° wide / 16.2° tele) and back focal distances (39.00–65.07 mm) are consistent with an APS-C sensor (23.5 × 15.7 mm) behind a K-mount flange.
7. **Patent timing.** Priority filed November 2005, granted November 2007; the DA★ 16-50mm was announced and shipped in 2007.
8. **Tokina collaboration.** The lens was jointly developed with Tokina (marketed as the Tokina AT-X Pro 165 AF SD 16-50mm f/2.8 DX for Canon and Nikon mounts). Saori's patent history includes multiple Pentax/Tokina zoom designs from this period.

All six numerical examples in the patent share the same four-group positive–negative–positive–positive architecture, but they differ in element count, group structure, and aspherical placement. Examples 1–3 use a six-element second group (yielding 18 elements / 14 groups); Examples 4–6 use a more compact five-element second group (15 elements / 12 groups). Example 6 specifically differs from Example 5 in several radii, thicknesses, and glass selections — it represents the final optimized production prescription.

---

## 2. Optical Architecture

The design is a four-group positive-lead zoom with power distribution **positive–negative–positive–positive** (P–N–P–P), arranged from object to image. The diaphragm is positioned immediately in front of Group 30 and moves together with it during zooming.

**Group structure at a glance:**

| Group | Power | f (mm) | Elements | Groups | Role |
|-------|-------|--------|----------|--------|------|
| 10 (G1) | Positive | +130.1 | 3 (cemented doublet + singlet) | 2 | Front collector / variator |
| 20 (G2) | Negative | −15.5 | 5 (4 singlets + cemented doublet) | 4 | Variator / compensator |
| 30 (G3) | Positive | +92.6 | 3 singlets | 3 | Relay (fixed imaging group, with stop) |
| 40 (G4) | Positive | +29.0 | 4 (singlet + cemented doublet + singlet) | 3 | Field flattener / imaging relay |

The total power budget is dominated by the strong negative second group (f₂ = −15.5 mm), which acts as the principal zoom variator, and the positive fourth group (f₄ = +29.0 mm), which relays the image to the sensor plane. The first group is intentionally weak (f₁ = +130.1 mm), providing gentle positive power at the front to keep the overall length compact while avoiding excessive spherical aberration at long focal lengths. The third group, also relatively weak (f₃ = +92.6 mm), serves primarily as a relay immediately behind the stop and carries two of the three aspherical elements (indirectly — one of the two ED elements, plus an aspherical glass element).

**Zoom kinematics (Fig. 25):** Upon zooming from wide (W) to tele (T), all four groups and the stop move toward the object. Groups 10, 30, and 40 move monotonically forward; Group 20 first moves rearward (toward the image), then reverses direction and moves forward — a classic non-monotonic variator cam path that allows the patent's three-position piecewise-linear interpolation to capture the reversal. The three variable air gaps evolve as follows:

| Gap | Wide (mm) | Mid (mm) | Tele (mm) | Behavior |
|-----|-----------|----------|-----------|----------|
| d5 (G1–G2) | 3.10 | 17.89 | 36.27 | Increases monotonically |
| d15 (G2–G3) | 20.76 | 10.31 | 3.90 | Decreases monotonically |
| d21 (G3–G4) | 5.39 | 2.80 | 1.27 | Decreases monotonically |

The back focal distance increases from 39.00 mm (wide) to 65.07 mm (tele), accommodating the K-mount flange distance of 45.46 mm plus the reflex mirror clearance required by an SLR.

The architecture is distinguished from the more common negative-lead (N–P–N–P or N–P–P) wide-angle zooms by its positive-lead topology. As the patent text explains (columns 1–2), this positive-lead arrangement is advantageous for miniaturization of the front element diameter and overall lens weight, though it makes securing a long back focal distance more challenging — a problem the patent solves by using a strong negative second group and two positive rear groups.

---

## 3. Element-by-Element Analysis

The following analysis proceeds front-to-rear. Element names use the convention L*gn* where *g* is the group number and *n* is the element position within the group. Focal lengths are thick-lens in-air values computed via ABCD matrix.

### Group 10 — Positive First Lens Group (f₁ = +130.1 mm)

#### L11 — Negative Meniscus (convex to object), cemented

nd = 1.84666, νd = 23.8. Glass: S-TIH53 (OHARA) — high-index dense flint. f = −179.6 mm.

The most object-side element is a negative meniscus of very high-index, high-dispersion flint glass. Its primary role is chromatic: paired with the adjacent positive crown L12 in a cemented doublet, it corrects the longitudinal chromatic aberration that would otherwise accumulate from the positive power of Group 10. The high refractive index (nd = 1.847) allows strong curvatures while keeping the sag manageable at the large front aperture. The meniscus form (R₁ = +228.853, R₂ = +90.908 — both convex toward the object) minimizes the introduction of spherical aberration. The cemented interface at R₂ = 90.908 mm simultaneously serves as an achromatizing junction and eliminates one air–glass reflection, improving contrast.

#### L12 — Positive Meniscus (convex to object), cemented with L11

nd = 1.71300, νd = 53.9. Glass: S-BAL42 (OHARA) — barium crown. f = +141.9 mm.

The positive partner of the cemented doublet. Barium crown was selected for its moderate refractive index and relatively low dispersion compared to the flint partner, yielding a well-corrected achromatic pair. The combined doublet has a long positive focal length, contributing gently to the overall positive power of Group 10 without introducing excessive aberrations. The meniscus shape follows the entering wavefront curvature, a hallmark of well-corrected front groups in zoom systems.

#### L13 — Positive Meniscus (convex to object), singlet

nd = 1.77250, νd = 49.6. Glass: S-LAH63Q (OHARA) — lanthanum crown. f = +158.1 mm.

An air-spaced positive meniscus that adds further positive power to Group 10. The lanthanum crown glass provides a high refractive index at moderate dispersion, allowing the element to bend rays significantly while contributing minimally to chromatic aberration. This element primarily corrects the coma that would arise if all positive power were concentrated in the cemented doublet alone. The air gap between L12 and L13 (d3 = 0.20 mm) is very thin, indicating that the two groups are nearly in contact — the separation exists to decouple aberration contributions and provide a manufacturing alignment datum.

### Group 20 — Negative Second Lens Group (f₂ = −15.5 mm)

Group 20 is the dominant variator. Its strong negative power diverges the beam between Groups 10 and 30, and its axial travel during zooming determines the focal-length change. The group contains five glass elements and one aspherical resin layer, arranged in four air-separated sub-groups.

#### L21 — Negative Meniscus with Hybrid Aspherical Layer (convex to object)

**Resin layer (L21r):** nd = 1.52972, νd = 42.7. Material: UV-cure aspherical resin (not a catalog glass). f = −352.9 mm (resin alone).

**Glass body (L21g):** nd = 1.83481, νd = 42.7. Glass: S-LAH55V (OHARA) — lanthanum dense flint. f = −23.1 mm (glass body alone).

The first element of Group 20 is a hybrid composite: a conventionally polished negative meniscus lens of S-LAH55V glass, with a thin (d = 0.10 mm center thickness) aspherical resin layer bonded to its front surface. The resin layer's outer surface (surface 6*) carries the aspherical profile. This construction avoids the cost and difficulty of grinding and polishing a glass aspherical surface at this relatively large diameter, while still placing the aspherical correction exactly where the marginal ray height is large — maximizing its effectiveness against spherical aberration and distortion at the wide-angle end.

The glass body is a strong negative meniscus (f = −23.1 mm) that provides most of Group 20's diverging power. The high refractive index of S-LAH55V allows the necessary curvatures (R = 50.745 front, R = 13.792 rear — both convex toward the object) without excessive sag at the element rim.

**Aspherical surface 6*:** K = 0, A₄ = +1.7834 × 10⁻⁵, A₆ = −2.4983 × 10⁻⁸, A₈ = +8.4108 × 10⁻¹¹. The positive fourth-order coefficient means the aspherical profile adds refractive power that weakens toward the periphery relative to the spherical base curve. On a negative meniscus near the front of the diverging group, this sign pattern corrects the undercorrected spherical aberration and coma that the strong curvatures of the variator group would otherwise produce — particularly critical at the wide-angle position where d5 is small and the beam entering Group 20 is nearly collimated.

#### L22 — Negative Biconcave

nd = 1.83481, νd = 42.7. Glass: S-LAH55V (OHARA). f = −27.4 mm.

A strongly negative biconcave element (R₁ = −48.189, R₂ = +44.128) sharing the same glass as L21. This element adds further divergence and splits the negative power of Group 20 across multiple surfaces, which distributes the aberration load. The biconcave form is efficient at generating negative power but produces significant higher-order spherical aberration; this is partially compensated by the adjacent positive element L23.

#### L23 — Positive Biconvex

nd = 1.64769, νd = 33.8. Glass: S-TIM27 (OHARA) — titanium flint. f = +27.1 mm.

A positive biconvex element (R₁ = +29.394, R₂ = −39.787) that interrupts the run of negative elements in Group 20. Its purpose is threefold: (1) it provides chromatic correction within the group by pairing a high-dispersion flint (νd = 33.8) against the low-dispersion lanthanum elements L21/L22; (2) it partially offsets the spherical aberration introduced by L22; and (3) it introduces controlled Petzval field-flattening by inserting positive power at a position where the marginal ray height is moderate but the chief ray height is growing. The relatively unusual choice of a titanium flint (high dispersion, moderate index) for a positive element indicates that the designer prioritized chromatic balance within the variator group over minimizing the element's own monochromatic aberrations.

#### L24 — Negative Biconcave (cemented with L25)

nd = 1.80400, νd = 46.6. Glass: S-LAH65V (OHARA) — lanthanum crown. f = −19.1 mm.

The front element of the cemented doublet that closes Group 20. This strong negative (R₁ = −22.186, R₂ = +50.962) is made from a lanthanum crown with moderate dispersion (νd = 46.6). Its primary function is to contribute the remaining negative power needed for the group's overall f₂ = −15.5 mm focal length, while its cemented interface with L25 provides an achromatizing junction that controls the lateral chromatic aberration contribution of the group at the wide-angle end.

#### L25 — Positive Biconvex (cemented with L24)

nd = 1.84666, νd = 23.8. Glass: S-TIH53 (OHARA) — high-index dense flint. f = +30.6 mm.

The positive partner of the cemented doublet. Notably, this is the same glass (S-TIH53) as L11 — a high-index, high-dispersion flint. In a cemented doublet with the lanthanum crown L24, the pairing is unusual: normally the positive element has lower dispersion. Here the designer exploits the very high refractive index of S-TIH53 (nd = 1.847) to achieve the necessary positive power in a thin element, while accepting the chromatic contribution because it is partially compensated by the overall Group 20 chromatic balance. The symmetrical radii (R = ±50.962) suggest deliberate coma cancellation at the cemented interface.

### Diaphragm (Aperture Stop)

The diaphragm is located 2.40 mm in front of the first surface of Group 30 (surface 16). It moves together with Group 30 during zooming. The production lens has 9 aperture blades. The stop position between Groups 20 and 30 is characteristic of four-group zooms: it allows Groups 10 and 20 to handle the entering beam with minimal vignetting, while Groups 30 and 40 work in a near-telecentric exit condition that reduces the angle of incidence on the APS-C sensor.

### Group 30 — Positive Third Lens Group (f₃ = +92.6 mm)

Group 30 is the relay group immediately behind the stop. It moves together with the diaphragm and provides a relatively weak positive contribution, distributing the total positive power between Groups 30 and 40. The patent's conditional expressions emphasize the importance of this power balance: conditions (4) and (5) specifically constrain f₃/f₄ and f₁ × f₄/(f₃)² to prevent over-concentration of power near the stop.

#### L31 — Positive Biconvex (ED)

nd = 1.49700, νd = 81.6. Glass: S-FPL51 (OHARA) — fluorophosphate crown, ED. f = +77.7 mm.

The first of two ED elements. S-FPL51 is an extra-low dispersion fluorophosphate glass with very low refractive index (nd = 1.497) and very high Abbe number (νd = 81.6). Its primary role is secondary-spectrum correction: by placing a low-dispersion positive element immediately behind the stop where the marginal ray height is near its minimum, the designer can reduce the axial chromatic aberration of the overall system without significantly increasing the higher-order monochromatic aberrations. The biconvex form (R₁ = +55.754, R₂ = −122.733) distributes the positive power across two moderately curved surfaces.

#### L32 — Positive Biconvex (Aspherical rear surface)

nd = 1.58636, νd = 60.9. Glass: BSM-class (586/609) — barium silicate crown or phosphate crown; exact catalog match uncertain. f = +39.8 mm.

The strongest positive element in Group 30 and the second aspherical element in the system. The rear surface (surface 19*) carries the aspherical profile. This element provides the bulk of Group 30's convergent power (f = +39.8 mm versus f₃ = +92.6 mm for the group, indicating that L33 partially compensates).

**Aspherical surface 19*:** K = 0, A₄ = −6.7065 × 10⁻⁶, A₆ = −2.7300 × 10⁻⁸, A₈ = 0. The negative fourth-order coefficient on a diverging rear surface (R = −67.745) means the surface becomes less steeply curved at the periphery than a sphere would — the positive power weakens away from the axis. This corrects the field-dependent aberrations (astigmatism and field curvature) that would otherwise arise from a strong positive element near the stop, and contributes to flattening the sagittal field.

#### L33 — Negative Biconcave

nd = 1.83400, νd = 37.2. Glass: S-LAH60 (OHARA) — lanthanum dense flint. f = −26.0 mm.

A negative biconcave element (R₁ = −22.339, R₂ = +719.208 — strongly concave on the object side, nearly flat on the image side) that serves as a Petzval-sum corrector. Its strong negative power partially offsets the positive Petzval contribution of L31 and L32, flattening the field. The high-dispersion lanthanum flint glass (νd = 37.2) also provides chromatic correction within the group by creating an air-spaced achromatic pair with L32. The steep concave front surface faces the diverging chief ray at moderate height, an efficient geometry for field curvature correction without excessive higher-order off-axis aberration.

### Group 40 — Positive Fourth Lens Group (f₄ = +29.0 mm)

Group 40 is the imaging relay that forms the final image on the sensor. It contains the most complex aspherical element and contributes the strongest positive power of any group. The patent text specifically requires (condition 6) that the most object-side positive element in Group 40 have νd > 70 — satisfied here by L41 with νd = 81.6.

#### L41 — Positive Biconvex (ED)

nd = 1.49700, νd = 81.6. Glass: S-FPL51 (OHARA) — fluorophosphate crown, ED. f = +37.6 mm.

The second ED element, identical glass to L31. This element provides the primary positive power of Group 40 (f = +37.6 mm, nearly equal to the group's f₄ = +29.0 mm). The patent's condition (6) requires νd > 70 for this element specifically because it is the dominant contributor to lateral chromatic aberration at the wide-angle end: a high-Abbe-number glass minimizes the chromatic spread of off-axis ray bundles as they converge toward the image. The symmetrical biconvex form (R = ±35.999) is a deliberate choice that equalizes the spherical aberration contributions from the two surfaces, a technique effective when the element is in a converging beam of roughly symmetric cone angle.

#### L42 — Negative Meniscus (cemented with L43)

nd = 1.80518, νd = 25.4. Glass: S-TIH6 (OHARA) — dense flint. f = −81.0 mm.

A weak negative meniscus (R₁ = +1796.044, nearly flat front; R₂ = +62.947) of very high-dispersion flint. Its function is almost purely chromatic: cemented with the positive crown L43, it forms an achromatizing doublet that corrects the longitudinal and lateral chromatic aberration introduced by L41. The very high dispersion (νd = 25.4) means only a thin element is needed to produce the required chromatic correction, keeping the doublet compact. The near-flat front surface indicates that the element contributes minimal power — its role is dispersion control, not ray bending.

#### L43 — Positive Biconvex (cemented with L42)

nd = 1.48749, νd = 70.2. Glass: S-FSL5 (OHARA) — fluorosilicate crown. f = +65.4 mm.

The positive partner of the cemented doublet. S-FSL5 is a low-index, low-dispersion crown that complements the high-dispersion S-TIH6 of L42. The symmetrical biconvex form (R = ±62.947) provides moderate positive power while the cemented interface eliminates ghost reflections between the two elements. This doublet as a whole is weakly positive, serving as a chromatic corrector rather than a primary power element.

#### L44 — Positive Meniscus with Double Aspherical Surfaces (concave to object)

nd = 1.58636, νd = 60.9. Glass: BSM-class (586/609) — same glass as L32. f = +127.1 mm.

The final element of the system and the third aspherical element. Both surfaces (27* and 28*) carry aspherical profiles, making this a double-asphere. The meniscus form is concave to the object (R₁ = −500.000, nearly flat; R₂ = −65.096, moderately concave), with weak positive power (f = +127.1 mm). The patent text specifically recommends placing an aspherical surface on the most image-side element where off-axis ray bundles are most spread, enabling effective correction of coma, astigmatism, and distortion without disturbing on-axis performance.

**Aspherical surface 27* (front):** K = 0, A₄ = −2.0218 × 10⁻⁵, A₆ = −2.7300 × 10⁻⁸, A₈ = +1.0251 × 10⁻¹⁰. The dominant negative A₄ term means the surface's positive power weakens from center to edge — the defining characteristic the patent prescribes for this surface. Because the base radius is very weak (R = −500 mm), the polynomial terms dominate the sag profile: at an estimated semi-diameter of 12 mm, the aspherical departure is approximately 0.46 mm — a substantial departure indicating that this surface carries significant correction burden. This is consistent with the patent's teaching that the final element's asphere is the most effective position for coma correction.

**Aspherical surface 28* (rear):** K = 0, A₄ = −1.6910 × 10⁻⁷, A₆ = −4.1153 × 10⁻⁹, A₈ = +1.4111 × 10⁻¹⁰. The A₄ coefficient is two orders of magnitude weaker than surface 27*, indicating that this surface provides fine-tuning of the off-axis correction rather than primary correction. It primarily adjusts the residual astigmatism and field curvature that surface 27* could not fully eliminate.

---

## 4. Glass Identification and Selection

The design uses 12 distinct optical materials (11 catalog glasses plus one aspherical resin). Seven are used only once; three glasses are used twice. The palette is dominated by OHARA catalog types, consistent with Japanese optical manufacturing practice of this period.

| Glass | nd | νd | Code | Used in | Type | Role |
|-------|----|----|------|---------|------|------|
| S-TIH53 (OHARA) | 1.84666 | 23.8 | 846/238 | L11, L25 | High-index dense flint | Achromatizing flint (high nd enables thin elements) |
| S-BAL42 (OHARA) | 1.71300 | 53.9 | 713/539 | L12 | Barium crown | Achromatic crown partner in G1 doublet |
| S-LAH63Q (OHARA) | 1.77250 | 49.6 | 772/496 | L13 | Lanthanum crown | High-nd positive element in G1 |
| UV-cure resin | 1.52972 | 42.7 | 529/427 | L21r | Synthetic resin | Aspherical molded layer on L21 |
| S-LAH55V (OHARA) | 1.83481 | 42.7 | 834/427 | L21, L22 | Lanthanum dense flint | High-nd negative elements in variator |
| S-TIM27 (OHARA) | 1.64769 | 33.8 | 647/338 | L23 | Titanium flint | Chromatic corrector within G2 |
| S-LAH65V (OHARA) | 1.80400 | 46.6 | 804/466 | L24 | Lanthanum crown | Negative power + achromatizing in G2 |
| S-FPL51 (OHARA) | 1.49700 | 81.6 | 497/816 | L31, L41 | Fluorophosphate crown (ED) | Primary chromatic correction |
| BSM-class | 1.58636 | 60.9 | 586/609 | L32, L44 | Barium silicate crown | Aspherical substrates (moderate nd, low dispersion) |
| S-LAH60 (OHARA) | 1.83400 | 37.2 | 834/372 | L33 | Lanthanum dense flint | Petzval corrector / chromatic balance |
| S-TIH6 (OHARA) | 1.80518 | 25.4 | 805/254 | L42 | Dense flint | Achromatizing flint in G4 doublet |
| S-FSL5 (OHARA) | 1.48749 | 70.2 | 487/702 | L43 | Fluorosilicate crown | Low-dispersion crown in G4 doublet |

**Chromatic strategy:** The design relies on two ED elements (S-FPL51, νd = 81.6) positioned in Groups 30 and 40 — one behind the stop and one in the imaging relay. These are the "two special optical glass elements" referenced in the manufacturer's product description. The achromatizing strategy within each group uses conventional crown–flint pairings: S-TIH53/S-BAL42 in Group 10, S-LAH55V/S-TIM27 within Group 20, and S-TIH6/S-FSL5 in Group 40.

**Note on the 586/609 glass:** The glass used for L32 and L44 (nd = 1.58636, νd = 60.9) does not precisely match any current OHARA S-type catalog entry. It falls in the barium silicate crown region of the nd–νd diagram. Given the Pentax–Tokina collaboration, it may be a Tokina-sourced melt, a Hoya equivalent, or a discontinued OHARA type. The six-digit code 586/609 is consistent with a moderate-index, moderate-dispersion crown suitable for precision glass molding — appropriate for the two aspherical substrates that use this glass.

---

## 5. Focus Mechanism

The production lens is designated **[IF]** (Internal Focus), meaning the front element does not rotate or translate during focusing. The patent, however, only publishes zoom-position data (three focal-length positions at infinity focus) and does not include close-focus air-gap tables. Consequently, the specific focusing group(s) and their travel cannot be determined solely from this patent.

From the manufacturer specification:
- Minimum focusing distance: **0.30 m** (11.81 inches)
- Maximum magnification: **0.21×**
- Focus drive: **SDM** (Supersonic Direct-drive Motor), an ultrasonic-type AF motor built into the lens barrel

In typical IF zoom designs of this era and configuration, focusing is commonly achieved by axially translating a lightweight internal group — most likely a sub-group within Group 30 or Group 20. The light weight of the focusing group is what enables the SDM motor to achieve the rapid, quiet autofocus operation that the lens is known for. The "Quick-Shift Focus System" allows instant override to manual focus without mode switching.

The variable air gaps published in the patent describe only the zoom cam motion:

| Gap | Position | Wide (mm) | Mid (mm) | Tele (mm) | Notes |
|-----|----------|-----------|----------|-----------|-------|
| d5 | G1 rear → G2 front | 3.10 | 17.89 | 36.27 | Increases (G1 moves forward faster) |
| d15 | G2 rear → Stop/G3 | 20.76 | 10.31 | 3.90 | Decreases (G2 lags; G3 advances) |
| d21 | G3 rear → G4 front | 5.39 | 2.80 | 1.27 | Decreases (G3 and G4 converge) |
| BFD | G4 rear → Image | 39.00 | 50.99 | 65.07 | Increases (sensor plane fixed) |

The variable-gap sum is not conserved (29.25 / 31.00 / 41.44 mm at W/M/T), confirming that the overall length of the lens changes during zooming — consistent with the production lens's extending barrel.

---

## 6. Aspherical Surfaces

The design contains **four aspherical surfaces** distributed across **three elements**:

| Surface | Element | Location | Type | Primary correction target |
|---------|---------|----------|------|--------------------------|
| 6* | L21r (resin layer on L21) | G2 front element, object side | Hybrid composite (resin on glass) | SA and coma at wide angle |
| 19* | L32 (glass body) | G3 second element, image side | Polished or molded glass | Field curvature and astigmatism |
| 27* | L44 (glass body) | G4 final element, object side | Polished or molded glass | Coma and distortion |
| 28* | L44 (glass body) | G4 final element, image side | Polished or molded glass | Fine-tune residual field aberrations |

The patent's aspherical sag equation is the standard even-power polynomial with conic constant:

$$Z(h) = \frac{h^2 / R}{1 + \sqrt{1 - (1+K)(h/R)^2}} + A_4 h^4 + A_6 h^6 + A_8 h^8 + A_{10} h^{10}$$

All four surfaces have K = 0 (spherical base curve; the aspherical departure is carried entirely by the polynomial terms). The coefficients are:

| Surface | A₄ | A₆ | A₈ |
|---------|----|----|-----|
| 6* | +1.7834 × 10⁻⁵ | −2.4983 × 10⁻⁸ | +8.4108 × 10⁻¹¹ |
| 19* | −6.7065 × 10⁻⁶ | −2.7300 × 10⁻⁸ | 0 |
| 27* | −2.0218 × 10⁻⁵ | −2.7300 × 10⁻⁸ | +1.0251 × 10⁻¹⁰ |
| 28* | −1.6910 × 10⁻⁷ | −4.1153 × 10⁻⁹ | +1.4111 × 10⁻¹⁰ |

A₁₀ coefficients are not specified by the patent and are zero.

**Note on A₆ values:** Surfaces 19* and 27* share an identical A₆ coefficient (−2.7300 × 10⁻⁸). In Embodiment 5 (Table 5), the corresponding surfaces carry different A₆ values (−0.27625 × 10⁻⁷ and −0.14970 × 10⁻⁷ respectively). The coincidence in Embodiment 6 may reflect a typographical error in the granted patent, or it may be a genuine outcome of the optimization. We take the published values as authoritative.

**Manufacturing notes:** Surface 6* is formed by molding a thin UV-cure resin layer onto the polished glass substrate (L21), a common cost-effective technique for large-diameter aspherics in this era. Surfaces 19*, 27*, and 28* are on glass bodies of the 586/609 material, which may be precision glass-molded (PGM) given its moderate softening temperature and the tight aspherical tolerances required. Surface 27* is a polynomial-dominated asphere: because the base radius is very weak (R = −500 mm, nearly flat), the polynomial terms carry the bulk of the sag. At an estimated semi-diameter of 12 mm (the patent does not publish semi-diameters), the aspherical departure from the base sphere reaches approximately 0.46 mm; at 15 mm it would reach approximately 1.07 mm. These are significant departures that indicate the surface plays a major role in off-axis correction. The "AL" designation in the production lens name stands for "Aspherical Lens."

---

## 7. Paraxial Verification Summary

All computations were performed using ABCD (transfer-matrix) paraxial ray tracing with the patent's full thick-lens prescription at all three zoom positions.

| Parameter | Wide | Mid | Tele | Source |
|-----------|------|-----|------|--------|
| EFL (computed) | 16.481 mm | 28.007 mm | 48.510 mm | ABCD trace |
| EFL (patent) | 16.48 mm | 28.00 mm | 48.50 mm | Table 6 |
| EFL error | 0.001 mm | 0.007 mm | 0.010 mm | — |
| Half-field (computed) | 40.7° | 27.0° | 16.4° | arctan(14.13/EFL) |
| Half-field (patent) | 42.0° | 26.7° | 16.2° | Table 6 |

The minor half-field discrepancy at wide-angle (40.7° vs. 42.0°) reflects the difference between the paraxial marginal-ray half-field and the real-ray vignetting-limited field. The patent's stated 42.0° likely corresponds to the real ray trace with mechanical vignetting constraints.

**Patent conditional expressions (Table 7 verification):**

| Condition | Formula | Computed | Patent (Table 7) | Range | Status |
|-----------|---------|----------|------------------|-------|--------|
| (1) | f₁/f_w | 7.89 | 7.89 | 6.0–10.0 | ✓ |
| (2) | f₃/f_w | 5.62 | 5.62 | 3.0–8.0 | ✓ |
| (3) | f₁/|f₂| | 8.40 | 8.40 | 7.0–10.0 | ✓ |
| (4) | f₃/f₄ | 3.19 | 3.19 | 2.0–5.0 | ✓ |
| (5) | f₁×f₄/(f₃)² | 0.44 | 0.44 | < 1.0 | ✓ |
| (6) | ν_{4p} | 81.6 | 81.6 | > 70 | ✓ |
| (7) | f₁/√(f_w×f_t) | 4.60 | 4.60 | 3.5–6.5 | ✓ |
| (8) | f₃/√(f_w×f_t) | 3.27 | 3.27 | 2.0–5.0 | ✓ |

All eight conditions are satisfied and all computed values match the patent's Table 7 to the reported precision, confirming correct transcription.

**Petzval sum:** 0.00214 mm⁻¹ (Petzval radius ≈ 467 mm). This is a well-corrected value for an APS-C zoom — the image field curvature is gentle relative to the 28.3 mm image diagonal, contributing to the lens's reputation for reasonable edge sharpness when stopped down.

---

## 8. Design Heritage and Context

The smc Pentax-DA★ 16-50mm f/2.8 ED AL[IF] SDM was developed within the longstanding optical collaboration between Pentax Corporation and Tokina. Tokina marketed a closely related design as the **Tokina AT-X 165 PRO DX AF 16-50mm f/2.8** for Canon EF and Nikon F mounts, sharing the same 15-element / 12-group configuration. The two companies are known to have traded optical designs during this period, with each manufacturer applying its own coatings, focus mechanisms, and mechanical construction. The Tokina version uses Tokina's One-touch Focus Clutch mechanism rather than SDM, lacks the DA★ weather-sealing, and carries Tokina's WP (Water Proof) front-element coating rather than Pentax's SP coating. Tokina's marketing references "1 SD (Super-Low Dispersion) glass element" versus Pentax's "2 ED elements," which may reflect either a difference in glass selection or simply a difference in marketing terminology for the same materials. Whether the optical prescriptions are numerically identical or merely closely related cannot be determined from publicly available documentation; the patent (US 7,301,711) is assigned solely to Pentax Corporation.

The positive-lead P–N–P–P four-group architecture is uncommon for wide-angle standard zooms, where negative-lead designs dominate. The patent's introduction explicitly addresses this trade-off: while negative-lead designs offer superior wide-angle coverage and easier back-focal-distance management, they tend to be heavier and larger in diameter. The positive-lead design adopted here achieves a remarkably compact front diameter (77 mm filter thread) and moderate weight (565 g) for a constant f/2.8 zoom with 3× zoom ratio covering the ultra-wide to normal range on APS-C.

The lens was produced from 2007 until 2021, when it was succeeded by the entirely redesigned HD Pentax-DA★ 16-50mm f/2.8 ED PLM AW (a 16-element, 12-group design with PLM focusing motor and updated coatings).

---

## Sources

- US 7,301,711 B2 (Saori, 2007). Full patent text, Tables 1–7, Figures 1–25.
- Ricoh Imaging Americas product page: smc PENTAX-DA★ 16-50mm F2.8 ED AL[IF] SDM (us.ricoh-imaging.com).
- OHARA Optical Glass Catalog (2018/2023 editions): glass-type data sheets for S-TIH53, S-BAL42, S-LAH63Q, S-LAH55V, S-TIM27, S-LAH65V, S-FPL51, S-LAH60, S-TIH6, S-FSL5.
- KEH Camera and Imaging Resource product specifications for element/group counts and MFD.
- lens-db.com entry confirming Pentax–Tokina collaboration and Tokina AT-X 165 cross-listing.
