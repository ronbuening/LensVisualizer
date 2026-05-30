# Sigma APO Macro 180 mm f/2.8 EX DG OS HSM — Optical Analysis

## Patent Reference and Design Identification

**Patent:** JP 2013-104994 A (Japanese Unexamined Patent Application Publication)  
**Application Number:** 特願2011-248298 (P2011-248298)  
**Filed:** 14 November 2011  
**Published:** 30 May 2013  
**Inventor:** Kenta Fujita (藤田 健太)  
**Applicant:** Sigma Corporation (株式会社シグマ)  
**Title:** Inner-focus large-aperture telephoto macro lens with image-stabilization function (防振機能を有するインナーフォーカス式大口径望遠マクロレンズ)  
**Classification:** G02B 13/02, G03B 5/00  
**Embodiment analyzed:** Numerical Example 2 (数値実施例2)

JP 2013-104994 A discloses five numerical examples of the same basic inner-focus telephoto macro architecture. Numerical Example 2 is the best match for the production **Sigma APO Macro 180 mm f/2.8 EX DG OS HSM**. The identification rests on convergent evidence rather than on one isolated number.

1. **Element and group count.** Example 2 resolves to 19 glass elements in 14 air-spaced groups, matching Sigma's published construction of 19 elements in 14 groups.
2. **Special-element count and placement.** Three elements use the same low-index, very-low-dispersion glass, nd = 1.43700 and νd = 95.10: L12 and L13 in the front group, and L33 in the moving third group. This matches Sigma's published statement that the lens uses three FLD elements.
3. **Focal length and aperture.** Example 2 tabulates f = 174.60 mm and Fno = 2.92 at infinity. Those are consistent with a marketed 180 mm f/2.8 lens after normal product rounding. The patent describes the class as a large-aperture telephoto macro lens with approximately F2.9 speed and a field angle below 15° (¶0001).
4. **Macro range.** The variable-spacing table gives infinity, 1:2, and 1:1 states. A finite-conjugate paraxial trace of the 1:1 state gives β = −1.0001 and places the object 227.5 mm in front of the first surface; with the 240.75 mm first-surface-to-image distance, the resulting subject-to-image distance is 468.3 mm, within 2 mm of Sigma's published 470 mm minimum focusing distance.
5. **Stabilization and focus mechanism.** Claim 1 states that L2 moves toward the image side, L3 moves toward the object side, L1/L4/L5/L6 remain fixed relative to the image plane, and L5 moves perpendicular to the optical axis to shift the image. This matches the production lens's Optical Stabilizer and Floating Internal Focusing descriptions.
6. **Applicant and timing.** The applicant is Sigma Corporation, and the November 2011 filing predates the 2012 product announcement by the expected interval for a production optical patent.

Manufacturer-published specifications are treated as authoritative for product metadata. The marketed focal length is 180 mm, the marketed maximum aperture is f/2.8, the official angle of view is 13.7°, the minimum focusing distance is 0.47 m, the maximum magnification ratio is 1:1, the filter size is ⌀86 mm, and the published construction is 19 elements in 14 groups. The patent-derived design values used for the prescription are f = 174.60 mm, Fno = 2.92, and 2ω = 14.07° at infinity.

## Optical Architecture

The prescription is a six-group telephoto macro with the power sequence **positive – negative – positive – positive – negative – positive** (claim 1; ¶0009, ¶0019). The stop is placed between L3 and L4 (¶0043). The first, fourth, fifth, and sixth groups remain fixed relative to the image plane during focusing; the second and third groups translate in opposite directions.

| Group | Surfaces | Elements | Isolated f (mm) | Power | Principal role |
|---|---:|---:|---:|---|---|
| L1 | 1–9 | 5 | +110.33 | Positive | Front collector and principal axial-color correction |
| L2 | 10–14 | 3 | −103.40 | Negative | Front floating-focus group, moving imageward |
| L3 | 15–19 | 3 | +75.39 | Positive | Rear floating-focus group, moving objectward |
| L4 | 21–24 | 2 | +3207.77 | Very weak positive | Near-afocal beam conditioner before the OS group |
| L5 | 25–29 | 3 | −32.41 | Negative | Decentering image-stabilization group |
| L6 | 30–34 | 3 | +48.62 | Positive | Rear relay, exit-pupil, and field-control group |

