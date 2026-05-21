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
**Embodiment analyzed:** First Embodiment / Numerical Example 1, Table 1, FIGS. 1 and 2A-2C  
**Worked examples in patent:** 3

Numerical Example 1 is the prescription transcribed for the Canon EF 8-15mm f/4L Fisheye USM. The identification is strong, but it should be stated as a production match rather than as a manufacturer-named prescription, because the patent does not identify the commercial lens by model name.

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

Under the usual crown/flint boundary, $\nu_d = 46.6$ places this material on the flint side despite its lanthanum-family catalog name. That classification matters because the front element is not merely a high-index dome; it is a high-index negative-power fisheye element with substantial dispersion that must be balanced by the following anomalous low-dispersion negative elements.

### L2 — Negative Meniscus, Convex to Object

$n_d = 1.59282$, $\nu_d = 68.6$. Glass: HOYA FCD505 / FCD515 class — high-index anomalous low-dispersion glass. $f = -43.98$ mm.

L2 continues the negative-power first unit but uses a low-dispersion anomalous glass. Its radii ($R_1 = +129.723$ mm, $R_2 = +21.610$ mm) make it a weaker meniscus than the front element. The patent's condition (5) requires at least one negative lens behind the first meniscus in L1 to have positive anomalous partial dispersion relative to the normal line. Table 4 reports the Example 1 value as +0.019.

Current OHARA S-FPM3 data do not match $n_d = 1.59282$, $\nu_d = 68.6$. HOYA's FCD505 data match the patent pair closely and were introduced as a high-index anomalous low-dispersion glass before the lens patent's priority date. The data file therefore records this as HOYA FCD505 / FCD515 class.

### L3 — Biconcave Negative

$n_d = 1.59282$, $\nu_d = 68.6$. Glass: HOYA FCD505 / FCD515 class. $f = -38.48$ mm.

L3 uses the same anomalous low-dispersion glass as L2. Its biconcave form ($R_1 = -86.935$ mm, $R_2 = +31.102$ mm) gives stronger negative power than L2. In combination with L4, it forms the principal chromatic balancing pair in the fixed portion of the first unit.

The repeated use of this glass in L2 and L3 is consistent with the fisheye problem the patent is solving: lateral color grows rapidly when the front group handles large chief-ray heights. Low-dispersion negative power in the first unit reduces that burden before the beam is relayed by L2.

### L4 — Biconvex Positive

$n_d = 1.80518$, $\nu_d = 25.4$. Glass: S-TIH6 (OHARA) — titanium high-index flint. $f = +23.82$ mm.

L4 is a strong positive biconvex lens behind the two anomalous low-dispersion negatives. It partly converges the diverging beam and serves as the high-dispersion positive member in the front-unit chromatic correction scheme.

The patent values match OHARA S-TIH6, code 805254, within normal rounding. This material interpretation is important: L4 is a very high-dispersion flint rather than a moderate-index TIL-family glass.

### L5 — Negative Meniscus, Concave to Object, 1x Aspheric — Focus Element

$n_d = 1.85135$, $\nu_d = 40.1$. Glass: HOYA M-TAFD305 class. $f = -37.94$ mm.

L5 is the complete L12 focusing subunit. It is a negative meniscus with $R_1 = -31.089$ mm and $R_2 = -844.340$ mm. Surface 9 is the only aspherical surface in the prescription.

HOYA M-TAFD305 matches $n_d = 1.85135$, $\nu_d = 40.10$ and is consistent with a molded aspherical focus element. Canon's public description of a high-precision glass-molded aspherical element is also consistent with this assignment, although the patent itself does not name the glass vendor.

### L6 — Biconvex Positive, First Element of L2

$n_d = 1.88300$, $\nu_d = 40.8$. Glass: S-LAH58 (OHARA) / TAFD33 class. $f = +33.85$ mm.

L6 is the first powered relay element behind the supplemental stop SS. Its high index permits positive power with moderate curvatures ($R_1 = +43.413$ mm, $R_2 = -94.260$ mm). Its position, between SS and the aperture stop, gives it useful leverage over the marginal beam entering the rear relay.

The exact $n_d$ match to OHARA S-LAH58 is strong. HOYA TAFD33 is also a plausible cross-vendor equivalent region for Canon production sourcing. The data file records S-LAH58 / TAFD33 class rather than treating one vendor as named by the patent.

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

**L12:** $n_d = 1.83400$, $\nu_d = 37.2$. Glass: S-LAH60V (OHARA). Near-plano-concave negative, $f = -33.83$ mm.  
**L13:** $n_d = 1.49700$, $\nu_d = 81.5$. Glass: S-FPL51 (OHARA) / FCD1 class. Biconvex positive, $f = +31.96$ mm.  
**Combined doublet:** $f = +322.59$ mm.

This rear cemented pair is the clearest ED correction group in the system. The positive element L13 is the prescription's strongest match to Canon's public UD-glass claim. Patent Table 4 reports condition (6), the anomalous partial-dispersion condition for a positive lens in the second unit, as +0.028 for Example 1.

