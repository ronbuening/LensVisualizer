# Leica Elmarit-R 28mm f/2.8 — Optical Analysis

**Patent:** US 3,591,257 · Example 3
**Inventors:** Walter Mandler, Garry Edwards, Erich Wagner (Ernst Leitz Canada, Midland, Ontario)
**Filed:** July 13, 1969 · **Priority:** June 15, 1968 (Germany, P 17 72 665.7)
**Granted:** July 6, 1971
**Assignee:** Ernst Leitz GmbH, Wetzlar, Germany

---

## 1. Historical Context

The Elmarit-R 28mm f/2.8 was introduced at Photokina 1970 as a compact, moderately fast wide-angle lens for the Leicaflex SLR system, combining a 76° diagonal field of view with an f/2.8 maximum aperture in a remarkably small package — just 40mm protrusion from the camera body and 275g in weight.

The patent US 3,591,257 was filed by Walter Mandler, Garry Edwards, and Erich Wagner at Ernst Leitz Canada (ELCAN) in Midland, Ontario. However, the Leica Wiki credits the production lens to Rudolf Ruehl at Leitz Wetzlar (the lens inscription reads "LEITZ WETZLAR"), and the production design differs meaningfully from the patent examples — most notably in its all-air-spaced element arrangement versus the cemented doublets of the patent. The patent secures the general design principle and topology; the production implementation was evidently refined further, possibly by a different team at the parent facility.

The fundamental challenge addressed by this patent is the long-back-focal-distance problem inherent in SLR wide-angle lenses. The Leicaflex's reflex mirror requires adequate clearance behind the lens mount, yet a 28mm focal length yields only 28mm of back focus in a symmetric design. The patent describes an asymmetric, quasi-retrofocus arrangement that achieves a back focal distance equal to approximately two-thirds of the total focal length — sufficient for mirror clearance without resorting to the extreme retrofocus topologies that plagued contemporary designs with severe lateral chromatic aberration.

The Elmarit-R 28mm f/2.8 I was produced from 1970 to 1992 with fewer than 50,510 lenses manufactured. It was offered in 2-cam, 3-cam, and R-only variants, with a limited-production Safari green version (approximately 6,000 units) for the Leica R3 Safari.

## 2. Patent Overview and Example Selection

US 3,591,257 describes the general design principle and provides six numerical examples of increasing complexity:

| Example | Elements | Field Angle | Relative Opening | Notes |
|---------|----------|-------------|-----------------|-------|
| 1 | 4 | ±19.5° | f/4 | Minimal embodiment, no glass data |
| 2 | 5 | ±31° | f/4 | Adds glass data, one front meniscus |
| **3** | **8** | **±37°** | **f/2.8** | **Two front menisci, two cemented doublets** |
| 4 | 8 | ±40° | f/2.8 | Wider field variant |
| 5 | 8 | ±45° | f/3.4 | Super-wide variant |
| 6 | 8 | ±50° | f/3.4 | Widest embodiment (described in text only) |

Example 3 is the design most closely corresponding to the production Elmarit-R 28mm f/2.8, with its ±37° half-field angle matching the 76° diagonal coverage of a 28mm lens on the 24×36mm format (computed: 37.7°). All data in this analysis derive from this example unless otherwise stated. A certificate of correction (December 11, 1971) corrected one value in Example 6's claim text (f₁ from "−22.8" to "−122.8"), but Example 3 was unaffected.

**Patent-to-production discrepancy:** The 1970 *LEICA Photography* magazine describes the production Elmarit-R 28mm f/2.8 I as "a completely air-spaced eight-element retrofocus design" — 8 elements in 8 groups with no cemented interfaces. Example 3, however, contains two cemented doublets (L21+L22 and L32+L33), yielding 8 elements in 6 groups. The production lens was evidently refined beyond the patent example, uncementing both doublets to create additional degrees of freedom (two extra air–glass interfaces, each adding controllable parameters for aberration correction). This is a common refinement path: the patent secures the general topology and design principle, while the production version is further optimized.

## 3. Prescription Data

All values are at the patent's normalized focal length of f = 100. Refractive indices and Abbe numbers are given at the **e-line** (λ = 546.1 nm), following the German convention standard in Leitz patents of this era.

