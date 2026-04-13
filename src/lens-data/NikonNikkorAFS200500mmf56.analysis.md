# Nikon AF-S NIKKOR 200-500mm f/5.6E ED VR — Optical Analysis

**Patent:** JP 2014-209144 A (Published 2014-11-06)  
**Applicants:** Nikon Corporation / Tamron Co., Ltd.  
**Inventors:** Matsuo Taku, Suzuki Tsuyoshi, Sato Haruo (Nikon); Yamanaka Hisayuki (Tamron)  
**Production embodiment:** Example 2 (第2実施形態)  
**Lens released:** August 2015

---

## 1. Identification of the Production Embodiment

The patent presents four numerical examples. Example 2 was identified as the production embodiment through convergent evidence:

- **Element/group count:** 19 elements in 12 air-separated groups, matching Nikon's published specification exactly.
- **ED element count:** Three elements with vd > 81, matching Nikon's stated "3 ED glass elements."
- **Close focus distance:** 2.2 m, matching the production spec.
- **Constant f/5.6 aperture:** The patent's computed f-numbers (FNo = 4.62–5.78) bracket f/5.6. In production, the electromagnetic diaphragm constrains the maximum aperture to f/5.6 at all focal lengths; the patent values represent the raw optical maximum.
- **All-spherical design:** No aspherical surfaces or coefficient tables appear in any of the four examples. Nikon's marketing materials confirm no aspherical elements.
- **Internal focusing:** Focusing is performed exclusively by axial movement of Group 5 (L5), consistent with Nikon's stated "IF" (Internal Focusing) designation.

Notably, this is a joint Nikon–Tamron patent. The inventor list includes engineers from both companies, and the Tamron address (Saitama) appears alongside Nikon's (Tokyo, plus Tochigi Nikon). This collaboration is consistent with the lens's production: the AF-S 200-500mm f/5.6E is widely understood to have been manufactured by Tamron for Nikon.

---

## 2. Optical Configuration Overview

The design uses six optical groups (L1–L6), of which five participate in the zooming framework described by the patent claims (positive–negative–positive–positive–negative); L6 is an additional fixed rear group. The following table shows the macro-group structure:

| Group | Designation | Power | Elements | Surfaces | Role |
|:-----:|:-----------:|:-----:|:--------:|:--------:|:-----|
| G1 | L1 | Positive | 3 (E1–E3) | S1–S5 | Front objective; collects light, contributes positive power |
| G2 | L2 | Negative | 7 (E4–E10) | S6–S16 | Variator; strongest zoom action, contains VR subgroup |
| G3 | L3 | Positive | 2 (E11–E12) | S17–S19 | Compensator; corrects aberrations from G2 |
| G4 | L4 | Positive | 3 (E13–E15) | S20–S24 | Relay; positive power contribution |
| — | Stop (S25) | — | — | S25 | Aperture diaphragm (between G4 and G5) |
| G5 | L5 | Negative | 2 (E16–E17) | S26–S28 | Focus group; also moves during zoom |
| G6 | L6 | — | 2 (E18–E19) | S29–S32 | Fixed rear group; field flattening |

Nikon's published specification states "19 elements in 12 groups," where "groups" refers to air-separated components. The six macro-groups decompose into 12 air-separated groups as follows:

| Air-sep. group | Elements | Macro-group | Configuration |
|:--------------:|:--------:|:-----------:|:-------------|
| 1 | E1+E2 | G1 (L1) | Cemented doublet |
| 2 | E3 | G1 (L1) | Singlet |
| 3 | E4+E5 | G2 (L2A) | Cemented doublet |
| 4 | E6+E7 | G2 (L2B) | Cemented doublet |
| 5 | E8 | G2 (L2B) | Singlet |
| 6 | E9+E10 | G2 (L2C) | Cemented doublet |
| 7 | E11+E12 | G3 (L3) | Cemented doublet |
| 8 | E13+E14 | G4 (L4) | Cemented doublet |
| 9 | E15 | G4 (L4) | Singlet |
| 10 | E16+E17 | G5 (L5) | Cemented doublet |
| 11 | E18 | G6 (L6) | Singlet |
| 12 | E19 | G6 (L6) | Singlet |

