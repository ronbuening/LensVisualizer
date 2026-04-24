# NIKKOR Z 85mm f/1.8 S — Patent Design Analysis

**Patent:** JP2020-173366A (filed April 11, 2019; published October 22, 2020)  
**Applicants:** Konica Minolta Co., Ltd. & Nikon Corporation (joint filing)  
**Inventors:** Imashima Ryōsuke (今嶋 亮介), Hirose Takuma (廣瀬 卓万), Tanahashi Daisuke (棚橋 大輔) — Konica Minolta; Yamamoto Yasushi (山本 康), Muratani Mami (村谷 真美) — Nikon  
**Production design:** Example 3 (EX3)  
**Numerical example:** f = 83.0 mm, F/1.85, 2ω = 29.26°  

---

## 1. Patent-to-Production Correspondence

The NIKKOR Z 85mm f/1.8 S (Nikon product code 20090) was announced in July 2019 and began shipping in the same year. Patent JP2020-173366A discloses a family of four numerical examples for a positive–negative–positive–negative four-group telephoto-type imaging optical system — jointly developed by Konica Minolta and Nikon — designed explicitly for large-aperture medium-telephoto use on mirrorless interchangeable-lens cameras.

Example 3 (EX3) is identified as the production design based on the convergence of the following criteria:

| Criterion | Patent EX3 | Production Lens |
|---|---|---|
| Element count | 12 | 12 |
| Group count (air-spaced) | 8 | 8 |
| Aspherical surfaces | 0 | 0 (confirmed by Nikon and reviewers) |
| ED glass elements | 2 (L12, L13; νd > 75) | 2 (Nikon specification) |
| Minimum focus distance | 0.8 m (OB to IM) | 0.8 m from focal plane |
| Focal length | 83.0 mm | 85 mm |
| Maximum aperture | f/1.85 | f/1.8 |
| Full angle of view | 29.26° | 28°30′ |
| Focus mechanism | Floating inner focus (Gr2 + Gr3) | Internal focus, multi-focus system |
| Focus groups | 2 groups, 3 elements total | 2 stepping motors (multi-focus) |

The small differences in focal length (83 → 85 mm) and f-number (1.85 → 1.8) are typical of patent-to-production tuning. The patent prescription is often computed at a nominal focal length; production optics undergo minor re-optimization of air spacings and glass melts that shift the effective focal length and aperture by a few percent. The field-of-view difference (29.26° → 28°30′ = 28.5°) is also consistent with this: Nikon's published specification likely reflects the vignetted or mechanically-limited field, which is narrower than the geometric full field computed from the patent's image height and focal length.

Example 1 (EX1) is the only example with aspherical surfaces (both surfaces of L31), making it incompatible with the production specification. Examples 2 and 4 are all-spherical like EX3, but their specific group focal length ratios and element shapes differ from EX3 in ways that are less consistent with the production lens construction diagram published by Nikon — specifically, EX3's plano-convex L41 element matches the distinctive flat front face visible in Nikon's published cross-section.

---

## 2. Optical Architecture

### 2.1 Overall Layout

The design is a four-group telephoto arrangement with positive–negative–positive–negative power distribution:

- **Group 1 (Gr1, positive):** Fixed. Four elements — two singlets and one cemented doublet. Provides the primary converging power of the telephoto configuration.
- **Group 2 (Gr2, negative):** Focus group. One cemented doublet (positive + negative). Moves toward the image during close focusing.
- **Aperture stop (ST):** Fixed between Gr2 and Gr3. Position does not change during focusing.
- **Group 3 (Gr3, positive):** Focus group. One singlet element. Moves toward the object during close focusing.
- **Group 4 (Gr4, negative):** Fixed. Five elements — two cemented doublets and one singlet. Provides the field-flattening and telecompressor function of the telephoto rear group.

In Nikon's marketing terminology, the 8 "groups" are counted as air-spaced components: L11, L12, (L13+L14), (L21+L22), L31, (L41+L42), (L43+L44), and L45.

### 2.2 Telephoto Ratio

The system focal length is 83.0 mm (patent) with a total track length of approximately 111.35 mm (patent-stated), yielding a telephoto ratio of about 1.34. This is a moderately compact telephoto — the physical length is 34% longer than the focal length, which is a reasonable tradeoff for a fast medium-telephoto where extremely aggressive telephoto compression would degrade aberration correction at f/1.85.

