# CANON EF 20mm f/2.8 USM — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** JP H08-110467 A (特開平8-110467)  
**Application Number:** JP H06-271695  
**Filed:** 11 October 1994  
**Published:** 30 April 1996  
**Inventor:** Hiroshi Endo (遠藤 宏志)\
**Applicant:** Canon Inc.  
**Title:** Rear-focus retrofocus photographic lens (リヤーフォーカス式の逆望遠型撮影レンズ)  
**Example details:** Numerical Example 2 (数値実施例2), PDF pages 4–5 (printed columns 5–8); corresponding Fig. 2 on PDF page 5.

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

**$n=1.62299$, $\nu=58.2$. Glass: Unmatched; source reference unspecified; qualified d-line coordinate candidate S-BSM15 (OHARA 623582 coordinate equivalent). $f=-96.920882\ \mathrm{mm}$.**

Both radii are positive, and the rear surface is more strongly curved, producing negative power. Together with L12, this element divides the large angular redirection of peripheral bundles across several surfaces. The patent assigns this arrangement to avoiding extreme incidence and emergence angles while restraining front-element diameter (§0012).

### L12 — Negative Meniscus, convex to object

**$n=1.60311$, $\nu=60.7$. Glass: Unmatched; source reference unspecified; qualified d-line coordinate candidate S-BSM14 (OHARA 603607 coordinate equivalent). $f=-77.741259\ \mathrm{mm}$.**

L12 continues the divergent action of L11. Its stronger rear curvature makes it the more powerful of the two front negative menisci. The pair supplies the principal retrofocus divergence without concentrating the bending in one element.

### L13 — Biconvex Positive

**$n=1.58313$, $\nu=59.4$. Glass: Unmatched; source reference unspecified; qualified d-line coordinate candidate S-BAL42 (OHARA 583594 coordinate equivalent). $f=+90.148977\ \mathrm{mm}$.**

L13 is a thick biconvex positive element. The patent specifically assigns it to correction of distortion generated by L11 and L12, reducing the distortion-correction burden on L2 (§0013). Its $10.80\ \mathrm{mm}$ center thickness is also one of the features distinguishing Example 2 from Example 1.

### L21 — Negative Meniscus, convex to object

**$n=1.77250$, $\nu=49.6$. Glass: Unmatched; source reference unspecified; qualified d-line coordinate candidate S-LAH66 (OHARA 773496 historical/current special-order coordinate match). $f=-24.995070\ \mathrm{mm}$.**

L21 begins the moving rear group with a strong negative meniscus. The patent uses this position to preserve back focus and reduce off-axis incidence at the first surface of L2 (§0021). Its numerical coordinate is compatible with a dense lanthanum-flint catalog candidate; this does not establish source chemistry.

### L22 — Positive Meniscus, convex to image

**$n=1.80518$, $\nu=25.4$. Glass: Unmatched; source reference unspecified; qualified d-line coordinate candidate PBH6 / S-TIH6 coordinate (OHARA 805254 equivalent; actual melt unspecified). $f=+57.454380\ \mathrm{mm}$.**

The object-side surface is nearly plane at $R_9=-1747.11\ \mathrm{mm}$, while the rear surface is strongly negative. The resulting positive meniscus is convex toward the image. The patent assigns L22 to correction of negative distortion generated by L1 (§0022).

### L23 — Biconvex Positive

**$n=1.51633$, $\nu=64.2$. Glass: Unmatched; source reference unspecified; qualified d-line coordinate candidate S-BSL7 (OHARA 516641 coordinate equivalent; catalog $\nu=64.14$). $f=+26.020910\ \mathrm{mm}$.**

L23 is a strong biconvex positive element immediately before the stop. The patent assigns it to correction of distortion and of spherical aberration generated by L21 (§0022). Its numerical coordinate is compatible with a borosilicate-crown catalog candidate; no ED identification is supplied.

### L24–L25 — Cemented Negative/Positive Pair D1

#### L24 — Biconcave Negative

**$n=1.62096$, $\nu=35.9$. Glass: Unmatched; source reference unspecified; qualified d-line coordinate candidate TIM11 (OHARA historical 621359 exact coordinate match). Standalone $f=-13.358232\ \mathrm{mm}$.**

