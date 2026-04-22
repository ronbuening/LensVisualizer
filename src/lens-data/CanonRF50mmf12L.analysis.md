# Canon RF 50mm f/1.2 L USM — Optical Design Analysis

## Patent & Production Lens Identification

**Patent:** US 2019/0265441 A1 — "Optical System and Image Pickup Apparatus"
**Inventor:** Masato Katayose (Canon Kabushiki Kaisha)
**Published:** August 29, 2019
**Priority:** JP 2018-032883, February 27, 2018
**Production example:** Example 2 (Numerical Data 2)

Example 2 was identified as the production design on the basis of three independent concordances with Canon's published specifications. The patent states a maximum magnification of −0.19 at closest focus, which matches Canon's specified 0.19× exactly; no other example in the patent achieves this value. The patent's 15-element / 9-group construction, 2ω = 45.90° field angle, and three aspherical surfaces likewise correspond to Canon's published data of 15 elements in 9 groups, 46° diagonal field of view, and three aspherical elements (two ground aspherics and one glass-molded aspherical). The patent focal length of 51.10 mm and f/1.25 aperture represent the unscaled design prescription — the production lens is marketed at 50 mm and f/1.2, consistent with the routine rounding conventions used in consumer lens specifications. (The f/1.25 to f/1.2 difference is less than 1/6 stop.)

A note on aspherical element counts: Canon's own product page specifies "Three Aspherical Elements and One UD Element," and DXoMark's review (based on Canon press materials) further identifies them as "2 large-diameter ground aspherical lens elements, and 1 glass-molded aspherical lens element." Some third-party retailers simplify this to "one aspherical element" in abbreviated spec sheets; the Canon first-party specification of three aspherical elements is authoritative and matches the patent.

The patent's Example 2 surface data contains OCR transcription errors in the published text at surfaces 14–18, where the radii of curvature were corrupted by cross-contamination with Example 3. The correct values were recovered by rasterizing the patent PDF at 400 DPI and reading the prescription table directly from the image. Five radii were corrected: surface 14 (251.143, not −73.147), surface 15 (87.566, not 307.461), surface 16 (−43.447, not −33.624), surface 17 (105.692, not 109.612), and surface 18 (161.695, not 244.351). The corrected prescription reproduces all patent-stated parameters: EFL = 51.10 mm, BFD = 14.60 mm, total track = 111.01 mm, and all 15 element focal lengths, all group focal lengths, and all nine conditional expression values from Table 1.


## Optical Layout

The lens consists of 15 glass elements arranged in 9 air-separated groups, organized into two functional regions divided by the aperture stop (SP):

- **Front Lens Group (LF):** Surfaces 1–10, 6 elements (G1–G6) in 4 groups — positive overall power (f_LF = 198.77 mm)
- **Aperture Stop (SP):** Surface 11
- **Rear Lens Group (LR):** Surfaces 12–25, 9 elements (G7–G15) in 5 groups — positive overall power (f_LR = 44.87 mm)

The system is further divided into two mechanically distinct lens units for focusing:

- **Focus Unit (L1):** Surfaces 1–19, elements G1–G11 — moves toward the object during close-focus (f_L1 = 61.31 mm)
- **Stationary Unit (L2):** Surfaces 20–25, elements G12–G15 — fixed relative to the image plane (f_L2 = 586.4 mm)

This is a front-group extension focus architecture: the focus unit L1 contains the entire front group, the aperture stop, and the first five elements of the rear group. It translates as a rigid block toward the object during close-focus. Only the final four elements (two cemented doublets, unit L2) remain stationary relative to the image plane. A single air gap — d19, between G11 and G12 — changes during focusing, while the BFD (d25) remains constant. Despite having only one variable gap, this is not unit focus in the conventional sense: unit focus implies the entire lens moves with only the back focal distance changing. Here, a subunit (L1) extends while L2 and the image plane relationship is fixed. The extreme focal length ratio f1/f2 = 0.105 ensures that focus-induced aberration variations remain small, since the stationary unit contributes only weak positive power and serves primarily as a field-flattening corrector.


## Verified Design Parameters

