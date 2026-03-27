# Optical Analysis: Canon RF 24-70mm f/2.8L IS USM

## Patent Identification and Production Correlation

**Patent:** US 2019/0278068 A1 — *Zoom Lens and Image Pickup Apparatus*
**Inventor:** Takahiro Hatada (Utsunomiya-shi, JP)
**Applicant:** Canon Kabushiki Kaisha
**Filed:** March 4, 2019 (priority: JP 2018-042214, March 8, 2018)
**Published:** September 12, 2019

**Numerical Example analyzed:** Example 5 (§0100, FIG. 9)

### Identification as the Production Design

Example 5 from this patent is identified as the production optical design for the **Canon RF 24-70mm f/2.8L IS USM** (product code 3680C002, announced August 2019) based on the following convergent criteria:

1. **Element and group count.** The patent prescription yields 21 glass elements arranged in 15 air-separated groups. Canon's published specification for the RF 24-70mm f/2.8L IS USM states "21 elements in 15 groups" — an exact match.

2. **Special element count.** The prescription contains exactly three elements made from ultra-low-dispersion glass (nd = 1.49700, νd = 81.5, matching OHARA S-FPL51 or Canon's proprietary UD equivalent) and exactly three glass-moulded aspherical elements. Canon specifies "3 aspherical lenses, 3 UD lenses."

3. **Focal length range and aperture.** Example 5 gives focal lengths of 24.72 / 44.86 / 67.89 mm at F/2.91, consistent with a marketed 24–70mm f/2.8 zoom. The F/2.91 design value is typical for a lens marketed at f/2.8 (manufacturers round down to the next standard f-number).

4. **Image circle.** The image height of 21.64 mm produces an image circle diameter of 43.28 mm, appropriate for a full-frame (36 × 24 mm) sensor with a diagonal of 43.27 mm.

5. **Optical image stabilization.** Example 5 specifies the fourth lens unit (L4) as an IS group that moves perpendicular to the optical axis for image blur correction (§0087). The production lens is Canon's first 24-70mm f/2.8 to incorporate OIS.

6. **Focus mechanism.** Example 5 specifies the sixth lens unit (L6) as the focus group, moving toward the image side for close focus (§0087). The single lightweight negative meniscus in L6 is consistent with the Nano USM drive system Canon specifies for fast, silent autofocus.

7. **Seven-unit architecture.** The L1(+) L2(−) L3(+) L4(−) L5(+) L6(−) L7(+) configuration matches claims 19 and 20 of the patent, which describe a rear lens group consisting of L3(+), L4(−), L5(+), L6(−), and L7(+).

8. **Patent timing.** The Japanese priority date (March 2018) precedes the lens announcement by approximately 17 months — a typical lead time for Canon's production optical designs.

No other example in this patent matches all of these criteria simultaneously.

---

## Lens Architecture Overview

The zoom lens consists of seven lens units (L1 through L7) containing 21 glass elements arranged in 15 air-separated groups. All seven units move toward the object side during zooming from wide to telephoto, with the spacing between adjacent units changing to achieve the zoom effect.

| Unit | Power | Elements | Groups | Focal Length (mm) | Function |
|------|-------|----------|--------|-------------------|----------|
| L1   | +     | 3        | 2      | +113.48           | Front positive group (G1n, G2p, G3p) |
| L2   | −     | 6        | 4      | −18.58            | Variator (zoom diverging group) |
| L3   | +     | 3        | 2      | +35.84            | Aperture stop + relay positive group |
| L4   | −     | 2        | 1      | −69.07            | Image stabilization (IS) group |
| L5   | +     | 4        | 3      | +28.29            | Main converging group (Gfp) |
| L6   | −     | 1        | 1      | −49.77            | Focus group (Nano USM driven) |
| L7   | +     | 2        | 2      | +785.94           | Rear field-flattening group (Grp) |

The overall layout is a positive-lead zoom with negative variator — the classic high-performance standard zoom architecture. The front group (L1) converges incoming light and moves forward during zooming to increase the L1–L2 separation, while L2 provides the primary magnification change. The rear groups (L3–L7) relay the image to the sensor plane while providing aberration correction, image stabilization, and autofocus.

### Zoom Mechanism

All seven units translate along the optical axis during zooming. The variable air gaps at the wide-angle, intermediate, and telephoto positions are:

| Gap (after surface) | Wide (24.7 mm) | Mid (44.9 mm) | Tele (67.9 mm) | Change |
|---------------------|----------------|---------------|----------------|--------|
| d5 (L1→L2)          | 0.80           | 17.98         | 29.93          | +29.13 |
| d15 (L2→L3)         | 16.15          | 7.07          | 2.40           | −13.75 |
| d21 (L3→L4)         | 2.26           | 2.23          | 2.54           | +0.28  |
| d24 (L4→L5)         | 11.08          | 4.97          | 2.87           | −8.21  |
| d31 (L5→L6)         | 2.16           | 1.42          | 1.33           | −0.83  |
| d33 (L6→L7)         | 12.96          | 13.70         | 13.79          | +0.83  |
| BF (L7→IP)          | 14.37          | 26.78         | 35.69          | +21.32 |

The dominant motions are the opening of the L1–L2 gap (+29 mm) and the closing of the L2–L3 gap (−14 mm) — these produce the primary zoom effect. The L3–L4 gap varies by only 0.28 mm from wide to tele (and is non-monotonic, dipping to 2.23 mm at the intermediate position before rising to 2.54 mm at telephoto), meaning L3 and L4 move essentially as a coupled pair. The back focus increases substantially from wide to tele (14.37 → 35.69 mm), which is a deliberate design choice: the patent explains (§0034) that the varying back focus changes the marginal ray height at the rear positive lens Grp, enabling correction of lateral chromatic aberration across the zoom range.

The total optical track (front vertex to image plane) grows from 144.1 mm at wide to 172.9 mm at telephoto — a change of 28.8 mm.

---

## Element-by-Element Analysis

### Unit 1: Front Positive Group (f = +113.48 mm)

Unit 1 establishes the fundamental positive power of the front group, converging incoming light before it reaches the variator. The unit consists of three elements: a leading negative meniscus (G1n) cemented to a positive meniscus (G2p), followed by a standalone positive meniscus (G3p).

**Element 1 — G1n: Negative Meniscus (S1–S2)**
- Glass: OHARA S-NPH1 (nd = 1.80810 catalog; patent lists 1.80809 — see Data File Notes)
- Radii: R₁ = +232.357, R₂ = +90.381 (both convex toward object)
- Center thickness: 2.10 mm
- Thin-lens focal length: −183.0 mm
- Clear aperture: ≈ 68.7 mm (the largest element in the lens)

S-NPH1 is a high-index, very high-dispersion glass (an "extra-dense flint" in classical terminology). Its low Abbe number (νd = 22.76) is central to the patent's design strategy: the patent's conditional expression (1) requires 15.00 < νd1n < 23.40, and Hatada explains (§0036) that this low Abbe number provides sufficient dispersion contrast with the positive lenses in L1 to enable achromatic correction without forcing extreme curvatures — keeping the elements thin and the total lens length short at the wide-angle end. The negative meniscus shape, with both surfaces convex toward the object but the rear surface more steeply curved (R₂ = +90.381 vs. R₁ = +232.357), forms a strongly concave image-facing profile that bends the chief ray inward, reducing the required diameter of downstream elements.

**Element 2 — G2p: Positive Meniscus (S2–S3)**
- Glass: OHARA S-LAH66 (nd = 1.77250, νd = 49.62)
- Radii: R₁ = +90.381 (cemented junction), R₂ = +323.713
- Center thickness: 5.78 mm
- Thin-lens focal length: +162.3 mm

Cemented directly to G1n, this lanthanum-crown positive meniscus forms an achromatic pair with the negative element. The Abbe number difference (Δνd ≈ 27 between G2p and G1n) provides the dispersion contrast needed to control axial chromatic aberration at the telephoto end. The cemented interface eliminates one air-glass reflection, improving transmittance through the front group.

**Element 3 — G3p: Positive Meniscus (S4–S5)**
- Glass: OHARA S-LAL14 (nd = 1.72916, νd = 54.68)
- Radii: R₁ = +59.139, R₂ = +166.984
- Center thickness: 7.05 mm
- Thin-lens focal length: +125.6 mm

The second positive lens in L1, separated from the G1n–G2p cemented pair by a thin 0.15 mm air gap. This element carries the bulk of L1's converging power. The meniscus shape directs light efficiently into L2 while contributing positive power without excessive curvature. Its lanthanum-crown glass (νd = 54.7) provides moderate dispersion, keeping the positive lens materials at a sufficiently high Abbe number relative to G1n as the patent requires.

The average refractive index of the two positive lenses in L1 is nd1p = (1.77250 + 1.72916) / 2 = 1.75083, satisfying conditional expression (4): 1.60 < nd1p < 2.00. This high average index allows L1 to achieve its converging power with moderate curvatures, keeping the element diameters manageable.

### Unit 2: Variator / Zoom Diverging Group (f = −18.58 mm)

Unit 2 provides the primary magnification change during zooming. Its strong negative power (f = −18.58 mm) diverges the converged beam from L1, and the varying L1–L2 separation controls the effective focal length. The unit contains six elements in four air-separated groups — an unusually complex variator for a standard zoom, reflecting the demands of the f/2.8 aperture and the wide 24mm field angle.

**Element 4 — Negative Meniscus (S6–S7)**
- Glass: OHARA S-LAH58 (nd = 1.88300, νd = 40.76)
- Radii: R₁ = +67.802, R₂ = +18.663 (both convex toward object; steep rear surface)
- Center thickness: 1.40 mm
- Thin-lens focal length: −29.2 mm

The leading element of L2, carrying strong negative power. Both surfaces are convex toward the object (R₁ = +67.802, R₂ = +18.663), but the much steeper rear curvature creates the deeply concave image-facing profile responsible for the powerful divergence. The high-index S-LAH58 glass allows this strong curvature without excessive chromatic contribution. This element is followed by a large 8.67 mm air gap — the longest in L2 — which provides space for the diverging ray bundle to separate before entering the achromatic doublet.

**Elements 5–6 — Cemented Doublet (S8–S10)**
- Element 5: OHARA S-FPL51 (nd = 1.49700, νd = 81.54) — **UD glass, 1st of 3**
  - Biconcave, fl = −36.3 mm
- Element 6: OHARA S-NPH53 (nd = 1.85478, νd = 24.80)
  - Positive meniscus, fl = +45.5 mm

This is the first of the three UD-glass doublets in the design. The S-FPL51 element provides anomalous partial dispersion correction: its position on the glass map (below the "normal line") means it under-corrects secondary spectrum relative to normal glasses, which can be exploited in combination with the high-dispersion S-NPH53 to achieve superior chromatic correction across the zoom range. The doublet as a whole contributes net negative power to L2 while controlling lateral color.

**Element 7 — Biconcave Negative (S11–S12)**
- Glass: OHARA S-LAL14 (nd = 1.72916, νd = 54.68)
- Radii: R₁ = −48.039, R₂ = +425.782
- Center thickness: 1.00 mm
- Thin-lens focal length: −59.2 mm

A weakly curved biconcave element that adds negative power while the nearly flat rear surface (R₂ = 425.8 mm) minimizes higher-order aberrations. The same S-LAL14 glass used in Element 3 (G3p), reducing the number of distinct glass types that must be stocked in production.

**Elements 8–9 — Cemented Doublet (S13–S15)**
- Element 8: OHARA S-TIM25 (nd = 1.59270, νd = 35.29)
  - Biconvex, fl = +32.8 mm
- Element 9: OHARA S-LAH55V (nd = 1.83481, νd = 42.72)
  - Negative meniscus, fl = −44.5 mm

The rear doublet of L2, providing additional chromatic correction and field flattening. The positive S-TIM25 element paired with the negative S-LAH55V controls the Petzval sum contribution of L2, preventing excessive field curvature. The net power of this doublet is weakly negative, contributing to L2's overall diverging character without adding excessive chromatic aberration.

### Unit 3: Aperture Stop and Relay Group (f = +35.84 mm)

The aperture stop (surface 16) sits at the front of L3, positioned at the point where the chief ray crosses the optical axis. This placement minimizes the diameter of L3's elements while ensuring symmetric aberration correction. L3 provides strong positive power to relay the image from the variator to the rear groups.

**Element 10 — Biconvex Positive (S17–S18)**
- Glass: OHARA S-LAH59 (nd = 1.76385, νd = 48.51)
- Radii: R₁ = +78.059, R₂ = −59.447
- Center thickness: 4.31 mm
- Thin-lens focal length: +44.2 mm

Immediately behind the stop, this biconvex element provides strong converging power. The high-index S-LAH59 glass allows moderate curvatures while maintaining a compact element. Its position directly after the stop means axial rays are near-centered on this element, making it effective for controlling spherical aberration.

**Elements 11–12 — Cemented Doublet (S19–S21)**
- Element 11: OHARA S-FPL51 (nd = 1.49700, νd = 81.54) — **UD glass, 2nd of 3**
  - Biconvex, fl = +36.9 mm
- Element 12: OHARA S-NPH2 (nd = 2.00069, νd = 25.46)
  - Negative meniscus, fl = −44.2 mm

This is arguably the most optically significant doublet in the lens. The S-FPL51 provides the same anomalous partial dispersion benefits as in L2, but here it is paired with S-NPH2 — an extraordinary glass with a refractive index exceeding 2.0. S-NPH2 is one of the highest-index optical glasses commercially available, and its use here serves two purposes. First, the extreme index difference between the two elements (Δnd = 0.504) produces strong chromatic correction at the cemented interface despite moderate curvatures. Second, the high index of S-NPH2 contributes a strong negative Petzval contribution (since the Petzval sum contribution of a surface is proportional to φ/n), helping to flatten the field — a critical requirement for full-frame digital sensors. The patent text (§0037) explicitly discusses how the high-index rear-group positive lens corrects both lateral chromatic aberration and Petzval curvature.

### Unit 4: Image Stabilization Group (f = −69.07 mm)

L4 is the optical image stabilization (OIS) unit. During image blur correction, the entire unit shifts perpendicular to the optical axis, displacing the image to compensate for camera shake. Canon rates the IS system at 5 stops of correction.

**Elements 13–14 — Cemented Doublet (S22*–S24)**
- Element 13: OHARA S-BAL42 (nd = 1.58313, νd = 59.38) — **Aspherical, 1st of 3**
  - Biconcave, fl = −45.5 mm; surface S22 is aspherical
- Element 14: OHARA S-TIH14 (nd = 1.76182, νd = 26.52)
  - Positive meniscus, fl = +131.9 mm

The IS group is a compact cemented doublet with one aspherical surface (S22) on the front face of Element 13. S-BAL42 is a barium-crown glass well suited to precision glass molding (Tg ≈ 506°C), which is how Canon produces this element. The aspherical surface on S22 has relatively mild correction — the aspherical departure at the semi-diameter is only 0.091 mm — primarily correcting residual spherical aberration and coma that would otherwise degrade off-axis performance during IS operation.

The net power of L4 is weakly negative (f = −69.07 mm), which is important: a low-power IS group minimizes the aberration changes that occur when the group is decentered during stabilization. The L3–L4 air gap varies by only 0.28 mm from wide to tele, meaning L4 tracks L3's motion closely — this coupling ensures consistent IS performance at all focal lengths.

### Unit 5: Main Converging Group (f = +28.29 mm)

L5 is the workhorse of the rear optical system, providing the strongest positive power of any unit after L1. It contains four elements in three air-separated groups, including the positive lens Gfp identified in the patent's conditional expressions.

**Element 15 — Gfp: Biconvex Positive (S25–S26)**
- Glass: OHARA S-FPL51 (nd = 1.49700, νd = 81.54) — **UD glass, 3rd of 3**
- Radii: R₁ = +26.393, R₂ = −69.360
- Center thickness: 8.28 mm
- Thin-lens focal length: +38.5 mm

This is the positive lens Gfp referenced in conditional expressions (13) and (14). Its S-FPL51 glass (νd = 81.5) satisfies expression (13): 73.00 < νfp < 100.00. The patent's Table 1 gives ffp/fw = 1.60 for this example, satisfying expression (14): 1.40 < ffp/fw < 2.00. (The thin-lens approximation yields 1.56; the difference reflects thick-lens effects in the patent's computation.)

