# Canon Serenar 28mm f/3.5 — Optical Analysis

**Patent:** US 2,645,974 — *High Aperture Wide Angle Six Element Gauss Type Objective Lens System*
**Inventor:** Hiroshi Ito, assigned to Canon Camera Company, Ltd. (as printed on the grant; catalogued here under the canonical entity name Canon Camera Co., Inc.)
**Embodiment:** sole illustrative example (Fig. 1); the same table is repeated verbatim in claim 5
**Filed:** June 29, 1951 (Japan priority: January 31, 1951)
**Granted:** July 21, 1953
**Production lens:** Canon Serenar 28mm f/3.5 I (marketed October 1951)

---

## 1. Historical Context

The Canon Serenar 28mm f/3.5 holds a notable place in photographic history as the fastest wide-angle lens in the world at its time of release. Prior to its introduction, the widest-angle lens available for 35mm rangefinder cameras at any comparable speed was the Leitz Hektor 28mm f/6.3 — nearly two full stops slower. The Zeiss Tessar 28mm f/8 was even dimmer. Canon's achievement of f/3.5 at a 75° field of view represented a genuine breakthrough, accomplished by applying the double-Gauss form to a wide-angle design — a configuration that had traditionally been reserved for normal-to-moderate-telephoto focal lengths.

The lens was designed by Hiroshi Ito, one of Canon's early optical engineers. The "Serenar" brand name, used on Canon lenses throughout the 1950s, was coined by a Canon employee in a company naming contest, derived from "Serene" — a reference to the Sea of Serenity (Mare Serenitatis) on the Moon.

The production lens was offered in Leica Thread Mount (M39/LTM) with a non-collapsible, non-revolving rigid mount, 6-blade diaphragm (f/3.5 to f/22 with click stops), and unit focusing from 1 m to infinity. It accepted 34mm Series VI filters via an adapter ring. The lens was compact: 48 × 18.5 mm, approximately 145–151 g.

## 2. Optical Configuration

### 2.1 Layout

The design is a six-element, four-group modified double-Gauss (Planar-type) arranged as follows:

| Group | Elements | Form | Role |
|-------|----------|------|------|
| I | L1 | Positive meniscus | Front collector |
| II | L2 + L3 (cemented) | Compound negative meniscus | Front Gauss doublet |
| III | L4 + L5 (cemented) | Compound negative meniscus | Rear Gauss doublet |
| IV | L6 | Plano-convex positive | Rear collector |

The aperture stop sits in the central air space between Groups II and III (the gap d₅ = 0.100f), which is the canonical stop position for a double-Gauss design. The patent neither tabulates the stop nor draws it in Fig. 1; the data file places it at the mid-point of d₅ (1.394 mm from each facing surface at production scale). The two compound meniscus lenses (Groups II and III) face each other with their concave exterior surfaces, forming the characteristic "waist" of the Gauss configuration around the stop.

### 2.2 Aspherical Surfaces

**There are no aspherical surfaces in this design.** All ten optical surfaces are spherical. This is entirely expected for a 1951-era production lens — aspherical surface fabrication for photographic objectives was not commercially viable until the late 1960s and early 1970s. The patent makes no mention of aspherical coefficients, conic constants, or any departure from spherical form, and the aberration correction is achieved entirely through glass selection, curvature balancing, and thickness distribution.

### 2.3 Patent Prescription

The patent provides a single worked example, normalized to a focal length of 1.00:

| Surface | Radius | Thickness | Element | nᵈ | νᵈ |
|---------|--------|-----------|---------|------|------|
| r₁ | +0.603 | d₁ = 0.068 | L₁ | 1.5638 | 60.7 |
| r₂ | +2.595 | d₂ = 0.005 | — | 1.0 | — |
| r₃ | +0.472 | d₃ = 0.098 | L₂ | 1.6237 | 47.0 |
| r₄ | −3.000 | d₄ = 0.024 | L₃ | 1.5955 | 39.2 |
| r₅ | +0.323 | d₅ = 0.100 | — | 1.0 | — |
| r₆ | −0.331 | d₆ = 0.017 | L₄ | 1.5785 | 41.7 |
| r₇ | +0.798 | d₇ = 0.124 | L₅ | 1.6204 | 60.3 |
| r₈ | −0.428 | d₈ = 0.004 | — | 1.0 | — |
| r₉ | ∞ | d₉ = 0.090 | L₆ | 1.6204 | 60.3 |
| r₁₀ | −0.866 | — | — | 1.0 | — |

