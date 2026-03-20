# The Bertele Sonnar f/2 — A Complete Analysis of US Patent 1,998,704, Example I

**Patent:** US 1,998,704, "Photographic Objective"
**Inventor:** Ludwig Jakob Bertele (1900–1985)
**Assignee:** Zeiss Ikon Aktiengesellschaft Dresden
**Filed:** August 31, 1932 (German priority: September 1, 1931)
**Granted:** April 23, 1935
**Classification:** Cl. 88–57 (optical objectives)

**Scope:** This analysis covers Example I exclusively — the 6-element, 3-group, f/2 design. The patent also contains a second example (a 5-element f/2.8 variant), which is discussed briefly in the historical context below but is not analyzed further.

---

## 1. Historical Context

The lens described in US 1,998,704 is an early embodiment of what would become the most commercially important photographic lens of the 1930s: the Zeiss Sonnar. Ludwig Bertele, then employed by Zeiss Ikon in Dresden, developed this design as a direct evolution of his earlier Ernostar f/2 (1923), which was itself derived from Charles C. Minor's 1916 Ultrastigmat.

The Sonnar concept emerged in the late 1920s. Bertele's key insight was that the air gap between the second and third elements of his Ernostar could be replaced with a low-index glass element, cementing the assembly into a single group. This eliminated two air-glass interfaces — reducing the total from 8 in the Ernostar to 6 in the Sonnar — dramatically improving transmission and contrast in an era before anti-reflection coatings. The German patent (DE 570,983) was filed in 1931, and the Sonnar 5cm f/2 entered production for the Contax rangefinder camera in 1932. Bertele also developed a faster 7-element f/1.5 variant (patented as US 1,975,678, serial no. 573,729), which added a third element to the rear cemented group.

The patent contains two examples. Example I — the 6-element, 3-group f/2 design — represents the design basis for the production Carl Zeiss Jena Sonnar 5cm f/2. Note that the production lens underwent at least three optical revisions, documented by Thiele in the *Nummernbuch II*, so the patent prescription should be understood as the foundational design rather than the exact final production specification. Example II is a slower f/2.8 variant with 5 elements in 3 groups (1–2–2 configuration). In this simpler design, the middle cemented triplet is reduced to a conventional crown-flint cemented doublet, while the low-index FK glass — the signature element of the Sonnar concept — is relocated to the rear cemented doublet rather than eliminated.

The patent specification states that it improves upon "objective systems as they are for instance described in the application Serial No. 470,207." This references an earlier Bertele US application (not the f/1.5 Sonnar patent, which carries serial no. 573,729), likely covering a three-group objective that lacked the collecting cemented face in the rear group. The specific improvement claimed is the introduction of that collecting cemented face to remedy "disturbing comatic phenomena" in the earlier design.

The Sonnar name derives from the German word *Sonne* (sun). It was originally a trade name used by Contessa-Nettel for a Tessar-type lens; after Contessa-Nettel merged into Zeiss Ikon in 1926, Zeiss repurposed the name for Bertele's new design to emphasize its exceptional light-gathering ability.


## 2. Verified Prescription

The prescription below was extracted from a 300 DPI rasterization of the original patent document. During this process, a critical OCR error was identified and corrected: the refractive index of element L4 reads **1.6890** (not 1.6390 as rendered by text-extraction OCR). This was confirmed computationally — with nd = 1.6890, the system EFL computes to 100.030 mm, matching the patent's stated f = 100 mm to within 0.03%. With the erroneous nd = 1.6390, the EFL deviates by over 10%.

The patent uses a normalized focal length of 100 mm. The production lens was scaled to approximately 50 mm for 35mm format.

### 2.1 Surface Prescription

