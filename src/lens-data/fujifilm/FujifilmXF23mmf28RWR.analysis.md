## Patent Reference and Design Identification

**Patent:** US 2026/0118637 A1
**Application Number:** 19/371,401
**Filed:** October 28, 2025
**Published:** April 30, 2026
**Priority:** Japanese Patent Application No. 2024-192290, filed October 31, 2024
**Inventor:** Taiga NODA
**Assignee:** FUJIFILM Corporation
**Title:** Imaging Lens and Imaging Apparatus
**Embodiment analyzed:** Example 4

The prescription transcribed here is Example 4 of US 2026/0118637 A1. The patent describes a compact fixed-focal-point imaging lens consisting, from the object side, of a first lens group G1, an aperture stop, and a second lens group G2. Example 4 is an eight-element design: two elements in G1, the stop, then six elements in G2. During focusing, the entire optical system moves integrally toward the object side.

Example 4 is the best-supported patent match for the production FUJINON XF23mmF2.8 R WR. The match rests on the convergence of element count, group count, aspherical count, focal length, aperture, focusing behavior, and launch timing. Fujifilm publishes the production lens as a 23 mm f/2.8 APS-C X-mount lens with 8 elements in 6 groups, including 2 aspherical elements, 11 aperture blades, 0.20 m minimum focus from the focal plane, 0.15x maximum magnification, 61.8 mm x 23 mm external dimensions, and 90 g mass. Patent Example 4 gives f = 22.66 mm, FNo. = 2.89, four aspherical surfaces on two elements, a short-range state at -0.16x, and full-unit focusing. The patent priority date precedes Fujifilm's June 2025 product announcement, which is consistent with pre-release patent filing practice.

The patent's full field for Example 4 is 2omega = 68.2 degrees at infinity. This corresponds to an image height of approximately 15.35 mm by the paraxial rectilinear relation `y = f tan(omega)`, which is modestly larger than the APS-C half diagonal. That excess is a normal design margin and is not a mismatch with the manufacturer's published 63.4 degree angle of view.

## Optical Architecture

Example 4 is a compact positive-positive wide-angle prime, formally arranged as G1(+)-Stop-G2(+). The formal patent grouping is not the same as the manufacturer's production group count. The patent groups are power groups, whereas the production count of 6 groups follows the air-separated physical subgroups: L11, L12, D1, D2, L25, and L26.

The first group, G1, consists of L11 and L12 and has a computed paraxial focal length of 43.73 mm. L11 is a biconcave negative aspherical element. L12 is a high-index biconvex positive element. Together they form a compact positive front group with `f/f1 = 0.5182`. The negative first element widens the entrance cone and helps keep the front diameter small; the following high-index positive lens restores convergence with moderate curvature.

The second group, G2, consists of six elements and has a computed paraxial focal length of 32.28 mm. Its structure is D1(L21-L22), D2(L23-L24), L25, and L26. D1 is a negative-positive cemented doublet with a net focal length of 32.31 mm. D2 is a positive-negative cemented doublet with an extremely weak net focal length of 1163.8 mm, so its principal role is correction rather than power. L25 is a negative meniscus immediately before the final element. L26 is a strong positive rear aspherical element with a nearly plano front surface and a convex image-side surface.

The patent specifically calls out the biconvex air lens formed by the rear surface of L24 and the front surface of L25. In Example 4, this is the 4.340 mm air space between surface 11 (`R = +14.8411 mm`) and surface 12 (`R = -6.7821 mm`). The conditional expression value `(RAr - RAf)/(RAr + RAf) = -2.6831` confirms that this air lens is not incidental; it is a designed field-curvature and astigmatism correction mechanism.

The independently traced infinity-focus first-order values are:

| Quantity | Value |
|---|---:|
| Effective focal length | 22.662 mm |
| Patent stated focal length | 22.66 mm |
| Back focal length from last surface | 11.087 mm |
| Total track, first surface to image plane | 35.637 mm |
| TL/f | 1.5727 |
| Bf/TL | 0.3111 |
| Petzval sum, surface-by-surface | +0.004389 mm^-1 |
| Petzval radius, reciprocal magnitude | 227.8 mm |

The lens should not be described as telephoto, since `TL/f > 1`. It also should not be described as retrofocus, since the back focal distance is far shorter than the focal length. It is better described as a compact non-retrofocus mirrorless wide-angle design with a short back focus and a positive rear group.

## Element-by-Element Analysis

### L11 - Biconcave Negative, two aspherical surfaces

