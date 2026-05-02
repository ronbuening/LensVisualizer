# Sony FE 85mm F1.4 GM II — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** WO 2025/239028 A1 — *Imaging Optical System and Imaging Device*
**Applicant:** Sony Group Corporation (JP)
**Inventors:** Yamagishi Masakazu, Tasaki Ryohei, Kumisawa Yuma
**Filing date:** March 25, 2025 (PCT/JP2025/011665)
**Priority date:** May 17, 2024 (JP 2024-081162)
**Publication date:** November 20, 2025
**Embodiment used:** Example 2 (第2の構成例, Numerical Example 2)

Example 2 is identified as the production design of the Sony FE 85mm F1.4 GM II (SEL85F14GM2) by the following convergent criteria:

1. **Element and group count:** 14 elements in 11 groups, matching Sony's published specification of "11-14" (11 groups, 14 elements).
2. **Special elements:** 2 aspherical elements (surfaces 12, 20, and 21 — forming the rear of L6 and both surfaces of L11) and 2 ED-class elements (L2 and L3), matching Sony's "2 XA elements" and "2 ED glass elements."
3. **Focal length and aperture:** Patent f = 82.45 mm, F/1.46 (design), marketed as 85 mm F/1.4.
4. **Close focus distance:** Patent states 846 mm, consistent with Sony's published MFD of 0.85 m (AF) / 0.80 m (MF).
5. **Image circle:** Patent image height Y = 21.63 mm (diameter 43.26 mm), consistent with full-frame 35 mm format (43.27 mm diagonal).
6. **Focus mechanism:** Internal focusing via G2 unit travel, with G1 and G3 fixed — consistent with Sony's "internal focusing" and XD linear motor drive.
7. **Patent timing:** Priority date May 2024, lens announced August 28, 2024, production began September 2024.

The half-field angle 2ω = 29.40° and optical total track L = 123.83 mm are also consistent with the production lens dimensions (107.3 mm barrel length plus flange-to-sensor distance).

---

## Optical Architecture

The design is a three-group inner-focus configuration with a positive–positive–negative power distribution, optimized for internal focusing with a lightweight moving group. It shares certain family traits with modified double-Gauss designs — notably the use of a negative element (L4) preceding the stop in G1 — but the extended six-element focusing group and the separated negative rear corrector group (G3) distinguish it from classical Gauss derivatives.

From object to image, the system comprises:

- **G1 (positive, f = +193.9 mm):** Four single elements L1–L4 plus the aperture stop St. G1 acts as the front collector, gathering the wide-aperture cone and providing moderate positive power. Its most object-side surface is convex toward the object and its most image-side surface (L4 rear) is concave toward the image — a configuration the patent identifies (¶0045, ¶0047) as important for coma correction during focusing and for miniaturizing the front barrel diameter.

- **G2 (positive, f = +70.1 mm):** The focusing group, consisting of four lens components — cemented doublet 2A (L5+L6, negative), singlet 2B (L7, positive), cemented doublet 2F (L8+L9, negative), and singlet 2R (L10, positive) — yielding a negative-positive-negative-positive power progression. G2 carries the strongest positive power in the system and moves as a unit 11.17 mm toward the object for close focus. Its most object-side surface (S10) is concave toward the object, which the patent notes (¶0046) facilitates coma correction as the group translates.

- **G3 (negative, f = −279.1 mm):** The fixed rear group, subdivided into front subgroup 3F (L11, positive) and rear subgroup 3R (L12+L13 cemented doublet plus L14 singlet, net negative). Between L13 and L14 lies a strongly curved air space forming a negative air lens Gnr (f ≈ −29.5 mm). G3's negative power compresses the back focal distance (BFD/EFL ≈ 0.20) and provides field-flattening correction. The two aspherical surfaces of the L11 double-asphere (XA element) reside here for high-order aberration correction near the image end of the system.

The total optical track is 123.8 mm for an 82.45 mm EFL, giving a track-to-focal-length ratio of 1.50. While this is not a telephoto in the strict sense (where total track < EFL), the negative rear group G3 substantially compresses the back focal distance: BFD ≈ 16.4 mm, or only 0.20× the focal length. This BFD compression is well-suited to the short 18 mm E-mount flange distance, allowing the rear element to sit close to the sensor without mechanical interference.

