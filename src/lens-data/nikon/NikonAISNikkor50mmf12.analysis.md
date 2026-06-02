# Nikon AI-S Nikkor 50mm f/1.2 — Optical Analysis

## Patent Reference and Design Identification

**Patent:** US 4,621,909
**Application number:** US 06/485,481
**Filed:** April 15, 1983; priority date April 26, 1982 (Japan)
**Granted:** November 11, 1986
**Inventor:** Yoshinari Hamanishi
**Assignee:** Nippon Kogaku K.K. (Nikon)
**Title:** Photographic Lens of a Great Aperture Ratio
**Embodiment analyzed:** Third Embodiment / Table 3 / Claim 6, f = 51.6 mm, F-number 1.2, 2ω = 46.4°

US 4,621,909 discloses three numerical embodiments of a fast standard lens built from three positive units around a modified Gauss base. The first two examples are F 1.4 designs; the third example is the F 1.2 design. The analysis and data file transcribe the third embodiment because it is the only F 1.2 example and because its 51.6 mm design focal length, 46.4° field, all-spherical seven-element layout, and six air-spaced groups coincide with the production Nikon 50 mm f/1.2 specification.

The identification with the production Nikon AI/AI-S Nikkor 50mm f/1.2 is convergent, not one-to-one proof of an exact production prescription. Nikon's own historical account places the AI-Nikkor 50mm f/1.2 debut in 1978 and describes the normal-lens problem that led Nikon from 55/58 mm fast normals to a true 50 mm F 1.2 lens. Nikon also notes that, in this speed class, seven elements were required for good aberration correction in the double-Gauss family. The patent followed later and is assigned to Nippon Kogaku; its Example 3 is a 51.6 mm F 1.2 seven-element normal lens with a 46.4° field.

The production hard specifications used here are Nikon's: 50 mm nominal focal length, f/1.2 maximum aperture, f/16 minimum aperture, 7 elements in 6 groups, 46° angle of view, 52 mm filter thread, 0.5 m closest focus, and 1:7.9 maximum reproduction. The patent's close-focus numerical state is different: it stops at d0 = 514.966 mm from the first surface and m = −0.1. The data file therefore represents the patent embodiment's floating spacing table; it should not be read as proof that the production AI-S lens used that floating mechanism.

Related Nikon lenses are excluded. The Noct-Nikkor 58mm f/1.2 is a different 58 mm design and uses an aspherical first element; Nikon explicitly contrasts it with the current AI Nikkor 50mm f/1.2S as another large-aperture Gauss-type standard lens. The Nikkor Z 50mm f/1.2 S is a modern mirrorless design with a much larger element count and aspherical/ED elements, and is outside the patent family.

## Optical Architecture

The transcribed example is an all-spherical, seven-element, six-group modified double-Gauss standard lens. The patent divides the lens into three positive-power focusing units:

- **G1, L1–L3, f1 = 198.631 mm.** Three air-spaced front singlets: a positive meniscus L1 convex to the object, a stronger positive meniscus L2 convex to the object, and a negative meniscus L3 convex to the object. This group gives modest positive front power while forming the steep central Gauss air space ahead of the stop.
- **G2, L4–L6, f2 = 81.922 mm.** A cemented negative-positive doublet followed by a positive meniscus. The doublet is the main rear achromatizing pair; L6 supplies much of the positive rear-group power.
- **G3, L7, f3 = 93.198 mm in the patent table.** A single biconvex positive singlet behind G2. The patent states that this rear unit is preferably a single biconvex positive lens and that its refractive index should be at least 1.6 to prevent the Petzval sum from becoming excessively positive.

The aperture stop lies in the wide central air space and is specified as 8.7 mm in front of surface r7. In the data file this is modeled as a physical `STO` surface: the r6-to-r7 spacing D1 is split into an 8.9 mm pre-stop segment and an 8.7 mm stop-to-r7 segment at infinity. During the patent close-focus state, the stop-to-r7 spacing is held at the specified 8.7 mm, and the pre-stop segment increases to preserve the tabulated D1 = 18.251 mm.

A paraxial y–ν ray trace of the Table 3 prescription gives EFL = 51.614 mm and Bf = 38.052 mm at infinity. The small difference from the patent's Bf = 38.049 mm is roundoff-level. The power sequence is therefore positive-positive-positive by patent unit, but the lens reads optically as a high-speed double-Gauss normal with an added rear positive singlet to maintain back focus and field correction.

## Element-by-Element Analysis