`nd = 1.51625, νd = 64.05. Glass: BK7 / BSL7-class borosilicate crown, 516/641 code. f = -25.12 mm.`

L11 is the extreme object-side element and the most important front-end diameter-control element. Its biconcave shape gives negative power and helps widen the entrance cone before the positive L12. Both surfaces are aspherical, which is significant because a compact biconcave element at this location would otherwise contribute substantial higher-order spherical aberration, coma, and oblique astigmatism.

The glass is a low-index, high-Abbe crown. The patent does not name a vendor glass, so the identification should be read as a catalog-class match rather than a procurement claim. The pair `nd = 1.51625, νd = 64.05` is close to the BK7 / BSL7 optical region but is not asserted here as a specific melt.

### L12 - Biconvex Positive

`nd = 1.77250, νd = 49.60. Glass: S-LAH66-class lanthanum flint. f = +16.38 mm.`

L12 is the strongest positive lens in G1 and is the element used for the patent's `fL1p` condition. Its high index permits a relatively short focal length without requiring extremely tight radii. The front radius is `+15.6900 mm`, and the rear radius is `-60.9873 mm`, so the front surface carries most of the positive bending.

Although its Abbe number is near the conventional crown/flint boundary, `νd = 49.60` places it on the flint side by the usual `νd < 50` working definition. The useful distinction is not the family name alone but the combination of high index and moderate dispersion. In the front group it complements the low-index high-Abbe L11, giving `νd1 - νd1r = 14.45` for Conditional Expression (21).

### L21 - Biconcave Negative, first element of D1

`nd = 1.73037, νd = 32.23. Glass: 730322 HOYA NBFD32 dense barium flint, no Sellmeier catalog entry. f = -7.93 mm.`

L21 is the negative front member of the first rear cemented doublet. Its object-side surface, `R = -18.3310 mm`, is one of the two G2 object-side concave surfaces that satisfies Conditional Expression (1). The computed value is `f/Rf = -1.2362`.

The glass has high dispersion and nearly normal partial dispersion (`ΔPgF ≈ +0.0004` against the Schott normal line). Its role is conventional achromatization and aberration balancing against the very high-index positive L22 behind it.

### L22 - Biconvex Positive, second element of D1

`nd = 1.87070, νd = 40.73. Glass: TAFD32-class high-index dense flint. f = +6.95 mm.`

L22 is a very strong positive element. Cemented to L21, it forms D1, whose net in-air focal length is 32.31 mm. This doublet is therefore not weak; it is the main positive-power cemented component of G2.

The patent's general prose says that a high-Abbe positive element in the second group is preferable for chromatic correction, and also says that in a negative-positive cemented pair it is more preferable for the biconvex lens to have `νd > 70`. Example 4 does not use such a high-Abbe glass here. Instead it uses very high index and moderate dispersion, accepting smaller Abbe separation in exchange for compactness and curvature control.

### L23 - Biconvex Positive, first element of D2

`nd = 1.81600, νd = 46.55. Glass: S-LAH59 / TAF5 / ZLaF54-class lanthanum flint. f = +18.26 mm.`

L23 is the positive member of the second cemented doublet. Its standalone focal length is moderate, but the cemented pair D2 is nearly afocal because L24 cancels most of its power. This near-zero net power lets the doublet contribute chromatic and Petzval correction without materially altering the front-to-rear power distribution.

The glass has a modest negative partial-dispersion deviation (`ΔPgF ≈ -0.0085`). That sign complements the positive deviation of L24 and supports secondary-spectrum balancing even though the lens does not use ED or super-ED glass.

### L24 - Biconcave Negative, second element of D2

`nd = 1.64769, νd = 33.89. Glass: SF2 / E-FD2-class dense flint. f = -17.42 mm.`

L24 is the negative partner of L23 and completes D2. The computed net focal length of D2 is 1163.8 mm, so the doublet is effectively a field and chromatic corrector rather than a power group.

The object-side cemented surface of L24 is concave toward the object and appears in the patent's Conditional Expression (1) value list as `f/Rf = -0.4747`. That value is just outside the base range `-15 < f/Rf < -0.5`. This is not a failure of the embodiment because the condition requires two or more second-group lenses satisfying the expression; in Example 4, L21 and L25 satisfy it. The patent table lists all G2 lenses having object-side concave surfaces, not only the satisfying subset.

The rear surface of L24, `R = +14.8411 mm`, forms the object-side boundary of the biconvex air lens that the patent identifies as useful for suppressing the Petzval sum.

