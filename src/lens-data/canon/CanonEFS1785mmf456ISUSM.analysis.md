## Patent Reference and Design Identification

**Patent:** US 2006/0023317 A1\
**Application Number:** 11/189,183\
**Priority:** July 30, 2004\
**Filed:** July 25, 2005\
**Published:** February 2, 2006\
**Inventor:** Makoto Fujimoto\
**Assignee:** Canon Kabushiki Kaisha\
**Title:** Zoom Lens System and Image Pickup Apparatus Using the Same\
**Example details:** Numerical Embodiment 1 (corresponding to Exemplary Embodiment 1)

The prescription represented here is the selected correlation for the CANON EF-S 17-85mm f/4-5.6 IS USM. The patent does not identify that commercial product by name, so the correlation is not presented as manufacturer confirmation. It rests instead on several convergent source facts.

1. Numerical Embodiment 1 contains 17 elements in 12 air-separated groups, matching Canon's published construction for the EF-S 17-85mm f/4-5.6 IS USM.
2. The patent design spans 17.55-82.48 mm, while Canon markets the lens as 17-85mm. No scale change is required: the data file retains the patent prescription at `s = 1` and keeps `[17, 85]` as separate marketing metadata.
3. Figure 2 gives modeled maximum-aperture states of f/4.11, f/4.45, and f/5.77. These remain distinct from the patent header's rounded f/4.0-5.77 range and Canon's marketed f/4-5.6 range.
4. The patent places image stabilization in the negative fourth unit and focusing in the negative second unit (¶0056-¶0060). Canon identifies the product as an Image Stabilizer lens with an inner-focusing system and focusing cam.
5. Exemplary Embodiment 1 uses a positive fifth-unit element with both surfaces aspherical (¶0063). Canon's product record identifies one double-sided glass-molded aspherical element.
6. The Japanese priority date of July 30, 2004 immediately precedes Canon's September 2004 market date for the production lens.

Canon specifies a 0.35 m closest focusing distance and 0.20× maximum magnification. Those marketed values are not used to alter the patent's infinity prescription; they constrain the finite-distance reconstruction described below.

The patent's Numerical Embodiment 1 is used without sensor cover glass, filter, flare-cutter plane, or other optional optical element. Paragraph 0069 merely permits an added filter or weak-power unit outside the worked prescription. No air-equivalent plate correction is therefore required in this model. The last-surface spacing `d30` is not a patent row: it is the computed Gaussian back focal distance needed by the sequential LensVisualizer model to place the image plane at each authored zoom state.

## Optical Architecture

The design is a five-unit zoom with power sequence positive-negative-positive-negative-positive, corresponding to L1-L5 in the patent (¶0048). It contains 17 physical glass elements in 12 air-separated groups. The stop is an independent plane between L2 and L3 and is explicitly identified as `SP` in the patent (¶0049); its axial placement is therefore source-published rather than inferred.

The intrinsic air-equivalent focal lengths below are computed for the isolated units from the final data arrays. They describe each unit's standalone power, not its scalar contribution while embedded in the complete zoom system.

| Unit | Elements | Intrinsic f in air | Function in the authored model                                                    |
| ---- | -------- | -----------------: | --------------------------------------------------------------------------------- |
| L1   | E1-E3    |      +66.469026 mm | Positive front unit                                                               |
| L2   | E4-E7    |      -11.200228 mm | Strong negative zoom/focus unit                                                   |
| L3   | E8-E11   |      +21.934239 mm | Positive central unit behind the stop                                             |
| L4   | E12-E14  |      -27.918158 mm | Negative unit containing the IS subunit                                           |
| L5   | E15-E17  |      +34.075353 mm | Positive rear unit containing the double-sided asphere and weak-negative G5b pair |

The aperture stop lies between surfaces 13 and 15. Surface label `STO` carries the patent's variable spacing `d14`. No physical diameter is source-published. The current data derives its active iris from the Figure 2 design f-numbers; source-station radii are 4.606743 / 5.409613 / 4.844751 mm. No `STO.sd = 5.42` value is authored in the current schema.

The infinity zoom table is transcribed at 17.55, 35.00, and 82.48 mm. Patent spacings `d5`, `d13`, `d14`, `d20`, and `d25` remain exact. The stop-to-L3 spacing has a small reversal, 4.28 → 1.72 → 1.74 mm, so the interpolation is intentionally piecewise rather than globally monotonic.

