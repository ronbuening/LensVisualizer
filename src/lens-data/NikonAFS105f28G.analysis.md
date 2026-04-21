# Optical Analysis: Nikon AF-S VR Micro-NIKKOR 105mm f/2.8G IF-ED

## US 7,218,457 B2 — Example 3 (Sensui, 2007)

**Patent:** US 7,218,457 B2, "Interchangeable Lens"
**Inventor:** Takayuki Sensui
**Assignee:** Nikon Corporation
**Filed:** September 29, 2005 (priority JP 2004-289051, September 30, 2004)
**Granted:** May 15, 2007
**Production lens:** Nikon AF-S VR Micro-NIKKOR 105mm f/2.8G IF-ED (product code 2160, announced February 2006)

---

## 1. Patent-to-Production Identification

The patent discloses four numerical examples of a medium-telephoto macro lens with vibration reduction. All four share the same fundamental architecture — a positive-negative-positive-negative four-group design with a split fourth group serving as both VR element and field corrector. Example 3 is identified as the production design on the following convergent evidence:

The computed EFL of Example 3 is 104.00 mm, consistent with the marketed 105 mm focal length (manufacturers routinely round to the nearest 5 mm for naming). The design achieves 1:1 magnification (β = −1.0), and the computed object-to-image distance at this magnification is approximately 310 mm — closely matching Nikon's published minimum focus distance of 0.314 m (1.03 ft), measured from the sensor plane to the subject. The f-number at infinity is stated as FNO = 2.88, consistent with commercial rounding to f/2.8. The maximum image height of Y = 21.60 mm corresponds to a half-diagonal just large enough to cover the 43.27 mm FX-format diagonal (21.63 mm half-diagonal). Finally, the 14-element design matches Nikon's published "14 elements in 12 groups" specification exactly on element count. The group count of 11 or 12 (discussed in §5) is close enough that the discrepancy is almost certainly explained by a production flat element or a counting convention.

Examples 1 and 2 are closely related variants with identical group structures but slightly different glass selections and radii. Example 4 is the only variant where the G5 rear group also moves during focusing — a more complex floating-focus design that was evidently not chosen for production.


## 2. Design Architecture

The lens consists of four main groups arranged object-to-image, with the fourth group subdivided into front and rear subgroups:

| Group | Power | Elements | Role | Focus Behavior |
|-------|-------|----------|------|----------------|
| G1 | Positive (f ≈ +55 mm) | L11 – L14 | Front collecting group; sets entrance pupil | **Fixed** |
| G2 | Negative (f ≈ −38 mm) | L21, L22+L23 | Diverging group; aberration balancing | **Moves image-ward** |
| Stop | — | Aperture | Between G2 and G3; fixed position, variable diameter | **Fixed** |
| G3 | Positive (f ≈ +42 mm) | L31, L32+L33 | Main converging group; ED element for LoCA | **Moves object-ward** |
| G4 | Negative (f ≈ −49 mm) | L41+L42 | VR element; image-blur correction | **Fixed** (shifts ⊥ axis for VR) |
| G5 | Positive (f ≈ +109 mm) | L51, L52 | Field flattener and BFD relay | **Fixed** |

The overall power distribution uses a positive-negative front pair (G1–G2) that converges the incoming beam efficiently, followed by a converging relay section (G3–G4) that re-images through the VR element to the sensor plane. The combined fourth group has negative power (f₄ ≈ −115 mm), which provides the divergence needed for the system to maintain the long back focal distance required for SLR mirror clearance. The total optical track at infinity is approximately 159 mm — slightly longer than the 104 mm EFL — with the 53 mm BFD accounting for most of the overshoot. The optical length from the first element to the last glass surface (excluding BFD) is approximately 106 mm, nearly equal to the focal length, making this a compact design for the back focal distance it must deliver.


## 3. Aspherical Surfaces

**There are no aspherical surfaces in this design.** This is confirmed by three independent lines of evidence:

