# Sigma 17-40mm F1.8 DC | Art — Optical Analysis

## Patent Reference and Design Identification

**Patent:** CN 121454749 A, 变倍光学系统 / “Zoom Optical System”  
**Application Number:** 202411784592.0  
**Filed:** 2024-12-06  
**Priority:** JP 2024-126493, 2024-08-02  
**Published:** 2026-02-03  
**Inventor:** Shioda Ryo (盐田了)  
**Applicant:** Sigma Corporation (株式会社适马)  
**Classification:** G02B 15/14, G02B 15/16, G02B 13/18  
**Embodiment analyzed:** Numerical Example 1 (实施例1 / 数值实施例1; Figs. 1–7)

This prescription transcribes Numerical Example 1 of CN 121454749 A. The production identification is the Sigma 17-40mm F1.8 DC | Art. The match is not based on a single rounded focal length; it rests on the full pattern of the patent example and the manufacturer’s specification set.

1. **Element and group count.** The Example 1 surface prescription gives seventeen glass elements in eleven air-separated component groups; §0090–§0097 describe those same elements within seven moving optical groups. Sigma publishes 17 elements in 11 groups.
2. **Special-element count.** The patent example has four aspherical elements, on surfaces 1, 3, 4, 23, 24, and 27. Sigma publishes four SLD and four aspherical elements, but the patent does not assign Sigma’s SLD label by position. The prescription contains five low-dispersion candidates—L2, L3, L5, L12, and L13—so the exact four-element SLD mapping remains inferential.
3. **Focal length and zoom ratio.** The patent gives f = 17.55 / 26.06 / 38.70 mm and zoom ratio 2.21 at wide, middle, and tele (§0100), matching the marketed 17–40 mm class after normal production rounding.
4. **Aperture.** The patent tabulates Fno = 1.86 at all three zoom positions. The marketed maximum aperture is F1.8.
5. **Image circle.** The patent gives image height Y = 14.20 mm, for a 28.4 mm image-circle diameter, consistent with Sigma’s APS-C/DC format.
6. **Constant overall length.** The patent gives LT = 133.60 mm at all three zoom positions. This matches the design signature of the production lens’s inner-zoom construction.
7. **Focus mechanism.** The patent states that G6 moves toward the image side for close focusing (§0096). The production lens is specified as internally focusing and driven by Sigma’s HLA actuator.

The patent includes seven numerical examples. Example 4 is a larger-image-height full-frame design; Example 5 has the wrong aperture class; Example 7 has the wrong focal-length range; Example 3 and Example 6 have different element/group layouts. Example 2 remains a near-twin: it has the same 17.55–38.70 mm range, F1.86 aperture, Y = 14.20 mm image height, constant 133.60 mm track, and seventeen-element/eleven-group construction. Example 1 is therefore the selected embodiment, but Example 2 cannot be excluded from manufacturer data alone.

Manufacturer specifications govern external product metadata. The data file therefore records the marketed focal length as 17–40 mm, marketed aperture as F1.8, minimum focus distance as 0.28 m, maximum magnification as 1:4.8 at 40 mm, and the production mounts as L-Mount, Canon RF, Fujifilm X, and Sony E. The patent prescription itself supplies the optical surface data and the infinity-focus zoom positions.

## Optical Architecture

The system is a negative-lead constant-length zoom. The claimed sequence is G1(−) · G2(+) · G3(+) · GR, where GR is the image-side group (§0010). In Numerical Example 1, GR resolves into four optical units: G4(−), G5(+), G6(−), and G7(+). The full first-order power sequence from object to image is therefore negative–positive–positive–negative–positive–negative–positive.

G1 is a fixed negative front group. It contains two molded/aspherical negative menisci followed by a cemented doublet. Holding this large-diameter front group stationary is central to the patent’s mechanical argument: the patent criticizes prior constant-length or moving-front zoom constructions for mid-zoom field curvature, front-group mass, and sealing/rigidity issues (§0016–§0018, §0044–§0045).

