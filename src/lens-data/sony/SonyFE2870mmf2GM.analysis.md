# Sony FE 28-70mm F2 GM (SEL2870GM) — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** WO 2025/263124 A1, "Zoom Lens and Imaging Device" (ズームレンズ、および撮像装置).
**Applicant:** Sony Group Corporation.
**Inventors:** Yamasaki Takashi (山崎 貴), Yamada Iwao (山田 巖).
**Priority:** JP 2024-100711, filed June 21, 2024.
**Filed:** April 30, 2025 (PCT/JP2025/016405).
**Published:** December 26, 2025.
**Embodiment analyzed:** Example 1 (実施例 1), corresponding to Figure 1.

The identification of Example 1 as the production SEL2870GM design rests on the following convergent evidence:

1. **Element and group count:** 20 elements in 14 air-separated groups — matches Sony's published specification exactly.
2. **Focal length range:** 28.86–67.87 mm (patent) vs. 28–70 mm (marketed). The patent's tele EFL of 67.87 mm is consistent with the production rounding convention; Sony markets the lens as "28-70mm."
3. **Maximum aperture:** F/2.06 (patent) vs. F/2.0 (marketed). The small discrepancy is typical of design-to-marketing rounding.
4. **Image circle:** Y = 21.63 mm half-diagonal → 43.26 mm full diagonal, consistent with the 135 full-frame format (43.3 mm nominal).
5. **Minimum focus distance:** 378 mm (patent close-focus object distance) vs. 0.38 m (Sony spec) — exact agreement.
6. **Special element count:** 5 elements carry aspherical surfaces (10 aspherical surfaces total), consistent with Sony's description of "three XA elements" plus additional aspherical elements. Three elements use S-FPL55 (νd = 95.1), matching the "three Super ED" claim.
7. **Floating focus:** Two focus groups (G5 negative, G6 positive) move in opposing directions, consistent with Sony's description of floating focus with quad XD linear motors driving front and rear focus groups.
8. **Patent timing:** The priority date (June 2024) precedes the product announcement (November 2024) by approximately five months — typical lead time for a WIPO filing covering a flagship lens.
9. **Constant aperture:** F/2.06 at all three tabulated zoom positions — consistent with the marketed constant F2 specification.

## Optical Architecture

The design is a positive-lead zoom of the type $+\ -\ \mathrm{(intermediate)}\ -$ with a seven-group hierarchy labeled G1 through G7 in the patent. When counted by air separation — the standard industry convention — the 20 elements resolve into 14 groups. The power distribution by patent group is:

| Patent group | Power | f (mm) | Elements | Air-separated sub-groups | Role |
|:---:|:---:|---:|:---:|:---:|:---|
| G1 | + | +103.34 | L11–L13 (3) | 2 | Front collector; zooms toward object W→T |
| G2 | − | −23.95 | L21–L24 (4) | 3 | Variator; strong negative power drives zoom ratio |
| G3 | + | +74.15 | St, L31–L33 (3) | 2 | Aperture stop + front relay; object-side movable group in GM (= GMF) |
| G4 | + | +30.48 | L41–L45 (5) | 3 | Central relay; strong positive power |
| G5 | − | −42.18 | L51 (1) | 1 | First focus group (GMF1); moves toward image at close focus |
| G6 | + | +68.51 | L61 (1) | 1 | Second focus group (GMF2 = GMR); moves toward object at close focus |
| G7 | − | −79.82 | L71–L73 (3) | 2 | Rear group (GR); fixed to image plane during zoom |

The intermediate group GM encompasses G3 through G6 (¶0064). The aperture stop sits at the front of GM (surface 13), and three or more movable groups behind it participate in zooming (¶0018). This architecture distinguishes the design from a simple four-group positive-lead zoom: by incorporating multiple variator stages within GM, the patent reduces the required travel of G1 and G2, keeping the front element diameter manageable for the F/2 specification (¶0024).

The zoom ratio is 2.35×, with the total optical track growing from 155.40 mm (wide) to 170.88 mm (tele) — the lens is not a true internal zoom but exhibits modest extension (≈15 mm).

## Element-by-Element Analysis

