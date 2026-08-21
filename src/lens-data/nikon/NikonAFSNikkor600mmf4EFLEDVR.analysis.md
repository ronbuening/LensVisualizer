# NIKON AF-S NIKKOR 600mm f/4E FL ED VR — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** US 2018/0031811 A1\
**Application Number:** US 15/550,440\
**Priority:** February 27, 2015 — JP 2015-038234\
**Filed:** February 25, 2016 — PCT/JP2016/055630\
**Published:** February 1, 2018\
**Inventors:** Satoshi Miwa; Masashi Yamashita\
**Applicant:** Nikon Corporation\
**Title:** *Optical System, Optical Device, and Method for Adjusting Optical System*\
**Embodiment analyzed:** Fourth Example / Example 4

The data model transcribes the fourth numerical example of US 2018/0031811 A1. The patent describes a positive first group G1, a negative internal-focus group G2, an aperture stop, and a positive third group G3, with a transversely movable vibration-reduction subassembly and a rear adjustment subassembly intended to compensate manufacturing errors (¶0303–0312). Table 4 supplies the complete d-line prescription, two published focus states, group focal lengths, overall focal length, f-number, field, track length, back focus, and the values associated with eighteen conditional expressions (¶0313).

The project treats Example 4 as the fixed production correlation for the NIKON AF-S NIKKOR 600mm f/4E FL ED VR. This is a convergent identification, not a manufacturer statement that the commercial lens uses this exact patent example. The principal correlations are:

1. The patent gives a design focal length of 587.80 mm and FNO 4.08, while Nikon markets the production lens as 600 mm f/4.
2. The patent gives a full field of 4.19° at Y = 21.60 mm; Nikon specifies 4°10′ on FX format.
3. The patent contains sixteen imaging lenses in twelve air-separated imaging groups when the separate front protective glass HG is excluded from the imaging count. Nikon specifies sixteen elements in twelve groups plus one separate meniscus protective glass element.
4. L11 and L12 have the crystalline-fluorite coordinate `nd = 1.43385, νd = 95.25`; Nikon specifies two fluorite elements.
5. Four additional patent elements occupy low-dispersion coordinates (`νd = 82.57` or `67.90`), matching the count in Nikon's detailed specification of four ED elements. The patent itself does not label those elements “ED,” so the element-by-element production assignment remains an inference.
6. The second group G2 is the internal focusing group in the patent, while Nikon identifies the production lens as an IF design.
7. The patent's Gvr subassembly moves transversely for vibration correction, matching the production lens's VR architecture.
8. The patent close-conjugate data normalize to 4.400 m from the focal plane and β ≈ -0.145; Nikon specifies a 4.4 m minimum focus distance and 0.14× maximum reproduction ratio.
9. The family priority date, February 27, 2015, precedes Nikon's July 2, 2015 product announcement.

Nikon's current global product page contains a source inconsistency: one overview bullet says three ED elements, while the detailed construction row states four ED elements. The data file follows the detailed construction specification and does not use the inconsistent overview sentence to relabel individual patent elements.

The active LensVisualizer model differs from the physical patent train in one documented respect. The rear plane-parallel low-pass filter FL, source surfaces 32–33, is omitted under the current data rules. Its 1.50 mm thickness at `nd = 1.51680` is replaced by the air-equivalent rear spacing, so the modeled distance from L39's rear surface to the image plane is 82.258924 mm. The curved front protective meniscus HG is retained because it is a powered optical plate represented in both the patent architecture and the production lens description. No uniform scale is applied.

The production specification therefore remains “16 elements in 12 groups plus one meniscus protective glass element,” whereas the data object's physical optical model contains 17 elements in 13 air-spaced groups. These are two descriptions of the same modeled train under different counting conventions.

## Optical Architecture

Example 4 is a three-group positive–negative–positive telephoto objective with internal focusing. The independently traced group powers are approximately +230.736 mm for G1, -103.558 mm for G2, and +692.809 mm for G3. The stop lies between G2 and G3. The active air-equivalent total track is 468.588924 mm against a computed EFL of 587.816484 mm, giving `TL/EFL = 0.7972`; the design therefore satisfies the project's strict telephoto criterion. Its rear air-equivalent distance is only 82.258924 mm, so it is not retrofocus.

