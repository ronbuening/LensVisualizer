# Sigma 28-45mm F1.8 DG DN | Art - Optical Analysis

## Patent Reference and Design Identification

**Patent:** CN 120386081 A
**Application Number:** 202410965938.0
**Filed:** 2024-07-18
**Published:** 2025-07-29
**Priority:** JP 2024-010824 (2024-01-29)
**Inventor:** Hiromichi Ochiai (落合裕道)
**Applicant:** Sigma Corporation (株式会社シグマ)
**Title:** Zoom Lens (变焦镜头)
**Embodiment analyzed:** Numerical Example 1 (数值实施例1 / 实施例1)

Numerical Example 1 is the working prescription that best matches Sigma's production **28-45mm F1.8 DG DN | Art**. The match is not based on a single clue. It is a convergence of the patent's surface data, the patent's worked-example metadata, and Sigma's published production specifications.

1. **Element and group count.** The production lens is specified as 18 elements in 15 groups. Numerical Example 1 has 18 glass elements; when the three cemented doublets are counted as single air-separated components, it gives 15 air-spaced groups.
2. **Special elements.** The production lens is specified as 5 SLD elements and 3 aspherical elements. Numerical Example 1 has three double-sided aspherical elements, L1, L8, and L18, for six aspherical surfaces. The likely five SLD positions are inferred from the low-dispersion/anomalous-crown glass classes, not from any published element-location diagram.
3. **Focal length and field.** The patent gives 28.84 / 35.06 / 43.66 mm with diagonal fields of 75.19° / 62.38° / 50.51°. This brackets the marketed 28-45 mm range and agrees with the published full-frame angle-of-view range.
4. **Aperture.** The patent gives F1.86 at all three zoom positions. Sigma markets the lens as a constant F1.8 zoom.
5. **Image format.** The patent image height is 21.63 mm, corresponding to the 43.26 mm diagonal of the 36 x 24 mm format.
6. **Kinematics.** The patent's G1 and final group are fixed during zoom and focus, the barrel is effectively constant-length, and focusing is by a small internal group. These features match the production lens's inner-zoom and internal-focus construction.
7. **Timing.** The Japanese priority date, Chinese filing date, and publication sequence are consistent with a production design disclosed around the 2024 product release window.

The mapping is to Example 1 rather than to the later examples. Example 1 uses the seven-group sequence G1-G7, focuses with the single biconcave third group, and carries the condition values listed in the patent table: f1/ft = -1.054, νdG1_2 = 67.00, final-lens shape factor = 0.45, f2/f3 = -1.60, and condition (5) = 0.94.

## Optical Architecture

Example 1 is a negative-lead, wide-to-normal, large-aperture internal zoom. It should not be described as a strict telephoto design, and its 24.49 mm back focal distance is shorter than the 28.84 mm wide-end focal length; the more precise description is a negative-front zoom arranged for a mirrorless back-focus budget.

The patent resolves the optical system into seven moving or fixed powered groups:

> **G1 (-) · G2 (+) · G3 (-) · G4 (+) · G5 (-) · G6 (-) · G7 (+)**

The independently traced group focal lengths are -46.04, +92.09, -57.73, +32.98, -80.77, -74.48, and +40.70 mm. G1 is the fixed negative front group. G2, G3, and G4 form the positive middle assembly GM. G5 and G6 form the rear assembly GR, with the stop placed just ahead of G5. G7 is the fixed final group GN.

The zoom motion is internal. From wide to tele, G2 through G5 move toward the object; G6 moves slightly toward the image; G1 and G7 remain fixed. In lens-coordinate terms, the net group shifts are:

| Group | Wide-to-tele shift | Direction |
|---|---:|---|
| G1 | 0.00 mm | fixed |
| G2 | -15.67 mm | objectward |
| G3 | -13.65 mm | objectward |
| G4 | -16.91 mm | objectward |
| G5 + stop | -7.87 mm | objectward |
| G6 | +1.78 mm | imageward |
| G7 | 0.00 mm | fixed |

The separation between GM and GR increases from 2.30 mm to 11.34 mm. That widening is not incidental; it is one of the patent's defining constraints. It lets the positive middle assembly supply most of the zoom ratio while the rear negative groups participate in aberration control without requiring a moving front group.

The rear negative power is split between two cemented doublets. Each doublet places a low-dispersion crown against a denser, more dispersive partner. This is the axial-color correction core of the design. The fixed final triplet then restores convergence onto the sensor and uses a molded double-aspheric biconcave final element as the last field and distortion corrector.

