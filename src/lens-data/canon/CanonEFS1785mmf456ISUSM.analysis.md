## Patent Reference and Design Identification

**Patent:** US 2006/0023317 A1  
**Application Number:** 11/189,183  
**Priority:** July 30, 2004  
**Filed:** July 25, 2005  
**Published:** February 2, 2006  
**Inventor:** Makoto Fujimoto  
**Assignee:** Canon Kabushiki Kaisha  
**Title:** Zoom Lens System and Image Pickup Apparatus Using the Same  
**Embodiment analyzed:** Numerical Embodiment 1 / Exemplary Embodiment 1

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

| Unit | Elements | Intrinsic f in air | Function in the authored model |
|---|---|---:|---|
| L1 | E1-E3 | +66.469026 mm | Positive front unit |
| L2 | E4-E7 | -11.200228 mm | Strong negative zoom/focus unit |
| L3 | E8-E11 | +21.934239 mm | Positive central unit behind the stop |
| L4 | E12-E14 | -27.918158 mm | Negative unit containing the IS subunit |
| L5 | E15-E17 | +34.075353 mm | Positive rear unit containing the double-sided asphere and weak-negative G5b pair |

The aperture stop lies between surfaces 13 and 15. Surface label `STO` carries the patent's variable spacing `d14`. Its authored semi-diameter of 5.42 mm is not source-published; it is a derived physical clear limit large enough for the modeled maximum-aperture states.

The infinity zoom table is transcribed at 17.55, 35.00, and 82.48 mm. Patent spacings `d5`, `d13`, `d14`, `d20`, and `d25` remain exact. The stop-to-L3 spacing has a small reversal, 4.28 → 1.72 → 1.74 mm, so the interpolation is intentionally piecewise rather than globally monotonic.

With each prescription normalized to its Gaussian image plane, wide-to-long-end movement from the final data arrays is:

| Unit | Long minus wide | Direction in the fixed-image-plane model |
|---|---:|---|
| L1 | -26.503352 mm | objectward |
| L2 | +1.086648 mm | imageward |
| STO | -10.243352 mm | objectward |
| L3 | -12.783352 mm | objectward |
| L4 | -4.863352 mm | objectward |
| L5 | -12.783352 mm | objectward |

Most of these motions agree with the gap trends described in ¶0052-¶0055. One direct source contradiction remains: ¶0054 says L4 moves toward the image side while the Numerical Embodiment 1 spacings, when referenced to the fixed Gaussian image plane, move L4 4.863352 mm objectward. The data preserves the numerical prescription rather than changing it to force agreement with the prose.

The computed total-length-to-EFL ratios are 7.6583, 4.1779, and 1.9511. Under the project definition `TL/EFL < 1`, none of the three states is a telephoto-form system. The wide and middle states satisfy the separate retrofocus criterion `BFD > EFL`; the long state does not.

## Element-by-Element Analysis

### D1 — E1 Negative Meniscus + E2 Plano-Convex Positive

**E1:** nd = 1.8467, νd = 23.9. Glass: 847239 optical-glass class (vendor unspecified). f = -103.787953 mm.  
**E2:** nd = 1.6031, νd = 60.6. Glass: 603606 optical-glass class (vendor unspecified). f = +78.408224 mm.  
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

E5 adds negative standalone power inside L2. It is air-spaced from both neighbors, so its power is not to be conflated with a cemented-group value. Its radius, thickness, and index remain source-published. Figure 1 review showed that the earlier 8.0/8.5 mm inferred rims visibly under-represented this member, so surfaces 8/9 use 11.8/12.5 mm while retaining valid edge and air-gap geometry.

### E6 — Biconvex Positive

**nd = 1.8052, νd = 25.4. Glass: 805254 optical-glass class (vendor unspecified). f = +15.568187 mm.**

E6 is the positive component within the otherwise strongly negative L2 unit. Its relatively low νd is a source coordinate only; no specific flint family or anomalous-dispersion behavior is assigned because the patent provides no vendor identity or line-index data.

### E7 — Biconcave Negative

**nd = 1.8040, νd = 46.6. Glass: 804466 optical-glass class (vendor unspecified). f = -27.696244 mm.**

E7 closes L2 immediately before the variable `d13` gap leading to the stop. In the constrained focus model, this rear boundary moves with L2 while `d13` changes by the equal-and-opposite amount to `d5`.

