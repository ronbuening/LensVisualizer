# Nikon PC-E Micro-NIKKOR 45mm f/2.8D ED — Optical Design Analysis

**Patent:** US 7,656,591 B2, Example 1  
**Inventor:** Hiroshi Yamamoto (Nikon Corporation)  
**Filed:** February 12, 2007 — **Granted:** February 2, 2010  
**Priority:** JP 2006-081087 (March 23, 2006), JP 2007-014001 (January 24, 2007)

---

## 1. Overview and Identification

US 7,656,591 B2 discloses a retrofocus lens system designed for single-lens reflex and digital cameras. The patent describes a three-group architecture — negative, negative, positive — with a floating focus mechanism that moves all three groups toward the object while differentially varying the inter-group separations. The design achieves a maximum reproduction ratio of 1:2 at a close focus distance of approximately 0.253 m (Nikon specification), and an image circle large enough to support the tilt-shift movements of a perspective control lens.

Example 1 of this patent is the optical design underlying the **Nikon PC-E Micro-NIKKOR 45mm f/2.8D ED**, released in January 2008. The identification is confirmed by the following correspondences between patent and production lens:

| Parameter | Patent (Example 1) | Nikon Marketed Specification |
|---|---|---|
| Element count | 9 elements | 9 elements |
| Group count | 8 air-separated groups | 8 groups |
| Focal length | f = 41.2 mm (design EFL) | 45 mm (marketed) |
| Maximum aperture | FNO = 2.89 (design) | f/2.8 (marketed) |
| Maximum reproduction ratio | β = −0.50 (1:2) | 1:2 (0.50×) |
| ED elements | 1 (identified from prescription) | 1 ED glass element |
| Aspherical surfaces | 0 (patent states all spherical/plane) | None listed |
| Focus type | CRC floating (3-group) | CRC (Close-Range Correction) |
| Image height | Y = 29.30 mm (half-field 2ω ≈ 72°) | 51° on FX (sufficient image circle for ±11.5 mm shift) |
| Minimum focus distance | d₀ = 72.3 mm (object to S1 at β = −0.50) | 0.253 m (0.83 ft, from focal plane) |

The modest discrepancy between the patent's 41.2 mm design EFL and the marketed 45 mm focal length is typical of Nikon patent practice: the patent prescription may represent the optical design at a normalized or near-production focal length, with the marketed value reflecting the conventional rounding or the lens's actual performance at a specific conjugate. A paraxial ray trace of the Example 1 prescription yields EFL = 41.196 mm, confirming the patent's stated value to within rounding precision.

The 72° full field angle from the patent (image height Y = 29.30 mm) exceeds the 51° on-axis field of view of the FX format. This is intentional: the PC-E 45mm must illuminate a substantially larger image circle than FX format to support the full ±11.5 mm shift range. The required image circle radius depends on the shift direction: approximately 29.6 mm for short-axis shift, 31.8 mm for long-axis shift, and up to 33.0 mm for worst-case 45° rotation (the rotation mechanism permits ±90° in 30° increments). The patent's Y = 29.30 mm design image height corresponds to a 58.6 mm image circle diameter, which falls slightly short of the maximum theoretical requirement (~66 mm for diagonal shift). In practice, the lens transmits light beyond the design image height with gradually increasing vignetting, and some corner illumination falloff at extreme shift angles is normal and accepted in tilt-shift operation.

---

## 2. Optical Architecture

### 2.1 Group Structure

The design comprises three optically functional groups arranged in a negative–negative–positive retrofocus configuration:

**Group G1** (negative power, f ≈ −1023 mm) contains two elements: a negative meniscus L11 with its convex surface facing the object, followed by a biconvex positive element L12. The group's very weak net negative power arises from the near-cancellation of L11's moderate negative power (f ≈ −118 mm) and L12's positive power (f ≈ +136 mm). G1's primary role is to contribute the front negative element of the retrofocus architecture while introducing minimal axial aberration. The weak negative power means G1 functions more as an aberration corrector than as a strong diverging element — the heavy lifting for the retrofocus separation is done by G2.