With each prescription normalized to its Gaussian image plane, wide-to-long-end movement from the final data arrays is:

| Unit | Long minus wide | Direction in the fixed-image-plane model |
| ---- | --------------: | ---------------------------------------- |
| L1   |   -26.503352 mm | objectward                               |
| L2   |    +1.086648 mm | imageward                                |
| STO  |   -10.243352 mm | objectward                               |
| L3   |   -12.783352 mm | objectward                               |
| L4   |    -4.863352 mm | objectward                               |
| L5   |   -12.783352 mm | objectward                               |

Most of these motions agree with the gap trends described in ¶0052-¶0055. One direct source contradiction remains: ¶0054 says L4 moves toward the image side while the Numerical Embodiment 1 spacings, when referenced to the fixed Gaussian image plane, move L4 4.863352 mm objectward. The data preserves the numerical prescription rather than changing it to force agreement with the prose.

The computed total-length-to-EFL ratios are 7.6583, 4.1779, and 1.9511. Under the project definition `TL/EFL < 1`, none of the three states is a telephoto-form system. The wide and middle states satisfy the separate retrofocus criterion `BFD > EFL`; the long state does not.

## Element-by-Element Analysis

### D1 — E1 Negative Meniscus + E2 Plano-Convex Positive

**E1:** nd = 1.8467, νd = 23.9. Glass: 847239 optical-glass class (vendor unspecified). f = -103.787953 mm.\
**E2:** nd = 1.6031, νd = 60.6. Glass: 603606 optical-glass class (vendor unspecified). f = +78.408224 mm.\
**Cemented pair:** intrinsic f = +328.964306 mm.

E1 and E2 form the first cemented pair of L1. The individual elements have opposite standalone powers, but the cemented combination is weakly positive. This pair precedes the separate positive E3, so the complete L1 unit is substantially more positive than D1 alone.

The front-group semi-diameters in the data are inferred rather than published. Their large values follow the wide-angle pupil and field envelope and were bounded by the current edge, slope, and cross-gap geometry checks.

### E3 — Positive Meniscus

**nd = 1.7340, νd = 51.5. Glass: 734515 optical-glass class (vendor unspecified). f = +81.899735 mm.**

E3 is the air-spaced rear element of L1. Together with D1 it produces the unit's computed +66.469026 mm intrinsic focal length. The patent characterizes L1 only at the unit level as positive; no more specific aberration assignment for E3 is asserted here.

### E4 — Negative Meniscus

**nd = 1.7725, νd = 49.6. Glass: 773496 optical-glass class (vendor unspecified). f = -14.220435 mm.**

E4 is the strongest standalone negative element in the four-element L2 focus unit. L2 is the negative unit that changes its separation from L1 and L3 during zooming and is the only unit moved in the authored close-focus reconstruction.

### E5 — Biconcave Negative

**nd = 1.8830, νd = 40.8. Glass: 883408 optical-glass class (vendor unspecified). f = -23.306865 mm.**

E5 adds negative standalone power inside L2. It is air-spaced from both neighbors, so its power is not to be conflated with a cemented-group value. Its radius, thickness, and index remain source-published. The 2026-10-30 native Figure 1 check resolves a prior assignment error: the taller rectangle belongs to E4 (R6/R7), while the following E5 curved endpoints are about 8.5 mm. The 2026-08-25 enlargement to 11.8/12.5 is superseded by 8.5/8.5; its historical date remains in the audit. E4 front S6 becomes 12.5, and its resolved rear S7 shoulder preserves the gap-limited 8.15 clear cap.

### E6 — Biconvex Positive

**nd = 1.8052, νd = 25.4. Glass: 805254 optical-glass class (vendor unspecified). f = +15.568187 mm.**

E6 is the positive component within the otherwise strongly negative L2 unit. Its relatively low νd is a source coordinate only; no specific flint family or anomalous-dispersion behavior is assigned because the patent provides no vendor identity or line-index data.

### E7 — Biconcave Negative

**nd = 1.8040, νd = 46.6. Glass: 804466 optical-glass class (vendor unspecified). f = -27.696244 mm.**

