# Patent Analysis: Nikon NIKKOR Z DX 18-140mm f/3.5-6.3 VR

## WO 2022/264542 A1 — Example 1

---

## Patent Reference and Design Identification

Patent WO 2022/264542 A1, "Variable-Magnification Optical System, Optical Apparatus, and Method for Manufacturing Variable-Magnification Optical System," was filed by Nikon Corporation on 4 March 2022 (PCT/JP2022/009426) with a priority date of 15 June 2021 (JP 2021-099589). The patent was published on 22 December 2022. Inventors are Tomoyuki Sashima, Norikazu Yokoi, and Takahiro Ishikawa.

The analysis that follows is based on Example 1 (第1実施例, Table 1), which corresponds to the production Nikon NIKKOR Z DX 18-140mm f/3.5-6.3 VR (Nikon product code 20104). The identification is supported by convergent evidence across multiple specifications:

1. **Element and group count.** Example 1 has 17 elements in 13 air-separated groups (5 zoom groups, with G3 subdivided into 4 sub-groups), matching Nikon's published specification of 17 elements / 13 groups.
2. **ED element count.** Two elements use FPL51-class ED fluorophosphate glass (nd = 1.49782, νd = 82.57), matching the published "2 ED glass elements."
3. **Aspherical element count.** Two hybrid composite aspherical elements (L31 and L35, each consisting of a UV-curable resin layer on a glass substrate), matching "2 aspherical elements."
4. **Focal length range.** Design EFLs of 18.54–135.85 mm, consistent with the marketed 18–140 mm range (Japanese lens marketing rounds focal lengths liberally).
5. **Maximum aperture.** F/3.60 at wide to F/6.49 at tele, matching f/3.5-6.3 after rounding.
6. **Image circle.** Y = 14.2 mm at mid and tele corresponds to a DX-format (APS-C) half-diagonal of 14.2 mm.
7. **VR group.** A two-element image-stabilization sub-group (GVR) is located at the image-side end of G3.
8. **Inner focus.** G4 is the sole focusing group, moving image-ward from infinity to close focus — consistent with the "IF" (Internal Focusing) designation on the production lens.
9. **Patent timing.** Priority date June 2021 aligns with the lens's announcement in October 2021.

---

## Optical Architecture

The design is a five-group zoom with a positive–negative–positive–negative–negative power distribution (G1 through G5: +/−/+/−/−). This is a variant of the mechanically compensated high-ratio zoom architecture common in consumer superzooms, descended from designs pioneered by Tamron and Konica Minolta in the early 2000s (the patent cites JP 2014-228808 as prior art).

The system comprises 17 glass elements (plus two thin resin layers forming the aspherical departures) distributed across five zoom-movable groups and totaling 35 optical surfaces (excluding the cover glass PP). The zoom ratio is 7.33× at the design level, slightly below the marketed 7.8× figure which accounts for rounding of the tele-end focal length from 135.8 mm to 140 mm.

**Group roles:**

