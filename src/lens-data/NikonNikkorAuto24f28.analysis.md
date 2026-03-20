# US 3,622,227 — NIKKOR-N Auto 24mm f/2.8

## Patent & Production Identification

**Patent:** US 3,622,227  
**Title:** Retrofocus-Type Wide-Angle Camera Lens  
**Inventor:** Yoshiyuki Shimizu (Nippon Kogaku K.K.)  
**Filed:** December 24, 1969 (CIP of abandoned application Ser. No. 611,206, filed December 27, 1966)  
**Granted:** November 23, 1971  

**Production lens:** NIKKOR-N Auto 24mm f/2.8 (1967–1977)  
**Configuration:** 9 elements in 7 groups, all spherical  
**Close-Range Correction (CRC) co-inventor:** Zenji Wakimoto  

The NIKKOR-N Auto 24mm f/2.8 holds a distinctive place in photographic lens history as the first production lens to incorporate what Nikon termed the Close-Range Correction (CRC) system — a floating-element focusing mechanism that maintains aberration correction across the full focusing range. The CRC concept was conceived by Zenji Wakimoto; the base optical design is Yoshiyuki Shimizu's work, described in this patent. The production lens was released in 1967, received multi-layer coating in 1972, was rebranded as "New Nikkor" in 1975, redesigned as the AI Nikkor 24mm f/2.8 in 1977, and continued in production through the AF Nikkor 24mm f/2.8D — all sharing the same fundamental optical formula.

---

## Production Context

Nikon's first-party account of this lens (Kouichi Ohshita, *NIKKOR — The Thousand and One Nights*, Tale No. 14) describes the development context:

> Retrofocus designs shorter than 28mm were, at the time, completely in uncharted territory. The optical design report contained an enormous volume of design data, testifying to the difficulty of the effort. Development took nearly five years from inception to the realization of target performance, progressing through two full prototypes.

The driving technical problem was astigmatism variation at close focus — a fundamental weakness of retrofocus designs. As object distance decreases, astigmatism grows progressively, producing image softness across the field periphery. Prior Nikon wide-angles (e.g., the NIKKOR-H Auto 2.8cm f/3.5, 1960) simply limited the minimum focus distance to 60 cm to avoid this deterioration. Wakimoto's CRC system solved the problem by making the air gap between the sixth and seventh elements variable during focusing, introducing a compensating astigmatism that cancels the close-range degradation.

---

## Patent Analysis — Example I

The patent provides two numerical examples. Example I includes a full Seidel aberration coefficient table and matching aberration plots (FIG. 2), identifying it as the primary design. The prescription is normalized to f = 1.0.

### System Parameters

| Parameter | Normalized (f = 1.0) | Scaled (f = 24 mm) |
|---|---|---|
| Effective focal length | 1.0000 | 24.0 mm |
| Back focal distance | 1.5597 | 37.4 mm |
| BFD / f ratio | 1.56× | — |
| Half-field angle | 42° | — |
| Full field of view | 84° | — |
| Aperture ratio | f/2.8 | — |
| Entrance pupil diameter | 0.357 | 8.57 mm |
| Total optical track | 3.82 | 91.7 mm |
| Close focus (production) | — | 0.30 m |

The BFD of 37.4 mm exceeds the 35 mm minimum required for SLR mirror clearance by a comfortable margin. The image circle half-diagonal at 42° half-field is tan(42°) × 24 = 21.6 mm, consistent with the 35 mm format's 21.63 mm half-diagonal.

### Verified Prescription

The patent's OCR exhibits several sign ambiguities. Three radii required correction based on physical consistency checks against the patent's own element descriptions and the four stated design conditions. All corrections are detailed in the Sign Corrections section below.

