# Ricoh GR 18.3mm f/2.8 — Optical Design Analysis

*Companion to `RicohGR218mmf28.data.ts`*

**Patent:** US 2013/0321936 A1
**Inventor:** Kazuyasu Ohashi (Funabashi-shi, JP)
**Priority:** JP 2012-127431, June 4, 2012
**Filed:** May 31, 2013
**Assignee:** none printed (the inventor is the named applicant)
**Embodiment analyzed:** Example 3
**Production lens:** Ricoh GR (2013), Ricoh GR II (2015)  
**Note:** The publication lists the inventor as applicant and prints no organizational assignee; the data file therefore records no assignee. The design is Ricoh's, but ownership is not stated on the publication itself.

---

## 1. Identification and Context

US 2013/0321936 A1 discloses the optical design behind the Ricoh GR's fixed 18.3mm f/2.8 lens — the first GR-series lens designed for an APS-C image sensor. Example 3 is the embodiment that best matches the production specifications: 7 elements in 5 groups (per physical air-separated grouping), two aspherical elements, an 18.30mm focal length at f/2.81, and a half angle of view of 38.2° covering a 28.4mm image diagonal. The patent does not say which example went into production; Examples 1, 2, 4, 5 and 8 share the same 7/5 layout at about 18.3mm, so the choice of Example 3 is an attribution based on its exact 18.30mm focal length and its glass set. This corresponds to a sensor format of approximately 23.5 × 15.6 mm (APS-C), consistent with the Sony-derived 16.2 MP CMOS sensor used in both the Ricoh GR and GR II.

The lens was carried unchanged from the GR (April 2013) to the GR II (June 2015). The GR III (2019) introduced a redesigned 6-element/4-group lens, so this patent covers only the first two generations.

The patent describes the design as an "approximately-symmetric-type" wide-angle lens — a deliberate departure from the retrofocus architecture typical of digital wide-angle lenses. By balancing negative and positive power symmetrically about the aperture stop, the design achieves unusually compact overall dimensions while maintaining high aberration correction. The patent explicitly states that this power arrangement makes it "easy to correct comatic aberration, distortion, and lateral chromatic aberration" — characteristics that reviewers consistently praised in the production GR.

---

## 2. Lens Structure and Group Architecture

The patent defines four functional power groups (Groups I–IV), but the lens physically contains five air-separated groups when counted by air gaps. The discrepancy arises because the patent's "Group II" contains two air-separated sub-assemblies: a single negative lens and a cemented doublet. The manufacturer's published specification of "7 elements in 5 groups" uses the physical air-gap convention; the patent's four-group scheme describes the functional power arrangement.

The structure, front (object side) to rear (image side):

**Group I (negative):** Single negative meniscus lens (L1), with the concave surface facing the image side. This is the only element in the first air-separated group.

