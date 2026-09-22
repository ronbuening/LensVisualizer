# Optical Analysis: US 5,528,428 — Embodiment 3

## Nikon "Compact Wide-Angle Objective Lens" — Nikkor 28mm f/2.8 (28Ti)

**Patent:** US 5,528,428 (granted June 18, 1996)
**Inventors:** Motoyuki Ohtake, Motohisa Mouri (rendered as Motohisa Mori in the US patent)
**Assignee:** Nikon Corporation
**Priority dates:** November 13, 1991 (JP 3-297444); May 13, 1993 (JP 5-111289)
**Granted:** June 18, 1996
**Embodiment analyzed:** Embodiment 3

---

## 1. Patent Overview and Production Context

US 5,528,428 describes a family of compact wide-angle objective lenses based on a symmetrical Biogon-derived architecture with a negative–positive–negative power distribution around a central stop. The patent contains thirteen numerical embodiments spanning two sub-families: Embodiments 1–8 describe whole-axial-movement (unit focus) designs, while Embodiments 9–13 add a floating-focus mechanism in which the front and rear lens units move by different amounts during focusing to suppress off-axis aberration fluctuation.

The Nikon 28Ti (released 1994) is equipped with a Nikkor 28mm f/2.8 lens specified as 7 elements in 5 groups with Nikon Integrated Coating and "low-dispersion glass." Crucially, because the 28Ti is a compact camera without an SLR mirror, its lens uses a true symmetric (non-retrofocus) architecture — a fact that multiple commentators have noted as a significant optical advantage, placing it in the same class as Contax T-series and Leica rangefinder optics rather than the retrofocus SLR wide-angles of the same era. The patent's Embodiments 1–4 and 8 are computed at f = 28.9 mm and F/2.87–2.88 with 2ω ≈ 73–74°, closely matching the marketed specifications (the slight discrepancy between the patent's F/2.87 and the marketed F/2.8 is normal rounding for commercial designation). Nikon has stated that the 28Ti's lens design descends from the "symmetrical wideangle lens" designed by Zenji Wakimoto in the 1950s — consistent with the Biogon lineage described in the patent's background section.

Embodiment 3 is one of the 28.9 mm / F2.87 / 74° designs. It employs seven elements across five lens components arranged in two groups. The user has identified it as the embodiment corresponding to the production lens. Note that the production 28Ti incorporates autofocus and therefore likely uses a floating-focus variant (Embodiment 11 shares the same glass types for L1, L2a, L2b, and L4, with slightly adjusted radii and an explicit floating-focus mechanism). However, the core optical architecture is essentially identical, and Embodiment 3 is a suitable basis for analysis.

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
| 1 | 12.422 | 1.50 | 1.53172 | 49.1 | L1 front |
| 2 | 8.919 | 3.37 | 1.0 | — | L1 rear → air |
| 3 | 12.829 | 3.87 | 1.84042 | 43.3 | L2a front |
| 4 | −1726.972 | 1.00 | 1.64831 | 33.8 | L2a/L2b cement |
| 5 | 12.785 | 4.00 | 1.0 | — | L2b rear → air |
| — | (stop) | — | — | — | In the air gap (data file: 1.80 mm behind surface 5, see §10) |
| 6 | 51.931 | 2.50 | 1.81600 | 46.8 | L3a front |
| 7 | −17.040 | 1.00 | 1.61750 | 30.8 | L3a/L3b cement |
| 8 | 54.857 | 1.31 | 1.0 | — | L3b rear → air |
| 9 | −21.730 | 2.95 | 1.79668 | 45.4 | L4 front |
| 10 | −10.479 | 0.80 | 1.0 | — | L4 rear → air |
| 11 | −8.874 | 1.50 | 1.59507 | 35.5 | L5 front |
| 12 | −13.780 | 20.96 | 1.0 | — | L5 rear → BFD |

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

The design is a modified symmetric Biogon type arranged in **two lens units (G1, G2)** containing **five air-separated lens components (L1–L5)** — conventionally counted as "5 groups" in manufacturer specifications — totaling **seven glass elements**, with a between-lens shutter/stop:

```
Object → [L1] — air — [L2a|L2b] — air — STOP — air — [L3a|L3b] — air — [L4] — air — [L5] → Image
          ←——— G1 (front) ———→            ←————————— G2 (rear) ————————→
```

### Group G1 — Front Unit (object side of stop)

G1 comprises L1 and L2. Its computed group focal length is +128.6 mm — weakly positive. The patent describes this as the "first lens unit" with "small positive refractive power." The weak positive power of the front unit is characteristic of a Biogon derivative in which L1's negative divergence is only slightly exceeded by L2's positive convergence, maintaining a wide field of illumination while keeping the front element diameter compact.

### Group G2 — Rear Unit (image side of stop)

G2 comprises L3, L4, and L5. Its computed group focal length is +29.6 mm — strongly positive. The patent describes this as the "second lens unit" with "great positive refractive power." The strong positive power of G2 is responsible for most of the system's convergence. The division of the positive power behind the stop into two components (L3 and L4) is the key innovation of this patent relative to earlier Biogon designs: it provides additional degrees of freedom for correcting spherical aberration, enabling the large F/2.87 aperture.

### Power Distribution Summary

| Component | Focal length | Power | Role |
|---|---|---|---|
| L1 (singlet) | −69.9 mm | Negative | Field flattening, FOV expansion |
| L2 (doublet) | +41.8 mm | Positive | Primary front convergence, chromatic correction |
| L3 (doublet) | +61.4 mm | Positive | Rear convergence, chromatic correction |
| L4 (singlet) | +22.8 mm | Positive | Spherical aberration correction, strong convergence |
| L5 (singlet) | −47.3 mm | Negative | Field flattening, symmetry restoration |
| **G1 (L1+L2)** | **+128.6 mm** | **Weak positive** | Off-axis correction |
| **G2 (L3+L4+L5)** | **+29.6 mm** | **Strong positive** | On-axis correction, convergence |

The overall negative–positive–negative arrangement around the stop (L1 negative, L2/L3/L4 positive, L5 negative) provides the symmetry needed for low distortion and good chromatic correction across the wide 74° field.

### Petzval Sum

The computed Petzval sum is **+0.00649 mm⁻¹**, corresponding to a Petzval radius of **+154 mm**. This modest positive value indicates a slight undercorrection of field curvature — the image surface curves gently toward the lens. The patent discusses at length how the balance between the negative elements (L1, L5) and the positive elements (L2, L3, L4) is tuned through conditions (1)–(8) to keep the Petzval sum in an optimal range: small enough for a flat field, but not so aggressively corrected that higher-order aberrations degrade the image at the field edges.

---

## 5. Element-by-Element Optical Analysis

### L1 — Negative Meniscus Singlet (front element)

| Property | Value |
|---|---|
| Shape | Negative meniscus, convex to object |
| Radii | R₁ = +12.422 mm, R₂ = +8.919 mm |
| Center thickness | 1.50 mm |
| Glass | n<sub>d</sub> = 1.53172, ν<sub>d</sub> = 49.1 |
| Focal length | −69.9 mm |

**Shape and role:** L1 is a steeply curved negative meniscus with its convex surface facing the incoming light. Both radii are positive, with R₂ < R₁, making the rear surface more steeply curved. The diverging action of L1 widens the beam entering the system, enabling the lens to accept light from a 74° field of view. By bending rather than strongly refracting off-axis rays, the meniscus shape minimizes the introduction of higher-order coma and astigmatism.

**Glass identification:** The pair 1.53172 / 49.1 (six-digit code 532491) is the LLF6 family of light flints — Hikari J-LLF6 (n<sub>d</sub> = 1.53172, ν<sub>d</sub> = 48.78), OHARA PBL6Y / S-TIL6 (1.53172 / 48.96 and 48.84) and Schott LLF6 all share the index, and every current catalog row sits 0.1–0.3 below the patent's ν<sub>d</sub>. The patent names no supplier; the data file uses the Hikari catalog equivalent **J-LLF6** for the dispersion model. The low refractive index (condition 7 requires N₁ < 1.70) is deliberate: the patent explains that a low-index negative meniscus at the front keeps the Petzval sum from going excessively negative while providing sufficient field-flattening power. A higher-index glass here would over-correct the Petzval sum and introduce excessive negative coma at wide field angles.