The key architectural decision is the location of the stabilization group. The patent criticizes prior stabilizing macro designs that either used a large-diameter front group or a rear group whose stabilizing coefficient was too low, forcing larger decentering strokes and larger OS hardware (¶0006–¶0007). Sigma's layout places the decentering L5 group behind L4, where the beam is already relatively compact, but gives L5 strong negative power so that a small lateral shift has a useful image displacement.

The patent and product literature describe the lens as a telephoto macro because of its focal-length class and use case. By strict first-order track-length terminology, however, the Example 2 prescription is not a compact telephoto-ratio system: the infinity-focus front-surface-to-image distance is 240.75 mm while the Gaussian focal length is 174.60 mm, so total track / EFL ≈ 1.38, not less than 1. The safer description is therefore a long-focus, telephoto-class macro objective with internal focusing and a rear optical-stabilization group.

## Element-by-Element Analysis

Element focal lengths below are standalone in-air thick-lens values computed directly from the Example 2 prescription. Group focal lengths are isolated-group paraxial EFLs. Shape classifications follow the patent sign convention and agree with the Example 2 construction description in ¶0060.

### Group L1 — Front collector and axial-color correction

The patent describes L1 as, from object side to image side, a biconvex lens, a biconvex lens, a positive meniscus convex to the object, and a cemented biconvex-plus-biconcave doublet (¶0060). It also states that L1 preferably contains at least one positive lens with νd ≥ 80 and that the cemented doublet helps correct axial chromatic aberration while reducing sensitivity to first-group decentering (¶0044). In Example 2, two of L1's four positive elements meet that νd ≥ 80 criterion; the third νd = 95.10 element is in L3, not L1.

**L11 — Biconvex positive.** nd = 1.51680, νd = 64.20. Glass: BK7 / S-BSL7 class borosilicate crown. f = +487.2 mm. This weak, nearly symmetric crown element begins the axial convergence without carrying enough power to dominate the chromatic correction. Its patent-listed θgF is 0.534.

**L12 — Biconvex positive, FLD class.** nd = 1.43700, νd = 95.10. Glass: FCD100-class fluorite-like ED glass; Sigma markets this class as FLD. f = +424.6 mm. This is the first of the three very-low-dispersion elements. Its patent-listed θgF is 0.533, giving ΔPgF ≈ +0.049 against the Schott normal line used here.

**L13 — Positive meniscus, convex to object, FLD class.** nd = 1.43700, νd = 95.10. Glass: FCD100-class fluorite-like ED glass. f = +381.5 mm. Both radii are positive, so the element is a forward-convex meniscus. It adds low-dispersion positive power while spreading the front group's convergence over several gentle surfaces.

**L14 — Biconvex positive, cemented.** nd = 1.59349, νd = 67.00. Glass: PCD51-class low-dispersion crown. f = +111.2 mm. This is the stronger crown half of the L1 achromatizing doublet. The patent-listed θgF is 0.536.

**L15 — Biconcave negative, cemented.** nd = 1.80610, νd = 40.73. Glass: dense lanthanum flint, M-NBFD130-class. f = −136.5 mm. This flint half of the L1 doublet is cemented to L14 at R = −186.4796 mm. Its patent-listed θgF is 0.567, and the positive/negative θgF difference in L1 is the quantity controlled by condition (8).

### Group L2 — Front floating-focus group

L2 is the negative member of the focusing pair. The patent describes it as a negative meniscus convex to the object followed by a cemented plano-convex-plus-biconcave doublet (¶0060). It moves toward the image plane when focusing from infinity toward life size (claim 1; ¶0059).