**Group II (positive):** Two sub-assemblies — a single biconcave negative lens (L2) whose strongly concave surface faces the object side (its rear surface, R = +200.4mm, is nearly flat), followed by an air gap of 0.20 mm, then a cemented doublet (L3+L4) with net positive power. This arrangement produces two physical air-separated groups (groups 2 and 3 in the manufacturer's convention) but functions as a single positive power group in the patent's scheme.

**Aperture stop (S):** Located in the air gap between Groups II and III, 1.50 mm after the rear surface of the cemented doublet and 1.00 mm before the front surface of Group III.

**Group III (positive):** A cemented doublet (L5+L6), consisting of a biconvex positive element cemented to a biconcave negative element (in that order from the object side). The rear surface of this group is concave — an important feature of the approximately-symmetric design.

**Group IV (weak):** A single negative meniscus lens (L7), with the concave surface facing the object side and the convex surface facing the image side. This group has the weakest refractive power of all four groups (|f₄| ≈ 240 mm vs. |f₁| ≈ 28 mm).

After Group IV, a parallel flat plate (F) represents the cover glass and/or infrared-cut filter of the image sensor, positioned so that its rear surface sits approximately 0.5 mm from the image plane. The Ricoh GR omits an optical low-pass (anti-aliasing) filter — a deliberate choice to maximize resolution at the expense of occasional moiré — so the parallel flat plate in the prescription represents only the IR-cut filter and sensor cover glass.

---

## 3. Surface Prescription (Example 3)

| Surface | R (mm) | d (mm) | nd | νd | Glass | Element |
|---------|--------|--------|-------|-------|-------|---------|
| 01 | 816.141 | 0.80 | 1.49710 | 81.56 | HOYA M-FCD1 | L1 front |
| 02* | 13.666 | 1.79 | 1.0 | — | air | L1 rear (asph) |
| 03 | −23.543 | 0.80 | 1.68893 | 31.16 | HOYA E-FD8 | L2 front |
| 04 | 200.425 | 0.20 | 1.0 | — | air | L2 rear |
| 05 | 15.416 | 0.80 | 1.84666 | 23.78 | HOYA FDS90 | L3 front |
| 06 | 9.513 | 2.34 | 1.88300 | 40.80 | HOYA TAFD30 | L3→L4 cement |
| 07 | −34.121 | 1.50 | 1.0 | — | air | L4 rear |
| STO | ∞ | 1.00 | 1.0 | — | air (stop) | — |
| 09 | 14.691 | 2.59 | 1.88300 | 40.80 | HOYA TAFD30 | L5 front |
| 10 | −9.087 | 0.89 | 1.68893 | 31.16 | HOYA E-FD8 | L5→L6 cement |
| 11 | 12.917 | 1.73 | 1.0 | — | air | L6 rear |
| 12 | −12.419 | 1.20 | 1.82080 | 42.71 | HOYA M-TAFD51 | L7 front |
| 13* | −13.832 | 12.756 | 1.0 | — | air | L7 rear (asph) |
| 14 | ∞ | 1.40 | 1.51680 | 64.20 | Filter | — |
| 15 | ∞ | 0.50 | 1.0 | — | air → image | — |

Surfaces marked * are aspherical (S02 and S13).

---

## 4. Computed Optical Parameters

All values computed via full surface-by-surface paraxial (y-nu) ray trace and ABCD matrix methods, verified against the patent's stated conditional expressions.

| Parameter | Computed | Patent stated |
|-----------|----------|---------------|
| System EFL (f) | 18.298 mm | 18.30 mm |
| F-number | 2.81 | 2.81 |
| Half angle of view (ω) | 38.05° (real chief ray to Y′ = 14.2mm) | 38.2° (patent) |
| Total track (L, S01 to image) | 30.30 mm | 30.30 mm (L/f = 1.656) |
| Lens thickness (D_T, S01 to S13) | 15.64 mm | 15.66 mm (D_T/f = 0.855) |
| BFD (air-equivalent, S13 to image) | 14.18 mm | — |
| Petzval sum | 0.00468 mm⁻¹ | — |
| Petzval radius | 213.7 mm | — |
| Maximum image height (Y') | 14.2 mm | 14.2 mm |
| Image diagonal | 28.4 mm | ~28.5 mm (APS-C) |

The paraxial half angle of view (arctan Y'/f = 37.8°) is less than the patent's stated 38.2°. An exact real-ray trace of the chief ray to the 14.2mm image height gives 38.05°, because the lens has about 1.5% barrel distortion at the corner (within the patent's statement that distortion stays at or below 2.0% in every example). The same trace puts the marginal-ray longitudinal spherical aberration at f/2.81 at about −0.003mm and the tangential focus within 0.07mm of the image plane out to full field. The telephoto ratio (L/f = 1.656) confirms the design is approximately-symmetric — longer than its focal length but substantially more compact than a typical retrofocus wide-angle (which would have L/f > 2).

**Group focal lengths (thick-lens ABCD):**

| Group | Focal length | Power character |
|-------|-------------|-----------------|
| Group I (L1) | −27.97 mm | Strong negative |
| Group II (L2, L3+L4) | +19.07 mm | Moderate positive |
| Group III (L5+L6) | +30.29 mm | Moderate positive |
| Group IV (L7) | −240.0 mm | Very weak negative |
| Groups I+II combined | +42.48 mm | Positive |
| Groups III+IV combined | +35.32 mm | Positive |

**Conditional expression verification:**

| Expression | Computed | Patent | Description |
|------------|----------|--------|-------------|
| f₁/f₄ | 0.117 | 0.117 | First/fourth group power balance |
| f₁₋₂/f₃₋₄ | 1.203 | 1.203 | Front/rear half power balance |
| f₁/f | −1.529 | −1.529 | First group power relative to system |
| r₂F/f | −1.287 | −1.287 | Group II front curvature ratio |
| r₃R/f | 0.706 | 0.706 | Group III rear curvature ratio |
| nd_p2-3 | 1.883 | 1.883 | Average nd of positive elements in II+III |
| Y'/f | 0.776 | 0.776 | Image height to focal length ratio |
| L/f | 1.656 | 1.656 | Total track ratio |
| D_T/f | 0.855 | 0.855 | Lens thickness ratio |
| r₂R/r₃F | −2.323 | −2.323 | Symmetry ratio across stop |

All computed values agree with the patent to within rounding of the last digit.

---

## 5. Glass Identification and Properties

The patent specifies five distinct glass types from the HOYA catalog. The HOYA naming convention provides significant information: the "M-" prefix denotes glasses developed specifically for precision glass molding (low glass transition temperature, Tg < 400°C), the "E-" prefix denotes eco-friendly (lead- and arsenic-free) glasses, "TAF" denotes tantalum-containing flint glasses, and "FCD" denotes fluoride crown glasses with anomalous partial dispersion.

### L1 — HOYA M-FCD1 (nd = 1.49710, νd = 81.56, Pg,F = 0.5388)

A moldable fluoride crown glass with very low refractive index and very high Abbe number. The "FCD" designation indicates a fluorophosphate crown with anomalous (positive) partial dispersion — the Pg,F value of 0.5388 lies well above the normal glass line, making this an APD glass. HOYA developed M-FCD1 specifically as a moldable equivalent of their conventional FCD1 glass, with a glass transition temperature low enough for aspherical surface molding. This is significant: L1 carries an aspherical surface (S02*), and the use of M-FCD1 means this asphere is a precision glass-molded optic, not a ground-and-polished element with a resin layer.

The six-digit glass code is **497/816**, placing it in the extreme fluoride crown region of the glass map — low index, ultra-low dispersion.

### L2 — HOYA E-FD8 (nd = 1.68893, νd = 31.16, Pg,F = 0.5989)

A dense flint glass with moderately high refractive index and low Abbe number. The "E-" prefix indicates an eco-glass formulation. The Pg,F value of 0.5989 sits slightly above the Schott normal line (dPgF = +0.0075), which is the ordinary position for a dense flint rather than an anomalous-dispersion feature. This same glass is used for L6 in the rear cemented doublet, creating a symmetric pair of flint elements about the aperture stop — consistent with the approximately-symmetric design philosophy.

Glass code: **689/312**.

### L3 — HOYA FDS90 (nd = 1.84666, νd = 23.78, Pg,F = 0.6191)

An extremely high-dispersion dense flint — one of the most dispersive optical glasses in the HOYA catalog. With νd < 25, this glass provides very strong chromatic dispersion per unit of refractive power. In the cemented doublet L3+L4, L3 acts as the high-dispersion negative element that, together with L4's positive power, enables achromatic correction within Group II. The very high dispersion of FDS90 means that only a thin element is needed to provide the necessary chromatic correction, keeping the doublet compact.

Glass code: **847/238**.

### L4 and L5 — HOYA TAFD30 (nd = 1.88300, νd = 40.80, Pg,F = 0.5654)

The workhorses of this design. TAFD30 is a tantalum-containing dense flint glass with an exceptionally high refractive index combined with moderate Abbe number — an unusual combination that places it in the "high-index crown-like flint" region of the glass map. The nd of 1.883 is among the highest available in mass-produced optical glass, and the relatively moderate dispersion (νd = 40.80) means that strong refractive power can be achieved with moderate curvatures, reducing both aberrations and physical element size.

Both L4 (in the Group II cemented doublet) and L5 (the biconvex element of the Group III doublet) use TAFD30. These are the primary positive-power elements of the system, flanking the aperture stop. The patent's Conditional Expression (6) requires nd_p2-3 > 1.75 for the positive elements in Groups II and III; at 1.883, this design exceeds that threshold substantially, which the patent states is essential for controlling field curvature and introverted coma at intermediate image heights.

Glass code: **883/408**.

### L7 — HOYA M-TAFD51 (nd = 1.82080, νd = 42.71, Pg,F = 0.5642)

Another moldable tantalum flint, similar in optical properties to TAFD30 but with slightly lower index and slightly higher Abbe number. The "M-" prefix again confirms this is a precision-molding glass, consistent with the aspherical surface on S13*. Like L1, this element's asphere is produced by glass molding rather than by grinding or resin overlay.

Glass code: **821/427**.

### Glass Selection Summary

| Element | Glass | nd | νd | Pg,F | dPg,F | Mfg. method |
|---------|-------|------|------|------|-------|-------------|
| L1 | M-FCD1 / FCD1 class | 1.497 | 81.56 | 0.5388 | +0.03218 (strong positive) | Glass-molded asphere |
| L2 | E-FD8 | 1.689 | 31.16 | 0.5989 | +0.00751 (slight positive) | Polished spherical |
| L3 | FDS90 / S-TIH53 class | 1.847 | 23.78 | 0.6191 | +0.01530 (moderate positive) | Polished spherical |
| L4 | TAFD30 | 1.883 | 40.80 | 0.5654 | −0.00977 (slight negative) | Polished spherical |
| L5 | TAFD30 | 1.883 | 40.80 | 0.5654 | −0.00977 (slight negative) | Polished spherical |
| L6 | E-FD8 | 1.689 | 31.16 | 0.5989 | +0.00751 (slight positive) | Polished spherical |
| L7 | M-TAFD51 | 1.821 | 42.71 | 0.5642 | −0.00776 (slight negative) | Glass-molded asphere |

The dPg,F values are computed from the patent's Pg,F column relative to the Schott normal glass line (Pg,F = 0.6438 − 0.001682 × νd). The data file uses the patent's own HOYA glass names, and all five resolve to exact catalog entries (M-FCD1, E-FD8, FDS90, TAFD30, M-TAFD51). The patent publishes Pg,F for every glass but does not call any element anomalous-dispersion, so only L1 is flagged as APD, and that flag is inferred from the fluorophosphate glass. The positive dPg,F values of E-FD8 and FDS90 are normal for dense flints and are not flagged.

The combination of strongly positive-APD M-FCD1 in L1 with the moderate positive-APD FDS90 and slight negative-APD TAFD30 in the cemented doublets creates a secondary-spectrum correction budget across the system. This is what enables the low chromatic aberration observed in the production GR.

---

## 6. Aspherical Surfaces

Two surfaces are aspherical: the rear surface of L1 (S02*) and the rear surface of L7 (S13*). Both are on elements made from moldable glass, as noted above. The patent recommends aspherical surfaces on the first and fourth groups specifically, noting that "the employment of the aspheric surface has a great effect in correction of astigmatism, comatic aberration, and distortion" (¶0107).

Note: Some third-party reviews describe the lens as having "two double-sided aspherics," but the patent prescription clearly shows only one aspherical surface per element — the front surfaces of both L1 and L7 are spherical. Ricoh's own specification — "two high-precision aspherical optical elements" — is consistent with the patent. Each aspherical element has one spherical and one aspherical surface, totaling two aspherical surfaces across the entire system.

### S02* — L1 rear surface (R = 13.666 mm)

| Coefficient | Value |
|-------------|-------|
| K | +3.80085 |
| A4 | +1.07069 × 10⁻⁴ |
| A6 | −3.38949 × 10⁻⁶ |
| A8 | +2.19205 × 10⁻⁷ |
| A10 | −5.16455 × 10⁻⁹ |

The positive conic constant K = +3.80 gives an oblate-ellipsoid base that is steeper than the vertex sphere, and the positive A4 and A8 terms add to it. The departure from the base sphere is small across the axial beam (about +0.035mm at the 3.26mm marginal-ray height) but climbs quickly toward the edge: +0.23mm at 4.9mm and +0.56mm at the 5.8mm clear aperture used in the data file, where the surface slope reaches 48°. The surface therefore bends more and more steeply toward the image side at the edge, which adds negative power to the outer zone used only by oblique bundles. That is where the correction of astigmatism, coma and distortion the patent describes takes place. The A8 term is printed as +2.19205 × 10⁻⁷; an earlier transcription with the opposite sign produced about 0.7mm of spherical aberration at f/2.81, which confirms the printed sign.

### S13* — L7 rear surface (R = −13.832 mm)

| Coefficient | Value |
|-------------|-------|
| K | −2.86234 |
| A4 | +1.49055 × 10⁻⁴ |
| A6 | +4.18583 × 10⁻⁶ |
| A8 | +1.25343 × 10⁻⁷ |
| A10 | −7.88154 × 10⁻¹⁰ |

The strongly negative conic constant K = −2.86 places the base curve well beyond a paraboloid (K = −1), into the hyperboloidal regime on the concave side. This means the surface flattens significantly faster than a sphere at increasing aperture heights. The polynomial coefficients A4 through A8 are all positive, reinforcing this flattening effect. The combined result is dramatic: at the 5.5mm clear aperture the departure is +0.45mm, and the surface is almost flat there (sag −0.69mm against −1.14mm for the base sphere). The sag turns over just beyond, at about 5.58mm, which sets the upper limit on the element's usable radius. This large departure controls the chief ray angle at the image plane, helping the lens meet the exit pupil distance requirements for the on-chip microlens array of the image sensor. The patent's Conditional Expression (8) constrains tan(θP_max) to the range 0.6–0.95, and the computed value of 0.746 falls comfortably within this range.

---

## 7. Element-by-Element Optical Role Analysis

### L1 — Front negative meniscus (Group I)

**Shape:** Nearly plano-concave. The front surface R = 816 mm is almost flat (radius-to-semi-diameter ratio > 100), while the rear surface R = 13.67 mm is strongly curved and aspherical.

**Focal length:** −27.97 mm (strong negative).

**Role:** L1 is the primary negative element of the front group. Its strong negative power diverges the incoming beam, which is essential for achieving the wide 38° half angle of view while keeping the lens compact — by bending off-axis rays inward early, L1 reduces the required clear aperture of all subsequent elements. The aspherical rear surface corrects astigmatism and distortion introduced by the strong curvature. The use of M-FCD1 (νd = 81.56, anomalous partial dispersion) serves a dual purpose: the high Abbe number minimizes the chromatic aberration contribution of this strong negative element, and the anomalous dispersion (dPg,F = +0.032) enables secondary spectrum correction. The patent's Conditional Expression (12) requires 55 < νd_n1 < 85 for the first lens group's negative element; at νd = 81.56, this design sits near the upper limit, maximizing achromatic correction.

As the front-most element exposed to the environment, the choice of glass also reflects durability considerations. The patent notes (¶0106) that glasses with νd > 85 tend to be "soft, easy to be scratched, and low in chemical durability," making them unsuitable for the most object-side element.

### L2 — Negative meniscus (Group II, front sub-assembly)

**Shape:** Biconcave, with a strongly concave object-side surface and a nearly flat rear surface (R₃ = −23.54 mm, R₄ = +200.4 mm).

**Focal length:** −30.54 mm (moderate negative).

**Role:** L2 forms the front element of Group II and creates one half of the "biconvex air lens" between Groups I and II (the concave rear of L1 and the concave front of L2 define a biconvex air space with negative refractive power). The patent specifically notes that the concave object-side surface of L2 "has an effect to make a diameter of the first lens group smaller, and make it easy to correct comatic aberration of a lower ray" (¶0061). L2 uses HOYA E-FD8, a dense flint with high dispersion (νd = 31.16), providing a chromatic counterbalance to the low-dispersion L1 ahead of it.

### L3+L4 — Cemented doublet (Group II, rear sub-assembly)

**Shape:** L3 is a negative meniscus (R₅ = +15.42, R₆ = +9.51 — both surfaces convex toward the object side, with the rear surface more steeply curved), L4 is a biconvex element (R₆ = +9.51, R₇ = −34.12).

**Combined focal length:** +12.19 mm (strong positive).

**Role:** This cemented doublet provides the primary positive refractive power on the object side of the aperture. The use of FDS90 (νd = 23.78, extremely high dispersion) for L3 and TAFD30 (νd = 40.80, moderate dispersion, very high index) for L4 provides partial chromatic correction within the doublet — L3's high dispersion offsets roughly half of L4's chromatic contribution. The doublet is not a standalone achromat, however; full achromatic correction is achieved at the system level, where the five negative elements (L1, L2, L3, L6, L7) collectively balance the two strong positive elements (L4, L5). The cemented junction at R₆ = 9.513 mm (strongly curved) carries significant refractive power and helps correct lateral chromatic aberration.

The very high refractive index of L4 (nd = 1.883) allows the positive power to be achieved with relatively gentle curvatures, reducing higher-order aberrations. The patent notes that separated negative and positive elements in Group II "secure degrees of freedom in various aberration correction" (¶0063).

### L5+L6 — Cemented doublet (Group III)

**Shape:** L5 is biconvex (R₉ = +14.69, R₁₀ = −9.09), L6 is biconcave (R₁₀ = −9.09, R₁₁ = +12.92).

**Combined focal length:** +30.29 mm (moderate positive).

**Role:** This doublet mirrors the power structure of the L3+L4 doublet across the aperture stop — both use TAFD30 for the positive element and E-FD8 for the negative element, reinforcing the approximately-symmetric design. The patent states that "only a cemented lens of a positive lens and a negative lens constitutes the third lens group" to prevent "an increase in a production error sensitivity" and achieve "ease of assembly" (¶0063). By using a single cemented pair rather than separated elements, manufacturing tolerances are relaxed — the cemented junction is self-centering and doesn't require the tight air-gap control of separated elements.

The rear surface of L6 (R₁₁ = +12.917 mm, concave toward the image) forms one side of the second "biconvex air lens" between Groups III and IV, symmetrically matching the air lens between Groups I and II.

### L7 — Weak negative meniscus (Group IV)

**Shape:** Concave-convex meniscus (R₁₂ = −12.42, R₁₃ = −13.83), with both surfaces concave from the object side but the rear surface less strongly curved and aspherical.

**Focal length:** −240.0 mm (very weak negative).

**Role:** L7 is the field flattener and exit pupil controller. Its extremely weak power (|f₇/f| ≈ 13) means it contributes minimally to the system's refractive power but significantly affects the exit pupil position and field curvature. The patent explains that Group IV "controls the position of the exit pupil" and "sets the angle of the principal ray incident to the image plane in the peripheral image height to be in an appropriate state" (¶0065). The aspherical rear surface provides fine control over the chief ray angle at the image plane — critical for proper illumination of the sensor's microlens array.

The concave object-side surface of L7 forms the rear half of the second biconvex air lens, completing the symmetric negative-positive-negative power distribution on the image side of the stop.

---

## 8. Symmetry and Aberration Correction Strategy

The approximately-symmetric power arrangement is the defining feature of this design. The patent describes it as: positive power flanking the aperture on both sides (the L3+L4 cemented doublet and L5 biconvex element), with negative power on each outer side (Group I and the rear elements L6 + L7). This near-symmetry cancels odd-order aberrations (coma, distortion, lateral chromatic aberration) to first order, while the deliberate asymmetry (the rear half is slightly more powerful than the front — f₃₋₄ = 35.3 mm vs. f₁₋₂ = 42.5 mm, giving f₁₋₂/f₃₋₄ = 1.203) accommodates the reduced magnification at which a camera lens operates.

The two "biconvex air lenses" — between Groups I and II, and between Groups III and IV — each contribute negative refractive power, further distributing the power budget and enabling finer aberration control. The patent notes that these air lenses make it possible to favorably adjust the "distribution of the refractive power" in those inter-group spaces (¶0060).

The computed Petzval sum of 0.00468 mm⁻¹ yields a Petzval radius of approximately 214 mm, producing an inward Petzval field curvature of approximately 0.47 mm at the maximum image height (Y' = 14.2 mm). This is substantially larger than the geometric depth of focus at f/2.8 (approximately ±0.054 mm for a 4.8 µm pixel pitch sensor), which means the Petzval curvature alone cannot be tolerated — astigmatic correction must compensate. The patent's aberration diagrams for Example 3 (Fig. 11) confirm that the tangential and sagittal focal surfaces are balanced to bracket the image plane, yielding a composite best-focus surface that is much flatter than the Petzval surface. The mild corner softness observed in production reviews at f/2.8 (improving markedly by f/5.6) is consistent with this residual balance between Petzval curvature and astigmatic compensation.

---

## 9. Focus Mechanism

The patent describes two focusing methods: "moving an entire lens groups, or by moving the image sensor to match an imaging plane" (¶0115). Notably, Example 3 provides no variable-spacing table — unlike zoom lens patents or designs with internal focusing, there are no tabulated air gap changes at different object distances. This is consistent with unit focusing, where the entire optical assembly translates along the optical axis as a rigid body.

The data file models unit focusing: the entire optical assembly translates toward the object to focus closer, and only the back focal distance changes. (The lens barrel also extends from the collapsed body on power-up, but that is the startup deployment, not the focusing action.) The published close-focus distance is 30 cm in normal mode and 10 cm in macro mode. Because the patent tabulates no finite-focus state, the close-focus endpoint is calculated: a paraxial unit-focus extension of 1.30 mm focuses the lens at a 0.30 m object-to-image distance (magnification about −0.071). The 10 cm macro range is not modeled, since nothing in the patent describes it.

Because the entire lens moves as a unit, there is no change in the inter-element spacings during focusing, which means the aberration balance designed for infinity is maintained at all focus distances with only the inherent field curvature shift of a unit-focus system. This is a practical advantage for a compact camera where manufacturing simplicity and mechanical reliability are priorities.

---

## 10. Relationship to Other Examples in the Patent

The patent provides eight examples, all sharing the same four-group architecture. Example 3 is distinguished by several features that likely led to its selection for production:

**Highest-index positive elements:** Examples 3, 4, and 6 all use TAFD30 (nd = 1.883) for both primary positive elements — the highest refractive index among all eight examples. This enables the most compact design for a given focal length, consistent with the GR's emphasis on pocketability. The other examples use a lower-index glass (TAFD5F at nd = 1.835, or TAF1 at nd = 1.773) for at least one of the two.

**Anomalous-dispersion front element:** Example 3 is the only example that uses M-FCD1 (nd = 1.497, νd = 81.56) for L1 — an anomalous partial dispersion glass with dPg,F = +0.032. The other examples predominantly use HOYA FC5 (nd = 1.487, νd = 70.45), which has lower Abbe number and less anomalous dispersion. M-FCD1's ultra-low dispersion enables better secondary spectrum correction, contributing to the low chromatic aberration observed in production reviews.

**Balanced chromatic correction:** The combination of M-FCD1 (anomalous dispersion) with the symmetric use of E-FD8 in both doublets creates a chromatic correction strategy that addresses both primary and secondary spectrum — contributing to the low chromatic aberration observed in production reviews.

**Intermediate field curvature:** The Petzval sum of Example 3 is moderate — not as aggressively corrected as some examples (which risk over-correction and astigmatism at the edges), nor as under-corrected as others. This balanced approach is consistent with the GR's reputation for uniform sharpness across the frame.

---

## 11. Production Considerations

Several features of Example 3's design reflect production engineering priorities:

**Glass-molded aspherics:** Both aspherical elements use HOYA's M-prefix moldable glasses. Precision glass molding produces aspherical surfaces with excellent centration (since the asphere and element are formed in a single pressing operation) and high throughput compared to diamond-turned or polished aspheres. This is critical for a mass-production consumer camera.

**Cemented groups for tolerance control:** The use of cemented doublets in Groups II and III (rather than air-spaced doublets) eliminates an air gap and its associated axial, decenter, and tilt tolerances for each doublet. The patent explicitly cites "ease of assembly" as a motivation for using a cemented lens in Group III (¶0063).

**Symmetric glass selection:** The mirror-image use of TAFD30 and E-FD8 in the two cemented doublets simplifies procurement and quality control — only five distinct glass types are needed for seven elements.

**Compact total track:** The total track of 30.3 mm (L/f = 1.656) and lens thickness of 15.6 mm (D_T/f = 0.855) are among the most compact in the patent's examples. For a lens that must retract into a body only ~35 mm thick when powered off, minimizing the lens thickness is essential.

---

## 12. Summary of Key Findings

The Ricoh GR 18.3mm f/2.8 is a 7-element, 5-group (4 functional groups) approximately-symmetric wide-angle design. Its defining characteristics are:

1. **Two precision glass-molded aspherical elements** (L1 and L7) using HOYA's M-FCD1 and M-TAFD51 moldable glasses, positioned at the first and last elements where they have maximum leverage over field-dependent aberrations.

2. **Very high refractive index positive elements** (nd = 1.883, HOYA TAFD30) flanking the aperture stop, enabling compact physical dimensions while maintaining strong positive power.

3. **Anomalous partial dispersion** in L1 (M-FCD1, dPg,F = +0.032) for secondary spectrum correction, with system-level achromatic balancing achieved by distributing chromatic contributions across all seven elements — the five negative elements collectively offset the two strong positive elements (L4 and L5, both TAFD30).

4. **Unit focusing** — the patent focuses by moving the whole lens (or the sensor), with no internal moving groups. The data file's 0.30 m close-focus state is a calculated 1.30 mm extension; the patent publishes no close-focus data.

5. **Approximately-symmetric power distribution** about the aperture stop, with deliberate asymmetry (f₁₋₂/f₃₋₄ = 1.203) to optimize performance at the camera's working magnification. The weak fourth group (f₄ = −240 mm) serves primarily as an exit pupil controller and field flattener.

---

## 13. Semi-Diameter Estimation

The patent does not list semi-diameters. The stored values are estimates, checked against an exact real-ray trace at the 14.2mm image height and against the Example 3 cross-section (FIG. 3), measured at 300 dpi with a scale of 31.36 px/mm taken from the first-to-last vertex span.

### Constraints

**Axial beam and stop.** The f/2.81 axial beam needs 3.25–3.78mm at every surface, and the stop is recorded at 3.65mm, the real-ray iris radius for f/2.81. No surface clips the axial beam.

**L1–L2 air lens.** With the tabulated S2 asphere, the rear of L1 curves sharply toward the image side at the edge, while the front of L2 curves toward the object. The two surfaces would meet at about 5.05mm from the axis across the 1.79mm gap. L2 is therefore held to 4.8mm, which leaves a practical clearance. The full-field bundle wants about 5.5mm here, so the corner bundle is vignetted by about 20% on one side at L2. This is ordinary for a compact f/2.8 wide-angle and matches the GR's known corner falloff.

**S2 asphere rim.** The full-field bundle reaches 5.42mm on S2. The rim is set at 5.8mm, where the surface slope is 48°. Beyond that it steepens rapidly (64° at 6.1mm and vertical at about 6.5mm).

**S13 asphere turnover.** The rear of L7 flattens so strongly that its sag turns over at about 5.58mm. The rim is 5.5mm, just inside the turnover and above the 5.08mm the full-field bundle needs.

**Cemented doublets.** The strongly curved junctions (R₆ = 9.513mm, R₁₀ = −9.087mm) limit the doublet radii. L4 keeps about 0.55mm of edge at 5.0mm, and L5 about 0.5mm at 4.7mm; at FIG. 3's drawn 5.2mm, L5 would come to a knife edge. The L6–L7 air lens closes at about 4.6mm, which keeps the rear of L6 at 4.3mm.

### Final Semi-Diameter Values

| Surface | SD (mm) | FIG. 3 (mm) | Basis |
|---------|---------|-------------|-------|
| S01 (L1 front) | 7.00 | 6.8 (flat face incl. flange) | Front face |
| S02A (L1 rear) | 5.80 | ≈5.7 | Full-field bundle 5.42; rim slope |
| S03 (L2 front) | 4.80 | 5.75 | L1–L2 air-lens closure |
| S04 (L2 rear) | 4.80 | 5.75 | Matched to S03 |
| S05–S07 (L3+L4) | 5.00 | 5.35 | L4 edge thickness |
| STO | 3.65 | — | Real-ray f/2.81 iris |
| S09–S10 (L5+L6) | 4.70 | 5.2 | L5 edge thickness |
| S11 (L6 rear) | 4.30 | 5.2 | L6–L7 air-lens closure |
| S12 (L7 front) | 5.50 | 5.9 | Matched to S13 |
| S13A (L7 rear) | 5.50 | 5.95 | Asphere turnover at 5.58 |

FIG. 3 draws the rear of L1 as a gentle curve that meets the front of L2 at about 5.7mm. The same crossing happens at L6 and L7, at about 5.2mm. The tabulated sags do not allow either, so the drawing's air-lens outlines are schematic. Where the figure is larger than the stored value by more than about 15% (L2 and the rear of L6), physical closure, not the figure, sets the limit.

---

## 14. Data File Transcription Notes

### Cover Glass Handling

The patent's parallel flat plate F (surfaces 14–15: nd = 1.51680, d = 1.40 mm glass + 0.50 mm air to image) is excluded from the data file's surface array. Its optical effect is folded into the last surface's thickness as the air-equivalent back focal distance:

BFD_air-eq = 12.756 + 1.40/1.51680 + 0.50 = 14.179 mm

where 12.756 mm is the patent's geometric distance from S13 to the filter front, 1.40/1.51680 = 0.923 mm is the air-equivalent thickness of the filter glass, and 0.50 mm is the air gap from filter rear to image plane.

### Stop Position

The patent lists the aperture stop as surface 08 (between surface 07 at R = −34.121 and surface 09 at R = 14.691). The air gap is split: d₇ = 1.50 mm from L4 rear to stop, d_STO = 1.00 mm from stop to L5 front. This placement is taken directly from the patent table.

### Aspherical Coefficient Format

The patent specifies coefficients up to 10th order (K, A4, A6, A8, A10) for both aspherical surfaces, with no odd-order terms. The data file sets A12 and A14 to zero (required fields per the renderer spec). No higher-order terms (A16–A20) are needed. S2's A8 is +2.19205 × 10⁻⁷ as printed. S13's A6 is printed without its decimal point ("418583 × 10⁻⁶"); it is read as 4.18583 × 10⁻⁶, in line with the neighbouring examples.

The conic constant convention matches the standard sag equation used by the renderer: K = 0 for a sphere, K = −1 for a paraboloid. The patent's "K" (labeled as conic constant in ¶0125) uses the same convention — verified by checking that the aspherical sag equation in the patent (¶0125) is algebraically identical to the renderer's sag equation.

### Unit Focus Variable Gap

Since the lens uses unit focusing, only the back focal distance changes with focus. The data file encodes this as a single variable gap on the last surface:

- `var["13A"] = [14.179, 15.481]` — infinity and calculated close focus
- The close value is a paraxial unit-focus extension of 1.302mm, which focuses at a 0.30m object-to-image distance (the GR's normal-mode MFD)
- `closeFocusM` is 0.30m. The 0.10m macro mode is not modeled, because the patent tabulates no finite-focus state at all.

The paraxial image of the infinity prescription falls 0.0003mm from the stored back focus. That confirms the filter-plus-0.50mm-air folding of the patent's back focus.

### Numerical Precision

All R, d, and nd values are transcribed exactly from the patent. The nd values for TAFD30 (1.88300) and E-FD8 (1.68893) appear at full five-decimal precision in the patent's glass column but are stored in the data file at the precision needed by the renderer: nd = 1.883 and nd = 1.68893 respectively. For elements where the glass appears at both positions in a symmetric pair (L4/L5 use TAFD30; L2/L6 use E-FD8), the same nd value is used consistently.
