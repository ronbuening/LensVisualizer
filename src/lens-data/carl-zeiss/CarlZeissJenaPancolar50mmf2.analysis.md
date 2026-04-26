# Carl Zeiss Jena Pancolar 50mm f/2 — Patent Analysis

**Patent:** GB 850,117 (filed 28 March 1958, published 28 September 1960)
**Inventors:** Eduard Hubert and Harry Zöllner, VEB Carl Zeiss Jena
**Design:** Gauss-type (double-Gauss), 6 elements in 4 groups
**Numerical Example:** Claim 2 — f = 100, relative aperture 1:2, S′ = 72.4

---

## 1. Historical Context

The Pancolar 50mm f/2 was designed by Carl Zeiss Jena (the East German successor to the pre-war Carl Zeiss) as a replacement for the older Biotar 58mm f/2. The Biotar — itself a distinguished double-Gauss design dating to Willy Merté's 1927 formula — had been in production since 1936, but at 58mm it was slightly too long to serve as a true "standard" lens on 35mm SLR cameras. The growth of SLR popularity demanded a 50mm normal lens, but the Biotar's back focal length was too short at that focal length to clear the reflex mirror. Zeiss Jena's engineers, Harry Zöllner and Eduard Hubert, solved this problem by reshaping all front-group elements into menisci convex toward the object, which increased the back focal distance to 72.4% of the focal length — just enough to provide the approximately 37mm mirror clearance needed by contemporary SLR bodies.

The optical design was completed on 5 October 1954. A DDR patent (No. 16,756) was filed on 9 September 1956, and the corresponding British patent GB 850,117 followed on 28 March 1958. The first approximately 100 production units were assembled in late 1956 as the "Biotar 2/50" for the Praktina IIA mount, but the lens was almost immediately renamed to "Flexon 2/50" — roughly 1,000 units followed under that name. The renaming was driven by Carl Zeiss Jena's trademark disputes with Carl Zeiss Oberkochen (the West German successor), which made it expedient to retire pre-war trade names. Beginning around summer 1959 the name was changed again to "Pancolar," which became Zeiss Jena's standard designation for double-Gauss type lenses. Importantly, some lenses bearing the Pancolar name still contained the original 1954 optics; the name change preceded an optical redesign that occurred in 1960, which improved edge-of-field performance at full aperture. The design described in GB 850,117 is the **original 1954 design**, not the 1960 revision.

The lens was produced primarily for the Exakta and M42 screw mounts, with some Praktina variants. It remained in production alongside its faster successor, the Pancolar 50mm f/1.8 (introduced 1964), until approximately 1968. The design is a classic double-Gauss consisting of 6 elements arranged in 4 air-separated groups, with two cemented doublets flanking a central diaphragm. The patent prescription is given at a normalised focal length of f = 100; the production lens at f ≈ 50mm requires uniform scaling of all linear dimensions by a factor of 0.5.

---

## 2. Optical Configuration

The Pancolar follows the modified Planar / double-Gauss archetype — arguably the most successful lens configuration ever devised for large-aperture standard lenses. The six elements divide into a symmetric front group and rear group separated by the iris diaphragm.

**Front group** (elements I, II, III — before diaphragm): Element I is a standalone positive meniscus. Elements II and III form a cemented doublet — a positive crown meniscus (II) cemented to a negative flint meniscus (III). The doublet is concave toward the diaphragm.

**Rear group** (elements IV, V, VI — after diaphragm): Elements IV and V form a cemented doublet — a negative flint biconcave (IV) cemented to a positive crown biconvex (V). The doublet is concave toward the diaphragm (i.e., concave toward the front of the lens). Element VI is a standalone positive biconvex element.

The design exhibits the characteristic double-Gauss symmetry: two positive outer elements (I and VI) bracketing two cemented doublets that act as dispersive menisci. This near-symmetry is the key to cancelling odd-order aberrations (coma, distortion, and lateral colour), while the cemented interfaces provide chromatic correction.

### Surface-to-Element Mapping (at f = 100)

