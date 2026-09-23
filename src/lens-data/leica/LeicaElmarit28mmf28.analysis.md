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

Example 3 is the design most closely corresponding to the production Elmarit-R 28mm f/2.8, with its ±37° half-field angle matching the 76° diagonal coverage of a 28mm lens on the 24×36mm format (computed: 37.7°). All data in this analysis derive from this example unless otherwise stated. A certificate of correction (signed December 14, 1971) corrected one value in Example 6's claim text (f₁ from "−22.8" to "−122.8"). It does not touch Example 3, which carries its own uncorrected misprint in the air gap a₁ (see §3).

**Patent-to-production discrepancy:** The 1970 *LEICA Photography* magazine describes the production Elmarit-R 28mm f/2.8 I as "a completely air-spaced eight-element retrofocus design" — 8 elements in 8 groups with no cemented interfaces. Example 3, however, contains two cemented doublets (L3+L4 and L6+L7), yielding 8 elements in 6 groups. The production lens was evidently refined beyond the patent example, uncementing both doublets to create additional degrees of freedom (two extra air–glass interfaces, each adding controllable parameters for aberration correction). This is a common refinement path: the patent secures the general topology and design principle, while the production version is further optimized.

## 3. Prescription Data

All values are at the patent's normalized focal length of f = 100. Refractive indices and Abbe numbers are given at the **e-line** (λ = 546.1 nm), following the German convention standard in Leitz patents of this era.

**Misprint in a₁.** Both printings of the Example 3 table (columns 3–4 and claim 4) give a₁ = 9.86, but that value is inconsistent with the patent's own group data. With a₁ = 9.86 the prescription traces to f = 104.2, s′ = 67.0, f₁ = −129.0 and f₁,₂ = +82.5, against the stated 100, 65.70, −126.5 and +79.3. With a₁ = 19.86 it traces to 100.05, 65.64, −126.6 and +79.4, matching all four. The sister design, Example 4, prints a₁ = 19.88. The section drawings agree: Figs. 3 and 6c draw the L1–L2 gap at 0.32–0.37 of a₂, which fits 19.86/51.20 = 0.39 and not 9.86/51.20 = 0.19. The table below and the data file therefore use a₁ = 19.86, a one-digit correction. Every other row is as printed. Claim 4 gives r₁ as +98.70 where the example table gives +98.79; the data keep the example value, and the difference is negligible (ΔEFL < 0.01).

### 3.1 Surface Prescription

| Surface | R | d | nₑ | Element | Notes |
|---------|----:|----:|------:|---------|-------|
| r₁ | +98.79 | 5.43 | 1.62286 | L1 entry | Front negative meniscus |
| r₂ | +61.20 | 19.86 | 1.0 | L1 exit | Air gap a₁ (printed 9.86; see above) |
| r₃ | +101.60 | 5.43 | 1.62286 | L2 entry | Second negative meniscus |
| r₄ | +60.75 | 51.20 | 1.0 | L2 exit | Air gap a₂ (long separation) |
| r₅ | +60.10 | 30.72 | 1.79227 | L3 entry | Cemented doublet front |
| r₆ | −91.20 | 17.61 | 1.81265 | L3→L4 cement | Junction surface |
| r₇ | −549.30 | 2.14 | 1.0 | L4 exit | Air gap a₃₁ (to stop) |
| STO | — | 8.35 | 1.0 | — | Aperture stop; a₃₂ to L5 |
| r₈ | −56.39 | 11.29 | 1.62286 | L5 entry | Rear group singlet |
| r₉ | −71.58 | 2.34 | 1.0 | L5 exit | Air gap a₄ |
| r₁₀ | +3330.0 | 13.61 | 1.72823 | L6 entry | Cemented doublet front |
| r₁₁ | −36.08 | 6.00 | 1.81265 | L6→L7 cement | Junction surface |
| r₁₂ | −100.50 | 13.61 | 1.0 | L7 exit | Air gap a₅ |
| r₁₃ | −34.62 | 5.43 | 1.62408 | L8 entry | Final negative meniscus |
| r₁₄ | −61.00 | 65.70 | 1.0 | L8 exit | BFD to image plane |