### L2 — Cemented Positive Meniscus Doublet

L2 consists of two cemented elements: L2a (biconvex, positive) and L2b (biconcave, negative), forming a positive meniscus doublet with its convex side facing the object.

#### L2a — Biconvex Positive Element

| Property | Value |
|---|---|
| Shape | Biconvex (rear surface nearly flat) |
| Radii | R₃ = +12.829 mm, R₄ = −1726.972 mm |
| Center thickness | 3.87 mm |
| Glass | n<sub>d</sub> = 1.84042, ν<sub>d</sub> = 43.3 |
| Individual focal length | +15.2 mm |

**Glass identification:** The index 1.84042 with ν<sub>d</sub> = 43.3 (code 840433) has no coefficient-backed match in any current public catalog: the nearest rows are HOYA TAFD5 (1.83500 / 42.98) and OHARA S-LAH55 (1.83481 / 42.7), both about 0.005 low in n<sub>d</sub>. The same 840433 coordinate recurs in several other embodiments of this patent (Tables 1, 2, 7 and 13), so it is a real lanthanum dense-flint melt of the period whose supplier the patent does not name; the data file keeps the code-only label `840433` and models its dispersion from the Abbe number alone. The very high index (1.84) allows the strongly positive front surface (R₃ = 12.829 mm) to bend rays with reduced surface curvature compared to what a lower-index glass would require, helping control spherical aberration. The nearly flat rear surface (R₄ ≈ ∞) means almost all of L2a's refractive power comes from the front surface.

#### L2b — Biconcave Negative Element

| Property | Value |
|---|---|
| Shape | Biconcave (front surface nearly flat) |
| Radii | R₄ = −1726.972 mm, R₅ = +12.785 mm |
| Center thickness | 1.00 mm |
| Glass | n<sub>d</sub> = 1.64831, ν<sub>d</sub> = 33.8 |
| Individual focal length | −19.6 mm |

**Glass identification:** The index 1.64831 with ν<sub>d</sub> = 33.8 (code 648338) is an SF2-class dense flint. No current catalog row carries this exact index; the nearest coefficient-backed glasses are HOYA E-FD2, OHARA S-TIM22, Schott SF2 and Hikari J-SF2, all at 1.64769 (0.0006 low) with ν<sub>d</sub> 33.7–33.85. The data file labels the element as an **E-FD2** catalog equivalent so that its dispersion is modeled from measured coefficients rather than the Abbe number alone. Paired with the higher-ν<sub>d</sub> lanthanum glass L2a, this creates a classic crown/flint achromatic doublet. The large dispersion difference (ν<sub>d</sub> = 43.3 vs. 33.8, a gap of about 10 units) provides the chromatic correction needed to control longitudinal chromatic aberration across the front group.

**Doublet as a unit:** The L2 doublet has a combined focal length of **+41.8 mm**. Its overall external shape is a meniscus (R₃ = +12.829 mm front, R₅ = +12.785 mm rear — nearly equal radii) with its convex side toward the object. The cemented junction at R₄ ≈ −1727 mm is essentially flat, meaning the two elements are bonded at a plane surface. This flat junction minimizes Fresnel reflection losses and simplifies manufacturing. The positive power of L2 is the primary converging element in G1, partially compensating L1's divergence to make G1 weakly positive overall.

### Aperture Stop

The stop is located in the 4.00 mm air gap between L2 (surface 5) and L3 (surface 6); the patent's background section notes that this gap has to leave room for the aperture stop, shutter unit and barrel of a between-lens design. Table 3 has no stop row; the Fig. 3 stop symbol sits 1.8 mm behind surface 5, and the floating-focus sibling Embodiment 11 tabulates its stop 1.650 mm behind L2 and 2.350 mm ahead of L3 in the same 4.000 mm gap. The entrance pupil semi-diameter at f/2.87 is approximately 5.03 mm (full entrance pupil about 10.1 mm), which the exact trace maps to an iris radius of about 4.36 mm at the stop plane.

### L3 — Cemented Positive Meniscus Doublet