### L25 - Negative Meniscus, convex toward image side

`nd = 1.62004, νd = 36.33. Glass: F2 / E-F2-class flint. f = -14.00 mm.`

L25 is a negative meniscus placed directly before the final positive element. Its object-side surface has the strongest Conditional Expression (1) value in Example 4: `f/Rf = -3.3411`. The patent states that placing a negative meniscus with a convex image-side surface adjacent to the object side of the extreme image-side positive lens is advantageous for lateral chromatic aberration correction.

The 0.150 mm air gap between L25 and L26 is very small, giving `ddLe/f = 0.0066`. This close spacing makes the rear pair operate as a tightly coupled correction unit.

### L26 - Near plano-convex positive rear asphere

`nd = 1.80610, νd = 40.73. Glass: HOYA NBFD13 / M-NBFD130, 806407 code. f = +16.12 mm.`

L26 is the final glass element and the second aspherical element in the prescription. Its front surface is nearly plano in the paraxial region (`R = +299.7330 mm`), while its rear surface is strongly convex toward the image side (`R = -13.4793 mm`). The element is therefore responsible for much of the final convergence, field flattening, and chief-ray angle management before the image plane.

The patent states that it is preferable for the image-side surface of the extreme image-side lens to be aspherical and to include a region in which positive refractive power decreases as distance from the optical axis increases. Example 4 implements that feature on surface 15. The stored glass value matches the HOYA NBFD13 / M-NBFD130 806407 optical region, a glass-moldable high-index material; that supports, but does not by itself prove, a precision glass molding interpretation for L26.

## Glass Identification and Selection

The patent provides `nd`, `νd`, and `θg,F`, but it does not name vendor glass types. The glass names below are catalog-class identifications from the published optical constants, not a manufacturing bill-of-material claim. Where the match is exact or near-exact to a public catalog grade, the likely class is named. Where multiple catalogs contain equivalent grades, the class rather than a single supplier is the safer statement.

`ΔPgF` below is computed from the patent's `θg,F` values relative to the Schott normal line `PgF(normal) = 0.6438 - 0.001682νd`.

| Element | nd | νd | θg,F | ΔPgF | Catalog-class identification | Optical role |
|---|---:|---:|---:|---:|---|---|
| L11 | 1.51625 | 64.05 | 0.5362 | +0.0001 | BK7 / BSL7-class crown | Low-dispersion negative front asphere |
| L12 | 1.77250 | 49.60 | 0.5513 | -0.0091 | S-LAH66-class lanthanum flint | Strong positive G1 element |
| L21 | 1.73037 | 32.23 | 0.5900 | +0.0004 | 730322 HOYA NBFD32 dense barium flint | Negative D1 achromatizing partner |
| L22 | 1.87070 | 40.73 | 0.5683 | -0.0070 | TAFD32-class high-index dense flint | Positive D1 power member |
| L23 | 1.81600 | 46.55 | 0.5570 | -0.0085 | S-LAH59 / TAF5 / ZLaF54-class lanthanum flint | Positive D2 member |
| L24 | 1.64769 | 33.89 | 0.5939 | +0.0071 | SF2 / E-FD2-class dense flint | Negative D2 member |
| L25 | 1.62004 | 36.33 | 0.5886 | +0.0059 | F2 / E-F2-class flint | Rear negative meniscus |
| L26 | 1.80610 | 40.73 | 0.5694 | -0.0059 | HOYA NBFD13 / M-NBFD130, 806407 code | Final positive asphere |

No element has the high Abbe number or large positive anomalous partial dispersion associated with ED or super-ED correction. The chromatic correction strategy is therefore a conventional compact achromatizing strategy: high-index moderate-dispersion positives are paired with lower-Abbe flints, and the two cemented doublets use complementary partial-dispersion signs.

## Focus Mechanism

The patent states that, during focusing from infinity to the short-range object, the entire imaging lens moves integrally toward the object side. That means G1, the aperture stop, and G2 translate together as a unit. Fujifilm's production description of a full-group focusing system is consistent with this patent behavior.

| Parameter | Infinity | Short range, patent β = -0.16x |
|---|---:|---:|
| Focal length | 22.66 mm | 22.66 mm |
| Back focus / DD[15] | 11.087 mm | 14.713 mm |
| Focus extension | - | 3.626 mm |
| FNo. | 2.89 | 3.20 |
| 2omega | 68.2 deg | 62.4 deg |