| Parameter | Computed | Patent |
|-----------|----------|--------|
| EFL | 51.100 mm | 51.10 mm |
| F-number | 1.25 | 1.25 |
| Half-field angle | 22.95° | 22.95° |
| Image height | 21.64 mm | 21.64 mm |
| Total track | 111.01 mm | 111.01 mm |
| Back focal distance | 14.60 mm | 14.60 mm |
| Front group (LF) focal length | 198.77 mm | 198.77 mm |
| Rear group (LR) focal length | 44.87 mm | 44.87 mm |
| Petzval sum | 0.00164 mm⁻¹ | — |
| Petzval radius | −608 mm | — |


## Element-by-Element Analysis

### Front Lens Group (LF): Elements G1–G6

The front group's primary responsibilities are to converge the incoming marginal ray bundle (reducing the beam diameter that must pass through the aperture stop) while introducing minimal net aberration. With a combined focal length of 198.77 mm — nearly 4× the system EFL — the front group provides gentle convergence distributed across six elements, which is essential for controlling spherical aberration at f/1.2. The average refractive index of the positive elements in this group is exceptionally high (N_pave = 1.920), enabling strong convergence with moderate surface curvatures.

**G1 — Biconvex Positive, aspherical front surface**
- Glass: S-LAH65V (OHARA), nd = 1.80400, νd = 46.58
- Focal length: +47.21 mm
- Radii: R1 = +80.110 mm (aspherical), R2 = −68.243 mm
- Center thickness: 9.67 mm
- Cemented with G2 (Doublet D1)

G1 is the most critical element in the design. As the positive lens "Lp" closest to the object, it carries the patent's primary conditional expression constraint: fLp/Dps = 1.240, meaning its focal length is 1.24× the distance from its front surface to the stop. This relationship ensures that the axial marginal ray is sufficiently converged by the time it reaches the stop, keeping the stop diameter manageable without introducing excessive spherical aberration. The front surface is one of two large-diameter ground aspherical surfaces. At the verified semi-diameter of 25.5 mm, the aspherical departure reaches −758 µm, monotonically increasing in magnitude from center to rim. This profile progressively reduces the convex curvature toward the edge, which is the classic correction for undercorrected spherical aberration at f/1.2 — the outer zones of the aperture are made less convergent to bring marginal rays closer to the paraxial focus. The biconvex form with relatively similar front and rear curvatures (R1/|R2| ≈ 1.17) limits the practical semi-diameter to approximately 25.5 mm due to edge thickness constraints, despite the 77 mm filter thread allowing a larger physical barrel diameter. The choice of S-LAH65V (a lanthanum-heavy crown with nd = 1.804) allows the element to achieve strong refraction while maintaining a moderate Abbe number (νd = 46.6), providing a favorable balance between power contribution and chromatic aberration.

**G2 — Biconcave Negative**
- Glass: S-TIM25 (OHARA), nd = 1.68893, νd = 31.07
- Focal length: −43.00 mm
- Radii: R1 = −68.243 mm, R2 = +52.862 mm
- Center thickness: 1.64 mm
- Cemented with G1 (Doublet D1)

G2 forms the negative component of the front cemented doublet. Its lower refractive index (1.689 vs. 1.804) and high dispersion (νd = 31.1) create a classic achromatic correction at the cemented junction: the index difference at the junction surface generates negative chromatic contribution that partially offsets the positive chromatic aberration from G1's front surface. The combined doublet D1 is very weakly negative (f_D1 ≈ −1810 mm), meaning the pair functions nearly as a thick, aberration-corrected window that introduces almost no net refraction — all the convergence from G1 is essentially undone by G2. This deliberate power balance prioritizes aberration correction over convergence at the very front of the lens.

**G3 — Positive Meniscus**
- Glass: S-NPH7 (OHARA), nd = 2.00100, νd = 29.13
- Focal length: +42.80 mm
- Radii: R1 = +42.184 mm, R2 = +2510.576 mm (near-plano rear)
- Center thickness: 7.47 mm

