# CANON EF 20mm f/2.8 USM — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** JP H08-110467 A (特開平8-110467)  
**Application Number:** JP H06-271695  
**Filed:** 11 October 1994  
**Published:** 30 April 1996  
**Inventor:** Tadashi Endo (遠藤 忠志)  
**Applicant:** Canon Inc.  
**Title:** Rear-focus retrofocus photographic lens (リヤーフォーカス式の逆望遠型撮影レンズ)  
**Embodiment analyzed:** Numerical Example 2 (数値実施例2)

Numerical Example 2 is a close patent match to the Canon EF 20mm f/2.8 USM, but it is not presented as a proven factory prescription. Canon has not published the production radii and spacings, and the patent application was filed more than two years after the lens's June 1992 market introduction. The correspondence is therefore convergent rather than documentary.

1. **Focal length and aperture.** Example 2 prints $f=20.49\ \mathrm{mm}$ and $F\mathrm{NO}=1{:}2.9$. Direct paraxial tracing of the re-extracted prescription gives $20.498624\ \mathrm{mm}$. Canon markets the production lens as 20 mm f/2.8.
2. **Field coverage.** The patent gives $2\omega=93.1^\circ$. At the traced EFL, this corresponds to a $43.277661\ \mathrm{mm}$ rectilinear image circle, only $0.011046\ \mathrm{mm}$ larger than the diagonal of a 36 × 24 mm frame. Canon publishes a rounded 94° diagonal field.
3. **Construction.** Example 2 contains eleven elements in nine air-spaced assemblies. Canon publishes the same 11-element/9-group construction.
4. **Architecture.** The patent fixes negative L1 and moves complete positive L2 toward the object for closer focus (§0010). Canon describes the production lens as using a floating rear-focus system. The numerical prescription itself contains one rigid moving optical group rather than separately variable floating subgroups.
5. **Block-diagram correspondence.** Canon's public construction diagram is closer to Patent Figure 2 than Figure 1. The discriminating features are Example 2's thick third front element, $D_5=10.80\ \mathrm{mm}$, and the nearly plane object-side surface of L22, $R_9=-1747.11\ \mathrm{mm}$.
6. **All-spherical prescription.** Example 2 contains no aspherical equation, conic constant, or polynomial coefficient table. The data file therefore remains all-spherical.
7. **Finite-focus consistency.** The patent publishes only infinity $D_6=3.97\ \mathrm{mm}$ and aberration plots at an object-distance label of 2500; it supplies no finite spacing table. A 0.25 m paraxial reconstruction at the printed patent scale gives a magnification magnitude of $0.136334\times$, which rounds to Canon's published $0.14\times$.
8. **Diaphragm metadata.** Canon's English and Japanese Camera Museum records both list six diaphragm blades. The data file records six.

The patent dimensions are retained without focal-length scaling. The marketed 20 mm value is nominal; `focalLengthDesign` records the independently computed $20.498624\ \mathrm{mm}$ EFL.

## Optical Architecture

The lens is an all-spherical, two-principal-group retrofocus prime with a **negative–positive** power sequence. L1 is a fixed divergent front group. L2 is a convergent rear-focus group and contains the aperture stop. Translating complete L2 toward the object shortens $D_6$ and increases the physical distance from the last lens surface to the fixed image plane.

The prescription has eleven elements in nine air-spaced groups:

- L1 consists of three air-spaced singlets, L11–L13.
- L2 consists of three singlets, two cemented doublets, and a final singlet, L21–L28.
- The aperture stop lies between L23 and the L24/L25 cemented pair.

Independent matrix tracing gives the following in-air paraxial focal lengths:

| Assembly                        | Surfaces |   Focal length |
| ------------------------------- | -------: | -------------: |
| Fixed first group L1            |      1–6 | −102.571506 mm |
| Moving second group L2          |     7–21 |  +27.637083 mm |
| L2 object-side section, L21–L23 |     7–12 |  +31.109329 mm |
| L2 image-side section, L24–L28  |    14–21 |  +68.884968 mm |
| Complete system at infinity     |     1–21 |  +20.498624 mm |

The two L2 sectional powers do not add arithmetically because their separation and the stop region are part of the combined matrix.

The radius convention is the standard sequential photographic convention: $R>0$ places the center of curvature to the image side. Under that convention, the numerical prescription agrees with the patent's element-shape prose. L11 and L12 are object-convex negative menisci; L13 is biconvex; L24 and L26 are biconcave; L27 and L28 are biconvex.