**Group G2** (negative power, f ≈ −162 mm) contains three elements: a strong negative meniscus L21 (the ED glass element, f ≈ −45 mm) with convex surface facing the object, followed by a cemented positive doublet comprising biconvex L22 (f ≈ +47 mm) and biconcave L23 (f ≈ −105 mm), producing a net positive doublet (f ≈ +81 mm). The strong negative power of L21 dominates the group, making G2 the principal diverging element of the retrofocus system. The L22+L23 cemented doublet partially compensates L21's chromatic contribution while maintaining the group's net negative character.

**Group G3** (positive power, f ≈ +50 mm) is the converging rear group, containing four elements spanning the aperture stop: biconvex L31 (f ≈ +42 mm) before the stop, biconcave L32 (f ≈ −27 mm) and positive meniscus L33 (f ≈ +71 mm, convex toward image) and biconvex L34 (f ≈ +61 mm) after the stop. G3 provides virtually all the system's converging power and is responsible for forming the image. The sub-structure around the stop — a positive element (L31) before the stop, followed by a strong negative (L32) flanked by positives (L33, L34) after — follows a modified Cooke-triplet pattern within the rear group, using the negative-between-positives arrangement to balance spherical aberration, coma, and lateral color across the wide field.

### 2.2 Retrofocus Character

The back focal distance (BFD) of the system is approximately 56.50 mm, yielding a retrofocus ratio of BFD/EFL ≈ 1.37. This substantially exceeds unity, confirming the retrofocus architecture. The long BFD serves two purposes: it provides mirror clearance for SLR use, and — critically for this lens — it supplies the mechanical space needed for the tilt-shift mechanism, which requires the rear of the optical assembly to sit well forward of the film/sensor plane.

### 2.3 Field Curvature and Petzval Sum

The surface-by-surface Petzval sum is approximately +0.00299 mm⁻¹, corresponding to a Petzval radius of about −334 mm. The negative Petzval radius indicates an inward-curving (toward the lens) natural field curvature, which is modest and well within the range correctable by astigmatism balancing. The negative-power elements — particularly L32 (f ≈ −27 mm, the strongest diverging element in G3) and L21 (f ≈ −45 mm, the ED element in G2) — contribute negative Petzval terms that partially offset the strong positive contributions of the converging elements. The use of high-index glasses throughout the design (L11 at nd = 1.835, L34 at nd = 1.804) further moderates the Petzval sum by increasing the n·n′ product in the denominator of the Petzval formula φ/(n·n′), reducing each surface's contribution per unit refractive power.

---

## 3. Aspherical Surfaces

The patent explicitly states that "each lens surface of the retrofocus lens system is formed by a spherical surface or a plane surface" (column 6, lines 63–66). This is consistent with Nikon's published specifications, which make no mention of aspherical elements. The PC-E Micro-NIKKOR 45mm f/2.8D ED is therefore an **all-spherical design** — a notable characteristic for a lens of this era (2008), and one that the patent text highlights as advantageous for manufacturing precision.

The absence of aspherical surfaces is consistent with the lens's moderate f/2.8 maximum aperture and the relatively relaxed aberration demands of a tilt-shift lens (where the user typically stops down to f/5.6–f/11 for best performance across the shifted field). The designer achieved sufficient aberration correction through glass selection, element count, and the floating focus mechanism. The patent does note that "any lens surface of a retrofocus lens system according to each Example may be an aspherical surface" (column 12, lines 11–13), indicating the designer considered aspherical variants as potential extensions, but concluded the all-spherical approach was sufficient for the design targets.

---

## 4. Glass Identification

The prescription specifies nine distinct glass types. Using six-digit glass codes (first three digits = (nd − 1) × 1000 rounded; last three digits = νd × 10 rounded) and cross-referencing against the OHARA, Schott, HOYA, Sumita, and HIKARI catalogs, the following identifications were determined:

### 4.1 Confirmed Exact Matches

