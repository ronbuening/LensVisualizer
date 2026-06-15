# Fujifilm Fujinon XF33mm F1.4 R LM WR

## Patent Reference and Design Identification

**Patent:** US 2022/0276464 A1  
**Application Number:** 17/667,312  
**Filed:** February 8, 2022  
**Published:** September 1, 2022  
**Priority:** February 22, 2021 (JP 2021-026601)  
**Inventors:** Taiga Noda; Ryoko Tomioka  
**Applicant:** FUJIFILM Corporation  
**Title:** Imaging Lens and Imaging Apparatus  
**Embodiment analyzed:** Example 3 (Tables 9-12; FIG. 6; aberrations FIG. 7)

US 2022/0276464 A1 discloses a family of fast normal lenses built from a positive first group, an aperture stop, a positive second group, and a third group. In the preferred inner-focus form, the complete second group translates as the focus group while the first group, stop, and third group remain fixed relative to the image plane (¶¶0006, 0065-0066). Example 3 is the embodiment used here.

The production match rests on several convergent points:

1. **Element and group count.** Example 3 consists of six lenses in G1 (L11-L16), six lenses in G2 (L21-L26), and three lenses in G3 (L31-L33), for fifteen elements in ten air-spaced groups (¶0114). Fujifilm publishes the XF33mmF1.4 R LM WR as fifteen elements in ten groups.
2. **Aspherical count and placement.** Table 12 gives aspherical coefficients for surfaces 20 and 21 on L26 and surfaces 25 and 26 on L33. That is two double-sided aspherical elements, matching the manufacturer-published count of two aspherical elements.
3. **ED count and placement.** The low-dispersion, ED-class elements are L13 (nd 1.49700, νd 81.59), L23 (nd 1.59283, νd 68.63), and L24 (nd 1.49700, νd 81.59). Two of those three, L23 and L24, sit in the moving focus group. L26, also in the moving group, is the focus-group aspherical element. This matches Fujifilm's published special-element distribution for the focusing group: two ED elements and one aspherical element.
4. **Focal length, aperture, and field.** Example 3 gives f = 33.93 mm, Bf = 11.49 mm, FNo = 1.44, 2ω = 45.4°, and Ymax = 14.45 mm (Table 10). The marketed lens is a 33 mm F1.4 APS-C standard prime; the 33.93 mm and F1.44 patent values are the unrounded paraxial design values.
5. **Focus configuration.** Example 3 explicitly moves the complete second lens group toward the object during focusing, leaving G1, the aperture stop, and G3 stationary (¶0114). The production lens is a linear-motor inner-focus design.
6. **Timing.** The Japanese priority date, February 22, 2021, precedes the September 2021 product announcement by the expected interval for a production-adjacent filing.

Example 1 is also a 33 mm-class F1.4, 15-element candidate, but it does not reproduce the special-element placement as closely. Example 3 is therefore the stronger production match and is transcribed in the companion data file.

## Optical Architecture

Example 3 is a double-Gauss-derived APS-C standard prime with a positive-positive-negative group-power distribution. Independent paraxial reconstruction of the patent prescription gives an infinity EFL of 33.930 mm, with group focal lengths f1 = +74.31 mm, f2 = +44.79 mm, and f3 = -131.58 mm. The first group collects and shapes the F1.4 cone, the second group is the moving focus unit, and the fixed negative rear group flattens the field and controls the exit bundle.

G1 is a six-element positive collector. It begins with a negative front element, follows with a high-index positive element, then uses two cemented achromats: L13+L14 and L15+L16. The first cemented pair carries the first ED-class element; the second contributes much of G1's positive power.

G2 is the complete moving focus group. It has six elements in four cells: a positive high-index meniscus (L21), a negative-positive cemented pair (L22+L23), a positive-negative cemented pair (L24+L25), and the strong positive double-aspheric L26. The patent's Lp lens is L26, and its Ln lens is L25. This arrangement places the strongest positive focus-group element behind the strongest negative focus-group element, reducing the incident angle of off-axis chief rays while keeping the moving group compact (¶¶0079-0083).