The infinity first-to-last-surface track is $75.780000\ \mathrm{mm}$, and the Gaussian back focal distance is $38.387749\ \mathrm{mm}$. Thus

$$
\frac{\mathrm{BFD}}{f}=1.872691,
$$

inside the patent's stated $1.7$–$1.9f$ range. Because BFD exceeds EFL, this is a genuine retrofocus configuration.

## Element-by-Element Analysis

Focal lengths in this section are standalone thick-element focal lengths in air at the printed patent scale unless an assembled cemented-pair value is explicitly identified. A standalone component value is not the component's in-situ contribution inside a cemented assembly.

### L11 — Negative Meniscus, convex to object

**$n_d=1.62299$, $\nu_d=58.2$. Glass: S-BSM15 (OHARA 623582 coordinate equivalent). $f=-96.920882\ \mathrm{mm}$.**

Both radii are positive, and the rear surface is more strongly curved, producing negative power. Together with L12, this element divides the large angular redirection of peripheral bundles across several surfaces. The patent assigns this arrangement to avoiding extreme incidence and emergence angles while restraining front-element diameter (§0012).

### L12 — Negative Meniscus, convex to object

**$n_d=1.60311$, $\nu_d=60.7$. Glass: S-BSM14 (OHARA 603607 coordinate equivalent). $f=-77.741259\ \mathrm{mm}$.**

L12 continues the divergent action of L11. Its stronger rear curvature makes it the more powerful of the two front negative menisci. The pair supplies the principal retrofocus divergence without concentrating the bending in one element.

### L13 — Biconvex Positive

**$n_d=1.58313$, $\nu_d=59.4$. Glass: S-BAL42 (OHARA 583594 coordinate equivalent). $f=+90.148977\ \mathrm{mm}$.**

L13 is a thick biconvex positive element. The patent specifically assigns it to correction of distortion generated by L11 and L12, reducing the distortion-correction burden on L2 (§0013). Its $10.80\ \mathrm{mm}$ center thickness is also one of the features distinguishing Example 2 from Example 1.

### L21 — Negative Meniscus, convex to object

**$n_d=1.77250$, $\nu_d=49.6$. Glass: S-LAH66 (OHARA 773496 historical/current special-order coordinate match). $f=-24.995070\ \mathrm{mm}$.**

L21 begins the moving rear group with a strong negative meniscus. The patent uses this position to preserve back focus and reduce off-axis incidence at the first surface of L2 (§0021). With $\nu_d=49.6$, the glass lies on the flint side of the usual crown/flint boundary and is properly described as a dense lanthanum flint.

### L22 — Positive Meniscus, convex to image

**$n_d=1.80518$, $\nu_d=25.4$. Glass: PBH6 / S-TIH6 coordinate (OHARA 805254 equivalent; actual melt unspecified). $f=+57.454380\ \mathrm{mm}$.**

The object-side surface is nearly plane at $R_9=-1747.11\ \mathrm{mm}$, while the rear surface is strongly negative. The resulting positive meniscus is convex toward the image. The patent assigns L22 to correction of negative distortion generated by L1 (§0022).

### L23 — Biconvex Positive

**$n_d=1.51633$, $\nu_d=64.2$. Glass: S-BSL7 (OHARA 516641 coordinate equivalent; catalog $\nu_d=64.14$). $f=+26.020910\ \mathrm{mm}$.**

L23 is a strong biconvex positive element immediately before the stop. The patent assigns it to correction of distortion and of spherical aberration generated by L21 (§0022). Its glass is a borosilicate crown coordinate, not an ED designation.

### L24–L25 — Cemented Negative/Positive Pair D1

#### L24 — Biconcave Negative

**$n_d=1.62096$, $\nu_d=35.9$. Glass: TIM11 (OHARA historical 621359 exact coordinate match). Standalone $f=-13.358232\ \mathrm{mm}$.**

L24 is the strongly negative biconcave component of D1.

#### L25 — Positive Meniscus, convex to object

**$n_d=1.80518$, $\nu_d=25.4$. Glass: PBH6 / S-TIH6 coordinate (OHARA 805254 equivalent; actual melt unspecified). Standalone $f=+18.432337\ \mathrm{mm}$.**

At the cemented interface,

$$
N_{25}-N_{24}=1.80518-1.62096=0.18422,
$$

