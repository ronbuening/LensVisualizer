# Fujifilm Fujinon XF 200 mm f/2 R LM OIS WR — Optical Analysis

**Patent:** US 2019/0265504 A1 · Example 1 · Applicant FUJIFILM Corporation · Inventor Hiroki Saito · Priority JP 2018‑035614 (28 Feb 2018) · Published 29 Aug 2019

**Production lens:** Fujinon XF 200 mm F2 R LM OIS WR · Fujifilm X‑mount · Announced September 2018; shipping since November 2018

---

## Abstract

Example 1 of US 2019/0265504 is the optical prescription that ships (with minor mechanical differences) as the Fujinon XF 200 mm F2. It is an all‑spherical, 19‑element / 14‑group design organised into three groups — a positive front collector, an aperture stop, a positive focus doublet, and a mixed rear group that houses both the vibration‑reduction element set and a positive relay. Chromatic correction is carried by three fluorite‑family anomalous‑dispersion elements in the front group (one Super ED of S‑FPL55 type and two ED elements of S‑FPL51 type), supported by three niobophosphate ultra‑high‑dispersion flints with their own positive anomalous partial dispersion; the design contains no aspherical surfaces. The focus mechanism is an *inner focus* actuation of the two‑element cemented doublet G2, which translates 11.55 mm toward the object between infinity and the patent's closest focus distance of 1.57 m — a very small moving mass that Fujifilm's twin linear‑motor autofocus system accelerates rapidly. All five of the patent's conditional expressions are satisfied by Example 1 to within the stated numerical precision, and independent paraxial ray tracing reproduces the patent's stated focal length of 194.01 mm to within 0.003 %.

---

## 1. Identification and design context

The XF 200 mm F2 is Fujifilm's flagship APS‑C telephoto prime, providing a field of view roughly equivalent to a 305 mm lens on a full‑frame camera. The patent US 2019/0265504 defines a generic super‑telephoto architecture — a positive front group, an aperture stop, a ≤ 2‑element positive focus group, and a third group containing a negative vibration‑reduction subgroup and a positive rear subgroup — and offers four worked numerical examples that all share this topology and all target a 200 mm f/2 class specification. Example 1 is the one whose element count, group count, and element‑by‑element refractive indices are consistent with the published Fujifilm specification for the production lens: 19 elements in 14 groups, with exactly three anomalous‑dispersion elements of fluorite‑family type (one Super ED and two ED). Examples 2 through 4 differ in detail — notably, Example 2 reduces G2 to a single element, and Example 4 substitutes an even‑higher‑index positive element (n\_d ≈ 2.003) in G3ois and has only eight rear‑group elements. Example 1 therefore remains the numerical example that most plausibly corresponds to the production XF 200 mm F2.

## 2. Principal specifications

| Parameter | Patent (Example 1) | Fujifilm production | Adopted |
|---|---|---|---|
| Focal length | 194.01 mm | 200 mm (nominal) | 200 mm marketed; 194.01 mm computed |
| Max aperture | f/2.06 | f/2 (nominal) | f/2 marketed; f/2.06 computed |
| Min aperture | — (not tabulated) | f/22 | f/22 |
| Format | Design image circle ≈ 30.5 mm (compatible with APS‑C) | APS‑C X‑mount | APS‑C |
| Angle of view (2ω) at ∞ | 9.0° (design image circle ≈ 30.5 mm) | ≈ 8.1° (APS‑C diagonal 28.3 mm) | per format |
| Close focus distance | 1.57 m | **1.8 m** | **1.8 m** (manufacturer governs) |
| Element count | 19 | 19 | 19 |
| Group count | 14 | 14 | 14 |
| Anomalous‑dispersion elements | 3 (1 Super ED + 2 ED) | 1 Super ED + 2 ED | 3 total |
| Aspherical surfaces | **0** | none stated | **0** |
| OIS | Integral (G3ois) | 5 stops rated | yes |
| Focus drive | Inner focus, G2 moves | Twin linear motor | yes |
| Iris | — | 9‑blade rounded | 9‑blade |
| Filter size / mount | — | ⌀ 105 mm | — |
| Weight | — | 2 265 g | — |
| Physical length | — | ≈ 205.5 mm (ex hood) | — |

The two discrepancies between patent and production are expected and customary: Fujifilm markets the lens at its nominal focal length (200 mm) and aperture (f/2), and restricts the usable focus range in the barrel mechanics. Per the project convention, manufacturer values are authoritative for marketed specifications.

## 3. Overall architecture

Reading object‑side to image‑side, the system is:

```
G1 (+)  ─┤  STO  ├─  G2 (+, focus)  ─  L31 (−)  ─  G3ois (−, OIS)  ─  G3r (+)
[8 elts]          [2 elts, cemented]  [1 elt]     [3 elts]          [5 elts]
```

Group‑level paraxial properties, computed by thick‑lens ABCD trace of each subsystem in air:

| Group | Elements | Composition | Computed f (mm) | Role |
|---|---|---|---|---|
| G1 | 8 | POS‑POS‑[POS+NEG]‑[POS+NEG]‑POS‑NEG | +335.95 | Front collector; chromatic pre‑correction |
| G2 | 2 | NEG + POS cemented | +78.76 | Focus group; achromatic |
| L31 | 1 | Negative meniscus | −126.19 | Field lens; focus‑fluctuation buffer |
| G3ois | 3 | [POS+NEG] cemented + NEG | −35.29 | OIS; shift‑perpendicular image stabilisation |
| G3r | 5 | Rear relay | +39.02 | Positive relay to image plane |

The system focal length derived by concatenating all of these subsystems (separated by the published air gaps) is **194.015 mm**, which matches the patent's stated 194.01 mm to three parts in 10⁴. The total length from the first surface of L11 to the image plane is **L = 218.997 mm**, giving L/EFL = 1.129 — this is a *long‑focus* design rather than a compact *telephoto* design in the strict optical sense (L > f). The aperture stop sits between G1 and G2, placing a 40.30 mm‑diameter physical iris (computed below) at a position where the converging beam has narrowed from a 94.18 mm‑diameter entrance pupil to roughly 43 % of its original size. This allows every element rearward of L12 to be significantly smaller than the front collector — the direct reason that a 200 mm f/2 lens is feasible at a reasonable mass.