First, the patent's Example 3 prescription table lists no aspherical coefficient data. Examples 1 through 4 in this patent are entirely spherical designs — no conic constants or polynomial coefficients appear anywhere in the patent text.

Second, Nikon's official product specifications for the AF-S VR Micro-NIKKOR 105mm f/2.8G IF-ED list one ED glass element but make no mention of aspherical elements. By contrast, Nikon's specification sheets explicitly call out aspherical elements (marked "AS") when present, as they do for the newer NIKKOR Z MC 105mm f/2.8 VR S, which has one aspherical element.

Third, independent reviews (Photography Life, Cameralabs, Thom Hogan) consistently describe the optical formula as having "one ED glass element but no other special elements."

A note of caution: one Amazon product listing includes the phrase "Aspherical Lens Element (AS)" in a description block for this lens. This appears to be a copy-paste error from a different NIKKOR product page and should be disregarded. Nikon's own specification pages are the authoritative source, and they do not list any aspherical elements for product code 2160.

The all-spherical design is notable for a 2006-era macro lens of this complexity. Sensui's design achieves excellent aberration correction through careful glass selection and the floating-focus architecture rather than through aspherical surface departures.


## 4. Element-by-Element Analysis

### 4.1 Group 1 — Front Collecting Group (Fixed)

**L11 — Element 1** (surfaces 1–2)
| Property | Value |
|----------|-------|
| Shape | Biconvex (R₁ = +135.48, R₂ = −190.55) |
| Glass | nd = 1.7725, νd = 49.61 → OHARA S-LAH66 (lanthanum crown) |
| Center thickness | 4.827 mm |
| Focal length | +103.2 mm |
| Role | Front positive collector. The high-index LaH glass minimizes surface curvatures needed for the given power, reducing both spherical aberration contribution and Petzval sum contribution at this element. The relatively long focal length means this element contributes modest positive power while keeping the entrance pupil diameter manageable. |

**L12 — Element 2** (surfaces 3–4)
| Property | Value |
|----------|-------|
| Shape | Positive meniscus, convex to object (R₁ = +49.73, R₂ = +328.13) |
| Glass | nd = 1.6127, νd = 58.75 → OHARA S-BSM2 (barium crown) |
| Center thickness | 5.044 mm |
| Focal length | +95.0 mm |
| Role | Second positive element with stronger curvature than L11. The barium crown glass provides moderate index with low dispersion. The meniscus form reduces the angle of incidence at the strongly curved front surface, which controls higher-order spherical aberration. Together with L11, this element provides the bulk of G1's positive power. |

**L13 — Element 3** (surfaces 5–6)
| Property | Value |
|----------|-------|
| Shape | Biconcave (R₁ = −301.40, R₂ = +36.66) |
| Glass | nd = 1.7174, νd = 29.52 → OHARA S-TIH13 (heavy flint) |
| Center thickness | 1.300 mm |
| Focal length | −45.5 mm |
| Role | Negative high-dispersion element within G1. This is the chromatic corrector for the G1 group — its high dispersion (low νd) and negative power counteract the longitudinal chromatic aberration introduced by the positive L11 and L12. The biconcave form with a weak front surface and strong rear surface concentrates the diverging action near the strongly curved R₂ = +36.66 surface. The very thin center thickness (1.3 mm) and short air gap to L14 (0.26 mm) suggest this element is designed to work as a close pair with L14 for chromatic-spherical aberration balancing. |

**L14 — Element 4** (surfaces 7–8)
| Property | Value |
|----------|-------|
| Shape | Convex-plano (R₁ = +39.19, R₂ = ∞) |
| Glass | nd = 1.7725, νd = 49.61 → OHARA S-LAH66 (lanthanum crown, same as L11) |
| Center thickness | 5.020 mm |
| Focal length | +50.7 mm |
| Role | The strongest positive element in G1, with a flat rear surface facing the variable air gap D8. The convex-plano form is favorable for minimizing spherical aberration when the element is working close to the stop (the aperture is not far behind G1 in this design). Using the same glass as L11 simplifies inventory and manufacturing. The flat rear surface also provides a clean mechanical reference for the G1 barrel assembly. |

