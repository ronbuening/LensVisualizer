# CANON 50mm f/1.2 — Optical Analysis

## Patent Reference and Design Identification

**Patent:** US 2,836,102  
**Application Number:** US 591,394  
**Priority:** August 16, 1955 (Japan)  
**Filed:** June 14, 1956  
**Granted:** May 27, 1958  
**Inventor:** Hiroshi Ito  
**Assignee:** Canon Camera Co., Inc.  
**Title:** *High Aperture Photographic Lens*  
**Embodiment analyzed:** Example 2 (Fig. 2), $f=100$, $F:1.2$, $2\omega=40^\circ$

The patent does not print a commercial lens name beside either numerical example. Example 2 is nevertheless the only embodiment compatible with the original CANON 50mm f/1.2, on the following convergent evidence:

1. **Aperture.** The patent identifies Fig. 2 and Example 2 as the $F:1.2$ objective; Example 1 is expressly $F:1.4$.
2. **Construction.** Example 2 has seven elements in five air-spaced components. Canon specifies seven elements in five groups for the production lens.
3. **Timing.** The patent claims Japanese priority in August 1955. Canon marketed the VT in August 1956 and the 50mm f/1.2 in September 1956; the VT was sold with this lens.
4. **Format and field.** The VT uses a 24 × 36 mm frame. At a nominal one-half dimensional scale, the patent's $40^\circ$ rectilinear field spans 36.770 mm, closely matching the frame width.
5. **Focus configuration.** The patent gives one fixed internal prescription and no floating or internal-focus spacing table. Canon specifies a manually focused threaded-mount rangefinder lens with a 1.0 m closest focusing distance.
6. **Special surfaces.** All twelve refracting surfaces are spherical. The patent gives no aspheric equation, coefficient table, fluorite designation, or ED designation.

The production identification is therefore strong but inferential, not documentary. Canon's later 50mm f/1.4 I is not the patent's Example 1 counterpart: Canon lists that production lens as six elements in four groups, while both patent examples retain the seven-element/five-component architecture.

## Optical Architecture

The design is a modified high-aperture double-Gauss with seven elements in five components:

- **G1:** L1, positive meniscus, convex toward the object.
- **G2:** L2, positive meniscus, convex toward the object.
- **G3:** L3–L4, cemented negative meniscus comprising a biconvex positive element and a biconcave negative element.
- **Stop:** diaphragm D in the air space between G3 and G4.
- **G4:** L5–L6, cemented weak positive meniscus comprising a biconcave negative element and a biconvex positive element; the component's convex outer face points toward the image.
- **G5:** L7, biconvex positive rear singlet.

The distinguishing architectural choice is the split front collector. The patent replaces the conventional single front positive member of a six-element Gauss objective with two separately spaced positive menisci of nearly equal focal length. It attributes improved zonal spherical-aberration correction to that arrangement. The two cemented inner components add independent control of index, dispersion, curvature, and thickness while retaining the broadly Gaussian front/rear power distribution.

Positive radii have centers of curvature toward the image. This convention reproduces every element shape described in the patent prose. There is one optical state and no aspherical surface.

### Prescription and Reference-Line Check

The Example 2 table on patent page 3 was re-extracted independently. Its twelve radii, eleven axial distances, five optical-constant pairs, and stated first- and second-component focal lengths agree with the data file after uniform ×0.5 dimensional scaling. In particular, the easily misread central spacing is $d_7=21.31$, not 2.31.

The patent prose calls the reference the “D-line,” while the table uses the notation $n_d$. It does not publish line indices from which the sodium-D versus helium-d distinction can be resolved. Because the indices are printed to only four decimal places, that distinction is below the prescription's source precision. The data file stores the printed values in its `nd` fields without manufacturing unprinted spectral data.

### Patent Table and Claim Discrepancy

The principal Example 2 table gives $n_7=1.6935$. Claim 4 instead prints $n_7=1.6435$. The principal-table value is controlling because it:

