# Canon Serenar 35mm f/3.2 — Optical Analysis

**Patent:** US 2,645,975
**Inventor:** Hiroshi Ito
**Assignee:** Canon Camera Company, Ltd.
**Filed:** June 29, 1951 (priority: Japan, July 14, 1950)
**Granted:** July 21, 1953
**Marketed:** June 1951
**Embodiment analyzed:** Sole illustrative embodiment (single figure; table in col. 3, repeated in claim 5)
**Design type:** Modified double-Gauss (four-component, six-element)

---

## 1. Historical Context

The Canon Serenar 35mm f/3.2 was Canon's second 35mm wide-angle lens for the Leica-thread-mount (M39) rangefinder system. It replaced the simpler four-element Tessar-type Serenar 35mm f/3.5 that had been introduced just one year earlier, in March 1950. Where the f/3.5 used a conventional four-element Tessar configuration, the f/3.2 adopted a fundamentally different architecture — a modified double-Gauss — gaining roughly half a stop of speed while simultaneously improving correction across a 64° field.

According to Kitchingman's collector survey, approximately 7,719 copies of the Serenar 35mm f/3.2 were produced before it was superseded by the Canon 35mm f/2.8. The lens was manufactured with a non-collapsible barrel, six aperture blades, a 34mm filter thread, and a minimum focus distance of 1 meter. It weighed approximately 165 g.

The patent is attributed to Hiroshi Ito, one of Canon's optical designers during the formative postwar period when Canon was establishing itself as a serious competitor to Leica and Nikon in rangefinder optics.

---

## 2. Optical Configuration

The lens uses six elements arranged in four groups, following the classic double-Gauss symmetrical layout:

| Group | Elements | Form | Role |
|-------|----------|------|------|
| G1 (front singlet) | L1 | Positive meniscus | Front convergent component |
| G2 (front doublet, "L₁" in patent) | L2 + L3 (cemented) | Meniscus doublet, concave rear | Front compound meniscus |
| G3 (rear doublet, "L₂" in patent) | L4 + L5 (cemented) | Meniscus doublet, concave front | Rear compound meniscus |
| G4 (rear singlet) | L6 | Biconvex | Rear convergent component |

The aperture stop S sits between G2 and G3, in the central air space between the two compound meniscus doublets; the patent's figure draws it nearer the rear doublet than the front one (see §4.1). This is the defining feature of the Gauss type: two thick meniscus groups flanking a central stop, which provides inherent symmetry for controlling lateral aberrations (distortion, lateral chromatic aberration, and coma) across wide field angles.

---

## 3. Aspherical Surfaces

**There are no aspherical surfaces in this design.** All ten optical surfaces are spherical. This is entirely consistent with the state of optical manufacturing in 1950–1951 Japan, where aspherical surface fabrication was not yet practical for production lenses. The patent makes no mention of aspherical surfaces, and no conic or polynomial coefficients appear in the prescription.

Ito's design philosophy, as articulated in the patent text, was instead to minimize the refractive power φᵢ at each individual surface — keeping each surface's bending contribution small so that residual higher-order aberrations (beyond the Seidel five) would remain manageable without requiring aspherical correction. This is a sound classical approach: weaker surfaces produce smaller higher-order residuals, at the cost of requiring more surfaces (hence six elements rather than four) to achieve the same total system power.

---

## 4. Prescription (Sole Example)

The patent provides a single worked numerical example, normalized to a focal length of 1.0:

| Surface | Radius (R) | Thickness (d) | nd | νd | Medium |
|---------|------------|---------------|------|------|--------|
| r₁ | +0.6248 | 0.0735 | 1.5891 | 61.2 | L1 glass |
| r₂ | +2.0900 | 0.0197 | 1.0 | — | Air |
| r₃ | +0.4501 | 0.1428 | 1.6073 | 59.5 | L2 glass |
| r₄ | −2.3268 | 0.0214 | 1.5785 | 41.7 | L3 glass (cemented) |
| r₅ | +0.2975 | 0.1428 | 1.0 | — | Air (central space + stop) |
| r₆ | −0.2907 | 0.0197 | 1.5785 | 41.7 | L4 glass |
| r₇ | +0.9054 | 0.1025 | 1.6031 | 60.7 | L5 glass (cemented) |
| r₈ | −0.3952 | 0.0020 | 1.0 | — | Air |
| r₉ | +3.0986 | 0.0642 | 1.6228 | 56.9 | L6 glass |
| r₁₀ | −0.7947 | (BFD) | 1.0 | — | Air → image |