G2 and G3 are positive cemented doublets and serve as the principal variator pair. The important kinematic feature is not merely that G1–G2 collapses as the lens zooms. It is that the G2–G3 interval is smallest at both ends and largest near the middle zoom state. In Example 1, D12 falls from 24.2001 mm to 1.3704 mm, while D23 goes from 1.0967 mm to 4.7167 mm and back to 1.0966 mm. This is the non-monotonic spacing condition that the patent uses to suppress mid-zoom aberration excursions while preserving constant length.

The stop sits between G3 and G4 and moves with G4 during zooming (§0090). Behind it, G4 supplies negative power, G5 is the strong positive master group, G6 is the single-element internal focusing group, and G7 is a weak rear positive corrector whose isolated focal length is about +402 mm. The back focal distance increases from 16.6727 mm at wide angle to 21.1723 mm at telephoto.

## Element-by-Element Analysis

Element focal lengths below are standalone thick-lens values in air. Group focal lengths are isolated-unit paraxial values. The patent gives d-line refractive index, d-line Abbe number, and θgF partial-dispersion ratio for each glass (§0079–§0085). ΔPgF is calculated as θgF − (0.648285 − 0.00180123 · νd), matching the patent’s definition for conditions 8 and 9 (§0050).

### G1 — Fixed front negative group

**L1 — Negative meniscus, convex to object; aspherical front.**  
nd = 1.59271, νd = 66.97. Glass: MP-PCD51-70 / PCD51-class Hoya precision-mold preform. f = −53.05 mm.

L1 is the large front asphere. The front radius is very shallow at +250.0000 mm, while the rear radius is +27.8483 mm, so the element is a strong negative meniscus whose bending controls the entry geometry of the wide-angle chief rays. The aspherical front face is placed at the largest available clear aperture, where it is most effective against wide-end distortion and field curvature.

**L2 — Negative meniscus, convex to object; both faces aspherical.**  
nd = 1.55352, νd = 71.72, ΔPgF = +0.02070. Glass: MP-FCD500-20 Hoya precision-mold ED preform. f = −193.43 mm.

L2 is a low-power but high-leverage molded ED asphere. Both surfaces are polynomial aspheres, so this element contributes off-axis correction without adding strong paraxial power. Its high Abbe number and positive ΔPgF make it chromatically benign. Because Sigma does not publish the SLD positions, L2 should be treated as a low-dispersion molded asphere and a possible SLD candidate, not as a definitively excluded element.

**L3 / L4 — Cemented doublet, biconcave + biconvex.**

- **L3:** nd = 1.48749, νd = 70.44, ΔPgF = +0.00919. Glass: Hoya FC5. f = −50.62 mm.
- **L4:** nd = 1.85033, νd = 42.70, ΔPgF = −0.00677. Glass: Hoya TAFD34. f = +51.28 mm.

This doublet closes G1. In isolation the pair is almost afocal, so its primary role is chromatic and Petzval balancing rather than gross convergence. The large index step at the cemented interface helps control field curvature while the ED-like negative member and high-index positive member satisfy the G1 index-difference condition. The computed condition-7 value is 0.306.

### G2 — First positive variator

**L5 / L6 — Cemented doublet, biconvex + negative meniscus.**

- **L5:** nd = 1.55032, νd = 75.50, ΔPgF = +0.02781. Glass: Hoya FCD705. f = +47.11 mm.
- **L6:** nd = 1.77047, νd = 29.74, ΔPgF = +0.00038. Glass: Hoya NBFD29. f = −109.50 mm.

G2 has isolated focal length +81.16 mm. L5 is the strongest anomalous low-dispersion positive element in the front half of the design and is one of the strongest candidates for Sigma’s SLD count. Condition 8 explicitly requires the mean positive-element ΔPgF in G2 to exceed the mean negative-element ΔPgF by more than 0.010; this doublet gives 0.0274, so the pair is deliberately tuned for secondary-spectrum correction at the tele end.

### G3 — Second positive variator