**L21 — Negative meniscus, convex to object.** nd = 1.77250, νd = 49.62. Glass: N-LAF34 / TAF1-class lanthanum dense flint. f = −158.4 mm. This high-index meniscus introduces controlled divergence into the beam from L1 and helps keep the front focusing stroke manageable.

**L22 — Plano-convex positive, cemented.** nd = 1.80518, νd = 25.46. Glass: SF6 / S-TIH6-class dense flint. f = +171.8 mm. The flat object-side surface simplifies the cemented doublet geometry. Its high dispersion is used inside a net-negative group, paired with the following crown element.

**L23 — Biconcave negative, cemented.** nd = 1.51823, νd = 58.96. Glass: light crown, E-C3 / S-NSL3 class. f = −110.4 mm. This element supplies the negative power that makes the L2 doublet part of a net-negative focusing group. The positive flint / negative crown pairing is not a classical achromat layout, but it is appropriate for a group whose required net power is negative.

### Group L3 — Rear floating-focus group

L3 is the positive member of the focusing pair and moves toward the object side as focus approaches 1:1 (claim 1; ¶0059). The patent states that L3 should include at least one cemented lens to reduce spherical-aberration variation during focusing (¶0020) and describes the group as a positive meniscus followed by a cemented negative-meniscus-plus-biconvex doublet (¶0060).

**L31 — Positive meniscus, convex to object.** nd = 1.72916, νd = 54.67. Glass: S-LAL18 / TAC8-class lanthanum crown. f = +83.5 mm. This element reconverges the bundle after L2 and contributes substantial positive power to the moving focus block.

**L32 — Negative meniscus, convex to object, cemented.** nd = 1.80610, νd = 33.27. Glass: dense lanthanum flint, NBFD15 / H-ZLaF56B class. f = −72.4 mm. This is the dispersive element in the L3 cemented doublet. Although its nd equals L15's nd, its νd is much lower, so it is a different glass type.

**L33 — Biconvex positive, FLD class, cemented.** nd = 1.43700, νd = 95.10. Glass: FCD100-class fluorite-like ED glass. f = +65.9 mm. This is the third FLD-class element and the only one outside L1. Its placement in the moving L3 group is central to maintaining color correction as the conjugates change from infinity to 1:1.

### Group L4 — Near-afocal corrector before the stabilization group

L4 is an air-spaced negative/positive pair placed immediately after the aperture stop. The patent explicitly divides L4 into a negative front component L4F and a positive rear component L4R and constrains their balance through condition (5), $0.003 < f_{4R}/f_4 < 0.070$ (claim 5; ¶0031–¶0033). In Example 2, f4R/f4 = 0.015.

**L41 / L4F — Biconcave negative.** nd = 1.80518, νd = 25.46. Glass: SF6 / S-TIH6-class dense flint. f = −43.7 mm. This strong negative element sits just behind the stop, where chief-ray height is low.

**L42 / L4R — Biconvex positive.** nd = 1.80518, νd = 25.46. Glass: SF6 / S-TIH6-class dense flint. f = +48.9 mm. This element almost cancels L41's power, leaving L4 with only weak residual positive power. The near-afocal pair shapes the beam delivered to L5 without greatly changing the overall focal length.

### Group L5 — Image-stabilization group

L5 is the decentering OS group. The patent describes it as a cemented negative-meniscus-plus-positive-meniscus doublet followed by a biconcave negative singlet (¶0060). It remains fixed during focusing and moves perpendicular to the optical axis for stabilization (claim 1).

**L51 — Negative meniscus, convex to object, cemented.** nd = 1.62041, νd = 60.34. Glass: N-SK16 / BACD16-class dense barium crown. f = −40.7 mm. This element is the leading negative component of the stabilizer doublet.

**L52 — Positive meniscus, convex to object, cemented.** nd = 1.80518, νd = 25.46. Glass: SF6 / S-TIH6-class dense flint. f = +72.4 mm. This high-dispersion positive element is cemented to L51 at R = 19.8131 mm. Color correction in this decentering group matters because lateral-color variation during stabilization is one of the patent's explicit concerns (¶0038).

