# Nikon AF-S NIKKOR 105mm f/1.4E ED — Patent Optical Analysis

**Patent:** WO2019/116563 A1 — Example 3 (第3実施例)  
**Japanese national phase:** JPWO2019116563A1  
**Title:** 光学系、光学機器、および光学系の製造方法 (Optical System, Optical Apparatus, and Manufacturing Method of Optical System)  
**Filing date:** 15 December 2017 (PCT/JP2017/045183)  
**Published:** 20 June 2019  
**Applicant:** Nikon Corporation (株式会社ニコン)  
**Inventors:** Masashi Yamashita (山下 雅史), Tomoki Ito (伊藤 智希), Hiroshi Yabumoto, Hiroshi Yamamoto, Tetsushi Miwa, Keisuke Tsubonoya, Ayumu Makita, Takeshi Uehara

---

## 1. Patent–Production Lens Correspondence

This analysis examines Example 3 (Table 3) of patent WO2019/116563 A1 as a candidate match for the production AF-S NIKKOR 105mm f/1.4E ED. The lens was announced by Nikon on 27 July 2016 under the "three-dimensional high fidelity" design philosophy. The patent was filed approximately 17 months after the product launch, which is common practice — manufacturers frequently file continuation patents covering design refinements or related configurations after a lens enters production.

The correspondence between Example 3 and the production lens rests on multiple convergent criteria:

| Parameter | Example 3 | Production Lens | Agreement |
|-----------|-----------|-----------------|-----------|
| Focal length | 102.148 mm | 105 mm (nominal) | Close (2.8% rounding) |
| Maximum aperture | f/1.45 | f/1.4 | Close |
| Full field angle (2ω) | 23.842° | 23°10' (23.167°) | Close |
| Image circle semi-height | 21.63 mm | 21.6 mm (FX format) | ✓ |
| Element count | 14 | 14 | ✓ |
| Group count | 9 (air-spaced units) | 9 | ✓ |
| ED glass elements | 3 (S-FPL51 equivalent) | 3 | ✓ |
| Close focus | β = −0.132 (≈ 1.03 m) | 1.0 m / 0.13× | ✓ |
| Focus mechanism | Internal focus (G2) | IF | ✓ |
| Minimum f-stop | f/16 implied by design | f/16 | ✓ |

The small differences in focal length and f-number between the patent example and the production specification are normal — patents describe design starting points, and production lenses undergo final optimization. The structural match (14E/9G, 3 ED elements, inner-focus doublet, same focusing magnification) is highly specific and leaves little doubt that Example 3 represents a close variant of the production optical formula, if not the exact one. The independent researcher community at DPReview and CameraGossip has also identified Example 3 as the best known patent match for this lens, while noting it may not be the primary design patent.

**Note on paraxial verification:** An independent paraxial marginal ray trace through all 24 surfaces reproduces the patent's stated focal length to within 0.001 mm (computed: 102.149 mm, patent: 102.148 mm), confirming the surface prescription data has been extracted correctly.

---

## 2. Overall Optical Architecture

The optical system LS(3) is a three-group telephoto-type design comprising 14 elements in 9 air-spaced groups:

- **G1 (positive):** 4 elements in 3 groups — the front convergent group, containing the ED glass triplet responsible for primary chromatic correction.
- **G2 (negative):** 2 elements in 1 cemented group — the focusing group, containing the patent's claimed anomalous-partial-dispersion (APD) glass for secondary spectrum correction. This group moves rearward (toward the image) during near-focus operation.
- **G3 (positive):** 8 elements in 5 groups — the rear convergent group, containing the aperture stop, the third ED element, and two ultra-high-index elements (nd ≈ 2.001) for high-order aberration correction.

The aperture stop (S) is located inside G3, between elements L33 and L34, positioned after the L32–L33 cemented doublet and before the third ED element L34. This placement ensures that the stop is well behind the front group, contributing to the telephoto ratio and allowing the large-aperture front elements to collect light efficiently.

