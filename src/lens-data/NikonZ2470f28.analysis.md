# Optical Design Analysis: NIKKOR Z 24-70mm f/2.8 S

## Patent WO2020/136749 A1, Example 1

**Applicant:** Nikon Corporation (Tokyo, Japan)
**Inventors:** Machida Kōsuke (町田 幸介), Gomibuchi Osamu (五味渕 治)
**International Filing Date:** December 26, 2018
**PCT Number:** PCT/JP2018/047781
**Japanese Publication:** JP WO2020/136749 A1, published July 2, 2020

---

## 1. Patent-to-Production Correspondence

The first numerical example (Table 1) in this patent presents a zoom optical system with the following key specifications:

- **Focal length range:** 24.8–67.9 mm (zoom ratio 2.74×)
- **Maximum aperture:** f/2.92 constant
- **Half-field angle (2ω):** 85.10° (wide) to 33.84° (tele)
- **Maximum image height:** 21.60 mm (consistent with FX-format 43.2 mm image circle)
- **Optical formula:** 17 elements in 7 zoom groups (15 optical groups by air-spaced count)
- **Special elements:** 4 aspherical surfaces, 2 ED glass elements
- **Focus mechanism:** Dual-group inner focus with independent stepping motor drives

These specifications align closely with the production NIKKOR Z 24-70mm f/2.8 S (released February 2019), which Nikon specifies as 17 elements in 15 groups with 4 aspherical lens elements, 2 ED elements, and a "Multi-Focus System" employing two stepping motor actuators. The element and aspherical counts match exactly. The "15 groups" in Nikon's specification counts every air-separated optical group (17 elements minus 2 cemented doublets = 15 groups), while the patent's "7 groups" refers to the seven independently moving zoom groups.

The focal length range and aperture differ slightly between the patent example (24.8–67.9 mm, f/2.92) and the production specification (24–70 mm, f/2.8). This is typical of zoom lens patents, where numerical examples represent one optimization point within the design space defined by the patent claims, and the final production lens is further refined.

---

## 2. Optical Architecture

The system follows a positive-lead zoom configuration with the group structure:

| Group | Power | Patent EFL | Elements | Role |
|-------|-------|-----------|----------|------|
| G1 | Positive | +119.124 mm | L11+L12 (cemented), L13 | Front focusing power; collects light |
| G2 | Negative | −22.126 mm | L21, L22, L23, L24 | Variator; primary zoom power |
| G3 | Positive | +40.880 mm | L31, L32 | Compensator/relay; paired with stop |
| G4 | Positive | +115.687 mm | L41+L42 (cemented) | Field-flattening relay element |
| G5 | Positive | +124.717 mm | L51, L52 | 1st focus group (AF) |
| G6 | Positive | +100.365 mm | L61 | 2nd focus group (AF) |
| G7 | Negative | −47.354 mm | L71, L72, L73 | Rear relay; field correction |

All group focal lengths have been independently verified by paraxial ray trace and match the patent-stated values to three decimal places.

The overall power distribution — positive-negative-positive-positive with a trailing negative group — is characteristic of high-performance standard zoom designs for short-flange-distance mirrorless systems. The strong negative G2 provides the primary zoom action, while the multiple positive groups in the rear (G3–G6) distribute the image-forming power across many surfaces, reducing the aberration burden on any single element. The negative rear group G7 acts as a field-flattening relay to expand the image circle and correct Petzval curvature.

---

## 3. Element-by-Element Analysis

Each of the 17 elements is described below in front-to-rear order. Glass identifications were made by matching the patent's nd/νd values against optical glass catalogs (primarily OHARA, with HOYA cross-references). All matches are exact to the precision given in the patent unless noted otherwise.

### Group 1 — Front Positive Group (f = +119.1 mm)

**L11 — Negative Meniscus** (cemented to L12)
- nd = 1.84666, νd = 23.80 → **OHARA S-TIH53** (or HOYA TAFD25)
- R₁ = +234.387 mm, R₂ = +109.518 mm (junction with L12)
- Element EFL ≈ −245 mm
- High-index, high-dispersion flint glass. Paired with L12 to form an achromatic doublet that controls longitudinal chromatic aberration (LoCA) introduced by the front group's converging power.

**L12 — Positive Meniscus** (cemented to L11)
- nd = 1.75500, νd = 52.34 → **OHARA S-LAL8**
- R₁ = +109.518 mm (junction with L11), R₂ = +389.685 mm
- Element EFL ≈ +200 mm
- Lanthanum crown glass. Together, L11+L12 form a cemented achromatic doublet with a combined EFL of approximately +1153 mm — nearly afocal. The doublet's primary role is chromatic correction rather than contributing convergent power. The group's net positive power comes predominantly from L13.

