# CANON EF 24mm f/1.4 L II USM — Numerical Example 3

## Patent Reference and Design Identification

**Patent:** US 2010/0033848 A1  
**Application Number:** 12/536,307  
**Priority:** 7 August 2008, JP 2008-204028  
**Filed:** 5 August 2009  
**Published:** 11 February 2010  
**Inventor:** Takahiro Hatada  
**Assignee:** Canon Kabushiki Kaisha  
**Title:** *Optical System and Image Pickup Apparatus Having the Same*  
**Embodiment analyzed:** Third exemplary embodiment; Numerical Example 3; Figures 5–6; ¶¶0104–0106 and ¶0120

The publication does not name a commercial lens. The identification of Numerical Example 3 with the Canon EF 24mm f/1.4 L II USM is therefore a convergent correlation rather than an explicit patent statement.

1. **Focal length and aperture.** The patent gives 24.54 mm and f/1.45. Canon markets the production lens as 24 mm f/1.4. The numerical prescription is retained without scaling; patent and marketed values remain separate.
2. **Construction.** Numerical Example 3 contains 13 elements in 10 air-separated groups. Canon publishes the same 13-element/10-group construction.
3. **Special-element positions.** Patent surfaces 4 and 23 are aspherical, placing the aspheres on E2 and E13. The repeated 1.49700/81.5 pair occurs in E4 and E9. Canon's official block diagram marks the second and thirteenth elements as aspherical and the fourth and ninth as UD. The order and positions coincide, not merely the totals.
4. **Format and field.** The patent image height is 21.64 mm, corresponding to a 43.28 mm image circle. The computed rectilinear paraxial field is 82.8166° diagonal; the patent gives 41.4° half-field and Canon publishes 84° diagonal.
5. **Focus behavior.** The patent keeps L1 fixed and translates the complete L2 unit toward the object for closer focus (¶0096). A rigid-L2 paraxial solution constrained to Canon's 0.25 m minimum focusing distance gives 4.2166 mm objectward travel and 0.1685× magnification, consistent with Canon's 0.17× specification. This is a consistency test, not a published barrel cam law.
6. **Timing.** The Japanese priority date precedes Canon's 2008 introduction of the production lens. Timing is compatible with a production-related design but is not sufficient evidence on its own.

Numerical Examples 1 and 2 are approximately 35 mm designs (34.59 and 34.81 mm) with 12 elements in 9 groups. They do not reproduce the 24 mm focal length, construction, or special-element positions of the production lens.

## Optical Architecture

The prescription is a large-aperture rectilinear **retrofocus wide-angle** for an SLR image space. The computed infinity back focal distance is 38.4759 mm and the effective focal length is 24.5386 mm, giving $BF/f=1.567973$. Because $BF>f$, the design has the long rear clearance characteristic of a retrofocus SLR lens. The surface-1-to-image track is 129.36 mm, or 5.2717 times the EFL; it is not a telephoto construction.

The optical train contains 13 elements in 10 air-separated groups:

- **First unit L1:** E1–E9, surfaces 1–16, computed focal length $+116.6815$ mm.
- **Aperture stop:** surface 17, 3.40 mm behind surface 16 and 6.64 mm ahead of surface 18 at infinity.
- **Second unit L2:** E10–E13, surfaces 18–24, computed focal length $+37.3801$ mm.

Example 3 is not a simple negative-front/positive-rear thin-lens split. The patent states that L1 is positive in this embodiment (¶0105), and the independent trace confirms it. Retrofocus behavior instead arises from the principal-plane locations and from strong negative elements and negative cemented subgroups embedded within the two positive units.

The chromatic design is distributed through L1. E4 is the negative anomalous-dispersion lens GNF, E8 is the negative lens GN, and E9 is the positive anomalous-dispersion lens GP. Their different chief-ray heights relative to the stop are central to the patent's axial- and lateral-color correction argument (¶¶0046–0064 and ¶¶0081–0093).

