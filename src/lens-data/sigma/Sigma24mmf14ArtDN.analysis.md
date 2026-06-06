# Sigma 24mm F1.4 DG DN | Art

## Patent Reference and Design Identification

**Patent:** JP 2023-074094 A
**Application Number:** 特願2021-186863
**Filed:** 2021-11-17
**Published:** 2023-05-29
**Inventor:** Ryo Shioda (塩田 了)
**Applicant:** Sigma Corporation (株式会社シグマ)
**Title:** Optical System (光学系)
**Embodiment analyzed:** Example 1 (実施例1), infinity-focus prescription of §0094-0101

Example 1 is the embodiment transcribed for the Sigma 24mm F1.4 DG DN | Art (A022). The identification is supported by the same independent points rather than by name alone:

1. Example 1 is a 17-element, 14-group construction when cemented members are counted individually, matching Sigma's published construction for the A022.
2. The prescription contains two very-low-dispersion fluorophosphate-class elements (L2 and L14), one lower-dispersion ED crown element (L11), and four elements with aspherical surfaces on both faces (L1, L5, L8, and L17). This matches Sigma's published count of two FLD elements, one SLD element, and four aspherical glass elements.
3. The patent gives f = 23.86 mm and F-number = 1.46 for Example 1, corresponding to the production 24 mm F1.4 nominal specification.
4. The tabulated image height is Y = 21.63 mm, giving a 43.26 mm image circle for the 36 x 24 mm full-frame format.
5. Example 1 focuses by moving only G2 toward the image side from infinity to close focus (§0097); the production lens is an internally focusing mirrorless design.
6. The close-focus state is tabulated at 249 mm, matching the production minimum focusing distance of 25 cm within normal rounding.
7. The patent was filed on 2021-11-17 and published after the August 2022 product introduction, which is consistent with a production-adjacent Sigma filing.

The older Sigma 24mm F1.4 DG HSM | Art is excluded. It is a different DSLR-era optical system and does not match the Example 1 element count, group count, internal focusing arrangement, or special-element census.

## Optical Architecture

The design is a five-group fast wide-angle of negative-positive-positive-negative-positive group power distribution. The front negative group gives the lens a retrofocus-derived layout, but the patent BF/EFL ratio is just below unity: BF = 23.0355 mm versus f = 23.86 mm. It is therefore better described as a front-negative mirrorless wide-angle than as a strict long-back-focus retrofocus design.

The aperture stop is between G3 and G4. The patent's central architectural point is the split rear-of-stop correction system: rather than using a single rear positive group, it divides the post-stop volume into G4 and G5, each containing both positive and negative refracting components. The patent states that this placement allows the positive glasses behind the stop to be selected for axial color, lateral color, peripheral short-wavelength flare, and field curvature at the same time (§0023-0024).

Group roles are as follows:

- **G1 (L1-L5, f = -26.10 mm):** front negative collector and wide-field aberration manager. L1 and L5 carry both front-group aspheric pairs.
- **G2 (L6, f = +48.64 mm):** single positive focusing element. Keeping this group to one element addresses the patent's concern with moving mass during autofocus (§0081-0082).
- **G3 (L7-L10, f = +51.61 mm):** principal pre-stop converging group. L8 is the high-index aspheric positive member; L9-L10 form a cemented achromatizing pair.
- **G4 (L11-L14, f = -49.60 mm):** first post-stop group, net negative, built from two cemented doublets. This group carries the SLD-class L11 and the rear FLD-class L14.
- **G5 (L15-L17, f = +36.37 mm):** rear positive group. L15 supplies most of the positive power; L17 is the rear biconcave aspheric field element.

Because G2 focuses ahead of the stop, the space behind the stop is not consumed by focus travel. The rear groups can remain fixed and can be optimized primarily for chromatic and field correction.

## Element-by-Element Analysis

Element focal lengths below are standalone in-air thick-lens values computed from the patent prescription. In cemented assemblies these values should not be confused with the in-situ power of the cemented unit.

### L1 — Negative Meniscus, convex to object (aspheric both faces)

nd = 1.58313, νd = 59.4. Glass: 583594 crown class, close to S-BAL42 / SK12 / D-ZK2 catalog families. f = -54.9 mm.