The patent states the system specifications as: f = 102.148 mm, F/1.45, 2ω = 23.842°, image height Y = 21.63 mm, total track TL = 150.819 mm, back focal distance BF = 39.632 mm. The telephoto ratio TL/f ≈ 1.48, which is moderately compact for a 105mm f/1.4 design. The BF of approximately 40 mm is shorter than the Nikon F-mount flange distance of 46.5 mm, meaning the rear element of the lens extends approximately 7 mm past the mount flange into the camera body's mirror box. This is entirely normal for fast F-mount primes — the mirror-box cavity provides the necessary physical clearance, and mirror interference is avoided by the lens's telephoto ratio keeping the rear element well forward of the mirror sweep path.

---

## 3. Surface Prescription

The complete surface prescription at infinity focus is reproduced below, organized by element. All linear dimensions are in millimeters. The notation follows the patent convention: positive R indicates the center of curvature lies to the right (image side) of the surface.

### Group G1 — Front Positive Group

**L11 — Positive meniscus, convex to object (Element 1)**

| Surface | R | d | nd | νd | θgF |
|---------|---|---|----|----|-----|
| 1 | 228.14790 | 4.915 | 1.59349 | 67.00 | 0.537 |
| 2 | 6415.62050 | 0.100 | (air) | | |

The front element is a weak positive meniscus with its convex side facing the object. R₂ ≈ 6416 mm is effectively plano (sag < 0.08 mm at the full clear aperture). The thin-lens focal length is approximately +399 mm, making this a very weakly convergent element. Its primary function is to begin gently converging the incoming beam while contributing minimal aberration — the nearly plano rear surface ensures low surface power and thus low Seidel contributions at each interface. The fluorophosphate-type glass (nd = 1.59349, νd = 67.00) sits in the fluorophosphate crown region of the glass map and likely corresponds to an Ohara S-FPM2 or equivalent, selected for its low dispersion and positive anomalous partial dispersion (ΔθgF ≈ +0.006 above the Schott normal line).

**L12 — Biconvex positive, ED glass (Element 2)**

| Surface | R | d | nd | νd | θgF |
|---------|---|---|----|----|-----|
| 3 | 98.03190 | 9.004 | 1.49700 | 81.61 | 0.539 |
| 4 | −860.70550 | 0.100 | (air) | | |

The first ED element (f ≈ +177 mm). The glass is identified with high confidence as **Ohara S-FPL51** (catalog: nd = 1.49700, νd = 81.54), a fluorophosphate crown widely used in high-performance photographic lenses as an ED glass equivalent. S-FPL51 exhibits strong positive anomalous partial dispersion (ΔθgF ≈ +0.033 above the normal line), which is essential for correcting secondary spectrum — the residual longitudinal chromatic aberration that persists even after conventional achromatization. The biconvex form with a strongly curved front surface (R₃ ≈ 98 mm) and weakly curved rear (R₄ ≈ −861 mm) distributes the refractive power to minimize spherical aberration at this surface.

**L13–L14 — Cemented doublet (Elements 3–4)**

| Surface | R | d | nd | νd | θgF | Element |
|---------|---|---|----|----|-----|---------|
| 5 | 70.05610 | 11.648 | 1.49700 | 81.61 | 0.539 | L13 (pos) |
| 6 (junction) | −266.98950 | 3.500 | 1.72047 | 34.71 | 0.583 | L14 (neg) |
| 7 | 168.27370 | D7 (var) | (air) | | | |

The second cemented group in G1 pairs another S-FPL51 ED element (L13, f ≈ +112 mm) with a lanthanum flint negative element (L14, f ≈ −143 mm). This is a classic achromatic doublet configuration — a low-dispersion positive element cemented to a high-dispersion negative element — and it performs the primary chromatic correction for the front group. The L13 element is the thickest single element in the system at 11.648 mm, consistent with the patent's observation that the positive APD/ED lenses require substantial axial thickness (condition 5: DP1 > 0.80 mm) to achieve effective aberration correction.

L14's glass (nd = 1.72047, νd = 34.71, θgF = 0.583) is a lanthanum-containing medium-flint type, likely **Ohara S-LAM2** or an equivalent melt. It sits nearly exactly on the Schott normal line (ΔθgF ≈ −0.002), which is ideal for the flint component of an achromatic doublet — the ED element provides the anomalous dispersion for secondary spectrum correction, while the flint partner provides normal dispersion behavior for first-order achromatization.

