# Nikon AF-S NIKKOR 120-300mm f/2.8E FL ED SR VR — Optical Analysis

**Patent:** JP 2020-177057 A (filed 2019-04-16, published 2020-10-29)
**Inventors:** Masashi Yamashita, Toshinori Take (Nikon Corporation)
**Embodiment analysed:** Example 1 (Table 1)
**Production lens:** AF-S NIKKOR 120-300mm f/2.8E FL ED SR VR (released January 2020)

---

## 1. Overview

JP 2020-177057 A describes a five-group zoom optical system of the form **G1(+) G2(−) G3(+) G4(+) G5**, covering 120–300 mm at a constant f/2.8 maximum aperture. Example 1 contains 25 elements in 19 air-separated sub-groups — matching the production lens's published specification of **25 elements / 19 groups** exactly. All optical surfaces in Example 1 are spherical or planar; the patent explicitly notes (claim 18) that every lens surface in the design may be spherical or flat, and Nikon's published specifications list no aspherical surfaces.

The production lens's published specifications confirm: 1 ED element, 2 fluorite (FL) elements, and 1 SR (Short-wavelength Refractive) element. The following analysis identifies each of these within the patent prescription and describes the role of every element.

### Key specifications (patent Example 1 vs. production)

| Parameter | Patent Ex. 1 | Production |
|-----------|-------------|------------|
| Focal length | 123.6–291.0 mm | 120–300 mm |
| Maximum aperture | f/2.91 | f/2.8 |
| Half-field (wide) | 2ω = 19.57° | 2ω = 20° 20′ |
| Elements / groups | 25 / 5 macro-groups | 25 / 19 |
| Total track length | 341.22 mm (constant) | 303.5 mm (barrel length) |
| Back focal distance | 54.82 mm | — |
| Image height | 21.63 mm | FX (43.3 mm circle) |
| Close focus | — | 2.0 m |
| Filter | — | 112 mm |
| Diaphragm | 1 (in G5) | 9 blades, rounded |

The patent's focal length range of 123.6–291.0 mm and f/2.91 aperture are close but not identical to the marketed 120–300 mm f/2.8. This is typical: patent embodiments use normalised or slightly different design forms, and the production lens undergoes final tuning. The lens is designed for FX-format (image height Y = 21.63 mm corresponds to a 43.26 mm image diagonal, matching the 35 mm full-frame standard).

---

## 2. Group Structure and Zoom/Focus Mechanism

### 2.1 Group composition

| Group | Elements | Power | Zoom behaviour | Sub-groups |
|-------|----------|-------|----------------|------------|
| G1 | L11–L13 (3 elements) | Positive (f = +250.6 mm) | **Fixed** | 2 |
| G2 | L21–L26 (6 elements) | Negative (f = −69.7 mm) | Moves image-side for tele | 4 |
| G3 | L31–L34 (4 elements) | Positive (f = +109.0 mm) | **Fixed** | 4 |
| G4 | L41–L43 (3 elements) | Positive (f = +89.9 mm) | Moves for zoom & focus | 2 |
| G5 | L51–L59 (9 elements) | Negative (f = −145.8 mm) | **Fixed** | 7 |

Sub-group total: 2 + 4 + 4 + 2 + 7 = **19**, confirming the Nikon specification.

### 2.2 Zoom mechanism

During zooming from wide (123.6 mm) to telephoto (291 mm), **only G2 and G4 move** along the optical axis while G1, G3, and G5 remain fixed relative to the image plane. Because G1 is the front group and is fixed, the lens's overall physical length does not change during zooming — an important ergonomic feature for professional sports use.

The variable air gaps at infinity focus are:

| Gap | Location | Wide | Mid | Tele | Δ (wide→tele) |
|-----|----------|------|-----|------|---------------|
| D1 | G1–G2 | 5.11 | 39.91 | 66.47 | +61.36 |
| D2 | G2–G3 | 62.92 | 28.12 | 1.56 | −61.36 |
| D3 | G3–G4 | 21.24 | 17.60 | 18.67 | −2.58 |
| D4 | G4–G5 | 5.97 | 9.61 | 8.54 | +2.57 |

The sum D1 + D2 + D3 + D4 = 95.24 mm at all zoom positions, confirming the constant overall length. Moreover, D1 + D2 ≈ 68.03 mm and D3 + D4 ≈ 27.21 mm are each independently constant — this follows necessarily from the mechanical constraint that each moving group (G2 and G4 respectively) operates between pairs of fixed groups (G1–G3 and G3–G5). G2 moves monotonically image-side by 61.36 mm (wide to tele), which is the primary variator motion: D1 increases and D2 decreases by equal amounts. G4 exhibits non-monotonic motion: it first moves object-side (wide→mid), then reverses back image-side (mid→tele). This is evident from D3 decreasing then increasing, and D4 doing the opposite.