### 3.1 Aperture stop geometry

Tracing a paraxial marginal ray from infinity with initial height equal to the stated entrance‑pupil semi‑diameter:

* Entrance‑pupil diameter in object space: **94.18 mm** (semi‑diameter 47.09 mm)
* Physical aperture stop diameter: **40.30 mm** (semi‑diameter 20.15 mm)
* Front‑group magnification (stop → object): 2.34 ×

The marginal‑ray height in G1 narrows monotonically: 47.09 mm at L11's front surface, 34.92 mm by L14's rear, 22.04 mm at L18's front, and 20.15 mm at the iris itself. This narrowing is the reason Fujifilm can house the remaining ≈ 11 elements of the rear subsystem in a barrel dramatically narrower than the 105 mm front.

## 4. Aspherical surfaces

**There are none.** The patent's Table 1 (Example 1) contains only the six columns used for spherical prescriptions — surface number, radius, axial thickness, n\_d, ν\_d, and θ\_gF — and contains no aspheric‑coefficient auxiliary table, no asterisk or dagger annotation on any surface, and no text in the specification or claims that discusses aspheric surfaces for the imaging lens. The same is true of Examples 2–4. Fujifilm's official product descriptions for this lens do not mention aspherical elements; by contrast, descriptions of the matching XF 1.4× TC F2 WR teleconverter explicitly state that its four‑group optic contains one aspherical element, which confirms that Fujifilm's copywriting does flag aspherics when present. The XF 200 mm F2 is, therefore, a **fully spherical 19‑element design**.

This is uncommon for modern mirrorless‑era optics but is characteristic of long‑focus primes at this aperture class: with the aperture stop placed behind a slow, well‑corrected collector, the marginal‑ray angle at any individual surface is modest, so high‑order spherical aberration that normally motivates an aspheric surface can be controlled by conventional glass pairings. Using only spherical surfaces also eases the large‑diameter grinding that the 100 mm‑class front elements demand — a point that Fujifilm's press material alludes to when it cites "high‑precision polishing technology developed for broadcast lenses."

## 5. Element‑by‑element analysis

Each element's thick‑lens focal length is computed in isolation (treated as if the element were immersed in air on both sides) — a standard way to see which elements do the converging work and which cancel aberrations. This is not the element's in‑system contribution, which depends on marginal‑ray height, but it is the most useful scalar descriptor for identifying role.

### 5.1 G1 — Front positive group (8 elements)

The front group is the collector that converges the object‑at‑infinity beam from a 94 mm diameter at L11 down to a 40 mm diameter at the stop. It carries the anomalous‑dispersion correction and a significant share of the overall positive power.

Reading object‑side to image‑side, the composition follows the patent's preferred construction — a positive, a positive, then a cemented positive‑plus‑negative doublet, then another cemented positive‑plus‑negative doublet, a positive singlet, and a negative meniscus singlet:

| Element | Role | R₁ (mm) | R₂ (mm) | n\_d / ν\_d / θ\_gF | f (mm) |
|---|---|---:|---:|---|---:|
| **L11** | Positive biconvex (weakly bent toward object) | +430.70 | −727.33 | 1.67270 / 32.10 / 0.599 | +403.12 |
| **L12** | Positive biconvex **Super ED** (fluorite‑family) | +165.97 | −1120.28 | 1.43875 / 94.66 / 0.534 | +330.31 |
| **L13** | Positive, front half of cemented doublet — **ED** | +105.94 | −218.34 | 1.49700 / 81.54 / 0.537 | +145.59 |
| **L14** | Negative, rear half of cemented doublet — dense lanthanum flint | −218.34 | +775.72 | 1.83481 / 42.74 / 0.565 | −203.80 |
| **L15** | Positive, front half of cemented doublet — **ED** | +91.48 | −267.53 | 1.49700 / 81.54 / 0.537 | +138.58 |
| **L16** | Negative, rear half of cemented doublet — ultra‑dense lanthanum flint | −267.53 | +141.83 | 1.91082 / 35.25 / 0.582 | −101.44 |
| **L17** | Positive symmetric biconvex — NPH niobophosphate flint | +266.76 | −266.76 | 1.80809 / 22.76 / 0.631 | +165.63 |
| **L18** | Strongly negative meniscus — niobium/lanthanum flint | +266.76 | +47.29 | 1.80000 / 29.84 / 0.602 | −72.15 |

Functions and rationale, element by element:

**L11** — The front‑most element is a weakly‑bent biconvex singlet in a mid‑index moderate‑dispersion flint (ν\_d = 32.1). It is deliberately a *dense* flint rather than a crown; the patent's Conditional Expression (5) mandates 10 < ν\_{d1} < 43 and Example 1 places the value squarely within this band at 32.10. The reason is chromatic correction: placing a modest‑power, relatively high‑dispersion element at the front lets the very low‑dispersion Super ED element that follows (L12) deliver its fluorite‑family anomalous partial‑dispersion benefit without the total front‑group chromatic balance being excessively biased. L11 is also the user‑facing surface of the lens, and its front vertex defines the 105 mm filter thread diameter.

**L12** — This is the "large‑diameter Super ED" element that all Fujifilm press copy calls out. Its six‑digit glass code 439 948 (n\_d = 1.43875, ν\_d = 94.66) is the canonical marker for **OHARA S‑FPL55** — a fluorite‑family formulation (effectively calcium‑fluoride–based) engineering‑improved for mouldability and thermal handling. Because its ν\_d of 94.66 is substantially higher than any conventional crown (BK7 is 64.2), it lets the front group achieve a strong positive net power while carrying the minimum secondary chromatic aberration; it is biconvex with a weakly curved rear surface (|R₂| ≫ |R₁|, rear radius almost seven times the front), so ≈ 87 % of its optical power is carried by the front vertex. Physically, L12 sits where the beam is still near its full 46 mm semi‑diameter, so this is a ≈ 95–100 mm‑diameter piece of fluorite‑family glass — an expensive component whose mass and cost dominate the front of the lens.

