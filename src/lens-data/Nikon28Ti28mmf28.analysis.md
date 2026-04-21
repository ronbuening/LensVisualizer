# Optical Analysis: US 5,528,428 — Embodiment 3

## Nikon "Compact Wide-Angle Objective Lens" — Nikkor 28mm f/2.8 (28Ti)

**Patent:** US 5,528,428 (granted June 18, 1996)
**Inventors:** Motoyuki Ohtake, Motohisa Mori
**Assignee:** Nikon Corporation
**Priority dates:** November 13, 1991 (JP 3-297444); May 13, 1993 (JP 5-111289)

---

## 1. Patent Overview and Production Context

US 5,528,428 describes a family of compact wide-angle objective lenses based on a symmetrical Biogon-derived architecture with a negative–positive–negative power distribution around a central stop. The patent contains thirteen numerical embodiments spanning two sub-families: Embodiments 1–8 describe whole-axial-movement (unit focus) designs, while Embodiments 9–13 add a floating-focus mechanism in which the front and rear lens units move by different amounts during focusing to suppress off-axis aberration fluctuation.

The Nikon 28Ti (released 1994) is equipped with a Nikkor 28mm f/2.8 lens specified as 7 elements in 5 groups with Nikon Integrated Coating and "low-dispersion glass." Crucially, because the 28Ti is a compact camera without an SLR mirror, its lens uses a true symmetric (non-retrofocus) architecture — a fact that multiple commentators have noted as a significant optical advantage, placing it in the same class as Contax T-series and Leica rangefinder optics rather than the retrofocus SLR wide-angles of the same era. The patent's Embodiments 1–4 and 8 are computed at f = 28.9 mm and F/2.87–2.88 with 2ω ≈ 73–74°, closely matching the marketed specifications (the slight discrepancy between the patent's F/2.87 and the marketed F/2.8 is normal rounding for commercial designation). Nikon has stated that the 28Ti's lens design descends from the "symmetrical wideangle lens" designed by Zenji Wakimoto in the 1950s — consistent with the Biogon lineage described in the patent's background section.

Embodiment 3 is one of the 28.9 mm / F2.87 / 74° designs. It employs seven elements across five lens components arranged in two groups. The user has identified it as the embodiment corresponding to the production lens. Note that the production 28Ti incorporates autofocus and therefore likely uses a floating-focus variant (Embodiment 11 shares the same glass types for L11, L12, L13, and L23, with slightly adjusted radii and an explicit floating-focus mechanism). However, the core optical architecture is essentially identical, and Embodiment 3 is a suitable basis for analysis.

---

## 2. Optical Prescription — Embodiment 3

**System specifications (patent-stated):**

| Parameter | Value |
|---|---|
| Focal length (f) | 28.9 mm |
| F-number (F<sub>NO</sub>) | 2.87 |
| Full field angle (2ω) | 74.0° |
| Image circle | 35 mm format (24 × 36 mm) |

**Surface data:**

| Surface | r (mm) | d (mm) | n<sub>d</sub> | ν<sub>d</sub> | Component |
|---|---|---|---|---|---|
| 1 | 12.422 | 1.50 | 1.53172 | 49.1 | L11 front |
| 2 | 8.919 | 3.37 | 1.0 | — | L11 rear → air |
| 3 | 12.829 | 3.87 | 1.84042 | 43.3 | L12 front |
| 4 | −1726.972 | 1.00 | 1.64831 | 33.8 | L12/L13 cement |
| 5 | 12.785 | 4.00 | 1.0 | — | L13 rear → air |
| — | (stop) | — | — | — | In the air gap |
| 6 | 51.931 | 2.50 | 1.81600 | 46.8 | L21 front |
| 7 | −17.040 | 1.00 | 1.61750 | 30.8 | L21/L22 cement |
| 8 | 54.857 | 1.31 | 1.0 | — | L22 rear → air |
| 9 | −21.730 | 2.95 | 1.79668 | 45.4 | L23 front |
| 10 | −10.479 | 0.80 | 1.0 | — | L23 rear → air |
| 11 | −8.874 | 1.50 | 1.59507 | 35.5 | L24 front |
| 12 | −13.780 | 20.96 | 1.0 | — | L24 rear → BFD |