### Group G2 — Focusing Group (Negative)

**L21–L22 — Cemented doublet (Elements 5–6)**

| Surface | R | d | nd | νd | θgF | Element |
|---------|---|---|----|----|-----|---------|
| 8 | −156.94440 | 4.000 | 1.65940 | 26.87 | 0.633 | L21 (pos) |
| 9 (junction) | −74.82770 | 2.500 | 1.51680 | 63.88 | 0.536 | L22 (neg) |
| 10 | 48.83690 | D10 (var) | (air) | | | |

This is the most optically significant group in the patent — it contains element L21, the "positive lens satisfying conditions (1)–(3)" that forms the core of the patent's claims. G2 is a cemented doublet with overall negative power (the combined doublet focal length is approximately −58 mm, computed from thick-lens paraxial ray tracing through all three G2 surfaces), acting as a field-flattening diverging group between G1 and G3.

**L21 — the APD glass element** (f ≈ +217 mm as a standalone thin lens). This is a positive meniscus with both surfaces concave toward the object (R₈ = −156.94 mm, R₉ = −74.83 mm; since |R₉| < |R₈|, the element is thicker at center than edge, confirming positive power). Its glass (nd = 1.65940, νd = 26.87, θgF = 0.633) has no exact match in standard commercial catalogs and represents the patent's key glass innovation. With ΔθgF ≈ +0.034 above the Schott normal line, it exhibits strong positive anomalous partial dispersion comparable to ED glasses, but in a completely different region of the glass map — moderate index, very high dispersion (νd ≈ 27). This combination of high dispersion with high anomalous dispersion is unusual and enables secondary spectrum correction through a mechanism distinct from the ED glass approach used in G1.

The patent's conditional expressions for this glass, independently verified by computation:

| Condition | Expression | Computed Value | Limit | Satisfied |
|-----------|-----------|----------------|-------|-----------|
| (1) | ndP1 + 0.01425 × νdP1 | 2.042 | < 2.12 | ✓ |
| (2) | νdP1 | 26.87 | 18.0–35.0 | ✓ |
| (3) | θgFP1 + 0.00316 × νdP1 | 0.7179 | > 0.702 | ✓ |
| (4) | ndP1 + 0.00787 × νdP1 | 1.871 | > 1.83 | ✓ |
| (5) | DP1 (axial thickness) | 4.000 mm | > 0.80 | ✓ |

Condition (1) constrains the nd–νd relationship to avoid excessive Petzval sum (field curvature). Condition (2) bounds the Abbe number to a high-dispersion range suitable for chromatic balancing. Condition (3) is the anomalous dispersion requirement — it ensures the glass deviates substantially above the normal line, enabling secondary spectrum correction. Condition (4) sets a minimum on a different nd–νd combination to ensure the glass has sufficient refractive index for monochromatic aberration control. Condition (5) requires a minimum element thickness for coma and chromatic correction effectiveness.

The patent further lists conditions (6)–(8) as desirable but not mandatory. Notably, L21's glass does **not** satisfy condition (6) (ndP1 < 1.63), since nd = 1.659 > 1.63. This is explicitly expected — condition (6) defines a tighter glass selection criterion that applies to some embodiments but not all.

**L22** (f ≈ −57 mm) is a strongly diverging biconcave element in standard borosilicate crown glass (nd = 1.51680, νd = 63.88, θgF = 0.536), very likely **Ohara S-BSL7** or **Schott N-BK7**. Its role within the cemented doublet is to provide the negative power that makes G2 overall divergent, while its normal-dispersion glass provides the achromatic balance to L21's anomalous dispersion.

### Group G3 — Rear Positive Group

**L31 — Biconvex positive (Element 7)**

| Surface | R | d | nd | νd | θgF |
|---------|---|---|----|----|-----|
| 11 | 59.41150 | 7.084 | 2.00100 | 29.13 | 0.599 |
| 12 | −9603.99850 | 0.100 | (air) | | |