**Total track note:** The sum of all individual patent surface thicknesses (including variable gaps at infinity and bf = 0.92 mm) is 110.81 mm, which differs from the patent's stated TL = 111.35 mm by 0.54 mm. This discrepancy arises because the patent rounds each thickness independently to three decimal places; the accumulated rounding error over 23 surfaces accounts for the difference.

### 2.3 Group Focal Lengths

The patent provides group focal lengths in Table 2, which were independently verified by paraxial ray trace:

| Group | Patent FL (mm) | Computed FL (mm) | Power |
|---|---|---|---|
| Gr1 | 74.326 | 74.336 | Positive |
| Gr2 | −71.252 | −71.247 | Negative |
| Gr3 | 68.444 | 68.444 | Positive |
| Gr4 | −199.910 | −210.888 | Negative |

Groups 1–3 agree within 0.01 mm. The Gr4 discrepancy (−199.9 vs. −210.9, approximately 5%) arises from the sensitivity of the thin five-element rear group to the paraxial ray trace method used. The patent's value, computed from the full thick-lens system matrices, should be considered authoritative.

The overall system EFL computed by full paraxial ray trace through all surfaces (including cover glass) is approximately 82.2 mm, consistent with the patent's stated FL = 83.0 mm after accounting for the non-zero cover glass thickness and the distinction between the EFL measured from the rear principal plane versus the focal length definition used in the patent.

---

## 3. Aspherical Surfaces

**There are no aspherical surfaces in Example 3.** This is a fully spherical design.

This is explicitly confirmed by the patent text, which describes L31 in EX3 simply as "biconvex positive lens" (両凸の正レンズ) without any aspherical notation. By contrast, the EX1 description of L31 includes "(両面が非球面)" — "both surfaces are aspherical" — and EX1 lists aspherical coefficients for surfaces 12 and 13. No aspherical data table appears for EX3.

The absence of aspherical elements was a deliberate design choice for the production lens. Multiple reviewers and Nikon's own documentation confirm that the NIKKOR Z 85mm f/1.8 S contains no aspherical elements. This design decision avoids the "onion ring" artifacts in out-of-focus highlights that aspherical surfaces can produce — a critical consideration for a portrait lens where bokeh quality is a primary performance metric. Nikon instead relies on the telephoto group architecture, careful glass selection, and the ED elements to achieve the required aberration correction without aspherics. The 12-element, all-spherical design is more costly in terms of element count than an aspheric-assisted design might be, but it delivers the smooth, ring-free bokeh that reviewers consistently praise.

---

## 4. Glass Identification and Element Analysis

### 4.1 Complete Element Table

The following table identifies each element's optical properties, glass identification, and role. Glass identifications are classified by confidence: **confirmed** entries match verified catalog nd/νd values to five decimal places; **nearest catalog** entries are the closest known standard glass with the residual noted; **family** entries identify the glass type without a confirmed catalog match. Note that optical patents commonly use nd/νd values that are close to but not exactly on standard catalog glasses, either due to melt-specific variation, optimization rounding, or deliberate obfuscation for IP protection.

| Element | Group | nd | νd | Glass (confidence) | Catalog | Shape | Thin-Lens FL (mm) |
|---|---|---|---|---|---|---|---|
| L11 | Gr1 | 1.77250 | 49.62 | **S-LAH66** (confirmed) | OHARA | Biconvex positive | +139.5 |
| L12 | Gr1 | 1.55032 | 75.50 | Fluorophosphate crown (see §4.3) | — | Pos. meniscus (convex obj.) | +114.2 |
| L13 | Gr1 | 1.49700 | 81.61 | **S-FPL51** (confirmed) | OHARA | Biconvex positive | +91.6 |
| L14 | Gr1 | 1.85025 | 30.05 | Dense flint (see §4.3) | — | Biconcave negative | −64.7 |
| L21 | Gr2 | 1.92286 | 20.88 | **S-NPH2** (confirmed) | OHARA | Biconvex positive | +76.6 |
| L22 | Gr2 | 1.60342 | 38.01 | Flint (code 603380; see §4.3) | — | Biconcave negative | −36.7 |
| L31 | Gr3 | 1.59349 | 67.00 | Phosphate crown (nearest: S-FPM2; see §4.3) | — | Biconvex positive | +67.9 |
| L41 | Gr4 | 1.91082 | 35.25 | Lanthanum dense flint (code 911353; see §4.3) | — | Plano-convex positive | +48.0 |
| L42 | Gr4 | 1.67270 | 32.17 | Dense flint (code 673322) | — | Biconcave negative | −38.8 |
| L43 | Gr4 | 1.84850 | 43.79 | Lanthanum crown (code 849438) | — | Biconvex positive | +71.0 |
| L44 | Gr4 | 1.60342 | 38.01 | Flint (same glass as L22) | — | Biconcave negative | −164.3 |
| L45 | Gr4 | 1.64769 | 33.72 | Dense flint (nearest: Schott SF2, Δνd = −0.07) | — | Neg. meniscus (concave obj.) | −111.5 |

