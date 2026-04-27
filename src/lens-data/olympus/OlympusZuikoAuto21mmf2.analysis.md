# Olympus OM Zuiko Auto-W 21mm f/2 — Optical Design Analysis

## Patent Source

**US Patent 4,210,388** — "Large-Aperture Wide-Angle Lens System for Photographic Cameras"
Filed March 8, 1978 (priority: JP 52/27700, March 14, 1977). Granted July 1, 1980.
Inventor: Yoshitsugi Ikeda. Assignee: Olympus Optical Company Limited, Tokyo.

This analysis covers the single numerical example given in the patent, which describes the optical design underlying the production Olympus OM Zuiko Auto-W 21mm f/2 lens.

---

## 1. Production Lens Overview

The Olympus OM Zuiko Auto-W 21mm f/2 was introduced circa 1978–1979 as the world's first 21mm-focal-length SLR lens with an f/2 maximum aperture. It was designed for the Olympus OM bayonet mount (46 mm flange-to-film distance) and remained in production until the OM system was discontinued. Key manufacturer specifications:

- **Focal length:** 21 mm
- **Maximum aperture:** f/2
- **Minimum aperture:** f/16
- **Angle of view:** 92°
- **Optical construction:** 11 elements in 9 groups (production)
- **Minimum focus distance:** 0.20 m (7.9 in.)
- **Focus method:** Straight helicoid with floating elements
- **Filter thread:** 55 mm
- **Aperture blades:** 6
- **Weight:** 250–266 g
- **Length:** 49 mm (from mount flange)
- **Aspherical surfaces:** None — entirely spherical design

The production lens uses a floating-element close-focus correction system described in Olympus literature as a "close distance aberration correction mechanism." Olympus also advertised the use of "new type of optical glass," referring to the high-index lanthanum crown and dense flint glasses that appear extensively in the prescription.

---

## 2. Patent vs. Production: Element Count

The patent describes a design of **"eight components of ten lens elements"** — but this count treats the split fourth component (L4a + L4b) as a single element. Counting each physical glass piece individually yields **11 elements in 9 air-separated groups**, which matches the production lens's specification of **11 elements in 9 groups**. The patent and production optical designs are therefore likely identical in element count, and the "discrepancy" is purely a counting convention: the inventor counted the conceptually-divided component 4 as one element rather than two.

The production lens additionally features a floating-element close-focus system described in Olympus literature, but this may be implemented through variable air gaps within the existing 11-element layout rather than requiring additional glass elements. The patent provides only the infinity-focus prescription.

For the data file, L4a and L4b are modeled as separate elements (11 entries in the elements array), consistent with the production lens element count.

---

## 3. Design Architecture

The lens is a **retrofocus (inverted telephoto)** design, necessary for SLR cameras to provide sufficient back focal distance for mirror clearance. The patent organizes the system into three major groups:

**L₁ — Front Diverging Group** (Elements 1, 2, 3): Three meniscus lenses with strong net negative power (f ≈ −15.8 mm at production scale). This group diverges the incoming beam, increasing the back focal distance well beyond the system focal length. The group's combined power is dominated by the two strongly negative menisci (L2 and L3), with L1 providing weak positive power for aberration balancing.

**L₂ — Front Converging Group** (Elements 4a, 4b, 5, 6): Four elements with net positive power (f ≈ +23.9 mm at production scale). This group begins reconverging the diverged beam. Component 4 (L4a + L4b) is the divided element containing the patented flare stop E. The cemented doublet (L5 + L6) provides chromatic correction within the group.

**L₃ — Rear Converging Group** (Elements 7, 8, 9, 10): Four elements with net positive power (f ≈ +52.2 mm at production scale). This group completes the convergence of light toward the focal plane. It contains a cemented achromatic doublet (L7 + L8), a strong positive singlet (L9), and a weak negative field-correcting element (L10).