Gfp is the "chromatic anchor" of the rear group. Positioned adjacent to and on the image side of the IS subunit (§0088), its high-Abbe-number glass corrects axial chromatic aberration at the telephoto end while simultaneously correcting lateral chromatic aberration at the wide-angle end (§0053). The thick biconvex shape (8.28 mm center thickness with a clear aperture of ~27.4 mm) indicates this element handles substantial beam convergence.

**Elements 16–17 — Cemented Doublet (S27–S29)**
- Element 16: OHARA S-NBH55 (nd = 1.73800, νd = 32.26)
  - Negative meniscus, fl = −115.3 mm
- Element 17: OHARA S-FPM3 (nd = 1.53775, νd = 74.70)
  - Biconvex, fl = +36.7 mm

This doublet provides additional chromatic correction and contributes net positive power. The S-NBH55 negative element has moderately high dispersion, while the S-FPM3 positive element is a phosphate-crown glass with low dispersion (νd = 74.7). The combination fine-tunes the secondary spectrum correction established by the UD doublets elsewhere in the system. Note that the junction surface (R = 26.899) is strongly curved, indicating significant chromatic work at this interface.

**Element 18 — Double-Aspherical Negative (S30*–S31*)**
- Glass: OHARA S-LAH65V (nd = 1.85400, νd = 40.38) — **Aspherical, 2nd of 3**
- Radii: R₁ = −602.944, R₂ = +131.941 (both aspherical)
- Center thickness: 1.70 mm
- Thin-lens focal length: −126.8 mm

