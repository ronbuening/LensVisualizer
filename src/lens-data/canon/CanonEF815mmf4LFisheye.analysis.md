# Canon EF 8-15mm f/4L Fisheye USM — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** US 2012/0013996 A1  
**Application Number:** 13/180,705  
**Filed:** July 12, 2011  
**Published:** January 19, 2012  
**Priority:** JP 2010-159314, filed July 14, 2010  
**Inventor:** Tetsuichirou Okumura  
**Assignee:** Canon Kabushiki Kaisha  
**Title:** Optical System Having Fisheye Zoom Lens and Optical Apparatus Having the Optical System  
**Example details:** Numerical Example 1, Table 1, FIGS. 1 and 2A-2C  
**Worked examples in patent:** 3

Numerical Example 1 is the prescription transcribed for the Canon EF 8-15mm f/4L Fisheye USM. The identification is strong, but it should be stated as a production match rather than as a manufacturer-named prescription, because the patent does not identify the commercial lens by model name.

**Retained source-aperture limitation:** the guarded model keeps S2 clear sd 15.5 mm instead of the
printed effective half-diameter 17.075 mm. The latter fails the unchanged slope guard. This restricts
the published 87.5° half-field at every source station; the tall outer shoulder does not restore that
optical aperture or its exact axial position. Source image-circle metadata and axial aperture checks
must not be read as full fisheye runtime clearance. The complete evidence appears below.

Production correlation below reuses prior manufacturer research; it is separate from the original
numerical-source inspection and is not a fresh manufacturer specification check.

The matching evidence is cumulative:

1. **Optical construction.** Example 1 has 14 elements in 11 air-separated groups. Canon's product data for the EF 8-15mm f/4L Fisheye USM gives the same 14-element / 11-group construction.
2. **Focal-length range.** The patent gives 8.05, 11.85, and 15.14 mm. The production lens is marketed as 8-15 mm.
3. **Aperture.** The patent gives F/4.12 at all three zoom positions. The production lens is marketed as f/4.
4. **Fisheye coverage.** The patent is directed to a fisheye zoom that changes from circular fisheye coverage to diagonal fisheye coverage, and FIGS. 7A-7D explicitly describe full-size, APS-H, and APS-C image-circle use cases. Canon's production lens is the corresponding EF zoom fisheye.
5. **Image height.** At the long end, the patent image height is 21.64 mm, exactly the half-diagonal of the 36 x 24 mm full-frame gate to standard precision. At the short end, the 11.15 mm image height gives an approximately 22.3 mm image circle, consistent with a circular fisheye image inside the full-frame gate.
6. **Special elements.** Example 1 contains one aspherical surface, on surface 9 of the moving focus element. Canon describes the lens as using one aspherical element and UD glass.
7. **Focusing method.** The patent states that focusing is performed by moving part L12 of the first lens unit while fixing the front lens. Canon describes the production lens as using inner focusing with a floating mechanism.
8. **Timing.** The Japanese priority filing in July 2010 immediately precedes the August 2010 product announcement period and the July 2011 market introduction recorded by Canon's camera museum.

Example 2 is a 12-element variant and does not match the production element count. Example 3 restores the 14-element count but adds a separate third unit behind L2, giving different rear-group kinematics. Example 1 is therefore the closest match to the production EF 8-15mm f/4L Fisheye USM.

## Optical Architecture

The design is a two-unit negative-positive fisheye zoom. The patent divides the system, from object side to image side, into a negative first lens unit L1 and a positive second lens unit L2. L1 is itself divided into a fixed front subunit L11 and a single-element moving focus subunit L12. L2 contains the relay and image-forming optics, the supplemental stop SS, and the main aperture stop S.

This is a retrofocus fisheye zoom in the optical sense: the back focus at the short end is 40.25 mm while the EFL is only 8.05 mm. The ratio BF/EFL is approximately 5.0 at the short end, and BF/|f1| is 3.69 as reported in patent Table 4. The BF value is a last-glass-to-image distance, not the Canon EF flange focal distance; it should not be treated as a mechanical mount registration distance.