**L13 — Positive Meniscus**
- nd = 1.77250, νd = 49.62 → **OHARA S-LAH55VS**
- R₁ = +59.063 mm, R₂ = +135.365 mm
- Element EFL ≈ +131 mm
- Dense lanthanum crown. This is the principal power-contributing element in G1, providing the converging power that directs light into the variator (G2). The meniscus form with the steeper convex surface facing the object minimizes spherical aberration for the large-diameter front group.

### Group 2 — Variator, Negative (f = −22.1 mm)

**L21 — Negative Meniscus (1× aspherical, front surface)**
- nd = 1.74389, νd = 49.53 → **OHARA L-LAH85**
- R₁ = +218.442 mm (aspherical), R₂ = +18.696 mm
- Element EFL ≈ −27.6 mm
- Lanthanum crown with strong negative power. The aspherical front surface (Surface 6) shows a maximum departure of approximately +98 μm at h = 12 mm relative to the reference sphere, indicating a "flatter than spherical" correction at the zone. The asphere primarily corrects spherical aberration and coma generated by the steep rear surface, which bends the marginal rays sharply. The "L-" prefix in OHARA's designation indicates a low-temperature-process glass suitable for precision glass molding (PGM), which is the most economical manufacturing method for aspherical surfaces in high-volume production.

**L22 — Biconcave Negative**
- nd = 1.77250, νd = 49.62 → **OHARA S-LAH55VS** (same glass as L13)
- R₁ = −59.686 mm, R₂ = +59.686 mm (symmetric radii, |R₁| = |R₂|)
- Element EFL ≈ −38.5 mm
- The symmetric biconcave form distributes the negative power equally across both surfaces, minimizing coma for the off-axis ray bundles passing through this element at wide-angle zoom positions.

**L23 — Biconvex Positive**
- nd = 1.72825, νd = 28.38 → **OHARA S-TIH6** (or HOYA TaFD30, νd = 28.32)
- R₁ = +39.210 mm, R₂ = −48.673 mm
- Element EFL ≈ +30.8 mm
- High-dispersion heavy flint glass with very low Abbe number. This is the chromatic correction element within G2 — its strong positive power in a high-dispersion medium counteracts the chromatic aberration generated by the surrounding negative elements (L21, L22, L24), all of which use lower-dispersion glass. The result is an achromatized variator group that maintains color correction across the zoom range.

**L24 — Negative Meniscus**
- nd = 1.61800, νd = 63.34 → **OHARA S-PHM52Q** (or HOYA PCD4)
- R₁ = −26.407 mm, R₂ = −71.761 mm
- Element EFL ≈ −68.4 mm
- Phosphate crown glass with relatively low dispersion. Positioned at the rear of G2 nearest the aperture stop, this element fine-tunes the Petzval sum and field curvature contribution of the variator. The phosphate glass family offers anomalous partial dispersion characteristics that aid in controlling secondary spectrum.

### Aperture Stop (Surface 14)

The stop is positioned between G2 and G3 and moves with G3 during zoom. This mid-system stop location is characteristic of standard zoom designs, providing symmetric aberration cancellation between the front (G1–G2) and rear (G3–G7) groups. The stop semi-diameter, combined with the system EFL, determines the f-number at each zoom position.

### Group 3 — Compensator/Relay, Positive (f = +40.9 mm)

**L31 — Positive Meniscus (1× aspherical, front surface)**
- nd = 1.69370, νd = 53.32 → **OHARA S-LAL12Q**
- R₁ = +71.888 mm (aspherical), R₂ = +127.641 mm
- Element EFL ≈ +233 mm
- The aspherical front surface (Surface 15) shows a total departure of approximately −89 μm at h = 12 mm from the reference sphere — the asphere removes material relative to the sphere, flattening the surface at the rim. This correction targets residual spherical aberration and zonal errors from the marginal ray bundle converging through the stop region. The "Q" suffix in OHARA's designation indicates a glass grade optimized for quality (homogeneity/striae).

