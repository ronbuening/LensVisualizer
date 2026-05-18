# Hasselblad HC 4.5/300 — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** US 2006/0209426 A1, *Telephoto Lens*
**Applicant:** Fujinon Corporation
**Inventor:** Takashi Suzuki (Saitama-shi, JP)
**Filed:** March 6, 2006
**Published:** September 21, 2006
**Priority:** JP P.2005-062459, March 7, 2005
**Embodiment analyzed:** Example 1 (Table 1, corresponding to FIG. 1)

The identification of Example 1 with the production Hasselblad HC 4.5/300 rests on the following convergent evidence:

1. **Manufacturer.** Fujinon Corporation (the optical subsidiary of Fujifilm) designed and manufactured all HC-series lenses for the Hasselblad H system. The lens was also marketed as the "Super-EBC Fujinon 300mm f/4.5 Hasselblad."
2. **Element and group count.** Example 1 contains 9 elements in 7 air-separated groups — matching the production specification exactly.
3. **Focal length.** The patent's computed effective focal length is 291.96 mm; the production lens is marketed as 300 mm. The 2.7% difference is a standard rounding-up convention.
4. **Maximum aperture.** The patent states F/4.66; the production lens is marketed as f/4.5. Manufacturers routinely round the nominal aperture to the nearest standard value.
5. **Angle of view.** The patent gives 2ω = 13.4°. For the 645 film format (diagonal 69.7 mm), 2ω = 2 × arctan(34.85/292.0) = 13.6° — consistent within rounding. Hasselblad's aerial-photography datasheet lists 13°.
6. **Focus mechanism.** The patent describes an inner-focus design in which Group 20 translates toward the image to focus from infinity to close range. The production lens is specified as "internal focusing."
7. **Optical architecture.** Three main groups — positive front, negative focusing, positive rear with aperture diaphragm — consistent with the production lens cross-section diagrams.
8. **Patent timing.** Priority date March 2005; the HC 300mm was announced in September 2004 and entered production shortly after. The patent filing follows the product launch, which is typical for Fujinon's H-system lens patents.

No aspherical surfaces, no image stabilization, and no special coatings beyond Fujifilm's standard Super-EBC (Electron Beam Coating) are documented in the patent.

---

## Optical Architecture

The HC 4.5/300 is a three-group telephoto prime:

**Group 10** (front, positive): Four air-separated elements — G11, G12, G13, G14. Group focal length f₁₀ ≈ +114.5 mm. This group performs the primary light-gathering and determines the system's chromatic correction strategy.

**Group 20** (focus, negative): One cemented doublet — G21 + G22. Group focal length f₂₀ ≈ −106.1 mm. This group moves rearward along the optical axis during close focusing. Its negative power, positioned behind the strong positive front group, creates the telephoto effect.

**Group 30** (rear, weak positive): The aperture stop followed by a singlet G31 and a cemented doublet G32 + G33. Group focal length f₃₀ ≈ +1739 mm — effectively near-afocal. This group controls residual field curvature, lateral color, and coma at the image plane.

The overall telephoto ratio is TL/f = 254.9/292.0 = 0.873, meaning the physical length from the front vertex to the image plane is only 87.3% of the effective focal length. The lens is 37 mm shorter than it would be as a simple lens of the same focal length — a modest but useful compaction that keeps the package manageable for medium-format field use.

The back focal distance is 70.2 mm, providing 8.6 mm of clearance beyond the Hasselblad H mount flange distance (61.63 mm). This generous clearance accommodates the integrated central leaf shutter that is a hallmark of all HC-series lenses.

The power distribution follows the classic telephoto arrangement: strong positive front group, negative middle group, near-afocal rear group. Group 10 converges the incoming beam; Group 20 diverges it, shifting the rear principal plane forward of the physical lens; Group 30 performs final aberration cleanup and houses the aperture stop. The image circle diameter at the patent's half-field angle of 6.7° is 68.6 mm, covering the 645 format diagonal of 69.7 mm.

---

## Aspherical Surfaces

There are none. The HC 4.5/300 is an entirely spherical design — all 17 optical surfaces use conventional spherical curvatures. No aspherical coefficients appear in the patent tables, and no aspherical surfaces are described in the patent text.