The patent states the fisheye projection family explicitly. It lists the usual fisheye projection forms and gives the equisolid-angle relation $Y = 2f\sin(\theta/2)$ as the principal conditional image-height relationship for $85^\circ \leq \theta \leq 90^\circ$. In the numerical table, however, the listed image height is also the required image-circle height for different format coverage. It should not be overinterpreted as proving that every zoom point exactly follows an ideal equisolid projection. The patent's numerical example states an image angle of 175° at all three zoom positions; Canon's published production specification lists angle-of-view ranges of 180°-142° horizontal, 180°-91°46' vertical, and 180°-175°30' diagonal.

The first unit has a strong negative focal length of -10.91 mm. It collects the very wide incident bundle and bends it inward. Its rear subunit L12 is the focus group. The second unit has a positive focal length of 26.80 mm and forms the image after the strongly negative front unit. The ratio |f1|/f2 is 0.407, close to the upper side of the patent's allowed range and typical of a compact SLR fisheye zoom.

During zooming from 8.05 mm to 15.14 mm, the L1-L2 air gap d10 decreases from 20.89 mm to 3.89 mm, while the back focal distance d27 increases from 40.25 mm to 57.66 mm. The first unit follows a reversing locus: it moves imageward and then back objectward. The second unit moves monotonically objectward. The total optical track varies modestly: 129.57 mm at the short end, 127.26 mm at the intermediate point, and 129.98 mm at the long end. The sum of all non-variable prescription spacings is 68.43 mm, but that figure includes fixed air spaces as well as glass thickness and should not be described as glass-only element thickness.

## Element-by-Element Analysis

### L1 — Negative Meniscus, Convex to Object

$n_d = 1.80400$, $\nu_d = 46.6$. Glass: S-LAH65V (OHARA) — high-index lanthanum flint. $f = -31.04$ mm.

The front element is a large negative meniscus with both radii positive ($R_1 = +59.840$ mm, $R_2 = +17.282$ mm). It presents a convex external surface to the object and a much stronger rear surface. The form factor $SF1 = (r_1-r_2)/(r_1+r_2) = 0.552$ satisfies the patent's condition (3), and the refractive index $n_{G1}=1.804$ satisfies condition (4).

Under the usual crown/flint boundary, $\nu_d = 46.6$ places this material on the flint side despite its lanthanum-family catalog name. That classification matters because the front element is not merely a high-index dome; it is a high-index negative-power fisheye element with substantial dispersion that must be balanced by the following high-Abbe negative elements.

### L2 — Negative Meniscus, Convex to Object

$n_d = 1.59282$, $\nu_d = 68.6$. Glass: HOYA FCD505 / FCD515 class — qualified high-Abbe spectral proxy. $f = -43.98$ mm.

L2 continues the negative-power first unit with a high-Abbe pair; its APD-position interpretation is inferred. Its radii ($R_1 = +129.723$ mm, $R_2 = +21.610$ mm) make it a weaker meniscus than the front element. The patent's condition (5) requires at least one negative lens behind the first meniscus in L1 to have positive anomalous partial dispersion relative to the normal line. Table 4 reports the Example 1 value as +0.019.

The FCD505/FCD515 class supplies a coordinate-compatible qualified curve. It does not establish
historical chemistry, supplier, melt or a uniquely assigned source partial at this numbered element.

### L3 — Biconcave Negative

$n_d = 1.59282$, $\nu_d = 68.6$. Glass: HOYA FCD505 / FCD515 class. $f = -38.48$ mm.

L3 has the same printed index/Abbe pair as L2; that does not prove the same historical chemistry or source partial-dispersion assignment. Its biconcave form ($R_1 = -86.935$ mm, $R_2 = +31.102$ mm) gives stronger negative power than L2. In combination with L4, it forms the principal chromatic balancing pair in the fixed portion of the first unit.