The design is entirely spherical — no aspherical surfaces are described in any of the thirteen embodiments, nor are aspherical coefficients listed anywhere in the patent. The patent concludes by noting that aspherical surfaces *could* be introduced into various components to further correct astigmatism, field curvature, and spherical aberration, but the numerical examples provided do not employ them.

---

## 3. Paraxial Verification

An ABCD-matrix paraxial ray trace through all twelve surfaces confirms the patent's stated values:

| Parameter | Computed | Patent | Match |
|---|---|---|---|
| Effective focal length | 28.894 mm | 28.9 mm | ✓ |
| Back focal distance | 20.96 mm | 20.96 mm | ✓ |
| Total lens thickness (D) | 23.80 mm | — | — |
| D/f | 0.824 | 0.824 | ✓ |
| Max image height (at 37°) | 21.77 mm | 21.63 mm (half-diag.) | ✓ |

All eight conditional expressions from the patent are verified computationally:

| Condition | Computed | Patent | Range |
|---|---|---|---|
| (1) \|t₁/f₁\| | 0.048 | 0.048 | 0.02–0.10 ✓ |
| (2) \|t₄/f₅\| | 0.017 | 0.017 | 0.01–0.08 ✓ |
| (3) (r₃₂+r₄₁)/(r₃₂−r₄₁) | 0.433 | 0.433 | −0.85 to 0.90 ✓ |
| (4) \|r₄₂/f\| | 0.363 | 0.363 | 0.20–0.55 ✓ |
| (5) D/f | 0.824 | 0.824 | 0.40–1.00 ✓ |
| (6) N₃₁−N₃₂ | 0.199 | 0.199 | 0.04–0.25 ✓ |
| (7) N₁ | 1.532 | 1.532 | < 1.70 ✓ |
| (8) N₅ | 1.595 | 1.595 | < 1.70 ✓ |

---

## 4. Lens Construction and Group Architecture

The design is a modified symmetric Biogon type arranged in **two lens units (G1, G2)** containing **five air-separated lens components (L11–L24)** — conventionally counted as "5 groups" in manufacturer specifications — totaling **seven glass elements**, with a between-lens shutter/stop:

```
Object → [L11] — air — [L12|L13] — air — STOP — air — [L21|L22] — air — [L23] — air — [L24] → Image
          ←——— G1 (front) ———→            ←————————— G2 (rear) ————————→
```

### Group G1 — Front Unit (object side of stop)

G1 comprises L11 and L2. Its computed group focal length is +128.6 mm — weakly positive. The patent describes this as the "first lens unit" with "small positive refractive power." The weak positive power of the front unit is characteristic of a Biogon derivative in which L11's negative divergence is only slightly exceeded by L2's positive convergence, maintaining a wide field of illumination while keeping the front element diameter compact.

### Group G2 — Rear Unit (image side of stop)

G2 comprises L3, L23, and L24. Its computed group focal length is +29.6 mm — strongly positive. The patent describes this as the "second lens unit" with "great positive refractive power." The strong positive power of G2 is responsible for most of the system's convergence. The division of the positive power behind the stop into two components (L3 and L23) is the key innovation of this patent relative to earlier Biogon designs: it provides additional degrees of freedom for correcting spherical aberration, enabling the large F/2.87 aperture.

### Power Distribution Summary

| Component | Focal length | Power | Role |
|---|---|---|---|
| L11 (singlet) | −69.9 mm | Negative | Field flattening, FOV expansion |
| L2 (doublet) | +41.8 mm | Positive | Primary front convergence, chromatic correction |
| L3 (doublet) | +61.4 mm | Positive | Rear convergence, chromatic correction |
| L23 (singlet) | +22.8 mm | Positive | Spherical aberration correction, strong convergence |
| L24 (singlet) | −47.3 mm | Negative | Field flattening, symmetry restoration |
| **G1 (L11+L2)** | **+128.6 mm** | **Weak positive** | Off-axis correction |
| **G2 (L3+L23+L24)** | **+29.6 mm** | **Strong positive** | On-axis correction, convergence |

The overall negative–positive–negative arrangement around the stop (L11 negative, L2/L3/L23 positive, L24 negative) provides the symmetry needed for low distortion and good chromatic correction across the wide 74° field.

### Petzval Sum

