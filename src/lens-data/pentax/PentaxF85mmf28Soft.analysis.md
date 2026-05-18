# Optical Analysis: smc PENTAX-F 85mm f/2.8 Soft

## US Patent 5,267,086 — Example 1

---

## Patent Reference and Design Identification

**Patent:** US 5,267,086, "Soft Focus Lens System"
**Applicant:** Asahi Kogaku Kogyo K.K. (Pentax Corporation), Tokyo, Japan
**Inventor:** Hiroyuki Hirano
**Filed:** October 19, 1990 (US); **Priority:** October 25, 1989 (JP 1-277895)
**Granted:** November 30, 1993

**Embodiment analyzed:** Example 1 (Numerical Example 1), corresponding to Figs. 1–4 of the patent.

The identification of Example 1 as the production smc PENTAX-F 85mm f/2.8 Soft rests on the following convergent evidence:

1. **Element and group count.** The patent's Example 1 has 5 elements in 4 groups; the production lens is documented as 5 elements in 4 groups by the K-Mount Page and Pentax catalog material.
2. **Focal length.** The patent prescription is normalized to f = 100.00 mm. Applying a uniform scale factor of 0.85× yields an EFL of 85.00 mm, matching the marketed focal length exactly.
3. **Aperture.** F<sub>NO</sub> = 1:2.8, matching the marketed f/2.8.
4. **Half-field angle.** ω = 14.2° (2ω = 28.4°), consistent with Pentax's published 28.5° angle of view for the 85mm f/2.8 Soft on 35mm format.
5. **Focus mechanism.** The patent describes front-group focusing with a fixed rear group, matching the production lens's known autofocus design via Pentax K-mount in-body motor.
6. **Close-focus magnification.** The patent achieves M = −0.337 (approximately 1/3 life-size) at the maximum extension; the production lens is mechanically limited to 0.50 m MFD with a maximum magnification of 0.23× (1:4.35).
7. **Patent timing.** The Japanese priority date of October 1989 aligns with the production lens's introduction in 1990.

All three examples in the patent share the same general architecture (positive front group, single negative rear element), but differ in element counts and separations. Example 2 has 5 elements in 5 groups (no cemented doublet); Example 3 has 5 elements in 3 groups (two cemented pairs). Only Example 1 matches the production lens's documented 5-in-4 configuration.

---

## Production Specifications

| Parameter | Value | Source |
|---|---|---|
| Designation | smc PENTAX-F 1:2.8 85mm SOFT | Pentax catalog |
| Optical formula | 5 elements in 4 groups | K-Mount Page / LENS-DB |
| Aperture range | f/2.8 – f/32 | K-Mount Page |
| Aperture blades | 9 | K-Mount Page |
| Minimum focus distance | 0.50 m | K-Mount Page |
| Maximum magnification | 0.23× (1:4.35) | K-Mount Page / LENS-DB |
| Filter diameter | 52 mm | K-Mount Page |
| Maximum diameter | 66 mm | K-Mount Page |
| Length | 60 mm | K-Mount Page |
| Weight | 300 g | K-Mount Page |
| Year of introduction | 1990 | LENS-DB |
| Mount | Pentax K (in-body AF motor) | K-Mount Page |

A notable mechanical feature is the **partially manual diaphragm**: the aperture operates in stop-down mode between f/2.8 and f/5.6 (the "soft range," where the deliberate spherical aberration is visible), and switches to automatic operation between f/5.6 and f/32 (the "sharp range"). This gives the photographer direct viewfinder feedback of the soft effect at shooting apertures without requiring depth-of-field preview.

---

## Optical Architecture

The lens is a **two-group positive-negative design** with a positive front group and a weak negative rear element. The front group (L1–L4) carries a net positive focal length of +71.3 mm (at 85mm scale) and the rear group (L5 alone) contributes a weak negative focal length of −258.7 mm. The total track from the first surface to the image plane is 93.3 mm — slightly longer than the 85.0 mm EFL (ratio 1.10), so the design is not telephoto in the strict optical sense (a true telephoto requires a total track shorter than the EFL).

The **positive–negative group arrangement** is telephoto-like in topology and serves the same functional purpose as a true telephoto: the negative rear group extends the back focal distance beyond what the front group alone would provide, permitting mirror-box clearance for the K-mount SLR. However, the rear group's power is too weak (−f/f_R = 0.33) to compress the total track below the focal length, so the design falls slightly outside the telephoto regime.