---

## Element-by-Element Analysis

### L1 — Positive Meniscus, convex to object

nd = 1.92286, νd = 20.9. Glass: S-NPH2 (OHARA) — ultra-high-index dense flint. f = +195.9 mm.

L1 is a high-index dense flint meniscus that serves as the front collector. Despite its very low Abbe number (extreme dispersion), its weakly positive power (f nearly 2.4× the system focal length) means its chromatic contribution is small. The choice of such a high refractive index (nd ≈ 1.92) allows the element to provide the needed converging action with gentle curvatures (R1 = 56.98, R2 = 79.67), reducing surface-induced higher-order aberrations. The meniscus shape (both radii positive, R1 < R2, convex toward object) steers the marginal ray inward without introducing excessive spherical aberration at f/1.4.

### L2 — Positive Meniscus, convex to object (ED)

nd = 1.49700, νd = 81.6. Glass: S-FPL51 (OHARA) — ED fluorophosphate crown. f = +157.1 mm.

L2 is the first of two ED elements in the design. S-FPL51 is the workhorse ED glass of modern Japanese lens design, offering anomalous partial dispersion (positive ΔPgF) that corrects secondary spectrum. Placed immediately behind L1, L2 forms a widely separated air-spaced achromat with L1, where the high-dispersion L1 and low-dispersion L2 work together to achromatize the front group. The low refractive index of S-FPL51 necessitates steeper curvatures (R1 = 58.40, R2 = 221.45) to achieve its focal length, but its position early in the system — where beam diameters are large — makes its aberration-correcting contributions significant.

### L3 — Positive Meniscus, convex to object (ED)

nd = 1.53775, νd = 74.7. Glass: S-FPM3 (OHARA) — ED phosphate crown. f = +101.1 mm.

L3 is the second ED element and provides the strongest positive power in G1. S-FPM3 is a moderate-index, high-Abbe phosphate crown that complements S-FPL51 in the chromatic correction strategy. Where L2 provides secondary-spectrum correction via anomalous partial dispersion, L3 adds substantial converging power with low primary chromatic contribution. The pair L2+L3 together constitute the low-dispersion positive core of G1.

### L4 — Negative Meniscus, convex to object

nd = 1.85451, νd = 25.2. Glass: S-TIH53 (OHARA) — dense titanium flint. f = −45.9 mm.

L4 is the final element of G1 and the strongest negative element in the front group. Its meniscus shape (R1 = 111.08, R2 = 28.80, both positive, with the steeper R2 facing the image) creates a strongly diverging action on the marginal ray just before it reaches the stop. The patent identifies (¶0049) that placing a negative element at the image-side end of G1 facilitates coma correction during focusing. The high-dispersion S-TIH53 glass achromatizes against L2 and L3, completing the primary color correction of the front group.

The air gap between L4 and the stop (d = 10.63 mm) plus the stop-to-G2 gap (d9 = 18.19 mm at infinity) form the largest air space in the system, providing room for the aperture mechanism and establishing the separation between the fixed G1 and the moving G2.

### Aperture Stop (STO)

The stop is positioned between G1 and G2, at the rear of G1 in the patent's grouping. Its semi-diameter of 36.49 mm sets the entrance pupil size that produces the design f/1.46 aperture. The 11-blade circular diaphragm is located here. Sony's compact circular aperture unit is a key contributor to the lens's reduced size relative to its predecessor.

### L5 — Biconcave Negative (cemented front of 2A)

nd = 1.65412, νd = 39.7. Glass: S-NBH56 (OHARA) — niobium-containing barium heavy flint. f = −36.9 mm.

L5 is the first element of the focusing group G2 and the negative front half of the cemented doublet component 2A. Its biconcave shape (R1 = −54.13, R2 = 44.00) creates strong divergence at the entrance to G2. The concave-toward-object front surface is a deliberate design feature (¶0046) that the patent says facilitates coma correction during the focus travel. S-NBH56 is a moderate-index, moderate-dispersion glass — not itself a chromatic corrector, but positioned to balance the strong positive contributions of L7 and L10 that follow.