The aperture stop S is located in the large air gap between the front converging and rear converging groups (d₁₃ = 17.67 mm at patent scale, 3.71 mm at production scale), consistent with the patent's description: "an aperture stop S is arranged in the airspace formed between the front converging lens group L₂ and the rear converging lens group L₃." The stop is placed approximately 40% into this gap from the L6 rear surface, as estimated from Fig. 7.

---

## 4. Aspherical Surfaces

**There are no aspherical surfaces in this design.** All 20 optical surfaces are spherical. This is consistent with mid-to-late 1970s manufacturing technology, when precision aspherical molding was not yet practical for mass-production photographic lenses. The design achieves its aberration correction through the sheer element count (11 elements), judicious glass selection, and the careful placement of the flare stop and aperture stop.

---

## 5. The Flare Stop — The Patent's Central Innovation

The most distinctive feature of this patent is the **flare stop E**, a ring-shaped aperture placed inside the front converging group to control coma flare in off-axis pencils. This is distinct from the main aperture stop S and is not modeled as a separate surface in the data file — the gap is treated as a normal air space.

In a retrofocus wide-angle design, the effective aperture of off-axis (oblique) pencils is often larger than the paraxial aperture because the front diverging group bends marginal off-axis rays inward. This can cause the aperture efficiency to exceed 100% at intermediate image heights, producing excessive lower-rim coma flare that degrades image contrast — particularly at maximum aperture.

The inventor's solution was to identify the point where the paraxial marginal ray l₀ intersects the outermost ray l₂ of the most oblique (marginal field) pencil. A ring stop with radius equal to the distance from the optical axis to this intersection point is placed at that position. This selectively intercepts the excessive lower rays of zonal oblique pencils without significantly reducing the aperture ratio or the marginal-field illumination.

In the patent prescription, this intersection falls within the fourth lens component of the front converging group. Since it would be impractical to place a stop inside a solid glass element, Ikeda divided this component along a flat plane into two elements (L4a and L4b), creating a narrow air gap (d₈ = 3.26 mm at patent scale, 0.685 mm at production scale) in which the flare stop ring is fitted. Both elements use the same glass (nd = 1.61659, vd = 36.6) and have flat mating surfaces (r₈ = r₉ = ∞), so the division introduces no additional optical power and minimal aberration impact.

The patent's aberration curves (Figs. 8A–8C, 10A–10B) demonstrate the effectiveness of this approach: coma at intermediate image heights is significantly reduced, tangential MTF contrast improves markedly in the low-frequency region, and the aperture efficiency remains above 50% across most of the field.

---

## 6. Element-by-Element Analysis

### Prescription Data

The patent normalizes all dimensions to a stated focal length of f = 100. For the data file, all R, d, and sd values are scaled ×0.21 to the production focal length of 21 mm. An independent ABCD-matrix paraxial ray trace yields a computed EFL of 28.49 mm at production scale (135.67 mm at patent scale) — a significant discrepancy from the stated f = 100 discussed in §8.

All focal lengths reported below are thick-lens (ABCD matrix) values at production scale (×0.21). Patent-scale values can be recovered by dividing by 0.21.

