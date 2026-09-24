# Nikon AF-S NIKKOR 120-300mm f/2.8E FL ED SR VR — Optical Analysis

**Patent:** JP 2020-177057 A  
**Inventors:** Masashi Yamashita, Toshinori Take (Nikon Corporation)  
**Applicant:** Nikon Corporation  
**Filed:** April 16, 2019  
**Published:** October 29, 2020  
**Embodiment analyzed:** Example 1 (Table 1)  
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
| ED | 1 | L12 (G1) | Hikari J-FKH1 coordinate (nd = 1.49782, νd = 82.57) |
| SR | 1 | Not identified by the patent — see §4.4 | L25 is the most consistent candidate |

### 4.2 Fluorite elements (L13 and L32)

Both fluorite elements share identical optical properties: nd = 1.433843, νd = 95.27. This matches calcium fluoride (CaF₂) to within measurement tolerance. The patent lists only the index pair and does not use the word fluorite, so the CaF₂ identity is inferred from the coordinate and Nikon's two-FL-element specification. Fluorite has the highest Abbe number of any practical optical material, giving it extremely low chromatic dispersion. It is also significantly lighter than optical glass of equivalent volume — a critical advantage in a 3.25 kg lens.

**L13** is the rear element of G1, a plano-convex lens (convex front toward the object, flat rear; f = +312 mm). Positioned in the front group where ray heights are large, it provides powerful positive refractive power with minimal chromatic contribution. Its rear surface is flat (R = ∞), which simplifies the manufacture and testing of this expensive fluorite crystal.

**L32** is the second element of G3, a biconvex positive lens (f = +155 mm). Located in the fixed relay group G3, it handles a converging beam at moderate height and contributes strong positive power with negligible dispersion, helping to maintain colour correction across the entire zoom range.

### 4.3 ED element (L12)

L12 (nd = 1.49782, νd = 82.57) is a biconvex positive lens in G1, cemented to the negative meniscus L11 to form a weakly positive achromatic doublet (f ≈ +1226 mm). The glass matches Hikari J-FKH1 (code 497826) to full quoted precision; it is not the 497816 S-FPL51 coordinate. J-FKH1 is a fluor-crown ED glass with very low dispersion (νd ≈ 82.6) and positive anomalous partial dispersion.

Together, the L11+L12 cemented doublet at the front of G1 serves as a large-diameter achromatic corrector. L11 uses a 1.90265 / 35.77 high-index lanthanum flint that matches Hikari J-LASFH9 (the previously cited OHARA S-LAH93 is 1.90525 / 35.04 and does not match). The strong negative meniscus L11 paired with the low-dispersion positive L12 provides first-order achromatisation for the entire front group, while the high refractive index of L11 keeps the front element diameter manageable despite the large entrance pupil required for f/2.8 at 300 mm.

### 4.4 SR element — candidates and uncertainty

Nikon describes SR glass as "a high- and specialized-dispersion glass lens featuring characteristics to greatly refract light with wavelengths shorter than that of blue." One reviewer (Shutterbug) specifically notes the SR element "reduces spherochromatism" — the variation of chromatic aberration with aperture zone, a distinct aberration from simple longitudinal CA. No public Nikon source identifies which of the 25 elements carries the SR designation, and the patent does not use the term "SR." The identification must therefore be inferred from glass properties.

Three elements in Example 1 have glasses with notable partial-dispersion behaviour, so each has been discussed as an SR candidate:

**Candidate 1 — L21 (G2, positive meniscus):** nd = 1.720467, νd = 34.71, patent θgF = 0.583. This is the exact Schott N-KZFS8 coordinate. Against the normal line P<sub>g,F</sub> ≈ 0.6438 − 0.001682·νd the published θgF sits about 0.002 *below* normal, and condition (5) holds L21 slightly below a line of its own. L21 therefore refracts short wavelengths slightly *less* than a normal glass of its Abbe number — the opposite of Nikon's SR description.

**Candidate 2 — L25 (G2, positive meniscus):** nd = 1.755750, νd = 24.71, patent θgF = 0.629, about +0.027 above the normal line (derived). The six-digit code 756247 resolves to Hikari J-SFH5, a coefficient-backed anomalous-dispersion dense flint whose published nd, νd, and P<sub>g,F</sub> match the patent row. The patent names L25 as its "second lens" and says condition (8) defines this glass's anomalous dispersion so that the secondary spectrum is corrected along with first-order colour (paragraph 0032).

**Candidate 3 — L33 (G3, biconcave negative):** nd = 1.654130, νd = 39.72, no θgF published. This matches Schott N-KZFS5 (OHARA S-NBH5 has the same coordinate). Like N-KZFS8, N-KZFS5 is a short flint whose catalog partial dispersion lies slightly *below* the normal line.