L1 is the leading negative meniscus and the first wide-field correction element. Both surfaces are aspheric. Its role is primarily geometric: it bends the high-angle off-axis bundles without putting unnecessary dispersion in the front element. The patent's prose identifies the first group as beginning with a negative meniscus convex to the object side (§0096), matching the numerical signs.

### L2 — Negative Meniscus, convex to object (FLD class)

nd = 1.43700, νd = 95.1. Glass: 437951 fluorophosphate ED class, close to FCD100 / S-FPL53; Sigma FLD class. f = -125.0 mm. ΔθgF = +0.056526.

L2 is the first of the two fluorophosphate-class low-dispersion elements. It sits in G1 where chief-ray height is high, so its unusually high Abbe number and positive anomalous partial-dispersion deviation contribute mainly to lateral color and secondary-spectrum control across the wide field.

### L3 — Biconvex Positive

nd = 2.00069, νd = 25.5. Glass: 001255 high-index dense-flint class, close to TAFD40 / H-ZLaF90A families. f = +83.2 mm.

L3 is a high-index, high-dispersion positive element. Its index allows useful power without very steep curvature, limiting Petzval contribution. Its low Abbe number also balances the very low dispersion of L2 within G1.

### L4 — Biconcave Negative

nd = 1.61340, νd = 44.3. Glass: 613443 lanthanum-flint class, close to S-NBM51 / LAF45 families. f = -33.8 mm.

L4 is the strongest standalone negative element in G1. It sets much of the group's net negative power after the L3 positive element and shares the chromatic correction burden in the front group.

### L5 — Positive Meniscus, convex to object (aspheric both faces)

nd = 1.73077, νd = 40.5. Glass: 731405 lanthanum glass class, close to M-LAF81 / D-LaF79 families. f = +92.7 mm.

L5 completes G1 and is aspheric on both faces. It works on the bundle after the front negative elements and before the moving focus element, cleaning up residual spherical aberration, coma, and distortion that would otherwise be carried into G2.

### L6 — Biconvex Positive (focus group, G2)

nd = 1.59349, νd = 67.0. Glass: 593670 low-dispersion crown class, close to PCD51 / PSKH4 families. f = +48.6 mm.

L6 is the only moving focusing element. It is positive and relatively low in dispersion, reducing focus-induced chromatic variation. Its single-element construction is also consistent with the patent's aim of reducing the mass of the focusing unit (§0081-0082).

### L7 — Negative Meniscus, convex to image

nd = 1.77047, νd = 29.7. Glass: 770297 dense-flint class, close to NBFD29-family glass. f = -60.9 mm.

L7 begins G3 with a negative meniscus convex to the image side (§0098). It prepares the beam for the strong positive L8 and helps prevent G3 from becoming a single overpowered positive block.

### L8 — Biconvex Positive (aspheric both faces)

nd = 1.77250, νd = 49.5. Glass: 773495 high-index lanthanum glass class, close to M-TAF105-family glass. f = +38.0 mm.

L8 is the strongest positive element before the stop and carries aspheric correction on both faces. Its position makes it a major spherical-aberration and coma-correction element for the fast axial cone.

### L9 — Biconvex Positive (cemented with L10)

nd = 2.00100, νd = 29.1. Glass: 001291 high-index lanthanum glass class, close to TAFD55 / S-LAH99 families. f = +52.6 mm.

### L10 — Biconcave Negative (cemented with L9)

nd = 1.61340, νd = 44.3. Glass: 613443 lanthanum-flint class, close to S-NBM51 / LAF45 families. f = -89.4 mm.

L9-L10 form the cemented pair at the rear of G3. The pair is weakly positive as a unit and sits just before the stop. The pairing is not a conventional positive-crown / negative-flint achromat: L9 is both higher in index and higher in dispersion than L10. Its high index is useful for Petzval control and for setting the fast cone entering the stop.

### L11 — Biconvex Positive (SLD class, cemented with L12)

nd = 1.55032, νd = 75.5. Glass: 550755 ED crown class, close to FCD705 / H-FK55; Sigma SLD class. f = +37.6 mm. ΔθgF = +0.027580.