| Surface | R | d | n_d | Element | Group |
|---|---|---|---|---|---|
| r₁ | +2.5000 | 0.1125 | 1.62041 | L1 | Front (neg.) |
| r₂ | +0.8958 | 0.2625 | 1.0 | air | |
| r₃ | +3.7500 | 0.2292 | 1.62041 | L2 | Front (neg.) |
| r₄ | −3.7500 | 0.0042 | 1.0 | air | |
| r₅ | **+1.2500** | 0.1125 | 1.62041 | L3 | Front (neg.) |
| r₆ | **+0.4583** | 0.4083 | 1.0 | air | |
| — | STOP | — | — | — | — |
| r₇ | +1.0521 | 0.1667 | 1.62004 | L4 | Rear (pos.) |
| r₈ | −0.7742 | 0.1250 | 1.51823 | L5 | Rear (pos.) |
| r₉ | −1.4542 | 0.1042 | 1.0 | air | |
| r₁₀ | −3.5417 | 0.2208 | 1.78470 | L6 | Rear (pos.) |
| r₁₁ | +1.3500 | 0.0979 | 1.0 | air | |
| r₁₂ | −5.0000 | 0.0417 | 1.78470 | L7 | Rear (pos.) |
| r₁₃ | **+1.1729** | 0.2250 | 1.62041 | L8 | Rear (pos.) |
| r₁₄ | −0.8333 | 0.0042 | 1.0 | air | |
| r₁₅ | +8.0000 | 0.1458 | 1.74400 | L9 | Rear (pos.) |
| r₁₆ | −1.9423 | 1.5597 | 1.0 | air (BFD) | |

Bold entries indicate sign-corrected radii; see the Sign Corrections section for the evidentiary basis.

### Sign Corrections

Three surface radii in the patent's numerical data are ambiguous due to printing/OCR artifacts. The correct signs were determined by cross-referencing against the patent's own physical descriptions and its four design conditions.

**r₅ and r₆ (Element L3):**  
The patent explicitly describes L3 as "a negative meniscus lens with the convex surface directed towards the object." A meniscus convex toward the object requires both surface radii positive (in the standard convention where R > 0 places the center of curvature to the right). The thin-lens power check confirms:

φ_L3 = (n − 1)(1/r₅ − 1/r₆) = (0.6204)(1/1.25 − 1/0.4583) = **−0.857** → Negative ✓

With either radius negative, L3 would be either biconvex/biconcave (not a meniscus) or positive-powered (contradicting the description).

**r₁₃ (Cemented junction L7/L8):**  
The patent describes L7 as a "negative lens" and L8 as a "positive lens" in the cemented doublet pair. With r₁₂ = −5.0000:

- If r₁₃ = +1.1729: φ_L7 = (0.7847)(−0.200 − 0.853) = **−0.826** → Negative ✓
- If r₁₃ = −1.1729: φ_L7 = (0.7847)(−0.200 + 0.853) = **+0.512** → Positive ✗

Only r₁₃ = +1.1729 is physically consistent. This sign also satisfies design Condition (4):

(n₈ − n₇)/r₁₃ = (1.62041 − 1.78470)/(+1.1729) = **−0.1401 < 0** ✓

### Design Conditions Verification

The patent states four conditions governing the design. All four were verified computationally against the corrected prescription:

| Condition | Expression | Values | Result |
|---|---|---|---|
| (1) | 0.5·d₉ < d₁₁ < 2·d₉ | 0.0521 < 0.0979 < 0.2084 | ✓ |
| (2) | (n₃ − n₄)/r₆ ≥ 0 | (1.62041 − 1.62004)/(+0.4583) = +0.00081 | ✓ |
| (3) | \|r₁₀\| > \|r₁₁\| | 3.5417 > 1.3500 | ✓ |
| (4) | (n₈ − n₇)/r₁₃ < 0 | (1.62041 − 1.78470)/(+1.1729) = −0.1401 | ✓ |

**Condition (1)** ensures L6 is positioned approximately midway between the L4–L5 and L7–L8 subgroups within the reversed-Tessar rear section. The patent's printed subscript for the reference gap is ambiguous in the available reproduction (the condition reads as 0.5·d_x < d₁₁ < 2·d_x, where x is unclear). Of the plausible readings, d₉ — the air gap between L5 and L6, i.e., the gap *flanking* L6 on the stop side — is the only physically meaningful interpretation, as it directly expresses the centering of L6 between the two positive subgroups. (d₅, the thickness of L3, also satisfies the inequality numerically but has no physical relationship to L6's placement.) This centering minimizes the chief ray's off-axis height at L6, reducing its contribution to astigmatism while maintaining spherical aberration correction.