The repeated use of this glass in L2 and L3 is consistent with the fisheye problem the patent is solving: lateral color grows rapidly when the front group handles large chief-ray heights. Low-dispersion negative power in the first unit reduces that burden before the beam is relayed by L2.

### L4 — Biconvex Positive

$n_d = 1.80518$, $\nu_d = 25.4$. Glass: S-TIH6 (OHARA) — titanium high-index flint. $f = +23.82$ mm.

L4 is a strong positive biconvex lens behind the two high-Abbe negatives. It partly converges the diverging beam and serves as the high-dispersion positive member in the front-unit chromatic correction scheme.

The patent values match OHARA S-TIH6, code 805254, within normal rounding. This material interpretation is important: L4 is a very high-dispersion flint rather than a moderate-index TIL-family glass.

### L5 — Negative Meniscus, Concave to Object, 1x Aspheric — Focus Element

$n_d = 1.85135$, $\nu_d = 40.1$. Glass: HOYA M-TAFD305 class. $f = -37.94$ mm.

L5 is the complete L12 focusing subunit. It is a negative meniscus with $R_1 = -31.089$ mm and $R_2 = -844.340$ mm. Surface 9 is the only aspherical surface in the prescription.

HOYA M-TAFD305 matches $n_d = 1.85135$, $\nu_d = 40.10$ and is consistent with a molded aspherical focus element. Canon's public description of a high-precision glass-molded aspherical element is also consistent with this assignment, although the patent itself does not name the glass vendor.

### L6 — Biconvex Positive, First Element of L2

$n_d = 1.88300$, $\nu_d = 40.8$. Glass: S-LAH58 (OHARA) / TAFD33 class. $f = +33.85$ mm.

L6 is the first powered relay element behind the supplemental stop SS. Its high index permits positive power with moderate curvatures ($R_1 = +43.413$ mm, $R_2 = -94.260$ mm). Its position, between SS and the aperture stop, gives it useful leverage over the marginal beam entering the rear relay.

The S-LAH58 / TAFD33 class supplies a compatible spectral proxy. Neither historical vendor nor
production material variant is identified by that coordinate match.

### L7 + L8 — Cemented Doublet, Negative + Positive

**L7:** $n_d = 1.88300$, $\nu_d = 40.8$. Glass: S-LAH58 (OHARA) / TAFD33 class. Biconcave negative, $f = -13.62$ mm.  
**L8:** $n_d = 1.51823$, $\nu_d = 58.9$. Glass: S-NSL3 (OHARA). Biconvex positive, $f = +24.59$ mm.  
**Combined doublet:** $f = -35.65$ mm.

This cemented group sits immediately behind the aperture stop. It has net negative power and helps balance spherical aberration, axial color, and Petzval curvature in the rear relay.

The patent pair $1.51823/58.9$ matches OHARA S-NSL3, code 518590. This is the crown partner to the high-index negative L7 in the cemented group.

### L9 + L10 — Cemented Doublet, Positive + Negative

**L9:** $n_d = 1.48749$, $\nu_d = 70.2$. Glass: S-FSL5 (OHARA). Biconvex positive, $f = +24.03$ mm.  
**L10:** $n_d = 1.88300$, $\nu_d = 40.8$. Glass: S-LAH58 (OHARA) / TAFD33 class. Negative meniscus, $f = -26.40$ mm.  
**Combined doublet:** $f = +291.32$ mm.

The net power of this doublet is weakly positive, so its main purpose is correction rather than gross focusing power. L9 provides low-index, low-dispersion positive power; L10 supplies high-index negative power on the cemented interface and rear surface.

The group is positioned after the first cemented doublet and before the rear positive singlet. It helps shape the relay's chromatic and field-curvature behavior without adding much net power to the second unit.

### L11 — Biconvex Positive

$n_d = 1.59270$, $\nu_d = 35.3$. Glass: S-FTM16 (OHARA). $f = +35.46$ mm.

