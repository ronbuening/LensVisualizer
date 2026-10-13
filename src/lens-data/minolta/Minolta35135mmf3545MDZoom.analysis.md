# MINOLTA MD ZOOM 35-135mm f/3.5-4.5 — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** US 5,249,079 A
**Application Number:** US 07/573,874
**Priority:** August 28, 1989 (JP 1-221299)
**Filed:** August 28, 1990
**Granted:** September 28, 1993
**Inventor:** Hiromu Umeda
**Assignee:** Minolta Camera Co., Ltd. (printed as Minolta Camera Kabushiki Kaisha)
**Title:** Lens System
**Embodiment analyzed:** Table 4, the single worked numerical embodiment (the patent does not number it)

The implemented prescription transcribes the single numerical zoom example in Table 4 of US 5,249,079 A. The patent describes a four-unit zoom arranged positive, negative, positive, positive from object to image, with the diaphragm in the third unit and a deflecting lens element immediately behind it. Figure 1 supplies the unit arrangement and zoom-motion context; Table 4 supplies the radii, axial spacings, refractive indices, Abbe numbers, and the two published zoom endpoints.[1]

The correlation with the production Minolta MD Zoom 35-135mm f/3.5-4.5 is strong at the centered optical-formula level, but it is not a manufacturer-confirmed patent attribution. The identification rests on several converging points:

1. Minolta’s 1985 MD Zoom instruction manual explicitly lists a 35-135mm f/3.5-4.5 MD zoom lens, establishing the production identity before the patent’s 1989 priority date.[2]
2. The patent’s Table 4 endpoints are printed as 35.9–131.5 mm and f/3.608–4.56, close to the marketed 35-135mm f/3.5-4.5 designation.[1]
3. The patent prescription contains 14 elements in 12 air-separated groups, matching the historical production specification reported for the MD 35-135mm f/3.5-4.5.[3]
4. The patent is assigned to Minolta Camera Kabushiki Kaisha.[1]
5. The patent adds a G8 image-stabilizing decenter/tilt mechanism that the production manual does not describe, and the production lens was already documented in Minolta literature by 1985.[1][2]

The resulting interpretation is therefore narrower than “this patent is the production-lens patent.” The evidence supports a close centered-formula correlation, plausibly a later stabilization adaptation of an existing optical design. It does not establish that US 5,249,079 originated the production lens.

The data file keeps marketed and modeled quantities separate. The production designation is 35-135mm f/3.5-4.5, while paraxial calculation from the transcribed d-line prescription gives 35.958411 mm and 131.527694 mm at the two source zoom endpoints. The modeled wide-open f-numbers are f/3.610666 and f/4.556630; these come from the inferred fixed stop radius described below rather than from a published physical diaphragm diameter.

## Optical Architecture

The lens is a four-unit all-spherical zoom with power sequence positive / negative / positive / positive:

- **L1, surfaces 1-5:** positive, standalone air-bounded EFL +69.930371 mm.
- **L2, surfaces 6-13:** negative, standalone air-bounded EFL -17.273260 mm.
- **L3, diaphragm r14 plus surfaces 15-19:** positive, standalone air-bounded EFL +45.385376 mm for the glass surfaces; the patent places diaphragm E in this unit (d14 = 1.24 mm is fixed, so the stop travels with L3) and N8/G8 is the patent’s deflecting element.
- **L4, surfaces 20-27:** positive, standalone air-bounded EFL +72.973084 mm.

These unit focal lengths are computed for the isolated source-defined units in air. They describe the signs and relative strengths of the unit prescriptions. They are not in-situ powers of the assembled zoom.

Two cemented pairs occur in the prescription. N1 and N2 share the r2 interface in L1, while N9 and N10 share r18 in L3. Their standalone cemented-pair EFLs are +720.498666 mm and +166.114480 mm respectively. The weak net power of the front pair illustrates why the powers of the individual components should not be conflated with the power of the cemented assembly.

