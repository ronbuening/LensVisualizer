# Canon RF 70-200mm f/2.8 L IS USM — Optical Design Analysis

**Patent:** JP2021-056407A, Numerical Example 3
**Inventors:** Makoto Nakahara (中原 誠), Shunji Iwamoto (岩本 俊二), Shinto Katayose (片寄 慎斗)
**Assignee:** Canon Inc.
**Filed:** 2019-09-30 / **Published:** 2021-04-08

---

## 1. Patent-to-Production Identification

Example 3 from JP2021-056407A is identified as the closest match to the production Canon RF 70-200mm f/2.8 L IS USM (model 3792C002, released November 2019) based on the following convergent criteria:

| Parameter | Patent Example 3 | Production Spec (Canon USA) |
|-----------|------------------|-----------------------------|
| Focal length range | 72.13–194.06 mm | 70–200 mm |
| Maximum aperture | f/2.89 (wide) | f/2.8 |
| Element count | 17 | 17 |
| Aspherical surfaces | 2 | 2 aspherical elements |
| Image circle | 2 × 21.64 mm = 43.28 mm | Full-frame (43.2 mm diagonal) |
| Minimum focus | 0.7 m (inferred from patent text) | 0.7 m (2.3 ft) |
| Zoom ratio | 2.69× | 2.86× (nominal) |

The remaining five examples in the patent cover different designs: Example 1 (72–194 mm, f/4.08, a slower variant), Example 2 (102–490 mm f/4.6–6.8, an entirely different focal range), and Examples 4–6 (various other configurations including APS-C and alternative full-frame designs).

**Note on group count.** The patent describes 7 zoom groups (independently moving units during zoom). Canon's marketing specification of "13 groups" uses the optical convention of counting air-separated sub-groups within zoom groups. Counting air-separated sub-groups within the prescription yields 12, one fewer than the stated 13. This small discrepancy most likely reflects a minor production modification — perhaps an element split or an additional air gap not present in the patent prescription — or a counting convention that includes the flare-cut stop as a group boundary. The fundamental optical architecture is otherwise an exact match.

---

## 2. Optical Architecture

The design is a **positive-lead telephoto-type zoom** with seven zoom groups arranged in a +, −, +, −, +, −, − power sequence:

| Zoom Group | Patent Label | Power | Focal Length | Elements | Role |
|------------|-------------|-------|-------------|----------|------|
| G1 | L1 | Positive | +155.12 mm | 3 (in 2 sub-groups) | Front positive; determines image scale, moves strongly toward object for tele |
| G2 | L2 | Negative | −48.48 mm | 3 (in 2 sub-groups) | Variator / IS group; stationary during zoom, moves laterally for image stabilization |
| G3 | L3 | Positive | +67.04 mm | 1 (asph.) | Compensator; moderate movement during zoom |
| G4 | L4 | Negative | −155.65 mm | 2 (cemented) | Field flattener; adjusts Petzval sum |
| G5 (LP) | L5 | Positive | +38.75 mm | 5 (in 3 sub-groups) | Main positive relay; strongest convergent power in the rear section |
| G6 (LN) | L6 | Negative | −55.03 mm | 1 | Focus group A; moves toward object during zoom, toward image during focus |
| G7 (LR) | L7 | Negative | −224.14 mm | 2 | Focus group B (floating); final aberration correction near the image plane |

The two rear negative groups (LN and LR) create a telephoto-type power arrangement that shortens the overall lens length relative to its effective focal length. This effect is most pronounced at the telephoto end, where the total optical track of 220.03 mm achieves a 194 mm effective focal length — a length-to-EFL ratio of only 1.13. At wide angle, the 161.59 mm track for a 72 mm focal length (ratio 2.24) shows no telephoto shortening, as is typical for the wide end of positive-lead zoom designs.

### Zoom Motion