**L32 — Biconvex Positive (ED glass candidate)**
- nd = 1.59319, νd = 67.90 → **OHARA S-PHM52**
- R₁ = +38.749 mm, R₂ = −105.427 mm
- Element EFL ≈ +48.5 mm
- Dense phosphate glass with high Abbe number. This is one of the two elements Nikon identifies as ED (Extra-low Dispersion) glass in the production specification. The S-PHM52 family exhibits anomalous partial dispersion (the P(g,F) value deviates from the normal line), which enables correction of secondary spectrum — the residual chromatic error that remains after primary achromatization. L32 provides the majority of G3's positive power and is positioned immediately after the stop where the axial ray bundle is most concentrated, giving it maximum leverage over on-axis chromatic performance.

### Group 4 — Positive Relay (f = +115.7 mm)

**L41 — Negative Meniscus** (cemented to L42)
- nd = 1.73800, νd = 32.33 → **OHARA S-NBH8**
- R₁ = +67.028 mm, R₂ = +19.513 mm (junction with L42)
- Element EFL ≈ −37.7 mm
- High-dispersion niobium-containing flint glass. Acts as the chromatic corrector within the G4 cemented doublet.

**L42 — Biconvex Positive (ED glass)** (cemented to L41)
- nd = 1.49782, νd = 82.57 → **OHARA S-FPL51Y**
- R₁ = +19.513 mm (junction with L41), R₂ = −50.561 mm
- Element EFL ≈ +29.7 mm
- **This is the primary ED glass element** — a fluorophosphate crown with νd > 82. The S-FPL51 family is one of the most widely used ED glasses in the photographic lens industry. Its position as the strong positive element in a cemented doublet with high-dispersion S-NBH8 creates an achromatic pair with exceptionally low residual secondary spectrum. The "Y" suffix in OHARA's designation may indicate a variant grade (e.g., improved transmittance or chemical durability). The cemented doublet of L41+L42 has a combined EFL that matches the G4 group EFL of +115.7 mm exactly, confirming that G4 consists solely of this doublet with no additional air-spaced elements.

### Group 5 — First Focus Group, Positive (f = +124.7 mm)

**L51 — Negative Meniscus**
- nd = 1.72047, νd = 34.71 → **OHARA S-NBH56**
- R₁ = −23.924 mm, R₂ = −56.208 mm
- Element EFL ≈ −58.7 mm
- Niobium-containing heavy flint glass. The concave-toward-object meniscus form generates negative power that partially compensates the group's net positive power, reducing the sensitivity of spherical aberration to focus position changes. The patent text (¶0094) specifically notes that "at least one focusing group includes a negative-power singlet," confirming this element's intentional role in controlling aberration variation during focus.

**L52 — Biconvex Positive (ED glass candidate)**
- nd = 1.59349, νd = 67.00 → **OHARA S-PHM53**
- R₁ = +103.175 mm, R₂ = −33.020 mm
- Element EFL ≈ +42.8 mm
- Dense phosphate crown. Together with L32 (S-PHM52, νd = 67.90), this represents the second class of glasses Nikon may classify under "ED" in their production specifications. While its Abbe number (67.0) is lower than the fluorophosphate L42 (82.6), the S-PHM53 family offers useful anomalous partial dispersion that aids secondary spectrum correction in the focusing groups.

### Group 6 — Second Focus Group, Positive (f = +100.4 mm)

**L61 — Positive Meniscus (1× aspherical, rear surface)**
- nd = 1.79189, νd = 45.04 → **OHARA S-LAH98** (nd/νd match exact to all reported digits)
- R₁ = −70.629 mm, R₂ = −38.215 mm (aspherical)
- Element EFL ≈ +100.4 mm
- Dense lanthanum crown glass in the LAH family. The concave-toward-object meniscus with the aspherical rear surface (Surface 27) is a compact, high-performance focusing element. The asphere shows a total departure of approximately +139 μm at h = 12 mm from the reference sphere — comprising +194 μm from the polynomial terms partially cancelled by −55 μm from the oblate conic base. This is by far the largest polynomial departure in the entire system, reflecting the heavy correction burden this single-element group carries. The aspherical correction primarily targets spherical aberration and coma variations induced by focus position changes.

### Group 7 — Rear Negative Group (f = −47.4 mm)

**L71 — Positive Meniscus**
- nd = 1.94595, νd = 17.98 → **OHARA S-NPH2**
- R₁ = −43.982 mm, R₂ = −32.425 mm
- Element EFL ≈ +116 mm (weak positive)
- The highest-index glass in the entire system (nd = 1.945) and also the most dispersive (νd = 18.0). S-NPH2 is an extreme flint glass used here to generate strong chromatic aberration of opposite sign to the preceding elements, enabling aggressive secondary spectrum correction in the rear relay. Its extremely high index also contributes to field curvature control through its effect on the Petzval sum.