The computed Petzval sum is **+0.00649 mm⁻¹**, corresponding to a Petzval radius of **+154 mm**. This modest positive value indicates a slight undercorrection of field curvature — the image surface curves gently toward the lens. The patent discusses at length how the balance between the negative elements (L11, L24) and the positive elements (L2, L3, L23) is tuned through conditions (1)–(8) to keep the Petzval sum in an optimal range: small enough for a flat field, but not so aggressively corrected that higher-order aberrations degrade the image at the field edges.

---

## 5. Element-by-Element Optical Analysis

### L11 — Negative Meniscus Singlet (front element)

| Property | Value |
|---|---|
| Shape | Negative meniscus, convex to object |
| Radii | R₁ = +12.422 mm, R₂ = +8.919 mm |
| Center thickness | 1.50 mm |
| Glass | n<sub>d</sub> = 1.53172, ν<sub>d</sub> = 49.1 |
| Focal length | −69.9 mm |

**Shape and role:** L11 is a steeply curved negative meniscus with its convex surface facing the incoming light. Both radii are positive, with R₂ < R₁, making the rear surface more steeply curved. The diverging action of L11 widens the beam entering the system, enabling the lens to accept light from a 74° field of view. By bending rather than strongly refracting off-axis rays, the meniscus shape minimizes the introduction of higher-order coma and astigmatism.

**Glass identification:** The refractive index 1.53172 with ν<sub>d</sub> = 49.1 matches **OHARA S-NSL3** (n<sub>d</sub> = 1.53172, ν<sub>d</sub> = 48.84; also cross-referenced as HOYA E-C3 or Schott N-K5 equivalents). This is a lightweight crown glass in the "normal special low-index" family. The six-digit glass code is 532/491. The low refractive index (condition 7 requires N₁ < 1.70) is deliberate: the patent explains that a low-index negative meniscus at the front keeps the Petzval sum from going excessively negative while providing sufficient field-flattening power. A higher-index glass here would over-correct the Petzval sum and introduce excessive negative coma at wide field angles.

### L2 — Cemented Positive Meniscus Doublet

L2 consists of two cemented elements: L12 (biconvex, positive) and L13 (biconcave, negative), forming a positive meniscus doublet with its convex side facing the object.

#### L12 — Biconvex Positive Element

| Property | Value |
|---|---|
| Shape | Biconvex (rear surface nearly flat) |
| Radii | R₃ = +12.829 mm, R₄ = −1726.972 mm |
| Center thickness | 3.87 mm |
| Glass | n<sub>d</sub> = 1.84042, ν<sub>d</sub> = 43.3 |
| Individual focal length | +15.2 mm |

**Glass identification:** The index 1.84042 with ν<sub>d</sub> = 43.3 is an exact match for **HOYA TAFD25** (n<sub>d</sub> = 1.84042, ν<sub>d</sub> = 43.27). This is a dense lanthanum flint glass with unusually high refractive index for its relatively moderate dispersion. The "TAFD" designation in the HOYA system indicates a heavy lanthanum flint suitable for high-performance designs. The very high index (1.84) allows the strongly positive front surface (R₃ = 12.829 mm) to bend rays with reduced surface curvature compared to what a lower-index glass would require, helping control spherical aberration. The nearly flat rear surface (R₄ ≈ ∞) means almost all of L12's refractive power comes from the front surface.

#### L13 — Biconcave Negative Element

| Property | Value |
|---|---|
| Shape | Biconcave (front surface nearly flat) |
| Radii | R₄ = −1726.972 mm, R₅ = +12.785 mm |
| Center thickness | 1.00 mm |
| Glass | n<sub>d</sub> = 1.64831, ν<sub>d</sub> = 33.8 |
| Individual focal length | −19.6 mm |

**Glass identification:** The index 1.64831 with ν<sub>d</sub> = 33.8 is an exact match for **HOYA E-FD4** (also designated FD4; n<sub>d</sub> = 1.64831, ν<sub>d</sub> = 33.79). This is a dense flint glass with high dispersion. Paired with the lanthanum crown L12, this creates a classic crown/flint achromatic doublet. The large dispersion difference (ν<sub>d</sub> = 43.3 vs. 33.8, a gap of about 10 units) provides the chromatic correction needed to control longitudinal chromatic aberration across the front group.