The surface sign convention is the patent convention used in the data file: positive radius means the center of curvature lies to the image side. Element focal lengths below are standalone thick-lens-in-air values recomputed from the transcribed radii, thicknesses, and d-line indices.

### L1 — Positive Meniscus, convex to object

nd = 1.79668, νd = 45.5. Glass: unmatched Nikon/Hikari lanthanum glass, closest J-LASF017 / TAF2 class. f = +78.0 mm.

L1 has r1 = +47.070 mm and r2 = +184.282 mm, making it a shallow positive meniscus with its sharper curvature facing the object. The patent describes this form as advantageous for aberration correction in a large-aperture lens. Its high index reduces curvature burden elsewhere and contributes to the low Petzval sum.

### L2 — Positive Meniscus, convex to object

nd = 1.79631, νd = 41.0. Glass: unmatched lanthanum dense flint; closest public class is J-LASF02 / S-LAH52. f = +79.9 mm.

L2 has r3 = +29.920 mm and r4 = +50.500 mm. It is the stronger positive member of the front unit and supplies most of G1's converging action. Its νd = 41.0 puts it on the dense-flint side of the lanthanum family, so it is not a crown in the ordinary Abbe-number sense.

The Table 3 value r4 = +50.500 mm is retained. Claim 6 prints r4 = +50.000 mm, but that value does not reproduce the patent's group focal length or back focus. The 50.500 mm value gives f1 = 198.631 mm and Bf ≈ 38.052 mm; the 50.000 mm value shifts f1 to about 204.1 mm and Bf to about 38.32 mm.

### L3 — Negative Meniscus, convex to object

nd = 1.71736, νd = 29.5. Glass: J-SF1 / E-FD1L class. f = −35.3 mm.

L3 has r5 = +60.500 mm and r6 = +17.728 mm. The steep r6 surface faces the stop and creates the strong diverging meniscus action characteristic of a fast Gauss derivative. Its high dispersion balances the positive lanthanum glasses in the front unit and helps keep axial and lateral color under control.

### L4 — Negative lens, concave to object [cemented to L5]

nd = 1.75520, νd = 27.6. Glass: J-SF4 / N-SF4 class dense flint. f = −22.8 mm.

L4 has r7 = −17.500 mm and r8 = +1000.000 mm. The strongly concave object-side surface matches the patent's text: the second unit begins with a negative lens whose sharper concave surface faces the object. L4 is the high-dispersion member of the cemented rear doublet.

### L5 — Positive lens, convex to image [cemented to L4]

nd = 1.77279, νd = 49.4. Glass: J-LASF016 / TAF1 class lanthanum crown-flint boundary glass. f = +35.4 mm.

L5 shares the weakly curved cemented interface r8 = +1000.000 mm and exits at r9 = −28.000 mm. The patent describes it as a positive cemented lens with its sharper surface facing the image. As a standalone element it is strongly positive, but the L4+L5 cemented pair remains net negative at approximately −111 mm.

The r8 interface is nearly flat, so color correction is not carried by a strong cemented-surface bend. The doublet works mainly through the outer powers and the νd split between L4 and L5.

### L6 — Positive Meniscus, convex to image

nd = 1.77279, νd = 49.4. Glass: J-LASF016 / TAF1 class. f = +60.6 mm.

L6 has r10 = −142.000 mm and r11 = −35.940 mm. Both radii are negative, but the rear surface is much stronger; the meniscus is therefore convex to the image side. It collects the diverging beam behind the cemented doublet and provides the main positive action of G2.

### L7 — Biconvex Positive

nd = 1.74430, νd = 49.5. Glass: S-LAM60 / J-LAF010 / NBF1 class. f = +93.2 mm.

L7 has r12 = +92.000 mm and r13 = −277.852 mm. It is the single positive rear unit specified by the patent. Its high index satisfies the patent's nd ≥ 1.6 requirement and allows the rear singlet to preserve back focus without making the Petzval sum excessively positive.

## Glass Identification and Selection

The patent gives only nd and νd, not manufacturer glass names or partial-dispersion data. The identifications below are therefore catalog-class assignments unless the match is exact. Hikari/Nikon glass is preferred where a public match exists because Hikari is Nikon's optical-glass line; HOYA's cross-reference is used to map equivalent codes across Hoya, Schott, Ohara, Hikari, Sumita, and CDGM. HOYA explicitly cautions that cross-reference equivalence does not mean identical glass composition.