### Group 1 — Front Collector (L11–L13)

#### L11 — Negative Meniscus, Convex to Object (cemented, front of doublet D1)

nd = 1.95825, νd = 18.0. Glass: dense flint, closest catalog match S-NPH1W (OHARA, nd = 1.95906, νd = 17.5; Δnd = 0.0008) — probable proprietary melt or production variant. f = −611 mm.

L11 is a weakly negative meniscus convex to the object, cemented to L12. Its ultra-high refractive index (nd ≈ 1.958) and very low Abbe number (νd = 18.0) place it firmly in the dense flint category. The primary role of this element is chromatic: paired with the fluorophosphate crown L12 in a cemented doublet, L11 provides the high-dispersion counterweight necessary to achromatize the front collector. The very high nd also contributes to reducing surface curvatures (and thus higher-order monochromatic aberrations) by bending light with less curvature than a lower-index glass would require.

#### L12 — Biconvex Positive (cemented, rear of doublet D1)

nd = 1.59489, νd = 68.6. Glass: 595686 fluorophosphate crown, from the patent's nd/νd pair. f = +243 mm.

L12 is a fluorophosphate crown with anomalous partial dispersion (positive ΔP~g,F~ expected for this glass family). It serves as the low-dispersion partner in the L11+L12 cemented doublet. Its νd = 68.6 places it in the class that Sony may designate as "ED" (extra-low dispersion) in marketing materials. This element achromatizes the front collector group, reducing primary chromatic aberration generated by the strongly positive G1 overall power. The rear surface (R = 2066.572 mm) is nearly flat; the patent text describes the element as biconvex (両凸形状), which is geometrically accurate given the negligible rear curvature.

#### L13 — Positive Meniscus, Convex to Object

nd = 1.59561, νd = 67.0. Glass: 596670 fluorophosphate crown, from the patent's nd/νd pair. f = +136.6 mm.

L13 is another fluorophosphate crown, providing the bulk of G1's positive power. Its meniscus shape (convex to object, R1 = 56.538 mm, R2 = 175.851 mm) bends the entering marginal ray bundle inward while maintaining a gentle angle of incidence on both surfaces, which limits spherical aberration and coma at full aperture. The air gap between L12 and L13 (d3 = 0.24 mm) is very small, making this nearly a close-spaced triplet with the cemented pair.

### Group 2 — Variator (L21–L24)

#### L21 — Negative Meniscus, Convex to Object (2× aspherical)

nd = 1.77373, νd = 49.4. Glass: 774494 lanthanum crown, from the patent's nd/νd pair. f = −32.3 mm.

L21 carries aspherical surfaces on both faces (surfaces 6 and 7), making it one of the five aspherical elements in the design. It is the first element the light encounters after crossing the G1–G2 air gap (d5), which is the primary zoom variable gap. As G2's front element, L21 must handle a wide range of ray heights across the zoom range — from high marginal rays at tele to steep off-axis bundles at wide. The dual aspherical surfaces provide the degrees of freedom needed to correct spherical aberration and coma simultaneously across the zoom range. This element is a strong candidate for one of the three XA (extreme aspherical) elements given its large clear aperture (diameter ≈ 42 mm), tight surface figure requirements at the steep rear surface (R7 = 20.583 mm), and its role managing aberrations at F/2.

The aspherical coefficients show dominant A4 terms: surface 6 has A4 = +9.62 × 10⁻⁷ (mild positive departure) while surface 7 has A4 = −2.95 × 10⁻⁶ (stronger negative departure), indicating the rear surface flattens the field at the periphery.

#### L22 — Biconcave Negative (cemented, front of doublet D2)

nd = 1.77660, νd = 29.7. Glass: 777297 dense flint, from the patent's nd/νd pair. f = −23.3 mm.

#### L23 — Biconvex Positive (cemented, rear of doublet D2)

nd = 1.93024, νd = 24.0. Glass: 930240 ultra-high-index dense flint, from the patent's nd/νd pair. f = +20.6 mm.