| Element | nd | νd | Code | Best Catalog Match | Confidence |
|---|---|---|---|---|---|
| L11 | 1.83481 | 42.72 | 835/427 | OHARA S-LAH55V / HOYA TAFD5F | Exact (Δnd < 0.00001, Δνd < 0.01) |
| L31 | 1.61800 | 63.38 | 618/634 | OHARA S-PHM52Q | Exact (Δnd = 0, Δνd = 0.01) |
| L32 | 1.71736 | 29.52 | 717/295 | Schott SF1 / HOYA FD60 | Exact (Δnd = 0, Δνd ≤ 0.02) |
| L33 | 1.48749 | 70.45 | 487/704 | OHARA S-FSL5 / Schott N-FK5 / HOYA FC5 | Exact (Δnd = 0, Δνd ≤ 0.04) |
| L34 | 1.80400 | 46.58 | 804/466 | OHARA S-LAH65V / HOYA TAF3 | Exact (Δnd = 0, Δνd ≤ 0.01) |

### 4.2 Close Matches

| Element | nd | νd | Code | Best Catalog Match | Confidence |
|---|---|---|---|---|---|
| L22 | 1.78800 | 47.38 | 788/474 | Schott N-LAF21 (nd = 1.78800, νd = 47.49) | Very close (Δnd = 0, Δνd = 0.11) |
| L21 | 1.49782 | 82.56 | 498/826 | OHARA S-FPL51 (1.497/81.6) / HOYA FCD1 | Near (Δnd = 0.0008, Δνd = 0.95) — **ED glass** |

### 4.3 Unmatched Glasses

| Element | nd | νd | Code | Assessment |
|---|---|---|---|---|
| L12 | 1.75692 | 31.59 | 757/316 | No standard catalog match. High-index, high-dispersion lanthanum flint in the SF/TIH family. Likely a Nikon proprietary melt or special-order glass. Nearest standard types are OHARA S-TIH4 (755/275, Δνd = 4.1) and OHARA S-LAM54 (757/478, Δνd = 16). |
| L23 | 1.56732 | 42.72 | 567/427 | No standard catalog match. Moderate-index flint glass. Nearest types are OHARA S-TIL25 (1.5658/43.09, Δnd = 0.0015) and Schott LF7 (1.5750/41.49, Δnd = 0.008). Likely a custom melt or discontinued type. |

### 4.4 The ED Element

Nikon's published specifications list "one ED glass element." The ED element is identified as **L21** (nd = 1.49782, νd = 82.56), the negative meniscus in Group G2. Its optical properties place it in the fluorite-crown / phosphate-crown family, very near OHARA S-FPL51 (nd = 1.497, νd = 81.6) or its HOYA equivalent FCD1. The small residual differences (Δnd ≈ +0.0008, Δνd ≈ +1.0) suggest Nikon may use their own proprietary ED glass formulation rather than an off-the-shelf catalog type — a common practice, as Nikon has historically manufactured some of their own optical glasses.

L21's placement in G2 — the strongly negative group — is deliberate. As a high-νd, low-dispersion glass in a diverging element, L21 introduces a large negative chromatic power contribution that counteracts the positive chromatic power from the converging elements in G3. Its anomalous partial dispersion properties provide superior correction of secondary chromatic aberration (lateral color) compared to what would be achievable with conventional crown glasses, which is particularly important for a wide-field lens with tilt-shift capability.

---

## 5. Element-by-Element Optical Role Analysis

The following analysis describes the shape, power, and role of each element in the design, supported by the computationally verified focal lengths.

### L11 — Negative Meniscus (G1, front element)

- **Shape:** Negative meniscus, convex toward object (R₁ = +49.752, R₂ = +32.115; both positive, steeper rear surface)
- **Glass:** OHARA S-LAH55V type (nd = 1.83481, νd = 42.72) — high-index lanthanum flint
- **Focal length:** f ≈ −118 mm (moderately negative)
- **Role:** L11 is the first optical surface the light encounters. As a negative meniscus with a steeply curved rear surface, it diverges the incoming beam while minimizing surface reflections and higher-order aberrations by presenting a gently curved convex face to the scene. The high refractive index (1.835) reduces the surface curvatures needed for a given power, lowering both spherical aberration contributions and the element's sensitivity to manufacturing tolerances. L11 sets up the basic retrofocus divergence and helps control distortion across the wide field.

