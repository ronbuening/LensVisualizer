# Nikon AI Nikkor 85mm f/1.4S — Patent & Optical Design Analysis

**Patent:** US 4,396,256 — "Large Aperture Ratio, Long Focus Lens"  
**Inventor:** Daijiro Fujie (mass-production design); basic design by Takashi Takiguchi  
**Assignee:** Nippon Kogaku K.K. (now Nikon Corporation)  
**Filed:** August 10, 1981 (JP priority: August 22, 1980)  
**Analyzed embodiment:** Embodiment 1 (Claim 4, FIG. 1/2)

---

## 1. Background and Development History

The AI Nikkor 85mm f/1.4S holds a unique place in Nikkor history as the fastest 85mm lens Nikon had produced for the F-mount at the time of its release in September 1981. According to Nikon's own first-party account (Haruo Sato, *NIKKOR — The Thousand and One Nights*, Tale 89), the lens had an unusual development process. The basic optical design and initial solution were created by Takashi Takiguchi of Nikon's 1st Optical Section, Optical Designing Department. Takiguchi completed the initial design before December 1977, submitting prototype drawings and initiating trial production in January 1978. Responsibility was then transferred to Daijiro Fujie — the inventor named on the patent — who refined the design for mass production, created manufacturing drawings, and shepherded the lens through production approval. Mass production began in September 1979 at Nikon's Sagamihara Plant, with the lens officially released two years later alongside the Nikon F3.

The lens remained in production for approximately 22–24 years. Sato's account states that if sales continued until RoHS implementation, it would have been a favorite "for as many as 22 years." Several third-party sources place production cessation around 2005–2006. The AI AF Nikkor 85mm f/1.4D (IF), designed by Oshita, was released in December 1995 and effectively succeeded it commercially, though the manual-focus AI-S version continued to sell in parallel. Nikon's Super Integrated Coating (SIC) was applied during the production run. A design revision to accommodate RoHS-compliant glass was undertaken near end-of-life, but Sato confirms that "production was discontinued just as the change came about, and the effort came to naught."

### Patent Normalization and Production Identification

All four embodiments in the patent are normalized to a focal length of f = 1.0. For the production 85mm lens, a uniform scale factor of **×85** is applied to all radii of curvature (R), thicknesses and air gaps (d), and semi-diameters (sd). Refractive indices and Abbe numbers are dimensionless and unaffected by scaling.