## Element-by-Element Analysis

Standalone focal lengths below are in-air thick-lens values. Cemented group powers are discussed separately where the in-situ behavior differs from isolated element values.

### G1 - Fixed Negative Front Group (L1-L4)

**L1 - Negative meniscus, convex to object, double asphere.**
nd = 1.69350, νd = 53.18. Glass: OHARA L-LAL13 / HOYA M-LAC130-class molded lanthanum crown. f = -108.7 mm.

L1 is the front oblique-ray corrector. Both surfaces are aspherical. The exact nd/νd pair matches a molded lanthanum crown class, and the double-aspheric form is consistent with the patent's use of this element to control wide-end distortion and field curvature before the rays reach the stronger interior groups.

**L2 - Negative meniscus, convex to object.**
nd = 1.55200, νd = 70.70. Glass: S-FPM5 / FCD500-class low-dispersion fluorophosphate crown. f = -109.5 mm.

L2 is a weak negative low-dispersion meniscus. Its position in the front group gives it leverage over lateral color because chief-ray height is still high.

**L3 - Biconcave negative.**
nd = 1.59349, νd = 67.00. Glass: HOYA PCD51 / HIKARI J-PSKH4 class. f = -95.8 mm.

L3 supplies much of the front group's negative power. Its Abbe number is the second-largest among G1's negative elements, so it is the element that satisfies the patent's condition (2) value of 67.00.

**L4 - Positive meniscus, convex to object.**
nd = 1.94594, νd = 17.98. Glass: HOYA FDS18-W / CDGM H-ZF88 class. f = +117.9 mm.

L4 is the high-index, high-dispersion positive partner that closes the front group. It partially achromatizes the low-dispersion negative pair ahead of it while keeping curvature under control through its very high refractive index.

### GM - Positive Middle Assembly (G2 + G3 + G4, L5-L11)

**L5 - Positive meniscus, convex to object, G2.**
nd = 1.72916, νd = 54.67. Glass: HOYA TAC8 / S-LAL18 class. f = +92.1 mm.

L5 is the entire second group. Its standalone focal length equals the tabulated G2 focal length and it is the leading positive power in the zooming middle assembly.

**L6 - Biconcave negative, G3 focus group.**
nd = 1.70300, νd = 52.38. Glass: OHARA S-LAL21. f = -57.73 mm.

L6 is the entire third group and the focusing group. It moves objectward for close focus. This is analytically important: focus is not by unit extension and not by a multi-element floating cell in the patent example; it is a single negative element moving between G2 and G4.

**L7 - Positive meniscus, convex to object.**
nd = 2.00100, νd = 29.13. Glass: HOYA TAFD55 / S-LAH99 class. f = +89.7 mm.

L7 opens G4 with extreme-index positive power. Its role is to bend the fast axial bundle without requiring excessively steep radii.

**L8 - Biconvex positive, double asphere.**
nd = 1.85135, νd = 40.10. Glass: HOYA M-TAFD305. f = +58.0 mm.

L8 is the principal high-aperture aspheric corrector inside GM. Its two aspheric surfaces work on the open-aperture marginal cone, mainly spherical aberration, coma, and spherochromatic balance.

**L9 + L10 - Cemented doublet in G4.**
L9: nd = 1.75520, νd = 27.53. Glass: HOYA E-FD4L / CDGM H-ZF6 class. f = -45.2 mm.
L10: nd = 1.55032, νd = 75.50. Glass: HOYA FCD705. f = +61.4 mm.
Cemented pair focal length = -193.3 mm.

This is a weak net-negative achromatizing doublet embedded in the positive fourth group. The individual powers are strong, but the cemented pair's net power is modest; its value is chromatic correction more than gross focusing power.

**L11 - Biconvex positive.**
nd = 1.48071, νd = 85.29. Glass: HOYA FCD915. f = +78.7 mm.

L11 is the lowest-dispersion element in the prescription. It supplies positive power near the rear of GM with minimal axial-color penalty and is the strongest candidate for a fluorite-grade SLD/FLD-class role, although Sigma publishes only an SLD count for the production lens.

### GR - Rear Assembly (G5 + G6, L12-L15)

**Aperture stop.**
The stop lies immediately ahead of G5 and moves with G5 during zooming. The patent does not publish a blade count; the production specification gives 11 rounded blades.