| Surface | Radius R | Thickness d | Medium nd | Element |
|---------|----------|-------------|-----------|---------|
| r₁ | +57.9 | d_I = 9.2 | 1.66200 | I (entry) |
| r₂ | +174.9 | l₁ = 0.2 | 1.0 (air) | — |
| r₃ | +43.5 | d_II = 6.7 | 1.66200 | II (entry) |
| r₄ | +53.5 | d_III = 8.4 | 1.67246 | III (cemented junction) |
| r₅ | +26.7 | l₂ = 19.9 | 1.0 (air) | — |
| — | (STO) | — | 1.0 (air) | Diaphragm |
| r₆ | −30.1 | d_IV = 3.8 | 1.60156 | IV (entry) |
| r₇ | +137.0 | d_V = 14.1 | 1.66200 | V (cemented junction) |
| r₈ | −42.8 | l₃ = 0.6 | 1.0 (air) | — |
| r₉ | +227.3 | d_VI = 9.5 | 1.66200 | VI (entry) |
| r₁₀ | −96.0 | BFD | 1.0 (air) | — |

The diaphragm sits in the large air gap l₂ = 19.9 between surfaces r₅ and r₆. The patent does not specify its exact position within this gap; from the accompanying figure, it appears to be located roughly two-thirds of the way through the gap, close to the front face of element IV.

---

## 3. Aspherical Surfaces

**There are no aspherical surfaces in this design.** All ten optical surfaces are purely spherical, defined only by their radii of curvature. The patent makes no mention of aspherical coefficients, conic constants, or any polynomial departure from spherical form.

Some third-party sources — notably the JAPB data sheet — have claimed the Pancolar 50/2 was "one of the first mainstream lenses to include an aspherical element." This claim does not find support in GB 850,117. The patent prescription contains only spherical radii, and neither the descriptive text nor the claims reference aspherical technology. More significantly, the specialised German-language CZJ reference zeissikonveb.de — which documents the Pancolar's design history in considerable detail, including the 1954 original and the 1960 optical revision — makes no mention of aspherical elements in any version of the 50/2. The detailed Flickr-based version survey of all five Pancolar 50mm variants likewise omits any reference to aspherical surfaces. The aspherical claim appears to be unsubstantiated by primary or specialist sources. It may represent a confusion with other Zeiss Jena designs, or possibly an error that has been propagated through secondary literature without verification.

---

## 4. Glass Types

The Pancolar employs a remarkably simple glass palette: only three distinct glass types are used across six elements, with four of the six elements sharing a single crown glass. This economy of glass types reflects both the design philosophy of the era and the practical constraints of East German glass supply.

### Element I: nd = 1.66200, νd = 56.1 — Dense Barium Crown (SSK family)

This glass appears in all four convergent (positive-power) elements: I, II, V, and VI. Its six-digit code is 662/561, placing it in the dense barium crown (SSK — *Schwer-Schwerkron*) or lanthanum crown (LaK) region of the Abbe diagram. It has a moderately high refractive index with good dispersion.

No exact match exists in the modern Schott catalog. The glass sits in the boundary region between the dense barium crown (SSK) and lanthanum crown (LaK) families on the Abbe diagram — a zone that modern catalogs have reorganised. Schott N-LAK22 (nd = 1.65113, νd = 55.89) is in the same general neighbourhood but has noticeably lower index (Δnd = −0.011). This glass was almost certainly manufactured in Jena's own glassworks — VEB Carl Zeiss Jena maintained in-house optical glass production descended from the historic Schott & Genossen glassworks, which had been located in Jena before the postwar division. The patent's use of this single glass in four elements across both the front and rear groups is a deliberate design strategy: it simplifies production logistics while enabling the quasi-symmetric aberration correction that the double-Gauss form relies on.

The patent's Claim 1, condition (g), explicitly requires that all four convergent elements share the same glass type with a refractive index between 1.65 and 1.70. The choice of nd = 1.662 satisfies this condition comfortably.

### Element III: nd = 1.67246, νd = 32.3 — Dense Flint (SF family)

This glass is used only in Element III, the negative (dispersive) component of the front cemented doublet. Its six-digit code is 672/323, placing it squarely in the dense flint (SF — *Schwer-Flint*) family. The closest modern equivalent is Schott SF2 (nd = 1.67270, νd = 32.17), which differs by only Δnd = −0.00024 and Δνd = +0.13 — close enough to constitute an effective match. The Jena equivalent was almost certainly their in-house SF2 formulation.