**L53 — Biconcave negative.** nd = 1.58913, νd = 61.25. Glass: barium crown, S-BAL35 / M-BACD5N class. f = −54.4 mm. This separated negative singlet completes the strong negative power of L5 while keeping the cemented doublet curvatures from becoming still more severe.

### Group L6 — Rear relay and field-control group

L6 is a positive rear relay: a positive meniscus followed by a cemented negative-meniscus-plus-biconvex doublet (¶0060). It reconverges the beam from the negative OS group and sets the exit-side behavior of the lens.

**L61 — Positive meniscus, convex to object.** nd = 1.62041, νd = 60.34. Glass: N-SK16 / BACD16-class dense barium crown. f = +139.2 mm. This element begins the final reconvergence after L5.

**L62 — Negative meniscus, convex to object, cemented.** nd = 1.84666, νd = 23.78. Glass: N-SF57 / S-TIH53-class dense flint. f = −63.4 mm. This is the most dispersive glass in the design and forms the negative half of the final cemented doublet.

**L63 — Biconvex positive, cemented.** nd = 1.80610, νd = 40.73. Glass: dense lanthanum flint, M-NBFD130-class. f = +33.7 mm. This is the strongest standalone positive element in the rear group. Its high index allows strong positive power with less Petzval penalty than an equivalently powered lower-index crown.

## Glass Identification and Selection

The patent gives nd and νd for every element and gives C/F/g-line indices plus θgF for the five L1 elements in Example 2. It does not name glass vendors. The glass names below are therefore catalog-class identifications, not Sigma procurement claims. Where several manufacturers publish close equivalents, the designation is intentionally expressed as a class; for nd = 1.43700 and νd = 95.10, the stored value is closest to Hoya FCD100, while OHARA S-FPL53/S-FPL55 occupy the same fluorophosphate class but are not exact nd/νd matches.

| Glass class | nd | νd | θgF / ΔPgF data | Used at | Role |
|---|---:|---:|---|---|---|
| FCD100-class fluorite-like ED (Sigma FLD; nearby S-FPL53/S-FPL55-class equivalents) | 1.43700 | 95.10 | θgF = 0.533; ΔPgF ≈ +0.049 for L12/L13 | L12, L13, L33 | Primary secondary-spectrum correction |
| PCD51-class low-dispersion crown | 1.59349 | 67.00 | θgF = 0.536 for L14 | L14 | Crown half of L1 doublet |
| Dense lanthanum flint, M-NBFD130 class | 1.80610 | 40.73 | θgF = 0.567 for L15 | L15, L63 | L1 flint partner and rear positive |
| BK7 / S-BSL7-class crown | 1.51680 | 64.20 | θgF = 0.534 for L11 | L11 | Weak front collector |
| N-LAF34 / TAF1-class lanthanum dense flint | 1.77250 | 49.62 | catalog-class | L21 | Front focus meniscus |
| SF6 / S-TIH6-class dense flint | 1.80518 | 25.46 | catalog-class | L22, L41, L42, L52 | High-dispersion partner in focus, L4, and OS groups |
| E-C3 / S-NSL3-class light crown | 1.51823 | 58.96 | catalog-class | L23 | Negative crown in L2 doublet |
| S-LAL18 / TAC8-class lanthanum crown | 1.72916 | 54.67 | catalog-class | L31 | L3 leading positive |
| NBFD15 / H-ZLaF56B-class dense lanthanum flint | 1.80610 | 33.27 | catalog-class | L32 | L3 dispersive doublet element |
| N-SK16 / BACD16-class dense barium crown | 1.62041 | 60.34 | catalog-class | L51, L61 | OS and rear-group crown elements |
| S-BAL35 / M-BACD5N-class barium crown | 1.58913 | 61.25 | catalog-class | L53 | Separated OS negative singlet |
| N-SF57 / S-TIH53-class dense flint | 1.84666 | 23.78 | catalog-class | L62 | Final rear doublet flint |