The stated design parameters are f/3.0 with a 64° included angle (2ω). At f = 35 mm production scale, the scale factor is approximately 35.62×.

**Note on f-number:** The patent specifies F:3.0, but the production lens was marketed as f/3.2. The diagram opens to the patent's f/3.0 (engine iris radius 4.07 mm at the stop) and keeps f/3.2 as the marketing value. Why production was rated slower is not stated anywhere in the patent; a slightly smaller production iris or a conservative speed rating are both plausible. The difference (f/3.0 → f/3.2) is about a fifth of a stop, a ~6% reduction in stop diameter.

### 4.1 Paraxial Verification

An ABCD matrix paraxial ray trace through the complete prescription yields:

- **Computed EFL:** 0.9825 (vs. stated f = 1.0; deviation of −1.8%)
- **Back focal distance:** 0.7018 (scaled: ≈25.0 mm)
- **Total track:** 1.2904 (scaled: ≈46.0 mm)

The small EFL discrepancy is typical for patents of this era, where the stated focal length is a rounded nominal value and the prescription values are given to only four decimal places. The computed Petzval sum is **0.337**, consistent with the patent's statement that it "should be in the neighborhood of 0.35 when the focal length is unity."

The patent's stated field of 64° is consistent with a 35mm focal length on the 24×36 mm format: the paraxial diagonal half-field is arctan(21.63/35) ≈ 31.7°, and an exact real-ray trace of the scaled prescription puts the chief ray on the 21.6 mm image corner at ω = 32.0°, i.e. 2ω ≈ 64° — the patent's including angle, with essentially no distortion budget left over at the corner.

**Stop position:** The text names the stop S ("to either side of the stop S") and the single figure draws it as a pair of iris bars inside d₅, but the table has no stop row. The figure is drawn to scale: its vertex crossings give 21.5 px/mm at 300 dpi for d₁, for d₅ and for the whole r₁→r₁₀ length, and the drawn sags of r₅ and r₆ match their radii at that scale. On it the bars sit 3.2 mm behind r₅ and 1.9 mm ahead of r₆ (0.63 of d₅), so the data file places the stop there (3.200 + 1.887 mm) rather than at the mid-gap. The same drawing ends the optical surfaces r₅ and r₆ at ≈5.3 and ≈5.4 mm radius and bevels out to the doublet rims at ≈7.7 mm — the concave faces close toward each other at the edge, so the iris only fits between them because those clear apertures are small. In the model r₅'s rim lies 1.78 mm ahead of the stop and r₆'s 0.37 mm behind it (drawn: 1.74 and 0.51 mm).

The other rims also come from the figure: L1 ≈ 9.9 mm, the front doublet ≈ 7.7 mm, the rear doublet ≈ 7.6 mm and the knife-edged L6 ≈ 9.1 mm, stored as 10.0 / 7.7 / 7.6 / 9.1 mm. An exact trace at f/3.0 and the 21.6 mm corner passes the axial beam and the corner chief ray at every surface; the full-field bundle is trimmed at L1–L2 on one side and at L6 on the other, the ordinary mechanical vignetting of a wide-angle Gauss of this period. The patent publishes no clear apertures, so these are figure measurements, not patent values.

---

## 5. Glass Identification

The patent explicitly states that the design uses only "common kinds" of glass: "heavy crown glass for the convex lens components and light flint glass for the concave lens components." This aligns with the inventor's stated philosophy of avoiding exotic glass types.

The patent names no glass types or supplier. Every printed nd/νd pair has a catalog glass that reproduces it at the patent's precision; the data file labels them as catalog equivalents:

| Element | nd | νd | Six-Digit Code | Catalog equivalent (nd / νd) | Δnd (×10⁻⁴) | Δνd |
|---------|------|------|----------------|------------|-------------|-----|
| L1 | 1.5891 | 61.2 | 589/612 | **SK5** (1.58913 / 61.26) | +0.3 | +0.06 |
| L2 | 1.6073 | 59.5 | 607/595 | **SUMITA K-SK7** (1.60729 / 59.47) | −0.1 | −0.03 |
| L3 | 1.5785 | 41.7 | 578/417 | **HOYA FL4** (1.57845 / 41.71) | −0.5 | +0.01 |
| L4 | 1.5785 | 41.7 | 578/417 | **HOYA FL4** (same) | (same) | (same) |
| L5 | 1.6031 | 60.7 | 603/607 | **HOYA BACD14** (1.60311 / 60.69) | +0.1 | −0.01 |
| L6 | 1.6228 | 56.9 | 623/569 | **Schott SK10** (catalog row N-SK10, 1.62278 / 56.98) | −0.2 | +0.08 |

The crowns are the barium dense-crown (SK) family throughout. The flint pair is a light flint: its nd = 1.5785 falls between Schott LF7 (1.5750) and LF5 (1.5814), so neither Schott glass fits both coordinates, while HOYA's FL4 matches both. Whether Canon bought Japanese-made equivalents of these glasses is not stated; the labels record catalog equivalents only.

Notably, the design uses four distinct crown glasses (five glass types in all) rather than consolidating to fewer types. This allowed Ito to fine-tune the chromatic correction at each position independently — a practical trade-off of slightly increased material cost against better aberration balance.

---

## 6. Element-by-Element Analysis

### L1 — Front Positive Meniscus (SK5-type)

| Property | Value |
|----------|-------|
| Shape | Positive meniscus, convex toward object |
| Radii | R₁ = +0.6248, R₂ = +2.0900 |
| Thickness | 0.0735 |
| Glass | nd = 1.5891, νd = 61.2 (SK5) |
| Focal length | f = +1.485 (scaled: +52.9 mm) |

L1 is a gently converging positive meniscus that serves as the front collecting element. Its meniscus form (both surfaces convex toward the object, with the front surface much more strongly curved) is a deliberate choice to reduce the angle of incidence on each surface, keeping higher-order spherical aberration contributions low. The relatively weak power (f ≈ 1.5× the system focal length) means this element contributes modest convergence while introducing minimal aberration — consistent with Ito's philosophy of distributing power across many surfaces.

### L2 — Front Doublet Positive Element (K-SK7 equivalent)

| Property | Value |
|----------|-------|
| Shape | Biconvex |
| Radii | R₃ = +0.4501, R₄ = −2.3268 |
| Thickness | 0.1428 |
| Glass | nd = 1.6073, νd = 59.5 (SUMITA K-SK7 equivalent; supplier unspecified) |
| Focal length | f = +0.633 (scaled: +22.6 mm) |

L2 is the most powerful single element in the system: a thick biconvex crown with a focal length of roughly 0.63× the system EFL. It forms the front (convergent) component of the object-side cemented doublet L₁. The strong front radius R₃ = +0.4501 is the primary refracting surface responsible for bending the marginal ray inward toward the stop. The patent emphasizes that the magnitude of R₃ must fall between 0.4 and 0.5 times the focal length — this is a key design parameter controlling the balance between spherical aberration and coma.

The substantial thickness (d₃ = 0.1428, or about 14% of the focal length) is also structurally significant. The patent's conditional expression requires the total doublet thickness (d₃ + d₄ = 0.1642) to exceed both the central air gap (d₅ = 0.1428) and the rear doublet thickness (d₆ + d₇ = 0.1222). This asymmetry in glass-versus-air distribution is what allows Ito to achieve the desired Petzval sum (~0.35) while keeping field curvature controlled.

### L3 — Front Doublet Negative Element (LF-type)

| Property | Value |
|----------|-------|
| Shape | Biconcave |
| Radii | R₄ = −2.3268, R₅ = +0.2975 |
| Thickness | 0.0214 |
| Glass | nd = 1.5785, νd = 41.7 (HOYA FL4 equivalent) |
| Focal length | f = −0.455 (scaled: −16.2 mm) |