L3 is the first component after the stop. Like L2, it consists of a biconvex positive element (L3a) cemented to a biconcave negative element (L3b), forming a positive meniscus doublet.

#### L3a — Biconvex Positive Element

| Property | Value |
|---|---|
| Shape | Biconvex |
| Radii | R₆ = +51.931 mm, R₇ = −17.040 mm |
| Center thickness | 2.50 mm |
| Glass | n<sub>d</sub> = 1.81600, ν<sub>d</sub> = 46.8 |
| Individual focal length | +16.0 mm |

**Glass identification:** The index 1.81600 with ν<sub>d</sub> = 46.8 (code 816468) is the LAH59 family of lanthanum crowns — OHARA S-LAH59 (1.81600 / 46.62), Hikari J-LASF09A (1.81600 / 46.59) and HOYA TAF5 (1.81600 / 46.57) share the index, each about 0.2 below the patent's ν<sub>d</sub>. The data file uses the Hikari catalog equivalent **J-LASF09A**. This is another dense lanthanum glass, slightly lower index than L2a's 840433 but with a somewhat higher Abbe number, making it less dispersive. The patent's conditional expression (6) requires that the index difference N₃₁ − N₃₂ between the positive and negative elements in L3 fall between 0.04 and 0.25; for Embodiment 3, this difference is 0.199 — the largest of any embodiment — indicating aggressive Petzval correction through the refractive index differential at the cemented interface.

This is not an anomalous-dispersion glass: the catalog partial dispersion of S-LAH59 (P<sub>g,F</sub> = 0.5654 at ν<sub>d</sub> 46.6) lies on the normal glass line, and the patent names no low-dispersion or ED element anywhere in its thirteen embodiments. See §7.

#### L3b — Biconcave Negative Element

| Property | Value |
|---|---|
| Shape | Biconcave |
| Radii | R₇ = −17.040 mm, R₈ = +54.857 mm |
| Center thickness | 1.00 mm |
| Glass | n<sub>d</sub> = 1.61750, ν<sub>d</sub> = 30.8 |
| Individual focal length | −20.9 mm |

**Glass identification:** The index 1.61750 with ν<sub>d</sub> = 30.8 (code 617308) has no coefficient-backed match in any current public catalog, and it is not HOYA E-F3 (1.61293 / 37.0). Its dispersion is unusually high for its index — ordinary flints reach ν<sub>d</sub> ≈ 31 only near n<sub>d</sub> 1.70 — which places it off the common flint series; its composition is unknown. The data file keeps the code-only label `617308` and models its dispersion from the Abbe number alone. Paired with L3a's lanthanum crown, the L3 doublet forms a strongly corrected achromat. The very low Abbe number of 30.8 provides a large chromatic lever arm (ν<sub>d</sub> difference of 16.0 between L3a and L3b — much larger than L2's 9.5 unit gap), making L3 the primary chromatic correction element in the rear group.

**Doublet as a unit:** The L3 doublet has a combined focal length of **+61.4 mm**. Its overall shape is a weak meniscus (R₆ = +51.931, R₈ = +54.857 — nearly equal radii) with its convex side toward the object. Unlike L2's flat junction, L3's cemented interface at R₇ = −17.040 mm is strongly curved. This steeply curved junction surface is where the critical spherical aberration correction occurs: the patent specifically identifies the interplay between r₃₂ (the last surface of L3, i.e., R₈) and r₄₁ (the first surface of L4, i.e., R₉) as the mechanism for controlling spherical aberration and enabling the fast f/2.87 aperture.

### L4 — Positive Meniscus Singlet

| Property | Value |
|---|---|
| Shape | Positive meniscus, concave to object |
| Radii | R₉ = −21.730 mm, R₁₀ = −10.479 mm |
| Center thickness | 2.95 mm |
| Glass | n<sub>d</sub> = 1.79668, ν<sub>d</sub> = 45.4 |
| Focal length | +22.8 mm |

