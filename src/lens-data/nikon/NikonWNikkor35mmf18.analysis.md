## Patent Reference and Design Identification

**Patent:** US 2,896,506
**Filed:** June 5, 1956; Serial No. 589,554
**Granted:** July 28, 1959
**Inventor:** Hideo Azuma
**Assignee:** Nippon Kogaku K.K., Tokyo, Japan
**Title:** High Aperture Wide-Angle Objective Lens
**Embodiment analyzed:** Sole numerical example, Claim 3 prescription

US 2,896,506 gives a single numerical prescription for a high-aperture wide-angle photographic objective normalized to $f = 1$, $F:1.8$, and a full field angle of $63°$. The prescription is the seven-element, five-component design associated with the production Nikon W-Nikkor 3.5cm f/1.8, scaled here to the marketed 35 mm focal length.

The identification rests on five converging points. First, the patent's five air-spaced components contain seven glass elements, matching the published formula of the W-Nikkor 3.5cm f/1.8. Second, scaling the normalized prescription by 35 gives a computed equivalent focal length of 35.005 mm and a design aperture of f/1.8. Third, the patent's 63° full field corresponds to coverage of the 36 × 24 mm format at approximately the full-frame diagonal. Fourth, Nikon's own historical account identifies this lens as an S/L-mount W-Nikkor 3.5cm f/1.8, first released in September 1956, designed by Azuma Hideo, with the patent filed in 1956 and granted in the United States in 1959. Fifth, Nikon's description of the optical sequence--front convex lens, compound convex/concave doublet, diaphragm, concave lens, convex lens, and rear compound convex/concave doublet--matches the patent figure and numerical prescription.

The data file follows the patent prescription directly. The only implementation additions are the 35 mm production scaling, an inferred aperture-stop position within the patent-specified $r_5$-$r_6$ air gap, inferred semi-diameters, and a unit-focus back-focus variable for the production close-focus setting.

## Optical Architecture

The design is a high-speed, symmetric wide-angle derivative of the Xenotar/double-Gauss family. It has seven spherical elements in five air-spaced components with a positive-negative-negative-positive-positive power sequence:

- **Component I** — a single positive meniscus, convex toward the object; front collector.
- **Component II** — a cemented positive/negative doublet, overall negative; front chromatic and coma-control group.
- **Component III** — a single negative meniscus immediately behind the diaphragm; central dispersive separator.
- **Component IV** — a strong positive meniscus, convex toward the image; principal rear converging element.
- **Component V** — a weakly positive cemented positive/negative doublet; rear correction and field-flattening group.

The diaphragm lies between the rear surface of Component II ($r_5$) and the front surface of Component III ($r_6$). The patent does not specify the exact stop split within this air gap, so the data file places the stop at the midpoint and sizes it by paraxial entrance-pupil calculation to reproduce f/1.8.

The patent text emphasizes three correction mechanisms: comparatively large radii at $r_5$ and $r_6$ for coma control (that is, moderated surface curvature near the diaphragm), sharing of rear converging power between $r_7$, $r_9$, and $r_{10}$, and the thickness relationship between Components III and IV for astigmatism and field curvature. Nikon's later historical description similarly identifies the rear cemented doublet as a distinctive correction device, with the rearmost negative element acting as a field flattener.

The corrected component focal lengths, scaled to the 35 mm lens, are approximately $f_\mathrm{I}=+48.9$ mm, $f_\mathrm{II}=-76.5$ mm, $f_\mathrm{III}=-56.8$ mm, $f_\mathrm{IV}=+27.3$ mm, and $f_\mathrm{V}=+181.4$ mm. The front two components combine to about $+74.7$ mm; Components IV and V combine to about $+23.4$ mm.

## Element-by-Element Analysis

### L1 — Positive Meniscus, convex to object

$n_d = 1.71970$, $\nu_d = 50.2$. Glass: J-LAK10 class (Nikon J-series match). $f = +48.9$ mm.

L1 is the front collector. Both radii are positive, so the element is a meniscus with its convex surface facing the object. The high-index lanthanum-crown-class glass permits useful positive power without forcing the front surface to the extremely steep curvature that a lower-index crown would require.

### L2 — Positive Meniscus, Component II front element

$n_d = 1.66200$, $\nu_d = 57.7$. Glass: Unmatched vintage high-index crown, 662/577. $f = +22.4$ mm.