**Doublet as a unit:** The L2 doublet has a combined focal length of **+41.8 mm**. Its overall external shape is a meniscus (R₃ = +12.829 mm front, R₅ = +12.785 mm rear — nearly equal radii) with its convex side toward the object. The cemented junction at R₄ ≈ −1727 mm is essentially flat, meaning the two elements are bonded at a plane surface. This flat junction minimizes Fresnel reflection losses and simplifies manufacturing. The positive power of L2 is the primary converging element in G1, partially compensating L11's divergence to make G1 weakly positive overall.

### Aperture Stop

The stop is located in the 4.00 mm air gap between L2 (surface 5) and L3 (surface 6). In the production 28Ti, this gap houses the between-lens leaf shutter — a 7-blade mechanism that also functions as the aperture diaphragm. The entrance pupil semi-diameter at f/2.87 is approximately 5.03 mm, giving a full entrance pupil diameter of about 10.1 mm.

### L3 — Cemented Positive Meniscus Doublet

L3 is the first component after the stop. Like L2, it consists of a biconvex positive element (L21) cemented to a biconcave negative element (L22), forming a positive meniscus doublet.

#### L21 — Biconvex Positive Element

| Property | Value |
|---|---|
| Shape | Biconvex |
| Radii | R₆ = +51.931 mm, R₇ = −17.040 mm |
| Center thickness | 2.50 mm |
| Glass | n<sub>d</sub> = 1.81600, ν<sub>d</sub> = 46.8 |
| Individual focal length | +16.0 mm |

**Glass identification:** The index 1.81600 with ν<sub>d</sub> = 46.8 matches **OHARA S-LAH59** or equivalently **HOYA TAFD5** (both: n<sub>d</sub> = 1.81600, ν<sub>d</sub> = 46.62). The patent states ν<sub>d</sub> = 46.8, which is slightly higher than the catalog value of 46.62 — this is within normal patent-rounding tolerance. This is another dense lanthanum glass, slightly lower index than L12's TAFD25 but with a somewhat higher Abbe number, making it less dispersive. The patent's conditional expression (6) requires that the index difference N₃₁ − N₃₂ between the positive and negative elements in L3 fall between 0.04 and 0.25; for Embodiment 3, this difference is 0.199 — the largest of any embodiment — indicating aggressive Petzval correction through the refractive index differential at the cemented interface.

**This glass is a strong candidate for the "low-dispersion" or "ED" element** referenced in manufacturer descriptions of the 28Ti. While not a fluorite-crown or FK-type glass in the traditional ED sense, lanthanum-based glasses like S-LAH59/TAFD5 exhibit anomalous partial dispersion (positive ΔPgF deviation from the normal glass line). This anomalous dispersion characteristic helps correct secondary chromatic aberration — the residual chromatic error that persists even after primary achromatization. Nikon's marketing of "ED glass" or "low-dispersion glass" for this lens likely refers to this property of the lanthanum elements rather than to a conventional FK-type ED glass.

#### L22 — Biconcave Negative Element

| Property | Value |
|---|---|
| Shape | Biconcave |
| Radii | R₇ = −17.040 mm, R₈ = +54.857 mm |
| Center thickness | 1.00 mm |
| Glass | n<sub>d</sub> = 1.61750, ν<sub>d</sub> = 30.8 |
| Individual focal length | −20.9 mm |

**Glass identification:** The index 1.61750 with ν<sub>d</sub> = 30.8 is an exact match for **HOYA EF3** (n<sub>d</sub> = 1.61750, ν<sub>d</sub> = 30.80). This is a short flint glass with very high dispersion. Paired with L21's lanthanum crown, the L3 doublet forms a strongly corrected achromat. The very low Abbe number of 30.8 provides a large chromatic lever arm (ν<sub>d</sub> difference of 16.0 between L21 and L22 — much larger than L2's 9.5 unit gap), making L3 the primary chromatic correction element in the rear group.

**Doublet as a unit:** The L3 doublet has a combined focal length of **+61.4 mm**. Its overall shape is a weak meniscus (R₆ = +51.931, R₈ = +54.857 — nearly equal radii) with its convex side toward the object. Unlike L2's flat junction, L3's cemented interface at R₇ = −17.040 mm is strongly curved. This steeply curved junction surface is where the critical spherical aberration correction occurs: the patent specifically identifies the interplay between r₃₂ (the last surface of L3, i.e., R₈) and r₄₁ (the first surface of L23, i.e., R₉) as the mechanism for controlling spherical aberration and enabling the fast f/2.87 aperture.