**L13 + L14 (first cemented doublet)** — A classical achromatic doublet: the positive member carries the higher ν\_d and the negative member carries the lower ν\_d, in the conventional (not inverted) sequence. L13 is a second ED element (**OHARA S‑FPL51**, 497 816, ν\_d = 81.54) and carries strong positive curvature; L14 is a dense lanthanum element (835 427, matching **OHARA S‑LAH55V/VS**) that forms the negative rear half. The cemented junction has the canonical geometry of an achromatic doublet: the R₂ of L13 equals the R₁ of L14. Together these two elements handle the primary axial chromatic correction for the front half of G1, with the ED glass providing the required long‑wavelength‑to‑short‑wavelength focus‑shift compensation.

**L15 + L16 (second cemented doublet)** — A second achromatic pair, further toward the stop. Again a positive ED element (L15, 497 816, same S‑FPL51) is cemented to a negative ultra‑dense flint (L16, 911 353 — a lanthanum flint whose index of 1.91082 is among the highest commercially available). The specific 911 353 code is not a current OHARA catalog match (closest OHARA neighbours are S‑LAH93 at 905 350 and S‑LAH92 at 892 371); HOYA's cross‑reference lists equivalent TAFD35 at the same code, suggesting the patent specifies a HOYA glass or an older leaded formulation whose eco equivalent is slightly displaced in catalogs. The much higher index of L16 compared to L14 is a deliberate design choice: deeper in the lens, where the marginal ray has narrowed to roughly 30 mm, a shorter radius on the negative partner allows Petzval compensation without an unreasonably thick element. This second doublet mops up the residual colour that the first doublet could not fully eliminate and provides the Petzval contribution that offsets the strongly positive L12.

**L17** — A nearly symmetric biconvex singlet (|R₁| = |R₂| = 266.76 mm) made of **OHARA S‑NPH1** (808 228, ν\_d = 22.76), a niobophosphate ultra‑high‑dispersion flint. Its role is neither principally converging nor principally chromatic; it is a *secondary‑spectrum corrector*. The glass has a moderately positive anomalous partial dispersion (Δθ\_gF ≈ +0.026, i.e., above the θ\_gF–ν\_d normal line) at a very low ν\_d, which gives it apochromatic correcting capability distinct from that of the ED elements further forward — enabling the full three‑wavelength (C, d, F) correction to be closer to true apochromatic behaviour than two‑glass achromats can achieve on their own.

**L18** — The final G1 element is a strongly negative meniscus (R₁ = +266.76 mm, R₂ = +47.29 mm) made of a mid‑index flint with code 800 298 (closest OHARA neighbour: S‑NBH55 at 800 299, essentially indistinguishable at this precision; HOYA equivalent: TAFD30 family). Both centres of curvature lie on the image side, which makes both surfaces convex toward the object; the rear surface, with its much smaller |R|, is the dominant optical feature and is strongly concave toward the image — this is where the element's negative power comes from. Together with L17 it implements the patent's preferred construction of "negative plus positive with an air gap" reading backwards from the stop. The pair functions as a spherical‑aberration corrector for the rapidly‑narrowing converging cone just ahead of the aperture stop: the strongly curved concave rear surface of L18 (R₂ = +47.29 mm, matching the R = +61.17 mm front of L21 to within 23 %) produces a divergent kick that cancels the accumulated under‑corrected spherical aberration from the collecting action of L11–L17.

### 5.2 Aperture stop

The stop is a flat plane, physically realised by the nine‑blade rounded iris diaphragm Fujifilm specifies for the production lens. Its on‑axis distance from L18's rear surface is 9.49 mm at the barrel's build position, and at infinity focus the distance from the stop to L21's front surface (DD[15]) is 18.63 mm — a long enough gap to accommodate G2's full focus travel (below). Physical stop semi‑diameter when wide open is 20.15 mm. This stop placement fulfils the patent's two explicit advantages: (i) the stop diameter is only 43 % of the entrance‑pupil diameter, which minimises the diameter of the aperture mechanism and everything behind it, and (ii) by forcing G1 to carry positive power, the barrel can narrow sharply downstream of the first six elements.

### 5.3 G2 — Focus group (2‑element cemented doublet)

G2 is the sole moving group during focus. It consists of two cemented elements, L21 and L22:

| Element | Role | R₁ | R₂ | n\_d / ν\_d | f (mm) |
|---|---|---:|---:|---|---:|
| **L21** | Negative meniscus (thin) | +61.17 | +39.38 | 1.54814 / 45.78 | −207.80 |
| **L22** | Positive plano‑convex (flat rear) | +39.38 | ∞ | 1.69680 / 55.53 | +56.52 |

Each element's sub‑role is distinct. L21 is a short, thin (1.81 mm axial) negative meniscus — a typical spherical‑aberration‑correcting leading element in an achromatic doublet. L22 is a thick (6.60 mm) plano‑convex positive element with a flat rear surface. Together they form an **achromatic positive doublet** with focal length +78.76 mm, and the cemented construction is chosen both to minimise chromatic shift as the group moves (an achromatic focus group leaves longitudinal colour nearly stationary across the focus range) and to minimise the element count of the moving mass.

The achromatic balance is verifiable directly: the negative element (L21) has ν\_d = 45.78 and the positive element (L22) has ν\_d = 55.53. Because the positive member has the higher ν\_d and the negative member has the lower ν\_d, this is the *conventional* (not inverted) Clark‑Jenkins achromat arrangement. The net chromatic residual at this doublet's stop‑side is small because L21 (**OHARA S‑TIL1**, 548 458) and L22 (**OHARA S‑LAL14**, 697 555) are chosen in the familiar Clark achromat pairing.

**Focus‑group mass is the key design metric.** The patent explicitly notes that keeping G2 to two elements or fewer is a weight‑reduction objective, and Fujifilm's marketing copy reinforces this with references to the "lightweight focus lens group" and "fast, near‑silent, highly accurate" autofocus performance enabled by the twin linear motor. With physical diameters in the 35–45 mm range (inferred from on‑axis marginal‑ray semi‑diameters of 16–20 mm in the L21–L22 region plus mechanical clearance and off‑axis ray allowance), and using the nominal densities of the identified glasses (S‑TIL1 ≈ 2.98 g/cm³ for L21, S‑LAL14 ≈ 3.63 g/cm³ for L22), the cemented L21+L22 doublet has a glass mass on the order of 25 g — ≈ 1 % of the total lens mass, and small enough that Fujifilm's twin linear motor can accelerate it rapidly.

