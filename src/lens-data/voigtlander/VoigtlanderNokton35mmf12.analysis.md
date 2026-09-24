# Voigtländer NOKTON 35mm f/1.2 Aspherical — Optical Analysis

**Patent:** JP 2004-101880 A
**Filed:** September 10, 2002 (Heisei 14)
**Published:** April 2, 2004 (Heisei 16)
**Inventor:** Yoshihisa Yomogida (蓬田 祥寿)
**Applicant:** Cosina Co., Ltd. (株式会社コシナ), Nagano Prefecture, Japan
**Embodiment analyzed:** Example 2, Table 3 / Table 4 (Fig. 3; aberrations Fig. 4)

---

## 1. Introduction and Production Context

The Voigtländer NOKTON 35mm f/1.2 Aspherical is a landmark lens in the Leica M-mount ecosystem. At its introduction, it was the fastest 35mm lens produced for the M system. The patent names Yoshihisa Yomogida of Cosina (Nakano, Nagano Prefecture) as inventor; the lens was introduced circa 2004 and underwent four major production iterations:

**Version I (c. 2004–2010):** 10 elements in 7 groups, 490 g, MFD 0.7 m. This original production lens is covered by the patent under review. Cosina discontinued it around 2010, stating publicly that the required optical glass had become too difficult and expensive to procure. That remark is at least consistent with the prescription's reliance on high-index lanthanum glass: the nd = 1.80420 / νd = 46.5 type appears in three elements and the nd = 1.80610 / νd = 40.7 type carries all three aspherical surfaces. The patent itself does not say how the aspheres are made.

**Version II (2011–c. 2019):** 10 elements in 7 groups, 471 g, MFD 0.5 m. Version II kept the 10/7 layout; whether its prescription is identical to Version I is not documented by this patent, and any glass substitutions are unknown. The 19 g weight reduction suggests modest mechanical redesign.

**Version III (2020–2024):** 9 elements in 7 groups, 332 g, MFD 0.5 m, four aspherical surfaces. A completely new optical design — not covered by this patent — achieving 30% weight reduction by eliminating one element and adding a fourth aspherical surface.

**Version IV (2025–):** 9 elements in 7 groups, 300 g. Shares the Version III optical design with further mechanical refinement and weight savings.

The patent JP 2004-101880 A presents two numerical examples with identical specifications (f = 35.8 mm, Fno 1.24, ω = 31.8°). Both have 10 elements in 7 groups and 3 aspherical surfaces on two elements, so the production count does not decide between them. **Example 2** is analyzed here as the likely production Version I/II formula; that identification is an inference, not something the patent states.


## 2. Design Overview

The Nokton 35mm f/1.2 Aspherical is a modified double-Gauss design adapted for wide-angle use. The lens comprises 10 elements arranged in 7 groups, divided into two main groups around a central aperture stop:

**Front Group G21 (5 elements, 3 groups):** A negative meniscus singlet followed by two cemented doublets, arranged with their convex faces pointing inward toward each other. This front group has a focal length of approximately +60.0 mm and provides the overall positive convergence needed to collect the wide f/1.2 cone of light.

**Rear Group G22 (5 elements, 4 groups):** A negative meniscus singlet (aspherical), a cemented doublet, a biconvex positive singlet (double aspherical), and a biconcave negative singlet. This group has a focal length of approximately +52.3 mm and is responsible for final correction of the aberrations introduced by the front group's extreme speed.

### Key Design Parameters

| Parameter | Value |
|---|---|
| Focal length (design) | 35.808 mm |
| Focal length (marketed) | 35 mm |
| Maximum aperture (design) | f/1.24 |
| Maximum aperture (marketed) | f/1.2 |
| Half-field angle (ω) | 31.8° (patent); real-ray trace reaches 21.6 mm image height at 31.7° |
| Full field of view (2ω) | 63.6° |
| Elements / Groups | 10 / 7 |
| Aspherical surfaces | 3 (on 2 elements) |
| Entrance pupil diameter | 28.88 mm |
| BFL | 23.51 mm |
| Total track (S1 to image) | 89.16 mm |
| Total track / EFL ratio | 2.49 |
| Petzval sum | +0.00374 mm⁻¹ |
| Petzval radius | 267.8 mm |
| Mount | Leica M (flange 27.80 mm) |


