# Leica Summicron-M 50mm f/2 (Version IV/V) — Patent Analysis

**Patent:** US 4,123,144 — "Four-Member Gauss Objective"
**Inventors:** Walter Mandler, Garry Edwards, Erich Wagner (Ernst Leitz Canada Ltd., Midland, Ontario)
**Filed:** May 16, 1977 (DE priority May 18, 1976, DE 2621981)
**Granted:** October 31, 1978
**Leica computation number:** C368 (design circa 1974)
**Production embodiment:** Example 9 (FIG. 2 configuration)
**Production era:** Summicron-R 50mm f/2 II (R-mount, 1976–2009); Summicron-M 50mm f/2 (M-mount, 1979–present)

---

## 1. Overview

The Summicron-M 50mm f/2, designed at Leitz Canada under the direction of Walter Mandler, is one of the most celebrated and longest-lived lens designs in photographic history. Its optical formula — six elements in four groups, all spherical — has been in continuous production since 1976 and remains current in the Leica M-mount lineup. The lens is internally designated C368 and was first realized as the Summicron-R 50mm f/2 II for Leica's R-mount SLR system in 1976, then adapted for the M-mount rangefinder in 1979. The M-mount Version IV (1979–1994, order no. 11819) and Version V (1994–present, order no. 11826) differ only in barrel design and coatings; the optical cell is identical.

The patent presents nine worked examples, all sharing the same basic Gauss-type topology but differing in glass selection. Example 9, the final and most refined embodiment, corresponds to the production lens. It follows the FIG. 2 configuration, distinguished by a plano-convex sixth element (flat surface facing the object). This gives the design three flat optical surfaces in total (the two cemented bonds and the L41 object-facing surface), in addition to the flat surfaces implicit in the plano-convex and plano-concave element forms — a remarkable feature that was central to Mandler's manufacturing-cost strategy.

The design achieves an aperture ratio of 1:2, a field angle of ±22.5° (45° total, covering the 24×36mm format), and a back focal distance of approximately 29.4 mm at f = 50 mm — well-suited to the M-mount's 27.8 mm flange distance. The patent prescription is given at f = 100 mm; all production dimensions are scaled by a factor of ≈0.50.

---

## 2. Aspherical Surfaces

**There are no aspherical surfaces in this design.** Every optical surface is either spherical or flat (infinite radius). The patent makes no mention of aspherical coefficients, conic constants, or polynomial departures anywhere in the text or prescription tables.

This is a defining characteristic of the Summicron-M 50/2: Mandler achieved its exceptional correction status through glass selection and the exploitation of symmetry, rather than through aspherical surfaces or floating-element focusing mechanisms. The absence of aspherics was also central to the patent's stated goal of minimizing production costs — aspherical surface fabrication in the late 1970s was prohibitively expensive for volume production.

---

## 3. Optical Prescription (Example 9, f = 100 mm)

| Surface | Radius (r) | Spacing (a) | Lens | n_d | v_d | Element Shape |
|---------|-----------|-------------|------|-------|-------|---------------|
| 1 | 59.94 | 9.57 | L11 | 1.79227 | 47.15 | Positive meniscus, front |
| 2 | 167.31 | 0.38 | — | 1.0 | — | L11 rear → air |
| 3 | 40.30 | 14.35 | L21 | 1.67133 | 41.64 | Plano-convex, front |
| 4 | ∞ | 2.87 | L22 | 1.73430 | 28.19 | Cemented bond (flat) |
| 5 | 25.67 | 10.81 | — | 1.0 | — | L22 rear → air |
| 6 | (diaphragm) | 13.39 | — | 1.0 | — | Aperture stop |
| 7 | −27.69 | 1.91 | L31 | 1.63003 | 35.45 | Plano-concave, front |
| 8 | ∞ | 7.65 | L32 | 1.72055 | 47.69 | Cemented bond (flat) |
| 9 | −40.30 | 0.38 | — | 1.0 | — | L32 rear → air |
| 10 | ∞ | 8.61 | L41 | 1.72055 | 47.69 | Plano-convex, front (flat) |
| 11 | −59.94 | s' | — | 1.0 | — | L41 rear → air |

**Back focal length:** s' = 58.88 mm (at f = 100)