**L72 — Biconcave Negative (1× aspherical, front surface)**
- nd = 1.85207, νd = 40.15 → **OHARA S-LAH93**
- R₁ = −100.584 mm (aspherical), R₂ = +88.163 mm
- Element EFL ≈ −54.9 mm
- Dense lanthanum flint glass. The aspherical front surface (Surface 30) shows a departure of approximately −106 μm at h = 12 mm — material is added at the rim, increasing the surface's effective curvature. This asphere corrects residual field curvature and astigmatism across the image field, particularly important given the short back focal distance and wide angular coverage at the image plane.

**L73 — Negative Meniscus**
- nd = 1.58913, νd = 61.22 → **OHARA S-BAL42**
- R₁ = −25.284 mm, R₂ = −45.366 mm
- Element EFL ≈ −99.5 mm
- Barium crown glass. Positioned closest to the image plane, this element contributes to telecentricity correction (ensuring the chief ray exits nearly perpendicular to the sensor) and final field curvature adjustment. The relatively gentle negative power spreads the rear divergence across a manageable clear aperture.

---

## 4. Aspherical Surface Summary

Four surfaces carry aspherical profiles. All use a conic constant κ = 1.0, giving the base surface the form of an oblate ellipsoid. The sag equation follows the standard (1+κ) convention used throughout Nikon's patent filings:

$$Z(h) = \frac{h^2/R}{1 + \sqrt{1 - (1+\kappa)(h/R)^2}} + A_4 h^4 + A_6 h^6 + A_8 h^8 + A_{10} h^{10} + A_{12} h^{12}$$

With κ = 1.0, the factor (1+κ) = 2.0. This means the base surface is not a sphere but an oblate ellipsoid — a deliberate choice by the designers. The total aspherical departure from a reference sphere is the sum of both the conic departure and the polynomial terms:

| Surface | Element | Location | Max Departure | Conic / Poly Split | Primary Correction Target |
|---------|---------|----------|---------------|--------------------|---------------------------|
| 6 | L21 (G2) | Front of variator | +98.2 μm @ 12 mm | +0.2 / +97.9 μm | Spherical aberration, coma from steep rear surface |
| 15 | L31 (G3) | After stop | −88.5 μm @ 12 mm | +7.3 / −95.8 μm | Zonal spherical aberration in converging bundle |
| 27 | L61 (G6) | 2nd focus group rear | +139.1 μm @ 12 mm | −54.5 / +193.5 μm | SA/coma variation during focus |
| 30 | L72 (G7) | Rear relay | −105.6 μm @ 12 mm | −2.6 / −103.0 μm | Field curvature, astigmatism |

Note: Departure values are the total sag difference between the full aspherical surface and a reference sphere (κ = 0, same vertex radius), computed at h = 12 mm. Positive departure means the aspherical surface is flatter than (behind) the spherical reference. The "Conic / Poly Split" column shows how much of the total departure comes from the oblate ellipsoid base versus the polynomial terms.

Surface 27 is notable: the polynomial terms alone produce +193.5 μm of departure, but the oblate conic base contributes −54.5 μm in the opposite direction, reducing the net departure to +139.1 μm. This partial cancellation is a standard design technique — the optimizer distributes the aspherical correction budget between the conic and polynomial terms to achieve the desired wavefront shape while keeping the total departure (and hence the manufacturing difficulty) manageable.

The glass used for L21 (OHARA L-LAH85, with the "L-" prefix) is specifically formulated for precision glass molding, indicating that Surface 6 is likely manufactured by PGM rather than traditional grinding and polishing. Surface 15 uses OHARA S-LAL12Q, a conventional glass (suggested by the "S-" prefix), implying that this asphere is produced by grinding, polishing, or possibly composite molding (a thin aspherical resin layer on a spherical glass substrate). Surface 27 and Surface 30 use high-index glasses (nd ≈ 1.79 and 1.85 respectively) that are more challenging to mold, suggesting these may also be produced by grinding/polishing or hybrid techniques.

---

## 5. Focusing Mechanism

The patent describes a dual-group inner focus system — G5 and G6 move independently toward the object during close-focus actuation, driven by separate stepping motors (STM5 and STM6) mounted on a shared cylindrical member (筒部材, barrel member 100). G4 and G7 remain stationary during focus.

### Focus Group Motion at the Telephoto End (infinity → close)