### 2.3 Focus mechanism

The patent states that **G4 is the focusing group** (paragraph 0057). For close-focus, G4 moves toward the object side. This is an internal focusing (IF) design: neither the front element nor the overall length changes during focus. G4 is relatively compact (3 elements, f = +89.9 mm) and lightweight, enabling fast autofocus — consistent with the production lens's emphasis on AF tracking speed for sports photography.

The patent does not provide explicit close-focus variable gap data in Example 1's table, but the mechanism is clear: as G4 moves object-side for close focus, D3 decreases and D4 increases proportionally.

### 2.4 Vibration reduction

Paragraph 0058 states that a portion of G5 serves as the vibration-reduction (VR) lens group, shifted perpendicular to the optical axis to correct image stabilisation. The specific VR sub-group within G5 is not identified in the Example 1 prescription, but based on the optical design, the L54+L55 cemented pair (a negative doublet located after a large air gap within G5) is the most likely VR group — it sits in a relatively low-ray-height region behind the aperture stop, making it suitable for lateral decentring without introducing excessive coma.

### 2.5 Aperture stop

The aperture stop is located at surface m = 31, between L51 (the first element of G5) and L52. It is a flat surface (R = ∞) in an 8.0 mm air gap. Because G5 is fixed during zoom, the aperture stop position relative to the image plane does not change during zooming — the patent notes (paragraph 0012) this allows faster stop actuation and higher continuous shooting speeds, since the beam diameter at the stop is relatively small.

---

## 3. Conditional Expressions

The patent defines 11 conditional expressions. All are verified computationally for Example 1:

| Condition | Expression | Computed | Patent | Range |
|-----------|-----------|----------|--------|-------|
| (1) | (−f2) / Δx2 | 1.14 | 1.14 | 0.70–1.50 |
| (2) | f1 / f3 | 2.30 | 2.30 | 1.50–3.00 |
| (3) | f1 / (−f2) | 3.60 | 3.60 | 2.50–4.50 |
| (4) | Da21 / Dp21 | 1.71 | 1.71 | 0.50–2.50 |
| (5) | θgFP1 − 0.6558 + 0.001982 × νdP1 | −0.004 | −0.004 | −0.015 to −0.000 |
| (6) | νdP2 | 24.71 | 24.71 | 18.00–35.00 |
| (7) | ndP2 + 0.01425 × νdP2 | 2.11 | 2.11 | 1.83–2.15 |
| (8) | θgFP2 + 0.00316 × νdP2 | 0.71 | 0.71 | > 0.702 |
| (9) | f1 / (−fRw) | 1.72 | 1.72 | −3.00 to 3.00 |
| (10) | β4w | 0.26 | 0.26 | 0.05–0.70 |
| (11) | β4t / β4w | 0.89 | 0.89 | 0.60–1.30 |

Where Δx2 = 61.357 mm is the image-side movement of G2 from wide to tele; Da21 = 12.972 mm is the air gap after L21; Dp21 = 7.600 mm is the thickness of L21; "P1" refers to the first positive lens in G2 (L21); and "P2" refers to the second positive lens in G2 (L25).

---

## 4. Glass Identification and Special Elements

### 4.1 Summary of special elements

| Type | Count | Elements | Glass family |
|------|-------|----------|-------------|
| Fluorite (FL) | 2 | L13 (G1), L32 (G3) | CaF₂ (nd = 1.4338, νd = 95.27) |
| ED | 1 | L12 (G1) | S-FPL51 type (nd = 1.4978, νd = 82.57) |
| SR | 1 | Uncertain — see §4.4 | KZFS-family or anomalous-dispersion glass |

### 4.2 Fluorite elements (L13 and L32)

Both fluorite elements share identical optical properties: nd = 1.433843, νd = 95.27. This matches calcium fluoride (CaF₂) to within measurement tolerance. Fluorite has the highest Abbe number of any practical optical material, giving it extremely low chromatic dispersion. It is also significantly lighter than optical glass of equivalent volume — a critical advantage in a 3.25 kg lens.

**L13** is the rear element of G1, a plano-convex lens (convex front toward the object, flat rear; f = +312 mm). Positioned in the front group where ray heights are large, it provides powerful positive refractive power with minimal chromatic contribution. Its rear surface is flat (R = ∞), which simplifies the manufacture and testing of this expensive fluorite crystal.

**L32** is the second element of G3, a biconvex positive lens (f = +155 mm). Located in the fixed relay group G3, it handles a converging beam at moderate height and contributes strong positive power with negligible dispersion, helping to maintain colour correction across the entire zoom range.

### 4.3 ED element (L12)