E7 closes L2 immediately before the variable `d13` gap leading to the stop. In the constrained focus model, this rear boundary moves with L2 while `d13` changes by the equal-and-opposite amount to `d5`.

### D2 — E8 Negative Meniscus + E9 Biconvex Positive

**E8:** nd = 1.7200, νd = 50.2. Glass: 720502 optical-glass class (vendor unspecified). f = -26.270728 mm.\
**E9:** nd = 1.4875, νd = 70.2. Glass: 487702 optical-glass class (vendor unspecified). f = +23.342132 mm.\
**Cemented pair:** intrinsic f = +200.629066 mm.

D2 is the first of two cemented pairs in L3. Its net intrinsic power is weakly positive even though its front component is negative. The pair lies directly behind the aperture stop and contributes to the positive L3 unit.

### D3 — E10 Biconvex Positive + E11 Negative Meniscus

**E10:** nd = 1.4875, νd = 70.2. Glass: 487702 optical-glass class (vendor unspecified). f = +16.600005 mm.\
**E11:** nd = 1.6889, νd = 31.1. Glass: 689311 optical-glass class (vendor unspecified). f = -52.454987 mm.\
**Cemented pair:** intrinsic f = +24.287281 mm.

D3 supplies most of L3's isolated positive power. The large difference in νd between E10 and E11 establishes an ordinary achromatizing index/dispersion contrast at the d-line/Abbe level. Compatible catalog curves support chromatic tracing, but the patent does not publish the line indices needed for a stronger secondary-spectrum or APO claim.

### D4 / L4a — E12 Positive Meniscus + E13 Biconcave Negative

**E12:** nd = 1.8467, νd = 23.9. Glass: 847239 optical-glass class (vendor unspecified). f = +28.304194 mm.\
**E13:** nd = 1.7620, νd = 40.1. Glass: 762401 optical-glass class (vendor unspecified). f = -18.939534 mm.\
**Cemented L4a pair:** intrinsic f = -55.344224 mm.

The patent divides L4 into L4a and L4b and describes L4a as a positive-plus-negative combination that can move transversely for image stabilization (¶0057-¶0059). The final prescription follows that identification: E12 and E13 are the cemented L4a pair and have weak negative net power in isolation.

That -55.344224 mm value is an intrinsic cemented-pair focal length, not a measure of stabilization sensitivity or in-situ contribution to the full zoom. No decenter amplitude is published in the selected numerical example, so none is invented in the data or analysis.

### E14 — Negative Meniscus / L4b

**nd = 1.6031, νd = 60.6. Glass: 603606 optical-glass class (vendor unspecified). f = -65.253722 mm.**

E14 is the single negative L4b element described by ¶0057 and ¶0059. Together with the negative L4a cemented pair it gives L4 an intrinsic focal length of -27.918158 mm. Paragraph 0060 permits alternative stabilization assignments in the broader invention, but the selected Example 1 model identifies L4a as the IS subunit shown in Figure 1.

### E15 / G5a — Biconvex Positive, Two Aspherical Surfaces

**nd = 1.5831, νd = 59.4. Glass: 583594 optical-glass class (vendor unspecified). f = +24.048005 mm.**

E15 is the positive G5a element of L5, and both surfaces 26A and 27A are aspherical. Paragraph 0063 explicitly describes this two-sided aspherical arrangement for Exemplary Embodiments 1 and 4. The patent links the fifth-unit asphere to control of aberrations including distortion and to the broader image-stabilized design strategy (¶0062-¶0068).

The selected numerical example does not name E15's glass manufacturer. Paragraph 0064's example of Sumita GFK70 belongs specifically to Exemplary Embodiment 4 and is therefore not transferred to E15 here.

### D5 / G5b — E16 Positive Meniscus + E17 Negative Meniscus

**E16:** nd = 1.4875, νd = 70.2. Glass: 487702 optical-glass class (vendor unspecified). f = +80.747831 mm.\
**E17:** nd = 1.8467, νd = 23.9. Glass: 847239 optical-glass class (vendor unspecified). f = -42.325481 mm.\
**Cemented G5b pair:** intrinsic f = -79.648844 mm.

D5 is the weak-negative cemented combination lens G5b described in ¶0063. The patent's design rationale focuses on reducing the difference between the facing curvatures of G5a and G5b while controlling the combination lens's net power, thereby addressing ghost-light and coma constraints (¶0013-¶0019, ¶0062, ¶0071-¶0074).