### 3.1 Surface Prescription

| Surface | R | d | nₑ | Element | Notes |
|---------|----:|----:|------:|---------|-------|
| r₁ | +98.79 | 5.43 | 1.62286 | L11 entry | Front negative meniscus |
| r₂ | +61.20 | 9.86 | 1.0 | L11 exit | Air gap a₁ |
| r₃ | +101.60 | 5.43 | 1.62286 | L12 entry | Second negative meniscus |
| r₄ | +60.75 | 51.20 | 1.0 | L12 exit | Air gap a₂ (long separation) |
| r₅ | +60.10 | 30.72 | 1.79227 | L21 entry | Cemented doublet front |
| r₆ | −91.20 | 17.61 | 1.81265 | L21→L22 cement | Junction surface |
| r₇ | −549.30 | 2.14 | 1.0 | L22 exit | Air gap a₃₁ (to stop) |
| STO | — | 8.35 | 1.0 | — | Aperture stop; a₃₂ to L31 |
| r₈ | −56.39 | 11.29 | 1.62286 | L31 entry | G3 group singlet |
| r₉ | −71.58 | 2.34 | 1.0 | L31 exit | Air gap a₄ |
| r₁₀ | +3330.0 | 13.61 | 1.72823 | L32 entry | Cemented doublet front |
| r₁₁ | −36.08 | 6.00 | 1.81265 | L32→L33 cement | Junction surface |
| r₁₂ | −100.50 | 13.61 | 1.0 | L33 exit | Air gap a₅ |
| r₁₃ | −34.62 | 5.43 | 1.62408 | L34 entry | Final negative meniscus |
| r₁₄ | −61.00 | 65.70 | 1.0 | L34 exit | BFD to image plane |

**Sign conventions:** R > 0 places the center of curvature to the right of the surface (toward the image); R < 0 places it to the left (toward the object). All thicknesses d are positive. The patent explicitly notes that all surfaces of the front negative group have their centers of curvature "positioned in the direction towards the diaphragm," which is consistent with positive R values for r₁ through r₄.

### 3.2 Group Focal Lengths (patent-stated)

| Symbol | Value | Description |
|--------|------:|-------------|
| f₁ | −126.5 | Front negative group (L11+L12 combined) |
| f₂ | +71.4 | Positive cemented doublet (L21+L22) |
| f₃ | −376.0 | Rear negative group (L31+L32+L33+L34) |
| f₁,₂ | +79.3 | Combined front subsystem (L11+L12+L21+L22), from Fig. 6c |
| s′ | 65.70 | Back focal distance |

### 3.3 Paraxial Ray Trace Verification

An independent thick-lens paraxial ray trace (y-nu method) at the e-line yields:

| Parameter | Computed | Patent | Δ |
|-----------|--------:|-------:|---:|
| EFL | 104.2 | 100.0 | +4.2% |
| BFD | 67.0 | 65.7 | +2.0% |
| f₁ (L11+L12) | −129.0 | −126.5 | +2.0% |
| f₂ (L21+L22) | +71.6 | +71.4 | +0.3% |
| f₃ (G3 group) | −373.4 | −376.0 | −0.7% |
| f₁,₂ (front subsystem) | +82.5 | +79.3 | +4.0% |

The group focal lengths for the cemented doublet and G3 group agree to within 1%, confirming the sign convention and transcription. The ~4% overall EFL discrepancy arises because the patent states the **d-line** focal length (f = 100 at λ = 587.6 nm) while providing **e-line** refractive indices (nₑ at λ = 546.1 nm). Since nₑ > nᵈ for all glasses, tracing with e-line indices yields stronger refraction and therefore a different effective focal length. The group focal lengths that involve the full G1 subsystem (f₁,₂) show the same ~4% offset, confirming this is a systematic wavelength-dependent shift rather than a transcription error. Limited decimal precision in the published radii contributes a secondary error. The half-field angle computed from the traced EFL at production scale (28 ÷ 104.2 = 0.269× scaling) gives 36.5°, closely matching the patent's stated ±37°.

## 4. Aspherical Surfaces

**There are no aspherical surfaces in this design.** All fourteen optical surfaces are spherical. This is consistent with the era: aspherical surfaces were not practical for mass production at Ernst Leitz in the late 1960s, and would not become standard in Leica lens designs until the 1990s with the introduction of precision glass molding and hybrid aspherical technology.

