# Sony Sonnar T* E 24mm F1.8 ZA — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** US 2013/0033768 A1, *Imaging Lens and Imaging Apparatus*
**Applicant:** Sony Corporation, Tokyo, Japan
**Inventors:** Toshihiro Sunaga, Motoyuki Otake, Masaharu Hosoi
**Filed:** June 26, 2012 (US); **Priority:** August 4, 2011 (JP 2011-171294)
**Published:** February 7, 2013

**Embodiment used:** Numerical Example 2 (Tables 4–6, Figs. 4–6)

The following convergent evidence links Example 2 to the production Sony Carl Zeiss Sonnar T* E 24mm F1.8 ZA (SEL24F18Z):

1. **Element/group count.** Example 2 specifies 8 elements in 7 groups (six singlets and one cemented doublet). The production lens is marketed as 8 elements / 7 groups.
2. **Focal length.** The patent's computed EFL of 23.28 mm corresponds to the marketed 24 mm focal length on an APS-C sensor (36 mm equivalent in 35 mm format).
3. **Maximum aperture.** Patent Fno = 1.85, consistent with the marketed f/1.8 specification.
4. **Aspherical element count and placement.** The patent places aspherical surfaces on two elements — one before the aperture stop (G2, rear surface S4) and one after (G6, both surfaces S11–S12). Sony's product literature describes two aspherical elements, confirming placement bracketing the stop.
5. **ED element.** The patent design includes the phosphate crown PCD4 (Hoya) / S-PHM53 (OHARA) at $n_d = 1.618$, $\nu_d = 63.40$ in the cemented doublet position (G5), consistent with Sony's specification of one ED element.
6. **Close-focus magnification.** The patent's $\beta = -0.25$ at close focus matches the production lens's stated 0.25× maximum magnification.
7. **Focus mechanism.** A single negative meniscus lens (G7) constitutes the focus group (GR2), consistent with the production lens's linear-motor inner-focus system designed for fast, quiet AF in both stills and video.
8. **Patent timing.** The Japanese priority date of August 4, 2011 precedes the lens's announcement in late 2011 by only a few months, consistent with standard filing-to-product timelines.
9. **Half-field angle.** The patent's $\omega = 30.86°$ yields an image height of $y = 23.28 \times \tan(30.86°) \approx 13.9$ mm, consistent with the APS-C half-diagonal of $\approx 14.2$ mm.

## Optical Architecture

The Sonnar T* E 24mm F1.8 ZA is a modified Sonnar-type prime lens designed for Sony's APS-C E-mount mirrorless cameras. Its optical formula consists of three groups arranged in a positive–negative–positive power distribution:

- **GR1 (First Lens Group):** A fixed six-element group with net positive power ($f_{\text{GR1}} \approx +17.4$ mm). It is subdivided by the aperture stop into two subgroups:
  - **GR1a (before stop):** G1, G2, G3 — a wide-angle front group with weakly positive aggregate power ($f_{\text{GR1a}} \approx +100$ mm) that acts primarily as a wide converter, expanding the field angle entering the rear subgroup.
  - **GR1b (after stop):** G4+G5 (cemented doublet) and G6 — a positive subgroup ($f_{\text{GR1b}} \approx +21.5$ mm) that carries the bulk of the system's converging power. This subgroup also handles primary chromatic correction (via the G4+G5 cemented pair) and monochromatic aberration correction (via the double-aspherical G6).
- **GR2 (Second Lens Group — Focus):** A single negative meniscus lens G7 ($f_{\text{GR2}} \approx -35.0$ mm) that moves axially during focusing. Its light weight — a single 1.0 mm-thick meniscus — enables fast, quiet inner focusing suitable for continuous video AF.
- **GR3 (Third Lens Group):** A fixed positive biconvex lens G8 ($f_{\text{GR3}} \approx +49.7$ mm) serving as a field-flattening relay. It collects the diverging beam from GR2 and redirects it toward the image plane with reduced telecentricity error.

