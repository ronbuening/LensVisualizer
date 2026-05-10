# PANASONIC LEICA DG SUMMILUX 9mm F1.7 ASPH — Optical Analysis

## Patent Reference and Design Identification

**Patent:** US 2023/0367186 A1, "Imaging Optical System, Image Capture Device, and Camera System."
**Applicant:** Panasonic Intellectual Property Management Co., Ltd., Osaka (JP).
**Inventors:** Yuka Ikegami (Hyogo), Takahiro Kitada (Osaka), Kunio Dohno (Osaka).
**Filed:** May 2, 2023. **Published:** November 16, 2023. **Priority:** JP 2022-080128, filed May 16, 2022.

**Embodiment used:** First Example of Numerical Values (Tables 1A–1F), corresponding to the first embodiment illustrated in FIG. 1A.

The following convergent evidence identifies Example 1 as the production Panasonic Leica DG Summilux 9mm F1.7 ASPH (H-X09):

1. **Element and group count.** 12 elements in 9 groups — matches the production specification exactly.
2. **Special-element count.** 2 aspherical lenses (L2 and L9, each with two aspherical surfaces), 2 ED lenses (L3 and L8, both S-FPL51), and 1 UHR lens (L7, S-LAH79, $n_d = 2.001$) — matches the marketing description of "2 ASPH, 2 ED, 1 UHR."
3. **Focal length.** Patent EFL = 9.347 mm; production focal length 9 mm.
4. **Aperture.** Patent F/1.77; production maximum aperture F/1.7.
5. **Image circle.** Patent image height $Y = 10.0$ mm ($2Y = 20.0$ mm), consistent with the Micro Four Thirds image circle (sensor diagonal 21.6 mm).
6. **Field of view.** Patent half-angle 49.82°, yielding a diagonal FOV of approximately 99.6° — matching the production specification of 100°.
7. **Focus mechanism.** Inner focus via G2 (two elements), with G1 and G3 fixed — consistent with the production lens's linear-motor inner-focus system.
8. **Patent timing.** Priority date May 2022; the H-X09 was announced in May 2022 and released mid-2022, placing the patent filing contemporaneously with the product launch.

## Optical Architecture

The Panasonic Leica DG Summilux 9mm F1.7 is a **retrofocus wide-angle** design with a positive–negative–positive three-group layout. The overall structure is:

- **G1 (positive, EFL ≈ +6.73 mm):** The main imaging group, comprising 9 elements in 7 air-separated sub-groups. G1 itself is divided into two sub-lens groups:
  - **G1A (negative, EFL ≈ −24.76 mm):** Six elements (L1–L6) arranged before the aperture stop. This is the negative front group characteristic of a retrofocus layout, responsible for extending the back focal distance beyond the focal length.
  - **Aperture stop A.**
  - **G1B (positive, EFL ≈ +14.13 mm):** Three elements (L7–L9) arranged after the aperture stop. This positive relay group converges the diverged beam from G1A toward the focus group.
- **G2 (negative, EFL ≈ −24.17 mm):** The focus group. Two elements (L10–L11), UV-bonded. Moves toward the image during focusing from infinity to close-object distance. G2's negative power enables compact inner focusing with minimal aberration shift.
- **G3 (positive, EFL ≈ +40.18 mm):** A single biconvex field-correcting element (L12), fixed relative to the image plane. Contributes positive power and helps flatten the field at the sensor.

The retrofocus ratio is $\mathrm{BFD}/\mathrm{EFL} = 15.63/9.35 = 1.67$, confirming a strongly retrofocus configuration. This is essential for Micro Four Thirds mirrorless cameras, which require a flange distance of approximately 20 mm while the focal length is only 9 mm. The total track from the front vertex to the image plane is approximately 71.0 mm ($\mathrm{TL}/\mathrm{EFL} \approx 7.6$), typical of fast ultra-wide-angle retrofocus designs.

The Petzval sum of the system is $+0.00666\;\mathrm{mm}^{-1}$, corresponding to a Petzval radius of approximately 150 mm — well-corrected for a 9 mm focal length. The three bonded doublets (L4+L5, L7+L8, L10+L11), with their paired high- and low-dispersion glasses, are the primary chromatic correctors, while the system-wide power distribution across all surfaces keeps the Petzval sum low across the 100° field of view.

## Element-by-Element Analysis

### L1 — Negative Meniscus, convex to object

$n_d = 1.80420$, $\nu_d = 46.5$. Glass: S-LAH65V (OHARA). $f = -32.6$ mm.