The lens uses 32 optical surfaces (including the flat aperture stop) and has no aspherical surfaces whatsoever — an unusual distinction for a modern zoom of this complexity. All aberration correction is achieved through careful glass selection, cemented doublet pairings, and group power balancing.

### 2.1 Group 2 Substructure

Group 2 is subdivided into three subgroups, a key innovation of this patent:

| Subgroup | Power | Elements | Surfaces | Role |
|:--------:|:-----:|:--------:|:--------:|:-----|
| L2A | Negative | 2 (E4+E5) | S6–S8 | Cemented doublet; conditions the beam entering the VR group |
| L2B | Negative | 3 (E6+E7+E8) | S9–S13 | **VR (vibration reduction) group** — moves perpendicular to axis |
| L2C | Positive | 2 (E9+E10) | S14–S16 | Cemented doublet; cancels negative aberrations from L2A+L2B |

The VR group (L2B) consists of a cemented negative doublet (E6+E7) followed by a 2.0 mm air gap and a negative singlet (E8). The combined focal length of L2B is −86.1 mm, giving it strong negative power that yields high decentering sensitivity — meaning a small lateral shift produces a large image displacement, enabling compact VR actuators with low power consumption.

---

## 3. Aspherical Surfaces

**There are none.** The patent prescription contains no aspherical surface designations, no aspherical coefficient tables, and no mention of aspherical elements in the claims or description. Nikon's published specifications likewise do not mention aspherical elements.

This is noteworthy for a 19-element zoom design released in 2015. The designers achieved adequate aberration correction across a 2.5× zoom range entirely through the combination of seven cemented doublets, careful glass selection (particularly the use of high-index and anomalous-dispersion types), and the three-subgroup decomposition of G2. The absence of aspheres also reduces manufacturing cost, which is consistent with the lens's relatively modest price point for its class.

---

## 4. Glass Identification

### 4.1 The Three ED Elements

Nikon specifies three ED (Extra-low Dispersion) glass elements. These are identified by their very high Abbe numbers (vd > 81):

**Element 2** (nd = 1.49782, vd = 82.57) and **Element 3** (nd = 1.49782, vd = 82.57): These two biconvex elements form the core positive power of the front group G1. Their refractive properties are close to, but not identical with, OHARA S-FPL51 (nd = 1.49700, vd = 81.54) or HOYA FCD1 (nd = 1.49700, vd = 81.61). The small discrepancy (Δnd = +0.00082, Δvd ≈ +1.0) suggests either a proprietary Nikon ED glass formulation, a specific melt variant, or the patent convention of using slightly altered values. Six-digit glass code: 498/826.

**Element 13** (nd = 1.49700, vd = 81.61): This biconvex element in Group 4 is an exact match for OHARA S-FPL51 (code 497/816) or its HOYA equivalent FCD1. It provides the positive power needed in the relay group while simultaneously correcting secondary chromatic aberration.

All three ED elements are biconvex positive lenses positioned at locations where the axial ray height is large — the front group and the relay group. This placement maximizes their chromatic correction effectiveness. Two of the three (E2 and E13) are cemented to higher-index negative partners (E1 and E14, respectively) to form achromatic doublets following the classic positive-ED/negative-flint pairing strategy. E3, by contrast, is a standalone singlet, relying on the upstream cemented doublet (E1+E2) to provide the chromatic balancing for the front group as a whole.

### 4.2 Complete Glass Table

The table below lists all 19 elements with their optical properties, computed focal lengths, and probable glass identifications. Focal lengths are computed via the thick-lens in-air formula. Shape names follow the radius sign convention: "Positive Meniscus" means both radii are positive (convex toward the object), "Negative Meniscus" means both radii are negative (concave toward the object). Note that a few meniscus elements have optical power opposite to what the shape name might suggest — for example, E1 is a "Positive Meniscus" (both R > 0) but has negative optical power (fl = −211.8 mm) because the rear surface is more strongly curved.