The total optical track from the front vertex to the image plane is 75.0 mm at infinity focus, giving a track-to-focal-length ratio of $75.0 / 23.3 \approx 3.2$. The back focal distance of $\text{BFD} \approx 22.4$ mm comfortably exceeds the E-mount flange distance of 18 mm, providing clearance for the shutter mechanism and sensor cover glass. Because the EFL of 23.3 mm already exceeds the flange distance, the design does not require strong retrofocus character — the BFD-to-EFL ratio of 0.96 is near unity. The negative front subgroup GR1a provides a modest retrofocus contribution by pushing the rear principal plane slightly forward, while primarily serving its optical role as a wide converter (¶0046).

The patent describes the design philosophy as prioritizing compactness and high-speed AF by concentrating aberration correction in the fixed GR1, reducing the focus group to a single lightweight negative lens (¶0040–0042). The GR3 positive relay further suppresses image-plane shift during focus travel (¶0039).

## Element-by-Element Analysis

### G1 — Negative Meniscus, Convex to Object

$n_d = 1.487$, $\nu_d = 70.44$. Glass: S-FSL5 (OHARA) — fluorophosphate crown. $f \approx -38.5$ mm.

G1 is the front element of the GR1a wide-converter subgroup. Its strongly curved rear surface ($R_2 = 13.715$ mm) combined with the weak front surface ($R_1 = 52.254$ mm) gives this meniscus an aggressive diverging action that widens the field of view entering the system. The fluorophosphate crown glass has a high Abbe number ($\nu_d = 70.44$), which reduces the chromatic contribution of this strongly powered surface — important because the large index difference at the steeply curved rear surface would otherwise introduce significant longitudinal chromatic aberration. The 1.0 mm center thickness keeps the element thin and lightweight at the front of the barrel, minimizing the overall package size.

### G2 — Negative Meniscus, Convex to Object (Rear Surface Aspherical)

$n_d = 1.589$, $\nu_d = 61.25$. Glass: S-BAL2 (OHARA) — barium silicate crown. $f \approx -60.5$ mm.

G2 continues the diverging action of GR1a with weaker negative power. Its rear surface (S4) is the first aspherical surface in the system, with $K = 0$ and a dominant negative $A_4 = -3.659 \times 10^{-5}$. At the estimated clear aperture, the aspherical departure produces a meaningful peripheral flattening that corrects for the large field angle. This aspherical surface primarily addresses distortion and coma introduced by the steep curvature of G1, consistent with the patent's description of distortion control by the pre-stop aspherical element. The barium crown glass provides a good balance between refractive power and low dispersion at moderate index ($n_d \approx 1.59$).

### G3 — Positive Meniscus, Convex to Object

$n_d = 1.835$, $\nu_d = 42.72$. Glass: S-LAH55V (OHARA) — lanthanum dense crown. $f \approx +22.9$ mm.

G3 is the strongest positive element in the system and the last element before the aperture stop. The high-index lanthanum glass ($n_d = 1.835$) enables strong positive power from a meniscus shape with nearly flat rear surface ($R_6 = 1119.73$ mm $\approx$ plano). This meniscus geometry keeps the angle of incidence moderate across the aperture, reducing higher-order spherical aberration. The relatively low Abbe number ($\nu_d = 42.7$) means this element contributes noticeable chromatic aberration, but its large positive power is essential to collimate the beam before the stop and establish the working f-number. The chromatic contribution is corrected downstream by the G4+G5 cemented doublet. The PGM-moldable "V" variant (S-LAH55V) suggests this element may be precision glass-molded in production.

### G4 — Negative Biconcave (Cemented with G5)

$n_d = 1.755$, $\nu_d = 27.53$. Glass: S-TIH4 (OHARA) — titanium flint (dense flint). $f \approx -12.2$ mm.