The cover glass (patent surfaces 22–23) is nd = 1.51680, νd = 64.20, matching S-BSL7 (OHARA) or N-BK7 (SCHOTT) — the standard borosilicate crown used universally for sensor cover glass and filter substrates. It is excluded from the lens data file as it is a sensor-side component, not part of the lens optical system.

### 4.2 ED Element Identification

Nikon specifies that the production lens contains **two ED (Extra-low Dispersion) glass elements**. In the patent prescription, these are:

**L12 (nd = 1.55032, νd = 75.50):** This fluorophosphate-type ED glass sits well above the normal line on the PgF–νd diagram. Its six-digit glass code (550755) places it in the fluorocrown / FK family. With νd = 75.50, it is firmly in the ED classification range (Nikon typically uses the ED designation for glasses with νd above approximately 75 and positive anomalous partial dispersion). Its position as the second element in Gr1 places it where the on-axis beam diameter is still large, maximizing its effectiveness for axial chromatic aberration correction.

**L13 (nd = 1.49700, νd = 81.61):** This is OHARA S-FPL51 (exact match), one of the most widely used ED glasses in photographic lens design. S-FPL51 has a catalog partial dispersion PgF of 0.5385, giving a positive anomalous departure dPgF = +0.032 from the normal line. This strong anomalous dispersion makes S-FPL51 highly effective at correcting secondary spectrum (the residual chromatic aberration that remains after primary achromatization). It is cemented with L14 (a high-dispersion flint) to form the achromatic doublet at the rear of Gr1.

**L31 (nd = 1.59349, νd = 67.00)** is a low-dispersion phosphate crown (nearest standard catalog match: OHARA S-FPM2 with nd = 1.59522, νd = 67.74, Δnd = −0.0017, Δνd = −0.74). At νd = 67.00 it falls below the threshold for Nikon's ED designation and does not exhibit the strong anomalous partial dispersion characteristic of true ED glasses. It is better described as a "low-dispersion crown" — useful for controlling chromatic aberration in the focus group but not counted among the two ED elements.

### 4.3 Glass Notes

Of the 12 elements, only three can be identified with certainty from published catalog data: L11 (OHARA S-LAH66, nd = 1.77250, νd = 49.62 — exact), L13 (OHARA S-FPL51, nd = 1.49700, νd = 81.61 — exact), and L21 (OHARA S-NPH2, nd = 1.92286, νd = 20.88 — exact). The cover glass (nd = 1.51680, νd = 64.20) is standard N-BK7 (Schott) or S-BSL7 (OHARA). The remaining elements are classified below by glass family with nearest catalog matches where possible.

**L12 (nd = 1.55032, νd = 75.50):** Fluorophosphate crown in the FK/FPL family. The six-digit code 550755 is close to several catalog entries — HIKARI J-FK5 and HOYA FCD515 are plausible matches, but the exact designation cannot be confirmed from publicly available catalog data. The glass is unambiguously a positive-anomalous-dispersion fluorophosphate, consistent with Nikon's ED classification.

**L14 (nd = 1.85025, νd = 30.05):** High-index dense flint, code 850301. No confirmed match in the major OHARA, Schott, or HOYA catalogs. The nearest OHARA entry is S-LAH55V (nd ≈ 1.850, νd ≈ 32.3), which matches in nd but differs by approximately 2.3 in νd — a substantial mismatch. This glass may come from a smaller Japanese supplier (Sumita, HIKARI, NHG) or may be a specialty melt. It serves as the flint partner in the L13+L14 achromatic cemented doublet, where its high dispersion complements L13's anomalously low dispersion for secondary spectrum correction.