G1 is the dominant front collector. It begins with the very weak protective meniscus HG, then uses two large positive fluorite elements, a negative element, and a positive-net cemented component L14+L15. The front group therefore combines most of the system's positive power with the strongest dispersion-management burden.

G2 is a compact cemented negative doublet. It is the sole axial focusing group in the published focus states. Moving this negative group toward the image plane shortens the rear adjacent gap by exactly the amount that the front adjacent gap grows, leaving the remainder of the optical train fixed.

G3 is a positive relay/correction group with three distinct functional regions. The L31+L32 cemented pair immediately behind the stop is positive as a cemented component. The L33+L34 doublet and L35 form the patent's transversely movable vibration-reduction group Gvr. L36 through L39 form the adjustment group Gadj, in which L38 is the negative lens Ln between a positive object-side subassembly G3adjB and a positive image-side subassembly G3adjA.

All refracting surfaces in Example 4 are spherical or plane. No aspherical coefficients, diffractive phase surfaces, folded path, blockers, inactive dummy planes, or flare-cutter planes are present in the selected embodiment.

The aperture stop position is a patent fact, but its physical diameter is not published. The data file therefore derives `STO.sd = 16.983992 mm` from the transcribed system's entrance-pupil magnification so that the modeled wide-open aperture is F/4.08. Likewise, the surface semi-diameters are modeling apertures inferred from ray envelopes, Fig. 11 proportions, mechanical scale, and geometry validation; they are not patent clear-aperture measurements.

A 600 dpi review of local PDF page 12 confirmed the Fig. 11 silhouette. After excluding leader labels and group brackets, the measurable optical rims stayed within 17% of the figure's normalized shape, below the project's 25% strong-evidence threshold. The authored semi-diameters were therefore retained; the much larger automated rear-group readings were annotation ink rather than optical rims.

## Element-by-Element Analysis

### HG — Weak Positive Protective Meniscus

`nd = 1.51680, νd = 63.88. Glass: J-BK7 catalog equivalent (patent 517639; production supplier unspecified). Standalone f ≈ +3.32×10^6 mm.`

HG is optically almost afocal: its two radii are nearly equal and its net refractive power is extremely small. Its importance in the model is therefore not as a contributor to system focal length but as the real curved front plate that the patent includes in G1 and Nikon describes as a meniscus protective glass. Because the production element carries a fluorine coating while the patent prescription concerns bulk optical geometry, the coating is not represented as an additional optical surface.

The data model retains HG rather than treating it like the omitted rear low-pass filter. This distinction follows geometry and function: HG is curved and weakly powered, whereas the omitted FL is plane-parallel and its first-order effect can be represented by an air-equivalent rear spacing.

### L11 — Biconvex Positive Fluorite Element

`nd = 1.43385, νd = 95.25. Glass: Crystalline CaF2 fluorite (nd=1.43385, vd=95.25). Standalone f = +465.774 mm.`

L11 is the first strongly powered imaging element in G1 and the first of the two crystalline-fluorite-coordinate lenses. Its low refractive index and very high Abbe number place substantial positive power in a material with unusually low primary dispersion. In a long, fast telephoto objective, that location is favorable for reducing the chromatic burden generated by the large front-group ray heights.

The fluorite material assignment is stronger than the other glass identifications because the coordinate itself is characteristic of crystalline CaF2 and Nikon independently specifies two fluorite elements in the production lens. No claim about anomalous partial dispersion is made from `nd/νd` alone.

### L12 — Biconvex Positive Fluorite Element

`nd = 1.43385, νd = 95.25. Glass: Crystalline CaF2 fluorite (nd=1.43385, vd=95.25). Standalone f = +297.633 mm.`

L12 is the second fluorite-coordinate positive lens and is substantially stronger as a standalone element than L11. The long air space following L11 allows the two front positive elements to distribute power rather than behaving as one thick front block. Their shared low-dispersion coordinate is the clearest prescription-level link to Nikon's stated two-fluorite construction.

The prescription does not publish C-, F-, or g-line indices for L11 or L12. The analysis therefore treats their chromatic role at the level supported by the d-line index and Abbe number and does not infer apochromatic correction.

### L13 — Biconcave Negative Element

`nd = 1.61266, νd = 44.46. Glass: J-KZFH1 catalog equivalent (patent 613445; production supplier unspecified). Standalone f = -352.407 mm.`

