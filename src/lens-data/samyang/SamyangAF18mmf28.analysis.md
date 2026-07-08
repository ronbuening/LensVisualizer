# SAMYANG AF 18mm f/2.8 FE — Lens Analysis

## Patent Reference and Design Identification

**Patent:** WO 2021/246545 A1  
**Application Number:** PCT/KR2020/007178  
**Filed:** 03 June 2020  
**Published:** 09 December 2021  
**Inventor:** Lee, Jung Du  
**Applicant:** Samyang Optics Co., Ltd.  
**Title:** Lens Optical System  
**Classification:** G02B 15/14, G02B 3/00, G02B 9/30  
**Embodiment analyzed:** First embodiment, Example 1, Tables 1–3 and Fig. 1

WO 2021/246545 A1 discloses five compact wide-angle embodiments using the same broad kinematic architecture: a positive fixed front group, a positive moving focusing group, and a negative fixed rear group. Example 1 is the strongest match to the production Samyang AF 18mm F2.8 FE, also sold under the Rokinon name in the United States.

The identification rests on convergent evidence. Example 1 has 9 elements in 8 air-separated optical groups, matching the manufacturer’s published optical construction. Its aspherical surfaces are on L21, L61, and L81, matching the published count of three aspherical elements. The three nd = 1.497, νd = 81.6072 elements correspond to the manufacturer’s three ED elements, while L11 and L41 satisfy the published two-HR-element count. The patent gives f = 18.5413 mm, Fno = 2.85, HFOV = 50.06°, and the focus table includes a 0.25 m close-focus state; the production lens is marketed as an 18 mm f/2.8 full-frame Sony FE lens with 100.1° angle of view and 0.25 m minimum focus distance. The patent’s inner-focus description, in which only G21 moves and the front and rear groups remain fixed, also matches Samyang’s published internal-focus / linear stepping motor description.

Examples 2 and 3 have only seven elements. Examples 4 and 5 are closer in element count but do not simultaneously match the production special-element distribution. Example 1 is therefore the only embodiment that satisfies the production element count, special-element count, focal length, aperture, field angle, and focusing evidence at the same time.

## Optical Architecture

The design is a compact rectilinear retrofocus wide-angle lens for full-frame mirrorless cameras. It has 9 glass elements in 8 air-separated optical groups and 3 kinematic groups: G11, G21, and G31. The group-power order is positive–positive–negative from object to image.

G11 is the fixed front group. It contains L11, L21, the cemented doublet L31 + L41, and L51. Its thick-lens focal length from the rounded patent prescription is +44.58 mm. The first two elements are negative menisci, but the cemented doublet and rear ED meniscus make the group positive as a whole. This arrangement gives the front collector enough negative leading power for a wide field while preserving a positive front-group contribution to the overall focal length.

G21 is the focusing group. It contains L61 and L71 and has a computed focal length of +25.89 mm. The group translates as a unit during focusing. At close focus, D1 decreases and D2 increases by the same amount, so the total separation between the stop and G31 remains constant.

G31 is the fixed rear group. It contains L81 and L91 and has a computed focal length of −56.84 mm. Its negative power shifts the rear principal point and extends the back focus relative to the system focal length. The last element, L91, is a strong negative field flattener, a role explicitly described in the patent’s discussion of image-plane curvature correction.

The patent prescription includes a plane-parallel rear filter or sensor-cover plate after surface 18. The data file omits that plate, following project convention. Surface 18 therefore uses the patent Table 3 in-air rear spacing of 24.59 mm. A direct paraxial trace from the rounded prescription gives 24.611 mm, a 0.021 mm residual attributable to tabular rounding.

The rear cover-stack values in the patent are internally inconsistent by about 0.5 mm. Table 1 prints surface 18–19 = 22.444 mm, filter thickness = 2.5 mm, and surface 20–21 = 2.5 mm. Table 16 gives f_Back = 25.444 mm, which instead requires roughly 0.5 mm of post-filter air. Table 3 gives OAL = 70.7079 mm, which matches the sum through the rear face of the 2.5 mm cover plate, not the focus plane implied by Table 16. The data file therefore prioritizes Table 3’s in-air spacing for the cover-glass-excluded model and records the cover-stack inconsistency in comments rather than forcing the printed rear stack into the optical prescription.