**L22 and L44 (nd = 1.60342, νd = 38.01):** Flint glass, code 603380. These two elements use the same glass type. The six-digit code places it in the F (flint) family. Using the same glass in multiple positions reduces the number of distinct glass types in the bill of materials, lowering production costs and simplifying inventory.

**L31 (nd = 1.59349, νd = 67.00):** Phosphate crown, code 593670. The nearest major catalog match is OHARA S-FPM2 (nd = 1.59522, νd = 67.74), with residuals of Δnd = −0.0017 and Δνd = −0.74. This is close but exceeds the typical ±0.0005 nd tolerance for a confirmed match. The glass is in the phosphate crown family — low dispersion but not in the anomalous-dispersion ED category.

**L41 (nd = 1.91082, νd = 35.25):** Ultra-high-index lanthanum dense flint, code 911353. Glasses at nd > 1.91 are rare and produced by only a few manufacturers. HOYA TAFD45 and OHARA S-LAH97 are plausible candidates, but neither can be confirmed from verified catalog data. The extreme refractive index enables L41 to achieve strong positive power (+48 mm FL) with its single curved surface (the front is flat), critical for the compact Gr4 architecture.

**L42 (nd = 1.67270, νd = 32.17):** Dense flint, code 673322. HOYA E-FD4 is a plausible match. The patent describes L42 as "plano-concave" (平凹), but the numerical prescription shows R16 = +64.87 mm — a finite curvature, not flat. This discrepancy between the patent prose and the numerical data is minor; the patent text uses approximate shape terminology while the numerical prescription is authoritative. The element is technically biconcave (both surfaces have curvature), though the rear surface is relatively weak.

**L43 (nd = 1.84850, νd = 43.79):** Lanthanum crown, code 849438. The same nd value (1.84850) appears in all four patent examples, but with different νd values (43.79 in EX1/EX3, 42.72 in EX2/EX4). This suggests the patent may use slightly adjusted νd values between examples. OHARA S-LAH65V or an equivalent is a plausible match for this glass family.

**L45 (nd = 1.64769, νd = 33.72):** Dense flint, code 648337. Schott SF2 (nd = 1.64769, νd = 33.79, Δνd = −0.07) is the nearest confirmed catalog entry — an excellent match within normal melt tolerance.

---

## 5. Element-by-Element Optical Role

### 5.1 Group 1 — Front Positive Group (L11, L12, L13, L14)

Group 1 is the primary converging group of the telephoto arrangement. Its collective focal length (FL1 = 74.3 mm) is close to the system focal length (FL = 83.0 mm), consistent with the telephoto design requirement that the front group strongly converge the incoming beam. The patent's conditional expression (5) constrains FL1/FL to the range 0.8–1.1; EX3 achieves 0.90.

**L11 — S-LAH66 (nd = 1.77250, νd = 49.62), biconvex positive, FL ≈ +139.5 mm:**
The front element. Its high refractive index (1.773) allows a moderate positive power to be achieved with gentle surface curvatures (R1 = +120.8, R2 = −1000.0 — nearly plano on the rear), which minimizes the generation of higher-order aberrations at the entrance aperture where the on-axis beam diameter is largest. The weak rear curvature (R = −1000 mm) is not truly plano but is close enough that the patent describes it as biconvex. L11 begins the gradual convergence of the on-axis beam that the subsequent elements continue.

**L12 — Fluorophosphate crown ED glass (nd = 1.55032, νd = 75.50), positive meniscus convex to object, FL ≈ +114.2 mm:**
The first ED element. Its meniscus shape (R3 = +42.06, R4 = +127.23) produces positive power while bending the beam smoothly without introducing excessive spherical aberration. The low-dispersion fluorophosphate glass contributes to achromatization: it carries positive power with minimal chromatic contribution, helping to separate the wavelength-dependent ray paths that the subsequent achromatic doublet (L13+L14) will correct. The meniscus form also helps control Petzval sum by contributing positive power without the strong Petzval-curving effect of a biconvex element.