| E# | nd | vd | Code | Shape | fl (mm) | Probable Glass | Catalog |
|:--:|:----:|:----:|:----:|:------|:-------:|:---------------|:--------|
| 1 | 1.80400 | 46.60 | 1804/466 | Pos. Meniscus | −211.8 | NBFD11 | HOYA |
| 2 | 1.49782 | 82.57 | 1498/826 | Biconvex | +205.2 | FPL51 variant | — [ED] |
| 3 | 1.49782 | 82.57 | 1498/826 | Biconvex | +236.7 | FPL51 variant | — [ED] |
| 4 | 1.60342 | 38.01 | 1603/380 | Neg. Meniscus | +115.7 | S-TIM27 | OHARA |
| 5 | 1.72916 | 54.67 | 1729/547 | Biconcave | −57.4 | TAC4 / S-LAL18 | HOYA / OHARA |
| 6 | 1.51742 | 52.15 | 1517/522 | Biconcave | −71.6 | S-NSL3 | OHARA |
| 7 | 1.80518 | 25.46 | 1805/255 | Pos. Meniscus | +104.1 | S-TIH6 | OHARA |
| 8 | 1.74330 | 49.22 | 1743/492 | Biconcave | −143.2 | S-NBH51 | OHARA |
| 9 | 1.60738 | 56.82 | 1607/568 | Biconvex | +45.2 | S-BAL35 | OHARA |
| 10 | 1.65844 | 50.85 | 1658/508 | Neg. Meniscus | −59.3 | S-BAH28 | OHARA |
| 11 | 1.90366 | 31.31 | 1904/313 | Pos. Meniscus | −209.5 | S-LAH79 | OHARA |
| 12 | 1.48749 | 70.44 | 1487/704 | Biconvex | +71.6 | N-FK5 / E-FEL1 | Schott / HOYA |
| 13 | 1.49700 | 81.61 | 1497/816 | Biconvex | +99.0 | S-FPL51 / FCD1 | OHARA / HOYA [ED] |
| 14 | 1.83400 | 37.34 | 1834/373 | Neg. Meniscus | −97.2 | S-LAH55V / TAFD5 | OHARA / HOYA |
| 15 | 1.74330 | 49.22 | 1743/492 | Pos. Meniscus | +139.2 | S-NBH51 | OHARA |
| 16 | 1.64769 | 33.84 | 1648/338 | Biconvex | +97.2 | E-ADF10 | HOYA |
| 17 | 1.72916 | 54.67 | 1729/547 | Biconcave | −42.8 | TAC4 / S-LAL18 | HOYA / OHARA |
| 18 | 1.58144 | 40.89 | 1581/409 | Neg. Meniscus | +131.4 | S-TIM2 | OHARA |
| 19 | 1.83481 | 42.72 | 1835/427 | Neg. Meniscus | −121.7 | S-LAH58 | OHARA |

### 4.3 Glass Selection Rationale

The glass palette reflects several deliberate design strategies:

**Chromatic correction hierarchy.** The three ED elements (E2, E3, E13) each have vd > 81, placing them among the lowest-dispersion optical glasses available. They are paired with high-dispersion negative partners (E1 at vd = 46.60; E14 at vd = 37.34) to form achromatic doublets that suppress both primary and secondary longitudinal chromatic aberration. Element 12 (vd = 70.44, likely N-FK5) provides additional low-dispersion contribution in the G3 compensator, where it is cemented to E11 (nd = 1.90366, vd = 31.31) — a very high-index, high-dispersion lanthanum-based glass that provides strong negative correction per unit thickness.

**Anomalous partial dispersion.** The ED elements (S-FPL51 family) are fluorophosphate crown glasses with anomalous partial dispersion, meaning their secondary spectrum departure (ΔθgF) is strongly negative relative to normal glasses. This is critical for a super-telephoto zoom where secondary spectrum would otherwise produce noticeable color fringing at 500 mm.

**VR group optimization.** The VR group (L2B) uses comparatively lightweight glasses: E6 (S-NSL3, nd = 1.517) and E7 (S-TIH6, nd = 1.805 but very thin at 3.8 mm). E8 (S-NBH51, nd = 1.743) is a thin singlet at 1.7 mm. The low density of the crown element and the thinness of all three elements minimize the VR group's mass, directly benefiting actuator size, power consumption, and responsiveness.

