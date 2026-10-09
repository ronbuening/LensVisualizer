## Patent Reference and Design Identification

**Patent:** US 2026/0086332 A1
**Application Number:** US 19/325,938
**Filed:** September 11, 2025
**Published:** March 26, 2026
**Priority:** September 20, 2024, JP 2024-163217
**Inventor:** Yukihiro Yamamoto
**Assignee:** Sigma Corporation
**Title:** Imaging optical system
**Embodiment analyzed:** Numerical Example 1

The companion prescription models the selected correlation with the Sigma 135mm F1.4 DG | Art, edition A025. The patent does not name that marketed lens, and the manufacturer does not explicitly assign this numerical example to it. The identification rests on convergent construction and mechanism evidence, rather than a manufacturer-confirmed patent attribution. [1, 3]

1. Both constructions contain 17 elements in 13 air-separated groups.
2. Sigma lists four FLD glass elements. The example has four front elements with very low indices and Abbe numbers near 95, consistent with that special-glass count without proving their proprietary trade identity.
3. Sigma lists two aspherical elements; the selected example has two elements with both surfaces aspherical.
4. Both use two independently moving focus groups. The patent places them behind a fixed front group and iris; Sigma documents separate HLA actuators and a floating-focus system.
5. The full-frame image coverage and approximately 1.1 m close-focus configuration agree with the marketed application.

Marketing and design values are kept separate. The product is sold as 135 mm F1.4, while Numerical Example 1 publishes 131.00 mm and F1.46 at infinity. No uniform rescaling or aperture refit is applied. The source object-to-first-vertex distances and image plane remain unchanged. [1, 3]

## Optical Architecture

The prescription is a large-aperture portrait objective with a positive–negative–negative–positive functional-group sequence. The four functional groups are not the same as the thirteen air-separated components. Four cemented pairs reduce seventeen physical elements to thirteen components; the iris lies after L8 and before the first moving group. [1, ¶0213–0216]

| Functional group | Elements | Source surfaces | Computed standalone group EFL (mm) | Motion |
|---|---|---|---:|---|
| G1 (GrF) | L1–L8 | 1–15 | +93.785 | Fixed |
| G2 (GrFC1) | L9 | 17–18 | -53.348 | Imageward for close focus |
| G3 (GrFC2) | L10–L11 | 19–21 | -243.220 | Objectward for close focus |
| G4 (GrR) | L12–L17 | 22–31 | +55.416 | Fixed |

The patent's lens-group table numbers the groups G1–G4; its text and Figure 1 name them GrF, GrFC1, GrFC2 and GrR, which are the labels on the diagram.

The computed infinity EFL is 131.001861 mm. The first-vertex-to-image distance is 152.5496 mm, and the collimated back focal distance from the last glass vertex is 28.444780 mm. The authored final air gap is 28.4437 mm; the small first-order residual is retained rather than removed by moving the image plane.

The source optical track/EFL ratio is 1.164484. Thus, although 135 mm is a photographic short-telephoto focal-length class, the modeled optical track does not satisfy the strict TL/EFL < 1 telephoto-layout criterion. Its BFD/EFL ratio is 0.217133, so it is not a retrofocus layout by the BFD > EFL criterion either. Mechanical barrel length is a different reference-plane quantity and is not substituted for optical track.

The front group concentrates positive power while distributing it over multiple elements. A negative singlet and a negative cemented group provide opposing focus motion. The rear positive functional group combines two cemented pairs with a positive singlet and a negative aspherical final element. These group signs follow executed first-order calculations; they do not assign an individual aberration budget to each element.

## Element-by-Element Analysis

The focal lengths below are calculated for each physical element bounded by air, using its own radii, thickness and index. They are useful shape/power descriptors. They are not the individual element's in-situ power within a cemented interface, and their simple sums do not give a functional group's focal length. Glass names identify catalog-compatible modeling equivalents, not confirmed production suppliers.

### L1 - Positive Meniscus