The absence of aspherical surfaces places a premium on the designer's ability to correct aberrations through glass selection, surface curvature, element spacing, and cemented interfaces — a challenge that Mandler, Edwards, and Wagner addressed through the carefully tuned three-group topology described below.

## 5. Glass Identification

All five glass types specified in Example 3 match SCHOTT catalog glasses with negligible residuals. This is expected for a Leitz design of this era, as SCHOTT was the primary glass supplier for German optical manufacturers.

| Glass | Elements | nₑ | νₑ | SCHOTT Match | nᵈ | νᵈ | Family |
|-------|----------|------:|------:|-------------|------:|------:|--------|
| G1 | L11, L12, L31 | 1.62286 | 60.08 | **SK16** | 1.62041 | 60.32 | Dense barium crown |
| G2 | L21 | 1.79227 | 47.15 | **LaF21** | 1.78800 | 47.49 | Lanthanum flint |
| G3 | L22, L33 | 1.81265 | 25.24 | **SF6** | 1.80518 | 25.43 | Dense flint |
| G4 | L32 | 1.72823 | 37.85 | **LaF10** | 1.72600 | 38.90 | Lanthanum flint |
| G5 | L34 | 1.62408 | 36.11 | **F2** | 1.62004 | 36.37 | Flint |

The SCHOTT N-SF6 data sheet (the current lead-free reformulation) lists nₑ = 1.81266 and νₑ = 25.16; the minor νₑ difference from the patent value (25.24) is consistent with the original leaded SF6 formulation available in the 1960s. Note that the current SCHOTT catalog uses "N-" prefixed designations (e.g., N-SF6, N-LAF21) for lead-free eco-glass reformulations introduced from the 1990s onward; the 1968-era glasses would have carried the unprefixed names (LaF21, LaF10, SF6).

**Glass selection rationale:** The design uses only five distinct glass types — a modest palette for an eight-element lens, and a practical manufacturing consideration. Three elements (L11, L12, L31) share the same glass (SK16), and two pairs share glass types (L22/L33 use SF6, L21 uses LaF21). This commonality reduces inventory complexity and cost.

The glasses span a deliberate dispersion range. SK16 (νₑ ≈ 60) provides the low-dispersion crown needed for the front menisci and rear singlet. LaF21 (νₑ ≈ 47) is a high-index lanthanum glass that enables the strongly positive L21 element with manageable curvatures. SF6 (νₑ ≈ 25) is a classic dense flint used for the negative elements of the cemented doublets, providing the high dispersion required for achromatization. LaF10 in L32 and F2 in L34 provide intermediate dispersion values for the G3 group's color correction.

None of the glasses exhibit significant anomalous partial dispersion (ΔP_{g,F} < 0.009 for all five types). The design relies on classical achromatization through dispersion-contrast pairing of lanthanum flints with dense flints rather than the secondary spectrum correction that would become standard in later apochromatic Leica designs.

## 6. Optical Topology and Design Rationale

The lens follows a three-group quasi-retrofocus architecture:

```
Object → [Group 1: Negative] → [Group 2: Positive] → (STOP) → [Group 3: Negative] → Image
           L11    L12                L21+L22                           L31  L32+L33  L34
```

This is not a pure retrofocus (where BFD/EFL > 1), but a modified quasi-symmetric design with a pronounced negative G1 group. The BFD/EFL ratio of 0.643 (from the e-line paraxial trace) yields sufficient mirror clearance at f = 28mm production scale (BFD ≈ 18.4mm within the 47mm flange-to-film registration distance) while keeping the total optical length compact.

### Group 1: Front Negative (L11 + L12)

Two air-spaced negative menisci, both with concavity toward the diaphragm and nearly identical construction.

| Element | R_front | R_rear | d | Glass | f |
|---------|--------:|-------:|----:|-------|----:|
| L11 | +98.79 | +61.20 | 5.43 | SK16 | −273 |
| L12 | +101.60 | +60.75 | 5.43 | SK16 | −256 |

**Combined focal length:** f₁ ≈ −129 (patent: −126.5)