E16 and E17 should not be read as individually performing the full G5b function: the relevant source condition is defined on the cemented pair's net power. The pair remains negative while the complete L5 unit remains positive at +34.075353 mm intrinsic focal length.

## Glass Identification / Selection

The final data deliberately uses vendor-neutral six-digit optical-glass coordinate classes. Numerical Embodiment 1 publishes `nd` to four decimals and `νd` to one decimal but does not name a manufacturer. The resolver may use a coordinate-compatible curve from the verified catalog, but that proxy does not establish a historical production supplier or melt.

| Authored coordinate class  |     nd |   νd | Elements     |
| -------------------------- | -----: | ---: | ------------ |
| 847239 optical-glass class | 1.8467 | 23.9 | E1, E12, E17 |
| 603606 optical-glass class | 1.6031 | 60.6 | E2, E14      |
| 734515 optical-glass class | 1.7340 | 51.5 | E3           |
| 773496 optical-glass class | 1.7725 | 49.6 | E4           |
| 883408 optical-glass class | 1.8830 | 40.8 | E5           |
| 805254 optical-glass class | 1.8052 | 25.4 | E6           |
| 804466 optical-glass class | 1.8040 | 46.6 | E7           |
| 720502 optical-glass class | 1.7200 | 50.2 | E8           |
| 487702 optical-glass class | 1.4875 | 70.2 | E9, E10, E16 |
| 689311 optical-glass class | 1.6889 | 31.1 | E11          |
| 762401 optical-glass class | 1.7620 | 40.1 | E13          |
| 583594 optical-glass class | 1.5831 | 59.4 | E15          |

No `nC`, `nF`, `ng`, or `dPgF` fields are authored as patent evidence because Numerical Embodiment 1 does not publish them. The g-line curves in Figure 2 demonstrate that the patent evaluated chromatic behavior, but they do not supply per-element line indices. Catalog-resolved curves are qualified spectral proxies only; they do not support an APO designation or a claim of anomalous partial dispersion.

The relatively high-νd 1.4875/70.2 coordinate is repeated in E9, E10, and E16, while low-νd coordinates occur in E1/E12/E17 and E6/E11. These source coordinates produce ordinary dispersion contrast across several cemented groups, while the vendor-neutral labels avoid turning compatible catalog curves into unsupported production identities.

## Focus Mechanism

Canon describes the production lens as an inner-focusing design with a focusing cam and specifies a 0.35 m closest focusing distance. The patent states that L2 performs focus and says that near focusing moves L2 toward the image side (¶0056). Numerical Embodiment 1 does not publish finite-distance spacing rows.

The data therefore marks focus as `CONSTRAINED_RECONSTRUCTION`. Only L2 translates. At each zoom position, `d5` and `d13` change by equal and opposite amounts, preserving `d5 + d13`; all other optical-unit gaps remain at their corresponding zoom-state values. The Gaussian image plane is held fixed. Canon's 0.35 m MFD is referenced to the image plane and is normalized to an object-to-surface-1 distance before solving the finite conjugate.

| Design f | d5 infinity | d5 at 0.35 m | d13 infinity | d13 at 0.35 m |     L2 shift | Computed | m   |     |
| -------: | ----------: | -----------: | -----------: | ------------: | -----------: | -------: | --- | --- |
| 17.55 mm |    2.150000 |     1.048778 |    14.250000 |     15.351222 | -1.101222 mm | 0.069299 |
| 35.00 mm |   14.600000 |    12.686323 |     8.920000 |     10.833677 | -1.913677 mm | 0.123734 |
| 82.48 mm |   29.740000 |    24.871995 |     2.920000 |      7.788005 | -4.868005 mm | 0.202141 |

The sign convention in this table takes positive L2 travel as imageward. All three solutions are therefore objectward, directly opposite the direction stated in ¶0056. This contradiction is not silently reconciled. The mechanism constraint is retained, the numerical finite-conjugate solution is retained, and the source statement remains identified as contradictory.

At the long zoom state the reconstruction gives |m| = 0.202141, closely reproducing Canon's published 0.20× maximum magnification. Sequential height/reduced-angle tracing and an independent ABCD solution place the reconstructed object point on the fixed image plane to numerical precision. This agreement is supporting evidence for the constrained reconstruction, not evidence that Canon published these exact internal spacings.