**Sign conventions:** R > 0 places the center of curvature to the right of the surface (toward the image); R < 0 places it to the left (toward the object). All thicknesses d are positive. The patent explicitly notes that all surfaces of the front negative group have their centers of curvature "positioned in the direction towards the diaphragm," which is consistent with positive R values for r₁ through r₄.

### 3.2 Group Focal Lengths (patent-stated)

| Symbol | Value | Description |
|--------|------:|-------------|
| f₁ | −126.5 | Front negative group (L1+L2 combined) |
| f₂ | +71.4 | Positive cemented doublet (L3+L4) |
| f₃ | −376.0 | Rear negative group (L5+L6+L7+L8) |
| f₁,₂ | +79.3 | Combined front subsystem (L1+L2+L3+L4), from Fig. 6c |
| s′ | 65.70 | Back focal distance |

### 3.3 Paraxial Ray Trace Verification

An independent paraxial ray trace (y-nu method) at the e-line, with a₁ = 19.86, yields:

| Parameter | Computed | Patent | Δ |
|-----------|--------:|-------:|---:|
| EFL | 100.05 | 100.0 | +0.05% |
| BFD | 65.64 | 65.70 | −0.1% |
| f₁ (L1+L2) | −126.6 | −126.5 | +0.1% |
| f₂ (L3+L4) | +71.6 | +71.4 | +0.3% |
| f₃ (rear group) | −373.4 | −376.0 | −0.7% |
| f₁,₂ (front subsystem) | +79.4 | +79.3 | +0.2% |

Once a₁ is corrected, every patent focal length agrees to within rounding. Earlier versions of this file attributed the 4% EFL error from the printed a₁ to a d-line/e-line difference. That explanation does not hold. The d-to-e focal shift of this glass set is a few tenths of a percent, not 4%, and Example 4 traces to f = 99.9 from its own e-line table. At the stored 0.28 scale, the data file traces to EFL 28.01 mm and BFD 18.38 mm, and the chief ray reaching the 21.6 mm full-frame corner leaves at 37.7°, against the patent's ±37°.

## 4. Aspherical Surfaces

**There are no aspherical surfaces in this design.** All fourteen optical surfaces are spherical. This is consistent with the era: aspherical surfaces were not practical for mass production at Ernst Leitz in the late 1960s, and would not become standard in Leica lens designs until the 1990s with the introduction of precision glass molding and hybrid aspherical technology.

The absence of aspherical surfaces places a premium on the designer's ability to correct aberrations through glass selection, surface curvature, element spacing, and cemented interfaces — a challenge that Mandler, Edwards, and Wagner addressed through the carefully tuned three-group topology described below.

## 5. Glass Identification

The patent gives only nₑ and νₑ for each glass. It names no glass type and no supplier. Four of the five coordinates match Schott catalog glasses at the e-line: SK16, SF6, F2 and, as a proxy, the LaF10 class. The data therefore label them as catalog equivalents and do not assert a production melt.

| Glass | Elements | nₑ | νₑ | SCHOTT Match | nᵈ | νᵈ | Family |
|-------|----------|------:|------:|-------------|------:|------:|--------|
| G1 | L1, L2, L5 | 1.62286 | 60.08 | **SK16** | 1.62041 | 60.32 | Dense barium crown |
| G2 | L3 | 1.79227 | 47.15 | **Unmatched LaF21-class e-line glass** | 1.78800 | 47.49 | Lanthanum flint; d-line row is comparison only |
| G3 | L4, L7 | 1.81265 | 25.24 | **SF6 (catalog equivalent)** | 1.80518 | 25.43 | Dense flint; Schott SF6 curve reproduces nₑ 1.81265 / νₑ 25.24 exactly |
| G4 | L6 | 1.72823 | 37.85 | **LaF10 class; S-BAH28 e-line spectral proxy** | 1.72793 | 37.68 at e | Supplier unspecified |
| G5 | L8 | 1.62408 | 36.11 | **F2 (catalog equivalent)** | 1.62004 | 36.37 | Flint; exact e-line catalog-curve match |

The L4/L7 row was carried for a time as the bare code `813252` because no coefficient-backed match had been verified. The repo's Schott SF6 Sellmeier entry now reproduces the patent pair exactly at the e-line (nₑ = 1.81265, νₑ = 25.24), so the row carries an SF6 catalog-equivalent label. The SK16 label resolves to the N-SK16 coefficients, which are compatible at C′/e/F′. Current SCHOTT "N-" designations are later lead-free reformulations, so legacy names describe a glass family and do not prove a coefficient identity.