**G1 summary:** Four elements providing combined f ≈ +55 mm. The L13 flint element corrects axial color within the group while the high-index lanthanum crowns (L11, L12, L14) keep Petzval sum contribution modest. G1 remains fixed during both focusing and VR operation.

---

### 4.2 Group 2 — Diverging Group (Moves Image-ward During Focus)

**L21 — Element 5** (surfaces 9–10)
| Property | Value |
|----------|-------|
| Shape | Biconcave (R₁ = −184.46, R₂ = +27.39) |
| Glass | nd = 1.5827, νd = 46.43 → OHARA S-TIM22 (light flint) |
| Center thickness | 1.100 mm |
| Focal length | −40.9 mm |
| Role | Strong negative singlet. The asymmetric biconcave form (steep rear surface) concentrates diverging power. The light flint glass places this element between the crown and flint families on the glass map — a deliberate choice to provide negative power with moderate dispersion, contributing to Petzval field flattening without excessive chromatic overcorrection. |

**L22 + L23 — Elements 6–7, cemented doublet** (surfaces 11–13)

L22:
| Property | Value |
|----------|-------|
| Shape | Biconcave (R₁ = −173.39, junction R₂ = +26.39) |
| Glass | nd = 1.5317, νd = 48.87 → No exact catalog match; likely proprietary |
| Center thickness | 1.252 mm |
| Focal length | −43.0 mm |

L23:
| Property | Value |
|----------|-------|
| Shape | Positive meniscus, convex to object (junction R₁ = +26.39, R₂ = +89.69) |
| Glass | nd = 1.8052, νd = 25.43 → OHARA S-TIH6 / SCHOTT N-SF6 (dense flint) |
| Center thickness | 4.021 mm |
| Focal length | +46.5 mm |

| Doublet role | The L22+L23 cemented doublet provides overall weak negative power within G2 while serving primarily as a monochromatic aberration corrector and Petzval field flattener. The pairing is unusual: L23's dense flint glass (νd = 25.43) carries positive power, which is the reverse of a classical achromatic doublet where the positive element is normally the low-dispersion crown. This means L23 actually *adds* to the group's chromatic aberration rather than correcting it — the chromatic balance of G2 is managed at the system level, principally by the ED element (L31) and its partner (L32) in G3. The dense flint L23's high refractive index (nd = 1.805) allows it to provide strong positive power from modest surface curvatures, keeping the doublet compact. The combined negative power of L21 + L22+L23 contributes to Petzval field flattening — a critical function in a macro lens that must maintain flat-field imaging across the full range from infinity to 1:1. |

**G2 summary:** Three elements (one singlet + one cemented doublet) providing combined f ≈ −38 mm. During focusing from infinity to 1:1, G2 moves monotonically toward the image (D8 increases from 3.0 to 21.3 mm, D13 decreases from 21.4 to 3.2 mm). This rearward movement increases the overall system's effective focal length and magnification.

---

### 4.3 Aperture Stop

The aperture stop is located in the air space between G2 and G3. It is fixed in position during focusing but its diameter varies with focus distance. This is necessary because the entrance pupil diameter that fills the stop at infinity would overfill it at close focus distances — the RAND ray (the marginal ray at zero image height) shifts as the conjugates change. The patent text explicitly notes this diameter variation as a feature of the design.

The variable-diameter stop is common in modern macro lenses. It explains the well-known "effective aperture" behavior of the production lens: while the nominal f-number remains f/2.8 at all focus distances, the effective f-number at 1:1 is approximately f/4.8 due to both the bellows factor from image magnification and the reduced stop diameter.