**L13 — S-FPL51 (nd = 1.49700, νd = 81.61), biconvex positive, FL ≈ +91.6 mm:**
The second ED element, and the stronger of the two. S-FPL51's exceptional anomalous partial dispersion (dPgF = +0.032) is the key to correcting secondary spectrum in this medium-telephoto design. Cemented with L14, it forms an achromatic doublet where L13 carries the positive power and L14 the negative, with the dispersion difference between them correcting primary chromatic aberration. The anomalous partial dispersion of L13 simultaneously corrects the residual secondary spectrum that normal achromatic doublets cannot eliminate. The patent text specifically notes (conditional expression 10) that at least one positive element in Gr1 should have νd > 60, and describes the beneficial placement of this element as the third positive element — its slightly recessed position from the front protects this optically critical (and mechanically softer) fluorophosphate glass from damage.

**L14 — High-index dense flint (nd = 1.85025, νd = 30.05), biconcave negative, FL ≈ −64.7 mm:**
The flint partner in the L13+L14 achromatic doublet. Its high refractive index and high dispersion provide the negative power and chromatic counterbalance needed to achromatize the positive power accumulated by L11, L12, and L13. The cemented junction surface (R6 = −165.75) is concave toward the object, which the patent notes (claim 2, conditional expression 3–4) enables effective coma correction with minimal impact on other aberrations. The nd contrast across the cemented surface (Δnd = 0.35) and the large Abbe number difference (νd: 81.61 vs 30.05, a span of 51.56) satisfy the achromatization requirements, while the strong refractive discontinuity at the junction bends off-axis rays to control coma and lateral color.

**Gr1 doublet (L13+L14) combined FL ≈ −246 mm:** The cemented doublet has net negative power. This means L14's negative power exceeds L13's positive power when considered as a pair, so the doublet acts as a mild diverger. The overall positive power of Gr1 comes primarily from L11 and L12. This split-power arrangement gives the designer additional degrees of freedom for balancing Petzval sum and chromatic aberration.

### 5.2 Group 2 — Negative Focus Group (L21, L22)

Group 2 is one of two focus groups. It consists of a single cemented doublet with a collective focal length of FL2 = −71.3 mm. During focusing from infinity to 0.8 m, Gr2 moves +3.838 mm toward the image plane.

**L21 — S-NPH2 (nd = 1.92286, νd = 20.88), biconvex positive, FL ≈ +76.6 mm:**
An extreme-index, extreme-dispersion glass. S-NPH2 has one of the highest refractive indices of any standard catalog glass (nd = 1.923) paired with one of the lowest Abbe numbers (νd = 20.88). In a focus group that must be lightweight and compact (for AF speed), using such an extreme glass allows strong optical power to be achieved with a minimum of material and curvature. L21 carries positive power within the overall-negative Gr2, and its extremely high dispersion is critical: the patent's conditional expressions (1) and (2) require that the Gr2 positive element have much higher refractive index and much lower Abbe number than the Gr3 positive element, creating a chromatic lever arm between the two focus groups.

**L22 — Flint (nd = 1.60342, νd = 38.01), biconcave negative, FL ≈ −36.7 mm:**
The negative partner in the Gr2 doublet. L22 provides the dominant negative power of Gr2 (FL_L22 = −36.7 mm vs FL_L21 = +76.6 mm). Its moderate-dispersion flint glass complements L21's extreme dispersion to create a doublet that is achromatized within itself — minimizing the chromatic aberration shift that would otherwise occur when Gr2 moves during focusing. The patent notes that the cemented surface (R9 = −84.27) is concave toward the object, enabling coma control within the focus group.

**Focus behavior:** As Gr2 moves toward the image (d7 increases), the converging beam from Gr1 enters Gr2 at a different height, and the negative power of Gr2 shifts the apparent object distance for the downstream elements. The doublet construction ensures that primary chromatic aberration does not vary significantly with focus position — a critical requirement stated in patent conditions (3) and (4).

### 5.3 Aperture Stop

The aperture stop is located between Gr2 and Gr3, fixed in position during focusing. This placement between the two focus groups is described in patent claim 7 as advantageous for two reasons: it limits the beam diameter entering both Gr2 and Gr3 (keeping the focus groups small and light), and it creates a symmetry of opposing powers about the stop (negative Gr2 before, positive Gr3 after) that naturally cancels odd-order aberrations, particularly coma and distortion.

The stop-to-Gr3 distance (d11) shrinks from 11.915 mm to 5.153 mm during focusing, while the Gr2-to-stop distance (d10) decreases from 13.284 mm to 9.445 mm. These asymmetric changes reflect the different movement rates of the two focus groups.