- satisfies Claim 2's requirement that the three positive singlets have indices between 1.65 and 1.83;
- matches the repeated $n=1.6935$ assignment to L1, L6, and L7 in the principal table; and
- gives $f=101.025957$ from the rounded prescription, close to the patent heading $f=100$.

The Claim 4 value gives $f=104.689558$ and violates the patent's own positive-singlet index condition. It is a claim-table typographical error rather than a second viable prescription.

A separate trace of Example 1 gives $f=100.067687$, with first- and second-component focal lengths of 191.734852 and 203.065019 against the patent's stated 191.7 and 203.1. This cross-example agreement independently confirms the transcription and radius convention.

## Element-by-Element Analysis

### L1 — Positive Meniscus, Convex Toward Object

$n_d=1.6935$, $\nu_d=53.5$. Glass: **694535 lanthanum-crown class; modern H-LaK6A/LAC13/S-LAL13 equivalents are non-unique**. Standalone in-air $f=+211.289588$ patent units (+105.644794 mm at nominal one-half scale).

The same-sign radii form a positive meniscus with its convex face toward the object. L1 is the first half of the split front collector. Its relatively high index supplies positive power without requiring the curvature of a lower-index crown.

### L2 — Positive Meniscus, Convex Toward Object

$n_d=1.7173$, $\nu_d=47.9$. Glass: **OHARA S-LAM3 coordinate equivalent (717479); the original Canon melt is not identified**. Standalone in-air $f=+211.629055$ patent units (+105.814527 mm).

L2 has nearly the same standalone focal length as L1 but a higher index and lower Abbe number. The patent states component focal lengths of 211.2 and 211.6; the independently calculated values are 211.289588 and 211.629055. At the published spacing, G1–G2 has $f=+106.388140$ patent units (+53.194070 mm).

### L3–L4 — Cemented Negative Meniscus

**L3:** $n_d=1.6385$, $\nu_d=55.5$. Glass: **Sumita K-SK18 exact coordinate equivalent (639555); the original Canon melt is not identified**. Standalone in-air $f=+70.405817$ patent units (+35.202908 mm).  
**L4:** $n_d=1.7174$, $\nu_d=29.5$. Glass: **OHARA S-TIH1 coordinate equivalent (717295); SCHOTT SF1 shares the same code**. Standalone in-air $f=-35.058965$ patent units (−17.529482 mm).

L3 is biconvex and L4 is biconcave. Their cemented in-situ net is $f=-112.311661$ patent units (−56.155830 mm), so the component is the negative meniscus described by the patent. This cemented result is not the algebraic sum of the two standalone in-air powers: the shared interface and the refractive indices on both sides materially alter the net power.

The published values give $n_4-n_3=0.0789$, $\nu_3-\nu_4=26.0$, and $|r_6|=321.70$, satisfying condition (1). The patent associates these constraints jointly with spherical- and chromatic-aberration correction.

### L5–L6 — Cemented Weak Positive Meniscus

**L5:** $n_d=1.5174$, $\nu_d=52.5$. Glass: **OHARA S-NSL36 close coordinate equivalent (517524 versus patent 517525); the original Canon melt is not identified**. Standalone in-air $f=-52.957585$ patent units (−26.478792 mm).  
**L6:** $n_d=1.6935$, $\nu_d=53.5$. Glass: **694535 lanthanum-crown class; modern H-LaK6A/LAC13/S-LAL13 equivalents are non-unique**. Standalone in-air $f=+55.786638$ patent units (+27.893319 mm).

L5 is biconcave and L6 is biconvex. Their substantial opposing powers nearly cancel in situ: the cemented net is $f=+1512.727034$ patent units (+756.363517 mm), making G4 only weakly positive. Both outer radii are negative, so the component is a meniscus with its convex outer face toward the image.