G3 is optically the most remarkable element in the design. Its glass — S-NPH7 — is an ultra-high-index niobium phosphate heavy flint with nd = 2.001, one of the highest commercially available refractive indices. Both radii are positive (meniscus form, concave toward the image), but the rear surface is essentially flat (R2 ≈ 2511 mm), so the element functions as a near-plano-convex with all power concentrated at the front surface. The extremely high refractive index allows a relatively gentle curvature (R1 = 42.2 mm) to produce substantial power (f = +42.8 mm). This is the primary converging element of the front group. The high refractive index means that for a given surface power φ = (n−1)/R, the factor (n−1) = 1.001 is very large, so R can be proportionally larger, which reduces higher-order aberrations. The tradeoff is severe chromatic aberration (νd = 29.1 is very dispersive), which must be compensated elsewhere. The strong front curvature constrains the practical SD to approximately 23 mm due to edge thickness limits: at larger apertures, the front surface sag exceeds the center thickness.

**G4 — Negative Meniscus**
- Glass: S-TIL27 (OHARA), nd = 1.65412, νd = 39.68
- Focal length: −50.05 mm
- Radii: R1 = +99.979 mm, R2 = +24.508 mm (both positive, R1 > R2)
- Center thickness: 1.60 mm

G4 is a steeply curved negative meniscus that serves two purposes. First, it partially corrects the spherical aberration generated by G3's strong positive surface. Second, its moderate-dispersion glass provides some chromatic compensation against G3. The meniscus form (both radii positive, concave toward the image) is important: it bends the already-converging rays further while introducing the opposite sign of spherical aberration compared to G3's convex surface. The large radius difference (R1/R2 ≈ 4.1) creates strong negative power despite the meniscus shape. The rear surface (R2 = +24.508 mm) is very steeply curved, and the sag of this surface into the following 7.45 mm air gap is the binding cross-gap constraint in the front group, limiting the SD in this region to approximately 16.5 mm.

**G5 — Biconcave Negative (Ln)**
- Glass: S-TIM22 (OHARA), nd = 1.66565, νd = 35.64
- Focal length: −38.82 mm
- Radii: R1 = −101.919 mm, R2 = +34.799 mm
- Center thickness: 1.34 mm
- Cemented with G6 (Doublet D2)

G5 is the negative lens "Ln" identified in the patent's conditional expressions — the most image-side negative element in the front group. Its role is to correct residual spherical aberration from the upstream positive elements (particularly G3) just before the beam enters the stop region. The patent constrains fLn/Dns = −4.156, ensuring that G5's focal length is appropriately balanced against its distance from the stop: too weak and spherical aberration goes uncorrected; too strong and the correction overshoots. The biconcave form generates strong negative power efficiently.

**G6 — Positive Meniscus**
- Glass: S-LAH79 (OHARA), nd = 1.95375, νd = 32.32
- Focal length: +38.91 mm
- Radii: R1 = +34.799 mm, R2 = +516.053 mm
- Center thickness: 5.56 mm
- Cemented with G5 (Doublet D2)

G6, cemented to G5, uses another ultra-high-index glass (nd = 1.954). Both radii are positive with a near-plano rear surface (R2 ≈ 516 mm), giving a positive meniscus form. Like the G1+G2 doublet, the G5+G6 pair is nearly afocal (f_D2 ≈ −17,500 mm), indicating that this cemented doublet is designed primarily for aberration correction rather than net power contribution. The pairing of a negative element (G5, moderate index, moderate dispersion) with a positive element (G6, very high index, moderate dispersion) at a shared junction surface creates a Petzval-sum-reducing couplet — the negative element contributes negative Petzval while the positive element, with its much higher refractive index, contributes less positive Petzval per unit of power than a lower-index alternative would.


### Aperture Stop

The aperture stop is located at surface 11, between the front and rear groups. Its position — 38.07 mm from G1's front surface and 58.34 mm from the last surface of the rear group — places it at Dps/Dsr = 0.653, which the patent constrains to the range 0.35–0.85. This relatively forward stop position (closer to the front than the rear of the lens) is characteristic of double-Gauss derivatives and helps to maintain symmetry of aberration contributions about the stop, reducing odd-order aberrations like coma and distortion. The production lens uses a 10-blade diaphragm.


### Rear Lens Group (LR): Elements G7–G15

The rear group carries the bulk of the system's refractive power (f_LR = 44.87 mm, less than the system EFL of 51.1 mm). It consists of nine elements in five groups: four cemented doublets and one singlet. Its primary responsibilities are: final image formation, field curvature correction, chromatic aberration balancing, and maintaining telecentricity for the digital sensor.