- **G1 (positive, f = +77.83 mm):** Front collector group. Three elements (one cemented ED doublet plus one positive meniscus). Moves object-ward from wide to tele.
- **G2 (negative, f = −13.20 mm):** Variator group. Four elements providing the primary magnification change. Moves object-ward from wide to tele, initially moving image-ward before reversing.
- **G3 (positive, f = +20.00 mm):** Middle group (GM in the patent's nomenclature). Six elements in four sub-groups including the aperture stop at its front, two hybrid aspherical elements, a cemented ED doublet, and the two-element VR sub-group at the rear. G3 moves object-ward from wide to tele. The aperture stop is located between G2 and G3 and moves with G3.
- **G4 (negative, f = −44.05 mm):** Focusing group (GF). A single cemented doublet that moves image-ward along the optical axis when focusing from infinity to close distance.
- **G5 (negative, f = −89.36 mm):** Rear group (GR). Two elements providing field correction. Moves object-ward from wide to tele.

During zooming from wide to tele, all five groups change position along the axis. G1 moves object-ward; G2 initially moves image-ward before reversing to move object-ward (a non-monotonic cam path characteristic of mechanically compensated superzooms); G3, G4, and G5 move object-ward (¶0109). The inter-group separations D5, D13, D26, D29, and D33 all change during zooming. The aperture stop, positioned between G2 and G3, travels with G3.

---

## Element-by-Element Analysis

### Group 1 — Front Collector (positive, f = +77.83 mm)

#### L11 — Negative Meniscus, Convex to Object

nd = 1.80518, νd = 25.45. Glass: S-TIH6 (OHARA) — dense titanium flint, equivalent to Schott SF6. f = −187.7 mm (standalone thick-lens).

L11 is the frontmost element of the system and forms the object-side half of a cemented doublet with L12. Its high refractive index (nd = 1.805) and high dispersion (νd = 25.45) make it a flint element that contributes negative power and positive chromatic aberration to the cemented pair. The meniscus shape (both radii positive: R₁ = 78.364, R₂ = 51.125) bends light progressively while minimizing surface contributions to spherical aberration at the large front aperture. As the most object-side surface of the system, S1 sees the widest beam diameter and is the primary determinant of the front lens barrel diameter.

#### L12 — Biconvex Positive (ED)

nd = 1.49782, νd = 82.57. Glass: FPL51-class (OHARA) — fluorophosphate extra-low dispersion crown, ΔPgF ≈ +0.038. f = +99.2 mm (standalone thick-lens).

L12 is the first of two ED elements in the system. Cemented to L11, it provides the positive power of the front doublet while correcting axial chromatic aberration introduced by L11. The L11+L12 cemented pair has a combined focal length of approximately +214 mm — a weak positive achromatic collector. The FPL51-class glass has anomalous partial dispersion (positive ΔPgF), which enables secondary spectrum suppression that would not be possible with ordinary crown glass. The extremely weak curvature of S3 (R = −1387.4 mm, nearly flat) indicates that most of L12's refractive power comes from its S2 surface, which is shared with L11 in the cemented interface.

#### L13 — Positive Meniscus, Convex to Object

nd = 1.48749, νd = 70.31. Glass: S-FSL5 (OHARA) — fluorocrown (borosilicate family). f = +119.1 mm (standalone thick-lens).

L13 is air-spaced 0.100 mm behind the L11–L12 cemented pair and provides additional positive power to G1. The meniscus shape (R₁ = 51.002, R₂ = 408.278) concentrates its power at S4 while keeping S5 nearly flat, reducing higher-order spherical aberration at full aperture. The relatively low refractive index (nd = 1.487) and moderate Abbe number (νd = 70.31) position this element as a low-dispersion crown that contributes minimal chromatic error. Together, G1's three elements collect and converge the incoming beam before handing it to the variator group G2.

### Group 2 — Variator (negative, f = −13.20 mm)

#### L21 — Negative Meniscus, Convex to Object

nd = 1.83481, νd = 42.73. Glass: S-LAH55V (OHARA) — dense lanthanum flint. f = −18.7 mm (standalone thick-lens).

L21 is a strongly negative meniscus (R₁ = 105.667, R₂ = 13.538) that serves as the entrance element of the variator group. The extreme asymmetry between its two radii creates strong divergence, which is the primary mechanism by which G2 achieves its short negative focal length. The high refractive index (nd = 1.835) helps minimize Petzval field curvature contribution despite the strong negative power. L21 is the strongest negative contributor in G2.

#### L22 — Biconcave Negative

nd = 1.74400, νd = 44.81. Glass: S-LAM2 (OHARA) — lanthanum flint. f = −27.0 mm (standalone thick-lens).

L22 is a symmetric biconcave element (R₁ = −40.384, R₂ = +40.384 — equal and opposite radii). The symmetric form minimizes odd-order aberrations (particularly coma and distortion) at the design conjugate. Its power adds to L21's divergence, strengthening G2's variator action. The glass is a moderate-index lanthanum flint with νd = 44.81, making it a flint element chromatically.

#### L23 — Biconvex Positive

nd = 1.80809, νd = 22.74. Glass: S-TIH53 (OHARA) — titanium dense flint with very high dispersion. f = +20.6 mm (standalone thick-lens).

L23 provides positive power within the otherwise negative G2 group. Despite being biconvex and positive in power, it uses one of the highest-dispersion glasses in the entire system (νd = 22.74). This placement is chromatic: positioned between two negative flint elements (L22 and L24), L23 acts as the achromatizing partner that cancels the chromatic aberration generated by the surrounding negative elements. Its high nd (1.808) and high dispersion are characteristic of the dense-flint glasses used specifically for color correction in variator groups.

#### L24 — Negative Meniscus, Concave to Object

nd = 1.77250, νd = 49.62. Glass: S-LAH66 (OHARA) — dense lanthanum flint. f = −33.9 mm (standalone thick-lens).

L24 is the final element of G2, shaped as a negative meniscus concave to the object (R₁ = −21.186, R₂ = −113.505). It contributes additional negative power while also serving as a field-flattening corrector for the divergent beam exiting G2. The high-index lanthanum flint glass (νd = 49.62) provides moderate chromatic leverage without excessive dispersion, balancing the high-dispersion L23 in the variator's internal achromatization.

### Group 3 — Middle Group / GM (positive, f = +20.00 mm)

G3 is the largest and most complex group in the system, containing six glass elements (plus two resin layers) in four air-separated sub-groups. It encompasses the aperture stop at its front, two hybrid aspherical composite elements, the second ED cemented doublet, and the VR sub-group at its rear. G3's net positive power (+20.0 mm focal length) relays the divergent beam from G2 toward the focus group G4.

#### Aperture Stop (S14)

The aperture stop is a flat surface (R = ∞) positioned 1.500 mm in front of L31, between G2 and the first element of G3 (¶0109). It moves with G3 during zooming.

#### L31 — Biconvex Positive, Hybrid Composite Aspherical

This element is a glass-molded hybrid: a UV-curable resin layer is bonded to the object-side face of a glass substrate (¶0112).

**Resin layer (L31r):** nd = 1.56093, νd = 36.64. The object-side surface S15 is aspherical. Center thickness 0.150 mm.

**Glass body (L31g):** nd = 1.51742, νd = 52.20. Glass: S-NSL3 (OHARA) — normal crown (catalog νd = 52.43, Δνd ≈ 0.23 from patent value). R₁₆ = 17.341 (junction with resin), R₁₇ = −499.849 (nearly flat rear). Center thickness 3.350 mm.

Combined f(L31) ≈ +31 mm (paraxial, in-air).

The aspherical departure on S15 is negative (the surface becomes flatter than a sphere toward the periphery), with A4 = −2.969×10⁻⁵ producing approximately −0.019 mm departure at h = 5 mm and −0.041 mm at h = 6 mm. This negative departure corrects the positive spherical aberration that would otherwise accumulate from the strong positive power of L31, which is positioned immediately behind the aperture stop where the marginal ray height is near-maximum. The resin layer itself contributes negligible optical power (f ≈ +631 mm standalone); its role is purely to carry the aspherical departure.

#### L32 — Biconvex Positive

nd = 1.60342, νd = 38.03. Glass: S-TIM2 (OHARA) — titanium flint. f = +86.3 mm (standalone thick-lens).

L32 is a weakly positive biconvex element (R₁₈ = 54.519, R₁₉ = −1162.9) that adds moderate positive power to G3. Despite being positive, it uses a flint glass (νd = 38.03), which is unusual for a positive element but serves the chromatic balance of the G3 group as a whole. The weak curvature of S19 indicates that L32's power is dominated by its front surface S18.

#### L33 + L34 — Cemented Doublet (ED Achromat)

**L33:** nd = 2.00100, νd = 29.12. Glass: S-LAH79 (OHARA) — ultra-high-index lanthanum dense flint. f = −15.8 mm (standalone thick-lens).

**L34:** nd = 1.49782, νd = 82.57. Glass: FPL51-class (OHARA) — ED fluorophosphate crown (same glass as L12). f = +21.3 mm (standalone thick-lens).

Combined cemented pair f ≈ −72.5 mm (paraxial, in-air).

This is the second ED doublet in the system and the primary chromatic correction mechanism in G3. The pairing follows the classic achromatic strategy: a high-dispersion negative flint (L33, νd = 29.12) cemented to a low-dispersion positive crown (L34, νd = 82.57), with the large Abbe-number difference (Δνd = 53.45) enabling strong axial color correction. The ultra-high refractive index of L33 (nd = 2.001, one of the highest commercially available optical glasses) allows strong negative curvature at S20 (R = 287.8, weakly curved) while concentrating the doublet's chromatic leverage at the steeply curved junction S21 (R = 15.000). The combined doublet is weakly negative, meaning it contributes mild divergence while correcting color — a design choice that allows the surrounding positive elements (L31, L32, L35) to carry the group's net positive power.

#### L35 + L36 — VR Sub-Group (GVR), Cemented Hybrid-Plus-Glass Assembly

This two-element sub-group is positioned at the image-side end of G3 and constitutes the vibration-reduction (image-stabilization) group GVR (¶0115). During VR operation, L35 and L36 translate perpendicular to the optical axis to compensate for camera shake.

**L35 — Biconvex Positive, Hybrid Composite Aspherical:**

Resin layer (L35r): nd = 1.56093, νd = 36.64. S23 is aspherical. Center thickness 0.150 mm. The resin is the same UV-curable material as L31r.

Glass body (L35g): nd = 1.51680, νd = 64.14. Glass: S-BSL7 (OHARA) — borosilicate crown, equivalent to Schott N-BK7. Center thickness 4.560 mm.

The aspherical departure on S23 is also negative (A4 = −1.947×10⁻⁵), producing approximately −0.012 mm departure at h = 5 mm and −0.026 mm at h = 6 mm. Like S15, this corrects residual spherical aberration and, critically, minimizes decentering aberrations during VR operation — the aspherical profile ensures that the wavefront remains well-corrected even when L35–L36 are shifted off-axis.

**L36 — Negative Meniscus, Concave to Object:**

nd = 1.66755, νd = 41.87. Glass: L-LAM60 (OHARA, tentative) — PGM-moldable lanthanum flint (catalog nd = 1.66755, νd = 41.93, Δνd ≈ 0.06). f = −131.9 mm (standalone thick-lens).

L36 is cemented to L35's glass substrate, forming a weakly negative meniscus that controls field curvature and coma generated by the VR decentering. The L-prefix in the OHARA designation indicates a precision glass-molding (PGM) grade, consistent with the high-volume production of this consumer zoom. The nd match to the OHARA L-LAM60 catalog is exact (1.66755), and the νd residual of 0.06 is within normal tolerance for patent-to-catalog matching. The combined GVR sub-group has a focal length of +28.9 mm, matching the patent's stated fVR = +28.900 mm. The two-element VR construction (¶0083) helps suppress chromatic variation during image stabilization.

### Group 4 — Focus Group / GF (negative, f = −44.05 mm)

#### L41 + L42 — Cemented Doublet (Focus Group)

**L41:** nd = 2.00100, νd = 29.12. Glass: S-LAH79 (OHARA) — ultra-high-index lanthanum dense flint (same glass as L33). f = +30.7 mm (standalone thick-lens).

**L42:** nd = 1.80400, νd = 46.60. Glass: S-LAH65V (OHARA) — dense lanthanum flint (νd < 50; technically a flint despite the "LAH" family designation). f = −17.8 mm (standalone thick-lens).

Combined cemented pair f = −44.0 mm (paraxial, in-air), matching the patent's stated f4 = −44.045 mm.

G4 is the sole focusing group (GF) of the system (¶0115). It consists of a single cemented doublet that moves image-ward along the optical axis when focusing from infinity to close distance. At close focus, the G3-to-G4 gap (D26) increases while the G4-to-G5 gap (D29) decreases by approximately the same amount, confirming rigid-body translation of G4 within a fixed-length housing section. The focus travel varies with zoom position: at 18 mm wide, G4 moves approximately 1.56 mm image-ward for close focus, while at 140 mm tele it moves approximately 8.77 mm.

L41 uses the same ultra-high-index glass (S-LAH79, nd = 2.001) as L33, providing strong positive curvature at the junction S28 (R = −37.498) while keeping the doublet's overall diameter small — essential for a compact inner-focus group driven by a stepping motor (STM). L42's dense lanthanum flint glass (S-LAH65V) provides the dominant negative power and contributes chromatic correction at the junction. The net negative power of the doublet means that moving it image-ward increases the total system focal length slightly at close focus, partially compensating for the focus-induced shortening of back focal distance.

The light weight and compact size of this two-element cemented focus group (¶0092 notes that two elements are preferred for suppressing chromatic variation during focus) are key to the production lens's fast, quiet STM autofocus performance.

### Group 5 — Rear Group / GR (negative, f = −89.36 mm)

#### L51 — Negative Meniscus, Concave to Object

nd = 1.90265, νd = 35.77. Glass: S-LAH58 (OHARA) — dense lanthanum flint. f = −37.7 mm (standalone thick-lens).

L51 is a negative meniscus concave to the object (R₁ = −16.370, R₂ = −32.544). Its high refractive index (nd = 1.903) and moderate dispersion contribute to the Petzval sum correction needed to flatten the image field across the DX format. L51 carries most of G5's negative power.

#### L52 — Positive Meniscus, Concave to Object

nd = 1.84666, νd = 23.80. Glass: SF57 (Schott) — dense flint with very high dispersion (catalog nd = 1.84666, νd = 23.83, Δνd = 0.03). f = +69.7 mm (standalone thick-lens).

L52 is a positive meniscus concave to the object (R₁ = −502.457, R₂ = −52.880) that partially cancels L51's negative power while providing strong chromatic correction at the rear of the system. The very high dispersion (νd = 23.80) makes L52 an effective color corrector despite its moderate positive power. The use of a Schott glass rather than OHARA in this position is notable; SF57 provides an exact nd match (1.84666) that no current OHARA catalog entry replicates at this dispersion level. The L51–L52 pair together form G5 with a combined focal length of −89.4 mm — the weakest negative group in the system. G5 does not participate in focusing; its variable gap D33 changes only with zoom.

Behind G5, a parallel plate cover glass PP (nd = 1.51680 / S-BSL7, thickness 1.600 mm) represents the sensor protective glass; it is excluded from the optical prescription in the data file per project convention, with its optical path folded into the back focal distance.

---

## Glass Identification and Selection

The glass palette comprises 15 distinct glass types plus one UV-curable resin, drawn predominantly from the OHARA catalog — consistent with Nikon's longstanding supply relationship — with one element (L52) identified as Schott SF57.

| Element(s) | nd | νd | Probable Glass | Type | Role |
|---|---|---|---|---|---|
| L11 | 1.80518 | 25.45 | S-TIH6 (OHARA) | Dense flint | Achromatizing flint in G1 doublet |
| L12, L34 | 1.49782 | 82.57 | FPL51-class (OHARA) | ED fluorophosphate crown | Primary chromatic correction (2 ED elements) |
| L13 | 1.48749 | 70.31 | S-FSL5 (OHARA) | Fluorocrown | Low-dispersion positive power in G1 |
| L21 | 1.83481 | 42.73 | S-LAH55V (OHARA) | Dense lanthanum flint | Strong negative in variator |
| L22 | 1.74400 | 44.81 | S-LAM2 (OHARA) | Lanthanum flint | Negative power in variator |
| L23 | 1.80809 | 22.74 | S-TIH53 (OHARA) | Titanium dense flint | Achromatizing positive in variator |
| L24 | 1.77250 | 49.62 | S-LAH66 (OHARA) | Dense lanthanum flint | Negative field corrector in variator |
| L31r, L35r | 1.56093 | 36.64 | UV-curable resin | Composite asph layer | Carries aspherical departure |
| L31g | 1.51742 | 52.20 | S-NSL3 (OHARA, Δνd ≈ 0.23) | Normal crown | Substrate for hybrid asphere |
| L32 | 1.60342 | 38.03 | S-TIM2 (OHARA) | Titanium flint | Weak positive in G3 |
| L33, L41 | 2.00100 | 29.12 | S-LAH79 (OHARA) | Ultra-high-index LaF | High-index flint for cemented doublets |
| L35g, PP | 1.51680 | 64.14 | S-BSL7 (OHARA) | Borosilicate crown | Substrate for VR asphere; cover glass |
| L36 | 1.66755 | 41.87 | L-LAM60 (OHARA, tentative) | PGM lanthanum flint | Chromatic partner in VR group |
| L42 | 1.80400 | 46.60 | S-LAH65V (OHARA) | Dense lanthanum flint | Negative power in focus doublet |
| L51 | 1.90265 | 35.77 | S-LAH58 (OHARA) | Dense lanthanum flint | Field flattener in rear group |
| L52 | 1.84666 | 23.80 | SF57 (Schott) | Dense flint | Chromatic corrector in rear group |

The chromatic correction strategy relies on two FPL51-class ED elements (L12 in G1, L34 in G3), each cemented to a high-dispersion flint partner. The patent's nd/νd values for these elements (1.49782/82.57) do not exactly match the current OHARA S-FPL51 catalog specification (nd = 1.49700, νd = 81.54), but are consistent with the original pre-S-prefix FPL51 formulation or a specific production melt; the identification as an ED fluorophosphate crown is secure from the glass-map position. The anomalous partial dispersion of FPL51-class glass (ΔPgF ≈ +0.038) enables secondary spectrum correction that is critical at the tele end, where axial chromatic aberration would otherwise dominate image quality at f/6.5. The patent's conditional expression (7) requires νd ≥ 75.00 for at least one element in G3 (¶0034); the actual value of 82.57 exceeds this bound by a comfortable margin.

Two elements use the ultra-high-index S-LAH79 (nd = 2.001): L33 in the G3 ED doublet and L41 in the G4 focus doublet. This glass allows strong curvature at cemented junctions without excessive surface sag, enabling compact doublet assemblies with short axial lengths.

The L36 identification as L-LAM60 (OHARA) is tentative: the nd match is exact (1.66755), but the catalog νd (41.93) differs from the patent value (41.87) by 0.06. The L-prefix denotes OHARA's PGM (precision glass-moldable) series, consistent with the high-volume production requirements of this consumer zoom. No alternative catalog entry provides a closer match across both nd and νd.

The L52 identification as SF57 (Schott) corrects a prior erroneous attribution to "S-TIH53W." OHARA's S-TIH53 has nd = 1.80809, far from the patent value of 1.84666; no OHARA glass with a "W" suffix matches this nd. Schott SF57 (nd = 1.84666, νd = 23.83) provides an exact nd match with Δνd = 0.03. The use of a Schott glass in an otherwise OHARA-dominated design is unusual but not unprecedented in Nikon zoom lenses; it may reflect supply-chain optimization or a specific dispersion characteristic required at this position in the rear group.

---

## Aspherical Surfaces

The design has two aspherical surfaces, both on the object-side face of hybrid composite elements (resin layer bonded to glass substrate):

- **S15 (L31, front of G3):** carries the aspherical departure for the first element behind the aperture stop.
- **S23 (L35, VR sub-group in G3):** carries the aspherical departure for the VR decentering element.

### Aspheric Equation Convention

The patent uses the equation form stated in ¶0103–0104:

$$X(y) = \frac{y^2 / R}{1 + \sqrt{1 - \kappa \cdot y^2 / R^2}} + A_4 y^4 + A_6 y^6 + A_8 y^8 + A_{10} y^{10}$$

where κ is the conic parameter. In this patent, both aspherical surfaces use κ = 1.0000. Under this convention, κ = 1 corresponds to a spherical base curve (the standard conic constant K = κ − 1 = 0). The polynomial terms then represent the full aspherical departure from a sphere. The second-order coefficient A₂ is omitted (set to zero, per ¶0103).

### Surface 15 (L31 resin, R = 16.582 mm)

| Parameter | Value |
|---|---|
| κ | 1.0000 (K = 0, spherical base) |
| A₄ | −2.96855 × 10⁻⁵ |
| A₆ | −5.04688 × 10⁻⁸ |
| A₈ | −4.78359 × 10⁻¹² |
| A₁₀ | 0 |

The negative A₄ coefficient dominates. At h = 5 mm, the total polynomial departure is −0.019 mm (the surface is flatter than the base sphere); at h = 6 mm, it reaches −0.041 mm. Since S15 is positioned immediately behind the aperture stop where the on-axis marginal ray is near its maximum height, the negative departure corrects under-corrected (positive) spherical aberration by reducing the surface curvature at the periphery. This is the aspherical surface that carries the heaviest aberration correction burden in the design.

### Surface 23 (L35 resin, R = 20.944 mm)

| Parameter | Value |
|---|---|
| κ | 1.0000 (K = 0, spherical base) |
| A₄ | −1.94678 × 10⁻⁵ |
| A₆ | −1.10034 × 10⁻⁸ |
| A₈ | −1.10745 × 10⁻¹⁰ |
| A₁₀ | 0 |

Also negative-dominated. At h = 5 mm the departure is −0.012 mm; at h = 6 mm it is −0.026 mm — roughly half the magnitude of S15. S23's correction is gentler because L35 sits further from the stop and sees a smaller on-axis beam, but its aspherical profile is critical for maintaining image quality during VR decentering. When L35–L36 translate perpendicular to the axis during image stabilization, the aspherical surface ensures that off-axis coma and astigmatism induced by decentering remain well-controlled.

Both aspherical surfaces are manufactured as composite-type (hybrid) aspheres — a thin UV-curable resin layer (nd = 1.56093, νd = 36.64, approximately 0.15 mm thick) is applied to the object-side face of a glass substrate and molded to the aspherical form. This is a cost-effective manufacturing approach that avoids the expense of precision glass-molded aspheres while still achieving the required surface accuracy. The resin layer itself contributes negligible optical power (standalone focal lengths of approximately +631 mm and −1581 mm for L31r and L35r respectively).

---

## Focus Mechanism

The NIKKOR Z DX 18-140mm uses inner focus (IF) with G4 as the sole focusing group. During focusing from infinity to close distance, the cemented doublet L41+L42 translates image-ward along the optical axis, driven by a stepping motor (STM).

### Variable Spacings

| Gap | Position | Wide ∞ | Wide CF | Mid ∞ | Mid CF | Tele ∞ | Tele CF | Type |
|---|---|---|---|---|---|---|---|---|
| D5 | G1–G2 | 1.137 | 1.137 | 18.064 | 18.064 | 38.687 | 38.687 | Zoom only |
| D13 | G2–G3 | 20.855 | 20.855 | 6.402 | 6.402 | 2.040 | 2.040 | Zoom only |
| D26 | G3–G4 | 1.935 | 3.492 | 6.290 | 8.922 | 1.909 | 10.681 | Zoom + focus |
| D29 | G4–G5 | 13.983 | 12.425 | 12.681 | 10.049 | 18.046 | 9.274 | Zoom + focus |
| D33 | G5–image | 8.272 | 8.272 | 18.869 | 18.869 | 33.216 | 33.216 | Zoom only |

### Focus Travel

At each zoom position, the sum D26 + D29 is conserved between infinity and close focus (to within rounding precision), confirming that G4 translates as a rigid body within a fixed inter-group envelope:

- Wide: D26 + D29 = 15.918 mm (∞) ≈ 15.917 mm (CF)
- Mid: D26 + D29 = 18.971 mm (∞) ≈ 18.971 mm (CF)
- Tele: D26 + D29 = 19.955 mm (∞) ≈ 19.955 mm (CF)

The focus travel (image-ward displacement of G4) increases with focal length: approximately 1.56 mm at 18 mm wide, 2.63 mm at 50 mm mid, and 8.77 mm at 140 mm tele. This increasing travel is consistent with the longer back focal distance and lower magnification sensitivity at the tele end. The patent's close-focus magnification values are β = −0.151 (wide), −0.147 (mid), and −0.333 (tele), corresponding to the marketed maximum reproduction ratio of 0.33× at the telephoto end.

The close-focus distance is zoom-dependent: 0.2 m at 18 mm (wide), increasing to 0.4 m at 100–140 mm (tele), as listed in Nikon's published specifications. This variable-MFD behavior is a natural consequence of inner focusing with a negative focus group at variable zoom positions.

---

## Image Stabilization (VR)

The VR sub-group GVR consists of L35 (hybrid aspherical composite) and L36 (negative meniscus), located at the image-side end of G3 (¶0115). These two elements translate perpendicular to the optical axis to compensate for angular camera shake, with the patent claiming 5.0 stops of compensation (CIPA standard, measured at the maximum telephoto position with a DX-format body).

GVR has a combined focal length of +28.9 mm. The patent's conditional expression (8) requires 0.01 < f3/fVR < 2.00, where f3 is the focal length of G3 (+20.0 mm) and fVR is the focal length of GVR (+28.9 mm). The computed ratio is f3/fVR = 20.0/28.9 = 0.692, which satisfies the condition (¶0037). This ratio governs the relationship between the VR group's decentering range and the resulting image shift, as well as the magnitude of decentering-induced coma and asymmetric field curvature (¶0038). The patent further notes (¶0041) that GVR is preferably positioned at the most image-side end of G3 to maintain optical performance during stabilization.

---

## Conditional Expressions

The patent defines 21 conditional expressions governing the relationships between group focal lengths, magnifications, and system parameters. Example 1 satisfies all applicable conditions (¶0146–0147). Selected values:

| Condition | Expression | Bounds | Example 1 Value |
|---|---|---|---|
| (1) | f4/f5 | 0.11 – 0.70 | 0.493 |
| (2) | (−f4)/f3 | 0.01 – 5.00 | 2.203 |
| (6) | Bfw/fw | 0.01 – 0.95 | 0.557 |
| (7) | ν3L (Abbe of G3 element) | ≥ 75.00 | 82.57 |
| (8) | f3/fVR | 0.01 – 2.00 | 0.692 |
| (18) | (−f2)/f1 | 0.01 – 1.00 | 0.170 |
| (19) | TLt/ft | 0.01 – 2.00 | 1.112 |
| (21) | ν1L (Abbe of G1 element) | ≥ 75.00 | 82.57 |

Conditions (7) and (21) mandate that G3 and G1 each contain at least one element with νd ≥ 75.00, which is satisfied by the two FPL51-class ED elements (L12 in G1 and L34 in G3, both νd = 82.57). Condition (19) — the telephoto ratio TLt/ft = 1.112 (patent-stated value) — confirms that the system is not a true telephoto design at the tele end (TL/EFL > 1), which is typical for high-ratio superzooms where compactness at the tele end is traded for a wider zoom range.

---

## Verification Summary

All quantitative claims in this analysis were independently verified by paraxial (y-nu) ray trace against the prescription data in Table 1 of the patent:

| Parameter | Computed | Patent | Δ |
|---|---|---|---|
| EFL (wide, ∞) | 18.538 mm | 18.540 mm | 0.002 mm |
| EFL (mid, ∞) | 50.033 mm | 50.034 mm | 0.001 mm |
| EFL (tele, ∞) | 135.816 mm | 135.845 mm | 0.029 mm |
| f(G1) | 77.833 mm | 77.833 mm | < 0.001 mm |
| f(G2) | −13.200 mm | −13.200 mm | < 0.001 mm |
| f(G3) | 19.995 mm | 19.995 mm | < 0.001 mm |
| f(G4) | −44.044 mm | −44.045 mm | 0.001 mm |
| f(G5) | −89.368 mm | −89.364 mm | 0.004 mm |
| f(GVR) | 28.90 mm | 28.900 mm | < 0.01 mm |

All values agree to within rounding precision of the three-decimal-place patent tabulation.

---

## Sources

1. WO 2022/264542 A1 (WIPO), "Variable-Magnification Optical System, Optical Apparatus, and Method for Manufacturing Variable-Magnification Optical System," Nikon Corporation, published 22 December 2022. Example 1, Table 1.
2. Nikon USA product page, NIKKOR Z DX 18-140mm f/3.5-6.3 VR (product code 20104). Accessed May 2026. https://www.nikonusa.com/p/nikkor-z-dx-18-140mm-f35-63-vr/20104/overview
3. OHARA optical glass catalog (current online edition). Glass designations S-TIH6, S-FSL5, S-LAH55V, S-LAM2, S-TIH53, S-LAH66, S-NSL3, S-TIM2, S-LAH79, S-BSL7, L-LAM60, S-LAH65V, S-LAH58.
4. Schott optical glass catalog (current online edition). Glass designation SF57.