This is the most aggressively aspherical element in the lens. Surface S30 has an aspherical departure of −0.752 mm at the semi-diameter — nearly six times the spherical sag of the base curve (−0.133 mm). This means the aspherical correction completely dominates the surface shape at the margin: the element functions more like a Schmidt-plate-style corrector than a conventional lens at the rim. Surface S31 has a more moderate departure of −0.030 mm.

S-LAH65V is a high-index lanthanum glass that Canon has qualified for precision glass molding. The double-asphere configuration allows this single element to correct multiple higher-order aberrations simultaneously — primarily field-dependent coma and astigmatism that arise from the strong convergence in L5. Its weak net negative power (f = −126.8 mm) means it acts more as a corrector plate than a power element.

### Unit 6: Focus Group (f = −49.77 mm)

L6 is the autofocus group, driven by Canon's Nano USM motor. Its motion toward the image side during close focusing is indicated by the broken-line arrow in FIG. 9 of the patent.

**Element 19 — Negative Meniscus (S32–S33)**
- Glass: OHARA S-LAH51 (nd = 1.80400, νd = 46.57)
- Radii: R₁ = +60.209, R₂ = +23.878 (concave toward image)
- Center thickness: 0.90 mm
- Thin-lens focal length: −49.2 mm

This is a single thin negative meniscus — the lightest possible focusing element. At only 0.90 mm center thickness with a clear aperture of ~25.5 mm, this element has minimal mass, enabling the Nano USM motor to achieve the rapid, silent focus transitions Canon specifies. The high-index S-LAH51 glass provides the required negative power with moderate curvatures, keeping aberration sensitivity during focus travel manageable.