L2 is the positive crown member of the front cemented doublet. It carries strong positive power at $r_3$ while the cemented interface at $r_4$ is weak because of its long radius. The glass is treated as unmatched in the data file: the patent gives only $n_d$ and $\nu_d$, and current Nikon J-series catalog tables do not provide a close public match to 1.6620 / 57.7.

### L3 — Negative Meniscus, Component II rear element

$n_d = 1.62060$, $\nu_d = 38.0$. Glass: Unmatched vintage light flint, 621/380. $f = -14.5$ mm.

L3 is the negative flint member of Component II. It is thin and strongly divergent, with the rear surface $r_5$ forming one side of the stop-adjacent correction region identified in the patent. The nearest current Nikon F-family glasses split the match: J-F2 is close in index but too low in Abbe number, while J-F5 is close in Abbe number but too low in index. The data file therefore avoids assigning a modern catalog name.

### L4 — Negative Meniscus, convex to image

$n_d = 1.78500$, $\nu_d = 25.9$. Glass: J-SF11 class (Nikon J-series match). $f = -56.8$ mm.

L4 is the central dispersive element immediately behind the diaphragm gap. Both radii are negative, making the element a negative meniscus with its convex surface facing the image. The dense flint glass supplies high dispersion and supports the patent's correction strategy around the diaphragm, especially in combination with the high-index positive elements behind it.

### L5 — Positive Meniscus, convex to image

$n_d = 1.71970$, $\nu_d = 50.2$. Glass: J-LAK10 class (Nikon J-series match). $f = +27.3$ mm.

L5 is the strongest individual positive element in the lens. Both radii are negative, placing the convex surface toward the image. The rear surface $r_9$ is one of the explicitly constrained surfaces in the patent and shares the rear converging burden with $r_7$ and $r_{10}$.

### L6 — Biconvex Positive, Component V front element

$n_d = 1.69100$, $\nu_d = 54.1$. Glass: J-LAK9 class (Nikon J-series match). $f = +59.4$ mm.

L6 is the positive crown element of the rear cemented doublet. Its front surface $r_{10}$ is deliberately gentle relative to the stronger rear positive surface of L5, so the rear convergence is distributed across multiple surfaces. This is the surface governed by the broad patent condition $1.3f < r_{10} < 10f$.

### L7 — Biconcave Negative, Component V rear element

$n_d = 1.78500$, $\nu_d = 25.9$. Glass: J-SF11 class (Nikon J-series match). $f = -86.4$ mm.

L7 is the final negative element and completes the weakly positive rear doublet. Its biconcave form and dense-flint glass make the doublet a field-correction group rather than a major power group. Nikon's historical discussion identifies the rearmost concave element as the field flattener; the paraxial Petzval calculation is consistent with the rear doublet moderating the residual curvature of the faster Gauss-derived core.

## Glass Identification / Selection

The patent gives refractive index and Abbe number but no manufacturer glass names. The corrected data file therefore uses Nikon J-series catalog names only where the public catalog values are close to the patent values, and uses explicit `Unmatched` labels where they are not.

| Patent glass | $n_d$ | $\nu_d$ | Data-file identification | Elements | Rationale |
|---|---:|---:|---|---|---|
| A | 1.7197 | 50.2 | J-LAK10 class (Nikon J-series match) | L1, L5 | Current J-LAK10 is 1.719990 / 50.27, close to the patent value. |
| B | 1.6620 | 57.7 | Unmatched vintage high-index crown, 662/577 | L2 | No close current Nikon J-series public match was found. |
| C | 1.6206 | 38.0 | Unmatched vintage light flint, 621/380 | L3 | Current J-F2 matches index but not dispersion; J-F5 matches dispersion but not index. |
| D | 1.7850 | 25.9 | J-SF11 class (Nikon J-series match) | L4, L7 | Current J-SF11 is 1.784720 / 25.64, close to the patent value. |
| E | 1.6910 | 54.1 | J-LAK9 class (Nikon J-series match) | L6 | Current J-LAK9 is 1.691000 / 54.93, matching index and close in dispersion. |

This replaces the earlier analysis' speculative Schott/Ohara/CDGM labels. Those labels are plausible by glass family, but the current project standard favors the lens maker's own public glass catalog where available and requires unmatched labels when the numerical pair does not resolve cleanly. The patent's refractive-index conditions specify only that the positive lenses of Components I, IV, and V use materials with $1.65 < n_d < 1.80$; it does not name lanthanum glasses by catalog code.