Only three inter-unit spacings are published as zoom variables: d5, d13, and d19. Their wide/tele values are 0.823/27.032 mm, 18.996/1.100 mm, and 9.041/0.728 mm. The three gaps sum to 28.860 mm at both endpoints, leaving the r1-to-r27 vertex track at 88.740 mm in either source state.

A surface-1-anchored comparison gives a useful description of the internal spacing change without claiming an absolute barrel trajectory. Relative to the wide state, the L2 front surface moves +26.209 mm image-side and the diaphragm/L3 front moves +8.313 mm, while the L1 front, L4 front, and r27 return to the same positions in that temporary coordinate system. Figure 1 shows lens-unit motion during zooming, but Table 4 does not publish the absolute lens-to-film motion. The anchored coordinates therefore describe only the internal geometry implied by the table, not the manufactured cam path.[1]

Figure 1 is drawn at the longest-focal-length setting, and the patent states that its arrows show the units shifting from Tele to Wide.[1] Using the calculated back focal distances as the image-plane reference (53.269 mm wide, 78.370 mm tele), zooming from wide to tele moves L1 and L4 together 25.101 mm toward the object, moves the diaphragm and L3 16.788 mm toward the object, and leaves L2 nearly stationary (1.108 mm toward the image). These image-referenced figures depend on the calculated, not published, back focus.

The source gives only the two endpoint spacing states. LensVisualizer linearly interpolates those endpoint spacings for continuous display. That interpolation is a model convenience, not a claim that the production cam follows a linear law. It is not a source-published zoom cam.

## Element-by-Element Analysis

The element focal lengths below are standalone thick-element EFLs in air, recomputed from the final data. They are useful for describing each element’s sign and relative strength but should not be read as the element’s effective contribution when embedded in the complete zoom.

### N1 + N2 — Negative Meniscus + Biconvex Positive Cemented Pair

**N1:** nd = 1.80518, νd = 25.43. Glass: 805254 — dense flint class. f = -95.874843 mm.
**N2:** nd = 1.51680, νd = 64.20. Glass: 517642 — borosilicate crown class. f = +84.709955 mm.

N1 is a negative meniscus followed directly by the biconvex positive N2 across the cemented r2 interface. Although the individual standalone powers are substantial and opposite in sign, the pair’s computed net standalone EFL is +720.498666 mm. It therefore behaves as a weak positive cemented member when isolated from the remainder of L1.

The patent does not identify the glass manufacturers or attribute a specific aberration-correction function to this pair. The refractive coordinates are retained as coordinate/class labels rather than being converted into named vendor melts.

### N3 — Positive Meniscus

**nd = 1.77250, νd = 49.77. Glass: 772498 — lanthanum flint class (N-LAF34 / TAF1 catalog equivalent). f = +77.140188 mm.**

N3 is a positive meniscus separated from the front cemented pair by a 0.15 mm air space. Together with N1/N2 it completes the positive L1 unit. Its role can be stated securely at the unit-power level: the complete L1 prescription is positive with a standalone EFL of +69.930371 mm. The source does not separately assign N3 an aberration-control function.

### N4 — Negative Meniscus

**nd = 1.75450, νd = 51.57. Glass: 755516 — lanthanum crown class (S-YGH51 / TAC6 close equivalent). f = -25.163456 mm.**

N4 is a negative meniscus and the strongest standalone negative element in the second unit. L2 is the net negative unit of the zoom, but that group result arises from the complete N4-N7 prescription rather than N4 alone.

### N5 — Biconcave Negative

**nd = 1.69680, νd = 56.47. Glass: 697565 — lanthanum-crown class (H-LaK12 catalog equivalent). f = -43.382918 mm.**

N5 is biconcave and air-separated from N4. Its standalone power is negative. The source provides only its geometry and d-line refractive coordinates; the class label is a conservative coordinate description, not a supplier identification.