**Shape and role:** L4 is a strongly positive meniscus element with both surfaces concave toward the object side (both radii negative, with |R₁₀| < |R₉|). It is the most powerful single lens component in the system at +22.8 mm focal length — its surface power alone (0.044 mm⁻¹) exceeds the combined thin-lens powers of L2 and L3 (0.024 + 0.016 = 0.040 mm⁻¹). The patent describes L4's creation as the central innovation: by splitting the positive cemented component behind the stop (as found in earlier Biogon designs, e.g., Japanese Utility Model No. 43-30782) into two separate components L3 and L4 with an air space between them, the designer gained a critical additional degree of freedom for correcting spherical aberration. The air space between L3 and L4 (1.31 mm, governed by condition 3) shapes the wavefront in a way that a single thick cemented element cannot.

**Glass identification:** The patent coordinate 1.79668 / 45.4 (six-digit code 797454) does not have an exact current public row, but Hikari J-LASF017 at 1.79500 / 45.31 is inside the catalog resolver's guarded window (Δnd = −0.00168, Δνd = −0.09). The data therefore uses J-LASF017 as a coefficient-backed catalog equivalent while leaving the production supplier unidentified. The repeated 797454 coordinate across Nikon patents still suggests a discontinued or re-designated historical glass rather than a literal current J-LASF017 melt.

### L5 — Negative Meniscus Singlet (rear element)

| Property | Value |
|---|---|
| Shape | Negative meniscus, concave to object |
| Radii | R₁₁ = −8.874 mm, R₁₂ = −13.780 mm |
| Center thickness | 1.50 mm |
| Glass | n<sub>d</sub> = 1.59507, ν<sub>d</sub> = 35.5 |
| Focal length | −47.3 mm |

**Shape and role:** L5 mirrors L1's role at the rear of the system — a negative meniscus that bends the converging beam from G2 outward toward the image corners, expanding the cone of illumination to cover the full 35mm frame. Its concave surface faces the object (toward the stop), providing the symmetric counterpart to L1's convex-toward-object orientation. The symmetry between L1 and L5 about the stop is a defining characteristic of the Biogon type and is essential for controlling distortion and lateral chromatic aberration over the wide field.

**Glass identification:** The index 1.59507 with ν<sub>d</sub> = 35.5 (code 595355) does not precisely match any current catalog glass. The closest candidates are OHARA S-FTM16 (n<sub>d</sub> = 1.59270, ν<sub>d</sub> = 35.31) and HOYA FF5 (n<sub>d</sub> = 1.59270, ν<sub>d</sub> = 35.45), both with a residual Δn<sub>d</sub> of about 0.0024; the data file uses **S-FTM16** as a catalog equivalent for the dispersion model. This is a moderately dispersive flint glass. The relatively low index (condition 8 requires N₅ < 1.70) keeps the Petzval contribution of this negative element in balance with the positive elements. Like L1's glass, the modest index prevents the negative components from over-correcting the Petzval sum.

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

The patent does not support that description for Embodiment 3. Its three high-index glasses are ordinary lanthanum types:

| Element | Glass (data-file label) | n<sub>d</sub> | ν<sub>d</sub> | Glass family |
|---|---|---|---|---|
| L2a | 840433 (catalog unresolved) | 1.84042 | 43.3 | Lanthanum dense flint |
| L3a | J-LASF09A / S-LAH59 / TAF5 class | 1.81600 | 46.8 | Lanthanum crown |
| L4 | J-LASF017 catalog equivalent (797454) | 1.79668 | 45.4 | Lanthanum crown |

None of them is a low-dispersion glass in any sense — ν<sub>d</sub> 43–47 is mid-range — and none shows anomalous partial dispersion: the catalog P<sub>g,F</sub> of S-LAH59 (0.5654 at ν<sub>d</sub> 46.6) and J-LASF017 (0.5598 at 45.3) lie on or slightly below the normal glass line, not above it as ED and fluorite-crown glasses do. The patent itself names no ED, anomalous-dispersion or low-dispersion element in any of its thirteen embodiments; its chromatic correction comes from conventional crown/flint pairing in the two cemented doublets. The data file therefore marks no element as anomalous-dispersion. If the production lens really used an ED-type glass, it is not in this prescription, and the marketing description cannot be tied to any element here.

---

## 8. Focusing Mechanism