L12 (nd = 1.49782, νd = 82.57) is a biconvex positive lens in G1, cemented to the negative meniscus L11 to form a weakly positive achromatic doublet (f ≈ +1226 mm). The glass matches HIKARI MC-FPL51 — the HIKARI catalog equivalent of OHARA S-FPL51 — to full quoted precision. This is a phosphate-crown ED glass with very low dispersion (νd ≈ 82.6) and moderate anomalous partial dispersion.

Together, the L11+L12 cemented doublet at the front of G1 serves as a large-diameter achromatic corrector. L11 uses S-LAH93 (nd = 1.9027, νd = 35.77), a high-index lanthanum-crown glass. The strong negative meniscus L11 paired with the low-dispersion positive L12 provides first-order achromatisation for the entire front group, while the high refractive index of L11 keeps the front element diameter manageable despite the large entrance pupil required for f/2.8 at 300 mm.

### 4.4 SR element — candidates and uncertainty

Nikon describes SR glass as "a high- and specialized-dispersion glass lens featuring characteristics to greatly refract light with wavelengths shorter than that of blue." One reviewer (Shutterbug) specifically notes the SR element "reduces spherochromatism" — the variation of chromatic aberration with aperture zone, a distinct aberration from simple longitudinal CA. No public Nikon source identifies which of the 25 elements carries the SR designation, and the patent does not use the term "SR." The identification must therefore be inferred from glass properties.

Three elements in Example 1 use glasses from the KZFS ("short flint special") or anomalous-partial-dispersion families, making each a plausible SR candidate:

**Candidate 1 — L21 (G2, positive meniscus):** nd = 1.720467, νd = 34.71, θgF = 0.583. This matches OHARA S-LAM52 / Schott N-KZFS8 exactly. N-KZFS8 is a well-known KZFS glass with anomalous partial dispersion. L21 sits at the front of the moving variator group G2, where it acts as a chromatic pre-corrector. The patent's conditional expression (5) specifically constrains L21's partial dispersion, indicating Nikon selected this glass for its dispersion properties. However, S-LAM52 / N-KZFS8 is a long-established catalog glass used in many designs — it would be unusual for Nikon to rebrand it as a "newly developed" element.

**Candidate 2 — L25 (G2, positive meniscus):** nd = 1.755750, νd = 24.71, θgF = 0.629. This matches OHARA S-NBH52V, a niobium-phosphate glass with strong anomalous partial dispersion. The patent's conditional expressions (6)–(8) constrain this glass's properties, and condition (8) — θgFP2 + 0.00316 × νdP2 > 0.702 — explicitly requires high anomalous dispersion. S-NBH52V is also a catalog glass, though from a more specialised family.

**Candidate 3 — L33 (G3, biconcave negative):** nd = 1.654130, νd = 39.72. This matches Schott N-KZFS5 / OHARA S-LAM61 very closely (Δnd ≈ 0.00001). Like N-KZFS8, N-KZFS5 is a KZFS-family glass with anomalous blue-violet dispersion. L33 sits in the fixed relay group G3, sandwiched between the fluorite L32 and the high-index L34, forming a triplet arrangement ideal for secondary spectrum correction. Its position in a fixed group means its correction is invariant across the zoom range.

**Assessment:** The patent does not distinguish any element as proprietary or "newly developed." All three candidates match well-established catalog glasses. It is possible that the SR designation in the production lens corresponds to a proprietary Nikon melt whose properties were approximated by a standard catalog glass in the patent embodiment — a common practice in optical patents. Of the three candidates, **L33 is the strongest from a design perspective**: it occupies a fixed group (constant correction across zoom), it is the only KZFS-type glass in a fixed group, and its triplet pairing with fluorite is the classic arrangement for secondary spectrum correction. However, this assessment remains inferential and cannot be confirmed without Nikon's proprietary lens construction diagrams.

### 4.5 Complete glass identification table