**Mixed catalog sourcing.** The glass identifications span OHARA (majority), HOYA, and Schott catalogs. This is consistent with Tamron's known sourcing practices and the joint Nikon–Tamron development.

---

## 5. Element-by-Element Functional Analysis

### Group 1 (L1): Front Objective — Elements 1–3

**E1 (positive meniscus, nd = 1.804)** cemented to **E2 (biconvex ED, nd = 1.498):** This cemented doublet forms the first component of the front group. Element 1 is a high-index flint (HOYA NBFD11) that serves as the negative chromatic corrector for the strongly positive ED element behind it. Despite its meniscus shape being geometrically "positive" (both radii positive, convex toward the object), E1 has negative optical power (fl = −211.8 mm) because the rear surface (R = 122.1 mm) is more strongly curved than the front (R = 436.4 mm). The cemented pair has an extremely long focal length (+5,992 mm) — it contributes almost no net power but provides critical chromatic correction at the entrance aperture where the axial beam diameter is largest.

**E3 (biconvex ED, nd = 1.498):** A standalone singlet separated from the doublet by a 0.3 mm air gap. Its focal length of +236.7 mm makes it the primary positive power contributor in G1. Using ED glass for this element ensures minimal chromatic contribution from the strongest individual positive element in the front group.

The front group collectively has strong positive power, as befits the front element of a telephoto-type zoom. The total variable gap d5 between G1 and G2 increases from 52.1 mm at the wide end to 127.5 mm at the telephoto end — the largest gap excursion in the system — confirming G1's role as the principal zoom mover on the object side.

### Group 2 (L2): Variator — Elements 4–10

This is the most complex group, containing seven elements organized into three subgroups.

**L2A — Elements 4+5 (cemented doublet, fl = −113.6 mm):** E4 is a negative meniscus of moderate-index flint (S-TIM27), cemented to E5, a biconcave crown (TAC4). This negative doublet conditions the beam angle entering the VR group. Its negative meniscus-biconcave configuration generates strong divergence while keeping the exiting chief ray angle manageable for the downstream VR elements.

**L2B (VR Group) — Elements 6+7 (cemented doublet) + E8 (singlet), combined fl = −86.1 mm:** This is the image-stabilization group that shifts perpendicular to the optical axis during vibration reduction.

- E6 (biconcave, S-NSL3, nd = 1.517): A low-index crown with moderate dispersion. The biconcave shape provides strong negative power. As the lowest-index element in the VR group, it is also the lightest, keeping the VR assembly mass down.
- E7 (positive meniscus, S-TIH6, nd = 1.805, vd = 25.46): A very high-dispersion flint cemented to E6. This pairing corrects chromatic aberration within the VR group itself — critical because any residual chromatism in the VR group would produce wavelength-dependent image shift during stabilization, manifesting as color fringing during VR operation.
- E8 (biconcave, S-NBH51, nd = 1.743): A standalone negative element separated from the doublet by a 2.0 mm air gap. It contributes additional negative power to increase the VR group's decentering sensitivity. The air gap between E7 and E8 provides a degree of freedom for correcting the off-axis aberrations (particularly coma and astigmatism) that arise when the VR group is decentered.

**L2C — Elements 9+10 (cemented doublet, fl = +178.2 mm):** E9 is a thick biconvex crown (S-BAL35, d = 9.5 mm) cemented to E10, a thin negative meniscus (S-BAH28). This positive doublet partially cancels the strong negative aberrations generated by L2A and L2B. The patent text (paragraph [0031]) explicitly states that placing a positive subgroup after the VR group allows the VR group's negative power to be strengthened — increasing decentering sensitivity — while the positive L2C compensates the resulting aberration penalty.

**Group 2 overall:** f2 = −68.4 mm. The ratio |f2|/ft = 0.140, well within the patent's condition (1) range of 0.1–0.2. This relatively strong negative power is essential for achieving the 2.5× zoom range within a manageable barrel length, but it also means G2 is the dominant contributor to Petzval field curvature, which the downstream positive groups must compensate.