Embodiments 1–8 in the patent do not specify variable air spacings, implying unit focus (the entire lens assembly moves as a unit); the patent's closing remarks state that with this "general axial movement" focusing the aberration fluctuations remain very small. Embodiments 9–13 introduce a **floating-focus** mechanism in which G1 and G2 move by different amounts during focusing:

The patent defines the floating parameter Δ = (δ₁ − δ₂) / δ₂, where δ₁ and δ₂ are the axial movements of G1 and G2 respectively. For the construction type used in Embodiments 1–7 and 9–12 (where G2 is more strongly positive than G1 — the "type (a)" architecture), the patent explains that the third-order astigmatism coefficient III of G2 is positive. Therefore, making δ₂ smaller than δ₁ (i.e., moving G2 less than G1) suppresses the positive astigmatism that would otherwise arise during close-focus.

**Embodiment 11** is the floating-focus version most closely related to Embodiment 3. It uses identical glasses for L1, L2a, and L2b, with slight modifications to L3, L4, and L5 glass types and adjusted radii. Its variable spacing data:

| Gap (Table 14) | Infinity | 300 mm (close) |
|---|---|---|
| d₅ (L2 rear → stop; the stop stays 2.350 mm ahead of L3) | 1.650 mm | 1.545 mm |
| Bf (image distance) | 20.514 mm | 24.033 mm |

The 28Ti production lens, which includes autofocus, almost certainly implements a floating-focus variant like Embodiment 11 rather than the simpler unit-focus Embodiment 3. The floating focus suppresses off-axis aberration changes during focus travel — critical for a compact camera where the user has no manual control over focusing and relies entirely on the AF system to deliver consistent image quality from infinity to close focus. The production 28Ti's minimum focus distance is 0.40 m (manufacturer specification), compared to the 300 mm close-focus distance used in the patent's floating-focus embodiments.

---

## 9. Design Heritage and Significance

The patent's background section traces the lineage to the Biogon family of wide-angle lenses — symmetrical designs with negative–positive–negative power distribution that can cover wide angles of view with minimal distortion while keeping element diameters small. The specific innovation of this patent is the division of the rear positive element (behind the stop) into two separate components L3 and L4 with an air gap between them. In the prior art (e.g., Japanese Utility Model No. 43-30782), this region was a single cemented positive component. The split provides the additional spherical aberration correction needed to open the aperture to f/2.87 — significantly faster than the f/4 to f/5.6 range typical of earlier compact wide-angle designs.

The design also achieves a remarkably small total lens thickness: D/f = 0.824, meaning the physical thickness of the lens stack is only 82.4% of the focal length. This compactness is critical for the 28Ti's retractable lens barrel, which must collapse flat enough for the camera to fit in a coat pocket.

Nikon's own "Thousand and One Nights" essay series (Tale No. 1) explicitly identifies the 28Ti lens as a development of the "WAKIMOTO symmetrical wideangle lens" — the symmetric (non-retrofocus) wide-angle architecture that Zenji Wakimoto pioneered at Nikon in the 1950s. This symmetric lineage, which also produced the Nikkor-SW series of large-format wide-angle lenses, is distinct from Wakimoto's separately famous retrofocus SLR designs such as the NIKKOR-H Auto 2.8cm f/3.5. The 28Ti, lacking an SLR mirror box to clear, is free to use the inherently superior symmetric form — a point multiple commentators have noted, observing that its optics are "not compromised by a retrofocus design" and are "fundamentally similar in quality to a Contax or Leica rangefinder lens of that era."

The total optical track from the front vertex to the image plane is 44.76 mm (BFD/f = 0.725), confirming the non-retrofocus character: in a retrofocus 28 mm SLR lens, the back focal distance alone would need to exceed 45 mm for mirror clearance. By avoiding the retrofocus constraint, Ohtake and Mouri could devote the entire optical path to aberration correction rather than spending elements on extending the back focus — a fundamental advantage that the patent's Biogon-derived architecture fully exploits.

---

## 10. Data File Notes

### Stop Position