| Surface | R (patent) | R (prod.) | d (patent) | d (prod.) | nd | Element | Notes |
|---------|-----------|-----------|-----------|-----------|-----|---------|-------|
| S1 | +205.67 | +43.191 | 18.60 | 3.906 | 1.639 | L1 front | |
| S2 | +529.30 | +111.153 | 0.60 | 0.126 | 1.0 | air | |
| S3 | +101.53 | +21.321 | 6.28 | 1.319 | 1.734 | L2 front | |
| S4 | +52.977 | +11.125 | 23.26 | 4.885 | 1.0 | air | |
| S5 | +227.95 | +47.870 | 5.63 | 1.182 | 1.7725 | L3 front | |
| S6 | +62.233 | +13.069 | 10.70 | 2.247 | 1.0 | air | |
| S7 | +640.47 | +134.499 | 15.86 | 3.331 | 1.61659 | L4a front | |
| S8 | ∞ (flat) | ∞ | 3.26 | 0.685 | 1.0 | air | Flare stop E |
| S9 | ∞ (flat) | ∞ | 23.26 | 4.885 | 1.61659 | L4b front | |
| S10 | −2015.3 | −423.213 | 0.47 | 0.099 | 1.0 | air | |
| S11 | +110.65 | +23.237 | 6.98 | 1.466 | 1.6968 | L5 front | |
| S12 | +68.419 | +14.368 | 36.28 | 7.619 | 1.5934 | L5/L6 junction | Cemented |
| S13 | −170.19 | −35.740 | 17.67 | 3.711 | 1.0 | air | Aperture stop S in this gap |
| S14 | −1046.5 | −219.765 | 17.58 | 3.692 | 1.72 | L7 front | |
| S15 | −88.372 | −18.558 | 6.98 | 1.466 | 1.84666 | L7/L8 junction | Cemented |
| S16 | +212.47 | +44.619 | 10.00 | 2.100 | 1.0 | air | |
| S17 | +232.47 | +48.819 | 13.95 | 2.930 | 1.713 | L9 front | |
| S18 | −88.093 | −18.500 | 0.47 | 0.099 | 1.0 | air | |
| S19 | +459.95 | +96.590 | 13.95 | 2.930 | 1.72 | L10 front | |
| S20 | +199.86 | +41.971 | — | — | 1.0 | air → image | BFD |

### Element Details

**Element 1 (L1) — Positive Meniscus**
Glass: nd = 1.639, vd = 44.9 [639/449] — nearest match: **OHARA LAC14 / Schott BaLF5 / HOYA BAFL3** (lanthanum barium flint crown; Δnd = −0.0003). Thick-lens focal length: f ≈ +108.1 mm. Shape: positive meniscus with convex side toward the object (R₁ = +205.67, R₂ = +529.30). As the first element of the front diverging group, L1 acts as a weak positive collector. Its positive power partially offsets the strong negative power of L2 and L3, moderating the total group divergence for aberration control. The relatively low refractive index and moderate Abbe number place it in the lanthanum crown family — a good choice for managing lateral color in the front group.

**Element 2 (L2) — Negative Meniscus**
Glass: nd = 1.734, vd = 51.5 [734/515] — **OHARA LAC10 / Schott LaK9** (exact match). Thick-lens focal length: f ≈ −33.5 mm. Shape: negative meniscus with concave side toward the image (R₃ = +101.53, R₄ = +52.977). This is the first of two strongly negative menisci that create the retrofocus effect. The high refractive index (1.734) allows strong curvatures at manageable surface slopes. The negative power diverges the beam, extending the back focal distance beyond the system's focal length to provide clearance for the SLR mirror.

**Element 3 (L3) — Negative Meniscus**
Glass: nd = 1.7725, vd = 49.6 [772/496] — **OHARA LAC12 / Schott LaK10** (exact match). Thick-lens focal length: f ≈ −23.6 mm. Shape: negative meniscus with concave side toward the image (R₅ = +227.95, R₆ = +62.233). The strongest negative element in the system. Together with L2, it provides the dominant diverging power of the front group. Using the highest-index glass in the front group (nd = 1.7725) minimizes the curvatures needed for strong negative power, helping control higher-order aberrations. The lanthanum crown glass family (vd ≈ 49.6) provides good color correction properties.

**Elements 4a and 4b (L4a + L4b) — Split Plano-Convex Pair**
Glass: nd = 1.61659, vd = 36.6 [617/366] — **Schott F2 / OHARA TIF1** (exact match). L4a (R₇ = +640.47, R₈ = flat): f ≈ +218.1 mm. L4b (R₉ = flat, R₁₀ = −2015.3): f ≈ +686.4 mm. Originally a single thick positive element, this component was divided along a flat plane to accommodate the flare stop E. Both halves use F2 glass, a traditional dense flint. The flat mating surfaces mean the split introduces no additional refractive power. Each half is plano-convex: L4a has its convex surface facing the object, L4b has its convex surface facing the image. The combined element provides weak positive power that begins the reconvergence of the beam after the front diverging group. The choice of F2 (a flint glass, vd = 36.6) is notable — it contributes to chromatic balance within the front converging group.