**Glass selection rationale:** The design uses only five distinct patent glass coordinates, a modest palette for an eight-element lens. Three elements (L1, L2, L5) share the SK16-class coordinate, and L4/L7 share the SF6-class dense-flint row. The LaF21-class name for L3 describes the glass family only. It is not a resolved catalog identity.

The glasses span a deliberate dispersion range. The SK16-class coordinate (νₑ ≈ 60) provides the low-dispersion crown needed for the front menisci and rear singlet. The unmatched LaF21-class row (νₑ ≈ 47) enables the strongly positive L3 element with manageable curvatures. The SF6-class glass (νₑ ≈ 25) is a high-index dense flint used for the negative elements of the cemented doublets. The LaF10-class L6 and catalog-backed F2 L8 provide intermediate dispersion values for the rear group's color correction.

None of the glasses exhibit significant anomalous partial dispersion (ΔP_{g,F} < 0.009 for all five types). The design relies on classical achromatization through dispersion-contrast pairing of lanthanum flints with dense flints rather than the secondary spectrum correction that would become standard in later apochromatic Leica designs.

## 6. Optical Topology and Design Rationale

The lens follows a three-group quasi-retrofocus architecture:

```
Object → [Group 1: Negative] → [Group 2: Positive] → (STOP) → [Group 3: Negative] → Image
           L1    L2                L3+L4                           L5  L6+L7  L8
```

This is not a pure retrofocus (where BFD/EFL > 1), but a modified quasi-symmetric design with a pronounced negative front group. The BFD/EFL ratio of 0.657 (patent s′/f) yields sufficient mirror clearance at f = 28mm production scale (BFD ≈ 18.4mm within the 47mm flange-to-film registration distance) while keeping the total optical length compact.

### Group 1: Front Negative (L1 + L2)

Two air-spaced negative menisci, both with concavity toward the diaphragm and nearly identical construction.

| Element | R_front | R_rear | d | Glass | f |
|---------|--------:|-------:|----:|-------|----:|
| L1 | +98.79 | +61.20 | 5.43 | SK16 | −273 |
| L2 | +101.60 | +60.75 | 5.43 | SK16 | −256 |

**Combined focal length:** f₁ ≈ −126.6 (patent: −126.5)

These menisci serve multiple critical functions. Their negative power creates the divergence necessary for the retrofocus back focal distance extension. By splitting the negative power across two separated elements rather than concentrating it in a single element, Mandler distributes the aberration load and gains additional degrees of freedom for controlling off-axis performance — particularly coma and astigmatism across the wide field. The large air gap a₂ = 51.20 between L2 and the positive doublet is a defining feature of the design; it provides the physical separation that creates the retrofocus back-focus extension and also acts as a lever arm for field curvature control.

Both menisci use SK16, a dense barium crown with moderately high index (nₑ = 1.623) and low dispersion (νₑ = 60). The low dispersion is essential here because these elements contribute strongly negative chromatic power — using a high-dispersion glass would introduce excessive lateral color, the Achilles' heel of retrofocus designs.

### Group 2: Positive Cemented Doublet (L3 + L4)

| Element | R_front | R_rear | d | Glass | f |
|---------|--------:|-------:|----:|-------|----:|
| L3 | +60.10 | −91.20 | 30.72 | Unmatched LaF21-class e-line glass | +50.2 |
| L4 | −91.20 | −549.30 | 17.61 | SF6 class | −137 |

**Combined focal length:** f₂ ≈ +71.6 (patent: +71.4)

This cemented doublet is the principal power element of the entire system. L3 is a thick biconvex element using the unmatched LaF21-class e-line coordinate (nₑ = 1.792), which enables strong positive power with moderate surface curvatures. The family name does not assert the modern N-LAF21 d-line Sellmeier row.