This is noteworthy because many contemporary telephoto lenses rely on at least one or two aspherical surfaces (typically on the front elements) to control spherical aberration and coma at wide apertures. The HC 4.5/300 achieves its aberration correction entirely through glass selection, element shaping, and group power balance. This is feasible partly because the maximum aperture is a moderate f/4.5 — third-order transverse spherical aberration scales with the third power of the marginal ray height, and f/4.5 is roughly 4× less demanding than f/2.8 in that respect ((4.5/2.8)³ ≈ 4.15). The absence of aspheres also keeps manufacturing costs lower and avoids the surface-figure tolerancing challenges associated with large-diameter aspherics on a medium-format front group.

---

## Element-by-Element Analysis

### L1 — G11: Positive Meniscus, convex to object

nd = 1.70154, νd = 41.1. Glass: S-BAH27 (OHARA) — dense barium crown (flint class by νd < 50 project convention). f = +206.5 mm.

G11 is the first element the incoming light encounters. Its positive meniscus shape, convex toward the object, collects the off-axis ray bundle while introducing relatively low spherical aberration — the meniscus form distributes refraction across both surfaces more evenly than a biconvex shape would at this diameter. The front radius R₁ = +76.668 mm carries the strongest single-surface power in the lens (φ₁ = +0.00915 mm⁻¹, equivalent to a surface focal length of +109.3 mm) because of the large refractive index step Δn = 0.702 at the glass–air boundary, even though other surfaces have steeper curvatures (R₁₆ = 42.1 mm, R₅ = 48.8 mm).

The glass choice is unusual for a positive element in a telephoto lens. With νd = 41.1, G11 falls well below the νd > 55 range that would typically be used for a positive achromatizing element. This deliberate use of a moderate-dispersion glass is the patent's central innovation, captured in Condition Equation (1): 35 < ν11 < 50. By accepting higher chromatic contribution from the first positive element, the design forces the achromatizing burden onto a later element (G13) where anomalous partial dispersion glass can correct both primary and secondary chromatic aberration simultaneously. The patent's f₁₁/f ratio of 0.707 — satisfying Condition (5): 0.5 < f₁₁/f < 1.2 — ensures G11 is strong enough to redirect the chief ray effectively but not so strong that its chromatic contribution overwhelms the corrector.

### L2 — G12: Negative Meniscus, convex to object (concave on image side)

nd = 1.80610, νd = 33.3. Glass: 806/333 (dense flint, vendor uncertain — see Glass Identification below). f = −100.0 mm.

G12 is the strongest single element in the lens (|f| = 100 mm). Its rear surface R₄ = +48.901 mm is deeply curved and concave toward the image, producing the dominant negative-power surface of the entire front group (φ₄ = −0.01648 mm⁻¹, surface focal length −60.7 mm). This surface also contributes substantial overcorrected (negative) spherical aberration that partially cancels the undercorrected contribution from G11 and G13.

The choice of a dense flint (νd = 33.3) satisfies Condition (2): ν12 < 45, and Condition (4): ν12 < ν11. This high-dispersion negative element works as the classical flint partner in the front group's achromatizing pair. Its high refractive index (nd = 1.806) allows the strongly curved rear surface to achieve the needed negative power without excessive sag, which would create edge-thickness problems in what is already a thin element (center thickness 2.90 mm).

### L3 — G13: Biconvex Positive (ED element)

nd = 1.43875, νd = 95.0. Glass: S-FPL51 (OHARA) / FCD1 (HOYA) — fluorophosphate ED crown. f = +108.4 mm.

G13 is the single most important element for the chromatic correction strategy. It is a biconvex positive element using S-FPL51, one of the most widely used extra-low-dispersion (ED) fluorophosphate glasses in modern optical design. With νd = 95.0, it has exceptionally low dispersion; and with ΔPg,F = +0.0459 (OHARA catalog, NSL 7/PBM 2 reference), it has significant positive anomalous partial dispersion — meaning its blue-violet partial dispersion deviates substantially from the "normal" reference line. The patent states a preferred condition δθg,F ≥ 0.18 (¶0028), though this threshold appears inconsistent with the computed deviation under either standard reference convention; the patent's text defining the condition (¶0029) conflates the partial dispersion ratio θg,F itself with its deviation δθg,F, suggesting a textual error in the published application. Regardless of the specific numerical threshold, S-FPL51 is among the strongest anomalous-dispersion glasses available in the fluorophosphate family, and its role as the design's secondary-spectrum corrector is unambiguous.