## Aspherical Surfaces

Surfaces 26A and 27A are the two faces of E15/G5a. Paragraph 0078 defines the aspheric sag as

$$
X(h)=\frac{(1/R)h^2}{1+\sqrt{1-(1+K)(h/R)^2}}
+B h^4+C h^6+D h^8+E h^{10}+F h^{12}.
$$

The patent's `K` is therefore already the standard conic constant used by LensVisualizer. No `K` conversion is applied. The prescription is unscaled (`s = 1`), so the polynomial coefficients also require no scale transformation. In the data file, patent coefficients `B` through `F` map directly to `A4` through `A12`; `A14` is zero because the source supplies no fourteenth-order term.

| Surface |       K |        A4 |        A6 |         A8 |        A10 |        A12 |
| ------- | ------: | --------: | --------: | ---------: | ---------: | ---------: |
| 26A     |  +2.291 | -7.384e-6 | +9.674e-9 | -1.371e-10 | +2.396e-13 | +8.332e-16 |
| 27A     | -0.1619 | +1.514e-5 | +3.849e-8 | -1.638e-10 | +3.147e-13 | +1.097e-15 |

The patent does not publish clear apertures for these surfaces. Their authored semi-diameters, 14.5 mm for 26A and 15.5 mm for 27A, are modeled values derived from the pupil/field envelope and geometry constraints. Both are inside the real-sag domains of their conic bases: approximately 24.994 mm for 26A and 20.689 mm for 27A. The current validator's stricter 0.98 conic limit for positive K gives about 24.494 mm for 26A, still well beyond its authored 14.5 mm rim.

Because the semi-diameters are now fixed and verified, departures from the same-R spherical references can be stated at those modeled rims. Surface 26A departs by -0.159511 mm at h = 14.5 mm; surface 27A departs by +1.749518 mm at h = 15.5 mm. These are computed model quantities, not patent-published departures.

Canon's product record describes the production lens as using a double-sided glass-molded aspherical element. The selected patent confirms two aspherical faces on G5a but does not, for Example 1, require a particular manufacturing process. Paragraph 0068 explicitly allows several asphere fabrication methods. The glass-molded description is therefore a production-lens fact used in the correlation, not an inferred manufacturing property of the numerical table itself.

## Image Stabilization

The patent places stabilization within L4. L4 is divided into negative L4a and negative L4b subunits (¶0057); L4a is a cemented positive-plus-negative pair and can move with a component perpendicular to the optical axis to change image position (¶0058-¶0059). Figure 1 marks that transverse motion with `Q`.

The final data identifies E12+E13 as `L4a / IS`. Their isolated cemented focal length is -55.344224 mm, while E14 forms L4b and the complete L4 unit has isolated focal length -27.918158 mm. Those focal lengths characterize centered paraxial power only. They do not quantify decenter sensitivity or stabilization authority.

Neither the selected numerical table nor the final data supplies an IS decenter range. The LensVisualizer prescription therefore remains a centered optical model and does not invent a lateral movement state. Canon's product documentation independently establishes that the production EF-S 17-85mm lens incorporates Image Stabilizer hardware.

## Conditional Expressions

The patent defines two conditions for the fifth unit. In the selected prescription, `R1` is the image-side radius of G5a, r27 = -18.940 mm, and `R2` is the object-side radius of G5b, r28 = -28.057 mm.

For Condition 1,

$$
\left|\frac{R_1-R_2}{R_1+R_2}\right|=0.193991106.
$$

This reproduces Table 1's rounded 0.19 and satisfies the patent's primary lower bound of 0.1, the additional lower bound of 0.15, and the stated upper bound of 3. The condition is associated with the facing curvatures of G5a and G5b and the patent's ghost-light discussion (¶0071-¶0072).

For Condition 2, the relevant quantities are the net powers of L5 and G5b rather than the standalone powers of E16 or E17:

- L5 intrinsic f = +34.075353 mm, so φ5 = +0.029346724 mm⁻¹.
- G5b intrinsic f = -79.648844 mm, so φ5b = -0.012555110 mm⁻¹.
- `|φ5b/φ5| = 0.427819809`.