L4 is a negative meniscus of the SF6-class high-index dense flint (nₑ = 1.813, νₑ = 25.24), cemented to L3. Despite both glasses being classified as flints, the substantial dispersion contrast (Δνₑ ≈ 22) between the moderate-dispersion lanthanum flint L3 and the high-dispersion dense flint L4 provides effective achromatization: L3's positive power with lower dispersion is partially compensated in chromatic terms by L4's negative power with higher dispersion, bringing two wavelengths to a common focus. The nearly flat exit surface (R = −549.30) minimizes the negative contribution of this surface to the Petzval sum while maintaining adequate negative power for color correction.

Together, Groups 1 and 2 form the complete front subsystem with a combined focal length of approximately +79.3 (from Fig. 6c). This positive combined power is required: the front subsystem must converge light toward the stop to establish the entrance pupil and enable reasonable aperture stop diameters.

### Aperture Stop

The stop is placed in the air space between Groups 2 and 3, at a distance a₃₁ = 2.14 behind the last surface of L4 and a₃₂ = 8.35 in front of L5. This asymmetric placement (closer to Group 2 than Group 3) is characteristic of quasi-symmetric retrofocus designs and contributes to the correction of distortion and lateral chromatic aberration by establishing a principal ray geometry that partially cancels these field-dependent aberrations between the front and rear groups.

### Group 3: Rear Negative (L5 + L6+L7 + L8)

**Combined focal length:** f₃ ≈ −373 (patent: −376)

This group is the most complex, comprising four elements in three subgroups: a singlet (L5), a cemented doublet (L6+L7), and a singlet (L8).

**L5 — Weakly Negative Meniscus (SK16, f ≈ −597):**

| | R_front | R_rear | d |
|---|--------:|-------:|----:|
| L5 | −56.39 | −71.58 | 11.29 |

Despite being a meniscus with both surfaces concave toward the object, L5's thick-lens behavior yields a very weakly negative focal length. Its primary role is not power contribution but rather the control of spherical aberration and coma in the diverging beam immediately behind the stop. The SK16 glass (same as the front menisci) provides low dispersion, limiting chromatic contributions. This element acts as a field flattener and coma corrector, intercepting the beam at a height where off-axis rays are well separated from on-axis rays.

**L6+L7 — Cemented Doublet (LaF10 + SF6 class, f ≈ +166):**

| Element | R_front | R_rear | d | Glass | f |
|---------|--------:|-------:|----:|-------|----:|
| L6 | +3330.0 | −36.08 | 13.61 | LaF10 | +49.1 |
| L7 | −36.08 | −100.50 | 6.00 | SF6 class | −72.3 |

L6 has a nearly flat front surface (R₁ = +3330 is effectively planar) and a strongly curved rear surface (R₂ = −36.08). The negative R₂ places the center of curvature to the left, meaning the rear surface is convex toward the image side. The element is therefore geometrically plano-convex (flat front, convex rear toward image), and optically strongly positive (f ≈ +49.1). This geometry places the refractive power at the cemented interface rather than at an air–glass surface, reducing surface reflection losses and ghosting — a practical consideration that Leica's own marketing literature highlighted as contributing to the lens's contrast and flare resistance.

The LaF10-class/SF6-class pairing mirrors the achromatization strategy of the front doublet (L3+L4), using the dispersion contrast between a moderate-dispersion lanthanum flint and a high-dispersion dense flint (Δνₑ ≈ 13) to provide local chromatic correction in the rear group. S-BAH28 supplies a compatible C′/e/F′ spectral proxy for L6 without asserting the historical supplier.

**L8 — Final Negative Meniscus (Schott F2, f ≈ −139):**

| | R_front | R_rear | d |
|---|--------:|-------:|----:|
| L8 | −34.62 | −61.00 | 5.43 |

L8 is the rearmost element, a negative meniscus with concavity toward the object, using a Schott F2 curve that reproduces the patent e-line coordinate (nₑ = 1.624, νₑ = 36.1). This element is strongly negative (f ≈ −139) and contributes the bulk of Group 3's overall negative power. Its placement at the rear of the system, far from the stop, gives it strong leverage over field-dependent aberrations.

The large air gap a₅ = 13.61 separating L8 from the L6+L7 doublet is notable; it provides the necessary separation for L8 to act as an effective field corrector independent of the doublet.

## 7. Petzval Sum and Field Curvature

The surface-by-surface Petzval sum computation yields:

**Σ(φ_Petzval) = +0.000772** at patent scale, giving a **Petzval radius of ≈ 1,295** (in the same arbitrary length units as the prescription).