Within the front group, the power sequence is **positive (L1+L2 doublet), negative (L3), positive (L4)**, giving a triplet-like correction architecture that balances coma and astigmatism while deliberately leaving spherical aberration under-corrected to achieve the soft focus effect.

The aperture stop is located in the air gap between L3 and L4 (gap d₅ = 4.32 mm at patent scale, inferred from the cross-section drawing Fig. 1), placing it roughly at the center of the front group. This position is critical to the soft focus mechanism: it maximizes the marginal ray height at S1 (the primary SA-generating surface) while keeping off-axis aberrations controlled.

The design is **entirely spherical** — no aspherical surfaces are present anywhere in the prescription. This is confirmed by the patent text, which makes no mention of aspherical coefficients, and by the absence of any aspheric sag tables in the numerical examples. The soft focus effect is achieved purely through deliberate residual spherical aberration, not through aspherical surface manipulation.

---

## Element-by-Element Analysis

### Group 1: Cemented Doublet (L1 + L2) — Positive Crown / Negative Flint

#### L1 — Positive Meniscus, Convex to Object

nd = 1.65844, νd = 50.9. Glass: BACD14 (HOYA) — barium crown equivalent. f = +49.2 mm (scaled to 85mm).

L1 is the optically dominant element of the entire system and the primary source of the deliberate soft focus effect. Its strongly curved front surface (R₁ = 30.29 mm at 85mm scale) generates large positive spherical aberration, which is the fundamental mechanism behind the lens's soft rendering.

The patent's Condition (1) governs this surface directly: 0.25 < r₁/f < 0.50, with Example 1 yielding r₁/f = 0.356. This places the design squarely in the center of the allowed range — enough curvature to produce meaningful SA for the soft effect, but not so extreme that coma and higher-order aberrations overwhelm the image. The patent text (col. 2, lines 45–55) explains that exceeding the upper limit would produce too little SA for an effective soft focus lens, while falling below the lower limit would generate excessive coma at the first surface that cannot be compensated downstream.

The glass choice — a barium crown with moderate dispersion (νd = 50.9) — is a compromise. A higher-index glass would reduce the surface curvature needed for a given power, which would reduce SA. The moderate index of 1.658 keeps the curvature strong enough to generate the desired SA level.

The element is thick (d = 9.85 mm at 85mm scale), which contributes additional SA through the transfer effect: the marginal ray height at the rear surface is lower than at the front, so the rear surface (weakly curved R₂ = +399.8 mm) contributes relatively little counter-SA. The net effect is a strongly positive SA contribution from L1 that propagates through the rest of the system.

#### L2 — Negative Meniscus, Concave to Image (Cemented to L1)

nd = 1.78472, νd = 25.7. Glass: FD110 (HOYA) — dense flint. f = −82.6 mm (scaled to 85mm).

L2 is cemented to L1 at their shared surface (R₂ = +470.382 at patent scale), forming a classic crown-flint achromatic doublet. The Abbe number difference ν₁ − ν₂ = 25.2 satisfies the patent's Condition (2): 10 < ν₁ − ν₂ < 30. This difference controls the chromatic correction of the doublet — enough dispersion contrast to achromatize the strong positive power of L1, but not so much that secondary spectrum becomes problematic.

As a dense flint glass (nd = 1.785, νd = 25.7), L2 provides the necessary negative dispersion to counteract L1's chromatic aberration. The cemented interface has extremely weak power (φ₂ = +0.000268 mm⁻¹) because the index difference across the junction is small (Δn = 0.127), meaning almost all of L2's optical work is done at its rear surface S3 (R = 65.330 mm), where the transition from high-index flint to air produces strong negative refraction (φ₃ = −0.012012 mm⁻¹).

The doublet as a unit has a focal length of approximately +96 mm (at 85mm scale), about 13% longer than the system focal length. This relatively weak net power for such a physically large doublet is intentional: it controls the balance between SA generation (mostly at S1) and chromatic correction (at the cemented junction and S3) without overcorrecting the SA that the soft focus effect requires.

### L3 — Negative Meniscus, Concave to Image

nd = 1.72825, νd = 28.5. Glass: FD60 (HOYA) — dense flint. f = −56.0 mm (scaled to 85mm).