which satisfies condition (4). The patent assigns D1, and particularly its high-index-step cemented surface, to sagittal-halo and chromatic correction (§§0022–0024).

The assembled pair has an in-situ focal length of **$-44.805597\ \mathrm{mm}$**. This exposes a patent-internal contradiction: §0022 calls the cemented lens positive, but the numerical prescription traces negative. Numerical Example 1 independently gives $-45.970463\ \mathrm{mm}$ for the corresponding pair. The numerical tables therefore take precedence over the prose adjective.

### L26–L27 — Cemented Negative/Positive Pair D2

#### L26 — Biconcave Negative

**$n_d=1.84666$, $\nu_d=23.9$. Glass: PBH53 (OHARA historical 847239 exact coordinate match). Standalone $f=-19.933002\ \mathrm{mm}$.**

L26 is a high-index dense-flint negative component. PBH53 is the direct historical coordinate match; the modern S-TIH53WN designation is not used because OHARA introduced it in 2025.

#### L27 — Biconvex Positive

**$n_d=1.48749$, $\nu_d=70.2$. Glass: S-FSL5 (OHARA 487702 coordinate match). Standalone $f=+20.530523\ \mathrm{mm}$.**

L27 is a low-dispersion crown. The assembled D2 doublet has a weak positive focal length of **$+179.750108\ \mathrm{mm}$**. The patent treats D2 together with L28 as a section that balances spherical aberration and coma while preserving back focus (§0022). The Abbe number is high, but the coordinate is not identified as fluorophosphate or UD glass.

### L28 — Biconvex Positive

**$n_d=1.77250$, $\nu_d=49.6$. Glass: S-LAH66 (OHARA 773496 historical/current special-order coordinate match). $f=+49.516740\ \mathrm{mm}$.**

L28 is the final positive singlet. The patent assigns it, together with D2, to the final balance of spherical aberration, coma, and back-focus requirements (§0022).

## Glass Identification and Selection

The patent names no glass manufacturer and publishes only $n_d$ and $\nu_d$. The identifications below are catalog-coordinate matches, not claims about Canon's procurement. Current OHARA catalog entries were used where the exact coordinate remains available; OHARA's all-products data supplied the discontinued TIM11 and PBH53 rows, while the historical catalog supplied PBH6.

| Elements | Patent coordinate | OHARA catalog identification          |        Catalog residual at patent precision | Classification         |
| -------- | ----------------: | ------------------------------------- | ------------------------------------------: | ---------------------- |
| L11      |    1.62299 / 58.2 | S-BSM15, code 623582                  | $\Delta n_d=+0.000002$, $\Delta\nu_d=-0.04$ | Dense barium crown     |
| L12      |    1.60311 / 60.7 | S-BSM14, code 603607                  | $\Delta n_d=+0.000002$, $\Delta\nu_d=-0.06$ | Dense barium crown     |
| L13      |    1.58313 / 59.4 | S-BAL42, code 583594                  | $\Delta n_d=-0.000004$, $\Delta\nu_d=-0.02$ | Barium crown           |
| L21, L28 |    1.77250 / 49.6 | S-LAH66, code 773496                  |  $\Delta n_d=-0.000001$, $\Delta\nu_d=0.00$ | Dense lanthanum flint  |
| L22, L25 |    1.80518 / 25.4 | PBH6 / S-TIH6 coordinate, code 805254 | $\Delta n_d=+0.000001$, $\Delta\nu_d=+0.02$ | Dense flint            |
| L23      |    1.51633 / 64.2 | S-BSL7, code 516641                   |  $\Delta n_d=0.000000$, $\Delta\nu_d=-0.06$ | Borosilicate crown     |
| L24      |    1.62096 / 35.9 | TIM11, code 621359                    |                Exact at published precision | Flint                  |
| L26      |    1.84666 / 23.9 | PBH53, code 847239                    |                Exact at published precision | High-index dense flint |
| L27      |    1.48749 / 70.2 | S-FSL5, code 487702                   |  $\Delta n_d=0.000000$, $\Delta\nu_d=+0.03$ | Low-dispersion crown   |

The design uses strong index and dispersion contrasts rather than a named UD or fluorite element. The patent expressly assigns chromatic correction to D1 but makes no apochromatic claim. Catalog $n_C$, $n_F$, and $n_g$ values are included in the data file so chromatic tracing need not fall back to an Abbe-only approximation.

## Focus Mechanism