## Element-by-Element Analysis

The focal lengths below are standalone in-air thick-lens values. For cemented components, these values do not describe the power of the assembled cemented group.

### E1 — Negative meniscus, convex to object

**$n_d=1.83481$, $\nu_d=42.7$. Glass: S-LAH55V-class representative rounded match; vendor not disclosed. $f=-58.097$ mm.**

Both radii are positive, and their curvature ordering gives a negative meniscus with the convex face toward the object. E1 begins the angular redistribution required for the long-back-focus layout while carrying the largest clear aperture in the system.

OHARA S-LAH55V reproduces the patent pair to the displayed precision ($n_d=1.83481$, $\nu_d=42.73$). The patent does not identify a supplier, so this is a catalog-class match rather than a vendor attribution.

### E2 — Negative meniscus, convex to object; rear asphere

**$n_d=1.58373$, $\nu_d=59.0$. Glass: unmatched glass-moldable crown; S-BAL42/L-BAL42 class. $f=-70.490$ mm.**

E2 is the second negative front meniscus. Its rear surface, 4A, is aspherical. The position corresponds to the first glass-molded asphere shown in Canon's official production block diagram.

No reviewed current manufacturer catalog reproduces both patent coordinates. OHARA S-BAL42 is nearby at $n_d=1.58313$, $\nu_d=59.38$, leaving residuals of approximately $(-0.00060,+0.38)$. The element is therefore left explicitly unmatched.

### E3 — Biconvex positive

**$n_d=1.88300$, $\nu_d=40.8$. Glass: S-LAH58-class representative rounded match; vendor not disclosed. $f=+60.091$ mm.**

E3 begins the strong positive core of L1 after the two front negative menisci. Its high refractive index supplies positive power without requiring still steeper surface curvatures. OHARA S-LAH58 reproduces the displayed pair ($n_d=1.88300$, $\nu_d=40.76$).

### E4 — Biconcave negative GNF; cemented to E5

**$n_d=1.49700$, $\nu_d=81.5$. Glass: anomalous low-dispersion crown, S-FPL51 class. $f=-56.733$ mm.**

The patent designates E4 as GNF (¶¶0084–0092 and ¶0104): a negative lens with high Abbe number and positive anomalous partial dispersion, located well ahead of the stop where the chief ray has substantial height. Canon's production block diagram marks the same fourth element as UD.

E4 is cemented to E5. Its standalone negative power must not be confused with the assembled E4–E5 pair, whose computed net focal length is $+232.932$ mm.

### E5 — Biconvex positive; cemented to E4

**$n_d=1.83481$, $\nu_d=42.7$. Glass: S-LAH55V-class representative rounded match; vendor not disclosed. $f=+46.509$ mm.**

The large dispersion contrast between E4 and E5 gives the cemented pair chromatic leverage while leaving only weak positive net power. The patent discusses the correction at the GNF and unit levels rather than assigning complete correction to a single refracting surface.

### E6 — Biconvex positive; cemented to E7

**$n_d=1.83400$, $\nu_d=37.2$. Glass: S-LAH60V-class representative rounded match; vendor not disclosed. $f=+25.775$ mm.**

E6 is a strong positive component. OHARA S-LAH60V reproduces the patent pair to the displayed precision ($n_d=1.83400$, $\nu_d=37.21$). It is cemented to E7.

### E7 — Biconcave negative; cemented to E6

**$n_d=1.60342$, $\nu_d=38.0$. Glass: S-TIM5-class representative rounded match; vendor not disclosed. $f=-22.732$ mm.**

E7 nearly cancels E6's paraxial power. The computed E6–E7 cemented net is $f=-2551.887$ mm, nearly afocal despite the large and opposite standalone powers of its components. OHARA S-TIM5 reproduces the displayed pair ($n_d=1.60342$, $\nu_d=38.03$).

### E8 — Biconcave negative GN