L11 is a positive singlet with a nearly flat front surface ($R_1 = +712.893$ mm) and a strong rear surface ($R_2 = -21.620$ mm). It contributes positive power after the two cemented doublets and before the rear ED pair.

The patent pair matches OHARA S-FTM16. With $\nu_d = 35.3$, this is a flint-side material used for chromatic balancing in the relay.

### L12 + L13 — Cemented Doublet, Negative + ED Positive

**L12:** $n_d = 1.83400$, $\nu_d = 37.2$. Glass: S-LAH60V (OHARA qualified proxy). Weak-front biconcave negative, $f = -33.83$ mm.\
**L13:** $n_d = 1.49700$, $\nu_d = 81.5$. Glass: S-FPL51 (OHARA) / FCD1 class. Biconvex positive, $f = +31.96$ mm.  
**Combined doublet:** $f = +322.59$ mm.

This rear cemented pair is a high-Abbe correction group; its precise APD placement remains inferred. The positive element L13 is the prescription's strongest match to Canon's public UD-glass claim. Patent Table 4 reports condition (6), the anomalous partial-dispersion condition for a positive lens in the second unit, as +0.028 for Example 1, without uniquely naming this numbered position.

The patent pair $1.83400/37.2$ matches OHARA S-LAH60V. L13 matches OHARA S-FPL51, in the same low-dispersion ED region as HOYA FCD1.

### L14 — Weak Positive Meniscus, Rear Element

$n_d = 1.48749$, $\nu_d = 70.2$. Glass: S-FSL5 (OHARA). $f = +178.80$ mm.

The final element is a very weak positive meniscus with an effectively flat front surface ($R_1 \approx -80{,}911$ mm) and a moderate rear surface ($R_2 = -87.072$ mm). It has little power compared with the rest of the second unit.

Its role is mainly final field shaping and exit-bundle conditioning before the long back-focus space. The low-index, low-dispersion S-FSL5 glass minimizes additional chromatic burden near the image plane.

## Glass Identification and Selection

Paragraph 0063 (PDF p. 16) explicitly defines nd at the d-line. Paragraphs 0048/0052 (PDF p. 15)
print g 435.8, F 486.1, d 587.6 and C 656.3 nm and define νd and θgF. Table 1 gives all 14 index/Abbe
pairs, without individual C/F/g indices. Every pair is retained, and all 14 coordinate-compatible
curves remain qualified spectral proxies. Historical chemistry, supplier, melt and fabrication
process remain unresolved; material resemblance does not prove production procurement.

The actual 2026-10-08 formula/printed-value review is reused and directly confirmed: Table 4 on
PDF p. 18 gives group condition (5) +0.019 and condition (6) +0.028 on the repository's normal line,
θgF − (0.6438 − 0.001682·νd), to three decimals. There is no absolute printed θgF table.
Paragraph 0047 and claim 4 refer to one or more negative lenses behind the first meniscus;
paragraph 0051 and claim 5 refer to one or more positive lenses in the second unit. They do not
uniquely identify numbered positions L2/L3/L13. Same index/Abbe coordinates cannot prove that mapping.

The three per-position `dPgF` overrides are therefore removed and their APD tags become inferred.
The genuine group values and their formula remain here and in the audit, with their actual prior
review date. The previous position-specific interpretation is superseded, rather than the printed
numbers being discarded. No catalog line index or replacement source partial is invented.