The L22+L23 cemented doublet is unusual: both glasses are dense flints (νd < 30), yet they form a strongly divergent net-negative pair. L22 (biconcave) provides the divergence, while L23's high index (nd = 1.93) and biconvex shape partially compensate, creating a net-negative assembly with controlled Petzval contribution. The very high indices of both glasses (1.777 and 1.930) minimize surface curvatures, which is essential in G2 where large off-axis ray heights at the wide-angle end would otherwise generate severe coma and astigmatism. This doublet also contributes significantly to the lateral color correction at wide angles.

#### L24 — Negative Meniscus, Convex to Image

nd = 1.69980, νd = 55.5. Glass: 700555 barium crown, from the patent's nd/νd pair. f = −63.0 mm.

L24 is the last element of G2, acting as a field-flattening element. Its meniscus shape (convex toward image, R1 = −33.119 mm, R2 = −134.707 mm) helps control the Petzval sum contribution of G2, which as a strongly negative group would otherwise create pronounced field curvature in the under-corrected direction. The moderate-index barium crown glass provides a counterbalancing Petzval contribution to the dense-flint doublet ahead of it.

### Group 3 — Aperture Stop + Front Relay (St, L31–L33)

The aperture stop (surface 13, R = ∞, diameter = 30.12 mm / sd = 15.06 mm) sits at the front of the intermediate group GM, immediately ahead of L31. This placement ensures that the stop is in a symmetric position relative to the variator above and the relay elements below, which aids in canceling odd-order aberrations (coma, distortion, lateral color) by quasi-symmetry.

#### L31 — Biconvex Positive (2× aspherical)

nd = 1.85612, νd = 40.1. Glass: 856401 lanthanum dense crown, from the patent's nd/νd pair. f = +39.7 mm.

L31 carries aspherical surfaces on both sides (surfaces 14 and 15) and is the strongest positive singlet immediately after the stop. Its dual-aspherical construction allows independent control of spherical aberration (primarily through the strong front surface at R = 36.963 mm) and coma (through balancing front/rear aspherical departures). The aspherical coefficients show A4 = −3.92 × 10⁻⁶ on surface 14 (negative departure, counteracting overcorrected spherical aberration at full aperture) and A4 = −1.69 × 10⁻⁶ on surface 15, working in concert to flatten the wavefront at F/2.

Given its position immediately after the stop, relatively high surface curvatures, and the critical role in controlling the on-axis wavefront at F/2, L31 is a strong candidate for an XA element.

#### L32 — Biconvex Positive (cemented, front of doublet D3) — Super ED

nd = 1.43810, νd = 95.1. Glass: S-FPL55 (OHARA), catalog-compatible Super ED label. f = +200.9 mm.

L32 is the first of three S-FPL55 (Super ED) elements in the design. With νd = 95.1, this fluorophosphate crown has extremely low dispersion and strong anomalous partial dispersion (ΔP~g,F~ ≈ +0.035). Cemented with the negative L33, it forms an achromatic doublet that corrects both primary and secondary spectrum in the relay section.

#### L33 — Biconcave Negative (cemented, rear of doublet D3)

nd = 1.57125, νd = 56.0. Glass: 571560 barium crown, from the patent's nd/νd pair. f = −53.6 mm.

L33 is a medium-index barium crown that serves as the achromatizing partner for L32. The moderate Abbe number difference against S-FPL55 allows the cemented doublet to achieve secondary-spectrum correction (not just primary achromatism) when the anomalous partial dispersion of S-FPL55 is accounted for.

### Group 4 — Central Relay (L41–L45)

G4 is the most complex group in the design, with five elements forming three air-separated sub-groups: a cemented doublet (L41+L42), another cemented doublet (L43+L44), and a powerful biconvex singlet (L45). The group's net focal length is +30.48 mm — the strongest positive power in the intermediate section.

#### L41 — Negative Meniscus, Convex to Object (cemented, front of doublet D4)

nd = 2.00912, νd = 29.1. Glass: S-NPH85 (OHARA), provisional label from the patent's nd/νd pair. f = −71.8 mm.

L41 uses the highest refractive index glass in the entire design (nd = 2.009), an ultra-dense flint. Its role in the cemented doublet with the Super ED L42 is chromatic: the enormous index and low Abbe number provide the strong dispersion needed to achromatize the long-throw S-FPL55 element behind it. The meniscus shape keeps the angle of incidence moderate on both surfaces despite the extreme index.