### Computed verification (paraxial ray trace)

- **EFL (computed):** 100.03 mm — consistent with patent's stated f = 100 ✓
- **BFD (computed):** 58.91 mm — consistent with patent's stated s' = 58.88 ✓
- **Total track (vertex-to-vertex):** 69.92 mm; overall length (to image): 128.83 mm

The vertex-to-vertex total track is only 70% of the focal length, resulting in a physically compact optical cell. However, the overall optical length — from first vertex to the image plane — is 128.83 mm, or approximately 1.29× the effective focal length. By the standard definition (overall length / EFL), this is not a telephoto design; rather, the rear principal plane H' lies approximately 20.5 mm ahead of the last vertex (at production scale), which shortens the back focal distance to roughly 59% of the EFL. This large H'-to-vertex offset is what permits the relatively compact BFD of ≈29.4 mm at f = 50 mm — sufficient for the M-mount's 27.8 mm flange distance — despite the design not being formally telephoto.

---

## 4. Group and Element Analysis

### 4.1 Group G1 — Front Positive Meniscus (L11)

**Element:** L11 (surfaces r₁, r₂)
**Shape:** Positive meniscus, concave toward the diaphragm
**Glass:** n_d = 1.79227, v_d = 47.15 (lanthanum-containing dense crown)
**Thick-lens focal length:** +113.4 mm (at f = 100); +56.7 mm at production scale

L11 is the front collector element. Its meniscus form — convex toward the object, concave toward the diaphragm — is characteristic of the outer elements in a Gauss-type design. The high refractive index (nearly 1.80) provides strong refracting power while keeping the surface curvatures moderate, which reduces both spherical aberration and higher-order monochromatic aberrations. The moderate Abbe number (47.15) places this glass in the lanthanum crown family, providing adequate chromatic correction without requiring extreme dispersion compensation elsewhere.

In the patent's symmetry scheme, r₁ = +59.94 is paired with r₁₁ = −59.94 on L41, forming one of the two matched-radius pairs that reduce tooling costs.

**Glass identification:** The n_d/v_d pair (1.792/47.2) does not precisely match any standard Schott catalog glass. The nearest candidates are Schott TaF4 (1.788/47.4) and LaFN21 (1.788/47.5), both showing residuals of approximately Δn_d ≈ −0.004. This suggests either a proprietary Leitz melt, a special-order variant from a glass manufacturer, or a production glass whose catalog designation has since been discontinued. This was common practice at Leitz Canada, where Mandler had access to custom melt compositions optimized for specific designs.

### 4.2 Group G2 — Front Cemented Doublet (L21 + L22)

**Elements:** L21 (surfaces r₃, r₄) cemented to L22 (surfaces r₄, r₅)
**Bond surface:** r₄ = ∞ (flat, planar cement joint)
**Component shape:** Meniscus, concave toward the diaphragm
**Doublet focal length:** −141.5 mm (weakly negative); −70.8 mm at production scale

#### L21 — Plano-Convex Positive

**Shape:** Convex front (r₃ = +40.30), flat rear (r₄ = ∞)
**Glass:** n_d = 1.67133, v_d = 41.64
**Element focal length:** +60.0 mm (at f = 100); +30.0 mm at production scale

L21 is the positive element of the front doublet. Its strong convex front surface (r₃ = 40.30) provides the primary converging power in this group. The flat rear surface simultaneously serves as the cemented bond face and eliminates one curved surface from fabrication. The glass has moderate index and dispersion, placing it in the barium flint or dense barium crown range. The nearest Schott catalog match is BaSF6 (1.668/41.9), with a modest residual (Δn_d ≈ −0.003, Δv_d ≈ +0.3).

In the symmetry scheme, r₃ = +40.30 is paired with r₉ = −40.30 on L32.

#### L22 — Plano-Concave Negative

**Shape:** Flat front (r₄ = ∞, the bond surface), concave rear (r₅ = +25.67; center of curvature to the right, so the surface is concave toward the diaphragm)
**Glass:** n_d = 1.73430, v_d = 28.19 (dense flint)
**Element focal length:** −35.0 mm (at f = 100); −17.5 mm at production scale