**L7 / L8 — Cemented doublet, negative meniscus + biconvex.**

- **L7:** nd = 1.75211, νd = 25.05, ΔPgF = +0.01604. Glass: Hoya FF8. f = −122.43 mm.
- **L8:** nd = 1.75500, νd = 52.32, ΔPgF = −0.00675. Glass: Hoya TAC6L. f = +46.53 mm.

G3 has isolated focal length +75.35 mm. The two glasses have nearly matched d-line indices but sharply different dispersions. That keeps the cemented surface optically gentle in first order while still giving chromatic leverage as the group moves through the zoom range.

### G4 — Negative group behind the stop

**L9 / L10 — Cemented doublet, biconcave + positive meniscus.**

- **L9:** nd = 1.78590, νd = 43.94, ΔPgF = −0.00794. Glass: Hoya NBFD11. f = −24.33 mm.
- **L10:** nd = 1.98612, νd = 16.48, ΔPgF = +0.04700. Glass: Hoya FDS16-W. f = +61.71 mm.

G4 has isolated focal length −40.22 mm and sits immediately behind the stop. L10 is a very-high-index, very-high-dispersion positive element, and its ΔPgF is the largest positive deviation in the design. This is not a conventional low-dispersion ED role; it is a dense-flint anomalous-dispersion correction role in the image-side assembly.

### G5 — Strong positive master group

**L11 / L12 — Cemented doublet, biconcave + biconvex.**

- **L11:** nd = 1.73037, νd = 32.23, ΔPgF = −0.00033. Glass: Hoya NBFD32. f = −34.22 mm.
- **L12:** nd = 1.59282, νd = 68.62, ΔPgF = +0.01932. Glass: Hoya FCD505/FCD515 family. f = +29.09 mm.

The L11/L12 cemented pair opens G5. The negative flint and anomalous ED positive element give a compact, strongly converging achromatized subassembly. L12 is one of the low-dispersion positive elements that plausibly belongs to Sigma’s SLD count.

**L13 — Biconvex positive.**  
nd = 1.59282, νd = 68.62, ΔPgF = +0.01932. Glass: Hoya FCD505/FCD515 family. f = +35.08 mm.

L13 is an air-spaced low-dispersion positive element using the same d-line glass constants as L12. It reinforces G5’s positive power while maintaining the chromatic correction scheme established by the L11/L12 doublet.

**L14 — Positive meniscus, convex to object; both faces aspherical.**  
nd = 1.59271, νd = 66.97, ΔPgF = +0.00904. Glass: MP-PCD51-70 / PCD51-class Hoya precision-mold preform. f = +70.91 mm.

L14 closes the strong positive G5 group. Its two aspherical surfaces operate in the converging cone behind the stop, where they are effective against spherical aberration and coma without needing a large element diameter.

### G6 — Internal focusing group

**L15 — Negative meniscus, convex to object.**  
nd = 1.74330, νd = 49.22, ΔPgF = −0.01013. Glass: Hoya NBF1. f = −39.78 mm.

G6 is a single negative element and is the focusing group. The patent states that it moves toward the image side as object distance decreases (§0096). This is a low moving mass compared with a multi-element focusing group and is compatible with the production lens’s HLA actuator, though the actuator itself is manufacturer metadata rather than patent content.

### G7 — Rear weak positive corrector

**L16 / L17 — Cemented doublet, biconvex asphere + biconcave.**

- **L16:** nd = 1.80610, νd = 40.73, ΔPgF = −0.00552. Glass: MP-NBFD130 Hoya precision-mold preform. f = +43.37 mm.
- **L17:** nd = 1.85451, νd = 25.15, ΔPgF = +0.00732. Glass: Hoya NBFD25. f = −46.96 mm.

G7 has isolated focal length +401.6 mm, so it is nearly afocal. Its function is rear correction and back-focus regulation rather than primary convergence. The front face of L16 is the final aspherical surface, placed close to the image plane to clean residual off-axis aberration.