| Element | nd | νd | θgF | Glass match | Residual | Confidence |
|---------|----|----|-----|------------|----------|------------|
| L11 | 1.902650 | 35.77 | — | OHARA S-LAH93 | exact | High |
| L12 | 1.497820 | 82.57 | — | HIKARI MC-FPL51 (≈S-FPL51, **ED**) | exact | High |
| L13 | 1.433843 | 95.27 | — | CaF₂ (**fluorite**) | Δnd < 0.00001 | High |
| L21 | 1.720467 | 34.71 | 0.583 | OHARA S-LAM52 (= Schott N-KZFS8) | exact | High |
| L22 | 1.717360 | 29.53 | — | HOYA E-ADF10 | exact | High |
| L23 | 1.696800 | 55.52 | — | OHARA S-TIM35 | exact | High |
| L24 | 1.804000 | 46.60 | — | OHARA S-LAH52 | exact | High |
| L25 | 1.755750 | 24.71 | 0.629 | OHARA S-NBH52V | exact | High |
| L26 | 1.870705 | 40.73 | — | HOYA M-TAFD305 (PGM type) | Δnd ≈ 0.00001 | High (glass ID); uncertain (sourcing) |
| L31 | 1.755000 | 52.34 | — | OHARA S-LAM55 | exact | High |
| L32 | 1.433843 | 95.27 | — | CaF₂ (**fluorite**) | Δnd < 0.00001 | High |
| L33 | 1.654130 | 39.72 | — | Schott N-KZFS5 / OHARA S-LAM61 (SR candidate) | Δnd ≈ 0.00001 | High |
| L34 | 1.910820 | 35.25 | — | OHARA S-NPH4 | exact | High |
| L41 | 1.804000 | 46.60 | — | OHARA S-LAH52 | exact | High |
| L42 | 1.593490 | 67.00 | — | OHARA S-FPM2 | exact | High |
| L43 | 1.846660 | 23.82 | — | OHARA S-TIH53W | Δνd = 0.04 | High |
| L51 | 2.001000 | 29.12 | — | OHARA S-NPH2 | exact | High |
| L52 | 1.729160 | 54.61 | — | OHARA S-BAH28 | exact | High |
| L53 | 1.870705 | 40.73 | — | HOYA M-TAFD305 (PGM type) | Δnd ≈ 0.00001 | High (glass ID); uncertain (sourcing) |
| L54 | 1.805180 | 25.41 | — | OHARA S-LAH63Q (≈S-TIH6) | Δνd = 0.05 | High |
| L55 | 1.516800 | 64.14 | — | OHARA S-BSL7 | Δνd = 0.06 | High |
| L56 | 2.001000 | 29.12 | — | OHARA S-NPH2 | exact | High |
| L57 | 1.804000 | 46.60 | — | OHARA S-LAH52 | exact | High |
| L58 | 1.487490 | 70.31 | — | OHARA S-FSL5 / Schott N-FK5 family | Δνd ≈ 0.08–0.13 | High |
| L59 | 1.900430 | 37.38 | — | OHARA S-LAH75 | exact | High |

L26 and L53 share the same glass (nd = 1.870705, νd = 40.73). This glass code (1871/407) matches HOYA M-TAFD305 (nd = 1.87070, νd = 40.73) almost exactly, a precision glass mold (PGM) type. No conventional-polishing catalog glass from OHARA, Schott, or HOYA matches within normal tolerances — the nearest conventional glass is Schott N-LASF31A (nd = 1.88300, νd = 40.76), which differs by Δnd = 0.012. The glass may be a Nikon-specified melt, a HOYA special-order variant, or sourced from a supplier not checked (e.g., Sumita or HIKARI).

---

## 5. Element-by-Element Optical Role Analysis

### 5.1 Group 1 — Front objective (positive, fixed)

G1 is the large-diameter front group that collects light from the object. It has two sub-groups: a cemented doublet (L11+L12) and a singlet (L13).

**L11 (negative meniscus, S-LAH93, f = −322 mm):** The first element the light encounters. Its high refractive index (nd = 1.903) reduces the curvature needed on the front surface, keeping the front element diameter manageable. As the negative element of the front doublet, it introduces negative dispersion that partially cancels the positive dispersion of L12.

**L12 (biconvex positive, ED glass, f = +255 mm):** Cemented to L11, this ED element provides the primary positive power of the front doublet. Its very high Abbe number (νd = 82.57) means it contributes almost no chromatic aberration despite its strong curvature. The L11+L12 doublet together has a very long focal length (+1226 mm), acting as a weak positive corrector — its primary role is chromatic correction rather than optical power.

**L13 (plano-convex, fluorite, f = +312 mm):** The main positive power element of G1. Its convex front surface (R = +135.41) faces the object, while the rear surface is flat (R = ∞) — a configuration that simplifies manufacture and testing of the fluorite crystal. Fluorite's ultra-low dispersion (νd = 95.27) ensures that this powerful positive element adds minimal colour to the beam. Its position at the rear of G1, where ray heights are still large but slightly reduced from the front, balances manufacturing difficulty against optical performance.

The G1 group focal length is +250.6 mm, producing a gently converging beam that enters G2. The combination of ED glass and fluorite in G1 provides aggressive primary and secondary chromatic correction from the very first group — essential for a long-focal-length zoom.

### 5.2 Group 2 — Variator (negative, moves for zoom)

G2 is the primary zoom variator. Its strong negative power (f = −69.7 mm) diverges the beam from G1, and by sliding image-side during zooming (61.4 mm of travel from wide to tele), it changes the system's effective focal length. G2 contains 6 elements in 4 sub-groups, making it the most complex group after G5.