**$n_d=1.65412$, $\nu_d=39.7$. Glass: BPH5 (historical OHARA 654397 spectral match; supplier inferred). $f=-58.423$ mm.**

The patent identifies E8 as GN (¶¶0081–0082 and ¶0105). Patent Table 1 gives $\theta_{gF}=0.57$, which is 0.0070246 below the patent reference line and satisfies condition (1b). OHARA's discontinued BPH5 row reproduces $n_d=1.654115$, $\nu_d=39.687638$, and $P_{gF}=0.570882$, matching all three published coordinates after rounding. The patent does not disclose a vendor, so this is a catalog-spectrum match rather than a procurement claim.

### E9 — Biconvex positive GP

**$n_d=1.49700$, $\nu_d=81.5$. Glass: anomalous low-dispersion crown, S-FPL51 class. $f=+38.995$ mm.**

The patent designates E9 as GP (¶¶0046–0063 and ¶0105). Its rear surface is only 3.40 mm ahead of the stop, where the off-axis chief-ray height is comparatively small. This placement supports the patent's strategy of using positive anomalous dispersion principally for axial-color correction while limiting lateral-color growth. Canon's block diagram marks E9 as the second UD element.

### E10 — Positive meniscus, concave to object; cemented to E11

**$n_d=1.48749$, $\nu_d=70.2$. Glass: S-FSL5-class representative rounded match; vendor not disclosed. $f=+138.452$ mm.**

E10 begins the moving rear unit L2. Its two negative radii and curvature ordering produce a positive meniscus with the concave face toward the object, agreeing with ¶0106. OHARA S-FSL5 reproduces the displayed pair ($n_d=1.48749$, $\nu_d=70.23$).

### E11 — Negative meniscus, convex to image; cemented to E10

**$n_d=1.84666$, $\nu_d=23.8$. Glass: S-TIH53-class representative rounded match; vendor not disclosed. $f=-29.408$ mm.**

E11 is the high-dispersion negative partner to E10. The cemented E10–E11 assembly has a computed net focal length of -34.441 mm and forms the negative front subgroup of the otherwise positive L2 unit. OHARA S-TIH53 reproduces the displayed pair ($n_d=1.84666$, $\nu_d=23.78$).

### E12 — Biconvex positive

**$n_d=1.61800$, $\nu_d=63.4$. Glass: short-crown class, catalog code 618634; vendor not disclosed. $f=+36.740$ mm.**

E12 supplies strong positive power in L2. CDGM H-ZPK1A has $n_d=1.618000$ and $\nu_d=63.39$, reproducing the patent's displayed 1.61800/63.4 pair after rounding. OHARA S-PHM52 shares the index but has $\nu_d=63.33$, which rounds to 63.3 rather than 63.4. The patent does not identify a supplier, and matching $n_d/\nu_d$ alone does not establish a unique spectral model; the data file therefore retains a generic 618634 short-crown identification rather than assigning catalog line indices.

### E13 — Positive meniscus, convex to image; front asphere

**$n_d=1.85100$, $\nu_d=40.4$. Glass: unmatched glass-moldable dense lanthanum flint. $f=+54.099$ mm.**

E13 is the final positive meniscus. Its front surface, 23A, is aspherical, matching the position of the second glass-molded asphere in Canon's official block diagram.

No reviewed current catalog reproduces both coordinates. OHARA S-LAH89 is nearby at $(+0.00050,+0.38)$ relative to the patent pair; OHARA L-LAH85V is closer in Abbe number but higher in index at approximately $(+0.00281,-0.02)$. The element remains unmatched rather than being assigned a false exact name.

## Glass Identification and Selection

The patent supplies $n_d$, $\nu_d$, and—only for GP, GN, and GNF—the rounded $\theta_{gF}$ values in Table 1. It does not identify glass suppliers. The catalog comparisons below were checked against manufacturer-published OHARA and CDGM data; they establish glass classes or nearby catalog equivalents, not Canon's actual melt sources.