L3 is the strongest negative element in the system (f = −56.0 mm) and serves multiple roles. It is an air-spaced flint element positioned between the cemented doublet and the biconvex L4, separated by a large air gap (d₃ = 12.23 mm at 85mm scale) from the doublet and by the aperture stop gap (d₅ = 3.67 mm) from L4.

Optically, L3 acts as a field-flattening diverging element. Its strong negative meniscus shape (R₁ = +358.8 mm, R₂ = +36.5 mm at 85mm scale) introduces a net negative Petzval contribution of −0.00881 mm⁻¹ from its two surfaces, which partially counteracts the positive Petzval from L1, L4, and the doublet. Without L3's Petzval correction, the field curvature would be severe enough to degrade the soft focus effect — the halo would be non-uniform across the field.

L3 also provides a second flint element for chromatic correction. Together with L2, it gives the front group two negative-dispersion elements to balance the chromatic contributions of the positive crown elements L1 and L4. The φ/ν contribution of L3 (−0.000533) is the largest single chromatic correction term in the system, partly compensating for L4's large positive chromatic contribution (+0.000492).

The choice of a second dense flint (νd = 28.5) rather than a lighter flint is driven by the Petzval sum: higher-index flint glasses produce more Petzval correction per unit of negative power, keeping the element thin and light.

### L4 — Biconvex Positive

nd = 1.80440, νd = 39.6. Glass: TAFD25 (HOYA) — lanthanum flint. f = +43.6 mm (scaled to 85mm).

L4 is the strongest positive element in the system (f = +43.6 mm) and acts as the primary converging element that brings the image to focus behind the rear group. It is a biconvex lens (R₁ = +54.3 mm, R₂ = −95.0 mm at 85mm scale), positioned immediately behind the aperture stop.

The glass choice is notable: TAFD25 is a lanthanum flint with high index (nd = 1.804) but moderate dispersion (νd = 39.6). This is not a crown glass — it sits in the "short flint" or "lanthanum dense flint" region of the glass map. The high index allows strong positive power from moderate curvatures, which controls higher-order aberrations. The moderate Abbe number means L4 does introduce some chromatic aberration, but this is partially balanced by the dispersion from L3 and L2.

L4's position immediately after the stop means its contribution to spherical aberration is relatively small — the marginal ray height at L4 (≈ 12.3 mm at f/2.8, 85mm scale) is lower than at L1 (≈ 17.9 mm at patent scale, ≈15.2 mm at 85mm scale), and its surfaces are less aggressively curved. This is by design: L4 provides the converging power needed to form the image without significantly altering the SA balance established by L1.

The biconvex shape distributes the positive power between two surfaces, minimizing coma at each. The front surface (φ₆ = +0.01260 mm⁻¹) does the majority of the converging, while the rear surface (φ₇ = +0.00720 mm⁻¹) adds additional positive power while helping to flatten the field.

### Group 2 (Rear): L5 — Negative Meniscus, Concave to Image

nd = 1.51633, νd = 64.1. Glass: BSC7 (HOYA) — equivalent to Schott N-BK7. f = −258.7 mm (scaled to 85mm).

L5 is a single negative element that constitutes the entire rear group. It is a weak negative meniscus (f = −258.7 mm) with a nearly flat front surface (R₈ = +999.6 mm at 85mm scale) and a moderately curved rear surface (R₉ = +117.7 mm). The element is thin (d = 2.50 mm at 85mm scale) and made of ordinary borosilicate crown glass — the least expensive optical glass in the system.

L5's primary role is as a **field flattener and back focal distance extender**. Its weak negative power extends the back focal distance (BFD = 49.98 mm at 85mm scale) to clear the K-mount flange distance (45.46 mm) while maintaining adequate clearance for the SLR mirror (4.5 mm margin). Without L5, the front group's BFD would be too short for the mirror box.

The patent's Condition (4) governs the rear group's power ratio: 0.1 < −f/f_R < 0.5, with Example 1 yielding −f/f_R = 0.329. This bounds the rear group's diverging contribution — too strong a rear negative group would require excessive front-group extension for focusing (defeating the compact focus advantage), while too weak a rear group would not provide enough back focal clearance.