## 3. Optical Prescription (Example 2, Table 3)

The complete surface prescription is reproduced below. Surfaces marked with an asterisk (*) are aspherical. Surface 9 is the aperture stop (絞り). All refractive indices and Abbe numbers are at the d-line (587.6 nm).

| Surface | R (mm) | d (mm) | nd | νd | Element |
|---------|--------|--------|------|------|---------|
| 1 | +200.000 | 1.60 | 1.48749 | 70.4 | L1 front |
| 2 | +41.361 | 9.55 | air | — | L1 rear |
| 3 | −29.539 | 1.50 | 1.56732 | 42.8 | L2a front |
| 4 | +233.985 | 6.67 | 1.80420 | 46.5 | L2a–L2b junction |
| 5 | −41.350 | 0.15 | air | — | L2b rear |
| 6 | +28.934 | 13.10 | 1.80420 | 46.5 | L3a front |
| 7 | −47.262 | 2.80 | 1.64769 | 33.8 | L3a–L3b junction |
| 8 | +40.326 | 4.04 | air | — | L3b rear |
| 9 (STO) | ∞ | 3.51 | air | — | Aperture stop |
| 10* | −200.000 | 1.70 | 1.80610 | 40.7 | L4 front |
| 11 | −254.022 | 2.86 | air | — | L4 rear |
| 12 | −30.236 | 1.40 | 1.80518 | 25.5 | L5a front |
| 13 | +46.963 | 8.51 | 1.80420 | 46.5 | L5a–L5b junction |
| 14 | −27.172 | 0.15 | air | — | L5b rear |
| 15* | +81.004 | 6.41 | 1.80610 | 40.7 | L6 front |
| 16* | −31.428 | 0.20 | air | — | L6 rear |
| 17 | −75.075 | 1.50 | 1.54814 | 45.8 | L7 front |
| 18 | +30.000 | (BFL) | air | — | L7 rear |

**Computed BFL:** 23.51 mm (image plane distance from surface 18; the patent does not print a back focus, so this is a paraxial calculation). The table is at native scale — f = 35.808 mm computed against the patent's 35.8 mm — so no rescaling is applied.


## 4. Element-by-Element Analysis

### L1 — Negative Meniscus (Front Element)

**Glass:** nd = 1.48749, νd = 70.4 — catalog equivalent **HOYA FC5** (fluor crown, 1.48749/70.44); Schott N-FK5 is the same code. The patent gives only nd/νd.

**Shape:** Both radii positive (R₁ = +200.000, R₂ = +41.361), making this a negative meniscus with its convex side toward the object. The front radius is nearly five times the rear, giving a gently curved front face and a strongly curved rear concavity.

**Focal length:** −107.3 mm (thick-lens, in-air).

**Role:** This is a classic wide-angle front element serving as a negative field-flattening lens. Its low refractive index (the lowest in the system) and high Abbe number mean it introduces minimal chromatic aberration despite its significant refractive power — a useful property for a large-diameter element operating at the system's widest ray heights. By diverging the incoming ray bundle before it enters the cemented doublets, L1 enlarges the effective field that the rear groups can accept. The meniscus shape controls astigmatism by bending the field in the direction opposite to the Petzval curvature contributed by the strong positive elements deeper in the system. This element is relatively thin (1.60 mm center thickness) and the largest in diameter (about 21 mm semi-diameter in the patent figure).