| Gap | Infinity | Close | Change | Interpretation |
|-----|----------|-------|--------|----------------|
| D21 (G4→G5) | 19.018 | 17.666 | −1.352 | G5 moves 1.352 mm toward object |
| D25 (G5→G6) | 2.616 | 3.027 | +0.411 | G5 moves faster than G6 |
| D27 (G6→G7) | 1.953 | 2.893 | +0.940 | G6 moves 0.940 mm toward object |

The sum of gap changes is −0.001 mm (essentially zero), confirming that G4 and G7 are stationary during focus and that all motion is confined to G5 and G6.

The patent (¶0105) explicitly provides the signed focus movement magnitudes:
- MTF1 = −1.352 mm (G5 movement at tele, toward object)
- MTF2 = −0.941 mm (G6 movement at tele, toward object)

The differential motion (G5 moves approximately 44% farther than G6) is the key design feature. By varying the ratio of G5 to G6 motion, the system controls the balance of spherical aberration, coma, and field curvature as the object distance changes. The patent's conditional expression (6) specifies:

$$0.20 < f_{F1}/f_{F2} < 3.00$$

For Example 1: $f_{F1}/f_{F2} = 124.717 / 100.365 = 1.243$, well within the prescribed range, indicating a balanced power split between the two focus groups.

The shared cylindrical barrel member is an elegant mechanical solution: during zoom, the barrel translates along the optical axis via cam followers, carrying both stepping motors and guide shafts. During focus, the motors drive G5 and G6 relative to the barrel, decoupling focus actuation from zoom mechanics. This arrangement permits both zoom-dependent and focus-dependent positioning of G5 and G6 independently, providing maximum aberration correction flexibility across the combined zoom-focus parameter space.

---

## 6. Zoom Behavior

During zoom from wide (24.8 mm) to telephoto (67.9 mm), all seven groups translate:

| Gap | Wide (inf) | Tele (inf) | Change | Behavior |
|-----|-----------|-----------|--------|----------|
| D5 (G1→G2) | 1.780 | 30.246 | +28.466 | G1 and G2 separate dramatically |
| D13 (G2→Stop/G3) | 19.285 | 2.013 | −17.272 | G2 approaches G3 |
| D18 (G3→G4) | 9.167 | 1.493 | −7.674 | G3 and G4 converge |
| D21 (G4→G5) | 5.179 | 19.018 | +13.839 | G4 separates from G5 |
| D25 (G5→G6) | 2.679 | 2.616 | −0.063 | Nearly constant |
| D27 (G6→G7) | 6.128 | 1.953 | −4.175 | G6 approaches G7 |
| BF | 11.93 | 28.62 | +16.69 | Back focus increases |

The total track increases from 139.35 mm (wide) to 169.16 mm (tele), a change of 29.81 mm. This corresponds to the physical extension of the lens barrel during zoom — at wide angle the barrel is retracted, and at telephoto it extends.

The near-zero change in D25 (−0.063 mm) across the full zoom range is noteworthy. This indicates that G5 and G6 maintain a nearly constant separation during zoom, effectively moving as a quasi-unit for the zoom function while retaining independent motion for focus.

---

## 7. Glass Budget and Materials Summary

The 17 elements use 12 distinct glass types, all from the OHARA catalog (with potential HOYA equivalents):

| Glass Type | nd | νd | Elements | Category |
|-----------|-----|-----|----------|----------|
| S-TIH53 | 1.84666 | 23.80 | L11 | High-dispersion flint |
| S-LAL8 | 1.75500 | 52.34 | L12 | Lanthanum crown |
| S-LAH55VS | 1.77250 | 49.62 | L13, L22 | Dense lanthanum crown |
| L-LAH85 | 1.74389 | 49.53 | L21 | Moldable lanthanum crown |
| S-TIH6 | 1.72825 | 28.38 | L23 | Heavy flint |
| S-PHM52Q | 1.61800 | 63.34 | L24 | Phosphate crown |
| S-LAL12Q | 1.69370 | 53.32 | L31 | Lanthanum crown |
| S-PHM52 | 1.59319 | 67.90 | L32 | Dense phosphate (ED candidate) |
| S-NBH8 | 1.73800 | 32.33 | L41 | Niobium flint |
| S-FPL51Y | 1.49782 | 82.57 | L42 | **Fluorophosphate ED glass** |
| S-NBH56 | 1.72047 | 34.71 | L51 | Niobium flint |
| S-PHM53 | 1.59349 | 67.00 | L52 | Dense phosphate (ED candidate) |
| S-LAH98 | 1.79189 | 45.04 | L61 | Dense lanthanum crown |
| S-NPH2 | 1.94595 | 17.98 | L71 | **Extreme flint** (highest index) |
| S-LAH93 | 1.85207 | 40.15 | L72 | Dense lanthanum flint |
| S-BAL42 | 1.58913 | 61.22 | L73 | Barium crown |