**L12 + L13 - Cemented doublet, G5.**
L12: nd = 1.55032, νd = 75.50. Glass: HOYA FCD705. f = +50.8 mm.
L13: nd = 1.84666, νd = 23.78. Glass: HOYA FDS90-SG/FDS90-SGP / N-SF57HT / S-TIH53W class. f = -29.6 mm.
Cemented pair focal length = -80.77 mm.

G5 is a net-negative doublet immediately behind the stop. Because marginal-ray height is high here, it has strong leverage over axial chromatic aberration and spherochromatism.

**L14 + L15 - Cemented doublet, G6.**
L14: nd = 1.59282, νd = 68.62. Glass: HOYA FCD515 / FCD505 class. f = +59.4 mm.
L15: nd = 1.61340, νd = 44.27. Glass: HOYA LAF45 / OHARA S-NBM51 class. f = -33.9 mm.
Cemented pair focal length = -74.48 mm.

G6 is the second negative rear doublet. It moves slightly imageward as the lens zooms to tele, so it trims the zoom-dependent rear conjugate while continuing the axial-color correction strategy established by G5.

### GN - Fixed Final Group (G7, L16-L18)

**L16 - Biconvex positive.**
nd = 1.98612, νd = 16.48. Glass: HOYA FDS16-W. f = +67.3 mm.

L16 opens the final group with very high index and very high dispersion. Its positive power is part of the final convergence and chromatic balancing after the rear negative doublets.

**L17 - Biconvex positive.**
nd = 1.87070, νd = 40.73. Glass: HOYA TAFD32. f = +57.2 mm.

L17 is the main positive relay element in GN. It helps carry the image-space convergence while leaving enough room for the final negative field flattener.

**L18 - Biconcave negative, double asphere.**
nd = 1.80610, νd = 40.73. Glass: HOYA M-NBFD130. f = -90.6 mm.

L18 is the final lens LN in the patent. Its negative power and two aspherical faces make it the final field-flattening and distortion-correction element. The patent's condition (3) is specifically a shape-factor constraint on this element.

## Glass Identification and Selection

The patent lists nd and νd but does not name glass catalogs. The data file therefore uses catalog-class identifications from public OHARA, HOYA, Schott, CDGM, and HIKARI cross-references. Exact vendor certainty is high for several HOYA FCD/FDS/TAFD entries and OHARA S-LAL21; other labels are given as class matches rather than exclusive sourcing claims.

| Element | nd | νd | Catalog-class identification | Role |
|---|---:|---:|---|---|
| L1 | 1.69350 | 53.18 | OHARA L-LAL13 / HOYA M-LAC130 class | Molded front asphere |
| L2 | 1.55200 | 70.70 | S-FPM5 / FCD500 class | Low-dispersion front negative |
| L3 | 1.59349 | 67.00 | HOYA PCD51 / HIKARI J-PSKH4 class | Low-dispersion G1 negative; condition (2) |
| L4 | 1.94594 | 17.98 | HOYA FDS18-W / CDGM H-ZF88 class | Dense-flint front achromatizer |
| L5 | 1.72916 | 54.67 | HOYA TAC8 / S-LAL18 class | G2 positive |
| L6 | 1.70300 | 52.38 | OHARA S-LAL21 | G3 focus group |
| L7 | 2.00100 | 29.13 | HOYA TAFD55 / S-LAH99 class | Extreme-index G4 positive |
| L8 | 1.85135 | 40.10 | HOYA M-TAFD305 | Molded interior asphere |
| L9 | 1.75520 | 27.53 | HOYA E-FD4L / CDGM H-ZF6 class | Dense-flint doublet member |
| L10 | 1.55032 | 75.50 | HOYA FCD705 | Low-dispersion doublet member |
| L11 | 1.48071 | 85.29 | HOYA FCD915 | Very-low-dispersion positive |
| L12 | 1.55032 | 75.50 | HOYA FCD705 | Low-dispersion doublet member |
| L13 | 1.84666 | 23.78 | HOYA FDS90-SG/FDS90-SGP / N-SF57HT / S-TIH53W class | Dense-flint doublet member |
| L14 | 1.59282 | 68.62 | HOYA FCD515 / FCD505 class | Low-dispersion positive meniscus |
| L15 | 1.61340 | 44.27 | HOYA LAF45 / OHARA S-NBM51 class | Flint partner in G6 |
| L16 | 1.98612 | 16.48 | HOYA FDS16-W | Extreme dense flint |
| L17 | 1.87070 | 40.73 | HOYA TAFD32 | High-index positive |
| L18 | 1.80610 | 40.73 | HOYA M-NBFD130 | Molded final asphere |