Dense flint glass is the traditional choice for the negative elements in achromatic doublets. Its high dispersion (low Abbe number) provides the chromatic correction needed when cemented to the positive crown (Element II). The difference in refractive index between Elements II and III is remarkably small — only Δnd = 0.01046 — while the difference in dispersion is large (Δνd = 23.8). This is an order of magnitude smaller than the Δnd ≈ 0.10 typical of conventional Fraunhofer achromatic doublets, and it was highlighted as a design innovation in contemporary coverage: a 1957 article in Modern Photography described the selection of glasses for Elements II and III such that they had nearly identical refractive indices at yellow light. The practical consequence is that the cemented interface at r₄ contributes almost no refractive power at the design wavelength — it acts nearly purely as a chromatic corrector, introducing differential dispersion without generating significant monochromatic aberrations at the cemented surface. This "power-free chromatic surface" is a hallmark of sophisticated double-Gauss optimization.

### Element IV: nd = 1.60156, νd = 35.2 — Special Light Flint

This glass is used only in Element IV, the negative component of the rear cemented doublet. Its six-digit code is 602/352. This is a less common glass — a light-to-medium flint with moderate index and moderate dispersion. No exact match exists in modern major catalogs. The closest Schott glasses are F5 (nd = 1.60342, νd = 38.03) and the historical F4 (nd ≈ 1.600, νd ≈ 36.3), but neither is a precise match.

The choice of a different flint glass in the rear doublet versus the front doublet is a deliberate asymmetry in an otherwise quasi-symmetric design. By using a lower-index, lower-dispersion flint in Element IV (nd = 1.60156, νd = 35.2) compared to Element III (nd = 1.67246, νd = 32.3), the designers introduced a controlled asymmetry that helps correct higher-order monochromatic aberrations — particularly oblique spherical aberration and sagittal coma — that a perfectly symmetric design would leave uncorrected. The patent's Claim 1, condition (h), explicitly requires that the refractive index difference between the rear element of the rear dispersive meniscus (Element V, crown) and its front element (Element IV, flint) falls between 0.06 and 0.10. The actual difference is 1.66200 − 1.60156 = 0.06044, satisfying this condition at its lower bound.

### Summary of Glass Properties

| Element | nd | νd | Glass Family | Role |
|---------|----|----|-------------|------|
| I | 1.66200 | 56.1 | Dense Ba Crown (SSK) | Front positive |
| II | 1.66200 | 56.1 | Dense Ba Crown (SSK) | Doublet crown |
| III | 1.67246 | 32.3 | Dense Flint (SF2 equiv.) | Doublet flint |
| IV | 1.60156 | 35.2 | Special Light Flint | Doublet flint |
| V | 1.66200 | 56.1 | Dense Ba Crown (SSK) | Doublet crown |
| VI | 1.66200 | 56.1 | Dense Ba Crown (SSK) | Rear positive |

---

## 5. Element-by-Element Optical Analysis

All focal lengths in this section are computed at the patent's normalised f = 100 scale using the ABCD matrix (thick-lens) method. Production-scale values are obtained by dividing by 2.

### Element I — Front Positive Meniscus (f ≈ +126.8 mm)

Surfaces r₁ = +57.9, r₂ = +174.9. Both radii are positive, meaning both surfaces are convex toward the incoming light. The front surface (r₁) is more steeply curved than the rear (r₂), making this a positive meniscus — the classic Gauss-type front element. At 9.2 mm thick (scaled: 4.6 mm), it is a substantial element with a focal length approximately 1.25× the system focal length.

**Optical role:** Element I acts as the primary positive power element of the front group. Its meniscus shape reduces the angle of incidence of off-axis rays on the steeply curved front surface, which limits surface contributions to spherical aberration and coma. The relatively gentle rear surface (R = +174.9) produces only a weak negative refraction, so the element's net power is comfortably positive. By bending the element into a meniscus rather than a biconvex, the designers traded some raw power for significantly better off-axis performance — a hallmark of the Gauss evolution over the older Cooke triplet.

### Elements II + III — Front Cemented Doublet (f ≈ −159.0 mm)

Element II: surfaces r₃ = +43.5 (entry), r₄ = +53.5 (cemented junction). Positive meniscus, nd = 1.66200, νd = 56.1. Individually f ≈ +277.5 mm — a very weak positive element whose individual contribution to system power is modest.

Element III: surfaces r₄ = +53.5 (cemented junction, shared with II), r₅ = +26.7 (exit). Negative meniscus, nd = 1.67246, νd = 32.3. Individually f ≈ −90.7 mm — significantly stronger than Element II, which gives the doublet its net negative power.

The cemented doublet as a whole has a net focal length of approximately −159 mm — weakly negative. Its outer surfaces (r₃ and r₅) are both convex toward the front, making the doublet a meniscus that is concave toward the diaphragm, exactly as the patent describes.