**Condition (2)** controls the internal coma produced by oblique rays passing through the front group. The negative curvature of r₆ (the rear of L3, which despite its positive R value in the standard convention presents a concave surface to the diverging ray bundle) increases the angular difference between upper and lower oblique rays, correcting the internal coma generated by L1–L3.

**Condition (3)** requires the front surface of L6 to be more weakly curved than the rear surface. The resulting element "bending" toward the image side ensures that the internal rays exiting the front positive subgroup (L4–L5) receive a strong corrective refraction at r₁₁, compensating the coma of rays passing through L6 at heights above the chief ray.

**Condition (4)** serves a dual purpose: it ensures n₇ > n₈ at the cemented junction (curving the sagittal image surface toward the object for Petzval correction), and it adds coma compensation via the refractive index difference at r₁₃.

---

## Glass Identification

The patent lists nine distinct glass types. Five of the nine elements use the same glass (n_d = 1.62041, ν_d = 60.3), a design choice that significantly reduces manufacturing complexity. The following identifications are based on exact nd/νd matching against Schott, Ohara, and Hoya catalogs, with historical-era equivalents noted where the original 1960s glass has been reformulated.

| Element | n_d | ν_d | Identified Glass | Type | Confidence |
|---|---|---|---|---|---|
| L1, L2, L3, L8 | 1.62041 | 60.3 | **SK16** (Schott) / S-BSM16 (Ohara) | Dense barium crown | Exact match |
| L4 | 1.62004 | 36.3 | **F2** (Schott) / S-TIM2 (Ohara) | Flint | Exact match |
| L5 | 1.51823 | 59.0 | **BSC3** (Hoya) or historical crown equivalent | Borosilicate crown | Near-exact (Δν_d ≈ 0.1) |
| L6, L7 | 1.78470 | 26.1 | **SF56A** (Schott) / S-TIH6 (Ohara) | Dense flint | Exact match |
| L9 | 1.74400 | 44.9 | **LAF2** (Schott) / S-LAM2 (Ohara) | Lanthanum flint | Exact match |

**Note on ν_d for L6:** The patent lists n₆ = 1.78470 for L6 without an accompanying Abbe number. The Abbe number column in the patent prescription is blank for L6's entry (d₁₀ row). However, n₇ = 1.78470 with ν_d = 26.1 is listed for L7. Since the refractive indices are identical to five decimal places, the two elements share the same glass. This inference is further supported by the patent's notation convention, which omits redundant glass data when consecutive elements use the same material, and by the glass catalog match: nd = 1.78470 with νd = 26.1 corresponds exactly to SF56A / S-TIH6, a standard dense flint. The inferred ν_d₆ = 26.1 is treated as established throughout this analysis.

**Note on L5 glass:** The n_d/ν_d pair (1.51823, 59.0) does not match any currently catalogued glass exactly. The closest match is HOYA BSC3 (n_d = 1.51823, ν_d = 58.90, Δν_d = 0.10), a borosilicate crown. This glass occupied the 518/590 position on the glass map — a region where several 1960s catalog types have since been reformulated or discontinued. Given that Nippon Kogaku sourced glass from both Hoya and Ohara in this era, HOYA BSC3 or an equivalent internal designation is the most probable identification.

### Glass Map Placement

The five glass types used in this design occupy distinct positions on the Abbe diagram:

- **SK16** (nd = 1.620, νd = 60.3) — dense barium crown, high in the crown region. Workhorse glass providing moderate refractive power with low dispersion. Used for four of nine elements.
- **F2** (nd = 1.620, νd = 36.3) — classical flint glass. Notably, F2 has almost the same refractive index as SK16 (Δn_d = 0.00037) but far higher dispersion. This pairing enables strong chromatic correction at the L4–L5 cemented interface with minimal variation in Petzval contribution.
- **BSC3** (nd = 1.518, νd = 59.0) — light crown. Low refractive power, used to balance the cemented doublet L4–L5.
- **SF56A** (nd = 1.785, νd = 26.1) — dense flint. Very high refractive index and high dispersion. Provides strong negative power for L6 (the Tessar-type central corrector) and L7 (negative element of the cemented meniscus).
- **LAF2** (nd = 1.744, νd = 44.9) — lanthanum flint. High refractive index with moderate dispersion. Used for L9, the rear field-flattening element, where high power is needed without excessive chromatic contribution.