The chromatic design is built around three FLD-class elements, but only two of them are in L1. L33's placement in the moving L3 group is analytically important because the focus mechanism substantially reconfigures the optical conjugates between infinity and 1:1. A correction concentrated entirely in the fixed front group would be less stable at close focus.

## Focus Mechanism

The lens uses a dual-group floating internal focus system. During focusing from infinity to 1:1, L2 moves toward the image side and L3 moves toward the object side; L1, L4, L5, L6, and the image plane remain fixed (claim 1; ¶0059). The front-surface-to-last-surface track remains 187.458 mm at all three tabulated focus states, and the first-surface-to-image distance remains 240.748 mm because Bf is constant at 53.29 mm.

| Configuration | Magnification | Patent f (mm) | Fno | d9 | d14 | d19 | Bf |
|---|---:|---:|---:|---:|---:|---:|---:|
| Infinity | 0 | 174.60 | 2.92 | 4.9234 | 73.9422 | 5.8630 | 53.29 |
| 1:2 | −0.5 | 135.59 | 4.62 | 20.5289 | 39.9411 | 24.2585 | 53.29 |
| 1:1 | −1.0 | 103.47 | 5.34 | 37.6004 | 6.3155 | 40.8127 | 53.29 |

From infinity to 1:1, d9 increases by 32.6770 mm while d19 increases by 34.9497 mm; d14 decreases by 67.6267 mm, exactly the sum of those two group motions within rounding. This confirms the opposite-direction floating motion.

The patent also states that the aperture stop preferably becomes smaller toward minimum distance so that aberration correction remains well controlled across the focus range (¶0043). The data file models the wide-open infinity stop directly; the close-focus Fno values in the patent are retained in the analysis but are not represented as a separate variable aperture law.

## Aspherical Surfaces

The Example 2 prescription contains no aspherical surfaces. All listed optical surfaces are spherical or planar; surface 12 and the aperture stop are planar. The patent provides no aspheric coefficient table for any of the five examples, and Sigma's official product description emphasizes FLD glass rather than aspherical elements.

## Chromatic Correction Strategy

Condition (8) governs the partial-dispersion balance in L1. It requires the mean θgF of the negative lenses in L1 minus the mean θgF of the positive lenses in L1 to be less than 0.050; the preferred upper value is 0.042 (¶0041–¶0042). For Example 2, the four positive L1 θgF values are 0.534, 0.533, 0.533, and 0.536, averaging 0.534. The single negative L1 element has θgF = 0.567. The difference is therefore 0.033, matching the patent's Example 2 condition table.

The two FLD-class elements in L1 suppress secondary spectrum where the axial beam is largest. The third FLD-class element in L3 extends that strategy into the moving focus block. The patent's discussion of condition (8) links the partial-dispersion balance not only to secondary-spectrum correction at infinity but also to lateral-color correction at minimum distance (¶0042).

## Image Stabilization

Stabilization is performed by L5, the fifth lens group. The patent defines the stabilization coefficient as

$$
k_{os} = \frac{\Delta y}{\Delta x} = \beta_B(1 - \beta_{os}),
$$

where Δx is stabilizer group displacement, Δy is image displacement, βos is the stabilizer group's lateral magnification, and βB is the lateral magnification of the groups behind it (¶0036). In this six-group layout, βos corresponds to β5 and βB corresponds to β6.

A paraxial split-system calculation for Example 2 at infinity gives β5 = −6.7071 and β6 = −0.23443. Thus,

$$
|1/(\beta_6(1-\beta_5))| = 0.5535,
$$

matching the patent's 0.55 value for condition (6). The ratio β6/β5 = 0.03495, matching the patent's 0.035 value for condition (7). This confirms both the group decomposition and the intended stabilizer placement.

## Conditional Expressions

The patent states eight conditional expressions and gives Example 2 values in ¶0085. Independent paraxial recomputation from the transcribed prescription gives the following results.

