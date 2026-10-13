# Nikon AI Nikkor 135mm f/2 — Optical Analysis

**Patent:** US 4,062,630  
**Inventor:** Sei Matsui  
**Assignee:** Nippon Kogaku K.K.  
**Filed:** March 11, 1976  
**Granted:** December 13, 1977  
**Embodiment analyzed:** Example V (conventionally identified as the production design; see §11)  
**Production lens:** NEW Nikkor 135mm f/2 (1976–1977) → Ai Nikkor 135mm f/2 (1977–1981) → Ai-S Nikkor 135mm f/2 (1981–2005)

---

## 1. Design Overview

The Nikkor 135mm f/2 is a six-element, four-group telephoto lens. The patent itself classifies it as a "Tele-Sonnar type," while Nikon's later Thousand and One Nights series (No. 30, by Kouichi Ohshita) identifies it more specifically as a "variant Ernostar type." Both labels trace to the same design lineage: Ludwig Bertele's Ernostar (1924) — a fast four-group, four-element configuration — was the ancestor of his Sonnar (1929), which introduced a cemented triplet for improved correction. The telescopic (telephoto) Sonnar family adapted this approach for longer focal lengths. Ohshita describes the Ernostar configuration as one where the Sonnar's cemented triplet is decomposed back into two separated elements, yielding a structurally simpler four-group, four-element arrangement suited to fast telephoto designs. Matsui's variant departs from this baseline by cementing both the second and third groups into doublets, yielding a six-element, four-group system that provides additional degrees of freedom for chromatic and spherical aberration control while retaining the compact asymmetric layout characteristic of the Ernostar family.

The patent prescription is normalized to a 100 mm focal length. The data file stores it uniformly scaled by **1.35** to the marketed 135 mm focal length (every radius, thickness, air gap and semi-diameter × 1.35; there are no aspherical coefficients to transform). The factor is more than a convenience: at × 1.35 the normalized values of Example V return round millimetre figures — r₂ = 420, r₃ = 51.5, r₄ = 30.5, r₅ = 270, r₇ = −47 mm and thicknesses of 11.1, 0.5, 3.7, 17.9, 3.5, 12.0, 1.6, 33.9 and 12.0 mm — which indicates that the examples were designed at 135 mm and divided down for publication. Values in this analysis are given at both patent scale (f = 100 mm) and production scale (f = 135 mm) where appropriate.

### Key Design Parameters (Patent → Production)

| Parameter | Patent (f = 100) | Production (f = 135) |
|---|---|---|
| Effective focal length | 100.00 mm | 135.0 mm |
| Maximum aperture | f/2.0 | f/2.0 |
| Minimum aperture | — | f/22 |
| Full field angle | 18° | 18° |
| Back focal distance | 29.22 mm | 39.4 mm |
| Total track (T.L.) | 100.48 mm | 135.6 mm |
| Telephoto ratio | 1.005 | 1.005 |
| Entrance pupil diameter | 50.0 mm | 67.5 mm |
| Close focus distance | — | 1.3 m |
| Maximum magnification | — | 1:7.5 |
| Aperture blades | — | 9 (straight) |
| Filter thread | — | 72 mm |
| Weight | — | 848 g |

The telephoto ratio of 1.005 means the lens is almost exactly as long as its focal length — the front positive group and rear negative group compress the optical system to a near-unity ratio, but do not achieve the substantially shorter-than-focal-length packaging seen in stronger telephoto designs (where ratios of 0.7–0.8 are typical). The Thousand and One Nights article notes that the Ernostar type's asymmetric configuration provides both a shorter overall length and superior aberration compensation — Ohshita describes the lens as "compact enough for the f/2 large-diameter lens."

---

## 2. Aspherical Surfaces

**There are none.** All ten optical surfaces in Example V are spherical. The patent text provides only radii of curvature for each surface — no conic constants, no polynomial aspherical coefficients, and no mention of aspherical figuring appears anywhere in the document across any of its five examples. This is entirely consistent with Nippon Kogaku's design practice of the mid-1970s: aspherical surfaces in consumer lenses were still uncommon, and the Ernostar variant's cemented-doublet approach provided sufficient correction for f/2 at 135 mm without requiring them.