**G7 — Positive Meniscus (UD element)**
- Glass: S-FPL51 (OHARA), nd = 1.49700, νd = 81.54
- Focal length: +42.76 mm
- Radii: R1 = −1398.232 mm (near-plano), R2 = −20.985 mm
- Center thickness: 10.02 mm
- Cemented with G8 (Doublet D3)

G7 is the most distinctive element in the rear group — it uses S-FPL51 fluorophosphate glass with an exceptionally high Abbe number of 81.54, identifying it as the **UD (Ultra-low Dispersion) element** specified by Canon in the production lens. This glass belongs to the fluoride-phosphate family developed specifically for apochromatic correction. Despite its low refractive index (1.497), the meniscus form generates substantial positive power (f = +42.76 mm). Both surfaces have negative radii, forming a meniscus concave toward the object. The front surface is nearly flat (R1 = −1398 mm, contributing negligible power), while the steeply curved rear surface (R2 = −20.985 mm) is the primary power source. The positive refraction occurs because light exits the dense glass (n = 1.497) through a surface whose center of curvature lies to the left: this geometry bends the exiting rays toward the optical axis, producing convergence (surface power φ = (1.0 − 1.497)/(−20.985) = +0.0237 mm⁻¹). The 10.02 mm center thickness — the thickest element in the entire lens — is a consequence of the meniscus geometry: the element must maintain adequate edge thickness despite the steep rear curvature.

The pairing of G7 (high νd, positive power) with G8 (low νd, negative power) in cemented doublet D3 creates a powerful chromatic corrector. Unlike the weakly powered front-group doublets, D3 has significant net negative power (f_D3 = −67.4 mm), contributing negative Petzval curvature that helps flatten the field.

**G8 — Biconcave Negative**
- Glass: S-NBH55 (OHARA), nd = 1.73800, νd = 32.26
- Focal length: −26.19 mm
- Radii: R1 = −20.985 mm (junction), R2 = +251.143 mm
- Center thickness: 1.29 mm
- Cemented with G7 (Doublet D3)

G8 is the strongest negative element in the entire system (f = −26.19 mm). Nearly all of its power originates from the steeply curved junction surface (R = −20.985 mm), while the rear surface (R = +251.143 mm) contributes only moderate additional refraction. Its high-dispersion niobium flint glass (νd = 32.26) provides aggressive chromatic compensation against G7's low-dispersion positive contribution. The cemented junction between G7 and G8 — where light transitions from nd = 1.497 to nd = 1.738, a Δnd of 0.241 — is the site of the most powerful chromatic correction in the lens. This large index step at the junction generates substantial negative longitudinal chromatic aberration that offsets the accumulated positive chromatic aberration from the front group's high-index positive elements.

**G9 — Biconvex Positive**
- Glass: S-LAL14 (OHARA), nd = 1.76385, νd = 48.51
- Focal length: +38.96 mm
- Radii: R1 = +87.566 mm (corrected), R2 = −43.447 mm (corrected)
- Center thickness: 7.29 mm
- Cemented with G10 (Doublet D4)

**G10 — Biconcave Negative**
- Glass: S-TIM22 (OHARA), nd = 1.66565, νd = 35.64
- Focal length: −46.10 mm
- Radii: R1 = −43.447 mm (corrected), R2 = +105.692 mm (corrected)
- Center thickness: 1.28 mm
- Cemented with G9 (Doublet D4)

Doublet D4 (G9+G10) has moderate positive power (f_D4 = +204.8 mm). G9 uses a lanthanum crown glass with good Abbe number (νd = 48.5), providing positive power with relatively low chromatic contribution. G10, using the same S-TIM22 glass as G5, provides the negative chromatic correction. This doublet helps correct residual lateral chromatic aberration and contributes to the overall power balance of the rear group.

**G11 — Biconvex Positive, aspherical front surface**
- Glass: S-LAH89 (OHARA), nd = 1.88300, νd = 40.80
- Focal length: +38.77 mm
- Radii: R1 = +161.695 mm (aspherical, corrected), R2 = −42.423 mm
- Center thickness: 7.96 mm

G11 is the last element of the focus unit (L1) and carries the second ground aspherical surface. Its front surface (surface 18*) has a departure of approximately −391 µm at the verified 21.5 mm semi-diameter, progressively reducing the surface's convex curvature outward. This asphere is positioned in the converging beam after the stop, where it corrects residual higher-order spherical aberration and reduces the sensitivity of off-axis performance to focus position. The high-index S-LAH89 glass (nd = 1.883) allows the biconvex element to generate strong positive power while maintaining manageable surface curvatures.