### D2 — E8 Negative Meniscus + E9 Biconvex Positive

**E8:** nd = 1.7200, νd = 50.2. Glass: 720502 optical-glass class (vendor unspecified). f = -26.270728 mm.  
**E9:** nd = 1.4875, νd = 70.2. Glass: 487702 optical-glass class (vendor unspecified). f = +23.342132 mm.  
**Cemented pair:** intrinsic f = +200.629066 mm.

D2 is the first of two cemented pairs in L3. Its net intrinsic power is weakly positive even though its front component is negative. The pair lies directly behind the aperture stop and contributes to the positive L3 unit.

### D3 — E10 Biconvex Positive + E11 Negative Meniscus

**E10:** nd = 1.4875, νd = 70.2. Glass: 487702 optical-glass class (vendor unspecified). f = +16.600005 mm.  
**E11:** nd = 1.6889, νd = 31.1. Glass: 689311 optical-glass class (vendor unspecified). f = -52.454987 mm.  
**Cemented pair:** intrinsic f = +24.287281 mm.

D3 supplies most of L3's isolated positive power. The large difference in νd between E10 and E11 establishes an ordinary achromatizing index/dispersion contrast at the d-line/Abbe level. Compatible catalog curves support chromatic tracing, but the patent does not publish the line indices needed for a stronger secondary-spectrum or APO claim.

### D4 / L4a — E12 Positive Meniscus + E13 Biconcave Negative

**E12:** nd = 1.8467, νd = 23.9. Glass: 847239 optical-glass class (vendor unspecified). f = +28.304194 mm.  
**E13:** nd = 1.7620, νd = 40.1. Glass: 762401 optical-glass class (vendor unspecified). f = -18.939534 mm.  
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

**E16:** nd = 1.4875, νd = 70.2. Glass: 487702 optical-glass class (vendor unspecified). f = +80.747831 mm.  
**E17:** nd = 1.8467, νd = 23.9. Glass: 847239 optical-glass class (vendor unspecified). f = -42.325481 mm.  
**Cemented G5b pair:** intrinsic f = -79.648844 mm.

D5 is the weak-negative cemented combination lens G5b described in ¶0063. The patent's design rationale focuses on reducing the difference between the facing curvatures of G5a and G5b while controlling the combination lens's net power, thereby addressing ghost-light and coma constraints (¶0013-¶0019, ¶0062, ¶0071-¶0074).

E16 and E17 should not be read as individually performing the full G5b function: the relevant source condition is defined on the cemented pair's net power. The pair remains negative while the complete L5 unit remains positive at +34.075353 mm intrinsic focal length.

## Glass Identification / Selection

The final data deliberately uses vendor-neutral six-digit optical-glass coordinate classes. Numerical Embodiment 1 publishes `nd` to four decimals and `νd` to one decimal but does not name a manufacturer. The resolver may use a coordinate-compatible curve from the verified catalog, but that proxy does not establish a historical production supplier or melt.

| Authored coordinate class | nd | νd | Elements |
|---|---:|---:|---|
| 847239 optical-glass class | 1.8467 | 23.9 | E1, E12, E17 |
| 603606 optical-glass class | 1.6031 | 60.6 | E2, E14 |
| 734515 optical-glass class | 1.7340 | 51.5 | E3 |
| 773496 optical-glass class | 1.7725 | 49.6 | E4 |
| 883408 optical-glass class | 1.8830 | 40.8 | E5 |
| 805254 optical-glass class | 1.8052 | 25.4 | E6 |
| 804466 optical-glass class | 1.8040 | 46.6 | E7 |
| 720502 optical-glass class | 1.7200 | 50.2 | E8 |
| 487702 optical-glass class | 1.4875 | 70.2 | E9, E10, E16 |
| 689311 optical-glass class | 1.6889 | 31.1 | E11 |
| 762401 optical-glass class | 1.7620 | 40.1 | E13 |
| 583594 optical-glass class | 1.5831 | 59.4 | E15 |

No `nC`, `nF`, `ng`, or `dPgF` fields are authored as patent evidence because Numerical Embodiment 1 does not publish them. The g-line curves in Figure 2 demonstrate that the patent evaluated chromatic behavior, but they do not supply per-element line indices. Catalog-resolved curves are qualified spectral proxies only; they do not support an APO designation or a claim of anomalous partial dispersion.