L24 is the strongly negative biconcave component of D1.

#### L25 — Positive Meniscus, convex to object

**$n=1.80518$, $\nu=25.4$. Glass: Unmatched; source reference unspecified; qualified d-line coordinate candidate PBH6 / S-TIH6 coordinate (OHARA 805254 equivalent; actual melt unspecified). Standalone $f=+18.432337\ \mathrm{mm}$.**

At the cemented interface,

$$
N_{25}-N_{24}=1.80518-1.62096=0.18422,
$$

which satisfies condition (4). The patent assigns D1, and particularly its high-index-step cemented surface, to sagittal-halo and chromatic correction (§§0022–0024).

The assembled pair has an in-situ focal length of **$-44.805597\ \mathrm{mm}$**. This exposes a patent-internal contradiction: §0022 calls the cemented lens positive, but the numerical prescription traces negative. Numerical Example 1 independently gives $-45.970463\ \mathrm{mm}$ for the corresponding pair. The numerical tables therefore take precedence over the prose adjective.

### L26–L27 — Cemented Negative/Positive Pair D2

#### L26 — Biconcave Negative

**$n=1.84666$, $\nu=23.9$. Glass: Unmatched; source reference unspecified; qualified d-line coordinate candidate PBH53 (OHARA historical 847239 exact coordinate match). Standalone $f=-19.933002\ \mathrm{mm}$.**

L26 is a high-index dense-flint negative component. PBH53 is a qualified historical d-line coordinate candidate; the source supplies no glass trade name or chemistry.

#### L27 — Biconvex Positive

**$n=1.48749$, $\nu=70.2$. Glass: Unmatched; source reference unspecified; qualified d-line coordinate candidate S-FSL5 (OHARA 487702 coordinate match). Standalone $f=+20.530523\ \mathrm{mm}$.**

L27 has a high source Abbe number and a compatible low-dispersion-crown coordinate candidate. The assembled D2 doublet has a weak positive focal length of **$+179.750108\ \mathrm{mm}$**. The patent treats D2 together with L28 as a section that balances spherical aberration and coma while preserving back focus (§0022). The Abbe number is high, but the coordinate is not identified as fluorophosphate or UD glass.

### L28 — Biconvex Positive

**$n=1.77250$, $\nu=49.6$. Glass: Unmatched; source reference unspecified; qualified d-line coordinate candidate S-LAH66 (OHARA 773496 historical/current special-order coordinate match). $f=+49.516740\ \mathrm{mm}$.**

L28 is the final positive singlet. The patent assigns it, together with D2, to the final balance of spherical aberration, coma, and back-focus requirements (§0022).

## Glass Identification and Selection

The original defines N and ν as refractive index and Abbe number (§0025, PDF page 4), without identifying a d/e
reference. The d/g line legend on PDF page 5 belongs to the aberration plots and does not specify the numerical
prescription's reference. All eleven source pairs are retained with explicit Unmatched labels and index-reference
notes; default d-line tracing is an approximation. Coefficient-curve coverage remains 0/11 under that uncertainty.

The 33 previous per-lens C/F/g fields were catalog-derived copies, not printed source measurements, and are removed.
The original publishes no element line indices, partial dispersion, APD number or glass trade name. No source filter,
rear plate, hybrid resin or separately indexed cement is present in the selected example. The two bonded interfaces
remain transitions between the published bulk media. Candidate catalog names do not identify historical supplier,
melt, chemistry or production glass.

| Elements | Retained source N / ν | Qualified d-line coordinate candidate |
| -------- | --------------------- | ------------------------------------- |
| L11      | 1.62299 / 58.2        | S-BSM15                               |
| L12      | 1.60311 / 60.7        | S-BSM14                               |
| L13      | 1.58313 / 59.4        | S-BAL42                               |
| L21, L28 | 1.77250 / 49.6        | S-LAH66                               |
| L22, L25 | 1.80518 / 25.4        | PBH6 / S-TIH6                         |
| L23      | 1.51633 / 64.2        | S-BSL7                                |
| L24      | 1.62096 / 35.9        | TIM11                                 |
| L26      | 1.84666 / 23.9        | PBH53                                 |
| L27      | 1.48749 / 70.2        | S-FSL5                                |