#### L42 — Positive Meniscus, Convex to Object (cemented, rear of doublet D4) — Super ED

nd = 1.43810, νd = 95.1. Glass: S-FPL55 (OHARA), catalog-compatible Super ED label. f = +68.2 mm.

L42 is the second S-FPL55 element. Cemented to the ultra-dense flint L41, this doublet provides a high level of chromatic correction in the central relay, especially for axial color which is challenging to correct at F/2. The large Abbe number difference (νd = 95.1 vs. 29.1 = Δνd = 66.0) produces efficient achromatization with moderate surface curvatures.

#### L43 — Biconvex Positive (cemented, front of doublet D5) — Super ED

nd = 1.43810, νd = 95.1. Glass: S-FPL55 (OHARA), catalog-compatible Super ED label. f = +50.7 mm.

L43 is the third and final S-FPL55 element. Cemented with the dense flint L44, it repeats the Super ED + dense flint pairing, providing a second stage of chromatic correction in G4. Using three S-FPL55 elements — two in G4 and one in G3 — is an aggressive approach to secondary-spectrum correction that reflects the severity of the chromatic challenge at F/2 across a 2.35× zoom range. Sony explicitly markets these as "three Super ED elements."

#### L44 — Biconcave Negative (cemented, rear of doublet D5)

nd = 1.86252, νd = 25.2. Glass: 863252 dense flint, from the patent's nd/νd pair. f = −35.4 mm.

L44 is a dense flint that completes the second Super ED doublet in G4. Its very high index and low Abbe number (Δνd against S-FPL55 = 69.9) provide the dispersive counterbalance needed to achromatize L43's contribution.

#### L45 — Biconvex Positive (2× aspherical)

nd = 1.85612, νd = 40.1. Glass: 856401 lanthanum dense crown, from the patent's nd/νd pair. f = +23.4 mm.

L45 is the strongest individual positive element in the design (f = +23.4 mm) and carries aspherical surfaces on both sides (surfaces 25 and 26). Positioned at the rear of G4, it is the last element before the focus groups. Surface 25 has A4 = −1.04 × 10⁻⁵, the largest A4 magnitude in the entire prescription. The individual polynomial terms at the full clear aperture radius of 16.49 mm are large and oscillating, but higher-order terms (A6 through A10) substantially compensate, producing a precisely shaped net departure. This multi-term cancellation pattern — where individually large coefficients of alternating sign combine into a carefully shaped net profile — is characteristic of modern XA-class elements and underscores the manufacturing precision required to hold the overall surface figure to the tight tolerances that suppress "onion-ring" bokeh artifacts. L45 is a probable XA element due to its strong curvatures, large aspherical departures, and critical position at the junction between the fixed relay and the moving focus groups.

### Group 5 — First Focus Group / GMF1 (L51)

#### L51 — Negative Meniscus, Convex to Object (2× aspherical)

nd = 1.85659, νd = 40.1. Glass: S-LAM73 (OHARA), provisional label from the patent's nd/νd pair. f = −41.9 mm.

L51 is a single-element group that constitutes the first focus group (GMF1). It carries aspherical surfaces on both sides (surfaces 27 and 28). During focusing from infinity to close distance, G5 translates along the optical axis toward the image (¶0065), with travel increasing toward the tele end (d26 grows by +4.82 mm at tele close focus).

L51's negative power means that as it moves rearward during close focus, it increases the divergence delivered to G6, effectively compensating for the reduced object distance. The dual aspherical surfaces control the residual spherical aberration and field curvature that arise as the ray geometry changes during focus. Because G5 is a single lightweight element, it enables the fast AF response that Sony achieves with the quad XD linear motors — two of which drive this group.

### Group 6 — Second Focus Group / GMF2 = GMR (L61)

#### L61 — Biconvex Positive (2× aspherical)

nd = 1.59456, νd = 66.9. Glass: S-FPM5 (OHARA), provisional label from the patent's nd/νd pair. f = +68.3 mm.

