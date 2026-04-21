# Canon RF 24-105mm f/4 L IS USM — Optical Design Analysis

**Patent:** US 2019/0278068 A1 (Hatada, Canon Kabushiki Kaisha)
**Example:** Numerical Example 2 (Fig. 3)
**Published:** September 12, 2019
**Priority:** JP 2018-042214, filed March 8, 2018

---

## 1. Identification and Confirmation

The patent describes a family of compact zoom lenses with a positive first unit containing a high-dispersion negative front element, a negative second unit, and a multi-unit rear group employing a high-index positive lens (Grp) near the image plane. Example 2 was implemented as the **Canon RF 24-105mm f/4 L IS USM**, one of the four launch lenses for the Canon EOS R system in September 2018.

The identification is confirmed by exact agreement across every published specification:

| Parameter | Patent Example 2 | Canon RF 24-105mm f/4 L IS USM |
|---|---|---|
| Focal length range | 24.72 – 101.84 mm | 24 – 105 mm |
| Maximum aperture | f/4.12 (design) | f/4 (marketed) |
| Element / group count | 18 / 14 | 18 / 14 |
| Aspherical elements | 3 (6 surfaces) | 3 glass-molded aspherics |
| UD elements | 1 (S-FPL51, vd = 81.5) | 1 UD element |
| Close focus distance | Not stated directly | 0.45 m |
| Image circle | 2 × 21.64 = 43.28 mm | Full-frame (43.3 mm) |
| Half-field (wide) | 41.19° (at f = 24.72 mm design) | 42° diagonal (84° at f = 24 mm marketed) |

The paraxial ray trace of the prescription yields EFL values of 24.72, 50.92, and 101.83 mm at the three documented zoom positions, matching the patent to within 0.01%.

---

## 2. Optical Architecture

The zoom lens consists of six lens units in a positive-negative-positive configuration with an extended rear group:

| Unit | Power | Surfaces | f (mm) | Role |
|---|---|---|---|---|
| L11 | Positive | 1 – 5 | +88.25 | Front group (focusing collector) |
| L12 | Negative | 6 – 13 | −18.38 | Variator (primary zoom power) |
| L13 | Positive | 14 – 27* | +24.16 | Relay / compensator (aperture stop, IS) |
| L21 | Negative | 28 – 29 | −40.84 | Focus group |
| L22 | Negative | 30* – 31* | −68.35 | Field flattener / compensator |
| L23 | Positive | 32 – 33 | +72.42 | Rear positive element (Grp) |

The power distribution follows a modified retrofocus layout at the wide end, with L11 and L13 providing positive power while L12 provides the principal variator action. The first lens unit moves forward during zoom from wide to telephoto, increasing the L11–L12 separation from 0.75 mm to 34.38 mm and giving the design its characteristic extending barrel when zoomed to 105 mm.

### 2.1 Zoom Mechanics

All six units move toward the object side during zooming, but at different rates. The inter-unit spacings evolve as follows (infinity focus, millimeters):

| Gap | 24.72 mm | 50.92 mm | 101.84 mm | Trend |
|---|---|---|---|---|
| d5 (L11→L12) | 0.75 | 15.82 | 34.38 | Monotonic increase |
| d13 (L12→L13) | 21.53 | 9.07 | 2.38 | Monotonic decrease |
| d27 (L13→L21) | 1.80 | 3.37 | 1.40 | Non-monotonic (reversal) |
| d29 (L21→L22) | 11.59 | 10.02 | 11.99 | Non-monotonic (reversal) |
| d31 (L22→L23) | 0.80 | 13.48 | 17.24 | Monotonic increase |
| d33 (BFD) | 17.88 | 19.75 | 30.96 | Monotonic increase |

Two gaps — d27 and d29 — exhibit non-monotonic behavior, meaning the cam mechanism driving L21 and L22 reverses direction relative to adjacent groups mid-zoom. This is a natural consequence of the piecewise-linear cam profile and is handled by the renderer's interpolation engine.