L13 introduces negative power after the two positive fluorite lenses. In first-order terms it moderates the front group's convergence before the long gap leading to the final cemented component of G1. Its placement also gives the front group an alternating positive–positive–negative sequence rather than concentrating all negative correction at the group rear.

The stored glass label is deliberately a coordinate class rather than a HIKARI vendor assertion. The patent publishes the optical constants but does not name a glass manufacturer.

### D1 — L14 + L15 Cemented Component

**L14:** `nd = 1.77250, νd = 49.62. Glass: J-LASF016 catalog equivalent (patent 773496; production supplier unspecified). Standalone f = -202.890 mm.`\
**L15:** `nd = 1.49782, νd = 82.57. Glass: J-FKH1 catalog equivalent (patent 498826; production supplier unspecified). Standalone f = +116.472 mm.`

L14 is a negative meniscus and L15 is a positive meniscus. Their individual powers should not be confused with the cemented pair's net behavior: traced as the complete D1 component, L14+L15 has a positive equivalent focal length of approximately +294.277 mm.

The pairing places a higher-index, moderate-dispersion negative member against a much lower-dispersion positive member. This is consistent with the front group's role in combining net positive power with chromatic correction, but the patent does not identify L15 as a production ED element. The data file therefore retains only the coordinate-class annotation.

### D2 / G2 — L21 + L22 Internal-Focus Doublet

**L21:** `nd = 1.92286, νd = 20.88. Glass: N-SF66 catalog equivalent (patent 923209; production supplier unspecified). Standalone f = +224.066 mm.`\
**L22:** `nd = 1.83481, νd = 42.73. Glass: S-LAH55 catalog equivalent (patent 835427; production supplier unspecified). Standalone f = -70.518 mm.`

The complete cemented doublet has an EFL of approximately -103.558 mm and is the patent's second lens group G2. This is an important distinction between element and assembly power: the plano-convex L21 is positive by itself, but the much stronger negative L22 makes the cemented unit negative overall.

G2 is the sole published focusing group. The patent explicitly states that it moves toward the image side for short-distance focus (¶0310). Because the doublet is compact and internally located, focusing does not require translation of the large fluorite front group.

### D3 — L31 + L32 Cemented Component

**L31:** `nd = 1.90265, νd = 35.73. Glass: J-LASFH9 catalog equivalent (patent 903357; production supplier unspecified). Standalone f = -82.888 mm.`\
**L32:** `nd = 1.59319, νd = 67.90. Glass: J-PSKH1 catalog equivalent (patent 593679; production supplier unspecified). Standalone f = +60.317 mm.`

L31 is a negative meniscus and L32 a strong positive biconvex lens. The cemented pair reverses the sign suggested by the first member alone: D3 has a net EFL of approximately +218.057 mm. It begins G3 immediately behind the aperture stop and restores positive relay power after the negative focusing group.

The high-index/moderate-dispersion L31 and lower-dispersion L32 form another paired correction component. The source does not provide line-index data, so the analysis does not assign a secondary-spectrum mechanism beyond the supported Abbe-level description.

### D4 / VR — L33 + L34 Cemented Component

**L33:** `nd = 1.78472, νd = 25.72. Glass: H-ZF13 catalog equivalent (patent 785257; production supplier unspecified). Standalone f = +117.765 mm.`\
**L34:** `nd = 1.49782, νd = 82.57. Glass: J-FKH1 catalog equivalent (patent 498826; production supplier unspecified). Standalone f = -67.952 mm.`

Although L33 is positive and L34 is negative as standalone lenses, the cemented D4 pair is negative overall, with EFL approximately -160.674 mm. The patent places this pair inside the vibration-reduction group Gvr (¶0310).

The very large Abbe-number contrast between the two members is notable, but the patent does not identify either member by vendor or ED trade designation. The data therefore records only the defensible coordinate classes.

### L35 — Plano-Concave Negative VR Element

`nd = 1.81600, νd = 46.59. Glass: J-LASF09A catalog equivalent (patent 816466; production supplier unspecified). Standalone f = -92.456 mm.`

L35 is the final member of Gvr. Combined with D4, the centered vibration-reduction subassembly has a net EFL of approximately -57.921 mm. The patent moves this three-lens subassembly in a direction with a component perpendicular to the optical axis to shift the image and compensate vibration (¶0310).