L61 constitutes the second focus group (GMF2), which is also the most image-side movable group in the intermediate group GM (hence GMR). During close focus, G6 moves toward the object — opposite to G5's direction (¶0065). This opposing motion of a negative and a positive focus group is the essence of Sony's floating focus: the two groups' aberration contributions partially cancel during focusing, suppressing spherical aberration and field curvature variation at close distances (¶0045).

L61 uses a moderate-index fluorophosphate crown (S-FPM5, νd = 66.9) and carries aspherical surfaces on both sides (surfaces 29 and 30). The fluorophosphate glass aids chromatic correction in the focus section, and the aspherical surfaces allow the element to maintain field flatness across the focus range. L61 is driven by the remaining two of the four XD linear motors.

### Group 7 — Rear Group / GR (L71–L73)

G7 is fixed relative to the image plane during zooming (¶0066). Since it is the rearmost group, off-axis ray heights here are large — approaching the full image circle. This makes G7 the primary site for lateral chromatic aberration and field curvature correction (¶0043–0044).

#### L71 — Positive Meniscus, Convex to Image (cemented, front of doublet D6)

nd = 2.00009, νd = 16.5. Glass: S-NPH7 (OHARA), provisional label from the patent's nd/νd pair. f = +39.8 mm.

L71 has the second-highest refractive index in the design (nd = 2.000) and the lowest Abbe number (νd = 16.5). This ultra-dense flint is paired in a cemented doublet with L72 to correct lateral chromatic aberration at the image periphery. Its meniscus shape (convex to image) and positive focal length are unusual for a dense flint — the high index allows a positive element with moderate curvatures. The cemented pair L71+L72 acts as a chromatic corrector positioned where off-axis rays are tallest, maximizing the leverage for lateral color correction.

#### L72 — Negative Meniscus, Convex to Image (cemented, rear of doublet D6)

nd = 1.86252, νd = 25.2. Glass: 863252 dense flint, from the patent's nd/νd pair. f = −43.2 mm.

L72 completes the cemented doublet. The combination of L71 (nd = 2.000, νd = 16.5) and L72 (nd = 1.863, νd = 25.2) produces a net-negative chromatic correction pair optimized for lateral color at the image edge.

#### L73 — Negative Meniscus, Convex to Image

nd = 1.85659, νd = 40.1. Glass: S-LAM73 (OHARA), provisional label from the patent's nd/νd pair. f = −71.9 mm.

L73 is the final optical element before the image plane (BFD = 15.53 mm at wide). Its meniscus shape convex to the image contributes to field curvature correction and helps maintain a short back focal distance (¶0044). The lanthanum glass S-LAM73 (νd = 40.1, below the conventional crown/flint boundary) provides moderate dispersion and high index, allowing the negative field-flattening power without excessive surface curvatures.

## Glass Identification and Selection

The design uses 11 distinct glass types drawn almost entirely from the OHARA catalog, with one unresolved proprietary melt. The glass palette can be organized into three functional tiers:

### Ultra-low-dispersion group (Super ED)

| Glass | nd | νd | Elements | Role |
|:---|---:|---:|:---|:---|
| S-FPL55 (OHARA) | 1.43810 | 95.1 | L32, L42, L43 | Primary chromatic correction; three Super ED elements |

S-FPL55 (νd = 95.1, ΔP~g,F~ ≈ +0.035) is the workhorse ED glass of the design. Three elements — one in G3 and two in G4 — deploy this glass to suppress both primary and secondary axial chromatic aberration at the F/2 aperture. Each S-FPL55 element is cemented to a high-dispersion partner (571560 barium crown, S-NPH85, and 863252 dense flint respectively), creating three achromatic doublets distributed across the relay section. This distributed approach, rather than concentrating all the ED correction in a single cemented group, spreads the chromatic workload and prevents any one surface from bearing excessive stress or generating high-order chromatic residuals.

### Fluorophosphate crowns (ED candidates)

| Glass | nd | νd | Elements | Role |
|:---|---:|---:|:---|:---|
| 595686 fluorophosphate crown | 1.59489 | 68.6 | L12 | G1 achromatization; probable ED element |
| 596670 fluorophosphate crown | 1.59561 | 67.0 | L13 | G1 positive power; no exact public catalog match |
| S-FPM5 (OHARA) | 1.59456 | 66.9 | L61 | Focus group GMF2 |