## Element-by-Element Analysis

### L11 — Negative Meniscus, convex to object

nd = 1.92286, νd = 20.88. Glass: 923209 dense flint class (E-FDS1 / N-SF66 / H-ZF62 equivalent). f = −21.54 mm.

L11 is the leading element and provides the strongest negative power in the fixed front group. The patent identifies the first lens as a negative meniscus convex toward the object side. This is the usual front form of a retrofocus wide-angle system: the object-side convex surface accepts a steep field bundle, while the short-radius image-side surface supplies the divergence needed to obtain a back focus longer than the focal length.

The nd/νd pair is catalog-resolvable by six-digit code 923209, but it is not vendor-unique. Hoya E-FDS1, Schott N-SF66, and CDGM H-ZF62-family entries occupy the same glass-code position. The analysis therefore treats the glass as a dense-flint class rather than assigning a single supplier.

### L21 — Negative Meniscus, double asphere, convex to object

nd = 1.51423, νd = 63.70. Glass: unmatched low-index crown, 514/637, PGM/BK7-family. f = −66.45 mm.

L21 carries aspherical surfaces on both faces. The patent specifically identifies L21 as the aspherical second lens in the first group. Its optical power is weak compared with L11, so its principal function is aberration correction rather than focal-length formation.

The glass is a high-Abbe crown near the BK7 region but below the standard N-BK7 / S-BSL7 index. No public Ohara, Hoya, Schott, Hikari, CDGM, or Sumita catalog entry was found that matches both nd and νd tightly. The most conservative description is therefore a moldable crown or PGM crown-class material rather than a named catalog glass.

### L31 + L41 — Cemented Doublet, biconcave ED negative plus biconvex HR positive

L31: nd = 1.49700, νd = 81.6072. Glass: S-FPL51 / FCD1-class ED fluorophosphate. f = −37.69 mm.  
L41: nd = 2.00100, νd = 29.1342. Glass: 001291 high-index lanthanum flint class (TAFD55 / S-LAH99 class). f = +16.60 mm.  
Cemented doublet focal length: +28.80 mm.

The L31 + L41 cemented doublet is the main chromatic-correction unit of the front group. L31 is a low-index, very-high-Abbe ED element, and L41 is a high-index, high-dispersion positive element. The cemented interface at R = 22.134 mm carries substantial refractive-index-step power, allowing the doublet to combine net positive power with axial color correction.

The patent text describes L31 and L41 as bonded double-junction lenses. That construction is optically significant because the high-power shared surface would otherwise add two air-glass reflections and increase alignment sensitivity.

As with L11, the exact vendor is not uniquely established from nd/νd alone. The ED member sits in the S-FPL51 / FCD1 fluorophosphate region. The HR member matches the 001291 code shared by Hoya TAFD55 and Ohara S-LAH99-class glasses. The production literature only says ED and HR; it does not name a supplier.

### L51 — Positive Meniscus, convex to image

nd = 1.49700, νd = 81.6072. Glass: S-FPL51 / FCD1-class ED fluorophosphate. f = +48.97 mm.

L51 is the rear element of G11. The patent describes it as a positive meniscus convex toward the image side. Its power is moderate, but its location behind the front doublet lets it trim the convergence entering the stop and focusing group.

Using another ED-class element here distributes color correction through the front group rather than relying entirely on the L31 + L41 cemented pair. This is a common strategy in compact wide-angle lenses, where the field angles and principal-ray heights vary strongly across the front group.

### L61 — Negative Meniscus, double asphere, convex to image

nd = 1.83157, νd = 37.1993. Glass: S-LAH60 class, close but not exact. f = −44.42 mm.

L61 is the front element of the moving focusing group and is aspherical on both surfaces. The patent places an aspherical element near the aperture to correct spherical aberration efficiently while keeping the moving group small and light.

The glass lies close to Ohara S-LAH60 / S-LAH60V, but the stored index is about 0.0024 below the catalog nd = 1.83400 value. That residual is too large for an exact catalog assignment but small enough to describe the material as S-LAH60-class lanthanum flint.

### L71 — Biconvex Positive ED element