L22 is the negative flint element of the front doublet. Its high dispersion (v_d = 28.19) provides the chromatic correction needed to achromatize the front group. The refractive index step at the cemented bond — Δn = n₃ − n₂ = 1.73430 − 1.67133 = +0.063 — satisfies the patent's condition 0.05 ≤ n₃ − n₂ ≤ 0.20.

The flat bond surface itself has zero optical power (since φ = Δn/R = 0 when R = ∞), so the doublet's net refracting power comes entirely from the two curved surfaces, r₃ and r₅. However, the index step at the bond is not optically inert: converging rays passing from L21 glass (n = 1.671) into L22 glass (n = 1.734) are refracted toward the normal at the flat interface, changing their convergence angle. This alters the wavefront curvature and affects the aberration contributions of the downstream surface r₅. The deliberate choice of index contrast is thus a subtle but real correction lever, distinct from surface power.

The nearest Schott catalog matches for L22 are SF3 (1.740/28.3) and SF10 (1.728/28.4), with residuals of Δn_d ≈ ±0.006.

The overall doublet power is weakly negative (f ≈ −141.5 mm), consistent with the patent's description that "each of the doublet components has either a low positive power of refraction or a negative power of refraction."

### 4.3 Aperture Stop

The diaphragm is located in the air space between Groups G2 and G3 — surface r₆ in the patent's notation, with 10.81 mm of clearance behind the front doublet and 13.39 mm before the rear doublet. The total distance from the first surface to the stop is 37.98 mm; from the stop to the last surface, 31.94 mm. This slight asymmetry in stop placement (closer to the front) helps balance the residual odd-order aberrations that the lens's near-symmetry leaves uncorrected.

The production lens uses an 8-blade diaphragm in most examples, though both 8- and 10-blade variants have appeared across the production run. The Summicron-R II uses a 6-blade diaphragm. All versions are adjustable from f/2 to f/16.

### 4.4 Group G3 — Rear Cemented Doublet (L31 + L32)

**Elements:** L31 (surfaces r₇, r₈) cemented to L32 (surfaces r₈, r₉)
**Bond surface:** r₈ = ∞ (flat, planar cement joint)
**Component shape:** Meniscus, concave toward the diaphragm
**Doublet focal length:** −386.4 mm (very weakly negative); −193.2 mm at production scale

#### L31 — Plano-Concave Negative

**Shape:** Concave front (r₇ = −27.69; center of curvature to the left, so the surface is concave toward the diaphragm), flat rear (r₈ = ∞)
**Glass:** n_d = 1.63003, v_d = 35.45
**Element focal length:** −44.0 mm (at f = 100); −22.0 mm at production scale

L31 is the negative element of the rear doublet, positioned immediately behind the diaphragm. Its concave front surface faces the stop, creating the classic Gauss "air lens" between the inner concave surfaces of the two doublets (r₅ and r₇). This strongly diverging air space is the primary corrector for spherical aberration and coma in the Gauss design. The close spacing of r₅ and r₇ — with only the 10.81 + 13.39 = 24.20 mm diaphragm gap between them — and their similar but deliberately non-identical radii (25.67 vs. 27.69) is where the core Gauss correction mechanism operates.

The glass has moderate index and intermediate dispersion. The nearest Schott catalog match is F2 (1.620/36.4), but the residual in refractive index is relatively large (Δn_d ≈ 0.010), suggesting a non-standard melt.

#### L32 — Plano-Convex Positive

**Shape:** Flat front (r₈ = ∞, the bond surface), convex rear (r₉ = −40.30; center of curvature to the left, so the surface is convex toward the image)
**Glass:** n_d = 1.72055, v_d = 47.69 (lanthanum crown)
**Element focal length:** +55.9 mm (at f = 100); +27.9 mm at production scale

L32 is the positive element of the rear doublet. The refractive index step at the cemented bond — Δn = n₅ − n₄ = 1.72055 − 1.63003 = +0.091 — satisfies the patent's condition 0.05 ≤ n₅ − n₄ ≤ 0.15. As with the front doublet bond, the flat surface has zero power, but the index step refracts converging rays passing from L31 glass into L32 glass, modifying wavefront curvature and the downstream aberration balance.

The glass is identical to that used in L41 (n_d = 1.72055, v_d = 47.69). The nearest Schott catalog match is LaF10 (1.720/46.4) for refractive index, or LaF3 (1.717/48.0) for overall proximity. The exact match is uncertain.