The air gap immediately after G11 (surface 19, d = 1.95 mm at infinity, expanding to 16.11 mm at closest focus) is the sole variable spacing in the system. This gap defines the focus interface between the moving unit L1 and the stationary unit L2; the BFD after L2 remains constant at 14.60 mm.

**G12 — Biconvex Positive**
- Glass: S-LAH89 (OHARA), nd = 1.88300, νd = 40.80
- Focal length: +33.67 mm
- Radii: R1 = +54.474 mm, R2 = −60.531 mm
- Center thickness: 8.77 mm
- Cemented with G13 (Doublet D5)

**G13 — Biconcave Negative**
- Glass: S-TIM1 (OHARA), nd = 1.59551, νd = 39.24
- Focal length: −40.55 mm
- Radii: R1 = −60.531 mm, R2 = +40.560 mm
- Center thickness: 1.54 mm
- Cemented with G12 (Doublet D5)

Doublet D5 (G12+G13) is the first element group of the stationary unit L2. Its moderate positive power (f_D5 = +136.6 mm) provides final convergence adjustments. The 7.14 mm air gap following D5 allows the ray bundle to spread slightly before entering the final doublet, which is important for the field-flattening function of D6.

**G14 — Biconcave Negative**
- Glass: S-TIM35 (OHARA), nd = 1.67300, νd = 38.15
- Focal length: −55.64 mm
- Radii: R1 = −58.170 mm, R2 = +105.985 mm
- Center thickness: 1.21 mm
- Cemented with G15 (Doublet D6)

**G15 — Biconvex Positive, aspherical rear surface**
- Glass: S-LAH65V / L-LAH65V (OHARA), nd = 1.80400, νd = 46.58
- Focal length: +89.08 mm
- Radii: R1 = +105.985 mm, R2 = −216.191 mm (aspherical)
- Center thickness: 5.08 mm
- Cemented with G14 (Doublet D6)

Doublet D6 (G14+G15) is the final optical group before the image plane, and it carries the third aspherical surface on G15's rear face. This doublet has moderate negative power (f_D6 = −154.7 mm), functioning as a field-flattening element that reduces Petzval curvature. The aspherical departure on surface 25* is positive — approximately +293 µm at the verified 16.5 mm semi-diameter — meaning the surface becomes less concave toward the rim. This rear-most asphere primarily corrects field-dependent astigmatism and field curvature at the image periphery. Given its position close to the image plane where chief ray heights are large and marginal ray heights are small, it preferentially affects off-axis rather than on-axis performance.

G15 uses the same S-LAH65V glass as the front element G1, creating a bookend symmetry in the glass selection. The production lens likely manufactures this final aspherical surface by glass molding (GMo) rather than grinding, consistent with Canon's stated specification of "two ground aspherical elements and one glass-molded aspherical element" — the two large-diameter aspherics on G1 and G11 would require grinding, while the smaller rear element G15 is suitable for precision glass molding. (OHARA produces S-LAH65V in both conventional and PGM-compatible variants, the latter designated L-LAH65V, confirming the glass is available for molding.)


## Aspherical Surfaces

The design employs three aspherical surfaces on three separate elements, all with conic constant K = 0 (spherical base curve) and even-order polynomial deformations through A12:

| Surface | Element | R (mm) | Position | Manufacturing | Departure at SD |
|---------|---------|--------|----------|---------------|-----------------|
| 1* | G1 (front) | +80.110 | Front of lens | Ground | −758 µm at 25.5 mm |
| 18* | G11 (front) | +161.695 | After stop | Ground | −391 µm at 21.5 mm |
| 25* | G15 (rear) | −216.191 | Last surface | Glass-molded | +293 µm at 16.5 mm |

The aspherical surfaces are strategically distributed through the system to address different aberrations. Surface 1* operates at the largest beam diameter and targets zonal and marginal spherical aberration — the dominant aberration in any f/1.2 design. Its departure increases monotonically in magnitude from center to rim, progressively flattening the convex surface to reduce the convergence of marginal rays. Surface 18* sits in the converging beam after the stop, where it corrects residual higher-order spherical aberration and helps maintain correction across the focus range. Surface 25*, near the image plane, primarily addresses field-dependent aberrations (astigmatism and field curvature) without significantly affecting on-axis performance.