Sigma publishes a count of five SLD elements, not their locations. The most defensible candidates are L2, L10, L11, L12, and L14. L3 is also a low-dispersion phosphate crown, but it is weaker as a secondary-spectrum corrector and is tied directly to the patent's front-group Abbe condition. It is therefore not counted as one of the five SLD positions in this analysis.

## Focus Mechanism

Focus is by the single negative third group, L6/G3. The group moves objectward from infinity toward close focus. In the patent's published beta = 1/40 state, d10 decreases and d12 increases by the same amount; all other zoom gaps remain unchanged.

| Zoom position | Patent beta=1/40 G3 travel | Patent object-to-sensor distance |
|---|---:|---:|
| Wide | 0.775 mm | 1274.5 mm |
| Middle | 0.663 mm | 1523.5 mm |
| Tele | 0.564 mm | 1869.0 mm |

The production lens has a 0.30 m minimum focusing distance and reaches approximately 1:4 at the long end. The patent does not tabulate a 0.30 m prescription. The companion data file therefore extrapolates the same single-G3 focus motion to the official 0.30 m object-to-sensor distance. That extrapolation gives:

| Zoom position | Data-file G3 travel to 0.30 m | Computed magnification |
|---|---:|---:|
| Wide | 5.056 mm | 1:6.2 |
| Middle | 5.301 mm | 1:5.1 |
| Tele | 5.714 mm | 1:4.0 |

This is a modeling choice for the viewer, not a patent-published close-focus table. It is nevertheless consistent with the production specification at the tele end.

## Aspherical Surfaces

The aspherical surfaces are 1A and 2A on L1, 15A and 16A on L8, and 33A and 34A on L18. The patent uses the standard even-order sag form with a standard conic constant K, where K = 0 is a sphere:

$$z = \frac{(1/r)y^2}{1 + \sqrt{1 - (1+K)(y/r)^2}} + A_4 y^4 + A_6 y^6 + A_8 y^8 + A_{10} y^{10} + A_{12} y^{12} + A_{14} y^{14} + A_{16} y^{16} + A_{18} y^{18} + A_{20} y^{20}$$

The coefficients transcribed into the data file are:

| Surface | K | A4 | A6 | A8 | A10 | A12 | A14 | A16 | A18 | A20 |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| 1A | -0.42595 | 3.19947e-06 | 4.62317e-09 | -6.84866e-11 | 2.57540e-13 | -5.43557e-16 | 7.14031e-19 | -5.84993e-22 | 2.74723e-25 | -5.60150e-29 |
| 2A | 0.01244 | 2.50431e-06 | 4.40329e-09 | -6.90636e-11 | 1.99490e-13 | -2.59035e-16 | 1.13939e-19 | 1.47896e-23 | 0.00000e+00 | 0.00000e+00 |
| 15A | 0 | -2.95295e-06 | -1.06620e-09 | 6.01008e-12 | -6.93914e-15 | -1.84198e-17 | 4.86069e-20 | -3.15520e-23 | 0.00000e+00 | 0.00000e+00 |
| 16A | 0 | 1.50717e-06 | -1.33491e-09 | 6.00753e-12 | -7.78748e-15 | -7.70817e-18 | 2.17147e-20 | -1.06508e-23 | 0.00000e+00 | 0.00000e+00 |
| 33A | 0 | 5.31830e-06 | -2.40499e-08 | 3.63138e-13 | 8.24299e-14 | -1.23832e-16 | 0.00000e+00 | 0.00000e+00 | 0.00000e+00 | 0.00000e+00 |
| 34A | 0 | 1.39286e-05 | -1.66494e-08 | -5.42999e-11 | 4.53620e-13 | -1.57009e-15 | 2.86549e-18 | -1.95585e-21 | 0.00000e+00 | 0.00000e+00 |

At the verified semi-diameters used in the data file, the departures from the spherical base are:

| Surface | Semi-diameter used | Departure from base sphere |
|---|---:|---:|
| 1A | 37.0 | -0.6443 |
| 2A | 30.0 | +1.0626 |
| 15A | 24.0 | -0.9944 |
| 16A | 24.0 | +0.4587 |
| 33A | 21.0 | -0.5506 |
| 34A | 21.0 | +1.7416 |

The L1 pair carries the strongest front-end oblique-ray correction. L8 is a high-aperture interior corrector. L18 is the final field and distortion corrector and has the largest image-side departure in the set.