---

## 3. Prescription and Optical Layout

The ten surfaces, front to rear, define six elements arranged in four air-separated groups. The table is at patent scale (f = 100 mm); the data file stores each R and d multiplied by 1.35:

| Surface | R (mm) | d (mm) | n_d | Element |
|---|---|---|---|---|
| r₁ | +58.015 | 8.22 | 1.717 | L1 (entry) |
| r₂ | +311.111 | 0.37 | air | L1 (exit) |
| r₃ | +38.148 | 2.74 | 1.62606 | L2 (entry) |
| r₄ | +22.593 | 13.26 | 1.58913 | L2→L3 cemented junction |
| r₅ | +200.000 | 2.59 | air | L3 (exit) |
| r₆ | ∞ (flat) | 8.89 | 1.74 | L4 (entry) |
| r₇ | −34.815 | 1.19 | 1.71736 | L4→L5 cemented junction |
| r₈ | +22.797 | 25.11 | air | L5 (exit) |
| r₉ | +63.661 | 8.89 | 1.71736 | L6 (entry) |
| r₁₀ | +624.694 | BFD | air | L6 (exit) |

**Note on r₃:** The OCR text layer of the Example V table (column 4) renders r₃ as "38.48," but the printed page reads 38.148 both there and in Claim 8 (column 6). The Claim 8 value produces EFL = 100.00 mm (matching the patent's stated focal length), while the OCR variant yields EFL ≈ 101.4 mm — confirming that 38.148 is correct and "38.48" is a scanning artifact.

The patent neither tabulates nor describes the aperture stop; its only evidence is Fig. 1, which draws the diaphragm as two bars in the long d₈ air space behind the cemented negative member (L4 + L5), not between Groups II and III. Measured on the 300 dpi drawing (16.07 px/mm from the r₈–r₉ vertex spacing), the bars stand 8.3 mm behind the r₈ vertex at patent scale. The data file therefore splits d₈ = 33.90 mm as 11.2 mm (r₈ → STO) + 22.70 mm (STO → r₉) at production scale. The split is a figure measurement, not a patent value. It is self-consistent: the exact f/2 marginal ray has a height of 15.7 mm at that plane, and the drawn half-opening scales to 16.5 mm. With the stop here the entrance pupil lies deep inside the lens (about 109 mm behind the front vertex), so the full-field chief ray crosses the front element 17.5 mm below the axis and the corner bundle is trimmed by the L1 and L6 rims — ordinary mechanical vignetting for a fast Sonnar-type telephoto.

---

## 4. Element-by-Element Analysis

### Group I — L1: Front Positive Meniscus

| Property | Value |
|---|---|
| Shape | Positive meniscus, convex toward object |
| Radii | R₁ = +58.015, R₂ = +311.111 |
| Glass | n_d = 1.717, ν_d = 48.1 |
| Center thickness | 8.22 mm (patent) / 11.1 mm (production) |
| Focal length | +98.1 mm (patent) / +132.5 mm (production) |

**Glass identification:** The n_d/ν_d pair (1.717 / 48.1) matches OHARA S-LAM3 closely enough for a coefficient-backed Sellmeier label. This high-index moderate-dispersion glass sits near the boundary between lanthanum crowns and dense flints on the Abbe diagram.

**Optical role:** L1 is the primary converging element at the front of the system. Its individual focal length (+98.1 mm) is close to the system focal length (+100 mm), but in a telephoto arrangement this comparison is misleading: the rear negative group partially cancels the front group's convergence, so L1 must contribute far more power than the system's net figure suggests. Within the front positive group (f = +45.3 mm), L1 provides roughly half the total power. Its strong front curvature (R₁ = +58) combined with a weak rear surface (R₂ = +311) gives a deeply bent meniscus that minimizes spherical aberration contribution while introducing the convergence needed to feed the downstream groups. The high refractive index (1.717) reduces surface curvatures for a given power, which further controls higher-order aberrations at f/2. This element bears the full entrance pupil diameter and is the most mechanically prominent component of the lens.

### Group II — L2 + L3: Achromatic Cemented Doublet

#### L2: Negative Meniscus

| Property | Value |
|---|---|
| Shape | Negative meniscus, convex toward object |
| Radii | R₃ = +38.148, R₄ = +22.593 |
| Glass | n_d = 1.62606, ν_d = 39.1 |
| Center thickness | 2.74 mm (patent) / 3.7 mm (production) |
| Focal length | −94.9 mm (patent) / −128.2 mm (production) |

**Glass identification:** Patent coordinate 626391, a medium-index barium flint. The public CDGM H-BaF8 row is a coefficient-backed code equivalent, but the patent does not identify the supplier.

#### L3: Positive Meniscus

| Property | Value |
|---|---|
| Shape | Positive meniscus, convex toward object |
| Radii | R₄ = +22.593, R₅ = +200.000 |
| Glass | n_d = 1.58913, ν_d = 61.2 |
| Center thickness | 13.26 mm (patent) / 17.9 mm (production) |
| Focal length | +42.1 mm (patent) / +56.8 mm (production) |

**Glass identification:** Matches both OHARA S-BAL35 and HOYA BACD5 with residuals of Δn_d = −0.00013, Δν_d = 0.0. This is a barium crown with low dispersion. Six-digit code: 589/612.

**Doublet optical role:** The L2+L3 cemented pair has a combined focal length of +81.2 mm (patent) / +109.6 mm (production) — net positive, as required by the patent's description of the "second lens member having positive refractive power." The Abbe number difference of Δν = 22.1 (well exceeding the patent's condition of Δν > 14) makes this a textbook achromatic doublet: the higher-dispersion flint (L2, ν_d = 39.1) provides negative power to cancel the chromatic contribution of the lower-dispersion crown (L3, ν_d = 61.2).