The result reproduces the patent's 0.43 and satisfies the `< 0.5`, `< 0.45`, and `> 0.02` bounds in ¶0073-¶0076.

Table 1 itself contains a dimensional labeling inconsistency: the entries 34.07 and -79.65 appear under headings presented as φ5 and φ5b, but independent matrix calculation shows that these numbers are focal lengths in millimeters. Their reciprocal-power ratio nevertheless gives the published 0.43. The analysis preserves that source issue rather than treating 34.07 and -79.65 as powers.

## Scoped native-source review and current runtime — 2026-10-30

The exact original `patents/US20060023317A1.pdf` was inspected: US 2006/0023317 A1, Numerical Embodiment 1, PDF pages 16–17 / printed pages 4–5. Paragraph 0078 on page 16 explicitly defines the d-line reference and conic-plus-polynomial equation. Figure 1 is on PDF page 2 / sheet 1; Figures 2A–2C on page 3 / sheet 2 give Fno. 4.11 / 4.45 / 5.77 and Y = 13.65 mm. The numerical header's rounded wide Fno. 4.0 is retained separately. No prescription publication or example is substituted.

The unchanged 2026-08-25 prescription, cap constraints and 17-medium glass conclusions are reused with their actual date. Reopening is limited to the reproducible E4/E5 outline assignment, omitted air shoulders, stale current-iris prose, structured source/model qualifications and current runtime checks. It does not create an additional reused lens count. The source's seventeen rounded d-line pairs remain unchanged; all 17 compatible curves remain qualified spectral proxies. No historical supplier, melt, chemistry, cement, coating or manufacturing identity is established. The source prints no individual C/F/g indices, partial-dispersion or APD measurements, and no per-lens spectral override is added or removed. Its generic GFK70 example in paragraph 0064 is not an identification of a numerical-example medium.

The original embeds 2560 × 3300 one-bit pages at native 300 ppi. The earlier 600 dpi viewing enlarged that raster. In the wide section the axial scale is about 11.2 native px/mm, with practical ±0.6 mm rim uncertainty from broad lines and modest figure anisotropy. Brackets, leaders, Q/F motion arrows and the axis are excluded. The clean native L2 crop distinguishes four elements by their weak/strong source curvatures: E4's tall meniscus blank, E5's smaller biconcave outline, E6 positive and E7 negative.

The accepted clear-cap changes are S6 11.0 → 12.5 mm and S8/S9 11.8/12.5 → 8.5/8.5 mm. Three resolved air-facing vertical strokes become `rimExtensionSd`: S7 outer 12.5 / clear 8.15, S11 outer 8.5 / clear 6.85, S12 outer 7.75 / clear 6.85. No opaque bonded-interface lands, inferred cuts or resin layers are added. Other caps, including the geometry-constrained rear G5b pair, retain the dated review disposition. The front plain blank does not authorize an opaque flat-face land, and no new rear optical aperture is inferred from contaminated G5b leaders.

A trial S11 = 8.5 / S12 = 7.75 clear aperture fails the source 0.050 mm gap: shared sag 0.054664 mm exceeds the unchanged 0.045 mm permitted intrusion at every source zoom station. Retain 6.85 clear caps and represent only resolved outer strokes. Source R/d, both aspheres, all material numbers, source zoom rows, derived iris and constrained close-focus cams remain unchanged. No tolerance or source value is adjusted to fit the drawing or a ray.

The source numerical prescription reproduces EFL 17.552678 / 34.986440 / 82.482175 mm. Its final image gap is unpublished, so the existing computed BFD 38.083640 / 45.269362 / 50.866993 remains a model quantity, with source-station infinity residual below 4 × 10⁻¹² mm by construction. Derived iris radii are 4.606743 / 5.409613 / 4.844751 mm; real working values are 4.130558 / 4.502434 / 5.808035 under 1/(2 n′ sin θ′). The separate aperture census preserves the paraxial-reference beam convention and matches source targets 4.11 / 4.45 / 5.77. No physical iris schedule is source-published.

A 65-position clone matches actual runtime z/sd geometry at every sampled zoom and focus 0/0.5/1 (maximum difference zero). All 65 infinity aperture stations meet the unchanged 3% criterion; the field audit reaches at least 99%. The largest sampled infinity defocus is +1.087070 mm at zoom 0.828125, where actual EFL is 60.054892 versus displayed linear 66.158750 mm. Three source stations do not define the continuous compensator cam.