The function of G13 is dual. First, it provides strong positive power (f = +108.4 mm), making it the most powerful positive element in the front group. Second, because of its extreme Abbe number and anomalous dispersion, when paired with the lower-νd elements G11 and G12, it corrects not only primary longitudinal chromatic aberration (bringing C-line and F-line to a common focus) but also secondary spectrum — the residual separation between the g-line focus and the C/F-line focus that limits the performance of telephoto lenses made entirely with "normal" glasses.

The patent's Condition (3) requires ν13 > 75 (satisfied at 95.0), ensuring that this element is genuinely in the ED class rather than merely a conventional crown.

The nearly flat rear surface (R₆ = −1650.8 mm, surface focal length +3763 mm) means the rear face of G13 contributes almost no optical power. Essentially all of G13's power comes from its steeply curved front surface R₅ = +48.803 mm (surface focal length +111.2 mm). This asymmetry is likely intentional: it minimizes higher-order aberrations contributed by the rear surface while keeping the element thick enough (16.36 mm center thickness) for structural rigidity — S-FPL51 is a soft, low-index glass that requires more physical thickness than dense flints.

### L4 — G14: Positive Meniscus, convex to object

nd = 1.62041, νd = 60.4. Glass: S-BSM16 (OHARA) / N-SK16 (Schott) — dense borosilicate crown. f = +189.6 mm.

G14 is the last element of Group 10 and the thickest single element in the lens (30.00 mm center thickness). Its meniscus shape, convex to object, continues the converging trend of the front group while contributing modest positive power. The crown-family glass (νd = 60.4) is a conventional choice for a positive element, adding to the system's primary achromatism without the cost of another ED element.

The thick meniscus form serves a structural purpose: it acts as the rear boundary of the substantial front group and helps control the beam diameter before it enters the air gap leading to the focusing group. The air gap after G14 (D₈ = 5.55 mm at infinity) separates the fixed front group from the movable focusing group; during close focusing, Group 20 moves rearward and D₈ expands while the much larger gap D₁₁ (32.87 mm at infinity, between G22 and the aperture stop) contracts to absorb the travel.

### L5 + L6 — G21 + G22 (Cemented Doublet): Focus Group

**G21:** nd = 1.80518, νd = 25.5. Glass: S-TIH53 (OHARA) / FD1 (HOYA) — titanium heavy flint. Biconvex (weakly).
**G22:** nd = 1.74400, νd = 44.8. Glass: S-LAM2 (OHARA) / N-LAF2 (Schott) — lanthanum flint. Biconcave.

The cemented doublet G21+G22 constitutes the entire second lens group and serves as the focusing unit. At infinity focus, it sits with its front surface (S9) at a distance of 5.55 mm behind G14; when focusing to close range, it translates rearward along the optical axis. The group focal length is f₂₀ = −106.1 mm.

The junction surface at S10 (R = −88.987 mm) carries a small refractive index step: Δn = 1.74400 − 1.80518 = −0.06118. This produces a weak positive surface power (φ₁₀ = +0.00069 mm⁻¹, surface focal length +1455 mm). The cemented interface therefore contributes nearly negligible optical power to the group — the group's negative power comes overwhelmingly from the diverging rear surface S11 (R = +69.551, φ = −0.01070, surface focal length −93.5 mm). The purpose of the cementation is primarily chromatic: by pairing a very high-dispersion flint (νd = 25.5) with a moderate-dispersion lanthanum flint (νd = 44.8), the doublet corrects its own internal chromatic aberration so that focus shift during close-focus travel introduces minimal color change.

G22's glass, S-LAM2 (νd = 44.8), falls in the lanthanum glass family and has mild negative anomalous partial dispersion (ΔPg,F ≈ −0.004 per OHARA catalog). This mild negative deviation from the normal line complements the positive anomalous dispersion of G13 (S-FPL51). During close-focus travel, the focusing group's translation changes the ray heights at which chromatic aberration is sampled; S-LAM2's anomalous dispersion helps maintain the secondary-spectrum balance established at infinity focus.

### L7 — G31: Negative Meniscus, convex to object

nd = 1.74320, νd = 49.3. Glass: S-LAL14 (OHARA) / LAC14 (HOYA) — lanthanum crown by manufacturer designation; borderline flint by νd < 50 project convention. f = −134.8 mm.