L1 is the first element of the negative front group G1A. Its strong negative meniscus form ($R_1 = +21.52$, $R_2 = +11.50$) is deeply curved and concave toward the image. Positioned at the extreme front of the system where the marginal ray height is modest but the chief ray height is at its maximum (~15.4 mm at full field), L1 primarily refracts the wide-angle chief ray bundle inward. The lanthanum-heavy high-index glass ($n_d = 1.804$) keeps surface curvatures moderate despite the strong negative power, limiting higher-order surface contributions. This element sets the divergence that ultimately produces the retrofocus back focal distance.

### L2 — Negative Meniscus, convex to object (2× Asph)

$n_d = 1.53380$, $\nu_d = 55.6$. Glass: L-BSL7 (OHARA) — precision glass mold (PGM) glass. $f = -48.1$ mm.

L2 is the first of the two aspherical elements in the design. Both surfaces (S3 and S4) carry aspherical profiles with significant conic constants ($K_3 = -0.414$, $K_4 = -0.748$, both prolate ellipsoids) and higher-order polynomial terms through $A_{12}$. L-BSL7 is an OHARA L-series low-softening-point glass formulated specifically for precision glass molding, enabling complex aspherical profiles on both surfaces.

The front surface (S3) has a moderate prolate ellipsoid ($K = -0.414$) with the dominant polynomial contributions from $A_4$ and $A_8$. At 80% of the estimated marginal ray height, the aspherical departure from a sphere reaches approximately −336 µm (flatter than the base sphere), rising steeply to over −3 mm at the full clear aperture. This surface primarily corrects coma and astigmatism generated by the first meniscus L1.

The rear surface (S4) has a stronger prolate ellipsoid ($K = -0.748$) that extends the usable aperture well beyond the spherical radius limit of 6.67 mm — the conic form permits ray heights up to approximately 13.3 mm before the sag becomes undefined. At 70% of the estimated clear aperture, the departure already exceeds −930 µm. The $A_8$ term dominates the polynomial departure at moderate heights, with $A_{10}$ providing a compensating positive contribution. This surface carries the heaviest aspherical correction burden in the G1A subgroup, managing the severe oblique spherical aberration and distortion characteristic of fast retrofocus wide-angle designs.

The patent identifies L2 as the lens L1A2 — the second of three consecutive negative lenses at the front of G1A (¶0045). Its thickness-ratio relationship with L1 (L1A1) and L3 (L1A3) is governed by Inequalities (1)–(3), which constrain the relative thicknesses to balance manufacturability against aberration correction ($\mathrm{DL1A2}/\mathrm{DL1A1} = 1.92$; $\mathrm{DL1A2}/\mathrm{DL1A3} = 3.13$).

### L3 — Negative Meniscus, convex to object (ED)

$n_d = 1.49700$, $\nu_d = 81.6$. Glass: S-FPL51 (OHARA) — ED fluorophosphate. $f = -35.5$ mm.

L3 is the first ED element and the third consecutive negative lens in G1A. S-FPL51 is a fluorophosphate crown with extremely low dispersion ($\nu_d = 81.6$) and anomalous partial dispersion, making it the primary chromatic corrector in the front group. Despite its negative power ($f = -35.5$ mm), the low dispersion means L3 introduces comparatively little chromatic aberration — the key design benefit. Its negative power instead contributes to the retrofocus divergence while its anomalous partial dispersion works to correct lateral chromatic aberration at wide field angles.

The patent discusses L3's role as L1A3 and constrains its Abbe number via Inequality (6): $\nu_d\mathrm{L1An} > 62$. L3 satisfies this comfortably at $\nu_d = 81.6$.

### L4 — Plano-Concave Negative (bonded to L5)

$n_d = 1.59349$, $\nu_d = 67.0$. Glass: S-PHM52 (OHARA). $f = -14.5$ mm.

L4 is the strongest negative element in G1A ($f = -14.5$ mm). Its front surface is flat ($R = \infty$) and its rear surface is concave ($R = +8.62$ mm), producing a plano-concave form. S-PHM52 is a phosphate crown with high Abbe number ($\nu_d = 67.0$), continuing the chromatic correction strategy established by L3.

L4 is bonded to L5 via UV-curable resin ($n_d = 1.56732$, $\nu_d = 42.8$). The resin layer is extremely thin (0.01 mm center thickness) and shares the same radius as both bonding surfaces ($R = 8.620$ mm), making it optically neutral at the interface. The patent identifies this cemented pair as a "bonded lens" (¶0036). The bonding eliminates two air–glass surfaces, reducing ghost reflections in a design where stray light management is critical at F/1.7.