Only DD[15] varies in the patent table. That is exactly the pattern expected when the lens cell moves as a unit relative to a fixed image plane: internal element spacings are fixed, and focus extension appears as additional back focal distance. The patent close state of -0.16x is close to the production maximum magnification of 0.15x. The production lens minimum focus distance is specified as 0.20 m from the focal plane.

## Aspherical Surfaces

Four aspherical surfaces are present: surfaces 1 and 2 on L11, and surfaces 14 and 15 on L26. The patent marks these surfaces with an asterisk in the prescription table.

The patent's aspherical surface equation uses `KA` in the base conic term. In the notation of the project renderer, `KA = 1` corresponds to the standard conic constant `K = 0`, that is, a spherical base conic. Example 4 has `KA = 1.0000000E+00` on all four aspherical surfaces.

A significant implementation issue is that the patent includes odd-order polynomial terms `A5`, `A7`, `A9`, and `A11`, while the project renderer supports even-order terms. The delivered `.data.ts` file therefore stores least-squares even-order `A4` through `A14` fits over the patent effective semi-diameters. The residuals are below 0.103 micrometers across the supported clear apertures, which is negligible for the SVG/first-order viewer use case but should still be documented because it is not a literal polynomial transcription.

Patent aspherical coefficients for Example 4:

| Coeff. | Surface 1 | Surface 2 | Surface 14 | Surface 15 |
|---|---:|---:|---:|---:|
| KA | 1.0000000E+00 | 1.0000000E+00 | 1.0000000E+00 | 1.0000000E+00 |
| A3 | 0.0000000E+00 | 0.0000000E+00 | 0.0000000E+00 | 0.0000000E+00 |
| A4 | +1.1226147E-03 | +1.1964522E-03 | -2.7443399E-05 | +9.1264375E-05 |
| A5 | -1.9157957E-04 | -1.6288717E-04 | +2.6885205E-05 | -1.5616014E-05 |
| A6 | -1.2766505E-05 | -3.4902243E-05 | -3.9800796E-06 | +4.6937102E-06 |
| A7 | +6.9813870E-06 | +1.5458763E-05 | +2.9305541E-07 | -2.9587550E-07 |
| A8 | -4.3618155E-07 | -1.1213070E-06 | +2.5921703E-08 | -4.2601946E-08 |
| A9 | -1.0137755E-07 | -4.1893051E-07 | -6.7361888E-09 | +8.8943653E-09 |
| A10 | +1.5171764E-08 | +7.1304503E-08 | +2.2504505E-10 | -1.4996174E-10 |
| A11 | +4.9434044E-10 | +3.5611475E-09 | +2.9713715E-11 | -4.5591662E-11 |
| A12 | -1.3773934E-10 | -9.1395772E-10 | -1.8870809E-12 | +1.9938901E-12 |

Even-order fit residuals used for the data file:

| Surface | Fit semi-diameter | Max residual | RMS residual |
|---|---:|---:|---:|
| 1A | 5.375 mm | 0.097 µm | 0.029 µm |
| 2A | 4.885 mm | 0.062 µm | 0.018 µm |
| 14A | 8.785 mm | 0.103 µm | 0.034 µm |
| 15A | 9.475 mm | 0.046 µm | 0.019 µm |

At the patent semi-diameters, the full patent polynomial departure terms are positive on all four surfaces: +0.270 mm on surface 1, +0.270 mm on surface 2, +0.350 mm on surface 14, and +1.268 mm on surface 15. Surface 15 is therefore the dominant aspherical correction surface in absolute departure.

## Conditional Expressions

The patent gives corresponding values for Conditional Expressions (1) through (22). The table below reproduces the Example 4 values as independently recomputed from the transcribed prescription unless otherwise noted.