**L21 (positive meniscus, S-LAM52, f = +184 mm):** The first element in G2 is *positive* — an unusual choice for a negative group. The patent explains (paragraph 0022) that placing a positive element at the object side of G2 aids chromatic correction across the zoom range. L21's partial dispersion (θgF = 0.583) satisfies condition (5), indicating it has specific anomalous dispersion properties that help correct secondary spectrum. The air gap after L21 (Da21 = 12.97 mm) is large relative to its thickness (7.6 mm), satisfying condition (4); this separation is needed for the positive element to work as an independent chromatic corrector rather than merely cancelling the adjacent negative elements.

**L22+L23 (cemented doublet, f = −275 mm):** L22 (biconvex, E-ADF10, νd = 29.53) is a high-dispersion positive element cemented to L23 (biconcave, S-TIM35, νd = 55.52), a moderate-dispersion negative lens. This doublet is weakly negative and primarily serves to correct monochromatic aberrations (spherical aberration and coma) generated by the strong negative power of G2, while maintaining chromatic balance.

**L24+L25 (cemented doublet, f = −99 mm):** This is the main power element of G2. L24 (biconcave, S-LAH52, νd = 46.60) provides the bulk of the negative power, while L25 (positive meniscus, S-NBH52V, νd = 24.71, θgF = 0.629) is a high-dispersion, anomalous-partial-dispersion glass. L25 is identified in the patent as the "second lens" (第2レンズ) and satisfies conditions (6)–(8), which specify its glass properties for secondary spectrum correction. The L24+L25 combination ensures that G2's strong negative power does not introduce excessive longitudinal chromatic aberration or secondary spectrum.

**L26 (negative meniscus convex to image, nd = 1.8707, f = −111 mm):** The rear element of G2, a meniscus with both surfaces concave toward the object (R14 = −84.29, R15 = −651.88). It adds negative power and helps control the divergence angle of the beam leaving G2, correcting field curvature and astigmatism.

### 5.3 Group 3 — Relay (positive, fixed)

G3 is a fixed positive relay group (f = +109 mm) that reconverges the diverging beam from G2 and relays it toward G4. Because it is stationary during zoom, its aberration contribution is constant, making it the ideal location for precision colour correction elements.

**L31 (biconvex positive, S-LAM55, f = +165 mm):** The first converging element of the relay. Moderate-dispersion crown glass (νd = 52.34) providing positive power.

**L32 (biconvex positive, fluorite, f = +155 mm):** The second fluorite element in the design. Its ultra-low dispersion provides strong positive power with negligible chromatic contribution — essential for maintaining achromatism through the relay.

**L33 (biconcave negative, N-KZFS5 type, f = −76 mm):** The leading SR element candidate (see §4.4). This N-KZFS5 / S-LAM61 type glass has anomalous partial dispersion that is specifically suited for correcting secondary (residual) chromatic aberration — the colour error that remains after primary red-blue achromatisation. Positioned between two strong positive elements (the fluorite L32 and the high-index L34), L33 forms a triplet-like arrangement that simultaneously corrects secondary spectrum, Petzval field curvature, and higher-order chromatic aberrations. The "short flint special" glass family to which L33 belongs is characterised by enhanced refraction of short-wavelength (blue-violet) light, consistent with the property Nikon markets as "SR."

**L34 (biconvex positive, S-NPH4, f = +105 mm):** A high-index, moderate-dispersion positive element (nd = 1.911, νd = 35.25) that completes the relay group. Its high refractive index keeps curvatures moderate despite the strong power, reducing higher-order spherical aberration.

### 5.4 Group 4 — Focus group (positive, moves for zoom and focus)

G4 is a compact positive group (f = +89.9 mm, 3 elements, 2 sub-groups) that serves dual roles: it participates in zoom motion and is the sole focusing group. Its relatively small size and light weight enable fast autofocus actuation.

**L41 (plano-convex, S-LAH52, f = +147 mm):** A high-index positive element with a flat object-side surface. The flat surface simplifies the mechanical interface where G4 slides within the barrel.

**L42+L43 (cemented doublet, f = +241 mm):** L42 (biconvex, S-FPM2, νd = 67.00) is a low-dispersion positive crown cemented to L43 (biconcave, S-TIH53W, νd = 23.82), a high-dispersion negative flint. This is a classic achromatic doublet providing positive power with colour correction. The large Abbe-number difference (Δνd ≈ 43) ensures effective primary achromatisation.

During focus, the entire G4 group translates toward the object to focus on closer subjects. Because G4 has a relatively short focal length (+89.9 mm) and sits behind the relay group in a region of moderate ray height, its motion produces efficient focus-distance change with minimal aberration variation — the patent notes (paragraph 0018) that this configuration minimises spherical aberration change during focus.

### 5.5 Group 5 — Rear group (negative, fixed, contains aperture stop)