The total track length grows from 125.3 mm at 24 mm to 169.3 mm at 102 mm, an increase of 44 mm. The back focal distance increases from 17.9 mm to 31.0 mm, yielding a ratio skt/skw = 1.73, which satisfies the patent's conditional expression (3) and is the mechanism by which Canon controls lateral color across the zoom range.

### 2.2 Focus Mechanism

The patent specifies that **L21** (a single negative meniscus element, L41) moves toward the image side for focusing from infinity to the closest distance. This is an inner-focusing architecture: the focus group sits between G3 and G5, well inside the barrel, so focusing does not change the overall lens length or rotate the filter thread. (The barrel does extend during *zoom*, as all units move forward at different rates, but this is independent of focus action.) Inner focusing is characteristic of modern Canon L-series zooms and is essential for compatibility with the Nano USM actuator.

L21 consists of a single element (S-BAL14 glass, nd = 1.72916), which keeps the focus group mass extremely low — likely under two grams — enabling the rapid, silent focus response that was a key selling point for this lens as Canon's first L-series Nano USM design.

**Note on close-focus data:** The patent does not provide variable-gap tables at close-focus distances. The Canon-specified minimum focus distance of 0.45 m is used in the data file, but all variable-gap pairs are coded as zoom-only (identical infinity/close values) because the close-focus air spacings cannot be derived from the patent alone. Gaps d27 (L13→L21) and d29 (L21→L22) are the focus-affected gaps — they change as L21 translates rearward — but their close-focus values remain unknown.

### 2.3 Image Stabilization

A subunit IS within L13 moves perpendicular to the optical axis for optical image stabilization. The patent text (§0069–0070) states that the IS subunit is within L13 and that "the positive lens Gfp is a lens arranged adjacent to, and on the image side of, the subunit IS." Since Gfp is identified as L37 (the UD glass element; see Section 3.3), the IS subunit must be the air-separated group immediately before L37 in G3. This identifies the IS group as the **L34 + L35** cemented doublet — the pair containing the S-NPH53 ultra-high-index glass (nd = 2.001). Canon's own block diagram on the Camera Museum page marks the IS unit with a distinct indicator, confirming its location between the stop and the UD element. The doublet has a thick-lens focal length of −46.8 mm.

The choice of a negative doublet for IS is deliberate: a weakly powered IS group minimizes the optical aberrations introduced by the decentering motion required for stabilization. The use of the ultra-high-index S-NPH53 in this doublet allows the required optical power to be achieved with shallower surface curvatures, which in turn reduces the sensitivity of off-axis performance to the IS shift.

---

## 3. Element-by-Element Analysis

The 18 elements span 12 distinct glass types. The following table summarizes each element's optical properties and role in the design.

### 3.1 L11 — Front Positive Group (f = +88.25 mm)

**L11 (G1n)** — Negative Meniscus, S-TIH6 (nd = 1.808, vd = 22.8)
R₁ = +266.275, R₂ = +93.368 (cemented to L12). Center thickness 1.80 mm.
Thin-lens f ≈ −178 mm. This is the patent's designated "negative lens G1n," the object-side negative element whose low Abbe number (vd = 22.8) is the key to the design's compactness. By using a high-dispersion material here, Canon increases the refractive power density of L11 while maintaining chromatic correction — but at the cost of increased lateral color at the telephoto end, which must be compensated by the rear Grp element.

**L12 (G2p)** — Plano-Convex, S-BAL14 (nd = 1.729, vd = 54.7)
R₁ = +93.368 (junction), R₂ = ∞ (plano rear). Center thickness 6.52 mm.
Thin-lens f ≈ +128 mm. Cemented to L11 to form a doublet (f_doublet ≈ +456 mm via thick-lens ABCD trace). The cemented junction corrects axial chromatic aberration within L11, and the plano rear surface simplifies manufacture. The very long doublet focal length indicates that L11+L12 function primarily as a chromatic corrector rather than a strong positive contributor — the bulk of L11's positive power comes from G3p.