The choice of a low-index fluorine-crown is noteworthy: it minimizes Petzval contribution (surface power is proportional to Δn, which is small here) while its high Abbe number ensures that this large-diameter element introduces minimal chromatic aberration despite its significant refractive power. The Petzval contributions from L1's two surfaces partially cancel each other but leave a net negative residual (−0.006 mm⁻¹), helping to flatten the inherently positive Petzval sum of the system.


### L2a + L2b — Cemented Doublet 22

**L2a glass:** nd = 1.56732, νd = 42.8 — catalog equivalent **OHARA S-TIL26** (light titanium flint).
**L2b glass:** nd = 1.80420, νd = 46.5 — catalog equivalent **HOYA TAF3** (high-index lanthanum flint; Schott N-LASF44 has the same code).

**Shape:** L2a is biconcave (R₃ = −29.539, R₄ = +233.985); L2b is biconvex (R₄ = +233.985, R₅ = −41.350). The junction surface at R₄ = +233.985 mm is nearly flat — the two elements meet at a very gently curved interface.

**Individual focal lengths:** L2a ≈ −46.1 mm (negative), L2b ≈ +44.2 mm (positive).
**Doublet focal length:** +340.4 mm (weakly positive overall).

**Role:** This doublet is the first chromatic corrector in the system. The combination of a light-flint negative element with a high-index lanthanum positive element creates an achromatic pair. However, the V-number difference between L2a and L2b is small (Δν = 3.7) while the refractive index difference is substantial (Δnd = 0.237). This pairing prioritizes monochromatic correction — spherical aberration and coma — over chromatic correction. The junction surface itself is nearly flat (R₄ = +234 mm, φ ≈ 0.001 mm⁻¹), so the large index step across it contributes negligible surface power; the doublet's corrective work is instead carried by its strongly curved outer surfaces (R₃ = −29.5 and R₅ = −41.4), where the individual element powers are large and opposite in sign (L2a ≈ −46 mm, L2b ≈ +44 mm) while the net doublet power is weak (+340 mm). This "nearly-zero net power with large constituent powers" configuration is efficient for higher-order aberration correction at f/1.2.

The patent explicitly requires that the positive elements in all cemented doublets have nd > 1.7 to control astigmatism and field curvature. L2b, with nd = 1.80420, satisfies this condition.


### L3a + L3b — Cemented Doublet 23

**L3a glass:** nd = 1.80420, νd = 46.5 — catalog equivalent **HOYA TAF3**.
**L3b glass:** nd = 1.64769, νd = 33.8 — catalog equivalent **HOYA E-FD2** dense flint (OHARA S-TIM22 has the same code).

**Shape:** L3a is biconvex (R₆ = +28.934, R₇ = −47.262); L3b is biconcave (R₇ = −47.262, R₈ = +40.326).

**Individual focal lengths:** L3a ≈ +24.2 mm (strong positive — the strongest individual element in the front group), L3b ≈ −33.2 mm (strong negative).
**Doublet focal length:** +54.2 mm (net positive).

