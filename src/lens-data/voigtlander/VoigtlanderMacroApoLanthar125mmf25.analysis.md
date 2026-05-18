# Voigtländer Macro Apo-Lanthar 125mm f/2.5 SL — Optical Analysis

## Patent Reference and Design Identification

**Patent:** JP 2002-090622 A (特開2002-90622)
**Filed:** September 20, 2000 (平成12年9月20日)
**Published:** March 27, 2002 (平成14年3月27日)
**Inventor:** Aida Yoshihisa (逢田 祥寿)
**Applicant:** Cosina Co., Ltd. (株式会社コシナ), Nakano-shi, Nagano Prefecture
**Title:** Medium Telephoto Macro Lens (中望遠マクロレンズ)
**Embodiment analyzed:** Example 2 (第2実施形態), Table 2 (表2), ¶0018–0022

This analysis transcribes Example 2 as requested. The following evidence supports and complicates the identification of this embodiment as the production design:

1. **ED element count.** Example 2 contains two elements of S-FPL51–class glass (νd = 81.6), matching the "two anomalous dispersion elements" description in Cosina's own marketing literature (as reproduced on lens-db.com and confirmed by multiple reviewers). Example 1, by contrast, contains only one S-FPL51 element (L12); its other two front positives (L11, L13) use FK5 (νd = 70.4), which is low-dispersion but not conventionally classified as "ED."
2. **Focal length and F-number.** Both examples have EFL ≈ 100 mm at f/2.53. A uniform ×1.25 scale factor produces EFL = 125.0 mm — the marketed focal length — and f/2.53, rounded to the marketed f/2.5.
3. **Half-field angle.** The patent's half-field of 9.8° for Example 2 (¶0023), computed to the long edge of 35 mm format, yields 2ω ≈ 20°, consistent with published production specifications.
4. **1:1 macro capability.** The patent provides variable-gap data at unity magnification (¶0022), matching the production lens's 1:1 macro specification with MFD = 0.38 m.
5. **Patent timing.** The patent was filed in September 2000 and published in March 2002; the production lens was announced in May 2001 and sold from June 2001 through March 2007.