The patent pair $1.83400/37.2$ matches OHARA S-LAH60V. L13 matches OHARA S-FPL51, in the same low-dispersion ED region as HOYA FCD1.

### L14 — Weak Positive Meniscus, Rear Element

$n_d = 1.48749$, $\nu_d = 70.2$. Glass: S-FSL5 (OHARA). $f = +178.80$ mm.

The final element is a very weak positive meniscus with an effectively flat front surface ($R_1 \approx -80{,}911$ mm) and a moderate rear surface ($R_2 = -87.072$ mm). It has little power compared with the rest of the second unit.

Its role is mainly final field shaping and exit-bundle conditioning before the long back-focus space. The low-index, low-dispersion S-FSL5 glass minimizes additional chromatic burden near the image plane.

## Glass Identification and Selection

The patent does not name glass vendors, so the following assignments are best-fit catalog matches to the published $n_d/\nu_d$ pairs. Vendor names are used only where the catalog values match the patent prescription.

| Element(s) | $n_d$ | $\nu_d$ | Glass assignment | Basis / role |
|---|---:|---:|---|---|
| L1 | 1.80400 | 46.6 | S-LAH65V (OHARA) | High-index lanthanum flint front meniscus |
| L2, L3 | 1.59282 | 68.6 | FCD505 / FCD515 class (HOYA) | Anomalous low-dispersion negative lenses; patent condition (5) |
| L4 | 1.80518 | 25.4 | S-TIH6 (OHARA) | High-dispersion positive flint for front-unit achromatization |
| L5 | 1.85135 | 40.1 | M-TAFD305 class (HOYA) | Moldable high-index focus-asphere glass |
| L6, L7, L10 | 1.88300 | 40.8 | S-LAH58 (OHARA) / TAFD33 class | High-index relay glass |
| L8 | 1.51823 | 58.9 | S-NSL3 (OHARA) | Crown partner in first rear cemented doublet |
| L9, L14 | 1.48749 | 70.2 | S-FSL5 (OHARA) | Low-index, low-dispersion crown |
| L11 | 1.59270 | 35.3 | S-FTM16 (OHARA) | Medium-index flint-side relay singlet |
| L12 | 1.83400 | 37.2 | S-LAH60V (OHARA) | Dense flint partner for the ED positive element |
| L13 | 1.49700 | 81.5 | S-FPL51 (OHARA) / FCD1 class | ED/UD anomalous positive lens; patent condition (6) |

The chromatic correction strategy is two-tiered. In L1, the FCD505/FCD515-class negative elements L2 and L3 carry anomalous low-dispersion negative power and are paired against the very high-dispersion S-TIH6 positive element L4. In L2, the S-FPL51 positive element L13 provides the main ED/UD correction and is cemented to the high-index S-LAH60V negative L12.

## Focus Mechanism

The lens uses inner focusing by moving the L12 subunit, which consists of L5 alone. The patent explicitly states that part L12 of the first lens unit moves during focusing and explains the practical reason: fisheye lenses often approach the subject closely, so fixing the front lens helps avoid contamination and damage.

At infinity focus, the zoom variable gap after L5 is d10:

| Zoom position | Focal length | d8, L4-L5 | d10, L5-SS | BF |
|---|---:|---:|---:|---:|
| Short | 8.05 mm | 5.82 mm | 20.89 mm | 40.25 mm |
| Intermediate | 11.85 mm | 5.82 mm | 9.25 mm | 49.58 mm |
| Long | 15.14 mm | 5.82 mm | 3.89 mm | 57.66 mm |

The patent does not provide close-focus spacing tables for Example 1. The data file therefore uses the patent's infinity zoom spacings directly and provides a paraxial finite-conjugate estimate for close focus at the manufacturer-published 0.15 m MFD. In that model, L5 moves objectward by about 3.2-3.4 mm, reducing d8 and increasing d10 while preserving the L11-to-L2 mechanical separation at each zoom point.

| Zoom position | Estimated close-focus d8 | Estimated close-focus d10 |
|---|---:|---:|
| 8.05 mm | 2.400 mm | 24.310 mm |
| 11.85 mm | 2.600 mm | 12.470 mm |
| 15.14 mm | 2.375 mm | 7.335 mm |

These close-focus values should be treated as visualization parameters, not patent-published production measurements.

## Aspherical Surfaces

The design contains one aspherical surface: surface 9, the front surface of L5. In the data file it is labeled `9A`.

The patent's sag equation uses the standard conic-plus-even-polynomial form:

$$
Z(y)=\frac{y^2/R}{1+\sqrt{1-(1+K)(y/R)^2}} + A_4y^4 + A_6y^6 + A_8y^8 + A_{10}y^{10} + A_{12}y^{12}.
$$

The conic constant is used directly as $K$; there is no evidence that the patent uses a shifted $\kappa = K+1$ convention. For surface 9, $K=0$, so the base conic is a sphere.

| Coefficient | Value |
|---|---:|
| $R$ | -31.089 mm |
| $K$ | 0 |
| $A_4$ | -6.64162e-6 |
| $A_6$ | +2.58871e-8 |
| $A_8$ | -8.99837e-10 |
| $A_{10}$ | +1.12233e-11 |
| $A_{12}$ | -5.07106e-14 |