G5 is the largest group (9 elements, 7 sub-groups) and contains the aperture stop. Its overall negative power (f = −145.8 mm) works with the preceding positive groups to create a telephoto-type configuration that keeps the total track length shorter than the effective focal length. G5 also contains the VR lens group for image stabilisation.

**L51 (biconcave negative, S-NPH2, f = −56 mm):** A powerful negative element made of ultra-high-index glass (nd = 2.001). Positioned before the aperture stop, it strongly diverges the beam, controlling pupil position and the angle of incidence on the stop. The extreme refractive index keeps this element thin despite its strong power.

**Aperture stop** (surface 31): Located in an 8 mm air gap between L51 and L52. Fixed during zoom.

**L52 (biconvex positive, S-BAH28, f = +94 mm):** Immediately after the stop, this moderate-power positive element begins reconverging the beam.

**L53 (negative meniscus, nd = 1.8707, f = −144 mm):** A weak negative corrector that controls field curvature and astigmatism in the near-stop region.

**L54+L55 (cemented doublet, f = −205 mm):** L54 (positive meniscus, S-LAH63Q-type, νd = 25.41) cemented to L55 (biconcave negative, S-BSL7, νd = 64.14). This negative doublet is the probable **VR group**: its position behind the stop in a low-ray-height region makes it suitable for lateral shift to correct image shake. The large Abbe-number difference provides chromatic correction within the VR group to prevent colour shifts during stabilisation.

**L56 (biconvex positive, S-NPH2, f = +76 mm):** Another ultra-high-index element (nd = 2.001), providing strong positive power in a compact package.

**L57+L58 (cemented doublet, f = +107 mm):** L57 (negative meniscus, S-LAH52) cemented to L58 (biconvex positive, S-FPL7-type, νd = 70.31). This achromatic positive doublet continues the beam convergence toward the image plane. L58's high Abbe number indicates an ED-adjacent glass, contributing to the low residual chromatic aberration characteristic of this design.

**L59 (biconcave negative, S-LAH75, f = −60 mm):** The final element, a field-flattening negative lens. Positioned close to the image plane, it primarily corrects Petzval field curvature and adjusts the exit pupil position for compatibility with digital sensor microlens arrays.

---

## 6. Chromatic Correction Strategy

The 120–300 mm f/2.8 zoom faces an extreme chromatic correction challenge: at 300 mm and f/2.8, the entrance pupil diameter exceeds 100 mm, and secondary spectrum scales with focal length. The patent's approach deploys four distinct strategies, distributed across the fixed groups to maintain correction stability during zoom:

1. **Primary achromatisation in G1** via the ED element (L12) paired with high-index flint (L11), supplemented by the fluorite singlet L13. The ED glass's high Abbe number and moderate anomalous dispersion provide first-order and partial second-order correction.

2. **Secondary spectrum correction in G2** via two specially selected glasses: L21 (S-LAM52, θgF = 0.583) and L25 (S-NBH52V, θgF = 0.629). The patent's conditional expressions (5)–(8) specifically constrain these glasses' partial dispersion to control secondary spectrum across the zoom range. Because G2 moves during zoom, having two such correctors at different positions within the group ensures that the correction remains balanced as the group translates.

3. **Fixed secondary-spectrum correction in G3** via the fluorite–KZFS–high-index triplet arrangement (L32–L33–L34). The fluorite L32 and KZFS-type L33 work as a pair: fluorite has anomalous partial dispersion on the "long" side (excessive blue-to-green relative to green-to-red), while the KZFS-type glass has anomalous dispersion on the "short" side. Together they cancel secondary spectrum more effectively than either could alone. If L33 is indeed the production SR element, this fixed-group placement ensures invariant secondary-spectrum correction across the zoom range. Nikon also notes that the SR element reduces spherochromatism — the variation of chromatic aberration with aperture zone — which is a significant concern at f/2.8 with a 100+ mm entrance pupil.

4. **Residual correction in G5** via the high-index S-NPH2 elements (L51, L56) and the low-dispersion L58, providing final chromatic fine-tuning in the fixed rear group.

This distributed approach — splitting chromatic correction across three fixed groups (G1, G3, G5) and one moving group (G2) — is essential for maintaining colour performance across a 2.4× zoom range. The all-spherical design relies entirely on glass selection rather than aspherical surfaces for aberration control, which simplifies manufacturing and assembly tolerances (as the patent notes in paragraph 0043).

---

## 7. Verified Paraxial Data

All values below were independently computed via ABCD-matrix paraxial ray trace and agree with the patent to the precision shown.

### 7.1 System EFL at each zoom position

| Position | Patent f (mm) | Computed f (mm) | Error |
|----------|--------------|----------------|-------|
| Wide | 123.600 | 123.597 | < 0.01% |
| Mid | 200.000 | 199.997 | < 0.01% |
| Tele | 291.000 | 290.997 | < 0.01% |