**Critical discrepancy — element count.** The production lens is consistently specified as "11 elements in 9 groups" in manufacturer-sourced documentation (Cosina marketing copy, Photozone review, B&H, and multiple secondary sources). Example 2 has only 10 elements (19 surfaces); Example 1 has 11 elements (20 surfaces). The difference lies in Group 2: Example 1 uses a cemented doublet (L21 + L22, 2 elements), while Example 2 uses a single negative meniscus (L51, 1 element). One Japanese reviewer (Shige's hobby) reports "10 elements in 9 groups," but this is the minority position.

The tension between the element count (favoring Example 1) and the ED element count (favoring Example 2) cannot be fully resolved from published sources. Three possible reconciliations exist: (a) the production design follows Example 1's 11-element layout with a glass substitution that raises L13 from FK5 to S-FPL51, yielding 11 elements with 2 ED; (b) Cosina's marketing counts FK5 as "anomalous dispersion" — but this is questionable, as FK5 has only ΔP(g,F) ≈ +0.004, well below the threshold (~0.01) typically required for the "anomalous dispersion" designation in Japanese optical convention; (c) the "11 elements" figure is a specification error carried forward from the discontinuation of the product. This analysis proceeds with Example 2 as transcribed, but the reader should be aware that the production design may differ in its Group 2 configuration.

## Optical Architecture

The Macro Apo-Lanthar 125 is a three-group medium telephoto macro design with a positive–negative–positive power distribution:

- **Group 1 (40):** f = +91.3 mm. A powerful positive front group of seven lenses, responsible for the bulk of the system's refractive power and chromatic correction. It contains three low-dispersion positive meniscus elements, a strong negative flint, a cemented negative–positive doublet, and a closing biconvex.
- **Group 2 (50):** f = −138.7 mm. A single negative meniscus that acts as a field-correcting and focus-compensating element.
- **Group 3 (60):** f = +262.6 mm. A fixed rear group of two elements — a biconcave negative and a biconvex positive — functioning as a weakly positive relay that controls field curvature and back-focal-distance geometry.

The system EFL is 125.0 mm (production scale) at f/2.5 (marketed) / f/2.53 (design). The overall design resembles a modified Ernostar/Sonnar heritage adapted for macro performance: a strong positive front collector, a separating negative group, and a rear relay. The distinguishing feature is the front group's three low-dispersion positive elements — one FK5 crown (νd = 70.4) and two S-FPL51 ED crowns (νd = 81.6) — combined with a floating two-group focus mechanism that maintains aberration correction from infinity to 1:1 magnification.

The Petzval sum at design scale is 0.00067 mm⁻¹, yielding a Petzval radius of approximately −1487 mm — about 15× the focal length. This is remarkably well-corrected flat-field performance, essential for a macro lens intended for documentary close-up work across the entire 35 mm frame.

## Aspherical Surfaces

The design is entirely spherical. Neither Example 1 nor Example 2 of the patent employs any aspherical surfaces. The patent text contains no aspherical coefficient tables, and the surface prescription uses only spherical radii of curvature. The aberration correction figures shown in Figs. 6–8 — including longitudinal spherical aberration, field curvature, and distortion — are achieved purely through the glass selection, element count, and power balancing of the 10-element all-spherical prescription.

This all-spherical approach is notable for a fast macro lens of this era and reflects the designer's reliance on glass quality and element count to achieve apochromatic correction. The production timing (2001) also plays a role: precision glass-molded aspherics were available but added significant cost and manufacturing complexity for the element diameters involved in a 125 mm f/2.5 design. Later Cosina designs in the Apo-Lanthar lineage, including the 90 mm f/3.5 SL II (2010) and the 110 mm f/2.5 (2018), do incorporate aspherical surfaces.

## Element-by-Element Analysis

### L41 — Positive Meniscus, convex to object

nd = 1.48749, νd = 70.4. Glass: FK5 (Schott) / K-FK5 (Sumita) — fluorophosphate crown. f = +390.3 mm.

The weakest of the three front positive elements, L41 serves as a gentle collector that begins converging the incoming beam without introducing strong aberrations. Its meniscus shape (R1 = +139.1 mm, R2 = +513.2 mm at production scale) minimizes the angle of incidence on both surfaces, controlling spherical aberration at the high-ray-height entrance. The FK5 glass provides low dispersion (νd = 70.4) and contributes to the patent's conditional requirement that V1 > 70 (¶0006, ¶0011).

### L42 — Positive Meniscus, convex to object

nd = 1.49700, νd = 81.6. Glass: S-FPL51 (OHARA) / K-FPL51 (Sumita) — ED fluorophosphate crown. f = +161.8 mm.

The first of two ED elements. L42 is substantially stronger than L41 and carries more of the front group's converging power. The S-FPL51–class glass (νd = 81.6) provides anomalous partial dispersion: its P(g,F) deviation from the Schott normal line is approximately +0.032, which enables secondary-spectrum correction when paired with the flint elements downstream. The meniscus shape (R1 = +60.5 mm, R2 = +236.6 mm) keeps the marginal ray bending gradual across the element's 6.15 mm center thickness.

### L43 — Positive Meniscus, convex to object

nd = 1.49700, νd = 81.6. Glass: S-FPL51 (OHARA) / K-FPL51 (Sumita) — ED fluorophosphate crown. f = +150.6 mm.

The second ED element. L43 uses the same glass as L42 and has similar power, but with slightly stronger curvatures (R1 = +53.7 mm, R2 = +182.2 mm). Together, L42 and L43 split the primary chromatic correction task across two widely separated surfaces, which is more effective at controlling higher-order chromatic variation than concentrating all the ED power in a single thick element. The 11.4 mm air gap between L43 and L44 (at production scale) provides the working distance needed for the ray heights to separate chromatically before encountering the flint corrector.

The patent explicitly requires that the Abbe numbers of the three front positive lenses (V1, V2, V3) all exceed 70 (¶0006, ¶0011). This condition ensures that the chromatic burden on the flint correctors is minimized, reducing the secondary spectrum. In Example 2, V1 = 70.4 and V2 = V3 = 81.6, satisfying this condition.

### L44 — Biconcave Negative (near-plano front)

nd = 1.67270, νd = 32.2. Glass: SF5 (Schott) / K-SFS5 (Sumita) — dense flint. f = −55.7 mm.

The primary flint corrector. L44 is the strongest negative element in Group 1 by absolute power (f = −55.7 mm). Its first surface is nearly flat (R1 = −2216.1 mm at production scale), while the second surface is a strongly curved concavity facing the image side (R2 = +38.2 mm), giving the element a near-plano-concave profile despite its technically biconcave classification. The dense flint glass (νd = 32.2) provides the high dispersion needed to achromatize the combined contribution of L41–L43. The strong negative power here also introduces overcorrected spherical aberration that partially balances the undercorrected SA from the three positive meniscus elements ahead.

The large air gap after L44 (3.73 mm at production scale) allows the axial and off-axis beams to separate spatially before entering the cemented doublet, improving the doublet's ability to act independently on coma and lateral color.

### L45 + L46 — Cemented Doublet (Negative Meniscus + Positive Meniscus)

**L45:** nd = 1.67003, νd = 47.2. Glass: N-BAF10 (Schott) / K-BAF10 (Sumita) — barium flint. f = −66.8 mm.
**L46:** nd = 1.83400, νd = 37.3. Glass: S-LAH60 (OHARA) / K-LASH60 (Sumita) — dense lanthanum flint. f = +81.7 mm.
**Combined:** f = −241.0 mm (weakly negative).

This cemented doublet is unusual: both elements use flint-type glasses (νd = 47.2 and 37.3), rather than the conventional crown–flint pairing. The purpose is not primary achromatization (which L42/L43 + L44 already handle) but rather coma and oblique spherical aberration correction. The doublet sits in a zone where marginal rays are converging rapidly after L44's strong negative refraction, and the cemented interface (R = 23.0 mm at production scale) acts as a buried surface that corrects higher-order monochromatic aberrations without introducing an air gap that would amplify alignment sensitivity.

L45's barium flint (N-BAF10) has moderate dispersion and relatively high index, giving it useful coma-correcting power. L46's lanthanum flint (S-LAH60) has the highest refractive index in the entire system (nd = 1.83400), which keeps the surface curvatures manageable despite the element's substantial positive power. The net weakly negative power (f = −241 mm) means the doublet contributes a slight divergence to the beam, gently spreading the cone before the closing element L47.

### L47 — Biconvex Positive

nd = 1.58913, νd = 61.3. Glass: S-BAL14 (OHARA) / K-BAL14 (Sumita) — barium crown. f = +57.6 mm.

The closing element of Group 1. L47 is a simple biconvex (R1 = +42.6 mm, R2 = −160.0 mm) that collects the diverging beam from the cemented doublet and converges it toward the image. Its moderate-index barium crown glass provides good transmission and low stress birefringence. At f = +57.6 mm, L47 is the strongest positive element in Group 1 and the primary element controlling the exit cone angle. The strong front curvature and weaker rear curvature distribute the bending asymmetrically, which helps control coma at the Group 1 exit.

### L51 — Negative Meniscus, convex to object (Group 2)

nd = 1.51680, νd = 64.2. Glass: S-BSL7 (OHARA) / K-BK7 (Sumita) — borosilicate crown (BK7 equivalent). f = −138.7 mm.

The sole element of Group 2, and one of the two focusing groups. L51 is a negative meniscus with both radii positive (R1 = +63.5 mm, R2 = +33.0 mm at production scale), creating a diverging element that bends the light path outward. Its relatively modest glass (BK7 equivalent, νd = 64.2) contributes negligible chromatic change as it moves during focus — a deliberate choice for a floating focus element, since any chromatic shift from the moving group would degrade the Apo correction at non-infinity focus distances.

L51's role is primarily as a field-flattening compensator. During focusing from infinity to 1:1, L51 moves less than Group 1 (its D15 gap increases by only 6.74 mm versus D13's 61.0 mm travel), functioning as a differential corrector that compensates for the field curvature and coma changes induced by Group 1's extension.