### L6 — Positive Meniscus, convex to object (cemented rear of 2A, 1× Asph)

nd = 1.85108, νd = 40.1. Glass: S-LAH97 (OHARA) — lanthanum-containing heavy crown. f = +64.0 mm.

L6 completes the cemented doublet 2A. Its rear surface (S12A, R = 218.67) carries the first aspherical correction in the system. The cemented pair L5+L6 has a combined focal length of −86.5 mm, making component 2A the weaker of the two negative components in G2.

The aspherical surface S12A (K = 0, A4 = +2.88×10⁻⁶) has a positive fourth-order coefficient on a weakly curved convex surface, which flattens the peripheral zone relative to the spherical base curve. This aspherical correction acts directly on the converging bundle immediately after it passes through the stop, primarily targeting spherical aberration and coma at f/1.4. Being on the rear surface of a cemented doublet — an air-contact asphere — it would be manufactured as a precision-ground or precision-glass-molded (PGM) surface on S-LAH97, a moldable glass.

This is one of Sony's two XA (extreme aspherical) elements, where XA denotes surface precision on the order of 0.01 μm to suppress onion-ring artifacts in bokeh.

### L7 — Biconvex Positive (component 2B)

nd = 1.95375, νd = 32.3. Glass: S-LAH79 (OHARA) — ultra-high-index lanthanum crown. f = +43.5 mm.

L7 is the strongest positive singlet in the entire system and the most powerful element in the focusing group. S-LAH79 provides the highest refractive index (nd ≈ 1.95) available in a production-grade lanthanum crown, which allows strong power (R1 = 47.11, R2 = −325.00) to be packed into a 6.62 mm thick element. This is critical because every gram in the focusing group affects AF speed — Sony claims the XD linear motors achieve AF up to 3× faster than the predecessor.

The biconvex shape distributes the refractive power across both surfaces, minimizing the surface contribution to spherical aberration per the bending-for-minimum-SA principle. L7 is the engine of the focusing group: its strong positive power means the intermediate group G2 converges the beam sufficiently that the rear group G3 need only provide mild negative correction.

### L8 — Biconvex Positive (cemented front of 2F)

nd = 1.59349, νd = 67.0. Glass: S-FPM2 class (OHARA, inferred — patent 593/670 vs. catalog 595/677). f = +104.3 mm.

L8 is the positive front half of the cemented doublet component 2F. The patent prescription lists nd = 1.59349, νd = 67.0 (6-digit code 593/670), which does not correspond exactly to any current OHARA catalog entry. The nearest OHARA glass is S-FPM2 (code 595/677, nd ≈ 1.595, νd ≈ 67.7), with a residual Δnd ≈ +0.002 — within the soft-match tolerance but not an exact identification. Hoya PCD51 (593/670) and HIKARI J-PSKH4 (593/670) are exact matches for the patent's values. Given Sony's established relationship with OHARA, S-FPM2 is the most likely production glass, with the patent prescription using slightly modified constants for IP reasons.

The glass belongs to the FPM (fluorophosphate) family, which carries positive anomalous partial dispersion. This means L8 contributes not just low primary chromatic aberration (by virtue of its high Abbe number), but also secondary-spectrum correction within the moving G2 — a more significant chromatic role than a conventional crown would provide. Paired with the high-dispersion S-TIH18 of L9, the L8+L9 doublet achieves local achromatization that stabilizes chromatic performance as G2 translates during focusing.

### L9 — Biconcave Negative (cemented rear of 2F)

nd = 1.77047, νd = 29.7. Glass: S-TIH18 (OHARA) — titanium-containing flint. f = −35.0 mm.

L9 completes the cemented doublet 2F. The L8+L9 pair has a combined focal length of −53.4 mm, making it the stronger of the two negative components in G2. The crown/flint pairing (S-FPM2 class + S-TIH18) provides local achromatization within the focus group, which is essential because the entire G2 translates during focusing — uncorrected chromatic aberration would vary with focus position.

### L10 — Biconvex Positive (component 2R)

nd = 1.80420, νd = 46.5. Glass: S-LAH51 (OHARA) — lanthanum crown. f = +49.8 mm.