These menisci serve multiple critical functions. Their negative power creates the divergence necessary for the retrofocus back focal distance extension. By splitting the negative power across two separated elements rather than concentrating it in a single element, Mandler distributes the aberration load and gains additional degrees of freedom for controlling off-axis performance — particularly coma and astigmatism across the wide field. The large air gap a₂ = 51.20 between L12 and the positive doublet is a defining feature of the design; it provides the physical separation that creates the retrofocus back-focus extension and also acts as a lever arm for field curvature control.

Both menisci use SK16, a dense barium crown with moderately high index (nₑ = 1.623) and low dispersion (νₑ = 60). The low dispersion is essential here because these elements contribute strongly negative chromatic power — using a high-dispersion glass would introduce excessive lateral color, the Achilles' heel of retrofocus designs.

### Group 2: Positive Cemented Doublet (L21 + L22)

| Element | R_front | R_rear | d | Glass | f |
|---------|--------:|-------:|----:|-------|----:|
| L21 | +60.10 | −91.20 | 30.72 | LaF21 | +50.2 |
| L22 | −91.20 | −549.30 | 17.61 | SF6 | −137 |

**Combined focal length:** f₂ ≈ +71.6 (patent: +71.4)

This cemented doublet is the principal power element of the entire system. L21 is a thick biconvex element made of LaF21, a high-index lanthanum glass (nₑ = 1.792) that enables strong positive power with moderate surface curvatures — the front radius of +60.10 and rear radius of −91.20 yield comfortable fabrication tolerances. Its center thickness of 30.72 (at f = 100 scale; 8.6mm at production) is substantial, reflecting the need to control spherical aberration contributions from the large-aperture beam traversing this element.

L22 is a negative meniscus of SF6 dense flint (nₑ = 1.813, νₑ = 25.24), cemented to L21. Despite both glasses being classified as flints, the substantial dispersion contrast (Δνₑ ≈ 22) between the moderate-dispersion lanthanum flint L21 and the high-dispersion dense flint L22 provides effective achromatization: L21's positive power with lower dispersion is partially compensated in chromatic terms by L22's negative power with higher dispersion, bringing two wavelengths to a common focus. The nearly flat exit surface (R = −549.30) minimizes the negative contribution of this surface to the Petzval sum while maintaining adequate negative power for color correction.

Together, Groups 1 and 2 form the complete G1 subsystem with a combined focal length of approximately +79.3 (from Fig. 6c). This positive combined power is required: the front subsystem must converge light toward the stop to establish the entrance pupil and enable reasonable aperture stop diameters.

### Aperture Stop

The stop is placed in the air space between Groups 2 and 3, at a distance a₃₁ = 2.14 behind the last surface of L22 and a₃₂ = 8.35 in front of L31. This asymmetric placement (closer to Group 2 than Group 3) is characteristic of quasi-symmetric retrofocus designs and contributes to the correction of distortion and lateral chromatic aberration by establishing a principal ray geometry that partially cancels these field-dependent aberrations between the front and G3 groups.

### Group 3: Rear Negative (L31 + L32+L33 + L34)

**Combined focal length:** f₃ ≈ −373 (patent: −376)

This group is the most complex, comprising four elements in three subgroups: a singlet (L31), a cemented doublet (L32+L33), and a singlet (L34).

**L31 — Weakly Negative Meniscus (SK16, f ≈ −597):**

| | R_front | R_rear | d |
|---|--------:|-------:|----:|
| L31 | −56.39 | −71.58 | 11.29 |

Despite being a meniscus with both surfaces concave toward the object, L31's thick-lens behavior yields a very weakly negative focal length. Its primary role is not power contribution but rather the control of spherical aberration and coma in the diverging beam immediately behind the stop. The SK16 glass (same as the front menisci) provides low dispersion, limiting chromatic contributions. This element acts as a field flattener and coma corrector, intercepting the beam at a height where off-axis rays are well separated from on-axis rays.

**L32+L33 — Cemented Doublet (LaF10 + SF6, f ≈ +166):**

| Element | R_front | R_rear | d | Glass | f |
|---------|--------:|-------:|----:|-------|----:|
| L32 | +3330.0 | −36.08 | 13.61 | LaF10 | +49.1 |
| L33 | −36.08 | −100.50 | 6.00 | SF6 | −72.3 |