L1 is fixed. Complete L2, including the aperture stop, moves toward the object from infinity to closer focus (§0010). The patent marks $D_6$ as variable but supplies only its infinity value. Figures 5 and 6 are aberration plots at infinity and at an object-distance label of 2500; they are not finite prescription tables and do not disclose a second $D_6$ value or the distance datum.

For visualization, the data file reconstructs a close state from Canon's 0.25 m minimum-focus specification. The reconstruction treats 250 mm as image-plane-to-object distance, holds the image plane fixed, and translates the complete L2 group until the paraxial object-to-image matrix has $B=0$.

| State             | Object distance |       $D_6$ |              L2 travel |    State EFL | Gaussian BFD | Rear surface to fixed image | First-to-last track | Paraxial magnification |
| ----------------- | --------------: | ----------: | ---------------------: | -----------: | -----------: | --------------------------: | ------------------: | ---------------------: |
| Infinity          |        $\infty$ | 3.970000 mm |                      0 | 20.498624 mm | 38.387749 mm |                38.387749 mm |        75.780000 mm |                      0 |
| Reconstructed MFD |          250 mm | 0.992301 mm | 2.977699 mm objectward | 20.949716 mm | 38.509292 mm |                41.365448 mm |        72.802301 mm |             −0.136334× |

The magnification magnitude rounds to Canon's published $0.14\times$. The reconstructed gaps remain a paraxial visualization model, not patent-tabulated or factory-measured focus positions. Canon identifies the production drive as USM and documents full-time manual focusing; those mechanical characteristics do not alter the patent prescription.

## Data-File Reconstruction Choices

### Prescription scale

The prescription is not normalized. Direct tracing gives

$$
f=20.4986244938\ \mathrm{mm}
$$

against the patent's rounded $20.49\ \mathrm{mm}$. Retaining the printed dimensions also makes the patent's $93.1^\circ$ field correspond almost exactly to the 35 mm-format diagonal and produces a reconstructed $0.136334\times$ close-focus magnification. No production focal-length scaling is therefore applied.

### Aperture and field

The patent design aperture is f/2.9. The production data uses Canon's marketed f/2.8. The infinity pre-stop paraxial matrix has $A=1.89484971$. A stop semi-diameter of

$$
6.936038\ \mathrm{mm}
$$

produces a $3.660469\ \mathrm{mm}$ entrance-pupil radius and f/2.800000. A patent-faithful f/2.9 stop would instead have a $6.696864\ \mathrm{mm}$ semi-diameter.

The data file declares Canon's rounded 94° diagonal rectilinear field. The patent's 93.1° source-design value remains separately documented.

### Inferred semi-diameters

The patent provides no effective-diameter column. The data-file semi-diameters are renderer-safe optical clear-aperture estimates, not mechanical measurements. They were constrained by the f/2.8 marginal and chief-ray envelopes, Canon's construction diagram and 72 mm filter envelope, and the project's geometry rules.

The final checks are:

- Maximum spherical rim ratio: $sd/|R|=0.882041$ at surface 2.
- Maximum signed cross-gap sag-intrusion ratio: $0.897960$ across the surface 8–9 air gap.
- Maximum front/rear semi-diameter ratio within an element: $1.25$ at L11 and L27.
- Minimum shared-aperture edge thickness: $0.920153\ \mathrm{mm}$ at L27.
- Second-smallest shared-aperture edge thickness: $0.944741\ \mathrm{mm}$ at L28; every remaining element exceeds $1.95\ \mathrm{mm}$.
- At the 0.42 display-field fraction, the tightest infinity ray-envelope clearances are $0.030910\ \mathrm{mm}$ at surface 8 and $0.054986\ \mathrm{mm}$ at surface 16.

The off-axis display field fraction is 0.42 because the design has strong natural wide-open vignetting. The inferred apertures are not enlarged beyond the verified sag and edge-thickness limits merely to force a full-field display ray fan.

## Conditional Expressions

The patent defines $f_1$ as the first-group focal length, $DT_1$ as the first-to-last surface distance of L1, $f$ as the complete-system focal length, $DT$ as the infinity first-to-last lens-surface distance, and $S$ as the infinity L1–L2 air gap (§§0009, 0014). Independent tracing and summation give

$$
f_1=-102.571506\ \mathrm{mm},\quad f=20.498624\ \mathrm{mm},\quad S=3.970000\ \mathrm{mm},
$$