All three surfaces use a purely polynomial aspherical profile with no conic term (K = 0). Coefficients extend to A12 (12th order), indicating that correction of very high-order zonal aberrations is necessary at f/1.2.

### Surface 1* — Aspherical Coefficients
| Coefficient | Value |
|-------------|-------|
| K | 0 |
| A4 | −1.44652 × 10⁻⁶ |
| A6 | −1.02693 × 10⁻⁹ |
| A8 | +1.91678 × 10⁻¹² |
| A10 | −3.07794 × 10⁻¹⁵ |
| A12 | +2.00476 × 10⁻¹⁸ |

### Surface 18* — Aspherical Coefficients
| Coefficient | Value |
|-------------|-------|
| K | 0 |
| A4 | −2.17027 × 10⁻⁶ |
| A6 | +4.00496 × 10⁻⁹ |
| A8 | −1.90948 × 10⁻¹¹ |
| A10 | +4.86536 × 10⁻¹⁴ |
| A12 | −4.89586 × 10⁻¹⁷ |

### Surface 25* — Aspherical Coefficients
| Coefficient | Value |
|-------------|-------|
| K | 0 |
| A4 | +3.50064 × 10⁻⁶ |
| A6 | −5.98670 × 10⁻¹⁰ |
| A8 | +1.34319 × 10⁻¹¹ |
| A10 | −2.56798 × 10⁻¹⁴ |
| A12 | +2.59930 × 10⁻¹⁷ |


## Glass Selection Strategy

The glass selection reveals a deliberate multi-tier strategy:

**Ultra-high-index positives (nd > 1.88):** G3 (2.001), G6 (1.954), G11 (1.883), G12 (1.883). These elements carry the bulk of the system's positive refractive power. The extremely high indices allow strong convergence with gentle curvatures, minimizing higher-order aberrations. The tradeoff — moderate to high dispersion — is compensated by paired negative elements.

**Moderate-index lanthanum crowns (nd 1.76–1.80):** G1 (1.804), G9 (1.764), G15 (1.804). These serve as positive elements where the dispersion constraint is tighter — particularly at the system's entrance (G1) and exit (G15), where chromatic errors are hardest to correct downstream.

**UD (fluorophosphate) glass:** G7 (1.497, νd = 81.5). This single element carries the system's apochromatic correction. Its exceptionally low dispersion, paired with the high-dispersion G8 in cemented doublet D3, provides the primary mechanism for controlling secondary chromatic aberration (the residual g-line/d-line focus shift that simple achromatic doublets cannot correct).

**Flint glasses for chromatic compensation (nd 1.59–1.74, νd 31–39):** G2, G4, G5, G8, G10, G13, G14. These moderate-to-high-dispersion elements serve as chromatic compensators paired with the high-index positives. The diversity of flint types (titanium flints, niobium flints, standard flints) reflects careful optimization of partial dispersion matching across the spectrum.

The average positive-element index in the front group (N_pave = 1.920) is exceptionally high, enabling the 15-element design to achieve f/1.2 in a total track of only 111 mm — roughly 2.2× the focal length.


## Petzval Sum and Field Curvature

The computed Petzval sum is +0.00164 mm⁻¹, corresponding to a Petzval radius of −608 mm. For a full-frame sensor with 21.64 mm image height, the predicted sagittal field curvature at the edge is approximately −0.38 mm. This remarkably low Petzval sum for an f/1.2 design reflects the systematic use of negative-power elements (particularly doublets D3 and D6) to counterbalance the Petzval contributions of the many positive elements. The near-zero Petzval sum is essential at f/1.2, where the shallow depth of field makes even small field curvature visible as corner softness.


## Focusing Mechanism

The lens employs a **front-group extension focus** system (Claim 8 of the patent): focusing from infinity to the closest distance (0.40 m, magnification −0.19) is accomplished by translating lens unit L1 (elements G1–G11, including the aperture stop) as a rigid block toward the object. Lens unit L2 (elements G12–G15) remains stationary relative to the sensor. Only the air gap d19 — between the last element of L1 (G11) and the first element of L2 (G12) — changes during focusing. The BFD (d25 = 14.60 mm) remains constant because L2 does not move.