### 7.2 Group focal lengths

| Group | Patent (mm) | Computed (mm) |
|-------|------------|---------------|
| G1 | +250.635 | +250.625 |
| G2 | −69.674 | −69.674 |
| G3 | +108.979 | +108.979 |
| G4 | +89.868 | +89.868 |
| G5 | −145.810 | −145.813 |

### 7.3 Element focal lengths (thick-lens, in-air)

| Element | f (mm) | Element | f (mm) |
|---------|--------|---------|--------|
| L11 | −322.4 | L34 | +104.5 |
| L12 | +254.5 | L41 | +147.2 |
| L13 | +312.1 | L42 | +81.4 |
| L21 | +183.9 | L43 | −117.3 |
| L22 | +192.7 | L51 | −55.8 |
| L23 | −111.8 | L52 | +94.4 |
| L24 | −69.0 | L53 | −144.4 |
| L25 | +213.2 | L54 | +104.5 |
| L26 | −111.4 | L55 | −69.6 |
| L31 | +164.8 | L56 | +76.4 |
| L32 | +155.4 | L57 | −92.0 |
| L33 | −76.0 | L58 | +49.5 |
| — | — | L59 | −59.6 |

### 7.4 Cemented doublet focal lengths

| Doublet | Location | f (mm) |
|---------|----------|--------|
| L11+L12 | G1 front | +1226.4 |
| L22+L23 | G2 | −275.0 |
| L24+L25 | G2 | −99.4 |
| L42+L43 | G4 | +241.1 |
| L54+L55 | G5 (probable VR) | −204.5 |
| L57+L58 | G5 rear | +106.8 |

---

## 8. Aspherical Surfaces

**There are none.** All 46 optical surfaces in Example 1 are spherical or planar. The patent's claim 18 explicitly states that all lens surfaces in the design may be spherical or flat. Nikon's production specifications also do not list any aspherical elements.

This is notable for a modern high-performance zoom — most contemporary telephoto zooms employ at least one or two aspherical surfaces. The all-spherical design is achieved through the large element count (25 elements provides enough degrees of freedom for correction) and the careful selection of anomalous-dispersion glasses. The patent notes (paragraph 0043) that this approach simplifies manufacturing and assembly, reducing performance sensitivity to alignment errors.

---

## 9. Design Context

The AF-S NIKKOR 120-300mm f/2.8E FL ED SR VR was announced on September 4, 2019 and released on January 7, 2020. It was the first Nikon F-mount lens to combine both ARNEO Coat and Nano Crystal Coat, and one of the first Nikon lenses to use SR glass (the other being the NIKKOR Z 58mm f/0.95 S Noct, announced September 2018).

The 120–300mm focal range is unusual in the market, with the only competitor being the Sigma 120-300mm f/2.8 DG OS HSM Sport. The lens was clearly designed for professional sports photography — its release was timed to coincide with the Nikon D6 and the (subsequently postponed) 2020 Tokyo Olympics. The constant f/2.8 aperture, fast autofocus via lightweight G4 internal focusing, and constant overall length during zoom are all optimised for the demanding shooting conditions of professional sports events.

The constant total track length (341.22 mm) deserves emphasis: the sum D1 + D2 + D3 + D4 = 95.24 mm is invariant across all zoom positions, and because G1 and G5 are fixed, the lens barrel length never changes. This is achieved by having G2's image-side zoom motion (which increases D1 and decreases D2 by equal amounts) be fully absorbed within the fixed G1–G3 envelope, while G4's comparatively small motion (±2.6 mm) occurs within the fixed G3–G5 envelope.

---

## 10. Data File Notes

### 10.1 File identification

| Item | Value |
|------|-------|
| Data file | `NikonNikkorAFS120300mmf28.data.ts` |
| Spec version | LENS_DATA_SPEC v7+ |
| Key | `nikkor-afs-120-300f28e` |

### 10.2 Semi-diameter methodology

The patent provides no semi-diameter data. SDs were estimated by the following procedure:

1. A paraxial marginal ray was traced at the design f-number (f/2.91) through all 46 surfaces at each of the three zoom positions (wide, mid, tele).
2. The maximum marginal ray height at each surface across all three zoom positions was taken as the baseline aperture requirement.
3. An 8% mechanical clearance factor was applied to each baseline height.
4. The front four surfaces (m1–m4) were capped at 54 mm, corresponding to the 112 mm filter thread radius of the production lens.
5. Cemented junction surfaces were assigned matching SDs on both sides of each cement boundary.
6. Cross-gap sag clearance was validated at all zoom positions using the renderer's sag-intrusion algorithm. Several surfaces in G3 required significant SD reductions to satisfy the constraint:

| Surface | Initial SD (mm) | Final SD (mm) | Reason |
|---------|----------------|---------------|--------|
| m19 (L32 rear) | 25.5 | 19.0 | Gap to L33 is only 1.626 mm; sag from both sides would exceed gap |
| m20 (L33 front) | 25.5 | 16.0 | Consistent with reduced m19 |
| m21 (L33 rear) | 25.5 | 13.0 | Gap to L34 is only 1.061 mm; sag at larger SD exceeds gap |
| m22 (L34 front) | 25.5 | 13.5 | Consistent with reduced m21 |
| m23 (L34 rear) | 25.5 | 13.5 | Matching front SD |

These reduced SDs are smaller than the paraxial marginal ray heights at those surfaces (~23–25 mm), meaning the diagram will show G3 elements L33 and L34 significantly narrower than the actual beam width. This is a necessary compromise to satisfy the renderer's cross-gap sag constraint — the very tight air gaps in G3 (1.061–1.626 mm) combined with the strong curvatures (R = 88.37 to 123.71 mm) produce substantial sag intrusion that physically would be accommodated by the lens barrel's mechanical design but cannot be rendered correctly at full beam-width SDs. The alternative would be to increase the air gaps, which would invalidate the patent prescription.

The production lens's patent figure (Fig. 1) confirms that L33 and L34 are indeed smaller-diameter elements compared to L31 and L32 — the ray trace-derived SDs at those elements would be appropriate for the marginal beam, but the mechanical clear apertures are constrained by the tight spacing.

### 10.3 Close-focus variable gaps

The patent (Example 1, Table 1) provides variable gap data only at infinity focus for three zoom positions. No close-focus variable gap table is given, although the patent states (paragraph 0057) that G4 moves object-side for close focus.

Because G1, G3, and G5 are fixed relative to the image plane, close focusing by G4 alone constrains the two surrounding variable gaps: **D3 must decrease by the same amount that D4 increases**. Using the production minimum focusing distance of 2.0 m and solving the paraxial prescription for an on-axis object at that distance, the required G4 travel is approximately:

| Zoom state | G4 object-side travel |
|-----------|------------------------|
| Wide (123.6 mm) | 2.622 mm |
| Mid (200 mm) | 6.631 mm |
| Tele (291 mm) | 14.478 mm |

This yields the following estimated close-focus gaps:

| Gap | Wide ∞ | Wide close | Mid ∞ | Mid close | Tele ∞ | Tele close |
|-----|--------|------------|-------|-----------|--------|------------|
| D3 (G3–G4) | 21.244 | 18.622 | 17.600 | 10.969 | 18.669 | 4.191 |
| D4 (G4–G5) | 5.968 | 8.590 | 9.611 | 16.242 | 8.542 | 23.020 |

These close-focus values are **derived estimates**, not patent-tabulated data. They are nevertheless physically consistent with the patent's stated focusing mechanism, preserve the constant total track at each zoom position, and imply a tele-end magnification of approximately **0.168×**, which is close to the production lens's published **0.16×** maximum reproduction ratio.

### 10.4 Zoom motion characteristics

G4 exhibits non-monotonic (reversing) motion during zoom:

| Gap | Wide | Mid | Tele | Behaviour |
|-----|------|-----|------|-----------|
| D3 (G3–G4) | 21.244 | 17.600 | 18.669 | Decreases then increases |
| D4 (G4–G5) | 5.968 | 9.611 | 8.542 | Increases then decreases |

This reversal is correctly captured by the three-position `zoomPositions` array and handled by piecewise-linear interpolation in the renderer.

The gap conservation sum D1 + D2 + D3 + D4 = 95.242 mm is invariant across all zoom positions, confirming the constant overall length design.

### 10.5 Surface 39 (dummy flat air surface)

Surface m = 39 in the patent prescription is a flat surface (R = ∞) with d = 8.829 mm in air, located within G5 between L55 and L56. This splits a large air gap into two segments. In the data file it is represented as:
```
{ label: "39", R: 1e15, d: 8.829, nd: 1.0, elemId: 0, sd: 16.0 }
```

It has no optical effect but is retained to match the patent's surface numbering faithfully.

### 10.6 Aperture stop position

The aperture stop is at surface m = 31 in the patent, located in an 8.0 mm air gap between L51 and L52 within G5. The patent explicitly places it here (paragraph 0054). Because G5 is fixed during zoom, the stop position relative to the image plane is invariant.

The stop SD of 16.7 mm was estimated from the marginal ray height at m = 31 (approximately 16.65 mm at all zoom positions, since G5 is fixed). At wide-open f/2.91, EP_SD ≈ EFL / (2 × 2.91) ranges from 21.2 mm (wide) to 50.0 mm (tele) at the entrance pupil, but the physical stop diameter is much smaller because it sits behind three groups of positive power.