**Assessment:** The patent does not use the term "SR" and does not mark any glass as newly developed, so any identification is inference. Nikon describes SR glass as refracting light shorter than blue more strongly, i.e. a high-dispersion glass with partial dispersion *above* the normal line. Of the three, only L25 has that property, and it is the one element whose anomalous dispersion the patent singles out. **L25 is therefore the most consistent SR candidate.** Earlier versions of this analysis favoured L33 on the grounds that KZFS glasses show enhanced blue-violet refraction; that has the sign backwards, since KZFS short flints lie below the normal line. The production SR element may be a proprietary Nikon melt that the patent approximates with a catalog-equivalent coordinate.

### 4.5 Complete glass identification table

| Element | nd | νd | θgF | Glass match | Residual | Confidence |
|---------|----|----|-----|------------|----------|------------|
| L11 | 1.902650 | 35.77 | — | Hikari J-LASFH9 | Δνd = 0.04 | High |
| L12 | 1.497820 | 82.57 | — | Hikari J-FKH1 (**ED**) | exact | High |
| L13 | 1.433843 | 95.27 | — | CaF₂ (**fluorite**) | Δnd < 0.00001 | High |
| L21 | 1.720467 | 34.71 | 0.583 | Schott N-KZFS8 | exact | High |
| L22 | 1.717360 | 29.53 | — | OHARA S-TIH1 | exact | High |
| L23 | 1.696800 | 55.52 | — | Hikari J-LAK14 | exact | High |
| L24 | 1.804000 | 46.60 | — | Hikari J-LASF015 | exact | High |
| L25 | 1.755750 | 24.71 | 0.629 | Hikari J-SFH5 (756247) | catalog-backed | High (patent + Hikari catalog) |
| L26 | 1.870705 | 40.73 | — | TAFD32 (HOYA) | Δnd ≈ 0.00001 | High |
| L31 | 1.755000 | 52.34 | — | J-LASKH2 (Hikari) | exact | High |
| L32 | 1.433843 | 95.27 | — | CaF₂ (**fluorite**) | Δnd < 0.00001 | High |
| L33 | 1.654130 | 39.72 | — | Schott N-KZFS5 (OHARA S-NBH5 same coordinate) | Δnd ≈ 0.00001 | High |
| L34 | 1.910820 | 35.25 | — | TAFD35 (HOYA) | exact | High |
| L41 | 1.804000 | 46.60 | — | Hikari J-LASF015 | exact | High |
| L42 | 1.593490 | 67.00 | — | Hikari J-PSKH4 | exact | High |
| L43 | 1.846660 | 23.82 | — | Hikari J-SF03 | Δνd = 0.02 | High |
| L51 | 2.001000 | 29.12 | — | S-LAH99 / TAFD55 (001291, HRI) | exact | High |
| L52 | 1.729160 | 54.61 | — | Hikari J-LAK18 | exact | High |
| L53 | 1.870705 | 40.73 | — | TAFD32 (HOYA) | Δnd ≈ 0.00001 | High |
| L54 | 1.805180 | 25.41 | — | OHARA S-TIH6 | Δνd = 0.02 | High |
| L55 | 1.516800 | 64.14 | — | Hikari J-BK7A | Δνd = 0.01 | High |
| L56 | 2.001000 | 29.12 | — | S-LAH99 / TAFD55 (001291, HRI) | exact | High |
| L57 | 1.804000 | 46.60 | — | Hikari J-LASF015 | exact | High |
| L58 | 1.487490 | 70.31 | — | Hikari J-FK5 | Δνd = 0.01 | High |
| L59 | 1.900430 | 37.38 | — | HOYA TAFD37A catalog-equivalent (patent vendor unspecified) | exact coordinate | High |

