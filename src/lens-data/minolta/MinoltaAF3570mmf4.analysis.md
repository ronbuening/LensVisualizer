# Minolta AF Zoom 35-70mm f/4 — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** US 4,560,253, “Zoom Lens System”  
**Application number:** US 538,987  
**Filed:** October 4, 1983  
**Priority:** JP 57-175692, October 5, 1982  
**Granted:** December 24, 1985  
**Inventor:** Shuji Ogino  
**Assignee:** Minolta Camera Kabushiki Kaisha, Osaka, Japan  
**Embodiment analyzed:** Embodiment 2, Table 2

US 4,560,253 discloses a compact two-group inverted-telephoto zoom lens for 35 mm SLR use. The selected prescription is Embodiment 2, whose tabulated focal lengths are 68.2 mm, 50.0 mm, and 36.0 mm with design aperture $F_{NO}=4.1$. The embodiment uses six patent components in two moving groups: a negative two-component front group and a positive four-component rear group. The second front-group component is a composite element, consisting of a high-dispersion glass body with a thin lower-dispersion transparent layer on its rear surface. The air-facing surface of that thin layer is the sole aspherical surface.

The identification with the Minolta AF Zoom 35-70mm f/4 is strongly consistent rather than explicitly named in the patent. The matching evidence is the 36.0-68.2 mm design range, the constant f/4-class aperture, the six-component negative-positive zoom architecture, the single hybrid asphere on the rear surface of the front positive meniscus, the 35 mm SLR image format, and the patent timing immediately before the first Minolta A-mount autofocus system. The supplied patent itself does not state the production product name, so production-link claims should remain qualified.

The data file transcribes Embodiment 2 directly. It does not apply a focal-length scale factor. The patent table is ordered long-to-short, but the data file stores zoom positions in the monotonic LensVisualizer order $36.0 \rightarrow 50.0 \rightarrow 68.2$ mm.

## Optical Architecture

The lens is a two-group negative-positive inverted-telephoto zoom. Group I is a negative front group consisting of a negative meniscus followed by a positive meniscus composite element. Group II is a positive rear group consisting of two positive components, a negative high-dispersion component, and a final positive rear component. The patent states that both groups shift during zooming while the air space between them varies; it separately states that the first group alone shifts during focusing.

The principal zoom variable is the inter-group air gap after the aspherical resin surface. In the patent’s long-to-short order, this gap changes from 0.800 mm at 68.2 mm to 17.200 mm at 50.0 mm and 41.100 mm at 36.0 mm. Independent paraxial tracing gives effective focal lengths of 68.187 mm, 49.996 mm, and 35.999 mm for those three spacings. Relative to the front vertex, the corresponding back focal distances are 59.463 mm, 49.429 mm, and 41.709 mm.

At the wide-angle end, the system is retrofocus in the ordinary SLR sense: $BFD/EFL = 41.709/35.999 = 1.159$. At the long end, $BFD/EFL = 0.872$, but the total track remains longer than the focal length, so the design is not a true telephoto lens in the strict optical sense. Its architecture remains a negative-positive wide-angle zoom carried into a short normal/short telephoto range.

The patent does not designate an aperture-stop surface in the numerical table. The data file therefore places a diagrammatic stop at the midpoint of the $d_8$ air space between the fourth positive component and the fifth negative component. This placement is consistent with the schematic rear-group layout, but it is an inferred rendering choice, not a patent-listed prescription value.

The computed surface-by-surface Petzval sum is $+0.002548\ \mathrm{mm}^{-1}$, corresponding to a Petzval radius of approximately $+392.45$ mm. Group I contributes $-0.008788\ \mathrm{mm}^{-1}$ and Group II contributes $+0.011336\ \mathrm{mm}^{-1}$. The partial cancellation between the negative front group and positive rear group is central to the field-control strategy of this compact retrofocus zoom.

## Element-by-Element Analysis

### L1 — Component I-1: Negative Meniscus, Convex to Object

$n_d = 1.74400$, $\nu_d = 44.93$. Glass: LAF2 / N-LAF2 / S-LAM2 class, code 744/449. Standalone $f = -36.47$ mm.

The first component is a negative meniscus with $R_1=+197.705$ mm and $R_2=+23.754$ mm. The patent requires the image-side radius of the first component to have a smaller absolute value than the object-side radius, and this component follows that rule closely. Most of the negative power is therefore concentrated at the steep rear surface, while the weak front surface admits the wide-angle bundle with less abrupt first-surface refraction.