L3 is the single strongest positive element in the entire system at +42.1 mm focal length, and at 13.26 mm it is also the thickest. Its thick-lens focal length differs from the thin-lens approximation by 2.7%, underscoring the importance of thick-lens computation for elements of this proportion.

The cemented surface (r₄ = +22.593) is a steeply curved junction that is critical for chromatic correction. Because both surfaces of L2 are convex toward the object (a meniscus bent strongly concave toward the image), the junction surface refracts light sharply between the flint and crown media, generating the chromatic disparity that balances longitudinal color across the visible spectrum.

### Group III — L4 + L5: Monochromatic Correction Doublet

#### L4: Plano-Convex Positive

| Property | Value |
|---|---|
| Shape | Plano-convex, flat front, convex toward image |
| Radii | R₆ = ∞, R₇ = −34.815 |
| Glass | n_d = 1.74, ν_d = 28.2 |
| Center thickness | 8.89 mm (patent) / 12.0 mm (production) |
| Focal length | +47.0 mm (patent) / +63.5 mm (production) |

**Glass identification:** HOYA's obsolete FD3 row (`nd = 1.739999`, `νd = 28.245`) reproduces the patent's
740/282 coordinate and supplies its coefficient-backed dispersion curve. It is used as a catalog equivalent; the
production supplier is unspecified. FD110 is a different HOYA glass at code 785257 and was the wrong prior label.

#### L5: Biconcave Negative

| Property | Value |
|---|---|
| Shape | Biconcave |
| Radii | R₇ = −34.815, R₈ = +22.797 |
| Glass | n_d = 1.71736, ν_d = 29.5 |
| Center thickness | 1.19 mm (patent) / 1.6 mm (production) |
| Focal length | −19.0 mm (patent) / −25.7 mm (production) |

**Glass identification:** The five-decimal index value 1.71736 matches HOYA E-FD1-W exactly. The rounded value (1.717 / 29.5) also corresponds to Schott SF1, OHARA S-TIH1, and HOYA SF1. Given Nippon Kogaku's established sourcing relationships in the 1970s, Schott SF1 and/or its HOYA equivalent are the most likely production glasses. Six-digit code: 717/295.