The relatively high-νd 1.4875/70.2 coordinate is repeated in E9, E10, and E16, while low-νd coordinates occur in E1/E12/E17 and E6/E11. These source coordinates produce ordinary dispersion contrast across several cemented groups, while the vendor-neutral labels avoid turning compatible catalog curves into unsupported production identities.

## Focus Mechanism

Canon describes the production lens as an inner-focusing design with a focusing cam and specifies a 0.35 m closest focusing distance. The patent states that L2 performs focus and says that near focusing moves L2 toward the image side (¶0056). Numerical Embodiment 1 does not publish finite-distance spacing rows.

The data therefore marks focus as `CONSTRAINED_RECONSTRUCTION`. Only L2 translates. At each zoom position, `d5` and `d13` change by equal and opposite amounts, preserving `d5 + d13`; all other optical-unit gaps remain at their corresponding zoom-state values. The Gaussian image plane is held fixed. Canon's 0.35 m MFD is referenced to the image plane and is normalized to an object-to-surface-1 distance before solving the finite conjugate.

| Design f | d5 infinity | d5 at 0.35 m | d13 infinity | d13 at 0.35 m | L2 shift | Computed |m| |
|---:|---:|---:|---:|---:|---:|---:|
| 17.55 mm | 2.150000 | 1.048778 | 14.250000 | 15.351222 | -1.101222 mm | 0.069299 |
| 35.00 mm | 14.600000 | 12.686323 | 8.920000 | 10.833677 | -1.913677 mm | 0.123734 |
| 82.48 mm | 29.740000 | 24.871995 | 2.920000 | 7.788005 | -4.868005 mm | 0.202141 |

The sign convention in this table takes positive L2 travel as imageward. All three solutions are therefore objectward, directly opposite the direction stated in ¶0056. This contradiction is not silently reconciled. The mechanism constraint is retained, the numerical finite-conjugate solution is retained, and the source statement remains identified as contradictory.

At the long zoom state the reconstruction gives |m| = 0.202141, closely reproducing Canon's published 0.20× maximum magnification. Sequential height/reduced-angle tracing and an independent ABCD solution place the reconstructed object point on the fixed image plane to numerical precision. This agreement is supporting evidence for the constrained reconstruction, not evidence that Canon published these exact internal spacings.

## Aspherical Surfaces

Surfaces 26A and 27A are the two faces of E15/G5a. Paragraph 0078 defines the aspheric sag as

$$
X(h)=\frac{(1/R)h^2}{1+\sqrt{1-(1+K)(h/R)^2}}
+B h^4+C h^6+D h^8+E h^{10}+F h^{12}.
$$

The patent's `K` is therefore already the standard conic constant used by LensVisualizer. No `K` conversion is applied. The prescription is unscaled (`s = 1`), so the polynomial coefficients also require no scale transformation. In the data file, patent coefficients `B` through `F` map directly to `A4` through `A12`; `A14` is zero because the source supplies no fourteenth-order term.

| Surface | K | A4 | A6 | A8 | A10 | A12 |
|---|---:|---:|---:|---:|---:|---:|
| 26A | +2.291 | -7.384e-6 | +9.674e-9 | -1.371e-10 | +2.396e-13 | +8.332e-16 |
| 27A | -0.1619 | +1.514e-5 | +3.849e-8 | -1.638e-10 | +3.147e-13 | +1.097e-15 |

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

## Verification Summary

The final data arrays were independently recomputed with sequential height/reduced-angle tracing and explicit ABCD matrix composition. The two methods agree to better than 1×10⁻¹² in the system matrices at all three authored infinity states.

| Patent zoom position | Computed EFL | Residual vs tabulated f | Computed BFD | First-surface-to-image track |
|---:|---:|---:|---:|---:|
| 17.55 mm | 17.552678 mm | +0.002678 mm | 38.083640 mm | 134.423640 mm |
| 35.00 mm | 34.986440 mm | -0.013560 mm | 45.269362 mm | 146.169362 mm |
| 82.48 mm | 82.482175 mm | +0.002175 mm | 50.866993 mm | 160.926993 mm |