The data file represents the centered nominal prescription only. It does not encode a user-adjustable transverse VR state, so the listed focal powers describe the centered optical train rather than a decentered stabilization position.

### L36 — Biconvex Positive Rear-Adjustment Element

`nd = 1.61266, νd = 44.46. Glass: J-KZFH1 catalog equivalent (patent 613445; production supplier unspecified). Standalone f = +39.506 mm.`

L36 is the strongest standalone positive element in the rear adjustment region. Together with L37 it forms G3adjB, the positive object-side subassembly adjacent to the negative lens Ln in the patent's manufacturing-adjustment scheme (¶0311–0312).

The L36+L37 combination is positive overall, with EFL approximately +54.845 mm. This again differs from simply reading the sign of either element independently.

### L37 — Negative Meniscus in G3adjB

`nd = 1.92286, νd = 20.88. Glass: N-SF66 catalog equivalent (patent 923209; production supplier unspecified). Standalone f = -133.888 mm.`

L37 tempers L36's strong positive power and completes G3adjB. The air gap after L37 is one of the two assembly-adjustment gaps studied by the patent. Figure 13(b) evaluates the aberration response after increasing this spacing by 0.2 mm.

This adjustment is not photographic focusing. It is a post-assembly correction mechanism intended to compensate manufacturing-error-induced aberration, so the LensVisualizer data leaves the nominal spacing fixed rather than exposing it as focus `var` or an aberration-control slider.

### L38 — Biconcave Negative Lens Ln

`nd = 1.59319, νd = 67.90. Glass: J-PSKH1 catalog equivalent (patent 593679; production supplier unspecified). Standalone f = -41.429 mm.`

L38 is explicitly identified by the patent as the negative lens Ln (¶0312). It lies between the positive G3adjB unit on the object side and the positive G3adjA unit on the image side. This sign pattern is central to the patent's adjustment concept because changing the air spaces on either side of Ln perturbs different aberration balances without requiring a wholesale redesign of the rear group.

Figure 13(a) studies a +0.2 mm change to the air gap after L38 and associates that perturbation with an astigmatism shift. The data file preserves the design spacing rather than the test perturbation.

### L39 — Biconvex Positive G3adjA Element

`nd = 1.67003, νd = 47.14. Glass: J-BAF10 catalog equivalent (patent 670471; production supplier unspecified). Standalone f = +58.452 mm.`

L39 is the final imaging element and alone constitutes the patent's positive G3adjA subgroup. Its standalone EFL is therefore also the subgroup EFL. L36 through L39 together form Gadj, whose centered nominal EFL is approximately +77.323 mm.

The patent's adjustment concept changes the air gap between Ln and L39 by assembly spacers or equivalent mechanisms. The LensVisualizer model represents the nominal design value and terminates after L39 with the air-equivalent image spacing created by omission of FL.

## Glass Identification and Selection

The patent supplies d-line `nd` and `νd` values but no glass vendors. The data file consequently uses crystalline CaF2 where the coordinate is material-specific and otherwise uses six-digit optical-coordinate classes or explicitly qualified catalog equivalents. These labels should not be read as proof of Nikon's procurement source.

| Data annotation | nd | νd | Elements | Interpretation |
|---|---:|---:|---|---|
| J-BK7 catalog equivalent (517639) | 1.51680 | 63.88 | HG | Historical crown proxy; production supplier unspecified |
| Crystalline CaF2 fluorite | 1.43385 | 95.25 | L11, L12 | Material-class identification; matches Nikon's two-fluorite count |
| J-KZFH1 catalog equivalent (613445) | 1.61266 | 44.46 | L13, L36 | Optical-glass proxy; production supplier unspecified |
| J-LASF016 catalog equivalent (773496) | 1.77250 | 49.62 | L14 | Lanthanum-flint proxy; production supplier unspecified |
| J-FKH1 catalog equivalent (498826) | 1.49782 | 82.57 | L15, L34 | Low-dispersion crown proxy; production supplier unspecified |
| N-SF66 catalog equivalent (923209) | 1.92286 | 20.88 | L21, L37 | Dense-flint proxy; production supplier unspecified |
| S-LAH55 catalog equivalent (835427) | 1.83481 | 42.73 | L22 | Lanthanum-glass proxy; production supplier unspecified |
| J-LASFH9 catalog equivalent (903357) | 1.90265 | 35.73 | L31 | High-index lanthanum-glass proxy; production supplier unspecified |
| J-PSKH1 catalog equivalent (593679) | 1.59319 | 67.90 | L32, L38 | Low-dispersion crown proxy; production supplier unspecified |
| H-ZF13 catalog equivalent (785257) | 1.78472 | 25.72 | L33 | Dense-flint proxy; production supplier unspecified |
| J-LASF09A catalog equivalent (816466) | 1.81600 | 46.59 | L35 | Lanthanum-glass proxy; production supplier unspecified |
| J-BAF10 catalog equivalent (670471) | 1.67003 | 47.14 | L39 | Barium-flint proxy; production supplier unspecified |