## Conditional Expressions

The patent gives five conditional expressions. The independently traced values for Example 1 are:

| Condition | Expression | Example 1 value | Result |
|---|---|---:|---|
| (1) | -1.50 < f1/ft < -0.70 | -1.054 | satisfied |
| (2) | νdG1_2 > 57.0 | 67.00 | satisfied |
| (3) | 0.0 < (RLN1 + RLN2)/(RLN1 - RLN2) < 1.0 | 0.449 | satisfied |
| (4) | -2.0 < f2/f3 < -1.0 | -1.595 | satisfied |
| (5) | 0.7 < (βMt/βMw)/(ft/fw) < 1.2 | 0.94 | satisfied |

For condition (5), the traced middle-group magnifications are βMw = -0.5917 and βMt = -0.8436. Dividing their ratio by the system zoom ratio gives 0.94.

## Petzval Field Curvature

The Petzval sum was recomputed surface by surface as:

$$P = \sum_i \frac{\phi_i}{n_i n_i'}$$

For Example 1, P = 1.5223e-3 mm^-1. The corresponding Petzval-radius magnitude is about 657 mm. Normalized by focal length, P x f is 0.0439 at the wide end and 0.0665 at the tele end. This is consistent with a fast zoom that uses high-index positive elements and a negative aspherical final lens to suppress field curvature across the full-frame image height.

## Verification Summary

The prescription was re-entered from the patent surface and variable-spacing tables and checked by independent paraxial ray trace.

| Quantity | Patent value | Recomputed value |
|---|---:|---:|
| Wide EFL | 28.84 mm | 28.84394 mm |
| Middle EFL | 35.06 mm | 35.05866 mm |
| Tele EFL | 43.66 mm | 43.66342 mm |
| Back focus | 24.4912 mm | 24.4919 / 24.4919 / 24.4920 mm |
| Total track | 168.66 mm | 168.6578 mm |
| G1 focal length | -46.04 mm | -46.0367 mm |
| G2 focal length | +92.09 mm | +92.0948 mm |
| G3 focal length | -57.73 mm | -57.7280 mm |
| G4 focal length | +32.98 mm | +32.9838 mm |
| G5 focal length | -80.77 mm | -80.7700 mm |
| G6 focal length | -74.48 mm | -74.4809 mm |
| G7 focal length | +40.70 mm | +40.7028 mm |

The data file does not include sensor cover glass, filters, mechanical parts, or any parent design. Semi-diameters are inferred because the patent omits clear-aperture data. The inferred semi-diameters pass the working project checks: sd/|R| below 0.90, element front/rear semi-diameter ratio no higher than 1.25, edge thickness at least 0.5 mm, and signed cross-gap sag intrusion no higher than 90% of the active gap at all zoom and focus endpoints.

## Design Heritage and Context

The patent positions this design against earlier large-aperture zooms that either used an F2.8-class negative-lead form or an F2-class positive-lead form. The Example 1 solution keeps the front and final groups fixed, assigns the principal zoom motion to the middle assembly, and focuses by a small internal negative group. This is a practical architecture for a constant-length, video-oriented, full-frame F1.8 zoom because it reduces front-mass movement and keeps the autofocus group small.

The optical tradeoff is clear. The lens achieves F1.8 over a full-frame image circle by accepting a short 1.5x zoom range and a high element count. It is not a broad-range general-purpose zoom; it is a tightly optimized fast wide-to-normal zoom.

## Sources

- CN 120386081 A, *Zoom Lens* (变焦镜头), Sigma Corporation; Hiromichi Ochiai. Numerical Example 1 surface data, aspherical data, variable-spacing data, group-focal-length table, conditional-expression table, and embodiment text.
- Sigma Corporation, *28-45mm F1.8 DG DN | Art* official product page. Production specifications: 18 elements / 15 groups, 5 SLD elements, 3 aspherical elements, full-frame coverage, angle of view, 0.30 m minimum focusing distance, 1:4 maximum magnification at 45 mm, inner zoom, and HLA autofocus.
- OHARA Optical Glass Catalog and low-Tg glass catalog. Used for nd/νd catalog-class matching, including S/L-prefix distinctions.
- HOYA Optical Glass cross-reference tables and glass data sheets. Used for FCD, FDS, TAFD, LAF, and molded-glass class matching.
- Schott, CDGM, and HIKARI public catalog cross-references. Used as secondary checks for dense-flint and phosphate-crown equivalents.