G31 is the first element after the aperture stop. It is a negative meniscus whose rear surface (R₁₄ = +59.167, concave toward the image) is more strongly curved than the front (R₁₃ = +147.6), producing net negative power. Positioned immediately after the stop, G31 controls off-axis aberrations — primarily coma and lateral color — that would otherwise degrade the image toward the corners of the 645 frame.

The lanthanum glass (νd = 49.3, nd = 1.743) provides a good balance of high index (keeping curvatures manageable) and moderate dispersion. Its Abbe number is near the crown/flint boundary (νd = 50), so it does not strongly push the system's chromatic balance in either direction.

### L8 + L9 — G32 + G33 (Cemented Doublet): Rear Corrector

**G32:** nd = 1.80518, νd = 25.5. Glass: S-TIH53 (OHARA) / FD1 (HOYA) — titanium heavy flint. Negative meniscus, convex to object.
**G33:** nd = 1.80610, νd = 33.3. Glass: 806/333 (dense flint, vendor uncertain — same glass as G12). Positive meniscus, convex to object.

The rear cemented doublet is the final optical element before the image plane. Its combined focal length is f = +136.3 mm (weakly positive), contributing a small amount of converging power that helps bring the diverging beam from Group 20 to focus.

The cemented interface at S16 (R = +42.110 mm) has an extraordinarily small refractive index step: Δn = 1.80610 − 1.80518 = +0.00092. The resulting surface power is φ₁₆ = +0.0000219 mm⁻¹ — effectively zero. This means the cementation contributes no meaningful optical power at all; the doublet's power comes entirely from the outer surfaces S15 and S17. The cementation exists purely for chromatic correction: despite nearly identical refractive indices at the d-line, the two glasses have very different dispersion (νd = 25.5 vs. 33.3), and their spectral refractive index curves diverge at the blue and red ends. The cemented interface thus functions as a purely dispersive boundary — a "virtual" chromatic corrector that introduces no monochromatic aberrations of its own.

The front surface S15 (R = +73.260, φ = +0.01099, surface focal length +91.0 mm) provides strong positive power, while the rear surface S17 (R = +205.070, φ = −0.00393, surface focal length −254.4 mm) provides moderate negative power. Together they yield the net positive doublet, with the chromatic balance tuned by the two flint-family glasses.

---

## Glass Identification and Selection

The lens uses 6 distinct glass types across 9 elements. The identification confidence is high for most glasses — every nd value matches a known catalog entry exactly (to five decimal places), and the νd values agree within typical rounding tolerance (< 0.15 units). One glass type (used in G12 and G33) has no confirmed match in current OHARA, HOYA, Schott, or CDGM catalogs and is designated by its six-digit code.

| Element | nd | νd | Best match | Vendor | Glass family | ΔPg,F | Confidence |
|---------|------|------|-----------|--------|-------------|-------|-----------|
| G11 | 1.70154 | 41.1 | S-BAH27 | OHARA | Dense barium crown (flint by νd) | — | High (nd/νd match) |
| G12 | 1.80610 | 33.3 | 806/333 | uncertain | Dense flint | — | Code only |
| G13 | 1.43875 | 95.0 | S-FPL51 / FCD1 | OHARA / HOYA | Fluorophosphate ED crown | +0.046 | High |
| G14 | 1.62041 | 60.4 | S-BSM16 / N-SK16 | OHARA / Schott | Dense borosilicate crown | — | High |
| G21 | 1.80518 | 25.5 | S-TIH53 / FD1 | OHARA / HOYA | Titanium heavy flint | — | High |
| G22 | 1.74400 | 44.8 | S-LAM2 / N-LAF2 | OHARA / Schott | Lanthanum flint | −0.004 | High |
| G31 | 1.74320 | 49.3 | S-LAL14 / LAC14 | OHARA / HOYA | Lanthanum (borderline crown/flint) | — | High |
| G32 | 1.80518 | 25.5 | S-TIH53 / FD1 | OHARA / HOYA | Titanium heavy flint | — | High |
| G33 | 1.80610 | 33.3 | 806/333 | uncertain | Dense flint | — | Code only |