| Element(s)  |   $n_d$ | $\nu_d$ | Compatible spectral proxy      | Basis / role                                                  |
| ----------- | ------: | ------: | ------------------------------ | ------------------------------------------------------------- |
| L1          | 1.80400 |    46.6 | S-LAH65V (OHARA)               | High-index lanthanum flint front meniscus                     |
| L2, L3      | 1.59282 |    68.6 | FCD505 / FCD515 class (HOYA)   | High-Abbe negatives; group-condition placement inferred       |
| L4          | 1.80518 |    25.4 | S-TIH6 (OHARA)                 | High-dispersion positive flint for front-unit achromatization |
| L5          | 1.85135 |    40.1 | M-TAFD305 class (HOYA)         | Moldable high-index focus-asphere glass                       |
| L6, L7, L10 | 1.88300 |    40.8 | S-LAH58 (OHARA) / TAFD33 class | High-index relay glass                                        |
| L8          | 1.51823 |    58.9 | S-NSL3 (OHARA)                 | Crown partner in first rear cemented doublet                  |
| L9, L14     | 1.48749 |    70.2 | S-FSL5 (OHARA)                 | Low-index, low-dispersion crown                               |
| L11         | 1.59270 |    35.3 | S-FTM16 (OHARA)                | Medium-index flint-side relay singlet                         |
| L12         | 1.83400 |    37.2 | S-LAH60V (OHARA)               | Dense flint partner for the ED positive element               |
| L13         | 1.49700 |    81.5 | S-FPL51 (OHARA) / FCD1 class   | High-Abbe positive; group-condition placement inferred        |

## Focus Mechanism

The lens uses inner focusing by moving the L12 subunit, which consists of L5 alone. The patent explicitly states that part L12 of the first lens unit moves during focusing and explains the practical reason: fisheye lenses often approach the subject closely, so fixing the front lens helps avoid contamination and damage.

At infinity focus, the zoom variable gap after L5 is d10:

| Zoom position | Focal length | d8, L4-L5 | d10, L5-SS |       BF |
| ------------- | -----------: | --------: | ---------: | -------: |
| Short         |      8.05 mm |   5.82 mm |   20.89 mm | 40.25 mm |
| Intermediate  |     11.85 mm |   5.82 mm |    9.25 mm | 49.58 mm |
| Long          |     15.14 mm |   5.82 mm |    3.89 mm | 57.66 mm |

The patent does not provide close-focus spacing tables for Example 1. The data file therefore uses the patent's infinity zoom spacings directly and provides a paraxial finite-conjugate estimate for close focus at the manufacturer-published 0.15 m MFD. In that model, L5 moves objectward by about 3.2-3.4 mm, reducing d8 and increasing d10 while preserving the L11-to-L2 mechanical separation at each zoom point.

| Zoom position | Estimated close-focus d8 | Estimated close-focus d10 |
| ------------- | -----------------------: | ------------------------: |
| 8.05 mm       |                 2.400 mm |                 24.310 mm |
| 11.85 mm      |                 2.600 mm |                 12.470 mm |
| 15.14 mm      |                 2.375 mm |                  7.335 mm |

These close-focus values should be treated as visualization parameters, not patent-published production measurements.

## Aspherical Surfaces

The design contains one aspherical surface: surface 9, the front surface of L5. In the data file it is labeled `9A`.

The patent's sag equation uses the standard conic-plus-even-polynomial form:

$$
Z(y)=\frac{y^2/R}{1+\sqrt{1-(1+K)(y/R)^2}} + A_4y^4 + A_6y^6 + A_8y^8 + A_{10}y^{10} + A_{12}y^{12}.
$$

The conic constant is used directly as $K$; there is no evidence that the patent uses a shifted $\kappa = K+1$ convention. For surface 9, $K=0$, so the base conic is a sphere.

| Coefficient |        Value |
| ----------- | -----------: |
| $R$         |   -31.089 mm |
| $K$         |            0 |
| $A_4$       |  -6.64162e-6 |
| $A_6$       |  +2.58871e-8 |
| $A_8$       | -8.99837e-10 |
| $A_{10}$    | +1.12233e-11 |
| $A_{12}$    | -5.07106e-14 |

Using the patent's listed effective diameter of 17.80 mm for surface 9, the semi-diameter is 8.90 mm. The polynomial departure from the base sphere is:

|   Height | Relative height | Polynomial departure |
| -------: | --------------: | -------------------: |
| 2.225 mm |             25% |         -0.000160 mm |
| 4.450 mm |             50% |         -0.002511 mm |
| 6.675 mm |             75% |         -0.012867 mm |
| 8.900 mm |            100% |         -0.041757 mm |