The fluorophosphate crowns (νd ≈ 67–69) have modest anomalous partial dispersion and contribute to secondary-spectrum correction, particularly in G1 (where the large aperture bundle demands careful chromatism management) and in the focus group G6. Sony's marketing specifies "one ED element"; the most likely candidate is L12 (595686, νd = 68.6), which is cemented to the ultra-dense flint L11 in a classic chromatic correction pair at the front of the lens. The identification is inferred — the patent does not explicitly designate which elements Sony classifies as "ED" versus "Super ED."

### High-index flints and dense flints

| Glass | nd | νd | Elements | Role |
|:---|---:|---:|:---|:---|
| Proprietary (≈S-NPH1W) | 1.95825 | 18.0 | L11 | G1 chromatic counterweight |
| 930240 ultra-high-index dense flint | 1.93024 | 24.0 | L23 | G2 variator doublet |
| S-NPH7 (OHARA) | 2.00009 | 16.5 | L71 | GR lateral color correction |
| S-NPH85 (OHARA) | 2.00912 | 29.1 | L41 | G4 Super ED partner |
| 777297 dense flint | 1.77660 | 29.7 | L22 | G2 variator doublet |
| 863252 dense flint | 1.86252 | 25.2 | L44, L72 | G4 Super ED partner; GR lateral color |

The design makes aggressive use of ultra-high-index glasses. Four elements have nd ≥ 1.93, and two exceed nd = 2.0. These extreme-index flints serve two purposes: first, they provide the large Abbe number differential needed to achromatize the Super ED elements efficiently; second, their high refractive indices reduce surface curvatures, which is critical at F/2 where even moderate curvatures can generate large high-order aberrations.

### Medium-index crowns and lanthanum glasses

| Glass | nd | νd | Elements | Role |
|:---|---:|---:|:---|:---|
| 774494 lanthanum crown | 1.77373 | 49.4 | L21 | G2 aspherical meniscus |
| 856401 lanthanum dense crown | 1.85612 | 40.1 | L31, L45 | Relay aspherical elements |
| S-LAM73 (OHARA) | 1.85659 | 40.1 | L51, L73 | Focus group; rear field flattener |
| 700555 barium crown | 1.69980 | 55.5 | L24 | G2 field flattener |
| 571560 barium crown | 1.57125 | 56.0 | L33 | G3 Super ED partner |

The lanthanum glasses and barium crowns fill the intermediate-index positions where moderate dispersion and high index are needed for aberration correction without the chromatic penalty of a full flint glass. Note that 856401 and S-LAM73 (both νd ≈ 40) fall below the conventional crown/flint boundary of νd ≈ 50, but their lanthanum-oxide composition and intermediate dispersion place them functionally between the ED crowns and the dense flints in this design. The 856401 glass (nd = 1.856) is used for both aspherical relay elements (L31 and L45), a choice likely driven by its suitability for precision glass molding — the XA manufacturing process requires glasses with appropriate thermal and mechanical properties for high-precision aspherical forming.

## Aspherical Surfaces

The design contains 10 aspherical surfaces distributed across 5 elements. All aspherical surfaces use a purely polynomial (even-order) departure on a spherical base (conic constant K = 0 for all surfaces). The aspherical sag equation used in the patent (¶0061) is the standard form:

$$Z(h) = \frac{h^2/R}{1 + \sqrt{1 - (1+K)(h/R)^2}} + A_4 h^4 + A_6 h^6 + A_8 h^8 + A_{10} h^{10} + A_{12} h^{12}$$

The patent provides coefficients through A12 only; A10 is tabulated for most surfaces, while A12 is provided only for surface 6.

### Summary of aspherical elements

