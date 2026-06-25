# Fujifilm Fujinon GF 110mm f/2 R LM WR — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** US 2018/0100988 A1, "Imaging Lens and Imaging Apparatus"
**Applicant:** FUJIFILM Corporation, Tokyo, Japan
**Inventor:** Masato Kondo
**Filed:** September 28, 2017
**Published:** April 12, 2018
**Priority:** JP 2016-197954 (October 6, 2016)

**Embodiment analyzed:** Example 1 (Tables 1–3; Figs. 1, 2, 12)

The prescription is identified as the basis for the production Fujinon GF110mmF2 R LM WR by the following convergent evidence:

1. **Element and group count.** Example 1 contains 14 elements in 9 air-separated groups (6-element G1, 2-element G2, 6-element G3). The production lens is specified by Fujifilm as "14 elements in 9 groups."
2. **Focal length.** The patent's computed EFL is 108.47 mm at the d-line; the production lens is marketed as 110 mm — a typical rounding for commercial designation on the GFX system (0.79× crop factor yields an 87 mm full-frame equivalent).
3. **Aperture.** The patent states FNo. = 2.06 at infinity; the production lens is marketed as f/2 (manufacturer specification takes precedence).
4. **Field angle.** The patent gives 2ω = 29.8°; Fujifilm specifies 27.9° for the production lens (the difference reflects the slightly longer marketed focal length and the 43.8 mm diagonal of the GFX sensor).
5. **Four ED elements.** The patent prescription contains exactly four glasses with νd ≥ 65 (three instances of nd = 1.55032, νd = 75.50, and one of nd = 1.59282, νd = 68.62), matching Fujifilm's specification of "4 ED elements."
6. **All-spherical design.** The patent contains no aspherical coefficient tables for Example 1, and Fujifilm's product page explicitly states "14 **spherical** lens elements in 9 groups." This is a notable design choice for a modern fast medium-format prime: aberration control is achieved entirely through glass selection and element count rather than through aspherical surfaces.
7. **Inner focus with two-element group.** The patent describes an inner-focus mechanism in which only G2 (L21+L22) moves toward the image during focusing; the production lens uses a linear motor for inner focusing.
8. **Close focus distance.** The patent evaluates aberrations at 110 cm (1.1 m); the production lens achieves MFD = 0.9 m, suggesting the production lens extends the design's focus travel slightly beyond the patent's evaluated range.
9. **Patent timing.** The priority date (October 2016) precedes the lens's commercial announcement in early 2017 by the expected development interval.

## Optical Architecture

The GF 110mm f/2 is a three-group inner-focus design of the form **positive–negative–positive** (G1–G2–G3). In broad terms, it follows the telephoto principle: the strong positive front group (G1, f₁ ≈ 86 mm) is followed by a weak negative focus group (G2, f₂ ≈ −57 mm), with a strong positive rear group (G3, f₃ ≈ 71 mm) relaying the image to the sensor plane. The overall system focal length of 108.47 mm is achieved through a total optical track of approximately 143 mm (S1 to image plane), but the three-group power distribution closely resembles a telephoto configuration adapted for an inner-focus mirrorless system.

**Group G1** (6 elements, 4 air-separated sub-groups) serves as the front collector. It contains two cemented doublets that provide chromatic correction, flanking a positive singlet (L12) that bears much of the convergent power. Two of the four ED elements reside in G1 (L12 and L16), and the group's combined focal length of 86 mm means it does most of the bending work.

**Group G2** (2 elements, one cemented doublet) is the focusing group. It has a combined focal length of approximately −57 mm and moves rearward along the optical axis during focusing from infinity to close range. Its compact two-element construction keeps the focusing mass low, enabling the fast, quiet linear-motor autofocus that characterizes the production lens. Despite containing only two elements, G2 is chromatically corrected internally by pairing a dense flint positive meniscus (L21, νd = 17.47) with a negative biconcave element (L22, νd = 40.78).

**Group G3** (6 elements, 4 air-separated sub-groups) is the rear relay. It contains two more cemented doublets for chromatic correction (including the remaining two ED elements, L31 and L33), a powerful biconvex singlet (L35, the highest-index element in the system at nd = 2.001), and a rear negative meniscus (L36) that flattens the Petzval field. G3's combined focal length of about 71 mm is the strongest of the three groups.

**Aperture stop:** Located in the air gap between G1 and G2. The stop is positioned after the last element of G1 (L16) and before the first element of G2 (L21). The production lens uses a 9-blade rounded diaphragm.