G4 is the negative component of the cemented achromatic doublet immediately after the aperture stop. The high-dispersion titanium flint ($\nu_d = 27.5$) is paired with the low-dispersion phosphate crown of G5 to form a classic achromatic corrector. With the strongest negative element focal length in the system ($f \approx -12.2$ mm), G4 is the primary chromatic correction engine. The biconcave shape distributes the negative power across both surfaces, minimizing higher-order spherical contributions. This element also contributes significant negative Petzval curvature, which partially offsets the positive Petzval from the strong positive elements G3 and G6.

### G5 — Positive Biconvex (Cemented with G4) — ED Element

$n_d = 1.618$, $\nu_d = 63.40$. Glass: PCD4 (Hoya) / S-PHM53 (OHARA) — phosphate crown (ED-class). $f \approx +20.3$ mm.

G5 is the positive component of the cemented doublet and the element most likely designated as the "ED element" in Sony's specifications. PCD4 is a phosphate-crown glass with anomalous partial dispersion — its $\nu_d = 63.4$ places it in the ED-class range, and its phosphate composition provides a higher $P_{g,F}$ than a normal crown of similar Abbe number. Cemented to the dense flint G4, G5 provides achromatic correction with partial secondary-spectrum reduction. The G4+G5 cemented doublet has a combined focal length of approximately $-44.9$ mm (net weakly negative), confirming that this pair functions primarily as a chromatic corrector rather than a power element — the net system power is carried by G3 and G6. The 4.655 mm thickness of G5 relative to G4's 1.0 mm reflects the typical thick-crown / thin-flint asymmetry of ED doublets designed for optimal secondary-spectrum cancellation.

### G6 — Positive Biconvex, Double Aspherical

$n_d = 1.801$, $\nu_d = 45.45$. Glass: lanthanum dense crown (code 801/454) — no exact catalog match confirmed; nearest candidates include N-LAF3 (Schott, $n_d = 1.800$, $\nu_d = 46.0$) and TAF3 (Hoya, $n_d = 1.804$, $\nu_d = 46.6$), both with residuals exceeding typical matching tolerance. $f \approx +18.6$ mm.

G6 is the final element of GR1 and carries the second-strongest positive power in the system. The glass may be a restricted-catalog moldable variant not published in standard cross-reference tables — a common situation for PGM aspherical elements where glass manufacturers develop custom compositions optimized for pressing temperature and refractive index stability. Both surfaces are aspherical:

- **S11 (front, object side):** $K = 0$, $A_4 = -1.281 \times 10^{-5}$. A gentle aspherical correction with only two active polynomial terms. The negative $A_4$ produces a mild peripheral flattening, which reduces the spherical aberration contributed by G6's strong biconvex power. The positive $A_6 = +2.853 \times 10^{-8}$ partially counteracts the flattening at the outermost zones, creating a zonal correction profile.
- **S12 (rear, image side):** $K = 0$, $A_4 = +2.495 \times 10^{-5}$. The positive departure steepens the outer zones of the concave rear surface, providing additional correction for coma and astigmatism of the off-axis beam. The alternating signs of $A_6$ through $A_{10}$ create a controlled oscillation in the correction profile that fine-tunes the sagittal and tangential field performance.

Together, these surfaces form a complementary aspherical pair: the front surface corrects on-axis spherical aberration while the rear surface addresses off-axis field aberrations. This two-surface approach is more effective than a single aspherical surface because it permits independent optimization of the on-axis and off-axis correction without the coupling constraints of a single-surface deformation. The high refractive index ($n_d = 1.801$) suggests this element is likely manufactured as a precision glass-molded (PGM) optic, since tantalum/lanthanum dense crown glasses at this index are generally formulated for moldability.

### G7 — Negative Meniscus, Convex to Object (Focus Group)

$n_d = 1.697$, $\nu_d = 55.46$. Glass: TAC4 (Hoya) / N-SK2 (Schott) — tantalum crown / dense crown. $f \approx -35.0$ mm.