The patent designates L4 as the negative lens L1$n$ and constrains its refractive index via Inequality (7): $1.4 < n_d\mathrm{L1}n < 1.65$. The value $n_d = 1.593$ is centrally placed within this range (¶0174–0177), balancing Petzval sum contribution against dispersion.

### L5 — Biconvex Positive (bonded to L4)

$n_d = 1.59270$, $\nu_d = 35.4$. Glass: S-TIM35 (OHARA). $f = +13.6$ mm.

L5 is the first positive element in the front group and forms the rear half of the L4+L5 bonded doublet. Its front surface shares the bonding radius with L4 ($R = +8.62$ mm) and its rear surface is very weakly curved ($R = -96.22$ mm), producing an asymmetric biconvex form that is nearly plano-convex — virtually all the positive power resides at the front (cemented) surface. With $f = +13.6$ mm, L5 is the strongest positive element in G1A.

S-TIM35 is a titanium flint with low Abbe number ($\nu_d = 35.4$), paired with the high-$\nu_d$ S-PHM52 of L4 to form a chromatic doublet. The $\Delta\nu_d = 31.6$ across the cemented interface provides strong achromatization. This is the principal achromatic pair in G1A, balancing the chromatic aberration introduced by the preceding three negative elements.

The patent designates L5 as the positive lens L1$p$ (¶0046) — the positive half of the G1A bonded pair. Its partner L4 is the negative lens L1$n$, constrained by Inequality (7): $1.4 < n_d\mathrm{L1}n < 1.65$. The L4 value of $n_d = 1.593$ sits centrally within this range, balancing Petzval contribution against dispersion.

### L6 — Biconvex Positive

$n_d = 1.75211$, $\nu_d = 25.0$. Glass: S-TIH4 (OHARA). $f = +51.5$ mm.

L6 is a weakly positive biconvex element ($R_1 = +52.55$, $R_2 = -144.27$) that closes the G1A subgroup. S-TIH4 is a dense titanium flint with very low Abbe number ($\nu_d = 25.0$), which at first appears counterintuitive in a corrected design. However, L6's weak power ($f = +51.5$ mm) means its chromatic contribution is modest, while its high refractive index ($n_d = 1.752$) provides surface curvature that helps correct residual higher-order aberrations — particularly tangential coma and astigmatism at wide field angles. Its position immediately before the stop allows it to act on the chief ray bundle with minimal vignetting.

### L7 — Negative Meniscus (UHR, bonded to L8)

$n_d = 2.00100$, $\nu_d = 29.1$. Glass: S-LAH79 (OHARA) — Ultra High Refractive (UHR). $f = -17.4$ mm.

L7 is the UHR element highlighted in the production marketing. S-LAH79 is an extremely high-index lanthanum-heavy dense flint ($n_d = 2.001$), among the highest-index glasses in commercial optical catalogs. Both surfaces are convex-to-object ($R_1 = +27.94$, $R_2 = +10.53$), forming a negative meniscus. Despite the strong negative power ($f = -17.4$ mm), the exceptionally high refractive index keeps surface curvatures moderate — the rear radius ($R_2 = 10.53$ mm) would need to be much steeper in a conventional glass to achieve equivalent power.

The UHR glass serves two primary roles. First, by reducing surface curvatures, it limits higher-order aberrations — especially oblique spherical aberration and coma — at the steep ray angles present immediately after the aperture stop. A conventional glass at $n_d \approx 1.7$ would require substantially steeper curvatures to achieve the same $-17.4$ mm focal length, amplifying higher-order surface contributions. Second, L7 provides the negative power needed to counterbalance the strong positive power of L8 while maintaining a compact diameter — the high index achieves this in less physical space than any conventional glass could. In situ, L7's Petzval contribution is modestly positive (+0.005 mm$^{-1}$), because the rear surface exits into the bonding resin ($n = 1.567$) rather than air; the overall Petzval management depends on the system-wide balance of all surface contributions, not on L7 alone. The patent constrains positive lenses in G1B via Inequality (10): $\nu_d\mathrm{L1Bp} > 65$, which L8 satisfies at $\nu_d = 81.6$.

L7 is bonded to L8 via the same UV-curable resin ($n_d = 1.567$, 0.01 mm thick) at a shared radius of $R = 10.531$ mm.

### L8 — Biconvex Positive (ED, bonded to L7)