nd = 1.49700, νd = 81.6072. Glass: S-FPL51 / FCD1-class ED fluorophosphate. f = +18.46 mm.

L71 is the dominant positive element in G21. Its standalone focal length is essentially the same scale as the full lens focal length, but L61’s negative power moderates the group’s net focal length to +25.89 mm.

Because this element moves during focusing, its ED glass selection helps limit focus-dependent longitudinal color. The patent’s focus table shows only a small F-number change from infinity to 0.25 m, consistent with a compact positive moving group rather than unit extension of the whole lens.

### L81 — Positive Meniscus, double asphere, convex to image

nd = 1.76951, νd = 49.2992. Glass: unmatched lanthanum-flint boundary glass, 770/493. f = +21.73 mm.

L81 is the first element of the fixed rear group and is aspherical on both surfaces. The patent states that an aspherical lens may be arranged in the uppermost image-side part of the third group to correct astigmatism and distortion. In Example 1, that role is assigned to L81.

The nd/νd pair falls near the crown/flint boundary but is not a tight match to surveyed public catalog entries. It is therefore treated as an unmatched 770/493 glass rather than forced to a named catalog type.

### L91 — Biconcave Negative field flattener

nd = 1.72825, νd = 28.32. Glass: H-ZF4A class, CDGM 728283 dense flint. f = −15.55 mm.

L91 is the final lens element. It is biconcave and strongly negative, with a standalone focal length shorter in magnitude than the system focal length. The patent explicitly describes the use of the last negative lens of the third group as a field flattener for image-plane curvature correction.

The nd/νd pair matches CDGM H-ZF4A closely. It also belongs to a conventional dense-flint region, so the glass assignment is less design-critical than the ED and HR pairings in the front and focus groups.

## Glass Identification and Selection

The patent does not name glass suppliers, so glass identifications are based on nd/νd matching against public manufacturer catalogs. Where the six-digit code is shared across vendors, the analysis uses a class identification rather than a single-vendor assertion.

| Element | nd | νd | Glass identification | Match status | Optical role |
|---|---:|---:|---|---|---|
| L11 | 1.92286 | 20.88 | 923209 dense flint; E-FDS1 / N-SF66 / H-ZF62 equivalent | code exact, vendor non-unique | front negative retrofocus element |
| L21 | 1.51423 | 63.70 | unmatched 514/637 crown, PGM/BK7-family | unmatched | front aspheric correction |
| L31 | 1.49700 | 81.61 | S-FPL51 / FCD1-class ED fluorophosphate | class exact | doublet ED negative |
| L41 | 2.00100 | 29.13 | 001291 HR lanthanum flint; TAFD55 / S-LAH99 class | code exact, vendor non-unique | doublet positive HR partner |
| L51 | 1.49700 | 81.61 | S-FPL51 / FCD1-class ED fluorophosphate | class exact | rear front-group ED correction |
| L61 | 1.83157 | 37.20 | S-LAH60-class lanthanum flint | close, Δnd ≈ −0.0024 | moving aspheric focus element |
| L71 | 1.49700 | 81.61 | S-FPL51 / FCD1-class ED fluorophosphate | class exact | focusing-group positive ED element |
| L81 | 1.76951 | 49.30 | unmatched 770/493 lanthanum-class glass | unmatched | rear aspheric correction |
| L91 | 1.72825 | 28.32 | H-ZF4A-class dense flint | close/exact to CDGM | negative field flattener |

The design uses three very-high-Abbe ED-class elements, one high-index HR element near nd = 2.001, and one ultra-dense front flint at nd = 1.92286. That material spread is consistent with Samyang’s public specification of three ED, two HR, and three aspherical elements. The average refractive index over the nine glass elements is 1.69538, giving 1/na = 0.58984. That satisfies the patent’s Equation 5 range of 0.50 ≤ 1/na ≤ 0.60.

The surface-by-surface Petzval sum, computed as Σφ/(n·n′), is +0.003545 mm⁻¹ from the rounded prescription, corresponding to a Petzval radius of about 282 mm. The final negative L91 element is the largest single field-curvature counterweight.

## Focus Mechanism