The residuals are consistent with the patent's printed precision. Using the published 13.65 mm image height, `2 atan(Y/f)` gives 75.750°, 42.612°, and 18.794° for the three tabulated focal lengths. The endpoint values reproduce the patent's 75.7°-18.8° full-field range.

The data uses Figure 2's f/4.11, f/4.45, and f/5.77 values as `nominalFno`. The patent header instead prints f/4.0-5.77, while Canon markets the production lens as f/4-5.6. These three levels of description remain separate. Because the patent does not publish a physical stop diameter, the maximum-aperture stop opening is solved from the source f-number states rather than used as an independent f-number check.

The required physical stop diameters are 9.213486, 10.819226, and 9.689501 mm at the three zoom positions. The maximum required radius is 5.409613 mm at 35 mm, so the data's `STO.sd = 5.42 mm` leaves approximately 0.01039 mm of radial clearance. The physical clear limit is fixed; the active wide-open iris opening is zoom-dependent.

All surface semi-diameters are modeling inferences because the patent provides no clear-aperture table. They were sized around full-pupil paraxial marginal/chief bundles through 0.60 times the published 13.65 mm image height at infinity and at the reconstructed 0.35 m state, then limited by edge thickness, actual rim slope, conic domain, and shared-gap intrusion. The resulting model intentionally does not claim full-pupil clearance at the extreme image corner.

Across all six defined zoom/focus states, the independently checked geometry gives a minimum element edge-thickness margin of +0.285422 mm, a maximum actual rim angle of 52.8730°, a maximum shared-gap intrusion fraction of 0.848838 against the 0.90 limit, and a minimum 0.60-field full-pupil clearance of +0.010387 mm. These values are validation results for the authored geometry, not patent dimensions.

The surface-by-surface Petzval sum, evaluated as `φ/(n·n′)`, is +0.001872081814 mm⁻¹, corresponding to a signed reciprocal scale of +534.164689 mm. This is a computed first-order property of the final prescription.

No patent radius, center thickness, refractive index, Abbe number, published zoom spacing, or asphere coefficient is scaled or corrected in the data. The model uses `s = 1`; consequently all radii, thicknesses, image-plane distances, and asphere coefficients remain in the patent's original dimensional scale. The only authored quantities not printed as prescription rows are the computed BFD/image-plane spacings, reconstructed close-focus pairs, physical stop semi-diameter, and other inferred semi-diameters described above.

## Sources / References

1. Makoto Fujimoto, **US 2006/0023317 A1, “Zoom Lens System and Image Pickup Apparatus Using the Same,”** Canon Kabushiki Kaisha, published February 2, 2006. Numerical Embodiment 1 and Exemplary Embodiment 1 are the prescription and descriptive sources used here. <https://patents.google.com/patent/US20060023317A1/en>
2. Canon Camera Museum, **EF-S17-85mm f/4-5.6 IS USM** — market date, 17-element/12-group construction, 0.35 m closest focus, 0.20× maximum magnification, six-blade diaphragm, Image Stabilizer, and double-sided glass-molded aspherical element. <https://global.canon/en/c-museum/product/ef379.html>
3. Canon U.S.A., **EF-S 17-85mm f/4-5.6 IS USM Support** — 17-85mm f/4-5.6, 17 elements in 12 groups, inner focusing with focusing cam, 0.35 m closest focus, and ring USM. <https://www.usa.canon.com/support/p/ef-s-17-85mm-f-4-5-6-is-usm>
4. Canon Latin America, **EF-S 17-85mm f/4-5.6 IS USM** — EF-S/APS-C product identity, Image Stabilizer, ring-type USM, and 0.35 m close focus. <https://www.cla.canon.com/en/p/ef-s-17-85mm-f-4-5-6-is-usm>
5. Current optical-glass catalogs consulted for coordinate-class ambiguity only: OHARA <https://oharacorp.com/>, HOYA <https://www.hoya-opticalworld.com/english/datadownload/index.html>, SCHOTT <https://www.schott.com/en-gb/products/optical-glass-p1000267/downloads>, HIKARI <https://www.hikari-g.co.jp/optical_glass/catalog/>, CDGM <https://www.cdgmgd.com/go.htm?k=Colourless_Optical_Glass&url=goods>, and SUMITA <https://www.sumita-opt.co.jp/en/download/>. No vendor name from these catalogs is assigned to Numerical Embodiment 1.