The published values give $n_6-n_5=0.1761$, $|r_8|=43.02$, and $r_9=76.74$, satisfying condition (2). The patent associates this condition set particularly with oblique spherical-aberration correction.

### L7 — Biconvex Positive Rear Singlet

$n_d=1.6935$, $\nu_d=53.5$. Glass: **694535 lanthanum-crown class; modern H-LaK6A/LAC13/S-LAL13 equivalents are non-unique**. Standalone in-air $f=+90.454422$ patent units (+45.227211 mm).

L7 is the strongest positive air-spaced component. Together with G4, the rear block has $f=+79.041977$ patent units (+39.520989 mm).

## Glass Identification and Selection

The patent supplies only rounded optical constants and no glass-maker names. The identifiers below are therefore manufacturer-catalog comparisons, not identifications of the original 1955 melts. The data file uses exact or near-exact coordinate equivalents for L2-L5 so chromatic tracing has published dispersion curves, while keeping the non-unique 694535 positions explicitly unmatched.

| Elements | Patent pair | Authoritative modern catalog comparisons | Residual $\Delta n_d/\Delta\nu_d$ | Assessment |
|---|---:|---|---:|---|
| L1, L6, L7 | 1.6935 / 53.5 | CDGM H-LaK6A 1.69350/53.38; HOYA LAC13 1.69350/53.34; OHARA S-LAL13 1.69350/53.21 | 0.00000/−0.12; 0.00000/−0.16; 0.00000/−0.29 | Non-unique lanthanum-crown class |
| L2 | 1.7173 / 47.9 | OHARA S-LAM3 1.71700/47.92; CDGM H-LaF2 1.71700/47.89 | −0.00030/+0.02; −0.00030/−0.01 | Modeled with S-LAM3; lanthanum flint, $\nu_d<50$ |
| L3 | 1.6385 / 55.5 | Sumita K-SK18 1.63854/55.50; OHARA S-BSM18 1.63854/55.38 | +0.00004/+0.00; +0.00004/−0.12 | Modeled with K-SK18, the exact six-digit code match |
| L4 | 1.7174 / 29.5 | OHARA S-TIH1 1.71736/29.52; SCHOTT SF1 1.71736/29.51 | −0.00004/+0.02; −0.00004/+0.01 | Modeled with S-TIH1; dense flint |
| L5 | 1.5174 / 52.5 | OHARA S-NSL36 1.51742/52.43 | +0.00002/−0.07 | Modeled with S-NSL36; crown |

L2 remains a flint despite its lanthanum family name because its Abbe number is below 50. L4 is the pronounced high-dispersion member. The catalog curves are modeling equivalents selected by coordinate agreement, not retrospective supplier identifications, and they do not support an apochromatic claim for the historical lens.

## Focus Mechanism

The patent supplies one fixed internal prescription and no finite-conjugate spacing table. The production reconstruction therefore uses **unit focus**: all internal spacings remain fixed and the complete optical cell translates relative to the film plane. This is a mechanical inference from the fixed prescription and the manually focused rangefinder implementation, not a patent-published motion table.

Canon specifies a 1.0 m closest focusing distance. Measuring that distance from the film plane, the paraxial unit-focus model gives:

| Quantity | Infinity | 1.0 m model |
|---|---:|---:|
| Rear vertex to image plane | 21.072291 mm | 23.878321 mm |
| Whole-objective extension | — | 2.806030 mm |
| Object to first vertex | infinity | 932.031679 mm |
| Lateral magnification | 0 | −0.055551 ($|m|\approx1:18.0$) |

Canon does not publish maximum magnification for this lens. The close-focus extension and magnification are therefore paraxial model results rather than manufacturer specifications.

## Conditional Expressions

The Example 2 prescription satisfies every numerical condition in Claims 1 and 2:

| Published expression | Example 2 substitution | Result |
|---|---:|---|
| $0.15>n_4-n_3>0.05$ | $0.15>0.0789>0.05$ | satisfied |
| $\nu_3>\nu_4$ | $55.5>29.5$ | satisfied |
| $1.83>n_4>1.63$ | $1.83>1.7174>1.63$ | satisfied |
| $\infty>|r_6|>150$ | $\infty>321.70>150$ | satisfied |
| $0.25>n_6-n_5>0.05$ | $0.25>0.1761>0.05$ | satisfied |
| $1.83>n_6>1.60$ | $1.83>1.6935>1.60$ | satisfied |
| $61>\nu_6>49$ | $61>53.5>49$ | satisfied |
| $70>|r_8|>38$ | $70>43.02>38$ | satisfied |
| $100>r_9>40$ | $100>76.74>40$ | satisfied |
| $60>r_5>45$ | $60>50.96>45$ | satisfied |
| $30>r_7>22$ | $30>27.44>22$ | satisfied |
| $32>d_5+d_6>20$ | $32>24.87>20$ | satisfied |
| Positive-singlet index range | 1.6935, 1.7173, 1.6935 | all within 1.65–1.83 |

The patent states that condition (1) concerns spherical and chromatic correction, condition (2) particularly concerns oblique spherical correction, and conditions (3)–(4) concern astigmatism. These are system-level statements rather than exclusive single-surface causal assignments.

## Verification Summary

A fresh reduced-angle paraxial trace used $(y,u=n\theta)$ with

$$
T(t,n)=\begin{bmatrix}1&t/n\\0&1\end{bmatrix},\qquad
R(n\rightarrow n',r)=\begin{bmatrix}1&0\\-(n'-n)/r&1\end{bmatrix}.
$$

For the unscaled Example 2 table, from immediately before $r_1$ to immediately after $r_{12}$,

$$
M=\begin{bmatrix}
0.4171658774 & 82.0715432077\\
-0.0098984462 & 0.4497473443
\end{bmatrix},
$$

with determinant 1.000000 at the retained precision.

| Quantity | Patent normalization | Nominal ×0.5 reconstruction |
|---|---:|---:|
| Effective focal length | 101.025957 | 50.512979 mm |
| Back focal distance from $r_{12}$ | 42.144582 | 21.072291 mm |
| Front focal-point coordinate from $r_1$ | −45.436156 | −22.718078 mm |
| First-to-last vertex track | 88.180000 | 44.090000 mm |
| First vertex to paraxial image | 130.324582 | 65.162291 mm |
| BFD/EFL | 0.417166 | 0.417166 |

The rounded table computes 1.026% above the nominal $f=100$ heading. Canon's controlling manufacturer specification remains 50 mm; the 50.512979 mm result is the paraxial EFL obtained by literally halving the rounded patent table.

### Component Powers

| Component or block | Patent-unit focal length | Scaled focal length |
|---|---:|---:|
| G1 | +211.289588 | +105.644794 mm |
| G2 | +211.629055 | +105.814527 mm |
| G1–G2 | +106.388140 | +53.194070 mm |
| G3 cemented net | −112.311661 | −56.155830 mm |
| G4 cemented net | +1512.727034 | +756.363517 mm |
| G4–G5 | +79.041977 | +39.520989 mm |
| Complete objective | +101.025957 | +50.512979 mm |

### Surface-by-Surface Petzval Sum

The Petzval calculation uses

$$
P_i=\frac{\phi_i}{n_i n'_i},\qquad \phi_i=\frac{n'_i-n_i}{r_i},
$$

not an element-level thin-lens approximation.

| Surface | $P_i$ in inverse patent units |
|---:|---:|
| $r_1$ | +0.004356457 |
| $r_2$ | −0.001625479 |
| $r_3$ | +0.006054364 |
| $r_4$ | −0.003470920 |
| $r_5$ | +0.007646893 |
| $r_6$ | −0.000087158 |
| $r_7$ | −0.015223195 |
| $r_8$ | −0.007926034 |
| $r_9$ | +0.000893002 |
| $r_{10}$ | +0.005620463 |
| $r_{11}$ | +0.002255243 |
| $r_{12}$ | +0.004343058 |
| **Sum** | **+0.002836693** |