### Group 3 (L3): Compensator — Elements 11–12

**E11 (positive meniscus, S-LAH79, nd = 1.904) cemented to E12 (biconvex, N-FK5, nd = 1.487):** This doublet has a combined focal length of +107.0 mm. Element 11 is the highest-index glass in the entire system (nd = 1.904). Its meniscus shape is geometrically "positive" (both radii positive, convex toward the object), but it has negative optical power (fl = −209.5 mm) because the rear surface is more strongly curved. Its role in the cemented pair is as the chromatic corrector: paired with the low-dispersion E12, it forms a strongly achromatic positive doublet.

The choice of S-LAH79 (vd = 31.31) paired with N-FK5 (vd = 70.44) gives a large Abbe number difference (Δvd ≈ 39), enabling efficient chromatic correction with moderate curvatures. Element 12's biconvex shape carries the majority of the group's positive power.

G3 moves toward the object during zooming (d16 decreases from 23.8 mm to 2.0 mm wide-to-tele, closing the gap with G2; d19 increases from 1.5 mm to 12.3 mm, opening the gap to G4). The ratio f3/|f2| = 1.564, satisfying condition (5): 1.0 < f3/|f2| < 2.0.

### Group 4 (L4): Relay — Elements 13–15

**E13 (biconvex ED, S-FPL51, nd = 1.497) cemented to E14 (negative meniscus, S-LAH55V, nd = 1.834):** The third and final achromatic ED doublet. The cemented combination is nearly afocal (fl ≈ −5,356 mm — very weakly negative), meaning its primary role is chromatic correction rather than power contribution. The strong positive power of E13 (+99.0 mm) is almost exactly cancelled by the negative power of E14 (−97.2 mm), leaving a residual that aggressively corrects chromatic aberration in the relay section of the zoom.

**E15 (positive meniscus, S-NBH51, nd = 1.743):** A standalone positive element (fl = +139.2 mm) that provides the actual positive power contribution of G4. Its meniscus shape (both radii positive) minimizes spherical aberration contribution while adding convergence to the beam before it reaches the aperture stop.

The gap between G4 and the stop (d24) decreases from 32.6 mm to 5.0 mm during zooming. G2 and G4 are stated to be mechanically fixed during zoom — they do not move axially. This is a key simplification enabling a less complex barrel mechanism, as stated in the patent (paragraph [0014], claim 5).

### Aperture Stop (S25)

The stop is positioned between G4 and G5, moving independently during zoom (paragraph [0016], claim 6). Its independent motion allows the stop diameter to remain constant across the zoom range, which is how the lens achieves its constant f/5.6 maximum aperture. The stop's position between the relay group and the focus group means that the focus group (G5) receives a beam of consistent angular extent regardless of focal length, simplifying the focus group's aberration balance.

### Group 5 (L5): Focus Group — Elements 16–17

**E16 (biconvex, E-ADF10, nd = 1.648, vd = 33.84) cemented to E17 (biconcave, TAC4, nd = 1.729, vd = 54.67):** This negative cemented doublet (fl = −78.3 mm) is the internal focusing group. It serves a dual mechanical role: it moves toward the object during zoom (claim 1 explicitly lists the fifth group among the zoom-moving groups), and it translates toward the image for close-focus. The gaps d25 (stop↔L5) and d28 (L5↔L6) change in equal and opposite amounts during focus, while both also change independently during zoom:

| Position | d25 (mm) | d28 (mm) | Sum (mm) |
|:---------|:--------:|:--------:|:--------:|
| Wide ∞ | 8.21 | 19.82 | 28.03 |
| Wide 2.2m | 13.68 | 14.34 | 28.03 |
| Tele ∞ | 5.87 | 60.81 | 66.68 |
| Tele 2.2m | 26.18 | 40.49 | 66.68 |

The sum d25 + d28 remains constant at each zoom position, confirming unit focus: the focus group translates as a rigid body without changing the overall optical track. The focus throw increases dramatically with focal length — at the tele end, the group must travel 20.3 mm to reach 2.2 m focus, versus 5.5 mm at the wide end. This is physically expected: at longer focal lengths, a given object distance change corresponds to a smaller conjugate shift, requiring more focus-group travel.