### L23 — Positive Meniscus Singlet

| Property | Value |
|---|---|
| Shape | Positive meniscus, concave to object |
| Radii | R₉ = −21.730 mm, R₁₀ = −10.479 mm |
| Center thickness | 2.95 mm |
| Glass | n<sub>d</sub> = 1.79668, ν<sub>d</sub> = 45.4 |
| Focal length | +22.8 mm |

**Shape and role:** L23 is a strongly positive meniscus element with both surfaces concave toward the object side (both radii negative, with |R₁₀| < |R₉|). It is the most powerful single lens component in the system at +22.8 mm focal length — its surface power alone (0.044 mm⁻¹) exceeds the combined thin-lens powers of L2 and L3 (0.024 + 0.016 = 0.040 mm⁻¹). The patent describes L23's creation as the central innovation: by splitting the positive cemented component behind the stop (as found in earlier Biogon designs, e.g., Japanese Utility Model No. 43-30782) into two separate components L3 and L23 with an air space between them, the designer gained a critical additional degree of freedom for correcting spherical aberration. The air space between L3 and L23 (1.31 mm, governed by condition 3) shapes the wavefront in a way that a single thick cemented element cannot.

**Glass identification:** The index 1.79668 with ν<sub>d</sub> = 45.4 (six-digit code 797/454) does not appear in current OHARA, HOYA, or Schott catalogs. This glass appears repeatedly across numerous Nikon patents from the late 1980s and early 1990s, suggesting it was a standard catalog glass of that era that has since been discontinued or re-designated. Its position on the n<sub>d</sub>–ν<sub>d</sub> diagram places it squarely in the lanthanum crown/dense flint region, very close to OHARA S-LAH59 (1.81600/46.62) and HOYA TAFD5 — but at a distinctly lower index. The closest currently available glass would be OHARA S-LAH64 (n<sub>d</sub> = 1.78800, ν<sub>d</sub> = 47.37) or HOYA NBF1 (n<sub>d</sub> = 1.74320, ν<sub>d</sub> = 49.31), neither of which is an exact match. This glass was likely an OHARA "LAH" family member with a now-retired designation. Like L21, it is a lanthanum-based glass with anomalous partial dispersion, making it another contributor to the "low-dispersion" properties claimed for the 28Ti.

### L24 — Negative Meniscus Singlet (rear element)

| Property | Value |
|---|---|
| Shape | Negative meniscus, concave to object |
| Radii | R₁₁ = −8.874 mm, R₁₂ = −13.780 mm |
| Center thickness | 1.50 mm |
| Glass | n<sub>d</sub> = 1.59507, ν<sub>d</sub> = 35.5 |
| Focal length | −47.3 mm |

**Shape and role:** L24 mirrors L11's role at the rear of the system — a negative meniscus that bends the converging beam from G2 outward toward the image corners, expanding the cone of illumination to cover the full 35mm frame. Its concave surface faces the object (toward the stop), providing the symmetric counterpart to L11's convex-toward-object orientation. The symmetry between L11 and L24 about the stop is a defining characteristic of the Biogon type and is essential for controlling distortion and lateral chromatic aberration over the wide field.

**Glass identification:** The index 1.59507 with ν<sub>d</sub> = 35.5 (code 595/355) does not precisely match any current catalog glass. The closest candidates are OHARA S-FTM16 (n<sub>d</sub> = 1.59270, ν<sub>d</sub> = 35.45) and HOYA FF5 (n<sub>d</sub> = 1.59270, ν<sub>d</sub> = 35.44), both with a residual Δn<sub>d</sub> of about 0.0024. This is a moderately dispersive flint glass. The relatively low index (condition 8 requires N₅ < 1.70) keeps the Petzval contribution of this negative element in balance with the positive elements. Like L11's glass, the modest index prevents the negative components from over-correcting the Petzval sum.

---

## 6. Aspherical Surfaces

**The design contains no aspherical surfaces.** This is confirmed by:

1. The patent text makes no mention of aspherical coefficients for any of the thirteen embodiments.
2. No aspheric coefficient tables appear anywhere in the patent.
3. The patent concludes with a note that aspherical surfaces *could* be added to various elements to improve performance further, treating this as a future possibility rather than a feature of the presented designs.