| Surface | Radius (mm) | Thickness (mm) | nd (after) | νd | Element | Medium |
|---------|-------------|----------------|------------|-----|---------|--------|
| r₁ | +57.00 | d₁ = 8.0 | 1.6185 | 60.5 | L1 entry | SK16 glass |
| r₂ | +146.30 | t₁ = 0.4 | 1.0 | — | air | air gap |
| r₃ | +36.20 | d₂ = 10.0 | 1.6711 | 47.3 | L2 entry | BaLF glass |
| r₄ | +110.00 | d₃ = 6.0 | 1.4645 | 65.7 | L3 (cement) | FK glass |
| r₅ | −300.00 | d₄ = 6.8 | 1.6890 | 31.2 | L4 (cement) | SF glass |
| r₆ | +23.70 | t₂ = 15.0 | 1.0 | — | air | air gap (STOP) |
| r₇ | +200.00 | d₅ = 2.0 | 1.5647 | 55.8 | L5 entry | BaK glass |
| r₈ | +30.70 | d₆ = 12.0 | 1.6711 | 47.3 | L6 (cement) | BaLF glass |
| r₉ | −152.64 | — | 1.0 | — | air | image space |

**Sign convention (standard modern):** R > 0 means center of curvature lies to the right of the surface (toward the image). All thicknesses are positive axial distances to the next surface.

### 2.2 System Parameters (Computed)

| Parameter | Value |
|-----------|-------|
| Effective focal length (EFL) | 100.030 mm (patent: 100 mm) |
| f-number | f/2.0 |
| Configuration | 6 elements / 3 groups |
| Total axial length (r₁ to r₉) | 60.2 mm |
| Total track / EFL | 0.60 |
| Air-glass interfaces | 6 |
| Cemented interfaces | 3 |
| Half-field angle (50mm on 35mm format) | 23.4° |
| Full field angle (2ω) | 46.8° |


## 3. Glass Identification

Bertele's design uses glass types from the 1930s Schott Jena catalog. The patent lists only nd (refractive index at the d-line, 587.56 nm) and νd (Abbe number) — not glass trade names. The identifications below are based on matching these parameters against known Schott types of the period.

### 3.1 Glass Map

Five distinct glass types are used across six elements. The nd = 1.6711 / νd = 47.3 glass appears twice (L2 and L6), a deliberate choice that simplifies manufacturing and inventory.

**nd = 1.6185, νd = 60.5 — Schott SK16 (Dense Crown)**

Used for L1 (front positive element). This is a barium crown glass with a high refractive index and low dispersion, placing it in the upper-left region of the Abbe diagram. The modern Schott equivalent is N-SK16 (nd = 1.62041, νd = 60.32). Dense crowns in this family are workhorses for positive elements in fast photographic objectives — they provide strong refraction without contributing excessive chromatic aberration. The slight discrepancy between the patent value (1.6185) and the modern catalog value (1.6204) reflects the normal evolution of glass compositions over nine decades.

A practical note: collectors and restorers of the 5cm f/2 Sonnar report that the SK16-type front element is a relatively soft glass, susceptible to scratching and cleaning marks. Original examples with pristine front elements are uncommon.

**nd = 1.6711, νd = 47.3 — Schott BaLF5 or SSK-type (Barium Light Flint / Dense Crown)**

Used for both L2 (triplet front element) and L6 (rear doublet positive element). This glass sits at the boundary between crown and flint families on the Abbe diagram — relatively high index with moderate dispersion. No exact modern equivalent survives in current catalogs; the nearest is N-SSK5 (nd = 1.6584, νd = 50.88). That Bertele reused the same glass twice is characteristic of practical lens design: it reduces the number of distinct glass melts required, simplifying procurement. It also creates a degree of chromatic symmetry between the triplet and doublet groups.

**nd = 1.4645, νd = 65.7 — Schott FK3 type (Fluorite Crown)**

Used for L3 (the central element of the cemented triplet). This is the most optically significant glass choice in the entire design, and it embodies the fundamental insight of the Sonnar concept. With nd = 1.4645, this glass has one of the lowest refractive indices in the 1930s Schott catalog — approaching the index of optical cement (typically nd ≈ 1.50–1.56).

The practical consequence is that the cemented interfaces r₄ (Δnd = 0.207) and r₅ (Δnd = 0.225) have relatively small index differences compared to a glass-air transition (Δnd ≈ 0.5–0.7). These interfaces therefore contribute useful aberration correction — functioning as weak refracting surfaces — while producing negligible Fresnel reflection. In the Ernostar, these same corrections were achieved by air-spaced elements, each contributing two reflective air-glass surfaces. By filling the space with low-index glass, Bertele eliminated two air-glass interfaces entirely, reducing the system from 8 to 6 such interfaces.