## Glass Identification and Selection

The patent does not name commercial glass catalogs, but the d-line indices, Abbe numbers, and θgF values map coherently to Hoya optical-glass families. The molded/aspherical elements are best identified by Hoya precision-mold preform names where those names reproduce the exact d-line constants. The FCD505/FCD515 case is treated as an alias family rather than a unique catalog name, because Hoya-family datasets list essentially the same 1.59282 / 68.62 class under both designations.

| Elements | Glass identification | nd | νd | θgF | ΔPgF | Role |
|---|---:|---:|---:|---:|---:|---|
| L1, L14 | MP-PCD51-70 / PCD51-class Hoya precision-mold preform | 1.59271 | 66.97 | 0.5367 | +0.00904 | Molded aspherical menisci |
| L2 | MP-FCD500-20 Hoya precision-mold ED preform | 1.55352 | 71.72 | 0.5398 | +0.02070 | Molded ED asphere |
| L3 | Hoya FC5 | 1.48749 | 70.44 | 0.5306 | +0.00919 | Low-dispersion negative crown; possible SLD candidate |
| L4 | Hoya TAFD34 | 1.85033 | 42.70 | 0.5646 | −0.00677 | High-index positive partner |
| L5 | Hoya FCD705 | 1.55032 | 75.50 | 0.5401 | +0.02781 | Low-dispersion positive; strong SLD candidate in G2 |
| L6 | Hoya NBFD29 | 1.77047 | 29.74 | 0.5951 | +0.00038 | Dense-flint G2 partner |
| L7 | Hoya FF8 | 1.75211 | 25.05 | 0.6192 | +0.01604 | Dense flint in G3 |
| L8 | Hoya TAC6L | 1.75500 | 52.32 | 0.5473 | −0.00675 | High-index crown in G3 |
| L9 | Hoya NBFD11 | 1.78590 | 43.94 | 0.5612 | −0.00794 | Negative flint in G4 |
| L10 | Hoya FDS16-W | 1.98612 | 16.48 | 0.6656 | +0.04700 | High-index anomalous dense flint |
| L11 | Hoya NBFD32 | 1.73037 | 32.23 | 0.5899 | −0.00033 | Negative flint in G5 |
| L12, L13 | Hoya FCD505/FCD515 family | 1.59282 | 68.62 | 0.5440 | +0.01932 | Low-dispersion positives; plausible SLD candidates in G5 |
| L15 | Hoya NBF1 | 1.74330 | 49.22 | 0.5495 | −0.01013 | Internal focusing negative meniscus |
| L16 | MP-NBFD130 Hoya precision-mold preform | 1.80610 | 40.73 | 0.5694 | −0.00552 | Molded rear asphere |
| L17 | Hoya NBFD25 | 1.85451 | 25.15 | 0.6103 | +0.00732 | Rear dense flint |

The patent-published optical constants justify the low-dispersion and anomalous-partial-dispersion assignments above, but not the exact manufacturer SLD labeling. The SLD count is therefore tied to Sigma’s published construction, while individual positions are described as candidates unless the glass type is independently determinative.

The chromatic strategy is distributed rather than localized. G2 uses a high-ΔPgF positive ED glass against a near-normal dense flint. GR uses several positive elements with favorable partial-dispersion behavior, including the very dense FDS16-W positive member, against negative elements that sit closer to the normal line. This is why conditions 8 and 9 are written in ΔPgF rather than in Abbe number alone.

## Focus Mechanism

Focusing is internal and performed by G6, the single negative meniscus L15. The patent states that G6 moves toward the image plane when focusing from infinity toward a close object (§0096). G1 through G5 and G7 are not described as focus-moving groups; they move only for zoom.

The patent publishes infinity-focus zoom separations only. It does not give close-focus spacings, close-focus β values, or a finite-distance prescription. Consequently, the data file uses the published infinity spacings for both the infinity and close-focus endpoints, while storing the manufacturer’s 0.28 m minimum focusing distance as product metadata.