The patent assigns chromatic correction to D1 but makes no apochromatic claim. Source Abbe values constrain the
approximate chromatic trace; no candidate catalog curve is promoted to source spectral evidence.

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

The patent design aperture is f/2.9 and the data file derives its physical iris from that design value by real-ray
tracing. The stop is located at source R13, with D12 = 0.73 mm before it and D13 = 3.50 mm after it. No explicit
stop radius is authored.

The data file declares Canon's rounded 94° diagonal rectilinear field. The patent's 93.1° source-design value remains separately documented.

### Inferred semi-diameters

The patent provides no effective-diameter column. The data-file semi-diameters are renderer-safe optical clear-aperture estimates, not mechanical measurements. They were constrained by the f/2.8 marginal and chief-ray envelopes, Canon's construction diagram and 72 mm filter envelope, and the project's geometry rules.

Fresh native Fig. 2 review on 2026-10-30 resolves separate vertical air-facing shoulders on S2, S4 and S8.
S2/S8 retain their clear caps of 20.9 and 7.420502 mm; S4 changes from 17.0 to 16.0 mm,
following its native cap/outer-height ratio near 0.88. The drawn outer radii become 25.62328, 18.0 and
8.8 mm, respectively. S2/S4 follow the opposite faces' retained inferred heights; S8 stops short of its
9.019395 mm front face to preserve the unchanged cross-gap guard. These are qualified outline estimates,
not patent-tabulated diameters. All other clear apertures and all source R/d remain unchanged. No bonded-interface land,
inferred concave-end cut or opaque resin feature is added.

The largest current clear-cap ratio is sd/|R| = 0.899312 at S2. The retained L27 and L28 shared-aperture
edge thicknesses are approximately 0.920 and 0.945 mm. S8's 9.019395 mm outer-height trial exceeded the unchanged
cross-gap allowance by about 0.001 mm, so its adopted drawn height is 8.8 mm. No optical cap is enlarged to repair
that trial, and the 90% gap guard is retained.

The off-axis display field fraction is 0.42 because the design has strong natural wide-open vignetting. The inferred apertures are not enlarged beyond the verified sag and edge-thickness limits merely to force a full-field display ray fan.

### Source review and runtime qualification — 2026-10-30

The native Figure 2 raster is 677 × 262 pixels at about 201 × 203 dpi. Native endpoint readings support S2/S4/S8
shoulders; the outline estimates carry roughly ±0.5 mm local reading uncertainty plus the drawing's schematic scale
uncertainty. A 4× nearest-neighbor view was only a viewing aid. The absolute clear apertures remain inferred, and
neither the figure nor the native pixel count supplies factory blank dimensions. All eleven elements, concave ends
and both bonded interfaces were inspected. No unsupported interface shoulder or equal-height block is added.

Actual SVGs at infinity, middle and reconstructed close focus show eleven connected finite closed element paths.
A 21-position focus grid has zero hidden renderer trim. A 49-point stop-aimed pupil sample passes every axial ray
at each position; all sampled chiefs at axial, 0.6-field and full-field positions clear, with no unaimed sample.
Infinity source-half-field sampling uses 46.55°; finite checks use each current paraxial conjugate and nominal format
height. Corner pupil survival is 21/49 at infinity and 26/49 at the reconstructed close state, with clipping at
ordinary air-facing rims and occasionally bonded S15. These are sampling results, not full-aperture peripheral
transmission certification. The 47° declared field reaches about 99% of the full-frame half-diagonal under exact
tracing; the separate corner solve is clear near 47.2°. This real-ray result is distinct from the paraxial source-field
coverage calculation above. No inferred cut is present. Source fidelity, runtime clearance and production correlation
remain separate conclusions.

The original front page prints inventor 遠藤 宏志; the prior Tadashi Endo / 遠藤 忠志 transcription is corrected to
the repository's Hiroshi Endo name. This bibliographic correction does not alter the prescription.

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

## Prescription Cross-Checks

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