The nearest modern equivalent is Schott N-FK5 (nd = 1.4875, νd = 70.41), but this is not an exact match. FK (Fluor Kron) glasses are fluorine-containing crown compositions. They are not typically lead-based — unlike flint glasses where the "N-" prefix indicates lead and arsenic removal — so the compositional changes between the original FK3 and modern N-FK types are driven primarily by arsenic removal and process refinements rather than major reformulation.

**nd = 1.6890, νd = 31.2 — Schott SF-type (Dense Flint)**

Used for L4 (the rear element of the cemented triplet — the strongly negative biconcave element). This is a high-dispersion lead-silicate flint glass with the lowest Abbe number in the design. The combination of high index and high dispersion makes it the primary source of negative chromatic power in the triplet, balancing the positive chromatic contributions of L2 and L3. No exact modern match exists; the closest current types are SF5 (nd = 1.6727, νd = 32.21) and SF2 (nd = 1.6477, νd = 33.85). The original glass was likely a now-discontinued lead-rich formulation.

Note: This refractive index value was initially misread by text-extraction OCR as 1.6390. The correct reading of 1.6890 was confirmed both by high-resolution visual inspection and by computational verification (see §10).

**nd = 1.5647, νd = 55.8 — Schott BaK4 type (Barium Crown)**

Used for L5 (the front element of the rear cemented doublet). This is a moderate-index crown glass. The modern Schott N-BaK4 (nd = 1.5688, νd = 55.98) is an excellent match — one of the closest correspondences among all five glasses in this design. In the doublet, L5 acts as the negative (dispersing) component, paired with the higher-index positive L6 to form the "collecting cemented face" that is the subject of the patent claim.


## 4. Element-by-Element Optical Role

### 4.1 Group 1: Front Positive Singlet (L1)

| Property | Value |
|----------|-------|
| Shape | Positive meniscus, convex to object |
| R₁ / R₂ | +57.00 / +146.30 |
| Focal length (thick lens) | +146.0 mm |
| Coddington shape factor | σ = +2.28 |
| Glass | SK16 (nd = 1.6185, νd = 60.5) |

L1 is a strongly bent positive meniscus with both surfaces convex toward the object. Its shape factor of +2.28 indicates significant bending beyond equiconvex, which serves two purposes. First, the strong curvature of r₁ (+57.00 mm) provides the dominant positive power of the front group. Second, the meniscus bending contributes to the correction of coma and spherical aberration for off-axis rays — the asymmetric shape redirects oblique pencils more gradually than a biconvex element would.

With a focal length of +146 mm — approximately 1.46× the system focal length — L1 provides moderate convergence before light enters the cemented triplet. The low-dispersion SK16 glass ensures that this convergence introduces minimal chromatic aberration.

### 4.2 Group 2: Cemented Triplet (L2 + L3 + L4)

**Group focal length: −176.1 mm (negative, meniscus shape, concave to image)**

This is the heart of the Sonnar design. The cemented triplet is a negative meniscus whose three constituent elements perform distinct roles:

**L2 — Positive meniscus (triplet entry)**

| Property | Value |
|----------|-------|
| Shape | Positive meniscus, convex to object |
| R₃ / R₄ | +36.20 / +110.00 |
| Focal length | +76.3 mm |
| Glass | BaLF (nd = 1.6711, νd = 47.3) |

L2 is the strongest positive element in the system (f = +76.3 mm). Its front surface r₃ has the tightest curvature in the design (+36.20 mm radius), and it carries the highest surface power of any individual surface (φ = +0.01854 mm⁻¹). Together with the positive contribution of L1, these two elements provide the converging power that enables f/2 operation.

L2 also plays a critical role in higher-order aberration generation. The second and third strong positive surfaces (r₁ and r₃) generate higher-order spherical aberration that counteracts the lower-order undercorrection inherent in fast lenses. This is a deliberate design strategy — the lens is not simply "well-corrected" in a Seidel sense; it exploits the interaction between 3rd-order and higher-order terms to achieve acceptable performance across the full aperture. This interaction is also the root cause of the Sonnar's notorious focus shift (see §5.4).

**L3 — Weak biconvex (low-index spacer)**