The departure is negative over the working aperture and reaches about -41.8 micrometers at the listed semi-diameter. Since this is a concave-to-object surface on the moving negative focus element, the asphere deepens the rim relative to the base sphere and travels with the focus group. This placement lets the same surface participate in infinity correction and close-focus correction.

## Zoom Mechanism and Image-Circle Behavior

The zoom changes the image-circle size rather than behaving like a rectilinear zoom with a conventional narrowing field angle. The patent describes this explicitly: in a fisheye zoom, zooming changes the area over which the 180° angle of field is achieved.

| Focal length | Image height | Image circle diameter |      d10 |       BF | Overall length |
| -----------: | -----------: | --------------------: | -------: | -------: | -------------: |
|      8.05 mm |     11.15 mm |              22.30 mm | 20.89 mm | 40.25 mm |      129.57 mm |
|     11.85 mm |     16.77 mm |              33.54 mm |  9.25 mm | 49.58 mm |      127.26 mm |
|     15.14 mm |     21.64 mm |              43.28 mm |  3.89 mm | 57.66 mm |      129.98 mm |

The short-end image circle is smaller than the 36 x 24 mm full-frame gate, producing a circular image. The long-end image height equals the full-frame half diagonal to standard rounding, producing diagonal fisheye coverage on the full-frame gate. The ratio $Y_t/Y_w = 21.64/11.15 = 1.941$ satisfies the patent's condition (1).

## Conditional Expressions

The Example 1 prescription satisfies all of the patent's reported conditions. The following values were independently recomputed or cross-checked from the prescription and patent Table 4:

| Condition | Meaning                                 | Example 1 value |
| --------- | --------------------------------------- | --------------: | ----- | ----- |
| (1)       | $Y_t/Y_w$                               |            1.94 |
| (2)       | $BF_w/                                  |             f_1 | $     | 3.69  |
| (3)       | $SF1=(r_1-r_2)/(r_1+r_2)$               |            0.55 |
| (4)       | $n_{G1}$                                |           1.804 |
| (5)       | First-unit negative-lens APD deviation  |           0.019 |
| (6)       | Second-unit positive-lens APD deviation |           0.028 |
| (7)       | $m_2/f_2$                               |           0.650 |
| (8)       | $                                       |             f_1 | /f_2$ | 0.407 |

The numerical checks are important because some patent prose is generalized across embodiments. Here, the Table 1 prescription and Table 4 conditional-expression values are internally consistent.

## Verification Summary

The previously completed paraxial verification uses the Table 1 prescription and surface-by-surface refraction. The computed values reproduce the rounded source focal lengths, back focus values and unit focal lengths; they remain calculated outputs rather than catalog source values.

| Parameter         |    Patent |     Computed |
| ----------------- | --------: | -----------: |
| EFL, short        |   8.05 mm |   8.05249 mm |
| EFL, intermediate |  11.85 mm |  11.85145 mm |
| EFL, long         |  15.14 mm |  15.14066 mm |
| BF, short         |  40.25 mm |  40.25557 mm |
| BF, intermediate  |  49.58 mm |  49.58448 mm |
| BF, long          |  57.66 mm |  57.66161 mm |
| $f_1$             | -10.91 mm | -10.91219 mm |
| $f_2$             |  26.80 mm |  26.79648 mm |