| Gap | Between | Wide | Middle | Tele |
|---|---|---:|---:|---:|
| d7 / D12 | G1–G2 | 24.2001 | 10.3101 | 1.3704 |
| d10 / D23 | G2–G3 | 1.0967 | 4.7167 | 1.0966 |
| d13 | G3–stop/G4 | 1.7600 | 13.8950 | 29.4811 |
| d17 | G4–G5 | 11.0343 | 7.0293 | 1.6434 |
| d24 | G5–G6 | 3.5756 | 2.6096 | 1.6000 |
| d26 | G6–G7 | 6.5786 | 7.5446 | 8.5541 |
| BF | G7–image | 16.6727 | 18.8127 | 21.1723 |

The D23 row is the key patent feature: it reaches a maximum at the middle zoom position rather than at the endpoints.

## Aspherical Surfaces

Six surfaces are aspherical: 1, 3, 4, 23, 24, and 27. They occur on four elements: L1, L2, L14, and L16. The patent uses the standard even-order sag equation with conic constant K. In Example 1, every listed K value is 0, so the base surface is spherical and all departure comes from the even polynomial coefficients.

$$
z(y)=\frac{(1/r)y^2}{1+\sqrt{1-(1+K)(y/r)^2}} + A_4y^4 + A_6y^6 + A_8y^8 + A_{10}y^{10}+A_{12}y^{12}+A_{14}y^{14}
$$

| Surface | K | A4 | A6 | A8 | A10 | A12 | A14 |
|---|---:|---:|---:|---:|---:|---:|---:|
| 1 | 0 | 8.81137E−06 | −9.35247E−09 | 3.56200E−12 | 9.76737E−15 | −1.41083E−17 | 6.28920E−21 |
| 3 | 0 | −2.07372E−06 | 7.46142E−09 | −1.62322E−11 | 9.72804E−15 | 0 | 0 |
| 4 | 0 | 6.10616E−06 | 6.61601E−09 | −4.17607E−11 | 5.07229E−14 | 0 | 0 |
| 23 | 0 | −8.60792E−06 | 1.99952E−09 | −4.94951E−11 | −7.59311E−14 | 5.27607E−16 | 0 |
| 24 | 0 | 3.85958E−06 | 1.95216E−08 | −7.83598E−11 | 1.91464E−13 | 0 | 0 |
| 27 | 0 | 1.05308E−06 | 5.18117E−08 | −4.36191E−10 | 2.64638E−12 | −5.67644E−15 | 0 |

The front aspheres work primarily on distortion, oblique field curvature, and coma at the wide end. The L14 double asphere works in the converging rear cone to reduce spherical aberration and coma. The L16 asphere is close to the image plane and handles residual off-axis correction after the focusing group.

## Chromatic Correction Strategy

The patent’s chromatic-control conditions are explicitly framed around anomalous partial dispersion. For G2, condition 8 requires ΔPgF(P) − ΔPgF(N) > 0.010. L5 and L6 give 0.0274. For GR, condition 9 requires the same positive-minus-negative margin for the image-side group. Using standalone element powers to classify positive and negative elements gives 0.0207.

This confirms that the design is not simply using “many low-dispersion glasses.” It places high-ΔPgF positive elements in the variator and rear master assembly, paired against near-normal or negative-ΔPgF negative elements. The result is a secondary-spectrum-control strategy appropriate to a fast constant-aperture standard zoom. The patent data do not justify calling the lens apochromatic; “secondary-spectrum controlled” is the stronger defensible description.

## Conditional Expressions

The fifteen patent conditions were recalculated from the transcribed prescription and independently checked by paraxial ray trace.