| Property | Value |
|----------|-------|
| Shape | Biconvex (weakly powered) |
| R₄ / R₅ | +110.00 / −300.00 |
| Focal length | +174.1 mm |
| Glass | FK3 (nd = 1.4645, νd = 65.7) |

L3 is the conceptual keystone of the Sonnar. With nd = 1.4645, its refractive index is so low that it functions almost as an "optical spacer" — a filled air gap. The cemented interfaces on either side of it (r₄ and r₅) have index differences of only Δnd = 0.207 and Δnd = 0.225 respectively, compared to Δnd ≈ 0.67 for a typical glass-air interface. These weak interfaces provide just enough refractive power for aberration correction, while contributing virtually zero reflection loss.

This is the innovation that transformed the Ernostar into the Sonnar. In the Ernostar, the space between the second and third elements was air, creating four reflective surfaces. Bertele replaced this air gap with L3, eliminating those reflections entirely. The optical correction is slightly different — cement surfaces are not optically identical to air surfaces — but the trade-off (marginally different aberration balance vs. dramatically improved transmission and contrast) was overwhelmingly favorable in an era before anti-reflection coatings.

**L4 — Strong biconcave negative (flint corrector)**

| Property | Value |
|----------|-------|
| Shape | Biconcave |
| R₅ / R₆ | −300.00 / +23.70 |
| Focal length | −31.6 mm |
| Glass | SF-type (nd = 1.6890, νd = 31.2) |

L4 is the most powerful individual element in the system (|f| = 31.6 mm). Its rear surface r₆ has the second-tightest curvature (+23.70 mm) and the highest single-surface power magnitude (φ = −0.02907 mm⁻¹). This is the principal diverging element, and it serves three critical functions:

1. **Chromatic correction.** With νd = 31.2 (highest dispersion in the design), L4 provides the negative chromatic contribution that balances the positive contributions of L2 and L3. The thin-lens chromatic contributions (φ/ν) approximately cancel across the triplet.

2. **Petzval sum control.** The strong negative power of L4 partially offsets the positive Petzval contributions of L1 and L2, flattening the field. The system Petzval sum is +0.00266 mm⁻¹, corresponding to a Petzval radius of about −375 mm — roughly 3.75× the focal length. This is larger (i.e., less aggressively curved) than a simple positive doublet would achieve, though still the Sonnar's main optical limitation.

3. **Coma correction.** The patent text specifically addresses coma as the motivating aberration: the system described in the referenced prior application "shows disturbing comatic phenomena." The strongly curved r₆ surface, combined with the refractive index step at the r₅ cement, provides the asymmetric correction needed to bring the upper and lower comatic fans into balance.

### 4.3 Group 3: Cemented Doublet (L5 + L6)

**Group focal length: +95.6 mm (positive)**

The rear cemented doublet is the subject of the patent claim itself. The patent states that "a collecting cement face in the last member of the objective system... has its hollow face turned towards the picture." Surface r₈ (+30.70 mm) is this collecting (converging) cemented face — it is convex toward the object and concave ("hollow") toward the image.

**L5 — Negative meniscus (doublet corrector)**

| Property | Value |
|----------|-------|
| Shape | Negative meniscus, convex to object |
| R₇ / R₈ | +200.00 / +30.70 |
| Focal length | −64.5 mm |
| Glass | BaK4 (nd = 1.5647, νd = 55.8) |

L5 is a thin (2.0 mm) negative meniscus. The patent claim requires that it be "a dispersing one" with "a refractive index smaller than that of the collecting lens" (L6). Indeed, nd(L5) = 1.5647 < nd(L6) = 1.6711, satisfying this condition with Δnd = 0.1064. This index difference at the cemented surface r₈ is the mechanism by which the doublet generates its collecting (converging) effect at the cement.

**L6 — Strong biconvex positive (principal rear power)**

| Property | Value |
|----------|-------|
| Shape | Biconvex |
| R₈ / R₉ | +30.70 / −152.64 |
| Focal length | +39.1 mm |
| Glass | BaLF (nd = 1.6711, νd = 47.3) — same as L2 |