L10 is the final element of the focusing group and the second-strongest positive singlet in G2. It works in concert with L7 to provide the net positive power (f_G2 = +70.1 mm) needed to converge the beam before it enters the fixed rear group G3. S-LAH51 is a well-balanced lanthanum crown — high index (nd = 1.80) with moderate dispersion (νd = 46.5) — allowing efficient light bending without excessive chromatic contribution.

The air gap between L10 and L11 (d19 = 3.43 mm at infinity, expanding to 14.60 mm at close focus) is the rear boundary of the focus travel. As G2 moves forward, this gap widens, and the gap ahead of G2 (d9) narrows by the same amount, conserving the overall track length exactly.

### L11 — Biconvex Positive, double asphere (XA element)

nd = 1.85108, νd = 40.1. Glass: S-LAH97 (OHARA) — lanthanum-containing heavy crown. f = +91.6 mm.

L11 is the first element of the fixed rear group G3 and the most important aberration-correcting element in the system. Both surfaces carry aspherical corrections (S20A and S21A), making this the second XA element.

Surface 20A (front, R = 112.28 mm) has A4 = −3.32×10⁻⁶ (negative fourth-order), which bends the peripheral zone of the converging surface more strongly than a sphere. This targets overcorrected spherical aberration from the fast beam delivered by G2.

Surface 21A (rear, R = −251.31 mm) has A4 = −2.88×10⁻⁶ (also negative fourth-order), which acts on the diverging surface to fine-tune the spherical and coma correction. The combination of aspherical corrections on both surfaces of the same element provides the designer with two independent degrees of freedom for balancing aberrations — a hallmark of Sony's XA approach, where surface precision is controlled to nanometer tolerances to eliminate the "onion ring" bokeh artifacts that arise from residual higher-order surface irregularities on conventional aspherics.

L11 uses the same glass (S-LAH97) as L6, which simplifies manufacturing logistics and indicates the designer valued this glass's moldability and optical properties highly enough to use it twice.

### L12 — Biconvex Positive (cemented front of rear doublet)

nd = 1.98613, νd = 16.5. Glass: S-NPH7 (OHARA) — ultra-high-index dense flint. f = +121.7 mm.

L12 is the most extreme glass in the design: nd ≈ 1.986 (nearly 2.0) with νd = 16.5, an extraordinarily dispersive dense flint. Its role is to provide positive power with maximum refractive effect per unit of curvature, allowing the cemented doublet L12+L13 to flatten the field while simultaneously providing achromatizing flint-glass dispersion. The weakly curved front surface (R = +410.0 mm) and more strongly curved rear junction (R = −168.2 mm) create a biconvex element dominated by its rear surface — functionally close to a plano-convex — that bends the beam with minimal higher-order contribution.

### L13 — Biconcave Negative (cemented rear of rear doublet)

nd = 1.59270, νd = 35.4. Glass: S-TIM8 (OHARA) — titanium flint. f = −58.2 mm.

L13 is the negative partner in the rear cemented doublet. The L12+L13 pair has a combined focal length of −114.3 mm, providing the negative power that — together with L14 — gives subgroup 3R its overall diverging character. The wide index gap at the cemented junction (Δnd = 1.98613 − 1.59270 = 0.394) creates exceptionally strong refraction at the internal surface, enabling tight control of lateral color without excessive element thickness.

### Air Lens Gnr

Between L13 (rear surface S24, R = 43.46 mm) and L14 (front surface S25, R = −47.08 mm), the air gap of 6.98 mm forms a strongly curved negative air lens with f ≈ −29.5 mm. The patent (¶0041–0043) describes this air lens as having its object-side surface concave toward the image and its image-side surface concave toward the object — essentially a biconcave air shape. The patent states that the air lens enables the exit pupil to be positioned further back, which facilitates miniaturization of the final lens group and is important for compatibility with the telecentric requirements of CMOS sensors.

The air lens Gnr satisfies conditional expression (6): |f_Gnr/f| = 0.358, within the specified range of 0.20–1.20.

### L14 — Negative Meniscus, convex to image

nd = 1.86966, νd = 20.0. Glass: S-NPH4 (OHARA) — dense flint. f = −139.9 mm.