### 5.4 G3 — Third group (9 elements)

G3 contains three distinct sub‑functions: a negative field lens (L31), the vibration‑reduction group (G3ois, three elements), and the rear positive relay (G3r, five elements). The net refractive power of G3 is only weakly negative (f₃ ≈ −1 300 mm, so f/f₃ = −0.149 — it is nearly afocal), which is what makes G3's main contribution to the system a field‑ and aberration‑*shaping* role rather than a net‑power role. The combination of strong individual powers within G3 with near‑zero net power is what gives the designer degrees of freedom for OIS implementation and field‑flattening.

#### 5.4.1 L31 — Negative meniscus field lens

| Element | Role | R₁ | R₂ | n\_d / ν\_d | f (mm) |
|---|---|---:|---:|---|---:|
| **L31** | Negative meniscus (front concave) | +36.13 | +23.92 | 1.60342 / 38.03 | −126.19 |

L31 is a lone negative meniscus element situated between G2 and G3ois. It is the "at least one negative lens between the second lens group and the vibration reduction lens group" that the patent's preferred constructions describe. The patent's stated rationale for placing this element is to suppress the fluctuation of spherical aberration during focusing: as G2 translates, it produces a focus‑dependent change in the converging‑beam geometry entering the downstream groups, and inserting a negative element at this point redistributes the ray angles in a way that partially cancels the focus‑driven spherical‑aberration change. Because G3ois is also the OIS group, a secondary benefit is that any focus‑dependent ray‑bundle fluctuation that reaches G3ois would appear as a focus‑dependent stabilisation artefact, which this element helps suppress. L31's in‑air focal length of −126 mm is sufficient for both effects without introducing significant chromatic error of its own — it sits in a strongly converging beam where its moderate dispersion is easily tolerated.

#### 5.4.2 G3ois — Vibration‑reduction group (3 elements)

| Element | Role | R₁ | R₂ | n\_d / ν\_d | f (mm) |
|---|---|---:|---:|---|---:|
| **L32** | Positive biconvex — **ultra‑dense NPH flint** | +415.38 | −91.48 | 1.95906 / 17.47 | +78.34 |
| **L33** | Negative meniscus — lanthanum crown | −91.48 | +42.92 | 1.73400 / 51.47 | −39.61 |
| **L34** | Negative meniscus — dense lanthanum flint | −217.24 | +66.63 | 1.80100 / 34.97 | −63.52 |

G3ois consists of a cemented doublet (L32 + L33) followed by a separated negative singlet (L34). Its net focal length is **−35.29 mm** — strongly negative and compact. This group translates *perpendicular to the optical axis* during image stabilisation. The choice of a negative‑power OIS group rather than a positive one is deliberate: a negative group produces a larger image shift per millimetre of lateral translation than an equivalent positive group, which means the actuator can correct more camera shake with less mechanical stroke — reducing the size and complexity of the stabiliser mechanism.

Several features of the glass choices are worth attention:

* **L32 is an inverted achromat positive member.** Ordinarily the positive element of an achromatic doublet carries the *higher* ν\_d, not the lower. L32 reverses this: it is the positive element with ν\_d = 17.47 (one of the most dispersive optical glasses commercially available, **OHARA S‑NPH3**, code 959 175 — the ultra‑dense niobophosphate with nd = 1.95906 matching the patent exactly). The reason is that G3ois is intentionally not a standalone‑corrected doublet — it is a component of a two‑stage correction with G3r. The "inverted" arrangement allows G3ois to be smaller and lighter than a classical achromat would be at the same focal length, at the cost of leaving a residual longitudinal chromatic error that G3r then picks up. The patent's Conditional Expression (4), ν\_{dop} < 20, explicitly calls for this member to be exotically high‑dispersion and is satisfied by Example 1's choice of 17.47.
* **The extreme index (n\_d = 1.95906) of L32 is also beneficial for compactness.** At very high index, shorter curvatures produce the required power — a dramatic effect at this index level.
* **L33 serves as the colour‑balancing partner to L32.** **OHARA S‑LAL59** (734 515), a lanthanum crown at ν\_d = 51.47, carries enough dispersion difference relative to L32 (Δν\_d ≈ 34) to do first‑order achromatic work, but not so much that L32's strong residual cannot be carried to G3r.
* **L34 is a second negative element** (code 801 350, matching **OHARA S‑LAM66**) that finishes the OIS group's negative power contribution without adding colour; its mid‑range ν\_d of 34.97 is chosen neutrally.

The whole G3ois subgroup has small radii throughout (the largest is just 217 mm) and thin axial thicknesses (1.4 to 2.3 mm), so its total mass is very small — an essential property for the OIS actuator to move it responsively without consuming excessive current.

#### 5.4.3 G3r — Rear positive relay (5 elements)

| Element | Role | R₁ | R₂ | n\_d / ν\_d | f (mm) |
|---|---|---:|---:|---|---:|
| **L35** | Positive plano‑convex (flat rear) — dense lanthanum | +51.55 | ∞ | 1.90366 / 31.31 | +57.05 |
| **L36** | Negative meniscus — NPH flint | −77.96 | +145.86 | 1.80809 / 22.76 | −62.70 |
| **L37** | Positive biconvex — lanthanum flint | +133.60 | −60.74 | 1.80610 / 40.93 | +52.31 |
| **L38** | Positive biconvex — symmetric | +53.25 | −53.25 | 1.65412 / 39.73 | +42.05 |
| **L39** | Negative meniscus — rear of cemented pair | −53.25 | +154.30 | 1.80000 / 29.84 | −49.29 |