G3 is a fixed rear corrector: near-afocal cemented doublet L31+L32 followed by negative double-aspheric L33. The surface-by-surface Petzval sum, computed as Σφ/(n·n'), is +0.002915 mm^-1, corresponding to a Petzval radius of about -343 mm and f·P = 0.099. This supports the patent's warning that conditional expression (4), f/f3, is tied directly to Petzval and field-curvature control (¶0077).

## Element-by-Element Analysis

Element focal lengths below are standalone thick-lens values in air. Cemented-cell focal lengths are computed from the complete cemented stack, not from a thin-lens sum. Radius signs follow the patent convention: a surface convex toward the object has positive radius, and a surface convex toward the image has negative radius (¶0099).

### First Group (G1) - Positive Collector

#### L11 - Biconcave negative

nd = 1.48749, νd = 70.42. Glass: FK5 / S-FSL5-class fluor crown. f = -45.82 mm.

The front lens is a biconcave negative element. Its image-side surface is concave toward the image side, satisfying the patent's stated preference for a negative front lens with a concave image-side surface to secure the required field angle (¶0072). The glass is a low-dispersion fluor crown, but it is not one of the three marketed ED elements.

#### L12 - Biconvex positive

nd = 1.83481, νd = 42.73. Glass: OHARA S-LAH55V. f = +52.03 mm.

L12 is a high-index positive collector immediately behind the front negative element. Its high refractive index keeps surface curvature moderate for the required power, limiting spherical aberration generated early in the system.

#### L13 + L14 - Cemented doublet, net negative

- **L13 - Positive ED meniscus:** nd = 1.49700, νd = 81.59. Glass: S-FPL51 / FCD1-class ED fluorophosphate. f = +89.21 mm.
- **L14 - Negative flint:** nd = 1.59270, νd = 35.31. Glass: OHARA S-FTM16. f = -45.02 mm.

This is the first front-group chromatic-correction cell. The fluorophosphate crown L13 is cemented to the moderate flint L14. The cell is net negative, f = -89.45 mm, and corrects longitudinal color while contributing diverging power. This follows the patent's preference for cemented positive-negative cells in the first group to correct longitudinal chromatic aberration (¶0071).

#### L15 + L16 - Cemented doublet, net positive

- **L15 - Biconvex positive:** nd = 1.81600, νd = 46.54. Glass: S-LAH59-class dense lanthanum flint. f = +33.77 mm.
- **L16 - Negative meniscus:** nd = 1.78470, νd = 26.27. Glass: dense flint, approximately 1.785/26.3 class. f = -133.37 mm.

This pair supplies much of G1's positive power. L15 should be described as a dense lanthanum flint, not a crown; its Abbe number is below 50. L16 is the high-dispersion cemented partner. The net cell focal length is +44.95 mm.

### Second Group (G2) - Moving Focus Unit

#### L21 - Positive meniscus, convex to object

nd = 1.95906, νd = 17.47. Glass: OHARA S-NPH3. f = +48.96 mm.

L21 is the object-side lens of the moving focus group. Its object-side convex surface satisfies the focus-group shape condition in ¶0068. It is the most dispersive glass in the design and provides a strong high-index/high-dispersion counterweight to the ED elements that follow.

#### L22 + L23 - Cemented doublet, net negative

- **L22 - Negative meniscus:** nd = 1.84666, νd = 23.79. Glass: OHARA S-TIH53. f = -23.90 mm.
- **L23 - Positive ED meniscus:** nd = 1.59283, νd = 68.63. Glass: FCD515 / FCD505-class ED. f = +37.06 mm.

L23 is the first ED element inside the focus group. Cementing it to the dense flint L22 helps stabilize chromatic aberration as the entire group translates, consistent with the patent's preference for positive-negative cemented cells in the focus group (¶0070). The cell is net negative, f = -53.85 mm.

#### L24 + L25 - Cemented doublet, net negative

- **L24 - Positive ED meniscus, convex to image:** nd = 1.49700, νd = 81.59. Glass: S-FPL51 / FCD1-class ED fluorophosphate. f = +86.50 mm.
- **L25 - Negative meniscus, convex to image:** nd = 1.74077, νd = 27.76. Glass: HOYA E-FD13 / H-ZF50 class. f = -22.92 mm.

This is the second chromatic-correction cell in the focus group. L25 is the patent's Ln lens: the strongest negative element in G2 and object-side of Lp (¶0082). Conditional expression (8), f2p/f2n = -0.888, is reproduced using L25 as f2n.

The air space between L23 and L24 is optically important. Surface 16, the rear surface of L23, has R = +22.1252 mm; surface 17, the front surface of L24, has R = -18.9247 mm. These two concave-toward-gap glass surfaces form the biconvex air lens used in conditional expression (11).

#### L26 - Positive double-aspheric Lp, convex to image

nd = 1.85343, νd = 40.55. Glass: unmatched 853/406 dense lanthanum-flint class. f = +20.36 mm.

L26 is the strongest positive lens in G2 and is therefore the patent's Lp lens. It has a nearly flat object-side surface and a strongly convex image-side surface, satisfying the patent's preferred Lp shape (¶0079). Both surfaces are aspheric. It is the only aspherical element in the moving focus group and is the element that makes the production special-element placement match especially strong.

### Third Group (G3) - Fixed Negative Rear Group

#### L31 + L32 - Cemented doublet, near-afocal

- **L31 - Biconvex positive:** nd = 1.90043, νd = 37.37. Glass: TAFD37-class dense lanthanum flint. f = +25.19 mm.
- **L32 - Biconcave negative:** nd = 1.67300, νd = 38.26. Glass: OHARA S-NBH52V. f = -25.31 mm.

The L31+L32 pair is almost afocal, with net f = +628.85 mm. It is not a major power element; it is a rear correction cell for lateral color, astigmatism, and field behavior. L31 should also be described as a dense lanthanum flint rather than a crown.

#### L33 - Negative double-aspheric meniscus, convex to image

nd = 1.68863, νd = 31.19. Glass: E-FD8 / SF8-class flint. f = -104.40 mm.

L33 supplies most of G3's negative power. Because it sits near the image plane where field ray separation is large, its two aspheric surfaces are positioned for field curvature, distortion, and astigmatism correction.

## Glass Identification and Selection

The patent gives refractive indices and Abbe numbers, not vendor names. Glass names below are catalog cross-checks by nd/νd against public manufacturer data. Exact or near-exact Japanese catalog matches are named; residual or non-unique matches are deliberately labeled by class or code rather than asserted as unique vendor identities.

| Element | nd | νd | Identification | Note |
|---|---:|---:|---|---|
| L11 | 1.48749 | 70.42 | FK5 / S-FSL5-class fluor crown | low-dispersion front crown, not counted as ED |
| L12 | 1.83481 | 42.73 | OHARA S-LAH55V | exact nd/νd match |
| L13 | 1.49700 | 81.59 | S-FPL51 / FCD1-class ED | ED element in G1 |
| L14 | 1.59270 | 35.31 | OHARA S-FTM16 | flint partner for L13 |
| L15 | 1.81600 | 46.54 | S-LAH59-class dense lanthanum flint | not a crown by Abbe-number convention |
| L16 | 1.78470 | 26.27 | dense flint 785/263 class | exact vendor not asserted |
| L21 | 1.95906 | 17.47 | OHARA S-NPH3 | very high-index short flint |
| L22 | 1.84666 | 23.79 | OHARA S-TIH53 | dense flint in focus group |
| L23 | 1.59283 | 68.63 | FCD515 / FCD505-class ED | ED element in focus group |
| L24 | 1.49700 | 81.59 | S-FPL51 / FCD1-class ED | ED element in focus group |
| L25 | 1.74077 | 27.76 | HOYA E-FD13 / H-ZF50 class | strongest negative G2 element |
| L26 | 1.85343 | 40.55 | unmatched dense lanthanum-flint class | near S-LAH89 / M-TAFD305 / D-ZLaF85, but not asserted |
| L31 | 1.90043 | 37.37 | TAFD37-class dense lanthanum flint | rear positive corrector |
| L32 | 1.67300 | 38.26 | OHARA S-NBH52V | rear negative corrector |
| L33 | 1.68863 | 31.19 | E-FD8 / SF8-class flint | rear aspheric field corrector |

The key chromatic strategy is not merely the presence of three ED elements. It is their distribution: one ED element in the fixed front group and two ED elements in the moving focus group, each paired against or near high-dispersion flints. The patent does not publish partial-dispersion values and does not claim formal apochromatic correction; the design is best described as a well-corrected ED achromat rather than as an apochromat.

## Focus Mechanism

The lens uses inner focus. The complete second lens group moves as a rigid unit toward the object from infinity to the close state, while G1, the aperture stop, and G3 remain stationary (¶0114). There is no separate floating group and no optical image-stabilization group in the patent embodiment.

| Focus state | DD[11] stop-to-G2 gap | DD[21] G2-to-G3 gap |
|---|---:|---:|
| Infinity | 7.0100 mm | 1.7100 mm |
| Patent close state, object distance 0.217 m | 1.7684 mm | 6.9516 mm |

The two gaps change by the same amount in opposite directions: 5.2416 mm. That confirms a single rigid translation of G2 toward the object.

The patent's 0.217 m close-focus distance is measured from the object to the first lens surface, as defined in ¶0061. Adding the physical patent distance from the first surface to the image plane, including the optical member PP, gives 217.0 mm + 83.378 mm = 300.378 mm. This directly reconciles the patent close state with Fujifilm's 0.30 m sensor-plane minimum-focus specification. A finite-conjugate paraxial trace at that close state gives magnification about -0.149x, matching the published 0.15x maximum magnification.

## Aspherical Surfaces

Four patent surfaces are aspheric: 20 and 21 on L26, and 25 and 26 on L33. The patent equation is stated in ¶¶0102-0108:

$$
Zd = \frac{C h^2}{1 + \sqrt{1 - KA \cdot C^2 h^2}} + \sum_m A_m h^m
$$

Here `KA = 1.0000` for all four aspheres. Under this patent convention, KA = 1 corresponds to a spherical base term, equivalent to the standard conic constant K = 0. The polynomial contains both even and odd powers. A3 is zero on each surface, but A5, A7, A9, and A11 are nonzero; the patent aspheres are therefore not directly representable by the renderer's even-order-only format.

| Coefficient | Surface 20 | Surface 21 | Surface 25 | Surface 26 |
|---|---:|---:|---:|---:|
| A4 | -3.6981763E-06 | 2.5810155E-05 | -5.1121685E-05 | -1.2432057E-04 |
| A5 | -2.1333775E-06 | -2.3012241E-06 | -1.7390876E-06 | 4.1913962E-05 |
| A6 | -4.0513278E-08 | -2.3831105E-07 | 3.0076039E-06 | -5.5201108E-06 |
| A7 | 6.9611877E-08 | 8.5819314E-08 | -3.3080366E-07 | 2.6959548E-07 |
| A8 | -3.6341727E-09 | -2.2444614E-09 | -7.1088611E-09 | 2.1637240E-08 |
| A9 | -6.6036497E-10 | -7.8049185E-10 | 2.5409968E-09 | -3.4446746E-09 |
| A10 | 5.2747098E-11 | 4.6261020E-11 | -5.9778978E-11 | 7.9300994E-11 |
| A11 | 1.9268032E-12 | 2.2243703E-12 | -5.5852603E-12 | 8.1281733E-12 |
| A12 | -1.9346120E-13 | -1.7496157E-13 | 2.0239815E-13 | -3.8055727E-13 |

For the data file, each patent asphere was refit to an even-order A4-A20 polynomial over the inferred semi-diameter. The maximum refit residuals are small enough to be negligible for visualization:

| Data surface | Inferred SD | Patent departure at SD | Even-order refit max residual |
|---|---:|---:|---:|
| 20A | 10.60 mm | -116.75 µm | 0.005 µm |
| 21A | 11.40 mm | +250.94 µm | 0.009 µm |
| 25A | 10.20 mm | -120.87 µm | 0.002 µm |
| 26A | 10.20 mm | +75.33 µm | 0.059 µm |

## Air Lenses

The strongest named air lens in Example 3 is between surfaces 16 and 17. Surface 16 is the rear surface of L23 with R = +22.1252 mm; surface 17 is the front surface of L24 with R = -18.9247 mm. Both glass surfaces are concave toward the intervening air gap, so the air space acts as a biconvex air lens. The patent identifies this as useful for correcting spherical aberration and suppressing the Petzval sum (¶0086).

Conditional expression (11) evaluates to:

$$
\frac{Raf + Rar}{Raf - Rar} = \frac{22.1252 + (-18.9247)}{22.1252 - (-18.9247)} = 0.078.
$$

This reproduces the Example 3 value in the patent's conditional-expression table.

## Conditional Expressions

The patent tabulates eleven conditional-expression values for Example 3. Independent paraxial reconstruction reproduces the values that depend only on first-order prescription data. Expression (10) depends on focus-group and third-group magnifications plus exit-pupil distance; it is therefore reported on the patent's authority rather than replaced by a paraxial proxy.

| # | Expression | Reconstructed | Patent Example 3 | Comment |
|---:|---|---:|---:|---|
| 1 | Bf / f | 0.339 | 0.339 | match |
| 2 | TTL x FNo / Ymax | 8.212 | 8.223 | hidden precision in the rounded patent FNo/TTL values |
| 3 | f / f2 | 0.757 | 0.757 | match |
| 4 | f / f3 | -0.258 | -0.258 | match |
| 5 | f1 / f2 | 1.659 | 1.659 | match |
| 6 | f2 / f2p | 2.200 | 2.200 | confirms Lp = L26 |
| 7 | StI / LpTI | 2.245 | 3.135 | patent reference-surface inconsistency |
| 8 | f2p / f2n | -0.888 | -0.888 | confirms Ln = L25 |
| 9 | StI / TTL | 0.655 | 0.655 | match |
| 10 | breathing expression | finite-ray quantity | 0.023 | patent value retained |
| 11 | (Raf + Rar) / (Raf - Rar) | 0.078 | 0.078 | confirms surfaces 16 and 17 |

Expression (7) is the one internal inconsistency. The definition in ¶0081 uses the image-side surface of Lp. Since Lp is L26, that is surface 21; using surface 21 gives StI/LpTI = 2.245. The patent's tabulated 3.135 is reproduced only if the reference is moved deeper to the L31/L32 cemented interface, surface 23. Because expressions (6), (8), and the element layout independently identify L26 as Lp, the prescription is not changed to force condition (7). The discrepancy is recorded as a patent tabulation/reference-surface inconsistency.

## Verification Summary

Independent y-nu paraxial ray tracing reproduces the Example 3 first-order quantities:

| Quantity | Reconstructed | Patent |
|---|---:|---:|
| EFL at infinity | 33.930 mm | 33.93 mm |
| Air-converted Bf | 11.487 mm | 11.49 mm |
| Patent FNo | 1.44 | 1.44 |
| Image height Ymax | 14.45 mm | 14.45 mm |
| G1 focal length | +74.31 mm | - |
| G2 focal length | +44.79 mm | - |
| G3 focal length | -131.58 mm | - |
| Physical first-surface-to-image track with PP | 83.378 mm | - |
| Close-state paraxial magnification | -0.149x | 0.15x production spec |

The data file follows the patent at its native scale. It omits the patent's generic sensor cover/filter plate and folds it into the final air-equivalent back focal gap, per project convention.

## Sources and References

- US 2022/0276464 A1, *Imaging Lens and Imaging Apparatus*, FUJIFILM Corporation, published September 1, 2022. Primary source for the prescription, focus-spacing table, aspheric coefficients, conditional expressions, and embodiment description.
- FUJIFILM official XF33mmF1.4 R LM WR specifications and launch literature. Source for marketed focal length, F-number, production element/group count, special-element count, linear-motor focus, weather resistance, 0.30 m minimum focus, 0.15x maximum magnification, 9 rounded diaphragm blades, 58 mm filter size, and 360 g weight.
- OHARA, HOYA, HIKARI, CDGM, and related optical-glass catalog data. Source for exact or class-level checks of the named glass identifications. Where no public catalog entry exactly matches the patent nd/νd pair, the analysis uses a class label or `Unmatched` rather than asserting a specific catalog glass.