### N6 — Positive Meniscus

**nd = 1.84666, νd = 23.80. Glass: 847238 — dense flint class. f = +31.226220 mm.**

N6 is a positive meniscus inserted between the negative N5 and N7 elements. Its high d-line index and low Abbe number are directly present in Table 4. No vendor-specific spectral model is authored, so no partial-dispersion or apochromatic claim is attached to this element.

### N7 — Biconcave Negative

**nd = 1.61800, νd = 63.39. Glass: 618634 — dense phosphate crown class. f = -43.991909 mm.**

N7 is biconcave and forms the rear member of L2 immediately before the long variable gap leading to the diaphragm. The full N4-N7 unit computes to -17.273260 mm standalone EFL.

### N8 / G8 — Biconvex Positive Deflecting Element

**nd = 1.51680, νd = 64.20. Glass: 517642 — borosilicate crown class. f = +63.943872 mm.**

N8 is a biconvex positive element placed 1.24 mm behind the diaphragm. The patent identifies this element as the deflecting lens group G8. Its special role is therefore source-established rather than inferred from shape: for image stabilization, G8 is intended to move on a small circular orbit about an axial point, producing both decenter and tilt.[1]

The LensVisualizer prescription represents only the centered nominal position. No decentered or tilted state is synthesized in the ordinary sequential model.

### N9 + N10 — Biconvex Positive + Biconcave Negative Cemented Pair

**N9:** nd = 1.54072, νd = 47.20. Glass: 541472 — light flint class. f = +33.743452 mm.
**N10:** nd = 1.75520, νd = 27.51. Glass: 755275 — dense flint class. f = -40.476348 mm.

N9 is biconvex and N10 biconcave, sharing the r18 cemented interface. Their standalone cemented-pair EFL is +166.114480 mm. Together with N8 they form the positive third unit, whose standalone EFL is +45.385376 mm.

As with the front cemented pair, the calculation distinguishes individual element powers from the net power of the cemented assembly and from the in-situ behavior of L3.

### N11 — Positive Meniscus

**nd = 1.60342, νd = 38.00. Glass: 603380 — flint class. f = +63.387917 mm.**

N11 is a positive meniscus at the front of L4. Current glass catalogs contain coordinate-compatible entries for 603380, but the patent itself names no supplier. The data therefore retains the generic coordinate/class label.

### N12 — Biconcave Negative

**nd = 1.80741, νd = 31.59. Glass: Unmatched (807316 lanthanum dense flint; coordinate of discontinued Schott LaSF8). f = -27.458178 mm.**

N12 is biconcave and is the principal standalone negative element in L4. It is followed by two positive elements, and the complete unit remains positive at +72.973084 mm standalone EFL.

### N13 — Positive Meniscus

**nd = 1.51680, νd = 64.20. Glass: 517642 — borosilicate crown class. f = +67.536731 mm.**

N13 is a positive meniscus separated from N12 by a 1.94 mm air gap. It repeats the 517642 coordinate used for N2 and N8.

### N14 — Biconvex Positive

**nd = 1.51742, νd = 52.20. Glass: 517522 — crown-flint class. f = +60.810083 mm.**

N14 is the final biconvex positive element. Surface 27 is its rear surface. Because Table 4 ends there without an image-plane spacing, the model appends a calculated infinity-focus rear distance after r27 rather than treating a nonexistent patent spacing as published data.

## Glass Identification / Selection

Table 4 gives d-line refractive index and Abbe number but no glass names, manufacturers, C/F/g line indices, or partial-dispersion values.[1] The final data therefore uses six-digit coordinate codes and broad classes. Current catalog entries are useful as coordinate checks, but they are not evidence that Minolta used those specific suppliers or melts.