$$
DT_1=26.860000\ \mathrm{mm},\quad DT=75.780000\ \mathrm{mm}.
$$

| Condition | Published form             | Computed Example 2 | Patent Table 1 | Result    |
| --------- | -------------------------- | -----------------: | -------------: | --------- |
| (1)       | $4<\lvert f_1/f\rvert<6.5$ |           5.003824 |           5.01 | Satisfied |
| (2)       | $0.1<S/f<0.5$              |           0.193672 |           0.19 | Satisfied |
| (3)       | $0.25<DT_1/DT<0.5$         |           0.354447 |           0.35 | Satisfied |
| (4)       | $0.1<N_{25}-N_{24}$        |           0.184220 |           0.18 | Satisfied |

All four independently calculated values reproduce Patent Table 1 after rounding.

## Verification Summary

The Example 2 prescription was re-extracted directly from patent pages 4–5. Two independent paraxial formulations, using $[y,n\theta]$ and $[y,\theta]$, agree. The infinity system matrix in the reduced-angle formulation is

$$
M=
\begin{bmatrix}
1.8726987793 & 57.0288353\\
-0.0487837611 & -0.9516111689
\end{bmatrix},
\qquad \det M=1.0000000000.
$$

| Quantity                                 | Patent or manufacturer statement |                    Independent result |
| ---------------------------------------- | -------------------------------: | ------------------------------------: |
| Example 2 EFL                            |                         20.49 mm |                          20.498624 mm |
| Example 2 full field                     |                            93.1° | 43.277661 mm rectilinear image circle |
| Infinity BFD                             |             generally 1.7–1.9$f$ |            38.387749 mm = 1.872691$f$ |
| Infinity first-to-last track             |                          derived |                          75.780000 mm |
| Infinity first-surface-to-image distance |                          derived |                         114.167749 mm |
| L1 focal length                          |         not separately tabulated |                        −102.571506 mm |
| L2 focal length                          |         not separately tabulated |                         +27.637083 mm |
| D1 assembled focal length                |          prose calls it positive |                         −44.805597 mm |
| D2 assembled focal length                |                    not tabulated |                        +179.750108 mm |
| Petzval sum                              |                    not tabulated |                     +0.007193850 mm⁻¹ |
| Petzval-curvature magnitude              |                    not tabulated |                         139.007618 mm |

The Petzval result uses the surface-by-surface expression

$$
P=\sum_i\frac{\Phi_i}{n_i n_i'},
\qquad
\Phi_i=\frac{n_i'-n_i}{R_i},
$$

rather than a sum of isolated thin-element powers. The aperture stop contributes zero.

Numerical Example 1 was also re-entered as an independent transcription check. It traces to $20.000360\ \mathrm{mm}$ against the printed 20.0 mm, with BFD $38.080594\ \mathrm{mm}$ and condition values 4.842916, 0.204496, 0.332054, and 0.184220. These reproduce Patent Table 1 after rounding and confirm that D1's net-negative result is not an Example 2 transcription error.

## Sources

1. Canon Inc., **JP H08-110467 A**, _Rear-focus retrofocus photographic lens_, claims 1–2, §§0001–0027, Numerical Examples 1–2, Table 1, and Figures 1–6.
2. [Canon Camera Museum — EF20mm f/2.8 USM](https://global.canon/en/c-museum/product/ef312.html): June 1992 market date, 11-element/9-group construction, six blades, 0.25 m minimum focus, 0.14× magnification, rear-focus description, 72 mm filter, and construction diagram.
3. [Canon U.S.A. — EF 20mm f/2.8 USM support specifications](https://www.usa.canon.com/support/p/ef-20mm-f-2-8-usm): 20 mm f/2.8, 94° diagonal field, 11/9 construction, 0.25 m minimum focus, rear focus, and USM.
4. [Canon Camera Museum (Japanese) — EF20mm F2.8 USM](https://global.canon/ja/c-museum/product/ef312.html): six blades, USM, full-time manual focus, and fixed-length/nonrotating-filter operation.
5. [OHARA — Optical Glass Catalog Downloads](https://www.ohara-inc.co.jp/en/product/catalog/): current six-decimal catalog coordinates and the 1 July 2026 all-products Zemax data, including discontinued TIM11 and PBH53 rows.
6. OHARA, **Optical Glass Catalog 2001**, direct entries for S-BSL7, PBH6, TIM11, PBH53, and related coordinate equivalents.