L3 is a thin, strongly divergent biconcave flint element cemented to the rear of L2. Its primary role is threefold: it provides the negative power necessary to achromatize the doublet, it contributes the strongly concave rear surface R₅ = +0.2975 (whose magnitude the patent constrains to 0.25–0.35× focal length) that defines the meniscus shape of the doublet as a whole, and its light flint glass provides the chromatic correction differential against the crown L2.

The cemented junction at R₄ = −2.3268 is very weakly curved — nearly flat — meaning the interface between L2 and L3 contributes minimal refraction. The chromatic correction is therefore dominated by the large dispersion difference between the two glasses (νd ≈ 59.5 vs. 41.7, a Δν of ~17.8) rather than by strong bending at the cement.

Despite being individually strongly negative (f ≈ −0.45), L3 combined with L2 produces a weakly negative doublet with a combined focal length of approximately −3.17 (scaled: −112.9 mm). This net negative power is characteristic of the double-Gauss inner doublets — they are not designed to be achromatic in isolation but rather to contribute the negative Petzval curvature that flattens the field.

### L4 — Rear Doublet Negative Element (LF-type)

| Property | Value |
|----------|-------|
| Shape | Biconcave |
| Radii | R₆ = −0.2907, R₇ = +0.9054 |
| Thickness | 0.0197 |
| Glass | nd = 1.5785, νd = 41.7 (HOYA FL4 equivalent) |
| Focal length | f = −0.378 (scaled: −13.5 mm) |

L4 mirrors L3's role on the image side of the stop. It is a thin biconcave flint element forming the front (divergent) component of the image-side doublet L₂. The strongly concave front surface R₆ = −0.2907 faces the stop and is the most steeply curved surface in the system relative to its clear aperture. This surface is critical for controlling coma and astigmatism — the patent's insistence on near-symmetry about the stop depends on this surface's curvature being comparable to R₅ on the opposite side.

L4 uses the same glass type as L3 (nd = 1.5785, νd = 41.7), maintaining the symmetry principle that helps cancel odd-order lateral aberrations.

### L5 — Rear Doublet Positive Element (SK14-type, BACD14 equivalent)

| Property | Value |
|----------|-------|
| Shape | Biconvex |
| Radii | R₇ = +0.9054, R₈ = −0.3952 |
| Thickness | 0.1025 |
| Glass | nd = 1.6031, νd = 60.7 (HOYA BACD14 equivalent; SK14 family) |
| Focal length | f = +0.470 (scaled: +16.7 mm) |

L5 is the convergent crown element of the rear doublet, cemented to L4's rear surface. It is the second most powerful element (f ≈ +0.47) and provides the main convergent contribution in the rear half of the system. The cemented junction at R₇ = +0.9054 is moderately curved, contributing more refraction than the nearly flat junction R₄ in the front doublet — this breaks the symmetry slightly, which is a deliberate design choice to manage the asymmetric aberration contributions that arise from the different object and image conjugates.

The combined doublet L₂ (L4 + L5) has a focal length of approximately −4.84 (scaled: −172.3 mm) — weakly negative overall, like the front doublet, confirming the Petzval-flattening strategy.

### L6 — Rear Positive Singlet (SK10-type)

| Property | Value |
|----------|-------|
| Shape | Biconvex |
| Radii | R₉ = +3.0986, R₁₀ = −0.7947 |
| Thickness | 0.0642 |
| Glass | nd = 1.6228, νd = 56.9 (SK10) |
| Focal length | f = +1.022 (scaled: +36.4 mm) |

L6 is the rear collecting element and is the only element in the system whose focal length closely matches the system EFL (f ≈ 1.02 vs. system f = ~0.98). This means L6 carries a significant fraction of the total system power — more than the front singlet L1, which is only about half as powerful. The strongly asymmetric biconvex form (nearly flat front surface R₉ = +3.10, strongly curved rear R₁₀ = −0.79) concentrates the refraction at the rear surface, away from the stop. This is a deliberate bending strategy: by placing the more powerful surface at the rear, where off-axis ray heights are largest, L6 helps control distortion — the dominant aberration challenge at 64° field angle.