| Data label | nd | νd | Elements | Current catalog-coordinate cross-check |
|---|---:|---:|---|---|
| 805254 — dense flint class | 1.80518 | 25.43 | N1 | Near current dense-flint coordinates; supplier unresolved |
| 517642 — borosilicate crown class | 1.51680 | 64.20 | N2, N8, N13 | BK7/K9-class coordinate |
| 772498 — lanthanum flint class | 1.77250 | 49.77 | N3 | Catalog equivalent N-LAF34 (Schott) / TAF1 (Hoya), Δνd −0.15; supplier unresolved |
| 755516 — lanthanum crown class | 1.75450 | 51.57 | N4 | Close equivalent S-YGH51 (OHARA) / TAC6 (Hoya), Δnd +0.0005, Δνd +0.75; supplier unresolved |
| 697565 — lanthanum-crown class | 1.69680 | 56.47 | N5 | Catalog equivalent H-LaK12 (CDGM), Δνd −0.29; legacy lanthanum-crown coordinate family |
| 847238 — dense flint class | 1.84666 | 23.80 | N6 | Dense-flint coordinate family |
| 618634 — dense phosphate crown class | 1.61800 | 63.39 | N7 | Exact coordinate of current SCHOTT N-PSK53A[4] |
| 541472 — light flint class | 1.54072 | 47.20 | N9 | Current OHARA S-TIL2 is 1.54072 / 47.23[5] |
| 755275 — dense flint class | 1.75520 | 27.51 | N10 | Current catalog family coordinate; supplier not assigned |
| 603380 — flint class | 1.60342 | 38.00 | N11 | Current HIKARI J-F5 is 1.603420 / 38.03[6] |
| 807316 — lanthanum dense flint | 1.80741 | 31.59 | N12 | Unmatched: coordinate of the discontinued Schott LaSF8; no public dispersion coefficients located |
| 517522 — crown-flint class | 1.51742 | 52.20 | N14 | Exact coordinate of current HIKARI J-KF6[7] |

The slight differences between some patent Abbe values and modern catalog entries are retained rather than “corrected.” For example, Table 4 gives N9 as νd = 47.20 while the current OHARA S-TIL2 catalog gives 47.23; N11 is 38.00 in the patent versus 38.03 for current HIKARI J-F5. Those catalog matches are evidence of coordinate-family equivalence, not proof of original melt identity.

No `nC`, `nF`, `ng`, or `dPgF` values are authored for the lens. Even where a modern catalog candidate supplies line indices, projecting those properties onto an unnamed patent glass would make the chromatic model more specific than the source. The analysis therefore makes no APO or anomalous-partial-dispersion performance claim.

## Focus Mechanism

The patent publishes zoom spacings, not a finite-object focusing prescription. It does not specify which unit or units move for ordinary focus, how much they move, or how the macro setting changes internal spacings. The production Minolta manual documents normal focusing and macro operation, but those operating instructions do not determine a unique internal optical motion.[2]

For that reason the model status is **NO_INTERNAL_RECONSTRUCTION**. The `closeFocusM` value of 1.5 m is retained as product metadata from Minolta’s instruction-manual specification,[2] but every focus pair in the authored `var` structure is identical at infinity and close focus. No finite-focus optical state is being represented by those pairs.

This distinction matters for interpretation: the viewer can identify the production minimum-focus specification, but it cannot legitimately simulate the production lens’s close-focus or macro prescription from the available patent evidence.

## Image Stabilization

Image stabilization is the actual subject of US 5,249,079 A. The patent places the deflecting lens group on the image side of the diaphragm and, in this embodiment, uses the single positive N8 element immediately behind the stop as G8.[1]

The motion is not a simple parallel shift. The patent describes G8 moving slightly in a circular orbit around a predetermined point on the system axis. The resulting position combines a decenter of the group with an inclination of its own optical axis. Figure 3 defines the geometry, while Tables 1-3 compare aberration measures for several stabilization methods.[1]