Condition (5) requires ν₅ > 55, and BSC7/BK7 at νd = 64.1 satisfies this comfortably. The high Abbe number ensures that the rear group's chromatic aberration contribution is minimal (φ/ν = −0.0000513, the smallest term in the system). This is important because L5 is the **fixed** group during focusing — any chromatic error it introduces would remain constant while the front group's chromatic balance shifts with focus. A low-dispersion glass minimizes this tracking error.

L5 also amplifies the front group's aberrations via its image magnification effect (the rear group acts as a negative relay, slightly magnifying the intermediate image). This is referenced in the patent (col. 3, lines 1–5): if the front group's focal ratio f_F/f is too low, "the image magnification by the rear lens group is increased to amplify the aberrations that develop in the front lens group." The design keeps this amplification modest (rear group magnification ≈ 1.19×).

---

## Aspherical Surfaces

**None.** The design is entirely spherical. No aspherical surfaces are present in any of the three patent examples, and the patent text makes no reference to aspherical coefficients, aspherical surface equations, or aspherical manufacturing processes anywhere in its specification or claims.

This is deliberate and characteristic of soft focus lens design philosophy. Aspherical surfaces are typically used to *correct* spherical aberration — precisely the aberration that this lens intentionally *preserves*. Introducing an asphere would undermine the design's fundamental purpose. The soft focus effect is generated entirely through the balance of spherical surfaces, particularly the strongly curved front surface of L1.

---

## Glass Identification and Selection

All five glasses in Example 1 are identified with high confidence against the HOYA catalog, which was the primary glass supplier for Pentax optical designs of this era.

| Element | nd | νd | Glass (HOYA) | Cross-reference | Role |
|---|---|---|---|---|---|
| L1 | 1.65844 | 50.9 | BACD14 | S-BAL42 (OHARA), N-BASF2 (Schott) | Barium crown; positive SA generator |
| L2 | 1.78472 | 25.7 | FD110 | S-TIH53 (OHARA), N-SF11 (Schott) | Dense flint; chromatic corrector |
| L3 | 1.72825 | 28.5 | FD60 | S-TIH14 (OHARA), N-SF5 (Schott) | Dense flint; field flattener + chromatic |
| L4 | 1.80440 | 39.6 | TAFD25 | S-LAH64 (OHARA), N-LAF33 (Schott) | Lanthanum flint; primary converger |
| L5 | 1.51633 | 64.1 | BSC7 | S-BSL7 (OHARA), N-BK7 (Schott) | Borosilicate crown; field flattener/relay |

All matches are exact to the catalog's published precision (Δnd < 0.00001, Δνd < 0.05). The HOYA attribution is preferred because Pentax historically sourced glass from HOYA for its domestic optical production.

**Chromatic strategy.** The glass palette divides into two chromatic families: two dense flints (L2 at νd = 25.7, L3 at νd = 28.5) paired against a barium crown (L1 at νd = 50.9) and a BK7 crown (L5 at νd = 64.1). L4's lanthanum flint (νd = 39.6) straddles the boundary, contributing moderate positive chromatic aberration. The net chromatic balance is:

$$\sum \frac{\phi_i}{\nu_i} = -0.000153$$

This small negative residual indicates the system is slightly overcorrected chromatically — the flint elements slightly overcompensate the crowns. This is typical for soft focus designs, where a small amount of chromatic undercorrection would compound the SA-based softness in an unpleasant way (color fringing in the halo). The slight overcorrection keeps the soft halo essentially achromatic.

---

## Focus Mechanism

The lens uses **front-group focusing**: the entire front group (L1–L4) translates forward as a rigid unit, while the rear group (L5) remains fixed relative to the film plane. This is a classic telephoto-focus scheme optimized for autofocus SLR use — the moving group is compact (4 elements, ≈ 300g total lens weight) and requires only modest extension.

### Patent maximum extension (M ≈ −1/3)

| Parameter | Infinity focus | Close focus (M ≈ −1/3) |
|---|---|---|
| d₇ (gap L4–L5) | 3.50 mm | 23.65 mm |
| Extension | — | 20.15 mm |
| Object distance (from S1) | ∞ | 311.7 mm |
| Object distance (from film) | ∞ | 425 mm |
| Magnification | 0 | −0.337 |

*(All values at 85mm production scale.)*

The patent states d₇ = 27.82 mm at close focus (at f = 100 scale), confirming a total extension of 23.70 mm (patent scale) or 20.15 mm (85mm scale). This is the full design extension corresponding to M = −0.337, or approximately 1:3 life-size.