L32 has a nearly flat front surface (R₁ = +3330 is effectively planar) and a strongly curved rear surface (R₂ = −36.08). The negative R₂ places the center of curvature to the left, meaning the rear surface is convex toward the image side. The element is therefore geometrically plano-convex (flat front, convex rear toward image), and optically strongly positive (f ≈ +49.1). This geometry places the refractive power at the cemented interface rather than at an air–glass surface, reducing surface reflection losses and ghosting — a practical consideration that Leica's own marketing literature highlighted as contributing to the lens's contrast and flare resistance.

The LaF10/SF6 pairing mirrors the achromatization strategy of the front doublet (L21+L22), using the dispersion contrast between a moderate-dispersion lanthanum flint and a high-dispersion dense flint (Δνₑ ≈ 13) to provide local chromatic correction in the G3 group. The combined focal length of +166 is weakly positive, meaning this doublet adds slight convergence to the beam while primarily serving a chromatic correction role.

**L34 — Final Negative Meniscus (F2, f ≈ −139):**

| | R_front | R_rear | d |
|---|--------:|-------:|----:|
| L34 | −34.62 | −61.00 | 5.43 |

L34 is the rearmost element, a negative meniscus with concavity toward the object, made of F2 flint (nₑ = 1.624, νₑ = 36.1). This element is strongly negative (f ≈ −139) and contributes the bulk of Group 3's overall negative power. Its placement at the rear of the system, far from the stop, gives it strong leverage over field-dependent aberrations — particularly astigmatism and field curvature. The patent text states that "the surface adjacent the image plane" has its center of curvature "positioned in the direction towards the diaphragm" and that "their radii are to be shorter than the total focal length" — both conditions are satisfied by L34's radii of −34.62 and −61.00.

The large air gap a₅ = 13.61 separating L34 from the L32+L33 doublet is notable; it provides the necessary separation for L34 to act as an effective field corrector independent of the doublet.

## 7. Petzval Sum and Field Curvature

The surface-by-surface Petzval sum computation yields:

**Σ(φ_Petzval) = +0.000772** at patent scale, giving a **Petzval radius of ≈ 1,295** (in the same arbitrary length units as the prescription).

At production scale (f ≈ 28mm), using the scaling factor of 0.28 (from the patent-stated f = 100), the Petzval radius is approximately 1,295 × 0.28 ≈ 363mm. For reference, a 35mm film frame has a half-diagonal of 21.6mm, so the Petzval surface sags approximately 21.6²/(2 × 363) ≈ 0.64mm at the field corners — quite modest. This explains the patent's claim of "a remarkably flat field for this focal length," as competing retrofocus 28mm designs of the era typically had significantly shorter Petzval radii and correspondingly larger field curvature.

The principal Petzval contributors, listed in order of magnitude:

| Surface | Contribution | Sign | Effect |
|---------|-------------|------|--------|
| r₁₃ (L34 front) | −0.01110 | − | Largest negative (flattening) contribution |
| r₅ (L21 front) | +0.00736 | + | Largest positive (curving) contribution |
| r₈ (L31 front) | −0.00681 | − | Second-largest flattener |
| r₂, r₄ (L11, L12 rear) | −0.0063 each | − | Front meniscus flattening |
| r₁₄ (L34 rear) | +0.00630 | + | Partial cancellation of r₁₃ |

The design achieves field flattening through a deliberate balance: the strong negative Petzval contributions from the front menisci's rear surfaces (r₂, r₄) and the rear meniscus L34 (r₁₃) are balanced against the positive contributions from the doublet's front surface (r₅) and L34's own rear surface (r₁₄). The thick positive element L21, which carries the strongest optical power, contributes relatively modestly to the Petzval sum because its rear surface (r₆ = −91.20) is a cemented interface where the Δn is small (1.81265 − 1.79227 = 0.02038), producing a negligible Petzval contribution of −0.00007.

## 8. Focus Mechanism

The patent does not specify variable air spacings for Example 3, and the production Elmarit-R 28mm f/2.8 I employs **unit focusing** — the entire optical assembly translates as a single unit along the optical axis. The close focus distance is 0.30m (12 inches), corresponding to a focus extension of approximately 2.9mm at f = 28mm and a maximum magnification of approximately 1:9.7.