### 4.5 Group G4 — Rear Positive Element (L41)

**Element:** L41 (surfaces r₁₀, r₁₁)
**Shape:** Plano-convex, flat surface facing the object
**Glass:** n_d = 1.72055, v_d = 47.69 (same glass as L32)
**Thick-lens focal length:** +83.2 mm (at f = 100); +41.6 mm at production scale

L41 is the final collecting element. Its plano-convex form — flat front (r₁₀ = ∞), convex rear (r₁₁ = −59.94) — is the distinguishing feature of the FIG. 2 configuration. The flat object-facing surface satisfies the patent's preferred condition that r₁₀ "is greater than six times the focal length" (infinity being obviously greater than 600 mm). This third flat optical surface maximizes the cost advantages described in the patent: fewer diamond-tool setups, simpler alignment in Leitz's precision mounting system (referenced as German Offenlegungsschrift 2,364,621), and reduced fabrication time.

The use of the same glass type for L32 and L41 is another cost-reduction measure — it reduces the number of distinct glass types from six to five. Matching the rear pair's dispersion also improves lateral color correction through approximate material symmetry about the stop.

In the symmetry scheme, r₁₁ = −59.94 is paired with r₁ = +59.94 on L11.

---

## 5. Symmetry and Manufacturing Philosophy

The patent's central thesis is that a high-performance Gauss objective can be designed with enough symmetry and flat surfaces to drastically reduce manufacturing costs without sacrificing optical correction. Example 9 achieves this through:

**Matched-radius pairs (symmetric about the diaphragm):**

1. |r₁| = |r₁₁| = 59.94 mm — outer surfaces of L11 and L41
2. |r₃| = |r₉| = 40.30 mm — L21 front and L32 rear
3. r₄ = r₈ = ∞ — cemented bond surfaces (trivially matched)

**Flat optical surfaces (three):**

1. r₄ = ∞ — front doublet bond
2. r₈ = ∞ — rear doublet bond
3. r₁₀ = ∞ — L41 object-facing surface

The only radii that lack a symmetric partner are r₂ = +167.31 (L11 rear), r₅ = +25.67 (L22 rear), and r₇ = −27.69 (L31 front). Note that r₅ and r₇ are close but deliberately not identical (25.67 vs. 27.69), providing the asymmetry needed to correct odd-order aberrations (coma, distortion, lateral color) that pure symmetry cannot address.

This arrangement means the entire lens can be fabricated with only **five distinct curved radii** — r₁ (= |r₁₁|), r₂, r₃ (= |r₉|), r₅, and r₇ — plus flat surfaces that share common tooling. For a six-element lens, this is an exceptionally low number of unique tool setups.

---

## 6. Patent Conditional Expressions — Verification

The patent specifies several relationships between glass properties that must be satisfied. All are verified computationally for Example 9:

| Condition | Required Range | Computed Value | Status |
|-----------|---------------|---------------|--------|
| v₁ : v₆ | 0.58 – 1.0 | 0.989 | ✓ |
| v₂ : v₅ | 0.8 – 0.9 | 0.873 | ✓ |
| v₃ : v₄ | 0.74 – 0.8 | 0.795 | ✓ |
| n₃ − n₂ | 0.05 – 0.20 | 0.063 | ✓ |
| n₅ − n₄ | 0.05 – 0.15 | 0.091 | ✓ |
| r₁₀ / f | > 6 | ∞ | ✓ |

The near-unity ratio v₁ : v₆ = 0.989 in Example 9 reflects the choice to use nearly identical dispersion values for the outer elements (47.15 vs. 47.69), which enhances lateral color symmetry. The v₂ : v₅ ratio of 0.873 and v₃ : v₄ ratio of 0.795 are both near the center of their allowed ranges, suggesting Example 9 represents a well-balanced compromise within the design space.

---

## 7. Petzval Sum and Field Curvature

The Petzval sum is computed surface-by-surface using Σ (n' − n) / (R · n' · n). Flat surfaces (R = ∞) contribute zero to the sum.