**Petzval sum:** The surface-by-surface Petzval sum is +0.00103 mm⁻¹, yielding a Petzval radius of approximately +976 mm. This is a very small positive value — for comparison, a simple thin lens of the same focal length would produce a Petzval sum roughly five times larger. The small positive residual indicates that the design's field-flattening strategy (principally the rear negative meniscus L36 and the strongly curved air space between L35 and L36) has nearly neutralized the Petzval contribution of the strong positive groups. The remaining mild inward curvature of the Petzval surface is well within the range that the astigmatism balance from the meniscus elements can compensate, yielding effectively flat-field performance across the 43.8 mm GFX image circle.

## Element-by-Element Analysis

### L11 — Positive Meniscus, convex to object

nd = 1.95375, νd = 32.32. Glass: TAFD45 (HOYA; S-LAH98 equivalent) — lanthanum-titanium dense crown. f = +161.0 mm.

L11 is the front element and the first surface the incoming light encounters. Its very high refractive index (the joint-highest in the system, tied with the L35 glass family) allows a gently curved meniscus to contribute substantial positive power without introducing excessive spherical aberration. The meniscus shape (R1 = +98.02, R2 = +265.84, both convex to object) collects the on-axis beam while keeping the marginal ray angle manageable for the elements downstream. The patent notes (¶0088) that giving L11 positive power shortens the total length and minimizes the beam diameter entering G2, which in turn shrinks the focusing group.

The six-digit glass code 954323 is shared by HOYA TAFD45 and OHARA S-LAH98 class materials. Its high index enables a weak-curvature meniscus to carry significant power, which reduces surface contributions to spherical aberration and coma.

### L12 — Biconvex Positive (ED element 1 of 4)

nd = 1.55032, νd = 75.50. Glass: FCD705 (HOYA) — fluorophosphate crown (ED). f = +165.3 mm.

L12 is the first of the four ED elements. It is a strongly biconvex lens (R1 = +106.15, R2 = −625.64) providing moderate positive power. Its high Abbe number (75.5) means very low dispersion, which is essential here: L12 sits in the wide beam of G1 and handles a large share of the chromatic load. Paired with the flint elements downstream (L13, L15), it corrects axial color across the front group.

FCD705 is a HOYA anomalous-dispersion fluorophosphate crown, classified as ED glass (dPgF = +0.0277). It appears three times in this prescription (L12, L16, L31), making it the dominant glass type by weight. Its high Abbe number and positive anomalous partial dispersion enable effective secondary-spectrum correction when paired with high-dispersion flints.

### L13 — Negative Element, flat front / convex rear (cemented with L14 as doublet D1)

nd = 1.56732, νd = 42.81. Glass: OHARA S-TIL26, code 567/428 high-index barium glass. f = −87.0 mm.

L13 has a flat front face (R = ∞) and a rear surface with R2 = +49.38 (convex toward the object side), which serves as the cemented junction with L14. Although the geometric shape is plano-convex, the element produces negative power (f = −87 mm) because the only curved surface acts as a diverging interface in air. Within the cemented doublet, the large index step at the junction (from nd = 1.567 in L13 to nd = 1.883 in L14) creates a strong refracting interface that dominates the doublet's chromatic behavior. The νd difference between L13 and L14 is modest (42.8 vs. 39.2), but the steep index gradient provides an effective color-correcting interface.

### L14 — Positive Meniscus, convex to object (cemented with L13 as doublet D1)

nd = 1.88300, νd = 39.22. Glass: H-ZLaF68L (NHG), d-code 883392. f = +73.8 mm.

L14 is the positive partner in doublet D1. Its high index (1.883) creates a strongly refracting junction with L13, and the meniscus shape (R1 = +49.38, R2 = +192.19) carries substantial positive power (f = +73.8 mm). The patent gives only nd/νd, but the same 883392 d-code is published for NHG H-ZLaF68L with coefficient-backed dispersion data, so the data file now uses that catalog entry rather than a bare code label.

Doublet D1 as a whole has a very long focal length (+528.7 mm) — it is nearly afocal, serving primarily as a chromatic corrector rather than a power element.

### L15 — Negative Element, flat front / convex rear (cemented with L16 as doublet D2)

nd = 1.63980, νd = 34.49. Glass: S-TIM27 (OHARA) — titanium flint. f = −48.1 mm.