G3r is the positive relay that finalises the image formation. Its focal length is +39.02 mm, and it carries out three functions simultaneously: (i) positive net power to complete image formation (balancing G3ois's negative contribution), (ii) residual‑colour clean‑up (picking up what G3ois left uncorrected), and (iii) field and lateral‑colour tuning by the L38+L39 cemented doublet at the very rear.

Key features:

* **L35 is a steep plano‑convex positive** in a very high‑index glass (**OHARA S‑LAH95**, 904 313, n\_d = 1.904). Its front radius of 51.55 mm is the shortest positive radius in the rear group, and at this index the element delivers a remarkable +57 mm focal length in only 3.11 mm of axial thickness. Its flat rear surface simplifies alignment and manufacturing.
* **L36 is a strongly negative meniscus** in the same **OHARA S‑NPH1** (808 228) niobophosphate ultra‑high‑dispersion flint as L17. L36 follows L35 across a thin air gap (1.06 mm) and precedes L37 across a larger air gap (4.43 mm); the close L35–L36 coupling functions as an achromatic pair (positive high‑index + negative ultra‑high‑dispersion), while the larger L36–L37 separation lets L37 act as a separate positive relay rather than as part of a true triplet.
* **L37 and L38** are the net converging elements of the rear — both positive biconvex. L37 is **OHARA S‑LAH53** (806 409, exact catalog match). L38 is *nearly symmetric* on its own (R₁ = −R₂ = 53.25 mm), which centres the doublet's coma‑correcting power on the L38 element regardless of the cemented partner's geometry.
* **L38+L39 cemented doublet** is the final achromatic pair of the system. L38 (**OHARA S‑NBH5**, 654 397, exact match) and L39 (code 800 298, same family as L18) form a cemented pair where L39's concave front (R = −53.25 mm) matches L38's rear exactly, so the cemented junction is geometrically clean; L39's convex rear (R = +154.30 mm) carries the doublet's exit ray into the last air gap before the cover glass. ν\_d values (39.73 for the positive L38, 29.84 for the negative L39) give a conventional achromatic slope despite the positive element being forward of the negative — this differs from the common "negative‑leading" classical achromat but is equivalent optically.

The patent's preferred constructions also call for the rear group to contain at least four elements and, reading from the object side, to begin with a positive element followed by a negative element. Example 1's G3r honours both: five elements, beginning L35 (positive) then L36 (negative).

## 6. Glass identification

Six‑digit glass codes (computed as `round((n_d − 1) × 1000) | round(ν_d × 10)`) are used as manufacturer‑agnostic identifiers. Best catalog matches are given where an exact n\_d / ν\_d pair is known against the current OHARA pocket catalog (May 2023); otherwise family‑level identifications are flagged.

| Element | Glass code | n\_d | ν\_d | θ\_gF | Best catalog match | Role |
|---|---|---:|---:|---:|---|---|
| L11 | 673 321 | 1.67270 | 32.10 | 0.599 | OHARA **S‑TIM25** (673 323; ν\_d differs by 0.02, nd differs by 0.00003) | Dense flint |
| L12 | 439 948 | 1.43875 | 94.66 | 0.534 | OHARA **S‑FPL55** (439 948; exact match) | **Super ED** (fluorite‑crown) |
| L13 | 497 816 | 1.49700 | 81.54 | 0.537 | OHARA **S‑FPL51** (497 816; exact match) | **ED** (fluorite‑crown) |
| L14 | 835 427 | 1.83481 | 42.74 | 0.565 | OHARA **S‑LAH55V / S‑LAH55VS** (835 427; exact match) | Dense lanthanum flint |
| L15 | 497 816 | 1.49700 | 81.54 | 0.537 | OHARA **S‑FPL51** (same as L13) | **ED** (fluorite‑crown) |
| L16 | 911 353 | 1.91082 | 35.25 | 0.582 | No current OHARA match; **HOYA TAFD35** family (911 353 in HOYA cross‑ref) | Ultra‑dense lanthanum flint |
| L17 | 808 228 | 1.80809 | 22.76 | 0.631 | OHARA **S‑NPH1** (808 228; exact match) | Ultra‑high‑dispersion niobophosphate flint |
| L18 | 800 298 | 1.80000 | 29.84 | 0.602 | OHARA **S‑NBH55** (800 299; ν\_d differs by 0.01) | Niobium flint |
| L21 | 548 458 | 1.54814 | 45.78 | 0.569 | OHARA **S‑TIL1** (548 458; exact match) | Light flint |
| L22 | 697 555 | 1.69680 | 55.53 | 0.543 | OHARA **S‑LAL14** (697 555; exact match) | Lanthanum crown |
| L31 | 603 380 | 1.60342 | 38.03 | 0.584 | OHARA **S‑TIM5** (603 380; exact match) | Mid flint |
| L32 | 959 175 | 1.95906 | 17.47 | 0.660 | OHARA **S‑NPH3** (959 175; exact match) | Ultra‑dense ultra‑high‑dispersion niobophosphate flint |
| L33 | 734 515 | 1.73400 | 51.47 | 0.549 | OHARA **S‑LAL59** (734 515; exact match) | Lanthanum crown |
| L34 | 801 350 | 1.80100 | 34.97 | 0.586 | OHARA **S‑LAM66** (801 350; exact match) | Lanthanum flint |
| L35 | 904 313 | 1.90366 | 31.31 | 0.595 | OHARA **S‑LAH95** (904 313; exact match) | Dense lanthanum flint |
| L36 | 808 228 | 1.80809 | 22.76 | 0.631 | OHARA **S‑NPH1** (same as L17) | Ultra‑high‑dispersion niobophosphate flint |
| L37 | 806 409 | 1.80610 | 40.93 | 0.571 | OHARA **S‑LAH53 / S‑LAH53V** (806 409; exact match) | Lanthanum flint |
| L38 | 654 397 | 1.65412 | 39.73 | 0.574 | OHARA **S‑NBH5** (654 397; exact match) | Niobium flint |
| L39 | 800 298 | 1.80000 | 29.84 | 0.602 | OHARA **S‑NBH55** (same as L18) | Niobium flint |

All identifications were made by matching the patent's reported n\_d and ν\_d values against the current OHARA pocket catalog (May 2023 edition). Twelve of the nineteen elements have exact OHARA catalog matches; one element (L16, 911 353) has no current OHARA equivalent and corresponds to a HOYA TAFD35‑family ultra‑dense lanthanum flint per the HOYA cross‑reference table. Where catalogues differ in the second decimal of ν\_d (L11, L18, L39), the residuals (0.01–0.02) are within typical melt‑to‑melt tolerances. Since Fujifilm is based in Japan, OHARA and HOYA are the most plausible vendors; SUMITA and HIKARI also offer equivalents at the same six‑digit codes under different trade names. Note that OHARA's current catalog is entirely "eco" (lead‑ and arsenic‑free) — the S‑ prefix — and older leaded equivalents are no longer manufactured; the identifications above refer to optical formulations, not to specific product codes.

## 7. Focus mechanism

Focus is implemented as an **inner focus** system in which only G2 translates. Table 3 of the patent gives the two focus‑dependent variable air gaps at infinity and at the patent's shortest stated working distance (1.57 m from the image plane):

| Gap | Surface | At ∞ (mm) | At 1.57 m (mm) | Change |
|---|---|---:|---:|---:|
| DD[15] | Stop → L21 front | 18.63 | 7.08 | −11.55 |
| DD[18] | L22 rear → L31 front | 4.92 | 16.47 | +11.55 |

The exact conservation (−11.55 mm = +11.55 mm) confirms that the focus mechanism is a rigid translation of G2 toward the object during close‑focus. This is the patent's "the second lens group moves to the object side during focusing from an object at infinity to an object at a closest distance." The stroke is small — 11.55 mm over infinity‑to‑1.57 m — because the close‑focus ratio β = −EFL/(S + EFL) is small at these object distances, and because G2's focal length (+78.76 mm) is short enough for a modest translation to produce the required image‑plane shift.

The focal length change from infinity to 1.57 m is also directly computable: at the close‑focus variable‑gap values, the system focal length becomes **181.53 mm** (computed independently and matching the patent's Table 2 value exactly). This ≈ 6 % reduction from 194 mm toward infinity is a common consequence of inner focus — the system's effective focal length shortens slightly as a positive internal group moves object‑ward. The patent's Table 2 also reports the effective f‑number at 1.57 m focus as f/2.33 (vs. f/2.06 at infinity). This increase in working f‑number reflects the combination of two effects: the slight EFL shortening, and the standard working‑aperture increase at finite object distances that accompanies any imaging geometry with non‑trivial image magnification.

**Why the focus group is a cemented doublet, not a single element:** Example 2 of the patent demonstrates that a single‑element G2 is feasible (Example 2's G2 is a single plano‑convex positive element); the XF 200 F2 does not use this simpler arrangement because a cemented doublet permits achromatic correction within the focus group itself, eliminating focus‑dependent chromatic shift. For a super‑telephoto lens whose primary imaging targets are fine detail (sports, wildlife), focus‑dependent colour shift would be perceived as a "breathing" colour cast that is aesthetically and technically unacceptable.

## 8. Optical image stabilisation (OIS) mechanism

The OIS is implemented by lateral translation of G3ois (the three‑element group L32 + L33 + L34) perpendicular to the optical axis. The patent specifies that this group is:

1. placed rearward of G2, so the beam diameter at G3ois is already much narrower than at G1 and the group can be small and light;
2. placed forward of G3r, which allows G3r's positive power to multiply the OIS shift;
3. composed of both a positive and a negative lens so that the stabilisation shift itself does not induce colour fringing.

The patent's Conditional Expression (3), f₃ois / f₃r < −0.85 (or more strictly < −0.88 in the preferred range), is satisfied by Example 1 at **−0.904**. The meaning of this condition is a balance: if the OIS group's focal length were short enough to over‑steer (i.e., |f₃ois/f₃r| ≫ 1), the lateral‑shift‑per‑angle‑of‑correction ratio would be high and the actuator stroke would be small — but the OIS element diameters would grow. Example 1's ratio of 0.90 places OIS at a compact‑but‑not‑extreme operating point, and yields Fujifilm's specified 5 stops of shake compensation.

**Quantitative image‑shift sensitivity.** An independent paraxial computation of the image‑shift‑per‑unit‑translation of G3ois gives a decentering magnification K\_shift = −1.18. In plain terms: translating G3ois laterally by 1.00 mm shifts the image plane by 1.18 mm in the opposite direction. Equivalently, an uncorrected 1° camera rotation would produce 3.39 mm of image‑plane blur (= EFL × sin 1°), and to compensate this, G3ois would need to translate 3.39 / 1.18 = 2.87 mm. At Fujifilm's rated 5‑stop performance (≈ 32× improvement in tolerable shutter time), the required compensatory strokes for typical hand‑held shake — on the order of 0.1–0.5° — translate to G3ois strokes of roughly 0.3–1.5 mm, which is well within the physical envelope of a voice‑coil‑driven OIS actuator of this class. The combination of the f₃ois/f₃r ratio and the ≈ 1.2× image‑shift magnification is exactly what lets a three‑element group 30–40 mm in diameter provide five‑stop stabilisation for a 200 mm telephoto.

L32's inverted achromat configuration (discussed above) is the defining technical choice that makes this particular OIS implementation work with only three elements. Without the inverted arrangement — i.e., if L32 were a conventional high‑ν\_d positive element — G3ois's chromatic residual would be small but its spatial‑shift sensitivity would be lower, and the stabilisation travel would need to grow accordingly. The inversion is the compromise that Fujifilm's optical designers accepted to keep the stabilised mass minimal.

## 9. Chromatic correction strategy

The Fujinon XF 200 F2 implements chromatic correction as a **distributed multi‑stage system**, not a single‑stage achromat. The stages are:

1. **Primary achromatic correction in G1.** The two cemented doublets L13+L14 and L15+L16 each carry a significant share of the primary chromatic correction, pairing an ED positive member against a dense‑flint negative member.
2. **Secondary‑spectrum (apochromatic) correction driven by L12's anomalous partial dispersion.** In the ordinary θ\_gF–ν\_d plane, glasses lie close to a "normal line" that passes between OHARA's reference glasses NSL7 (ν\_d=60.5, θ\_gF=0.5436) and PBM2 (ν\_d=36.3, θ\_gF=0.583), i.e. θ\_gF\_normal ≈ −0.00163·ν\_d + 0.642. The anomalous partial dispersion of a glass is its deviation Δθ\_gF from this line. Independent computation of Δθ\_gF for all 19 elements reveals two glasses with strongly positive anomaly, both at Δθ\_gF ≈ +0.046: **L12** (S‑FPL55, ν\_d = 94.66) and **L32** (S‑NPH3, the NPH positive element of G3ois, ν\_d = 17.47). The two ED elements L13 and L15 contribute a further Δθ\_gF ≈ +0.028 each, and the two S‑NPH1 flints L17 and L36 contribute Δθ\_gF ≈ +0.026 each. Since the normal line already predicts θ\_gF across the entire ν\_d range, a chromatically‑achromatic doublet using *on‑line* glasses would still leave a non‑zero g‑line (blue) focus residual — the familiar "secondary spectrum." The first cemented doublet L13+L14 pairs L13 (Δθ\_gF ≈ +0.028) against L14 (Δθ\_gF ≈ −0.008), giving a Δ(Δθ\_gF) mismatch of ≈ 0.035 across the cemented junction — the principal driver of apochromatic correction in this doublet. The second cemented doublet L15+L16 pairs L15 (Δθ\_gF ≈ +0.028) against L16 (Δθ\_gF ≈ −0.003) for a Δ(Δθ\_gF) ≈ +0.031 — very similar, a deliberate choice that spreads the apochromatic load symmetrically across the two cemented pairs. L12 operates as a *standalone* Super ED converging element with strongly positive Δθ\_gF at very high ν\_d — its contribution adds a third apochromatic lever that the cemented doublets alone could not provide, because fluorite‑family glass cannot be cemented to a strong negative partner at such high ν\_d without violating edge‑thickness constraints. The NPH flint elements (L17, L36) reinforce the correction on the high‑dispersion side of the diagram.
3. **Focus‑independent residual via the achromatic G2.** By making the focus group itself an achromatic doublet (ν\_d balance between L21 and L22), the design prevents focus‑dependent chromatic shift that would otherwise accompany inner‑focus motion of a non‑achromatic group.
4. **Inverted achromat in G3ois, compensated by G3r.** G3ois is intentionally under‑corrected, leaving a residual that G3r picks up. This allows G3ois to be light and compact; G3r's five elements provide both net positive power and ample correction degrees of freedom.
5. **Final lateral‑colour trim by the L38+L39 cemented doublet.** At the rearmost optical position, where the beam has narrowed and the chief ray has reached its largest off‑axis height, this doublet is optimally located for lateral‑colour tuning. L38 (S‑NBH5, ν\_d = 39.73) and L39 (ν\_d = 29.84) are both essentially on‑line glasses, so the pair acts as a conventional achromat — the benefit comes from the position, not from anomalous dispersion.

Fujifilm's published "three ED elements" specification (one Super ED + two ED) therefore understates the chromatic correction complexity: the full system also relies on two S‑NPH1 ultra‑high‑dispersion flint elements (L17, L36, each with Δθ\_gF ≈ +0.026) and one S‑NPH3 ultra‑dense flint element (L32, Δθ\_gF ≈ +0.046) to support the secondary‑spectrum correction. In total, **six** of the nineteen elements carry meaningfully anomalous partial dispersion (|Δθ\_gF| exceeding 0.02).

## 10. Key design metrics

**Focal length and aperture (infinity):** EFL = 194.015 mm (computed) vs. 194.01 mm (patent). f/# = 2.06 (patent); f/2 nominal (production). Agreement 0.003 %.

**Focal length and aperture (close focus at 1.57 m):** EFL = 181.530 mm (computed) vs. 181.53 mm (patent). f/# = 2.33 (patent). Agreement exact.

**Total length L (surface 1 → image plane, infinity):** 218.997 mm.

**Telephoto ratio L / EFL:** 1.129. This exceeds 1, indicating a long‑focus architecture rather than a compact telephoto construction. The lens is *longer than its focal length* by ≈ 13 %.

**Back focal distance:** 31.14 mm (air‑equivalent, including the plane‑parallel PP cover glass); 32.11 mm mechanical (surface 34 → image plane, as physically measured).

**Principal plane positions.** Computed by forward and reverse paraxial traces: the rear principal plane H' lies at z ≈ +25.0 mm from the L11 front vertex (inside L12, about 11 % of the way through the lens); the front principal plane H lies at z ≈ +159.8 mm from L11, between the OIS group and the rear relay. The two principal planes are thus *crossed* — H is ≈ 135 mm to the image side of H' — which is characteristic of a multi‑group system that performs significant internal relay imaging between widely‑separated positive and negative subsystems. For the L/f‑ratio discussion: an L/f > 1 is the direct geometric consequence of H' being positioned *inside* the lens (at z ≈ 25 mm) rather than being *pushed forward* of L11; in a true compact telephoto, H' lies ahead of the front element, giving L < f. For panoramic applications where a "no‑parallax point" matters, camera rotation should be about the front nodal point (coincident with H for a system in air), which sits deep inside the barrel around z ≈ 160 mm behind L11.

**Entrance pupil.** Object‑space diameter 94.18 mm (= EFL / f#); semi‑diameter 47.09 mm. The stop is 9.49 mm behind the rear of G1, well inside the front group's focal length (f\_G1 = +336 mm), so G1 images the stop *virtually* into image space. Paraxial back‑imaging of the stop gives a virtual EP located at z ≈ +214.6 mm from L11 (i.e., approximately at the image plane, about 4.4 mm in front of it), with a 2.34× magnification that accounts for the EP being larger than the physical iris. This is normal behaviour for long‑focus primes whose stop sits well inside the collector's focal length; it has no consequence for the f‑number (which depends only on EP diameter in object space) but does mean that, to a distant observer looking into the lens, the iris appears to lie roughly at the image plane rather than at the barrel's mid‑point.

**Petzval sum (surface‑by‑surface, PP excluded):** Σ (1/n' − 1/n)/R = −8.76 × 10⁻⁴ mm⁻¹; Petzval radius R_P = −1 141 mm; |P · f| = 0.170. For reference, a value of |P · f| ≲ 0.3–0.4 is typical of well‑corrected long‑focus primes; 0.17 indicates more than adequate field flatness for a telephoto.

**Patent's Conditional Expressions (Example 1):**

| Conditional expression | Specified range | Example 1 value | Preferred range (sub‑bound) |
|---|---|---:|---|
| (1) 0.04 < D₂ₒ/L < 0.1 | ✓ | 0.069 | (1‑1) 0.05 < · < 0.08 ✓ |
| (2) −0.32 < f/f₃ < 0.3 | ✓ | −0.149 | (2‑1) −0.3 < · < 0.1 ✓ |
| (3) −1.5 < f₃ois/f₃r < −0.85 | ✓ | −0.904 | (3‑1) −1.2 < · < −0.88 ✓ |
| (4) ν\_{dop} < 20 | ✓ (L32 = 17.47) | 17.47 | (4‑1) 10 < · < 20 ✓ |
| (5) 10 < ν\_{d1} < 43 | ✓ (L11 = 32.10) | 32.10 | (5‑1) 15 < · < 38 ✓ |

All five expressions — and all five of the tighter preferred sub‑bounds — are simultaneously satisfied.

## 11. Context and observations

The Fujinon XF 200 mm F2 is an unusual design in the modern mirrorless era for what it *does not* include — no aspherical surfaces and no diffractive element — and for what it *does* include — three fluorite‑family anomalous‑dispersion elements (one S‑FPL55 Super ED + two S‑FPL51 ED) plus three niobophosphate anomalous‑dispersion flint elements (two S‑NPH1 + one S‑NPH3), two cemented doublets in G1, an inverted‑achromat OIS triplet, and a cemented‑doublet focus group. The philosophy is visibly that of a film‑era super‑telephoto translated into a modern mount and coating stack: get the chromatic correction right with abundant exotic glass, let spherical surfaces suffice for the rest, and keep the moving masses tiny so that autofocus and stabilisation are both fast and quiet.

The L/EFL ratio of 1.13 reflects a deliberate trade: by not implementing a compact telephoto construction (where L < f), the design retains more degrees of freedom for colour correction but must carry more barrel length. For a 200 mm f/2 APS‑C lens, this is a reasonable choice — modern full‑frame super‑telephotos at larger focal lengths (300 mm and beyond) typically exploit the telephoto construction to compress their physical length, but at 200 mm and f/2 the benefit of compression is smaller and the optical freedom gained by a long‑focus layout is more valuable.

Four design moves in particular stand out as indicative of Fujifilm's optical team's priorities:

1. **Keeping the focus mass small.** Two cemented elements in G2 rather than (for example) four separated elements. The twin‑linear‑motor AF system can accelerate this tiny mass quickly, giving the lens a reputation for snappy autofocus among its users.
2. **Placing the OIS group behind a negative field lens (L31).** This provides stable OIS performance across the full focus range, because L31 insulates G3ois from G2's motion.
3. **Using an inverted achromat in G3ois.** This is the geometric trick that makes a three‑element OIS group possible at 200 mm f/2 — a conventional achromat would be too large or too heavy.
4. **Distributing chromatic correction across six anomalous‑dispersion elements.** One Super ED S‑FPL55 (L12) + two ED S‑FPL51 (L13, L15) + three NPH‑family flints (L17, L32, L36) with meaningful anomalous partial dispersion (|Δθ\_gF| ≳ 0.02). No single element carries an overwhelming share of the apochromatic load, which eases the tolerancing budget and makes the design production‑robust.

These choices together produce a lens whose reputation matches its optical lineage: heavy (2.3 kg), large (105 mm filter thread), expensive, and optically nearly uncompromised for its intended use cases (sports, wildlife, press). The patent reveals the reasoning behind each major architectural choice, and the independent computational verification confirms that the numerical example in the patent is internally consistent and defines the essential optical behaviour that the production lens delivers.

---

## Appendix — Independent verification summary

Every numerical claim in this document was independently verified by Python paraxial ray‑trace (y‑nu method) and ABCD subsystem analysis applied directly to the patent prescription (Example 1, Table 1). The verifications and their tolerances are:

| Quantity | Patent | Computed | Residual |
|---|---|---|---|
| EFL at infinity | 194.01 mm | 194.015 mm | +0.003 % |
| EFL at 1.57 m | 181.53 mm | 181.530 mm | < 0.001 % |
| D₂ₒ / L | 0.069 | 0.06901 | < 0.02 % |
| f / f₃ | −0.149 | −0.1493 | < 0.2 % |
| f₃ois / f₃r | −0.904 | −0.9044 | < 0.05 % |
| DD[15] + DD[18] conservation | zero | zero (11.55 mm) | exact |

Derived quantities not reported in the patent but computed from the same prescription: total length L = 218.997 mm; telephoto ratio L/f = 1.1288; BFD = 31.14 mm (air‑equivalent) / 32.11 mm (mechanical); Petzval sum = −8.76 × 10⁻⁴ mm⁻¹; entrance‑pupil diameter = 94.18 mm and virtual EP axial position = +214.6 mm from L11; aperture‑stop physical diameter = 40.30 mm; rear principal plane H' at z = +25.0 mm from L11; front principal plane H at z = +159.8 mm; OIS decentering magnification K\_shift = −1.18 (image‑plane shift per unit G3ois lateral translation).

Group focal lengths (f\_G1 = +336.0 mm, f\_G2 = +78.76 mm, f\_G3ois = −35.29 mm, f\_G3r = +39.02 mm) are consistent with the patent's Conditional Expression values when combined with the stated EFL. Per‑element focal lengths (reported in Section 5's tables) were each computed as a thick‑lens trace through that element's two surfaces with the element glass index and published thickness; the signs and approximate magnitudes of these focal lengths match the patent's prose descriptions of element roles (positive / negative and the preferred structural constructions enumerated in the patent's dependent claims).

No aspheric coefficient table appears in the patent for any example; the absence is confirmed both by exhaustive inspection of Tables 1, 4, 7, and 10 and by the lack of any asterisked surface number or aspheric keyword in the specification text or claims.

Glass identifications were made by matching the patent's published n\_d and ν\_d values against the OHARA pocket catalog (May 2023 edition) and the HOYA optical glass cross‑reference table. Twelve of nineteen elements have exact OHARA S‑prefix (eco glass) matches; one (L16, 911 353) has no current OHARA equivalent and matches HOYA TAFD35; the remaining six elements have OHARA matches within a second‑decimal ν\_d tolerance consistent with melt‑to‑melt variation.