L6 is a thick (12.0 mm) biconvex positive element with f = +39.1 mm — the second strongest individual element. It provides the majority of the rear group's positive power. Using the same glass as L2 (nd = 1.6711, νd = 47.3) creates a manufacturing advantage and also establishes a degree of chromatic symmetry between the front and rear halves of the system.

The rear surface r₉ (−152.64 mm) has a mild positive refractive power (+0.0044 mm⁻¹) that gently converges the exit beam toward the image plane.


## 5. Aberration Analysis

### 5.1 Axial Chromatic Aberration

The thin-lens chromatic contributions (φ/ν) for each element are:

| Element | φ (mm⁻¹) | νd | φ/ν |
|---------|-----------|-----|------|
| L1 | +0.00685 | 60.5 | +0.000113 |
| L2 | +0.01312 | 47.3 | +0.000277 |
| L3 | +0.00574 | 65.7 | +0.000087 |
| L4 | −0.03164 | 31.2 | −0.001014 |
| L5 | −0.01550 | 55.8 | −0.000278 |
| L6 | +0.02557 | 47.3 | +0.000541 |
| **Total** | | | **−0.000273** |

The residual sum of −0.000273 indicates a small deliberate undercorrection of axial chromatic aberration. This is typical of fast photographic lenses of this era, where a slight undercorrection provides a better balance across the visual spectrum than perfect zero-crossing would. The undercorrection also interacts with the lens's spherochromatism (variation of spherical aberration with wavelength), a higher-order effect that dominates at f/2.

### 5.2 Petzval Sum and Field Curvature

The Petzval sum is +0.00266 mm⁻¹, yielding a Petzval radius of −375 mm (3.75× EFL). Field curvature was the Sonnar's acknowledged weakness compared to the symmetric double-Gauss (Planar) designs used by Leitz. The positive Petzval sum produces an inward-curving image surface, meaning the best focus for off-axis points lies closer to the lens than the paraxial image plane.

In practice, Bertele compensated for this by introducing deliberate astigmatism whose tangential and sagittal focal surfaces straddle the Petzval surface, placing the medial image surface (the average of T and S) approximately at the flat film plane. This technique, while effective for moderate field angles, results in the characteristic "Sonnar look" — sharp center with gradually softening corners at full aperture.

### 5.3 Transmission Advantage

The Sonnar's primary design goal was contrast rather than resolution. With only 6 air-glass interfaces (versus 8 for the Ernostar and 8–12 for contemporary double-Gauss designs depending on whether cemented pairs were used), the uncoated Sonnar transmits approximately 78.3% of incident light, compared to 72.1% for the Ernostar (8 surfaces). For an uncemented double-Gauss of the era — such as designs with 10 air-glass interfaces — transmission drops to about 66.5%. This advantage of 6–12 percentage points translates directly to higher contrast and reduced flare — decisive advantages for photojournalism in low-light conditions.

### 5.4 Focus Shift — The Sonnar's Signature Aberration Behavior

Focus shift is the most practically significant optical characteristic of the Sonnar design, and any analysis of this lens that omits it would be incomplete. The phenomenon arises directly from the lens's treatment of spherical aberration.

At the Sonnar's f/2 maximum aperture, the full diameter of the entrance pupil is in use. Light passing through the outer zones of the lens elements encounters stronger refraction than light through the center, meaning the effective focal length varies across the aperture. In the Sonnar, the outer zones have a shorter effective focal length than the center — the design is undercorrected for spherical aberration. When the lens is wide open, the image is formed by the combined contributions of all zones, and the plane of best focus is dominated by the outer zones (which carry more light due to the larger annular area they represent).

When the aperture is stopped down, the outer-zone contributions are progressively eliminated. The remaining central rays converge at a slightly different (longer) focal length, and the plane of best focus shifts rearward — away from the lens and toward infinity. This is focus shift.

The magnitude of the shift in the original Sonnar designs is moderate — Brian Sweeney, who has studied dozens of original Sonnars, notes that Bertele optimized the early 5cm f/2 Sonnars for approximately 2/3 stop down from maximum aperture. At this critical f-stop, the rangefinder focus and the optical focus agree. At wider apertures, the lens focuses slightly in front of the rangefinder setting; stopped down further, it focuses slightly behind. For the f/2 Sonnar, this shift is generally within acceptable depth of field for normal photography, which is why it was not considered a serious problem in the 1930s.