The choice of a negative focus group is significant. As the group moves toward the image, it reduces the system's overall positive power, which has the effect of extending the conjugate toward closer objects. This is the opposite of the more common approach of moving a positive group forward, but it has the advantage of keeping the focus group compact and close to the stop — where both the axial and marginal beams pass through a relatively narrow zone. The patent notes (paragraph [0017]) that this proximity to the stop means the focus group diameter need not be excessively large, enabling a more compact and lightweight IF mechanism.

The glass pairing is unusual: E16 uses E-ADF10, a HOYA anomalous-dispersion flint with low Abbe number (33.84). Despite being the positive element in the doublet, it is a flint-type glass. E17 is a crown (TAC4, vd = 54.67). This "reversed" pairing (flint-positive, crown-negative) is deliberate: it provides chromatic correction with the correct sign while maintaining the required negative net power for the focus mechanism.

### Group 6 (L6): Fixed Rear — Elements 18–19

**E18 (negative meniscus, S-TIM2, nd = 1.581, vd = 40.89):** A weakly positive singlet (fl = +131.4 mm) despite its meniscus shape — both radii are negative, but |R2| < |R1| makes the rear surface more strongly curved, yielding net positive power.

**E19 (negative meniscus, S-LAH58, nd = 1.835, vd = 42.72):** A negative singlet (fl = −121.7 mm) with high-index glass.

These two elements are separated by a large fixed air gap of 21.04 mm and are themselves separated from the image plane by a fixed back focal distance of 54.32 mm. The constant BFD across all zoom positions and focus states confirms that G6 is rigidly fixed relative to the sensor. Its role is primarily field correction: flattening the image surface and correcting residual astigmatism and distortion from the upstream groups. The large gap between E18 and E19 provides design freedom for balancing Petzval curvature — the positive E18 followed by the negative E19 acts as a field-flattening pair.

---

## 6. Zoom Mechanism

### 6.1 Moving vs. Fixed Groups

During zoom from 205 mm to 487 mm:

- **Moving groups:** G1 (L1), G3 (L3), and G5 (L5) all move toward the object side, along with the aperture stop which moves independently (claim 6). G5 is notable for having a dual role: it moves during zoom (d28 increases from 19.8 mm to 60.8 mm, pushing G5 toward the object relative to the fixed G6) and also moves during focusing (translating toward the image for close-focus).
- **Fixed groups:** G2 (L2), G4 (L4), and G6 (L6) remain stationary during zoom. G2 and G4 are explicitly stated as fixed in claim 5; G6's fixed status is confirmed by the constant back focal distance (bf = 54.32 mm at all zoom positions).

This means only three lens groups plus the independently-moving stop require zoom cam slots, significantly simplifying the barrel mechanism compared to designs where five or six groups move.

### 6.2 Variable Gap Behavior

| Gap | Location | Wide (mm) | Mid (mm) | Tele (mm) | Zoom behavior |
|:---:|:--------:|:---------:|:--------:|:---------:|:-------------|
| d5 | G1↔G2 | 52.08 | 83.88 | 127.45 | Increases monotonically |
| d16 | G2↔G3 | 23.82 | 10.72 | 2.00 | Decreases monotonically |
| d19 | G3↔G4 | 1.50 | 8.81 | 12.35 | Increases monotonically |
| d24 | G4↔Stop | 32.64 | 23.55 | 4.96 | Decreases monotonically |
| d25 | Stop↔G5 | 8.21 | 11.15 | 5.87 | Non-monotonic (increases then decreases) |
| d28 | G5↔G6 | 19.82 | 31.74 | 60.81 | Increases monotonically |
| bf | G6↔Image | 54.32 | 54.32 | 54.32 | Constant |

The non-monotonic behavior of d25 is notable: the stop-to-G5 gap first widens then narrows as the lens zooms from wide to tele. This means the stop reverses its direction relative to G5 at some intermediate focal length — it initially moves away from G5, then moves back toward it. This reversal is handled naturally by the piecewise-linear interpolation in the renderer.

### 6.3 Total Track Length