This focus architecture has a single variable gap but is distinct from unit focus: in unit focus, the entire lens translates and only the BFD changes; here, a subunit extends while the rear group and BFD are fixed. It is also distinct from classical inner focus, where the moving group is flanked on both sides by stationary groups, typically producing two variable gaps. The patent distinguishes this architecture (Claim 8, Examples 1–3) from the floating-focus variant in Example 4, where both L1 and L2 move independently along different loci with two variable gaps (d19 and d25).

| Parameter | Infinity | Closest Focus |
|-----------|----------|---------------|
| d19 (air gap after G11) | 1.95 mm | 16.11 mm |
| d25 (BFD, constant) | 14.60 mm | 14.60 mm |
| Focus extension | — | 14.16 mm |

The 14.16 mm extension corresponds to roughly 0.28× the system EFL. Because the aperture stop moves with the focus unit, the entrance pupil position shifts during focusing, but the f-number remains nominally constant. The front-group extension approach — rather than the more common internal-focus or rear-focus designs — was chosen because it minimizes variations in spherical aberration during focusing. This is critical at f/1.2, where even small spherical aberration changes produce visible shifts in focus quality. The patent notes (¶0062) that this architecture "satisfactorily reduces" focus-induced aberration variations while simultaneously reducing the effective front lens diameter compared to unit-focusing alternatives.

The focus is driven by a ring-type Ultrasonic Motor (USM) with Canon's optimized focusing algorithms and a high-speed CPU. The focus limiter switch (0.8 m – ∞) allows photographers to restrict the focus range for faster acquisition in situations where close-focus capability is unnecessary.


## Aberration Correction Philosophy

The design embodies a distinctive approach to aberration correction at extreme apertures:

**Spherical aberration** is the dominant challenge at f/1.2. The strategy combines three complementary mechanisms: ultra-high-index glasses in the positive elements reduce surface curvatures and hence the magnitude of the generated aberration; negative elements (particularly G4, G5, G8) positioned at strategic locations introduce compensating opposite-sign spherical aberration; and two ground aspherical surfaces (on G1 and G11) provide the fine-tuning of zonal balance that spherical surfaces alone cannot achieve.

**Chromatic aberration** is controlled through an unusually sophisticated glass palette. The system-level approach uses the UD element (G7) paired with the high-dispersion G8 at the cemented junction of doublet D3 as the primary chromatic corrector, supplemented by five additional achromatic-style pairings distributed through both groups. The patent's aberration diagrams show lateral chromatic aberration controlled to within ±0.050 mm across the field — a remarkable achievement for f/1.2.

**Field curvature** is addressed through the very low Petzval sum (0.00164 mm⁻¹), achieved by the systematic use of high-index positive elements (which contribute less Petzval per unit of power) and strong negative elements (particularly in doublets D3 and D6). The rear aspherical surface (25*) provides additional field-dependent correction.

**Coma and astigmatism** benefit from the quasi-symmetric arrangement of elements about the aperture stop. The front group's gentle convergence and the stop's moderately forward position create partial symmetry that inherently reduces odd-order aberrations. The patent's aberration diagrams show well-controlled astigmatism at ω = 22.95°.

**Flare and ghosting** are addressed in the production lens through Canon's Air Sphere Coating (ASC), applied to one surface. ASC uses a vapor-deposited layer containing microscopic air spheres that create a very low effective refractive index at the glass-air boundary, suppressing reflections more effectively than conventional multi-layer coatings, particularly at high angles of incidence. This is especially important in a 15-element design where the 18 air-glass surfaces can produce significant ghosting in backlit conditions.


## Cemented Doublet Summary

| Doublet | Elements | Group FL (mm) | Primary Function |
|---------|----------|---------------|------------------|
| D1 | G1 + G2 | −1810 | Near-afocal front corrector (spherical + axial chromatic) |
| D2 | G5 + G6 | −17,499 | Near-afocal pre-stop corrector (spherical + Petzval) |
| D3 | G7 + G8 | −67.4 | Primary chromatic corrector (UD glass); Petzval flattener |
| D4 | G9 + G10 | +204.8 | Moderate positive power; residual chromatic + astigmatism |
| D5 | G12 + G13 | +136.6 | Stationary positive group; final convergence |
| D6 | G14 + G15 | −154.7 | Field flattener; rear aspherical corrector |