L14 is the final optical element before the cover glass. Its meniscus shape (R1 = −47.08, R2 = −77.61, both negative) with both surfaces concave toward the object acts as a mild negative field flattener. The high-dispersion S-NPH4 glass contributes to the lateral color correction in the image periphery. The large air gap from L14 to the cover glass (d = 12.86 mm) provides clearance for the sensor's IR-cut filter stack and the physical back focal distance required by the E-mount flange specification (18 mm).

---

## Glass Identification and Selection

The design uses 13 distinct glass types across 14 elements (L6 and L11 share S-LAH97). All glasses except L8 resolve to OHARA catalog entries with Δnd ≤ 0.00025. L8's patent prescription (nd = 1.59349, νd = 67.0, code 593/670) has no exact OHARA catalog match; the nearest is S-FPM2 (595/677, Δnd ≈ +0.002).

| Element | nd | νd | Glass | Vendor | Class | Role |
|---|---|---|---|---|---|---|
| L1 | 1.92286 | 20.9 | S-NPH2 | OHARA | Dense flint | High-nd front collector |
| L2 | 1.49700 | 81.6 | S-FPL51 | OHARA | ED fluorophosphate | Primary + secondary spectrum correction |
| L3 | 1.53775 | 74.7 | S-FPM3 | OHARA | ED phosphate crown | Additional low-dispersion positive power |
| L4 | 1.85451 | 25.2 | S-TIH53 | OHARA | Ti-containing flint | Achromatizing negative in G1 |
| L5 | 1.65412 | 39.7 | S-NBH56 | OHARA | Nb-Ba heavy flint | Negative power in 2A doublet |
| L6, L11 | 1.85108 | 40.1 | S-LAH97 | OHARA | La heavy crown | XA asphere substrate (×2) |
| L7 | 1.95375 | 32.3 | S-LAH79 | OHARA | Ultra-high-nd La crown | Main positive power in G2 |
| L8 | 1.59349 | 67.0 | S-FPM2 class | OHARA (inferred) | Phosphate crown (FPM) | Crown partner in 2F doublet; anomalous dispersion |
| L9 | 1.77047 | 29.7 | S-TIH18 | OHARA | Ti-containing flint | Flint partner in 2F doublet |
| L10 | 1.80420 | 46.5 | S-LAH51 | OHARA | La crown | Rear positive in G2 |
| L12 | 1.98613 | 16.5 | S-NPH7 | OHARA | Ultra-high-index dense flint | Extreme-nd positive in rear doublet |
| L13 | 1.59270 | 35.4 | S-TIM8 | OHARA | Ti flint | Negative partner in rear doublet |
| L14 | 1.86966 | 20.0 | S-NPH4 | OHARA | Dense flint | Final field flattener |

**Cover glass (GC):** nd = 1.51680, νd = 64.2 → S-BSL7 (OHARA), equivalent to N-BK7 (Schott).

The chromatic correction strategy rests on three pillars. First, the two ED elements L2 (S-FPL51, νd = 81.6) and L3 (S-FPM3, νd = 74.7) in G1 provide the anomalous partial dispersion needed for secondary spectrum correction. These correspond to Sony's marketed "2 ED glass elements." Second, the focusing group G2 contains its own internal achromatization via the crown/flint doublet L8+L9, where L8 (S-FPM2 class, νd = 67.0) belongs to the FPM fluorophosphate family and likely contributes positive anomalous partial dispersion, stabilizing both primary and secondary chromatic performance as the group translates during focusing. Third, the rear doublet L12+L13 with its extreme index gap (Δnd = 0.394) controls lateral color in the image periphery.

The use of three ultra-high-index flint glasses — S-NPH2 (nd = 1.923), S-NPH7 (nd = 1.986), and S-NPH4 (nd = 1.870) — at positions L1, L12, and L14 is a distinctive signature of this design. These glasses allow strong optical power at each position with manageable curvatures, reducing the total element count and track length. The tradeoff is high dispersion (νd < 21 for all three), which must be compensated by the ED and crown elements elsewhere in the system.

---

## Focus Mechanism

The lens uses internal group focusing. During focus from infinity to close (846 mm, or approximately 0.85 m):