At production scale (f ≈ 28mm), using the scaling factor of 0.28 (from the patent-stated f = 100), the Petzval radius is approximately 1,295 × 0.28 ≈ 363mm. For reference, a 35mm film frame has a half-diagonal of 21.6mm, so the Petzval surface sags approximately 21.6²/(2 × 363) ≈ 0.64mm at the field corners — quite modest. This explains the patent's claim of "a remarkably flat field for this focal length," as competing retrofocus 28mm designs of the era typically had significantly shorter Petzval radii and correspondingly larger field curvature.

The principal Petzval contributors, listed in order of magnitude:

| Surface | Contribution | Sign | Effect |
|---------|-------------|------|--------|
| r₁₃ (L8 front) | −0.01110 | − | Largest negative (flattening) contribution |
| r₅ (L3 front) | +0.00736 | + | Largest positive (curving) contribution |
| r₈ (L5 front) | −0.00681 | − | Second-largest flattener |
| r₂, r₄ (L1, L2 rear) | −0.0063 each | − | Front meniscus flattening |
| r₁₄ (L8 rear) | +0.00630 | + | Partial cancellation of r₁₃ |

The design achieves field flattening through a deliberate balance: the strong negative Petzval contributions from the front menisci's rear surfaces (r₂, r₄) and the rear meniscus L8 (r₁₃) are balanced against the positive contributions from the doublet's front surface (r₅) and L8's own rear surface (r₁₄). The thick positive element L3, which carries the strongest optical power, contributes relatively modestly to the Petzval sum because its rear surface (r₆ = −91.20) is a cemented interface where the Δn is small (1.81265 − 1.79227 = 0.02038), producing a negligible Petzval contribution of −0.00007.

## 8. Focus Mechanism

The patent publishes only the infinity state for Example 3. The production Elmarit-R 28mm f/2.8 I uses **unit focusing**, in which the entire optical assembly translates as one unit along the optical axis. The data file models this for the 0.30 m (12 inch) close focus. A paraxial trace at the 0.28 scale gives a calculated extension of about 3.6 mm and a magnification of about 1:7.9 for a 300 mm object-to-image distance. These are derived values, not patent data.

Unit focusing is the simplest and most mechanically robust approach, but it does not compensate for field curvature changes at close focus distances. The patent's description of elements whose radii are "shorter than the total focal length" positioned near the image plane suggests that the rear group was designed to provide inherent tolerance to the aberration shifts that occur during focus extension.

The successor Elmarit-R 28mm f/2.8 II (1994) introduced a floating element design with an improved 8 element / 7 group configuration, maintaining close-focus performance through differential element motion.

## 9. Production Scaling

The patent normalizes to f = 100. With a₁ corrected, the e-line trace reproduces that focal length, so a single uniform factor of 28/100 = 0.28 scales every radius, thickness and gap to the production 28 mm (traced EFL 28.01 mm). Key production-scale dimensions:

| Parameter | Patent (f = 100) | Production (f ≈ 28mm) |
|-----------|----------------:|---------------------:|
| Total optical length | 193.0 | 54.0 mm |
| Back focal distance | 65.7 | 18.4 mm |
| Total track (to image) | 258.7 | 72.4 mm |
| L3 center thickness | 30.72 | 8.6 mm |
| Air gap a₁ (L1→L2, corrected) | 19.86 | 5.6 mm |
| Air gap a₂ (L2→L3) | 51.20 | 14.3 mm |
| L8 thickness | 5.43 | 1.5 mm |