| Element | Patent nd / νd | Catalog-class identification    | Match quality                                           |
| ------- | -------------: | ------------------------------- | ------------------------------------------------------- |
| L1      | 1.79668 / 45.5 | J-LASF017 / TAF2 class          | soft; Hikari J-LASF017 is 1.79500 / 45.31               |
| L2      | 1.79631 / 41.0 | J-LASF02 / S-LAH52 class        | soft; Hikari J-LASF02 is 1.79952 / 42.09                |
| L3      | 1.71736 / 29.5 | J-SF1 / E-FD1L class            | strong; Hikari J-SF1 is 1.71736 / 29.57                 |
| L4      | 1.75520 / 27.6 | J-SF4 / N-SF4 class             | strong; Hikari J-SF4 is 1.75520 / 27.57                 |
| L5      | 1.77279 / 49.4 | J-LASF016 / TAF1 class          | strong class match; Hikari J-LASF016 is 1.77250 / 49.62 |
| L6      | 1.77279 / 49.4 | J-LASF016 / TAF1 class          | same as L5                                              |
| L7      | 1.74430 / 49.5 | S-LAM60 / J-LAF010 / NBF1 class | soft; public class is about 1.743 / 49.3                |

The design relies heavily on high-index lanthanum glasses rather than anomalous partial-dispersion glass. Five of seven elements have nd above 1.74. The two dense flints, L3 and L4, supply the main high-dispersion negative powers, while L5/L6 and L7 hold the positive rear powers at high index. The computed surface-by-surface Petzval sum is P = 0.002615 mm−1, corresponding to a Petzval radius of about 382 mm and P·f ≈ 0.135. That value supports the patent's explicit warning that a low-index rear singlet would drive the Petzval sum too positive and harm astigmatism and coma correction.

No apochromatic claim is made. The patent has no ED, fluorite, anomalous partial-dispersion, or line-index disclosure beyond nd and νd; the chromatic correction is that of a fast achromatized Gauss-type normal lens.

## Focus Mechanism

The patent's central invention is a three-unit floating short-distance correction. From infinity to the closest published state, all three positive units move toward the object side relative to the image plane, but by different amounts. The amount of G1 movement is greater than G2 movement, and G2 movement is greater than G3 movement. The patent explains the rationale in coma terms: increasing the G1–G2 spacing introduces inward coma in the upper rim-ray group, while increasing the G2–G3 spacing introduces inward coma in the lower rim-ray group. The two effects offset the outward coma that would otherwise increase in a whole-cell-focus large-aperture lens.

| Gap                      |  Infinity | Patent close state |    Change |
| ------------------------ | --------: | -----------------: | --------: |
| D1, L3 to L4 total space | 17.600 mm |          18.251 mm | +0.651 mm |
| D2, L6 to L7 space       |  0.516 mm |           2.003 mm | +1.487 mm |
| Bf, L7 to image plane    | 38.049 mm |          42.756 mm | +4.707 mm |

The resulting focus ratios are α = ΔBf/ΔD1 = 7.230, βfocus = ΔD2/ΔD1 = 2.284, and γ = ΔBf/ΔD2 = 3.165. The published close state is d0 = 514.966 mm from the first surface and transverse magnification βimage = −0.1. A full object-to-image paraxial matrix using the close spacings gives m = −0.1003, so the table is internally consistent.

This mechanism is a patent embodiment, not a confirmed production mechanism for the AI-S lens. Nikon's production specification gives 0.5 m closest focus and 1:7.9 maximum reproduction. The data file therefore sets `closeFocusM` to about 0.614 m for the patent close state represented by the variable spacings, while the analysis records Nikon's production specification separately.

## Conditional Expressions

The patent gives two primary focus-kinematic conditions, one desirable γ condition, and three static power-distribution conditions. Recomputed values are from the transcribed Table 3 prescription.

| Condition        |       Patent range |         Patent Example 3 | Recomputed | Result    |
| ---------------- | -----------------: | -----------------------: | ---------: | --------- |
| α = ΔBf/ΔD1      |      1.5 < α < 9.0 |                     7.23 |      7.230 | satisfied |
| βfocus = ΔD2/ΔD1 |      0.2 < β < 3.0 |                     2.28 |      2.284 | satisfied |
| γ = ΔBf/ΔD2      |      2.5 < γ < 4.5 | not separately tabulated |      3.165 | satisfied |
| f1/f             | 2.40 < f1/f < 4.50 |                    3.849 |      3.849 | satisfied |
| f2/f             | 1.41 < f2/f < 1.80 |                    1.588 |      1.587 | satisfied |
| f3/f             |  1.70 < f3/f < 3.0 |                    1.806 |      1.806 | satisfied |