The G12/G33 glass (nd = 1.80610, νd = 33.3) does not match S-LAH55 (nd = 1.83400, νd = 37.2) as previously reported, nor any current OHARA catalog glass. The closest candidates — S-NBH52 (nd = 1.80400, νd = 46.5) and Schott N-LASF43 (nd = 1.80610, νd = 40.6) — differ significantly in νd. This glass may be a discontinued formulation from the patent era (2005) or a proprietary Fujinon specification. It is designated by its six-digit code 806/333 pending future catalog confirmation.

Because Fujinon is a Japanese manufacturer, OHARA (also Japanese) is the most likely primary glass vendor, with HOYA as the cross-reference equivalent.

The glass palette is distinctive for what it excludes. The design uses only a single ED glass element (G13, S-FPL51). This is the patent's core claim: that by deliberately choosing a moderate-dispersion glass for G11 (νd = 41.1, violating the conventional "high-νd for positive elements" rule), the designer forces the achromatizing role onto G13, which then carries a larger share of the total anomalous dispersion correction. This allows one ED element to do the work that other telephoto designs achieve with two or three — reducing cost while maintaining secondary-spectrum performance (¶0004, ¶0007, ¶0027).

Two glasses are reused: S-TIH53 (G21 and G32) and the 806/333 glass (G12 and G33). This reduces the number of distinct glass melts required for production — a practical cost advantage.

---

## Chromatic Correction Strategy

The patent's intellectual contribution centers on chromatic aberration management. The conventional approach to achromatizing a telephoto lens pairs high-νd crowns (positive elements) with low-νd flints (negative elements). The residual secondary spectrum after such correction depends on how much anomalous partial dispersion the positive elements contribute; to reduce it, designers typically use multiple ED glass elements — expensive and difficult to polish.

Suzuki's approach inverts the front element's role. By using a glass with νd = 41.1 for G11 (below the conventional crown range), G11 becomes a deliberate source of primary chromatic aberration. This creates a larger correction burden that must be absorbed by G13 (S-FPL51, νd = 95.0). Because G13 now carries a greater fraction of the system's total positive power devoted to achromatism, the anomalous dispersion of S-FPL51 accounts for a proportionally larger share of the total chromatic correction — and therefore reduces secondary spectrum more effectively than if the same glass were sharing the positive-power role with conventional high-νd crowns. The patent summarizes this in ¶0027: "anomalous dispersion shares a large rate in a total of the lenses and secondary chromatic aberration on the axis is reduced."

The strategy is governed by four conditional inequalities, all of which Example 1 satisfies:

| Condition | Requirement | Example 1 value | Status |
|-----------|-------------|----------------|--------|
| (1) | 35 < ν11 < 50 | ν11 = 41.1 | ✓ |
| (2) | ν12 < 45 | ν12 = 33.3 | ✓ |
| (3) | ν13 > 75 | ν13 = 95.0 | ✓ |
| (4) | ν12 < ν11 | 33.3 < 41.1 | ✓ |
| (5) | 0.5 < f₁₁/f < 1.2 | f₁₁/f = 0.707 | ✓ |

The tightened conditions (1A)–(5A) from ¶0024 are also satisfied: 38 < 41.1 < 45, 33.3 < 40, 95.0 > 80, and 0.55 < 0.707 < 0.8.

The aberration plots in the patent (FIG. 3) confirm the result. The spherical aberration diagram shows the D-line, C-line, and G-line curves closely bundled within ±0.2 mm — indicating well-corrected longitudinal chromatic aberration with low secondary spectrum. The lateral color diagram (FIG. 3D) uses a ±20 μm scale; the C-line and G-line curves are well contained within this range. For reference, the Airy disk diameter at f/4.66 (d-line) is approximately 6.7 μm, so the lateral color correction — while good — operates on a scale several times the diffraction limit, which is typical for telephoto lenses of this field angle and format.

---

## Focus Mechanism

The HC 4.5/300 uses a two-gap inner-focus mechanism. Group 20 — the G21+G22 cemented doublet — translates rearward along the optical axis when focusing from infinity to close range. This is the simplest form of inner focusing: only one group moves, and it sits between two fixed groups.

The patent's surface table gives the infinity-focus spacings. The two variable air gaps are D8 (between G14 rear and G21 front, 5.55 mm at infinity) and D11 (between G22 rear and the aperture stop, 32.87 mm at infinity). When Group 20 moves rearward, D8 increases and D11 decreases by the same amount, conserving the total distance of 38.42 mm between Groups 10 and 30.