**Elements 5 and 6 (L5 + L6) — Cemented Doublet (D1, Positive)**
L5: nd = 1.6968, vd = 55.5 [697/555] — **OHARA LAC7 / Schott LaK8** (exact match). L6: nd = 1.5934, vd = 34.8 [593/348] — **Schott LF7** (nd exact, Δvd = −0.5). Combined thick-lens focal length: f ≈ +26.8 mm. L5 is a negative meniscus (R₁₁ = +110.65, R₁₂ = +68.419; f ≈ −58.0 mm) and L6 is biconvex positive (R₁₂ = +68.419, R₁₃ = −170.19; f ≈ +18.3 mm). The doublet has a non-standard arrangement: the crown element (L5, higher vd) carries negative power while the flint element (L6, lower vd) carries positive power. This "reversed" achromat configuration is employed in retrofocus designs specifically to correct lateral chromatic aberration, which in a standard achromat arrangement would be overcorrected by the strongly negative front group.

**Elements 7 and 8 (L7 + L8) — Cemented Doublet (D2, Negative)**
L7: nd = 1.72, vd = 43.7 [720/437] — **Schott LaF3 / HOYA LAF2** (exact match). L8: nd = 1.84666, vd = 23.9 [847/239] — **Schott SF57** (exact match). Combined thick-lens focal length: f ≈ −34.0 mm. L7 is a positive meniscus (R₁₄ = −1046.5, R₁₅ = −88.372; f ≈ +27.9 mm) and L8 is biconcave negative (R₁₅ = −88.372, R₁₆ = +212.47; f ≈ −15.3 mm). This is the primary achromatic corrector in the rear group. L8 uses SF57, the highest-index (nd = 1.84666) and most dispersive (vd = 23.9) glass in the entire system — a dense flint chosen specifically for its high dispersion, which provides strong chromatic correction. The net negative power of this doublet works in combination with the surrounding positive elements (L9) for overall chromatic balance.

**Element 9 (L9) — Biconvex Positive**
Glass: nd = 1.713, vd = 53.9 [713/539] — **Schott LaK21 / HOYA LAC11** (Δvd = +0.06). Thick-lens focal length: f ≈ +19.2 mm. Shape: biconvex (R₁₇ = +232.47, R₁₈ = −88.093). The strongest positive element in the rear group and the second-strongest in the entire system. It provides the primary converging power that focuses the beam toward the image plane. The high-index lanthanum crown glass minimizes surface curvatures while maintaining strong positive power. Note: patent claim 7 describes this as a "positive meniscus," but the prescription radii indicate a biconvex shape — likely an imprecision in the claim language.

**Element 10 (L10) — Negative Meniscus**
Glass: nd = 1.72, vd = 50.2 [720/502] — **Schott LaK14 / HOYA LAC9** (exact match). Thick-lens focal length: f ≈ −105.5 mm. Shape: negative meniscus with concave side toward the image (R₁₉ = +459.95, R₂₀ = +199.86). The final element serves as a weak negative field corrector. Its contribution to the Petzval sum is small but meaningful for flattening the image field across the 92° field of view. Note: patent claim 7 describes this as a "positive" lens, which contradicts the computed power from the prescription radii. This may indicate a sign error in r₂₀ (the patent might intend −199.86, which would make the element biconvex positive) or simply an imprecision in the claim language.

---

## 7. Glass Selection and Chromatic Strategy

The design makes extensive use of lanthanum-series glasses, which were considered "new" optical materials in the late 1970s. Of the nine distinct glass types used across the eleven elements (L4a and L4b share the same glass), seven are lanthanum crowns or lanthanum flints:

| Glass Family | Elements | nd Range | vd Range | Role |
|-------------|----------|----------|----------|------|
| La Crown (LAC/LaK) | L1, L2, L3, L5, L9, L10 | 1.639–1.7725 | 44.9–55.5 | High-index positive/negative elements |
| La Flint (LAF/LaF) | L7 | 1.72 | 43.7 | Moderate-dispersion positive in rear doublet |
| Dense Flint (SF/FDS) | L8 | 1.84666 | 23.9 | Primary chromatic corrector |
| Flint (F/TIF) | L4a, L4b | 1.61659 | 36.6 | Split element (flare stop host) |
| Light Flint (LF/FF) | L6 | 1.5934 | 34.8 | Positive element in reversed achromat |