### L12 — Biconcave Negative (cemented with L11)

nd = 1.85451, νd = 25.2. Glass: 855252 dense-flint class, close to NBFD25 / S-NBH56 families. f = -21.2 mm.

L11-L12 form the first G4 doublet and are net negative as a cemented unit. L11 is the lower-dispersion positive member that participates in the G4 positive-glass conditions, while L12 supplies high-dispersion negative power and helps make G4 net negative.

### L13 — Negative Meniscus, convex to object (cemented with L14)

nd = 1.77047, νd = 29.7. Glass: 770297 dense-flint class, close to NBFD29-family glass. f = -70.8 mm.

### L14 — Positive Meniscus, convex to object (FLD class, cemented with L13)

nd = 1.43700, νd = 95.1. Glass: 437951 fluorophosphate ED class, close to FCD100 / S-FPL53; Sigma FLD class. f = +67.4 mm. ΔθgF = +0.056526.

L13-L14 implement the claim-6 cemented interface: the cemented surface is convex to the object side, and the object-side medium has a higher index than the image-side medium. The patent states that such an interface helps suppress coma and spherical aberration in G4 (§0077-0078). The unit is nearly afocal in first-order power; its importance is chromatic and aberrational rather than power-bearing.

### L15 — Biconvex Positive

nd = 2.00100, νd = 29.1. Glass: 001291 high-index lanthanum glass class, close to TAFD55 / S-LAH99 families. f = +24.5 mm.

L15 is the only positive element in G5 and is therefore the element behind the patent table's G5L1 conditions. Its very high index supplies rear-group power while controlling Petzval curvature.

### L16 — Negative Meniscus, convex to object

nd = 1.61340, νd = 44.3. Glass: 613443 lanthanum-flint class, close to S-NBM51 / LAF45 families. f = -127.5 mm.

L16 is a weak negative meniscus between the strong positive L15 and the rear aspheric field element. It contributes to the G5 negative-glass partial-dispersion average.

### L17 — Biconcave Negative (aspheric both faces)

nd = 1.80610, νd = 40.7. Glass: 806407 lanthanum-flint class, close to M-NBFD130-family glass. f = -118.9 mm.

L17 is the final field element. Both faces are aspheric. It corresponds to the patent's preferred rear-group asphere whose power changes from center to edge so that field curvature and distortion can be suppressed (§0079-0080).

## Glass Identification and Selection

The patent gives nd, νd, and a small signed partial-dispersion deviation value for each glass. Those deviations are retained in the data file for chromatic tracing, but they are not all APD designations. APD highlighting is limited to L2, L11, and L14, matching the production two-FLD/one-SLD special-element census. The patent does not name a glass vendor. The names below are therefore catalog-class identifications from the nd/νd codes and common cross-reference families, not proof that Sigma used that exact catalog melt.

| Catalog class | nd | νd | ΔθgF | Element(s) | Role |
|---|---:|---:|---:|---|---|
| 437951 fluorophosphate ED, FCD100 / S-FPL53 class | 1.43700 | 95.1 | +0.056526 | L2, L14 | FLD-class lateral and axial color correction |
| 550755 ED crown, FCD705 / H-FK55 class | 1.55032 | 75.5 | +0.027580 | L11 | SLD-class positive lens in G4 |
| 593670 low-dispersion crown, PCD51 class | 1.59349 | 67.0 | +0.008940 | L6 | Lightweight low-dispersion focus element |
| 583594 crown, S-BAL42 / SK12 / D-ZK2 class | 1.58313 | 59.4 | +0.000922 | L1 | Front asphere substrate |
| 731405 lanthanum glass, M-LAF81 / D-LaF79 class | 1.73077 | 40.5 | -0.003978 | L5 | Rear G1 asphere substrate |
| 773495 high-index lanthanum, M-TAF105 class | 1.77250 | 49.5 | -0.007316 | L8 | High-power aspheric positive element |
| 770297 dense flint, NBFD29 class | 1.77047 | 29.7 | +0.000271 | L7, L13 | Negative chromatic-balancing elements |
| 855252 dense flint, NBFD25 / S-NBH56 class | 1.85451 | 25.2 | +0.007183 | L12 | High-index negative member in G4 |
| 001255 high-index dense flint, TAFD40 class | 2.00069 | 25.5 | +0.011062 | L3 | High-index positive element in G1 |
| 001291 high-index lanthanum, TAFD55 / S-LAH99 class | 2.00100 | 29.1 | +0.003566 | L9, L15 | Petzval and rear-group power control |
| 613443 lanthanum flint, S-NBM51 / LAF45 class | 1.61340 | 44.3 | -0.005289 | L4, L10, L16 | Moderate-index negative elements |
| 806407 lanthanum flint, M-NBFD130 class | 1.80610 | 40.7 | -0.005657 | L17 | Rear aspheric field element |