The variable gaps on either side of L6 (d31 and d33) change only slightly across the zoom range (Δd31 = −0.83 mm, Δd33 = +0.83 mm), meaning the focus group's position relative to L5 and L7 is nearly constant regardless of zoom setting. This decoupling of zoom and focus motion simplifies the cam mechanism and ensures consistent AF performance across the zoom range.

The choice of a single negative meniscus as the focusing element is characteristic of modern inner-focus zoom designs. The weak power means focus travel is relatively long (the gap changes imply several millimeters of travel for close focus), but the low mass more than compensates by enabling high acceleration. The Nano USM system combines a ring-type USM for speed with an STM mechanism for smoothness, which is well-matched to this lightweight element.

### Unit 7: Rear Field-Flattening Group (f = +785.94 mm)

L7 is positioned closest to the image plane and contains the critical positive lens Grp described extensively in the patent's conditional expressions. The unit's extremely long focal length (+785.9 mm) means it contributes negligible net optical power — its purpose is entirely corrective.

**Element 20 — Double-Aspherical Negative Meniscus (S34*–S35*)**
- Glass: OHARA S-BAL42 (nd = 1.58313, νd = 59.38) — **Aspherical, 3rd of 3**
- Radii: R₁ = −52.714, R₂ = −3211.285 (both aspherical)
- Center thickness: 1.70 mm
- Thin-lens focal length: −91.9 mm