**Doublet optical role:** The L4+L5 cemented pair has a combined focal length of −32.5 mm (patent) / −43.8 mm (production) — a strong net negative power that forms the diverging rear component of the telephoto arrangement. This doublet is the most optically distinctive feature of the design.

Unlike Group II's conventional achromatic doublet, Group III uses two dense flint glasses with nearly identical Abbe numbers (ν₄ = 28.2, ν₅ = 29.5, Δν = 1.3). The patent specifies this tight match explicitly: the condition 5 > (ν₅ − ν₄) > 0.5 is central to the invention's claims. Because both elements disperse light at nearly the same rate, the doublet introduces almost no net longitudinal chromatic aberration of its own. Its purpose is instead primarily *monochromatic*: the cemented junction at r₇ = −34.815 creates a strong refractive index discontinuity (1.74 → 1.71736) at a surface whose negative radius means it is concave toward the object and convex toward the image.

The patent is explicit about the importance of this surface orientation. It states that the positive lens L4 has its "convex surface faces the image side, whose radius of curvature r₇ < 0," and that if the cemented surface were instead convex toward the object side, "the efficiency as above mentioned would be reduced" and "the chromatic aberration of the entire lens system cannot be balanced." In other words, the sign of r₇ is not a free parameter — it is a hard constraint of the design. The patent explains that a cemented surface convex toward the object would produce *excessive* correction of g-line spherical aberration, which would then force an unfavorable trade-off in the system's overall chromatic balance. By making r₇ < 0 (convex toward the image), Matsui achieved the opposite: a controlled *reduction* of g-line spherical overcorrection.

In concrete terms: at f/2, the marginal ray passes through a very steep angle at this cemented surface. The index step, though small (Δn = 0.023), occurs at a surface with significant curvature (R = −34.815), producing a non-trivial refractive effect that preferentially bends short-wavelength (g-line, 435.8 nm) rays differently from long-wavelength rays. By using two glasses with matched chromatic properties but different refractive indices, Matsui obtained a surface that acts as a spherical aberration corrector for the blue end of the spectrum without disturbing the system's overall longitudinal color balance. This is the key innovation that allowed Nippon Kogaku to achieve f/2 — a full stop brighter than the f/2.8 telephoto lenses of the prior art.

The patent further requires that both ν₄ and ν₅ be less than 35, ensuring that the Group III glasses are genuine dense flints rather than lighter flints that might provide the same Abbe number difference but with less favorable higher-order chromatic behavior.

### Group IV — L6: Rear Positive Meniscus

| Property | Value |
|---|---|
| Shape | Positive meniscus, convex toward object |
| Radii | R₉ = +63.661, R₁₀ = +624.694 |
| Glass | n_d = 1.71736, ν_d = 29.5 |
| Center thickness | 8.89 mm (patent) / 12.0 mm (production) |
| Focal length | +98.2 mm (patent) / +132.5 mm (production) |

**Glass identification:** Same glass as L5 — HOYA E-FD1-W / Schott SF1 family. Six-digit code: 717/295.

**Optical role:** L6 sits behind the aperture stop, separated from Group III by the largest air gap in the system (25.11 mm patent / 33.9 mm production); Fig. 1 draws the diaphragm in the front third of that gap, leaving about 22.7 mm (production) between the iris and L6. This element serves two functions. First, it provides positive power that works together with the front groups to establish the system's 100 mm effective focal length. Second, its position well behind the stop gives it strong leverage over off-axis aberrations — particularly field curvature, astigmatism, and distortion. The choice of a dense flint glass (ν_d = 29.5) for this rear positive element is unusual; most telephoto designs use crown or lanthanum crown glass in positive elements to minimize chromatic contribution. Here, the use of a high-dispersion glass in L6 works in concert with the chromatic design of Group III to maintain the overall balance: since Groups III and IV are both composed of dense flints with similar dispersion, their chromatic contributions tend to cancel in the aggregate, leaving the primary chromatic correction to the conventional achromat in Group II.