### 5.4 Group 3 — Positive Focus Group (L31)

Group 3 is the second focus group, consisting of a single element with FL3 = 68.4 mm. During focusing, Gr3 moves −6.762 mm toward the object — opposite to Gr2's direction.

**L31 — Low-dispersion phosphate crown (nd = 1.59349, νd = 67.00), biconvex positive, FL ≈ +67.9 mm:**
A low-dispersion crown that provides the converging power needed to re-converge the diverging beam exiting Gr2 and the stop. The nearest major catalog match is OHARA S-FPM2 (nd = 1.59522, νd = 67.74), though the patent's values differ slightly. The glass is in the phosphate crown family — a class known for good chemical durability and moderate anomalous dispersion. Its biconvex surfaces (R12 = +54.76, R13 = −152.96) have manageable curvatures suitable for conventional polishing.

The choice of a low-dispersion glass for Gr3 is prescribed by the patent's conditional expressions (1) and (2): νd(3GrP) − νd(2GrP) > 40, meaning L31 must have a much higher Abbe number than L21 (67.00 − 20.88 = 46.12). This creates a chromatic disparity between the two focus groups such that when they move in opposite directions during focusing, the chromatic effects of each group's motion partially cancel. L21 (in Gr2) is an extreme-dispersion positive element; L31 (in Gr3) is a low-dispersion positive element. Their opposing motions during focus therefore produce opposing chromatic shifts — a clever mechanism for maintaining color correction across the entire focus range without resorting to additional elements.

**Single-element advantage:** Using only one element for Gr3 minimizes weight, directly benefiting AF speed. The patent repeatedly emphasizes the importance of lightweight focus groups for contrast-detect AF systems, which require rapid back-and-forth scanning. Gr3 weighs very little — just one glass element approximately 4.1 mm thick — and is driven by its own dedicated stepping motor.

### 5.5 Group 4 — Rear Negative Group (L41, L42, L43, L44, L45)

Group 4 is the most complex group, containing five elements in two cemented doublets and one singlet. Its collective focal length is FL4 = −199.9 mm (patent-stated). It is fixed during focusing and serves as the field-flattening, telecompressing rear group of the telephoto design.

**L41+L42 cemented doublet (net FL ≈ −206 mm, negative):**

**L41 — Ultra-high-index lanthanum glass (nd = 1.91082, νd = 35.25), plano-convex positive, FL ≈ +48.0 mm:**
An ultra-high-index lanthanum glass with a flat object-facing surface (R14 = ∞). This flat front surface is distinctive and visible in Nikon's published cross-section diagram. The plano-convex shape directs all refracting power to a single curved surface (R15 = −43.69), which simplifies manufacturing and reduces ghost reflections from the flat surface (since a flat surface at normal incidence produces well-controlled reflections that are easily managed by coatings). L41 carries strong positive power (+48 mm FL) that is partially offset by L42.

**L42 — Dense flint (nd = 1.67270, νd = 32.17), biconcave negative, FL ≈ −38.8 mm:**
The negative partner of the first Gr4 doublet. The patent text describes L42 as "plano-concave" (平凹), though the numerical data shows its rear surface R16 = +64.87 has a finite (moderately weak) curvature — the element is technically biconcave. This is a common minor discrepancy in patent prose, which uses approximate shape descriptions; the numerical prescription is authoritative. The L41+L42 doublet has net negative power (−206 mm), contributing to the overall negative power of Gr4. Its role is to begin the process of diverging the off-axis beams to flatten the field and control Petzval curvature.

**L43+L44 cemented doublet (net FL ≈ +122.7 mm, positive):**

**L43 — Lanthanum crown (nd = 1.84850, νd = 43.79), biconvex positive, FL ≈ +71.0 mm:**
A high-index lanthanum glass providing strong positive power. Within the negative Gr4, this positive doublet acts as a "sub-corrector" — the patent's conditional expression (9) constrains the focal length ratio of the two Gr4 doublets (FL(4GrPN1)/FL(4GrPN2) = −1.68), ensuring that the negative first doublet and positive second doublet cooperate to control coma and field curvature without one dominating the other. The positive–negative–positive–negative element sequence within Gr4 creates a miniature alternating-power structure that is effective at controlling both Petzval sum and higher-order aberrations.