nd = 1.86966, νd = 20.02. Glass: FDS20-W (HOYA) equivalent. f = +366.5 mm.

The first positive meniscus begins the fixed front group, with its convex side facing the object. Its relatively high index and low Abbe number contrast with the following low-dispersion positive elements. The patent specifically constrains the first positive element's Abbe number and anomalous partial-dispersion deviation in conditions (10) and (11); that is the source basis for discussing its chromatic role. [1, ¶0156–0169, ¶0214]

### L2 - Positive Meniscus

nd = 1.43700, νd = 95.10. Glass: FCD100 (HOYA) equivalent. f = +385.9 mm.

The second positive meniscus is one of the low-index, high-Abbe front elements. It contributes positive standalone power while maintaining a low primary dispersion coordinate. Its Abbe number enters the patent's mean for the second through fourth positive front elements. The prescription does not independently isolate its spherical-aberration contribution. [1, ¶0092–0097, ¶0214]

### L3 - Positive Meniscus

nd = 1.43700, νd = 95.10. Glass: FCD100 (HOYA) equivalent. f = +312.3 mm.

The third positive meniscus uses the same published material coordinates as L2 but different curvature and thickness. Sharing a coordinate does not make the two elements interchangeable: their shape and axial position differ. It is the second contributor to the high-Abbe mean governed by condition (4). [1, ¶0214]

### L4 - Positive Meniscus

nd = 1.43875, νd = 94.93. Glass: S-FPL53 (OHARA) equivalent. f = +207.6 mm.

L4 is the positive member of the first cemented pair, D1. It is the fourth positive element counted from the object and the third contributor to condition (4). The shared interface couples its low-dispersion material to L5's higher-index material; the interface is modeled once, with the downstream element's index. [1, ¶0214]

### L5 - Negative Meniscus

nd = 1.90043, νd = 37.37. Glass: TAFD37A (HOYA) equivalent. f = -127.7 mm.

L5 is the negative meniscus cemented to L4. Its standalone negative focal power exceeds the positive member in the combined first-order balance: D1 has a computed net EFL of -405.227 mm in air. This negative cemented component remains inside the positive front functional group. A positive constituent must not be mistaken for a positive net doublet. [1, ¶0214]

### L6 - Positive Meniscus

nd = 1.43875, νd = 94.93. Glass: S-FPL53 (OHARA) equivalent. f = +151.7 mm.

L6 returns to a positive meniscus with the second very-low-dispersion coordinate used in the front assembly. Together, L2, L3, L4 and L6 account for the four high-Abbe front elements. Its stronger standalone positive power than the earlier positive elements follows from the complete thick-lens calculation; no single-surface curvature is used as a substitute. [1, ¶0214]

### L7 - Negative Meniscus

nd = 1.85451, νd = 25.15. Glass: NBFD25 (HOYA) equivalent. f = -99.7 mm.

This negative meniscus is separated from L6 by an air gap and precedes the front aspherical element. It remains fixed during focusing. Its high-dispersion coordinate is part of the front group's mixed glass palette, but the source does not establish a unique lens-by-lens aberration contribution for it. [1, ¶0214]

### L8 - Positive Meniscus Aspheric

nd = 1.58313, νd = 59.46. Glass: M-BACD12 (HOYA) equivalent. f = +128.3 mm.

L8 is the positive meniscus that closes the front group. Both faces, 14A and 15A, retain the complete published aspherical prescription. The following fixed air space leads to the iris. Aspheric sag does not change the vertex-curvature first-order power, while it materially changes finite-height geometry. [1, ¶0205, ¶0214]

### L9 - Negative Meniscus

nd = 1.75500, νd = 52.32. Glass: TAC6 (HOYA) equivalent. f = -53.3 mm.

L9 alone forms the first focus group, GrFC1. It is a negative meniscus whose convex face points toward the object. During close focusing it moves toward the image while the iris and both outer functional groups remain fixed. The patent emphasizes the mass/control advantage of a single-element first focus group. [1, ¶0130–0131, ¶0213, ¶0215]