---

## Design Architecture

### Retrofocus Topology

The lens follows the classical retrofocus (inverted telephoto) arrangement: a front group with negative composite power followed by a rear group with positive composite power, separated by a large air gap containing the aperture stop. This configuration produces a back focal distance significantly longer than the effective focal length — a requirement for SLR cameras where the reflex mirror must clear the rear of the lens.

Paraxial ray-trace verification confirms:

| Group | Elements | EFL (normalized) | EFL (mm) | Power |
|---|---|---|---|---|
| Front group | L1–L3 | −1.013 | −24.3 mm | Negative |
| Rear group | L4–L9 | +1.043 | +25.0 mm | Positive |
| Complete system | L1–L9 | 1.000 | 24.0 mm | — |

The front-to-rear power ratio is approximately −1 : +1, producing a near-unity telephoto ratio but with the BFD extended to 1.56× the focal length.

### Rear Group: Reversed Tessar Configuration

The patent explicitly describes the rear group (L4–L8, excluding L9) as a "Tessar, or triplet lens type arranged oppositely" — that is, a reversed Cooke triplet / Tessar configuration. In the classical Tessar, the sequence from object to image is: positive singlet, negative singlet, cemented positive doublet. The patent notes that in this reversed arrangement, "single convex lenses are made into a cemented lens" — both positive singlet positions of the classical Tessar are expanded into cemented doublets:

- **L4 + L5** (cemented doublet, positive) — corresponding to the single-element rear positive of the conventional Tessar
- **L6** (negative singlet) — the central corrector, retained as a singlet
- **L7 + L8** (cemented doublet, positive) — corresponding to the single-element front positive of the conventional Tessar

This arrangement provides the rear group with an EFL of 33.8 mm (L4–L8 only), sufficient to re-image the virtual image produced by the front group to approximately infinity, as the patent describes. L9 then supplies the final convergence to produce the system's 24 mm focal length.

The computed subgroup focal lengths are:

| Subgroup | EFL (mm) | Function |
|---|---|---|
| L4 + L5 (cemented) | +23.4 | Primary positive power, chromatic correction |
| L6 (singlet) | −29.9 | Central corrector — SA, astigmatism, axial color |
| L7 + L8 (cemented) | +49.9 | Secondary positive power, Petzval correction |
| L9 (singlet) | +50.4 | Field-flattening, final convergence |

### Petzval Sum

The Petzval sum, computed from the full 16-surface prescription, is 0.199 (normalized). For the 24 mm production lens, this corresponds to a Petzval field curvature radius of approximately 121 mm — moderate for a wide-angle lens of this era and consistent with the aberration plots in FIG. 2, which show well-controlled but residual field curvature.

---

## Element-by-Element Analysis

### L1 — Negative Meniscus (convex toward object)

**Glass:** SK16 (n_d = 1.62041, ν_d = 60.3)  
**Surfaces:** r₁ = +2.500, r₂ = +0.896  
**Thin-lens focal length:** −54.0 mm  
**Shape:** Both surfaces convex toward the object; rear surface more strongly curved  

L1 is the outermost element and the first optical surface encountered by incoming light. As a negative meniscus of moderate power, it serves two primary roles. First, it increases the divergence of off-axis ray bundles entering the system, widening the apparent field of view beyond what the rear positive group could accept on its own. Second, the patent states explicitly that "the correction of chromatic aberration is carried out by constituting lens L₁ a negative lens" — L1's negative power in a crown glass introduces under-corrected longitudinal chromatic aberration that is later compensated by the rear group's flint-glass elements. The relatively gentle curvatures and large clear aperture (the production lens uses a 52 mm filter thread) ensure that the strong off-axis chief rays do not induce excessive higher-order aberrations at this surface.

### L2 — Symmetric Biconvex

**Glass:** SK16 (n_d = 1.62041, ν_d = 60.3)  
**Surfaces:** r₃ = +3.750, r₄ = −3.750  
**Thin-lens focal length:** +72.5 mm  
**Shape:** Perfectly symmetric biconvex (r₃ = −r₄)  