| Element | Surfaces | Group | Role | XA candidate? |
|:---|:---|:---|:---|:---|
| L21 | 6, 7 | G2 | Variator aberration control across zoom range | Yes — large diameter, steep rear surface |
| L31 | 14, 15 | G3 | Post-stop spherical aberration and coma correction | Yes — critical F/2 on-axis correction |
| L45 | 25, 26 | G4 | Relay high-order spherical and coma correction | Yes — strongest A4, junction to focus groups |
| L51 | 27, 28 | G5 | Focus group GMF1 — maintains correction during focus | Possible |
| L61 | 29, 30 | G6 | Focus group GMF2 — maintains correction during focus | Possible |

Sony markets the lens as having "three XA (extreme aspherical) elements." XA elements are manufactured using Sony's proprietary high-precision aspherical forming technology and are distinguished by exceptionally tight surface-figure tolerances that minimize "onion-ring" bokeh artifacts. Based on the optical roles and manufacturing demands, the three XA elements are most likely L21 (G2, large diameter with steep asphere), L31 (G3, post-stop critical wavefront correction), and L45 (G4, strongest aspherical departure in the design). The remaining two aspherical elements (L51, L61) in the focus groups may use conventional precision glass molding or polished aspherical manufacturing.

### Aspherical coefficient magnitudes

The dominant correction term across all surfaces is A4 (fourth-order), as expected for a design operating at F/2 where third-order spherical aberration is the primary challenge. The strongest A4 magnitude is on surface 25 (L45 front): A4 = −1.044 × 10⁻⁵, reflecting the scale of aspherical correction needed for a +23 mm biconvex element at this aperture. Higher-order terms (A6, A8, A10) partially compensate the A4 contribution, producing a net aspherical departure at the edge that is carefully shaped to correct zonal aberrations across the clear aperture. Higher-order terms (A6 through A12) are also significant on the G2 aspherics (surfaces 6 and 7), indicating that L21 requires multi-order correction to manage zonal spherical aberration across the zoom range.

## Focus Mechanism

The lens uses a dual-group floating inner focus design. Two single-element groups — G5 (L51, negative) and G6 (L61, positive) — translate along the optical axis in opposing directions during focusing (¶0065). Sony's implementation uses four XD (extreme dynamic) linear motors, with two motors assigned to each focus group.

### Focus group kinematics

| Gap | Location | d at ∞ (Wide) | d at 378 mm (Wide) | Δ | d at ∞ (Tele) | d at 378 mm (Tele) | Δ |
|:---|:---|---:|---:|---:|---:|---:|---:|
| d26 | G4 → G5 | 3.38 | 4.79 | +1.41 | 2.28 | 7.10 | +4.82 |
| d28 | G5 → G6 | 7.38 | 5.90 | −1.48 | 11.98 | 5.54 | −6.44 |
| d30 | G6 → G7 | 2.00 | 2.07 | +0.07 | 12.70 | 14.31 | +1.61 |

The focus gap changes sum to zero at every zoom position (e.g. at tele: +4.82 − 6.44 + 1.61 ≈ 0), confirming that the design maintains a constant overall length during focusing — true internal focus.

The focus travel increases dramatically toward the telephoto end. At 70 mm, G5 moves 4.82 mm toward the image (= Δd26) while G6 moves 1.61 mm toward the object (= Δd30). The d28 gap change of −6.44 mm at tele reflects the combined relative motion of both groups: Δd28 = −(ΔG5 + ΔG6) = −(4.82 + 1.61) = −6.43 mm (discrepancy of 0.01 mm from rounding). At the 28 mm position, G5's travel is 1.41 mm while G6 is nearly stationary (0.07 mm) — the asymmetry reflects G6's weaker power and its proximity to the fixed rear group at wide angle. This focal-length-dependent travel increase is expected: longer EFLs require more mechanical displacement for the same object-distance change.

The floating design has two key advantages (¶0045): first, the dual-group motion reduces variation in the system focal length during focus, suppressing focus breathing — a critical requirement for video applications. Second, the opposing motions of a negative and positive focus group allow their spherical aberration and field curvature contributions to partially cancel, maintaining image quality from infinity down to the 0.38 m minimum focus distance (0.23× magnification).

### Zoom-only versus focus-coupled gaps