After one-half scaling, the sum is +0.005673385 mm$^{-1}$, with reciprocal magnitude 176.261603 mm. This is a paraxial field-curvature diagnostic, not a replacement for the patent's finite-ray astigmatism curves.

### Data-File Aperture and Semi-Diameter Reconstruction

The patent and Fig. 2 establish only that diaphragm D lies within $d_7$; they do not dimension its station or diameter. The data file therefore uses a mechanical reconstruction rather than a patent value. At the required f/1.2 stop rim, the stop plane is centered between the opposing spherical profiles, giving 6.455948 mm after $r_7$ and 4.199052 mm before $r_8$. Stop semi-diameter 10.662193 mm gives an entrance-pupil diameter of 42.094150 mm and a reconstructed paraxial f-number of 1.200000. The two adjacent spherical profiles retain 1.370532 mm and 1.370533 mm axial clearance at the stop rim.

The inferred clear apertures were independently checked against the project constraints:

- minimum axial glass thickness over each element's shared clear-aperture band: 0.510941 mm;
- maximum front/rear clear semi-diameter ratio within one element: 1.326087;
- maximum $sd/|R|$: 0.838192;
- no renderer-only semi-diameter trimming at the opposing surfaces 7 and 8;
- every signed cross-gap sag intrusion below 90% of its axial gap; and
- the full on-axis f/1.2 marginal ray passes every clear aperture.

These semi-diameters are visualization and tracing estimates, not patent-published production dimensions. They do not prove an unvignetted $40^\circ$ field; the patent supplies no clear-aperture table from which wide-open mechanical vignetting can be reconstructed.

### Field

At EFL 50.512979 mm, a $40^\circ$ rectilinear full field spans 36.770 mm. A 36 mm frame width subtends 39.226°, while the 43.267 mm diagonal of a 24 × 36 mm frame subtends 46.368°. The patent heading therefore corresponds closely to horizontal-format coverage but does not by itself establish an unvignetted diagonal image circle.

## Sources

- Hiroshi Ito, [US 2,836,102, *High Aperture Photographic Lens*](https://patents.google.com/patent/US2836102A/en), filed June 14, 1956, granted May 27, 1958. Prescription, figures, prose, and claims checked against the supplied four-page scan, especially PDF pp. 2–3.
- Canon Camera Museum, [CANON 50mm f/1.2](https://global.canon/en/c-museum/product/s44.html): September 1956 introduction, 7/5 construction, 11 diaphragm blades, f/22 minimum aperture, 1.0 m closest focus, and 55 mm filter diameter.
- Canon Camera Museum, [VT](https://global.canon/en/c-museum/product/film28.html): August 1956 introduction, 24 × 36 mm format, threaded mount, and sale with the 50mm f/1.2.
- Canon Camera Museum, [CANON 50mm f/1.4 I](https://global.canon/en/c-museum/product/s45.html): six-element/four-group sibling exclusion.
- OHARA manufacturer data: [S-LAL13](https://oharacorp.com/glass/s-lal13/), [S-LAM3](https://oharacorp.com/glass/s-lam3/), [S-BSM18](https://oharacorp.com/glass/s-bsm18/), [S-TIH1](https://oharacorp.com/glass/s-tih1/), and [S-NSL36](https://oharacorp.com/glass/s-nsl36/).
- CDGM manufacturer catalog data: [H-LaK6A and related optical glasses](https://www.cdgmgd.com/database/toWebDatabase.htm?typeId=8&url=database).
- Sumita Optical Glass, [Optical Glass Data downloads](https://www.sumita-opt.co.jp/en/download/): K-SK18, code 639555.
- HOYA Optics, [Optical Glass Data](https://www.hoyaoptics.eu/download/optical-glass-data): LAC13.