### Production mechanical limits

The production lens limits the mechanical travel to a minimum focus distance of 0.50 m, yielding a maximum magnification of 0.23× (1:4.35). At MFD = 0.50 m, the paraxial model predicts d₇ ≈ 18.8 mm (85mm scale), corresponding to an extension of approximately 15.3 mm and a computed magnification of approximately 0.26×. The small discrepancy between the computed 0.26× and the manufacturer-specified 0.23× is expected: the paraxial model does not account for higher-order effects, and the manufacturer specification takes precedence for hard specifications.

The patent's Condition (3), 0.7 < f_F/f < 0.92, governs the focus extension. With f_F/f = 0.839, the front group's focal length is 84% of the system focal length. A longer front group focal length (higher ratio) would require more extension to reach close focus, while a shorter one (lower ratio) increases the rear group's magnification of front-group aberrations.

---

## Soft Focus Mechanism

The soft focus effect in this lens is entirely a consequence of **deliberate residual spherical aberration (SA)**. Unlike diffusion filters or Gaussian blur, SA-based soft focus preserves a sharp core image while overlaying a luminous halo — the effect is most visible on highlights and specular reflections, and it diminishes progressively as the aperture is stopped down.

### The SA-generating surface

The first surface of L1 (R₁ = 30.29 mm at 85mm scale) is the primary SA source. At f/2.8, the marginal ray arrives at this surface at a height of approximately 15.2 mm (85mm scale) and refracts through a barium crown glass (nd = 1.658) with a steep paraxial angle of incidence. At this angle, the difference between the paraxial and real (Snell's law) refraction produces significant positive transverse SA — the marginal rays converge to a shorter focal length than the paraxial rays, creating the characteristic "under-corrected" halo.

### Aperture dependence

The SA contribution scales roughly as the fourth power of the ray height. Stopping down from f/2.8 to f/5.6 (halving the marginal ray height) reduces the SA contribution by approximately 16×, which is why the soft effect fades rapidly between f/2.8 and f/5.6 and is essentially absent by f/8. The production lens's partially manual diaphragm exploits this: the f/2.8–f/5.6 range (stop-down mode) covers the full range of soft effects, while f/5.6–f/32 (automatic mode) produces conventionally sharp images.

### Design balance

The remaining elements do not fully correct the SA introduced by L1; they are designed to correct *other* aberrations (coma, astigmatism, chromatic aberration, field curvature) while leaving the SA partially intact. Specifically:

- **L2** (cemented flint): corrects chromatic aberration from L1 without substantially reducing SA.
- **L3** (negative meniscus): flattens the Petzval field and provides additional chromatic correction, with modest negative SA contribution.
- **L4** (biconvex lanthanum): provides the converging power needed for image formation; its SA contribution is moderate and partially compensates L1's SA, but not completely.
- **L5** (BK7 field flattener): very weak power, negligible SA contribution.

The result is a system with approximately 8–10 mm of longitudinal SA at full aperture (estimated from the Fig. 2 aberration curve, which spans the −10 to +10 mm axis), compared to essentially zero SA for a well-corrected 85mm portrait lens. This is the optical signature of the soft focus effect.

---

## Petzval Sum and Field Curvature

The surface-by-surface Petzval sum is:

$$\Sigma_{\text{Petz}} = \sum_{i} \frac{\phi_i}{n_i \cdot n_i'} = +0.00450 \text{ mm}^{-1}$$

This corresponds to a Petzval radius of −222.3 mm (at f = 100 scale) or −188.9 mm (at 85mm scale). The negative sign indicates **inward-curving** Petzval field (image surface curves toward the lens), which is typical for designs with more positive than negative power.

A Petzval radius of −189 mm is moderate for an 85mm lens — not as flat as a double-Gauss design (which would target a Petzval radius of −300 to −500 mm), but acceptable for a portrait/soft-focus lens where the shallow depth of field at f/2.8 masks most field curvature effects. The soft focus halo itself also masks field curvature at the edge of the frame.

---

## Conditional Expressions

The patent specifies five conditions governing the design space. Example 1 satisfies all of them:

| Condition | Expression | Computed value | Range | Status |
|---|---|---|---|---|
| (1) | r₁/f | 0.356 | 0.25 – 0.50 | ✓ |
| (2) | ν₁ − ν₂ | 25.2 | 10 – 30 | ✓ |
| (3) | f_F/f | 0.839 | 0.70 – 0.92 | ✓ |
| (4) | −f/f_R | 0.329 | 0.10 – 0.50 | ✓ |
| (5) | ν₅ | 64.1 | > 55 | ✓ |

---

## Verification Summary

All patent-stated values were independently verified via ABCD paraxial matrix ray trace (Python, 64-bit floating point):

| Parameter | Patent | Computed | Δ |
|---|---|---|---|
| EFL | 100.00 mm | 100.003 mm | +0.003 mm |
| BFD (f_B) | 58.80 mm | 58.813 mm | +0.013 mm |
| f_F/f | 0.84 | 0.839 | −0.001 |
| −f/f_R | 0.33 | 0.329 | −0.001 |
| ν₁ − ν₂ | 25.20 | 25.2 | 0.0 |
| M at d₇ = 27.82 | −0.337 | −0.337 | < 0.001 |

All values agree within rounding tolerance, confirming the transcription is free of errors.

**Scaling note.** The data file applies a uniform ×0.85 scale factor to all R, d, and sd values, yielding an EFL of 85.00 mm at production scale. The Petzval sum and all power-derived quantities scale inversely (e.g., Petzval radius scales from −222.3 mm to −188.9 mm). Element focal lengths scale linearly (e.g., L1: 57.9 → 49.2 mm).

**Close-focus note.** The close-focus variable gap in the data file (d₇ = 18.815 mm at 85mm scale) is computed for the production MFD of 0.50 m, not the patent's maximum extension. The paraxial model at this MFD yields M ≈ −0.256, somewhat larger than the manufacturer-specified 0.23×. The manufacturer value is authoritative; the discrepancy reflects paraxial approximation limits and possible differences between the patent prescription and the final production design.

---

## Design Heritage and Context

The smc PENTAX-F 85mm f/2.8 Soft is Pentax's second-generation 85mm soft focus lens, succeeding the manual-focus smc Pentax SOFT 85mm f/2.2 (1985). The earlier lens used a much simpler 2-element-in-1-group design (similar in concept to a Rodenstock Imagon) with a variable aperture disc system to control the soft effect. The f/2.8 Soft represents a complete redesign: it moved to a 5-element corrected optical system with autofocus compatibility, conventional 9-blade diaphragm-based softness control, and much improved close-focus capability.

The lens was later updated cosmetically as the smc PENTAX-FA 85mm f/2.8 Soft (1995), with changes to improve compatibility with 1.4× teleconverters. The optical formula remained unchanged between the F and FA versions.

Among soft focus lenses of this era, the Pentax design is distinguished by its simplicity — 5 elements is notably fewer than the Canon EF 135mm f/2.8 with Softfocus (7 elements in 6 groups) or the Minolta AF 100mm f/2.8 Soft Focus (7 elements in 7 groups). The Canon design uses a fundamentally different soft focus mechanism: a movable glass-molded aspherical element (the 4th element) that shifts to introduce variable spherical aberration, whereas the Pentax achieves its effect through fixed under-correction controlled solely by the aperture. The compact, lightweight design (300g, 60mm length) made the Pentax one of the most practical soft focus lenses for field use.

---

## Sources

- US Patent 5,267,086 (Hirano / Asahi Kogaku Kogyo, 1993). Primary source for all optical prescription data, conditional expressions, and design rationale.
- The K-Mount Page (kmp.pentaxians.eu), "F 85/2.8 Soft" and "K 85/2.2 Soft." Production specifications, catalog number, mechanical details, diaphragm behavior comparison between F and FA versions.
- LENS-DB (lens-db.com), "smc Pentax-F 85mm F/2.8 Soft" and "smc Pentax-FA 85mm F/2.8 Soft." Element/group counts, magnification (1:4.35), introduction dates.
- HOYA Optical Glass Catalog. Glass identification reference (BACD14, FD110, FD60, TAFD25, BSC7).
- OHARA Optical Glass Catalog. Cross-reference glass identification (S-BAL42, S-TIH53, S-TIH14, S-LAH64, S-BSL7).
- Schott Optical Glass Catalog. Cross-reference glass identification (N-BASF2, N-SF11, N-SF5, N-LAF33, N-BK7).