The centered data file cannot encode this circular-orbit decenter/tilt mechanism with the ordinary sequential `LensDataInput` fields. N8 is therefore modeled only at its nominal centered position. The absence of a stabilization control in the data file is a model-scope limitation, not a claim that the patent lacks stabilization.

## Conditional Expressions

The patent gives three inequalities governing the deflecting system. Using the final-data calculation for the long-end EFL, the standalone N8/G8 EFL, the source longest-focal-length f-number, and the patent’s preferred X = 140 mm gives:

| Patent condition | Recomputed value | Result |
|---|---:|---|
| 0.2 < \|X / fT\| < 3.5 | 1.064415 | within range |
| 6 < \|fA / FN\| < 32 | 14.022779 | within range |
| 0.2 < \|fA / fT\| < 1 | 0.486163 | within range |

Here `fT` is the zoom-system focal length at the longest-focal-length condition, `fA` is the focal length of the deflecting lens group, `FN` is the longest-focal-length f-number, and `X` is the distance from the object-side vertex of G8 to the center of its circular motion.[1]

The recomputed values are 131.527694 mm for `fT` and +63.943872 mm for standalone `fA`; `FN = 4.56` and `X = 140 mm` are source values. The detailed description prints the third condition with a 0.2 lower bound, while claim 1 narrows that lower bound to 0.4. The computed value, 0.486163, satisfies both forms. The calculations verify the selected numerical embodiment against these stated ranges; they do not independently validate the patent’s higher-order aberration claims for a decentered system.

## Verification Summary

### First-order model

Two independently coded first-order methods—a sequential height/reduced-angle trace and an ABCD matrix chain—agree to floating-point precision at both source endpoints. The final parsed data gives:

| Quantity | Wide | Tele |
|---|---:|---:|
| Computed EFL | 35.958411 mm | 131.527694 mm |
| Patent Table 4 focal length | 35.9 mm | 131.5 mm |
| Residual | +0.058411 mm | +0.027694 mm |
| Calculated BFD from r27 | 53.268774 mm | 78.369634 mm |
| Modeled f-number | 3.610666 | 4.556630 |
| r1-r27 vertex track | 88.740 mm | 88.740 mm |

The wide-end EFL differs from the printed 35.9 mm by 0.058411 mm, slightly more than a strict half-last-digit interval of 0.05 mm. That discrepancy is retained explicitly. The accepted comparison uses 0.10 mm because both the system focal length and many prescription entries are printed to finite precision; no patent value is silently adjusted.

The surface-by-surface Petzval sum, using `phi/(n·n′)` at each refracting surface, is 0.002729070037 mm^-1. Its simple reciprocal is 366.425187 mm. This is a first-order Petzval curvature measure, not a prediction that the actual best-image surface is a sphere of that radius.

### Image-plane normalization and stop

Table 4 publishes no r27-to-image distance. The model therefore appends the independently calculated d-line paraxial infinity-focus BFD at each endpoint: 53.268774 mm at wide and 78.369634 mm at tele. These values are deterministic normalization distances, not patent-published `d27` spacings.

The patent locates the diaphragm at r14 but gives no physical aperture diameter. Solving from the two published f-numbers independently implies stop semi-diameters of approximately 9.0784 mm and 9.0650 mm. The model uses their rounded mean, 9.071709 mm, as a fixed inferred physical stop radius. With that radius, the final prescription produces f/3.610666 and f/4.556630. Agreement with the nominal model values is calibration consistency, not an independent measurement of the manufactured iris.

### Modeled semi-diameters and geometry

No numerical clear apertures are published. The authored semi-diameters are therefore modeling inferences derived from exact meridional ray envelopes and the current geometry rules, with wide, tele, and 25/50/75% intermediate zoom samples checked. A comparison against Fig. 1 of the patent (scaled from the L1 vertex spacing, about 0.087 mm/px) puts every drawn rim within roughly 10% of the modeled value except the front of G4: surface 6 is set to 11.8 mm to follow the drawn outline (about 12.0 mm), which also lets the wide-station chief ray to the 21.6 mm format corner (10.38 mm at that surface) pass.