Unit focusing is the simplest and most mechanically robust approach, but it does not compensate for field curvature changes at close focus distances. The patent's description of elements whose radii are "shorter than the total focal length" positioned near the image plane suggests that the G3 group was designed to provide inherent tolerance to the aberration shifts that occur during focus extension.

The successor Elmarit-R 28mm f/2.8 II (1994) introduced a floating element design with an improved 8 element / 7 group configuration, maintaining close-focus performance through differential element motion.

## 9. Production Scaling

The patent normalizes to f = 100 at d-line. Two scaling approaches are possible: 28/100 = 0.28 (from patent-stated focal length), or 28/104.2 = 0.269 (from the e-line traced EFL). Both are legitimate; the data file uses 0.28 for consistency with the patent's own normalization. Key production-scale dimensions (at 0.28× scaling):

| Parameter | Patent (f = 100) | Production (f ≈ 28mm) |
|-----------|----------------:|---------------------:|
| Total optical length | 183.0 | 51.2 mm |
| Back focal distance | 65.7 | 18.4 mm |
| Total track (to image) | 248.7 | 69.6 mm |
| L21 center thickness | 30.72 | 8.6 mm |
| Air gap a₂ (L12→L21) | 51.20 | 14.3 mm |
| L34 thickness | 5.43 | 1.5 mm |