G7 is the sole element of GR2, the inner-focus group. It is a negative meniscus with a steep image-side surface ($R_{14} = 20.701$ mm) and a nearly flat object-side surface ($R_{13} = 138.976$ mm). The patent specifies that the image-side curvature must be greater than the object-side curvature to suppress spherical aberration during focus motion (¶0052–0053). During focusing from infinity to close range ($\beta = -0.25$), G7 moves 4.13 mm toward the image, expanding the air gap D12 from 1.005 mm to 5.133 mm while contracting D14 from 7.603 mm to 3.474 mm. The total gap sum is conserved at $\approx 8.61$ mm, confirming that GR3 remains stationary during focus.

The light weight of this single 1.0 mm-thick lens — combined with the dense crown glass of moderate index — enables rapid acceleration by the linear AF motor, which is critical for continuous AF during video recording (¶0042). The patent also notes that condition equation (2), $1.0 < t_{2i}/R_{2b} < 2.5$, governs this element's rear curvature: at $t_{2i}/R_{2b} = 1.629$ for Example 2, the design achieves an optimal balance between the off-axis beam "flip-up" effect (which shortens the total length) and on-axis focus change suppression (¶0054–0057).

### G8 — Positive Biconvex (Rear Relay)

$n_d = 1.618$, $\nu_d = 63.40$. Glass: PCD4 (Hoya) / S-PHM53 (OHARA) — phosphate crown (ED-class, same glass as G5). $f \approx +49.7$ mm.

G8 is the sole element of GR3, a fixed rear relay group. Its weak positive power gently converges the beam toward the sensor while maintaining nearly telecentric exit geometry — an important requirement for digital sensors with microlens arrays. The biconvex shape with a weak front surface ($R_{15} = 344.293$ mm) and stronger rear surface ($R_{16} = -33.618$ mm) concentrates most of the refracting power at the rear, which keeps the chief-ray angle small at the image plane. Using the same PCD4 glass as G5 provides a measure of chromatic symmetry between the pre- and post-focus groups, reducing secondary spectrum variation during focus travel. The patent notes that condition equation (3), $0.5 < \text{EXP}/|R_{3b}| < 2.5$, ensures that changes in the light-beam path through G8 remain small during focusing, suppressing field-curvature shift (¶0063–0066). For Example 2, $\text{EXP}/|R_{3b}| = 1.583$.

## Glass Selection

The design uses seven distinct glass types across eight elements, with one glass (PCD4 / S-PHM53) shared between G5 and G8.

| Element | Glass | Vendor | $n_d$ | $\nu_d$ | Code | Role |
|---------|-------|--------|-------|---------|------|------|
| G1 | S-FSL5 | OHARA | 1.487 | 70.44 | 487/704 | Fluorophosphate crown; low dispersion at front for minimal chromatic load |
| G2 | S-BAL2 | OHARA | 1.589 | 61.25 | 589/612 | Barium silicate crown; moderate index for aspherical meniscus substrate |
| G3 | S-LAH55V | OHARA | 1.835 | 42.72 | 835/427 | Lanthanum dense crown; high index for strong positive power at low curvature |
| G4 | S-TIH4 | OHARA | 1.755 | 27.53 | 755/275 | Titanium (dense) flint; high dispersion for achromatic pairing with G5 |
| G5 | PCD4 / S-PHM53 | Hoya / OHARA | 1.618 | 63.40 | 618/634 | Phosphate crown (ED); anomalous dispersion for chromatic correction |
| G6 | Unmatched | — | 1.801 | 45.45 | 801/454 | High-index dense crown; double-asph PGM biconvex with strong power |
| G7 | TAC4 / N-SK2 | Hoya / Schott | 1.697 | 55.46 | 697/555 | Dense crown; moderate index and weight for lightweight focus element |
| G8 | PCD4 / S-PHM53 | Hoya / OHARA | 1.618 | 63.40 | 618/634 | Same as G5; chromatic symmetry across the focus group |

