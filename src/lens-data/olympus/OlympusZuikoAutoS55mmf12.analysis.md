# Olympus G.Zuiko Auto-S 55mm f/1.2 — Optical Analysis

**Patent:** US 3,743,387 · Jihei Nakagawa · Olympus Optical Co., Ltd. · Filed Nov. 5, 1971 · Granted July 3, 1973
**Design type:** Modified Gauss (double Gauss variant)
**Construction:** 7 elements / 6 groups · All spherical surfaces
**Mount:** Olympus OM bayonet (flange distance 46.0 mm)
**Announced:** 1972

---

## 1. Production Specifications

The Olympus G.Zuiko Auto-S 55mm f/1.2 was one of the flagship lenses of the Olympus OM system, introduced alongside the OM-1 body in 1972. It was among the fastest standard lenses available for any 35 mm SLR system at the time. The "G" prefix in the Zuiko nomenclature denotes seven optical elements (the letter's position in the alphabet corresponding to the element count — A = 1, B = 2, ... G = 7), and "Auto-S" indicates an automatic diaphragm with a standard focal length.

| Parameter | Value |
|-----------|-------|
| Focal length | 55 mm |
| Maximum aperture | f/1.2 |
| Angle of view | 43° diagonal |
| Optical construction | 7 elements / 6 groups |
| Minimum focus distance | 0.45 m |
| Aperture blades | 8 |
| Filter thread | 55 mm |
| Dimensions | 65 mm (diameter) × 47–48 mm (length) |
| Weight | 310–314 g |
| Focus mechanism | Unit focus (straight helicoid) |
| Aspherical surfaces | None |

---

## 2. Patent Prescription

The patent presents its prescription in normalized form with the focal length set to unity (f′ = 1). All radii of curvature, thicknesses, and air gaps must be multiplied by the production focal length of 55 mm to obtain physical dimensions. The patent states a back focus of 0.6899f, a relative aperture of 1:1.2, and a total angle of field of 43°.

A paraxial ABCD ray trace of the normalized prescription yields a computed EFL of 55.002 mm (ratio to 55.0: 1.000038), confirming the patent data to within 0.004%. The computed back focal distance is 37.947 mm (BFD/f = 0.68995), matching the patent's stated 0.6899 within rounding precision. Both numbers verify cleanly with no transcription or sign-convention errors.

There is a minor discrepancy in d₁₂ between the descriptive text (0.0623) and the patent claim (0.0633). At the description value, the BFD computes to 37.947 mm (BFD/f = 0.68995, matching the patent's 0.6899). At the claim value, the BFD computes to 37.917 mm (BFD/f = 0.68940), which does not match the stated back focus. The description value of 0.0623 is therefore the correct one; the claim likely contains a transcription error.

### 2.1 Scaled Prescription (f = 55 mm)

| Surface | R (mm) | d (mm) | nd | Medium | Role |
|---------|--------|--------|----|--------|------|
| r₁ | +39.408 | 6.067 | 1.8030 | Glass | L1 front |
| r₂ | +138.259 | 0.116 | 1.0 | Air | L1 rear → air |
| r₃ | +25.861 | 4.895 | 1.8061 | Glass | L2 front |
| r₄ | +39.567 | 1.909 | 1.0 | Air | L2 rear → air |
| r₅ | +47.647 | 1.760 | 1.7618 | Glass | L3 front |
| r₆ | +16.264 | 18.772 | 1.0 | Air | L3 rear → **stop gap** |
| r₇ | −17.969 | 1.760 | 1.7283 | Glass | L4 front |
| r₈ | −97.796 | 7.634 | 1.7550 | Glass | L4→L5 cement junction |
| r₉ | −28.562 | 0.099 | 1.0 | Air | L5 rear → air |
| r₁₀ | −101.167 | 5.577 | 1.7130 | Glass | L6 front |
| r₁₁ | −31.576 | 0.116 | 1.0 | Air | L6 rear → air |
| r₁₂ | +80.603 | 3.427 | 1.7130 | Glass | L7 front |
| r₁₃ | −917.224 | 37.95 | 1.0 | Air | BFD to image |

**Total glass on axis:** 31.1 mm · **Internal air gaps:** 21.0 mm · **Total track (front vertex to image):** 90.1 mm

### 2.2 Physical Layout and Back Focus

The total track-to-focal-length ratio is 1.64, which is compact for an f/1.2 design. The back focal distance of 37.95 mm is shorter than the OM mount flange distance of 46.0 mm, meaning the rear element protrudes approximately 8 mm behind the lens mount flange into the mirror box. This is entirely typical of fast normal lenses designed for SLR cameras — any f/1.2 standard lens for a 35 mm SLR must protrude past the mount flange, since the optical design cannot produce a BFD long enough to clear flange distances of 42–46.5 mm while maintaining adequate aberration correction at such a wide aperture.

---

## 3. Aspherical Surfaces

**There are no aspherical surfaces in this design.** The patent makes no mention of aspherical coefficients, aspherical departure, or non-spherical surface profiles anywhere in the specification, claims, or drawings. All thirteen refracting surfaces are simple spheres.

This is consistent with the state of manufacturing technology in the early 1970s. Aspherical surfaces in mass-produced consumer optics were extremely rare before the late 1970s. Canon's FD 55mm f/1.2 AL (March 1971 — the same year this patent was filed) was the world's first aspherical SLR lens, but its aspherical surface was individually hand-ground and polished, making it prohibitively expensive and not a scalable manufacturing solution. Practical molded aspherical elements for mass production did not emerge until the late 1970s and early 1980s. Olympus did not begin incorporating molded aspherical elements into their Zuiko lenses until that period. Nakagawa's design achieves its aberration correction through the classical approach of glass selection, surface curvature optimization, and — critically — the innovative construction of the cemented fourth group.

The absence of aspherics at f/1.2 is noteworthy. Modern f/1.2 designs (such as Canon's RF 50mm f/1.2L, Nikon's NIKKOR Z 50mm f/1.2 S, or Sony's FE 50mm f/1.2 GM) employ three or more aspherical surfaces. The Zuiko relies entirely on spherical surfaces and careful glass balancing to control the severe spherical aberration inherent to such a wide aperture. The aberration curves in the patent (Figures 2–4) show well-corrected spherical aberration, astigmatism within ±0.01 units, and distortion under ±2% — impressive performance for an all-spherical f/1.2 design.

---

## 4. Glass Identification

The patent lists refractive index (nd) and Abbe number (νd) for each of the seven elements. These values match against known Japanese optical glass catalogs, particularly OHARA and HOYA, which were Olympus's primary glass suppliers during this period. A notable feature of the glass selection is the heavy reliance on lanthanum-containing glasses (five of seven elements), which provide high refractive indices with relatively favorable dispersion — essential for an f/1.2 design where minimizing chromatic aberration across very wide ray bundles is critical.

| Element | nd | νd | Six-digit code | Glass family | Best catalog match | Residuals |
|---------|----|----|---------------|-------------|-------------------|-----------|
| L1 | 1.8030 | 46.6 | 803.466 | Lanthanum dense flint (LaSF) | OHARA S-LAH65 | Δnd = +0.001, Δνd = −0.03 |
| L2 | 1.8061 | 40.8 | 806.408 | Lanthanum dense flint (LaSF) | OHARA S-LAH53 | Δnd < 0.0001, Δνd = +0.1 |
| L3 | 1.7618 | 27.1 | 762.271 | Dense flint (NbF/SF) | No exact modern match | Family-level ID only |
| L4 | 1.7283 | 28.5 | 728.285 | Titanium dense flint (SF) | OHARA S-TIH10 / SCHOTT SF10 | Δnd < 0.001, Δνd < 0.1 |
| L5 | 1.7550 | 52.4 | 755.524 | Lanthanum crown (LaK) | No exact modern match | Family-level ID only |
| L6 | 1.7130 | 53.9 | 713.539 | Lanthanum crown (LaK) | SCHOTT N-LAK8 / HOYA LAC8 | Δnd < 0.001, Δνd < 0.1 |
| L7 | 1.7130 | 53.9 | 713.539 | Lanthanum crown (LaK) | SCHOTT N-LAK8 / HOYA LAC8 | (same as L6) |

For L2 and L4, the catalog matches are high-confidence with residuals under Δnd = 0.001 and Δνd = 0.1. For L1, the nearest modern equivalent is OHARA S-LAH65 (nd = 1.8040, νd = 46.57), which is close but shows a residual of Δnd = +0.001 — the patent value of 1.8030 may reflect a vintage melt formulation not precisely replicated in current catalogs. L3 and L5 do not have exact matches in modern OHARA or SCHOTT catalogs; both are identified at the family level. L6 and L7 share identical glass and are well-matched by SCHOTT N-LAK8 (nd = 1.71300, νd = 53.83).

All seven identifications should be understood as modern equivalents or family classifications, not as the exact melt designations used by Olympus in 1971–72.

### 4.1 Glass Selection Strategy

The glass chart reveals a deliberate chromatic correction strategy. The design separates into two dispersion families:

**Low-dispersion elements (νd > 40):** L1, L2, L5, L6, and L7 all use lanthanum-containing glasses with Abbe numbers ranging from 40.8 to 53.9. These carry the positive refractive power of the system. The high refractive indices (1.713–1.806) allow strong surface curvatures to be reduced, which helps control higher-order spherical aberration. Within this group, a further subdivision exists: L5, L6, and L7 are true lanthanum crowns (νd = 52–54), while L1 and L2 are lanthanum dense flints (νd = 41–47) — their higher dispersion relative to L5–L7 provides an additional degree of freedom for balancing chromatic aberration across the system. L6 and L7 share identical glass (nd = 1.7130, νd = 53.9), which simplifies procurement and manufacturing.

**High-dispersion elements (νd < 30):** L3 and L4 are the chromatic correctors. L3 (νd = 27.1, dense flint) is the strongest negative element in the front group (fl = −33.2 mm), and L4 (νd = 28.5, titanium dense flint, fl = −30.5 mm) provides the negative half of the cemented doublet and is the most powerful individual element in the system by focal length magnitude. These elements introduce deliberate chromatic dispersion to offset the undercorrected chromatism of the positive elements.

The resulting Petzval sum of the complete system is +0.1514 (normalized to EFL), yielding a Petzval radius of approximately −364 mm. This moderate positive Petzval sum represents a compromise: the Gauss form inherently generates a backward-curving field, and the design must balance field curvature against other aberrations at f/1.2. The astigmatism plot in the patent shows the sagittal and meridional surfaces diverging to about ±0.01 units at the maximum field angle of 21.5°, indicating that the net field curvature has been partially compensated by residual astigmatism.

---

## 5. Element-by-Element Optical Analysis

The lens follows a modified Gauss (double Gauss) architecture with positive-positive-negative power distribution in the front group and negative-positive-positive in the rear group, separated by the aperture stop. The key innovation highlighted in the patent is the construction of the fourth group — a cemented doublet whose cemented surface is strongly concave toward the object.

### Group I — L1: Front Positive Meniscus

| Property | Value |
|----------|-------|
| Shape | Positive meniscus, convex toward object |
| Radii | R₁ = +39.41 mm, R₂ = +138.26 mm |
| Thickness | 6.07 mm |
| Glass | nd = 1.8030, νd = 46.6 (lanthanum dense flint) |
| Focal length | +66.8 mm |

L1 serves as the front collector element. Its strong positive power begins converging the marginal ray bundle, while its meniscus shape (both surfaces convex toward the object, with R₁ < R₂) helps distribute the refraction across two gently curved surfaces. The very high refractive index (1.803) allows the curvatures to remain moderate despite the strong power, reducing surface contributions to spherical aberration. The air gap between L1 and L2 is extremely thin (0.116 mm), effectively making them an air-spaced doublet; this near-contact configuration helps control the lateral color generated by the front group.

### Group II — L2: Second Positive Meniscus

| Property | Value |
|----------|-------|
| Shape | Positive meniscus, convex toward object |
| Radii | R₃ = +25.86 mm, R₄ = +39.57 mm |
| Thickness | 4.90 mm |
| Glass | nd = 1.8061, νd = 40.8 (lanthanum dense flint) |
| Focal length | +79.9 mm |

L2 continues the convergence begun by L1, adding positive power in a second meniscus element. Its curvatures are steeper than L1's (shorter radii), and its glass has the highest refractive index in the system (1.8061) combined with a slightly lower Abbe number (40.8). This glass has mildly flint-like dispersion characteristics — an unusual choice for a positive element. The relatively low νd helps balance the longitudinal chromatic aberration budget: by sharing the positive power between L1 (νd = 46.6) and L2 (νd = 40.8) rather than concentrating it in a single high-νd element, Nakagawa gains an additional degree of freedom in controlling both spherical and chromatic aberrations simultaneously.

The air gap following L2 (1.91 mm) separates it from the negative L3, creating the characteristic front doublet spacing of the Gauss form.

### Group III — L3: Negative Meniscus (Pre-Stop)

| Property | Value |
|----------|-------|
| Shape | Negative meniscus, convex toward object |
| Radii | R₅ = +47.65 mm, R₆ = +16.26 mm |
| Thickness | 1.76 mm |
| Glass | nd = 1.7618, νd = 27.1 (dense flint) |
| Focal length | −33.2 mm |

L3 is the most powerful standalone element in the front group, and the second most powerful individual element in the entire system (after L4 at fl = −30.5 mm). It is a thin, strongly negative meniscus whose rear surface (R₆ = +16.26 mm) has the shortest radius of curvature of any surface in the entire lens — a distinction that makes it a critical contributor to multiple aberration correction mechanisms.

The negative power of L3 diverges the converging bundle just before it reaches the aperture stop, creating the characteristic waist at the stop position. In classical Gauss-type analysis, this pre-stop negative element is the primary corrector for spherical aberration: it introduces negative spherical aberration to offset the positive contributions from L1 and L2. The high-dispersion glass (νd = 27.1) simultaneously corrects the longitudinal chromatic aberration introduced by the front positive elements.

The strongly curved rear surface R₆ is also the single largest magnitude contributor to Petzval field curvature correction. Its short radius and negative power pull the Petzval sum in the negative direction, partially compensating the positive Petzval contributions from L1 and L2.

**Sphere constraint at R₆:** The short radius of curvature at R₆ (16.264 mm) imposes a hard physical limit on this surface's clear aperture. The maximum semi-diameter for which the surface slope remains below the manufacturing/validation threshold (64.2°) is approximately 14.6 mm. At f/1.2, the paraxial marginal ray height at this surface is approximately 16.5 mm, which exceeds this limit. This means the full f/1.2 marginal bundle is vignetted by L3's rear surface — the extreme marginal rays at the edge of the aperture are physically clipped. This is a designed-in characteristic: the marginal vignetting at S6 contributes to the lens's well-known soft, luminous rendering wide open, with performance sharpening markedly by f/2–f/2.8 as the stop reduces the beam to within L3's unvignetted clear aperture.

### Aperture Stop

The aperture stop is located in the large air gap between L3 and L4 (d₆ = 18.77 mm). This gap is the widest spacing in the system by a substantial margin, occupying over 20% of the total track. Its position between the front (positive) and rear (negative-positive) halves of the design is characteristic of the Gauss form. The 8-blade diaphragm stops down from the maximum f/1.2 to f/16.

At maximum aperture, the entrance pupil semi-diameter is approximately 22.9 mm (computed from EFL / 2F = 55 / 2.4 = 22.9 mm). The stop position is estimated at approximately 55% of the d₆ gap from L3 toward L4, based on the patent cross-section drawing (Fig. 1).

### Group IV — L4 + L5: Cemented Negative Meniscus (The Key Innovation)

| Property | L4 | L5 |
|----------|----|----|
| Shape | Neg. meniscus (concave to obj) | Pos. meniscus (concave to obj) |
| Radii | R₇ = −17.97 mm, R₈ = −97.80 mm | R₈ = −97.80 mm, R₉ = −28.56 mm |
| Thickness | 1.76 mm | 7.63 mm |
| Glass nd / νd | 1.7283 / 28.5 | 1.7550 / 52.4 |
| Individual fl | −30.5 mm | +51.0 mm |
| **Combined G4 fl** | **−116.3 mm** | |

This cemented doublet is the subject of the patent's principal claim. The patent specifies two conditions on the cemented surface r₈:

1. |r₈| < 3f (i.e., the absolute radius of the cemented surface must be less than three times the focal length)
2. r₈ < 0 (the cemented surface is concave toward the object)

With |r₈| = 1.778f and r₈ < 0, both conditions are satisfied. The patent argues that this strongly concave cement allows the fourth group to be made unusually thin, reducing the total lens length while increasing light throughput in the marginal zone.

The glass pairing within the doublet is carefully chosen. L4 uses a high-dispersion flint (νd = 28.5) while L5 uses a lanthanum crown (νd = 52.4), creating a Δν of 23.9 Abbe-number units. This dispersion difference enables chromatic correction: the negative L4 and positive L5 form a partially achromatic rear corrector. The combined group focal length of −116.3 mm is mildly negative, making G4 a weak diverging group immediately after the stop.

The cemented interface eliminates two air-glass reflections (replacing what would otherwise be the rear surface of L4 and the front surface of L5 with a single glass-glass junction), which is particularly valuable at f/1.2 where stray light and veiling glare from internal reflections would otherwise degrade contrast significantly. In the era before multi-coating became universal (the early silver-nose Zuiko lenses were single-coated), every eliminated air-glass surface was a meaningful improvement in flare resistance.

### Group V — L6: Positive Meniscus

| Property | Value |
|----------|-------|
| Shape | Positive meniscus, concave toward object |
| Radii | R₁₀ = −101.17 mm, R₁₁ = −31.58 mm |
| Thickness | 5.58 mm |
| Glass | nd = 1.7130, νd = 53.9 (lanthanum crown) |
| Focal length | +62.3 mm |

L6 is a strong positive meniscus that forms the rear converging element. Its concave-toward-object orientation (both radii negative, |R₁₁| < |R₁₀|) is characteristic of the rear half of a Gauss design. The lanthanum crown glass (νd = 53.9) keeps chromatic contributions modest despite the strong positive power. The air gap between L5 and L6 is only 0.099 mm — essentially optical contact — making G4 and G5 a near-contact triplet group. This extremely tight spacing maximizes the correction capability of the rear assembly by keeping the ray bundles nearly coincident across the L5–L6 boundary.

### Group VI — L7: Biconvex Positive

| Property | Value |
|----------|-------|
| Shape | Biconvex (nearly plano-convex) |
| Radii | R₁₂ = +80.60 mm, R₁₃ = −917.22 mm |
| Thickness | 3.43 mm |
| Glass | nd = 1.7130, νd = 53.9 (lanthanum crown) |
| Focal length | +104.1 mm |

L7 is the final element, a weakly biconvex lens that is very nearly plano-convex (R₁₃ is over 11× larger in magnitude than R₁₂). Its primary role is to provide a gentle final convergence to bring the image to focus at the film plane while contributing to field curvature and distortion correction. The rear surface R₁₃ is so weakly curved (−917 mm) that its refractive contribution is negligible; the element acts almost as a single-surface refractor at R₁₂.

L7 shares the same glass as L6 (nd = 1.7130, νd = 53.9), which was a deliberate manufacturing simplification — identical glass melts could supply both elements, reducing material costs and qualification effort.

---

## 6. Group Power Distribution and the Gauss Architecture

The system's power distribution reveals the modified Gauss structure clearly:

| Group | Focal length (mm) | Power sign | Role |
|-------|-------------------|------------|------|
| G1 (L1) | +66.8 | Positive | Front collector |
| G2 (L2) | +79.9 | Positive | Secondary convergence |
| G3 (L3) | −33.2 | Negative | Pre-stop diverger / SA corrector |
| G4 (L4+L5) | −116.3 | Negative | Post-stop chromatic corrector |
| G5 (L6) | +62.3 | Positive | Rear convergence |
| G6 (L7) | +104.1 | Positive | Final convergence / field corrector |

The front half (G1+G2+G3) has a combined focal length of +169.8 mm, while the rear half (G4+G5+G6) has a combined focal length of +41.9 mm. The rear half is much stronger than the front — this asymmetry is characteristic of modified Gauss designs, where the rear group does much of the heavy lifting in bringing the widely separated marginal rays to focus. The system as a whole has an EFL of 55.0 mm, so the front and rear halves must be understood as cooperative, not independent, imaging systems.

The classical Gauss form can be described as positive–negative | stop | negative–positive, where the vertical bar represents the aperture stop. This design follows that pattern: (G1+G2) positive, G3 negative | stop | G4 negative, (G5+G6) positive. The separation of the front positive power into two groups (G1 and G2) rather than a single thick element, and the separation of the rear positive power similarly (G5 and G6), provides additional degrees of freedom for aberration control.

---

## 7. Focus Mechanism

The Olympus G.Zuiko Auto-S 55mm f/1.2 uses **unit focusing** — the entire optical assembly moves forward as a rigid body on a straight helicoid when focusing from infinity to the minimum distance of 0.45 m. There is no internal focusing or floating element mechanism.

In unit focusing, only the back focal distance changes as the lens translates. At 0.45 m from the film plane, the conjugate-equation solution gives a BFD of approximately 46.6 mm, corresponding to a lens extension of about 8.6 mm. This is consistent with the physical dimensions of the lens barrel, which has a total length of approximately 47–48 mm and would accommodate this extension range within the helicoid travel.

Unit focusing was the standard approach for normal-focal-length lenses of this era. While it introduces some degradation of off-axis performance at close focus distances (because the aberration balance is optimized for infinity), the simplicity and mechanical robustness of the straight helicoid design were valued in the professional OM system. Modern fast primes have largely moved to internal or floating-element focus to maintain correction across the focus range, but for a 1972 design, unit focus was the practical and sensible choice.

---

## 8. Aberration Characteristics

The patent provides aberration curves for the nominal design (Figures 2–4). These show:

**Spherical aberration (Figure 2):** The d-line and g-line curves extend from the axis to the full aperture, showing well-corrected longitudinal spherical aberration. The separation between the d and g curves at higher aperture zones reveals spherochromatism — the variation of spherical aberration with wavelength — which is expected in an all-spherical f/1.2 design that relies on conventional glass types without anomalous partial dispersion.

**Astigmatism (Figure 3):** The sagittal (S) and meridional (M) field curves are plotted to the maximum half-field of 21.5°. Both curves stay within ±0.01 units (±0.55 mm when scaled), with the meridional surface showing slightly more inward curvature. The S–M separation (astigmatism) is modest, indicating reasonable correction for an f/1.2 design.

**Distortion (Figure 4):** Distortion is well-controlled, staying within ±2% over the full field. This is typical of near-symmetric Gauss designs, which inherently have low distortion due to the pupil symmetry about the stop.

The all-spherical construction means that at f/1.2, the wide-open performance is limited by residual higher-order spherical aberration and sphero-chromatism, compounded by the marginal vignetting at L3's rear surface (see Section 5, Group III). Users consistently report a characteristic soft, "glowing" rendering wide open that sharpens considerably by f/2.0–2.8. This is inherent to the optical design rather than a manufacturing defect.

---

## 9. Semi-Diameter Estimation and Vignetting

Semi-diameters were estimated by combined marginal and chief ray trace (off-axis field fraction = 0.60) with approximately 5–8% mechanical clearance, then constrained by three binding physical limits:

**Filter thread constraint (front group):** The 55 mm filter thread limits the front element semi-diameter to approximately 23 mm. The entrance pupil semi-diameter (22.9 mm at f/1.2) fits within this limit with minimal mechanical clearance.

**Edge thickness constraint (L1 and L2):** L1 achieves a positive edge thickness of approximately 0.59 mm at SD = 23.0 mm. L2's steeper curvatures (R₃ = 25.86 mm) force a more aggressive SD cap of approximately 19.5 mm to maintain ET ≥ 0.5 mm. At the raw marginal ray height of 21.3 mm, L2's edge thickness would go negative — confirming that the element's physical diameter is smaller than the unvignetted beam.

**Sphere constraint at S6 (L3 rear):** As discussed in Section 5, the short radius R₆ = 16.264 mm limits the rear surface of L3 to SD ≤ 14.6 mm. The marginal ray at this surface is approximately 16.5 mm, exceeding the physical limit by roughly 13%. This is the most significant source of internal vignetting in the design.

These constraints are consistent with a lens that delivers its nominal f/1.2 specification at the entrance pupil while accepting deliberate marginal vignetting internally. The f/1.2 marking is standard practice — it reflects the geometric aperture ratio at the entrance pupil, not the effective transmission ratio accounting for internal losses.

---

## 10. Historical and Design Context

The Zuiko Auto-S 55mm f/1.2 appeared during a brief but intense period of competition among Japanese camera manufacturers to produce the fastest possible standard lenses. By the early 1970s, Canon (FD 55mm f/1.2 AL, 1971), Nikon (NIKKOR-S Auto 55mm f/1.2, 1965), and Minolta (MC Rokkor 58mm f/1.2, 1968) were all offering ultra-fast f/1.2 normal lenses for their respective SLR systems.

Nakagawa's design is notable for its economy: seven elements and six groups is a relatively modest element count for f/1.2. The Canon FD 55mm f/1.2 AL used eight elements in six groups and incorporated the world's first hand-ground aspherical element for an SLR lens; the standard Canon FD 55mm f/1.2 S.S.C. (non-aspherical) used seven elements in five groups. The later Canon New FD 50mm f/1.2L (1980) also used eight elements in six groups with a floating-element focus design. The Olympus patent explicitly emphasizes compactness and light throughput as design goals, arguing that the innovative cemented doublet construction allows the lens to be shorter than comparable designs while maintaining adequate performance.

The choice to remain all-spherical at f/1.2 was partly dictated by manufacturing capability, but it was also a deliberate design decision reflected in the patent's emphasis on glass selection and the cemented surface geometry as the primary tools for aberration control. This approach places a premium on glass quality and fabrication precision — the high-index lanthanum glasses used throughout the design require careful processing to achieve their nominal refractive index values, and the strongly curved surfaces (particularly R₆ = 16.26 mm and R₇ = −17.97 mm) demand tight centering tolerances.

---

## 11. Summary of Key Findings

1. **No aspherical surfaces.** The design is entirely spherical. Aberration correction is achieved through glass selection, surface curvature optimization, and the patented cemented doublet construction.

2. **Lanthanum-dominated glass palette.** Five of seven elements use lanthanum-type glasses (LaSF and LaK families), providing the high refractive indices (1.713–1.806) needed to manage spherical aberration at f/1.2 without resorting to extreme curvatures.

3. **The cemented fourth group is the key innovation.** The patent's principal claim concerns the strongly concave cemented surface of the L4+L5 doublet (|r₈| = 1.778f < 3f, r₈ < 0), which enables a compact and light-efficient design. The combined group focal length of −116.3 mm provides mild negative power for chromatic correction.

4. **Unit focusing via straight helicoid.** All seven elements move as a rigid body. No floating or internal focus elements. Close focus at 0.45 m requires approximately 8.6 mm extension.

5. **Sufficient back focus for SLR use.** The BFD of 37.95 mm places the rear element approximately 8 mm behind the mount flange, protruding into the mirror box — standard practice for fast normal SLR lenses.

6. **Compact for its speed.** The total track of 90.1 mm (1.64× the focal length) is efficient for an f/1.2 modified Gauss design, validating the patent's claim that the cemented doublet construction reduces overall length.

7. **Designed-in marginal vignetting at f/1.2.** The rear surface of L3 (R₆ = 16.26 mm) imposes a sphere-limited clear aperture of approximately 14.6 mm, while the f/1.2 marginal ray reaches 16.5 mm at this surface. This intentional clipping contributes to the lens's characteristic soft wide-open rendering and sharpening on stopping down.

8. **Petzval sum and field curvature.** The normalized Petzval sum is +0.151, yielding a Petzval radius of −364 mm. This moderate backward field curvature is partially compensated by residual astigmatism, a standard compromise in fast Gauss-type designs.

---

*Analysis prepared from US Patent 3,743,387 with independent paraxial ray trace verification. All focal lengths, Petzval sum, and power distributions computed via ABCD matrix method. Glass identifications are family-level matches against modern OHARA, SCHOTT, and HOYA catalogs; production-era melt designations may differ.*