Every optical element resolves to a coefficient-backed runtime curve. The data labels name the selected qualified equivalent explicitly, but no element carries patent-authored `nC`, `nF`, `ng`, or `dPgF` because Example 4 does not publish those quantities. Consequently, no claim of apochromatic correction or patent-proven anomalous partial dispersion is made here. The design clearly uses a wide spread of Abbe numbers, including fluorite and multiple low-dispersion coordinates, but higher-order chromatic behavior cannot be established from patent `nd/νd` alone.

## Focus Mechanism

The focus status is **PUBLISHED**. No internal-focus reconstruction is used.

The patent gives two variable air gaps around the cemented G2 doublet. At the close-focus endpoint, G2 translates 15.559 mm toward the image while the sum of the two adjacent gaps remains exactly 62.930 mm at source precision.

| Variable gap | Infinity | Close | Change |
|---|---:|---:|---:|
| After L15 / source d11 | 17.545 mm | 33.104 mm | +15.559 mm |
| After G2 / source d14 | 45.385 mm | 29.826 mm | -15.559 mm |
| Sum | 62.930 mm | 62.930 mm | 0 |

The source close state gives object distance `d0 = 3930.900 mm` from the object to the first optical surface and β = -0.145. Adding the patent's physical total track of 469.10 mm gives exactly 4400.000 mm from object to image plane, matching Nikon's 4.4 m minimum focus specification. An independent finite-conjugate trace of the rounded prescription returns β = -0.144518. The remaining focus residual is consistent with the limited precision of the published table rather than requiring a source correction.

The production lens is identified by Nikon as an internal-focus design and uses an SWM autofocus drive, but the optical data file represents only the published G2 motion, not the mechanical motor implementation.

## Chromatic Correction Strategy

The strongest supported chromatic-design observation is the placement of two crystalline-fluorite-coordinate positive elements near the front of G1. They carry substantial positive power where ray heights are large, which reduces the primary-dispersion burden compared with placing the same positive power entirely in ordinary crown glasses.

The prescription then repeatedly pairs glasses with materially different Abbe numbers. D1 combines L14 (`νd = 49.62`) with L15 (`νd = 82.57`); D3 combines L31 (`νd = 35.73`) with L32 (`νd = 67.90`); D4 combines L33 (`νd = 25.72`) with L34 (`νd = 82.57`). These pairings provide the first-order degrees of freedom expected in a fast telephoto objective whose positive and negative powers must be balanced chromatically as well as geometrically.

The production specification's four-ED count is consistent with the four non-fluorite low-dispersion patent coordinates at L15, L32, L34, and L38, but the patent does not designate these as ED glass. That correspondence is therefore a production-correlation inference, not a source fact about individual elements.

## Image Stabilization

The patent identifies Gvr as the cemented L33+L34 pair together with L35 and states that this subassembly moves in a direction having a component perpendicular to the optical axis to shift the image on the image surface (¶0310). The centered subassembly has independently computed EFL of approximately -57.921 mm.

This is consistent with Nikon's production identification of the lens as a VR design. The LensVisualizer prescription remains a centered sequential model: it records the elements that form Gvr and their nominal geometry, but it does not add a decentered VR state or transverse-motion control. Consequently, all first-order values in the data and this analysis refer to the centered nominal position.

## Manufacturing-Error Adjustment Strategy

The patent gives Gadj a purpose distinct from both focusing and vibration reduction. L36+L37 form the positive G3adjB unit, L38 is the negative lens Ln, and L39 is the positive G3adjA unit. The independently computed nominal powers are approximately +54.845 mm for G3adjB, -41.429 mm for Ln alone, +58.452 mm for G3adjA, and +77.323 mm for the complete L36–L39 Gadj section.