| # | Expression | Range | Computed | Patent EX1 |
|---|---|---:|---:|---:|
| 1 | (D23T − D23W)/(D12W − D12T) | −0.08 to 0.08 | 0.000 | 0.00 |
| 2 | (D23N − D23W)/(D12W − D12T) | 0.08 to 0.40 | 0.159 | 0.16 |
| 3 | (D23N − D23T)/(D12W − D12T) | 0.08 to 0.40 | 0.159 | 0.16 |
| 4 | (D34T − D34W)/(D12W − D12T) | 0.50 to 2.00 | 1.214 | 1.21 |
| 5 | (LTN − LTW)/LTW | −0.04 to 0.06 | 0.000 | 0.00 |
| 6 | (LTT − LTW)/LTW | −0.06 to 0.08 | 0.000 | 0.00 |
| 7 | ndP(G1) − ndN(G1) | 0.20 to 0.45 | 0.306 | 0.31 |
| 8 | ΔPgF(P,G2) − ΔPgF(N,G2) | >0.010 | 0.027 | 0.027 |
| 9 | ΔPgF(P,GR) − ΔPgF(N,GR) | >0.010 | 0.021 | 0.021 |
| 10 | fw/f1 | −0.60 to −0.30 | −0.421 | −0.42 |
| 11 | ft/f2 | 0.20 to 0.60 | 0.477 | 0.48 |
| 12 | ft/f3 | 0.40 to 0.80 | 0.514 | 0.51 |
| 13 | ft/f4 | −1.40 to −0.70 | −0.962 | −0.96 |
| 14 | ft/fw | 1.75 to 3.50 | 2.205 | 2.21 |
| 15 | FnoT | 1.40 to 2.80 | 1.86 | 1.86 |

All computed values fall inside the patent’s claimed ranges and match the patent’s correspondence table to the printed precision.

## Verification Summary

The prescription was re-entered directly from the patent’s numerical tables, not from the OCR text alone. A separate paraxial y–u trace was then used to verify the first-order quantities.

- **System focal length:** 17.5503 / 26.0649 / 38.7010 mm, versus patent 17.55 / 26.06 / 38.70 mm.
- **Back focal distance:** 16.6735 / 18.8138 / 21.1740 mm, matching the patent BF values 16.6727 / 18.8127 / 21.1723 mm within 0.002 mm.
- **Group focal lengths:** −41.68 / +81.16 / +75.35 / −40.22 / +20.37 / −39.78 / +401.61 mm, matching the patent’s G1–G7 group table after rounding.
- **Total track:** 133.60 mm at all three zoom positions.
- **Petzval sum:** +3.2503 × 10−3 mm−1, computed surface-by-surface as Σφ/(n·n′), corresponding to Petzval radius −307.7 mm by the project sign convention.
- **Semi-diameters:** not patent-published. The data file uses inferred renderer semi-diameters checked for edge thickness, surface slope, element SD ratio, and cross-gap sag intrusion. These should not be mistaken for manufacturer-published clear apertures.
- **Aperture stop:** a single `STO.sd` value is used in the data file. The paraxial stop radius required to reproduce F1.86 differs by zoom position because the entrance-pupil magnification changes; the data file uses the tele-end maximum clear stop radius and records the patent F-number separately as `apertureDesign`.

## Sources and References

- CN 121454749 A, “变倍光学系统” / “Zoom Optical System,” Sigma Corporation; inventor Shioda Ryo; priority JP 2024-126493, 2024-08-02; published 2026-02-03. Numerical Example 1, especially §0079–§0100 and the Example 1 surface, asphere, variable-spacing, and group tables.
- Sigma Corporation, “Launch schedule of Sigma 17-40mm F1.8 DC | Art,” 2025-06-17. Product metadata used for marketed focal length, production mounts, lens construction, diaphragm blade count, minimum focus distance, maximum magnification, and HLA/internal-zoom statements.
- Hoya Optics official catalog sheets and catalog tables for MP-PCD51-70, MP-FCD500-20, MP-NBFD130, TAFD34, NBFD29, TAC6L, NBFD25, and related Hoya dense-flint and fluor-crown families.
- Secondary cross-checks against public optical-glass datasets were used only where Hoya family names are aliased across catalog generations, especially the FCD505/FCD515 1.59282 / 68.62 class. The stored prescription values remain the patent values.