| # | Expression | Example 4 value | Verification note |
|---:|---|---:|---|
| 1 | `f/Rf` for G2 object-side concave surfaces | -1.2362, -0.4747, -3.3411 | L21 and L25 satisfy the stated range; L24 is listed but is outside the base inequality. |
| 2 | `f/f1` | 0.5182 | G1 focal length = 43.73 mm. |
| 3 | `f/f2` | 0.7021 | G2 focal length = 32.28 mm. |
| 4 | `f2/f1` | 0.7381 | Matches patent table rounding. |
| 5 | `(R1r - R1f)/(R1r + R1f)` | 7.8545 | The prior draft's 8.8545 value was incorrect. |
| 6 | `f/R1f` | -0.9817 | Matches patent table rounding. |
| 7 | `f/fL1p` | 1.3832 | L12 is the strongest positive G1 lens. |
| 8 | `f/fL1n` | -0.9020 | L11 is the strongest negative G1 lens. |
| 9 | `(RAr - RAf)/(RAr + RAf)` | -2.6831 | L24-L25 air lens. |
| 10 | `d12/L1th` | 0.4000 | 0.200 / 0.500. |
| 11 | `f/fLe` | 1.4058 | L26 focal length = 16.12 mm. |
| 12 | `NdLe` | 1.80610 | L26 d-line refractive index. |
| 13 | `ddLe/f` | 0.0066 | 0.150 / 22.66. |
| 14 | `Bf/TL` | 0.3111 | Uses patent Bf = 11.087 mm and TL = 35.637 mm. |
| 15 | `TL/f` | 1.5727 | Matches patent table rounding. |
| 16 | `(RSr - RSf)/(RSr + RSf)` | -0.5378 | Surfaces adjacent to stop: S4 and S6. |
| 17 | `Dexp/f` | -1.4988 | Patent table value; independent paraxial stop-image trace gives -1.504 with rounded surface data. |
| 18 | `φap/φend` | 0.4026 | Stop ED / final-surface ED = 7.63 / 18.95. |
| 19 | `Nd1` | 1.51625 | L11 d-line refractive index. |
| 20 | `Nd1r` | 1.77250 | L12 d-line refractive index. |
| 21 | `νd1 - νd1r` | 14.45 | 64.05 - 49.60. |
| 22 | `dNp/dT` | 3.9 | Patent table value for the positive lens in the extreme object-side cemented doublet. |

## Verification Summary

The prescription was re-entered from the patent Example 4 table and checked with an independent paraxial ray trace using a reduced-angle ABCD formulation. The computed effective focal length is 22.662 mm, agreeing with the patent's 22.66 mm value to 0.002 mm. The computed back focal length is 11.087 mm, agreeing with the patent's 11.087 mm table value at the displayed precision.

Element focal lengths were computed as standalone in-air thick-lens values, not in-situ powers inside the full design. Cemented doublets were also traced as standalone cemented components. This distinction matters because L21 and L22 individually have strong powers, while their cemented combination D1 has a much weaker net focal length of 32.31 mm.

The Petzval sum was computed surface by surface as `φ/(n n')`, not from thin-lens element powers. The resulting Petzval sum is +0.004389 mm^-1, corresponding to a reciprocal radius magnitude of approximately 227.8 mm.

The `.data.ts` file excludes cover glass and sensor stack material. It uses the patent's infinity BFD as the base last gap and the patent's short-range BFD as the close-focus value for the sole variable spacing.

Surface semi-diameters in the `.data.ts` file use one half of the patent-listed `ED` values, with one documented renderer exception: surface 12 is set to 5.520 mm instead of the patent effective semi-diameter of 5.240 mm. This does not change the paraxial prescription, focal length, BFD, Petzval sum, or conditional-expression checks; it only prevents the L25 drawing span from violating the project element-diameter ratio rule while remaining larger than the patent ray-footprint diameter.

## Design Context

The XF23mmF2.8 R WR occupies the compact pancake position in Fujifilm's X-mount 23 mm family. Optically, the design favors short axial length and small mass over speed. The f/2.8 aperture, unit-focus mechanism, two formal patent groups, and limited use of special materials all point to a restrained mechanical and optical target: a very compact APS-C normal-wide lens with enough aspherical correction to maintain field performance.

The design should be distinguished from the faster XF23mmF2 R WR and XF23mmF1.4 R LM WR. It is not a reduced-speed derivative of those designs; its patent structure is a separate compact positive-positive architecture with full-unit focusing and a short back focus.

## Sources

- US 2026/0118637 A1, *Imaging Lens and Imaging Apparatus*, FUJIFILM Corporation, Example 4.
- USPTO patent PDF for US 2026/0118637 A1, drawing sheets and cover bibliographic data.
- Fujifilm official product page and specifications page for FUJINON XF23mmF2.8 R WR.
- Fujifilm North America news release, June 12, 2025, announcing FUJINON XF23mmF2.8 R WR.
- HOYA optical glass datasheets and catalog entries for NBFD32, TAFD32-class, and NBFD13 / M-NBFD130 optical regions.
- OHARA S-LAH catalog listings for S-LAH66 and S-LAH59-class glass regions.
- Schott, HOYA, OHARA, CDGM/NHG comparative catalog data for F2/SF2 and LAH/ZLaF/TAF equivalent optical regions.