The β symbol is overloaded in the patent: it is used both for image magnification in the example table and for the focus ratio ΔD2/ΔD1 in the conditions. This analysis distinguishes them as βimage and βfocus where ambiguity matters.

## Aberration Correction and Design Philosophy

The patent is framed as a reconciliation of two earlier short-distance-correction strategies. One strategy enlarges the air space before the rearmost positive component and is effective for the lower-side principal-ray coma group but weak for the upper-side group. Another enlarges the stop space and corrects lateral color fluctuation well, but is weaker for the opposite coma group. US 4,621,909 combines both degrees of freedom by varying D1 and D2 together.

For the static lens, the architecture remains a conventional fast Gauss derivative: strong front positive power, a steep negative meniscus ahead of the stop, a rear negative-positive cemented pair, and a rear positive singlet. Nikon's own historical discussion of its fast normal lenses describes this class as a Gauss/double-Gauss type and notes that f/1.4 to f/1.2 normal lenses required seven elements for satisfactory correction.

The patent's Figs. 4A and 4B give the aberration plots for the third embodiment at infinity and closest focus. They show the intended outcome: spherical aberration and astigmatism remain controlled across the two conjugates, and lateral chromatic aberration is kept from shifting severely between infinity and close focus. The curves do not make this an apochromat; they indicate a well-balanced large-aperture achromatized standard lens.

## Verification Summary

All numerical values below were recomputed from the transcribed Table 3 prescription using an independent paraxial y–ν ray trace. Petzval was computed surface-by-surface as Σφ/(n·n′), not from thin-lens element approximations.

| Quantity                     |                   Recomputed |        Patent / source value | Comment                        |
| ---------------------------- | ---------------------------: | ---------------------------: | ------------------------------ |
| EFL at infinity              |                    51.614 mm |                      51.6 mm | rounding match                 |
| Bf at infinity               |                    38.052 mm |                    38.049 mm | rounding-level difference      |
| f1 / f2 / f3                 | 198.631 / 81.922 / 93.214 mm | 198.631 / 81.922 / 93.198 mm | f3 difference from rounding    |
| α / βfocus / γ               |        7.230 / 2.284 / 3.165 |              7.23 / 2.28 / — | matches tabulated spacings     |
| βimage at patent close state |                      −0.1003 |                         −0.1 | object-to-image matrix check   |
| Petzval P                    |                0.002615 mm−1 |                not tabulated | surface-by-surface computation |
| Petzval radius               |                     382.4 mm |                not tabulated | 1/P                            |
| Total track, infinity        |                    92.165 mm |                not tabulated | first surface to image plane   |
| Total track, patent close    |                    99.010 mm |                not tabulated | with D1, D2, Bf close values   |

Semi-diameters were not patent-published. The data file's SDs were estimated with four checks: the f/1.2 entrance-pupil geometry, a 52 mm filter-thread ceiling on the front group, minimum edge thickness, and signed cross-gap sag intrusion. The physical stop semi-diameter implied by the paraxial entrance pupil is approximately 14.54 mm; the data file uses 14.50 mm to preserve clearance against the highly curved r7 surface while maintaining the nominal F 1.2 aperture.

## Sources and References

- US 4,621,909, Hamanishi / Nippon Kogaku K.K., _Photographic Lens of a Great Aperture Ratio_. Primary source for Table 3, the focus spacings, the conditional expressions, and Figs. 4A–4B.
- Nikon, _NIKKOR — The Thousand and One Nights_, No. 49. Historical source for Nikon's 50 mm F 1.2 normal-lens development and the 1978 AI-Nikkor 50mm f/1.2 debut.
- Nikon, _NIKKOR — The Thousand and One Nights_, No. 16. Context source comparing the Noct-Nikkor 58mm f/1.2 with the AI Nikkor 50mm f/1.2S as large-aperture Gauss-type standard lenses.
- Nikon official product/brochure specifications for the AI Nikkor 50mm f/1.2S: 7 elements / 6 groups, 46° angle of view, 0.5 m closest focus, 1:7.9 maximum reproduction, 52 mm filter.
- Nikon / Hikari optical-glass catalog pages for J-series SF and LASF glasses, and HOYA's official cross-reference table for Hoya / Schott / Ohara / Hikari / Sumita / CDGM glass-code equivalents.