| Surface | R | Contribution |
|---------|------|-------------|
| 1 | +59.94 | +0.00737 |
| 2 | +167.31 | −0.00264 |
| 3 | +40.30 | +0.00997 |
| 5 | +25.67 | −0.01649 |
| 7 | −27.69 | −0.01396 |
| 9 | −40.30 | +0.01039 |
| 11 | −59.94 | +0.00699 |

**Petzval sum:** 0.00163 mm⁻¹
**Petzval radius:** 615 mm ≈ 6.15 × EFL

The Petzval sum is positive and small, indicating mild inward (undercorrected) field curvature that is partially compensated by astigmatism. A Petzval radius of roughly six times the focal length is typical for well-corrected standard lenses and produces the characteristic gentle field curvature that many photographers describe as the "Leica look" — center sharpness with a smooth roll-off toward the corners at wide apertures, resolving to near-uniform sharpness by f/4.

---

## 8. Chromatic Correction

The design uses a classical achromatic strategy: high-dispersion flint elements (L22 and L31, v_d ≈ 28–35) are paired with lower-dispersion positive elements within each cemented doublet. The approximate symmetry about the stop provides the primary lateral color correction.

However, the achromatic correction is conventional — not apochromatic. Erwin Puts, the pre-eminent independent analyst of Leica optics, noted that Mandler's designs exhibited under-correction in the blue portion of the spectrum. During the film era, this was an acceptable compromise because silver-halide emulsions had relatively low sensitivity to blue and violet wavelengths. On modern digital sensors, which have more uniform spectral response, this under-correction manifests as purple fringing on high-contrast edges — a known characteristic of the Summicron-M 50/2 that reviewers consistently observe.

This limitation was ultimately one of the motivations for Peter Karbe's APO-Summicron-M 50/2 ASPH (2012), which uses anomalous partial dispersion glasses and an aspherical surface to bring the blue wavelengths into much tighter correction.

---

## 9. Focusing Mechanism

The Summicron-M 50/2 uses **unit focusing** — the entire optical cell translates forward as a rigid unit to focus from infinity to the minimum focus distance. There are no internal focusing groups or floating elements. The only variable gap is the back focal distance between the last surface (r₁₁) and the image plane (film or sensor).

**Production specifications (M-mount):**
- Minimum focus distance: 0.7 m (2.3 ft)
- Maximum reproduction ratio: 1:11.5 (Leica published)
- Focus extension at 0.7 m (thick-lens computation): ≈3.85 mm
- BFD at infinity (scaled to f = 50 mm): ≈29.46 mm
- BFD at 0.7 m: ≈33.31 mm

Note: the paraxial thick-lens computation yields a reproduction ratio of approximately 1:13 at 0.7 m, while Leica publishes 1:11.5. This discrepancy likely arises from a combination of factors: the production lens may be slightly re-optimized from Example 9, the published MFD may be measured to the film plane rather than the front principal plane, and the actual conjugate geometry differs from the paraxial model at finite conjugates. The Summicron-R II version uses a shorter minimum focus distance of 0.5 m, made possible by the SLR's longer flange distance accommodating greater lens extension.

The absence of floating elements means that aberration correction is optimized for a single object distance (infinity). At closer focus distances, performance degrades gently — particularly field curvature and spherical aberration increase — but the overall correction remains excellent within the lens's intended use range.

---

## 10. Glass Selection Philosophy

The six glass types in Example 9 can be organized into three functional pairs that mirror each other across the stop:

| Position | Element | n_d | v_d | Role |
|----------|---------|------|------|------|
| Front outer | L11 | 1.79227 | 47.15 | High-index collector (lanthanum crown) |
| Rear outer | L41 | 1.72055 | 47.69 | High-index collector (lanthanum crown) |
| Front positive | L21 | 1.67133 | 41.64 | Moderate-index barium flint/crown |
| Rear positive | L32 | 1.72055 | 47.69 | Lanthanum crown (shared with L41) |
| Front negative | L22 | 1.73430 | 28.19 | Dense flint (chromatic corrector) |
| Rear negative | L31 | 1.63003 | 35.45 | Light/medium flint (chromatic corrector) |

Several patterns emerge from this arrangement:

**Dispersion pairing:** The outer elements (L11, L41) have nearly matched Abbe numbers (47.15, 47.69), providing excellent lateral color symmetry. The inner doublet negatives (L22, L31) have low Abbe numbers (28.19, 35.45) that provide the chromatic correcting power.