The key chromatic pattern is the split use of ED/fluorophosphate glass. One FLD-class element is placed in the high-chief-ray front group (L2), and the second is placed behind the stop in G4 (L14). L11 adds an SLD-class positive element in the same rear-of-stop group. Other ordinary glasses retain their patent-published signed deviations, but they are not treated as special APD elements. This distribution follows the patent's description of using the positive lenses behind the stop to address axial color, lateral color, and peripheral color flare at the same time (§0023-0024).

## Focus Mechanism

The lens uses internal focus by a single moving group, G2. Claim 2 fixes every other group relative to the image plane. From infinity to the close-focus state, G2 moves toward the image side; d10 increases and d12 decreases by the same amount.

| State | d0 | d10 | d12 | BF |
|---|---:|---:|---:|---:|
| Infinity | ∞ | 3.7171 | 8.1632 | 23.0355 |
| 249 mm state | 136.5000 | 9.2968 | 2.5835 | 23.0355 |

The two variable gaps sum to 11.8803 mm in both focus states, so the G2 travel is 5.5797 mm. The data file records these as the only focus variables.

The patent's finite-distance table is treated as a focus-spacing table, not as an independently verified magnification table. A simple first-order finite-conjugate trace does not reproduce the production maximum magnification closely enough to justify a paraxial magnification claim. The production specification, 1:7.1, governs the user-facing magnification value.

## Aspherical Surfaces

The aspherical elements are L1, L5, L8, and L17, each aspheric on both faces: surfaces 1, 2, 9, 10, 15, 16, 31, and 32. The patent's aspheric equation is the standard conic-plus-polynomial form:

$$
z = \frac{(1/r)y^2}{1 + \sqrt{1 - (1 + K)(y/r)^2}} + \sum_i A_i y^i.
$$

The patent lists A3 through A16 as possible terms (§0088). Example 1 uses K = 0 on every aspheric surface and only even-order polynomial terms.

| Surface | A4 | A6 | A8 | A10 | A12 | A14 |
|---|---:|---:|---:|---:|---:|---:|
| 1 | +9.70576E-06 | -1.86433E-08 | +2.75229E-11 | -2.96311E-14 | +2.10699E-17 | -6.75390E-21 |
| 2 | +2.95756E-06 | -1.66290E-08 | +2.98210E-11 | -1.49159E-13 | +2.74816E-16 | -1.93740E-19 |
| 9 | -2.42866E-05 | +5.00209E-08 | +6.27171E-11 | -3.63242E-13 | +3.31214E-16 | 0 |
| 10 | -2.30319E-05 | +5.54940E-08 | +4.43002E-11 | -2.63258E-13 | +2.18796E-16 | 0 |
| 15 | -5.38648E-06 | +7.55003E-09 | +7.81632E-12 | -1.85817E-14 | -1.74128E-17 | 0 |
| 16 | +1.60401E-06 | +7.34939E-10 | +6.17228E-12 | +2.52853E-14 | -8.42590E-17 | 0 |
| 31 | -2.74145E-05 | +1.40603E-07 | -8.91781E-10 | +2.43875E-12 | -2.31913E-15 | 0 |
| 32 | -1.43072E-06 | +1.49542E-07 | -7.26583E-10 | +1.86133E-12 | -2.03497E-15 | 0 |

L1 and L5 primarily correct wide-field distortion, astigmatism, coma, and front-group spherical residuals. L8 corrects the fast pre-stop cone. L17 acts as the rear field-shaping element, matching the patent's claim-7 emphasis on a rear-group asphere.