The glass is a high-index, moderate-dispersion lanthanum flint region. The closest cross-reference family is LAF2 / N-LAF2 / S-LAM2. The patent value $n_d=1.74400$ is exact for OHARA S-LAM2, while the patent Abbe number is closer to the 744/449 cross-reference code than to OHARA’s current S-LAM2 listing at 744/448. The safe identification is therefore class-level rather than a single-vendor assertion.

### L2g — Component I-2 Glass Body: Positive Meniscus Substrate

$n_d = 1.71736$, $\nu_d = 29.42$. Glass: E-FD1L / N-SF1 / S-TIH1 class, code 717/295. Standalone $f = +71.06$ mm.

The glass body of the second component is a positive meniscus with $R_3=+32.800$ mm and rear spherical substrate radius $R_{4'}=+86.956$ mm. In the prior draft this glass was described as a LaSF3 / S-LAH53 class lanthanum flint. That attribution is not supported by current catalog cross-references. The six-digit optical code is instead in the 717/294-295 dense flint region, with catalog equivalents such as E-FD1L, N-SF1, and S-TIH1.

The high dispersion of this glass body is not incidental. The patent specifically explains that the glass forming the spherical surface has high dispersion and that a lower-dispersion transparent layer can be applied to reduce wavelength-dependent coma differences at the wide-angle end. The glass body supplies the positive meniscus power, while the resin layer supplies both a weak chromatic interface and the aspherical correction surface.

### L2r — Component I-2 Thin Resin Layer: Aspherical Hybrid Surface

$n_d = 1.52000$, $\nu_d = 51.06$. Material: patent-listed thin transparent layer. Standalone $f \approx -718.76$ mm.

The resin layer is only 0.150 mm thick on axis and is bonded to the rear spherical surface of L2g. Its rear air-facing surface has base radius $R_{4''}=+70.502$ mm and carries the aspherical polynomial. Treated by itself in air, the layer has very weak negative power; in the assembled component, its main value is not paraxial power but the controlled aspherical departure and the dispersion mismatch against the high-dispersion glass body.

Because the center thickness is only 0.150 mm, the data file models the resin layer as a separate optical element but treats its semi-diameter conservatively. This is a special hybrid-asphere case rather than an ordinary glass element with normal edge-thickness expectations.

### L3 — Component II-1: Biconvex Positive

$n_d = 1.67000$, $\nu_d = 57.07$. Glass: unmatched lanthanum crown code 670/571. Standalone $f = +46.02$ mm.

The first component of Group II is a biconvex positive element with $R_5=+35.910$ mm and $R_6=-210.680$ mm. The front surface carries most of the power, while the rear surface is weakly curved. This element begins the rear group’s convergence after the variable inter-group air space.

The previous draft identified the glass as HOYA LaC3. That specific catalog match was not verified from the available current manufacturer cross-reference data. The safe description is an unmatched high-Abbe lanthanum crown-like glass with optical code 670/571. L3 and L4 use the same glass, which simplifies the rear positive section and keeps the principal positive power in relatively low-dispersion material.

### L4 — Component II-2: Positive Meniscus, Convex to Object

$n_d = 1.67000$, $\nu_d = 57.07$. Glass: unmatched lanthanum crown code 670/571. Standalone $f = +46.76$ mm.

The fourth component is a positive meniscus with $R_7=+23.426$ mm and $R_8=+88.401$ mm. It shares the same glass as L3 and has nearly the same standalone focal length. The strongly curved front surface is the most powerful converging surface in the rear positive section.

Together, L3 and L4 divide the positive rear-group power over two air-spaced components. This reduces the burden on any single converging surface and gives the designer degrees of freedom for balancing spherical aberration, coma, astigmatism, and distortion over the zoom range.

### L5 — Component II-3: Biconcave Negative Chromatic Corrector

$n_d = 1.75000$, $\nu_d = 25.14$. Glass: unmatched dense/fluor flint code 750/251. Standalone $f = -21.02$ mm.

L5 is the strongest component in the prescription by focal-length magnitude. It is a biconcave negative element with $R_9=-109.921$ mm and $R_{10}=+18.693$ mm. The patent’s condition that the image-side radius of the fifth component be smaller in absolute value than the object-side radius is strongly satisfied.

The prior analysis described this glass as SFS1 / FDS1 class. That is too specific and is not supported by the current catalog check. The patent values correspond to code 750/251. Current HOYA cross-reference data lists FF8 at 752/251, which is close in dispersion but not an exact $n_d$ match. The data file therefore uses an explicit unmatched dense/fluor flint annotation rather than a false catalog identification.

Optically, L5 is the principal negative chromatic-correction element. Its low Abbe number supplies dispersion of opposite sign to the positive low-dispersion components in Group II. It also makes a large negative contribution to the Petzval sum and therefore helps restrain field curvature generated by the positive rear group.

### L6 — Component II-4: Rear Positive Element, Nearly Plano-Convex

$n_d = 1.67270$, $\nu_d = 32.22$. Glass: E-FD5 / N-SF5 / S-TIM25 class, code 673/322. Standalone $f = +47.89$ mm.

The final component has a very weak front radius, $R_{11}=+892.777$ mm, and a substantially stronger rear radius, $R_{12}=-33.382$ mm. It is therefore best interpreted as a nearly plano-convex positive rear element, despite being formally biconvex by sign convention.

The glass matches the FD5 / SF5 / TIM25 region closely. Its relatively high index permits useful rear-surface power without an extreme curvature, while its flint-like dispersion gives the rear group an additional chromatic degree of freedom. Its rear position gives it leverage over exit-pupil behavior, field curvature, lateral color, and distortion.

## Glass Identification and Selection

The glass table below reflects current catalog cross-checking rather than a one-to-one assertion of Minolta procurement. The patent gives only $n_d$ and $\nu_d$, not vendor glass names.

| Modeled element | Patent $n_d$ | Patent $\nu_d$ | Code | Corrected identification | Note |
|---|---:|---:|---:|---|---|
| L1 | 1.74400 | 44.93 | 744/449 | LAF2 / N-LAF2 / S-LAM2 class | Strong class match; exact vendor uncertain. |
| L2g | 1.71736 | 29.42 | 717/294-295 | E-FD1L / N-SF1 / S-TIH1 class | Corrects the prior LaSF3 / S-LAH53 misidentification. |
| L2r | 1.52000 | 51.06 | — | Thin transparent resin layer | Patent-listed material class only. |
| L3 | 1.67000 | 57.07 | 670/571 | Unmatched lanthanum crown-like glass | Prior LaC3 label not verified. |
| L4 | 1.67000 | 57.07 | 670/571 | Unmatched lanthanum crown-like glass | Same glass as L3. |
| L5 | 1.75000 | 25.14 | 750/251 | Unmatched dense/fluor flint | Closest current HOYA table entry is FF8 at 752/251, not exact. |
| L6 | 1.67270 | 32.22 | 673/322 | E-FD5 / N-SF5 / S-TIM25 class | Strong cross-reference match. |

The design’s chromatic strategy is conventional but compact. The main positive rear-group power is carried by high-Abbe L3 and L4. The strong negative L5 supplies high-dispersion correction. The final positive L6 is a flint-region positive element, which is less common than a crown rear field flattener but useful here because it adds chromatic leverage near the image side. The front hybrid element adds a further chromatic interface: high-dispersion glass against lower-dispersion resin.

## Focus Mechanism

The patent describes the class of lens as one in which both groups shift during zooming and the first group alone shifts during focusing. It does not publish close-focus distances, close-focus magnifications, or a finite-distance spacing table.

The data file therefore treats focus as a simplified first-group shift. For the normal close-focus state it solves the inter-group spacing needed for approximately 1.0 m object distance measured from the image plane, while keeping the rear-group-to-image back focus fixed. This gives close-state inter-group spacings of 46.965 mm at the wide position, 22.966 mm at the middle position, and 6.528 mm at the long position. These values are paraxial modeling values, not patent-tabulated mechanical data.

Published production discussions often distinguish the ordinary focus range from a closer macro range, but the macro mechanism is not described in the supplied patent. It is therefore not modeled as an independent macro state in the data file.

## Aspherical Surface

Embodiment 2 places the sole aspherical surface on the air-facing side of the thin resin layer on Component I-2. In the data file this is surface `4A`. The base radius is $R=+70.502$ mm.

The patent’s sag equation is a spherical base plus even-order polynomial terms:

$$
X = \frac{Y^2}{\gamma_i + \gamma_i\sqrt{1-(Y/\gamma_i)^2}} + B Y^4 + C Y^6 + D Y^8.
$$

This is equivalent to the standard conic form with $K=0$ and coefficients $A_4=B$, $A_6=C$, and $A_8=D$.

| Coefficient | Value |
|---|---:|
| $K$ | 0 |
| $A_4$ | $-3.2454086 \times 10^{-6}$ |
| $A_6$ | $-1.6458645 \times 10^{-9}$ |
| $A_8$ | $-1.2334671 \times 10^{-11}$ |

The polynomial departure relative to the base sphere is negative. At $h=8$ mm the departure is $-0.01393$ mm; at $h=12$ mm it is $-0.07752$ mm; at $h=14$ mm it is $-0.15527$ mm; and at $h=16$ mm it is $-0.29328$ mm. For a positive-radius surface, this means the peripheral sag is less positive than the corresponding sphere: the surface is flattened relative to the base sphere in the outer zone. The patent places this asphere in the front group because peripheral wide-angle rays pass through outer zones of the front group, where distortion and astigmatism can be corrected with comparatively small refraction-angle penalty.

## Conditional Expressions

The patent defines two main conditions using the shortest focal length $f_s$, the total axial distance $l$ from the first surface to the image plane in the longest-focal-length condition, and the radius $\gamma_3$ of the object-side surface of Component I-2.

For Embodiment 2, $f_s=36.0$ mm, $l=94.0$ mm, and $\gamma_3=32.800$ mm. The broad conditions are satisfied:

$$
2.3 f_s < l < 2.75 f_s \Rightarrow 82.8 < 94.0 < 99.0,
$$

$$
0.55 f_s < \gamma_3 < 1.8 f_s \Rightarrow 19.8 < 32.8 < 64.8.
$$

The tighter dependent-claim conditions are also satisfied:

$$
2.55 f_s < l < 2.75 f_s \Rightarrow 91.8 < 94.0 < 99.0,
$$

$$
0.75 f_s < \gamma_3 < 1.8 f_s \Rightarrow 27.0 < 32.8 < 64.8.
$$

The design sits near the compact end of the tightened total-length condition, which is consistent with the patent’s stated goal of a relatively economical and compact six-component zoom.

## Aberration Performance from the Patent Figures

The patent provides aberration plots for Embodiment 2 at the long, middle, and short focal-length positions. The plots are computed at approximately f/4 and extend to an image height of $y'=21.6$ mm, corresponding to the half-diagonal of the 24 x 36 mm frame.

The long-end plots show small residual spherical aberration, modest astigmatic separation, and weak positive distortion. The middle position shows increased field curvature and the transition toward near-zero distortion. The wide position shows the largest wide-angle residuals, especially barrel distortion and astigmatic separation. These are the residuals the front-group asphere is intended to reduce relative to the all-spherical predecessor architecture discussed in the patent.

The figures are qualitative plots rather than numeric distortion or MTF tables. The analysis therefore does not assign exact percentage values beyond the approximate scale visible in the patent drawings.

## Verification Summary

All focal-length, back-focus, group-power, element-power, Petzval, aspheric-departure, and conditional-expression values in this document were recomputed from the patent prescription by an independent paraxial ray trace using the patent radii, thicknesses, indices, and variable spacing table.

| Quantity | Patent / source value | Computed value | Comment |
|---|---:|---:|---|
| EFL, wide | 36.0 mm | 35.999 mm | Matches Embodiment 2. |
| EFL, middle | 50.0 mm | 49.996 mm | Matches Embodiment 2. |
| EFL, long | 68.2 mm | 68.187 mm | Matches Embodiment 2. |
| BFD, wide | not separately tabulated | 41.709 mm | Computed from the prescription. |
| BFD, middle | not separately tabulated | 49.429 mm | Computed from the prescription. |
| BFD, long | not separately tabulated | 59.463 mm | Computed from the prescription. |
| Total track at long end | 94.0 mm | 94.021 mm | Matches patent $l$ within rounding. |
| Group I focal length | not tabulated | -74.647 mm | Computed as isolated front group. |
| Group II focal length | not tabulated | +41.172 mm | Computed as isolated rear group. |
| Full-system Petzval sum | not tabulated | +0.002548 mm$^{-1}$ | Surface-by-surface $\phi/(nn')$. |
| Wide-end $BFD/EFL$ | not tabulated | 1.159 | Retrofocus geometry. |
| Long-end total track / EFL | not tabulated | 1.379 | Not a true telephoto ratio. |

## Sources

US 4,560,253, Shuji Ogino, “Zoom Lens System,” assigned to Minolta Camera Kabushiki Kaisha, granted December 24, 1985. Primary source for prescription data, group architecture, conditional expressions, aspherical construction, and aberration figures.

HOYA Group Optics Division, “Glass Cross Reference Index.” Used for six-digit glass-code interpretation and cross-vendor glass-family checks.

OHARA Corporation, S-LAM2 glass data. Used to verify the L1 class match at $n_d=1.74400$ and code 744/448.

SCHOTT, N-SF5 data sheet. Used to verify the final-element FD5 / SF5 family match near $n_d=1.6727$, $\nu_d \approx 32.2$.