### L10 - Negative Meniscus

nd = 1.84666, νd = 23.78. Glass: FDS90-SG (HOYA) equivalent. f = -68.4 mm.

L10 is the negative meniscus at the entrance to the second focus group. It is cemented to L11 and moves with that element toward the object. The selected material coordinate is higher in dispersion than its partner's, but the optical effect belongs to the coupled group and surrounding conjugates rather than to a free element in isolation. [1, ¶0215]

### L11 - Positive Meniscus

nd = 1.72916, νd = 54.54. Glass: TAC8P (HOYA) equivalent. f = +90.0 mm.

L11 is the positive meniscus behind the shared surface 20. The net D2/GrFC2 group remains negative, with computed EFL -243.220 mm. Opposing motion of this group and L9 is prescribed at all three source states. [1, ¶0213, ¶0215]

### L12 - Biconvex Positive

nd = 1.88100, νd = 40.14. Glass: TAFD33 (HOYA) equivalent. f = +30.9 mm.

L12 is a strongly positive biconvex element at the entrance to the fixed rear group. It is cemented to L13. Its standalone focal length describes the air-bounded element only; the source interface at surface 23 refracts directly into the next glass. [1, ¶0216]

### L13 - Negative Meniscus

nd = 1.76634, νd = 35.82. Glass: S-NBH59 (OHARA) equivalent. f = -131.0 mm.

L13 is a negative meniscus with its concave side facing the object. It forms D3 with L12. The computed net D3 EFL is +39.588 mm, so the pair is positive even though its second element is negative. Its partial-dispersion ratio is retained independently of the catalog-equivalent label. [1, ¶0216]

### L14 - Biconvex Positive

nd = 1.94594, νd = 17.98. Glass: FDS18-W (HOYA) equivalent. f = +57.7 mm.

L14 is the positive biconvex member of D4. Its front face has much weaker curvature than its rear face. The high-index, low-Abbe material contrasts with L15's lower index; that contrast is represented explicitly at the shared interface. [1, ¶0216]

### L15 - Biconcave Negative

nd = 1.76182, νd = 26.61. Glass: FD140 (HOYA) equivalent. f = -34.4 mm.

The biconcave L15 completes D4. The computed net EFL of the pair is -87.011 mm, so it is a negative cemented component within the overall positive rear group. The model does not infer a separate, source-proven field-flattening or coma-correction budget from that sign alone. [1, ¶0216]

### L16 - Biconvex Positive

nd = 2.00069, νd = 25.46. Glass: TAFD40-W (HOYA) equivalent. f = +82.9 mm.

L16 is a positive biconvex singlet after the two rear cemented components. It is fixed relative to the image plane. Its source index exceeds two, and the matching catalog equivalent remains an optical model choice rather than a manufacturing-material identification. [1, ¶0216]

### L17 - Biconcave Negative Aspheric

nd = 1.58313, νd = 59.46. Glass: M-BACD12 (HOYA) equivalent. f = -95.9 mm.

The final element is a negative biconcave asphere with both faces specified through A20. It remains fixed while the two focus groups move. Its finite-radius profiles must be evaluated with the complete polynomial; neither the leading coefficient nor the spherical base alone describes the optical rim. [1, ¶0205, ¶0216]

## Glass Identification and Selection

The patent publishes d-line index, d-line Abbe number and absolute θgF for every material. These are retained as source data. The candidate-equivalent review compared all distinct coordinates across OHARA, HOYA, Schott, HIKARI, CDGM and Sumita catalog data, including spectral coefficients or direct line-index rows where available. Supplier and melt identities remain unknown. [1, 4–9]