---

## 5. Telephoto Structure

The system divides cleanly into a positive front section and a negative rear section, the hallmark of the telephoto type:

| Subsystem | Focal Length (patent) | Focal Length (production) |
|---|---|---|
| Front (Groups I + II) | +45.3 mm | +61.2 mm |
| Rear (Groups III + IV) | −77.4 mm | −104.5 mm |
| Whole system | +100.0 mm | +135.0 mm |

The front group's focal length (+45.3 mm) is less than half the system focal length, meaning it converges light aggressively. The rear group then diverges this converging beam, extending the effective focal length while maintaining a compact physical package. The air gap between the two sections (d₅ = 2.59 mm patent / 3.5 mm production) is remarkably small, placing the front and rear groups close together; there is no room for an iris there, and Fig. 1 draws the diaphragm behind the negative doublet instead, in the long d₈ space.

The back focal distance of 29.2 mm (patent) scales to 39.4 mm in production — approximately 7 mm shorter than the 46.5 mm Nikon F-mount flange focal distance. This means the last optical surface (r₁₀) protrudes roughly 7 mm past the lens mount flange into the camera's mirror box, which is typical of telephoto lenses. The remaining 39.4 mm from the rear element to the film plane provides adequate clearance for the reflex mirror.

---

## 6. Glass Selection Philosophy

The six elements use only four distinct glass types:

| Glass Code | n_d | ν_d | Elements | Catalog Match |
|---|---|---|---|---|
| 717/481 | 1.717 | 48.1 | L1 | OHARA S-LAM3 |
| 626391 | 1.626 | 39.1 | L2 | Barium flint; vendor unresolved |
| 589/612 | 1.589 | 61.2 | L3 | OHARA S-BAL35 / HOYA BACD5 |
| 740/282 | 1.740 | 28.2 | L4 | HOYA FD3 catalog equivalent; supplier unspecified |
| 717/295 | 1.717 | 29.5 | L5, L6 | HOYA E-FD1 / Schott SF1 |

Several observations merit attention. First, no glass in this design has anomalous partial dispersion (APD). There are no ED (extra-low dispersion) elements, no fluorite, no fluorophosphate crowns. The design predates Nikon's widespread adoption of ED glass in telephoto lenses, which began with the Ai Nikkor 300mm f/2.8 ED (IF) in 1977 — the same year the 135mm f/2 received its AI update. Second, the glass palette is heavily weighted toward flints: of the four distinct glass types, two are dense flints (L4 at ν_d = 28.2 and L5/L6 at ν_d = 29.5), one is a regular flint (L2 at ν_d = 39.1), and one is a barium crown (L3 at ν_d = 61.2). L1's lanthanum-type glass (ν_d = 48.1) sits at the boundary between crown and flint families. This heavy use of high-index, high-dispersion glass is characteristic of Sonnar-derived designs where the rear group's negative power demands high-index materials to control curvatures. Third, L5 and L6 share the same glass type despite occupying different groups and serving different optical functions. This is an economical choice that simplifies manufacturing and procurement while exploiting the fact that both elements benefit from high refractive index and high dispersion for their respective roles.

The glass identifications given here are inferential, based on catalog matching of the patent's n_d and ν_d values. Nippon Kogaku maintained relationships with multiple glass suppliers (primarily HOYA, OHARA, and Schott in this era), and the actual production glass may have been any equivalent within the tolerance of the catalog match. The five-decimal precision of n_d = 1.71736 for L5 and L6 most closely matches HOYA's E-FD1-W specification, but the rounded catalog equivalent (Schott SF1, OHARA S-TIH1) is equally plausible.

---

## 7. Petzval Sum and Field Curvature

The surface-by-surface Petzval sum, computed as Σ(n′ − n) / (n · n′ · R), yields:

**Petzval sum = 0.00125 mm⁻¹** (at patent scale), corresponding to a Petzval radius of **800 mm** (patent) / **1,080 mm** (production).