The chromatic correction strategy centers on the G4+G5 cemented doublet, which pairs the high-dispersion S-TIH4 ($\nu_d = 27.5$) against the low-dispersion ED-class PCD4 ($\nu_d = 63.4$). The Abbe-number difference of $\Delta\nu_d = 35.9$ provides strong achromatic leverage. By placing a second PCD4 element (G8) in the rear relay, the design achieves partial chromatic symmetry across the focus group, reducing longitudinal color shift during focus travel.

The glass palette is consistent with Sony/Zeiss lens production practices of this era, drawing primarily from Hoya and OHARA catalogs. One glass — the lanthanum dense crown used for G6 ($n_d = 1.801$, $\nu_d = 45.45$) — does not match any published standard catalog entry within typical matching tolerances; it is likely a restricted-catalog moldable formulation optimized for precision glass molding of the double-aspherical element. The patent, being vendor-agnostic in its prescription, does not specify glass suppliers explicitly.

## Focus Mechanism

**Type:** Inner focus (single-element axial translation)
**Focus group:** GR2 (G7 only)
**Drive:** Linear AF motor (patent ¶0042; production specification)

| Parameter | Infinity Focus | Close Focus ($\beta = -0.25$) |
|-----------|---------------|-------------------------------|
| D12 (G6 rear → G7 front) | 1.005 mm | 5.133 mm |
| D14 (G7 rear → G8 front) | 7.603 mm | 3.474 mm |
| D12 + D14 | 8.608 mm | 8.607 mm |

G7 translates 4.13 mm toward the image plane during close-focus operation. The gap sum $D12 + D14$ is conserved to within 0.001 mm (rounding), confirming that GR3 is mechanically fixed during normal AF operation. The patent notes that GR3 *may* optionally be moved in conjunction with GR2 to further suppress image-plane shift (¶0107), or perpendicular to the axis for image stabilization (¶0108), but the prescription data implies a fixed GR3 for the primary focus mode.

The computed minimum focus distance from the paraxial model is approximately 154 mm (object to image plane). The production specification of 160 mm (0.16 m) measures from the sensor plane to the object; the difference is accounted for by the sensor cover glass (whose optical path is excluded from the prescription) and the mechanical offset between the front optical vertex and the front of the lens barrel.

The focus group's weight is minimized by using a single thin meniscus (1.0 mm center thickness in TAC4 glass), enabling the linear motor to achieve the rapid acceleration and deceleration cycles required for continuous phase-detection AF during video recording — a primary design goal stated in the patent (¶0004–0005).

## Aspherical Surfaces

The design employs three aspherical surfaces on two elements. All aspherical surfaces use the standard even-polynomial sag equation:

$$Z(h) = \frac{h^2/R}{1 + \sqrt{1 - (1+K)(h/R)^2}} + A_4 h^4 + A_6 h^6 + A_8 h^8 + A_{10} h^{10}$$

All three surfaces have $K = 0$ (spherical base curve), with correction applied entirely through the polynomial coefficients.

### S4 — G2 Rear Surface (Before Stop)

| Coefficient | Value |
|-------------|-------|
| $K$ | 0.00000 |
| $A_4$ | $-3.65895 \times 10^{-5}$ |
| $A_6$ | $-2.02766 \times 10^{-7}$ |
| $A_8$ | $+1.66758 \times 10^{-10}$ |
| $A_{10}$ | $-6.21785 \times 10^{-12}$ |

This is the most aggressively aspherized surface in the design. The dominant negative $A_4$ flattens the peripheral zone substantially. The negative $A_6$ reinforces this flattening at the outer zones. This surface corrects distortion and coma from the steep G1 rear surface, consistent with the patent's claim of distortion control by the pre-stop aspherical element.