**L13 (G3p)** — Positive Meniscus, S-BAL14 (nd = 1.729, vd = 54.7)
R₁ = +49.826, R₂ = +126.155. Center thickness 6.97 mm.
Thin-lens f ≈ +113 mm (thick-lens: +108.8 mm). Same glass as G2p, which allows both positive elements to share a glass melt in production. G3p carries most of L11's converging power and sets the marginal ray height entering L12.

### 3.2 L12 — Variator (f = −18.38 mm)

L12 is the high-power negative variator that drives the zoom magnification change. Its four elements span a wide range of glass types.

**L21** — Negative Meniscus, S-NPH2 (nd = 1.954, vd = 32.3)
R₁ = +65.832, R₂ = +15.019. Center thickness 1.25 mm.
Thin-lens f ≈ −20.4 mm. The front element of the variator is a strongly curved meniscus in ultra-dense flint glass. Its high index allows steep curvatures without excessive thickness, and the meniscus form minimizes spherical aberration contribution. This is the single strongest-powered element in the variator.

**L22** — Biconcave, L-BAL35 (nd = 1.583, vd = 59.4) — **Glass-Molded Aspheric #1**
R₁ = −33.476, R₂ = +65.137. Center thickness 1.10 mm. Both surfaces aspherical (K = 0, even-order polynomial through A12/A6 respectively).
Thin-lens f ≈ −37.9 mm. This is the first of three glass-molded aspherical elements. L-BAL35 is a low-Tg barium crown specifically formulated by OHARA for precision glass molding. The aspherical departures are modest — under 1 µm on the front surface and approximately 200 µm on the rear — consistent with the relatively small beam diameter at this position. The aspherization corrects residual spherical aberration and coma introduced by the steep curvatures of L21.

**L23** — Biconvex (symmetric), S-TIH6 (nd = 1.808, vd = 22.8)
R₁ = +40.325, R₂ = −40.325. Center thickness 5.03 mm.
Thin-lens f ≈ +25.0 mm. A perfectly symmetric biconvex positive element in the same high-dispersion flint used for G1n. Its symmetry minimizes odd-order coma contribution, and the high-dispersion glass provides the chromatic counterbalance needed within the variator group. The positive power of L23 partially offsets the strong negative powers of L21 and L22, reducing the overall variator-group sensitivity to manufacturing tolerances.

**L24** — Negative Meniscus, S-LAL18 (nd = 1.804, vd = 46.6)
R₁ = −25.491, R₂ = −63.435. Center thickness 1.00 mm.
Thin-lens f ≈ −53.0 mm. The rear element of L12 is a concave-toward-object meniscus in dense lanthanum crown. It acts as a field-flattening element within the variator, bending the Petzval surface closer to flat before the beam crosses the stop.

### 3.3 L13 — Relay Group (f = +24.16 mm)

L13 is the most complex unit, containing 8 elements across 5 air-separated groups, including the aperture stop, the IS subunit, the Gfp chromatic corrector, and the second glass-molded aspheric. Its strong positive power (+24.16 mm) re-images the exit pupil of L12 toward the focus and rear groups.

**Aperture Stop (STO)** — Flat, d = 0.30 mm.
Located at the very front of L13, consistent with all five patent examples.

**L31** — Plano-Convex, S-LAH55V (nd = 1.911, vd = 35.3)
R₁ = +44.965, R₂ = ∞ (plano rear). Center thickness 2.30 mm.
Thin-lens f ≈ +49.4 mm. A dense lanthanum flint placed immediately after the stop to start converging the beam. Its high index allows the required power with relatively gentle curvature, keeping spherical aberration low at the stop where the marginal ray height is at its minimum.