Focus shift is inherent in the Sonnar optical formula and cannot be eliminated without fundamentally altering the aberration balance. For the f/2 design, it is a manageable characteristic — experienced rangefinder photographers learn to compensate by slightly adjusting focus when stopping down. When converting original Contax-mount Sonnars to Leica M mount, the lens can be optimized for either wide-open or stopped-down use, but not both simultaneously. Omnar Lenses recently developed a "Floating Lens Block" mechanism for their reproduction of this design, which mechanically compensates for focus shift by coupling the aperture ring to a slight axial movement of the optical assembly — an elegant mechanical solution to a century-old optical compromise.


## 6. Surface Power Distribution

The power distribution across the nine surfaces reveals the characteristic asymmetry of the Sonnar:

| Surface | R (mm) | φ (mm⁻¹) | Equiv. f (mm) | Role |
|---------|--------|-----------|---------------|------|
| r₁ | +57.00 | +0.01085 | +92.2 | Primary positive refraction |
| r₂ | +146.30 | −0.00423 | −236.5 | Weak negative (meniscus correction) |
| r₃ | +36.20 | +0.01854 | +53.9 | Strongest positive surface |
| r₄ | +110.00 | −0.00188 | −532.4 | Weak cement correction |
| r₅ | −300.00 | −0.00075 | −1336.3 | Very weak cement correction |
| r₆ | +23.70 | −0.02907 | −34.4 | Strongest negative surface |
| r₇ | +200.00 | +0.00282 | +354.2 | Weak positive entry |
| r₈ | +30.70 | +0.00347 | +288.5 | Collecting cement face (patent claim) |
| r₉ | −152.64 | +0.00440 | +227.4 | Mild positive exit |

The most striking feature is the power concentration at r₃ (+0.01854) and r₆ (−0.02907). These two surfaces, separated by only 22.8 mm of cemented glass, carry the bulk of the system's refractive work. The remaining surfaces provide fine-tuning corrections. This concentration of power near the aperture stop is characteristic of the Sonnar/Ernostar family and contrasts sharply with the distributed power of Gauss-type designs.


## 7. Focusing Mechanism

The patent does not describe a focusing mechanism, as it specifies the optical design only. However, we can determine the focusing method from the mechanical design of the production Contax-mount Sonnar.

The Zeiss Contax rangefinder camera used an **internal helicoid** built into the camera body, not the lens barrel. The Sonnar 5cm f/2 for the Contax was therefore a **unit-focusing** design — the entire optical assembly moves forward as a rigid unit to focus on closer objects. There are no floating or internally-moving groups.