The very small air gap between L5 and L6 (d₈ = 0.0020, scaled to just 0.07 mm) is noteworthy. In practice, this is barely more than a manufacturing clearance — the rear doublet and rear singlet are nearly in contact. This tight spacing minimizes ray height changes between G3 and G4, reducing the sensitivity of lateral aberrations to manufacturing tolerances.

---

## 7. Symmetry Analysis

The double-Gauss form exploits near-symmetry about the central stop to cancel odd-order lateral aberrations. In Ito's design, this symmetry is approximate rather than exact:

| Parameter | Front half | Rear half |
|-----------|-----------|-----------|
| Singlet focal length | +1.485 (L1) | +1.022 (L6) |
| Doublet combined f | −3.170 (L₁) | −4.837 (L₂) |
| Doublet thickness | 0.1642 | 0.1222 |
| Concave surface facing stop | R₅ = +0.2975 | R₆ = −0.2907 |

The concave surfaces facing the stop (R₅ and R₆) are closely matched in absolute curvature (0.2975 vs. 0.2907), confirming good near-symmetry where it matters most — at the surfaces closest to the stop, which dominate lateral aberration contributions. The front half is deliberately made thicker and slightly more powerful than the rear half, which is the patent's primary innovation: this asymmetry controls the Petzval sum and provides the additional degrees of freedom needed to suppress coma "throughout the picture."

---

## 8. Focus Mechanism

The patent does not describe the focus mechanism. Given the lens's era (1951), mount (M39 Leica-thread), and construction, the Serenar 35mm f/3.2 almost certainly uses **unit focusing** — the entire optical assembly translates forward as a rigid body to focus on closer objects, with only the back focal distance changing. This is the standard approach for rangefinder lenses of this period and focal length.

The minimum focus distance is 1 meter (manufacturer specification from Canon Camera Museum). The patent publishes no close-focus state, so the diagram's 1 m keyframe is a derived unit-focus extension: a paraxial solve of the scaled prescription for an object 1.000 m from the image plane (952.7 mm in front of the first vertex) gives a back-focus increase of

$$\Delta \approx 1.32 \text{ mm} \quad (\text{BF } 25.00 \rightarrow 26.32 \text{ mm}, \; m \approx -0.038)$$

This modest extension is easily accommodated by the helicoid mechanism in the lens barrel.

---

## 9. Petzval Sum and Field Curvature

The computed surface-by-surface Petzval sum is **0.337** (at f = 1.0 normalization), closely matching the patent's stated target of "in the neighborhood of 0.35." This corresponds to a Petzval radius of curvature of:

$$R_P = \frac{1}{P} = \frac{1}{0.337} \approx 2.97$$

Scaled to the production focal length, this gives a Petzval radius of approximately 106 mm — a moderately curved field. For a 35mm wide-angle lens covering a 64° field, this is a reasonable compromise: a completely flat Petzval field (P → 0) would require much stronger negative inner elements, introducing excessive higher-order aberrations. The moderate Petzval sum is balanced against astigmatism to produce a field that is adequately flat across the practical image circle.

---

## 10. Summary

The Canon Serenar 35mm f/3.2 is a competent, conservatively designed double-Gauss wide-angle lens that achieves its performance through classical means: distributed power across six all-spherical surfaces, near-symmetry about a central stop, and deliberate use of the asymmetric doublet thickness strategy described in the patent claims. The design avoids exotic glasses, aspherical surfaces, or unconventional configurations, relying instead on careful optimization of conventional crown-flint pairings.

Ito's key contributions, as claimed in the patent, are:

1. Controlling the Petzval sum to ~0.35 through the curvature and thickness of the front doublet's positive element and the rear doublet's negative element.
2. Constraining the front doublet's convex front radius to 0.4–0.5× focal length and its concave rear radius to 0.25–0.35× focal length.
3. Making the front doublet thicker than both the central air space and the rear doublet, providing the asymmetry needed to manage higher-order coma across a 64° field.

These constraints are all satisfied by the worked example, as verified computationally.