**L32 + L33** — Cemented Doublet (f = +54.84 mm thick-lens)

L32: Negative meniscus, S-NPH2 (nd = 1.954, vd = 32.3). R₁ = +21.533, R₂ = +13.108 (junction). d = 1.00 mm.
L33: Biconvex (nearly plano-convex), HOYA MC-7 (nd = 1.595, vd = 67.7). R_junction = +13.108, R₂ = −795.231 (nearly plano). d = 6.76 mm.

This is an achromatizing doublet that corrects the axial chromatic aberration introduced by L31. The combination of a thin high-index negative meniscus (L32) cemented to a thick low-dispersion positive element (L33) is a classic telephoto-achromat configuration. The nearly-plano rear surface of L33 simplifies alignment.

**L34 + L35** — Cemented Doublet / IS Group (f = −46.84 mm thick-lens)

L34: Biconcave, S-TIM27 (nd = 1.750, vd = 35.3). R₁ = −152.936, R₂ = +16.038 (junction). d = 0.80 mm.
L35: Positive meniscus, **S-NPH53 (nd = 2.001, vd = 25.5)**. R_junction = +16.038, R₂ = +30.717. d = 2.88 mm.

This is the **image stabilization subunit** — the doublet that shifts perpendicular to the axis for shake correction. The nd = 2.001 glass in L35 is the highest-index material in the design, and one of the highest commercially available optical glasses. Its extreme refractive index serves two purposes: first, it contributes strongly to correcting the Petzval sum (the surface-by-surface Petzval contribution is proportional to (n'−n)/(nn'R), and a high n' at the cemented junction generates a large positive Petzval contribution that counteracts the overall negative Petzval contributions from the negative groups); second, the high index allows the IS doublet's net power to remain modest (−46.8 mm) despite steep junction curvatures, which keeps aberration sensitivity to the IS decentering shift manageable.

**L36 + L37** — Cemented Doublet / Gfp (f = −211.87 mm thick-lens)

L36: Negative meniscus, S-TIH53 (nd = 1.785, vd = 25.7). R₁ = +76.401, R₂ = +19.110 (junction). d = 0.75 mm.
L37: Plano-convex, **S-FPL51 (nd = 1.497, vd = 81.5)** — **Canon UD Glass**. R_junction = +19.110, R₂ = ∞ (plano). d = 3.57 mm.

This doublet contains the design's lone UD (Ultra-low Dispersion) element. The patent designates L37 specifically — not the entire doublet — as the positive lens "Gfp," defined as the element positioned on the image side of the IS subunit and adjacent to it. Its Abbe number of 81.5 satisfies conditional expression (13): 73.00 < vfp < 100.00. The fluorophosphate crown's low dispersion and positive anomalous partial dispersion work in tandem with the high-dispersion S-TIH53 flint of L36 to provide secondary-spectrum correction. The focal length of L37 alone (thin-lens f ≈ +38.5 mm) matches the patent's conditional expression (14) value of ffp/fw = 1.56, confirming ffp ≈ 38.6 mm. The combined thick-lens focal length of the L36+L37 doublet is −211.9 mm — weakly negative — because the strong individual powers (L36 negative, L37 positive) largely cancel.

While the doublet's combined power is nearly neutral, the individual components have steep, opposing curvatures at the cemented junction (R = 19.110 mm), creating a powerful chromatic corrector that operates with minimal net influence on beam convergence. Its role is almost purely achromatizing.

**L38** — Biconvex, L-BAL35 (nd = 1.583, vd = 59.4) — **Glass-Molded Aspheric #2**
R₁ = +24.461, R₂ = −25.212. Center thickness 7.26 mm. Both surfaces aspherical (K = 0, even-order polynomial through A10).
Thin-lens f ≈ +21.3 mm (thick-lens: +22.5 mm). This is the second glass-molded aspheric and the strongest positive element in L13. It sits at the rear of the relay group where the beam is diverging toward G4, and its aspherization corrects higher-order spherical aberration and coma that accumulate through the relay. The aspherical departures are substantial — approximately 190 µm on the front surface and 125 µm on the rear — indicating significant correction burden. The nearly-symmetric biconvex form provides a natural coma-balancing geometry.

### 3.4 L21 — Focus Group (f = −40.84 mm)

**L41** — Negative Meniscus, S-BAL14 (nd = 1.729, vd = 54.7)
R₁ = +121.315, R₂ = +23.846. Center thickness 0.75 mm.
Thin-lens f ≈ −40.7 mm. This single element constitutes the entire focus group. It translates toward the image during close focusing, changing the d27 and d29 air gaps. Its choice of barium crown glass — the same type used in L11's positive elements — keeps the weight extremely low (essential for the Nano USM actuator's speed and silence) and provides a moderate Abbe number that minimizes chromatic focus shift (the change in axial color balance as the focus group translates). The meniscus form (weakly convex front, strongly convex rear, both toward the object) is well suited for inner-focus applications because it introduces minimal change in the off-axis aberration balance as it translates along the axis.