The total optical track (first surface to image plane) changes with zoom:

| Position | Track (mm) |
|:--------:|:----------:|
| Wide (205 mm) | 309.3 |
| Mid (300 mm) | 341.1 |
| Tele (487 mm) | 384.7 |

The lens extends by approximately 75 mm from wide to tele. The physical barrel length (267.5 mm from flange, per Nikon spec) accounts for the folded mechanical path and the retracted wide-end position.

---

## 7. Verified Patent Conditional Expressions

The patent specifies five conditional expressions. All were independently verified via thick-lens ABCD matrix ray tracing:

| Condition | Expression | Patent value | Computed value | Range | Status |
|:---------:|:----------:|:------------:|:--------------:|:-----:|:------:|
| (1) | \|f2\|/ft | 0.140 | 0.140 | 0.1–0.2 | ✓ |
| (2) | f2B/f2 | 1.259 | 1.259 | 0.9–1.5 | ✓ |
| (3) | f2AB/f2 | 0.679 | 0.679 | 0.6–0.9 | ✓ |
| (4) | f2C/\|f2\| | 2.606 | 2.607 | 2.0–15 | ✓ |
| (5) | f3/\|f2\| | 1.564 | 1.564 | 1.0–2.0 | ✓ |

Where: f2 = −68.4 mm (Group 2), ft = 487.0 mm (tele EFL), f2B = −86.1 mm (L2B subgroup = E6+E7+E8), f2AB = −46.4 mm (L2A+L2B combined), f2C = +178.2 mm (L2C subgroup = E9+E10), f3 = +107.0 mm (Group 3).

Note that for condition (2), the L2B subgroup includes three elements (the cemented doublet E6+E7 plus singlet E8), not just the cemented doublet alone. This was confirmed by matching the computed conditional values to the patent's stated values — no other subgroup boundary yields the correct ratios.

---

## 8. Computed EFL Verification

Effective focal lengths at each zoom position were computed via full paraxial ray trace and compared against the patent's stated values:

| Position | Patent EFL (mm) | Computed EFL (mm) | BFD (mm) |
|:--------:|:---------------:|:-----------------:|:--------:|
| Wide | 205.04 | 205.04 | 54.39 |
| Mid | 299.98 | 299.98 | 54.29 |
| Tele | 486.97 | 486.97 | 54.36 |

All three values match the patent to within ±0.01 mm, confirming correct transcription of the prescription.

---

## 9. Cemented Doublet Summary

The design relies heavily on cemented doublets — seven in total:

| Doublet | Elements | Group | fl (mm) | Primary function |
|:-------:|:--------:|:-----:|:-------:|:----------------|
| D1 | E1+E2 | G1 (L1) | +5,992 | Chromatic correction at entrance aperture |
| D2 | E4+E5 | G2 (L2A) | −113.6 | Negative power; beam conditioning for VR |
| D3 | E6+E7 | G2 (L2B) | −218.5 | VR doublet; chromatically corrected negative power |
| D4 | E9+E10 | G2 (L2C) | +178.2 | Positive compensator within G2 |
| D5 | E11+E12 | G3 | +107.0 | Achromatic compensator; highest-index element |
| D6 | E13+E14 | G4 | −5,356 | Near-afocal chromatic corrector (ED doublet) |
| D7 | E16+E17 | G5 | −78.3 | Focus group; reversed flint-crown pairing |

The prevalence of cemented doublets is a deliberate cost-quality trade-off: cements are cheaper than equivalent air-spaced groups (fewer alignment-sensitive air gaps), reduce surface reflections (one air-glass interface eliminated per cement), and provide inherent centration stability. For a lens intended as an affordable super-telephoto, this strategy makes excellent sense.

---

## 10. Summary of Key Design Decisions

1. **All-spherical optics** reduce manufacturing cost and eliminate the tight tolerances associated with aspherical surface fabrication, while the seven cemented doublets and three ED elements provide adequate aberration correction.

2. **Three-subgroup G2 with integral VR** (L2A/L2B/L2C) enables a compact, lightweight VR group with high decentering sensitivity, addressed in claims 1–3 and conditions (1)–(4).