---

### 4.4 Group 3 — Main Converging Group (Moves Object-ward During Focus)

**L31 — Element 8** (surfaces 16–17)
| Property | Value |
|----------|-------|
| Shape | Symmetric biconvex (R₁ = +114.43, R₂ = −114.43) |
| Glass | **nd = 1.4970, νd = 81.61 → OHARA S-FPL51 / HOYA FCD1 (ED glass)** |
| Center thickness | 3.001 mm |
| Focal length | +115.6 mm |
| Role | **This is the single ED (Extra-low Dispersion) element identified in Nikon's production specifications.** S-FPL51 is a fluorophosphate crown with anomalous partial dispersion (ΔPgF ≈ +0.028), meaning it deviates significantly from the "normal line" on the PgF vs. νd diagram. When paired with the dense flint L32, this anomalous dispersion enables correction of secondary spectrum — the residual chromatic focus shift between the C and F correction wavelengths that ordinary achromatic doublets cannot eliminate. The perfectly symmetric biconvex form (|R₁| = |R₂|) is significant: it minimizes coma at this element, which matters because G3 sits close to the aperture stop where marginal ray heights are large. The modest power (f ≈ +116 mm) relative to the group's combined f ≈ +42 mm means most of G3's convergence comes from the cemented doublet behind L31. |

**L32 + L33 — Elements 9–10, cemented doublet** (surfaces 18–20)

L32:
| Property | Value |
|----------|-------|
| Shape | Negative meniscus, convex to object (R₁ = +52.14, R₂ = +26.56) |
| Glass | nd = 1.8467, νd = 23.78 → OHARA S-TIH53W / SCHOTT SF57 (very dense flint) |
| Center thickness | 1.128 mm |
| Focal length | −64.0 mm |

L33:
| Property | Value |
|----------|-------|
| Shape | Biconvex (R₁ = +26.56, R₂ = −77.90) |
| Glass | nd = 1.6204, νd = 60.29 → OHARA S-LAL59 (lanthanum crown) |
| Center thickness | 6.991 mm |
| Focal length | +31.9 mm |

| Doublet role | This is a classical achromatic doublet in the new-achromat sense: a high-dispersion negative flint (L32, SF57 equivalent) cemented to a low-dispersion positive crown (L33, S-LAL59). The combined power is strongly positive and provides the majority of G3's convergence. The thick positive element L33 (6.99 mm) carries substantial refracting power at both surfaces. The extremely high-index flint L32 (nd = 1.847) paired with the ED element L31 forms a quasi-apochromatic correction cell: L31's anomalous partial dispersion combined with L32's extreme dispersion allows the designer to attack secondary spectrum across the G3 group, reducing longitudinal chromatic aberration to very low levels across the visible spectrum. This is the chromatic correction engine of the entire lens. |

**G3 summary:** Three elements (one ED singlet + one cemented doublet) providing combined f ≈ +42 mm. During focusing, G3 moves monotonically toward the object side (D14 decreases from 14.5 to 0.0 mm, D20 increases from 2.0 to 16.5 mm). At maximum magnification, D14 reaches zero, but the fixed 2.47 mm air space between surface 15 (a dummy reference plane) and L31's front surface means G3 approaches within approximately 2.5 mm of the aperture stop — it does not contact it. G3 is the primary focusing group.

---

### 4.5 Group 4a — VR (Vibration Reduction) Element (Fixed, Shifts ⊥ Axis)

**L41 + L42 — Elements 11–12, cemented doublet** (surfaces 21–23)

L41:
| Property | Value |
|----------|-------|
| Shape | Negative meniscus, weakly convex to object (R₁ = +754.47, R₂ = +21.42) |
| Glass | nd = 1.8061, νd = 40.94 → closest OHARA S-TIH53 (νd = 40.73, Δνd = 0.21); alt. CDGM H-LAF3B (νd = 40.95, Δνd = 0.01) |
| Center thickness | 1.100 mm |
| Focal length | −27.4 mm |