The patent describes adjustment of the air gaps on either side of Ln after assembly (¶0311–0312). Figure 13(a) examines a +0.2 mm change to d29 and reports a negative shift of astigmatism, while Figure 13(b) examines a +0.2 mm change to d27 and reports a negative shift of spherical aberration (¶0315, ¶0317–0318). These are manufacturing-compensation perturbations, not normal operating states.

For that reason the data file stores only the design spacings. It does not map d27 or d29 to `var` and does not declare `aberrationControl`; doing so would incorrectly turn an assembly calibration into a user-facing optical control.

## Conditional Expressions

Table 4 publishes the values for all eighteen conditional expressions. The first-order expressions that can be reconstructed from the final prescription agree at the source's rounding level except for the documented definition/sign conflicts in conditions (13) and (16). Conditions (6), (7), (14), and (15) depend on patent-normalized third-order Seidel sums for which the publication does not provide a unique replay convention; those four are therefore checked only as published values against their stated bounds.

| No. | Patent condition | Table 4 | Independent / model result |
|---:|---|---:|---|
| 1 | `3.0 < f/fRA < 15.0` | 10.1 | 10.0564 — consistent |
| 2 | `2.0 < f/dR < 10.0` | 6.7 | 6.7057 in the air-normalized model; 6.6667 in the source physical train |
| 3 | `0.10 < f/(-fFA) < 1.00` | 0.45 | 0.44934 — consistent |
| 4 | `|R1A-R2A|/f < 0.050` | 0.015 | 0.015485 — consistent |
| 5 | `0.010 < (R1A+R2A)/f < 0.600` | 0.16 | 0.16049 — consistent |
| 6 | `0.005 < (IIIA/IA)(y/f)^2` | 0.034 | Source-value bound check only |
| 7 | `0.005 < IIIA(y/f)^2 < 0.060` | 0.023 | Source-value bound check only |
| 8 | `0.001 < dM/f < 0.010` | 0.003 | 0.003317 — consistent |
| 9 | `1.00 < f/fFB < 2.70` | 1.6 | 1.55859 — consistent |
| 10 | `0.0050 < dSA/f < 0.0500` | 0.013 | 0.012589 — consistent |
| 11 | `1.3 < f/(-fRB) < 6.5` | 3.3 | 3.30527 — consistent |
| 12 | `|R1B-R2B|/f < 0.150` | 0.027 | 0.026996 — consistent |
| 13 | `0.150 < (R1B+R2B)/f < 0.500` | +0.23 | Signed radii give -0.228716; magnitude-normalized radii give +0.228716 |
| 14 | `(IIIB/IB)(y/f)^2 < 0.010` | 0.002 | Source-value bound check only |
| 15 | `1.20 < -IB < 4.70` | 1.565 | Source-value bound check only |
| 16 | `0.20 < TL3/f1 < 0.50` | 0.29 | Strict G3 gives 0.25332; the table's 0.29 requires extending TL3 through the separate FL plate |
| 17 | `0.65 < TL/f < 1.15` | 0.80 | 0.79717 in the air-normalized model; 0.79806 using source physical TL to the image plane |
| 18 | `0.30 < f/f12 < 1.00` | 0.84 | 0.84115 — consistent |

Condition (13) is a source sign contradiction, not a radius correction. The Example 4 radii used by the expression are both negative in the source prescription, so literal signed substitution cannot produce the positive Table 4 value. The analysis therefore preserves the radii and records that only a magnitude interpretation reproduces +0.23.

Condition (16) is a source scope contradiction. The patent defines TL3 as the distance from the first to last lens surface of G3; under that definition the fourth example gives approximately 0.2533. The printed 0.29 is reproduced only when the distance is extended through the rear low-pass filter FL, even though ¶0308 places FL on the image side of G3. The data model does not enlarge G3 to force agreement.

Condition (17) exposes a separate wording issue. Table 4's own overall-specification definition and its printed value are reproduced when TL is measured to the image plane. Some claim wording instead describes TL to the image-side lens surface. The data model uses the source's air-converted image-plane normalization after removing FL.

## Verification Summary

The final data arrays were independently re-traced with explicit sequential height/reduced-angle propagation, a separate floating-point ABCD product, and a high-precision Decimal ABCD product. The sequential and floating-point ABCD results agree to machine precision; the largest floating-point versus Decimal matrix difference is approximately `2.27×10^-13`.