- **G1 (L1–L4 + Stop):** Fixed relative to the image plane.
- **G2 (L5–L10):** Translates 11.17 mm toward the object as a rigid unit.
- **G3 (L11–L14):** Fixed relative to the image plane.

| Parameter | Infinity | Close (846 mm) |
|---|---|---|
| Object distance (d0) | ∞ | 722.07 mm |
| d9 (Stop to G2 front) | 18.19 mm | 7.02 mm |
| d19 (G2 rear to G3 front) | 3.43 mm | 14.60 mm |
| G2 travel | — | 11.17 mm forward |

The focus travel is exactly conserved (Δd9 + Δd19 = 0), confirming rigid-body motion of G2 with no internal group separations changing. This single-group internal focus approach means the moving mass consists of only 6 elements (L5–L10), which enables the XD linear motors to achieve the claimed 3× AF speed improvement over the predecessor's DDSSM system. The patent notes (¶0089) that this configuration — with both the front and rear groups stationary — minimizes aberration variation across the focus range, particularly for coma and field curvature.

The drive mechanism is Sony's XD (extreme dynamic) linear motor, with two motors operating in parallel for rapid acceleration and deceleration. The lens supports continuous AF tracking at up to 120 fps with compatible bodies such as the Sony α9 III.

---

## Aspherical Surfaces

The design has three aspherical surfaces on two elements, corresponding to Sony's "2 XA elements":

- **Surface 12A** — rear surface of L6 (cemented rear of doublet 2A)
- **Surface 20A** — front surface of L11 (front of subgroup 3F)
- **Surface 21A** — rear surface of L11 (rear of subgroup 3F)

All three surfaces use the standard even-order aspheric equation with K = 0 (spherical base conic):

$$Z(h) = \frac{h^2/R}{1 + \sqrt{1 - (1+K)(h/R)^2}} + A_4 h^4 + A_6 h^6 + A_8 h^8 + A_{10} h^{10} + A_{12} h^{12} + A_{14} h^{14} + A_{16} h^{16}$$

### Aspherical Coefficients

| Coefficient | S12A (L6 rear) | S20A (L11 front) | S21A (L11 rear) |
|---|---|---|---|
| R (mm) | 218.667 | 112.275 | −251.309 |
| K | 0 | 0 | 0 |
| A4 | +2.87645×10⁻⁶ | −3.31585×10⁻⁶ | −2.88127×10⁻⁶ |
| A6 | +1.79055×10⁻⁹ | +1.68587×10⁻¹¹ | −3.98961×10⁻⁹ |
| A8 | −7.16993×10⁻¹² | +1.86104×10⁻¹¹ | +5.20659×10⁻¹¹ |
| A10 | +2.33133×10⁻¹⁴ | −1.39458×10⁻¹³ | −2.65800×10⁻¹³ |
| A12 | +3.45355×10⁻¹⁷ | +4.48630×10⁻¹⁶ | +6.89388×10⁻¹⁶ |
| A14 | −3.79047×10⁻¹⁹ | −8.18800×10⁻¹⁹ | −9.35107×10⁻¹⁹ |
| A16 | +6.33165×10⁻²² | +8.21856×10⁻²² | +6.49146×10⁻²² |

### Correction Roles

**S12A (L6 rear):** Positive A4 on a weakly convex surface (R = +218.7 mm) — the aspherical departure bends the rim zone outward relative to the sphere, effectively under-correcting the marginal ray at this surface. This counteracts the overcorrected spherical aberration contributed by the preceding elements and the strong curvature of L7, which follows immediately after. Being the only asphere in the focusing group, S12A is critical for maintaining spherical aberration balance as G2 translates. Its position just past the stop also gives it effective leverage over off-axis coma.

**S20A (L11 front):** Negative A4 on a moderately curved convex surface (R = +112.3 mm) — the aspherical departure flattens the peripheral zone. The extremely small A6 coefficient (1.69×10⁻¹¹, three orders of magnitude below A4) indicates the departure is dominated by the fourth-order term, producing a smooth, well-controlled correction profile. This surface acts on the converging beam as it enters G3, primarily correcting residual spherical aberration and sagittal coma that survive through G2.