### L61 — Biconcave Negative (Group 3)

nd = 1.51680, νd = 64.2. Glass: S-BSL7 (OHARA) / K-BK7 (Sumita) — borosilicate crown (BK7 equivalent). f = −55.2 mm.

The front element of the fixed rear group. L61 is biconcave (R1 = −64.5 mm, R2 = +51.5 mm) and strongly negative. Together with L62, it forms a weakly positive relay doublet (Group 3 combined f = +262.6 mm) that controls the image-side telecentricity and field curvature. L61's strong negative power introduces overcorrected Petzval contribution that flattens the field — critical for a macro lens that must deliver edge-to-edge sharpness on flat subjects. Like L51, L61 uses BK7-equivalent glass, which keeps the chromatic contribution of the fixed group spectrally neutral.

### L62 — Biconvex Positive (Group 3)

nd = 1.71300, νd = 53.9. Glass: S-LAL8 (OHARA) / K-LaL8 (Sumita) — lanthanum crown. f = +53.3 mm.

The final optical element. L62 is a strong biconvex (R1 = +68.1 mm, R2 = −83.1 mm) using a lanthanum crown glass with relatively high index (nd = 1.71300) and moderate dispersion. The high index keeps the surface curvatures moderate despite the element's strong positive power, and the lanthanum crown's partial dispersion properties help maintain the system's secondary-spectrum correction at the image end. L62 controls the exit angle of the marginal rays, setting the back focal distance geometry. At production scale, the BFD is 46.7 mm, comfortably exceeding the Nikon F mount flange distance (46.5 mm) and placing the rear element essentially flush with the mount plane.