| Elements | Catalog-compatible equivalent | nd | νd | Source θgF | Model ΔPgF |
|---|---|---:|---:|---:|---:|
| L1 | FDS20-W (HOYA) | 1.86966 | 20.02 | 0.6435 | +0.03337364 |
| L2, L3 | FCD100 (HOYA) | 1.43700 | 95.10 | 0.5336 | +0.04975820 |
| L4, L6 | S-FPL53 (OHARA) | 1.43875 | 94.93 | 0.5340 | +0.04987226 |
| L5 | TAFD37A (HOYA) | 1.90043 | 37.37 | 0.5767 | -0.00424366 |
| L7 | NBFD25 (HOYA) | 1.85451 | 25.15 | 0.6103 | +0.00880230 |
| L8, L17 | M-BACD12 (HOYA) | 1.58313 | 59.46 | 0.5405 | -0.00328828 |
| L9 | TAC6 (HOYA) | 1.75500 | 52.32 | 0.5473 | -0.00849776 |
| L10 | FDS90-SG (HOYA) | 1.84666 | 23.78 | 0.6192 | +0.01539796 |
| L11 | TAC8P (HOYA) | 1.72916 | 54.54 | 0.5453 | -0.00676372 |
| L12 | TAFD33 (HOYA) | 1.88100 | 40.14 | 0.5700 | -0.00628452 |
| L13 | S-NBH59 (OHARA) | 1.76634 | 35.82 | 0.5792 | -0.00435076 |
| L14 | FDS18-W (HOYA) | 1.94594 | 17.98 | 0.6546 | +0.04104236 |
| L15 | FD140 (HOYA) | 1.76182 | 26.61 | 0.6123 | +0.01325802 |
| L16 | TAFD40-W (HOYA) | 2.00069 | 25.46 | 0.6136 | +0.01262372 |

The material names are selected equivalents rather than source-listed trade names. In particular, OHARA S-FPL53 is kept distinct from the legacy unprefixed FPL53 entry; OHARA S- and L-series names are not silently interchanged. Several candidate glasses can share nearly identical nd/νd while differing in partial dispersion. Absolute θgF provides an additional compatibility test, not proof of supplier identity.

The patent defines θgF = (ng − nF)/(nF − nC). Its own anomalous-dispersion baseline is ΔPgF = θgF − 0.64833 + 0.00180νd. The companion model uses the current spectral engine's baseline, ΔPgF = θgF − (0.6438 − 0.001682νd). These deviations are numerically different despite referring to the same absolute ratio. For L1, the patent-defined deviation is +0.031206 and the model field is +0.03337364. [1, ¶0156–0164]

The three published quantities nd, νd and θgF determine index differences but do not uniquely determine absolute nC, nF and ng. No such absolute indices are fabricated as patent measurements. All seventeen equivalent labels resolve to catalog dispersion in the current runtime; the HOYA TAC6 and TAC8P rows were added to the site catalog with this model. The g-line index of each element still follows the retained source θgF through the dPgF conversion.

## Focus Mechanism

The system uses two independently moving negative groups behind a fixed iris. The front group L1–L8 and rear group L12–L17 stay fixed relative to the image. L9 moves imageward, while cemented L10–L11 moves objectward. Sigma's production description independently documents floating focus driven by two HLA actuators. [1, ¶0213–0215; 3]

| Source state | d0 to first vertex (mm) | d16 (mm) | d18 (mm) | d21 (mm) | Computed EFL (mm) |
|---|---:|---:|---:|---:|---:|
| INF | ∞ | 3.2297 | 20.3908 | 3.1336 | 131.001861 |
| 2407 mm | 2254.5496 | 7.6457 | 15.1920 | 3.9164 | 127.098179 |
| 1104 mm | 951.4780 | 14.4546 | 7.0477 | 5.2518 | 118.920978 |

From infinity to the intermediate state, GrFC1 moves +4.4160 mm and GrFC2 moves -0.7828 mm. Their total endpoint motions are +11.2249 mm and -2.1182 mm respectively. The total first-vertex-to-image track remains 152.5496 mm. No reversal appears in the published state sequence.