**S21A (L11 rear):** Negative A4 on a weakly concave surface (R = −251.3 mm) — similar to S20A but on the exit surface, this asphere provides a second independent correction parameter. The larger A6 coefficient (−3.99×10⁻⁹) adds a meaningful sixth-order correction component, which targets higher-order aberrations (higher-order spherical and oblique spherical aberration) that the fourth-order-dominated S20A cannot reach alone.

The double-asphere on L11 is the defining feature of the XA approach: by placing two aspherical surfaces on a single element with extremely tight manufacturing tolerances, the designer gains independent control over both the wavefront shape and its slope across the full aperture, enabling the "onion ring-free" bokeh that Sony markets as a hallmark of the G Master line.

---

## Conditional Expressions

The patent defines a series of conditional expressions governing the power distribution. Example 2 satisfies all of them:

| Expression | Formula | Value | Specified Range | Status |
|---|---|---|---|---|
| (1) | \|f2A/f\| | 1.049 | 0.40 – 2.60 | ✓ |
| (2) | \|f2F/f\| | 0.647 | 0.20 – 2.20 | ✓ |
| (3) | f2B/f | 0.528 | 0.10 – 0.90 | ✓ |
| (4) | f2R/f | 0.604 | 0.20 – 0.80 | ✓ |
| (5) | f/f1 | 0.425 | 0.31 – 2.30 | ✓ |
| (6) | \|fnr/f\| | 0.358 | 0.20 – 1.20 | ✓ |

Where: f = 82.45 mm (system), f1 = +193.9 mm (G1), f2A = −86.5 mm (component 2A), f2B = +43.5 mm (component 2B), f2F = −53.4 mm (component 2F), f2R = +49.8 mm (component 2R), fnr = −29.5 mm (air lens Gnr).

---

## Petzval Sum and Field Curvature

The surface-by-surface Petzval sum across all 26 optical surfaces is +0.001476 mm⁻¹, yielding a Petzval radius of −677 mm. The ratio of Petzval radius to focal length is approximately −8.2, indicating a very well-corrected (flat) Petzval surface. This exceptional flatness is achieved through the strongly negative air lens Gnr and the positive-positive-negative group power distribution, which naturally drives the Petzval sum toward zero by placing negative power in the rear group where beam heights are moderate. A flat Petzval surface is essential for a portrait lens intended for use with high-resolution full-frame sensors, where field curvature would otherwise degrade corner sharpness.

---

## Verification Summary

All paraxial quantities were independently verified by Python y-nu ray trace against the patent's published values:

| Quantity | Computed | Patent | Δ |
|---|---|---|---|
| System EFL | 82.47 mm | 82.45 mm | 0.02 |
| Total track L | 123.82 mm | 123.83 mm | 0.01 |
| G1 focal length | +193.94 mm | +193.93 mm | 0.01 |
| G2 focal length | +70.10 mm | +70.09 mm | 0.01 |
| G3 focal length | −279.14 mm | −279.13 mm | 0.01 |
| Focus travel conservation | 0.0000 mm | 0 (exact) | 0.00 |
| Close focus distance | 845.9 mm | 846 mm | 0.1 |

Glass identifications resolve to OHARA catalog entries with Δnd = 0.00000 for all elements except L8 (S-FPM2 class, Δnd ≈ +0.002; patent code 593/670 vs. catalog 595/677 — see Glass Identification section for details).

---

## Sources

1. WO 2025/239028 A1, "Imaging Optical System and Imaging Device," Sony Group Corporation, published November 20, 2025. Example 2 (Tables 6–10, Figure 6).
2. Sony Electronics, "FE 85mm F1.4 GM II" product page and specifications (SEL85F14GM2), announced August 28, 2024.
3. OHARA Inc., *Optical Glass Catalog*, current edition — glass identifications for S-NPH2, S-FPL51, S-FPM3, S-TIH53, S-NBH56, S-LAH97, S-LAH79, S-TIH18, S-LAH51, S-NPH7, S-TIM8, S-NPH4, S-BSL7.
4. Hoya Corporation, *Glass Cross Reference Index* — cross-reference for PCD51 (593/670) to OHARA S-FPM2 (595/677).