3. **Fixed G2, G4, and G6 during zoom** simplifies the barrel mechanism to three moving groups plus the stop, reducing manufacturing complexity and improving mechanical reliability.

4. **Internal focusing via negative G5** adjacent to the stop keeps the focus group small and lightweight, enables fast AF response, and maintains constant lens length during focus.

5. **Constant BFD** (54.32 mm) across all zoom and focus states simplifies the mechanical design and ensures consistent sensor-to-rear-element clearance for F-mount compatibility.

6. **Joint Nikon–Tamron development** enabled cost-effective production with Tamron's manufacturing expertise while leveraging Nikon's optical design heritage, resulting in a lens that brought 500 mm constant-aperture reach to a previously unserved price bracket.

---

## 11. Data File Notes

### 11.1 Semi-Diameter Estimation

The patent provides no semi-diameter values. SDs were estimated via paraxial marginal ray trace at each of the three zoom positions (wide/mid/tele), using the patent's optical f-numbers (FNo = 4.62, 5.24, 5.78 at wide/mid/tele respectively). For each surface, the maximum marginal ray height across all zoom positions was taken, and approximately 8% mechanical clearance was applied. Front group SDs (S1–S5) were capped at 45.5 mm to remain consistent with the production lens's 95 mm filter thread.

The VR subgroup (L2B, surfaces S9–S13) required tighter SDs of 17.5 mm (vs. the 18.5 mm initially estimated with clearance) to satisfy the cross-gap sag overlap constraint at the S11→S12 air gap (2.0 mm). The combined sag intrusion from S11 (R = +99.3 mm, convex) and S12 (R = −411.9 mm, concave) exceeded the gap at 18.5 mm SD but clears at 17.5 mm (combined intrusion = 1.93 mm < 2.0 mm gap). The maximum marginal ray height in this region is ~17.1 mm, so 17.5 mm still provides approximately 2% clearance.

### 11.2 Nominal F-Number

The data file uses the patent's optical f-numbers as a variable-aperture array: `nominalFno: [4.62, 5.24, 5.78]`. The production lens is marketed as constant f/5.6, achieved by the electromagnetic diaphragm constraining the aperture. The patent values were retained for accurate ray tracing and diagram rendering. The marketing specification is documented separately via `apertureMarketing: 5.6`.

### 11.3 Zoom Variable Gaps

Six variable gaps are defined, divided by type:

| Gap | Surface label | Type | Behavior |
|:---:|:---:|:---:|:---|
| d5 | "5" | Zoom only | Monotonic increase (52.1 → 127.5 mm) |
| d16 | "16" | Zoom only | Monotonic decrease (23.8 → 2.0 mm) |
| d19 | "19" | Zoom only | Monotonic increase (1.5 → 12.3 mm) |
| d24 | "24" | Zoom only | Monotonic decrease (32.6 → 5.0 mm) |
| d25 | "STO" | Zoom + focus | Non-monotonic across zoom (8.2 → 11.2 → 5.9 mm) |
| d28 | "28" | Zoom + focus | Monotonic increase (19.8 → 60.8 mm) |

The back focal distance (bf = 54.32 mm) is constant across all zoom and focus states and is therefore not included as a variable gap.

Gap d25 (stop-to-G5) exhibits non-monotonic behavior across the zoom range, first increasing then decreasing. This is handled correctly by the renderer's piecewise-linear interpolation with three zoom positions bracketing the reversal.

### 11.4 Focus Gap Conservation

At each zoom position, d25 + d28 = constant, confirming that G5 translates as a rigid body during focus (unit focus within the zoom framework):

| Position | d25 + d28 |
|:---:|:---:|
| Wide | 28.026 mm |
| Mid | 42.898 mm |
| Tele | 66.676 mm |

The sum varies with zoom because both the stop and G5 move independently during zoom, changing the total space available for focus travel.

### 11.5 Errata and Corrections

No corrections were required to the original analysis during data file preparation. All prescription values, conditional expression results, element focal lengths, and group focal lengths matched the independently computed values to within rounding tolerance. The glass identification table and functional analysis were confirmed as accurate.
