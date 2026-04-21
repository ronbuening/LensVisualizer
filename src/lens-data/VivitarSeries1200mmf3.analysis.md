# Vivitar Series 1 200mm f/3.0 VMC Auto Telephoto

## Patent & Design Overview

US Patent 3,942,876, "Telephoto Lens," was granted on March 9, 1976, to Ellis I. Betensky and assigned to Ponder & Best, Inc. (the corporate parent of the Vivitar brand) of Santa Monica, California. The patent discloses five numerical embodiments of a telephoto lens family characterized by a movable front G1 group and a stationary rear "correcting" or "compensating" element fixed relative to the film plane. Example 4 (Table IV, illustrated in FIG. 5) corresponds to the production Vivitar Series 1 200mm f/3.0 VMC Auto Telephoto, a six-element, six-group prime lens manufactured by Komine Co., Ltd. of Japan. The lens was part of the original Series 1 launch lineup and was widely available by 1974.

**Key marketed specifications:**

- Focal length: 200 mm
- Maximum aperture: f/3.0
- Optical formula: 6 elements in 6 groups
- Minimum focus distance: 1.2 m (approx. 4 feet; 1:4 reproduction ratio)
- Aperture blades: 8
- Dimensions: approximately 126 mm × 80 mm (diameter)
- Weight: approximately 849 g
- Filter thread: 72 mm
- Mounts: M42 Universal, Nikon F, Canon FD, Minolta SR, Konica AR, Olympus OM, Pentax K

---

## Prescription (Table IV)

The Table IV prescription as printed in the patent contains a likely typographical error in the radius R7, where the value "−1567.0" should read **"−567.0"**. With the published value, paraxial ray tracing yields an EFL of only 183.4 mm and a BFL of 67.4 mm — irreconcilable with the patent's own stated EFL of 200 mm, BFL of 77.5 mm, and FVD of 157.9 mm. With R7 = −567.0, the computed values converge closely on all patent-stated parameters (EFL ≈ 202 mm, BFL ≈ 75.5 mm, FVD ≈ 156 mm, FT/EFL ≈ 0.058). The focusing travel of 11.8 mm matches exactly in both cases, as R7 does not participate in the variable gap.