The chromatic correction strategy is noteworthy. The front diverging group uses only lanthanum crown glasses with relatively high vd values (44.9–51.5), keeping lateral color manageable despite the strong negative powers. The front converging group pairs these with a "reversed" achromatic doublet (crown negative + flint positive) to correct the lateral color specifically induced by the retrofocus configuration. The rear group uses a more conventional approach — a lanthanum-flint positive paired with a dense-flint negative — for axial chromatic correction.

The Petzval sum, computed surface-by-surface using Σ(n′−n)/(n·n′·R), is +0.000694 at patent scale, corresponding to a Petzval radius of approximately −1,441 mm (−10.6× the computed EFL). At production scale, the Petzval radius scales to approximately −303 mm (−10.6× the 28.49 mm production EFL). This is a well-corrected value for a large-aperture wide-angle design, enabled by the careful distribution of power across many elements and the use of high-index glasses that allow strong curvatures with moderate Petzval contributions.

---

## 8. Paraxial Verification and EFL Discrepancy

An ABCD-matrix paraxial ray trace of the patent prescription yields the following results:

| Parameter | Patent Scale | Production Scale (×0.21) |
|-----------|-------------|-------------------------|
| Computed EFL | 135.67 mm | 28.49 mm |
| Back Focal Distance (BFD) | 218.05 mm | 45.79 mm |
| Retrofit ratio (BFD/EFL) | 1.607 | 1.607 |
| Total optical track | 231.78 mm | 48.67 mm |

The patent states f = 100, but the computed EFL is approximately 135.7 mm — a discrepancy of 35.7%. The ray-trace code was independently verified against known simple lens systems (biconvex and plano-convex) and produces correct results for those cases.

Several possible explanations for this discrepancy were investigated:

1. **Sign error in r₁₂:** Changing the sign of r₁₂ (junction radius of the cemented doublet L5+L6) from +68.419 to −68.419 yields EFL ≈ 99.1 mm — very close to 100 — but reduces the BFD/EFL ratio to 1.259, giving a production-scale BFD of only 26.2 mm. This would be far too short for the OM mount's 46 mm flange distance, making this correction physically implausible.

2. **Decimal-point errors in thicknesses:** No plausible single-digit correction to any d value brings the EFL to 100 while maintaining a physically reasonable BFD.

3. **Element 10 sign error:** Patent claim 7 describes L10 as "positive," but the computed power from the prescription (R₁₉ = +459.95, R₂₀ = +199.86) is negative. If R₂₀ = −199.86 (biconvex), EFL drops to ~52.8 mm, which is too short.

The most likely explanation is that the patent prescription contains one or more typographical errors — not uncommon in patents of this era, where numerical data was manually typeset. Additional evidence of typographical issues includes: (a) the radius r₁₂ is listed as 68.419 in the patent body but as 68.49 in claim 7 — an internal inconsistency within the same document; (b) claim 7 describes element L9 as a "positive meniscus" but the prescribed radii (R₁₇ = +232.47, R₁₈ = −88.093) define a biconvex shape; and (c) claim 7 describes element L10 as "positive" but the prescribed radii yield negative power.

**Scaling rationale for the data file:** Despite the EFL discrepancy, the stated f = 100 scaling (×0.21) produces a BFD of 45.79 mm at production scale — closely matching the 46 mm OM flange distance. Scaling by the computed EFL (×0.1548 for f = 21) would yield a BFD of only 33.75 mm, far too short for mirror clearance. This confirms that the ×0.21 scaling produces physically correct production dimensions, even though the computed EFL at that scale is ~28.5 mm rather than 21 mm.

---

## 9. Focus Mechanism