**Optical role:** This is the critical "Gauss meniscus" of the front group. Its primary function is not to contribute significant optical power (its net power is weak) but rather to serve three simultaneous purposes. First, it provides chromatic correction: the crown (II) and flint (III) elements cancel each other's chromatic dispersion through the cemented interface at r₄. Second, the strongly curved rear surface r₅ = +26.7 is the steepest radius in the entire front group; it introduces controlled negative spherical aberration that partially balances the positive spherical aberration of Element I and the front surface of Element II. Third, the Petzval contribution of this doublet is strongly negative (−0.01506 at surface r₅ alone), which is essential for flattening the field curvature introduced by the positive outer elements.

The very weak individual power of Element II (f ≈ +277.5 mm) and the much stronger negative power of Element III (f ≈ −90.7 mm) reflect the unusual glass strategy described in Section 4. Because Elements II and III have nearly identical refractive indices (Δnd = 0.010), the cemented interface r₄ produces almost no refraction at the design wavelength. The two elements' individual powers arise almost entirely from their air-facing surfaces r₃ and r₅; the cemented interface contributes chromatic correction without introducing monochromatic aberrations.

### Elements IV + V — Rear Cemented Doublet (f ≈ −1,315 mm)

Element IV: surfaces r₆ = −30.1 (entry), r₇ = +137.0 (cemented junction). Biconcave, nd = 1.60156, νd = 35.2. Individually f ≈ −40.7 mm — the strongest negative element in the system.

Element V: surfaces r₇ = +137.0 (cemented junction, shared with IV), r₈ = −42.8 (exit). Biconvex, nd = 1.66200, νd = 56.1. Individually f ≈ +50.9 mm — a strong positive element that nearly cancels Element IV's power.

The cemented doublet as a whole has a very weak net focal length of approximately −1,315 mm — nearly afocal. This is a striking feature: while the front doublet has moderately negative power (f ≈ −159), the rear doublet contributes almost no net power at all.

**Optical role:** The rear doublet's near-afocal character reveals the designers' intent: it is optimised almost entirely for aberration correction rather than power contribution. Element IV's biconcave shape with a steeply curved front surface (r₆ = −30.1) introduces strong negative spherical aberration, which is the primary tool for correcting the overcorrected spherical contribution from the large air gap around the diaphragm. Element V's biconvex shape with a relatively strong rear surface (r₈ = −42.8) rebalances the ray bundle for handoff to Element VI. The chromatic correction at the r₇ cemented interface is qualitatively different from the front doublet. In the front doublet, the index difference across the cemented surface is tiny (Δnd = 0.010) while the dispersion difference is large (Δνd = 23.8), creating an almost power-free chromatic corrector. In the rear doublet, the index difference is much larger (Δnd = 0.060) while the dispersion difference is slightly smaller (Δνd = 20.9) — so the cemented surface contributes more refractive power but less pure chromatic leverage. This asymmetry between the two doublets is central to the design's monochromatic aberration correction, as discussed in Section 4.

The Petzval contributions of the rear doublet (−0.01248 at r₆ and +0.00931 at r₈) partially cancel, with a net negative residual that contributes to overall field flattening.

Element V is notably thick: d_V = 14.1 at f = 100 (7.05 mm at production scale). This is the thickest element in the system. The thick biconvex acts almost like a buried singlet within the doublet, contributing positive power while the long path length through the glass helps manage the height and angle of the marginal ray as it traverses the rear group.

### Element VI — Rear Positive Biconvex (f ≈ +103.2 mm)

Surfaces r₉ = +227.3, r₁₀ = −96.0. Both radii produce convex surfaces — a biconvex element. The rear surface (r₁₀ = −96.0) is significantly more strongly curved than the front (r₉ = +227.3), making this an asymmetric biconvex with most of its power concentrated on the rear surface.

**Optical role:** Element VI is the principal positive power element of the rear group, with a focal length (103.2 mm) very close to the system focal length (101.2 mm). Its asymmetric biconvex shape — with the strong surface facing the image — is the reverse of the "best-form" singlet orientation, but this is deliberate: in a double-Gauss design, the rear element must converge an already-converging ray bundle to the focus, and the strong rear surface provides the final refraction that directs rays toward the focal plane. The gently curved front surface (r₉ = +227.3) produces only a mild additional positive contribution, which minimises the surface contribution to spherical aberration at that interface.