### L12 — Biconvex Positive (G1, rear element)

- **Shape:** Biconvex (R₁ = +130.000, R₂ = −492.062)
- **Glass:** Proprietary high-dispersion lanthanum glass (nd = 1.75692, νd = 31.59) — no standard catalog match
- **Focal length:** f ≈ +136 mm (weakly positive)
- **Role:** L12 partially compensates L11's negative power, reducing G1's net divergence to a very weak negative (f_G1 ≈ −1023 mm). More importantly, its high-dispersion glass (νd = 31.59) is paired with L11's moderate-dispersion glass in a chromatic near-doublet arrangement: the opposite-sign powers with different νd values produce a degree of axial color correction within G1 itself. The Coddington shape factor of approximately +0.58 indicates a front-biased biconvex shape, intermediate between equiconvex (q = 0) and plano-convex (q = 1) — the front surface (R₁ = 130 mm) carries substantially more refractive power than the weak rear surface (R₂ = −492 mm). The patent's conditional expression (5) constrains L12's shape factor to the range 0.5–3.0, and the value of 0.58 sits near the lower bound, favoring controlled spherical aberration variation during focusing.

### L21 — Negative Meniscus, ED Glass (G2, front element)

- **Shape:** Negative meniscus, convex toward object (R₁ = +138.964, R₂ = +19.308; both positive, much steeper rear)
- **Glass:** Nikon ED glass, near OHARA S-FPL51 (nd = 1.49782, νd = 82.56)
- **Focal length:** f ≈ −45 mm (strongly negative — the most powerful diverging element)
- **Role:** L21 is the workhorse diverging element of the retrofocus design and the lone ED glass element. Its very strong negative power (|f| ≈ 45 mm, nearly equal to the system EFL in magnitude) creates the substantial ray divergence that pushes the rear principal plane forward, producing the long BFD essential for both SLR mirror clearance and the tilt-shift mechanism. The extremely high Abbe number (82.56) means L21 introduces very little chromatic dispersion despite its strong refractive power, and its anomalous partial dispersion (characteristic of the FPL51-family glasses) provides the secondary spectrum correction that distinguishes ED lenses. The large radius ratio (R₂/R₁ ≈ 0.139) produces a deeply curved meniscus shape that is characteristic of strong negative elements in retrofocus front groups.

### L22 — Biconvex Positive (G2, cemented with L23)

- **Shape:** Biconvex (R₁ = +42.141, R₂ = −310.529)
- **Glass:** Schott N-LAF21 type (nd = 1.788, νd = 47.38) — lanthanum flint
- **Focal length (standalone):** f ≈ +47 mm
- **Role:** L22 is the positive element of the cemented doublet in G2. Its strong positive power partially counteracts L21's divergence while introducing the opposite chromatic sign, creating a partial achromatic correction within G2. The high-index lanthanum glass allows strong curvature without excessive thickness.

### L23 — Biconcave Negative (G2, cemented with L22)

- **Shape:** Biconcave (R₁ = −310.529, R₂ = +73.800)
- **Glass:** Unmatched; possibly proprietary (nd = 1.56732, νd = 42.72)
- **Focal length (standalone):** f ≈ −105 mm
- **Role:** L23 is the negative element of the cemented doublet. Together, L22+L23 form a net positive doublet (f ≈ +81 mm) that corrects the chromatic aberrations introduced by L21's strong negative ED element. The cemented junction at R = −310.529 mm is nearly flat, which minimizes cementing-induced stress and simplifies manufacturing. The L22+L23 doublet also helps balance the Petzval sum: by adding negative Petzval contributions from L23's diverging surfaces while maintaining net positive power, the doublet flattens the field curvature.

### L31 — Biconvex Positive (G3, before stop)