The first element of G3 is a high-power positive element (f ≈ +59 mm) in ultra-high-index glass (nd ≈ 2.001). The near-plano rear surface (R₁₂ ≈ −9604 mm) makes this effectively a plano-convex element. The glass is tentatively identified as **Ohara S-LAH79** or an equivalent niobium/tantalum-containing lanthanum heavy flint (catalog nd ≈ 2.003, νd ≈ 28.3). This ultra-high refractive index serves two purposes: it provides high surface power per unit curvature (reducing the element's required diameter and center thickness for a given focal length), and the high index creates strong dispersion that aids in chromatically balancing the ED elements in G1. The same glass reappears in element L38.

**L32–L33 — Cemented doublet (Elements 8–9)**

| Surface | R | d | nd | νd | θgF | Element |
|---------|---|---|----|----|-----|---------|
| 13 | 101.99880 | 8.889 | 1.69680 | 55.52 | 0.543 | L32 (pos) |
| 14 (junction) | −54.38990 | 1.800 | 1.71736 | 29.57 | 0.604 | L33 (neg) |
| 15 | 28.02300 | 5.843 | (air) | | | |

A cemented doublet positioned immediately before the aperture stop. L32 is a biconvex positive element (f ≈ +51 mm) in lanthanum crown glass, very likely **Ohara S-LAL14** (catalog: nd = 1.69680, νd = 55.53 — an excellent match). L33 is a biconcave negative element (f ≈ −26 mm) in a specialty high-dispersion glass with notably elevated partial dispersion (θgF = 0.604, ΔθgF ≈ +0.010 above the normal line). This glass (nd = 1.71736, νd = 29.57) does not correspond to common catalog types and may be a Nikon-specified or limited-production melt.

The L32–L33 doublet corrects residual axial chromatic aberration and spherical aberration in the converging beam between G2 and the stop. The strong negative power of L33 also contributes to Petzval sum correction (field flattening).

**(Aperture Stop S)**

| Surface | R | d |
|---------|---|---|
| 16 | ∞ (flat) | 1.600 |

The aperture stop is positioned between the L32–L33 doublet and element L34. The 1.600 mm axial spacing from surface 15 to 16 represents the physical distance from L33's rear vertex to the stop diaphragm.

**L34 — Biconvex positive, ED glass (Element 10)**

| Surface | R | d | nd | νd | θgF |
|---------|---|---|----|----|-----|
| 17 | 118.55000 | 5.540 | 1.49700 | 81.61 | 0.539 |
| 18 | −59.97360 | 0.100 | (air) | | |

The third ED element (f ≈ +80 mm), again in **S-FPL51**. Positioned immediately behind the stop, L34 sees principally off-axis bundles at modest heights (the marginal ray height is near its minimum at the stop). Its primary role is correcting lateral (transverse) chromatic aberration and secondary spectrum for off-axis field points — a function complementary to the axial chromatic correction provided by L12 and L13 in G1. The biconvex form with a more strongly curved rear surface (R₁₈ ≈ −60 mm vs. R₁₇ ≈ 119 mm) distributes power rearward.

**L35–L36 — Cemented doublet (Elements 11–12)**

| Surface | R | d | nd | νd | θgF | Element |
|---------|---|---|----|----|-----|---------|
| 19 | −74.13900 | 1.600 | 1.72047 | 34.71 | 0.583 | L35 (neg) |
| 20 (junction) | 23.56120 | 8.119 | 1.76684 | 46.78 | 0.558 | L36 (pos) |
| 21 | −400.50550 | 2.828 | (air) | | | |

This doublet pairs a thin biconcave negative element (L35, same glass as L14: nd = 1.72047, νd = 34.71) with a thick biconvex positive element (L36, f ≈ +29 mm). L36's glass (nd = 1.76684, νd = 46.78, θgF = 0.558) is a lanthanum heavy flint, tentatively **Ohara S-LAH64** or equivalent, sitting slightly below the normal line (ΔθgF ≈ −0.007). This doublet provides strong positive power in the rear group while correcting higher-order spherical aberration and coma in the diverging beam behind the stop. The strongly curved junction surface (R₂₀ = 23.56 mm) generates substantial monochromatic surface power at the cemented interface — the large refractive index step (Δnd = 0.046) provides leverage for correcting zonal spherical aberration, while the moderate difference in V-number between the two glasses (Δνd ≈ 12) keeps the chromatic contribution at the junction manageable.

**L37–L38 — Cemented doublet (Elements 13–14)**

| Surface | R | d | nd | νd | θgF | Element |
|---------|---|---|----|----|-----|---------|
| 22 | −39.02080 | 1.600 | 1.58144 | 40.98 | 0.576 | L37 (neg) |
| 23 (junction) | 124.06960 | 5.332 | 2.00100 | 29.13 | 0.599 | L38 (pos) |
| 24 | −52.63590 | BF = 39.632 | (air) | | | |

The final cemented doublet in the system. L37 is a thin biconcave negative element (f ≈ −51 mm) in a titanium flint glass strongly matched to **Ohara S-TIL26** (catalog: nd = 1.58144, νd = 40.98 — exact match). L38 is the second ultra-high-index element (f ≈ +37 mm), using the same nd ≈ 2.001 glass as L31.

This doublet is the last optical element before the image plane and plays a critical role in final aberration balancing. The ultra-high-index rear component (L38) provides the strong positive power needed to bring the beam to focus while its high dispersion contributes to chromatic balance. The negative component (L37) corrects the residual Petzval curvature and provides a flattening contribution to the field. Together, this doublet handles the final convergence of the off-axis bundles and fine-tunes the residual lateral color, distortion, and astigmatism for the image.

---

## 4. Glass Map Summary

The system employs 10 distinct glass types across its 14 elements. Three elements use the same ED glass (S-FPL51), two elements share the nd ≈ 2.001 ultra-high-index glass, and two share the nd = 1.72047 lanthanum flint. The glass selection strategy is characteristic of Nikon's approach to high-performance fast primes:

| Glass | nd | νd | θgF | ΔθgF | Elements | Role |
|-------|----|----|-----|------|----------|------|
| S-FPL51 (Ohara) | 1.49700 | 81.61 | 0.539 | +0.033 | L12, L13, L34 | ED glass — primary & secondary chromatic correction |
| APD specialty | 1.65940 | 26.87 | 0.633 | +0.034 | L21 | High-dispersion anomalous glass — secondary spectrum via different mechanism |
| S-LAH79 equiv. | 2.00100 | 29.13 | 0.599 | +0.004 | L31, L38 | Ultra-high index for compact power, monochromatic correction |
| S-LAL14 (Ohara) | 1.69680 | 55.52 | 0.543 | −0.007 | L32 | Lanthanum crown, positive power near stop |
| Lanthanum flint | 1.72047 | 34.71 | 0.583 | −0.002 | L14, L35 | Achromatic flint partner for ED doublets |
| S-FPM2 equiv. | 1.59349 | 67.00 | 0.537 | +0.006 | L11 | Fluorophosphate crown, front element |
| S-BSL7 equiv. | 1.51680 | 63.88 | 0.536 | −0.000 | L22 | Standard borosilicate crown |
| Specialty flint | 1.71736 | 29.57 | 0.604 | +0.010 | L33 | High-dispersion with moderate APD |
| LAH-type | 1.76684 | 46.78 | 0.558 | −0.007 | L36 | Lanthanum heavy flint |
| S-TIL26 (Ohara) | 1.58144 | 40.98 | 0.576 | +0.001 | L37 | Light titanium flint |

The ΔθgF column quantifies the deviation from the Schott normal line (θgF = −0.001682 × νd + 0.6438). Values significantly above zero indicate positive anomalous partial dispersion (APD), which is the key property for correcting secondary spectrum. The three S-FPL51 elements and the specialty L21 glass all show ΔθgF > +0.03, confirming they are the principal contributors to secondary spectrum correction.

---

## 5. Focusing Mechanism

The patent specifies internal focusing (IF) via axial translation of G2 alone. During focusing from infinity to close range, G2 moves toward the image side:

| Air gap | Infinity focus | Close focus (β = −0.132) | Change |
|---------|---------------|--------------------------|--------|
| D7 (G1 → G2) | 7.956 mm | 19.956 mm | +12.000 mm |
| D10 (G2 → G3) | 17.029 mm | 5.029 mm | −12.000 mm |

The changes are equal and opposite (sum = 0), confirming that G1 and G3 remain fixed relative to each other and to the image plane. Only G2 translates, which is the defining characteristic of inner-focus (IF) designs. This approach has several practical advantages: the lens does not change physical length during focusing, the front element does not rotate (preserving polarizer orientation), the moved mass is small (only a 2-element cemented doublet), and the reduced moving mass enables faster autofocus response — consistent with Nikon's marketing of this lens's AF performance.

The close-focus magnification β = −0.132 corresponds to approximately 0.13× reproduction ratio. Using the thin-lens conjugate relation, the object distance from the front element is approximately 876 mm, giving a total working distance from the image plane of approximately 1.03 m — consistent with Nikon's specified minimum focus distance of 1.0 m.

G2's negative power (acting as a diverging element within the converging beam from G1) means that moving it rearward increases the effective focal length slightly at close focus, which is a well-known property of inner-focus telephoto designs. The 12 mm focus throw for a 1.0 m minimum focus distance is mechanically efficient and contributes to the lens's reported fast autofocus performance.

---

## 6. Chromatic Correction Strategy

The patent's central claim is the use of a positive lens with specific anomalous partial dispersion properties (conditions 1–3) placed ahead of the aperture stop to achieve superior secondary spectrum correction. The chromatic correction strategy in Example 3 operates on two complementary levels.

**First-order achromatization** is handled by classical crown-flint doublet pairing throughout the system: L13+L14 in G1 (S-FPL51 + lanthanum flint), L21+L22 in G2 (APD glass + borosilicate crown), L32+L33 in G3, L35+L36 in G3, and L37+L38 in G3. Each doublet pairs a lower-dispersion positive element with a higher-dispersion negative element (or vice versa) to bring two wavelengths to a common focus.

**Secondary spectrum correction** — the correction of the residual longitudinal chromatic aberration at a third wavelength after first-order achromatization — is achieved through the use of glasses with anomalous partial dispersion. The three S-FPL51 elements (L12, L13, L34) and the specialty APD glass in L21 all deviate significantly above the normal line (ΔθgF > +0.03). When these glasses are paired with normal-dispersion flint partners, the anomalous dispersion of the positive elements partially cancels the secondary spectrum that a normal-glass doublet would produce.

The innovation of this patent lies specifically in element L21: while S-FPL51 (the ED glass in L12/L13/L34) provides anomalous dispersion in the low-dispersion (high-νd) regime, L21's glass provides comparable anomalous dispersion in the high-dispersion (low-νd) regime. This allows the designer to achieve secondary spectrum correction at a point in the system where a high-dispersion glass is needed for first-order chromatic balance — a combination that conventional ED glasses cannot accomplish, since they invariably have low dispersion. The patent text (paragraph [0017]) states explicitly that condition (3) ensures sufficient anomalous dispersion for secondary spectrum correction beyond first-order achromatization.

---

## 7. Petzval Sum and Field Curvature Strategy

For a fast prime lens at f/1.4, Petzval field curvature is one of the most demanding aberrations to control. An uncorrected single-element lens of this focal length would have a Petzval sum of approximately 1/f = 0.00979 mm⁻¹, corresponding to a Petzval radius of just ~102 mm — an aggressively curved image surface that would render the field periphery hopelessly soft. The optical design of Example 3 reduces the Petzval sum to approximately 0.00155 mm⁻¹, corresponding to a Petzval radius of approximately −644 mm. This represents an 84% reduction from the uncorrected value, producing a substantially flat field that is consistent with the production lens's observed uniformity of sharpness across the FX frame.

The correction is achieved through the interplay of the three groups. G1 (positive) contributes a Petzval sum of +0.00727 mm⁻¹, which is the natural consequence of its positive convergent power. G2 (negative, f ≈ −58 mm) contributes −0.00875 mm⁻¹ — its diverging power produces a Petzval contribution of opposite sign that substantially cancels G1's contribution. G3 (positive) contributes +0.00303 mm⁻¹. The net result is the strongly corrected sum of +0.00155 mm⁻¹. The dominant mechanism is the positive–negative–positive group arrangement, where the negative G2 group acts as a Petzval corrector — a classical approach, but one that requires careful balancing to avoid introducing excessive higher-order aberrations.

Within this framework, the ultra-high-index glass (nd ≈ 2.001) used in elements L31 and L38 plays a specific role. For a positive element of given focal length, the Petzval contribution scales approximately as 1/(n × f). At nd = 2.0, a positive element contributes 25% less Petzval curvature per unit of power compared to a conventional glass at nd = 1.5. This allows L31 and L38 to provide strong convergent power — essential for bringing the widely diverging beam from G2 back to focus — while keeping their Petzval contribution proportionally lower than it would be with standard-index glass. The ultra-high index is not merely for compactness; it is an integral part of the field curvature correction strategy.

The negative elements scattered throughout G3 (L33, L35, L37) further contribute to Petzval correction. Each provides a small negative Petzval term that chips away at the residual curvature. Their distribution across the rear group, rather than concentration at a single point, allows the designer to correct field curvature while simultaneously managing astigmatism — since the Petzval and astigmatic contributions have different dependences on ray height at each surface, distributing the corrections across multiple surfaces at different heights gives more degrees of freedom for independent control.

---

## 8. Sagittal Coma Flare and Three-Dimensional Rendering

The AF-S NIKKOR 105mm f/1.4E ED was developed under Nikon's "three-dimensional high fidelity" (三次元High Fidelity) design concept — the same philosophy behind the AF-S NIKKOR 58mm f/1.4G. As described in NIKKOR – The Thousand and One Nights (Tale 59), this concept prioritizes the correction of sagittal coma flare and the natural rendering of point light sources at the frame edges, rather than maximizing on-axis MTF at the expense of off-axis rendering quality. The practical result is a lens that produces round, undistorted point images across the field even at wide apertures — a property that is immediately visible in night-scene and backlit-highlight photography.

Sagittal coma flare is a higher-order aberration that causes off-axis point sources to develop comet-shaped flare tails oriented radially outward. It is particularly problematic in fast lenses because it scales rapidly with aperture (approximately as the square of the entrance pupil height for the tangential component, and with a strong cubic dependence for the sagittal component). In classical double-Gauss designs, sagittal coma flare is one of the most difficult aberrations to suppress at apertures faster than f/2, and it is the primary reason that many fast 85mm and 105mm lenses produce "busy" or "nervous" bokeh in the field corners.

The optical architecture of Example 3 addresses sagittal coma through several structural features. The post-stop element sequence (L34 through L38) is unusually complex for a prime lens — five elements in three air-spaced groups behind the stop, compared to the two or three rear elements typical of classical telephoto designs. This complexity provides the degrees of freedom needed to correct sagittal coma independently of the other third-order and fifth-order aberrations. In particular, the two cemented doublets (L35–L36 and L37–L38) following the stop allow the designer to control the ray path through materials of different refractive index and dispersion, using the strongly curved cemented surfaces (R₂₀ = 23.56 mm, R₂₃ = 124.07 mm) to introduce compensating higher-order contributions that cancel the sagittal coma generated by the front groups.

The absence of aspherical surfaces is noteworthy in this context. Many competing fast-prime designs use aspherics to correct spherical aberration, freeing the spherical surfaces to contribute to coma correction. Example 3 achieves both corrections with spherical surfaces alone, relying on the 14-element count and the ultra-high-index glass to provide sufficient parametric freedom. The trade-off is weight and complexity — 14 elements in 9 groups at 985 g — but the benefit is an optical system where the aberration correction is inherently rotationally symmetric, with no risk of the asymmetric manufacturing artifacts that aspherical surfaces can occasionally introduce.

---

## 9. Element-by-Element Functional Summary

| Element | f (thin, mm) | Group | Optical Role |
|---------|-------------|-------|--------------|
| L11 | +399 | G1 | Gentle beam convergence; minimal aberration introduction. Low-power front element reduces sensitivity to decentering. |
| L12 | +177 | G1 | Primary positive power with ED glass. Axial chromatic and secondary spectrum correction. |
| L13 | +112 | G1 | Cemented ED positive — provides strong convergence while L14 achromatizes the doublet. |
| L14 | −143 | G1 | Achromatic flint partner to L13. First-order color correction of G1's convergent beam. |
| L21 | +217 | G2 | **Patent innovation.** APD positive meniscus for secondary spectrum correction in the high-dispersion glass regime. Positive power within the overall-negative G2 provides chromatic leverage. |
| L22 | −57 | G2 | Strongly diverging. Provides negative group power; chromatic balance to L21. |
| L31 | +59 | G3 | High-power convergence in ultra-high-index glass. Collects the diverging beam from G2 and begins reconverging it. |
| L32 | +51 | G3 | Positive element of pre-stop doublet. Spherical and chromatic correction. |
| L33 | −26 | G3 | Negative element of pre-stop doublet. Petzval correction and higher-order spherical aberration. |
| L34 | +80 | G3 | Post-stop ED element. Primarily lateral chromatic aberration and secondary spectrum correction for off-axis fields. |
| L35 | −25 | G3 | Thin negative meniscus. Petzval sum correction, field flattening. |
| L36 | +29 | G3 | Thick positive element. Strong positive power for final convergence; higher-order spherical correction. |
| L37 | −51 | G3 | Final negative element. Residual Petzval correction, field flattening, distortion control. |
| L38 | +37 | G3 | Final positive element in ultra-high-index glass. Brings beam to focus; balances residual chromatic and monochromatic aberrations at the image. |

---

## 10. Notes on Production Correspondence

Several features visible in the patent but not explicitly described in Nikon's marketing materials are worth noting:

**No aspherical surfaces.** Unlike many modern fast primes, Example 3 uses no aspherical elements. The aberration correction relies entirely on the glass selection and element-count strategy — 14 elements with carefully chosen glass types provide enough degrees of freedom for monochromatic correction without aspherics. This is consistent with the production AF-S NIKKOR 105mm f/1.4E ED, which Nikon does not list as containing aspherical elements.

**The APD glass is identified as a glass lens**, not a resin composite. Claim 7 of the patent states "the positive lens is a glass lens" (ガラスレンズ), and paragraph [0032] explains this provides superior environmental stability compared to resin materials. This distinguishes the APD element from the UV-curing resin composite aspheres seen in some other Nikon designs.

**Nikon's "3 ED glass elements" count.** Nikon's published specification lists "3 ED glass elements." The patent confirms these are the three S-FPL51 elements (L12, L13, L34). Element L21, despite having strong anomalous dispersion, would not be marketed as "ED" because its dispersion is high (νd = 26.87), whereas ED glass conventionally refers to low-dispersion glasses with anomalous partial dispersion (like fluorite, S-FPL51, or Super ED types with νd > 80). This distinction between ED glass and APD glass — both exhibiting anomalous partial dispersion but in opposite dispersion regimes — is the conceptual core of the patent.

---

## Sources

- WO2019/116563 A1 (WIPO), published 20 June 2019 — full text and prescription data
- JPWO2019116563A1 — Japan national phase publication (uploaded PDF, primary reference for this analysis)
- Nikon Corporation product specification page for AF-S NIKKOR 105mm f/1.4E ED (imaging.nikon.com)
- Nikon Corporation press release, 27 July 2016: "AF-S NIKKOR 105mm f/1.4E ED" (nikon.com/company/news/2016/0727_lens_01.html)
- "NIKKOR — The Thousand and One Nights," Tale 59: AI Nikkor 105mm f/1.8S and AF-S NIKKOR 105mm f/1.4E ED (imaging.nikon.com/imaging/information/story/0059/)
- CameraGossip Nikon lens patent database (cameragossip.github.io/nikon-lens-patents.html)
- Ohara optical glass catalog — S-FPL51, S-LAL14, S-TIL26, S-BSL7 datasheets
- Schott optical glass catalog — normal line coefficient reference (θgF = −0.001682 × νd + 0.6438)