The lens uses inner focusing. G11 and G31 remain fixed, while G21 moves toward the object when focusing from infinity to the closest distance. The patent states this directly in the general description and Example 1 focus table.

| Focus state | D0 object distance (mm) | D1 (mm) | D2 (mm) | D1 + D2 (mm) |
|---|---:|---:|---:|---:|
| Infinity | ∞ | 4.666 | 1.015 | 5.681 |
| m = 1/40 | 730.398 | 4.422 | 1.259 | 5.681 |
| TL = 0.25 m | 180.954 | 3.734 | 1.947 | 5.681 |

The moving group travel from infinity to the 0.25 m state is 0.932 mm by direct subtraction of D1, or 0.932 mm by D2. Table 16 rounds this to 0.931 mm. The constant D1 + D2 confirms that the group translates without changing the total lens length.

The production lens uses a linear stepping motor and internal focusing. That agrees with the patent’s stated objective of keeping the moving group lightweight to obtain high autofocus speed.

## Aspherical Surfaces

Six surfaces are aspherical: 3, 4, 11, 12, 15, and 16. The patent uses the standard even-order aspheric sag equation,

$$
Z = \frac{cr^2}{1 + \sqrt{1 - (1 + K)c^2r^2}} + Ar^4 + Br^6 + Cr^8 + Dr^{10} + Er^{12},
$$

where c = 1/R and K is the standard conic constant. No conversion from a Japanese κ convention is required in this PCT text.

| Coefficient | Surface 3 | Surface 4 |
|---|---:|---:|
| K | 9.181343 | 2.030985 |
| A4 | +2.265641e−4 | +2.2840186e−4 |
| A6 | −2.349428e−6 | −2.5018168e−6 |
| A8 | +1.5831092e−8 | +9.9266010e−9 |
| A10 | −7.621450e−11 | −2.8220417e−11 |
| A12 | +2.011977e−13 | +4.1393623e−14 |

The L21 pair is in the front group, where field-ray heights are large. These surfaces primarily control distortion, astigmatism, and wide-field coma introduced by the retrofocus front end.

| Coefficient | Surface 11 | Surface 12 |
|---|---:|---:|
| K | −2.535714 | −4.354985 |
| A4 | −3.2364193e−5 | +1.3354856e−4 |
| A6 | +4.2820552e−8 | +1.0132676e−6 |
| A8 | −4.6609142e−8 | −1.6043213e−8 |
| A10 | −5.5537973e−10 | −5.498949e−10 |
| A12 | +2.4007200e−12 | +7.7404421e−12 |

The L61 pair is near the aperture and moves during focusing. Its aspheric correction is therefore directed at aperture-dependent aberrations and at stabilizing aberration balance over the short focus travel.

| Coefficient | Surface 15 | Surface 16 |
|---|---:|---:|
| K | 10 | −0.413514 |
| A4 | −2.9368249e−5 | +1.5582113e−5 |
| A6 | +5.6907757e−8 | −1.0367630e−7 |
| A8 | +2.8671109e−9 | +1.3333367e−9 |
| A10 | +1.0762403e−11 | +2.3417940e−11 |
| A12 | −1.9607130e−13 | −1.7084264e−13 |

The L81 pair sits in the fixed rear group. It gives a final correction layer for residual distortion and astigmatism while avoiding the larger diameters and higher manufacturing cost that would come from adding more front-group aspheres.

## Conditional Expressions

The patent defines four conditional expressions and tabulates values for all five embodiments in Table 16. Example 1 satisfies all four. For Equation 2, f_Back follows the patent convention: physical distance from surface 18 to the image plane with the rear plane-parallel cover plate in place, not the air-equivalent rear gap stored in the data file.

| Condition | Expression | Computed / inferred | Patent Table 16 | Patent range |
|---|---|---:|---:|---:|
| Eq. 2 | f_Back / f_Effective | 1.372 | 1.372 | 1.16–1.51 |
| Eq. 3 | L_Front / L_Rear | 1.442 | 1.442 | 1.26–2.72 |
| Eq. 4 | ΔL_Focusing | 0.932 mm | 0.931 mm | 0.52–1.34 |
| Eq. 5 | 1 / n_a | 0.5898 | 0.590 | 0.50–0.60 |