The retained constrained close endpoints at source zooms place the 0.35 m object on the image to below 10⁻¹² mm, but intermediate focus/zoom is not continuously focus preserving: the 65 zoom × 21 focus census reaches +1.469221 mm finite conjugate residual at tele / focus 0.4 (displayed 0.875 m), and the worst intermediate close residual is −1.139519 mm. At 21 zoom × 21 focus positions × eight presets, 3432 of 3528 real working calls trace and 96 are unavailable with `object-inside-lens`, unchanged from baseline. Those twelve early-focus/intermediate-zoom state combinations are a runtime conjugate limitation, not evidence for a source radius or cam change.

A separate current-iris 193-point pupil at 65 zoom × five focus positions × four fields gives 1300 field states. Every axial pupil passes 193/193. Source infinity corner counts are 109 / 147 / 163, versus baseline 103 / 147 / 163; close counts are 113 / 123 / 113, versus 74 / 123 / 113. Off-axis clipping remains and does not certify production illumination. The five-focus pupil grid does not represent the separate unavailable early-focus states.

Surface validation passes and image-circle audit reports zero undersized lenses. At 65 zoom × 21 focus states, 23,205 actual SVG paths are finite, closed and connected, with zero hidden renderer trimming. The largest queried runtime APS-C corner shortfall is 13.998032 versus 14.175 mm at a reconstructed finite state; this is explicitly separate from the source Y = 13.65 mm and the passing infinity field census. Wide/middle/tele SVGs were compared with the native source wide section, showing the corrected E4/E5 assignment and connected concave-end shoulders. No source tele section is invented.

Existing source/model issues are formalized as unresolved `source.errata`, with no numeric correction: paragraph 0054 L4 imageward wording versus the computed fixed-image-plane kinematics; paragraph 0056 imageward near-focus L2 wording versus the retained objectward constrained reconstruction; and Table 1's φ5/φ5b labels applied to values matching focal lengths. The source supplies neither a final image spacing nor a finite-focus table, so these remain qualified model/source discrepancies. IS transverse travel remains uncalibrated and unmodeled. Source fidelity, sampled centered runtime, spectral proxies and production correlation remain separate conclusions.

## Sources / References

1. Makoto Fujimoto, **US 2006/0023317 A1, “Zoom Lens System and Image Pickup Apparatus Using the Same,”** Canon Kabushiki Kaisha, published February 2, 2006. Numerical Embodiment 1 and Exemplary Embodiment 1 are the prescription and descriptive sources used here. <https://patents.google.com/patent/US20060023317A1/en>
2. Canon Camera Museum, **EF-S17-85mm f/4-5.6 IS USM** — market date, 17-element/12-group construction, 0.35 m closest focus, 0.20× maximum magnification, six-blade diaphragm, Image Stabilizer, and double-sided glass-molded aspherical element. <https://global.canon/en/c-museum/product/ef379.html>
3. Canon U.S.A., **EF-S 17-85mm f/4-5.6 IS USM Support** — 17-85mm f/4-5.6, 17 elements in 12 groups, inner focusing with focusing cam, 0.35 m closest focus, and ring USM. <https://www.usa.canon.com/support/p/ef-s-17-85mm-f-4-5-6-is-usm>
4. Canon Latin America, **EF-S 17-85mm f/4-5.6 IS USM** — EF-S/APS-C product identity, Image Stabilizer, ring-type USM, and 0.35 m close focus. <https://www.cla.canon.com/en/p/ef-s-17-85mm-f-4-5-6-is-usm>
5. Current optical-glass catalogs consulted for coordinate-class ambiguity only: OHARA <https://oharacorp.com/>, HOYA <https://www.hoya-opticalworld.com/english/datadownload/index.html>, SCHOTT <https://www.schott.com/en-gb/products/optical-glass-p1000267/downloads>, HIKARI <https://www.hikari-g.co.jp/optical_glass/catalog/>, CDGM <https://www.cdgmgd.com/go.htm?k=Colourless_Optical_Glass&url=goods>, and SUMITA <https://www.sumita-opt.co.jp/en/download/>. No vendor name from these catalogs is assigned to Numerical Embodiment 1.