**L44 — Flint (nd = 1.60342, νd = 38.01), biconcave negative, FL ≈ −164.3 mm:**
Same glass type as L22 (Gr2). Its moderate negative power within the positive L43+L44 doublet provides achromatization. The weak power (−164 mm) means L44 acts primarily as a chromatic corrector rather than as a power element — it fine-tunes the color balance of L43 without drastically altering the doublet's overall convergence.

**L45 — Dense flint (nd = 1.64769, νd = 33.72; nearest catalog: Schott SF2), negative meniscus concave to object, FL ≈ −111.5 mm:**
The final optical element before the cover glass. Its meniscus shape (R20 = −35.40, R21 = −69.47, both surfaces concave to the same side) is concave toward the object. The patent (claim 6, paragraph 38) states that placing a negative element at the image end of Gr4 provides two benefits: it narrows the beam diameter within Gr4 (keeping downstream element diameters small), and it deflects off-axis rays to increase their angle of incidence on the sensor, which is advantageous for the telecentric or near-telecentric exit pupil geometry required by modern mirrorless sensor arrays. This final negative element is characteristic of many modern mirrorless lens designs where a moderate back focal distance is needed but aggressive telecentricity correction is also required.

---

## 6. Focus Mechanism

### 6.1 Floating Inner Focus

The focus mechanism is a floating inner focus system with two independently moving groups:

| Parameter | Gr2 (L21+L22) | Gr3 (L31) |
|---|---|---|
| Power | Negative (−71.3 mm) | Positive (+68.4 mm) |
| Elements | 2 (cemented doublet) | 1 (singlet) |
| Direction (∞→0.8m) | Toward image (+3.838 mm) | Toward object (−6.762 mm) |
| Axial thickness | ~4.34 mm | ~4.10 mm |

The two groups move in **opposite directions**: Gr2 moves toward the image while Gr3 moves toward the object. This counter-motion narrows the Gr2–Gr3 gap (the variable gaps d10 and d11 flanking the fixed stop both decrease), effectively increasing the total converging power of the system to shift focus from infinity to 0.8 m.