$n_d = 1.49700$, $\nu_d = 81.6$. Glass: S-FPL51 (OHARA) — ED fluorophosphate. $f = +14.9$ mm.

L8 is the second ED element and the strongest positive element in G1B ($f = +14.9$ mm). It forms the rear half of the L7+L8 bonded doublet — a powerfully achromatic pair with $\Delta\nu_d = 52.5$ across the cemented interface (one of the largest Abbe-number differences in the design). The S-FPL51 fluorophosphate provides anomalous partial dispersion that works in concert with the S-LAH79 flint of L7 to suppress both primary and secondary chromatic aberration. This doublet is the principal color corrector for the axial beam, positioned symmetrically about the stop where it acts on both marginal and chief ray bundles.

The biconvex form ($R_1 = +10.53$, $R_2 = -20.11$) concentrates positive power predominantly at the front surface, which is the cemented interface with L7. The relatively thick center ($d = 6.11$ mm) allows the lens to carry strong curvature without excessive edge thinning at the large semi-diameter required post-stop.

### L9 — Biconvex Positive (2× Asph)

$n_d = 1.58575$, $\nu_d = 59.5$. Glass: L-LAL13 (OHARA) — precision glass mold (PGM) glass. $f = +17.6$ mm.

L9 is the second aspherical element, with both surfaces (S18 and S19) carrying aspherical profiles. Unlike L2's surfaces which use strong conic constants, both of L9's surfaces have $K = 0$ (spherical base), with all aspherical correction provided by the polynomial terms $A_4$ through $A_{12}$. L-LAL13 is an OHARA L-series lanthanum-aluminate glass designed for precision glass molding.

The front surface (S18, $R = +26.30$) has a dominant negative $A_4$ coefficient ($-4.21 \times 10^{-5}$) that flattens the surface periphery relative to the base sphere. The departure reaches approximately −467 µm at the estimated clear aperture, making it a moderately strong asphere. This surface primarily corrects residual spherical aberration and coma emerging from the G1B group.

The rear surface (S19, $R = -15.69$) has competing $A_4$ (positive, $+2.64 \times 10^{-5}$) and $A_6$ (negative, $-4.74 \times 10^{-7}$) terms that produce a sign reversal in the departure profile: positive (less concave) at moderate heights, transitioning to negative (more concave) at marginal heights. At 80% of the clear aperture, the $A_4$ and $A_6$ terms nearly cancel (+88 µm vs. −91 µm), leaving higher-order terms to shape the periphery. This balancing act controls the sagittal and tangential field curvature independently, a correction that spherical surfaces alone cannot achieve. By the full aperture, the departure reaches approximately −224 µm.

L9 is the last element of G1B and the last fixed element before the focus group G2. Its position at the convergence point of the beam — where marginal ray height is decreasing and chief ray height is increasing — makes it ideal for correcting field-dependent aberrations without disturbing the axial correction established by the L7+L8 doublet.

### L10 — Biconvex Positive (bonded to L11, focus group)

$n_d = 1.94595$, $\nu_d = 18.0$. Glass: S-NPH2 (OHARA). $f = +36.1$ mm.

L10 is the front element of the two-element focus group G2. S-NPH2 is a super-dense flint with extremely high refractive index ($n_d = 1.946$) and very low Abbe number ($\nu_d = 18.0$). The biconvex form ($R_1 = +41.50$, $R_2 = -187.39$) produces moderate positive power. As the focus group, G2 must maintain aberration balance as it translates along the axis; the weak positive power of L10 partially compensates the strong negative power of L11, yielding a net negative G2 ($f_{\mathrm{G2}} = -24.2$ mm).

L10 is bonded to L11 via UV-curable resin (0.01 mm, $n_d = 1.567$) at a shared radius of $R = -187.39$ mm — a nearly flat cemented interface, meaning the cementing primarily serves anti-reflection and mechanical purposes rather than providing significant chromatic correction at this interface. The patent designates L10 as the positive lens L2$p$ and constrains its refractive index via Inequality (8): $1.85 < n_d\mathrm{L2}p$. At $n_d = 1.946$, L10 satisfies this condition comfortably — the high index ensures adequate chromatic aberration compensation at the minimum object distance (¶0180–0182).

### L11 — Biconcave Negative (bonded to L10, focus group)

$n_d = 1.84666$, $\nu_d = 23.8$. Glass: S-TIH53 (OHARA). $f = -14.0$ mm.