Note that the cemented interfaces are at r₄ (L2–L3 junction, concave toward object) and r₇ (L4–L5 junction, convex toward object), consistent with the patent's description. The sign convention in the patent uses a minus sign to indicate curvature concave to the object side.

### 2.4 Computed Parameters

Paraxial ray tracing of the normalized prescription yields:

- **EFL (normalized):** 1.0046 (vs. patent-stated 1.00 — the small discrepancy is within rounding tolerance of the patent's three-significant-figure radii)
- **Scale factor to 28 mm production:** ×27.8688 (chosen so the traced EFL is 28.0 mm; the patent's nominal f = 1.00 would scale to 27.87 mm)
- **BFD (from last surface):** 0.800 normalized = 22.3 mm at production scale
- **Total optical track (front surface to image):** 1.330 normalized = 37.1 mm at production scale

The image circle diameter at 28 mm focal length and 75° total field is 2 × 28 × tan(37.5°) ≈ 43.0 mm, closely matching the 35mm format diagonal of 43.3 mm.

## 3. Element-by-Element Analysis

### 3.1 Element L1 — Front Positive Meniscus (Group I)

- **Shape:** Positive meniscus, convex toward object
- **Radii:** R₁ = +0.603, R₂ = +2.595 (both centers of curvature to the right)
- **Thick-lens focal length:** +1.376f = +38.4 mm
- **Glass:** nᵈ = 1.5638, νᵈ = 60.7 → **OHARA S-BAL41 catalog equivalent**; production supplier unspecified

L1 serves as the front collector element. Its moderate positive power gathers the wide-angle light cone and begins converging it toward the stop. The meniscus shape — strongly curved front surface, weakly curved rear — contributes positive power while keeping the Petzval contribution moderate. The high Abbe number (60.7) means this element introduces minimal chromatic aberration despite its significant power. The choice of a barium crown (SK-type) rather than a simple borosilicate crown provides the slightly elevated refractive index (1.564 vs. ~1.517 for BK7) needed to achieve the required power with gentler curvatures.

### 3.2 Element L2 — Front Cemented Positive (Group II, front half)

- **Shape:** Biconvex
- **Radii:** R₃ = +0.472, R₄ = −3.000
- **Thick-lens focal length:** +0.661f = +18.4 mm
- **Glass:** nᵈ = 1.6237, νᵈ = 47.0 → **HOYA E-BAF8** (barium flint)

L2 is the positive component of the front cemented doublet. It is the most strongly powered element in the system. E-BAF8 provides higher refractive index than L1, enabling strong positive power while the moderate Abbe number (47.0) allows partial chromatic correction when paired with the flint L3. The strong curvature of R₃ (+0.472) is the primary positive refracting surface of the front Gauss group.

### 3.3 Element L3 — Front Cemented Negative (Group II, rear half)

- **Shape:** Biconcave
- **Radii:** R₄ = −3.000 (cemented junction), R₅ = +0.323
- **Thick-lens focal length:** −0.488f = −13.6 mm
- **Glass:** nᵈ = 1.5955, νᵈ = 39.2 → **HOYA E-F8 catalog equivalent** (production supplier unspecified)

L3 is the negative component of the front doublet. Its strongly negative power (the second-strongest element) comes primarily from the tightly curved rear surface R₅ = +0.323, which is the concave exterior face of Group II facing the stop. This surface is critical: it provides the diverging power that, combined with the symmetrical Group III on the opposite side of the stop, enables the quasi-symmetrical aberration cancellation that is the hallmark of the double-Gauss form. The patent's dense-flint coordinate is modeled with the exact HOYA E-F8 catalog equivalent (νᵈ = 39.2), providing chromatic compensation against L2's crown glass without asserting the historical production supplier.

The cemented junction R₄ = −3.000 is very weakly curved — nearly flat. This means the L2–L3 interface contributes almost no optical power (the Petzval contribution of this surface is only +0.004), and its primary role is to allow chromatic correction through the glass dispersion difference across the bond. The near-flatness of this junction also simplifies manufacturing.

### 3.4 Element L4 — Rear Cemented Negative (Group III, front half)

- **Shape:** Biconcave
- **Radii:** R₆ = −0.331, R₇ = +0.798
- **Thick-lens focal length:** −0.402f = −11.2 mm
- **Glass:** nᵈ = 1.5785, νᵈ = 41.7 → **HOYA FL4 catalog equivalent** (legacy flint, 1.578447 / 41.707529; production supplier unspecified)

L4 is the negative component of the rear cemented doublet, and it is the strongest negative element in the system. Its front surface R₆ = −0.331 is the concave face of Group III facing the stop, forming the mirror-image companion to L3's rear surface R₅. Together, these two strongly concave surfaces flanking the stop create the classic Gauss "waist" and are the primary sites for correcting spherical aberration and coma at large aperture.

The choice of a moderate-index, moderate-dispersion flint (1.5785/41.7, in the Schott BaF3 neighbourhood) rather than a conventional dense flint for L4 is notable. The patent gives only the coordinate; the data file models it with HOYA's obsolete-inclusive FL4 row, which reproduces both numbers within the printed precision. This asymmetry between the front and rear Gauss doublets — different glass coordinates and thicknesses — is a deliberate departure from perfect symmetry.

### 3.5 Element L5 — Rear Cemented Positive (Group III, rear half)

- **Shape:** Biconvex
- **Radii:** R₇ = +0.798 (cemented junction), R₈ = −0.428
- **Thick-lens focal length:** +0.467f = +13.0 mm
- **Glass:** nᵈ = 1.6204, νᵈ = 60.3 → **Schott N-SK16 catalog equivalent** (dense barium crown; production supplier unspecified)

L5 is the positive component of the rear doublet. It provides strong convergence to redirect the diverging beam from L4 back toward the image. The 1.6204/60.3 dense barium crown (modelled with the N-SK16 catalog row, 1.62041/60.32) is the same coordinate used in L6, providing excellent chromatic performance. The cemented junction R₇ = +0.798 is more strongly curved than the front doublet's junction (R₄), which means the L4–L5 interface carries non-trivial optical power and Petzval contribution — another asymmetry between the front and rear Gauss halves.

### 3.6 Element L6 — Rear Positive Plano-Convex (Group IV)

- **Shape:** Plano-convex (flat front facing the stop; convex rear surface protruding toward the image)
- **Radii:** R₉ = ∞ (flat), R₁₀ = −0.866
- **Thick-lens focal length:** +1.396f = +38.9 mm
- **Glass:** nᵈ = 1.6204, νᵈ = 60.3 → **Schott N-SK16 catalog equivalent** (dense barium crown; production supplier unspecified)

L6 is the rear collector element, providing the final convergence to bring the image to focus. It is also the largest element in the system: the full-field chief ray to the 135-format corner crosses its rear surface 6.0 mm from the axis, and Fig. 1 draws it roughly 1.6× the rim height of the cemented doublets. Its flat front surface is unusual — most double-Gauss designs use a meniscus or weakly curved surface here. The flat entry face means all of L6's optical power comes from the single rear surface R₁₀, which simplifies alignment and manufacturing. Although R₁₀ carries a negative sign (center of curvature to the left), the surface is physically convex toward the image — it protrudes outward at the center, making the element thicker at center than at the rim, the defining characteristic of a positive plano-convex form. The use of the same glass coordinate as L5 (1.6204/60.3) is a practical advantage for production: Canon needed to source only five distinct glass types for the six elements.

The near-identical focal lengths of L1 (+38.4 mm) and L6 (+38.9 mm) reflect the quasi-symmetric power balance of the design, though the element shapes are quite different (meniscus vs. plano-convex), which is part of the asymmetric correction strategy.

## 4. Glass Types Summary

The design uses five distinct glass coordinates across six elements (L5 and L6 share one). The patent names no glass and no supplier; it prints only nᵈ and νᵈ to four and three figures. The labels below are modern catalog rows chosen because their nᵈ/νᵈ reproduce the patent pair within 1e-4 / 0.05, used purely to give the tracer a real dispersion curve:

| Data-file label | Family | nᵈ | νᵈ | Six-Digit Code | Catalog row used | Elements |
|-------|-------------------|------|------|---------------|------|----------|
| S-BAL41 (OHARA catalog equivalent) | Barium crown | 1.5638 | 60.7 | 564/607 | 1.56384 / 60.67 | L1 |
| E-BAF8 (HOYA) | Barium flint | 1.6237 | 47.0 | 624/470 | 1.62374 / 47.04 | L2 |
| E-F8 (HOYA catalog equivalent) | Dense flint | 1.5955 | 39.2 | 596/392 | 1.59551 / 39.22 | L3 |
| FL4 (HOYA catalog equivalent) | Legacy flint | 1.5785 | 41.7 | 579/417 | 1.578447 / 41.707529 (obsolete-inclusive catalog) | L4 |
| N-SK16 (Schott catalog equivalent) | Dense barium crown | 1.6204 | 60.3 | 620/603 | 1.62041 / 60.32 | L5, L6 |

Which foundry actually supplied the 1951 melts is unknown. Canon, like most Japanese manufacturers in the early 1950s, would most plausibly have drawn on domestic Ohara or HOYA production; the vendor names in the labels are catalog equivalents for the printed coordinates, not attributions.

There are no anomalous partial dispersion (APD) glasses in this design. The FK, ED, or fluorite-type materials that became important for later Canon lens designs were not part of the standard catalog in 1951, and the double-Gauss form achieves its chromatic correction through conventional crown/flint pairing within each cemented doublet.

## 5. Group Focal Lengths and Power Distribution

Thick-lens subsystem ray traces yield the following group focal lengths:

| Group | Elements | Focal Length (normalized) | Focal Length (28 mm scale) | Character |
|-------|----------|--------------------------|---------------------------|-----------|
| I | L1 | +1.376 | +38.4 mm | Moderate positive |
| II | L2 + L3 | −3.033 | −84.5 mm | Weak negative |
| III | L4 + L5 | −33.910 | −945.0 mm | Very weak negative (nearly afocal) |
| IV | L6 | +1.396 | +38.9 mm | Moderate positive |

The power distribution reveals an important asymmetry in Ito's design. While Group II (front doublet) has a definite net negative focal length of −84.5 mm, Group III (rear doublet) is nearly afocal at −945 mm. This means L4 and L5 almost perfectly cancel each other's power — the rear doublet acts primarily as an aberration corrector rather than a power-carrying group. The bulk of the system's convergence comes from the two outer singlets (Groups I and IV), with Group II providing a slight diverging correction.

This asymmetric power balance is the key to Ito's wide-angle adaptation of the Gauss form. In a conventional normal-focal-length Gauss (e.g., 50mm f/1.4), the front and rear doublets typically carry more comparable net power. By making Group III nearly afocal, Ito shifts more of the power burden to the outer elements, which operate at more moderate ray heights and incidence angles for off-axis beams — critical for maintaining correction at the 37.5° half-field angle.

## 6. Petzval Sum and Field Curvature

The surface-by-surface Petzval sum computation yields:

$$\text{Petzval sum} \times f = 0.371$$

The patent states this value is "around 0.4," which is consistent with the computed value given the three-significant-figure precision of the patent radii. For context, an uncorrected system would have a Petzval sum roughly equal to the reciprocal of the system focal length (i.e., ~1.0 when normalized), so a value of 0.37 represents substantial but incomplete correction.

A Petzval sum of 0.37 implies a Petzval field curvature radius of approximately 1/0.37 = 2.70f = 75.6 mm at the 28 mm production scale. This is moderate — not as flat as later retrofocus wide-angle designs would achieve, but adequate for the era's film flatness tolerances. The remaining field curvature is partially compensated by astigmatism balancing (inward-curving tangential field offsetting the Petzval contribution), as seen in the patent's astigmatism curves (Figure 3).

## 7. Patent Conditional Expressions

The patent claims define the design space through several conditional expressions, all of which the worked example satisfies:

| Condition | Computed Value | Patent Range | Status |
|-----------|---------------|--------------|--------|
| r₃ / f (front convex of Group II) | 0.470 | 0.40 – 0.55 | ✓ |
| r₅ / f (rear concave of Group II) | 0.322 | 0.25 – 0.38 | ✓ |
| (d₃ + d₄) / f (Group II thickness) | 0.121 | 0.10 – 0.13 | ✓ |
| (d₆ + d₇) / f (Group III thickness) | 0.140 | 0.13 – 0.15 | ✓ |
| Group II thinner than Group III | 0.122 < 0.141 | Required | ✓ |

The condition that Group II must be thinner than Group III is particularly important. Ito explains that this thickness asymmetry, combined with the specific curvature ranges for the front doublet's exterior surfaces, is what allows the Petzval sum to be held near 0.4 while simultaneously correcting spherical aberration and coma to a level sufficient for f/3.5 operation — which he notes was "by far a higher aperture than that of prior known similar lens systems" at this field angle.

## 8. Focus Mechanism

The Canon Serenar 28mm f/3.5 uses **unit focusing** — the entire optical assembly moves forward as a rigid unit when focusing from infinity to the minimum focus distance of 1 meter. This is the simplest focus mechanism and was standard for rangefinder lenses of this era. The lens barrel incorporates a helicoid thread that translates the rotational motion of the focus ring into axial movement of the lens group.

The patent does not provide variable-gap data for close focus distances, which is consistent with unit focus: since all elements move together, the internal air spacings remain fixed at all focus positions. Only the back focal distance (the gap from the last surface to the film plane) changes during focusing.

At the minimum focus distance of 1 m — measured from the film plane, the rangefinder-lens convention — the lens must extend forward by approximately:

$$\Delta = \frac{f^2}{s - f} \approx \frac{28^2}{972 - 28} \approx 0.83 \text{ mm}$$

where s ≈ 972 mm is the object distance from the front principal plane once the lens's own length is subtracted from the 1 m conjugate. The data file's close-focus keyframe uses this derived value (rear gap 22.30 → 23.13 mm; a paraxial trace of the stored keyframe puts the object 1.002 m from the image plane). This small extension is easily accommodated by the helicoid mechanism within the compact lens barrel.

## 9. Aberration Performance

The patent provides ray-traced aberration curves (Figures 2–4) showing performance at f/3.5:

**Spherical aberration (Figure 2):** The longitudinal spherical aberration is held within approximately ±0.01f (±0.28 mm) across the full aperture at f/3.5, with a zonal residual showing slight overcorrection at intermediate zones. The sine condition (plotted in dashed lines) shows that the offense against the sine condition is small, indicating good correction of coma near the axis — consistent with the patent's claim that oblique spherical aberration does not exceed 1/800 of the focal length across the picture area.

**Astigmatism (Figure 3):** The tangential and sagittal field curves show modest separation, with the tangential field curving more strongly inward. At 35° from the axis (near the corner of the 35mm frame), the astigmatic separation is approximately 0.015f ≈ 0.42 mm. This is a respectable performance for a 75° field lens of this speed.

**Distortion (Figure 4):** Barrel distortion reaches approximately −1% at 35° from the axis. This is low for a wide-angle lens of this era and field angle, reflecting the quasi-symmetric Gauss form's inherent distortion cancellation.

## 10. Semi-Diameter Estimation Notes

The patent does not list semi-diameters or clear apertures, and Fig. 1 is a schematic: its axial scale is not uniform (the 0.005f and 0.004f air gaps are drawn several times too wide, and the sags drawn on r₁ imply a radial scale under which the front element could not pass the patent's own 75° field), so the drawing's absolute dimensions were not used.

The data-file values were instead set from an exact meridional trace of the scaled prescription. Two rays fix the floor at every surface: the f/3.5 axial marginal ray (4.0 mm at r₁, 3.2–3.4 mm through the doublets and L6) and the full-field chief ray to the 135-format corner, Y = 21.6 mm, which the trace reaches at ω = 38.0° (patent: 2ω = 75°). The chief ray is the binding constraint on the outer elements — it crosses r₁ at 5.4 mm, r₂ at 4.7 mm, r₈ at 4.2 mm, r₉ at 5.2 mm and r₁₀ at 6.0 mm — while the doublet interiors near the stop see it below 2.5 mm. Each rim was then placed above its floor with 6–25 % margin, and the element-to-element proportions were taken from Fig. 1, which draws the rim heights of L1 : L2–L3 : L4–L5 : L6 as roughly 1.21 : 1.00 : 1.08 : 1.64 (L6 clearly the largest element). The resulting rims are r₁ 5.7 / r₂ 5.4 mm, r₃–r₅ 4.6 / 4.0 / 3.6 mm, r₆–r₈ 3.7 / 4.2 / 4.9 mm and r₉ = r₁₀ = 7.5 mm.

Neither thin air gap constrains the rims: r₂ and r₃ are both convex toward the object, and r₃ (R = +13.15 mm) recedes from the axis far faster than r₂ (R = +72.3 mm), so the d₂ gap opens outward; likewise r₈ curves away from the flat r₉, so d₈ opens outward. The gap that does close outward is d₅ across the stop (r₅ and r₆ are concave toward each other, meeting at about 5.0 mm), which is why the doublet rims facing the stop stay near 3.6–3.7 mm. At these values the full-field bundle is heavily vignetted by the front element and the rear doublet (the trace passes roughly half of the corner bundle) — expected behavior for a compact rangefinder wide-angle of this era, where the f/3.5 speed is achieved only on-axis.

## 11. Design Significance

Ito's design represents a careful study of how far the classical double-Gauss form can be pushed toward wide-angle coverage without resorting to the retrofocus (inverted telephoto) configuration that would later become the dominant wide-angle architecture for SLR cameras. The key innovations in this patent relative to prior Gauss-type lenses are:

1. **Asymmetric doublet thickness:** Making Group II thinner than Group III, with specific thickness-to-focal-length ratios, allows field curvature control without sacrificing axial correction.

2. **Asymmetric doublet power:** Group III is made nearly afocal, shifting the power burden to the outer singlets where off-axis ray heights are more manageable.

3. **Careful glass selection:** The use of five distinct glass types (rather than the two — one crown, one flint — common in simpler Gauss designs) provides additional degrees of freedom for chromatic and monochromatic aberration balancing.

4. **Moderate Petzval sum target:** Rather than attempting to drive the Petzval sum toward zero (which would require extreme glass types or curvatures), Ito accepts a moderate value of ~0.4 and compensates the residual field curvature through astigmatism balancing.

The lens remained in Canon's rangefinder lineup throughout the 1950s and was never surpassed in speed at this focal length during the Serenar/LTM era. Its Gauss-type architecture became impractical for SLR cameras (where the mirror box demanded a longer back focal distance), and Canon's later 28mm designs for the FL and FD mounts adopted the retrofocus form instead. The Serenar 28mm f/3.5 thus represents both the pinnacle and the endpoint of a particular design philosophy — a classical form pushed to its widest practical limits.