The patent provides only the infinity-focus prescription and does not describe the focusing mechanism. However, manufacturer literature for the production lens specifically highlights "floating elements" and a "close distance aberration correction mechanism" that enables the remarkably short minimum focus distance of 0.20 m (7.9 inches).

In a floating-element design, two or more element groups move independently during focusing, with their relative spacing changing as a function of focus distance. This corrects aberrations — particularly field curvature, astigmatism, and coma — that would otherwise degrade severely at close conjugates in a wide-angle retrofocus design.

Without the close-focus prescription data, the data file uses a **unit-focus approximation** (only the BFD changes) with the close-focus BFD estimated via Gaussian conjugate shift: BFD_close ≈ 50.52 mm. This is an acknowledged simplification — the actual production lens distributes the focus motion across multiple internal air gaps.

---

## 10. Semi-Diameter Estimation

The patent does not provide semi-diameter values. Semi-diameters were estimated through the following process:

1. **Marginal ray trace** at f/2 using the computed EFL to establish baseline ray heights through the system.
2. **Edge thickness constraint:** For each element, the SD was limited to ensure edge thickness ≥ 0.3 mm (sag of front surface minus sag of rear surface must not exceed the center thickness minus 0.3 mm).
3. **sd/|R| constraint:** All surface SDs limited to sd/|R| ≤ 0.88 (below the 0.90 validator threshold) to prevent excessive rim slopes.
4. **Cross-gap sag intrusion:** Air gap sag intrusion limited to ≤ 88% of the gap width.
5. **Physical constraints:** Front element bounded by the 55 mm production filter thread (theoretical max SD ≈ 25 mm, but edge thickness limits L1 to ~19 mm SD).

The front negative menisci (L2, L3) have steep rear concave surfaces that severely limit the permissible SDs: L2 rear (S4) is limited to sd ≈ 9.5 mm by its 11.1 mm radius, and L3 rear (S6) to sd ≈ 7.2 mm by the cross-gap sag constraint against the relatively narrow gap to L4a (2.25 mm at production scale). These small rear SDs relative to the front SDs (ratio ≈ 1.7 for L2) are physically correct for deep meniscus elements in a wide-angle retrofocus design.

---

## 11. Summary of Key Findings

1. **No aspherical surfaces.** The design is entirely spherical, achieving its performance through 11 elements, careful glass selection, and the flare-stop innovation.

2. **Extensive use of lanthanum glasses.** Seven of the nine distinct glass types are lanthanum crowns or lanthanum flints — the "new optical glass" referenced in Olympus marketing materials.

3. **Novel flare stop (E).** The patent's central contribution is a ring-shaped flare stop inserted between the two halves of a divided positive element, placed at the intersection of the paraxial marginal ray and the outermost off-axis ray. This selectively limits coma flare in off-axis pencils without significantly reducing the f-number or field illumination. The flare stop is not modeled as a separate surface in the data file.

4. **"Reversed" achromat in the front converging group.** The cemented doublet L5+L6 uses a crown-negative/flint-positive arrangement (opposite to the standard achromat) to correct lateral chromatic aberration specific to the retrofocus configuration.

5. **Dense flint SF57 for chromatic correction.** Element 8 (nd = 1.84666, vd = 23.9) provides the strongest chromatic dispersion in the system, essential for balancing the multiple high-index positive elements.

6. **Element count resolved.** The patent's "10 elements" count treats the split component 4 (L4a + L4b) as one element; counting each physical glass piece yields 11 elements in 9 groups, matching the production lens specification exactly.

7. **EFL discrepancy.** The published prescription yields a computed EFL of ~135.7 mm vs. the stated f = 100, likely due to typographical error(s) in the patent text. Scaling by the stated f = 100 (×0.21) produces physically correct BFD for the OM mount; scaling by the computed EFL does not. The data file uses ×0.21 scaling with focalLengthMarketing = 21 mm and focalLengthDesign = 28.49 mm.

8. **Close-focus approximation.** The data file uses unit-focus (BFD-only) approximation since the patent does not provide floating-element close-focus data.