The patent names no glass vendor. Labels are catalog equivalents that reproduce each patent nd/νd pair; where Hikari (Nikon's usual supplier) lists the exact coordinate, the Hikari name is used.

L26 and L53 share the same glass (nd = 1.870705, νd = 40.73). This pair round-trips to HOYA TAFD32, code 871/407, in the project catalog. The earlier M-TAFD305 wording belonged to a different 851/401 HOYA moldable glass and is not the correct catalog identity for these Nikon rows.

---

## 5. Element-by-Element Optical Role Analysis

### 5.1 Group 1 — Front objective (positive, fixed)

G1 is the large-diameter front group that collects light from the object. It has two sub-groups: a cemented doublet (L11+L12) and a singlet (L13).

**L11 (negative meniscus, J-LASFH9 type, f = −322 mm):** The first element the light encounters. Its high refractive index (nd = 1.903) reduces the curvature needed on the front surface, keeping the front element diameter manageable. As the negative element of the front doublet, it introduces negative dispersion that partially cancels the positive dispersion of L12.

**L12 (biconvex positive, ED glass, f = +255 mm):** Cemented to L11, this ED element provides the primary positive power of the front doublet. Its very high Abbe number (νd = 82.57) means it contributes almost no chromatic aberration despite its strong curvature. The L11+L12 doublet together has a very long focal length (+1226 mm), acting as a weak positive corrector — its primary role is chromatic correction rather than optical power.

**L13 (plano-convex, fluorite, f = +312 mm):** The main positive power element of G1. Its convex front surface (R = +135.41) faces the object, while the rear surface is flat (R = ∞) — a configuration that simplifies manufacture and testing of the fluorite crystal. Fluorite's ultra-low dispersion (νd = 95.27) ensures that this powerful positive element adds minimal colour to the beam. Its position at the rear of G1, where ray heights are still large but slightly reduced from the front, balances manufacturing difficulty against optical performance.

The G1 group focal length is +250.6 mm, producing a gently converging beam that enters G2. The combination of ED glass and fluorite in G1 provides aggressive primary and secondary chromatic correction from the very first group — essential for a long-focal-length zoom.

### 5.2 Group 2 — Variator (negative, moves for zoom)

G2 is the primary zoom variator. Its strong negative power (f = −69.7 mm) diverges the beam from G1, and by sliding image-side during zooming (61.4 mm of travel from wide to tele), it changes the system's effective focal length. G2 contains 6 elements in 4 sub-groups, making it the most complex group after G5.

**L21 (positive meniscus, N-KZFS8, f = +184 mm):** The first element in G2 is *positive* — an unusual choice for a negative group. The patent explains (paragraph 0022) that placing a positive element at the object side of G2 aids chromatic correction across the zoom range. L21's partial dispersion (θgF = 0.583) satisfies condition (5), indicating it has specific anomalous dispersion properties that help correct secondary spectrum. The air gap after L21 (Da21 = 12.97 mm) is large relative to its thickness (7.6 mm), satisfying condition (4); this separation is needed for the positive element to work as an independent chromatic corrector rather than merely cancelling the adjacent negative elements.

**L22+L23 (cemented doublet, f = −275 mm):** L22 (biconvex, S-TIH1, νd = 29.53) is a high-dispersion positive element cemented to L23 (biconcave, Hikari J-LAK14 coordinate, νd = 55.52), a moderate-dispersion lanthanum-crown negative lens. This doublet is weakly negative and primarily serves to correct monochromatic aberrations (spherical aberration and coma) generated by the strong negative power of G2, while maintaining chromatic balance.

**L24+L25 (cemented doublet, f = −99 mm):** This is the main power element of G2. L24 (biconcave, J-LASF015 type, νd = 46.60) provides the bulk of the negative power, while L25 (positive meniscus, Hikari J-SFH5 / 756247, νd = 24.71, θgF = 0.629) is a high-dispersion, anomalous-partial-dispersion glass. L25 is identified in the patent as the "second lens" (第2レンズ) and satisfies conditions (6)–(8); the patent states that condition (8) defines this glass's anomalous dispersion for secondary-spectrum correction. It is the most consistent candidate for the production SR element (§4.4). The L24+L25 combination ensures that G2's strong negative power does not introduce excessive longitudinal chromatic aberration or secondary spectrum.

**L26 (negative meniscus convex to image, nd = 1.8707, f = −111 mm):** The rear element of G2, a meniscus with both surfaces concave toward the object (R14 = −84.29, R15 = −651.88). It adds negative power and helps control the divergence angle of the beam leaving G2, correcting field curvature and astigmatism.

### 5.3 Group 3 — Relay (positive, fixed)

G3 is a fixed positive relay group (f = +109 mm) that reconverges the diverging beam from G2 and relays it toward G4. Because it is stationary during zoom, its aberration contribution is constant, making it the ideal location for precision colour correction elements.

**L31 (biconvex positive, J-LASKH2, f = +165 mm):** The first converging element of the relay. Moderate-dispersion crown glass (νd = 52.34) providing positive power.

**L32 (biconvex positive, fluorite, f = +155 mm):** The second fluorite element in the design. Its ultra-low dispersion provides strong positive power with negligible chromatic contribution — essential for maintaining achromatism through the relay.

**L33 (biconcave negative, N-KZFS5 type, f = −76 mm):** A short-flint negative element positioned between two strong positive elements (the fluorite L32 and the high-index L34). The resulting positive–negative–positive arrangement lets G3 balance spherical aberration, Petzval curvature and colour in a group that does not move during zoom. KZFS short flints have partial dispersion slightly below the normal line, which complements the above-normal partial dispersion of the fluorite L32 in secondary-spectrum correction. Earlier versions of this analysis named L33 as the leading SR candidate; see §4.4 for why L25 fits Nikon's SR description better.

**L34 (biconvex positive, TAFD35, f = +105 mm):** A high-index, moderate-dispersion positive element (nd = 1.911, νd = 35.25) that completes the relay group. Its high refractive index keeps curvatures moderate despite the strong power, reducing higher-order spherical aberration.

### 5.4 Group 4 — Focus group (positive, moves for zoom and focus)

G4 is a compact positive group (f = +89.9 mm, 3 elements, 2 sub-groups) that serves dual roles: it participates in zoom motion and is the sole focusing group. Its relatively small size and light weight enable fast autofocus actuation.

**L41 (plano-convex, J-LASF015 type, f = +147 mm):** A high-index positive element with a flat object-side surface. The flat surface simplifies the mechanical interface where G4 slides within the barrel.

**L42+L43 (cemented doublet, f = +241 mm):** L42 (biconvex, J-PSKH4 type, νd = 67.00) is a low-dispersion positive crown cemented to L43 (biconcave, J-SF03 type, νd = 23.82), a high-dispersion negative flint. This is a classic achromatic doublet providing positive power with colour correction. The large Abbe-number difference (Δνd ≈ 43) ensures effective primary achromatisation.

During focus, the entire G4 group translates toward the object to focus on closer subjects. Because G4 has a relatively short focal length (+89.9 mm) and sits behind the relay group in a region of moderate ray height, its motion produces efficient focus-distance change with minimal aberration variation — the patent notes (paragraph 0018) that this configuration minimises spherical aberration change during focus.

### 5.5 Group 5 — Rear group (negative, fixed, contains aperture stop)

G5 is the largest group (9 elements, 7 sub-groups) and contains the aperture stop. Its overall negative power (f = −145.8 mm) works with the preceding positive groups to create a telephoto-type configuration that keeps the total track length shorter than the effective focal length. G5 also contains the VR lens group for image stabilisation.

**L51 (biconcave negative, S-LAH99 / TAFD55, f = −56 mm):** A powerful negative element made of ultra-high-index glass (nd = 2.001). Positioned before the aperture stop, it strongly diverges the beam, controlling pupil position and the angle of incidence on the stop. The extreme refractive index keeps this element thin despite its strong power.

**Aperture stop** (surface 31): Located in an 8 mm air gap between L51 and L52. Fixed during zoom.

**L52 (biconvex positive, J-LAK18 type, f = +94 mm):** Immediately after the stop, this moderate-power positive element begins reconverging the beam.

**L53 (negative meniscus, nd = 1.8707, f = −144 mm):** A weak negative corrector that controls field curvature and astigmatism in the near-stop region.

**L54+L55 (cemented doublet, f = −205 mm):** L54 (positive meniscus, S-TIH6, νd = 25.41) is cemented to L55 (biconcave negative, J-BK7A type, νd = 64.14). This negative doublet is the probable **VR group**: its position behind the stop in a low-ray-height region makes it suitable for lateral shift to correct image shake. The large Abbe-number difference provides chromatic correction within the VR group to prevent colour shifts during stabilisation.

**L56 (biconvex positive, S-LAH99 / TAFD55, f = +76 mm):** Another ultra-high-index element (nd = 2.001), providing strong positive power in a compact package.

**L57+L58 (cemented doublet, f = +107 mm):** L57 (negative meniscus, J-LASF015 type) is cemented to L58 (biconvex positive, J-FK5 type, νd = 70.31). This achromatic positive doublet continues the beam convergence toward the image plane. L58 is an ordinary low-dispersion fluor crown (FK5 family), not an ED glass.

**L59 (biconcave negative, TAFD37A catalog-equivalent, f = −60 mm):** The final element, a field-flattening negative lens. Its patent coordinate (nd = 1.900430, νd = 37.38) matches HOYA TAFD37A; the patent does not establish the production supplier. Positioned close to the image plane, it primarily corrects Petzval field curvature and adjusts the exit pupil position for compatibility with digital sensor microlens arrays.

---

## 6. Chromatic Correction Strategy

The 120–300 mm f/2.8 zoom faces an extreme chromatic correction challenge: at 300 mm and f/2.8, the entrance pupil diameter exceeds 100 mm, and secondary spectrum scales with focal length. The patent's approach deploys four distinct strategies, distributed across the fixed groups to maintain correction stability during zoom:

1. **Primary achromatisation in G1** via the ED element (L12) paired with high-index flint (L11), supplemented by the fluorite singlet L13. The ED glass's high Abbe number and moderate anomalous dispersion provide first-order and partial second-order correction.

2. **Secondary spectrum correction in G2** via two specially selected glasses: L21 (N-KZFS8, θgF = 0.583) and L25 (Hikari J-SFH5 / 756247, θgF = 0.629). The patent's conditional expressions (5)–(8) specifically constrain these glasses' partial dispersion to control secondary spectrum across the zoom range. Because G2 moves during zoom, having two such correctors at different positions within the group ensures that the correction remains balanced as the group translates.

3. **Fixed secondary-spectrum correction in G3** via the fluorite–KZFS–high-index arrangement (L32–L33–L34). Fluorite has partial dispersion above the normal line and the KZFS-type L33 slightly below it; pairing the two in a group that does not move keeps this part of the colour correction invariant across the zoom range. Nikon notes that the production SR element reduces spherochromatism — the variation of chromatic aberration with aperture zone — which is a significant concern at f/2.8 with a 100 mm entrance pupil; on the evidence of §4.4 that element is most plausibly L25 in G2 rather than a G3 element.

4. **Residual correction in G5** via the high-index S-LAH99 / TAFD55 elements (L51, L56) and the low-dispersion L58, providing final chromatic fine-tuning in the fixed rear group.

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

The patent publishes no effective diameters, so every semi-diameter is an estimate. The values were set from three inputs: an exact real-ray trace at the design f/2.91 and image height Y = 21.63 mm at all three zoom stations, the patent's FIG. 1 cross-section (measured at its native 198 dpi raster, scale ≈ 0.476 mm/px from the 286.4 mm first-to-last-vertex span), and the renderer's edge-thickness and cross-gap limits.

| Region | Data-file SD (mm) | FIG. 1 reading (mm) | Basis |
|---|---|---|---|
| G1 (L11–L13) | 54.0–51.5 | ≈ 50–52 | Retained; front bundle needs 50.0 mm on axis at tele |
| L21 | 37.0 / 35.0 | ≈ 36 | Retained |
| L22–L26 | 30.0–23.2 | ≈ 25–28.5 | Just above the f/2.91 axial marginal ray (tele governs) |
| G3 (L31–L34) | 24.6–24.3 | ≈ 26 | Just above the 24.0–24.3 mm axial marginal ray |
| G4 (L41–L43) | 24.0–21.5 | ≈ 22–24 | Retained |
| L51–L55 | 18.5–16.5 | ≈ 17.8–19.3 | Retained |
| L56–L59 | 20.5–18.4 | ≈ 18.4–20.5 | From FIG. 1 |

G2 and G3 contain three very thin air gaps between strongly curved surfaces: L23 → L24 (3.124 mm), L32 → L33 (1.626 mm) and L33 → L34 (1.061 mm). At the f/2.91 clear aperture the facing rims come within about 0.1 mm of each other. FIG. 1 draws these pairs rim-to-rim, and the data file sets `gapSagFrac: 0.97` so that the renderer accepts the traced clearance without changing any patent spacing. An earlier version of this file shrank L33 and L34 to 13–16 mm to satisfy the default 0.90 gap rule. Those values clipped the on-axis f/2.91 beam by as much as 11 mm of radius, and FIG. 1 does not support them: it draws all four G3 elements at about the same diameter.

The rear elements L56–L59 were previously 10–16 mm. That was below the full-field chief ray at the last surface and well under FIG. 1, which draws L59 at about 18.4 mm. At that radius L59's computed edge thickness (5.2 mm) matches the drawn rim. At the image-height field the wide-end corner bundle is still partially vignetted by G1, G2 and G3, as expected for a fast telephoto zoom.

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

The stop sits in G5, and everything behind it (G5) is fixed during zoom. At a constant image-side f-number the marginal ray height at the stop is therefore the same at every zoom station, so one physical iris gives F/2.91 at wide, middle and tele. The real-ray value is 17.15 mm; the paraxial value is 16.65 mm. The patent publishes no iris diameter, and the data file needs neither a published iris schedule nor an inferred one. The stored stop semi-diameter of 17.2 mm records that iris, and the engine derives the working iris from the nominal F/2.91. The entrance-pupil radius grows from 21.2 mm (wide) to 50.0 mm (tele) because the magnification of G1–G4 onto the stop changes, not because the iris opens. The production lens's minimum aperture of f/22 sets the slider limit.