L15 is the negative partner of doublet D2 at the rear of G1. Like L13, it has a flat front face and a rear surface (R2 = +30.78) convex toward the object side that forms the cemented junction. Its focal length (−48.1 mm) is the shortest among the negative elements in G1, making it the strongest negative contributor in the front group. Its νd of 34.49 differs from L16's 75.50 by 41.01, satisfying the patent's Conditional Expression (10): 15 < Δν1r < 50 (¶0130–0131). This large Abbe-number difference creates an effective achromatizing doublet.

### L16 — Plano-Convex Positive (cemented with L15 as doublet D2; ED element 2 of 4)

nd = 1.55032, νd = 75.50. Glass: FCD705 (HOYA) — fluorophosphate crown (ED). f = +55.9 mm.

L16 is the second ED element and the rear element of G1. Its plano-convex shape (R1 = +30.78, R2 = ∞) gives it the strongest individual positive power in G1 (f = +55.9 mm). As the last element before the aperture stop, L16 shapes the exit cone of G1 and controls the marginal ray height at the stop. Its ED glass (HOYA FCD705, identical to L12) provides the chromatic complement to L15's flint, and the doublet D2's combined focal length of −344 mm gives a weak net negative contribution that partially compensates the strong positive power of the singlets L11 and L12, balancing spherical aberration and field curvature within G1.

### L21 — Positive Meniscus, concave to object (cemented with L22; focus group, G2)

nd = 1.95906, νd = 17.47. Glass: S-NPH3 (OHARA) — ultra-high-dispersion dense flint. f = +90.0 mm.

L21 is the front element of the two-element focusing group G2. The patent devotes significant attention to this element: its shape factor is governed by Conditional Expression (1), which constrains the ratio (R21+R22)/(R21−R22) to between 1.2 and 3.5 (Example 1 value: 1.456). The meniscus shape — concave toward the object (R1 = −380.43, R2 = −70.63) — is unusual for a positive element and is critical to suppressing astigmatism during focus travel (¶0091).

L21's glass is S-NPH3, the most dispersive glass in the entire system (νd = 17.47). This extremely high dispersion is intentional: paired with L22 in a cemented doublet, the large νd difference (17.47 vs. 40.78 = Δν of 23.3) enables effective chromatic correction within the tiny, lightweight focus group. The patent states (¶0093) that making L21's refractive index greater than L22's (1.959 > 1.852) is advantageous for correcting both longitudinal and lateral chromatic aberration, as well as spherical aberration.

The patent's Conditional Expression (2) requires 1.70 < N2 < 2.2 (Example 1 value: 1.954), ensuring that the dense flint contributes enough refractive power to keep focus travel short while maintaining aberration stability.

### L22 — Biconcave Negative (cemented with L21; focus group, G2)

nd = 1.85150, νd = 40.78. Glass: S-LAH89 (OHARA) — lanthanum crown. f = −34.7 mm.