The total protrusion from the camera body (approximately 40mm, per Leica's published specifications) is consistent with the optical length offset by the registration distance. The BFD of 18.4mm provides adequate clearance for the Leicaflex reflex mirror within the 47mm flange-to-film registration distance.

## 10. Design Characteristics and Aberration Strategy

### 10.1 Retrofocus Ratio

The BFD/EFL ratio of 0.657 (patent s′ = 65.70 at f = 100) places this design in the "moderate retrofocus" category. For comparison, extreme retrofocus designs (20mm f/2.8 class) achieve BFD/EFL ratios of 1.5–2.0 but at the cost of severe lateral chromatic aberration and distortion. Mandler's quasi-symmetric approach keeps the BFD extension modest, which is sufficient for the Leicaflex mirror clearance while preserving good lateral color correction.

### 10.2 Chromatic Correction

The design achieves achromatization through two separated cemented doublets (L3+L4 and L6+L7), each pairing a moderate-dispersion lanthanum-flint-class row with a high-dispersion dense flint. The front menisci use the low-dispersion SK16-class coordinate, while L8 uses the moderately dispersive catalog-backed F2 curve. The patent does not publish partial-dispersion data.

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

The 1970 *LEICA Photography* article specifically notes that "their surface curvatures are so gradual that reflections are imaged far forward of the film-plane." This is borne out by the prescription: the most strongly curved surfaces (r₁₃ = −34.62, r₁₁ = −36.08) are deeply embedded in the rear group where the beam diameter is small, while the front group surfaces have |R| > 60 — gentle curvatures that suppress ghost reflections. This graduality of curvature, combined with the all-spherical design, would have simplified multicoating — a technology that Leitz was actively advancing in the early 1970s.

## 11. Semi-Diameter Estimation

The patent does not list semi-diameters. The stored values come from a real-ray trace at the 0.28 production scale, checked against the section drawings in Fig. 6c and Fig. 3. Both drawings are scaled from the r₁→r₁₄ vertex span (483 px = 54.05 mm).

- **Ray requirements.** Every surface clears the f/2.8 axial beam. Every surface also clears the chief ray that reaches the 21.6 mm corner at 37.7°. The front menisci carry the largest chief-ray heights, 14.0 mm at r₁ and 12.1 mm at r₂. The L3 front surface (r₅ = 10.4 mm) is sized for the 20–28° off-axis bundles, which reach 9.4–10.0 mm there. The drawing shows the doublet about 15–20% smaller.
- **Figure rims.** The drawing gives these rim radii: L1 ≈ 16.1 mm, L2 ≈ 13.4 mm, and L3/L4 ≈ 8.7 mm, drawn as a near-cylinder whose rear face is as tall as its front. L5 is ≈ 6.9 mm, L6/L7 ≈ 8.0 mm, and L8 ≈ 9.7 mm, the largest rear element. The drawing is schematic. L8 and the rear face of L1 are drawn much flatter than their radii allow; a 9.7 mm rim is impossible on r₁₃ = −9.69 mm. Those two surfaces are therefore held inside the rim-slope limit instead of copied.
- **Corner vignetting.** At full aperture, the full-field bundle is clipped mainly at the rear meniscus and the front menisci. This is ordinary for a 1970 f/2.8 28 mm retrofocus design.

Earlier estimates capped r₂ at 0.77|R| because of the L1–L2 gap. That cap came from the misprinted 2.8 mm gap and no longer applies at the corrected 5.6 mm.

## 12. Comparison with Other Patent Examples

The six examples in US 3,591,257 represent a systematic exploration of the design space:

| Example | Field | Speed | Front Group | Comment |
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

2. **Five patent glass coordinates**: SK16, LaF21-class, SF6, LaF10-class and F2. The patent gives only e-line values. SK16, SF6 and F2 are catalog equivalents, LaF10 is a spectral proxy, and L3 remains unmatched.

3. **Unit focus** — the entire optical assembly translates for focusing to 0.30m close focus. No floating elements in the patent design (this was added in the 1994 successor).

4. **Moderate retrofocus** — BFD/EFL ≈ 0.66, achieving adequate SLR mirror clearance without the severe lateral color penalties of extreme retrofocus designs.

5. **Eight elements, six groups** in the patent; the production lens was refined to eight elements in eight groups (all air-spaced) for additional correction degrees of freedom.

6. **Petzval radius ≈ 363mm** at production scale (0.28× scaling), yielding a "remarkably flat field" for a 28mm retrofocus design of this era.

7. **Compact execution** — 40mm protrusion, 275g weight, achieved through careful balancing of the front negative group's power distribution and the large air gap (a₂ ≈ 14.3mm at production) that provides the retrofocus extension.

8. **e-line convention and a₁ misprint**: all patent indices are at λ = 546.1 nm per the Leitz convention. The printed a₁ = 9.86 is a misprint for 19.86. With it corrected, the e-line trace reproduces f = 100, s′ = 65.7 and every group focal length. The data file scales the corrected table uniformly by 0.28.