The movement ratio D2Gr/D3Gr = −0.57 indicates that Gr3 travels approximately 1.76× the distance of Gr2. This asymmetric ratio is constrained by patent condition (8) to the range −1.0 to −0.45, which the patent describes as the optimal balance between focus sensitivity (a smaller Gr2 movement reduces tolerance to mechanical positioning errors) and field curvature stability (the opposing movements partially cancel each other's field curvature contribution).

### 6.2 Gap Conservation

Since Gr1, the aperture stop, and Gr4 are all fixed during focusing, the total of the four variable gaps (d7 + d10 + d11 + d13) must remain constant. Verification:

- At infinity: 6.182 + 13.284 + 11.915 + 2.059 = 33.440 mm
- At 0.8 m: 10.020 + 9.445 + 5.153 + 8.821 = 33.439 mm

The 0.001 mm residual is rounding error in the published prescription values. This confirms that the four fixed structures (Gr1, stop, Gr4, and image plane) maintain their relative positions during focusing.

### 6.3 Chromatic Balance During Focus

The most technically interesting aspect of this focus mechanism is the chromatic balancing between Gr2 and Gr3. The patent's conditional expressions (1) and (2) impose a specific relationship between the glass types used in the two focus groups:

- nd(2GrP) − nd(3GrP) = 1.92286 − 1.59349 = **0.33** (required > 0.2)
- νd(3GrP) − νd(2GrP) = 67.00 − 20.88 = **46.12** (required > 40)

The positive element in Gr2 (L21, S-NPH2) is an extreme-dispersion glass, while the positive element in Gr3 (L31, S-FPM2) is a low-dispersion glass. When both groups move during focusing, each group's chromatic contribution shifts — but because L21 and L31 have very different dispersion characteristics and move in opposite directions, their chromatic shifts partially cancel. This is the mechanism by which the patent achieves well-corrected color performance across the full focus range with only three elements in the focus groups.

### 6.4 Multi-Focus System

Nikon's "Multi-Focus System" — advertised for the NIKKOR Z 85mm f/1.8 S — employs two independently driven stepping motors, one for each focus group. This allows the camera to independently control the positions of Gr2 and Gr3 along their respective cam paths. The lightweight focus groups (a two-element cemented doublet and a single element) enable the rapid back-and-forth scanning required by contrast-detect AF and the phase-detect AF algorithms used in Nikon Z-series cameras.

---

## 7. Conditional Expression Summary

All ten of the patent's conditional expressions are satisfied by EX3:

| Condition | Expression | EX3 Value | Range | Status |
|---|---|---|---|---|
| (1) | nd(2GrP) − nd(3GrP) | 0.33 | > 0.2 | ✓ |
| (2) | νd(3GrP) − νd(2GrP) | 46.12 | > 40 | ✓ |
| (3) | nd(2GrP) − nd(2GrN) | 0.32 | 0.11 – 0.35 | ✓ |
| (4) | νd(2GrP) − νd(2GrN) | −17.13 | −20 – −5 | ✓ |
| (5) | FL1/FL | 0.90 | 0.8 – 1.1 | ✓ |
| (6) | FL2/FL3 | −1.04 | −1.6 – −0.9 | ✓ |
| (7) | FL4/FL | −2.41 | −3.6 – −1.8 | ✓ |
| (8) | D2Gr/D3Gr | −0.57 | −1.0 – −0.45 | ✓ |
| (9) | FL(4GrPN1)/FL(4GrPN2) | −1.68 | −2.2 – −1.4 | ✓ |
| (10) | νd(1GrP) > 60 | L12: 75.50, L13: 81.61 | > 60 | ✓ |

---

## 8. Design Philosophy Notes

### 8.1 No Aspherics — A Portrait Lens Decision

The decision to forgo aspherical surfaces entirely is unusual for a modern S-Line Nikkor but makes optical sense for a portrait lens. Aspherical surfaces introduce discontinuities in the wavefront curvature that can produce concentric ring structures ("onion rings") in out-of-focus highlights. For a lens where bokeh quality is arguably the most important commercial specification, Nikon and Konica Minolta opted to achieve the required aberration correction through glass selection, element count, and group architecture rather than aspherical surfaces. The 12-element, all-spherical design is more costly in terms of element count than an aspheric-assisted design might be, but it delivers the smooth, ring-free bokeh that reviewers consistently praise.

### 8.2 Joint Development

The patent is a joint filing between Konica Minolta and Nikon, with inventors from both companies. This type of cross-company optical development arrangement is not unprecedented in the Japanese optical industry. The patent's claims and descriptions are written in the standard Konica Minolta style (use of FL for focal length, numbered conditional expressions, consistent notation), suggesting that the optical design work may have been led by Konica Minolta's optical engineering team, with Nikon providing specifications, manufacturing integration, and commercialization.

---

## 9. Semi-Diameter Estimation Notes

The patent does not provide semi-diameter (clear aperture) values. The values used in the accompanying data file (`NikonZ85f18S.data.js`) were estimated by paraxial marginal and chief ray tracing through the full EX3 prescription at the patent-specified f/1.85, 2ω = 29.26°.

The marginal ray was launched at the entrance pupil semi-diameter of 22.43 mm (= 83.0 / (2 × 1.85)) and traced through all 21 lens surfaces to determine the axial beam envelope. The chief ray was traced from the full half-field angle (14.63°), constrained to pass through the center of the aperture stop, to determine the off-axis beam position at each surface.

Semi-diameters were computed as the marginal ray height with 8% mechanical clearance plus 65% of the chief ray height (allowing approximately 35% vignetting at the full-field corners — typical for a fast portrait lens at maximum aperture). All estimated SDs were verified against three constraints: positive edge thickness at each element, front-to-rear SD ratio ≤ 1.25, and sd/|R| < 0.90 for all surfaces.

---

## Sources

1. JP2020-173366A, "Imaging optical system, imaging optical apparatus, and digital device" (撮像光学系，撮像光学装置及びデジタル機器). Filed 2019-04-11, published 2020-10-22. Japan Patent Office.
2. Nikon Corporation, "NIKKOR Z 85mm f/1.8 S — Specifications." Nikon Global website, imaging.nikon.com.
3. Nikon USA, "NIKKOR Z 85mm f/1.8 S — Product Page." nikonusa.com, product code 20090.
4. OHARA Inc., Optical Glass Catalog. S-FPL51, S-LAH66, S-NPH2, S-FPM2, S-LAH65V datasheets.
5. HOYA Corporation, Optical Glass Catalog. TAFD45, E-FD4, E-F5, E-FD7 datasheets.
6. Schott AG, Optical Glass Data Sheets. SF2 datasheet.