| Element(s) | Patent $n_d/\nu_d$ | Representative identification | Residual or qualification |
|---|---:|---|---|
| E1, E5 | 1.83481 / 42.7 | S-LAH55V class | OHARA 1.83481 / 42.73 |
| E2 | 1.58373 / 59.0 | Unmatched glass-moldable crown | S-BAL42 about $(-0.00060,+0.38)$ |
| E3 | 1.88300 / 40.8 | S-LAH58 class | OHARA 1.88300 / 40.76 |
| E4, E9 | 1.49700 / 81.5 | S-FPL51-class anomalous low-dispersion crown | Patent $\theta_{gF}=0.54$ retained independently of catalog spectra |
| E6 | 1.83400 / 37.2 | S-LAH60V class | OHARA 1.83400 / 37.21 |
| E7 | 1.60342 / 38.0 | S-TIM5 class | OHARA 1.60342 / 38.03 |
| E8 | 1.65412 / 39.7 | BPH5 (historical OHARA) | Exact rounded coordinate and $P_{gF}$ match; supplier inferred |
| E10 | 1.48749 / 70.2 | S-FSL5 class | OHARA 1.48749 / 70.23 |
| E11 | 1.84666 / 23.8 | S-TIH53 class | OHARA 1.84666 / 23.78 |
| E12 | 1.61800 / 63.4 | 618634 short-crown class | CDGM H-ZPK1A 1.618000 / 63.39; OHARA S-PHM52 is 1.61800 / 63.33 and rounds to 63.3 |
| E13 | 1.85100 / 40.4 | Unmatched glass-moldable dense lanthanum flint | S-LAH89 about $(+0.00050,+0.38)$ |

The E8 identification uses a catalog row that agrees with the patent's rounded $n_d$, $\nu_d$, and $\theta_{gF}$. E4 and E9 remain explicitly unmatched and use the patent's own partial-dispersion values rather than catalog spectra borrowed from a merely similar glass. This separation is necessary because two glasses can share nearly identical $n_d/\nu_d$ while differing materially in partial dispersion.

## Focus Mechanism

The patent states that focusing from infinity to a short distance is performed by moving the entire L2 unit toward the object while L1 remains fixed (¶0096). The stop is fixed with L1 in the numerical model.

The publication gives only the infinity prescription. Close-focus dimensions below are therefore an independent first-order reconstruction constrained to Canon's official 0.25 m minimum focusing distance, measured from the object to the image plane.

| Quantity | Infinity | Paraxial 0.25 m state |
|---|---:|---:|
| Surface 16 to stop | 3.400000 mm | 3.400000 mm |
| Stop to surface 18 | 6.640000 mm | 2.423365 mm |
| Surface 24 to image plane | 38.480000 mm | 42.696635 mm |
| L2 translation | 0 | 4.216635 mm objectward |
| Finite-conjugate magnification | — | -0.168485 |
| Magnification magnitude | — | 0.1685× |

The moved configuration has a collimated-input Gaussian EFL of 23.969965 mm and a collimated-input BFD of 38.658053 mm from surface 24. These are configuration diagnostics, not finite-object focal-distance specifications.

Conversely, imposing exactly 0.1700× paraxial magnification gives an object-to-image-plane distance of 248.72 mm and L2 travel of 4.25368 mm. The agreement with Canon's 0.25 m/0.17× pair supports the patent-to-product correlation, but it does not disclose the production lens's detailed floating cam. Canon describes the commercial lens as using rear focusing and a floating mechanism; the numerical example provides only rigid L2 translation.

## Aspherical Surfaces

Surfaces 4A and 23A are aspherical. The patent defines

$$
x(h)=\frac{h^2/R}{1+\sqrt{1-(h/R)^2}}+C_4h^4+C_6h^6+C_8h^8+C_{10}h^{10}.
$$