The six cemented doublets account for 12 of the 15 elements. Only G3, G4, and G11 are standalone singlets — and all three are in the converging beam path where their singular surfaces serve specific aberration-control roles that would be compromised by cementing.


## Correspondence to Production Specifications

| Specification | Patent Example 2 | Canon RF 50mm f/1.2 L USM |
|---------------|-------------------|---------------------------|
| Focal length | 51.10 mm | 50 mm |
| Maximum aperture | f/1.25 | f/1.2 |
| Elements / Groups | 15 / 9 | 15 / 9 |
| Aspherical elements | 3 (surfaces 1*, 18*, 25*) | 3 (2 ground + 1 GMo) |
| UD elements | 1 (G7, S-FPL51) | 1 |
| Diagonal field | 45.90° | 46° |
| Closest focus | 0.40 m (implied by m = −0.19) | 0.40 m |
| Max magnification | −0.19 | 0.19× |
| Total track | 111.01 mm | 108 mm (barrel length, excl. mount protrusion) |
| BFD | 14.60 mm | 14.6 mm (rear element recessed ~5.4 mm behind flange) |
| Aperture blades | — | 10 |
| Filter diameter | — | 77 mm |
| Coatings | — | ASC (Air Sphere Coating) on one surface; fluorine front/rear |

The BFD of 14.60 mm in the patent is the air-equivalent distance from the last lens surface to the paraxial image plane. Since this is shorter than the Canon RF mount's 20 mm flange-to-sensor distance, the last lens surface (surface 25*) is recessed approximately 5.4 mm behind the flange face, extending into the camera body. This is a common and deliberate feature of RF-mount lens designs, which exploit the short 20 mm flange distance to position rear elements closer to the sensor for improved corner illumination and reduced field curvature.


## Appendix: Corrected Surface Prescription (Example 2)

The following prescription reflects the verified values after OCR correction. Surfaces marked with asterisks (*) are aspherical. Surfaces highlighted in bold italics had OCR errors that were corrected from the rasterized patent PDF.

| Surface | R (mm) | d (mm) | nd | νd | Element |
|---------|--------|--------|-------|-------|---------|
| 1* | 80.110 | 9.67 | 1.80400 | 46.58 | G1 |
| 2 | −68.243 | 1.64 | 1.68893 | 31.07 | G2 |
| 3 | 52.862 | 0.20 | 1.0 | — | air |
| 4 | 42.184 | 7.47 | 2.00100 | 29.13 | G3 |
| 5 | 2510.576 | 0.70 | 1.0 | — | air |
| 6 | 99.979 | 1.60 | 1.65412 | 39.68 | G4 |
| 7 | 24.508 | 7.45 | 1.0 | — | air |
| 8 | −101.919 | 1.34 | 1.66565 | 35.64 | G5 |
| 9 | 34.799 | 5.56 | 1.95375 | 32.32 | G6 |
| 10 | 516.053 | 2.44 | 1.0 | — | air |
| STO | ∞ | 2.58 | 1.0 | — | stop |
| 12 | −1398.232 | 10.02 | 1.49700 | 81.54 | G7 (UD) |
| 13 | −20.985 | 1.29 | 1.73800 | 32.26 | G8 |
| **14** | **251.143** | 0.44 | 1.0 | — | air |
| **15** | **87.566** | 7.29 | 1.76385 | 48.51 | G9 |
| **16** | **−43.447** | 1.28 | 1.66565 | 35.64 | G10 |
| **17** | **105.692** | 1.79 | 1.0 | — | air |
| **18*** | **161.695** | 7.96 | 1.88300 | 40.80 | G11 |
| 19 | −42.423 | 1.95 (var) | 1.0 | — | air |
| 20 | 54.474 | 8.77 | 1.88300 | 40.80 | G12 |
| 21 | −60.531 | 1.54 | 1.59551 | 39.24 | G13 |
| 22 | 40.560 | 7.14 | 1.0 | — | air |
| 23 | −58.170 | 1.21 | 1.67300 | 38.15 | G14 |
| 24 | 105.985 | 5.08 | 1.80400 | 46.58 | G15 |
| 25* | −216.191 | 14.60 | 1.0 | — | air (BFD) |