The third and final glass-moulded aspherical element. Surface S34 has the largest aspherical departure in the entire lens: −1.025 mm at the semi-diameter, superimposed on a spherical sag of −2.157 mm. This means the asphere adds nearly 50% additional sag beyond the base sphere — an aggressive correction targeting field curvature and distortion at the wide-angle end. Surface S35 has a departure of −1.499 mm on an extremely weak base curve (R = −3211 mm), making it essentially a pure aspherical plate at the margin.

The diverging beam from L6 passes through this element at relatively large diameters (clear aperture up to ~33 mm), which is why such strong aspherical correction is needed here. The element's position near the image plane means it sees a strongly field-dependent ray geometry, making it effective for correcting field-varying aberrations like distortion and lateral color.

**Element 21 — Grp: Biconvex Positive (S36–S37)**
- Glass: HOYA FDS30 or equivalent (nd = 2.00100, νd = 29.13)
- Radii: R₁ = +317.277, R₂ = −114.700
- Center thickness: 3.23 mm
- Thin-lens focal length: +84.2 mm

This is the positive lens Grp — the element whose properties are constrained by the patent's core conditional expressions (1)–(3). Its refractive index of 2.00100 satisfies expression (2): 1.70 < ndrp < 2.20. This places it among the very highest-index optical glasses used in any production photographic lens.

The nd = 2.00100 value does not match any current OHARA catalog glass exactly (the closest is S-NPH2 at nd = 2.00069, but with νd = 25.46 rather than 29.1). It matches HOYA FDS30 (nd = 2.00100, νd = 29.13) to within rounding precision, and also matches CDGM H-ZLaF92 (nd = 2.00100, νd = 29.13). Canon may source this glass from HOYA, CDGM, or produce it under a proprietary designation.

The ultra-high refractive index serves the same dual purpose as S-NPH2 in Element 12: chromatic correction and Petzval flattening. The patent (§0037) explains that the high-index Grp, positioned in the image-side lens unit of the rear group, corrects both wide-angle and telephoto lateral chromatic aberration. The physical mechanism is that the varying back focus across the zoom range changes the marginal ray height at Grp: at the wide angle end (short BF), the marginal ray is low, reducing Grp's chromatic contribution; at the telephoto end (long BF), the marginal ray is higher, and Grp's dispersion generates the lateral color correction needed to cancel the first unit's contribution.

The shape factor (R1 + R2)/(R1 − R2) = (317.277 + (−114.700))/(317.277 − (−114.700)) = 202.577/431.977 = 0.47, satisfying expression (12): 0.00 < shape < 4.00. This positive shape factor indicates a biconvex element with the stronger curvature on the image side — a configuration that minimizes coma contribution from this field-flattening element.

---

## Aspherical Surface Analysis

The lens employs five aspherical surfaces across three glass-moulded elements. All three aspherical elements use glasses qualified for precision glass molding (PGM), which Canon refers to as "GMo" (Glass Moulded) aspherical lenses.

The aspherical sag equation used in the patent is:

Z(h) = (h²/R) / [1 + √(1 − (1+K)·(h/R)²)] + A₄·h⁴ + A₆·h⁶ + A₈·h⁸ + A₁₀·h¹⁰ + A₁₂·h¹²

All five surfaces have K = 0 (spherical base curve with polynomial departure only).

### Surface 22 (Element 13, L4 IS group front)

| Coefficient | Value |
|-------------|-------|
| K | 0.0 |
| A₄ | +3.01280 × 10⁻⁶ |
| A₆ | −9.03767 × 10⁻¹⁰ |
| A₈ | +5.61555 × 10⁻¹¹ |
| A₁₀ | −4.27609 × 10⁻¹³ |
| A₁₂ | +9.23668 × 10⁻¹⁶ |

- Base radius: R = −63.149 mm (concave toward object)
- Semi-diameter: ~13.0 mm
- Spherical sag at edge: −1.359 mm
- Aspherical departure at edge: +0.091 mm (6.7% of spherical sag)

This is the mildest asphere in the lens. The positive A₄ coefficient indicates the surface becomes less steeply curved at the margin relative to the sphere — a "flattening" correction typical of coma compensation. Because this is the IS element, maintaining mild aspherical departure is important: strong aspheres are more sensitive to decentration, which would degrade image quality during IS operation.

### Surfaces 30–31 (Element 18, L5 rear corrector)

**Surface 30:**

| Coefficient | Value |
|-------------|-------|
| K | 0.0 |
| A₄ | −5.55314 × 10⁻⁵ |
| A₆ | +2.14060 × 10⁻⁷ |
| A₈ | −4.57909 × 10⁻¹¹ |
| A₁₀ | −2.74784 × 10⁻¹² |
| A₁₂ | +6.52571 × 10⁻¹⁵ |

- Base radius: R = −602.944 mm (very weakly concave)
- Semi-diameter: ~12.6 mm
- Spherical sag at edge: −0.133 mm
- Aspherical departure at edge: −0.752 mm (567% of spherical sag!)