Normalized to the focal length, the Petzval sum × EFL = 0.125. For context, a "flat field" design targets this product near zero, while a value of 0.125 indicates moderate inward field curvature. This is typical and acceptable for a fast telephoto of this era, where the narrow field angle (±9°) means the Petzval curvature produces only modest image degradation at the field edge.

The dominant positive Petzval contributor is surface r₃ (+0.01009), the steeply curved front of L2, while the dominant negative contributor is surface r₈ (−0.01832), the rear of the biconcave L5. The balance between these two strongly curved surfaces, mediated by the other eight surfaces, determines the field curvature characteristics.

---

## 8. Focusing Mechanism

The AI Nikkor 135mm f/2 uses **unit focusing** (all-element focusing). The entire optical assembly translates forward along the optical axis as the focus ring is turned toward closer distances. No internal air gaps change during focusing — only the back focal distance varies.

This is confirmed by three independent lines of evidence. First, the patent provides no variable-gap tables for different object distances, which is standard for unit-focus designs. Second, the Nikon Thousand and One Nights article (No. 30) explicitly states that the lens uses "all-element-focusing." Third, the mechanical construction of the lens — a heavy helicoid that moves the entire barrel — is consistent with unit focusing.

At the minimum focus distance of 1.3 m, the Gaussian calculation (accounting for the 3.47 mm principal plane separation at patent scale / 4.68 mm production) yields a focus extension of approximately 18.1 mm (production scale) and a reproduction ratio of 1:7.5 — matching the manufacturer's published maximum magnification specification exactly. The Thousand and One Nights article notes that at closer focusing distances, spherical aberration and coma become less fully corrected — a characteristic limitation of unit focusing with highly asymmetric (non-Gauss) lens types. However, the article presents this as a deliberate feature rather than a flaw: the residual aberrations at close range produce the smooth, melting bokeh transitions that made this lens famous among portrait photographers.

---

## 9. Patent Design Conditions

The patent claims five mathematical conditions that constrain the relationship between the glasses in Groups II and III. All five are satisfied by Example V:

| Condition | Requirement | Example V Value | Status |
|---|---|---|---|
| η₄ > η₅ | L4 index > L5 index | 1.740 > 1.717 | ✓ |
| 5 > (ν₅ − ν₄) > 0.5 | Abbe number difference tightly bounded | 1.3 | ✓ |
| 35 > ν₄ | L4 is a dense flint | 28.2 | ✓ |
| 35 > ν₅ | L5 is a dense flint | 29.5 | ✓ |
| (ν₃ − ν₂) > 14 | Group II has sufficient chromatic leverage | 22.1 | ✓ |

The first four conditions together ensure that Group III operates as a monochromatic spherical aberration corrector (specifically for short-wavelength light) rather than as a chromatic corrector. The fifth condition ensures that Group II carries sufficient achromatic correction to compensate.

---

## 10. Historical Context

The Nikkor 135mm f/2 was released in 1976 (as the NEW Nikkor Auto 135mm f/2, per the Thousand and One Nights article; some secondary sources date the initial K-type variant to 1975) and remained optically unchanged through its AI (1977) and AI-S (1981) incarnations, with only mechanical modifications between versions. It was designed by Sei Matsui, who was also responsible for the Nikkor 180mm f/2.8 — a design lineage that the Thousand and One Nights article explicitly acknowledges.

Approximately 43,000 units of the manual-focus 135mm f/2 were manufactured across all three versions, of which roughly 7,500 were the AI variant described here. The lens was succeeded in 1990 by the AF DC-Nikkor 135mm f/2D, a fundamentally different 7-element, 6-group design incorporating rear focusing and the Defocus Control mechanism.

The patent's claim that "conventional telephoto lenses have not been realized with a relative aperture exceeding 1:2.8" refers to the state of the art circa 1975. Matsui's innovation — the near-isochromatic doublet in Group III — was specifically developed to overcome the g-line spherical aberration problem that had been the limiting factor for faster telephoto designs. The success of this approach is evident in the aberration plots for Example V (Figs. 6a–6c), which show well-controlled spherical aberration out to f/2 with only modest zone structure in the g-line correction.