The finite table headings are rounded object-to-image distances. Adding the actual track to d0 gives 2407.0992 mm and 1104.0276 mm. The model therefore uses 1.1040276 m as its source-derived close endpoint, preserving the marketed 1.1 m value separately. The intermediate normalized focus coordinate is 0.458654799104, derived from the actual object-to-image distances. Only the two published finite states are explicitly certified; piecewise-linear interpolation between keyframes is a visualization convention, not a published continuous cam law.

At the unchanged image plane, the paraxial transverse magnification is -0.059458 at the intermediate state and -0.145190 at the close state. The small source-rounded axial conjugate residuals remain in the model. The changing finite-state collimated BFD is not substituted for the physical last air gap.

## Aspherical Surfaces

L8 carries surfaces 14A and 15A; L17 carries surfaces 30A and 31A. The implemented equation is

z(y) = (y²/r) / [1 + √(1 − (1 + K)(y/r)²)] + A4y⁴ + A6y⁶ + … + A20y²⁰.

The literal US printing at ¶0205 contains (y/z)² in the denominator's radicand. The same-priority Japanese publication JP 2026-056718 A, ¶0097, explicitly prints (y/r)² and 1 + K. The model follows that primary-source Japanese equation while retaining the US numerical coefficients unchanged. This is a disclosed source-equation correction; there is no K offset, coefficient refit or dimensional rescaling. [1, 2]

All dimensions are in millimeters. K is dimensionless and the coefficient Aₚ has units mm^(1−p). The full nonzero even-order series is retained:

| Term | 14A | 15A | 30A | 31A |
|---|---:|---:|---:|---:|
| K | 1.31969 | -0.49418 | -9.33638 | 3.00773 |
| A4 | -1.74600e-06 | 8.00700e-07 | 1.40182e-06 | 5.97410e-06 |
| A6 | -2.74822e-10 | 1.89969e-09 | 6.12079e-09 | 5.19546e-09 |
| A8 | -5.27433e-12 | -1.05116e-11 | -1.36953e-10 | -1.40827e-10 |
| A10 | 1.14794e-14 | 3.73574e-14 | 1.20007e-12 | 1.36630e-12 |
| A12 | -1.96123e-17 | -7.53480e-17 | -5.23473e-15 | -6.38593e-15 |
| A14 | 1.81911e-20 | 8.48844e-20 | 1.15364e-17 | 1.58507e-17 |
| A16 | -1.23654e-23 | -4.45989e-23 | -8.53231e-21 | -1.69005e-20 |
| A18 | 2.16244e-27 | -6.26134e-27 | -9.90443e-24 | -3.43479e-24 |
| A20 | -6.33221e-31 | 1.29953e-29 | 1.46825e-26 | 1.53859e-26 |

The positive conic constant at 14A and negative leading polynomial terms must be considered together. At 15A, 30A and 31A the higher-order terms likewise contribute materially; the sign of A4 alone is not an aberration or rim-shape diagnosis. Relative to a sphere with the same vertex radius, the full computed profile at each modeled rim is:

| Surface | Inferred model semi-diameter (mm) | Full sag (mm) | Departure from same-radius sphere (mm) |
|---|---:|---:|---:|
| 14A | 26.8 | +8.145801 | -0.157738 |
| 15A | 26.8 | +3.427294 | +0.465692 |
| 30A | 17.8 | -1.817957 | +0.412625 |
| 31A | 17.8 | +1.295529 | +0.661044 |

These departures refer only to the inferred clear apertures in the companion data file. They are not measurements at patent-published diameters. The exact surface profiles retain real conic domains and pass the modeled rim-slope, edge-thickness and shared-band separation checks. Neither the numerical table nor the catalog-equivalent material name establishes a specific production asphere-manufacturing process.

## Chromatic Correction Strategy