The Petzval contribution of Element VI is entirely positive (+0.00175 at r₉ and +0.00415 at r₁₀), which must be balanced by the negative Petzval contributions of the cemented doublets.

---

## 6. Petzval Sum and Field Curvature

The surface-by-surface Petzval sum computes to **Σ = 0.001665**, yielding a Petzval radius of approximately 601 mm at f = 100 (or ~300 mm at production scale f ≈ 50.6). The ratio of Petzval radius to focal length is approximately 5.9 — a very good figure for a double-Gauss design of this era and speed, and comfortably larger than the minimum threshold of about 3× that would produce objectionable field curvature on 35mm format.

For comparison, a simple positive thin singlet of the same glass (nd = 1.662) would have a Petzval radius of n·f = 166.2 mm (at f = 100), giving a Petzval radius / f ratio of only 1.66. The double-Gauss configuration improves this by a factor of approximately 3.6× through the strategic placement of negative-power surfaces (r₅, r₆) that contribute strongly negative Petzval terms.

The largest individual Petzval contributions come from surface r₅ = +26.7 (−0.01506, strongly negative) and surface r₆ = −30.1 (−0.01248, strongly negative). Together, these two surfaces — the innermost surfaces of the two cemented doublets, facing each other across the diaphragm — account for the lion's share of the field-flattening correction. This is the fundamental mechanism of the double-Gauss: the steeply curved inner surfaces of the meniscus doublets provide the negative Petzval correction that the positive outer elements require.

---

## 7. Computed Paraxial Properties (at f = 100)

The following values were independently computed from the patent prescription using the ABCD matrix method (thick-lens paraxial ray trace), not taken from the patent text.

| Property | Computed Value | Patent Value |
|----------|---------------|--------------|
| Effective focal length (EFL) | 101.23 mm | 100 mm |
| Back focal length (BFL) | 73.72 mm | 72.4 (S′) |
| Front focal length (FFL) | −45.34 mm | — |
| Total optical track (r₁ to r₁₀) | 72.4 mm | — |
| Overall length (track + BFL) | 146.1 mm | — |

The computed EFL of 101.23 mm differs from the patent's stated f = 100 by 1.23%, and the BFL of 73.72 differs from the stated S′ = 72.4 by 1.32 mm (1.8%). These discrepancies are attributable to rounding in the patent's single-decimal-place prescription values — entirely typical for patents of this era where radii and thicknesses are rounded to the nearest 0.1 mm. The agreement is well within acceptable tolerances for patent verification.

### Marginal Ray Heights (f/2, collimated input, entrance pupil SD = 25.0)

| Surface | Height (mm) | Notes |
|---------|-------------|-------|
| r₁ | 25.00 | Entrance pupil |
| r₂ | 23.42 | |
| r₃ | 23.38 | |
| r₄ | 21.15 | |
| r₅ | 18.35 | Minimum in front group |
| r₆ | 16.46 | Near-minimum (diaphragm region) |
| r₇ | 17.02 | |
| r₈ | 18.94 | |
| r₉ | 18.90 | |
| r₁₀ | 18.21 | |

The marginal ray height decreases monotonically through the front group, reaches its minimum near the diaphragm (between r₅ and r₆), then increases through the rear group. This smooth progression is consistent with a well-designed double-Gauss and indicates that the stop is correctly placed at the natural waist of the marginal ray bundle.

---

## 8. Focusing Mechanism

The patent does not describe the focusing mechanism. For a standard lens of this era and configuration (6 elements, 4 groups, all-spherical, f/2 speed), the expected focusing method is **unit focusing** — the entire optical assembly translates forward as a rigid unit to focus at closer distances, with only the back focal distance (sensor-to-rear-element spacing) changing.

This is consistent with the mechanical construction of the production Pancolar 50/2, which uses a conventional helicoid to translate the entire lens barrel. The minimum focusing distance is 0.5 m. (The shorter 0.35 m figure sometimes encountered in discussions refers to the later Pancolar 50mm f/1.8, a distinct design.) Using Newton's equation for the thick-lens conjugate, unit focusing from infinity to 0.5 m requires approximately 5.7 mm of forward extension at production scale (f ≈ 50.6 mm), or equivalently ~11.4 mm at the patent's normalised f = 100. At the close-focus limit, the back focal distance increases by a corresponding amount (from 36.86 to 42.56 mm at production scale) while all internal air gaps remain fixed.

Since the patent provides data only at infinity focus, the close-focus BFD was computed via Newton's equation x·x′ = −f² using the thick-lens principal plane positions.