The patent does not publish line indices beyond $n_d$, partial dispersion, melt data, or chemical composition. Claims about thorium-bearing glass or element-specific radioactive content are therefore treated as external historical reports, not patent-derived optical facts, and are not encoded as element metadata.

## Focus Mechanism

The production W-Nikkor 3.5cm f/1.8 is represented as a unit-focus lens. The patent gives only an infinity-focus prescription and no internal close-focus spacings. In the data file, all internal separations remain fixed and the final back-focus gap varies.

| Focus state | Back-focus gap in data file | Note |
|---|---:|---|
| Infinity | 19.72844 mm | Scaled from the paraxial BFD of the patent prescription. |
| 0.9 m close focus | 21.19985 mm | Solved by finite-conjugate paraxial trace assuming unit focusing and distance measured to the image plane. |

The required close-focus value is a production metadata field rather than a patent-published optical variable. It is included to support the viewer's focus slider and should not be read as a separate patent embodiment.

## Conditional Expressions

The patent sets seven dimensional conditions and three index conditions. The numerical example satisfies them directly:

| Condition | Lower bound | Prescription value | Upper bound | Status |
|---|---:|---:|---:|---|
| $0.30f > r_5 > 0.17f$ | 0.170 | 0.2439 | 0.300 | Satisfied |
| $0.30f > |r_6| > 0.17f$ | 0.170 | 0.2562 | 0.300 | Satisfied |
| $0.43f > |r_7| > 0.28f$ | 0.280 | 0.3443 | 0.430 | Satisfied |
| $0.53f > |r_9| > 0.36f$ | 0.360 | 0.4267 | 0.530 | Satisfied |
| $10f > r_{10} > 1.3f$ | 1.300 | 1.944 | 10.000 | Satisfied |
| $0.07f > d_6 > 0.03f$ | 0.030 | 0.0428 | 0.070 | Satisfied |
| $0.20f > d_8 > 0.10f$ | 0.100 | 0.1472 | 0.200 | Satisfied |

| Index condition | Prescription value | Status |
|---|---:|---|
| $1.80 > n_1 > 1.65$ | 1.7197 | Satisfied |
| $1.80 > n_5 > 1.65$ | 1.7197 | Satisfied |
| $1.80 > n_6 > 1.65$ | 1.6910 | Satisfied |

The older OCR text for Claim 3 introduces several sign and character errors, including the field-angle line. The data file follows the numerical table as read from the patent page image and as verified by paraxial tracing against $f = 1$ and Petzval sum 0.222.

## Verification Summary

Independent paraxial tracing of the corrected normalized prescription gives the following values:

| Quantity | Computed value | Patent / target | Difference |
|---|---:|---:|---:|
| Equivalent focal length | 1.000144 | 1.000000 | +0.0144% |
| Equivalent focal length, scaled | 35.0050 mm | 35 mm nominal | +0.0050 mm |
| Back focal distance, infinity | 0.563670 | not listed | — |
| Back focal distance, scaled | 19.7284 mm | not listed | — |
| Total optical track to image, scaled | 48.6419 mm | not listed | — |
| Petzval sum, surface-by-surface | 0.222123 | 0.222 | +0.000123 |
| Full field over 36 × 24 mm diagonal | 63.4° | 63° | +0.4° |

The Petzval value uses the surface-by-surface form $\sum \phi/(n n')$, not a thin-element approximation. The result agrees with the patent's published Petzval sum to the precision expected from the rounded prescription.

## Sources

- Hideo Azuma, **US 2,896,506**, "High Aperture Wide-Angle Objective Lens," Nippon Kogaku K.K.; filed June 5, 1956, granted July 28, 1959.
- Nikon, **NIKKOR - The Thousand and One Nights No.3: W-Nikkor 3.5cm F1.8**, official historical article. https://imaging.nikon.com/imaging/information/story/0003/
- Nikon Business, **Optical Glass (J-series), LAK catalog table**, for J-LAK9 and J-LAK10. https://www.nikon.com/business/components/lineup/materials/optical-glass/catalog/lak.html
- Nikon Business, **Optical Glass (J-series), SF catalog table**, for J-SF11. https://www.nikon.com/business/components/lineup/materials/optical-glass/catalog/sf.html
- Nikon Business, **Optical Glass (J-series), F catalog table**, used to reject simple current J-F2/J-F5 assignment for L3. https://www.nikon.com/business/components/lineup/materials/optical-glass/catalog/f.html