L2 is a weakly positive element whose symmetry is noteworthy. A symmetric biconvex element has zero coma at 1:1 conjugate, and near-zero coma contribution for nearby conjugate ratios. In this position — between the strongly negative L1 and L3 — L2 acts as a partial corrector for the front group's overall negative power while minimizing its own off-axis aberration contribution. The symmetric shape also provides a natural break point in the front group's ray bending: the chief ray, which is diverging strongly after L1, is partially corrected in angle before encountering L3.

### L3 — Negative Meniscus (convex toward object)

**Glass:** SK16 (n_d = 1.62041, ν_d = 60.3)  
**Surfaces:** r₅ = +1.250, r₆ = +0.458  
**Thin-lens focal length:** −28.0 mm  
**Shape:** Meniscus with convex toward object; rear surface strongly curved  

L3 is the most powerfully negative element in the front group and carries the primary burden of establishing the retrofocus divergence. Its strongly curved rear surface (r₆ = +0.458, the tightest radius in the front group) creates a large angular spread in the transmitted beam. The patent's Condition (2) specifically addresses r₆, requiring that the refractive index difference (n₃ − n₄) divided by r₆ be non-negative — a condition that governs the correction of internal coma for oblique rays passing through the front group. The strongly negative L3, combined with the moderate negative L1 and weak positive L2, produces the front group's composite focal length of −24.3 mm.

### L4 — Biconvex Positive (cemented with L5)

**Glass:** F2 (n_d = 1.62004, ν_d = 36.3)  
**Surfaces:** r₇ = +1.052, r₈ = −0.774  
**Thin-lens focal length:** +17.3 mm  
**Cemented with:** L5 (doublet D1)  

L4 is the strongest positive element in the system, providing the primary converging power of the rear group. Its glass — F2 flint — represents an unusual design choice: a *flint glass used as a positive element*, the reverse of the standard achromatic doublet configuration (where the positive element is crown and the negative is flint). The L4–L5 cemented doublet is accordingly *not* an individually achromatic pair; the system-level chromatic correction is achieved collectively across all nine elements, with L1's negative crown power providing the primary color-balancing contribution, as the patent explicitly states. The refractive index near-match between F2 (1.62004) and SK16 (1.62041) — a difference of only 0.00037 — means the cemented doublet's Petzval contribution is essentially that of a single-index system, allowing the curvature at the junction to redirect dispersion without introducing additional field curvature.

### L5 — Negative Meniscus (cemented with L4)

**Glass:** BSC3/Crown (n_d = 1.51823, ν_d = 59.0)  
**Surfaces:** r₈ (shared with L4), r₉ = −1.454  
**Thin-lens focal length:** −76.7 mm  
**Cemented with:** L4 (doublet D1)  