The surface-by-surface Petzval sum using $\phi/(nn')$ is approximately $-6.01 \times 10^{-4}\ \mathrm{mm}^{-1}$ for the Table 1 prescription. This near-neutral value is consistent with the extensive field-curvature balancing required by a fisheye zoom, but it should not be substituted for real-field astigmatic field behavior.

## Original Figure and Retained Constraints — 2026-10-30

The exact original is `patents/US20120013996A1.pdf`, First Embodiment, Table 1 on PDF pp. 16–17
(printed pp. 4–5). Paragraphs 0067–0069 map it to Fig. 1, PDF p. 2 / sheet 1, showing wide and tele
infinity layouts; Figs. 2A–2C are the three infinity aberration plots. Other numerical configurations
are excluded. All 27 source rows, the asphere, 14 media, three cemented interfaces and both stops
were checked. No filter, rear plate, hybrid/resin or separate cement medium is supplied.

The original embeds 2560 × 3300 px rasters at 300 ppi. Both 1460 × 730 wide/tele crops are native,
unresampled. About 929 px across the wide 89.32 mm first/last refracting-vertex span gives
10.4 px/mm (0.096 mm/px). The schematic vertical extents differ by a few percent from that axial
calibration: the front blank reads about 31.9 mm versus its printed 30.935 mm source-effective
front cap. Practical uncertainty is ±1.1 mm at the large front blank and ±0.6 mm in the rear relay.
Published cap heights anchor conservative outer heights; magnified crops add no resolution.
Brackets, arrowheads, leaders and the SS/S/image-plane lines are excluded from optical rims.

| Surface(s)   | Adopted optical sd (mm) | Outer shoulder sd (mm) | Disposition                                                       |
| ------------ | ----------------------- | ---------------------- | ----------------------------------------------------------------- |
| 2            | retained 15.5           | 30.935                 | Tall source blank; optical/axial mismatch below remains explicit. |
| 4            | retained 13.695         | 16.295                 | Resolved outer shoulder of second meniscus.                       |
| 6            | retained 12.92          | 13.5                   | Resolved end of third negative blank.                             |
| 8            | retained 12.36          | 13.035                 | Rear shoulder of first-unit positive element.                     |
| 10           | 8.9                     | —                      | Near-flat rear cap follows the focus element's drawn blank.       |
| 15 / 16 / 17 | 6.155 throughout        | —                      | Source first cemented compound, no opaque junction land.          |
| 18 / 19 / 20 | 6.98 throughout         | —                      | Source second cemented compound, no opaque junction land.         |
| 21 / 22      | 7.935 throughout        | —                      | Rear positive singlet blank.                                      |
| 23 / 24 / 25 | 9.35 throughout         | —                      | Source rear cemented compound, no opaque junction land.           |
| 26 / 27      | 9.935 throughout        | —                      | Final nearly plane/weakly curved element.                         |

Nine cap changes and four outer shoulders follow the native outlines. The cemented junctions
16/19/24 remain continuous transparent optical interfaces at their source compound heights.
Every concave end was inspected; no inferred cut, fabricated depth source, resin wing or opaque
interface is introduced. L12's type is corrected to biconcave negative: source R23 is a finite
−60941.798 mm, not a plane. No numerical radius changes.

### Retained source-aperture and geometric constraints

Table 1 prints S2 effective diameter 34.15 mm, or sd 17.075 mm. That literal-cap trial has an
81.1° spherical rim slope, exceeding the unchanged default 64.2° guard. The source-effective S5
sd 13.55 mm also fails: pair 4–5 intrusion is about 5.84 mm versus 5.796 mm allowed across D4 =
6.44 mm. Both trials are rejected; neither tolerance is raised. Clear caps 15.5 and 13.5 remain.
For retained 4–5, intrusion is 5.790291 mm and physical residual 0.649709 mm. This is a conservative
guard restriction, not proof that the printed prescription physically overlaps or reflects totally.

The S2 outer height is source-supported, but the modeled land begins at the retained 15.5 mm cap.
Its axial location is 4.976321 mm forward of the location implied by the printed 17.075 mm cap.
It improves blank height without reproducing that source aperture or exact shoulder position.
The actual SVG comparison exposes this remaining mismatch; no R/d or focus cam is tuned to hide it.
The full source aperture is not reproduced by the current guarded model.

## Current Runtime Scope — 2026-10-30

Table 1 prints an image angle of 175° at every station. The source projection metadata is corrected
from 180/180/175.5 to 175/175/175°, with authoritative half-field 87.5° throughout. The 180° production
coverage claim remains qualified product research; 89/89.9/90° are separately labeled extreme-field
diagnostics. Catalog design endpoints now copy the printed 8.05 / 15.14 mm, while computed Gaussian
EFLs 8.052488 / 11.851449 / 15.140656 mm remain runtime results. The existing projection focal scale,
image-circle array, source gaps, focus cam, SS, iris rule and all R/d/asphere coefficients are unchanged.

Canonical surface validation passes under unchanged guards. The image-circle check finds zero
undersized source records, and all 65 geometry-identical infinity zoom samples pass the project's
3% aperture check. The generic field-coverage audit skips fisheyes; it is not evidence of source-edge
clearance. The retained current iris radii are 4.285585 / 4.883902 / 5.401937 mm. Project paraxial F/4.12
is distinct from real input-diameter F/4.142816 / 4.159048 / 4.174930. The generic effective-diameter
column is not treated as a physical per-station iris schedule.

A public bounding-sphere/vector census checks 65 zooms × three focus controls × fields
0/30/60/80/87.5/89/89.9/90°. All 585 bundles at 0/30/60° converge and trace 56,745 pupil rays without
seed, aim or trace failures; every sampled axial bundle and chief clears. The other 975 field seeds
fail with `bracket-failed`, including every sampled published 87.5° source-edge field. They are not
counted as clear and their unlaunched pupils are not counted as traced rays. At nonzero focus those
collimated vector tests probe geometry, not actual finite-object fisheye coverage.

A separate diagnostic finds stop-centre vector rays with aperture checks disabled only during root
finding, then retraces them through the unchanged physical caps. At the three source infinity
stations and 87.5°, the unrestricted optical paths are finite and reach S2 at
17.022620 / 16.812584 / 16.621198 mm: all below printed 17.075, but above adopted 15.5. They then clip
at S2. This isolates the retained cap restriction; the shoulder does not repair it. Some 89/90°
wide-state roots remain unbracketed even in that diagnostic, so no 180° model guarantee is made.

A 65-zoom × 21-focus axial finite-object sweep traces 132,405 rays using actual Gaussian conjugates
and another 132,405 with a positive 150/focus mm object-to-image map. Both have zero virtual objects,
seed/aim/trace failures or axial clipping. Reconstructed close source-station conjugates are
149.999995 / 149.999999 / 150.000004 mm. These results verify sampled axial clearance, not off-axis
finite coverage or a production cam. The source supplies no close-focus spacing table.

All 1,365 zoom/focus-control renders have 14 finite closed connected glass contours and zero hidden
trimming. Nine actual SVGs and source-scale wide/tele comparison were inspected. Linear zoom-gap/BF
interpolation is illustrative and not focus preserving: the worst sampled infinity displacement is
−0.892829 mm at zoom 0.28125 (EFL 9.823802 mm, BF 44.605296 mm versus image interval 45.498125 mm).
Source fidelity, sampled runtime clearance and production correlation remain separate conclusions.

## Sources

1. US 2012/0013996 A1, "Optical System Having Fisheye Zoom Lens and Optical Apparatus Having the Optical System," Tetsuichirou Okumura / Canon Kabushiki Kaisha. Primary source for prescription data, zoom spacings, aspherical coefficients, conditional expressions, and focusing description.
2. Canon Camera Museum, EF8-15mm f/4L Fisheye USM. Manufacturer source for market introduction, element/group count, 0.15 m closest focusing distance, maximum magnification, size, and weight.
3. Canon regional product specification, EF 8-15mm f/4L Fisheye USM. Manufacturer source for angle-of-view ranges, 14/11 construction, ring USM, 0.15 m closest focusing distance, and f/22 minimum aperture.
4. HOYA Optics Division glass data and cross-reference material. Used for FCD505/FCD515-class and M-TAFD305 matches.
5. OHARA optical glass catalog and glass datasheets. Used for S-LAH65V, S-TIH6, S-LAH58, S-NSL3, S-FSL5, S-FTM16, S-LAH60V, and S-FPL51 matches.