During zooming from wide to tele, the groups move as follows. Group L1 moves strongly toward the object (−58.44 mm), opening a large gap between L1 and L2 that accounts for the extending barrel. Group L2 remains stationary, serving double duty as the image stabilization group. Groups L3 through L6 all move toward the object by varying amounts, with LN (−20.11 mm) and LR contributing to the telephoto effect. The back focal distance increases from 15.86 mm (wide) to 31.81 mm (tele).

The gap d27 (between G6/LN and G7/LR) exhibits non-monotonic behavior: it decreases from 17.06 mm at wide to 16.73 mm at mid, then increases to 21.22 mm at tele. This reflects a subtle reversal in the relative motion of LN and LR around the mid-zoom position, handled naturally by piecewise-linear interpolation across the three patent zoom positions.

---

## 3. Glass Identification and Special Elements

All 17 elements in Example 3 can be identified against the OHARA optical glass catalog with high confidence — 11 of the 12 unique glass types match to within Δnd < 0.00001 and Δνd < 0.1, indicating that the patent nd/νd values are drawn directly from catalog data rather than being approximations.

### Complete Element Table

| # | Name | nd | νd | Glass (OHARA) | Type | f (mm) | Special |
|---|------|----|----|--------------|------|--------|---------|
| 1 | L1 | 1.49700 | 81.5 | S-FPL51 | UD glass, fluorophosphate | +240.6 | **UD** |
| 2 | L2 | 1.61340 | 44.3 | S-BAM4 | Barium flint | −163.3 | — |
| 3 | L3 | 1.43875 | 94.7 | S-FPL55 | Extreme anomalous PD fluorophosphate | +117.3 | **Super UD** |
| 4 | L4 | 1.59282 | 68.6 | S-FPM2 | Fluorophosphate crown | −101.2 | — |
| 5 | L5 | 1.76385 | 48.5 | S-LAH65V | Lanthanum crown | −36.6 | — |
| 6 | L6 | 1.85478 | 24.8 | S-TIH14 | Dense flint | +58.3 | — |
| 7 | L7 | 1.49700 | 81.5 | S-FPL51 | UD glass, fluorophosphate | +67.0 | **UD + Asph (GMo)** |
| 8 | L8 | 1.59270 | 35.3 | S-TIM2 | Titanium flint | −34.7 | — |
| 9 | L9 | 1.72825 | 28.5 | S-TIH6 | Dense flint | +46.5 | — |
| 10 | L10 | 2.05090 | 26.9 | S-NPH2 | Ultra-high-index dense flint | −67.8 | — |
| 11 | L11 | 1.49700 | 81.5 | S-FPL51 | UD glass, fluorophosphate | +54.6 | **UD** |
| 12 | L12 | 1.49700 | 81.5 | S-FPL51 | UD glass, fluorophosphate | +65.7 | **UD** |
| 13 | L13 | 2.05090 | 26.9 | S-NPH2 | Ultra-high-index dense flint | −103.4 | — |
| 14 | L14 | 1.90043 | 37.4 | S-LAH58 | Lanthanum crown | +59.9 | — |
| 15 | L15 | 1.61800 | 63.4 | S-PHM52 | Phosphate crown | −55.0 | — |
| 16 | L16 | 1.85478 | 24.8 | S-TIH14 | Dense flint | +89.7 | — |
| 17 | L17 | 1.58313 | 59.4 | S-BAL42 | Barium crown | −60.6 | **Asph (GMo)** |