## Glass Identification and Selection

The design uses seven distinct glass types across ten elements. Cosina is documented as using glass from multiple suppliers, with Sumita (K-prefix designations) being a frequent source for Voigtländer-branded lenses. All identifications below are exact catalog matches (Δnd < 10⁻⁴, Δνd < 0.2).

| Element | nd | νd | Catalog Match | Vendor | Role |
|---------|---------|------|---------------|--------|------|
| L41 | 1.48749 | 70.4 | FK5 / K-FK5 | Schott / Sumita | Low-dispersion crown collector |
| L42 | 1.49700 | 81.6 | S-FPL51 / K-FPL51 | OHARA / Sumita | ED crown, primary achromatizer |
| L43 | 1.49700 | 81.6 | S-FPL51 / K-FPL51 | OHARA / Sumita | ED crown, secondary achromatizer |
| L44 | 1.67270 | 32.2 | SF5 / K-SFS5 | Schott / Sumita | Dense flint, chromatic corrector |
| L45 | 1.67003 | 47.2 | N-BAF10 / K-BAF10 | Schott / Sumita | Barium flint, coma corrector |
| L46 | 1.83400 | 37.3 | S-LAH60 / K-LASH60 | OHARA / Sumita | Dense lanthanum flint, high-index corrector |
| L47 | 1.58913 | 61.3 | S-BAL14 / K-BAL14 | OHARA / Sumita | Barium crown, closing collector |
| L51, L61 | 1.51680 | 64.2 | S-BSL7 / K-BK7 | OHARA / Sumita | Borosilicate crown, chromatically neutral |
| L62 | 1.71300 | 53.9 | S-LAL8 / K-LaL8 | OHARA / Sumita | Lanthanum crown, rear relay |

The chromatic strategy of the design rests on three pillars:

1. **Front-group ED pairing.** Two elements of S-FPL51–class glass (L42, L43) provide the anomalous partial dispersion (ΔP(g,F) ≈ +0.032) needed to bring three wavelengths to a common focus. By contrast, L41's FK5 glass has ΔP(g,F) ≈ +0.004 — insufficient for meaningful secondary-spectrum correction on its own, but its low base dispersion (νd = 70.4) keeps the primary chromatic contribution small. The patent's conditional V1, V2, V3 > 70 (¶0011) ensures that the entire front positive group has low dispersion, reducing the magnitude of chromatic error that the flint correctors must handle.
2. **Single dense flint corrector.** L44 (SF5, νd = 32.2, ΔP(g,F) ≈ −0.001) provides nearly all the achromatizing power. Its large dispersion differential relative to the ED elements (Δνd ≈ 49) gives a strong chromatic lever arm, while its near-normal partial dispersion avoids introducing secondary spectrum of its own.
3. **Chromatically neutral focus and relay groups.** Both the floating Group 2 (L51) and the fixed Group 3 (L61, L62) use glasses with moderate Abbe numbers (53.9–64.2) and near-zero ΔP(g,F). This ensures that the apochromatic correction established in Group 1 is preserved as the focus state changes — a design choice that is not accidental but essential to the lens's claim of apochromatic performance across all magnifications.

## Focus Mechanism

The Macro Apo-Lanthar 125 uses a floating-element inner focus design with two independently moving groups. Group 3 remains fixed relative to the camera body.

| Gap | Position | Infinity | 1/2× Mag | 1:1 Mag |
|-----|----------|----------|----------|---------|
| D13 (Group 1 → Group 2) | Surface 13 rear | 4.95 mm | 34.23 mm | 65.97 mm |
| D15 (Group 2 → Group 3) | Surface 15 rear | 6.04 mm | 12.09 mm | 12.78 mm |
| **Total extension** | | — | +35.33 mm | +67.76 mm |

All values are at production scale (×1.25). The total focus extension from infinity to 1:1 is approximately 68 mm, roughly doubling the lens's physical length — consistent with user reports that the barrel extends to approximately twice its infinity length at maximum magnification.

The focus mechanism is helicoid-driven, manually operated, with no autofocus motor. The helicoid extends in two stages, producing the classic telescoping barrel characteristic of the SL-series macro lenses.

Group 1 travels the vast majority of the extension (D13 increases by 61.0 mm from infinity to 1:1), while Group 2's contribution is much smaller (D15 increases by only 6.7 mm). This differential movement is the key to the design's aberration stability across the focus range: Group 2 acts as a "floating corrector" that compensates for the field curvature, coma, and astigmatism changes that Group 1's large extension introduces. Without Group 2's differential motion, the image quality would degrade substantially at high magnifications — a common limitation of simpler unit-focus or single-group inner-focus macro designs.

The patent describes the focus mechanism at ¶0008: during focusing from infinity to close distances, the spacing between Group 1 and Group 2 increases, with both groups extending forward away from the fixed Group 3. This suppresses aberration variation during close-range photography (¶0008).

## Conditional Expressions

The patent defines three conditional inequalities (¶0006, ¶0009–0011) that govern the power balance between groups and the glass selection:

| Condition | Requirement | Example 2 Value | Status |
|-----------|-------------|-----------------|--------|
| $1.1 < f/f_1 < 1.8$ | Group 1 power relative to system | $f/f_1 = 1.37$ | Satisfied |
| $0.7 < f/\|f_2\| < 2.4$ | Group 2 power relative to system | $f/\|f_2\| = 0.90$ | Satisfied |
| $V_1, V_2, V_3 > 70$ | Abbe numbers of three front positive lenses | 70.4, 81.6, 81.6 | Satisfied |

The patent explains the consequences of violating each condition:

- **f/f₁ > 1.8:** Group 1 becomes too strong, increasing aberration sensitivity and making close-focus correction harder (¶0009).
- **f/f₁ < 1.1:** Group 1 becomes too weak, requiring greater lens extension for focus and increasing the barrel's mechanical complexity (¶0009).
- **f/|f₂| > 2.4:** Group 2 becomes too strong relative to the system, and the aberration corrections it applies during floating focus become excessive and difficult to control (¶0010).
- **f/|f₂| < 0.7:** Group 2 becomes too weak to provide adequate floating correction, and Group 1's power must compensate, creating a design that is harder to optimize across all magnifications (¶0010).
- **V < 70:** Chromatic aberration from the front positive group increases, requiring stronger flint correction that introduces secondary spectrum and limits the lens's apochromatic performance (¶0011).