### 3.5 L22 — Rear Compensator (f = −68.35 mm)

**L51** — Negative Meniscus, L-LAM69 (nd = 1.765, vd = 49.1) — **Glass-Molded Aspheric #3**
R₁ = −43.071, R₂ = −248.821. Center thickness 1.50 mm. Both surfaces aspherical (K = 0, even-order polynomial through A12).
Thin-lens f ≈ −68.1 mm.

This is the most aggressively aspherized element in the entire design. The aspherical departures reach **−1.56 mm on the front surface and −1.67 mm on the rear** at the estimated semi-diameters — over 1.5 mm of departure from the base sphere. These are among the largest aspherical departures seen in any Canon interchangeable lens patent, and they are only achievable through precision glass molding (the L-LAM69 glass has a low glass-transition temperature specifically formulated for this process).

The extreme aspherization on L51 serves a critical function: as the beam diameter expands rapidly between L21 and L23 (especially at the telephoto end, where d31 reaches 17.24 mm), L51 provides field curvature and distortion correction that would otherwise require multiple additional spherical elements. The negative meniscus form contributes a negative Petzval component that partially compensates for the strong positive Petzval from L23.

### 3.6 L23 — Rear Positive Element / Grp (f = +72.43 mm)

**L61** — Positive Meniscus, S-LAL18 (nd = 1.804, vd = 46.6)
R₁ = −68.116, R₂ = −32.318. Center thickness 4.50 mm.
Thin-lens f ≈ +76.5 mm (thick-lens: +72.4 mm).

This is the patent's designated "positive lens Grp" — the element in the rearmost lens unit whose high refractive index (ndrp = 1.804, satisfying conditional expression (2): 1.70 < ndrp < 2.20) is central to the design's chromatic correction strategy. Positioned closest to the image plane, L61 operates at a height where the chief ray is tall relative to the marginal ray. This geometry means that the element's chromatic contribution is dominated by lateral color rather than axial color. Canon exploits this by using a dense lanthanum crown (moderate Abbe number of 46.6) to generate controlled lateral color that counteracts the lateral color produced by the high-dispersion G1n element at the telephoto end — without disturbing the axial chromatic balance that was already set by the relay group's achromatic doublets.

The positive meniscus form (concave toward the object) also contributes a positive Petzval component that helps flatten the overall Petzval surface. The computed Petzval sum for the full system is +0.001355 mm⁻¹, corresponding to a Petzval radius of approximately −738 mm — a well-corrected value for a 4.1× zoom lens.

---

## 4. Glass Selection Summary

The design uses 12 distinct glass types across 18 elements. All identifications match published catalog glasses (OHARA and HOYA) to within Δnd < 0.00001 and Δvd < 0.05, well within manufacturing tolerance.