---

## 11. Verification Notes

All numerical values in this document were independently verified by paraxial ray trace using the ABCD matrix method. Key verification results:

- Computed EFL: 99.997 mm (patent states 100 mm; discrepancy 0.003%)
- Computed BFD: 29.215 mm (patent states 29.22 mm; discrepancy 0.02%)
- Computed ΣD: 71.260 mm (patent states 71.26 mm; exact match)
- Computed telephoto ratio: 1.0048 (patent states 1.005; consistent to rounding)
- Marginal ray trace BFD: 29.215 mm (cross-checks matrix method exactly)
- Principal plane separation: 3.47 mm (patent scale) / 4.68 mm (production)
- MFD magnification: 1:7.5 (matches JAPB-published manufacturer spec exactly)
- Focus extension at MFD 1.3 m: 18.1 mm (production) / 13.4 mm (patent scale)
- BFD at close focus: 42.62 mm (patent scale) / 57.54 mm (production scale, as stored; a calculated value — the patent publishes no finite-distance data)
- All five patent design conditions verified as satisfied
- r₃ value confirmed as 38.148 per Claim 8 (OCR "38.48" in main text is a scanning artifact; yields EFL ≈ 101.4 mm, inconsistent with patent's stated f = 100 mm)

Element focal lengths were computed using the thick-lens ABCD method rather than thin-lens approximations. For L3, the thickest element (d = 13.26 mm), the thick-lens value (+42.1 mm) differs from the thin-lens approximation (+43.2 mm) by 2.7% — a meaningful correction that justifies the thick-lens approach.

Semi-diameters are not published in the patent. Surfaces 6, 7, 9 and 10 follow rims measured on Fig. 1 (300 dpi, 16.09 px/mm; the single drawing serves all five examples, and its vertex spacings follow Example V within 0.7 mm at patent scale): the L4/L5 common rim scales to 25.8 mm and the L6 rim to 17.5 mm at production scale. Surfaces 1–5 and 8 keep the earlier ray-trace estimates (× 1.35), which agree with the drawn rims (35.5, 31.8, 29.1 and 18.0 mm for L1, L2, L3 and the r₈ curve end) within about 15 %. The cemented junction r₄ is held at sd = 27.4 mm by the renderer's rim-slope limit sd/|R| ≤ 0.90 (|R₄| = 30.5 mm), short of the drawn L3 rim. An exact real-ray trace at f/2 needs 33.75 / 32.83 / 30.28 / 26.34 / 24.71 / 23.13 / 20.70 / 16.72 / 11.89 / 10.17 mm on surfaces 1–10 and clears every stored value; the chief ray that reaches the 21.6 mm image corner leaves at 8.97°, matching the patent's 2W = 18°.

**Note on Example V as the production design:** The patent contains five numerical examples, all sharing the same six-element, four-group structure at f = 100 mm, f/2.0, 2W = 18°. Example V is conventionally identified as the production prescription because it is the final and most refined example in the patent, its aberration performance (Figs. 6a–6c) is arguably the best balanced among the five, and its glass selection (particularly the use of matched dense flints in Group III) most closely aligns with the patent's stated design objectives. The × 1.35 round-number pattern noted in §1 appears in all five examples (for instance r₅ = 240 mm in Example IV and r₇ = −60 mm, r₉ = 72 mm in Example III), so it confirms the 135 mm design scale but does not discriminate between them. However, Nikon has never publicly confirmed which example was manufactured, and the optical prescriptions of all five examples are structurally similar enough that definitive identification would require physical measurement of a production lens.

---

*Analysis prepared from US Patent 4,062,630 (Example V), Nikon "Thousand and One Nights" No. 30, JAPB Nikkor Ai 135mm f/2 data sheet, and independent paraxial computation. Glass identifications are inferential from catalog matching and should be understood as best-confidence assignments, not manufacturer-confirmed specifications.*