The patent prescription table for Embodiment 3 does not include a separate stop row — it simply states that the stop is located between L2 and L3 (i.e., in the 4.00 mm air gap after surface 5). Measured on the Fig. 3 cross-section (0.02714 mm/px, scale set by the 23.80 mm span from the first to the last vertex), the stop symbol sits 66 px = 1.8 mm behind surface 5. Embodiment 11 — the floating-focus re-optimization of this design with the same L1, L2 and L4 glasses — tabulates its stop 1.650 mm behind L2 and 2.350 mm ahead of L3 in an identical 4.000 mm gap. The data file therefore splits the gap 1.80 mm / 2.20 mm, inserting a flat stop surface (R = ∞) between the two parts; the position is figure-derived, not tabulated.

### Semi-Diameter Estimation

The patent does not provide semi-diameter (clear aperture) values. The stored values are estimates from the f/2.87 axial beam and the ω = 37° chief ray, checked surface by surface against the Fig. 3 cross-section at the scale above. Fig. 3 draws L1 and L5 with flat mounting annuli beyond the ends of their steep concave surfaces, L2 and L3 as stepped doublets, and L4 nested into L5:

| Element | Fig. 3 (optical extent, mm) | Data file (mm) | Disposition |
|---|---|---|---|
| L1 | front 9.1–9.4, rear curve end 7.8 (annulus to 9.6) | 9.1 / 7.5 | Front follows the figure; rear within 4 % |
| L2a | 7.0 / 7.0 | 6.5 / 6.2 | Within 8–13 %, retained |
| L2b | rear curve end 4.9, rim 5.8 | 5.8 | Rim retained; the axial beam needs 4.4 mm |
| L3a | 6.0 / 6.0 | 6.0 / 6.0 | Follows the figure |
| L3b | 6.9 | 6.2 | Capped: the tabulated surfaces 8 and 9 close their 1.31 mm air gap at h ≈ 6.3 mm |
| L4 | 6.8 / 7.5 (rim 7.7) | 6.0 / 6.9 | Within 9–13 %; the surface 10/11 gap (0.80 mm) closes near 6.95 mm |
| L5 | 7.2–7.7 / 9.1 | 7.5 / 8.5 | Within 7 %, retained |

The exact meridional trace at f/2.87 clears every rim on axis (smallest margin 1.4 mm at surface 5) and passes the 37° chief ray with at least 1.4 mm to spare at every surface (surface 10: chief 5.53 mm against sd 6.9). The corner bundle is limited by geometry rather than by these rims: at 37° the rays that would fill the lower half of the pupil miss the R = 8.919 mm sphere of surface 2 altogether, and the upper half is cut by the L4 front rim, so roughly 43 % of the meridional pupil passes at the corner and 88 % at 70 % of the field. The steepest rims remain L1 rear (sd/|R| = 0.841) and L5 front (0.845).

### Aperture

`nominalFno` is the patent's F<sub>NO</sub> 2.87 (marketed as f/2.8); the engine derives the iris radius (about 4.36 mm) from it, and the aperture slider runs from f/2.87 to the production lens's f/22 minimum.

### Focus Model

The data file models **unit focus** (entire lens assembly moves axially), consistent with Embodiment 3's patent specification which does not list variable air spacings. Only the back focal distance changes:

- **Infinity focus:** BF = 20.96 mm (paraxial 20.963 mm)
- **Close focus (0.40 m film-plane distance):** BF = 23.44 mm — calculated by paraxial trace, not published. The object sits 352.8 mm ahead of surface 1, the whole lens extends 2.48 mm, and the magnification is −0.086. (The thin-lens estimate f²/(s − f) with s = 400 mm gives 2.25 mm, which corresponds to a 433 mm object-to-image distance.)

The production 28Ti likely uses the floating-focus variant described in Embodiment 11 (which shares the same glass types for the front group), but the core optical architecture is identical and the unit-focus model provides a faithful representation of the Embodiment 3 prescription.

### Group Count Terminology

The patent describes the lens as having "two groups G1 and G2" — these are the front unit (object side of stop) and rear unit (image side of stop). However, in conventional optical counting (and Nikon's marketing), the lens has **5 groups** (air-separated lens components: L1, L2, L3, L4, L5) containing **7 elements** (individual glass pieces). The data file uses `groupCount: 5` per the air-separated convention.