L42:
| Property | Value |
|----------|-------|
| Shape | Positive meniscus, convex to object (R₁ = +21.42, R₂ = +37.43) |
| Glass | nd = 1.8052, νd = 25.43 → OHARA S-TIH6 / SCHOTT N-SF6 (dense flint) |
| Center thickness | 4.805 mm |
| Focal length | +62.2 mm |

| Doublet role | This cemented doublet is the vibration reduction (VR) element. When the lens system is vibrated (camera shake), this doublet shifts perpendicular to the optical axis to redirect the image back onto the sensor. The combined power is negative (f₄ₐ ≈ −49 mm), and the cemented construction is critical: the patent text explicitly states that making the VR front group a cemented lens enables chromatic aberration to be "well corrected for even when vibrating." Without the cementation, lateral color would degrade significantly during off-axis VR shifts. The nearly flat front surface (R₁ = +754 mm) on L41 means the doublet's optical action is concentrated at the steeply curved cemented interface (R = +21.42) and the rear surface (R = +37.43). Both glasses are high-index flints, which is unusual for a cemented doublet. The design priority here is compactness and high VR coefficient rather than conventional achromatic correction — the chromatic balance is handled by the differential dispersion between the two flint types (νd 40.9 vs. 25.4). The 8.82 mm air gap between G4a and G4b provides the physical space needed for the VR actuator mechanism (voice coil motors, position sensors, and guide rails). |

---

### 4.6 Group 4b — Field Flattener / Relay (Fixed)

**L51 — Element 13** (surfaces 24–25)
| Property | Value |
|----------|-------|
| Shape | Negative meniscus, concave to object (R₁ = −27.16, R₂ = −51.22) |
| Glass | nd = 1.5182, νd = 58.96 → OHARA S-NSL3 (normal crown) |
| Center thickness | 1.100 mm |
| Focal length | −113.4 mm |
| Role | Weak negative meniscus that acts as a field flattener. Positioned close to the image plane (in the converging cone from G4a), this element's negative power counteracts the Petzval field curvature accumulated by all the positive groups upstream. The low-index crown glass keeps the element's own aberration contributions small. The concave-to-object meniscus form is standard for field-flattening elements near the image plane. |

**L52 — Element 14** (surfaces 26–27)
| Property | Value |
|----------|-------|
| Shape | Symmetric biconvex (R₁ = +88.67, R₂ = −88.67) |
| Glass | nd = 1.7859, νd = 44.20 → OHARA S-LAH51 (lanthanum crown) |
| Center thickness | 4.902 mm |
| Focal length | +57.1 mm |
| Role | Rear positive element providing the final convergence needed to bring the image to focus at the sensor plane while maintaining the required back focal distance. The symmetric form again minimizes coma. The high-index lanthanum glass gives strong positive power with moderate curvatures, and its position near the image — where off-axis ray bundles are well-separated from the axis — allows it to influence field curvature, astigmatism, and distortion independently of on-axis aberrations. Nikon's production lens specifies one element with Nano Crystal Coat (NCC), but the patent does not identify which element receives it; the assignment cannot be determined from prescription data alone. |

**G4b summary:** Two elements providing combined f ≈ +109 mm. The weak negative L51 and strong positive L52 together flatten the field and relay the image to the correct BFD for F-mount compatibility (~53 mm). Both elements are fixed during focusing; the near-constant BFD across the focus range (53.12 → 52.48 mm, a change of only 0.64 mm) confirms true internal focusing behavior.


## 5. Group Counting: 14 Elements in 11 or 12 Groups

The patent prescription yields 14 elements unambiguously. The group count depends on how one treats very small air gaps. Counting every air space as a group boundary yields 11 groups:

G1 contributes 4 groups (L11, L12, L13, L14 — each separated by air), G2 contributes 2 groups (L21 singlet and L22+L23 doublet), G3 contributes 2 groups (L31 singlet and L32+L33 doublet), G4a contributes 1 group (L41+L42 doublet), and G4b contributes 2 groups (L51 singlet and L52 singlet). This totals 11.

Nikon's published specification states 12 groups. The discrepancy of one group has two plausible explanations. Surface 15 in the prescription — a flat dummy surface (R = 0) with a fixed 2.47 mm air thickness, positioned between the stop and G3 — is unique to Example 3 among the patent's four numerical examples; Examples 1, 2, and 4 all have 26 surfaces while Example 3 has 27. In the production lens, this surface may represent a physical element not optically active in the patent model (such as a flat spacer plate, baffle, or mechanical reference surface within the aperture mechanism) that constitutes an additional group. Alternatively, Nikon's group-counting convention may differ from the strict air-separation rule — for instance, treating one of the very small air gaps (0.15 mm between L31 and L32, or 0.15 mm between L51 and L52) as a contact spacing. Without Nikon's official element-to-group mapping, the exact resolution is uncertain. Either way, the 14-element count and overall architecture match perfectly.


## 6. Focusing Mechanics

The lens employs a **floating-focus (dual-group internal focus)** system. Two groups move in opposite directions during focus:

**G2 moves toward the image** (D8 grows from 3.0 mm at infinity to 21.3 mm at 1:1). This opens a large gap between the fixed G1 and the retreating G2.

**G3 moves toward the object** (D14 shrinks from 14.5 mm to 0.0 mm at 1:1). At maximum magnification, the variable gap D14 has fully closed, placing G3 within 2.5 mm of the aperture stop (separated only by the fixed thickness of the dummy reference surface 15).

The symmetry of the movement is striking: D8 increases by exactly 18.29 mm while D13 decreases by exactly 18.29 mm. This is not coincidence — it reflects a mechanical cam design where G2 and G3 ride on a common focus cam with opposite-direction slots, ensuring the two groups always move by equal but opposite amounts relative to the fixed barrel.

The BFD (D27) remains nearly constant at approximately 53 mm across the entire focus range (Δ = −0.64 mm from infinity to 1:1), confirming true internal focus behavior. The lens does not change physical length during focusing, which is important for both mechanical sealing and for maintaining working distance in macro photography.

The focus limiter switch on the production lens (Full range vs. ∞–0.5m) restricts the cam travel to prevent the AF motor from hunting through the full range when shooting at normal distances.


## 7. Vibration Reduction (VR) System

The VR element is the G4a cemented doublet (L41+L42). During image stabilization, this doublet shifts perpendicular to the optical axis. The patent places the VR group in a "rear-side vibration reduction structure" — meaning the VR group is located behind all the focusing groups. This arrangement has several advantages noted in the patent text:

The VR coefficient (ratio of image displacement to VR element displacement) increases naturally with shooting magnification. This is important for a macro lens because image displacement from vibration grows with magnification — the lens automatically compensates more aggressively at closer focus distances without requiring a larger VR shift range.

The VR drive system (actuators, sensors, guide rails) can be co-located with the VR element in a fixed section of the lens barrel, since G4a doesn't move during focusing. This simplifies the mechanical design and reduces the weight of moving components.

The 8.82 mm air gap between G4a and G4b provides physical space for the VR mechanism hardware.

The cemented doublet construction of the VR group is specifically called out in the patent as important for maintaining chromatic correction during VR shifts. A singlet VR element would introduce lateral color proportional to its shift amount, but the cemented doublet's internal chromatic balance largely neutralizes this effect.


## 8. Glass Selection Strategy

### 8.1 Glass Map Summary