**Surface 31:**

| Coefficient | Value |
|-------------|-------|
| K | 0.0 |
| A₄ | −3.45440 × 10⁻⁵ |
| A₆ | +2.65378 × 10⁻⁷ |
| A₈ | −1.27555 × 10⁻¹⁰ |
| A₁₀ | −2.40980 × 10⁻¹² |
| A₁₂ | +7.25838 × 10⁻¹⁵ |

- Base radius: R = +131.941 mm (convex toward object)
- Semi-diameter: ~12.4 mm
- Spherical sag at edge: +0.589 mm
- Aspherical departure at edge: −0.030 mm (5.1% of spherical sag)

Element 18 shows a dramatic asymmetry: the front surface (S30) has massive aspherical departure that utterly dominates its nearly-flat base curve, while the rear surface (S31) has mild correction. The large negative A₄ on S30 (−5.55 × 10⁻⁵) is the single strongest aspherical coefficient in the entire lens, producing a surface that curves increasingly inward toward the image at the margin. This corrects the field-dependent coma and astigmatism accumulated through L5's strong positive power.

### Surfaces 34–35 (Element 20, L7 front corrector)

**Surface 34:**

| Coefficient | Value |
|-------------|-------|
| K | 0.0 |
| A₄ | −3.28022 × 10⁻⁵ |
| A₆ | +1.26827 × 10⁻⁷ |
| A₈ | −2.01507 × 10⁻¹⁰ |
| A₁₀ | −1.63600 × 10⁻¹² |
| A₁₂ | +4.86504 × 10⁻¹⁵ |

- Base radius: R = −52.714 mm
- Semi-diameter: ~14.9 mm
- Spherical sag at edge: −2.157 mm
- Aspherical departure at edge: −1.025 mm (47.5% of spherical sag)

**Surface 35:**

| Coefficient | Value |
|-------------|-------|
| K | 0.0 |
| A₄ | −3.30256 × 10⁻⁵ |
| A₆ | +1.44829 × 10⁻⁷ |
| A₈ | −5.66682 × 10⁻¹⁰ |
| A₁₀ | +8.17897 × 10⁻¹³ |
| A₁₂ | −2.19929 × 10⁻¹⁶ |

- Base radius: R = −3211.285 mm (essentially flat)
- Semi-diameter: ~16.5 mm
- Spherical sag at edge: −0.042 mm
- Aspherical departure at edge: −1.499 mm (3543% of spherical sag)

Element 20 carries the second-strongest aspherical departures in the lens. Surface 35 is particularly remarkable: its base curve is essentially flat (R = −3211 mm), meaning the entire surface shape is defined by the polynomial asphere. At the edge, the departure of −1.5 mm produces a surface that curves substantially toward the image side — essentially a concave aspheric plate. This extreme correction targets wide-angle distortion and field curvature, which are most severe near the image plane where off-axis ray heights are largest.

---

## Glass Selection Strategy

The lens uses 17 distinct glass types across 21 elements (with three types reused: S-LAL14 in Elements 3 and 7, S-FPL51 in Elements 5, 11, and 15, and S-BAL42 in Elements 13 and 20):

| Glass | Catalog | nd | νd | Elements | Count | Classification |
|-------|---------|----|----|----------|-------|----------------|
| S-NPH1 | OHARA | 1.80810 | 22.76 | 1 | 1 | Extra-dense flint |
| S-LAH66 | OHARA | 1.77250 | 49.62 | 2 | 1 | Lanthanum crown |
| S-LAL14 | OHARA | 1.72916 | 54.68 | 3, 7 | 2 | Lanthanum crown |
| S-LAH58 | OHARA | 1.88300 | 40.76 | 4 | 1 | Dense lanthanum crown |
| S-FPL51 | OHARA | 1.49700 | 81.54 | 5, 11, 15 | 3 | UD fluorophosphate crown |
| S-NPH53 | OHARA | 1.85478 | 24.80 | 6 | 1 | Extra-dense flint |
| S-TIM25 | OHARA | 1.59270 | 35.29 | 8 | 1 | Titanium flint |
| S-LAH55V | OHARA | 1.83481 | 42.72 | 9 | 1 | Dense lanthanum crown |
| S-LAH59 | OHARA | 1.76385 | 48.51 | 10 | 1 | Lanthanum crown |
| S-NPH2 | OHARA | 2.00069 | 25.46 | 12 | 1 | Ultra-high-index dense flint |
| S-BAL42 | OHARA | 1.58313 | 59.38 | 13, 20 | 2 | Barium crown (PGM) |
| S-TIH14 | OHARA | 1.76182 | 26.52 | 14 | 1 | Titanium dense flint |
| S-NBH55 | OHARA | 1.73800 | 32.26 | 16 | 1 | Niobium dense flint |
| S-FPM3 | OHARA | 1.53775 | 74.70 | 17 | 1 | Fluorophosphate crown |
| S-LAH65V | OHARA | 1.85400 | 40.38 | 18 | 1 | Dense lanthanum crown (PGM) |
| S-LAH51 | OHARA | 1.80400 | 46.57 | 19 | 1 | Dense lanthanum crown |
| FDS30 | HOYA | 2.00100 | 29.13 | 21 | 1 | Ultra-high-index dense flint |