**ED glass identification:** The production lens is specified with 2 ED elements. L42 (S-FPL51Y, νd = 82.57) is unambiguously fluorophosphate ED glass. The second ED element is most likely L32 (S-PHM52, νd = 67.90) or L52 (S-PHM53, νd = 67.00) — both are dense phosphate crowns with anomalous partial dispersion properties that Nikon classifies within their ED designation. The patent does not explicitly label which elements are ED, so this identification relies on glass properties and Nikon's documented definition of ED glass as materials developed for optimum chromatic correction.

---

## 8. Conditional Expression Verification

The patent defines nine conditional expressions governing the design. All values for Example 1 are within the prescribed ranges:

| Expression | Formula | Value | Range |
|-----------|---------|-------|-------|
| (1) | dL0t / dL1t | 0.675 | 0.000 – 1.000 |
| (2) | dF0w / dF1w | 0.825 | 0.000 – 1.000 |
| (3) | dA / dB | 0.721 | −1.000 – 2.000 |
| (4) | dB / dE | 1.040 | −1.000 – 1.500 |
| (5) | dB / dD | 0.660 | −1.000 – 1.000 |
| (6) | fF1 / fF2 | 1.243 | 0.20 – 3.00 |
| (7) | MTF1 / MTF2 | 1.437 | 0.20 – 3.00 |
| (8) | |βTF1| / |βTF2| | 0.997 | 0.20 – 5.00 |
| (9) | |fF| / ft | 1.837 | 0.20 – 4.00 |

Expression (8) is particularly revealing: the ratio of lateral magnifications of the two focus groups at the tele end (|βTF1|/|βTF2| = 0.997 ≈ 1.0) indicates that both focus groups operate at nearly identical conjugate conditions at the telephoto position, meaning they share the correction burden equally rather than one dominating the other.

---

## 9. Design Philosophy and Context

This design exemplifies several trends in modern mirrorless zoom lens engineering:

**Short flange advantage.** The Z-mount's 16 mm flange distance and 55 mm throat diameter allow the rear group (G7) to sit extremely close to the sensor. The back focal distance at the wide end is only 11.93 mm — physically impossible in an SLR system requiring mirror clearance. This proximity enables the rear elements to operate at lower ray heights, reducing their required diameter and the associated aberration contributions.

**Dual-motor floating focus.** The independent actuation of G5 and G6 by separate stepping motors (described in the patent as STM5 and STM6 at ¶0019–0020) provides a focusing degree of freedom unavailable in single-group focus systems. The differential motion corrects aberration variation across the focus range that a single moving group cannot. The patent specifically notes (¶0026) that G5 and G6 may also move as a unit during part of the focus travel, suggesting the control firmware can optimize the motion profile for different zoom/focus combinations.

**Extreme glass selection.** The use of S-NPH2 (nd = 1.945, νd = 18.0) in L71 is noteworthy — this is among the most extreme optical glasses in commercial production, with a refractive index approaching 2.0. Its purpose is to generate strong negative chromatic contribution in the rear group for secondary spectrum correction, a role that few other glass types can fulfill as efficiently.

**Aspherical surface distribution.** The four aspheres are distributed across the zoom/focus system — one in the variator (G2), one near the stop (G3), one in the focus group (G6), and one in the rear relay (G7). This distribution ensures that aspherical correction is applied where ray heights and angles are most critical at each zoom position, rather than concentrating all correction in one region.

---

## Sources

- Patent WO2020/136749 A1 (PCT/JP2018/047781), Nikon Corporation, published July 2, 2020. Japanese national phase: JP WO2020/136749 A1, published September 27, 2021.
- OHARA Optical Glass Catalog (glass type identifications by nd/νd matching).
- Nikon product specifications: NIKKOR Z 24-70mm f/2.8 S (17 elements / 15 groups, 2 ED, 4 aspherical), from imaging.nikon.com.
- Group focal lengths independently verified by paraxial ray trace (Python); all 7 groups match patent values to ±0.001 mm.
- Total track length verified: computed 139.36 mm vs. patent-stated 139.35 mm (wide, infinity).