| Element | nd | νd | Catalog Match | Glass Family | APD |
|---------|------|-------|---------------|--------------|-----|
| L11 | 1.7725 | 49.61 | S-LAH66 (OHARA) | Lanthanum crown | Normal |
| L12 | 1.6127 | 58.75 | S-BSM2 (OHARA) | Barium crown | Normal |
| L13 | 1.7174 | 29.52 | S-TIH13 (OHARA) | Heavy flint | Normal |
| L14 | 1.7725 | 49.61 | S-LAH66 (OHARA) | Lanthanum crown | Normal |
| L21 | 1.5827 | 46.43 | S-TIM22 (OHARA) | Light flint | Normal |
| L22 | 1.5317 | 48.87 | *No exact match* | Crown (proprietary) | Unknown |
| L23 | 1.8052 | 25.43 | S-TIH6 (OHARA) | Dense flint | Normal |
| **L31** | **1.4970** | **81.61** | **S-FPL51 (OHARA)** | **Fluorophosphate ED** | **Anomalous** |
| L32 | 1.8467 | 23.78 | S-TIH53W (OHARA) / SF57 (SCHOTT) | Very dense flint | Normal |
| L33 | 1.6204 | 60.29 | S-LAL59 (OHARA) | Lanthanum crown | Normal |
| L41 | 1.8061 | 40.94 | S-TIH53 (OHARA), Δνd = 0.21; alt. CDGM H-LAF3B (Δνd = 0.01) | Dense flint (TIH series) | Normal |
| L42 | 1.8052 | 25.43 | S-TIH6 (OHARA) | Dense flint | Normal |
| L51 | 1.5182 | 58.96 | S-NSL3 (OHARA) | Normal crown | Normal |
| L52 | 1.7859 | 44.20 | S-LAH51 (OHARA) | Lanthanum crown | Normal |

Glass identifications are inferred from nd/νd matching against published catalogs (OHARA, SCHOTT, HOYA, CDGM). Patent prescriptions typically use nd/νd values rounded from catalog specifications, so matches within Δnd < 0.0001 and Δνd < 0.1 are considered positive identifications. L22 (nd = 1.5317, νd = 48.87) has no close match in current public catalogs and may represent a proprietary formulation, discontinued glass, or Nikon-specified melt. L41 (nd = 1.8061, νd = 40.94) is closest to OHARA S-TIH53 (νd = 40.73, Δνd = 0.21) among Japanese glass manufacturers; however, CDGM H-LAF3B (νd = 40.95, Δνd = 0.01) is a near-exact match. The CDGM match is noteworthy but a 2004-era Nikon design would more typically source from OHARA, SCHOTT, or HOYA. The discrepancy with S-TIH53 is small enough to reflect catalog revisions or melt-to-melt variation, but cannot be confirmed as an exact match without manufacturer documentation.

### 8.2 Chromatic Correction Strategy

The lens uses a single ED glass element (L31, S-FPL51) positioned in G3 where it works with the very dense flint L32 (OHARA S-TIH53W / Schott SF57 equivalent, nd = 1.847, νd = 23.78) to attack secondary spectrum. This is Nikon's standard ED-correction approach for moderate telephoto lenses: rather than using exotic materials throughout the design, one strategically placed anomalous-dispersion element paired with a high-dispersion partner provides most of the secondary spectrum correction.

The remaining chromatic correction relies on conventional crown-flint doublets: L22+L23 in G2 and L41+L42 in G4a each use high-dispersion flints (νd ≈ 25) paired with moderate-dispersion partners. L13 serves as the in-group flint corrector for G1.

Nikon does not apply the APO designation to this lens, nor does the design meet the strict optical definition of apochromatic correction (three wavelengths brought to a common focus). Rather, the ED element substantially reduces secondary spectrum compared to a conventional design, consistent with Nikon's practice of using ED glass to achieve "apochromatic-equivalent" performance without formally claiming APO status.


## 9. Conditional Expressions (Verified)

The patent specifies five conditional expressions that constrain the design space. All values were independently computed from the prescription via paraxial matrix ray trace and confirmed against the patent's stated values:

| Expression | Formula | Computed | Patent | Range | Status |
|------------|---------|----------|--------|-------|--------|
| (1) | f/(−f₄) | 0.902 | 0.90 | 0.75–1.50 | ✓ Satisfied |
| (2) | f/f₃ | 2.457 | 2.46 | 1.90–4.00 | ✓ Satisfied |
| (3) | f/(−f₄ₐ) | 2.123 | 2.13 | 1.60–2.50 | ✓ Satisfied |
| (4) | f/f₄ᵦ | 0.954 | 0.95 | 0.75–1.50 | ✓ Satisfied |
| (5) | −(f/f₄ₐ + f/f₄ᵦ) | 1.170 | 1.18 | 0.75–1.50 | ✓ Satisfied |

Expression (1) constrains the fourth group's power to balance back focal length requirements against aberration correction. Expression (2) limits the third group's power to prevent excessive focusing travel while controlling spherical aberration. Expressions (3) through (5) jointly constrain the G4a/G4b power split to achieve both adequate VR coefficient and sufficient physical space between the VR element and the rear group.


## 10. Computed Specifications Summary

| Parameter | Value | Nikon Spec |
|-----------|-------|------------|
| Focal length (design) | 104.00 mm | 105 mm (marketed) |
| Maximum aperture | f/2.88 | f/2.8 |
| Half-field angle | 11.7° | 11.67° (23°20' full) |
| Maximum image height | 21.60 mm | 21.6 mm (FX diagonal) |
| Elements / Groups | 14 / 11–12 | 14 / 12 |
| ED elements | 1 (L31, S-FPL51) | 1 |
| Aspherical surfaces | 0 | 0 |
| Close focus (β = −1.0) | ~0.31 m | 0.314 m |
| Total optical track | 159.0 mm | — |
| BFD at infinity | 53.12 mm | ~53 mm (F-mount register 46.5 + clearance) |
| BFD at 1:1 | 52.48 mm | — |
| Focus type | Internal, floating (G2 + G3) | IF |
| VR element | G4a (L41+L42 cemented doublet) | VR II |


## 11. Sources

- US 7,218,457 B2, "Interchangeable Lens," Takayuki Sensui, Nikon Corporation, granted May 15, 2007. Example 3 prescription data (Table 3, columns 13–14).
- Nikon USA product page: AF-S VR Micro-NIKKOR 105mm f/2.8G IF-ED, product code 2160. Accessed March 2026 at nikonusa.com.
- Nikon sell sheet (February 2006 PDF): "105mm f/2.8G ED-IF AF-S VR MICRO-NIKKOR LENS" specifications.
- OHARA Optical Glass Catalog, current edition. Glass identification by nd/νd matching. S-FPL51 data sheet (January 2025 revision): confirmed θg,F = 0.5375, Δθg,F = +0.0280, nd = 1.49700, νd = 81.54.
- SCHOTT Optical Glass Data Sheets. SF57 identification for L32 (nd = 1.84666, νd = 23.83).
- HOYA Optical Glass Catalog. FCD1 cross-reference for L31 (S-FPL51 equivalent).
- Spencer Cox, "Nikon 105mm f/2.8G VR Macro Review," Photography Life, January 2026. Confirmation of optical formula (14 elements, 1 ED, no aspherical).
- Gordon Laing, "Nikon Micro 105mm f2.8G VR review," Cameralabs, September 2018. Production specifications cross-reference.
- Thom Hogan, "Nikon 105mm f/2.8G Micro-Nikkor Lens Review," DSLRBodies, December 2025. Close focus distance and handling characteristics.

---

*Analysis prepared from patent prescription data with independent computational verification. All focal lengths, conditional expressions, and ray-trace results were computed using paraxial matrix methods in Python and verified against patent-stated values. Glass identifications are inferred from catalog matching and should be treated as best-match estimates unless confirmed by manufacturer documentation.*