**Index contrasts at the cemented bonds:** The patent explicitly requires that the negative element in each doublet has a higher refractive index than its positive partner (n₃ > n₂ and n₅ > n₄). Although the flat bond surfaces have zero optical power, the index step refracts converging or diverging wavefronts at the interface, altering the aberration contributions of downstream surfaces. This is the mechanism by which the patent's index-difference conditions (n₃ − n₂ and n₅ − n₄) influence the correction balance — not through surface power, but through wavefront reshaping.

**High-index outer elements:** The use of lanthanum-containing glasses with n_d > 1.72 for all elements outside the negative flints keeps surface curvatures gentle throughout, which is essential for controlling higher-order aberrations at f/2.

**Economy of types:** By sharing the same glass (n_d = 1.72055, v_d = 47.69) for both L32 and L41, the design reduces the number of distinct glass procurements from six to five — another manufacturing cost optimization.

**Glass identification uncertainty:** None of the six glass types precisely match standard Schott catalog entries from the 1970s era. Residuals range from Δn_d ≈ 0.003 (for L21 vs. BaSF6) to Δn_d ≈ 0.010 (for L31 vs. F2). This pattern is consistent across all six positions and strongly suggests that Leitz Canada used proprietary melts or special compositions from the Leitz Glass Research Laboratory in Wetzlar. Without access to internal Leitz computation records, definitive catalog identifications are not possible from the patent data alone.

---

## 11. Production Scaling

The patent prescription is stated at f = 100 mm. The production Summicron-M 50mm f/2 has a nominal focal length of approximately 50 mm, requiring a uniform scale factor of ≈0.50 applied to all linear dimensions (radii, thicknesses, spacings, and semi-diameters). Angular quantities (field angle, f-number) are scale-invariant and remain unchanged.

| Parameter | Patent (f = 100) | Production (f ≈ 50) |
|-----------|-----------------|-------------------|
| EFL | 100.0 mm | ≈50.0 mm |
| BFD | 58.88 mm | ≈29.4 mm |
| Total track | 69.92 mm | ≈35.0 mm |
| Overall length | 128.8 mm | ≈64.4 mm |
| Field angle | ±22.5° | ±22.5° (≈45° diagonal) |
| F-number | f/2 | f/2 |

The production M-mount lens weighs 240 g, accepts 39mm (E39) filters, and measures approximately 43.5 × 53 mm (diameter × length). The close focus distance is 0.7 m with a maximum reproduction ratio of 1:11.5. The Summicron-R II version is slightly larger (E55 filters, 250–300 g) with a closer MFD of 0.5 m.

---

## 12. Historical and Optical Significance

The Summicron-M 50/2 represents a masterclass in balancing optical performance against manufacturing pragmatism. Mandler's genius lay not in pushing the boundaries of optical complexity — as Zeiss's Erhard Glatzel was doing contemporaneously with computer-optimized designs of far greater element counts — but in extracting maximum performance from a minimum of optical surfaces, with deliberate attention to producibility.

The patent explicitly frames the design problem in economic terms: material costs, fabricating costs, and tooling costs. The strategy of maximizing flat surfaces and matched radii addresses all three — flat surfaces need no specialized diamond tools, matched radii share tooling, and the use of only five distinct glass types reduces procurement complexity. The patent even references a specific mounting arrangement (German Offenlegungsschrift 2,364,621) that takes particular advantage of planar surfaces for simplified assembly.

The design's longevity speaks for itself. Over four decades later, the same optical formula remains in production, and many reviewers consider it to outperform more complex modern designs in subjective image quality — particularly in the organic rendering of micro-contrast and the smooth transition from in-focus to out-of-focus regions. Peter Karbe, Leica's current head of optical design, acknowledged Mandler's enduring contribution after his death in 2005.

The lens was eventually complemented (not replaced) in 2012 by the APO-Summicron-M 50/2 ASPH — an eight-element, five-group design with aspherical and anomalous-dispersion elements, designed by Karbe. That the two lenses continue to be sold side by side, at vastly different price points, testifies to the enduring appeal of Mandler's 1974 design: a lens whose carefully chosen compromises have, for many photographers, aged into virtues.