The maximum modeled spherical rim slope is 34.9504° at surface 7. The minimum calculated shared-band edge thickness is 0.7090 mm on N8. The tightest shared-band air-gap case is surfaces 23-24, where the modeled 1.723208 mm sag intrusion remains 0.022792 mm inside the 90%-of-gap limit.

The chief and inner off-axis fan samples remain contained at all five checked zoom states. The outer ±0.75 fan is slightly clipped at surfaces 23/24 from wide through mid zoom, with the largest sampled excess about 0.236 mm at surface 23 and 0.284 mm at surface 24 at the wide endpoint. Enlarging those two modeled apertures enough to contain the outer fan would violate the shared-band cross-gap constraint, so the vignetting is retained rather than hidden by invalid geometry.

These checks establish internal consistency of the modeled apertures. They do not establish production clear-aperture dimensions or substitute for LensVisualizer’s production render diagnostics.

### Endpoint-only zoom source

The patent supplies two spacing states, not a continuous zoom cam. At 25%, 50%, and 75% linear interpolation between the source endpoints, the paraxial BFD required by the interpolated internal prescription differs from the linearly interpolated authored image spacing by +0.784807 mm, +2.558872 mm, and +3.955896 mm respectively.

Those intermediate states are useful for geometry stress testing, but they are not asserted to be in-focus physical zoom states. The source-backed optical claims are restricted to the wide and tele endpoints.

## Sources / References

1. Hiromu Umeda, **“Lens System,” US 5,249,079 A**, Minolta Camera Kabushiki Kaisha. Priority JP 1-221299, August 28, 1989; filed August 28, 1990; granted September 28, 1993. Primary prescription: Fig. 1, Fig. 3, Tables 1-4, especially Table 4 on printed p. 6 (PDF p. 6). Patent text mirror: https://patents.justia.com/patent/5249079
2. Minolta Camera Co., Ltd., **MD Zoom Lenses Instruction Manual**, 9222-9002-06 N002-B1, 1985. The manual includes the MD Zoom 35-135mm f/3.5-4.5, gives a 1.5 m normal minimum focusing distance, and describes zoom/focus and macro operation. https://www.massimoscottinelweb.com/Immagini%20ridotte%20per%20SITO%20web/Minolta%20pubblicit%C3%A0%20e%20cataloghi%20d%27epoca/Libretti%20di%20Istruzione/Minolta%20MD%20Zoom%20Lenses%20Instruction%20Manual%20E-G-F-S%209222-9002-06%20N002-B1.pdf
3. Dennis Lohmann, **MINOLTA Manual Lens List**, historical secondary reference for the production MD Zoom 35-135mm f/3.5-4.5 element/group count, minimum focus, and release listing. https://minolta.eazypix.de/lenses/
4. SCHOTT, **N-PSK53A optical glass**, current catalog entry: nd = 1.61800, νd = 63.39, glass code 618634. https://www.us.schott.com/shop/advanced-optics/en/Optical-Glass/N-PSK53A/c/glass-N-PSK53A
5. OHARA, **S-TIL optical glass family**, including S-TIL2: nd = 1.54072, νd = 47.23, code 541472. https://oharacorp.com/glass-type/optical-glass/s-til/
6. Nikon / HIKARI, **J-F5 optical glass**, nd = 1.603420, νd = 38.03, code 603380. https://www.nikon.com/business/components/lineup/materials/optical-glass/catalog/pdf/J-F5.pdf
7. Nikon / HIKARI, **KF optical glass family**, including J-KF6: nd = 1.517420, νd = 52.20, code 517522. https://www.nikon.com/business/components/lineup/materials/optical-glass/catalog/kf.html