The base term is a sphere. In the standard LensVisualizer conic form this corresponds to $K=0$. The patent does not tabulate a separate conic parameter, and only even polynomial orders are present.

| Surface | $A_4$ | $A_6$ | $A_8$ | $A_{10}$ |
|---|---:|---:|---:|---:|
| 4A | $-5.6034\times10^{-6}$ | $-8.8149\times10^{-9}$ | $+3.9223\times10^{-12}$ | $-2.2756\times10^{-14}$ |
| 23A | $-1.1961\times10^{-5}$ | $-2.8659\times10^{-9}$ | $-7.0647\times10^{-12}$ | $-1.3455\times10^{-14}$ |

At the patent's published semi-diameters:

| Surface | Semi-diameter | Spherical-base sag | Polynomial departure | Total sag |
|---|---:|---:|---:|---:|
| 4A | 19.645 mm | +8.671647 mm | -1.449044 mm | +7.222603 mm |
| 23A | 16.415 mm | -1.160826 mm | -0.980842 mm | -2.141667 mm |

Sag is positive toward the image under the extracted coordinate convention. Both polynomial departures are negative at the quoted rim heights, placing the aspherical profile objectward of its spherical base there. Canon's block diagram identifies the elements carrying these surfaces as the two production glass-molded aspheres.

## Chromatic Correction Strategy

The patent defines the partial-dispersion reference line as

$$
\theta_{gF,\mathrm{normal}}=0.6438-0.001682\nu_d.
$$

For Example 3, Table 1 assigns GP to E9, GN to E8, and GNF to E4:

| Patent role | Element | $\nu_d$ | Patent $\theta_{gF}$ | Deviation from patent reference line |
|---|---|---:|---:|---:|
| GP | E9 | 81.5 | 0.54 | +0.0332830 |
| GN | E8 | 39.7 | 0.57 | -0.0070246 |
| GNF | E4 | 81.5 | 0.54 | +0.0332830 |

E9 is close to the stop, where the patent places the positive anomalous-dispersion element at comparatively small chief-ray height to emphasize axial-color correction without proportionately increasing lateral color (¶¶0056–0063 and ¶¶0076–0078). E4 lies farther forward, where chief-ray height is larger; the patent uses the negative anomalous-dispersion lens there for chromatic aberration of magnification (¶¶0084–0092). E8 supplies the opposite-sign partial-dispersion condition nearer the stop.

These are group-level ray-height arguments from the patent. They do not justify attributing complete correction of an aberration to any single surface, nor do they by themselves establish apochromatic performance.

## Conditional Expressions

Distances re-derived from the surface table are $Lp=3.40$ mm, $Ln=10.15$ mm, $LnF=34.60$ mm, and $LR=26.39$ mm. The positive lenses in L2 are E10, E12, and E13, giving $N_p=1.652163333$.

| Condition | Published expression | Re-derived value | Patent Table 2 | Result |
|---|---|---:|---:|---|
| (1a) | $\theta_{gF,GP}-(0.6438-0.001682\nu_{d,GP})>0.005$ | +0.0332830 | Table 1 | Satisfied |
| (2a) | $60<\nu_{d,GP}$ | 81.5 | 81.5 | Satisfied |
| (1b) | $\theta_{gF,GN}-(0.6438-0.001682\nu_{d,GN})<0$ | -0.0070246 | Table 1 | Satisfied |
| (2b) | $50>\nu_{d,GN}$ | 39.7 | 39.7 | Satisfied |
| (1c) | $\theta_{gF,GNF}-(0.6438-0.001682\nu_{d,GNF})>0$ | +0.0332830 | Table 1 | Satisfied |
| (3) | $1.0<BF/f<3.0$ | 1.567973 | 1.57 | Satisfied |
| (4) | $1.6<N_p$ | 1.652163 | 1.65 | Satisfied |
| (5) | $0.01<Lp/f<0.80$ | 0.138557 | 0.14 | Satisfied |
| (6) | $0.01<Ln/f<0.80$ | 0.413634 | 0.41 | Satisfied |
| (7) | $0.5<LR/f<1.5$ | 1.075448 | 1.08 | Satisfied |
| (8) | $0.80<LnF/f<2.00$ | 1.410023 | 1.41 | Satisfied |
| (9) | $1.0<f_2/f<2.0$ | 1.523317 | 1.52 | Satisfied |