This is notable for a wide-angle lens of this era and speaks to the quality of the all-spherical design. The seven-element, five-component architecture with two cemented doublets provides sufficient degrees of freedom to achieve F/2.87 across a 74° field using only spherical surfaces — a testament to the optimization of the Biogon lineage.

---

## 7. Glass Summary and the "ED Glass" Claim

Multiple sources describe the 28Ti lens as incorporating "ED" or "extra-low-dispersion" glass with "integrated coatings." The Wikipedia article on Nikon Ti cameras states that the 28Ti uses "low-dispersion glass." The Camerapedia and Camera-wiki entries describe "ED (extra low dispersion) glass."

Based on the prescription analysis, the likely candidates for the "low-dispersion" designation are the three lanthanum-based glasses used in L12, L21, and L23:

| Element | Glass | n<sub>d</sub> | ν<sub>d</sub> | Glass family |
|---|---|---|---|---|
| L12 | HOYA TAFD25 | 1.84042 | 43.3 | Dense lanthanum flint |
| L21 | OHARA S-LAH59 / HOYA TAFD5 | 1.81600 | 46.8 | Dense lanthanum crown |
| L23 | Discontinued lanthanum glass | 1.79668 | 45.4 | Lanthanum crown |

These lanthanum glasses exhibit anomalous partial dispersion — their partial dispersion ratio PgF deviates positively from the "normal line" on the PgF vs. ν<sub>d</sub> diagram. This anomalous dispersion characteristic is functionally similar to what conventional "ED" glasses (like fluorite crowns or FK-type glasses such as OHARA S-FPL51) provide: it enables correction of secondary spectrum (the residual chromatic aberration that remains after primary achromatization). However, unlike conventional FK-type ED glasses which achieve low dispersion through low refractive index and high Abbe number, these lanthanum glasses achieve their anomalous dispersion while maintaining very high refractive indices — a combination that simultaneously controls the Petzval sum and secondary chromatic aberration.

Nikon's use of the term "ED" or "low-dispersion" for this lens is therefore best understood as referring to the anomalous partial dispersion properties of the lanthanum elements rather than to the presence of FK-type extra-low-dispersion glass in the traditional sense. This is a legitimate but somewhat distinctive use of the term.

---

## 8. Focusing Mechanism

Embodiments 1–8 in the patent do not specify variable air spacings, implying unit focus (the entire lens assembly moves as a unit). However, Embodiments 9–13 introduce a **floating-focus** mechanism in which G1 and G2 move by different amounts during focusing:

The patent defines the floating parameter Δ = (δ₁ − δ₂) / δ₂, where δ₁ and δ₂ are the axial movements of G1 and G2 respectively. For the construction type used in Embodiments 1–7 and 9–12 (where G2 is more strongly positive than G1 — the "type (a)" architecture), the patent explains that the third-order astigmatism coefficient III of G2 is positive. Therefore, making δ₂ smaller than δ₁ (i.e., moving G2 less than G1) suppresses the positive astigmatism that would otherwise arise during close-focus.

**Embodiment 11** is the floating-focus version most closely related to Embodiment 3. It uses identical glasses for L11, L12, and L13, with slight modifications to L3, L23, and L24 glass types and adjusted radii. Its variable spacing data:

| Gap | Infinity | 300 mm (close) |
|---|---|---|
| d₅ (G1–G2 air gap) | 1.650 mm | 1.545 mm |
| BFD (image distance) | 20.514 mm | 24.033 mm |

The 28Ti production lens, which includes autofocus, almost certainly implements a floating-focus variant like Embodiment 11 rather than the simpler unit-focus Embodiment 3. The floating focus suppresses off-axis aberration changes during focus travel — critical for a compact camera where the user has no manual control over focusing and relies entirely on the AF system to deliver consistent image quality from infinity to close focus. The production 28Ti's minimum focus distance is 0.40 m (manufacturer specification), compared to the 300 mm close-focus distance used in the patent's floating-focus embodiments.

---

## 9. Design Heritage and Significance

The patent's background section traces the lineage to the Biogon family of wide-angle lenses — symmetrical designs with negative–positive–negative power distribution that can cover wide angles of view with minimal distortion while keeping element diameters small. The specific innovation of this patent is the division of the rear positive element (behind the stop) into two separate components L3 and L23 with an air gap between them. In the prior art (e.g., Japanese Utility Model No. 43-30782), this region was a single cemented positive component. The split provides the additional spherical aberration correction needed to open the aperture to f/2.87 — significantly faster than the f/4 to f/5.6 range typical of earlier compact wide-angle designs.