| Glass Code | OHARA ID | nd | vd | Elements | Category |
|---|---|---|---|---|---|
| 1808/228 | S-TIH6 | 1.80810 | 22.8 | L11, L23 | Dense flint |
| 1729/547 | S-BAL14 | 1.72916 | 54.7 | L12, L13, L41 | Barium crown |
| 1954/323 | S-NPH2 | 1.95375 | 32.3 | L21, L32 | Ultra-dense flint |
| 1583/594 | L-BAL35 | 1.58313 | 59.4 | **L22, L38** | Moldable barium crown |
| 1911/353 | S-LAH55V | 1.91082 | 35.3 | L31 | Dense lanthanum flint |
| 1595/677 | HOYA MC-7 | 1.59522 | 67.7 | L33 | Phosphate crown |
| 1750/353 | S-TIM27 | 1.74951 | 35.3 | L34 | Dense flint |
| 2001/255 | S-NPH53 | 2.00069 | 25.5 | **L35** | Ultra-high-index flint |
| 1785/257 | S-TIH53 | 1.78472 | 25.7 | L36 | High-dispersion flint |
| 1497/815 | S-FPL51 | 1.49700 | 81.5 | **L37** | Fluorophosphate (UD) |
| 1764/491 | L-LAM69 | 1.76450 | 49.1 | **L51** | Moldable lanthanum crown |
| 1804/466 | S-LAL18 | 1.80400 | 46.6 | L24, L61 | Dense lanthanum crown |

The three glass-molded aspherical elements use two moldable glasses: L-BAL35 (L22 and L38) and L-LAM69 (L51). Both carry the OHARA "L-" prefix indicating low glass-transition temperature, which is required for the precision glass-molding process that Canon describes as "glass-molded aspheric" in their specifications. Eleven of the twelve glass types match OHARA catalog designations; the twelfth (nd = 1.595, vd = 67.7 in L33) matches HOYA MC-7 exactly, confirming that Canon sources glass from multiple manufacturers. All catalog matches achieve residuals below Δnd = 0.00001 and Δvd = 0.05.

---

## 5. Aspherical Surface Summary

All six aspherical surfaces use K = 0 (no conic term); all aspherization is carried by the even-order polynomial coefficients.

| Surface | Element | R (mm) | Order | Max Departure |
|---|---|---|---|---|
| 8* (front) | L22 | −33.476 | A4–A12 | ~1 µm |
| 9* (rear) | L22 | +65.137 | A4–A6 | ~200 µm |
| 26* (front) | L38 | +24.461 | A4–A10 | ~190 µm |
| 27* (rear) | L38 | −25.212 | A4–A10 | ~125 µm |
| 30* (front) | L51 | −43.071 | A4–A12 | **~1,560 µm** |
| 31* (rear) | L51 | −248.821 | A4–A12 | **~1,670 µm** |

The aspherical departures on L51 (surfaces 30* and 31*) are remarkably large — over 1.5 mm — and dominate the correction of field curvature and distortion across the zoom range. Without these aggressive aspheres, the design would likely require two or three additional spherical elements to achieve comparable image quality.

---

## 6. Patent Conditional Expression Compliance

The patent defines 15 conditional expressions governing the design space. Example 2's values are:

| Expression | Range | Example 2 Value |
|---|---|---|
| (1) vd1n | 15.00 – 23.40 | 22.76 |
| (2) ndrp | 1.70 – 2.20 | 1.80 |
| (3) skt/skw | 1.50 – 2.60 | 1.73 |
| (4) nd1p | 1.60 – 2.00 | 1.73 |
| (5) vd1n/vdrp | 0.40 – 1.00 | 0.49 |
| (6) |f2|/skw | 0.80 – 1.80 | 1.03 |
| (7) f1/skt | 2.30 – 4.70 | 2.85 |
| (8) frp/ft | 0.40 – 1.40 | 0.71 |
| (9) (Fnot×f1)/ft | 3.00 – 5.50 | 3.57 |
| (10) |f2|/fw | 0.50 – 1.00 | 0.74 |
| (11) Lt/skt | 3.80 – 7.60 | 5.47 |
| (12) (R1+R2)/(R1−R2) | 0.00 – 4.00 | 2.81 |
| (13) vfp | 73.00 – 100.00 | 81.54 |
| (14) ffp/fw | 1.40 – 2.00 | 1.56 |
| (15) Lrp/Lw | 0.05 – 0.20 | 0.14 |

All 15 expressions are satisfied, with most values falling within the tighter "preferred" sub-ranges (1a)–(15a).

---

## 7. Design Philosophy and Key Insights

The RF 24-105mm f/4 L IS USM represents Canon's first full redesign of the 24-105 formula for the shorter flange distance of the RF mount (20 mm vs. 44 mm for EF). Several design choices reflect this:

**Compact front group.** The cemented G1n+G2p doublet in L11, using a high-dispersion negative meniscus (vd = 22.8), allows Canon to achieve strong converging power in L11 while maintaining a modest front element diameter (effective diameter 63 mm). The patent notes that without the low Abbe number of G1n, the positive elements would need to be much stronger, increasing both thickness and diameter.

**Lightweight internal focus.** L21 is a single 0.75 mm-thick meniscus in barium crown glass — likely weighing under 2 grams. This minimal mass is what enables the Nano USM motor to achieve the rapid, silent focus transitions that were a key marketing point of the lens.

**Ultra-high-index IS doublet.** The use of S-NPH53 (nd = 2.001) in the IS group is unusual even for L-series designs. The extreme index provides strong Petzval correction within a compact doublet, and the relatively modest doublet power (−47 mm) keeps IS-shift aberration sensitivity low.

**Aggressive rear aspherization.** The 1.5+ mm aspherical departures on L51 are among the largest in any Canon interchangeable lens. This single element replaces what would otherwise be a multi-element field-flattening group, contributing directly to the lens's compact 107.3 mm length — 10.7 mm shorter than the preceding EF 24-105mm f/4L IS II USM.

**UD element placement.** Canon places the sole UD element (L37, S-FPL51) in the Gfp position — adjacent to and on the image side of the IS group. This location, partway through the relay and before the beam expands toward the rear groups, gives the UD glass maximum chromatic leverage with minimum required element diameter.

---

## 8. Production Lens Correspondence

The patent prescription represents a design-stage optical layout. The production Canon RF 24-105mm f/4 L IS USM — marketed from October 2018 at a launch price of 155,000 yen (approximately $1,300 USD) — may differ in minor respects from the prescription, including slight reoptimization of aspherical coefficients, adjusted semi-diameters for manufacturing margin, and the incorporation of proprietary coatings not described in the patent.

Canon applies two distinct coating technologies to this lens. **ASC (Air Sphere Coating)** — Canon's proprietary nano-structured anti-reflective coating, identified on the Canon Camera Museum block diagram — is applied to specific elements where near-vertical-incidence light is the primary source of ghosting and flare. Separately, **Super Spectra Coating** — Canon's broadband multi-layer dielectric AR coating — is applied to other elements for general reflectance reduction across the visible spectrum.

The marketed focal length of "24–105 mm" reflects standard rounding from the design values of 24.72–101.84 mm, and the marketed f/4 aperture is rounded from the design f/4.12. The Canon Camera Museum notes that the lens achieves a barrel length of approximately 107.3 mm — a reduction of approximately 10.7 mm compared to the EF 24-105mm f/4L IS II USM. This barrel length refers to the collapsed (24 mm) position; the lens is an externally-zooming design whose barrel extends as the focal length increases toward 105 mm, consistent with the 44 mm increase in total optical track from wide to telephoto.