Focal lengths are computed via the thick-lens (lensmaker's) equation from the patent prescription values and independently verified by script.

### Canon's Special Element Designations

Canon's official specification lists the special elements as: 1× Super UD, 3× UD, 2× Aspheric. The patent prescription contains 1 element matching Super UD glass (element 3, S-FPL55) and 4 elements using UD-class glass (elements 1, 7, 11, 12 — all S-FPL51). The apparent discrepancy between 4 UD elements in the prescription and 3 in the marketing spec is explained by Canon's convention of not double-counting element 7, which is listed under "Aspheric" rather than "UD" in the specification sheet. Canon Optical Design specialist Kenji Shinohara explicitly described element 7 as a "UD aspherical lens" in a developer interview published by Canon Europe, confirming its dual nature.

### Anomalous Partial Dispersion Elements

Five elements employ anomalous partial dispersion (APD) glasses — all in the S-FPL family — making this design heavily dependent on APD correction for controlling secondary spectrum across the zoom range. The S-FPL55 element (L3, νd = 94.7) in the front group provides the most extreme anomalous dispersion in the system and corresponds to Canon's "Super UD" designation. Its OHARA-published anomalous dispersion is ΔθgF ≈ +0.046, making it among the most effective secondary spectrum correctors available in a melt glass (as opposed to crystal fluorite, CaF₂).

**Note on L3 glass identification.** Both S-FPL53 and S-FPL55 share nd = 1.43875 exactly, but they differ in Abbe number: S-FPL53 has νd = 94.95 while S-FPL55 has νd = 94.66. The patent specifies νd = 94.7, which matches S-FPL55 (Δνd = 0.04) far more closely than S-FPL53 (Δνd = 0.25). Given that all other glasses in this patent match their catalog values to Δνd < 0.1, S-FPL55 is the confident identification. Both glasses are extreme anomalous dispersion fluorophosphates and either would qualify for Canon's "Super UD" designation.

The S-FPL51 elements (L1, L7, L11, L12, νd = 81.5, ΔθgF ≈ +0.028) are distributed strategically: one in the front group for primary color correction across the zoom range, one as the aspherical element immediately behind the stop for simultaneous spherical aberration and chromatic correction, and two in the powerful G5 relay group where axial ray heights are significant.

### Ultra-High-Index Flints

Elements L10 and L13 use S-NPH2 (nd = 2.05090, νd = 26.9), one of the highest-refractive-index optical glasses commercially available. At nd > 2.0, this glass provides extreme negative power in a compact element thickness, which is essential for the tight cemented doublet arrangements in Group G5 where it is paired with S-FPL51 UD glass to form powerful chromatic correction cells.

---

## 4. Aspherical Surfaces

The design uses two glass-molded (GMo) aspherical surfaces. Canon's developer interview confirms both are glass-molded rather than hybrid (resin-on-glass) elements. The rear aspheric (surface 30) is additionally treated with Sub-Wavelength Coating (SWC) to control flare and ghosting.

### Surface 13 — Element L7 Front (UD Aspherical)

This is the front surface of the biconvex UD glass element (S-FPL51) positioned directly behind the aperture stop in Group G3. It is the sole element in this zoom group.

| Parameter | Value |
|-----------|-------|
| Base radius | R = +52.335 mm |
| Conic constant | K = 0 (sphere base) |
| A4 | −1.09244 × 10⁻⁶ |
| A6 | +1.04634 × 10⁻⁹ |
| A8 | +2.02132 × 10⁻¹³ |
| A10–A12 | 0 |

At an estimated semi-diameter of ~18.5 mm, the aspherical departure from the base sphere is approximately −77 μm (the surface is flatter than the base sphere at the rim). This represents a ~2.4% sag modification. The negative A4 coefficient indicates the surface progressively flattens toward the margin, reducing the zone of maximum curvature — a classic correction profile for undercorrected spherical aberration from a fast telephoto system.

**Optical role.** Positioned immediately behind the stop where axial marginal rays are at their highest, this element simultaneously addresses spherical aberration (via the aspheric departure) and axial chromatic aberration (via the S-FPL51 UD glass). The developer interview specifically attributes spherical aberration correction and overall length reduction to this element. Only three coefficients (A4, A6, A8) are non-zero, indicating a well-behaved aspherical departure appropriate for glass molding.

### Surface 30 — Element L17 Front (Rear Correction Asphere)

This is the front surface of the final negative meniscus element in Group G7 (LR), positioned near the image plane.

| Parameter | Value |
|-----------|-------|
| Base radius | R = −23.301 mm |
| Conic constant | K = 0 (sphere base) |
| A4 | +1.09140 × 10⁻⁵ |
| A6 | +1.43304 × 10⁻⁸ |
| A8 | −2.54590 × 10⁻¹¹ |
| A10 | +1.38882 × 10⁻¹³ |
| A12 | −1.16760 × 10⁻¹⁶ |

The paraxial ray trace yields a maximum marginal ray height of approximately 5.6 mm at this surface at the tele end. With off-axis chief ray contributions the effective clear aperture is estimated at ~6.5 mm SD. At this height the aspherical departure is substantially smaller than the ~266 μm figure originally estimated at a 12 mm assumed SD. The quantitative departure at any given height should be computed directly from the aspheric sag equation. The five non-zero polynomial coefficients extending to A12 indicate a complex correction profile near the edge of the clear aperture.

**Optical role.** Near the image plane, off-axis ray bundles are well-separated by field angle, making this surface effective for correcting field-dependent aberrations: field curvature, astigmatism, and distortion. The strong positive A4 term makes the surface less concave at the margin than the base sphere — effectively reducing the negative power at the rim and flattening the field. Shinohara notes in the developer interview that this glass-molded aspherical element "close to the image plane is treated with special SWC to reduce flares and ghosts." The S-BAL42 glass (nd = 1.583, νd = 59.4) is a barium crown suitable for precision glass molding due to its relatively low transformation temperature.

---

## 5. Element-by-Element Optical Role Analysis

### Group G1 — Front Positive Group (L1 + L2/L3 cemented doublet)

**Element L1** (S-FPL51, UD, positive meniscus, f = +240.6 mm): The first element in the system, with both radii positive (R1 = +99.6, R2 = +581.4) forming a meniscus shape. As a low-dispersion positive element at the front, it collects and converges the incoming light while introducing minimal chromatic aberration. Its long focal length means it contributes gently to the overall convergence — the real work of G1's +155 mm combined power comes from the cemented doublet behind it.

**Elements L2 + L3** (S-BAM4 / S-FPL55, cemented doublet): This is the most important chromatic correction cell in the front group. L2 is a negative meniscus of moderate-dispersion barium flint (νd = 44.3) cemented to L3, a thick plano-convex element of Super UD glass (S-FPL55, νd = 94.7). The enormous Abbe number difference (Δνd = 50.4) between the two elements creates powerful chromatic correction. L3's flat rear surface (R = ∞) and substantial thickness (12.70 mm) indicate it carries significant positive power while maintaining a manageable edge thickness for manufacturing.

The average Abbe number of the positive elements in G1 (L1 and L3) is νd = 88.10, which is listed directly in the patent's Table 1 as νd1Pave and satisfies conditional expression (12): 65.00 < 88.10 < 99.00. This confirms that the front group's chromatic correction relies on combining two types of anomalous-dispersion glass.

### Group G2 — Variator / IS Group (L4 + L5/L6 cemented doublet)

This group is notable for being **stationary during zoom** (patent claim 16). It serves as the image stabilization unit, moving perpendicular to the optical axis to correct image shake (patent claim 17). Keeping it stationary during zoom simplifies the IS drive mechanism. The group is preceded by a flare-cut stop (FP, surface 6) that blocks stray marginal rays from the front group.

**Element L4** (S-FPM2, biconcave, f = −101.2 mm): A fluorophosphate crown element with relatively high Abbe number (νd = 68.6). Its front radius is very weakly curved (R = −617.95 mm, nearly flat), but the sign convention confirms both surfaces curve to create a biconcave shape. It provides negative power with controlled chromatic contribution, and its position before the cemented doublet helps manage the beam diameter entering the IS unit.

**Elements L5 + L6** (S-LAH65V / S-TIH14, cemented doublet): A powerfully divergent doublet. L5 is a strong negative biconcave element (f = −36.6 mm) of lanthanum crown, cemented to L6, a positive meniscus of dense flint (S-TIH14, νd = 24.8). The combination provides strong negative power (the group's overall f = −48.48 mm derives primarily from this doublet) while partially correcting the chromatic aberration introduced by the negative power. The S-LAH65V lanthanum crown (nd = 1.764) provides a good refractive index–dispersion balance for compact variator elements.

### Group G3 — Compensator (L7, aspherical)

**Element L7** (S-FPL51, UD, glass-molded aspheric biconvex, f = +67.0 mm): The sole element of this zoom group and one of the most optically important elements in the design. Positioned directly behind the aperture stop where axial marginal ray heights peak, it performs simultaneous correction of spherical aberration (via the aspherical front surface) and axial chromatic aberration (via the S-FPL51 UD glass). The group focal length (+67.04 mm) directly matches the single-element thick-lens calculation (+67.0 mm), confirming the element alone constitutes the entire group.

This element moves only −7.51 mm during zoom (the smallest movement of any moving group), acting as a fine compensator that maintains aberration balance as the other groups shift.

### Group G4 — Negative Field Flattener (L8/L9 cemented doublet)

**Elements L8 + L9** (S-TIM2 / S-TIH6, cemented doublet, f = −155.65 mm): A weakly negative cemented doublet using two flint glasses with very low Abbe numbers (νd = 35.3 and 28.5). Both glasses are on the high-dispersion side, which is unusual for a correction cell — normally one would pair a crown with a flint. Here, the purpose is not chromatic correction per se but Petzval sum management. The patent description (paragraph [0030]) explicitly notes that placing multiple negative groups near the image creates a tendency toward excessive negative Petzval sum (resulting in backward-curving fields). This weakly negative doublet, positioned between the strong positive G5 and the aperture stop, provides a gentle counterbalance.

### Group G5 (LP) — Main Positive Relay (L10/L11, L12/L13, L14)

This is the most complex zoom group: five elements in three air-separated sub-groups, with a combined focal length of +38.75 mm — the strongest positive power of any group in the system.

**Elements L10 + L11** (S-NPH2 / S-FPL51, cemented doublet): An ultra-high-index flint (nd = 2.051) paired with a UD glass. The S-NPH2 negative element (f = −67.8 mm) and S-FPL51 positive element (f = +54.6 mm) form a powerful achromatic correction cell. The extreme refractive index of S-NPH2 allows the cemented interface to have strong differential curvature (R = +45.374 mm) in a physically thin package.

**Elements L12 + L13** (S-FPL51 / S-NPH2, cemented doublet): An inverted version of the L10/L11 doublet — UD glass first, then ultra-high-index flint. The power arrangement is reversed (L12 positive at +65.7 mm, L13 negative at −103.4 mm), creating a net positive sub-group that provides additional achromatic correction. Using the same glass pair in both doublets but with inverted element order is a hallmark of systematic aberration balancing: the residual higher-order chromatic aberrations from one doublet partially cancel those from the other.

**Element L14** (S-LAH58, biconvex, f = +59.9 mm): A single positive lanthanum crown element that adds convergent power to the group. S-LAH58 (nd = 1.900, νd = 37.4) has the highest refractive index of the crown-type glasses in the system, allowing a relatively weakly curved element to contribute significant power. Its position at the rear of G5 converges the beam before it enters the focus groups.

### Group G6 (LN) — Focus Group A (L15)

**Element L15** (S-PHM52, negative meniscus, f = −55.0 mm): A single phosphate crown element that constitutes the primary focus group. This is one of the two groups driven by Canon's dual Nano USM focus motors. During focusing from infinity to close distance, L15 moves toward the image side (patent claim 15, paragraph [0044]). During zoom, it moves toward the object (−20.11 mm from wide to tele), creating available travel space on its image side that is exploited for close-focus movement at the telephoto end.

The choice of S-PHM52 (nd = 1.618, νd = 63.4) is driven by weight considerations: as a focus element driven by a small USM motor, low mass is critical for fast autofocus response. The moderate refractive index and relatively large Abbe number make this a lightweight but chromatically well-behaved focusing element.

### Group G7 (LR) — Focus Group B / Floating Group (L16, L17)

**Element L16** (S-TIH14, positive meniscus, f = +89.7 mm): A dense flint element with positive power, positioned as the first element of the floating focus group. Despite being a flint glass (νd = 24.8), it serves a primarily monochromatic correction role — managing coma and astigmatism that change as the primary focus group (L15) moves.

**Element L17** (S-BAL42, glass-molded aspheric negative meniscus, f = −60.6 mm): The final optical element before the image plane and the second aspherical element in the system. Its aspherical front surface corrects residual field curvature and distortion across the zoom range. Canon's developer interview confirms this element carries SWC (Sub-Wavelength Coating) — necessary because its position near the image plane makes it susceptible to flare from stray light reflecting off the sensor and returning to the rear element surfaces.

The two-element floating group (L16 + L17) is driven by the second Nano USM motor and moves independently of the primary focus group (L15). This electronic floating focus control — described by Canon as "a Canon first" in the developer interview — allows independent optimization of focus and aberration correction during close-up shooting, which is how the lens achieves its 0.7 m minimum focus distance (versus 1.2 m for the predecessor EF 70-200mm f/2.8L IS III USM).

---

## 6. Focus Mechanism: Dual Nano USM Electronic Floating Focus

The Canon RF 70-200mm f/2.8 L IS USM was the first Canon lens to employ electronic floating focus control with two independent Nano USM motors. This system was described in detail by Canon Optical Design specialist Kenji Shinohara in the Canon Europe/CNA developer interview.

**Focus Group A (LN, G6):** Element L15, a single phosphate crown negative meniscus. Moves toward the image plane during infinity → close focus (patent claim 15). At the telephoto end, the zoom-induced forward motion of this group opens up space on its image side, which is then used for close-focus travel — a clever mechanical arrangement that eliminates the need for additional barrel length at close focus.

**Focus Group B (LR, G7):** Elements L16 + L17. The "floating" group moves independently to compensate for aberration changes introduced by the primary focus group's motion. This independent control — as opposed to the mechanically coupled cam-driven floating focus systems in earlier EF telephoto designs — allows the focus correction to be optimized electronically at every focus distance and zoom position, rather than being constrained to a single mechanical cam profile.

The patent does not provide explicit close-focus variable gap data, so the exact travel distances at close focus cannot be determined from the patent alone. The variable gaps d25 (before LN) and d27 (after LN) are the spaces that change during focus, while d31 (BFD) changes as the floating group moves. The accompanying `.data.ts` file uses zoom-only variable gaps with identical infinity and close-focus values as a placeholder.

### Variable Gaps at Infinity Focus (Zoom Only)

| Gap | Wide | Mid | Tele | ΔW→T | Location |
|-----|------|-----|------|------|----------|
| d5 | 1.50 | 26.97 | 59.94 | +58.44 | G1 → G2 (barrel extension) |
| d11 | 10.41 | 9.24 | 2.90 | −7.51 | G2 → G3 |
| d14 | 9.57 | 12.46 | 18.11 | +8.54 | G3 → G4 |
| d17 | 9.69 | 6.80 | 1.15 | −8.54 | G4 → G5 |
| d25 | 13.80 | 10.49 | 1.21 | −12.59 | G5 → G6 (LN) |
| d27 | 17.06 | 16.73 | 21.22 | +4.16 | G6 (LN) → G7 (LR) |
| d31 | 15.86 | 20.68 | 31.81 | +15.95 | G7 (LR) → image (BFD) |

The non-monotonic behavior of d27 (decreasing from wide to mid, then increasing to tele) reflects the complex cam profile of G6/LN — its motion includes a reversal relative to G7 around the mid-zoom position.

---

## 7. Image Stabilization

The patent (claims 16–17) specifies that Group G2 (L2) is stationary during zoom and moves perpendicular to the optical axis for image stabilization. Keeping the IS group stationary during zoom simplifies the mechanical decoupling required between the zoom drive and the IS actuator. G2's focal length of −48.48 mm and its position between the large front group and the stop make it effective for IS — a small lateral shift of this divergent group produces a significant angular correction at the image plane while keeping the moving mass compact.

---

## 8. Semi-Diameter Estimation

The patent does not provide semi-diameter (clear aperture) data. Semi-diameters for the `.data.ts` file were estimated using the following methodology:

1. **Paraxial marginal ray trace** at all three zoom positions (wide 72.13 mm, mid 100.00 mm, tele 194.06 mm) with entrance pupil radii computed from the patent f-numbers (F/2.89 wide/mid, F/2.91 tele).
2. **Maximum height envelope**: At each surface, the maximum absolute ray height across all three zoom positions was taken.
3. **10% mechanical clearance** added to the maximum height to account for manufacturing tolerances and off-axis beam contributions not captured by the on-axis marginal ray.
4. **Front element cross-check**: The Canon RF 70-200 f/2.8 uses a 77 mm filter thread, implying a front element clear aperture of approximately 74 mm diameter (SD ≈ 37 mm). The paraxial estimate of 36.7 mm is consistent with this.

Key SD values from the trace (selected surfaces):

| Surface | Max Ray Height (mm) | Estimated SD (mm) | Note |
|---------|--------------------|--------------------|------|
| S1 (L1 front) | 33.34 | 37.0 | Tele-limited; filter cross-check |
| S6 (FP) | 17.20 | 19.0 | Flare-cut aperture |
| STO | 12.66–16.55 | 13.0 | Set for wide-end; renderer adjusts per zoom |
| S13A (L7 asph) | 16.61 | 18.5 | Stop-adjacent; tele-limited |
| S26 (L15 front) | 11.92 | 13.0 | Focus group A |
| S30A (L17 asph) | 5.62 | 6.5 | Rear correction asphere |

These SDs are estimates based on on-axis paraxial optics only. Off-axis ray bundles at the field edge will require somewhat larger apertures, particularly at the front of the lens. The values are suitable for the interactive lens diagram renderer but should not be treated as precision mechanical specifications.

---

## 9. Conditional Expressions Verification

All twelve conditional expressions from the patent claims are satisfied by Example 3. Values are computed from the patent's Table 1 data and independently verified:

| Expression | Definition | Value | Range | Status |
|-----------|-----------|-------|-------|--------|
| (1) | fLN/f2 | 1.135 | 0.10–1.20 | ✓ |
| (2) | ML3/MLN | 0.373 | 0.25–0.70 | ✓ |
| (3) | DSPw/TDw | 0.660 | 0.45–0.95 | ✓ |
| (4) | ΔD2/ΔD1 | −0.128 | −0.35–(−0.01) | ✓ |
| (5) | SKw/fw | 0.220 | 0.05–0.50 | ✓ |
| (6) | SKw/SKt | 0.499 | 0.05–0.60 | ✓ |
| (7) | LDw/fw | 2.240 | 1.0–3.5 | ✓ |
| (8) | fLP/f1 | 0.250 | 0.10–0.70 | ✓ |
| (9) | fLN/fLR | 0.245 | 0.05–1.50 | ✓ |
| (10) | |ML3/ML1| | 0.129 | 0–0.50 | ✓ |
| (11) | (tβLN/wβLN)/(ft/fw) | 0.587 | 0.15–0.70 | ✓ |
| (12) | νd1Pave | 88.10 | 65.00–99.00 | ✓ |

**Notes on key expressions:**

Expression (3) is particularly informative: with DSPw/TDw = 0.660, the aperture stop is positioned approximately two-thirds of the way from the front to the rear of the lens at wide angle. This rearward stop placement is essential for the telescoping barrel design — it keeps the front group diameter manageable while allowing the rear groups (which carry most of the aberration correction burden) to operate at smaller beam diameters.

Expression (4) describes the relative gap changes between L1–L2 and L2–L3 during zoom. The negative value (−0.128) indicates that the L2–L3 gap change is opposite in sign and smaller in magnitude than the L1–L2 gap change, consistent with L2's stationary position during zoom.

Expression (11) characterizes the magnification change of the negative lens group LN across the zoom range relative to the overall zoom ratio. At 0.587, LN contributes a moderate proportion of the total zoom, consistent with its role as a secondary variator supplementing the primary zoom action of L1 and L3.

Expression (12) confirms the front group's reliance on high-νd anomalous-dispersion glasses: the mean Abbe number of L1 (νd = 81.5) and L3 (νd = 94.7) is 88.10.

---

## 10. Design Innovations and Key Takeaways

**Telescoping barrel.** The 58.44 mm zoom extension (d5 change from wide to tele) is the mechanical basis for the lens's retracted compactness. At 146 mm retracted length and 1,070 g, the lens was Canon's shortest and lightest 70-200mm f/2.8 at the time of release — 50 mm shorter and nearly one-third lighter than the EF 70-200mm f/2.8L IS III USM.

**Five anomalous-dispersion elements.** The aggressive use of S-FPL51 (4 elements) and S-FPL55 (1 element) is unusual for a zoom lens of this type and reflects the challenge of controlling chromatic aberration across a 2.7× zoom range at f/2.89. The S-NPH2 ultra-high-index flint elements in G5 are the complementary half of this strategy, providing the necessary negative chromatic power in compact cemented doublets.

**Electronic floating focus.** The dual Nano USM system with independent control of the focusing lens and floating lens was a Canon first. It reduced the minimum focus distance from 1.2 m (EF predecessor) to 0.7 m while improving close-up image quality through real-time electronic optimization.

**IS decoupled from zoom.** By keeping G2 stationary during zoom, the IS mechanism avoids the complexity of compensating for zoom-induced position changes, simplifying the actuator design and improving IS reliability.

---

## 11. Known Limitations of This Analysis

1. **Close-focus data absent.** The patent provides variable gap data only at infinity focus across the three zoom positions. The close-focus behavior of the dual Nano USM groups (LN and LR) cannot be modeled from the patent alone.

2. **Semi-diameters estimated.** All clear aperture values are estimated from paraxial on-axis ray tracing with 10% clearance. Off-axis contributions are not captured, particularly at the front of the lens where the field angle is substantial at wide angle.

3. **Group count discrepancy.** The patent's 12 air-separated sub-groups vs. Canon's marketed 13 groups remains unresolved. The most likely explanation is a minor production modification not reflected in this patent example.

4. **Third-party source limitations.** Glass identification relies on nd/νd matching against the OHARA catalog. While all matches are high-confidence (Δνd < 0.1 for all but the S-FPL55/53 pair, which is resolved at Δνd = 0.04), Canon may use internally specified glass variants with subtly different properties.

---

## Sources

- JP2021-056407A, Numerical Example 3 (full prescription, variable spacings, conditional expressions, Table 1)
- Canon USA product page for RF70-200mm F2.8 L IS USM (specifications: 17 elements/13 groups, special elements, 77mm filter, 0.7m MFD)
- Canon Europe/CNA developer interview with Kenji Shinohara (Optical Design), Kazuharu Osawa (Mechanical Design), et al.
- OHARA optical glass catalog and Zemax catalog 2017-11 (glass identification by nd/νd matching; ΔθgF values via refractiveindex.info)