**Note on embodiment identification:** This analysis examines Embodiment 1, which is the primary numerical example in the patent (the subject of Claim 4 and FIG. 2's aberration plots). All four embodiments share the same 7-element/5-group topology. Embodiments 1–3 share the FIG. 1 cross-section; Embodiment 4 (FIG. 5) has a structurally different L4 rear doublet. No first-party Nikon source confirms which specific embodiment corresponds to the production lens. Embodiment 1 is examined here as it is the primary embodiment and was identified by the requesting party as the production design.

---

## 2. Aspherical Surfaces

**There are none.** The AI Nikkor 85mm f/1.4S is an all-spherical design across all four patent embodiments. The patent text makes no reference to aspherical coefficients, conic constants, or any departure from spherical surfaces. This is consistent with the era — mass-produced aspherical elements were not widely available in Nikon's product line in the late 1970s, and the design achieves its corrections through glass selection, the hybrid Gauss-Sonnar structure, and the CRC floating mechanism.

---

## 3. Lens Construction: 7 Elements in 5 Groups

The lens is a 5-group, 7-element design described by the patent and by Sato as a hybrid Gauss-Sonnar structure. The front group (ahead of the diaphragm) incorporates Sonnar-like characteristics — specifically the decomposition of the traditional cemented triplet into separate positive elements flanking a divergent air lens — while the rear group follows a conventional Gauss doublet + singlet arrangement.

### Scaled Prescription (Embodiment 1 × 85)

| Surface | R (mm) | d (mm) | nd | vd | Medium | Element |
|---------|-------:|-------:|---:|---:|--------|---------|
| r1 | +66.436 | 7.497 | 1.77279 | 49.4 | → glass | L1 front |
| r2 | +346.596 | 1.496 | 1.0 | — | → air | L1 rear |
| r3 | +37.128 | 9.699 | 1.69680 | 55.6 | → glass | L2 front |
| r4 | +96.501 | 1.496 | 1.0 | — | → air | L2 rear |
| r5 | +167.280 | 6.503 | 1.78470 | 26.1 | → glass | L3a front |
| r6 | −120.003 | 2.797 | 1.75520 | 27.5 | → glass | L3a→L3b junction |
| r7 | +23.639 | 19.499 | 1.0 | — | → air | L3b rear |
| *(diaphragm)* | — | — | — | — | — | *aperture stop* |
| r8 | −31.408 | 1.496 | 1.58144 | 40.8 | → glass | L4a front |
| r9 | +79.807 | 8.704 | 1.74443 | 49.4 | → glass | L4a→L4b junction |
| r10 | −39.806 | 0.400 | 1.0 | — | → air | L4b rear |
| r11 | +106.004 | 4.803 | 1.74443 | 49.4 | → glass | L5 front |
| r12 | −322.405 | 42.628 | 1.0 | — | → air | L5 rear → image |

**Total optical track** (front of L1 to image plane): **107.01 mm**  
**Back focal length:** 42.63 mm

---

## 4. Glass Identification

All seven elements use classical optical glasses that were standard catalog types in the late 1970s. Because the patent was filed before the EU RoHS Directive, several of the flint glasses are almost certainly lead-containing types. The Nikon *Thousand and One Nights* account explicitly confirms that glass materials were later changed for RoHS compliance, noting that a design revision was undertaken to reproduce the original aberration correction with the new formulations.

Glass identifications below are inferential, based on matching patent nd/vd values against the HOYA, Schott, and OHARA catalogs using the standard six-digit glass code convention. Nikon historically sourced glass primarily from HOYA and OHARA. In several cases the patent nd/vd values do not exactly match any current catalog entry, which is expected for 1970s-era glasses — particularly lead-containing dense flints that have been reformulated or discontinued.

| Element | nd | vd | Code | Glass Family | Nearest Catalog Equivalent | Δnd/Δvd |
|---------|---:|---:|------|-------------|---------------------------|---------|
| L1 | 1.77279 | 49.4 | 773-494 | Lanthanum dense crown (LaK–LaF border) | HOYA TAF1 / Schott N-LAF34 / OHARA S-LAH66 (773-496) | ≈0/0.2 |
| L2 | 1.69680 | 55.6 | 697-556 | Lanthanum crown (LaK) | HOYA LAC14 / Schott N-LAK14 / OHARA S-LAL14 (697-555) | ≈0/0.1 |
| L3a | 1.78470 | 26.1 | 785-261 | Dense flint (SF) | HOYA FD110 / Schott SF11 / OHARA S-TIH11 (785-257) | ≈0/0.3 |
| L3b | 1.75520 | 27.5 | 755-275 | Dense flint (SF) | HOYA E-FD4 / Schott SF4 / OHARA S-TIH4 (755-275) | exact/≈0 |
| L4a | 1.58144 | 40.8 | 581-408 | Light flint (LF) | HOYA E-FL5 / Schott LF5 / OHARA S-TIL25 (581-409) | ≈0/0.1 |
| L4b | 1.74443 | 49.4 | 744-494 | Lanthanum flint (LAF/LAM) | HOYA NBF1 / Schott (N-LAF35) / OHARA S-LAM60 (743-493) | 0.001/0.1 |
| L5 | 1.74443 | 49.4 | 744-494 | Lanthanum flint (LAF/LAM) | Same as L4b | — |

**Notes on specific identifications:**

**L1** sits right on the boundary between lanthanum crown (LaK, typically vd > 50) and lanthanum flint (LaF, typically vd < 50). The HOYA TAF1 / Schott N-LAF34 family (code 773-496) is the closest cataloged equivalent, with a Δvd of only 0.2. Both the patent value and catalog value are essentially at the LaK–LaF boundary at this index.

**L3a** matches Schott SF11 in refractive index to five decimal places (1.78470 vs 1.78472) but differs in Abbe number by approximately 0.3–0.4 (26.1 vs 25.7–25.8). This may reflect the specific dispersion of a 1970s-era melt or a slightly different formulation that has since been discontinued. The family identification as dense flint is unambiguous.

**L4b/L5** use identical glass. The nearest catalog match is the HOYA NBF1 / OHARA S-LAM60 family (code 743-493), with Δnd ≈ 0.001. These are lanthanum flint glasses with moderate dispersion — not lanthanum crowns, despite the relatively high Abbe number of 49.4.

### Glass Selection Strategy

Sato's first-party account confirms that Takiguchi selected glass not merely for first-order chromatic correction but specifically to minimize second-order dispersion (secondary spectrum). This is evident in several ways:

**The L3 cemented doublet uses two dense flints with very similar Abbe numbers** (vd = 26.1 and 27.5, a difference of only 1.4). This is the key insight behind patent conditions (4)–(6). The cemented surface r6 has a weak positive refractive power contribution — computed as (n₄ − n₃)/r₆ = (1.75520 − 1.78470)/(−1.4118) = +0.0209φ — that generates high-order negative spherical aberration. Because the dispersion of the biconcave element (L3b, vd = 27.5) is only slightly lower than the biconvex element (L3a, vd = 26.1), this chromatic splitting is tuned to selectively increase negative spherical aberration at short wavelengths (g-line, λ = 435.8 nm) relative to the standard d-line (λ = 587.6 nm). This counteracts the over-correction of g-line spherical aberration that arises from the strong negative power of L3.

**The front elements (L1, L2) use high-index lanthanum glasses** (nd = 1.773 and 1.697 respectively) that provide strong positive power with relatively gentle curvatures, limiting the generation of high-order aberrations.

**L4b and L5 use identical glass** (nd = 1.74443, vd = 49.4), simplifying manufacturing logistics.

---

## 5. Element-by-Element Optical Role

### Group 1: L1 — Front Positive Meniscus

| Property | Value |
|----------|-------|
| Shape | Positive meniscus, convex toward object |
| R1, R2 | +66.44 mm, +346.60 mm |
| Center thickness | 7.50 mm |
| Glass | Lanthanum dense crown/flint (nd = 1.77279, vd = 49.4) |
| Thin-lens refractive power | 0.799φ (f ≈ +106.4 mm) |

L1 is the first element the light encounters. As the widest element in the system — handling the full f/1.4 entrance pupil cone — it provides the initial convergence. Condition (1) prescribes 0.75φ < φ₁ < 0.85φ. Exceeding the upper bound would generate excessive annular (zonal) spherical aberration. Falling below the lower bound would reduce convergence and make it impossible to achieve the short back focal length required for compactness.

### Group 2: L2 — Second Positive Meniscus

| Property | Value |
|----------|-------|
| Shape | Positive meniscus, convex toward object |
| R1, R2 | +37.13 mm, +96.50 mm |
| Center thickness | 9.70 mm |
| Glass | Lanthanum crown (nd = 1.69680, vd = 55.6) |
| Thin-lens refractive power | 0.981φ (f ≈ +86.6 mm) |

L2 has a higher thin-lens power than L1 (0.981φ vs 0.799φ). The patent explicitly states that φ₂ > φ₁ is desirable: allotting more refractive power to the second group, which is immediately followed by a divergent air lens, allows the air lens to more effectively negate the high-order negative spherical aberration and astigmatism that L1 and L2 generate. Condition (2) prescribes 0.9φ < φ₂ < 1.1φ.

L2 uses a lanthanum crown with notably lower dispersion than L1 (vd = 55.6 vs 49.4), reducing chromatic aberration contributions from this more powerful positive element.

### The L2–L3 Air Lens (Divergent)

The air space between L2 (rear surface r4) and L3 (front surface r5) functions as a divergent air lens with net power φₐ = −0.215φ, satisfying condition (3): 0 < −φₐ < 0.3φ. This meniscus-shaped air lens is what Sato describes as Takiguchi's key invention — transforming the Sonnar's cemented triplet into a convex element + air lens + convex-concave doublet arrangement that clarified the optical role of each component and dramatically expanded design freedom.

### Group 3: L3 — Cemented Negative Meniscus (L3a + L3b)

| Property | L3a (biconvex) | L3b (biconcave) |
|----------|---------------|----------------|
| Radii | +167.28 / −120.00 | −120.00 / +23.64 |
| Thickness | 6.50 mm | 2.80 mm |
| Glass | Dense flint (1.78470 / 26.1) | Dense flint (1.75520 / 27.5) |
| **Doublet FL** | **−37.0 mm** | |

L3 is the most optically complex group. As a cemented doublet, its net power is strongly negative, performing several critical functions: providing the telephoto ratio (total track is only 1.26× the focal length); correcting spherical aberration via the cemented surface r6; and controlling chromatic spherical aberration through the wavelength-dependent action of two closely matched dense flints.

The rear surface r7 = +23.64 mm is by far the steepest surface in the lens — the primary "stopper surface" that Sato identifies as the Sonnar contribution enabling the f/1.4 aperture. This surface's extreme curvature creates the critical sd/|R| constraint that limits the L3b clear aperture in the data file (sd = 20.5 mm at sd/|R| = 0.867).

### Diaphragm (Aperture Stop)

Located between L3 and L4, in the d7 air gap. Production lens: 9 aperture blades. Entrance pupil SD at f/1.4 ≈ 30.4 mm. Sato notes the actual computed maximum aperture was f/1.39.

**Stop position estimation:** The patent does not specify the exact axial position of the stop within the d7 air gap (19.50 mm). The position was inferred from FIG. 1 at approximately 65% through the gap, yielding a pre-stop distance of 12.67 mm (r7 to stop) and post-stop distance of 6.83 mm (stop to r8). At this position, the paraxial marginal ray height is 16.7 mm, consistent with f/1.4 operation. The post-stop distance is constrained by the sag of the concave L4a front surface (r8), which extends 6.4 mm toward the stop at sd = 19.0 mm, leaving only 0.4 mm clearance.

### Group 4: L4 — Cemented Meniscus Doublet (L4a + L4b)

| Property | L4a (negative) | L4b (positive) |
|----------|---------------|----------------|
| Shape | Biconcave | Biconvex |
| Radii | −31.41 / +79.81 | +79.81 / −39.81 |
| Thickness | 1.50 mm | 8.70 mm |
| Glass | Light flint (1.58144 / 40.8) | Lanthanum flint (1.74443 / 49.4) |
| **Doublet FL** | **+448.2 mm** | |

The outer surfaces of the doublet (r8 and r10) both have negative radii, forming a meniscus envelope with its convex surface toward the image — consistent with the rear half of a double-Gauss design. The very weak net positive power (φ ≈ 0.19φ) means L4 functions primarily as an aberration corrector rather than a power element.

**Embodiment 4 variant:** Embodiment 4 uses a structurally different L4. In that variant, L4b becomes a negative meniscus (R9 = −0.7647, R10 = −0.3953) and both L4a and L4b/L5 use different glasses. This represents a fundamentally different rear-group correction strategy, which is why Embodiment 4 has its own cross-section (FIG. 5).

### Group 5: L5 — Rear Positive Singlet

| Property | Value |
|----------|-------|
| Shape | Biconvex |
| R1, R2 | +106.00 mm, −322.41 mm |
| Center thickness | 4.80 mm |
| Glass | Lanthanum flint (nd = 1.74443, vd = 49.4) |
| Thin-lens refractive power | 0.793φ (f ≈ +107.2 mm) |

L5 is separated from L4 by a thin air gap (d₁₀ = 0.40 mm at infinity) that widens during close focusing — this is the CRC variable gap. L5 provides the final positive convergence needed to bring the image to focus.

---

## 6. Focusing Mechanism: Close-Range Correction (CRC)

The patent describes the focusing method: the entire lens moves forward for close focus (unit focus), while simultaneously L1–L4 move by a slightly larger amount than L5, enlarging the d₁₀ air gap. This is Nikon's **Close-Range Correction (CRC)** system — the first application of CRC to a telephoto lens. The single variable gap creates a simple two-group floating system that compensates for field curvature, coma, and astigmatism shifts at close focus distances. Sato's analysis confirms that even at the 0.85 m minimum focus distance (magnification −1/7.9×), astigmatism remains well corrected with only moderate outer coma at the field edges.

The patent does not provide explicit close-focus spacing values for d₁₀. For the data file, close-focus values were estimated from the 0.85 m MFD: total extension ≈ 10.76 mm (from f²/u at m = −1/7.9), with an assumed CRC differential of approximately 2.0 mm. This yields estimated values of d₁₀ ≈ 2.4 mm and BFD ≈ 51.4 mm at close focus. These are estimates and should be treated accordingly.

---

## 7. Semi-Diameter Estimation

The patent does not provide semi-diameters. These were estimated through a paraxial ray trace verified against the patent's stated specifications.

### Methodology

A paraxial marginal ray was traced from the entrance pupil (y₀ = EP SD = 30.36 mm at f/1.4, u₀ = 0) through all 12 surfaces. A chief ray was traced from y₀ = 0 at u₀ = −tan(14.25°) to determine off-axis beam contributions. Combined semi-diameters were computed as marginal ray height + 60% of the chief ray height (accounting for vignetting at full aperture) + 8% mechanical clearance.

### Constraints Applied

The following physical constraints were verified computationally for every element and air gap:

1. **Edge thickness positivity:** For each element, the sag difference between front and rear surfaces must not exceed the center thickness. All elements pass, with L1 (0.76 mm) and L4b (0.77 mm) being the tightest.

2. **SD consistency:** Front and rear SDs of each element differ by no more than 12% (well within the 25% limit).

3. **sd/|R| ratio:** All surfaces satisfy sd < 0.90 × |R|. The tightest constraint is the stopper surface r7, where sd/|R| = 20.5/23.639 = 0.867.

4. **Cross-gap overlap:** For each air gap, the combined sag intrusion from adjacent surfaces does not exceed the gap thickness. The tightest clearances are the L2–L3 air gap (0.08 mm), the pre-stop gap (0.81 mm), and the post-stop gap (0.43 mm).

5. **72mm filter thread:** The front element SD of 32.0 mm (64.0 mm clear aperture) is consistent with the production lens's 72mm filter diameter.

### Final Semi-Diameter Assignments

| Surface | Role | SD (mm) | Limiting Constraint |
|---------|------|--------:|---------------------|
| r1 | L1 front | 32.0 | 72mm filter; L1 edge thickness |
| r2 | L1 rear → air | 31.0 | Element consistency |
| r3 | L2 front | 28.0 | L2 edge thickness |
| r4 | L2 rear → air | 25.0 | L2–L3 gap clearance |
| r5 | L3a front | 24.5 | L2–L3 gap clearance |
| r6 | L3 junction | 23.0 | L3b/r7 sd/|R| cascade |
| r7 | L3b rear → air | 20.5 | sd/|R| = 0.867; pre-stop gap sag |
| STO | Aperture stop | 16.7 | Paraxial marginal ray height at 65% d7 |
| r8 | L4a front | 19.0 | Post-stop gap sag clearance |
| r9 | L4 junction | 19.0 | Element consistency |
| r10 | L4b rear → air | 20.0 | L4b edge thickness |
| r11 | L5 front | 22.0 | Off-axis beam containment |
| r12 | L5 rear → air | 21.5 | Element consistency |

---

## 8. Aberration Performance (FIG. 2)

The patent includes aberration plots for Embodiment 1 (FIG. 2) at the normalized focal length of f = 1 mm:

**Spherical aberration:** The d-line is well corrected with only a mild residual zonal bulge. The g-line shows slight over-correction at marginal ray heights — the chromatic spherical aberration that conditions (4)–(6) mitigate. Sato confirms this characterization and adds that the g-line is positioned "exactly between the F and d lines," which is an unconventional correction balance chosen specifically to manage chromatic spherical aberration.

**Sine condition (coma):** Violation is visible at larger apertures (above ~f/2.8), indicating residual coma through the outer pupil zones. Typical for fast Gauss-family lenses. Sato notes that sagittal coma — a major weakness of conventional fast Gauss designs — was "dramatically reduced by incorporating aspects of the Sonnar structure."

**Astigmatism:** Meridional and sagittal field curves are well balanced, nearly overlapping across the full field (ω up to 14.25°). A notable achievement for an f/1.4 design.

**Distortion:** Less than approximately 2% across the full field, well controlled by the quasi-symmetric structure.

---

## 9. Conditional Expressions — Verified

All patent conditions were verified computationally against the Embodiment 1 prescription (using the normalized f = 1.0 values). All pass.

| Condition | Expression | Computed | Bounds | Status |
|-----------|-----------|---------|--------|--------|
| (1) | φ₁ | 0.799 | 0.75 – 0.85 | **Pass** |
| (2) | φ₂ | 0.982 | 0.90 – 1.10 | **Pass** |
| (3) | −φₐ | 0.215 | 0 – 0.30 | **Pass** |
| (4) | (n₄−n₃)/r₆ | 0.0209 | 0 – 0.04 | **Pass** |
| (5) | v₄ > v₃ | 27.5 > 26.1 | — | **Pass** |
| (6) | (n₃+n₄)/2 | 1.770 | > 1.7 | **Pass** |
| Claim 3 | v₄ − v₃ | 1.4 | 0 – 3 | **Pass** |
| Compact. | Σd₁₋₆ / Σd₁₋₁₁ | 0.458 | 0.4 – 0.5 | **Pass** |

---

## 10. Paraxial Verification

A full paraxial marginal ray trace through all 12 surfaces confirms:

| Parameter | Computed | Patent | Match |
|-----------|---------|--------|-------|
| EFL (normalized) | 1.000154 | 1.0 | ✓ (0.015%) |
| EFL (scaled) | 85.01 mm | 85 mm | ✓ |
| BFL (normalized) | 0.50178 | 0.5015 | ✓ (0.06%) |
| y at image plane | 0.000284 | 0.0 | ✓ (residual) |
| Half-angle of view | — | 14.25° | 21.59 mm ≈ 35mm half-diagonal |

---

## 11. Design Philosophy — The Gauss-Sonnar Hybrid

Sato's *Thousand and One Nights* account provides the most authoritative description of the design philosophy. Takiguchi's key innovation was the decomposition of the Sonnar front group's cemented triplet (convex-convex-concave) into a structure with clear, separated optical roles:

**Traditional Sonnar front:** Convex₁ — Convex₂ — Concave (cemented triplet)

**Takiguchi's hybrid front:** Convex₁ (L1) — *divergent air lens* — Convex₂-Concave (L3, cemented doublet)

The air lens provides divergent power (φₐ = −0.215φ) that partially negates high-order aberrations from L1/L2, reduces the burden on L3, and creates design freedom impossible with the cemented triplet. Behind the diaphragm, L4 and L5 follow the conventional Gauss rear-group arrangement. The result combines the Sonnar's advantages (stopper surface at r7, sagittal coma reduction) with the Gauss structure's advantages (symmetry for distortion and lateral chromatic aberration correction).

Sato's detailed technical explanation of why this decomposition works is illuminating. He argues that in the original Sonnar's convex-convex-concave cemented triplet, the second convex element serves primarily as a filler — Bertele filled the space with glass rather than air because anti-reflection coatings did not yet exist, and every air-glass surface added ghosting and flare. Once coatings became standard, the cemented triplet could be separated into its functional components. Takiguchi took this further by inserting a divergent air lens in the gap, converting a passive filler into an active aberration corrector.

---

## 12. Production Specifications (Nikon first-party)

| Parameter | Value |
|-----------|-------|
| Focal length | 85 mm |
| Maximum aperture | f/1.4 |
| Construction | 7 elements / 5 groups |
| Angle of view | 28.5° |
| Minimum focus distance | 0.85 m (2.8 ft) |
| Maximum magnification | −1/7.9× |
| Aperture blades | 9 |
| Filter size | 72 mm |
| Lens hood | HN-20 |
| Focus mechanism | CRC (Close-Range Correction) |

---

## Sources

- US Patent 4,396,256, "Large Aperture Ratio, Long Focus Lens," Daijiro Fujie, Nippon Kogaku K.K., August 2, 1983.
- Haruo Sato, "The fast portrait lens photographers longed for — AI Nikkor 85mm f/1.4S," *NIKKOR — The Thousand and One Nights*, Tale 89, Nikon Corporation. https://imaging.nikon.com/imaging/information/story/0089/
- HOYA GROUP Optics Division, Glass Cross Reference Index. https://www.hoya-opticalworld.com/english/products/crossreference.html
- Schott AG, Optical Glass Data Sheets.
- OHARA Corporation, Optical Glass Catalog (2023 edition).