Equation 2 controls the back-working-distance relationship needed for a short-flange mirrorless system. Equation 3 controls the stop location relative to front and rear lens diameters. Equation 4 limits focusing travel for autofocus speed. Equation 5 constrains material index distribution and Petzval curvature.

## Verification Summary

The prescription was re-entered and checked with an independent paraxial y–ν ray trace. The data file omits the rear cover glass and uses the patent’s air-equivalent rear spacing.

| Quantity | Computed | Patent | Difference / note |
|---|---:|---:|---|
| EFL at infinity | 18.548 mm | 18.541 mm | +0.007 mm |
| Air-equivalent BFD, no cover plate | 24.611 mm | 24.59 mm | +0.021 mm from rounded prescription |
| Cover-stack f_Back from surface 18 | 25.463 mm | 25.444 mm | +0.019 mm; uses the Table 16 cover-stack convention |
| f_Back / f | 1.372 | 1.372 | uses patent f_Back convention, not data-file air BFD |
| L_Front | 27.023 mm | 27.023 mm | exact from stop position |
| L_Rear | 18.741 mm | 18.741 mm | exact from stop to last lens vertex |
| L_Front / L_Rear | 1.442 | 1.442 | matches |
| G11 focal length | +44.58 mm | — | computed |
| G21 focal length | +25.89 mm | — | computed |
| G31 focal length | −56.84 mm | — | computed |
| Petzval sum | +0.003545 mm⁻¹ | — | surface-by-surface φ/(n·n′) |
| ΔL_Focusing | 0.932 mm | 0.931 mm | Table 16 rounded |
| 1 / n_a | 0.58984 | 0.590 | matches |

The small EFL and BFD residuals are consistent with a patent prescription rounded to three decimals in radii and spacings. No sign-convention change was required.

## Data-File Implementation Notes

The data file uses the patent’s unscaled Example 1 prescription. No production scaling is applied, because the computed EFL is already 18.55 mm and the production lens is marketed as 18 mm.

The cover glass/filter surfaces 19 and 20 are excluded. Surface 18 therefore has d = 24.59 mm, the Table 3 in-air spacing. The cover-excluded front-to-image distance in the data file is 70.354 mm. This is intentionally not the patent’s printed OAL because the patent OAL uses a rear-cover convention that is inconsistent with its own f_Back and in-air values by about 0.5 mm.

Semi-diameters are not published in the patent. The data file uses estimated renderer semi-diameters constrained by paraxial marginal and chief ray heights, Fig. 1 relative proportions, the 58 mm filter envelope, edge thickness, aspheric conic limits, and cross-gap sag clearance. They should not be read as measured mechanical clear apertures.

## Design Heritage and Context

The design is a mirrorless-era retrofocus wide-angle rather than a symmetric Biogon-type wide-angle. The short 18 mm focal length, full-frame field, and Sony FE mount demand both a compact barrel and sufficient back focus for the sensor stack and mount clearance. The positive–positive–negative group layout, one lightweight moving focus group, and three pairs of aspherical surfaces are all directed at that problem.

The international search report cites JP 2014-102358 A as the most relevant prior art for Claim 1, with additional background citations to JP 2013-235239 A, US 2019/0391368 A1, JP 10-301029 A, and KR 10-2011-0099504 A. These references place the patent in the modern family of compact wide-angle inner-focusing designs with a fixed front group, small moving positive group, and negative rear correction group.

## Sources

- WO 2021/246545 A1, primary source for prescription tables, aspherical coefficients, focus gaps, group descriptions, and conditional expressions.
- LK Samyang, “AF 18mm F2.8 FE,” official product specifications: optical construction, special-element count, 0.25 m MFD, 100.1° field, 145 g weight, 60.5 mm length, and linear STM motor.
- Samyang US, “18mm F2.8 AF Compact Full Frame Super Wide Angle (Sony E),” production specifications and Rokinon/Samyang US-market product metadata.
- Ohara optical-glass catalog and glass-type tables, for S-FPL51 and S-LAH60/S-LAH60V class comparison.
- Hoya optical-glass catalog data, for E-FDS1 and TAFD55 class comparison.
- CDGM H-ZF4A data sheet, for the 728283 dense-flint match.