| Quantity | Final model | Patent / source comparison |
|---|---:|---|
| EFL at infinity | 587.816484 mm | 587.80 mm overall / 587.801 mm variable-distance table |
| Modeled wide-open f-number | 4.080000 | FNO 4.08; stop diameter itself is not published |
| Air-equivalent total track | 468.588924 mm | Air-converted TL 468.59 mm |
| Source-normalized air image distance from L39 / S31 | 82.258924 mm | Air-converted BF 82.26 mm |
| Paraxial best focus after L39 / S31 | 82.268176 mm | +0.009252 mm from the source-normalized image plane, consistent with rounded source data |
| Front principal plane H relative to S1 | -441.974674 mm | Independent paraxial computation; not tabulated by the patent |
| Rear principal plane H′ relative to active S31 | -505.548308 mm | Independent paraxial computation; not tabulated by the patent |
| G1 EFL | +230.736184 mm | +230.74 mm |
| G2 EFL | -103.558323 mm | -103.56 mm |
| G3 EFL | +692.809291 mm | +692.82 mm |
| G2 focus travel | 15.559 mm imageward | Published endpoint difference 15.559 mm |
| Close-state magnification | -0.144518 | β = -0.145 |
| Petzval sum | +2.291376×10^-6 mm^-1 | Independently computed surface by surface as `φ/(n·n′)` |

The 82.258924 mm value is the source-defined air-equivalent image-plane normalization used after removing FL; it is not an independently optimized focus distance. Re-tracing the rounded prescription places paraxial best focus 0.009252 mm farther back. The principal-plane positions are likewise computed model quantities rather than patent table values.

The Petzval sum is close to zero and therefore source-precision-sensitive. It is best read as evidence of strong first-order field-curvature cancellation rather than as a precise physical Petzval radius.

The modeled clear apertures also pass the independent geometry gate at both published focus endpoints. The minimum conservative element edge thickness is approximately 0.1269 mm, the largest rim-slope angle is approximately 47.44°, and the smallest 90%-gap cross-gap margin is approximately 0.1759 mm. Exact on-axis marginal rays remain inside all authored apertures. Representative 0.6-field tracing shows the two most extreme sampled rays vignetted at ordinary front-group boundaries rather than at a cemented interface; the remaining eight of ten reach the image plane. These results validate the modeled semi-diameters but do not convert them into patent or manufacturing dimensions.

The project repository was not mounted when the data file was constructed, so repository-native `buildLens()` / `validateLensData()`, production render diagnostics, and the runtime glass-mismatch scan remained deferred. The analysis does not claim those unavailable checks as completed.

## Sources and References

- Miwa, Satoshi, and Masashi Yamashita. **US 2018/0031811 A1**, *Optical System, Optical Device, and Method for Adjusting Optical System*. Nikon Corporation. Published February 1, 2018. Example 4, especially Fig. 11, ¶0303–0319, and Table 4. <https://patents.google.com/patent/US20180031811A1/en>
- Nikon Corporation. **AF-S NIKKOR 600mm f/4E FL ED VR** product specifications. <https://imaging.nikon.com/imaging/lineup/lens/f-mount/singlefocal/telephoto/af-s_600mmf_4e_fl_ed_vr/>
- Nikon Corporation. **AF-S NIKKOR 500mm f/4E FL ED VR / AF-S NIKKOR 600mm f/4E FL ED VR**, product announcement, July 2, 2015. <https://www.nikon.com/company/news/2015/0702_lens_01/>
- HOYA. **Optical Glass Cross Reference**. <https://www.hoya-opticalworld.com/english/products/crossreference.html>
- HIKARI Glass. **Optical Glass Catalog and product data**. <https://www.hikari-g.co.jp/optical_glass/catalog/document/HIKARI_Catalog.pdf>
- SCHOTT Advanced Optics. **Optical glass catalog/search**. <https://www.us.schott.com/shop/advanced-optics/en/search/>
- OHARA. **Optical glass catalog**. <https://www.ohara-inc.co.jp/en/product/catalog/>
- CDGM. **Optical glass database**. <https://www.cdgmgd.com/database/>
- SUMITA Optical Glass. **Catalog downloads**. <https://www.sumita-opt.co.jp/en/download/>