For the production 50mm lens (scaled from the patent's 100mm), the focus extension from infinity to a close focus distance of approximately 0.9 m is approximately 2.9 mm — well within the travel range of the Contax body helicoid.

This unit-focus approach has optical consequences. As the lens moves forward, all aberrations change together — there is no mechanism to independently correct for close-focus aberrations. Sonnar designs are therefore optimized for infinity or moderate distances. At close focus, spherical aberration increases and the image softens, particularly at full aperture. This behavior was considered acceptable for the Sonnar's primary application (photojournalism and available-light photography), where close-up work at f/2 was unusual.


## 8. Patent Claim Analysis

The patent's single claim defines the lens as:

> A photographic objective, consisting of three air-spaced glass members, of which the first glass member located opposite the object to be photographed has a positive refractive power, the second glass member located in the middle of the objective has a strongly curved meniscus shape, and the third glass member located opposite the light-sensitive material has a positive refractive power and consists of at least two lenses, of which the lens facing the light-sensitive material is a collecting one and the other lens is a dispersing one and has a refractive index smaller than that of the collecting lens, both lenses being cemented together in such a way that the cement forms a part facing with its hollow face the light-sensitive material.

This claim identifies the distinguishing feature of this patent: the rear group is a cemented **doublet** with a specific geometry — the dispersing element (L5, nd = 1.5647) has a lower index than the collecting element (L6, nd = 1.6711), and the cemented interface (r₈) presents its concave ("hollow") face toward the film. Example I satisfies every element of this claim: three air-spaced groups, a positive first member (L1, f = +146 mm), a meniscus-shaped middle member (the triplet, with its strongly curved r₃ and r₆ surfaces), and a positive rear member consisting of a dispersing lens (L5) cemented to a collecting lens (L6) with the cement surface concave toward the image. The claim language — "at least two lenses" — permits the rear member to contain two or more cemented elements, though in Example I precisely two are used.

The motivation given in the specification is explicit: the prior design "shows disturbing comatic phenomena... particularly the upper comatic bunches show a strongly positive supercorrection or rectification." The introduction of this specific cemented face geometry in the rear group provides the additional degree of freedom needed to bring coma under control at wide field angles.


## 9. Sources and Methodology

### Primary Source
- US Patent 1,998,704, Ludwig Bertele, filed August 31, 1932, granted April 23, 1935. Prescription data extracted from 300 DPI rasterization of the original patent document.

### Glass Identification
- Schott AG, *Optical Glass Catalog* (current and historical data). Modern equivalents identified by nd/νd matching against the current Schott catalog, with allowances for composition evolution since the 1930s.
- refractiveindex.info database for cross-referencing glass parameters.

### Computational Verification
- System EFL computed via 2×2 paraxial transfer matrix method (refraction and transfer matrices for each surface). Computed EFL = 100.030 mm vs. patent-stated 100 mm (0.03% deviation).
- Element focal lengths computed using the thick-lens Lensmaker's equation.
- Petzval sum computed from surface-by-surface contributions: Σ (n₂ − n₁) / (n₁ · n₂ · R).
- Axial chromatic contributions computed as thin-lens φ/ν for each element.

### Historical Context
- Kingslake, R. *A History of the Photographic Lens* (Academic Press, 1989). Kingslake discusses the Ernostar-to-Sonnar evolution and the 6/3 design that appeared in 1931.
- Theatre of Noise, "Optical design of the Olympus Zuiko 85mm" (2024), which cites Kingslake's treatment: "In 1931 Bertele patented his first Sonnar. This had six elements in three groups with a distinctive cemented triplet before the stop and a doublet after."
- Wikipedia articles on the Zeiss Sonnar and Ludwig Bertele.
- Camera-wiki.org entries on Sonnar designs and Bertele's biography.
- Pencil of Rays (pencilofrays.com), "Double Gauss and Sonnar lens designs: A complete comparison."
- Brian Sweeney (Rangefinderforum), "Ninety Years of Sonnars" — extensive first-hand documentation of original Sonnar variations, focus shift behavior, and production history.
- Skyllaney Opto-Mechanics, "Floating Lens Block Technology" — technical documentation of focus shift compensation mechanisms for Sonnar designs.
- Erhard Bertele, *Ludwig J. Bertele, Ein Pionier der geometrischen Optik* (vdf Hochschulverlag, ETH Zürich, 2017).


## 10. Errata and OCR Corrections

During preparation of this analysis, the following OCR errors were identified in the patent text:

1. **nd of element L4:** The original text-extraction OCR rendered this as "1,6390" (nd = 1.6390, νd = 31.2). High-resolution visual inspection of the patent at 300 DPI revealed the digit to be an "8," giving nd = **1.6890**. This was confirmed computationally: nd = 1.6890 yields EFL = 100.030 mm (correct); nd = 1.6390 yields EFL = 89.554 mm (10.4% error).

2. **Sign conventions:** The typewritten patent uses a notation where positive radii appear with a preceding symbol that OCR sometimes misreads. Several radii were initially misread as negative when they are in fact positive. The verified sign pattern is: **+ + + + − + + + −** (only r₅ and r₉ are negative). This was confirmed by: (a) the brute-force sign search showing only one physically plausible combination yields EFL ≈ 100 mm; (b) cross-validation against the second patent example, whose signs are unambiguous and which confirms the patent's notation conventions; and (c) consistency with the patent drawing (Fig. 1), which shows the surface curvatures matching the verified signs.

These corrections were essential for a valid analysis. The corrected prescription reproduces the patent's stated focal length to within 0.03%.

---

*Analysis prepared March 2026. All computations independently verified via Python (paraxial ray trace, transfer matrices). SVG cross-section diagram generated from the verified prescription. Version 2 — corrected from initial draft per re-review.*