L11 is the rear element of G2 and the strongest negative element in the focus group ($f = -14.0$ mm). Its biconcave form ($R_1 = -187.39$, $R_2 = +12.65$) concentrates all the negative power at the rear surface, which faces the image and has the steepest curvature in the group. S-TIH53 is a dense titanium flint ($n_d = 1.847$, $\nu_d = 23.8$) that, paired with the S-NPH2 of L10, creates a chromatic doublet with $\Delta\nu_d = 5.8$ — a deliberately small Abbe difference. This modest chromatism correction is appropriate because G2's primary function is focusing, not spectral correction; excessive chromatic sensitivity in the focus group would cause color shift with focus position.

The strong negative rear surface of L11 ($R = +12.65$ mm, concave toward image) is the element most sensitive to focus-position-dependent aberration variation. The patent constrains G2's axial extent via Inequality (15): $0.1 < \mathrm{DG2\_S}/\mathrm{LL} < 1.0$, where $\mathrm{DG2\_S}$ is the distance from G2 to the image plane and $\mathrm{LL}$ is the total track. Example 1 yields $\mathrm{DG2\_S}/\mathrm{LL} = 0.37$, centrally placed within the preferred range.

### L12 — Biconvex Positive (field corrector)

$n_d = 1.62299$, $\nu_d = 58.1$. Glass: S-PHM52Q (OHARA). $f = +40.2$ mm.