## Design Heritage and Context

The "Apo-Lanthar" designation traces to 1951, when Voigtländer introduced a 105 mm f/4.5 Apo-Lanthar for the Prominent camera — one of the first photographic lenses to use rare-earth lanthanum glass for chromatic correction. The name itself derives from this lanthanum heritage.

When Cosina licensed the Voigtländer name in the late 1990s, the Apo-Lanthar designation was reserved for the company's highest-performance designs. The SL-series Apo-Lanthars — the 90 mm f/3.5, this 125 mm f/2.5, and the 180 mm f/4 — were all manual-focus, all-metal lenses manufactured at Cosina's Nakano facility in Nagano Prefecture. The 125 mm is attributed to inventor Aida Yoshihisa per the patent filing.

The 125 mm f/2.5 was among the fastest macro lenses available at the time of its introduction. The iris diaphragm uses 9 rounded blades, stopping down to f/22. As with any macro lens, the effective f-number increases with magnification due to bellows extension — at 1:1, the effective aperture is approximately f/5.0 — but the mechanical aperture ring retains its f/2.5 marking, and through-the-lens metering compensates automatically. The lens was produced from June 2001 to March 2007, with total production reported at fewer than 10,000 units. It was discontinued when Cosina began manufacturing Zeiss ZF/ZE lenses in the same production line.

The design's successor, the Voigtländer Macro Apo-Lanthar 110 mm f/2.5 (for Sony E-mount, announced 2018), uses a related optical architecture adapted for mirrorless camera sensor geometry with a substantially shorter back focal distance.

## Verification Summary

All paraxial parameters were independently verified by ABCD transfer-matrix ray trace in Python.

| Parameter | Patent (design scale) | Computed | Match |
|-----------|----------------------|----------|-------|
| EFL | ~100 mm (inferred) | 100.008 mm | ✓ |
| f/f₁ | 1.37 | 1.370 | ✓ |
| f/\|f₂\| | 0.90 | 0.901 | ✓ |
| F-number | 2.53 | 2.53 | ✓ |
| Half-field | 9.8° | 9.8° (long edge) | ✓ |
| BFD (at ×1.25) | — | 46.66 mm | ✓ (feasible for Nikon F, 46.5 mm flange) |

Note: Example 1 of the same patent yields EFL = 99.975 mm and BFD = 42.26 mm at design scale (52.83 mm at ×1.25), which is also feasible for Nikon F mount. Both examples produce valid production-scale geometries.

## Sources

1. JP 2002-090622 A (特開2002-90622), Cosina Co., Ltd., published 2002-03-27. Primary source for all prescription data, conditional expressions, and design rationale.
2. Cosina Co., Ltd., product documentation for Macro Apo-Lanthar 125mm F2.5 SL (discontinued product archives). Marketing copy reproduced on lens-db.com specifies "two anomalous dispersion elements in its 11-element optical formula."
3. Schroiff, Klaus, "Voigtlander APO-Lanthar 125mm f/2.5 SL — Review / Test Report," Photozone / OpticalLimits, March 2007. Independently confirms "11 elements in 9 groups including 2x ED elements."
4. OHARA Optical Glass Catalog — nd/νd values and Sellmeier coefficients for S-FPL51, S-FSL5, S-BAL14, S-BSL7, S-LAL8, S-LAH60, S-TIH4, S-BAM4.
5. Schott Optical Glass Catalog — nd/νd values for FK5, SF5, N-BAF10, N-LAK8.
6. Sumita Optical Glass Catalog — nd/νd values for K-FK5, K-FPL51, K-SFS5, K-BAF10, K-LASH60, K-BAL14, K-BK7, K-LaL8.