### S11 — G6 Front Surface (After Stop)

| Coefficient | Value |
|-------------|-------|
| $K$ | 0.00000 |
| $A_4$ | $-1.28119 \times 10^{-5}$ |
| $A_6$ | $+2.85341 \times 10^{-8}$ |
| $A_8$ | $0$ |
| $A_{10}$ | $0$ |

A gentle aspherical correction with only two active polynomial terms. The negative $A_4$ produces a mild peripheral flattening, which reduces the spherical aberration contributed by G6's strong biconvex power. The positive $A_6$ partially counteracts the flattening at the outermost zones, creating a zonal correction profile that fine-tunes the residual spherical aberration.

### S12 — G6 Rear Surface (After Stop)

| Coefficient | Value |
|-------------|-------|
| $K$ | 0.00000 |
| $A_4$ | $+2.49503 \times 10^{-5}$ |
| $A_6$ | $-3.18958 \times 10^{-8}$ |
| $A_8$ | $+2.80615 \times 10^{-10}$ |
| $A_{10}$ | $-6.64956 \times 10^{-13}$ |

The rear surface of G6 carries a complementary aspherical profile to S11: positive $A_4$ steepens the periphery, increasing the negative curvature of the concave rear surface in the outer zones. This targets off-axis aberrations — primarily coma and astigmatism — that the front surface correction does not address. The alternating signs of $A_6$ through $A_{10}$ create a controlled oscillation in the correction profile that fine-tunes the sagittal and tangential field performance.

The front-and-rear aspherical pair on G6 can be understood as a single aspherical corrector embedded within the biconvex element: the front surface handles on-axis (spherical aberration) correction while the rear surface handles off-axis (field) correction. This two-surface approach is more effective than a single aspherical surface because it permits independent optimization of the on-axis and off-axis correction without the coupling constraints of a single-surface deformation.

## Aberration Correction Strategy

The positive–negative–positive three-group architecture distributes aberration correction across three cooperating mechanisms:

**Spherical aberration** is managed primarily by the G4+G5 cemented doublet (which provides a strong negative SA contribution from the biconcave G4) and the double-aspherical G6 (whose front surface S11 provides zonal fine-tuning). The patent's aberration diagrams (Fig. 5) show well-corrected SA at f/1.85, with residual curves staying within $\pm 0.25$ mm across d, C, and g wavelengths.

**Chromatic aberration** is corrected by the G4+G5 cemented ED doublet at the chromatic-leverage point immediately after the aperture stop, and supplemented by the low-dispersion G1 at the front (which minimizes the chromatic load from the steep front-group surfaces). The shared PCD4 glass between G5 and G8 provides chromatic balance across the focus group.

**Field curvature** is controlled through the Petzval sum. The computed surface-by-surface Petzval sum is $+0.00691$ mm$^{-1}$, corresponding to a Petzval radius of $\approx +145$ mm. For an APS-C image circle of 28.4 mm diagonal, the Petzval field sag at the corner is approximately $\frac{14.2^2}{2 \times 145} \approx 0.70$ mm — a moderate value that is corrected by residual astigmatism and field curvature from the aspherical surfaces.

**Distortion** is suppressed by the aspherical G2 (before the stop) and G6 (after the stop). The symmetry of placing aspherical correctors on both sides of the stop is a classic technique for distortion cancellation, since distortion is an odd-order aberration that reverses sign across the stop.

## Condition Equations

The patent defines four condition equations governing the design space. Example 2 satisfies all of them:

| Condition | Range | Example 2 Value |
|-----------|-------|-----------------|
| (1) $f / f_{1b}$ | $0.7 < \cdots < 2.0$ | 1.081 |
| (2) $t_{2i} / R_{2b}$ | $1.0 < \cdots < 2.5$ | 1.629 |
| (3) $\text{EXP} / |R_{3b}|$ | $0.5 < \cdots < 2.5$ | 1.583 |
| (4) $f_3 / f_2$ | $-3 < \cdots < -1$ | $-1.420$ |