The front group mixes four very-low-dispersion positive elements with substantially higher-dispersion elements. The patent explicitly links the high-Abbe mean of the second through fourth positive elements to chromatic correction of the overall system and separately constrains the frontmost positive element's anomalous partial dispersion. These are source-described design constraints, not a reconstructed per-element aberration budget. [1, ¶0092–0097, ¶0156–0169]

The companion model retains absolute partial-dispersion information through the appropriate dPgF conversion. Catalog-derived dispersion for all seventeen elements is identified above. Those inputs allow a more specific dispersion model than nd/νd alone, but they do not establish apochromatic performance, measured color correction, production melt data or an independently validated production MTF.

## Conditional Expressions

The following first-order and exact-ray values use the source-preserving model at infinity. Functional-group magnifications are in-situ conjugate quantities; the listed group focal lengths remain standalone group quantities. The two aperture-sensitive ray-height expressions use an inferred marginal ray, because no physical diaphragm diameter is published. [1, ¶0074–0200, ¶0265]

| Condition | Quantity | Source interval | Computed | Printed EX1 |
|---|---|---|---:|---:|
| (1) | LGrF/fF | 0.20 < x < 1.40 | 0.644071 | 0.64 |
| (2) | f/fFC2R | 0.42 < x < 4.00 | 1.743745 | 1.74 |
| (3) | LGrFGrR/LALL | 0.15 < x < 0.50 | 0.255050 | 0.26 |
| (4) | mean νd of positive front elements 2–4 | 50 < x < 102 | 95.043333 | 95.04 |
| (4') | same mean νd | 55 < x < 102 | 95.043333 | 95.04 |
| (5) | \|K2\| | 0 < x < 0.370 | 0.096326 | 0.096 |
| (5') | \|K2\| | 0 < x < 0.600 | 0.096326 | 0.096 |
| (6) | axial marginal-hit separation / Ymax | 0.107 < x < 1.000 | 0.315655 | 0.315 |
| (6') | same marginal-hit separation / Ymax | 0.095 < x < 1.000 | 0.315655 | 0.315 |
| (7) | \|K1\| | 0.600 < x < 4.000 | 1.825048 | 1.825 |
| (8) | \|fFC12/fFC2\| | 0 < x < 0.50 | 0.162639 | 0.16 |
| (9) | \|f/fFC2\| | 0 < x < 1.00 | 0.538615 | 0.54 |
| (10) | νd of L1 | 15 < x < 40 | 20.020000 | 20.02 |
| (11) | patent ΔPgF of L1 | 0.010 < x < 0.100 | 0.031206 | 0.031 |
| (12) | \|exit-pupil-to-image distance / f\| | 0.25 < x < 1.50 | 0.634240 | 0.63 |
| (13) | (axial height at1 − axial height at15) / f | 0.080 < x < 0.300 | 0.159321 | 0.16 |
| (14) | f/fF | 0.75 < x < 2.50 | 1.396826 | 1.4 |
| (15) | f/fR | 0.70 < x < 3.50 | 2.363969 | 2.36 |
| (16) | \|f/fFC1\| | 1.00 < x < 4.00 | 2.455606 | 2.46 |

All calculated values satisfy the stated inequality bounds. The central F1.46 calibration does not exactly reproduce the last printed digits of conditions (6), (6′) and (13); the same fixed inferred iris also does not strictly reproduce the near-state printed F-number. These nominal comparison misses are retained. A predetermined sensitivity sweep over the printed F-number rounding interval finds joint compatibility with the rounded source values, without selecting a fitted iris or changing any prescription coefficient.

Condition (6) uses the axial distance between marginal-ray hits on the two curved surfaces. It is not the vertex air-space sum. Condition (13) uses actual axial-ray heights. Treating either as a vertex-only or paraxial-only expression would change its meaning.

## Model Scope and Numerical Checks

The neutral source plane 32 lies at the image because its BF value is zero. It is omitted, while d31 remains the physical rear-vertex-to-image gap. There is no source-listed cover-glass plate in this example and no synthetic cement layer or housing surface is inserted.

The iris is inferred by exact tracing from the nominal F1.46 value. All lens semi-diameters are modeled from Figure 1 proportions, ray clearance and physical surface geometry. They are not patent-published clear apertures. Figure 1 is drawn 0.92 as tall as it is long, and the readings correct for that. Figure 1 and the Sigma construction diagram draw L5, L7 and L9 as flanged blocks whose concave rear curve stops at a flat annulus short of the blank height. The model has no annulus, so those three rear faces are set between the drawn curve end and the blank height, at 36.0, 26.5 and 20.5 mm, and each rim draws as a block with a shallow slope where the drawings show a square corner. Current native geometry and element-render checks require no hidden material trim. Default off-axis bundles can vignette at air-entry edges; outer full-field stress probes do not establish full-cone transmission. Clear corner chief rays should not be mistaken for zero vignetting.

The exact printed infinity field reaches the stated image-height rounding, while the finite field-angle reference is not assumed. The tabulated finite object distances and unchanged image plane govern finite conjugates. The source-rounded focus residuals are preserved rather than removed to improve simulated image quality.

The calculated d-line Petzval sum is 0.000892776967 mm⁻¹, obtained by summing each actual interface's (n′ − n)/(rnn′). It is a first-order surface sum, not a prediction of zero astigmatism or a flat best-focus surface. The source, standalone-element, cemented-component and implemented-model calculations use explicitly distinguished boundaries.

## Sources

1. [US 2026/0086332 A1, Imaging optical system](https://patents.google.com/patent/US20260086332A1/en), original supplied USPTO publication: front page; Figure 1; printed pp.3–10 and20. Numerical Example 1 is on printed pp.9–10, corresponding to PDF pp.66–67. All source prescription values were checked against the rendered original tables.
2. [JP 2026-056718 A, official J-PlatPat publication](https://www.j-platpat.inpit.go.jp/c1801/PU/JP-2026-056718/11/ja), application JP2024-163217; ¶0097 and its original equation image establish the (y/r)² form. The equation image is retained with the dossier for offline inspection.
3. [Sigma 135mm F1.4 DG | Art, A025](https://www.sigma-global.com/en/lenses/a025_135_14), manufacturer specifications, lens-construction counts and floating-focus/dual-HLA description, accessed October 5, 2026.
4. [HOYA optical glass catalog, July 7, 2026, including obsolete glasses](https://www.hoya-opticalworld.com/common/agf/HOYA20260707_include_obsolete.agf), relevant coordinate and dispersion rows.
5. [OHARA optical glass catalog, July 1, 2026](https://oharacorp.com/wp-content/uploads/catalogs/OHARA_260701_CATALOG.zip), native glass families, coordinates and dispersion coefficients.
6. [Schott optical glass](https://www.schott.com/en-us/products/optical-glass), manufacturer-linked 2025B optical-design catalog used in the cross-vendor comparison.
7. [HIKARI complete optical-glass data](https://www.hikari-g.co.jp/optical_glass/catalog/document/HIKARI_ALL_Catalog_Data.xlsx), June 1, 2025 data revision; [optical-glass catalog](https://www.hikari-g.co.jp/optical_glass/catalog/document/HIKARI_Catalog.pdf), section3.4, for the fractional dispersion formula.
8. [CDGM manufacturer optical-glass catalog](https://www.cdgmgd.com/accessory/2022-06-28/client/www.cdgmgd.com/9b32dd2c-55f4-4d4c-b2d2-48f52c9d5f07.pdf), relevant direct coordinate/line-index rows in the 2022 catalog.
9. [Sumita optical-glass data downloads](https://www.sumita-opt.co.jp/ja/download/), manufacturer Zemax catalog dated August 26, 2026.

The catalog byte identities, selected-row residuals, source-normal-line distinctions and model-equivalent uncertainty are retained in the accompanying evidence and numerical records. Catalog row compatibility is not a production-melt identification.