---

## 9. Patent Claims Analysis

The patent's Claim 1 defines a set of parametric constraints that any design within its scope must satisfy. Claim 2 then presents the specific numerical example (the prescription analysed in this document) as one instance satisfying all of Claim 1's conditions. The conditions were independently verified against the numerical example:

| Condition | Requirement | Actual | Status |
|-----------|-------------|--------|--------|
| (a) r₃ − \|r₈\| ≤ 0.02f | ≤ 2.0 | 0.7 | ✓ |
| (b) \|r₃\| + \|r₈\| ∈ [0.85f, 0.90f] | 85.0–90.0 | 86.3 | ✓ |
| (c) r₄ ∈ [0.50f, 0.55f] | 50.0–55.0 | 53.5 | ✓ |
| (d) r₇ ∈ [1.2f, 1.7f] | 120.0–170.0 | 137.0 | ✓ |
| (e) r₅ ∈ [0.26f, 0.28f] | 26.0–28.0 | 26.7 | ✓ |
| (f) \|r₆\| ∈ [0.29f, 0.32f] | 29.0–32.0 | 30.1 | ✓ |
| (g) All convergent elements: nd ∈ [1.65, 1.70] | — | 1.662 | ✓ |
| (h) nd(V) − nd(IV) ∈ [0.06, 0.10] | — | 0.060 | ✓ |

All eight conditions are satisfied. Condition (h) is met at its lower bound (0.06044 ≈ 0.06), suggesting the designers chose the minimum index difference that the patent scope allowed for the rear doublet — maximising the index contrast with the crown while keeping it just within the claimed range.

---

## 10. Production Scaling

The patent prescription is normalised to f = 100. The production Pancolar 50mm f/2 operates at approximately half this focal length, requiring a uniform scale factor of 0.5 applied to all linear dimensions (R, d, sd). Angular quantities (f-number, field angle) and material properties (nd, νd) are scale-invariant and remain unchanged.

At production scale (f ≈ 50.6 mm), the key physical dimensions become: total optical track ≈ 36.2 mm, back focal length ≈ 36.9 mm, overall length ≈ 73.1 mm, and the air gap containing the diaphragm narrows to approximately 10.0 mm. The half-field angle on 35mm format (24 × 36 mm) is approximately 23.2°, yielding a full diagonal field of view of roughly 46.3°.

The back focal length deserves particular attention. As the German CZJ reference zeissikonveb.de explains, the BFL of 72.4% of focal length was the key optical achievement that made a 50mm SLR lens feasible. Contemporary SLR mirror boxes required a minimum of approximately 37mm of free air path behind the last lens vertex for the reflex mirror to operate. At f = 50mm, the BFL of ~36.2 mm (or ~36.9 mm using the computed EFL) is right at this threshold. By comparison, the older Biotar 58mm f/2 had a shorter BFL-to-focal-length ratio — perfectly adequate at 58mm but insufficient had the focal length been shortened to 50mm without a fundamental redesign of the front group. The Pancolar's meniscus-heavy front group design — with all five optical surfaces before the stop (r₁ through r₅) convex toward the object — is what achieved the necessary BFL increase, and it explains why the patent's descriptive text and claims focus so heavily on the meniscus forms and their radii.

---

## 11. Design Lineage and Significance

The Pancolar sits firmly in the lineage of symmetric double-Gauss derivatives that began with Rudolph's Planar (1896) and evolved through the Biotar, Ultron, Xenon, and Summicron families. Its 6-element, 4-group configuration with two cemented meniscus doublets flanking a central stop is the most common form of this archetype.

What distinguishes the Pancolar's design from many of its contemporaries is the extreme economy of its glass selection — four of six elements using identical glass. This is not merely a manufacturing convenience; it is a deliberate optical strategy. By using the same crown glass on both sides of the diaphragm, the designers ensured that the chromatic properties of the front and rear groups would be inherently matched, simplifying the chromatic balancing problem and allowing the (necessarily asymmetric) monochromatic correction to be tuned independently. The intentional asymmetry is then introduced through the flint glass selection: a heavier flint (SF2 equivalent, νd = 32.3) in the front doublet and a lighter special flint (νd = 35.2) in the rear doublet.

The design achieves a Petzval sum of 0.00167 (at f = 100), corresponding to a Petzval radius approximately 5.9× the focal length — excellent field flatness for a double-Gauss of this era and speed.