The design also achieves a remarkably small total lens thickness: D/f = 0.824, meaning the physical thickness of the lens stack is only 82.4% of the focal length. This compactness is critical for the 28Ti's retractable lens barrel, which must collapse flat enough for the camera to fit in a coat pocket.

Nikon's own "Thousand and One Nights" essay series (Tale No. 1) explicitly identifies the 28Ti lens as a development of the "WAKIMOTO symmetrical wideangle lens" — the symmetric (non-retrofocus) wide-angle architecture that Zenji Wakimoto pioneered at Nikon in the 1950s. This symmetric lineage, which also produced the Nikkor-SW series of large-format wide-angle lenses, is distinct from Wakimoto's separately famous retrofocus SLR designs such as the NIKKOR-H Auto 2.8cm f/3.5. The 28Ti, lacking an SLR mirror box to clear, is free to use the inherently superior symmetric form — a point multiple commentators have noted, observing that its optics are "not compromised by a retrofocus design" and are "fundamentally similar in quality to a Contax or Leica rangefinder lens of that era."

The total optical track from the front vertex to the image plane is 44.76 mm (BFD/f = 0.725), confirming the non-retrofocus character: in a retrofocus 28 mm SLR lens, the back focal distance alone would need to exceed 45 mm for mirror clearance. By avoiding the retrofocus constraint, Ohtake and Mori could devote the entire optical path to aberration correction rather than spending elements on extending the back focus — a fundamental advantage that the patent's Biogon-derived architecture fully exploits.

---

## 10. Data File Notes

### Stop Position

The patent prescription table for Embodiment 3 does not include a separate stop row — it simply states that the stop is located between L2 and L3 (i.e., in the 4.00 mm air gap after surface 5). From the patent cross-section drawing (Fig. 3), the stop appears approximately centered in this gap. The data file splits the gap 2.00 mm / 2.00 mm, inserting a flat stop surface (R = ∞) between the two halves.

### Semi-Diameter Estimation

The patent does not provide semi-diameter (clear aperture) values. SDs were estimated via a paraxial ray trace combining:

1. **Marginal ray** — parallel to the axis at height EP_SD = EFL/(2·FNo) = 28.9/(2 × 2.87) ≈ 5.03 mm, propagated through all surfaces.
2. **Chief ray** — entering at the half-field angle (37°), constrained to pass through the center of the stop (y = 0 at STO).

The envelope at each surface was computed as the combination of marginal and chief ray heights, with 8–10% clearance added for mechanical margins. The following constraints were verified:

- **sd/|R| < 0.90** for all surfaces (renderer limit on surface slope at rim)
- **SD ratio ≤ 1.25** between front and rear surfaces of each element
- **Positive edge thickness** for all elements (sag difference does not exceed center thickness)
- **Cross-gap sag clearance** — no surface pair intrudes beyond the available air gap

The most constraining surfaces are L11 rear (R = +8.919 mm, sd/|R| = 0.841) and L24 front (R = −8.874 mm, sd/|R| = 0.845), both steeply curved meniscus surfaces on the outermost elements.

### Focus Model

The data file models **unit focus** (entire lens assembly moves axially), consistent with Embodiment 3's patent specification which does not list variable air spacings. Only the back focal distance changes:

- **Infinity focus:** BFD = 20.96 mm
- **Close focus (0.40 m):** BFD ≈ 23.21 mm (computed as BFD_∞ + f²/(s − f) where s = 400 mm)

The production 28Ti likely uses the floating-focus variant described in Embodiment 11 (which shares the same glass types for the front group), but the core optical architecture is identical and the unit-focus model provides a faithful representation of the Embodiment 3 prescription.

### Group Count Terminology

The patent describes the lens as having "two groups G1 and G2" — these are the front unit (object side of stop) and rear unit (image side of stop). However, in conventional optical counting (and Nikon's marketing), the lens has **5 groups** (air-separated lens components: L11, L2, L3, L23, L24) containing **7 elements** (individual glass pieces). The data file uses `groupCount: 5` per the air-separated convention.