All values reproduce Table 2 after rounding. Direct inspection of the publication confirms that the specification uses $LnF$ for condition (8), although one OCR rendering reads $LnP$.

Claim 5 narrows the ratio to $1.0<f_2/f<1.5$. Example 3 gives 1.523317 and therefore does not fall within that dependent claim, even though it satisfies descriptive condition (9) and preferred condition (9a), whose upper limits are 2.0 and 1.8 respectively. This is a claim-scope distinction, not evidence of a prescription error.

## Verification Summary

An independent d-line $y$–$\nu$ trace used

$$
R_i=\begin{bmatrix}1&0\\-(n_i'-n_i)/r_i&1\end{bmatrix},\qquad
T_i=\begin{bmatrix}1&d_i/n_i'\\0&1\end{bmatrix}.
$$

Through surface 24, before the final image-space translation, the system matrix is

$$
\begin{bmatrix}
1.5679731891 & 61.2332262213\\
-0.0407521050 & -0.9537043570
\end{bmatrix}.
$$

Thus $f=-1/C=24.53860975$ mm and $BF=-A/C=38.47588218$ mm.

| Quantity | Independently computed | Patent or source value | Difference / interpretation |
|---|---:|---:|---|
| System EFL, infinity | 24.538610 mm | 24.54 mm | -0.001390 mm |
| Back focal distance, infinity | 38.475882 mm | 38.48 mm | -0.004118 mm |
| L1 focal length | 116.681535 mm | 116.7 mm | -0.018465 mm |
| L2 focal length | 37.380074 mm | 37.4 mm | -0.019926 mm |
| Surface-1-to-image track | 129.360 mm | 129.35 mm | +0.010 mm; table rounding |
| Paraxial diagonal field | 82.8166° | 82.8° from patent $h/f$; Canon 84° | Consistent with distortion/rounding |
| Petzval sum | +0.003680100619 mm$^{-1}$ | not tabulated | Surface-by-surface $\Phi/(nn')$ |
| Signed Petzval radius | -271.7317 mm | not tabulated | $R_P=-1/P$ |

Paraxially imaging the patent's 24.16 mm stop diameter through L1 gives an entrance-pupil diameter of 17.2569 mm and $f/1.42196$. This is not substituted for the patent's f/1.45 design value: the tabulated effective diameters are rounded, and wide-open aperture is ultimately a finite-ray quantity. Canon's marketed maximum aperture remains f/1.4.

The standalone element and cemented-group calculations are:

| Component | Focal length |
|---|---:|
| E1 | -58.097 mm |
| E2 | -70.490 mm |
| E3 | +60.091 mm |
| E4 | -56.733 mm |
| E5 | +46.509 mm |
| E6 | +25.775 mm |
| E7 | -22.732 mm |
| E8 | -58.423 mm |
| E9 | +38.995 mm |
| E10 | +138.452 mm |
| E11 | -29.408 mm |
| E12 | +36.740 mm |
| E13 | +54.099 mm |
| E4–E5 cemented net | +232.932 mm |
| E6–E7 cemented net | -2551.887 mm |
| E10–E11 cemented net | -34.441 mm |


The Petzval sum was evaluated at every refracting surface using $\Phi_i/(n_i n_i')$; air spaces do not enter it. The rigid L2 focus translation therefore leaves the Petzval sum unchanged.

### Data-file implementation note

The radii, thicknesses, refractive indices, Abbe numbers, stop location, and aspherical coefficients are transcribed at native patent scale. No focal-length scaling is applied.

Most semi-diameters are exactly half the patent's published effective diameters. Three rounded values would exceed the project's signed 90% cross-gap sag allowance by small amounts: surfaces 3, 7, and 12 give 0.9124, 0.9124, and 0.9074 of their adjacent gaps. The data file therefore uses 21.600, 19.160, and 11.440 mm instead of 21.745, 19.345, and 11.520 mm. The reductions are 0.67%, 0.96%, and 0.69%, respectively, and do not alter first-order power.

With those values, every tested signed cross-gap intrusion is below 90%, every $sd/|R|$ ratio is below 0.9, the maximum front/rear semi-diameter ratio of any element is below 1.25, and the minimum computed edge thickness is 1.537 mm.

The close-focus `var` entries are explicitly inferred from the rigid-L2 paraxial solution because the patent publishes no finite-focus spacing table.

## Image Stabilization

No optical image-stabilization group is present. The patent describes only axial translation of L2; all prescription surfaces remain centered, and the claims contain no decentering or angular compensation mechanism. Canon's production specifications likewise do not list optical image stabilization for this model.

## Design Heritage and Context

Canon's 1997 EF 24mm f/1.4 L USM used 11 elements in 9 groups. The 2008 EF 24mm f/1.4 L II USM increased the construction to 13 elements in 10 groups and used two UD elements, two glass-molded aspheres, and Subwavelength Structure Coating. The numerical example's special-element positions and long SLR back focus correspond to that second-generation architecture.

The later RF 24mm f/1.4 L VCM is a different short-flange mirrorless design and should not be treated as a continuation of this numerical prescription.

## Sources

1. Takahiro Hatada, *Optical System and Image Pickup Apparatus Having the Same*, US 2010/0033848 A1, published 11 February 2010; Figures 5–6, ¶¶0041–0120, Tables 1–2, and claims 1–9.
2. Canon Camera Museum, [EF24mm f/1.4 L II USM](https://global.canon/en/c-museum/product/ef400.html): production construction, minimum focus, magnification, special-element positions, drive system, and introduction date.
3. Canon Europe, [EF24mm f/1.4 L II USM specifications](https://www.canon-europe.com/lenses/ef-24mm-f-1-4l-ii-usm-lens/specifications/): angle of view, construction, 0.25 m minimum focus, 0.17× magnification, and ring USM.
4. Canon U.S.A., [Canon lens history](https://www.usa.canon.com/pro/rf-lens-world/history): two glass-molded aspheres, two UD elements, SWC, and floating-mechanism description.
5. Canon Camera Museum, [EF24mm f/1.4 L USM](https://global.canon/en/c-museum/product/ef341.html): predecessor construction.
6. OHARA, official optical-glass product pages for [S-LAH55V](https://oharacorp.com/glass/s-lah55v/), [S-LAH58](https://oharacorp.com/glass/s-lah58/), [S-LAH60V](https://oharacorp.com/glass/s-lah60v/), [S-TIM5](https://oharacorp.com/glass/s-tim5/), [S-NBH5](https://oharacorp.com/glass/s-nbh5/), [S-FPL51](https://oharacorp.com/glass/s-fpl51/), [S-FSL5](https://oharacorp.com/glass/s-fsl5/), [S-TIH53](https://oharacorp.com/glass/s-tih53/), [S-PHM52](https://oharacorp.com/glass/s-phm52/), [S-BAL42](https://oharacorp.com/glass/s-bal42/), [S-LAH89](https://oharacorp.com/glass/s-lah89/), and [L-LAH85V](https://oharacorp.com/glass/l-lah85v/).
7. CDGM, [H-ZPK1A optical-glass data sheet](https://www.cdgmgd.com/webapp/pdf/H-ZPK1A.pdf): $n_d=1.618000$, $\nu_d=63.39$, and catalog code 618634.