L5 completes the first cemented doublet. Its low refractive index (1.518 vs. L4's 1.620) creates a significant index step at the cemented junction (Δn = 0.102), which introduces dispersive correction at the interface — the light passing from the high-dispersion F2 flint into the low-dispersion BSC3 crown experiences differential refraction by wavelength. The doublet's combined EFL of +23.4 mm is positive and provides the primary convergence in the reversed Tessar subgroup. While the doublet is not individually achromatic (the flint-positive, crown-negative configuration is the reverse of the standard achromatic pairing), the cemented surface's dispersive contribution is an essential part of the system-wide chromatic balance.

### APERTURE STOP

Located in the air gap between L5 (rear of the first cemented doublet) and L6 (the central negative corrector), at approximately the midpoint of the d₉ = 2.50 mm air space (in production dimensions). The stop position is characteristic of reversed-Tessar configurations and gives the chief ray nearly zero height at L6, as the patent describes — a critical property for minimizing L6's contribution to astigmatism and distortion while maximizing its spherical aberration correction.

### L6 — Biconcave Negative

**Glass:** SF56A (n_d = 1.78470, ν_d = 26.1)  
**Surfaces:** r₁₀ = −3.542, r₁₁ = +1.350  
**Thin-lens focal length:** −29.9 mm  
**Shape:** Both surfaces concave (biconcave), with the rear surface significantly more strongly curved  

L6 is the central negative corrector of the reversed Tessar, and its role is extensively discussed in the patent. Positioned near the aperture stop where the chief ray height is minimal, L6 corrects three aberrations simultaneously: spherical aberration (through its negative power's opposite sign contribution to third-order SA), axial chromatic aberration (using dense flint glass to introduce compensating dispersion), and astigmatism (through the bending inequality of Condition (3): |r₁₀| > |r₁₁|). The asymmetric bending — with the image-side surface (r₁₁) much more strongly curved — is specifically required by Condition (3) to correct internal coma of rays passing inside the chief ray.

The patent notes that this central placement is essential: when L6 is shifted away from center (violating Condition (1)), the chief ray passes through the element's periphery rather than its center, and both astigmatism and spherical aberration degrade.

### CRC Floating Gap: d₁₁ (between L6 and L7)

The air gap d₁₁ = 0.0979 (2.35 mm in production units) between L6 and L7 is the **CRC variable gap**. According to Nikon's first-party documentation, this gap *narrows* during close focusing. The design of this gap is such that varying its width affects astigmatism while producing "almost no effect on spherical aberration." The close-range correction operates by introducing a counter-astigmatism that cancels the astigmatism naturally generated by the retrofocus configuration at close conjugates.

In operation, both the front section (L1–L6) and rear section (L7–L9) advance toward the object during helicoid rotation; a cam mechanism causes them to move at different rates, compressing d₁₁. The back focal distance increases correspondingly.

### L7 — Biconcave Negative (cemented with L8)

**Glass:** SF56A (n_d = 1.78470, ν_d = 26.1)  
**Surfaces:** r₁₂ = −5.000, r₁₃ = +1.173  
**Thin-lens focal length:** −29.1 mm  
**Cemented with:** L8 (doublet D2)  
**Shape:** Biconcave (r₁₂ < 0, r₁₃ > 0); rear surface much more strongly curved  

L7, using the same dense flint glass as L6, forms the negative half of the second cemented doublet. Its biconcave shape — with a very weakly curved front surface (r₁₂ = −5.000) and a strongly curved cemented junction (r₁₃ = +1.173) — is closely analogous to L6's shape. The n₇–n₈ refractive index step at the junction is large (Δn = 0.164). The patent's Condition (4) governs this junction: (n₈ − n₇)/r₁₃ < 0 ensures that the cemented surface simultaneously corrects sagittal field curvature (via the Petzval contribution of having n₇ > n₈) and internal coma (via the angular deflection at the junction).

### L8 — Biconvex Positive (cemented with L7)

**Glass:** SK16 (n_d = 1.62041, ν_d = 60.3)  
**Surfaces:** r₁₃ (shared with L7), r₁₄ = −0.833  
**Thin-lens focal length:** +18.8 mm  
**Cemented with:** L7 (doublet D2)  

L8 completes the second cemented doublet. The L7–L8 combination is a positive-power doublet (+49.9 mm composite EFL), contributing secondary convergence in the rear group. The doublet's overall shape is a meniscus concave toward the object (both outer surfaces r₁₂ and r₁₄ have negative R), characteristic of the "reversed" orientation described in the patent: in a conventional Tessar, the rear cemented pair would be a meniscus convex toward the image, but here the entire rear group faces the opposite direction, imaging the virtual object created by L1–L3.

### L9 — Biconvex Positive (asymmetric)

**Glass:** LAF2 (n_d = 1.74400, ν_d = 44.9)  
**Surfaces:** r₁₅ = +8.000, r₁₆ = −1.942  
**Thin-lens focal length:** +50.4 mm  
**Shape:** Biconvex (R₁₅ > 0, R₁₆ < 0); front surface very weakly curved, rear surface strongly curved  

L9 is the final element and serves as the field-flattening lens that the patent describes as providing "a predetermined focal length to constitute the whole lens system." Positioned after the reversed-Tessar subgroup (L4–L8), L9 contributes the final convergence needed to bring the system's composite EFL to 24 mm. Its lanthanum flint glass (LAF2, ν_d = 44.9) provides high refractive power without the severe dispersion of the SF56A used in L6–L7, making it effective for producing positive power with manageable chromatic contribution. The strongly curved rear surface (r₁₆ = −1.942) — the closest optical surface to the image plane — acts as the primary field-flattening corrector, adjusting the Petzval curvature and controlling residual astigmatism at the field edges.

---

## Focusing Mechanism: Close-Range Correction

The patent itself describes only the infinity-focus optical design. The CRC mechanism, while implemented in the production lens from its 1967 release, is described operationally in Nikon's published accounts rather than in this patent's numerical data. The system works as follows:

The lens is divided into two groups at the gap between L6 and L7 (d₁₁). During focusing:

1. Both groups move forward (away from the film plane) to focus on closer objects
2. The rear group (L7–L9) advances slightly further than the front group (L1–L6)
3. The gap d₁₁ decreases (narrows) as focus distance decreases
4. The back focal distance d₁₆ increases correspondingly

The d₁₁ gap was specifically designed so that its variation primarily affects astigmatism, with minimal impact on spherical aberration. The production lens achieves a close focus distance of 0.30 m (approximately 1 foot) — substantially closer than the 0.60 m minimum of the earlier NIKKOR-H 2.8cm f/3.5 — while maintaining sharp imagery across the full field at all focus positions.

This mechanism represents a two-gap variable system (d₁₁ and BFD), classifiable as inner focus in modern terminology. Nikon subsequently applied the CRC concept to many of its wide-angle and macro Nikkor lenses, including the 20mm f/2.8, 28mm f/2.8, 55mm f/2.8 Micro, and 85mm f/1.4, among others.

---

## Seidel Aberration Analysis

The patent provides full five-term Seidel aberration coefficients for all 16 surfaces of Example I. The coefficients (I through V) correspond to spherical aberration, coma, astigmatism, Petzval field curvature, and distortion respectively. The system sums are:

| Coefficient | Sum | Interpretation |
|---|---|---|
| Σ I (Spherical) | +0.9418 | Moderate residual; controlled by the reversed-Tessar balance |
| Σ II (Coma) | −0.3215 | Moderate residual; conditions (2)–(4) provide partial correction |
| Σ III (Astigmatism) | −0.0497 | Near-zero; Tessar-type centering of L6 is effective |
| Σ IV (Petzval) | +0.1742 | Positive residual; field curves toward the lens |
| Σ V (Distortion) | +0.2344 | Moderate; typical for retrofocus designs of this era |

The extremely small astigmatism sum (−0.0497) confirms the effectiveness of the reversed-Tessar configuration and the centering condition (1). The patent's aberration plots (FIG. 2) show well-corrected astigmatism across the field, with tangential and sagittal surfaces closely matched out to 42° half-field.

---

## Example II: Comparison

The patent includes a second numerical example (Example II) with different specifications: f = 1.0, B.f = 1.5032, 2Ω = 80°, F/2.8. Example II uses a wider variety of glass types than Example I — nine distinct glass prescriptions rather than five — including glasses at nd/νd values of 1.6228/56.9, 1.58913/61.2, 1.57501/41.3, 1.56248/50.9, and 1.76684/46.2 that do not appear in Example I. The narrower field of view (80° vs. 84°) and shorter back focal distance (1.5032 vs. 1.5597) suggest a somewhat less aggressive retrofocus ratio.

No Seidel coefficient table or aberration plots are provided for Example II, and no production lens has been identified as corresponding to this prescription. Example I, with its full aberration data and matching FIG. 2 plots, is the primary design and the basis for this analysis.

---

## Sources

1. **US Patent 3,622,227** — Yoshiyuki Shimizu, "Retrofocus-Type Wide-Angle Camera Lens," filed Dec. 24, 1969, granted Nov. 23, 1971.
2. **Nikon Corporation** — Kouichi Ohshita, "NIKKOR — The Thousand and One Nights, Tale No. 14: The first lens equipped with the close-range-correction mechanism — NIKKOR-N Auto 24mm f/2.8." Published at imaging.nikon.com/imaging/information/story/0014/.
3. **Nikon Corporation** — Kouichi Ohshita, "NIKKOR — The Thousand and One Nights, Tale No. 27." Published at imaging.nikon.com/imaging/information/story/0027/. References the CRC system's origin and Shimizu's design work.
4. **Schott AG** — Optical Glass Catalog (current edition). Glass designations SK16, F2, SF56A, LAF2.
5. **Ohara Inc.** — Optical Glass Catalog. Equivalent designations S-BSM16, S-TIM2, S-TIH6, S-LAM2.
6. **Hoya Corporation** — Optical Glass Catalog (historical). BSC3 glass identification (nd = 1.51823, νd = 58.90).