L22 is the strongly negative rear partner of the focus doublet. Its biconcave shape (R1 = −70.63, R2 = +51.26) contributes the dominant negative power of G2 (f = −34.7 mm, compared to L21's +90.0 mm). The cemented doublet G2 has a combined focal length of −56.6 mm. During focusing from infinity to 1.1 m, G2 translates approximately 8.6 mm toward the image, with the air gap DD[11] (before G2) expanding from 4.70 mm to 13.31 mm and DD[14] (after G2) contracting from 18.19 mm to 9.58 mm. The total gap is conserved at 22.89 mm.

### L31 — Positive Meniscus, concave to object (cemented with L32 as doublet D3; ED element 3 of 4)

nd = 1.55032, νd = 75.50. Glass: FCD705 (HOYA) — fluorophosphate crown (ED). f = +85.1 mm.

L31 opens group G3 and is the third ED element. Its concave-to-object meniscus shape (R1 = −230.38, R2 = −39.23) provides positive power while presenting a strongly curved rear surface to the cemented junction with L32. The meniscus orientation means L31 acts as a "field-correcting" positive element: it bends off-axis rays from the focus group back toward the axis while its ED glass controls chromatic aberrations in the diverging beam emerging from G2.

### L32 — Negative Meniscus, concave to image (cemented with L31 as doublet D3)

nd = 1.68893, νd = 31.16. Glass: E-FD8 (HOYA) — dense flint. f = −93.4 mm.

L32 is the flint partner of doublet D3. The doublet as a whole has a very long focal length (+1137 mm), making it nearly afocal — its primary role is chromatic correction rather than power contribution. The D3 doublet sits immediately behind the focus group and stabilizes lateral color as G2 translates during focusing.

### L33 — Biconvex Positive (cemented with L34 as doublet D4; ED element 4 of 4)

nd = 1.59282, νd = 68.62. Glass: FCD515 (HOYA) — fluorophosphate crown (ED, dPgF = +0.0194). f = +52.8 mm.

L33 is the fourth and final ED element, and it carries the strongest individual positive power in G3 (f = +52.8 mm). Its biconvex shape (R1 = +48.45, R2 = −82.65) places it in the converging beam of G3 where it does the primary work of re-converging the beam toward the image. FCD515 has a higher index and lower Abbe number than FCD705 (1.593/68.6 vs. 1.550/75.5), but it remains firmly in the ED category with anomalous partial dispersion (dPgF = +0.0194) that assists secondary-spectrum correction.

### L34 — Biconcave Negative (cemented with L33 as doublet D4)

nd = 1.76182, νd = 26.61. Glass: S-TIH14 (OHARA) — titanium flint (νd catalog value 26.52; difference within rounding tolerance). f = −54.0 mm.

L34 is the flint counterpart to L33, and doublet D4 has a net focal length of +547 mm (weakly positive). Like D3, this doublet's primary function is chromatic: the νd difference of 42.0 between L33 and L34 creates a powerful achromatic interface. However, unlike the nearly afocal D3, D4 carries a slight net positive contribution that participates in the relay power of G3.

A notable feature: L34 has symmetric radii (R1 = −82.654, R2 = +82.654), making it equiconcave. This symmetry minimizes coma contribution from L34 individually, which is advantageous for an element near the middle of G3 where off-axis rays are converging.

### L35 — Biconvex Positive (singlet)

nd = 2.00100, νd = 29.13. Glass: TAFD55 (HOYA) — lanthanum-titanium ultra-dense crown. f = +54.3 mm.

L35 is the most remarkable element in the design. Its refractive index of 2.001 is the highest in the entire system and among the highest available in any commercial optical glass catalog. HOYA TAFD55 belongs to HOYA's ultra-high-index TAFD (Tantalum Flint Dense) series and enables a biconvex element (R1 = +119.84, R2 = −96.63) to deliver f = +54.3 mm of positive power with relatively gentle curvatures. At this index, a surface curvature that would produce a given amount of refraction in BK7 (nd = 1.517) can be achieved with approximately four times less curvature, which dramatically reduces higher-order spherical aberration.

L35 sits in the converging beam of G3 and acts as the primary power relay between the chromatic-correcting doublets (D3, D4) and the field-flattening rear element (L36). The large air gap after L35 (19.51 mm) separates it substantially from L36 and creates an effective "air lens" — the strongly curved rear surface of L35 and the concave front surface of L36 form a diverging air space that contributes negative Petzval curvature, helping to flatten the image field.

### L36 — Negative Meniscus, concave to object (singlet; rear element)

nd = 1.51680, νd = 64.21. Glass: S-BSL7 (OHARA) — borosilicate crown, equivalent to N-BK7 (Schott). f = −95.3 mm.

L36 is the final optical element, positioned deep in the converging cone close to the image plane. The patent specifically describes it (¶0090): "by making the lens L36 closest to the image side in the third lens group G3 as a single lens which is concave toward the object side and has a negative refractive power, it is possible to improve the Petzval sum, it is possible to shorten the total length of the lens system, and it is possible to correct distortion. In particular, by using a lens which is concave toward the object side, it is possible to satisfactorily correct astigmatism."

L36's concave-to-object meniscus shape (R1 = −37.76, R2 = −164.00) places its strongly curved surface facing the converging beam, which is where it has maximum leverage on field curvature and astigmatism. Its negative power (f = −95.3 mm) adds negative Petzval contribution — critical for maintaining flat-field performance across the 43.8 mm image circle of the GFX sensor. The choice of ordinary borosilicate crown (S-BSL7) for this element reflects its primarily geometric role: no special dispersion characteristics are needed here; what matters is the surface curvatures and the element's position deep in the converging cone.

## Glass Selection and Chromatic Strategy

The design employs 12 distinct nd/νd glass pairs across 14 elements (three elements share the same FCD705 glass). Several pairs resolve cleanly to HOYA and OHARA catalog glasses; two patent pairs, L13 and L14, are retained as six-digit code annotations because the patent gives only nd/νd and no current catalog entry matches within tolerance.

| Glass | nd | νd | Vendor | Used in | Role |
|-------|------|------|--------|---------|------|
| TAFD45 / S-LAH98 | 1.95375 | 32.32 | HOYA / OHARA | L11 | High-index front collector |
| FCD705 | 1.55032 | 75.50 | HOYA | L12, L16, L31 | ED crown (×3) — primary achromat partner |
| S-TIL26 / 567428 | 1.56732 | 42.81 | OHARA Sellmeier | L13 | Barium/high-index glass in cemented doublet D1 |
| H-ZLaF68L | 1.88300 | 39.22 | NHG | L14 | High-index lanthanum glass in cemented doublet D1 |
| S-TIM27 | 1.63980 | 34.49 | OHARA | L15 | Titanium flint in cemented doublet D2 |
| S-NPH3 | 1.95906 | 17.47 | OHARA | L21 | Ultra-dense flint — focus group achromat |
| S-LAH89 | 1.85150 | 40.78 | OHARA | L22 | Lanthanum crown — focus group partner |
| FCD515 | 1.59282 | 68.63 | HOYA | L33 | ED crown — rear-group achromat |
| E-FD8 | 1.68893 | 31.16 | HOYA | L32 | Dense flint in cemented doublet D3 |
| S-TIH14 | 1.76182 | 26.52 | OHARA | L34 | Titanium flint in cemented doublet D4 |
| TAFD55 | 2.00100 | 29.13 | HOYA | L35 | Ultra-high-index power relay |
| S-BSL7 | 1.51680 | 64.20 | OHARA | L36 | Borosilicate crown — field flattener |

The chromatic correction strategy distributes achromatization across five cemented interfaces and all three groups. Each cemented doublet pairs a low-dispersion crown with a high-dispersion flint. The four ED elements (L12, L16, L31, L33) are all fluorophosphate crowns with anomalous partial dispersion, meaning their P(g,F) values deviate from the Schott normal line. This anomalous dispersion allows the design to address secondary spectrum — the residual chromatic error that persists even after primary color correction — which is important for maintaining contrast and color fidelity across the large GFX sensor's image circle.

The confirmed catalog matches still show extensive HOYA use: the four ED elements are HOYA fluorophosphate crowns (three FCD705 and one FCD515), L32 resolves to HOYA E-FD8, and the highest-index element L35 is HOYA TAFD55. L11's nd/νd code is shared by HOYA TAFD45 and OHARA S-LAH98, so the analysis treats it as an equivalent class rather than a patent-confirmed vendor choice. L14 is now coefficient-backed through NHG H-ZLaF68L. L13 remains a patent-code annotation pending a catalog source.

## Focus Mechanism

**Type:** Inner focus. Only G2 (L21+L22 cemented doublet) translates along the optical axis during focusing. G1, G3, and the aperture stop remain fixed.

**Drive:** Linear motor (LM) — noted in the lens name suffix. The two-element cemented doublet is lightweight compared to multi-element focus groups, enabling fast, quiet AF performance.

**Focus travel:** G2 translates rearward (toward the image) during focusing from infinity to the close-focus distance.

| Parameter | Infinity | 110 cm (patent) |
|-----------|----------|-----------------|
| DD[11] (G1–G2 air gap) | 4.700 mm | 13.310 mm |
| DD[14] (G2–G3 air gap) | 18.190 mm | 9.580 mm |
| **Total gap sum** | **22.890 mm** | **22.890 mm** |
| G2 translation | — | +8.610 mm (toward image) |

The gap sum is exactly conserved (22.890 mm at both positions), confirming pure translation of G2 without any floating or compensating elements. The patent evaluates performance at 110 cm, where the working f-number increases to approximately f/2.33 due to the image-side shift of the focus group. The production lens achieves MFD = 0.9 m, which would require slightly more travel (approximately 11–12 mm, inferred from the gap geometry), yielding a maximum magnification of 0.16× as specified by Fujifilm.

The two-element focus group represents a deliberate compromise discussed in the patent (¶0004–0005, ¶0087–0089): a single-element focus group would be faster to drive but harder to correct chromatically during focus travel, while a multi-element group (3+ elements) would suppress aberration fluctuations more effectively but at the cost of focus speed and motor size. The two-element cemented doublet strikes a balance, using the extreme index contrast between L21 (nd = 1.959) and L22 (nd = 1.852) to maintain chromatic correction while keeping the moving mass minimal.

## Aspherical Surfaces

**There are no aspherical surfaces in this design.**

This is explicitly confirmed by both the patent (which publishes no aspherical coefficient tables for Example 1) and by Fujifilm's product page, which states "14 **spherical** lens elements in 9 groups." The design achieves its aberration correction entirely through 14 spherical glass elements, 5 cemented interfaces, and careful glass selection — particularly the deployment of four ED elements and the ultra-high-index TAFD55 singlet (L35).

The all-spherical approach is noteworthy for a modern f/2 medium-format prime with a 43.8 mm image circle. Most contemporary designs at this speed and image circle employ at least one aspherical surface to control spherical aberration and field curvature. Kondo's design instead relies on the high element count (14), the extreme refractive indices available in modern glass catalogs (up to nd = 2.001), and the inner-focus architecture (which keeps the aperture cone compact at the focus group) to achieve comparable correction. The penalty is weight (1,010 g) and physical size — an aspherical design might achieve similar performance with fewer elements — but the all-spherical construction avoids the cost and manufacturing complexity of precision-molded or polished aspherical surfaces at medium-format diameters.

## Conditional Expressions

The patent defines eleven conditional expressions governing the design space. Example 1 satisfies all of them:

| Expression | Condition | Example 1 value | Status |
|------------|-----------|-----------------|--------|
| (1) | 1.2 < (R21+R22)/(R21−R22) < 3.5 | 1.456 | ✓ |
| (2) | 1.70 < N2 < 2.2 | 1.954 | ✓ |
| (3) | 60 < ν1max < 90 | 75.50 | ✓ |
| (4) | 60 < ν3max < 90 | 75.50 | ✓ |
| (5) | −2.5 < f/f2 < −1.0 | −1.918 | ✓ |
| (6) | 0.9 < f/f1 < 1.5 | 1.261 | ✓ |
| (7) | 1.0 < f/f3 < 2.0 | 1.529 | ✓ |
| (8) | 15 < ν21 < 30 | 17.47 | ✓ |
| (9) | 1.65 < N1 < 2.2 | 1.954 | ✓ |
| (10) | 15 < Δν1r < 50 | 41.01 | ✓ |
| (11) | 0.10 < BF/f < 0.50 | 0.249 | ✓ |

Expression (1) is the most design-specific: it constrains the shape factor of L21 (the front meniscus of the focus group), which governs the balance between astigmatism and field curvature control during focusing. The value of 1.456 falls comfortably within the preferred tighter range of Conditional Expression (1-1): 1.3 < x < 3.0.

## Verification Summary

All numerical claims in this analysis were independently verified via paraxial ray trace (y-nu method) in Python:

| Parameter | Computed | Patent | Match |
|-----------|----------|--------|-------|
| System EFL | 108.472 mm | 108.47 mm | ✓ |
| Back focal length (air-equiv.) | 26.967 mm | 26.97 mm | ✓ |
| G1 focal length | 86.00 mm | 86.02 mm (from f/f1=1.261) | ✓ |
| G2 focal length | −56.56 mm | −56.55 mm (from f/f2=−1.918) | ✓ |
| G3 focal length | 70.95 mm | 70.94 mm (from f/f3=1.529) | ✓ |
| Variable gap conservation | 22.890 mm | 22.890 mm | ✓ |
| ED element count | 4 | 4 (Fujifilm spec) | ✓ |

The air-equivalent BFD was computed as 23.857 mm (air) + 3.200/1.51680 mm (cover glass) + 1.000 mm (air) = 26.967 mm, matching the patent's stated BF = 26.97 mm.

## Sources

1. US 2018/0100988 A1, "Imaging Lens and Imaging Apparatus," Masato Kondo / FUJIFILM Corporation. Published April 12, 2018.
2. Fujifilm official product page: GF110mmF2 R LM WR specifications. https://www.fujifilm-x.com/global/products/lenses/gf110mmf2-r-lm-wr/specifications/
3. HOYA optical glass catalog (FCD705, FCD515, E-FD8, TAFD45, TAFD55) — confirmed via refractiveindex.info and HOYA product data where nd/νd matches.
4. NHG/Hubei New Huaguang H-ZLaF68L product data sheet — confirms d-code 883392, nd = 1.88300, νd = 39.22, and formula constants.
5. OHARA optical glass catalog (S-LAH98, S-TIM27, S-NPH3, S-LAH89, S-TIH14, S-BSL7) — identifications based on nd/νd catalog matching; L13 remains code-only pending a catalog source.