Close-focus gap values were computed via brentq root-finding for MFD = 2440 mm (8 feet): D8 increases from 5.55 mm to 12.33 mm, and D11 decreases from 32.87 mm to 26.09 mm, corresponding to a focus travel of 6.78 mm. The BFD remains constant at 70.18 mm (sensor fixed).

Inner focusing offers several advantages for a 300 mm medium-format telephoto. The front and rear groups remain stationary, so the overall lens length does not change during focusing — important for balance on a tripod collar. The moving group (2 cemented elements, modest diameter) is lightweight, enabling faster autofocus response than a unit-focus design that would need to translate the entire 9-element assembly. The fixed front element also allows the lens to maintain its weather sealing without a telescoping barrel.

---

## Petzval Sum and Field Curvature

The surface-by-surface Petzval sum is Σ(φ/n·n′) = +0.000532, corresponding to a Petzval radius of approximately −1879 mm. This is a very flat Petzval surface — the field curvature is exceptionally well controlled for a telephoto of this focal length.

The Petzval contributions by group reveal the mechanism:

| Group | Petzval contribution |
|-------|---------------------|
| Group 10 (front positive) | +0.00654 |
| Group 20 (focus negative) | −0.00561 |
| Group 30 (rear) | −0.00040 |
| **Total** | **+0.00053** |

Group 20's negative power provides the primary Petzval correction, offsetting 85.7% of Group 10's positive contribution. Group 30 provides a small additional negative correction. The near-zero total ensures that the image surface is nearly flat across the 645 frame — consistent with the astigmatism plots in FIG. 3(B), which show sagittal and tangential field curves closely tracking each other within ±0.2 mm.

---

## Verification Summary

Independent paraxial ray trace (ABCD/y-nu method) confirms:

| Parameter | Computed | Patent | Match |
|-----------|---------|--------|-------|
| EFL | 291.955 mm | 291.95 mm | 0.002% |
| f₁₁ | 206.54 mm | 206.54 mm | exact |
| f₁₁/f | 0.7074 | 0.707 | exact |
| BFD | 70.18 mm | (not stated) | — |
| Total track | 254.9 mm | (not stated) | — |
| Telephoto ratio | 0.873 | (not stated) | < 1 ✓ |

Semi-diameters were derived from combined marginal and chief ray trace at full aperture (f/4.66) and half-field (6.7°), with a vignetting model applied to front-group surfaces to fit the 95 mm filter-thread barrel constraint. Post-stop surfaces use the full paraxial chief ray. Mechanical clearance of 8% was applied throughout. All SDs pass edge-thickness (≥ 0.55 mm), sd/|R| < 0.90, element SD ratio ≤ 1.25, and cross-gap sag intrusion (< 90%) constraints.

The patent aberration diagrams (FIG. 3) show FNO = 4.66, ω = 6.7° — both consistent with the production HC 300mm f/4.5 specification for 645 format coverage.

---

## Sources

- US 2006/0209426 A1 (USPTO, published September 21, 2006)
- Hasselblad HC 4.5/300 official product page: https://www.hasselblad.com/h-system/lenses/hc45-300mm/
- B&H Photo product listing (production specifications): 9 elements / 7 groups, f/4.5–f/45, MFD 8', 95 mm filter thread
- LENS-DB.COM entry: "Also known as: Super-EBC FUJINON 300mm F/4.5 Hasselblad"
- OHARA glass catalog — S-FPL51 data sheet: nd = 1.43875, νd = 94.93, ΔPg,F = +0.0459 (NSL 7 / PBM 2 reference)
- OHARA glass catalog — S-BAH27 data sheet: nd = 1.70154, νd = 41.24
- OHARA glass catalog — S-BSM16 data sheet: nd = 1.62041, νd = 60.29
- OHARA glass catalog — S-LAM2 data sheet: nd = 1.74400, νd = 44.79, ΔPg,F ≈ −0.004
- OHARA glass catalog — S-LAL14 data sheet: nd = 1.74320, νd = 49.31
- OHARA glass catalog — S-TIH53 data sheet: nd = 1.80518, νd = 25.42
- Hasselblad H mount flange focal distance: 61.63 mm (FDTimes lens mount chart, Issue 81-82, 2017)