- **Shape:** Biconvex, rear-biased (R₁ = +80.318, R₂ = −37.349)
- **Glass:** OHARA S-PHM52Q type (nd = 1.618, νd = 63.38) — phosphate crown
- **Focal length:** f ≈ +42 mm (strong positive — nearly equal to system EFL)
- **Role:** L31 is the primary converging element of the rear group and the most powerful positive element in the system. Its placement immediately before the aperture stop is strategic: it receives the diverging beam from G2, bends it strongly toward convergence, and defines the entrance pupil location. The phosphate crown glass has high νd (63.38), contributing minimal chromatic aberration. The rear-biased shape (R₂ curvature about twice R₁'s) distributes the refractive bending between front and rear surfaces, minimizing the spherical aberration generated by each. The patent identifies L31 as the preferred vibration reduction (image stabilization) element, should VR be implemented.

### Aperture Stop (S)

The aperture stop sits in the air space immediately behind L31, at the geometric heart of G3. This placement is typical of quasi-symmetric designs: by locating the stop near the center of the converging group, the chief ray passes through the surfaces of L32, L33, and L34 at relatively low heights, which reduces off-axis aberration contributions from these elements. The patent specifies a 9-blade rounded diaphragm.

### L32 — Biconcave Negative (G3, after stop)

- **Shape:** Biconcave, front-biased (R₁ = −28.492, R₂ = +70.877)
- **Glass:** Schott SF1 type (nd = 1.71736, νd = 29.52) — dense flint
- **Focal length:** f ≈ −27 mm (strongly negative)
- **Role:** L32 is the most powerful negative element in the rear group and serves as the flint component of G3's internal doublet-like structure. Its very low Abbe number (29.52 — dense flint) provides strong negative chromatic power that, combined with the positive chromatic contributions of the surrounding crown elements (L31, L33, L34), achieves axial and lateral color correction. The substantial thickness (9.2 mm — the thickest element in the design) gives L32 a pronounced thick-lens effect that the designer exploits for higher-order aberration balancing. L32 also makes the largest single negative Petzval contribution in the system, helping to flatten the field curvature against the strong positive Petzval of L31.

### L33 — Positive Meniscus (G3, after stop)

- **Shape:** Positive meniscus, convex toward image (R₁ = −95.520, R₂ = −25.721; both negative, steeper rear)
- **Glass:** OHARA S-FSL5 / Schott N-FK5 (nd = 1.48749, νd = 70.45) — fluorine crown
- **Focal length:** f ≈ +71 mm (moderate positive)
- **Role:** L33 continues the convergence after L32 while contributing minimal chromatic aberration thanks to its high νd (70.45). The meniscus shape with both surfaces concave toward the object (convex toward image) is a field-flattening configuration: it adds positive power at high ray heights near the image, counteracting the residual Petzval curvature. The patent's conditional expression (6) constrains the Abbe number of the second lens from the image side of G3 (which is L33) to the range 60 < ν32 < 83. The value of 70.45 sits comfortably in this range, confirming L33's role in correcting lateral chromatic aberration across the wide field.

### L34 — Biconvex Positive (G3, rear element)

- **Shape:** Biconvex, rear-biased (R₁ = +270.998, R₂ = −59.752)
- **Glass:** OHARA S-LAH65V type (nd = 1.804, νd = 46.58) — high-index lanthanum flint
- **Focal length:** f ≈ +61 mm (moderate positive)
- **Role:** L34 is the final optical element before the image plane. Its high refractive index (1.804) allows it to contribute substantial positive power from relatively gentle curvatures, minimizing the higher-order aberrations that accumulate at the extreme rear of a lens where ray heights are at their widest spread. The nearly flat front surface (R₁ = 271 mm) and moderately curved rear surface (R₂ = −59.8 mm) produce a rear-biased shape that controls the exit pupil location and the telecentricity of the system — important for uniform illumination across a digital sensor and for maintaining image quality during tilt movements.

---

## 6. Focusing Mechanism

The PC-E Micro-NIKKOR 45mm f/2.8D ED employs Nikon's **CRC (Close-Range Correction)** system, which the patent describes as a three-group floating focus. The mechanism is distinguished by the following behavior upon focusing from infinity to close range:

1. All three groups move toward the object (the entire lens extends forward).
2. The G1–G2 separation (d4) **increases** from 1.00 mm to 5.28 mm (ΔD1 = +4.28 mm).
3. The G2–G3 separation (d9) **decreases** from 6.50 mm to 2.21 mm (ΔD2 = −4.29 mm).
4. The change magnitudes are equal: ΔD1 ≈ −ΔD2 ≈ 4.28 mm.

This equal-and-opposite gap change means that G1 and G3 move as a **mechanically linked unit** (i.e., they ride on the same helicoid or cam), while G2 moves at a different rate (lagging behind, so the gap to G1 widens and the gap to G3 narrows). This satisfies the patent's conditional expression (3): ΔD1 = −ΔD2.

The mechanical simplicity of this arrangement is significant. Only two independent motions are needed: one helicoid for the G1+G3 unit and one for G2, rather than three independent cams. The patent notes that this simplification reduces the aberrations caused by decentering and mechanical tolerance errors.

The BFD increases from 56.50 mm at infinity to approximately 78.14 mm at close focus (β = −0.50). This 21.64 mm increase reflects the combined effect of the lens barrel extension and the finite conjugate shift. With d₀ = 72.3 mm (object to first surface at maximum magnification), the total optical path from object to image is approximately 225 mm — the difference between this and the Nikon-specified MFD of 0.253 m is attributable to the physical overhang of the lens barrel beyond the first optical surface and measurement convention differences (the MFD is measured from the camera body's focal plane mark, not from the front element).

The floating focus achieves close-focus correction through differential movement of the groups. As the object comes closer:

- G2's increased separation from G1 causes the strong negative L21 element to intercept the beam at a different position relative to G1's diverging optics, altering the off-axis aberration balance.
- G2's decreased separation from G3 brings the diverging output of G2 closer to the converging G3 group, changing the ray heights at L31 and subsequent surfaces.
- The net effect corrects the coma, astigmatism, and distortion that would otherwise degrade at close focus — exactly the aberrations that plague conventional whole-lens-extension focusing in retrofocus designs.

The patent's conditional expression (1), −30 < ΔD1/(β·D1) < −7, evaluates to −8.56 for Example 1, well within the acceptable range. This indicates that the floating ratio is appropriately tuned: not so aggressive that astigmatism is over-corrected, and not so conservative that close-focus aberration is left uncorrected.

---

## 7. Semi-Diameter Estimation

The patent does not provide semi-diameter (clear aperture) values. Semi-diameters were estimated using a combined marginal and chief ray trace, following the standard methodology:

**Ray trace parameters:**
- Marginal ray: launched at the entrance pupil height corresponding to f/2.8 (EP radius = EFL / 2F = 41.2 / 5.6 = 7.36 mm)
- Chief ray: launched at 60% of the half-field angle (0.60 × 36° = 21.6°), constrained to pass through the center of the aperture stop
- Mechanical clearance: 8% applied to the combined |y_marginal| + |y_chief| envelope

**Constraint validation:**
All estimated semi-diameters were validated against five physical constraints:

1. **Edge thickness ≥ 0.7 mm** for all elements. The binding constraint is L33 (positive meniscus, R₁ = −95.52, R₂ = −25.72), whose deeply curved rear surface causes rapid edge-thickness loss. At sd = 12.5 mm, L33's edge thickness is 0.78 mm.
2. **Cross-gap sag intrusion ≤ 90% of gap** for all air spaces. The tightest gap is S14–S15 (L32 rear to L33 front, gap = 1.9 mm). At sd_check = 11.5 mm, the intrusion fraction is 0.86.
3. **sd/|R| < 0.90** for all surfaces. The highest ratio is S6 (L21 rear, sd/|R| = 0.751), well within limits.
4. **Element front/rear SD ratio ≤ 3.0** for all elements. All ratios are below 1.2.
5. **Smooth SD progression** verified: SDs decrease smoothly from front (20.0 mm) through the stop (10.3 mm) and increase smoothly toward the image (14.0 mm).

The front element semi-diameter (20.0 mm, diameter ≈ 40 mm) is consistent with the 77 mm filter thread — the large filter size accommodates the tilt-shift mechanism barrel rather than the front element diameter.

---

## 8. Summary of Verified Optical Parameters

| Parameter | Value | Verification |
|---|---|---|
| EFL (paraxial) | 41.196 mm | Matches patent f = 41.2 ✓ |
| BFD (infinity) | 56.50 mm | Retrofocus ratio 1.37 ✓ |
| BFD (close focus, β = −0.50) | 78.14 mm | Computed from finite conjugate ✓ |
| Retrofocus ratio | 1.371 | Confirms retrofocus character ✓ |
| Group focal lengths | G1: −1023 mm, G2: −162 mm, G3: +50 mm | G1 neg, G2 neg, G3 pos ✓ |
| f1/f2 ratio | 6.30 | Matches patent value 6.30 ✓ |
| Petzval sum | 0.00299 mm⁻¹ (ρ ≈ −334 mm) | Modest inward field curvature ✓ |
| Cond. expr. (1): ΔD1/(β·D1) | −8.56 | Within −30 to −7 ✓ |
| Cond. expr. (4): f1/f2 | 6.30 | Within 0.1 to 10 ✓ |
| Cond. expr. (5): (r2+r1)/(r2−r1) | 0.58 | Within 0.5 to 3.0 ✓ |
| Cond. expr. (6): ν32 | 70.45 | Within 60 to 83 ✓ (see note) |
| Total surfaces (excl. stop) | 17 refracting + 1 stop | 9 elements in 8 groups ✓ |
| Aspherical surfaces | 0 | All spherical ✓ |
| Variable gaps (focusing) | 3 (d4, d9, BFD) | CRC floating focus ✓ |
| Maximum reproduction ratio | β = −0.50 (1:2) | Matches Nikon spec ✓ |

**Note on ν32:** The patent's conditional expression table (Table 1) states ν32 = 70.76, while the prescription data lists νd = 70.45 for L33 (the second element from the image side of G3). The prescription value of 70.45 is consistent with known catalog glasses (OHARA S-FSL5: νd = 70.44; Schott N-FK5: νd = 70.41), suggesting the conditional expression table contains a minor rounding or transcription error. The discrepancy (Δ ≈ 0.3) does not affect any conclusions.

---

## 9. Design Lineage and Context

The PC-E Micro-NIKKOR 45mm f/2.8D ED occupies a unique niche in the NIKKOR lineup as the only "normal" focal length tilt-shift lens Nikon has produced. It was announced alongside the PC-E Micro-NIKKOR 85mm f/2.8D at PMA 2008 in January 2008, following the earlier announcement of the PC-E NIKKOR 24mm f/3.5D ED. The 24mm shipped first in spring 2008, with the 45mm and 85mm following in mid-2008, forming Nikon's three-lens PC-E system.

The design philosophy evident in the patent is conservative and precision-oriented: all-spherical surfaces, a moderate maximum aperture (f/2.8, unusual for a 45mm prime but appropriate for a tilt-shift lens where diffraction-limited performance at working apertures of f/5.6–f/11 matters more than wide-open speed), and a floating focus system designed for close-range performance at the expense of mechanical complexity. The 1:2 reproduction ratio and Nikon's "Micro" designation reflect the lens's intended use for product and studio photography, where precise focusing at close distances is essential.

The retrofocus architecture, while unusual for a "normal" 45mm focal length that would not ordinarily require a long BFD, is here dictated by the tilt-shift mechanism: the optical assembly must sit forward of the tilt/shift mounting plate, requiring a BFD substantially longer than what a symmetric or Gauss-type 45mm design would provide. The 56.5 mm BFD comfortably exceeds the 46.5 mm F-mount flange distance while providing space for the mechanical movements.

---

*Analysis prepared from US 7,656,591 B2, Example 1. All numerical claims independently verified via ABCD matrix paraxial ray trace. Semi-diameters estimated via combined marginal + chief ray trace with constraint validation. Glass identifications cross-referenced against OHARA (May 2023), Schott, HOYA, and Sumita catalogs. Manufacturer specifications sourced from Nikon USA (nikonusa.com).*