**Role:** This is the principal power-generating doublet, positioned immediately before the stop. The thick L3a element (13.10 mm center thickness — the thickest in the system) carries the highest surface powers in the front group, with its front surface contributing the largest single Petzval increment (+0.0154 mm⁻¹). The high refractive index of the nd 1.804 glass is essential here: it provides strong convergence while keeping the Petzval contribution manageable (since Petzval contribution scales as φ/(n·n'), the high index in the denominator partially offsets the high surface power in the numerator). The substantial 13.1 mm center thickness is physically necessary: at f = +24.2 mm the constituent surface powers are very high, and the thick-lens correction term (−d·φ₁·φ₂/n) is significant, contributing roughly 7 mm of additional focal length beyond the thin-lens estimate.

The Abbe number difference within this doublet is more substantial (Δν = 12.7), making it the primary chromatic corrector in the front group. The dense flint L3b is paired against the high-index lanthanum L3a in a traditional achromatic arrangement. The patent does not name trade glasses; E-FD2 is an exact catalog match for the nd/νd pair. The doublet's front convex surface (L3a, R₆ = +28.934) and the first doublet's rear convex surface (L2b, R₅ = −41.350) face each other across a tiny 0.15 mm air gap — a classic double-Gauss "waist" configuration that enables high-order aberration balancing.


### Aperture Stop (S₂)

The stop is placed in the 4.04 + 3.51 = 7.55 mm air space between the rear of doublet 23 (surface 8) and the front of element L4 (surface 10). The stop's position between the two main groups is characteristic of double-Gauss designs. At f/1.24 the paraxial stop semi-diameter is 12.9 mm, yielding an entrance pupil diameter of 28.9 mm; an exact real-ray trace needs a 13.24 mm iris radius because of the residual spherical aberration at full aperture.


### L4 — Negative Meniscus (Aspherical)

**Glass:** nd = 1.80610, νd = 40.7 — catalog equivalent **HOYA NBFD13** (high-index lanthanum flint, 1.80610/40.73; OHARA S-LAH53 shares the nd but has νd 40.9).

**Shape:** Both radii negative (R₁₀ = −200.000, R₁₁ = −254.022), forming a negative meniscus with its concave side facing the object. The two surfaces have similar magnitudes of curvature, making this a very weakly powered element.

**Focal length:** −1183.3 mm (thick-lens, in-air). This is the weakest-powered element in the entire system by far.

**Aspherical surface:** Surface 10 (front, concave to object) carries aspherical correction with K = 0 (spherical base curve) and a dominant negative A4 coefficient of −3.465 × 10⁻⁵. The aspherical departure is substantial — at h = 10 mm, the surface departs from its base sphere by −0.407 mm, increasing to −0.900 mm at h = 12 mm. This strongly negative departure deepens the concavity of the surface at the margin relative to the paraxial zone.

**Role:** Despite its negligible base power, L4 is one of the most optically important elements in the system. Its aspherical surface acts as a "correction plate" positioned immediately behind the stop, where it intercepts the full marginal ray bundle while the chief ray passes near the axis. This placement makes it highly effective for correcting spherical aberration without introducing significant field-dependent aberrations (since the chief ray height is near zero at the stop, aspherical departures here do not generate coma or astigmatism). The negative A4 coefficient deepens the concavity at the aperture margins, adding local negative refractive power that grows with ray height. The resulting wavefront contribution has the sign Δn × A4 < 0 (since Δn = +0.806 and A4 < 0), which provides an overcorrecting spherical aberration contribution that counteracts the undercorrection from the strong positive elements elsewhere in the system. The high refractive index (nd = 1.806) amplifies the aspherical effect per unit of surface departure.

The patent text specifically identifies this surface as bearing aspherical correction: "メニスカス負レンズ24は、物体側を向いた凹面が非球面に形成されている" (the concave surface of meniscus negative lens 24 facing the object side is formed as an aspherical surface).


### L5a + L5b — Cemented Doublet 25

**L5a glass:** nd = 1.80518, νd = 25.5 — catalog equivalent **HOYA FD60** (dense flint, 1.80518/25.46; OHARA S-TIH6 shares the nd at νd 25.4).
**L5b glass:** nd = 1.80420, νd = 46.5 — catalog equivalent **HOYA TAF3**.

**Shape:** L5a is biconcave (R₁₂ = −30.236, R₁₃ = +46.963); L5b is biconvex (R₁₃ = +46.963, R₁₄ = −27.172).

**Individual focal lengths:** L5a ≈ −22.7 mm (strong negative), L5b ≈ +22.6 mm (strong positive).
**Doublet focal length:** +137.4 mm (weakly positive).

**Role:** This doublet is the principal chromatic corrector for the rear group. With a V-number difference of Δν = 21.0 — the largest in the system — it carries the heaviest burden for axial chromatic aberration correction. The refractive indices are nearly identical (Δnd ≈ 0.001), which is the hallmark of a "new achromat" design: the chromatic correction arises almost entirely from the dispersion difference rather than from an index step, minimizing the monochromatic aberration penalty. The individual element focal lengths are nearly equal in magnitude and opposite in sign (−22.7 vs. +22.6), producing a nearly afocal pair that nonetheless generates strong chromatic correction through the large Abbe number difference.

The combination of a very high-dispersion dense flint (νd = 25.5) with a high-index lanthanum glass (νd = 46.5) provides efficient chromatic correction per unit of doublet power. The L5b element is thick (8.51 mm center thickness), which separates the front and rear surface powers sufficiently to generate a "thick-lens" achromatic effect — the correction of longitudinal chromatic aberration becomes somewhat independent of the exact surface radii, making the design more tolerant of manufacturing errors.


### L6 — Biconvex Positive (Double Aspherical)

**Glass:** nd = 1.80610, νd = 40.7 — catalog equivalent **HOYA NBFD13** (same type as L4).

**Shape:** Biconvex (R₁₅ = +81.004, R₁₆ = −31.428). The rear surface has approximately 2.6× the curvature of the front surface, making this an asymmetric biconvex element with most of the bending power concentrated on the rear surface.

**Focal length:** +28.8 mm (thick-lens, in-air). This is one of the three strongest positive elements in the system, alongside L3a (+24.2 mm) and L5b (+22.6 mm).

**Aspherical surfaces:** Both surfaces carry aspherical correction:

**Surface 15 (front):** K = 0, A4 = +3.638 × 10⁻⁶. The aspherical departure is mild — only +0.026 mm at h = 10 mm. The positive A4 slightly steepens the front convex surface at the margins, locally increasing the convergent power. The wavefront product Δn × A4 > 0 (since Δn = +0.806 entering glass), so this surface makes a mild undercorrecting contribution to spherical aberration — a deliberate addition that provides a degree of freedom for balancing the overcorrection from S10 and S16.

**Surface 16 (rear):** K = 0, A4 = +1.179 × 10⁻⁵. The departure is more significant: +0.097 mm at h = 10 mm, rising to +0.193 mm at h = 12 mm. The positive A4 partially flattens the strongly concave rear surface at the margins, locally reducing the convergent power. Because light exits the glass here (Δn = −0.806), the wavefront product Δn × A4 < 0, making this surface an overcorrecting SA contributor — working in the same direction as S10 to counteract the system's undercorrection.

**Role:** L6 is the primary convergent element of the rear group, providing the bulk of the power needed to bring the ray bundle to focus. Its two aspherical surfaces in high-index glass (nd = 1.806) are the most demanding optical surfaces in the lens; the patent does not say whether they are ground or molded. The combined effect of the two aspherical surfaces on L6, working in concert with the aspherical S10 on L4, enables correction of spherical aberration across the full f/1.2 aperture while simultaneously managing coma and astigmatism in the off-axis field.

The large rear surface curvature (R₁₆ = −31.428 mm) generates the single largest positive Petzval contribution of any surface in the rear group (+0.0142 mm⁻¹), which is partially compensated by L7's negative contributions.


### L7 — Biconcave Negative (Rear Element)

**Glass:** nd = 1.54814, νd = 45.8 — catalog equivalent **OHARA S-TIL1** (light titanium flint; HOYA E-FEL1 has the same code).

**Shape:** Biconcave (R₁₇ = −75.075, R₁₈ = +30.000). The rear surface has 2.5× the curvature of the front, making this a strongly asymmetric negative element with most of its divergent power on the exit face.

**Focal length:** −38.9 mm (thick-lens, in-air). This is the third-strongest negative element in the system, after L5a (−22.7 mm) and L3b (−33.2 mm).

**Role:** L7 is the field-flattening and exit-pupil-shaping element. Its strong negative power counteracts the Petzval curvature of L6, contributing the system's largest single negative Petzval increment (−0.0118 mm⁻¹ from surface 18 alone). The relatively low refractive index (nd = 1.548, the second-lowest in the system) is intentional: it maximizes the Petzval correction per unit of element power, since the Petzval contribution goes as φ/(n·n'), and low n in the denominator amplifies the correcting effect.

The rear surface (R₁₈ = +30.000 mm) faces the image plane and defines the exit pupil characteristics of the system. This surface's curvature creates significant telecentric departure — the chief ray exits at a non-zero angle to the optical axis, which can interact with digital sensor cover glass and microlens arrays. This is a known characteristic of Leica M-mount wide-angle lenses and one reason why digital Leica cameras incorporate software corrections for oblique incidence.


## 5. Glass Selection Strategy

The patent lists only nd and νd; the trade names below are catalog equivalents chosen because they reproduce each pair exactly (to the patent's rounding). The design uses 7 distinct glass types across 10 elements, with two types appearing in multiple elements:

| Catalog equivalent | Code | nd | νd | Elements | Count |
|---|---|---|---|---|---|
| HOYA FC5 | 487/704 | 1.48749 | 70.4 | L1 | 1 |
| OHARA S-TIL26 | 567/428 | 1.56732 | 42.8 | L2a | 1 |
| **HOYA TAF3** | **804/465** | **1.80420** | **46.5** | **L2b, L3a, L5b** | **3** |
| HOYA E-FD2 | 648/338 | 1.64769 | 33.8 | L3b | 1 |
| **HOYA NBFD13** | **806/407** | **1.80610** | **40.7** | **L4, L6** | **2** |
| HOYA FD60 | 805/255 | 1.80518 | 25.5 | L5a | 1 |
| OHARA S-TIL1 | 548/458 | 1.54814 | 45.8 | L7 | 1 |

The dominant materials are two high-index lanthanum flints: the 804/465 type (3 elements) and the 806/407 type (2 elements, carrying all three aspheres). Together these account for half the elements. Six of the ten elements are at nd ≈ 1.80 or above.

The patent explicitly requires all positive elements in cemented doublets to have nd > 1.7, and all three (L2b, L3a, L5b) satisfy this with nd = 1.80420. This condition is the key to controlling field curvature at f/1.2: high refractive index in the positive elements reduces the Petzval sum per unit of convergent power, keeping the net field curvature manageable despite the system's very large total power (φ = 0.0279 mm⁻¹).

**Confidence assessment:** Every pair has an exact catalog match, and a HOYA set (FC5, TAF3, E-FD2, NBFD13, FD60, E-FEL1) reproduces nine of the ten rows to the printed decimal; the nearby OHARA S-LAH65 (1.80400) and S-LAH63 (1.80440) do not match the 1.80420 and 1.80610 rows. The L2a pair matches OHARA S-TIL26. The actual supplier cannot be determined from the patent.


## 6. Aspherical Surface Details

All three aspherical surfaces use K = 0 (spherical base curves) with polynomial deformation coefficients A through D (4th through 10th order). The patent's aspherical sag equation is:

$$Z(h) = \frac{ch^2}{1 + \sqrt{1 - (1+K)c^2h^2}} + Ah^4 + Bh^6 + Ch^8 + Dh^{10}$$

where c = 1/R, K is the conic constant, and A, B, C, D are the 4th through 10th order aspherical coefficients.

### Surface 10 (L4 front — concave to object)

| Coefficient | Value |
|---|---|
| K | 0.000 |
| A (A4) | −3.46513 × 10⁻⁵ |
| B (A6) | −5.82425 × 10⁻⁸ |
| C (A8) | −3.01558 × 10⁻¹¹ |
| D (A10) | +7.98551 × 10⁻¹⁴ |

This surface has the strongest aspherical departure in the system. At h = 10 mm, the surface departs −0.407 mm from the base sphere (deeper concavity at the margins). The A4 and A6 coefficients are both negative, meaning the aspherical correction builds monotonically through 6th order before the small positive D term provides a mild 10th-order correction at the extreme aperture. Because light enters glass at this surface (Δn = +0.806) and A4 < 0, the wavefront product Δn × A4 is negative — an overcorrecting SA contribution that helps balance the system's net undercorrection from its strong positive elements.

### Surface 15 (L6 front — convex to object)

| Coefficient | Value |
|---|---|
| K | 0.000 |
| A (A4) | +3.63823 × 10⁻⁶ |
| B (A6) | −2.57284 × 10⁻⁸ |
| C (A8) | +2.13341 × 10⁻¹⁰ |
| D (A10) | −5.87072 × 10⁻¹³ |

This surface has mild aspherical departure (+0.026 mm at h = 10 mm). The sign-alternating coefficients (positive A4, negative A6, positive A8, negative A10) indicate an oscillatory correction profile — the surface alternately adds and subtracts wavefront deviation at increasing aperture zones. This pattern is characteristic of a surface tuned for higher-order aberration balancing, where the sign alternation provides zone-by-zone control. The leading A4 term makes a mild undercorrecting SA contribution (Δn × A4 > 0), providing a deliberate degree of freedom for the optimizer to balance the strong overcorrection from S10 and S16.

### Surface 16 (L6 rear — concave to object)

| Coefficient | Value |
|---|---|
| K | 0.000 |
| A (A4) | +1.17867 × 10⁻⁵ |
| B (A6) | −3.91138 × 10⁻⁸ |
| C (A8) | +2.32768 × 10⁻¹⁰ |
| D (A10) | −5.55678 × 10⁻¹³ |

Moderate departure (+0.097 mm at h = 10 mm). The coefficient sign pattern is identical to surface 15 — sign-alternating — but with roughly 3× the A4 magnitude. On this strongly curved concave surface (R = −31.428 mm), the positive A4 partially flattens the surface at the margins, locally reducing the convergent power. Because light exits the glass here (Δn = −0.806), the wavefront product Δn × A4 < 0, making this an overcorrecting SA contributor — the same sign as S10. Together, S10 and S16 provide the system's net overcorrecting aspherical SA correction, while S15's mild undercorrecting contribution serves as a balancing term, giving the designer three independent degrees of freedom for zonal SA optimization across the full f/1.2 aperture.


## 7. Aberration Correction Strategy

### Spherical Aberration

At f/1.2, spherical aberration is the dominant challenge. The design addresses it through three mechanisms: the three cemented doublets provide bulk aberration correction through their high-index positive elements and strong constituent powers; the three aspherical surfaces provide zone-specific correction across the aperture (two overcorrecting contributors on S10 and S16, balanced by a mild undercorrecting contributor on S15); and the near-symmetric double-Gauss layout inherently cancels odd-order coma and distortion to first order.

### Chromatic Aberration

The three cemented doublets divide chromatic correction across the system. Doublet 25 (rear group) carries the heaviest chromatic burden with Δν = 21.0. Doublet 23 (front group, Δν = 12.7) provides secondary chromatic correction. Doublet 22 (Δν = 3.7) contributes primarily monochromatic correction with only modest chromatic contribution. The patent's aberration curves for Example 2 show well-corrected axial chromatic aberration between the d and g lines, with residual secondary spectrum typical of designs not employing anomalous-dispersion glasses.

### Field Curvature and Petzval Sum

The computed Petzval sum is +0.00374 mm⁻¹, corresponding to a Petzval radius of 267.8 mm and a Petzval ratio (R_P/f) of 7.48. At the corner of the 35mm format (half-diagonal 21.6 mm), the bare Petzval sag would be h²/(2R_P) ≈ 0.87 mm. Astigmatism pulls the actual image surfaces much closer to the film plane: in the patent's Fig. 4(b), the sagittal and tangential curves stay within about −0.3 mm out to the 21.67 mm image height, with the sagittal surface the more inward-curving of the two.

The Petzval correction is achieved primarily through the index-matching strategy: using high-index glass (nd > 1.8) in the positive elements forces the Petzval contributions of positive and negative surface powers to partially cancel within each element.

### Distortion

The near-symmetric double-Gauss configuration inherently suppresses odd-order distortion. The patent's distortion curve for Example 2 (Fig. 4(c)) is monotonic barrel distortion reaching roughly −2.5% at the 21.67 mm image height.


## 8. Focus Mechanism

The Voigtländer Nokton 35mm f/1.2 Aspherical (Versions I and II) uses **unit focusing** — the entire optical assembly moves forward as a rigid body during focus. This is standard for Leica M-mount rangefinder lenses, where the focusing helicoid translates the whole lens group relative to the camera body's flange. The patent prescription does not include variable air-spacing tables for different object distances, which is consistent with unit focusing (only the back focal distance changes).

For the Version I production lens, the rangefinder-coupled focus range extends from infinity to 0.7 m. Version II extended this to 0.5 m by scale focus (below 0.7 m, focusing is by lens scale markings only, not rangefinder-coupled). The patent publishes infinity data only, so the close-focus state in the data file is calculated: a paraxial Newton solve (front focal point 0.30 mm ahead of surface 1) gives a unit extension of 2.11 mm for a 0.7 m object-to-image distance (magnification about −0.059), and 3.15 mm for 0.5 m. The diagram models the 0.7 m rangefinder-coupled limit.

The absence of floating elements or internal focusing groups means that off-axis performance at close focus distances is not independently optimized. This is a known compromise of the unit-focus approach: field curvature and coma performance degrade at close distances compared to designs with floating elements (such as the Leica Summilux-M 35mm f/1.4 ASPH FLE, which uses a floating rear group for close-distance correction).


## 9. Comparison Between Patent Examples

The patent presents two examples with identical specifications (f = 35.8 mm, Fno = 1.24, ω = 31.8°) but different prescriptions:

| Feature | Example 1 | Example 2 |
|---|---|---|
| Front element shape | Biconcave (R₁ = −52.773) | Negative meniscus (R₁ = +200.000) |
| f/f₁ ratio | 0.97 | 0.60 |
| Front group power | Stronger (f₁ ≈ 36.9 mm) | Weaker (f₁ ≈ 60.0 mm) |
| Aspherical surfaces | 3 (S11, S15, S16) | 3 (S10, S15, S16) |
| L7 glass | nd = 1.51680, νd = 64.2 | nd = 1.54814, νd = 45.8 |
| Last radius | R₁₈ = +30.000 | R₁₈ = +30.000 |

Example 1 uses a biconcave front element and a stronger front group (f/f₁ = 0.97), which places nearly equal power before and after the stop. Example 2 adopts a weaker front group (f/f₁ = 0.60) with a negative meniscus front element, distributing more power to the rear group. The patent's rationale for the 0.4 < f/f₁ < 1.2 window is that a stronger first group enlarges the front diameter and makes coma hard to correct, while a weaker one enlarges the second group and hampers mounting the lens on the camera; both examples sit inside that window, and the patent does not say which one went into production.


## 10. Production Significance

The Nokton 35mm f/1.2 Aspherical represented a milestone in rangefinder lens design when introduced. No other 35mm lens for the Leica M system had achieved f/1.2, and the patent's stated goal was exactly this: a speed of f/1.4 or faster over a 60°+ field without enlarging the lens diameter.

The design's reliance on high-index lanthanum glass (six of ten elements at nd ≈ 1.80) and on three aspherical surfaces in that same glass class made it an expensive lens to build. Cosina's later Version III is a new, lighter optical design and is not covered by this patent.