Three variable gaps (d5, d12, d18) change only with zoom and are invariant during focusing. These correspond to the inter-group spacings between G1–G2, G2–G3, and G3–G4 respectively. The three focus-coupled gaps (d26, d28, d30) change with both zoom and focus. This separation confirms that the zoom mechanism (G1–G4 motion) is mechanically independent from the focus mechanism (G5–G6 motion), consistent with Sony's use of dedicated linear motors for focus.

## Conditional Expressions

The patent establishes six conditional expressions (with tighter sub-ranges labeled A) governing the power distribution. All are satisfied by Example 1:

| Condition | Expression | Value | Range | Tighter range | Value in tight? |
|:---|:---|---:|:---|:---|:---:|
| (1) | ft / fMR | 0.991 | 0.5–1.8 | 0.5–1.2 | ✓ |
| (2) | f1 / \|f2\| | 4.315 | 3.5–6.0 | 4.2–5.7 | ✓ |
| (3) | \|fR\| / fw | 2.766 | 1.8–5.0 | 2.0–4.7 | ✓ |
| (4) | fMF / fMR | 1.082 | 0.3–1.5 | 0.4–1.2 | ✓ |
| (5) | fMF / ft | 1.093 | 0.5–1.4 | 0.7–1.2 | ✓ |
| (6) | fMR / fR | −0.858 | −1.5 to −0.5 | −1.2 to −0.7 | ✓ |

Example 1 satisfies all six tighter sub-ranges, indicating that it represents a well-centered design within the patent's disclosed parameter space.

The most architecturally significant conditions are (1) and (6). Condition (1) constrains the rear movable group GMR (G6) focal length relative to the tele-end system EFL: at ft/fMR ≈ 1.0, the second focus group has nearly the same focal length as the tele-end system, meaning it contributes approximately one unit of magnification. Condition (6) constrains the ratio of GMR to the fixed rear group GR: at fMR/fR ≈ −0.86, the focus group and the rear group have comparable but opposite-signed powers, ensuring that the image-side ray geometry remains well-controlled across the focus range.

## Verification Summary

Independent paraxial ray trace (ABCD matrix, y-nu method) of the Example 1 prescription confirms agreement with the patent's stated specifications:

| Parameter | Patent [表2] | Computed | Δ |
|:---|---:|---:|---:|
| EFL (Wide) | 28.86 mm | 28.84 mm | −0.02 |
| EFL (Mid) | 44.39 mm | 44.38 mm | −0.01 |
| EFL (Tele) | 67.87 mm | 67.92 mm | +0.05 |
| L (Wide) | 155.40 mm | 155.39 mm | −0.01 |
| L (Mid) | 159.95 mm | 159.95 mm | 0.00 |
| L (Tele) | 170.88 mm | 170.87 mm | −0.01 |

Focus gap conservation (d26 + d28 + d30 = constant at each zoom position) holds within ±0.01 mm rounding, confirming true internal focus.

The Petzval sum is +0.00136 mm⁻¹, corresponding to a Petzval radius of +737 mm — well-corrected for field flatness across the 43.3 mm image circle.

## Design Heritage and Context

The Sony FE 28-70mm F2 GM is the first constant-aperture F/2 standard zoom in Sony's E-mount system. Its primary market competitor is the Canon RF 28-70mm F2 L USM (released 2018), which is notably larger (1430 g vs. 918 g) and longer. The patent references JP 2024-011707 and JP 2019-015956 as prior art for positive-lead large-aperture zoom designs.

The design's architecture — a positive-lead zoom with an intermediate group containing the aperture stop and multiple movable sub-groups — is a natural evolution of the approach used in Sony's existing GM zooms (e.g., the 24-70mm F2.8 GM II). The key innovations are the deployment of three Super ED elements (an unusually high count for a standard zoom), five dual-aspherical elements (ten aspherical surfaces total), and the floating dual-group focus mechanism that enables both fast AF and maintained optical quality at close focus distances.

## Sources

- WO 2025/263124 A1, "Zoom Lens and Imaging Device," Sony Group Corporation (2025).
- Sony SEL2870GM product specifications, https://www.sony.co.in/electronics/e-mount-lenses/sel2870gm/specifications.
- OHARA Optical Glass Pocket Catalog (current), for catalog glass identifications where the patent nd/νd pair resolves cleanly.