The total protrusion from the camera body (approximately 40mm, per Leica's published specifications) is consistent with the optical length offset by the registration distance. The BFD of 18.4mm provides adequate clearance for the Leicaflex reflex mirror within the 47mm flange-to-film registration distance.

## 10. Design Characteristics and Aberration Strategy

### 10.1 Retrofocus Ratio

The BFD/EFL ratio of 0.643 (from e-line traced values: 67.0/104.2) places this design in the "moderate retrofocus" category. For comparison, extreme retrofocus designs (20mm f/2.8 class) achieve BFD/EFL ratios of 1.5–2.0 but at the cost of severe lateral chromatic aberration and distortion. Mandler's quasi-symmetric approach keeps the BFD extension modest, which is sufficient for the Leicaflex mirror clearance while preserving good lateral color correction.

### 10.2 Chromatic Correction

The design achieves achromatization through two separated cemented doublets (L21+L22 and L32+L33), each pairing a moderate-dispersion lanthanum flint with a high-dispersion dense flint — leveraging the dispersion contrast (Δνₑ ≈ 22 and ≈ 13 respectively) rather than traditional crown-flint pairing. The front menisci (L11, L12) use low-dispersion SK16 — the only true crown glass in the design — to minimize their chromatic contribution, and the final element L34 uses moderately dispersive F2. No anomalous-dispersion glasses are employed — the design is fully classical in its color correction approach.

### 10.3 Distortion and Aberration Performance

The patent provides correction state data for Example 3 in Figs. 3a–3d. Each figure shows transverse ray aberration fan plots at a specific image height, with the distortion (V_z, from the German *Verzeichnung*) noted as a single value:

| Image height (y′) | V_z (Distortion) |
|-------------------:|------------------:|
| 21.0 (full field) | −0.39% |
| 15.75 | −0.41% |
| 10.5 | −0.24% |

The distortion profile shows a gentle barrel pattern that peaks at intermediate field heights (−0.41% at y′ = 15.75) and slightly decreases toward the field corners (−0.39% at y′ = 21). This is a favorable characteristic for architectural and documentary photography — the maximum distortion never exceeds half a percent, and the non-monotonic profile means that the visible barrel curvature is perceptually mild across the entire field.

The ray fan plots themselves show the combined monochromatic and chromatic aberration residuals at each field point. At the full field (y′ = 21), the fans exhibit moderate higher-order aberrations, consistent with the f/2.8 aperture at 37° half-field.

### 10.4 Surface Curvature Graduality

The 1970 *LEICA Photography* article specifically notes that "their surface curvatures are so gradual that reflections are imaged far forward of the film-plane." This is borne out by the prescription: the most strongly curved surfaces (r₁₃ = −34.62, r₁₁ = −36.08) are deeply embedded in the G3 group where the beam diameter is small, while the G1 group surfaces have |R| > 60 — gentle curvatures that suppress ghost reflections. This graduality of curvature, combined with the all-spherical design, would have simplified multicoating — a technology that Leitz was actively advancing in the early 1970s.

## 11. Semi-Diameter Estimation

The patent does not list semi-diameters. SDs were estimated via a combined marginal and chief ray trace at the patent scale (f = 100), using the following methodology:

**Marginal ray** traced at full f/2.8 aperture (EP SD ≈ 18.6 at patent scale) provides the on-axis beam height at each surface. **Chief ray** traced at ~28° field (76% of full field, ±37°) accounts for the off-axis beam contribution while reflecting the ~1-stop natural vignetting expected at full field and full aperture for a wide-angle SLR lens of this era.

The combined SD at each surface is max(|y_marginal + y_chief|, |y_marginal − y_chief|) with 8% mechanical clearance added. Two additional constraints were binding:

1. **Cross-gap overlap at a₁ (r₂→r₃):** The rear surface of L11 (R = +61.20, convex) and front of L12 (R = +101.60, convex) both protrude into the 9.86 air gap. At the full-field SD, the combined sag intrusion exceeds the gap. The SDs at r₂ and r₃ were capped at values where the intrusion remains below 110% of the gap (validated: 10.48 < 10.85 at sd = 47).

2. **Slope limit:** Spherical surfaces cannot physically extend beyond sd/|R| ≈ 1.0. All surfaces validated with rim slope below the 2.065 (64.2°) threshold.

All proposed SDs pass edge thickness (≥ 0.3), cross-gap overlap (intrusion < gap × 1.1), slope limit (< 2.065), and SD ratio (< 3.0) validation checks.

## 12. Comparison with Other Patent Examples

The six examples in US 3,591,257 represent a systematic exploration of the design space:

| Example | Field | Speed | G1 Group | Comment |
|---------|-------|-------|-------------|---------|
| 1 | ±19.5° | f/4 | 1 meniscus | Minimal 4-element embodiment |
| 2 | ±31° | f/4 | 1 meniscus | 5-element, adds rear doublet |
| 3 | ±37° | f/2.8 | 2 menisci | **Production basis** (this analysis) |
| 4 | ±40° | f/2.8 | 2 menisci | Wider field, same topology |
| 5 | ±45° | f/3.4 | 2 menisci | Super-wide, speed sacrifice |
| 6 | ±50° | f/3.4 | 3 menisci | Widest, adds third front meniscus |

The progression reveals Mandler's design strategy: as the field angle increases, additional front menisci are added to distribute the negative power over more surfaces, and the speed is reduced from f/2.8 to f/3.4 for the widest embodiments. Example 3 represents the optimal balance point for a 28mm f/2.8 SLR lens — wide enough for the intended focal length, fast enough for available-light photography, and compact enough for practical use.

## 13. Summary of Key Findings

1. **All spherical** — no aspherical surfaces. Aberration control relies entirely on glass selection, element spacing, and the three-group quasi-retrofocus topology.

2. **Five SCHOTT glasses** — SK16, LaF21, SF6, LaF10, and F2, all identified with zero or negligible residual against catalog nₑ/νₑ values. No anomalous partial dispersion glasses; purely classical achromatization.

3. **Unit focus** — the entire optical assembly translates for focusing to 0.30m close focus. No floating elements in the patent design (this was added in the 1994 successor).

4. **Moderate retrofocus** — BFD/EFL ≈ 0.64, achieving adequate SLR mirror clearance without the severe lateral color penalties of extreme retrofocus designs.

5. **Eight elements, six groups** in the patent; the production lens was refined to eight elements in eight groups (all air-spaced) for additional correction degrees of freedom.

6. **Petzval radius ≈ 363mm** at production scale (0.28× scaling), yielding a "remarkably flat field" for a 28mm retrofocus design of this era.

7. **Compact execution** — 40mm protrusion, 275g weight, achieved through careful balancing of the front negative group's power distribution and the large air gap (a₂ ≈ 14.3mm at production) that provides the retrofocus extension.

8. **e-line convention** — all patent indices are at λ = 546.1 nm per the German Leitz convention, resulting in a ~4% EFL discrepancy when traced at this wavelength versus the d-line-normalized f = 100 design value. The data file preserves these e-line indices with a 0.28× scaling to production focal length.