| # | Condition | Patent Example 2 | Recomputed | Status |
|---|---|---:|---:|---|
| (1) | $0.38 < f_1/f < 1.00$ | 0.63 | 0.632 | Satisfied |
| (2) | $3.33 < \beta_2 < 8.79$ | 5.40 | 5.402 | Satisfied |
| (3) | $0.34 < |f_2/f| < 0.97$ | 0.59 | 0.592 | Satisfied |
| (4) | $0.81 < (f_3 \cdot \mathrm{Fno})/f < 1.90$ | 1.26 | 1.260 | Satisfied |
| (5) | $0.003 < f_{4R}/f_4 < 0.070$ | 0.015 | 0.0152 | Satisfied |
| (6) | $0.40 < |1/\{\beta_6(1-\beta_5)\}| < 0.86$ | 0.55 | 0.5535 | Satisfied |
| (7) | $0.016 < \beta_6/\beta_5 < 0.052$ | 0.035 | 0.03495 | Satisfied |
| (8) | $\theta_{gF,L1}' - \theta_{gF,L1} < 0.050$ | 0.033 | 0.0330 | Satisfied |

Every condition falls inside the patent's stated range and also inside the tighter preferred ranges described in the body of the patent.

## Verification Summary

The prescription was rechecked independently by paraxial matrix trace and y-u ray trace.

- Infinity EFL and Bf: a parallel-input ray trace gives EFL = 174.602 mm and paraxial back focus = 53.293 mm, matching the patent's f = 174.60 mm and Bf = 53.29 mm.
- Finite conjugates: with the patent's 1:1 spacings and fixed Bf = 53.29 mm, the object distance from the first surface is 227.54 mm and the lateral magnification is −1.0001. The resulting subject-to-image distance is 468.29 mm, close to Sigma's official 0.47 m MFD.
- Group focal lengths: L1 = +110.329 mm, L2 = −103.400 mm, L3 = +75.392 mm, L4 = +3207.772 mm, L5 = −32.411 mm, and L6 = +48.623 mm.
- Element focal lengths: all element focal lengths quoted above are standalone in-air thick-lens values from the same prescription, not in-situ cemented-group powers.
- Petzval sum: surface-by-surface evaluation of $\sum (n' - n)/(n n' R)$ gives P = 8.8908 × 10⁻⁴ mm⁻¹, corresponding to a Petzval radius of about 1125 mm.
- Image circle: the patent infinity half-field, 2ω/2 = 7.035°, with f = 174.60 mm implies a 43.1 mm diagonal, consistent with 135 full-frame coverage.
- Semi-diameters in the data file are not patent-listed values. They were estimated from the f/2.92 marginal ray, constrained by the ⌀86 mm filter, the 187.458 mm invariant optical track, element edge thickness, adjacent-surface sag clearance, and an element front/rear semi-diameter ratio no greater than 1.25.

## Sources and References

- **JP 2013-104994 A**, Numerical Example 2. Primary source for the optical prescription, group layout, focus motion, stabilization group, variable spacings, line-index table for L1, and conditional expressions.
- **Sigma Corporation**, official APO Macro 180 mm F2.8 EX DG OS HSM product page. Source for production specifications: 19 elements in 14 groups, 13.7° angle of view, 0.47 m minimum focusing distance, 1:1 maximum magnification, ⌀86 mm filter thread, nine rounded diaphragm blades, 1,640 g weight, and SA/EF/F/Sony A mounts.
- **Manufacturer glass catalogs**, including OHARA, Hoya, Schott, Hikari, CDGM, and Sumita catalogs. Used for class-level glass identification by nd/νd agreement. The patent does not name the procurement vendor.

---

*Conventions.* Surface numbers follow JP 2013-104994 A, Numerical Example 2. Element focal lengths are standalone in-air thick-lens values. Group focal lengths are isolated-group paraxial EFLs in air. Partial-dispersion deviation ΔPgF is referenced to $P_{g,F} = 0.6438 - 0.001682\nu_d$.