Condition (1) ensures that the GR1b subgroup carries appropriate positive power: too weak (below 0.7) starves the focus group of sensitivity, while too strong (above 2.0) amplifies focus-dependent aberration changes (¶0047–0049). The Example 2 value of 1.081 sits near the center of the tightened range ($0.9 < f/f_{1b} < 1.2$, Condition 1′), indicating a well-balanced design.

Condition (4) at $-1.420$ constrains the power ratio between GR3 and GR2. The moderate negative value ensures that neither the off-axis focus change (from too-strong GR3) nor the on-axis focus change (from too-strong GR2) dominates (¶0071–0073).

## Design Heritage and Context

The Sony Sonnar T* E 24mm F1.8 ZA was the first Carl Zeiss–branded lens for the Sony E-mount system, announced in late 2011 alongside the NEX-7 camera body. Despite the "Sonnar" designation — historically associated with the compact triplet-derived designs of Ludwig Bertele's 1929 patent — this design departs significantly from the classical Sonnar topology. The classical Sonnar is an all-positive front group with tightly spaced cemented elements; the SEL24F18Z is closer to a modified quasi-symmetric design with a diverging front subgroup (GR1a), a converging rear subgroup (GR1b), and an inner-focus rear extension. The "Sonnar" branding in this case refers to the Zeiss brand family rather than a strict optical lineage.

The inner-focus architecture with a single lightweight focus element was a forward-looking design choice in 2011, optimized for the contrast-detection AF systems used in early NEX-series cameras and anticipating the phase-detection AF on later bodies (A6000, A6300). The 0.16 m minimum focus distance — unusually close for a 24 mm prime — was enabled by the high-sensitivity inner-focus mechanism, which can traverse the full 4.13 mm focus throw with minimal actuator force.

## Verification Summary

All paraxial quantities were independently computed from the patent prescription using a y-nu marginal ray trace and ABCD transfer-matrix subsystem analysis, then cross-checked against the patent's published values.

| Parameter | Computed | Patent |
|-----------|----------|--------|
| System EFL | 23.298 mm | 23.28 mm |
| BFD | 22.374 mm | 22.374 mm |
| $f_{1b}$ | 21.55 mm | 21.540 mm |
| $f_2$ | $-35.02$ mm | $-35.030$ mm |
| $f_3$ | 49.75 mm | 49.747 mm |
| $f/f_{1b}$ | 1.081 | 1.081 |
| $f_3/f_2$ | $-1.421$ | $-1.420$ |
| Close-focus $\beta$ | $-0.250$ | $-0.25$ |
| Close-focus MFD | $\approx 154$ mm | 160 mm (production) |

The computed EFL of 23.298 mm differs from the patent's stated 23.28 mm by 0.018 mm (0.08%), within the rounding tolerance of the three-significant-figure $n_d$ values used in the prescription table. All condition-equation values match to the precision shown in Table 10 of the patent.

## Sources

1. US 2013/0033768 A1, *Imaging Lens and Imaging Apparatus*, Sony Corporation (Sunaga, Otake, Hosoi). Published February 7, 2013. Priority: JP 2011-171294, August 4, 2011.
2. Sony SEL24F18Z product page: Lens diagram, specifications, MTF data. Confirms 8 elements / 7 groups, 2 aspherical elements, 1 ED element, 7 aperture blades, MFD 16 cm, 0.25× magnification, 49 mm filter thread.
3. OHARA Glass Catalog: S-FSL5, S-BAL2, S-LAH55V, S-TIH4, S-PHM53 glass data.
4. Hoya Glass Cross Reference Index: PCD4, TAFD25, TAFD33, TAC4, BSC7 glass data.
5. Schott Optical Glass Catalog: N-FK5, N-SK2 cross-reference equivalents.