## Conditional Expressions

The patent states sixteen conditions. Conditions (1)-(4) are mandatory in claim 1; the remaining conditions are preferred refinements. Recomputing the Example 1 averages from the prescription reproduces the patent correspondence table.

| # | Expression | Bound | Example 1 value |
|---|---|---:|---:|
| (1) | ΔθgF_G4P | > 0.000 | +0.042 |
| (2) | νd_G4P | > 50.00 | 85.30 |
| (3) | ΔθgF_G5L1 | > 0.000 | +0.004 |
| (4) | νd_G5L1 | < 40.00 | 29.13 |
| (5) | f/f1 | -1.50 to 0.00 | -0.91 |
| (6) | f/|f2| | 0.05 to 0.75 | +0.49 |
| (7) | f/f3 | 0.10 to 1.20 | +0.46 |
| (8) | f/f4 | -1.00 to +1.00 | -0.48 |
| (9) | f/f5 | -1.00 to +1.00 | +0.66 |
| (10) | νd_G1P | < 40.00 | 32.98 |
| (11) | ΔθgF_G1N | > -0.010 | +0.017 |
| (12) | ΔθgF_G3P | > -0.005 | -0.002 |
| (13) | ΔθgF_G4N | < +0.010 | +0.004 |
| (14) | ΔθgF_G5N | < +0.005 | -0.005 |
| (15) | nd_G1P | > 1.8500 | 1.8657 |
| (16) | nd_G5P | > 1.8500 | 2.0010 |

The patent correspondence table labels conditions (3) and (4) as G5L1. For Example 1 this is equivalent to G5P because L15 is the only positive lens in G5.

## Data File Transcription and Semi-Diameter Notes

The TypeScript data file uses the unscaled Example 1 prescription from the patent. It includes all 17 glass elements, the aperture stop, the two focus-variable air gaps, and all eight aspherical surfaces. It omits sensor cover glass, filters, and mechanical parts.

The patent-published signed partial-dispersion deviations are stored on every glass as `dPgF` for chromatic tracing. The APD marker is narrower: it is applied only to L2, L11, and L14, the two FLD-class elements and one SLD-class element supported by the production special-element census.

The patent does not publish clear apertures or semi-diameters. The data file therefore uses estimated semi-diameters derived from a first-order marginal/chief-ray trace at half field, then constrained to maintain plausible element shapes, edge thickness, surface-slope limits, and cross-gap sag clearance in the renderer. The stop semi-diameter is 12.90 mm, derived from the patent f = 23.86 mm and F-number = 1.46.

## Verification Summary

Independent paraxial tracing of the d-line spherical-base prescription gives the following group focal lengths:

| Group | Patent | Trace |
|---|---:|---:|
| G1 | -26.10 mm | -26.0967 mm |
| G2 | +48.64 mm | +48.6388 mm |
| G3 | +51.61 mm | +51.6100 mm |
| G4 | -49.60 mm | -49.5941 mm |
| G5 | +36.37 mm | +36.3714 mm |

The same trace gives system EFL = 24.0037 mm. The patent table gives f = 23.86 mm. The paraxial focus from the last surface is 21.9873 mm, while the patent BF entry is 23.0355 mm. Because the group powers and condition values reproduce the patent table and no surface transcription error was found, the data file preserves the patent's tabulated BF rather than forcing the first-order paraxial focus.

The Petzval sum, computed surface by surface as Σ φ/(n·n'), is +0.003265 mm^-1, corresponding to a Petzval radius of -306.24 mm. This small residual is consistent with the use of high-index positive elements and the rear aspheric field element.

## Sources

- JP 2023-074094 A, Sigma Corporation, Ryo Shioda, published 2023-05-29. Prescription, claims, focus spacings, aspheric coefficients, and condition correspondence values for Example 1.
- Sigma Corporation, official product specifications for the Sigma 24mm F1.4 DG DN | Art. Production element/group count, FLD/SLD/aspherical count, mount variants, minimum focusing distance, maximum magnification, and stepping-motor focusing.
- HOYA and OHARA public optical-glass catalog and cross-reference materials. Used only for catalog-class glass identification from nd/νd codes; the patent itself does not name glass vendors.