Using the patent's listed effective diameter of 17.80 mm for surface 9, the semi-diameter is 8.90 mm. The polynomial departure from the base sphere is:

| Height | Relative height | Polynomial departure |
|---:|---:|---:|
| 2.225 mm | 25% | -0.000160 mm |
| 4.450 mm | 50% | -0.002511 mm |
| 6.675 mm | 75% | -0.012867 mm |
| 8.900 mm | 100% | -0.041757 mm |

The departure is negative over the working aperture and reaches about -41.8 micrometers at the listed semi-diameter. Since this is a concave-to-object surface on the moving negative focus element, the asphere deepens the rim relative to the base sphere and travels with the focus group. This placement lets the same surface participate in infinity correction and close-focus correction.

## Zoom Mechanism and Image-Circle Behavior

The zoom changes the image-circle size rather than behaving like a rectilinear zoom with a conventional narrowing field angle. The patent describes this explicitly: in a fisheye zoom, zooming changes the area over which the 180° angle of field is achieved.

| Focal length | Image height | Image circle diameter | d10 | BF | Overall length |
|---:|---:|---:|---:|---:|---:|
| 8.05 mm | 11.15 mm | 22.30 mm | 20.89 mm | 40.25 mm | 129.57 mm |
| 11.85 mm | 16.77 mm | 33.54 mm | 9.25 mm | 49.58 mm | 127.26 mm |
| 15.14 mm | 21.64 mm | 43.28 mm | 3.89 mm | 57.66 mm | 129.98 mm |

The short-end image circle is smaller than the 36 x 24 mm full-frame gate, producing a circular image. The long-end image height equals the full-frame half diagonal to standard rounding, producing diagonal fisheye coverage on the full-frame gate. The ratio $Y_t/Y_w = 21.64/11.15 = 1.941$ satisfies the patent's condition (1).

## Conditional Expressions

The Example 1 prescription satisfies all of the patent's reported conditions. The following values were independently recomputed or cross-checked from the prescription and patent Table 4:

| Condition | Meaning | Example 1 value |
|---|---|---:|
| (1) | $Y_t/Y_w$ | 1.94 |
| (2) | $BF_w/|f_1|$ | 3.69 |
| (3) | $SF1=(r_1-r_2)/(r_1+r_2)$ | 0.55 |
| (4) | $n_{G1}$ | 1.804 |
| (5) | First-unit negative-lens APD deviation | 0.019 |
| (6) | Second-unit positive-lens APD deviation | 0.028 |
| (7) | $m_2/f_2$ | 0.650 |
| (8) | $|f_1|/f_2$ | 0.407 |

The numerical checks are important because some patent prose is generalized across embodiments. Here, the Table 1 prescription and Table 4 conditional-expression values are internally consistent.

## Verification Summary

A fresh paraxial ray trace was run from the Table 1 prescription using surface-by-surface refraction. The computed values reproduce the patent's reported focal lengths, back focus values, and unit focal lengths.

| Parameter | Patent | Computed |
|---|---:|---:|
| EFL, short | 8.05 mm | 8.05249 mm |
| EFL, intermediate | 11.85 mm | 11.85145 mm |
| EFL, long | 15.14 mm | 15.14066 mm |
| BF, short | 40.25 mm | 40.25557 mm |
| BF, intermediate | 49.58 mm | 49.58448 mm |
| BF, long | 57.66 mm | 57.66161 mm |
| $f_1$ | -10.91 mm | -10.91219 mm |
| $f_2$ | 26.80 mm | 26.79648 mm |

The surface-by-surface Petzval sum using $\phi/(nn')$ is approximately $-6.01 \times 10^{-4}\ \mathrm{mm}^{-1}$ for the Table 1 prescription. This near-neutral value is consistent with the extensive field-curvature balancing required by a fisheye zoom, but it should not be substituted for real-field astigmatic field behavior.

## Sources

1. US 2012/0013996 A1, "Optical System Having Fisheye Zoom Lens and Optical Apparatus Having the Optical System," Tetsuichirou Okumura / Canon Kabushiki Kaisha. Primary source for prescription data, zoom spacings, aspherical coefficients, conditional expressions, and focusing description.
2. Canon Camera Museum, EF8-15mm f/4L Fisheye USM. Manufacturer source for market introduction, element/group count, 0.15 m closest focusing distance, maximum magnification, size, and weight.
3. Canon regional product specification, EF 8-15mm f/4L Fisheye USM. Manufacturer source for angle-of-view ranges, 14/11 construction, ring USM, 0.15 m closest focusing distance, and f/22 minimum aperture.
4. HOYA Optics Division glass data and cross-reference material. Used for FCD505/FCD515-class and M-TAFD305 matches.
5. OHARA optical glass catalog and glass datasheets. Used for S-LAH65V, S-TIH6, S-LAH58, S-NSL3, S-FSL5, S-FTM16, S-LAH60V, and S-FPL51 matches.
