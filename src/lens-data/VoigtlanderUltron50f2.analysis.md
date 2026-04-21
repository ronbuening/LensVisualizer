# Voigtländer Ultron 50mm f/2 — Optical Design Analysis

## US 2,627,204 Example II (Production Embodiment)

**Patent:** US 2,627,204 — "Four-Component Gauss-Type Photographic Objective of High Light-Transmitting Capacity"
**Inventor:** Albrecht Wilhelm Tronnier, Göttingen, Germany
**Assignee:** Voigtländer & Sohn AG, Braunschweig, Germany
**Filed:** December 28, 1950 (Swiss priority: April 29, 1950)
**Granted:** February 3, 1953

---

## 1. Overview and Context

The Voigtländer Ultron 50mm f/2 was one of the finest normal lenses of its era. Designed by Albrecht Wilhelm Tronnier (1902–1982) and introduced around 1950 for the Voigtländer Prominent rangefinder camera, it represented a significant advance in modified double-Gauss design — achieving markedly reduced meridional coma compared to competing lenses while maintaining flat, anastigmatic field coverage.

The design is a **6-element, 5-group, all-spherical** modified Gauss-type, arranged as four structural components (or "units" in Tronnier's terminology) around a central diaphragm. The patent contains two numerical examples: Example I is a slower f/2.3 design with cemented inner units, described in the patent as a "projector objective of a medium-sized image angle" for reproduction purposes; **Example II is the f/2.0 design** with the air-spaced inner pair that is the Ultron's structural signature. All prescription data in the patent is normalized to a focal length of 1.0; the figures are drawn at f = 150 mm. For the production lens, a scale factor of 50× applies to all linear dimensions.

This analysis focuses on Example II exclusively. The correspondence to the production Ultron is established by three convergent criteria: (1) the f/2.0 aperture matches the production specification exactly; (2) the 6-element, 5-group configuration with an air-spaced inner pair matches the manufacturer's published optical formula; and (3) Example II's "useful image field of 55°" encompasses the 46.8° diagonal required by 35mm film format with margin to spare, consistent with a 50mm lens for the Prominent rangefinder camera.

**There are no aspherical surfaces in this design.** All twelve refractive surfaces are spherical. This is entirely expected for a 1950 design — precision aspheric manufacturing for photographic lenses was not commercially viable at this scale until decades later.

---

## 2. Structural Architecture

Tronnier organizes the Ultron as four structural "units" (components), labeled I through IV, around a central diaphragm:

**Unit I — L11 (positive meniscus):** A single uncemented positive meniscus, convex toward the object. This is the front element.

**Unit II — L21 + L22 (positive meniscus + negative meniscus, air-spaced):** Two uncemented elements of opposite power separated by a meniscus-shaped air space. L21 is a positive meniscus and L22 is a negative meniscus, both convex toward the object. This air-spaced pair is a hallmark of the Ultron design — most competing Gauss-types of the era cemented these two elements into a single doublet.

**[Diaphragm]**

**Unit III — L31 + L32 (negative flint + positive crown, cemented):** A cemented doublet immediately behind the stop. L31 is a thin, strongly curved biconcave negative element; L32 is a thick biconvex positive element. The cementation ensures precise centration of the high-power junction surface.

**Unit IV — L41 (positive biconvex):** A single uncemented biconvex element, more strongly curved on the rear face.

The grouping is thus **5 groups** (L11 | L21 | L22 | [stop] | L31–L32 cemented | L41), containing **6 elements** — matching the manufacturer's specification of "6 elements in 5 groups."

---

## 3. Prescription Data — Example II

The following table presents the patent prescription scaled to the production focal length of approximately 50 mm. All radii, thicknesses, and gaps are multiplied by 50.

| Surface | Patent Label | R (mm) | d (mm) | Medium After | Element |
|---------|-------------|--------|--------|-------------|---------|
| 1 | R₁ | +31.607 | 2.998 | n₁ = 1.62139, ν₁ = 60.3 | L11 front |
| 2 | R₂ | +88.006 | 0.200 | air | L11 rear |
| 3 | R₃ | +21.914 | 3.198 | n₂ = 1.65953, ν₂ = 57.0 | L21 front |
| 4 | R₄ | +54.340 | 3.598 | air | L21 rear |
| 5 | R₅ | +48.515 | 2.448 | n₃ = 1.64691, ν₃ = 33.9 | L22 front |
| 6 | R₆ | +13.548 | 4.697 | air (to stop) | L22 rear |
| STO | — | ∞ | 4.747 | air (to L31) | diaphragm |
| 7 | R₇ | −13.222 | 1.099 | n₄ = 1.63652, ν₄ = 35.5 | L31 front |
| 8 | R₈ = R₉ | +38.502 | 4.847 | n₅ = 1.69347, ν₅ = 53.5 | L31/L32 junction |
| 9 | R₁₀ | −18.617 | 0.150 | air | L32 rear |
| 10 | R₁₁ | +188.312 | 3.897 | n₆ = 1.72381, ν₆ = 38.0 | L41 front |
| 11 | R₁₂ | −39.691 | (BFD) | air | L41 rear |

**Back focal distance (BFD):** 34.86 mm (patent: p₀' = 0.6972 at f = 1.0)
**Total optical track (vertex to vertex, L11 front to L41 rear):** 31.88 mm
**Total system length (L11 front to focal plane):** 66.74 mm

### Verification

Independent paraxial ray tracing against the patent prescription yields:

- **Computed EFL:** 50.003 mm (patent: f = 1.0 × 50 = 50.000 mm) — **0.006% error**
- **Computed BFD:** 34.865 mm (patent: 0.6972 × 50 = 34.860 mm) — **0.014% error**

These negligible discrepancies arise from rounding in the patent's tabulated values and confirm accurate transcription.

### Note on a Patent Typographical Error

The patent contains Example II's prescription data in two locations: the Example II table (column 5–6, page 6) and the Claim 4 table (columns 11–12, page 9). These two tables agree on all values except one: the thickness of L21 (d₂). The Example II table gives d₂ = 0.06395, while Claim 4 gives d₂ = 0.08393. Paraxial ray tracing confirms that d₂ = 0.06395 reproduces the patent's stated EFL and BFD to high accuracy (errors < 0.02%), whereas d₂ = 0.08393 produces a 0.3% EFL error and a 7.5% BFD error. The Claim 4 value is therefore a typographical error — likely a transposition of the digits "6" and "8" during typesetting. All data in this analysis uses d₂ = 0.06395 from the Example II table.

---

## 4. Computed Element Focal Lengths

| Element | Focal Length (mm) | Focal Length (at f = 1.0) | Power | Role |
|---------|------------------|--------------------------|-------|------|
| L11 (Unit I) | +77.8 | +1.556 | Positive | Collective front element |
| L21 (Unit IIa) | +53.6 | +1.072 | Positive | Strong positive meniscus |
| L22 (Unit IIb) | −29.9 | −0.598 | Negative | Strong negative meniscus |
| L31 (alone) | −15.3 | −0.307 | Negative | Diverging flint of doublet |
| L32 (alone) | +18.7 | +0.375 | Positive | Converging crown of doublet |
| L41 (Unit IV) | +45.6 | +0.912 | Positive | Collective rear element |
| **Unit II (L21 + L22)** | **−107.6** | **−2.152** | **Negative** | **Diverging air-spaced pair** |
| **Unit III (L31 + L32)** | **−313.5** | **−6.269** | **Weakly negative** | **Diverging cemented doublet** |

These values satisfy the patent's claimed ranges for the four structural units:

| Unit | Patent Range | Computed | Status |
|------|-------------|----------|--------|
| I (f₁) | 1.0F < f₁ < 2.0F | 1.556 | ✓ |
| II (−f₂₃) | 1.5F < −f₂₃ < 3.5F | 2.152 | ✓ |
| III (−f₄₅) | 3.0F < −f₄₅ < 9.0F | 6.269 | ✓ |
| IV (f₆) | 0.5F < f₆ < 1.5F | 0.912 | ✓ |

Both inner units (II and III) are net diverging, as required by the Gauss-type topology: they provide the negative Petzval contribution needed to flatten the field, while the outer units (I and IV) supply the system's positive power.

Note: Unit II is only weakly negative (fl = −107.6 mm, i.e., −2.15× the system focal length), meaning its two elements nearly cancel in power. The residual net divergence is deliberate — it contributes to field flattening without requiring extreme curvatures. Unit III is even weaker (fl = −313.5 mm), functioning primarily as an achromatic corrector with minimal net power contribution.

---

## 5. Glass Analysis

### 5.1 Glass Type Identification

The Ultron uses **six distinct glass types** — an unusually large number for a 6-element design of this era. Most competing double-Gauss lenses used three or four glass types. Tronnier's approach of using the refractive-index distribution itself as the primary design variable for aberration correction demanded this diversity.

The glasses were sourced from Schott AG (Mainz), the primary supplier for German optical manufacturers in 1950. Several of these glass types correspond to formulations that have since been discontinued or reformulated, which accounts for imperfect matches to modern catalog entries. The identifications below represent the closest matches to the known Schott catalog, with caveats noted.

**L11 — nd = 1.62139, νd = 60.3 → Schott SK16 family (dense barium crown)**

Excellent match to Schott SK16 (nd = 1.62041, νd = 60.3). The discrepancy of Δnd = 0.00098 is within normal melt-to-melt variation for glass of this era. SK16 is a workhorse dense barium crown with moderately high refractive index and low dispersion — an ideal choice for a collective front element requiring strong positive power without introducing excessive chromatic aberration.

**L21 — nd = 1.65953, νd = 57.0 → High-index crown (SSK/LaK family, possibly thorium-containing)**

This glass occupies an unusual position on the glass map: high refractive index combined with relatively high Abbe number. No standard modern Schott glass matches both parameters simultaneously. The closest catalog entries (SSK5/LaK11, nd = 1.65844, νd = 50.9) match reasonably in index but are substantially more dispersive. This glass may have been a specialty Schott formulation of the late 1940s that was later discontinued. The high νd = 57.0 combined with nd > 1.65 points to a glass formulated with either lanthanum oxide (La₂O₃) or thorium oxide (ThO₂) — both of which raise the refractive index without proportionally increasing dispersion. Thorium-containing glasses were in active use by European optical manufacturers in 1949–1950, and Schott was producing such formulations before lanthanum glasses became widely available. Whether L21 is a thorium crown, an early lanthanum crown, or a conventional dense barium formulation pushed to its limits cannot be determined from the patent data alone.

**L22 — nd = 1.64691, νd = 33.9 → Schott SF2 (dense flint)**

Excellent match to Schott SF2 (nd = 1.64769, νd = 33.85), with Δnd = 0.00078 and Δνd = 0.05. SF2 is a classic dense lead-silicate flint glass, and this is among the most confidently identified glasses in the prescription.

**L31 — nd = 1.63652, νd = 35.5 → Flint or barium flint (F/BaF family)**

This glass falls between the standard F-series (F1: nd = 1.62588, νd = 35.7) and the denser BaSF types. The relatively high index for its Abbe number suggests a barium-containing flint. The closest standard match is Schott F1, but the index discrepancy (Δnd = 0.011) is large enough that this may be a now-discontinued specialty glass or a BaSF variant.

**L32 — nd = 1.69347, νd = 53.5 → High-index crown (LaK family or thorium crown)**

Reasonably close to Schott LaK9 (nd = 1.69100, νd = 54.7), with Δnd = 0.0025 and Δνd = 1.2. The high refractive index combined with crown-type dispersion is characteristic of glasses formulated with lanthanum oxide or thorium oxide. The Leitz Summicron of 1953 would later use LaK9 specifically — Tronnier may have had access to an early version of this or a similar glass. As with L21, the exact formulation (lanthanum, thorium, or barium-based) cannot be determined from the patent data.

**L41 — nd = 1.72381, νd = 38.0 → High-index flint (LaF family, thorium flint, or specialty glass)**

This is the most difficult glass to match to modern catalogs. With nd > 1.72 and νd = 38, it sits in a sparsely populated region of the glass map — too high in index for standard SF glasses at this Abbe number, and too dispersive for LaK types. It is most likely an early lanthanum flint (LaF family), a thorium-containing flint, or a high-index barium flint that has since been discontinued. The combination of high index and moderate dispersion is precisely what the patent's refractive-index conditions demand for this position (see Section 6).

### 5.2 Glass Map Position Summary

The six glasses span a broad region of the glass map:

- **Crowns (low dispersion):** L11 (SK), L21 (SSK/LaK-type), L32 (LaK-type) — all with νd > 53
- **Flints (high dispersion):** L22 (SF), L31 (F/BaF), L41 (LaF-type) — all with νd < 39

The progressive increase in refractive index from the diaphragm outward on the image side (n₄ = 1.637 → n₅ = 1.693 → n₆ = 1.724) is a central feature of the design, discussed in detail in Section 6.

### 5.3 Anomalous Partial Dispersion

The patent does not address partial dispersion or secondary spectrum explicitly, which is consistent with the era. None of these glasses would be classified as having anomalous partial dispersion in the modern sense (dPgF deviation from the normal line). The Ultron's chromatic correction is conventional achromatic — C and F lines brought together — rather than apochromatic. This was typical and entirely adequate for the photographic films of the 1950s, which had relatively low resolving power compared to modern digital sensors.

---

## 6. Tronnier's Refractive-Index Conditions

The central innovation of US 2,627,204 is not a novel lens topology — it is a specific set of **refractive-index distribution rules** that Tronnier discovered produce simultaneous correction of meridional coma and anastigmatic field flatness.

### 6.1 The Outer Curvature Sum Condition

The outer radii of the two inner units (R₃ on Unit II, R₁₀ on Unit III) must sum to a positive value:

> R₃ + R₁₀ = +0.43828 + (−0.37233) = **+0.06595** > 0 ✓

Scaled to 50 mm: R₃ + R₁₀ = +21.914 + (−18.617) = +3.30 mm. This asymmetry in the outer curvatures of the two inner units — with the front unit's outer radius being the larger — is essential for balancing sagittal and tangential field curvatures.

### 6.2 The Progressive Index Increase

On the image side of the diaphragm, the refractive indices must increase progressively from the stop outward, with each step exceeding 0.0185:

| Step | Glasses | Difference | Required | Status |
|------|---------|-----------|----------|--------|
| n₅ − n₄ | IIIb − IIIa | 1.69347 − 1.63652 = **0.05695** | > 0.0185 | ✓ |
| n₆ − n₅ | IV − IIIb | 1.72381 − 1.69347 = **0.03034** | > 0.0185 | ✓ |

### 6.3 The Index Bracket Around IIIa

The diverging element IIIa (L31), immediately following the diaphragm, must have a lower refractive index than both of its neighbors — the diverging element IIb (L22) preceding the diaphragm and the converging element IIIb (L32) following it:

- n₃ = 1.64691 > n₄ = 1.63652 ✓ (IIb higher than IIIa)
- n₅ = 1.69347 > n₄ = 1.63652 ✓ (IIIb higher than IIIa)

This creates an "index valley" at the stop position. The diverging element L31 sits at the system's lowest refractive index on the image side, flanked on both sides by higher-index glass.

### 6.4 The Total Index Span

The total refractive-index difference from the most effective diverging surface (RIII, adjacent to the diaphragm) to the most remote converging surface (RIV) must exceed 0.0370:

> n₆ − n₄ = 1.72381 − 1.63652 = **0.08729** > 0.0370 ✓

This is well above the threshold — more than twice the required minimum.

### 6.5 Physical Interpretation

These conditions work together to achieve a specific optical result. The "index valley" at the stop means that the diverging element immediately following the diaphragm (L31, with the system's lowest image-side refractive index) is flanked by higher-index glasses on both sides. The strong concave surface R₇ of L31 operates at a glass–air boundary where the index step (1.0 → 1.637) generates powerful negative refraction; the cemented junction R₈/R₉ then operates across a crown–flint index step (1.637 → 1.693) that, combined with the large Abbe-number difference, provides both aberration correction and achromatism. The progressive index increase from L31 through L32 to L41 ensures that each successive positive-power surface can generate its required contribution with a reduced ray bending angle, suppressing higher-order aberration residuals.

Tronnier demonstrated the improvement quantitatively via the patent's aberration curves. The pear-shaped meridional coma disc for Example II at a field angle of 17°1′30″ has a height of 0.124 mm (at f = 100 mm), compared to 0.295 mm for the best prior-art Gauss-type at 19° — a reduction factor of 2.38×. The corresponding coma intensity (proportional to the square of disc height) is reduced to **17.7%** of the prior art value. Example I achieves even more dramatic improvement (3.7% of prior art coma intensity), but at the cost of a slower f/2.3 aperture.

A caveat: the prior-art comparison is made at a somewhat larger field angle (19°) than Example II (17°1′30″). Since meridional coma increases with field angle, the prior-art performance at 17° would be somewhat better than the 0.295 mm figure shown. The true improvement at identical field angles is therefore slightly less dramatic than the 2.38× ratio suggests — though still substantial.

---

## 7. Element-by-Element Optical Role

### L11 — Front Positive Meniscus (Unit I)

| Property | Value |
|----------|-------|
| Shape | Positive meniscus, convex to object |
| Glass | SK16 type (nd = 1.62139, νd = 60.3) — dense barium crown |
| Focal length | +77.8 mm |
| Radii | R₁ = +31.6 mm (front), R₂ = +88.0 mm (rear) |
| Center thickness | 3.0 mm |

L11 serves as the **collective front element**, gathering incoming light and providing modest positive power. Its meniscus shape (strongly convex front, weakly convex rear) minimizes spherical aberration contribution at this position — the gentle rear curvature avoids introducing large angles of incidence for marginal rays. The moderate refractive index (1.62) and low dispersion (ν = 60.3) keep chromatic contributions small.

In the Gauss-type topology, Unit I is one of two "outer" units providing the system's net positive power.

### L21 — Inner Positive Meniscus (Unit IIa)

| Property | Value |
|----------|-------|
| Shape | Positive meniscus, convex to object |
| Glass | High-index crown (nd = 1.65953, νd = 57.0) — possibly lanthanum or thorium |
| Focal length | +53.6 mm |
| Radii | R₃ = +21.9 mm (front), R₄ = +54.3 mm (rear) |
| Center thickness | 3.2 mm |

L21 is the **strongest positive element in the front half** (f = +53.6 mm). Its front surface R₃ carries the most effective positive curvature on the object side of the diaphragm — this is one of the "dioptrically most effective converging surfaces" described in the patent claims.

The choice of a high-index, low-dispersion glass here is critical: the steep front curvature (R₃ = 21.9 mm) produces a large ray bending angle, and any chromatic contribution is amplified. The high refractive index reduces the required curvature for a given power, while the high Abbe number limits the wavelength-dependent variation.

With nd = 1.66 at νd = 57, this glass exceeds what standard barium crown compositions could readily achieve, and its position on the glass map strongly suggests a formulation incorporating either lanthanum oxide or thorium oxide. This represents a deliberate choice to push the design beyond the limits of conventional glass families.

### L22 — Inner Negative Meniscus (Unit IIb)

| Property | Value |
|----------|-------|
| Shape | Negative meniscus, convex to object |
| Glass | SF2 type (nd = 1.64691, νd = 33.9) — dense flint |
| Focal length | −29.9 mm |
| Radii | R₅ = +48.5 mm (front), R₆ = +13.5 mm (rear) |
| Center thickness | 2.4 mm |

L22 is the **strongest negative element in the front half** and is one of the most optically significant elements in the system. Its rear surface R₆ (radius 13.5 mm) is the second most steeply curved surface in the entire lens (after L31's front surface R₇ at 13.2 mm) and carries the most effective diverging power on the object side of the diaphragm.

The air space between L21 and L22 (3.6 mm) is the defining structural feature of the Ultron design. Most double-Gauss lenses of the era cemented L21 and L22 into a single doublet, which is mechanically simpler but constrains the designer's ability to independently control higher-order aberrations. By separating them, Tronnier gained an additional design variable — the meniscus-shaped air space — that allows finer correction of oblique spherical aberration and astigmatism.

The choice of a dense flint (SF2 type) for L22 is classical: the high dispersion provides the negative chromatic contribution needed to balance L21's positive contribution, while the moderately high refractive index (1.647) maintains the progressive index relationship on which the patent's correction scheme depends.

### Diaphragm (Aperture Stop)

The diaphragm sits in the wide air space between L22 and L31, positioned almost exactly at the midpoint: 4.70 mm from L22's rear surface and 4.75 mm from L31's front surface. This near-symmetric placement is characteristic of Gauss-type designs and ensures that the off-axis aberration contributions from the front and rear halves approximately cancel.

### L31 — Rear Diverging Flint (Unit IIIa, cemented to L32)

| Property | Value |
|----------|-------|
| Shape | Biconcave, front surface more strongly curved |
| Glass | F/BaF type (nd = 1.63652, νd = 35.5) — barium flint |
| Focal length | −15.3 mm (alone); −313.5 mm as doublet with L32 |
| Radii | R₇ = −13.2 mm (front), R₈ = +38.5 mm (rear/junction) |
| Center thickness | 1.1 mm |

L31 is the **thinnest and most strongly curved element in the system**. Its front surface R₇ (radius −13.2 mm) is the most effective diverging surface on the image side of the diaphragm — the surface identified in the patent claims as carrying the critical negative power.

Despite being strongly negative in isolation (f = −15.3 mm), L31 is cemented to the much thicker positive element L32, and the doublet as a whole is only weakly negative (f = −313.5 mm). The vast majority of L31's diverging power is thus compensated by L32 — but the chromatic residual of the pair (L31 being a flint, L32 being a crown of very different dispersion) provides the achromatic correction for the rear half of the system.

The patent's refractive-index conditions require L31 to have the lowest refractive index on the image side of the stop. At n₄ = 1.637, it is lower than both its neighbor L32 (n₅ = 1.693) and the front-side element L22 (n₃ = 1.647). This "index valley" at the stop is the key to Tronnier's coma-correction mechanism.

### L32 — Rear Converging Crown (Unit IIIb, cemented to L31)

| Property | Value |
|----------|-------|
| Shape | Biconvex, rear surface more strongly curved |
| Glass | High-index crown, LaK9-type (nd = 1.69347, νd = 53.5) — possibly lanthanum or thorium |
| Focal length | +18.7 mm (alone) |
| Radii | R₈ = R₉ = +38.5 mm (junction), R₁₀ = −18.6 mm (rear) |
| Center thickness | 4.8 mm |

L32 is the **thickest element in the system** and carries the most positive power of any single element (f = +18.7 mm). Its rear surface R₁₀ (|R| = 18.6 mm) is the third most steeply curved surface in the lens, after R₇ and R₆. Together with L41, L32 provides the converging power needed to form the image.

The use of a high-index crown (nd = 1.693, νd = 53.5) here is particularly noteworthy. The high refractive index accomplishes two things simultaneously: it satisfies Tronnier's progressive-index condition (n₅ > n₄ by 0.057), and it reduces the curvature needed at R₁₀ for the required power, thereby limiting higher-order spherical aberration. A glass of this specification — whether lanthanum, thorium, or an advanced barium formulation — would have been among the most capable and expensive optical materials available in 1950.

The cemented junction R₈ = R₉ = +38.5 mm is a relatively gentle curve — the large radius means the index step at this surface (Δn = 1.69347 − 1.63652 = 0.057) produces only modest refraction. The primary role of this junction is chromatic: the large dispersion difference between L31 (ν = 35.5) and L32 (ν = 53.5) generates the achromatism for the rear half.

### L41 — Rear Positive Biconvex (Unit IV)

| Property | Value |
|----------|-------|
| Shape | Biconvex, rear surface much more strongly curved |
| Glass | High-index flint (nd = 1.72381, νd = 38.0) — LaF-type or thorium flint |
| Focal length | +45.6 mm |
| Radii | R₁₁ = +188.3 mm (front), R₁₂ = −39.7 mm (rear) |
| Center thickness | 3.9 mm |

L41 is the **rear collective element** — the counterpart to L11 on the object side. Its shape is markedly asymmetric: the nearly flat front surface (R₁₁ = 188 mm) contrasts with the strongly curved rear surface (R₁₂ = −39.7 mm), which is the primary refracting surface delivering image-side convergence.

The glass choice here is unusual and deliberate. At nd = 1.724 and νd = 38.0, L41 uses the **highest refractive index in the entire system** — a glass from the lanthanum flint or thorium flint family (the exact composition being indeterminate from patent data). The patent's progressive-index condition demands that this outermost image-side element have the highest index, and Tronnier pushed this to an extreme. The moderately low Abbe number (38.0) is atypical for a collective element — most designers would prefer a less dispersive glass here to minimize chromatic error. Tronnier accepted this chromatic penalty because the high refractive index was essential to his coma-correction scheme, and the residual chromatic contribution could be balanced by the L31–L32 cemented doublet.

This is a prime example of how Tronnier's design philosophy differed from conventional practice: he treated the refractive-index distribution as the primary free variable and accepted secondary compromises in chromatic correction to achieve his primary goal of flat-field, low-coma performance.

---

## 8. Petzval Sum and Field Flatness

The computed Petzval sum is **0.181** (at f = 1.0), corresponding to a Petzval radius of **−276 mm** at f = 50 mm, or a Petzval ratio of Rₚ/f = −5.53. This is a moderately negative Petzval surface (curving toward the lens) — typical for double-Gauss designs of this era, which rely on a balance between the Petzval curvature and an opposing astigmatic contribution to achieve a flat best-focus surface.

The Petzval sum is nonzero (perfect flatness would require Σ(φᵢ/nᵢ) = 0), which means the design relies on residual astigmatism to flatten the effective field — a standard technique in Gauss-type designs. The patent's claimed "useful image field of 55°" (full angle) corresponds to an image circle of approximately 52 mm diameter at f = 50 mm, comfortably exceeding the 43.3 mm diagonal of 35mm film. This margin indicates that the correction holds well beyond the format corners.

---

## 9. Chromatic Correction

Using the thin-lens approximation for longitudinal chromatic aberration (LoCA), the individual element contributions (φ/ν) sum to approximately −0.035 at f = 1.0. This is a coarse estimate — the thin-lens model ignores the effects of ray heights at each surface, thick-lens contributions, and the stop-shift terms that redistribute chromatic contributions in a multi-element system. The actual design's chromatic correction is substantially better than this single number suggests, as the stopped-down aberration curves in the patent confirm. Nonetheless, this is a conventional achromatic design — it corrects primary (C–F) chromatic aberration but makes no attempt at apochromatic (secondary spectrum) correction.

The chromatic correction is distributed between two "achromatic pairs":

- **Front pair (L21 crown + L22 flint):** The positive L21 (ν = 57.0) and negative L22 (ν = 33.9) form the primary achromatic correction for the front half. Their Abbe-number ratio (57.0 / 33.9 = 1.68) is typical for achromatic doublets.

- **Rear pair (L31 flint + L32 crown):** The negative L31 (ν = 35.5) and positive L32 (ν = 53.5) form the achromatizing pair for the rear half. Their Abbe-number ratio (53.5 / 35.5 = 1.51) is somewhat lower than the front pair, indicating slightly less aggressive chromatic correction in the rear — a compromise driven by Tronnier's prioritization of the refractive-index distribution.

L11 and L41, the outer collective elements, operate essentially as single-glass contributors to chromatism — they are not individually achromatized. Their chromatic contributions are absorbed into the overall system balance.

---

## 10. Focusing Mechanism

The Voigtländer Prominent camera employed **unit focusing**: the entire lens assembly moves forward along the optical axis to focus at closer distances, driven by the camera body's helicoid mechanism. The lens itself contains no internal focusing mechanism.

At the production focal length of 50 mm, the approximate focus extension (thin-lens approximation) for a 1-meter object distance is:

> Extension ≈ f² / (u − f) = 50² / (1000 − 50) ≈ 2.63 mm

The Prominent's minimum focus distance was approximately 1 meter (some sources report 0.9 m), requiring a helicoid extension of roughly 2.6–2.9 mm.

Because focusing is unit-type (the entire optical system translates as a rigid body), there are **no variable air gaps** in the prescription — all spacings remain constant regardless of focus distance. The only quantity that changes is the back focal distance from the rear element to the film plane.

Unit focusing is the simplest focus mechanism but introduces field curvature changes at close distances because the ratio of conjugates shifts. For the moderate close-focus ratio of the Prominent (approximately 1:20 magnification at 1 m), the degradation is negligible. This became a more significant concern in later, closer-focusing double-Gauss designs, which eventually adopted floating-element and inner-focus architectures to maintain correction at short distances.

---

## 11. The Ultron's Innovation in Historical Context

The Ultron patent is one of a pair of companion filings made by Tronnier on December 28, 1950. The other, US 2,627,205 ("Corrected Photographic Objective of High Light-Transmitting Capacity"), establishes the broader class of modified Gauss-type designs with the outer-curvature-sum and progressive-index conditions. US 2,627,204 (this patent) adds the refinement of the refractive-index bracket around the post-diaphragm diverging element IIIa, which produces the additional coma reduction.

Tronnier's key insight — that the refractive-index distribution could be formalized as a set of quantitative design rules for controlling off-axis aberrations — was genuinely novel. Prior double-Gauss designers (including Tronnier himself in his original Schneider Xenon of 1925, DE 439,556) selected glasses through a more intuitive balancing of chromatic and monochromatic requirements, with curvature optimization carrying most of the burden for coma and astigmatism control. Tronnier's contribution was to identify specific, patent-enforceable numerical conditions on the index progression — each step > 0.0185, the total span > 0.0370, the index bracket around IIIa — that reliably produce the combined correction. This shifted the index distribution from an implicit consequence of glass availability to an explicit, quantitative design parameter.

The Ultron's most distinctive structural feature — the air-spaced inner pair L21–L22 (Unit IIa–IIb), where competing designs used a cemented doublet — is directly related to this philosophy. The air spacing allowed Tronnier to choose L21 and L22 glasses independently, rather than being constrained by the cementing requirement (which demands that both elements share a common radius at the junction surface, and that the two glasses have compatible coefficients of thermal expansion to prevent delamination). This freedom was essential for satisfying his refractive-index conditions.

The result was a lens that, by 1950 standards, offered remarkably well-corrected off-axis performance. The patent's quantitative comparison — coma reduction to 17.7% of the prior-art level for Example II, and to 3.7% for Example I — represents a meaningful leap in imaging quality for fast normal lenses.

The Ultron's structural innovation proved influential. The air-spaced inner pair, which Tronnier had actually first explored for Schneider around 1937, was widely adopted through the 1950s and 1960s. The Asahi Pentax Super Takumar 55mm f/1.8 (1957) and many subsequent Japanese double-Gauss designs incorporated the same separation of the front inner elements, a topology that became the dominant architecture for fast normal lenses in the SLR era.

---

## 12. Summary of Key Findings

1. **No aspherical surfaces.** The design is entirely spherical — all twelve refracting surfaces have constant radius of curvature.

2. **Six distinct glass types.** The design uses six different glasses: one confidently identified dense barium crown (L11, SK16 type), one dense flint (L22, SF2 type), and four high-index specialty glasses (L21, L31, L32, L41) that do not cleanly match any modern catalog entry. Three of these (L21, L32, L41) have refractive-index and Abbe-number combinations characteristic of lanthanum- or thorium-containing formulations, placing them at the frontier of glass technology for 1950. The exact compositions cannot be determined from the patent data.

3. **Unit focusing.** The entire lens assembly moves as a rigid body; there are no variable air gaps or internal focusing groups. Focusing was performed by the Prominent camera's body-mounted helicoid.

4. **Refractive-index distribution is the primary design variable.** Tronnier's innovation was not a new lens topology but a specific set of refractive-index rules — the progressive increase, the index bracket around IIIa, and the outer-curvature sum — that together achieve simultaneous correction of meridional coma and anastigmatic field flatness.

5. **The air-spaced inner pair (L21–L22) is the Ultron's structural signature.** By separating these elements rather than cementing them, Tronnier gained the freedom to select glasses independently — essential for satisfying his index conditions — and introduced an additional design variable (the air-gap shape) for higher-order aberration control.

---

## Sources

- US Patent 2,627,204: "Four-Component Gauss-Type Photographic Objective of High Light-Transmitting Capacity," A. W. Tronnier, filed Dec. 28, 1950, granted Feb. 3, 1953.
- US Patent 2,627,205: "Corrected Photographic Objective of High Light-Transmitting Capacity," A. W. Tronnier (companion filing, same date).
- German Patent DE 439,556: A. W. Tronnier, Schneider-Kreuznach, 1925 (original Xenon design).
- Zöllner, H., *Foto-Kino-Technik*, No. 3/1949, Fig. 2(c) — the prior-art Gauss-type objective against which the patent's coma curves are compared.
- Schott AG optical glass catalog data (historical and current entries for SK16, SF2, LaK9, and related glass families).
- Kingslake, R. & Johnson, R. B., *Lens Design Fundamentals* (2nd ed.) — double-Gauss design theory.
- Smith, W. J., *Modern Optical Engineering* — Gauss-type aberration correction principles.