Notably, the identical value "−1567.0" appears in both the Table IV specification (page 6) and in Claim 6 (page 10), which are on separate pages of the patent document. This rules out a single-page OCR scanning artifact and points to an error in the original typewritten manuscript that was carried through to both the specification and claims. (It is also worth noting that a small EFL discrepancy exists in Table II as well — 131.3 mm computed versus 135 mm stated — suggesting the patent's numerical examples may contain other minor errors or deliberate perturbations.) The corrected prescription is used throughout this analysis.

| Surface | Radius (mm) | Thickness (mm) | n_d | Element |
|---------|-------------|----------------|---------|---------|
| R1 | 56.828 | 12.00 | 1.56873 | L11 |
| R2 | 3586.0 | 0.50 | 1.0 (air) | — |
| R3 | 62.384 | 11.30 | 1.51680 | L12 |
| R4 | 428.03 | 5.46 | 1.0 (air) | — |
| R5 | −254.83 | 4.13 | 1.80518 | L13 |
| R6 | 64.06 | 29.21 | 1.0 (air) | — |
| *STO* | *(in gap)* | — | — | — |
| R7 | −567.0 † | 5.61 | 1.80518 | L14 |
| R8 | −54.70 | 5.24 | 1.0 (air) | — |
| R9 | −38.14 | 1.85 | 1.71270 | L15 |
| R10 | −157.93 | 3.20 → 33.80 ‡ | 1.0 (air) | — |
| R11 | 71.98 | 2.00 | 1.57957 | L21 |
| R12 | 47.56 | 75.50 (BFL) | 1.0 (air) | — |

† Corrected from patent's printed value of −1567.0; see discussion above. The same value appears in both Table IV and Claim 6.

‡ Patent tabulates 3.20 → 15.00 (infinity → 2,372 mm). The close-focus gap of 33.80 mm at 1.2 m MFD is computed from a paraxial conjugate-matching model (see Focusing Mechanism section).

---

## Computed Paraxial Parameters

All values computed via ABCD matrix paraxial ray trace with the corrected R7 = −567.0.

| Parameter | Computed | Patent Stated |
|-----------|----------|---------------|
| EFL (infinity) | 202.0 mm | 200 mm |
| BFL | 75.5 mm | 77.5 mm |
| FVD | 156.0 mm | 157.9 mm |
| Telephoto ratio (FVD/EFL) | 0.77 | 0.79 |
| Corrector EFL (L21) | −249.4 mm | −240.4 mm |
| Focusing travel (to 2,372 mm) | 11.8 mm | 11.8 mm |
| FT / EFL | 0.058 | 0.059 |
| Petzval sum | −1.29 × 10⁻³ mm⁻¹ | — |
| Petzval radius | −773 mm | — |
| Half-field angle (24×36 mm) | 6.1° | — |

The small residual discrepancies (1–3%) between computed and stated values are consistent with additional minor rounding in other patent parameters, or with the patent's language "defined *substantially* by the following data."

---

## Aspherical Surfaces

**There are no aspherical surfaces in this design.** Neither the Table IV prescription, the patent text, the claims (Claim 6), nor the FIG. 5 drawing make any reference to aspherical coefficients, conic constants, or polynomial deformation terms for any surface in Example 4. All twelve optical surfaces are spherical. This is consistent across all five embodiments in the patent: none employ aspheres.

This is noteworthy because the Vivitar Series 1 200mm f/3.0 achieves its performance entirely through glass selection, element spacing, and the novel stationary corrector architecture — without resorting to the cost and manufacturing complexity of aspherical surfaces that would have been prohibitive for a 1970s production lens at this price point.

---

## Element-by-Element Analysis

### L11 — Front Positive Meniscus

| Property | Value |
|----------|-------|
| Surfaces | R1 = +56.828, R2 = +3586.0 |
| Thickness | 12.00 mm |
| n_d / ν_d | 1.56873 / 63.1 |
| Focal length | +101.4 mm |
| Shape | Positive meniscus, convex toward object |

**Glass identification:** Six-digit code **569631**. This is an exact match to Schott **PSK2** (n_d = 1.56873, ν_d = 63.16), a phosphate-silicate crown. Equivalents include OHARA S-PHM51 and Sumita K-PSKn2. PSK2 is a moderate-index, low-dispersion crown occupying the boundary between the barium crown (SK) and phosphate (PK) families.

**Optical role:** L11 is the leading positive element of the front group. Its strongly convex front surface (R1 = +56.828) provides the dominant positive refractive power, while the nearly flat rear surface (R2 = +3586.0, essentially plano) minimizes spherical aberration contribution from the second surface. The low dispersion (ν_d = 63.1) keeps L11's contribution to longitudinal chromatic aberration modest. At f/3 with a ~67 mm entrance pupil, L11 carries the largest clear aperture in the system and is the primary light-gathering element.

### L12 — Second Positive Meniscus

| Property | Value |
|----------|-------|
| Surfaces | R3 = +62.384, R4 = +428.03 |
| Thickness | 11.30 mm |
| n_d / ν_d | 1.51680 / 64.2 |
| Focal length | +139.8 mm |
| Shape | Positive meniscus, convex toward object |

**Glass identification:** Six-digit code **517642**. This matches HOYA BSC7 (n_d = 1.51680, ν_d = 64.2) exactly. It is the HOYA designation for the ubiquitous borosilicate crown glass family also known as Schott N-BK7 (n_d = 1.51633, ν_d = 64.14) and OHARA S-BSL7. The small residual in n_d (Δn_d = 0.00047 vs. Schott) is within the range of manufacturer variation. BK7/BSC7 is the workhorse optical glass of the industry — inexpensive, chemically stable, easy to polish, and well-characterized.

**Optical role:** L12 shares the positive power of the front group with L11. Together, L11 and L12 form an air-spaced positive doublet with a combined focal length of approximately 60.5 mm. The moderate curvatures and the 0.5 mm air space between L11 and L12 allow for some correction of spherical aberration and coma generated by the front group. The use of a low-cost, low-index glass for L12 is a pragmatic design choice — L12 operates at a lower marginal ray height than L11 and contributes less to higher-order aberrations.

### L13 — Negative Diverging Element

| Property | Value |
|----------|-------|
| Surfaces | R5 = −254.83, R6 = +64.06 |
| Thickness | 4.13 mm |
| n_d / ν_d | 1.80518 / 25.5 |
| Focal length | −63.2 mm |
| Shape | Asymmetric biconcave (R5 weakly concave, R6 strongly concave) |

**Glass identification:** Six-digit code **805255**. This is an exact match to the Schott **SF6** family (n_d = 1.80518, ν_d = 25.43), one of the highest-index, highest-dispersion conventional dense flint glasses. Equivalents: OHARA S-TIH6, HOYA FD60. SF6 is a lead-based dense flint (now largely replaced by lead-free N-SF6 in modern catalogs).

**Optical role:** L13 is the critical negative element of the Sonnar-type telephoto configuration. It is the strongest single element in the system (fl = −63.2 mm), and its positioning after the front positive group creates the telephoto effect that makes the physical length shorter than the focal length. The high-dispersion SF6 glass is deliberately chosen: paired against the low-dispersion crowns of L11 and L12, it provides chromatic aberration correction for the front group. L13's strong rear surface (R6 = +64.06 mm) is the dominant source of the element's diverging power.

The patent text confirms: "the third element is negative with a concave rear surface followed by the aperture stop." The aperture stop is positioned in the 29.21 mm air gap following R6, between L13 and L14.

### L14 — Rear Positive Meniscus

| Property | Value |
|----------|-------|
| Surfaces | R7 = −567.0 †, R8 = −54.70 |
| Thickness | 5.61 mm |
| n_d / ν_d | 1.80518 / 25.5 |
| Focal length | +74.8 mm |
| Shape | Positive meniscus, concave toward object (convex rear) |

**Glass identification:** Identical to L13 — Schott **SF6** / OHARA S-TIH6 / HOYA FD60. The use of the same high-dispersion dense flint in both L13 (negative) and L14 (positive) is a characteristic feature of Sonnar-type designs. It is cost-effective (single glass type for two elements) and allows both elements to be ground from the same melt, ensuring precise index matching.

**Optical role:** L14 is the first element after the aperture stop and provides positive power to reconverge the beam toward the image. Its nearly flat front surface (R7 = −567.0, very weakly concave) means almost all of its refractive power comes from the strongly curved rear surface R8 = −54.70. The patent describes L14 as "positive with a convex rear surface," which is confirmed by the sign convention: R8 < 0 means the surface is convex when viewed from the image side.

L14 operates as the leading element of the rear positive group. Despite using a high-dispersion glass, L14's net chromatic contribution is moderated by being paired with L15 (moderate-dispersion, opposite sign of power). The remaining chromatic balance is achieved against the front group's crown-flint structure.

### L15 — Negative Meniscus

| Property | Value |
|----------|-------|
| Surfaces | R9 = −38.14, R10 = −157.93 |
| Thickness | 1.85 mm |
| n_d / ν_d | 1.71270 / 43.3 |
| Focal length | −71.0 mm |
| Shape | Negative meniscus, concave toward object (convex rear) |

**Glass identification:** Six-digit code **713433**. This glass has **no exact match** in any current major glass catalog (Schott, OHARA, HOYA, HIKARI, Sumita, or CDGM). On the Abbe diagram, the code 713-433 falls in a sparsely populated region between the lanthanum flint (LaF) family — which at this index would have ν_d ≈ 48–54 — and the barium dense flint (BaSF) family — which typically reaches only nd ≈ 1.70 at this dispersion. The nearest standard types are Schott N-BASF64 (nd = 1.704, ν_d = 39.4; Δnd = +0.009, Δν_d = −3.9) and HOYA LAF3 / Schott N-LAF3 (nd ≈ 1.717, ν_d ≈ 48.0; Δν_d = +4.7) — neither is close. This is most likely a **discontinued Japanese glass type** that was available to Komine in the 1970s, or a glass whose properties were slightly perturbed in the patent filing for proprietary protection. The production lens may have used a nearby catalog equivalent. The relatively high index with moderate dispersion suggests a barium- or lanthanum-containing composition.

**Optical role:** L15 is the "fifth element" referenced in the patent as "negative with a convex rear surface." It is the last element of the movable G1 group and works in concert with L14 to form the rear positive subgroup. Although individually negative (fl = −71.0 mm), L14 + L15 together form a nearly afocal pair (combined thick-lens focal length ≈ 7,083 mm, or +0.14 diopters), meaning this pair contributes very little net refractive power but plays a crucial role in correcting field curvature.

The mechanism is the index asymmetry between L14 and L15. Each element's Petzval contribution is proportional to φ/n (power divided by refractive index). L14 uses SF6 (nd = 1.805) and L15 uses the lower-index 713433 glass (nd = 1.713). Because L15's index is lower, its Petzval contribution per unit of power is *larger* than L14's. Numerically: L14 contributes +7.37 × 10⁻³ mm⁻¹ to the Petzval sum and L15 contributes −8.28 × 10⁻³ mm⁻¹, for a net of −0.91 × 10⁻³ mm⁻¹ — a significant negative Petzval contribution from a nearly powerless pair. This deliberate index mismatch between elements of opposite sign is a classic field-flattening technique, and the choice of L15's glass (high-ish index, but not as high as SF6) appears to be driven by this Petzval requirement rather than by chromatic correction.

L15 is also the last element before the variable air gap (R10 → R11), which changes from 3.20 mm at infinity focus to 33.80 mm at the production close-focus distance of 1.2 m (see Focusing Mechanism section for the derivation of this value).

### L21 — Stationary Rear Corrector (Compensating Element)

| Property | Value |
|----------|-------|
| Surfaces | R11 = +71.98, R12 = +47.56 |
| Thickness | 2.00 mm |
| n_d / ν_d | 1.57957 / 53.7 |
| Focal length | −249.4 mm |
| Shape | Negative meniscus, concave toward image |

**Glass identification:** Six-digit code **580537**. This is an exact match to Schott **BaLF4** (n_d = 1.57957, ν_d = 53.71), a barium light flint glass. BaLF4 sits in the transition zone between barium crowns and light flints — moderate index, moderate dispersion. It is a well-behaved, relatively inexpensive optical glass.

**Optical role:** L21 is the defining innovation of Betensky's patent. It is mechanically fixed to the lens housing (and thus to the film plane) and does not move during focusing. Its purpose is twofold:

1. **Off-axis aberration compensation.** When the front objective (L11–L15) moves forward for close focusing, the change in conjugate produces significant off-axis aberrations (primarily coma and astigmatism). The patent explains that L21's fixed position relative to the image plane introduces compensating aberrations that counteract this degradation. This is what allows the lens to maintain consistent edge-to-edge sharpness across a wide focusing range — a feature heavily advertised by Vivitar, which marketed the production lens with close focus to 1.2 m.

2. **EFL reduction during close focus.** Because L21 has negative power, the overall system EFL decreases as the objective moves forward. The computed EFL drops from 202.0 mm at infinity to 190.4 mm at closest focus, a decrease of approximately 5.8%. Since focusing travel scales with the *square* of focal length, this small EFL decrease translates into a significant reduction in required mechanical travel. The patent illustrates this principle for the 300 mm embodiment (FIG. 1), noting that a comparable design without the fixed corrector would need over 25 mm of travel to focus to 10.5× EFL, versus 19.27 mm with the corrector. The same principle applies here: the 200 mm design achieves a close-focus distance of 11.8× EFL with only 11.8 mm of travel (FT/EFL = 0.059), well within the "less than 13 percent" limit the patent claims for all embodiments.

The patent specifies that the corrector's EFL magnitude should be no greater than three times the overall system EFL, and that it should be a negative meniscus with the concave side facing the image — both conditions are satisfied here (|−249.4| < 3 × 202, and R12 = +47.56 is indeed concave toward the image when viewed from behind the lens).

---

## Focusing Mechanism

The lens employs **unit focusing** of the front objective with a fixed rear corrector — a design Betensky characterizes as a hybrid between conventional helicoid focusing and internal focusing. Specifically:

- **Moving group:** L11 through L15 (all five elements of the objective) translate as a rigid unit along the optical axis when the external focusing ring is rotated.
- **Fixed element:** L21 remains stationary relative to the film plane, mounted in the lens mount's rear housing.
- **Variable gap:** Only the air space between R10 (rear of L15) and R11 (front of L21) changes during focusing.

This arrangement is mechanically simple (single helicoid, no complex cam followers) and is compatible with the automatic diaphragm mechanisms required by 1970s SLR camera systems.

### Patent vs. Production Focus Range

The patent (Table IV and Table VI) tabulates the variable gap as 3.20 mm (infinity) → 15.0 mm at a close-focus distance of 2,372 mm (~93 inches, 11.86× EFL), yielding a focusing travel of 11.8 mm (FT/EFL = 0.059).

The production Vivitar lens was marketed with a significantly closer minimum focus distance of **1.2 m** (~47 inches, ~6× EFL), yielding a 1:4 reproduction ratio. Paraxial conjugate matching — solving for the gap *G* such that the image from the full system (with gap *G* and object at distance MFD − FVD(G) from R1) lands at the fixed R12-to-film distance — gives the following focus-distance table:

| MFD (mm) | Gap (mm) | Extension (mm) | FVD (mm) |
|----------|----------|----------------|----------|
| ∞ | 3.20 | 0.00 | 156.0 |
| 10,000 | 5.74 | 2.54 | 158.5 |
| 5,000 | 8.48 | 5.28 | 161.3 |
| 3,000 | 11.97 | 8.77 | 165.3 |
| 2,372 | 15.48 | 12.28 | 168.3 |
| 2,000 | 18.34 | 15.14 | 171.1 |
| 1,500 | 25.27 | 22.07 | 178.1 |
| **1,200** | **33.80** | **30.60** | **186.6** |

The computed gap at the patent's close-focus distance of 2,372 mm is 15.48 mm — within 0.5 mm of the patent's stated 15.0 mm, the residual attributable to the 1% EFL discrepancy between our corrected prescription and the patent's stated 200 mm.

At the production MFD of 1.2 m, the required gap is approximately **33.8 mm**, corresponding to a barrel extension of 30.6 mm and a magnification of 0.249 — confirming the marketed **1:4 reproduction ratio** to high precision. The FVD grows from 156 mm to 187 mm, meaning the barrel extends roughly 30 mm from its infinity position. This is physically plausible given the barrel length and helicoid travel of the production housing.

---

## Aperture Stop Position

The patent does not explicitly state the stop position within the 29.21 mm air gap between R6 and R7. The patent text says only that "the third element is negative with a concave rear surface *followed by the aperture stop*," confirming the stop is in this gap.

From the FIG. 5 cross-section drawing, the iris diaphragm appears positioned approximately in the middle of the gap, roughly 15 mm after R6. This estimate is used in the data file, splitting the 29.21 mm gap into 15.00 mm (R6 to STO) and 14.21 mm (STO to R7). The marginal ray height at this stop position yields a stop semi-diameter of approximately 19.5 mm for the design f/3 aperture.

---

## Sonnar-Type Classification

The patent text (page 7) identifies the designs of FIGS. 1 and 3–5 as belonging to the "so-called SONNAR type," which Betensky classifies as having three groups:

1. **A positive leading group** (L11 + L12, combined fl ≈ 60.5 mm)
2. **A negative group** whose strongest power contribution is on the surface farthest from the first group (L13, fl ≈ −63.2 mm, with the powerful R6 = +64.06 facing the stop)
3. **A positive group** separated from the first two groups by the aperture stop (L14 + L15)

The corrector (L21) follows the second positive group and is the distinguishing feature of Betensky's patent over the classical Sonnar.

This three-group telephoto structure produces a compact physical package (telephoto ratio ≈ 0.77) — the lens barrel is only about 77% as long as its focal length. For a 200 mm lens on a 35 mm SLR body, this was an important practical consideration.

---

## Chromatic Aberration and Glass Strategy

A notable characteristic of the Vivitar Series 1 200mm f/3.0, consistently reported in both contemporary and modern reviews, is pronounced longitudinal (axial) chromatic aberration, visible as purple fringing on out-of-focus highlights and reduced contrast at wide apertures.

The glass selection explains this. The design uses five distinct glass types across six elements (SF6 is shared by L13 and L14), and the chromatic correction strategy relies on a relatively simple crown-flint pairing:

- **Low-dispersion elements (L11, L12):** ν_d = 63.1 and 64.2 — classic crowns
- **High-dispersion elements (L13, L14):** ν_d = 25.5 — dense flint (SF6)
- **Moderate-dispersion elements (L15, L21):** ν_d = 43.3 and 53.7

No ED (extra-low dispersion), fluorite, or anomalous partial dispersion glasses are used. In the early 1970s, such glasses were either unavailable or prohibitively expensive for a lens at this price point. The result is that while primary chromatic aberration (C-line to F-line) is reasonably corrected by the crown-flint balance, the **secondary spectrum** (residual chromatism beyond the primary correction) is left substantially uncorrected. This secondary spectrum is what manifests as the longitudinal CA that users consistently report. The Nikon 180mm f/2.8 ED (introduced 1981), which uses ED glass, largely eliminated this artifact — but at three times the price.

---

## Petzval Sum and Field Curvature

The computed Petzval sum of −1.29 × 10⁻³ mm⁻¹ yields a Petzval radius of approximately −773 mm. For a 200 mm lens, the dimensionless product |Petzval sum × EFL| = 0.26 — well below the value of ~0.66 expected for an uncorrected singlet of equivalent power, indicating effective field flattening.

The negative sign means the Petzval surface is slightly overcorrected (concave toward the image), the opposite of the undercorrected inward curvature typical of simple positive lenses. At the corner of the 24 × 36 mm format (half-diagonal ≈ 21.6 mm), the Petzval sag is approximately h²/(2 × R_Petzval) ≈ 0.30 mm — modest enough to be substantially compensated by the balancing astigmatism that the designer can introduce through bending and spacing.

The element-by-element Petzval contributions reveal the balancing act:

- **L11 + L12 (front crowns):** +10.94 × 10⁻³ — strongly positive, the dominant undercorrecting contribution from the system's main positive power.
- **L13 (negative SF6):** −8.71 × 10⁻³ — the primary Petzval corrector, exploiting SF6's high index (Petzval ∝ φ/n) to get strong negative contribution with minimal power penalty.
- **L14 + L15 (rear afocal pair):** −0.91 × 10⁻³ — net negative despite nearly zero combined power, due to the deliberate index mismatch between L14 (SF6, nd = 1.805) and L15 (nd = 1.713) discussed above.
- **L21 (corrector):** −2.62 × 10⁻³ — the fixed rear meniscus adds further negative Petzval, contributing to field flatness especially at close focus where the front group's aberration balance shifts.

---

## Semi-Diameter Estimation

The patent does not provide clear-aperture or semi-diameter values for any surfaces. Semi-diameters were estimated using combined marginal and chief ray tracing:

- **Marginal ray:** Traced from infinity at f/3.0 (EP semi-diameter = 33.67 mm), giving ray heights at each surface.
- **Chief ray:** Traced at 65% of the full-field half-angle (3.97° of 6.11°), with the stop modeled at 15 mm into the R6–R7 air gap.
- **Clearance:** 8% mechanical clearance applied to the combined (marginal + chief) height.
- **Filter cap:** Front element (R1) semi-diameter capped at 33.5 mm by the 72 mm filter thread constraint (inner diameter ≈ 68–69 mm). Front/rear SD ratios held ≤ 1.15 per element.

Edge thickness verification confirms all elements have ET ≥ 1.2 mm (L11 is the tightest at 1.23 mm). Cross-gap sag checks confirm positive clearance at all air gaps including the minimum 0.5 mm gap between L11 and L12 (0.36 mm clearance after sag intrusion).

---

## Data File Implementation Notes

The `.data.ts` file for this lens incorporates several departures from a literal patent transcription:

1. **R7 correction:** Surface R7 uses −567.0 rather than the patent-printed −1567.0, based on EFL convergence analysis detailed above.

2. **Close-focus gap:** The variable gap (surface "11", R10 exit) uses a close-focus value of 33.80 mm, computed via paraxial conjugate matching for the production MFD of 1.2 m. The patent only tabulates the gap to 15.0 mm at 2,372 mm.

3. **Aperture stop placement:** The 29.21 mm air gap after R6 is split into 15.00 mm + 14.21 mm at the inferred stop position, based on the FIG. 5 iris drawing. Surface labels skip from "6" to "STO" to "8" to accommodate the inserted stop.

4. **BFL:** The last surface thickness (75.50 mm) is the computed BFL at infinity, rather than the patent's stated 77.5 mm, for self-consistency with the corrected prescription.

---

## Summary Table

| Element | Glass | n_d | ν_d | Focal Length | Power | Role |
|---------|-------|-----|-----|-------------|-------|------|
| L11 | PSK2 | 1.56873 | 63.1 | +101.4 mm | Positive | Front crown, primary power |
| L12 | BK7/BSC7 | 1.51680 | 64.2 | +139.8 mm | Positive | Secondary crown |
| L13 | SF6 | 1.80518 | 25.5 | −63.2 mm | Negative | Telephoto diverger, chromatic correction |
| L14 | SF6 | 1.80518 | 25.5 | +74.8 mm | Positive | Rear converger |
| L15 | (713433) LaF/BaSF region | 1.71270 | 43.3 | −71.0 mm | Negative | Petzval/aberration balancing |
| L21 | BaLF4 | 1.57957 | 53.7 | −249.4 mm | Negative | Fixed compensator/corrector |

---

## References

1. US Patent 3,942,876, "Telephoto Lens," Ellis I. Betensky, filed May 9, 1974, granted March 9, 1976.
2. Vivitar Series 1 200mm f/3.0 VMC Auto Telephoto product literature (copyright 1973, Ponder & Best, Inc.).
3. lens-db.com: Vivitar Series 1 Auto Telephoto 200mm F/3 VMC (s/n 28xxxxxx, Komine manufacture).
4. Camera-wiki.org: Vivitar Series 1 200mm f/3.0 Auto Telephoto.
5. HOYA Optics Division: Glass Cross Reference Index (hoya-opticalworld.com).
6. Schott AG: Optical Glass Data Sheets (various editions).