L12 is the sole element of G3, the fixed rear positive group. Its biconvex form ($R_1 = +157.22$, $R_2 = -29.57$) concentrates power at the rear surface, producing a weakly positive field-correcting lens. S-PHM52Q is a phosphate crown similar in composition to S-PHM52 (L4) but with slightly different thermal and molding properties (the "Q" suffix in OHARA's naming indicates a variant optimized for specific processing).

Positioned close to the image plane with a large air gap behind it ($d_{25} = 10.43$ mm to the cover glass), L12 acts primarily as a field flattener and telecentric corrector. Its weak positive power helps control the chief ray angle at the sensor — critical for Micro Four Thirds sensors with on-chip microlenses that are sensitive to non-telecentric illumination. The patent constrains G3's axial extent via Inequality (14): $0.01 < \mathrm{DG3}/\mathrm{LL} < 0.10$, with Example 1 yielding 0.038.

## Glass Selection

The design uses an all-OHARA glass palette of 10 distinct glasses across 12 elements, plus a UV-curable resin adhesive used in three bonded doublets.

| Element | Glass | $n_d$ | $\nu_d$ | Type | Role |
|---------|-------|-------|---------|------|------|
| L1 | S-LAH65V (OHARA) | 1.80420 | 46.5 | Lanthanum crown | High-index negative meniscus; controls surface curvature in the front group |
| L2 | L-BSL7 (OHARA) | 1.53380 | 55.6 | PGM borosilicate crown | Moldable glass for double-aspheric negative meniscus |
| L3 | S-FPL51 (OHARA) | 1.49700 | 81.6 | ED fluorophosphate | First ED element; lateral color correction in front group |
| L4 | S-PHM52 (OHARA) | 1.59349 | 67.0 | Phosphate crown | High-$\nu_d$ negative in cemented doublet with L5 |
| L5 | S-TIM35 (OHARA) | 1.59270 | 35.4 | Titanium flint | Low-$\nu_d$ positive partner to L4; achromatization |
| L6 | S-TIH4 (OHARA) | 1.75211 | 25.0 | Dense titanium flint | Weak positive; high-index higher-order correction |
| L7 | S-LAH79 (OHARA) | 2.00100 | 29.1 | UHR lanthanum dense flint | Ultra-high-index negative; compactness + Petzval |
| L8 | S-FPL51 (OHARA) | 1.49700 | 81.6 | ED fluorophosphate | Second ED element; axial color correction post-stop |
| L9 | L-LAL13 (OHARA) | 1.58575 | 59.5 | PGM lanthanum aluminate | Moldable glass for double-aspheric positive |
| L10 | S-NPH2 (OHARA) | 1.94595 | 18.0 | Super-dense flint | High-index positive in focus group doublet |
| L11 | S-TIH53 (OHARA) | 1.84666 | 23.8 | Dense titanium flint | Strong negative in focus group; field curvature |
| L12 | S-PHM52Q (OHARA) | 1.62299 | 58.1 | Phosphate crown | Field flattener / telecentric corrector |
| Resin (×3) | UV-curable adhesive | 1.56732 | 42.8 | Optical cement | Bonds L4+L5, L7+L8, L10+L11 |

The chromatic correction strategy employs two architecturally distinct achromatic pairs. In G1A, the L4 (S-PHM52, $\nu_d = 67.0$) + L5 (S-TIM35, $\nu_d = 35.4$) bonded doublet provides a $\Delta\nu_d = 31.6$ split oriented toward correcting lateral chromatic aberration in the wide-angle field. In G1B, the L7 (S-LAH79, $\nu_d = 29.1$) + L8 (S-FPL51, $\nu_d = 81.6$) bonded doublet provides a $\Delta\nu_d = 52.5$ split — the largest in the design — oriented toward axial chromatic correction at the aperture stop. The two S-FPL51 elements (L3 and L8), positioned on opposite sides of the stop, provide symmetric anomalous partial dispersion correction for both axial and lateral secondary spectrum.

The UHR glass S-LAH79 ($n_d = 2.001$) in L7 is particularly notable. As described by Panasonic's marketing literature, this element "achieves uniform image quality from the center to edges of the image while contributing to downsizing of the lens unit." From an optical design perspective, the extreme refractive index allows L7 to provide the necessary negative power for the post-stop achromatic doublet while keeping the surface curvatures tractable and the element physically thin — critical in the tightly packed G1B subgroup where the beam diameter is at its largest (SD ≈ 7–8 mm at S14–S16).

## Focus Mechanism

The lens employs **inner focus** via G2 (L10+L11), which translates along the optical axis while G1 and G3 remain fixed relative to the image plane.

| Parameter | Infinity | Close focus |
|-----------|----------|-------------|
| Object distance ($d_0$) | $\infty$ | 129.0 mm (from S1) |
| $d_{19}$ (G1B–G2 gap) | 1.2010 mm | 1.6129 mm |
| $d_{23}$ (G2–G3 gap) | 5.1035 mm | 4.6917 mm |
| EFL | 9.347 mm | 9.228 mm |
| F/# | 1.768 | 1.771 |
| Total track | 70.998 mm | 70.992 mm |

The total G2 travel is 0.412 mm (Δ$d_{19}$ = +0.412, Δ$d_{23}$ = −0.412 mm), and the total track changes by less than 0.01 mm — confirming a true internal focus mechanism with constant overall length. G2 moves toward the image when focusing from infinity to close-object distance.

The production lens specifies a minimum focusing distance (MFD) of 0.095 m from the sensor plane, achieving 0.25× magnification at that distance. The patent's close-focus state represents a longer working distance: $d_0 = 129.0$ mm from the first surface places the object approximately $129 + 71 = 200$ mm from the image plane, giving an MFD of roughly 0.20 m with a magnification of approximately 0.07×. The production lens therefore focuses substantially closer than what Example 1 documents, requiring greater G2 travel and tighter aberration control at short conjugates than the patent's published close-focus data describes. The focus system uses a linear motor for fast, silent autofocus operation.

## Aspherical Surfaces

Four aspherical surfaces are distributed across two elements, both of which use OHARA L-series precision-glass-molded (PGM) glasses:

- **L2 (L-BSL7):** Surfaces S3 and S4 — both with strong prolate-ellipsoid conic constants
- **L9 (L-LAL13):** Surfaces S18 and S19 — both with spherical bases ($K = 0$), corrected by polynomial terms only

The patent defines the aspherical sag equation as (¶0257):

$$Z(h) = \frac{h^2/r}{1 + \sqrt{1 - (1+\kappa)(h/r)^2}} + \sum A_n h^n$$

where $\kappa$ is the conic constant (equivalent to $K$ in the standard convention: $K = 0$ is spherical, $K = -1$ is paraboloid), $r$ is the vertex radius, and $A_n$ are the even-order polynomial coefficients.

### S3 (L2 front) — Prolate Ellipsoid Base

| Coefficient | Value |
|-------------|-------|
| $K$ | $-4.13601 \times 10^{-1}$ |
| $A_4$ | $-4.83155 \times 10^{-5}$ |
| $A_6$ | $+9.17529 \times 10^{-8}$ |
| $A_8$ | $-1.33747 \times 10^{-8}$ |
| $A_{10}$ | $+1.42533 \times 10^{-10}$ |
| $A_{12}$ | $-5.26229 \times 10^{-13}$ |

The prolate ellipsoid ($K = -0.414$) flattens the surface relative to the base sphere. At 70% of the clear aperture (~7 mm), the aspherical departure is approximately −336 µm; at the full aperture (~10 mm) it exceeds −3 mm. The $A_4$ and $A_8$ terms are the dominant polynomial contributors, both negative, reinforcing the conic flattening. This surface corrects oblique spherical aberration and field-dependent coma generated by the extreme chief ray angles at the front of the system.

### S4 (L2 rear) — Strong Prolate Ellipsoid Base

| Coefficient | Value |
|-------------|-------|
| $K$ | $-7.48255 \times 10^{-1}$ |
| $A_4$ | $-2.83442 \times 10^{-5}$ |
| $A_6$ | $+9.67121 \times 10^{-7}$ |
| $A_8$ | $-8.90069 \times 10^{-8}$ |
| $A_{10}$ | $+1.25287 \times 10^{-9}$ |
| $A_{12}$ | $-6.87122 \times 10^{-12}$ |

S4 has the strongest conic departure of any surface in the design ($K = -0.748$). The base sphere has $R = 6.667$ mm, and a conventional spherical surface would be limited to heights below this radius. The prolate-ellipsoid conic extends the valid aperture to approximately $|R|/\sqrt{1+K} = 13.3$ mm — nearly double the spherical limit — enabling the surface to handle the large beam diameter at this position. The polynomial terms alternate in sign with the $A_8$ term dominating at moderate heights and $A_{10}$ providing a compensating positive contribution. This surface carries the heaviest aspherical correction load in the system, managing distortion and astigmatism simultaneously.

### S18 (L9 front) — Spherical Base, Polynomial Correction

| Coefficient | Value |
|-------------|-------|
| $K$ | $0.0$ |
| $A_4$ | $-4.21347 \times 10^{-5}$ |
| $A_6$ | $+1.05188 \times 10^{-8}$ |
| $A_8$ | $-1.99866 \times 10^{-9}$ |
| $A_{10}$ | $-8.71399 \times 10^{-12}$ |
| $A_{12}$ | $+9.90029 \times 10^{-14}$ |

With $K = 0$, all departure comes from the polynomial terms. The $A_4$ term dominates overwhelmingly (contributing −141 µm at 80% aperture, versus ≤22 µm for all other terms combined), producing a smooth, monotonic flattening of the periphery. The departure reaches approximately −467 µm at the full clear aperture. This surface fine-tunes the residual spherical aberration after the G1B doublet and shapes the sagittal field curvature.

### S19 (L9 rear) — Spherical Base, Balanced Polynomial Correction

| Coefficient | Value |
|-------------|-------|
| $K$ | $0.0$ |
| $A_4$ | $+2.64024 \times 10^{-5}$ |
| $A_6$ | $-4.74134 \times 10^{-7}$ |
| $A_8$ | $-1.82935 \times 10^{-10}$ |
| $A_{10}$ | $-5.27974 \times 10^{-12}$ |
| $A_{12}$ | $-8.61303 \times 10^{-14}$ |

S19 is the most optically subtle asphere in the design. The positive $A_4$ (+88 µm at 80% height) and negative $A_6$ (−91 µm) terms nearly cancel at moderate heights, producing a departure profile that changes sign: slightly less concave than the base sphere at mid-zone, then more concave at the margin. This sign reversal enables independent control of the tangential and sagittal field curvature — a correction degree of freedom that no spherical surface can provide. By the full aperture, the departure reaches approximately −224 µm (more concave than the sphere), steepening the surface at the margin to redirect marginal rays for improved coma correction at the edge of the field.

The strategic placement of S19 as the last surface before the focus group means it shapes the beam just before it enters the moving G2 assembly, minimizing focus-dependent aberration variation.

## Conditional Expressions

The patent defines sixteen conditional inequalities (¶0136–0234) that constrain the design. Example 1 satisfies all of them. The key computed values are:

| Inequality | Expression | Preferred range | Example 1 value |
|------------|-----------|-----------------|-----------------|
| (1) | $\mathrm{DL1A2}/\mathrm{DL1A1}$ | $0.9 < x$ | 1.92 |
| (2) | $\mathrm{DL1A2}/\mathrm{DL1A3}$ | $1.0 < x$ | 3.13 |
| (3) | $\mathrm{DL1A2}/(\mathrm{DL1A1}+\mathrm{DL1A3})$ | $0.7 < x$ | 1.19 |
| (4) | $f/D$ | $0.3 < x < 1.0$ | 0.58 |
| (5) | $\mathrm{BF}/Y$ | $0.3 < x < 2.0$ | 1.56 |
| (6) | $\nu_d\mathrm{L1An}$ | $> 62$ | L3: 81.6, L4: 67.0 |
| (7) | $n_d\mathrm{L1}n$ | $1.4 < x < 1.65$ | 1.59 (L4) |
| (8) | $n_d\mathrm{L2}p$ | $1.85 < x$ | 1.95 (L10) |
| (9) | $\mathrm{Ls}/\mathrm{LL}$ | $0.5 < x$ | 0.59 |
| (10) | $\nu_d\mathrm{L1Bp}$ | $> 65$ | L8: 81.6 |
| (11) | $|f_{\mathrm{G1}}/f_{\mathrm{L1A2}}|$ | $0.08 < x < 0.3$ | 0.14 |
| (12) | $n_d\mathrm{L1A2}$ | $1.45 < x < 1.60$ | 1.53 (L2) |
| (13) | $\nu_d\mathrm{L1A2}$ | $50.0 < x < 65.0$ | 55.6 (L2) |
| (14) | $\mathrm{DG3}/\mathrm{LL}$ | $0.01 < x < 0.10$ | 0.038 |
| (15) | $\mathrm{DG2\_S}/\mathrm{LL}$ | $0.1 < x < 1.0$ | 0.37 |
| (16) | $\mathrm{DG1A1\_A2}/D$ | $0.1 < x < 1.0$ | 0.18 |

Inequalities (1)–(3) constrain the thickness ratios of the three front negative lenses (L1, L2, L3) to ensure manufacturability while maintaining aberration correction balance. Inequality (4) constrains the focal-length-to-front-group-length ratio, reflecting the compactness requirement for a fast ultra-wide retrofocus design. Inequality (5) constrains the back focus relative to the image height, ensuring adequate clearance for the shutter mechanism and sensor assembly of Micro Four Thirds camera bodies.

## Design Heritage and Context

The Panasonic Leica DG Summilux 9mm F1.7 fills a unique position in the Micro Four Thirds ecosystem as the widest fast prime available. Its 100° diagonal field of view at F/1.7 significantly exceeds what previous MFT wide-angle primes offered — the nearest comparisons being the Panasonic Leica DG Summilux 12mm F1.4 (84° FOV) and the Laowa 10mm F2 (96° FOV, manual focus).

The patent cites JP 2018-189733 A as prior art, which describes a wide-angle system with a similar negative-front-group / positive-rear-group architecture but without the specific G1A/G1B subdivision and three-consecutive-negative-front-element topology that characterizes the present design. The three consecutive negatives in G1A (L1–L3, with L1A1–L1A3 designation), governed by the thickness-ratio Inequalities (1)–(3), appear to be the principal design innovation claimed — this arrangement enables a wider field angle (100° vs. typical 84°–96° for the prior art) while maintaining F/1.7 speed and correcting distortion to levels acceptable for in-camera digital correction.

## Verification Summary

Paraxial ray-trace verification (ABCD transfer matrix, $y$-$\bar{n}u$ convention) confirms:

| Parameter | Computed | Patent | Deviation |
|-----------|---------|--------|-----------|
| System EFL | 9.3465 mm | 9.3466 mm | 0.001% |
| G1 EFL | 6.7250 mm | 6.72504 mm | < 0.01% |
| G2 EFL | −24.1652 mm | −24.16495 mm | < 0.01% |
| G3 EFL | 40.1767 mm | 40.17638 mm | < 0.01% |
| All 12 element FLs | — | — | < 0.01% |
| Total track | 70.999 mm | 70.998 mm | 0.001% |
| Petzval sum | 0.00666 mm$^{-1}$ | — | — |
| Petzval radius | 150.1 mm | — | — |
| BFD/EFL (retrofocus ratio) | 1.672 | — | — |

All element focal lengths match Table 1D to within rounding precision. Variable-gap conservation confirms that $\Delta d_{19} + \Delta d_{23} \approx 0$ (total track change < 0.01 mm), consistent with a true internal-focus mechanism.

## Sources

1. US 2023/0367186 A1 (Panasonic Intellectual Property Management Co., published November 16, 2023).
2. JP 2022-080128 (priority application, filed May 16, 2022).
3. Panasonic product page: "LEICA DG SUMMILUX 9mm / F1.7 ASPH. (H-X09)," Panasonic Corporation.
4. OHARA Inc., Optical Glass Catalog (nd/νd matching for S-LAH65V, L-BSL7, S-FPL51, S-PHM52, S-TIM35, S-TIH4, S-LAH79, L-LAL13, S-NPH2, S-TIH53, S-PHM52Q).