Several observations emerge from this glass map:

**UD glass strategy.** All three UD elements use S-FPL51 (or Canon's equivalent), placed strategically in L2, L3, and L5. Each UD element is cemented with a high-dispersion partner to form an achromatic correction pair. The L2 doublet (Elements 5–6) corrects the variator's chromatic contribution; the L3 doublet (Elements 11–12) handles the relay group; and the L5 element (15, Gfp) provides the "chromatic anchor" for the rear group. The consistent use of a single UD glass type across all three locations simplifies procurement and quality control.

**Ultra-high-index glass.** Two elements use glass with nd ≥ 2.0: Element 12 (S-NPH2, nd = 2.00069) and Element 21 (FDS30, nd = 2.00100). These are among the densest commercially available optical glasses. Their primary roles are Petzval field flattening and lateral chromatic aberration correction. The use of two different ultra-high-index glasses (from different manufacturers, with different Abbe numbers) suggests each was chosen for its specific position on the partial dispersion diagram rather than being interchangeable.

**PGM glass selection.** The three aspherical elements use two moldable glass types: S-BAL42 (Elements 13 and 20) and S-LAH65V (Element 18). S-BAL42 is a workhorse PGM glass with moderate index and low transformation temperature (Tg ≈ 506°C), making it one of the most reliably moldable glasses available. S-LAH65V (Tg ≈ 593°C) is a higher-index moldable lanthanum glass — more difficult to mold but necessary for Element 18's aberration correction requirements. Canon's description of these as "glass moulded aspherical" elements on the Canon Camera Museum confirms the PGM manufacturing process.

**Production coatings (beyond patent scope).** The production lens incorporates Canon's Air Sphere Coating (ASC) — a proprietary anti-reflective coating technology that uses a layer containing silica nanospheres to create an ultra-low-refractive-index film. Canon specifies ASC on the RF 24-70mm f/2.8L IS USM to reduce flare and ghosting, particularly from backlit light sources. ASC is a manufacturing and thin-film engineering feature that does not appear in the optical patent, which describes only the glass prescription. Fluorine coatings on the front and rear elements are also specified for the production lens to repel dust, moisture, and fingerprints.

---

## Focus Mechanism

The focusing element is **Unit 6 (L6)**, consisting of a single negative meniscus (Element 19, S-LAH51 glass). During focusing from infinity to the closest distance, L6 moves toward the image side (§0087).

Key characteristics of the focus mechanism:

- **Element mass:** At only 0.90 mm center thickness and a moderate clear aperture, Element 19 is an exceptionally lightweight focusing element. The patent's "effective diameter" values at these surfaces (25.5 / 25.1 mm) represent beam footprints rather than physical element diameters — the actual glass blank would be somewhat smaller. The minimal mass of this thin high-index meniscus is critical for Nano USM drive performance, enabling the high-acceleration focus response Canon specifies.
- **Focus travel:** The variable gaps d31 and d33 change during focus, though the patent provides only the zoom-dependent values, not the close-focus values. The minimum focus distances of 0.21 m (wide) and 0.38 m (telephoto) are consistent with several millimeters of rearward travel by L6.
- **Zoom-focus coupling:** The d31 and d33 gaps change only slightly across the zoom range (< 1 mm total), indicating that L6's focus cam is largely independent of the zoom cam — a characteristic of well-designed inner-focus zooms.
- **Aberration stability:** A single negative meniscus has low sensitivity to defocus-induced aberrations, meaning image quality degrades gracefully from infinity to close focus. The weak power also means focus breathing is moderate — important for video applications, as Canon's marketing specifically emphasizes "reduced focus breathing."

---

## Conditional Expression Summary

All 14 conditional expressions evaluated in Table 1 of the patent are satisfied by Example 5. The computed values match the patent's Table 1 to the precision reported:

| Expression | Condition | Example 5 Value | Status |
|------------|-----------|-----------------|--------|
| (1) | 15.00 < νd1n < 23.40 | 22.76 | ✓ |
| (2) | 1.70 < ndrp < 2.20 | 2.00 | ✓ |
| (3) | 1.50 < skt/skw < 2.60 | 2.48 | ✓ |
| (4) | 1.60 < nd1p < 2.00 | 1.75 | ✓ |
| (5) | 0.40 < νd1n/νdrp < 1.00 | 0.78 | ✓ |
| (6) | 0.80 < |f2|/skw < 1.80 | 1.29 | ✓ |
| (7) | 2.30 < f1/skt < 4.70 | 3.18 | ✓ |
| (8) | 0.40 < frp/ft < 1.40 | 1.24 | ✓ |
| (9) | 3.00 < (Fnot×f1)/ft < 5.50 | 4.86 | ✓ |
| (10) | 0.50 < |f2|/fw < 1.00 | 0.75 | ✓ |
| (11) | 3.80 < Lt/skt < 7.60 | 4.84 | ✓ |
| (12) | 0.00 < (R1+R2)/(R1−R2) < 4.00 | 0.47 | ✓ |
| (13) | 73.00 < νfp < 100.00 | 81.54 | ✓ |
| (14) | 1.40 < ffp/fw < 2.00 | 1.60 | ✓ |
| (15) | 0.05 < Lrp/Lw < 0.20 | 0.10 | ✓ |

---

## Verification Notes

All numerical values in this document were independently verified by paraxial ray trace computation. The computed effective focal lengths at all three zoom positions match the patent's stated values exactly (24.72 / 44.86 / 67.89 mm). Total lens lengths match to within 0.02 mm (rounding). Element focal lengths were computed using the thin-lens approximation f = 1/[(n−1)(1/R₁ − 1/R₂)]; actual thick-lens focal lengths will differ slightly but the thin-lens values are sufficient for classifying element power and shape. Glass identifications are based on matching nd and νd values against the OHARA, HOYA, and CDGM catalogs; all matches are exact to ±0.05 in νd and ±0.00005 in nd, consistent with patent-precision rounding. The sole exception is Element 1 (G1n), where the patent lists nd = 1.80809 versus the OHARA S-NPH1 catalog value of 1.80810 — a discrepancy of 0.00001 that is below the measurement precision of standard glass metrology and has no optical significance.

One conditional expression value differs between thin-lens and patent computation: expression (14), ffp/fw, computes as 1.56 via the thin-lens approximation for Element 15 but is reported as 1.60 in the patent's Table 1. The discrepancy arises because Element 15 has substantial center thickness (8.28 mm), making thick-lens effects non-negligible. The conditional expression table in this document uses the patent's authoritative thick-lens value.

The L3–L4 air gap (d21) exhibits non-monotonic zoom behavior: it decreases from 2.26 mm (wide) to 2.23 mm (mid) before increasing to 2.54 mm (tele). The total variation range is 0.31 mm. This is handled naturally by the piecewise-linear interpolation described in the zoom mechanism design — the three patent zoom positions bracket the reversal point.

Canon's published specifications for the RF 24-70mm f/2.8L IS USM (confirmed via Canon USA, Canon Europe, and Canon Camera Museum) match the patent prescription in all externally verifiable parameters: 21 elements in 15 groups, 3 glass-moulded aspherical elements, 3 UD elements, Nano USM AF, 5-stop OIS, MFD 0.21 m (wide) / 0.38 m (tele), and 9-blade diaphragm.

---

## Data File Notes

The accompanying lens data file (`CanonRF2470f28.data.ts`) encodes the full optical prescription for use with the interactive lens renderer. Several limitations and design decisions are documented here.

**Focus data unavailability.** The patent provides variable air gap data at infinity focus only, at three zoom positions (24.72, 44.86, and 67.89 mm). Close-focus gap values for the focus group (L6) are not given in Numerical Example 5. All seven variable gaps are therefore entered as zoom-only (identical infinity/close-focus values at each zoom position). The focus slider in the renderer will have no visible effect. In the production lens, focusing from infinity to the minimum focus distance would cause gaps D31 (L5→L6), D33 (L6→L7), and D37 (BFD) to vary as L6 translates rearward. The minimum focus distances (0.21 m wide, 0.38 m telephoto) are from Canon's published specifications and cannot be derived from the available patent data.

**Refractive index precision.** The patent lists nd = 1.80809 for Element 1 (G1n) in Example 5, while the OHARA catalog value for S-NPH1 is nd = 1.80810. Other examples in the same patent (Examples 1–4) use 1.80810 for the same glass designation. The difference of 0.00001 in nd is at the limit of patent rounding precision and has no optical significance. The data file uses the patent value (1.80809) as transcribed. Similarly, prettier formatting strips trailing zeros from numeric literals (e.g., 1.49700 → 1.497), which are numerically identical IEEE 754 values.

**Semi-diameters.** All sd values are derived from the patent's "effective diameter" column (÷ 2). These represent beam footprints at infinity focus in the wide-angle configuration and are not physical element diameters. Element 4 (the leading negative meniscus of L2) has a front/rear sd ratio of 1.32, exceeding the renderer's 1.25 guidance threshold. This is physically correct — the steep meniscus shape causes significant beam divergence within the element — and is expected to produce only minor visual artifacts in the renderer.

**Non-monotonic zoom gap.** The L3→L4 air gap (D21) exhibits non-monotonic zoom behavior: 2.26 mm (wide) → 2.23 mm (mid) → 2.54 mm (tele). This is handled by the piecewise-linear interpolation in the zoom renderer; the three patent zoom positions bracket the reversal point adequately.

---

## Sources

- US 2019/0278068 A1 — Hatada, T., "Zoom Lens and Image Pickup Apparatus," Canon Kabushiki Kaisha (2019)
- Canon USA, "RF 24-70mm F2.8L IS USM — Specifications," https://www.usa.canon.com/shop/p/rf24-70mm-f2-8l-is-usm
- Canon Europe, "Specifications & Features — RF 24-70mm F2.8L IS USM," https://www.canon-europe.com/lenses/rf-24-70mm-f2-8l-usm-lens/specifications/
- Canon Camera Museum, "RF24-70mm F2.8 L IS USM," https://global.canon/en/c-museum/product/rf485.html
- OHARA Optical Glass Catalog, https://www.ohara-inc.co.jp/en/product/optical/list/
- HOYA Optical Glass Catalog (for FDS30 identification)
